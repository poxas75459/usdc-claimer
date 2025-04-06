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
    "5bsxvS19NCTjf5hiXgQNtS9NkvS849nFvsHjTwXZhHuZS77gyxon3U529io1wq1HS5XwCjy3xYQU7aJ33VrTzTT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dkgj2vbGj9nihPmdxiPN4DiRx2RCGNqKFUxVjZyWkeEjJhceD8pEftrzfjjJDyTrWkGind14hNmrx69WZwkd2ap",
  "key1": "5tDUD6nvqvGEoiBnr2d5CCUQ5SGhRKheANnpfhxf6NNm3qybqj6rX2Tk713oiu7EnUpc6DPkTBdkwnqZmuFyR9Ey",
  "key2": "mXDwH2ie6NWVEMGkmiVf8NcsLDBFQP1jkeqU319GzcYwRqzbqBDNecEpM1EWBu6AFpKycyUDbwbcdrUDiFJDmb1",
  "key3": "3PpN5BtEvhJtRikKp7S4q2D1PcmKnHfJ9jZrW6VjXQitLNGKUmzjqJRLmCXFwD6HRngJZ9V5FVoALmvL89B1YgHr",
  "key4": "27GAPK5irQXzaGuBvYtu2EhK3gwWSdcQMdGyn3kHavi6gcaMZWQiwxM63R3UqwDacC8wvKrhTBYX8hBkwZse81si",
  "key5": "43FstWYgvdcN1ZwWswvCEsdb8gQBiR6sutwMuXggPxfxbGZo9tyJycbMLLrXp6Se6ovwJNUiAbPWrXTHz6Ax7kaJ",
  "key6": "v9bVQNg2ktq97UZbLEueDvnid92H53SbbcYcmhopSdk6KwBjd6KxPRMhPynr2y7N3Dh8BbiSbnxT26Z2VXy2iQc",
  "key7": "5DVW4VwUbjbCRPs3ryDKB7X5f7n9D28dKW4pcQk9iRjKeDc5JwTDMBwqtXYUjpsNKV8zYn7ESodigTNUmsa5x71Q",
  "key8": "5TPGF8Vj1ZasDE3JbYWHsN1ywbB6ohnmk9kvDAXkzRVpDfYoWQTfeRHdyu7s2XyM2moYKU4cpf7uh8zPGvrQwEv4",
  "key9": "5RWK8odHenMBZ2LVWCwBhZeAsK9tzs7JVPRjpDwJP2KF3cZmNRyztFcb2JyQz2mpyBetWpDPSedkUa7jvsDNwsPc",
  "key10": "4Kn2VpU3iNu3Z8QrkshXt2UA4jUJX167osHATTGsmTSavpSQefeGZpFKU6uqfwoZbvPHfdvHsCK7mNJJphDkdS5T",
  "key11": "4tBPBScHZ5xXw2Xcs7zyfdukZu5rZhHx2hkvp97ccYMSXLs5CY3YNPD7JtteUQ9YA25UC9JcqzUkcjW3xXxRVFz5",
  "key12": "3VPFo2ou2ypg4sCctkp6V1ZWLNRbdXGQKUxu1fGh7QVgiRupFZUjXFA3HVw1xfm12SNr5E1k6aqmX31Xepsaj2Hd",
  "key13": "VDep9E9TQaeBZYnkkswR43KaodP2rDkMTVN9FkhmQtaPw4ZkBHCCRUtB94JfEG9kvBwqHC87zrquyLtPhviroYg",
  "key14": "41uMuR3x1SrpTkA56PhXxv2LXQXAJQUUmBDhQMyK163vJ2sxSrtUdgeYdtfZet7L4edDyxGyfkezPkhYeh2dJMLk",
  "key15": "4VegKQfJd7qX1vFAN2P2EAd4LWgvGVmtu8x6MPdngXAJaGhU2JC7pmg1g4vuVKTXK3ydBbMoavBV8C8Y1ZCNyesV",
  "key16": "3FKY5143n9rjvdRvGEPeETNGjbaNCaGCEiF3fP5AKTAG8QxUVdTCPgQj6xJHw382HP8v1bfuBqeXehYpctSVJQ3L",
  "key17": "2bzzn7zohBt8CSdHbxczERAVmGSMtvLzpAhBAD4ZF6wewJQauPwHP4q3GHTgxvjrw2zxc37Xjkby5rsgEBXtc2vA",
  "key18": "5pjERc4wPo4JaEdWw193p18famqhuVELaECwu3t1YmLzryqMyazmPbragCQVPYWwDZJkXiGCyfSdy3JdqBRskMZT",
  "key19": "5Cf6SY6pj12FxmXwp3UUNvjFmYycK9DTpQfVcAAiARdQMP2D5rsFnFgjEc1itsQGYEeNTdy95MTLaemGm87RK8gw",
  "key20": "k6S7fg7TZ17w1D7dZyBiZ3oZeJH4XAu6ogmrgVahqrCXS1JmVh3NfXhb6GA5UmJmeyUrCu5PSMKmsk4EvQUXzZR",
  "key21": "5YvU5HE4YGPRu33FJakA8n9gQKcFAL8X32BKew7bzTA6AZDCPwpZi87qMxNMCF85Y4HgKosuM2mcms9BFp5Ljk6o",
  "key22": "fG195YBmKX2rkLuHsixs72H39QjxiJhmcW5PTZ9xmg7yesEZDGb9z9A5TUNFCjNzyN7ohFf8wToPkGH9Lapetv5",
  "key23": "2qkLWD3rpGWn9RvGRMAohS36DrJyEac312VqJMjnUZ5K4EnVQ2muYUfM5YuMxUEHaQAGwxjQdH6NNPAC1mRqmZS5",
  "key24": "3w4Jw97po6SKf42mWa6QyTfPdCbYBo8cFccYhHrrsmN6YqqMNcJLzopuPw9WE353AS9GCc7bQEHpNFESiGNLCScG",
  "key25": "3QaWQM1cWH6qTkXrbQn5EgXtwMqctCt6sAJX17SB4RF8EvVUYoVcB1aM5wXnPK2dhi5dVzbwWWxR91rCodQptqE3",
  "key26": "3dnQ4NaZTdKuRw21YnGswHaB3bGT4PCimivhtBoHBwLVVvzKMpZLnTfZKmc15ugRNzpYFoyyHSWQpy13F2kq8y3a",
  "key27": "sZNJDgQtenEX6uFu3B96kHJTcNRtoSV1onwKk1oYsG2wtCjVELB8mVNy6bcRMuP7nDQMD2DeEnZNevgAEzyiRCw",
  "key28": "2v1JySr5jandVdGxdGiooptsRsB9ts4irJLxoQUqkpuSzSkrgYETmWMejcBBs9bnw2VRyo9uE26cS8A5ZcTdgE4k",
  "key29": "3SekNUx8As2wkZ4tzbe8xmHSBz5Q2ZpxgVfDcXnUS8AyRfGedrweDbTuhELPqEeSyRAX6NK9MJc5xRMDTMDjjWrc",
  "key30": "5vJhQZebyxPWEyFSmrkpAeeovcyFEcfbk1LCuW6kQfWYo2SZgdcMV7mx91QFrymRPYUqdjhUTFaEyL65Y8JFdiAW",
  "key31": "2Vuv8gk7bxJ5RD7BgEyUf7htbd77CXzKcGDM96wrznC7iee3bNzozsGEWRAwqEnMDRk43tJQaoqGZppJCSBmwZPo",
  "key32": "3zr2Su2FdynerAiWJTyq4Y9gDCK7Rmjh5wFCY1hrkcNoHWiC2nq969qMDJJUCrXG8CSArJaS6nju2kdCphrYpGkQ"
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
