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
    "2TAsoRkJGAvxetFwNsFPG6kvRsK9kmGMz1RjYPyhpCyvftj6gXkNNNeVbjU528QGPcr3XRvtiKakKVQsaBqf1hjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E39ggFhLYC3euZvKPGHNwDeMBy3eyhhQ69r36epV954umPRFGrWRGXMQBEaYyLkb3BvSeAeiFw1bTULwb8evwk2",
  "key1": "5BXC2iMQmHewxrWou1dVvcWh9RxBYTWVhhpkhfCBRrwhAPW2h2xXHdpz7uSGjcQjpW7CkVxXkoWo9wUKKVhSTmHE",
  "key2": "4vib5Sh3GKtTZGNcyMewucQUkNUDPEtEHqnB2v96U4MTgihocZ2MnvEaXmoEx7KssVGujAUZ9KJUw8AJVaX6JqRf",
  "key3": "4PYUKHZjvmsJQcKsvWSxP5Q3XWNrWfbtaYVZv22bsgrNQWC3vTSJRqWwohAeNRThGx46yDodb86fVToukB7EfqmG",
  "key4": "5WMC1eSF1W4S4g6nb8o5d9EiSceZRE4qdDbXmLYWD7mPawPbWvCU7E1ezMXLWjSL7qNRF7RCkyULa8LphQL9EdTs",
  "key5": "4gWPYwnL98v4DmKfzmahJtSTJhFCC5vqVFCkBm16Edtoh4UMaUokQDgEmDmS9CEbfUJU4PvjjFw5y9qnNEi2gSZb",
  "key6": "3ozgj9Dw3BNHtCNHJKeQSHjNipNWeWm6sRFijXt8V8K6x2EGXs3gkqC7dDQc2jDKf2quXrx6gAQR5YNQw42ex8Mx",
  "key7": "5FKY7gmDuUhcbBiPpeLLKqzhuWJbAUC994HPkCsJngtYCKrdH7e5MRaENpecmqEaEMw97LSouBfoS1G8x1Bshv5g",
  "key8": "pCA2VSuTvb3wPBGG5p1VTc9aHdVfMNpoUckLw1k2WTAk9usiSbWE4GkfqrqNnxKz2Tamh8yWhGZjBfFqC8FPLPM",
  "key9": "4wJWwjagmRdsSJYJVEWvWtci3LeYtYN1G32fNE9GAQYTh5RuhQhXyca84Kucaqy8ZwVEXjx265GRimbrpw6Cya26",
  "key10": "4uoM23cLWxHiMBjE29nwBmbEW6xSoRJkaVDWyr4YE8BdonZ5XWxGsdbMZiGHVretHv1g1wyPt8LMZ64oBGHTC8WR",
  "key11": "2Dbyf3utdYoWLWS3dUvUdejFPiKmmsnNdiz9iaH1Mf61fRJznkFXH4gaQutTapZuLRsuKsnK7sEFL7KgEVytPYKa",
  "key12": "4Vo8UKV6v5VWwranz39W2eUV6Awwd6NXAEKeGY7ymZAG2bPmwE9geJqVZ2EzDHtqw3kuwonrk46tha2GGEHYzvRu",
  "key13": "3YbYamXtSwpNys9jDMwYXQqW55AAtwBrkupzy7ov7EkMzX7LuGvGJhhvYv7wRzT84PEtZLXKqAYeEnKiJVunEn5Q",
  "key14": "4jLa2SrogHgLU7XeFVHqP2mgk938zaGVUps1j2LF97gZZmvX2Qrn86tEbdZaL9zgjmNsgi1BwMSuKUdsMug8XjrZ",
  "key15": "Bm96Jz8ux8Y9NfNun7oJL6yApNx6S8SuZvJtivkdPVPUPzpBSUFB8uJqVauXDGDKD81EPEvaEy2uKxp6C3g1pRn",
  "key16": "2XCRCSXwAW2SfAWdejWhGFA3vfYKEUpEM2haRPnoDHurb4EAAxtdTQxWdaU5E4cVpwSH37Fjsy5QWxgjtdwbLpsu",
  "key17": "5qBStVdhxzfMXsHbvv3pQjXasZNNAN99RpSTUwcgfDWdJUQz3hGUX9LJ5AWMkfGRzmFHMkaVErsRkJrfnaPdEddK",
  "key18": "4nmK6rfHSeVYVmwjRSp1uv9rLDtCy6jtpNLtfSSyQ58sSD6z2dkBLA39Pq9NQ7DE6y5ZmJ6a8sHmZT1ixEdMEo5U",
  "key19": "52k2oRTjX3haUg1EKj97uvmeNjKKKfVF7Y7DkjUoTQNDYtTDehHjrE6VQGqNT74FWaPEoyenJdmM76hdhsvLnuQ1",
  "key20": "2YspYeQXYTKvJj7vv44Z8PTRXUMCdhtWtrMzTQcmAPsCEuc3zmSjazvg3Cx1493aThDppeWompFyeCF8zHWxqxdp",
  "key21": "3QFhsh5Qkoae6jXiaZXVUk1Q3JvyoLUQr9dj74LF3JCRs4J7TvSB71qyfDvuJJQpBU8BohxrtUt3m4HRavdXZakj",
  "key22": "63CEZr1zBqAbEBzD64dGPQJde3ZokxQ46u7efpiSMZEdoRbKBg1knd6qevctNvcvqg8NBiyDWcpqhCUXJDej4qaM",
  "key23": "5Z9Nn2pvT6Gb2YsgWwXnPDVjiNMpGsmzP977Jqiaaw2t9JBQzsMakjj3ovgS28MkaP4NDZLEJdFsQ6kKxhTgkMLE",
  "key24": "4nMBwcfHjHhhZ1M7KAuysEu7GyLxrtU3LoLvapnmH2DShwn37FqBTh9JNhojbpVPb3Sjq4kbJpiFAEFWLz9Jkp2t",
  "key25": "29deWef47MSqSvJK5DZEYHq6CzBfV5DQXWGyXWDWXJtk2qfjNRpnkot31p5C36Ufq4c7tZe11e6ND1zRoXFJG48L"
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
