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
    "2qNR79yY8v7ywoRboKGAZ5fUWrPTyD4X7Dun6HWGxwGukwfALg83cB1jjEEW8eRLcyA3Ce2T5kRQRQcS2wQGjwYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZoU4BmzKb9L4wvDYQWdck4jYaLmXij2TrHoHdK3t3vTDwLHHgHssBMBXEDhJrFjDeH9hKNBYWqFomGMCCMe55iX",
  "key1": "4QrSLzJMmrBhEQzPxrBBC1JVqb6YHUTb9gNzQPtVcv7CsV3UtiryzxksWHaeHGUwqnM9EZvjEqJ3zdABFfneQy39",
  "key2": "uyJhDVHYYqXyZukNHzM6fkLGFbHghW84PZo5gfVtJqEpxzzLVY2hnB3MRJ88KpVN52EZi1h84oyPh3A471SxL8M",
  "key3": "5Ry3rUjb9L93bXZQtXQjAFBf3JMKM9vZ3KZH5FB5iH3xoDz4FpkTkYB5mGNQ7YDkK3JDemuPPfT6Ypn3yNjV1Q1A",
  "key4": "49gozQLSGdDeRpZr17uFpZ2fRsJpJ3uBoZEBwvBDaUrozW3jXgjHt4TgzwwWDo1zGm6KcjC2pEFFSL9bFA3rtLBb",
  "key5": "5VmbyBaM1rbRVhNdTJsV1nfr15Qhf33beZ2Y987iv4paaSha8ensQEriZRztFNRHdXEFQoa8n2AMJySJJ1Fw7Ki1",
  "key6": "5toUiaJbjHfKwRpT1ESRuh7Hw5uRT9RZEwpGQRLwHN61rLpiR7ymDYmQMmvgkVZET3j6PoVCAcc2Gzwj4NYMueSv",
  "key7": "M8Z8VzZKcuqfM5KRnY9v9TMsUNWDbqzQW9Y4jHc2RRvuvzJ1rksCyKYKX26GFUfJgvAttXL9f27LZ7gYoPz6yce",
  "key8": "4mVRQn7xX4R2gKvFiMmmkCMMQxgLaDC8YQwFqG3AKKeEL7HhoMGBVTtMDrF34UBWdgPagYKbfBPqY8YspCYxiEuq",
  "key9": "4NhBqq1aYKiCnfHdsvdM6zE1cfTy4etbtKvLgZ8F6AfSNTaFpN6ZvbsP8gixHZbtpzxizTLkBddt4ZVKUhTaRkw8",
  "key10": "2cs1g9A7cf2jQgMo5a195yrfVTGqCBMZ4TPjiqqSu7XRnE1D3AyGdgbtVUyqgdqmRui51oFGp83X4MCdSfC4EKGo",
  "key11": "62sMBoic3SGcgyh9Yk32AVzmPK6xiYN3NY4XiSvubuipjkApQz4hfNTX1cBDEwbxGv4t8AzcRkNwBAVxAafZDsmp",
  "key12": "5ofp71DrP9hQxiPY5apoizij2S1kuewvQrU4HZjRJmBkiVgwXXaCeYR1QHDLNcLTy9CdeMz7wbDT1E5V7LiacbX3",
  "key13": "4TBD88PKo92NH2MGLPT5wYRNF1JPNA4HgKRhm4SE22HTmd8eK5Ux7WsYkYHSUjXN76D2zpMGYVYTQQyN85dFy591",
  "key14": "31Wc5c4bBoVheWg7KKQa4Gyz21Ada1LcfeNCD5qN7XhD9DPGBsEhs8U4FqRJpX1uqC4bkr1iS2EYWaefEDheR6DN",
  "key15": "3vCpvGNEfFQvSnGLjVGMzdJzR2qB1mAG9xoydj43vt58y4DF9zqFUzpcwCWpmhZc53zo6Vrip8LeBw8xEn2GTmzA",
  "key16": "2wjAgCLuwddeSah65kacndvgNfSBGEfyLgAxT8LKRM1nNTENFv35s5hCNw4PyqZDDC48RJJmWvHAehAKJWKx1pLy",
  "key17": "4k1S1BM4N1od8oxhdfPujEXR6Mv4kwZwzSg9YWjBm3Y493bbF2yM3VtKsQf9njNoP3cDiMVmsufLHaMx8QhwttQf",
  "key18": "3USgtrzUR1qKU7tB2Do2ytQ2UnjSwpmAKftiHhSrQaHuqMf4M9NG78N7jK85vKYxe3YAYaF8FKWMkcM7Gcvjcem1",
  "key19": "5pfyQvWi8ZyZr1TD77nMpt7u7dtC7NTwzLUtt9VYKkbGEZMddhcHwhJJE53cdzDU42ozEhAyZcfkGiPDQR9aQ8z",
  "key20": "5qrp9aer99zhdsLDVtpbwAY9sZLeJCiAM2iRJnzFVhByqkMjEY8CU2B8YPcHSYZZ7Cfmj7dbEiH4pf3gDKC2bsTp",
  "key21": "4wRBVCT1bv8qFcvf5gYNJDiD1wBqd2u2jBsqmECMezvATzyKYhHKuz9zFyLGS2VmhVTQiBwsn3v9DpV2yeYjdGq4",
  "key22": "2n8U4Nb5SkwRC257b2i2PiFrmLjvfLN84GNnsAbBTcGTWD9JrpVDufQZXUuSQcT5Be8p9qBWiAdHisKRfpatgVUk",
  "key23": "4nSTqrjdD1FqEBLSNqQdaQdijKabGEvrnUuQxZRTJk7maDPC6n1rXKdmnsDrdkqRbPKLqTF5pSD7azGGaHXLPUsv",
  "key24": "4fpb6JTRMfWDdnQFGmfMdfGZ7JDVPmMEcBx2Q3aw9zm4gbW8VJBnGXT8GBvFr5ZVzRSCzJZunDWb3Gzt8gNAZexg",
  "key25": "2Z6pt9psADsgrZH8EaipqMyXfTnFUGcXe4uZrfKrVfqf985UMkEVj8WX6Cejx6v2QL6teDf7TuUSP38tUNwheLpa",
  "key26": "TBrjVH7yE2i7XF81CTdktoDSJThbraPHtSoy8iTEC4qusaypFCpgqb8NtaTtB6DrfxKHM9jeNQFbSVvjVwmF2eb",
  "key27": "5vdNV3BxS9LpWmppwqNqxFekSDai8xvXKhrgGv9EWcXhZEQDEwEycM5uKqPQVWStvGQ6uxaJx5HRko2dwyn6f26a",
  "key28": "3VPP2E77KxdwYzf7X6KLBo2eQoS352ZSC277xuRRJhkHND2YQa5DyGWKuN5m3QjoQXNe9PEeU1BMiQ1zvB9dwDRt",
  "key29": "5LNAsEJ17rTk2HzWSBznyjB89V2QSvZztJ6dStkqt9dztFKyWgAwcAMNk1Sr2TueLGe6pfAnN5kNEcJcM9PQZPfA",
  "key30": "5xLTaEkU2xL4pQSHpmBLBZWtAsG355GWKER3zsnkHFwgptLEDZfthmGBWx94YpH2qbmQipzCTZjiURxbL3SXXsDS",
  "key31": "2vWvfgtnUt6kRmjveWzs1f3SU2emfahxfQzbVTb5wMQs68sXUCQLYx26sDgsCYwCMwipapXxLEwfC3eHdSqv2NBe",
  "key32": "2tpv3tfmMknrkfQiAudVLL3qngfimNf39Hf7Dsuvg9wNrmdZtfZZQVWPXLpzjrWpzmQkBwujmBqrpRw8h2obp92g",
  "key33": "4UZXxz9xZL35szn9QrELBVCL6Ef6EshdWuhaQAWVcPKyGyVgFQwEd3EAUCnWAyca9DwAaCs8GrVUTSgLEoxqfMtx",
  "key34": "2t2pcXZ47XzWh3j2Q1vep8BACFhV3n639EhcoHNdKDQVvpcVw4y8VgdSS5AHu3HSkR1grr3MdTyq1gsnH6ofq2tQ",
  "key35": "D7v1c12zqgYiLVyuUdU6neyq6NjTgGg2hoMoJmG15UKa6WepRk5e58PgCm5McqiJ79fugwAF2DyR1wNHCfnQBwY",
  "key36": "5GS3CwmeRKKc1twfvAgLoSwg6VTvsPEaHz8szw4RYc5WSvKaTsg5S7WMCYYoDb24VNkqbGvEJiLroufpgW7GcASf",
  "key37": "5GDwqdLqpAemocojLZcb9xaMkXyrTZv49JF4HqYVibfazunr8kU1pHyzCs6RVVm8iEqL7ampEFtBrDSnQgVwosSw",
  "key38": "5a29uh3m6cve4DexvhaXxXK7RZUN2n8KCJt8D65sqCA28pCA62gUjVA28qKez6yoBa5AZwoNGxtZqmK7EwS71onE",
  "key39": "46YUhZ8HEhrG6NUpoT31g8p6o29uHsWK5MKM9pTBJtYJE8ew92oxvBqiDBCr6EJDc2qCh1yWMehmwt9sjfwRBtDE",
  "key40": "2Ao7fSZfiQfq9JUWvABWY8KA6WMuRukEDeJ458MDCiwA5bdmwUjnBcSS38dcEDFJr9WHhWzLgPqEHcbHmYbgBmmy",
  "key41": "4Gx9oQ4X3jAFzDcGidpZ7th3fkZ5wPE9TGUtF8nH4mNRL2o5SthAjNaxbVqmZULZa8RHGcqwSZtgmF8A4AUXAmHm",
  "key42": "47n6hPF6X5Ze2XHr8fCBmYyj7D7UuQUDTTnGuLopBRzPHQrGWSwb2N7nFphfTnYF39Kz7xmU3pvjrg6oAFCjX1os",
  "key43": "4j8R3AmjGjKhexd9cVCeW9tyxeoubVhYiAiBU1EEpF1EtGf1UpFJBh8KkYEL94CQrmWX8RpuxJCtaqwrG4qJr9pa",
  "key44": "4qJZFHQjs8x6845c6L7kJGMuFqfGijrZUTwtMJEmVrgUis2DM631ZdEbw4T8AKuvaRne7k5xAikgP6ip43mGs88n",
  "key45": "4yvQCg9KZDL1455C37usDkgADX1VgJvsYVkeQyC5ZwZCj15mauzEbMZKMs1m7ay28neWdcTN1jK96jTFKLHGgaGC"
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
