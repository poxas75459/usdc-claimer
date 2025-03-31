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
    "51eLPMXuq8m6CVJj1vVL4GHx1pdZxdyb7zc5vRGbgh9wEEotdax51HxBwn9S6eXM3ZXj4HvXzeFQ8sunnvR8H2NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4xvD6CBivgWmZVmPi7hD27tJvUMmugve89VxX6tXfHC18bVNV21wZm9bUTtWuGZ9nbpUKEuVsZ8GzrfM3iYNCn",
  "key1": "WEVSwmiFSDE4ou2XrEqPhetgVboyftyWWqQefBpJYuT2AtBu8bsh7eSUVbMLKpRoH2nsCsqJJASyQVFrZaeaj8b",
  "key2": "5xxCbu1PmcwjNu9WDddTDpGF7jHdMuhQQA7VQewETvSvR1PzARQaDMQEyZ7nuyU7Z9eT4uZFdLzUDwpbAQo3Yv3p",
  "key3": "42mAB54B41uFsjjf9Q7PAx7JstC7D17WRZhPfNzYiT8MHi4SPorf72beEtPrwEo3Ey1pumFnZa14SbnN7x16AM4Q",
  "key4": "5h8NZ4ctk5VtKfJu4pKky4GbFAbumYf5L7kofZrvVxoZK6uM98rUhdKwWMRBYUhPUUFWwKSqoqQhHeSUYP19CYFz",
  "key5": "4fSiLnwcTeiaa4rA7jpZPRSNSgJybp3YbvWMJWgzBJgHAeJR9Agt4m6jK9NS4fQ3jW19nRNR4UUmabLBYZjmTMyS",
  "key6": "64fmzUvjRTpUSKzqC3RZ9GUGp6zJx8AAEpuYHfBLpHDAXgewW2wHXHzMNEP7Zva8MbVaUmpYLPM2hz3o92Ag4DjE",
  "key7": "2Y1kcLjCCcEtUmdeEWfF63kZrGXRVxeD1GYcPftVPXukAsoUVpvDLfyqrp7TZ7L2pA2QoW2dUCyi54TLnBpY6xfk",
  "key8": "4buq9pRtgAbQrYMwxj2ttKA4kG2Kspuupq4KptPijSrHFP3nYzBVARCdCYvHAdwvuqeSjTL1WpUw9bq71jCARTyy",
  "key9": "4tz2naLTMhfJk7Fy78cwwWuzjLEwubE1CAxUmsMJ8mLgTq7EHNLKhhh3zio5oTyV3RRUJdhtCKjuPeGnm5af7P7h",
  "key10": "5iXcfMaL7nU6Wyus3a5Lxzn1mh88yAJVoDhjLPq8WHU6oZBActuKMuPhfET5giECAzCj8qCwWr74UJc85vQNb442",
  "key11": "3bYVtQa481XZDYzWhJLmRrHcq4dL9fGDVw3fiL7xGy2FAYk61fjdcBnAMvfad26ZJS9STVWrtDBaaBxxPCsjs5Lb",
  "key12": "kyK1G4PLq61tiY5kZ4HezRQPaoG3fXH6JbVnBdauvUmTvR7Atq8CR4xcinZFD4qRpvHXMscAw3HE5Eqk9X5bGWq",
  "key13": "5KxD3tRg3kcetSMZnG4Wn9ajZahb5Ygsm1Tfw1yxkQoLC9L7BQm5EdeYH9euVi29WPBA8okZsYg8aedAv7u3LbR",
  "key14": "5zpCDfhSeMqQ9EgtRmUavijHS8CEemtngwNb8VNK7CgYFU6fEep68vBweeUKVrq2EhXGQjQwJSfMLup8ykBVczaN",
  "key15": "5PkSFvtpmDHHkZhwS9o8DtVvgM9XnWbeUopemXKbd99DUSv8NJZtrwdHgmSNcs4E8UBkxSox3JdAFUvz6up8cPKV",
  "key16": "5ftGnfMBhnZvFHoB7WG2hQpAjVzrtWAEBbbmX57FC7T9SWypbbMGkgfNd2xycXBBaE33Dg52L6JrLPEq8LzF8rWE",
  "key17": "2N9wfbMMu2bg32WFnmDNsUWTC58WWGU6HviZ4Ev8p4GFTGQJGhVAWPgn1AcJCu83wE33rXDJ5FubQQ5tpPvRvJab",
  "key18": "4oJkvAtyaTBkRdFUx9DjSYJfmpj1WVc5GUQ6EtxWMNzXx5rBpJiPmfd6Lc3CSNfjn6UMo2rcUNbETHEzPReT4DEa",
  "key19": "xPPmQKNiAQ8eyEPqTpXjKJxTqgJ51KqE36k81RLYgUFgUXeaZUyfcJgjBE6irSzMEj8gxEAoMGsQkDJsCF4zcpP",
  "key20": "42iEGKjcsidRu3aYVCS3gLMcpTtbai3cK9QCxm5JbqfjXA9Azz7UPh12qJDgq8XjP8rvyGAFT1b6gobfFfLKMhfu",
  "key21": "SvL9TatqhY9TyC8aM57p6ZqJUPBc6myfM49u6FFbBJnbThoqDfPs7ycoTHxnr6ajFbqee8RsVy33LMaBq1ADNTr",
  "key22": "4bZF34RxtLutTSMsAtoMDNK6Uueb5KCsXdS6zqhxHEBGaCbRHS9FYPrqdSWxaz5kNJKsFVBr4nk8zcZiEBnMzYJZ",
  "key23": "TYifnQ9uFYz5YtNykjccJRfueDH2oLUVMJ1CcbuFvrPmSY5YbAdBcJ4T4DpEc4YUQYRqPJw1RQPu7t4GsZw5QAq",
  "key24": "ZJaD5JhtcZUikWhaXoSHQYRouVLYMmQZ94fczsUrYFGTDkEbMauwstGkKSBLsnZSwGFT4t3JNxjfv4BVJxXhWzh",
  "key25": "2Pd5sn6yGhbcTQ5UqCsDhCXowMJ6jvnoHCYQZAimGMXEgPGNsicKoAAk3NHX3CujuQ5odnGRgCS12vbUzqzDcLnP",
  "key26": "5w6U1Wz2bXX3SrqoMGFqzkXf4jSoekKjp8g1ge5cJVJPv1VVCaWazwgWYYiZcQDQK4hGVohhvGLtxqzpKmq2vL6n",
  "key27": "5DDd1yRLVJW4Ret9UXo7kbEj6ZjofrrzPtHnJF8kHyyMbjyWLm6Kwf8kjJA636HpqEbC3pS2Z4doJGqXjqfon75T",
  "key28": "PD1givHJEAmVyHEgZrhX5mqTQ4trALZGjjqANvgMbntwPC2XhJsMehfx3r9pGF4h5vM1pfhDviv3HPJvgrCvpax",
  "key29": "3mWduBWc4WoYhrnLHmZYzJF8LbGSsUmQaNYquWCiNDZZFLiFr3pAtdpGBzBsrvAZc3pvW15FtQoGmhvLW4NTcyPh",
  "key30": "62i6ndz638GpBDnG5ABugQXuequ7ndCDPV5K8pdJykJ6a4FXSDByXqGjATfWhuN4ieMh1J1vU9SyxaM4MfF9CYB",
  "key31": "5xYUsYWnAq7MZWNoJwjtsGxBXZRcBGVMxjvqKeWdbUDAAv2mS8MhxgZ5GrwbL7yiVxiy9WnY8W7NiohGuV2Yvain",
  "key32": "2FxFCJJjJ2WA8TpRQ85DtmPhjw91BUSmc7ppkBCrXGjp64AfuvQ9fpkxCfnM4qtnjpX8NSbKe8MwdzErk1bksJqA",
  "key33": "3ojF9Ma2BeTwLbbAYNgRitXhE8wPTtYcT4icV8rjGUv9jsNdq7VY3E2g2mqHJrvb2VMWEJP3PLCmqMLVpwskFdZN",
  "key34": "3v7Xr5Ro7rj21stHpEJdvtNyrUqAL2EBQjJQe49DEZk16qpPfCX8hXdPcygTmqFgFwi4RNLdRguE2vLynbjGhUdz",
  "key35": "2aT6Gwj1L5a5kcaD3VNLSKKWdjfRv2ZZUBVTeyE4SwA62zzBXuN8vU7xdd17orEFTE6aADXaCPHjhGDBWL6188z4",
  "key36": "MzjV9TNMcPdNW84oLRzWB8i7vu6AKiH3kivYF8GsjdqVm2ahCx5fG3mHw9xmEddYnhhw5nnkTSXxquCbjdwxj8d",
  "key37": "2BioJHKrFo5bagVFNaChmJyyjYctSGdGwpPcgMhM12caVJG59vfjwWfyjuKVke3Qy6bDvJwP5Br3MgmapuWqEfV1",
  "key38": "5wjyKAPt4FY3Ch9x52cPGo7XPTHdwEmPCiimp18WJoDpiNPKdyqtqWg3xhYE23h9uSQsmWpeAJ5JpYQXwd2tuPq6"
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
