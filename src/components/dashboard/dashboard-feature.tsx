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
    "5GRaNLhdiARnPu9ruSebEmHF99XdM8KPiKTgGyXMvjsnEwccHkMaM4H9XqaWkCywXptUNVSimfq2xVFRV9SgA7yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ek9L3J9gsBafBEFHHuP8pk12q5xtGE6aYy9tJ2LMfMMTohiTLdfTSoZJSoqNcb5KTFzDjuQ8n7tgLQTH9EG5Uh",
  "key1": "2CFJTMVAmBFcaVapQ7U7GvymiQhJdE5BJtxgZFYSQEpy2zFcwcYzbr37kGjuhJoQkTsgXmCnN8J95KS8SPUNCCT2",
  "key2": "4nadT8TutwkZQSH1H6YK3aYXn8mKX61JhV5MLwiXL9LNbdEtj1NnTbufAJTDBeu3WmaFS2RecS3beo5yaYY2Ffqr",
  "key3": "4KCb2DdGomcoHCkMkA3C2GEwdk5XXFMeFBPhkDYwkzAUq44CJaz75oaY3snjehux5ustJrmRd2LDJrEaJbchaa7b",
  "key4": "2hGKG2AbqwSpojRUnqW63CmNqw1PP4LMYVzKD22JvbYqUQ4kFv48VjiUHVhTVBus2PhLVB6XLsgiYVFVdHhoTfAt",
  "key5": "48nPhUsxvomxQ1zgRPpMwwuTNpWXpV87vfd5NJNKGA4KT3e9k47TVut7N9dWYqq2iDX6fisuqd9JQwv4gZc6EJiy",
  "key6": "Xo7idCp1H6FZkY1BTARvYC8nZzy59eorT528zfwKFKGiiAyvfYQxpxUgPbDdFHHGhtX4LGYanm5qC1hMgwgzWMD",
  "key7": "ih7s9oNVoemSXmFgx76cLeYTqwVS9zRrcUsPaNBQu6jwBMppJsch6Qe9dmvTw8fvjC1WfApF1vxo8oBg9Fn7jbh",
  "key8": "4MVA56PNiaP7gpPN8dAyPb4MNMjdZwWtCCXAHG2msdKauEDjFjRcai9F1pncL1Hzf5LfqCYx1BDSfVAg7T9Qzf2V",
  "key9": "25nXaNeR3Ypq9tV3QoLDrtwAL2K7PVQ15h9MW94phyaDYmieVzL8tgKopCJoTZKJsTk1rgR2ikZvMxe5wWJjGxZr",
  "key10": "4FnZGnbj2SvpZcsPNHJ9otWGpUi7kd9zxFN52ULoXWt1qWpMcrTctQ4tQ8J9grCrdHjC3ViSzeWvX1tT9ySRdgmY",
  "key11": "27CMV3YQfXaPB64wChZvE8veSNTzt7xdboi67MNW5jKVwJ9nsPCmuk4qHXthfpYrXbzjK1wa322QVt5wuvZznGU1",
  "key12": "3MTZk5uTRh5XHyrXwth2aMpXzQg4uPp2SALHevzFDK7R96867Z3DzVgzCxgeKnhzudc5zdxmJQXThh1skrCZqueX",
  "key13": "k6aMpqQ1GpHqdCmrXa8uLQDtg9dMndQH9fnL6PSHgFbwekRKcb6dGWYzGk7o7uE4JgPPK797PUEf7Kpky73YSNS",
  "key14": "3ic1t9JFCkRoncaMkJzR2gsc989tz2uwBbBxFL2ax4Hspdppq5rCGxoAMX4MmPe4RaoCCxtm6UwNC3RsNL1Yp7pE",
  "key15": "2oAQFu8maVMGMy4LTUo6WxmLSHjYq9zYuB5YaXmYATrkCRhFJx7NQAJu47cNYcCfPiLkNDYDH3imPvTQotMNvJEq",
  "key16": "5Ln6Do9SG9aJn6HCohpEnrunwXpJyNHy17sgVSpLrdweUz6zVY6crCmbxaBcvz1Pj7ridKk3mMdmqnDow1kopDns",
  "key17": "2eUSK4ovY1K3Rzr8E2WhjbvosHfAxuikvdwvxkacyqtmpxqhbGcKDwJAjyyJExR26GVcvAyJ9uGzVfi34fysfoSv",
  "key18": "4CgJfs6QxaTLDsf1f7Tqb4GVRS7jLBWMzbdfauPQvmhyoiQv3ygK3foMU3aiGzyh4SMM7nd4Vyb74aLdwB9GsvhL",
  "key19": "Xx5zMLH1jroGHLJG2JnC7jNL9bZaiu3WBxgwzHjntxfS3YYXZcoQiFSv7fJxv4RZpcQ7AjYSzZdhQnERWcNKw6o",
  "key20": "2Wh5FUDzVcpAwUDSy8JvheZaNhtbshJBbzGWUNSZMedVT3ZNDizgB3sTgHuc5qu2An6bnqA71PPkPp7STy9Wc8ER",
  "key21": "4qKga1fceBbZFFCrZKKx6Tr8dF7TJ4ZchXwVmSC5FKsySiy5h4wgadU9DUHa5evFfoUWhPTBwt2bTP2852CYGMnU",
  "key22": "3YkiHRxgwtqsAGqxY6kY4HdoNSa6atSkYgVscnNsTDVSFMWru1AUmonqj6MG6cFvhzfX3V7nEHCzNEzCT3Bdb8FQ",
  "key23": "4jE1NS1zxBuxHszmQhi2a6ZiDVfmkCcgAk6yKCgiwQwiy78tABq7uK84hig8qUvEwyzVS6X19MNjcCkE6AyV18GW",
  "key24": "52uLoCDq2r4oru1gH6WF9Wcphic6ytsJYZ4aWyYQqsPFr7WQfYejWD8J4KJa5Z43zsaYxVTQY98H9FVU3iwcqbCY",
  "key25": "DSLhHdCY7gwuzPoZdp3ZRxV32HihsTFDaBquyF4pAbeT2Fz5Q4822GdK8JbYYJU9VrfheXuShLhVJWYAQJiyhNf",
  "key26": "JUBok3JBUGwMw6tC1W3T8Ht95ShbuEUM7AKQMiJvGPudtMgsLZaQjkZ8PJiVDJ938robvxqgB28QvdhtEmNZZeM",
  "key27": "JPyyb686fL163evL12uc41gmsqrEMnVeZeMyFK2C7Va5tsLjKoAG3zXspZL4rL89pjSYay3hNFf6RM9Ai8FoWpy",
  "key28": "3z2GunuXZrtfgQXnonrBdXMdx7A5PdtoyHPhNHMhYnZ4nJFrwCtgkkUdzNzBu7vejaGxVbmFu4nxHRgoFjWr2aUP",
  "key29": "5dkk5FiTZeGtZogvqBz71SSL6u937rgdy18RbdLaYTobkoS2piQBeccHCZFDFZJWDN2JvQn1hFH2q6GPzuYkCJfT",
  "key30": "2UczCYVPcP2v4qGZJfR7Jm1NURfRRhAPkTvsUVbQBiRUXSrsdM8VP2F1bCtFCMCYdrtQPR1DY3Lp3zS2gtSg1Uoz",
  "key31": "5hE2w1NNWoBiZEDhQF3HxHsWNBaEGg6QcF6TxCbB9rWiyRBtNG89hXND5SPiuWm2gqqsKenCgP7BM2MTpsjwWq5r",
  "key32": "5887F9nmYXurefNnPiNoBwCSXiVZLH9XfaH6taQUMGbr1GfXjH8RiK1UKRKeGLgwPW1LEqEwoTwuy413vq8SGQiV",
  "key33": "3RpTjhu2wPFCMzWVLZGzXdNX92Wx5cHiFpH9FdE9CRSKZ4TrTHAQgkgYL7bbD7gpiCh6p5MPyrmeiL9DZoSCRGCx"
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
