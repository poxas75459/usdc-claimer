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
    "4t5VrSc8LkrsLJajYHew3QBxB7eCzWwCHUgEkMuRDxMDiiWCvCVZRbezLsv3u3oudxpQRmKaZg6DY64gBM3m5ycg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u7kA7QUv7WoUdcAJrwUu7x9HqcqjBZd7R8k1hEkMzk7GfVZmE1rnuks5sXyavMYJ7CPGYuny9zxm3cQRdjFgMLs",
  "key1": "2RpKCCFmqZSE5Y8zVQKqczsn9aggudBC4jZsW5nA7M1Wu69NQv87ycUCUWfHGADXokex4XkGSfGzhZwxqA6NVo2L",
  "key2": "4y7bpu457twc1n15CNVjxpj6UDmGYgNerTWbsrEoVYNha4nPBreZTAEnhZtBFNa8RpeMgDaX2sn9aMcz5AiW7zyY",
  "key3": "3DY2s67PunEb6FgKq6rhTtKb4vM4bReT9kpcBVE2xobqGTh9E2FnztrWERovUeufEWRXuZE17bVG65yrcruRgziK",
  "key4": "2XrnKb1dtHru6dpcWWgCrdVanPaGJoerWvtgXYRc7UkFqJYnGiB8tpaoWr3MwNvQAanDGmt2a78KBuQhuzfebn5V",
  "key5": "5JtTFr1h5FsANq9tmRPSHMxdWo2CEJEhVV4Tj8vKBXKeWXAhXCNEYfWqdGpsfB2UVp4oJ3UyXBwuUvSGXhPxNAyk",
  "key6": "1UZcctzCybaViiBDwEqhDn1C4sJNrzbGB43MY6zxCbcB8asNq1rZFxaB1qqyber2JAoT6HHX4pq2Pn8nZPYieHw",
  "key7": "3Aqk3UahCEmNrvpBHGj1zefdt6nSiMDE9NJCXZESscs2pcvqkUTSm3tkJhYN43LDBhm1Y5KUzhc1oDUqA89L6xRf",
  "key8": "44jHbjK4gVDpMqv6GyLMVsLy9PYMKEezeM44LYBU9Hkp4sp1Pd1ziYdj3opxk92h7xLvtSf7mVzD99QW9EY3tUGj",
  "key9": "mEBSKy5Pw7CPnTiqAMSatVjSZpGa4jwvaupFVUXSD5EUuqtbm67NF8pRNHzgZgxqRxci9AuNUcWudAVwVqPeFSU",
  "key10": "4mBxuhbPAGyNKri59VQmKJf51JvxDQFtU9hA3iSETBcsHuLUvoQwbyBJbKWG2ui2fJpNDxpyTCo4t169wQZj5HhV",
  "key11": "3cncisA4SrgGbq87Dypt8G3CMxcB3DGx74jDCcbewANyEH6AJQeXF5fEK6K9aR121HVg9eqPBXtXpeDq767VRDeQ",
  "key12": "4LA54AE8Mes1xXSs9ZuRnyQLUA8d3Crktg3sBKjnZGP5GVVsEDaH4gwo8NyTkNxzQFD66uQoDPB9xhzRum3hHUXH",
  "key13": "j7oQFd2S9e9DV2ByPA23f6akRBhzMiC5zwECGBHoHbMYL87Gd4phBop4Joez2wq5zZqZ8GppkGFUegsveC865Wk",
  "key14": "eEYbH6Bn93abeDA7qUHp6CnvjUh28b5XYaFyaEXPmexd57UtrRaMj9i9Pcpuk6WmVNc63mU5haVAws5UPgEnvNX",
  "key15": "36BNLsxSMgfyprMhh3icMyLKXrqpv3W4EVCcyqu29P9RFXjhyMET1uM1BDPoTcjjea67sMbRLbvGNQ9mSeiseoqV",
  "key16": "5J8YKGe7ZVU2ERrdvpcSKCtoCxbmP6zLCDHbUUbR2TFmWYtNbXTiH7XTV8irBS8m3Vemq44Rudc49GG298uc1fWv",
  "key17": "2jVGuD436TFKSPW73zHZyajND1uAikRvh8r31xgHptyXZNuhLFTisy1rLuXNeGMAw27f6613HWSHYm7Awt4dxVdy",
  "key18": "3tJ5YWEnT8xX2mipxiX6gYihyktAKfh1x8qu9uYL6nxYuJr83SobUqCZDhUuPqgFSEa4Y659EGGJhWYbvaJV7vv7",
  "key19": "4dsyZehjF9jtdKTduoMwzXaMw6KX8f8Y5Wp2pezsRQMy1kfokJ3Wjejy5DfJKvmz7PvVho7jNbUHdUyC7bipjG8n",
  "key20": "3ytcarELm9M1Rvs5T8i8XRpC76fcPzMdACqN9kje91bsWnKWwjXb6kQvfhCb8AFL5p3HjdZxUQrSf3WocMw2Tc6h",
  "key21": "21i1yatS3tgp1DDc76XzLyVb16XN8XBqHSgaoXP6z3Bp3SEJmdEpBoNa489US4RoCPCbXJXQCaagNHNcWs8ocyRX",
  "key22": "5FS9AUjqT6Vb6ZTns2nXSKB6uiJ8i6Asd8LFTeHEu1npxw7d2whm3xuAsMq84XC6NWVRoMTBx9dd2V3tGWMSvADN",
  "key23": "qmeWC4sHK84iedesC6d84hHdVdp5cTPJuKVkKoJJgE7RUXZUinGrqVfwPSDzidwgNAt4D6AJwEqVj2CrRFiNaAz",
  "key24": "2wUQy2FN7dvSeLqKySBKJ34h5CkuErvBTveR8CMAAzesXRv7z7PfrrP1aDnBCjjKx9oSj9Cg2GSYhPgeJoBwDyQB",
  "key25": "3pVMnkifQPDn6X61YXhPzRjkdhXUtVeK8hg6EwkqLe7ZXnE6V7L5wtPum8PF3pb7bDQmqauxM8k6daR28BRfwAuG",
  "key26": "9yAAKXhvjm3z5ka1hh5BY71HptLq1ubnfKEpueNNP3k6mPFdV39yCHk73SirUfLDH7ad3C6CCTGMqidFt9wnqp3",
  "key27": "5nq84d9DV9BfCr2KED1n1fNja8wQqgaFux3i9ddZVwwEqZw5wPabfpHc6nmoYLe1SDgT5DL5qxEhsDNfGmnWmmAY",
  "key28": "62YZq8BwGYgcj73zk7erGMBzAuGUeFH65P1G3A87t2SiSq6faHrwe1KHshf24E2BmJSeKCLQXd8hSiQDamKfLpkX",
  "key29": "nHZQiTqSHXG5VRvxCygJJhxwyn2TsXJrh1YcSBTuPtNwndYZMP27vkAAqVyHZMrEZ3xQkEmE3qmwbZawQNA2KVv",
  "key30": "5FeY47oqudXYbVAAgs6dF1AfgXqvPZHf3QQdxfzf3aXVk68HFogYTkvZbRchr6aNA3xyFg3MF4HaVqpT62WPRLXz",
  "key31": "5fn2FZMdxy97Zj8Ld41xwz2tfXMfDYrK5pHX3ni59xjgfVTmZdgHjVvvye9Es4hWLQipXtfCDor21Y2v9pgPvkvs",
  "key32": "2bfAosVQSSZsFDqYBWzEWXYG34DzMqTHsCwEX9F3zwz4qpy9ZbQWXEkLycvcg6CXDtQ29EGcbSwRT3yAcZ4iqCyw",
  "key33": "LmUyzVJJTN1E5rgBcaF2912wccEZwMmzesTvgUiQ42fdqeRFFzjqb9qCXSEykPBKB6CMKVKUvL5LMftWhdGb1zR",
  "key34": "4gxPygfbkySxUsUbfUugwtFYpij9oJuxDMYf2JKGNLf4DDBDjHDHvV7d8DUYThCyoBHzaRBRTKzEaaSxMy72F3VP"
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
