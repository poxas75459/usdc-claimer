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
    "59MwjAhbhudh4Hyt6wrZqxGg8JxmUBqPz1NKyUGLm4B3RdLvDT6UdvNAQmkw9t4j16z4FmyxzntHBVoVvF3K558T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gpymxj9T6nCLN2ZDePAKtFWB73wJvdwSRweyEUnh5E82rwhYaEwp5911UkcYbpWphwwD4Ev2iaM9vZxnZXk3ERF",
  "key1": "21ena7WfeD7oBcZsz6X9P97GSTUiz2pzQjNiNHJ3T3mGkn8PZWhcFEBaU8E5xkq5rdBwcTijmQ3m7SftWjSn6WaU",
  "key2": "3iSG2pbrNRiZM6QT3SSfujqXAgQVP3p3bSjbHr4AqutGpWZjV6SGJcr8t1PR7YrWRAQXb2GdnxPf6S2HMMW7tcKq",
  "key3": "3JoR2NbvuaZbUyp2H8vHBChkDFc2d6j9FTceGjUeAwBBEusbCpAvm1WoPS4j8iSWDyn98T7z56NnLBxod4wNLeEQ",
  "key4": "oxK3feBcFEJLMC294TqyNKFxWugbHfhrufwRMfiU2WrnTMyimXprptQ7dNcBcWe71UYQyMWS3cZeM8kLFxovXCw",
  "key5": "27G7a1kS4GnPvLBkXRcaa8UpR7UpMuDftqNsfxNGcFjxXutwaq6fz4MN4ya4G66nrTFbvKRCAtS3JicSfXKoUhDd",
  "key6": "59bUsqEhEcHassRa5Cj85oEQqsKsJtFcjsd6YoUhm9VzwRJFvntnStvt5YDvq7kWEBH1PFncz4GYNW2LUw9Cy41L",
  "key7": "31BQRq9kNYkKqRoMzV2e6CwyMZZwrLahgaHhenG7NkP93oSjYAm3kGLAk7Zpc5gqgvmB1yJdBjV7m61B6JonAbNu",
  "key8": "4C4EZuafRoNW5zuABUUbwc2G7XZVMJ9p9TCv6RdLarhF8HqmSDMBmRCVnQrnijoBx3wjtHZtJzF3doq1g7x1KPqc",
  "key9": "54D15adp5zsmpfmFfSB3CQ88mKigseDxMDBTTqYkVzQ9jxK3KTnjFMVxgrkQJw9mXYnrQU4gKroNyvqQcYAayuDF",
  "key10": "5ooziGUqb9ZfxYTrMkyuisAA82ZpiWnqsyhVpYcCSCqK3ueKNbyYrTMCoeJVYdNysdETzGqJ7Gr9twyfY5ermTT8",
  "key11": "5cNcZaaFTqWfWmrxF4NRj51ZM6spzFPfLj3Nmn4fbXAKH1nQU46ymzic52F7HaXR5MFoahMxMNhGRWm115JF6No2",
  "key12": "2Wdfc1GWX4bxPH7pKajPTyyKH3XGVRZSUhpsKqv1J6Wup6TWHH9KToXqzY8wFFHFXz81TKdthDNfiHrSqRsvfdPE",
  "key13": "4zvTcywBcmjGT4NvVjrp6kMdNGZA8o5NM5Cbxa1VNiCcDnSc6KT3hpjrKgrNgkVrvhie8ZAHYLkc4zXSzUXnh2e7",
  "key14": "5yDFBxAyUu5FRhnhKB798xGZvRYH2JDf3tfBp1yFgHm7Su3vbeSu2o9wYoGqdgyg5VJhvVpXJsAvNXWSiwrTQ3M4",
  "key15": "2gTgahQoZYq6Rx5AHbUZNkSmUk32qgt6E8GSRgwYm7ZdeHt7KQVyT5dh4TnxD6Cat4ruqtX2MdNGdhEX8LJLhpgS",
  "key16": "2zEsw4C39B47X7hMr2Fz5VoqfXQFnLvnJtpdCsaf6TQq2iahdjmqTrMueqbSeih9gNa74ickW3gKQSB6dA4bv5Yr",
  "key17": "5QJdaFGPqrgEad728fnz9HAyRpwW6yvtdLyrvcEVptvgPoVWyoGPYQz23bRtMXkcQfpbidBEnJQTP76iMUaZAvKX",
  "key18": "31pqsvXtJSJxMU7pwkzsoG65idm6mqXBZsgXg6GH6BsD9GMXdbTEhzJ9BLbtFRiXBBpAZW6VJQz5ZHc6j1FxZRLA",
  "key19": "duF4UwLRqct3cCNpipY35ivPYofna2p2mb2cBx5k9NgmqkmNVTbnwjkdiDXLMP1gebgAYVCuwAqEGYwnWtBd7Cj",
  "key20": "4WgZm7RybMu7LyFMYAsUekWPpQZ4u7g47iex2SF22A6UbsZkFjCSk6CFDtfpeKjoi7nW8F6BHsTYoj9LLvS4MRpZ",
  "key21": "593GLFGb6aJwerrT2a3J2EtHToGjwTF784DjbjRJ1akYVkFMtch6G11mXo2PmpDLbdPyPtYUPREjYRf32ogHfAAV",
  "key22": "zSygxdiNQu19vfNP4qDvJg6P6WThZqhrSMjew2oX9yJZ9RSZVux2rkaBKtmvk3emh7BjdczQEyLnBm9bXtgpeGQ",
  "key23": "574Qriy1ziHwHkDW5JgKveVowWUSqbG583a8XFX9d7MJnx62LaB5aoAYytxULPCQ1T4X9QjUa6VLywhALBz5QHLu",
  "key24": "4PG5QF9nbecckk8NDMocDKLCfvH8W1uxAkBdzkfy28XvaPGyEGLAG4CcvxvMcFwQYy8RJNnxq2XG1myuNcyjWdMt",
  "key25": "5adNAq2R9u7quLh9QKg1LjhV7DJvwoACMkDQ7s4MDfCpsxQx7c8V1FobB52rXVt7hUQcu3Lbjg4c8NEjgSu1NjvT",
  "key26": "5VfTv2EPmjbb3Bhh6te4BuLXm2ma8Fzdng568jKpcaKWe18DvUXojp9YuZ5onQHhKJD8g9NGyfvipP4MWduudq5R",
  "key27": "3EPUgm2r3TTLb73Mcvb7aZLT7iwKf1CrqtVbtCdYHBUqrBfqacQhs4wSu29dyLKqqB71aQJM2viBymyEFpnEXxNq",
  "key28": "XouxzdbZRsByPjfMXvD9L1Em1Tetx2XKQsPMkkoEnZJMXyXJn5mTGibR3Sc4S4yrdDb118Wx1JtPJjcao2nT4VE",
  "key29": "354LorhUZfNfPSjFDkkEU25LgCDZ3P35jx7kQCiVTV3NwwVvCVCNVgPtSzRX3QUgf4LxNic1gPtgwRv4BuCWfafV",
  "key30": "3B2LT1Y7N2nsfXZH6MdsMrXA2bJm6kLnsV4NMPgjj5iYbifxqivr2k1soneVis4oKzNhHjovQH7CBzJdzixUyL3A",
  "key31": "VhZBDbn4pJVcZKNuSHC8wX5ezYnrqWA8P3khm4FqLNsfvKhKeFmWU2J4DgaAxUwZrD4H2JuBhUQ6vjc2pAw4vds",
  "key32": "2nCAhWNBKWJTenxmPRbEqhgATADjsmZ9eRZVJpsJyF6qeFSbsvgjm7HfLcN49adwmzRTgkLS8ZRWHgLKFTyZeQMf",
  "key33": "45TXupF1RZ5oFgZ41m7SLETsfeAPirx3PorzYevAYPWR1nH7D7EWLjydLa3BGWbgbeJkG8gCpYDEGBpcCiWVcwfG",
  "key34": "avzyAuxLZZ5sGtcdAYgzksbMyPsYG9RTCxMHFjSWctrpATftXCFN6oE6RBf8UuuLcHZXKn6jHBWCCbweK6eX5V5",
  "key35": "phPVdAATnA44ENSNR3fz4Dzp6H66gMJ95BceYCDQj7ghU19zsQyx54qupbT2jto8A35zp4FSK4Edt9ScuDzVTNJ",
  "key36": "3g8giJguy7qccrNEky7iQ8JTVQkQx4HNByERJT9eJUp4nN9NdfvpvkUuvRtocka5i3idMBxo4XUJp2xJRnSci5UQ",
  "key37": "3tfWruRJasLx2AYwue1mnr89DuRrR8Fq1mW5MyABvfg9qY9b6zfA4fXTeiWMkvH5UYLF4SrcJ4DQhDPA9BwbP95r",
  "key38": "67Ljupsd5Fyn6fyS5AEHBJmmLimQR8uRqLV9HLpzJDHxAuhQM4QePEgCNYoEjQG2pt38jjSHHXEAUVLY7VsrSKz8",
  "key39": "4n6gVMXCyNkPx9LSE6T7LbK6ybcbgrSwVjGKFCMHHgW5ZY1MRgvx7FMo5iZr54tSEn2JPZaQT3mieNXGhU6oXAv3"
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
