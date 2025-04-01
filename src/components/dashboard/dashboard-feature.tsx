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
    "urSB4vswQBW36wVQLvBYcJob9oyc2pUEyhBasteJY7MCJANZcq9LivKnmeZJ3c6MvSdKBcd8222wx68cswFAieK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJeqarSWmMF9cWnDJhqu2NkYubWxKML2LL4C8AdD8TbtVchm1LfkHhr3cqmj88uyoxAUW895ghZz9tmn4GVkLJX",
  "key1": "49SsxjCDhEJRND2KdSy21TCKPMGBAwnxfWgXoe2kuhwnH8ve2FPqAAGWPoKDYZoe4TzQw4DG8yCFdw7Sn1M6gQ9j",
  "key2": "4PzmmLo8sZZtrAYhvWQtDMh22xVwkvqemtTuXr7GiTD63QQ9TsJChCaj6bHxXWvyiucW77NjNi3UN5dK4Ez5ehrc",
  "key3": "5wrZKmtv1fM61KfaJJuagup9doqiwkfVJWH7fNmhF16dvttLxUm2eQJwhjwapznnb7zCkuWUR79pJMw2P5US6zYG",
  "key4": "2rZRDV4suaWo92UkcSARH8nh3gLm2dQrVx8g9CBqiTvHJGAXopHiDN65mLpD3V1yUExX4FqJJnQ6qrwQ28MChiHy",
  "key5": "4FeZZpoCL99obqTiR354BS6xByfhqtrRA9qiCYpJAPMcaujioTR2ZNYVHHmWCPUgVQA2K4dKwLxTjHmWRMSC46Ry",
  "key6": "3zVqf5QegWiHqTkBGqiDJYE7HtJPjBG7arNNuvvEF19cinnVQjnbPezRvjTUcrsq4GDCqBGrEdqNgCxviAGmi2ps",
  "key7": "4ZeHPC869ZYjHWqZGJSHNfyT3AfxvU3MiV8osFubmDPRLZiMFgXumjSdMV8fgqrR9vwEiR6zi9deb6rWDHqmh8P3",
  "key8": "oAPmaCGJsQQFiJiBe268iHRxd8V6AyZfmTjHk63xBBkzLduDd58jxfyAYCxgLAzEnCoBASaBg9WQDXst2DNCiGD",
  "key9": "3HTcHVMK5nPo7TFNhJNxMzCMyPyfLnCgg6jWRCLJcvyJkRGwsC7bw6DQMCoQ74ASK95hCRg7LiJMCApSjGADEtvr",
  "key10": "3k4QocGngWUiyvSdfJQph9C4FDBohY8BwKPZQtrGYNuanJdAnmH3qWfxZNPrew29gWcUbfDXxzGBYRocmZntSDyQ",
  "key11": "8pVbCV5FSTJn8GZUppcSw7AWgnjpVA13VSe8kx7m7t5deNWpTDxsy8gMePJSGFxDijCz3XkeEQ29ikWK93q22uN",
  "key12": "3XK4PhYo2QnV5kW5k1cM3y5i3ov5ghtP6vP5qm1tBm6FeFjETom5q98nLbBjhDZKAcFDBczbfFB6NGhaLvojZ4ZP",
  "key13": "2L5Wbxnq3w1yeoWhwmQLcynMFRuhaJn228eKjMiRBPG5SucBKY2denqSe8BwoQ9UwGMJj2cnagVtvnJPg4bd8Hh3",
  "key14": "3ssK4UHjNuxSt2VvHFKow5kMHNj8P27Dv5firPcdw7xrkWaUZX9cEF2rgbxUuxZgs51MrF4td1oigvvkGqZNphVP",
  "key15": "5sutT8W2Yr8zm8QkDhNwVXt8eZAvSY7X8G7H23rBMEiwYFs45TyQc44dXNZZpkUhABeqxFA3xPiM9zkJ81gHLA2u",
  "key16": "wMgSoevbdUmuhdz9X3zjwcsHUydKsBrEF3KEcxMdaSu3uU9rEkih3oSAkMSxv5yuegXV6NLXdNDBYSTCUnYHiCy",
  "key17": "aC3phJvzmRs6AygJpLg4kEarjvQzLXxKxGpQmYTFQQQRjbTwnRQHRnfuaHBwWqCNkfmAhpWK56RFCS4ojMSXw1v",
  "key18": "VcN52SCWzW93QQhXsXwNEdhtWEP7goZEMVT2HEKDqbbHYcRGJbuwvx33WsvQTpkUsP8AXtKzQw1CV12QZPAJUtK",
  "key19": "3jTiTBXyRjcp92bii1Ft8jAVwdhrxZbwezQp4UApV6jJp9SHQ31LZUcsbwJtTVNzgp11BYKsFk2ANnet1oEVvvH5",
  "key20": "4S7dVLZerdWZ1XmnETNJUeBS3h9SeG9G7uYQYxHcWucTbTyttKDgRGJijPWc7NEKiDpNbCtdP9B5Jy31xZbsHZa3",
  "key21": "48JfQob2DxSRmSdeogyX4tG5auombAmCx3ZPiADXN1TgWoLeRirYbzVZhCNRZbi1D4jHpz7L9Wv6ocF51YYjaJAx",
  "key22": "3ZZ9m2KnA1GCcxoxCoBbPo5n9bG1JzJUoSCbNLNF7m58xXkabep5kFaTqH6FMtMjHi3o16tiRekJn8VfzBvGS8Qo",
  "key23": "p2T1obmFPQUgDhw8pfegiba2xKrCcHcS6HJfCQqjjyLdcsY1pRLoCERtn7GS3uc9yae6xeFUGuiBZaUMyH6ko3r",
  "key24": "3TKtBX5Ss39JZczvJrLkZqXW7R73nVpqzMLYCLxEsvYZf1MFPXKVz4mLY4CBFXQC96hE15pTXJ8nCK6nHdRNrxBx",
  "key25": "SCNg7kufyrrUYk5FN4zoVqKcqcNteaSkC1DYGQsrzTzMCVjcjfZLZ6jtcnBPYiNFCds5Mw8B9BrNZo7rSuF6gLL",
  "key26": "4qnLQs8qXm7JCjJh3LvM5dkn3pzArwyJKo14HBg2s5vVg1Qa6WtrmzASDWiMumLb1yd67RLCVQ7MHgQjBfJd6GyY",
  "key27": "24r1fT9A6Sgx1ieNvALRUBGQ1k3iFKFVEbSSoFViGpaZfD2pxQ88Sz8bhuv6Qp1QazTKCp5hkn3syvQAFBqZB7A5",
  "key28": "qGUyu54iXgY3gp8zwF8bFtqKQA7zS5DTK6roeEyRCc3iuc2soHnWXWYobPuh685ayWAfsiuKekgcFn5joVkExai",
  "key29": "3hvHrNdQCfSWvAjHGwZ7CvAJhwQuSkGB1gKhgzua5P6xZb5KdLdZNZ9JvRVHCoGsi3JnUvn7216SdbB7AJNXerHx",
  "key30": "32EnqWS6x4fdCMHnBVHXjHmLy9eg52yJ8qKnAEZ3YQspAPCYLoT94R1d2iro258vAe7N7pMwJuRykrs5LTSB5MwD",
  "key31": "5s2bx4QUZzzf3ZCixm6ZomdxjRqmYu2wpNmBoKTBAzcGk8QPYectchq7e6d5RKRtvP8Z3axqSr7u2sJa4LAJZN7x",
  "key32": "2BhkL4Ghshi7xZYR2x3YxsWFHLBFHw5KwCjdXpUPsr2nhgEx7jSNgGbCGvZwG8w5NbwxDYqKGcovmKyBemyej5S8",
  "key33": "4E4Ua725aagbE2hwNEevouVouxhpoBjFSA4uJJp4uhqj3PZqox9oWr1F6feVLCtQxYgKRFbyJTjkwLdmcktNFm1n",
  "key34": "47g5SRPY6xDDgTxorcNevirFYRhe1qBtJPBDw3M5HVKTYU1sRhLCgaWJSXXZyypMKHzfkxZk2k7vQJ2hnMWjiTGD",
  "key35": "4hEVX5tKNqmF2MuJLMUAerJ6Z45FqDG1YgKG16Z3NiJxtjs9KN6b7XvFRgB6m3pu3dj6L8UhFLP25162a7pPUzJh"
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
