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
    "3ALX68mETpezeygT1B6X8AL9xuPbXyabE2T5sCjiipd66CjSs3dMiKSwYojXh7Ju7QDf9TKn3kd5y7zomcHyvTEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCFdxHv7Su6Z4E1371ag6ptNV9931XNr9sQbtwSRiBJTsvW76upHZxkAVmzwbhMdSgDQGs4mPZBfGsqymCCyy3B",
  "key1": "3kJhDspsUGU4KAjaqeQq4z1N9naP5TriGT6V9L22YjfBNJC6ZrrhxCy5XmUhRTtwpogCBNwonNWuV1fRoZJDvvk2",
  "key2": "2MnGSConVy5eaitKe5h1umrjLf8Rj2ZURPSdKiMDMrU1GALuqcWSQUDsNK4VzeT5o7dokoFF1gPgxggfgjvVrBHA",
  "key3": "5a9pST5zKXTX3ezM8ysH4piWKu5jiks4huZWeCHUZXcrntnMuch1LqSC12NJCEXAKAF1Th69622iEt4PnnB59nUh",
  "key4": "4nQppdenkpBykzMCT8gYZd2aNdYd36FCzZqxvRbFQddSdMmv5gyF7FDePFpUYdLwHuuFuPriHS3MgtW595dFrbwM",
  "key5": "2bvx9vPuyR8eJpSLPfVuZtFE5BwPGuwJCdTbwY2RGvuC2r13UFH3gPdfsoUaYGdFn5f6GsTa9AmB2BgNiUUe5HAF",
  "key6": "2B6zLfDj4JaG378VK2zZGYTRfX2LWWhBiznG5h8jJjKRGHN7evjHBW1JC5ChXE5bAaGHZcDgoBc9gstNHYDPRF1G",
  "key7": "GuLTb1w2X3Pj2w2RHyQMUghChy6TTYRysPNMd5sM2ohcTXdEX7kDKAuPtPTKzt8NorSKeoaEYbo935C71F2TbmD",
  "key8": "4Yf2j4C4wWKQXi2nXDbgyEMT5zbnYxDjatFBstqHtWEaoCnZQCW9RR9ugfHRkMf3Df5AX3RLpsNioYU6keWC6oP9",
  "key9": "4Utu13yfsnEJcmziG9rzjmTsjhzWvp3nrzKVxw2CFeeNbKh7xR9xZER7ND59yCq3xAck4oJzoF981bMjCUgHbnyK",
  "key10": "3vthwBvQb4zc5SDk1AxKwaXYUbChRipJj9X67voiBma2qLBM6fvqqmd1cnJBqRws9Fj8FvELVy6UQTxrMcRGixeh",
  "key11": "5XFUts9j8CdKWwVtmCf5s6Zh5fc7dgRqtWXA6E5sqPKzb8sYMWe6tn5D5jFtESpbKYCQmedxTMmgRxyWFeU4tay5",
  "key12": "4iGg7sjskh6ug2Qk32pzsjieg4zPZLrQqx9piL9ioDjb5TXetCEvLvRBfunKo7awa9rokPZJfMNNcmmjUtmoPucA",
  "key13": "TLZNXwNvxhKNKu1Papk3nJrukBP8abYXArpSvET6T9nvYYCtMpL2qfpybUYwesBTBz6YJVSnY2eXRe9YRRcS5LY",
  "key14": "5xoLFQJRwyn2nTidKQwjAiw6v6oB8K8gU2rEpecSb3axbRoVEnwDoTRq7qpsfCvWTg5yHveVm5aKP3jGtVZ1BfGZ",
  "key15": "4sp4FAm3eVHR98L9mcZTRQeGrRKwAsrsMZSsxjRc5Ptawun5cxCe7mUK3ZTCeepVVDj9JUDaQxqrV5gGSWPHLDze",
  "key16": "3gMdtL6Xw4XnCxm3xvvFafFdBzZNa8uiCA9cLNiy2aakSMmgnuSQAAiNCSZfJS82mnKfvMgUyPWNaXQ7rKg12wem",
  "key17": "EpBUNBacmnnHSjhWKnhKCP3HpK8rYiVtoVDTqNvhHExSYK3GSBwvdHzS5FRwXgSdubrHXmWZUVxhCcrPvvVKy7r",
  "key18": "zwaXCJKFKisuAUYCzk83tuGFcLgTub7Egah83L8PsBkdyCmuMMhmpLPgCjkU5mWLukrq6qWLyWGMqwkfkPPtQiG",
  "key19": "4JnP8UHGyKiVNTB2Jb9Ri1PuBVWvyvemyzgf4HtCnGP3UDSsXNfFf9AUKU1sZWNjm6yrMEKV2vDVnhEoWr4Lb3ip",
  "key20": "3ru6y59t314ToKGvG5Fwp2kKKxQXq5e8HXjfabuRoV4Ma9Zmfc9ArvuU4qbcF9TeZ2gAW7rqKaPro7EvxoaEbukJ",
  "key21": "2FzCDnKHNKdiWeK599UYENCeRzJ5xkFVXGPC7cu46hzGk7Ch3sUeP7u41NKWTG2nZpmBYtbQGhnruFEJ3sVAAWqW",
  "key22": "2eJniZqYahEB3noXWB6bgz3uRmmbX5kQuCVFtJckSPTNVpsMpUhF2pAS3D1nA8gTtcQ18q2PSce1ZWc2wtuJ1Lh6",
  "key23": "3f9DBJqeXSj5w5r2F24oDrcmu3P4WTVGgQLDoLCRKLginnzNu3g5vbqbqbx5fAf1QeW2vFQEYwzU5RjYdMN3BqMH",
  "key24": "2hkeprgMXBo8xnRvw45mEDuAaG7HMBqdM6vqTg4pm8C9UCK3SbFUYD6n2LqGSSyJohCC2WcN3qH2BFfTPBHpjpCU",
  "key25": "4tNmwHpGcmPqQgztkSTTd7cS293KoM26VBwgH1kj4vzqBS1aLTbHzPQKHAU3oi2VMXiogGJWGZPxBzqkLpQQ5RiQ",
  "key26": "3SefpNAjFWocbdXUieysuvntgPsosg2b8zEk34V3WPCCLRKuSyrBh32T8ym5U4igwuQhejHDiS8F4McqQuTKGRvf",
  "key27": "4VzDeZCFtkHfPQ3sDF5GVEbTVYyZuGJUuqbbcWKfXVqKB7WNKqmcKxY9VwwEWUDi9RbWhV6KFu4B6gNqiBiW1e93"
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
