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
    "4EVb5CLnbFm6GQdBJ6BFR3CCB26YbmRhWpGfPdVBpiN1f5tmN7N8FvUJL7qeeqYv9qDcw5MZsDUHEAasFqes7Mtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hPD56YNCJ6BdHFUwm3EsrwaUnLZWCZsWaUNvCVEp37qVK4QNrt5sCFQrkmZ5QKVcBQr1GYEnWhfp5QEyx47dFx",
  "key1": "3PBV19gcUxHQ2DGwDxq2wgdWqD4mxorDLMBpgJ5qVBmSvxV98ijsaBborpFGhEFC3UTEYuDXVPWEa1UujDLCpdeR",
  "key2": "2ARDfhEdXUEJRsevKs9AzHzaQTCe8HZaFFyxLkc7fWGCUjoFdxmgxakYaF6ACW4CwZg9PwDynkJUScpEjNEfgydi",
  "key3": "37WDUW8SPmsdPbUxqrXrNbv4HEqvuxSJELGcUpznGFLZVxaVV95brD49MzMYNuHwvijAMNCeEDRRTWVtx2i77S8o",
  "key4": "3ddew5yF7Jkzyg1ZXZQYdFEhWE9KGgiC961ZPH2Lhd52fqhac6ZmZMTrcvKAH9rQ1bEgNuD8Qoj3P6CGDei9Pksc",
  "key5": "2ifEC8UHndHk65oXSXfTxiJZ78Ynh3Tsb7Htd5S2WPerni9RUT2yk9c84tnF4G7ausLctbD9A3eQnGg9SBmeeco9",
  "key6": "yaXwxukxcRrd2P2ZX25SkfHufbMPEibJ7zkjgA8GzTtyM8LakWCyKznjcvEjkkozrkuzi1XRNeiPrNnTNgpuNnx",
  "key7": "2NhVA82iSKA27LrsbaGZtvX47NkcLyn44VPULjyLm1WrdE165DHKfGfRZgosjPVzePteUpEPwbauAxmkEFqtahWu",
  "key8": "5C7evKYJVGACQmUJtCti5H6ZZehYyVm57PPbSA9UKFwNmjGxHE45Tk6Dk5DLtnZ7eDY8Nrm9u2YgXvi3h1MDQLrj",
  "key9": "4MavmEzRfX3mAQsW1ZWvzxe8btnQPUf96RiA4suaqWUQqCFq5tCurB1WwFmrvTgH4CnWywqGL6ga46PQfaUwmjiw",
  "key10": "6TxtSRRuC7BCsJCiP29vjxadRQq7hkyQLLgSzeoeEJu4gEYoUwVRZgcjP1e4mhZP7V16LUzgsb4KQYoSJFjg7dj",
  "key11": "67rfdZQxnfZccbHMjjDF7iGpyrYq8hun7uUePYmKLnZ1iUA1KAbjMj5Maudoh42xPSEa3P8gy6dQpSbo2r4DhCyF",
  "key12": "4GgyLVmGwyXJWAXYmNn9HP5Fxs6WiXBYWxWtGW4ctVj9w7gJFDc4fqjouhKwbRZhFvEQ5ZNuQr8qmfAWCfGWot23",
  "key13": "2Dbc9L8CqLZ8z8uHBK4TjRAtqSJodvTJns5xM7R41N6nxZaDwWu1aFvtPnj36xFBTviFwncuWQU5yazb5PM34oMn",
  "key14": "L19iKh2jqonrCoD9EEPffKCBCKCnYMP43zu2XZVfnpujcoSrkpVujZgPeu3onbCp67JgwuDN7esr8VbZnq9mzrQ",
  "key15": "53Bs55FmNBSTrZJaWg2dCwC9sjmrnexZxwPAYWWtYBna93JyX1stPgthdjxueKe7yw8nEkkz1avdppeFxVQQqV2s",
  "key16": "23u7bDGUbGzX4i5vLCbVQPguEBt8jti4ZcLS7zAFnLgtRVqxV1iQcg6n9D3Z9xBJfocc4Syt4XSXegWrqaQQ8e24",
  "key17": "5eMPjHHoHPBeA5rj9y1JYhwXoZqhTn67fhrMJV4owW2WwMzdqar4B8x3NwqyjEr1dyzeCbMu94b82kYLDQbD7Xw4",
  "key18": "4FCGLL11cWBcEFDxJyQhYSBnLktt315HbconAVu5BJHXmsZpB3wrer5qPPwKV15ZVAj7AfZ4dfnR4oZUz3w4rDGA",
  "key19": "5kmfiMGyja2WH8rtAZubsTEDQUpYkQanpfBDyzCp4sKMAZVWUVi7iVdEyu31Enov6aFSWtb4whPbmrewj69uhXGY",
  "key20": "4C7LXmFtz2MhpZo2ECSHUPbaNpy6b9n2n3s2k64jUyEyyJpRTv3h9nGLnhL7gvN2ZSAWeAZjNPJoHJpEwzZzrDtZ",
  "key21": "3SeJEZyz9GjA4cXLZEKr11m63CKHJzR8224rY3B2EkmhJN9rb1NXTstxvEH17YMB9PHQ5hhdasJRyBndxL18Zqvr",
  "key22": "HnDFB5hRpjNEdv3EXAVb7jeXVh6zkVMXAd75etviXc7MsDca64ttWqxPX5Pkh6pJjzTs8tg9X5L6rufWaafb3QF",
  "key23": "2FU9S2pp291MmpmSdxU2MGLZLFmN6k1HhV3EYbGH7SX11fXNtu6WW1hEcCCSso9VodZPHxaY2BPudRoMMW1v1BAo",
  "key24": "Wa62XvBePMkyubeMiMhKBDbed1Rjk8xEeh2qLmmTK7m32QoPagPdvqsnHokkuLnuEA8UeunkmM7j4FBJN9XATxf"
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
