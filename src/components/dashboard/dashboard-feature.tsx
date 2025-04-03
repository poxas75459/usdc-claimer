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
    "5GjqX65VqFSjuKCdt38rY9Cm6MZUw7o64ioqabEZ2L2kjW2PCN3s3gByuoy8GG4qFhMiLBbuvxMidV5pWr1KeSVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYDxfs1UpU6dzFWkBWgNRcfjwtdUuexj6ojA1eKL4v1ZZPBRFsX8fUB7rs9cecYeiMgPMcE2e7Z7cQLSJvzQ3xy",
  "key1": "3NGz6FjsWM4Hv12iaBPsDk3A7hsxTiipQHwb1yauh7LHfkf3w2yx1jksPFojnCJ3yfBk4PKC1id1kLXCumw6uqRe",
  "key2": "3TTtLhCpHke9JL3CwZQzBDbKdwF3cBFmLXTbvnc2fvuwkmQ3NkkqrFQtLmoTCQuqY7wiSiSQgM7FfaHYdmBK57Jn",
  "key3": "4n87GwXmKc2kDTBKJo9MqEZ6gSkokHfUPBhUxJpr9sk1jzgCGnttFuKXnJe76Mu5WdZLskLEvUc8WHeNKb1EGUsP",
  "key4": "ZLNR4bJq9w73k3FLkWScuGefzL9VuLRyVtfcV3XPP25Jo4ZQoGg3GjkyURxNqUPhzFWyxdtHGMMF4bkHnSCafEH",
  "key5": "2EYKqriufPwq98e5dq1kB2vWSjiZpuXaXeJWQitkd7Riko3YjxiRWo6yJbkcw2P8fnPpCE5puYwQL4qY7bvaHhXw",
  "key6": "3WpAe8j2q3Fer8toMoAvoC7FMDXB4M6WDRxv9WCESAyLZA5SXbWmnqa7N6tjrjdhhTHV6PJK6F3vt6DVvTEcKKXA",
  "key7": "4VHRYGw5dtcQXj5gfaQAZDLadv18neNU7jhi8bkA73MzpsMmaWioQ2fqR7VtZf6FJMi27jbP9JoSw68LPt7J6GQT",
  "key8": "4jMMQg516fgJaYP8ijT199p48nPNSkcBbd6Gsi1KJ5mRYM3Nu4Dw26oYCBW7VZ67BMjoVzsUHM82TK7x3DipgEFc",
  "key9": "1ByMStfQXFtR9sKKQNZ9ZmM1kZJwEth4FvUtQpvLGkSHnAFsCv8avrSMpjPjN6LyLCDDKeoiEigcYeAWPrAwBci",
  "key10": "5Qg86P8Z6dkYRxJq7YJSA1Pb3qsFiburwaVmUM43PW5KAeGxvba5hqJ95ccqpfK6NyqFXX7BgrZPsCSjW6iTyZeS",
  "key11": "m35vQSU2vVNsP7HNwmUu4ZDKXw4rmAHDFhnCSAaXfPa1dbzr4rZJgnSKFdtjEdcFXbDLJLAdzG2E8rvsWZji2um",
  "key12": "orZNvsaiP3xRayMdk15ZNQBsoTeEH5hT5TUanhskWWjwHC1GgvFFvhDZft3h3FaZ7jv77g9hq3pNmScDbz4HGHV",
  "key13": "4fEs95s41C112yCPAye7KigMUBamQuy3va5JfvjVWqBUziDpk6C8pRdif2puP5mWD88m3nNuxEvrhCTZjqF9RdYa",
  "key14": "4xfwGvYE8tbwW6Fpe1TTAiYzEVHriSVUDL21V6BjKcJbCyuvLHSQqf4Tt6XG9qmWmHwJsT1PuK1iRmJzxC45r7MT",
  "key15": "5SPMeyfH3eqr6ZWUFXYgqzjWaZ3sCcCCnWfUrW6RFPtmeTU8rSDfST5u2gkUGQMufxTzfidn1iMrP3eARrtpdzGp",
  "key16": "2vbnV7yDCj6YED4tw1Ac5ALCog9LavNsh2Vp8qp5B2RQ1M4CVm2KzjrGtTmcjVrpNkCt3mYNwVy2KrdxvRg6Rz23",
  "key17": "2a9ZUDVzVVDPsjXRgJC5owW6qhPjnjBe5xUULKc3Lkg9W1WFyLvMusoo7FKZiALZZ8fa76SgiM7hGXzCXrusVvnA",
  "key18": "2pKf7EMaBtzyCWwe5xh6BejoykQXbD2HxuHCfivPaNVLWY6j86PmJWFqEqK5ey64CnAajT4Q6Qz1VU7wwanMp46Z",
  "key19": "39gWb5jh4eDPfZcZXUAtBxqVYFQX7E66GZVBVRmKcVQXB7cck5MrDxrixdmZE3NEHiveW9YpCeebwnRaoJToRq5V",
  "key20": "3PVnuHhSvGxCNftUbki6yWsj1sXYgJ9K2k2m7pgbPYuKGwYQMBrhSv3PUTJYPxTgDwd1rQT2Vg6jPKRJzEKARd3C",
  "key21": "2iTReopxUYjyKqb2oLNdiifE2yrZUYV5qkCJikbkjwvKzAsZZAQLAVziSuVxBWnCfpHph6KDJanj7jyvz2gARonf",
  "key22": "5wJi24yZVfpKoBko43g2hGAJzTkKS84pxBFQUrNjt9jngZ7hkPLuWP9EiNmVXQp2qLF8Hz59WZbxRFsK1fXBbcTE",
  "key23": "2P9Rc8F7jHLjMyW1YKvz8VdKk5QJ1RBrPupWcjb7ZFrVZR569fe9dpXDZdGynaQ2bWQ3bhcJ7shanYwZECxf6z1H",
  "key24": "63fAE15GoZa4QfwrJTQtZ2n2ZqZs1CHeAaaYwBKVex9KwfdF6wok95toVT6bHAwaz4uc4z3fVunWTLkyFPdMsQir",
  "key25": "3N7fJoF13FAHfrqzn49BSPN49bUYav5JfeQXWcm9VQCzC8tVfUttZBB9c9uq5bG3yZnLYdLnNe1MiHuhomkQmf4r",
  "key26": "4L8b5hGMugo6t9huW4w8CKEfHCERm6bUTyCUs9Mz4XCgGXmDSYG19YLRdiGE8wwttA38fzUR63TNqBsaeymjux3w",
  "key27": "Bqwbw4wSoeiVwnDd3JZutYnMTqk3RDCWSkvVU3MuTp6PQg2nMYEo9XwJ2ez1qw57Qpg8wyStiH41MgoN2ohc74D",
  "key28": "2jtUYQ5TX8vLz8xAbXWR2hZSTnZqUvCVGeLTVWPBamX9PtpVG1FYrMuRFQjWk6v1Bga2Pr97BiJ34EvRvFcqLpNX",
  "key29": "3wH6vpfg7BbpLEARtp3Hh3F3xs6uBeVUcaBo222SSED478dm2NX6jeXoTUPMdGkUPbe62rSs618BrLBabL7YA3oi"
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
