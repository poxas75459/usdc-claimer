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
    "48qXqf5nPDBgsLK435WmatpTykzGDzCW7Fb59EDaPd1YydDg5kL5eqHMpc7aYmPpZey9QWBSc2frTy4aosyUt4Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wyJ7Ce6GZtf3g2duEDrtRX8Z6T5q7VZoR3ZyCvRK5n6DMSojzaksoyViXdVeGTxFrGt2dN3cbjKGozBURJSeh5",
  "key1": "36FYEv6e3bgcnEsYG36hf1uLTaaAE696QvpH5J8oVJHXSQ2qGe1HfJwNmgPykSuPUwi3gc424fGeq1TFCJyTKdTA",
  "key2": "Vb77yh77Zx5QZXb5vujTNAMbSAEniRfTCC4sR9ovApmLwpjC3TKDeUGU7phVdKS5cnwJeQ5BCaP9DvyEvhM3A2F",
  "key3": "5F9GKdL8TKEmRXvR3DVEi8KCzW4itxNN2qm1zQpRTMoKPPppk8wCy8fZnEhaK9gBk36sQ4s55zQGtsk6nm4iuvLZ",
  "key4": "21DER5LWCTgzBZMXDG2VrpEHnMWouCyNbMBAmg6yc4JmP89mAFF36KpDfheTnhHmb8NFUoy46gDegZ4p7kFGtoaU",
  "key5": "5hgVVuZ3WpYSiYTpfGe82iah29D3SRt9VnK58g5JVGUY2yTLvje1sbH6kxFTdLB2cnx3f8Zx3Y18Rp3cubogUa6w",
  "key6": "aoUtd7EbpZLMtj4nXirs6HHcLMfxXxYTDXfAzJH9H82ev1m7hNwYV9q8gEc8U6ts1bgqeg1p8A7YrWyeNP8BG2F",
  "key7": "BxTsXXHygnP5vHxdwwKeCpU8JsHQ32hauq7u1TPSsG3btbMF7YnRryJU141Ne8sC3S3iavnAMgJ89asSsvVoVgR",
  "key8": "5YXioxv1AJusoGJuF2kW1APncfeojRSbxEQzVWsxcx5rkB2uKzFuGquGMPWPEhNCeSWg7XfEEqtkSYQo6yhw12QL",
  "key9": "5woLkCSqLd8SEvmUxgm8Ym3e4AEA8YEp6p4RcrfmPmVgaBbLyCayySHoMB3HDA2up4YxDbCNxscUeiJkuvyKtGAX",
  "key10": "5w5XJ9yL4BNUZgEdHfpfPdhEu1w4qRygG6eFCVww2pFUUi11ZChqRyhkTGH9gWu5jrPgms4iAp1bA2S4TJo1kLki",
  "key11": "35hAfit2Wv97sft6wFTew7mmcLNn125EtwtBLdaaKvWWTnko7uo3XAu6rwF6SZcBMjDFaFb9wtHUs4SnyQZZ6vgG",
  "key12": "2BSXUxhckUXnNoUknLYuVUqbGHPsq8xXz4RcT5fuBbt2QTRZJ8Pnm9C7LkFARe2q7KLa9kdWu398prDDoRyBEKEA",
  "key13": "nzCTB9BBEFiLYfq5ZXis85cteFW1cs6v7DxsJBrAtvqLWnxWMBQnxjWomYXGkAmh1YAix9F5rA5W932umAJQ2c6",
  "key14": "5Dkpq6P43gXAbEjhVTTAdAptKQzpXUWhmBfakDVrK8gdMpfUSwqD6hP1rEPfQk5syzA6BwQQBwemhTRbqAec21r2",
  "key15": "4QvSMMUp3GVCcj5JWcNKzqZt1nNXQatb8kojpJQSYNka5Wyxk3akKmnEcxmLLzcUdgwxSWQUVJj4cegimqq7E8Xb",
  "key16": "AzGdeamLCAabNHAj3fecRkP44wT4YoB7kCjffXaVZz4HD3Yaid3MLTFmyWBWRkJEpaiuPfVGKrEa89Ye3JKVVG3",
  "key17": "65AtttzxRAzvjRsE2UQowbxTJK3RfLUTU5xPheY57hXLqtFFbR4CJ8HzsjU6NBr1dXqeWvRz5yj2SnYLFC6UfhX7",
  "key18": "2TRsM6rUvSxpvmsKrRYWovJCaVw2uzKDSkoyDCtCA7qkFpmPwsAnYpvH2e8dPomZWdosmqVbvQmSd87HaFtpzoTA",
  "key19": "1xy2SeUfSmue9w7vvwzF9FY6jpZTfYesf9kuZL73CUr13i7zQ7nMYhYZnLT9u8UPA6Nkk8EcQNdMDFECD52e1MK",
  "key20": "PvCprLRCtoHZj5vQeNnuDngwKutCaS5khDqvmPvz7d6tnNMhWFKgZu2Mubxr8PSdh5k7RVLrP45dZQHwXHaenWa",
  "key21": "3kowFXg8hk3TVk6NoViHLpV5fyxYzMuR8MrYbEQYKKh4zfPzRGqnae2ocGkkzLgGE8ibXbKUYFmQrnwxux62GRGL",
  "key22": "2WuWPAzn9SFDeRQvJgVwEfbR1hFh88UGk1JQN3DwxMZeESTZZz1WWmTZGxpxe7FWqbNC8DXeEmXZyy4DCBEGUU5Y",
  "key23": "wqWgYYdGhvAUa8bPMiDfEJc7CBFq1qYRHJDfAJzbXVKuCoSnffahAosyMzHtmWypzrqDqPmZEbCE8n7ojpFj1zv",
  "key24": "3ZrFYWYWAtzzxKK9kKzRzbQJgF5RdxEt6n9EkjiJAcjpUwEr47f4zP1dcsPAodpNuuhaVxGZxcCC7rb3Hr3FSj6e",
  "key25": "4sPUBJNYsDLsd92mLT8gAYeF2DyQnpbwSAdbcujptTSnwcL3MDmLed9JZ8TJk1vYPK2wskA2ecDtUkMsdq4WcadS",
  "key26": "56dnANC3jByALg7gxBa9Gz4jFTxaDqmbDqh5rLSeeqZQZo14cuCjLRhVj9bzYoCVjc7WBJd1LrWuRL12DJFxabC9",
  "key27": "2HeMGdh3Yrx4JSAhK1p1rb1mpiE35ycAJx5xrBeqWwboToPLe3sGqXxmybY3yH364zvoH2c8AbepFyCdYAB4sBjr"
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
