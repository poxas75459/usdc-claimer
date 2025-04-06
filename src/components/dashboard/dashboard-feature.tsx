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
    "4Uk5ArxCucHgXZj4gUrizTY9Waw82tSpvHUbix1LGy9eGXubffp8tSsPQcftRDZQJNyV27SjbCvhamsRc7cF2fH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgXwME8a2emqGfiGxBb1yLt1fxKtxqGuGdT1ugvkc9vGjZZCEwFmoQr39hRryG2HEfxWfTqkRWaw3rFHFo7sGHo",
  "key1": "3m7SafokCRyYKX8fFsA5D55fH3kEvHNTqDQ2sTraM7MJa5Z7PD4kbF1w6LcjzjnGSfiS1cxm3HJPefyDbcLfdsES",
  "key2": "nCsnjViruhAkn2CYeEdhwju3NEeKjmgSKcMkx49gB1Frgx5BuikZTLPtzau55Xs52d3iMcMR32bEsmF4mGreSmx",
  "key3": "67o5yJNQwc2c2pnKzhZ5RJWnRTxcrxhF7wz3BFcYy2joKzfk7ohaQAWVuuuUFRDG2nzAcp1PdrEUGeRYfyPTaGAG",
  "key4": "4TVRNvJtAzcB2GvF4FnkoZWRpCzZH3d3R9rWrthmbnuU3TfvBxaq539UD9e5Px1LnQhiGTcbfzPwWHZiGynqPWgi",
  "key5": "5LoAgZ5aPB9aHrQm1EfVYmtRcuWmaHit3qUVHeWB8FP95f2mmJjZUJjUTmrEwhHwj9Uz37QfdpB7rf47x1ScTzkN",
  "key6": "2Hyev9M5vFSerNtFnjaiDFrkZpFakgcM2SzsCqq41S88m3uG56VcJJ6XiDXc4ceB3QojWa2orVMik4UEiSitd6Fd",
  "key7": "2wzQfqEpn6G7wiHPX4cp4mvWcfvpxcouVsWieyC7uHpGNvVUARreVLuc3x5sn2aw6XX6eihJ6FiN7TA6WR1B8RwR",
  "key8": "4zFbqfC6zNpuuVBmicagwAR3qEAK2Nc7Xjpa1dpjMgFYWBoSWF1FSRuCLP2y28rY6nAupod8DfyUmVMQu8gmjvXa",
  "key9": "54gRyPhw2iPkuuUq7HGmYkFEsM1bUoZma2DcEofkYhZoUu9v6uFy2snkzZ59LyJaWcip3658JRHCZh2izHQ6wuoe",
  "key10": "5FX9kiP3UDtJ8yBb5b33hqS2a3cd3Gg2bi2k3hMqgrdscBfVjkn4fkeNHizad9X8TDaLuwmcJLCbYXUvEJjfd8Ay",
  "key11": "36LjPHwS75yFd4eeqwqGurHEG12vAshhrCbN8js1CUnD2buCA3JgbqgnZU2CNB7HgqxBJp9RGqDihpL5rAL3edjQ",
  "key12": "N62KMkZEdTZpLQdSvZUaHjbaasfPeubxcKFJeMaMRb8Gm5ZS4vq7SxUR5qGizkkxn9bC2kKJznfEA8CLivzihod",
  "key13": "2iGEjZR6iV4gTWGhtvXgfo4ZnUiTAqsueVg6XbAzi8Frgk4sd5xh9mXcKMvikm3fRp9aZtV4PDEtiGC18f12hmRD",
  "key14": "4vr5uzZbtfwGwwiiBotHE5K6FTLNcgcaV3j5jo77dXZgegH2HFB27B6ebYpoqhawFoSFq3i9YEaqgVgeN4vLxSi7",
  "key15": "5obK83tkcvFgFCnE7jxL4K1qQtivVBi2aDQvSdQvjcSexQRqixg85mM4TmuvCG58jCUdR4fNAzDpUkHuDfJQkd7g",
  "key16": "32AX1nK8sHdBQp6CNzZWJZjbitaH4ijkU5NU4xsdSBYxKwapFdVvJGvc9QbroQfiQSkmj7obQSGBgRQkiXxJZdzH",
  "key17": "2nH4n7rtrkuRD3gQGKiAJq7SyQBTrV5M1sqYiC2NxPH7AtmrfNBo2Wea3rFe47LKzuxecWF73SG95t3nakWWQTAo",
  "key18": "4238x7WLzvV5Lfdxu26e6TptYLdxcz44jKhMNGqcQieTEKYckkzPk8bqXEWf18why6ocKmQWgGGbY2tkzo3bE9V8",
  "key19": "3fY1fCZUJbn2aq4A8gJNvujqKqy4uJYSHj9XGPr5qzjNUHiYRG8C5pB9LiCqVCwoma8M2igYqCZ8VCYwZX2YSpra",
  "key20": "3TMaGTq7gxDEUAJ4i4Nwja4KaGgks3iQMGA9Em5f7vcrB3NFq2o1nV6KVnvXA6MbRdLobSkSMn4MDRrpueJ65bvg",
  "key21": "5xYEujHG5Pog9t1HfTMrfQy6rz5ECcq4b5mbRJLbYyn6EemCkqv9a4GqmHNUsJ98fSMFgxpBFJ2yrtwbSNx1J1pq",
  "key22": "3jCbi3hy4nFhb4xneRAZS56GMkin6qYikrjRg6qVx9unRrerByXsuAArBsrbEu2qV2ccmE1PxJnqNFwa1o3uiPGs",
  "key23": "2dNcwgR5XTUGoHXxeZ8Hrsc8ARxZ2G2HAT78Kv5QgWWh98RQ6VAiwo8BgbxJEYw7r6ksS5nweyNNPGDLh2gvo19u",
  "key24": "pEfe1FYKu81QTWFK3J517xXEymawRzvhTTDPtEyPdDKUeM6fTmFef9sazns2uTmsL8ov3rvfzW99PcymcxyiekW",
  "key25": "2d4Ymqj72khVLgBfUXU5AqpiWUsg2JmHa6UnNw9tJ7HqaUkHMHm1ujTuSrJjkhw4BioKoSPTwW2TFvVpvgBzgBi9",
  "key26": "2VsdJWdGDtjN52aZ2to8kg7cxbXMjjf41HpEe3pt4d56G5WswBE3mFSkBP8smJLUncPMaiAEukbmYVcuA6y9UXT2",
  "key27": "41reKGSi6uWLtVe8fNoV4hv17y46AtupFr8t2jh9pzra88vTfT68Met5ondf9FHnkRNyDPx48vdismBjyJXPxPkw",
  "key28": "5ghguRdvsxGRuyb7yyzhr3T3TqD1MHC7NHQyVLkAbkRFAXcriEyHAVeD1b7Y1VzHQCj2hEXFmJTNgs3psDyJEGRk",
  "key29": "5Sc7MVV46VBjw5eHQw7E6z6LpwTtGRx5gS2ZenzevtsZa4QSZia3EArzQcfqEyyasKfbGGPnPPcHsVG18TvyHQiR",
  "key30": "3K9r2AuKKim1yggQ1rQ793FWWFZviTPwBbAd5s9DMvQ3krv9K8iN6bXp8sGv2EAVYsDTpDBBKoweuhqzgPXg1tH2",
  "key31": "22f8TtTpxm9JdyuUgTVPgfQrSrdTuuGKCYG2Sebk62PRGst9zght7v8xcvktj49KZZXKNPe1xekShcurs1boHusy",
  "key32": "3FrohVbGmwtG6Te3K8DEqt4v7QqWSURRVfy5iMejQDSkZy9CcX4WjqsdgiZnUG5zS6Px4u47TA7kEEZysmRSaTwC",
  "key33": "46qfAcGK6Cqw3WUxc2CtzDjpuTKoWVxk1ZjqG4KvvVr6ptu9CKGQ1LrkmiPaUr6iyQqDQjoe8zVJY7uunVbQ5tSW",
  "key34": "59EcE2p8Cd9QL8vNhGmU94rxLkd9UcTTfmUJDFpKFYJAvaRXJQkX9G7LNU1n434CU1w3Gd1sPGX7xM64p2LMaWRz",
  "key35": "4F9PUFzo1sU6CjRKNwSzEWHUn46RwWfWx1vPHxwDeqFRhQoAJ6KrLRXqUP1pr2eYbKUNwknQ4amhasTDkRQQCZzJ"
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
