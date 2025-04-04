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
    "5NZXv1mogtGizoAcyx6tMXPNCBLNWizpcZb5xtTBTJSNYsrvojXymM13o5f1Ss7GprJRLjcurs3XpBGNy2rNetV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFWLA6Gy7wdou6UMuv3YddrtfMwJEMqSdMrUxw5URsioxjhne8P2MeAZU2nbwbDUKdDgeCUC6B5PeS6cqL3LJLM",
  "key1": "CuNXbpQVYFrHcb5vS83bE2iaHcSaz9cbiV1aCyDwDZW6LUJqQNddudncrX2o1EBAYqLUHVoAAcW6xBMF3C4KRzn",
  "key2": "3QkZBjks48nK7Rpk9HXWXmCG4i9aQevw4Tx2xmdyiGNkL2HXHewSqG4WVhahTjjztSZKkr5KLQ7YWNm4SRoSS3Lf",
  "key3": "57SArDds9TasyT5BMCTkAjKG7cpXaSZ2HGFBVxtXex3aJAqRE1tDbiw4U5wnYG5VC28TQLqei9ErpT5gCfYXUd3w",
  "key4": "2VJLKQnAc4LdSgWyLjRuRDjzndq47fYDYLBynAVixjTmQrrYxYBLxLYbi3KXCKwPzcwEyQh2uLVXu3ER69eYZ97Q",
  "key5": "3VHW9rLZNzABLYkzoq4jktg6Z3huXNcawJ1hAm2m9xgAMhhBtAjJXr1w9pqY98NPMdVzM7w5hGjkefeuHk2k2hJB",
  "key6": "bx2zjbiSoEYFDXWutivJHnpM4PkNLaVwpSYy2xd34rogPPrvpjtmvVR6J4bkmR7n7Pyfb5MGXc33iuBs9VfF1r1",
  "key7": "4dJtcptzHUiHpy4LbXZ5znX8SGvoDGXYyDRQJPdJhLdNPxHhcqFxzTgSMNR8VjtniGwCPWjuy8KSo1KLpPimfCak",
  "key8": "52QbTTJnGGNPo66qHyhVQ8fb4mnNDfMRvBhnpc8cZBQPTCNLYeV4Y7xme4JrnpxJRKy8nJpmwwpLsE7hefPwgvmr",
  "key9": "5A1xAFym4jUoq9ijpSzFc6i9waAWyR4SrJwcjb4FoYB3CG4CYFVimwX7xJTnYbrhXSYdS6PuAgH964nT3CmV71zg",
  "key10": "zfcGiS7RK6iSj97xfwj5oxhrxcrwbvfr9eHeJ19bpguU4tppuKCzV6SP7dg285Kj8Riiy6T7Hs6tQHxccnEiySB",
  "key11": "5jKx9KrNud33XwJPYAsj1Ho3Smf7iU7pK3vQcnupTfEu4o1dHRv8uvhv76e2fVXXd1EFxfZW7Hw3onkGdhgJRb5X",
  "key12": "12A9a1ofRBB5Mb77NzNHBdji2sJxrGa5VuANT8tHJiakipfNR5pnUxgGw9NwF1cSSUumaB9MQnoMF8uoKb34iXkM",
  "key13": "W2s9x2KxjGszRAyieDcdriHBwmoK8nvsjRDKwsiKxNZebVoTWPjtZodAbMEUMhev4g29mTA29n1K1V7yDHWK4P5",
  "key14": "oq5dAyihF3H7A4RxLh3tcsVjw3Whhw9pzi77WppLdjx7jkUsZTmpbihW1qrLn3xMBYyxmnXe9KZ82kZBpENfsqp",
  "key15": "Jnb6Ub6Ck61MWJUtPKkHetgMvXEDEMFmCoqNTHDWa3onmKrL8ofqHggMFsBiFmVemooFbU8vuaaEE26y2ewq92a",
  "key16": "2nJCMzSkuAqkXatFFBAf9YbuFWdHrRcZV34nt6NFxKFpD2obYUsRFD9b3UcLnzPxi8LSR14yLimsrBVTMykmDe9",
  "key17": "23ZrmWX4Ze1qXzJEvvHPYrdEjAcTvJtomRBuxgj3H1XLTfSZ3hYrDxJ35DPH698FWhWBbwGv2jAP1pe7zN2RFXMG",
  "key18": "4s4PD4SVCW4k4oo7tF3KA6Hw3vgHGVMdjxdWMv6kfBdGWKzBw8NA7Sz9JZoCDD6mVM9F54d8rq4WCZ9ZLQyugMQf",
  "key19": "2sfMfC1kZxQjUhbtDPT2F2YY7JjeQXthD65Vu2uU3c5X1CUsP6RWLYaUM2qfCEEfziu8UHPn9utATNJijxapsMi4",
  "key20": "3tpqmwRAmDTqi9zDAZ2YsiuDWHWNopegk1qAudsAekD9zjDdPSca19fcq5SfqVwsSeR4v9SkxMt5SBnGXTG5eBjo",
  "key21": "5AGUF9YVY8CHNcomgc3wQZMRsrydD4WoatoHDSUDy2GCgTSRGVAcHyfh9YyEvj96qD4MDz7njbwtnL3DeUA3AJtt",
  "key22": "3tvmVZug4mjLWMHjXzYmtSyJ8GHNg7spPC6uDkAVJcBsWbd9MdjGH9V9kqjnzYmAeDz8f8nuvE9nHNCaBqDFhLDg",
  "key23": "2vXcpmsepimDAgUzoV3V22xPZLcXgZWY666midD7ai9qrHeMQ6UhxM2FSuKjudqx4B1M4VEYogMy8Yq1WkaCmet2",
  "key24": "r3gWBwEkEyKrFambNtTQgvgmookQP6sN1b5paF4DXCJTzUfqbmKyxbM2JAbYJ65rVXaiApeBWEMq7zCqCdwk35k"
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
