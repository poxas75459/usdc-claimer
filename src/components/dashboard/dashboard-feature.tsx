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
    "5ffhN7v5qyb2bC6Th542LmJt5YEim4tM289VEVGFr4JMeJPNS87gEx78KkUsrnwNcMbAY1iKJnsRwXGpSvjmtsQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dnfXcq3nUH4JBHJBXARZmSFYJuvz5j39SeVfCAgffmHNsPTaLGScEvRfk1yLoUUp79ZZoC8FLhsUQd255ebXQ4u",
  "key1": "3r9Sr4fwpAE9Vubhq9mkk4Hz5ksJPFsVgMA8HqfxVszAGkyqVHFXf9PKqc9kxiM5rRzzi1WsZ5iFH5ddHgqMVQ23",
  "key2": "FFtAbu8ZRpE52fooZ897oA4ZtdC2AD2SuJqh4wCJkqRE4sXkgrTtwoHb91eKjb7Lpyh6szh5bTh5aiV5uwH8qv8",
  "key3": "5aGdANv8sn5zmYua5mB6tqVNjN6AiaDBmkgpULbSS5tyccY2Z7i6ZAATsLFG6Pcth7ALBH7dy6BGRYGyYVA1VPVc",
  "key4": "61ppduizRCUUx9kMTezPx6uEux5vcWhv6WPd52im4RHh1BJMAJ9Sni1sisStfedkgaekaxBGN3Kx6u981331pMSS",
  "key5": "3wM16awHDZ5h5Nn8DjrQNJuQajrynQigVBnRtjKPCnCzBRjkHeRbt7vECvGBK4BPgCPhUncb7Gv3s3ukwPHwiFaS",
  "key6": "4K5Nu8R8FrjmR8wtGzzPeLtTybMLSHV2KhStRLppuQKEwV1cYEsz32Y9TuGfQJ1fKiBsyD1uLb91QYnpzu4XTkAv",
  "key7": "5EAfGLDHMbhQ5C6Y54218CRzu6baEjneeFP434frJqm5zKKiEpCq9ac6guVvFSLTspi4DdVcNQn4PMnZrcmLWB7x",
  "key8": "51qSanxBypqB5eWJPoBNpBPBVRy5Z4EgfK9pUwjkNhKUgXwEq9jVRE6spDDtnc2raUoC92UHEHXTEtWqepdoMVYi",
  "key9": "4wVwkk8rzyi5Gjue82aZ5hBDZsUCc7FPNdyeiUPrfUv9XoeELENtRrjFuWKrJuVPFk8Xb36Fw5p8FSFLCt1ZX9yS",
  "key10": "4gDXgSMbPCtHAD91j7KXNczZCe1kNDkQFSJhuDLnraNcFAStqccJkhrEQuQuA12Psv3KMXZhLn7Jf3wyUecqLfEf",
  "key11": "4454t3hTNf4YFdbr4hWVPSAcX6mt5AgepVHGy9qLnV4L9tdGDk4y4pfcgbpE3yDe6PFLtdmUM1ydHuP1KU9bro5H",
  "key12": "5GEJkMot1C4yTZjjnMoG95GmLvcRbtEt31YW7SojR6eZNZhaV9c6TjnHThrfad6GmgBsgqUJbZcuBFEKkucErmqC",
  "key13": "5vuquhMrHCFBraTZK2ofRfbq9dReanEahds5YBZZGuepqLzzk5cxNJkUtYyLrQhXoWocBYgcS7s3w3oSUhzhEDKK",
  "key14": "5mnmmBJNRgCQuSbHSDTXEyf9MJEb71cjDB5ukzy5AfcRYsHxxmNKuQh2qbwQdUbzpQyJoMdAJqS9JkemJxCx65a3",
  "key15": "5YPi6mMxAp9XFjTAeKSA5oG6fhMsHNtvGJv7ReWjp9ujUhj8MqZ1D5xCTE7TFNzEH5vBLqB1oTjtNzJP6jQ4Y7xw",
  "key16": "5VemCojVKKQK5j4fN5KuJFB6DzZVSB84FX4LRNiptT7ikW3bzFCmxSh38exFNxNbPSSfMvzEmjgWeiNm7odiBfh8",
  "key17": "5qVLenDR4Ui8Zsb22ZcwoonuSucdQzJN5FV8cXAk4GfwJRdv7WD4sLfzvkgFwX4uK1X1FMj4nFQByoD7pVw93phB",
  "key18": "5hBEiC9w5qgTdBPrqXyUHK9jbx61aF52kKwDAwFL1MW39sNSHKYpjB5hChXL2j1Y4BKETuY98qEY1S6DQy6pLJtn",
  "key19": "4WmfGkrvNhL6cR9GSWjirzZ15fjitnPifYoY43uJeb4H3CiZJ9pGBaSDWLXxvNAPfVqRufS1YCJWC5a57SfqxoUQ",
  "key20": "wpBvuMpoDtS7myEgHnVXnnDX6TAqj9yTsxHV3Km2jhvPixdKvAUGud6ZqK4ApP3gArF4jWoRAkEXtVkmbrXDFcw",
  "key21": "dqCD5wbV13G3x67VMqjqsFt7EVHzgWFisdFM9Ktz4gJzzw471epKSYiwiBzMoYpM5NPyADK55QUp4qrkyhEXBw5",
  "key22": "2XgyAKcCKkA9EQAGYyDMiGgkvgbktsjjvRktwVPna1DiPuu8QipyDH1dJvFxTvXkU9uXyxVL4ZAiYBEgNQd4d3uC",
  "key23": "9kbTyKaBUznDAuctFqUihcPLMmPqq7keLigerD2Haxvuu2JCUdsngb1uEi4a2m3tR1hbquCttjsnFYjN64S25oq",
  "key24": "2Jf31eh16bhdzyDvERS8Azhjp59hK8kvCaE4QCTCA5yR1bG9CFSJ9JJywYTqUvAvV2i1DchzfAe8EWBxXFJTXAZ8",
  "key25": "4MJi88qk79zo81XZH5yeGV21sMEcvGUiZjNkp6cktiSXTLnMqDeESziweeASeB6xvozZ558VbD2cDt9152d2FJpi",
  "key26": "5FN7utrfH6vQX38VQeVwn6H4jJgMaATocmezybz9auDkr4uawWV9s2BBk6m6h8yE6TZPcMhzmVXFeUcMPcoDFuM"
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
