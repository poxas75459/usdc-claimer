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
    "e7rrUfjPyFbnQwqvpTE67EQQNnMUfLt38m4yzJr5YYihjwAVYjdRXkKyHUsVpMWH1BBegfeWU4Hzk2wPa82XE8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35okP6kw5hZPRYGYTtyQXWKQhaQ9iAVZ9eoLAemULgn6Hg7k1BcWgrkh1CxcabNfjdpahy1YToH3s7hsmpwseLfQ",
  "key1": "55FBdYCGHBWzT6ieh6BvgGFnJgKWUTbJbQnVjJVGLhZ8a2hEUyZYCPtQ2PryADDDWoQ7vS24ePEEZ3FoaSuK9YEw",
  "key2": "2Wud3AWuGSPWVBoowER9NtEhzdLrE8ujsS2n962AENv6iMmVaEz5DqCoJeXEBBftErf29TpJRKvL7N3tG1YFM7H2",
  "key3": "2VEiEL6zQtm3DsSQ2v4SjCbw5VAqo8kxTcC5MfTMjHSRtLdeJfNsNCZQKWNYRPYWCTyEbdFgzGYWBc17SUbFmPZi",
  "key4": "r1TcSrjgCWmpmWQ43fdyKgndY1B6ZFV3hTGLW92hESW772pUW7Xn5euz9vue6QUmp8dFSLA4TurPF5xn7mTdWgf",
  "key5": "4HEwQx9rDCbo434ntYAr2oxCY254LbzNcKhmSekokLqkVUjjrmgxTwETbUxU8taBHdvibCevy2vtSnApxekb4X4t",
  "key6": "4m1Dvhjrte7u919TrmhGCkbbfMJW3bzEFyTYmfRRZCFr7MLxjQmnNu5UsBryCcPXpEtQbWiZsDAMUhuaV8hL82V4",
  "key7": "2cRXPoE41J3YVZLjXQpAgfbeQiMTXvoBGRv2AhFFWShPwcHKLD1YcEgMGQELsUy2pJ8tnKbnar87ZMYv3RoPjaHz",
  "key8": "2SEEhpSWNoE4sxPwKSKb5Ff3E3dieGTQ93JX7MPi4BQMDjKG3vqB1VBPYWJi6C9VFWRBZDy6ednkx5KZk5S9wgMh",
  "key9": "4Zen9j2kZQ8RrHc1gEtyQWtQinvCFMAs66a9jwjPhNzjh5tCHzkryZjrmLcCLpshTdJ99P2kyADsEDJgpCepGcHt",
  "key10": "5DxkCy6oDMrQc7wdDZZ2UKE9CY2f9YijGqMdn1BA8Tk7bQ5K91aNyu6Voe98jjDQ68aVeyMhBzFZpm2Kh3cf3Kvo",
  "key11": "4vB99EZrqcX2bSm9tqarvi7wsF8qhdrLyu1JWu7NLwdswmQzrtz85nCoSdQs6yGuHULU7HM8V3Duz937r1SUbXDt",
  "key12": "3axhi5h25VUNHwE5qXH9xjsdmwsEJn5csJfafpYcB6EZf3xtKgu4RKcwtGariQr9EhW1vFAGXJajfkKrG2rQPfT2",
  "key13": "5H67gbrY7d6Vjg3QaLB2jyi2W9fh2GHFNHNwuL1bHyWRQrkjW8Wsnevb4tFSrb7fAP15KUKnx9HRAa8394n6VGp2",
  "key14": "5i9sGzM5KS1S5T1kM4ZtYrq5AREaafimjeWGMiwmXcSsqiV1B8uqR8hy6kxw4jXRBkYSzZ5CUdMZLwa2ApKTKH8s",
  "key15": "44EbdZrMJ46eHVsZf6MdpfEHaHW56FgXoT3UqoANPpMtAwrZnL5vVQyMMicEnbi4GEvzsy2Ebe6gEFSVGMSW41oQ",
  "key16": "2RwF9Q6aEK5K6wvpD9KupUqJ8FMEY4wVmF9tDRLTAWfStpQhTghLV54Nm2CUAFzNPkUVYtz4Xkiokkr7phVHkSkG",
  "key17": "3Qw6Ra1r1X7gQ9FoMpdwiyezzNg5kvtinF6wrQKBBZbrqKUUbFvjwfQQGTNDhgx7zL194L4eZ17BBKCqU74jZB35",
  "key18": "3SxRcXywC8btDgK7qKSokfmm2Snzq8jL3V3x71u5UvSDXRQkcFWJAWemF4VQgfMtUz9AwZefZSTAdHrMsB5vpcNW",
  "key19": "5keth1E4mrGsYwEZSXucbE6wp6NwtTs33AHfmFSqG34bpixa8qpVk41EApX1UBBEshhZqHYr4xKpSDd5RmS5kw2u",
  "key20": "g6HUfXoyncb38ytbT7uB3MaksAoNAQ6qwtsnbuKdyxZk6HcG9g94rfda5VtAPBCMKJSH4ws5ctKjnZMS86EJreH",
  "key21": "2hHq8oaRrZmEBSQYXAJa2gmdiDqQdV6UHYffxFouHnZwni9rYKDRZyxGTWGBf3MPcHhrfUSeRtiNV6SvHhKW8873",
  "key22": "5YFkJzkg66Zf3NVvfwnNc44heYrTp43ScBJLSER5E35SGm4fw4hYmAcxu8tXY3vFMYG4KPt2PefGd3xUeUoZbueV",
  "key23": "2fmVBMLwkyfJapi5fiM1uuH8CbdcwmbnK1pzb2FZBohF36sb4xpxHmApwVT3aQiCyoTDLWhE7vnT28tTAx2yjvPd",
  "key24": "3XG1uHdwiDXNbg7No9DMSpMAyrmf7fmbzbZVbgZPneddT8phSC1rVaXzdA2UbD3sR6Z3p9iWW2kma7KMXjnj8zwq"
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
