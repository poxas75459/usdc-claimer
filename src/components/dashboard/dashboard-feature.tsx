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
    "63oKkg5JH27pmuDBeKPKLgHPLMCtU8k8ehNPhLbSituF8gVji4YgkQWwLyZH4YndUBCncaShNPM5z7pEpyQJZUBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WJPddzw8W2A7F9jpkaKE7DenETAhfcTr8Hbm1gRFpZGm7TUP2H3zk5xK9MxK8kZxVUBUpcqpsAuqhAamQ5KqQ1",
  "key1": "25F5KfKGACqZWDEUe25e28dyePVDCnUCWBueS5iKFmx17DHdjemVKu6FeLAqixsdBM4EJ19maA5nugLTwmYtNJkY",
  "key2": "1NWDKfEcsS1pLiZ5VcAqPr7eZSUsLN8kRJVSnmx1qpGt2u4EaMxhSzb73FN5s8DjoaRHpt3yzaemBWjdBvqWYSJ",
  "key3": "BGnrQkvF9WrhfaetnShArFEKRioDWXrce84YHY2kzdaMwtGBspYhuvcaWrpqJuLX7hZ7MAHkFbs1SbdBfTG2f6j",
  "key4": "4J2JgMdt3roXMSxwWPFy69znz95m3BX963NuMTrthxcBremzyC7MHXqzDE3WM8vKMyRYPRsZep6ZCvW9RBbgE4Xx",
  "key5": "FZ8vBCBHKRRNVpHjYByMvFH9dcmZ73p7D7A3s2fLBF4QLAEsg4TptF3W7Nhuu16YoT4zXh3XGDmypp9kEAQ2iEQ",
  "key6": "2Mo9y4modH77gAPAB2vCqoKyMdbxw5NzPitSrMnprsvoLEV5icx4KumWLmDaCU7jbPPjWxDK4xPgKUZECyibjCN5",
  "key7": "LtsqmWo6YsC72FS9rWRRxMVcEi5EJsn2eKG2GDwpJFJXhh941QBKaun2hXoVboU18NanUfyruQt3YpfhF2WGAh1",
  "key8": "nprWseMbLqc747s7aWmqyebEwmijUKcBqe3oKPcjk93RRim9MHJod6uMHm7XJpSkKL9FnSJTwWJKdq9A4jfZEhA",
  "key9": "3W8Yi2ZjAitxYs5Qe9SZKZPrhsdb39tWL5vZTpXPN2oaAMyoWPfQURisuLtuqiKEBj5m9dyc7jYSuzvWCCwR8U4m",
  "key10": "2GXv8vif9ryfCwzydUpCDoA29iA5HxVVDAaubn4MYbwxVj2CYDNCo2W5wX7mpfNDWeDy5njFwBugCuwK4AQr6tnw",
  "key11": "2vP2sP9TTS1NYf2Udzg6KQTCGhTU4EXeopPGp391vD3gFBrRDf5uAr82gXpjXVmcR5HWoFrrAD3Dtj9scv9t8Fft",
  "key12": "hFe5pF62v5zt9fo4hcwTJBcLkyFZ1dhsEMKS5YikbJeDv61McfLAbCiRwqz4cS7WZNE5wgguWsngWiyL5sqfo5e",
  "key13": "5HU3vR3XTHCX7woDKvyq5aDVnDAwbVh5576n8e8X2EhAkoqGGXcTNwRwYgJ3AbqPc124uFWmNQ2E4jCNzn8ZUMd8",
  "key14": "3DiQYw5V2w9SBKrXFNYKQEnBKEsjCfczStZePYF8P7bw4bkeBjY7Z49ugNLC6PqunVhgzRNkSnFyNLShY2ygkaCd",
  "key15": "4Xmc4TUGNzmc7qGM2ygAr4uGvY4Fv9rCD9BMPUGyHW31n9LjXM2vxdmDjP96Uvwf6yxnbthauCVsMGpGLhY5Q2WH",
  "key16": "41YyHBav2txxaUDiBF6fMoecEPZNYo1vm1B7bM5rJix8VEDK54ovfn8kRtVYTv3VQ6TEmwVeMkwpDMpJa41uVAKM",
  "key17": "2MRB5kTCiEzbiQSe82HZNHtRbSJn8N2NUkY1mY6qVwfJhAyB6aJUqhLC2VCFs8KhU2EUHmVuKXETXSn8vcVURMQ",
  "key18": "59hiEbmG2qGbPjzTiT5fZdWpq326MJhqGVdmLGHHd1Zo1cVDJPZoCWJZmQGQK4TBCQDbamMDUnKH9DwegZuy44oe",
  "key19": "4wGF7FAtFyCB8kV9MrYfhu6Kj8Wnz46WTEB5iSYB3wmdorxYw7f2NLJYji6C4ucmYCcszykspP2i63fWQzPWK8o8",
  "key20": "Cg6geZXz7nhX6gaVrC74W49bojXQy3pouPW8zmEPjL1SbVanWo3LdCDCm1J6RpfB3rdqVgVxrVRQzNV5c8FmX3d",
  "key21": "2ihmy1hAvMPGvQv3JJJuS4N1j5hqyiMfhwqA6j5AdVpxanphRuQVEjSjMu28eQGtnkfMntFeYin6iuMhxNp49Fqi",
  "key22": "5ARAAUnpJQBYMZTcWDd2YNFG3bL8A6k4V7fWyaAgqPQfQ56wr4XoGWtLnquaSJeEu6w1DJrk1HLv6uV14RfkZ6Qn",
  "key23": "33FTK7LYhX3t8Wq731n7h2Ys7ucJuSeyMmH7wKkoRpuD8M9GGq7AxmfJbWwoPRnZCgdiLrkncbwnhAD2P1nPjdan",
  "key24": "5XZUQVbiHmBxkJbWTRgJHDAeKMdB6FhbXfEDJgyRVRtLZU4ht3oZknMi5eAW5RASK96MsUXJgzhgHwYkJVSogWDk",
  "key25": "2GaA6UjzFUCVdMjcHFFu77wZJmGtCxWGpjDupfZ1W94NdS3MmtUQbZQV39fT8ExfGKzSAG16dyVTTcDeFgCg61oY",
  "key26": "34gcg3ZKCezfoFvyjYo8BKKThGx9R1iFTxNi9cwKdHLQhNur1EW1bZoHyWTXyLfWCtcBNSdhQSC5Sop4kZi9Qxc9",
  "key27": "vzz7VQwaCE4bfGGEDkSXkkXPgXfmgdQWWCnDoy2cLGzT1WYi6b6pdsSze9j14P4yKpeCjApK5ueczZ4XhnYNqK3",
  "key28": "5kGjLnzVmPPz39ciLhYTod2JsueJXwsyj4CrSR8nEoCSeiqYc3FbAWAW8BJirxEkGEftvTM2NvWJ1fcQVwCoZqbC",
  "key29": "gEJsTxypV12uuuHhnVMV9o1DA1fRwcxpD9ypMv4tpPY6EfxdyY7AaUHk3g5XaTjSqfs1E4Mptmkzyx4eTLMXPZv",
  "key30": "rSeVxMviydf65M6mgMwMMHm8vS5QG3SuaHC1frteb7Ghd1s3KD6ZitD5NiLCPAwmdbJVYa8tz1F4RzYkBEZ3UkH"
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
