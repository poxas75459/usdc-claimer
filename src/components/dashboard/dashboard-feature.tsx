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
    "3LuFajRt3MS7RUot7eajt4CADWwyYppykGHF9SJNHb3z72R2kN5JJHnYEG3r4oZDtm7Sb5AdyzaM91BbnNMJqRzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJL2EqS2X3CsoXYpcRrEVYrXFAPmrFzNHLkwBa63vpB8GZRVeLSQfFXViPu2xFgwYjeN79RhxizG7WttcTqfFPu",
  "key1": "5bC3nfF6voMwWXQiVRx3zpE2czEbE1ryY7FguULT4uG6ojVzpCJTTpuUPSdBKs6dB2nsCCkidJwpYdje9reEn2z6",
  "key2": "2NafcBmrQUfsV1iHPsTjDjciNcAFvBQFNjbrN2cK9jESxppezgGUt6EizgvbDKQKpeAvchWKHsa1urc7a1QuBbf3",
  "key3": "5grwXgB2oXfaK1f3qJ7tXJnppTNFnYApZAVhfNSvKYtoVsqQKUWEtEczKA4zCxvmPJ4mZ6A8BTPVMmZtm7AGDKUR",
  "key4": "tTWw7wfZujr5B3vk2k5wLn3NPCLiMijKG2NfxkMTa2aL1vTbfMqmPKMSmyJtgpqZDJCcpe2JhJFZZocQwRb9PSV",
  "key5": "SMtQETqZorWpwJeA62m9o6vGHohsWjV97Y4PRfhr3wEUbUpVWY5PPMSpfwNBWDyyb3YYg1MnnwM6x1cXfKXrHZ2",
  "key6": "2MFrWLEf5VAmayHdxsfhZMaKGxeRwbBW5ttNDWuESj3mvKTK7AMqZKkXSHshFvA4PRkwn6gBUBkHusAChqc4Ey7n",
  "key7": "4vTCR2s8mfiS4DHeR4tHHn7qR2fhBiWd83t6vjbAgjxChks2tQhEf1tYDJ4tndwEsmi5252nV6Y8548qejGmmi3P",
  "key8": "2dqGnGBRq8FVKUmtsTeFUHrfQHbdkTpVJdw1maJqjSVJYun3uLW4podB1G6FrkFzuNYtmtpevEmT4xCgEaeEd624",
  "key9": "3XMc3izZ1weJgPELJwbFvy59mALYRcBAoNCi1H9iNb3Eq6Tvfc7RR5SQqKfLxXeH9aPW49CKvVaMabxamhZQp4sX",
  "key10": "jdcjpsHTBcggKz1vL9i1Q7oFJvNXqWUHibJoJmhT3SPwUQFLcF7jqKDTgxLLhoA4AgLDnSwWeR4vJBthsEpkErD",
  "key11": "3aTeheA1vrvWqAP9kGbiQGXbzoGCUme2VTkyqjw3mT8cbPkmMvDWRuP91jgZLDtADwSvhnGbr6kFAqjbqbGrpKRs",
  "key12": "52njKtjGaU5gvU987fGERWEoiicZ4XWEhM5z9ogSqUWE35F71MebYC6ZwL4PmVk6jw4KXZQ8W6VZFgUW6subm65",
  "key13": "3X8muyfJWp3iGksfyViRu2dWCvgk5Jz6aPB3A6p6XBfbPysAB6MpRXDNUv5BsoTSNHyMxXUURLE1rGn7cD4NETnZ",
  "key14": "3suTnxKnFc8EWL1CXcgHi99GASbFkV5JmG9Vhf4rCio66v5RAwUiuy97V2ugLF2xjMG69aUNUwwpUncnsXo9X4WL",
  "key15": "4zd467gMhHX1i9dLApJXAQ2ZTEKgUaHwph1fZisG8uESMq3UvSRHHgpKexiwoa4pJ4RejTJ245A5AqsxHVKaTtJM",
  "key16": "2EKoJC8NYfgjT7uVZbHBM1QBSuWucu84FqyYa4vLjNywHPgzzbLD91gC5254RzphjMyRrAUpnGqvGRmYovjD5NwM",
  "key17": "pgE25jDKVdET8922YVro5tfNx2xgZaXCKzU3FiMUZ1tCC592U5uZxwyqsHbzoDcubqsnCCsXf7EGYR2dJ3q6Kgi",
  "key18": "3Aq9THRvakia5DppdGdFgKLC1XpCjQdVnQjeUjGAkg5z59MZjjx9y7Ezw5KFsYNooYdUrbSUhbNftMiBfvDhmdvo",
  "key19": "4DiDwAWV8FYdNy5PVdQeFqCpjQgC8Pte9JAp3ohVhRhjXMpCWE4PCDcwLUxym2DJong4ZP3m4sMFXwAq78Nf4gxf",
  "key20": "2qxesrni4ViNEJWitkt5BwxqqxMNfHpiBn6g84eL7R2RPut79i6ueEJYPZN3DA8P28e4tGyD1y78xSKgR2hpzhie",
  "key21": "5M9GVPG5gco8W5pA6X7o3nRC6WSW4SG4bccNG12vujAxn1sjjEVczfneTJEzar4Xuv94k1KojrCuAC7A7qZN3tUJ",
  "key22": "BTs32j3XYMrGNoTVcqfGkfGDNupCLFoQnHQoN6LiLXyg48tBjNxMK7YQNbRujKwWZLciK8VahjjcLEmkiiWtQiM",
  "key23": "4hsQP9tBYHDyn5ptzN63RLBe1LyhraSyS1bWSYXoLcawfai2EnYLX571tsRah5JKBqcTy9JfjvoawDsNnNUKbQur",
  "key24": "3V7uLmZzRhTNvWnPTNNpjaJZwRRDsXGiCaoT2BoDAW4LfvpRxXME2jJuyLZ4UxvJkgC5H53aSnNgifZxSPYtM5tT",
  "key25": "2WrfiRVEs9shPD6TKh7p73PPvXpcjjbGhZCjhgzLJoDFJfAMYLupp3Lp5dve4iSizQTSUbdB5upta5mbou3CWid6",
  "key26": "3xQx68CaELW5xXRFt4qzgrWq7Hymxea9T3nxJ1uPK79ecYvKqPGgPxaMueczGS1M5oQLdHeYXZbCtKYtxFMFr9FN",
  "key27": "4Z1TUkku8UBJqeDnPSWoMADFgQxLnvxNrH1EMkUQLzFh3cEjuw49nB1urL2o7AzjMdumHPPQKRGzdGYUU2ruKKni",
  "key28": "GxjofXKcRYK45SE8V5ejbTtZ8fzgxXZ8mjhPvrhmbVPf4HQNDJwuCPjsoAZntFS2em9LZELMQKAtotcWkqyhcAv",
  "key29": "Hi96pAFqYZW28F9nyUThVTr46oqZ2ZhqrRTWfcepb56FYzwMjBaVY8YMbS1y347epgR56KbQNzDRjnjDn33Z3Rm",
  "key30": "52CJy4hUnPx2Nvo8AXjtHyBaCLvsrkjzs1Jim8MfPKn2HcUES6A34E6NEAse3TBCQeJB99qUfUMvH62Nx2C7nQAN",
  "key31": "5fUrVeiP6R3sy2mmViv7dMPf4JVtS34E1ZrDhr6r3ghv62KUwrx1TCd1QFJXcvnMYVfpXNSMTcYWdZZPmUTkYQQB",
  "key32": "Br1Q78FzpfJTHH4PBYwnYkg6QvaMjSeZjPMQ4cetSz7RtHzTKWsSHodWysPDJyUHmqhJEFeVS99c75BxaNX2sGM",
  "key33": "4p2Sveu4adDre8KFXuX26PHgf4m9tFi8hHparrwyq1Wzt8Zug2NFjHFTTobb62aP4LY9GrNwBM4NAQECh588JdcM",
  "key34": "5iCWrJKJvwNGEqEgynEGG88CYgTDN6FPgEV1iparA8et386W5tr75v77hmJDUQZ4RU2jtpGqLnHTH1BGaofg7HMa",
  "key35": "4PUG8MJ1P53uk2euU42U7G1BNr1tJuCsxKfTsibQQvsh5AyX2nAEzCiXVWKxXLkuGa9R73NgUKRKEUUJXQE5po1H",
  "key36": "47zok1B4aWAbdRYWFRL8PrZqKa6VdbiTtnb47vhyppTzscFNCvMESTTYhBDhBEkoNfz6DsErpSsPaZAQeJRp8con",
  "key37": "3A5M8RWJGSrQm4wiQ8Y6k74y1cZDRoNEqZRRDggGhSpSonbGvjCSCXHBwNfihWwoMFHevo1dvRk457j6cr4AqKwp",
  "key38": "2SYSJom5gFFcBJu7Q1FuhHh9s47g7rHk1LLtFkS3HK1SsQ6r99AcCxzKwfAxTE5axQFEBYHRy2PjXP7PtnWZGV5R"
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
