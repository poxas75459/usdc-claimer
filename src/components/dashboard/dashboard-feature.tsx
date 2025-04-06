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
    "5dYM4UXFuk6E5a32XA83Gny8g5drUp4wjnsYazavK4WAHGUw9KTRnHJBNuSURz4H4jjb8h3y14hdQrC372bf4AH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSrMRG6PFZhWmyDEqaxsHpYSY4JJidtabBJKhnofchevRat9yVxgRNX51FSvj6nhPRLCi3HpL1qpRp494qStnGv",
  "key1": "MvoewBfJRg78M4uWM6EMKVs9t6vkMv78PGZLFimUpoL7xdg8uvjZnTZMZLx7nyQFuFF6h7xf6fTh6uncsMeYZgf",
  "key2": "d2nmakHVAsv3MQwJA7iyYBLjsq5HhKjvbFZwoGXdjpg5Let1wJK2z2bV4aLLRw8kZhnwPw3uSVPUhTb4ZPSfk1z",
  "key3": "57xRURv1aZzLhP1dhMj4KT8nSxJbG8y8ghnHeF4NUEB2AkivF7c9Wxiy5euPa2GawMJzFAtAA56zUcN5xqwPSkow",
  "key4": "4YKfWcXxKL2GcrmhszYczW4DexTrTR1VgaQuN1RCHhvAAYM6ZjevMii2GPbbR2BhNenxMtu2DWN7ZpgWP16g9Hto",
  "key5": "4tfyMbs1BaZx6R6goRQz8nXr5auYwMokNmW2fCYGmvivWXhKW5qdcgMRrzpxcPKbcz3rr5qJHL98QZmtz65MjCFk",
  "key6": "XPhbX6LQPDxqceZuGrZWL8b44VrtQcFVQ29t6SDxXCGbx6Wph2dzhDoxh45JkVsyMjpPNigxYXkEjHbFkVcYfTG",
  "key7": "23TWpxruHHjXxbrfBfmqfUKudy4hA2AqT6V9tsmYPsryrsEaBck3w4yfXvkkvQDqYHgLGBCysBArw9ZNKSFrnNkD",
  "key8": "3XZVhjrLkiqFXpg61tnvvYqqqXVVmFnJZhxWNdjmCwYmzYkCYiy1MVgnZzX2oawhpcJ1ZcLhpWDBGeHag7TYGY28",
  "key9": "2JiQeU9dmC95tXLQhLh4tHV9fKTD2EgrN9KQhLKGvBCUp5VfACZEW855a5JXCo3shfnoxbnwN4vHDAAVV2y8v61b",
  "key10": "2z77cWP5kkkKb8pVuGC5s5hKuZ1v1DpTxr8Pa5UWURg1g4jL7yvJscDXFjCrcx1zsbD58M1xK4ioCUnxYc7vU8bp",
  "key11": "5a6n67UPmRxHYPxa61oYJbMYFvUoVxR2wQN3QxVGK97CVBsAsyVsrHGWhNU3aZRtaWqW2uokE1NmPgvSuomLf6DG",
  "key12": "5GAKDiJZK8Sr4RpvHSAMzhPDZqcnnMQX1YX1ccHJh8xxZANsRqTHWvXoRguQbjoNg26T6iX8ueezG2HZatBwT96f",
  "key13": "3HR7ioJSjKYS3pot9qMg5F3t3r5kURHvGudwBH1xSohyn2iE83PBwJVwoRdooXeMqJuBkAe5eo8mAmHi9SFtzass",
  "key14": "3EoxxC5BC12yoUk8p3nEGkFowHkm9gRyG7YuxfvFjxysbwLSA1a49L5uKe47RhWbbeRSvBJfhZPfdj8jJqUZdYde",
  "key15": "52qo31uS5n6CwMDi53DMqowhxyqNbm78G39fCxdTicRMdvwrnyw8qVsceYPa9CJqJF7kM7ajeWgJE28qZKrCykXB",
  "key16": "2JB1qNkVEPpdiLHf6RwWANxnzoJWncHBfxFrRqt96ReQ1DJNVBJnL9MrgfFCFx87jSyGsg4PePwo13KbBWGt1miN",
  "key17": "5LWfL7wTR7SXhe59BfcS2xqqW5rBvYfSza87JFxvZDdm6ifmota3dkrqmXHjbsHgPUCj1Cdo5nqkGwL9aZXXdSVt",
  "key18": "2dxnLRxsNTbq89ZgnzJmhr8SRW7rMVGYYbGeaJ7iiYzzu66wfER6YpFiKAupvqVX4fVspKtyHjKLDFE78K4HvahY",
  "key19": "5VCouuwXjAC9qK9wtgrHKpR7YJeSpqHmCznNHCesMxfLfGNNkwHpFSuZULUwjSK7Kuk99tT5UEk48FAZLBKGxCj6",
  "key20": "2bxQefB1YerUBMy3Cmznh4vyQ7XqveDifc8qvoPaP4AG4rZD2PfLjXokAVG4b2vrMZaheh8wF1LjGwdLQePnQaSa",
  "key21": "4h2x1GPBtLbHxFpZM7cHYjZAo1dMRy3dUDifUhuyuhEuWT8piXedWoxaYVunqvYzfXsd863wyc3gdsLaGzsLTRaR",
  "key22": "r6bp4WVxPbyZVDm1KXuptzWYHUKpiEWMbff15ozPHBCRu2XKuHjZDTPT4jA5Swqqf1KFuAAvBtzhPT3K1Wk6v4R",
  "key23": "3UzBTSMgLsXHNRe2L4RaQ3ge7L8k13Z67S3B9LBbyPR4S3nbzJqdVh7tnr77op4Js9ZDT3nryYWuaUEEHT4SPTGC",
  "key24": "3Cm83iXm2pubC9qpyZmFKhrfEgYvgexwsEd5RHDmUMR4WnGgT5UkSA1mtVxZ5kfzCPjRqgRRLqxZ1Rn4e5CrawX4",
  "key25": "3tqhkQUoBiw6fTZ7xEtGzZ11NVhvqwx8Qx6yA1D8wnyoXJUWAjZ9BdJX31HwNbbQiryEQ3xagZJxu4R9pyEbSR2y",
  "key26": "4FXUpTzbUf8ySVDePboyT7tuEhbekiByw5zMsu1KXkVD4bSkTkoGLFpCWk7SnHWej6HW3Kux1Yy5TqzDZSBUaaDp",
  "key27": "bHp5STuZKXpExQBcwGoBrG8WHoJrBoA2HVYFsjpMK8xapMB3QDy3vvSSADowoRxz3NQb6eRCznvZz1eUCHBYBhi",
  "key28": "rMAx7uxmfE4HZrdDx2SEJD3uu1S4H9TJJQnSZRX6t5BNyU4uQsR4dU7kZAZwP5orbu7WV9rMaoG2FK1WyJpE7ft",
  "key29": "2XGbDysF9foidE3RNy1z56Dsa4JwLY6WDWxCma9xX88CdzAN8NV2nzVSAksgDzc521pNR5EUak4mTM6vT3YFdNdg"
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
