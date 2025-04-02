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
    "2QTp243JV1s1FA1D8tR6eAKTg9kF2JRVJ5PtXzs6CSPWKk9bijCgdJCfbdi8Vg75kHT2EfgtJVjL3tSn4xbugQRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WBwbQhVy9LcABMUHeVSFQZnLBugoXeqNCDyH4Vx87mjb39XPH3Dh9sbB31NeGA46q3EY9ZgeLoiPyCJeiLCyNA",
  "key1": "2itbMqt9DWSn3jucWCDC4gJhgiGGomEDN3DAdSaHJbDvfr6NpADYYEBb3R16t4PrNA5gaBahCmgDiHPq1DS7uxYu",
  "key2": "XBGA5EJc8wjWxbJWTKHo87XjML1YFagExCTp3eVUEAkBAbDf4wGjhjpT4XrNA6E73gJBcDC6t7KzaY3QQLfnKW5",
  "key3": "63TiQFJgmvGvxHBFn1GoMGmgKDdjuWepjaw5bEKf21N4n4fGWnw2oebRuB7Mju4iQSTXes8tK2vTviSFF6u4N6jy",
  "key4": "D78nsFoY2tarsS9p5JYjEkpk9oXqLvXuQpGDamLSKGJJN4L1HsRBioR8rczBXM3a1xdsEUQ1VUvXPoRF5U4Xto1",
  "key5": "5N9mMWvwcCdzMd9RKZwuRTnHhxscjXrNW5aVa5xm8GNmhBPor45J5z6mGsp84jQhFaqT573Jfyst3dDL6Ycobzaf",
  "key6": "5mTdYj2V4ip2f6MNujoTpKS4bQAtamKVQKfbY15KMvu1dvkZJ4cAkRkPar1qYFsfLWfepcGfKCwU9RqrV6E9xttR",
  "key7": "5BoCG4g46DHt2m3tjnzNCb5uPWXNFNtbbHSkpk4QCGJRY21eh6e3yL9u89KXwC97MCeH9jKjnFf8ATjqY5VfMrxP",
  "key8": "4VNmqbkvkNV3DG3Fh38RBBcbwkpHmgA4toZL7M5KVyqdXy3FQs2rZkgu1zJU5hu6gU23v26RFVApk6Az2aksRSsW",
  "key9": "4TgVWvkntCFGRavZpYxUc6oYR4htm3dXezN9pttUHJfAfZNSKQC7btGZf69WFB7Xf2cxaMPBbrQQ2PuNVi3fqg2i",
  "key10": "5GfMrnXds36YwhMwn58jMGjinHrS1oEN93jAxSJR9i44VH3SWUXt8t4TbX5ZAVQL4BFZ3WrN9VwQo8y6oDk3tfHW",
  "key11": "3cqBpM2HMioy1tPR3TrFoMERMj27zw3p86N8vpnJZaL6hB4CSdPPTdAdEyZy2YTzrXbyvYjr52Bm66UbLk8dW5X5",
  "key12": "3DVDVcDNun95DAiUid2fdyVugsrgVgexdNBDA6e7uUdUXxX43Xg24wBwSryep24HAnzZKVmpDZcNg7oN2w54oLUg",
  "key13": "4Cs3qM8GR2ZCmyrRSBpN2hbSsANszGsTBvqyY4cKzbuA2oHdZ2SuMeeFdNiSgjCx5HtEze1akuduzu6xLWME2Sns",
  "key14": "2ybtcZLHVu6UzpkUQxmbLMwbzDnagxe1GR9oUshx2j8YV12LWhcP7iYYL9nRGsYJAYGMiHjwnMxipbwzg3GzCbDT",
  "key15": "59TaGD6JWtRnMjtT5xrw2g148zTrB98V8RCNTVP7YYWhKf8b7oEroJW8eEu9sGF6SEZusWM2PGc14pX5Z12tRVFW",
  "key16": "2yoEVPL44UAjXQhb7tMWDE8ghoMunLpJUevfEVJ79PnbeQrdLGz7h7BCkZJ9YsYjqKL8fJbCeYe2r8Ps6SefgTY2",
  "key17": "J2Jqe9C8P8664pffyunLhYuzy8VVovkN4QR5trV31gUQeDrPN9q7SG2FitHPbYGrhKBELuRjFJBVgtq2BNJQM4r",
  "key18": "2XaMgP5dg5bsG7NUsQvtdoch3GHFPhs36H65Ggj3ntsHCsR1ti3qBmTHf6CXP2CXjLtySm3Xwgh5xSFNNjENjgr1",
  "key19": "aY8Knvzgvu41zKw5iNhTxFtHv3A1j91HBse9RfMjv8qL4ftMeVMmvhfJ8t9k1CTSRvQJqXGCAgrdAcpPX3gGpNU",
  "key20": "5zZqkctC1SR9n66ixFzEwdbdSjaVsvYqyvchYG7vKvxddGkxSx339PSWQUZ1FRwP8wrLn2R4ZdMfBAKJBa3HACDG",
  "key21": "32YkfNTiMNGoiFB1GeXJQJJVBieDU5NkiurY5Nhvzdgn75soHH2gmHe2nRGVQHa79gUGA2sSoutF78UGQo3ojs8V",
  "key22": "2VWCsrsBe5qsL4tUyz8Ltcror7ww3maegy9TFD6jVpwbixr4PYXXXfyQSDk3MXNRzV7qRxvGSEnSnWm6j8LHkZJU",
  "key23": "2xBPERXaTwYMJo8gpiwZZXmxdSNRSuAe6JTxiT2EBrsoKSRXSK2u7q4Vvonwe8nuWJejjpUWjZGT2n7f5LRinJ8K",
  "key24": "55nGGA3zrudvFz53fK8CKetjYh7HqHsckB5zVShcwhYXjwZ6mLf7p5VrLqj281ihwQiy2B8Hvwi6R7mWzmwjKhaV",
  "key25": "4sRVkRbbKBQjmbdAFSM351Y3KfKoMqbsmqg173MXfij76cLirzizChZXmAdiR16RzcS87W6W4SANtVT5RKuPUmNa",
  "key26": "3ifhqpFwpn2Pa44HRP71NrFKum9LaVbZZYFqC9hJdo5t9tLoCbbX8Vxawc162SHBePzsKN1vH9LyFjvP7ZHxMXzF",
  "key27": "5zKpoynnrz1V3yohSF8DapmfgW8QyUqsFvYBHhpdM39RLHucgGnLucUKVksQzZWxH9hy74Rg9VsW11XiwAASnJqP",
  "key28": "2TfF3VjZWhm67nWn8AvHZxrPZn7P7gE8CFzvPW31ySj5QKP2ELkPHHyUdb1wW67Spae6NvaTLhRCWozAcbzt4W9",
  "key29": "4vasFffw36LnJSmTnbDUf6xZ2ZJ5V335Qf1F6Fv2LpUsyrBnvd65tqsUM3b5NDQZzFiKMvji9HL4qrs6pLHuzFMj",
  "key30": "4AuLcHGaRsCLJLUo3DK6xvhaC5x3RdXKDkdoXBD5Yf4DKfWEcvuTCf2ptoxdvGEiupFABbu8E3WAHx8kfE6fp2KW"
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
