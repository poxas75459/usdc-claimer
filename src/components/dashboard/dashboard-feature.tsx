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
    "uts2BXB2BAkKJrarxdzk2HC3ieiZgywKu81nFc6333AeKjgxq7zPcZsRDnbMZy5nF9Une4AXhbv2pMRcuumLCgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6aPrMdiEEhdVEdEQ9Z7vuGnPcgndHPqVswc5d1B7HCQR4NV8aUvUvDVRNoGWUd2ucZe24ERALrNenSDU1CN4z9",
  "key1": "5bkFYAd4JbimLMqccMiA3gEXRUzUkyhPFnxfrqh1ygA9vgjNx6mFZXxqx7UUvU1S7xMgH7CWg4DfQAbeauEodMVy",
  "key2": "5k4TWzoCxFLWBbJZNTWHXY12Neh2221Ms8AijvEa6ztFL2pu5nui5XuCcdvXCGJEyBh5pJDxSfgTGU5q5Gmm7Suq",
  "key3": "Z9yHkzhhj4tizb25QHftoRFoLBG8PXXtaRGqGPnxEjbxziBBKncrom8eEQw3oo6aTCRBFBB8Ck7htc9iRX87HNB",
  "key4": "3iDQf6SMjqKsygnPK3R6xbN3U8gy3uThJESkaTEURTV4t2fk3Pk1SP7c82sFwsonbgZygB9wczusVxmU66ghkc1h",
  "key5": "64dzoJAdxVuyF1EinASc7gAF1LLqHGmY1RYVqayGZDwUJHUYC1bj88aZ9cNWAgY2x6gowzDgpMAmLEqSpc5ssBai",
  "key6": "4uQ5kEpna83S2c7vssZySZp2f4sdStZN6xVTR1BVomCyq2AFi3h6Yoev5BJVgyhMHdU8do4J7dyi9ZKnCgpJja5f",
  "key7": "5oJv7ozDMZKjHqX1i3GnAhL9c92rX2dskwrmaRd5AxBz245N8H5UCxHoVmBCgjJrEs6SuuH2DhTYuU1uj6uS64dk",
  "key8": "4As1s1mC6Kw1KjWiCWZzLYofPYs9u5PvsoTyYRUdDrduvrMC1VwHkUNKCGVH1c7CXu9N6yeLroqMZy8JLrarwgoT",
  "key9": "3xjLgvWdFbqzFyMMjhYEowK3a4wBLTpCzHvsydAVDXvVWzpVdwaktsUkM16PbudGpEgAgauZ17EFopSbodgE47GJ",
  "key10": "2daYbbn565DTenrtk9CxH9tQ57uxrjvertxrSxYzxok22iy3pGxV4qLUfkBR2tnzRmpVsc37gUTxCXemz4Zu7gLi",
  "key11": "3UKMgita6UjHiCAqQiNt62ToEMxFRuzNzHapWMo7yU9uEVQw3JMLct1sNAHFZVUanCqFh6Qbbx9GQNyVboE9tYvY",
  "key12": "4djmCb8xan2VXCigjiMfBS1XK8LJVjh1vzKEn7BdVij3DBJYnL9HjCUUTBs2LaYYDiBd4x4DsmLirYURBRnyRMaW",
  "key13": "563GtByXsiz6DiLC8Ry6agWyC1nWWLcNXLE8UQfVju5ociZbSd7BqCnNW1fHUthBZ3Ykv6m2ZLgKk1rFYsFtUSxj",
  "key14": "4bA8W7NkCji6Ddk8tfTr2gtd3ehgSrYhuxmS8eB1duvg6S8DEp4tiqhU4sig32TX63vfPSAwCL3ysLvsiKi7aAfg",
  "key15": "5k9ioTpWYh7XBWJ6hj627ghQmBaih5YthFh3ecYgarTDd61w5pZSy2p61zJxLQPwhTxqwMJj2EF7PcNWHXh1skHM",
  "key16": "2oPvZsEef9PeHprXYWTFadYdAthQ5vhq5nygswoXBGpUCB3qeA3KY3A43szUhf5ZiLTWtCrdu1vPi2xmJSEXEiFT",
  "key17": "Bop5RrkZhzrvD1FGpCzjLbS8dsyK5SbwBJgwXY4VjCEYdeJki6tFTrs3FTg9EPt7xpybWdsZmwwxohSRvhyfeVb",
  "key18": "3nsddsxNTMqgRBs27qDwP3qPxesVhXnxFCuus3zqTUyMj8tgAbrBay5r9R8hwSHxf3F1s5Dg8F4PRBsJzgX9FMBe",
  "key19": "VrLY8CFdEzxbuVJMMeP85BRkBAxpt9BiJzNe4pXwRnBZkfosdDP1LFedK3XtzaXqXjeDeCw6xv19vVX5U2uZeWT",
  "key20": "5zsSQd2vNe6AbK7Tri3msdKdYSUWGwtR6GMEGU6zNQcoUMyvCoqjhxDceeakdcWD9cBhbwdGWk8CdhwmtHhMc19x",
  "key21": "2qAdixucjyyxd5DYupYrHXr4sagJXRUp41jZTssQSMVofnvjPoC9DfgGfgA2sFEhcDVxrMH5zh9ygvUBXsfK2U2f",
  "key22": "55HsfbwvrKJmHqWa4t2vjHQZRQnTAmSctMQ7UAF6ab7uiLrcRVDxNYbenYy41Wow1khJz7X4C1Jndp12tbx1zBbE",
  "key23": "qE3EZr6EP8dcQwV63uk2whhA7FkEjDEkTdn7J4ocLS4yNMMSByqLg9iKjarVRtR8MNFSy2ZRguhNpbEgMcfJvKM",
  "key24": "4qZGmHQseKca5dRohC1rLYLbvbLZPam6YKVvWnkv87pvpdue1VaBVVbzaRgv9qznPws2USJhuSsZoWtTDXdU8YDw",
  "key25": "5He8L94x1FWuqon919CdHoKDeMcgWJR6xZG5rrJusehpBvGG837oV5YPeTBRVxhaDFgPWB1KCD6U3gKGpV4ED6Mg",
  "key26": "65MvAEcGkZoeXpnt8SBvv9wbyU77GG8Vjxtf8gN5e6i672ApuHXwSqEKVNdpTxoMYehKchz26r7m4MtuVuKSML77",
  "key27": "54rvCJazoPfspC98HKJqNG6sJm5dDqQFaGcmZtKXiko79bY8LmSfKJCHyTCtYb68oBmEuVBtU58d5qMAaVzALnc2",
  "key28": "21BN5QbCjkjKjAbCriHYpySPuf8oo7pyg5ScNMx9QHQK6CfU8HxtpYRw5XPc1eCfyTYakF7Nons337vAdGE6JXer",
  "key29": "4dE7UqtH88PYYE39Sqm9BnmUTwvuxtKdpZEeuTQ28Awc9BmnsxdVhn7fRCQWKPaUbcUWusGBGzShRH9zPeA5SpJq",
  "key30": "4gGuqngCFycbeoJ6xtheiTBNDedg5VjzYQqSHELvpAzjnVypt38jfvmpjhGKjE6sNvo9TyBvrVvUbgVmHdbFk2Ei",
  "key31": "9KaT9cTUx5Ec3wSP8EC5zTSR8UUcHzw7vzhXQ8gEGfuubV8dztTiGSv3AGu4FDonCFhiad12uXHvLN4h9mkfAvN",
  "key32": "4RjUmTKukZKbPiey5cudnoCyqYWsCAuMo2SVja9RhjVTmsHtjsZ2z6ToKLC7RmRgRXQWY8Dr7e9sEiLbuQY9DfyA",
  "key33": "61KZh59znEn3ydBqL1ueTRx8AxqMhqFEQGD26xPW4QFY3iKB7EkZTAYv3GG9K7fXvEu3FwdRCbQ3PtpuXcpmGeXW",
  "key34": "2LRUNAq54fgwfjTKSFXPV8btVLr8wP8EVcBrzrczaEypuxWs9sUrsqYpudEaNmDU8eQGW7ez6PojPgwNx4FHFRSx",
  "key35": "5RFjG3Fc3jzhny1JtrDjxNL8U8ScRtwozpM83mBMyUuRYae4s7niHQC3rK5sJ7z4xiAy8JVL8TrHuoBCP1PLVrr1",
  "key36": "5UymBxts47bEP3yoWLM3HcDCuGDMWkr8KmV1DvackKxhDTfdD6Se5C6FnH4MNxREemvpCqhKfoyKqMxwzqQsXRep"
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
