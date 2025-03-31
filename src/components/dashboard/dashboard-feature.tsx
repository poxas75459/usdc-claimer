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
    "3UJU5aJWQzjsKK7bcNjxBGrgsHzRg417LFY2S7M9tspmZoJJnH61NjZATGFRLrKBAsWfZV82zZG8dcgKDh4TLwbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5XT3hVYTLExoUuJjrUwDZ8oBSYTmaDEr8qoPeooTdVpb92Mp5ub279zyic6sQmdbQvxZFUaz5NfqoFjR6atTgw",
  "key1": "3HnNtKWpd4ExY9YGqjFAcywmdv2Ytewp48MnaM5sQJMk1Z7WnsnJAAZyA97CJF8jEmK2CvhC6JZL4ijkrVsme9Kq",
  "key2": "5TnRHH1HM2an6rxUZwQ78J4K5sivuyZp5B7mL678AQC4ZiWNuUtwVNB5JJGMLUVAea4aK7koVyqzZxydi2Hmr8x3",
  "key3": "Cx2FaBGfiAM9EMiwavo7PsHhYH2bx33H2uf9pZHtdbXUcbeMfuF5Hez6BNQZnphpiVjkeftMUd5FvzJhgP5zKPd",
  "key4": "36vY3DhHbDBoGdTGDEnDv5JHhycr49BeBptntn24Myydvo8bK7nEMFzE7B9hA19xEnNfyAgS97MzD2X4pGVVqzkL",
  "key5": "3EVgN9xcxacFxEwouyRV1bSBDkmzX8KVRQDPGnsP2oHUzFKTn5R93eMCtNN3GjRXEMa6Ux1bEVG8MrkiP7TMGnq2",
  "key6": "5T5ef61sjCAvU3yc8wQXHCRtAKwXc5bFWkTp8KAVSBCx9aqfAa6JS2QHUwmT1oJddfGDMLZpiKd92wCd9WKoEC9Q",
  "key7": "4gBTQEAkpktvcG6jWWTgvRFyGuE52ifwEWGHxTSprA4dsFWCE71RtwVWnopLpRvUEWbgagKpB3wwraPFaGbATeKR",
  "key8": "5NBMNYH9BB2vwkddni9jtPtd3uXZkPAD8U35t53qzvazSea192yPBu9FoSBmeFczs8z6hnpPeCSxNUTQc4MSKkrY",
  "key9": "4DH9ExE8vxCANNFHVkKFA87yVhJioAcH17yimNRCFJ9ctE22dc7ywBd4xNhn4XXPGu3LNdnoGe2SuTH7abyDR6j3",
  "key10": "28Jyn2YeGXjxYs65DrmzphS2wZdZSfps1WL1etGnN2Gb84mTeqVm2AqRstbBi1Cp5LhF2Kky2p4L3hjTEVe4Shxc",
  "key11": "2Am6ZeginMWzsAmAYk64siuqJWaYmmGKZy9BgExa3UXbBUE7dr9PFQgGDVEWZACb9QJpvK8yjknL61a8DtyD5Tx3",
  "key12": "3JbKFfDwc8CCm6kEZFRgwmE7LSaT2og3mHqkKZDh4iYQCBBnGqE9EMaYSqMF8wDCofNykMPgfrm8LRjbB65ArvnY",
  "key13": "5GeaAt9NR56S76LAJftaK6PN7Jx3WHdRXVXGrBYCybu21K6rKfmWePoH9ga9RDb4jaP9mkSjTtHjqyE779udgWtH",
  "key14": "5t6t28HKrtVwn4m8Lt9irxS7UukGfVKXUWVFiat1KuiU1Cpjv9CD1b6Sn47ka7DzY5JrWv4ujUrHv513eKSu9Pis",
  "key15": "22rEDjTt8zyjqekqpxZTXJkN1qJA1juVvPqmWhhibfDHzKJo59xE8xJHjk3auPFUrM7xHc8udK7ne3FHDRpM7RuY",
  "key16": "2XPP6pZiFfoSqJdU6Rbkzoz5VDaC2cseBNpbP4kNPD9Y8Sr9JmxDCyB3wqoaEKm9qq45n2abycCSjLoHaTQW8JhP",
  "key17": "41ievmwqAD6N9UsdyBB6v2NGFZzQPeZvsAnrPqxzuRAX4z1JfgyHJCoF3sjSHrGprvogZGPKTRgtRVZU3E4ewb4Q",
  "key18": "4WpuUD9sQ6sp3m5F3m1EUUPSG3z54S5XYGz7HX6cZhsAvE1hnvHE3cKim3xwGhPuVjWc5vPoEuJBjV6cqxGmJW2s",
  "key19": "b1zw2N72vKvBqxcuXcRM7NTFBQuPEnx82nc8DinghuRSoifWneSRRkffj46ervbDkGB23x8mURLmDJEwE9JPhSZ",
  "key20": "nC4A6Jwf67vhZTwtBfydpf8zAC3462EhvftPLatTFMLeAJ75GeLwRbUsS6JfChgfNeudFK22mmjv6LmDvpLENz6",
  "key21": "BB75BCC1StMVqpbtr4X7WkroRaUB28ewnpuyh8RHdoop5kFWM1teHyp2mq3Jy7kCPHy2MfEEbLqwtVvJUQPYanE",
  "key22": "2ZZCzB2idPra4PpD6wpeYtpGexHGgZr4iMe8Z54fLNXLsJwx59EtJJNf2YvnKf6yfFenuSrzg2RD69bVarve6oxz",
  "key23": "3g5JUKBc4TpwGNgsoCX2v7NSEMRuPzSbDyxLUn44nG9xj8U3Fd6Tywho4dnmXcunHMWA12WBsKY3jZV13DkK7JrL",
  "key24": "K2AHUNFitqgaz9vokiVbc58KF5C9GbZc9AFD2vnQwrBkyWdCJGn1zVjVcGCvGpsRQLKBzX3DXvVaTKYhWdsL7fp",
  "key25": "Qqzz92A149Hx8oGzQ3vPLZYgf8WRRVMs3KSQUAuA3n4HAdL5tJRSJZ6cwmxmvA3aQeM1gxPvvVo81z6FUCNXWfe",
  "key26": "4aMVueJ6Y8fT4cTRxoXZRGbrfukZYhoH26LXiFEFm6v8ckgfHMr9YjTioe9Dc9mD4Upf9w8NhnQcC24iEjX42Xdr",
  "key27": "45M7Z1JWd9bQ3DLFdxsPuMxvb6RyL2BsvgZpk55y6ByUAMwiNkP3kS9UAc8dbAef5FLkbAJ6i4y2dfHcRDUUGx5P",
  "key28": "38VAQu2CY1Yjo4uZMhvigpDCMMijot5WdJ8x55U5HzKjGYnUvGyfi58DTxNihYDTaXLd7JEhKReYysTVzN3X9DJh",
  "key29": "54nwQXaNGjHwLNzpscVXd6BnZJu1Uq1VKQ29jEPWpkGy3msdkd8gWMee5UDW5LZhHRSArMc29eN9w6Us7aUnqUNy",
  "key30": "5nbUUfTw9eZgW8QA4eBnipwhKv9sspGSZxSfvyCoTVTMEedVtp4YLnZN3sNsz6mmy55yCfQz3NNkkRPcgmUsyoa7",
  "key31": "5Jp6kZMGZTG52WfEjgHTTKV2nanmQgritp7fwk7B9gK7qHNvQMhpGyTG7hpv3eqGTe88ryxPgTPWGnd5KY33Jpk4",
  "key32": "55kgCybiYg76jLM2QDDjGUKXjgxa5wprUsbaPy2zeN6DdwHKnWW9uykLuoRd4nbPAjiKS2n9ewQ9JmfFnL9j9of6",
  "key33": "5VSgMGdMcvBPrVD9TS7mRoxP7qWM6nwq4aT5DgVzgyGQaWoG7MnGdcXLpeKGHjWangob5fGtWzbLGZvTVSzhJiP",
  "key34": "2KDKjuRMUMBWov2MkADXHqChZhnycDaok1rkgMKsttoUqLyTG249E4ycZSBG8RMk8R3YP57HydBSg1r23nRYBqAS",
  "key35": "36tfY5eDhYrFQerL5MXzFy5EkNKJU4NPFXDSWrd9dHEY7rzBjfesVjGt5Ly6TGL3Can62ghFjnCJVXGRkcn8H4vG",
  "key36": "43C4GckeNCTSeHAyPjUNaX8aursJp16CPNm1hk2mMwvw8VEthHyrrSPFNudkEEmmJGbuxU4RuxWGc1DYSSjwe6ni",
  "key37": "3utV7KLGeJng63AaYFHfPAB7G4VXeqfMt4JKkPEKwTR8Nz9LgEd1rebGkQdxK5cNoF1oSEhZPG1TomzeWQiBFQzH",
  "key38": "2E5bGKqwbDvPGov2jxijYgATRaAjCqbscbbYb5qghVfLA6KmN4sBhi5SBertX6nqS9spNRRNZpMaRtwxCc7n3WxZ"
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
