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
    "5BLVKBSYRKezidDHGouFr7mkZhHCQ28UzPWpfBb24wnzYBHysYBmRBzAxvFqZcsj8b5SRs5Qc8uVgALoMdpJFbVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ea18iwNbM6VzvqZtDo42RLUH3BTnbi6ggMc7wyZuiAL4Gu1tLKQ3ydCEHbLGTEELGQo6QfKxn7X8oQjSnximYf",
  "key1": "4MMPpw9Vik6kuMGuYxc8JChkWaRott46KThiXZThXbDAhUqXkaZkLku6saobhNtHPLT1UahJvMnDS5fyGmG5wBgJ",
  "key2": "3KDCDDyKGFyfGsnb85iDdrB5un2485jMDDyA3C2M879C3YApu7ao8oaSxyXodFNDqaYfVs9EeZxtBgmvEt5BkGPc",
  "key3": "3Q6ffjRqr82cPDRzSAGSnEbjNzh8Few538HtqRPKXLDoyiQu1k9vqzyS2aNEoDaLyimHGFskKYhcScv4RjHygxc2",
  "key4": "5aakybuvmoVqx5bUdYW2fVF9uTYEeQdzhkdLWemSnSaRkWLS175yr6ArXXBU4xqneCNgvUsaAYLzpz36jT3vo8oN",
  "key5": "AWvaR9MAA9pKBGRzuXsrSrH9wjK9wevZP5Ujf5UeXBNmxtNV5LNJJ4YJWdS3FxgeuimqrvpwMoeD2jA1nTWM4GB",
  "key6": "4dW7Y9NiPQRuKtPW3bjKY2rwmVAVcQYJjLDpACVekcncUeXyEFaTo26KJizZ5BvtqAkiYT7giNx1tYM6EJDYcRxM",
  "key7": "2BTNqKFDpcYi4mWRk3JV2tUQMta7csSDbHe39KhpCyvFGyZSLbtDh5mEQ1yzxV8kmv2oqymLY3uM9y1axAyHSTdK",
  "key8": "2wF2BK6Yy3NBDASAmkQdquDLrjVBAQbLZyAH52Vz5qrZ8EGZqfBbiA1Sm6SWVmYsKCR1JVJmQVHcnaGXcRfRusnZ",
  "key9": "3pPm9rkTes4MyBNRMWWt32XHibJiMKtY5rnuL2PzS5DHSUgahmb7jG55rXwfZUPWE65L2nSd6YknfpadhoB4Jugt",
  "key10": "5yspGmAZSC61VqEDsuQ33oVuhPY5pqq3PuMNToVHCff3BYLW4ymsHwPapcp3wAbXW1a3aKiRafJKBhkdHxssakw9",
  "key11": "4ZYHYG6JEi5635kK6eAsyB8ufWPiPsUGv5iT1EoYAuUnYgDFzFQN1VaQmJhCsupZe3GJVZonMqXD8uC2HvLuxn37",
  "key12": "2m3JFp1mxxYf1wbAXDpbjEdSy5hwLux33pA2SScm7pQAEv173UtkKBJKdF7qwXr2zH2SHSXpetJunuRNvENvE366",
  "key13": "4stwJLeGBMy4ARwNKeah8nSsSHQmDYc2WNhBSi4ks8EEQT6DsjC7hmyynJuNgpp5C6hTrcTpu93vZidnAJRxVVDB",
  "key14": "5m2hJtFGzMUd11VcBkXjqrLwHCHR2r5Gpe7DkxfTpLNiaDB8DZLpbTeEtKKjV7C3YguaK1AQXM8EbqPSJLW6zahb",
  "key15": "F93TVoaDtiGJUtLtPLVr8TzePKYzQC1TYMitN8bHmgV7wYgJFbr9Mkmb7D51q7xQzthz8tuCWrt9Z4BerVRMhQt",
  "key16": "4LsJbutC3wjACXg6QnxbXq9hKC5qnbLeFiotNrZv6au7iMdcFkrqY7Gq5y2CnGRjhBhiEHwFjgmF2ZrFns4QwV1E",
  "key17": "3sM4KVsuzEqMMGaGgNnAfXPMZf3GkSZ8aPQAqmeENukssnR6r5c2q67HNFyZU4vLqTbdkLwnLYswfbwtMBrWtEAP",
  "key18": "584zhp8qDnBhHomUBMhr3fz4Z1WVAYXWyeXpS2wSEdFfCp8wmX5SA4PdUhNhMmp4wFwjzDC76kYpL3qhtYqHvu4j",
  "key19": "5usCjzqz5Wbs4bGgufGgtUHwfKFSWumaYTwxfbf2YLL3hEwVSxaLbvdrym1NW6LyeTko8yCek2cZJcZAFPEa3LR4",
  "key20": "5fw38KKS9yJVqZzgtywZ4R12HudeGa3UZNK5rYwMK8PAipvwc5wkYWZs11e4CNpJFgpiyDuZGMCJ7unYnv9dEy2R",
  "key21": "3BXPTy1QjGrzZ4mAxcWeyXgWwpcixc7YQPRrnPwGqeTkKqTviDxikiAeMV5ckWUgVBJdyzETCxGyL51roKBvwWhx",
  "key22": "3m3cTyZGJCjYJAqovrhNczRvuJWdi8Uui98WWykuvdPabSQPeC37uPLvmQzBeiKLd4SHCzRyCXtQK9pQe9CPQrUt",
  "key23": "4XWaMjaBP4phd82czkLApSx95vAbgpW6ATGWPAfcFuEgDd25gVWX5cuan6V9nmfe4erwERvM7npzDQYNdcxW9Led",
  "key24": "52rHYp5RakVB8AaoJ14B9E13V7pNYQnK3Jo3JmAcL4buhVfUkBnnKrqM1F916uUfyKWtA2aR2Mc71Ut3bWDGuuAT",
  "key25": "1qoPAFaNhJjZ7zcJt5nd9dmV1kUzGpU4LyWhzrWp3jjtJuiuAbZ8GZcPkiU5PGjsSRzux6ur6CfuoKSDtJpmYB4",
  "key26": "2ziWpWMoLbaFT42uCcW8MtUBCvua7pdTjtkVtepk44Z8Pj2aYPwAtFbuc9db7enano7eMbH4L9AeHXXJwirYsscy"
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
