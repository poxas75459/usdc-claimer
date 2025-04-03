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
    "4LPtJGr7f1MyUpVb2JfvX4ESZ8XBBMYEdtgci1JD1TwTTzoNAzyYH7baDCZAv8cRT6v58jDBt4mrGJwajmoFDAK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKNNitjSKjw1hJPyjSAjhicuiSVQjaac67YYYvLRy888eShc8GCp2h2DpQnonr2xi1y6QzttDYomZB7zwcnv6EA",
  "key1": "CtibjHU3UsEoVibqYvJVL9FCCj3o1UzTPd12DP4xCq4Y3bqQQQEcUjTNXSJnwcZwBazBd6eWa8oHiRNgcj6xDxM",
  "key2": "2VvAnnyDgQdEPu67Qg2j3V82SiXPCYCsVaKudyNhqSp3zgGHbnvMzKCv9EDKWdHUmgACs4mPbszdTR1NiTELPJos",
  "key3": "5P6iTDVTMmTZgy4brrdYqaD7hwN2tQZUqeBaSwn8uPQ2hNqkADYQauzfucXzTisj7uu7tHLScckATgGaSmfx4VGJ",
  "key4": "2ZoQiDPXNn3m8rfD6p6stFnS5zwcW5pLu9Fa3ACn2eh24aFTsdmwxspx42PL6R418L9HEX3tR1jaKaBGtWFonPQQ",
  "key5": "3bmYaYPS1V2AXpjkUHWY4Vz664sfTFMfXBzHpb2tjFz9akSi75SJe7qu5n5RcdwHkAy9Pd2FncSz1ZZ6WBZjDzeZ",
  "key6": "3a8w2yjmrKP1qGtknUXLi59QymXUucR8bAe2DpsYLXwUMtxE13sbVz8tAB49QLB64hKPdX7e3KtALM4ed9wRwXVs",
  "key7": "ybtNYDfvE65hTpgzNH8xQszytLMjWYsdjeg1p2u6SpBA6a4FjZ38R8Ywvt3o2CGuG9a9ocrzVKf4gTgZ7ASRBBr",
  "key8": "3WuiQ6K3pV15MyiEgW2amz6eUaKBv2xfdsnqcBvmGtBWAAL9KeQVTBBapHo3XBiGxbCQZtxXqbADqgF5FX15RqQq",
  "key9": "A4zAnrmk1bNRfm27eDD2dR5rbMheUp95j9MmLzquQtHsNFGRB8XpyeGYSYSRwJysWM9T4H6HN81sX1DimCuvpmL",
  "key10": "52PqkLiEwQ1mxGydbour86vXyjE5EEvKPJBTiYZqbLEy6h8V6ramFb7cuEKcU5vDUgk7uMpmgtjJwhPhbVF3n4iZ",
  "key11": "4Fm2hpK13vPa6R7iiaXL8G4oaStospdt9BsCqrVv5xaFmPdiE2b6AFGtAFgzJYd6ZGfS4w2KcWAybMncPynGzPSV",
  "key12": "3CKPt1izZeqCdmLTfSbqfE6cA9FZECepdK7aYiKKaxTHfNNsXAMa9vbtrMTFAQwCWK637KWHfUE57nzRu6gfqmVx",
  "key13": "4X5Ps5YQrdr5vVnN6Fzu2JFHLQtfn8Q9q7k4GCtzSaqesGx2Wv784DpwhNJg9SH51wyM1zvd8Daob3X5mn4eq5AH",
  "key14": "2QDR9PAHMWcEmRjVoUTypcAyzdZKagWqAznn5SUVNseauPhKisihFtTmYSPKhBzwsAMrbQr7uhKWsFm8HvwJTDTs",
  "key15": "5PhuktWvEiA68SNkRc9aRbasG4jm5g3ENQ74ApdCe4E9GQGpQEShaV2RbYPyb1hsXP8fRRWnfept1bcnqcJAhz9E",
  "key16": "4BDYC5QY62wAhjTgyjfWPd1eB5Cr19XdMSJ3oTsqSnXDuyhe7dLA3pg6EGHNeCgxGBEj1D9U9FqJ4PGDK5UGcrmT",
  "key17": "2SEsa56UMJJvT24XG5ZXWZdUJcf5WoRj6g7mEVFy4FcJhBLDd9zxC6yAjucwepWGX126x9cvQ3uLL874uJD9aRe2",
  "key18": "2XEA3pPDv37fcxuWxpBLdinjHfVnMkiH9iM1ed4MQziiSBUWGRYqU5TYF5mb6fMNboaJXcTyoygtfRuavMiWjTfJ",
  "key19": "3uWmjpWwNMDtx7rReoNwmtE2XT27H18825pyU4BgKD1AChsxnCXxnESP89aikeV7KQNPQ5T72Q36dXa4ZPMxG1NS",
  "key20": "2nW28hLz3o8WEByWLdej9DfWESKdZFivb49m2d7sJtJgpSZiks7dCcj2JtAYKMRa2uHPuMhSatSVahA5yjuiT1Mg",
  "key21": "3nmQAVqDrb36xrmbrALraFDkeURFLp3c1iU8y5mC6Nmq9VNVP5iomT83NWQpyGU22iKdyA5YWbovNzJ9sK9qXAdy",
  "key22": "4bDksUELsEENQowRDSBDTm84ZLqLpsEHDTDD1bY4cbcsC2t2DrpBsjrs86nN6W48xYHRSVucHzWPvmtcn4QdXMXe",
  "key23": "5CWvtw6Yz6QX24vqik4pKCMeg3V5wqdF7H3Z9Kpt3bEGbY9NdJsue8N11YMbsKVxZiXAhzpFCY15giaHyMFctLt",
  "key24": "5W8WDLZX7nfBCM8HSFENSDLC4cSHd1vmANPdxqFrQPEPMsDLAUK2sUEf2aVScJjgvegn21DJobqPU1PX76Cbq9Q6",
  "key25": "4Z8qHGCNSksVU9TeDUT8dWNHUEcGwgqAFQpnxyKBzepWucjvmLt9K6P3m9cLcopRGqueoXp42THHpQ4rLWoJ1EwS",
  "key26": "5kMbacgtvcuk6BzzZCv6D1KS9Xc2rX767JMVpsNQeLDD7KdsScmz68d7KhKQtySsGMSfjdTi82ZC2zZ6irP9JVwq",
  "key27": "2mG1J58F6UAHvUUqsx5HnSkK6ZzbPF5vN2Cew4uAPKG125WNFFULETKTEoBd6387WtqrczmKhvGhkJ5FLJmpJ16W",
  "key28": "xpViRiUgjJ8mtUKUyC9j6zYYgUyh7ZrP9pPMtLevV5ovy1dRZmYeBS6W1oBNKXchNwuxHVejTi4sJkfC6sNsXqm",
  "key29": "t19PmNQkRtZDC7idTZwTwfW8VvBsQbAjUNVvVmaWSzXCUqpwobmZjXXSLzjmD4rsxnnx8G2EwrWGxf9v6XLRQd9",
  "key30": "2PJxy5DzxnMpZWazDHRkgGhoUfyePFAPy8smSep5FXKnVVt6jSaDT65ToPRukXNscpFMYhGPZwUvRQ3Bdh1Tmtbf",
  "key31": "53HCL99EgPyEfG1sfHTZzGSE3vfXX8gpr9dGfWtg9yV3fgdmMCCh8SDmRjF9U9vHx78YP3HQXJbNNhnuxkxpxUPH"
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
