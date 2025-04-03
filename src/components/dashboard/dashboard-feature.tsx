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
    "27oNFZQAr2NWyzybLcMWj1XzymqH37ctDhsqyKEJy2PGFDb58LdkU69wkMtKG3hwesg4zhGeeeWF3ym7tDuHA8RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "219Kxz34WfhmTHcUX35jh34h5Jx8LwHpVkBYAb6iNNFUeDeSZQbCokRi8d97VUUb9L4gYhGcDZVtRvCwqBbt87u2",
  "key1": "4TYenpbdYZnRbFfKBVNLHXbZAfF336mYpRhJAVWxnixmZ9QmmmavoGKjiC5kcx8q5RKM6WF5Z3UAbvhZ5Ep1xXzv",
  "key2": "cx2vAF6zKKydeMmFdW2fmsr84CnzFfs44heAnZM36cTRoCNNb3Tiqa3f5DjyUaHcXqwwYF7YxPbJftVNoqEh9ay",
  "key3": "3MyPYvBQzYQjaMAefph3q389hoPh5q2oZXCDWQAnuDZZUzVtjbpwXQ6cRhVspVWN3UbmjMZiLGWd3mkhPy2vjpdh",
  "key4": "3Zj8oPZqSVyvEH4B91PR5oChnMUxyjt3fgLzPoL8y5qdhuhDgoDaHP9oAhQByGXbF2e2oKfnnUARmzsBLBz9F8Y3",
  "key5": "5qXF2LtNm8S4ANyaiGURQsg6Dpjizoxjj9CwwAcXMdRBahqK6kM5ixXPKGWThHZCvDZxzPAc1riC5e9hHsX76Rsz",
  "key6": "PS562XaMorNmhoedJohf4PYCTG6op2Xpfs4x2k6bT2ZyWyM2iyJPhqHPvTnLYb4KQYsi8VBzdeJXMxy7HPaBijd",
  "key7": "2ZfbpbDzxEWpbhWjGf2v3MBeSXyKTdXCcTGYRxKgBSv4Ja6CkPKUHfhfSeDNT8JXHooxvFW6Zort5yMzeEhFbeeU",
  "key8": "5DQp8gJiZthvc9E385g9sHHsa3oeZZM3kDcz4xNug5LMBedLqyivts6B9rMFQCW4kTgpv2PesBbVTcAxKRfzWjGk",
  "key9": "3r3G76Be4jCiNXVArPchZsRik9WXkJKTh8KoQpMbBisAKtpWFArsgk9UQFDqzAjPafYYbV16M5LBxr1WX285aynm",
  "key10": "BXgk9K9uYW1EDjUdHyNyeyPGEb2r3XzMnMncwgEMPRoACZhUgmJqm5HQdFw9TjHQUZYGkgDecSpwWrSZXTwoidC",
  "key11": "4rcLSFbtuUz1pkr7KC4bs1prEZGQyowD9suQenpezCM4cY7YnJmtyKe273jjNYen46FprExUjSfiCfrnhMzaYr3a",
  "key12": "3Ux4iNbwfwhn4cBodSRimnRps7AgqGaJgNF92eoN6pGfWp7qcbohyH2ipxfd5EbKJ3r3xwz7Rj6SF94vo7AS62Pj",
  "key13": "2H8ZWTgHnYewQDbF7CaRhgLrW3jc7X14sVX6TmpZr4WuJH5bdt1Azwshsa5bLcnykvDvrynMHAzBaUumW48Bic6C",
  "key14": "44XKs6QhXnBTzes7ygm6FWGi6y22V3EDz8cctDj7KW4YAnKpdwXKMbbgtcAzekfV2DCbCnuW1cTiZ7FS7zqmMKbE",
  "key15": "2SRQWAvnAiDvWLT9p7T9qqmVCm45Fywu3urzWjxCkWCfjdHCPVa7a7CfNsPncBU7SpcWhYKQWd65hxWhiDvvz7Gi",
  "key16": "2oBxktsyJNTWCv2tQWKUtwYwesT8gbieeJ9zBJX77tU9b8AGktKznRaquRMbCFoYzATRAeTXNe9qTWNmYbdLbNus",
  "key17": "4mi8tL76etuLT5X9U3dREU9fNKjH2nFpnz9bkpkB7E39Dc62R4kqE4Amabghux6oN2n3Rzsrrf2g8zB9cn4ZLwt1",
  "key18": "4a8roW5qRkyL5fkEzscu7ruftZCwbN4sMEsGtVvktcQdXcnHCaoCsWq9KLCNqVbJY4RR5DXZswV9NwbPk9eqj1zy",
  "key19": "t5TUZcPSneMViensPT57nG8xeDDYF7sVBcj2UUrfFcRmHPCDLeWXW4Y6pBSazyzkShUnkEfMWWyou88RvwGpK3H",
  "key20": "3k2Gf48wGZy9Eeb8b8k3276TznecZstwMjiJFJTbEJy9XYdUqK7bDA12ALhpb2bTqftYQRA9GNgyQ3ds5Bt6txKH",
  "key21": "3VD27g28rCc9oTnvqq8NULD9TxR4KJMVJKbcmpTDffa35D517dTKGcLiyHJQkbrC2PBw4hj3usjvLFZGqX6JD9zn",
  "key22": "61UnsyLvGu8kTVu2JEBni1yxrdkAFGPTBmhF42gf1nedvRSHjJyJjr7t4FBSidao2BGAzeBSQ9bd5tfjB8dyREmR",
  "key23": "2Booo9wSDeMpKuP2ZaZt2MbPbXXyZq1HrG84VgxqZjrBaEhJjS3AzXxZUQoi2rmPo9r1eHYwAUkruLeVwki6s9S7",
  "key24": "h4qZRqNdFRsHUGCbuCFaTA29BmGTjhdbnyPzu6c9JhAE6zwZsLYLeFQ7KCoSWeXn8kAvKFXnQZDETa9BHxXnqZK",
  "key25": "4EMFzFKGioAjnpovHDu8KVJZuLAZxLHmHhsNkfzehX9SmBk44jSiNcTtGPtwNHcaPgz3uQJDyk7M9uCwy8GQhi5J",
  "key26": "2rhWBT9SpBii68CEgEHpXaxkXxfivrLfdCheVXJQbH5UejQGZYGFGaAvoA2dGp5myLbUBarZrbi53e7iem9S2Jwj",
  "key27": "2tZVVuJhhb7A7ingQrDXHpREMTUD4VU8UCMiHrDkSkeaCCk5Aa3mqg2yjcqB6TzyY2rJW7ybVeTwP6xDNTAgrrkT",
  "key28": "2W7b5zmum1PNkea2yAnj43FFvfuNBJt3v17dUAka8nWXnT4CmDcCPMStxdpakXz1rkrkfBYbeyiTySY7htFgkUgr",
  "key29": "5KGXzBtBDttFhhHSRPnR5caEXaTWqGxcTyjzmAZiWtfwEhgfm2w4DnkPdBh4ibZa9DUq2WvJQVYNiBrQzYab8RMJ"
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
