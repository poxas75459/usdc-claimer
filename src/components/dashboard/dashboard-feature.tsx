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
    "2eEHN28H7dsf5NfooyoN7CS8F4p5btZCTadWtY2RivQJxjJ2Ezoov4kV2DNfKSCPwjn53a4CDnChBJYcyAqLCndk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mx5obcuKmuBYNr2Ag7uJ1EsYEE4qNKahCehCJJ44GaMT68qcnLXVL3v7f2zk2vZ4jjfw8sHFbbpqwZ23CSs9rcp",
  "key1": "ML1r6rgkj4t9RvrfgBedtnQJvkwMExyVmgdbBuCGJVJ6eASYr4jjyxZUB7VyKrPxEcFZ4kjLx6x9dGzhJdqu39N",
  "key2": "ouXqC6Pvm5tHJ6MCLGG2FbUjr9jcAN8dJNAbtqcarRHtWpoRw6tdJnFQXBJ82GwVVWj75x9HFv1KnCpufsBijfx",
  "key3": "3SVHiZr8zsJFfX1nzUc8Wr82pnkewKQnHdxwpdKRNgbxfitXvArPbKwG5uhFDu56nnZQjHYGwUTZMfmMMpMSWupZ",
  "key4": "3q1xqXyvpJuZ7bUtFiWfQ5XAF5K1dUkugLQtwjrh5XmUvowz56TkkLTPJZBHSxRMwKCHY292hpJAyHnFoki9MyAN",
  "key5": "8nkgGrq8amQ1BWLHLvdvXW24HSKV9tpkYzUJzZXpNYsWCQBxgPzjjW5p2MVx9VPBGQxvNdKHPWYGeokuhdGSZSC",
  "key6": "2oCG36FkhjzJax2JhdkjMvHt9us2YSU5orHu2i5VjkXhHER3NF17Tw2DoBKNqnvzVG5oSBF29dD24DfZnJFnayER",
  "key7": "2YJZk8PHcVB6K2SmxZ9AVr3pCgQP1dyt1Jjc2xoG54JWiVyoFDCYjovuNhEgf7LUHfBzAoawDHHBeSs8G6yye194",
  "key8": "Wx4K6jb9o7WyXZxpczk5Bke2tUW2GsLNqc66953tzmvKveZsYmzTfXaYBgaZWEXDKmnHjriZ3zy3dBEWZ76mkLK",
  "key9": "2sJ3fz76NfBqfc4XpaD9ihH4w2tTr6hmF8F841opS66UvR6iVv4ktwBRVrM8ZNWcd2YNM38XLqefWsrZoyt52PpS",
  "key10": "2UbGqk7JtxvFicrcJ6gTiNPYXSwMbNHMkdBf2ff3yhV7SfB2QFJfEHZLvgtDkWrFH3rtQRxHNDJy4RkFwNM2ecZa",
  "key11": "3UjXUfMqwi4gh8g6236Vn5JGJEbqP4iEb18jVLzxQBJAUpZaFPo7CEcjXBc4dZtUjdFwt3xdoDxjAFFvcmjWV8Wt",
  "key12": "ykMe1dfVKku9Uu2BE4M6Q67DxmSkqjbvZQaCeJZduqV5KjXt6V4pg12jrwNeQZuEEu9nDDvL4dbHWHmoWgTCBoD",
  "key13": "5sAC3wujyeRZfVLtA1HmxpuyYPnPQn8E1cCfMnZeJksYj7ptKKq4PFWVcyCVz3u7776ae8Q623fvp365dBgev96x",
  "key14": "cQK5C4wGrzwKDDZS5JzbayVNPSN9yRzcu4Zg9QMzp42VV2ruuFA8FT1WwEMXLJZibhgJe2Bm61ZWZXk9ZFE9H2j",
  "key15": "4V8cPqfE6cgBRKTvi9M9iPwsQU429bPWKopcdY5MHZx4VFcHEJmYt2EhoxCCwhmPL7y2ibv7omAmbJ6SFvSn4ThL",
  "key16": "Acvm19Z8Rzwri2NTZU4Zw3zYxLf3zSZHKKyTAvLViWDm1JNbg6SJxH3yxpQxcg2oazVQptxTch4neHjpiXDwAyE",
  "key17": "2UWEk3bSzYhvNqnWMZ5cH4cryjcbhgAYtTonz5fX7oGHBPk2vPTrWmBQ6RWm6gVDbgCt9iLdsVMmRViVnxBVchsc",
  "key18": "54h7FEwPcHeoEWPyUksr93X4F9fJmT4xCWinujKLAGsv2yviBsCRJHMovY6kXoP7joAgBGBQ2ETJnmzVzhfYfZmt",
  "key19": "9kxqoB17U7xFLnFArCshV52z3iHvEVLEm2ifpNRuYZgBwsmuXvuttxB47jHTQwddieHg4hzJ7pbwZqhZXhPedAs",
  "key20": "53XVKH4xBakH5TBALzqj6MoXpL4T3jjqfGDj1yuu2EsZWB3X2WqyTLSXRd5KV2r3Fbsn5ueDfMoGEcVb5pQVbP5Q",
  "key21": "3DFCqLmnRMRzgFZn4x2FE6D3hGemBh9nhc1p25g9RK7U9b7VPsRRRqHMirdGuC5C1ZV7JMjuJZS9KYzq2GfP4kvV",
  "key22": "3gjRey7FCBy8LMVGBEx38wdpLEZ5LSfaB7KLP8qTCgHEz6andeu9eUC3VR3zGWwr9LPTv2y8sXMTeY3g69CArZmz",
  "key23": "4a36mUohYHK8z1HPrJW1w6iSGcWE3YhDeG8RdbLqG3EvhUjfBz39G85Wd1Uan3YwPC9SfyEzNeHNjiA8ZG28eRCx",
  "key24": "5fyxc5Y2VN6boyAoYwx9FbiUhBoBvmzP5YiQFHjbMyxDk27chu9y8HpAz8fTjQ8B6X9RTurT9ZR1897zZ9e7BWUJ",
  "key25": "4BXS1ns9BRcfTkKg2hi2XZXiA6M4Lu2pG5yzx1vA2kC5PchxAnahpMZXpPamKKjfTj6gMyQkgmDGNfDJ2VtxoL5B",
  "key26": "2rCbw4hHs9Nryvcrme9yydLFBkRnMxT7F5jkifawinauXv8D6HxspefMrUqtQRyTe6gDy8nPggRmPtzbmBxT6FUH",
  "key27": "543qbtHbMx3vjNVYkoVFBx3vnwPpNnwo9ko7ewBD3TBbT9FpQ49k2CEz8VqYB8y2Dph4wqbhgisSaCZuYrRPGf2Z",
  "key28": "4mEKqBxbfB8fY1zsp31SLnWTyoCLGYAxixfDjNYg2i3TMGKcL2tjpi7op3S5kDbPV9E6ZgnvyyRAYzYGWiJHLv7k",
  "key29": "4vZe8TChzTHtoRPiJpETzkvLfXLjpuudL976brHc4KpZYwFP5s3fDryVDjquZGBLsxjkx9rXy1MJg7AdwTgb3grN",
  "key30": "4dRoDFP4xUpG65kPxCXrEShvFZc83mM9XcPHZRWa6GL82ePABV3uvD4Dyd1kp1ru4LU9cqK4AYp2V5DaRh6Adz5r",
  "key31": "4CeEL6DYW2CPeXkgbpCTc7rqtTgrWAxQCk1ZcE5LHjth7cMzhoLGB1Sy9LeNJ26boaD5zGnN6NQfESHviyzcxwKp",
  "key32": "2WAyDFo9yS2Xojq5GhAVnJ4XK7aEJHP5NXnVMzrWHkahsy6FNxDYEi7UgAsq5SmywzsD94x88dKR7UzpNSEXZLmK",
  "key33": "3t27kAVTMjmqstyA3GfhuYZLaqnFLfuDgHMNDGkzvChWTvLxVRXJ45aL5eeNVfxWyXV8TEfr2v8BU5uAmgHLFehi",
  "key34": "3rh1dd9ck9MnF8JFEhHVRb44CM45hyTHJYi15E1bUz2EXDyTN8EhkT4J1F7HaDKdWGrLYYuPBH4YNWzBTNHbSWem",
  "key35": "3JcKdmNZjA33S7MzcQ6ogXWJEXr1WhnroBL1GSt7G8EgubrWFM6BzeJw4ACrQwPd5QnqSzZfNynvpfwa2mDbWVwy",
  "key36": "2E2thTSRpUBSBGbLcUUcNvrfQ23kU73iL1Kr656yqzK4ueqgaC7KcbETPWwiv36KbrZjan2gDNunb1sNmZ9PkvjH",
  "key37": "uZoUQsjWvjrooBYcNn7dLSX5nr2SSunkoJBRBH1nGSHaqH6yqGqrUHuYVkqnTHDHkCBvHksGSJCb6JxkewF8tGV",
  "key38": "2wX37tdg8cUHDtJw9XUv8YRe3GBgqRGMxHRB4yK6Fj7JcKF6uP87tbHzhmP5TaWBLxDyofGke23TuaYz2g1ZmzHS",
  "key39": "5QUJgvfD38pigWhpgcozJeBFok4CZnCTB84883bAiJ3Xv6FrFzcrwHqSSd8fo3WFuq68NjDg6knXDMSeSiBhta2Q",
  "key40": "43vcvY8brHB1zLCrnqUXj1RQ3dUk3ehJUbk2abye8nNrJ8mRJTwZbSS8jbjrGCyiikwNNKcgENS7JeZREkgR85zF",
  "key41": "9Uynx4PyR1gsu97qrDn7YR9Pi51kaQgVsFbEAsqtaFhbUK5tGsoamSkC3wJLYYqGT5jyjeA48R5SmjHjGnKyU7Q",
  "key42": "2TJjfVSQd3E9LkCxUaUYhSATTwbMhhq18ijvKLqy3XZma7qzqrTCJxkYSCgtnvTZ3DwdtFdvF42xNswfuWDSHmVB",
  "key43": "5fzNnhBw5U9KUsBrrKgQfTPXtZZFaVkSgBy9DTKnM6HFXvUnRoLQLvL823EBC8MnK2c2nr6VrzQeooczgBgAiCA7",
  "key44": "61dasRt6K4LLH7eKxLEfEk7FRiduP3wSXEQxoiPLyAzBpkKibBhrgeGVsNx4d81d4gCJRQ2n7M56uQqwpYcbFi6n"
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
