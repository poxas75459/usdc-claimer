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
    "rPGq43Tdui4dHrdKyNLRfvzgq5BTz8pgXfM9MAg9qZt4i4GUJccqDjhvHr9Yn9ApbqCEWJUcSZaLtR2qs1Yd4bG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zg8mn4cfja7yb3etWq8gpdM5SsyZkUeGRzUjqgzVt1tjLKrcq6hErjMQybqy5ZbDDZSrWoXNPCZsbEPbWWdc6FT",
  "key1": "3VbLNRJaF6RJ42LPckeYoMgzd32g5KKCU61EpRnyfhVYcKQ8vsxFpo2LDZwP6zS4NLo6hkpuBtJXGRYknZDyHgC2",
  "key2": "37BfA1CzJ99gkar437bY1KyaURFuZwoMKfDtkZdiBCeJ5g9b6gTKunLSmdN3FrBYJxHcgpJMgpaTxXJJSrd2xb7t",
  "key3": "NmWMWSFptVPuAsx79r7DUWiWp49mCGApbubKwfnMruA29fiKSBnbTDmrD1DARgDkpgejvzjQ7TLfKyEFoGEaRqD",
  "key4": "63XHKTqywo6HvPbGsXMMq8xwsS4UQk1UPJVXvseav6CtVWKfpfUGyBVLMwWy6ywNZ2MnHKue6HTAQyYvnzZgi5Ga",
  "key5": "vVVqBZ5nhfs9pbFYZcv3eFwryqRQCVKhASZMbqXKEijpmTqxW3gqHE4CzZfMNYBV9RdTkow9Cwe6X4YxqMwRd5z",
  "key6": "4TEQzhFWLJyQtUdAeNvkiJnP3Z6erAYC3vbELGqFYjXCon41behZGx4fzCZQwtrChFavsGoJaKjUutFwYA6XxdG7",
  "key7": "4TSxaTVxSVbWNsDusoe2wBeX3AepdLpmwyU2TBrZAg5efdzZBgS1S9GaMJbw1Tc3gXtBT4o8bTWYg6gn43gnk2yr",
  "key8": "2bW5NkYTKfVkDKdGtKYv5ua6UpMmDTvkkv3Jy5fxWHaYxCaYDRMo5BjDbZo87v9MBkXgCmSj67bEsa59d1wWEtMP",
  "key9": "2bsu3xWKRWUkhXjKB5mRhwmy6fsB4dmMBAFSPecZjxVphiayCckccj693Bnf54boQzp5qavCJsLwgsjFuunZDCAD",
  "key10": "3CFKCtvNsSTVU8Luc1MeKh4WHTd9rbsD9PhBrzeDq9tBw9wgWa1W6YAYSX2ieVyRAVX26jhYJJ5ZMW1Jhr9VX4Hn",
  "key11": "nar5LS4cdbUxJSBBk2PA461mxhKCJQZgwWYTGWp3r5b8SNGYZ3LHAKSz844d924EjdPBAtWjKVh8zbjJpJC29CT",
  "key12": "UCziUrcmdtmA2UjWrBNX8agyRz3SLFTyyKsCE2hFW5XkUeZwfMd5AavXGzV4ZMv3K3w3GRWARu8eKUeLd4AGVmi",
  "key13": "5fmMGZhKQBDqNfAWjA6uWeWL3wznqCjJwG9t8iHy5hhcQv3fuC7HkkLLnHLVnJ9AT9PkfhUx14YmWu3iqcQfHv2b",
  "key14": "5dtFr8oTprPotydUNcwfUDMDRjz3wW9NJgQqmJr8rmPWBDXnpMfAbtC12RRrRTfqU3fFQKj9bhyCsi7LiE6KSMJZ",
  "key15": "4Wq2MjEn5TxnNrV4GVVQ1EejaCjLNyacpK4KbdbacGHxk1XunRV6rVwPRbUJzydZvzNn4hmcgDQo6nEnRFZgNdbG",
  "key16": "ji8N9x4SVmAiKUqD8zrmd1zwWig6WgWjiXvxf3bdteNuQEPvBUjynTnSFRVneJQZTErGxopcEcpTrTXwHNzQjY4",
  "key17": "VHXfuCZQTnWRLE9QfEqA1G1pF3qavr2D2AkBfrTSUmDW2QrZ43rfBZLRsmvwrEUyQEvK2vNWANSEytk8enEAgnB",
  "key18": "P482DksZEMbuUSSn98gk4Hym7zpMaRV8doM7nSnJ1oM4bpvrCejvzACM6Y9LWKh2sjRqh24qo3n7JZyVT5pnJyv",
  "key19": "2WXm1sDWTYKeLDP1VR2RxpFXXgKWRDvmMYdkoPsZcPywA9BeUFDJ8DsBz9Y6qCvmKV3VjAhrRZvM3H7CGC8x577g",
  "key20": "4QLjhYeQzNZ69Bq6ZLpkXXMd56cRgncAdwTNF8kF4ELZdhBkQdUXBVrW6mMfdVhyYHYdgMNHGTcQMdWrR9ZymnMJ",
  "key21": "2DaJ7GrfEpu3MRUodM82pjibwdESnupg5ZKdM8yyJApLeaj7Z191qAtxEiKEWvJWnSBjiVEQFuxsguBepHQ8fAEr",
  "key22": "52KGMfvhRMdYvcUBz6oTBEJUrhEm5VagBbxrMw6hXHb2MxvLeyezGLw6pkTC7foedYRC6yLHxtyeBfVAPRkgDbMD",
  "key23": "3mjtGWWsvDszZB7TCMUP3W5TdbhcJmHR5bNRL7C8g18gZnMomG1EFbZcfh49eVesoQJjGunDUhNFh6YhzbQFwrxF",
  "key24": "5GGo79QCyWRZpEfpRtcd46SmwPD1z2MhZTFAteQZ7opvuqczsofGvLpfWrKE8AnMTPg3FgDMFJdXDwxCnZS3iVhv",
  "key25": "32SP2qz2qUPFLonDAaEhEvZx6J58eeGRFUEJbiGTBDtgi4WcBiJqUTQLx2NWy45veFu2CquwxCYZWAbAdn9zAYs1",
  "key26": "4BNjYWxiotqw725sJiWXCDx6i1GSkThuKrWpTkLdsy1Run5RJRCT4LjQPv51n3bxXxL5DDwkACTzXYRYq3ajUJmz",
  "key27": "3ivJioHurekvfNKBai4g7y576mSofzJFwqVUDUCqoCGyEMJBjYB69oGQKEr4m1a1cqYRbB1ewDXwDaxpRb59swao",
  "key28": "4ksZB37HuDwsZ3pjaPpxgYwAcDz8aFfPsUUWXVGA6vySS7vErJMAbixZmFGAMBjSmVwyGxhcRYo88r6xPy7QdM6A",
  "key29": "3hRVWS5v79eYWzJma837AFysRnzpJe2tST5baJqZtDbuR1fk9g757Y5vcSNXRCdRy9eVJWcFMn3rL8w9sHiar4RK",
  "key30": "ntp8HM1gHUSw8Vv78aS6SYyFUj9UED4msjfcT6zYzTW85e2c82s7pTHek8ZscFxNLgBPQebdnab4z5dSZ4Tv272",
  "key31": "3JdhFqMgqcFNR1tewg5KcApDK5e5ExdWasneqita5k7CRYuaxA4sEyi1tRq4UvGwwVS4GAJAKN8WREqNkBdAoBG4"
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
