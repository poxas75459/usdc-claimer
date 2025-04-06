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
    "2j2WbVt8d427wGeMjRLAeSZ96QpmrheggBPtqDFQPiYkBoqrMhcFbWpmSYnWctkH6BGmkcws6x3amS4o8NWXkCxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQVLVYN8QQL4Fn9NfJBUY27w87Kr8v5tYSA4pLAteM3RuauoWqyxVnZ13Jypr7ZPyE54eYtKKnUWKseLRyAnsip",
  "key1": "Ei6aug2cfQg8RvEjWi1VhJDCYzY5VMXd45N5sY5Dzpenp4j8iTietf7tNcDwqeuhcPZLGW8rBHaZMwHqzAdYrXu",
  "key2": "32p8Fp144yR6JCuqpaB8feQxNna7T9PNpjGceGa9M9rKnCf24DN3HnBGjK7yq6Azo4trrqzzGsM1MrjKPJLuRfUa",
  "key3": "2C4wsPnTxPkLFgsMpoPi3Kfabo7gqnZ97kW8W8FgCVLdZeEhVmYXB6BeSRTmhyJoTNx9PMBxGgRX4TmFYrdazeLG",
  "key4": "2naAjZAnEE6b1hZTE2hePWmQw8stYa33z6D9pJ9rmbvAzR9UTCBL8KB7JzKmF3a9Sp1hVmUZ5XLHSLUTG4E277um",
  "key5": "3Lo5FHmaxMSK2TUZhrnVRM23EC2mdTds9dMUVtdHW1jqjeNjRTLkoqJ6DbsNXHoZf6btfFSSn341aEppAw5kqpwU",
  "key6": "3htvoo1JR9DyPqijaYUuvuzVSDiyEv4LA9KHwygEajVuBG7nhhN1hFTb452xsxkDp2fpvxojR4hii3pxcWQBbmnY",
  "key7": "5mqRxUqMtQ1RUGv8QcWbY4dZVtVBGATPoz9hiC5F79cQ9HtmiheTTR2ztaCnztUBrijfSXnoUaadVdwPTKERhzeH",
  "key8": "4SsUgp5tye2uK2Gib4JUdWQCL8gszv1Utfw4i2CJGKSat5AWzabtvsCuXXMyhcSYH1KEQFf7AaxYeKYsyys9HEBz",
  "key9": "58i8esbr9UeRhrm8JPJ2Yr6WSpWnQgQipwQiJapjGwEC6Zhkt2M7gjmGCAgKXE8uaxQSJDU4wcHN5rVdzR8SX3uX",
  "key10": "Pegr6yYLY2KJuoTyVDa83PsRUspKsqetsorEEBQkVAnfQukV4reMePQDk2U82vpt7Wg1ET5fdDTj31v4pnD9Fau",
  "key11": "26fwDkHR8pyvCP87s3Az6DgdptaaYvS8GWQhFnpojUWf5HrEB7fkx5K9DggLUUVyrSEg3938jxeqLgQpjMc5zxcm",
  "key12": "E46fv6hdE19p7QdtsvZybLff3ppiMxX6KuJqyFx1xQsiSfexEQhQjBCL24U8jfQH793gex5yW8QiyqaFBs1qTii",
  "key13": "5x34kfhRvQC34Ke6BwZFM7YEYweFtY3Xj1Fo7hRCjtXsSzsc94ZvWvpqM7enqL3DeoYxT9QubAcaiEYfVDTV59LB",
  "key14": "5i55fpzQheACbTDqQBn6KJBfxGDo81yMqL7nF8C5zvdRue94SGF51P2Q7chhc2uzU5nPo8FRPbGRKNTJvTNrQp4c",
  "key15": "4vJ8JMZ9X9c2TgMAbuCr3x1frcHu13zUddkT8rQAzgz4qSZvsqKpRfB34EWzPskPmsYPzj8TSSMWnh1MLcPArPsb",
  "key16": "3rwojeAZZ4YJeYZuy644gFajXx2T92BNUepxchS4dLgQ7kvvpt7CaddV376DbfcgcHLNDB32KzSD2ZYMchvutvj2",
  "key17": "3bVPzpEUDvw5yGKxvdN86dAMmqZ97WMHtdnoUYgqpJzU2HbHauu78yLwkVB2nMksv3TjLgaDntLP3VducmVje7nD",
  "key18": "4QgaYQXV5SHg85y7LNHNypkTi44y6u3Bh3jzKPMKBFmjDMerrXBPcEyVu6mfuanKJwvQukU4kSsNCmRaEy3BjnUp",
  "key19": "5LvyBqwgzeLbytn9YdypLgRXVg3scu96GfB81WQiyJePgk5ub2wJ2wnUo5U26mqH2yK7UhfgRLuU4VTYYvdExXZY",
  "key20": "3hKD17p4qSHzwjndUdNr9uvGMBJDV7JaLK1jjBWpF4nF5nzx8X46LLtBhEGuXHzt7Ds2C5FNSNZAU4U1JFc419oN",
  "key21": "5scASs8bpHyFbgNGeMxPQRqYgGSDQfewjVQHEMQ4Ppe77wtij8SsBXy1Nyyejym9fC2z2pfnrQSUcG8tiunoHwsZ",
  "key22": "3MkpshyeasGueKofgtDvvn2JsdKZvVNeQ17D7Y8wTYZyrte6aWWhdBT3eEovnhnuJhoQ5hy4TqMdFph56h4vkAme",
  "key23": "2msFYj1BWAFkVRsqkymocFKQgUmajSGU2uVm8JFSbsPEeeCCqMMi4Xi6X1ijUH5NdJ65AvseCgsUfaQ8kK14SNP2",
  "key24": "4Q1n7MY2grC9K2itNfVNWNZuT6HRx6b8hjm2FF6RTwrzzEnzKKt8oCJFBscE7t9arYPLpzHzDQtpmeraEWaMFsWb"
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
