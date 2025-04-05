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
    "1a8P4E4gyiRE2FvpHQp16ysPkGT34EQxruL16VihrXK6b85cyZ7S3PScCGuP7KDhgGNfUGkUn6JQ1x4rvqgQFd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JoKoKfAx2tCCGMHkwsDqprg7CqxfHzHkyNteAJH48g6gPwMsNqZHBtTYEV4BPGbWthUgBu8yLjXt9DaqF2zVStV",
  "key1": "57cgNps6JXV16ijZbxKBwB2ZVnCh5fr4aioMWC5Zka2W8HB54J3scdH2wdyKBAPqLzok6AGFUdBdiR9U1dEduQnZ",
  "key2": "5skV2nJaNMnV6vMvpFUVmqX7HEnE1TMwsF4k8d77y5DkaPo4tZpACSt352nMpxFV7Hy4tnTAFkPgXdXzookB2282",
  "key3": "JRQPTaJmZD2oJP5EpwcndzxvaAhRb4QstCkhyCtnr2A85ho6HhNxaALTVbN35orPvhUiCQYWm5oMFHGybNiMXAR",
  "key4": "2DgFPN2VGsP9h9SDmWcuoekAdQ4mXdZxaZHcg9vqacYHL3iRQzsPz3KcHz7sKgMQevvkJbfWGFxdJwCYxJQjddwN",
  "key5": "3F49iHiaBSJbBKYn9Yei4pm7PLGcDqrfaxjoVHgcqFEiHcN6yoH9dqNxgMtTAo3NtPeYfrE7As7zZJcu36jnE5wS",
  "key6": "2VJFARnRUBZzaJprSUu4kTD6gxnXQvuXfq1yR6iCbtYxKPhhrbZzHBBtHe6VXuWgaNh251rWcg6rZWeWv4Hn9yn5",
  "key7": "2Ye4o1gdbJYwSm3QdT71Xz7BLRcjV97jmxjEMxLi3mv3Wzv9BV4JRXrmggDNBjZW3xrWzfMFcMAxkdPW9u2WUEoF",
  "key8": "2q94SwtKAfYeeaEtTcPqi7FwvGkYiUjnjMC9Z4YEkY8Y29xvn3Jqkykx1EbkB6CNcUHBiQ1RiJjnXQVEauZNA3Mb",
  "key9": "4Nv6Cb8MeEdHqzpJuoaorYNDt6iCUrcgT9RSgoH57ncM6xffsb5WxE8H9t7Enwmd1qqYc4nPQkxdDU7FBraknMbg",
  "key10": "4YEqW58Ci6HTL5nkeAdAHoJnVqPY96FNc2uRoDpxasuFzdvpZswpnTsFkpPqQdSXjUkaqwzRovfvEAiZfNR9ekT3",
  "key11": "24B3zfYeF9zPyH9GddWMTTfs6sKAeZhH6qU1Qq3DSUCedesWKdA8AHPs5xMd9jykoPptMsjAuXnscHjZGgNSrEW9",
  "key12": "4m7DKfgvggnirPXgCaDMddi36c2s27eRAQg9xvSZ9dyKejznkjYvC3EvZHdSCTX6X97aJUBQjBmqjqeStcK5QVCV",
  "key13": "4Pn2ghoqgAG4VaewCzPxXhhy3VLgjFU1QUzuah2cD2dbAJkw11RP5rXE9JNBvVorVAW7ainZTQR2YYzdGaa1YJB5",
  "key14": "4saA2D46HNhS6R3gF8ncT3sxbth1otiCSGECKHbWhoCjLvPruHSVQwy9X7xj8WEqHDEzgu71HYQ5SbwdV9717BaM",
  "key15": "pPnBxS1jwbfpSuoM1EMYFWrvZqG3ruUgybNiYfuSBPH8QLX5TeM3wwGo4FJP6gU4aHyJwAp5S74QsU2S99ZRSap",
  "key16": "A2gobHx7uxShJ97oV6pF3vLkKemrHqvr3iWBuasELCy2zJqdy5pGheRhTm7PrDmJE8hTBb9KQHdu9Psei1Hmf8R",
  "key17": "5GwjP34rso3yMe6TaQPDJMqKoKWc7PKycTLDVtERB9q5gwAtE2JfAVtiXTTPGfQzhZniAYWkDXQnKZM82mz59fqm",
  "key18": "51AvQKyXtFXmx73j1sbynF94wwCGbh2cLjttJMDiCbeNmAUZzcEraowPufzWZuW5bZEW81tBot2aRkfNQQ337yNq",
  "key19": "2zD8n5Ko7n3h51KD7tPvFikRBxRFjL5DdXcBXkRdh1Hpyw2mnPW8vwh1n5z4BnuferQusczWfH5XYaTJ4RG1NqHX",
  "key20": "ifNMQmXVv2wxZcEbjSBE6Dt4TEUQ1TWyx9hpesRJpTBAjiLvrzFvkDbV5h9WYids2CvR9P7ojFxX88NwwM2w5mf",
  "key21": "3qStXLRB5jesxb1tqCaXrQ15212NhPPeD9QGpY5bWKofTKMNpQNBHcHKP2mWFFffSvo16JNdmdJoJ8uySDeX8Nic",
  "key22": "268NU8oiZG2LKUxiRkq3JiqRVCTApGVT9oe5RvgTxL5LGMUs2rmajB5fqibTSMf5Z2qKfuEiNcN1yVDarYXdb5GL",
  "key23": "LRaRvG35FYyCe8F1Sr6asBk7UZayQPXDcEgrqZjj7qRd6AaRCyM4mBc3rhQz3PAtX5izJvxHB9aM5fCHwBJ55k5",
  "key24": "vs9hKHs4JARXzfVYApCW1CDd7bo6pgwhv59iBP3B69CZnY8QhcU6kzGQTqYzfUwtN9kQLVaEKriTVSXpozYjzuf",
  "key25": "tyBPEshwtHpirPtHYdkFd5ymZik3qWAqsyCdTSQbfxpdcQk9ygYrjCq6YxwYN2Wn5c3m514VbEhexzsgzQZz8Ct",
  "key26": "k4DtqnUFJWbVHNsAzW7xbbGRm16vWiz4VPjXQroQkP7U4RzTGZh8Qf8dfzhXZ1subadEbDgLReCjf2NUgrfdLtE",
  "key27": "2MRYFMvDrQDop6NN3perGmjKdPPMSaV8zm79MgjVPhAPxc7ce91viPaVy6kNFmAJUeetFFLBUZ3tx9qKhgFQN7eK",
  "key28": "5neuttrAoZyJxGyLxq5cinM7ePR5hsm6fx6fZHRrjNcfcJZshVXsH3JgSP2uMvHYv6RVSnaN3CJ2pcsS9ATCpvLA",
  "key29": "5N9NRR5Q1eKr9JTRfpqmAwPcMEphBoQGgH9JJAfwp8swdB7mJZeKSFZur3wbFcdVPRu3spNUHo6yBQSJX5hJAWiu",
  "key30": "4F1k6P7JDjqYsYzrmh6JkSYEsdPXAcrDX3ByTGp9xcnP1akmm3185g5rBhKU6xstaBDtw19SLrxFX68AutV9zUAX",
  "key31": "2oH2ipeYri7JWpPpFYNSysWizX5wU1G5GHD28ppKQUpjzxFYqo5TdjKvWUg17ajcraZqJffjXoeaWPzLNQuevi87",
  "key32": "4HRPcsLfyepqRYE3LmB88bNoHNryf3QyQkK454oPE8NpX2tDVPt57Un6WbqZCq6pN8HDbeo5VvkqvfQTgiiBv6Ke",
  "key33": "5WgLdZJmkGfi2TZjG1o36wgsk8VhWcN3StMMkhgbkaSCUqLNBewy6neXvpwbvARGfJ8et5UCGip4XEsgRXsZfZXA",
  "key34": "2nfUVecrr9kpTYdgZuQy7VzydjK3epYiYFLpPzQ2gSuxvpDhDZNEVsDpVgniKFBKhtgQBoiiKTScTkUdYhM213gZ",
  "key35": "33bNTzvBydncM4956rKEizziote9oUWvj1SuTEJneHTrLAK8G1xXLQ2XxociM7EmPNMfyx59rZnfQ5bsNfunM1Gm",
  "key36": "vUDbCjdtshHATT4kbw65MoskEde8BgXq6wNyyMn2wUpbuQuHDXXh4G5pCMxC2Mv7H3SapohbA7N1gAGFJzGUFyZ",
  "key37": "3md7wRKEZF3mkUnhWt5FeDin5M4i3bDheQsmwBATwepbtCoVqEDLXsotQt9bQEPisGDR64jUwHCKZnn1TQ7mo9sW",
  "key38": "4Uw1r5vTmhxJLoAnzZiCPPnENvNTo5aCw5oUwCnXtWGRUjvkt3LZYDwEu4825qHQVBY5qFCnJKHaZSzCyzjujMuz",
  "key39": "4KHFug9Ttkt6KLpFgzyN7AHwLhneBLb3dbKgfocFSntqd4UxJR9KmoXuPNRWpJL1Tm6CtCZMSgay2mZ2hbBJ1ntJ",
  "key40": "4ShE8pYwokE6aTT73gVsgxf9DUwy3pjx4TCFF39VkhRjeciiwdmaLoGV9hdXM7pgyg1j9LWRMDmbRWfvdpgqDjRU",
  "key41": "2jKT4ty1Dp32MQqtfNEv96P34fPfJco8AroVnstqEx5btoGE7t6Y7Ba6Fzgp5CueiVzUuzWZBFTugHKt6vyPrNgY",
  "key42": "46y1fEfAdzJjpYEkPpqxH8R7LNhRP1zbTeSDJW1b6pXFyDTsdzqtNfEu1TNCrKHMEMC1gD4hDy4QrXZkaXshjCSn",
  "key43": "Rjr3QCQGG1GEWX2AkiMa6MuGLd3eBAKfMuQoe6Zkm81HUZ57GVKYjHvcBJmvi6VHcoJSaGFqSKvpqZghdDmrmSy"
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
