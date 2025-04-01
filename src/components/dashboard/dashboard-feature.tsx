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
    "255zjQUtgYUrBFP1dwdR7Q1FV2qVhhbvwfqEaJD6kicZ56rHKimT8hFAw9L81bDQq6dYpbUGKFsGypqkV1BaidNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499koALj3thpvqodY3LzhkEApfhkwiiR3n9w64g8BeobjuuKZ85ZE7R4FWLgpvKZrQp8hoWSPKh2BM6hvZM3a5MN",
  "key1": "3FxZLCmSQVHcfjAZNfV3a9qcPVQhJR7EjHHmbVk217jDZ4UMBFF5Wx45KgLm1i64MaZoXgX6frN6MtPbrvTtmbcF",
  "key2": "2ajrK3fWrTariBA6tJkT5XcK7fcRpQM7Lyorhj7G1SNGbuhGLtZppaAaivyvnHvVGbs9Bu2wWUE4CdZFpUVEu32M",
  "key3": "3ytMDS4vcXFaBsYAARv7Pc7gtGqDz4um828eyNo6vMEKEPk3moFbMcHyM82oLYsikHATzwiBTMSS4JeLQ9DmMjqG",
  "key4": "42oF6UyaYGFvkP3oenWefUi9f6d3psdhVkgXFcsP7QHAZxFP7Kx5cztqJAjqfU6j3TeBreR15BtrqX9mxnYFCsEd",
  "key5": "m6gVoDtHGDfHE3RxPicx1b4tVV2Bf169YirtsAm3x3dnBF7PFtTNrvQwMPAbibhs71UzZ1zWh3sfssJpQYaoHdB",
  "key6": "5Uqk2595gaQm4zwiqWRZQm9pAddnyfvXUkvoycPfucNAV3k16FGgJjNuyih3qWRYbhW7KNQEnR6J1hHKp9fEZvUY",
  "key7": "4PBqy7UWPHbqPpZR5Lj6geU2vWrEH4RdLDJCn1jLSLGgr7w3jRNShLEsUCoRU12FxH5pXXtH7XtnzZX4RnMH9h6L",
  "key8": "4P1BSok4HKoTbZeWQLCTWKf1cgsWRfgn7cypNPHUoY5xh59Lnuq92Td6SgTA3n9WTk56CRzTHbLkmFWUZ9Lzm5pK",
  "key9": "2KRL8iMBz34o1zbkVXWtBSuXLTCfrFjrJi1wQvaxaVHx5LKb5XYZYsiXiidhNTRFLj1LxjEbP3xqXWmcp9C1fuc",
  "key10": "RG4s44XYkazYaj7eLGf7QH9ZsNXqr5giQ4of9Jt48fyUfGN4QBECDoi51RdQucAALEDHbYo3M2qRN4mwdvFZoxw",
  "key11": "3DXJKA6nvZho7Kwy1Fv2VvwQ2Y6J1UzGEUorrmpTVDSZbHFeNUngxTE7E9dPQZY3RXutXhZCK3kt7p1ZxMjAHJW3",
  "key12": "3Ttt5pwAXUvm8LhM6EtGx5ayKq4jbPaTVKJ7eTCXqjTaaVKUPksGuhuQVxV6TemxN5kUbPVZN8G3UyXNuydnus1F",
  "key13": "35GAb3wtqpfEnq1gjmcdewU8SRir3qAa8EX6mVTQrHBtPcnHHF8Rx6rEABzYquMS4pAQHLL1MXSfRaD4iw6Ebr3z",
  "key14": "Mx9xYzz1ewDTAM3Rn3Rdo8m79E4jLLy7qbSr9TN9FuZEAwucAxKFkQyEDsKV4AAALJiq4TJydhmYEsuSKcHhTjd",
  "key15": "8YDdwrfq6JvTKXUSs1U7GA6GPWhZPqhXvwcjpSZtaYddVa6eMPD3svnWo7gc3EMUDh3TJY2QJrwzAh8zSU1UeTG",
  "key16": "3QjqLck8H2WE1FwKyjEJQPuRLVALXE7UK75gveuevHfvUpwYR2RA1GHjC8e5paGSUQBnQuCY8xghQMbxRdgiXnnu",
  "key17": "2ZUyRJHKJgHgDvXiHbmQC3fNbEywekfDP6Rn2hrV9EFZUcmUJFEnirvCSNZ7ipwjrQb1xajVhn9GiDQXhtSGzMZK",
  "key18": "51uD7Q3aRnemLJc4hExFWrP7epdBdjwxCC2PTpo13jPQGXmJmm4jyHXyCgnsNuz2VZvQyQPhMEJWHgTLHAYsE86e",
  "key19": "3eTZsVWoSqYpoXE5jBdRh1QN6ZazYyoos2VroVnDYBaVjVWNYoT8dsPfW1u4hpSaRu9omKQHouKbcMXfrNdhCHBY",
  "key20": "VwtD9XY7x2iYykAXySbgiHrhGGxk1qhwTnuJovWGcuYBBbUeZPkvppVbszJWK8RUFkJJgv8FqeBUSvd42CNsDcj",
  "key21": "537NNiTyoNSV67MA4ofgidXQbXXBkSNjwUVkTGNaehxCEJngrm3BD4tcNo9zL5HpWHqNfoJUMfexD6qtEY6qumt8",
  "key22": "UyJNhvk8cMsbGK7qJv5LbxbAAWXeLo337grWHuXzSY48rLtbEeRG4wP4PjFQZbCnAT9BEhkX7aPN9tmdUbktnXJ",
  "key23": "2fbFQ4KHnMx2wtjiCTyJnRFgAXNbBuXrMDJBtyhmrNi5hEyFYyKa2nsmhCGCF8PpH8sbsbkxt2nJrGErmnncLrLe",
  "key24": "2ak7HL8iiyxmpSVhXX3SuA5qFoZPPWWq2kjbtBNeJhmuptit7o9maEeecjap2ZZJXvVDi6xrpb3t7wEEVrExie14",
  "key25": "3jZZqR2iexUB8mmLoQeDQ99hKCQsoic2t9yWDUJa7kSwcmpgwiksRRgXt9TL4tK9xHcTc8D6DsNFD5wVnRAFJYy3",
  "key26": "3kkK5QgNSPwq9BBSBWB3LwgEVVAEW8GS6EgujKadmUSZFzWRrwSoGHdScd2UavPNKVJUJvCscx3gcZ9WhEfaSbfi",
  "key27": "4YZX5NDJxWWCA15uJ6TVViC4TSZA8kWgMjzc2ua26JyAjM9s36nAZdQp7jJD4SoXMZQFSvU6f57KF7j4YE4Y1URE",
  "key28": "2VbQjyr1f4wgoxSNjJfGbdXPWDuPgb2SSUyXBvrjFnMATCc4ka3vG4vvC1fsqpPMsXeGNePP3xWkiYbPDhnDLG31",
  "key29": "e6yD4aTsG92DHwxtNANBXJMeieMZPdU7uhYnfxqGRYue2ndcGk8KggJBjU9VvyX1XCpJPzELFPdM3U5KAY8UNc7",
  "key30": "HuncewvxCFtHP1eXd7yqAdwCqPErDr4FpikoSfFq6tcR7fFgQoYLHsQEShkXcBQeLtbxhW92HWLzPLhYG7gJbH4",
  "key31": "2saMtTkn9XuEVtshGEjSpZdroTmZqDU7mSNiwyyrrknqJUkwkoZuxo9ozZgduKqjEs4mr9DeTpQHNX1JhRnPZYhA",
  "key32": "3mCxfdVsrTnKSfuVeNxzLXC9g9FeraEqmoQwC2xRT1T2CzQparEd7X1ySd18ziVJBjwtTZ8mztMZg3X9Phw6j21k",
  "key33": "NV7LxT23NKn1mhSgyVq5hKWycx9EEshPNDdCyZ4WNxS5i7E5tra79e75pmMhpfzhNKrwZsLfoZa7VCpw1wtwbYu",
  "key34": "61szSegXANGGQpJpghY8UPqtmrdrXuVHN8M1PMjuqjJTtCNxPEAgRhKa5Vgn2M5uqw5HhU9sdXGqypTtdAEajxfV",
  "key35": "2QpM6eYBS1C6kgETtsb2SRa6sK2xegMMu4dftgkjztTELsXWUEuLVGEQ66ayR4MJij2bCAbvRtMW9JxhKam8HXPa",
  "key36": "2jdJFDnM9Zjjh1JMwm1r7WsvrkBj3hJgiYnGrvK6vtajWEGyRQEgpcFUYpLx7ZbPSjgk5xq8QrK9AyqSJCU3RTwb",
  "key37": "5qcb21s7toB5gmzWr7MfN8xcH1eYbmCCv9XFEXka8yoB4AGs5nvug2Bm9FRTTx1NrDVCvGzmx9FNHb4dYZfin58y",
  "key38": "2Aj4mK5LHXrAMijmGf9wUWCm11ZcNRegNxHWF3y43YntkWUj6FrmQVqsf1GJF4pHRPZuao68o4v8oRzSYE8HWc9h",
  "key39": "2WgjkXziq3YbbsiDgnhjyZZwqAwL5s691CYCEgEkwapwTEmzVRhMvFJjYrwZDK35Ra2wRnTf6poJMGqKYybXerMq",
  "key40": "3T4QNfYVGwD5TakD2dozSAEMjhpDAa4dpZK8kSuoGxPuSyTzysQxFYnykC9PAN5oB2sJPVozynTYw7GpnX6upcat",
  "key41": "3VXS5Fz8B9yW8jhzYqYCqSxz1xJq8ztE3tjsY6ocQaqXCB9BYnhU9psgb9HRrqYB2xJb2ATtBJnGS5NDv2zRqfa9",
  "key42": "5CREq6SyqCqmkwW31eee59H5zsLVdEFiChgeVZvEFHbp3ZHR3rQs7DddFYAGcv1mJyVaxmuWh8pDiUdfDRwAt9tJ",
  "key43": "HCDhEPpGb9JsEPdB9tkTvVNiEdUczRvi8QhUz1VeqQ4uC4EFDrgoWgAefApK9dk1ey3FPpkGEwqvbGqVBoC6TLP",
  "key44": "4845RUVhzeBLqX45Ca4DBbn57JwqFEgM8wmP1h58HqRdF5BoDzf34GmKkDexE4eFo7fAv3PgQaFwoWAK5LHUtSJY",
  "key45": "yGsjce96H7862dzbwxiPRMuBWHJMuqWjcirLvB8XpMXr9KxHaDNohv9LMDRPsHzCXJkRtvKLxEXwWjFbDeWeh1G"
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
