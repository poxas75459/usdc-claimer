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
    "4RP4dzPdwBDjWMoz9gPDFETZoAtGV8B4efr2fL76iRWVC1cGo492Y7XtMtYXuUgFXKNK6to7TY9hP32LvgvpauNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAfDJ4dT7phvokzuLPyjnnnYpMTpLYDym1psKENqZTA2D8xwFWyyvWS6auUumS3zJwWbU4fEJzGojCTvzdrwXRs",
  "key1": "41cdcrvGuaUnbUMHnups3CsNfPMX5G5612EW3zHo9QBm3pWZZ5A2R3W23o1wnHC5VtSxECrEfQ8twpDTYPTRu28h",
  "key2": "3kpqHSB4iPC3JzkF14tgLzb64ioCd1Xp7PzhNS3zu71CpBCRatoYd6BBM668ncSAGm1K646jggVX4UamumiMS7aX",
  "key3": "3FFhVPUQ2x9ELdHwwHymfTi9ymPhtW2BuCYGJrmpAhRNMNALMgyDtKGvUpBuN88J71odCJxEupbZnFmNUrKdrMpv",
  "key4": "5jz3e6N3c4f4NigHcjJh9tELPCQzDefPdoZdwdCAhsxa6FtmHPBuDRYQDTPp7LMm1bLYffGqR5rCf8CqVQPNg2vv",
  "key5": "63aA5xk3CYTEy2oTb1Yi7g1xnLz58hgip21ersEHR5ySSnH6Tc5mc5QZDV24SL9kwTvQZwicYCeaq166v8GSAgJw",
  "key6": "3TrY5QZ1Pp8n5vaasWCzeuKdttXwaARBECj9yrgNTVWXJ175QY95yQsDnkshKVrz5e2LR1obvbGkt5zLND1aWmyn",
  "key7": "nPZXFPfjJzF1zW9LvTHEza5vW6wLnPUK31y66ibXuRAbTRGeex3a89qG5sQSkNJqzs6qUaZCF7u92bEGLSyfCv3",
  "key8": "3N4roiNTrxwtu8jNrzYY25s5mEi6APzngURjP4qfZpd1eDLT6Yc1HH2qAnG79mju4JWhC2U7ocsCWQAaYUHxdKrv",
  "key9": "4DUCUE46fSetyYQNx4HE3nxChLVqkS4WqGs69gwTbN6K44taGEqgPUyHB1A7MjaWCnnwr44ujmhtCAHt14FwT3oS",
  "key10": "39Zqq9DxrdRvnGz1WfenE2yJhCPCd1rju3RNKfeyWK4ENvLjyCSDttgySsPrvMwjsL9yC2wt6HXam31im8pAEZRi",
  "key11": "23MhKPfpVtyaaDeYW36Jt3DVfjpsK8EFfgR9t9gSgwM47MobC1MDUDzeYfDb5EFhRR1QNEBvPgXQqJvCBjvaG9Fa",
  "key12": "2NMj5BumwRaWzzjKPeYE4FuAjsEz53AkELpnfCPGKNo9cQHgrgSkFBtabjeSNghH6WNjtBim4ZnSDj6fVdYHu2L4",
  "key13": "49dtFjsrnq16FH3GsLBjEnyThkZNicD9rRQrxCHmKf2mbDJg4uZybbGAt8Lc6EaPWMNwzQZRYtdG3EYyhtKuhUg9",
  "key14": "Tks8pUq86w3dTGXTf8EC43FrL3dPR71hrV3Wp3opxzWAjJu9rnFBbaAXDJaTubFHYf2tqmpgxZ4J4sPkdinUvrL",
  "key15": "nm8UbbFkVhZAsYcJ8Y3e5aV3mGfViFPom8B9eZCPyYDSvxRHdprJu5hy4GEV9dAwojbmHKjuAGL2Vnrt9tmEtZe",
  "key16": "5yd5Bneq5g8i3NVixpdn2sqwUmjbjnBGsC4ygfRYRY5z9AHxcEWRnsrDHokc8cDMuFQ2JShtFvBDzNqSwT4ACG1f",
  "key17": "2CG4c5rF1dtt2KbWTkqmntPzuP2Emr1895hYhPpDfqj3cwCKHQvMRHwaPKcWmzyNxkRkrtu97QWicK4qLPiyNuE6",
  "key18": "5g93c5uAhGuwDjueE8W2XD8kYYn3pspGuWGZYJ19dNzHonUVtn3LCRTmdKcJAZCm6hFAhH8QFJJs3g7Xw8LTMcdr",
  "key19": "WriR44VSrdwkJeC1bY1QmDa3NG9CLY4qqfYg7HiZy77TKpsqdoKoDh4zfTkeFkrsDzdduDMgf6gAfGkzjMix3B9",
  "key20": "4CgQaMtqxoyMf5PAaygQhL5oEyQEVPLkk5bHBCzEAnHmRJ9ZtAwtQ9GxxKL4UrgJupxN675fRrTvD9sH1TKGHCP8",
  "key21": "2k8DcC8yxVnfsujN5cSxA4UZ3pgAfAWtwHSKxmZ7eoKvoBrGu7asMuzRMf7wiUNRZ56twMCK9kyERHqYGciH9kb9",
  "key22": "2NnXR1jTBne6vZn7buYRDNYggtg5KTWyGYDETtpsmXoJzhThUzn97MxcTdVGa4K9Doi1ZCWGkTvugQ7qi91j49Sn",
  "key23": "66bnx3pj1fJRc8fzJM8KDfq35eDjEBAmvG5JHHmktqv2oCB9CqBsagEf8fBNmxBvZEVYzjrQWh57E8W3AyDyzKY8",
  "key24": "45jUxa2AwpZZN1a7GEUngnQZNsttkEMnU863AesKfTTQ7om4KZnjP7xWPKEKjEQ85EMy1xPNZmvsqchVjuLfEtKV",
  "key25": "4qovDrmy57emxVy67aDRN5GCvixw8Wqz1gCxvAsb2immLJNxxk5pUC2PzN1QVujvdQyhvzp1duGykzK3MLxFDiYp",
  "key26": "3MmP2mR3j7UwR8aZ2Cc6c5mWbcT3iEkhmqGckpBzX5z5mYrqMhBraiAaUXHSrGMNHYftQf2A9iyzsffdrFXfkJBp",
  "key27": "3eeud9WkWeFdK657JLQCNDpCqo9x6e2sdJsJFykXyxvQup2jkp7vDecbs73Xxj2AYC33d6FMLtkQHkcea1fDPk4f",
  "key28": "HdoqsAzRmwv95W18Ha51wRKwjK6BoJjhupU4oiw7iFFn6jZ1fbFj7asF54d6TqA22YoDKPUWJa4VNZtkNCmXm1k",
  "key29": "4x3TqgpViQ5ErMFMpf4crCeyfYsgaU7APCLVhKXdxpqPtqCYjpNrZQZBSdct1VErCmq8qaCfNKzV6SCW5js2vmps",
  "key30": "4ZHfPUkpVqpLBb14cY8URHXiEFGLd7bJcDGa3f1cKoku1kufuAqEcvzyovmPtGAzq4tZtCWpakTJsU849aY5zU7q",
  "key31": "1ZsRhxsWtmUPCmN1fpgyZGQANuy9gA8qYL3ZvGeM6kuAfopaMky8UXneaY9jM727Qs4EoXUyP28UXADc5fMqYKz",
  "key32": "3CMbVhk6nigKkd4NNxZ3479x9z6UL6YVsmhryGAikgEGjMiDf7JDKGET1mJPYcodYH2qPsewbWtKWVi8BtVkZV11",
  "key33": "29ybyZgWiSSmpsQ484ygBtWMvrZTHaVpMb3sPrjsVLr7q53YimfwQhRPNa57ttuLXPuX2mPkkrsPTpj4ZLKr12A8",
  "key34": "3MmrT6MNxEa6HHrzgdvCmr6DBFvK5ikbgHLAs677ZiiskTrcokxRaCexc5jqKvBAzfWSURFz1gaL7FucieH3mMRF",
  "key35": "5fQsTLrRksnF6G3JrNHheeqS3CiJCbSKE4SzboPCxpU8Vh5vS9SQo6S9zGZWjaaUy3m3D6bKFwzJvnd1QnJzsKKg",
  "key36": "22CRcSdxCQnFj5kXCKWiUPEc8vtUAm1o2Cz9WvbZKcRahXaesRtasKFQcbB2gRBZJdTseQjgF8ZMP9xaYNTXaoXm",
  "key37": "4bNMjcWWVyRRsJkKhqytkrv9xYUjASx6Y6KWc9VLqaxmq8EhxxNv9tqxW9v99Nt9UWAMBGhaLkwNceCxKnwdGsb1",
  "key38": "59591t1WxH1DedqDJ4oR7eRWK8UucGwZYupgfuPDgW7HwDY6i8pUuoSW7KYCSoR2Br1jhmLNJuRWdmiY3gaNomcr",
  "key39": "4pzppNva2osy4We5PxnGvMe6xPMbZdsBMwmBGrjNmc8B8aJyCHhMp38tBUGHDPW6LeEL7E1RxfjLyrotkymR3ybo",
  "key40": "58Dtd1y9d6PVv4vS61C5QHZ3wjiBYzN8BvgnwyQ3cNEAKSjF2WZPcVv2LpWG1vMiFQ4nRR8DK5xB7YCvQ34jrWpL",
  "key41": "2ewLyxnREPUPNP1FYQbQviEBqgqQaphVjAvXm6iMUnkrpF4ZSszfxYRtUNC8W7Fg6FC8hGCJPkFyT4q2jmgaCLDe",
  "key42": "4EAUTzA8uaKm7FRnw4AnsyLR1B7WbWG2hfpgvEhoeQ2FnTmqedtLKerXBo72JXGaKkQyvBjNS1YLL5VtarHGLP9j",
  "key43": "3htY2fvKdxzr1vwSFJ4LRmjXtirWsTA6h3KMuCrgRaHdH1BP3NQHhqWANLodj1VaqMhe4hfQmsnwR1CBoadngQ52",
  "key44": "RpbrLFuAwK2n2yAgXj8PGugmBNFa91ZaojKndSF9QNvEFhez5U1MxuaRV5HweDNARj7ePSkyVSVTZRsS8PLfBPH",
  "key45": "5aX9BcaUDpY7PuYXoY7UBVwFuzvfE5kWXGvXSAouxoB62VDw5tV9DugSKH6AQ4NGdCyQ17rzTZLym7SHA9i97fSv",
  "key46": "3Lq3hP6Jvo2yGD51Tm8kZTv2xrHUNM1pcL6xG7pw38P5zjADyFXvihEyxdZALwnzgy2E2gpkgG82ES5KJBe1GLjy",
  "key47": "3StVPTDhahJ1phtCV5ybT3FdhGPorYmyV3oFgDVdwGd1vcvTkBzSNjiyJT5JQgmbXRYzdkqM15iobAstpNU1XPTi",
  "key48": "4hsBHFACjRYtpRk6qf4BMDrw4uMKLdh2RmsstDZKmYTN64nq6ZR19muijY5rWHXoiM9mJeWLdhgpA5QCr5HNimsh"
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
