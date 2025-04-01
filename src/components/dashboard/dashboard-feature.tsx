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
    "3YdDNJyNkdNSVWwbmKagXQGiQLYaTRmABAPWmcsaNVd62jAdciLfMtYmSEwJK4jb8f2eaHTAteuSmPWYtPtBuJHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLzfpRywUGGxzbr2iSMx7HDDMCm2V1eoXp8ntARoNsC1koEXwdg5aFW6uhBJMwo6EeuTJzLcyTo81cFHTNK75gq",
  "key1": "3FxxNt4Ej4kGrAuyBS6SxCweRtge6zTX17eZdubDL6grvGpDExXS1jv7P69KoLjfk5YCqLq5MZcSDotnxU56eCUZ",
  "key2": "3dsevsnhQ2C7myi8YSnRu1zPTvUHVKXYYGiuxNHFe4eM4r2hSHGWSZ5fiTDm7cAhHErk6CEPshqia2VUUcxW7gRA",
  "key3": "2WDeZ4uN2iiXJwFdhb3qtRbKPFNqu3BA2nAh7Zg7J5JPYfYujujZP13fAK53NJLxGBTM7gq8U2YHgC4G7HvU3GzP",
  "key4": "3nNGugRSCtio7QJniTQUWkJjqWVHphpnEJk4zBnRWw28HNst4YwpnqEgiXE9WL2gcHjsLQxPLMRNwc6maXo8pdNQ",
  "key5": "379eiZePshFySib8NMvWemXq4DnJBmBeUidmh38fb3oWJ4B1SDSzmKWZQQb4EJ789N9vYTrnZa3wVmBe1nwfswsH",
  "key6": "5yb7k9uNJHLLGd3VGfiquGPDcZqRtZazKFt4t2KiWtV9ERhBiznj847CgQMc53NLqTTTMeirqZyQSseUx7NPs8vA",
  "key7": "sRd5CoxdyFCW8CYvDwKaGqbgHz86V1eceYwJTtpVJY2hw2HBZcL4zbPH2MmMtaxBmsgLJz4ugGbzKK5AwPRA9NK",
  "key8": "uBrG2Mo234d8R3oinXF35Qk6moZQJ3sUdZbQpba623D3eFSdpiv46Y8cXtMjh3Mc35qqFcAVEsF93hasj83qPkX",
  "key9": "2yzH7tXhpUC1RcuPCkQ6epy6fgJ6mcQe4JxGTjoj9xnzUvtp58LHr2u9G4VBmmESvnhFagmjSTbwfH4X5Hm9hGNY",
  "key10": "ceVcXHdh3bXP8qrnXTdxtKZRnnNR7GTr1vzWc7mr3ThzB2t46owb9LqUh1PaqEaXg1AzcMyAmb3AiYqF6vKtyDe",
  "key11": "2Jda1DqrU1ACe4rrYTPw1RUCPG8fCwREBLbprRsAQyqGwmMjr4q6hckEf8RKx7khoEM7NQWLfP3e5GC5kY5rUAii",
  "key12": "2E3uCoJ7SJdNfhA8xCnDAxiepae6tf8HnLs1NiWgFa4SvQ6Y4BZYPfVygwFse6y7msoxhP4hTzhTCPxBbExpXByU",
  "key13": "2zYHSGMZDwehcsBtehMFzMCWPPmSHvaDHTqgdoqBFJMXHNyQjnWH8gpiXHeEqxt7YYze3i8oCUK92hJxs6JwQufs",
  "key14": "5cdAP5G2UerHJjtKh6fnoncsdvHQpjnUPT82jGBhEoQ1zDBzmgbnT9ZrAoimwnh4W1QrS4o8pbpfqCjBbxfTahzu",
  "key15": "2cPp4rzXUg53CnUJU7orbL1cmBXSu1wuqXhL5upQE8jDYPP7sFJUJruUxFRwNEt6KckXo3H2iucxQLaruxX1ZvVC",
  "key16": "51Dwn7yTTMUnadDJPXPbW6CYqZ239S72XJT8hA17i3zHmKeFBarC57Zx9hye3pXr8NEfEjaiqdeDkzH7pSGMVFW3",
  "key17": "46p6n5DwRGxnWYTXq6wwE3J87T7SeJcGcUv7kqFsuEYo132t9L6cr1hNofkmWNZVVFM5mjhq87KAAmB4h3N6kUo5",
  "key18": "jM2wqnQ6hkn6AKNZZf2UmK69a2ibRMgacUakrjMeeHFVLHA4Neox4Ftx3iXdNqEEvZVHGUxUPnKE9fSYqbDyMY6",
  "key19": "2wNJFKfCcuNiTebBybKS8P2VLNA1ZBhhheaAxEjAriPsoe8hnKhjnpYBkis83hY6DyXeXQ7PpmZc976ErnPui8K6",
  "key20": "5dPh1mZBCxYDH6VEDoD9iqNyjo6HcX9d2W2TGvmch4V9KMd7j4DrRbtm2mdwKArvKxLwkRig7AEe5L5HuitWUzm6",
  "key21": "4ReE27XP49wEc44J6LhuW9gsC8ycTDJ2LRDnLDe7cqc4RX98GwFWWRzgsFqr8MV5nbaYTBYJn1RfKjWpd6FeKoNy",
  "key22": "4YQsyzzEGpgPRrqVrjEJeG1vkyyiReUPUBt4fKHTR7LjofN9LWCNghBaRydXig2Bj6WCw7dqjfmaMTvSTxfrdFZt",
  "key23": "3mQ3wZj7QYMp9Wtn9L3mKmu9pppJGfDVE53hNwvKkc9y3VZswLqEGYUkJBma3BcpDFkzPpAU9aRXkPysgwjyqsZu",
  "key24": "5155YEh1RfzRKJWWcAU6XeTcT9yqKPY9uKys6D7ZdQj8GMpVxdH77U7Uq1nwzxNcqfJ6WVkryRshgEBLijuQftEw"
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
