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
    "5v8EZ48HbA2sjpUHsGfHCU7JcmPZSB8E6THvCbsWRAu467MsSQLs1nuCTqrHAerMfdsAEq2s331qnJ7Q7ia1qKz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gz8GTzmvj7jX5h8niGY5RZFfayZ6PBjcQUCor2RYiyaK1L95SfX6CcNwZGtjf91VWJuXgVFroaubEeuFvBgA8VW",
  "key1": "4VewEG9afaBN4E3Vk9ZYLWBXGXpGCN4AnSTmnfGheCrcs4FA7vPGR4yzKiLnwEdYSSkwnQJuYz9NQPHTMXSn5UMj",
  "key2": "2K2z1CESyXyfY6aUqF1qkR7pXs9Pby3DXqLCiEdMWWqc3stFks4XQFzrfaN1g3ooyL45cEo2nKWV4rX28kGj3JsC",
  "key3": "3F2QrdwDVov2m2eSGY1ApvcW3GUEWqVRjnb6aE5Hup8TRLKvcfUXEKdeXTUqqXX9ywnmckTNFcifMFTBJ2YRM8K7",
  "key4": "44BRaJRpSDiFXrFrUnEv3UWQY4JvwTLyfk5LBr3EK4MqcoyfR6zzcaqPYouebBspddFKBshtRvktb65g6Hzt5y7G",
  "key5": "2aRQfi4yekW5MGZ15MNeDyA64ptuSPU7zudWtRfjLyeYNtbxfoe6ZhyxChSNofWmsZBeF7ueiM3CoGykRjkiU9dW",
  "key6": "4ooA13NhMZETSGtuzSCGVxz4A2uhbruMe9y72yqY7zXPE7gKEPQFD1rz3etCwp1xdkq3R4jTuizwTWr5gXAhrNbd",
  "key7": "4rRQMJVYG55MwoixkYJUzy44bXPBU8AweLf7qrSRWegqYgoxk3p3aTS6jAP2QSwpxpoV7hgy7v7UbJWcHdu8Fio2",
  "key8": "42saL8BPpEce9Y4GdCzCEPM2DJHgqQuS1jMhWsN7jdGdVr4hF97griokWNL42uc7P8v1ZJiiqE6BezBHZYzJiUj",
  "key9": "46yjHsR42UywtAdy1u92gZDMpe3hBYxc2NfHZnZ3rMkRe8tydUB121HZA99QUzKPdWHX6Vh4JxE7jA7ery14JnDG",
  "key10": "5JowMLsK4woGLZ3e73fzmpbE2RgcfE84pLL3mAFqBST5N1SX3weEBVfebE8G9CYLNzqmUeqoaLjjgCdT5g5b7ug1",
  "key11": "46Xq1bZvWhummnz37C1r4AQkWipQm4HgH9aKvEcCMc85U2GisTUMXj4j3V1319ArmM8sRLknaeoX9NjWtdocWon6",
  "key12": "4vpUdV3B9xRaN6xK5MJw7xcCZgiid2MD6Ee8mVQFPR9pT2Reqv1qKfMUpzKo1pFfgc7wpkauxFu1GoJG654kyaYR",
  "key13": "4PS9DhHmZvw2qBDHQL9qFKb1eSqRwHA9qBa3sqw1Eo9WkDxFGSrmmk5fgkWR6V3PMPsZTHKvGGC6WAnrzPi9ZYuB",
  "key14": "5qRrwmuy6zbDNWhCR8f428xuhYc3PsrzCjD4Xas31Y8E7EqHTPCPnPuGqNgEtdBxCrXMd4wP1EdgJrXD6k7866Ck",
  "key15": "4HbJ3KzqcAZgppS7YuSRa5qYYmvW6Nw65u6zQiNF133w7q7qLwLYGhAFhAhssSQC8ECvhERbWQjAzCNg47bwTPUg",
  "key16": "4NB6LV6LwjzkfEQaarUCNo3EV5XrKCRyaXk5bM5i1Wb58Qg2z7LeF3XcDre1bL2iRk5HftZBEzZVA54bLcuxmpW5",
  "key17": "5NHvazsprjt4CdmSpWaksUUEcNutAFKTi5egaexCfCfVQod8d7YpqPtgrnWR32T1srjpgUWG4Pty7S5XcVtEsEAY",
  "key18": "4Ah6yUVMPZWwKHgvVqV29VVcZW77JJAWyiMnKN36aKCgEsTzaWxF8pmCpUk7WzxVnzp5zjub93ryReaCyVuwyK3s",
  "key19": "4pP7BnoYVQqz4QFZ71ThreMpDURnNaY2wp3UK3yaSLwkJXeH7Sjkx3TMc8LWuvktkyeYqxbojGAhQ3EBs3pcU1iP",
  "key20": "5AaEen74S8asEDaYv5MhPkHWFsBy1KVcXbghR4VWCJc2LENYw7vaYcSwZCyLjBLcc2E2z157fZdC9ap6qqMARdK9",
  "key21": "2iYyHNyNx9VPXpTBRThP4WAFc4u3Rk3nUU2zoQCQAKKhRLzKyK35hVb84BGhYacA8La1rpTdgT7FKFzikMQuzAUY",
  "key22": "2QMDZ42J87hLYfgDmRASiBKBMRCHj2tvWgk1y2avkBDfSU4VHhTpd4PnAPkVVdnMxyL9ee5tfCA13eZKA1mKEa3C",
  "key23": "42WbTMjtnRrJgGcqhk7qeKeBeZtKLk2qWHts42rFXLhcjAr68mbxbCVBYGwmhpEYBkjMP8f4PPAfHeKmvzZdHuKw",
  "key24": "UoZc3FF26s9gtMpTMhDuPYcE1uRokTsDA8KZ8vGdxuXvQrVpafcdk2Kq8afdvnLVNoBUAf8Ys7h6E2APZs4Vtr1",
  "key25": "3msdLymfZ7YRheDMk5dYmmdwUDrLmf9DxkoMvvip47wNjuhKoNW7Lyb6fC4jD9ixh9UzZsvWy2vFv5PpkUw2hDae",
  "key26": "pKE8esBDBCaBC8KekmmAjysr4mPAvcvPrwHsvvxMVkGp3ANKTgk8SExaaHEfzjhjVrCxMP84Pj2Gt8aTsHrzTMo",
  "key27": "36LmLekKafqu4kTfJzDzXmPcvdHvUFEgFvEqVzUMd33xi1gXadTKYHsPWNNgNojBps3CVDKD5HNzDay6G3ABGVYA",
  "key28": "4d9DduKNmHbBC1rCgyqu8VYA3mdH6hD13jTbbAEkbsjzFyob7YVXLzA2saeoD8UpNECDXL57D5Qyqa5HpPrxEV9b",
  "key29": "27ZDoCsZfjnzZXRRzTrUMjbfvsh46qtmA7wbB8jvmshkRX5U7xGMTTzvW8gYuhZZgze5SrdoZMs1ESmw2FLFNnsC",
  "key30": "36JVsJ6nyoA1qGfT2tHYEmeLAkSw7JViMjoSoLzqxaVmCwhYWvq9FiSMQq7yK1oJuphNB1HPKcGzrAbgWrwiBcLz",
  "key31": "2TC8bRB423Hjr2W68aLGBfHU34w7h1uGpjyUPrWvQqpp6VfnZnYXYdmKXb5h8YLwEbjaywFeovsx65i3TpCRsMZb",
  "key32": "uaCfZjb4yr9QBYGap4jeTYXGh3U4Kf67Mmegah5fhpz3rYVYBAjgifdVLEsbHDZYawLZ81pHeMDETChpZ5bTDmS",
  "key33": "4Rtwi3gg2nmiwqJ71SLzqFaLCnU4zEeLHKbKLHuG7wjw9sMnxjZsjH61YGXz7paSci49PP3riXr6FhznMmFzqV2M",
  "key34": "2n8k1jkszos9VfMW46kEXrRUxhXmj54DowbyJ5C7R5DpTVAx9aLpAHpnpP88ZBb1hoc9ZQqHSnsoEwkmEavwXfFV",
  "key35": "3Q7LqrF1EK7wRvr7MroWZVk8vbM61smLcu3g5tBchbfWp2atzTo3AxLMzkQnxXdgmHTMWecyAtYR1mr9G9YCot9q",
  "key36": "5FZv5pmmvLASXtm25GBrAeDJzDJX1KhrFk4464NF82g3FMHERtRAxWSmZrsJuaZ1vSV4dn8zvu5gCY9mWVtUxfGT",
  "key37": "2iyjDhyz4WjJaHc89Ng5C8a5zQ7ZAFUZjSiHSgXRmh8BjNG3NXUzpAGXpVB791TAry5yCjkMYsdi2iSobmzB4h5k",
  "key38": "28C83qczPdAga8ACCtqAAtDfLL86umjCjcmixMn1jRCqpesofsdn4g81YdJxYA2E9UMf2qYPbPBf3RHE2D7fA2bP",
  "key39": "JUdcuYQVwpfuZBRgjzUKGRRPDXMWXUV9L9guQ9mbZz6e8o67ydFeBhCuK5tS5PjQfuWdwxVvb1cXHmat3Zh3VnT",
  "key40": "2fm9b2R9ipgzYjQDdTKQPx9eKCeKrD4K4HtCUcEmDxufKjWoFKR7PjbGafYgBT6NfdYaYw8T553QmfpLajjhvWn5",
  "key41": "3JMXkEgx43Q2fEyfVf7GMzogMoqwYPwyEk3RoEJUWyxg3PN9se28CfoWuvHv6G6r7bc8gjKuKH4cVUZDF5osMrbT",
  "key42": "2GzgaxXZiDYpEp65AdLuTxEEgFvvEgZEsm2nbPSdvZqv9YgMTTUogDJkdeDdUEGvBPBf9Qy6fiRsKXdVrK986yzE",
  "key43": "5725jMXozvqs9mAYFwxAjues9RurTUi1pAqjYDBnUYdUNvuL4PAxr56t9XGwGgnybBa7h5z9jejUsgr3GMHsW6Hn",
  "key44": "2BKbxVR9yCv4oxs3QZ3AZzgF9FQaXpNKU2YeW5DRCTsoNCSXfiznQoWoVMmUBncqy8CZRsuY3hp51DfJBE3Bh4aU",
  "key45": "eAvGq1MbzfoNDBRZt9KBhb36f4VxhL1N5NMJZ3LQvdgpVVbaj5VABaJtWcTh7Ksnf6weXuwyzwFuAYxmkSZsuKA",
  "key46": "5RMjSCkYoTaBGUvZRxWVeqxCjEoCmCNSbihd8vYpdUhmmvaAAkTZBHEQGP5uxqRmNQkkb7RLzbgxCmVNMwJZvSdQ",
  "key47": "2kGCnAxLCeqjQew3eBHHgNn8Cdkh7XFgTQKPKjddMd2B5WMcbWGPNocjSb7Xn9Viqb52kvVnqjuAcYRWPqTAu38x"
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
