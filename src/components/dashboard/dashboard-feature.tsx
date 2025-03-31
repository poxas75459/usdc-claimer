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
    "q12NNsMDVgwFmowK1bt6QAh5tkGVWP2qD4bUd6oyhNTeYbzYdYvWVUPhkL4L5WGp27m2EUtasNUvjuemMa656nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSLpkHAL8TJuJ6dCzD2g2PNMzE3MpEyh2fUpHkpAy3hxbTyLr9V9RD4ydZXskaGqcuZsenqeGX9wNmhxrxEALKR",
  "key1": "DcSBRmTdcSYMeKqWZiweuc1SwxHzkPPfnpTD6AgcCnwtdtWnpatpR49ZZY9f79kBit9ZaK4ZCaphdfEiz6KAkWb",
  "key2": "5K7uQHTUjuRE4wXFe5qDspRdmF93qV1gEfQYMNWQ5bB3UGrTfw45XgHMb5NWSVnpMidwKJwVS3WbBbufRF9G8Evz",
  "key3": "wVTN6K6y8FSVfzAr6r8KtZZvbWVkgyxucB7iPvxSTGSzm4WKjX8tixHVbJQA1M3v5QsUr7BKrqLzoSK67VcYK2o",
  "key4": "VrbFnEvw5RDnQnwxPdQpsorB4sg2P4LYX6ESYzKgQPbtzmxjxqeUuCW8pgqCCwT8bL9sxyX4ePBQ84pMDWBJ9gP",
  "key5": "2VajWb5D6gEDhaUMfKxwUSRtuo4xTzPWe1J6i4Lc71EJQmLXVoC2Cod7VtZoEEMHmyLUx3jLBJ4VK1fYBEMeHy7Y",
  "key6": "2tLYikXe3hvLa9fHHXA9ktJ6EivcY55SxvkZWTeDHZeSCZKahdTrr5uYmUVpLxtgCjVcWF6sjMerQ6PnLHX85cLt",
  "key7": "5oFKZnXChkeK461KQ4XX4biuepPhZP2xnwW2qhZmbq9t7tRNGLvLHy3JmPWyZpMhg8iwecuTqb1mfFjCRPrFrdpH",
  "key8": "5PQrChVp1vb99iGV8ve7MtQJQuYJZz9z9k8sFpRx6tz5tSniMqt7vvRKDjYP8xSJLfHbfJi12u75bzB54YQcu2dD",
  "key9": "2WUwnGYGqbvv5rZ9aZQTLuiACPDbj5h1uSB6i5Jaf4DDw6jokr1AQL6NK7YeYGX1MivBCmuCymyyyeBFYeZFxuTb",
  "key10": "28Qu5qbVmnQmdHC655n3hdXVJn5bU27VGCkNNFn63m9ksY1M4Syo2QVNVtruKejW7oaJdC7ipFjCEGH7KvrQjrgj",
  "key11": "3otcKq7RMbbFbdRjf1MbbdBJqaDC2FNhG5EG9jsPuvX7JJfdFPLMBWsRMYGv2wNX4aZcQDD3mX8cU9zF1VhNPGCt",
  "key12": "5npqz9k1C2gSPthCecmXn3r4zWfsJcW8afJUcCWc2NWsT3GDJM4UNge8fwZSDEUCV96tP8ePVS2qbaxiQ44bUBd3",
  "key13": "vLiyz6abBMjQ8vn9U49nuvtqkWkYM7vBnWrtj4DFbKW5e4VyPSa3Stpr8S7eSA9NSQzdffWfvmQGN5QjChcRkCC",
  "key14": "4MNpEFjEe7Ds5mM62MTh6peGWg16HAmtpNFxhAuwSc66hTd1BPYj3qnQkMYNcgffs8fHT9gxme4d4YqGK5HCFaei",
  "key15": "3sbWVwS4usD3QtD988GGWQfGMAhYj478wrEM66JYaiDqpSKYTNKRajr3jDzyw1n5nAjJQcKDwRE6TLfMQ6pALLvR",
  "key16": "36a3VeGcR7jN55VETcWmWXAHpzCGdUprP4hmtmWuAadRNWP58pw6Mc6DKZZ4MRRWF4DKsF9oke73KjpGecnfRQs5",
  "key17": "547tc3dJ3TrV1mCW58s5HvjJjagbWBwiVKADTAXTPDFqhbG3FLVQnDSe5kLbXgRPx6yH8P69irtUtgtDPcRANCYU",
  "key18": "2AvWb9P5bvuAgMyX8tvy27WG67B8odffmz6XLE5ssQnEyXi4CXzoUj8TmTVwpkk75VAXjeqJDfDm2xxswJPum3w2",
  "key19": "VLguCkb91H5uHKAiD9BsvmLS7j5mT6HB3DvJsDk8eUSgmr9vzexiaTNvJoJtQ5CaFuQqyGEGw9EhtTmaaiAayZe",
  "key20": "2D9NyLtBBiBByiTAUEXVq4eiG8F3YqcJAfHKQPnnvAsMtaRsGMGqCwjAunhprqfbvgiw5oCuR1i2XAu7myhtuZb8",
  "key21": "5Dhi91bU1dHE4NPLSR18GGEHoRQ3kXXm6KCdTwt5vANHwM82SNmTxVNZdJUFgkJYg4UK6q4MwoCmN6BTnvePh5wd",
  "key22": "2usDwNxAhHnpaSiqcpsQJo66Ma7hZysNHFSSXaBbmf3ynp8cAMmtEpqcKyXvnKAoqEcnXuxBSbVUXpz72Zvz6RQK",
  "key23": "Vpvt3y6gCAZucZoNstkJWSgJymY52U5HvoMza19t22s8VEeZgDE64sWCcJdb5HGSdMkTq9neH8jdr39G2n4ACZz",
  "key24": "oo8vQxQSQjGP3Fc9ybGNmhRvD7wj8RTaSY1HnGt1opxazV5tfDwfG8hdJZ6fRYr3LBBsD25njdxTdiusPppF9RU",
  "key25": "3zqk1DvwcybYkzkYgKkwmKaSVBHFNEdzwXSjLsCjnZqPn48JjFzzYqx7wMJHRTAAfYX1s5L77e48ALkCfqEBnAam"
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
