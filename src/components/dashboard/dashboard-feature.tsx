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
    "QbHikXLJFyhYThv2XqDqVZ48frV54eESJc8CGWd3wVBH6AcHKmr2ogcxgjVQJFwKFrvLM2HqxG19LUZDc89yrBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6q9K6fWdoCJDbbtBD6iTSiCg4t5J6eHUwskXp6z9noM72mds9f2h4U3RsBSDQiWwd6QzK7Tuz5o5TUkvAtmpMy",
  "key1": "WPUUkBhZRjkHSfS7khgqfJzSSWWsy3UXsDNrtvmfCeMBHNHPeMPE6a9XiaG9jStkawsyKEgQohSNb9V44sxti81",
  "key2": "3BXAkUC7pKd2146cjHbRrjLuf8uWn85w9FqfqdV95P6xcGsFZvrKovbPaifvxNPKiKcrHwTesRZc2k4VgNcEx14z",
  "key3": "2XCkJy4qoNSJ55UUp2mZQxS36NpSJjDqTgWVdwXJbvikSWfjwn7y4pQLmnUB6QPQcFReXYbkpapfGuv9Bn9822y3",
  "key4": "4LP9ppDBXMZ2aYEsor2AEdtjcqWJodArpyHfBc3MzFAPdp2AECVcJmn7VJmybDPBCKqd5Hic9YEh5Pf3vBEckzbV",
  "key5": "4EL1fY7SCLE6zTqht8cN73magq72Eu6hGeVWifhkYxB7dxkxQCqGq4qew4ny1FSGJVN7fL6EAzQ6LjJNXtnydFAs",
  "key6": "2gMsCs4ekvmhYG4Dc3zzNopqxS2EgX2yXBdXW2wf2JvJMBHDzbPmr9nZoZDCSKMCJudPX4GbdLKYZFnsXRzGLa2G",
  "key7": "5UwD2MzUpYGPkuSTd6c95uAXStK8M4VLeT7FHrfQ75VTL337rfZbJBrQvGupkQzCFb5DsBJQ5Xs1rSwpnfcD3Fz4",
  "key8": "4tNEWVNtiDYjMm7jQVf9RLUJ82qhtH6TaFd8kSpCu8iZrrqRHeXCrij7KY1HpUhDpMsnJLMmexTCSN7ikPK4T3n8",
  "key9": "2UsKxatMwojHRrJNVwtwybr6w5zpCCfZoyaQJo9b4GwtNdyMgwiJoYHMKVHTiKgjho1krAGQmmabQcq3iwtay6xd",
  "key10": "3HkugnNzbCS44o7ht9JHk7wtLXpt8yJENwqb6eWekrDiTekt5q2BRFazhXkZy1F6e2it6iNKnTZMXugA6i4o8pRk",
  "key11": "LLo3c5NBkfFexoyPHmJKsmku3fZo3K16MiYUbTh5xrHDzVNR45oT9xbTwsDnh22XGJefRave77vidNLcTiSKxq4",
  "key12": "5TwYzZgwxHvv3A1EUuGeR1bwADnJR2nYkCzTpL5B5WyTvwWPZugtoaYrvXY3NZMRq5aZQzEgJH82K5wG5L6BVAKP",
  "key13": "5z3x9gkFJn8HFtSQQKKaXf6z5pgjyax56jLSWrAVyG2CD8y9FtBse2Reqn7YU72cuRUyykbdY7766AfXLrp4efxQ",
  "key14": "3a1GkGfSmhRN4Yv5ASYnvGRQV9rTevM8JtKiCH4tze89KC9kmpHikXrRUgNYGwAJtbWrXuyAavyeUHd8jCWWBxKe",
  "key15": "2Ct3Fd4H4LykHSoFsNprV2MxDbCjdd5F9JPgV56h8iVQ6DgabHwAdLTVrSV8DrZFH9mweHDfrKeMjUnsXbWvq27t",
  "key16": "2J5Ei2ss9GCsdyJNDVwoNZAtcjibWzhuX81ZX15jdjY8cu33RNofhnCLNf7aoxh8zwPEZRdez7uXzWSnzYbGAeMJ",
  "key17": "hFiS2nQYg4cW4CUoFTicymDkiCHVxCdmqiJwirU5C3sP5r8FWk4BmGrqUqDSNDiNU7Khb7oWsqNPGQoz6H2PFCj",
  "key18": "63Qpp8zjyLNP12NJgKpUu55Y21TSeVdFhSZVekT2VyJggyg4C9D1qKuXzkrTWZeiifm55j3J5TuYUqneggxuNpzN",
  "key19": "4YRKXECGfsXK9GFMRAVgdb72ybBkuf7Vkdc2Ffa4LTjW2gtEN7d9pTH7zLspQhNPEiXgnh6p7LDvo9ER1yuhAmzU",
  "key20": "3GaJJQrWidmTRHxXa9ZTDnn7MdmDngyUDfTkavgpcbBfy22BW4XXgSWnekwCsAEtUiSkT9v7TBUCxfbTzF5R293i",
  "key21": "3h8F3KduVtPfKKb6y3o4Jhz321BwAabgdSnym694NymcZ5u3C6pBCFr54SyU1i5icsYy3M6SvsfPbS5ZxQQ2Y9xs",
  "key22": "4UfDUAmbjTcC95NrK833bi8Fz11JGupZjswMQ9nwfUzTqvYfxGXf4DuDfWHV127vrqc7Z5diLyfhk1vF2CaVP948",
  "key23": "3b8ZY3ZGJB71p6eFg2w9LC1MV3JJsy4gKMaSSvqJWyjmpHupx7vPwCG25HHH3tEZbL5USAFwCJKtEkMG5roUf1Ve",
  "key24": "juiPBEGSwtatcWZaQngxKNQ9ueKYf6qBUuHStXTNtU9DgLNEGkNuJ2mCX1MR4sobyUs7iwJeFEN5EVtdvif6pGL",
  "key25": "2F1fKWhUZ8j8GpkgQ8Z7PCHXQCMZcQWm1w9akykXYpPUYkhpjNTJLFHpuDwQ5Jfs8B2LKBHK1QEyR4Bkm5uLAp5Y",
  "key26": "5bxNSvpWh1sXJF9EVRta9M16P4tEvHgcPYFKJkPBjbSHEX6xFaC6QJHomCM6gPiudYoErTisDeF8eUZE8h53JveX",
  "key27": "4BRXvwht3Dmm587SK9KHXxeJ5wCSTPC2yDWWjZvYmx7didB85MTekKN3RaVjSpQpt32inuHMc2pxMG3s9kPxCxMX",
  "key28": "4nZ9YAYp5dXNzXBmu2CTebxjXzgA6qfTHYAiyeFcB1RcSbeNgyb1ws6ir3iV58c4SsQytqcRN2hm8amBSbw6haUL",
  "key29": "4FqQJgWDid5HeuPRWgFzXhJoQAHG9qRmqcPoA77Jox1NCBnS4mqR7mph4sUU6Y9Hr67Bvs8X1CRM5CMaTqRZPAMq"
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
