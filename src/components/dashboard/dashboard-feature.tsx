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
    "2QcvzNFMgyvPhgty8WFSHjk8WKWzJSpXzHuq5LzonnqWzUZRniLjMGRTS2AJ61Q7FcyGmGi6TfnYJ5TnDmZcEiTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMFUzSfCUWH4r23CvwmkKk5eFz4z6i8vbA2W7sPBen25jc7qJdtH2a367f6oKANxd1JVEJxkFMqHxbHYUa68tVw",
  "key1": "d5gwKzeMhs4xdRttVVcRwMuVeevPiG3SrzgBFUBFvFCVcZcLmteoLkqAxBLMQRaQo1fmhSF9GcfS5TiGLBFKv9Y",
  "key2": "4C7SpoWxBocXNXjAgW1EcKp6YDgkJzV1gJRoxSyXPPCbfVzXRRA8utEfan3Kq5B4rkJp1q47VBmnYXRjke7EMDKt",
  "key3": "5udDcY53Y77S34ujKK4Uyd2uN7XkxwqG1AH94khdKt8oBqq8BzGH39D3e1GrDK8tkPR8jJ4Novx34mWMDfv6BMbk",
  "key4": "5qiDY5tjJJBvCjEP5Qjir1pzeJZWnktsQEon28ER5Mh4o17hMWJQEwxxkGtzRmLLZHL87ifnHbC2czzvJEzfe4Jr",
  "key5": "5LNo5SiJpPCFDGL5dagvCrzKqEfhcwfhD8PgaHmCk39hPSrfb7tXQTKFCry8RZCziZ84xTvRntgGpt8sKVHyfBXL",
  "key6": "66ynyrm8F6hREnG7meQrQ2stYoECXrTKAfhWuQfEMdLycPMBQCwQ1H6PgqZ8s51BcCN8CGGNZBsXcq9LPP7FXXb5",
  "key7": "3GsokFuzUgAdKz24EtNtjs242Zpw8jfF15shkksSuEwF9SRpY4cc8C2PYUV4ipPFCUcfvJfmBGDSXHsbL6zsj3hj",
  "key8": "5U5dS8HqQAxcibaM3bRdBLkusVDaVJJBdHDt28cuQ4eoSoAnWsFEb6JstY4QeMwd6VNrZJ9B3nngwafg9vu2Pyf4",
  "key9": "2n44WxCCQ1gMnY1WAmgaTVMSiry6WciRRCUecthxDFGZnfHL3nfAxSx8yDPEEpKviEoX27VCKtU1j557ESMdSLim",
  "key10": "2DnK7cRUQxdBQ2sC6VpN1AAi4CMze7Lgt69hUBC78yH468LCqwhLT5o2hFCifrniEW9iboxG5spfG4ff5W79Arw",
  "key11": "5kJ8gEgfrJ9vZ9UVbjW8Rk97zaK4GiV8jTNhgcGbHcaDDgRPa7cnpu9yeAoTnbZQSX5njLkgP7bgJgQz9gr6YvdR",
  "key12": "5kZj4Md1oUugtyiYESMb3qaAVgbdncqiNctTrpHAdFKvGbb9HMuYxWi1fAiqtaqC4tNBiJCt8XTRCxL2tgfF3qkn",
  "key13": "4suvmmn7bgzxWDXVFyt33V5GrXdm4GH7a5YrVdxe3tTs4mgRth9ccqBD5ncn6QSRodemTpqCH9KZZ6tyLTqT5ciK",
  "key14": "54aSJmUq3MhhpJLkt4qRKDwKc5MDwo8UrMraJJfgWAg3Hjm3AVZ2qVHjcN8wLyaHnLhAJBnzwRAhx61p12NJdgPu",
  "key15": "5dCwgXxYVtbX1BN6Gz6iNpx2d6nhvZMxTtHoN5vTgzXZbYMhAgEyEEs6StMP9NY3qrcaNf3y2rk3zZETSCpwBjkF",
  "key16": "zKegeoefiRoGreyN1eLaJ1yGS3euMk6tepGosbtT2e2fq74c3RYVxEAq22e95QLYWD57eRNh3AK6ns4FkW5JURK",
  "key17": "2c4ZgzviR3VceuYCmdfJ5xFQE1YW9J3gCNvDTPvd7wsXGYH5FVyRfDvg7szZ7DohLyFs7iDbdXUx9iq2cDZydbHu",
  "key18": "3Ser9rqr8QdziMPVXbsvAd42VaqfCDxYuna6G32rcZ9o7wrpGiH9fDQU3fNVbYuo4geZq5WvQo6wtjxckNuWmNq2",
  "key19": "2f25qGS7UHbmfspYDhK49LkEofub8SYyiSkJ3WpTBFYbMYgzBjBMjSua2hWbzwVUkF7f8SWTBEXR5ucYfqdYZqiL",
  "key20": "32dMbEUWwubrwjNuygKpDJhWJwgSM1J6FNWgVEktcSzhsUS5wGaqMuEnUbKX2q9VwBYfrqu2ikLk2pqKwxEBKZJK",
  "key21": "4DzHGynEt7A9jU4zGmuPfLWkMgqLFuf3jK6vRVTsyLEeMw1SdtsN8wA7Q4TNSJsAsWdkT4EKb6HJzGsc1UtRevRF",
  "key22": "5Uq1nkTeFZUgjcSPj83ezVjo2RJviFuzFPK5eJxCuxyWRh7wwS5qDxy4b5Uq2BXHM4R6YsCzLzrr9SsqvcdUoaNw",
  "key23": "3oZ66qycKcKgAtMFwF72mD3g9b4m8oNfQdr6pwtfkp78PxS76aNNS3wU124eRE3aNjwK4UhS3QhN521Ntb2jtkNV",
  "key24": "4SDwN4DTRy4h6SK5g4fYzn7fieAxD7ZXkXU8S3pkAWBHQzT9yBwynp8a5AiebUu52s8KLy4WAnB9N4ZrUGJuHkVa",
  "key25": "616UWTBQ8UQexaK6DGT2q6VmYa3bcYGgMs8xshVqXH4zfSMPoMMrADuwrUSPe8dhVUbA2qAzKcHWRMNVY2NWLKP3",
  "key26": "5UbR3YnJYtQbvBsAX4PgfeYCKhkj8J2rVkrrAMwZWP7FmSyUYk1EAcoyrBmNKMRWDtqCFtHto8VrG7ZF91QSPVwQ",
  "key27": "4FmgsfprFnJZruRwHpVw3vdXyi9oez2UoaKY4gUmC921VxouiiLP7WSXpNPeMrFAytbs4N98Hugjjs5GpZYr6BUf",
  "key28": "5LJXXHaRSHU7EhmkcrMbuXDWmrPxz2wJdgf4zq9emDpQT6KE25iRzcPTJcGuUhFK5M8gsaBYAguqx9KQUCgDfLwm",
  "key29": "2HTu9TVzRVbHSzYSfRPqHBXRzyVWg8WPcc8QoFjmLLG4eSpLSVYoQGw5iZSjspQ1XUMwb4c6eDN7GtoNcQCXm4pJ",
  "key30": "1AMnjiokDhFHjjWeqhmRBJm3QZhnuMRHNMA55uYxAGwz2oaMeCXPNsEnDuRoftUmvMxLBbyfyEoFTHvzGLhujkn",
  "key31": "YPWa465aVUAL9CkR6xSgn7vEpHpHQcBBaSjUn4FdzYmNHXUvHrzZ7MZwRPwcetewDbXtWtmxMt5bNkkyL86f2Kb",
  "key32": "4GDazxgKeuietfwPBp32jeVcGsEEVsRGkw5UUWewUQkDbMfNRtyoPFUsuczup4xR8tfD7WyT8Y3UetPK8EN7Q484",
  "key33": "23i46Vko1vzJZsDRmJkicenmFMVTMftUpkekZvMRR45Kohuwp1GqXzw7Gy5ZRDtjhrqgdanVawYumdXFaSmEYPhr",
  "key34": "3ig4VTEJwVPhGEfg3WtG1JLkQCNUvG1TunUqgFWRCWdDZjNrnd6RM2fym8VDZTCYNpddtj9aaiGgVuGebtzaGizH",
  "key35": "4YauuoxABKPAe3fJPp3J4jtab6GaHuV3Ks8Sdd1GXBdpVpBUnhSVQTqyzHmF4mPm5J4De8hnPfiQw9MbfaEPCujq",
  "key36": "3dgkgLEa3UM7UWUuYor8mi6c1UBnRq2Nrwi6WS2GjwiZaGYXHZTUcePTC2tznr7jFzRKrANksBJcNyowkQ8Tujmc",
  "key37": "42sbkaTeYp2SLu9y2yPi1GxFq854GX6RBZUgPNjmsFLwxdnUkkRPHqkMax1sAAEL46QsF9hujp4jAdcJY71ufgTm",
  "key38": "iHzNanb8tQ6iYeVZqJfCuw5nXWpYBHpaskmASqrvfZHZV4YsHksXYDhP3C6ZG8cpGaa1es1GebK6Vg6SNyxcxpN",
  "key39": "4TfZ86PCZNr52YtvF3esZ2FEtq8GA1WZ6S6wkJPDueMPoZzqjEVNypvcW4KVPJDeyMxVwNTAB6Qsc4TW3AUFdvZF",
  "key40": "4RjuSwZHuqRcH8eG3DDBUcWDUiHfwATt9rS3j8Mry6TV4PsoxZwTCDs5esHw2Vgnmfsut5Na26RDXb4LHQgxd7uJ",
  "key41": "sFpsMvWwMY2y2NgHc4C3m5ybrcxao9UFeJZaM7oH1R2QtxT9Yz3u4LkNdyoQzQQ13s33vjj7U3BHPVNj2R3gNGw",
  "key42": "ueugUPfT5s4EPAhhFeW1EHeVVV5dhb3YeVd5a3NKdd2grdGzUJJ1Vjv26itJcFByZT7wkqKDzVHZq1HSSLBHyg6",
  "key43": "2VYww1CsSNVY3oLKar9swmN3PJ7Dfcmd5aQgRDbqa3QmUgxZPcGMWavxHKiXpoLX4dqzng9EpCCPQg5N1kPFR5ix",
  "key44": "66g3RCuUefQLGNg1hmfna8u1Qk11xeP1vRmw78zJ95HCtUs6gKQKnGqvzapssyQTinHyUG9xEH7GkCGDhcZA57Gy",
  "key45": "5UQEc2dxpb4jp83p95KUpjhDw1ZFNS6jEcQZdh5SDpD2Jp3jiFY1aUUd4E4k8ofQyfDGmNX94aRzUK9FyfPN2GfC"
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
