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
    "3ojfGKvkpij6cKFHUQGtV16RAKnJxjH3HRNoNiuG5oFtp6rAWoUaXhisD22uX5ahB6NbftYWbe11P7xzDSAsurQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125WDvYBYKN1quTM4HCmVG29XJ7sXpsp4VhYinsnEGMAqWmGWd3sKLuaa3CtFg17VgBwemP4rFnubWGp1v1SnXCK",
  "key1": "2rPZ1xqtSr5jtkn5jVJmNHdtAjTsUHU9Zz1E97gC3WYcPakBFaw7rWmrUbCL14ECKg8jLzDEvg6bGtNKZW7QMLk2",
  "key2": "4pmHKvAUxtmLfHCZBFHBNTX1HX8yiFwQGkVXMrqG2hEEtMtcenHbi7cqHAhptwz5BQpXifSUg61eEYhwgmdpjs7v",
  "key3": "4N7dTDDxhrWoEHa2uAztuHop3PADFub6Kw7nd7zzTuBdwh7AS1Vw89eG7P5FYgBDLBTJQo9pQdmyhyacyuivfoSY",
  "key4": "4N4HCMsvJ3X6baNtHn1hZDNY1MrUmvwroc8Zmq7u9tH7ecoNH88NvbnobE5CYq1TgHg7guHjBcGmHKfSfWWRM6wd",
  "key5": "3PyZ88m5N8pLL9motf2HFtuyVEy4Xa3gL8x2t7bmEDqPzovtj9HBhHYGQUWg8wpQ7rCuMCHgxSYpsZ7zbA4W6fpu",
  "key6": "3CmJ2PosiP7qGg39dpwmVuVauSkvxxc4Z152XbhWbfo7XRQugL23kLUrA5rTx3HNSRoKfPhA7fAvDo1jPzUUbsnV",
  "key7": "Umj9oabS3yLrMiijhL55rVePmgGJLXQovd2rqSiKNMMJgnGfz3AoxtoVLMeD3yasgEDJxnm5a4KqqJuwC1MmMCG",
  "key8": "5HNWiHE5ukdWtY8iDBUuWaejLjhCr3y5LCqoEKggYGj2sbg3Up5FnXrieCveCHB6kHMhTpS3Rj2PpE6W9WUkrMsM",
  "key9": "4b5ugAk5eF35aB5XpcidiZtVR41gbACbimWo4HhiEkLcXuZhD4FTRcuUgyPCGfNPME5yr69dDKcs8ZPHfuDWv7xg",
  "key10": "24eTgb2eqoLQwf4sc9EQmPmdWBdtpHW8tw5BLWBdcMPNLBmKUHUn9kiHzP6YaLHW1Sc8cA8W3hbf2YqPvZEDgiFf",
  "key11": "31YZXeRpk5btkXuTaSUQVo8W4hijtTB5ZNpH6DMpjLn3fXPstUy5V8nUE8djL8EUCDWjRFt8hgfaFc9Q84hj1Wpj",
  "key12": "4GtVLKnJGiFv6D1gUVUCdRBS2cKxVKvvoKQyCe8JEv7ZMGJ4EbvL2T9j9R3RSyVHPE2mpv5rp22syLiNk3rVD8KP",
  "key13": "2GwXLZT6JkS444Qv2QN4m21dc26iTv1pM7kfKgYba8Pg2CEBWbeVeUaiq5jQ78V93v7DiFkYXY6ZYAeLFDm5yW1h",
  "key14": "51dpXn63F1cmvLcWeDhThC7728F97bwVajetQ7uPNPaa5j27ibC1F3g4JyimXgnufoLJuCpuy43eAKxUKbHF5TKR",
  "key15": "f13jujzrxWDM2TYvWZep4RB2m2FcHHnDKf1kTeVNTK3PWHEKDvqkGbn8nJpAAjbpuEGKhmAjYkRZBEoieaoV34q",
  "key16": "5LQKrb4KriPULnsM5pJxvYEBWGHpdmZuWrWaQrq3vbt42xjCoXVWpQ8b6agusV6sSDLZREmtM8TbpyQ8T27y8Vdc",
  "key17": "2kAKAYwSpSWahW5jwVo7yx3y9dngFkdrV48J4ZujRCK8eQejFsA6YrX4pNugok2GGcMf3pE7sQ1PCUzmaios7u4A",
  "key18": "5A6XMa3rgrQchh4nAvRGws7GN5Ghu3KdJfoNAmiLokctuSvza2dHbPE912KyYts5ZD7aJmDgFXNDqDjqrEcu9WWT",
  "key19": "6gLvN3rQYrEFYpj5qTykE13uuYtpNmojshAMtNByiptuGqS2zB9S4z99pvqtF1zmX5SwNVerMuzPJQKe2t6YsB9",
  "key20": "2isNoXYKAQjRE5atv3Q3xij4EMN3GrxWNSPM7krMfWuhjSTzLuxAD4n5G6ZroafMdH1ExPyPdwi6xjvxmQzqe3ak",
  "key21": "3FEZkMKe7K159Zwj6s9dRi41TyywfYdF2dYueycW35LJSTRZSCNhcVZeWbxp5TTkKDRvkCiCFESqYP58nMy9Do5b",
  "key22": "3xSqZ33dgpxG4zevYTAz8LgqWCVb9ZDW1wwARCJmqnqmrZNv4x9hhuyJALsdnQtWQfKRJQt8DMdoU7QVBW9QF1XA",
  "key23": "ZYXKCroM4p6wLn9NZkzhz2P3kcKPrptYA1fLBuD8jSBqUqcbUPnwbsdCrsBqSn3jydDaWkFHchfHk11fJLFgSdV",
  "key24": "2tHwC1NM5SrfwHVWi3UPbEGfCpFYP8QPwiskghXhKm8QaQHtY2R9SSJLvvqkQ8PH1uB8rfwiWN2zaBbNPJPpnYLU"
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
