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
    "M6ArgDGzeECkw4pDLcvPWU3MbxFYEi9ntQ4vZy3LzA2uNB1H3k3Umt3gU3vourQ4Lfgxvx13jMkuAhJpbLCwRoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nm4jEtetbkhmTiWP4sEEpucGqugJAVbEcbJktWFowj8A8y5fkWRunTSmKHoAYZoKiuCdMh85hmExMRzoRHkwEgD",
  "key1": "2Lb1kiQgiACaM82uP6DCZuYJ7aBnFnAumGPv3QWe9L4C9wtAAwJmLk2w6t33PxeZQSKUb2aDRR14hHnJwbKJw81s",
  "key2": "2GrGBMGDmwHHUf1peJjZyftKHsCw9shAdFPVinXy6DX7e3rG5zLcDwYX7kcjEGu4hyqu8yGA6ST9pXmU5D6w5VND",
  "key3": "2GbU2q8gsrPuzRsy9CX95XA4YVToFoNSv2jfLyaD9pu9eZpLgiewtpQW78VDyaq16cCVwC9Cx5ZPysJee7RcKJY1",
  "key4": "ihYpCPkj5fWqm51nV4hjXvENYra8pPNDHtZ2ZEjwKUq9Rt5v6w1qTPmySPiAuGq9ieUBs4AeQqA6DydVrh2DCjA",
  "key5": "4e1kMxhkxGbikBGm2so7h9NNH6V2WRC89aeKSZWF5BvPBG3EFRx7dAdQH3GwE3xX8DkMo9JcjHcsVbNQKaJBMDJJ",
  "key6": "5tWRsTDKDNqkSCnmuPTiPLhurQioxJx9dVYU7L3Nz5mqryb4svuPiyRi1AFqptYBWBGjehpuanNWRDKHRARe1EgX",
  "key7": "4oiZhsgqMPEHignqRLmCGf5VZ1JusciyMJfL2hA5LLsFQdtZMDidiqJQxD6cA42gMmzKqu4kwEAH8anrV7txbMEu",
  "key8": "52YbEwnSGsMnW51GyZLMcwVmjAbQM7bne12yLZVdnjtHfcjnWQJExPq9n91okteFG7ctyzycVQwnqqX7aQSHRzzT",
  "key9": "356yA8DzJPJvP8VG2yLBLgoduS5HseiCGvKaTGGnNm7xXn7naXinNfx8ecT64BZpFET9W4TBztekMCw3anrPGg15",
  "key10": "4b99HeaZ7UoEiKdZoB8WtSAWXM1ik4ZpgV5BDVKGWDBw7eMW4jTgWwLDqhfwpPYuvVpFmUzzVojkVemZAUBLjhGm",
  "key11": "3PbaYpkQi3VcATwYQaucjwseihoNYyeUBn8MjTx3UsLKe37HdSADwgTBJzJeWVQbD1VSjGHDbsDRn4sC4xDJAdSL",
  "key12": "BZsgriFqvxeUdvdueCJU2nip6m7pH63PC74wq1AZBJpYKK96ZUfSwJ6c996JuGzoT6999nrQqVE4ZanXmEvcDxN",
  "key13": "5BaUSuppuwwKgQjQSUAeDZeA4GcT3qWD3VtatLvNufNceuC4N33hJZKWtPz5BjJ7tQdVW7Gb4htyD6TG2Kqjx22J",
  "key14": "5tEknvRaaGuY1BmtAYoTBSRse1mSahpgA8YmMXoXwb2R8fn7hoqgJ1cMPzp7u3pFHs4dfyDweGEs3BPuKJCTmwsL",
  "key15": "5VxZpG48JD74vVb8sSMPuFR1Kgs6hSFZWWqrTjCMGURuSMn38uH7UvcehiuMvmf7sTWY42aRwxnMT38LL9qEPPjz",
  "key16": "2cPtmZ8MsU4fWJB8icSEBW52HV2UuDAntFHAg2ChGh3d2niRcdFGaqPCgFEiTKx9px7DzXLvgdPVoy1msRoCif6K",
  "key17": "41spJcCLDzsSEEhEP9AVsyo6YHcTwTDSCXW8cSD4sCHLTq7GPLbybLC4p7JEhCbJ62Rz8WJyAwsbPcUhbug9Vjxv",
  "key18": "2b5Xzpx3Lq6rmNkNnDMSnWJMSyzZRDwiaBwRXQZJFCtYVmGmaWHdf5psn1N4y7tUbw474aX6kmEo9FWPzd8r6zNz",
  "key19": "8QFeukZLhLaqS3xThMv7j3Szzw3RGR9iiuuD1hFZWNwFKvDms9hhSZRSNgtUZdBF92mG7mnvyBNi3EJdxiZAMti",
  "key20": "32mBVtTf4EnDzhSzSKQZTsZrBKUYXDED8UYZGbdkp94Gva4nWd2r6L71mveY5Mmt8YUjiWqcueMQvhPZUMEsNRJy",
  "key21": "ZzAg25meV9UebLtmi6aQhJqVeypvidFMwWHWEmni6CuyeqA4yWrjHCPsm8EpD7ME5HXUTqbPvUNWjEsB3RNWNZ9",
  "key22": "uauuGAawSmWaMYGWzfH2sjHLUAjEM7xy6DuJRktS5VhWFehypmb78CLgua1rHNJJKTu3W2Avf8DaFCJwTHJKh96",
  "key23": "KTejsXP5tKoREMzgMFbQmnnsxzDYLx8NNAYskrhF8iXReensAspBEAtrt2mK85FvzL7XJNLZ3WrPYE8xq2ywTx5",
  "key24": "5WSQN1KvkjQV1pryrdEPLQ1vh7AweamTxECNr7cnRyZQpf1qYbqFA78xYhg7jx1ZijhhnaHZ6E6zHTC28NBv7Zmp"
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
