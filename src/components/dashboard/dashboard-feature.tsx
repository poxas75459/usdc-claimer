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
    "2RiTJyixyku6MwH6bAs7KRgDbotL9q8kqUzf14ewG9JJbeB1V6K8X6jydu4E3xWmKBjjd3KC3unSgnRmm3nYUZoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBPNG6cirk7JjyrouGfP9Yy3qYmhrR3AcDuS3V4TR9UKmTuh1a6hy93X3tB5fXTnaNua26iXQB4g2dUGNhwag35",
  "key1": "2FxyrAU8pX1w1Sn1EmtVBxXwYDsPUEzUhfeQScZB5mSgddPavU9643kq5UMrSb23duQMPS4JsWVDYqEqAnBkxtm7",
  "key2": "mKoJ4yZJSuBAki7qAJnbV5Ugi7dEqAwHcc4AXKdsnBaFkcioL54RbE4PJdQGozmARfysba75S8cfx5Ykrgf8jW1",
  "key3": "3yKWAMyoN9unTBXjhcgG5nmFA99uFvg7pZVXgLScKJw5zSJ2LtH75vqRmbkyBQQrk68WEVaKYvJEC1h8DXYaffY",
  "key4": "3AjK9xk11HxoftytHFNeBn9KikP2xHqHg8yb8dnXe1nsGbndrdut7SeWJa5gUgDYdJUWFMPrRGe97vk6EmJy27Eg",
  "key5": "2vbLLs4kAxKA8VheduTPdk5pLxw7o8d4Zgqk6RwVLjiCh1UCWZPUzSEFQTSf3Q9dtUkqRBuFPQRge2uBGVu6VbR4",
  "key6": "4LZpdPKcDsBiUmaQmEmZT4cC2m6xyHHBtrcNMz2wbWM8etAWBLYgJLwLubswkGXehLfu3LaCo68jonro1NbGMQf5",
  "key7": "4rstTh5Q57phrc7a6qne6Y9MuGSocDv7xzsiv549i6bP9M1d5Ed67pvusKi55YrWiC7EoAm9eTs2HoLTDP4V1J2Q",
  "key8": "5aVPD4VWhg8MuaQJxYLfdUZm1j66Ek9z5MyaR3ukrqSVAaPbEi3CHpAUiGsbdv5SaTHyCZ885qz9GXS2V4exme2w",
  "key9": "4SnLLRAW1BXLd4LMRysSZU1cXWb9AQxgvt3kendDDNk98PkfTSjfHjFwf9M1Fpd6w5Hj1qHFTWZ2Xiv1f5WFxYsb",
  "key10": "3MHnsM7mwqfVstUF1ZzdUBejKMLqMHD9MGSKe8Kiq8HsamtDKA7TpSaYdzWZApokCmFEs3XLFHMh9TTM9Y3omXPw",
  "key11": "5qp2idTC4QqD1v2wuaskCbuBfmjJZNXhzDtDsR4t2vxRfDqpGRuGaVt7yBf5teaML4krvEBETMRaFA3Ra4HWjfdo",
  "key12": "5iNP1VYmjNSBgtP72KrVQfjbJmhrs2tkBcsFr2G8PLi3YsSCbUY32je5ynT9ehXkxze4VN1qSuMvzoERRyCUmrBr",
  "key13": "dKcVXdodp6rUP5dECxbs4Cyegd3PL2hpTFDLU5TLxSsV3iLXP8juNM8z4TCizfx5wQULsQJ95TeCZJTRYGqfnUM",
  "key14": "3WQwTJ5yuag9YA5s5ZXzTtfoMs1Kc9auGw5B6ufzabWZD9hkk1bLzq5yytuRSFKDNVZL43PVFEHtEfRRhJCKhynL",
  "key15": "2SYAouxdV6TCg4PrYiQYZo4hR8j7n1NbPUQzkTXNPRaq4ZDDYq7my14BXoCnypUtpqjh5No5p7uKPK5jNABKPYAF",
  "key16": "36qR9as1ppWd8YJvKrjr8GiJUwuoL7BKmFqg2LMCu3HBbrq1mWaNm17XoN9CTW3vHiUfSzs6fnE77DUpSqGDBUDE",
  "key17": "Z83S6cZvhSwR2y7JfwmSz49XvMnjawfU7BkFfYvCsPMAtNsz5eo5SAAR6gTZr8QwCXHumTTD1e6oLoeTdEkuZDJ",
  "key18": "jRJHYihceqbGEf1ZgLqXJzoshp2muCrgHnsq2W2KGKrD6u4Q39ARQs4siT2kVN3JvrSPQNbBz6Cy9a9T7d3YWBU",
  "key19": "5MkLXN2pjdcE772JJ9tyKAdikaAUU7QDg995kCE5Gk5hQC49WYLiCkxvrQmyPGerQiiB6yZkMT8zFRXR5M9VujD4",
  "key20": "3t578HVhPCVYErVTKssJCiuUyMzyt2Y2qKcwwYh8HeJ7BwCaqRQ31MTX6fjcRHLg1Qkhu4poMFSW7Uh2FZg5cFwQ",
  "key21": "c9UzHERhFe4nCpfdN1FeQjLhVFeg271E6BHtjL46yDr4EiwvzjzKHGQhGQtePUEVhzEkGQ2HgSTBQaQQDKxdnPq",
  "key22": "328wiCwwUXRWce642UpJjjSQC1UGc3MFDagTSkqP8MeezWjDTL7RWe39LuhWinuxaF4SzkmyFgDL5rkZNGe1fZV6",
  "key23": "WnYKc4sKC5ci4BiaANmypbyHWwUxvNgZHPYJbPa7aUHAmtUrTigsSVGPj14yWGSWga1264X3rhNXKqwEnUZQcFF",
  "key24": "EZ8tSmwhzBNgHTzpZxddq7jAdp54tgejZa1aisaWrh5tJ1dh2Zs3HbVNoHkrh8wjGGkLJxSjFfmooM5zLHNJF8p",
  "key25": "3AamwgaM95uuEx56NxhLnRtKeVywJq8gawJunE54gfY1qzsoRvGJ5wNChHv1ri7sQwr6KS2ni4Fc5zNtCRsjwbaH",
  "key26": "XaKXTcRfD6vDCbUM4HZ9hDsHrh9pDU4iqY5AWmfMLHtRiZsoqCRuimG5dgCfwnW4pkRxZ4eVrU9Dc5JGvD2EkwM",
  "key27": "5iCMpiVRocz1qwnTxxnaishWpKqLLUiPMmsLw9udWyM4UFJFAVtCc8k974yWY88ueLWWB1WZrzDbYJsCukkheDq3",
  "key28": "h1D1MZEzjSHxtkeBL2QstkBX6pyRsVMthgFjPWdN4Fjbf4fRBB32HMAvoWnjGxPt9aiSrvrAEDLo9eENHrVYauB",
  "key29": "3vwLho7KXW3MKMB9tK5DdGPyyrkb8pZGmcDW9TyGatchVBSfSS5r3NevZsUeDkfScAnQ2YnbxSUVidCSYhcS5e4H",
  "key30": "44qQMpwFt1sVwncDXNRxQadabNx5V7catFXNUFbwdaT1ZWtKdJ5cABD1VNncYC6mRJQohNmbNo6z9E637LGwR19Z",
  "key31": "5gZnUvW5XEX2a5w2SfuMLNMPgFZCrJTPUQXBU5HDGEX6JtSRNgd6V2uvfZwvW3o8Rq9LkfS14sziJsKZjWBSeFXT",
  "key32": "ZkX6TGdk946qYhTMGVACumdRNm6epNEqLT1dt6m8ZD9c9vKhhomKCGPq46iT9ryFNUy9B1Qz42AHe5878YVWq6W",
  "key33": "5HaMzZNvAp6ZWz6L46W2hrT1o2zyXRX8GdbKQfnKikyKgehzDbnaNofF8gexfXvYp4xioDrK8dFx8nr3fgn8GUs2",
  "key34": "5qktnUwh4KKuz7Arim475hYRyubusPQcBJxSw2z6no4vCUgeM9bL58jbaRSBZvfPQHdpfUC9oLq1BejEDVorn9tU",
  "key35": "34bB6cARYEaEVVpB4iQqxHbqww1e5ayd7SeKRwNtuz1hpbqQaz89rMZGkoEdBuQXMNXjYRVde7tty5rUsgbErmWf",
  "key36": "56VZunYhdDSo1YJJagdJHnS6S2khSN8euCvj6LdJZKwVs4oZHeaLYhMYDU4VeG97P4xznefuvXyJG7FqzuwZVK3i",
  "key37": "5WUVFd2eQdZtVbafM799vcFr5YMcW1rQ2eVEjoHLpbt568e7Htba7NVEg51XhBkH566Yija3XkRU3JcuQWLshZ4D"
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
