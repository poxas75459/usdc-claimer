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
    "2tB7UZQHAk9oQaf978chpbTsJXda8XEDTkrHFwjFVcs4kb1hbyhRSRwMSADkDWmUANNqYQyAD8ieRaenpiefiogm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyw9XKif2PwFKDPxDCESMoQSGbRarT1qKd5NPCvtcrHCKyFErGAApseTfKKXsPyXgMn3ox51cnmpweEJZi1z7PK",
  "key1": "29TN47MDCwwaXg7VWeHruZRKu8uHpGiJBeZ5qqKFwv2AggeHGasYCqqWQ7TuaqG9qnkkebSq1k1npBmh9Esb8to8",
  "key2": "4xpo3ZbgqVXyQcPn2n9RR8cTAWLpjHHCG3UvasZFhsxVmPenqk2SiU2Mb4Hgu5wgSgJDTdkgVhGe8y5Tubc6aKav",
  "key3": "4gmrQ1UkZDwfCxggyvKwkvmAfg1i6xYyYZbbovvDaVggMixGYvRFThThKFDwrQG5b88rARRmPtumiQqdvZX2SMe8",
  "key4": "3zB1ehKfys4P1oFYNE7Ze69rcDQfbfCwxMDcMrSdQaaRE4CyHUxk6bFbWqewWVdhkqhMyv7kGKVAwwRGPMLWnEJz",
  "key5": "3wdbYKgMpmFCFm5sXN5EvDLLvWx3mpHoNkZEd9uA87u9kibnXcqQZfoxYrh53D8RoRPzmFLqNryYBLgJfagNW2M5",
  "key6": "4YQyYC8cMfY2obQAf9Tw23GhUofw492KB7DWNEEt3nsuLH2D3vXNiZ2sZsk5aWvs4KMkBC4CCsYhK9FuWaY8ES5p",
  "key7": "67fXAx1T3JK4jLb9FxYVdavFmvVh8yKALMfYT9rELicf5NkqiAgZoCvQnH8L31TfMddkHfmgFur3k8wRt2jqzmJJ",
  "key8": "aqUoDjxYzJkGyeversEjv1TTqwQQuu1BZ1Trujoda1HiqoKMJrsL7hjCLPMaKiWCrdEuadSSch1dKwCwXqiSHNY",
  "key9": "63MzwcgVKceSYZymH4htR3dJDoLX4EesecJPqMhvLJaAwUSyDC99fq87B5UP5QjPWWfdciTg9zhcKAnqq1XYqABC",
  "key10": "4eWAJvCMrDY7LhP1s6bY4S2FBH9gS18zjE7YnbMsYps9e4KxQcfdqqZynMcgTZzEAYMAbhrdbsefWwpY2k3JprhX",
  "key11": "fFJiKGkvJwmMbnhh8Uo87dobVDMQwshe4y8ZvWhcbnSdJgGFgyiXefZRRKqH8fdaKubNXavwEn1aP2kuEnHL9XL",
  "key12": "2a1qbS1HcPJ6vT4JQwTxnvYKsLxdyhspukK3gagU8LYdCVHZYUkzft6MDxGfN6e58q63vYJrmWYiGGS8TPH64WHn",
  "key13": "JEe5J13zhNdqJWjEGNHTiGjmDiZK6mnh3dgsk9hPjUXqx8KgG7etkjBARkB6mLvdAaZwBHMzBxiFVic5XCH9VfY",
  "key14": "2SkMJwqjwERPWYgka9QUFiaBUoRtaMjhN6h9W6rLtzG9B8KuXoKHXsGKywEpEqxbVDb6sbCTmM4yh6psCQxwfRuK",
  "key15": "3VbFX8Xx5mKU4916VibJRnRywFLMUfMWVZY4JeojQJGKE1z2xeWRic8HC7HJXJnYsZ6pbHuFbxu4fyHoGVQRePtp",
  "key16": "zsHcFu121Mc8Z49r4WkrEdDz3LRgWjJ8K4V9UyBVdmPdEn8hvbMxdPZAYHA9Zw2XKxKtrQbviEYtBrwL2axW5vc",
  "key17": "5fdaxNNfTVars2TSjP3Xd7GPEpPHLtem3B8wy6RrTjQapcs3p6Ry2KhpGUAR7gqCDpTDwweZexGFxjivAJRmRQTy",
  "key18": "48om4iqfATyNaUCgKx6cEPiEReYayoeYHCqh6CxCQnhQGFrsqK3QpQNQXdF8w2K8JcqQ7BP69gAJcttpWvTgX94Y",
  "key19": "5nnfVKNctvZ4tsgaMSFTJQotNqmwbnEV9nusiweS13UDXT7eeHrBsxZcEiaFigT9F8AxC6JkQs4nc8SPBgFw76g7",
  "key20": "5TdGjaR8xBFD47bdUQRrPB5fjXe1pjh81ZASbPnkM1Z1kmzHb9PzAUR7a739UTdY1TYP1EsRgW5V9GUnEbRzEmJW",
  "key21": "3dQ11vZzce758hcZTfCmKNd1ne9YTw66cwjS98ZTTDXR4aVD8WSD6DzP93JZExWifhFTHaz75Md1pqHusao1rv4W",
  "key22": "3QRyGPG1kh3rs7roWntg1A7PobzbM98V1zrvqdUY7c8Vn6CSHmpCndFAiRTxXskoQ7Bep66NFyXWzJRfaccqEYXo",
  "key23": "5NPN4PJDp8iy3pCqdBFXisX5ja8R62MGcKHGmZb89EcWjTv1E7cYnxfmswQWUVBQDEjmJHtnNsmLfXJve5fR5MJM",
  "key24": "2S4uWTwK7TDaKDoMk6gFB8xuRzuBx3SzLxdDnMVSRiFEry7x5hHMee22Ad6qHiqB8Fbgd8swGEK2AMf9hNTDCkb8",
  "key25": "8mBugrU4NwBJnWt2jhRepf1pZ3Pg5sX4CKSRVGY2jwzVtXjBCob1awqZbj4PgSKbZD2AyzyugLNAecXanVPdNMq",
  "key26": "Z1cLfo8YYmUvGZzFyMj2Tf6T12uVBGcxVqt19bWUSN2FUTfY5zzF8pGnSbDpmrsg9SSViPjS7YVKj4mVZCaQawm",
  "key27": "2TjpA7o8aNRvQegXZFuVmzvDF71DnWfZBpesJXxQC8Wv6D7FB3pqnpU2UcqotHMdNKGG5BJ87SaNtP1JBnuoyJev",
  "key28": "3kjK8XgWn5bXppGFyj5oTNez3Y8VzyaaPo9wXaNMV4rjAA9LKWPpGfJaEsQajTtqcRUvuKMJv4PhMKcp4ZQMwzbm",
  "key29": "2T1J5Ua29CDTtHFqVtt9RjPKm4SXxuk3MvQptxBkggPQWzksVFPsyLx5rsG4Bb27Ha8xpGXJmqSbY1tbr1h1CpN4",
  "key30": "2VtFxDmWHiYNvC23ERMGLDwM68vwdP3QL92mGRspx3rZrUbar4mTJ47dj2zK7ji7rod4MKa6cjzA4S7apuUBSFni",
  "key31": "4GUDyHZkkiAodEuRxeNGUsbP1ovf8MVSJeAhRaQToYMGmHJe6ZgoVgepPvEjLA3FYnqr37RgmJpc34giWZGsSjRW",
  "key32": "4RrcQQV7byLjUisV9Hq7nvA4EEe5fNLNCXKcRMFo5SCABonsVGsYt7g6oKC4PCqJpeEjAZ8HJJEqT2iv7PKEa9nx",
  "key33": "tHfF8kwVPjuHJRimYvgH8Ju33G2Rbuj4DKpnDfZSTCuxg35Toi75QuXqaMa8K2Atpo6TENtGYQzeBVjcXVkS74y",
  "key34": "Rrq7hjct55zWrXdGND2dPyBpAVQ5gPHYy56w8Jts8dwLgWSmsJKzjBpqo4bb4CCRZb3Yb9REMQA5hG4bc9RKj5p",
  "key35": "4GoTZ5vr3t4inco45ZsPxjazoXRxMQr5egA3fFRUnZbt9P8nqjeW4LUMVTP2hGMPdFGhSSE2i21GfQWFkpCdH67Z",
  "key36": "5JsFYvBEZVpqdi7JXJRMjV8yFQtqznoQMHsuJwnvv73Y9yJGusEWLDsoQZZgfSBd8BBG9VwLq6YavQhGA9WiDgwq",
  "key37": "gdrrhVjnVxfRvBs3SpPjD5ayDag2qJLBnhhMNs6Fb6uRh2LrWbyYUWvRweRowLEQihNmz9FmiLiEoKMGvfFEK1b",
  "key38": "5jif1PCVCasFsk5pzaxksKEPa7DsLRaoFZ7Z7MwNpCbTixMExyQnsUhnencBFk5v9wGdx9eMmXHS5wxo7Z85DVUU",
  "key39": "o8oDsR4FdZmAszukHnJyApF8e2kR8bCMNkhbeRbJNcX1vQeGghx6AxRNNBYKU9orumWeudKuxuixcjaqnwvwfjq",
  "key40": "5njbkQLq4EaMieW4vDhHvyuASGCv7ftm5k9XA9gVBdq6id5TXYYTeU2tAYZ8r3cLFNr7bA2EGxbaK3N3YNdtxj3N",
  "key41": "4wkLst96Qq2RhL87Nz8qnDH3F47XTB7iWvQRNFopvDHPHJSAiaYtBB8ca86rTAPprKZsCLGbtPhZZqmnUA4jpGKq"
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
