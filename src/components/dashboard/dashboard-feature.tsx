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
    "5NfVhEdHtTjKwggyUFtLMUuKD3tbXu5GtB66tUfBRbBjr1goe742uMzxV9owpKmshNtFinGyWVorxR3wP6N1UGqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G52cr4wCiEm88HVcQtpNxrnLUkqG4p1yNhwVhJq4KF7urReBisAKtYwSHxBGukuoYv9iTwNcvvVKtQJfkS32KVr",
  "key1": "SmNodTadP4XHw7rEspfRf7v8ey91gkmedJJmrxXqhVcYJQafk8XEA4vTGH7dZVwTADwo11rJkF7yH7ssACkQUwV",
  "key2": "LAE3ysNFoZy5EhGf6xmkBrv3Xx1H155xVWm6remgghgsCwUd1bfPHngNeA7Uo8ky4iwUXCUbXr1eC5Fz7wCNCcr",
  "key3": "Dy3CSHeahSAq65RJZUCXaqJzGm6MXrcCiMY3LYGtw4gbFgMY7CrsfHPCnmucuE3BTE64sq4nzni878rvNDmY9pu",
  "key4": "2GAPxaefwuXh1SCTT96R6WE5agYocSWBsAz7G1ys9yFSw7oL2VaErocbUCAqwVrwnucAvC38SshLG1hgozR8YiHT",
  "key5": "bVi8ppyppRiVqwBPEHca18qQsoSEpRvhSbjZDy2b7uC6uqy34XcWNF9w5kD84qMXySgEB5bBXoQEUhZ2TC7f3Wg",
  "key6": "49cc5P6xQrQvCwSTQ99bvJE9bm1G3ENqghXwxyGDeW4MXtr2uPjapbmFp8zRCUThUrops6P1157i5tohFhmeQmNB",
  "key7": "3QH4WzHJ7pHsQ2VvKKPARL86rkuMgjtNKb85TohdVXBAXuhWGMzhz3a5QVvxFmxV4Unoqcdp4mjoqzJyCDqVu4Zx",
  "key8": "51snNUi655NXkQukT1fU25jfAyzzcPAcZGBoVTon7MUDBy2spNxd8BKvpUoTK7i7kXBBWEhirrsMjvQQKKFBJ1oj",
  "key9": "26bNJcq8FXyYvJouY1uqvb4MBo21EJMc4pPV3Rakug1JsuapQ7VFGUzZnsL1GHjAHo4eyWbosv7GMLNrA1Z4bFKw",
  "key10": "3Fsfy3uvpUJeL5nxHvSp9hSQpGW3b3RMi5ghQjqC8VEFhzLJTYHdJy4SoLJZdPXrK5qWddtXq68Lx3xkBEAhyoa4",
  "key11": "33JP5dB5954rdZpcUVc2Z8uaGoBPtEFr8FHDcbyJiExVMY2HGgS1G4MnuZ9Gf9dQUHFp5GLE8FyjT9xEVQs2D9Nk",
  "key12": "4rrmFz9RSm3dJNCSCRYUTiVapgsi4NRCzUtm8sbetqZE4iEnxTL7gHUeNLTCYRaUYGvqMt2Fc3ARKKgXsp5y5Haz",
  "key13": "5cggba4bcKmcaih28FXGBjXhXTzLUJFuXDkjTQj9Aue3ifdy4C3MSdfTMVrqE3HsmnqbQtFasCcS7FCkp9WxtMHr",
  "key14": "2szrpf72FHL2FRRW7zWXjwNqFF428DtuQxnVNWnqjMAXJAhTm1HxXJkNrkPhGFYGfrVa5KsRqL2CLrFFyonuPqY9",
  "key15": "33CcKAtNvRpTbGYowNn12ZpCZPqXeA7aKcxNVWFhQpC7F3cuhc81L8J5xK1pMY1YBCNi9FjAXWPKDDJGtBvCYV8x",
  "key16": "4KXfjwfRfwB2rEeuaLG1WgHrf3tnzK2KxFm5g5VDvCyV9QrefvrdNxwqRvuiD4cSYvgdPwTbV3JGG65NjhDRkn9P",
  "key17": "2vz8LMaNkujBQSz3noi82nAsVzyXD6N53pZmQ5CYq5Z6C1czWBkcSHgsEtnYk12YogUdMpGKSqvrGLuUrfFECrC3",
  "key18": "2VQNBRs5ch32c5wbFNpHx1SbSwppUqwNLbfmrJ1whpuvX2J8JHsrqVj88VURCbKN6zT47CFXjw5UyAiNjCoZcJsj",
  "key19": "2FbSE4bMzZCXETcxD78nQbyMNFRq4sDV8ve5Xg8hFURQi7rLvkR1ZDtRhvqsmUGSdiHRR5MCrni23z5Eyrhs7exd",
  "key20": "3GNFkcAj8Y87rvQfd8oP2GC3vRFihAP9DFb1TjLBPvitPM529JxT9G8gUiAXQVM6aQ2LDWt9jXkgRzcXvBZrSAbj",
  "key21": "btpXLjoouhwqkv2kUsUYMUgfK2HYNDGKEgWdzVbvLKuuV3dPhBkMApca9DqHEy5vhRBe3FSopLnSH5ZENBaxksm",
  "key22": "2V1dRZjDdFnE8upYTwbzGRmDBZxHRYBLvFQaxeF45TQBNpPXRBkarPY1Vhm1EDur3jSGAReyUHqvLVBALvBAFDjS",
  "key23": "hZ67ULtGLQyFDFgL9gwsy23bgJp1LpfkhB7nZrJqomhnVQPF92dAeRHjFWggxHzpcyFjwz3xgfWvXpq2xg9fyxs",
  "key24": "pdGDjvJtPHPYEGbGGkk7sCZftwJuAQkXT1rdfCB7mgZLufwcNYConp8cks2mAYdcrJnEcYzTfPsyNkdUuf4ZWTh",
  "key25": "4X7q33gUhUqY17Jq7oxupQkowf3y6i3y1hvjfEuPA2x4AoqCcDEmFAAnoRHHVGjwrymwY44yiR2VYEvjWi1py7n9",
  "key26": "5eHv65T2Ho3JHPwHmbPTLiqSnmWD6664gCrvvgPdwvfxBQDmMEh2WanHNLkpD1QgdUb8NPGTu427EtQzWuMEombB"
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
