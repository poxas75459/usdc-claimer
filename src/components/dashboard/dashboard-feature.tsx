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
    "3UyW7YziKQLZHeqdMb4pMpCFNLJpgSfVZoRhbdWJhgn2FfBJc2SSVWU4BKRqjZ9kzLiXGEZWBdNgsfvn9mJuxeav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZL5SfpTR8y59wEYDtjLnRdLAzGEDRiFGsuar9dkrBzKyrs2LKvuFXC5EwgxxAymSN7LKwjd4qHTxShUVJYzrn4y",
  "key1": "3H47bH4oprtCcx9h5vsm7wgNpoEYZAzw4bqNX411Jn4S6sb7zgjpUNsywYVP2vFT1WWePDWmtrtnhWH9c35JGuxb",
  "key2": "sszjSvgJPQjMvZuk8F3MpTkZ5R3wmstc9ChNkLM3F8hhirU4fid2bKZeuLhARXLs4M9nhnVwkwDFQRpm9KjGpxY",
  "key3": "2qizQQowF4emsXXVzEkPZdkeG5L4FtiZBxGxjrD6pS6BHfXVgrb7Y1bUBnjhz67jrdh9RX3XyRYkJN6RZu3LFY3p",
  "key4": "56eP1zfpEAkazm5N6QXFWnFXa75hhN4XsXctt8AMPVsqmRueyDf8btrTmmkg6j97pXbcRCmhUmxCesRdSXykLc6H",
  "key5": "38KLNZWjoLC1eu5jU4MG3oizD6WUDmhLM76AH37yDAoiArMPRY2jzK24YgLLdt8AU4bkpfcVEr3dAn31x2KQud8D",
  "key6": "3xAtagYKHgPQzzNcSWoGXNfobBYUrq1EctNKC9saecoMbiu4Hf3WWBsYRx4kGN4x7iYg5rVkzUQmDCY5XNemw4Ty",
  "key7": "226dsr6FXpcxJfPNmS7icGCQ4v52spY2aSbtcopdahBnmrVHBwVwo5gSUPpeMaxxUacK3Jz3KJxm1vhmrFWubCAa",
  "key8": "41BdCfnA7s6JShcZ5WRqUsLmS8GCvYgXSQAjjVXhoDiFVRENrQqALu6QdKdfSyEsMs8TkbHXZ5CCvtkUmnSDWdBn",
  "key9": "2gCPULdcwaypWSyND8AEcfruwU2QE55Y7qn9uemJzPwKacocWgybrNP5JzrF8na7fovBgohA7WUqJ2HgJW3eUKLu",
  "key10": "52uJf3z4UmuTgSXVaqox6M2C7t4LMCvJp2wfMGNMSfWkYg97z6TXP2438bUTjQfKxhz8AzWyo9SB8QuLaWAinmyU",
  "key11": "4FmT71Q9gfWEJR6KG6dH3BLxRKrY4vGtargE8RpuLvbmdvwxRG9Gcb1Wt8tHAZmaJJCz796mB7WGFFUBEwbJtaV8",
  "key12": "5aW1qJSJFJuVMWmkTiPuRaQU31FoD7r91xJYC1H6PER6ceTFjVUosvLbL73tednFFFFSGqEd9hmSPRnqqMZczEAr",
  "key13": "2PTvD7ckWHyDQDR5dbZJg6426ZaP8oAhmNvt87iMJt8opBVYzXeh8zZKfR55ZAbQGUx2MdXCcmar83jB8Tn9H2XQ",
  "key14": "j1BgpH4nf6So4jn4sNFyy9jrdx7vHQLLzBw7kuYDMnNJeiViS7iAasnXMbEv7GWWhrz6dKAMGG3kbnWMDzntqSM",
  "key15": "5Cv21qa1HfSD25bhRTRcJtqdrBnpeRwhthVfPVgm8sU1a3Wgotdjx9TosuB4p5Cb1yeBEVcwe67TQmWoFz3KRgfx",
  "key16": "5QdYFwigqMfzU6RLiAaENguzRE9ooznCmHrpEah8RPAn5C4iaM4X9o6dXZENhLVxtLNWxyTFaoxFTePbk69rfUgu",
  "key17": "ecu7VompL1xYrMnBc699B7ZXVeUbwg7yGTeH1WgzwMagH3imCNjGjR2jUnW3Z8kwv1oBpudVQZNae4gZAUtWpNW",
  "key18": "3NmaxqdTkBwh5mnwVpgnCRafT2scTcqwSDBb3unUTZVw5d1tAmEoGQUTUBQmZ1XbNTz2tRZGR85uWR43eHQJ8o5T",
  "key19": "5eHJMtHDaAC7XYqaXuLXmjXMLG9MqxgD98uaqGDEwnRz8aZEcyRudEcgMke51fwppbxCwB2pQRB6HxunyAJwxc7Z",
  "key20": "2kCGrc27yj5byETRNH5pgn61eAtocEHL91tmbgybodVnvBk5H9zPUpCnAzHP448SaGSceGNA64o4xb3egJUG8dJk",
  "key21": "5x1rTs4QwZ4SPMg4WYHXSVh3T68zxZ4mKHSkcpkGwK82M4P7RpHoyw4H4gUVmwbx1HTiwdEfjFQhWwMJ5UPMGk1x",
  "key22": "4fm5jFiDCPLVec2NNKS4taUxGvWXGq4deUUDiKtLgJS1kt8yGaKETmhAmTZtihTYCoFpY6Kv8fJfrV1fkXzFzRvc",
  "key23": "4PodybtbPZtKgqLt4YotoEUfeUfgcK5NW1V9o5owjuPL2ZGnAYdfjmWLoj4dVHoEu69ZmiC6JBPAyWWo7K63NEUd",
  "key24": "3AsvAzNi4vKbgbhG9wm8f1pEdAnAWxERco5gQiPu4R9iE4SxiBenxUvfE6W6N655chG5o2mSWbe6vwtX6LXbQP7k",
  "key25": "4TBTbd6UmsrATbAz9BwU3zGVbneFY9w748r9NXrP5AyeujNwDminzbSebfmB5J6Kg7Eph3f6muCxvyLsWL2QD1sU",
  "key26": "2XR2qZaiyk49qQjsHTq3gBZ7F3wMYjSUfy1xNECwatW27T6XdqbNPCStQa4bYxdGKgnYVkLXnzns2kkENTKzr1BP",
  "key27": "5ef11wVLt2gHTQcSTzod7QP5rw1pBNfyEqxvPR6NMUxdqTA4nkqUahuMkeACP7Fs39b4cyrFUoBSSFyqa7wYHNfx",
  "key28": "2e4HTa8AfUjxH7xUVjqrt2bNv4KeEwc3aQgKDqDM526XwKbV8AyvrZNm8bB3YgzcdMpwAiUfg6H5uC5LHZGtLBvH",
  "key29": "3t8BhUixthKUFBHtWmGyNHg73jiBKGVzHZ6HRWBHbbBebiVebdSQfv3Et7mtQZuY4P3CiZBvNagxxvbUsgaZTEhA"
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
