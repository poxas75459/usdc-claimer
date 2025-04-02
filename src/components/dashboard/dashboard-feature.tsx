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
    "3PM8EWFMcuxSNC8BQACAtNfDAq3b5Z2vdAyiiTMmrgasvK3mPmvenjhRJwH5YWhQNcrM3BpQV94sDt62JGjVo8re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oinyC2JWqCqwfV9pW6CrFQDUbBCBFC9deGozrGjZ4xAQHV5txxtVvigLKppEQNGJxnjqCjUNb73QoKrdevKwtmP",
  "key1": "3x7iKKJWFhyDuFkwGSNBTdCRujv3qKuaUGrUerwzZThrfhXX9Qu4CkNdqHsreG4Vc8mgyGvG3CbRznDFrQu3grUv",
  "key2": "63L3RSTByJx1SP5o2H4D68pd3uPkJ6dhSPkoXLFn1YymDavWojJdpDQ3hveDb5cGRmCEUheLRJSmNtcDkVvjGj4j",
  "key3": "47oPQgd6ojtyRC82Pmk4Ur24cfjiqa1A2ytT63ptvPv35kfYDypvMnp3WaseFzhaEKP2npdLtyVFu3NaVXo7AhaJ",
  "key4": "5CqByTKdA2yq3h9Ew64fVLzmENUkDTGomiej4eQ6pUPFTG848e7mk2n3GmGGkV2Z62gkZM1PY1HJwe84sVBx9JQ9",
  "key5": "2VGcoG7xwgkmQ2nMpqBiRNgRn53jaNupz8bse1GNYtEvTJTvdU6Fippk6F72wrd5ro84M2xsFJ51kRX7Enj4BzXC",
  "key6": "4f96ykTCaNoEuFWASD8oSrMsX19FSbPTgksu6zPKgoLWAdSMG386xgFKBa842sEMDLGcd7xvKpBXESdzKGAfXkrn",
  "key7": "2CSAj7E5FW1hAUQXeteeixehban1qo8V6hiznNym7gi4GtiJwz7Wh9n5LahMKxgUZ8iy3awWg5qCvzjeJDUR2CPX",
  "key8": "4GyaTs5GCXfEvwHRzTxsbegdXdAJXFXQkfib3oggNzNLBt8pXy55LPYLLZ3Bk6jBRAqjBJGv9JAFCtpBfiWpnfPF",
  "key9": "5K99ZyZa8e7paH5dftj32oTp9ickoXTHHJMP6fxpSuQDYEdNXhNbTECHYDwFPzrHhTKHdeG7QVwy8QgVGiH7eNJw",
  "key10": "2mbeixGjbVbXTTaRbU64aqd5NzfDiWr96FHBbiHcbSxpbxRWWcdtcTr7JQJ681W6DqMwhAgGDHYfGdUmCGwQG5eD",
  "key11": "2TACTTZmubJ9UmVYCqiF6n57qnhNkXV5nsraynkXnNGT8FhRVPFqjFY74VmWx1YoRUmJKsa5bTwLBxaRQP8eKDPS",
  "key12": "5q2V8qsXJXwv5Y7t96YFYoQ4cf3et3CzeoYsUAivyYboJTRTvysJecC8NJCgs35wovhRLgp9UotpmrdtSdLDvCFq",
  "key13": "3i9Ev2NsVLdvE1Unzj2qn1rdkPtmdR8Amg6cwtMdJMqLyEbGQnktnmFum1ayUw8UJJEHMku93kjof7VDQhUaLVp4",
  "key14": "4gqS1GHeGDqDPMbb4sm9qG1ap9e6vNiHDMFFYAEXLmHhRmoviiSyCnzydFzTgsCZYhXnUJQeVixjcXtHEyx3SkH7",
  "key15": "4uBv2bCXPZooJVpcPZm5EPP5eLVKTiMWEDTGwM1pJ8jbW2wTWMd42ruJtb46do7kssfBfrAQWMZbejCECaJrr8Yo",
  "key16": "5dx7cZWCVduzdz11s5ev9zEuxfkWfNBRcxHbbHA6SwyQqe13dkoxuJXW3RF49HySSpaknTPCtqD2uYXpGd9avUdw",
  "key17": "4BWYx38BiNyMoQb4k3XixD2EBxhVPKQmQe8frmQxWins6H38k2sd4F8ry9b8TxN6EAAFHKJuVSkXz41EisSm9xBP",
  "key18": "3PhwXpPGJVpMy9D8EZRWjaQm7Ksz4qsJABPFYNPNaFeriBzL4S6kvCq4GP2UmqRLNkjRuyq4xcJxscBNh6qJCgfh",
  "key19": "2wd2GrBv9TCi8J4MWHcxxAsvHiWgXsrn2RDmYTy6GNr2hzQsgYe8NVhU9TfPqLAc8tKGk8uZYoEH62M8YUaZ5YEk",
  "key20": "2triwEA6SwksSnjnYfrYsLfghX5qdYVHRuyUav27VypmpQMCgrHbufuJDigUN8ngRMxyZwSrpWg2UXVXstjtCVzb",
  "key21": "5YRHDFHf6T87HNayEALPnk2K8TCuCQyvsYRaMCn9VRMA6ivTiC9kGXVhsNAu6tnyXih8Tg5tDMWxo1EfWzgi12wi",
  "key22": "21tsRL1JKMfytGwo593Lkb1m18vyVajAipqrug2AYCwFtDAubAhi3eS5bgsmoZ8cNPtah5azcQY8vktevpZc6V5f",
  "key23": "5isMyDPisc9MjpN2bYskNtmHZHtzDXTDidZ2RKtEmLWhUeYCvM5H8rXKYfSByPmuEwtHTrRbPMcCS5LnQMAvfLoW",
  "key24": "5bri2JS9j8UKYox9TDTHdeBcKYdBSeS3Nv3FMZNxmEqPiBZ2aLu3ZU1og2seSaAGMEx73RcgfvVtyj2XsrAfqtpB",
  "key25": "2x12vBocRZ7d96P2dvx9YNWLaYMYMVuJwq8uXRR4zyrHDnKUvgCtSserQwH9VDtnVLNCTVooYVQPYLGNNPZ5uMHG",
  "key26": "2epSj1Hm7gXuaKkHJvDSkbwLXewqPX9WHwkMGYqBCrHE4RSpvY9RU7S9FCgNii7WLTz4VtpKRF8fQwYP235NvfgP"
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
