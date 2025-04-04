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
    "25rsZNURBUQ1p1UmFMxThW5jWoy9WAkZuRv2bUirG8MUZj5nLYViD9JywWu2fZgAvajHbF6Z3HkTtSezEnzCuBBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuzqZFjsCqf3Dc9ptCmutC48TaY7fvANnvepDjmChaER5wDKA4G2Wh8q5AJycpQLAzPuRgQfiYP6wqCTrDLmWZG",
  "key1": "MKYqxwJi9B1Ja1CJVCW562KKEAsJKGDi2MHkBMN5Lod1CPVJiuogt41FJvtNceTkNz9fEVvA2VD8SvmmNSUQ4nS",
  "key2": "5aw9dpuNV3SjosnjzyiAdszbbJwN5tFuHtWGbmWu8Ns4pTkgAqqjB1utqwka1Mj2YMxN6DpPxqk8VErcaF41qtX9",
  "key3": "3qjcg8mGPaduMw5jAH9nVmF5gJfaEnWKt3T9Yf4cJ58Wg9KRqx7ftfQjCSfKnzErpNQFotC1ntSJa5p4ZL5Xu7HN",
  "key4": "4MwN7QtGKymMnWpcQ5AnkDBot6RTFo6rtkg5MPuu7y6cXzXtXuLrz8JnkyrpJ7CpzYiKeJCSVQyRgJ4NECFmWmoa",
  "key5": "4R1BRqLmV47JZ3fwRT2Xar2ATLojMZfDEk56JAeUfoPpg97NnGbdAwnrGFgcvhGUh5bwj4e63UyGmWDcMuwRj7Co",
  "key6": "CmUuoRqYkKg2dvgDTeSGnmGNwuXk87MbuudsRGoRrh2fjiVXGQGaiUrFxeSeCJDWEA2KTHR8xn2oKKxZks6UWv2",
  "key7": "5wvXiEiffkWS1m3Tha5dS8d7X6qUSadS7fZMTp4dGLwHuKc59cfm6RzZwASUeAFkXdRRxJKtcxWiTStmCaeAxQLe",
  "key8": "4caCoBMhPji8WEZWTRSAj4qTo2YEC5feuDWDqXdRsNCRhxMyqFzPRdLhuu4AXuj3soCyZDYiXA1kXzssUNm2CFjc",
  "key9": "4qyLMpBFGkb8c6EXubTJaF3jQZRC9HHUoorMqCp3msahKEQSh7hVkyWEtseyA4gkgUJdJj9SCLjJ4UbVNETw2WsJ",
  "key10": "3jaKG7xFYG5JADV2axzU2Tcrp5vfJ2mH2mDeyKWEY7HyF1Zp5mKNT1wyXHJjysGVvnjeY2bZyr4pnK8UiDEk6goq",
  "key11": "HuRHQUtdxEeN5d4bqbgQkhhEmFBWbaDpEWSJDQaaT3pvrp6vRPFVS52b2n9wdQ58LcSqePR1dB1bMv5FpqPCY2N",
  "key12": "4yz5y9GDa5QGag7bm14DxApECkzoLdTrgaSWDcFXLqUjsmFYKhPBSJ4nn8SdeE9Ehoky1ScPAhgDe8zTnsxXi6Cv",
  "key13": "56eJxam1kLbNN2Tn4uqTf3rJo3bBsyxWmaQU7Ktt57npYzNxpiLf3KaNCGk8kTrRZd3VXp5ArXZZr5WBaakdsW9S",
  "key14": "5E6nPcqatmmXoPAu2CsGSxKdf2TxrThesYsVuWJai48v3wV44eahvRPF9ivgD7AsNsGrXMKg92MQ79ptBcZBWMLT",
  "key15": "5PfKb7ZU3KayEQLDP2HNzLNaiAbS5pAqLiDKo4xFAAuk69WwaNy5JScNjEfkLnA8rJNzGjFrVv8hz29ZXSyG4aem",
  "key16": "2vDh1dHrXwntgjiFDJv14umDFPtpqf1dMz3y9PmUGT9Cq7oDc3TfWAWZk5CFnLEwPgk3iJZck3cUZE1Szd4Y6a1e",
  "key17": "5oqPNdP2a1zm8UbkRAc8c2DApwMiW6VUnV7yMB2B8EwkZAfG8jy4X7nehPEDv6zqQuRge8hghfVNef22MxpkEwLj",
  "key18": "5zmDc6PB19AniB8JwVoX5gCFQNwqAezKqdpytjX8jhE6xK6vFxaaVcGMtw2cL8bUkWsRNtD5hVwGvRxFyCsG3sqk",
  "key19": "YbRZ9pe2n5Q1wzdgeafWQhDd6nzAn7V5pnhotV7m9oBaaNjYFUTePw26gEthtRmD5C9yBKJhxr4eyeAgK1gh4dJ",
  "key20": "cCocDBqc39JUZuqRokDgaPhDLvkQiCbcTLSaWgBgi1btadNFcXMRfgNrpEWivaAB3796WYZKnpLTyJzdPAPpBB6",
  "key21": "2aN6an4oTNhANhFwH4KbGRxv92FPDn8UkGq1M7yVx7wQkmfYNLrY4ArQUtaD6NZ9FXjEvbcvo1JR44CBCQiDH88w",
  "key22": "Mj7H8vWMWW2JQbMbctfBPDFQJxnxW72dvEpufSbdHue9CDMEFQnPAd9KBHqvD97gVq4NjNxkx4b9WxBNtofLfTx",
  "key23": "4fcPc77xKfMmEhw2UfjnBSBwC5yuJaoS62yE6ZM8vgAAYbYoiWrDbeYBSjtfczenydocpcU6EGEEkeq29woqSxMq",
  "key24": "4nH86epb6MUL45fqCfkZCDZp7TDwEMfDshF8WvDk8f6DLjDDDHoKaNEperWDSVhiV2A6p8XdCJt1gMRiQmodJvVg",
  "key25": "2GP67heMk9CthBEPDLeDdgikUkjLc9Vz28uyCfUrPTssDzUsSMxPLAa9aSYxt6m2NicTwxichgf7bNGiU7PkhnP",
  "key26": "3ck1b5WzTMU1SzcyiHDheWXAcnnPdLKFkQnPLvee3opvQRxR5TXNkmCeqYofDfSXRdEdnydTyq7ZWMibB54svJ7D",
  "key27": "4rfBDBFBRu3DF2cC8AJwmE4u35V7HwJxEu6TzHDRTDiSYrUyNzjdvWPGH9r1ptcagheVahLYEafVoi6QgNMooTXb",
  "key28": "3CumtpSqw2Cj8oKMdZsFXWTK4WcvYjmhcR4PdAxmPwb7qW2LELJc17WT89t64PPWzBKc4XU52rRgg1J13UU8xmfz",
  "key29": "3SdG1umiqEVQRS7YE4NNG49ifLFi3WtrGtjVQVbCsX21B1dt79MGi3ZyP15rfGUMMKJWFHVE2CmtZAaBFZMoHunB",
  "key30": "3hMxGTDFFCFsvihGtie1uCdDNf1Qz8SSsNqQsJCXqqBDGMLP4cedY1sUtPWHvKFtbgXwEALhf73b9CJKu6x5Eq7C",
  "key31": "3wGr5KsjbPLEXvLTUGM3VitUtrNk4vBxK3qp1arbF3VxtqkyyHKAqNjMVkCU5VJ9TRHxqrfD4DNpiNya8pJMGHja",
  "key32": "2Qaw4dPveTCZL7DYjbEJQ8mCaW1HD12VFELpmw63YJeX1uAMjMdZvtiSUYjTJ7g4pYT9xVLDJyKRyixSZyU3Zh8C"
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
