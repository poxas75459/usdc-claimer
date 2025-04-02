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
    "2XabWYro66nm97BCiDg11fG81NYZVbCCS7wgHnNF5V4G1uQg4RMUBoCXhGUdLtMZEDn8fFM1f8SKW2kmLeEjNdDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m3FjxoZMagFA3XQJJgDUxQQTpM7q9LoovwWx86jeExBMqcqfd4vf5FjHKoGzk8vsaZzwvg9pXZZw2m72b5gtRgN",
  "key1": "tKYoMCjjnAdoHMqfiScnCnaY24Sem9iajsgttTCx4v4KKLZcV4DaoJT6LvMzLQVskd9i8xqCKPb8fYD5cC3Jr2g",
  "key2": "44HUBvBakfp1XD6AaVWjZ54JUYwRKUR24of7DWh4BjqDBWd4xmLYixJTumMZmyvaV2BkXf27QnnmUMNW2YcKby6k",
  "key3": "4TCtPg69obbWTtt8Qd8xzekicKzfc8WpdX9hgf7ZXHy8PF4QKW1Urz8GcRWcouEsrYuDpGJwCf9bwxhd8F45kdj3",
  "key4": "3Esf7Lx1G4Zf2tfs8TMoquSm3SVsdDU8ykPAtRxPtSWTKutG5rG8Lst3amHKxGVzdfhKLar5CTKToKc5qQ3Z7pyx",
  "key5": "57f4G4hxVwRovvZmq5XcfRMHiEsdaotQDNH1vE84aM8BaNM2jXU5AQiqGtHMAFxT6F1C4wSgU2v1k4x4VbfwCAHp",
  "key6": "3wfHK76dQVTqdpSxAmvEqQbPQtFJosoGxe6bWheLrMixa9gf6hXpSv5bk9oZRVM8tHwMZJCopjggnFBMs3ujjq4D",
  "key7": "5M3ysCiFaHSZj39fagnTeFpFTbK16phZ8gQdtikk6a3ygdUvWz2vKpsyExxfw1fzhK268YNMDNPADTYWZFVuNzGq",
  "key8": "67oLtUfZdbAj4X9QMPQmDYWzmSoCT4PC8vs3pf9GP8B499YXubzRSpzYXGxdZVqvjUfFnp1Bi63JQZmF2P6JeBDn",
  "key9": "57kFqVVdJtukfZpnwW1G5fU2NqEzvQ5kh7p7yirPzUyeBm38VNzM96dKYjfKB2Q7pS4NvDTXU7SpuHXd1ixg6jJr",
  "key10": "4WeCCfSR91ofVfEScqiAyojXy4f5CFLhaabYojBvegkbsRkLytbN6ExDqPjVAwZzkAeNV45FQp2hCvsYS9jNm79v",
  "key11": "3aWCCenfGRy4aHPyqh1kH9byCnFZbBe68cdACGRaUmahGpc9yYvwPRmj4FyNREPe5FfsMkdXnjcpBcazAPLSkn9s",
  "key12": "5wCLEmvYEcm6QJ7ToBgJMWfvJJfhZyP7RKmgrnxheswG1XRWXLXABQ27LdJwKZ6JJqExZSsgKUYTWEi9GopEW5fF",
  "key13": "5Nio6Mv7B14nMAEhBtJYZTAUr4NxNt8Xqe826KY3RqbXFdDp9cSMvSCdKYLTUx5bcgF2owH6L4sjkq51DC6bT25N",
  "key14": "2HrM1tJrfqWEUSHyubER7Sm9fngNgDuoctPU9qiKRo3mzA9AbkCMvCwPU4vJrxy774jajCFfaem13dvJz5CoBwnc",
  "key15": "25zZ2XxFXcBMuzVqQSv7aWtuG49V1kwNdY9Gh3rPJV49VpcghytMjXbmcSi55ui7srchAh3PffPMGk5zoMSrXru5",
  "key16": "4ZnkcrQoqhUb2NGoVRZefFKq83SR59jF3qz7zQP8DuA2ZEub1LBtCWKswy2vyTsXh9LoimFDGwqQeTukbBgp6t8x",
  "key17": "2Z9G5ni1yaxvDj3RhLBzWyd28rDV1W2PhhNohg9omugDqtxyuNev73xEaZxSYAm25WAA1aUtKosFxLRsiJ6WemwY",
  "key18": "32cbMLuwmpo1LZ3H9YVjNYFEVAzUjUMiWo65swEbdXeapWp21aXPzFtxa2QVwWjxTZYwnzszxmxbpYCdHd11akAq",
  "key19": "2Emc41bVEJHaYuLjaN5nrKzeXGeHnTraRLkm61XusE2rz7PAH9NWyRoVo1ieEeZFV2t6NrB7qfWqU2kZBLp1s3kV",
  "key20": "5YMACW29Kas79Hx1YKccdL8pUoGmoHg2jM543M96L47Zb7sR4mQ4mrreH5pnCM78tvSswG4YBtpiF3qyM9KUtaX9",
  "key21": "4o2M6vMXLPw7gd7n2PW5RZjtST31QEudaaagyGY1TC8ey4jGAug1d36GxzHLjXckqG2fmMJ3fkNkLue1r7Necf5n",
  "key22": "5BnF5Ckj1ra5AeKk1cDaivTnNgac1xGxb9Mmr4cVvAR9UMKtBzYi4hKU7yQGfyVfjCHduyLEdt6GsAokme454oR9",
  "key23": "3MRpjPpoer6N8QTpJ2UPWqn57YXYUpjNXRzxwsvfD5cDfTkLog6oyoV8e6AvbJJo1so8y6BHwwG2DtpGek2U3YXX",
  "key24": "4uHTYyuHQb7HwDLAnztL6uFD8u1kBuaeFatndS1fEA2ygEUHkow85wNzG5SPgNdPbLnBrqP1G5iBggmAZtyVhqPH",
  "key25": "Vn2HNVsu7fwdA5ptM8SHXsuxeE5Q9tyy8EuZ1Scv42bLD81nmH9rdoydmqsRK3e8VTchHFDRTH8jP6CriycbPVj",
  "key26": "5pRwgDdNN55u3KHUYQx9ecb2GfRHASXYyA9Cfw4ut6s41NUzo52XY1bAhP3ZtzMxu8wgm2fMJv7iyfTCnCLPKToy",
  "key27": "3xexczJ9DcbNVFH8oYQYFR8Xx7uULqYJRh7CRzuoVUHBczxx3g346UNyYUGYLjkkyLM8AnNwjX191nZf8aasEbyY",
  "key28": "gYhAakbV2hJYkkgULtTWz8KZBvGtVRzVJZzuX3QjrokzHCzgiWAX8XBUY2d6CBDP6ozoczEuDooWVs39PLmDwpC",
  "key29": "37HewhJynpmHGn9TVzSvDxN69CvSARkD8F3bRw1AnF5DBLpHJQEoTCXyWsrBciRD9Xqnjw8eU9KWT93dERkKCYmx",
  "key30": "4gER56aGCq9objGcbWiZk4GdJh1EgjwMerikVf4ZLhhnL1KKVJyhFSeLXBEz3afbAh18yJjQBNvuRc1BNnrAHbjs",
  "key31": "2qyLJs7NyQgT6ZnY8vmCNM3GFSWtUuL5EBi2C6MBbJvAeXesLTCz21vrKs43gsFV4ef3TDxA6bgak4ieCvSCf7DR",
  "key32": "3bYARLk4XGyEW9XorSe2WPcvkYXXodAnZXmNHMKizvo72v2WAfWJ9o69Vye45cLvU8d41H1jEz1N9eLoWNFaKmv6",
  "key33": "2Hi4utUiN6bHHpU1zdiFqhfDYXh53JWBtyw6YQpKbjBmY1WHVpZUUMFXF3CM7hJ1tFo2QPmKxmxmPiycjEsjSeVD",
  "key34": "3stHZoJ6QPnFnYtKjB96667HJQibPFFr3CEykHqxwpknpq4yE6xZDE6LPPaSkDryPxAswUG2KVNo4N9eJV6ECXVw",
  "key35": "2EB5UwgLmhtJHNcGBFoR722iDytch24HSxhQL6beNimdicARvY1Q4xjVgKKQyFzv2MEjoSzK3byhTdtC4VeYGyaw",
  "key36": "4GP4i4kL6xoAJwpe9jCyviGk26QTjeRhAR4Yzp2Zhzjqi81B4Lwt1jZWg173if9vRAPK4GncGETNZMzyjCY4aveH",
  "key37": "5EbqygYFL6fYX3MEur2hhFGwukcd1YvpaRJsE3XXRmkWhRYpRy47jHBBJ79RhkZXThPsc4rQi6Cz83ZPv9Hjw1Q6",
  "key38": "41jhKntu5Yf59CpYnVx4MZxsrc3PEgEBYBxvahYt7Gst1NDXNais4UfQRRTkeJVqbsxcjpwe2ag8F96JtwWV1XJq",
  "key39": "3cch1dcp3iRJ49LMudAvQLcMskFVXvumT4Lxe5meDQXQELR6rSdHnBiq7nnwyxw87tTJJku52TyHyQ4WrWLmkbUp"
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
