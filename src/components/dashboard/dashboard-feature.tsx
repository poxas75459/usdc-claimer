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
    "5cbMhqcydLJQS2FyH7LqQQAAmXjfqmctLmLZ5JyManCwNCubrG9H8j3Na1fhCH3rLbQPEvxppHrkA9G7K7pg1Mdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WELxrTUXSsg5STuj8FSnugQzFEE64bWX6Akm9cdB5XKK8EVjhF3wVszwhakqUeTRQt8dhLeGjvh6LFbjUGzFU6V",
  "key1": "JBSMziBCYZgGr9VrM834rcJ8PwWoYT46GR2DoV2dQhSeq7VLScRP6BEwy3wKSXHoaVxpTYJFm3Gtr8gujcFd7fe",
  "key2": "3f2z9sMRcmxkSKciFUKtsaV3efezy9WyC41ujTQesTHoxExoC6Sp1hadJEwjMz5xNfGgmmRBakoBnRqS7eRCdBan",
  "key3": "UjwT5n1MsTMtH5Ggx4KMh2u2PXvyVGpwWRkLFjex9ramGDeT71iBKgNR3fEEymh97GFgRA5ozdDNmtxouC87AnV",
  "key4": "2JzZsvbMg3ZuniPYktrRpUyTQVFpfMNpuQyhaovf3NjNspxf8kNxyj7kvdD88UtMNxr21HL597e7oMRZ5jyvJLwN",
  "key5": "4B5WFNtWzDpTyaAiJBJV7axtfDSvk7YbZZ77ubMJkznctZH9gEgdoJgtsdxxVQdAEaq7LaKD7zTM2v83DhZ8vHVB",
  "key6": "hpLoJMqNdCx4TE4TtAogLEa8YiswSDNdzeiEkugeEHxhKgEXnthJcYKVfCVLLATbPMjKqVWUXSm9bVk97AsDVAH",
  "key7": "51y9WsYWCjj9q1vWqUmjwvWvE3dSKwC5jusL3m2BJpbBvaftq3cxDXcFVSFE4AjSWTLVXRccMEL1u8qe325hBHpn",
  "key8": "4vkoRRzP6G5D8XzpHxBwd9Kcbcf2wJPLjFpqvoJ42EWaJ96bBSj1TEJmYSAgYJCCTUfmeQC6JJXMcY6Z4e89nXpP",
  "key9": "3WDbciJ1tp9ZuDQCauWEkNQ81kszX5B8nPJfm9heewVxt8wiRvK8EKHV2XGmZAKqoYWvUwtcof2XMnBMhEKtaqYT",
  "key10": "319y251NmjaeXxK5nxEoajQFbZBehpeMzKWev6zM7Rz45CLqVgZEWY8r1Fs6zGtdCsWHyT4ELAa9d56Q8k75crAk",
  "key11": "4tnCifTwef7sFHoPtV1RJF7iKg5R5tc69YGDLGaPvAzpvefKwJqmhWa3gJKUfwFe7REfpeJ8CiXofJKZpvqiRno6",
  "key12": "2KvXFw4XJ1TeLZNSyudbyPN2pHeyhPqgwr8WascPS2FES9E6yp2qUy7uu4xtrLKGEViZbbyXZNdYCdpSYFtfhqZ6",
  "key13": "2HYmiJWLw6H8tbsyKQChVh5aJhN9RsrfS6cGxcsardAQbG8VzLSYT6b6YG6wutWBD85dBKDDxfF57wgqGjNBjWJV",
  "key14": "56otiArw6DxrLL8czkfCPd1RR3i1bBqwcfuzTGC88gE7d1fG4K4subHhqpf1ZWidwmSCWyFx1B1fe4Vx4uDxahzb",
  "key15": "3TC51WJd2XE3C2nAKiNW8mX7LtLmgSZNHaZoakfJm4mxVEB39c7oQzpuY4J8jwNrytSqNtEWASNBDwRHuor6wD5i",
  "key16": "qebiq68jyLLSezbKgDQG4QX18nbKVo9JgqWgVCLgkAbFRPWvxzB7AgEZhCMs3mCKj7oG8FU6isPzmwY21Bk9h9G",
  "key17": "5HL1zZCE1BQ2zUdpAAcQA5oR7EhD1LBbEpa8vRDoJCtk4XE9CqK1iUftyTq72svxkHJy6byPHM5gqqmsikp7xxCB",
  "key18": "AmqSsZ2rmcvVfdj4GMkwnkiTLKWWFmh23TFZFEcLfoSUUURY6mwSQyqciw6uivb1sq74PTXvVmiBzeKFbY1x33w",
  "key19": "3HBwC3nVmTDU4NuXDbrSRbiMxKBDP1HuuwNSXJJfB9tudjEfX6RANznZe3YhstjzVkjhAezpYmgnxZ6JgUn3Wvm3",
  "key20": "33iLB8n1tiJ6uS6J2bNhXZ9GWzspc4Popbzwf1YQke6cTZVxh6bhr1T2XdiF9y4YxJqGQ9ncSoFQTK4ZSeV6ikjh",
  "key21": "2TUursbMZsWBpDHMfTsXRLxbi1QyvLPHtDW35qpmkEogVtfHECbnLRq22uCfX2ug2naBsCo7rybTFjawBhUN225B",
  "key22": "4Yc9LeeCWdwKfnB2UUKAsve1EEP7us5PcaKr1uiZSnLqKae9cq687SojoVM12qZ3BWZ13mu8mrzhmd1PwyHaDmV9",
  "key23": "4DPuyB8QTuPjVJrxhaYiVgSnhojUV316SntqnU1tbGisLjgRtUV1etFeZH9NT9yGbWrz3GyL4wML6nJpy3h367qa",
  "key24": "3RR2LBe2kFqyS2jADEWoQL4tyXphRyjy3bd3NBGFFQJKAE2MCFAT63N7SjxxtVruP83gPBf4MCnFPN2Woo3XtKV8",
  "key25": "4QyQBii5NimhHontEFvSv2SWrXJVLdnCTShePrUZ5VfF6U7VvafWyMzt6S71xYa6LcUZhWRBbkzXX9AzyvsThXH4"
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
