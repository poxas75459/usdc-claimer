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
    "3Gzu9232hn4QC3BoNPuCo99wHNzgpPKeUzb1MLfNZHYaQtUPDvRuzP3WyyY2ccGC2FHhYfGmgHg5PEKyxi1PbPFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzjo2RCECTfPzGJur9ATxmCd8SW9z4t2dnyRMXxfHQ5od2KSTtZ4yYHPzY3H9emFUrMSU8FBTHdLbVdCQh3e8cZ",
  "key1": "5ecb1HsWeBgJuuvH7H43x4ezGjweoWrtWyuepKm5MRhpJMqS22T8dH5XEWsbkm7QF6k8Fn8m1U5o3k8hPeqWJVH3",
  "key2": "VKhKKN4Fwg3ZUjbULBmi5WHzCSCG6koBMz1reSAcnzK7tRmeHyCFGrphD9FY4XMrVSa3mkWwRjWXEDMhECdJEFX",
  "key3": "4tmmvgVtRJZT9uDTB275rkdvhpQcksdWNKziJ4mtSbHSB4hZ5erkT1B9PuP5oSE423pCcY6DDgRNSHsayBYQavEs",
  "key4": "QCFg7Q45uYaiPVUAMycmsJo59ZrfMq3V8qFpLaGJHU66NxW2AjiFpob1yL82zchDRjauF31ydtbmKoyCEzSnXSF",
  "key5": "4f52Sbqep3u1jWdapzDuMNy2wKaF2wtCsSp3QW4VYZC7ej7W2AGWuMjnsrF3syM8fE6oFLMkpxeV2UhFLfWttUmT",
  "key6": "2xvTrDhWMuR2FwvCmYJ8orFNJAENFDh9TKEDmco4Qt5wekYU5h1oHatN4sT2QGgFS9Do7WMpsHmQkP44oi94Ld2U",
  "key7": "3mXVR5953X9b9Bv2JLBnYFaBtxeNv7omADW2eTf2May1VeUpnvjSAxBgXNwmnnHhyNu86MTDni6S4vGV1YUrwkA7",
  "key8": "6FTFNj9scGBDDjCVvesj5xBQSY8Lk1X2n1oANSAeEUiTxvXjMn2y5pLs67H1PpHkb261QV1V37vNkXn6JY1bX5H",
  "key9": "4edujwdaa2TsY2eVvMQaZyL7Nn63BMnKYTp8Kd6nt4CitH389oWzCMJxUCxK8sT2FQX8nDzcWAHRFbvM2mDLgCbM",
  "key10": "5H7oN8k4V2anioRvtXtieNR6xPpykaqAWanyZ34bFDtk6wVpYjc7kBy9TjcCdbGPMLoWtDaXb7KUP98WUCdMUu4m",
  "key11": "a9w9FQFitSFhrkTLUnfuCCrvm932ofH1G1emB1tZwhGzjk65XTQeNAM4Ze2jDenSupwQKRHt7yLUhq9CmV4iEtB",
  "key12": "3okwLWBTPYebPgBJMEZGkZ5cLvLsSR8ykQxWLJdVq6BcQtDphVNbHWH5SHkbhuwjyXHVmNafepz8WkvgcCoQvJF7",
  "key13": "2Xfx4RuJvXgBSGExKcxdwkA6pKprcMAUK4h87KoBkTNJNhxeALvvt5aUUQptgJp2ABqoNdwp9DRXYwDr6JMB2umq",
  "key14": "4NnchijCaEF9Qx8idVskcwJ8YeLRWYVkxTbwM6UEmZpKwE81vC9iqVByZ79uZusMGeRd6UXzwJTGRi1tTJMLvHzZ",
  "key15": "3Fa5Hxt2RZnK7srqMXVCt1LcGkPBkhSkqvQC4A3MujBmuvNTbuohLrKG7oaNFMN3DQ5i6nPybVUzDtZYWSZabyBJ",
  "key16": "ZM3eeuGayMcTzEZjsmQUh3mCpT9FrkjZNgQpfygQNuEVjhr9gkJmT8eLpucSnnoRtdFZUdMjyX9MzFAzAG4tLnp",
  "key17": "2BHKXEGXWjxtdkL9UafdLXcaj3oZPzJmouMDNSE4HXqpLpz32P3GJpA1B7QkzqwNvnpNeaj3bAs1qd6rk2a6P9W9",
  "key18": "4AKmQq7Hdq6PpDibhbNurABcMAnWjttKEdmoYTfbdKTeEqfAa5jnzZzeQKVmbr1dgaXuRZnQyHriC2quzpZJW5jz",
  "key19": "2wJ6Bso62Wui9Fp7E6qNGUdb5TxXDybT7yWBPFzqZsDQk2bK996BG6oybTVdqs72izopEiyy7kLH1Pm5U8dbSxB8",
  "key20": "kBbaJsfBfQ5y9mFxePUXJj8rbR4q3pU8Q9cSVf5Yy33m6sJTWLJY3Y72PEMMADpG41PoKu1EZZPNv93BTCn7SqW",
  "key21": "31LDtX9dhm2R8pZtY3xUd5dbjNDkJ3xaP6Rd93tPiGUAtGKJUwB7UobUTYvHpwJHgSv6V87nTc3VY3Wq1qo646oZ",
  "key22": "5g7utQT3TTkGWeHosFRPxWKYyWYNvYjfaqH6qb2BySAhR8YXjh7qRsN6PAC7522c3uMGe6pVbQxxuymtzohSXeY8",
  "key23": "3LQeNCGA6GBAqHK5AFWDn9qTqEpriLDgUpkN1zFhU7Nhu1itYfZM7yQjeJnP8KdYz2UCoVaEuDH6f5hE5hBVsdkD",
  "key24": "62KC6Wpz7k5Mmzc4jucyNRFGfPDhrxGtmsbqyZxBN1Z1ZXh2JXKhd8gtbPW5fsDCucPo6h6FJF7YzGgjJ3m39sA2",
  "key25": "3HKYfBZLwGFa1W1jxpfwMUiK12wWRkK6Fyyj33gF5VqWeKtZQG4KtCBukuBqmRAW12nqN6FhmLyjoxbWdkVaJCc7"
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
