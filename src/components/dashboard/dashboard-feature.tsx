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
    "JdTdaptdhu8eQFWtLZ8sTzuj9KnjwC2ZZvLGHsVwRSzwipoMK8vRhTtGaqSp4V4App8cDn7jCY2mP1P1mo1QaAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QnKJxXBx9nJeHQWJ3dFycWpEKPAEWQSanBMHbzcBLRxmomgrVKqkbmddbJ97LcGu97k1592GqQ5oxhPKanqeZk",
  "key1": "4geTe3usZzX7GWcm3bEQj58NDgAwqFjqF3xKx3UBtSZyoKWCHzLETXJAuykNhqSURhH7fYspKvksXSoa1PVq92He",
  "key2": "5rVaFuMYZZyauL3bysPrhbeGa3kec3NSyqvsKBh6og6v5S8iWHovqoTQGBqW3fW8Zr7yGYZ4LEAUQ16RtvVK3Qej",
  "key3": "3Z6E23WwZMeqtvYxu1oazMwdzqPhvR1UH2LuxKb4Bkm46RwRMjmL71cSCim5H4jmA2cBYusFFYhrD662kDLYLBvh",
  "key4": "238UKo5ajfWJUn2PBcqamhNsXNFFZBtqgDxdqeamPruMYKsy5evd1hXiuBgH5NY9C6hvsZEyPyNx2gZotLMQAnpp",
  "key5": "2UKQyTVbzfd6rVZS3A1RiUdF1Hb4E3xVVgesWspYqmWexg2cPdGrqXhLPKwkFcL4JLUqnd9nsTpxkKAQCdojVC8x",
  "key6": "48XxaX71aR83T62uZ2rP4UvU9BjtmUb14cvKehZ4TJotx5ZFfu8wP22RbecUy3YPxMGrpHjs7gN4CDCWBV23PYNc",
  "key7": "5Zd8Ep3n35JZbxsaWPja5kFhYgMDnZeF8nWFFw4hHeJFEBb6QYFTACPzLTwu5QW7k3KWVGKNVfqwUNvEcSctJ5dg",
  "key8": "61FS9TR5Ebbr5XUyZ3UDxhnFeqDNSbBvnBgVNAfAMStHcWYVnQcaBq5LKQ81LjnQ8dcjF2AqiJs6qsQ5ueiMcwMn",
  "key9": "59dgY4LZcmiHAFpagrGprW85NehE4VrwoHSGBkk3rWWR6QVCQ81eFY6h5HdXvG7spjKM94vwmDTJWtaeQ3W8iYtT",
  "key10": "2gwv1Xiwq98jW8k7EDCpQexcumtYWYAihE5uXDSND4u1cqhn4FkWWQvP3MnqfUVH7CmejdZ3ks7nVwrWF5AepGhs",
  "key11": "2A5vLDi1rip4o2kL57coZm2r49mzAC4RGR5DoyEYBSJpwznAMLH2diG1rBaFbnku4WHNmwfWbom5DAHUendKBa4K",
  "key12": "WRHbGoYuYLd7Sv8WbttjiHLT9yzx2TkokfT2hq5WATKy8AN8ekdEdbFkspFa8gxx6ovhxiLPG7aBKDhXxD3dgHp",
  "key13": "4Az3GMpUYSLVBGcwDo92Ewi3f4kH2i71rpHfySdeuPSGEsVeJvZyWJHCrBLhp63AvCLWq5rEmFaknh1UdpJaRUuH",
  "key14": "Xj9qasz4UFn95g8Fc7w9BbKkMF5i1JGTbxBcvF23Yy3KoRmCkJ4GChHTnifJRFQgbHg96PydKu9fmS1ndzyR9CY",
  "key15": "4K2ruHuj6ifzTAeVRjK4NzEKA8jSRrfqTFiXKcyTaBJPHY7ph7LEd4Vbms8cFMfrH713wTAAq5HMZAGg7ANDYk5g",
  "key16": "49mNgQjSLJqFZ7schAG9L1bBx2cC5SFjcDdi5wvU3suX6wWSxyN8gS1ZzjkkVvKAc7B98JXuEzimB3vchDDwFh3U",
  "key17": "5n2yxTKhazhcCd64dfXrXQ4XFq5w2m5JkW1VQCiCeCsQR4okFQsjF9yF35wPD4qHrLzpSEZELXwdQTRHKsWPmyXS",
  "key18": "3nkFGcqBYw6YHxhgveQxLHY2PEh2y4ZBoWqhbwbrMCVrACuYa1X845aPj5NMg7zXWnD2HoSeevpoWaKq6ABoEtAJ",
  "key19": "WEphm7dSv7XkhKW4FmYk2yXBTaY7otgN46YH1PV6ks9sFub5JKL8gMPVy1jaV8r8gSgk47WyzaRxGGtbmUEdEdA",
  "key20": "2pzrytn2Gfo6jTqZ86VbTDas5urMjs9jccNhvcRtp5jkKHBqTyUmPATdzYRkgtWWa9DmLHwXSfYvQVLqabSv86DW",
  "key21": "37CNMgBJF9obZRNdbBYrdDt8iCc5axtq44ehq5G76qQHXQL4vg6i9FYAYzak1YmPfSBs2BC2KcgWTucC2egv4gU3",
  "key22": "2giKji6FKkvJ8n2hJLMFc2uuZjjCPWuGyfs8sn78FKMtqabRFQM4SwkkSkTmNDji8qgsTZLgfPa1QHNAWtpbZrRq",
  "key23": "24iXR5Gfv8BxdBgPJ5cVrsQpQZYuCjBZig1oJfKEi9qzyVZCJpMHtC989hPyw2aiKuXtEGp75mURnQQDHXdZAzmk",
  "key24": "4Xc9LNhLQ2wGxAvtm5ZA9BaKApjDWZMr8ZDGJo1AJtUsrHTL3g2UaW68rZZ7sNSjd1T5mEXsjEwo2pi5XzrMki2e",
  "key25": "5yAcyCgqBzFXSrS85Uvc5swxKW7pwX5QWQf8VcmEFayyy8HDF5qYuHFUcPxYSzGNu7evkVuH8yZzE7e7r8hjrkpz",
  "key26": "3LfXDrmF3nXPJHfn9uYfxwG5pGwe2QDe6fxuDUSp6gz9p1v8coi1aVxuSHMVW7cJA4ipMNmNNdrC1qyUpNSJvBf6",
  "key27": "2cHrTmnMKAN9Hy7uLoZZJRSVceqcfLi6bwNwbCDgafmkkNij3Kcg3M2NpbmMVwW8RZBr7ewig6ZQ5NoiD1g5iWQW",
  "key28": "4LqhShBUGemJJo5u6M749tLbDsf214dpP1Bq3iR2TV4cMvmNq9drT9yuw1M2DpJ4D3cWD3sQFS5YJipuMa7HDR83",
  "key29": "4ivJqMQJhRJVnrD6sWhwtZVGomQG1ourfDF5gTUSttYRXsGRLPEV2gPFU2SMWs8YAN6eV8QffZcwvLPf7FHSFPCq",
  "key30": "33nzC2UeocKq2FkgmqfxRswXi55U7DDSPN3UUQ2gXAzVLoFwsn7RapLXsMxRsmBZJKyGtU4qCVg6N4rauTrSkAGo",
  "key31": "3k6wJQqPHbp9fMPSPhPLAyUJLKsBv7wjh26RzSNobSdvDLJifBTp85vcFfBdhwXtQEACKoJkbdccsR3rDjFz9Tea",
  "key32": "48oX77jkXB5DLwF6z4vfwhavEgrFn4CQB55omLWvTNSDtvZX4n8Ui9nDmc5Xb3pxSPNiUxuwCxAW3iRXzjE6rbVa",
  "key33": "5Mz2WRkgVdWpc9HpEgnF2VWjT3wPBcw2s2mpxeiuGEf7jdtynZCibcRkuxEShVzueoHbwC1jZxaW6t19J2Ls4aSG",
  "key34": "5NoyRgyKaVuoagHfNfHyuSvAtsa2xd6aAXEbiPyjd1mxUVBUvRWLP9ci5SZwcSLRfT2unUxTYgPUTgQJftEBrSWH",
  "key35": "4UKMifFisKo1U1MDhnnJNtkekmQxUPZixXzbBiFJQBvqVDwnvZegAKQYtZE363coSLXKsMrYPvjXjTzaYXeshfiE",
  "key36": "4zhu8v61ZPLmFxbWaqSyXrmKTALwdSsCtmLzbpzBhMLZwT3wRpRjadi8yQNbLXhG2r1yC1wWRzVAZRiL6kgTXNW2",
  "key37": "ZtmEUY2bUXFWq3zoYp8PnmB46Rgk3Z3n56HSKEzuVoVLZkjX94VWtZLsyJX5LXDBCD3wmFwk9avNnMVjCnu6UAx",
  "key38": "3DGQxujbJE1x3qZjaeC36xN7TJswPeuEHSYmwkLkyet9MGJMZurWqZeioqsq89goYdEFkZrJDkCpyVQVMajJZ5nj",
  "key39": "zNJbA6j6PsQ6CP7rPheXKkuC4sNYuZMCmQwh1626AdmB4kPg24Vjw8CSFbKUQUR3jFp9UhkMXtSELURik9mR5dL"
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
