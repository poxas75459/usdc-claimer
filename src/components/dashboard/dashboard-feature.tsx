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
    "2ZtUVqsUhCDfxskmCX8bQeoxqWCPawoHngJPaGL8fNFzzEQDUMuCZ4Bqtyh1DXPsSHBCjsDJ6TFU36vBuzu4Gy9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3487URRg6rFei5RBSpE4GaHYB1gtg4H2ECmSHhp4o8rSZekWQSrqbi5kYxHQMXhCs29WK9vJUw9Shb3pHxLmkjA2",
  "key1": "26sSKsAuxAy4SmJFBMnJ4aAmDfsMj1HvrJSvLaPdCeeSXDtX2FqM4H8Pxch4Z3NbqaPaoyB18rv4rk2DmS5gMwWX",
  "key2": "4a1mSukhbUhkN4bBHS2qVo6ErNaAB9pw8NontTCCoTLAgGE68ifxPgP3wTAfmFFqUfJHBxdpUru4uNskpMEvHfms",
  "key3": "2XD1HnQYSqSP9Qs82u6RLRBGWLp5SQ7VHdoYXN1s2TG8wsBikSqZDMpc5dJDateY8NaKSRMqYDCBsgWTxKDngV14",
  "key4": "4p5KF58xZhoVg2RBFVF6HLg9FENGAojNzJNHu52e32FyP55tV1wCG2VWrDrMnmASAYUeDyQkRaxaEy1TqU1PU97h",
  "key5": "3ZRjouopUpXzL4jNG2TgHRvFDD571esCVJpfNT22pBjsaCBwzCGny7fpi2RD961YRoUFUJLbQtZpqVwtM31ymiAQ",
  "key6": "4uCxtApTHiJ3uZGaGUGyNKNt5hxZ33gsECcuv2nyaLGsWdrTCjMcWUAk2zPsGX2RqzMBqbEnUSHSb5Xm3u3bgFjT",
  "key7": "1cZecASfkQzg8MEu22aHkZ4jhjNSbazdFk4QrcwRNMi2ztgopmRstaaGK2dKsZ5w5hrhZ3GoT2CPvuc8TLmi87k",
  "key8": "3L6QCfirKWeiwKf95nJRK27whjPLcCJ55LGN5MHtQEmNYeygzUGdizhePseHA4QUydfGidUmx29468CwvLewhzbC",
  "key9": "gnkG9a9BC65PoNgjT1oWz8Tm2WPhdZB9YeFx9HnwNYVEs5bnXJUPgTw9omVYdoaHNwX7WoTtJVKZSwpVpyyteFK",
  "key10": "iNH5op7p6Tqk1BGbgmAoNzwAd3MmoxESLMbGriCdHsD8Zu18BgfyWkwsE9KjtbpMmrAy2TZuzME734kKghngK2u",
  "key11": "SeLBtoa8hngGo1xtaZk5n8GguVJHP2nMWaVYhVVM2zHiexSCMytU3cSAsAoSkwbLURD68ML9Gac82KRhU8iRKGK",
  "key12": "2xmtNA7bd3sZPFNh6xUJVbmyev7nCRtia2R1tNBVfQjQU3DFt1XRfyfboT7fKAmMdj3Awa6wfuiaXTeo1vjYvDbM",
  "key13": "gToG6yPU7uyt6iusMkEp12xUXCF7bnc1CTuHnQCAgTy16pMKeo3fkCnx9mrzVLnRYMPjsoho4Me4ZLkabMJEJCL",
  "key14": "3Yb3y8cz9vD3DGDpvgXk6ej7D8iv97NVdpEKVhNATJ4rxiG62QU56StMarkoAPpzXyGLvfw7awBDvWqP1L7Q22nf",
  "key15": "4B5U9xzZ5y5ZzsDECYbGcaL6unbxiCPQr432Funv2wreapM9dMDe3cfnhFLQVuVjpzL1x8bLwNxQzkuJk24ALPWy",
  "key16": "EV8ii4GYPXF3ZmZsjjL2EmcaHNEoBFFHx8KZRCJsLE92W2A7aoDHuoK4yBw6qkbSwMuBvo2pbchFK2tX7CdnqJi",
  "key17": "4VPWYwKPvxRTnm4bS3G3vYjwpuv3XnGKr2mjSrWjPGZ9EwJWas9TRRfWp3mCxbmvtAYS3W34h5rYtUvWFrpyyC2Y",
  "key18": "2ddtdjoUVYpBbVszwUUS7KFfGcnMfCsvg6sipATAEpd6q6QZXFfZJGuCrtvVT3UNEyHJVB1tfTUvrnC3a6piHcz4",
  "key19": "2ro3ozThF94DzLSRyQZMs73HEwav3SsR3BjLKFM1GMC1VDF9hGymDtuY7FWW8iSdaFYyCZsd5ddptVaCPD4XvAhp",
  "key20": "4wB1FSAsXF2pwJCpNpHkV3sFY1j8oeMV9hSEtpPc7cAzqu7o9qUBwFiH18gjUiDheT7sWASbqEwLw4QXCSUAbS7Q",
  "key21": "TsKXqN56ZV9Q9FupspHjV4jSxg64d6Cq5XUFQFYui8Ttc5qGbX8a48H3v96rJefKspmyr7ScKebG5pVcef5i4Gm",
  "key22": "2CdPJWbSnPLJg1y8FV43BJq9RjVV6NsEVcLrEy9XKGYX9439hzm7JAfd7oNqP1SAH4wd9niQNPhM2njX213Hge6X",
  "key23": "5dcm9dKXXKW2wz29zgTjPTLsehKGgrcacfq8J6oPWaqtRNBA7Xuq1SjsuCMLomAodqfimxu1jEDwJa1N2vwd3Abi",
  "key24": "4RKqjUPpSZQrpNEQy8rB5pTbWmC8HufHN4wBoRT6v4RjSahk5DpomgKjodXXkVRnfwzTUwfoKbyj18jobodch75F",
  "key25": "3YS3ZoQtZpQm6LUWf8MG1Rbfn2vhuyUZp3t3xsbD8U2riUUf6GvqWMaHAtAZYYaqXmkUnEmTmcAsU1TEhURjQiht",
  "key26": "5iqGYt4J5QcESjW21AxmVo4nyc6jx8frQVQQ1UGo8gQYXriKEsYNDk6GvTXLe5meD5zm2QsGicxGYsQ4upFMe5i3",
  "key27": "jhYPNEdEk2Jfge6WJfTevZL4y8pRHKn9kT8nbfwcetARg8fpK7yhfEPRFXFCjEWH4FEpczUjVfxU61ymAKvnvGY",
  "key28": "5HPTK31Mm7vTzPgxMbGsZ5ctCaxGjJrvyJUMSjG6RS11kMApoRPMUYqZuspgxGb5EovtaxCJN5Unk2ayAq22oS3h",
  "key29": "n9kvkCYpEH3rWwia7znPcYxa4gqomtgpggT68VpziaHC5vPULSRBcBgEwHUbBucfkb1XUv6D6qz25EdNETFZrWb",
  "key30": "2D6rvAsfR3vtHX8Ba9256dhEZ2KhtADVzu81PLJDFaKA2PXeZd4G91q74mxbfwPswrLCqW594SGNLT4jUXxPspEk",
  "key31": "37qw2r23pdW8a1S1xmoYsFxfVHvfZM5zieCMJbfEtSas1bEj5aYyQDLeRKyZdu2i3S3cEJEBQfeh35dcBi63nJio",
  "key32": "QpiiLQSfohivcMw3HwHeYuYxYU1HdyVDAWcxXEnLKwm4xkb4DsDPE28UxFxWLNRQhDN2UfcqswjY438Wq5HdEor",
  "key33": "4BNtuawnzvWF2cYjGzGWN3hzkm9dpkVvd1WNTTjsxr6kxtPbhizh8uQjYLt7qVtV34QumFFyUL1F44gSNTbe4AdH",
  "key34": "2wdMh1Fm7GAANRK7QVx4aYjnTB84WUQiLpUTfTSASWyvEJbJ5RiZkWmzZKDovq68s6722nkUTnfY4XFtqYCzJbhb",
  "key35": "42kiSei3kB6sVSakvqjTZszqQCH5vePQWuSHmDHQM9bRM5hrbwqpCFZHDPaXki1QYw1DaXzTWgSKd1sWEoh9B6wN",
  "key36": "3ZUBypCwAfGXvEWaTF6QsFHyoG5pHUgELSd5daxik4fVyEgWKoM17RwoaYYgBt15XSvey5v4RxrP7GHFrksCNNdy",
  "key37": "5fLSt7WaNyKndgFoNasMbeeD6CNNWDSqbwyqoFikdDhMRL48yuhjgwQyTpxdmJob35yDUutQkFUBHrQidyRQp2zB",
  "key38": "o9SWi1HHD1MMHtT4cKoXFjmKdvG7APPFQH63x8oowQeTYwfQ6zvChGdCgsVkTLkKMXj7hT6Btb7UUbVBCzQfGSS",
  "key39": "eSHCVygRAREHmUCex56GgcbyLQk1GBTmPSc5KC6j8bN6StUFszVV3wTYMrL4GMG2eNQwLnMjkJcAgt7jLMUQ6rv",
  "key40": "2DA1RYWwTgfKNnnQdUiRZbTuwsC5th4FYtsC8QhaNNfqxhJDL2QpMkMqK6jmJUteyWMDeGBvzPzh43LqtkXhNv5d",
  "key41": "PMuqUW5CypweoZuwNDSe1mJmch2MViYEVMLn6oQDhLCt3WPWQ56aFT9c1m7AXiqYVJ4PzKpnCSJTjN1bJh21cJ1"
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
