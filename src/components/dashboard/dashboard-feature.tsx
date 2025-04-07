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
    "3dbDjnAf58sZ6DGCVavBm1D33aHoZyztBDgAkF7hLiGD8ANr3PBdtGH21waeBp2syUGAtVB1bMv17jYVHbTSvCdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSveL9LEMjZ1ZcZq7nLbvUJZem8nLL7z6xV847MHKFooQ7UeY5sJtjCft1kcMwmw9YgpYjzJhYWzZjuM5qkMdbK",
  "key1": "26BUEkH4uEpN8fvx3Uod918WBNH5jcXCWxZJZeJ9Hm1MkpWXGVZCbV318bFrgFFaZVyKgg6d2QkbfjB3yFq8NbYE",
  "key2": "3g2CXk9rYBAuLkJtVAzfVAPuKUmrp1xw4aajRH6CGNiFHLjCVb7ki1uWWWhMCDoE72fpueVcnrZUMwitD3XmKYPx",
  "key3": "52o9twUpF2RjoYsdbVV76RYyX6FQ4HBUzFfLea3R43ZW3xCpPWocHm87dBfS3UoGb7ZRqQ5FzhKqy3Fxd7fdx3QP",
  "key4": "3BcvDPSvjdvubczX9MiTMNJxoJiy5XF4EDy3EmsB1gKySAW45Gc7ntLafdC33n15vbUE1K4LVdHek6r98WgQjMSv",
  "key5": "5sfD71bHdQpBJCEkbg9ZjeNtasmcR5q2ANF1o7WsMVvWerdeXJtA1BHGFnbJkZ82CD9mSieK4wDPyXg8pwNksqBY",
  "key6": "5f5SYjC3rw8WkGfmgtV3cuu22psKW25LjxqrPk4QjpUVKjAaHLE2FKiXYHJvdDEKhhNxdjMM4em6yG6yHWcdns9x",
  "key7": "4pbKyQhvG5Snc12FbxvZFtzrJ4BQAsa4Pum7aggs4UhZdS67mVCH2zQAZsmhmahtbtjnnRZLtap4m8WpDHiinja4",
  "key8": "3RBHmWGKFUHLrcZKj9EPRg17iXYd4TH56mocfrKSa2Tj55rgPMKHPSyyeU5tcZUUXUi7tBjws1T4hbdnAQr7gBbc",
  "key9": "4MxnWPXtcSBvT77vBKWBMoBvzsQPSbUmDi4MW97nqVgaPk1gQPJ26FakTDNx4ABa87ALtPYMJm9UyGHzXqiqmZM",
  "key10": "64w4r3DhTYaQcPWx1Gf8sCvGVZuFWGS9aMEfcGe2SVgzEwyARPqs3d6BduAppumPkgSsLLeBTNHWjzDShVU4crDN",
  "key11": "4bu5if7GGbqQ9tcJGee1YJtZUGF2HQf4L9hDdPViSrGV7tzx2NYrbeXhjdnsPqeJB7ADo8sCApSCebXXnkuBkajG",
  "key12": "2dPSztpi2Q9YhEdqiaRqXLmDzqdFRZs4Mk7C3dCECpJtuEXypPdNCoSSQQpVErxDZMhvwm2LmfCE6FuDxQK1bsgG",
  "key13": "4YVwmCJCFajcydLcHc7scoPYYbUFGSoGck9fAQ6sNts5Q5Km8mJESkCdbV1dudywYLXANbjEhFWioYcacn15XzLp",
  "key14": "5FSZUa6Uvdz7qzHPMvpTxtcfDm17tZuze9uDmusbBHMGAXJgtfTwqMCqpVMXXNaqNpVzNjsb5eMWV9nEhN638B4Z",
  "key15": "3skywa6bLzdpu8Pa3mCpm7yxAqLYCnkyCDgPRXxoF5d6KkbPiZTisSt7TK2gFsKYuK3bHZjji9wRMdJDhktpW2CG",
  "key16": "4PzCCH7cMT4A1HyvSUFKhwphp3r8ZV2bU4SdbF7VEuNNuw37wcB37xyod3kYvCRKAeyFUwSTf5ZYJrgjqcFE4LKW",
  "key17": "4rxJCMzdiadFh1RdU5FZCsvwKnEGzEdQTDu1JCHfUjTs7SZ6VkHpsCzptTeUzo4BdW8Z6dmipsLVF5r5hg6gGHX4",
  "key18": "5NaYcY3GUBb9qXEkfGfqPsJiWTR3qZpHufWaminephm8kmucY6Hkk5PfupkJCYdsUfUQEB9WNFJreJvG1WqowfD",
  "key19": "UNCEuTGLK8zyYXt6jJPV6GXZ9wydYH7XUMbd14ZN7EHafk2YLUBF1oKa1sGMa8qnsCHzuzgEWJmNGpf5XjnGGpp",
  "key20": "2egsHAAkbFwjyrjBPfxeRPkWF9YL3s3SMvAQRbniQjydog6EDghfV49kaFe9m9KoJZSRRbt58vCidzv7z6uhUgvX",
  "key21": "5AnRbEYND1jXuzm1vspHTFoV6z4VCaP6BL7B2iS8TpA2fxnRGyHRepyAeP46xgeCzx5k1BnBMgwv1ZHYNYAC5ty2",
  "key22": "BtbRkoMbA4zHGuZDRRhWFQPBT4PAxsVd9VXfXziG2eCuk7sFSrmn8cDaYRYr57TB6Ky5EHgQyu9Y5tNQLWQYtsm",
  "key23": "41FRKLubCvdQWegRMkjoEaAFcsp8MiFpAGeUjcz4BAagAFqbxZzLmzyqh4UbDv7mx4atZJEA8ohT1MwW4uzxmt9M",
  "key24": "3vMoezjBBJiT2fTvPQ3xVtvXobgoPzCxwML6XQK8Hje4Pa1XkXLus4Uk9i2ao3mbwXP2QKXj6mouDmecrt2VQ4io",
  "key25": "4t4tcEruMnvEFJpqbKuvvQfWCPQoqpWyrdaGgLsVGTAsyJbW4FEkhAuWMvvEzgruYLYXbRVbo5334LbmhqXe4YzU",
  "key26": "5rxDd6FC4SapRAkEAeHZgDWNJfG78Ayz4EXia6wFVWcvRCUD6CpLxXi3ERjwarf45BdHbdx7Z2jaqECJYVKZZaPk",
  "key27": "s3XgjtUnjM53oHiYSZ13yaJzqAVNRGTfWhnMTGY4LwQboZvpD1HPYyPsGFZ73LkvR41rGP2TXEGTSabktcb8Xp9"
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
