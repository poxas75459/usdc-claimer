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
    "d2oC7UbeeQGafcWhp1PuVPibJgTc1RHEweKLnzSYNREk3g2ipV8qFcd23WxfjM4E9jJsnZbAFhZUeNRmPAj2Vz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEMvj4XDWEMazZv2GhNhNGHaESNVZoPoS4TepSwa7FETm7K6s7UVbEi5LkkLfnWyHhrWfzPkJ9ojBaxTwJ8Pw4X",
  "key1": "47MJmYJN2pYrCAY3VT3V3JzQgwKWSX9uFv6JDAyrMZVvEAm6KU7W7SiZSgQir8uwSKKFYZ7Y9tUBbLdArEhosMLc",
  "key2": "5cqUPJX3SmxwSQ12EPARRro4Bi1HLEg5vvBZm6edAnESvAtEpAuFifkcVTxUtyrwiai2zeMe3TDzAKEUJVjtCwY3",
  "key3": "2CtUwpJuHqwThL6vJkiqeKScoe9rjf9VZmjL3jGxFfcU33j8ojyFfYW3cUEwZuuBawdvWke5PU6JQitXXnxL2Kiz",
  "key4": "47kXbwbWJk377xM7DXAr9YdRzEXyPdNBCdXZfxyLbmBnncCfetv2AYshkxLUJ6KMuL4xZSXq1i9sis1w6EpdqWT1",
  "key5": "5bBVZGs3uXqiPEcgXboQFZPJ5Yqps5xYq6D9bNF93kCnpetMHcjcqysayLHHjxQfsTj6E5VMzvXfHk22npz3UZJf",
  "key6": "31yTDoBFiEjqfr4vDVqMN6dNitqy5AbgCTUJgrsTj1pi86ANhVZGCe5yDv85sQfxj8CrrpnUs1CuPN41uw5bRDMt",
  "key7": "2r8Qqk8wa6sMYcxdqViMWnb33D2UZWCf5MgpNoBhmJwMTL5SxGcbztehcjhUGvXYStp2tCe8bPr1ha9mcnekv55c",
  "key8": "3Y1uQ3xnjnzHhY1qM7gWhvNJkkpPq4KiiXyyHini8pxLXJdC8VRC744ckpdUBdnr9JDq4USyBuita4jSoYH7r5Tk",
  "key9": "5mMGa4gyNCDPr1tSYBgz446W3EjNa5GkLUbgKdaqCrP5zWr3HZkpw1a1buL8Mruhc84VnmUtNLiQrSjhggSw4FMg",
  "key10": "2tkL3ZdLGZPWCN5J8XdRuf7YmJt3FBrXuX97wvk23AUcFh6dsH975nbekZM4wp2JyRr9TKRU2QGexseDHqkywTFj",
  "key11": "3mZx7ZUt9N3S9ZuTdbf5r8F3mWbt8F2pXCXAUpf2biNPhfWLiAAV1MXMjjnW2KB3E7CuUGyyw8gqKritw6BePvXf",
  "key12": "3KyEuo4jVtoNNpf8z5ExrCsLGjhkH7HqXENkG2wRFtRfcLSAbCSQRRHnbn2atVs5vH9WcC7BC2b261s74ENvXCgE",
  "key13": "455fVGinouGS3rb3pt82iDXDDUDu98ADEcHjnMKtaqJBb5Ljpo66GY8LUT2CJDgEB18AQtY391WBPCYGpiiBvdxe",
  "key14": "57LE3S2KxQo9b49Q4Dff8DgkHjquh8Vj5KgmZetCrQbXhcjHKhgDcUQExwMGUWW9TYNmr93bWebitgg7EvZZbLNL",
  "key15": "4zYf4LwQ8UoNE27CkRSdZ5MdbTLQAhGohwEaC1GTRS8922T3BKgHHqmK186RpV9ALjT8F6PSA2DqmDLM6qLuwUay",
  "key16": "3wEnRLyGG1bc2xginvVWw6fUDUwdT1WZ5HT8QLRKYH9SCyTUYZcPoLrqL85JL24SRYS9q1ohmmw38SjXg9DHx1zU",
  "key17": "3AKbfX5d79T31tQLb3cQWkYYBsC98DWqVXzbWvzLoAwQyH3UJBRymdeMBT6SGDxqAqgUCvXzrEGfijcYQYYAeBF5",
  "key18": "fHt3bk389BcbEjUn787iFHiVb6kTBs8DUH9spAGdMbaWtHQUBziaVX1Rp8CpLdxiSeDdPj1qCMvshjhyj27KR5r",
  "key19": "4UhQ5Z1e8Dx4dzbjKRriQasQeG3eph7zZ6XCPkVAg5D3EXunpfRdxJUy9Gbj5XxxCg5AeHHPMNKeAwoJU7H3Ssi4",
  "key20": "51sjCP9xnberpp9UQHVZRetVtCj4ffdQkYfgXXDpaTUM4gz68wUN3oqi8jzzdYJvhe4rhhwxc3gBMRFCKbBN7Qs2",
  "key21": "M8b6YcJ8k3VV3mGEYssRbe7rxWfsZGxUaPuEGsSP9SuVfXuW4Xn1tcLpsXn982dSNpr7m9YezbELTCN4zqg7GUr",
  "key22": "2ipZahm2VSYXt5bxMhnGDJKLd9RnQdDDSsFVLAg7QHPCm5cNJPE1sxoy6mpomHMgdyosvWc3kjQ1b7AqrnyzGHVL",
  "key23": "3EBBfNoPAHYnVEWuG8Xk2qL53DnrS5EXxGT1rzwVweXgnLVroKnhhBzf6WJHFXaEtHnkSt1EjsM4jh2U4obT1vzZ",
  "key24": "55V7BJ2eYarVhPKubwR97CYRaHuVGzKkH7ZNkayA5ydhJHAUsrWeWgqYYESc73PapLAypQKpgzHNZrz6tydepVCu",
  "key25": "e6fQQGUPSG1nifmoQxz5KgNiGsR8C3rzSrZhfanDo1Jhi2yGcvaCvg4XHVcffHjesgBAgFKmdoJ2R1gY69c6DYB",
  "key26": "5qMHyfxCMXmwtT79Loj5Sr3AC5MjeiN4mE72GGazPuc1tixiCBdw8m9BApZiZAWuEKJC6Pk3a5hR2qzoYqwQULA3"
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
