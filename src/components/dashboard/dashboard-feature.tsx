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
    "5g6wGav54fHgyCYwwoGMQxyuUovrn6FSPhwE45vcgMy86xA9UsxgkB5ChtyZTAcd9jdxXurvcQchFPmjev6grd4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcgPthTbs6zYbh5bUkVn5DJ7E1XJwb7rfejrWaowWkbE7reoUM8Xc7KQwMWVL1ge6pWj93DC9fhcZ9kjiUhNrvc",
  "key1": "GCP46MKSJgvDxgGfzfAYEUWpBH9UDEDoSjw7JW829RxvbDk5bQaGKj8VVtX9LTFyCQfpusQ2g3BxqsyRy5Z6rjz",
  "key2": "398GmWe1cH668D26d5zN7heFmGcWt5Pc1WgMYdvf6qmKiwzhueMg8U2SNynFXzTV5pHxg7mpBJRAG8gihdrwHyi",
  "key3": "4Cdeo8ucF8sAkqsPutUci9sZp9muTZCoG7cPEQ3f9dq6zd25cuXf4w96B4mCwgKEfU6nt21NVKifWefUBXeZBeYi",
  "key4": "3gE9GYejiShTzQoadXHeTrhAFDThufMAfDqbLZAQJUXe7VnbZEAS6Nsr8JxXDLETVLn5yvKnLSUshNVmupRaN5nd",
  "key5": "Dy7im7nzmhQNDaXssPXqTFLk8wC5vt5ELQg6yRPpJtBW8Vg1usKyvbX5qHRypdygGK1GUuCDZqmQfnVUw6KJFda",
  "key6": "BKNapitmr1FS6GqrDoYLpM7sBpEf4LDWdboBBW2kfQ3Qf2imbbj92Ziha4XxEX5U85z3c5oox15ZMEgM7FTmue5",
  "key7": "2ciS3DT97Y3XY3nKF6u9V3dCtqyuMQnJgKuKNpfx1a4sdR68P7VjRDpu9dUWr6vMZPgU4DrcXYBMAnQKTpot1EhX",
  "key8": "3JKGbGFLHuWGJPjgWsEQBUmHE8Cm2RQ7UA1t5oLjB6U7HSRcr3ftJpUKUB3drcvzRLvpCLYsPEkdLNqZFf3QuNoL",
  "key9": "59jKgtaTK54qQyLAR2Yaxtt9z2773g2tonZt7ZQvjBxDU9eDo2F3cN2askjc8baCpBRQocAGDVoLXCpoVJPHpu3d",
  "key10": "63wuMctZr1RGXEuERvrajEvPMzWEgfyBpbH55jajeSWSLuvzt4ARdaSUoJqJLBRzu6niTDDCQmCkKUUaSyFXEiWu",
  "key11": "4ChmTczzhhPPjUPXGLy6YwHBLZ8xCwm2o8YhS78fDrvyh8E9awezybrhiggH6tBgUSdN1LpLvUpCst3eNCDBjqXc",
  "key12": "4p9xBg6mMaAsgmPNRuajpEkKTGzkmPFJe4jUG7BNmCYoADobXZtXZWtxZibsNoDuLS8Q3ZQMVgGBMz1rqhL4ddKC",
  "key13": "5zApCdRuYjajFcW69YaEuzkvQKBPYtbDvWbsQhVQ3tZbK64Dppxj5WfmfoaiGnzVmuQBizC4wEH4evupsSK3yX46",
  "key14": "3W8fb3sazi4EAtrdpDWvgeva6poTzxDW76jZHAmGue5JAP8cuwnz8ddzkidKrXxTBmeF6MPetew4JbQMyasNj6uS",
  "key15": "3FfzoTWquLyTWZz75w7HkDiqyt4DV7suKU4mEsMvDc4qPxrvQCziLzpemXcQcYzMKPaHMJvMxE19VbmQiapMTmUE",
  "key16": "2hdu1ix9godbPnorzyKmT9CLNkBwB55jKha6aU8tx8ihZroMr3qWfpoKABTGnXXkFM1yxfVR5J3yoGk4mTJXa2E8",
  "key17": "3r4JmXsQPSxGYv9oQgWCdPJXcsczrbwFrw3tRdJfSu18VP7UivG6vzUR9chSHhafAEyN45fXrmXuy4LduVbDJKXz",
  "key18": "4J1FWLLay5quL3WxixbAXAJQQ7bQKF4ZCPXXTsCHkR7Jz68m3HF7MNdq5nisDtNwcqNdrADB1eH8THr6Nmoa3SZy",
  "key19": "5mrTK5FK75fLQtYh56MfC6N66Y1gXdqKeuiHq5WPsHqYLmcaTrkSLfjjiQrUVYt89tvBdLPbPi86PfwmugSZcF15",
  "key20": "4EasTx6Bsdxyvm4N3XVpKgPw7zxPMDrke5tR63HVF7dZJtw3nUBZShjohbA1HvWg6sLVSHgzttnST2GgLTYmKuUX",
  "key21": "kGBPqqbAGLV2bWF1iZ9DqxqY6dkjtFz8paPVLjQSyzkT1GxBnd6D5gKoXFzkUt8Jda67ZfPxeqze5RsmmsWfFbZ",
  "key22": "2XJ4MutcJqbnQurf2Mwheaz9A4bSoLiKpABNhTbFdgTx2pUDLT48re3199jLFtyfApC8UXGb47Q6jM6U36G5WDwL",
  "key23": "5R5fLJiJV4PpFaizForFZf1tjLqSkNits6J193z6L3FeWgNxWKcYkV82c2jtTe4imHhDCuJ8wPBwLNmTjzKev8oB",
  "key24": "4kwjvRTZykPTvshPKGNvETCRPPbPBoqR7cSYgHHymfDL4P5ehRycEzrBYpFmp7Ev4JC6FJ3my2NqvTDZuQSgjxXi",
  "key25": "37t37oR5yR1j8vq7ruhZM1Syix7YhxJCSxnR6718tgZt9ZAEBV3aXxup1fBcwoFJUEuSL9U6t5Mp9Qtow1Uud7Ur",
  "key26": "2TDTQoxLkzcaenfE7SszDeDNwjFqHarLhu2qBMFgNftbYntMqmeFhaWZDYPNU7gL9ZggG7BJUmw5UVenFPgCHFRA",
  "key27": "34AiM2Dznid4oSCHxtogqeBMhCKWX4ecd1pgWP76EMknNDm1afXgL9cqTJHPtdhkAFRxe3uzpKrb3ktKxkSviN88",
  "key28": "2Cogh2ZVYwB3KAeitQ5kXniSVx6FEjvK7wSRex4Ayq5EzPxSmXUXx6DgokqcknthwAykcQiXKg6WezA1Rz7mFpnS",
  "key29": "5D5rN876g9TkNzzegCY7ngNjottuQCdx2oDHVGVXJjtJPLqnyiqYSygcJeGrrqW1Boa52ux8CHHyVPyPQBk9utbu",
  "key30": "VT7hBR3hYy3Tkb3afKg4vBhBYvKQuX3j3USUZQMDUTmGmCLfgmX6hR9h1u8LTN5Y79kukkXXkQNNyJUaJS1fzkY",
  "key31": "5Hx6Aa5orN4YvnRyiE2zbExJJYqEQzBin5H9mDQozTh6mvXe1wDS2G472ja4uRA726VjDGQxmKCq6ikGD5bAuZeh",
  "key32": "2h3xBmdPh4NngkGFhirEAtwYZiSsTiYSEoVj8G7Hx3PR5rBZWbfadeqvsX1yaqcDVYErbHbnybtPJLgzo9jRmY6G",
  "key33": "5LZGsVMvwNWPgfrreAzmSKdbgLVYxyyoTGezD3gAYbmzvR33sqGF8YSqXo3NR1sToMjXGufjwws7KXatCUcz9RfS",
  "key34": "3PXdvcM73cr4WoqidtoyVWQAQ4tBZsaSj6fCt9TofvC72uRC5HTFGLjzHP2ZLkDTyw3ZdqBJEBxE3B3SCciZhm8T",
  "key35": "5N8pFhwru3zPLs1tjNmQTyzvEHFFTkPzaxqm6EEoE8QkN2Bg9YFSSjjvQX2axbMPAUhUx42LMnqsRapGfRRti5Tv",
  "key36": "5BR232w684g3xp1WKfCVSWitNRL1Zp9rUeREp6uoWEiJoJheYrHnD8bbgzLYotD52qJALfFpkYrbagyeFnHYBSjQ",
  "key37": "5AG1boc9JTUNRVXhMDdxRnYFM4upknJgCLoJJDDjRPqHxnabtHtc8qqLcom51oy2QpCFTvR6w1vTPv2bq2Ym6yLC",
  "key38": "3xN89LY7teive7x4zzj1CbpZYfiNikwWDWfFh5SaDENZWZDr82BdyBjusxgPUbFPMhPNm7qAyoDL5V9v52kUmK75",
  "key39": "5WvGiZR28sTeaScaFpioSiDZAtt6DUPD5yKS2Lbob7u6G4U5pudKiuaoBqcS6auLYo5Gx8jtbRvh58GdPL5bWwwv",
  "key40": "4zf9SUjH5mnXo1puWF2xhME2DPqM3N19iYSEqYod3cu4TSaTSpfrCtoVobTpbXcuuot6oCWJFas4kCeizibnXnmS",
  "key41": "5e5ZVJK6tWxRyVNNbxFZZQMR4fuExtmmMBTWy127ZNgGQqgqn5iHKpRquU4zaPwKDUkWuzWJUMX6KQP2qM2Pt2hn",
  "key42": "3UCBssAzvQnbbmFPbZ8AprFp9bx1VEScxDj2DU62hvDPR8MYPim1hc688BqFvSeiXW5TQrXdYQpQXrBThLGyeL1G",
  "key43": "mGdR5BQgdYLxsg9vwq44UDKSowtZqdjAb9EYfZeppFs4gQZMEoGYdBXCrM7mWZZeqJcdk9ewjfR9BDps8z1nAVs"
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
