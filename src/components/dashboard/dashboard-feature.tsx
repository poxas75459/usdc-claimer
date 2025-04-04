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
    "QnmMgZuPU75BuA21adws6MSBoEEM7tuWbTPnxfhGtQDuRZtzcwe6A4LGfBHfDrB5hFiqTfnWUE7BxNBAgWr6zMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZUpcFDNnBnhrPgKMSUuNeRGzoG1oBNEMxxAtBMkjoxmv3GPGfnc9X7BQ97WWMpXAJyd36ezagG3ShSoP5vCeTY",
  "key1": "3UkpxicPeSoLD4eMonkhd3VQ9Bga4xBRFZUx2j1kLdYCgFT1rp9sAs3Pp3f4kQuZYWrQx1Yz5HtQcVbj5H4kU691",
  "key2": "65ztNZ8TxhnciYEEhHRHSPzfAQgT8fuxF9mmWTASmMSEFmZPdaZXfSQYXmWE8DvXzvhRPsVrLTHTjJZCL1fsfTP2",
  "key3": "D3m1Zb1ow3r47dRsPmuESKL6z1zxbXny4yRiNGpfaA5Cw3ebFDi5rTe1uXqF9jWp2XiEmJbDYBKcMs5vT5Jr27b",
  "key4": "31fwzEm5NEcUDeUaBmvppJMVRAY9mNUg6df5hAQzGsEADE2JXvMzrG2bwGhDTEhH8Kkv2TwxcJyvWhzPT6EoAQVv",
  "key5": "uy35QRTSAqFpPmeT4JgPCtNfb5YTCSTeZvrNCWgfWCqtHBb3bA97it65oxxwCPgiTUuFW5oij5wCdGCUv8eRz9M",
  "key6": "3SUUpPbYVwqs4Yo9yaZMordRxFqvqtqrkYwDfkcdwtTzyB9tQi6ccXtL4TUDFaCNw6W6K7Q8HWk4gyemVR4nyc1",
  "key7": "5UcRLfAkrtDGB7DytR9DcsjmAtBvyGvMp5FXz57RLx6YKAyKWQs4WTu1ytwFEjZpN3HMrTyGhRrvPVZQefwR8y2d",
  "key8": "4Giwz9itsX9PSiPJD3xWcLNAXb8aib1vGE1co9DjKK7RQ121Pbb8iGfsSkt4HCBTuY8LTnbLRqP71hokANDvMadk",
  "key9": "3kxNhbhhoui2WX8tJZmaTsKvBozhHnCQAp8AkfXz1qh28nTqmUzJMnjvDiHkwvBxE8fy7qsyrce3M3oMSYFLmp3M",
  "key10": "kETcZYmvNdNuHZVr8E9XbdXnnp51fSbnrYMDXYuzXaHVQ5nEvwgwJ3QUKK3NAdPh8A3iJgte8dwaV1yahannqM1",
  "key11": "2KVWRQ9oUzTfw1JgAQp56FMN4ePww9wapxFWeuGmKrbaohPYHpdn2UZEsKA4TYZSDh2gUwYwL7t4pwMVoYsbSH2Y",
  "key12": "3usmiW6SQ9WnXg72J8jvhBNvo13QEV8L4axGQmETTsYTM9LgoEDwm2fUUeENDWDNQTMGtVbxtUiLHTzeZ1eQ8KyB",
  "key13": "5ryZer755kinzVgfbTsYR3sP3dDi1t84JzGBGbJxUrnLJtQjF6E9HiJvMisTML4cH1YpdPUiFPJFum7W54ELhYT1",
  "key14": "4AzLoruv7DVN8fmUngpF4M1tH81rcS8LHaqQhYGTGofkV7xVgiNA6VfRLA32ubE5RZ79xCpEiaYcJTbedBnuauQt",
  "key15": "3uD2YgxCDgmm8aqN62mkYqvrXGZSUhicwAQDbeumbzLoQjhWQ9bSAUhZxuJ3rTVCiSdiZ7EW8NiXDGfixKTxMLBg",
  "key16": "wvW7HkUxF285qRQJJ2fqdWt56nzcPwaNKBhL6zRnywhNmrdUgpMf9Jbe7no4sAhAzV4mZmkKAx13Asr8Ds7VMBm",
  "key17": "2XpeoyqhmRqxERsGbfLDv4oJ4yqaidHKjjfpXXXgmzZxoMTUgihAYtEgLArss6EsZHYTLXRMpwDJ6mU43xiMzA13",
  "key18": "JdX4kcFWgJhiNKJGWagYgPgjhvW9gVmTRrDYq6ntroqrNhZrU8PYGoiiX4YciFMtZRwPkDQ5SZKBfwCW4dgbozs",
  "key19": "BieBtmjuJkjGpwa6xeXCk6xuBSXVf2Tqv6N8xgN8SLcwobBpCnHv1kARLbZ8CJgiS7HcwrYnKMQ5p1UoJaGyt41",
  "key20": "5n1SJtUfEN2fnkq2cfj1Gt3ZveFcD7zPiUhUoyP7nQ7yrzuQjXdoq3SwbyPrEqZEXQTiA7F3yKuBUzU3fTJwmuTi",
  "key21": "2JqPE3pi48DwQwB6QbLuFd3EQmEwEz8E1Ef73WFRpRx6SL6DgcHpXrZP8bt6wyBgxJFSqAjXKCXj3aqjjQXZTGkn",
  "key22": "fnXLQ5eMzjtc5T6okFMwd8BYedRt78YK69Z8aks7UhiT1ZbfkyihYGf3HaMzj2U4owhz7vHUj7chkwDKwPVLcPc",
  "key23": "3QZTvNEmqt6reWBoWt8KPNNRCAiaZziKhEeCf17ZaZfXVFUP8gvgxUYnKVvn1EPqm77EVaUj4pTuS6DKfwcEwNjk",
  "key24": "4M61tPdRHoYhvBaaynsDS3wvRtySHLcuSuXVhRL1m2S3SyM26cNySgQ5UBu7y9rdGNnCFoVx6qTF7zYkYMoHbo32",
  "key25": "4GjdRM5RqHNFL63TSn91bWWke8TS5NmWXHmBhLNgsZ27JWxCo7sB3sZ54yPGmQtYvbZwn6PqG5S5tuqgdc2Yafyv",
  "key26": "2QLuhMbphwAmw9x3uWrW2obZDTJaEMHBiSv8smzBjSfRZ3NsSxTHRbwzbqi8z5X8meZT853gG1thb1tozXe4o1Mp"
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
