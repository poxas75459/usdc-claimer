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
    "5B7jUtygufU2MdFpwKSojqcBU84QQbkvo4EDAUBRRADnCLRMmHgU6QGgUcTiK7sh32jGX2vp1pFyzKoDDTW83noM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21V7pqULTWXKY4HRFUBsyVmB1zCr1cMhUeKJbtTWrgE24MU6theBDTWHzVozPhewGaaWjmjKFgqTYuk3A1MbYo4X",
  "key1": "F8j7ojFmuLWTGsQKiPv9mDEmzY6Q3NxZ92w2zxnJb33j5EYkaXzkaxuowhx1SgJYLVEfeS7MfSfqZ4ddp9MnTh4",
  "key2": "41HRy2PRMYjckpNUAzcsU8g86XjxbwBps9sEaPatiUzd9c1iQA4cPmRJgNWGacdqmaxBzu2dqEtY1frJgMSwqDUN",
  "key3": "4qcc55yFqwswaVKBJ3np4cmvwieDZCiAkVdYC9o566gcRfPGb1SqhxggMcNeBEAC2HacDroyRwcq1XSYJwyhYrbj",
  "key4": "2ManXRxvkC2x6PD1uCgtYZS9VBXSSrKAbs94E2XtJSRPNx1RY5SdFszCBbamp3LJzuSdsKgHwwjbLvDCzSLpoVx",
  "key5": "3wJMB8XSarDBP3U6SQmiQPC6thx7XU2FSseqDgxytJGfiPM45DCXVcq8jkAxKiyrB5o9jRnog9WSYAgogukwE4UG",
  "key6": "25DSv1TyocwBcWv5b6YjMfNv2k9LvTYH3f7NT2SFT7YiGAQLHNWZ4pvmjKXvKed82sc6b7KnMvEwp2VVm2pWdKsX",
  "key7": "64otUK22RMfBEiJL1FkDjb7QF1KiPghb6m6b1kCaRKmj9wYsyjFz2FhzmkHXZpM8ekXwcSdPW6XS54fTziDHKaHN",
  "key8": "5mhPL11X8cJcg2nvjyafs8eFR1UQ1tkNBdYYTxXrNRCAqpxAnFxMvTc77XMhMgkgF2pcsSpPjz2Y1LNGs4NQvRSs",
  "key9": "4ote7vdWquZHoSQNCpxvaq7aunvJMWyCuG5rKXNAkLUcvBzh3mQWCubq5LzKwDzR4pmV4XKffcGkJL4ufv3r6PbV",
  "key10": "43SYPZuAfnKwSfaEw1nwt9Vncjs3wp1q7rnRPyjvAJERZqmWSEeJWSLMyw9eNfRBZQGReip56UFxYDHDK43RmbYo",
  "key11": "4t5YxHJvcFn2zqoMLAmNFNHEBBjnH4h2SJJd7U8bXgZP7438yz33JdnxRk5ZGnGhbfThnzemhfRqgk8KH4Pwbus2",
  "key12": "5yKacywrRDwGqpubqs11dUHe4cb7nX89uDeCC2bWpB2ZP1eTkLpnZUxxMqtywcdgzdVk7rnSmpwSRUR1tc2FSrpb",
  "key13": "61cu3pRa2woQvGkxMB4JwEtmbs1Jh76QjNgExTQCkuzdEuyRu5Ziv5GyR6YaX1cKTqA92AoCC4PTDHsiR2Z12XKA",
  "key14": "3WyQHRVNNvR9rBHrpbQK9YSy45qWU95REorFLSC2oHp1G7wqHPvHb7tXiw6V1JFzSdKpPwyQTPBNTHGTPixC7ma",
  "key15": "3tTMDqB9iVpm1BqgnaPrXp7Zg6XrhNqdgCWFJvv49tKWiKfczfs1R4oruqZopYPucAjsbcyLa6L6yyTN5FoEbZqp",
  "key16": "vspcyprsTHSFLsa8Uf323mE1o82HbYbeJZS8b42EfAa2zs6fQbDVA5FBe7guZ3ujUjvL8nY7reqiZgUnVu46WMV",
  "key17": "DsoyC4eYHvLHwUhXDLqtArjyk8Vs1wvcfDLhatJAXnnEJUiNbEFEn4EzqgemLdt2JCt4yCU7H9Ky52Yb7cPacmf",
  "key18": "5WbTQaqCuD1VQ8jWfzJ77JpGFmou5dB6HN8yj9ms35HwAAMutvN6g3gfL7w7YooE1E3cxUadvhSNEEbjS29L4Z2j",
  "key19": "hg7hgsgbnCKoJVSfCaSSMqbAZYdEpXrvbZKzhhtaLUuaDrbCv92DE1gBvcVFPovLoL8Z5LuwCULfH3V63NPUqjd",
  "key20": "4ivYpg6V4qhPkVs34n7NEjYsiQ5YXpySsxn89T2wFFXg8zihTop1U6kVPMSh6uaVY3LnN7UgXqHFA3NFsbx8Gwb6",
  "key21": "jmttB84rJoKe9F2XLr4vMdGK9o4zCFF1Uy86Yr4G4HzhQaDhJmxLL1U3diWYjwbQ8esq17CWzN61qT3MHJr4FMW",
  "key22": "iioMPcb1ej7ARo3YEohUkmqZezfUMsx87wbHmuc8jafr418QPoqcHnhjppZsuravf662KfqS8USMWNi59ViXABU",
  "key23": "2iT6n2nhCJEewd66HPogzNpLRm4rCKcT1o1JHxuomZPxyr3ozkqBFjp7GthS1iAUyz8juBMGm7MMMMJGekegwK9v",
  "key24": "4wmuKcHcREaz98uuJR4QWtiy6C7TH39kqTg56Pvv7hPq8erHEfSBuJ4HMiyQVE8Pcd7vXwRdE3WRZWPecmoBCwJH",
  "key25": "dCnTpx3JFd4gZyGFFzMMBP6V5Xyk5jHqBmRQDuvcTYiQfLWimSyxCMLSZ4PYh3dMfVT9Jzj2jQs5XfdR6F5HqTy",
  "key26": "4QJciMi4869TGsuCn4cax3rYVgkpRT7N8bLWFm5v1Z6tm5E3AFfoy2JDKycMiGnFw4cv1PnmLmCwE1XRS6Nkd19w",
  "key27": "4vy33tNRHpp8yan3Fd1SDqkwYV17heUJFNjaeko6sgzbB7bWr8ya9LPS1V3MR1yk5RH4wrJtCQhaKe39DpqAKh8j",
  "key28": "5oftSQMYRV4gQy3UDxKFfXznK87LrL3yApGwh8kEfrxxscv6k99GWU6FUYNcrbwZRhKSXtwryJrZh5XynqYx3jjB",
  "key29": "5G3MSpArhyaFGSVbR4pFMM2tgivsDKk6im8emFvTpQGc2dS3oN7AjSN88xm6mTdvxHXEueDK1xbdeveMcZdoLSDp"
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
