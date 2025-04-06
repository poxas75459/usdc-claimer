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
    "4WbzTEYFhkZDZApfoKT2LZSe9RDjpoJxb1m3CxpmQYkiZ69qLpURVpxHeupjWnCL4xxWPfPbvF227ePwi9s6DRCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbaktnQUuViTurb2qx4Z23TxoENR3vian5K8AhMBKCYDKzs25KW4vptpKxKWdrSQtpz4eUEub8z4ZoUwkSGN9L9",
  "key1": "4yhb7WrPAE2u6fYPPBCpjiC2HB8tDVq4CNJTuwwkeiAHAFPWjqQ7rZ1dxkyjnUdBazVfoPPvVkbgGt7MhnsHH4c6",
  "key2": "L1xR99GptBMWFqtPUaZFX6BE6yxnU3wmFbcwAJw6kdbu7H7kVKiaRLmdaTVE77RUvt9otJtzu5MEu96otrZVU2j",
  "key3": "4xXAN5EfAeiHV1AewhnBJz4B7UNnZsDWkWBxwnTZ1tB39nrYSayb6UUo5VcdvCG8AD2hwSNb1e9xmft9wMeKViLE",
  "key4": "23GFCR2Ysk7Js2smo6L8Go82XpkQy7DVd41xnj5Qpo3ktmchULkobX8bS5N58J1gVqgWHJ77KoFajV3PLK4v1YTy",
  "key5": "2cQqNqWdCF4PV49Dmv1ANH7L5FAUmZmiu6YG3amQbEPzKEb2mVREzNnb52HkEcfpPT5ymrQut2sApdiASpSjCtxY",
  "key6": "2EiAjVgfRyRV1NoC3uKVtKbCHm4CZyrrkbJjQM8Z4HLK7mYj4oQp55MCjJc44gmF7NewQ28iPw8KmanV1B16Z7BK",
  "key7": "GPrB8vBsgJzA32td5ThdgffjEpgHzvPvW6SZth7kbzSvJdcaDB2sakioixKRyyePshY3YtGWdrbKtQQh9pxu2MR",
  "key8": "5xobrydCp436BoqhbcZnuqu2NNKDo5e9V9yDi1SuyxdvVGuig4eiEbgSfuy1FhxhNBtQFDoPiqDdjmV7E3YTaFiZ",
  "key9": "4d2rUogQ1ZUPDuMNTrhSawFy4F97tg36QPKFavpdk3QPPzXnWdt4djJky2UQGfhWUkRnFjmJZkwZ51sRkL56SV6h",
  "key10": "4kp48sbe5ArKGvPHfXNzGVjWxWZZkfkzz7SF1XU2y4CMRSZaK66QiiD5kBbJNjqfJZDS85485sQ7pjW9Vnw7PRsd",
  "key11": "2kAkpzpqZ9L2ktdDdnLuv7epgiEVMZcTvZ67jue7DXMjVEBNQTDqwpxnVYt3m3mPvJEN15YSLEWz85ZwoQ1xoBoC",
  "key12": "2FqFcUw7StxgGn1J3T8Cn4Qrm17U7johwjsTovgovichDXnwRzrvrbVpBoPZVvoRMcnS4oTW2JxcmWqZXGBa2C9W",
  "key13": "hySV1wHv8KTbLR9P2xk12LCCnRwY2p3VmbrCZDVMFiDuJp3MndHpFg7sTjvRJxmjnwTwx9NRcmMSWnRJ5WtfqYS",
  "key14": "581X81Lb8j7vsE26ePrdSDF6kph3hbPxv1UUE9cMCCHefBaqN2cvossdbLc6NNHEHPabHTC9tnWi9MD1hpCj1FpM",
  "key15": "2VDQTTcGpVxDXenmSgUhB1qnKQw1U5fip381Ys4a7MXujPFNkfgW4KpxeozxyFukyUx6W64XU12SrydvhbG31WQB",
  "key16": "5G3bE1HSLaks6gfNP6fXe7RpaAVLKRY7ZovF1zduJWKkqmtt9Mar1c86W9fjCWQeFgsGf65M1NjWDNvC2xdht538",
  "key17": "27pFi4c9xqHhXmTpLEb71HQQs1MahKmyNS6WWm96PdW7iPZR77T5PEsgyovmebtjqU2n2Q6yAEHiNBcHVboQ7iBJ",
  "key18": "2xTabtTnvMnZtcDRKB9WorVDyBxuA9pLtpoD3wNVwJSjxeBM623QuGvnGxvraX84oN85YpoPMgwuUz527QbCniLt",
  "key19": "8RdnQ9Zco1n6uwUoNNmHkHj8cyVwXjnSAxvp32BtZYKdJ4HpGx38ywYARycsEKgUHfvjN9AxR8qJeMTcfvcCcSa",
  "key20": "5RwiTQ5YuBptsbps9vaxW9weW1nLBQCgokygi4FaSHkbpcZSKcwLiXbDWekzgTA3LVpPqVYgk5r9gLk9DxTTA1VQ",
  "key21": "5PCvgfVyn52BojgKAPde6Pzfcz6kmwxMd946nxHrLXs9YSVBmAMJ8BGBqAn422KuNN13tpWTbdmMXoYZ2cdBxA8J",
  "key22": "3XG5i3guEpFmG98JtKzLiaP1XxcEuigrJjZcarkDRSbs5S5i7uZCyXmzWen6cHux1v6wPgz7NLj3YbA8v2XNGRNp",
  "key23": "5M5mi7eDgDdkc6RAVY78Rg2zMYi5ayHPwqi6xnaYmTTE3TmJzpgj4y6yRZ36VETXZ6dxxrRRTDfTRaosTHtdRbew",
  "key24": "47Jw42tokVpMAY3DerEtZnBaGSpg25VcZ8vvSJR2Nw6uyYHq5SqYFxULXhGxfDqBQ4VUbxhNxSnLuj1Xr8YXxafJ"
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
