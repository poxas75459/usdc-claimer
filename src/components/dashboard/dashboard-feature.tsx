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
    "4tZ5hpjZ93Aem4SnNytUQ3yFns8LuCeG89mRJFbNC7zXfLdddUM6imGwb7mx8H2dY7AzvQwLtrTSBxwofC9MZCMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbsM3vsBNko6bAMxPFoXATuuz7x7N9dtc3dNspxvSW3H25zPRc7vEQF9CkQ737EBho4mmKtyNFUao5BK91kU1rc",
  "key1": "wcsRt1ZVYT1ZAZ4yMCkr1rV6MuC1tHjRsEi2LZnU2XUPR1d3b8BA8j2immTrkesr3v4hA7tQrJixoi8K4AcGidG",
  "key2": "5bX1L8QGEMuE7UVdDdNY4LGpJGgy7WnWAaHZx7fJGntEHyWkhVaX9x4m4MLctQZzzV7JpWwnz3ZRWvpcBC4vwo38",
  "key3": "3rFute6k5wrLuL9BQfvjdy41YS4Bo6Xz5ock3s6V6Vp3BJRfJZ4SKQNPTPALSZFrKtDtSVNhqGqoSSrcy3DSKkfa",
  "key4": "2yBZViJwoffokUBetu8E43yUTG7rVCpN4V9wDCEW5wnJbaknTuqndtNU8LPmY4jtEEiaEJznws1mCdNE2PucN8yV",
  "key5": "2As8GZZQC2FuaA8Qh1qimoiZgEvRSzKdDbS9cXS98d5KnB9kqaazYgTetzhWNUpweoiXgrjrVHuVNvGwmFhjxNG5",
  "key6": "5M3tNJihStXpcw39rENsDMPydG6MArccQ3wt4oB8MQgQXV8pjhVjdyAvCiBdzXR2UpTmoYbii283oXEfzsaUXexn",
  "key7": "4vmd2YT37UrWdJz8P6saoWWX2RGiSbgk6R7ZBqofN8zREqsQZNRM2MmSjKkg29q9aq8C25mZ1e8KdxfjnE4TWD2N",
  "key8": "4WCcazg83RSqmUd8XpeYt3n4J6wrtXGiZDRDSCZQhr3JMApDZG4jhfMJoqZ6nJfe4amwZ8c2Yypw6XGf3W8Zi6be",
  "key9": "vUnM376GCugWmJfa5tqXsuj3YgJvBQERVn9Z5Hq36H2qeREMabaAUon6CZ3cdf9Y9TMdEfkc5J5Q5XHc1mH8aff",
  "key10": "24fbWSC7LVnjU7pDN8hJ49xTDNJupA1j1hg4MXqBuHpydvoC8bT68y8aLiTenrDtMHsxkCJUCmHDdms5RDkdvadi",
  "key11": "5syo926w4uh78JEDCPefb6wFr1Nba3Ud6EEFbWqRHQ2DtRYn5rjj2BGhJoxekq1zgHPUxFZgjoG4mtzmMYacGf1C",
  "key12": "2KkaxWuXoe4xMDFiH9WY5buXaxz4zYjAtLocijDECPJ8MpXaCYhmm6EMSKeuVA2BBMu3giGxwCsvMe2joznzQbuZ",
  "key13": "4gNgAJFHnRZ1qEzBPDQVyvEHw4h8NQq6zRt9wDcDv5Z4iuDvxfEsJCqodoKekPkq6JwpENxQv4YqLpeEwRUiDqBg",
  "key14": "2bSRGyCqoGeYTykNieTmaKCMypYR9pct44r4bTJzoU1TqPUwHjDsGG46vbgJLkL7JZJ72sbsrBzgEJkQg5VGGZAr",
  "key15": "my9DT9EyrucJ9Fxqc3KfCrwYdG8t7FqcaXiUV7Evosy2MBaeDZWr8ANJYhmg2SMeDVqaMFvkKFdbkEEBaJsKxdn",
  "key16": "2hPauxVtMrR7XCuK6NbUf3MV5fvHHetcegQr2r9wmFmMJBns4Vd6wCUNh7P3Xk9VH1FmLzMpqr7nhN1SvxfAzJ9o",
  "key17": "PvZU9d31qWyMqRTg7mupk3wtWK76tFAeNaDbw3CnTjKdhPkEdi73rjBVxiNZta1BLuLsFE8YqbM71mDqjsGuk95",
  "key18": "oDDGRceGDskhFbSrVMA5B8UZaJbMgMWF9TRb3hHmbciASuMqk3uuCsKdt7ttaWACVMbcccxMfatRn5LVMZZY6NM",
  "key19": "5RX3b3t4FKp2TyrwYa9jKX7ZrEKQpNVLXKGDo8zeVWMrX17AwjXLHaLYXmX58uze2zDqDdxDH2cJet4ABwqZcSgf",
  "key20": "3TaPz9bvaSknM4dD2soeAfn6VQ9dDfkapA58Ay8z3xciTCZ9WymqxyV3jzTjFHFUg6nMbKSCGEAkt8qvmnX1mzBZ",
  "key21": "38JSfdf1uPemcpfXSujRJxAmxE4x5gE8fGYgo1AoNAviiv7o5htgqfgwrscpVtWuwMjYXpP1fctfmZAmo3Wt4jYt",
  "key22": "NNh8dR2s4ZFiwcyvWviekoHSkJehAj8ehZ25rBEkZ113KB7GgmreUEe2mbXwVwpUC71VCbPJW7HjyVuXs9SEfGP",
  "key23": "3kTzTcc7mbfW9A75sTCt2w6WwoqnjKvgxAk2TYtVEQ3nfVHxzPNJFU5D5t38h4zS1pXADjGLpmphjSaHoM2GPvsT",
  "key24": "28XW2SARgGsY3oJoKQpjypJcx8M5zoR1xVc2MwTpWwwfAEKwK6LtBDS9TgLTU8sGPUYuXSpC2qDpAUSh7TkyPe6s"
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
