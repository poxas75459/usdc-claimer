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
    "3itRFJm1Pmwhj14Wtjx1QVnikoBMxNWkDMGmbjh7AdX2rgzMH42xcT4tespVGSoxuEkRmyC12JgFiSSsqepykH5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARv8vwKHTnyJ7UwtnyUg14ddQvqfuEQgCmT632vLXZyKxgEA7hLad5twMbtuZpEcT1DumUh6HZc7DbmtJFLsr9e",
  "key1": "dSXs7QxtRrnKwDnd95VpqN4xgAAYa7joosrxTg9yE83v1UHTgzp5kRXVMDUmjSXXPGWUrNySL4oaSPutUVUyAgs",
  "key2": "5TYJ7JMdgUhL6F6LoDwWSy1uDXu8mV9ZdbE752RJAJJSQeBvqQGYF824W6ceSxMHVENJnQ8CLHcBSvj3crRwTYzp",
  "key3": "4U1QJGNpc2aupKUVcmB2yZSQYrcJfa9MxfznfBWy7vNeS2D7EWqk57gQzsqn5rrNKgChwnTb6pWV6MYisfyudDg4",
  "key4": "3VYuWCmMRdVMVUmjHyjuv2votLjivtArVtZsF66d1VMuH6nXDNhs7oBNvqyaWDE5feEeHsK8nqiNYMv2UKg84WdZ",
  "key5": "42fgAU5H7ePVAb1qyTj4FafNowBJD2y8EqGnhALfFx32qRiX5pxZobngM8quLYf32WrZjiehMfWEDegavw9B2N8x",
  "key6": "5rSbGst1PgpVRpY7u9xmS1YSx58K8P3GRmfpgwtn5d8GpHEndaSJywQJV6omC3t8Fhqzpt6kEKxbnsogM7PeyKxz",
  "key7": "3DxKXCE3DbupuSyXMPegcbtUXL3C5RUXt2WonA6DmwhtxfWX9ATQRapgeYK4tdzaaqddSbGvTpGzLpq6BLTvEKwG",
  "key8": "5aCZY9GELHPTz3BbH5ECLBDsiCrTpRkeEPyBWr7f6JtrWkR6qkY5iWh8zhqutu7e4ZVpGu5c1W6zvGJheQRuLpKM",
  "key9": "2nu1niEvBd4DMDw2fCkZo9MaDZRK5fR4AiVvRSSPhfYtopPrfeWpR8EDd2HrBnMwFGJEWdqr8s7jhaLCq7GaBa2A",
  "key10": "57S4ZoLdKRS1HFXHkvD81zAK1jnehKwxP1W8eTrRNJuQDFwM6qw6GMAoFqugxALXaqdMp8WY5PvBnADp9BqPv8bc",
  "key11": "43ZgwwX9pgqjKBGzWxnRVCwWA9UcL1TsigxjVhcWqQZyWdYAX3GPCiY4KTfWJkC6tRE9zphQXcnDrBJ5e975DB7a",
  "key12": "322d3uMVv81W75TLmKpLgZDvFKarcmPwNhQwKbeT8QZTVDT6drcJbSpU5SuWoTPsm8gswitLCwcM4QEovVkJz7n2",
  "key13": "32tcdWbzajSrSeQcniHiCfv1Fmd4bamzJKJhPJRxibcMq8CtisNiFXEadwUs9E2jFxouMQmuqSFE7782NDFuziQ6",
  "key14": "2WHvrKQ8YDGEgCuiJaimbQfHAAXxHBHs8x3mFBBByPReZ9XpbkJbbWnEdrfdbh9Q8pPkBbXomuvDX9jrpM16R5WH",
  "key15": "3wmt8wwPxXuL2XNfuLiEFecCmfLxahCtuP5xMxCq9ZYuLqYjRWhGWX53uX8kSo2Wxx8GJgkYzGpVjV1tzDE1e5Zz",
  "key16": "2DsoGrraj5JW8HczGVoYsdaRVP9cV5uGCpRYAEzsWRRpzzjx9iLiko8Maww7yiVEzFDssLBAXWywkgmBfvNtNybA",
  "key17": "UHmGfCDcYvQ3gotvUm9oYGweyfeN7JywQRwR8tCAwW4kXtnqWVH4UgkMTJ4dkHUyjbnesoNiT1eVZ1VZHEQpTr7",
  "key18": "5dZtoFoTyYAQZgrrHAA3kaQLHpU7nqB2UuGrWre9PrveapmRmhRPo8mRg3X18Dd2KDNq2U3zEMMycdGULCsFzXL2",
  "key19": "3fZcxurRPciGDwTveHdBwKWTMn2uMKWn4MBV2m1a9hdkZSqLLwJxwefpWGxHKvcmdHbCBsm9JCShoSeTi6NVa3nr",
  "key20": "56hGAxE8P3bG914XJSfjTHuK75NxjF4W2gaah2AmEiNgHEEL5xTkadqMX1B5WtuFtSpxgdeAzfLqf919ory642zk",
  "key21": "2Yj3k1ZdZTUkuxvxyb2ps3Kbn4ZZa6f6HYJRuQEpAvwcGa9WvnccbkyiTFq1PSfz2VtQ5zTvycnFQDQaQLecd2Tx",
  "key22": "3eHBDkS3paAJUi4SW7esp2QV8HU5ighgVdswBBRjwYFvPvhZKc1xeATGGg3FdKS8dKJcE1QSmdb5i3XsDJLFaJ7w",
  "key23": "4PsY7LXbS6JoqXKMuwAGWzEDCQxKoVGYVGxkifWA9rQJg4uQZ45ZHH1HtnxaLYXEV2zjMm5uMoQGVTvJ1iRGUr7N",
  "key24": "36kzXnx8vRiVQVJMykdMzAfCi3dksFvrqF8ovT7R2K1ERCJvDAsR2aBKmxrX7EyvzPhgEhUm4Hb6Mt3Hry7QeK6t",
  "key25": "grbTw5tHnX6iK9RewvDFX972H28noBasVixvR4oyjwax6Cg7wGqx5QFWAMqAs93SSFF1ERd7eLLy2RRfehjwqxn",
  "key26": "2fvaMLkRLQCnebN8YZfJ2AXkeMB2VekLsgZETFhNpjVfYX4WbAGcg9KuCEU39ctZ9EbxZGtgytbdkBp4hK1vor4f",
  "key27": "YhKQ9WPnhWaPKBP7NhKrQB89XFRfTFVhTQLVG595HTCnYgRNeM4uHFieXXe63J1Cm94QuvF8DXYaHSQ6v4HU4ue",
  "key28": "46t5cM9oSMBuEJThtXCCghoBCHmBZ64Vq8pj1tMRmiXA7dZaQoazrgycBRWpqUiqp8nW2eanUTZmR1RcCVz5pqwb",
  "key29": "3p347yAmCVWKrZkzeR3c6rxmmfkCUnSMFSdEBGgnkkj73Z8TVxry1fxCeBaj68KVE6LeMUsH3wJdzi6SC94BzPiw",
  "key30": "47PHY7YZxUxtcziwd2XzAYW79K3dxkwVopS8xozwcFMy3XSb5eXnon9dGPBsyjcEkuxCPYXbRNG9DiLiULBDDmVy",
  "key31": "3ZfvpxiZX8r7w6pTdhWtyLVeoz4gJtjPhBzn2F2zMeMRZRAzRTTzqkkjvkztwZDRvDUMNZyQU2qnYbZS2tEb53Fu",
  "key32": "3436Pjb8e8xnKGbg5Tau8GiJuNR9awWWK14Vg6Nu1t6U4obayi2JiFxCtiY3yj6FhVHfsLkRCamNS6AGfzBNFAP2",
  "key33": "ZFBgUGpap6VMq1B4rVHNrvkCMoP6oxHz8uun9Y4BkwXv5kwS4qHXMzxDFoQM7t3tF8t5rizADoGycEY6frLpRrd",
  "key34": "UZFGJFEj3bJEwVuwRyjU5UZkHjkyikKaLJCt7wPVheYMinESjHTBCArpgXfKkoXQdBNaBGyumq7VkWAsn8rRV1a",
  "key35": "3sJagwAbUeroaWYMZWTnu6gdfsVap6LGe5oBZziVuMNkxedQXvmgokN1Xhk2uTmqeWSgUn6hSqJEXx2Kju3ecyaJ",
  "key36": "5b4cGHWURCfaaLCUwhUnYfe9TfhHXJjhEA82k9FcPvu3z6MzRuvpFyPGhLAr3ymRP4iUqUfzApHaCVXZnWB4rzgB",
  "key37": "wTGuHhnNwDo9SgmRhCBGxvjbptrdzQZCqBPLtTVgksMPKXSY6yLFhaoyZ4BCw2ieSezVZu3BtbscGbFuostNCt5"
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
