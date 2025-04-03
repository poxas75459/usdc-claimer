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
    "3m3ecVMu8H1KcCXZsZDS3qb6muXhnZnWqyak49RgfSf24c5P7kFpQPEKyTRCbC2gZ2fuWnZCTBx7nazU7gCiKNYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbqJx8vf9MG16CUsknysxhMFeWEKt8gv5ZQBZ9LNyyNabsZ1en3UJA92akonrSgD569JqsixDVfatJNH8GmR5K1",
  "key1": "DZGMdN3Mw3xv8DTiKfjS4WAKYpsCeXFF5wvdHtYPDAixc2XrDAhgYDs9FHAUotXy6oQfQyz8VZdA4rU9HR2NTjR",
  "key2": "2SYwLH1XCgVgFPMW93r2Hr1KCm95SgJva5UeiSw7TPoWy1UdJmxkUYRpAsrJhRXLpKCkqGUY2LZaLdQcLuCxKtie",
  "key3": "3SRRzx9CZKjZc9UfxehiN5nA7W5yipxCoHxBf4mnf8qCyrggrdmNeuuwYRdeLfV5aaZa6nHQMWWs2M3HfD4Yxowt",
  "key4": "5vkTRSvtmVaLZVY8w41YjXJTgpdHLvWNVe3reYguvsopxCzfRSaphF9cnJhg835PfjiiuoJbp3d6vzAXEjuP5uDf",
  "key5": "ZhgdFS14LjVW7hVYBuRPX5NTrSaZqtgektxZnrhmukfWXemSy9MrssTVs6fHD1YcYENTDphU8PsDgyeDLNY7ZWo",
  "key6": "QPFtPifucmeP12KzNfbktfn7Z4WSSom2xRJxQodjHftKJGNKgrFBP3fwx8THZhNU22G1LnkHhBQhLhrMAPKrfoN",
  "key7": "44559whKKHdC2TCDMjBeYEAk77NRgMjQF4myvJSm2YBPmciTUxHGgcP61Dmqt8jQxM6xPq7Qs2jojc8ZVUsLHeRu",
  "key8": "KKuKfaWWehnKizYQYjFfRcUEdUQuqsuL4Wp5bFxGctR72mRbygsHLkn78cr4DjiTGvu2cX2k9mZ2mLK6e4pKsRM",
  "key9": "2wscP9GamH1nKVfMbPf7Am5ur1sYQSk5zN9985q2Z8HJUix2Y28ThDc8dZ6QeoDBn3uu2wLmwBjkjGJq1gj3GZp5",
  "key10": "3z1zze9YpC2AkQFrCeioLV3bgnic6VR5upCmKtGg4FajVZ9SpZyU4cj5vZeiCrAKSBXRV3pdvVVJvaSXwyFcsuou",
  "key11": "2KbaQRTztZif8xmeC4CHnB44zVQsyzeuPqSrB5Wh13TYUrZukpjMfKr39dSojKrFsjo413esipw3Cz31LZSFwbKv",
  "key12": "5cRmNAneeoEomhb6PLfKwEN3rMhvQBx9J3rWga9VDA6QKqMZJ9e64KpgdhrQQoZxYCw98e8dCNCzQCQ4vKX3yvXV",
  "key13": "66VqKDwK2vb3m3QD8T1fcx6mNAmRtm42cUAKzD266eLjtHbD6yCB9fPx2MCiKDDWBfnfBUfeKvDhJC4satmMRSwP",
  "key14": "3iqGuPh6kPdBXMhhxJrb3fD7bdFzUnW54DpHfW6guSd4h1bC7UmdJrkz8FVCgn62yVp5rv3sYip9BE65vhHxkRzG",
  "key15": "2QGFiHScBehPm35q66Qp4PytNPbFNEyqVDPLa5rtZUSQju717oJtCWJ73NJVtm4JpXrSuARNzMxBzCynxaHfDaRW",
  "key16": "4sL7FH4RHzoxzmdehVHf4StD8Ru5nroY2Ct48AymzF7vnPPHn5C87x2GiJztH4ZL2tujN6k9EqVnbb67ciALyUow",
  "key17": "2CgB2fk7GWtdiW3yRmohpavMFXrxxjm54C21BqyXivqyKVMWbJFNaAAd9hW2Ko1bFAvuWdB58W6rbVLKnrjdRYi5",
  "key18": "3YbguaTsUkKYr1XKiNRvU51xxEZv2Zs6yVuBkp1CnfEhoNGwFiuWtZm4ZCdbBqrxhdsvWDPD4rkGjm4hCXjWGnVe",
  "key19": "XTH6hGErTtqxX3NrNbFWqnoHt4tBThFk3wju6cgfiDyE9L7GX281GfmCHCc4GawvxqYYwivmi1p2NHhfrRp3G4i",
  "key20": "UqDh2U5EJ78PXzGjCEkpEKwZreuCVy86BQuXcaKVHazY9R49yFENyHgHtUEXvfjaaQ5iungx5dHtaobPjFoFQAy",
  "key21": "3ZCJrTGZb13mDiDwMfevTZ8znGANgGij85DSk6JyzpCkgUUq5QNVEUU3z1H7wAgMk47Pz3BFMBkEFK5Tq5TGJ6Mr",
  "key22": "2KZCE2xD9e7DHwDHGEmP6TKTUt34rjGNSDSJRT7BdpbZdq8c4n5SMzQtPi81U1Ujvn5DeMmCyB1MDh4SzGEavJsA",
  "key23": "2zoQrihEzrHMBQW3PrR6uqeV4ENbtWoQohd8nkND99dcKawjssafqyZmss7eg7PvDq61jF8ALhqqCmBg9pTyaqPC",
  "key24": "AFXT47vfvekErt9qFjNCedxUWj1tGN38CU86TgoykrbH7uAD1wbr9V22zC9eTzxSeoS9VQp4fnLu4gARCeWtv3i",
  "key25": "4We3JogzBaBtDfb1ZzEc29spf8nxbnmpvVupWvSMMGjbXGYxmx8WXMcQvvhNqLcS63o4fzaAWNnBywL1VRJiC81J",
  "key26": "45Mv19jyBzTDV8xRyTe3MFk9rA7dvytdgoBAL2YfqQiDMYv4aqKwRM9biHgg58daJvMWqsTKgamRLysqX9WoHHRF",
  "key27": "hxqXdXYhhoHemjZokXMJqo413d6BuQPKyrXtXKpLviwmynfESi8s9vo7ztdP4deo7cer3iPjGomh5LFfFxvVuJ8",
  "key28": "PfwWQv5boRtQAKsXRVVfunVjLumUpR1L9DmoBppRxDkw3BUdM92HFt6bjTrhcyQGbs1LS9CcP771VBoxbSDcu2U",
  "key29": "4qzXT8EQWn8SkahMVVmmTGLfYkzuMHcCPZ57FdYgrcE9GcUBLaqFzRqSrPsAqy5B14z9dQcy1hPHRDM8GpscjtQs",
  "key30": "4QhbxLCvt1x4FetvPE3y4cWES3hyRhEThMaxhJNDzWtoyrBD5Hr63aERFvayhMWrbR5d7ypzio37vKLgcLZqmfEg",
  "key31": "3whAXMdgbXiBsz5KSdRqy84AGXGiBfz8pBYAddxwKDT1TnHRWYi6wg5LVeC2SvqBVgfAVLPLrF4sjuG5Jmv8k1GE",
  "key32": "2azLXFRKzJzC3BWiSkeJSW21qajfX9wiyGerFz6SyiGQC447JTTLhN4nmrZKZWJGKuCQeqKb9wnykxjfsJAhkUVz",
  "key33": "3denXGmoF1EPc7r9dDmid2HS9bYjxnVBdrav9SjfhaFPnm4c4CWL2imX3pFYWvWmJdMoG3gDQHq1nPLP85FDrrDZ",
  "key34": "4e4yGhc7z1ppmJuLWP8ivzkgbt5EJ21uHneo8ZeUSxYVJVtj8cfkK9dSovTWUie9ES3EL59NeW3HLvXmQV6hNhh7",
  "key35": "KNbesgH1oyC74cidRzRzg2Kspthi1fcYnmhFLQ8ZwTRDHaXbVUEssPHVGxoFRm7zo4t6Ko4LWMXbebfb7jY5evw",
  "key36": "5qQwoCfbcpKRj6i9HyDmsnmEXS2v72Rr6eaUUv76E1APB5r9zyVHCW1fWSU75eA848Th9Sva1snwjACBGceP8xnp",
  "key37": "2eUowd5EDYvPdUAVao7cBtg2wiAX23PjUgMs1bML4Qy9HqgEFyj3oW29EPvce4x715Np6QkiXuYkp8YJhYzFBz4U",
  "key38": "65XondMAFECLLZtPXwqFDVjjxMBRnf6RSGMoNvsw42bFUq33dDojr7sQ51fz4aYgCkjf9SXLVaM7x775y782KKnS"
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
