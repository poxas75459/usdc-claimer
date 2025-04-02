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
    "5Mb4ULMz5PKN6S2D15sXYMCBHVwtTJB7uiryqctXBUt4Fg9TEm5pea5pvJDqGoYaoboxMJxeQBPyThMkVffr6KBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23H3nCRMrVWXMpNGPhPjAwdbd5RRox2Y53zcV9c3UGYMNPXeac45TNhP4A6KfHcKzxbpnMcYDMA7844dfTsxJuGv",
  "key1": "5JuHX7hrx5EGQXKLzpoDkyCGcsxKY48gU7bJiQz6Be9LVe4PyLXsySFJdeXPSR1wQE8sdmwDphWvDW3dRuXFbZko",
  "key2": "2U8edkoMYC3JGvgV59YxntMQmwNGDB7pkyEJ1gPk193u9gMA1w4Autq8xSLQz6JvEyNXTHAbPAwHeqJ5V9512fCW",
  "key3": "4M9J1WqV5AguuXcXV6ouxdXLHuh8hJddxSgB9eqypbDvkdnHZ3aDTAXtcDfKVL6MkJdwgBLq3QfHt1pujMCfDfTd",
  "key4": "5DgrB7fUtfLkc9A5wCHMfGq7vWv3iJoHy5a4ioLNzv8eBi9QAch6aUfFNRKGMF8pJfrM1pbiSYgVM7GQJzG4yKQ1",
  "key5": "4AHvRCnZUg8TnLFzx3974djh9KSE6d3uma1WcfGQocFT8WFAGhX93HDfJ1C21RzbZsPv8rJjoHnLu8dwfznSPYho",
  "key6": "4Y8kxHi4TYsHgCdZ1YEkMZ8wkKofceY3asvGaHszfYdiFoBck1AN6b7bsPVHwFj1UBgSprcCsJ76B56iBiRFS6DJ",
  "key7": "4cCfM9o27Pizn5VK6yYeVqyBJh1qRNAyUWr7ZqtuctzUZBuigKUXjDC8yFKEcPCbjBuiCoY25aTKxyLc9dTzGDae",
  "key8": "PHvn9kH5YrE5zyDLWDe57umFVvt6E6nmvT1rpjybTeFffTEEozYCRXCGotnFADhKPJ2xhu32x7BNekmMtsoXbsW",
  "key9": "7wtEVy4uwsM4BJsAPiJX2KjWPMPQaSQLLqn6yX4SzubnoBFZ3LtqdNEXsgshND5PWwWQDnBNGhieJVDyghefCpX",
  "key10": "4vdHBTHgvbLjgui2vENtxSteLkKG4N9oEjHQffaBiB6wRtUUAA6uong9UdPtzkH3djGDyi2mbff9x9nbgKwfgE3g",
  "key11": "4pUCyNrhTbPLfYmD3jvuo7vv5cuUQrdPeCrK8xo6uhNrAABhyx9VEHvDucdyEMBhi9xxPsMZgSTM4WsMFNEnYAq2",
  "key12": "2D7ZiE7D6RUndY6HE8SDqRy4fMZKZRwcPD7ZC1JH4YkCFPwc5EgcZ49gEbdNftjX8Bo1BsAmt1N8kLLaag5Q2jxc",
  "key13": "62yLrftYmnXuzN8QUc8LRUgJzQ8BxF1ndSexEEPNAymxiC7PigxK3B6YFxHj7sFsR35N2ZihDXoBtMckWrNr86g4",
  "key14": "3Eo8WkzjSRCbJMuC7kW9pw8S7Kn2vNjyHbhJYhLHWn4NEyx1wifXphfRcxqT9AAX7jp9pcy65AJA4LoAVhzRtAcH",
  "key15": "4bywigY42TaThT3yRX4aHV8eDbysaRyVjvfmisWwAWwguqs4VbJHCyUq4p4jjhHiUJXvcyaSTDcum7XfAsahktZE",
  "key16": "4eNcijjUQf6wb91RB9SkAKuMwWN73KwdVcYz4q62YAc5qTw8iWNF5ayA3SJVut2vtSkxsBKn7a2Wi2ui9CAWdfwS",
  "key17": "3onqrdcVJV4gieetci5apUaUYT1HjwsTkhBjEmhXQwJtzyoj61kFxiKuxg1qZtX961jADuCgxBCYUxFcunM9brtE",
  "key18": "78QTknftWMA4C5iBpTd5U7iq1zpkkoMDdViQYZurYXGHBdyMxXGXLuiZd2cinHi1KtEpmvuiWgssJMdmMkJ6tTC",
  "key19": "4EQ96kKHHAf3J7fgVYyXzCRLixrSDazzq38ZQ3S1fRdeJsk1QUJ9RTd9VPnVbdAinZSWdx81Yukqqfm2fmS4FcGn",
  "key20": "2nxEpzwrTWd8524C9QAj9NFXp9QGv9n2RCRToRzGtwgSbs9bAJUp7gmweXQzVNVgDXfUgZ76JhRFKzo5r2svKnSa",
  "key21": "3A19MiqNjo14nMoH2G5NjkDdisL5eoKjWMUcoBzJTjBDyNHfm54xZGB5pzSBR2ykgocGvYSbWPx1cRw6qeh4pELr",
  "key22": "2Mn4bu7xJQiKABs183CrBHeAj1PzXJKC3P2C6fztZrZxEN9fqzBXsnUKnWxST1WHGc8gmFmoF2mQg2TNsVMKBFpF",
  "key23": "JFWZhaC5K1HGJkvuyUfUNmzqZPWCVT33oQiJKqgEwwmn8ETXVvYMtbHyDMDa6eLLWEnBLjuLDJKBccN8YoGSFv5",
  "key24": "28ohEHXqmxTrVn9QWJpGVMSrEu2CBeL23zPtQQZEEzAM1LWEzm8u6QhNPaYZrS3vQGr2xC9veUhSJrCJEJCiAkcL",
  "key25": "3jRPm1UuKTYqdQw3RAxhikgJJts24XoKEEFz2kfUhPKRidKa17eFk9qZFoezXeRLaaFJ9DVwnDvzG5dcWtnbqPNb",
  "key26": "Hf4RzH7Q74FYDZkv3mvKVFgviASfMHeKXMgWeweCwERECsAtdGAcKmrJYQkyTt8N6taxrsCJF5V6ad6G2QkELFj",
  "key27": "4dwj1keUcG4dwPmJH3mxwShcnt83Ci322Ncq9cAkmn7GaEi9QhdECtR7sYCw7Z1y6A8xPQGAk6FZqjcCSNUasexw",
  "key28": "3RRi1ufUt1hhGSLtgJYd6woWdrSYMUd2TCgaBDyrf3Nu5GHkPNp7AhGYwVjMHzxkqf1u1su7C23PyinfUPGNXFh6",
  "key29": "4Qk8Ndym5vNEFrVbXJSbsh7oTrCvMsEAkpWT5FvwKvDQTYxzSPqA5qjzFLovSddREE2VDjTV3MKxKUWjwhfMERNZ",
  "key30": "zf4oCpAs8zvgnv8sB1vGjqpQj9ekA6buJEGSJNu8qBn3vs4xGHVQNdr6pDZcz4FgWprKj7bKAEdkQBk7TnDcgeY",
  "key31": "5Gxa5RXQ8uWpH9GjB84apTFipaPCSRuji8M2m8ATXNZa8VJJ8CTmy6KUCyLLUXiooqk1GSQJhqq9tkFECuU5RVDQ",
  "key32": "49fc4agJNy9ngFnFBocrVCacU6nzr2ygDbujbbf7oJK4DT2aKqE2RLJJBwgfdjcgLRRexbm4oz9TeBms4dwMZjwV",
  "key33": "5JoWaJuFQ3QzKJyhjkJ5DogPvcewfmNq64UFRa2UDgRQRjjM2D9GdtFq8AHrmUXKaJ1hGMGNcPsMMTeBUsCeReSt",
  "key34": "5fFqajrTc1ffksajG4zvjcpgU1qrUT25jW9YVmM3Ef4w8onvv9sJjZUvN46EZ1FjKJyQTbRfWg2ktHUDBrWoUeeq",
  "key35": "QstN5YnsGHxRUS6nde7fuDp4ug1cXA9n8mMwWJQkYQGnNQyfDbKfMFYFR4zmhqvFxYs1ASzDU9qAHjgsNScBc3S",
  "key36": "4ibHhdByMnesJv2d61tXpJZognVYMBfAF8oyncNpPnJwqoGWtzqncP6yFKMmatx7twcxcstvqnBezScqP5ihQu88",
  "key37": "3W2AQDf75kDJiBYTgeYeHBq5qHQJCpkNbxbatm2zXUDA1eA3f97vVLwSyTSSv1SPQZ3wafqWJAXb2huVrJpY9UrF",
  "key38": "EvTkJTSGpc1m7Nyyj7dqUhgWajPV4JHezbuM6LRDK6PA7KVegJZsKuEGWjRwsZeDtCzNnVGpBg4j2X6UwtN3W82",
  "key39": "67qwBM5sEiHNYSY49zavKwfLShUHqQ8z3PWkm7X8P37J72RmTSnrMyH2oFxXAQneE4qzg6h8nDEQsQNUkfV21R5N"
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
