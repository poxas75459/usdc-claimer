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
    "2iofWD1RQYhRmpFmS1dKC6emRLjXbZRcA6JHBSbS6xKvmQKHm1ZmkKNwapn4GMTRW71XaJ6utc7pRqtunRAM3Y3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Z8t9vPf7PLGgBgRScg8W3YqY2yDhCyru97adQYHPN2uitwXXsjjtx1LFAbKWopb9jtN1WS1oj2t3pTvQd2NtKj",
  "key1": "3xM9EZTqtuFHUEmy9w9sUW4jS36zU1np96zZhS6ANicDeUyj3AkFL8HJDrxBMU8AgUE9VqPrm2Pe5Xnw76aGFxv",
  "key2": "4ABVs1LwgsVJH9sWWcsgsfARCj1WazNEh3W3iT2UhKYURTJXnsib8jJFF9nLd81RTDeHoMYXL48hCGxbqzT764TA",
  "key3": "3Bi2tze836b4gQ16nUAZp6NDhgNrfm8vQQrDStpPennYXiudRwXbykkUzW7HKnG271CUJeD7Q4c655cBgX6vmD48",
  "key4": "39mtnFoNZzYrwUatU5dVkA59SaCoD1LvAPrYJPyuaWM1CVrFzaWkFijNjMvELLByxhHb9vPcgKRPVoWwpiLf24rf",
  "key5": "4iq4Qxzmx2HTdFNX7gKp93hq2NMJexdX6bHxfBjmFhuBZijLKFJ9hJRD3CaVHQ94zu5wXsUjhWE772FvkxHg4rLc",
  "key6": "2kSPv7kQJiybZ5D3aXt5VCzbeBnc17aPoWf7GWm3utjivZaK3PTCtfJqepSrRyMaczkNyBnwZ41AhLLnsN7jV5sz",
  "key7": "5KikX67qc5ooksveFhk9LqAYD6a2PgzvNPZ5GTruL95swSEdEDwis2YeSa2LdUCMxZwtLnye5YtTu7BRjvkZteme",
  "key8": "3L4vX2yYQYTGUKJAAA1qqjhXXDudLkGKM31cC4fXBUmC1L1JyHX3uSeuTA5Ua3as5QNWYcJUzg2uDdk5sZNpQCA8",
  "key9": "3MaQ4HzqjWrakBg6KupyeJYZjjiNY25Bw5eS7cmRwde3JPGopgVdSQQupEAtTi6G7B6ZphzjwNr5BpqZtAGA5Hir",
  "key10": "fGMw4DT9RLPUMP6nywQtRN1mrjqJQLeq5Kbx7MjDfQRHKuoNtXALk9DWCFALDiSP7YBvEfXF5X9Zf821G7C3tWr",
  "key11": "45eESZK4JemkWYVxSsrBrFTGRpJVKxAu9jBoVqA73c99skcy8frqqCXGK7u1AUNhJutDrAWAaWHNZBQBEGDbfaYk",
  "key12": "48qXMiMnvBSwDgbFMuQjSFZLrqyHCYLqhMh13DRmyPgabeCDNCfC6nv92Grk1LKi4kD3FyNTtjd8kujSb5GZDYc1",
  "key13": "63hAPAVnEFrPh5Pw4urhBgaV3FpHWDU6LA54o14Ag4JonG2tAtac5RQYSL7ARNPuhuD8PXyL9qBsLuJddCRdzSag",
  "key14": "qoz32rxiuHmP2BwrCq4sETuBEJCt2YSH4Mt9nCAyxGMWZ9X3YpsQmuB9iF7ssafniq7ngPwsbsZ59JaYPRqvjkq",
  "key15": "5Utk45Ukzk6UFbj8xmghCnfNCQLq41eq7eEg2uAo8mTAKir5r5anMCCKsWPPcpW7s7DfAvU7M4G6BFUtU26tf5iP",
  "key16": "4EWneaTHyMtzyRB9aZqy3XQupXNKEtPymp3ZqJdYRwus9tFT3q74EU8FVA7gHniWBLArYyKAD7kXFF3kykfhAPwJ",
  "key17": "5Szk3Lpa1BeLe4sqK9bUx9TQspAwWHxz9AGzR8K56HqmpQwC8DBm2yYdtSiwaxjnYXKJZGeGG9XfDBMzUsZ69pJ7",
  "key18": "3n1gbQTrirk9w8HmTayGNpWwoBw7tGt5SfGEuRQNN3HkiNN2gApQfMAN9k9DromtbF7chsbqHcURR9ZrYHDEy4H2",
  "key19": "25CQPbytxyaEhdPHinPqN4qw5oHcrkh55jNzbZq4S7vP4TVKdz8kW1nSnbXogyakxxCwZQ1F4B1DBZqYnNP1UCS3",
  "key20": "2sMkApUgSmxGKY6xF2wf1vtUVHcdbn1icX6iZkFtRz4FxHQsjMQtu1TtnzvrgTAWQfefNSuVLtoP9At3HV3Lh1NP",
  "key21": "4zmZeuu94LUVB95N8SLsbyPR8Qjw1qENvGnTx8xsBhir1jowDYKg9Gz5HEebWGr27PXMh7XRuRxJDb4qhKoWWTbm",
  "key22": "GgeiazMwReD5h5zmnAwfEXLPFFosAiozXtgdArsSgufBA91sUbBjxCb3eBnUbtdqRzcsxpfbKTWMpDsijJhE8AB",
  "key23": "2AUaHyQdk553Qf1yG3TNuqngonpHnkMEhM3tqiwfKZGZy5RrnzL41corrj4YEQrhR6DByEZW7TCcbzEK4L3p4Bb5",
  "key24": "2vvD6VcjBjTqWcLmSRwvoq3t5tHXY8mgZTL72PX4DEXAu1BAWtZmZZjboHAEccQXanfhCfao5QNygdXt97yJdq2B",
  "key25": "qwQ5UhLm9zH2eKaLDgbwMqxLXWGoYyvqmkXUGJ8yfjmv8ANm6CgYcFmAoJovVwz3ciQUVAvmhP8iAaWmFop3MXq",
  "key26": "4HZJ5vsoC7HGJuS7rtPDDsxQgbGbpbLAkfhhSB7e6X4M2uyyEExUdqnEsKsQCbnpQ7THTqAUPc1HrZU3dTGHQhFY"
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
