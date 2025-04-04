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
    "3hTbHCeQU6ZjLst2e1bf5KfxDdWtNhfdN4UNab2xEwZTEKUptzLu8vrjQxu29VVQW3A6AfSGu2jfHsn4srrD64xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAN48qrzCrcq6uF2sLvhv3XuzSrimixhPAxwbc6TvBvSrPX9HBTj3CbD88ojRwyxuxW993n4Evt93W5B5uvB4Fe",
  "key1": "scv5Pz9kDG7UZKD9nNq7sUxYeF6ehM51feopGdEGmYYTcgjsyfyXEWUJyUUSs3U9H1CcL9pjHbqCnE8LnMza1gc",
  "key2": "tZjQrSpVioVhLRERRpyQkCmnMPqouwpAzW3z1GYZjPFVUJTDpPTZZQ7dhbRLu1geyZfoV4xocFWNUH5ZX7QfMXQ",
  "key3": "2RGYdSkd63EaWMPuG9j6LQbMQRrhkyPUAQjmUuaXa8Ez4HNdSfaeRVGG7Q4SoLQFNggSXNHrwot2pAXRsZdEafhN",
  "key4": "2b7C8LhLCTLMC1Qzi4tCWRPbPweEiyevETCGvyUjhKjpdB7bsyPmkvvJgXqd1Eazouj5hMH3kcXPhxzsCCyZSfek",
  "key5": "5NkZokWowQdTNeQsUdmHVWBYCuWZgZC3byDEpQQtA3k14rZyEqmoAYbYxvStvi4wN7d7C57PezGnXNEMBf5pXBYn",
  "key6": "4XQmFhJPYr5kHjGsmAbFVpn6dc9YYsegMwAPDzePob8R71G8uoATmTHBKZ77nMZi8Pp1kCDEkeZKnmexpoiXFDwQ",
  "key7": "59g8JspMxEhdb3NequRK2bKbPtJqTHJrX4iccnjbzVGN6Z8VLf4jtVhEtpJaF7AGVyp8pdvssDnUNbVSfHCisYG9",
  "key8": "3jAK4hXVrgxCq55FJ3nfE2M22ytmMoMKZ5FQ1WYPLvFDVFdLbvQ1HT8UBtbtFwdE1asiiW2i245X8QbxMfK9sQjy",
  "key9": "2jpaffYEQAySPMo7MHmidkmGiT83ZgTmry4bHL5CaepjJVtZef6gMmtuVCGa1pr8mS9NExRAhtYWhse1MnUg5uwL",
  "key10": "2VCVXdGiQgUXKDMofxyzVHXetzBEy5oNKQtG3Y91PvdbQikYDjc2qZvw4NZjN44VBxgJhaSFqmX2CCkVRTpmiUho",
  "key11": "sgaHgg93i4tC73NuqC7rwDspZx1vnBxWR7g9mnKooFBWmsK58x2ifrWddsegpLpiGc11F2PK3YSX3NuAde6wUgS",
  "key12": "SmfjSksUfEnvy5ozDM7Ea6712PTeXDYL83ax1A4VEthawCLpxmnAE4UodYTvKhUEHqRmTr6kpyTATHvqms7LjE3",
  "key13": "2bKrRSUT6mbbkY6pSawZt1XM4AHUr3AYACn4f5e9oTfoojsP3iMGYLwMiBeG4JacX36PG4umSXnkMJz8gMKHBRgd",
  "key14": "2n4Cme67MCUZzPqRxrG5joVCf4YZqnBkpj8AyLhCm8gSmrFVoZuj4Fn4gWRumY76brXhNcXzBPvA121pH9SbZCxE",
  "key15": "5jXDwvvFiKSp4PQVSUX7sH2XvH4wswenKv8N7TimoarNCULrApWR56PjSXqA6Rg5XqpKXkRwjR7QkX6WUcXzE5d9",
  "key16": "5Ht6UXe8aN9ZBqCYEe3XW2gwjzK8F27kejayGKjH3UDaEVaUMaAPm1XwyzdiXUgJZfZp9seELU1BVXDDBLpaXbGR",
  "key17": "2PfauY9UdoGX2qfV1qzmf5Gyw7BToFE5uXZU3T4JMT8e3LULfdiQzssxQ3vhAB8PyckFZVVVhe3tD8i4zLhWemiL",
  "key18": "3Bt4qB3WWZUyeJQPUjGsjMHpEFzvJvWTEcwoDSvdesVY6xCf3pGbTRG9byL7H7p9tVoh9HwWByrxme8rtQjyHWFd",
  "key19": "3rNSrq6WeaxwsybdcGLTwA1X24C2BktRMmgSi2XDebGhXXai8GeBwucjDW4KnBYQKtqiH9SAVrpuhXnF976gvDKc",
  "key20": "3CRuKJd24XWobCohYvavj7jbGCryMvqXWvaptbM3QYeTuBo6GRjxiy2cQBxyFJnNiWDSZmc2sSyAkxQk8BDHfGkU",
  "key21": "41xJPpzUZkZ6wM1XLUSgSaMxywKSfcNS8GrQY7imxiKsFLmBV6BVTcoh68NsjdMeaf2fQEffDZWJAJsVdjvMHwgC",
  "key22": "2J6s3kz8mJHgKiwLUwxgNor3yLGDNqC8UtV55S6NCSMWU9CW9KvTpTbugcXA23HfMyAzRsfVsXJotuXnMKvidU2u",
  "key23": "4mFCFZ7muLiVRNMoMzSYeoJk2cQ2L9rE3TpJUTsajTT7cAgyNFrCopF3t9d35vTDZiKtR6BGjUxJNJK2zjv4AU7M",
  "key24": "nWFDqurjVF1eWqQMyoeDb3Kp1CyGFrqhG9krs5xNdpotmisNCjurVFE6PEtgxiU4voKHCSpdcx4hrdaNsmUxKZd",
  "key25": "2p2xSto9p3Yqg9h33HuD4DiRcW5roPPZBKTyJ9JR4xtKevL2Kjbbw13Te5QauFZNX9cEkiavB5Wa9vUNaaFYz6u6",
  "key26": "2QhgotV589fvGwRw8uGttRUCVzFQmdEtuLtoqpGnw3iauhhYgFayFaBsdx8RXmsn8Q5MbSYu3hQ1emwyiu9F1YcW",
  "key27": "x3GCQzUxcpub1cbszacnRhze6dxohCzK9tBvwb1HPEvRUrVjoiWrSEdvdUudY186XMmUQr17MrPAPN1A3pUcLfY",
  "key28": "CxsecK7iYqdeeJ8X3cwN93tf6YxvHBieSgCxEpdUjfYZQ2yjoom5ibn8gTn4CNjJEqbs8tyaYJLHEjPw37mDJyq",
  "key29": "38xmY93kv3ppWbpTirkY6UQ4Jg8e7wLyNPNDP59CG3F3XxMRdpxfePrz581x3FBM3gQ58Jm6DUi54VAzktXLSgzw",
  "key30": "3DsqdPorFcczRrtrhmGmpHeRTt6Hc2KYgdLr2DFepr8Jwb4yRP1JSDAqKfJLdMzPhj8HRefqxnzH6FweSB3ToWft",
  "key31": "29UuPEJC8QX1FAHF89bEm4ofuvwKTjggjHGM4a5RjztGwEYVUMF2RabXres2qFyZN2LuZBYSEG3UwjThCy6zycf9",
  "key32": "2yVVDzffkN6Rn3FuuLbxK94LujiuGmfvJVLfGQDBDrArbu24Kqhg2tChqevuzkerjir9YK2H6pdZmxicchrmEU5p",
  "key33": "3VyGStnfgAPq9XaXpf98kWoT1nh2hpBFVWwkuprNsCgScfYX3iYVZtAHsRcGaHfmUsbWPZj8iaNkSTerDJ5UaD6s"
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
