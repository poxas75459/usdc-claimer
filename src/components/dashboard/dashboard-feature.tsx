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
    "2UDHq23FDN3ZmbbHSGBzwrbh6wNbmHezFPUKegpYRmBk8sGXRpUqt2dv66Rpkgg4qX1JXFbA2ESuSdqaMQhtBeLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYXJeJ1rVqNF4quVCoTBpD3hWNFQUs4MrvY5KHDKv4SdS5kaJr6hd7fpEokbL1cpqUYaAoG8vg1i4nW1bUnVSKX",
  "key1": "3cJUTyuMK78icduGQy2JesXVh8Hhsd73GaRf9kc2JCoHyHLtYVkkpXMmvaLi6Jn4SwvKQBipdZvUiDmM4hhXuS7k",
  "key2": "3qAYruY7C8WEpNaTU7Zp9GymQsfMmf19emRTj8oPuNsPd58JySwVcUoruFSyEfzSfzwAsBeRGoHCBndiL4xJXgTm",
  "key3": "nZ15X3EEQiR6t3dnNMsKXAVxKoSRhzTH63UmKRdCbdZA3gNeUzP3bVVFBC3VMDPSVyYrL5xKfoipjYx6ubtgNC4",
  "key4": "4nXH36wQgqHGr8Nvc67Np4V4dKDEKRL7Aawp1Qk18Q1q1kdCBAuC9KsU368Ew2913p44p7SegvoA4CSNWiUG682E",
  "key5": "63SLo53LWT6pFtVH2763exr7V47VkJYEUZrFRU2bPN7dNgmcchpQzj5cGom5Ct7R4ee81RzijGgkg7VmDjMgZGZY",
  "key6": "2QAwpsF2chMWGMsGCrzCGUKCYN5LU5WA7vwhN4poDocwtBhmCh2Fk35dG2Z4Ntrxb3kse26HG6soFbDzxGC6hcEH",
  "key7": "2QN4z3v3r6KNSXLw14BCbkSFaEdoCnNsmaR8ipAhoTBPXJq1vJprNpxT777TNjq4gKBJXgUi8aANt1inkDRzq6rv",
  "key8": "2bNY3N4GBLE2Cnd2zNwtKEVnYFC3N1KS7tMXPpxTW9gRY3QmqS9i3VSk2DcF4A6nMhc7FpiCPJi9qx7orKdGafvd",
  "key9": "3fFcubNE84noVRmDZLFj9DRM9b7btPwbPt9Jiy55DQU6q2DAvgeXTMXZd6R6kdmpWqetGs2kkGWEHyeK1jBqbpFE",
  "key10": "5K4c9gTejNmgakLhWFdF7JpoDZ7kysEcfUPrG5qkwD8Wm8h8x5bRjuEvPpehWM5QJn87krkC2x5qTxP6XqTVaGhr",
  "key11": "124L4iSpXm5wJQAXkFQdpNwdRU512FFFr2UFyMNiaK84Eg4rNwsG79Rp6u8tLWG4RovkGzFvcHCgE2KXKXuHAnBv",
  "key12": "4KrgTMQtU4kJXjyFbXLrL4GKX6MZ5rMJRQdaqoTfzMULXxTpzRfoR3BjLTNNhDrpncojVF6saaMUgxtDP2VJMJPH",
  "key13": "45gdH1FWnRkv6NWEd439voHFMzPjjLRGCtdqJeWfb3u7H99sZUrCqD43GJDKny14GTXBKTCkMGhY3m2KbGtKuVYc",
  "key14": "4qwHtXye7u6oMXBbBpngRFU1rwxqzKd61LAT9Rmn6vsygrNzUxwn9dJZzZZzmk6TFv5A74D4sfjMWVcENAyuuabP",
  "key15": "39S2F9xrdFaLBAZpMYD6TxkYLNbhTFf35BcZeD16Pa9k3A2tymKry3UrJHoJ5fUnoH2pemVKME2QJLMrHpBAsCdu",
  "key16": "5mAFqrAHRWS9UAnQ2MQ3jGGVdJ5cNCnoD7vFC3ANNL87GsoxmvWTFzYJV3i96DZ1QuzYJWyvTFqPQvdqUwVxH4V7",
  "key17": "aFNTqwPfaAQCmuEqXca6uqosqMvZbxULrLnao2Et1WJrF4tG6d8N2oAXJGNxrfasTZMTaG8NMS3eRoUmqGgCZnU",
  "key18": "RQvH8C6Vbjs8DagYvMLouAK4MQEWpBWmU9zvYJ81dCmUQPqnEv4bqusCnn5gdauLbkyu3mtgeC7gqYCCh7jwbCJ",
  "key19": "8z6Mo4g7qYiuFHugJs9Eqx9YQuiRdyScu3L9ZEJKTtS8PeZzK2rGxbWe22UZiaWLcvt3LXkrg1Jpi8YM28J9BB1",
  "key20": "3T7m9PVTZvLY66GcnHF6VfjKuBBRB6L8GjAKxnUQz5kWBg9Zt6y4b2tTYFRH32Yv9KpMKauuH6a91iQbsKcRKMrG",
  "key21": "2ZFmi32a5h1wMJD6ZZZxZLeNpnKTa2voqTs1y3TXCuYqAQjyvBn9CvPhftq2FJx4aP2JZbg1EsWpwDXhGsTKivtd",
  "key22": "4PJnGCdkxDFFK2ir7oUW8aZmRaUwaG611mD7a4uAxzkQ8Sod5anhoTUeADZLaFQJjLuuY2vf3YwiZ617qqjV2BYS",
  "key23": "5E6oSxzffBqQhYFYnfeUBLaX83dydkMFxoYDtvLttfNfugyPcN7jgcq19GmPse3Rj8D6VbRD9Eftv5rn4Ed5PKMn",
  "key24": "2TsyyhtsFTHfWBKr9e4712Kk9oNq9YgkR9VU2pvPPu3Yx6gh5suVSvRvYjG4171493HGbX91nRaaQRnN76wKpd2i"
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
