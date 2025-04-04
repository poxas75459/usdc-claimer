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
    "CfCNMa98ri6YYYsxCXhgPt3JWa2TapV99ZtQZkKoUSyx5XY4TuFFNkJvhW8HepWZJJR21uDRySiFXA3kFZcoYam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FfPzhAnq51sfQkTi1prP9Gher7VYocp47cmHnQajUjHf3UrPiGQcaz8N3v5PKQv2jRWAUiwAt7PZrXW9oxdD4eC",
  "key1": "27VePxzFGmpoQGJ6Dvyab1RQaEfqEpWdvqNXMQFSNY3w4M5UTA8xeynPDVxr67EUiA2d54mHPuudfL8jA7R7fxmp",
  "key2": "smoMhSgSBKy8Uask4CkjcCqojgGp8WhtRTGBkFPgLqCUiZPGiLRpzen9oNtkz4LXpHnsSeGNEEiof7SMBPbhwow",
  "key3": "hbz2qpxPPy7bQe4DC1g8q3jpiAv1DJFDSjmFFTrgVNWnMcywcuXY8RKYqCvqkdhNdbSiWG6yCPD8N4vsi25Ym6h",
  "key4": "5XkLB83u16gG7vhhyAt7tjzJk3BwurTEMKVh79CE21jZ2d5mpKfvieNd5GwUiQFqZuQb721D9zs4H3K82qmHk4jy",
  "key5": "2xkdmQhkoN4z3xPo91V8t8qxBCad1sxT8DCnDqwbXk8x3JrLMTyZiuHn1Up8qwszwd65A1quWLY82gP9vEpBTXGd",
  "key6": "2XCAENNGmtSeKTjQEWyPQphHAU2dcS2hRc6weNFvxhmMK3cGSQh7DheowcssZxFYzy5Gw8SmknqQbUkqJRXSkbFS",
  "key7": "4nqU8EDM2mNdYk6Trs2EHPSJkQQXseDJVwPref78WRcW51Nof8bfpHBHKxxvhWomNCxzcnfNdH11HFHGJbKWx49x",
  "key8": "52ffo3xA2qxtkw3c387TFTk87iu8XhYwVq7pj9eNGgWrYhhDbYB6w7xcYHf2de87p9k4RZBeQgYaqkRt3yvaYPqj",
  "key9": "5tyVH2TijEJwPgE52BcKW7Tpp7xQV1w13CjVvHocU8Euwq4Qp4Pus7nBgpXmnTajGLaUDLBbJJurpE5cqJUb4xrE",
  "key10": "5cmGpJUeA5UAygu5Et5tvhMnzn8aeynUPmTBJFm5GEj891DXWkyDBsfHZVqgmLifxUwDr9Z7T84PEWARxLhBF16g",
  "key11": "4FFaMx1KAmqX1i85APty5mQsnh5EZGNrVXjBs1FyfsuPAJCCMKWoeTeU4HxmrPp5qDAs9iNDTaFf19Hw7dhFphRw",
  "key12": "4mVSFGCUeJGedxaXmLHAGTz9S2WPw2hcfsAoAjFmYwXjHjxZNV8W4veQmbum3f1WdHKVEM2FpqhbZ2qLnKxSzxGw",
  "key13": "FvGYECvGLVPZMqH7zrPZ8RC3wLGUrzfGZyNPqEfGu7o78c43V25LVFCBt5hm7vtCUAuJQwpGy94xS2tT7pyZNay",
  "key14": "54RA3RSTAVa3CNBcQ4nNoJf879Kr4nVvKJBuKLVVtb12Xd9H3CsBFqEjNisEZ8VFWx9PivygMkcbnnf7TQU6d4Ab",
  "key15": "4gdyUR1CJQx5mXpXyGeEJdVJNEqQEfdwZkiu5AbmKJYxXv4gQutBNYGTcydn9d2s4ZCazZjiioLWtMubGbyA2h2j",
  "key16": "3NuB1yYQFzg4nKP7RT9LTaQEVkrkQyCcEFqV6W8AXRb5etFssT4rBSVMCCakomv1LkVn6p8C6fxRaP1Ru1isBZf6",
  "key17": "3XEruiGzxQj4c4bQtyxuLoS17KQVYjfHJyKqrDZ4iEzMNbzFVov413Wr2DRb1oDmCGS1b553x8UdmrDCytQKjwnv",
  "key18": "4djHcXFYot7XH8LJbUbK8PAUH7HDhQsd64Uasf3iyarghFb8STKVHKG4oc8gYciBQn3qgphCe8Ze8sLPZfxywhVs",
  "key19": "4GbM4fcySAynBALtuRB5QUp7v4eL72R2Bn3G6ADPGQ3T8LusZnhCht3hnbkHW9HtctSUJByHShhGch4UMHmq1wda",
  "key20": "5QtZYZDfvbQ6KHeKp7WDV5nPgafkhDL5psVtCnHbo4tPpyXWNvhLiQ3vS8nbbgxneDnndzvRCcjQ5fN8CvEtN9Sh",
  "key21": "5cwAsQYY8JZzdxnohofNJxf5z3iANNSWofgLdrigUZFas1BqeUhVukMQvj6rcUAtH9DQ9tyc8vP4mn4ukw2Cd7so",
  "key22": "24K5N61iSCAERYs1CEnex163GAnMWnqCsWtZDyocBfTLyDVF9RFcBxEBF7V99Dx3CV37focoEpvoNqASnHr6dMsS",
  "key23": "5RSfVi33yiwpvKjXLawa3zKxT4SN8JZBfHF3fHqV5eG9zDdnpnAtyF6C9sqxVdidyemMRvsCmvgJeDZA8hbb8DBY",
  "key24": "76t5QjN8T1Xtxq3JUMKuTfRPwF3UDRYwf2y5fqxquGd6nF1GME9FyUr8SUS6gb6WX3JMMhTtG8LT2L5jEeN1pjB",
  "key25": "37KNwFVk22SbuhjrJd2S5hRFQWBWeCPyBnc8KYoadKD3rty2DxcFJoRdrGmkX3tcs1YHGGTAbz9L88iAMeCXgHJy",
  "key26": "2R9d2htVQBF3E4ExCsb5KRwBALsTpsquCBWt39GSqtkYXZMx9c9mWpPHU5osDSHGj3WUCv7W7oysANtAbQgZXb9W"
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
