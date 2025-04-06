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
    "fcNm6gKpi1o9eNAxiKzLgJ9jm9RKP1PQaMreNLWdJ5MM1J9qKTv1cEJSFxqBPh4dWQVDLYrMWx35mNRoGiCiWW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjrsFbhbVG74e6guSWw848e5Udfm9DGUvp5ELqznYeA7XMkKcj2CHoqpuqAH435tuhn35LrrCkdkMi53eYt6L24",
  "key1": "4oXH34qcEh5xwL9WhfwVUJ7fhjteHzGFXCtRv6qFqb8SvfUnRWBjxAWbDNjC2SwipS8M7XoUy3aSo6XDUnUr32Xh",
  "key2": "5yMyvVECUrfBaQPEGRGtE7Hsy92uRZqvbsCgdwQkXrLFhz8uMiwmCZ1Nf531bFh3gZaQnnmhdRrrQwKCzbe8esHY",
  "key3": "4iaUuwQ4vErMiunE3wauCnp176cEtLnUT18K69MTL6TsbhkTYG6f5pqSBmUb8TSgRqwz811RuWg8ESsbv9bESgez",
  "key4": "gsfC54UvBixmMG5UoRhRemtZ5S1mnhVMyiGEz5nP1ksh4NBQGvg7XuSAaDEgyxBF7W1HiFskTsuc43wUHXp2TVq",
  "key5": "2NfPDohbunsExD5PTXwxT5xzfzMNRMbZivcHTySc9k8MyVnrxkd9fFg511BMNU7JpBiGjiJfGemogtZHG4om4bfL",
  "key6": "2RaSjsF4T7anZQZGgM3WV6rkzW3z8Rd7JEiEHCbGUqdoSs7p34v7iSK34Z8TrBV6wbaedweoSQd3CkfruMdxdqAR",
  "key7": "6iPQeHKcEkDZikDx1V8kEBTeD8vh5rBqg7dkTwoiWyEaT6P77chjAabhfNb9GksfPgp3YeUeg94BTXVXkL9psGG",
  "key8": "3E1n6apeuPm5kwZot12vivLuCM9cLrzrGY8RoN1Xsjn9C6kBh3DR6XxobjWn8YpYJzAxxNN1rfDtJTf5pvvZKooa",
  "key9": "41cijFRd83XtdECN1WXiBHUNFXcSXxCSunq4f8SPxVFAQd3oCdpL7XwUjtcAUbAyEFZ9XhGvgSdSBCa8QNYmCAS3",
  "key10": "42oWdwNc8gkh2qAJ2ttFBH6oS1XbtaEhL5b6iYEu4aeQ6X91H23dWVdDcUHwS2PjXXvCxESdxtDyFM4HAprVkwyA",
  "key11": "5tez9rb9cWRP9w2PdKBTfqZkP7s8fp38xc4CKrTrRak7yHp22eVKCLoFSPYcymeMJux62toBQ6dbiDqSSZGv4DbB",
  "key12": "5poTyJ9mF9Erxsgsuru7P7ibUZfFroxiKAGXQxDc2xsHcBPwnuixE4HMca9ptDYtMvVLks1i8sVJ8ftX6bEzKVXx",
  "key13": "3VEFeu7mfFDwPDKck7QAwk7LwYLeEX8aZ1bP1sK4J7SdD5S9MkyAb2rp5E5fVvfbrwzyms1zcZVBhHs6sSfviUir",
  "key14": "2QRd6Y3fEC9BbkmC6hHYYeYPnYBDMt719c1XchVjPLDLKE2KqeFbXPA2hnQ14icbuRUaAAgbUJbNjWsnikaXLGwF",
  "key15": "53QJ8pDb1WjuLYz7C8ZP1WDcXt5KnLN1ygJE7PQB2A3z4NT5Qh4sCSPD4NMC6wnCSXuduQA6BbYpcfVSKwuSgoQr",
  "key16": "2rt6jBmLb6q6WMUi45YP5L4xiM3S3cvnxoj8RgooDQhmz5vmwrvSZDcQ7aQFVSs6WaHesx5w6fdist7YeP5B1koP",
  "key17": "4JAhpV1GHeqcywpFxJ2bcgeVeQcFMc554FxZZR7g3DDKNskT4tDVhamCwJXWFFocbdPu8Q8tJQ7mz49hwiDPVe8W",
  "key18": "32K3QxNcMYBGJKGXtNcYtnBrDiaSQ45As3yzQQzL1vYVCJ6LWkN5BVqJ3BHquKsyiUR8T8yyrk2KYPBQeg9WdLas",
  "key19": "4BwNTLWJFWaNgFwKy6gX4hjk3Y8Y3GQ4tgzpw1WbiLA5Sdt3ngunxTLt9GsLxDXW8ZobAjgUtdEsE1KihTUY8dJH",
  "key20": "fw1RK1cLTarkQrT5FANymoi2YLXyjxNnkRuNNzRHBnzoEQvzi6pWBHfdy8kZPyNS6co52wb5RgdYfJcBHpvaFoA",
  "key21": "3F48YT1Kc7X5271vSkhmUyKkEMoLJoQvWuNxmDy8X3UXfqQR5vvxNAkt9jeBG9fNfsHdCWYFUm4ZLry6C3NArPsv",
  "key22": "ph7TJ7qnEHUU9ZLMPzpqcLYsJSjAoCTgk3e1xnXJ5gw5PPSbtLAKmebwP5vgxE4P9qbkynWjADjCvgYkYhrNSnc",
  "key23": "MBcjeg2nnKXr8Zss2P7QaxZYv3nCRgjvk2yAn7Z5HXYbqstFWXbycK8YQcDUcjnkWHJBKbU7zvEh2XiPLx1z5Rv",
  "key24": "gKjBidWGgA4QHQxLfGX2F8AdTSgXHpUFVccK1chwx3HQwzHnpPG4vTGaLutXhpxKibUv3nUtE8Nf2ZzyWV7om1P",
  "key25": "5VccG54J63uFjYDkDzg8S5XkCSd2UfyGVXiu1qW4CuxfE7Ko99rip8F7NQti3dRgHHeHDz5tYeLj1F7jwE8wtCaB",
  "key26": "5zxVKwmAnTNhiknna241StqWGSbY6tXyEeYLVoiq2Ft9nvSRbEL9cmCQMxcs4hAjYMFWH9ixZeLA9FuWDEiHmgiN",
  "key27": "4Fgw9AWgWPg31jebzz4eboCSA6RFQtjPByUe6o9BCsxJETTKjLKWMXmctEZNfxHSSn2zJ6zgTSZc6gCi5CMDPQpv",
  "key28": "4MM7fC2wdkRMRmf5V3CcmftcdfusRC1WgAybGUZthuhbJA1xU5DcYtXwVTY7WgBS4XwF319axnEnUhNvAqpTsbUh",
  "key29": "cUFWmB4Sqbg7PYSS4VEezG4TD5KqEv9G9XjzcVN7s7GNcLuN2shMWPF3HLFTAyA4QhGL71bqjw3mm228Jc3Dhvz",
  "key30": "37n6XrSefWpX3QrzEmgguPCxQ8AyqL76HvVq21oTawgwEC7rpF3DgC3M14Bn7K4RaHiqnREerBw1VnUEVj7rsnx4",
  "key31": "4snynCK5suuAyCTutPy2dJnyGSjeVH3cx13hoWsrcTMKwmaUBUgnYMVknQBTZK5mFnvrF7V42p3zoW8epeuCXUfy",
  "key32": "5PJzXJj9JxsDFAC3jcF5FZ77qTAiDdeizN7pcbFeaywzctpqwdDgXme3soYrysKmvENoNJfMc6NhH2sgVo6Hx8om",
  "key33": "3T7a1epruqFwwHJV1BFsbnGvexbyPZFUNxyKUKL9GWciFAHzyqVfCTj5g66gswt7DQuQ4WjMiGyrJRDNjxPAwpjP",
  "key34": "emw8bb243Z5WvaZJMHd3RwFsmLtNTMhfoPd5awFeZUdCG5PuqPLLk33UMrCCVpv3ZnLobmnR5Qa4zxqRckpcRsV",
  "key35": "37cDnvsxEQhmeA7u5voyReDE6jJodpYuU6C3gE3PdcnhQ9M4sgyXZu8i9hAUheXt3xQgNRGn5DmYnJU3g1g5NGNU",
  "key36": "2D9JPq38Jid4aSRhahi78i1Ru3Gv5MMnzeUESySBLEiFZ5S6wkEsJHp3SSAeECgEGT2eARru6rjbuiTCoPmrS1TZ"
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
