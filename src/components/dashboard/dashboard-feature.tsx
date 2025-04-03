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
    "3MfzUqLwsqNXCo3rMFiN7LwsyNekhbZB6sJAmz7a1qpjWrUTjNHWhue7XWhp8c9UsqX7A5JuinCU3KCxHcnNP3yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMiurxNLcRUjWQjYwW4F37BfSpn1936jEqEvxBEEG8Pghi5ccT43AwNv2PnLaA7WSYy7ZihwuzHyxhuCrBBzdza",
  "key1": "5v3zQ1EdE8zhYG5E7UzjNLD7Nafwd4Mu6HoE7jy7tJbbTqpMNbgHppiiv2zwsNS5AifepunHZHqA5BXYoKuZgdih",
  "key2": "5j2pAQFfjHEAYiymH7k5iuLWKDrjqS2iy2RhFZkHP1E2tRVTk4aZDeq2pmbtJRgox4EDRJg3m1poZnf7g46L14gH",
  "key3": "4Sri6XPVubSDBYCFTzbgDGesESLJGWcpu4SAnebjRPYx7sJAm5GL79pWn5i6PhjagXebgkWBQWVpk5oConjFKpun",
  "key4": "5qvQ7og88vnGzpKZaKgV2Bd9XoPDRUiBhqMWCS7wjZpM8tnLArcKhaKL2k7wutLQuYWd7qiUTz86ajaFsjoiDyEG",
  "key5": "G6CaHqUdM8QZBVTgYRRyd1fcdPh4gfwY2QCBhxejZPcQNfz3yWKwzYZPy6mm8rJ8w1AoQmAo57G68TvYBUcZnKR",
  "key6": "5FgCPZCQnnXv1sURv5qi6XogR7n9wB1QVunfJFB55KEYFyEWNTkKdqNzLdhDKWg3TxJXnXxt2J87eoeCro586JxT",
  "key7": "5KHnNJvdcDxmbtDQqsYrqyZvbGqPw1cCtfoDU33cV5AHWSUnzxhTpMVdy6RrvgNeJnnu1cEcqangDjJfyFwcUMac",
  "key8": "5hqzZ3961oqsqtJQdANLSKD4kuyv2fdTZbkqqAJBg5uCCPYnjRyyhk1sjYaCzWDHw1u6Vfg1X9H7Qic5uA9LmBL4",
  "key9": "97mrNeZdtv7bzRGXSjTu69XQPtbii9uer4QBb1ymFr54xcw3eBNR6tZLHq3Ld7eC5sv75VZetLAWM2i4nt26Pb2",
  "key10": "2e4qKcy7x1WtseETmkGMWVs4fQd2gwAiN8AjzHLrNwperD1JFxooKGWfrWcSEfxea5iRXw4jJ7E3TW4RFBxGLLZQ",
  "key11": "Q44N4znx5KpSmVaAm9PD6M2xjhkDXqpSNijdiKraxDeTSc52J2uVYSEQPP3iS24es74nvaermGaAaLBfAhsEC1w",
  "key12": "26EtVx1mG192xPb1hjqwWYYthPTXdYDtUZ32dVa7ojVdGPCyniHjF3K9bqjJH9tNuDuEhTZVsoNWYzpBNN8bEphd",
  "key13": "3y35KcSeoiSomXpREYqRNB87mmFcq6saWFEkESsnnAJHA6nmyLs27VwzDyTViTbBX6N85iwE7Fr9oDMCAoujv1w9",
  "key14": "3Px4BeanPxxSyNFZAkmR9KGgXPt3zqJabyo6DBmWzT26KAZMMUepaS4QCLKESGmaWpkgXi4YkfsgZ88nNFnCR9Fx",
  "key15": "5nMhTNGJEmngkMJr2MkszbDpgDDbWbWx8EAUtPQfCwjEYZL87CfzP2S9Hfb6kZPk55e7ue2QpHorUyjx1on1QRZ2",
  "key16": "4iQ6rJnWP5d57ZPcmboBcEQ1MojivAibnd5gA8BqLLBpA548EW9DW1a1TkAqHjti75d3qNpAiaBrdMSuT6rpJ2Cc",
  "key17": "Ug19UX2QL9zzfhgQ22LMFF77GRtc2zG6rh2FJ1VXEh85Gjt6HW4pq4pkKeTFYyQ1PZ2XhCNSVdWZFJ2VPhiMMEN",
  "key18": "2MyhU3bqdhx8mbQ9Xq7eSNMLfcxNHiL2cy5mFg4NqeBnJUjkuGBMB6dxQsGum9qdufPatU188oVXzpnqiwokFn5V",
  "key19": "4iyyHcJojf6Lvf9Y1huemBZ2gVgRAomUccGdDSugaHADHY5fmxAMYUeqbGvXmkfWqgSEfbiuTHAfsc2iKunuv7mF",
  "key20": "4ZYVvHD4oCi5SQ2h5haLeZFMpuJUwp3cCfA9oTHgrq7mbXmE7188Dws2qAwN82FceNPhGcr4LTYnRxfns4fu54VK",
  "key21": "2oLWx4AhfwNwFHoNAgxySa6ubWY5iQ6GiibpkxvaiRW67h9eJrF7JdqJ9ecKxY6haEMxNcmW7woASzmwFMYUCPkD",
  "key22": "4Mj6BJ7eZq7MaaVK22NQi6t29yfS2CrjJoxJUM2y2kFE8MJGTT7KN2CHCg2f3Qqpz8wSitA4LYQnrAP64XjmPSqv",
  "key23": "34vKR5qzW3bbmYMhwwN1qrLFJNrLbuq6ZLbqoq1spk3Yy5VdAvVjLkXXCFbqA9d1zBGaSiSUURk12UNWjp28FjEG",
  "key24": "DLyyPc27GmMk3A3rzwwFmRiHQEg5afJPW26aq9uYitKe7oZuszK3R2FnsBfauEtK1Asp7MGDwCuRr9RSCrwzzVS",
  "key25": "65dnx2MhWJBoLrqwfEqLKgNaZ6PfJKKR6zCtttNEt9VshgoR2DdM6BJN1taE8ty8MJ7NV4gctosmCM4C4Jr6bvVj",
  "key26": "25M53sPwJoMHEEn3CRBpkETyn915pT5dEWi6qqmm961Nbm9o3zLaw9cxqWdxxeu3wpXgfT2W1moy5TTPz41RvUFa",
  "key27": "3nNSyiq7AGtDrXmdeYmNqaDFUB2Whq65Vp9bVqS4QBMNcdJwx75HZgQ3W6xAnvcwXCE5xaLiseju72X69RGGA9rm",
  "key28": "2hDvJ2Bjbht1fkqhFb3gt3GBcxN3oALbKqJM1LiJ4gazCH3fwHN8WZWPRJiep6VvyVCyPTR39FfJhwsz34vSNJFM",
  "key29": "3dyfZy8ZyTph8sTyjS8jkTBSKMc7my65NmyXS8b4vVboRdm6Pj7V7KzjKNb1fZFdH7Pte6o7VeCqAJnZnxetnTqp"
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
