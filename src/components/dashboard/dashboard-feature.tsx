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
    "2fWsJ12JmQBA2cAY3befCYccJEMvEoWT3BQC2Cch3SvqX7NXxFeS6tZNG7bvoFYHitWCdbxVG7w48RqkvApdxYb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znbEAi7bcGa91sRrn5ym577uUDNxWRTX7orXUPrmbxJf8ZrSMXygqb2NUjGwThZ7M7fVP3zNF5qd1ynhGwp3Npj",
  "key1": "4yBwpZQiG66aWwsHg36YyT2dP7gyGBHWvg9tz39qsmyTBG5w251V6y2NVxkyWnUtHa6G37cddoYdhGYnq2TXVa9t",
  "key2": "22N7URuhAWNgdQejhWiC2xoC2t4Z3Vs19BEyxKto7PMQzg9cngMFSuvgrf6ruiqnWv2E2HurQqJjnWfo5xiAdSfg",
  "key3": "26uQytGJBmWKyACFS5LgPmm9CEQjuj8dKQ2TtyrKJ1pyX1aBAhbiQy6oK9ChHkdHYiwrYcQDs5Kg1ywd9C2kdmCc",
  "key4": "3VSYqe795BgqNxi5kTe4cRf2UgMAcimiyk74CHi9H3jcSxp2H2PCqANAr7ECjUCQvs5DGLbWXkAd3QDE7mBf6G2b",
  "key5": "5Ay5mbqq1PiM6YwtiPwZhokptXq6FcBhdsNpKcGS9L66L75ugBj8ovLUd7cZnZnuCdBvDC92uQY9G6FcfC91wHyV",
  "key6": "4DuM8zeUQo4oFPR1dHzyUqgYQmiZ2jRV3Hxp13zBZJ8AfkipNr2pjqXQnDNohVzfN5TDadH8SBVjSFDv3oV12qRA",
  "key7": "26fTZaou4oxR5cu8iyk4v3kaqZs54hNHszjbP4pWR2N6JPUPyZw2G28YQBNAQJbRQumCFQqu3vG2thLhnX2RThXh",
  "key8": "5gvDMRLZrqJRy7KLLe7aHkQBi7WoDqYzhTksmyJighKz5dpNAC46FiMzC1Q4GXLqDEFV3NLTu5GSaPPm8JSbjZ86",
  "key9": "4cuikMf8VzTe3NDxiirLr1ztyCf1jKwh7grHDWjpy5LiYpWfXYsQbNfC5A5DQDzn7JbswTf2aPgTXwtyhkb8pb3k",
  "key10": "PstRo7rxDHE7KWMtkMn5Zvmy11SR9nzqqgxKuncvPVQAdLRJ8kQpwgzN8t9vwr6b3VGeaM6bUuFmvDsajhFTbwZ",
  "key11": "4ZM9kiJvQvTCP2Xs92movBjd24rrcQTUqorVyzz3EyL94Rnb3UcwNPKPPKZhQPbemjAFXkXau8dFX4ytSUtPgDed",
  "key12": "iZMza9zzobZuJdMEAzr8H6bdUg4GHk3LYaGUL3kF6j2nChgEPQ5GoET8jJaybGKoqEhjWhNWYpnSRS4Yz1mvhNn",
  "key13": "36dpCkPLMmZorVaMsAwt9rzo1eXeUQh9R2LmduKmbcefWaPFQagiTMMFVxjkgZCiMXYUFPPQPSMKiuteM5PCk2Ln",
  "key14": "SgvcRWsP3PXKEceVD3azep9si48mwJQtjaa3XziEZZ5twk25UT83kXNuFgsQz6tG2tA8L8R27UNGJ8cHkmAEn4n",
  "key15": "3rtY6UrdXVbHrYPUPRTdk31ZkPGcTHtx3uUkuLJ3RbsYGJH7edoQykHQyXrpiWxRKDegRcxfFEFrNPDPjbAKPEfB",
  "key16": "26NVBMsyTmLriUai9kUxBAw9NrqHQiz446SBSsNZF4DPNrzZw5hWftfpJJAaKjQoDHTjGuWRnPMQczwLpgAHdEbJ",
  "key17": "3hWosA2SFGUcwcyvw39xG2dJo68M56rx6QgMtTvTTrBygkoVR2sbX4NvTxMBExppNQS2suF9XPX3jN7YiFNeZAMU",
  "key18": "2vUiApgjXaQsURLUQoKurEiRWAFVx1E8xiKkuusdJ3Q7n7GkqW5mzouKMTvq2hPJ8TkE5Up44ZDnpyM1qxd7VQtj",
  "key19": "3QdyCzbnSApzzGLaWBQLhUFe9AW7mCjn7paBX3GzgFVMhSXPXeHGk7UuQQkEgLjiNWchUF8ua4MicWEL8EVKxd5B",
  "key20": "5LZRUc3hjAZ7CMBuwrcfJyETH19Y9KtDAmuiSRFL8rHuN38CkgaGniY4PHNAEesdv7n1ErqT2nE4ugydk7Teh27Z",
  "key21": "nkEzvnDECjwJvYWmdunRXuSfWHUs5jHV5zqSjjxU3A7ZgzmFDTcbqs8M2Kxj16HyqnnrdubDsnrnGAvrqjSmbGf",
  "key22": "3HqPbFxZjpQo1t2VX1vxSpo7bhEAzUPwhvwZbyGq4bG1FVx2JRnGuXNrKHbFqP625QSdzj48jWsjHxfgcnNbvTHy",
  "key23": "4vErh8m2ChppD6x4dMtyweoopURwSkYVXNyCzwADVZ3YBWfudtQE2AkJpFvYcRQB4KZKg1KWWKvoUpUPAGxLEnYv",
  "key24": "2Z5rGHxPx6uVHU8iNdedH1HNztwTStnVvNDZYc4MkispsQAPvv8aDZFHKBwXwxpku6zkJR8PmJPXr3mtrpkTpYSe",
  "key25": "4J5xtYm1UaAqpJT5daeKePcAV4e3mtBKLekuTvWstTwHv6CK5YhYsBtp3U7i5aMTD8Eq85ih4chEG5bH5k6fe75t",
  "key26": "ZwhAihbkBRLYkW1SZVXhMn1uDMXMxxGjbwtLi9mBf1njLqRsFwoHZSiSZRzznqJtgefgNzkPF8uQqxfru873pQv",
  "key27": "55HGaMcBEG9iDJpM3TwxLsdHUSUeR8zThTxodFeQEkzazvTiF5beZmjy2VtUocYi9RpTKAy8LAjqmmo2wLCLe3DH",
  "key28": "5Vq5MoerDg6M1Fde9YefLnQo4iSTa19mNFVJ63kKioD8jcF5kSESB6R211T7bw7yAzfmYijGGr8bFaB8eqfh9wQc"
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
