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
    "mHmdT27Yor3MMsaUvrQgjKbqS8oGKLd9umhAgXZnGtb7byFdakkExEjtZMN5z5dUjuEVNkgNfcHkAriJQoj5Q8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NC1b5at1HH1zYTbxhWYKoD4ZEV1v4LTwAThZHoY2mzkcTSZZ7T6nycQrCh2RpRDfArGLAT4LCETwMa47B7HFrKE",
  "key1": "571ct7kBj6EaR8BF4f7QzRKFt6miyc5ubekHoj7C7gkrNvHvcyqMMdzWLiDQaMZuQhzwRdMspAJ1Tf5ZVfs4cm6P",
  "key2": "4MCa8hXmYYPcG13drmnHH8qZP21ES25VUathgXa6qenV3E83cm9PwoTroxmWCwZH2iSx2gvfqLXroxAh5sfcRYLv",
  "key3": "2aBPPGHpMcKPGk3meBCLiASbgW7N36jKoRFYYas3oMQm6n5WDcUDEGqsuSt8pc1g6rfw5SxdQyB8RneeMz77CMEd",
  "key4": "5f8718EgnNmhrrQd7fJTBzaLuQH5hGWnn6LrMrBTGZiwKQo3KHnDCxgV37k8c3fceHnfbGvBdT4LxY6WZWGJvgDW",
  "key5": "3cc47sf3swFkjNWWHXRadGJNx4Ye9VnVB9kFGZ6BM8WsCQExW9AgAtrtLJtS1y8mGXpehzrFnErnnTZLLEePJay3",
  "key6": "4G4Czrp6rY1ULf99fuS8eLAeW34tDX4Yxo8gmLdUVsdbGFZhbVNVKwghq9ZZUuNq4Rt78JtirvzzVW18TZsntREN",
  "key7": "62CmQBJYqobFxMU3HjNbYk6HYJG3mnqLR1VcosUB7MyA8Vd6yrS8VRC1ajxWWc3HV3eW6gog3dR8eLyTAHFYHKp4",
  "key8": "35kTMnJAD4M6smzZP4izo5gGePMWfE12B9RfhC1s2jnFvqXdDgTwUQqpEKXkkUzea2NDXn6oqaywYs3iZTRenq4j",
  "key9": "4uxUEcCK7P2xM9VffgDJ4RgFFopFnjLE2wu9vu8RUTF8PxsBJDoFi3g3kcYWJD1DoHBHhbPAjTqSiL189s2RxLY",
  "key10": "2h9WR5bLbz6j22JcjGoVjyLgh9pyY34nB4deARxRQZ8pDAkqRyxDcZ8KkCCcCCLeUkhwukwr6SxMtyZRjtDsr8Er",
  "key11": "oagCQ8KpdAvbzFpqXhpB56kwbTUbYGkqED8J9XndkZebsVbMk2yDdNSuTfTVUpAPH3TNo5WpPgH7s7B1bUxp6X3",
  "key12": "2fD5DQ1PDNiW9Eemjqa5KM7zYAK3htKaMKcQWWzbmuxVay15Ucwur1K8J4iLXFU7iyXebFsq3MkLnDa32ax8MQcZ",
  "key13": "21SKoUbwmth7o4tQxE6imxmRQWHS9YZk4YihxhowbypFqBNbcMM4yBJZnNR4isBdBwx9N9inUM4woLL5LvpHMd4M",
  "key14": "3NFASv7x3XVwjMadgwp9qeU9XTw3aNUXdXoYDvkCHre6Ye39B9ARhGJAwCRtsQoo7KyZKHetHsmhF6VFVjGizJik",
  "key15": "2TFJ9ZQiFscBxyHVJgTrRBCZxGbXD66GQ7aj5YXe86RdNS2ncZAombfETFPJwvGCrGsFKZm5xYM62haaMhq5vyg8",
  "key16": "2zRiiiVkuAL9zkLy6pN6iZ64BGgFejdVBtswLnx1vLFyomSLpaEnope2sdoWbhTfdByzVCxYrvJ8LJnKhsVCUARv",
  "key17": "45XQRoXHbzC8Pz4tEdtxvaeYVcuDScDpRYJAsQ5E3WHj6bpr2r8F3W35VAT4utQq8GXXtzdAQWoru4BTJNUrPwLd",
  "key18": "2RvP8zRLcnR91D2CJfTcGMQSMkCmD8gxXyg43uWBPX2mPfgFdzm6s1NpmipaUetHzvzG23g36D1CZcJu4hHZV5K2",
  "key19": "jRqAqjqZAHTJCcLFa2Br5C9Zx8ui34v9yA3XNb1yXtzfAFXYcWfnTjDDkzDWTEmPZ89E4b7JcchT3XMCQUtRNHX",
  "key20": "5QbQYj6TnxUscz863U38Md4kKjhdUuVggWcEY8xE7X3HsamV2oQmkdRT9WxEApQY3M9QmWNFzFddaDbhV873oTz6",
  "key21": "apnrhngc6YmFYHpqbn3diL2FVXTfMaZ84PHUdzHU62eLjP4xB8WrmyeLgTgjVqFD7Wed6YVZTdqoCM7KZ5T2QZz",
  "key22": "Se32VjDr2N2re8EKEqwu6mMmfrmSiM575hRJ8tLZ9iMcX6KMuALP6yFvf2g2V9qzatSMrw9gF3S3dCeAYnLHj37",
  "key23": "xs2qxTWbVvkphC9QZwqNoGd2FChNWqoizrUZiFKKkjkh814DcNXN6uhaiKCVQRVck4bqrYqA7c2vZMobateyqL8",
  "key24": "2zT9DAQXUUBhrfti4RvpYFM1SuASDi4PtF2het4wbsEjVLdA8rwRvKcMbcdjFzY2t3ZmabqCTQfc5AZdMZTZNpSb",
  "key25": "5gtnM3niQWGrEUEYMhiSbQdaairwjxUTTGrDvHHeuauxYLcAkkpJXPhW1EYvJhUh6fhpV5z5tbRJHC7KjMVRiVHt",
  "key26": "2EzUeQiAdyoYeASZXFCiDXZ2gFh4WS6Fjr275oBTRPi1YDABWczo6WHYNPja43JL7mtA5FBFTeEEttVQTKuzk9Zf",
  "key27": "ZtVJeLoq2DcA8BdsDQhbMVn9b6eWoPM4QQDxrkNGquiDRwy46zRuy4ZWZuDrkeFXtNSbbZbaxmydLMxCrnkcLo9",
  "key28": "4Q15KtmSKK9GEhwzqfm3nJYbiTNPkv7U38yqje5Z6YTA19gNiWvivkvJF9N1uUMA9kUGXHCypcc14jhnqGgpVQVr",
  "key29": "2pPYoNN3oZdXbUK8oh7f65h4RvhfS3MfLQQYtBCCuvBcdno7cY4AYdbeavZ8ivE3BfiD79iAS4WPkTZh3kq9bxay",
  "key30": "4PC8mDFrhhhE78Qxu8kwDuJVgj9CNcCakZioxyd29iLV9ieyxxRuJhJz4Suyzz4wbSN2XmmkMdxLYVdmSmUzwcM2",
  "key31": "5WV7dXXuEBN679XXjKhcjh4VJkhtkP86j2h7wf5cdsuTW847YFNvuYrvYh5d6tfHJdszaf8KppwQqHgKaYfgqWJ1",
  "key32": "4z5r97jbkGCNGVt2dqTT5AvR4ys4vGcgrwDkUtGvKDkSs4g3EnQnVW4GUtGa4vMqSEd5q1Qwk8KXFqVHUdd8s4S1",
  "key33": "5vAgbybWrRhWBHWaPGQvZq7oUTtke7PSmV7Rhx6iQo4A6dE8BkxeNMFTGyXs1JYrS9K2nTUcj2eQVhazEj5Wo9Se"
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
