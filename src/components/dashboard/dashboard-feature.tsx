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
    "21LaCnLVCXL7HkhPAfhrejMSKwnaCnKipfmiyit8EoB98MBGwsH1UFjRpuYCCnkXP28rFPB2PstxDCHJm9wFNGwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kywazVxmCYGsiUQq2rDzNA8EapocYpajdLoRVEBhPLWZbgeV8rVQ8PW1L5wdBdcUW1uaWTuC5XXwVf3VBDcDUvM",
  "key1": "DfN7nQXRN1N8iMZhLdRPuAVqJnWqxkn3aMWHcMjJmEn9SMqjZ8ALR95eDZbrJtGFyP4byd2FGXZ6K6QGbmjzNsW",
  "key2": "2QVVtJpzbNJaoN2x9LZLYzkoELyDWbgHiQXA795VPZapmkfQVrmNJ2BCmkhiyVzLUZ8Pg3WqKvW54EG7dNPZhLCU",
  "key3": "4JM4hPc1ZyzNduLzmiY2C1DyQaLBC8moTMVtcu7RSyX4hD3TwLVws78EJ8GSVqPNChTREsdyaTZtaodJq4eLK5hw",
  "key4": "3qytGsbEo5eQWXccBacx5xt1vphRBn77CvVibPvAFjH2xb4za4RyXKyzJbuwqPB7RNRTjzRjHH9CWBo51ss6Y2XB",
  "key5": "4Zk4DS1qRxJEu9cV5dEyzzdo1ed3S6LX4pz9gePzGZG85fHMHcwGwV6MEoBVNyS9MeDCKbsBYUDn2XQ5PYgorbjh",
  "key6": "4DiJBVQfEk4y53RMhH8gnVmN6d34zjTsLpaGRQB9n5DLrYyDXsXBYh4qFvVx6DKDab79rEioWVuGVfXrGUhHEFxr",
  "key7": "4DZQPyVPfE7tYiBDGgGUZNAMPhfLVVN6dxDDAtq6yFeB64ynkx2DiLBWUqBC2Y4uaqPjs1ruZjuYLRdpkuk8sZK8",
  "key8": "4F4HvwtXLhCXvUm7yrsBhDH7oD1yc5AkS7BAezcTLDH9EQtRNBCw3ncvrACaGC9FMf57NPZcwovp28mpodWwJhN9",
  "key9": "4UeD7eJrCoTno7GRSKVX28uTj7UjrmFyPAXk4hoF7EzN17YHwsQf9kQcVQTtwobGXyribaevjiunWjLNDqEsp5ic",
  "key10": "2wJ5HnXKNywcyjooT9SMdSrgq19mnj9qskdrQEQK7d8aj55i8fe4GGvwWyo8pcPxCPqmX3fG31GGukR5pm5o2eSk",
  "key11": "44zsQYMRu7zpJesBS1rGa4xfxTGot3PnqgPcSuCaZi9MnoLWY5VU65GcPVHEUEpaJjZN7WSKoZ4bKNynSY2EFRWb",
  "key12": "2zHyisbqDFT2aQ5ykPQh1NyKFg61PSJJepnj5NMWhT1o5dN5LW3KZVfM1ia7C49sf9GGRCWzTXr8W6UUzvKmeZ8s",
  "key13": "LdSvK39rvmox5Zrcgkctaw5nVokUBA3K8JQkgPVqGPoMfVdK2bgQzZLM5ghtDtS53b5xnXkZwNac6YcCB8n3qj1",
  "key14": "3V6z4iA3Aok5FZfJs95tgCDFe6y1Q4cB4fxzGS4w5srxYrB1C9EyfpPY3cdXBkVenf1cwSua5EbaryM3usazyZe2",
  "key15": "371jZnzG3qu1J7vtg5oZTi7zCqsMqgoimBS6L8mrBv5UHqe4jEqpFkA699DeKbGVGhdRGZ6zhwWgsjzHxgTfmxsm",
  "key16": "4zYyWqK1uKo7ueXfihjkvWEXjdhzq8HEhpGXjQRAdZ9rHB9UewLUWPygpkKo8iKsApVygoDuyFq5DpuovWSd9tZY",
  "key17": "3qBuafrTKT9YQrHLDhdjqMmFEMHqxZSh3HZCaV4m33SFrQmmSk87iCG2J32XZyvTtjN4opnUX2KK2b66bHT8L8Pd",
  "key18": "nUWpyzTBZnav6yb3CpR9GahrDsFWw6pYQs6VhXbpYpGb5aN4MB3b8S4H6BG2BE6mUBEdfBWyprGrrNCG3MkM66U",
  "key19": "rSEo5pB5GrA7Y9ERknKDHJkLoqg92hASUTzMZm6gq1jGofvdjPK4vd4vAD78t7krG3ihnxhkPKJDKbmHnuFbFP4",
  "key20": "5Krye1tr535RprhubtCTGXD6C5wiK6ZfqqJkTpevsh5UuZUFLdgQDzMgnyzn4Jb3sqPWuo5WcjeiFzzkB9HoPPzg",
  "key21": "55FcHdHhvsNbyCmbwzBLHoZRNqeHtaDvr51FLGbAvPCFPzrKVBbdhtE8WaYqJbeX7yPQaLdCjwyxYxVzXjHoDz6L",
  "key22": "571PKeHmSMcmYzJvcJRz8ik11Mb3TN8bogWtUQkPcnWVnih5JxVGT4gSJsWWoPomEUn46NBqiCUhWeKEtrLrnZ1Q",
  "key23": "4EtwhLdmD4UEzk3A3TqV2NbMCmQ8jsfzP7mFEN9151x2Fg3ooaDUTwN4e3o5dbGeutC5oN8akE92H8Rp7Jdt3oCt",
  "key24": "RMUeKTaY1M8zGqNRDMVubiFnWHEfbj7DC85hj2pZJ2QLuUSt24HLBDtDVPSgeGS2g5gsp57gejAWSzvt2w7j3K7",
  "key25": "2VNpvm3vekPqXePiXGmXUmi9R88Rdxdmv9rKiXZb4U6vCaCHzRmGeQuoKKjojeB9yJoDAqy567vjEQwbd1EZvrE5",
  "key26": "24RDGBTyWdFuD7LH4XjAvjRNdGdjKyDchqnrodfSKYRZ8F8L4ZN6Ea3DHVgQD3TmDmutvYep27eNuu2nhaemaXj7"
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
