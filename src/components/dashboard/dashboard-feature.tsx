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
    "5fUevVJwm1CVUS1DCh8m9jRRxKayrUApESNqajWw9K2RCY9F1mnS7NwdqaxPaGbKQjULXqUtw2sMFB1i5b2w6Wss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kci9VsVC3YXztE48oVb98XnEMuQ39tDZwzDbAZx4WePNoZFpcvChvjiZnLLUyp8gYszVbp46SV8jsMVUtm2Lt3S",
  "key1": "2yRE2Jxn6GXNPdABDgNMXAbdQVKmWxYVEbkUmGWSuusKSBS8XnnfstVGkUz7aCSv7rWLxAthWp9CpnkDqZCLjopz",
  "key2": "ewnTNtpQvTeBRdEBZGd3c2FbY16oqJivwaz3BAozbKECqN3o6MMZxTQrZLPFKxc2E4WwZnqaPi2m1wgHvMrUmdo",
  "key3": "5TQj7cfuDrGhEFZLHfcw4zAiQbvSgxuWRjYJc9zSa5xhqtqtUgUCU9smiAPSh1ub49MJn3YRohrg7z6g18o2cdXT",
  "key4": "2XgmcD4Uw6wwvRkPLM8ovN4v4G6dztb8NsNd35kMYUXMiKtZXEx9hEL4sVeWimm5iRCSXdffhURMWi7JesnJ5mMD",
  "key5": "3iWHYigCtUXDZtL24q2GspxpWdGMa91kNjPyuoYDJDDzj2RpsywL3diJyBzHKi9PpJihRrk6YRtoGo7Wx5Vpqfvs",
  "key6": "2ftjanRdbqgKKTGKPM1H3Ge7Ah3ebSuX4L4AgYBMjbWEhBAyFzuHcTCp6CoYPXMgLgxN9mLURmDc3pH4Yh8csXhx",
  "key7": "xgjgbpYd96xiKnBj3pq38KTy4SDzzYLy9U1frbKacKwe5FHuqjhRh6e7sCF2C2rPXCvdUeZ62YSf9qMLW8idgSn",
  "key8": "ohq41oyBuPBDqTg82hCgujCUFqPkkRKbz8X4AfMW4jLcauAT3JdK8tkt9qqSJscq3HHtfB7uZ9uYxNML5TqFgeh",
  "key9": "2MFwA44wovi5hJfggRhhdvxDxSRbmgFM6esMTBkAfAbjCBJCms2qmVega7QncZQnkiS9sN5TecnmteYes3J5Kbpn",
  "key10": "5j9cQkfVwaeVZPMZLHYDTbzHMCxpar8WZxrtx9RsAFXfocTLpAsRFCgCQUywUoXjrFsWo1nbVuYraThwj5p66Gw9",
  "key11": "46Jf6rWwf2v3AYDa3ZKxvE3u3a354PpLLFDEFGCrthwbBgxkW9jest32Lv9wEqzXvxWE3VhzS9ibAJHUxXX8eEjG",
  "key12": "442wR2b7L219B5iYdpgrJFXArVRqQiKYSzntgCjvtE2zz8nW7oBrXyFKJEJiyg23j7P2B9KHSQh2FAP5eH9SjZPw",
  "key13": "3RWx3TfmM6YdkatbYNWC2tzw6zTH4JUKCX3WWWkcfqZUWSKTqadZnQv64PUj8gWyWS1tpuDCsgtqCq9GkAmAwSkZ",
  "key14": "3BgqKp7dv8q56RN8XbivcQsgAyERqN2jsAHpEMvaRqcgC9tZi1FcqoSxxUhYz1kENdnD7QWEhRR6X7PoPBABhdXi",
  "key15": "5LgLUvF28yv59aDhJBS767xAGmoZXLHf7DzY9kq3yeF22gxf7D8s6WDW6X54WpWV5MhrXtA2M5L4Pzwh4H8cBzvj",
  "key16": "L4ZT7qdW7djWBiUjGX8Z77EcntZuMNitLnrfCbJRPZF1KcUV27LtEAzaocXYztRASQJ3fEfX63fvx5SeimaJ8U6",
  "key17": "354JByLc9qRtfABYfdCxQLYpj6rmbpLcPWdYwidUx5s6Ph2VDUL9pz298xAFzdh64vvES9F1HyqaB7jpcDV8e8ZK",
  "key18": "8ZLaaugEy9ZYTLRNcR7mLJTK2a2XBMiXayBJ9jiwD2wPjb9wREK5wrczrNedu6X9xC9qnQotGg1zRXJB4Mo3Bbt",
  "key19": "4o4QNrafsAVZw5UUsHUX62BPu6Mi3BdpfLRzjuauF6GbzTq75hznZFvMSc4rbLteipRuqbPYW6pCtpeQQUkpnuQs",
  "key20": "4dNzxPeEFgqGmDRe3agjujDqKTCMMp4YmHfHHGT5VaEpY5hUzr1wVZRfX34F5TFMsoqgD6tGEPJgJDeNMATQERd6",
  "key21": "49cnYUeYFjAmnPYdaBpnR1MyzsQ9u4K6rzqu8tM8hrxNUVXDAAFMNryRAWm1amhBNVt43NEdoMZPun5LLAfr6kWy",
  "key22": "2B6coVYTh248DyDN78WjpGSpVEaZL7NWPZbZaBWkP1xCbfSMhWzV4tWumbUnEVoHn4kcCMi4MjH7G52rGBf97p41",
  "key23": "3sBh4aWa8B8akH93eoRpsbyaGYpg5djTbz1ha3gj582sR8zoShJcWBPvXjgBpgSYid2qwCs7Qb3WhyCbEHR2NRnR",
  "key24": "4AYb9QQXtN75yYZbodqKu1F9gmuQQwqPTaucfXLRCVNt52A6YiWMqsh7LELWYPoqZa8Pg6w5MYtri2G9ZSXWy3Y9",
  "key25": "zFeUphMmreaW5nXFZQXdWBE54gMbiHcAMjw3SMUHXeowbFvPqLHAgWgx21zaTuaL1JVZGrzM4iP62u2yRJghzCB",
  "key26": "to4162AarF7e49Q7n54BEz3cstTuuiB1uRKUhdVtqfGPNYgNE4bsLWR4B9BzqF6Paim958bxWJ5Sn6B4KqNPECq",
  "key27": "49JaS17BP9a5Xe2yhfHDSaSBmj2hRPyAVik3z5jRiWKaU14MVVHKbfwfDdnQW6UY9FWK2THixCfMjTWuQF4afgPp",
  "key28": "4MJUficA7nbomTZcpiMNZ12UPfrS7NZcypX1SkxipMEgLsZoSkMeMugVo4GWbPQHdLyReBTzdjQTfdYaU2vmzxxS"
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
