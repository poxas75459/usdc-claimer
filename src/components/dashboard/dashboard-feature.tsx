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
    "aKdePVkN2wmS3RbwNKhbzWLmA867EziREFv9cyoQDGxP6JN4CGizt3qzbtxJe3R6H2km3QTchBDddwZ2PjU67ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtY2uTeXiHwxHEYWnezgqaRLpbCyXHu8NLq72WHtbGEy1ZsRkyXEU4bEmQVowSyJzPNE3ch6FPrjonYct6Ss8t6",
  "key1": "3wbFxuj1UQRU6yBARZYwzM4rdDK2u7WEnzeVgyuQiJonpFwFjtMnaxebiK9DfZsPousSYb3nNntQemqeaEY8rY7q",
  "key2": "2h6VZtoQc3Cbs2EjU4C1zW83KVejRcPVHmhDsFMm8JcjDK9TrJKXgy3ywbdNxWZpLBzrJR4u8ncwe6DgzxQHgPmW",
  "key3": "3RDaecckmTP5mDkwtUgpzrpa5dXdhJ2frEM2ooFGhS9Bqs1dHYCcRNwmiJhTPLTtTUiQqiqF1FyFAvizfPK5HHGR",
  "key4": "2tFjuwjLTP9x7bYvHDS6VZfDc7ZyjJawUGiaVcjFqa4LuvQrBWFjEky5XUab7wPCCziAB4W6DEwYHyTr1FHhM6LL",
  "key5": "4NTcsXmZvTtKG8uPeeECKrhPuxUdMoUpCU2B9XqPNnXiBZhXJZbTC77GrL2vVbM4XTDcPecfh951HvwPXkbK5nkL",
  "key6": "5v7NpQHYCusWCQg3gTmWv7rgi8xPYLHeADuvfdrgkw99ZCrsZ42DNRxN46d31PijGmQwdU7XRFZYr9HxpUUDR8xF",
  "key7": "4d7zAoaLAemNb1Exd6sYCSmUwamBCvcUAPaNWKRYdzb1j1eSdwwZyAUj4HVRV5j5ogTNYL5Jw1kBvC9SbiJyEaT8",
  "key8": "5kNxzF7BaucvTNohcxt6oqcxnCoPsygcnR41XF6H8duuM2bnpbsygLtd7LUj89Ky4g3gtR4D5iBRTjsJXVTGCfSN",
  "key9": "4ZLbTYrHUFkzphJjQGe5rv2fDuAWyvig81FZ8Wz8rZDUkq43CuN7atSNH7puoDkAugRVJtFRRVNhTs7wZYenhsGT",
  "key10": "tkAxHyLc66dBMnEocTHZjJtdTNdn5kbDTR8kUxbYvXLtCcTYdmLbkbh2SbjTtnXL4hqSLaNAodb8MWAkyCMk3Uk",
  "key11": "652jXVqWwsdfn63FTyVyNqhkkpYSJ79m4RBbocqkgaErnA8yBhKxtENxngS1G5YFs8RuJUSkqBtibHwkvYeazk5",
  "key12": "4yCVnKWHJjJuNKHKWnFVD5xXkKf55o19FqFivdLdktGLtrSsLxrxZAzthJonVwrg32kYBCc2rxHWo5NsvscNYb4N",
  "key13": "5m5LH7vZ5SRgVekbsccuzuM2ZLCuP5NwGKeJYVzyEDs91THnK5kEd8tLLciJgvxzBs5wDqGSRrbhoKbkuAhrjHJk",
  "key14": "4VHmXe9xppAmyQuqYNSCrrMbSXbN2oaQLrRG9CXy3uM3EjotcZPv7Trs7D76tT3g6E8PXWX3ARxLANHKvdn8LXJ",
  "key15": "23h8aAKTJ39hk5iEt1Szkj4AgJtGQkHpjP98Rz8fFkELsi6VCmychfA9BtGjfZNMPztTG7d4PmAi9JAKvdcAEPf5",
  "key16": "FhShYDNXEVYCXNxCNGJN5ATZ8FcqpFccomZREfC3juJrMxNcYsS7jz2JJdLYUgMG8pBfeHcSaudpQ5jfFDNc2Hf",
  "key17": "2yUXqmbMgxCMaHE9KmtNdTEzxzTZVabUKjG98Fa9Y1wYftUDSJnXoX8S3r6SHkvXaxahE3mj6X1eKNARuX7rcpfN",
  "key18": "2hkA8zL65SocEvBV54HyLJJ9M6dyGoqiLFPQzLDqvxs7suuCT9QJ4suoD8jA4zSZtTuMr5bKP6mWAq2KrYpnQ2ch",
  "key19": "3bDBCaWxgwuQVBcbqNdDEmwb6iJPFsp9s1VQH2ZtLvmUwubCZ3veydcri1tdTnvxiJV6ATBZxrLCYPpDL3YFs3yA",
  "key20": "4AcivUjiWYiy1qetu8MSJdUW8JLENTwJQEoeULf6HKmqQRK54kQpUNNAjeSRebqUE69J4nfeKDeLaHw9vXSXEXbZ",
  "key21": "nAiRj6yqXbzFh9dputZe986VfDRycvkQNFbcnPEjfJui6EBWEY4P3G9S4pRiCSqxhgPkomGLoRwTpmXcyLj8Ckq",
  "key22": "6EW67bpXQ6umrrAMsRzCGt5h8qwo4t5P1VpffCm995QUp2cWenjT1ZSYFuguYDMvTDcsbGk9LCRY6wbqq3u7w2n",
  "key23": "2F23PcUvexn2CQ5ijLzhupjRxGNZxUWyP4zUNZEfnJ9oaYs6igboVHUSF2GyNEtYhASbsgB6N5RnDQDXH55rYnR3",
  "key24": "5KNBCCCyqtcey6DuRbDQ2oHXvU9fuNdfRMf54AqZXiudR9YErZRKdU3bJXf3fxq9tvo6Cxb66f3onY4x4nBATEpY",
  "key25": "4GPCWLWu5tjU56EcjJ6ppycJvUotPCHsVHZoreycz8baPjBAkdyZV1vf4kVufrHgFxa4JB37HapRvTYmfthK12Wp",
  "key26": "2BCLZRGGfGGBrUMLfwTS9GRAN2wtxigZKiKUiiSHEAYUzHhSTJRXcrcQC67GsX7rqqZZ3MMwFZbYapYvtjXL8X3q"
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
