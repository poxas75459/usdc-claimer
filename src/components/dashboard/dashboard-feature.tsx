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
    "5EEawHRB7fEyZHLq9btuwRGTwrLMpHVvanPcb9hUoqo48J5uUFkAL9xjby15SLFwn3Ay28hg12q8198T7TECs9Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9RqUCcKEzPBDFg3geaiJTphLuCzYe5FABcTDgoCoX2wjasaixtvUNEHqh5jiruQgaCZWm7BZ9h7Md3xiXVJwm4",
  "key1": "2jnAcmr8dz1WFHAZEvJSDxPB3UwDPKh52t7JjpLSDcMYs4eEART6GYUtHbKLWZwiPwZ9ahNpJ4YYKAKwLNrXeXTs",
  "key2": "5AfReYTP2Tz7yM36vs2jEcMtLTU9bNHv9PtMf3MWAWWfdM8AsgCUc1Nt84CCYQjrU74XPJophmJjkigm8uFSGzDk",
  "key3": "5mhsW1kx8Tj1UbdQmko3bHX4NY6A1jtio1Q7FiAcVNUVdnVPSPGUfxYE5JE8dYY3fvemnfx4QHs2abp56qVCjtBA",
  "key4": "4qQbV8sRYr3WJYthrK43sHXQaQ1hAjeDCyxr32jU3vPZF6D4Fd7ifB5WWT8HNB7iJmjRXwjzxUpVSkVcc9ZbeTwm",
  "key5": "2U8VL4xGbgZxNL9ZyXHmUNJhZYGTtGacHdMfH9X2rJuiiSrAwtpiRKkAKmTCgRQjxQdzi6mKvdkHVX2cRdGmooZc",
  "key6": "2iBihTYvQUUVxsZD5US3dfuWRv4RaRpCA3fRjJLaFZxCqs2vSBVPptw9WDeUoDp2QpfmJnz3Chd7Dkx1hJdtCfhx",
  "key7": "xqymFYbQ8D9uVoGEt7PxngT99cMsM5YV5qP2FAxyK4GDgvP7jwzppdXnzfJsnFvPfCxGZ5jNYWRVgUtAPisy3uo",
  "key8": "73YwsETweU6Y51TWHSHE7amisBTVvheznuKRma28KZx9JbwMCbk2XGvqfYQREvo5yVBaA8C2EwPRRuqCgtATniv",
  "key9": "3KBo6mndUy4Uxrqen5woeoSni9hTYzwuHbzJJcogA6Yz6BWWpqxPS4nXShppwUmXrzoYVXiAVeiunVy1cq9VP5T6",
  "key10": "5e8o6RiuTQv3f8H2fYpGWJKtpbe4y4q4PHUeLgJZToSAs2WbkJ4HWhspJHnvuS2HYaheDbpK2xozTXGF9zp5m4e1",
  "key11": "5Xqc2HKRzoccWLRCDwxsCZ1rxdmWKUDSna6h18JQBfdLFEtWVihrp9QWE2GHvM2zn3GdtntEUVRS9G3DPxAyVUuV",
  "key12": "5nS7WNYMdvGokprygtYEzbF4qnUU4kaz8KVnP6BCfNVHGWXN2ULZyyNi1d1H7vLaoLD99XWjzDMKYxNB5Jivekuv",
  "key13": "2Bdiw7Kor2Z46H2jdzEv917u9Lxo51cNwP3p9kZsvN7xcJdXntPFJvdbRdzR7P63sHctzBS2pfrkX1XdEGCQTVmZ",
  "key14": "5jEUsjw75eSFkmmcT3JbpCHU1a26Cvf9ssFM3VKheoXmr5HnoQKDigzSNoc6xqfkJ7R96PZFem63QvFPMXrmYBp2",
  "key15": "3mFHGbWNtQdomKe6bReczcSCS9yWjjctN43HPteRgRXXTtXUDxuJrawZ12BxXM37edu47HQtQShtrBaGxNzc9SJf",
  "key16": "2BWsVqjXtkbM8PzfUt1MFjzUcQHHGNiKo5tqb3zfWcKpKRpShphcg2pa3h87CkDPtxNqWFKRofBzafidL9Gm3xtr",
  "key17": "65Cdmi4L6usY1aqnCtsqppXgAkrTSZozUHvBjyAHA5MKVMn8pTCA61mtTLhf2vwRpjLt2yDVcwbSQheXCJAmbuP4",
  "key18": "2fPFhcy4SyNxGuzEJBquk92JhX6HgLX1jxD1WZk73nGnpcfYG5QVSAKq5cFhVqHH5kngUtiizCp62BoBoe7PdiCC",
  "key19": "5PAdkdSp4Qpc4gTYqtJWR3i954KYySFScsY76syTZ1kQHsyaAEnVrg7GzxRoN7uM6T3ZTq5k5ntodw1LxPvRCB2z",
  "key20": "57MJaxGZHVwRy2XYHFYcCy3UEzmXp7QA44yEkcMi8Fb4wXaAoVSEbV7wC9TYxMpXYa7AamgG4apTyTpGyNctAX85",
  "key21": "4fafBNeXpnMAGztdceQGYSc5K27bccx1atCYcWUB3nZ4Wd6kNXp8eiBiDafo7xWL2ez4hdyGn9HX92xkwF3URP78",
  "key22": "2E1mRVhgzkuWL1haQ8u6SwwPRG9RewxT6vqfRQRyKk1jAbtLnjCqaAGB8yt1HhfBniemtTDPiYwbZ5y1An6ptHzU",
  "key23": "2gBnP1X9aTTKVcY9LvqrraBYbHMd4MZspAujKTAaEQXngufhEoTXS4rkjGdDojKToveApSotnd9aY4DGRQtU4tNC",
  "key24": "5oYXB495sZC397hPFqs6k9w43SXXAv1cgmGvDcQSgG2JVzxFVb999pFbkCPrH7NSsTzR4LpeuAVLU5EFmhmeNoBM"
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
