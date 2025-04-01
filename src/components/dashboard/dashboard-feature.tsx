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
    "2SXPzzx83vg7ZZbESJ28xgfpts3Qej1RYtxWsyrfbS1jWGwSjGypEd6kCck1nd6cMvQr6QKTxis2A9UJC5am8AGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLmS4e7LSyc89CFopwAMdGPaxNm4K3qpfbW5tfU9KNo9X5HVGt6iJ4YHrBJexZQTRAN2Jn64GNsbkYF2M5Z9DZe",
  "key1": "4QfWfd4T6nXFEVPMm3ehDCwgp4XodjnSdxxzBsGu28QR1qJDxFfxsknSvzBjNv8vpkXdpM4fM66xdBtk1KJg7awg",
  "key2": "3WtVbQqKVgL61se5h2UjHHVy2Ha4LYE55hPYcXrGAvsDGgLMKk3zcfT3msxd3CrkCQ7Qdu9gXJJoYL4gYWhCiiYH",
  "key3": "4FRrn9FQCtS1tGbbHao95GzL2hacQikDwT1pLQpaEqqsXpmKaFvtFk6hqdU1uYrpXVfLRwnoorL1LrntQu9gjgFp",
  "key4": "46xoizZ5bD4x2QRwDDkATFV7GHZy3idi6yuxJHG4ZCudeoM6fArX2xAcdu5aTpfWmWjaU8XDGhAMNKQMxXPWuSR9",
  "key5": "TeVjmgPQtvkJi6Z7DNxy3oQKSqPD9umvsG65G22PSafaJpu5a1vZzfMetDXG3xGv8st2ezNDW4MnHLE7UQuvtEd",
  "key6": "1vkcBLKap8aX8VtikjkL59z9Ks3hvft1r3GGVgQYXXsteMF6hBABYu5RDPZ5hrnqsK6D9en5hG2fjz8Q9fLqxqm",
  "key7": "2EgZN4XbCkHpv4TBQCaJkB2tqrRuNf51DwnjrqdK76CAjQ7ef4RfpNvyRLzAh8gwnZL8d8MUh7hMd6rppS6Mzpmx",
  "key8": "436VZUydkWTi152uWxDz41rKwVifudSmgf8QH5p3kwV2jRGetXwVmtFLeRCse6RrH5QFNswhHbLJTsnpcBHbZoKL",
  "key9": "2rDm2peBW1YbkMFPkokxAnAtX73gf3YFXWTHmaBSXh2TBnUsYfCBZUTiNT6YGWf8i2Zrk8KxPZBKN4qzmnbV6YkM",
  "key10": "3YAc641ryJPCT3Qz963TTPxyi3rpmpmxRHZoo5pSnjP3g4LxByVqcxXN3zsdWdf6897RvBknbHCRSC1vJPAAi63E",
  "key11": "3y7gZTYDinmJcJPQg4wLiAmQr3gNWWchZMCkjJJtqopnE34STTc6j4Nvs9xgkSCDxhSc7fFCLLYJtHix6KLj4oC9",
  "key12": "5zmarV4D8Q1vxzkJ71rfdCDA1vPXXDifGvKEWTvkqHmepQYVaM9FmbxGyCthi9zm8AqBv3nKPUgTUdHUMzq6APRo",
  "key13": "2KfJGbXYYyEbeP4Ucfg3699ZYyFJcMwVfsMtBpyi2z5Q6bZC5NYLtFNV1cvFmi8WuhrCxqAyuDt6VYCnKxTtUTAQ",
  "key14": "4wSYZwYC8YwGH7UeRgWySaGF8HdRT9oHSWeyUEpzVg1uiYjGUwzhNwDKyujLodfKaStDKK5U2Kz1e35R166wRsBA",
  "key15": "36xCiwJ5SUVsqnhFN4tVJxuPfRtsFAbfBFykiT61tHFyn9BKuSPD1FDwdKRSxY67ptekNeP5L2cMKMDAauHRg4jg",
  "key16": "58Lst8fsfX3tZt17w6TCGCdGXzwfFBbsbzBaAqJYgGhDfmk6hCzBy2EEQHPa1PU2UVimsdVirddiLRaYkoU8jEEe",
  "key17": "2AVV83DtE969UU1jTrsduxE7E5fp8FKhu5EC3Ns7cnHDFWGZXqEQoSr3gaKcpDAAjqPZZjVq1pkBLKFFRuF7kE8T",
  "key18": "5ykK24T9VYn96HfiEfyZCZxag5SEoCQJyCx38ZyVmKUyDpi5ShiW8sRp4SR1ic2wAHkpwfboE2TebkTmyjwipFUp",
  "key19": "3zWJ6zuDkDDuPxSbA7hZGaJUGJmph8UKRyGsnBMsd7viNePs3ZHN6WCzaigC9AX5uXsYhK2S8e8yh2u5bfhEYe3M",
  "key20": "UmXg7E3y8TQbWzkMU3kzymhyvZrAR1MH6krsXt33dSHXVYaemfxPZ67yuaWrXxpP4JHF84ovPYy2NEHuqyTJURW",
  "key21": "M5uxujxYQaqtUT5ydHmpfXDnfZLjd18wr7jNTHir2Ve3GpckaWahLEsE5jCpC7z4D1bZ8BwQ9fSc6YWKHP6vH53",
  "key22": "4t5NWerWZEWwGPbzrU86X1dgp8kRqo9SDJwrnn9ZqLacRW98pnSs9jHbxtFvv1ZFrzymoqRN7jLSS89Nj4SLbjFu",
  "key23": "3tPbRyhYn2GqsSUJYetn2NhSk9zwLyBvvnnchVh76T2puAVtxrC4jH1sXqR9PW8sXu9A7qdrFKVZV3gbomspawPy",
  "key24": "3Z9VeQ3mp2BLiatQityeXZPtP4D15PPzR4XZKZ4V5yAugaY628pr8vCLd5oLhVXPqbFPTPoHArBtE68xeviuhPD",
  "key25": "2FoF7kJeayfkXauUUWLuvs3VBkRWQ2uTkW9N2YDQMZXC7ZT3C4d75NuLsgvWjYi1MNe1rEeXRmsCRtLzUnAkuV3B",
  "key26": "5XuHnTNfuouFBu7P6TRYoz19iLkccVdrrDgrk1onYv6xWhrWyNLfujLSneyRsVmRLhoUpnrLYTBZcaz4GtNPfBAf",
  "key27": "Dg7pMVoukF6AuGqNkxpQqkh2m65d4vPLcXFXuJnhAjhoZKhtV6CFuPLV68Pp25GPT53wBkRUuLec2PaQCVAECdV",
  "key28": "wJtXKKjaFnZPjxDQWmRVDnmGKBZESsTxZqnYvyjK3SiU4D5VSgngHs5C4WF8GX1M5xTrRjMF7KPWeBocWmWyEzF",
  "key29": "21HxyPmBEarDvu6iHFDSUfhs517w897zZJSpWMzV3zHcqh1aRLRszq7XRxWV5ZCynxHmMdo92ekkEjQDTtUMy18p",
  "key30": "bNMotGqCpBk5BMnARkc6bp5ckRDrwYXnTve7vWZ7xWC2jcD8VP9AL3EbJ66qFpViY5Lz7fritU2RAUzkJUc5L8x",
  "key31": "4t9cdwre76xtL3bsPTWTgm17JU5QfezKZougyEHhrrScXmWZcZW8BPXVpBEL31wswTgsg2hWG9RmHbWAuJLvaEBg",
  "key32": "2QURsqXhHJHusCuM63uPDQaPGZk9yaRKqXTjwBsD5qM6bHPhY4eQNDwkqtfPRHmGkjsFHaHeSKQjCYw9nio8VsJW",
  "key33": "4QZfeTcTmLvvaWMWPqXYK7ESFE9m6eJDeSHiFBPP1VDZ7jSM2G1hLPznKbqEUDjAxiHWK5PiW3Ru73ozWh91NEKa",
  "key34": "4ctyM6nzPjjFcbtLD8qSZ4pX8Eht1h2sCrNBLU7hp8YSqqnHU38KX8d6EJvse4ZwNjd2aZXRkk8YPwxFdhnE7YA9",
  "key35": "3xD9XWFm5CHKVZTNsvhyDKkTLstGu9fWGryzEhJRzJquhkS8pHsqTBHPo6CpwZoGD2sRZWmWk9ipNR8PCFQcvVLk",
  "key36": "2wogvmDhfwrA84dZLLJHRPrP3aSGwuB1CiBC3c6AYESiigtgd3W1rJChdU63JMWyTts5cp3HQn1hAHjQ5FdQn3Dm",
  "key37": "2tehyT8QvbvcEok7v2o652GP8QgQF6HE7PoXTBpPxm9BQZMvY3rMrTmTSA1v1kWiTf75sYphrLKFd81uMvkmrbUm",
  "key38": "GFVuWJnFwwUvBuxegvhFkAZCzwzwxdCjtYGqZLLeh7yFML1fh28Fn9bBBHX5GaCMN4WtVVrXmEED6miQd8Y6y7U",
  "key39": "D5uxxhvXPWCRtb9iNBBK2v12a62UTKy4Cgp1Q5q6RVDNtJtc7CTXWdH1p8utv3qBDERqGxqhQQ8XtUDKmgusr6v",
  "key40": "4zQtdAALATGXUVUppKdmseuWuqnVvp6LYC1A5Q5F3vbq6CD3TAa6vMSUhoJPdTqt2wJqexjg2g21D82UB2wDarfV",
  "key41": "2MnUzsvEjufoZBe1RhUGmRRcRj1CPtsDde4VL48kpQdhBJUjnx6cKyaDQEckeK97uf2gmgXwHcsHyexdx5GJra6w",
  "key42": "3qDWUShhGNPGTaa4tFMgTHcKk4DAmRf4grFoejT2GFK17B34dcgKWxaujm4hcrxqNvRbV9d1kaP2exLtW527ikf",
  "key43": "5Rxq6vDawJ4sqifqbhn6Ccbg12vK4Jczn7GFL38qPgNnTdCzMMTbCrKC6j1ifY2FbFwBdPK9E22TcmX11hKaquoV",
  "key44": "5NkoKu1FjBGHrxtPyjbEXdxHfERYNsTsLpgZozngd9zD8YvZrTVN46znhd93UWKQRQTEWbQCox1oanbaPZNKNJwu",
  "key45": "4U9xyWCyumXm9UwfgwGmkbHkCjFy5c6Pv4KmwyzbppaVBvuthe8dooyfRAy8tRGdLKhEykV8wGNUW333gE27rtS6",
  "key46": "59Ta7uXk8FsM8xenJcdnCDYiAdjwTqceCz7EBKZCDQLst5g3hBZWbTmq3nv3ZbFtMLcz9yH7gdd7ABkyMXykL34W"
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
