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
    "5Y4duBexi2iZ3RBPrk375McemTd8HZH3EDntNFsbZULv2osYdQcm6tC4ZghfjzkMKihbhwsD1RvzVEZnKRqEY4M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iPzMfwadhf29U4cTMKpPyPY5zndmsLQ9a6VwNC1QCV6Egb8HKJ2VL4gsH9FcrYKrUy1NKGdRfodGVpdcHr9iUfH",
  "key1": "5L6c5Qk9LhiG86N8uwAJkXMxZ6YqGF62hjsyX6Vo9TH5gVfCSb7nZ9QQyoEJVn4Pbk3BUVs991ZgFg2HNHY1Y86k",
  "key2": "MFa6neNCWAmfxhTBqY5Pd1ztdToejxeAniBmfVYcUwMDdZ7wz4P5JVh6sWM3DYHRYbx8sR9mFXdXPwK4f3Qyu2P",
  "key3": "58V3YeZ63A6yhRM4M4R1Y4Po7f5FgHzq6ZbfJDFsHJBWJWTSy5wMjo4qMekC7paqs4detd4bkrQCczMmV4CKUbns",
  "key4": "5BdAQd8fSFnQzH2PFi8tkQr2rrFkjED4bLzuwUS1hXvACM6UJqZ6WLvbEHQvnjyBvbj7YxgdArDFjhuKdxsUmVME",
  "key5": "3N1yodfCSdLuH6DorLWrMGMdK7w9vjc4f3Wsp8VGjskfmcNXiR1W3uLdht72h8AqH7NzVQJDTWHpYPnDwmn77fSg",
  "key6": "2A6xMVDo3PQuRTqQfBNb8orE46UxmJVBtanqn5SaJ7d2eSzCtAsiw9SGZpHKeBsY1t8JZ7CxZBfVbJLs4xFFcNey",
  "key7": "Pe6bmFWCWYqQM5mQAbrPwNDVH9MBm9ybudpp6ZA4AhD5nnZThogy13Rx37w5NgjYMLEBohnR1W4uv7DQeFhK5y8",
  "key8": "4WoohqMwM5mxSiNsKoQz1KopavyfMyqj7yu9jXLVdmtUS3WenbZi9cihBT5xZoxGMA2sVquFebW9qQFX9x5wk1CJ",
  "key9": "FKSqGoJVBfTsUWsXKJqvcecAqnyXiGuojxcyqPZmVExT3AmfFNpxYyqvrSho3GktMGFAPaVdLs61ufaRxMehUVX",
  "key10": "3H2WBzAi1ckuNceqgWXrBB5G2DHofd4wQ7atmUVsrQH5mmjZCcLkor9tj4kbZd4YdrM5n1UvQyd1GT8WioBGNkF3",
  "key11": "tiWkHgqhwZuFzXdbSr9MvmmbZi7fCvWtAN6vwpyNe1myxq9xCS5eeAFqPFJmASYBwvNTuxwpwzVgZawbqpgEAgL",
  "key12": "4FTbMXU3n5hHpjF1hfQbJfd3ZMU71ppFfLimZgmjwLMv8Q23BbGp3c3ZzAq5LeAyQztgxoCJV41w4BGjFPphrFav",
  "key13": "3hszFwmzEtaCBp8CURMNBeTXXMqGjz7LYQCPvqkAat9JD4weDSJjMsZyYH8xoRdMZ16HcYgxtoYD6BMVyCJnTs3q",
  "key14": "3AxuJgnKuWXtLpPrfRZ2N1YvkYfmg8EfDYiYsetgDe2Gg4LfppjtMRREFsD3mAsHZbNxTUk6wfLJkRCRzjANHKon",
  "key15": "2QaYAn97mSHyAv7wnEmJa3A3YaaFyCyEFEoGZBKJheiqrhrtMHiBN93NKWFSYqmfYX4L71x2j41KqAcojQGkZmQR",
  "key16": "3V4TMm3YvYELo2r6QjCnKzsh3GfAnrimgWcnNT4HDyywRrC38TpDj2aUpoMDTJmNUrTgof4R2hjLTYWHmH8NksKg",
  "key17": "5hjopbCFFPSpZB9fvbBnkERyEPHJ6SvMPXQVupF6eZocZpijbcTkiLpUDvr1ZP4YcVWMff6ciFkaUXbMphQ9rdi4",
  "key18": "3Ay6pXMVL7bUnvrSvvVjYYGU6iM83sC3Ju4pxUWq2rtsfBjQST5WshC6mCirSoVETfW4sVw49St4k6PUGToJgcRY",
  "key19": "2jNeAcCggakRFfezSk66XgZYuz7C6qPrc6nU5gbBPG9MBnqp4coaTcqD5V9f7vqAejc5kdcypAU5EQdZVYFYP2Jk",
  "key20": "4DLfWSLntwabqPnq9J1ynnceJTpg3tkqWCvyht48E6c866EWaFvbYGHMKTpRQKjpE5odqnTWZrV8gNF4deLUWsJH",
  "key21": "2RG7XZrgCTtE1jXPmrdL5y2VfUF9QEoaYjFMGZQCzFkgotjqRMFLGNezsDMpx553nwyw5FfKenuUfxd5BV3NvFiu",
  "key22": "3tJWRh4319w86BBNZjnUQLefw7B9r2S4mevCVuUmpQkA2kf3w1d4EBkQqxjUkXVE3iYNPm2vig4wgTkgfcy4ZxJp",
  "key23": "2cUqQUx6yQTg5wKYeQqFAGTDQtKS8AbrXfnAdnX68pUUviwYQNXCXGCW9TxooxLad4jq7axqzsyvwqWvPz3rZCug",
  "key24": "xkjWgGbVX5cPpubBD8z4EmTTo1phKRTcLy1s9jPNxRwZgKgkVdb4csF8yorx6FYrqj1F4skXGPLoorRz9FWYZRZ",
  "key25": "5y3vRRyoDotvMBgcTRVJVByMsNDuS9JDMX9FGdmWS6cjKdqq8A2a3Zzw5vDyjxYFKhwcWXLG2tGDAVj2CRVkcB1x",
  "key26": "56W8H5YACvX2MyNqWSEGCThjK4KT94gpFGeruCc6pz6JvqAAojPuvZhvGFNXTQpfsFaPJjKjZoe2kMe7XSoHDner",
  "key27": "MUwnRjnZxCKTSsMBVUKZic8y4s42TtrW3JohJHcXi9sbagKw4F2fp5TqgxG3hkG99dPSY8HpvBjH2si4Ndv5jT8",
  "key28": "3khev4LvY8f41p9rRbfftKiL2DJJMd6z9CVihiVKzCFUv3Ja8TyZANaMzAqd2rJPU6o4BMqTvXhjPySU2rYqzZND",
  "key29": "3jK5kHJfY8Wnt2iLFL5MtFXPYWb9B7RMCVP3EtgGQvZqaWLrZb82dqTKWLprte4hs8VecQoeamj1C8fQkwCqQ94J",
  "key30": "5WHBJ7jLwV2vVE7AcPGZqvsvUL9KmV9J4wsRVCpJRb8EBbQRWAWiyZ4vXLC98Fv4SasiggSsxvcmhEBMtuc122P6",
  "key31": "4GR4gd5VLrj8dbK9cD7GThn9chYqejrA2TxbPitwf4GMqHuUhcK1zc11jjR35iCcjKCuEDaevT1YXm2T5jCAVVrD",
  "key32": "4BN831i8dLoXiVLiLeAX4KqWhgFz6SQKxUG7pRJKWWMfK537KDnAo15xwwhefsbF28GRJqD4JMq6jSCMWenXfj6Z",
  "key33": "42zPqF5ypRtqBEgLiiZP9XbWHJuvPhEHYB7MGaXJRMCZ86EM3Wmy3QyYr4oLcuxa9uc3HErHPWRpXQdVPzYsGZwW",
  "key34": "2oVKNs9MbFR1coj9yS8DFEthVMHgwPoLdKzjW4MfyyGxaxwLWbtuQ7RnL5hxEskYcmriDAzpeTBpzSriE5zSNCgS",
  "key35": "w46CrnAQRm35mg2MKm53PB4Phrn7c6w5NXYyPEabYJhwSH4xhVbhTtR1Pvij4sgnVTQZCbjP97g8k5i2ikhWzo7",
  "key36": "5mXpFYRbrjdyurxHWpn4Fzqv6Nj3aVYYdXYeeyUENRpdYctDoxjkc4yYHXz3R7fKDF1vfkNV43sK8aMTn8tUTrEh",
  "key37": "QM9BYa7aEuNWzwrgMmg3YGKcfgBzwGNFW2MpkQoC14K7jAQmifxQe8TDmLttedFenAMVDQka9PGfvwzpimDPvC2",
  "key38": "54Vt6T1CULaAA8TJPkz2EDZaRApDznNCwsLGaemp5jNKsxWpehwYbaARkvUr5Nib49yqJHUGKnP7ybYzjDZoiNJU",
  "key39": "2ZEzknFDXbU8mDBf4TqtcZ4txiSaVmEf4DpBxKWkb3BUybw3rakiELu5zV5V4amncRuySYex526ixzySyjwJu8Vc",
  "key40": "2i5ypVXWEn4xrTnT1RDnoZoS2iwP18FYvECH5zM3pSCkLTsMsQehNYSgjQTFVYhhThtsBiKKohN1oceKXtqp1BUK",
  "key41": "2weHLE4LN54TTXHNWHfuLTcPfw5Lh9xy8VjVyPGwVESCyMZdybQtVsetoccZANB89x9N1zTU5w7nuC8VLK7FApFU",
  "key42": "3vZYnYihu1mg72HXckTgJo9jmjxzq26FbfP2gfCMLUBBn4xwbYQMV2nYwgqED63SVo4mhLRH1NFey2n7mG7QNeFr",
  "key43": "3DcZjpdB1RumJhhw6q9ZFqNkxpZFB4pcfT1W35QmTdGRaPCs9gqHEg7vsBzHH7kU81q76ze6gJYqECAZTD5c4jRR",
  "key44": "66wTSYrR9mkSniKgipL2gkD37efV1UBi1xqrWuwJaZsAQwwTbJtDFjSJVwZHGtR1R7ry4h1Hq5NpC6BWvo8BVbPz",
  "key45": "4HBFCHPyGzFS5ynLQ1NPtmkjrTknL1772BMcZeJfSZyoSRUYWYMSBxv13Tb1E9TvDSU5vSru4g8twbNcwSSZANSQ",
  "key46": "5c3tj2CcriJMrxV1epaYT87Fh7MBfE5ZJxhHgzTPvXwhC3f9dMyoPEMXHuqPSbyEV4mc9Tbp1KCKCbnGbkfDeuTV"
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
