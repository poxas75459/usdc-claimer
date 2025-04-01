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
    "33sh41dAbutBM9yo6snDTtWpbQQheBn9Km3Acw52RHyZEgYBrriCkBn1n8mtPfKZdt8bqffe9FjyfhnVFTq7iU3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KykTYtdtEbiNwruxW2JgKtBMvu5KAJoHiX9bLpLr5LRRpmdf7YpFnaj9mbU65U8FNBor1eE2imrRXynCpfZVSMn",
  "key1": "4K6VJDYEPvo4ESd3WE5pstqEGBrtMsskvyHp2VyvLVpWvUa7oSoe6VzfP7Botz1BZ7WTswsfdj8AppB8C1o3nXoM",
  "key2": "kWgEd9xZBX9n7AM3EeZNEHdXCzSsEP6kt5QcyoRv1rfFza51to4g6K1MsioeCrw1KUJpb97vEeV4CBVhk3CXT2j",
  "key3": "3wMkyB2HYo9qzd8qttCk5EHQ7t1FwkAmSCNh751WsxB2sFbfvG6vvf2r7Uhr1GiACMvhhxqCnYUNBoM2MKy6nGd1",
  "key4": "ER9h3jhTAZFjEsZW9oUiCqf8Nb7bGjGpfaRhzJ8wYHAp8dckrcrvV9YFxgqPFvYaJiSJPDehhTdsW4q7tpPQwng",
  "key5": "3xcqt9bbkjkCCPAKGVCuFghwdSBKGR9MNBPZ7wZ1tY6H3ry5zRUeZ9sFryrh1C5hGYYg5jGgvmgkS2fNtX4JUkQV",
  "key6": "4ynEV7UzNgUrcT3D3qHLo8s95L7fs6dHFUKCeHFeeRsut9vDrX16rowBPw1ErLQWyfKkTmenXqnnT7kjSoU3CVtM",
  "key7": "31GWXLkDUCbVgkV5raF2Cy3Cw6r3ENXXcGpsEV226wJv4XHDS9oWzCPwHmUzKuPCh77a7yvRpETHM3PbSoVn1PMP",
  "key8": "2Sscf7QeYmArUwxtRPttvC97RPbWQe5aMgrdy47uPS9E2V8PbsvU2SNuV59DcorSnczuudv2K1tmdbfes68tb3N7",
  "key9": "36s1TqDitSwWTP8tK1NSQ52bKPs346iKaQsAWipmnkPQgJggiFZ34ohp6SwBtbaY44S4j36P7CcdWZiMtzPLKMNQ",
  "key10": "4Uekciy6t3yWfWTUYurUEMzrViujfz9v7jr8GySLLaet1owqXQQYs5nWYr95VzjMMhgT3ztphiQACSh3SiafdanX",
  "key11": "48bGiQfABBi3ZkqQqBNjBmRLsbZGUBE1zsEcedoSB5jGJ57Qg2NtXNrME9bxwJvfzUCucfKWLJKNxd9pkrJ7xoSW",
  "key12": "YYhdowRJCBXgQ6yBr2qm1YcnWsHDXSQtTSFm5ThpopwVgaCPzS17QcR7tx1YgETN7bcEnv7LbF7hzuh3fN3ESfy",
  "key13": "3CHgvAE8AU6Ztt1fLer1rprPJZpcrNgvCzEvWgEgJvxkjfYq1unc7C1PFiYdchHcaTpcyYior6Fe91a8EhiMqUhb",
  "key14": "2C4ZEk1otQTuF7JNEv49dMBgVQ2QxxmU4UWNBdh8d2yJPjQ6yXNA7okjypUnK9tGLkuaTy56ACSKLzzLiRckvWQA",
  "key15": "47oBqMVpVSwzArf9sppJ5wQmJyNgwAXFukA4YFSRd8VvY1mrPdNpKiuB44Y7buLES5fv6TNBz3P9Bx7CujC6WYY1",
  "key16": "31a3XPaCBzTGigEEG77xpnkGHm6npZdXMyWFQXHQFmcivNBBfDfRABqmdHpt6j32T1WYExbHfE2v3uGPBgH8xPF5",
  "key17": "47zqxNm8PwNvvoiY5jDFZyFfw8mf462UEgqtBHqSXM7aruqaQcg9QwocBkVnim9g55oPZTTTwzdM1oZiJtGgdsY2",
  "key18": "9dMbStiK9c4PerdUQBV6yVq2WkSjBff922MMyU4smJDfTZKLUrumVkyUiv3yvTog8Nns5cXKDWUnZxk7kM7rxJq",
  "key19": "2N7aysFNDYPh4Ghakbow6YcAanooZ6NkkanHYRrJrbpnGVwCoG1rZinp1zD9MfKUAZNMW7LJo4RejEJJPTFxvUfK",
  "key20": "4x54UEG5LZhPoKgFH7DaYgayEWUQZ7RYxDmkuk7T95nUhxEiSLEy866N23xEW2W1z3ACxkjzA9nhkvoTbtXWnoXh",
  "key21": "3Sg83tZ9yrtfvQwF81kckMdiuExfPT3teG3NNhrif2mjzmjqXNkifhNx4HHEnDKuukkK3HdfSVF3RYwiBfmgdUog",
  "key22": "3kJQ4pAnbQAB8Rzo85r5SJw5otcTx6NRM19A5V7BJbnDqqTqrjT7GiW2QBt1bKTyTKUAy8XftkWzuHfmt1TZUbKB",
  "key23": "q91xP3uz5aXtx2JAUjKphLwDfFtCXcfb7rSZxNVTQBQnKNknz485UzL1rsRG4RmgmNPcjp2np6aPfkySsUas7bq",
  "key24": "5aMe3j2v4sa2jZEKiZiXVSRMcXHPTJw7YXZYHF9TM3TmuY9LG3e4dbaSj7ydZSe5eKEQRE39kEG8zUmdqvJmEahB",
  "key25": "5DQcfWo1sxqEpAxaympXMR9dcEBiZArwaCmdLRrsLYaUVNDVrdAFayjz61P787bPB9yPkVmifcMWkuxA3DkdMzLb",
  "key26": "4uXdPPwus3aLy68DftSsbW2fS8ZN4cPeLQDXfEECmh7Jdbz1ZRh4d1hSPCZQcfNPcmRf76NhGKFTD57VppRKs28i",
  "key27": "2iV1mW2j7SmTcv7vv71cjh8JgrQAsP4r8ZZfRjRCen69fWTaQeNFxW8dTiDfyQTwxuJzjj3Rd2vP2ZPB8BbGuz7e",
  "key28": "L7PAkkeiGu8fKsTTRibhyayovz6US8gsy1cFEe1JfL4yhkDXnkUMgUnHfRupj24nBUibSJW9LLmjzUBNFx2zuBU"
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
