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
    "2EjzjxsnhfPnVp7L2Gz45MCMe3uaGGxSSwYdtArRFVr8FRSD3zyuTsozZD3x4SBTHief92Mp8YDAybUCab8Zq6rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLmGzthDPzTi6XnJK5Ca7M21nr2iuZxjyeQ42gxXBcFfxGgg5HJLHyYpYjruFtb3P4w5epfg9RWPzDQ9q9K9SPd",
  "key1": "5nY5pWSat7KHPq5quGBFcnjLraGsduoNZ9GT2NveriwUKbeNiiLqgVF35e6m4MWrZafKTqkMR9F2NKhXJs1DxqFM",
  "key2": "2dSCmg9n27JKTL1sr8X65Bj5X3ghF9595jTRPoAkzqZvT87WKNDS7thWmbsZbZgLSyn4Quj4VEC4a74LhXVdgaLZ",
  "key3": "2qVqxrZHPzUShRz7hqPMSRxpwbLrG9zzzD7RYSMyxBe3KoWxk6Qd4BXDnN5iBL58GnhRwA4RsohJx8bJwqbGYPSv",
  "key4": "43Umdj22tKRsun6rtoS7fqzc2BYRgiLytH2Sm56zqsxHD5aLVFxVZkmUjA9Eee1nXvY4JBGc6fN8dXNMhsGUPvSs",
  "key5": "2RswJJN9EsrNtFwKK3EzdkLeynborPm1TodgZb9Pge3vU6X444Ty98DtfvkBpTQkbd6GNNZtxt1EnVdpLyuA8V6b",
  "key6": "Aq2b8uTm3BhryQbJLSWEfvrhkGvCoH4zUc98MJLKUgu8qdMF4WtkVK7iTEeEe4U5fMPXDm9NT4HPRgUs4Hs7bs7",
  "key7": "NEFgEKBHq8yTP3S67QzvxE1kwkg5vJEM4N4b5xP72iCmz1q3LHVtLrEvv8sYeetFVQtAmUuYFDta41i1xWos99T",
  "key8": "3viMGUTNWvYzbhD5SUacxFTDYHzR1PEPEM6SMcY5NAKrM5bJZE8dh5ybDBLeQefiAakLGBWxgLodtaTDsA1LFEh4",
  "key9": "4sCiPHoYg4aiA5hCXr3K1pS88MXc357KpToEPCnfowZgRLjh4b2Si3hNsxGyTvwPKHidu6oAtpyL8M62E9VDxXNA",
  "key10": "4KYhNrT4CXFMvsRoSBbvtcXcBzphjhaczQvfLGe4ekLuJuRTZJY5wapFiJrhdiv1betb6zi4tq3gazP5sAX4o8aJ",
  "key11": "5eKTcpckiDKTGNZrBNNFP7PnUEBTCW2VmNqjAf8XZcaLC5ARhBGTBZYaQZ2ar2a6bs7qwRVdVAwnU8vpAUG3YSDF",
  "key12": "2vyUftX6ex7THeSrwWV75F4Ho2AgfhWqjEHxz77hpxay8MfVp96EKCxuBiUT2NT9zY8DbFpG9j3XPupRpj2oGVAD",
  "key13": "5dxcRVecYF7rAzWv3LiZybV7HuPGPvU8RT4VAXQEApm3RYv86jM1yMZpbD34MahuiK854PDVSh9xiFG3NvqDjEgH",
  "key14": "5cGUfkD171nVUjbc1pVoSg1rx8j4oxkxWjHKe6qt9CRW3aSf68Zri2cfuWM3wLkujv3sbeFwMqcFgxKxXxexwUEd",
  "key15": "3oQ86sRAAJmQ9p7kbwuQpZNdtxQ5ANSTj835vEHorqbwKAy24bdmJNkL5BvApDT6mpThtS9f9UBCMteuM8aSSH6R",
  "key16": "2AmiSTGSpfsdHsfp1jBUdMG5uyj5p6DUewYNaM1rL6dCPLePxdMBR82BRmb7Z4THjUoipLkbprjCkKuWBrQEBJ38",
  "key17": "49oJEEejvcBb1FRWQKuMFvLmcB1PrJtvGphnFGazyCcPAhHMBHE584FGFb3TRJZH6y9oeKxvvnuHxzZzx8QgCqRS",
  "key18": "3b987QAWwGDXtCduEKkm7XctXky18w4t5DygCDah455TBRA36G24oUmZWvvaVW6a59dGinAXbFFhqVCtFEZZ2VMR",
  "key19": "5z6rgTejnQ3YXaZQAc7hMsPz3HteFXxRSxn3byQPUPj6W1php6hCASsMA8gMF2ru2dzR8y5k6s1yHUsvdtA32V3W",
  "key20": "2X2uVqgfZbFGZS2XWnrMXaF2huzmhPDXm3Fj568dxZ3ymp8cBdKjsSKo6k7TVMdYBnTz2BevKNHrUbVDvQv4Fqpc",
  "key21": "28DqMfFFyVSs3hUrL7CRQLBqtxjoKZjD4AmZHA9gMtUBAULhSyY2EwPzmRq19bAAFJph8P1WvjgGkMZAsq3o13EL",
  "key22": "2Ujcgww6r5vALrUcGY46yCGJuV1TgsJXxzsAJnSsgW7kyXzJmS7EoZFipVtPJmoZ8mkT3KwiM39cWvewQ6ZMTwat",
  "key23": "BCSE5aAza9agejJncjQGShQRniQmxTvVYnnufAh5KajXcfbYWVy7ERZEozLkddj64dJqSqy6RQVXHsqfoveV6S7",
  "key24": "673DMAuPK8FXWNmSRGYAt5eX7HRsEP8ruSAFX9CK5PXTNCj3bwfar9kXWsRVcdnUUq2n5G1QCUJ7iDBpqWicmuH2",
  "key25": "2QcxCUEzxJW21Rpo2R7puqrERGDGYPggpvRRhU8pRCz6KoshWL9jvtMbA2h6WeQTtfVB7hCtXswkEvCwJCMuuh37",
  "key26": "5KYB8dEB6PoB7sxqW7Lrnv37LYn1TQSymFhYaguYwDBVJ2BnYgxC8WQB5menf1JSivcBBFBin7mpyFNLkkGcgQk8",
  "key27": "2bjV5SWL9DLFNA3oDtSnK3rY52qA3fPCYKBRtDAM9aZeVuQxzPAu1282eE3GphxStvUBPx9uu676ze8x8m2bozP4",
  "key28": "2YqWY7uZkt5yiaoZEepMFQ7zTwXe7YSQyJTwm4yZWTcDnXG691r3n6omtX88n18maCkpXoMJJz2PzEUgErgfoQ8G",
  "key29": "2knu4AgB8zP7sYJx1uJAhQPyg33urXygwmrJCF3z8eAyFCg5qi38qWegmrj3vrC1qAjm27yn1CWHNKfdybPmPnPL",
  "key30": "3gosRTpXbKjqAZBkCJrjyhGwvfM64aAXTC42jG9p9n1FdCANUoPUF6ERNt1LXjqcGjDYkcn9wnC3h8B8uV3ZzMGE",
  "key31": "4MGE9xkyr1r8ohkuyzQ6KBcERcB7RGDpB1dq3WF2TJQNi5jeP2td9QhcepkDLEXdHpWiiq8kc9tQaousA9hPSw6B",
  "key32": "4hLuW1LYR8XowAUacChS8aihSpiv2Xs9HUU49fRPmx6LndTSoGjAzBBWk4dbasNCkD6hNaX5EamX7TVsKHnjQQuf",
  "key33": "4hXKHncUKKo7iCGbfHNSveLzzZPYLN3BPxmSio4RLFw2AkXPD8KFdfh5ZdiBJUSVkVkZXWewhvoz5ghbGrhykaYQ",
  "key34": "tibN4sEfBmoDSw6efiNPdKC6wZYguNhrdEwNENA81nc1Y7DTqBsonPeYVz6iyv6UGAFdZLMfF7rbHNKftXnuFZR",
  "key35": "2wxzC2BshET1LxfEZzdw48U9DDnw4iDejUeEqbF6VeVwzky3QFAKyvKK7VgaRhDGcy9KM63Sp4DRpgpzFSt6FnXV"
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
