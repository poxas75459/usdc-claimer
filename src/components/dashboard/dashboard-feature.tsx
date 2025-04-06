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
    "BSEjTWVDz9PRQ6zv65RTiayzUmovZz83LkEUHCtzwncXEeJ8fYmWJwVCagLqrB8g11dRVckHUeLPhonUcD7fcQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81FMVUNpwzB5d4yYE6LhGNMmCnQD7pqQd45stFTNp8mvPAwzKATSCcnjUQx5rSBXFqBhgTPs74S32BqJFirTML1",
  "key1": "iSEKgSHKJZwkw3rrZSESMh9Qw7Ztu7Dhm2iMEQxHWSrdypkLmdyzt1TYux6arQiUQRjdHYLCcvaEuzMSwqvg2gH",
  "key2": "5UPqdFQAg1eK198MAbKwBviBPWZK5CaSmL9XZ9LuGDtN7jvmfRUoi7BVG4qSmeC7gn2Uw5QgtsStaWUpnH8x8Urk",
  "key3": "3Ty9aVbvSo3RznS8BWW7jDXnmGrz7SMAKrVZfCoRcdCoiGe4nawU2HmrP3KHxBroBm51VMoxihnrgUPQnyd5b1nu",
  "key4": "5GsqoS5cymabbJ1vZQy8Yg7jJV3uZT4bUZsLkHe61x7seiqpaTMFtkhFwyAMvP2frwwCTymLqEw2t2Kcdcp1B1Jc",
  "key5": "3b7h4wYadAt59wgQXQiUd9JTsJdnVZdK2AM8FZCFb3QocvKBXZYqp3DtCHzB5ZC2VSugeBzVQcqhAmP3rJjG7MNc",
  "key6": "2xwhhrLEuY33HYszbqTVKacAVn7MYyeC24S2mm1pajJca8q9Vbz7qsudQnVKGp69qwPwzRmxvB1mAikAMnMEi6R5",
  "key7": "3yhnhQkbVSjBhcBiqu8WLTpN1UuxgtuhEUTggAVjD8pQUpVUqWYEER7Wt3tnBRBLDuypesqhpP6LM1QTeSvvxTWM",
  "key8": "8K6osd4U2q8Q9LKtbVNmZCJAVjjq2FpuX2QpQiezxXnu7aQCJtQxwmYR8TYrzjqi3QZy4C5Pz1RDAWgWwhs6Tb9",
  "key9": "5m2dBFtaz94rkPGQBG5u1gXFvHCDaa5VNqX42AsR2CFHUoMg7FScJyWk82qXr3DcrTyEQtwMrph3Ff5JsX3aKAbQ",
  "key10": "3rCGPsenH7Xq8ayva4ksydwGXWTBfyMCe9x6HY5MtNBavxMWRoHjyWh4rPc32io2QTbLAEqBpzrmNX5kf7gYCzqx",
  "key11": "5AXMM6xgrQsBGKVzszsi9AU8qAsWU3SsUWwqS5tiWQ2vtYSDfrqJfF3evdySAyLbyFrUCiMjzCrBkFttkxkMcJDu",
  "key12": "4659LqupwfGhqYJtAJo9Ch9upq1QcqZLvikChLHhQvVDyk84XorWp76cXhBo35f5G6Zgfw9bq5vYkyCcgvrczJ3e",
  "key13": "33USMnexzjM6meXpKNUGgv5QVgkj2EBXatcuX2ZxSG1dKxnw6oF5H1F3JYzfAhzuLzmhttFyWJPVAPh3rzmtp1Pk",
  "key14": "5xPcnx2hBegoeCj3XbjgL3UGRth9kq1kMZjKSsWKjJqShgyhJxBrymwrmyUVLDyXUUDuEoKTKLZiMNEUGwxSVzYc",
  "key15": "htPxBevyiewS96h4fpbRJNGhNtoQmWQ9UDsyCLhSx9DDHtV65ixMpvshZgjVtCV6Rp81SQsTivFFjsUiYKoFDhZ",
  "key16": "5srMsc9HWD9x2vk15n3s5rLjwRMT2pYeaSmoJr9jS8mUg3Wk74GSbY3pTFcaPrGvjdGEjsH3XAAtSA9uz82Shdcs",
  "key17": "4waDQDUig2JK9UnUb2xqnaCu38XWVwegxNdcXy7zFRJkgfUknLHMEgkKuiMsedc4M5wQw1LErQQS8BCWD7XviHi1",
  "key18": "3YmbBV3XNAy6cbYEXTuCBC1u8dDhKCXXkMWxBDVp3N7VSgTKnGSnDU7B6a3ZhgLTmvK6dUCtYBcUdJAs7gXkgv5m",
  "key19": "5Wa2wzerQnDej9Rk2KDb2Mt9w7fMuWLEUxesqxbNMvQYikXk1aqvkKq9m4iAj4htBqC19QaGBA9t12wC35Zaa3xM",
  "key20": "5FMMQuGtxrsjFAVMoXLFxbjnNRcExybMXvXf3u3gcW7WYZZsmTVGXF2dWnLgLzBwo8qetqtx21XJLGseD1Wjnxg7",
  "key21": "ZqHswCdtyDzB1VVaMKCwQ4bznLCzttS9x4fkFbrfiaJehaYfsbasYdvCnC7PisFGR3vruVWsGiSRdWRhfHwVrCb",
  "key22": "3F9QZugE5MTUxBkYuSc3MEE14884kmSfgQKQQcsZNXF6FDEYLjnFSTzjzMz6L7dpgnmNZb474ME21Axhkt6UrVp6",
  "key23": "251H8GDdtLJ48kFYBsTCsrnGXj9ET9EHFEceUatBd2p1zn4nnuabfKBWEo7A8f232KsZuVuNRGuzRU1fq6r4Xc45",
  "key24": "2PwBoTd4yCPTsdc8vwgoaCCXZhuFogfWtoy1FwxyCPYxHmLRx26eUfwX2pjTMn1WM8pkWGDvyzou76CKEAdWqSFu",
  "key25": "DLfuWMcMc2q3tCUjwLxkiszAa1ZwysornXJGpVUN5Efn2TU7T8CWL3aQauF59MkwpMuV1S5HVubESrWTtSuYRaN",
  "key26": "4GvkjpzAmTgsKDeS1cLqJcY5TDQ9zo2YAnDoejRg83NgVymieQ1y9fUYpnkjybQuPZ9BfcCo3q3QHkzoWgrXK49P",
  "key27": "5JbVnNiQbELoJ89VV2R3RSVSYofLkQqmgxHuohUi3DAZfuSc5fmc2Pcku2iJX8xpp4SKk9yAcBSJF4RLFptaZKC1",
  "key28": "2mTC3QDFXXJFYcR2PrbYr77KtxEXAQtzXjYH4x3ckeZ7GXga1YEi6yu8ge5tSFrah6WvQfcubywd15PVP73dRkEb",
  "key29": "2wguZehiv3zV4md7KnxgCRcPdarwTENU2D1RB8Vbup44GVDRtxjAjAKbxuzwBFD7RUFp4YK5Kmz323umnWsSw7sS",
  "key30": "4UCr5uDWDHNrU734Rtv55ymKykDmuvAFT3crJpPWtHNXfB22NC52KbNenmZHZGGVXG4czRrQHf67W81PbD2BzH3h",
  "key31": "4LqhdDfztNjjcZ78ACo3C2YY2pABBP8yCrFJkQMrGJ1H35wr6RkXa23qwChj7ETDDy1amQ6Ky3rgUviwjJCKJZ2d",
  "key32": "5aXw58jpXYNrzH5hNJR9PHULyYNZ6BdnyuT5gqhL6fNhpQRocBAnAMgbRQP9npNkiCyKzfatX2XvzPTNgvW5cXhc",
  "key33": "pGmujKVVhVuMjYCK5E3SZnEjZVrwJzocNFS9f8sawc7QEoTkJWDDFm8ycKkTZTG4xB4Tnbf4e5Wj9MNJiqvpGmV",
  "key34": "5hLF5CvDB7qNCkyLHywArJhfqTZjfKztgRsVyfzwt7Scq9FVCQnQmBgKVobRHTAMmkH6HaPj71c8XQzGpbvPD9C",
  "key35": "61LGC62NgFfy5GRCu3qAw6K4FRL39CoJJk93nRn7D6AJRuTHNv4FHSg89bqPrHt6SQbMRXNDuLWysGgHuunYbs9X",
  "key36": "4cVGrQNTDr4NrWLrnzsVcsMRQpEE1XJZiH2PHvopodbGjz6qzeJADWdPiEAGGr8sgUhhnkss9qQyR1Ws7g7nMGwg",
  "key37": "5NdjnoFVdu5dVcaasGJJpjLiVsx9irYnNg6foJS6ryhYzSgjZQySnoz7npg1ih6VuDAdCKKJ5mizLyQryb3SVu65",
  "key38": "6KchDByGVS8tms5QxnVdJkML3ieBeKix3drd7R2KGSNjQd4p1JZypa2hFxzJo1ukDzNtsB4VzN4T8AMdpkKVenm",
  "key39": "2kJKEHJc1i4tU2RN7jbgtCGufLemAwevbLkYthod8jj1Q6AF5giQ95U7tiASk8pLiapXABPGbVQQGW16xTDCpCBE",
  "key40": "28P3Y7wMWVVowBwxCj8iJyU8v9wKY7RyRSAAgHsnBetoZi3Qd5VWXNFqiQNNDPZYApgrjbJX7H4mc35iuTmihAmJ",
  "key41": "3Jf5wY5TLuSmanRqUPiE8EqwE8ZYLgDacW6ax7LMJExf3uDoecGJWv9rWT6n2j9WRQkjCJGKEdCqzMzQZtdnfxLT",
  "key42": "4U2Lco1N9cv6V7ZFCNB6XvP9iQzcqFtErRzpWgaxRFeGFZufkqiFQ3PCCBHa6hMr6e3F2o1KB7YRVRhpSyfZ4gp6"
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
