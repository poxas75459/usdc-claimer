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
    "5xancg3dvRHC9obUvy1wptehiguSesSCMQAkJKN5RBpCX1RztiizPV6anVLiJMb7wSH5ZY5BRufRnmnyAxSuYbYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmovz1hdHJtkxwrC2jhqDTqxaXLEk7REf3ixKBzW2ma5cXzYttGLWP3hVjin1G9w4r2it78PPGRd6FfB9huYXq6",
  "key1": "DLDqkUrWEsP1oD8fj8c6vvYSDME21cGpSbBuzBKW7AYmEtCUEg2tPdCDmz5AdJzLMy9YwdQdU5QHz6fhbtAKFqS",
  "key2": "UACA7bhrkWyz7p611ebW5jdFQ59aoKuZGWcr5ohTBBdGnX326ewDLqw2axwS9gXDbdmZjEgAZW8gzouXQydAbHa",
  "key3": "3xnT58nbmaitvSq7DutPQXXDopBAdu916RWYvz1ripTke7B8SdwCYuRN3bft6wZgA5gQdUcyWqACwD7XYpWJ7Ufe",
  "key4": "522NajtU46HZnzVNWozVAEERTydi6obHcVEkqsjs7HXZfu6JGBm6mQSMzkSqASD54qV1VKzUPfnvkvmiJSkZYsEZ",
  "key5": "4jX4KyB8uonr5gKUwmaH2jGsYLdanpqBQNWraDdMLv5QZu1WfoGr2d9EkGEX9hk41E4wCcv2jL7wGL3GqbcPCsiF",
  "key6": "3PhXzbHfHUcrt2SR7vy2YH3RNLX2yFWCMTmUZE7Kda9Be7KuycYYS8SXjCDDnpvsbwhNQYaHakPws3evZUKpQo5L",
  "key7": "BsGuc2YXQywBXe9gtcUgELQX59dcgf1iATwLn5bNVm2vDakKJbmmaZT9CDxznJtMkej4BYLqysp3jvfJn3ECrci",
  "key8": "5EVm3NfrgaYcGg28fzqvoRwkEvJvNSnXT12gBxPwirwyj1MfjyqUXFVbXDxL3YcBq3FUBxHNrgoHqQ46GXNDvsrC",
  "key9": "3Ptbkvr63pi3rmztZ7wcUba1StsF5im5KqvLsRdLYxrLR5HdmG4vUJi7yG43Tv9YvMmYJ8npwAoBFKGoccuJXu4f",
  "key10": "2DiQBZ381FGd89Twio9tdBKH4LU854P7efvB3gYc671VQDDQ5ARTsu1D37VbzNZH87HisJYjF9PgVPZAEcuUj3a4",
  "key11": "3v8WJvt7QoQfhE6BMWC1nj9jDxy5GC7ttqEhPhNSc3q4HWopkhdSmbhMCSmfurRfW4sirtzFTm7hbZjp2MjJ5qiJ",
  "key12": "4SNk5abit8uHiP8WFEHZhMrLYJt5FAnmC7wNSfH4AH9Sa5vw18deo41pN16TcZZmbvp9MeadGxm2q2iAKn5wfE29",
  "key13": "5ruPXni4oBmJ8pWjSEzypS5MNfC7nKqLHz2Qc2FL4wpRpLyQPRrpNJj54u4bViQ3kmnFpbJ7uVdbSNWhU2WxAdKD",
  "key14": "3Z1CDRb5AnwW77vJfJ95fnNwBShKx9sziJa7rBCcrq98tFaRLmHqbBepz8nUNa1a7A8M4Q2QS2DZFE2FnJzcUfX3",
  "key15": "Un52bSmRWBYmi1M2nmqcWtJBetifMMNwJ4ZDYk7vdLkjiKG2bdfSJQkkcp8kExfY4u1tcyPG4MBeizDQJT59Ywe",
  "key16": "dMhbsJ3qqNEY2NnCrTj9ZNgypvaXD4c7CqzbBBG6WcRmL873NspXB41qjuBhfNg2bEwAF3gTJhN3SvLxHiYAxnY",
  "key17": "2gKhtBuLvtEctu31sM3QeXdSzh7bQk3jqyjtJgqxbJXN9MEb7RiWcXky8HsCu1AF23dsKEj7bZNnEEBEXxvniJfV",
  "key18": "2NbhyaCMhQPE6KY7DZYPqrNzXgdtUvW8Y9AL5WS2pys5nSxCsA9domR2iXYW4XwkudJXYUBs9Rfb7dHaTjWPvdT5",
  "key19": "5xkTRMoVrWQuuDXXptC4u4rVrHxLKugKuNwhRD2phGNFvqGnBXjBCeiMA7YDSKxtpcxYwHNDBUP64XaKvCfcncrq",
  "key20": "2HuuRVC69TwbbDk9MTmJpbQ1gR8xkMQ1f9cLzJkkV3NPUGp3XPsiE3UhRaSSoUJMTTT8Pwo6Fm57PPmfWP5FXwRo",
  "key21": "2p4ck1qmbKgSLESCjNE3UBymzafTzyxBZVcqPNe3Uc2pqTyfbSNaAtogB3aF1TVX3XrifhcBxkBeyTyNdhzrmCda",
  "key22": "37g9DXRsum7xvA1appKXKiU59t8eBjDPqCJGjTdTbBChZ9r7QJY8g1dc28nW7BdiGFt7mpPXYe2pFfU39C3XL7aa",
  "key23": "2vN1dAoAfeMTJ2gzZ2YbAo9uCyXMQFkaZ8ypahNvoQ1zPoDhhwwvxiQabjQH5tyHuh5XwRkUcBKQjGyJWz8QQfW6",
  "key24": "4i4KjNNCtbTXFPtKXvDaW6G5kJBzD3xTGMrBXx8FGzM7nMX69nmeHRdfa3MEVXQgS35WKvbSEWtbrNSaXW7SuFkt",
  "key25": "2gqUZ63iJvXi4DgMt4oYCrTLY8DCvN4LKyE64Chuu27TSd1GXQ6HJaCg5FTGnPEgapsoSE6R5sncYyQWDcdXPFHh",
  "key26": "vkXTN9yFJtBATZ22pUiVSvLBMowabhzAYM3oK7cFSCwdAyYk3HGwreYVfVJXJnw8VpYJ2auFAgMawLbayE9ZLnV",
  "key27": "2Gint6JEVCs4Q2vXU4mg8pymu9r6Hm3y6gNCjPTBCS8evktGtPP2xQVas4nQskoJea3M8ovXGkff9XftHKK9MkUV",
  "key28": "385k2BkYzSwcmQzM71bBCDbefWCvP9PzQmroLdxhmneWv2ZkWzTD6yTLdMLyRj5De6TzRBoSFap4ueyNW6kLKpQ1",
  "key29": "5QceVLdam9hjHkhQmrEh6gcKyQDC88Qaadixh7YnDw9b9t9pUDqpZqW7iJ3wyJeSohDtfWHZa5AUXnUzFt5Y5LDP",
  "key30": "3ddXNk8T53vsr4P79mmzwD67fCNyNmz9TNhKtk4UQLt8eQeUJF7m19kNpMrYHUnWUZ27uEGc46k1wa42Vq8oUoYk",
  "key31": "5HxRy42yETEAXoimXtgfrqpdq6Rv2fLnhyFKtirkceSWFMJMJgnELGVChhRtxgxynJPdHzidBmq9BMrfm8wnffnE",
  "key32": "61kmtwgGWzWPHxNF4gnMdY3QeCxYYfqvqiV6qWzWCDp9RQKQ1iB4PDJnoMBM1WtTqqXXXWzrxUCgVXVyBNq7rMWB",
  "key33": "3SoyZUmd511DH7uPTCAM9zyLQwmF7vV2GMLF7Z5zmrk6shvVMgJGBeq1m1ZbxrvBFnkLafeBGJrJCdg6CYmhWyRE",
  "key34": "4yZDQg8BiHv5qkWWTsnJM3ZXniHEhaqAT4N66QmZqV6D8JPfT6xEuzv3En9GnxVbCzE9esAKU2cqpozd1mtwRoK9"
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
