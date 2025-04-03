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
    "3ETgp6Rv2dKdhRfBCd9fPhZz1HCayCyMboVhpGcXT4GzHKZ1R4iURfomSA8qQQppoKe3pLN5LAkvH8Ps2EMyWCeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJRkH19WFgLb9GDXTcr6opNuLm3f2venhmAvJgT3yCDbFWSw8uoHhxdiFayssGhCWEWUSZr2bB1vpQyf63PowBn",
  "key1": "2QBvbjumnCrKwMYmRF7AGjcJCcDHzpvs6Fd9mNCz8vzxg91wBDfHFc5icb4BmL8W824SRX82YC7JzGBx9hiwoVpE",
  "key2": "QKiYwgDBMJF9Ksqa4yP5HCitQHKPMBvmoS3WbzgxU63bzwEfKLtmDZUtgXTMHQtjVfFUi7CBQmgyhAU2fxwedPF",
  "key3": "2kBuLdVa7M9nDau9jDw6zJDcAZs7uNj69C8vMrigTdfuj7G5Bti4v79UH6Mn5VbABM4ag1AApSJiaJf2pm6X4MWZ",
  "key4": "41kKTFHTLTtiLvjdWH9W3LwaQSoQj6zRSWai9uKp1ucvVwwDsvx8J6eTmFa4EEmM4uUDKKT1f8i3MLbBvRCY8D1o",
  "key5": "28ZaNkuhJ8xDMhYo8H841LQhXz2uUb2v13Qj8KDjcF1dKGuH9cNrA6nNdABGs9W3weFppm3BL4fkeJPt28RE32n8",
  "key6": "GPP8pnkb7fdFqr4xuAw4EAhLxAsebRjqxN6hDXQzRefExut736rMmMtLzgrPbiKc8ewA8fpNeBmgzybyRcAuW8Q",
  "key7": "5XVVYjutvxsqV9rf1wPMdn3DCGgYsssAJ52pXQmqqkgPX8PEBkhfVyMfCj2Uo4jTx3jTQgYmmdGxdmiS9N6JgqUW",
  "key8": "5xNai7V5gB6AgSFcAe6UqE27LsMwFpcWDzMT7AW9fBfDokPNCG14XdfwrmocbEjQ3jPdcFEBqThzQZBKecn4geYL",
  "key9": "5LpwdHT6vLU7fMpCWBU5CENcRiDbRo6u2WxmbKXs3d1CFPmqftDXhy1VZ8cQpfYsRRDDYaZvABHSiMaMqtFYMgh5",
  "key10": "5Y4q4h6jzgPmq1yn4WqGNNn1ecV9h4ThVn971HA5VtXiZCKuML4kLcsZ953qjAx9PhCjwAT9mAZXSKtjA1kq4rgu",
  "key11": "5DxVRnhVtRnsSF74zdGfKcn2op1tAXXGr5DxnAUnwSF7yyDfdLy7RC9GkZeuV2S9C5nQMZA82RkppBHPtfLjLWD2",
  "key12": "4mu4uGHEn4zK2hqMpgUJHUoQJbDNALaykabQFpTgXz4sG6vmt9ZVtVNSJs1ksHUQvpMBdmYhwywWvkA3gGWWC8RJ",
  "key13": "5ePc6vbmBSWGDe2gNC3P1FkCvmzq7YKTXyPtg1n1xJY193jDmhS4dKAEBYbhnx7mrY6kbCYHyhxaWsQvCKG8AjwJ",
  "key14": "63UtR3irUzQ68Kupjd1XUyT7yyJMJWfprbr3Hz97iH1VfUh1Cq87TsrTa2wDLQX2gYcuEtRgSEV9FPtwXgNJokXQ",
  "key15": "G5JVFdAXUHATVzwoE3B6FJZXAMzPo3Z8yEHi89GXiMfGGaZoNbuNA3WoAFDDtx7CMMpXTpHrMa5MS3498GpVuwx",
  "key16": "2dTRd1TqGxETY392hJChn9C65YcdZCZ24PfFLZo9JiixW1gmfREfqfd2giATejAKG7D3Y3AKy3enbPcv4YDq1RZe",
  "key17": "3DwA36smzcrbZtWeAYnVXp594NwdyYy9cDzuRufzoWiYQyi7ZbyqS4VGw2Wsm1VHbBJLH96tmUpo69XGRbYqcbZC",
  "key18": "viyakCqZye5iMVEAoQSsSb33doJqufCCs5WtrN3jEofH3F4xiQJKTtEZhRNAVL9mVmt3aCReZow7wQrHJcVvZdo",
  "key19": "5EFkBwhP9cfureBirrjdbCQoVS9CiJY6Ba4fQ8wbVdW4kcj4rXimPFcUkY42w1jDZrZswNVnNiRxDdMpESWg6uap",
  "key20": "2i4eNJFy1vkQrAWF9oVYJ6Cbh1sBXYkFLkcaL8mfuT2Dq32HARUA2uBSe4NzTtNETtpUpb2pwrk2Fhtk2g3uj6tc",
  "key21": "473HsQMxtSqsMcP5w28VrpRNeT7eRmSpvWbUVeuT9WYvG5Evs82zPiyUQ9EcoqAUkhKdMUAPVfmXNWwn9Xj1Z8i8",
  "key22": "3dn16JgCYj4L8dUuAkwDxcVpZFVCWUDHentSFzpEYwUo8n4EPabYofjAdqZC6uuXBSs7TgGmS2F146TGPm3jdAnz",
  "key23": "49B8DjGpjedXba9xQd1ZwbXnaXvMcPbVxEUFkDnr7PfpoUse1cXYMfH6Lmd32RFPWmWFNbv3YiMD7xwPVDSNCunF",
  "key24": "rDhUYgBwFUf2Mzi9zt7YLxRwnMNzaooSBdWonCL4drGRdeVzUEJ9ZocFop4frCtJ9wVaRp1Wf5MipeDtTMuaSLk",
  "key25": "4paN9RnggTKDyQGV2TPzUyLApnS37eQ6BXB4xtPjXQFNoKzjPUo79d6NeYEq5bycH7UYMkQvAZnAVntoAzL2cfAi",
  "key26": "23hQMMUuwa42tv4eQjapBhLpSTqCk5iMHSq6BaKY897kDR1JTSZfPYgANDfLq5nR4i1oQc1rZ8WSTC5wiXrZkpYT",
  "key27": "5DBjZZaH8Q6bA7vnbKukjAdT9KPoQpy58e3YcmKP7KwUSNmSufQR99hr8sagqNgy1Tustj3msQYZuL592gFKWXwm",
  "key28": "5MD9nwyxwreKrWAZ31tsFbrzihHwnRa5D7wumLEUX31WELRmibBixuJXrZH7RfMELTrSiH2Hx5GECZT8BKEsfNDk",
  "key29": "57zJMnJnWCLxTn3jVsWYy7snhKAmtug2VcjoTr7ML1FE2unovwZNZTTeUJndbH7DSLG75girDqxdj91kKb4CPNiE",
  "key30": "2vj8H12o49rHV35qWq8jzYd6K7pjYTJyYjTxPPWL8X5hG3xG2uvMK7sMu25XdzcsvuQESLH9YRha8NFjoqn9GeeX",
  "key31": "37aTNPXtLf9zXZ3WFg6saLRGgVoXdxtoho8hc8YwtGsPru7LUrwsgGDUkgeymHZV57adTgXKK4jv7ZyQ6AV53CTT"
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
