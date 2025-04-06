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
    "p7MaNDqFkycZDEBjkqKh8kS7fv1UtjmaZRGkJc6MTfMBNWjptfob21EDPexMZzPaSX9wZkKzzAh51t1HzU7iE61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4DxT5vCKaSJq2J6nzGecLT2YstResgvDcbTK414T8dGVCTaxcUfnUSY5qHeZknoLBCfL9HV5ZZkhf7TDonvn27",
  "key1": "51AJN3o9EPbmzNWwZ8BTDukSghCcDASbGSka397u5fZW3PxVR17gXtGHMFe78wM9afZjq7DTmuMDNmSkQQPihthn",
  "key2": "5VKHWNqAK1C2DP8VfWPNrNF2PHQVrvMNnaJxGYTu2WStAceotgAzDUwQ7RETUWFjdYN1WYdDUoAxBDPCWiR97Dok",
  "key3": "266Pjg4bQ1oAntX6TbsSbL3RankD4eo4vB7fETykC2KBDZBM4PgRD2hU4VdYnX1E2StvhKP3y9bZFQerZiamiyQj",
  "key4": "jNLp9b91T8RAhdqgCTuKnnqTSwRgQZSUKR5k4w7V7z6ow6izR3Nc8Ct2nTDFHCuEgfYhoMAVwSLdyt1yxaZaLPG",
  "key5": "4dgZDyS54BQeab9dXTVSdYa7b3WXxKMVshrez9dbMbtdm4Gfy8MG39435Dt4Wxy9u3CZFVS1eYAdTuDe6uHQh4pV",
  "key6": "5U48za71NjfKXL4DaF1AVSTVLftvWn8Zyk2S8uAeEKiiZ4MVk4TRCHsaZc2ANUyKB2UgGZTLAXk7G22gBPmYKXdb",
  "key7": "4PcRuCCfHNfqH1qgrLDMiNfEvJCTx1rvYUmNY6hcf4o4aGNnDTYVaBTKa4PDyNGzzjb3oDcE3pKRfTfXwM6C1mYo",
  "key8": "4x2t3qFn27vyGFBXAzKQgCc5yhoDdREEyf8W2k9GdAgvFSNVxrVs2V2McPyygUJhxmXUNfK5STfCi5JvBzPvmXyv",
  "key9": "4ZhkRvpQrHVfrf2snvCJYKafWPLcmRREX7GmKxGcW6pV4NksPLrtms2nwNxDN3xR49M6MH9CRwSQYNxA2ZtehTXJ",
  "key10": "5kss6LC5QVB7VoZF5tXQP2HijcyTB2tb8tkX2KAshJrjjLPUBpv7b2iWUoALJVgbW5X4mYj2Jf8CyJQko5M6Qj2G",
  "key11": "9qXoBAtKuHcC9gk5YJFyZjPgp8arZbjAkE3EMqLo9BK2rYUypSHUiAGKFYGJdPfdmeyjWFQGtnd4epCsvsU28bY",
  "key12": "TicvPyN5JvR8nPGyYngJHWXjr2uk1FwbzRohmvJTXLwkenVfrZ3QkudvRCHAG8E28Gh45aLzcAgBxRRhAmfhbjV",
  "key13": "xxK8Ah745pWwGzym985fCim466qD6prjpPsEmou1zTXQNNrdz1uTj13bKvQkBAybDB6kk2vbaib8jZgbBMfCScr",
  "key14": "26LnWgMuP7sJNKr9aRuDXXxWWsvd93hoz2HVEkuLzgWKy8FSiemAU8aNUeujJJFY85xbprJ3bvZgtc1T6wJ7NEFi",
  "key15": "65866AWFzPjYQGW8ZsyHkcGprbf8WyijvqeaPKHHWULwi7pKFzMq1DLKauMg6ehSdgW3MgCmPFqKdLmRSGWLwsbx",
  "key16": "MiqSCnZTw5qxG9uRNGCNiqfqGfYKfxF5mZJa5ySaopArfhQXuQsE9aP4CQjMf5jVYS2CYbmogpZHmf8nEHGme5E",
  "key17": "4fsXHw1PuenhBxAApR3uoKUTUzy2emwL8HVbRbDStonPkjNQ9JX3dE6geG5kMMTNtEH9SGQMgr2WfxBLpNhhkTTx",
  "key18": "43DMLpd5hHa6JNXqMDgr92mhGSLiuD9LR9Sq2eFUNvM529QdgR3zbRPzkQDAKsPHU6DqsxSPCHSE7TBZFsEVgv7u",
  "key19": "bqyZnqyEEsSSWhsnkagkJ12idix1DVCTJd1VsetHzHRuTgos6NhhA91MRbS7PSucVAK9z3s3vVegyny125zT2U7",
  "key20": "3fJ9vmuXy6RZTY5FE1NR6oXdjpsDhySU595HtCDEZULx67krKizg4q1jjhr8eSYPvtDMmsjsMSbpFmy5MKx7kXzD",
  "key21": "4qNBcBP5UbLXAUUgQU2BViKUZQVqhRXgcnufUqoAz6cw3TYac8XJzrsCusZKULm2cmdKeXUJHZVbvJjYBtAnuJUr",
  "key22": "33zhNMx1LF5nCF4zzxnNxuJYiLQMEWXZDJgJMVVAvhYvsmnn34tpuEkbA4kNAbVhyNAi55FBTrdhQxzZW5H9JSQs",
  "key23": "38KvQfAXGJM6eEoF8uVRPyxNwctJiftH8iogoTsbvGFMS4vTezZhXtGZFmZHTmUJNoTYJYs7HC8oB6HLos6gxEvF",
  "key24": "3a7sYdLQepwHxame9bR6fobELsZPSHijt4V3DGfv1GNuXpsvsFJ8o6iCfjCVrBTireFSccFC27S1kKBVC3JLTuT9",
  "key25": "2b25YNUsYaXVAKfxWex8enkQaXF9wFJzUc9iQCZVoB6qYNRP2GeFYffyamyFCLjft7bvESi5CDKJMTPkEKXoEEyt",
  "key26": "21WHtsg6CyVn3kZ9REvXoPLYoUNcpMzCG8ch63V7AMFzwVVE8JMZd8hCNcFuuKEW5EFiYhXNV9E62Yf1sZ1A3ERo",
  "key27": "32beFyURUymWBoGj5UV8VHtDAkHzmU4yro9aUVs5eB1yQvBA5AR4oUZyu7xi29VoCVBW6ai3DcKxRCjZzu7Xeszr"
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
