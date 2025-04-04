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
    "4geH85wG8uBQMKUth5cRRGUyUQmjEfnouZgZeSUYocvVCSgW8h67F6epxTWcoqNEjsZajpC2CwGgDh2MQmYgvSQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UrTmEhRgvtK5GxSwwaNjQhC327CpJ84Ey5h39Yz4eSM29fs8aADWocN59jdMdpmVXof2iQUvLGxbEsQHQLe9zF",
  "key1": "5YWVHUL7gvw7ZLL4Pvc6hQ6bHK8fayLNUVA1rczYNTVxpKqfsHdYguk27VNGqzjBCU4vRhsqqtxwTwUteYaCR9gz",
  "key2": "324KtbF5o6itG81apK4s4gMd9S4TGe2m8EdqW7CADrcjmx9j2q3QjBgfTfzmrQV67f4p6xJvgShi2mnmLuFjTffW",
  "key3": "3LSc2Kho9NavGZhi8KTFwaBVJV9QqAv9PzFx1CzCKgFoKAdeDRn8cFPBYMwDJ5nXf9sSSVfySGz2xz8jTMediJ11",
  "key4": "66jmjPcQyoysscRwb8F8wCY1TR2b7bCXx9nJo7GSxpbYZEYgK5REsooH8fwkx7wvHbBBAah2Rqtsh1A2WJ9tHs6T",
  "key5": "3DNWNRGLkcPmcBs46WTjxJ96pU2vN6wjXKcrqwbRoS51bgBkBYkLpi3YcXKWW2uuF6Xdk5ZrdcB3Ag5ebL3Es8r3",
  "key6": "5sZ9CuPV817crcvJeve6Z2QvhSFddiZRUukS9SdPCTmnFhwBcnDe2bvK2yHSz6rbBAQa84xtvGzaEKzVN5uDHtLn",
  "key7": "48DK9K8U1sWYcpFf3FASY1mZdeuvqq2NoLh45zwHMmgJ1RgdVyH3trEGyt87v9PfwH4nL6te69G3F9AYnpYBzwpD",
  "key8": "28RNVVKYq8C4Hnydc7iCubCru7J3C8GsvWSHCSv8xKGevYmNDzG1jdXJZi1z9e5E5AV1zwMroY3ovxnh4ghVNSnm",
  "key9": "3KBScNo1jSJQiycvMaBmwggTzDB92JGVxh7rrtXHebVdZfvzCPaodfyrdbyf83km4fuvm8CKNaA7fkjNQ8V4AQNG",
  "key10": "uLx6Q4W97oKSmQUvwF4eK1NQjMPoozmohomCqFWZBCLecfuDpJdcSYQzGNynBpqvaAuHJSVcw51L63WKSC6EyTr",
  "key11": "2zEk7nucfBJmstox5xK423KJwatBCvoEwKAW65Pd59a1V415YkN12NJE4hTurtiHyqGLrFLgahS24NXne2TP2ozb",
  "key12": "3PHNG3C5KHZphioiGr5LHTpRAuYFCzZiLCJwBb4Kh1t5eshKDTxiKKRezakYAxDRW8wtG7Nv34ruia9DE8i4HhZW",
  "key13": "2FDsxG4eMnWU4PDytVSMBRG2s3v2LrMUTCZWYW9Awwsm6c4it93ZBbHsoq59qeyL3441Hg986NmdsyRSqBWcHPn1",
  "key14": "2tAPMgDxESJKshXiku662UeAJ4rs9ikZaz7rqpPXgk9xqjK8jt1Hm6cqQ8XZ6VeHycwYBs8vihn8xmgagXq4D2cP",
  "key15": "4C7ouc9DS8EkL2BYMcYeU7rjuf5dQjKrvabgkFSoLCBMhBPDaZiiptDQpn3KPtMi7PCstrGU4paezEo7Wg4j86Tt",
  "key16": "oQ7BK4t41drT1mB14q41fznf5nuRPZDXWzG7ETnemZRi19nGcnsV4afoLccXmwCVVzowrAc1SJ7hGLJLJfVwdAz",
  "key17": "rq2xEPvTGMK7UJ4B5Dnz5cE7H3oyVMgbJCanrFwzg2uY75DBVX1SSr7q2a2N4LqyPyfegRVARRZMT7vCZdfpEW8",
  "key18": "26o3uhKLmdA2y7T191qsjvj5rLo4tozh9fMrponyr7P6P51BQdU6ZFJdzPzyKbXEE1nQFFBDaDKnCi1ByNhmeD3b",
  "key19": "54zWNdAVe219yckda1KGbyXPzJ4P41teKtKSYSZiKsXngZ7YQR5jKUtuzYvEsMRRiwD6eiLwytmDdKkL5ybbcffn",
  "key20": "68HB4Gyh9vNYZsQtC8K6epr1RycuPNU8My5kcSXZQWbPv2Gr9SQ2gvLkq62aeyLhrCN1o7okd5frfraeHKetetA",
  "key21": "3pA3nLcj1grA7kNeKo278s31pumXNb4TsWLvE1BHiA244pCvTN9n3fQiNcNrPRDyV5kZCmBodqEGRUKZTj2wqXu6",
  "key22": "5qbCWJa7tY3XaLr9P17kAQDPBFLX3AvUZziVv9eoXGxDYj1eJ66Ds9LttH4AjUrspTXVkpc7c6UhhpdYZ2dDbPCp",
  "key23": "4dEKz7ENU5A7JAqD1jui43ThaEogrYMGKhsbkP18d6hq754mGh7ih9kXkuyRVuNGwaXAVeevzAiyePbDdXhasgwD",
  "key24": "532QqsmqytmatF1WSrLvCMXXsFTimJMK9P78sa3L6wHhKkz1RWRKAPDd4dps3HyoUNqGqzjCdmzacqZHY5ZyZhhS",
  "key25": "2fn9ULrPsYXLQ3gK1CH5UH3SeakkoiqY7cMECHFKRGC4sTK1MESjbM56YkscMkZtKiE1JS4Gsz3pGoT9KcfSjfGP",
  "key26": "5jFREXsUSmRUasJkwF4189qRYSAVmGUDGLime8MvLMrwdpoYuf682xTvwiz1hkkU5YFjKipLEYUxHGpYVE91qkRg",
  "key27": "2K81KeFpeVnhAJQGaszTj4vxTxNae1GntrptSBmYJFbbSKaCbqT4ns2w9YQdtXK9HSGC7XzxYMgxKtAW9FkALUUk",
  "key28": "3jsFs9nCYWZLYBuXX3DF1DRNHfcCs1XyVZKAQE9YMF1euMZwHR8YdwKzCtZxAFZDUs1ZNsrXJr2oW3Twc3TdFXN2",
  "key29": "4jDdJaBhgrFnnnRt6af5rU7dFsbg73zhVuAEeEc2uQwnXL9XKvSN6SwFJVPncTrp455SahP5snmRRoknGtvUanjJ",
  "key30": "48hLUn7Mev6C3mJag635vSWSoxdENHdpip8ogWbGUhNMENeANCg1n8GNHrxRex4hrEh8gWBp7fCxsTgC3gPJP1o3",
  "key31": "n6KrRoRfyT1AMqpU7MyEewdxcpR82jMHSaRQRZF44etLTDJ6aSBJ7ARZqBT625aMScLqTBzjCWH7HDkPaM1urbT",
  "key32": "VMibEKRpA8UNFRmgcYiRbde6so13iYhQotv7wcQ3gYZx76M9PCdj6RwBtLnFsUcrcRuFCG6JdGnZXQ1KLgutjaf",
  "key33": "2bvKeQNnYAocNmbWQJhvXBeBuDD81HxpYxvFJimYdcP5uRXW5Cyvwgfs3i8ttiou3J4s8CAM39tkuyUayjT5Pe1D",
  "key34": "2DMQTbozBWDWz24xfMg1jd6rRmSbxbekteacyWVvuXkZ99vqiuh5s1qXSozTHgeqTG5ByKDriwNVQmqPDUTa8Ggp",
  "key35": "2BnbRDqRiEuxcppUgzsZMom1uanrECyCVNvKzRKdPJ4a9or1xe9eu578Y6mXySqn4eBTKDJB58hu7b1QS2YnJV5K",
  "key36": "gjqVHR3YQusnkGPHLHzB68mTEpeXd2d6VQdufRJqZwBu86F6XmLHx7Vnkn93rqPkZajwWbPqV5R1pSRHhk1tT5E",
  "key37": "22qp7iNUZFoZzsEzDLAB8xqf92R7etFAQWxeeEHTXg1he1Maar2U4jnBYpr3LqxscQsxi2A552KwUYC5Cmb8woog",
  "key38": "5YPz94WZmVfUyZ2epNMaNbNjNjxJn1SZTsBzh2V1vq5PW5vEv63snij45d8SBwNUA7rtSapKAQ7m3U8q36iUu1GU",
  "key39": "6HvUp3kiRfgA88EswP6MWefMsryG1ndEofHvWQZbXwVtHL7atELB1FLadMwLa7x5HjwJKRrsL2D1nF6MGEy1SX6",
  "key40": "35R9HLwBtEcEhqGvddD4p94s7n2MA9aC4nX6xSSk6h6MdCgcsw3jaHxDxVFoCeTKS7e3pWecdDrXd3pwxeHtNj4T",
  "key41": "No41eTXx38yunXdscXiMHPyVyLoh7Q1HNR2Gu6Ubf7qBTMCYTq7XoSFQR2Utzo1kkD2ML9ekPxWYiJVWExNqr7x",
  "key42": "3zuicKhZ9HPqig9aZ6hAkiWw3D9hRxa8HzpkSnRVAJF5EQVEgct6jMMPYcgsqYGZggiD51RVVzdxcE6Dib4L2kgJ",
  "key43": "dEitwcAhZpfSR18kJ1UMKHXQM9AB9mWiskP1Tog6dzAgBL1EXgMMCc55vB5CLL7yydRmAVaCtbThcxmUHYR9Ave",
  "key44": "X8VcZeJmLMTozd8wXrwfNEzsEhVAHqYJPQGPtuTRBg1DpK4WkHkQpLqfrxQzZEqy8w8dJtHpiAwuwFe9oc1tWqG",
  "key45": "2K5ZGRfdaHHiatZPPcKwtgFcKLqf71wg3th3hYSDCbRNDxAgedG24HhFteP8VwD6ouGGHH5LZn119gpxUxLXJES",
  "key46": "5GmjTWzhmFoL8SFqaWdp7zRU6KSsjpJjAMQgPNeBC7ivRE391QqWcHo26KTqN6Kx8adm1LpHtoKXVuMcgPiZ25mq",
  "key47": "R3dCKyMWyaHojFgKeTRPU3EQtmW349Zcq2sjXHJkYWmcV1w8BM89fmjUDaQMkEFGU9g1R8x7Udr9CQi45ueHaGY",
  "key48": "sg51H33kaN4mL18qsETj5mpmix7sFRf71mA8VJg8qr4Wx89TrjwEHzXJmf4b8S1HQaH8MCK8My7syGuGonWffSj"
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
