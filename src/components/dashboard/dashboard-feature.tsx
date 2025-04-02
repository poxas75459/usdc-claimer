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
    "3ssTYVrM21H7Ag4smqaiwuFufpMQcmpZFuUCGoBRZNoAvpRD4fYPSngVAmXCVDRGUnpmwznPwRzVhjrrV4PwmM8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWYUujUWdRMjoifteULp9WhUZgHa96xa5CzqsSBan2RRTrBD1SRkCL6zFeZ2NxcH2xaZgYGwbUiJ155TimQVskz",
  "key1": "3X7arNynTuFkux6nFBumm3aXsp8WfLpkAJ8upYA39MjFUoKNF9aH1D8smz1Ej35ydNc2kGexfiFQCj23uFZKM8fQ",
  "key2": "3aBvPapfCt5tv615HMEjgCRiyNrq7P6zbc9bZsqbxgWbzZaMokffd9vsfUZiVUkL3mBmeQ3xDa5Mk7ue7H6c25Q4",
  "key3": "w7RYtKHdR7poaj9gJT2dP332cuM9UJtzAEkKipufvWwPdztF3p81Evcv2BTifYP653tSUwTYgDMEw6VMfV3w7HV",
  "key4": "AsEWuuJ3H2Xyk5XXGEArcb6wekJCupAecqECuiZUyLwKirt9rCTJknyG8icqDfvcSar2xKLzrF9cLRu54JnsmUV",
  "key5": "LuA8h7AQRR9NpfG2VgmnSgCdzavkEjU8egVVZ4LKyv1a2cDSu34Y8b3PfRQU6D5w2vwC28N5qiScRpjh8VUBGTs",
  "key6": "4dvmMbXmPCTEAiEP3cLndHMxNkuNno7FgZWoNE7dAgifgPxdrZsvJoAqEvuGNCbbBAHwnxqxbYjZ3nseSDCb5CsU",
  "key7": "5hxZvmHFgv2mdA9MYeYshaJQpQhMTXSYkYzxqsALF2pmhJ6rQbGuYP5znb1p2VpZQgrwrTeBvYUEXGmfUyhq1SW9",
  "key8": "447FddxWXYmAnkPTifuQwt4wrxn2ErqSdt4gmJUZQBTVdpfmXxNxMu8kB385psiG6nLhTQoRfaeBQ4R92JT7CJnr",
  "key9": "4ibWpDMMAc3vvRGhwK5kRJnNzMoioVQCEgch65FDKYttMuNQQmXzEs5hjpvSou2ZCqt9XQAbsw4GAPQiqyPQjnNS",
  "key10": "2CZ84oFmdCYAVHzs6niUZMz423cNjFHKVfzirinZ5i3PUeRyFv4jgefTdQ9KmTjmgdhWhV8KvgFTEsMY1nfPMDrk",
  "key11": "J97zjQ7Nu3VRqZ2pQarYR65YGbNarKh8yHdeSe1ia1qLUJg8FEH8rxizoMS6TFbMot9bFjFfRiHGaJe368ESXu7",
  "key12": "4HfSsTYMLmktUjqYQ2Xvsyv6V7WjQyZ9bgtWgSZ8oZYLAjEfNhrWzuDJLyw3dW6qzPaHTDgMwFweLWwVXZNHMvic",
  "key13": "3duMfVNBBagAjV4LnEqBwxY7t78k6UB64s3KZHnBDt2J6H4PXQmWtgh8TjVncKaQatjiKzbrmfcqimqY1PrEsBrU",
  "key14": "3QBv79cvbD8W32rr2PdSEUkrBHZxuUdTbCmxF4nV9Evg3DC9mao63DySwssBAoBURucaUCD6CQkYYm3AoEB3uCwi",
  "key15": "2tYRTdeWY2NytPwDFqFQaWoKcZGsaFtsCz57oKxgG7yRU1ki1u92T8FsFDDcziAaVsKYJ1pFbhFMMpCv8dzCCAS4",
  "key16": "4dokJFRDtsdV4uFdeej7k8Umn4ScgmkcsV2GDrCYF5JB8GUpYRogZmHL8rBBFNkouqbfuDT2bxN3viuoUuufAvwP",
  "key17": "3rP8xMv6kptrXQSFrqG9BjcCXnxJwGY37zGu8aiksYXiaz1hTcTuJGSgdzMQboZN8UUYK5ikd3ZwLmEv55b1Z5J3",
  "key18": "2f8s24Ln2SHQxiYmFqjTAB9zgD5fYR3CMYCMJj8Dj4SpFVf5GxLBxnxotpMGfWRZZrAorgesWsUikSsLTVtMKENM",
  "key19": "5kDhVQyXxSyv6NU3cc8pNphtYn7G6w5ssWEKuRMMEPS6JtuoF6bZDUR9dua1t11zKFULyCEhqCeHYndFyuQT5NDb",
  "key20": "wNPKtY6sWVBkp1LtV1jbbrcZx7s85BksB8nNb9iMw33G5oVRbAZriPtRzrbUQzSe3RiKjHwKXy5mcSxqeWtXr25",
  "key21": "3o6D5k3xJpwgLaQNhdf9dCnURbJqWVsWSUESxEAQCNHbhLbCyi6UYfG6NY2nhDHANhWF7KHdZAsGkXfCpqHjyK71",
  "key22": "49Bgy7heLxkpLYKtRYYribRdvPcj4365ntKLMyeKJmDszBY1Ena8tPMQQq4XWgtVJnoFgTz9cbahe9afMnzGHyCU",
  "key23": "4hboiGQ4K91TdPngYCyJkYFjZXXAU1SDtxPdWviBcvwjCvzMwS8o3ih1DZVJQZ2gBFUjfRFb6XAX1uAfEX2nt6eJ",
  "key24": "2dqJQwn71fe8JZ85nxwRyDXfBb63NVRKm8ws1pmMNE3rvWEQ2nRRYe6j3GhTb3pNb3qoUXXUN2gcZT9owxxmHT5u",
  "key25": "4dkFzjBiBLLZLkb4tnwcpJGUAv7agmWoPoYzutNYXZZmdhu327ytBK29dE4d2s7ib3yvNSfNnLnyxwTRcZxEEaLv",
  "key26": "3g31xcPVxLzEqEb6idToDRHg5bSsGVydPjxT8r9zDek9B8g9b5RH1SKs8FFiHo7AY6Bq1hqBpju3zoLiZEzDzz59",
  "key27": "VkTTFKhKyvLizxhtaqsMztkMJ67CqeXmSYGssdPHiUXP2imwigMSbJfMPiu7A9uPKmyTgmYb5qrVEikx14jquDF",
  "key28": "NpMAuzW5T8W4XCoadj5YijYvxZ33JBuHHKwKvj7S1svLeixT1tLeuBxYGWizchVueR18AGSYCvPNXgCC2QJDt78"
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
