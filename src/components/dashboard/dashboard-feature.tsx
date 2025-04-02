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
    "wuNs6tcHBaSrqnU3CHWDWd2XzapDLCmT3ic6cKyZJXRWn44HUdmaZEe5wKjCPjeywNtULYVA22fZsd5fUw7gawZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33P6oV2cXuWep4REJU2F1QVhFuCpdU2DnbK2eEsmrFoXeUCLrmUXqLviW1XhjjNtQPDuTQhE2gXjhpUdSw8GUP18",
  "key1": "4Lzo9oC6LBnuYbJPmgprrhw1tgUpuJH1LspU8CwCNjSeKsZQ74zSQpoLR7tD3zotA2nkULudZx2jswCuzsQvHKGh",
  "key2": "26e4giBSpvGPi3nRw5bMU8v5J9kT2FDuVFT3CsC6bHDxEQP5oWZdYn3diBSaNbsvQ1Vg5Hgn4yVyco1VsB1oPCs3",
  "key3": "4PobCd7iCjku46oiHNMDV1PtksuS3WcFKgUhPgyfQrPkgz9mmHKq88LNNBEBR9xBnUEvAa2XSBSe6y519u3h8vJi",
  "key4": "2m4xg3KJmcxvdESofEsBGtHMedsuh1JuUvKym8t4BSh79cttAuVRgcReDzAktzAhX9UmuoJxBwJeXE6metL4c3dx",
  "key5": "3oKMgPXdfeHTCLoxPdDhymzrqQKQNcyBa4Ue8n7ydBoFoeep4AjyqP6XQ3oohtba8QNzQas2AERy8zbQEHoy7zy3",
  "key6": "3TdQqHyj349jjiHsXWyfvF3WyHojdTjCp9AAT9m2Zqi8b9skDiid4NwAUdHgyDA9CgVf8ABGUwnoGU4udcDon47M",
  "key7": "XkCpsr2wosvoXATbYwpXoXzqJKgciXEaGPWhjqRZcTz1t5QxKDtac2qJ6DMkx9vVbu72NiBgNpdYVUgKypaze88",
  "key8": "2YWBo51qN8QS7p73pNtjpzss7chB7cqgDEHbctM4udJPhGsvmvr6oceSXz1zQi7qFejg5P6qNTVL8GQ55NWR4na4",
  "key9": "4sgpyE48PoeQh9tDJVpjqMco3CW6RigEdYvW2C69EN5FBiypBwfRXkPrLkyCFbe6DWpaNfHmDMGGz9nh6i1tmkJg",
  "key10": "3emLAcNqG53sHYENqzNbKXXQRc7t2WmmrxHF2D3jvLbJeiatNqkduwnDw8jRtGsVNNp9dgPexxfCGXgsXYeTackM",
  "key11": "3AfjQ2HkHHvmeBsC8JhuN1DWeV5uHyk53MD5HHFaYNbojnxbzSbFUw1KYaM7b1hL89fgutXPbhPnk8f8ZFwauHBh",
  "key12": "5NaMitE4M8MWUFDc44zokHTEmFm7opUwbKtwX5LJ7aXa8sQ2jY58AVpyY3rddVPCJYj5bR5vFFe3T2W6o1WojAiN",
  "key13": "5np8RtfQeoP8VguwjM1e35vGrkvDrawGu7GQoKCQLgfD7QhJYxudxXLfAM5hiEjjB7sw9JZYFnU65Bq9uxiXdBBH",
  "key14": "432WbhPn57NKPyeLk7oEVMb6ZD6Jgtz4bWBZWoBGu53hkxHL7JCJUzvYyZJ24UjT2iiBmf4ZRiYw8BHVALam3o66",
  "key15": "3e6yLU1XfjYM4yM7M81nPQsFfRiJbnt2Xx1TF8SGB1uQFUeMqnsiera7NaY4W8pZF81L8Skr2XKkHKNoye6R3mU",
  "key16": "3egZTXUtzXk9bY8hzRnh1daJgbPHomUfLsjkcKRcPxwbhLCACXd571JLyPFswbfmMj1vjvUdtb9pKJzkAVd5Kn2Q",
  "key17": "5pmS9PFEGzA4w2EDiEKWkJMxG9HXxextWDA19CzNayQ8KxvvQxRgoLFbexrfNFNQ71G8Gpf78ecsM4eDh8EZUh1q",
  "key18": "Yc6vRaLdh4qWDhPx7pqDkihfEvpigceyyx5rF2WVSC4VS3LnXBjuSJ3K7cXydjZQFXphwPjj7tbdsqbFh2s2dSw",
  "key19": "jhi1dvYiJcS5AZg3igGyCBL7788QY2xJbkLHAxW3Q8TdUc2LzxjwtrM7jnfsnT743MMZQ6d8ukjeXfXdrLKMesz",
  "key20": "5BkLnUgpeXrakaM5jfUJ5GtheLa95A6uvn9pSiYVS1AV1X6UZ86ShsJRFM2V7tGEWLhni3wd1PMLy33T1drgbB2K",
  "key21": "4eiDBNcxT2QMiSYX2KMNzSZXFkHxgF128WrokDMaRNx7ZZXVH2G2HqhVPXLBgmDFPELVNL8WvqKhE9QDqW4KsVa2",
  "key22": "4VusUcRDhFGP4fzqeNqYadQXgBYtXfphWDEj1aNzp5t8o2apJ6bDFCwxVThWhFCMKzrSbiNKvaZdUFtcskq5EtpL",
  "key23": "EDaCYfvAhKeynp5NSw91hxi6kurWpsC4G2VJByz9uSjWjTuPfVNQ842Wn4SBDjCMYrBbS1fQqq34g7kr3Y8Kb7N",
  "key24": "NSDGTQnBEHuzVfPBH7ibvRoL5TvsEEP5up8ixpTBkoYPV7XsRhC5QiZDCzCXaUkc17SM1nQJaWZL5hK8aH6q2oA",
  "key25": "kdJN9XeiuK2Ly1TULs8ptKhP8eWkXRGaiXyZJr2FbFDS5QJY2chK9tvKp4K7quCDGFvHrE7nQXZY7pNc7V4WTau",
  "key26": "5cQYc1va5pcQNYGae1WXFMFHxePnVray473cVaYbVmxQC2LY9xCorUQEN7TB1BxFrqwQ3Wd8YFU6RSqLsmDwoNfx",
  "key27": "2G1C1zXJHYUkj1hxQj6XLGo8rqacDoRhwJpJc4PZifVXJbJpDR9KYf3C2Ue8sHgDG4CbQTAor8HUn1pemzHdHQZQ",
  "key28": "QUSuCMirGiSXPy76MwRskZo659Wf4WzeYDkbH9NfLKbCowtLhXeGtJs6dN1fx4S2qxg5tnY2Go2gEWUoTykKsQX"
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
