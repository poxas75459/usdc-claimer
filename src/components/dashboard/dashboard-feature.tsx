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
    "3kbAwQQUicoXLAAfFb1L2SysXm4pmeVTNi75WBYvSkQjCFSH3wRTCsHYuc7zn7jjXTme3j6GcSADkieES4RHL8aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfQVwHDuibW1jUudwLGkHRCNm5mku7yjQh6r5heKnCAMuzXepk5GBrTsprGpPCCwVzXJACiXpmurAjugirEXfdu",
  "key1": "4HbLpEHqG49U6dqXkPFVAwciGLNksitwRXpfXLpoati644ToacWoLEMkEN2wnGkyKRLo5radMSgypxMNqG2izp1U",
  "key2": "5aiFqB3wV2e9ueobTezBDkz5h1YDsZLTgMVs26Qck7X7PUXHua29jbGJsVkvutKtJu6PUpZNmJ2Rtf2inqoczvpi",
  "key3": "4rx4xi5yW8FaYSMoNCU5cJidKgVt3pKMd3KzHSgk8HS5N8kCCVn6JK3s6kVbEFNALCkSUoZ7XH17pdUQoXxtmhkc",
  "key4": "3FNntANet9SbBT3XXAjdE1MEAEJWbBYhCUrCzRyi2wDojc1KSdcehXnvkqephKe11BSvTpgxkfMWxn9EmywEsQNh",
  "key5": "5gRoz2FrgyMQk1fVAALBJWcrn1SjN8Lvhvr971zR52DNMP28uSkXhgDuD1zCiYH8eygTfJVD1Wa5JYqqq4UcxJkM",
  "key6": "5VXQw5Ez63To1gBwPLtwdBD9qTVsADZmUwaZTy5tQf1YiGj9KtDtN1MCgeKPKcYu4SpWTAEVhrn9bp5LwhnTQjyy",
  "key7": "5nbSBdZMpHbtRCJrRyARWvRYQr1RpTcNWwG7WsdQSshjN3zzvGBAAjgdnJLvxWPRn7cxZgAqKNJhcj3fm5kUtjoL",
  "key8": "3zxLXPQ8y4gS9ptJUAs2JWAcru2wHYqn4rHrjdaQzcS4qhwViQ84wT7vmXzVBv5jvnKQn1ZcfFrT5sxhGzeDw3vG",
  "key9": "2Bk9dXJspwbU21j87f2jqkSJzFkBxeXNEhRHnbiwm5hMphFt4yTm42fQ4mL8Z3TAJzRSKBanWi23CnnGHnEhaqam",
  "key10": "2UfhcR48ct1AF8ZRXhuSknH5zTysbwYHeA4VDD1ZvWiypEwH55TGUYetLqHiV8PT25XtR2PCSdq5DC73sRP63LgH",
  "key11": "2rHsXjKNx5EppLPz7gvxLXQewZfzVsZftnDgFF1UkDKydLgHFwDQBGbArAkvJoZN2G7Q6Bv6SXykYr1GzoXAK7cb",
  "key12": "4jWtagBBRxLz6nTXkkZvVXhN51uHo72oevU1gVNdRqSfocB4gRsXTNfEXaAhHDKukt454iHY6DTHpR5Yt6LcBb1Z",
  "key13": "4tVuU5ZSDaCnoQGpNm61AqChNrm3Vb7E43duAUSuX29L2ZLCyyGjAw8AxtV1TgBdSMrF4W6dRC178LtbKqQEZ6Jt",
  "key14": "Pk3zLYrBmHeJ3q1muqSjfiWKW8ba4aunh8QCjUbNc5nNTewkrDHihQNXQbHDty2QCTzETaE2HwaZQwr8Jyskyxv",
  "key15": "3uhwPqXhkyeSNzPLoFRmWZPTqz1zjA6zwykkbxoz1tWkqbJ1o18envs8tcP8zLpNLaNwTU1TApDXwRfNrK39Cakr",
  "key16": "38XjzLxYy1u3P9yN7WLkdSgjUsqeuU3H3GXB13NopzHSMJLYnjvZmPGbMSgAzQv7BPYHc4cKB3qda3muXTkwWFg4",
  "key17": "5nMvsV7yXMJ15BHiWWyaZfqRUeEQBuBhDpjZMQCc8NoPQeph852rraFwotns1QPTpiR1xoP3pqzvDqgJyunFxJqd",
  "key18": "2o6XUEZeRPYe9ge9jkqV7hCL1aGv7dQgGYKtp3ad4ckVNaKYtHfW1bHz3iUGyPt9jiN3p6Rsey2tPmZchJnVmDNk",
  "key19": "2eTi9oTgKjjQyby7XyY85MdPbMuzNWXNddorWS5YiuKpzgoWyn8ZCwygRygAXHj5ytr6SeSFPcAdqZJHx6EbYoQh",
  "key20": "Qz3k6jVHTY1pJsuAQ182XU9XBdQfkZqv3e51uiBwz4iRAdgRZQJUoBgmKzCi3fLjBhcdxVAi9wre1C7L123nZCL",
  "key21": "3Evf5LVfD3bS7vkFemUTZnUYJGswSSwQqwp8gmvTLEPUcXrA5ghWUs8ikrnhyscyqeF6KLFx7CZ8H6q6xXkwh4Fo",
  "key22": "4WjGLBHCgiCBJoTM5MMAPpsDpVXNktStbfXSkxnUWpRPN5iWcyupPegwcXqHvArHqjdmcdfDrddveMvYBhJZqr3N",
  "key23": "3c694HsUeZpmzTfe5ZAzRmwS4UYVMtdxV1TdHwQScWkUEChtzjur5BA4LJj9Lj5yZgBAQb4k8vr7CK77NYJi4zAk",
  "key24": "3rtayX34LQ2hFoj9Cz2hiZxMxT3cRfHsUMF4Kcq9Z29avFm9NE4o9z88wa7rTnBFrLKZ27YJJ1duzFB2qbSYdGLD",
  "key25": "5DvFsuiTdQSV3SQ9zrXnRaMMJp7Usog4FodzH9w4vUrx6pidQFL79MWnYVx8iGfUAjqXJE7my4pwSJsAXAB2E5GU",
  "key26": "4Ux2TsLMBxuU6bwLHTHiMyJpvVTSswRAibESjAoAzjf9aUkd9tpHA2FkUD6th3C1CM1x1Uo9pJ3CP3tqnfh7w7sD",
  "key27": "3Urvk8gLnBLir8qkmJTmbzQWDFpFqt87zQ2iFCJsDfVWYV2afxXMucMNRCH26YmphcoRVmYr9Kqz8aCh3RXucvun",
  "key28": "2Qj9bRnfk5rMfTgR8Hzr9ZiqMJthfyAVmJrVhUgxGhFQas9sjr2ubGT94A1u1SwSUmNVpi3Ea3K1JK8N7xhW5aLP",
  "key29": "3Rf7HMhtrvsvRbbYW6ZZXs2CJXSsKYq1GUzYYvbdL4KkLGiF9ovGBFHJB5H9kqWv65LNCA3k3M5G7BeqE2YDq1Nf",
  "key30": "3h5AG7SBkkhmQx8pS1LWX7bkq8X7EDjLP43gzu53jdicFvhuEfoHb9CkCiJGATDXoHucyvEkZYZbHM7zsambAiyn"
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
