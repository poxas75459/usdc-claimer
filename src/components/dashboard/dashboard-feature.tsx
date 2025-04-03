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
    "4K5jGuw4pfDSjGUJSyM243ea7x93AF83w2i5sW9F6k6dKiLv55DzPmCahj76sjMdMVayge73SDu2aB1eVN9TmGg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzQ2iE1yKa4BbBTmTTp5RxAWCQcrYa5uL8KHPmpyK1hEodB44P7nZQRHxdXKRtt5XcddvtZHhf5Y2T5p9aTQHVi",
  "key1": "61rCQdgWHhAKrAHk5XGBfkD9jjRFqdpYbx6XY4dQ18qZsctx8Jb5LgeypxTdozXzor91bsqFR1WeTHcLrEVaoB37",
  "key2": "63edxYAzQVbagH4GBbTkF5WHjpr9ByjeKmqtwsnmhgdwRHaYwTxk5fm45BHUC195ZR3kwU7jZaMw5ntYKpQ9dhSY",
  "key3": "ainnqY47Cf6reozSRfHFhciGV6L2HpVJtefVhfGpJ9HxrPiv1Qmb43r4H9rweo4zU9FLHVPTVqyeCCz5Hi3P7Bm",
  "key4": "539h7oBq8FnoppL5GdC5ANiwJQg9hHD5Bt9UNK6P7SP4kwncc7vJNKUtb8u4ZkHGn96ih7vTGebncPAqyB86DzZV",
  "key5": "5EmAeZAN4sQcYdnN3WLRA6osZXjKzch4LDiWFbD8KwSygbwr1ho7n99qv8jkKGqeM8gS8zNm42Ba6RuW8RKVeQpq",
  "key6": "5K8A47ojhd2YLmMmZBW3B34PotC2muQyMoMABz8MjAqDwhaR9ftZRri4k2WseaW1dQ1rHYq3AGR1U4yUEFtr3Fuo",
  "key7": "2bcfkpbSyTC4oQpXv2bMDXkk4Wi9ijeWT65wDgQg5raMmp3pYpRu8n9qQLCZ6xpqZTamZtM1t2bRsjdiv1Yqb83j",
  "key8": "3HeXJPJHQQ5DAFfwvDYDiPKi1HgfsB61F4gai1jpyz4AX32vY2ArYQ2hx6wFMx4vkdM1K9WuyXmS2AquHMjh3o9i",
  "key9": "AdnxWy4pFgNGNQAazRjYENpgsvCn8kWT8AwTv8aJLJg2K1HGB9R1e1UJNxnK4RyQHcbRSypiTCMpoikXDUtUBiX",
  "key10": "4eYxaeCNNp7U3SzhFJMFSqR6Eh8MGndceTeZqRZsLtUE4tzF8BPHeZGr9srCnrZEvEYCBwKxBXEhV447fkXpDhSR",
  "key11": "G6Z7AJWSv7L5XX42yu4L2oYixqT2qeuvK5oLvhMihwgki8fBee7sJisKM6NyHXuVN2Hfm3EY4nva4T2dY5oFn8p",
  "key12": "2GmvzduacNvcomMPqqqTx3PPPdP7WL4XZmzfd5bVkmZVaG6ft4Zc92ccNx27UKK7GWqLC1GEr6zEGgLYKnmC7Bdy",
  "key13": "24GbraBxZVPY7Dv7yT1MB6aup8jfK8ctJgAKMcHBKDjbgesH63SzexnjeX3H1JBVp3ah2UZ5DSLiQ4j7i5gK1rtY",
  "key14": "3iygnftnJGSv1K3VSQ5N65pEfDyeGBR6jc94KSBbgiH9JU7QBuFc3PmS1trMMfq4hoRiHVYBB4HaajAWuSDQSFx6",
  "key15": "4K4p2FsSxunHaUxM29n6NFnB65Zchk7dQ4cXA27d5KL2GFVFfqeiHXSGmAsHjbSBqqtYhjDiTzFXwoEPPcZUEVcj",
  "key16": "3GGhzZrmym2mM7qjiV1Y7ia26jUPdYdQ1FBc9mddpnQqJPbsusQ6jVQztsS5ZKrrrJo5qHxyouEi9G1A9CCYvABP",
  "key17": "2tirtHr4HbagF9mdq1oheaqGSD2rzSmWEc7dLMMp9GtxzgQK1A1YDizssNoRzpzkKeZFCanrt69NxRfKqfHxr3q6",
  "key18": "4t2Q6BcV5svU5gFjb21GU5mAb6umMZoqSzfW2aQa27vcXd73S7nia76cUcL4KEr5U9BrrQ6dyfqsZsc3Mn4LHwRj",
  "key19": "5RB1XDBAe9z5sU3tEU2xBiviWWVj9HQhwAXrPn3PT1moUJVQCt1fuADkWDCbeBDyR2biUvN9VGbTuBYAyTPuP7sc",
  "key20": "2pBLD86EDCz1ZgbQAgn7u25f4TQ9aZimtJbzQzhYSixDx1uYcxkHhwm6bMenY8cxPBbLSxUtFTmkeNgZDXwMGKNA",
  "key21": "4MJUNe5cfhMYisz1fbssvEj8HhHzajLYbMmaYzsGTYFLEBCtjNmTu6nobXa6smp4v1sxuUrEUfQtUhy6Qmcr4z8h",
  "key22": "7wZhnnUSe2p3VdMEv5k7Naqw6yV37LZZFgA7xuHG1g3zqJed17aWnnMjPPyh9wNaSjJN5s77hWjDUNa4zZnBUcT",
  "key23": "4kRuTNFiyF5o24k7i8g2ivXdtgWjXqgb39PBzezE35B7LbsFFZQdbwMb594VgbHYXGXixLrZiVgrr19advWfkzHA",
  "key24": "2qi4d7KkYtsh6DitDbDy9f5t1ysCTCqYNZexgh1KTeZnPduzGDeVpmZ6ofA2bzr4Y8QEipSpyNWQf91ddEeWySXf"
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
