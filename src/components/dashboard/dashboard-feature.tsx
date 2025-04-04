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
    "3ZB2Z7BiY7ZrTPxGwFZcAJX4WfAWEKTUsZxAACBWkNPuL3QAELqnjm1o22xfZ1cPXUMSTUgJMnqnEFgu1yf7EZXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2by1bWtUwgj65i4QKRuNXbu1bxsdd8f4is7YzsZuo2HHmmMZ9igi4yE7qaCN8FGRS9Gvoqxk5ExrZ6rVB32AxUzP",
  "key1": "3D7UycizBzqq62Npu9ncN4Fg1HwPZTsN91YNpW7MEFCZHLPwFaxz14FJjZcVFyjpcrhXF9MmSuovCcnN4T4Thurf",
  "key2": "4WUnb6M7gzknhawRK2HYpY1Hwacj189gKav5S1Ky67djEBa3GfavUNYV9fRWuXF4afEjGs48E9JAY1RKhVd3QRKv",
  "key3": "5zQAPhyNbh48ZG8rAKFWmyw5fJP6hjnHBV9YWRWqsc5KNnApFPywQuhmNnjv3qMHUsTtcDEQx2MNmFnVQEDfKfXC",
  "key4": "sDbVPFx7jGUPA7ru6oE8VYmBZu3vqxxxEsW44UXxFV325V9YzRPh5duyGGYGi97asA3TnRqoP51Be3kMM8PExLQ",
  "key5": "43jRQgaBrLnzSAkqvzTK5qecr1b1aw7vWZdJkVpKirQtkrZpjGAHRB7YSXXsVuKUQNCnP791VQTbvuVLTGu8dauA",
  "key6": "313FiXX4qSE12QtEU42gXEtkeEdpfCVf4cfbX5jo8uRKYoFiVfquDmzafMcB7gRDnXoP7rJctyzyQSGBRixwfphA",
  "key7": "4huXLfafcm611zvfQkLwh1ndGMhucLQfNkEFn3NnKfqKiNyvuKKN2bhEnxGAMX43YLnEBzR6ShniC61A9GwEVRNk",
  "key8": "5inRNdQdySzssfo7WL14Q93AmAUnuUdveVsoxvpDPGxBJzKXQAZMKw5Rooy8qxBuuMirJy1hUeGzjmnPYH5X5wZF",
  "key9": "2Uucmbf3uPqdmNygjBJtJWazw4QTzJFPmSA7UxfthcexcoFmTmqfrV9gkELdiMtd2Ro9avDErZE7Kj3wxBwTHFjC",
  "key10": "pyB3LuRmiddBYdQBuVs8FUbkkNdroHHdFdE1sJTsZkg33uBcBK15Buz7yP7foDv3TJRiKf7BEyuJBekVijobHzN",
  "key11": "3m28NtvBXK3wtpZCNxSznuskaWjuto4jr8grbrFDPx31C45ycSwCxPaTCtVZokQVNEDeMazyShT5X3Zr72gHFoB6",
  "key12": "32cGFkiwCUjxtqnn9ogNLwfABmJM15ntmyM2e8V8WPHe2jpPSqqSEQnfgw4U8NVJKdX9HUkJiDKfirdJmPDMjUSQ",
  "key13": "FjzHbXabBdEhh16UToqD2q58hKfPAmUBnZjfSja7YrbBRN4EpVv9DXHKYkQ3oDDuAc8nuSnEJPZkEXaEMadyzq4",
  "key14": "w8YTGwjNbqYQfF2kAtgtEegepTYifDtfbTVrqGcDgQRh5U3kE85xdnEY9q9c7ABhssGBvSyvfioeB7hyYvMvbPz",
  "key15": "3EdrWA5GDDf8xDCfzQcwX2JjXuuRYxTLABMdewvV7X9LDnR9FKFndrv5pyGyvZyHDmLetH55aUNqsKh2HeeYSMwx",
  "key16": "4NsAkTYwH6H3xboXhvKXd2dwepMZrvcQJBSfvqXuLgVT64KJuKym6ZEzesJ3KRdtCBK9oSdw2ZGDzapYkbQEQepk",
  "key17": "Vzg1eZFzVbavxAZLGXoSoNoHNpkHC5VWkYaUwhQMss27iZA8iepQaWCz4iQ2qVWL9FLwJ63qtnDkBCDAZRj3fKp",
  "key18": "2wiPvB78XdKoakTUPBFGjhaXhAXRuikSKWcRedJ8hmevSKyXNggYHGhi8Km2m9gyFUuMqADEHbs1XjUyYUR3RJzX",
  "key19": "5oyGAYL5EAL7gsDmcTx1usZz5tvo27dv9NpZ9kyc73u8y2KVXkAtsGk4LhQTJS6K6tTu5wf36eV5Mg1qhoxLry2X",
  "key20": "52rBZYenNPS6VEAWaHdhLpbBZTQDNjUXfuxEKUsCfCxwsujmBMFhqPjRWspAMKooMB3fQc6D1rrE7VjC7yRP9Djo",
  "key21": "2QfUk5MEnY6Ej3CZ4cs9YatT3zrHdtiq9iSpVHPh1RgEM81aiCEKA9WN58ktjuscoReLQEsNqpDiysMjryZyXdPw",
  "key22": "52qWnFH8jqpSRpvVruWV8fbJyeW1Bn2uweExx4T1CUqNi5Mu7QFtiDHsyC1aVnQi5zrMFhWAQEGEoadqWtR6N3N4",
  "key23": "hLkWKKgq1Pa5NujJNdDdZkfr1bgSVej65k136ywSBm9EQS4JACgxNu3zbRCmQRWvfnyqzJchSwWzzfehngv6yHe",
  "key24": "2rpRXxyTJ641FPVE6cEH5LHgLZFBV8TnUKeuoR7torr62RGvyhzGrcZCYd8aTDKEBQ1oNG88WenbMUtQB6Q7w6kF",
  "key25": "SubFwPeZMXu6ugKu2gPKFhY2BLtVPdeAJXRQ9yAF6qVNddMNDCfN9xbJG6EkjqC6Unxx3L6889qEwtW3XMWZViL",
  "key26": "5kxXR9dKxuEMRmDK2sLDbxD5yt2ZTNjnoLit5vxKLL88rj8EzjXbHU7BmSQdD1foxtrbkmcbjSfK8LdpPsXEdxWz",
  "key27": "pqwpAQjytNWb99EangAfet2npJvZs3GGrz9wxJ1t7iedFsex1f7SQAMPVLNmNArQT6xzCjRgoBeFZmfREWy9Xrj",
  "key28": "3zmrqirduKkxKEbutcv9P1CmJVrSAPe4C1sEwA3mtuWk9dSsKjBChP62AZnhoLEVg47DQ3jNHWcXBT65Cb2dwk9o",
  "key29": "45TfqDmEkP8HpKxsGskHDVZPGL731UoLa9f9JXwvRwYo3LkQCpzgznDGmJecDZ9ahH91gHqFKCEujyemUC17us6F",
  "key30": "49s9vsa1anGwkKEm1uHjYje58TeBuLg12drpSthSyz29LFC9XrNGkWFjHW7Sqb3uNXPbZZ5kqgYud27M9GtkxrKw",
  "key31": "5viz8Xeiq4Gz4KMdzJ5Ws6Yc6dX5c6eJPJWhNTWP3SerxYzAvEPwgLMjPbRSAZRszUzZTafG1gpgXpagkWv1dbGB",
  "key32": "22uTVAFaURN8PmYq6uaFdDLgJiWnjLojqaBrAN1kgjMBux711zexaWZ2oWCaVrJpwsFy2CBRBcqqaRMRx8dvCLjp",
  "key33": "34Vm1HqNKPzJqvur8svrQ9UwDYNJG231xnVUu4ZZrwykzZnt9kMdQaSBAwpW2GusBjB6ZsUEjnf7xsAsSw6Fwqm9",
  "key34": "243pnEwvSQPfjiAESXhg24UoU8HrGLqbRBakhe4dmoQFTnPvpb9bfoahBCTVWa42661vQgA3m1Wm492HZHB9kbhJ",
  "key35": "26c1vWUGMtsr7f2AcsDCt3CPoCUqJnmuFTGSNZUQGuRAGHQz6fvaFujxCDbgGx6fKcfwRUvxdsf8X1Ls8B4VvxUm",
  "key36": "4psYtHrDR3256NmkDHmhoEqapdCpbkKwhoPM8CG1dTDXcsUkxU2UjzLxjkpNSYKQHovxZHbZ13bXFeThS6NBMS3e",
  "key37": "4TDogD9sSgzE9vzP4TWk38FoVeLuRtveGiqRXcW2L6spQseuHzH4McQWyNSeVnHVhWVKuSnXpdXbwis67AsdXZnR",
  "key38": "2vXkhRtRWxkW4AJWWoxqTUKmv7qBchK13HVUqQB8W4vxir5JjnKEwVMAAA34swqewmEfdjuYmpfvtW5xjEZtv4ZZ",
  "key39": "dj2vBgFfHzhovMPBjJkuUX3RcbefRFgZ9RSgftTrk6dxX4nU3efxznhWgTg8EzDbz2RWXYjcGs2prEfLk7dLWtu",
  "key40": "PQ9Afb5CQYyNw6pt6h8uuzbMJcPYDWS5qDBJoubXYf7soDKx9H4us4Wk2mJYG5BwGKxFH3EWSWJUGdHQ2mqbem3",
  "key41": "N26TyenbRrkttaizE1xn6UryLjhNgAZ3hwBrbokTM466hzrpXNtGobwaBnvFiU1DKU1s6pDyH6dKj9fLMCs4tJ1",
  "key42": "2eGPQ2QwLsNdeWMi59uZ16ziVHKkNULggu24MBgymtLjW25BeNPEYXq5LH2bnvZjD5rAMz1PW7F43z8rMmWmXV2u",
  "key43": "45wVCcveqVnM62bKuHmKKVbAKVsXofUTumkh6EhoYsMdCd7JroScHBkrzris2wtjaqS743gCG1RuS6KVTciy5osu"
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
