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
    "4cVgLAWAdpnQ957L7fiTksefbpcB6Yu5LLHLrt9XJFW5BQUvia3tGrYwVBBgQ3R7UwYZEkvLrCuVEj9HA24RuKwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KtEt23KVAvhTQdpB5aK92opU4bUeccSiCwLDMd5SfzbMYoxfemVosbSnDrGZNkhrzQnaa7yDqp456NQu2CcbntB",
  "key1": "32bDcHKcPY43EHkYUaa7N1Zjepk81iHejVCS18sSu2aEmUFLFDajUVucjepxYw2Rd2B1CVMnBdGUEwRFs9Rp5KqS",
  "key2": "3Qbd3q2J3H1Gz8si2N6QKq9DeCw8Hj9fgnfieTu9cKNgquM9RYeWY76nzCdfJiTS3RiMJuohEmrbSZZNCuoJABdA",
  "key3": "3yinyYMNqo1R5kvFzJdeS5jJRwDv5PSARFbbPskQe4gaWNqp2P19KivHHDpMM2BobrbwhxpsyrpXExjMjBjbQtZk",
  "key4": "42hhhXiXCVjQ6S2guY8KEQx6apk3FWJti92w9sbdcMZUd52rA2NaV6wEsGHySPLEJo2Z7tcaQmBAp24Ujuaytycb",
  "key5": "Usg7NFZ4A6gVpsy8ZyghEfKwjdddzXtTGg2PkAnz8K1epzzJoBT1gYvG6XNoKmUtLB5nbDjpKyewL5vPkX193fX",
  "key6": "2LHWMdPoyNS1xTj5yv8EyhKqNBRo8CXAxoWbeW2Hhie788WAzgpm9ZH2w3Ki8WTgqYo5gJKF2PpauDRw9h1J1ssy",
  "key7": "2pJWBXb4xJaext8WUkKx4asP2yT1X5CXqxdK1upQ2iM4tnqJKZLWsjXY3FVEcTPRdYgZfrrLui4xc9UkatpqR2Ex",
  "key8": "4uZqYLhW7NxJgjF49U8RifejKd6u4FUQbBAs9TPByC7oTs73N7tsfALrwwfHs1ZqAyBJ4mouSHsAqWEUWUH2hC54",
  "key9": "3wAUegT8gRQDyqVoZhVxgmUtxTw8NSsw1en7r4bt5TjHWU312hwyAPvwtNy7FkE24aPsZxRAojJPMTjFmdruu84h",
  "key10": "hqQu7UqVvtPkrZrDhXqxTiUB7aAoN5edpJFUANmH2pYwBnzU7TDBkVmrbioGPokwXrLXZQ8Vr9TFKwZ2C7no6gJ",
  "key11": "3r7cBDypCrzW1ZYa831jcgDyZN7tLRDqTZVuRQnzsK7u1RN1MogcjFBRYtCmGQYoBVmB6LY9dHDUKFLG1RdSgShV",
  "key12": "4bn4dnzM7s42cC8dLq5pigEKKdmP6qgBgScEQHs9RJjB3PvN1kqg3w5xxVm6NKzUwMjXgwTMPwJpDjUxrkPMV4HM",
  "key13": "ieD2o9Je4uvhBMruXMem8LxeM7QDUxJEcsfa15Yh7saCAFt4x2wzwpZGE5BxzaDCnC1cs6XkbpYuxRfamQWDetY",
  "key14": "2yTfPtFwKtgkUuRrvc8jWr4zozPWLQSePeyz4iRbpgZ7NdZx2Rb16y5VgA4QHxwES2tAX6hxeL9K1MEb5XrZVjto",
  "key15": "3z7tgGFt3fnVoXBNmUzVgqDzBKYe8jMU2hw4GEYPsVDwdMTFUtuW5XAHnBs8TvS1neydAhCjr5HJ3JC3Ma8iBQGS",
  "key16": "4DvQhTCmkThPUZJeUzc1CuoZcZhPxUkKdm2arCr4MfjmGywuForg6him8UNgbNH5YbTBmDVi7iyMiuXELuNcCn9J",
  "key17": "5LHM173F7K2LzypfbNWReGrt2koDW2BGKbv3BHjqff6TU4dk9HeXuUHyqCPQc8ZefUimZonMjZn6pYxtKfaQ4nTU",
  "key18": "4keELFxZBwsnomCXKGR3eJt6BQ6SaLWrvFTUfXHQhhtCjMCPRMLpLeqmaMAEm9EcvQw5JFkV5zRnPxwWcZgyPhvA",
  "key19": "qR4xmvCoUayPeBDh8CcGeXNG5izygLccUJXdSpkA7873iaekx9mnbLkK8GxKojhowjSsGfUBaeS7FnZzCPVBQuJ",
  "key20": "4ZyZz9eH9r3hN54WBiLutxPrB1nPRxU4tDymTSFa4uYvoRz5pqDNVCv323ChJdAXPMUa91ZNSB18Vagk2i2obsAy",
  "key21": "51RAap6X9cpo7ouyjtuiMcqshXffreaQJVXC8heHdJ2x8f1Vm5mNZC6yqpw1TcDJB1td2RSbrVf4uCw2NxT7YLyz",
  "key22": "2wWtom5JBpyfvM2ZQCZTfSUDYTmmr1xYqMaCGAKq2QtTv3voTTvLHyxGhCuFU4Q7UEogHc9kqjv9BHmJydzAMCdL",
  "key23": "285B4bqbHkmcJzNYXZEpcLvhTGWc3gVSitGP64Vi1ZYvXvcwmmiqcx6mZFfQo1Z9HjezyVZDkjBQPUzgwgvVaJke",
  "key24": "5rSNG2hVYnputet8DGwd6yujcrDNGKnoXFw2pKGfSxw4y3MJS6Mvta5jbLkVt3YdKoUHcxqpRjMjbtE55mEPYC7n",
  "key25": "5hw2fpmjy5H6Eg3iWvXPcMuXnp1te7PsikudesHncp6uYymHXDRfPCswK5KDNvj8PoVQoFz469nzgnM4JWSgECWM",
  "key26": "3NaAMo3fSVUwqGfpkPMY6jHB5Q9goUxMW12zr5LmBRo1hH7MpuqsTeXU7eC5EjREK1XkeLZCuEvg6TBofCrdndmn",
  "key27": "zPqeyX2VzPU3k9Kb4quDCTfarDEtFXirz2CoxAhcQzJ26NPoc9MZj7JdD8fabyiu7rF9ojUDk3KjNjKSg3DcTRE",
  "key28": "58zyqPUAnUJaoyM118B4T8eRqEDXP2bburVH9dHmzg5ihHFHTy3Hm7bBhB3rYQMLUY5JT5JMwHhQq2Vnak9f4Qm5",
  "key29": "5bd7wx1BpBTSW6H7tmdLRFwmNPSY2Bbo8f5ZAFVQARGTgnGL2sdPb6NKnWJfxezYfXHaHrfkAtNLc4AfEqruY9z7",
  "key30": "3ryyAsN1TKbfTV26Epcvzn5jA6cJasuUmGmRsUGWPA83xrAMJH9f9iXWSBCTFCRXTTDfqHSkNxbeQg8foUNZBp2t",
  "key31": "2UoNTt6HdUMzyKDXqqX5cG6o1mQFWxqVAH5tbLskx53DG3T1ekqqvfM3DSXAQyGyFYxjqk4F1SM51yj5X9JXLV87",
  "key32": "69a93t5ib4sZJ5xEiyyu2eTbrz2EVAUrEXRqgUujKJDYKPXY3XwQQ2qBBFkLHezx654ARMte1WPiy16WCmp5Wkk",
  "key33": "2N6MZR8uR2NphsPujnmKBpBuX9y9VNjiHkknxgCruvBywDt22oVhGw98XgyMmrqjLmPJVdcmayaQG6mT88RGHrbF",
  "key34": "2mYMqXqA3e7VptbHYn3QZ1CimCfhrzN4EkVnJMuq7zMBhT77AUhg4ZhoC7KSdD468YJ3Cpim8yTtkz8AhwcyVApY",
  "key35": "BgcevAdpadsMvw112VpGuye2M9xMTBbDrC2nf6Xuq2qvfowvifz5TynsWZsRHAj85jMtqP1A9iqoTnaQevZCeXy",
  "key36": "4Fezh61XwVetym699b9qgVLiwH9NPNMGGzwo2VAUjiW8nnJjRCJDYyk2wBnLroVY253y6AB5ndJeAjhEqLEN8SE2",
  "key37": "bGBfrMhCqwUVi7UvHA8zKEReNx1W5K9rYJsYGBYq7bvorjELvb3nsbWdN1FuFT4DhiY4XCMzzaU8EvCPNtgjcNi"
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
