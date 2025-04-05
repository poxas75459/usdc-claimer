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
    "2yggX8xvzN6SLXaGUBzwzmeumFReuuFJQTBye16SMZAX2ZzW4zWN2LLCcXFW8zgpcMGH9LCqcTmJfgfxhuWRYV4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2ziooptEkHKHGEPRvR9XQgP3JwW7rY177MFC1UrvqLMtXioSDJ9cRiZ9oP8UJy4hGpg9Q5c7K7qn9HcNHFDw3D",
  "key1": "3La8oXQ2k79X9dRrn7NARyQbDan6QuKFzLJWtehH2YbZTRLBgbaYsjCi1RLo84G63LPpc5TppfYVzhiqkitg33Nt",
  "key2": "4fUBMUKMHF7JKcczFjs7ELYN9cBnJzTGFZSMREkuTe5Jnt9TwYSQaHtoA69vECGa7Bn9BRSXJ4CDNTx3LvoXS7YA",
  "key3": "4Yof5UAa7wTCMWgSHZzWBpNACy8uuSiM1e3SiCtvGjQwFntMgZ1VJ1A2221bUemB8XAKcWQiHD9tD5LTQchXU395",
  "key4": "3eeKyvX28Z7zm4Yi2xS4HEHYaekxcKvJmKUYUyYHsng5gUuPCfL447ajBmBKLd7xU54ALx2T1f26k19BgjceRbs1",
  "key5": "swG6jADoGVTUPnKAMriZWQFHdz3kAD45W9hv4TomLEM8CBWy8RsNoy8jwDLZeahHJQchBNvhuP6M6vQb69tn426",
  "key6": "2ANYnx4PmBwvSq9GwknoDdscEPyeimtA5RRyA2ZRNTuA5rywddNPmUGsWWPbvubTh9u3qnXxi5fxNVjrvNEJoCSn",
  "key7": "3UPrpAhTkdqY9qW12naQWyGYWNnHTaNi2823FDDT7zpiFjo3HYUXvn7ekh4RZFdRs3TEdM91xRiMiy6DxD4x3k7c",
  "key8": "2GfgkcN3h75aw42iZ4qkVZJK5dXQ3AbPcfDg2qUEXixhbwvJs8AzjAE8UkZ93CnCDbQqBU9H9z53aDZWt8smiSuP",
  "key9": "2GnhnWvEsEuaaQN875UP2HAAxuuLwfT57uXME3LUh4rR36WnJpiSNkwqehpbVvD4ToCs2PRczpyvNYvYTTvCUMbt",
  "key10": "3TH6aXaxKiwYs77PbcjWAhPaiMjhdzFEteaFo6cyTAnZUnJ4L2E7dve9YA5kBnzCerquRSzkJ1x5eELEkgfdECB7",
  "key11": "34pUjs9tUavBxzaPbVPdbQ2jPQ2n1vPTF2M7obFHauXqDxBcWnSFbss5WhgNp2LNsaW1CihuRpb98Z2tFe4U4euD",
  "key12": "3cSp2SZDXUBTEcokD7wBHyrMpNWDbymCXURimfQbxzwgHK9mu6Gi784Yax4EdsTrWwyTd4ZSEsHNgmSshgf8hx75",
  "key13": "5G1rFWrbCVKCEphCGxrmgZoyGxBzhdHt8dDs8JcpSfpFrZDJdZYMHBRL3PV3sNdg2NhnNga3QpWSRFSbQVpYvxgp",
  "key14": "5qnXs2zfBzTFhwLGJ2bYkG3mQXZtQevrzsSSGCYF9GMBgiGrSAoa2AUyC5rCqa5yVq5eWi9Y8M5WAZhkW38hBvJo",
  "key15": "5M7Y2C9KVytYEQLm6us5v6pSsPPAipP9zPRWhf8xxhvnKDT8zKBfpjwxbwKLMnyDfdpCYbVB9isJTcM6eiyfmXYt",
  "key16": "3T9XLvjmxCmMECGJqN1D15DiwYzatCT57TSog8DhXpnFkwJB2AoQzMFVTQDWMefTUTKtS9es7MrspfgsNnu6zrx5",
  "key17": "5VuTYjyKi5CY5vbxKXMMmReTXDhYpkYYzVFrhbtLZADCFZn6QtAi3isuR3Ta9CB5wUJJjKHmmmJtyNadS7qACWZT",
  "key18": "LHqXhs56eSLrnS6Su92wxj1uRtdHnd65ZfgeXCjk8Rj3VGEj5QqMjWq8opbvs8Leztkt3G4YgBX7hGp49qyF6sU",
  "key19": "595sG42pyCM7QD7TjAwNTZnCDffFiEMo8VEXKtuPCKuYTN7xPhYg5npUxKpXorJrQQqAR4j5ctAkPPweuVqo4c9t",
  "key20": "5VFccJz3sVdNUjZTS652CnuSrgtQ4WSgLamYy4xwy7vCMZsuuVp1omDmyvHhqidbwenQa1VVn6bbxJ2CXjXyTUQt",
  "key21": "2yVeEQBPxqj7mZoXwhrojzs11evPmJXD37jyduodTdYXbspRTF1JsQ8gGovppyhKuygcfM1zNJnnDP93bMJLnk4Y",
  "key22": "gUMLZsTSkfj8uE3CzUiZ6Q9pXWHi2pktiGTzZgLUiJ9hM4L5DvDdqsbasiHCfs9ANsx3MS5BqWqjBPCk391pBiB",
  "key23": "4eP2CMZHhLbdo5qNFGiNYEA4KohTN8BV4wyYDCnrMdJBxttx5KgPzkRpvaxnRrLhcpPKqvwjw6Ppsuu13u8zV1CB",
  "key24": "21JRwjLuQXJjFT1Xrj6CRc3136E5xwxDxwgoGBryDSNKsX8BQTDH9Ruswt3rromf3NoEBhXo77vMm3iPMwMsi6X2",
  "key25": "4i1xNrz3yd33ax5AngwV5UhTfnDW8b4AdQAKivUXxjZHPmUrVeSxUNvmbULVYPYAHemXXKhRG6dHrvG2YhyR8yTX",
  "key26": "3Z44guaQdcg6WGdhVTEDNFzgzpM9s2KKUqb7QcHKmZZWsLr9cmHCV8nk2ffdYMoSjFPXJs1i2Zp6sn2uVdNcmjag",
  "key27": "2wcRY1K5qVBRDm756saCgYxmDMUgYaneWAUc67o7h8uCzMnR2rs15RZ3NFb7AArmLoEeVtJAPu9MEWXofUNELv4q",
  "key28": "2DndjUFeqq9nbuWVgmhEiwiBsb3fXG1eNd6Am78UxyB6eMr8K2bFRrUZYEpFWND22KA44nGJ4oFK9Ug982kkUDMa",
  "key29": "2iN8h4in11QwUZBcq3SwAtm3hB8wPdJUKzVJgXEqCLij8YHDtvz74MeVpyu5396EwPSB9SWUufXMoLox8VnwN219",
  "key30": "5YnzsQNPJeZNz1G6G3P77wPcpJrsXm3WvT6m5yKzEFn1GY2exYwC3UBX3UMT2efobNMzuhg72JRjjUkzVAH43MrX"
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
