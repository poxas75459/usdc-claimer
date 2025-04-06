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
    "6425FR93WU9Yo4Y28gCr2rgv9kvTCeosef6TGyjA3TZa4mHUcyDxr73DzjnjGMkL4EgoNr3dagNBSH4QJGp4eqrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AsR66SCtAQiCuYAP1DWLMEeArQojRKU9v7uYpCVEUpmYV2KwPLs5yuuZQZ83PHB6K19XZSvRgbFgYKKhqttQsYo",
  "key1": "5zL6LVzcgN8vVuS5DYWKT1CdHVudYYfSFpBqugfiUF9UAQopw8nRDCXEbgPB2bXdEZhnfmRtWoSQMsSCTZYRw7hc",
  "key2": "3GHSx6ndwDbJUDQitzzTZxyGwKjWeewNq76dYoHmnmzLp3pXkvR8Sn3VKF4MqJmJBiE17QHayMyaHUa6X9q9LXjd",
  "key3": "5mAkUB5egUBWGtAyffZ6eNggGd6mrL2HvZr5ozRf1DWMizHZ9btMn3e2q97WbcGDSMPoPNB9CbyHjsaAVPqkSHuf",
  "key4": "3aQKeW4U64y2Hx49EMxHfb9GtjVaHeEJ8f3ac6DJB13fxe9PpTxqMGzkyZrXb5KP9szKRgshNPRU3UtryWBzTTwC",
  "key5": "2vYLZK5jK6zQ7pxHif2JmQendvbqWJvSiNL7cAL7SvdQr9NxBQ9gssMJrGnPdBxBCVRtpYxHKhdvKnQF7zaPfCKj",
  "key6": "4Ggqt5FZ8KojfUotPg7YUPKMuDLEVFDarESsRhNa8f1wffevdAuxCkP5uCrHhyZ69PgWcDeP95Kkjbb9VmQDZDMs",
  "key7": "4WXAuuCbqCkHJc81nB2vFfV9gFyAoH9WUJazrDhcAdmk5UviLov8FkmAxNMi3dD5UmE2gqQxh5mLKV4eWN1wVK6N",
  "key8": "nm1wddA64besuLaP4pG7FaX1S5VcCF7f9vHjX7Nb8DfuXS2xuYR4wwXk5cqJ7ptGS4y3wADYya2r4Th3bMUscYG",
  "key9": "5NTLMzcXXagc74kxaDTewsi6vnGXQHtiG3gtZsRS1AYHBdFzCfmDoJt5hUfFFZiCRzELXz3dQ3WVVEBVKYk4jfTu",
  "key10": "5JSt3sVMyEEgfNAZJkDQL3MHrfRHZYBDjc3ExcMHuBWVKbtS1b1bZ3YiToUJNM86YgFNjPvf3FTozjxUS2PbAzvE",
  "key11": "4F5Uz95ZSnQzzyg1n7gpaeT8kDESzoFCGi6xbHjKorVcPmvTYJEVEay9mdgfaXhq2JvDrmz2otM26FPuEJUp8Xm1",
  "key12": "4rHmLWkeFPUPaoZungEmB5Fec524HnYjH9PWbXokzTQU1qy6pBVm6LCc1uC59yTArobZAxKYqgMooDZp3K7BCYgs",
  "key13": "5swS1fjiGwZLcqxKy4tHy3uSagxufxVnndfp4w5vpLB7M2iVeqxtw6QyRYj4woFv98zM3NX9EVKsbogGdHLs6nF5",
  "key14": "2D6uKWHwqYMJzEb3RG6uhGce4b5Jjv6Frz5w9e1hn7A9wiLVHPr5krrZ4h2jNnRe9NZG2QjUmEM19eYenC264GME",
  "key15": "T4mtBht8nSPKvrA884farMmXKNizMXZmdKEugQLjQti13w4xK3d9Z3nHUWkppXoAA3tiQqaAy5PwYjyrkxcQaxH",
  "key16": "3X7us8mGBEGJGBa8gjR3k76tXQRbquPovWSjpbxAbfKSfDcGoYGhL4ByMcUcqwPT8k8LBKnbVr7z9RRtyhLXguLK",
  "key17": "8cvrnVdWkyvBZvusevaTNjPdKnu1viT53pomyxBMviM1GJKVAfUnvZGVNtZz1sgZYyMHYrii2rPFbkf7X1Ciy5C",
  "key18": "49pGnBKpwN3GAJrewpX7873zrpnKRFZg2pzEiVaHAyrFTYSCf5Nu2yDv4cicQosGyMnKQDWRFhvCbiz7QjMPujNc",
  "key19": "3g2PFiS3Hssh92mxmasqiQmJyhPJMACGHN1zXnYquJDC4RUziMK2iYgFnsVz8N215RqT9BQVFcMdxCMBu2q9M8nn",
  "key20": "64yRFqqWSz39G5pThdWg9wkGFE9mi3xNgv24EGbPMUyiScLkLD35A1JR8ZqftNaxPMh4JwkVaBTw3tGkXrMyMAaK",
  "key21": "2FfvjLpTwnmWB5W4e8iifjsh6t1qnHUjRCsA4iNP5KRyj6FtDKfyDW6JTNbnNE6oohxmKQsrd7vzU7BiiF8DLpLf",
  "key22": "34f37oYJtJH7fbV7WWKMXx5xbGSTrA312makfdBVxKH2DRgujhbABLYxfjAcx3oYCdVgxsL3UXMPkfXtCRs8vUFz",
  "key23": "42JjJJBLJhZ4ysGTgT2q8NeEoshHSsNJrjG4TkwbpVeZo1CAwGcgaGUBVENJzSCUbibNC2QmC4frRDyg1tfxL2Wr",
  "key24": "5rrDnjUN5si7ftVd7CgKXcLtuNiTEFKxmjbMdPwr965Yx9BYUpDnd8Z4howwiHDfxDDhMuxgvjgv8dcC2jwMJUaP",
  "key25": "4ekkdg7RdtEQZEaQNQWtCeTinbPVWM1dRnfqKNQHdfWBXr3HKnSywtgBeBtqj2ca3X6G9i6xf5iWsmRHxVnYcfFn",
  "key26": "2pM9Z8bNfTZXmL1MxHzwNV9K9r1VosBVeZ5ZFYmYbDQZtUznxoP7QbzqAc3Lu4JxvHRowJ17L1EHgBahsZG9Rvkx",
  "key27": "32jmaZNU87KZkRDf9qcKLP8iJFNq9YLHDBoHtubSqSEyEnfNVsENweTDKW5j8isy2LkZZP4q32ygPWbt4diXz5As",
  "key28": "4t6CCg5C2eTeSZhNNuxF2iTt27uQ4ieSMKZZesVEvsGiK5ya6dTg8KrdHbPjUnoNrHrxFkya7jcJUHmWFkuGx3fp",
  "key29": "4RAtYF2bUjsEWwsC2iZknE8PpjYqmpLQ26PE6RydRWQGG4L9j6RoMba4hhuSrjfnffr6StHkNMyE896QDCHAGhtK",
  "key30": "QgDEuGhDMAYU7BRVG5vbA7kWENKcywng8Q6HLGcQLnXKrSwWR2HXk9VJGK8hHDNgrGvwL4WVNPNdj8fHxqdYQeM",
  "key31": "47SDym6HcfgQxV57WhNxXnFiZSdzmabs1kQexarwhminzkq78gbeMs7LxYjmmGknFbeuH5SKqepm7uGzmwNxX3yd",
  "key32": "5GhCAopS9d3judDGz68gqRYKMfWSbYnrJzVAU4WYUyunDfh3QmxTdBAJ8yKu5tf1ETbkCGDKHt1ZTX4p7fWpUwP4",
  "key33": "4tgnGPnBVPrBW48wWZ82uPBFFURmAUGrBGteara21hfkc26xtRggY31ETVgnJNooqLxT5ccaUA9J2MynuQ2dJKpq",
  "key34": "5fzeXsobEc55mZyojhprUx5R8fjx7jnLGMoGojJq8snQn5Fhpx3yiwU4dao2nvdLXk16Q1szZYaFUpQwB2pfDNWR",
  "key35": "2yjqpVSLkxwxwkGPDUbfz4Kj1oY8mEchzeV6in2ySWWeAQVDWjtiLTzMaUzrf3i5sch8rXDFANNy2z9uXF9M6RaV"
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
