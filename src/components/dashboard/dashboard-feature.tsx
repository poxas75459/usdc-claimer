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
    "2fVMDLmDubyCLyFMGJKYyoYuRSayZZPkZgB8sSDbhzLb7d2Aq7rJwg5p3CP6QYFyEnnqV5a33KZge2NaBSTVPeow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvZjhzXWDBpLTw11nYU6F1yFBNKVid7MSfEdgpbWV1vKPWQqJeaThtLFuewvo8kRbrM1ve3SQJmKP9adLGp7CZx",
  "key1": "2cdzKKxus5vGYVHAdViUuoDhfMC6iX5zGos67gqk2DKVuQMqY3PqkR2VuPYJRKdWa3pWtPnZjRqpYYy8W57JgFoK",
  "key2": "41XQ7bcMi9s2xCXXYPCPqxDP2A2bXo8x1e9KdRzTtra7pipZTj7bAUMUmQhPRPqUt8r4qwLD6EyJsEosHyj8dHii",
  "key3": "4ZeUCmuZY8cG4Rm533UEPpzRqc8hughE4wzJbisNQoJNvCSksPRBPQsT9aVaM7PUbmB6tehfj81NBL2Nk4UheoHG",
  "key4": "2CYCo8gCyotKbGSc1wYjzM7zdgCXUozjHJJjA2cwQgREaMMNiQmJiHy3WMn49ES22T4cup3X8uuPgLheFe1VG2Kz",
  "key5": "vFpUpLm49no6qoSxZRNpWaxbZiaexebgMCDCiHiJ9vvTvQkC7D2Eumuejxu4zoxgTEqc2bmx5Ana1CoRVpjZU6R",
  "key6": "45BGfbxkNfa3zhmTQWzGZhXzFTGiMsQnck8i5v1bUWohmveKuLBa1dx6UtWCogjnSTLkk66DXukhAXzipRWAmyED",
  "key7": "43UxYAowT4HTXpgANo962oDyxayDTduWz2dm5h3uUXfDXKfdNfxGRaSTvMPUvVEeeRkV1btcrKiDYXSm8Zs7HSaB",
  "key8": "4a8oh31RGHPSzgAaAkRxg9ZEd5nB2G8dyPG1vBYRFk1CzKrkPzF5hdVYjGQdmxURgwanPnNZfgqnM7G61z57eDx",
  "key9": "2ZAnFFxUgokZesCP98F4jEeNab3j4U8nMBLZ4aKAhmaDKc8Awt9n6ntbKJEoN8kadiMginJG54BWWAi71EHuZg8N",
  "key10": "3SRzcaEnHqmskdhyBGbsYTVwRbqgJCtHvcjjkBYh6nMkqFH3prxziM3W8oGZZxhCAgiHEK7G4RooC2XeWrcWm4Eg",
  "key11": "3BLbEX9dK7yh4LtgC3QE7FpcRiMhWc5tmEgF47fkWcerdcQ1PFrFFVWWzKbLwHLSjTFf62KtGU8hfsirsPoqtxK5",
  "key12": "2Cbu4ZK8RjZy191GU1tjwY51QauPupefK27YgaFnAnWPhjMrwWmrCu3qGXkCnRDznFZaUbyCp83AWuV8s8XpYowE",
  "key13": "3xForxQmrzr6wz2K7Mg4kcvXgY2VorHTeGD47MssgchU3481aS3oR73FuMzKuzd2qRFWcLA756VytwnvhGW9Xwix",
  "key14": "3XMuPLHCNRG7T146E8eDidBgoWWSmcE7nrFv4HnPe8i9DmS3e5VmGmqH58ZVvXhg5tR3uBxVqtrSfVuHzKUaiM4e",
  "key15": "oNojKXZMbPm7NK8oqJXNMPiqGFucrabjuD4VKFwDDfcxdxaVrCjoAign1d3NKFkGipXBPtSrdUSD5CNP6qt1U6w",
  "key16": "25xV78QguwmrKUnWoJwWGpEYC7FK4q2at73cSYtCng2zCtT9HDXjdYkXw9sdwWejT5P4TKrb1CG1NN32PdeGUaRY",
  "key17": "5SFphzaa72hvTjWTQA7Wx7fUscqiYY5oZTyWrbu1TWmBnk8xpW9WAm9D8MiWgxBFCcKovT51eyk6T3muykVFPyVP",
  "key18": "4zGNbx7MXfaYn8XuxSeeSSNunT12Vm7rfTpZ8eGp5SuqhZW3YRKTshqrknAkiS1HXL2ajWujLBrk2kgKFXqaxgex",
  "key19": "3rWL38bm1skLDW4GrU4dp8gy6hKYH8Q3jkqaTkR1VLtPr3uramZy7Yz3VSP1PTwuAtXZgJhmjdNknkoEh19wnFot",
  "key20": "2toeAYTFExXvG58tANq3UYRGCUYaEsxFVbFXSqQmhUxHL1wKPkr61BcU8h9vQaZfb5CwrkWQjBFaspvbQFybD59s",
  "key21": "5xfLvoDPrLPUpVtzMgDhcaVPz6fvKkdKCRi7zLDY6JcW7ZnqhCo8TSCCVKkvgrsMootrkrhA5BZyCamea8LLNd73",
  "key22": "4w9p67bjkdLnQYdsG1w8pxr6ek7nHcWtCosoGpFKbXEkWTAJCWRiaT62jUQk3Xie1HXdEQ8xwdmGMRyAsNU6tVyL",
  "key23": "21HeoSNNeAcDWLndLKvH3CLr4ybb4Zsu4N36cSuFi6XsZ6TGNWjzLkqNgZdbehjUKM4mtYHBVdLticJMogzC6mF1",
  "key24": "Ky9BQwduah8Lmjekkf9WQdt3EviTnUMnuywfVMBoERdYa7Ndfa81AzvywMmyHr7gCZV6LoiyC1K9uCz93AUJKar",
  "key25": "2MnRtaayJG3va8M3w6RPV3yLarKe44Uq43ZZYBHAGpjEGc5xEoq8hUGJEec9WWtV2PtUrNSM3aZzaw6AfhX1MvAT",
  "key26": "5Xc1Er3CrNShpErKVDNiskGKrQXY3LR9DAokifwxsc6zyJeVqbHLDPrqjQz3GhqNNL5VzRi4sN9Us9iSvDQuE3H9",
  "key27": "616amWdTkUFxiAwaNQPEYYJrYcKCRptbdpQ2p1EJc5F6NaCfDFXvTPHmBB8vNjSfivVe8197XoqER91cacv5xBoy",
  "key28": "kGUeKfpMJgaQee4YjBnGoWka4ZRq5611JU1Tpjrt8mM8aiPw8UfG2NN8EgSXRvAfRxk2gb8dJvzdE2p4DG37gej",
  "key29": "37Fm1JqmPxs7bvbq8JQagsvHeXkNznYbdJumLAbUyjbRpcCPRqdXxhWF5vFmf6yDmmKbWANfc7QnwKSxvK8Uu6dB",
  "key30": "2xemPSTDJ8mVWmRxnY2ND4mXcaDQGoCTLwqhn3TSRrFnk5zTJCu6ynp4eJe3ahocQhqkxAQufRjXs2DNAGqZ8vJ",
  "key31": "2dbNhMkJEgZ12bKiVizghauresjCsMFpWf3VpsdixFiocZpMMGuGodVb9SJSeZxHzpt6jJ5j2NMsNJjwmM8nvYtM",
  "key32": "4eMStCxMRxS8J8tcc1GYqHo9e1Ms4Wk5167w4j3qpZxCAFRJ9fw3AZUz3Jm5MtySHgfx9bTbGmBTvdfVFgmiLwJ8",
  "key33": "2jfnn8dEvpAyzkxd8RDZQnZAcgeHLrFH6rYPwD7M7zoebEWNHN1Bo7K9hKKuyywJUR8G79758RqzQhv31WJJYTQf",
  "key34": "2CUqmitN7y471L7m5BAzZW74G7Dsi8FkDV1osGTFgaN9EjkuNEpUV71LuNDsV4ESEBvZHHTjNAZSyVVSkkJqxWXn",
  "key35": "2oobuQo4jtrDwhnqKtfDXDCKGubrmhMUcD2xFt6WE1m1ZHbZ5jFRBxABmVHrRQzKxzczTJLSHhu47eT1MCqzs3sX"
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
