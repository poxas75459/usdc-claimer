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
    "j597fgqrc1vtH1MV8PUK4rFJD4ZRQC7hkqYYhgRkS8L9ZFQ9d4GHggVJSbDcmRmSFPMqkPF9ZQppqHLtgVm8D2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1btjTsZarqzuEJpeSR25EQCASKc4B4skmZgFC1oUqPRVMUqrNab49SPDiyqcshoJPSrJaHfd6Mxxapr9FBwoam",
  "key1": "2uqJpKxBMexXo5UakkFuJ2dFaqG6vmcLS2f81WsXXSgcS3MoHajPTByrwte6LBYWNMAnfG4WMsMyHBwwiszHSS6a",
  "key2": "2qanVBHpuU4Rxyn78fdnr4KhnchgPC8rrPoNYUemgZ1invf24PtojQi93a7qQh2PWLpunzFfTHGaK6LgTnNEHhoo",
  "key3": "xdTLMx6zAaYSrsFxXCHtDnE8MCT2jZhhiEjpmoP75cxkzYdo3GSqqpBLXa3ci6n5evPESPp2VBKCAfmuGnJKAxD",
  "key4": "2kwSLRNbt6rJ9JDWhuJCXkCKKDB7hhPyBGRiYuULRhU8RWjHVDT1zvs8LSpMEY2XqmesKcDtw9NSRKaMcr9T9mwy",
  "key5": "4ASm3Fpgh1ZK1N3te6YyZ3B2wuqSfFY5ojThfFsJJSQDFj8fpch2fUmfPfyZDAAh5UTztUG1L2SMqC5dL5iSxDKh",
  "key6": "5iajrps6aVrLJCSkDJuVdsgfhWstYMB4zSzvvimsTtHRwNkq3QAYqRbyhCMgEypitL513RRByotFuaasFpW8As1h",
  "key7": "2WZkoa4kXdScEU81CKrznq8DrbfCd6Ptg7Sy6fm6eRYU2wpLJh7VZ7R9NvrRd1DD5eVNjpDhmrZa7r4JcpppKcSs",
  "key8": "4uqfFexHuFQaGjfcbPc9Cv1TpLbrFcYZ3D7DaUZNMUY4kvLTg6uate98tt29ocrXEoTm1doWmNTBe2oyGuMjh3Sv",
  "key9": "5xyvfbMz6tdxicNnz8dUsxBwV7CtsAAzc6DXnNzckYdHwkkAwbi69qXyhpTcF6XgwvCcpi2PTNb3iRy5vS37qdy9",
  "key10": "2qmdtbHirePmu8Jh2bcp4xfEtwnw3nUkgSP6sK1A2rcDHXinmugmPgDs6rN5oyXCrkjcW4f6LL2KYo2Sf8xSdVBt",
  "key11": "5eteMnstBCP6rmZ3YR4AML5jmihTJBDkxwFiiWSAY8HpHrAiisqKRJa1P6Uc9sbWt9rVcNdGu9mgw17DPZRwUfrJ",
  "key12": "3da4bPSmrTDXUu7CdKT2PKKxrX9jzhBmftKC61hEtxbNruG198cG1isb1VqVnTghvSEuyUzSnuXNQ9cuaQ6J6WoR",
  "key13": "wV89a4L8Ko1EPXRBw5sNq7uc45aBbBAinBUYxQ6RHRGhRCoaas3jCLhkNhpRxAWffjyYdaRmNRa9T25pJahDrjr",
  "key14": "3cwhX2PXFPz8u8YEWdhTLmtfGqRPkxKzRwVMXwDae7q2YnNrRqwsEZHv5R1W9PTZDjo2FGE3fjwkEefxS68ytPVt",
  "key15": "RKCjEEPa4D5GdWkdY36uGx4SxJbzdVzfrf3PRnVgWyvFgyA86fzcGYocBr4fh5m2JJdtVWh1teSPgNF3UkzCN5p",
  "key16": "4RpiUck9FXsVZroBaCZyF4TorVaoHZKcC35SeNgdinR8VQZKcCAwDstBRSgjsMWfZgePmqFN3CXwnvYJ6tShzm2B",
  "key17": "4ehK9YkTGtZh4ntifyVt1N5sjPcJzhwMtNB1SoSFZSuaxsexsgkD7GqKPDdTwgdr4GNShTBwi9jLMQLW6SjeWwdy",
  "key18": "ruyw7aKP2zvRRbZew939SE9BFMpUwTzEwfUkLugG3ShJWDFFGX7dDRDMjFLSPLA68Wg7PsBq9tbAr6DxUxZp6ZF",
  "key19": "5hsfZjhrx8bbem1iMoz6RkZ8aUNdRuP9M16ziZAPt6EAiFDyyfitXu72Atr2avWZ3YHJwm2ygwYWzNEpxaZiVgx7",
  "key20": "4UbduA9dxb7UwHtA3MzZywY7YQZtYFw6G66Zo4a169qbLf7BE57BhBNKeM6cRtdGoMHJ5ZH1Ne9ooCrUYhpJXhJK",
  "key21": "3oJ7uFjrMwgkCSoCBKk6xyGkMAfgzoZkk5KpM9dEULjpzAjMhMui7hJQzGTwsvWTYpgYnmvBRrNQLJs8jAC3TESq",
  "key22": "2J4yZdAGAWpJEqDLTytuuk8b2ZdKftpGQ926EdYPDY8FFBUr6vNmLuCtRYvgxT6NnXGLACrpUYD5dg58UV86sxST",
  "key23": "3qcV3d1TpUfSqBfcs816hmikdAddV7QWbLkvWDHj4xLdJdUaVkBS8cYPb3uXwRmrWmuK3qrf4hYVLjKxYhoGtzgv",
  "key24": "5dUJA4qu6eNkLH3niS3x3PA4eHhmFatwbQFEzqfeTQ3R9XfafDCVXkGr9zjv1JtXF7fmaK9ws5NU3pct9CCQgoNs",
  "key25": "5dtGy4GKrdhQKmmeF4jyjdVLFStcVGivFcwr14afMdBBZyBc5nS8bazjSm1YAwmgMY8s2rFJPssaA4RCYnNzXDzx",
  "key26": "4yxRn8kCLqrbkyTFHui8kmmuMi8eqi1E5AZfkxpcQcu5AuhqJz5mDtx9v5gDyFxDeJTnYsNEzM76haAk82vnMtHr",
  "key27": "HXdub1ethDJfZD7Ao22HikTSdzSnxPaAC3oCUgQjyiY592JC497nPPWspi3LLjSRYvBc31ggYyanpWxjf3xUX5H",
  "key28": "66oFWKEyFUEa4LB3e4dukbx37SCuAf9pJqLUyZq9MUYFKxtYRbAYZgjxLNpDe8f3aUTZbpACBwBwCJSzVC2iQXTM",
  "key29": "57ZrEVsDYqYybkfyJpgKAX8BdcEUuyFfWpxxHusu6L3w2e5cMVnwXMquA6JM4k1ZMcq7xaTCreTLDzwefYPDrdyi",
  "key30": "3spa4gEEsoAZUWSjVyjraYK3hL8NLP7M1gH1gdUWQJBh6SFKuuQPtVpr8EF8CJnDgnWt2ktZLu4BQzHfbYiLTihQ"
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
