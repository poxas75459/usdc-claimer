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
    "4c2mfaf3mYkvAnCGtj4ZKCszpj2PcBgSHhgwr8nwJF7Tka633J5Kspc1CUmzvZ7B7Kh5S9tPk5mgestrdFiGJD7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5n7i31vWkxBQWJMBhMrt3dQCeqbMmoxK7MH9aRh5L5u6211aTyXfkgArQPrBqHpfFp3G2HntS3z2nDpLcxYatr",
  "key1": "2iHHRLuwJKNscJa7DGkZ8ivzZqvuPK5VXGCgPEYoWakighFPgjcko2tobJfWNUigXxH9Dn3JePkQXbD6c51c6Go4",
  "key2": "cVfsNWe3oTKosUx9bqtjWtQyQ1HPXKUYkXyWeJeGcguT2RvWuRmsYTrWhokF3FWRboHLtCEcuoFa45qWkfLXr5S",
  "key3": "2Pgo12g1qHaH5RBgTBazq1rcKcUVsA7vzcJoN8uUJ8Fu74PN6PWbY94XM6mf5w3FBMjeXW8mpMfB8ubWuZeyoYPz",
  "key4": "2UcEdKUAj3TryGMJRzTBJ1xsuCGtX16eZpEAYPr4Q1UG5jkp3qXHyZyK4BVqNWbNYxewU19Scp96xXFDg3xf4wrm",
  "key5": "sJtQWP5eyr5SiabR4qmhHyzcWNsCpYw5d4mJmSGUNfHRn7d6RZXP6Q6faUERu7PphfPFxKYWxuv3hwb5KDMWxjx",
  "key6": "2httjCVLxbewS5DWDikhJ8u6HUT5P1f9SEmNFCbMrBS3VKhMQnxF12JK9rcmmfKxy7Fr1JKLFp1YkkzHbch76frX",
  "key7": "39uWjnW7oELeGMDCjvKwZndt9C2Tztky4cAQrmgaVU24SGUYtoCE5sUFw8ZJkbpvEpcp8JA2aR1cC8yGxRoYrXwZ",
  "key8": "4kDKP29DvqZSB1rJwFP3kukxAcud55syWYWCUUknEK6xBWykmyEQq2ZUjr3q1AZssXgiCmsCWMQusdaNaToLRsTd",
  "key9": "47ojap7Sm1qawXBMhkq2sMXjANgp5B2et8V91zVXRBxxo2yK4A3Z7fe3hgPjiUe2kdvA4MNgPQfjqsVFh2GwAZKm",
  "key10": "52Wq5MB7mB4aZEocjNcBypCGJHxDxuf8ZShWJ9EdfNkLN6tC9QMtfKBBanPzTbjD3iiCi574ryS15LRPsRwU52b2",
  "key11": "5nDEXXZ7YKbH43wUCDdQduhcubvp4Tz7V1jVbShidwV9T7DfMXUphmEFm1n3a3fUiKkR98JHKBToYEikgBg7Y2So",
  "key12": "2reLaf1UQmyZPHezenR5P9xCGgS9eKGHBxt8yzx5TbhuMMAF5xBuYa6aC3ZEzmFy1sbnyrn6yJ6FMn96qmJmUBsd",
  "key13": "5k92giuaZvfoN9Mmu5LEPDiiFodU8nKvpnQkabeWyN2tBkiZX8WCTpRgQCt5M5GAtWKCJDVi8kTdKSqxx1rakwEa",
  "key14": "64qX5Ryo3bsq2DyKnSWLbyzc5rsXcRsWYxmkqqeR6ddGwn7AzbBjCZs1AESrjnU9dwEwy32B7hdu6b4ZhCkEog1S",
  "key15": "2h2QkLJ4mVeCLsVLex6CbbQsALRokcB8v69bbVPEyYR4G7W2X2QsGiZ6TVcYTaE4L9dJRW2WTVvb5keiXg1mhff9",
  "key16": "2ebuQv8mnSJPtRzi5XB46eGXSuQqo4Mjk2BdLA37RA9uP3cPMJmjk6RfazGgdW7vv9TxdZgEr7L7T7KbuEbZMbNv",
  "key17": "5U9fvKtJ6pJvrSWRNQrZZT9aaqMKbub8ARoMmtVk9bUht6k8pMzrMQ8iF4Cey71zgk9RXFW51U58VsDKyKJvWxck",
  "key18": "B1iQgTcefpRuDJyAwBgkRnonoSKGwTmdxKY3kYXu98dWCNkUryZ8jXbp4dbi5UarH8z3H5LBg23teAXVuZJ9XUw",
  "key19": "Lj8Tf4yGFZgwoRN4aDcz7fEx4hCSC1UrzMAhZU1cGmRVr3d1AahdWj1U1gTywiew2bAyC2eaymWJFxjmSb8dtMT",
  "key20": "2tCWArUPGqAEBnB9a1Boo4CadhJE1KavYZg7okUsTsLLEy8KJfhVoGHBfQBAvWHriSqXvQLiBu3heY8zDCDjqiW3",
  "key21": "2oZeD72PHSXHWijYQBcdX5ZeEvPEXu1rSohuVGE4d6eZ3Jw76uaSQk2wRhwUHJ5kiBSKoGuKo7jDid23oWdM6atn",
  "key22": "2qyphMJuFPnSCjNeRC3X1jYvdyMvHaubiL9L48JhGooYJMXgAY7HVMJwDVAii9zHE4pjd166x98rhrX41UCFxi9d",
  "key23": "8SXNhVGH5i2PwQMRwZjHrBnvfxohkQrZwsQaYzadUYjxFJV35EyLyk9DXJuPyCbizLT7tDA2j1EEXpHh5Mn1mhL",
  "key24": "65NSt8mWjjeVF4AmqtRdrP3tMBqggMuW4y6TZC3TcxVamXeVQt4XfT4puBqoB1eNtxieP6ZxhX1zMr3QAywkV6Vm",
  "key25": "2m87yB6HeJhcnFDFx9DCFJdjRubDnCYkbsfUJuPhi4kGt4pL1Cp5frG1KaLEDmm9WBVK7mRcGDd51GjqAoXpbiUw",
  "key26": "5ac4y5rSvxMNZCh2gMoSFJUNvTgjmZXzGXzbd7S6sD9TtxvRb3sXHaEmvEDDgiNqLMRFqptgivtmKqc4JCuN8xrS",
  "key27": "2xsqHZK8KHLiv1JGVsG17bpt5bGkKnj2C5SLCnyFZTfuQuUrqxSdSZsiP17N58X2ED5F9EoPUAebj82DLRQbs7Vj",
  "key28": "43KB3Ch2NVzyZbSWSE3XjHXU7tGBhfgVJQzck9UfqkFCURJDTh81MgJs729vn5xw4uwu2agbY6w2NBoGZJRaZUtK",
  "key29": "4H8LtBJegviRj1teuKCRrWnvvM6JxZTwB9mMoF8XHWy1hvJDKRTiN8iWovT1xDXAPv9DvrcbG2ZB11rGi5wErHz9",
  "key30": "3mqEJdvPyLmAGKJoJV1ix7aeHi9Prn5qR6Jq5m63K7L6pRb7YZHSuAwN5swDnzLLKTpXCr2WK1tyoVDsLeeDVxxu",
  "key31": "3QmXveEYD5xx7hzcz8EvbZjsPu6pzoqWNtmQqKNTDagfVSu8y2JoHVVGxkUuGz7mtKRRWcKYL12Lf5Bc3YfL8qy1",
  "key32": "cN75is4bxNBC8fmxRmK13pDRexE1r1HReokFrwoPBUtErj6sCtKGtWYAAZ35erC86SQFWG4KxoHFFmFrx4ssCqd",
  "key33": "4uQ9MBiX5LkuL6NQys7DrDoEXVzaJKGjksqqekym3oYGUtcmL756bGdhPp3sKYuQ9b9hNUKko5MW3LVBxb4ugRRk",
  "key34": "4PVGFbRkMw4JBhzzaAonqutntAXsYy37iKpqf82TR6xuiWJmXWjSP2SNQXwcuaaXhtorjES7C1Pr3uxdUyb4ow8T",
  "key35": "ZCaF7dUtrDUtha9QP59MNr7Dwq4cV65DJ8nBJUR1bMYbsuiqe5eqFuhSqvXH58xhpFdAyvN9PgbLnCsoz1R5FZ4",
  "key36": "5Jb9V2Ytai2uxcCiedAgUrLNuqvUHtEQiimeB8ao2HhHg2Qjb9UnL7QwoueacciqZrLTS64qvbvoEx4qM72pSKTL",
  "key37": "2a8s9gVn78s4TfGvxc4T76F28s5UZ7rC3gNSPCHKedtWoG4k2RHndK1n2j2ggpzMQtcUtJ7Hfr6BNWGTwcbt5tqe",
  "key38": "5Mc786drcRuhsP9vQJzz4wg16PabmZWBKJDPAhDcp6MS3m4SrWKmgFgJKzMwtxg6dy18aLiDduuqW11mnBvFGruX",
  "key39": "22iT7s3k6LawPptzwtr67fQ4dQWZBXvuT2JU9BmUpopqw57fCVdCi9E8YSAMSzQhmhjutN1ES3ru9Dz2zddekWmV",
  "key40": "5Q9Eodph2fJTHmGrjEezUzeHiKMRNHDuz3D9uJdbc6YkejvvzoC5XEHNQqd483JFncxvdzxtGQtsY1cPkxLUMavF",
  "key41": "5moitJL15SmMQfg5UYYL5FUdjPxWp9QQ3Ef6mBEDKuz6yqACLhXSXNdfHThpXVcTMKsTEFEgRWu1zi4uHaBLx5r4"
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
