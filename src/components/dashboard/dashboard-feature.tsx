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
    "awCLWHWevDXdtDxveqH7UgNnqfwZG9KsUdfyocF5Tf27RtsDvFBK7EYuTJwvMKcMCotBDBieFD84U5uKqC5krJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfAKQpMjhvr7PqoyUuhaBk3eKd2abPeZaosgduyWRwUziGttubZv2p37HVJDpNZk7aQ2zDoq71jbQfjhuArXsKT",
  "key1": "HUbseQ96Vw1JinyMgHwCa7XvmeRk9sjNexDxtfcw4xojcEPKc9byvx1KKGgXRNHD8M8Pes3vYeydSeoimEBwBw8",
  "key2": "4KYHFwrXVL9bLtaGX3Z28d5seS84Tg68DQoKU3nqJHHEgeezhPSoewaqJ5Z3VBciBVfA3DdzRvcfEi6SjDtsZfXv",
  "key3": "5wugiwrW1fLnPYrg1othcFaHCJaqn4Yayt9qwse6hyUEhsZx5GWRPFWh9JZH6ipKNZnZjGj34ZuddraKY7V9DNJy",
  "key4": "4WEkAhaFF6UusHwQuQpd85VcqaoYvsYqJZ3YNUmLP9paeSXpSuZVTc8wBjUHADGuMiVRXqvFgi1nDm2t5YmnUrpD",
  "key5": "3ALUFH22LP94PQfF1zg2fxvvqKZkvb7jwAUuZZ7sAQShecZEPA7DrVuY1xpQg86d9N3vE7cwmbNoygFRngPDcU3V",
  "key6": "49BxBuBmeLT57KxiUVr6gwMTu6Ge93JR3s9uC7vohFcC5eQaA89Uq1hpBXJGKxAoiSqGdWPLQfpXnXHMmQbn2VyE",
  "key7": "5HsiH8BhaF3CQtwkj2w4VbnNV1RkMbv6vihCQfTDeu3eWzXgW4sXJ3NcZSCqMABAav5MWzMbT8T5dvavGe2T8ryW",
  "key8": "3RTj4tJDQTviED1Sskjs78nvWJJ9bCs5nkK5SDavBLoV4X4B1n47WkJsXjkHB5EWjZ8oRHThAfRPZxZc9kLGBQJF",
  "key9": "3Nh1er2kAUmyEdYi4LerhZvv1Dsder2NtWbbVjYPyi5y5U9ja75VGbmwZPbK5JNydBFP2tD4d6vHBhhM8bqEtbf3",
  "key10": "3gg8ny2VhViLqNc8NGNoBQS6Bpsfcd8bTG9BX6GB49SKXPQcBmFXXytzbB2BMPgydKYMP54NeucemGHSiMgvCAeV",
  "key11": "Rh3pEaP6bwLfvkUiYPzLAbdhWWB4v1dBqVab7ViUkPmiKx9ZDGPB9UNihaZyVmF2yVyyz4zY3xMQRYoGEH2dBRq",
  "key12": "2bXuArL9TBkkqaD3yruNw7ejxt8STRzEAD2zwSagF6mVpg4JtCKPzzdsjgbYuzmar9QV85XMTZrt4JVNMv5WNijz",
  "key13": "2R7UzjraPU7uCXAkYJUtSdHXMNx7uPSUnQ3u33YEwHcaKhqHnmWq6k4F5kZSTXsFjDKtderjkprWaKGcGNjq5EH6",
  "key14": "WtoRQXmxemCTqqPJJNv5BSqLajMz4aAnaAfAvqPgtxUsJDcK5obp5CguHnu2U8En64xYmRAhDoKsScw2UH7TN8N",
  "key15": "4PrDZ8MsyUCdfejbamqE2KuwSEuC3cG7GjVqnVTf8gbdoTHUeAZqJZAXMQ5MNXyAKnN9rMiuXnDfT9pDjKHeMZRY",
  "key16": "57iS39pESKBvsbaExK5Zne4RnjUpEsXEJEKGqtrM3Te7HUb8o9q66DcVxvcq9sHKfZG2dv6W1zSyFQkxVb1rd7bv",
  "key17": "4N4kouHrJMTGWuJnKmUVgX3Hx8zsuJ5jHYxSZPepRcqptpgSf9XXoDGkWio1paokwSfnvAmdfWEoceNkYwb6LP5B",
  "key18": "4JkPD81bQeAEresCXu1rEn38caEY4GdWjrPqLuyn64TUYPowe8eYqN2UVHD3v2VDvsHw6PSXEFqvhYiTpUBh2uRa",
  "key19": "5Dk4yQ62vDyqfe5qQULWseguTSHzsFfqqErQomogZNV9SvjwXTLisEB2RmzggvYFGALLY95XPhH4MkqHgaNsL5b8",
  "key20": "5m6rrVRLPJfLNYnX7NQAay7FmbG3dV1SumMfq3Dst3wey6ai8Sr1RxM2auCaWXmfx9sKVwx7tg4uogTbvjP4EpZF",
  "key21": "5FyJPRbGgQZvajNCEKXLE7DBPPq4b7TEEKPt3xseVv11nXCeyPmWpdj9SCxXuZhkQ7vxTC716pvD1CZgxecwZTcW",
  "key22": "6bwuCvANj8cNEf6o9hXJGpjtdfS61661bCGWGEuexCQkFHXLf3gRDF4oRCZrPvQMNyc8JMPxXsNC9XQs5WQfp9h",
  "key23": "3ond1WKPHZEG47Tr8skGbxipPpjKYo8ycFtneUpiTU8brQ23AcZCLkP7PxesX9bc7wX9cHAHvo6YoYuT1AQsQnco",
  "key24": "3eF51ZyCGDLATuberHESAgMGYHs8dyywzdRZNaiakWMLSayN7hYxUDrY27y45TagNj3Ux6niiEGWMUewTiiBLzXE",
  "key25": "2TrSvDDvQhas1MTp3GhUCR6on6Fg7XbY4w4gvJamJkPWNoyQXa8Dv6KYcTCFPWUWAXE1CBsjQRdk9sjxYaML9MFJ",
  "key26": "2pDZdYM5yVQNdDqQTD9rgXi8RdiGhue9TASusrQ8v3XAbn1nLbe8YbejNyVtrML1Kyhw1VNDNhsWZNoC839WVG9M"
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
