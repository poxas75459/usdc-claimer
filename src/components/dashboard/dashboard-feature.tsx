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
    "2Pi5Go7zk8EDWfd2B9wUMuF6SHvGt7fBrcpA5cmhBizatBVDopUZWK4SkCUJv8gTsQURD3qFGrKZNfGd4yV6yAMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMu42xWjk5rkG4Tbwero1pBk547mbZgoh4jxBJC5Gnki3UKfGhsf8LKjqYuyeG6xXJgKVumbAGgd2qC4FHAcLiL",
  "key1": "4bq7qwhfK5LWPvQgS8trqtKQCLKjW3uoEkwEDZr9HtnHhbK6PGr7C5kzHoEksNuHdtTGyaBKLmHBFpKVNUzXFbpe",
  "key2": "4GgWBYcZwRdnW8t7s5xPQ2CFUiwMZHNNHywj7FmoMssU9JHiWVZhxY4PAYh5Jtq3AmfR9H951zPgUNqS82eLgRbg",
  "key3": "VwTucyvDUrCXXF9VYhqEtbhmBVDMtsubkqfB9fS4TajbyS8wnfDswCKdhm85nvYD8FQR15J1CkyGWvLdstRUVbT",
  "key4": "5m67MXDiAAc9q62RcroYPaXAf7r9Nrdb9rdN3n5hTmyjehTgbD7b6vTmBfSwALR3ennAZnftAihioSHtUzTddSbL",
  "key5": "JmTu9LtL2t86njfNQPCJHapKxSRmvTnBuMEkiKFXuL8jbF6wAntqGkUD5VU3PYfC6yiugPcpU3pSrV1TsgQdgAw",
  "key6": "5tUuoaa2uuifAo9X6gnW15vMgVc8bCQCJ32qiCi4Pd7gXpR2fJCfKd6WHTUEoi6mj7dfR8XCXxVwxo1vW233ryn6",
  "key7": "41Gk7zNMyidQYY3TxH2ruqcGiNj4cHnKfBSAoNdiiY5H2pMWrgnyyTG29Tdm6xU1mocR2Ku9qPWSZFGCHPj2vW7H",
  "key8": "2XJwGTEn6xrdyrZdADQniTAVf8XJbhxQt6B2BVELNwb8k6S7r2LKJSVrA9qy8jtuAj1ZQxizE2Fb9tUriW5SBbus",
  "key9": "2CWXuNdfKkqnXKhDX5oTYqX1ahVK2qWGobM7V86cVzYwLaM1A8Hdmmba1A4tBD29i9kwS63XpbeMvKvCfgCqzapK",
  "key10": "2EBSJ8fVpYEecPHwmmiHtHPuhVuzUGeCcwHN5dTUzVCYwKFMhFexBFxCTRyQNfA4cCwFUuyq8BBT5PhqqCCiBnJN",
  "key11": "2rqbnSjuzCbSf5XeePhD2nNCHq9CRL6zwg81VjcthX2BaQQ6exuFWMQibtw9PS6aQRwwhX7fgSnyfgbHxvsfge33",
  "key12": "5nQ56qxy4ULHHUf8nfnjyigXnNbJhUtWSRWQxw5zRYHEySV1KMSYvias2tm9iMa41RnSpegCj8d5537gDqjoYRMp",
  "key13": "2WpYHdUetuJiptGeuanH4KoxQ7HQ44uUFWCBEVFez7JUvJdc7f7pY4bzMKuk9ZmfJYuXMuYrqRo2GcrDfCQUSMdm",
  "key14": "5WXZ7K7QpGKLN6igMQMRmvwG8YDmsgymMnhjuWfTbNcNHogT9re8ygUY2GXZJJYHn8EGV9i2wn8q1BcqUv9nXv89",
  "key15": "3ZyrHDoZqgzfdvwVvVp1s6TJn99SH1Kh1NWBxaidWzpHHNbzJdEYHGYc423kaRPhWnZA4PfjYNXhWBfscGPpjZGw",
  "key16": "4pTHBKwPQfoZmPChBgQwr8YsP2k8GQwVdu1hNckx8rPz3EYXHjR4V4FMciJLRKdgcbUCkmnGYy2ykeuTyninnQyv",
  "key17": "3gaZGy66Dyr1B9rjyhrbDqSkaYxoQ1bb6Q3Gt5MLpXGBVwVHMEtA1p8jVaBgfeAtaop83sZL1AQQWeASjG17gta8",
  "key18": "3QnkuHiC9ijjCVqyCwfgVu8TiMeYibVyL1NwsCXMcCahYA9Zvb9MBPFdLMQrHJG2SqJMr5SvXKU8RHQzaxDmMEuJ",
  "key19": "4wARXh21pMyf7MTJtAVsGZ97EGqfphEVmKBQ6G1v5QgUQmM5FUzCCp5ByA8ucgEGomhYddQmfGFwmoZ5MfqG6EzD",
  "key20": "4eNqXfmN2g84i9eVKpwPhxSm9wo4UaGoq8mcnmAkuCyEdNTmPm64zB63h1k6webAnJ346DZKnr1DQbt3tbkarjG2",
  "key21": "2YCkw9pvK8v2gHbrxr9pMVFWPuwptizRifUApvwFgcu1Q34s6m5p4urGesgymp9CUq3bUgWQSpK5eQbWiPShEyDj",
  "key22": "2J9kqsmNQk7rbmu8i1UfHvBzif2YG47TEq73BX9ey6wUeQmRV8f1EL5i6VKsHoPbovdgkFDsAQXtMwyHohjWQ1cZ",
  "key23": "4oeYFMcoQcnC6AJKGgFGucTJFvJY1SizqJvnE6qUoJMzKTgeUAiPaf8SimzRbzG9EuTsn2RFY2EE7tVXxtqWaF59",
  "key24": "FjXhnC6xRokZAJQxspSZDPwfavfH5UiieUUHwksmKHEAzEXUXCJp9BNCVGrwPekuCgDVDXw5xqtW29rHeMW5Fow",
  "key25": "3C1PuCmnry9mopdLrRxZgdX9qUEUZMPMSZbCiBeMofJeq7e4ef11U2NF4YBQnVAc5nmqz61vbdRSySfRBr6GaQmv",
  "key26": "gPoQbxc8Wpxs9JwhmGsekkAG5P28h1bNHiq3RFF64cckxg3EZzQbm3DsYuPsngz9gZYRqPoCP83vf2nkjk6j9LC",
  "key27": "43ArqKQ5iaj44rkZEyDXPgMD5gWpJE6THXCrxzgnQBpsdMoX1mfe1ZYKbRwHkGiJhVXizBJhkmEudHKtu7xWbQNN"
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
