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
    "39wUC5qQQtSWZprh7EfEffCBc3BD5cx6wqDzV6dndfTFiRscvJhW747yRmQBb8PhLde2F1xHSzBbj4C6RihN2P2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2ZNhYfcp431zEXdwQg5mrP1RfwZR5PcS76Lv9ckAAveSBhbSLQrozgvRarEkaqa84gQxYbQnirByg21zebMY7Q",
  "key1": "K5BdhvLUSoeb7zLQyMtM8o6vLVHVoi5sPESdZKifFUEMqQV7zUknoZ3etawurhudQ7iDegi9FezH1Embd8sBPTb",
  "key2": "3AHxhdKzeSxwceurVYEabZMqP6vd1Mni6Pt9DkSQhXXJT8Bc82ccjENb9RURKGCzjuKXLbCzLo2u2kCL7U9625Fc",
  "key3": "5vE8oQXJAFuXJy2cmSAggnpgSYaXp64shXRBx7vb5eU7VwveXf3HoSdnTaz9R5nQy59CKLZ77HmFdCpAkpYjZFPK",
  "key4": "QYrvsCk4LiWWwDSsgHQTje9ZTHKYHxunUsfqY99wfxA5PThttA9pVci5iSFiJXNcuDVEFEsxgXuGgCHArGYhi9T",
  "key5": "2Kye3FsjiF4ANRd2kHTBa8MBiF8TXYK6GYCvdEQAptSv9MQ7bxJK3oJP76xj7EDYXZt97Jy3SgrcgeuNWFtfZvkx",
  "key6": "QmqUnehm2onn1n4w1EPpFiEuKpYGJ5BhfptxZtnSMduyV4W5rGt8Q6ZjiAPcECGyt5NXDnACcsrrhactyGFpqRv",
  "key7": "2DNccYuJGDYfyywr5EBvj8Yi6xh2rBAkrfRKHS22ofkdH2Uk3UrFF44w1CAFFTxJnALiUWaxy37dG91FQLTkNBAX",
  "key8": "59AsYyH38pMMVqgYMFRorKZynxNbn3Kn9Q2RfaHp1GaGUufwh64WMddxXHjPz3GWVRuhgUT35xdNP5TdDraXzd13",
  "key9": "5w9PuYGji8V5jpYKNsLvqzGoBmsHM9vD6X83cv1oB9nKDzsJud3fNjThGmcXpmMv6BA8vfQa8hxgmP7DZsPZSb2J",
  "key10": "4fbCm4Rd39dGzjS2WMnxThQjfYjbEXwNoSnYSKKjTcTP38sCV78kZGyjp6ykjfG8A4boZCCbUvyq8CerttCojZhg",
  "key11": "hxY7DEi6sYjw7ph8CjEU6Gs93AthgXDuuStYtzWZrYfqcLRUrzwmbUn9qNuMjFXoNzYY7KNXYstfGYPoucU2UGd",
  "key12": "5JVQXnXSmewqLzrzrAkFetU1p2fkJWvkGXJ9GW3FttjPGEobUJKpRBcs29gB2shkzHoiKggn4LhVczE9eDjF9LLS",
  "key13": "MwypbZRAYZzzsxXCZdzzQd7mzLueJFKma8XPWeUqtyCuwsqdtjq4vj93p2HEAVfJLwsJGUduTGb5pwBk7uezT4L",
  "key14": "4fqDqgDKBpzC4mooTA3qpHAGyqg4JYepEUKsS3wPgvSdJpKEeK67uxkCXLnw5JmuoY35DpiSgPNTTBhNHTrLeS3W",
  "key15": "5iXWYp9xNbeB7WycsZYkuAb1DJLtYpNn8auBqFAyPV42e771KNJEqaByQQb2dpYMFhneCPepK7z2LhU52FimASJA",
  "key16": "4HiRDUdoH3c7m2HcjkWVwBhniEJpQmfiCMMe4SUZC94HvyEzXVEewircJCX4a8MQcvDJ92GESi7CotyzCrNE3Qqc",
  "key17": "5FRnpHceDJmZ2EJLucSjc2Jo1Hy2EMdyzTibDNXV4hxtWAEdAD3JjzQa9PWHaAFyuf958t7RsXZ5xrJzSdtoZ3SM",
  "key18": "9hNbv1wQbQfkEcuuLGsehki2xgaTJjbHwcE3qx8pvWZXTxxb8HHkHB2R6gshWg6SdxYVkLAXYw3suH7dpJTxHJS",
  "key19": "cqfNLXa2KAEmP9b7Xib32FGhr2enSuHcD4fHoXPo7gez7mwJNuuGhUME3QHkjsqqxm4VYusLmnS39Z7rZ7FjJPf",
  "key20": "WwwR3byGPCvT8zM8mKDBJEW16MWKnxQuq5Y84ABppQ16PsB4ZFqHQphgueiUByb11TVzBjcu6XqCgewyecgAhXC",
  "key21": "5DpUakf8ZzrAaCzmLtRZk5iqvPg9hbJfF9sQv5bfSS5qSSqwNxnuzqepH1NvMk4Q7VuwA69ec8Af9dztmTT6FCCR",
  "key22": "2N52sjm2apoL1V5hLnm7CHysJfXbZnANPcjuYSVS9fm8G7aa1q2fbmmvBibAZ5EKdpgdAD4u2WoaSmWrq8bujnnU",
  "key23": "4vU6J9fPDZ4iSakG12zccxrBCWj3MLyGnFbqmh56BjUktU14tnKW6goBHCHCzGWvv1HVeoKbvKntSC1XB6rCPTuG",
  "key24": "4JhLfYdfRDWrBKdhdUBEvNx37wx8GWNeAB4jXDcwdbvwpi6pqbR4TS5cbFBVGkPdGTqcsvYvQbxzdP1LBQM23Qsm",
  "key25": "555ys1vhYxt9jhmi1eVZXKKgTHPLyWjaP1gpfR38PfwS51LkDzS1xaHuAM1n5UBvSKAKiVgA54bXt5SoYpsr1UiC",
  "key26": "3zYxcL6Loh1oLf3fHg85SPiF9iH8zABfi5pXRmsx6EE7VJc7RqsP7vSZd4WSUhZYqpvPpj5ZEjkyEEouR57X4cDV",
  "key27": "5VmW7YeE8MdQMihnwivb1ZEcgHF5DvMSfVbtmvk9rjmh5v1tEum9TJfr58gvozs1kxJtZ75Mu8bLNfGTGmjEgvuz",
  "key28": "E2wdrmfx7tSoCjE8ZY8dFM3XCizmaAozQXqAgQdCP45ChSwAxFujN3UwucQFNX9W48mAVpWnZEGZ1KEmSqup3Nw",
  "key29": "2dVfkc31MSrrYy4UYtas2SwGzBVWoigbw8QgvDhHZ8ZoNtc6NTgKSiDS5cjs5iJTdopXEL5vpvbS52WyzPxgXiN1"
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
