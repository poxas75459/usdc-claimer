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
    "zeGAsQRwpNEoviCCiC8zvA1wST8HdC2CCrkkGChS4eLWiHwp3RoFhL3y1s799eLn1LiHzLCrZMdXFYwH2awVxRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTAnBKT31uJRjvBcdhGCNUZbeVhgfs5GPNYeyLmGSMghWKYJDmr3mShmgokFbYro7YdyuzSXYEJr2T8LVH84d5o",
  "key1": "6L3DmMrr9ih9i75UpvbMz2cuZfcLwas6zxNdDoheR2kydCzCz9bLrPQJvSnuZWJV4p7CNTdd6siHbyHGmDTu7Q8",
  "key2": "5xLXaeBdDzus2zXrrMomTk4DMqKkZZ4yBRWTNN1A3d6mfkLtvXjevMji8xP1e2VZE2JL3Vn3S14Gp8avXMoroiKK",
  "key3": "3vBX2Vfk7oKMKD1uWHniSq5AaqojQiztvTNADkvw6pygysJdFDoNg9gh4kjSdJUGnxMkTG82qUp68AXi3SfY6Hnh",
  "key4": "4LdDLvZLkaP4cYGuDRo3vxmvZZggd8y57wy3qNAEjGN12nrbHv2XFnKjajaLYz5Jjf3QA8o8E8fRsGwezzxL3CcE",
  "key5": "KHiaKx57VaEBzTTRr4oqWbr1CTU4qzzg7CahRKNifGijssQVw3L7vzyySYCqBuQgZhaUE8u4hQ4EUdcKi9EUN9Z",
  "key6": "2VtZb2vQksePzEV8pk89KfZmtNsPwz6i7n3nQ7Nqg5WD7bxVnAaEepUpQrBPSLQBNjre3gaXMdoSh9K8VCCNnrfs",
  "key7": "38ByzxnkhY6iaeJQnvTqfMmXXiwtk5NdJxDpXYVqGR6gyPim7k2zLH6ErpQK4cJH8gvprVZv9oeR6fWetRyMvCaq",
  "key8": "46S5d7y1KFJNZFHZhmGajGgFq73ybvbQhFtkZJdYkhkMQBTeMTcgF1YQ9uhWWZriZ1JcNuaHmrCssLSJVzTnARXs",
  "key9": "Sz6eCcKCLShcYdAcCiM9iEGUWGisnmrSeH8n9QUNnzWegd5tBqLPrEVUg2unrn5m4EpWDKiNaC9FhrqEPxmDYxf",
  "key10": "3QHCSvc1xUSL8KnWK8oBE8rJqdGSUs64QgW2PkvJXD6jP6pH2MjjwxcxcaJEnjdqx7RaVKfRnyvRf2btwaeopEQw",
  "key11": "2j1oLhpR8HtPtfDxZMorQpUGfmDYQzFmgSSHNM7J2b45u3EFZuo9oBzpycHYbzLQMmRX3yYWoweeNuKEGchFBCdS",
  "key12": "2WPBdTKzqxF9AcHVE7oQdCwPgzZgQLewRoF1swicRMKqyQGRh6cT4HAfEjyjrmJ8Y4mK8cKq9W96KUb5mgvD7aax",
  "key13": "5sqrYrNFAyt32NUwMRmLMPFB9y768ihRf1NmSmU9L1ZyD1ngWUDscbiSrxqCH3gRPp1kvzBrVwGUZinH75qfvRHi",
  "key14": "2efKRKroUUcRPhPvQNNz4YUrVSuK3XocDLguenUjjWeUytNcuBVssHn58SJwMpBtXtmL83fEemeGUK5ApwRBvG7u",
  "key15": "9h5ZyU36p9TpGnbxNSpoLmPqfBRedHvz7728gW9PVK7CtxNoeqhNAft3QhFEccEG5arXWSfjTH7FtsND7fsRdY4",
  "key16": "3HGUnFJH67bb6dTgayDEfjq3fJRQiJdetHCs1wpruJCjUrkwUt2mMu656HcgeP8erR46SZetFZUbq2U46KGoKPNU",
  "key17": "3sqzzpYt3iejEeECBDCqKHeeRGq9BKzxZ7QBfDcYAFG8W3164NiB3RsofFypPEvU7NzG8FvDywqTcxABfqoxemfi",
  "key18": "4SoNZMMVY7pm2KQhw3dQGeWYxuP31Rq6SHPFBzvpDfprdeYdtHpKMp7JTPXnRj2R1euosFHmLzCaqEzQ45dgKBdy",
  "key19": "4BEnCBDVEH9SpV5JVCv41JcNuGaCup8QELktRqEKSnJYbcBfA9gxvxx5TPs998t7HUJd6T3ur2BmVkSy4WKGrYz4",
  "key20": "5vk3wo15fTu5ge47eomkkd796tgQhAgGNfNY8syMrjp2S5sgajNbqehxTye6a3i22woo9D1LqeEsdDpQ8Tmrqv5B",
  "key21": "2PXvhiarikpCZQghMRtdXkopYpiywpRnp6jHdQkmvBtrZni4ta5UZU8hB4SJaoDUk6zPFuWfCpYUGPmomfLa37Ba",
  "key22": "4rzQF7p6coWjjvFKZkQR4uMazkq7i7QdxHzEY4qySK5FcE4Kyh7SzWC9A1qiWmN9xRBxfZRZde19PrjWwNY5kNK1",
  "key23": "3EGxsqDnov71Nb4huxou1rnu28MogS2Tf3S5FzBuRGwnKeiJ1MEBGvdETeZVPBP9vD3yqWcAkMq6Bqr2StM4keRG",
  "key24": "3jw8DXuXDGxji4k8z2qsnKDGENJgdu37qGF9AW1w1ACE5YA5NsLj25wfj3Q6WpC1csKjKM2c1osdnv5r5bqqyia6",
  "key25": "4jeUQJveFrU4NudLuA2HTh43HmhuwhpCEATXhrkg4rY8bf7APWjDy5djUvwW2si6r8ccdHA2LAKF3TZXe6Ab4znf"
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
