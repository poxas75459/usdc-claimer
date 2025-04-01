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
    "3b4APacYVioRhPNFcx2zT6zF9e7ytftiAD4Jxjch4aFT6Y5TuWvjQ71NXSCpzUFvk21oBYRmkm9394EzwQAfBcVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuwE6b4nsYE3gbWrAB88EwjbdWfYmghUJ3YTgqR9esbEM2CcVAQNQUgiXz8BScPxsBApfS25cb17niBdfeeSDQd",
  "key1": "4gw2NnMmx9wpBRPyG3LpNMVPWox26UBDpaMPTLpCG792wTgMd1BArdRVnrfM4GiqRESB1ZqmgGVuw96jwEPBYgUc",
  "key2": "3emciesHvNbM83YC9UoQcKwnvTbCmMLZjkRLcoTDgzAZq3fdr175Zxj4DTLHGQ822nff8sRan7255rdoMuR2Xarr",
  "key3": "4zaigkVRRimqkC62KqDa2tS6UFFudtpJDSm3Fcfbq6PzUevdxndrthd9kB1A2De8jxqpDnWcXbRE5KKeXnLrovsK",
  "key4": "iQrHgPV4rBDupySz2iVBWnUrYSxx4ckHAnQ4pNhaiv3jq4NepYWsWvLDoCBJLrFHgwCvyWjMTma3ZbuCH9tUmZM",
  "key5": "4sPjFsdb1PRpX48fHCoQrKSFGNBdYRMQE5finfbCkHcuNub65gGhNcrPNtPyMRXb5N8zgX2fp5JkyWMsB3G9aoNo",
  "key6": "3895ZUpfayobycJyG4wy9QoFmjbbNdSpMrfKmCcpZr2PLPxSo9sXZKgjhKytFpopaX5WmPEQbW4nZdJTDef9DHtv",
  "key7": "5LaLSddCLnXvfodnBQfwofBStK9qKt5CUbgGsffSm4hK49fFWNgKUckYVgUWycD86aRsdRdw1tADS4qEYjdwet5N",
  "key8": "2hwivfdp7QjR6tAkSCUywp2N1JnV7pAdFDrjsyYSm6wP1gdR8gvEg6DHMGqraMNXFzciZ4gF7AFLP7sDcTfzpb7G",
  "key9": "5URUAR13Ht5skeuG23rYNnJRFwFGTYPZxhaFKauNzN2Qdds2ForCD5nhBDMBcc9C7qUrs66BAW7E9cUHAFskNYpS",
  "key10": "2YCdSdgWi79mTokdJhYuRC5kjTcKerU6nEFPRXiTwRwxHcrBhnyHjXdfTSAaKnYUspVovSzLGmcT5DDzY1xSJP1K",
  "key11": "4fcu8iB5ECz3BuzEKTv6c3LhXwQ54qEMA4K4G1pZsZgDD2YWhXSiz1sj1Te9bdQLa5CsQYXem2pAjU8JFSesK6Ra",
  "key12": "5fEpz6FRY9m4Q138idoAbhQiNCPWQLEQVGEy84C8XpCyspzS3c5qX8gTypYwQfodz6GgBf9YWbTKiXf4NQjvA1GQ",
  "key13": "38sf44x6H5woCKZqhWjMSoaCsoo6p2MPmo7EPt1hKYVTEswCvQfHiuX5VMh7yRpuZ87N3Fj3g8jkCVEMiZDeeffY",
  "key14": "3CdXo9QW7rNYSPk5YrDRng9fEb1dPkjUKDzT5D4z8L3yhcxREZYb9UpJFAwqsAcxsADj4TxDx9t8jNKg2TyCH2my",
  "key15": "o65iUzrnRAhQWR2JMVhhzcyMvazMyTiKwgUZbHCexWXaYgiYk1JsV6UMgxZks6VoMnBagLToMkMVUoXcVoqUWAw",
  "key16": "qJtohiRtdNh26YN3sFd5Lu8KHKPRrbfbjbBpWzUxV4mSYdq1XdGo4grfMT4JKBqLKrnqiSCo4VXBjCaSfHVGBze",
  "key17": "2b9KrEaP1Q8ghEgLYp2vKj4vp5zKDjEw5sGjE4kXCdMQ3Q9Kr8kj2p72nLtCX3tFnQyjn33HQR1Kf9Ro9p3WDhpq",
  "key18": "2RrF3Ho6VoaEM3uMiqzJUR9BScSt4ykTVWRAtEyjJ3fkDkYHLU2xUkRgTPZKS4Fnxb1MsjksFhcheooeuqUqweDe",
  "key19": "4GNx2bqm2upGEpcCB3NXDjtB6tptFdjq6v7bZ4X8mJ7L4wAjjkF8gSwU8DnDRy4zyay6wPa3apZPz1n4auxArKiY",
  "key20": "2EUS9hLeBCa82C2Dc5VF1yJ5bB4diBPXoRaXHcrgv3ihZesg9kgFUVBCzjCpQ4Van7irSfdVRgc6TfPisAUwbASE",
  "key21": "4nh9gPAPAwRnQrMVnfnEyNKmJ924vRbhPgtpGobHZ4GNP8RMrZcTNTSW7zJL7g2sfwZmreTvGjiLRtY5NnNi7X5p",
  "key22": "3KbeidmXXRypkwzmnKhamytxHGQdBjSytUmhRqai2BYiLkX9P8t5c3fefS5j3CtvtJ5fRDieg5CC8v235WCVEWS9",
  "key23": "2rhn3AbfhRziiKRpWrHUFKxN82Cc69bm3JL9Huh7bw8aGATHTnrz1CKwscn11YBdJE8MmDHE4WNDWko6Nt46ks13",
  "key24": "5wzw2RbjTEu8gXVEzzwsHLpo5ySmunoR3iktr5yQyhQoguXpiQHVbbZc6zkrRh92KGFqBPXkhWP9nZTEqwR1zCmJ",
  "key25": "427NU1Pjp6mDqTePpCqjtDQ54wng5kZ6wQWk3uw2JTAg4iUHHvfARPCGvzg28dGBJYw8y5yJkyrEWDDjAwPq2ExD",
  "key26": "2ASzs5NoNabtCKyANBzj2VZnvmkMguUEhZPXgatnVbp481jZZaVQzLEqWmpQdCKAzt3v2hTPhMfJ3Rb7fJfeGf6S",
  "key27": "2WRgJLUt669ZhCzrP5KBA6cp4u4k8eNaXauV8Gvq9eaBXftwW3qSwAdohvvmcK78gKjBdVeD1pUvp3S1AY4cxR9E",
  "key28": "5DGHVVFE6DLU2KSJjyLD9pWjNdqwmb4WJDvBncg9wxaW1SHAsNxaTNSKoArMWXb7oZSfzdHKerTth5848yZhWRej",
  "key29": "3AVJMKnpHhSkUZYrhUQspgUA7xQZrf5QX7FGEru1KVpfkWvwFG9MWCv4xsnVDWTsud8dNVGiyQuDZsEoqEZNJPEN",
  "key30": "2vLciKJmqfoaaZ2fS9LfjTzDxmYhRg5zQfhRWr6ceyAu3f8tGBg7WKqaKmtTcPAueEzwESMvjiPfiVPNdfZAdyLs",
  "key31": "36iXKpzsgY6EnPQ7DdTJYgQxanTBSTGitkr2acdFP4f3e3kP7Tvusrnuo1rnGcDDm5LkRYvHMsXHxhPNd8reB3Cj",
  "key32": "3QYTkPztyUSSz8nFQV5XuSivWk94aMfBFQCtPrJbjEdN6pS93zQQsC6yUiW6vxKy5Afz34xBqnuoh9wryx4fAyF"
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
