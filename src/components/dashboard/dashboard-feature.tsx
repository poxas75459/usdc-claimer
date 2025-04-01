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
    "fp8UfbS8GNx3paXXajdPPWqz9m3X5MuBFzG1g898oWhvQktqJb4pphnxAPo4SJ5jspXRjAP1Po2LAhVyvnWjpu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUvox65aw58pAGRnzTWwR8Y8H59E1iomqWDPF8aAdq9Tckc3LqUhUftJjLbHBHvNG7NtKeBhsHwiSJ9a24WusYL",
  "key1": "2NgGsMWPRKyBnvE5paXp56X6FuUSr5MnWZfJRw5sbJAtKFAX87ggXh16cpahCRAnE6tGhDFpQi2RsD1VwX4f9xE6",
  "key2": "wF7z3V2ZcyEMhgthvFqUpVSeG78XNZnr3RwPgXiKBUKsRBRRdXeYzEgxqt3mggbkkAzrD4Zz6x3a26gSAR4tgx5",
  "key3": "5vpAYn9f639cmU2sfVgRCQ85h8LFH3VBXMmQnsZqgZzHzxFmDs6qUUtcNbrVt2DJSCZJwT8uUt5ZqW9QJRG41dtJ",
  "key4": "29niuz3N6bucFTfcjbbrvAiqarHaQAkZSkaFqBrgWt9iR4Q4fdNYyjrTbqC19c2gxGAENMv89dfb2SJJv8kdo2t3",
  "key5": "3yT1vFJAXGYKAm56LGdQ8pjDGUY5UxsjapYzid7YMpy7J9fV7QdwxyjW7RgTSmvVM5uxi1ao4oP2ADhsWbFPNhzP",
  "key6": "4xYzvStQNBXyAeDbHQpKi9rj453yn7uRSm3kCcia9TSsAGunBzTi5FDaSKb4X9fmFjekfwwBaFiMtA6GUYU4oza5",
  "key7": "5yC6Y2vCD4KE8kZrKdayrBpU1ptry7DXEsvBy2x37qsrXHZoWs7tLdH4BuwA3ok68GBnXVRgWRk4qKUDATUjG5YR",
  "key8": "2jKg3h8szMiB3DgftYJrgMKvjWgfAPAod66BFR9PpAYftDJ5HHAq7fy4cpA6NU8pkCtD5K7PYDyCpXGNkDAuUvaF",
  "key9": "5Jta5dQ8Z37SWkMjex5r7Ayj2LT855LQPyFWTJmv4dfQP4UYBh2gGMMaPDxuV5Zit46RammiJ3mVDkPKkmqmGmHP",
  "key10": "4K5aZTsL3gKK8AvdE6kmnvB8daB1r6psw4QaxwSMJ2cEnWbWbErdjt2Dw42txdjFX6SPUZR5DyhcXYDzZp98Y7yo",
  "key11": "3m3Y4Mz3SiGW8HHFrnPpnxC3Zp8vy75jbWCz74zPhi7BEY3E54yx6ryzCdUweSx5V2R4iYDYMKf2aGqcdUKAcGvW",
  "key12": "3SX7ZMSv1mJmyFBdTinYybmEfPqpcm9G8DbDKR1ZZ8SvLoZcJZFU8DJDv55aM38nq7Ugp4ouW7w7PdHhbjUWGKnt",
  "key13": "GCtu69cVQhC3F9GphjcAyrrGq7F9fDAhxRDVBrLE59Yp9xhUBh8ksY5haxbnovEypTJQkbbAL9JjVxbCahNGBVt",
  "key14": "3iT4sxG1T9kcpwXdxrQtjc2GnKKE8Z8S28TQ4NfSubfMzrkwaYcd7TipN2cJNgBJb8X4JRBiaf68ifuN6Z7TvQzY",
  "key15": "eQZSxkxecv7vXJqemxpy1FeiNdbdcMZsNgofykGHJDjnrrdm8KL3iGuYQW8W7uwsFgqN4pspxWqSEjb7vTvyU6E",
  "key16": "5BvyUDdRcpB6HS62DeHk5N5eVzws6V76F2GN1P6wsQ1UPvPFnerKc7TkwUjC1dkgQtvTputpzrM3bk22dV7e7S4n",
  "key17": "4wDeAFLGWKZ4AN89kGUfmyCkD6uWajQwH7csMC65y685QNqWUqgk97QNUE6U9LhHJ6EtLtPhist5hNJGBmtbSi5N",
  "key18": "2mFdzj5fkdTZ1ciJLt6aUmFDQYLJ63tUqsFA8eWRPmetUB2kzDepQkuDZnrd1iNAc3VFEhB9Y4SQbnp1TuhWLzyK",
  "key19": "2BMzBavwTp4ZGpaTX83JNNVsVPu9doULCvKkUaSuHyBtKq8qNJxzW1SPUkEiSzctyjUuUzQyhmsXnqaEtXnnY5q6",
  "key20": "55RMFnbCo8dC9RCPFkAUxasd4mb7FpnbpkQKd5wAtLKYRcpSgPoVwpWctgbreDsXuuRhopa1r3ncfryorkL3vgH4",
  "key21": "5ShTqPwcYvSPpyVoNdnKzHW9f27P9PoffVT6rx8XopnZDbd51rKpRrxecA6KiPgGbZMmULtvdvjTnuTcRdsrQRsL",
  "key22": "2xzpnQs7rpJ1bnbsLreMHqbxxoBVDgHyiZNEsaA5JJfPLJHLhT8f8FhcsEchW8d8Es5CyBnxnTAVd9QX2kQCmgBA",
  "key23": "5bFM8iEK98iVjz1WvHbKbE46Ee1HZAMyFJMC4MPerqCxkSPBEFZaAQNaQSEExSy1UdWaN71Y24yw6jZVFgc6F6aa",
  "key24": "3756ax2CogyZV7GcbUXLShyAtTb3hxd3ppR97gmHw5AbrSquy1Aoi2y6GpUQfQD35GvZdcJWgKnagFm2dMwN2x4u",
  "key25": "3epVh7HQjyMg28VahPRkJyEgk7PoU7Yt9gA7TbgzEPkMXkJWoywnH41htudSHq2S5qNK7FttTECaXkE9TaMxWnGN",
  "key26": "2UxC5hAAfcDEB1qQvYAWyhfsNBWfBo3mLQYUzHnDUzbLzCXAWqowBUZVvubqnd4qYY9tTxxsiXS7W4bwiziXopdA",
  "key27": "2ExCwrzbxw7wyDgTEmzoEHb4bu5XyxmSj3wzE16cN8bFExaod3DG9t4fRKKincvRjb2BAaYFukCZ7KqPYts1Cbay",
  "key28": "2KKXnSNYJRfeTAqfCBbikvP9ZQDspgeE4qBgKA88khvL2romV5Jeuc4j9cMqyHHFXbsn3fnDpNQc7ZAKLmfASTmm",
  "key29": "BafdUzbSwe3MVGvMfUvjKouAb2TYUM8Hn5auW4Jy663zLduydavPzsKCcJRMbtwZLtAP7UPWhk5Z5Xs9WJLicUz",
  "key30": "2odtMrfT4zKBkaR8sJBSHqNXMPdKyzFYoJfHZgKWNinVbvoCfx5XjujC5uDsU7aRZ3FyuR1L8WiPtLQ61peqhcda",
  "key31": "4p9bFPCk3247Simn1KdjigLh4fwDSE7uRwJeijjQFagqfHVNT3bC3jnkw9eDWyxF5vZCKPA7BVkaAWfHZY5t9cdn",
  "key32": "5fv2Un17xTVuoqMgz5EBFaHLuZM6uMQ3gS7guiC15zNJP8zq2fb2khdA9NE7Gt3wupJu6k4Jf2YN6gv9oS217Suw",
  "key33": "44Fe6zH95BzZkmgfaLRsMcAUhNi7UqSHWabL42zcGR37ee26mgMDA2f2vSuAs8bMHctiV8MkPpy2bfx6YQapVfc6",
  "key34": "53unhr2N1XDKKPFBbfTjD9ugquv2wMNznfDq6mgoSppR7Ecit4JUSNnUXUZCk1NagwimFdRPj8FpMtVa85p3nws1",
  "key35": "4sejEum8duV5mXiAe9xGyN38MabPvWj9p29i1UzCTr8a17oJaYtZxgmsLc4rgSZ1PPnSs1SBgQ3WnrqkJ1k32xGj",
  "key36": "2sxcjs2psnHeMC7oPDZHrYa2PMvVbU2XvxRPZ1Gf38xfZowBeWdbMTLQvL3CrJJHAV2FhqABFtPw19cZzbgDKY7U",
  "key37": "4CupD2toF1hRTGt7g7v26ioAXaxqisKPt4ZCjgURLnGdyfWNbKiUBbpqgKbU4Up5qhcC9KXffHHGzrGsGbaFD5eL",
  "key38": "67WYynag2m5WWwFNVgAQYn3gsskXrp2aca9tSrtvuufWm4vQCKtVwFgMz9AG7rH5UREKg5deg16FQZQhAePyQSzC",
  "key39": "3izhwDUAoaGS3EevJP6nyB5WRhGiVagN4vngeguKzPS3BFncVjDRzo8eik13y1PoeuPyr2mRZiJwahF4w8xTxjF9"
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
