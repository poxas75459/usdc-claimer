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
    "2jz1V5Qf6zmJDHjFaz9jaYJQtvXeaZDN6EbR6CdPqwGi3oysL1uFKYLizmSP1UXirEizqEHbNE7tZmEtQywYv2JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfMqBesWvKucPiQywXDgNwEvJBsiBDADYc78bjHS9oFcTVdCy87aH8PyBFQKJPkhv6gCDtKPT11VvywEGrdS3J1",
  "key1": "p9d1FYKHA9UhWBy2Eq1JKz4nrcZ6x2AwiFVAsyTjJUaY26by8wmBJFcmpEKfLFfu8GMoib5FojDTYTiHoccffVx",
  "key2": "4H87RbjynETpx54RpYKc3ku1dZG7m4eBQ1ya6DfNFnJhzU6qydgfPu9qynFfYkkCv4HVBjS7W1WfMz7w5BRf6W7u",
  "key3": "2LpPj916vVpxSRDmVa3iTCQHMPP3xe7cmJbwHvyB7L9v6c2WRG7EkJ26pVE2pg82MR339NoZGBie9FDT7tBhT8Xu",
  "key4": "4C8wasPV3PM7G2ATQ2QFKa3ejXVLvrK6J7wpFAyYjoEBuf8u633GLf1XdaQFa3K7a4BzaAkK7ir9eKuwbh9YoJLC",
  "key5": "55WFZjS8sTpnwWpmoDnWdFXLoVMFvY8m6Hsx9iiCRzShGuUJEusgZBHWjemGrWCun3mgFR2xKQmQ6YEYRx5VLAMW",
  "key6": "3wsyNhqdU5Gn7zQYkJ41QNSaBPzy5Xx5Z7Evgpr4GzhPW5XLv5qQE24s3eYxvbSCbE9NZ69oxM4c5bDQouE4yRNs",
  "key7": "43vkg2gHdkrS8xeHcWfmwDe8ELY1AEbXAXiXc7vUeX1EavcEmCFgB7xMgo5QoHn3kQA7WgzPpn8ofCmcYXZhXppg",
  "key8": "33oPabmj7Zx8nYbdLTYMyERioZQtbVfhsuLnCThjg3De5e26rgDxWC3cn1vJc39oxucGGv2SQb3C2zH16YEUSmSX",
  "key9": "2mnj5REFPtM411796TjyQMYAjXmLN1nHyuoucexiJtdiwPDuXW3MV8eP1tdzca21fo75qeVpnyQrZkyaggCAKgPW",
  "key10": "2T9AvW7BUwVkdBBvNWiFBMAJPpQqrrhGWZ99mvSK2aWWe7YfmaTbJG7snUSCy7KFvgoeTbBtpGSgk24jLnVT2byT",
  "key11": "4vhyUDG8vsiSveYqT25WpFm5iRNEeiQv2yJLXiAK994n4mQq8hR8xGZKz6sPDSzeFttEDC2ZevGi9Ni3XPdJTE1N",
  "key12": "5r3gqTveRJQGGpRCnDDB6ENfKAXkKb6hwy5bS1ayhYLnTk5rASeG9eKSsVXX2GoUGAWwBQxu4ex2c7BK3Y3YfSUh",
  "key13": "3QMfRqQkcuZSNjg9jeuabBU4AryK7iPxuxNMmX6EoLVPhTe62jjHn8C8hL2Hd2oW1yEn4Ndr6BoZtMK8DP3dhLym",
  "key14": "2owSp2DBsabgWDWmzndQ6C4iphN2nkhFeATViDBN8uGuoXVA7EJeDFMeMMXqnGgRcQZJ4ucQRwJpmgdePjW4BYX8",
  "key15": "GaJFsrTn4NTYTnv9U97bcqipn7AvxPCaZD9KSJ4iqh9b9gHaqG7WPfp6KbYjtn2ZLgpupb7au7dsqLzucnkH2Je",
  "key16": "3oELnePyCGgNZbpk2TFz5yb8wLFC6pRR44nWXAaJaARuwd4Pr11KDPdgoQ3Cu38dAAHRJdmwMoMzmBtBehNn2QK6",
  "key17": "1idiMwQQykvq6Gg3Fb79w3HbcuwkaBBmTw3hpDy3eG61TdB2RfFHXx3QDHaNZhWNoPe9KxdEg5jjWDjgioWnPZk",
  "key18": "3DV4LwX3MDk7NV6jY4BHin1gM1kW1DS5o6DDtsXJQUNsyWEq4ozZTYrueeUnZo6HYk8dBZkEq463efyD7JQ46poZ",
  "key19": "5oiNFiY6ug9CqFu31DvFCVX9rdicHuM2G374Vo5bv2qdrjeFboHcW9adR93FaLW4BsbM65SJT62wBVadQBNXeG24",
  "key20": "4VF43Tb5CoSS9H8TrEGPgeH5qejDvUpfaYExjHPySqevEcauphQpqVz92V7Tti29GRozoEXBWUVMdxb9sMMQ35Fe",
  "key21": "4MRX26V1dHHsJFqFiqMSF3oskS4uTKKYQt5PoMZui3Rx3vgVwTexo6hEdqXx7NBqKw8WVwJRNJ2sd5SszYUbTci7",
  "key22": "2j1zkNKNsmaZeyrbTxZo2DVhQS48K6BJGwGvhvpNCnXuB4dsDGg6SFJtSWHiUB73Ahhwsx8TZZxN2sqPC67YECgy",
  "key23": "5Gr9zWmjXgZ7nYEiyZGZScMcoUst2zHby6BVGJunbatrxoLbsL5HDE3oj71qHKc23grk8cndTaDja2chhd7kkdRs",
  "key24": "63Wg8T5TpiEjfp6wcrfSarpJb75VbWw4a1MydGthDx4kfpqYteEaESHbiWsqxdudnqhfS7EtmaSx8CsMkxWjQNwC",
  "key25": "DRU4BYQByhzen43JKJ4ixSYiGg3ZGMaLphe66jQ6Ji4kfwY2AKnJGS4aCzJ8mC1rTgcgtQCB7eMzN8CqvtUpqNX",
  "key26": "ZRDaphPv4jUSvxYHtdexx3GeHTtbSZygivcRxZ7La8FNqAi7X9YsA58hwFVD6MnTvS22qvaKah2iU1Rn7r1E3tQ"
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
