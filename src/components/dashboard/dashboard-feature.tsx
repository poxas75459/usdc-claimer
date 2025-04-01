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
    "25DKWgkNvL4kmYUKKD3jHJuqPk8qkNib7M6N5ZrFscETKtwVpFfCqKxbbSfFy4vDJc4Pwp7WUnKNyxmDhxa9MNVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z78Yg1zUHhPkvRZxq7Auf7RuUJdXDrvP2s9W1bwKN32gjUjRQdroTPt5t67M2S13B3wB9Zih1wE9Wn8PYgDr3r6",
  "key1": "3tTXfmXzsj75vdc2gaDcWQEZ4Rq8rweReVrxoMzJdVmo3WtziBPcTszRVj39fPConuudUmBUQ44ZgxXVqRqEui7y",
  "key2": "3MGduGRG51cHoYS3zPtuk17s3ocgfprngRfHvYaxjFcaT5DCnyBB27bZtUvfqwcqoLwsLvxL6WnoSZem1tiREniH",
  "key3": "HhGCDbAuVe8CxXkWeV19WBghUfd8qVBP6D3PaBcEpFqGVbd6cp8Vg3zFm5cRNdobgJhVUewJ6QMu9HSnpMLQycP",
  "key4": "xtA5Vurcx6YMiiGCndN1FCWiAUsgZZ8Q46hujtgMXrTrpTJpi5weHHhdT5aq6DDNdDL5udrM23am3rhEiUTEcEZ",
  "key5": "5wdPD8uPRfGEWDvMLQkGs6Pdvj4T2FGWWzahjW9CMdDc8HyrTGLFen6reShJYYoqnVbhzhVyEYrVcxe1PT8EnZuv",
  "key6": "3SSqf6CTMkCUto9CAadfYRPUx8QNBZ4xH2nuQvNFKGv4MDVLN2RXr5Zz15XXWWKCFTN6VF9xDzxnT8MCuxpELJ9T",
  "key7": "25Dv7JcAP9S6uTiJkaLc3dfihShLMuJHPNRd988PqXM8939YQoXhxzAv7og56XQnhZ9qEkp8jsUAzxpyGx42tJaw",
  "key8": "5iAsSAgN785CWxJ74PSxiRvAZXrVCS7oH2JZLXb2HuQcFdKVQZaHZqEkfK1gSuae9Fs5NgEyqqttbXdkun2A61aq",
  "key9": "2W5DN5WkAWcHgoFJizZzZi5uZFbPnkb15s2t3P1oXmJQ8oCdnkzqMHVQSJqzNRrBu1uxC1Yn6zUBL6igBaJCLvFJ",
  "key10": "5VJJFtPQpRbNhnQeg2a3dnDFWesPJmJAvig1NKk3KoZeZJR7JAx5DnWNJe3tgimL1WkE6bYEHe5HEaHHLQmxLgvr",
  "key11": "279QAiBDbYfHyaJs9Dyva7cUdh7JxAwSuFUhBUBtN6px2qhp5JYJSHqpAgys7MyYHXciX71XZz6J128Lam2AioQM",
  "key12": "4RzHJUYrpiZK1X9uhMCDb7KHHovWG94VCwM1YVXuekLYtFNBWUBftNUSNSxLjDoDVwzHkujSbNjzBHt8FesZiGXG",
  "key13": "5kKGcJ5YespJpGfehdgXaNQhcZCozdN3GfParxkPyPaPpwR1Kt9f9AtaPEXUF2Hj2tqNwm2vZv5imaxJidYQnsLt",
  "key14": "46cRvTTJ24knc6iPMu9tWUo24beJLMHGdJFTsEU1jbiZNuc8Rq2W7cAco8LpxCsUiQa829yAr8v7JMBg4DTaMs7n",
  "key15": "ZhSoSwgz6HhuejfBJTckdjuMtwsKcd2231vMtaxYHZzpitF8fjGyJGrP7Vd14G31CA7RWbPh2kSkDvezPMBz9Fj",
  "key16": "6bcvd3gmEm6m1Mj2sDDNB8D2KjSMnWQBzSET7woHQboaZ5yhy2gEbWHU8eSD6hfTufEQ9PX2qgCqDspWADJXW9r",
  "key17": "2izgMsjbMg8GSmMDxDvpm9TjR7ppa1zGLtFZkM8W71amiR8xuPpLDyTiSZrt74N2vJeRuAgSnhrLoVL347hLLNN9",
  "key18": "FiQtGSCvnmj22AQqQFeShaAvctZrhySAQHRC2isdUJ6LEwYkUcmRjaqnRHwb3baxYURftUc7zhLBUpxGYS16vet",
  "key19": "3XTv9vnhpsqyGSnB1WVP9kVoEgHpq5qroR7gV616aBnvAiLv96ZAcRVezKDrgGgmYBrt5dU6RPrg2WVcDG6Lrujv",
  "key20": "5emdEyCafSNW2TfxCwJrTvaVxVYjJCcP9PDzaYDqwLdL6BZtk9JV22mCbmSMsf1n3cYjMYvyZHED4Y7KiMJ42wGA",
  "key21": "2wZf8gAr6Ww11c9XEbZUhmm7TfMJGwuYH8QHiw3SkLxJuG71iohm2AftT6ZD1vgsrEY6MXPMr5MCMLeRdeNqyofY",
  "key22": "3hKWgoGwmnf7jFCQBQ4YopJUfqaT1LSxnekNRkLvEY12ZWTyNAjUZXZ8QNBND2GHJLewbDdytMc1wdjT6KcW16pb",
  "key23": "36rqubSKcPC4fJ413YbMt4Ho2AynqUHiwvqY9aR9mKKtWXvEGs13ucDE2zQ4okDeF4KtX4n97AkY3c8s96tNx1a4",
  "key24": "5HewMchHt5qwZAnjE9hN2maW2FExDHk7WFkYgkWJsRD6p1zSrLub5Pue2mwBcQCEJ5kaQF1xNh7XLT7mvhoQeAWz",
  "key25": "Mx5zoE3f7hCYJFTXj3jDcfJPXVUyeLm85nsNtmXZZ1LhwDdFWtBi2TmELtfH34yxc2ibXQJgYseDmoSq3Xw47EB",
  "key26": "3yvjXUVA3G1MWT7oX9fmJZF4Ye1rGMmG8WBbxqueqdgaB3gjWDyTYtrXg38VpKKbDf3m29j7XHUezeTyw9BkxzGM",
  "key27": "QPxK1n4FuzXU1v38xGYLNS2cQqq9BhJCnXiBAcTTQNiSnyN5ZrieK9J7pGzRVaKTU6W5roj4SQ8aibBVNBk3hcb",
  "key28": "5iGx1RJjitd5L53pM8U31Cpq1aKjW5o4JwSQRZp6sprvJvRJzXXToNSr13T6hyyhh9hb7NUvTytD3JsU54CDnUkw",
  "key29": "4VMQwBUMAdewPs66NycC61N3sXZsAhPvW4QQL4GF14RfudsCioi4eoxV9b3p9t2ebGZ6bGSs73hQE2eeqxmyJpn6"
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
