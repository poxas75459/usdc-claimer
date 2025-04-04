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
    "5fAGykfyaqMdWgASxCmg4NtNH3191moUSJqWyhvdYxqstMkKUxUrAwWU5cNRox6sh7USxCsJCJyq5LNfNsSJVc9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c9JB2HUSirJx2jkVm8fQE49CqpYvVJKXEFgjTWECuxUj2KWwQ39PUhdPNghGcPPmHhBTcnhVCcYhznayzVVscHc",
  "key1": "5iCSn98stFwv17hxDjyLinRkEVfkgrZ45VLWyB8dLnR1wR3HuU8xP3RkWjuMs4sWW4hf4hxDea7FQy3VrnnJCnKq",
  "key2": "2ygS7Z7VHJoTYb95rqjJC7VjoK9kyZPcEePDdpF2usprWhjWzowNLgejtp59JxEgVZZ3KuT8FPr1CK8YuvCgm8Wo",
  "key3": "4CQXc6VgAmMGhYTjVU7UXA7MWZPjALmVJSenYDt8mXWSnEc1CtUp4AkvTddV3evNfyC7ydXuAURhmufjB7USZCrh",
  "key4": "4oT8M8m2n1PchU1Zv5AN8wJrBW1RbVd41XVxhRo8TbhNUe37VJLgeQJqi3SJiiRKVDGunUCmap9EUQ1pz5RGMGHf",
  "key5": "3MawYjLwZHGz2eNE2u17znqXGi8phvSjcwMkziBfHeNyA4Dw4bhUz2cHF8xmJ37CjaKtJhMTt7wmEHAVRQtovkF7",
  "key6": "5KzyLaypSPFTew84fkpfLjHCHmHqcaZLDTRf3ivmdv1Z89asywzXyCKNei2SMJtgqThZeKxWm1hwKFFFWP8hBdDh",
  "key7": "4EoZtxihCYYdREzn2wxGGfCfoXpmLyRs4avQ1JNFxYC2H1XGoxiAtWAWXvmwzbzjn2Vc4FeniGYkCfDUFQPf8YWY",
  "key8": "3AWMa8tn5QzUa4atg16ncgwoqSnr4A8hfebJgTzqRPxbvbzv6gjCAr3Div4Ex6Xw4f28T7NUqGyNSsrsf9gdmoNb",
  "key9": "2WzsLD1yfofKVWgC15wTYzAZFB7c2T1wL52WrfNKRpmeStEFoJpN6PtkbTv3cUgCTm9x9dRxj7MVA6rhTAvjURyZ",
  "key10": "5ArrHTGbK2Bndtv71AUkjMbi45x7hQwyHM9Tkgk7sKuGy9L1M6B37KJ9raUMvUbZUN23v76xBR3tJTwTGdcX32kW",
  "key11": "4xSTHPj7bf991CLekz8qPVPTuHDvaqewFthn2cvdQTot8PhEPzTirQcnQomhNzfJA3W19Bdnw1JJmYohUhUCKMRS",
  "key12": "rcVRxgb8hfVYLW1LUsa7YDub1b2M1XwAdxWME3ET3KPJjxXNAA62mS3kLGhwsdXTwAyaoUZRdqrmwXkykUjjxrn",
  "key13": "4PvQRTk2GEEBwggEZr6J7SQ2xQWsnKbRyX53SNxsuXqbcXh6ZYDLuodVDdxkuLzDJNCzCRTJUV1fCjVo2uN9iSYA",
  "key14": "y1VpHaesAkUyZAZqnNZ7uu2MPdkh9VmnqdrMk325uv89Rrs5N3nV1uj84Bok4Cmx881Xy56ZJJwby1S5uy3mF8A",
  "key15": "3S82wGEsPo8U3LFUWRQxJ7grN37j9gJL8m1LVo7JKMg8UzU1Cp9z7NqRfEB9bEd2NTtzKEeNXzaFTQmu3KyuEUi1",
  "key16": "5QVZsLGA8PhYoaJ9cMEDBuxGQGJHTha8CdLfE2oJ58jYZB4wochqXs9Q1aLrGTogiyu5wNXcWrJw6kCjC212Cr7E",
  "key17": "2Q9nuGPRJjxagxkT6MryiVyuZm7YUmoCC5prbVD6XXekmGbTjxcgQvsej6fGUopxDWKGjrovfkrqdE9cPmkK7Kb6",
  "key18": "nEmtfNAmSRT6yonkKF1NZdvJWeRfyS1HTJG3CBGs8GHgXUL9FCDra848aCvuWumvxT6EjTvaKgpmY4n3wBLg1q9",
  "key19": "64Y7Yf46FNTM9tgPmVVxKeQGWj9Aa4teQazuD6Gkdchxq3FWhDwjGZCc5AtZKztaLpM3AWkTswjrc44efxchk5A1",
  "key20": "YBsZ79vvQjiF7xftsNsHsix4pvCBzNDLtiy272yhpMKq3X713uFDq5NUy9SQWLbhNJmfAU9FECC4HAmEMaUszbE",
  "key21": "632jmoxVB4GBBa5ZVLa1pMcqet3uQKoDTifxsL8v4pu8wxXnaA1jsoJVooc9KcfbF3ydnwPZSHMYyBH99gqYjpaF",
  "key22": "2J6ms11TwA5RCwqUFPu2Qe2A6LLozkrb5LwPfodyashbPotCDudCPmYJTk8hDaHFGtddbkyBis5MSL9Tr65Ghj3V",
  "key23": "FAxpDYBVm9TwFC1tetAJJVsiGaAPh5gKx8S1JHvfhzDa13LCcVfPPFY7yCX85Vkhw3Br7GnGHiyWJhEt7ApRxbc",
  "key24": "2NEsHGcRNMmhAxVTPsqZMzdb96jZbvDTwWXvnrgAASyqACzJ6KTwUYtvUHfbbHAyCCinav7xofh9di8xBMZtfJNc",
  "key25": "2bFPTZ1bC9gryB51gin5dS3SFJTMosHKy6AQCxbuPQjB48MUfNN1z7sYxbvTz8ae7BWuWtiAKq6mfG9Bgxqnu7Lk",
  "key26": "5JQd2Mb5n4dQko7n4rRFwF6j5n3nUqopNCHtn4nipn6bCgNeV5qfw9EbvVYgT7GMFwCazaNpY8ghgeVQzkrey1Gj",
  "key27": "hsf1Ymx6F6doGXXt5tHPNCbBkcecu3LJ9NctyRtirphgm4NCJKUabMPasjAJNoL5MvUnemvNH9EgtUbki9dcqnk",
  "key28": "5PmgyDrZe8ySyBThPSbrYp4JeZwjSgz7NkNY2acv9RFRWWNPeVETWMRSPFHiuwgzwqwCJXz4HkRQcWvFj2Tdh41a",
  "key29": "4fVtGCG9ZjCeNRavbVDoEk9ZsUoeminDHJGf4SxdgMtUQVSsVsuKaCvdri9TWwX4vtah1rvYzxAHcoXWTQ35vNuz",
  "key30": "2HA1JDh32bozf2VTnidEJ2joeXZXvPnxGm3bU369bbmk76ZGaFdEamVw1CTAioy3XHLBcXta3KyDcWtitB8ip9kV",
  "key31": "4ZdJQ9etwDPkD9hbaMXXv1GSdrZiaPjmCtMVC9uBbngUqgmmfvvPSwP4LsxZsAwHKe8WBtWsLztNCJHPATyALJoH",
  "key32": "3Y7Mhq12G43xVJrrXpnfJayuLP1uxN7sYhGbVoN41MHTDtqZspsQCAevpfKEuHLAk2DqiWN1k1NiBj6mypBeC9yE",
  "key33": "5uJUYBKJf2fXgBwHAmGgPJfg9NRTde3yCxXKWBSDXMVrAsCSWRX25fCmUf3pGJZLYKi2YkpmdAMqVqpoBvXX9j2m",
  "key34": "3MCNhhSCVvYVd2vkVNJh4F2z5y9v8v68h1CoX8bRyrL9YsE9kgdWh6hWALohdpKr5UVsxpEB61p8nQrpHbDC78vW",
  "key35": "3QpzTL1ujZtqGgibHZhwMWjaqF4mAC38mpcH86y1WgcKWSRLFRvpr5AJ2o45n9VGPijSgxrxomE8QToofHdBjo6p",
  "key36": "4sV52fVfH9UiD4sa7QXfnURMHRgVXGcNjoZeeRT12ExDMw85mnPz6TdQjXSDnfHPhuNk4pvkU1cyNoi6F7Fk9MA7",
  "key37": "2NdU9diWz2AB136a2UehT83xjU9p61Yg66kxgcnSsfLp2QizzkrW2Bh2Rb9FK13NB42TcSUdgRQ9Bjd65jj7DnRc",
  "key38": "wnt3X3YVFas8pykqQdXHrNFayEVpnMVVv8G1UeUGxK56s2pq2L5RQCGebFRscfdbyb7HXHa6A9R4jFpHmTRe6mt",
  "key39": "3vJZ7AkGSYy4vqjkMPzpt5o6QVtcEXXixg3qefhvnHiLHR2AbRo8V19Sxg6giFZc8KE7sk5RCVD2LRrdSUMPLezj"
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
