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
    "31TZ4RrRVokVWoYiANmsav8nL4gDqvZqQQbvsjRpXii3jK282AHUU4z2ipL64XvqsVjtPfyG5F4xYU73hcyMLDLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEBcutkVKbsvYdL9EiYTkvaZQwNiVEJtjG4RrYaF3ZJR3sFeMkgv2dGAh28WGNb33TxwbBnRnTrPbTnjxg6TUpS",
  "key1": "2wMNX5SZeMNUMKUHgCr1ZMbRMULgo8jVFGeYK6U5vh7zVdS4Z3CwLodduwgmagwLp2XdLnvdwt6T9ZbBn9gBnNPs",
  "key2": "2jFH3NU5G7Qj6kt8LCoAxrHGzZCEQsLfxnJ281RTd8zsp3NX1uz33ntdmmYme86dCgW3Shde2TZmmwW4vvQbyZL2",
  "key3": "4Cb3u6SzZp9ZbdLP6NHdzuZGsuLNZHvQcWZDKb5AZkjYefgSBJWPsvtdAqDAvNPAQFWbVHx7zoExPhjVvDjXwtTJ",
  "key4": "2p4hbDFzq2haNtDsxvwu7eN1SdJTb2L8qx4NDoqszU2Gz86b8MpLNt26HXxUYkTnDsiR5wKbKxDZd5x3bRWF5RKQ",
  "key5": "2otn3YXneeAEF8PZWgpQueP6EnDGWNK3nSGiMigdoNw9YJJ9Br78Q1NKyoV31qQeAcxeiKRw5zatqZn3nXdxwasS",
  "key6": "PS953Jsk65fQ4MbmBcGMzLVWfttvPzRyu2gtTqbtSczPW98s9P3JaeCSLyHcq1EAdocNbUPvgRHhmLkaZSFjAvy",
  "key7": "3kFW6KxLet2NCaLquQP1PEdAGdZxrpHiJC8ZNCfD4kfANCM6KerXYTXAgamtAsFmawHxPSb41MuueYbWUUJezuTh",
  "key8": "37KwDLNW7eFdpKqJVi5o1VCsiSxWcQRYEfufeJDxAXxWCpCszo9U8ntQW7u64KbB2ncn8Litq1xf5CRiNNjUVywM",
  "key9": "3A8H4jZDuZygtGy8LjZAbBWEAyuL5khycWC648Q4c45eMmhWp73z6iYY3apcnGC2VaxztrpKpPgRycyTNB32sUWm",
  "key10": "4TbmYtJqgLBuU3J2YuvZyxsa3v79GGRq7eBNwqDJneB3nMb1hcD86MqZLE9QW3CaiyCmhkLqaE1nVkk5W8xBNHK6",
  "key11": "3eMG7XjHmkuvKCeBAs9dTawaEqFEgdaA73TyJ5fGDbMtRbQyrKjUBQVP3cSeY6zpskXTGJYC9s3oPzpRhwfuesAb",
  "key12": "4aL8teTGtnX8sLpan1U9Jvkn2vCDc8TQge4hb6LKZBnA5qGfXtAn98hiBFvzVpYfBgyBf1FBrAzxpbFMSJ3Tavne",
  "key13": "23eXFTLRaEhYRWqPUbgTDZRNTJ32hN6mCAR7i7Hiwgm9ArnJ3YjsT34uGtgwAwb1JK3V5cEeBNZfajnBd5WNLVGY",
  "key14": "CwH89p1HT3S8NDwcC7MKWtcHhSe45GV1dZpXNcEJjtvRVyz7aQ9zuB8cKTNBo7XHehuR13TpV8R5VcauysowePM",
  "key15": "575jrN7NL6CYKmQvjYGc923MWhp1zEw9hNcc77SKxDaBAhUZxDNv6osEBovjVFD9FDUpxjYetnbNdNWK24rjqveu",
  "key16": "zTU8NuMVh8fxSbDnW2DJrFtk3ApMrMSGXy8jxLiMVnhMc3zLZzYcMSAjWnyakDQzwxdefcwfjoS4i7n124jDgXf",
  "key17": "RY3zD6Y6svXPDLJ3cMLXUfrYcCXRnyUc3LXNWYGzZ8uHX33EiMT3eBN1pKgkxWHQXLswu8GsmHFQ7XGEc6XPzPk",
  "key18": "4mNkBrn1Y3oSVP6CqzXBqXABeH6aodPsL4KWELEqvD5GiQbWKcY95NuFUeZkuYstGAq9Q7MUPp2oh4prvZUWLaw6",
  "key19": "3CxyVKvaJ9gnefynqi62nZhF42Mx3fUbpTqfmtaQVky8QZinNxYqbrZzc74D1vPoMfqd3jN34eDD7jbaqGRPvHHQ",
  "key20": "5BRCbNhShEpj6tn2pyQdkgeW2Zvi4yAWqw4j2JxDzVkqLr8KS8QZms22NpPVaiPxUneXWanuU9Upi9LCerhBuqVE",
  "key21": "5Dhw9KztiyZ4VNzAneRrt8fDTQ2W6EFN9oep5ZSvYJ6Fh7o7zp2xah5mQ4VkfCs9nvDheZpP4WgLA2MJtRqZfaLf",
  "key22": "3tDRyQqtqokfoJu3vjSre4mQT7HY1St8Q4GTD1Vw65GzwSVkMcMBjSY7nwVCEAbUJWAV126EGQCm9Z4cMHxf3Z24",
  "key23": "5GC64yA1Wj8FS3AXjyiqFg6ydVpK3iRWistE1wWkqKPVAXBBzNBuDGjV5uePdZec32wVFiNwKSbMKKbfb6G3sWzq",
  "key24": "5DZn9stDnrgYwgic7t7uYfkYmKXxjtjiSRH9MNazj2BUW75nVn1hwfdazksxb8ctnzn3TNGe2EPh8KAj5otkwbD6",
  "key25": "5uYcPKejH3TryQe4j8Ui8CLPscjpX6JUPrpZTbecf1WbMpRU8MxzsHboCYZP87cPcYQhXDr5x8dKz7byB4kBojjT",
  "key26": "2jSSu43mAm8ZDTrEnQUNND99SgkD8CUFkjVaMVzsnsYNvatwwmxfZHBrh7CyMnZbPUPdvFwWzwUHDmKGdL2a2MJw",
  "key27": "3aT1DkUR6MKi8boAyrUY3uNcHMZSqCFjPjuREPLTsdVj7N7GbnPF9DfcWctaxQQRvmpT84Lgk7tGujr3PTucJpJt",
  "key28": "4cFadxfqHo3KYFvKGSNdJEKcYzATfkDpdG8am4K6FbARA8tirqQRA8n86T9oTtXvWYM3EzmVbTbpig8oR7PGsDvb",
  "key29": "n5yQAkKfWNBrwGCSM8PgLfKivQWZ8jpNbieTErSUrhJePeZ12fAGU46K5kpqi9KTn2KGNoVQD6qptjFf4w1nRAu",
  "key30": "5e9QBLRvPot7vnYuFcPB9ahnndWggXRyyCUCkUqUqbPs4eNU1a1MwDzyRU9j61rMSqeNHKucM9bNzoU33qAay7yU",
  "key31": "4139T7ZfEeCp9JLjpJscHGr3zSTmy1XaK1PVT1e8ph1JC5BbFg5vg2UKqnEXuT46sx5o2q8xmv9cWYAG6TtogzZN",
  "key32": "5zEzu8mbwUXDdBk1treTkoeBkxSyZnhx9Wj4CWsksyTkk7t3tkRnQEmPdYeG5H1PLZvDtZRYd4Wq5AjdzLmWKfTH"
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
