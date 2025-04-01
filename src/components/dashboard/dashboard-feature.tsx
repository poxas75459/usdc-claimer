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
    "NqsazcTJVnfkb7NVxZzW94wGSww2YeHCR6ZuumSF6fDTqdVvXqzFWQYVWSHkPYJLTkUvshTLMgt2wzod8tvw2Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxLcGw1ZNAdVNHXgvu4mBwxBfYXrmVfX7SP8xaCtvT1Mgkq9qRJWL56QVLoaBLgrY3hVkFV3FxKQKhWhSCrN8NR",
  "key1": "56mPDSucVkEkyFMaUA177DvpdAeikVKKBj5nBHndyga9exkjDhC5jsJbXzVSSTiQUBjcX8fr49zYJxCiii3SN8B8",
  "key2": "Myn1MSZvevxt8gnTketuEFBdA1a74UDxcjieJBSUzu53igDX2TuvZV2A82Vanpq6zx3BVzTWM2RiFHCG6zezWDH",
  "key3": "5BrcJG3kssPWdEyzMoiidQi68UPZiENX7JpwLi3faVTvLYcfgh5vBCmjTDeFVG4xsdAF9DWcjR57FUbB8bAapQED",
  "key4": "2VJwmdzmPRUnFwuZUyFpUQ3hmBytvBBemhBwHuATarfiqu8CuBCF2qAkD6ifKmskEotch5B94FaUgf1t2vmfvc4W",
  "key5": "5PWgqt14PwEzytCjuS5RszcB1L12SU4zqvkhSnXS87JDQKcDyg8phGi8aZ2XgzY7dnrkJwxWFk2DPFEVbj5PWDAT",
  "key6": "3SwR1rVw12oudVRMZRznr3wvNA3MC562qNHCGtUtaz7WoDkEaDHRwyW7Dyg5JesSdp9r1gfZVF9e7sNu8NnJV23K",
  "key7": "2DnHJ8f1et9BvrRed63Z8RdQJhV4pyoKQLdyaFiHAzGs342zgTqxDVm4Ypc4BXdC34WKHBvPaXggZxWdAeYyJQc1",
  "key8": "3tj51Pfq3FzKmAfzyKeWJnTjr5fRTZnNngA8DhA1w7swyRvbgk5p9H2QJrCtkr3wgEe39xU4RztMUckz8pJWLFJD",
  "key9": "5dSihNbtDa6krrY9QnB39bjFS9k2LibtNNysMkCiY6MZzWxiqPNoudxdMMtRnJrh8S2PVaSGRex6ANnYDDRVSJKo",
  "key10": "3VgjAaPh3p8mVyYwJDyX1YDPHqpTr4sgs5997wSDV3htbp6jba6tNCPTHRPVZkyAXGnFVvYCmhJfAVpyLgP2gn37",
  "key11": "4RKwi7dWLenSD5vWXNfb2GbpNhjAcyKcR6jf5mNuwx3v7XxxN7rCaKgqxWjZ3iW8oUBV82iyPodvap6DFoc5DoU9",
  "key12": "5i8uRUXwXmEFBLWoSocVrjYuoPTXmvpJWtn6pnfBkdHnZqVYdxsJnZPKHMJ1NkmpYhqvAPF6zEf9nUg1ukH7oCYz",
  "key13": "LDEEaW2Qek1skb7tZK8X6f45XzLJ98K1yadiz2TQDTxLh2dKXqULCkwRwFa6enRNqwavxbQBf2Lb2eNyABcUPmx",
  "key14": "2S83sTShygZSoof3QPGjLyFJaGYncH7jzVTEg2F4eQAVeLfNYK3KKrzJ9gvFuHKp78zEXNUbY4cGDdsGhnzbD2Su",
  "key15": "4VFcL5VikvP2CHsnZCUE9rmupQHZuZ8KPdHFxRrfHfheX5nvcFXdXZ2445357QMJozW2P3ERTVLRgcsjcBMFbNDd",
  "key16": "AdBTPF5QrDG4ecbsvsLCkfiHjbSb7nbCFuBECZfPB6QgkLH458uZX5YPkSdC8xJqKQR9tWwCYSb79tqTq1duSAe",
  "key17": "2qFWGt7e1UBa2NTR355domhBBRNgGnRSgY8szah5SZbuX484Z4WBstc3mpnMiy96Wn23bLaPoFgeGPj92wPczB5p",
  "key18": "5JLRRRubV6ExPNaYqPp1cJLa3jMd4L4QoZyTL8B26ydiWdCq7qTcLemBdqz72D5HQMC2LW6g4DVUJ4FxxXAEMhKY",
  "key19": "2KhREP211NTrJW1WfsiLrf6VyWD2vLjAuuP1hnSfR6cMMa98roHatUYT2huGZUMCshtyfamM7DYVsd1tE7SAeUSd",
  "key20": "55XU6LMJvVmfMU4QEFpji8xKLKqbHt98gHu6NaTiLB444VzoDNe8zq7KwnuQZ8XBNyMiw1LmANZ3cu84Heq1xcZ3",
  "key21": "35LZQFD9GT2Mrk8uxzEBqFb7GEkuTZtXqNM9JSXtX9Qwh59qE4yfK62JrA98Gpj9QXQSTZJZ7j6XKKQERmCJqYEN",
  "key22": "ddNtRN94QjxnFotDEw2s642mhtPxMk5adAJuAen1vm48B16wmQ16bTdPkfRXpm74QiQN4TNtRrEmB9ScYmxLfBm",
  "key23": "3XFr9t9Rv2sBe9fipmKvoosgJgjATi6hbMjLduGchEfgyWkgEPV3UGoW574DQrBDNydb5CRTA3jhg7BkNWWm5cUF",
  "key24": "62q4ezzsAFFUJhYb6PEqh4LZUFdnTA7rK5imc5Yy2YS5t88XWbewrwYt9gNtoaHsreaZWVMsLnMTs7aobJXHELb1",
  "key25": "3cXZeabe7gVEmLvcKMUkVW3cyNqKsCJuj1XimbgzD1QhXf4WUKGeRurNshFKZeZDuPUvdiaLmPAbKwtzG9M6nGHR",
  "key26": "3aLmVQriwUAvkRonxW4ARaHZt6pY4hs72JfXDjDjNzRFLiW4Ak5GU34Leu4d6X1vA9EZ2xeHqVvsC27V4qQ81ikD",
  "key27": "2JntShJBvsSEPYSBgZQogPd1CRmV5Ytc1YWhnoFyD8vPjTQuRWGb165482SJJ7aH8JD2gYF6oHYqqB6aUtHpMiVE",
  "key28": "3gfhMbpeBtuMBpnSM9jcsVbQZSD9ySJSeWdcB3mAbef3r4YvdCBrP26LPjy6rZUp2PREKgxMwUCwKV78fWSgHzfK",
  "key29": "3UDzj9DXuoWvtx7uXuMLPYeC3M6duLJBd29WWfoSLbkzFw7QZuS5BmnRHoJRcfxvdbNXKsu4v2eHUpK4s4WLiYLT",
  "key30": "4gqPMSxaRGDG6T3viVYo8M1c3NosVXpfzCSVWuJqQErKpdoaf9cZQEAL2uR7KzPJLoQQCHCo6xpzpSa8HRkUoqnW",
  "key31": "3JwfVX6V5GV5Fcy279R2U6R1tnSkWFywqF38Bk8EuX4wN3QUV6Kccs6E9VmFmz6pUkuvFErHVWuaJQwJXgFTZ7dp",
  "key32": "4k7Hr4VaB6hA5vGNXwpo26RgpGKY5PD2LzjLKnMNBJ6WJa3bT5oaNX9wiyXo6K1RQt7FpGoCwmV8RdZmpKQxuF1s",
  "key33": "2XTPPAnxgEi6VBgKYF6Q1E15idkfvR2nANXunZCxCXUThGCJbNwPBvvXCxdQwdZbY1tcytBqhJgAm8SfgABxxMDD",
  "key34": "2DbajQgA8WyGaigD8y4rawRW7uR12qMjQ2L58893k96nuNZAVfcuQ3DJkEq2bpSgNmMDCcs8xPRoqNPW8X6yeXNd"
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
