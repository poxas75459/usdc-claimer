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
    "4BDY8osiEo2L4JJua5h8LHh9f41i6zV18EiGbnfyvNpV1BR1mwiW9KvMWWC9dwvHDa5xB4NP3EEX3azvMY9x4PRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VHTFGVid5vBddU6Rbe8SqKwxcpYwcZvL9V7rVsGu96Sx1GSy3pR3SaJP2y259douGTrC6oJQwM5GMkvcUkiWmpa",
  "key1": "18hyAaabbqAMvpT9dHMP3JWkDrgic2je2uQmp4SPBiRkGUWLqRDTUrVAYaPGjvQ6GZUsiRpDxV2SemsMNXL2kV1",
  "key2": "57RXxMcD4gu2c3yJWxbiDipEeUPtR82PcahzWFMgHNQQLRxWKvvC79kCj7taaRGcqX6wvEkPJSZgUr778uyM7Ute",
  "key3": "4tt4HE3zSpmw1bE9WL8De5fQkhVsRiL5mhKT4tXVz6fWTLN2YQjhV4mt3BAjnyFAPoD5AATJcgo7bhRoGZybkXe5",
  "key4": "4zjevQhk1CakWU4WQdfzqUD6CVnbM65LCy88armHsqosWB8FknnSq4em7KTa8kR7qpB6qijUmsJkn6VyRHFKQ5p7",
  "key5": "5Hc2RU5F7WZBa4UrETejuqh26ut2ohhkdwuCDTZxiFYXwEeJ5syqzHXWxkiVH11SXXXxNJscH3X9ASeW991YbSU",
  "key6": "3UEgCZadD4ojjQu1Jek9GmLyRLvADmEdPPTudFosYno2qwYMSoTAadz8SLpGtFjwRbX3veuHP4KcmRLU1dYPgFrV",
  "key7": "46XQ7oaSX3BYXeRz9KHocZmcHBmsnw2qHyNQiBxrhYKLaLHrX4DMifwcxL8xAQDVfWU74fHAepNXzuPur9cD5Uno",
  "key8": "4P9qEgBsMBt6JtkBR6fGQRASrX2tbk29RyaVyMMWLrWoQLjZcgTPxzWFtkCY8L21KH7bozunTiS7sHL9gGbKcF7Y",
  "key9": "3vYiqwa1BhMNHo6Rr8ZQhMKmgp5STo76a9cw94pFuTgfEjhNt2BK2XjvZGNYLVoJAyBLgSeiuA7GyHvAAWtNbSTk",
  "key10": "dQRhA12KMhndSz2X2PRwT5bdKGpMUCtfL34FKk5DGGAQVKSFDZJ8LhBgaCK5sBgTisnmEhTsYSfKaLZZwM3EcRG",
  "key11": "2y3AZuYJp9SfqEgeLmvNcH1FFtA5m2bMuMJHhAgRo97j8579C4Tttp3Sw3Z8XDs5kUkMMe7jJmFe71gn4dJAbd5j",
  "key12": "NKkboYfiPKizQoLqgim6oYgZVWQsxohrLi3NjndLpebwDmMVse8GCgGHHKvkG1g4MGVcGM4EtYLEU4CYfHxsCnP",
  "key13": "FHAaAUczWJuEoWkMUAa33wzouR6nRcUPXWduHV7ZEAc8Nn9WHZwZPM1deNpN3naeE1DWeg2j5zoDwyJCYaZDTVv",
  "key14": "CFvdinaxBBw4sDGhuibW2uDFk7AZRyhhBTKHL6Gvhe3cseXVLFrHeuaaE8xzV6a8rRnYDfmTzFiFuBRPkeSeuFp",
  "key15": "dDHB99ev16EisA9gCWmn9Vw9zkhmeWn3dfyqxvVyZUfVPmj59fAeZrGwYSUqpgA1TY7DsbLeVYN9wbCsxsU3tpG",
  "key16": "3gwEnS53Pus977MpksxZNV7cmwZhTCYXy2MV1wFJwsKfJC5ausN1EkCiVMfPaDR646tWJRJeCKrTF8h7inxU1M4F",
  "key17": "3A6zMRnNZo3m4hFP5YVQ5MBHLE9NuKy3ZVkragJ8F78EerWFRUHXLyGBjurdsbyUYMNiWKMJRUnBzyrweXH3m6KX",
  "key18": "2KjdyfpHwUkpPxD6nYzxwwcN2DRDAZ1TFj5hNiDCrsQmyr9kUs8VyGP5G171qVsFbRxGXioqAZFXAeL3ZZwNbBJT",
  "key19": "28ZHL3j6bErreRN3W1nZo9GMNZGVrdFnoGpKghpaNzYQAdRgRDyXWmMxFD7FqH9KtWBzro3cgoPb9Y2Dbn7QHwfV",
  "key20": "2hETcCBcVAFUfdcT1ZkXvq4X2BDmLt1GULsGhsKiwG8xMHN7hb3bUqQTDxraHqx23r6bAPEcCY4YDWBQHyNx9MCV",
  "key21": "3FSdyCgLkjViNXLr3FzUDzXuGkFGNK8UiZYbHXhJkdRgdx2CkHLu5LV1kqSWrzH6qDfanpx3KqEviLQTvcRFUVf7",
  "key22": "5Ycbs7vCMrJKyQYX75C7ynsJ7SojawAx8ii3fAnvrYtWRViRgdu4x9X3mtUzuEFyzu9DfRg7Ur2MmiyesMhvFFjA",
  "key23": "36dnNDPB5zejHTjZkSzZNAFohpa57Mfyo7RC3XUxtmxSr8sjvg81Hp5SY8kXpDjYwFw6SgSjHsrK6fjAC9ceoZZ9",
  "key24": "33piYDYkjbigquNANGVx7zECYfnCiXcQMYUcjX8PW9kgzs7eFQFXZ93TCG7TqbCqhQS84PnpnzvR8hy1MaEzUnXq",
  "key25": "3HVSnsvUNySskQCFTZjaWYEGN1NmW78KbRq4bB2fnTtT4rN8eQ2u1PPGXt4apqWqyF1tqFuMXkoMQDxnqgi7T5Wm",
  "key26": "tkowkvt7D5wxvrSwy1CjqKZW1Qa4AeESNd1WFoF6MFNDtFxs3hyx5Z53LEjEgoKADM9EW7jriRbU3k1MYKKswpq"
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
