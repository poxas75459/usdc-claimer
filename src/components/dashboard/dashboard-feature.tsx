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
    "3DTcHDaUPeVtn1uQLeWHgzb2FuV7E6aokEMymYKDk3Ucw3ncMbFyV2U2KqxcWWC48VtWA61aPAy7K4HKeU1JNdMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFPQbJj8j9173qpd9W386ZhNasmK5c38ChgG8cLtzS6zcLUYRRZwR3SuuLF3mduhCkHEJnQuHh7Vd13cXQw3CAY",
  "key1": "4zyfqG1oJPHgFdAHNBTfiSVFPH7FSdMTsXV1u1yu2BFfSEyZHmkDVU8KJkEWukEuncFwmbu5NLgh1iAFkQu1jb1P",
  "key2": "5NFX35tqSjiiH6s6rP9LgvuLpqJwmyYACZVkJJMYvViMdTg1LE1oohrDG8pis1ds2TettmMCQA156X5vx6BtRDfE",
  "key3": "3CoJZhyBYah4mPMZwXMSroDyuJte44YUS6wKg4Sq183shGjraMwjhtd1yNbC1hD9nfbis8MqukrZ9tz6LMyN55BD",
  "key4": "5FWpp5KGB5EES5e3xKF1dPnRcPj8dbBsV8DbL9ZLtjzck82U96Y4a1DqS7pfDhBUR8jAK2FzbVj8fGp2udD3qpVp",
  "key5": "34x4175ARL5U8wBpgcz4PAVWx4bFm4RYnnee631Ec2jckek6ggFTT3whz2WKMnA3v1njrffgBiWMC2KRzQBv6cbA",
  "key6": "4HxCfvpGd7t2eKuJrXoSaBZFBv515dhw4EtYAfSQUGq7R4jRAfuk6wkJ2UsZ6GTWHS8CUu3QDdJQJoRoTNXeiuxE",
  "key7": "2331jGFYzYBaBvtXRwpu26tchvuTDfaUPviFZmk8NDRaQN9wVo4auFky9XpoPcssf7dVZvz5RqFaS2YtD1FW8oi6",
  "key8": "E7q2c4fgGW4tf782MiTLJaERVfU8yYooaHs7Xoi5G7c5ECcjai8DE6MGVo8c3YbmuFHV638S4Y1iApqq2dfT7cf",
  "key9": "2PZAEDERpwE54YBDfjy7QTu26bbxggf7ahMSq7Aa3V5Mt9poUo2vUByMo3rJyxqzVr9WeRowApAV771n4PkjYwYS",
  "key10": "4GhGYYTT8rg2h76NjWmau2C85PVXsqXFMPKzYK6bE3AYB9g47Xmx1Rib2FhF2HQo5EXdAL1ibiBDvUMFzgaFuzBm",
  "key11": "UVmepHvsf22hkn2qRSLhx5M6njWCQyUWkA4f9Fg3xNgqcadxBnp5NjR6DxaRLSopEscK7s6JZ8RgHtLFvEQ7nZt",
  "key12": "4TbpS36s75jGGheK6Aq4JiNMP3pMYP5oK9fvqDfdfhVknq1W8MRje81sCtfnXR5uW1WjmcpfoMnviPQVYagFJPME",
  "key13": "4ezqn6oJT7dFMkedH2ve9vvgYihJwhAncgThVfwDBisPDgM9tDaVFX3doCezWiwHfTNth1o2qkQNwSghW6aq3ad1",
  "key14": "28m5fW1AAWVRuwooBz6ji3DZW3afKPrhyW1QUQF7Vrohfcfb2ibhrZ9T19FPHUwaVVsHbtJqDCKM7Pb4egRuNi8y",
  "key15": "3ehPuK1qN1RzEkv8aQ76heGGJ1mVa64DXX8mWMeNquLkQpvfWXsqezbTDj2CBht9CpAdukLDkRuPVxFqbotkn9iB",
  "key16": "5gfXL8J2XfxXntMRvKpTj4AAn4ftYzqf3xRGms1Hrzu3mGBuxVjQA5jds2dfTChpuVV99KWMJ7sYcCpJTHQEoKx",
  "key17": "2y7WLjZVTSc372u6mwYf7XD7hcjx4g6ZJWZh1RmjU6QavtaGpXAgkUr9ZnPh5nXPTS3q5qKhreZ9ygf8jr6gpoBJ",
  "key18": "3uNRYjcSgNVMYGzza7JBVX6EvMi44hUNXvB41EHJzUTavrzaWQuvLDe9ZuxLeQMrE7TLDxcR8ZUuJ4bpGnoH2CoF",
  "key19": "4DXBHA7G1YKAwvKCFEz9qfHEYYdwxGzbmd5bR1WVEMBYfL6zKhWEN8vLSS77NtmncK8LJJqhFKozjGtwKNnx9PcV",
  "key20": "2qhTtZHnEGNCt2pa2YjrmnzMGWJcXa2AFys3y6pjjUZctjyvzwZNEGqQorn27tbCKrzATCLxFtz2yf4XuZuracwQ",
  "key21": "2sxezfjFM4srz5rVWioHx5xocgdGjtZipA1EZaaBnFMt9zn5jCVYA4srE1VSQ9zz6cT2rxzRDg9deEPinUPp32Ka",
  "key22": "5CNwbcoWd8ZKmpARLaz1cLsT8H66F3hyAyw7yDRBggBHwJ2oh5Mb74zVbX3vzF5cecSstt5g4PdrKM5pkXof643C",
  "key23": "5CYPR8LfL2VcBYPPSSCsat4uoH5BjBXHdaZs2dv297KQFmoXPD787L7H8afZVraf61BkuWeEzh9u4m8Aqq1zuM1q",
  "key24": "5aLqVAGBTkhDDWmi6YAqztL6p44nbLCsvgJVRSwaWMMyQMN5yABjmNG6xaQi6vNuzjrCc4xoGeMY1umYKWSkyV5r",
  "key25": "4CWoCAMVhPpYXQHXCqtXCibcC6eABTd8PDsR97qPYnFV1RKyycx26eWBCGZHtAxxzheWLL1VMnKp7SHMiAKrZjjD",
  "key26": "2p9f9MYFfmCTkPyAbk4TQWFkixZBtVTcNCpm44VYxUX1itmgfGieZ1fouWn79SgmrLfzDRXbkD1Ku1i2UNkepWRj",
  "key27": "D3T3PQ2hYqfR6RAjevDV6BFbGBNSqy7sU35nRNRuDkKEpRtPrkUAhHxJn74tpPaZwLWpeaqKcW82DhofMU5eL8q",
  "key28": "2VhAMY56918UhV38e5JkiBVyVkSwGnWZc9xWamGUQDiAJYUDyxnDzk4EWWQHdTQxqcaki4hRwYcpN2Dfsx53qtjQ",
  "key29": "5PQ6mj9jmYRst5vWcEhg8mQKMy9VFpy1q9Sx7oDvU4iwy6jvoEXAiBfzxyuFVg4zsvoByP4QoyaYFQ388dCWNPkZ",
  "key30": "8mEtUeoZkBJiJRyPMhjmmEQWMy4TKB7yU15DSCFLLbAsWhmpLpyXJymy3AENVxRpptMMAZtv7nocPWeR4MoEX7G",
  "key31": "3NWhJ2m6fWrdcrQKXgMkGmqeoVcHzJEizj2qTWfqtpQi4BZut5jUCdRWXcKrVYXmyWJfuLedwfE6XGapUC7tBAxU",
  "key32": "cyapkiHnoeCVgGP2XpABUEvkX5UNdw1i3s9MR4ESVAAaQCpTUHob4S9UsgK6gqjRWSQNeB74tjNemHzk4PK7N4Z"
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
