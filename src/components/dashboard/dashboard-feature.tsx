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
    "t63nfBhJp4zCySWdyFjQNctUBraXVVHuAZe2scibhck9TYQX9az8HuYje4LKmdh9WDY5sefNL8K3r9syDyNW3dQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsdM9D5c8QNumdBLShpB45E19jSQRvF4H58a3vx6mFJSWrbByncFi52yFUBHCp5GSsK5xvqQztSvVJ9stQP9z1P",
  "key1": "rPanAkEMcRPpoYxBvswf5H76GfvR9gjc5AohjzKwhyhx63EjQFm4zJrvDyyB1qz8Td1o6pqoo3wQx4Z6wiFpEoo",
  "key2": "41nNgLJEdAELTKUC7ScFLuFnF5wycMT4xCaUvZ713XwAhQG9Nr7YGsREVkRoCDQgm984EY8g4CPbenpeTJUaVgM5",
  "key3": "42zeVkLLVUT26MXES7EaDfC8C3zKNvJ8f1R3MJPuMKri8sfzsaT3r2e56PKAMkFwQEFm6Av3vWaurhcYXRV2Q3NF",
  "key4": "3KkFaYrjx4296CFsCVyXh3WZ57yQ5Cfz2EE7SSww2kNgY2hz3NCEgpFcWS15mJNSNHqnELayAhgbkdUBDmuds9jL",
  "key5": "4UuopJGXZnx4BYgvsxypUjyyFDRH38DpbZjJ7ShJtbRLdbTcZsGxWAVGhKurT4u3NNvK9Dz8ac4NUsAKXrDX9XUz",
  "key6": "2J41SN7LrG6dNWvicH9DCraexeeuV61nW2qbuebtUNTLG7x9yw69FobhEwzxdYCyaW1L8yuGcwSo3VqbTiENEP6E",
  "key7": "3PZfKYjGJdt3TudXnCDjdWdnK1iui5W56W1HLRvHLLNKagUoLjF9wzP6192sWwzVMgLUaLuh2Nw5rdXenVSgiYmi",
  "key8": "46yz65HbYvvTSdoCuEwYxunYb94ubNvYwQVpjmEtadcadkXK12v9qPNNF7zktDLrKJf6S7TPqzMsBEaegTs1arvm",
  "key9": "2db5Gr63ZPeauFiykL1XvdSa7Cmf5DyaU6s4N1omfBP2rfH9pnisudfYJHFBj5W5WfpbXyUyDs6eCg4NabMDzPez",
  "key10": "2y4d4AiDUKwB9nCfvmarJANXirjXo86c3gMfKQphPj9hWPu7WpUXEPXjiRdRuMY9kbQ1P54UKEf4r6uYfmAwapLH",
  "key11": "2tGpoG9xg4CKosudm1dEjY7Bn46BXyrz3HdgoMqUkp8R3WiuGPxZeVYbS2RU14fLvR8fb2oS9GbatQ4tS5B1MZS",
  "key12": "3CaziM2d2E8gv3fvCwkNFANRmBoqA4GFrgpQJMg6fwrvJASY87ktXjv2sv85kXn6GHKKfzifHcQL8bSFhb2o6oXG",
  "key13": "5AFmywBLnZPzCQJ3aoxZiEcNDAMpagTe4nfafsXAhfobFkKx1PvcQmpf6osXkV2rkZ5Vg7ExXAebQE2mK83ciFXy",
  "key14": "4MZw31ZftzptnZMxf7dz2vrSSXmSPoDV2RJc1FuqPVQVMXYuTYqtaK7tTHHk2KikETQqG9zC97RgKQkJTdsfMMHJ",
  "key15": "wc7hba2xcMWda1TvnNiKQSDqyg5s4RnXYaXc5zVmycWerBRBTvJoGD6hTidHMcLRrUMvizB21TqW6Rf5HGRNGNq",
  "key16": "5zkK8AjmqeYCuFNogwCWuPjnGcC381SGVXWRnUrkpDNKEJCgE3FsT3L35HxHEWMoZucPLk5EvLMMQaecDT5zAjP9",
  "key17": "2H4xsJ3fgcrdysjZs3kBXUY2LLNYJtoc4CvUCQHcHP89zWDgrXei94EBCXp9ZRSW8QpCqvQP18QizdsdFUAzMGQt",
  "key18": "3Rxy8Avzi2oks6Mgc2wuJ4EFefJyhvCRTa7SSm4spKjpfmpsrNbwFLAJtCShGnFMiNjpJdX2MGRRMoTHo7nZUNxA",
  "key19": "axSLctE4o9UX9JwtU1k84qHJrn7fYJMUV4dR2kVx3R7RRyicJGWZnCAasbu4zJ2ZANVDuDcTQ1dwvHrCHE834eH",
  "key20": "3ndDTN4pqi6PTi4DEdSJHYT1t9zcx2DaqVTiKEFCHfKBER8ciNRKYTRpPb4Ryyt3yFuiXr32nS1YQnFJUiar9yQC",
  "key21": "5ioAy2skN84RNYr3FMpyYMGTEKoVJsHwUHt1VTaabBuHdyeFnLuaAfnfVU5hBE2aWREUq3g8crNAs9VrdZjM7NJo",
  "key22": "5fJjo8wsmyshG54x3yYtBrCXZw7mWXebivecy97rsDycRWU3MS3p6ao8TQumjXoo4Ku72ZLzAf5fi6eexMZjeUTp",
  "key23": "3Zkfwz2JoVgHzmPsEdpHvF72tGDXc5gxqiPfJMdo6rSLUvRMVKeoMtwaea8KXwdAmxLwNXAB2fnUT2G4umVoxmD7",
  "key24": "2TVwem8E8xaBkRnVrcCHjZ6vHVLURHKBMih9topWFT5B8FEFWKRKWDHzhHJU2rEx9inb5rSKKAeJe5zGpJmvfvce",
  "key25": "5TXyaW3dQWZWZ5XHrh7JSrQv4Cn9MPedYn7EbFQRFmcGtuyPmrdyiZzukM1YkLPH8TXrdKfUHQM6ZNVuKG14NfG9",
  "key26": "5kcQvfVkd9xmfQ8AUJF6SMxK1EVFrAx2by7fy1GFHdVAtnQAWJ7vxwVEV6vJ9BQ3HAZz9nGtPUuRT57zy5QhTCdx",
  "key27": "5RzhquU5cRg8y4nvBtP4kjpT2y6kJHtq73QeabiTEJ1gmM65RM6k1nqDXqDY6cA7L5mb4NTmxYV681dxKdr48JLB"
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
