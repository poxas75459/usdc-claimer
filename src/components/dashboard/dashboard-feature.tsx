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
    "4fXXHdEQrRcUyw8tivVvrLAgLfEF6J43uMtxWJbVsWfGtPLhKWc36cRLebw81SzsuFcNNuj3Wdwp6Jx33Z822PxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osDKCSx6141Gc5nTh4bY9USeeYSipZGKEQF5rEVFZbj7oPSG3r7cZFSTWhCUmveZR1K5E23xdWEaGFFWTcFJSCs",
  "key1": "eo7khEecugydsJEqZQFnHGaYKEFeAsDxmVeK6opziuT4hJDAPXiD4tu3ydJ7jUve4ExS1URvSi4EYj8DkDPgKjj",
  "key2": "qgCYjbKzjZpHbbUzL9VKXgALzBo6KZDNYthRx4N6T8NZjqFL263dr2osu1Pns4ze5UhcDspTouESYnkEkceN9mp",
  "key3": "2JtoNs9NfQkAHNLRiUSfHhoUu8GJSAtpki6yGzrdaqAYnAt2dXezqLrsDWqJV5m62NQZqWxfA54jKsWUqhzjzbAa",
  "key4": "4aXxbM6ZDB2GGdLVwU17GKuuWZQhjqgLN4N1yKpLLvJPTUTERXRRwkzomFEiESvdE5PYE2zEhjEZtRGvNXSDvWAH",
  "key5": "66z1kMPbNZwfQjYvtKTf5nL6VZc6kFMVZaNBMsyTw59fTSeTzeDPpuxtnvTmq3YTsiNMnaXmnxVx3ogJ7b5R7gqx",
  "key6": "4hkizgcuyUDkSTdc8HVVFhZLhfS1fjWfqHeD2wbLtPSehJAXEXQXWLhBHA9T6MU41J2ELvKA2yMqCkj2DwSxKxaB",
  "key7": "4fWgxV4i7af6c2oAmyN1BqHihUGcKzEAzDuSSAjyAN2rbT7q5GawaJrdSDiWexsF5wsfvJ2NDesAf6nukeJF3Wnx",
  "key8": "2hZ5aNNpP8jfemA838BoeCLDhgkWPeWdQyh3CnLoYMQUVDoeR3t1wZZcX9h5rr8Wg8iqVHSA9EfYEmGkinJFdMsU",
  "key9": "5nW7hHPchGwCot8P1Rxbj6rEMD91CZ8eRPfJTNefsMpB3vF1ygcms5GDqSMGTwX9wMErBJLE87r7WNDyfqrgctUs",
  "key10": "5e13YeDB7PvtJ8FPvHKj5p7QhnX3aHuc2NoDUaAGevJTbEEhFtY58wu2vTbB7Pqo4hrN7BtUas2Mx2sVyCoqyWhE",
  "key11": "5TUESyCr5pznk3dwCM7V4Z3PhtkcwFZcYw3Gh2XbW3y7vXbM5o9MJcqi3fizCCcF434G2aS5ipv9Q6cDdProhvMF",
  "key12": "2aEcwtuNy2HSYbsbbqFSNGvK9ymBnNc32sBCHRrCM3TzCmKX5YXd1zdithqNS4TyhZCs5FnEoxh42GuL8RCUVx1D",
  "key13": "32GadVypXCdn4jszAMRwp2bkcM2CCFF6T7P4JZBod9r3xtPh1XNNg2VWSkFHmhyj7RAucJp2i9BYABWXF3iuMKah",
  "key14": "4GUfG6oyydTQjgRwdEqxsrKsBgVcVqZVAmgEmnu5p3pyE9XuavbUMgWNdppCVQq9od38sEP8vBjMHwhDV9Kgdke9",
  "key15": "5dgUtinjcmXT1QmGj8q6ksrvtXjuhteyy2LWVVc7321FcyzsQ89mwqUN24csktv6GyHCUtFvkrhHK2gep6ThSmqF",
  "key16": "GSumEdoWfnfZkydrci9NTiNiicwUDo8pEfos9LRvFAc57umcfCpzrUdfAMYhafFxQjiFx5gFKrhkyCVcr8SDZkX",
  "key17": "4kBvfuWV2bCGHsC6Z5TjJqcv1cTKXAnQBWmCQHuzzpZJtSWVxPzWPEpp9vuTCArC3gFQj6wB8diM41rdy7HR3MD6",
  "key18": "QoqXe7PmD5QdLE3w5rnYSTNt6ePQMZ63658GaezMoTsSDaGeCZFcQeHzMfcuUmuPGKe4GAZDx3mnwYEtuKPwzuz",
  "key19": "qQ9UoEmEEFud6HvHrah5Ly3XKmpbVymNDcZ5rEdcor9Fa5ja9Z3kTben4ieB3VaV4VTP8EoD5DFJfFy35KCjKua",
  "key20": "4sLp6m22MyB5jqW8JcF9PEXfdPucjkFmuA9KKjxfNHhYyW5rYGDdzMseyGrnsaigvijTa26iJY4nkqqN7brUVGgP",
  "key21": "3uDTBXyKihzzgAwhCCvRH57AW38z5jY5b8LaEsKXujALC8epCkwTqUYHozCyStn9p3CEmroHmecFGnPt2m7iYBj4",
  "key22": "48mYyF1voX1v5LNNKrJLcDvAbVkXtRmcjmFmxRQgYbTKA1adxYkB6rzkWk8bLiVBVqyuknwxUv8nNffbg6uUngao",
  "key23": "qMYFSq5bJBfrzCpQrEnbtzaXBJ1HunJN7tUfU545fe61Vs84fJcZRzjdtTrTdnxg5iBFhujV9jXPyHg1iyFApsC",
  "key24": "3BoLfRDciNv3Kga8zjXmXMknCcepumdqT6uFLwcSZecbcAN1ZwPF9M5rqcS3podpBzJAHyoW3oEQX4VJNHr81HYw",
  "key25": "4AqzkeWz9WsSsa2xrAFbXpQWEhVnmdjQUT1x6hZF1RFb3bK2bqYyuZwza6g11UTT8obCbZQPr4Kcp3wAEo2MMWXr",
  "key26": "3HYBpsj97G5FchvBPWHCbUSSMhe11UjurUaNDy8bVTxsntkFLct3ymu2AMo3KopPfHW3bFfBiZJXFsagoSnJ2A2u",
  "key27": "MPLc6Vth3NGiA2CUiqsaWYLiAZQ5ebspziZAz3qYK9G5y93gGb5JqEnQME9Qq3HvjgTLBU71wM9oJsgxSZ1hGWG"
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
