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
    "5eUVThba6vewmCHtV47h4Cs5n3aUL6UoHJ6aFsM9YrrbLcXvnezkCHxYqTairM5L9fWorvPF549m2MD1JSS7RgsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBrRFvp1eYvpRZgCfpB3MooonrNJWnU37EqrCvqAvXA9JTjwQKgACFDdWY7MpVnBhvj687MMoDvrNesi1sNopdy",
  "key1": "4EgybvLepqVrAcPQcMjGFH9CB75K1QpQWecXvJsuTdqc3e8AuEZBWigirv7hbdCGQdw8kyCWF64nkZLEL1gC7MuM",
  "key2": "3Gps9paxFSnrPMiK2UyYp2sEHnXULRjG1B8BowvEpCPiQpnWDcCiSazHHuHLHLbrXnAm39oq7kYADKrymWBsFEFM",
  "key3": "4Nd6DscXPe3wk2v1jEjs58MNJndhhwbGePEbE5jVahsZMkYRkqVhqfAyv3WxXR4dcUiWwtffrwKfwxEEB48ViEG2",
  "key4": "4KiYrSxzax3RgQxtkpgwZZRLDp7UXZp9MmrLPdeqkFgFVNWRU34zNzFjND4XtBq6GJW1GBhwT3X4RyvZPhVkHdyg",
  "key5": "2a8anEqvaMyBTjD6cWcPJSZEAVPaYHodFjVdPRgBhbH3P2UrKJxjYFTRvGvrojgMYeniZRRpabPjmDcdKTiam3bw",
  "key6": "64rqzfZvBNweJH6h5NySZyjcCZz6wrrsrd9fqPnnHRnrQzx7ATnpZeVXM8YazuV5pqc8bjum4eEKasUixNYYexXL",
  "key7": "2JSLBnpLZfu6LqVocYp8niRPFfHh7dmDzPPdSsyN3vw81GCoAn6UCmbYPs7ZQ8qnu91YNotvokwcFusWJFc5zuAa",
  "key8": "2jyud5EsbMRh8DQFPg2yN2uhJjAjgZt3o5QQAoea2TTZC4KD8gJUYL49yvGGsqM4ZuddJDhAD8PCZxiAa8oh6Zbj",
  "key9": "QCLZySsou4T8jpqwT9J1CPDeQcijs8ri8izjf25WrGHwRH9kz4qTu9efTXV29ZxtF5RCBFZxByDwf4QJhvf5cRL",
  "key10": "28EC7sZSZuiwwXeQCBDBRsbqHdUxhu9UsJdRCFVHwWSQyRDX4EmR9BrTeu5kmhHuBnb9KJHR256QkBdR46mfRZNH",
  "key11": "22f6Giq1SX6AriPXbQJThLDJMizP3TvuWB4MSXJUYo6auahU44L5D2a9zRzvM6NftPkqCiEjxGPtuMa49ZtyfZuU",
  "key12": "4ugahsbnFg1ixdzw6S1GdgzURSC45rM17S3WuPEy5UopjUdQ2Kx9An7sYuoWNDBSGJqCLALYyepKVeNHvHtxmJGr",
  "key13": "4L34hG8tpmBruRKtn4p6pqaHK2ak7pTW7Z6BZ1GmgdJazzE7j6PugHDHtwo2uDVJtPL7P4Woou5FaWPmfY393kpD",
  "key14": "AMsuERBCxFa2eDfnwfkPZRHTZkUJjba8bp7phQgFCCaRtdsNo7fkMC8iXu57iucQgLaLxRfm3kJXdrF8bFuumrp",
  "key15": "KgmeDJgdY7scbUpKpKzLLx4ifpEBauu4MXG8ePZ5Zr6jwuHj9cReRmbaK7Pe8uzY6ks1Hy8YbGhnnfGkqxy8z41",
  "key16": "5bgo1GxxkPqQkCq8SkCTvq3uUKKzcnYiNDqHn4S8YRbKk4y4ZNwAAeQoG4cdrKfJWvNzkoRtRxZbxdewbX2B1hF1",
  "key17": "4JNmYg3LkJFt4uDbVKsjE2wZfpLnr32Nrp75TVWwJhCfExqWHPFSrF9qAQWzjhqw1Hig9TgrQonmMGPWpwYvWAXm",
  "key18": "4Vcpd82rcUg33br8o3DeVUKawDQwxcGzz9MUkYVBe91PkwyyzGvLcf6LvipUBmAErvScPJuG4msviXrHtMB6psEH",
  "key19": "3AM9hJ4SFG9bENenTwWpbPwJcxJ6ZGnbXusEkceD8yhZNB7TkU7NRCbGdw7kqsvdspnBPvLJV8yVYyYXekpbWEfG",
  "key20": "5Wav7UjZfBZnu38mB8ez6uAQeiG7xWvYaDBnZTnfgykPjV5p4i1e1PEQnyu6mQMSybFBBu84YRnf8FTRYR41sbV5",
  "key21": "SYXP93246wdRoN9RGeAsrpJvficeyX9ZTkzhoih2kR9FexvsjqonxuE4pM75wwGZS7qosWY9E53Key3Guc5Ymk8",
  "key22": "W7YseCVCy2aDfXHAv3KChj2ysXnTPbuWejUxqFm9sZCJi215x4xWKpbjaMHMSWcLnjWa1CuRXZhq1PUxe2LSwp2",
  "key23": "5XqRq1xcFW9nngKNuo6noxDtxZi7Q6vpjocAMfZU6pnHHaGf1ahS3PcYRHSXm741QSaGQ8fEiCVkfJhuR9LCVrQg",
  "key24": "26RwNcCvo6XS6nbrGt7zWsF4xuNSYjYmvRoqXcTxTqDbfjobDxqpSZgkHBsD8Mjd4MSpjR7xKLKrgCM9tMQQaLpU",
  "key25": "sCk6rpz7vAekna8wNXgVwmNHq4QxdMs4UA15XbbSqcfLSU6K1UxtgKrkmPZBK5BZCZM8a5DX1pWdzyMe2dh6o8J",
  "key26": "3tJYkJ9CXAdbg1NNWjtL3DMxhVvcSD4B78UKrmj3cUkx28NvAuJ7SjSGvoVmbb6KXucCHAH7ZyF6Vf1Z8biSn2A1",
  "key27": "4tFBZWKjsBqDx2hgx8toZEFCZombv8TNGqeS86dpsFmVxyd93S1FaQqTeyHkap8MbyZUYrzNiGoyGmwoRw3szDGN",
  "key28": "ExgvRqgce9UCnBpFVfTEMq3LC9TAuW3WTXNGZD6QNAXKTibxtyAWka7JuJvS8DiuwgkisxTcFm2b85fiznunffV",
  "key29": "3fBdkVFRAr3aNeeHVmByGGH6hgitnEV18tdCDSAgzLcWdXq5FWZCNQMkGFFcqgeLSfDRYnfv1McyLCdoPYWGMbo2",
  "key30": "5zwFfnrjiiESS7XDm79DSDT91bmwKufNKd1R5A6RQDpsUP6ZYMvL65GtobX3RFusp6pKnokmyFuKsMa1PNvWRpDB",
  "key31": "5AXKXjETqvQiwYDpbvKkxtExJejEVZC8ARtXXdShCBuxVNqg3pDZke6xR7tKJFzZaDCevom1bHouw77hyJtbXY7A",
  "key32": "4iUqvB9RoS7rvN4D2sdz6i11f7iRPgtNLnaKuQMPZ21NxJTFs6ELCrPabHy9wvkS5ApjfmDFPgAV2KuHCVBvb5XT",
  "key33": "gvoR32ap7vvMKWdQxsMf6bNBzBSb4hzeDSSSZRHjSJsGFPrVBpJK3Wqz7mzBd6j6vRTJ1kHtPW9aF9wYrDxr2ih",
  "key34": "3owJ4DLnaw5DoHSvLa9kuhNsirYjrpDFcnCA8CcVqR8zLGLAonbhoXxrgs3cxzkgzKdFE2gA1sMhFTLJmebU8f8w",
  "key35": "5DSHbNninbSSnpb2Hwbsc77uZkwaWJ6ud6PU5wpcUAcdzhiXbfA8jrKeM6TsCJRWdDG9fRbRaG8TqBsrrqWxtFm9",
  "key36": "4PmbB2x7Fp1ZLQBMLAAijJFN9uGkJi1QJ5Uhnu7hzWJxdQXgZhUEyry58LuS7oLoFb4syusemgp9s4RHN1rjmE63",
  "key37": "4pym6KHmCGu7ghFtC2Rc77RPAro11U7kKxebE42T34LJmRTfbGgBY4Sw8UaFZmnAbFCHRYtHbNjSMQQyMUqQ8ERF",
  "key38": "5kP6a1RUCxqKMc6iVHiDhwEyRLAFz6manLPXeGR1AeDiBNyAWiCtyHSTpHCBbWrZGMLNLQzM1mUs2wpKHYPBk3TK",
  "key39": "5k6khnDS1bzQkNwU4FhrzUT49jqw5XtaVW4WWzBwSqxwpH3eZRatTkRCkUAGZBfWuxRsqrvp8beW1FvbKDn3QzV7",
  "key40": "5wQqATiAdqrugv45LqhERvmAgN7a44dMA6FPFPaeQMnXUpvrYKJVVTVaxEnUmTxEHPaTRxJ6MtCRNxXnRRSRqt27",
  "key41": "2YueVSY2VDKBk8Hka6uzYBboNf42R5p1iCa1bDr42JVtFKiGQPEyEF84NYrPuy8KYuZfJaSWHCVpSfncXkdC9Cfi",
  "key42": "2nAdjG1t4XJd8RFiagJeUPFWA7tbztDNnGdbGF3CdoQjawgfqZSG11LTxV4MszfyNvrJDdi24pVPrRN5oAhfUrFq",
  "key43": "5v8u3mHFjsVghNqi7rcRFoH3Sh7LPY5fC4u9a1zHJr6Jsfew3epGbqvxvvNNB1eaEcFtYm3rKG7gEUsKhX1msLG3",
  "key44": "38fmk7AXoA8EH2rnnzDzscGmLm3P1uYQXSZCDiaDSweUqyZDtxFWkfYcziGc6rkFbicPSnUHFNg8quu3LPfHAL5X",
  "key45": "2WTiZ6LBQLguc2GCbWF7Bh18A4aYds8WK519SKsXxEX2jeaLecxDwikzbotrNgdrjujf2EBXJx8zXtrkb98BMGUh",
  "key46": "3bHPuTJBhNCfkwKF18gYdm4dWARdZYNsZej3kyhqfcEzGf7RsbdGf9Wi94ricY1cRctzqyszu6cwnXTdTyv5Usud"
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
