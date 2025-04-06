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
    "5CiZLNWcmTdxAZpBqrCoCymiPj62Bjgo7WUqcrgCY8kfa2PeiNmjWWNXCdiq2gWApUifT1DnAwbtboEV4zJqf5TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CASEQUnvXT3ETzJ7vpZ5PTQHPwjLA8M6yu3QHrUZrNpZteEt93XKXRwRfZ4ZctiLgbfez3Qq3xHAoL6gonKwFz3",
  "key1": "38z7VBnsSzJQbQbox9bcPM5nSzhsSAGJC52YbBryRm6PaTPKSboqgmYdXW6rNFPdoEpTvq9VB4PyxgdY5vL2vLYT",
  "key2": "4eKB5VPKp6ADuGBw5WWEpowsXB2dMjRKWJRtkz7dveLCxcs4sJ99Kb31zskX6ZkQ11fdykUXmmvMbjKxDwdmfY26",
  "key3": "24SaZjyLkSjMjCuLcRjje1YSHN5kcdjMogwZFQq237tPbCm6DgxKiKEzmg2ZFyCbaTSx9ubao5Nd9yXvJwwsPcXj",
  "key4": "4nAjz4EwLKb9oGif3N62cMP1M8B6zYjJBs19pBtgaApnx7RaTQNzV2rzfkmsnpBEpZMv5QYaJBYPKWRy8a2QEuN8",
  "key5": "2fZShZCwhCfGVGvu18GqHKC4ewBNmv4zAbsPsXEei7NcAFbdXypPHehyuWRq7PvwFPgeYt7xw9yfAxMFXTd9tPSS",
  "key6": "8M1CBn7WVA6qQsNg3aHY9LY7Puuk5wr51tosAX9ftBHydBXexqBBNS7iBvGBo94ajTXQkCXAnV7Y8DNvJh7MLkG",
  "key7": "3gjw359BbK6fwKVjXWzV352rc7VncrGJbZKpSURiRJpS6GJ6adjF2MzG9EDPo4A3fFUzAL9SbAGH1grNhiHFa2TX",
  "key8": "pHwGVxsjysTqvPAwppwyLerzfaSrhCwPcjrAfQu7CSKJnKP5fp376rbUK119Adp5mscpcsXRBRNyPVQs36FxFyp",
  "key9": "2FVfCp7RvxN7VNmJ7F912QuLhEN1C1ecadPTAw1TvC8LMNpTndJKXYbcuT9QCaqga9zvho5b4KLVQe156QyfQU9P",
  "key10": "U7AWvE4UTu28T9XaQNDkS978yXppXP57iVEYxgkJ2euK7c97zhS9VYcCpmUyYb5WWeqks9dPZGSELcVwizkvmMr",
  "key11": "3ssyptCcTjPrmvUVfFZGs5LaMfnUodL6gE7y3xYU56w7BFXFK6es96Ex8JTosPHc922exBpeSS8Q6YeSQVmnAm8q",
  "key12": "4WkQo2YXe3dWuVA2zZHVqfXPGcEmjUSiXnULGCEkWEis1wzJc5C5zHJ2fKjF5nipJd7zEWyZ34g9dXsX2EkYtAKL",
  "key13": "61i8TsnLaxEnyehQcNYe7JmXW3KuMHG2SxqXyKxfi9PNbkSrXwEt6J1KoTsmf86HVxNutX4vzezfEcAiZgHK1bBB",
  "key14": "64QZiwRGU9RMPsiyCsMSdZujCGihZsew9tv5UigCvyKXaBmNWxC1mRYjkRmAMFode2W2tEhtfEMXTiD9qGPg4djq",
  "key15": "2ZiAghaPde8k93S5Wqj7uv6ryLM4XPbdyUExc8kCThminrmh54rz9SDJ4xSKfTMTjcyDVpc8jJg9Q6rt7Ur5kJd9",
  "key16": "354jZAJg9iK4z3xngiBLXsJsvVRFnz8ETAgJkdhTgCryDPvf2yxeKSfJrzL1rxnJMRNPuirCf1YJFa8avcrPZgk5",
  "key17": "24kC8RTY5Qp8CjiRuNNLD1pnLqLUQLvVQdQyrkFWEhxJnnLYznp2qYoKpz87SnmqE8JpZ8F1THpFhVzAnAMqpDM3",
  "key18": "5i3Gw3oJ5rGUrHCNzG7KoP8N1zcfoPt13CSiM9zYtA6V4ZyBVUcWmPWgp25djJ3tq9d6WL39EnUjdkVgAsNxVciR",
  "key19": "3zDkymLuZcgmEsodXH7is7i1fnWsgf6Yd39XKZWysCxk1pGbY1qMiGzmAzF57Wtkbzu2o2oh4c888cKDg5eCY8Gh",
  "key20": "3KnBdDGQjHxQy2yiHfuczqA3rJm31Y25QweBX4Eujaca6esFUDqAEUXPMweQ8FSELVjxegYKEPfguYcdfh2jm6Wk",
  "key21": "49DTGhCxdRAkBiUkmeZ5wh1S8X3W8gQAkh2bp9qZVqHoi3vaiDgFR6iiyNHHpk3imvwFiApHXbVbduuZsPgAfYo3",
  "key22": "A6mk93Spfb2YLzu96ZjxAk3a245hP9fege1mRGapV82uHvTfshYaawZFoqL9BTs9qPLRX3tJo1wucsGfv1uFih9",
  "key23": "2VwfQA6f8num4uUW5tzxn7DvXPbxPwTGAp2DYrKnAi44fti6GigS4psr3r5EhSWMz2A5hmWokBLi3xRdjXQNgRWG",
  "key24": "54HroigeojNPYTBkr5CUQMYfcvDaqMhGKfhNc587m9opjLL71L748RvG4Z3Z3fq4ZUh8dbEi4XEmD34t7CgEjtT8",
  "key25": "pwyoUm1hUjfjLrfh5QJ2CvWG6S5XuVz8bHj4N4TGnT1RmXuXUPt7jC4GiZbFpegaLYrtQEWjDw8h2uwReciwSa7",
  "key26": "4xMDRVesebeshhUJW2AAaqTngAth3pzzD8Qk7sWsweiDoCTgKUUS5j8jLH1KnqRuqiCS8jgcdYat87d9bqjgf44G",
  "key27": "2XS6dg9aKjD3iDWtuQUmAYm3yaDT84c3Vb21UozEHToQYcjNZHu7Z11Xzo976LgyTaYBsgK3vhfnt1iYmD8YLWxN",
  "key28": "2FFzRF5mZim4HUVqbxgdKaWpQU1W1ZfMLpFLrCyKKpmnTDoFZk33FndjHvrqkN8S2uCydXYuwRKmNExQftQquM9p",
  "key29": "BkYd4WbFq99HdvPJ1zzingtfxU4teHqVdvDznNsAyEJjmhuFpatEei3wBDfJKHgQ6iDR7NQL2UU22XcNqJaU1VT",
  "key30": "4weLKXkeii15EcDN5N1Wv16o9qnE7R6HpB4YdjNr9bBdqKoLnpmfr5ixDmU3YEjPdpGpYaCqSeTAu3afRDo97jT6",
  "key31": "2fRx9puSbWgDU1W5TcFoNForGbG7vCA6FVnJjmP2nWSFZjcbABJKCNZCYzHXhmrQTRjmJxaZj6NqZM3AA8hkJ9Y5",
  "key32": "5CK1fQgYbhu3bK2TPMcNFBCDaUvmDkJCHnDHb8ZGzMkz5Evpb2zJiC5w12PGKDoQHcgSYpy6GxStxJZaZbjWRPti",
  "key33": "4br9PWoS5qku91kn6V8KraLYSacEmrjf3AoVarpZTpZbd8ryEVba4J1WWH7TrkDMGeUzvuVPvAT75H4jjhxYoMn8",
  "key34": "3teEmHUsaYJepwa69sXeS6TjypQqiCbZanAGPxPKuANRm6vrQbUzqRmjjshMbfqa1bw1MLpug7UmPPLr5u6mdf1F",
  "key35": "5dJKyTR7ecizRVG874EFFEPFe6oUhhyvqvtwX1CgvA2YN2muMGKYFurkddfMttieq5oqQwMhJSkTjmsiJ7kTnVjf",
  "key36": "53TLVzpjF8RohhpBiHpqfggwpGXRMRFSgCEH1Y4eFuDttysnLVjzw7Phgf6kUdPza7Z1uWDsu8vwsSUDet97anUb",
  "key37": "2Z6xdVy7Ut4urmYmc6fEKo4RcP3zgk8c1kH2w3RJ2RLrNCQQPDRkMsFSVj5ySSxsJppFFiPFRYHMScvECm56jNeP"
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
