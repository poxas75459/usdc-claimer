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
    "46DUWU2gdp5xmGTLEuZbiqEVyqaTQG66Y9tgKgpXEKHjo1cmi8VpuTFRkoebMr66QoZazq4h6ySxQ7XytkxYj4zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ToBxLyWPABY6NWJqfc2hQMpmyBuqpnjBPwzqyMJVuG3cQkFAvtW9LdYvBp78dZsL1hos3opMp7Z4Z63uYXwJZD",
  "key1": "2NughomBvgdDuJkgbrb3rWoEEsTR9dvweiyyjeMd266Eyhfw3qEx8M4nbu4j7ho3gcZCvER3SWydYc76XA7NxPd7",
  "key2": "3xa8oPNRjkigpUNUfuvNDFsHCtPQeupFf5k6FqKswGNerfTZAbS4xSiJRYAUJLr9j6gvjayWq6DcniuEBZ7qFaeK",
  "key3": "4uc3E7FK6qb2WYaByU7qXgXDLCELQeXHGTaWaRMRaLMiPthvjtFjuTY6UjrGVSz3D8RiJ1r1oXoRSbM127JVfLbw",
  "key4": "2nxac5mr57YL4up6saus81UdUqFPiiVhf35RXbFeXV9437VgtoesporNhX5bM6ayeeBXRr1XXHrmZZEAW7RJg7jw",
  "key5": "4aVGFvWXyQ67WrGTG2v3mksGrXJ2zPjCFobcvFvX76ahsDKjCVdVDxMYAyEU4UG82aWYD5RWPvi1une4kNprja5A",
  "key6": "3DPtPj1Q7jWJFZjX9MVqVCjrw7B2Q4h1r8BT1QyDjQXhokG9tyRMW37L1ohZRDRRXhUUDBhYbXqrt7jYimHUghY4",
  "key7": "3CfyZETsTiTy5nfCZQMB4rbi4QTyC95SuWDttRRvmDo1WnXMY18BdSqfDVAVimeXVfNSobG856ucocG9YE8LDU5k",
  "key8": "2Eqwt96UzxeBv7VyYzHYsV5HZktc8mfxyzrfkTKuHxxjNbCE34U7N7axCL9uAh5QwHoZJVUjTA11TAdTw1UaFgjZ",
  "key9": "4xV7jVJtLhZayJ7nZtRSU3WdQHoLpf7MwXjS3EaQ9hMHZxcNmB7pitDPBjjsGbqStkzroUi5v5X8PYBbYmfwSUJ4",
  "key10": "2WbGwWh6QdWunoetbUztwR6CQH9jGmve1fjaC26RJtugpmM2XEj2zsS1g5CuAsCtTFukGiYfTiAVVCksZGKJExZW",
  "key11": "4n3kH5Yn8ztq3cuXcqj3UweQeZmvW2kamNsSdRTbmqqqQHgHdoNijZvBUrzsaXpohprwCajPUcN1raiJFqpkFX8d",
  "key12": "5ySinKK5J1Qncf4XA3RCTKEZ6zMUyxmmRxBxxtPcP6KYjcwAdybBUUk1nRnAcrgfop5EGmYsEVMgKcb138zYfuRu",
  "key13": "2BDu9CsKbNp6K31EzSg55i1P4cf28bESfuhdewxhXgo2XZ6Z4JjWnWPBApjQVHPTwqPPyyZ414Zb8hFYhtKCm1vN",
  "key14": "2KtLxdyufECXN1k3G4581Crf5NksrttTSjH6fbekztNEhqfmh3Cuk6TxanZs78wx8sftjw7LWgJTJR8mCWnuf9WX",
  "key15": "5Ub8tP1pBpfbeNkXt6WyBAMkS2GAQsCXS5QGNSeX2h91BbG6YjExk88BnPAQzJkRqJ6sF1dECSvoFByERTue7VNy",
  "key16": "4Qm3DNsoP63hhdA187XeMiK8e5ZVfZ6ojxTzFQiyFQ8vWxmPotNy48ibzZdDRGuvN9WuupcAkwUHjKVTKLpcPJC2",
  "key17": "HeDnkzySwu7Wtz74mKrj1rRLp69D12JZFDtnC9UJHPd1BtB3gpBs5QtiuSoTZzig6d6m79G9BKJ2Neo22sXFf1G",
  "key18": "5H5DAcDAiKpntQfsKQK6sFD8APt2Wqcu6VoMTbeKjwvW4h3fSXQPJcYkaXsajxjZrUVQ8Fr1fAYUGcnqJES1EjaA",
  "key19": "2wPPcDAv4wzHxMf1UGguN6hshWFFjPbRqPM4huYGcqNdgRvBXrQdKDWzbuUieUdftzwxgsrrsBcT7mydZkYRSi9Y",
  "key20": "5WEKPajoEtztsCQ1aV4VV1vJiWwfKMVHAqkFacxMeALjNY9dL7HyW9rCuoRuVAvWJUzGAHLhFUanu9e8QcPtkE1",
  "key21": "2fv3f4xDFMLa2YwV3aXAQVsXe5zFtU1J5wpdpLvVjE8SzBS5qwMiJahR7tURmZBirK4GJANQXDBHA72iWXsRprof",
  "key22": "2rL9uCGhZdRGNXCZeQEEPowybHVhUo4rYaQocddDqmqJi4NENDC717aKSCEbAc6t1Kd7TNndqToVckqZJaWsuvxS",
  "key23": "HHRbnNi1fzQdPxCSXG3jESnHzKs21nEHwRYkJ9G67vGrBNQsoRNv1M8NrsnpdHqKjYc3XnMEdbjz2EXJ2dCSNpC",
  "key24": "3QZtrVj9zPBwgmUqtmxuuM5GDC4vmZSmBdQYiTAgf1eBpMrU8J5n7Zms3k9eMy2mMSyiSTnpkDG5VzBoih11E5s4",
  "key25": "3U4Xf1TYEZUEEsV8iMby4DcjN4jBKghQcK4b6ykTDzj3xKPjEY643K5dEsJzjMqmxxi3PkptPdkdAEUekPDPYeKs",
  "key26": "Xj1h3RPKoRdfV1vUan4GhJ21vvh89TLuJdFaKNSFKYZETt3Bvu1WVjTYQKHyqfJXFW8dKLua2AY8nevZsddbz5M",
  "key27": "5xa3pqXXjeP9X8e3mPXbVQHSBKYbSUmoYoUJ8DCPTParYpWy22Gm1NAJy6JGodP6PZ3aUpFUWfC9fPghCVU5Uhwg"
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
