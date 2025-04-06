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
    "4WP29A8U7zhxT4peqMEYS5KHnfcbCZdfdncLZepPNiJJNCXHhrHysWVQ3hcHGm4r1k1a8hJ2uCLG1pCU32SBfU6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aB3TvSZKhDpadQc7ChgceJVivfjuMYDPoZfKA2ec4RMFfkSS6r6nBxjJUBt3SEgGJDjpNZPB1BUKEBBojbdAY4y",
  "key1": "4pjgPNQqf6VrCauhJ9PKRUMMUfak1kjckCTfFTN99Jg6VsEuwHne7aKC87nihkAuGG5rY4a8UE2v4mpYZVrAPEmd",
  "key2": "3e1CqELrnpTXEsyohhfc84Wv7esF9UWK4BX9dw9at3dQV4tnLnMuJNch4osBGdGdjNoQLzosoKgHkPfZ83Dbsaek",
  "key3": "26bJXvqjUVWVbNgTrTZasjHxhJ71d1N5xX8k77XsZf4eABNYsisQ7CCrvok16HhfpskbHe1VrGKBWXbPDFXqfREF",
  "key4": "3bdYW6NyTBeb7SVSbKoa9C1aFMxwEZTzYt6bo55c3NeYRzK8AiKk6vFkpXjmQJ99jP6L1fJf9MTW4EWCPAa1mUQP",
  "key5": "XSedWGL3XSd36dpwvPktmn23bBoBkMeSpCa7PxY5X7QjjV7tRfPPfdjhDTfvaHGxR6CwfHhFhngNG2xPtkcu5QG",
  "key6": "581q6o7ngaPWB9CmvpPEoW86UvGhDxEHuLBS4WAsXwx6t8xbjbf9kdpTFX5NVqCG2WzegnMSYDrcR8D3juPyz8ho",
  "key7": "4DWWU9miY5NpdxcN2KW74tMMtsEZn3ujd3BDcK6LhHDbHRfLkwsBdkdWdAiDAuHadejHFne1rRuyJ7ut5AKhK71Z",
  "key8": "3NSxzB9uBiQahXuLm8gmCPeKT4Y3zwcG5pRrKgGCRkiW3xFd9aCTBMwQEppuor9AgkbHZa2wRPFVJUkyUiG3WHbq",
  "key9": "gFwtYRCTURej392qF9YTdeFtvK33Fb6FHAaGmRpisPjGjcbC2hfMNKWj8SZCsWdcWzkpMveZZ9fNefeBtJanWti",
  "key10": "AYv954FY8wtfcE4V4sthGm5C5Gr8QhJw9NPsF8nY6rwF1ABnQkuwCaG9f3mr5bykd1DxeQ5iSwdfDahEzNwFL1s",
  "key11": "9xr6Euz1jQmznEkFoGCSUc4CncF6sr2fbqAdDBASuENH4s9Y2mUYXz1RzYBv5hBd9y4fF1dqeqyaxjbMGwMQ4nr",
  "key12": "2QPAoRVqSVHKxZjW325JBbLfT3nAkgELMGbnDssmhtUGj8978bhxn3BS425bAPCFirP6fHRQsqDqe14Eyw8PanHZ",
  "key13": "42nfuLW4zeT99n3kEx5oaABR6HpSJ9n7hryzYGpNaee44VSXvJ1x5gJSAmMedrpBfCgvhbciRLjTXF2QKDJmw5g7",
  "key14": "5ZEm5ewHJMT2DfciuNQLF4Ymg4fEg4FXBgWMo58Ve1T5z4sz4uE4BK2E3X3uPqMs9S5KH6E9JkyXUNcHHh7LPsgN",
  "key15": "3xwBMSqFFxsQr4FANQGQPAW7orVXkVWCFn8dndpkhYPC3hhoEf22cbQPN58XqnDJSUBKpUuvUSN2HbE8C7jzNDiM",
  "key16": "4MbjGLqSSNhyQx5AMqDy5g1hveei3MexJs2oo5rznxDCyc7wUKeQJ3C23oMbxZUBYTbd8RAXDoqZEgo5cDav5XgK",
  "key17": "SGpiti1TSm4jL3B5GZKsgV8v33MUfPuH3FRTZBktftiayfizE8pxs7iJ9X2sJLBBTBgJYXWbxMhkcbgbAnEnATu",
  "key18": "3mVLMLo3veHe8QvV3h6iF8uPtDkKWBw86smHeC5DKc4X7vfuYB7foAXtXYYnYh5jvXid2w16eCZNM9UCytL2aFnk",
  "key19": "3c5TTwfnNqphLeL8xrvK2aGjzyTPqvQicYx3oCuHYNiEEyrvCNaMxi18e4CzSspmcDxNg1KUoLJsaCLhV1EPKzSh",
  "key20": "2zfQaFzrmgJ4mHmiLzqrCruHyCPFbDjX2hSmeb2ALPckpk4v3jWhro9WmkYU441CchrEAGpaCA5F14wD6aJpbBDS",
  "key21": "3ug9hRfQgQT6vYAX7zKVAn6CQ2jtzc7J35UUMXGHbBeRmEmXTPak3M7oHo89TcXmAyBdeboEtoxJ2rgB6R9dpND4",
  "key22": "32LJNPYPKeY6cjWbLHz1ZsQt66GdpYD2mvoVyenxYgkXTNmttx2D2JyNFB4tMz7yfg6gPXS5zJPdQFqwPjKHFBjA",
  "key23": "4pwnMGLbwrxqRq3LnuTpAA3jHy4bBV7VsomDNWriRpByk6PD925Aujqu3JDmmKj2wHP7inUUqdDAcStQaeXibS8i",
  "key24": "2uRi51z7CyWbRBoRksyogRSwAoieEcLeEWbuTr9bPKpmAjf761odwScXZJf7RHDgnxh72oQ8YVU5kG7j8Cf6sn9y",
  "key25": "48A1iTHmXRuENVmaZuAmmLiCv6pVQgPJdTSrtwL2fkKVsniktvnRL4niDpKjGJT48PgSkLmWrzELzLMEefHP52tG",
  "key26": "2LHqG2p6CtECT8ChRnKCy4ZtrH6yoy9efDDURyMdVuYCYw1aUGS7Sqk1nGtVJssY1DHawHxwZxZQiUPVfE1ohmBN",
  "key27": "3uJvj1q8AtfS8aACtDKKXCERpYFjbhBXLtH2VKk4xPWNYyscrakmkRkMPjfgumUfuXzn35vLwjeu24d21asnzGUN",
  "key28": "5boWaC79yEdFWLybt3WBn8ryqvijQdQ9pksjfVyinEfVcQja6nhZavBWUEyZSVpZAFf1Eb2SAz2iXTuVH6uS5QaL",
  "key29": "5u6doNfvogMwtncKoQoGMoXznncjLPazLD4cGsKJAwDFfxn77d7hXZ4ffTiWUQTEXqNcYKNewkJ9wx8gyJVDcaDE",
  "key30": "2JFoH2zPbeMk4y49XpvenDTuYSKqf8VZCDaJUNg5hqGNdNadgMSKTzPbTTEEkDfD6xKbVTwveEuhE2xrUAq12J5v",
  "key31": "3KMhEJCCH8QJ3mVKcphrY8PQQoHkpbsvvG8zyNavhiTDuahLbBNtVtrV8f3igisGsCYwe4dj6WpzW19gWCiGn8UR"
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
