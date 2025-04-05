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
    "ZRkqSDJzDxa1dPrcCNZKYhMkydHygqHUZiY72prh6LKj6jiY1VGRUoBXQUwr1ruvnnviZFP5zboYjysoNwJd4k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUoeQRQdaU8YZf1zMkVEhCAFMagLeVfCc3aVJQwcNHVv89bFTnCGTrj9VwsL2D1DHwRimPVxQ6AXVuJXWzLFpDA",
  "key1": "3iHJLeupopQjQhYBKuzWgzLLYYs68PDWSknNXzkYj2wmB2pE82JZrGe7eNnFaSrkT9sPKmdSJiCaoUmUf94Hyty7",
  "key2": "hKsKKqNL12x8hhCkqKdaVt4sKGFENKiawzKeiY9MnYbD1dX4dmdYgkXbJthskLdH4bSmpfRUtW5dxLiwQtFRRsT",
  "key3": "3sjggkaP8gALTvb2XvUhVdxYBWtX2JeRjeoWCtsP1n9wzHU2gZw2A3rErFWSAeuDVVQvwZA4Ggudw33pfkX7cQr2",
  "key4": "5hWmpxue5xttPC2A3TaopvXA3MNeaRQ6C26WBcELh5oRRjgRRbbgqcqFFw87CkAToatrz2h63Av9qWdZ8JNpJCRJ",
  "key5": "5JFGkN8dEHHfMgd3oi9iK7uWUWC9sECP8AmLS1UJo8aStMwB2WxdT6BhxfQu7Ev8bKAT5fJY58PFhV65q1xSy3LR",
  "key6": "mbeqQzUJP7ARYMr99tjDaCfVKYesurxuJTC5hntJcPEenRfNTdcHXMpTgsdn42d8DKohtuXDiT5fWQ3u6yw1km9",
  "key7": "dZejSg4mj2p6G5XJTadHXV5ULYq3St4hGgxrJDB1AcUVhnZtxe6g7qfrVEyPbGoaUvksS2aNHNemLgLR9QqZGMV",
  "key8": "52uvK3jFojg1uReC9eejhX2c9yBBA4dHM51VgaMgABV35NfqgsnV6qiVX9spGDjcmFFB2jd1A1XBpSBViq6cC44e",
  "key9": "r3kQQ46bkaRsTjRsemHaaQEc1oY9ZMDMrA51Y5PujLfm7EU3j5Xbu76Y4ttVfxNU4FQ7ux7xSU29Qzs2VphGF29",
  "key10": "4bPQNG6Sdqey3444QRV5SPMn1nfoXrRc6tdR6BKuFfmUBVEa8Low2oCy5wwLtvhb9Dui4Nqx25XGjnxHpNMsuhBm",
  "key11": "3NyFNf74yAnhwL43RtEjva7KrGqAJNiXfhanxSw19bGwkEUhj6ZkMjFsFuM21Lo1HQYVNu8vN9MifC3313ziEKGs",
  "key12": "KToQ1tU94V5eqiTiKygw3oJnvA3ENXfwGNEsfSD2CcS3F6bosB73CpZRgJnrTNDdWiVPSPSQ82HuSZpGtpkdd61",
  "key13": "biHxXUetPM3zzWvWena9RJqCEYefF3Fj9waL9mswxEd2bDP4QTQcEmDe7KeNg2Qq1pAvoehSkXHz34NvEebKLsQ",
  "key14": "47nHUZTm64PFNuSQJRmbqpGBdJK3wgih9tizcaqKiFBD7iTGfEs3y29TrKjsmXg3UuR4RWwZrayBy9bE9cw3UUQR",
  "key15": "3YUtZbRKdyY2941P1PsTG8CVCaVXkc7QHQes47qQBocuuQ9uFLUR6sTST1KXkSAbWjv7U9B4661aoKKXe9GDWKZZ",
  "key16": "VfDFUPVVyjajnbzrbhuGF3uR4Bf16zXCFFJtP2M7NTzr1YcK1jkWBjeYLJvgdg7cGsA5qUmfbYQtwQetKgyJyJk",
  "key17": "2UT2sraqjrN3YynDrmJrc8MQS23hpXVFhzk9ChGN1WJUjDW5AvorGP7fr6NAaAZczy3YZHM1eDFr3gt4Logy4vvz",
  "key18": "3JLAFqNug1hpbgFdt3ZWdh39gMTCRFuAJDb8p6y9pM12KqePVJU5KQ2j7tpBuAwKPUt6r9fjx52vTCZ37ssdEfCD",
  "key19": "5tAP3PwrZboXMMHNFenJTvhPsnBhLjmwuBKDdE3KgpFWE2Qt9zD61BqHMxvjevoBDMPejt6WNwT58YaAU6bjHwh4",
  "key20": "5D6s2j2QPjYM42tspZbk9yMdabYnedb6bkh4qnKr3JHULS42jfBraEwhaeTZu5fnxV1iN9dUhbiz7UeiKXs2senx",
  "key21": "59369nD88VYSZTzqBoDrSNv7eVH8EaoLA2nhfgWjtZAkjiRYQr97AfC3HmGMHXjfMKKyL6QqfdiDJhxS3CsAPZzm",
  "key22": "5YzFGkhE6bdTBo9iCJ2okeu5sQ8yGKZTWz3jNFPZFiwuWLqwz1qXmVeDD7vcmysnyDVirYSjDb1soUAiBzr6TmFu",
  "key23": "5NPENb37Ay8rFHDm1NVENyHY7vQvaYBVoRDBYTizCNrtUQzLqTBaKMFNoS32A2b93JktSnGCBQXB9QFys2fQEcpc",
  "key24": "3AR3Z8e9uy8yNqLbz7Hf2nC6KgvHNgEGBqYaXnjzX7VsVjVgULTmbUbBPwk5VRM37RxLiFu9nzWZNxSrWGFkvVWk",
  "key25": "2CGpVyot9yPBwW7kEAutDiwgW1SY7cttVRnq9xusux18WmQcQeET3J48FryJGMCKYQ9N4RfJu9UknSHL3QZi8VbP"
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
