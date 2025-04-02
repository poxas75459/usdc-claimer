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
    "2d91tQfDhFfAoADXkaxPWbCaE49ZwT19gUDUCKT9WzoFry46NUs8X82geXKVFzGvZoMtDmn7Z6cXTv5bjSGeLtyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XpnFFYwPp5RcK2EHrhZ7MmPTrjekkynsz7XoGquVSNhajDYTMmRF683UAbVFh8Bwq1UXkLUcf68XwkTmUJBYaxQ",
  "key1": "5TfbLWxm4AzDNymQXxcmYxy2EYJk9xUuku9hRgnaaU2Yesak8SZesR4M8UHfSxsqK3ajwRxyXomqJtNUMXemj1oh",
  "key2": "3r6ugu8qNyWoFTKoxE8GVKnDP925nBow4dwUC2qPBkkB7P9BrXD6SMPxU2KYeQ4EsfFq8PkCxw751Mi2PZnWTMLS",
  "key3": "4eoHZF5Jf8kpZRrCCZGWYNPsEWLBspg7FgHbbZoJESzXCKyBpe7fKGS9JCDurn3xpttkoELGfy9TCFhK8F2CDN4c",
  "key4": "2os38YzxRVnhAiWcxsc3YtV5pniKCvytUhr125NXDuWC75P5ZGwAzEaN5eGMbWYKHxJcgwJe9kMtXr162iQ1mcCj",
  "key5": "5Fy3CQDKR2jZbVZFxtpptMWPbpou5Ecg3iFNa4V8uXccEpFQbM3AcVrhkCNaxf9CwrMVE5BtwJwiM49kKACNsAtB",
  "key6": "5rccg5rEumTjU6zKa4S4Y8Vwz2BhoooRMrKHDeyeQsveAe38Nv1QXzChPY1h2ivtjQv6rhui3i9RUcJ9T1bxNCGt",
  "key7": "Z8Z18Q6Vxo72sLqubT33fWTN2F9ZAWLGKbP9hAsdMHn5b5uNZ9r4AmuA85s1rrWeXncb3JPdMmqiV7paTsxvHrE",
  "key8": "5JYUKnwmaTjFv4nWtTNHTudQ8NU5MSkABt16Juo7hCdQv2DTYVJybXhQwjMRpCwLXZVTKJQA5S9zNaLf4Am51qMa",
  "key9": "4ok2C4iwMAV5g1yrfjft9CKtGbFpWpH6a3SMSLFLGGHZus6Gcwnap76qnvzDmtQntiyapgaEcjHkfDTVdynwjmG",
  "key10": "5iA9bu3Ash59g65fvhdvUSDqTNJgGGrKX6b1nZkJLAWJZ1Je5CFutwQVsD9yWfQqQmGNaEx3Y3cmsPzvpLDPHkre",
  "key11": "3v5osQDZRRP7Siwo8iwGTxGwBDf8VjNjY1ebbvXMu8bnY56FgmxY9egdWS7kw4z2pdKiYWtmDP5UPTbim12autGH",
  "key12": "5yZXnpRjr8WZGQhoX55514sagpd5os2FiDWVXPVPEd29UZXY2vfWWeFnWpgxcE6X1BExnw3Hu6kRSw8vjpBLHvTx",
  "key13": "3pR27Jh8YN58yawarywGo9aRoMBCFzPaTwdYmn86wRX3NT98GLFUGSJYGHpxLkEpFojfXA3ucqvo6Qyr8ywr43yr",
  "key14": "6dL4BWzY2tcVq6JBwJrMzj8RxtGyFfZY76iKTxnAT7NyN2Zn4wFbAnVbG2aUvB5s2rmF7wwEYhwS7CNSG78tz1c",
  "key15": "62eqLFELnzH3P94Na9Hacw5bh1TXABEiuBWcuT8VxG8r8tH61QCJwm7QhCdHmSAjKHRpjF3iZS19wT7GHAMmQvqs",
  "key16": "2np9hw1pVepHGGGnSxafRZG8kLN1KTr8mabz5d9ZhNaeRjFKG8ot7ToUE56NKoBXsghYtdzVdaAWch1LPsKYiZ86",
  "key17": "B9U4DRzGZjn6iMVV1T4p8YwEvmUbRwsE2oD7ET5PoLd38ghSSVbgYwkLn2EKKcYFju1KfW2ytjn6sksP7TVjavF",
  "key18": "3H4uEvSzHgwbSUZAJM9gy8HzxyT2E9c5Kpp9rz4Wb1B6cBoqGEPYouwE3oZEo7knyRMPYRmPWyS8MEfNM4jAnDMU",
  "key19": "SG2EGgY8RjEMYfUvfU2g9DVswRcQ1r4skMpR2QCYP2GQWLmPtzcD8wBU8g9VRWcTazJH8bpVYEkr3GPAumzTeA9",
  "key20": "LzFCHdV82kNrcddJwTyAqwKyfMEnmVjP5CPp2Jh4tEgL7xqrnhX9Hqn9S1T4ZMWcuzVVh9CCPhVCWkv6Hdb9quv",
  "key21": "28gAxM9xauBGzTGyjYW1jjhwQkSz24doDLD2rzyyrmAjopzy2xZ7h5cAA49SBzG7k7dbmCuaymWrT8KMfLcamXNY",
  "key22": "4VUQkZ5YBWEnhQLsCWmoGnmcpMZ6ru2BrrXsDp2Zq2WxeHmAv5Qyg67cJTv5hpBfbLkJXqeAVKaXUkCvZesmXEDw",
  "key23": "2SXMci3LCLBpiuezwkYokT2vRPsejR25BCqLm4U452qVtn4W5qTDZDWCuscZpADdfCCsD21i9S8MH2CQ4iMJGFep",
  "key24": "GNgftxtoaQJ3vhrwYjvD2nGsSJPBninWBpwMhSDFDf1HrnY6onnKseSpbPAtenDCs6gxFeBhwrQskdpTatn3eRc"
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
