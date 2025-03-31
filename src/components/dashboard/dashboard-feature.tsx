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
    "3bgBnbj2JpFotEdCFiLauJSMdPB8gaZ8r8MBFcN1jthTiSYMGrC5sWHet5PF61FcrVYUypRjfrzL4eradM2tYM3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bmrUadZQuK2kvaQMHHkub6Bfcgj3FQLYgaJbEsxoawt5PHovCpFHmMG8wa3VQYFbabWb4FfDqb5zxpNurgCNG5",
  "key1": "BaLHnDora8MrBGsqFoAdm5JQw8NFJgxbYdyTvhCEbPkEm7oP3H7iK9wVCTYJz8bcG2HyWu5Jn1u2TgRMS16Asjg",
  "key2": "4S2peicnQA56wXhYkiXbM9tTXsKBUdc2NAeoBT5uWpe12oHt9v4FYMKFZDyACEg3tYJzys1CcAeLLzN5cDgx3Dgt",
  "key3": "2eTXK255q8ZCc3Xo2NpwWukoreskSVZ4QT7XZL275mAzm6CDkz2qVzR7SiBfv96hMr4CDVry8Un9rZH47PbwPbUc",
  "key4": "sVK2rtsdkL8x9c76nwbFD2TjeU9ayYixGhhWP4s9Vc8Kmx9egkq2tU8CDFKD6bQhP4TGcSPyVXvCu7j9Y6mz3dX",
  "key5": "eCw4zba9GfZBRHCjouX2MY9KXkfNAbkWPw539pE7gjywQQaRERuYsFPVQZLo23gwmsaqVs7LZikvazx18iPcAN2",
  "key6": "2nncGcyDMNwhb5unrowqTUj9MDZAyYZQNgz7X8wd78mvRDeyo9THzERHZ3vvpduiaTQN8KzrbvBEJzwRkjuKS4y4",
  "key7": "5weEnvssnH3whNNxmd1Q66XRARQ12j7ajbTgZ1MHRArAPCF8XQvJd2x4yzJNfmN1KUaBgggLJKLC8z5be9jZKwnn",
  "key8": "3UPssSmise4n2GbSYURHW4iLghKg48hsT6k75n5TRzfm77UqycHUfvMzGC2mVMtqTC17DmgG5z9Vm6bQ2EkUzCSu",
  "key9": "5ZwG1hnqdbeJ4eKjeJdtS7qUzEEtzkzeK7wvtgqmVK9M37XP2xU4zc1XbcSC9bDRV9E6QkK2k1f15gPk3fE6vTem",
  "key10": "3NtFPznPfASu5Awid6rSM3yha33MeoZD2jRceDm91cMe835HzyaYyFjFKptqxR2VMZSvjtqH9fQWk5jLqbN9h9rC",
  "key11": "2HRCjXMdqn5Gzo5kLjSdYjAHR1aekGJoc1F8gjgnYDNPpNN12cGiJYLjjZUz8sqLrwvBa8f1yeKcPSyNKci3hK57",
  "key12": "3XX8VrPpHutfeV6s5yQp9nz7zGptpJqdCSCgjiHwu4gRsCjRAzscT1RfKeabmyPSDFkfDqb1Yp9WfyNPym4wREiT",
  "key13": "5G9kSe3cYpUvxveFwyLYaJT9a2xpkmkzeSAfATnpSmEjH5xNkmAu2Qn4ugDwFvGbHt4iRu8nGa4Din76pcdmZRi3",
  "key14": "2Eq4g1vtRkfqsahDtptXgm6D6ApvKM7shnUUK1qEFfVRHHrEHrc3KHabpH4mp2DwSSb7fE6yh5x6BGtUXG7xhGWu",
  "key15": "2vxLnMeTuFrQ6Ykd7MXeBpuvsf4NQHdLYzAQYcLrNMsSeyJq9sPZieTjQaygebmmWQRcbmWeCyVn8H1WBUZhcywX",
  "key16": "5gwEkowfbZo9bjCPjDkc6RTG8d5Qupp89YtpUxfcBRB5TNLRzTDXUbmESxwpmMYh7CwddHKRSENR1nFPeMCwpCc7",
  "key17": "5owjy5FDWhra5tF7L2xWadofkGG7UhYYL6EfEHc9TccFMUi88NwgsA2t8CvHuKdxZoQPoFeqWVN1vkNVj6wbSkc4",
  "key18": "3rmUSk7nhixDDS6wGGnubdk1h5g9sBJTciZZRGpshCC8KP1JFs6YxwkRG5dmg69CfFNnHWkAXrz3LfDzRNuecLc4",
  "key19": "2eLhVsmDQYhmo2Qboo4HA3SFU1i3DqZMRodMi6FZgdU44pKSHyyXhBSkxCy5v4ayQxqQHJhx9bFyjgsPncNc665U",
  "key20": "LTLxKdVPUpqC1arecUhBA45DBGn11iJCKxS8HvwqEYuz3aRJZ14MSN9XZQkjeSYBs4qpAirebmttecZoUo7nSFS",
  "key21": "2A7hqDwJxpgBbADvnNcT5Cszwh1rTrAfJigJMH2uJppr7Q49rz7aaYzk9C15QCDpqiJWS7n6g3Fhpt9xnASjWwST",
  "key22": "4XyLVRPvkUpYGgHgB4YzWoYmMQhtQgqjQt9o69hmh42DFnjNBgubFDVA5FUHk6PFEVKBcKZbDP58CpnteUJeqqe5",
  "key23": "2hCVUpt2p5zYTgNSKcHHHH1cCpCAHKnsWbEf6Ee97JoVGdeb4BuULebfmz8UeP9eUmG1havSJpappz7oDfmrgpxZ",
  "key24": "5T7LvDucNbT5WzAV9bTsNwkWSH1rzGy64iCTHGR2vXwt439kgFVbn7CKKyuWCBg7XEve7nwrfjuThrP292yY4K4W",
  "key25": "5CADKDYoE2qRit6niwgfDQypyWSme6y4WWPmBzgLtgGB6ibDUMndgtoThDYzSb1KJRbsks56bCsGi94B1CjyMYnn",
  "key26": "3ysh9ZkwsPCQECpeW6T6uXd1oBTHHQEF2LHgrkAWSfoB2LnaPDyFJNZempgtDWHScPrtAUfgRsY9gh9wEbxpQ9eS",
  "key27": "4nYDJjgJiAdSVTJRYacuetz68g36NEmK5K4LsB7QViHWN8Rkwu2KwEExDFYLGkLDjvB4sb9cG7ts8YoRkkmDboer",
  "key28": "rFpDXzGmRvJ4awHErpugmti27xtz4zcBqsTq4NqPRsyVcpzXZfRART99DDgzqF1MHH4224g1yzGfDWSfMf2U4uC",
  "key29": "2VjAbUAQexjG2o1jMW2rsNZPa8RCApmrAvg6w3yEitGJqdyVSLzwxAigRK7C3XSa7RND35h41vCDrz6sSAmPB4r3",
  "key30": "36wiXUpFCswYiqsNUGWk36mGaBBqK6hjEPJ9vQvSA3ZyDsGVa46FH8pnpXue27JWR2kyBqWdkj4zwk5SPaLNpY2x",
  "key31": "4XeubQbwa9jNxfSfJbxyVYs2ckcnD1QEABhpt33r8ja3gTsugiCD374etGEV6ePMxtZYi7YVe4UAE5EeiijRVzCs",
  "key32": "2ZAqWam9TWyB9vzBg4hhfpcyvo7rDKWqLxpgxBLuFVhTNzzGxq3T24rj4yZvzEmSRMV2Hbefv57WwTkSZs1PAtEM",
  "key33": "4RrqqVoxjq43yTCLpEzov4Xny8K8EmnH5BQoBgF55NAKU31v97ntHiy47njp9Z6FXePdF17M11Waw9pCtdoQ4QRZ",
  "key34": "4w3LqMmQ8M3M87EY9U5eyZtM6G4EvYHEdVoTeqhTDrdoK5ZZBssZJr4s1zkt5T68wtx5HyfmCKPevVSB8cRF1yyR",
  "key35": "wnXrbKk6v6HhTnmLqCipXeY37PS9mY2RxuaHqpqtmM6xKhhrLVn7FhGeNNBuq3BSHcAdk7D1UkAeKKiVjCdTiMj",
  "key36": "2iaFzfXzVToMvGFperywaEpQxN85abyZB5dhMmqUGq1YVCnSBdjQCpQJphz87rJ4bm67WSQKh95SWvgingnUcRGW",
  "key37": "5GiqKaz6fjHPRQtKDsJUkYKb6qZPGvjjMJYxdYtMK9tF2MxoTm2pNDfXVUPtpLspbJxbCLV52jhqk3GUTqRjz4mq",
  "key38": "5wKyRsCieYavn7tEv1WWcfNaMGkgdMVKbpym7soiZGq6j9gM5TkdHU7yVviA6NPJJdkrkVtWrjzEugnLvqTu1XR9",
  "key39": "5SAqW3vE4VLFAe7pXFmWKVVjxFxnjaS6AXmw1RnimTCpuhsLGsBN9R42QCk2bntDh6mo8nWXYX3mAhK46JmoXgUz",
  "key40": "2stZN45bPvusgqz9yXmu9taVDBJ88ps7VHdceD35inGtiR73mVq5RtEMjAP1XMAp9YTe3XQ49ieeNo2W6YuRTuoa",
  "key41": "23tW2K7ucnjcNvQFcPDomNUuAi18iy5YxhufMyKdazNNRh6AgrdzvcL3bks6w82FVSSr5SvfEsCEvbbZMD3KhgDD",
  "key42": "xxG22evLgVqj2fpc8FhyqzGBGagtaT2Zi32jnSJuaeXcrtwjjNKiAxSUSRttFttHoP3d2C7gtr1opukDoETowQb",
  "key43": "4rEhy3C8Mmt3tn1XRy8PizSm4oLMXFgksjBkqYmKaNhGHuqBt9sj9wqARDB6sHJptWvMUf9aEvuzsUGoWWeTKYBJ",
  "key44": "5Z8trjK42qUs95PVVKHiCCZruAHLP6EfqhDMS7gjRFC4DQv7JoMULTWiyMUYeznTphcs4PR3NWxaLLag9SJfr1ph",
  "key45": "45jxNXW4HBrs2sZkf66tQWZUzPKfaxhHra2pjuG3XvZ9ZWdtxYofaaqU1XGxtWTbiANSvF57W31LPc65NKe7wyZU",
  "key46": "2MRnmhEgboTtPabNgcNKZVYsenHQyS9zhuz84yng47ndUnXZqecP19e44dMHtGMqf46x2v7M1SmsqnVPqjSxCMSH",
  "key47": "3wphtynwXQHCfHQcehTdis1ffbHjqaJffgP5Eysa7PKTzywRXzjBZfZsNf448i8sqvoLu1bGD9UDfXnJ7zBsy5M",
  "key48": "5JkgJ71P3MgQTGC67BC6koNs11HsxkL33Q7mMMV46EazGf8vLYEaMuRVctbMKk7XrgUs98qDiLnmrP9rHyT5unRN",
  "key49": "4WW2dV4KQxCWad9LCxcWnMfA8vk6scpU3sssEV2ZKXbHbKiVSRPurYuQz9mG7XhBXdMAq9HqPkCbBrC7dLsUbbuW"
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
