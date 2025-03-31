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
    "54Co266GTVhzRUyHDYssEjMM5JW6KWKN2nMh4FaHc69dKH6u3THucmCbqqdw4RGUTKiun1Kjrd1dobbNLgtPR35p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6cmZVrzDsrLXQT3Fr3M14uQ1jcozPDzjQhyYnnSL6qDBHdZ2W8sjVhBaWT3vqGddhcSmuHNYXPwpYPbSpucyHg",
  "key1": "48Hp5idHuVghHM8nakuapS48A1xh5gVsR2W4GXpB2vVFiWpymsdWLiqQwPwUiyXt9smBfDysS7tRDAB5HKt4H2be",
  "key2": "33qibsR59k6k35jQ9fj5jQQjA9uCn5d3zWR71hSQ9gcnTJaU2SCagPAYfDTXXXUf1QKZoJhaYB5e32xagoZee2WD",
  "key3": "2CDuwoQivC3cKwRcXmHMur7kVMqLqWNEPF1QAqegGytbVxAC6aZqkT2MQWu2zqe4edBptqmWDy2sqDsKoAQWKAw6",
  "key4": "5qDqSxaS82WZZnJjDAkbp7AznL5ovhpJfCdqGkoRDahDSDRxqZKkr8UTvJfCkgkGCCj9CpUk2yRuPU77ZZ3oGo52",
  "key5": "3mXXaPUa5gkUVku5MMNsVue5ZEfoHUDeVJAdMFsKoLXbvJ4dBZpgSwdAp49PtZspadTouCqyG6Yx59AZv8vQ1qda",
  "key6": "w768EPGUoh1hY63pvhxiy5AvTzSYpfALWXFVamurcKzb4ugNU9meCRHGudvUCSYEzzf9a8FWSnvE3UyoTT6vtAA",
  "key7": "3wLskh1VpXSTwS5FzSJJjJ8q8NX1B7f15bp19QDyPTYh9XL3HoiQYnQAvyPcr45zka6NbcfhP6tMJQCoXrF82VfZ",
  "key8": "2qUt1XCMrwnHDg7oR36xRRGC7FJD9TBDVcSnrEBYszMA85i4pTSN7rg3i4t2sPe3XrSiTumckoUUX1KLpAoaxrwB",
  "key9": "4X7Vy2eTfC2VkwW6CP5CEkcFASpWtLdpEDsZC45DYvhnDhaMUdoPnGvadUy8NHoZbm6eUucJV42vrtgt93QsTWgY",
  "key10": "V8joZiddBymsMnJ8b3yy86Xb5ciFLrHyX1h6DAnjZ8r2WkGcDGK49eTZ7Vba7NxBUE1Y78WxqSSZo3oEbfzZyPC",
  "key11": "2DNq86KFRo86raS1LoxZ8fLqAiKMYHHMhAQarJbdYBZxd8W9voCT32uJ3ichLnoibjqvAs2ax791xDWJJqdtWtQy",
  "key12": "2dMwXNikhFoecq8jDoB1RYfAUujtA79HLLeEHiPqB4KY6nuSPp9xsAavKnfvvPeDqDamo5TGJskcjMLp38hK9chR",
  "key13": "3wXAGTBt4hpJXFpHFq22VJAyrYzGLUS32v6SNmMfQmrEyMoGgQg7KXpMdWv1fCLobSL7rkCUAgL3s9oUJvXkGMcY",
  "key14": "67mFgfV5GXcBZZbrCXMwxgYjLwh6vtVFpTWfjft8x3GUGxpEXG7obUGPLtRZiXnvgVrApqWQfcZ52RthCjHEr5Jv",
  "key15": "4LRAgk9rbGqZ7L8cZ4kyVV1fCBtm3dizsfB4GwNUPnkhAPE7vM7D1v9kBksjaGqYjwErCyiKdArvx2WrbGvQo6XB",
  "key16": "4hdGtgBvuW4egppPGim4efNbyGC28xRmL2DMygkTR63UDiE4DWEt7WbZrNV8ZRZhxo4rjnhLCxbUjHmZdCGUkBen",
  "key17": "25FjSUKkPNQh7fjVFwxnJpAJQQ3JFBGAXshDwUB5Newwz3Jji2pAhZ4UsgfJ3GaHyxErVSmX4hwZbsqguvU8gfU7",
  "key18": "2MUHmV2hYvD1KeC12NFufV3wXqtZ22E9NdqaniQwMZbdKNrDV6e6f9wuuGiYnM3YzSojgsTRPiTFtw1bDeH8BLcm",
  "key19": "3unf4iy6gCzuAMEgvDAQHEXw43EdQeHEq7VZTXkgfXrydH8vb8Qt6coMjmUSMNUvk7Ex6kZYa5yzzLi6Ns43nQ2D",
  "key20": "3sDZpn2HCSp4F5GZ24YoCWsHnvYzNbZvFyYFhNqTHZCEE9jvbc1wxSgYwaCRz2jp4Qjw6NVGUssmik2PHY9uF1si",
  "key21": "5SEJ4WAkTTTZsiKpGyzHg9bpGVmE1QvCo9MFVWYtqDgoDQqELaugULLEKR1cqED7JdaKeF26MFEp1hef7Lvmgnvr",
  "key22": "Kcu8WMTpfrRfjqmivJ1wkXHq5zv2MHbkJcvZ1QNK4GPen2rpzv5QFBF79mPkP5VWMuBtDBLZi8hzPYumqsYdBcy",
  "key23": "4MDrAnYmxnmevoBg7mEvu2YAP89wNAE8qoUXtn7zo9PkpcRyj9CzBiWR6bZXWPK3MW5vHheh49MvMUWKYsmzZQjW",
  "key24": "Bfk7z2XYKN8opMkrPztDSKigyXAHY1j7T5Er8Ue2YP6ZsMxsEfWzhyK7ATTjgFfkK159m8pjiN2n34yw9FKywjo",
  "key25": "Ekzn97BuKWUtquDMCToHMWdGLraiq35wZwWs9TkrzGbgsnrCoNpyz5mwmSa6Dq4ZB8GeNKQKfgvEXvSCaMmu5na",
  "key26": "3vwuMsG1U4CEy96L7CaXe1XUPQczfsqi4QE2mcc6CNEa62CzUXjPQDCjRQpB87fYftpGtPhWECLdf1GnhxQTBm3B",
  "key27": "5bcuNY2c8fCb48pPuEr3VC8EwRHkK8PnGrjqYN1ekgCAxcqFzYgEA9mPDUWpzBsNXD6oGJAA529LPv2YvaiGatFs",
  "key28": "5zDcXqwLsNaHY1Sh7J1oWcCezrt12BmHmpPptYmr6a33APsNPusZA3KuW4e1v53Yoozx1CRNQkixNr5WvJKazLNb",
  "key29": "3WPy5FVgGsF9s2N9AsHkB4cTvj16DCvUrkQoo8idShb1K3mzxtJzFWbgEDNx5EPMsXFVHCmBSC4MBGdNcUWuPaUm",
  "key30": "24zMzzGpTfdkAZNh9WiLwYgxtoFwpPsL9FZuFLAtRNmwcNYda3GQVjbAEHsHYJdSnVYYnjV1ENLspt4m2YCPHXbJ"
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
