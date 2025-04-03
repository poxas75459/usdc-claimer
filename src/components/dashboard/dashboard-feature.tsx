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
    "uXLT6ptTjvmkGmMSwmKM5pVz6mZpwau9fTrUPCXxyUY4hpqVqcEoqzrw4TTBMpT7apCXpd9b9eccetJjc6qG7ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kSSornPurdRYKK3r51T9sUhHn37xcWeZ65BL65mDG8nGcTookz9oeWRG33yEaUewStTnT9HT6TNF1aaEfdidaLx",
  "key1": "4YbQqaJfAT1dUMjXHCEPLo3ajgFuutn1d933r8ynsSERjvh1QS8Ss65waau3jatz9Lwj3W6a37pSL6Th1vbXWW1w",
  "key2": "3cLUjzfuDxAX9zn4asdsfmTSysSa8Y96BZRrE6QYmPmVXpCw5w7zBwpDPn1VaMLn2sWWihWYNKye16cf9puETqbP",
  "key3": "U6N6ZNDMZVLBSBR54uMzvNbyUMTAeRVoEweJwd3fzCSSvZLtvccW2J2btyo1SqtJ7D4jK1hfLdBt1drgQpjYFmK",
  "key4": "B6Sa1KFiFX8pM71V1zo44dpQdMaS4phzzFaRx99eTbxB1RuXojL1At8mCMFPDcXgVrSkALdzH7j5TzSp5Mfb7Qb",
  "key5": "3AfPn5UPNFUkDk877czVWMEYbxbMzMyLyFsuhAEYB7WedHJfodXcqSEQT5kEG8t1PYWWqBeKh6s9MtZ8yd6DSF7j",
  "key6": "5Vxiz9CPCyvko8Sh6u1nJndcxvHLFPKqPc6q3qQN9XSsC6FKWz946LMjiiXuU2q2q7oxVicb6GANCgN44N3WL2KA",
  "key7": "4yz62FMZeDu3FH9Do8uvNnykE3S3W5wXW8uzSGTKjohBPH6Mp275mtUepJNLJ8o9e7WVCfj7HBYLpuPEMF1CD5To",
  "key8": "4vj7G83b37EUet2PFLSYQ6yvDDYYztGoHTzcJ9zcJuderL2QkcyTb3QBRsX4Y34c1EfPmUzvGC96v7AvcS481WdA",
  "key9": "2fy3xrdQnD7KMf6KzTyguATzkcdzygVK4UWFujgb5TWLVvKqVYdSCkJTX8WpXRE3NPMYjTZdJ6s9txsMhgKKN3y9",
  "key10": "5RCf4f9C5muD9BeKwWcpsQ6sGzkbxNTWbtLqPWsTBAMwABiyvsRKs5LxJrbd1dBiKGafyipNFGWabBR84jumVyQk",
  "key11": "3zv4jnKn6V1YphA4C43N84dtUwZ2aFRh4nnRuKX6XYns5RBbXYQFgkeaNKoZhbxnhy2M1KUTebrRRBRw2WkFHMUS",
  "key12": "4fuFHhe1Loo9DJV2viepRUgDx9Vs862Sc1Md4o1VS52NrbGvzZtv37m1YNwvKzwphRWimeT8GiKPJUVzbHM85MUk",
  "key13": "5aD31ncjqyTDq1G5oR5mwgHuHkv6SrV4cSMeumHd2zEjoMmg9aLxKDfAKkpCJZAVLAnYvQCPt89uDycCa5sshBim",
  "key14": "4BpbQ4T9PcTs2vtqFrHNEQEc2JegPbQDuCJDEmmhTmcCRgnDkgn4tipExVHAb5Ud81dfpdQV485RXKZrZkbK19zV",
  "key15": "2WXKmXUQTN7mLqdUsygeeXKiPdJNmNTZytuxH12BL38DdipvTxfpfS3RqR4FAymVE5NoPT3YBk1hjWvyCgfLREMZ",
  "key16": "VRTXV1NjJehKdAXFmXXKmczExKg9EL2KPRM69DuTTnEwJYnyVYRBKtHPs9ut4sbKaaGovSMVdVUjxmfTwgDHERV",
  "key17": "5z7ULXKWEJVUYQiDFoHydW4r2GZHJS6y5JK9UqNiA8RPHnwjmUuaMBLqdzQmogrf4xA7ct3Ank8zL5NSSk9YwxVR",
  "key18": "5EqpzKMqPg1aruFMkxeYuFub8QMtGdHGAKRnaeTPEizqU4GjSe8nR9vwrqaVahyiBkppD1WchrkG2UC9qTK7VtPV",
  "key19": "3sHyRu65XcUWBjScAUxE4Q94ThpiBzeM85dgmQGSn6WPavAaJSV3BgDRkhT3UZ8ohRBP2kHGz1mffAHC9XxYaKZP",
  "key20": "4rL6fCbUobqVs7juULJvKqgMv8HfLuFx1sNaGn1H4kzJPEsNTbSR5tsvNxkpGpuSnPvbsuFd1uJuPbiviTLrAnkm",
  "key21": "ApFvrFqVc48fb7orMHsWMT6d3sTi4XkQ8oMMocpz5AFqgUaa2VJYattyEPdNuDeUrC6cV8bNwkigGY8zCuPidFQ",
  "key22": "2Vzd5m85nQXN39EQX2wjQH6gZuMj1KMqhW6CKNkmvwj4uScKJxXnVAYnufzD4p8in2vvFChx7ayjWSbsUtHqXjx7",
  "key23": "4CHGBRjW8FStj7JLk9smefXNhyC6gyvnvFMTkSsbTmaMvpNeeBRW1Ks3JmXJ7m5X18wNRYdvgt2dtBGjjonuHgXb",
  "key24": "3y7MRpFC6Aj1zLkxZ1jVGLd5JUrHo7cqiUUpfQcMbVGpwrbkGqBpxWNFuhahZrmLa24ghoKbJHBxyx2gtR2p8WNW",
  "key25": "5GzW1ENRYtuJLLUZ7CN3TwxYnynR6PfgqVJQThxT7rWJCCZrZ6j66DDYrZhrwgS59TFtrE5oNgrMRzPp33J9knWk",
  "key26": "NnT29ca1KhgrXGX9dMdkcSEzHyAL4jE6HXpkxzH3Gwf2xz1jKLxF7uF3WzhMXeGneDHxoJkrkepgYXEpM8Fmzod",
  "key27": "3ZkA8bwCFwjwv5BkFDLuZxZaMgcEvWbfDXxd5mHs3gytxSh8nUYHMkQK2nuzbybj6PskEXHtJck3NWLsNo8L5hVr",
  "key28": "nd2zaMXMoQ6r33dLbbtg3sUP4stBX3btbi65c13bSxgL6G17xU74kkS3u3JoHVzTDc18voeac2fEPPvZXcZ2FBX",
  "key29": "PMb1KwBzs47E3W8wJcnBqRHqCyn5VR5hm8afQ5pQATxh4cs1pRSz83hxfRaeR4hwi1cpg8BCsyMJkMpB7NGaTZV",
  "key30": "2cqnp3zTMDduesEiMVimT1zHdh5R42Lf1rrKGgeWUaYWVQcXsVv7Nsh9GA3ZTDwHVDBba7ieZrS1EnSanNyA48Vv",
  "key31": "3nFPNfz3EX8iYCXMkyhmGVJZYthQ5igAUfbUjJniaz5LkwYDjKJeNUxAerxswwhDi1m2aKCD14GbbPgKq84YsvmP",
  "key32": "3hgTTyodoFXDdBGojNz6Y4ScagJ8uhdZtijDgnySQZtnKfSjA7fFYfA5piTyTgVezy9L5TCkhHCnRxsAw1HQD8of",
  "key33": "218gxD5RpSb4JUYpPj9yqUm5oiBYQxhDmpjijoSQQV1zqLAYSGLmtQcXVZ45zXeUUiDL57jwe5SKMzbRSLTFkxS2",
  "key34": "4RbkJwePQLxdGgapUoryNyMZvZYURYiXCP1n55iDXgtf9k8RHacsBWSpMoRRDnpcqeKRGdGu96HhvAnQjWCooVo",
  "key35": "JhBNwaikisujsngQ55hFbNJWxGsqwZ5Ku63oujUG5TEQDvyYRt8NwEQgNgKtVfRXQvUgYRV4wyTQTk9JaK5dggv",
  "key36": "4UBYxUCaKeLutDq1W1T8hwsqNaC5oX5UBjpxrM6aax6JwNUpL8KsutfTiJ4GvvqBfAneZmFc4Q2PyaSEZSWijco2",
  "key37": "5wuJv1k588SPM19ngNGZjYDftYXrCVGyLzokoDiAijfX6ZXeMUt8EbPvdWsN9A3x88c4C66ihh86Cju5XsJPhxLn",
  "key38": "4TUDWg5NbapvPfAK1tRLkQXtMqWzwA9grod9bQHVQ6s3azCLbNu7k6rST6xopGgFA56vEvZYVkVcpwMGaWqxh3W9",
  "key39": "ztRQejTHTzSAMNAiu3M1NFwzPn2xpyxmqN1bL8LoyH178ngKV2KikgfTMHhmsHHcy8hPWqjAjKY1m4f94Lzuz7z"
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
