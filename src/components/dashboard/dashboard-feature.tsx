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
    "5rjMufSw4hLxifDonVchEvsG818hn26N3Ni8h3b9XBm3AX6dUvPaoLnnXA9ayDrdmNGEASs3JX8cMK5dyZQiLnHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4GzEnzBT5HRHTf5aYRGRUu4VpchvuSrbjdtBw3qPsc2PfhiTLneNqExNZ6rUQh2ihRNndxLLBEdKyb5EkNG1Ye",
  "key1": "63mu88pY2487rNv4GtNTnLjq7nZVJzVrYkwbiCvyKRM3MmLBUsdLMdw6dwZVc88Cq1ui9L16udY4mB4PXaSZAUx9",
  "key2": "434H6FFEjEczG1A5J5cM9XkS1RiCVLHve7W1Q8FdTcdp5W3vXwqH2WkstGM2heyFbCkgvE7rK1pBJ7cyXvukL5Kg",
  "key3": "2vdFannPU6DdYedcgY5dHuBYZU1mUsriJfcAUyf7rnStAEXavNHiWFKDNgf3KkTkHUkjfWQ7nC5ifQnmKdttcPnE",
  "key4": "5QEACQsRsa4P38hTc1ucc1bL2B9Ap1K4WbpEi186m9KJueLf89bBgWpzGrGquQeEpp4g8CLgs44VSQ38eQ9Qmo1c",
  "key5": "PaEnXxNKuuCNppLDcZU5QXkHJzdvLuLzzJPDy55YEGJsDxWffbSWs4mhrKUARes5Cftsr19dfgAhabm1LhVYnKN",
  "key6": "4QDfftHbs5coLi2zTWboDH9WgzY54axevF1v7vDQrR7HahaMxgtwDLMF6KoggQshkEprWgixdn4oNtNBWrXtfsEf",
  "key7": "2rszGbCkjEcyvXD2a11F9LZUjbxuXiUZg4ya1HzBqaCbCSgPRkvcruN5Harzo2LSvsbFsZfx5yK56fxVUKN4f28k",
  "key8": "ebmbZG3qLLEgkwJnqyQCxm1xSPUvyBQ1YXXv8V1vHricVi2iUoxa9NoqXvUTyd9putCvwzhGq9rRyzH5s9xz3f4",
  "key9": "5ySzb3wf26UdFjUUrwGKyenFVAB8MFdJzwKcoA186uL2o7MZttsbeKRBHurqS4BZLku38rNhnz4uX14TLq362hXv",
  "key10": "ykXXb3m2ecmCxNdKzSQhhN1TgjArGX7is7NQmMMURKXBxjJiqRdCMWBgBpSbXtZQNixkvoghnEjsCA95wzC2xcs",
  "key11": "bdZzf4XvNr5HLBF6HzxBvU97qFW679fHt7anGqdkW5kBD5CkVsNnr4KS7dWBHD8gKjjZv3uVfkRPZBe2bbQrB1p",
  "key12": "5W6oM6Vtwg8bQ2ko6f25WRHyJncgXrxo7j9fCvani4jBnf47dpTj9vMahb6nfee67ow6MLzkx9JFZ6HtTay5qLmf",
  "key13": "4xCi3QFXHhG1DepheQ3NNzaH7jUF9TV8TZmycVMMEXHidoZHEYXZFxnLaMJw4nZXcJrWx5SWyn7jLGVYuojozPXJ",
  "key14": "PT34vrQ2wKRi7doLLLKTq2nSQfGSYRkLkyUjm29DKeKEv55mMCRdUsiXCCU2Gg2QKhm8Q8T88WdhbteJD3rzi1Z",
  "key15": "5hXTkfqgpWQCdkJhFhjLBssark7EBNiXnWXhaKEm3KmzJYwtctVg615ovL7MGFSeuskycMqMUpS9j9FpsEhPN2gM",
  "key16": "2cnQKhQbeUDfR3XFnCGNrcJgUuhgxc527G9gGmD6dLBnCVZtBhnDeeDyavd8F4sYsVMuDg4C3HXtHS64ELu1T4LU",
  "key17": "22Yj9mzcdzEC8k3zvze8H6PVYm84X7Lv9TvB3Ur5avyj48zyaMgZXJcMJwPHYsEomu5zQ6EotkJM33b7uSJaZ4BH",
  "key18": "5wbFhDnxTzBuydMpQ3PKPzsL7WWF9wB1Thdqw8sri67R2W36oZ6ZzcEmxju6nATnRrkeX25SERk9Ja8XPyEdt7Mg",
  "key19": "5bLnbFttARp2uvUMhSfhdaie1TtXwcRo1kLMwNMdhsabsEr1LX362jZDvoW324VK4438sjUAZBtKieNrSJbwhvYD",
  "key20": "3AiBBZA8AdfS1PYHMjhvnFyJzm5tmXk9K1e7kkMktWAyEzsmKzVTjbN2ftJJctZ8L1YdCk5D6SH3iztWCcBDvBjv",
  "key21": "3FcivLB9ZqS6Z7LzGhTRw5ZiydFjBrkEEYuE3XM11pWRB1JoxwcHqq6nJ7AJMbokk3jRfcacyZnQ3CRqsZBHuu62",
  "key22": "3vicgEPfn9BiiKgjdMVtBYaG8zV4rV3vdJBNkA4ogWiyc68iaE5pKCEWNsJo578HzEKtQ8RDmGCtp5hczmVGruPi",
  "key23": "3x85x4AXRtbKnVit5UHgMNoarNfjiBHj2JZRPPKZpC9uVaPcku6MznuuoePJerF2y5Wn6jpNo6a65mV5KXjeN1bc",
  "key24": "4Ju29wtfT5LTatXyAXEfQVHcbtPirbCQfzpX16oQzdqNcyqh5eB1CReBmqVVmoQKNr9SNYNdheB8zdHDjM81cTwb",
  "key25": "3nn8aFa4eQFf3dZ8G4LW1XtsWc8xHi819oicQ4F59rD4dKxvbbzmHaf5kBBpCeiNSxR6z3HDATMn3feFgnkUcKiv"
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
