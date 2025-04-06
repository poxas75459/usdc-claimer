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
    "2eUUwWK7pBKPRsbkTJtyUFqMF46uDLBxg1ZqntqVuxPpMf9zh8rFxwusvAqVvctYT4BWmTt7Rhb646dYxUDGuaab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6N55gg4Z6sAUE7StSYiNcC8cTac8jaZuc8UDKuLwQF1CApTrSCokpLf57bThgTCog6uvVZfihBWRRLWguKKxLm",
  "key1": "3NHqUQftybrbtup2MWwkrLQJYNyArLTrb2TkZMinEfdusidBMQkKYNMYWEYxgCUyNkNVkas296K71VZEekS4gsqv",
  "key2": "4p6ouB6xSyhE17vF6nZVHq8ML9dBKLF7tEPV4Pzx72aGinuqDdhzWJvM4FXtx6DgU3AYCxXZNgQYiht2dvGP4S2d",
  "key3": "bm9Pmsz5Zru6wbBKGP16xUtU5V1ACZoCeY38YT3SjcLWBSQxJu1kraf3KmqMmKhFdfq3v5sjJHyDebotyhAtmHg",
  "key4": "24sQGgYVMHfwBvAN2k14JyjQNEVWXVegjtcPThnxDLS9j7S6yW64w6fUYTWrqkfCpimfMNxG8goSYUESt22QG7zR",
  "key5": "3ibLZUef7J2q2MhdhxJJ9V1y9TzuRDueMPuSQas6m2our2iWU9eLNrVmkuJGRHuMfDj5oWYAZkxFxFQTd1652eYG",
  "key6": "37rcLLvVYFsHRxHwLmAG66VAwJwGRabEaewBQ2LmGnPMsjZmmbT2MX1fhenFCfp3uzPKPtnYfkteCKMDVj1PJPYE",
  "key7": "37asngigpdSwM5gxxnTWjHViFH19jtun1hFadeXkAHCsQcyhUWUvvrfaAL6mJdku6uTNvJubjoRJaa6LsrnhH724",
  "key8": "4EgP97VHtUYikoMsMUEaz1QQ8vuTCc4hLrMWfoyfayDq1x4H63KY6VVKdoL2mC8JWyqdZM7eU3XTEyMDM17GLVeC",
  "key9": "gHrXz2AeUGGAZyyvtFELzF7zFq7cvR4JTiibGXFENTnePg8B4xLQSbBGDHcY9KgWA82aLaSMegXuc73R1gd2jUQ",
  "key10": "2YbvYC6eHUi97YzwFc2QtufqsmEtdiQvHgB5A1aDjmcs8ptDV93agcSho97sR2HErvsucC35yZ2kDNVSiEgABP54",
  "key11": "V8fJqPTe5fyTTPCRcsEdpGwUAn6rHfMFThhdAx65EeD9Csk4ob25nVjPXCB2QBkfGw9FoC7PzGiw5EvNc2bRCST",
  "key12": "4mL8B9amBn1bEB6VfN215MSuqExXp2aRrxHh7rDT8P6RczwmCgRzWi2yGG49JBgBbiYsW7RJJge7oAqPNMKjUxZM",
  "key13": "5JQWJ67dKEo9B2EDgHrYfjrjK1bC8Y2fzhRwLePnCdaau5pkh76CcHYXGH3yudcAKLbhvTExJw2LcTqYDVzCtQ2u",
  "key14": "3h8XhR62LzE1n35T96gCrqdBR9WpB1So2vohEEn7gsXeTAJ7c7YmBXbwUBmQJDo7DjbNjEGJK29HcGxT8YRa1Bkk",
  "key15": "ujRoraiGLyDFKr2hqqmik3HWyHdMyNCY84LHuT1PDP2dRvknyGUBVyTMFdeQ49b3dtaS5Ws8QuiNyrVLvGppesf",
  "key16": "4wMb9fE3jhdrkYNAAc7FGedhePc19mramte7bP7CtEwCCskmsg2DTEJ3f9tLXMFeNrvDtsps2DVgvG5wnYvfzMSL",
  "key17": "36kErAxjRAo4dwaaiRWGP2c7jBQ2NSSeApFU3CNCK43JzJJnu9GGYc5cjRYo7xYdAt25zkZrYgcnLqELZ4nyJvHP",
  "key18": "M1KWhf7GyneaVWaP1JJnDFagXXPCUjSyCSZTqap569exJSSdzwkBpmWAmkFAvP372NXCYEzUQHatMc2u8KXnqa1",
  "key19": "4GTRrxAGDb3Gwofsk9Cnefh4vhndjD7hsJiYmpf7iNNJtvjzvMjLAgaEo1TLR4Btorb3K7cZjWDd954aHhk6C2gT",
  "key20": "5wiFTBRCdCdnY5KXUAwVAzzfk8GhsQjKhEJiiXMxNHkQTEgdqCHMSNXxaNAKufufW3dQffWTKFcWL55RGYidoisG",
  "key21": "42PdQnQws6uaqjgBqAcgzfrBjqGPsBDo2j8xAe7PdLfP2ubt5bEnEF28KZeBLkLjXNWTZsAjk9kKvCKhpJYgS5Qu",
  "key22": "3cgy5L5HKgyHuwgzn7PT8hqFQbonHReX83eUJxaShVLkPE3bJrXCoJqwHe7ZaHXeqBiYX3hCpBPuX3CMY1Fc1Gcs",
  "key23": "32Fqwhq6Eh3Lj62EyySxGY9uihTdNjenvqN62d9Y2srw2gSprwoF3dLoZ8Ap8P1LCzn3M7siyhtCjyghjU1DmRg3",
  "key24": "KjTcSUUSR4wLBoKagqU61egZayRLmG43eKpzwAe5abntoATHSeQuNHxCUeDfxcoDYHJRtKV6UM6YmwcJYqSyBzs",
  "key25": "3xBHfuBwZfi974XuTrszpkvChywJAaGWt8EbRJfHRSLGP1bGQPo7tb5zFazL7QTUNBrzHqiJ8pTUv5fdaAEAVyhA",
  "key26": "zt31Bttg54seS7v4eU8k9DxXMyPvyRkBpj4sFtajWYTy2rwXrLjytxmK3qd8Gnm2p1WD8eM7pdT2m76R8GqSVXX",
  "key27": "5SrwuWau9JWcYjxZpEq1Pv81ZhTpPiPvguGsms5JXH5sVds9E34ifTQFXgsgMeLNMU3Di9Ss7uo4CoBiJR9kMdtS",
  "key28": "5dH5P5tNPaAupuR56vVSXzeLB9LE1XDzhtpxKZHqEtdtjbsY344veNssZuHUHVQcD9nBGR3e1WC8m7BomjLPH7Nf",
  "key29": "3vm6WGqL1VuHrfeQ6fx194nBBvs1ChmHUBixMGuZ8gCfYqCP2yWqeyvjzLF18PsttifcbWZPWfpCnXn6LALxuejG",
  "key30": "2QLTgPsshHK9sEaWSfZkCYhjmbV9x8rNi2qYHNGsKA3L4G778DQiV5yakk1dKZgcRsj7t1SUyPBRUmhxJKJG5nv6",
  "key31": "2Q9kofKQjum1cfj9kKM7KKu6kXyzQ6AGmDKbnEusTMSyzBiJ2popGFfCqjYUTqyMe4sNFx6BEw6NC5jZcsZ4ig1R"
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
