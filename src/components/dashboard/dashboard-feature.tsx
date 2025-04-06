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
    "ZVLLaEhMMDPQNRDuZPKuv1wo1U5yWjazCQtSVHvsqLp8DKUEWnBWLwoBYGgAPrX1YupB9TgpxZpecdktnUSvStk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hTSayDPZmwncsszxTixa7T1Y9VqE8UkSMm2fmWUPzXEqeG4hGj5HVV2opQwzZLPrLyfBuS6kc4wsVVm4rbfCb1R",
  "key1": "5tp7QXoXz9iXQGwksv7mT8KKPzgpdpmu4x6LJzg1zoTqLo54u8fHPc4xH51vbtg3RfucbRircZSfZ72wM6G893B",
  "key2": "vbgZx1LvnzbATWMN4ELGFV7E38VtseGXpJouPQnFkEp3GxZ7d2m9ce85Y3kq5sMFUEsT2xgJQ5mQQPXsGKYZezk",
  "key3": "7eYbczZWcAgw6tTBvcGJzG55cijdPxWKFHUHkUscrNY9fVhFMyX3wEK9LbBcduQZxwZ6tVjVd59j2aELR9FSZce",
  "key4": "4vMLeksh8vdGANq5HQJR3rKE2u3joE8hQUb1sVy3TbwWYrWxdVA4KZ7V9pv5wKfjwnuGpxnXdKuTXA5k27prV784",
  "key5": "Y9eBcackKUg1xbR4a4fa9tLfT1ebqaonkeF4QKs2ywJ9bN8avKc7NxGXwhcEKEQceZWwgENHDuXZfmGXoxhwH1n",
  "key6": "3bgyHjkfEKuiMRtmD8oEvzjS4uUpoS6qRRFShWriwGZi8Aex2bWwvvXfDCU4R46AxQhAnys5wu71vTzkKo9E6vdh",
  "key7": "5XHmAx7jUdht5CEQJCkvov4vEWkGrNFci5hCBcACgVTFtLLESQdnAJcujSCuVcHZi3Di1QCRyog11CFZKZFSD7cq",
  "key8": "5Fp4xojqA1iKovs8dBisL13mhNr4TUEh7bmXDdDyXWNn3tdEonRogDgyyxvRHvnTLuhA7KwSHMvkymXaNVBWXfjQ",
  "key9": "3JjLLEoaKmuqLjbEHj9Nh6b42FuC2mYe6ZZrwHRknjiiyWCEJbJakcAWg7J3tj1hPuFSFavPMn3tndL4fwyhxfdq",
  "key10": "34P8vaWwTNGFcBZecfRTPW2pfJw7srvij9Cn9j2Azka91wY2CaxHv9mKczMdPT2zq9Md9X6GDPwj2VfBVHiUkmRA",
  "key11": "2BYYsmEgfuZupyNixmLShywS4uWNTh9p6vPiPLj6uR7yGRhS5bPD41xUVJGEpvU3i3So8ob5k5hxS2PKMqDeLB53",
  "key12": "2EcVx29Wbg2M9D8Uinq4Gk2NisrigFMp1UgdezjBNHabEDqQo3H8CaYnUxFDWpHYeqFS1u1MKUwEW9qsNjQKN1iZ",
  "key13": "3uHQ2oDo6gtVhhLvqfgospvPMGvPiyqpSYt53XsLHTZPeHn1UBVScttsYhdpxhDMoACi2hDBXAoexnnw1uUEj3A4",
  "key14": "r3ffZizLoDKNUzQTnHkk3aJbbwLThKds4WFrT8xLYieSXsN8MFavhP5xxVa5MdwJ8NjHbbxMia9dGn17hMRbHo4",
  "key15": "3saL8Nn1w7rPPeBDDh4gnEALWaeDoLPxDLCeCNCm8A5GsyFEZSZSys1dx6Sb9PU4L7E4AAuUNvBhyzY63i4SdQ8H",
  "key16": "2wE6TMfHHRFz93J8TDqh3Fn72AXWjyBEak3grqokg3GW2okeLb3NbrDzPBi5UicBL8MkoA1db7nnUS4nRpZqUPnA",
  "key17": "AGPfHC1xzf5GWQtcWRAEr1HoQiGnJb3gY7bkHD5HH3VAuFa8hZFe7PfSrWauoV6SPdkypBaDV54RwLsf4A39zPq",
  "key18": "5PHbnNkFKwR2nyWkhfiaMtA8CRmd547JRtWErDNxKSSG9LJuXbVjQipCDDVk9YGE9Diq86NzEEyLghKkVQYEraWZ",
  "key19": "5XSaDiHGXW15KfK7T8nL3q9amRYGYsJ815FfxiC7n6Rr1Jqe5ghMtz88uNkyB3sAqz4L21D6Mng5bm9GkbM87Fn3",
  "key20": "45rmSFWfq9KiXccxnXN4tiLQ2Uqia4rDwS6utE5Rj3tq4XaBPuLycJN9WwaSBTuvQKnspfb1kzHszciqCLQnKmmj",
  "key21": "5roGuTjBa3TrGygKPcxRatjcH4WhKmm9oLRddUgvwTzJdudVrymMP8cYfjscfH9ebeU31XAbvE3J88W2YSTFe1Vq",
  "key22": "R3mm7giuaHynMdT3aAySmVvvh6zT2Zy8MF1nSpzoLda24vqh7PJCpHp5SBPMfuR5cKHNn3GXx62dypcBtRP3Z38",
  "key23": "j1TSWDEmHFBFcAnXDxpiMfA52KthMAx8xLKa1FTMf6Lf5PYk1zr5woHKszpzd2sHG4wftnGzfi24jDYoPCwDiov",
  "key24": "5z8PmVRXqDBQPt4P38giV6WS7yxC58E9L5kRaVbxLe8KwueyEZWAgX8b3Rx6Wwg1CGcqPzHgWXeRex6nFMRw1UgS",
  "key25": "34BKbxgPxstX9ai71Ty7NTvWbDDLPjgTkL8EWMFXoSWeMErmowuYTrjQbU5EZ5mKuoZubWHLVqpnmmdLJFKrmA8g",
  "key26": "5aEf22n3eDuiTMpqw7jPjYA7MoLfakLYed9xPn4XXZWmtDVKnN84JovJ3B3mSqrumCbshWYVcNfYVp9kUSvuQHhX",
  "key27": "121j2FVgCQtmyuuyC3tVu6nxZbSsKjahXKD41WiYP4LcXwJ2nGfFScJwQL6AmHU88Z6MFRvdNuTgjNDAXgQEiZVp",
  "key28": "5duxfsG57v9JKE8wZbzQYzUDS9FGG1ZrnnpjYNUeR3hCTokofezh8MAAZHfXUJfyRRpuxxUihQPb91TxFkLuu9B8",
  "key29": "5rkBmr4BXBTox73UVN1sYGFqvmoNP2Hqwc4LhCQtpYE1TgS8L66XaGgFm8dh3wiYS4xaN71cjK94vtTR6rN93D5f",
  "key30": "s1HnKHGBq4sHXkYoRkZeudGbvUKgepB3RVASjEUW6vjfibJ16BtFFXzpbhkda8QptSPq5Ww6Sw5p6EMUADQq6SC",
  "key31": "4ix1pPtYADqnJh74tGMMhWLtmjSvu3e1RKAE7zkpp3K9XA9o7UiVBtVpXtpTTgrKhT1FKM8jh2j5UKdfDa83ZofJ",
  "key32": "uzHmRSvk8winjdWTipf6oJKkUgEnTWyrZKe6ptuMs6UBcxanbX7WXjD5twtgbz8Bo469phybGJ9HHG8CHDhatoW",
  "key33": "4vT1iVuYY9hhYtVC3ckaM1xdHe7922CEz5EA3fKDYdGnyVAmDYeb3nsLCQhS9L58UKJmW6nrd6vSG4wTSrDkc8FX",
  "key34": "3Vyw9PA5v5XJhhC6CkYKDcjYJRdbtcuAmt14bTHwETrJA2hZrsBYyYEVo6WAqC28ULbg1KzmLQiAY8ER3FMYpMjb",
  "key35": "ur4pz5vvhJ3wiWXLX4iDFwTCH93vbC2qRX9axCkEY23SCpernDSixFAk8iJhLcYX7r9gL7JJpQstRyvQW6m3jbA",
  "key36": "3VHrKbiHisnbdV4spNrs9sqNNLxy2wzYKxEe1FYiqyKTLaYvLEdzbp8SMJAdPa5uJzjUjssuQcVFGxcSydhWKGxu",
  "key37": "2MPunXnJ4Jmfw6GmoXiDELXiQDZ3uVf9NjTEUghWAq4RM3xia6FPq18d9KWeDeRghPLvX83Y2B4AikMPBHwegKgY",
  "key38": "2Y2tVXTeCfxDaKWXZSCKATsf5HHmNWm1uDRDXF1HkaCmfQJA1TWZxWarQ2fLKMbubrTF5ad4tquYsLzKLsaXL3WA",
  "key39": "62toKQ43XUcGoByX2xwN7zEB8vTM1tqD2ooJqxoXzeQbwofX4bodCZDbuB5fiP4Fd1MukdjDYWQGMhqPqXh44stJ",
  "key40": "2G7Shdhhptnz6ge6TBjDg5Exk5mwnnpxow83mZZu4y7t1Tf9R4RMaSKVABJiBezvxSyxEdPHTfGna9WBvP8RWgyE",
  "key41": "5X5i4C4wdf8YBHzpAVzmJim8C5jCf34BCb7PEc1YA9H2jpmGkKainFz1X6jgSVndAjKUedKQrXk61uA2sY8jyq6r",
  "key42": "3WBBNgG9sPoifbtmjYpdGUPe3d1qrEYKgqmrptqVRjLesyCh6X7kEGgy76wcEMZSVMDMUGG5oqq2MBj5zNfWL13o",
  "key43": "4PvD5JwZ62yZczSZxZ1PVeqhvyb1A4nWbYctSAXWn3pje9aaGeLwAuhZY3K4cLuLEczxqranBCrcgL69iK25VDv8",
  "key44": "3hPBW75q8pcvmA4BU8jBik26FqcTpR5EPn6pk7t8M4Mc4eVpxsegqzbqfXitfNC7Q2BDyon3cfDE3bm4MvGBXgDH",
  "key45": "4LJPZRUiHqP5LCzhwEiNfC2uM94q3WzakwE9FM1Ews3PuUJc6kvebCWBNiamyMRrPfrkuW3rsn6mP4wLQC21F4zd",
  "key46": "31qzZPwG58CsgSZdy8LtYAX3zweWT3nD7gDi4TQ67UGtqtmq4FYCEy98Wp5FyXyo6qPhxzCUkgEV8AtxhAKehbMQ",
  "key47": "5tFHUUR2Hboktk2MmWP5X8nrccXAscdCVXwjECrcp25VKSsStivhbTpP6M4Qtfx5g5mxRyz3aDYBjpB216hbDZcU",
  "key48": "2y3Yq2dKzsUXDwYwNGraziZXzoKaJHKjSRFcdtESMQb8BVmEGVRZ1aZAChmZA1jmJ9d1X1EDBNZV5ijj1y42zmZj"
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
