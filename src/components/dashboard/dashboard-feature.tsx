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
    "pZ2EiqavG3EcvKwJvB9BwEFWBPdXBZxsBt37499PQpZFFaSeCF35Ap5FjmCMNV2PUx1J544em98jDQNFA7BrKeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PiMwis2q1GUGEAKkpQoaohrcZ859cN9VWP3aUSFMuYcSZjhTYjnniD2TYNebAHJHV6XtT7HG5z3p6v96GFaZLy4",
  "key1": "3Ef6JpXtgdY2s3X22yYuxJRF3teTd9af7co9HpBVSw5G6VsqEt1nQ2ynxqyQCCtH2U4sL63nJr1QuxSBnQd62yDM",
  "key2": "3EzTwC7ytpxd5qdHmkSgREytQvhfVqsqYox8PDSVih6b7Bk6NhL9nUffBJMcEJD3wMUvWunjg5nysqyVspGv2rJB",
  "key3": "5BjZSsoWQxd1ATA55m5yKCXSHgnCGf9fRHWyzWgoNVG91Wz8Z5KtRt3zDbJ4mivpQ4HxEt4pHs9vFktaqQoYR1En",
  "key4": "3BKfVR2QMzYJYr43vCNW2WJYxFYfhnZigp9Dxkdzhbaj7jT52pLDmcMYvpaprXfvYJ4eqvToyZDDHqx4pfu7ijYu",
  "key5": "4NzYgaEyFUjTmNALBAv6o2p3JMmnPMGuTcZRPv5759S7PPq3bbtRZduj47wyGwkV61i4aEVwJBoydeSVB1VqdFAY",
  "key6": "5CjDeBqirmNshKbxKdwa798D3JkPiPmC9dggfA3Bd5a2W7572dVWAGG8yZQ9zNW8hSJRZKKweAje14c27Yq1Lxv2",
  "key7": "673h7kh4E1Ju9Cdz4nL3h6zb2BXL9n7nE5GzfCjCyEz9DbYSAfnreNx1sxvQ1P3mjLBZs3rtFnLGk2JqBVK6L4hf",
  "key8": "3UZ7ZPyjkJYWcdiwNjqY5LkyJkFmE1XMD88whrtoTjG3B6ANU6L53j1ucV4uN88U1amdqQjp9jsK48WoikWgDBEQ",
  "key9": "3YwZSLXEcrCkBVjDteTBJSk84Ra8Kak7J6JqegNcftgded8ddcmdqQK4d2zUk4APQX7au2KTC384rW3vL9a7YqzM",
  "key10": "3E8UjRo48EZsL12PPf6ANwurKe1vVmYMNc1QCkpBKkbo6K61d82UJWwAAAv1aBXVFubkKcQ1qHA9VVobgYsK4sJM",
  "key11": "3qt1ZcvJ1CLHfBb7QVoCEStTX3pMkXRLCFadSjPQj41uqCjGWKpVH19NUgcWkZ8uGtEZ4vxtUW1ek5ebBnQZwewi",
  "key12": "2z7Cd4DjqX1z1XR2vyTyps9aBQwjbwJTNTb8XvgEBkb7kbnaVdAjMYGPsoxXNCqykuGwbzcDiYg5hHnT5MecNaLv",
  "key13": "3E5HdXPcTY8QPtRb36Xr7xAGfMtd2KorNKk8sCcT2Q2LkNwp53iPtEZakCjjj9CRLsp2kfe7f4wNaNqiqnMXLAgj",
  "key14": "4dedxxuiakE96cK8HxLvjLEV3a71oLKWFoGhVqesxrMsCYG6w2dM1kYKoVZf7xCuSCwqAPs7NMjdFh2MdfMU9PNa",
  "key15": "29wKa9ns7ZDNrUANtWivK6UEbf6GmH4qhSL98NRX4EdiAB5uvHvmoewsPjYCsTduv995y9jbEXVeLYZUj3EqxWBw",
  "key16": "4F4mmVv9kmEvzjGzbjEfq2cxcw3bzy6DAcZxY93b4ZNvUf9rSREsrgG2SJAVefzpbunpaxBJFP1jF782Bye491Up",
  "key17": "3wCN1Kgf8kJaqvmtJ7h8gHt6FKpnWdXgBgGvSDfFc5t26VEfpqXfFYLk1avgLbxAm8jG4rj65q23oDfzcypb6UL6",
  "key18": "2tVtbzVsBvC1KoXvUGURpBXEHYtiZMX5KGmWmYbuBbgq2KfAtsv7C49azmmyVDqFXy8i6XDMSCeEBsP9WZd6JGsm",
  "key19": "p162e5CH2XNg4KhYkLm2d7iCjnLeTF8JKKtQD6u2uaxJ4WM3Uy6pTQTuJz2eeZxMPjQJn9vJivNurvizhn5i1r1",
  "key20": "3eioufZzyHomtgra6RfEHQQt4DcYEwKfKbWcj5E8x8VASp3hejCgEmpc3g45RJeSTuYV99SzvCor3SgtbrVL3Zxh",
  "key21": "2JfPyDB5uMfRQnt3wn7oT2M63pFfhXXHikJuNirBiYU7pBqwq1GJdX5WpT924L89dSCLyagdxZptWrnzSABsaP3w",
  "key22": "26VyC4QsyQvdgsraoajxCwZR4UUNN7uBWQnVhaukXQV4aQV21UTzTWD7uMgZW2gHJ2x3j2it1vftWk81ji2nKgrK",
  "key23": "3sHN1FBwR7ywcAZ1gysjhNhhEGoG5VeGjRWVrcR9p9i65xmdwH194KiyetSeBPCV7qLuT1BSeDWEqgQyDi8syVbz",
  "key24": "4izdVTukSywyVwhhfQ19FLhwWeeMojaJZ4NywcKcaeTr1ZtYWyfTU7bzhisZLp21NpVWWfgfH33ZttLScGStCui1",
  "key25": "2hgf3Gy4jcq2SKQVeTqWem6u1FP4UaeP4uwvwmFj3xVCgrNfXW4YeMhmreZCiffnFGJW6f9q1u8aEUgosbVGH8r8",
  "key26": "3ahrEJvyJQfC4m9VGRwt15Xc34y7Tsw5QDiCLErGgmJbQDoobBjUBiXG8n8DvS8q5X6S1epyCvfJjhxyjxKmFYQb",
  "key27": "4T3UjtYbp9nwjvee2e7ACHepGLjhMDESorgBC3sw9uzYdmjZEP1PkYFSthsmAsWHshGoWnsgjeoB52MczvRmL4xr",
  "key28": "3ZqBmqF2KsMEwq4nxk1v2gmwbFRd58kfnadf9E4oZiDYtUH3HhR744TcAJ7VFK27XPe5EexdjMabjmbLdeDQU6U7",
  "key29": "5gNpfwMUs2CKLy8KpkvitVUttcX8dnEdvsda9FioG7jNRALoMJaLhghVmBhkaftB9CfPn1kLyQf4oS93M5QYMxB",
  "key30": "5y2hxdqcnZSzPqTqU5gGBsgradtvcxeCt47ZfQPz4jFVCqKFrpjHzEHoEArkLyh9XjBtjuwnFtjASJqHNZrxgLRJ",
  "key31": "4CmkjvBB7hPjAmqTaexQg8mAm6QpFJYPop4NFGR922imRQ2fXDgnDug3S6PmV6Uvswg3XBSFkq9tP7dUw2DdinXE",
  "key32": "tquKVJJd7PZXNUSo2gFfiKtG9CCfsph9ceffTf4e4H2tmUdv5qG9UmerFFRaJAUnyHVLXhYkjLA9bpMCM5ziCdd"
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
