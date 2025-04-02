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
    "4G3d4W5BNzWeQziRiujyoYW1zWYYyCN2Hfa9vJRkXbCdbARdEmm8azCywdgmpawfvq19uGwVyV6kqaSDCRsjcdEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md9mnrtu52YjP7Topub6reb8gHjJKHaT64bUysPpuqpHf875bir9msPD2LwhuemMbZ31bzetuGuWnVFFeiEPz9z",
  "key1": "3Yk6SeXx6QcpijW2R7rDZDDRHc4ZvyxBXiEoZvcjziX6pT8HjDFNEGobJDRRBHJDnDdA4fXkG1pCpJrAxBRg9X57",
  "key2": "2zCtHnHE8ibea4PRKWR944J381EWpEDHwdaZzuZRNHoowkmsdhhjKEnGVFxP5jvRkpayTqcJydqXu3a4XNJ2ob2j",
  "key3": "5eRLi6Vh1nTzqkgVh2V9afRMs4tqAF2Pdtf3SsKTQLCbctuUVeGnCz9LS8zjvxUS1CtQ7cekfUgCCem8wNMA9URx",
  "key4": "VQNHPmGBUoVqvoqrvE3LdaBnKyXTmqjLK7JV6CYiGB2qxtJ2RMaoyHNjkUwAX4jxi1JaE4eGj1YK6zk9KYWhUsn",
  "key5": "3yhTpaS2pDxfjzrUtps1UBK8XLWetodipZu25yW47YYX6rERw63FAhyBPrr1CkyBrP6Zr8dk3NMc3RLahVQEGgU4",
  "key6": "4x2nooED6iNi49TZrYf48jDkhhhYcgn2tqsSUzxMaiyHee2iL7ynjMCf9T8WXMpEoRp25f8eKuEWiEFMXUyyCu6x",
  "key7": "49LRAL7mLBMZKtWPkK4sAnnDdxSgBi8SHmZcTZb1xwryHXZzFwQxPhKFXPbcCusd2EhUFEmqceeqVLtauna3PdUf",
  "key8": "XoscNLLN9AjuGP5K4CUVUohXXVnHCsHV1TK3XsyurCv6VS1cATBdoa2K7gUkGLhwLLzqLju7aqRbqfR72B4bGPF",
  "key9": "4bRQo7pSD7ct4GubQE6diYANPrnJAVoQMpQyT5VKfqbZY1PJEdJTBZiPHmXQSNeamcWkBuKE9LURam5bgZzT1qGh",
  "key10": "4WPW12edzYFYmNEgMwdNy4cgmSicpcCtgSFzpakMZArVmehZtgtEdrkzArSApxxcfXA1tYCn6bzRLUbQyERm2NnG",
  "key11": "5B1xtrZLGGfZ3U3Ctz3tjh4hYjvpHyuNo2d5c2w9qBdFXn5AGt7DDJxJgZzL83ejAp4YcQRQPCSErEWBWFa9LxSX",
  "key12": "5hwvhQq2wYFKW865kTMu4DFyPfN1WF8bVAVF2xPZz5nBkZFobxyRq3B2ug9jbNc13f1QpQodHE12RJz4KgSs3P2t",
  "key13": "DCwPexFMVMVvyJBUhmy5Zwe228eHAC6vGKsMkXsqBZQPNKLmqiTMQQEWSZ6x1xsfnH5kX1RsBeyjDgtaWRSteTW",
  "key14": "2Dduim1A8q85rAXeU5syxj7cmHzBbF38x6Tw9Z945DNbWgGepSCifoTtm71VfdaPURx32VqUfvCt5srfu4kWUzjM",
  "key15": "2qQV1bMEfJNy7mewo3oqANF4255LLm9RUqWWXjhSJtFU55khf8uDwr8P5JuK4Epi6QDhtbm32VxDnSLQARtDjY3h",
  "key16": "3eEpcuhJV8Tn2em6XrFWyqQ5EBfztcp2VJdVGSorQq9d2Pi4nHL13Lpy3mXMBuz5fFZrCKKsXjdnw4QL7DGHSiwG",
  "key17": "4F3hLyRMqBwTuy7e8uZS3Wtzf8yL1EGdq9KdxAf3avJA5971HYFvcWd9sA7NraQPgkorTFTaxUfm5BM6geN6UJZq",
  "key18": "2xvaoFN4qRQTgNiX4sDG8ThgZDA8PABJ8KQYec171NLLWn1JhScov8wTpG6RLW7xgChzfCStEiUVGSoweEwXgKms",
  "key19": "wpJTja78mAAAW5pMkZRqfN6uW9ad5AqejSYyzxCFA6hd4n3ZjBP7HvjMi4NtDrjms2imPQgDGxXDAhBEUM3xC1j",
  "key20": "2eRkLtGmNrvCYPwKDeobBRG6SFy5DJnHr32E6GEBnZZhETzHVbVkXERzJysasMtEyf2b3ZscQYQArqZxFai3WMpZ",
  "key21": "JNycUpABUMpDwRSUKWxW2yJNFRuH1P2Xqc51EcUKC1uQF5ssytWjR1LvRDFQtaqF6bZz7VzXTHwHkz1QFkwJRfm",
  "key22": "2BvZ8ADMdunNXKUZvQc4qCGx2zAUoRhBwcgFNi1kxYiBVNZMfGaJHHFZvwUcLXjn8D8BgtJok6xgTbUaNeoJqxtF",
  "key23": "4uvGjjB9D7qeeEdiMhk7Jje26qrbaWHM8YNRzPaNikavr5DTAZMiq6gWi7x82KvFuXEtrzda6F2dvhZyvq4JqAyq",
  "key24": "5R2gHg9PCyC1rSmVriYWbtZjbemQpm9ghSThugDMWrCgsPmnJNpN38UbsKEWSm5GVVmg6D47s14F5bxZj2moyzs3",
  "key25": "23Vk1SH4NsKTivsNfVjzdtsw1YuNNiP4nJt8AShswK9M3CqdVhnCMLhaFJGrqMkNzLA9NcweSDpiwbf3XaYG7fkD",
  "key26": "3fgix6KBRpjcrgf1kaDnu7uPK42iWDvtC8D11MN62HyfQP2tMb42ocJpskKqaj99db9tXgSUHwnkmEQbXUNSvDob",
  "key27": "3HoyHDbWvrG3pEULt4oEnT8NYMwG4BSq7Ag6j7haFnxPiKoHHUjMjWZF9kw2CGFLeSopC9A8iQxXVTFpYY1zG2vf",
  "key28": "4jwsoAAG1ACfCNac9dZe1hV28xxsvbt5LotTiTyuZ3K5iRAHR7ZpSDVqEvn3Bk9heu43Tk33gdtuoMovm6Z3N4SM"
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
