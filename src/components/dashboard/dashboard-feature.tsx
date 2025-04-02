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
    "2qerYD8ZESv3qkqneCyFUAo2D2xsWgtvaWj4Tu9pKPMRQJGpWCv4YS6kLxqV4LQLuBonoqMiWWGEEDLD44H8jaLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vuxzc7SXD3G9vQoBnXDL8MtUbXojNaxKMT1ptcU31zYgJEFUyFzCtBCUCHxUnb6TUgKU42mR7EP1KYSP7MwdVEi",
  "key1": "2kCyroX6i8QCgmTbnEGPvtUPr6RuonM95M5Bf3CmvJKyCgSum5NasGkZsRqGipV176VV29kqbdECwgTQCpHxajWX",
  "key2": "5PwdsBZgkuZvQZTdjFNXeynoeQdS7GHPVvBGzBfWdYvrqPvT7cBLb2w4y6tx123Kqv2sw9kbfXoDiVEZPq9U7RxB",
  "key3": "2oe23gmY1738vAuiqh8HuehortWJ11HYaa4cSyTj87wmjQ4trZtAvyRv5WUC1VHaJmFMqye7sgLWWjweHxk4jm9r",
  "key4": "5wZqxZj4XaSv1KfxVNkn56nrBWVCiXZTddjGoSyqNiZzKpDPgLktBn5FKqvYNmZHUygnBkxE2Ag2CRDzHDssuDEy",
  "key5": "12eRYorJ7bKEGeZoV7TfvkzKEbRWK1rFT7NNppw3bFRJVYAbbB9Agt8THmxry8Laqugte6M1zMCAhiC4GZh4qiN",
  "key6": "2NEopYKoyGvdbFRpCe5FHNEzX4ouZsDTdurD4psUAP1sfQCKVa7rhqK6oXKQdBg9SNrm9ooKPMzHEiQxeuytLexD",
  "key7": "QLRxpJJK9j4pze7PTqQHsRv4dZaYc4N5hBVghp1i6nhgoEJypt3eVyucdKTboTinr7VejeurGh8gVr1Rr7ZNQvC",
  "key8": "4mGEAoBTzmjY8hsM8HDKKvWhGgBH9evtBhyCLCNC6raN17v9VVBZryRMbCSxXRH4okEFA8utkCJTU3to7uwvdoay",
  "key9": "4PSkVbFRzyAkFQcjjzdJthenRxpdvkt4ga7wTqdeQrmkRR9dan6EmciCXktP1c4vMF9zZo8uWf5oD2uzhxFJVNYP",
  "key10": "3pnaKU4piDm2pDjUatnDjuNGQSnmVeGQ79N4HSrujyofYSufB4TBxDb9adxee3bkq1tyYqQg1j1MTZSJwidbKvDA",
  "key11": "4M21eB7PDSfTUc2uYwnwE7DnhjT9w3JG6LaT8Tx3ckuWVXUAjgNde187iT251uQDYVmpD24fbTwisDJ1uKAuGfAH",
  "key12": "2BRUmAWKSW9xDQX8oSPwVW1zwEBpdqBKqhiMgUkjaJMozZjNjjVREyKDUySqv5aHELnMHx3TfL2afpmGJAHUNHRJ",
  "key13": "49b5WCMAL3HcSmM4Xuhvs5dERnH9GEuPqZRo2vtXeKrsF7vE1uNV6vGCo9PcjBDZeuewxM2JJXLSPyA66bVWkNSV",
  "key14": "3cnmLAzE9gJWPFHfBgSvuVjDdMsLBa4oejnWZxLrNjigcZ3RbeWfrT5JgzeoqrvUQqeocFEp67Q4uKwzinwtc6Re",
  "key15": "JDTwT68dJNZgjJoBUPbP9FXBEofwc4v14q2DwprFktaVEu18KpwUwf6JCaZe3cAxXmRvUVrYy7nwGxFmhJ6tLrT",
  "key16": "2Xe1Zh67iw61K1ir1b3KYn3271kkVShU6xnagaFaXXZWbBRYP2fo4BqVv9sFEgncfJRqQqdthD7ebmUfvjH5kJp2",
  "key17": "UCXPE1QBqyvjQcwjDcg7wTKNWfCTyxRr5uQjkZqoTQTZ6wNxK8wYofW9E1fkt6W1im6uuzzW5XcvinoVsnEb2ML",
  "key18": "4cWKoi5JxPrtgTmvVuWpiXoYsxhaBi7ZxjeJyfDy1WX1WzEpYZtTHE8Ubga5MrwFAzpHknxhC2o48UxDPeV4eaFG",
  "key19": "3VUr6o2mbL4xLH1pdYeNjdntxjfnxuMq3rVnRQdiqLtH96HTWAW86wTMC5JdknaTAmUCoLaK21AKMAx3nvLTev13",
  "key20": "5E4XRBS5tdAbDimVptuiNeoxDpT67CzashfYwFaGr7d4BS6EJeh1jrNzA5x2envKug3V3QWt2xZZS4r935bkwiET",
  "key21": "54tw3wWRxmHksK1WD3xh1Pur8qvkSMj7kP7XUdq2WW2s43dGVmZpT7PuUQYcPA2s6cHfQJ9idBKPfiGRQHjP7Ys7",
  "key22": "4N7pbb54qByyerqWmVZeqV6m6mjsrrebEhitfnYDNKmKyJ89MTPJ5vbHqoN6ZVC6kPAz2WhAG6aPsuQLiSNbkbYJ",
  "key23": "4dno1CotYcpMTmraUseviLX9cw3DqRmh2n8uwaKRRq5GewzvNanjzodXKa8sntiyqCnhJTnvs57CziBs4XvrLZYP",
  "key24": "2KJ2JxodDLoMpKkgfehcUVPpGecFRjxADMoovB61iege97iep8aNqz1xaJsL7AZrRQArwL4XEdLX7oa6QPw7QrRv",
  "key25": "4FtoLAuVuLQCk8vnsgPFbXSHiyu6QDbZ2e2JFKPAS9Brcmak2K1og8MLcZDqgktp3UdAcKViNProEL3stMzxqBgg",
  "key26": "aSv72ouZ6twbYp6Muvgxw2B5Ur4Csk9zZkzyx5xxQuPEHG1fFdaUMKv4HWEGg8uhppn6JhC6hKKiYxw1EJRmb7w",
  "key27": "3xgsTZbpwzU4bXp54XrSYpZySEZQTNCWCW93H1Qz3yJt4S1gMBxGRwnWjmDaxmHaR19H2T8TdVUcGqT5UHTomwci",
  "key28": "MXn6s66wMgALxWjAmtHQy1rhUHS3bUW2YEEuJHCm4xhpFjt4rDWqJ9eKdjR1EQLiuYGHKLk1WzFdD9FFwaq2qxR",
  "key29": "zvQCkd7TEkFvFxy38rJYFk8XAUNrK9ewtAxdBR5wqNHEJ4H6WjqRgmbEMYNWm4Txu4yJbp7JAGv3UVPbSHp6uVU",
  "key30": "G6FP7Jm5mA2npJPmoD2fgZPVsky42ffLG7YcMgPM1MNQF3oCZcykcFECDt6getAS1Re6w1sBDMGjxp5keNwPv4T",
  "key31": "3QGpHJnNRsMUgkGG8jq8zG7uWcC3QMDujzBrnsKB7FscD1ms2NtoMVaaxycypUX71rkanzXndukaQWs7jCNhstBb",
  "key32": "5sKXGFyGCAnzCbyxbDj3pWHhuuU4Sm7879mRSf8SR2ieESb1ECfCPtJusvC7YZ4z4pe2grBBtfcRx9iUXW3CEiVP",
  "key33": "LknsP9gBb5wEr1nFMGLYJYLcyMMC157C349ZBu8iAqFYAZ93sHYm8ARpsGxp3cThNSrBaiAXKHnp2oiPnyuUW1i",
  "key34": "5KpPohXXGDjCeKE8Xh3v8BTRZBkCEUEaLRRKRmuNSidEu2q5DkMCRNtoghT1hXTCYSPZxFoUMpV9k1p19ie2dbz6",
  "key35": "4PLhEr6wZ5WkZm9jSk5LcXiz7zotqdDgQnd72khuhTLPfHTxQjzHV8rK8oFbjaZLenVox57NRLeL36AvWHe1EiPH",
  "key36": "dxZAy5T1nc1AE3trUnMWmKt5NrQRu9FngaALkVGdJaNWwfQE9vCKN9NKzZE4e88GbRCStBxb9uM1uEWxhNSN47S",
  "key37": "quVK95k3h8rtSW4MbFEXBUFB2Wr3hizpjrqSduLY19WPbKaZ9mPWdYHr7QGRCCYtXyMNKzzbnDBKGq1qa2yqowt",
  "key38": "5t83Mp49SKUi6t5qbJRa9VWnMcinmYFhRbu8DLM5aRhwnmYeS8fVrTGb7e15sDpeX5TdSit8RXFK154MqvJbJ2b1",
  "key39": "t6bYFPVZJ9nNXSnbxp5173UkaWDYeVqC8nwkufZb1rFYqooArRR3vCruUQBMNoWQLdrLEKkCjwMTfNjwivhC4ns",
  "key40": "3vBk5LzcMNd9vCRdXpoze7Bu2k7L1ByhazrBp4RJ3Cne4t7WzisNKjQNKjtVnebH2ewDvS4gEJFp7j4zu3feAexe",
  "key41": "QuL6t3BQv2ZxPtNBgxYjHVj1Nzfc4ua7dBzQsMwYXW1rAnRqBGU4iBw8j8vzBsBiT8fA4Ddmn3rCuiAqy8FcEcD",
  "key42": "5Tbe1MvEibJDob1GTxNsnWHvBre1UPWisNDKKX7tCKy1tpoKMgMjcVq92r6QqDpuTm9rjS7MzcczaL1MYc1MmYhW",
  "key43": "3q7zxhF2JLoJEh5xSSrZftwpBbZNuWecbYbCU7nFvSPhgmTVA6TgPuvwxK1rn4LvkdF52Eq8JgVob5Zmf2ddVCyK",
  "key44": "4dEp8tWgz7McQwMJ83WtccqMswPFbdzqezLa4yTV3njnJdoA8Zys4eUJVe44AK1fZCubUtmKbEQqsWZUWp7QUwiY",
  "key45": "2APPG9XaofyptNZacXhD8mKnWWe6YMKdWgrubVXdZHDuHPPgd4Uu3veAPnXM5DzZHtTh16mFc5Q6iGY41bUqMQY1",
  "key46": "3dsyho9BQaHj99CjwaXVJkTMnu7oPThC92SsefNRncZkG9qzMqeY3a69bUmDKYswxefUGnYYQc19P1V9bSV5KtPA",
  "key47": "2R85BfcB4wyd21vD55rcbuYK4XjEmvDkLPFjyUpG199erWyCEg4VWnGqTX4c1n9CVhvGHyXgFq7u6XKtxgGrvvH9",
  "key48": "5vJuqX1y19u74QL6xfNxUFC2NaoDZmQrokQbYJ1RAkvS38rVgbtvp24PMDF92Q4bEZQGwBwS9JfFcGxwmfqer24L"
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
