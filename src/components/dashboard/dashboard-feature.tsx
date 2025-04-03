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
    "2RkVSaUKpibaFM8r1eAZSCdpwhmrAW6gs22pGJ2e38yLkbp97Hkn4HkvW49j3qzhuA8WDWxs6JNAKBuH5rbxrNZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biXBVF5usmMLFaLHYAbsiWuJiSrTm77jTe2zBoKu81XRpv1wsjkTe3Sxtgx9KUUupkmEyHeMTDMTmSS5C6Crkii",
  "key1": "2rpoJXSm7YickxJ5rh4EyaNuAohVDAQbuyA9jipWJF18iuoPJPAExdbgB4995pcAKHCS77va8kRMZJg4DvyVkCdP",
  "key2": "5yquBjJGZbzXhy4t2AriFToZyC5jRQkZBKzTcbcfPNXhkvMs7qcyTWnFZdTawEvopa4uczfRUkWgEqbSpDZgTPhN",
  "key3": "fJxk7JKQkusoi9do36BmyWQnXEhf8YAAVBE8ij72HENKWqYHvSnHtZdMaXVe4i6GPPiTt8aZf13bLcg8AP46dnW",
  "key4": "62ePtSTe9s3Tn5VxsdUpGt8PFYjywjXDG98dhaqVHPzts6sok4eNDru8duuQAUk1iZDTJVXjjiyca7FoJ2YnNipT",
  "key5": "4Keq7fAgE5vkoB5vZ3vSjnNaznjXpus8rwzouMVWnFrj5wjTUCkBvczfeFtWcWKGJSYa8jHJvjGZ6Mi7CRZeMWHx",
  "key6": "58zRCEyFtcaG4ZpmzsTznTGXisDUKrJKTMM7kQok7iwtPLdgxeuH4dfxsNePZNRKBnixKHjbXAu39YVsFJgeCbAt",
  "key7": "5YmcpmcXXwU8pH9Gw6SQQd8fJB6tBRnfYMmCn3re1tfzC6t4LHTa1PD6PZmRAZ9raM5ojURHr4rRbHmZ79XcQK3m",
  "key8": "4SxX1V9QU6Lj9UXUbVwvyuFXUJZoHFpQ8ZdJfMhpC4VyhXjwemk5DaTkMCX1Q85iNUFsJqJstZS4XgW9P8qYHqKx",
  "key9": "2Qjq8DcE9kT8Pcqs5V3DFTggVHJxrjCykbKvq8D3rgeVxw3mdipt6XEqvejgXiQbeWnfBYyWi78vf3zx61dQzoUw",
  "key10": "26MaPGCLQVpZSYtDCKP92jBENS7w9QrjExWW41nNQ5cvivR3ccKha5o22sFGmdgUUh4j2MRDbQeB9DWiiDJwYfw1",
  "key11": "55KrouVV7Bfg5P4ERErS9NDj7DaqvKGWJvET2UGF4QVNgyPEC2PQhZa9Ut3L139mvxeeKbCKh6ncQjhBGwZFcHBr",
  "key12": "4yVpJyMH8pFqVVNkCEC9v4jVsqQp9rYtszRqRj2zMkR9V6XBVzhpnqzSBvADxZ7wb552cpzvHJPtgtawbp99E3w5",
  "key13": "61bC8w4vpDE7x9vXp9QkSpkX1TsknvAWF5kfcKaNJU8M9JfFcg42ZNthm3b8Jkyw7pnFmmsYA9Beyo5ehNacAem4",
  "key14": "4mmFdJVeGvnstHnLtuf58WSwzZPiVvUhRq5shHv4xjigTDB6fL7j6TRBvrmXMvfEbDoZq2kX5ayE5XzP5oKY3hK6",
  "key15": "66vcuhAqBaj5PKpquU9HUj92TewinzqfWdLzbFT7H9dZmY4gkqpegWfdw5JFyi3Bjcap7QJjS1W63nxfyS7VBqSV",
  "key16": "4RDQ7EUxinViVTAnYxST2QYCCcU3oXSW6gRTz6nCPqwGbMuWawT8vYR52TtN6LDHZg5FMzrBgV11K3PzzDrmt7Ng",
  "key17": "wZqramDuqbNHAmYkNBqfbJV6Af6BGKqe3JWbJ8SEeHngMP5zdF6LUeRttqaDX5yHs4y7J3NooGh16syda3jv2y9",
  "key18": "EpDkATWq9NsKKmcT3dFqFxz5v6g1FDLSF1jGTn3KsuA3ffjSzwEm4YGG3KHwmSQLhVXdt18VoqDFSzgmf84ZfhG",
  "key19": "4fUQtQ5su351oYkFtNA5bonebJt5eysaSxJzUKqUpcG5MKVTGdfGpffJauUL8CsqefXAJHRBjze2fyCjcWSTUcdJ",
  "key20": "3mFgGuodJU23grGFEqCWGQBw8e3kJNxPmMBnAngnXoqeZx3UjPU44AncBHkDJyciwh9ZaYuAkJXfj9D63vnFsz9a",
  "key21": "3qt8qPEPkdsMvi5QZ92jvMU1LgyiVjQutgWrZFu1uEDaKpfoSn5ukWVBamVQ8XESt7vWnCr2vPxcU5DLYvuS1xRM",
  "key22": "35MkrmT2mGCnJbrEGfotRnP9iEMgQmdQqCSCtN7Jjd9rNnp6MJro8XZVfRoNRZH8T4k3UjKJoAx3SBq4o3sy9zQN",
  "key23": "5cPDEqEmWidshesKqWvKrxY4paHK8pLMQe7NeoZzQRejjQcFFQxyamo5EUenZzJEkKEG2AVbppMtkXLbitEbRGsh",
  "key24": "54SPxy6xQTJJLG5wzaeR8c9amFpz4YeVwiXTHrqCu7suim9o6KuKiz7YzQLxTC4KBUtAxfc7c4edLmDitREfFnyr",
  "key25": "tPk5XG7c1NdHUFmeJA1jobQrWmcAngzJXqkMpDzMaPyVucq6FAuNnz49A4dBPmeyyiFrN1xUhbm1M5gR9i4LCaC",
  "key26": "5EfXcBWwiS3CxiHCKhR7a4kzEe6rmm7BUTje3DtFdZaDYbwsDaZgPnDB48FMBgnkC7MqEG3F28shWfEm5g7EpDPC",
  "key27": "59dQRyBg2TDMskG8VbEtNdGFfXNFxAGB3oNizGozzwgMa7yNdpjJgZ9NGB8ECXVpwBnRiFJXCBWWjvDDe4pRTnxH",
  "key28": "67MSKrM5kr8af8FTTcHnpDct3jw52T5vxjctGAUBxk2xepnJjHbBH71oX8uyFbMryybABAyYTGisfCnixFKsaUJs",
  "key29": "susFuKrPhZQidxF37pGBwGkLWtDNPB7GPZ5rwEYDzowKjg9HNQUysTaBNubmdH1G91wAarfQeLu7shoFYY9aphN",
  "key30": "4eUma2uoB2igngoBqnv6BQEqWHmnSpcbWqgTskVo6N3gR88UjEFXXbcnD83N5thmdfA7BV9FSswjDv1Y5eiGuXk2",
  "key31": "5tAVLQeBPBFbh5hBjKXouL35Tp8DbwypdapDzjwNQbzfMmzyNVaqEMFKcaoQKsAS9qn8SoDGy7nmJ7pw4nTGkrpM",
  "key32": "5ctmxdXofFMGzuA79SQR1kUSCrYCoz3dekoWrKmAngyaL84hLxTvrWE5X5VtAZSnvM4FLdqdTTTkqegUVsQ4QGt3",
  "key33": "5WBpHDqM3Ljq3AnFoMMdr12yhKJ29WTPNjPzkCJx8RLNAmJjN5PwKWikF5T1EFWQUkGfrCt4APcuTbsab4HTj5wz",
  "key34": "3Cu15J9xkJmcxycg4Pp4oLPaKzqb5c57NWfVxTuAH8KQecSaK9bVXti1vFM5X3N8ujWj7QvLP5wc3aLqPGYfYV2H",
  "key35": "2yktbGZydxDYoPwNupDxpaRjSyPpgp1g8dEzqjaNjwXaf1LXH4uo2S6iSS86TmekKbG7XxxoqvysGNA3D32Ze8rk",
  "key36": "3pcbF3DhB9LjC2hGSVAvc54tSngLjgxH2mSLobac249Qfew8gV4rQP4sHStoizSBtnroMqMjm3yYqgHo6m34gTaJ",
  "key37": "2z5LGnsUPDm9Bc15gCgps2ZScGG1pY2M9guchjPysMm9vHCXzEyUP1F21Ay2jPZRmDqMHmRqr2xwCQMnjUVhEaYG",
  "key38": "46yPiSeFytBsShuowpNjG4Joa62ifKMUnJbpUzPqaSZmmZjqDPKwXVHfyh4doY8ERfTczxxniKsojn88Uby9AS7c",
  "key39": "38qJMZthknpm31o312i8RfcZF6FQPm81hVN9fy9pAajpyAxoY7AG6Bovo8khpWRGZJ4egFNuyd87ze1em9ue72rL",
  "key40": "5nSs1DobrNsKQLtojAordCkqgmMgRU1PWpaSPengiip5LYsHJQRxe89yeZDPkysNPfNpikqt2agZt3RgL1AoNrUf",
  "key41": "5ga8C9eUP1nDdyHxfu3CkV9K5zGWSNjCghWg8eG7ofKPNrMYvur3skv3Nnkt79gNMXSeLmWmySgUJnqHKgudVxLG",
  "key42": "45gsQvghX6Sy24wmVw9Ds6evs4G7nXPMNaaKGJcfVGgvDySRn53a5uYXumuVTJsJRVi1ovQJ9UgJttQopH1QUKxf",
  "key43": "4oyk1rB3bBS6GBgayNnqd3hymu1DuSDMwZZSqytpmu4D5MMDQDNvEcAvZuoTyJWUDNExXbsYUEfDNYo5GdfUWbF7",
  "key44": "3XnetiJEx1r9Y7BbMp2pEu31TdjPv2cXfX85ohc6u7252gkDuAHP8oE18CAjFr19KuSDSH2Tqzjui6idHF4k8PcC",
  "key45": "5Qro8gRJCqWQVhzm98rXKJg2nfAEQMUHGxkjh4A1KoRF7yqenNqz76UqnfUqLQ5AGPrmtPNWgV6Eoa4AH9363iee",
  "key46": "4UYELeD18vxH2FQErxKqaJdz4bc2WXMRJNeWceZUwj2SqFBvmQvect3XMeWhcZghnnubpuzBPwnKb43GJQR1dq3M",
  "key47": "TtMkV6GsNgVDG6W5mf7gkgCq8MmdnmgYw8Gx27fFG2QXgZDeGNuMyJRHJ9WZJyatFJ4UQtT3PxqPyQ7TvXouhFv"
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
