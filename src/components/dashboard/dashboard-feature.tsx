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
    "5mrpgG1qa2oHHWs2sE4BUTjAcsYG8verrrWNpQcHwAAk5zr4mAxBzgoYq9uUkaAokF893Axj6of58dcFZtxbVDGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUhSWWszp8SdrDHGooFxjhH8pMvzbS5QPECFwpRFLpz1PC9vydTEGuY2Jie2sBLGdnD77KKdYwdLZbG6TgxQrEQ",
  "key1": "5VSta3vfv12tgoCAcYdFdFqmLdwL9kfwb3LGdNX89QmT2XJS7e3wQq8LX8EthzMcGEavDDuoZZaPhme47Aeu3v4S",
  "key2": "4WPgiMgd7SKr2LoSJfKsuYptNcuUznYDttQ7sR7S2xn3jL4W8inAQsVa3RBos6Tpemh2pHQ7PSoexM5UpVs9929x",
  "key3": "2gWDTw9iJye2ZmATuTV6fpFzitJPqxuCVugfBU8J319P3HWyNEEiWtGeQj12qnLV7h3Ze4AM7Nia2LYu2N3sUMTY",
  "key4": "2ESpkThZm1SPKnsMA4LvXov2quJgngWCavFjCQy979MsXRKaRM3xSs1NGsoCY3BXaNsAN3U3Ud1wHZYp9mauxq9Y",
  "key5": "2p4e7XdCRdE9SWviop3mHSgMDRB21V774n1uBNXnstHBJKJZbUF9aKzveVZXbX8nWbnKqJfUrSFSjaxvpQsTKVss",
  "key6": "5PUjwx37xEoh1zwzYxkN2wUgtGDv9qTDgiT1qf2mAhH4x96H8MxVdMj5qcENsADqVCEkxuCtjob5devZPXWtuuMh",
  "key7": "DadyFimgFVch7y3GKNhiLRxXfCYDKMBPhSEpFwZRrMPxjAUawycHXchop8hfruMbTfdbyQZvaNYBYHDxS98SCZz",
  "key8": "M2xv5WBNMfug8tXcBSEgRh3mknVDHM9qf87zRLCy7RX4Z7rFLmJZLiD1B5KCTYo9BDqyAGEkokB9AdsgCZMEx2t",
  "key9": "5B56yiYbvVV7hVMwt2jrRmH18taEYeHwUQKi9xf3gejmPohPRq8vTWFKmxGSBnXfEwnWRfB6kkgak3f3QsWHeEvJ",
  "key10": "5kxBaMoFggcbhsYZPwnasSaWbFSWkRE4rnW81EaMBJW7AwBrRJwqViXDa5cCDKiYBd5Pvg9dfSwE7SVmr7yLrBMp",
  "key11": "7doMCftso4fivVprvwMMSt75SLGwLEM44vY5qaKw1cx4DfVXfEHUsNR4e7KTL6irfa1RvnFKHnVQMbLz8xFvWRo",
  "key12": "62LHTtYvUgFrC3Jr1hUdkdr3JKW7reavk1s6UMRgJVdxa6W36NQCKQpQAv8ZQc529Nsda89htraHGun1R65PTbv3",
  "key13": "2BcfQ5qQMQKW4ea6qdZgxTKtjpZqkE4VRrbxzxSLjcLCtNhnbVoWzwCgsQojCjtCrvRaXibyPsrAjTyt4Pgbb3Gi",
  "key14": "2U4kw7aDif9tZEJvxgXaEKKEpcYSK6K3xzDuuSrZHmsLncYJytVECEsJdTRaAefooVrJYZXUNCZjT5vcXqnAporQ",
  "key15": "3M5vD28dLAkgWnJXju4w27NLe7iVRQvuxnZLVEhni8s6iXi7TVTJAPkVRUj8HyoQx2cCdCR6KGGoq8VS8w1Dqy9Y",
  "key16": "4K3rBDSqXYtgfaxZK5tgiW5PMfjzZqibaRFpzQNhUq83K6orPeh2zu64oeSc929zKp6N9ecpakmensB7TBCr9HzY",
  "key17": "3yQqVVdURD1ZdpojKuwfmPrcUyGMFGcqMd5M9KU5M5AsbKy9XGzG3xhyZsG5rqZksg3YikeFcGWsdwdWjqDndtQu",
  "key18": "4L1oqjTUDekJd1cLzSrUB4DZnfQ9gH5qoaXiSTaUhtfkw9gw35F9qutLuDTkdEF5pn4FGXXGtB2w6Rhma1Zn8bxR",
  "key19": "wgy9cVDXrePZ4urX9erwG9QH8ZBEh44DCngXS3Zb7o1FPAktHY6fhuzKzpfpUghrfFSrZpkMToh4UeogFQ1xXVK",
  "key20": "27PV6zzFahDocCQ9rPUxHsMyPKEHtUfokk751RSWXeyKVTBhtQAjwdvYfM7ujsrVWQ96Ps1abAgzjgXkKijveufE",
  "key21": "543fZogXipEpNBjf23GzAybbBfSxp6dKPTjYQ2aGfdaDwqmGMYKLo3pHye1HJnLx4kybMS7qSYW3h9pE7AzMwj9K",
  "key22": "4HCaGphd1run9o9hrUzQCftCpJuEZruDGg6L9dYbNFEtr1QV9Hq7EAyRDYYKpSNm8gu7G9K8WzvY2d4gr5GbQ6Fw",
  "key23": "i1ZiUAJHzetoYPPbPAifRNYapzLXRf7HBTNr5dSNj347MqpasixiwDo3HLDXx94iw66y4cZmJatbeuGLSTMBu2L",
  "key24": "4K3qNQsew2QXNsEvViNSnDjidJmVgQeDQGooo8qY7C5XqHxYHF8KFU3MdgNZodmnsDRYeowfrD2XH1QiMuWS8ZBb",
  "key25": "3fFH677Y3iVkH12hLPXf7sHk6NSrr2BJroptphBCphNRyoLadpbFGUk511a5VyDukJmwzJbDACfFBLBNjCDtrrZN",
  "key26": "3GF7ru11GPdLzwpALJk7dyvWFJLRb4prYDUddVdwrz1hCt4YQK1K1oL7LjR2kjxE4boRZEgaGMfmXeRHhZGCg52n",
  "key27": "3wWuEqw91ZdY9u7R78f9yfzdLyCdkEBKnZBAemczWS5RwXniSjTweA9RdRJ3e3k3oyTuJ3BKqTcTNKqpqyQySEq7",
  "key28": "4mLVhV6QEyeHavbbH6FJ76QkEbCRcZqSQARR6yZv7JsHwdLujqbyeAE9FjJ47H6uwcrEczyBBrYMXUG3dbNPsSwg",
  "key29": "y3dVeRM3epQNCJ5mP5KmAmPgyXxcnaAoqJgfFnY7ahgy7VVKy1KcQuhUPvYh5cNe2x3PZrC8wDqHnP2m7aYGDzY"
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
