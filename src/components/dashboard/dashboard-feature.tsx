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
    "3C7mLro8KK7pryye1yhpRZhyCChrD6L4U9w4znmfnnJCp8E562hazyH9ZicPijss4x1G8j8da6Mp26CMsxYHDB7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nKFpyefya7YD3hGL4WBN9xBw7DMiFtBUmHkKj6Efcudx53NpkGACMHe91PyxhzEpeUrkPBGx9abNkGzatzqB1H",
  "key1": "iNnVBtzKvj9Mvf1oemD6m7Wm5wAXGZTncyg2Gmjuj6Hh1PQGnHfsMC9cuUsYfsFyhcDMwJwVXYpnvPyyn7D77eH",
  "key2": "5tTekARqbW1ejjDveqqdMj9SDB9KKKcQCMGm9Ff3SfDtmvZ7HQeGzjMkZbdx57RfTnmcRSmZPDGWxyKMnoQ2Q86F",
  "key3": "65m4jA5QgsF5G7RorsBkrk1d8v5zdnEdc1oCovzULJEQuwQUSafMPFbETgqbn9BkKGoVHfpXHicRQDog9BnYsbUD",
  "key4": "2R78pkpf9FM8Q99JsK5Vp3Xu1Y2v8zEmW9LMQrHvYUcdgNA1SQRkNdSfEUtKt5sH6NNCtEZLwwUZQq9EPkM69taL",
  "key5": "3tj53YaLpCjdPVm8zaCZ3QGoqATsjdkwEVCxWxwoPNLm1UhzeBx3VzyoHcDc3VNGJd5heTXvzeDc24v982dxVM8p",
  "key6": "2haY12yMK9E7BLBK8t59HPkqcZGugKwgEtZrHULumKVui2hmn54rhCjdLc5Uju526JNPupJeToA4hHMVGk3ZAKHZ",
  "key7": "4kKJkJgTsUTT8Nz6HqAnLfx8Qs4Cs5NmXWE4RuYGAchu35w4aNeT1fHCxhkGq7DRBRtFUreYzDQKD91RxH831pEG",
  "key8": "2QXGgA76bH5aNTRLDAgiregyFUrZSpLdCMtDYL27S6qNYqs4R21uNBGkd1r75DS5FfJurCmoPaC8dufC5TwfW8SV",
  "key9": "45a5PJZkgdzAuLVe7Zf4HF37epiLeEJwoUqpWWgCMQRgRAYnQyBc6kkiEchhUL5uV1RTPadzhK8PJPSngxuMCHJB",
  "key10": "65uZU7dNFCKQRJsLsfaAU7WR6UkGwGg176sviQtj3CATfL1y9Bk3EtE5BQEwC5XsUDGzfknWk9EHu42yEp3mkb8n",
  "key11": "3ffTKuRAunzztS9reUhBneg8LwPMgrygvWhiLt8xu5DBxBQJKuh7RDbfKVTpb8JiYPnqBzpbBhrVosHnctguEWWs",
  "key12": "2CyFcZnWMGr1szfJAZ2i3mmM8oFDxjfnGaRHTwpkGZ7QJavsxdDcQvXzQj9YtRJGofoZmS6pWnMzr5GZjjsQZjQo",
  "key13": "3HS9pAdckNpJaR3fv3p3Ue5Zzb3EAo5QJyZ9198C11YSkDrDwW8jrnGA9yG74ywiuz2oQYSW22YkeoUjGkRjVxPo",
  "key14": "5a2UGDEWk1zYzdJET8hN6ZCe8x4trySajSjVoDNgywE7MDYXF9iEjxqdgVkWW3BkVTPyaziuPsT76zXaB2fnTStu",
  "key15": "4qeUT3HtaWGza9KzAL7cr3eLjARixYVfjrFymYhuUwskx2gqsQ7SLSAhpcnRYFp2XjDcDoVXCGc8FFkPmGi6Muse",
  "key16": "55qkjhKSM7gkYWRn47zyYAHiMPM5zykgCtewdrztkr4AVPQyrTwsRZvGogjTqj99F3N4ViHyqVHhsGgQY3WpdTRy",
  "key17": "5rKDtNrwKauzyHxNiNM7BmXtgYYtPtTkgW8oEt2bjfyE4NEqXDJpahn7AjfRTyRbuz8LyC9jfKm3wBHRkyJUiwjU",
  "key18": "4h6fb6E3nTc53hHh6fRdc5YRTg5sLhWN91ktPXxA8dwcW4WpfCFJekk4UZKgaXYndzzJruyCJD9Ky9m6hLjpcjyP",
  "key19": "2qNnhXNcLs9ScAVNRsUEvE7L1aMVHkS7a7EXA87Twk9mEAgsVZnncvwiXxvJrM3gArcLB7YXLPNGCFmUxFCn7cAw",
  "key20": "66oYtnn1ckdaJCve2dGYbepTNGg5at8EfYRm3qbYEXDvXNZHXoL3Ra8QqRHj4mt9aBY9vK22MLqYLGG6RC1oBsWC",
  "key21": "2H6ghRRuMGuoa8zdXPer2Usr5qCJkn5nJ3j6gasEpjygvnMfhuKdb9LgZFicsQWQaoJuXfEJR5RiwiKmV7XAgQQq",
  "key22": "2bbYtQPYdPbnRXaiSfUfBoxRVu266KjvJx6hwSXNWZHsokPL1Hmr6doRxJyK6bWDjeGtdZ5St3GyXQLLqyCepKXe",
  "key23": "5SADSnsyQe2bU9jjWUxyrExNJSxwsN2wtcF5w8R1FoWNtxrD8FefBLEUw9fWA1G1a1S9SA5o1u6DsBBFDiorxktk",
  "key24": "4jcrtEfRDvoa5iesfN4E55XWXsUu2VAo624oC7zxzJYGUep3R7zo7LRBQnW5LZ7A1oLLVYzhexTanU3LTCWCX384",
  "key25": "8jqUsMdqemrXVEdP9pLYtDMyHio1Ciicf61gfvpMrLdoshjopAY4DoZBZ8AKBTJnZsbbZbPrpN8BEyJSGRER3H1",
  "key26": "45AzyzspfrXHjwfK6VnkTWr9s4se2BegsbXL5HDuKQyqMDkHyqJxAJrd9wntJutGspgBduaB2JiYXbHkgP49p9tY",
  "key27": "5MEZ3htmE8YLRM21NM9YwkvjvW8gnASv4pRyRan84MYK31MDomsGa5svVpwK9J8LCJ3E62QPB9j5XnzoKaQDb31r",
  "key28": "GTX2ZxLc5nFk97bwXEeHfKimdPJF5o6XcWT7uLMDb6KumdSqivUahscVL3MxyX2gXxiPhvaNcRN9Ung5nYAVkf3"
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
