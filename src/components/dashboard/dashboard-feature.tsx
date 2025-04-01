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
    "5YPJ2mNVynJv2j8LLowgCsJbuUBHNK5e4mqgL8vRomMudBdN2GD4QRHimVRz3Zfg12uWRaabif868BiB9jkek3u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5cQeG5oArEk6dxjkM5YQEdFgNBxfpvZbBNTtL1vq4cS8RU45HcsY1re1zUyuedoQc1z3vg8wUAwTaui2EVnvS2",
  "key1": "2ctfFUeaievoUL9z1z2msZVFeXiXCyzRqqsVaxQfrUBYqZ9kKhWBGGbDboqEda9VKoNnjtRqghXVBpUbYBNQtUQq",
  "key2": "2v2GiaXLnJsFnZ1UPdcohZ6AfbNpLiWoDagiJgVonoBELoiYMXjBPeiphfz35SDrSUdBzDNTNvrPLqwmn5hNLzAB",
  "key3": "4tmskcUVmjCdqFQgvv1Dw5RpuipCzV5eQtBA1uUgDnSZRfEiZFKFa8S9d4c53Wox9PPNMUC3dvimb2dV1SYuGV4o",
  "key4": "VB4fJZgAzudM4znuA8RJjoMVJadBRUnUwcLLNJEDr1eB2XGb7jQHLjsi5f9hQ1wpFuKyETn67SpGURqL5RDXsQe",
  "key5": "33HXwqHqVt9ku869xYb4UPLPii3mDQPUeJonGjL3b3zKcSmityb952tezMKEtC9nPZCcwBYB3q5prRASvcPjoxcR",
  "key6": "5VJWEZWTUgiPfXWYUv8dsirs5NGQJ2iVH7YYsm6TVKYorVPsvrjtfZDBshH4SJsxzPY7aZXYvryWPEt6dD2Zast3",
  "key7": "4Uc7p3H1WJTC2fQHSsvo2tP1xEZuzw5Uteup3DSXuH4EfKc84GsVTjdTx6MWbVUicZ3si2GEEAduw19ouW5YXXKx",
  "key8": "4vviDQ1pGJkdzhjYBwtHmb775E3pBq47LXR21iWYsMEstFcjEcxxJcBAYfFTsSAdstZ3Kok7p5wXgMecZfzg7ZUY",
  "key9": "3FHQ6YeqyBwkyn9vNrUHFQ4AFBvBGez5GoHdEHAFPN6Ms2pKD2cY9Xwhbw5GTS1Xwz8SFfsZwsiHX9kdWAjBpF1k",
  "key10": "44d5VSLDQR3M561XJ65Fi4TigUpXmiwGEgFbJ8sz4qVUpkBrm524SoumSTAfrXnpghMvraW8KFGaa2DU7pVSzeio",
  "key11": "33y5VS6HmbTFFVwtTSQ2sf5MKPVGk4jqq5uQ5VhCunu2UouD9tBGt7Tq1o9CbDjAXroVe7gvBK8aoooM9XHfL1EY",
  "key12": "5QcLUPBf5ELWLu4D1ahnGyNHcekWXfYZ5VYFo4B7AqKN533NQFMAG1mrzU9ES8p8UGEDv73PHJnUxG4rQX7eooPW",
  "key13": "5K9tAmSHC4xZmCZQWwhvXajvbggNgdFerP8NGcKVe2oqAhNFP3TnjRVWmV7VMXCmBdjyvtygZpFs5NSpba56LPNX",
  "key14": "2AbKBx2Y7WAvb99nWQGSusErcFh3pMjRdXQtcYcKDjNi6TvTYUWiW1cavg5EZHsURZniRrtNb41FC7W3d5JcqDBZ",
  "key15": "SwA6heUw79jsi4brU42LTsPFjAgUPU1aYrc1cv4L6gfcgqGhGgVSFgQyttdp9mZpXDaj1a6pbYu6M6ejMLZibyx",
  "key16": "uqBFRBixZiD1RgVpMfCrWcoyfa2T9ustAbb4VeU1Bh4xvguGf944LYBFEW4PV7PKcerpVfrWgqdrf3UZhpiPAeW",
  "key17": "aRqpVbkhYNxMr1q4pkCXQFPrtyxp2it2YLqmQEcU5EqJDkMsrg9HeJDvzNkT4fbm8RzDhZk5HZM4BFwWgKVoM76",
  "key18": "4dbNoiNgEedtQxcFaAfAAfbQmikcbkMJX9fpBH69jfyX8xury6v4tDX89Qwv9HizNEC5MrvizbQFVXe8i1NVaJYQ",
  "key19": "4T13GoJcK8Lyvo6WQf89Z7aKNV5KU4WNuVhaJAaitp4R3STzhJ9JzjALuW3nqqxpTCvPLUUeQrPrUShd5U3V4tJM",
  "key20": "4NaFcseFVypTDfN6BSaifej73uiTejiGAawNHuvKn9ueVTf2rEeSmMinXPRTDhayz2ruKhk7TjWyx8PWMzJuWs4E",
  "key21": "SehXKRBC3Xr9ZpjwqmUMbV5hQ1bU6raRDtDwX1dcnKNhS85znarqUDdwgcvF9qpzx18DjJPnaCKjDP2CXBLgnrR",
  "key22": "2o9w3TYN5Meei1R2mCBPqv2qH5K5W2hBVCDjoghFVL3ToTctx5gLo4vfuq51xCcFJBjMhk9n2WRYkAjNW7ZY6Tqa",
  "key23": "bdH8eVPdLrtRiwsbgnx1PYjx2ATXgmnc2hV6Lb9VcwxgqWkXJbh72k7LbDkSm3S4Rc9JNcaBABq9meEZXVju1vE",
  "key24": "66uCK81ama8QzSaY5xW6VPMDQWDiG2wzTyevqufBwoVFA4kmEE2NM6XEj2EBzjXAEanbpya95Hd9U4ZZg8BJ65Wm",
  "key25": "WcrociPZsmn4ezdfcU9ZVuxXXxdgZBQAopdQEdHYaJnj1b6NuhfQh53MZ6QpZv6kHjHSBA9sDoqrUrApYGWr31Z",
  "key26": "5phHKhX6gRnvSRFDmpATUSpkpeta7v3UKLS1Sbr5DaTdGuhs6rbf9eVym5kmAjiHjAnoTZrPtfteRH6neEocuW22",
  "key27": "4gXBqWNfqJrUye8QPnpVzreP5i7iPbdwgxSL7uN46vfCFNwqiCLhVk5Yw9N2MKB3gyJpsGGRSnrzyeuNzgo73Qjy",
  "key28": "65XaMQjjbCRNzQSse2yMA7q7rkkCipxnhb1ZxAuNL4zyamPuARkQsgdPvNGhhcF9C3eps57zVtywd3zBtSPy3qKA",
  "key29": "4J85J6sApg3qc34f3cW4FjGafXAUUdcYXrkD62qTWzwYGBtCcYUQ4NhxfTAMzXUdNgLvZs6FWSChKrw5f8T32CLB",
  "key30": "3ncyvLkV2Msd6hTLRjt2EARj9A2d7VGFu8a152U6GyBip6fmJh31kkUXYTxz4hiMcf1gXfKNTAkmtKhbqXLkbwtc",
  "key31": "Gv3St8sZYJeefcDS2LFqCVrmWQvGLW5VVW3cs6DsQr6gSYT6Zu5YTb6XKGsjpM9RE9N8MoP7kSSSkUjUmPCsiah",
  "key32": "2rhTmCa3ZeXMMB6qJJyVrmbK6FM69PxVjdiKy1JixXHG3M3zvD2f51GzdRg3LE6Lf3AfhBN8H77K5UUgQ4ycncrP",
  "key33": "5dfRG6Mz6WUzhsLMT2oByNqYNgMzCy88vJ7fMQFoWdbjPcbPgNkFhfZFr3XJi8HaTRpAhbMS4mTPyXRLxV4jQY7A",
  "key34": "2MFc3mMrViWTiYnCqeJ3iSKCPSpQrUwhaLfGeL5bJtsP4e6u3SHyEapEaHkQtnD96tTo4hcsVfnS8XTyG2pZSJZ3",
  "key35": "4mWd9r8TScwnEDWHYvxi4VqoQBv4CN93XeVkFiEHv2kZ4ouaxHKrtQ3y7SPe4FtMMAAw5wrmBcE5Shzoj6JYzJp6",
  "key36": "2uaFNFDLCMGPVzdZKmRAzAeQUxXkMyQKuxQEczGueUVwy5AvfPU7x52gwvoCeBQnAj3Me1RdLFvWMNsXiy2eEKK3"
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
