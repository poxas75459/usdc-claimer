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
    "2cqRzKLyLsdnC4q8WkkFLaFU1EroiVs6z3UXC3e6XPR33rMU3hNby97jr9i8J5tZLV1MH1neRQ6UtFvRjQUT2qpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3beF6rgMrBaJqZWnUxTEjNXC47sWSVkYjkzzhZMKMPEBGvVFgUqUxmwpjXsjQ6G2g75J6KjTzSEBtjLurCVaUCab",
  "key1": "zY5gzGCCP8V6ri6cEwFLVnLmThTUyVRBF5WGtZNYANQt9chWwLj75hMBAEUqBfApTsb9ii5Tfsu7AuHpt9v46WM",
  "key2": "ocNtozMt5KDdithE9wUgcubt28YMwYqm9ceXg3UJ7YBegdPqquBVgNYiKKFBJfjsCS5ce6CugP8x1gwSS8bkC5s",
  "key3": "fiKie8tTotNam9NeAmzN8cpq4upEYjPzsCv7nFunADU3KBE8yqHz8y48dLHN92uGm1qRa3WdekfDXakoQDQ1xdF",
  "key4": "4JKPa8TArVstNzwydbPf1WrHbJVRuxac4VCQw57o7EfgnhB17m32E6eSQRBsSJ9dbNb5yvL9vna9xpcpdEK9EFbu",
  "key5": "cwkZcLS8627yNU23KP3Ty3gp6pwmBYsSQvbpcvbAnyJ9VWgTQH2TNySD7WdvCRtfj189twrdpLVsEDU91ocAhnJ",
  "key6": "4MR3D6Y6171fzaprcWfwenLdu86UHNSHsS8QKXwgguHjiCChUgzTjK68DT9b3zQkBsttLgRzu1KBa8gJLwrez5if",
  "key7": "34YGUyW9ayKWQG2hxyxLrepDhEbci3HX6SxwFdm3SkQkKoCLmJi6aeVfZ5HKMKGfE8SDHxRUkw9NvRqrV3i9hK1J",
  "key8": "5MM7S3NuvW11CWVcQkPw6ofWduCiKiZtthRE8yQuEwrswBxCXTapDE4EcdAFECHRv92wjxsHEhhRBUu3LuL3JViC",
  "key9": "5P6nZD157PJR47RE2Y9s2p6No3upawkQXuqSyQ88dEag3sHTaicLPRt4vxRrmoQeLQVVDgjFSLpSq8LyXE1VrfuM",
  "key10": "5tAneNidsg87Z2bfvxN7WjyHhPqHQYY4VwRivJGsJT9nTqdZd2AiaNjFK8FFfiwkK4yydUUZg43uPuXViFNuVy5A",
  "key11": "Ji1tSuHhV2aADyK1b6cvNzXVTAYRdrrgLkY91tGo6PwERt7ACCCEB9RfWn6sUrDahBLSUH7gtfws6SrRS45bCao",
  "key12": "36vfqLd6ywT1q8xmG83JgbKKsB8AV3aC3a6sQRLTynExT4MKTJ8JrHUGfc7uqMAZuje4QT8RRscdYYxDyVnyFnxR",
  "key13": "5Y99BdgYDYdniph6XXTiJTr3gZqieFwgqdAWinWyCkxe7B2KhSqbPxbZ8pdBV3EYJPQj172PGTFmHeFMrYcCjXcc",
  "key14": "3M3V6Xs1zKQiA92swCqRYDf8sLDY75xSsv5U9tQ1rzqmRJBJdgsA4em2zPJULviMhiYyo69d1Ry1ndPykidjJGcZ",
  "key15": "4kqNWKmwpMxG4jRKXd1yFDHF4axG6HyzSRrafU562UmJVSzBx7MoHjKcnrhnBn2HL3KiajfUhGfAoPu4VTi659X1",
  "key16": "5daGYchhfdmG3UgdvbnTsiWPCK16BtGUkBqRQ85BB9EfabvTXTNeHMg9jktweicb1ZtdX174JAiqz344zxczogWA",
  "key17": "3iZRA91M8wgcUb377ecAxDWc8HyUJDH5GkqmP32Xx6ixNBZFUb62EA3A3mnvjKMfJ58CWvHETzBZ1iDj2cE6B7x5",
  "key18": "2foYKBs741D6R5ABXXsbHRDjMLk2dQphXxpoEZvCdgeoc8QrAcAQD25vCVKzA3zAvoyzrxkzGZoowQ8Wum5gScVL",
  "key19": "HKqAVJTBvPJG8yYXVFDsraXVYUoEB219C27vhKPrbAaMdXKbSEgDtmjozW4yKdkEdQdTt77xcyDCXe7gKKaEmYZ",
  "key20": "2kahfkw4f3H4PHE18TrzdJ71mpXWim5H8qu6TL2kB374Zz57A6qh7vNbMkakhDr91Y97hY3aGYk2nDJTW3bTddZS",
  "key21": "4NoNPyCBiRt7KCNoyCD16QiNJPQCAPVKQii753vbaFFJh1CeiWZZmhS8iEoVsNzyEJTamBx6aUmUHEN1gkF2Ry2J",
  "key22": "oi8EAwe7PqWggS9aUJo1SkeyV96aEYdmf4oyhZeWf36RJ8Qyig2Wj42p1xFghiKt6TKK9npGGfY6DMTUoh7R4pW",
  "key23": "2i4XLpzZJXrejS4MxofnHog2z94ryBttVUeRwDBhfUVngG7iQojRURj472rYgDabTThs6qf3yCFX14dPEXNUnPU5",
  "key24": "3caWAvP4gqmJYkPdFN3v78f2t68CJi9ux1UvEWrKzUESrHKVbeMC6znnAWgL558UCgttFaY6crWfUtNECtYu2MXp",
  "key25": "2m4vT6fYRCt6vjrXDbBWmFWHNQaWZRNLPzPmWs8iTjYBzWiZF4YVYDzqhzXPNmoCNEGekGdHAWEEHDCG9AYyHQu1",
  "key26": "5BNBdgyUL3mE53JjVw1qcgpwM2wmqGM8cNhJ1AAHB3wJRDMcNTh1hBBZJwm8TWF8dh3hMpAzXGZcvGEnKAwsJpnG",
  "key27": "5gwc6eHEYHXz5x6bgiyNo13LmvLshsPppEc34NwyEezgHhZJ6Dd1WYf6n9FBeiJbumyFy2AnCLn4Vb8tt3Gj3gi5",
  "key28": "jGLNABgiXLDH9neFX1s1LgGhMC4DiJ5GkEk9XknyEYisbuiUGcgrwXoT2EddJzxKCgcaMQy6KJzY9QUNezjBVGT",
  "key29": "eQaeN5dj9UarV326vBwKc7DhvMzQVzaziUvy3ZMAaGMLM4KK9YKiJjLkuKSx7D7TcTPzhnnEmdeqcCFBDCfFhBr",
  "key30": "3SFu6kSKgg1JCvLConSuZXgKzKKHaYCjA6xBMkdDrRbTzuYMC8ewj74sZBfWSBqqQPEggmHPdAM7dSRE46GYTQBk",
  "key31": "5BnGuB5oxSprnmMmEKnotwo6C8MfpQsWB1Edimwoz3CeyQW5hpkrb5Da23iJC9fefUUotpCeZHoyTucARVoNMC4y",
  "key32": "2xBsiBoZaj82XD5ywY8GjSZ5cC639Ygc7fWkfwEfzNiCa5Y7V4zaY77ZnMpqrNDAqri4AsBJMao3QbqZJHQjt1ek",
  "key33": "2zL5NC9K9VnMZh69bQAjfK2kf4SmQsYqx8yVSpQpCmyuvDBtVjan71jU5gx2NuxekUVpXqw8aUPimKMP3Da43GHQ",
  "key34": "35fppwF2iqrhq6tqTPNvZwBhFo8FaR5gdMpwV4QTT6ra5cgYhDtLK9YjZPHzq9pcpnThxVHu9rp5nvrtdvb4iD6R",
  "key35": "5ypAcZob5aCh92mkibRxqK81xjiPymmbt3vTrXK3tJ3wFBHp13FFerVNiEUsDXsyZcqQsq1DsYVMgjtFM3S9DLEY",
  "key36": "SPXK9fJt5q8rMKNbeU587J7uvCAYJiP2sZ1jUhYgoC5ZLweHM5wg6e5T6qY3BxoA8p7aVP3qxps7Yuq48S9s2cN",
  "key37": "5tBcCDLGQE8wQZqm3egGigWuPmSiLTFop9LbojQgAeSZ91jHupbMXjnyoufQS6AGmfrNJ8PR4oTaHfioir8kyMKW"
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
