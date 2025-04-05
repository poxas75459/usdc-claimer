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
    "4j4VMTXZYAqwaXFZzYhNq2NBhgprCDjKavQoK2rBFf6RCBdJC9J71NjEKoJQexN8d2XN4tmCDYo6UkXgDGkf6rdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qE7AXukzJQu6zDMaAfwTqHEZ3kLgK2y1eTbcHWmJ5gyStAEHV5dPxZNSgGMtL1YJmoroBja38KeYKP6XW1sDLm",
  "key1": "4K88eL88pcj8ku2VfvDKqr4FWv6cLz4UuSu4FhBD3LX4yHeLL4irFMtsT6zLu2Gu6ZgLf1KghzEjQGHbsKoqU2Hv",
  "key2": "3ceXAYrRJNrKMuvb2iGt76uFu54rEf71miVJoLcUzf5beE6zQAckoLQs4bLBK3U7USUwwmXvWK2zbcbWvpordFWy",
  "key3": "3Rmg3yKQqkAuh41Po93c2ysWQVeY8RPv2kM8zrgePs7UhEaLHT9BtaMjUq868Y63E2GPH3xq7YXxgBf7cXkTf6KY",
  "key4": "5BLLw8myuNpxAASTxjmJnbhVHYEZvwP4AJhYUTxbrsTcoXwvGRxKYsMX7kvVucxUgSaipkvi83cagFdDwEKzBq8N",
  "key5": "5S33G6VdpY2rwsGwiqJ5F192zkA6JDyQdr1rUzAjt3uhr99Q6q6yaF8iPhf3tQLm59K2rGdciBs6iwmd3X8NGG9c",
  "key6": "2FsU3wMZ5cHpJQLUpiJ9RoeQiEfgWpuZrgyC4sfZPYRVpMxApftcDS931Qbr525uV6fFr7xAEcZrsU4Ex7PGfFTM",
  "key7": "RUbE9W3Qvc8n5cLUyje4CzA1mhdMAZqctevgAFnyztA8nbReUjz5tYfms2Uyz1RyoE9rncRS8Z2LGs2MHibHwjJ",
  "key8": "HXj9nbiXNT5uQ3Zz1p5ms27iivWy1yzR6CgzTgkSj19GEaADR449j4Jkb6tMtVLC5EsVLK4xh847bn9iBBJAEGz",
  "key9": "2LoBkts8o4fBUYBHZasg1RqbKbcwWNBrrSzrXfVysNAbbRyKNgkxkGMaXQDE58N1S1S7P7rDMJmEX7ux2P8X15eq",
  "key10": "33jCei1Ba5YBKJ5StupzbZZeb3rgjt92S7Bc99K394roewCZnBwTKEpokYEZkZ26xGfVSqZT3PFM1c2HLb7JBNPE",
  "key11": "5NZXRGGwr9ETxkWaMiuCgk1dRPvLoxiaewS2ov5eyKxz6kie1GK6DekVR9QaA1LDuyzo8DvQWbE9SS3Aqtz85EkE",
  "key12": "3ASPwJTRoTTiSRjXWmSudkXHTgzKvrtrbcRKPTAanCwnxeZNgMVQwpTPwnWHbxKRwCZhHgB3ZC31y682T4dRJAva",
  "key13": "2H2CVhp9xTHSqLXKKPVUVkVHV6gWtqBBWQXBgM4ijuknAWTEm1KcjqcRRqUWvqZES3ZqEnnawdkJko2ntnkVW63v",
  "key14": "2zjBvzWNUyFvMuCiSC3q8jf2AzgEobQKxzMgKPrqbytWpPadev3uEhPK9AbdgXY2KhEksK7ffG5UQZfawg6THLns",
  "key15": "4BX5esJ8UGkW4TxSKM1P1fGufWZZKtWHTj3cVFGZ9A86Jm5DQPRhDS9MoaeRTzZVp2MeWxkw34Q9MNseSvzYBNf3",
  "key16": "3ibCYhSoY6c75ZnfGP9gTPjT3iuComTJWhwSRJZcXkz5A4W68Fq5yS9xZuL2ZNNvDhTqCKFSa1HTcVNJWVtv7Np9",
  "key17": "tVo1cym3jh9ZBaGweoWePzNPa2i65KtYmUw3x32gEi1oYxzudxegVNWDHVXNsDLRhh8Vq3tZgR3Zk5ysLyGrUw5",
  "key18": "2vzkyqfVyp3EsbHDmbNmEU2y296xJX5fqa12ovjLZBEythvDsj1nVcHTJ9MQzaDRhDynsMLTgZKnNAw7FVJiGmZm",
  "key19": "3Q78DLPMBfsTwv1JWCL45PJUo8eFetUqH7krnEbY76E6Gm53r2zLLwjqQquo8MePkKdMPec4wyttFcFDx7PQGM5x",
  "key20": "61KSoaS3EanPC8omLJ6gvwtfcqxzuLTH7bhQwKpsvW1aiDvoL9MdgcqWRP4VEk5b8jJvC2WNVCUFQeLaUss3dzn1",
  "key21": "3bcPEvntNeAVFCTsiWybYgAQNw8a1wwawhgdXpVNhatAZf5nh8G2VaLNbtcdLPBdyKy5Gn4FWXPFr3oLJW2u5NBk",
  "key22": "4d45QdTT459bU8vXcA23pWQKFj44Ru3KYdL8hfC8QMfoxrMSS4wJv3AiTkwXPrkDTkBHN8BdhYTUZFn5No26PiA7",
  "key23": "5DoqVprGjVkLFDLuRYvkm8hCngHK6RYXHJGWf4AhKHeP4nskLwHGDnL2F1D9biGioVDSFrbwtMwjxnQi7r7axsVx",
  "key24": "2U16KjqRZzr61rFg5YMNUrzup9CwG5KNzAowSF42CKczWVq4V9vviHabyQHAb5vf34WVyAhH2ak9DfU9LnCuCvp",
  "key25": "4CRCBXK2FDQMHBkBPqDKFFHd5TbVR8NLmgCsfesFSAkkq5eXBnV8neaHjoznaWEhtrhLfMSAuyAq5g1kRpn4eYLH",
  "key26": "35CgzvrCnJeMpifeAMZW9hARHZUafza93YBBEcVK7XkvhMxXqLk537XyrDtPMc1LgZiLXmU23FKXnqvS2Eom93pk",
  "key27": "51psDu6K9sHJBa55tEfGm4btrH9YJEmnm8iD2WrFPswAiSEzGk9WQRsdtHUdrX75HteTXq7VQP9fK3xdyDTtyKU2",
  "key28": "5MiLfFP1nPC8q7M5jnWbrS3GTpJMXT4tYPJj13FmrMgtASQCwc3jE66N7RuLQW3hGiJZh58MSFo53DgJkfyCsukR",
  "key29": "5nPNBV7VN4ivGVcC9iGjKJn3eoiHXufHyuH7ta5fQoAL9enHQ2hNgva7a8ipRgJNLyRTBAqFxDGPBP4xudbVT8vT",
  "key30": "3GdRx2wWHYakHHix4EsTrDjnLkMju8fNGLy61SJUSpUbUHQoHvUC36kmhS7rT2PbWQLW6ex1esbrePZbMskLaJK5",
  "key31": "5yxujmmvVW486UH2aQDpjF4aVfAuSukA8MhQoQ7zbYiTEmhuJuXAUHDdqnV8YEhgwqaKTE3VvT4GCGQk7aVjFZfj",
  "key32": "EGvu9kQNk6efdNdVLYFSohP4zEv6wsTva36yMzLdS3JAm2MENqoTZjF3c2SqvY6Kzoi2dVeuvQvz3SaeDscthJP",
  "key33": "2zwWsDbYzhCKEW8kiwxvB3S9rsukR6iUT4C849km2MYAUgyf1vot91AViThavRnc5D8MiMJ9PnaQs2fGqwoQaN8Z",
  "key34": "54WHkUzH8mdk6W6WZ4GuPcwCmAcUbUoLPFcpbvmaLEzB6qpdULZPPMT2FfytVh5MRczkfTUCKYBhQ2795r9ic5G2"
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
