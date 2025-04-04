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
    "2Cm16Eay4UvWReUGNLuonh5DKNDNCrF7qRiAULAmEeaquxcp1XZhdRa6SEdHbD1SSVqM1QJrxmr6dmYRv1QwbpGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4iPtYj8SLcV3JBmAMqw6cMwDNbtMwj82cp3vE9bSxsdB16Qyfv9BeCzUMBxFydgrcxQ1c5KWGLXkpNDHfYNuAM",
  "key1": "2dZG95zDpTyPgpJCqtW11Yyk1RtfvfEaiSuumjXfXWcRbnYnBj9vsdJWKqn3iWBf39awotiL3ZVyTr2cCeXiA7uL",
  "key2": "teSgwfyxM2yL3nEhp8B3r4wFBZ7HgtjTqU3oYHPZ3bf5wv9vCTGXgMvrDNZB9iZ9iiPqAcBd5zgsmtSVN5X4HUc",
  "key3": "3EiYmQViE962RD7CDzkn7WdsZAkT2nU5pSjBNhn4DW28Nse2wcpCfY7UBDeiZD6oWNdPN6ce6omrUkrf3Lq4t3U9",
  "key4": "2PXhrSCKzD6kdCyT4vtNMPJPteTXyHpA2teLzRQaSuQ9379cdM5WRpDtQfUE6fXQ54VcnaxV78GMQ8LwVmTrqXat",
  "key5": "3Y6kpTd5f94ocGKLXnfTKGHbpJKHmEDi8oF7EpqADbMMDteEvfAJzrC7CZ7AmBKnfq9ETMHANziDg9Jp28UyQcJN",
  "key6": "4BJsFrR6VKxK6xBEU1Kr4LABYhjbaPHtwcA2E8TqEZ1nZKdEGMdoFiPpEVz9aAB2bcKyd6D9EMW2WTy6Cm2PKTuD",
  "key7": "311rY5eBRhyD51EEWWhVCmokGs6psaXoXWV1JvUvvNxxK7vvF9Dp5w9vhkMEE2oDwEX4EKcZQeLDmcLcp8vaz9fQ",
  "key8": "3FJ3YDpGmt1ivt3tQX8mDJh3pyLGF47kncVNX6woy4geP7LrDPPxsCFF67fmSgRS7vxP7MH7kAHChgEYNYwj1QhZ",
  "key9": "5YZxeiyVzCkqqCNCouLtqsnJHxivSwpUFQQR7izYutH4vscEt8tiKE39uKj6ZuMpUMcYpM2NQfkZZukCkdbBuwzF",
  "key10": "C1yVh93bZKDcPR3PKg7EEqiSFd58upgFshquAnehohsLFGoPdRZ367aaqi2DUF6roGTq1h4AsvMpUxPqMfs3vaZ",
  "key11": "55Fh9E9cXAxsN32uWZ7MT1ZpG7MGPP62NVia8zLUvaFR5Yt3yqUNf3iZNwVWuVopF3gDLkYSVaqB4nGBut4hX1ew",
  "key12": "2Ju7C6L1L7xkqr3xrxvCWDoi9nWJtzxch5yCYhZQKszDcaTkvxbVvq8kpHpSGr6H419Ff54rStDyhq4WopspGD3p",
  "key13": "4CLVcnBkW6nPJRw4frouKAFiCYifXDYgJjqysbyy214NkBX5Vb3ChUUxMPyjdD1VNhgQfZF7y5HEBwEPsuyaHom4",
  "key14": "UtrkowQmS8iaoHXjLDohEKYxMDFy6iKhsdpUKrFmrpZHETKCitSJb187GwT2W7WY9t2j4rr2MAv6rCUhdvL5bxz",
  "key15": "4nGhPiBCSoCT5ERPVLALXj34bk3uyxA5RDeqCjFTBHtzmMtYCD4sN6hYyccrnUtNy64PkoJLSj3jCh5uXBaV4rp9",
  "key16": "5aeyGNcPfYtDPrLEZBB8JYtkfxZCedxD9wRDrPvDGigrFRGi9vf37NLmEQFhUeeZWGepSsqFhvW6y3gpX6N7iUZs",
  "key17": "5GDNt8mTkZ37NonMuK9xLevVmcn9gYHSmy6HqtakTwSDUQiYwCrViYb69BtdtNJob8AFw7hqRG5aE6Cr4YMDzSa3",
  "key18": "txZSdE653314z42rYQK7SocnehdhsGGCZT6b2khQ4pzz5udHdSnZ5MadTrrJHw8QDMub5iFu5zuadU2q5Tmzy5D",
  "key19": "xiG65cweH7kpRp2upxCuursfycfinHrBXQYMkwv8tRyoYDRpbVCynvkdmGMmmCXtWNMCmhpTLjMnFNEpAyyzEKd",
  "key20": "4ZCFoRTBnmBw49u7z51M26RqiAxcYXWw5XJy5MCBRrpPxYkjxN1t79z1Jt3CwcoWne9sczcdE3rq5Rr6HKozFbF5",
  "key21": "4Zexnfit9pNjpgGLdJJNJXRxRKRQZiwxcyXadYppxtyG1vncQxsGd611ZkoVmZp8D51uVeKiuxAPocECBKgcygnX",
  "key22": "oFFSwiyRPmTVqSL5jXPt3677tt2JAniDUX5LpReMnSJg4YcnsUPkEiaswPBit62PSmESkzrfp1zUmrPHS7PskQh",
  "key23": "Ge1CEjTJW8xXdNSp55ZzcwVJsXXymJGcc5Aca749MwmJeUFjMPPMWUPxJJaCSHCEubw29RtBNmy6WAy2xXWnBFC",
  "key24": "4fc4L6GujUNT9uL48J33LCumZh7c71a8doNhTL3ghb7qP6ocuAd1mHq3ttvNAfbBbnU5HyW8dqeSPSBB3YEYz1i8",
  "key25": "2DNS4yF5V1vHGyxhfVgCtBckmj6W599w9SoR6yzeQnKtcoByDuxhfhvDLVhLxK9tidMD7ZrUBYgsCjqGpmhFz6MR",
  "key26": "27WCEygwkAQUPD8P8Sqngi7ffoHTZD4uz6BLEvhBcizj24e2ZEmqXvzngiqMMaNuHeKCoNuvKqHDZU7TuS7HVBkS",
  "key27": "2zfpgL3JiL3MEBAFNkYbWEnCLqf6zAXfjokNK9Hh3FJE2U4c5BjwA4YaF7v7jkyP7sSoC7HzvgEksRRe83Z9BSQK",
  "key28": "9bv25ze6Cz6ti2phwcqrtbb8699Pg4bSfHM5Lb5AzvuKH8tRtaDtaBY7c4USvcDWWexTSxedJCRYFuq88aUTLV6"
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
