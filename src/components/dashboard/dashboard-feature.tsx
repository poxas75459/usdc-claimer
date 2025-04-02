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
    "4bsFcm95x1Tu58c9pxRQAbwwk1pB9H8M66jRS9czix83MDF6M9uQNjHN1dMZxpijhxcuAkZujNkdY1GwYseAbrUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6zbYAXvN8XELFdtNgm6yYpU9U4V21meP5ipEgPfxvv9ueFdDssE26KE59dDGtCWutPvASuT8F3DoqiSa9Pmt44",
  "key1": "5q9hNxaNrHfnQpzekg8uP6nNXQxPvS9NkW46w5JaVxhgXmFvnypK1ETYqQvjgj11ZvrZiYQCJaxkzufba1i5Jh1n",
  "key2": "34YYvdkECX9G7D6dMKF2a2P62X325MT3ysxiQqPPm1f2geHaeNHXczbwWzvxSWRvQuHT1zjmovbx8DHyE1YUxwMN",
  "key3": "2qeA7Q22rs3gqPngTHkXFcxGiUwXENL2XdjAtaxvTieNJUxrEJVHoXHYUnyV7DTeN3dsyThTcQ89j3Cv8bZ2xu9H",
  "key4": "28QBNAFXYcwbz5T1VkoptLhVKxbtBcZoiim7x1QSaM1Wqd2bSnCChqxMaDbSuWdwGBBQymiVvuP7tnoSFa55mze5",
  "key5": "2yD46o5WU8t27tLCUYMUyrt8Unc2dxfKTbkrR8NivA7UgWyiHZ5tC4zExpaUMUE7sJwTaehb5jSiwk4o7L8Swpa3",
  "key6": "4ZHhZjWYJdddXr1cYzLzdHv2daXANyHX9ArNCTKzXFeMFNH6TbEFv5aGCiKTkRzJyqL7qedm613dsise922A42ej",
  "key7": "2ZHbXKZQkZjs52JP73J1s6tH3rK83Xt36xcjgq3icA5GqN5Hud2YdyPACLcDG176nhUBp5Rcr92mTKLe2LY53Bjn",
  "key8": "JZWYZYPkcSvXFWSKGiJAVxg35wwK7keQ6iD2q6tmqDXkYQGPvUTDsfNWVG6XkWJX16gxHFaYTVkvsah9PZXWSdz",
  "key9": "2fK51geTC7AjsB1EGwj4XGtMRXs28eXuUeb82wPDRtLGzPUtFUQr9zmzZbWCe8H951HrfzPTdSfqT9VipN1R4MBz",
  "key10": "nm1LX6Mk77KZGffPUU33Q1jpWBbFC1pFp1q4wMmDJYmZzJk5ELEpdAdtoJUhEXsiy17uCyio9YoCV4XQLF2yg3r",
  "key11": "pEbVCRKuFXPRh5UEREG3tKfQv9QTtm4J9jcL2B2R2DLEpFK2Ycyf3YrNkHT2JJ9Qzkx34dH8hnKABRWp7jyr767",
  "key12": "2pwHr6ELi9ywqoveu5kkogxXAdoYzg1sBjWem5W11WXbeKa5D6UxEiHUteCfJoV6vD4SwpYGrLT5eJ83YW6Ey9ww",
  "key13": "2NKLfjSVACtQ4YeqEY7PNQ4nHNyuKcc8fW8pYhxJ4cNtSEmJrMZznrLUjfGcCC5uzU2jsPFaBS9SSPEUtdZNTvCB",
  "key14": "3aJzFu8KizCv8xgxnKWvMP4JwNfL9XUdm8qb3oLMxdSi3tVyToMfPCpVrCp7CHPtuerDaY7VGMja8kdZG1uiZCho",
  "key15": "6383oLFo67MTcy18MqGsRHUxzLUYRaR6Q22svW4WfQazdxGrNoGCFQn6M5GzZcmvRzw5jynApq9xiWCjqiXDkP5e",
  "key16": "2C9We7nHucn3esT11jFbP5jos8m3Udg5cC4so9XCo6XfGMBuRzuNon39cnoBk1EdJnzfhUBzmW38ZBuQ9QiZ5t5o",
  "key17": "5946MZAcEkCinK35zTCbKiPEgfkrGsuC89DpY2HvDKjKm7JatdVGKS1iE3QBg6bD5QmuqxwEnDr5mo2Mu6sws2mq",
  "key18": "3jcXH6QqyA1DttQJpVJFXKCHzAk6iUHwmhqkqXYCeXMJDTDTXPTxdoNYhBb6ArXKxcsdzBvjrwRMvtuHncHEfhtd",
  "key19": "2dVaWfAE1Tv8NAUU8rYnVtzMpC1WoDkjBiouR6YtffyMBzDJxF1g6yssUDZQnLpbSgK4aBdipP728tnphmu3MxNR",
  "key20": "4HSqdxFEoxVyLxKXyE1C9H8AKKSwmHNjgbc6bTxBmAWW8XTRzXMjCQcmpZB4Q4AfqTHSrGTvSAfGMh73eBmMZgSA",
  "key21": "4aULhNGS6SocKEy5rGgfPjXgz3EGQbfSiVAwhLW59piVGiWwYemARbpGTgLmdxnaJSYEufHtbNt5e8ASRtN6aNRV",
  "key22": "6647AMqc4gsS2uKQgpHWAoaYMbuk1rhbz7RFj41heJai7tBKkKae2NSdbB7HpG43WRi5yrkAkkJWE6xksCwx13pm",
  "key23": "4pr1SBJmFjjmpqa64ZdLTKrfj3dFrNhEH2LiQMuhqQEaTcE86q218nXJb5PNnpy1PBJwDqbzYngkCJuy35oPFPrj",
  "key24": "GtjsTfjkgQpBAso2nRodNcq1B7Vo7WV3MAmoJ3owJZab9a16zUK7EiwvqQQCoi35B5C8g7PzrNZpXHLhbv1xbN4",
  "key25": "2SiTJhYaB6xu6RcDY6qGt68X1oSyVw9ehQy9Q9qephRUn6kEr2wGSwJrXu9YDJr4rUYWrD4dqKEConqurqZdhMHJ",
  "key26": "4HAYFc2XhEz7SK1aJ3bvZ8gzCewVJXCGoAqqDP2Q1W8QGzE3kftqFpp8TWUGZJm4nK4M4x5NhcHPC9jwe4K4t8sg",
  "key27": "MqBt1cFZX12EVPzFwassxdS7p9BPfrVcfVPVyTiUTcsBx1zJmmaKwGwpg19Bxck3aTC5Zx45PmxPZjTRzsSnhRK",
  "key28": "4cxgdfPxgE25Wbe6njUxPv4C52Yw4Um6cQhbmWppTP1WUz3ydy8Co7pXJVQgTB6K1R5Cq8XG8f4rnayV1R4qvGEd",
  "key29": "4Fyer2EKT2F9htvcemdTTfZbGN6GG8eXCqTRfPtokPLzPXcVTk3AXB6Z2wJtZdrsGHFiWa2zeq5h4rAdix7ButVV",
  "key30": "ktWe9ELHPB9HFH6th6iEBntjayqebgS9ewaWNHr3b6w5iZoJvP2st3YRvSDFVfniGGbUBdNPcBvwbtN2X8Tqfgo",
  "key31": "2Hys5uHny5iKTGu9HJEPjnP6rP4j6Z1ZzHsKjskh5KhnFnfkzxHyJBkX7ENk4prHZorkFnx2fX89gK22QsHRqHNf",
  "key32": "3x9VuMHhPP5B8quQVrwLJ8SRmkqfkQ3J82tWTuzowi4xUiT9i5NMKACKzfx6QaK2QL3TaA2iapsPxKQz7UGWSBjT",
  "key33": "cnMQUnum6eTPChhWsC9ZpxBKAUt2UeVXNWQrDvJvRHjFhezpYH5E44pevZH3fN8cgPRi8GQZrcKpTA6QGXNh5R4",
  "key34": "8S1d9Vx3BkajzLttrikusibAcyru9Dbry41zEDJFd6aTJdCfYWAiQC3rLNucWZJNZRUjifk38Hz6G9LKfb93RSs"
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
