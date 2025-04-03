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
    "4og5mwxcJL45k2hGAhgLJgR6SWxNAfzenGTJLF6nFvL17qpTGe5kJR7N1S7wA2emJhGztUgWhsFmzxrLbPBGVWVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pKetCUT98PbZnvWbt2AycqnshoZDTnqPKk7n7Dzr2s4y7iXESqxJu5xcGpyd3pmHpWzxc1C4ke81YmQQHECVRZ2",
  "key1": "29UNNWGEEB4M79LxxEaTvz1KwKtoyZ2ZRqBAfoisWbHT1bpRN1x8gsrkbGn9U9kHdJKUjHsgVRw45uEYSrg4DuDS",
  "key2": "629Bnss6TcxsphJER54ZggGesMVtQ3zgsrC9KLpU8ZqxQm6ynVtLzsHuGgpd1NMc9Dvw5ubaw6oqKW7z1M3QcJeZ",
  "key3": "2dkjXfVqzzZwN2z2cnDqAYNZokuMvjJV3hK9PjmAoRVaZSn1ToRk9Ec5grGgnsZJJwwWNsLGtrUfFVSbQBzmrkJH",
  "key4": "3wNFC5u2VhMKrZuZ7ehyQ47xQmhW2CNZTtCHE3makMTrRWgi3sYt6qfNKnkJFSMepJ7yTf8VHV4sWnCWZFWyaBeQ",
  "key5": "5Nqd2DSv98wfacCsyVudoS3XTXd6sBMfiwwtp24ZRLcZewvRoJHGWAB3UGhTu4aEJvrxCQpPee55wXnDkaNRTQxd",
  "key6": "2YLUWnDVo5w4xbjRgX78LV9SddYMq7Kn9zrwbfFzv6DSq7TNCUs4kQrbh8mVQjjetsrUxEGSsYxHzU7TFr1HsCM3",
  "key7": "5x41acMGsjYEPACTaJ4Vqy1zn5obX6XhSuFSGMviHVSssw9bmciNb4RocDgavZ7mQu7kqNeH8xfgLoyJQ9RVMXf",
  "key8": "2VRGEDbznwxrEd4pjGRSCZdTCzFYztKJn9C3Mnj9gf8omK5mHQNqraA5vigBwm9vcG4oVrRkBMdb1f2LHU9v8gxT",
  "key9": "5h8Tq48HTE4Fh9F1CnSgXswcZA8343BECciVzDQaojFqAbDDDedRCNi2vo3QM9McuSBX5zbUSXpPqAGu7NRu9zPC",
  "key10": "3oFpWNouMqB8R5yMHCwghntZDub1m7RjHhus2hRiWHxZmKcevVTAd6yd1gX2hNAQmsT6EoCnKAjnaf5ZTcgUYtND",
  "key11": "rTwPQRPDzbH9tRYapkbmconWsZ6skwrYi8eCShNSMiLSvCfogYdFR6c6wkTMow4La3kMAWp3xV7oVqS2GiWUtqM",
  "key12": "4cTPMBEmsDTsMnBaMR5XpR3wP1nH2VQuPtAcn52hnXurm3U9Toyhu4dh9SoStzCQzm5z7bvcyzeqBAN5yqTQKvgC",
  "key13": "65btxeUopb7GKtkzq4XU6C8c3ohEwtYm7vk1k1kJyCd7PU9W1q6CYvUJwHBZYAaAeXU9QLvx44fz6oeUpDm2zK53",
  "key14": "5WP2n4J316RiMoDcu55hRsihVajdo4qfDEvs8hgSaezKFfBDr5bama7KLEbPptaZkRzsz8jtt3fRfBrkTRDy8G2w",
  "key15": "658LMNUHi6ckQhzaeZ16xTRt3TmiLnF9ooUUv4vM1sLKrzfhzfXaHNbs3Q41kv5LvFKU7Dsg54NmKBdX1ebRf9Bx",
  "key16": "63boBugTyPjJkT5trAUYUM78ZyMC8fJogFzJaRDSKBZUmWctrsVphLYaFAwqceWoK8skgw6Yyo18yjwYNhXFPH8L",
  "key17": "3x1TYekWxBQqg2yauqG86vQrYgSvz2FLEDAJ6ue26ovCobmGeX88duqxB6oSYxf6NbQWbT7i33MPfZdnpH6eoZEP",
  "key18": "3mHSVAbVtSU1Bz5nupUBMnJGjFitL8YzgDwn5S9Eu4WodykcjXtthv7nsEzfzdUgpk6JhNDMXLpHgTivDFhcbNFL",
  "key19": "7tvx64MvxGM5MWgG3xwUfFdc3dLstALFK68CCRnsQZkuf6C2Twcwj72p9ooD8YbFzBZiHKeW1URipQ5MJawjAa8",
  "key20": "2A567wJxFXmSrgEuk5PB3an8n8Fa1ZKUSbzSNci7jSSK7N91cPGJvVu1e4DSdvEK78CMtSFCxWi1ortf2LhQx7R6",
  "key21": "47VpvogoELSsfiVw2E8pfSXzQK2HcTXX1yfgbq5jHs8LE5La9CkPyCD289tfNdCxD11J5FLxGEZZAxLZ2e4DrutM",
  "key22": "3rBn1vkyVgpUcNouhGPGjxYcKqcE5Dw5WzwKfPjhtTLLBXoaTeF3A6KgAV5N1hAMMrdUKDKGDaGN1epazca5N1uc",
  "key23": "GvSXYqdxoXiDaaWypGSCDhbbS7XuPBeT3ZiWmqgDzP7GVE5gNnAHfywBQoyRmGFTeyDuHKcGC3Ghp9XFF96S4Hg",
  "key24": "2r7uYAgiKdgAd6YbjfxDk5Qad1Hc2Rj6ZA2iwhg7tEDQWUDbd5qVxJ4Jzq3L6yiixBeSyhWQnkeUZCohZ2GxQ4Mt",
  "key25": "3bDMv6t6LE4zyxkBxPmUkRxjfFNF3A6KFcgdwq6VLpjXKatskv2XftfXfbo8vKSaVvWAUbEn75tpSuu5ru9YudcR",
  "key26": "BM2u1xMXpPVyDTKWYMJPq9QHq1uR38Br2WBZ6n75evsSbz1ZUCNLrNwpDVWTVMPGkNLwctnda6zyY7dE8aggTsq",
  "key27": "5s3ikCr1M4JQZzgFxXaTbr3t8pWeCP6PKmXAqGKr53iou3EtGqWXiQiXyoRtyA8pw1PMSP2jf8qKHzMgiNtkfLsi",
  "key28": "CxaAzY8bAasjbRgQkfbQ8KQYrLu4vp5P1PWBZMyyvgVBXg3r4dXzbCod9RF5VSa299FbQ6K6ZKkSkytr184RWa6",
  "key29": "5127wbsDQRVFFwUzW94vChbmSbk2KR7XrrtWNRbhNqxin4ZAGn1GMEsdfYZdcFmYxxLaGBdFXn5A8U1J7KEny3zY",
  "key30": "2QiTb8XW7KtpbJhPNpNfE2pypXHRR3RvK7QtVWMQwheCceJuzB7FRBwxwb66APfYMJxNscKRGrMDFA8Qgq7W614X",
  "key31": "2JT3gQJNE36v8nLSk4j8Bpny3RuBDE5cU97Ezikz8UtKRtuLZJHNx6ZgqjGcAChRU1S3fyALcue5rHwGBgiBUGQ1",
  "key32": "59wbg8PfcAoVQD7E3guxUeCihwmKdbj2oeUvdMXuni4iNq2VR5JBZheEJGuYwf2dD8YM6EnnaNpgFbUsah1iehc9",
  "key33": "2MV7UjrNzki8FraM8cmGCHiNv8R2ZN3424USeZhMzJrC7Lj6JzVGyJwBMaDfekFLB95doqSuX2icTRsu1PMjWwX5",
  "key34": "5k8riuezgThVaerD9ENKLtoRWgkdM5YNs5yZ5wEhFbpjesTJVKm5tw9EZz6aEvjbUN3khg7fzuC78DmDs6kK3GXc",
  "key35": "4ucFMcUb1gkDtm1QfNj6qbSXPUQ8H19CdfEfZpAEL2ECSxEBZKb4ArhyPPpinufZkkrqKKAvxhAwK5zZnjJvwsaa",
  "key36": "4pdMZuq1MEhCpv9rY7mQZDSM5XE9uQfxcSCaQELjbCAn8S4dSag2MLynAgGwdzsg2mt3w8Y4FQQoQpwYjqp86AXw"
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
