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
    "CmexwFE5nApdKgaAqzBhVcRWuXAiZqk8VjBCiticLZkE7rrFzCgWhqMtsUqhFrExgJNJwPWptrVHGP5ZHeeDCyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUYz9cj8TxSTftRSUVN7YhhtCrb5Fy5KZNvVQCSNo7iTpmvVMJzdBkEyvJsjEbSmMj8HQePgMSuE571zrVXWoYp",
  "key1": "Fb25CtAc6jFjsE9HXNh5gCtnsixtxXmNjpZgh4E12PkCPPcLWB2Wf247DXCAy1WeJjNciq8onAwUpuvjsJxc76J",
  "key2": "4Jao9exaZdLzsfXZwfgNkgShP3DDvY1RRdDyNmWpJwb8hWyHxRzSZ3PbvqSLCQTKEgGSKpnXPMkGFqHd2aFTxKCD",
  "key3": "58wTaKBaeqJM3ziwhNJAr5wspr18xoiVVobcyeAR4abQ3ND88jeqsDKTAvUu7m5ZWyEEgEDFvsjQTFvDvaXoKKx7",
  "key4": "42k8wjADJEbQAVUJA1Lmdi4AjU4L5LSLRawSbwz5NmM8uM2o8UP847E8ih8proUC8fDf1KAkNcucUP5FECk6JZgX",
  "key5": "3mduiWTuevzvxYHLDP9FjDFwJ3YXkJUtJY64rMK4kwfP629eVxByyRY87RRysGFBmxq787ihbA6muUe99nuqjFm8",
  "key6": "4HmAGoPVGR74wLdVvSpiEJPV7jXCMD4iM3xzifCnGaX19SZ7Af2ea6P67kA5jzxbScMaufSm5GPq4UQkG5A9ykFj",
  "key7": "2udRTjFZt4m7Yemu1rLcyaM8HeR8qfLFKHv4mUoRVmZJnAAgkTfXpcGYBgEQHvYS54bz3xuVguKm1Lcpm4vcKq5v",
  "key8": "2eTh3Y9VjJJnuTWudUuwupDFydBDXB2LinWiuY8EfWMmzr2Yw3XkQAVdgQWENmtTX2Cz6f7jMCtbSVhs7PuFyNFt",
  "key9": "3Aipj3CwwnQmrqYenyNWJCz9TQsUqCHNY528Egb2WUioPXpgMNH9CK5MaSxBWVCokaqjZisqkMTCWHGE3xBADJST",
  "key10": "4Nz8NcZYrJKggCCGzxVkaKBQ94bYCEv78AdicPkBZ3C2vHAkMXkyXqKyw6fJPe8E46a5tMEhq3zRCAS656mSc2po",
  "key11": "DjaGUiELmz1AE9syGtUR3f4pBY1rVieB7KtesMLqcg9fRUkV9cWSR7x5GvLaSwzRFEbHeDLypH8aYHmdd41XqwV",
  "key12": "4qLiwEJUpnMmGjo2Nvk8zCnYABytu6QFt9Zg5ZEsQDRqZtk68Kr5N1trkAgq6UJq2K26Vfx9FAPx828SVeVAhpE1",
  "key13": "5RYjqM7cGvmSejAWtaD8puQQaoYjWJWzRHNuJg7gEgxHCjDrkUbiMwHLH6ha3VcYnbv9JHZmn5mcohhK58xpCfRh",
  "key14": "5CY1k9ELPRZg73Ny3ymNhGa22NGMWKVg4iMQrYNKnqwE3ud5SgALyCBViDeFwfrpfHGDcCVN7tMKc3DPYLXZSgWF",
  "key15": "4izqwN3pt8PYEXNAKp99125Zmmpj2fTi4vwa16baraaC15ZD5RfN2FYHjW9VkBWh29pAWJVDuXutWt312oynXHFk",
  "key16": "5smNq6TbbDSrsxwaji1JujsJmmUk2MEcXrRrZv5K6rJwcggTQ9tSJnRWsWEfssKtXKVhwnPZYLKDre8xaNZv9uVS",
  "key17": "2N3EFPkKNkWrM9ufAjVozLo3N3F36BvjaYyqK7LiEupMAZobF4LhNjFmauVcTQeHxmgp3iDdUEMP9TM7y24t4vMD",
  "key18": "47oB7TPAHPyB2nhSCumdzGVZLPQS1FK91mprDQejzqN62UAwqZxL71q2a6vNG2G5ZoWrXxMjvAszd5iZgAE8SbBW",
  "key19": "3BRnPhBE6WJ3f1R9Ed6fyMiBmqRM3eMSPCvghTeD4f4EeKYhL4gJ3ZPEHzUi65FAyD66eEmsPQc7uQRjkipD9uQo",
  "key20": "4JFjuS8HZFWDknhBgqnnW2uAo2gFvZnr9gVJbqQ3sCqAmEsjARotks4R8A3zzN11xSLJSK88NHY62hCbee7C2KVM",
  "key21": "3j3RVSvQyvLSUV9VgfYGyEtH74W4eEMe1Sc2mUX1t81LUwmhNkivEUUEEfM5wwMp7x1HccAY9mNPuF6vSgh4Sm98",
  "key22": "3h9L2PpPEYkiKgqDW9uS2mLeSGfuBfmyMCMptmzVq5Wk3AogC1t3F78Fkc6SqtbM1GEgtNk6Sygbyy2EFz2NHzYC",
  "key23": "4Da3KfErNpzr5dvQzHK6Fgu14SQETdjPBVCN8apSms2Ec8Rec2crh9pb1V2sx8J8e7vGBqBHjpPuuibePFGmGVEP",
  "key24": "3sCFvZRejr3ivGUSsQos32PmuwsCg1zzBFG5BfJLw9JxoFhuyifEccpvzHhzn2GV2qX6J12E3PHLEwQpnMeLtAGU",
  "key25": "2Aef3jVEWs1BvYfSCCHdnwEQnBPF7kLNgbV2JhndGRdga6dPShtrgwBNtW2XRBDtwX8m8L3NtQHqAuSbDofRTnuA",
  "key26": "5GvPAec9LgunZ4BRbgPqsauyxAswnQvxSS1PPdRBWsYKEf9pCP2Q85fdnCsHbxMCK253N1xHVP4Qubh5z33nXVxz",
  "key27": "44D6e6sJtCT9f1o4RQCJJoccBfaUDDxvFndiAQNXuXkePp18UgEjocmfz8aaiwhzinJRRmhPSdFdNMfptVbgg69u"
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
