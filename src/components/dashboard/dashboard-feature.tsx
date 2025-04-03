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
    "2coCZgaDEFW9XN1XiSksgKBQZtYpg7ySjFP6qTEgJfygsrqddcPNvPUSW44TMQcJ3uaVawiSUB6rFrZwM29aKB6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2gVdf8jke2iKSt11MF5yyHb9Pe4w4uRVwKrU5oAv9hAcyijQVkxwYQn8uFEvLVzawkKy52aGGx7xK4Y3GgmKt9",
  "key1": "2TgUSi6MqJGvHf3CJpZ2rzC5e9pBi6S7dxaZ7CEawFcu3afywTN7YnX9DjST6r2m3n2vgWH5ch9TRTuvrTrDnSJT",
  "key2": "5N9jRkLpgHpKdWNbM9fsA1VaMPWziw2QjS1N6sNJU6aU8kMxXfaAyZto8An6Av6jGTAjdoqF9ju4y2iz23UzxQjt",
  "key3": "5QmVYVL8JZfm7rckLoPeCNjMFFBirCHteVAzkDStXAwgdbEYdTsteZDoScS1MY21bBLbLokeVsdTqnCdzqcQuhaH",
  "key4": "59ALKPmRRVeZZQEjA2ttfJfnH4GoHQfQmWVo7MRdRdVE1WgaGfxbiQekaumt9AaoWoNVuTycHZvWgcX18h9H4TwG",
  "key5": "4JT5GGHXM4PGBKfL7gdviEMkwcgjNiut6QDPNLq2xakCeBzcM8U2kKTT3DUkNhMofyE3jzsiL9T4BMnxSCp7qkrZ",
  "key6": "388UrHzRRdyC2jSSxwk69Q1bFPZo5mzzrUmj1siUkCMGyRZH2EpJENyLsjxsA1Czh4e9BN4RVVfqhQoyrhmQnydY",
  "key7": "2hfTojQXdwr4CPRfFphfhCGEafkLBmJeGE6CZyXPv2HhueV9g7YH4aP48mGykPJoNYo7i2H9tMuRo5YFN49M3roF",
  "key8": "5hS5dZJoqc58NoSKi2XkR1WmJeDQ4ad9M4omQ1SUtpAJRHbUTLCBSnF4wmfWoFwaswKGm8J73m4yjfCYLs1Yzvm1",
  "key9": "2DWqFgBQ7ceSp39eQqUVfLKgdtTzZ1DKRDuJpiyWxRLqA45QHMy4YvJrB7cDk3Jm3DW7FG5tHv2e9y5xstxCXFGF",
  "key10": "23E9LfsarbunDJ3HbEggRPoqDoXZkSpsKoVD7tUFiVjwjd2cQm6RPtVrrBSWqGZ5Td1PoiwbFfNeM1GDfYgcU6v3",
  "key11": "hRjc8fmUH58Pf9km4SjTDntUtUC5wkkeTdCJZXbYk386PmTW5tXJNgWeB5YRDpH9byQFwCzUHsTk6avocxs1CmB",
  "key12": "3gHKWSEebh5bTHoQVzEC6dWBMvMe36iESe6dvebRAHXZ9dCDCWp88p3EohPPwTh6bSkbrE8YqXvMpmeyUH3Bo24Y",
  "key13": "65tsJcUhEnKJcBvDw29VVzZjfZEbziwfy3TR6ZpgnSP6j9hd6ZQHy2czvyJ1DSiMiyZoaupF6XRkhPpUVR5vVS27",
  "key14": "4bMfTMGaWMMEVJ2z1PtKCXBoNHbspdoAXe3oUCxYfw7g6Jj6LSTjTJv8egX3Zi41DzhevzLERmDfUv6Jtze8PoKN",
  "key15": "2Z86avL6crckp4o32rhKECPYAZjYEWFJJESyU6p7ry8SPbxYNNdqaDD34hAwNXuayajxnqpwgWjQHtn1gGB8FtVu",
  "key16": "2ge7yrmG7YTfxUmB5t8YYANxwFh51W5CZ6h7HkiXAFzvcE5w2vDK7nhXfGEFpmuwbwvsDkt6jM16zsDkS2NxL618",
  "key17": "UKa5r8unxYeoZgNQt68MjchP4R4zeyAp7nMe2jHrLP4hkVyHhUDFiXoWtFcsnyU6dNm8uDKJV771sVdR1HUifCw",
  "key18": "2vyYibbdeYWqB5yLzt6cdbqNUUzYXex8nX4UMbNuGZP6TFW1TiykMBiPRAhR13VsZDap9gQ37CNLQseoLcDyfpeo",
  "key19": "4Kv4Yi5AyQiWTJaeEE1Nodtp4KUXP2pu7W7doNsN1GN17YZrwziTykskQxsa6jwU7J6oQ3G8t5G5c6YSLaqSVohK",
  "key20": "2RShDviPJRALwNPx6WPwWAeRkjAJbk1jRQ75DvTEXecWkCGbktJbcoVTnDdzzbjyzAtrUVQ44Eziu1aTxoC3TwoQ",
  "key21": "2yzrNdZVtYNQdsBv5YmqxNQwgRdfz7JXgrsxc6zaSUAcJjGhBchwV3Yx8pRmv7uckjgEqvvfeSwimaUP6dHq8zGj",
  "key22": "3Xsu6FXdVdbvSAcG2gNzvAR8777qGBdV7dVeZwWpf4pih7sgSGYLFKEaKUPa6Wr7S8xMrMd4Kw7trLmoYvyFuL5F",
  "key23": "7YDgUpsrJ7gdgkGu7U3VJp5MpE5ALPha2m8ppvzE6ENdpsL2YJ9rC8hQYmqRHAm9HS4vtACy8yRZtr6Aqx9ukfK",
  "key24": "5RcGJDWoeJUkRfv8974f8VJzszR1NRHz34F7r6n3Kq6cUbhLEB5ozxkuze4hCiYzzwW4d4B9KXDqFLCY6hZNQhMS",
  "key25": "4fdT2VQeDVhRXHWSTBu3mmLHL7Mwf1Jhmn67BE1t8MWdT3j7PLanS58W85T4AN238GAvJsFnRARNWm1uwYaXQn8x",
  "key26": "2pgqbPnGPGqAdTncwSuxieFfojzuLXUkyiWZHR7dtSg2KbHAdyu1USmHv6rwVjSp9o22KmcaCvc1VZ3whC5RbxRg",
  "key27": "5rAs4Y9CXduM4dpeHjtoWmAo9z3VudU7TQrUGHNLZHY2To5DzQzmysFHz9gq6xfAb7nwWzjmpAZV5YuiTQjRDsYo",
  "key28": "5mfnTxV6fHfua9y9pMHKasBLLWpwC1VGV5DZABehC4TVTTaA4UFMKts75np2Bau55ETfbkku88omf5fM6KBGEJih",
  "key29": "UyXuR9UXYEBiczFwcMR6awmzrrKZ2KszaSwf8GkrvZ8TN4hXzvX2eLmeMEnarxXq1Qf9NPkDGDPqonn3KBEtsUG"
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
