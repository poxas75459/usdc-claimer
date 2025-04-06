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
    "5M35BTJCNh76XsW4g2grCnyXtBuFFuibQy3daCNM7e7tQMGA1y6keHeo5bWKkvKj5zrm229KmKBw19NskmB7EjMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Le3HdcnPE4ruA5zPwkfBAzQwRmXfoteBJmcmXzMy5d5BaK6xhxYc5gbX8fnsR4ZoXHgVz815AEKJuRXcmQGB5Yk",
  "key1": "4RVEXR7ZZ17iv2YJGofMgU7ZKsruZjDnXZxJ69yELXZJQ8uX2Se7ArXCVFNi29r9SEDhodANrQYtrYkLuL72e8Tb",
  "key2": "ubELwxEyHXZ5QXNriKN7rdNN1oLDt9L1ANFayYK8t8SDniPL1iEE2twrs7AXqikwgEyCg87bcktfHahrg82QB7P",
  "key3": "4hcAY7NRa9x9uxPtxok9MAuxCnE7uouuy1Byfo7wpm9kZQ3Z3no7j5yC9uiHHd5RViqNDr8pcfRiytNF9veE52rR",
  "key4": "219BNB4QGY9Gg7kpwezw2RJaeH8bpw645mCcc6tVZC5fnpqGXsodTqzetSTQ48T3RUzZko1Do2g94b7wwMnpbkTC",
  "key5": "4fFHkNgwJmkDLCDbRHqJkHCXkLtATigfmRKCd1V7n2ZvLvJvAjCxbCaeKQPUvA5iQH9DD2ebEfT8oQVhLnhe7LSK",
  "key6": "3V3Yz2jm2YbJf2EHzRYH9H1BQsinsPTy1CkPRh8YoUzkSM2CMYsKvYWFEwEYWm9rJ28UrwqvUa91H1knaPjXD4KR",
  "key7": "H69LrWcJhjSDfrMYB24austXVLAgYobQrPPht5Veh2PzHJ9kXYNT7CCs8yfKa19XpGDPZ8bRASc1GSTLHqy7t4w",
  "key8": "4WtfUAFRjkTBfTHgxk68172maWsS5x1p7sVhpxz6cbzpp93GT5FqBbxEsACe1esK3pPm3t3shP3FTqbaBWMadTix",
  "key9": "4ECcsGSomTB7mD43NetaW81woJUmJSni9Bzx65124szBYJRKVocSo9SKMkTck5mZECbct1d7R2ZJzjdo7rUhjY9j",
  "key10": "Y4GW9hwX4iwH4SvutwUAcsKmr9mqXQJwS3s3Z4wnkywwoVFT6ZTWh6SW19AF8ePNoRMNgJJzn8ZhPcBEsyEDcWJ",
  "key11": "5DWKJh96mo2jyeoAgg3yvwt3GdJS981dciVSv7ARo7CmWNtRXxRzFpr4MNpbW6aAMhNBpAyNpr7fAJVkat3YrMuG",
  "key12": "BJLmriu4NsTenuHCx2rqrt5aRzoaDB5XJCACoUL36PYU97GBBztrxs9VLn3q8GKT7mJfAMXhn1DdCjecRphuBcv",
  "key13": "35wxSqvfvWbAWsMPWKFLuubt5JqoDYBMoctxPTxzUtuGcX4vqaPgAv8PtJWQtpsbUfykBYV8uKzd3DBrc8ntSWdJ",
  "key14": "2Rh7W3c7P4bumMy1xNSeuyHvZnXWKLY8XLVLAiWhDnCXh6v5AYjaQ5vxSHEsC74szMFYWdfwmSL9j99vHfYsPaBx",
  "key15": "2vCajnFcrh6Fc4oHusgguFyFdYG6nrxbZVfaNy6K5DU1R83Fs9Ni18EpJqgXHJX7MrrEmFggWUi5qd6ftch7XweT",
  "key16": "4q51D8Ac2MkgU5tdahjteP1GQphuBt2qxxVt6XYTVg5wgZ66dUpEJnv9uZGKyyMfz1oECUzGNZz3q7TGL7V7kEjK",
  "key17": "3Dt4Pdt1im2qHrCSmT1DJfb5VeC4W7qgzzq7BRD62ZJyfsVmYWcvxytRydsgKAyFfN6ngwsBLYQ75XZAMWrYw5Bv",
  "key18": "3dL9LX91TJywsYEKdfDzpwnhp1WZ94wnoAgWfi2mfVrgS1Sa2fVD28jKL8QuYbdMVyTahYonnHLAw4HDNJ5CnVxi",
  "key19": "5eRrU2jrZVUK4JFAqo7Yqe3jN2qZseMsm2AePyhbLs1dpJGReBETLGN8UUowi7iPynGfEMEXsNrFChfTWWMPe5Zu",
  "key20": "jHuSWWqK7czwcZya9j1KT36aA31gh8FXZRDRUrAFZm37GzaS93wDQdKDAVSxHWqAz4Hs87A647uE6Za1VmNN6nv",
  "key21": "3CybYuxqsbdEN7ceasu3BDdW9khqbYkeBkhuNN3w4kp8w1ySaUrgkpg31KWro59y7Nm6mHK1AberZkSMyvDguNJ7",
  "key22": "MSqwaNMXrbQKTCZoExYTSBn5fmXf2KH2xMcJXV6QvEqrXJrTrkfH1U9YcoMHxpVVw4FFWrJrG4dvaqTPnrLNoVB",
  "key23": "4WwpurW2RNEiwv5uBqVZN2pyRoD4gxLmkFEZbd93Q9aoXwgLFqFnFTtuLEDuDyHcjqcj7t4Yfb9B3ZajcYAJy9Ha",
  "key24": "2qbQRAvpunm9JEVxcMSKM2CM8bQK7W23d6eHt8vXGPbN7uzPeX6BUKRv7qeMt5ANuuRyvqynvvuRC2GXxDsXxrmX",
  "key25": "4UaRmhmwHQWfV6zQ1jiKxLPd6jovposvqWhm7RAXWtdhb9JK5qVzqwnher3cVzEktULyNhKzntp79TRxG5qWYbg2",
  "key26": "817XCgaHQCh9of6qng91M72atdBoTV7qnxoSxDWxvRoREmp8QKMxD2Pzr6yoX2qJLUHsKXRHWp7froMtvpUYWqG",
  "key27": "5XAKtUXJXH54GPGrw8Bhy2iT3wSn2EUZPjnAzg8pPXHKDYT2z5ct4NJRz4sF8ujqVPxU7LaRFP6T1p8FafbXyfgM",
  "key28": "4DSDa5WCYJyt7UFxnvcPveEMQjoejjCEmL915XKpWqRaufw4rWDqyx5NcRZWfkEQFULJ29gWajqSJpAMwZ2cCYP4",
  "key29": "2xeYjaEqWV94BZ4Mf5wYVHRyFLQwnR1EwDnX6qbaHu7Z84gP1YxFBpqpmDTEx91p8fnGg5j8hEALcetuSurpKruN",
  "key30": "2c8R5ge9sdevxYcM7qMhADRe388F7S9cnK7DR25LvdbvDzydpajhu6MFDVeDQ6BNG6to6HqRKpxa9iuDrLojmB1J",
  "key31": "3WgpfPy8rfe22YjzTEdbEtSCEQnLBVNayVASgED3C3wbDKqCf6nzrB2YovKnSyGbmxqf8y4eZ97YcczUfVCTaeCv",
  "key32": "HqS3UVGdKTXjRvmMNU9Ny8FKYnYfRLQRC3hQAuAJmBU8KJAR3LUGb64dXdURR8zxuGtm4w1zkGMu2iiXsZogvb2",
  "key33": "m3TUt1emJDZuLFwvnsaGcZ1aG3Qb8QWXxfihD3cy4myxboobAfhU6zoqHB2rNHhPaPK2MJDvSbbpZXNeQHmBbMm",
  "key34": "4VndioDEDwXWv2iiB1hZQtVmtThxtzuNDVVsvjqsXRS13hT2hDXz2GBavwu1ccS6BGqN9inde5vU2yqGKrdLbwTw",
  "key35": "5DwDUhkUgtEazkgm1JpEpA6AFuGhz3D2SpdER3YubDj5mc7ebyV8WudeAcUSDFhcp7mBTc1gdKQ8fj3SKVvwsujj",
  "key36": "4cxeg3HBvXhmJxfdbcCb2yEfazroxgs1JLAofPdunYTEaR3XTe3tJhFp4BAQnvCmJxvrjy2ewYQigmCqX2diKigW",
  "key37": "49F9CG5SpJBUDbbrADm3NoGZST1JL3JpUWWKmiY4qEphkPpjFuqukjiUuvX2A61rR9bb4zis5keWVuqUuYbvWYqq",
  "key38": "Cue4wn9ikWtc8jrtMMkNKpVwCkXRL8UnTLkNASDQ8fTymi9bPt1CVX623ZBCTmEJYxpUTGQt9zS7ZiWhqaPhX2u",
  "key39": "5zZkZjo1ZP7iqptzCtyhsF6x6LbEPswVPtuht73fq9NR84FA1bEjYTvgTXQFp4nt3TjEggruC28mff5SvkKy6QYV",
  "key40": "4vCBrK9Jj7xXoFAYP1KQNPpcrMsWZb3ePdhURmnAfQ6iDx4cMZSLdea9mbdB17gnyH9eEVXu6UV5tjkEMsVWqzTE",
  "key41": "2Suryr8hEdF7URqQYABkGNb55RNFfuag2DcECvf16ybjbWNqUf3ecgEK8GoNTAbfAEQ9mzpeKSWXkiNS7wedXqtt"
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
