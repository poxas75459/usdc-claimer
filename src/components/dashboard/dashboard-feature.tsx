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
    "yurCjCixWqVNjt4EN3U7ybh9UEi9ukSjxZhsRQSz4JKeRM7pecizRKcEhiSp5s4Nd4JpbBq8xdgWDK9M4dCfvyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341GFA3eJGptujk6W9oPqbWmp9Ns46HnK8rarKV2v9ryRwjVErqBEcSB6wqgGqba8ECRov2J6u7KAWkoGmZNTjNy",
  "key1": "pTwzm1qoDM7J5v2QPXYoHKWGXbpPPefu4fjtLiDw7BFi5EGBRK9RGdYkks4dBkM7YBTmSaHbKkLmeKh6sd9Xyvp",
  "key2": "2V4wmJ7j6rXmR3gadcyWa9K1yTvjQc3rF9VX9RTZydhaBEbUaNZTyUsbXTbgL6oaiwQTVq26j7KaJaAQP7zJLBc5",
  "key3": "3jUU9YeBs67Kk5F92fpFdkhsmgNUzBAxC3p49mJyd791zLmxuC9raD3o2p6zV5GCwwFp6xZeWabEjohCL7ZUdZ3r",
  "key4": "2yA2uKYzsg1RqTV1sasvGwgxpJ8BQvHEXTLsFpM69X4QGWaR7DzwMTDUmpr5w9mfvb6FrTzkJovEbcfnVjNidejr",
  "key5": "4QE2ADYzmWSy7a3ByDFdZdgc994dGdHhD6BTj7Z4Zb6wjNkeTrxkJbJ9pi6qVc266rmJUuVbanPqEY1YMDCcun5a",
  "key6": "4nF62Uwhqo3xq7soJLsuixkzAFqvVmuM1hjQ3SsnBBZnZshAjWncHDPzG2sunQzCDA8rXfv3Yf3UbdMgABVD4xRY",
  "key7": "66HXKJkmDGJuzKDPZ171vF2MXAYUKmaHXUTn7CcZpCDfPZWvPiSSjbLH3iMTZtKDCjm4kp86CmSNuHCFckuNYaLt",
  "key8": "652dvSdLwSMoCH5z8mpQekBGAkZBc8zL6C7DddyzL44b7oPow3k79UUTikYHGnodDVpriZSuDaTNPiAENuTY8ZZ1",
  "key9": "4dckbxS9rtDdBX9kRVCdaFKQQKJkbPNDNxP8zUpAitJosVav9SyZsHe6itkcRuEBSMoZwZg7Lavd6ZMy3s9kdh2W",
  "key10": "4QSgTdbxEfEjWAJ9i1UfHYErRsuY4uVotWiV2hcsvZ4e4XnvaxTmga5siS5Pt3Pv3hzcP1npkNxbPK834zXqasTd",
  "key11": "41Lh6xxpHUbthkmXm6YFmtXKQGredf4ZK6UHFYxjJ2irgxAZssX9oNaz2Jxf6wPJBJC77UhQwgijqeGQ5p483ioX",
  "key12": "3yg9CeGSFDCV29bW84VvEheUd6tya87kKcbRHLVvtFvVW4F3UqFobEZQSF2FC6oZA2xRbiGYFxcm7tCkJT27b1xG",
  "key13": "nJmSg3cxeY3F1f37fBBMRdAytBTRP6J9JGoZvvXikTGKWSjK2br1HyX9AfivrPgC8qjBY5e5V3zj648yqZoxJL2",
  "key14": "4zMdj7TfGMD3g2feydRpzP6AtQrWaVRT75F6zhSLspHpbTzCCBJuK4UL7QfijU7zrLuJ1Gos3Puez7DYFT7daGiw",
  "key15": "3ritfVFdsGVE1CnkwYBt1WCrWKquAPEuVm9ytbs1CegDxWHABYwihT2CqGYxRtmwee31dFbssmeSrkfvb4UPN9pU",
  "key16": "61GSe7rde6LEKhbw3sDSeofGSANEi3kE3RTm9P1V6cfwpNwJoTobYyiKhrEBwBeUX3E6PVhSLLXSCGDTqqb1sc1m",
  "key17": "hKCgfkG5jJPZEJFDsZWmWMwB2Tjsa1zL83oUt7NQuJwi67uxPVLdDSk4Ba16UwQFJHm7EBG1SZt7ti31zUAukhu",
  "key18": "2nPMWU3Hf3jTwYMMP12cczi6dRMq4P5HEMG93txpYvkw7CsQvMhQZsJ24yqcagRPsrVunyU8uS1HiHnGWhPk2uPy",
  "key19": "3pfKz44jVESXJxCrUeAXiNGE24F3RRiRE5fJtr9Ewf5jd8vfusrjkK6HDzMMww3eE2548meDysrq152qWiM9b3Xh",
  "key20": "tMbosZEkiuCDYCE3RMwJGpSCHLyP4uZ77bhhvLEW9NaKgPhTdsrq99KyARo7quucgVTZkPSza911tpFth1jUEHS",
  "key21": "31u6qWtmqVUgqja4Q9zvABrJXp2PqqYDVPwBM5fZA3aQc825NyhNiSUMKtKSYk5yt2LCCnbYomVqmPrhaP4SEytz",
  "key22": "6D2yPooyRGTDwK3etjcNQtFdMpfnrb4devNgDNMzuyPLDraTAADqooktpxobutHLz1uUjVonDXUgbdWc8maCKnN",
  "key23": "4gy3eN7xmsMJemxJbK5gk4pZnh5BgEBJGq1Tjq7cMQ8VacA8XLbBmMmu1cmE1taWhXrx3Y5cH75zwGPLwNAQ4mev",
  "key24": "33GU6Aca26BacfFcMEWWmUVZbiZ4TvXD8CPqMEBw9VRs3BQc4mdzDvUVEHdE1PzG2hsHeZXcXxFW32XNBWDwQyds",
  "key25": "5bZQ7iySWHzEogoENgzyF9J6PMEzNvB7hu1uo5JgJ6ARZeFuBfHKQZVzbrFRB19w6UMmm6rbuRgsyfSVPoar2PA",
  "key26": "5BZtX3F75PWgjZungkLojNHnJgtLGSfuhnqGoek1CdcciGKQ1hifcw8Xnn3M5afB9eUkzjdYLju5jviERxDBxUtg"
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
