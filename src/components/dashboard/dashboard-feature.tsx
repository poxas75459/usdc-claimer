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
    "2FgRzxKYcQQsVZmW8xAsfNaEyrkvRxPgc1TfUHmW2Qrk8eQC7TKGkATWfCMExTPuvofZxFfj6GwQbE5VjsioMA1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W733KVdziEVep8HkNcma8xUP7BJGxMDK6uw25D2UtBpkqR32PRLrw5CBz7t2rJa8Kcywzs7jrpscRaKcLjBTRv9",
  "key1": "Ws9zDwCL1EipJ8KazjR4fV6NH7wk4AUP9N7TMTK2QpTM2mLEx3PMzUQgzu9BUC9xUAzvXB7gTqAzTYCGE2VrWK3",
  "key2": "4Zp2hUVgDePuVRiGU1WapCVw2orRcV5jq4uSbsrFfJ4xuZvtEiVjguftn64bDuDTDtTZZzF7MpYXtVbHwEFJTLSv",
  "key3": "4KbxQ6Vo1K3L6WndS6Tbx41GZqyHV4yG41E9WQkNXxumHpLbQkQQhhGcTEvRjpT7rFCA1iseMdPgYWMknbbo4DHd",
  "key4": "5oPUavx5wgwsb6K6piXqZEcgVP3Vm6vW7Hj8KrgbrCiagtZ7Q3ZuHe2e3dz9EsvMPW8zRWmkMiziqUvFn363pvpu",
  "key5": "3dguZCmPfTvKXuq1hZeXJueTSaemLf1hprG8DQdR4owDqf7GffrPA4QrzDrVjcfLKVEgdF5VKfDJwurXtR5J5eKT",
  "key6": "2tiv6pvr6EJTjSEJvPkDDaSzYdUUxWpwDSosDdfv85SXgWjGTWrm9CKkPJVmQCurQvJsZxMmuXVx1qgFPXMtMwSw",
  "key7": "hpoH9nkPtr5BveSVU6bW5c56Ms6jNPw9pbBsVKTuRFZHfZp93hZZWAVSR2wdEjkdWas1Dt4bkg4jN6nngCwJvvE",
  "key8": "i1oC1CVVDrVktRyZyhgU4bH8FxGX2FQK91cNYqsYdxGtbB6cTZuLtmpKfi1APFeY1xLdkPG4E4yrm1YJx3wUpCy",
  "key9": "36gkNgQtuy68BQKxd76h3vXGG2gQC4tN9UwGJarm7G5Pn6xAhqFPv2AbqZeLA9AD9W5oQhJLZjEsJKXmuacZwiaN",
  "key10": "5Kw41DBf7KbhZ854gLfngd2xmxJjqVab9LWsLie3QiGaC6TvYHtx9ejFDTmahTAUJWvfWi7MSQpjew51ha31gQFs",
  "key11": "5dXwHxnGNmmmfj3S8nSLyY2fz4DQ3485DzEiVd8AdtRF8Ui6sP79icjijdHFjH4pgqRNqQnqjfD2KNFTu2gdQERV",
  "key12": "5gWRfD1tCCntj2MafGGFbXuSz5V4u1ZmJSWd3bnDe7CppLeWV2VpiJnUKW6nLDqaAmtVnCK14LoQuzMs2sj16Bva",
  "key13": "WYh1TZrBWeSJfDY4i1q1khcLLnj1NnnuZD9Q4p8jWL5fgdEQr1g1iWyZuM6tyB7L7khfU6noeUF7MwsyXksB5DP",
  "key14": "3J5NJsFPb13wY4mwbWaApqpRpco5SH5fL1zmKyxLarvU3PEGLkNgyX6CWxCMPDUDXJg1LtmdGCPyNmeazzcpuSew",
  "key15": "4C6fRHUMnTrHsLVJK3syJMjtW3guqzTu846r7d5UHNTaxZyVhvDNAE3XHo8HTfMubx6Dw6tieqze89UxsFkjoQCM",
  "key16": "RUdS3oe8ckHNLzDAk7ZPCAmTz7UPsLR63141VC6ZoeubowE6H36btUkLAtGPf9d92i781a1WZqbnaevzrLJgkVZ",
  "key17": "2VPogWwMT6vWbTop3DMt37nAtLX11naCyNU3tm6GsmsC2q9zAGmwcA7AzzH1KhhS4nXEzU4T2j5qhvV1EfG12KQq",
  "key18": "5BoPM5rNYN2SSERT7XFMuG1Xibgcw88BkPqr7ELDWczZdGbD7y38UfVeVpHqCQVTvborVHEFYSKFyNaFqS3yxLbC",
  "key19": "3ygqfEbaSFQMFVKgE9iKDBZMgu1j7aZCTEgGyPQruLg8QE3EQjPG1o3q6d3Fk7iL57ajStihMMeCvFE3zpiW5Nvb",
  "key20": "3iuhuKcsxvPneUbA5jtcbmFDe6ojvwvfTpMxFuWpF5rcmzzGYpWcDA3Lgcat3cXrCypczi3JF2zicToNnfzm3Jif",
  "key21": "4eJCLcBnMc3xECr4qsQwSpgrfhWVdBGsFcSC82aFe3TUysgyCDN9ygy8zsdhCuptA6v81Yu8kxfogMqpj3zg1UXK",
  "key22": "35AmfBAuNdHhTuWnjG5KEzjmWds9uzA6Z9VaV52Eww6awUi3M4za5fXj5UmPFBz9f99mehGqxQ7b8b49ubSuN1ys",
  "key23": "3vU86X8eDQpjd89h4o7CFJPzL3JHPdautdNJquEkVhexyLqyEdorEjF5uMBQKV9YdUiqimAK8wyAyWo1XPK7A9cK",
  "key24": "2S7T6NJbjSZfQXFMFDNDYU3eeyEK9tx5nwsinxG7Wcx8zRbugkgUsFvfGGkWhJjyoYVnnETdGv1WP4UqnmVdZLpN",
  "key25": "45nnmAj1bCJzQbWNq2XsY6S381uxnjcvQHjSm9WzbW9MkKdqLGghi4PPoBi1szUPhNw7x1CLrTT67qPAetDiris2",
  "key26": "3meaaswkWzEcRpi7w5PGbPPS4YeWVTHAFsofuBW1ZBgwcSuhReW2PkK8Qnkgrf5A657iPEdY9WKexe3umLuD59aq",
  "key27": "28R1NX9rtAohL2uSxZxp9tGPJsUeUyQRtV5vzGfQA3opaqnYrUn7Abmwj59fyH6vbHcugDjLhBf96h9YufDqvRNQ",
  "key28": "dChyQvJPKHgJmySacJz692nxdF6oWDam8CG8AsqZp5NeUQsWpS7B3ZPSf73RLnT3qZRcaBpU2n2GGG1xPGRcRrv",
  "key29": "2hycijDnE6FWcARApLwg8b9UA5xUxoiXa4Y9h4T9F4o6ebq9TDs359vvcQAaGswxvnmSshixjyZZ8pin23ASjf9i",
  "key30": "42ZDNYACUcX6WBJJZWPU3nVozeXfiTuoVkBjaN5jPtvqcuuyA3VcZmh4Gg7cPXaH8XvsxTJrjnUB8kQC1sYRtTa6",
  "key31": "2XQrLJaMPzmobybMM9EaxhWX5GmqduHBrsV3rZ17pWCy4xp7PjBfomvpPmq2Xv6L6JmFyGVSV67vurvwc9gET4z8",
  "key32": "2oAprvkntt72e2m7DkAEbu3iqrATcnBA2WFMW4CyywtVEBwW7Xbe7F7ZbgAh2ozJMTW7wJrtVpFJMxSsGTGpP4Wo",
  "key33": "48ko8XQK5hiSQraf4RrDjXsCsLfDcLaDohQnfLVXvEVSYh7WaXe1yQUNXd16VC5GbK8Z5JpxwxyUfFWdE76m4G6a",
  "key34": "49Go59iDrnbnomFEhqoJFwvBztnjvL9WoowhsUQZ7GJkBszFFtfCeou37dA2w5YBWZT2m5SGwMEqTaMymNr9FPhb",
  "key35": "27icy9ewxs5XnY7SjUDFK3wdKMrkqZv5Wwkr4U4prmQWT63YasMGaG8k8WLFjWMFnMopz6rdwjTsUER4nLSWe7AX",
  "key36": "51jFQ821uhZLXZBtMHwYj8fH8uEVMKAs5bYJ7QXW3iYguKJwvzjoGF1449ZsZd7DgKs8vDE4UMeTtpCRmd1CfmUE",
  "key37": "9YNpt8rN7WaBSzvPmZ4HVEKWjvhf1eZpo9G38XwGJN3ou1Hb7AaZDyhkaUL55ywRrcR3o3eDhjHYio37HzKLAnE",
  "key38": "5HKpc9EW7eAeqNABvPtkd2FeAJ7bYrZx2sJp929rk3yyEhkBB5dAkSypcn861WGjQSUcGZCz92eLe4CZYbY7NFiT",
  "key39": "fL8Gi1ZuRB7UZododfFUZpLV6wWC5KDZ4rMeZUXPFCSZtUANvnbJPoxjUUoK7AmXBZXWFuj8jobk2GXVmNKi1t3"
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
