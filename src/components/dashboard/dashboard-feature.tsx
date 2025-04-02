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
    "4uiW3uMBALAFg1YGkNQm9rmitghL1PYuqMLt3C6UHePYEwEGnuLivB5dvzPYY4PmvMDeiBpexsDycVKM93SaHjQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJmwQoEzqteYACmHcAKMUfQTkSt43pxLzfsz1Am9JEAUXZv3nbsDn1QJC55rx4CPN7nSnrzM1JuPt1RmjRfTcrg",
  "key1": "32CSmVHwRgY56FPVk8HbK5fAQkUDv3T9FRvSFUpqVgHkWhA5RgtLFaL3efJL3kHrN5GaP4zv8qCsKHqUhy94SBsU",
  "key2": "rpyRV3CugjorvRQM1Ryn7YpQrAAFtKhgAkzzYDnmMxp1FJTGQeuQDdKz8TUXG5PLZx3o6BteckwJPHPk5yWAQZk",
  "key3": "35rC9k6SqevrW1WW3tZhMm77eYGTc5hCDrXfSgTG28kP2xJhCaqtdnBKv7CFwTguNpXFGsTYJAzRtsgikxNWUohp",
  "key4": "5qjG7Rs39V2FWii65VT6zk7inJoniNqhyAaMQdHC81VjDgPpEecUmnA4Gjay84DE1gUtTksWajCuzQiTYQTag1Kh",
  "key5": "5X99DFuyrc2oJKPXLhZhR65Lyf5f5jsHr3oQeqJmE17rujbvP8ZNb16q8uUTxmHvCchsPQEeDbisMJMEbqt55J3C",
  "key6": "4jxe4KLpjuqrzHf8mkGtxhtQWRvpAceWwS9i2EoQfWYrZJXmTqed6XcURbhWfLhKgGFcsYpTuy63jYQry5L6vKv6",
  "key7": "mbtmSymkD3PRM6b6B7SgfsDQd51dRWLqbAQ7deoPZ1SfbaZXEAydedyzX9umvFia9ZRfpfTNGYa5GQEYn1ASa8m",
  "key8": "5bCmVEq1ACPhStcfHPyBbzbb5FfNWUtsUHtSuqqeAvFFFqzUHbJ5do39hxCsQU6krzDK5xocgGRRLML41BPU9kii",
  "key9": "5n7DyoEVBKQ9Mh52yWdzmsLQYQi9c72TwFv4HibVJTU3QiXQeDF9DgXxeXotMEGApYSKyatFGQi1LC3nAmEfQaH1",
  "key10": "29ytVShk62Rxuz3UAYY9DQsN3gmPcqiTckTiyK812AivNF3u7qXaB3L276RtoJ9ZjpiwbxSqAfmiakMuzoQxh8c4",
  "key11": "2UpzxozPV1PUzyYiAdUX52d5ECncPjmvERZirKnRHhY4PgdCeamftubtVt9swWVJZuMxcttATxeU93Rj6a7Zhjth",
  "key12": "5HuhnX1Qf2PgaNf2p5pd6oc9qAkHSC2ipAAnvUjCYcx1ZyaRYY5mEeSfZJ6Ut4BPngRBcnMnaeoNFEB1HpPd6smF",
  "key13": "Bj8L7JoFKNmSyQcdBrgELCeVf6iBeqUbss4ffBHjC59o9VWL5F9B1CuzwNqWwVhY7Vd7tjFwfnM61YQ5zaYmbXf",
  "key14": "3oJYai9ADHtRSaAYypW9v7gfk3CFT6q5qpDVVsojSCgexw43m1VCYYUCJM2xxmqwwmmnoYbkDKAVdHjHkkjNz5uB",
  "key15": "2F4U5GBB47a61C6AV6tyAkfVMzmMytUpeBLErkijvQNhA2ByrF6UxMp4dyJz1NrHtWZw75PsCj9P5VvnuYeu66ui",
  "key16": "3ekNTQBtMBJTKXyLAu3MbKaW4BqS3PvAc33dpx4vipSaQq2xC1xsjcq2qEnDCQxRzVLvMGiXraCa8ptRpu8DDL6b",
  "key17": "NwJ2NX9ZG16hcT9yokQXB92BttdgY75vMoMnFLEnj23FRK2nwJK2vdYLvX2VibDtYttkckQawdfF78wnHcd5not",
  "key18": "56fa1UxHy6h29j19M6MhfY78F92FUgwWvDQCKYbTECdcwKnMMLozdupbg4QD1zTHJKtP1WT1rCbCWNec96LRWZif",
  "key19": "2HEynr8wzFaM3bYSTWiLf7JKpGdJ6gLFFf21Fu3Jdv2YGvAam29NkP1FbeURKhEFWjHAtUYErnY5pGvAtt1h7KYk",
  "key20": "2SE1qZTvenGYYfA9MrVsm7YWhCsfHcGCiXiM6kJnGv89PVtHXJQbK7SKyqmHWJtdBu8fGvbSADDGNMcp4tunCPNs",
  "key21": "279sNALoVyfHy2GmuD9VvXwDF1ZiFG8KMfx6eVEsHSdv91sxts4hcDBcpDiscKFp91C3cs9k4wNCtxvxVsL5vS2A",
  "key22": "3UBNRzSkx8dUGSKh5EJfsGmYsPkxSxM9AFydMY8m7wCXc2KNnDcgosDGJ8ExkJcw9p8nqqsFzU5Ea2grdhHkYLUR",
  "key23": "3TwkuqdcTdg1ysrH3s8wbqfY8TpKLJDkvns21oq6u2nZMByjjNcubtZZrrrUrmDoq5LqDx9p6K4agVCRBhyMk51T",
  "key24": "3vheLdhEM9LTW5urC3AM7dgQt2hjwQ5ni1QDFSaWZz8sYoD88d48pvmKABvFHM8vhmocaZvG2YQ8vR5AxMK3BsDo",
  "key25": "3nZjqMAewdzk8Pbu3m1pfMkENzX1NT965k3WG5B7KcnXdqhMTLMJKiXxjLgucrU3iWkiLQLCbo1tSzyVJWxgsGb1",
  "key26": "32aRWztVaoe4SDdB6rMKmky71bedwVuAMgCNjmNNKDMdcsSpoZJeYymqXBToNBfE4qgRYQkpHTnpmUtWpKverwLV",
  "key27": "PQDGd5pDZ99jVLoz68d9YrrzhwhncyK89a7LwZwNLbBQCF1BuQtgj3BCejT8NG3WmMxrZA9f5crRXvECwJwp34W",
  "key28": "4T3sX7djCZ3WvUMWJixz8ghxDx9iGq2yYTGhTyNLAuW2rerf2YYuqVkQxW13yHzH8DpFVtt4yU13akcXpFdGYAEH",
  "key29": "3iYXec24RVRcHdqQJPTCAuWqhsMT7P7W5GXEH2TcKViEFoKQo9yKRvggsrzLReGA9kVjr9FGgxoeAgUQ62UtxdaR",
  "key30": "nm4EiKBxW97RyFUaTrcpvychZUNiiaipjH1V3B9XeL9fRh7W4eWezQ2zshweE4ZGPgeDbmv6SF51p4zoR7BGvFS",
  "key31": "4EUFkkViXK8JA9a6XPq7nWhukjU3VBX46st2hrNx4W5UXLFJ5dApcZ3TYoysVfkNY77MQoRSP1cRTzhegCfWo6a9",
  "key32": "5K8RbjghYWSJZAMShn7vFsdUQ67Svsu18e84SacBKh5BQefZcU9Bv7QwBrRu7FkaHQkvpoVrnkFjD5QufkWsNeB5",
  "key33": "5VvpU5NVs6UgpUoeSiaQQBMsTEWYAp6wERr5WXAT8yvMZa3REeM1kMoWixZfJnqWYdfm3hdkgqJesRVgEUfaha8g",
  "key34": "FXdrzB5cAzAUiPDj7xfYbFC9eWuXcP4EdyWigAacnQiLfNSjhVNUrozwsa8CwoeUXDAwskBT4ENb8o591nHhKcV",
  "key35": "5McAg8gV7cNE1x45ErCoThCxRPizkD2C5n5KsgbcMDh9BcVMGWdmAXLinEmRx2qwzPGqCviEoQAvPskdpCQcnmh7",
  "key36": "4XFPoxBGhJCq1swhEAzpc6jVDLFjQNrBSna2YbcRjoJzzpQ4KhFn1dqKWoZ7r86ynhe9NBNpLSeu5bQf67XbeQDh",
  "key37": "54ibe26d5EMD9BBH4ueTAhfjiBneMKoDKiJG9if1x4Fmn33sgxFozKyWfdEMnFZ7VAvmz2eCaot3QuePKdVKkCjH",
  "key38": "5F8bVJbDQfnXj8qDvAFcwZT5MNavKAVXuiHhK3Twh3CbSn95kTggCyG7yXpKBG2QmJoJj5wR743uTziDJ8dj7L8o",
  "key39": "3UQxpmrgv3ZVJACAgcHyPNm8E9TrEyeEm9rvwqDcUST8kYVbhM9eQyHHo7GJ4iLAoQXoDiDckQUy71LkmMD9kmWg",
  "key40": "P3gSUabexZbzjtBvfSPM2aepmZfkiKfkTbjUEbAWJhoz6yq4d8uf8sEje5isTVD5gt77E8xPJr55cKGh7V66GrX",
  "key41": "3MfDtG7z59rnEvK7W45PTMNG5fxPzevQWJzXgw1ozycDzsKRc273JDndCY7VWbJ3g8T3feoCkpKQZZV7oiRwXn5p",
  "key42": "3ogfSdHDFjnssqmrZfLdphBwrroJnEta5oxJ6nDbpDqPrpKV66yhmHFv1iyDSczo4zZbzHLNfxEwYbRAybKySy9Z",
  "key43": "64kESWxeett6ZwKvk2uCnkPkcLpEjnoVmzuHHcv1QgZ4rLbobtLPhAKpLuwPb97uQBjUhbaoYuY2N4U235iAwfgJ",
  "key44": "58f6D3cKd4DWvAmj8kGyrhJVZ9qSKym2ydxCsBWPGFy4eYnUjFfJf5XjJPvF8K7MH8UFqsEcfVhHksigAP6hBoQn",
  "key45": "629ovH944DFKo7wDLfpqgtwsToeUWuTTPQMsjY55DhFDo9Wog6Jatry1RdxbTxRgz6a5a7rNFtjrcGMPSVtPeJX8"
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
