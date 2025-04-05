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
    "2LNjaxPMRzeTyLdhFAvMLHaTmpnFgNK3neF7B6GnFgfExRkHPXcvUczDfRWrW5HmvzQvcTu12DaipfzaVWk8tiqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RtyYAM4YeuE8uQGkKJ7HRXBqToySykj8NewQCiyzcJHccpxsPATy2D4z9Dx6vn9sGr3BMkwi64gQeSqhj1T3697",
  "key1": "4GKCr7stVdpWY1JQa6MmUCEbWqYA1Vxjm7m8V4FPp3Jv3QxDYsrXoFdqcbMGCX4A8XSGTg38rW5aiQLM5GH6cpnj",
  "key2": "56rdvZv1dTTWieh8KtAbTBgUhzw6fNNRBDEREpHnyyW9oNE2TfvbLjyF4c2RyukkF3YgvknPQ8Nk3AZL2oGCXTBR",
  "key3": "5DEGjCFjYt1sPVjPg9WwxEuU314BWHquN8skis8fuWCB1nEBMrNGzLWTzoqiAQPNK4rLRzRjPaxU7cHw8gukpe8j",
  "key4": "644qWU4YCDkmCM3wyjxcJdGFKLCwQPajdNF2okgonBJtYP6nwf2xdem7sURbBnNZtpCeSWnzr9mcWsmyN3s6ziBx",
  "key5": "2BSHUv4PHUFohubU8crDqXHRyVvno4DBTgwiRf7eDNocqNdHriqbToEBgk5uZbQJDmti7aNSsWFxNsSYknK9B68v",
  "key6": "4si1gWnPUf2Z3vVcaRewh79nXU3GDod68otKdwJ3CcM4AWvdnKkRXBB7paAhuno1xL2AdaE9JcaRyKkqcHPrrMx8",
  "key7": "44mdrovn4CjCRX8vaYPhd493aNMa2njwNsZ7YQLBXG8TrHhzCeqbF1HfmJuX5bsa7oMBDTShmh8jJpWwmQV7rJ9w",
  "key8": "pZAkksuTXojxJoCwqELEfkYP7b1hseB4gL5A9prQuJeuqgLNXiwjLAdT44vXo9oKvf3MNFHLHbeRQ4UctYvtWfk",
  "key9": "5CPAsYkiQoe7NhW1EioT23LHattroJkukNbJWrZpJzwjo7Gw6tmFgqvDGzFthqGrST3MykdWXZsJ7LL1egJ1mvd1",
  "key10": "3q83QjNBwu3WYmtUt2UWvCL7FB7jzTH1KSiypT8212V7wgu9y85veW9SpF2vtTf4BDBjWy27sQEgy3H21NXM8HJD",
  "key11": "KwBwZvFpmypLMvSdZHtqhMkLwnmfQy3yuLTr9t8R8SsD7nUWLHj2BDtHmKTmuxDXKHgGvVYNZpnPNEnqnq2jx7s",
  "key12": "3RW7FtWwb8QmjT1gRL8bzz99W4WAd8xNCQhK1PKrmbF1ZM95HsfUDdmvpRLKRrKdV83C7tJThZhaW7yKi5aSuSiM",
  "key13": "29McgdHi9GNeZ89YbmFSCsN2hrsoMLVKajy8MjXwdTWQZFcYgW8B5A6DXTfURJtXZevU5hmvGTK8heqsPMFUJgWd",
  "key14": "4mSnFh4G7DjJMLz1h8SwFxvec6Mf4ykqQc1TMNwfZ2GN2LQV6uGfiDtpacEATXxQXi6fcLpx5BTakYdyaWa6JN5C",
  "key15": "3Mh5XZZve9ftp8t7BDApx8n4E7wSwednCoKsJgsJ1jJL3V1U92R22MjZHrTpM7XtsydSZikvoNMtbVrLRFGLqvB8",
  "key16": "f373BTpQUyrchGYtKyedpVwrT3r7iyiEfzRmwGGqjvA7VaL28L5nWajoJpDxaFr9YScyVmg6STtxaHhGGbWQnWR",
  "key17": "3bajXuMYsD34zWKuAypCQvTdFeEJRGpxBKhSUnwHoRh7d55fhuv5SEXC2gky4dQsmkVrcnQv4ftSY9tLF76ebvBB",
  "key18": "5MuNTwNb3rhpDjGFV2f1anLZmAfa3c7essWq1TPqt1gvwcfWhVDmPyVSCVtgyBzb3utvzqb2LYkXysMDcS3dRBg5",
  "key19": "3pn5h6U8w5qtrd8S7FPdMnnKgoXedZieiuCqpqxV94rxJoZAxARpGydPK3oVccSKceDUuUPcQm8tC13MeiWqJHSu",
  "key20": "JJk8M3K8zpagBKkYGnrYr8Z4ARqwZoKBPZ1v2Pq353M2sTqaSJ69TwQKP3QzXNc8tRV5scL1JW8BFT6dHezAS8g",
  "key21": "48FoewQrjVdAhNguqywVd3zWdyYkfUJz323V6mf9G9gUo3PW9ZEpoBGcwzhVjnUd8aGm3s3NX8MmPW3B2DxbrsV1",
  "key22": "3uZjA8n52Lz1LghYCfcg6Yu2hNhgp7xnbsbqxEdvdCW87BVjiaeXzcUj1eQNR9YsL4ZxyjR3jDNSzx2rp6AAKU1",
  "key23": "3P9UX9tEDHECCwmH3aexycA6Kmfq5A6Buzyer7bcoyU9GVsTfoUPcXVW7E1QnhgS9x1jdsPcdh7tbzvF4jbHKqB3",
  "key24": "55r7GT9zLkcL2pjcSaL1VgarXVb6Ff1ufzR7tXcjT42g4EqQzGobH1R2Uy67uk2oeSJ3MFWcNQX5oV5f73tGyixx",
  "key25": "5L5XtR4y19ZzFautuMLqPx5sPGq8t3AiszFZ14mbhyhvGhfPXUrfJuspfbUdDVE5r4SrXBYpbjGkFHi86ncZ5Fxr",
  "key26": "2iYbrufBPzPuWpsywrzt9K4v6g94R3DDgz2t5EUM3usszhbyJDf5XNFbGwKTrAXeks8VtKz4UXxRA5UEiFeUpj2M",
  "key27": "5fphmrU2MHXvWzRJB3cY68tmSiHyYJNfSj8UKdkzyEJEAzCQbsUiPM7dZpsUqL6LCrb9RpVPRyHQET4LkpATzrAR",
  "key28": "5nJaouTuuztxzt7XSbek4GGhAFTFVFPRRYKbtt3TyK25UHXHDokjaJ5kKX1Pn3gTh3JPXR2xY2Z2ThkXghTytgk7",
  "key29": "2mHKoaniFYeVwMAZf1so9hc4BCXB87F7Jb8aSwtK2nLwSMGM1CV6z69MDkHJtS9qRJUBoyeS9FZUFPrRBTnP3qwt",
  "key30": "221xmjJwbm9eD9gvcn3HhqMhcEQeBJv17pYHBrWhfrTXzPPQhQ9R4Y6tYzmgm8QMVqPLZhZShDfwLnFq9uAnQ7zq",
  "key31": "65ZKa5NYqgMWAN1zu1NcjDmdHZfTjNhFGwbhHLmtrX3ysxdWYyn1NaMgrS8ruwMLavXPdYfKhkgaqF8ZGtxE2t4Z"
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
