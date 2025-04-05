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
    "9Ak9ySp2PsfXhdcpbVMAQESQoZZNb263NtywUTjB39APsAh5x3Rw81VYNPHAVvgE91AeqUemRsL1bgpGRawrQ74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvGbk4J17F4fdmH4K4i97817L7SLEgri4FsYMZS2qorwAu14TJcM6EP3hJ8msTEaDppsc6xmXfiVgJxCsx1QWZZ",
  "key1": "YqLQzS8T1mHY1u9mCpoUUrikquMzUmcunWvzWJ6KwgZi7HcJSAdpTUkZCqGe6aqC3qNEqFa2oMgxmzFBRjTa4rd",
  "key2": "2bdhwXgLk3oERiEykRoNrMs1gqEv2EYbUaDiSudVqsPVPeZqf7TvurqYLVY941aXngMwvwZMPGbTPD3SFNKba127",
  "key3": "5TPq4ikKCQBSfTMNGEBvdrKZL1m9WbPqAQYT4vXqnwZNsqxgwk2JjGwDbGkWjyvHsyfEsfEc3uiyhD3xHRRyn2BU",
  "key4": "5PFcACoBgS8saNZj1bdobRKKmmjzefpBqqtpYBNZk4p9kH3qr5bDZMABDcYu8gXKnxCqfcLmsSx9F9oTtKLxmw4g",
  "key5": "35TTB5x1weTQnzZpNVKXbe6Ta3LAVstTw9pAmZ4BoRvqgoW81hLkLFPPLNfcMjbXgQaGF2k3D5MDBjsYoQH2HDbW",
  "key6": "3vTiQQ4tqqz9j6crGfg8C42quagC9GNPhHYyEJ3C9qw6zCXs2RWe4b5WUTmzGyC5q8NTp4DLV8b69DKdi1PqTgmJ",
  "key7": "2pZGcRwbn4sFBZspR6R95qREz88BiJUteMwP3jwtvWFb8YH6RCTDULh4hJeRhGu76q3btDwtPcWEvuArRx2tUuJT",
  "key8": "4A9gMsDhxssZzN6cQL1da2ueNQNx3SxmAadKto5nTVdtJyouxNf8GL5Zkt6GzQK8opRpUf6GozhPJofUen7tqW5H",
  "key9": "3RnXs29JAvdFdvtoLWh9TR9EiwwTyvhZW6FvTW9eHYZ5wGRiFd9d9kHLRp8GW5NcAukJL5QpoiU2E2S6SYEP3opj",
  "key10": "1272h48W4GBwaZ9FuiaGTmPuHwBWTSZJEt57JW4xgVwv8KWETKiVj4j53GHkfCzBcRaxdcPEhBHwkGgxaMvSqdcR",
  "key11": "4AdVzLAChFSEoNnwnX1fXxZqXit2iSLdxuEsmsdy5Y696LUQdDbmxAvqfjuxdMZYXefPukitX6G9WXRUMQLRJLoK",
  "key12": "4iqEahA5JxrMbvryY5WRApMjmurfSjhkTrbNXpMX3wZuvuestwtJsivzfXJXeTpo8ivdzYxWqyuEQXVfsq5tpmdN",
  "key13": "36auHRJ9za7DbEFV8ktDjiDjhf3auSih69V9WUcirpAz7b9RP9xEQvUjfPNpjtjWgNbmuF1W5tpCTPNLxYGf2Nrf",
  "key14": "4TbxbpzxnLBWKbKNK6M4UAQ1Z3EYoyajLokdsJ39PF4gRkWm5sqr9ahcnp23urjyaJKQct9ai3TrXnfR37VenZUD",
  "key15": "2qKw4AXAiTnSLdDKgDETgiM29faHq9kGmHRWiBeQWXEMVsoGzgW287dZC624bQftzjcSTz5kTvK82vZNK1UCT6dJ",
  "key16": "65tXv1A42SPwk4rXork9eugq7d6XydJCi56GbfNHr1f2KyJUwG8R7B34zQzxAREbRezZdRLJQ8YSexu9U3EejaFn",
  "key17": "3x6vGWVevTh6akuFxGCiLHEHc6VS7eAtM9D82tGKUwjsfxmLD96EMvXcRiuqdTJ3Pb9Y1xzLsKLV2TGrA7xkvj6x",
  "key18": "2Kf4zr2LCkSxdx75NFSpCVfUGGGYtwqX2vPLHQmRgWyo5TJt9G2e8rncoG1UaZ89omJpmkBsoyfaJu5cPgo7i4q4",
  "key19": "5M2Bs79NHksYcXwpgSR9HJXW6ZTZFE2rLHo72nqDJyWouew2KyRGiDaCm1CLFE4pqiyNCoCnaNGG699R5dV8k4YJ",
  "key20": "27UQEYqT9BJTfJNjgfXACmm6VKmc2krb9Z1yCvnF2QnFpmoMzBJgMZUKSocRvs4Kib5GLW5JzeH5tGvMdYsZRQha",
  "key21": "4pGXzqdZP17zNESptb1tiJFo4HwYZFnTo4kPcNQ5LfhW4SR9WEexnqnp5foWd5Yzb77A46zgHULq6UGR8Z9wwPfg",
  "key22": "2qxVLVsk6AcoMLSNKYiSRj1HgP2jHj263SRmRaQgw7b9C5fhubXszCQUpfXUWCTrUUGQc2zpZSfsc1kn45ADEnEE",
  "key23": "4jv9MMaTpVem4GgWCTkWf9ozKbEd9yPkbgHXE9ofQdASWAAMbfMazqozoKK2yDT49jZKbfZdLv8Qeb1zje2D4Tdq",
  "key24": "CGqQGuL7VcGuiMFUzd6UocGXnkB84Gy24BPdcJLRmSqpVaNTNrmKD2jumiNqpfZNLc6z4ongTtujaDHstT347Bj",
  "key25": "3QkcpFCbx4GC2PWfYXuzEsyph8zu7EBzAXh649u52vEgyfMMLz8Wz9RYVZQQbDXHYueMVKd69HcAzcMRpno3bXZy"
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
