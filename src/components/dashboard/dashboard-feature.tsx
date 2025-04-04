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
    "4smVN9m2woPYEkmEvTrnJuLzwb5mERiH7Bm2wdkU3A6PeGihuMVKszHi195a4bmJeaojWo6fbQDsNX5pubLFqNdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGpkePh6RCj6g2mDX2pp3nGuXhuKU6DZ4y1HCESJnZJohqoMgZrczCmqitQt9gKYNTer8zdxABBapUcx14PTtRf",
  "key1": "25eogMVE3bSKM4HFk7sNM4wuVWQvKdwXgvuayX6i8dfRuCn1CLW31KWKpzZvrk2qZHBykCofgFMawFB2MUJm1zrT",
  "key2": "2H55uagwmCwhTjvn7i4Q3H5rdvG4CxswhTQFttvv3sDv3usX7bJFsLiFWVpqURKqba7sbPAtcxzZhUJzMaKojhPB",
  "key3": "2B3p6UuLifcq4F4Jr1mEMfgmx26yfeVnPQyUoqegMZY2cLCNPr9rK3b5tZYxYdF9MzZurGWn85zYMMdFVzmFVcQR",
  "key4": "3yaKaGrfB1g5AxYbVubNJ3n84PPPWAJezRz9Kij3ZyGi1C4qAtqcdWqeVXKdQx28dTDePpD18MQdYYtfGsNthN1V",
  "key5": "sSHAdi6Wi3AxfsSvN3M195ksux6ZSqcBKz6sEkdioCwgFxPVnN362vt9EzXjH2UXX5vvB787CmLTg8tCH3gPmi7",
  "key6": "dZHVadY6uqHXAPKjuP5g9SCBXuGeF4Xo52DhzJD1ewnjJmmvrc2vz68VcYgfMGwKU4RepmRQGtWhpKpWxtqD1eG",
  "key7": "22p2h1KGkq7ChcnceytcanFdKjhkKaYQdk6QFSMGbwbNBZT5zekUk8aDaV6TUAdPNvLwsDE2eHGXWxrRwhrvQfd4",
  "key8": "48dCAia3NEAgxSP8C9Ft6KYZKaUfT5eYWD1RoVRQp7cuDu3tyfvXHtgzK32AKozU1dyLoV4WPBeKWovL5NNNV6kf",
  "key9": "5ER7meaWPLGZBm2DnUXT9VK8A5hYHaKUEg8NpdQ3PBbnGwhSnTMXoEjCg6jccbTQ8gVuafuAU3Wypz3dbn7Xa5TT",
  "key10": "5d46jm8bW83xW5sr2j38VrxgLcyYw5Un3yt2RZG9u1G7E3cTVND82wZ8ox9VjnBryDegCrXwZi2Rmagg1vfu7HzP",
  "key11": "2prxUkkkcrv9P5zx73tnfYwNy1GTrksgLSNHpUzoGoVt9Ym6zebWPqhPfwiqmgUW95LYRYfzh7iR6wZCTAPH729Z",
  "key12": "5QGQxwSUdxGJhKzD7rJMDGmeiwijEzaYTGpSp1W1qQ5sJkLa5Z1DGywZ5vzxxwen59P8WfwSBgn8jx5cPmgSQUEb",
  "key13": "VLmfpbQR46JSCzJR2umGQ3d62aR8bbuYP5Yz3i3zjg9X7u5nQiUHskH5fW6SRgjz9Gia4WJTTfDYcuMwgao5j59",
  "key14": "3DPG7VudufzsVyJDhAMzcvUMbxJM7ohDGxynqnjGDZfbwyM3RxBgtPUNeYjNbAHxWPhV4bBi7HMZmtuL1G9TxePP",
  "key15": "4mzdG3HvSsZffw9Feesf2dpdXxenvuAHNq9pNBsoXFAzdmpQKVs3mq197zTqCAwVNQwFYo7PDTcbU1HvBJbRbfFx",
  "key16": "231shedZ5Do9Jtyevb4PbpCVjx9qP7bWcyYSnY6UgLBVPFGUFu6ktCVwh2nEf69VvPyGqPno3tKafFk36JW14NVs",
  "key17": "3JvpNn247Buswc1a7KbmjbgfbZ31SJNshg7Z35WjqzkuRdzLebA2EQidAhsBzLwXx8aZfy7SV8hg6jih1Rk6N1d6",
  "key18": "2beuj9mt59yvQkM48PDrT5qfvDfdovqg4oeXZaRyxZ7fzr99XRXNqbEF7jH2eYVxgirGHRA4fNzWRgLbigMYu4U2",
  "key19": "5NPF87tDEPXFoepfUEk3NxAXE7nkyBbEUeKFpHQRuN1uVF78QUUJEG75RsKrdo47ZxczA4Luvgb5fRw2qNucKigp",
  "key20": "2ziFAGnMKEXLk7ifM1PfopXJ5uYqTiFYMPay53UfyLkHuL1FmZrN8UEHUZthN4NPEjQwwXJud8zExjYg4JQFmMr2",
  "key21": "4x3sFHMqeSFyXfg7KX4dzzkvg9NkQHvW7pVTWVWww3WhxDPdSpk83B47a9pXeRi8Z26VYL1fG8jZRbHFi81BXPMy",
  "key22": "4iuYL8RwLNNmJpcHVTsfngA3kPP2VxBDftTq4m5w2XhvFxp65DkCZYJgiqVeiUXN7V5rM36G1wCc6eBTzacgHEVA",
  "key23": "5byLTHBSP6nX4c6K57n6XenMKF8keKM67vPLhFPc4KyBNgTmaW6UQUxbiVbC31PXR5hMn8XWjNqjrK9gnbWgiLhH",
  "key24": "62g7gW7PrHF4GnDS72YxY4xaSAhcTk7sQcJoT3CdpWwMuEz8iXc4YmYubqyYx8LKbWgM9EtrUUAQFTabppzsRLjE"
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
