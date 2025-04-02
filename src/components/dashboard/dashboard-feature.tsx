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
    "5NqYt4cJHZXT3azCLPDTQgR8bgQuti5oQah8fcxEPR52HEmftN1YZNtzG5UBdhuhM2RZUVCjqmwPTFDEcHzx8cmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKRc5DQuBtwhSgmBrZqfx1XVT6Pm4etjx23iMGJQHjn55urEnnQgjkZvKEz6rdUrWSqmGWJXPfW9m1BwwpW15Rx",
  "key1": "L1sYcEw9v9Vf66iVq5aRkZoyi7gdFiB1pgk1xfCXqbQ8NrNpbuVYiZJMVui2WSJsJuEof3wKKdMh5FxbKZ5CnyD",
  "key2": "2CcBmLNdNiTX4yQTgnQQ2EvUSBPjsJ8GR3foTNU5ov8EQNwaCsUheNvNWddhVJ8jLKSpu5C5gZsdkNJH11FL3ZCd",
  "key3": "5cwj8u6AcWdiy3mxVUjE4dj23pH2n1S8xgEzjKz4mnjGC1BjaKW3VZHyyYEmtgMSKAKFfeTTuGacVjRXxbrzdTaG",
  "key4": "3oQxvjoQcK87mdghsQfUm6icHMFBw1Q6KBQhpqqYFoL6vLxN4upvi4rdf97H515GmkSzRUid2Q4GVPvnNFKhXry1",
  "key5": "2paTGwjj7zKGo2sXDkwR6fRHaYFiVue6HZAKc9F5ZELQ7BCFiTiKP6A62TBg5QC1JpuLeNqDKKBC7wdkkopyUefa",
  "key6": "2evui5e6cyqi3ZTE8vSD5RrWyQBb6P39d2PotMiLrFMSPFC91Zrd4S3eJrSLCqnDHa3HXaXTJGtF5haUn3YWw4DU",
  "key7": "jWuKNgdAfCAMioghe8Vkbc1VJxTBncTtS4gmHigTgp5CzwB7TW261ZXTyUQ3vTAqxPu2iNJV2AktkgvEB6tBbzx",
  "key8": "5SKYpTHDdBGd2jxXjdkRQ5QwT6AhZFVinoMtvqVQc1QRLAhqiBgcM6eEPhxjP76wDdN7KWzX5Dob9DYftJPa1G6g",
  "key9": "5vKPMybNKoZiX5EMzVz7nhVZs9aM96Kd2DbkdWq5FmcN2bwgFBWaF4ZMfBYbb9jYv8obKqWV2SAWoEVDswDLcsZJ",
  "key10": "2gnvCyDUwVs5naVxr3N9FBCmBRt2gRQDgw7kB63aL71wWCfnovg9aAA8cXxddkmCjjD8N2JfyXTSoKtqUj8xCRBg",
  "key11": "4gX12cJzD7SniqHf53JEtycwGPBfgjSxYiD8BABCS7ECpE7jLdLpWBHXSjSzWGR8bDNaUvuuAg56T9b7vPQdv8Bi",
  "key12": "64HaUoLvFmjkN1UVDLCEX8JceVNeKuh8Vv8CDSHeWMKn5XXqnTmEWCmkGQAFxrYHwofHo1nvMyjKKCEUKYxnce1m",
  "key13": "4um8VYNVUWHhYhzZd7TKXPLAhFKizm4oMbdzwMmBc5yF4y1KXy9J9FaPVcgVtUacBKu9N1bJqgNsDHrdJhP3nudQ",
  "key14": "E1enbeXwD1nbbrdd5vbG56RHQYHV4pttvMQDqHKb2kpCCA22nuwKHVhMGZ7bfnhMqDLXvWNN5Wzd38jfUUa7tiL",
  "key15": "5K95X1zSRFVfYnAq5KgFQqaHUWKEAN1m6a318kLx9NqP4i8fkLLK6ca2w6fAPtkbhgXvVCbxRa9HocZ3AKL3MWHc",
  "key16": "5MmD25aLSmdJzVEyBikrKi8agE7zgyAsTiAY4y4x4SaUQFiUQzrr6f26XX6nZvNYywPPLfJq7xjkyx67csWtf7Qd",
  "key17": "59kTFmwWkPNPqtj2SQKsYQfUsXPQWVvgc98KrbNihXw2UGFyRqyNenNLAzN9bC2RHBJ8jude9XtWKaivWnJevErN",
  "key18": "5dyU59WrdrJLRX7fRo1npKLPDijAqBN2hBBBfqLZFWcMzzrN47HCENm2JidGq9tZReAwAHY4wNuVBYi6yXXEaxdS",
  "key19": "4mpiv87qaGKtYYVdvPVV6tPS6cCDfegZJFeCV3xh5GevjemuX1GNzwyMRTPnWJ5RzFcAfwdjpU2w4eeXmNevGrVA",
  "key20": "2qQKXJUgZJxL67FiCYQouPovh1FGEUxsXbg7h3THZCoXJKhLgi8S6mLX31h3ik9vU8vi2vfBEqFq7jHUKxFMB9Zp",
  "key21": "5qDgFkrRAjLCUsqD28XbPjmRnEgmEBWX5Y8Nt1FKNJQVBN1B2tefCWAWK1XF3PN8cvfJ2DP2tE4zGMq4hHqnXqkZ",
  "key22": "XJGmggHrSJAX66A5Z2CaMywBBUM9ELwycBfuPuxiAQUp6xtWYxu3Un6EPyKmsRVY2hqH8iSpHhJ6CeL1VVKi2Vw",
  "key23": "56dpeazH92PDS8neiY8Lw82UGXHna3GQ5xiHvDxDmCmySSgcF2PgJ2GcUPa1dJpQQ4Uizo5xKKUKnXzLvmWEfgf7",
  "key24": "39PeCWbN8s4yTXSjyrPbEXn4kke9NoQtzAJDDxMvhewc24NNi8R6rf9nJ9449Ho5uuyeLWHsgkFJTeH24eGymbxD",
  "key25": "471DHrBxGH5uiwp6DfvXocas4YbshQwJ51btMpVzYbecJL7e48EzqSRdQ38JXwUtZDTgn2HRornK7JGuqC1kbwaQ"
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
