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
    "2Lg8HkFDzX3a4WPXLDCoFwD2RL7SsDDJZxP7GTnD3tWk5k3yWruRMtdxQGoZrGwsS9yccMWYHn5URXbG4zsYup9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PbyHPW9PsTSHwJ6D38geThwEvtJWwqJtXKrU91vSokpn25HVZQwT4Lho4iYErh3WuJEXbhjosH3mpBPFoYnAaQg",
  "key1": "3gw5FRw2iqkmtK9KPYcJ7sTEYdhgUTwfW6yuzU2YPnbdruVfTka8FXuTQS8sTxVvVdmF1onqvAe5F3wDTTq7Ff6M",
  "key2": "5JXzU9JNF5CXMqXHwmYBJ8FFXtt96ffUyhJE8XwzCMMRDsUM16xDyeHM8wEQvJSUN2bbcNLdDnakfWFFQD6sX5cy",
  "key3": "54tPgAbuU8hBC3FGQWj3VxiMvhbSCMC1GodGXnC7YzSr1DFQWDhkCD3wfx2NVdqNjaxMngt3CTpNUqustSVDAsbK",
  "key4": "5uBh9LTHrcX3UFYLgSU24BnErxXKpiq8E3ZpdSFRX6ZwoKK8kPGmxyfidVXTJ1Z2vQor8ewA1XtfG8kfVXkP7Lqu",
  "key5": "5c1bP1qigUMsn4t9hb4CfdQPL9tjV3wXfaqSJiWGJYVowoq5A7qLoztJ53ZSQY7nCr8kcmVNhF8MUR4z7b6xvPo1",
  "key6": "3kmBjJoeit4BPNCG8VByVK97Nqbuj1a4EUEeb1oZu5zbQCL9TLDTxTXWVayjUTP1At5VWwVE53FDM55YUrRM7dRw",
  "key7": "HiT5VTnA3XfBieh1Xbj1bGn4tsbamkGxz4jU8kAMg745eT1T4mBfz1GADiH2LMMy3gayRaGcxeHNgaTeCBHwLKK",
  "key8": "5LnLHVjnRuRdTwgQyZdNGccMYDiCNML1KkcPDboPbbxgr4ZnQvef9Qab16MiBMT1g2CetHV6wT3DWymXLbhx5PQF",
  "key9": "45U4z3Y4teK4Ni1a96m1o4vGuVnmtGNdAH9GWUFkFcnABpxgskMUiYaH42CBmx8mpdNgv1Eu4BU8kNaEpavEeuAM",
  "key10": "3MiZWv3xLH7ySDocDDcJkZgVZPgiBr5RSC6f5EvTHmfwH1wqCvVNJ131aGQq7VoVQYbm6fh4U7ahppmqrofJCiWR",
  "key11": "2i7Suyx2rdCdS6dVWaNtWxDcbqgVCryumnwjSQNveozHDZt85qcPrqcv2fc61sFQmi49J1g92Qk4wU7N2r6tNkAb",
  "key12": "NdQ2DikH1mNpsN8NqcX28kBVGJ1gsDSxjqiDYJ82PkGttgarshsBQc71ABSt2cCaDsFz8LXuJipDofNKr1N65k5",
  "key13": "Qf7X7evcCgEsTrfriwdhxKpFiLKYyAdUFXUMHDxuPgUc2dH4u2Tat1FLnuvKCK7QbMvz4PgfegBsmf63st6wMmJ",
  "key14": "4ddUvvtP9qQAWMpdHT1V4rCKDJp8TyFswvXcYsjFFxJAmQg7xNsf3G1HM5nAMDbB2s2xUwDAW8NTXspENEpoF7VR",
  "key15": "3KorW8SyWxezfkPuUThVSGNUwtDfqj8pVc1DMc1wWmaUc6K69vb2djRRgWx49SM2fgHBJTKKNyTu4usSWTdLdAYZ",
  "key16": "2paFqBsCHsQMzsM9UEAY9mKjT7CiD1Bx6YqQa4GnPzGpBU8F52cNDqzvDrcK4nbNuqkDkzPXFqVXpzne62k2QR3e",
  "key17": "4ETA7MUzwAGgUjV4NoFuUamzd9Z46BGfjJoYXknKg7yEHhGvCmaSjZgzvvyEpjVMjFdq1PJAFpYbwk5P7yZwjXJv",
  "key18": "2gg9hWr55RmKUvzd9yZBU6Nh7AfH57JSZZbg77d3u5zCA5ZbH7RjAJBpFxbs7tgi4WYbN8Xngf45g5DW43KabvEY",
  "key19": "2yt24GZwrmvVXUtgyNTAPVGvKD5byNtrJJugHFu5fVddynXbUz72EjbxbadkphYFFh4xzhpDTsX5k8RRY9MUz5BW",
  "key20": "5PY8X9SpRMy6G31XSXTrnYWEk5DPU1GpCvsrgX5YY33TGsSa8G2VNBsSkRWGSr67AZ4pCojsvDYZZd3qoVDzBgGa",
  "key21": "267PA5nPGvHWMx8kVM9MmmoV3oFEMRL5LR57pNthu7xUmhry71JSsp8kSErJuBUsdJ4SRq9gAUxoExCUD9tiAtG8",
  "key22": "64p29YS25sGYzdEeNgrjkw7dP7bx3xDD15zEVvN3k4r3D7MeLwvtVjBQEKnscnedCo2FeitVey1Prhv1M7aDx9u8",
  "key23": "5T6yhiCJbccJqeHAGN3PVowjuXp5fnstVxUsw6KaPSdtQKr3UUuBit3pKLGU542cvApPm6wkQbgAf1Pox2MvqCTv",
  "key24": "4hpgqKK6eAnHoEUUTN4pyvUKzdVyFwkGGfZsQ5t71irySw2ZLjZ6XCk3zfVeKq2DwiUCTfS68uaCy7QdN4MF5QRP",
  "key25": "3hRyezFEbobWRNWYaETqYhTCPQHxcooc9UvEvWV9tUPH43KrjV23SrP5NXzq7tD7KJzjRqUTAkQQ76b719jvrCTH",
  "key26": "3nmp5BtCWtRaotXotLGX7jwsnCbSrV7KEGGBLcNzSqJauXWpvohbgLvYs3H81E4XrNyfWLExwPkqNPR4TpJ8B5Ts",
  "key27": "4aGHwH1nD9Uw5GupZL4hrv2gauMG54zDm2YTFZk9k6v2xxkb6ooMgx3Q8obW117HNRxfLs3gmxmupvgWAyVbqU8w",
  "key28": "3oJGNdY3SsDvZ1LbTaFfT69yDhmgbwmrRj3TB5agScufWgUpZxKskNcHDKJE2VxafphAngwsgufMcY47Xpaj2Ckc",
  "key29": "2ASLDFKQTPtaW7RuG2VUFNMxeQvhP19BtkMUou94iT3j58VCyQy8s9bDJ35oTgYKkoXRCBZUkdEWZ8qdZ1NWL87c",
  "key30": "5WioBhD6gFUwduQxg3Zo8JezFYwFE2CTvv4ro7PJXTxJ8PLu8zJqYpDQSF84mxS2m7r62uzreuK27m3722w46BwB",
  "key31": "2tAmQSqXmrgKwAZErV7KYcbAgddBCacp6iokxKZeuMgkrMgqGUQRPtsWfGucoxw3Nzicb5Joj2Dai9aCJx94a2Y6",
  "key32": "5W7DBMwgg9uTBaVexy1hzqQE93ViPKdXMAZNTZCPnptNpLtSyi23epekDJ9LSAxUJnyac9FyvKFTYB1rEfcLfc5s",
  "key33": "VporJojwv8bYt5rZuTMHbmu6YG2YDhDbhZVjPVwtRpdNvri8MZzxvTuYAreAG652QSdcpKAdM53MNTRrpA3E9SA",
  "key34": "5ms7YB8UmHGPHKyim7goC9Wf23r4dZYYS93tp9VK26WToLBi1ovPLavraMN18nuHedq7GLuSbDuptcq1s3dB7LAz",
  "key35": "5KawXjHD7mrvwjTaEctuKDePueT9BUzwN6PbpTzYU3fz2uCcTKcuDMkNAsw8dKZp2KKFC9Ttuqj3TUEj82fKb4QA",
  "key36": "5BWepLUYZ8hRadzgPUo7jovgdrxwwXn8cbtw1jSowKo2WRGeAvpZzJLJbmdigZT2MUgwrUPqYYyo5YRPP1N2RqGb",
  "key37": "2Jd3hejh726msT2b9qhvEkCfLJ4ryyRf6XoUB7k4GAhNks81GmDMZtegQMAsQzcpu4pFaaxeXjRVurRCETcPut3G",
  "key38": "5fqFqXzkFVyYP4PtMi9whvYcCxfCVeSLdqFDBUqvLUX9Vh5Y9heNiW9wRgEksM7dDXAQNHRS95Xc6CaCE3q2ssWm",
  "key39": "5QCCkRQrckT9Gm5x7vGG2wwfjUAzCUuuh7PNGqWPMtEjBnbwWH375aAc1uoGEYbbhM1G4r1pd7R6zXYv8DJPBqbE",
  "key40": "b8gLCQscnLfD9NhpzdFjBLAxu1ULqUFdspqTAt1aaiaCTT5Fwem7HNfcc8s48Hfara8JKsQtVzq68aNRQin54xm"
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
