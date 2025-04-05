/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5sCFaJaa1d16z2zBT7pU8zcKCdSkjRwC5G896Rmk5eXvo8oty6xpCxWJYfD3XtJsE5sqMF714U1qqXkuTpf8hem9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3px8ayDVBCVCpVPWWK8tZabNYFWzWApQAtiNkmSPL4AYeZJqjFxs7pgU5kzG45M7hwf974TuNxGo5Ri8Q4aHgMPr",
  "key1": "3uTjdnKGvcBh3rMM3DYFEug3TihRMBEQ4yGAXuFSC1D3vLNs4hPF3zq24MtKiqvFYH6sABjKf5yifsjAFoaV54Pn",
  "key2": "2aL2Ru19J9r1kSJBVF13vti4R2MdPt7qhDJqD9GBz2Zcgqryv45DtEybVYnMSGUmUUfvr7XEB3ZdWrN2WQvzrE14",
  "key3": "5i25Ydo1A2mJ9ADDPge7XKN72DgaNh3gKpXS4PbriTAjiYk9etBgb1pbdyXUwTpJ4i6GsES1KnSW6G9ANbK6rdH3",
  "key4": "3cLrkzxXmFxWyKjvmndCfWzeAQLomNhfkpz8d2dgen8FFeJRXzMFJX8kHnCL1VcmWrmaDYKBtXqYMtcx3HSmDpPG",
  "key5": "3j6sDpbkaqQFZVPVLBrxHqk8CCQtna2uUrThM9ELFMbTz2x59DVjwyLsdNsPycCihVjtJRvRkvWvModWXiTaAoqp",
  "key6": "Ldi6S2eYAYhvxwcDYHqR2zNvKzfdTTp4gmeocjmFPRYzY2TnW2hA6fAybMG2nFgYzLddZcoFaX2cwspBVFkL8aA",
  "key7": "4xDVsRhWiaNbhGmiytDsjmnGEfL2Eq6ocWJ4j8s19eDB19L4euh9xVz2TVWKW6ugXBNupGzhqmNcvsjCKFX4CAsG",
  "key8": "48yUC6c2PVHFWXrstRRRfv7G7rHWCzqy4shCRkjCns6WzwnxxrrHjvqstoCLNQaqPxXbDtSvAAgX6bUcQ26BBhPT",
  "key9": "sjA4mcCdt5DhUGKdkwPW7RfLgyoXAjyCw1dgLouQRXoteDvDHTSLQtNk3Vw9AHGWvr8o1LbpVimN7jvXdxzG3wL",
  "key10": "4SpABSCNyaatwKEJN4dtrqxxAbihEqfjVn3ijBiBHS6MNjKv86orNsRDUXNi6BiY21ZQMiPQrGNadRLwNV4x1aD5",
  "key11": "3f5ZUXzvgkBKWbZDbLzPmHYcBCxKTQU3oQF8pWxXAB5qB66ZZCsGHEvcoKv2fDrcnsLb7CFvFyD3M7TpcBcWD8CU",
  "key12": "4RFuBvHqHpFuonHUQrRHJvjHPRUEkebvGKkLZa42WenAPbzwP8A59VWppBMdXoGP2C31Tr6ymMw4Zx6A2m8v5qBB",
  "key13": "3effQcSAKkFCQd7B8zLtPH4gDnSNVuZtb1WaaNuyuakh5gEkAFq1cpeLok2NjDWaGJnhFNBAGeMmtX1oejBuWnA4",
  "key14": "RnYrNti7vor6yRVkjQ36PqYegSezhFH9opXQxAC4MYaFmrhJrzCVR499iS7G9kXZYpTCxZYb6vJ8oLPpDgWp3Bq",
  "key15": "3qjXPnmz46txZQLBQUBVhYCyV5KebNtob8uKfgvCjRaBHv7e2th6paJoTghwZZXs6zV6Y1Jv2fHL5QbDjh78SVav",
  "key16": "5JgSDQa5hitJtyaHT1gxcYpW9fZJKtSut2wagencQ3kon7CrkhwMjrdNMNceKpn4LDYnRmGJBDgBsWrAUa2Yyd65",
  "key17": "2KLCPxUM31X7inASvks632MrLhXb9wXAVzEY19iNiLkxjRGCyYoygsEp87ig6FjW9fyhSxvbd6RQokVgGtvxpBjW",
  "key18": "5cdW7pmMhjwkQAFMPna4PBenNQtPWrwhQhnEAVP7rpccsaPk2N8JJrk5NbeMMzevd9QZrHYyB24P9rF243Td46jB",
  "key19": "3BuPH6LYtrn8t68DfXbgAFTopG1xv31zt6MBKCfB5zM4sQ94pDHeb4P8LEFW6q5HWeRBn5PPoY1nCre6x9oFETVP",
  "key20": "2zKWiVfXhggCWWxdUYYxg78JHuvr3EE8rGuKvqza4DQn4BcKKLHbTkZ9fexYDfuZ1xE4inF1i3QKMbkUqEzszwC9",
  "key21": "38BNA2MhNwSHnKP1nb3cUBZrP7FA7RD9dAUe9Dy3AqdbZfhVxiDvkMheb6S6N3vHbWSsoRKYXz8CS25WwennLu7v",
  "key22": "2VX9ZrVBKyfNuy1LkZrnPbFabCjiUPFHYtX68Hd1wFbQqxisnVzTyFjj9UQSGASydc8MQcEjV8kDcxT2t5jXXcRZ",
  "key23": "35ME3G1UBQUqn6YLqrBFbgDc3vY7CopA36pK7Z34eTLAYtN9Bu5HzM9qDTUqmkExhFs2ECgyhJwkiHjENbm7ArrD",
  "key24": "58L6rTmum8KxjobsoHxAfzqMyxj37LyExzf9JpiGfVxCNyj2BNXJXmgkv7WxjiK1ZH3c9iL59C6V6hzTpHd2tdcs",
  "key25": "4SbWK2yM3xTtJMrMD3dfCfzkgxSifSH5GgXB5zQKNEXo5kArHxi9cPPyV2qug1HUoKmeuM5JkrwTzFRiNpxyTfCC",
  "key26": "2Dgz6RsBghHckQk4yjeFZVABa259PTAwiZwSdUPHRh8tNszPHDvYNLSGzcy43x2NmbiKpenW8a2F7gEgTydV553U",
  "key27": "9ZjjuiPVN8noex8qDSmxKucsksRb5QWtJyGaPNUkLtYYPwsPKPjFCaJP1BwqXTup3YHkWbLczcCaLiYdBg29wKS",
  "key28": "7vhdhm6dTLu3SkjG4CLwQVWbZ7u16JCgh2MSftNKTFjBg1bA9RDDWjFCmUG3dMQPtLZAc265W6nuReFgjhMMdUd",
  "key29": "4TmcDE4b6qDEBB3C9nXWeRszvTqqi9CCs4ZogHBA3EtyKZ98UP9gZhPy1LRH6KGKFgQovhWfCX63mgt3UNZVNryZ",
  "key30": "2mKaXKvusKy26ToRvSaRpFYRa8R6hDQipta9U6Lgks8fUV49tRbhi5xVjBxnubZ5zhreKCoR64SUCjT1MnHDzzRL",
  "key31": "67pboZMX66ukPE9o6z8Nv99AfnAHM1bSfNMQKqxeCtbepzeyh56aVLerCuDmJK66Q8muMcrJneCckmokou531ovx",
  "key32": "BXzcbgoNg7ZtFBsrC4Yw1ivt2cis2oWDY98o9EK8Z8HkFFBVxw8aruA8YT3G5gpFqyeXB3nqRm8ANLCdxGw3ht6",
  "key33": "NmocjScRHCBkLBmXiuG4x1iRz1ga7nvkJEuNgxtYbXn91xmhyER78V2AubGv2DRmu98Rj21t1BYLRZUEt8nxeXD",
  "key34": "5vUX9j1gmuA3xn9NutEvE1zD61iMR8WbsukUGp5oX9MmH6cnrGhYTbyFj8QeXYU8JkcuN36XkU213mQfGrTR6jvN",
  "key35": "wdbMbrkqyYrNmYTHFPL9Zs5yJP6FeDNrtxfnzc7xVbbnec2JfpjzNKCp9y2BMnKZr6av83mkLhe8VcarhGsVAkV",
  "key36": "2rpcStuVQSeaaMimvCEom65uz3nJpiTaH4GHmjSMo49APD7SkFu6EMWh35a29TAstFGUjDqwgJeDwRSF86Q453Eo",
  "key37": "5CVMnQJuDGtepEp1WaRdcUQaJTF1BNzAbZgL6LcE6uHjQAYDiobbVv5tdRvb3jNju9PN3CfYVyTYjomCEWJvEB9U"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
