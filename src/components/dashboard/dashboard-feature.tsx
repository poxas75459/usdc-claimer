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
    "4nRDb3eZNro1Q17PEhLEyxwbthpnq6gBTW65AW2Z6zdizL4KzPCpwngPwqojSeTSx1kejPraL8ZCpc9gNVqAMr1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uX8tFK2Mf9GayhH75aTFQh8NeVrEQhRDD6sYuRkpRBpYGNn5K3gFiqeRhBjdrHANFvMMTVdoeHTeG9imtqwErCM",
  "key1": "Hw8ZfdYxqzKK2D4VZqjP1VjJvMCKVZPpxGof8qCF3FFLnHzxKYZeQZ41j5tL9LHnTqsJk6ou6tyK7cexNmQTMud",
  "key2": "5zvK7VDisPdUCUKb74wDY339HMxKzgEFBxs1ppYAmyZUYmaEDjCYx6DCpTuxaWzTjwkoQpzBiEGZJZFDCUwiohBH",
  "key3": "4xQYr9o1zhBQDcUiKeR7oz3945koeae8YHmnK3PwQKfze1NqzyU2sASwA3jYYfMBoHZZQob6KXN3CChKHa8zRcnb",
  "key4": "3jaKn3kx5k5yuGdaMFft9SVp1TwAQt7m5FyNkiiRzGgTXKW5vhkbwGEvvnhMq54puN2nzfQ24JJF1qJNbqfR2T5t",
  "key5": "cTumiKzWnduQwuHEbFG1K7W6RaBM1jGMvaJHYBEAihUMzdvdZzdvz4H8QzkSiYHGLTda2XTS85W7KtUi4YKMjx5",
  "key6": "rtSEm5SAtxTvqSxGcxT7igVDw4dtT65h5Abca2s8aPuVgug9HPMcRD5jef3tEjj8x5ZcLV5giRMS8YPKBSv7sjT",
  "key7": "2ghUefANBw3MzMh5xYZJbT6ujsBtcesiSLy8LUedn1GiqUN1682sDTXZj3xceEAaKNug2haaXdieDCatLZztHDhQ",
  "key8": "2emUgepAiNPZzjPw5v2gb3D1EDyPhA2ZzYpCphTKhRbWqiDi6zyzufGp8JiNM2skDPSnkpuhJ4qZuKtRXG9v9Gfc",
  "key9": "2t9f9nKa8actSFeQKX8VcGqpYbfHrhw7qEindtPW8LwKTM5BBrTPnfdJUmV2w4g9iiY1tw2YqbuesjuXx594HunE",
  "key10": "2yiH9y6XiUjjcqWJcQr5NWCaNCkWeHwH6tPPNMUCuH1tAjmsQLBixcTHpqERDGYe1jJTrLabNxN8eFMju3df6w7",
  "key11": "3eRt5f8SX5aX8N31EBvt6Ep5y6epAfTSviPaM4boB7D2jQzPQSArLMzgvShBcdp2Qu5frQ12QsQcmWEeHXKrPJzU",
  "key12": "3wNXHm7vdA4VqoqKZDuaaJoQDYJxGo5kFN9Ami3Z4fqYoWTnJJiLDFeQfqCcxkYz3k6gVDjYs8U4bmrTr6wPhowX",
  "key13": "4eUkLR1r5jTRLNBnmtNjsJCxFCZzBmT5C3wMiPPHTWkragaLEdSvxb9qo6GCgfu7MxAeqrDTNvPzW2J2fKYKukVj",
  "key14": "2gHUkozBaBbXK2Bi1aCUiPkmnDosyuhfyGZpKktUVpRxQG7MtU3JJ3GJ83fwtZxucGy3eXfoWeMMHa5BNC4L1R2N",
  "key15": "4zVWMKvbDHvkZoKg5cC8RzuQDVTSVoqZjU9uVKF8rDuh56FbT5NwCQYYi7MQxmxRMTbR5ugrDqKRqTzKkbauYkcp",
  "key16": "5xcMRkKF4cV4YFHkuNABpXjKNH9LscsifgdN7TetWP45nazVfTHAF9bgCXt1Yo9ayt76Fb1TCTSz3CKQZer9Yd6U",
  "key17": "44vx18ocLNuBtoUN9MKGyCfiiQjqdexZcgu7fCtexBSNZoB8wbYVxxkv8neuwFyXT5k3YpaQvxiHEWdwcM3Vw7JL",
  "key18": "NLHNYsQr76LX8suAkn96HgdrPEATRjamnj5bgtFK1xoDYUtERsMFfbZabRbGKgs8s8wzfYnPb4QpPwWvKX7K2gM",
  "key19": "2VLS7KBoiFqSAcDNMe9EkeYjZzsCuFiCuwHHAYVpvDNr2a7qfNg9DkPZbM96xz46jZsinKzCQXFNyAvvPMLBZNeG",
  "key20": "3w4K6ucFp48R1ZGXYWQkPBUXkrLw366WmQZfvdjmDj2r531qGEW8sMZqQL89BAr5WjVvT3Vqq27YmzhMRxsgHahP",
  "key21": "2LyWzEfhtpdaUFSyCthSPzc9jCtMcfVHCBQKqQZDxXzJrsUjG2DtJoAskoC4iAPrpJi8BSbCVyUPYDBEAnHHTPou",
  "key22": "4BCGDJwbwXC1PwCJUA5dS81itJXgQYamfqtnC3qKTkJswK9xv1fe1cmcmMKZ959dGMaxHwA79TyuDRQNvuV49rym",
  "key23": "ADEh4WstSsa6Quqs19UthBaxjf8C4prrrN9AgYg8Ys46xSRg4jyd5JC9VcvWsAxNXgRRrSikhppApKkp4AEs8Bc",
  "key24": "3yVmoBoVcAiAPr7jn7jepy1keXJG7VZ4o8qShmmXAwXAiw76wHkTTddb3KaaPH2PfxLobvvMCoqfunAAHhG5Y6vy",
  "key25": "25ekzFrkbvJ5wi2eNvMvGJxeibiyVt2x6huDTrhmiYcQydAv9CXmV5CH5NWLMHaDoHMiynpEXEMq36vHnHNbzWEH",
  "key26": "2p1SXVCmiwFRSnPRoxBBiiLTTBmvpU5Rzv1JbfNuRpPJ1EjX2srdjozYB7jRwBmsyVGZ17wMZZjsBkAkWLSQBuDa",
  "key27": "2nq2aYttd4AW4KhZyBT4QyrdckPSKM38pzz1pbQsc243ZwJxz7vFYySEZfwKTWiKkRsM8uSvf2RpUf98RyKEpGAi",
  "key28": "2jeeSWAX1sZZ95igog4kyV6cc1P8NLaSADGyYCj9YDRL5yLCLjqJawe125X5cz7n4aPh1aiRw9D99UJ85JZa5x6o",
  "key29": "5JmZYTQojTA3auNksumbSmxCCwe2L1ZSEabiKqH6gu7RVHVr728h1Ah28gTAwfyFLgqWN98Y2oyhUSnwHhjqxzuQ",
  "key30": "7vpMDGJx9cfgpQGX8WJiMZ1fgy1eN74YYdrSyZ18pz4CDv6qMbiAtXEUtydgTAFAVrr42TyPXHt1NswGsUHwHns",
  "key31": "4sgST9awf6uSYxUpUrRMbfEV5uZN2MyBtBs3oeWwwfJeTyDkyafhHr85izpRdCg8ZMzMATVEgzw6f8MVKEXRvhFR",
  "key32": "5bdgtyHdfcCcY1aNWwieVovoBqzgVaVK3yPrCyiVn8V5MnvA64TsB2pPE8rFSmeCzKV4UxLSuhf8htWQP82X6KDJ",
  "key33": "DXzAvKbVQ4UefWe3Vkh25cEdgXsAQL3Dp9NsuQ1ieWfRj2YU4EbHTp2PTQy1Rd4QpDHpmFtrLp8qLGxpkgpDKHP",
  "key34": "2eYi6QGRs1TPy4wYiQBS8XnQwMJF6U56VrsPRUTeSfm7vhc6pS4mfytopChsKZJ9ThYUgLngAZHNuqAFxrB1nS6X",
  "key35": "2bCWSoeH8owDj7ab9AiAViC5sGL3bQGkzUHcjTKdtAfsWmqkgN3hBgUF66DAsFs7JHY8RfTo4rYWLzRggAn7JMup",
  "key36": "wiSVW2uuZpZqpMtJwtJLYkn3jEZoE436rGHvZLMdPSxNKhZf8ctwAPjMSh3pVWFJcf8M1U89aRbYiQsv4iWpPFs"
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
