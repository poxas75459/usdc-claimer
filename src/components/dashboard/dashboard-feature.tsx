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
    "4hcadB5EamtFWydwah5X1qQgfaDoqjkP1Z9idKwPNY6GtECQ7WoYqXjTeit7tGvx91foALeEowkXDfkBEEKfEHFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAwXz3mLftZvdq9Ft72esNm9DfWDSohoDNH269GD8YkpuNg4nQeU8V5L8DBLeeCbhr6wjSbcThQouySstr5VGPK",
  "key1": "5gRvhExJnbAmSMTgtvHcxCkcmnn1WVCmhz4PjE4SJTtSvrPyS7ET7CayB23BCZ7j38Twc4dtjiMF8odzib8Le4dh",
  "key2": "4x2ueSLd6DPPeZk4ttFEM34wCBVWTLBDZcKN3rHcHdPU4YYgrANnTExQFkr1fU3U9N56cmp6YaUb1v5R1sY38p3t",
  "key3": "52MmaRAMrTfCBAq5xEqtCQSmHget867f8LLBzxAtfU3CCZAyawdekcW8DgD6xjxdTQ4HN3FNgELexmmHgwDd5RUA",
  "key4": "w9qcFcV8qrQwzp4H7xGuREp33CHMEXR8eCue2tcWJPsAa629upofAiXw2oExoCuL8Yxpx3w7cKx4JdJmuF3KbJW",
  "key5": "2oDN9gzYVJVEQhjFDZYavkhJAhDRtq4WuYp1bdNhUj5DGWtFLWXmStSFnhYabPp8WpF4USALvZXP7uB51Pq3pSNP",
  "key6": "3pm9xdDZeJE17Vw1ZSehJTiNG3yDZqhe9YHWDEjzaTFGGEd2ttAUzRVAxpi5b9ZEXyhW9bKbzJPeXepKk2qPNsWs",
  "key7": "2d7PKAdquniev3wNa3gZrm3aTHJMhBgJ23sCmXQZcKNTDeSdTWHSrDWhtLBaoiYdHgZc6AiXw9cvfb3QKMr3VuSu",
  "key8": "3Mo1e8eH4x4G7oTMSDcmheo4QZ2nMeSzqageKpwzKnELeK41hVaqSiZEn9EwNK5PSsvd2DV4ZaXpCLC6k98XiMyW",
  "key9": "R5uWEaV8eRg2atDKG9q4tEx38zBCRe5baScE1GUZHAitGw1qQ6DRhc6YrxvM7qNTsTZ5o5bEhmfag2ZazfzF7to",
  "key10": "4RihgBdb3J7Kx7zT5rkTCgpPoZDCwAqob21PEFzic8V2QfPoroZWMmeqdNpyHNjiqyVM6cpx5EAGNRBCPysPuczL",
  "key11": "3P9jSydMrVcgnfPbLhgwj4p9vzxxeBAYFUpTztskGy7Ph9M3PsZU3MZxSLTp4AdK948bBPU8uL8vxoD7vxPrHgv4",
  "key12": "2Q4UZgiKuqcTUAWMBH3La6S11PfqUinAyGMGXS6UvZxcXVn75rGx4zfbHUHLatLowncn5yNEaNprbq1tX1VucrSD",
  "key13": "3DKZxVUMnDtRYL9LTU4ZErQ31yUubG3kXQnNSPkLuCCmTSjjTu4JpvBVrsTmgpHqpcRSfm3tJBYAiuJ2TA3CjF67",
  "key14": "2JQdzURnXSqa5b3p8TRZWBpQiivGxRXcSc8V24Jp7FjmqEKvyXrDvpcmxTvZZEYv36EMPEtYaTM1DvAe3gZpp99C",
  "key15": "2rpoHaza4FguaNDXXMSJyGiYnWKsh4iqq9ZpXsWVP3mARM35EW5J63UbrsgePc8FQdbPX9QiU1BhNpZKutrrjXgq",
  "key16": "56MC4SbQVKcefK7Qut2Gvbowb1AJxEsu3TfxXXN52vSVUDS9XopNQxQJbuNavTL8DcsKYN6swobkseA8KPf7CpV5",
  "key17": "16MFngZoqV4jgmi4r7pfTTz9JD4FA3ApMxrysJ87y1GKG5vbNKxZ4DV8j4Afaepg4yWQJBNceYjXbEEUZnPN5vJ",
  "key18": "4rMkxVzkouR3MrSh7Wzzj16R8EXj7HyPRo2Mam552Cn7xUQz79aA6ps8NsAP5Uoec7hPQR5rn24NYVxH6FW3UmKC",
  "key19": "4M7N3dXHim7oyymmdLSKkNDb86hhcUtcouQgRZNyJHvwhUZwNM1ep46DZnU96sC6yLLexFwpJeVcdUPCscKwPWCN",
  "key20": "5snmj8mvKMRRD1BYRe6Jvig9w8j2PSFWpkNis1Vsdax1RoSFUMbSA6f6AEXnZ2Fe9No739gCYEHAHJZ7Qrv4PCVk",
  "key21": "4w5kUmRmUENLzbCkHKtkbHuxG2RvALZ5tV3u9aWm7yKNiZ5JAXyKbu5oDMb4Vw9SberxVtJxFkUxyqDZ8qwcq41A",
  "key22": "63coL2EsxXuMrqFWq1zKRqkboE59q3EnZC7DNXPN2ZxX57JCaHkSMkEv4NUzyWzJKbzt2UoDUK38xLaZ5J1UVi1C",
  "key23": "48tzo2VSiqvXP1oGHPaRZLM2PpwkdWMrNT129ShQhKzf55G1WVCUu8vhbdwNARWHJyRsw4N9si9CLJKFzEj1Spo3",
  "key24": "3iFPs2n9KxykuqzFQtRgSsu9ASULebmDG7YtBvZQZFufdQoVHf1rhWTfWYqVqtqeGSu6fs3qcTotFUYMuUpbr6tp",
  "key25": "2JgTwAECKzT5eJ7N5iWYic3NbHdp3xhbWdyghCVzTPA4wzUQBtYWDV7MHo7FxLkBCtYL4XcogKpWbJVDv62czQL2",
  "key26": "3wZBESnMXYvDWBFfdTb8Gq6Hu1Sa9ujCz738XoeinHYqivkiJ9FukxXzYha4vaocQwo4LvdcwmdocS4bwbeeKkNQ",
  "key27": "4rd1W7i2Z4wh4QmyFcwzngZkdVnUWDQ2Q3sHGUovW4KQjMQfgsNsFbcFyjGUtXaqLCfQP6MhTKfbNot9wTARQXSi",
  "key28": "3uWVD4RaFaKbUxjRVyYfzvWVztv8DH1GjLWRs9zf1DHXbeGhaCkm3G9UFxLXCieYePtnf45Ha459rH1KWaNc4NND",
  "key29": "5SFkGhH1z2XUFzPiGPSpnbPRvkG6sUTAMagAooPbDfF4QFQdinHcuiShPQcCAeGVPq6C9fxX6KhxCApTwNb3SCai",
  "key30": "4PnVAPK6fmbnsRxJcKB4TVcvB6HhTH43gFiMJRZXtJWzvR6KpJWUTJCX1ARtp4F68CRPc1PkPY6srdWTwfr8NiDb",
  "key31": "3Yg92LAhD2ztVbxZ3AFHTjvLwizy9bKqoSdkgfMwDWBZjH4y53MejTdiRKc9Ri41Ager3wNHySgnuSC5G7kgN2Jv",
  "key32": "3LcenUoGsejZeUHq3C1dk3VVYrYuVZNDnzkeu11BiHmKJoGnfcJNBx7BUXifEWVyxSef13jH6phbd6s6VjtC93fb",
  "key33": "AUNtzFNJn8jSULvzPoLuESsC1B2ikEntzdawLvKLPUSa7nmhuHSnUCwjeKjz6FYeKYzrxLJsLXmNYqydVS6ZA8o",
  "key34": "3yEiJTvVC4PUTJoRUMqCFfWorSsPmH7ntH8esnELjVFWyEJ8vzSBy9vx39VqGJW37UBJsitmUM2zoHi23wHL4WmK",
  "key35": "W2QLesxDSagogDhwhL7vnsneM821oSLW7GGzRTzaUHKYAK12Gchcv3AV8QzXQhY6C2uNPgM7MU1GXzTkVAGw6y4",
  "key36": "3f32bNYHBL1WPvgvvH6phwfPpdgw45BZAk4D8qSX3TCb2YQ6duT7hgEuv57EtdQU9mcDhHyLMP6gMBg3a3aAr5tR",
  "key37": "31jbNFcnRyJCU8KiDhm4jybns5QagbV5hs6tdpdWxH1dawH7czYCx3jHs3tFExUdaix8HPfqaDUh7HYSiuL16APR",
  "key38": "SkDcrd9Euy56BrdKVTmTCHYKNub1Fjk7dKyFC25Zc4dDeLercQC6BszfsexcfyLPxoQwMeKRgnkVeqcHUmUK51Z",
  "key39": "5SutXgpBmYS7zYWism3vmy7Lc7aAtD6YLKQ9VBxJgGS5re45XXPKQ4sUkRgoYGxmBNarWXAsxJeQCXqqydUcCuJe",
  "key40": "5mALmNgNCbHLSBjTf3XS2RHREcYje3LJSEPS5bodBR11xPupvPDDQ6Hb6gCNTVVdnhj1cHa6oyzyGVsAZGVSaBBc",
  "key41": "2RQdL5HsmBEX5bCDfNXQoyg6MVX7JsBq3jFbZnBvPG7fsm2B4CGMGrnp1zovY3o4uamYpnLcZABDgytRpX84Sng7",
  "key42": "3vVvgJnBWg8LbKpydAr1cuPT7yvRRJSF6q8PCeW2XQBRvRx7pyfVkRYgUtWna9sSAcg5mNUv7GZMMwVdRHfFAXht",
  "key43": "3FTzKuZY68FnWhm3EoAgf61nuPCAM5xeMRHeKdSYhjQSFDw5P9Vzikd3WAq3mZAgpxRqCYJRYyGbfLSHgdjWZFQh",
  "key44": "TVMHMyWFVrrM3WLq86vVfY5LriqgpUeRDesMWsgS12Q9QkKYM2NDicd7PSWE1XCLfxayXLof2rBvbX2P2P2eTi7",
  "key45": "5RtHcfEUQ1sekKs7ntfvWwFeXs19mTc8SLLKovyVmoSQdPkaDbD3EFNazacDFGXY2t3sFWyScwAvb8fFs6pK424z",
  "key46": "UxpMsmS1XXHU1VipxLQdWc2LNeBnjEyzaA9tugxTCXYirGcBMi3QMBaymw6bmaiRqxJFBNimMu6ZBcNAYdGVWue",
  "key47": "5PBEmmbmX78D2pQFzBxYUtTrxPdjMC8UVmuxkVdfzAwqT35QJ7Fb6YPe3sqvfBkQy2HZf7oH9q2mRufV48t6iYXk",
  "key48": "2dRzBCpvXhmLeUbLJ8KiuwRQq56VcGzzVspsEV4XYvpw4ChzJak3s25QmqFqZANHUjb1zoA5dUsVa4kBTrkPncaw",
  "key49": "4nDY9AWZ9ALyRKPo2edtzZLRwVVeoFatsXAjR3KkRo8Rv7xZ3DdoS2SQ6JuwZ5ymj19WuQBjmbVHx8CykCUi3MN6"
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
