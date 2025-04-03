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
    "3isDSn4iRkwRLDVvsuW78Y3d23qvFDuvyuW1vEqK9QcpLTnkGHRMESzKgVDtLYr5DS4NcotAWQd1QqbmbvdiKsrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBvXMqtnBdjrCHRCtvgKhhKnRTweYrjq3xfERzJpu4owk233ChDKFqfidQmUHytNHVMUPTk6qUMJy28ndLziPJV",
  "key1": "VSxHhs5BNvXqktZMaKucX6GM1b5rBfzkZXuvzjqi9sjiLJmEDksZxk23vBvGsQV7Rdkp7EBaPoSgs9oNCWkCUhV",
  "key2": "5nWLunTWEnwsAJjQErApcsfPPajUaP2F2NcqFo2tWD6ZS51Wo8aPBnqE3yx86iWRkmx1up4YD6SDEGUTW7D97YdH",
  "key3": "3Rr5ArA8kBVRWk2zgzudeF8XYtyX7iYutdogtHVKyq5Pc9vHEFhxQpM6st75wM6zzPUei6Pv5kGPNveZ7uFsD5RB",
  "key4": "4UsTvkBY2zbTQ5K3MERHJUta99phjPKcNAsF1zM83RwsBVJnSYRQ1MKCJra8JGFYfPMnXrbaBy6ycHonKZFPmDTd",
  "key5": "5Mcn5WsFMMJgEyceC2pwU9CsPG9oJtp6Cg8dxy8Y9VYhhb1jxwcbMrdaMTJaystvkFDPBstRX7Z7WaMuQ8hihESa",
  "key6": "GunaGK5THDXwnhWax1ZDrvEGNfEMFkYQ1Jco2cFNS1jq7ikgjDN9nHBVyfYKcSbc5JT21963j5bQGj8WznzVDDm",
  "key7": "263i4UvnmW1vPmyYp8cVacYFPfEdiLWaSMeR6RqMQLiGef5y9PasdMC7uKCcQbJkB7ReqQnZ69nNeiYqxHNsokcn",
  "key8": "5a1a4gug7ZqgpTWMGHSsSUcZ8qtzKsctaeGsGuEMqdtWpBvDCmKhYZUMVXgC2zBcDPVtKXQWCJCzXQX9pEF1TE5F",
  "key9": "5ZkKmBHFwejdzsGZUEpAVbaQgPitbH8tW4rbygCjBqfehpmgAKUXEfLerkVnPTQnCYGE9SehEohLE1dGNzhNbjrx",
  "key10": "2j1eQos3JUSAFW1B6cx7jDHMwfjcjo6iEpmB6Sh8nUcytiwKPZDMkmXEWfkFhk2AN3ft1pdKkTHA1fk3X6uo38AR",
  "key11": "5Ft4JnYAGADJdjfciJ7HFRFLzfTuaZB79pt3BnwFXGQEiSKxj9idghTuJzaRAxfWnJ5yC3DuKJyocyfRHBSL29mv",
  "key12": "3BJkDJWJ4UEeJnhdQiApLUuff1BACgCzEvehydD6T4DUjAmWGNvgRbVAgHzDuuHq4K7hpy471BnA5jPJwX42hVqq",
  "key13": "4o9u1f6zhNLzn92e3WBUgYm9Dye93HMSFfAKcyJoRn1WrZqqyBLxJfjyerSQDRAQDk8DMqWmeu31FiD2YTSt76gw",
  "key14": "2rR7W6aPuA4jXMrYq5xzHvTFUZ5x9AtUAs4b9AuT4dpiyTp8R578qyZ9Qj3nEP6qHkoVPPcJfFSqZbUxTCnnEJE7",
  "key15": "im5z8wDeCX66SArzsQ1VThXEP5c1eYQxGHw1q3da9YFXoZWp7bz4XHfkphRndsZTJPLXM3PZfz8QCod6amjDtoC",
  "key16": "2indW4JKRTXLaBvG2ojkKZNjMuqFixnDjapSh5Z8VEYbeTbY1MbzXUCba4frAZZQAcTmhsUvaMadGZkju9ziYDbx",
  "key17": "32on99iqaqZQNFNBqs9rY7YAU1LLSMyjr2xqtgwWURaKemn7UUrSVhHf1iujmYRmn5QnLyzycSjxo69tvT3q6vHQ",
  "key18": "YchxCuST83d9mn3deoNnp4vUWfSuiM3K4pkvTqNQ4dhpjq7k9feicTsWygsGBHuzpHKwrtbCKLLLcKr3rcEv6pp",
  "key19": "64ZyNyCCobpkFcF8FuRwWfhWpqt2MtxnasRX5DF3sw953BDjdACLhPDCVa4CdKrVziNSkUCcDS6iET6G3ueESKFu",
  "key20": "5jN2AgyweanE5XGD54C5KRSit3wz1zT7q6ro9jh4gMLWjvXJPs8cwaLpg5qkjxWdUqJEzMU3Ta7YFeDiH8375xEV",
  "key21": "3Aj9iNVUCZhQp83WRarGxLJBXoYTy5wGeoSNM6rdzWwQZfPf9btu9kcqdfERRvbtuUUu9KWQ9U9HLjt7fAvhpPLc",
  "key22": "5P1cVdeg3XqL1RquV31oSvWPGu1YMnhEMgYq3WcMUW9noeKSKjzH7tQNw8jHXKU2dSEiUrWnqNzMeFLopYpSZjpm",
  "key23": "sEbBSVFf3xG7VjbJ4AnoMk49VgyaSzRtcKaCdc5zE9Bfob2fhpbhQzgYrTGqjZ3vCaannXVFS1mLaZXhQbu7a6e",
  "key24": "3irwSq2GHuvVwpt7BNoCnEoo6s8z7MsR8CeuUD8Z5NGr9PrfB6VjQALpsCWkzXKNHQy2S3QMeDJB6ASEN4Mq4DV9",
  "key25": "52Yh5DdptFrwRc7qNFP6wV1EZs1ZxmcVnSTeruMxhnumsSuu6hqPHGus1yafAMXcY4i5g9VrVgTs6GwxmoH7zuEQ",
  "key26": "BCads9wuhiSJpCFcRfcsAGmXVkS758g4MpfSBScTWWWYnFGLD43V5hvawhUTthBiEQ6EvVAD9vFCpKwcxNASnMs",
  "key27": "5v1RcncL44MPmXHYERXEMVK1FZBPz7v3UCP2Z45sAkn8bHgHePNxLURKUcLYNM9Q4ZkLPSobLiuFeZ4CoUZ8ieRC",
  "key28": "xA3xH5FFzzAZxX8gVyacauNxBKjKWG2ASNdRrJ3dUF5eDPcyjT7ZDVeVuZrFoD9dhgCdrtn52yXcArYoWK8pKWn",
  "key29": "3hFsT7MqmvCxvYr3i3V43LrQE3b425fDepsi4KmhsqHxgHbu9k7XZdL8kd5Gs91gREn9KKLBLnpHCv21XLMYqw9m",
  "key30": "2f1uBvRehZpEDuu7ecxGTdap3nC57gLvbQffZTwHTyC8k7nzYhR4j3cTTo4wH7hVhkESqSFLAzUo1AFmuFhWayga"
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
