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
    "5m2vdWyQB9ww4QHS5cYFnUn9sdQYcmvewkraZpxL4gXSc18K4fntBg27L1v7nYAQBLmvgr8TW1Ae6TkkW1boE9C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zLypkbZ898FxXtwj9uq1EJf6KnQG6JrZUSQh9tC7UhaKpNPt1DDTqCXdDj9tXbp6erXbnoTmg9mHhMm2ERiXgso",
  "key1": "5SriT52BbkHod6RLia4SXfjpjkRshaXbe4o7nqRTAnV5yD5BKSzeZHrmCt2JEvWFVGKuFyjQRXmcD9ijngbUJt2P",
  "key2": "2CUKZqirDkpgVQLUQeVcBjv9BwfDLP2QdEtmcRhadPmb9BVpd7MXZekXmoq855Qeygz62ZJGjDXz6pPcf4JqExKU",
  "key3": "5vUB4H8VvqbghYUJmPpqrxFmhJ2gsnXwmfHgoQu2pK7jk6sZ19xRz2EbMF6UZjfWna8eLkoWS6FEhszb6WU3Prcc",
  "key4": "4xyahpM6N7HJSVJLUjU23Ry7DTj7BcFXdz5XQjmUFLCkxYpG14PHmucJXNWcEy4asmZsSpWaSy3SEVP27bXVfPjS",
  "key5": "53zv4jHKR5Ku6PqwbCxeBQEskphmKDCGy8hr3oWefABY1WDiEQMx6KcSDeRWUphUJHuEKkdtLioYJcSY15xmGh9f",
  "key6": "WBAEz7ePgoFy7CqnEyNqN5J3SNFcj29v7x8g4BQAfT6tqXwJ5eceg6xSNyFsbtXWBExhazKDErCvkWUJ2UEjGsp",
  "key7": "dpEf1hXmychh9a89q5Jq8nk59VA7rNJoeQ18e5ztrjVmGBSuYzHTcGRN1ZcqMhkyXEFeMc6tiDJJNng4WP5Hsod",
  "key8": "huMymmen4PHGCks7XjBNLQStthebP1DUMXFXywpKGm3VCD1qCR3giDejTYKj7v6G9f3vdkezH7wLGVAErES9CfZ",
  "key9": "oktp8iHLzAbj7JK5v6Kne2WYLqxgnUFMEDgJK8RGYaqZjgSEcajuNvyYcXbrNUtGXLXPuetN1fVxkD2NdSxPuq9",
  "key10": "W7ZSEt8bavptvU13t7UYQmr7b64qkYhzM5KVtWqumUzyYC9wu14FY9JEr4vhoXbXHcyhW53XF2AJ3x596YGGsbE",
  "key11": "911RnTcpNGntoq78goW2EEGwexJmZCSh9c74qbkW2NpLzB9i4avBqwUfKGhr2Y1N1betspYEWtE9EPoipHW8ecE",
  "key12": "3PMJ3kX8hC7CP5LLJJNjPwk6Qvva5fwDXkqjSKwsJq9cVP8rbVfF4KrHja3nDKjdbBPieTKNLVyrThmbLTwJGWgX",
  "key13": "45qk9cLfbANzdgNtg2MzTJXnojLp2LQrJLQ9Zejdx9K48FdJ55gm63woCgTmHrPqh9m5wtZDUGyZ8h3aNjwCdY8f",
  "key14": "2M2EemBM1YaqFhtXsgBGAkBgu1Meq7f4ArnWPLtFPXrxUvzXkNSUa7JePojnF3gqjjM2mkNmoQSvjd2upBjqZ9vr",
  "key15": "58vzDa8qeKDbih5R5f4Ss3Czk9uZZe2jZkNJ251P6xhX1jK98QuDiNzfggcrPQthAUbqEdfimomwNwrgHKDHCikF",
  "key16": "4bjR88N3cinzh4dyU79SQdCLghPqoRgLTMJdZN3TADcLifHRLTeBjWA8uSd7rWNHrTcZm59rH2RuhDi7CSHVaTsu",
  "key17": "rootQjjgSNrf5k3rRT56qw9819tqALtzekSZhAgArv38r7Su4TgMtMSTEGWfwRdz83oo1zKfTFSTxgLXgHQaRok",
  "key18": "5eQ8e2SctnV89suzptsyQPicH7d1okjQPQVrSHpwBnXMm6EtgzUMUqoxjNQHSmKFEDbYqLDjr3NkQnURgJ9KpVa",
  "key19": "4xzCU46BPodq1Mubpy9x9XEoHDX9AmV3mbif253iHue71HPNFbNVuqDC8xYMFKdjgfQF1Gvd8seMtarAVy6C5zyt",
  "key20": "5qZ1PUMuK3na7kpwssD24S2rbWKf8osPmfL47XqDKPUKKVJmEH2Lvr3HAttg5QxJhdLs8TdwfitA22ULmsRbxeYr",
  "key21": "oNkh6Dn8fkEXrEpB7NL8GsX94bV5xpTyS5ke9RW2Lt6oPepvjsj2GyZW23MchGChWPgCdgo1pG3iTiuWZZhsCFU",
  "key22": "5hG29LXmgp8dQXhvyeNXxRDRrSiEwBg7yFgLtF9L1fE4zTs2azWVVfXf1Yf2PaaGLnaWzat2MP71kexqX92PcbZE",
  "key23": "aogtE2wqZHVdLGrZjkNB4SGgEp3LHxnQiTkcgXFJvAx1cLFJA6BW2RR27SHuCeVeHCNX5FpYS57vVYe1Cv4HMhe",
  "key24": "4Yu67BKNQpYyRPN8RYRzeMPWvwhTAYYRM449N2REgb2TmwYPfNiZquC6v4usPgFTeoucYK7vPaHzsGgtnP5Utauw",
  "key25": "24rGgiBMENWXWpHLQ15gFfBgwEG4ZF6n6PyjrySb7L3mnvh5GYQAFnzep6YGkUf9nZPj4Mnh5CGjWhDhzoxVBDWN",
  "key26": "51MSkqYkRMpqyTykq7m5kpJKnes4p9ixDQpPYcVpy2rpjKGkwJBPAL8FWn2fgKBmqUd8YdJtJnjU8dTrnJqJ8Seb",
  "key27": "2KyVk9KKB37AxryjZEZknjQ6uc5jm4fDadaLbFgfV7Bek3TrcjX4eYEodA5YDnmrC2dv4AvxKFFiTDhste1YXdni",
  "key28": "2xfC82fEEGwwoVifBXbXtKVbBURXdfufC5WDUqpnU2vR4pFh7ruvnhf26Vf2HzupLSaMPH3NcUzVAJTFeeFPhdy3"
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
