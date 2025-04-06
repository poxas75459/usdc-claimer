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
    "7XyKdfhyiujXqKzXPbzq4WpWQHHJGgbFbUhxbj3vAXz7Fu9mrfN24w8ebMBcGXQ4WJreQFypZK865nTneZpCD76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scH3PkcSpiVLxMATY5V4A76RHpx6FZCDhsomXheLXH2RA6Yqhuxxd7yGkEUwhLc2CAdeWG2uxR2jPFZw6XBTb5V",
  "key1": "5gncw8FdgkgUCDJTG7a5M7WrkMr7iFdx88uR4U2U7Fj7ravpTNR7saSfB1GGU3Wg1AcRWZfiUs23nJuVhXw8oeqz",
  "key2": "5gFCz4Z8N9MCbkUoEAj2n4Bmob8kwinftkXemPgcKeaRgTtkTS3nqTS5941FrtDxmJVVkCdFzxwFRaX5ytHG7q72",
  "key3": "5B2wRXHUiinpi5dV9ZsWV8Cjc3pGcAYaukVUu9A3fJMLAv6DNMinTakQ7rxjCdh5xhg3rq7MmfSG6t8naUAu9Tm1",
  "key4": "2dQzs9qk4v6rKB2ReFENvqHL3cWeHastd2Y4Kkf9bAcHRFo5FnZSZ95ZLFGC3vhxz8KAD59dtcpqhryvxhkvcf2x",
  "key5": "4rnzX9gzsDUz19WG1qkWyqPxk7UNa66WAfoH1nKtZUxX2Nq1BT9FNZWTrwMp8iZ8SFsb3Xjc4vTWQexA8vSRpwBX",
  "key6": "4ikuBEKYgQmeccYnFZcXwFNbcRchEKjAtv9Z7SxWwiuH2gicGvtxGQBsaVi8fpttBdZdB5yTidawDJv4EV1fWsB3",
  "key7": "5hDk5UVVG6L2n7bpm7r5UCWnpdUWwiaKm3SJzLJLSEhB12CAqEmBCatk9sAJbiFvr8yYdKk1yuNWyMzmwP1ccbpC",
  "key8": "5BcS76P27r6TNahhHhgXq9x2KvGgSH9hSMRHizp4ee66gHAQxrStbNaWL79BGcva6r9UQmNXZLroUdCNEgfovwYE",
  "key9": "KuqxSg1EERXMySbM4kBKheRNbf4UTsMZRsR1jYoguh7trE9PKrBNniPRq6UPNFhkxmKfJC5P5MEMjYDR8QijArF",
  "key10": "2gaYRGSY3FFFZytqFum9o1LDkMLW1qGKFgSn2gChUV3f4mmfT6N5CV72unhUCDa9LPgfA5V5Mu6sNMcRL3xzhCy2",
  "key11": "2SUQK3nNVKUf2sL3FVVbY3rnxzRyX95QyfZcXttrEM8oLUdKEu86NQ636XpmHptVEVVL24wYwHQsCx1WMnWAiZzT",
  "key12": "3dC246W3fATegN6RoWnzQpNRhGUeB36fmb3UcrEper5srXCWHywvbm3ukgK5x3ojkxakRoBRS7LYynYCAb4Kuvim",
  "key13": "D2HR3mmdGuAUdH5UpiBSESjhsxbCSgHnz4KsDQTLbck6juHNqWxSCu9mqhMp6Nr4ciLh3DS1VjWWXGeExdqs9zP",
  "key14": "35aBQQeoB8FWQnTNTP2t6B5a49A6kN3x6JpWNHhnyDd6rSibcAzRdM6YtVphtZ7MTsrFcK7exMAZPNypwnHPCVQu",
  "key15": "4Zcz8ZhUBzW5dGkKdyxium74P56fBtC7t1RZSL69DVUWrN6hRusE55Wj88JKFXUjdmdYKqLcTchhZse5KN5KMu8T",
  "key16": "3MfnaWU6hKVG324D7FnRa98ekhS4ojaTQQsvLWLFyCzNniesfSdAG5ANCGEKFdyhgj16uGX8ZbqKEQdm7ErUt1bZ",
  "key17": "8FF7n6T24cKZVFwuYRPw2rG62S2VYs1qKWrzED7RRLknTgdWZyZCKAVbZ6HhtiARZ2wuNit1NBLo9EKuNaybF3P",
  "key18": "3pH59X9xXUdUub3KPW7SS3SQVVD6QKE2RZ2j3ez78NRyjBNY4XjddW151TewXTGhX76q64V9LMdU8Cwd9LuXHk5D",
  "key19": "2tC57cUbFf7DW5e79V1GVfr2Dty35mJTrutWkubeiTTmbGc9HndKrEGGCfm2AyFuVXG8Xo9GCVG9wGJjjmiNQVJ3",
  "key20": "581hphK6U7yZue7Nc2vqtPccofyV411p9TDN8ezuoKGAKUz2mk8NzjNh4Ryz1umszvXguzKeNmQvpncptSsXE3eq",
  "key21": "UVuimVoh1yZZXHEGAEpoXncZLUx7kXWyPdBdeEpVbU9vcpt6jLsrmxQQbXXm9D5my4pVCdb9SDxrxxW7xeruDRQ",
  "key22": "5ANSfPAB9y7XYWNwpqs421L2vMX3rprWecDktaRkm59v3ketpdSPQsmxy4mSFFNkScgP4DCq2HuGHTqyT8zkRzG5",
  "key23": "3vX7Yy3pSVJS8LBhTrbBuUsMsvvRN96ecKBXLPN2xoF5gMFwdMimG9DDqKUeLowwk2MCfSYrSs5Na8wmSsV47Smj",
  "key24": "5n3G6in6BrMTErmm9btaPjzPYrbcbjVFnPzWWodABbiZvmkGREiSWWEBhvyCZjduS9s54RwNDPMerK8CBLNenp38",
  "key25": "5TuTWoG4uw9Lr3VzGP75ujstETbCqxXCW6Q6erMxC8RJCypjZtYcsPDAdvRfgb5bQFJwo15EmcCVRT7ihMXmVuXx",
  "key26": "5Nj8Pk6ohNoZ3FvMN4TUbvaUscMVLgKhEzYZP5LjoaL2Yd9jPxijhPa1A2mtnZBiZmhfBEzj3hijptdsmyPfrnEk",
  "key27": "2Vook2aRseD1Xmw99AKK98HM5zbXWxKactin6cn6ETA54aTocwrYVcieu7WSR6QTy8nwLRqiFJLLxd1c2yRL4JtD"
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
