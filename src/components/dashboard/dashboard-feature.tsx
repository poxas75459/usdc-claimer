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
    "4wyY7zpLWAtAZYW1nYEvvshUDaozGMTuSCXZVrAysK9fzntJFcR7a5LkwXoEj9szzgWV4HTwxtYz4dAG7hWjSPBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9qYweXFQwi3dmTiJf7xAwzcB36cPZKS5CrJtfkw5LEamzz2atM8itYVpeZSMXktA2oNKNPjoqo7cMszugn5abuo",
  "key1": "yPdBhV4jVT7qFU1XzVkvd5YQwGdS9wWBks38QndxNSH36wgVK9dzmJbbgVqkYi6tsnH9nHQyAC4mLgvAboxJZXo",
  "key2": "4guvwDT3hNynEKeikghq6ArXYMTWXz7jpUrNycM7S8FAtTBZ82bH9qBiQKCpeyrQ2R9geYXvFX4z9FnRKyG7mfa3",
  "key3": "3LqwDBDuw6jgS3tEvK4KrEC9uRnMBvDazvbC7RcbejkYfcM7QnXxiuDoPBQESHrsNjVYBvaMD2MdhV12rxtnWdB1",
  "key4": "2bUoMYo3G8hx2PCuFWrKLry3Hwk6san4TtmydjygqrrhuhkbUVgVcgCfZcNs18RbuB8iGBBqyrAvizBM1c1NFede",
  "key5": "5LJaGct4A9vpZEMyyAm8spDnJ5YUvrv5Xqq3TkxANbAmRF99jw18Ddwb3rjjRo7rCnL6erfxumtVyXn4JNRLm2Q1",
  "key6": "4dKSuJnCbsMzaUqxd8RA52xRwUrK2UG2ZgWLMGUZ8hYzSRRXoBCBeJTp7jAs7RgjuL7NmFmFSh1NQzUXdyjdn1uy",
  "key7": "3g7yTskgVCA6tLmhygshB85DDaMtK9rNjJS5kmmtBX45MT3PPdwD9vm5WUpKTsqopVa1ddE99JQYBt1qobgZtqjv",
  "key8": "28ZpCamcRRYXWErwkY2Xmgv4RTVdNG6NwoDEXY5BSZwRG8gzwrtDNgJ4gnc5BkdThft9eyACP8GP4L9BwZef4ty7",
  "key9": "4R4x7h4zzW43DdZx7YQY4WJZrqx49b7cqCPcAv5o2Z5ZHBySG1gDpKRN3nUChvwBPvGDZfW5gZy6PhheZuusza47",
  "key10": "2JtJZ7A6hEF8pn693E3F4M7hVxf1KYoARRoWcMP2mqaZYQVwGgzVoaRX75LNbLiHHZD4YWFu6yXPcy1ZZy7aMEFU",
  "key11": "5rzPMSNKXRiThAnsSSTqZpxaUCDyP2Dxiyb8UqJAzbZji43Q6ZqNaXvpx6q5mPfo3ZfZrprvdZh4w1FKr9kZZ2d3",
  "key12": "42Xh23fzAYakg66gd2rxi9Qsi81jvSpLzs3pvRquraXN9zuqtwqgBhfkvYL7tt5gWxrSXRhN9uDEiM9naioUHTxG",
  "key13": "5rFunXwbi6P9n2X5K6ivc6zzu2ndfty5KVnLEgGWRauQQJqYKS3pejKrH6TC3QgqUYCGnwWKfdsLNkESuY2owuf1",
  "key14": "ff4cMGL5a3mTRVZDgoVv8W4b4xH9kY1gDnLjyELEYJHN7GFtZgrfci64a9agutDKMCxKdx1t3KpArR9WyqLENgb",
  "key15": "YTMKXyJUEXusdikVKNzuLnqEiDNFdEm7JdKejvLzqdMPCEFvdUva93EXWtdR9ZfCiFervLHMXwFZiDPJAjQ62j7",
  "key16": "4pq2ypxKscSsyd5HmDcXThB9jc6N5vjLZpX4qsZA2Hgcvs7VcQtJRXvvescvPQJKTjriT6ju4ERt7WyoJyqWVKGj",
  "key17": "5SHqHYcD1cHbeJuUkE3VkD7vo7DeWps8TBivvRNaEa1ygJa9oEPPxeyvcDXaLwpWaPmhTS1xgiVAKWGHx7obWhRN",
  "key18": "2ZrG5CgEitsyWqkjGPFaD9KfRpusifqL4aYy8hWU4KNEyYx3kHFJZhiTT843mwdHgip6jc7uMg83X7dDbqF98ZnX",
  "key19": "4DS4gdGJvL3uAazTQDqT7EzD1SfKbxAtJza7Zfjr9ZnEbDMWQUYJs3a2YUTXUJ3y2tMCSNgvsvG8shfamTVaZyen",
  "key20": "5Mct6ikkaiewN59V6uKiVLiF2PjU6Kk2KBSb4YDTq5ngR2BKbYtKcaJb2CJJcxcC4HXKmPWXh4UfSGtsNKjrKNwB",
  "key21": "38zfdEHP7ky8GiGa3QwNM3hv3biaCxQmSXUgcytSkjXRaBfWnYTfdNH35jNkS6aQuW2TvFALLYQtMmDAXnXnBxex",
  "key22": "4n8FqaA4RnoapvNANVFFcNsWknYwX8t2Y74Vp9KNvSoBrK3H3uPMXYMEQwARrkbXwLRFsTUKtG39dtbg7VACL4jf",
  "key23": "4meBoTPeY6fvyMX26dHuXJpKmXQe9PfLBsbTs7LiCoSKTcnsfSRiWx941aca4wqzfrUiKHJ2z7scERco6Rn95iga",
  "key24": "5iwqSzwp6wdrRybPXbkfS7vA4RFc7JHRXtBa2FytrsSA5gtK5dkgVo13syu4ypAYV7gxEPBF21vbC7CRaMcyfHuz",
  "key25": "6VrQxRdDeLWrbyfUiN9BdC3FfgNwJeEbz7evTwYQtahUBid2h3ZnmN1rPMb216RpLg4D6Z1ADKrUqgesbNgcaAc",
  "key26": "nrg9LJZVwnB5AH3J4yyLBMw2GLNYBXXokPwqhgKeqfwADiLbqB88EGMimabZbVH9PZGvLhEHGdxDJ17FoQTNYFF",
  "key27": "2sg5hgrysEKLuuj9PiN2orP88rxRyNtouwBewaebyY8cb8VAvRf3PdFPdwhCgwUwcoJtj1TjE9SpeZ3CbYaSdXLW",
  "key28": "5mP5wrQGae4YzchYVwiQs67EGHexZHMzrrPbqn8pafPzd2H7KX7AL1t6xccsBHcbC9a7BRBwMoAtXC2CE7qcvMWZ",
  "key29": "3CPjorKKorXT2ogcQqsiChLwaF8iwQE8HfrDQzJtjP3jnrZ5ujC5XzgeGefwexoYrcw81pyM4EgB9kXsdkM9WwXW",
  "key30": "5H6sqAatoUyKP2ZGLU1Xok3jUFPrtpNMuteUraoyszdYvTBKfTkZUhLxyHXfDJpEbwbsAPfXXTijoLqA5KPrEpgf",
  "key31": "3doZXMpZgXZX2E1HqENMysJ61eX17QYu79jVUPtbukioyKtSEC5mdtmcaPqiZrRyaetmNmRRWebwSrqHJ66six77"
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
