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
    "4HhhELcUN81cjMUbxtkZBvohUsMN7wCC6ED7WnbohEt4T1dhHYE1dLVpwMUYKa2FVpULD3KUnfTFtRLt1fuqcFS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiA2tQQtaEiUmr9w9h1WdWEjD62FJw5fLzG2Cm1zVX3unV6ipmMjHnMkyQSGNeo5Wf6bK1TCR4fHHmJpNamztZ",
  "key1": "552DG3XrzJJQpQ6UuyEEDesfCnBz3FXp2XdHrXHsF6EycyY2xNU5J6dvQgk5PQvwjNUViAJfDByfyUXoKc3xV5nK",
  "key2": "4XePnucaP5oxFpknv7JuoQLsGN22jTXqCgmcza8mj3LxvL5yc7jJE4ZBARNuMckBPJ26qBcJVSUJUcH7gLNBkYJE",
  "key3": "mjZT51ANtDmPNj6ybP2SkD8m7ZC1VdrY7b75JxEo3zyhAfKQ1yhy7CrXKS992yTGmfCigZEUHdabDMqCDdvTPme",
  "key4": "3bCPTtAkEAnoRoPVyzUwmGRZySyJzMyVWagv3txk3Gjt3GVgCPT3LhWHJJpeR1WxKReEBhnkG9aNkCsKU83rWVJU",
  "key5": "5vK73raoyu62xqbZ8zv1VK3mLgeu8jSPHp8QMr2pk6YPZrG3wWEj374xrbSjCaVjKswZEUfFsXidazyHLmfuBgGq",
  "key6": "4uu9yt7Rb3V9b4fSdmQ6s5yJdZG7Q4dkZ4e3qGpE7qgEPZXp1opetTDtfg3NfgW15vE3JY1rG9ASsahjsJM6AUX9",
  "key7": "34qHHJ8UMKfctDBs3V7Xxfk2BB8eYzKQJbifJGgZHJNDsjctmgz6prgpdpx7iKwDnonHQJRnhua9zcN6MhgqRVJM",
  "key8": "3DSsrapUKTQCDwWQDJyVa85eYWnQCbXCov7KBeWaj2ZBeB3hYpuyGtYHz4wfoAhBDVNgnQF4i1CFtQceHe8PM4SZ",
  "key9": "2fDZ2vNP2T8jQYngyUwM4pT1NbyeJM7bQ7CfdXYCHyLY6mDibAVimSTPLqyzSwqLpuesTyanu3sfgSgt21Zf1top",
  "key10": "5WSf2TLxv448jQhzVo3ivpJ3oaGZf1aRF9DF9f6XvGwSmSfiEfDSRbs3BmmuNDFXcZVJz7ZMVt4LxpMeYUvne5aa",
  "key11": "3JeZ3DYtaRUrjBhei7K2Y1LQzof8xgUM2N2QWj1Wi9XWZQCGQQN9Gn5jhjq3hFhqvYoZJqeESQMdxRz7cccK6f1d",
  "key12": "2QqAh71TBPANzUdJvdBavXTmbZ7Ha9ViswLSVXR5bF5PeXRkcPz6tZ1XyU8tkyv9LErJqStvYUxUnmmG8Yd9Xxq2",
  "key13": "5jzmsWsYtmr1mwyDtdbRUw5iBcD3W5KRYCdFczRcY62RgGHv1KFFuqK6jx8GXqE5uWJvNnc9ppXfShz9xTMGJpav",
  "key14": "4ywqS98oXCyqpkozMzuJKuThujeGtTHfrNfgZfJSG5CnNgH5DrUw2QkpFxiVQ8hB42hNRXtagvivFfHRD9TLYPcR",
  "key15": "4tJ1keyigPqPooaWoQ5rB7cfXmW5y8wfoTaHr2YZutd7ksfqvXZUyNXoijZjjDSbJfMj1RVg6ZqreXrLRVGNFeVY",
  "key16": "5jkQv9HfajVUY8toUFxG5G33bvp839kUEBULPb8ruy1pW8tnvXigk65dCFe6YaR8aytzoXNuAVPL8pVyrNNCBoxo",
  "key17": "2ExSGR4np4QwTeLHSh3ksJMLJh6BJcJx621VGszA2YM1jDZ3943C4FHqLG6WpJmo2zEZgLuQP6ZS3BmT6hBTnq6",
  "key18": "3jtTKMaaSFzjhDoB9ET4e4RK4SvdEoZv8N9bAvXXccsAFCAY3UDQDoRF1RUHe8xPDtpzUZYW44Cnyz3oK1hntk6n",
  "key19": "5gpSbWv3qrzKWq5j7WyUGmVwaKX6e1ZMcUvgjE7tGNbSKCJe9KLaBXLPsDtDoPDAoUoG72sMcWhR7HaG9X4agFiU",
  "key20": "43NvoPM9bBosWieLaVXqUvV1mR4E8bKC9fuxGHYAc4pzeaY1NqojtmGQanVDxqGegMU6CmoAziowYDsSSPLa1Bok",
  "key21": "3mB4aGdacHnwoHnmuijVa3QuiGQrUPx1QdLZFgVkT85eJZQBauKk6dVqZ7YoJJD5zF4GPJPXcHnL2a6DrAbXY45f",
  "key22": "5o5ZuYN1kyLhtKdMHjuqmnrU7dgmz1FexwtoNbYUvVZZRVQmg3uaVhZtbBkT1Jzn9SsJWdPnMzfVZPGXTzPPRd7p",
  "key23": "63oFuQghCyq3WXcNzbB8Xhm1xm5LpeGrYEMRG6fjoBTrtAr82oeWx9o4iTdjHMbR13DZNBJV4qUYHFJyDUKtibbC",
  "key24": "24hrsTJFV1xY6NZ7T5gxBvNvRhykazUfLoBoGWyu3HmsouNuZ7WYBrfjcxKQMntTVCAQLkENJ8FXYHZURoiicz5i",
  "key25": "2osMQFuEh6h1mhmQG2h79c7Suta1JxCAzV949knm1ibFiZ1PcbUL7ZRQ7xD3cCPRjZwrtZvt1YZjDTCfKHFLsBqQ",
  "key26": "Uv4y8wWFM8uucBbHqCpYcvnzrS6JLzcW24t3EgjvktqLqz3BYfo6L6FuqX8xJdJsJTWSXU39ntsWaai3sdjTS2W",
  "key27": "5itwWNK9psy2UjebUsSmxd3KhXnZU7R9TEFkUvPh4oPH6EBKEhwPNWHVUkKYmX6woiKrzaVAj7x9gtzBvmRvqpzv",
  "key28": "52guETWakTJzGbvzUs1Mz8BpCDG24wVAV9ZBbyTWqs8jaPYyo7JD6CyAASDg5WS9eiEcrFUvbcceXa4ow9RWkPes",
  "key29": "5pnF6TyWYURjwcYXMrrBGRBu8m4nVX1GXxp7GoVq4DJ95CnFfs1k7MEvvNrT2nGqomszZ3E9stf9j3RGoVkxnteo",
  "key30": "27aBaWAjgWvnZFYDSGySyT3gwi8HqhqR8pyyXX4pMQGonrAGHUt8arS1APPbb3QXiPsQp19yLW9nDSTikpEVWj9r",
  "key31": "2yH5b8uCkjFGcSewNo2yQdioR1b58JmLgAC8YYeysNNyMUynirkSJRrxm8tnr8sizi84JwZazU37iMkBhqL318Qv"
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
