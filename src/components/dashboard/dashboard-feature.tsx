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
    "2DJyFARjfhLq9ouuFhk9q9FnXn4X7A7E5wrVFZgPt4eMpY9XWp4f3q4AQnjaVcqydvg7sAnKP61rctV6rQbwDDNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jDyD2vZp9WtArfTEY3yuLtWbVvLSxVbBZkg6N4NqQTACWQn9YXHfh3Uy2rYydC6AaZwq3SM9GQiRwvhDXBpjfug",
  "key1": "2uBQuQfjQWr9Lrvo4vcbEN1y3t1awkcyaJwqGGdEia4jAUApurDiaEMXgkJhoJMDVbLrStG9cGQZYXBVB8QLwciL",
  "key2": "5X7ZDMPHK7H3jce7oJLjTQxd5AcbQ4pxBaaiunLwpGDwq3Kgom189ks8hxzBaZin64vKq9xSHn73VMDYgrLHHf5M",
  "key3": "59zJ3kTvhnZCmyVy7FP4oNfjiBCS2o5PGxxNibiY7sA1iEvGSTvz7VQXdoEuYJAja4Z7gULUTEuApaS92YpBfgZi",
  "key4": "4Ucuxzt5MzxyMDngcNaRSkLUU6TB7gfxM68QobR2RLiV6oYRP4sfcVZeAwE915NbVLsJRuKpVDbwdDD1BuXtKWCk",
  "key5": "5DruAZYgmxGkh2CjHbYk8krabsoAAQuNyDR9MxdSLbeniQuqnhfB8nRNpLzFhSLdB3vuegVeHbCav53PvpTUXrBJ",
  "key6": "Py45MX3UKFMDL1kYiYoceWHmNveRgEsBSpcKdJspkNwtuLgNsPZCDkqPiaV7HR4DWzJTxLg8pb7GiQuy2KyMFR8",
  "key7": "fVHbkgZAivxT66ov3wFvqyURrVvWUs7iJR53bxGTBXi1MLvjmF4k1gpKMU846JAt7kXhCgsgZXm9TgPq5sTWts6",
  "key8": "2rpAvadLwct45MitZHqGRcuXGNLekHFGaVDPRvJQQAoYUc9vbVAC9ReV1rJ7orwa5DcuHFEarBtZ7sUVYduGhk6G",
  "key9": "QRrwbR7BanpLvVkCwPF9P9hrzWqmpGbk8bgMhCuZRTuw8pYZ49FiaTNqjR641VHWWwti4yBP2TyXaJAp4nzKtKd",
  "key10": "21b4pAPXYwrMKcgfYgzNefqQKtxfxYoPhLHYc3MXDtHwxhZzgeHPxtqWRxXRxcJxSCsHv4EjTkJojMuL6WrrmKg7",
  "key11": "4DC4aM7gBMe9hWJmWJ11749jJWYg8nZL1aLSsEZCWFa6KGgbRgwXGdraDx68iLxMu98kQqaCYFWXrmY2S4jgZs75",
  "key12": "2FdfJTXRSoBTk7ckwbB35PGFMBa1Bty6jqehkrh3sHyZjLLckCAsMipoGuL96h1e7Y15T5bDDmNQ4SVMnhWLH13d",
  "key13": "4qo7Gpjv8TqWhsrq484iohNQo17u1eTMdy2wkT1XKnfoh98WuRxUvsef6RkqoR9FbvTYpW6NQRyhzQBkZUn57uJJ",
  "key14": "4yrkrREPseoi7hu6jBPfH7pH94wTPpM9nFtbMqL8C49u97of6s3YCccYfdSSgNiKC5Jy7k8nL5EnsgGH96c7rvHp",
  "key15": "5rFfU4LKyoM3aA4gk9ryibkfUpPDsUPY9giQAhJ7ivCQHbgBnsDX2xALxCeoh8bSTxhCRokhx5Moyc1j5ADRHKZ",
  "key16": "fqXYACSz189GjqojzSNEGkTiiqPKN7MeT9j665jrMWmSGNo3SagtBS4yU4n5KKSzVavpDG4xxGAa2NLjEnF6ngP",
  "key17": "3V6izA1srJBeN46NjMB5yEq96wtWt5WLJJyAV5h4qmiameNwGJodTTfZehatpBTxVH5daLiHifCxvjEZVVETLSbd",
  "key18": "2S8BozrqqBLZXEWB4APwuw76vprzZmfMtAwJZQvtpvDsoyZNtnbTbSvoWsVGWddYx7QhbWdk61r7S64f5WhNmtuN",
  "key19": "za8MoeG82wJwK4QbY47i3cA1nMtFpXdFBCrBDtSErHNX5Gdr89eUJw5opZY4Z9m4N52Zs7QcEQUxmAozmFw2kgn",
  "key20": "8ChpBtmAcxaF8iGeVLSuBgSATg3xqmVxCiqqRFraLkSZ5hr7kbtVGrMbeUrNSiqs3MJLF5BUU6xbXNfThSmvmZ7",
  "key21": "3BH4ZjokoimntfFKB4mSqgrWJP8JJhjd5PQ4Y6fjwf3sjegkydUfsXttgQXwcJ6cqP69oEUvcjxgLdfBS7nVcRPi",
  "key22": "dRbAWjha9LP3AJtPDGgU1VZWZDXiDb4o1YcPXtJrVqNCb87H5x6ieSNN8uzGYMWpDH4JucpVapSkVPxSM2G9sz6",
  "key23": "5avhga6QLVBZP18ACx1qnnrX7ok9bc7UYBuwR6cvBMeUnCvoSXZDtykx49fctM7jGXeZ6r6hsJgfrHfiM6QkvTaj",
  "key24": "366seMJkac5j8mLLvaj3832hJn81ySJ3U7JHsTYCzgPkkGExtHsDGsNAQK7Q5xPPMT8h5u7sYJM5WJfCnLq9k8i4"
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
