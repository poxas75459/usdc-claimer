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
    "3USiBNGB8KTFAjtJJVu8a7RYn1o195uAjjTH1qo8s26jruAWnNDdCwjQMxAbMxBaobHTmjog18KARB4GXmnJGdBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnJnypt5Kx7Kn7HFdzhgjDvNRkzJxxJes6WpR1SJUPzZcE7Em4k8KR4bgStDDG4j1v8NUjccNCexh8hs4trVMrU",
  "key1": "2NV4YrXsj9zEFMctSfeEBPqu7pTh3HXVLCBgyetzohzyumtr1rFst1L5N3JL1zBHhtRjYf1p1EjbhjhFBEPF3mya",
  "key2": "iYr8ceGjLH1ckZeaZoRTUtRQ2SNCj1oXN9mnpxXSfigGrzeMdfcmxgzTNA6kWQ87SwLwGvS3WYVqvwREPVXg162",
  "key3": "X9MsjMohpbrrr6vRRGv1BPd2eVhA8SFaEYG13xaFDFY2VmKKWsrvFa9rhkLm8x5eMncZJWB9UbkghMRZQA8Nwh3",
  "key4": "4Ye37m4LPQkGkijn5oD3X3QtSVBDqYYrHFiML4BMdsbaPP4tjx5Zz8ARMg5947eKZ1h29pQALZKghe115d95v34W",
  "key5": "4GAhR4DQNdBHpJ9V2d6StAjxEotfhNETK3MPLp31BHGUiJQ5VaFi5ULNQnk7DG1Tmskb3wnzGBbgniv9SQxjYpow",
  "key6": "5BEmM7YoMPH79cBLgm8g36kpxKWHXtQ3MWZRwTBJeZo1XxdrgM238Y16LHYt1ynBA3VeAhNJR6v3367VpiafwUdg",
  "key7": "2s1mHrBVJ5skKbGbUvfbVqcnhMhutRSnofexKDs3jLLnPYRp5QCX9TuNSDMcTseb41oVq3E1p8XVHz3Lvjh8uPwA",
  "key8": "4K5g9duWmH3DpN42HrFjb8v84XgjQcQkNhPeTEF3fPcWicgwoqGJGFWRdq31kPrxDjQAwXaZE1kCyPKCD24Ki5pc",
  "key9": "2io87JwmtpjiSi23SptsddjP8Ds3Z6hVfh2PESxfNUaJ2d6scTiPRqSZQMbwvdjX1nf2pjXe6nnkUqaJFM3ZrcM1",
  "key10": "4Gg7ZfLGnLCHCDPjhL7oHLxhoHuqdXFW91BT1DNhXPA2yid84hAb566w91AJBFSkcm2bnEYj4VpUSdec6qgZAbPx",
  "key11": "3QhdFbGaZwmBCceTbxtke6sjsSuwY4CBfps7JgpxWvaFWpHAukkutLocs6vRC5xGuhGoRB964bwEU44ZCjCyG7vy",
  "key12": "4ZUuEsSPJvqqaE26YgZnRfLAN53SNF6C1VaVjMPq3NwvpXYcqPncJvBQKRhMQKsVsTooESotQTxf8gMGAJHcVU6X",
  "key13": "3G5aLTMHe7pabLCp3bGom6ssX4iQmyP3bjXRasSYoNUTJbJRZr9HoFw91BnkjgSqKMiBg7YNBhPWXXAbMy1k391c",
  "key14": "LozpXttchdYbZ9gLKEEz1F5bVUAqU4Af5BRNgg6Nf14fZrV5958VaQ4de3HLVg4jkynTGSpxhikc2f5phGwRMyw",
  "key15": "22keZ9kgSKWLHtUCjoVmi3WaqJk2jhzkrdHfvi2NwgaStA452kcMFzGT4rvWRGn6z69WA3E6AcgvnaqCbLiGzpwB",
  "key16": "4rr2aCoUdF5Hg3qh8kaJMZFePMBNAozHg37iTy7AizsvCmEbbPE2QEB71j7pJN1R1AMVtf9bJHGScwES7pmWyYMK",
  "key17": "4NMXW4EeqZA2WaqWsEjRtNPb26jbSdJzto7f1XjAVFtzdgXUjVBKsbUpwqE2GnjjXAvTnscKeHfzNrq91mKm5RGq",
  "key18": "2h6xL5LfYJ52QraLwEKosc9DveGsnKSepKxCoWLq7caMcySef21YTTPVq4CbzBo6d9Zn1nAbSFMCQ45mwpL3ddZY",
  "key19": "5ARGZXR6Qv5zcyg6sig7xpwjMmSQMfE3RP2exJgUaUqpCcZNwnZvAGnWZm25aBBzs1oEtU3MZf15XfvkdY6Fx5vX",
  "key20": "4o8tEFqXiBSfeAYTRgXjSYZZDxurxytbryfSEKEm6pWCSqBDNHKhRF4KqixaC5S4rqHDWkPCFQ3wXgtbMKw3ySsf",
  "key21": "va6jSn9qZiTnXbUywDY62W23FFYYRYq8LfuJDFWj6yko1M1SX8UBwY425zDCdB8q8QY3DBmdctebZeoJzq7ckqX",
  "key22": "5fZ4r1Rrj9ntNWzasX5UKaviTxCBs15LuuJsHs1pUwaeMUrq8PfVk81UZHAA8kPXKdMRsuYMynggWtpJxsQYu1Df",
  "key23": "4heDycvaeRhGtwz22VPVYTy2HGJyyt5vX5dQZdP6u2cE4YYT8fTH4jemxpZg6X2GWVSmtGH6FTfaE2ns9QBSYMDa",
  "key24": "2kngoPMPr3Vom8eEsstycsEFhnmeuwZgPWf2CTgUVJqQMBtbwfDp57AQebk64rJVKxMb8qsHiHRvNWzV3RMe6jLb",
  "key25": "4dCV9yP4nbUPFVetR4o4oQSWZifwhBSm89VDcUDjFpEp3S2doaWnQC6Y9pD4W1SUcZMTcDmf6JupBu6zaymnLv7D",
  "key26": "2JXW4FoEGgotGNuU9pwGAk7UkixTXfsSfgYRsHGoTT1jxVyz7xYw4Sz4hBQZxLmnzYW7N2fBq5GwukuHzr3cWNfz",
  "key27": "33Wbx88azX4q6hWjGJrNvGhTmgDznfDR7UvrEHRC25uVTxdHDAuu9kyKfsUGFwba4H4rsGitwNdH8W9gdmDDiX9B",
  "key28": "M55mRyLBxCKfabBvZVBkbRbgb5NzF5YZa2H6F7XkGv79zoQEHPpKk49cBjECAoCSMnTGvyLgPC7A2zr6gDoi814",
  "key29": "nTroJCuKTkQ1wzgyzMq5fWNAk8ByY53Nv6RvnmP4BBtx1oN9xKQczcZz8p5k3DnAkBhTeVwW6pmn6hUFFhZjgLo",
  "key30": "a4ZvxRtJLsjY4mE1NZeYdP33hkLcik2Wm3EWBx3GwA3449xATjepj2J8F5YYfFk7EFhUG3LazUTdrUthVFDMvFf"
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
