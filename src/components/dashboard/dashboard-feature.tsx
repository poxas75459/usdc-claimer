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
    "3yF7aKpds1b45Ce44vcLG9YpgPgpqi5A1SMnA3ZFXvDnLUNewFJpux7JmKM78FkNN77zAzVVxqL1yJArUQtRaT5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4guA4jnyDmp7Q6r535zgRtihJiD9cA4bpSMVTvysq61LQxzUCc2qudYMfipVPgQT3fXp59PhUgbgV5VHTSkW4xNs",
  "key1": "TVYQFoC35zm24wCor6Nwv2ZX8ANi3VwgVfHCv6hD4YqEHccAHtbrpBADCTxTD5DwV8PXwbChUNwSni7zggqgT4j",
  "key2": "81YinRQbskDza91Fpo9ij9Ya66qHAuEhHnYajU8p1aX8sryWbD8evbsFSMT54f8EiD8JqDU1y1mqzvZAoJiq1i3",
  "key3": "3F3LrXx7c8K15H2vMtKiHxgPyK1JDKCbrjadaVSJfrUaekdxoFCZx1GYi3D9QxYaBg71z1A6aZYVX4fXrqJ6XnsV",
  "key4": "5HfW2uoBzwRrRrXju3FKA8ZMZRZ2weaMXuayKPMbM365jhC5wpKTgnKhpcczHZ3peAAQKcyPNY1JPa3eHJyHj1cS",
  "key5": "3eXeWpP3jZ9HmGPT3mTqyDQPWeT5ZgAmXzqFge3DEBJ9b5ZQmvTgdFLczunyJeh5eEEhWHNcGvnjJTsmSqr4Kfsb",
  "key6": "3JrcT3Bqs7sLHDsP3MygRRyMUHS9p7mMTpWN8NqRyLQ2agwmLdHSFpp5bBvPEfAm6myzVJHRNAMiQP3Jx8ajVamw",
  "key7": "4GE7n4WvtUgxaDQRKZ6dn6ZHvX1co4goKTDwxENU3mVurRJzRvs6DrrWuCvEuQVTHa8GzY9DTGvPwFZfW2avLQmE",
  "key8": "2ByNTjtk8Suhh2JtNWWUUeS4vszhfv5RxGGNqGHJfdN5xE2efrGNY4tZSUFtkg4U8W5LE7sHjnekipUgt4p7gnEm",
  "key9": "Gv9XFvRnczY3esTyufGowGmTYFJ168m9m69mzeQ6KnZJNyQdsgqucBAg4V2e7cGZMVPs2dkGxCvwgxoc3DsCPBV",
  "key10": "4e1HiPPBECSj5MpSU74q7Wdw2PkzPBZWo7moWr71PiMZEknbqW5rfTyaBsyMKprCdHyKXh5mqSxf3LRwAkN1xoX",
  "key11": "4g3hmAVN9eVdFThy6RdPmpQpF1Xrzyxm3p7Mnmxn9A8DKMMHhDSiCYxtviTZt7u2SGNn9uKzBAiuvNRZFcvJAcLf",
  "key12": "4A4bfceckpoPDxEtz9ZRwJkWChaP5Gza7zJRpprsK1973ZzdACHDsJsNeEiE1dy91jA3jcjpfzF1HzJ1sDJiCceH",
  "key13": "3YoKsyx5jkskBKBpSvpbPMeMTuGV5rTeLSuuHujNYPgTo1jWFJvmYXn4Cq8FqooQnMqbdTMAA8pXJbaqZrA3EbaS",
  "key14": "5WzFgkGdkM1VB2fxh5hfAuJKVWB85swm61vdwTCR11i8CKh5TF8oJesMoWprsJFjri9A5T43LVEzTQaPvvbzYdw5",
  "key15": "46cdBsr5DQiMA12aEYoxH3LDzA7Cs2fgnztm1QoMiCnP8zN9VxFajqdTZNgD1uHMxsj2Gmvi2GsE4VvDD3smkfP9",
  "key16": "5uCiqLtrnnaE8rAdDM1z1D9XZ8ePczfnFEDhr4obqaKy888cH5enY1WFP9Da6i9g9GesHfdmbJFsEqCvK93nPdT9",
  "key17": "otTYeg3RkPexUG3MCdkqfTdgj1euBpC4X8c2qVrQm9XaSS7aKfMi3AdtQK5SD7HRW1EMZrQA7P2NjzoN4kUrHVY",
  "key18": "4Uq6dXFqKM4fAE17Mkd5eF9pRMkT56PQSy8vN1N3UmrcoKzHHM2HxEMTeeuoPHKTsbvefVNsadbXSfUt9eCKpZsW",
  "key19": "3YgH3JrcLkkn6bGpRFXwYGJevTrCVLeZs2NbYWhBAWY5e5kJ6S8ZdXAQrftZY1KdBu7M5EVtuVvJo9J2CerE99xC",
  "key20": "4ybYTGsyAZwiXvQLex7w7jdHhwWkMSQU3o6cGug9JTejEcvf6Uy7cW8ugkmYzbrk6pJ8ZSB7Wqu6fsyx53v1bnoS",
  "key21": "5jVNNSki6sNc4MLdQLdNkCTK7SrgoyR6x5xN79qHuKvpqX7sN8zMTqGruFq8iJoj7ZLfaLGtBH3FCax6R6tw8X5p",
  "key22": "DjQMwgvuiwh29AgT77XNLfWGWoamLJ4EJiYj74riwvJKDwH5EUyvLkgNyeosDBAS5stvRSvUuVDKr6J1ZdX3yXi",
  "key23": "5NsBYW2fBxScRLtf8MoSmaQ7pj9hxhRJuiXnaAvatpRK8zmySfckbvMkiYVWzfj4r85XYqxBkBc6T45vUsuphw1W",
  "key24": "5pG1KoYiLHCfBom19mVp98zwKUY6KBsncV7Ww3ovhYs4dopiL2c9pysmw6LdwUog1jpqicncZKM8EWmgrBVuP6NH",
  "key25": "5N96K8CJzBXQEsymT2VFZ9QCNLWqhFo5bgHTg4Ehqf7NaVMpkuSZb4Zngq736QsYskCPnGyVCpfXFtcsR1w7SwPR",
  "key26": "A5sAK6PYzfzWgSPHLvn9kEw6HNgmRtPiPDTne7MYtUVga91MM2Hw99Hej5H2EqfdHDbdNrsu4dyX7Rvxb9Txycd",
  "key27": "4gXFGvRCJd2wU3F9rbJtmLsitCJTbK41p2MMQiW75dHHxZjce4wZvDbvzNQTtxzFbXCCa819Qa1WVCXbxrpYL3N7"
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
