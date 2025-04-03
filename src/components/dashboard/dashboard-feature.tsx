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
    "3Bmh6b2ZvozdeNir5ihrJhkA9HMY92zyy8ZfFCqUnRym2ij23ggnz52xHNG5273Wi9NhyEGYmJTb8viG4BzM5YMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJzMM4EwSAf7QCocUeBKndYNERWsmvXaogD4NW9SCK5DQE98dBXqs3aXKFsekgNdpdvuF6adcJXNoqtyXhXTNuL",
  "key1": "2FRBrpCwnvvfQSq9MvC4b1VNT5S93n9VjgaDXYJAntMkP3Mz1V2Y2NiTGYKmJB1jPdgBThruoNXRrGTrd7nkpvgL",
  "key2": "5nc6u39qQiFJefFyYGuJGeQ96a83M66hHMZqEjyXvsuKsoHgZ4AcEVBix79ZmkY1pqvZSLAD2vjpEUb4Vf7MexEu",
  "key3": "5nTbqdC1JbZwo3TvrVXDzqTBEC9snRKWtxjyZgh7KQkgwW3QaYTXJDbrbA3gtJeysSUc34e6PkfjoSbn6vscNZ42",
  "key4": "5gKchqjwWWvrxRrEfCSWxT55kBjFrnB5JVn7fceabQDLeEMunNxSFpHZCr8m1t8hihicHykREWxLn1eZxa2233Jg",
  "key5": "56kMC1Wa4bp9VjT35NKRAkQxbwp4a2R1fjJiiAna5Hden2uAKtaftVSENbcyMWxjUFnhrKgLGNw7S41mw8SrVq6E",
  "key6": "3xD2o4gmmveEhhPJ223UZtHPo1PxoLsaZDLS5jbYnad44Z9ME47DiHY9MG2tJBEghafRNgFMp2JbAdYbwpZWUCLz",
  "key7": "JjSV1w8ZTJjBtDx34T94e42LioKWHCyr6AHAexjHcWFaGH7mfy5T6nG4Eqs8Q5VuTkLppfKrvLcpLV2TM4LXADG",
  "key8": "5HwT6DEsvqq3SVPkotE22HGRdb165Czarn6CqGUyPY6agUNi9uB9J5JnDVmrmvN7Lic3prnr8oKS88TDEqecvh9u",
  "key9": "3kujHhV1d1gxoQJQgLYyzCfNi5eVMjUTL7tV3Ro7RmuhpwxSTYS5NK3pggd9PeoAskGW9JW19knycxiu8adSW2oF",
  "key10": "34edsFW2Kv8CK4Y94bWaKFCUsnKL3r1FPbe896TvUrMENeEMJ9saf3RWwxie588Dik4XoJ9a6Ak77vtzq6wpsCiD",
  "key11": "5gwAdKDsFmpiNhMtnoegVYeB3q59FV6XYyjajrAgqv2LLcGscLrUybP8y1oGDRfzQxQUEFArYcjSRFero4pzEt3t",
  "key12": "3YwwH9JgpKUgSWJ7Ch3YhYszATPW5Y7T8BGj9Lms7p2XVLMY48XGYHR6hGMRD99iL7N5nL2LHMMTMt3vLXbQVnFL",
  "key13": "61ZkRd8xn87GmvD9pbLspJUfdTETqxbT9aJdqDA71CmHHdoJdPsKAoeF8ecVoEcrBA2Ssfm5mWcAK74UHSRhPRqT",
  "key14": "3ZPHqYkhagh2Ma3ycMtxQC818rbpdWHVestsQbZ6PP9ATdnnX5zUtaHCdgFHzxx1txJiF1wV9rHqUJeTMCc9o1wT",
  "key15": "2cYRkpjbdMZLJsfGUiBkkPw8xNxJsRWfvSzmhCeeCea9ojQN5grhuEDaN276WxUjwHyoDp79gKV14jHHJGP76ehR",
  "key16": "3ChtQJ4nmR9GPwyjCfKBacDGANqeSTNpQxcwGUQ3UMbNNK1vMqK68xCuNtdCE53wj8xHnZtGpYjqf6VVcNtYvpvF",
  "key17": "3dajJNSmjzZpsg87Q5zpWeGiYugvZY4dq5YJx3afgqVt2Wzw9V5e7p99r2V9khkbu9RDe6tcRLtuxhrqfzUVER4r",
  "key18": "4eWyFcwNVJziepKrTgsVeVepL67Dhrmb2NYcqnNJe7Vx6Et9ZP7VshgHbfpsYERQnHNwCJ6hSFBzniLFYh9iUUF5",
  "key19": "2JhuiHi2mfYAKgsHfoU6w77jxM3jToMQAn6qbgDqmtEWu6JpJFfYjhwDgNzdL7HiQwiU6TgLPDT7PMpYo3dFzcKg",
  "key20": "TLv8X8LWz3mLAeLxY8xzUocTmUy4dMx2e1s3mm8m8gqEJqyeDBgGRUtMgjYRYZSmyLuY2BHTZe7MSkugW4XBfv5",
  "key21": "WUuu8ASbRjwG1hWwwNN6Maf2UF9wjrqAFyQJRkLY13Sy6ijngmYBwftBQD4ZV1dMdxAwkU3yqko4JLyrdPqLdnv",
  "key22": "58VvW3S36im9sk5cPvBtBsWuewdXGneosVJi3USpgEX162BUVa7MQtJUNq2U9zaHkaK2fmrPfXgmSE1dJJ9qmFRf",
  "key23": "ZinAsi6vQFMP1RfxMNdrA5RaQbGAES6KyozUxC5rVveswSDKh2su3sfkUkR2FAGBGnzrTrwYhhYSBYjAFXDvDtS",
  "key24": "jCfoA5aNZ5RqMCZ4si4VmnARSVDBFGPhvFHEqT8eJPhjEyXESyeg1TsZ7y7wdk4GTTrpfbwWKd4uJh8TPQFZxg8",
  "key25": "49LirFEHcN8uWGt9Dh4V2dnckNmvDHxqELkmtjSk5jUM94skvAgZ2CZMi6fDuTSvsvtRz3eJs8TYTnbpkpJXSdKT",
  "key26": "5hWnmSFQJ174vfKFGuWA5yFu4FYt7dgVHzpyxYdTy2deYqwiwtePLRZKMCCYEyjJeMP5jNU3SxePgNywAMQNXvve",
  "key27": "dihJVj6evWLpFhrEirhXM32XAXrDvtGqmAKazgDaVBLRmh2BVt16xKdPgPXhAqzNWfJqQAqDpENLcCMkBQjMPxP",
  "key28": "4thCRN1ztqNvNXGAbTf6Pgj7WpfxvmtpYAH95jUogRjjNcRdrou4P4wo3F7gS9Q1zPga6uf59FUDmuabJaJ2bXn3",
  "key29": "2yAzSJnzqrvLNgskaB24ymoaYngJp4rki5vf13MELVT9a5D9EyzRjA3g7GA9uUPsD1qTPxJ77NTash9fomBPQgGd",
  "key30": "2EbpnJHk8U1gj3ukhWKw2rzwMCZgt53taoGwf4LUB5G2YZugedrkYVp4SMjei24YLM1gYS17SmYYBimovjodjVYu",
  "key31": "3YCdptvoaHGeTDvvzWiEvW6FZhZRrNnsn2nopKGrKpV9iRwSNQSF94udfrGDrx5cdFjsczDmqFqnQF1CJJyPu9r1",
  "key32": "2tKqhwm9q5cydcXQSnB3CxdSZoepV4KYwGNYXL237YX17Rvndu75LQHyMXWpMGhkAX5fx7eUnuLQsTiw83ZrhWXf",
  "key33": "2ZB6RWUQNujGto7eVQwAcLoZaVbZHHSrTqpkcJHX74pePobEkKFmNpDchHD1kUasmkwZ3SfhGSkNS8rrmgDYndtD"
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
