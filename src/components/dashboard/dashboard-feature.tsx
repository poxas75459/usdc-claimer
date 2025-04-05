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
    "4hkvg8Y3hGVjFwcXfVfWNWhFxhC38zQv4KCKstNQRjWCtimxSW8s3K8yQvXC26xSEMbtLrk6gHh1tJDEdVEPf4bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbsRzCc8qtvo1rjdGFbYwmoxwxAefw2dcRaLGJf6B1jThL3M4aiuBPGhbmqYsfsQPKqoBWY9gjSeBjkdLVtpJ3G",
  "key1": "hwZGEJmLVYQSiWHXESKqhTwVPx3Czcngp77xpMYAzrVa7X9L2QrAsirerBSU9qW7ydsmgH7x1mza2DidTra9HXa",
  "key2": "2DkQyvx8oMb4VjFozrGjwbqKcxcAMwFrwB1nQKKqVoXwxATezEnrtvcUSFVPCUMjkBiUb6ThXsDYH9Df2ziZYqdV",
  "key3": "PMqoEBLYhfCHxRgRv9qjdbUoNF7KuGjKXzBSQ46f3CtHatcTrAoCkSq6DhNU9QCtZeMTUd6JxN7bEwfQuJYUKTe",
  "key4": "4uZSi5dfubFjZBqjEsP7uAs6aFSY4JJtW5bCDXMo1Nb5hhLbD8gBbF59juZCbAnxqSX8n5db8rfccLE7x7Dy8d1U",
  "key5": "2YHc2WE3ySju6X4cQtXPVXdZfxASS5vyQzt7QDGspADCCmz9W95SJPCtaLD1S2UpDxxRWX7th8vyC6YCxpz3e9eL",
  "key6": "zhKdTmFgwkjrSVpQHNRXiUjWDHfvj3bMdap1ph5FB7Y7ZFMyHP4jNZjYqUdXDG1GT57BLcuE922rb7pDZMPtpLS",
  "key7": "4QdhYaNrWBeE5SEWVGC2tVnwCSU7oNLn9SPEWDTmn7BGaLKE62MCGEks8SKxXKUG7qSR7gMdnRyyPGpjF4E1VSZk",
  "key8": "9mjEhKHWeSGyosvngMKa6dzy6MCe3potsEsXk9AJA9gAVmyQiYenHLGEH4ADvthrQuX6t5C9qnJNwT8UqaqHsxh",
  "key9": "66eEycTSBvuyWvkvz1KioGBqytAkz7UbYDCvcy8CttVBdnfcAiKrPD6ZSHpvqVHiTA2x6Q9vuTbn1i5tuWaKg3H4",
  "key10": "JWqyt2LudAo3RT7kYJjXCk4faqHBdWk6PciihHKBbnXib5dvgzw78xF4JFSbpcBrzAuMM4ypCU1m2eebGMg8kQs",
  "key11": "2KS4aAyHqZje9mu4RSajJw4ip9gJe6BgCVrxdJaE3sSwNwpuZvy3NaRQX8Wgu9fg7yPcF7FD93ZygKRdvqVSCmTP",
  "key12": "eTFg58GrTNdvqckiGxqny8rWBVQJUuhifffomE74RDr35n4Vhoe6dxUbZy925pgnYLBq4De93wnQXukBVDNpk2Q",
  "key13": "3HezeYb1ZhZtZeZ4fhbpZns2E49P3HW65Sd8sJCuNK5J9AtkhrNYeyUmbZZw8NUrUotTBwB8y1KRmeuSmTCR3Nsi",
  "key14": "5cDxCTC4p39JKqajdcLDtvdqttBDyEqKZX2meKYCaqNbuqrdzocivhDXoq9tfKgLieNmxNSkZLYRp224RKZfigiu",
  "key15": "3RwyirRPyKT29EwAGHe3j9HjARgJFaa1myX1FxiabD2ZSuJofD8j77eeARYdf9ANUFT9PWYJXfT1eWqd6Nbz4C13",
  "key16": "5Daa2qJLToLkCZnTD642wiirohuSonw6H2QDtiYGBSYvzwH4KtXy7L738vDWduAEoKqB6SotNprYm5xq3yLVLfpy",
  "key17": "4HGKCVGaVDEKMjNaVidaVsjqPPjLmiVcjcEB6gb1Zk7GXAeMb6pjZ8UdGBPS4BcYP21E8o3HbBHEzsuYvZeJmC7z",
  "key18": "2gVCaHyc5RBYYjcqkAF6VTWuVwUSySCHWXVYF9PCAUz8bjHw8VQstis11GysyNWk5SKm4aBYa6AutZVFQTPSk5b4",
  "key19": "NkBgwjje3kEG7SGrcLqHzMAPUDGHVGQ66JEhC28t4E7epGnHqsk1pHQEznaNHgABZnKXeVA75SQRY9fPv259R5s",
  "key20": "5ACgFHP6Qs8gB5MCEEy2w3mCwG99FCQCktJ3ZJS9xhyHPy12YXBVKXmZpV1jVBp7yqMmVLmAAdK42E3udHUt2zdA",
  "key21": "2XWos21YbsANL1mNF2KC4SRZCLT5Q5CZqQ9fG5JYGg1o73ze6c6HsxgwWgHvCqKwVWETgjdYAxZ2BQdNab3KMCQw",
  "key22": "3NS9WNyB8y3yQqN8bt6fMnLp13MCcZcKB1EgL3tLZ115JdxiwTKUgWXg2sopmyJxhV6X8TqTDbzfSGjUA9dRcsuL",
  "key23": "5ZL6KA6xK51PANCdqJP5QZrkJMNYaaiVAxoSxNM7tpEcGxnvxhVzirwn7eEeYMqGeXmakC7R4aAWXJz37KyzFCVf",
  "key24": "4HV21w5Y5JemqeFB91uAKXo7E4hGZLfKouhaV2BWLHEf4NDvWVNTVQAXcEvJCa83W9MGADhzZbPbxrEK1XGE1CAT",
  "key25": "3pf6Ngv3C8zStxuVVjqp8DB2sb1TC8JBbmCiUGyDVrGM8wrjHyf4YibLTHdR84AEMjNNxDJ2bUCbrivpe5NXitng",
  "key26": "87QkE3xkuU5e33rB9UExKVhAS5KZvpgomX5Y9ceWiEhYisCXZDRsQhXpFwLXXSGjdytsE8HFkQWhfsPYWKj8uQa",
  "key27": "3ZX8TX5yasZpgVPVA2mzkRMamAnJEwHfM3nz4vCA3h3TVVKNs43MgVgKBqAVVbGoEoVB5W4TJkedmvmQv4uBYo4",
  "key28": "32Az3oMUqrksZaT4yT4SLkds4ZVM3x2DXh2NWVwGUmPhTy94vtAELUSW19fLisec6MWx4cvCCauzwiH5HJ8Dwr74",
  "key29": "5UezARQN3TpEe58TaE74kb1J7LB4B49TGhz7qLUyfzzU6g6Uf87p4tc3JQvCekztwQrH35yzWyEyUSabowpSujwA",
  "key30": "3f7qGc32ZC1FKgvtGEqBNw9DZCj7NNEwMU2UP8LN3vFoVt6LhhbZcy9abT8SySNYkyChKAGmEmQzoqSP91Dufii1",
  "key31": "2unSBHtF29ZhyDfw367WDjdXuCvAUzcQAscvsX7p2dsvBe7ZFkRr8G2Su9bUzSCcsBemhosgQAxB7xCEF7yYWQZY",
  "key32": "3n32fFLfoCrrGktQ4uNpb5wV32G5ycj2CaB2hynS4NbwoXYFVaKM4k8YpGpmqkQddAqSnQj19dqrfKvHxqBxmYEt",
  "key33": "uaJBUCRusfpuNed5Qt6TScfqRYkwhYee2x439ShCvVnYHX1QBXYLmb9ECGD6Uq29vAF4FGrgdMpQwXr6uFyiDJB",
  "key34": "27XSRD9k8YUaoCAeRjZUinEEXbYuPQQ7dr52cPaw2sQPsUjVB7nB2EjT9VUsy5CJiK9mstRefVDJVswenntgzAM1"
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
