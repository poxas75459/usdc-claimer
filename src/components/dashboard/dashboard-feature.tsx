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
    "428o8aeSxqE4RruibhahCQpXY2zXGPmWBJDUwx9HHgMXfj1nmzfzBT913TroXNEoGa3mky6yWFMm9hoCxxg7khWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCkcLeyznSd2UqYRuXxAzzL1mzLqPCq3pcSYTLw649Eq7ZqyLEwXsKBbyxhiQRnBQs3cy1pPHYNkuAr9i5GSK7U",
  "key1": "5bdPqCUNG9eqQJuCNmcDzAiiHShY71zKvUhHGkNLcHTny5fw9LsoT6AxgB1WoZpRhKL5fRzjGvjvPDagvepVAVnY",
  "key2": "51f1GpuZxXJiksaBT6YtmpWLaUthqkNrxRrVFvdxondpQuokH3p4V69N2aCyek242QTdVY7mBynyXGExWnSUKajE",
  "key3": "32MQCaBzXPjofFsC9ByQYp8fqeqAUD66DfUmb4oBVb8R8ySjpvnFsbL1yj9iRhJkV1zXZUgdgS89D99Uw5jeuQF6",
  "key4": "5cLuNPbBAdF3KkRetuv65SbcgaguboXUDoZvEHN7c7FVPcSsXinEk5hQ9dc6n9g9ND43z2jevY2aNDrpTj1ZGpfy",
  "key5": "2mDuWE6fU6ccBeg8d17Dsa52VM2U2agfWjmTjGU1gNgzAXLztz9XXkeuodvWQXvw7iqJJ7ieKC957qUjczmS3KhF",
  "key6": "B5YS3EiQVcJKkPuZYeDa6kU25xdxRWhyH3cp9MdgVpjvWE9mQ7nZWVSp1hfrA9kxx7PwsStS7YgTcGFZeX7esHW",
  "key7": "66kueMyJ7i7wDbtEX5RPDgo13vBpz5PgLW7x6wbDGXN3ovbgY33AwsMHcDXFeZPybf2QVsNYGWSUnX3JUgMKhiDR",
  "key8": "6H4Sv6SoCQZdt2eDEA5NCngtegTDUbfi2pDoHH3kxkbs8R88E3mNqtFUxD6C5XkXzQ2jLBE4iCsXRtSw3g3etc5",
  "key9": "44A8yqKVHzMZPrsRCnVFsK5AtqZqacMQkBFGSm6C7VNP9iS9vLyEcvq48ScuCC4csbMUZDV6ao3PanKLNX81yfpS",
  "key10": "6772JvYu5GfSk7HEMWMAPBNDv9qYErgxiCM65F1idnfSSnrSSfSe46rX4rY8Xz6gNgrpbiuQjxcEBzrD2TxJxJiM",
  "key11": "25vhs6A3nc7BBciZQGm4JEHA9UqbQiwWzYmfmdgEhUhXGdpoJq4WUg7vaUKTmBJscbK3TY7bfVjkRV1iiWQCZfAz",
  "key12": "2LfjcAYHy9Ewm5HVrSaxbAgyEG1zsmYi3BckTDSyhby1SWRAodvJDsGFExxSynqX5dSNZ3G8HiuJ7QvsR3NV28kx",
  "key13": "4U2QJrFKQa2e5btFEWHNfYPMYZUawuZ5xbypkN1YewuTkmqtBSTb2Yh8XSd7c22MyJNcyvdZn1ZB5W7xzrBWK9BP",
  "key14": "YpskhGDxKiKKMaF3owua2xeRtQUV31XYzvkKTrDuKaNoxXu9imQceqGVjGddyMUFKUbbjwrTBMwHP2xZaLzuzLN",
  "key15": "4jegxjomBLXdwhSRfzjMc6sRmhnQKh24CbTJjB2QbxgTGpHAh662A3rK86fKFUXSsZMFaD6edRDjJ8K9UyHr2haf",
  "key16": "3NDPftuW3TSBqvZKdwNS52pzwEYM4sdvbWm4wjA5AY3f8mMLZGVBySNczh99nc5czRyN7ZQPhMymHNnTy5hefwvw",
  "key17": "5oAAqNv55ksKZQfzBfxhhnFZkVEM1Vggw7GMHaXRaKVzJNo1z3mDy7oNu3uZFFR4h73vnoTzFsiPSor1feELqzHF",
  "key18": "3tEf6TjQpn7eCcn4Cuppu66ycmbhD6X2qZoJnvFCx5gkJ4CWPvo3QQ7NomdchhBHdY4vaiMLYbDvT4Xmatg6sWVQ",
  "key19": "2wgoBQLpcPxzeUXFU5pMgQRskQgaQ8t1NqJ4wacUQeQ8xv5vL8XzaXxeXSpRpZuzdv89LKf5LxrEZxoD5DFMTt6L",
  "key20": "EdNoSqcKN67oJHTVMJtpiqf6Y73FJaAabY2ABR545kEetj8YZnpCNzDya98tt5vk3WNpppkXFmreBEngurWJfQ6",
  "key21": "5YNV5cj3yRWJL8qCrm7WNJyBr26YbyxiiGt8yv4gP5tMDG7dw37o4ekEH1pGabAbcPJbChZsiKSL8D6fwYXtHaKs",
  "key22": "3efqLHMUfVpEw1VT9Kik2V8NB1i3mHA1wGZktZWKYaLq8YBAeUFfPTqrWU8qcSftJmd4evXEHa8DGEsSDF6aBVCA",
  "key23": "5LX4hFq3NAV25YQ9JhaboR2aticcxtmcsttUmaxq71poKp5EbJ3hpVAWETsWjbjAfiDuuNMuiC9mxQDspn3ZE1YP",
  "key24": "N5jweDk6DtjdyMGefQYxSfKxCDcgYbvWJVpCJTbLVL4oRTCCAneBDcL3HM3LL4FdopKpNwrsj8F6wZpAyPL4uC7",
  "key25": "5w5LS3jZgScSzxaNKoyCBDXtM3qZ3VcAwns5KSREFhRTG2bKXCr8hXSPwv9U3Cg2MuUxwxWr5sR4ZosQsNyXX1ec",
  "key26": "64oGxo78W4DvgJLtZyD42vCETqqWfZdP1jYyUDzNmAnHxTQJZF8V8KNqk5tnHfyDP53X75fGTM8wFst35A5AMMEu",
  "key27": "4VGqEbYz9UZJsW7nVYNmXk1Z7K271XLHiof2HU3Z7T3KtTFDiVNuLqGA5g3Ctj4kvW3vW7DJ5YvB5agpY7CAQ8Ca",
  "key28": "2bvKPKhGtkYnaR3EebJXsPaLqCYridk3vhgEvNaTYbHV2NW1uNr9XSnZasiGTJkd9vp3hbnswbABgtGW7aGcgKSB",
  "key29": "2MWNfoqouD5fsNAnRN3RALREi4Eyff7qTm5Hg9CJSfM7AUSPmCWwxUjtNHMVGMCGpEQbC5Nvbi7wQN4oYrBDHiPh",
  "key30": "3bXYBh5KZ9bsLY9eaie2SoGY21H1fG4jYhYfZZWHeuzrnGYLaCkXZjQeZxnQA5j8TCjgRqG9N7u4qRhTzzcWmoHs",
  "key31": "2LsL7bK1NMoX8udYcmfSJetXC1NEVdQEs62qumjnT3VKoszyvkhQwPDJLvq3RyQ3JLeYAWc8Jcsc6TXzWvTX3LUd",
  "key32": "2EtgjtFUfb2qhdm6moXuxCcrNpHDYQqZYVShzr9YHQKoC6NfMozTkYe4g7wRHzE7Bd39rg1zUMjG7Ck2sKoskphj",
  "key33": "2kHX1UZsfFtyi7fj78QFURTrstxVZETrffQDWj4t9Ri6DkNEJy1ARtHHbXhBGobLRPwyMEvFe9VK29toSAodNLX1",
  "key34": "3HoWLzCPUNVRUxt6RVtgRbHBz6YyR3n2hE6T9xLQyypNqhsXcPK4RLXCFmFDnFgnn2kPYW2LmHyJcadreqba2BQb",
  "key35": "5pLD7zUNHCZBdhPNDDHsKPqTxAY8gWEE2hitVF4XFWZV8dA5DaXw2dyvPbNT3RRD7L3SQ5wKrK2eC3h8umWZ4J4",
  "key36": "4SR18ZyiUQb14bqAVdwNvDEZM4aKCZbt9g3ForYibF5Adm3Xy6VFiVvR9TvfAYHsMM79gwodKs2TrfMCKcQ2E9nX",
  "key37": "2nDfjjh578nyTqXAouTRhSu4Hgcp1r48ZV9RmkQuKhTFqZrqo6A8h68QSdD7pXVNG467b3yA2wVxDMJ1etbpFRxj",
  "key38": "5AJhJk7a4CmAncFGAkwzudWChdw3VKLP15nFCYNw7k9iSnFGm7ubuDVqPoez6cYaNYFPWbbzqkWLTD9ncCw1oVDK"
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
