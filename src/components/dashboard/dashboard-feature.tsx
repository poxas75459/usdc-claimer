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
    "3BrJdq8ivK1BGJ9cFazqazcLkwrbpi5ewFgWWFXo6mkj4LpyQy7amqxuobTRCrz4q6wxr6c5ujSVswkyrniKbMb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkmmZqDNwRDP9U77g2oxvG5mBb6aPaZ7zZHE5vYtgEPdsh5wA2SxXb846KCgjja3HWLyX4rGF6u7vVDzpYuWgrF",
  "key1": "4obJJfCiLxmC1BE13DonZnhQXUyThy9QuDy1V5qkd3QaJmuSE2nX6bJEjbCK1KsAZgZWE3ZCvoe3gSfJ6q7C55XT",
  "key2": "4hotNq3PZfdavcmWA9qPM5h2afrUUwB4MqYU9u24kvEYK4A8AFReysB3KZjQnaCmNJKVXn7awyG7M4jNtAWRcBsR",
  "key3": "fR1CmXHwkGPwXa29S5HktMSRHnMufhUDWFHdGXbDNBMsaundfFfSef8vVwtYrK2gsuSpSimyfr7tgpPnMfhGViW",
  "key4": "4zAxNDgsrnBbLJBG6iyTDLkqPLLASow9PAsaTjs5VKjprtTVTeRne4jHajDk4o1bYzcqFwNXmc6cBjetijZzXq1p",
  "key5": "4xQvaBz9tniYUmkUjPjKsUf85SPADuFmqtt6JrnDuMFcyae2zzry2V6HXQq2uDpCV4uiX4hXUikP3bSVqoGo1W7N",
  "key6": "3qojawVCExm28GjKa4NZqiL7pMT98qPRwBVKo5cv9EvuMddxhMjwvmjNBbh3nNtYTX5oDAZkz4jhr1bXBDjuRfZ",
  "key7": "44RU5J5KdZtaZs3qqRrfkRFYCfa4aw71Y3MrpSoMhycyULwRFCHgDQ3HQSAAJakMbeJSF1E6PKJPz57C9yRodW5a",
  "key8": "9KAcvsDq8gvyE6qxJxUynBqw4MFQ34fZ2NBXcmR8CbC6czhMs8zRdxiZHWwxJbq9sGFa2Haya3nYh3Wy3doswRQ",
  "key9": "4uQ4hRge9kweGdHRtokiqtSkb3zPG2r8vjSrUD38tLwPNXgV3hWz24gCTQAQVtQjxq1U1nd582gVryt2ueRexF5p",
  "key10": "2xi5mfC2DBqEFKSJq2PFeVs3BqY9K9Xxm61bSv5UN25aGpM9ZH21WAnxDYA4MhZ6jFijHBw9Y3ek1Zr4cnSSTt3c",
  "key11": "2S2rcKqhv5oebUy1pPAe6cqEiPj2b2M2qiTnJoT6ZrgrWgoPiuFWi1uRLeGasvFoLuoUgnbhjzhZTcpg65YGSEkg",
  "key12": "3sdf6LjEby9beh4kGLuuaSx5cpjKJ9VAiAXHJoGQyoNSBtYwEDLHB2uESZD22gcwKFYiq2xoroKHeSa13gUjtqx1",
  "key13": "57U8WiNU5e4ogjzpH9DUJTSWSZRYUVnrj4FcVE2PEjatph5zx13WJn742VPKmGTXRuVTsy9YtBGz6i9sL2jaApvV",
  "key14": "5SEqVFShxdqTQXuokNZcaavDArBYtQxwb9B7X9BDrXuN31sgkenqgpo6E1bLcv7yCBhz1zC3vzvYQRFpFAt6bGC2",
  "key15": "RJa8t1Xod3RtJy4Mw1WCRx2BitiPYQYqFPsksiLB4fSjSegfDHfvzcjHDfDJhvmLHV2P7WUbnsSMiz7jWa14LMv",
  "key16": "4KhhdaSJMe1upR62E9YMRQGqViyggKL81yQVYr6j3WAfnuqdZRc88JdKNub5PkbAXyjkdAmzdLKTx6GHwRKhxCCH",
  "key17": "2VN9LKSLpNHBus4CvWmUHVgj36v7QNB1bNPpu3DPWbLx4eNpdd8QcrZPJiBYCs9ApogjmgKcWvMwhuXDcbC9WNP2",
  "key18": "4ydgifZHyGbeip9thtgxbUcn6bxAHQS3VjcemvgJCgjEtFirvgTx3zoSb6RFkMfo57ugf2g2RwSxzjCdMmvirFmz",
  "key19": "2mJESAPX7nWj5FwuS9Q2JSK64rzRvF4YcTLUqsVzK9ZQkhromSqToLaQrSztAgb8SeiXktyBd5V9Bwvd7CKsqyuF",
  "key20": "5AD1Fb4gsGznNxyUsdxwnuMPavtNKvmHU7R6mdxw9d4z2CKnrLDf3kr94HALfFwzS28Q1YaPaEBHigqEJxj8NDPi",
  "key21": "4fwmMZ1oUbnxtNsXAW4QTnNfq2pUPWt5FrxSpmHnoo15oEMhYC6u2JTNfynEdrBenr5TqXMFy1udLJMnPAovgiYX",
  "key22": "28yNtc1jUNLnDr6BtUhNQjgMVgmV4ykdZ5Z44Coz9gAryi8sgXLCLHbPJs7cozUf8AhcXP3bEY7z4YdLdPKEVELY",
  "key23": "D27CosvtARVvtsxxMHsHhViAvQGiTyESUzaDyqGiVTUa7XCCv3V6utsFaXgWhUfJBdxAPihnbtFpxbzZZhVta9r",
  "key24": "3xpZ2Sv2QPgNXDqasVS8kEh1DGuPD83y8LCyqKGoGZoxPPNQSQBJ3dR3wAxsXcCQz8duohu9NB41EJwiyGqhbdgi",
  "key25": "4xbcQq18nTiyQoCsJ4N2AvnzmtsnjBGSrAKRBc6NG1QKk8TrQFuJe5B3a8d9ccdAmmopjmJUfaQg5CPbn1e9A8V8",
  "key26": "4Z1h7EVkWPoDCeitLhL52cm49x77GLCHzqwex6mQuogW9Tpki1afLGgkk75z56As6Rqd56bXEEVXgajPaHrgZy3Q",
  "key27": "3jC4Z33sFg7NjTLqnK4fhEE8VBzgW9d4AX8hscayYdK6YZmGmSGdcofsoGDiMGfBfsNsG54jjpyLGTj1w8TZWf1d",
  "key28": "3B9qzYxfmUvRoZZqob3MaoWd8uVDHQ4XMqeC1HZe6zgD7aZWveUxKfkT2SiNuY1sXQakExMx4MsLJJA9EAcER8CT",
  "key29": "3UCDVng3mbvnAcsAqBg8sCA6KFsMUpsWbv3vzE3d77raBVbGTDDx9PzMaFbYX5vxUi2YpAKjYgdeMdVeSbVeErUx",
  "key30": "4GtT8TjmFUZG5mxWTwwvQ3c8UorKERpBwisMKrDEPEfkA8im2mowj3sGRmLEhfXu7cd8Vs9EkL9gYWRLWbQRuRSM",
  "key31": "4av3N4iPove3dLScrCoRriKiS4p4scz54ZhGmZPoeP95FPjAqaJeyt9wmq1dwY5GG57Ju5WuQ3Qoehdo8M5Vfsh4",
  "key32": "4pwHs7YW51UKCyfUbXoDiQMh4cZFSCRL2hFkBeUttLzHHSFMyTLfE2ZiRiSpRN2h4jcM78gZfXEwerUGBAnpcygq",
  "key33": "3yc1VAAN8VfKHE359feWp2ygHAuBRKsmPCeWo2hNbuqFQEx9GBxjJ2u13bZfrAKWciiScgiR2tKakkq9FQuVA8h9",
  "key34": "3UN8QPgUBDS1kVacSzdAteZv3NkVU4DzSWsrEFoe5P3AsYxtHfHyEwQsvHcQk2m5ykF5DBTPTi46oa4CsVFkZvuv",
  "key35": "66eukn5fwje7hZhn27Bw2zcbBe3jCeRXYD55nJzShDnBEMrTCNciQq3wowybdo3XNyUAqoP4rAV2zZKvwv4GRBNS",
  "key36": "JUx86X3PU939a8yGrhbCNjRzvfPi2z1n6YLMz9c12acurWLsAdvHsQdnzRic58Zgj35ak2e5xX346eyEfTaTSfd",
  "key37": "57S1m6Dz41T6gNGyEhi4m24foEA6rw6DCY6xuL7wyHKKrVsa65wTJy5WEd4d2xu1Eje8oAcyT5q8XKsmYQNv6SqA",
  "key38": "vHJx2v57EoJeZRyntZBTakEb6bYVdYQFtj5t4ykRE4RMPnxwWG89x2X4dJ651Uaws7HiKZjWuR8i8qpe788KfHM",
  "key39": "25g2uLcZdpg2PRaWNp78s9mnbEtqSghr4DPoynEETb2UhcJctymdB379ALzRzeps4WKGpnLthFSVmMHSn6A9raBN",
  "key40": "5Q47gbBLzyE6PumESMKT1e1EKcmPD9Kun6Fa1MXCLkRCExifGKLEiceqXKW1g1RWsMTa5ghSVyBnKaQFYGpj8xyM",
  "key41": "2PyYFiEEaZtE2d6KHdgr2jP8LHtB54XAkTSUHYZGJP1onrp9CMpyrwcPZQkXAA6kui8Q1yqgr18ciUzCwhMwBpaM",
  "key42": "4aAQcPedGQErguMZQLc2RqS4foboPSfq6hiSQ8CrvsLLXSsEwQPLzBtqFhTY96xczi1roCoc5TPrd3x9VrMZWdFA",
  "key43": "5pNarUm3MiAfBg8FNPnuPehex8GZbbtTZR9r8gTH1KTDFQqd61x3vXiyiRqDytPULvmG1TDjgurvCD6vZ29oSXvd",
  "key44": "2nWdzUsXmMqQgBG117F7yKNB9bTPr5tU4tUD3yNhGzrizQk88HtLmCHNr7FpuzFYra8GFjsRTh4jgstdPhzs867s",
  "key45": "44JCXvG3yrGLFeopNsXQ8qSnAzmSJvZkVvaxP32aawmXQUVyFG1Ss2a29d5BAvacyYfE9yaRdPXExReVwEdGnA8m",
  "key46": "3niUDUMu1z4B9t9qiUMzzz9S1jvYnhAbwhgBHgPRVatv4VgmovYdeKFaxpocnzXJ8LkHLhs1yBnTLDokx5v1EB7V",
  "key47": "2rsgXj9vvZgqGgmM2ch3Rk9vfT9ocVT12zpGRYWydGpTMz5HYHM1BSBY3GVpngAapVG3gyeAUJqRTD457H8TrNeL",
  "key48": "4LjaXcDi7FBbt5ZjKZZMaL5mfytPraVuVsVf6wqKUFUS1po1ZepQMQWMmKy4qefcePFdYdzMBXZT4bdJf2u6DWm3"
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
