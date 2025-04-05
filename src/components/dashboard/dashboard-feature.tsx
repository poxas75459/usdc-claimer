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
    "5NmHGVGhPXfS6F5GzuuX1Ehjq4bFgyNTcDeYHMD1juMj5NYxv7hxcwqmj7RKa7N7sNeqzXt1xNFA1m6US5Y7bK6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBNGACvgNE9Hajzse5wjP2b6CuzGrkyV8JTx4ahnDzSW8XsHtgrmjqwd5X7VXv23tDyY2RJAbCyNy7mka2hnQRT",
  "key1": "38adk6gkBujDFUKRZwDvcFhrw6mtV7ptBtLCtbmHGbZP8WWAJkNax1rHSQf9vJiUUDtwJX5ig2pszAjWyFmB5yDL",
  "key2": "4zf3XqzcUU4eU8YVxWkk89AM8nBazFu5KNuJdLaesm5WeotQjbKs3W1wyUKbnVFtJLhmDaxjinn6noNSb5Yq3uTP",
  "key3": "65hxKpU5UJgM2oNcjR1NL41c1YM1MKMC1SgcaGet21TRqch57VSETV8X1ZieTH2CzTnNCxTGmQs4SYxEz9g5w4J5",
  "key4": "yXtrsnevWTZygYESMBixH5SHz7tDEpsursrrcqgs5eArDa2t5H6s1N52VSr6AMAmFpS1Dz6RFMukV3CYZq4JD6j",
  "key5": "3s6iRFx2qxKuiBcHzx5c5wbaCKTBhbw4CBAZJhzLJB325eSx1cJPmkYSqerMYkbBXLB11xj3zs4HKAduHVzT4m5D",
  "key6": "7kb8rMwPm9W2YEkNbTkHiCRfXqxQkEUm2PWDCv7qbLunpBfRLoRXEZFDUXGp3Xr573p81zegqwskgTu4d3P5pkQ",
  "key7": "4ZhczpyjDXLV1WVfKgPLYEkro9czcUzuw99GD3Q2GBF3E4svJct4oq85wbGJMruEcEi9bngtpM1sZh7sD6h9kHxA",
  "key8": "5dGjiBXE8kKQRgRWMW8Yk5hRdAnRZDnjsSAndStXKoYGjdGYhut2AhyQy7KJSjgW9yFr7wn985oiQdnqAGCiVUSF",
  "key9": "59esTpL77atzzwbR8SFFtsJfEQDzGoZ7DCQSm4SbDdisstTJ5139fRCLW3LLcvWqASv49WVHJ73EtyZ11uAWwRuo",
  "key10": "4X5TdK6LjKLDAkVPfAvp1S4yb9qYQLQEx7mwdKT77do4LQwKkvS1o5TbPeswnYumkMZeZe7DegXRv4HTXEqJUARw",
  "key11": "4Bd5JiBNLpcQyq2gx9pX5DGPywcNowsWjqz69V6QGB6aH7tExTiJdHnmTTQX312bcaHyCH7kb3cp2nnjXvygrtuJ",
  "key12": "2RVdVP8f3EfPP1q2KARbi69KxbVYH2V3ethpgdpah1i6VM42oMq8fbV52TF812cjW5dtDDfXcvwfhBDh9auuqJCW",
  "key13": "4M5LSAPi5NPcWFXUMFXJmfdw7U5y6QkCSCCCH6JNUcR67fhQDh3PxzZpJuCASwawoxAfBfb2syRSt1VxHeY4FUFh",
  "key14": "24bszqRVaxeaRKgSmRQB6fZiZtya71iZtCHBHSUpj1MxBfeQsicGDG4Scd8HbcHdjVvL3ZFp9gJfUZojReY57Lfg",
  "key15": "3GU5GThApemeeb3D2HnwuXBMKJJ4fxTvZnpFUNoZTZuMXoraxQzfRvPAsfSPK5443Kx9jx6pUaG1CPUzfhvtqZak",
  "key16": "5mXr6vGiMBCJx9fRyweJQzrsVH8UkstzkxKDb2FjPssBkm6JzSpzoxknpEvabhMQrsW4dKfT34d6LPr6DERG3c5z",
  "key17": "5Qyq4uJXrcpCjbiUwDVuRejLHXdCrtfnUAmTMjPHzfnCtkAR4awcBRR5CkKJuRj95rHsPJVXZ9EvzVYNBmBiUXrZ",
  "key18": "4h5qUFzjzASMdSkiC8Z1GvFXQEyBfQWdiRdwizymDrfUZciLM8dtsKjABSjtyVccfPhmKuurXHyWJ6NYxfPiim3z",
  "key19": "494qsPbpPCns8DaP9wuMg8buN4Kg5ZsWuKaWw1m85HNrbk5wBJWw9LyXPAvjcQXfEun6aknxYcANF2NENwjbfEns",
  "key20": "5umvf3oWEY4e5aXxoBum6Qoa9KoceCLD8u3qeLtpeL7Lbd88qwTp19wLmfskx4BGgDyt3xYmvBNsqYjvXKt6CSP5",
  "key21": "259xho9gHP44sooXkS1FnXvXRskJWdRUkaWYZTSuFQkGyQpFMLxBQ6REAJn1iHErd1WjgWvAL4HLhfwajeNXojLB",
  "key22": "2F7oB8g4kcL7AaNUU4hd2MemqEF9iKAoLBPaHTfWwBnE5MMY5iJd1ETzd8BQMk7VBZBQ81QXhAsmTpGWfc3v5gKD",
  "key23": "4jp5i8uEvGR6pupoPfy6FmFZFtQoKw6LEFENZGmBh3ZsPmFiNDonuNG79PtWGCaS9FSfss1zZV19TNBaSDjLM9Mx",
  "key24": "3enSAVgGAE1ktHEVHKjfrEgZvk3qLpE3aCwKR4zDek5T13gF8AdmybWyUEdt3qqDcPPS85KfZHVeqcuYYK6WY3ZL",
  "key25": "1DNhNP1WTTV96ucXjdi9ga5jm15tpPrKNv8jKAfeQDxRy9WjhGouBxMrsJV5cD4dnHeL2cx9WkvT8fkxx5e6Zeq",
  "key26": "4geQt2i7AiTeEED3UmGyuBLYeMwzE1cCARxCYYbhdhMzN6ghJ3Huaapg7JsQBPpkq7p2qxX6Qpj6HK5mwcU5BHA4",
  "key27": "5HNxs2nQLts9DGUTjFd3cNG9oPyTDMburZSZ5f8iG8u16WQAS93LWYKQTHra4AKonjpAQhrF1omEtFjoQQed2YjW",
  "key28": "4fY133ShJyk23NB5DBeHjhrCWEuV8RYzUGhtGdWXHPECTgPUfzLShP4poKGeG4BDp29PTHW85qCUEj3ywFcjWW1G",
  "key29": "JXdJpcMCAGhEJvzZsxFAmtx2h4VzjhNwh88WRCfDBnYMoyvTpc8xd4hD7hWDB7CpfxDKpTEXUU5uapmyShVq4eg",
  "key30": "5anvrU7eZ1dj1EZexbJKCH6DeJ1QwUNz4sV9QbWNMPSueXGCtPXWSx9Xeq44KBGxoZY9WbWkWDDQDE1bcT37mddr",
  "key31": "49EqsoPJTrYhmEfePjrZAYBbuD12oVigPfFMKUK2z5HLqmdVsCUgw5rtnsrDQHLaLHafHYbLFm8of7viGHnWwHt3",
  "key32": "2WWHNBQp7r2tqgaMUrLG4qFko9oULx6qvGkmeWDHpG9uJG7Fgun6dHsuziQanVbxP8KcGWuWWCXRtxJVKApmSobq",
  "key33": "4u5cqzygrm9E4vumLGdWRhTKBtQThoXqaSmS55vAUzMeQypj1e24in3E5a5fC1XVrPgrwuK9dPsAWddxPRnj9swL",
  "key34": "22D5PXHYGWNHeQrqFUoLSVvTqCokszzGkBwPZn2ctkgXSb4kkUTKJ9AkkscvXUkwBP1xWf1HnkKWRex7XGTKrKjz",
  "key35": "5tbChi7ahqVduwYc41AoHbjHtiDZSohS1p3HULUTqz1eQoGNJiQ25sfhaMCeH2SQ924ap2tW91spYGaXetZdLCvd"
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
