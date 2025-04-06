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
    "28QdqikNZfqtEyKQrh8khfzLYHWqRM557ibbQxaupUzZSVxckvZaM5pYB4v38DKQJVuRHy3NhUUM7qosCh1tYPkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AN4auiE5t5U6S4fw38a7xevJD9kRBVCc3HeBzzmcYJPHFXKYj3z4PWZEHtWiacJscfr1dTx7QGJVU2vpRbkExjb",
  "key1": "57fNSaXLbyPaKrUYUS4tUnHrgDPtvQqRkBjT2cAQhwBzDVuf3X9tFb38eqX78LwsAQMf23W13ood4kRnFZDsqH4x",
  "key2": "5JgrDf8FWymbQL5Sq8y5GyTE4Tmfz5y8Pnam8Wy4wCYXyp8cQiRX92smNafEvhzxR8XNXcDMcNLrG3MvaHu6xA9S",
  "key3": "4yxTps8bY7CMHF8sK9Jsm1i7NxuMZLzugoZrC1JdJ3qDM6WBb5BDC9yskvVM3BXM56NanFd61VTrVEdoKNwiSsvs",
  "key4": "4kaspnTEY6C67BAoCdT1XD85Ta2e6RRxKkT75JYDRAHXtsjMai2C91WM3fv5Wx9bHudCCRArjQHSKRZx9vogN9e5",
  "key5": "52D3xVrPTvGBUatgZG7Tue5C7a6DMZ5ZMwXdtTtK4hLRot39cQchWnU3DFZQKcUsRurhUM7mKJh4xHfnHiiVgW6Q",
  "key6": "4ccmxesNquBr5vKdVh6TwBaoDMkMgCNrGnHTrMvqDk841XXeB7AWdGjf2ScevUTwDsnnpLCNvnLTxp4Vamh67yQL",
  "key7": "kkmTL99g8VRGAfrZxmZcAJqeDR1wLSaqPbJx9prTtwiz5fB52fsYi5af4tBPBRZpUgdgDpQtikv4bjs4X1Tr3Zw",
  "key8": "2pzy16QFoQsfL6ax4qZifFUuzaWEEweezmd3uCTE8veHQDUYKQkq9A5pLYsJvvtNqQikRXjmGZBuRVjvzSytYVnA",
  "key9": "5GST75KanfwphURvX9SGmDZoALSRSrDQgc1ayuNFvhuU2HU9HKJQwNKhWKXeWQXRdWpnduLXtewzKaXbUgr7YtEj",
  "key10": "4qrtbq5XBV1rR629k1rEp7Yts7XHa1hJNfrboMEosnxBdfGxTomzZrc6A2kyKNazTVqWhVqi8Mv6qRLs8y4echtB",
  "key11": "2rLh1b4BygbBsd3q4evrrd1qpqFDpvGgT9V1rCqRkfLWp1XG14dh7g2SW2Tp397e8LDFnS9KrxSC4VPBvDX16rMA",
  "key12": "5xus8AN3Nyw9kkXfawya7MwBes3Zxq5e8bCimz5FBpTkEmZJz1xWQpZ4ZfvPX289LA8sRfrhJ6jjHYg28xs7HKFW",
  "key13": "4RrnyyAVPjdw6LZoi2rLooF645PtHAQi57Zh6nxFkkVoVngJqYPGfC6JK9NdSmUvAk7EfHpVxY2bLcwYzYn71QeZ",
  "key14": "3Bd8nyCvuC4eTSzpR3XTxtaZDuqiQqnTnTDzv7k1VJatvMSqt6UPEiVnV5W1ovucrTH2uK2xxkQQykcTXcKBP2QL",
  "key15": "3FXYHsYCVXX8X79xwroyvBtPSQtMeZxf3E1xghPTajkYgZmzTo33VKw2moYuwWbCUf3kYFGpyAhUcvKzCtXNz9Sg",
  "key16": "5JPKs4Qm9iboM7U3oz71aKJiKnCJ1kBxtce85rMhaSmT33yxGcJYPvg9owiRLjyPdCMDbCUbuw3iJcZjLqeaT5W2",
  "key17": "jGv2JyRT1fVe7tD6EGNG92BTqrLWYUb3txjbfxqZh3i5LRJf4tbZYHj8YyHasrRMukPEGJWy8wHNQAK4NhX1qPm",
  "key18": "fMgM6yvyaV28mUdzVtvE7om5CKNuCvZm22ibYLAUmrs69Pw2UwcsUm7mJYcsAP1Kb3uAwYgP8BJndsgxidLMapC",
  "key19": "2gjYsdBkWD6zMiA2CPgvwZ326BgUKjTLCYDshknH7Vs8JRnrFNyDxh9VsmSQtNrm4or7wNaAj7YGzdRnGy8E2Z3M",
  "key20": "5rDznf1VoRtTBrWAN6vsLtyV4E139CAFmaJ9T4rPbX2DLsGNaTEizdbxPDy5Cx6QdQ3pwoZpgyCQXiA61xz8pEjx",
  "key21": "5q5m7JbxnCuKBMs2nDaF2uN4ihSNK7AQGQvKpw6kQV74nGyD6TCfaAftAwLcPqAmm6mvutsFPu9MzCHD472ymasW",
  "key22": "2u24g7Z6kyQ1QppTxwNtbrVRr2ewacLdPRzdeVdgtPD1GBYGCQUS2cd5VccYAsShphv63TWWwng81C9XExDQig18",
  "key23": "62P34ZrHKN5GizFdUWFaQNzGjcK2CDNM92uo9f1QEuisHUeDj7NVf2mU6x1z2Ekz2PRxuq3i7qvD3UengE2Ds1fe",
  "key24": "2VFKfEfqF4XdUb1fFysvtoZrPwhTt1ok3mrHtHT9fGQcYaocjVppbm3v8X3kiyBHvrj5S3XhDrqXtrQ4K3NVDdDE",
  "key25": "4pSoZZaer8f7zjWDEZh9zRh1v1Vv56yc9VrSKT5yipSh1yhXP9RXx1qPTqUHbmoBMXEemWxJx2k3JG15GVdLrLwu",
  "key26": "3dX2czdGYuqrFYuXqAYM7W6FNWkwq4cnS6HA6oJcHs4EppKuGsxZ6mSHBNHVKzacpBSLSSwLWmSVwZYFozaABJMg",
  "key27": "wxsdK1Qcm2S8DK9AdEdcfoXSDbfLKiXsBsTqfLcC8mtgzsz5heUU8pE2N2xM58h6TPNL32LtHrJ7z764Z2VSxFA",
  "key28": "3dRHYZ4p8wUCaysmBPPzG7Bi1z4dCeEBbyHhtTUpgyVnuwLgxWbmRENsQchYoKDESDL6uKBNJ8wo7mrDK7fkfAPz",
  "key29": "4PDkRcJwMd2JGA9tyztYeQLUJemfm47LayHmFzn7pZ65QW4Tb4r1ME1caecde6aQCfypo8BXzf6hnFBm75dCkbc4",
  "key30": "KSY353pau6vcrBPR1NtbGRtyxXNXebr3WbGNjivS4jxfY6aAxeJqk5FJuK2kyoZMXSqp6TSa2PVaKsQXNenwPn8",
  "key31": "ZnSpSNarA8FQZuYmV96ByWruAuYeuBpLAJ7osk6LZuLJeRm8UHAZAGHrgvRrKo43M8zM8MERTfmFJbKT4kxd4JK",
  "key32": "44j3393jSH88Kd1JWPQnqrXTLHX2MaZSffmmxyQ4N6QTHsTMJd5MwQWnhVc9UNGG5iDH8SZMU9Qyq3BhHuRojyCg",
  "key33": "5QVuYExrCPyKzjbwjCxS1wP92JyJK49qLAVZBYJHx3DwVTpb9yTqyGA1dRmVAnW63kbGP5Ek6AHUMbu7JLduXSDA",
  "key34": "3pFj7n9gtQQwDvddfr3zH69EEPxKmBxkMEHjEUqXe1JYpfox94L9td92WBZU3GL7B81CwaptmBuUnwLnF4dS3sPF",
  "key35": "cXqiL7Uh1gjFKQfP3gYHs7RGzm1YAPF3ixWs1GBpFU9pBmnP4QrPwvoRp5hCc2MoyxkExbM2wS7RhcERVPwjnAm",
  "key36": "5WAnqAcQSxPDHzsRx2c26y1BVpPfNpLpRhzUbdPYNUBeCu2ngjhKB2rzRTFzuRGfKRSFYmXS3yTDiFSQV97Xb3Jy",
  "key37": "5PtbvcJM1AHVmfBtCY46mShbsrsMSM3QijeQHx2nR1FbAvj3FPz3aw8vdzL9f7rxQ7LYHhpxAnmbv3JDCq7bb696",
  "key38": "4avhFNhQ9A4fSWAtEkqM1eyVeBz2W2dsGBDyxRFYPy2PfZkYXzZqee7Vr2SzpNN5yT2DrewsLuM7eRsNvberuMKg",
  "key39": "yWDkT9LYx6EDucp53GKizhPyWQxxHcQkJTL31SBBxQuNBs6KCs7PyWxTxK4mA55FjCWpnjGG3MRf6AY1cfkd4L6",
  "key40": "5GiLKZL3gWa8ZxhdvQxdezSrdAtRrry1TiErgMGchEHVMhMLKMieDhGWSskVJ8pJGo64Z8PXERn4bF6JDn4eWNu6",
  "key41": "5Ttkz4FKkn1RV6wNR8CGG4ipamQBYzuwZMzAU2vnnbtMrbKD87CwPx2qMw4pF8XC7SYX39usBHDUNjvhSJCLkoWq",
  "key42": "2p4SxrjBcgxehemeqKSBuvVTgX2B2s5XMXpKoBZMZZSN3FQsjH7kA2vKnBNUdpLyuUZQhQe4jLo8A1qSGMvYqFz",
  "key43": "3iUzVqWXo2vGocfavBGYBXFCBGeeCh4XduM21bXmwPUtnXDB5g3KtjA5M8cDjS92hMs4VqFsaEfsWeCMSuA7FMUP"
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
