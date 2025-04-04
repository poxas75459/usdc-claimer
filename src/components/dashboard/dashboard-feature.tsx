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
    "2p1Zscj5Fzh8onjkKbs37r95MopeWSVg5TVvcXEs2oqbkfXtZEN2dobhF4c8AYP7oKpTAcgHkQi8bMu174BGSqFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJX2LHYDvNeEu8uXSBQS4gUsTvycDKEpr982rKdf67wFeyD6FthwRPZtag4aZgkYJTdd9vhXBFveP2qFH5YgY4z",
  "key1": "eD359AWLPuXo8TeYsBGmU8vfZTd2rom9wR7h9hPK2Y9okBMAJeSzF1B2qFPzHyccrkhuNVV1C8BCQWsLGb7LQLo",
  "key2": "291ybUtYVoz7R3eUtiWVwqHk27kN615XcRcpJXeBsViQJzFf5fYi7z626svFLskXMbYBydeMZkpNswxUhEyetoMw",
  "key3": "5i5adAGS9tab4Got4785J49zo3UXuFXXmbWGw7pUnGTrTn1uVPPq41AJ95HxNBUFfT4hSEbjsRdu47eh5uRhW9C8",
  "key4": "3pHgbjGa3vtdgArWwJLFzXoA9WJQBJeUULeEUquhRKHYw7iUUbYwwzYuppVHhKs4N1Hu8f3wFy4GAGdt5Phepxe7",
  "key5": "2nw3WDCFBE6VDA9Lp4zZaYmqGXQgt6wBiUBjsqCyhsJvGkUuL1iwoVu5gERzW8nEJQRckQsLeoEMsBhQ6VQG7Cpe",
  "key6": "XCyWCQ3c2ENQBvw239mCg9E3dFTFy8MeriyUehapgPwrnxLseR21Bf7XNjERA87deNVNsYS7UdNK3QaGdePopha",
  "key7": "4hGT3SLPhohHXJX2nBgFeoTEchkWzZTa95za63M68A8bLSNnnPSYP2v6PLPReuQYGvZatzCvSe9xpNvHegnDMT7T",
  "key8": "5ydNKmPYYAtFvQ7zkgdbPrG1XaLRjVj9BKouiNYGQNB5jNDpS2cDh8QcNwvYK3WhwAJsqDD1mHokjCLkaxWEDjK7",
  "key9": "3u4br9g2QXVr5HjztuujVqnwj3CFnqcjF8UkaycHCq6t43mYSnAhExm25gA6rP9b26e81QyR9Ypbx1SMo6UHwXtz",
  "key10": "5U4vq9FfAhQt6eszMSCNGYKEmg4F75H1Lji7MbiKbdZGsPf3WqtQouvNt4x52XamL5ksZ188dc7CvZ4ZHEQfkj7y",
  "key11": "5AypHqCjoHxc2Gg3LkKq11YeUzC11DzZRjFkqXQmQZSuTecoFypPNn87hRZJYXywRpmXtS5etheHbzZCBYkLZeuV",
  "key12": "2KHHdREb7crBKc7vEV62EZ644iZeUaZiZatemkLwMrqyeDBcNvUux1BigkPukQ1Sa7QJXpZpdVQ4NNyyrf56Cfbs",
  "key13": "2hLWsN2CoynMMC8P1rg4pGXyBcMHCon7uQ4Bzo1GrW25kTPrcSjmiWXocszJjpEDMmcfCVPFUNyML8zcKCVUrNPo",
  "key14": "5GPyLgkpe5vpwAWFXiLTHQiXxJk3jknvP7VGGm9AwPEHpAV2rbvdEjXf2kh9Qu9PstCUgmAnon7XcDn4Tu71s9FW",
  "key15": "3mizYN1yxSdt1J4VoGxbadQoyBB3ZtvmwtkTEmkeucJMNChz3wrD1Wmg5a4GcwJJbGT7k8NQUUXWug2Ra1EYhiyF",
  "key16": "3bT4otGaPh5X9NCvq4vwDHHEF18XfevbH634oq952HSFHzfL283qkxvcaq7mTenQ9kP1PxECCnt2za9sgvqbAdpd",
  "key17": "FeqpF6JZ16qvEJxRkNAsNJQW8tuVXtqf7jJNXKd7WKnwDqMyi79kwQzseA1DLyQ2r8gvz5LKuoViKcg7wHYjaZp",
  "key18": "3WVWyWhY8huWyTtvTP2hVpDAn1fhQBWgvg4QKCnt1m3C3s6jYAt3C2qepS85CswWrvLi5diksETvZE3PL4GZyC1K",
  "key19": "4DoTmishaVJeMkWaMedYJnyJ8KcRvYcjutpNXSAZXQJaWSzGiHsJp27jkrdrLPfPCRpnxuJdcwajK7MEqcx6GAGE",
  "key20": "5E1RmzXT28TrS83LYpVXb7UVJub4EJNDJ89H4fMDVHWyqRzw763hvAZh6Ftyi6FmV2Hu5b3Ybra2z1xYYQJLtBNF",
  "key21": "4WXFKFgj2WyT8aUFFA2jv19UJ2PBnkMmUV8cFovkaSAqWLUTbW5AirB1iMPNYQHttCXNGGhh7FrfhQWTut36YdFC",
  "key22": "52Y8cBsJXgqGy4NXDGhupg4hQbqD33BgRtCdLg9Pd2twPS7QQ97pGwtHqccTVpJoLLD72RefbNCu9ShiZcpT6xE2",
  "key23": "2mmtdQuSrvbziKnbXcaexppU22xRkFXfjCpSQLeeJJNUckS6vBABkHSgchaBoRZcGcPW2QChEaLVsFHPUf3zK7SQ",
  "key24": "45cPNj368RRcNHbM11UwXUaFUifNpFeSodgB1ywTAi1bRxb7bpp7E2nHvG9S8ZEzab86nhVVmHMLiGH4HXKN4wUa",
  "key25": "2Mk4JwTVKeUjrddbQSpZKVxPpGSWHyTpfjZRva4GzdofFedjzMxRGSJN2XjWpjneFjgfhNEgh9JmA6iffshLYFdp",
  "key26": "2bUooS9KG8rn3Uxhg9buX9SNhNdNuHenLbhYh14c1R9nbTXbyR1eSfKLfDZ9jwYp166Pi1fjCiiNCZSKGz7Uu33g",
  "key27": "5j68uVenTMLj9A5KkvaB6ggqzaFiS7nWPn4uAXQyvchXEC8wi8eHw4xC1RpRjsJrhXUTRPGV5ReNmMmpJWbPYLS4",
  "key28": "4ihqJ5Legk3UoegtyckJD93cSUWX7fgxWpy9n8Dn4ihVYcuHijCZRee1doXDJpWsKnfEwTa6DqP3pbVM2YGt8qNE",
  "key29": "3g3HqPNU1otXD92HG96Tw85NuH6mSeETMYxSdkzyce6aWkUSxWkVN3bgFkga51cfD52Fd43tm19uWncJ4s76KUaN",
  "key30": "371TrUgpjuUbpdrR33tW9Ab9FkXZBsBpwqsTHqnaP4GhBDg9KwDakXvmnbBR3e417fAZAPjGoYPpvHoqEv5bsu2A",
  "key31": "3iddJyTPqQQKcUcc8GwHM4XWJU63sCHEo9gAkngcr1y1LpdMpCVEU1GcaNC9VjPTTD37X7prC9J48aMPd9Cpvf2U",
  "key32": "HpL2oW1PoQwkfbhZcAdbCsmUBPQiMkjUUcZaFX6VQVDpkeV3YqTw1wym3NcqmZjzxyoAvWYE8jfMKMYAuMhwbzY",
  "key33": "4XdHBmHvXNZopFJJsYEosR7knUhNnwbKi66fmWz6amLyofr9pEj9sxBZHAG4Nk4wnVgRGZADSFxSS85ejXAuhNGj",
  "key34": "4RjUUFzm5ja37aLA35nhhg7p4kTobnwNQg3quABpvuxG9REB7SxwhouogDtvMqK3QYGPB1eMkMHWCdQGhzct9BuJ",
  "key35": "22AHz5QYAACL2iE4HpwHYUszfTeFPkjLSVv9EFJF9kbeiToa1k8ityFJGEkxjTj9RRs4wgVnEQRWRsfFFCxYBxHe",
  "key36": "529eNyDzR7JcVuiXS3nGU3wJgR9yyzBFEjPWYRT4Zy9v8u8HRRuSdxzkCehTa45hHLQheFJEbhrWbSbYzCPLkNuG",
  "key37": "2Ge66xPZqUzMM76SYTsg2Hf6t6ZMH5jsncM1z4wH1Y75zQaZkXJMnVnDUnShTd58gNJBghPc7YHYPcevYg9gYJKL",
  "key38": "4F39iixiLhphF9wThERV6e6KmgVCpQDxsQWxHG29aDv4e8s4XiieqDfMEKicszh3YtaaPwNggXphpvUyU8o4pEpH",
  "key39": "4BtgqY6jG4gr3fa1sUyWqkGLc5QaGoCEct2cBtagqvSkxaFGEE9GqdGRbg25qGqRmbsq1LBKx8Qy64wxdAMkkLN2",
  "key40": "3U5zAsCpikQhJsZwWf5tsBbTBr86hAcUHAWWifv1o4tb2SUYKDRtdAw3vsKpKeyVTBHW8muBpNYj3ytK3J9s79pc"
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
