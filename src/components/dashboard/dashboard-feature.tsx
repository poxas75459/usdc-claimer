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
    "3yBYU2a8fVrZH2ZoxjKnvhCaztGCPs1zb98E5cxUHnfksnuCNB7U5UzCe8MsCCaLFNLxEz7n4EHdw8JroNb5DcRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4nBDk6VqNsHJDSaaGcD6kPwJ17Xjo8oQHk8UMU32Jbmsk37Z6z6Lc3qcCSHCQdzF9w1qfnW5BTT9zb84nzHzEc",
  "key1": "2ThCsC8tgcXaTNZxE5d3vKCugwybiARDB19Cbodk1aUSJVg3W6TAMmhdaGwbiakSpSSQPWVUEdjybRFsRPB2Rgsj",
  "key2": "m3xq8iseifb9eYSHbGvFjG88vsUNYbRVa8q5Ejbsnn9hgzjJQb7ajkK3TDr8zLJfjADfi8XKSZUj6tYcrHMohyA",
  "key3": "3Dpi7PgBd8qZHQPecdbjS5zy8sNFBYkR74Mq1tCZDhZzqw97BehNdXdpnHSR4KhUgYeweyDrTpph4bqudWuVgrNE",
  "key4": "5xQamRLYUBcDk5HaPexLWJ7eBLHXHJiw2b1EbjLD79QN3meh22C9zNRBDDLBG68HFtqMAmipwTTUSxsfrbyL6tBW",
  "key5": "59GaedmL1KqpJNTGQghpNpuWmpUHEAHifxLB32iGrYbTJKVPBkJgSd7bTtNbEiJk3nr9ryXUZySCnCad1n7gKd16",
  "key6": "3CkW97rveG3ebngUqLm2QLd4yu7rsxj8Nmf3dq2xvrVfUKkrit9vGPcerJCavLeFC4PkjbhAyVPvMPCy3Ssy2UFY",
  "key7": "48a9DCQHhtbt3cU6RPo2xqk6nxG3BqozJHBYE2qS1wChxBZiMZ4QxN2qT6RdMYpQTHqMWGEp7uh8BEUwKafUJVnQ",
  "key8": "4Vj4jiWXuUUoMZcu7zonrhyhsuvqpfLDHwD5DfmEfiKMr1pm1SNTQv7kpCWsdvHUms72t3LmirKt43StDVf2MecA",
  "key9": "2t9qvoENGVEghtnJnUYyuAeN6bQxo3yZCmnxDZh9pyFuReo64GhbXLW4P2H4ZLRqfTp13JfPknqW6EUVYUQDiqfe",
  "key10": "22ukWXCs3zen7xdkgZhhYe7XYnz2M1po2LhL8eWtxDpbpajdEgbcBvqd4HgRDz3yfupFDhEmdFAMBZLzW59Mfw7T",
  "key11": "4LV9Gj8414SvEX4JZn5r2sPNtFsaK35GU1Xigk1mU94CpZChHrvakcNQRM5YbCXLBFp6k8Xi8csJBtyLBawRWxMi",
  "key12": "4Ajwh87bT2VqEH1LXn8g14jFrFd7LbqYwn7fvr2ghH4SjVepfu7JQL12B51YD4Nvsdb8adzHMMb4j925C8knQwMC",
  "key13": "5E2m2wns4aJazGBU33UudYKhSGxiR8gft3SkhxQAD8jsw4doFLHzYq9WW4vaiSwN1oXjtE5gnsFwvJQqMDvk2SEz",
  "key14": "4jeAaMiqKAYChbHB32gTqQFXFNrA1JfGfHEbbJdGErxK92qPduJKTJY5Tpi6bsTZokDSHkyEqTCBi8LwE9cEpSFc",
  "key15": "2zGgxPBgKmH5AEUCsntpQHDL5Gb6d5VbX4uz9TQBrDxvLwCcmHBqvUoFWuUn7FhHCTZNQ89bh6hHJSBfYA5j15an",
  "key16": "5HGiS7SShMRc53dYZMo7C7uarWUAe39L6c2zaEutgkRwHWV5djatVpzJxvqxAW4A8EG6jK5q5bqYyTYzaFdU9wV3",
  "key17": "xhbFBHrcc4YuGiDGewi5WLkNAuUbvHqY6GBzFAHsFgcEDqFTgGSXp1T52PYPiZGRWHjhaTxZruvgQRJARFumvWd",
  "key18": "GH22Hc8fd5jmS5Eprhqxixim2hHHEBbWFJGeY7VQ6UrPXY3oKywoufei3Cd9ikrhKqPWwTXy3HZLrUVjM8DkiLp",
  "key19": "5bNQBDtXcrCwfhVKdmKhEa4znnGFABH63QxR9ECZykKUrUZ7SuGTwofHNpLgwoHdfG7jrKCV2YCSkNcDVsdfkdsB",
  "key20": "39EygJZUXqHARpXXnWZHtcJMnv6uZeVJobJPA2QSNHyJgaRGeobDoQY2FdWKTuiTqneUXGMNAjQfm1w1PKqismdv",
  "key21": "ymdytDwL39mvYLpsJgYhJWLsDiSZ4Hs86RBinPtwkVpxhnQ9a4HhXEEpQcJ6ESWTUuH8fTEL9q1o9W7sVfiP2Yw",
  "key22": "2hbRB1urB2MNrTXvwNnxk4ti8Gwxjh5hbZp16PG3HRw6gN2L5vEudGwTctr2D8jDrGLSrNat8idpqC13HmUzLfWU",
  "key23": "HHDnz5PaLZzx7zADwC5CWWaJc7pS8VWLp6dAVhHjezvWYgZVEYMMN6wdP9u1coV1kewdUrG9TLBNgsuoZ6Y6rLE",
  "key24": "5chQNJVFjRPL8ComCXhwez8GmAmmCuPQbSWqKj8eFh8463WGe3GPNUbRR9v66M2BWhiVMTAJX8YJUBU98RzTcgfm",
  "key25": "49o45zy3gS8NVpMSowybBnj22Qz1GqpvFG4khGgHcQa5RcpMxPKkfWtWigszurJ2kUToPptZxRaeCKPdN7zULKye",
  "key26": "3brRTS3gh7bdSvKGbhp2Qi5FdgicryRDhV9esXateNLjiX1Hj53HCkEZoCKViF5khZrSnuPVqEii8ZyqLn93cQ7k",
  "key27": "2AtExY5vW6a3AyMjCMeCQraHLmrgoYNJSTLJ5FkfxsVYcqBkCC68dLcewPbaQAkGG3BdLDxej4YRQQFEgvC6KMyb",
  "key28": "2tFkvNtpcxFizCLzF1gt6pdWk6ShRU7m77LY66McX3EDXXU7d7mWaaiuwLY4Wh1v9ZSR2cCVQryUFEVJMZgUSfiD",
  "key29": "35fAqSCQcuTuaNdC5fFxttm6fqDpoRHSTC9GUq7BqQRHUcnUuNcgxd5DhnBEq5aGpdSuVF1VFmqBMRDMpaEHFXYt",
  "key30": "CLzKR7a8Ca9qRW3wfZNoaJgFYmGibk4EsFTc1c9xHgfAjgR7tBVQLQT1LEiftGuUCV4tbvJ1AiZ141mtVM88S2v",
  "key31": "37yMWQUeGX7haaUG9EmW8TX2B2ww1gXd4RobQ4fEqwozs1soYxnFzr5dBkCJAPWUQSKypvao36puwWXf4v7ZQdD2",
  "key32": "eBvxetRvK9oMSXKWPPVZiJE2hN9ZExx3Vxvi7ndgd16TUnskAcrzuHpEF3axPXps5k39WNLuwVB42h1HZmqawgY",
  "key33": "45TMe1PDG6sJhUCu5k9rWRkX5tr98Tqou2i8BAwHYtBs5u7Bx8yvvhS7gR9hwzGVam5sdkWc1orcuHijboewvTRw",
  "key34": "4oHDveLrzrXY1xZ6c6UsSqzBvPDWN2HHJytRoPn6rHZ18oT8k9EHr5ARkR3yZnXEfjHDXPoEM917qVUEuVjg8xGB",
  "key35": "5jnFmTB2ajfdD9skUJvrrqaPXFrBcN9fZDZk5vnZ12Wt4RM8PhtCBN8pNUg4cWvxE67LXBZcBUtvKixnxHQecau7",
  "key36": "3baqnyNPGY8WWQt7J3qXg5CtjZYtoRJbvCGbhw1ZcDk4oPFwNXodtUCygnsHKLSPTs6dwMDrsbUuy45jn4a7EqmB",
  "key37": "5GUMYcU7j4hbNKuXHrLY76n48NjthCtoeeY1ns8oVcutKecycRosh3BDvK4GH7cZncF9deP77hg59ropdHqff229",
  "key38": "4QcE52KDnDW64K2dSpp1UyiZGPNb3c4iiJ1N5SASDAUezKjFr1MXLthZ9oadztfE9JNZGZFhUTriyA8dhfiUJVox",
  "key39": "5Lb3mxRX8x9hRQzyZq4RE9QwrXE2r5jQFQc5PHGFmBYEv8dSWSVd6pjX7R62p3gQHLdNGpg7mnADtULWXjGhBDNz",
  "key40": "34hg27pjZYzhY9H5kQ5ekttAvevNbCmWfuuBshwHmengGUAX95wL9UwWgcKNxQivG7B7msBPSMk5jC77MVnXKxjM",
  "key41": "4aehs9YBQvpHGf2E89KCwrLLUhp514oFtonEZDxc1SDC6amFR4R9TmdxyJGvcvQsXySQNpkwBLZSS8VgP8UBzmcF",
  "key42": "24czkjktN129u79cMXgJdRURAaverzJsDWfiji9Ysv85LVA2HQLwMRn68ay5CW6YXP2grwX7KexAYyZyATc464Ei",
  "key43": "3Wh1kfYJgXu1zsD3VHCmdvh7tHVFdX8nxCiZHLG2JZewqU3nv8cUYxN1CfoNb3BLRXkskXUsdzc8Q4hHvu4DAaZU"
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
