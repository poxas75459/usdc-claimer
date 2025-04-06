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
    "rBradY7BcoCNJ9GCD7zmFeTBW9GjDrQTnxmBeX9zyQRZ4zWVeymQx95PqMHive24RG4vRo1Jdp7xdDVcdq15b9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDGAY8rvtXAAs9Gp4V63XFtKmrWJenFetWMcBiyXzcgobgPmkKyRA6bPkxjh26Q1YYKp6qcsZbCGszBfCjr5AW9",
  "key1": "Vp24nmWB7aZfpxsx2GbqAYZPApd4TmWTLYTzcE4XNgE3s9DpVtY5puGn7cN59PibmCoVwxWQuc8Eh19pWgd1p6T",
  "key2": "3QwU9SGSDnWX3UHgt8ponVeBiKep5mVtJ1YZvuPJz3dMqmPxVJ1edJFBMgHPQUKZFDGjvzx7NXz2QwP7zra3UySL",
  "key3": "5vjWFVE68pmrvut5HKRH9cCKFZa6Xh8C6Wz2enEvn7UfpYfDLm6ouMqGmCL38PTThJZ5WShbpetXdWortMZkVCZv",
  "key4": "3RBVW8HZUyFT3z9X9NxkU7ozczBArcVYzw3Wwf5Z6vZpMqEbrnUxbCdMGLTyKHsgTN1GZ4JforkEpaQ8fo5vsiBj",
  "key5": "62Rsz6ENEVdbJAMRfajyKnNjWvshVAeLFgcPnTpEYVBzqgdLTxNiq7f7yGLrCQyqhUxnrq13uar2gVprvxXxxguz",
  "key6": "21GbVkzVsfuvxp1D4DZvqRqnPCgg11dzmyYL9WQQ8shBAET3EDntxXwY12QpCeps6WhX7iNJoqjEdpkCSCPN8JwQ",
  "key7": "5Ufppg1ywnyqDi3HBwhWY6AMcCVf4Yp7FWQpospPdZh9ddpMLukVyFmknEvqwVaJJrX4fQJ9K5dSdWe9QGyy2zV9",
  "key8": "5ckRjeRNLge2AqiWUBBRRBuj32QWyr2JkVLE2ksCEiKYwh3NWS8ocxFXmKvLCnbQzLGEtsZVMEHJvYLRwUHVoj9F",
  "key9": "54v5DSkjqiqUHdpWs6MpUF4ji2sAFMB8ri3mHRJ1FCZvqZ5fNhAYULCNo9zGPwnoHU6EbtiKNU8w6DebjLa1iHpv",
  "key10": "2NQucD6WpqC1DZ76fpnJJ7NzYhzhFEwqbt9ZJMFmkFdmW7FCSDmVprPwpJ1VijvBukxC6EhTdcni1Z8vNXnEFh4E",
  "key11": "MCKjvsQLNmRTpcKUdAschFBGGP1QA56RS7tHzfi4ontsprGcuzjbtmPS2nZXP42Zd9UKHmhRN1mL7RAhATriV4s",
  "key12": "3xHtpbhAd7JdoJf7ZLUT9gVgAdcivabF6gTDM5VouKw1dLDMKRA9Ee3vUrUnnP5n8oUCeTT6LmtHKFi5ZShMB2zT",
  "key13": "2GKjtYxpcPewpFWRC3A3JPv61AyMuQgMZ2MkJvXohXhyHqHHQC31eYCHAex8fZBWw86KFYWPYnFx2GwxiSV7Z2pC",
  "key14": "31qLEjdyJGPbHJCcgNKGpXp4zZfa3h9fdvwNoMWBBNeaPjEkUeR8BjbtfkM9kFtdcRWYSVFiRp5ApVKpMhvvjBCs",
  "key15": "27P5R1VkLsqUxvM2KEkpApms6vvs7K5dPB5iAQ3Ru6hsBfqpi3Pz5hv8GKeCpF47QQ1YQtdumC4vHW188fsZb7BU",
  "key16": "S5e1G3MLbedAxPDVjcNUguhvYN5WNA2a7S5eZej5yNKhAGmh8pBBv6HBRjuj6o176kDcxQou7u4D6Z5RcARCSnZ",
  "key17": "gWysLo1UCZ1rDPv3BatJUa7A5vHoG1BQQJRmWNBVSc1C5fYmYHDPv8fP7H7FGRvoRAwJgNNizYdSqUQQ4oNN2av",
  "key18": "5FXzpmmitmW8CkwAUnhLRVarKDoVWuqHbndb9wMG7zTYKAUNPSaz1mMVxKMTrSQBoUUxU1veK2A4FiZMXFwqQWqd",
  "key19": "1eF6qc5e7mHHYgHiXim35WAWoNZHb3G4FLExXAkx4eQxWFZpv7UZ1X7vEFTP4zG7ZsJkadN1Sig994ZX2FiD9iP",
  "key20": "NhtwX1Fkq2i5CpnCrhd7Ci9DK3tULxF8hsGgfrR6Cb5NsrP2KSvCRtHJXS1PFAKBccU3rXTCLMsuGjHZCLDSsE6",
  "key21": "4G2BEMct6Cm9Znxz1WoWNvct9x2NvURkXqUND2XzQZ9rU8Kd7w9oMGUoirVXmPQDQQV3pAuEPadcEPf57vAL5rAR",
  "key22": "2UDvUMbvJ4HXzw5vyi9tfJVcZt27vYD6j1TuMUPH37Dh8CMiaqmryTx326YB1JsBSQXx52RxcGMA547nsCmnu445",
  "key23": "5oSS4XqFcXUbME4WTWm4Vryq3Ca3YR6AY7Q8Z59fq2e6NmFrvECXbsWKs3HfGwKDixr38jaxVF9KYno76mGqnYXu",
  "key24": "62Wnef2gdV4umvubQ15S46uwWswa73vo8QjKhAMQHjqhMQTTtc1hXS2wTpe5Yxc417Y9BHTpfxqieRAbWA6fyN1",
  "key25": "5qTXrA9kLDAWRLV6ZiHVSYH3ZeViJfM2mhQcZKbS4oTzbfPWdz97oNS5nDET4pgNovQZAALCrnUG3ZAziw3pXA5s",
  "key26": "66Q8fGfrMQHnZodibyk1o4k9ugs7weqP4e1V8xp7bU44cG9gniKCft2TNcUTghx3Jyyzgmw4za1bNzw1Qm2G3ZW3",
  "key27": "2oMj6mVyKgon1HByArZhKE9TJUBLFpab1yAQPYLXjvNF4KBK2UCEbsDDpMPXPYxrsjiP7HmLzc1bUCfmMgbzTEgF",
  "key28": "25vEW8Ph8b1f16iALTnYHnvRtcrfpTLkrmaV32LkseFiG8KAyw4zoEhSEkk25eETzkvDe4oadeXFLGjcz4QdR2vd",
  "key29": "4YFphPVSciVo66pummp4G4vqbKwW3zSU5y7fajarkEUZbMTxziEQd2VmgupY3KEGWzgK8QN6kyKe6sRzQ7PSkGtv",
  "key30": "2s2fkDBbToTHBWggwfYTUc9LJR6KWyQvC3wM3QNn3fvN1iypixmP9A92AShCkBS2UfWiWcHUrJXMxqzfa6ZNKKjz",
  "key31": "psvqXL5Ey5GJsgm7DNv3gCim1dckhrPvBwVS6BrkYQpg4u7d36EuP7n19p6UwUhkjpjmNWSCq4CBcJjhTxf4S4P",
  "key32": "3MpU3hzr4RHUqZDeQdQKYhCrhxoGu69rMCAv3FVCLqd9UpumjdNVqyCozt5dWxReiqqC613NTxgKQcJ6fzcaVybx",
  "key33": "3BzVrG7xMi7kmVbSNebt3fCVp5PYq9WXxF9KFNZ1sHkYAtV3sHefstPb61wN9PzksgPwdizgTPCBtoGqxQmh6qGH",
  "key34": "3tcv9UAFUYm79tMy1YAUbHnfNb1jpnwyxGx5d21Yi1H32zsBTyoVuMgBbTZKaZEHkwCx5mBZjvczKeCqZt9Mn5ov",
  "key35": "2HCH6MW9djXjAFPjPKQ6hLZqhWdU8kxNJhG5Qr6Sg4WhJueZYxSmPAPediHNJ9WHE88UaBQRV17geSTw96ecyP1c"
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
