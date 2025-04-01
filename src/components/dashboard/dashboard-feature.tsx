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
    "5Q3NHR5hva1fqQDPGRYgyr55KnvcSH6XAM6rwTrWyggiYkBKvTQW7h3nTAMKk9hWX22v6AHEKoT8jmA3ci3MjDQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCqfR6cgPBS6Hf3x1emSj1oCArqwsbBDRFFLq2bu1dvnMk9YWpyqv1nsD6QsdkJHU2vUjagtQKdxatUAV7aiqpF",
  "key1": "XjnAWi2M2W8xM46sybqfNcs1EQ66Sdefr9VrcDgTXbqP9Ja3yvurjM5ra3bxgUwJiZZF1fRRTnmuM5ngzRSixBG",
  "key2": "Xj2xSazeVkL6Moj9JM1URnLBWorER5ALKHWFgvL3hW53Fw79PXNMpxzyCfUcQqYQd1SUZ8aAkpPc78RWa2v6vfq",
  "key3": "qUzYtpDVeqZiXjQXmjvZzQxJN1DQuVysxPMSw3sxT6PxVSo9QYNsEkxaozcdrLHgh7yuQSmM1fY4gkpKiNAWktN",
  "key4": "3MXX73fZcEWYasGZU3899r5SrAmVNgX7VrHRuJJKVng973KjY6WAry7eWZbE7VCD141PUogzko4pXGmTupmHVFs",
  "key5": "5JPJTX8RVe9WBqkzk2UCTA37giY8p4NVPH6qDig5f8aqDK8AJdDDQa2txcwPQC4spegAbb15gKuTQ23NREhSbg8B",
  "key6": "3Lme6itzYey3KaiUhPoGWivo7LQzkZ3zLUnbU2vNmm5HGpodXpNry5JTjn9MqLpt25aVtQvsfYNChvbnEJgR7bE8",
  "key7": "3wRmqvyPUFU3YHA8ZHhz4VQKtD7P9cmqut3viwUcu8mdnj1wXSy4FhTWoxXR3kHCm7DcKYDf7zhv6QQBtPoey4z5",
  "key8": "2k5TYo56w27C4PNTrjf2niwE49bMGVhBuLwtoKtXghNY9iLNafVxKumdVLcWwqDevG4XMKnyepkpzmHAdaP3X9Yd",
  "key9": "2a2vm41Q5BsyRjB1peMXGaGTE5ZZZNmTw25q9M2R91sEU1p3Rrm5xLtZkJz6WFNMobtQccamcYhM3CnYLXGoJrau",
  "key10": "3SwFxF3hJydWP9nSbDwKW331hpNXKDacpi1LoV5eewRdWE6bCn4mw2gwk9YkoCLcUgnMrf7vSw2f9ZhuoRCkWbGp",
  "key11": "3Tppunc47SdwzuGAFUKsYCG2atDxcpsFoYfypVkEM4v2ABNURVYYeRCdgntk79AuvCc8ny5PXEAWzhNkqMXcUhFX",
  "key12": "3twThGTn58ZeNvGPeveEri4ySZTJaLwEWTyDDNRVLA73MhMugQNx4ZbruNB18y2ADpKB4hYiguSM3VcFscVgh8Tw",
  "key13": "3wbV2Fupdavm5GtVnJ1SvSprSzhqa5wgrKyHnWroFedZRDR7jE9n2tBQAnJYse5kCKNBJznYvNrjennZqoV6XNw4",
  "key14": "5peJavwKYebadpJN1znvUe3rVjytg4ETxhoXZbL8FbdcTmJoFuGnHc9jubvjNZp72s7bRRH4eQ7RCogszvz5Qf2T",
  "key15": "3Ry1bBpGTT3NDmXuYLasdbyF7D3ozBf5hXhmp8XkDd9L6BGsp5dTWxag5XqTnhNVMGHZYiH8n9xBfgfyTb9N7N3y",
  "key16": "4o8tJhTBAmSo38ZXSPJTJi3V7y9uuTFPN7ZheQTJ1fLYACzkM6AbQ4uNYheJWbeyGQQfJVMnMRMZzu9vXUJcd3bV",
  "key17": "UMk3PGSMG8BQ5eCf1iH65aLcX8gkfzsG2g2UU19aumz1Q89YLVGb96SAPnpgWstoPp34VUtnmGEjhxxsnQcrAV6",
  "key18": "3uAVdDvqC21o4EBudpPTA6q8npxruEh5Knxtd5968wJx2Kcc2ErMoi1MSBsmYPQ6M4miYC3i36z69AzdbQjqaixf",
  "key19": "3dCehPhe4GM6YxvRC1QWPkNzgBCxz2zi4ZVMMQYW7WoneU4rDzCDUCYTPxYGCZo38BnLdZZvTgkVBVMqdyY7CDAo",
  "key20": "36kAsBUzZWQWDQLAp1tuSBFCingeG1Loyr1BpWTLERoVDKMEAJrG6hD1H4YbvqXEisvgheC9ePgmSKySx9FkAkAL",
  "key21": "5HXvRrcZ5T6UjRMDsBWCYKBuXrgMoDijpwjoUzbdf2dj3UBqcQvj9ZyaQs1nqkmGteAE27eVHswVTKx5ctYxmAJu",
  "key22": "3nKxLfRvR8BFiDBAjMACLZ8hdnfk8JraboYXGzie5mFH77oRGNecResEptuWWQqgP4pWcuvZ5nyNs9JDsdLpUiEz",
  "key23": "3dcZ37X8HZhzy3rqbcFwaggbxr48ZewfdugdNmkpPvqoycvWXo8662BJYJKvH5Pv6p2njixLobWmRgTNwjHxNyvn",
  "key24": "5osXs2S4nBYHnhm39zE3WChF7ScmbYrzoxu5YeuiCrgJw4SoTPUtbY26NXg5418ZJaUHE6BPCTw4eVwYV9erYQq4"
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
