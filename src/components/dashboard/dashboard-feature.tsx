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
    "3wB85sVq4Xav61j4Vk7ZSVC8VEKeSAeTiaokUyGosM3kaWGNH2K7AXd17RTrL2TNQfUpyS9u4eyQyuCVL89HvkVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEfWUeeA2m1JW7zXeiZGuof3aqMiXSJLrPidXjzynLVsMoWFWsUD4nzyrfLyDmwSjRLb3kiXKSv5K6kYFMTXB4C",
  "key1": "5yGJHRyfkMVgmV4toyHcnpF5HdFjJH2yUQdQq5MQSt4jwwt6agBaJgn2C1M1UteyjmHe46KFeQdRvcBTi2w21ThX",
  "key2": "4HA1j3anVdGdqB2bJzaG9sjxEkUjKJN8ehXQhdoCGoWAeiPaT6Zxgx1yiifaaDjQMqA4x6UUAop88aNX5n41Ls53",
  "key3": "29TJB18zJYwmJr5yD2pr4WU1iDMSmpxgyegp1PNz6UeKbVKaTUWd6HWy73V4QMRNPDQN63b2R3qGiauwY7rfZVq3",
  "key4": "67kTUCU4SwhcZEt7WXc7rfNtsFLJuUpnDPhp76X7uC2AyXojPbSLiMi8GPEHwgJCfACKTQzjPbEgFjprstqUUmXY",
  "key5": "c2UCM81nDPJ8uA2mfu6vZVdHQaBy41nfZo1HrhbefkVUCfbDvoVogj1A1QpjLjCkzgu952pE2sFvbBaKC2HJvvR",
  "key6": "4u1L3hDedccHyYVpsN8CHMvMz2CUSnDzMMvPMRr2arJEzmTwUVxYek9e5SKBxooGY48by9ee7Ya6KYZD3AN6XMSs",
  "key7": "2nY8a9gzMmk3vahtkUdo2DW4Riccs4jh3aLycYAMhhmpowzZPyY4G14yUsHosK3Ho7dtwyLg8RkGhqQDGo39BF15",
  "key8": "3WGu6pskYAjUi4KLevcW5F5PrddSXwvuNmczFUBrwMTCPn3QuPtAJQWDunsWsm2zAc9fxpjXKiSHAJqi2SgL3jbv",
  "key9": "t1goPYPqxCcgCkhP6pH7EwZMYgHMUkDbA93bUo6tZVRfUcAhtf41wo7UCS5CeB84fQNUYY5ZoknqhJrXAiRVRdT",
  "key10": "ACDtSzzmdr3C2vmCtSvm8PmCcyxiqK828DQeRkrFMAQGA8QDbjSbCcLFsPGiDhBA7tP9pqx1JnEuRPn8qMPe7ML",
  "key11": "3rJweRX3nipnW5gPpPL5dQwHiXa33tA5Qhc5x1pZH8PY2JRWkarxbpkadNa63rhRxrSZQj76qFwQ5tcA9wasfz1g",
  "key12": "1Bv5M6R6q7hiNNSdqVXaB3T3DxvWpwRMkEXttJC1Mgakhpb82WCPZaxZriP7J695BRZ5gUsdghvq54zwXm4H5r1",
  "key13": "3KJnsM9q8WgNrsnoPQ23PXPbJNiTd1a4fEyCynrQuBJP8JLnEPkLTZfgfsnJR9ERPAwTMh8UNqUmYYUVEugBcW9D",
  "key14": "2fbp6iqShohj6Rhn56oYqrJpY8Bo9eqMfdrovHS4Qwqns2RDtjtXmQDxiMyKJZ6nbTaf31vCkpSYGZ1uit4zoD42",
  "key15": "QhNM2tQ8BHySMTpx4wy8yNpLXmveQqTAPNPvQnf3Uif6xxTFLLHujWwQ5kkjKVavh9WoYRUFwZtSGiXVetV1SS8",
  "key16": "ygf2ZY8i9PVp41kztQfPUCyLdqini2de9pihetWsu9GF6aidKsQVYe5zUCyvdJuDTJwJSDk2EwTcThkq1tmkMNJ",
  "key17": "2HWeb3TcuusGC4mky3Xzs1iYVtyL9THCkX2kBwQhMy1V759XWQQsixKhVTNPg6ta8eiDxNudcAL9QAJ6KmG9yqTU",
  "key18": "3EnbBtq8ptUdm5ssM2FSBCSutBV5EAzwRcRE8CRo7pbaByiaaFZ2V5XtXhMyQJbEjWEXA6od3tC4L2tQdW2ukkPY",
  "key19": "3g4AqXcpbRzygoxaqgJ78YPaatqTKhVQVy8Jd2Azf53hjnSVrUE9VXvXbTUtuHMEz1TWrt1Sgvbhy11wmM33eq36",
  "key20": "3CEk7sGDJWUP94ghAXokksfcsWpvW6VRtfq8mniQjbsm2GMmmjqJ4q2fEeDJJWvCQocbhK7Tcrv4PoGSQ6PWrygK",
  "key21": "4XeywfCbHGpe1YDiupYzjjQfwFUiDLpz9nqUVb4jbpQ4CAiNhV6nu2pJGQivh72z4hcB3BAVyETyvdATqG6yV3tm",
  "key22": "3NfVgxeLbvDXPoJ2CNJYMRhDVdRLZffNkD3S9uhfWVR5xYdSE9EM2Ht2cBG2Gt8uPDJdSLPrmSBJjHwd8W6uXiEN",
  "key23": "3xyinfAHemzcZn6gSYAuFPeLkqg9icsm8Twn7b5Wi5LmFtYky1deGimAeNpYLr5rkQvxdyjUijWo11PpRik6NNUA",
  "key24": "44h8bD6f5auXoajftDDpQAZzLePcWyjC1WdxtAF4FkjMk9wPm8MAHA48zqkef4pM3CFbc8oFh1RX9yERZVr6icmy",
  "key25": "3wsWwGwgtiUewnecu3ni3mniWgVh2LbXQb7nhxSoamEMgLRetwVx4NhhjjggnCxfZpR6Vz9dKEyhaaG7CokMtRxu",
  "key26": "4W8CHvJ9sbJTh1Uh6xMjDdS72p4AFbh6Gz55CzAUFq6PWv2N7bF4mxHvQLhQQR54LKRi5zjWRh1vwRfMBtGRjhvr",
  "key27": "3VphahaPoCSP9NPoDEsAtgUtmkj6T9o95QLaz2kgfk51rgje62zFuqpxFBf11ZwCBgPWsfGF7iBNkyoCJA1kTXKm",
  "key28": "veBpdAxejnJ9jgF8QjpQAQBSNJCtoVKPGppwkFEruyaG2sMdHAWZDpeRDxBxxHoDnpac6DxzGPuPxqtMuZQFRFZ",
  "key29": "2eMDBRJAzCa3t9EQN7t7oGu14mF4xBZqXX92djFJAoY4XB9aGBaNs3CC9999AY1fDPVaFxYFHrbzVWSb2evojeyQ",
  "key30": "3fNsvVu6zcN9LshHcSdsdhVLYv47YpqhoUCqL7H2V7fe19txkSgVxGWzfGhJKvcKkcfEKN6D9JrpxBRtpbWF3gQj",
  "key31": "X2zHRj4LzmHTvyoxoLiyu3jMQNmdachEfBeUGqik7LVocgrU5bNugVKHSNit4u8SYEJ9H9aDGxX9Up8V5VgrhJ4",
  "key32": "57K96SAtBZ52VbhZ1drADkgmA3rVXQFeY4F53ojueVg4tmehAma9C5gU7VYTZs77GhjgfAhweXdst1SYhAok5o57",
  "key33": "3Mzuw3N2jp8qPeVwEyNLH8mx5YoLE5VzQUB9X3KJrAqXF3UnfBvgxkKs8sQBjvYfLqWWicfMWP9B6U6itTkEXU5B",
  "key34": "3rVBxoWxkSvsvbU8tJvQERJsBChsep5qywPKu1VBuqwQThHyBU3WetrPEasDs8oL8TkL1W5BtCVrM5i86K4WuTGj",
  "key35": "4uBgc5fwLocPy1ErjDMr2URvx6F2skaXDT5rHb8jiTaUECLzgeto8aUMb6EbwdiNMhkj8rV8VagBMzgUYhWrumLZ"
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
