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
    "2ZdYzFduJK9D4BbY66HzpXkGpfqDowQ5kS51v9Bb8rxieudvHJzt7qnHy5oW5XBNpprhCFtoXCxUnmaU29XQXMhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHuqxC4Yr3yyLymSPprjak64RQVXXjsuV9iTVNjs5s5oL34rL5sS6C69VVezWXXTuopd4A3hbLQKRSe16PXaJ9K",
  "key1": "E17HZSBZexJs31fNJKpyNn9BB8UKQLEV9SxYPjEPueSFpxWQypGPUE3d1pKb137FQWLS9n5R2PLW6sLF97KKmtP",
  "key2": "5qFruzB7qorzzagYKrvy6EauQ4YvKuydqpXCbWckCees7fM3Mh6WN97iWSEUdQyJjcxSijLLQMAikmJi81Lyzw24",
  "key3": "61KQ6o2PD36AgvGiBxyQbFpDCBLGXSHbAkRu6KEn6EBba7RzAYbdmq9grPjpfXR9BC1d4fSYH8Mm4xo3hbJeSXNw",
  "key4": "47DhS2xH74iXZNmfLHamV6uSPkEEBdsSDncTJQPK4oJSa4dDBiDAQYowbyYJHwEUQTXzkEVotPD4QVHKXnnKkdP4",
  "key5": "2yKgscW582HSdYzP88d8yUjy2FiLQLmMdQ61pjUo97VypQP4VQjDdqQ8LvSoNcG81rb3AkJ7rTG6AhPTnppyjxkt",
  "key6": "4NpS65z7AHSMMkeusGSGkN2h2kwJh9cH8YjQhqrqWeaNshiZYaEX7vGJg17dF1PsHtfn9MwnbYCSN7ZvCVeQp3UF",
  "key7": "4zfvpDNyy2Sdok8RE6iQ66EkBC8A8FH6dfYP8p358a5tgFFVBv5qNnzSQ9YpCVP2VdmEHLcrm2hnimz86ps7xY1i",
  "key8": "2Fhw59x8gLW8bFUDSTnDxKpuaBWtCyp1QXYWgAiLSiLed6MuhRKA3ih9hQ4zaTHv2Lak1A1nczDZrnWayGJtitd8",
  "key9": "2QtNmmkoNNUpcHzyGi3LSej7vA2jxuWVBmHzmP6Wr9GRrMKhMmQLbyo5ZkYSiwW5V3yeH77BR5Es83ySTQqQuAVu",
  "key10": "36txxofqpQ41Uka8Dsefm9somnsHbxyDMgVAcGk88EvZ8qdXXzKFdaA9gfWNiLFXXzjmUevXrozCyeXvpus55vwh",
  "key11": "3rvLDX8CNr6RZC4WfCTQQn8ixCikP8W9sCdJ75QcKdv6BcpirjoV1JXDmttD2trNRYX4pZdV9A6Z1Zi7Ak6ZQLJm",
  "key12": "UHSM8KsBcABG847nh5N3zLCwGtkPkTZnRgp8dd7KGrUrd8S61R1ztwVnxXcb9rStFzZiYFagCwPSnyvwX66na1u",
  "key13": "3nrK7cnc9kBSq3gXK3yhi9k8sbEMtWpQHrH5UJGgUKdfvFiro7VrKpd9dF2tXJzuCcj6UfPWBPHcWgrTD8uYaTay",
  "key14": "2aqWYjfmgD5vyLQLSPzzpjwykfYNfxnZKWF1gGMm6yhq6RbrsuFzG3LbVubf5McTsv5HNSCMF7pAzTK9gzNkaedX",
  "key15": "38Z2HPqG19Z23yQ8HV7heV5NqdNBGHXj4MHPMTqFtTwZFeHFuaZAVNnWsmfJUAaRZG6vvLBvt7YKTgdHZB4rMcj5",
  "key16": "4uPAwEGtJbtVBLt1yHYdax4a7PrtTW98GikvM3NSyuFbBxyaRUs8Wtj4zfFVywrUHwbmyt2NcEJ5HZJSGYCYL9UH",
  "key17": "3qqZNFu4Jehz11EnmMtwQjPVLkiGuWr4MoMnL8SFmAUtA2GkDSsWWNLWjf6Fgp7JyZrsQWAKwanC68dve6izbdeo",
  "key18": "2HAcyWqRDqudqVaMZmNGk6iG1bwr1tSgeZScLKFSmux37cFiU5GLjAZtC2CyYRzmRa6rxTj1rSYZg4jggbUWfdWx",
  "key19": "57zJzBJaaaNt4CQ8pH8BRPopivSK8QiXDnWMae6BagrJBf6scZPiK3Gw8TAZfGpHs1vwSMQyJiNSutFTZ6M6cXKf",
  "key20": "3QxwbyaWRs46e4w1PX39M16VKXtbSyUbeZov5m9qevR2A3Ki32v1UmNbk9jwzHZnw7HKh8T8VyDKLEMbQ6RK6mdk",
  "key21": "4cDJQk57FbYsvRhx1W7g6BN8gysfzPkPZmQwNKNis5FWhXZTsSwBGwNDB9MFMjRDePeZUaCow3FUEETjyMnJqxTX",
  "key22": "5rDTBteRuKbmuSPqaL2a3yqqgE5r4HtPYE1p4xd9NjdohJmBuQTpVioKvDNCLZRYfb4LyQ8CstEBrUZ9X8BvgERg",
  "key23": "3s9z73Da2uaR6RUy8gLvkh4Lz53A9BkyBq75aqxdDDxW4kQLpwHJRzJQ3yEHrAtcNd4g195GGWjiEpsPxoDK6d5x",
  "key24": "eYs3rVQfgtXkmzdCeouA7Xu85X72P5HaWe653NVAUgaVxumX8Uw7fKCcH22o8YuxhmH8rVwcs3p8ykcGm4Ef7hv",
  "key25": "4v2QQjsxYxn2FJFrBRfqFX67NjNJRa3cZBAi3VKaVR2gvBQJmYKwpbGSC7D3HqNaKt6fxnGGuGJbcqJvEpt2PqwE",
  "key26": "2pEN2wdoeWrkfRd72LZsD8FYszE8At2ojckCFmmsmKRxqw67gaWdD7rPCNhwShWKgjV2dCw6MHEY8EGgqDCBs1G4",
  "key27": "TxG3ktrLKTKQ63SVBGaMD855vdqdPYwiaPcHYPyZknxjuvvSn7zxVYQXsvTpab433UfxEc8ymDnwRmko95apTey",
  "key28": "2Afyfyz24M9DcqXjEVLj7Wr5XmKvEHJFPRRLi16853vQyXSgiszjucxGwrdEoBwtEdQZ5XvJvmMDvZ99WvXrtBEc",
  "key29": "ArecVWw3JzktjFz8J1nrNibJUConX6uf5fzN91QuWwLt77nYG2A1PUkLUYCPtiC46cpmU17DFt6kynpN2qipHyz"
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
