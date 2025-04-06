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
    "yKRhA166H64fWxM1xM4NAcgV9KyhMvVeN3TJHPRR2CMFoj28P5Ed2q9c8egk5LgrvJMsPrUfCqt1mNx8twnX9hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mziSXHDRBabDqCKSkaGcvaYeqewYr1PX4o3avKRLRosFrrpdr5uuoCQo56mqzqPuZTqP82TNS6ruwZXkTyyE9gA",
  "key1": "dVJhwXGxQopQWYemxmfy8zQnQnztRxyo2J2PggBcGiiuPtq4Tw7DBWLX4VRZV7HqniPAxJmuGRLxRtYXRujG4eU",
  "key2": "5ekwgFufGUkdnbLbcv2apQbPYcsCYg4B5RDpXBmnSo3kAbyabbs47qfknxEshhjJBC1jQVzwyQgwcqGMqVDovfC6",
  "key3": "4kf6352ggVyS8k6u8xybfK5mqnVtuajrZ1k7FZhKcMm9up8D9L3yHYGgpvMg11Am3RAjb2dcYMYqYvbnUFLsoXKP",
  "key4": "4sjDTqq1goZdqZwT9d3Y4RmTjcQwM2osRHV8aJCyRzeKE5bCDmMKPpvKsJ7TpsxDvTqKgNYiDWbjxBWXbGGKyBZQ",
  "key5": "5aQCcQGuuLsYgaJmYPoAkSwdsXDUtZAEPstke5Yx9rzGtqgNue6quMnvGsTisJZZzLu1yu2t53ic2i58ZcihECAH",
  "key6": "3qZ67ZhdL9mqaxLtrzEVHy8q4QMWMjFVrJzfAezMx2nihft9SMAqWJ3oYLNGUfqtJBnzx9H7iGBwtL2pSHmKUDfr",
  "key7": "5Ltaa6RagRpVmCTvRUmDsaZ6ASbZ8P4u9q4Qe6Mk2iogcy2W4rh8WZqNMUwgyULMEAk7sJ8WXS6MAaXhTqn6CVZQ",
  "key8": "2TL8HTtR1bRQRNGfU3ssLEkH59WDUMjks1EpiPzMKrtNryjShMu9MQqxw3u38PtEm3vsA7U3QQUKaWf2rGdSZgy4",
  "key9": "5B3Cfv3AdVXvE4HcjgrHrSVT6Po2NqiG5NcVsfr99WXqbeDnpgjN2fR1RTYwBVXZeKb2wJgrxZY6o7N747bruvCG",
  "key10": "62wfQUw3ko2uRtx8fWpst3xEqqPqHzKU2AQKPMTJcapakDp5q567ENvX3fhJjmooVeaZ17UGkjHTRckYnQMq2EAA",
  "key11": "3eUyDPUTcrD5SV6Vrk3Hf3rn15h2wnqPRbUcBaX8EdcJH9Tcf69VN1MWtZX1DoLP2LNuwWZrvCsZmDLkbsV45MuU",
  "key12": "1tEQXsiPt3RnDsctDnWpThNeD3LYTBuKCFpoRFjDwXmDcdWzauSFtwtUY81dPbRCTYRTmRP19Lg3XcHPeGBf9hZ",
  "key13": "gTvR9c2WfmnLKGmXAovxEX9Awiqw8pGtZWvp1Yq1sui7hjMWXQgL7tw2cghLFw8SK8hLQfusx5VRg9mF7EL2Aq1",
  "key14": "4nWeiECGwF1K85H7Kbp4LL6R5CK29hciNXNuDDnMz1Q44YFtSMa38ueKmutG2U9oswe5x7PoGp6zduMVSSBA1uxi",
  "key15": "3FcAKQUDhuLjvVh3d5cKxaQ6rmu1bmZFZeXcxJFXdedhhmv2y3y7Kx8KTSmqQwwXTTQSvDdcjj63Bit72cY2wM97",
  "key16": "3fayENpGSvHf9bBTmAjEV2fYewZMS2qqBzQpHnnDUkBU71fsjsWW9zbpxDsgAFNK2AyXBkRdirLg4FGbjtfbfhX2",
  "key17": "2zTgJxw4wNq32q72V8mvxxRLN177KwcpHW3UNqxFBFN7adBHTNXvWP4jboWGpna8K9NE8GemAjLJyQuRYToPP2Vi",
  "key18": "59hCJVPTCpdP1n1xVEvcf7dDSvEUxUHu8vnrib8yjeSA5xrRbcwdxknG7p7VqVeCGhikmF4zea4MDHrGz2RakPjp",
  "key19": "3L6gJDkea2W1tPzt4T9eBcnfWvubYR2iGcEfnShEmn3CqhAdEsNRNsDB2LghKFqe4DoktcUEwAUdjf12LXs4dVXj",
  "key20": "5rH9soXTBb9sU8gn2aRjiXDk8FYuMBeWD8qVB26kgZnh2SpnceEqYQxiZh2uXUTE2iPiSfmNyeEErfudAgbemkZe",
  "key21": "2fDiXGBRndkrwaMeGt3jbQszWABG1krsevue3SJ2zoVJp9KRqs3PJtT2oVaEKkhK35RpH2oyzmrJT3HgYANP6jUU",
  "key22": "ZqSPJHALTbWBeU8Mb7YjskWsztnH3nUSxuJLtLxSDQapbYkUHAE3cPzkn9Bwo9jYoZ8cmx4Xzrt69ycaokeFP9Y",
  "key23": "2QY2eibnBN4rioUN2ML9MRepxMmRS3AsZaKtuZkepxGC7nBSTyqFNmFkAEXeRZ981AvRN62UyEZ2Sjj8QxKFHzff",
  "key24": "pEFBQfSvpYRk1iGuBHB55ht1jQgpBtvKn5JhzghambBSVSRrJQqbHR5XopdzPaSBNdipo15xchBdr5qvGirCPBr",
  "key25": "5i7sbFASGHLs4FKFTk2ce18DWbDnKtAVRKPhN7daMbHvG4X6vbXwsZxbFxiuteysjp54tvufCPGsD1HfUtvKnhjL",
  "key26": "5XBZrY8Rycb3s6ogKQojxF5Mie2dUddLxRv1weX7imYU6CPQo43sN4Yf2mHEJwGgrphKKodENPz365tHNvLxSNg2",
  "key27": "3otHV3iTUouCeHsNsF7uBFuZyy1KhFXpPhtqGUdPbcmcRYVST4V7AtgizjYwynZDdkqtaDLvZih1J7zWkWVWws3X",
  "key28": "274HUTpGrxnrPaBf7FxFuaUiBFRhtr9B44n1FBvXjxJDJNJ4BFtPAVzn1ciciimPj6QhmyrchAstZkidxTMEHD6x",
  "key29": "5uxrMadd5JnsyA3aPUHsYpwyBAZA5mTGqkSaC5uWVLJFqZxxz1FAxMWh5qh8HGsxSCq9Ehdsvs1aj4RwJJ4vDfGB",
  "key30": "3a7qp36CsEQiijutr9jwMYHwMT9G6Da66LxQFsrLSiPmMdNMfwcpvXQFSU2n9LHWXwDMdiTja1j2cGTCXMbbCWoz",
  "key31": "3xpLuXCk6ed3GpNntQKvn1G3o3NgU79GS5s19gxxJNvaKp1tpNnUJWJrFEcDEMmEbTQ9KCim83hgKerSTLCWmaEH",
  "key32": "4q268UnFt14Ssp3E2GpfvCjTsUk2Wfec6An47jGfGw12MQURTWStf7hnC9xcxuaq7gNUYkPQU3eJpGnEJ9T6fqKE",
  "key33": "2UDbMYYEuFV6mj8RhtTpChxHakn7xULyDeWPCaxAPMZoUUReRo5Tv5fCvT3ooqdknLX17eZKrVnCp34q8Pq6hi5J",
  "key34": "tvoEacjYfmrMRxybafGwSHVeYByNjAxFTyzeMDT7gY4jSgM9frBrt7oEzPDA6vHk2txEuqy36gH2nhvWmzZArGp",
  "key35": "5ns6egcz3YULcseUqqnKb7naxmhkvjWEjozWXzSHhQEqPVpZyNJac7rCdXF9RKaqFg9HVmdSkzZMdHtqX4ZpH4LR"
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
