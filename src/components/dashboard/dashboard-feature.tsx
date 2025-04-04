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
    "2PD3AEstYLNKFzc8gSVqCH1L9gBPyxpZndwUxZLGFdYZFFnxcEQat4mujUHqueDw76iwKzhiES4GPLrb5YEQqECS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zym1whxQXJ8Q8BGDNACFfT2hDafQowkQoUyeHRtC9MWji4mWFoCKxJbg1cdRFuHA2ohZmbrM6eXtwyu4HQBHzNY",
  "key1": "5cjA5hbRdBjbw13Y2g37o4XRb9K8wwzUf1oPsXygnFxUP15ZoU38faHFQpHH7tU3gp97iFaLmTJUPWxYnd61hdyV",
  "key2": "56YDbCjw2dHdV7Mb6ZvmSHZrJwdsbdMLprdX3VaQmwcNiMJGX7V188HrW7awayQnaQVBVTcJYbYD6szMDMUcZqmQ",
  "key3": "SKEjphJ9qtTyqhKespTZiX8X4yyZNsybsBgHfaHzZgymWHdnjqCxJzRXz7RyFNL8af2N3whSTHTCkzSTwN6sohb",
  "key4": "2h9rG8cSsuvo3dTX7f1KAEwxiKQpD5w7Hw4BZFK5FzT1hhHeXoPjCvB7eibNAWWHP5TZWAaN9CGhPt2q9zcDgePZ",
  "key5": "3fPQUV5qi6zm9ziYjsnHBGV3wLmq8aEThDrt8cp4erpsEuAuo4RXGp1BRCa7FkzY7KfMyGyPLAPiTGnEg7yhV4eT",
  "key6": "4YB1tY4MfVtkdY3F6zZyuPVCuNEyeHLEwFVxgu5sDgUw6WotKwVCBiSNq1wTpJ1RSVrznkoGJwa1qbctZATYB5s8",
  "key7": "5JG7D3SJattpUG7Bbdk1FV96xWWu4RYwFePdGMhpWXoPAp4gwuogP1pWJpFVggQJRE6BT3fs9QfYG5eLJ83twXgt",
  "key8": "4C9s39oQwWZmahU9VnUPU6pFCsMBZ6nwwV3sEXz8dFySkQVTJ7a5aQqkPK7rtTwR3tJEtDrQrM2aJLTYWWutBSe8",
  "key9": "412smx6BZGsESzE5MFiPfamc45MhRMrQFCW9Rw4BctWx3D2NCMoAqi1nqXJ3cRT44gYPL4NUCjUGVPaEBQ9R6cQ3",
  "key10": "4rd4AbqpHnNdVeSBTJhUXeeGhTZSTn2Wi2TAAzhn2gRyaZTUuuWWiEkjfsnziemz3YPX58WAGr7j39VDEFZSmKLu",
  "key11": "5ETYLKAQrMpxnmEAkLdwvSkGdyx2uANeEZNeB3q7NDHgXibauGT9hSkQYJMs3FHVYG7MrSa6GBnkBxd8QdJudEXQ",
  "key12": "64RXLTnHMiCjdsNLkYaQZaGh6ZFKBs8Wnnm5uAmYiAd4xgyjSrqQnZAb2qD55izfxN3tydnbfiQRLRXmgZdwdsSk",
  "key13": "2JCpDXnztZvjRKqYW2Q7PQVNrG8EVJc6jCZNoJQbydgVjvskpin4E5CP2KfoHTLTRhWMqtjkPnJzGGqk9ixubSx4",
  "key14": "zFksBFUUMFHxdm9WabmipWp31zkMSRs943YYqZtonLPeLWRLi2PkgXRYThqWYSABBWanxbk2VBXVBsEWWHrpVCC",
  "key15": "TJKFUctzJjRPwAbERVyYUymNJno2U6FinpZJT7ro1H8JdBDA7yh9jaFBdUaXRDqLPqivL6ZV51pKegWSr8A9hgd",
  "key16": "4vSWm6UR3jEx43cBH53PHUSuMsmh4Bg1EAEGw5wA3Fabg9qSB6MGZ736ecFkRAS5sy79TnbaE6hXpRKTKzbUZjCt",
  "key17": "4X6gNWnjYXsfMDbb2Z4w9xrvuz9bUgPB6axkPCgMxZ1NEq1ETkhtVXEh3DkwRZ2wnn4zkbhaBiSL92UrPZoesQwd",
  "key18": "3f9BRUrBPGic4bzQcQ6zNTtgp7sucu616ueFsj7A3fD1bYmYMHWZKxpkwqNKM1RcVsUd8RC8n8WcmdisXp4y13zb",
  "key19": "5TkHwJkpSEVWMHhxxBVhhJ7VtxkNhf5adyzKGMF9NG7TnEZNk8WkAKGngdKLWXGkeDeQXHKDbCfMPXPRSXWWDvT4",
  "key20": "2oHRrmnzaHi5HdTP86mpeCHJcEPprosbswZJcU6fmAJ4hNe1TotCLeKv3CLoYrs2TMSyjJ5okareRfCvQunnWhF2",
  "key21": "59YNtbPGkq9J6oD8snEP61jvPDACHqWw13fBSppBiYSMLLBqnZB83iUhkP2iiz8esT8SzAdteBP8WHgoadiKtVyY",
  "key22": "4TxDTJnXoZw1BoqiZQdenJFENnZeKCm3GeGDKfxe55vN2UQi3NWXRTXd6wuyEmhmuN4Phy2EVbhhDFMhX4BwoVzq",
  "key23": "4LW828BKZcoRKV4SXaZeoK8NjmZE5myZj9XDPStwnFD7S5pnYxTix73ak7vMm4oXxFG8KMhnw7i5oppdH4DifjDg",
  "key24": "38GLYq7Yw6gqTvoHa7oFv2W67WprstnfWPvuLLtCToszuXCTzAdFdUrW851oq8N3m7qnwjFT8qZcooMVPcuMSy8j",
  "key25": "4PkWQeyoQoiv2w4PuNAu1oXYwQG5BJbpgMWsDqLTFzGmjJuUbWAAdZbm3GXUHbWPyzbk6waSMgNpZgKUkcfvXj8q",
  "key26": "4UNfVSWqBoZqmAXAnLkzUQtrAxDwuVLLcKnVjSDTcjjnT9qYryEQ24KL4dW1vKaB7KqW7SnuMxtD94Css8TkYenH",
  "key27": "2TeidNKZmYNBCV3Cy8VcBNVBuP8TRyLE14aLwSJA9zEUVfPAUwMhSeyJXagonuYuytzDQsqJyde4WbiZo4RQbgd4",
  "key28": "37x1uAoDUYLR9pxKaSYo2xsxDw1PG6dgSJfzfEBVQuFwhiTUbAZ2NDkpdqYeMwkh9EsWEAHm5Df68QevBsfnRP2Q",
  "key29": "3LUocChQVX5BynWGiDJmRwrGWiTtcb7Cj5db4N2qw7nnRuCxYDdubP1QSjUCgdEAAJ3RW9kKNGhGk5sTiGScswWg",
  "key30": "UyPsL9j3UebdCfpuKGEhrJs3SZxrqQm1fw2pKcnpgfNwQqXNeLXAhNES9nYpwyx8gZXt9gCXuDAxsMTcfvoep7s",
  "key31": "4xSdGsJZmVMu5aW2wvTip5LrpRTCD2Qb66BXoTDd5RZLqSxMzyVQJxHCDcHHzNVegy7ChF9FmDbxPK7Vo4to2wKA",
  "key32": "voboVdLHceLwdxE6emDZefwWbNcCRd9sjKFiM63JD82JL2dDrpVD6iXtrW99tQXUbvZw9X4if6rmxBiRwLYxzbX",
  "key33": "p3BGuAxc3yTkc5f7GYCjYxvGGwqKFX4qSge99dSCYoqRoRxq3AHTMdTBjm8NZXbkWx3dN6FU76WMJpb8fBgQ3gH",
  "key34": "2KuHeDoUSuGS1xP4DsNatqQEZQq31RYgVccMGmf1zH7rh4pUFohVPtXaBVAnFiRztzHW4JDTDewkFyoBLpvQqaun",
  "key35": "2nu3zmtSRi3J9MuFBubtzmsC98VK2jamUu851BdkD9aufhSar6MXuC7Js2aVusffAG6H5PEiWaLpZthtnfFz9Aro",
  "key36": "jZEUT9MxT8jmhwNmDJjLt1ScrrHqaLx2k7UGJ2cj6LKPADKXMG7VeuG2NKBNbtSykuzJ9HLV9wHhb2gLRQYEbMV",
  "key37": "e6MPgn2NLPAuyGWZCaA5Uo1my464z9UwMMExEo69kvvE5RtjMsB5x1m6xYhS1Ck1eHSGA3SA6TaSp5d9HKgFYGv",
  "key38": "4iU3NXu8mjzZ9Zoe2uRwTpF1hLgtzsqmqLQpa5vE4YYzdW8H3sSsSHp8VivMDsCNkRQVtMnASxVxfY3CpEUag6eZ",
  "key39": "2GauiUhBnvea4d4KMyJhzcF4HJLmHoCg9xSF6t7MPsCBz5yrZBdJUBT3SsXzBgnag8k2qQTDYph8B8BQQXpsKicP"
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
