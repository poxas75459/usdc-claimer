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
    "3twAUtKSrG1RtT1EtxCSyCuJQCDvGkz4gbmMWu3LZbHWHyvgJZht3i7sAK85Eq11xzA47ngSW3FwoCHQ5iKGgAAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEpX9gJojMbMZztkcLydtzXmrwwYJmMsWa1k324S3fF7MRy5GFEeLgj61FZZt6BY7HsjRcszhYARy3ktBcXvDAN",
  "key1": "4YmCJQ6i7bJ76Csw6xx1YUdbokokTF5m6GmTZ21jGejmMSuFfnYbWAH4KP99fTEMHeeo8V2B5f6f5h6CvZVHeTVP",
  "key2": "2ksA3BnJcjJU6ywsJrsfwjC6AUQs9JaJxwfc3GTFzFbGnsFDtASgySWQ428BD4kMehBuG8nrKdDonnXnhJT8ZaL7",
  "key3": "5kvNoRenS9faX6jwhaHLiPuvSuhhgw7zXZG2bwj5J3xaY59w6Zp6FmWU8RkJfwvjUN9s812JuGgCWFx7o9hnVzp8",
  "key4": "4yRtmUWBBFXGC3RE2H65x4MhBw1ZQg42hiYivvJiMZdG4Vtx15rhcCSvNvEDB4abKdPvU2PeJUDzu35wPiccUEmN",
  "key5": "2uUV8xw7h3MkYF8QMP8mcn3Ynma9cRkjbJsMkpVnhwpioVxkquaEXv82NJqkSQ94f1gt7qewkFL23bYVnYE65sTD",
  "key6": "582fdG7C3KVh6iZKEvLBuLWMDGAie9ceCB3dKtbnFm9Jf4ZhenMoajZyvcEUQR5PZE3UuftFCGBV6C5VaZiNjhKg",
  "key7": "SGHPGDXjXnPBt5RRJv21dDdU9yC95VvdCJNB3oQAfeDXndrdePbA8Got8dUXnJdGPcREHrvKXZRaPgqkkpNfHnt",
  "key8": "3Wiz1eJPJYvMW9MZyjfizy8sBhyq3kPqfEMV3RxjvQovZ3SsMG6PNyjRNagaKGc8Gkp9sJ954AqZnzSzDnopH9dN",
  "key9": "3qGBDRHkyt2nytp357dtpS4HtFXGBeEP1G4CAdbFdMjGGovJET8oR6ygRzTF1vswwVvajBFeNg6PaLC1kdM3jUdm",
  "key10": "4tZNoA7BBWad8sRDoJwrWLASF4xeDDk6dyCCzJfKGUwgnqiFLm9EMGcSsn165FsQGqvBkDGPsa7Nfmw5K6BR4X5B",
  "key11": "9PfH8PHiVcx8Bs1QAGMxfNRai8ycHKwb2x614qQeVeHctfuQShMcLjAtyPUuyL4qQZowD56WCdT7nACgFGJHLfd",
  "key12": "24gMfMJ4fZvbH1D1RNSge9oXBM3TVEJyrwWE7y1HgM8rueNyu8DUiUUgw9MCQzcvoeTrK8MgMNSQ26DbfaUcoUYb",
  "key13": "3gCQLfrBniofoDV8TuZeqVEs7vguW8fy8BwVgxsqgY97yUAtuthPZh92vK3pW9TkwKDQyMqJfMzX5JpHtzGC8cnM",
  "key14": "25hN3m9RXDVLbEFjzFxMvGZYEM3e2h3ymqtdgR4hrpwzMz48ZcQV2oFPm9RsMG95MGPrRY3337RBu2E5WFJR17A6",
  "key15": "4Ki553834aTNMjyFXqZfvjgcRivT15AUGRN6xk5opaztgXKHXa2s4SCY5nD5ieLzos3AAAeaGNCZFj8qwWAKRDv5",
  "key16": "3MrCScbsUXPnfBndcMjHRfrkWKuqdGwDsFMwSQhpMhuSCc2WR4SNAD8qk6gWUiGBoPSpDKvNm8ixcfFytzh6ZRYM",
  "key17": "56dhQeGjh5Y4B5Aa7vi8GPs1sNGDSBuy3wr19s2hdphK3vhV16tAPxyzhbFmjAeWBPDSp8ZyhWa8xVAnX3RnxEar",
  "key18": "3eQz6GJGdukJtUbA9n9GfPN4WRQLV7DLe2x6HJqGYWxMuoKYPEBSrK9epQyJ3SMkV6V5oMsmbBag1pMPaQgPN58A",
  "key19": "mMEML5TnyDukgM5ogtY1sYNaFUkHTSjqVGdrDCygsf1vNJwutHVtaZjZwhgB5gmVU4HpgUagDdKRhbRBksEk8hJ",
  "key20": "2YoLP4D7GeLLLZaA566Zxrx4GFp2D9zJnuK5Ugkx2nLKY9qikLjBSFr62mGDyUGQUJ7J4gB289XBNtw77jFtruMU",
  "key21": "5oeWNksis7Vceq5rV2xjAEicRNXGTFf7UfhKifigKokZRQgh86haXNHkN1s9onYRbnud4dW1TUCkYiqS2QQfXQPa",
  "key22": "kRmkS3UUZxz9RDT89Z9W5uzkCCLdB6fF9NYd9VpGQwSGUvaMgjGjzPTJFF3JTVh4yMnp61CdnfetpbXKJFwegJQ",
  "key23": "51XDHCoPB3HgnzfNzd8NHVATyUXiBYzC2zWT8EBLK9eXykJjNC9qboa98apbwhuddn2WgmdinJEB9B2o9oCJXoWg",
  "key24": "2A897PvDE8Yw8yiYrJKecLxqV2N3EGu1xhLaqMG6dfd4P4ykPQWw6ttbnaB6Q75V4neRMLMM8hRKjZHTj2545pq2",
  "key25": "5dtr84p5s9fPngcnzoAqGzBzMzKQquhPqjBm2yoZfYaWH9W6B8BgV4Z6jk62brZyDz5uttDR5Rn1zdwpGuhz1kKt",
  "key26": "2juBQ4WWmDRDSuPVFnkEUQwWU2c2HkNpSMrdfvayvBdJx72GymXDzEe9q4Xco5rEZbggJJsYzK4Dk1AbJT2M4vL4",
  "key27": "46LHPDaLQR5gcsowCLwAhJM7wN97reNoWkAPXqDZLRRAHTrQg4U8gssq2P1nUfnG14prgu1TWAZRTrkxWmT6JwVf",
  "key28": "59mF659VaN2eLCFQhMumqjmWVc75wyS1Xns4L2yPspfPV7uFyPWXD4JrNb41L5atExDEaXuaxqmdkgLfd6k3oEbk",
  "key29": "2uWnXxAcTv1siNUgxG2nNEBiYQ162mmRv9MdgpdE6L61pTc2RrueoCEMvEMjvUAig5jAahSnFx9MXi6UFWHVmwVA",
  "key30": "CToyq2gQ6yQ7nthjC7U6xpxfPQXymTTTXjhurpDHeKCGgojfEqAy8WsSoeC1TFJHMzUBavq5UmaA8QJs1etvvYo",
  "key31": "21ZFA5g7z2XRiqyvmpAmHzG2ky3DjPCjwpoq9PxA8kEo9NvEm47SYFLpscZ1h575LqAhy8fbBGAcFFcEezSgo6t6",
  "key32": "3EoeLXxPBmHiHDFkj7HRJSG6LRq1uDNfLL66wMt64GELT1HnrmRxUa4Udqe2JAW92aqH1MqitL3Ch9jK8FhUJJbt",
  "key33": "4K1BkbMHMeqzNY2XPwswpSTHRZGkoqEAZxuVk2KH5s1Jds1FWDxkdQHCnigngoYk5emaetWWzSPVHqrhpeBi3W8a",
  "key34": "4WozibgFr9q4p775d9Pma2wknBs4MPQ3DRFy2WEmpXDnGMoDP62Vek4fZGB568rbND8ZfX1478fQwwKWyg9dqr9y",
  "key35": "2gN86Fq6sUVi3ofihdpNFU4RgBzNuY3iW69yFx47FdxSwZnDh764E34RQwTDSd94XWZu4WR1WQSZvEpPUEQvkias",
  "key36": "2PQdmJzWzKQnKCAbTcyMms3haY8z4wP3AsRzbtKvig9mTJCZtThMBuuMZGnm8fuaRXYrgFjtH3dnRJgYsGHvC97w",
  "key37": "3tHxzSTRnrpxSjqStdmqdcNundawGjuLx4jHF8cPzcghr2uUfsmBZg97cvQWgZ12LttkzZeUEj978sz5XFadaVVj",
  "key38": "rqzvj9xuBRYWZr3Kba523TnV5KMJhLTDkHFgdptKjTfLnxcuTJYL5gVKpFRfrd9Nau4u31wRBD97PZeoQsLDJ4q",
  "key39": "m5dGN9DgqDRMod4WCWg8Rg8ogWBiKRMWs6xfMS3wz8JPtWdUVNFhJPwupTAVJGKefL3cBfmsjckBbzEdE2iE51d",
  "key40": "sAKCnpywjnfYBu8ha8QHLRHfY5GM2iELaHVzG16FUfTaV6dcNwTfvub43qjCUxoXCKK2sZBWcPZz7YCcpgCLG5N",
  "key41": "2WQwcVYfcVabP5AY4gUpNEPxozbw1XLQ6thfni4kfW2fri2SFotKwWs5sqY1xPTWwyJJsdA4Pe1pWuN2C6d1GAoG",
  "key42": "HZVANAuEJPpgW64QRdRLgdC2E7gRnTAhruUtcFh96iuHXi1GM9Cm4BGN8ZHV6p32AtJ7VYcLbX8KsCBbaiPsD5z",
  "key43": "4LvqtfKAyWedQipfE7uiUs3BWBf4pibQVnMbNfj4XbMbFgLUoPRjLFG83dc6qA4Dn3uScZX4p3uPemnHS1W1uSqL",
  "key44": "2UcDYudKjpp7fEj6Dsdg1EBKwdrJ1WaHzt5HUriZGRC1MxFY5PDqGLpxyd71rf6iowkTjKgZcMD8b6e4cdUcoqTd",
  "key45": "2rdCBGUWdpci9nyFDpC1XAMtxy4H2m99VLwFuzjYY9JuFYaiyCxDGATY65DGKLcUb3hQU2Y9LdpSDvSUBWmuW5qn",
  "key46": "zgebEnJUZSvReymLwxQfK6vBtBh9A5JPkqv4aqmzEwE3UFtJ4Y7rL85eh11X3YSWRkA2EVkJJd383M1xTVzQiYw",
  "key47": "2rHqiSUHaGYVdSSyMtREHqhcVuSnLUuS21ZtmGjRencpQadM9mDJ635sSzqkDTd1fZkcCQ3tsAox85u5Fp1t3Vok",
  "key48": "4MvfvvkmZSkRt8HahDvkSGEc8mEDxDMwoSc94P1EFHUknX5P2TYFLTPwYZbPfZMFtSq6VurwCSuQHpxhPKTRiRWz",
  "key49": "Mn5QghGh59jw8s5hcRiCRwiM92x64AgcEAGW7FL6rSeGLkLN8hEUyi4axMf2HZNK6DbBmTvGA16KnT46Z7CAi1y"
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
