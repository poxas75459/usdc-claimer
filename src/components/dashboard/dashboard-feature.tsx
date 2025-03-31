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
    "5XSeKjoddwpbhPwAk57JEau5a8wJipCWcBabSQgpfjj17KkgM7YW15KcVPfsd8nAoXCJ7SUiz5figUNzW66bHz6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bSzwM2mTdXik3PQ8dtsEZiLSCGf92TSFnnvjJwJhRUHs1Mw3tEJxJ9QJif5r88rGxxyMtBpZtwtocoTercAo3Bi",
  "key1": "4qqvxYj24J41iXGgztuMMTvewTu4ETtLW8CTSFT9XYyiV9yFpC7MxEtXKtL6syk2KLuEVhuBGoPVwVRFz1AaRdfD",
  "key2": "5JXCFRbSaVPETqbCtHxq9oeoAFwHqe7AboPaUuMBQ4kTVtgvzJZvWPXMMZsxDsFtZ15x76ANdS4GpMQHKnuRP93p",
  "key3": "5U5NEpwRJBrJF8mS9bH9wZxeAfrNUvaMMmpJDNM4dzkKAW2G6x75aPgHxV3A87NDU3pjyD3niCBH6zpv7v55eGwj",
  "key4": "3nRVBdFXwvvizErVsy5RHV1Pa4V5ytTvcm1qZ5dFwvY3tgRBE3QtE1dWCwwEmQy6KDi73GVJWabi6ut4hqZjpgS8",
  "key5": "e4XJ4HQ3vZ37kbYf5RybBkBxH8MbsKnnpDLg62uuwNB2Batb1mh2G6YvKJid2DYkh1XAbgSHzHrf1hUr94uzBhN",
  "key6": "dB1iiJoYwbiPWEzuKdyQhx5uk5Jhg1WzyCcQqTtD8sSk8DnYgzPNntaYg65T7gWWxv9YDnRxn6rG5dEMuUbomLk",
  "key7": "2g7jqWE2QrJW6ecVyQ9yHpmfp3FV1FZLmeh2uL7MGC1GLUoAaWssQH8nsenfZ9DYDz2cawEUuSPjfirCB67vGsAr",
  "key8": "3GPB2KBVuv9uxfK3KKNogDcceaTBpFCBWKKHL3tX4PrimBgZ26B6Gc9CnBauKbU9ZgEfpsQhci5b54Q3iFdBVRwK",
  "key9": "4JLyc4wQZdc2Z9ePht8xSMDZkWTqKG58YFa7NCDSFRLFTjPTAcxLa88fYj7XZByad2o6EBgLsvFN5GNvi3bnjSaV",
  "key10": "CG99C1jQD1Z69oxtHJ1SSaW3wnn1iaxmYyWZror36jArDkTokVvfuUBuVYn4pi5H7FVtTcYDy22LeAghzE5D99x",
  "key11": "65feTtNJ6y8azZirNUBBuQ1aoi54nL3ESKS29j3geDD7MJyKMwftdiw5VVWDpnp9EFVZ1x82BZPXFS21PFgWJZQL",
  "key12": "5KEg1ndSqinC1j895G56n3CmwR1cie2327xw987M4E7P3pWdKHvBLvEqQvqv9RinMTeLVqjVL7MpjGP8BX4KVEvL",
  "key13": "5s9TdT4KaN3iumZC6MCuzqEgnz6MqZiNkNgkK2ceJo9XWCiQ3YVFoNUTs7Qe2qvR4qq73MtE7T9FHF51jQauQR7B",
  "key14": "38TRdZa5HFKmvD4JaNpLqBirPEKdZvZetWM7deqyG3eGzoqMZRDXTdyqWXAkUkNbimPQfT3dpWiBpb3MJkzuooir",
  "key15": "UJj14a4a9dQJEZpvGTSjTWPGRaKvpcmVQQ2fxbmeZVXdgM43Vp61ufZzFVwQPAeHymGa4TYJNKNVMxSAthvTcFf",
  "key16": "4bBrmGsW71VUu2Q9JfvTUT846YfpEstRUcp2rzSgqVwjHjawAwnhsNtgt1czzwQbV1eJRdnaqVfoe8KEroHH1xyL",
  "key17": "K2GRsf4Vrdvdp4hwQ8pnqfx98jEQvSpg2ZxTnJ6WxgjvZGnD5RRKUNGX4tAdfthoGMXQzEfKVJYWWU2ZiwjDRby",
  "key18": "6179mnF99DeBRDuib4coxkzhZ5QZyKBC8nqtmEjjQjEt8ktcBemVYmpMTmWSZre26YqqoHogTNpG6KgEHtipLu9Z",
  "key19": "47pztkMUnXCtzSG4eLgGmz16jp5QwjFZbCkQmEZ9Q79zBkaWfDCWUNps2Sz6mvWuRqaztbPuTwJp5EqivNYcw3ah",
  "key20": "ZCCyeWgTenRqUDHXsTAfLiB3bbMe4HuFqTT7pEesZzQvbGrqW3Z4yk3TNFZsctKdtTvW53AwKjvHyorZXHv6cQs",
  "key21": "3WA3szHegmXNrnyS11x42SEPuCzWr6NAgRU7CyTqBFBZvY3ncRcG2zGmVtdMtkF2wYvLWEoS9pdZXGAqqdAPUAze",
  "key22": "562nzmpzwDxeDU2Bux95jyGpudr8RLW2YsexR4PUcjngenivpeuE77QNk8Q8cQrKePCCfM6fTFM7jNxt1M3nrJeW",
  "key23": "3oJ4pCKEhXUvsau9VsccMMDWuVqV1e6UmE5zPqiYR7BSs3iyUcXsLSVKi23Vb1Y8CFKhuKM5jNRj6vtcjrEgRh2G",
  "key24": "cUyueFLehKv5KXbUjWmJF6jG3STgz5QahNTansCErEJzG1GPH527CPdaDcUFfp18Ms4QyKZDCZYcJw3ZQ64ZQ71",
  "key25": "64wHwFP9y3NVJxRDkYww9dKnk2W1kHzP5amtG6n1n7dqTCXHF1svvJc4GoKXfsm8tYLTfwwZcT2uKwbXg4PL52h6",
  "key26": "5WEqvU9EWW6rFRdbKD3Y3iVg84rYwH4VZ73CT6FeTHknFMbQKsLNtL8EBqNbmnaoGaYUDLfZkt8CpYXsTaouhLCX",
  "key27": "5fw66nsQ6gEWU3YzG3yWTNWbQw8VJhenwfHZdry5jM1fdsi5P8sX97Z4sVkespn9EuUZ2ftrH5reybbn1BXX5uWL",
  "key28": "3M9ov2fXgre58tLqad8prspF77X5GzvxSdHqdSDjdWZuYtKPiP6MPBeaiWF25CrEtErxCt43bcunenJFAGCMDmPW",
  "key29": "4byDVB4MPLWYcZtGm2i68h6NXR6ZR7qTPURVkhZuMBJbCWstK3g5s9wPF1cWDmJfvYrzzyZGefpE11ziyAykzTPy",
  "key30": "cZrauvBUXRyecRGv3c8sKwt5wnu3tD84Dxz5akrRHjGDpddfq23BaGP16gpEk6ZMRDzLQGVBVMxC9tYsHRQjosj",
  "key31": "jVHKys6nBQSqQAFtYDXrkxbtEabUjyn27fNPp7VC1dxegu9z8XYacWwFoVrRb9pNMwn65ZSx6MfBEuN7bXB1qQs",
  "key32": "4GyyV4LjThuCbduvQZSAiFS727D4vpButmVUXUj8cLUrFN6Zb1fcNZ7jf7hufDXGisEcwwD9ahceVEn7obGdbYv6",
  "key33": "VHTUb6jtmf8XKB22oj4xNrLep1C1ZMfzbnB8vwxEM8mDtEZRDYaqYYaJhjxcDVb6ExiDdDettaJK7A7YoKRUJxz",
  "key34": "5d2Lro1sat5HZEWuiFRh7eywgs6sTF6tjWY6FKgReVSkS9jhwGsvE3nNxs58369qUnPXAjxef3mYLWSjdw2LsVtk",
  "key35": "MAhpNwe5Jvke1wuArAp7Hvbn9hH2gaNoAEapbikx3SbqWNPv1qaFbrEHqp3saYCXBH8TvQ8DzX2bUATt1HLD3kk"
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
