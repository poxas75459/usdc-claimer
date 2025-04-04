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
    "37Dzvew3vwzaWF37PzjWVbnQpZHrhSXu3npSywr47Wnk4ifBK8BhdhbCWbGptdriwb4WNzCd4AnGAM2xgk6pke4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7Gf7hDfYBxdW1sz9RUqvu79K17NRk8e18ucRyS4r38Pt3mvnm4GQmhLvS493VyWPtwzCdUT6Bisc8GPepZbmmN",
  "key1": "8AmQmpaL5u6Sx5gLX57QMyWXZVKr3sCrK3cUqtoVbkSmsLaubbiRxP45Bd73b1FjekAB7tHPjxxbhWiTgRsrSSv",
  "key2": "DtkdS6x54d8Nh4ggJRvWEDjwJfrfg1iWWvrYAC5okxSKjy9YFo26xpWixmjekUUSV3GafyvBdSreyDRPG7KoQeQ",
  "key3": "3AHSshCAozP9WktKYpLzpRPygwJdoaacbDLr6HpiB1MHi9EtS221aMXPmMrPjpuXVUDsr6n8v1N3LzqU5fSwUwKS",
  "key4": "5QbgFokWkZBEydHqN7PgWUJuZmxVVyYyDePuL6h578XZFejqPfo2Yanm4Bgom3aA1oYYXcRkqEeWnKXsn6Q19VHh",
  "key5": "iaYef8SPMiyEbAo5aPuusQrE9SnXJnNXSCMkFu6nVSB1Z8JpWnZ2ZPQ9FPMjoDRWGswkDHfGeHUGTLAdeEHgKzi",
  "key6": "hZ37Cui6maTacBNvso61AFp1XvPEcZGo1P31VmXtruHVUFaiLKcSapcgMRs4Df54sKzndG2KAn4w9sT8dJZ2VNp",
  "key7": "5zq4EwCwYXZVefvS1vFBW7ET4kJVQfcDg1pr1fBgwEEPBm9EjL8fnJyvbKoR4StFHTsoVG3ygg62khEtShTbTUhp",
  "key8": "3bimExeyGLphhytMXM3BuRUx3YjXWESy3Tipbt4dSGvhnE4jZnup3aELz9xEUuN97pXw5DNwgxYMAxyesWiDYnvW",
  "key9": "3VAkxCVzVAy7LqLNpBSfR7SzMN6HDwquu7ywFW8KDrKKTx4qARBbtEdKcrsaKWbvxZCqUX8AXqwH61e6CPYqf3UJ",
  "key10": "5TR7AADwy6A4VxFWybJQ2vRXbmDesszw43x3FSz5SeD1ba8UKX4hJW7siiWz32PD9bSm3r9TgWPhDuipiowLjYC4",
  "key11": "21owf4G51R7z9f4FShJ8HVaK7Z6N4ohTeAbSDSPMNzyovm7hE6BM2oTpVnWV3owbrEcYZvZBQzVYLA8M9Z5r5MJj",
  "key12": "4kNxBSkR8H8rkx6Ao9M6bPMaXZ36YCvfhzgXY4CuQRAz55nD7eyUaRjCsup985Du16G4LMqJJDGodxe4wpRNFEWz",
  "key13": "24w6g32CFWB5PxvMchtJw32qWm2Ba1QAJUf3zkY58H2Ucri8HLqRBUV8PHmXgiqG9HNe4bmuaNqmhdVCPmHEwiQH",
  "key14": "CXcuDoappeEPdnYQQS6YbMrLiX1t6EdScbt72vK89RNgRizf1WBW1BuB4D7GgjUAQGKhxwrimMXpbhd74TcntXX",
  "key15": "5LwgEALG3ox51BaT3zDG7fAcS3XMxXLUW18B9X5vjNpzZhgFbTNLrTYVLyc9hciRcUBWyGT91afSrgnEh3HmkHRQ",
  "key16": "3ZjvXqKwu13YSa2ttwK7PP9pryFotv9C1M1RvLwftKwUsR3eBMM3MZvvenDJjquBtLfCu6VqXP1F6kx4BBxjRVjT",
  "key17": "2ee6fpvrtZpRZqAqxNTvzCK2jZP7GKw6udzJkKL7WPgwVpmLsmkqeyHasiSmhHW9hvJ3buerTonBRo1tC7MVut1g",
  "key18": "4tX5iwHrkh3pfpdWWvD12i5iqUYtDt2moCMdypGiyLvND9x2t5JtKAKbi1Y2iSWAu4x2CohrMQbwjEby2dHNi6Af",
  "key19": "gadPfLwnZLiyPdLHpckqqVz4katJuZ6wrSR3k5EXiYWhpDBK1ZBEqq7YeDMqZJnHwKpUGLKshAagkUVY3Zon1LE",
  "key20": "4V3BBq9o8kEcRh6DcSQfWR3NS159ZfmuDS578nSoG56DAFBwhTXNBzAPzrEE7HmrTtKHSBHDxCrHnLN4tduzix4N",
  "key21": "41fRod4iCMxfiEBjapnJNks4EoTX4Tb9bevevi63hUEVFc6VhQCx4mL233SRqA63wenZHvhnNANBtawMctFogYoy",
  "key22": "4ky8Exttgv1EDYDpd78bGMozJ67sP7wxxpaLcZ3Daarf9Sh4sDTZh2HRKuuEx8SUdjPKVATrAkMaaEFMV4vVFmdy",
  "key23": "5z5hA9Gozodyrq5QA4BNzSVpBbJjgUJkXfxJvqdYemD2SnsZecNFupko3EFDd82AYNKoFKo6WJrNUPYTXbnK5bHZ",
  "key24": "3pDBgg8QP1rheDV3MtPaJypWqTRURXFbStJGWUDKuk61DARvaVk1wEa9s7i6DXZC83G2tFar1bQwHvNUDk4F7Hb",
  "key25": "3P1gJhuBFDxvmsnbqsYgWNyfQVKb87EaxrVxn3A3WXXABzAEENj5oMts2LjoJaihF2VpMo3D5Bjj9pw7GcQpwmuS",
  "key26": "5oFnZs4KfdkVH3MDMcRzSRLaq1Pnhys1tAUSG96qFaH1WYTq6PCUh9N183n61qVXBneAs27UdUrQLeHc7QM9iWtQ",
  "key27": "2Ap3AdL4QJPcpBktUyX7gHdbsxBU18jfY8f9kokaFwthJXTYEGADwhy7D2HREuJ253XugttutHqCf4atm7ag85cm",
  "key28": "4uX1kcenS91wBqNLny2XpDgyyzN1pJpzwhmeq6sb21aPt9nh8srDRdcHGzm5mTBFtDxS7UDWUepwvoMuXRNwapY8",
  "key29": "kz5HTyD4KHL21612WLLN6uJLLY1jqe3xMWRKD3GnopiY9vjFBjrQCc5Ty4tH6ZiWRdG6Do5dX6xJ5D8GvSNBEdE",
  "key30": "rSWoqXvZV7Ny8sabBa86AJ27zeroL1pRJPm2x5GMUS39VqQjo93Rtfb6sDob51Uk26cURM9v6bHTsGAYxambaAR",
  "key31": "3JTfY5NWboKVN1pbpFPvzU8xbjSwm2zZCBd3Yo4tRfELavKXKwB6zqUxfxqQuzRLA6cUb8SYdRhaPzmxciN6ubpj",
  "key32": "3WZCR2SJGWbDVjwvvAvpFtFp2Lm9nThCqtj2K3QCZbfw555tnHMR6b8dwLhzyhhT473DyBbK154VqhiW2e3ubzvs",
  "key33": "2pcY42QUWNLXu3NB7gEcrK19wnzBMWBKiQZkqj7evFfN2WHN1W1Jr4ziXwVU7WXMLn8bKW28kFrhD2gXQi9CjmXS",
  "key34": "5gffDKCYt5D6Hoe8eGrL6xm8u6gkcEWq3xtJw3R74E9GGxzTCeANBhDHREJAiADcUSvETZbTd1qjKP8K9aqaTDJ8"
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
