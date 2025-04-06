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
    "T2TDEkVEK38oRocF33aQarEADjTmupx3E2UptLQdGkMJz4ZcdAeLYCQVjAtHb8L6i4AaDze79Jy4VDcUwGw39Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qAZPALKtxZYMLfozZMhsHDzV8QsMx8nEsQysSr6tdUq1CnW9LUUVUK3BSLZ99V2EJ2sRkrYzCs6RhRDjyZ8bqQ",
  "key1": "Up4fiTenE6arUmUyRx6jNVSDZn54kxkgNEBBzvonKzHZSxhPbFYVDxgvwkesp3nhCysLVpN9oAkNNJUTkJnHpKg",
  "key2": "2kHpU4aBu7MWUWKTy2oEXu3gnySuHbi8C7eV1ec79JueJ6ujqyniNzt2aoqXrhQcrL5tgXRXAjd35Jubc8W5bEJQ",
  "key3": "2xenf6qR41c9nzSu8WDxzmbhqdyyuy47GPMfNozBxXNSNy9hQ916MPLyNNz16ZGy1VC66JxytZUSM6WrVL1x7bmg",
  "key4": "uP7U78nzGBwxWPbdM9zV5PFZEzRHMh2kmyreeUDurmujWf4JC6TrHeEMoQib2TZBmzA3kXE7AP4U5EE8dGvZGRV",
  "key5": "iX5vpUanEA9xqZ2y9AyoUroq3NELX3NF7VDMPt8G98g3cgAn7nLgPcfzDUmGnC2NCA9UPawThjXz6gtkaUuM8XU",
  "key6": "5fJ83WoBKCoRyHTfhq9wxfwHEGuDWgiJSGqSvrFJXjhYZk7uAY2xN38KuyCcz9dGaZ49cmfG9Pep7gsP6jZLig8Y",
  "key7": "3omFUBHXJgerKgp9F9ZsVvEWc4vcQ7JqyeHYMiThQf4B8s948RpHiZ5HdTitsu7BYJacoLTRrtEK5NsYGR6tDLpA",
  "key8": "5S4tpLefgQdhPBeTf59CZaj1nMZcXoYTk8ukhcE8SHbBWz9iATKsKzuZjLDvLmuk7Ei5aw8aXx1mAewZcWCRmvUB",
  "key9": "5bUrJCBCofpC2WZCYAGFdkmRk9nkRN8FQbTjv9HCBb5gY7f83yoMXeh1vc5Gt1m7qyAsDKp9qg5yJPKXdNbo1Dg8",
  "key10": "5SeG2ZUoryUPM2dUgAePdcNToQBS3MxetPKrbvuMDQ9Za8BBq5F544HPkfdWiK5z5LzP27vHJG68pEZkSNdiJKNL",
  "key11": "Z4vXmLH44Gtg9s62rNLaFsRwMdmtT7nFCMMdKtENVeN7njNgUgy55C2AqFiaNVbuwHTRxJUAVYg2w48ASELHe6U",
  "key12": "4J237VZyRqJwnAm5wk3oQ2wEpPwt1Cm1zkZG7nNegvzPTQfDvMR9deNyV1jUu5zZN3cRydFJcE3FsZReR39XmjA",
  "key13": "5AKFEfZn21XxvRrQvKqX4mHd4DkBFviNeqGSBkNGWkLXpzzdXmwumcNPpKzm6hTbB5733ZEvwk4P1MDzmh2bJcrB",
  "key14": "j3VR5JRSKZ7u9hYpxx78K1xuVf2aUPE2uiRaa6gG1nM1AmTAcq7x3MirU8AtFwHEMZhscj5LHAwQxTtH8pFgQ5r",
  "key15": "3YdA63QRf7miQiZPf73DkDJf4bpYyV2hj6qKx13KJo89E6uGzNhRRvfYHAkh93mHVzAAwfFGEed2xUtkr7jdMyLZ",
  "key16": "3o3JJeqgXazCsh1cjH2bKHpupoPsddEsjp1yEXEwTZc4hDhfZu1qPUHf7qkVvtPBegJS3tZn2Bricjho4LYecXa",
  "key17": "4k1Dj5UE3MgMmynX5tRHcYZZiZF9LPUXcfobzmYSfDVgp7qvizZRQTf6Rd8uX1NLhKYnbP3qsLBKSNgN7iKAdCPr",
  "key18": "436kcWeTyn4LiaZtCWRxzyqu2aYpnBTVQwKEfaMW5zJwkRk3sP65km1ijHiM3Ab4xNkBMRSwN4C4EFUm9ZnhBRWh",
  "key19": "4JMSXgQ64FuVrjMqw42MSjqsKkvQNJgPC6itSJS18raeCdqAExpvpndw29pwNUvgj4RpQVJSXnJ5rHigb9MZ9LMr",
  "key20": "5UZruwRUHhsDdcAH12U94N8tNzHMEPjXRLjoCGLrmiFRnKNqfduvr9UEzVoLkPMT9ZPh7JrYrdT7937RjNmzgBkF",
  "key21": "5H1w5L8effZuZ1fJC7tgPpDQQxZnzFFkQQtSD1ANNY5SAZ9A9RKgCvzehYa8JfCuyyGL5X3uB9bURoAXmdnuMXtj",
  "key22": "nVmsBuHz4rrpvpsFyfeMD8MEozSWwFmrbabuAfQmd8yCJWWRWShigcNNRQUmNSizudvcJtM3A6Bxb56N9dpoYie",
  "key23": "5rS7sikrSUonW1R8wREStX8DSSbW2hEqpqrZMSGzLpa9QCrhApoYpai3YyuS7KFb59ng62pSvVfkeeYpmx79iASD",
  "key24": "5dGRo9XSUt414T3B1Z4LqAWEpzER8BfY4NEXCJoqy2WT82xuAPcGrbKWgrLXbWsAX55rutif1YVjdWA6GMJvcYqE",
  "key25": "5EgSbPXcPSMmTAsCCuSCpVMauzKfL1VsNPHoHNJqspQoTGcchWpaAXGd7Mbpfpy87pxjVcP6YGRme5czefXaspLn",
  "key26": "RRKyfuSmKcSB3B1fWgBBHQtsHJbm2SrkqzDDmF7bKTYTatFHMVjjzDDCHR8qEGxcivmUpnbeCskhr6tWuFnyfty",
  "key27": "3w1ExHxqvZBL81hyf8SEJVeWYEYhWHT4x94jSQMVR849Wd1PBH7JQFBidMDN1ZcGXHrXtPHGL4nbGJVXV1jxyAEj",
  "key28": "3AhYGgorhiybQuYm54GLWrh75mFUMCUCbeRWE5np1MfxvDqqwZQrQoB1oE3ScnK1aAfPxSTa3Frtenby8KZHRrbz",
  "key29": "21hr2tNimqzTfu52ZGuHVKHjUDrPJpGL6j3M4KQdxT1L8sMnaBwjeERfxQXK6tGh9FT1rsYfPKE5Qh6F3f17gJRg"
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
