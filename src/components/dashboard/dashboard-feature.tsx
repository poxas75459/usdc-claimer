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
    "G19XFFSKmhcX4GxVDs7RinwwrSaYbsByrPxnrmaK3Cj22YCetYuPwtLJH74ogwC5MeFQamJQVz6QfZGYsCjmRX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ap2rMyWtmgn24dfmmUBhpmZdr18eAkJ2FWbNfx96hZXv3JFAHunhuWLrhzzDjXy3baeDtXWTCk5otD4ko5KrYqd",
  "key1": "2VA69rKLPKRPQjEUSUGWErvHr1DnQ4rrV7vY4WNA6T7ZebZsLBNEmsvEEHB7chWw6ggDZkPN4PudNALipHzU4Liw",
  "key2": "52j5pvoJuVTiJvKvdVNveyxTTNsz5c2Yz8DRSWqYyx4hHi1eAhMzHTuvfWZrJyHFt5GKATmW5H9bouG9asNrGDKP",
  "key3": "5mw8BUugnBD6mGjHQU7iYTUB3ts1mfN4U5K5pMEmTzm2sbmMzHNQKvTR7kVbVjosy7sxVysWqguBBywv2ANR7nsB",
  "key4": "THrLiamjkuKrxffqhKHgfeRdSHnFPxaa11jiSJiLhgWGpk7EAbhUoqao8XeTNka6eiqXo4knuNwxhZYetbUrVj2",
  "key5": "25e7Bx84KGuhF8pLYSmff78LESW2jsJmdLu68ssCd9reXfpWGpZ2svkjU8oSEaPTGS4tMkPnEDbygNbHhMS9k1zX",
  "key6": "38xe22REw2MwWaS34HQiX31BapCCrJNjykXBE8p4EuKtjGkJLYi9nyZsvSbdZYUNuMBM8tvaeLz7RDNTAK9vVhUs",
  "key7": "k5wMUu1ZFZZxxX482TpBLegsK6tNEhHz5NbAkH7y7LpN2jxgFvCkNmSbm7h62c85UktBsKiaAjUZa3bXeDq65X6",
  "key8": "4H14F8wMZLuTaMxyNkvzz6qdCoDsNpj7nLmJJHWNEYN2s4DWPcFUhgj7UtBWmEdmX3rYovojcHiqZZP4sVEmZSsz",
  "key9": "wv98VPjC4DfMnbVSkfFGZXhM8k3GrxSDBhobpDDZBspnymD4vrfwMYxE2J5viyhtKLnSQu8W3UaguNKFmkJVLfv",
  "key10": "ijkdm5d4cC6QzHh4X1i2SczX7fLmTeNG1JMGtg48nPKtDy15FezbEjmqcqqd1CXGaW714xPLp7vZaCdJFmENoTo",
  "key11": "5sSfUmySzn7YnzuGjkPpKpY5mAt8WDrT7rfLtKWoHjAHPRkgQqgkTaK9Vu4ABnDaLyjGdNopZgaZtY5ZAkMBZ98o",
  "key12": "4FQF3ibWx3PkR9L1VPS7LD2fv1nx4c46A4Q2ojQfDmAyo9EH1VXCriwekNLt7j9cwuTNWvAodqvgRCLQsTPG6J7b",
  "key13": "GLVB6nSGsbULXjtXrpQ5uReKuYVLDewEqx1STy1Eph163HJzD6EKDwLKKw5rw2HUYcCt83tjUYRcncgzsYa4VPH",
  "key14": "3brqAfJZdnaGHcChv3zh7WXdBtHQMa6QUJfdDWqh9qs2HE1X7X6GJRap71358YXb8bEuZks7U1sgj5g1eqyFGizx",
  "key15": "5wJ4a5Lf5pEJKV19DDisunVQP2PmLQ12McSwF3XPQKuC3iWePwjtBA8JMF1hCcnU6ws7DNgCidaYSyeZtigHYsnd",
  "key16": "33dg8SzxuiracLbJ61fnRRqBNe5ejeNqNofdANWX2rQxFRt7S94Y8uuaNfUDvMzcuQcKPt4sLsknUETNXgvmvyoC",
  "key17": "2ZbW3aAandUzDs2H3ZwiTM2cPFx2t9YRPcn3f4SHk1f6nyb7bduiAoDLjiqNayPt6hzjSRa838VQrMKQXkaBGV6f",
  "key18": "3Vmb9eZKVU5JKXQeirKWHE5pvoWt17RFx4dCD22kxJxgZViqK98JRVNQiHBJcz3YciCPkQjMxHUVRM8EJk88BSba",
  "key19": "2YNkq4VMbxgMUeShvRgJxEBmd38oQXX8Kms7VDnKycb88cc2ofQvbKKAyRQKHtj6tGGc2KruFB5QKxPbunqyG91J",
  "key20": "muA5WX9Eyw3z4F2c2pqSfVvtH5BWrPeFmZxwbjuXFPU9N9keMVth3xvekybRBvjRgrHseFjGj5GcdCNXoLzCwmr",
  "key21": "676jdnxeQGoEJUtuPpQGABfJsTe4e4aLi1Dur5reL7iNi6DPt8XzexcUAbhfvkByzYNML3UvbxY3Jaw2JuXGDxs3",
  "key22": "4TYeTMdywBwkbCTZccmHhcCHtSNeCe6mawx6wuMJpuc8nyfMCWQo7ciGHjHK26Mg9FfL94BwRq39DLJB9XZeVnqv",
  "key23": "5THF1cB9gNTjotGW68airar7UfeXBwFSWkAnwGaYCXFHCiycneFRKV3awmBL7vDFP9WzTS8ZxEKCrotvDE7AReGh",
  "key24": "2qeAZsrGZoHE39vbSaQa4GVt41RmMwQUktY34VVgCNf5CTrmr6sFKdBTg3qVyp5BDsiTo6JvdkFgogYMwGLXDSxT",
  "key25": "3oE4ZwC9rpu8mJQVh1DHWugPnmUm5eox36PDmCHyZWaxGos6XkAw2FPuHB4hE5pyxUzjzyKL18gv56xQZLCDYMER",
  "key26": "4pY8D3TuxprhtMcFV4KNDhWLQ7Uer3j18HTR9CyvaKvqFDKJTh5FhTfULP2kaTMzT8zWxSPpX1Cb5LMAhrcPu6hH",
  "key27": "2tnWAWNx3xYLdu3BaQ9u48tcDRpVwYGzZQn36ShG8HbgYxoLhSGasvf9dpsi24ctnhWoYimHVVi1hi9TcY5aTgLj",
  "key28": "VyGpQbVCfoRB7YzZk9Fsm2dNNStoVzjSvQwoEKpq4V9XFwRvLhK3zniSYJEtfpUFjUt2VBJhUDnXGBKV3qyRfFH",
  "key29": "46FFG3FzdSxipqn3rrw9ZGFxT5fCv6KU2S6pJ48iDTVWon8KgYUH8cwBHqWdDWfNg9xKFnnH35pwrgL5ydb65Qe2",
  "key30": "3snz8S4cPHCSuDRvQ28GyAmRW183vopqoeN4uwFW1Hu78nM4Le8nJoCA44pqjkmLj48cFkncYW9atEFzNkUWZniN"
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
