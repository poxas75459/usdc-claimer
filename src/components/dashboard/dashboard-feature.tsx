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
    "5SjSDLcR2nW9U8Q9srYfQYjmfhsVHxhE4EC5L5BGEqBJwUBCDm8GAkD1RNgwTEnJ4fUpqe9U4CKoEkSqTdcxkNZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJTzVmwTd9YLcDiNPQwgBbPEibJsjy7m8ZSFh9V4XKPKCnysyAA857Rqiw4Tq5fJcYKxorUQhW8fUttpAnpbCeJ",
  "key1": "5au3FQ1nTX8bqtXt12iKk4End62aaDHrtmYzRd5nnGWFuwnGWmSLoQAccZEexPVwc35yb2wjuFDbRA934wZnVqu2",
  "key2": "4XQC9LN9iaV11S3hQs99t8Vynpumb1QC57KkMdquXBT2HaYQhsGrC6kGAxJYtsoS2yfKEFcYXGV6PtHefs33XYZ",
  "key3": "3XboepXvejmsD9gPWPd4gVenMJdVgMjoJyjpLDUup4J5LxEsnp1YQysHxDcW1KVLy4mrAg3JDNVmKvHJKdfE83CF",
  "key4": "2irxqcony9S3AQ1kJReR9NTnjm41VgJdAKX4eA3eHZ88NL7NdPSbF5K2uZXMr7mUPwFgyPYjzZsGD3tTxRT1yKSs",
  "key5": "EQ9oFu4SBnBk6mKDNm2xRqr4nWRXzTMFojPcez9yNcd3vNzs4NdjPkLpH4GrwaU4aHenvxHrtSu9vbbJPAyv7YB",
  "key6": "4hEkpVxCYhimeMq9SKt5S4XC4JuKXBkKsRKcHmdGV8WQexvCogqahMNVuDqtPFzwgJ8ntx9nuez9LoXjEgb4NJ5b",
  "key7": "5sNn5Y4c8mv4AUEkfGHbkRGoTtZgxoYLyZPkGgZRaz6xzhhLafMKfoHahSXfdaSBNwuzzd65tk9PSWTysLMXJPNj",
  "key8": "3PWw6eDxJ5YGucxjksZ3KnTP1SmtK2qUU3Xxr6TmYHa7z8FtxsbWMCRNHJhLmg1RTpRbdyaknookzUMyTxFKZ1zz",
  "key9": "wKFqwVXoUdE7DspRWmPcxE3barZ1pptqEjMCGHAfrrZwpjCyWUEoTk6S2p7FpzAWrCp4ADPbjLTPSeN9eifF4Bf",
  "key10": "2oz3boLXXib2sTeNPqxt6ynR2rGxXX4EpvvrRT9JRXNzP45jJoLDDsk5CHpNTSDpKbkhSzBipbFXbTnNNvmVg11i",
  "key11": "dqPyhMhz4ZGmDjSB5puXP1q92eWSncf6JdNWqLdFERUaS12RJce7iBRSW5ZabLSzou2uWNa43X24GN6TF3svdES",
  "key12": "3bSzTntpax4yCgGqPqs9fzTmNT52ty52s6TNwys79kmNbMM7VvDPfBJ6fkjMxyx7GRNp6gKPo9LyTTMWRBLTEHEb",
  "key13": "41SARCv4NhataLF1shUeU9hNUKf2z71B5cLqQXYcAvqsStZ4RjrNLGfXMHZPoxTYPH3NroXs6uiWwoKssc6tNWjr",
  "key14": "2LDFhdtXrBgCA7WY2xDXqLUkJaC3oNGBXV8JVVQT4tbxhCVMHN4SFQFrnrM3Q8rmE6ctwhmFymujX7gQNtdASz2a",
  "key15": "4iyUaav8RdkwiAZPLNXaNdqyWsyfdN355vNnY2dLg9cXMS1Gytm8aHaa1YkFh68XJ2NaXgcFYRY8YynPX2Gf2KSi",
  "key16": "5A2kKfzCo1fNDTrncGKTeZ9Eb5fHwaSKCexseRySQXC7pccwKRGyzJ29ezp5bMmahvhZMtVog82o3Jq1iXxVqZg9",
  "key17": "2hjg6fLQN4hKdQapvi1NJgHQ3Za6ScZJbRvqAUgZrtoutAU7oDg7dwV3oJvgoHB6YaJfKo3xwGta3v5HdVALbGyp",
  "key18": "5V9YdP2ZbUKX8u5MPLPDUwVbjcLTrF1HUf2dyUDTJtNmaxR2ZZhu2ZKZEFV3rJ9BkehzjswsrFm3FiysnaZRLrx9",
  "key19": "o5ocw2hCNBQitBwMz1ojZokDd76DJCxwXp5mYwAG6QoEqBB9oBrmFXoAXQ67Nt2fQcCNWj1vexf7AwRYJ8HKMkU",
  "key20": "4beSNuRUCbFtS6riSsPdRQjjNpf6QS7142vZHMAvdEccixddJgcEFoM7pDALzKuyxQD7y9wD6aNdFYFf1a9eDjZE",
  "key21": "3kzbDd8jPqzSrfQAtzo6WZSees4vNp4aUXqWSZLneDWoQcruspCU5e1UQ68EB1Pdyx35bqDx69Hk72vHkqn6YrXZ",
  "key22": "26djjaUiRrPCTNHpZjpyKmGEtYsBs5LSL5bCb7fC5JcpBTY9zdKhp1N9YtY6rcNeP8HvKL1Ag6s8DscKW2WcUZuU",
  "key23": "4uisi79JzFWTUmqqws3mQgDEnc7uvP5qAev5FYWctej5iUWgVCsfu8toMEtZasz7TEniCQ1G5P1jMbhYBw17JhQV",
  "key24": "5dTujHwp7XS9y2NG3iGoP7jmcdeRnAjkuRpsZqzHLgHT2Aa4gFAuAP4y7Pcm5i3KnsxamezmDqYcBVZHih56XrNF",
  "key25": "5sUhmWdexQRQpA81rJuASfHsixiYMCftbNFQaaN6uqdkQXd3G9iCm3onHyyw1ciB8gJNvRp6kTQzQBfLdBtdW2iw"
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
