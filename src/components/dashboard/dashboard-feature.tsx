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
    "4QEvmtfUH7cRLev5jooxna3C8QxTnUbMicdG5iLgruE39GJKzbjojEpkkPEmNAgEPAHyw4eKKrHfsRawX6syFsrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QY7S3USNJqb3kSCdEBY8WzQCiYj4qpk43hXnSxcwVNBzdxBJGS6qVXtG1q1rBv3CEqYGhjG2Dpraw1GdHPLiWPS",
  "key1": "3oUyhZh6aAqMfzTDpnk8ZrKMaVuWMAXaKVjZoa3ikXfAGxMTHfXprUN1RGtdHfYL7AJJ466Q2ayuro8AkMasBeH6",
  "key2": "5jAAPvE7DG4Lvfgd9WLEYYec6dyhaMg47J1jBKn2ydkwMG57iZsdrFtDxwueCZ2bYMnozeVQgSaHCZzHAE5oUpgi",
  "key3": "3FBgaJ8gV7Au9WTU9imQRaXaeAzbqeWKG38ENf4cuNeCET7QtXUEJ6FKugDxPzEHNgqBcYq1oRKdkPNrq3VLbJ2Q",
  "key4": "SseVCtVWgZU3ukgh1NBz6N4juq1PF3F4rFjxMkv4SDzKE6u7rGStVdJSMBtGNSsAYqEGyiQXP2FLugePYMwqJuX",
  "key5": "4gwQbiFvuxWNjasM9Au1UGJQKoC4x27QwQUAjRd4JbDYmiQbLU1dgu1gbkhPgiEBZwH1RJ3DKcjWFaQQs6CwFuN2",
  "key6": "475wJVefAwKHWv6KiVYYZtVuLZcitcMpw1SJFdaCXRVLyb4dSwmo482s1JXNewriwmNcbpKsz7ovvixL3GdoaJfg",
  "key7": "2UM7qefDeuu2s5APiovG868qEuoHzswVBvg21iMDAkBA2tWJsmW1kva3Tqh6t8NtZg73a6NpcRRVCF4fXpiVmrnu",
  "key8": "nLc7QcoiW6gWupvpcJUAfANgrQaaQgAoHWKvZGqHXmeQ34J8vqmwsJWceUCReiYkpJfyG8RNPveWSSbQmVK4rSD",
  "key9": "22HPdJes2ZVJaWoioewUAT9qgZkM3pGkPaTbkHxofozqQnt4z8U4Y6NseYkfpGbPhwv44m6RZCJV6K35hfQD32xt",
  "key10": "52pRuyuQm4oBaPUyjXCWRoJxDUctQf1BX29sFUHjHja7mtctPfJwMYKUg5Mwhqenhhy9jZBRbFyGmZwgUs9jAFGL",
  "key11": "V8ADBuCqVTLBy3ccjkWjpJrZ6UoMkmZP6qvqVJnv7w2vrLiaQQXNerMAEJGLbDfu6ajng9m7iuJCb3HgWBA5jS6",
  "key12": "2LpqqTNNxbUXMLfvQPbACn3TtfLAYFdHcKU1p8A3adhbfLDqH4UtRHCVHHgYNjewxBUdLTtYPu1wXMVbG49EuJvy",
  "key13": "4UNxbqB7Q5TUhUkeRanbWtsTXwDvhWHyoGNJwWfzpBcW5P9hA7mjDk3RLCR8V6osGBf4Mwd1hUrYGEw8KjXdLZ8d",
  "key14": "3wBMh1sWrH8nZMh6KMiB9DP471gTUouNihvRAYqCrVqts9xjJGGz23E8WCb8FAT5RzvU5oMVyxh69G5PsGMqnsbn",
  "key15": "74DgGDjiVrseprVLYWMi7id1o1sRZbfYGEWHGi8mMoK7EkCopb9qEM5UWmZkwLJs86fsi1JZuyBq5BcYXAhjJ68",
  "key16": "5H6ZowrJh1pbBaD2T23CrQTbgEaRWEU34NjWKqJBALCTSqVEp2pVdjJKTfzCzX2pLZH7uRZQgKRfH74zAS7hQAH9",
  "key17": "2bnQUqpAJUecsMgLgqWhTWfoNsVJ8AyYywpdqtG3z27TQUBrihFZMCc3BZpVRGxyWrHnudxiHQNGub7dj37FZ9Th",
  "key18": "4arer1vJd4s2MGZp2p27UstCKznfAp66oPWw233Y4Y3bK1t1WSwXQdqhABBQCogrYfSJr9gREjjrdBQUj549rW7h",
  "key19": "nYnFw7MxRsgrftKtxyxtF4uMH6yzAjbSM3XCXwtSwDeTZeAwere4zbNsKb5J1EK8h2YczkBmzWg96juiDxJ8iQj",
  "key20": "3P24y1rGtjsJhdEtUwBFNZYNiZJ8sCRbhGyBapVBf8XMTng8braxktcbmTRNfvgq8RdDsW8G4wPjeBJ2m5MYoTcv",
  "key21": "3Ho6ngiQvRzuufsxCe32VvrYLE1ZoNrY6eTrU1uj9pPmi53jbWM5HUHyzLFMijqYcpsEyNDmmPKZRfHvWpnxThV3",
  "key22": "3nhoBHjix4ZkxUdMmN1A8QoMpWsmo9ErZ8CHNfrSBczy7KpJTPs8qfS9P58nDRRThXtDQ1pnYreh2Kf3LTfArhCg",
  "key23": "56FQoEzhvNrwgnvyFducGWxXGc4U8DUC9qCHZUeV48LM3dAGoACkKH9nrMp4PmLUu2dULUkKzkezL491qvPEg93i",
  "key24": "61vCu6PWw4BBk1GmyA3Gmt1BZc2mwHowLjyi4h8DBGULHzQg1NwXJgZGiLrUjYcpY22uBAX9REyjSWKi6DQqSZDa",
  "key25": "w5YQJmQzNRkm59GXZsADfvsPThxYxVo8qi3B2SDGkrMTMxcYZpNzmfZJJBoUDE267rhmjWDAQMN43Y5vEAcCHEh",
  "key26": "2HsqCB5TUoFzxYGLT9ENrshGWHU7eeGuoGCi6voy2eT3srFcnPfcF8Br16veuCo6A256meUjw8VEG8qQRACfpe3e",
  "key27": "4SKSZ1gpbapfg2yZGyghfErdsvUASSFTXYVpbkERf2JeaKbcW6FsPnNhxi4f7ofFimfaqZKyvg8hGZDnP1PvwvmL",
  "key28": "217TZ3Qmt5d5hkk8hJQsB3qEeJmfkZffyuCh4mpzVipD3kqXcgg8SZNoB2q5d7dYkaRRFMZZNbApitnPCRs1sMhT",
  "key29": "4saPdmx8iho21mKm3WTRAjYfnKcVvh37tkQSPYYTwLvSHhCFPkBXJRS1mXFWwTkeyYYArCaa8CZBum9uyFtRGXhK",
  "key30": "2vnJwqBvDhR9dArzk9M6EEuPAocLPxqaB5xVqAhNJ5rasFEXSTuTavoZgABBVPw99Ee5iZRT6nBuK36mZ6paTxas"
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
