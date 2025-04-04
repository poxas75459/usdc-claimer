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
    "yPEEtmqRe1YfhYB4BWd7PFSysv4MAR3SqV9jmGafTNTiGQAzuJaR1fmPprXBmZGwsQba9i4W4oVBZyKyyM9dUk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYkfjTAviK9zkGULsMqBP7sAHvFCxBdJt4pFkRzq7W9ZwtsZo9pRFwt79jgyvbEbUvKkoHpuFNF8cjgeTqRstWv",
  "key1": "2h3W6zWSfLeWCLK4k8RE9eF5v7yWFJuRAunsaMfsXbedd1fdzjJTdTMwTDjYcUVjKoPL117dpj34zVJomq2jvW1R",
  "key2": "bgdzKen1sFLWUX1fCkPD5mhBPE9BjgPmMEMQLNx6V5BGy13r9qkFHojaCyobxxeeH6wbv2brVEmqiFnxgbqbPAE",
  "key3": "AAEkWrS3t5jGXnpaTtmzdHARgimGw4DV1rqfVx72MVg86uhVN5ezuRF3hRNvfVBYCXVzjuVpsxpcxKPD3BYENTw",
  "key4": "5gAPmde4vt9RsehWB21UzXzmoraESqVtr386Pc4iaTEnEXe3WyC2tEGvWgFnj25rMLwZEq9ropNw1WKg7chnZvB7",
  "key5": "2PdRCBA3ijFpmc6tJ6aXm6wqAxMLBgpWUhK9m7kDtdBWsexdTicJwsBtMsKc44QhpkUHi9RVoNHXZVvypnikZjbN",
  "key6": "XidVQ9AyY9Uw7zctC9dLxzwLWNfUrpBSEVx3Gz7bPUc1yQtiGWvXUdkZBoYa3Q54XMxS86QN8pfkj6ADdUc7FcU",
  "key7": "3RMzEtY9XLmVcPxF42QML8b4aeP7i24J1bF3Matr4qQgByqrBZ3qAENHPNkVTq2XBCUm3YnHWpqNDCYVXuZVJuRK",
  "key8": "5c3XVZJAajCm9NNq2kFNcpvyuKx1tvRYTdtkiFH7Jut7q6MgoPN5B5nywCom4FHf9WVw5xxq2zHbt4PgDdaJGU3A",
  "key9": "3PvsTDnV2aAtUo1cfY9ESj8P9d5Xmv5j639H6qySTApeqjRCVzpkN27qQyr5QB9s2HKjShEEJx5MGfyB3wvwJuT3",
  "key10": "CW2g6M8onCUaK2EN1dckY1XVqn5aScruTkmP6a8B3cPUNqDRRKrAVx3BtviVkpWr8RwrvkohXo49MqNXCFXWCbq",
  "key11": "2MiRQyvjrAPAiGdFVwqVoF87E9xUGGbWNbfJqjRdaYr9jrzsy2FNn9oVKhrb4Dq6ynQ2BbhbxUeYhRShpWYTFt5b",
  "key12": "5uyeZERDeNeSYSe6viqktuxAPPeNyjvfoBaAkBJPxTLH8nbNe85SMfFTw3SCjcEEMM6jzftV2h6LobefWHoWef75",
  "key13": "4HMhPf5uELrk7T6nMN8BhPT2MkJm56T5WsnN87X7ddbJA7ppgAwR7wRKFMemjVR26wPRkg6vxm5jTRZyfXijji3W",
  "key14": "5YG3DwuenudU25o45aWdDPJmAS7672GLW9pR9iQamTyxnQQwiyZ7riVrzgo7HDLb5mXLF21ZBYsvdJBtV6WydVyf",
  "key15": "2aiC2vEywifGKdmWUGb8jRyE3KRUc2CZ4eMxg9gdKncpioax4jcg9i4XM6Vnf5ZJvwzta7R5LQtJd77qEV8N6YWx",
  "key16": "46NL591ykzYNyKz8xA146LQJQDY3UDxeJw3A4iN1DVZZdA48TApvr2t7L1vLphib55cCFBQoQfMHy6BLMxZiYJkQ",
  "key17": "4mx5Ukee2GjyHLRab9QyFh4jzLWCBj17937utXtZV5fUPLDxbmhvpidZaS8wbaFKNaAeNE31QdDghK1yjeubhakh",
  "key18": "2jYdco6tNW9Y1dpaGNY6TVVyK5gBTjFtDd8zDVGEGNLhhzGKUWM9A8Dbvj6H9YEZBXZoyjH1GU8nDf3572u2GtUo",
  "key19": "5zNc8wusdBubHWX41e24z8cCczWANcb8kG6m811SPez4ZeKp1Xi8pvyb9FedK1vB5rhv3Xjk5KiftPrCV2x8Kxdo",
  "key20": "tbeDjYWfhS5UyGB4z6W3eQ6MRzncAz3hc2zgoH4NHJuDutvNiyCo2ogXupQvpVhSX844KP8hQpcLoBGeuGLRvwf",
  "key21": "5YeKkdtCJd6nZJhjXYamFnWbFfiCRHvsZ5jeyu7PWaWxhXVSGnnnrcN2TUAABPYgvNXTCEmC9C2fNoZHPpM1U22c",
  "key22": "2qfeY9HZb5aKqucJXqqymiQSL8j72UoPxjUjASb6o5aJ2jqyFVd2rRpEPwT2ekx8qVh88msUHdx7tuWUa5WtFeyt",
  "key23": "k5LsuSTS8SXNzCZwVkhjGYxoKyJmNPsKTkW6by2Su3qSxKWjZPiu1BYZ8TNoN3MxqQMkDWvQbyj4pyN2HhrGGgc",
  "key24": "31PuJUz9NM7niWPLy8y6Kt6P5qUP4HCRUY7FDrh8xjduLp5HjK1MVAB6aL4pwMoWdwX5BfjyzbH3MSAPrTRLutX8"
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
