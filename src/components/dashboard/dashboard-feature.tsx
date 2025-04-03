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
    "46oxETvQSsnb5mx4hw3VGnZRA3cxRuRKY16o8QviHDNs3zqZFFrjitN8nYDNZWyyyCMLd3fJ8gD9CCfH7kQf4fSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6d6JB4rVVYjCyFoMQSrDDrbyb2edTe95LfzUxQcHvxRvbcnz3ehSKM5NZRu2ZTAm8EYjqu2Sbe45DQbouu2H3N",
  "key1": "25riyuNfC4okzVhUvaZmeeMTXsAEJ27fZKfpNVdLpxBxBC8Xv3DxhuPLhSKnTrJdYi83iKG7wEcMPUoqkuPVUpCG",
  "key2": "5fHatHZrSdCenLMiAmuS5iFeUyfeGc1gRaQ9X4kU2FE3KFnexBwNGLZw2mrHarGLTtXne4sUTANhDryx9qgRJQ2b",
  "key3": "2fgBgJwsBRNw5con2E8ooe9ocN37jq5Gcyzd9Bt8wzeQr3WMWapmZKoaW8sd2R1Z86C3ZUcCkCKLHv4nswVXTWQu",
  "key4": "5b7JnzU6SwXdD5bDLVZ1mHbAH6rLXGQTazwvfLqyQ5otkARy1L1YLvGcH4ezwF7LjrJ5k2nEDWJFB9rhXY9FTAXG",
  "key5": "5VpQGYhPszKFyhCXyfJms4pXXMXvULjAm7y947NVFvAvRYcyRatCa89UQQsu4CVcQ9gzo5GRmDMWzff6dtYBcURL",
  "key6": "euobtue8HKUJ5vDKyp2AkpERicTvcJKshZ23emhaEW3rCBrDNSmDCfQnnnJx5VahbziTSCcFqFUNEoCqF81sx8Z",
  "key7": "4ssH86Dhfqh9YM5H4DZA8z11uspqCzA9JCNhQQsh1pbAGqBNM1vwKeQAtq5wmMjdMZTPk2oGViYqe8o9HuLfqUoZ",
  "key8": "eaSRtnraQgJv5QbGCCVjdt5RmfaxVdKsHFrKoB4v3yKeZ5ETpjmFUGBbDf6Q2K1CN1dN1iPt7PkuCMLmL4U3BCy",
  "key9": "44dkVU4otKVEvVwBVeMAttEup4cwd2UtWdyyQfLx9JAFmTfiuUm9bcLN4mhn4Fjj87p1U9EExpKc9Vd1SjmQASXX",
  "key10": "3Sdf9Ug7fMt9jwWWe6dA8v5Wfxtg7SFgci5uTvawEL6uJVmGraap5gLzxmyw6XEuiME6dKy23VZp2nnPiEvZ6pFV",
  "key11": "56pPXSE87B9LvTsZz5hAnvKwvd5Sz7HHSKML98awTqDZaz7DdVycSuCd7uNnH9KV5URCMuShH4jfH6U4Xz78xFX9",
  "key12": "5t5GBqH7V5d1YRYmNoEEdw1VnMA1CA85JK9cTVYmeryoKT7Ucn3LPKuZ6KvzQUeZik1QqkjURbcDWrYttywthcAH",
  "key13": "2XX6UDXLYABerTUL9BJRUMrYbMRNKr6YkMww9yQvxaVBU9pPc5nBTMQARwmYZ5V9pSQ1cEhiXaoc81N8F6ZvCye8",
  "key14": "42f5qh3wsbnND6WnUub95WLniu8ZLqVERignoW56EYXoYGshHgQDhBL1m87z6mGxEVRQ56So1hhaCfT4LvCmYL4a",
  "key15": "5Ahkt32RZkKfevYqWT82ZVxdvibniv5Jjjy8L1BuaNjzeUv2xEaARx14DbS65VwqMtaLEsN2c7HsKgkhCEHgcBe6",
  "key16": "25TjMA7o1BUkpqtyBCg4z8y9w7t8rcCam8v5gxvD9596BK6GytteqqFfS61GwyEabdH2j9EPwwTWnJm6b1bpx6LB",
  "key17": "EXb7pdare6w83q7Kc5RsKgrtGShqX32XijtNjpMVMaYZcPFiPDzuLGxbBtYa4rRYW4fsdTCJhqktKWUjaoReK8s",
  "key18": "4tSvzRsWkTE7qq8wKisyFN5fALVkdt3VhysyLLsBDTKaKRcXpTmGYKjwm9Tc7Ky4LMWci3BoKgDs6y2WxMadYft9",
  "key19": "5YMvMfMoGQmxRRX5puWkhN8y4kLkhBSSYXUr1rx7HYhc1Y96y6YRTskwpm7Ui5MZZg6mvY1TGcCqno3Hkqjva9id",
  "key20": "4n8MCrpRSnVU3pzmQKxNk2s1dziDPuQ1Gwbxn872JRnaAR44XsUXwpF6Zec7KdCcorRvbau7PSwVWpqY1fDuhyoh",
  "key21": "MYq4keYGQFvMxkZDXJd8S4QbMr4DUv4WURiU7oeceFm2U34ujSXx2Ri8Ftkkd1s57rCYjPoDk1SMqCDt8BjwEpS",
  "key22": "2zkqrhcvtSKFRXhuFwxb24htjPshji8xGEWpWdkoLnWCqs58D1U9BeJUDXAw5wpDT4etWMqNdLViWpcCJB4ykNeo",
  "key23": "4fWHdJFGZZDZhJgLfQVMGdmLZ4wZRWdgqVz5g7xBEvjh28AZG4TiuKvd6PpNdzUF7SsEKi2Cgqmj2f6UkRmgJoSf",
  "key24": "oGgKeDQP8wwx7hdxVLGvNTRumoaNf87E2onJQ94GTTn8zvuDha2h5UMt6AxsHiyQMCYj3HpEWPYrDe6tdrU82rs",
  "key25": "4nX5b72dTY4roSRjrcfyviogN2Ak7TCj6HUpWK5fAZxSxTXvx56yFaSPvZ6zrFZoSp7yfjoFswFDNwdX8HwtVbes",
  "key26": "to5QLTJiLaevVcxLC1DbyvCDH5mkuPot5aLSvmazgfHDjpGANsCvkoXUZSHBVXs6b1RH1ATNGkemtZMPWHYcGaU",
  "key27": "3k248gBG9vvJqCH43atxntys3ikcxdQaRjcUciJVSayFyvc4UwgsMn1TV2jPpEpTjuG2FmU2xh5azUiEn8xoodMz",
  "key28": "5YL5WCeRfGyWmYPW58QtXMv1gWFfaB1Py5Aczu8Y8jHpG67VcHFb9KByJbVLEBaiMpB72TrwS9cYC8ZmLRmaSjpW",
  "key29": "3mwnotGV94CHD9YuwcjQ1MCwQenQixaADMq96VXZavZV61CN83qjwtthmXMpV4cDW3YiJn9dcygsCsSNNT2muFNk",
  "key30": "122zq8EAyC7joByCxKQyQzRbdBc7JgHML8YYSXQezuZ9V4qK2FJ83PHxRn9BQxHMDhMCKNMiwnyeHqedAxtkCn2c",
  "key31": "2LCHQA2W6SrnFMpEkKbSTsqm5hPgMvgcRbrSqmiEV5wKmi6rhvcTGRMDA87FbHQuZGf7HUtnzZyNVRwuaEuWgaug",
  "key32": "33WaqhD2ta9h9T5Y1HzB4KxQLQxPC5oXyUbgxxgJgMDRfx2keaQNiBiydpNXb6cf4kZeEJwx9AggWcSyMjnLuYxm",
  "key33": "4zQJQe5qGRgsfXo91DQG1qS7vThFRZh7Jgfj2RJV9XYP2cdjj7YXwTtXyHPd9pZHXZyAUoAC4vifNmRr3DWt5AQ",
  "key34": "5oz7XjttyCpGhnRF7rugtH6Mhea8eM5yoUgfHzNdPRuoXb497PK9jUMaint7Yf6nP6HFa3uogGuLfpK5eEvkDyYM",
  "key35": "2jLjsZbjqpraa9TLajpSAMz1enHBGFhvSAwT49CCVFCecPHox6hJebeqZX9UWVKBh1VZ8JX6xv5LKhALqcBDV8Kt",
  "key36": "4zRdUVGSNPvuLTktL6c9KqKgzDsnfubaRoCZYjzdZTSWJYYipBoeQYg9WXNWmQtEZmrHbA3nKZErFrsKtDB1a66",
  "key37": "5UUBiNzHc1JyGgRfe8uWqADwpcEFgXdXQD5C9LPNTu573ysQwp3RWVankV64JoWNcLX2qiBVvMZwD1BAyyBR4Zuu",
  "key38": "3eBKBcHuGrHcikV3hpFJJRsRZWzTEwmZr9gTwkyX6mESWE9Wayr1SRjawcCoowj6GicVo8tLq7PWs1XKnvRYRhWW",
  "key39": "5b5kHyirSRpWgfVxqf2rcFa6CRc5s34kfQf9mvPCL6b4MV4otNWnxdDrxZYFpeeumtsV3Qb9ZGzNDbCSUrpNaFhh"
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
