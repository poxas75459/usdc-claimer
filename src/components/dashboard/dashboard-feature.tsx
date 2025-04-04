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
    "54UQMEKJg4pRqWwDhtyRcDpHEW2Ge64SpX4oL2M2Tywswh3AoiaxxNc7wDKKdPzxihHuMEjamHkqMkBGJyEiEKK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUb73dn2EPkzaQP4Rt4sEqJqA434qXzZMdieYfNcdMVUtzxn1FRR5gz5drtsLexJ25xacy7RSzLPeFd1GUVdR8T",
  "key1": "4Gm3RTJ9FFsR85nZ7j6TyMM67WzdeVsgZFMQNRKhvMEZmxGiki4ueSMKNvXp9sQigUwyafKCKoLJFYSz3DfEUHw1",
  "key2": "3UYgMTJFK7EfEGt6SQodYwapRNQCpEDSXtN7L7q2oykyiXs8eqkLp7vaKhStE3LzUoLVmdH33neNn4mF6KwrUARf",
  "key3": "3icPQbswkids1P4aij1jo56W5V5Eo3i75gQzsf1woLV1ctSccL2gFWKRZAn7AZCEFhPE7c6eEQHTfd1xHBK984xt",
  "key4": "zVc1U2CcwxxTP7hpGbay2rViGpUZWW8VaAEZpdRXtADJsSMCM6jk4rzsLTUtDpwWuMQGjKPvG87VUJoVpJ28Pit",
  "key5": "56nvAmJs4hY2KfVJECbEFDkoM3qYqjY6YSRAKAJkoaV4t8bBAnB19iQSofiktdfBeJSHqCYGRhX8gGw3G6Buqy62",
  "key6": "3CoAgH4yeRrimbyWECkrbWZa7b8MeyjbutkShJ5zuEi9JYNVM18CkHBALXzEQ8YHogVSYBFbAv4Hee9da9XEPbwF",
  "key7": "3saDgbfb5HFsAnd6S9qadrhic3bAr38Gw4516byqy9dSHHtodxB2WPHZ1ub6v1gJkfLJCMbkn9sGJEnxm1WLDS6B",
  "key8": "TYFmvzF8EzLNJXpqiaytPf6jkGu6McZrTc5HXNGefrmYvhoMELeAwq1VHxnzgbo4Xfgocpn4Af3irBXwC4uDTL5",
  "key9": "inNF5wx58tGcxRdd967xxqbimWZFB1QzdvQEzaobjwHcmx8RnVd7H5B6zT2fvx4b6w9Fd4LGKmZSjBy2cHgp8Le",
  "key10": "HrHUqRWZYkzefwX8MWkZnPULWugjf9UpsbTMhTv6B21Egr3bEwJwg4KQCuRrmiMe5AQaTtwS747Vj3u8vhys5ZE",
  "key11": "4cRPFcuXTxpXfDAJchCRBVxjS4PKDdSHtdpBoTsn4GdfgzMq6BhcwA53kuyZ6juv7Dyttuvdntarbsw43ULjCb6K",
  "key12": "553qtNDJjbUC8naFfiXN4LDVPncWpmhta8rmVxNuWxGhBdCKT8JSnVxpBupUkCN5qpYTsEq9XS6pjd9dxueE5HEs",
  "key13": "55WTQDQyBEy3n7gfxocp47CeuquZZ6scauPQPX7bmeaaGXEAAmp7FZp1Dz2Vgrji5UxB6LqmDNwLf1CAkBqUxZC",
  "key14": "mDEjmD9JFSdDuASKnkpuS7rpHsWX9xiQnhb14cYzdnssD1umm5q2LR6xWAu9vdn7zre3bkWmy7HkA4yEHgNbWtC",
  "key15": "5yeYQRAUxPriSjcTC31i5DCDzWDGK3gRYF3bSrPnAvagV8WdYKTV1GgDyHk7sfnz9pE8ua8fuVcBKQUJdTbfegRf",
  "key16": "34qVbX75PVZmjic8iTf1XuzMzKpCKuozpWjrAjjVUzjJvaDo1FRpf9amSxqt14FKKy9qPuBY5pcnnxUYEYsXLMxf",
  "key17": "4i8sbvzqc5EyuZwhcAyDxV9B1S9o36LSwuRV26x7gxG8ktYsw3cTFy6TLDUL5pjakzDfxQzLyaheoJSSbhVHaWDk",
  "key18": "4gGtoqwQvP6nJ2o7qvxGtufAymCB4ELcyCWZBaWVLsY8zhoAZCS262vzrXgA3H58dXQWcZx1uyJRXxZ3xgv82gs4",
  "key19": "CNJpVk18TAv25hbnpF73obzBTp1EeKZRVHmUmADfKPQYffa2R2puvYPB5rSM2z9u9RBj6f8QGX5wCch3jzZoCBK",
  "key20": "2HLxdKpBNCTrL2epiDNjR9Ta7EzPKVX1fugmFRANEJ8n1KvjJqYEhDamCUwpqttdNr2nktacXSqq7USkH15SM3WM",
  "key21": "2W9Twnz3Q5NtoHpxE4B1VUjzPAPND7qNYzF7XXzwVJjJeJa1Zworfx6FwN9uVXycjXvksV2AMctbeGKrN4AH9z72",
  "key22": "3DWAhqr7qJw7CohhDj1sziaEYjrrittPT9mLFwxeF29j4op7TRKh8e6zspH1FJRiw9TE8VxtbGmPDnGWiEL9YNBD",
  "key23": "3eajvEDPpskQC4w315gX7vhDpqriUKVPrhESV8bR1vbxjnaop88zFZyjZZWGjXirBgNqsx8169k813uqz2QBi412",
  "key24": "3brXsS4TcmqLVjt1Gw3geUwPw65RNCH942K5CL742Tk8qNJVbKgN27F1TwFjuwiyBwz8oNa214YrHw6iKysoJonX",
  "key25": "6o3ryfHuYyBx7uDixbxWYckBYsZfQK2VV3DcFYfiaaT1sDLnT8HYGXJvDsTaHnxUfcFQmcsa8TsLFSKQCKYUZVG",
  "key26": "2bFxLBC1Vo6AyDpaSpVfwDn3wLizxgdx64YWeUHQzjvfyDVsC38XLwt6Q9JuX4d1DgS3ennHXNBPKF1eHLDQAtH6",
  "key27": "bhHA9vBQ57DeDM558wH4NJCMHHRLRtB19Tu3KK3N91zNmGHiNYdGwFF2MkQ3Kd62P1VyyF2CRY3u6ZFCNtsUswN"
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
