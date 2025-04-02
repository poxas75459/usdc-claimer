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
    "3h4Ufe7EWqpymrHJ41JoeiBjqbMdfZ5cSAnGWrjoAgaDKTSJ6RPbYeEg94mXA8Xg4zZT4Sb8f8hfggPhNBLjKBgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRqMbVYhLEzw1YREjFHJa37cZYKznhZ5UcXBCMiAUcU6TQ1Uk2fifrWDQt1txPoxzsGRnVQa9gYGFKUTniLZqmy",
  "key1": "TqnthB71UBrzNMoTWrh4eDwwSN3w7kC6x6Sdf1LVcjJhpuydj5wHhnv3pBkL2PcqeZvL2P5VyknRBLgJ4SFHFjh",
  "key2": "2BFYV27TfRKrwY2KgZqM9x7YwvRTJkMKumkuGqmKphMhG7ENVdc61tTHXNNbQByWH7PyZqv5XeiYwGyow5qzgV9b",
  "key3": "3qGJkZFb6CX5LeVpsWcWXs2ccMFJUSQ8BRby7eBaAYnhrHfoPnc3aMu9vv55i4RnwDk4NPHbbFo3RavtzNJn5oZG",
  "key4": "3TuGVRNnczdbSpWFyzDeYaMZLXnz2pGMrXVczqyycKkhcLUdZ2zEzjzguP48hzg3YWx9PxL5axXuRcGVaTEweqHf",
  "key5": "4Wt66usgqqznaFhzZ9EPBATFXLdBRMNjTBia6cgkfWZHvfYDo1nEvULDwnqdBAJxV1bDFYuN8Ysw3jMqqcBRoGZV",
  "key6": "4UApaDHBVBrpez4eiRY3pnsJ3zgyd1nxPfk1mVdDtnwDxYsazMNJYKitc2r8xFGNTBChWmnm7gQp9QeDCpXbVCbd",
  "key7": "2zGCkXvCrdxVAaSDZaC38QZYR8niiRTMYkh3Nnv4WEuM3goehmRr9KU7RDdV25jW7MZiRwmZRmvDMDEQ4NC6Za8K",
  "key8": "5hWfDgaTfRZJZS1CmNFw8ZZuHeSacfVbY3RphadxngHjDc9JW56KiNth5Eadhfy6z3FQULZstdgo8zpzv1XU8JZN",
  "key9": "5wmifGzzv4583rT4yYaqkmNtMZPNow9hbsET4CsEPqFiVmPRiAreu2BNFab752QAEggNt4qXST5dmCwu6j5Sz5dN",
  "key10": "633siKxD5RDUEjiQSko7eNmKBiLLrQgXag9UgX1sTnKEnrSE4UrvVXKzNt7tFbF9RLFJN7S5RFGTXNfTTjCe3baf",
  "key11": "gz6UERHruXKrBhy3EakwLx4auTbfybzzUW8EADgFs6aKhpiGabwaowwebKebuJzHF1fvAgjEfiD3dzABeCkpLbk",
  "key12": "4PNrpyLXTdpoJ97AcSMvJCSzMqi9vTxYnwSua18wZrWKGf2HbV4BSaQxRPbEsXYdwRd6r6YEhX7YfbkBVvrwktxp",
  "key13": "GX77eZ19RA7TTNri1CQFq3jUsL3auRQ1xtvrZP9uudZZ76nMH1CoJ235vaakb1jGN9yiLp9YNk31FcgFRAHtYhi",
  "key14": "4yjV1XJo74cyLBs9HU29B4B24XWVaGYZ2XPx4TBrabGxB96y3XnDX2W68sdBgeBCwcFurFfL21uGR3fpim88zZau",
  "key15": "46aLHz7MSxyeAFx4uBGa9KLJX61rCJ14M1Y3aQu1REY3GYWm7sN9vH8jW8sVT6Y7X7Gu42CjLK7dEScR3cgkJQqi",
  "key16": "3feChSiszwRz5xbrKMUQpiFBKKjeA4cENEPs9PKx68iKfeHw7yz5TBVhZBncF8Uk2UEYKvmVKWxPAMv7wnHsVcXA",
  "key17": "tX1tfr8QP5XXWYWRvNNkkbRegk514K3MtimEJ6J81UJxd3gHwdk3jpuaZyn8aVu1eWK183rgU2WcPLrjbcX5KAr",
  "key18": "5jkxDSzYDmZtBbZbkVQqMvZ2X5H3LMU1auf819tLLPEjzgw4VvSsvKdiRdD61QYg4jyUreXUed93edjkzFVRQKaq",
  "key19": "2BR7A2YGHSu5NohcweNe1sqQSNP1ef1UNx2peBJge8DmoVr8o6kDRA2befDjuyWRgnEMjxXoeqXQHBZB1YNuNhUA",
  "key20": "5nsa1U5Sc2Z4fgaY5ezpiRWMWwPp4k4s5QU4LdnZVyJ67z92LMzePsX83Pki6udeq3HJboixTLCL2TNGpGxVgBXb",
  "key21": "3vbTtpPF3puRKVbc8uNpVjG92wKtoo5r5ByzVzDH16XQUNyx4B2W8yngwWXARAe4NzCSor8XoLp5TTaLP1unuWup",
  "key22": "56Dr9jERevpr8oVaCA2XhCD7miqFcpw42J8cnAiHhgUahtVDTiziZU8JdrGFjBjg2u7LvJGnKFp46XsHQigsTxqH",
  "key23": "3ipzd56YRWMHHeECLQDtzo9Mkb9S686mq3iEX2irfj2QHPZiCmJq93zZc9WmGT6Mv6HcHcBZqnNTkE8eEzjaRHCn",
  "key24": "3NWdSxpwZq4imLGFdSnuPq5vof5jJtQs7i47MQizQgdePdVQo1zDQEXUJf5bd7pdKtfCZDtkVEpVvNxZpMaV2q1K",
  "key25": "bNuMgXDT5eXdePEzLWPKc1h3nVGYjYUpN6uNoVjcrfLRKPVVVVW7Tity5Ti8Cr6Phk7hibRgHb9KVmLwfnYegBG",
  "key26": "2NkP65sL3aLEApfJ2yUT7AwDqDPEiKZ6aZXukV6NMqmM4Z8pXjoaeztjUcznk9rWhsgk5fhZ1viM4qWm4jZ8bJPW",
  "key27": "56SKU8NjK9y31xoNtuEeFC4tgM6KZY7sb2LKAEFCaeZUhwJSGGRVW1p77xiWTyHE6RzkQn5fv5mAkdaoCSKyAdEi"
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
