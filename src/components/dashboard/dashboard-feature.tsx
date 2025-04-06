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
    "2M23n5Tf78oyb48oSmCKrBAB7aVcNqmwr7QPmnNsidYdbcjXTRAoSJdPJPowCoJY9GcHpkk69WDDoUQ6ZsHJMEPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mudst3RogRXbJdmwY3b9ZuaPfFXpUPckrNBRDsuD4rTXcFaHYVLHkBLHnGTa5SxD1m8JW3owfZzeuXGAHLUx3aT",
  "key1": "5BYbewkTwPjtmFaLQHbHrA1Q2bwXy35tErSa8VDjwTqirp4skVjtW1YPWNbtxhmyqSVNnJReG4pwbxa9CFwSDSPn",
  "key2": "4HtfkCXN3Yj51CvUcrGKqP9VocauRWzmWgzBBLWg9zAw7Zisux1rP7w6s2T9aSiaXrKaoSrj8aM5YePBxBB3yo7j",
  "key3": "3f88hZDMXGvq1yNGMXhuT69PK3q7ALGyB4ZV5VPZrniHPbTQeqrfSdRGjRDe1x7prYz6PmKmfNGvSXc9p2AshmwW",
  "key4": "cJSCje1LPDH3kd5J1BFdTFCev5asE57EZr846sGTpVj98X86pGqi6i6Diygx98UUrfEw9K8LKbJVm75Sm5NSX25",
  "key5": "Kq5BdtkqxL4dCxsNXdv7gbnBchtUP4J3odYP7PfY79W3T9G8Gw45H2MMidXstvVNTrTA8WRfiBpBfjCXjQ5hDDB",
  "key6": "3t5ZkvUhwtuvJFVw99hNprChf5Q4mjJEb93MkK5Ba22x1eKepMEnJNrZnCij9hrFPgXu36Qr1Dgjha9dukuxGpkM",
  "key7": "4zWBfbDqBSYiqW6pu1d7MbXB6Q61RsJxDaqYH6oN3bFVL1PUHi5SQPL4r7Uv48jbcBk6mbPSMQT68vMtyHJ9KAiE",
  "key8": "5QX792yjKMYs5p8JM8Pv59rzBvz4DFEuK6VEnKvwCyWBJxVkGK4BJCB8HUpHsgHyQwAsybeGaZ86i6VwHvpytH62",
  "key9": "jGsieusc9grsqTsVmKSBzx1rzkBHQgzkkCfDefTzwwkDZNqSERquJkvGJEqaxCdeS3gVQpBkkrwtuSRXkxUr5bo",
  "key10": "f7B9z6uAXijynU5iVXUfuaam4EQE9TNMiKzrnjsyE2j3MeaRhh9dkr7EwoRLHEbE7gDjXb1VLbUAEUQLT7yR1CZ",
  "key11": "5bDUgUpA6vxD5HmPLDkknzPsAuNp8b2oNtYAmXQX7XorYX6ZJLxMTDyCyJJD7K82mhxBFCjhwU9PAAcBc6cNB7s7",
  "key12": "2UfK7qFUtSWKHvaZ3rZBjttF9QrZn6pw2qcmuWpQTRyKvvTbtervzastCQvdYhZ2oXzxJ2QJh53KHzaaXRHMwdQ4",
  "key13": "2YE8E3uPySymKecFGND3Qogh1QBub2MYi5mbm2dJN6d8BhbwF89rSFDvrBzBdGKixv8ecYPUeUtLC8bLHa72JQeu",
  "key14": "2PJ8DWiisPVLc6HqpaTAvnMJt4LXjzAZovGnZAohkTMk28n9EcmJdfxw8KTZ8pW9q3izsZh3qHCAAhZ3ogXLdZYh",
  "key15": "26xiedFbXJ9JgFVgQ4jmM63sfD26UkB8LSiuR359N6uod7M8cpqp9736FzmwMGmvyfn4vbKxuJThGZ7BMKZ9LNn1",
  "key16": "2kHh3t4A6iLMiBmhcE3zfqS7u3CmpQtA7xV2PJTjvBfhWn9K5mRujjntyJEQLcQrmJytq9qavQq76wvy4HrxCpGC",
  "key17": "pMF6vwbQgavnsnxPegHJio9zzrV3W3g5pudwx3S69kX5fdy4gML4mazgVrkbYdcU6wk6YciZ6EZ9xMSD9gAY88g",
  "key18": "5TCUFx4kcextiKrR2rkuqUBDdAonyEh2tuMRizgHPL31waRKrXUFj3L4LZRT4pgH8dmyBqgAQdNCSMByJuHF7Xn2",
  "key19": "3yeafHupaah2rhsSt97WC94V8KuG9wzpzbR1zdebSNzfuMcuqt97uwdFA3h7yhitNd8CKrqB6kuUuj8o5dtay4pW",
  "key20": "25pdFjFwc4hTNjn7ipnmD7dPYSER46yRBVQqda24xxb246PGhRsTg1jbZUT998oyS4PBpCi6xsZ2AWEqqxkkGJwg",
  "key21": "5gVRsjWpUdgQY2Hw5WvGzxFcpRjyQ9rBdUevDmBqptbpk6pkPfGP55BcrB9xrTDckQM8ARt3uZJjzAsLgfvadTds",
  "key22": "5PeNQtiWeUwQgo8Cxxn8KvzPDT5Wq2N9eTARmzN6wL3r4hGJ9uAEmUhMakY9r52XFey4GknBjX3Xda6E6Qq1JXMS",
  "key23": "4ZcrjpwjzWxzLKSUGLtj3CDD12TkwRLaf7YuqPYQ4BQ2uyqqauUqUK7tS7vR2jRYz4neE7uJpQfTgFMjyE4FuePd",
  "key24": "4RR83jiLyvJisxSqhtsY7qWJbFpWXSb9X2pEWrLueZZgnrT9a7HSXreR9MyznGsCtRYCPuGnEgdEuhCXAxpZ2PVp"
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
