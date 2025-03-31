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
    "2tworrP7ETVWL5uPrjA43gtFLjZMe5sbEY6B1wEde55iPQJog1Mf4HM7eCm96eH6z2DXM9U9yva98w58ESU1DbGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQMB8r1NjzSnWxK4BYv447NpsBWwngHhfgjsqZxRW6peAQP3Dthkn9FDCDkvp6RHMvfRv6dKRpPdYsRXVPuCWfh",
  "key1": "4UZvZh3dqPtk1VF5moU69LbjSuaxS5RW1pRFAB4wNBtBtzHu1FU7jwGEREk8esi7MkNTnGYLt8j8xLPNtynR5jB8",
  "key2": "5qYiGbmGwKhZ6Rwrmbqmi5vf7mNdH98pXbobeDMUyfia9qjpkktSrnimhMuutYiwuv4d24nqVuqY7WaK6oz8CoC2",
  "key3": "56xmnwwYB8yrozmzH8LfPcTNDr66RouEXuAdRNn1c8KDPjpr6t2aebrtnZGEsXBH5XBw4xGTgA69o2DwFzQT5xNk",
  "key4": "3anFzCHPzGXeriTicCF9A7iAaRgWFjn63g6r35MhGspEJXeznphKXAR64jGnVtsdoi9Sp4sHe5c5X6Hi4h6giz8X",
  "key5": "482bJ5NXyWNhxxLuCAbfSfdnqAuj7gv3qUqXu7oh7gVfsDKSNPpP9h2fiSUibunFcbRgc4eavhN4sRydk6P1xwBn",
  "key6": "2YvtBfhr3jLrkX7gbUC4qxC1Fg2UbNCUF9f397nM5HSTTDtaa2nB1nyPCPR1XpnFxcgE6JhMd3toWje6N3p8grp9",
  "key7": "2o5FBiz1axJMG7eDXysh2Z4A3ekkPs7AKPhCYzHXL9g2uvQvGjwSZs1QYd1xJUt8RZ8EcjjcdF6FLtzipMNurJTn",
  "key8": "4A9gCzKdC5BSm2MBFvoAbRB2CisgWBHnwjamaNfMVvMkx1FFxZm7cEVZT92MRF7VnxAjaJcGsuSYc1CPdkW7jbC",
  "key9": "3HRxg4BEi2yeBfnZNpN9QppP73NecfDjAHnyWc3UqZygv7GMstAm2cgA1SqhHsvdLSXEeewe8rw2cg5H4MTRmrtD",
  "key10": "2sxUMotBV3naph5fv6F8f7p4P9Xq4LiNzsMZCq6dK5Ps58yYmDZsS8eUpbN9Dst8j8guEvW7HaX42328B6Gcvifw",
  "key11": "4hqmgEFSUoVjCy5Nkgx7ZMRpKj7xe1ufFyi5mCPRAq7SAJYGVbS5mSgJgmLP7TEaphEsUVTFfGP1Ams9NLfiQwAF",
  "key12": "2PsYi9G62jWZofDMf4msBTaz8zAgRegMqhcxFZtnYWyj7nYnfxLiQzi5Ybpnptqkz7vQjbUge9kK8iUw333uTWft",
  "key13": "5f5RcE82TTsPKZ5e2HATwtAff8mvA3qDqjNs8Hws4TSYKmLsMaq8TZpYcz7VHeR5MRz5oDS4aA1jSnX4AQAUQmKw",
  "key14": "34LCaJKj4rTD711WbmtY1Tzb4HkKn6Ajhn9X6jWgmLHBfwnD4zmPmjxjuNBCFTFd27t9aEX9DJbZa2PFSf5AUzYx",
  "key15": "5o5zUhDybR2Ncto3Ri9heSCLB9U2WUXmn3ayBUEFuGP4znK9vwykrjdGBGRJo26foZ7U4oZ4tWpWhokHNntMzCPt",
  "key16": "2HB9XAE1J487X4WsoSFufg7J67NHYJnNCVmiU2k9VMYQYtrSfo1NsR2PJ6sDtbHan3NudwLBSVWc6c7oLXJB5LEw",
  "key17": "48kN8JzNG91An6P9Yk8GDMFgKTGrgFYbkHocw1BjGcWtVtN2ovXaKmRGjCQVN5XLnxcNaDeY6rPE4E1Z42LUcrUm",
  "key18": "2kC6Tim1exAjRG9JLqXinGcN1mHcQnDzwBzwCAXxpbLSM3cxucKmJDRFnKEQYwmCQ8Npe3DapyeKig7RaZ4uqV27",
  "key19": "2GRdUuKTSiQxZQjTFMCBBH9JCrDbcSgXW3aSog9yR4kttZR6Ka6efVgqoyY1umRNrzfztbVtg8M35U79KSL9586z",
  "key20": "bnyv2Az6taiZchh2fmVDwq6gLfQqMrr1i63K8MQPhRHayu6VqmeZ8zndtNvReupazUuw4xG4SE1fAcQztU4VvRM",
  "key21": "4KcDG5uKLhdaaQ2BFFpascnaCCYPRD2Her6TiBvtAjYp84v3Xv6M4UKNxWgoKXExsQEKQuzBdR1ZbmHCCWvzQDjh",
  "key22": "58Lk5WJLxczRyx9YH2eLQUjgFW9GXXFAZDmBCzCyM6fdvb2MeY8iA6xxRbc3FJfbEpDXytG3CvphKfjjoQeWeJpd",
  "key23": "3XCHyrRUqvH7wxXXyBjGgZ1EU4PRQmcjUYXSLrqoN4tXStoFEVjLQ6ikhyosBSaLxEqGs7GagAcbf4CAMYhpWDv6",
  "key24": "22pxk67uxdWyKiEM6K63VmX1EeE9ZJKC1kjoD6uA7jdScYo1Nsy3uQWkKTEayrUyEFoTzpPT9eGjCv7FShZssi4V",
  "key25": "p9ttvvM6hNWGRL2GbYyLdPxPHND8NtBakhuhXTbZxWRgTgdzenJXrqAzwuVktd2GWz1tpykw5cfYEpHV4rwnFjK",
  "key26": "j4WmLVQ9Jrp13neuuoYgZA3Wd7vUUUktWALHEHskSGwQjD8sje52oNZWeABnLz6cqxqpjGdsHHtQ6ve9gJJQ6d8",
  "key27": "5E2EKVPMTZndGMNBdJxU3SSaQ2vCxVSt2wh4isRHyqeRs1gcEdQGihiURaPpcECKpx3b277jPP8PJg36Mknbb2C1",
  "key28": "5Endi51hGGF8S7wyy6vhoLq1ZdRAzTzhbmqM3Z7wms1UzEbhrMuHgJ2qfKEuU9D4kpSKUpBTnVvfrJe6j89qFPS1",
  "key29": "3yRGgBhyqChkDxgUcbhV9UmPdWafdUn72iHfP1WSGJB18JemFgbKTb6BLDEbxdrEbk58CXuHDfrUtjXBDB3hx3rH",
  "key30": "5u4FvXPNsHxjzJ7wC6Nc9wUg24Btk36zVhEc14Qy19uWbtDkX2HvvixSkgW5uSn7nx1h5fCijXffkMn7t99HPagu",
  "key31": "5WCtntKm6DGPs3CBoBFpoadTVQahvzTdPJtDsLqURAZHDA95DCcHhGi46Ncpwbdd6Ef9ffbKcpCsnpFbs5srH44q",
  "key32": "2g9ZyDGJKqcXMzfgs4enDFrjcTvtHG7pFWJLW2DwW86AEuDQq19jFCWk8Pdo25F4EcQzrkCaqcpG1vL2NEmvn3bG",
  "key33": "gNNa4jseJR3qWdhT4PLqEwWywJMvJQu1YGizrGBrjRsu5oFu8odv7WpwuF6EVS8DnqricPiiVS7s4WoPJbR5YSp"
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
