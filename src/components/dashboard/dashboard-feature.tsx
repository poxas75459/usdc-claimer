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
    "5b59ZN4rNRmCqcvwZHkdQVfQ69XZnGkA65pz5UNWN3ejkyy2VcUEfFQ7L39mAeRiBAyBfj1KKqXTU7cxDT3qF3Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DMwmYnfF82cN5SfEU7H8vwCoRCUANKtRhEwFofrdKFqMWgWdWQpGMXy71pTzSzg3cxDwsM2MBJrdsPyM8CK5G6H",
  "key1": "4Pmtn8aw4oX4QVuw3bZLwGuFvrTi5MPnEBjxMnRbqDkieRKGzdqcaN5Kbn7GPHXHeqcKESE8ot6Lw5Es2PhDTLyU",
  "key2": "2J67mgCaa2HjMqdy4jkMqCcsBVNEUHi16oV1mMyVL3Xc7Y8k2vrZZnTWimZZFQfZdM9uHhdsuDGuveF33P2uD5xD",
  "key3": "3FfoTaoyyZVEzuTg95aZBtCkfXDaMvNxkFxgUuBQQRVHiVkmgLMQAmJxRH8F22LZgjHYdpr2SkjnaWje2WAC2zNT",
  "key4": "4jQeXbxNFfyMEsBn98ZCza6zgSehiiKo74J8WkJoH7aweEfVrgxUEowjf1w45iLczGiJTUiiZJx4M8dpWsc5iopQ",
  "key5": "27KduwjMJjDibwcKorfnoHwbdXvSVwb9cqLmSAtFzZ9Bo1nKaiDiDN8VoaTWjZ57jbpouTGTF7K1P9U9Z1idWryt",
  "key6": "2NHzjmqhs49wFS1MNAGkwwS4mETNbCfPZPPDXSrSwKN5tCwvnGDGT2DayE7wev6LQfb5MrvNmr96oYuwUrSZtAJW",
  "key7": "3BssMEoeoLY9mWyUeJtnktboXRzSdSghkmJoiVT5xJX6Toe6WMk7Y16eGBhFgNAP5Z9Ai8dL3RwGJU4hdBzdFKMU",
  "key8": "3A7gxEsYrX4WL8hQjMCKKAv8Z1c367JXkWkN6BYAVgR2iapQvvQvYaXVZkZMrzPomMcXgTPHvtvaHUS8L5gXHUSi",
  "key9": "2VUcckqjxAoCUwYcpMB1cLpEUS8EupsedjvZn1C4qxfaBt5DTWoduNcxjXynbxhST24MVMnJbrrkKMydddmGRtii",
  "key10": "xpm2SiRNYeZcvexfQahXT7Vtc5UGu5B8s5snQiLpCGDCFJ9E23oHk5rf4CFecnpEAv8EUhVQ4bMJ3srgWbTuFbf",
  "key11": "c2k8PXqSA3GvGWzUKFCFyJmYvbikYVw9zCzsr1SrVmHhWcdzMyukFtVTfwp4nJac2G5cGYaCFVGf7JhPt4mr2yj",
  "key12": "4MZvcnzp16WqUVdtABHsg6EYsBnUCY4jZeYtpNxH1fpJz9H9VtpkpnNEi2tTpqNMUHkNz2GqQMMGTG4wG6JLJRVS",
  "key13": "5pDBjtZNF6ySBZmWqRWWwRKjUfYgMCRRpTyyJjmpSRNCrcM7XRv3qaf9KWRbhHWZpCWtNVva9rBoXpAvt2Xwzjsg",
  "key14": "5KNVb6DFGNdyhz5mUQkpjGE8t6xx17x16E8BATohRGrGDy3Etj1Z4aUsc67dHrMR5A4ZK8p3ZDrx8V3oi1owxkk2",
  "key15": "yyWGvqZABgS9vxJCauQxgPGv3UH6F1jtJYpYFTBMKmWmrC9MW1CyUbGgBqYCbjQ9ZbHpv4KxkdgABdL4F5HaS7x",
  "key16": "9HUNjQA9j7AYsrcrnSJHWx59ad99skz7K3deb9cGWYJaTEcJZwkvLwb3SL5g5NLmhG6UcnBMdcp627ZUTZANnt7",
  "key17": "21a1YqxwZD1yqJvgMdbgTfWfJ714WxxZ36jAmvcuMZ34Dh5WG4xwcYTFS9srdL3v8nKnwAQALWUvfZfiNBF81EST",
  "key18": "5akLuLpB9z3YKhSv6xdibUP8nKKnjuLSWWBrDFZRNGAfJAeJSF3uE6xS4yjbMDqabLbjx4gzwAtEbkxEyvK5Hkab",
  "key19": "QeZfe4QFoUs9oo7TXHQeV6zj4aoA9AEiGSwr6RbrxBg7PLtkaUXWdLkUJ91zvdWnTNoYojSErdaqngSLBDQGk1a",
  "key20": "2AhKs9oBpqaRDtcuxJ9kafuCbgnMJafznF1AZx776N54fCmzJkNTsAMcNP7Fhe4qt7zyAenBB6ZyReJ7NBUR5JEh",
  "key21": "2WVPDvUDvzv8AwwpZLRpdDqgaUV3dAz5MLwp87Y8WrWjBSiuqrAJ2Zgx9yzytmTWxpm8GdKLUX8C4RV3E2toCPKJ",
  "key22": "3AkEbwjK2SuDGepRDqCmvUDodBEoYYmbPK6v63jHUzFGrji9L5qURd2vBs2FANuuijPCNDdCsfqwMRbwiUWU4TWd",
  "key23": "NtTNCpcXasbisKRC94KGKfMLaL5TSWYnzzjU2QdTchheq2ot9eE8oNkKQYLsxR4UcKtCWM6hNZnqHJDA4iXjyat",
  "key24": "4RNyU2KoxbhaNaqsmSAfR5BN9K9QbomnmvCtXWC8HKzDmgqTiM9jFtLYXb8BW2kPS7rwTtQbsyx2CJyLx3bjaa6Y",
  "key25": "4L2YmAvdqqhaQhRzZx1UAQsXEZDZhujbUAZ74oRYQPGza1xaLh5VA3hKPoV5dfHi2GznNCrsx4dvdPLGTra3xxQy",
  "key26": "4hyNdb7TdyTkFpCtCqtHaoMGFjHexnucbYs5n4gE8ihRV6ZrAeUutSNCjUeXXBQ5FMocBDDsMu1AAxUjCJADBXnA"
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
