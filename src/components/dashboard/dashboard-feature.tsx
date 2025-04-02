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
    "hNweJo7zTUYa5wNftQhGkd9bNTv2kDXbpBJXcbdEevB1UUyrxStgNNtjFtY4naEBTYLX58LcQw2HxGjEJUeVPv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZpXA99a2UAgcwKUPmiRKtQssAzbKy12mTm2RPH6553AJ7gvi2gCPXLKgTkXyfkJd2j13CCJt7xmQDBpd5F4CcD",
  "key1": "4Z9jGAbZHtRWVLm91n3yBg9haUrjDfo2wp6Aa39B9soEn6ZT7wLo1dJu1nGCTdbNWErPQMSfYkWeBAaABR6eGofK",
  "key2": "4aLY2ganHofkFYNgEuZd1y7YaA39qSsEDpkpeaEnrFo24Ps8sL8qpQbUeAYuEjXe6gVwAj5DoD79DcV2byLXZS9",
  "key3": "3qgteWkrejqDsakYcjqWmJGWRCL55DH8MoF31cmVSbRZy26xubh9Z4gdgKpWHdXvdiJvagS5TemvqArseY5D57S4",
  "key4": "3GJGzKsHMBsakso83CRhEvFr7rYvRghQoKLs9jpHUdDrKashUMDGk5EiL3KrhvA5bE7w9SyZdM8eWHCDf2mF5mZk",
  "key5": "4RihcLtqH2tUXmDjdoVU1w1TwzTEaXbS2NoMaQ7PtTpFPfxXWFqtsL6CxAC2MsFo4XkMwsRCjrZwtK7P9Cr16hbP",
  "key6": "67kERKiBUb6ESYo7ydf62ZoKgL1WE2AKthDdCvXT5CpaEYKhhPE2SjnWesj5pMC6XudNCYC2cXJV5ZtAiX5Azda3",
  "key7": "fDz5CfGdtfK3hb7RaBsMhCEThKwxtPapADtMWFCzXYdqQKg1eStk2se1C7M566yPkQb1YSBaTMfnwuybGggTaeA",
  "key8": "23dMgPBn6dWFjAtcRFgfUtgY9cu1grStYkN54oV316AU8D3be1EvezfdpqqbqTHLErWRm617EFALABArMLtLS1qY",
  "key9": "5JCwvYv1EEkmXnDJoXK5sN962pHZJmL14irgyMSjkN6dSg9W6QedUVAL2k3gNfjpk7K1zfJ6ngQg16AiqJXNgrve",
  "key10": "29hfBCiEZcFuh82NqttjBkG7a7o6TJ2URJFijHc4EwRPMy2EcYy9BSLj7naEa9tuYDmbkCSt14sEmsJPYGYc46k7",
  "key11": "25nxUKV9uzcrKy8dxG7bSqEWwiAFkZ5VcFbkepnvMjdcoyywhLpRXSz7FZnVQzjLJSzzukJLVoN5Z7QM419oBzgS",
  "key12": "4fM86vEFWG8KpNAtLii37CmRZstvfYZX9Gyiy91K3uutoBBHrXZzSyjw8G6rUHEw4SB3duTopkRNPZhsDHawZ76V",
  "key13": "FjaFWP2wmfDwJZfNLkdvpPNQAkphhiitX3E6y4pUh9zBsNGNEwUEt99UHW1f8NepLYqKpt39BWBY3avFT3xuUCw",
  "key14": "5vRS1KvHPLusbAxC9e7txA2RYZdNiVpuPPZsvHEVTRBFQXxPcoYLW2AWNWWmers3TYGsLJYGE2driCxPeW9o1RYk",
  "key15": "5bcDyD32dYqtYFVBcfaantJCyY1NGmD21QmdSskuos2MKsXHwHLnEwZkpcR3T7iY3nv59AKfG9JWASZAqY4L5DVP",
  "key16": "39BctP5JEYSwVAFvQakf4TmH4bGb5uPfRmHmRKR6b846ooqWBsyVezDsFWGsJta4K8vSB22rpKtHeVvSM3PJFVMc",
  "key17": "5rE4gPkzi4diLikZmMhshGPoSw7iK8PTVPQvGxJFktyoJKXjvXzBedzdR69SvGDGRrDmirS3DcCBMVxNFb8itShh",
  "key18": "4vSc7CL9eGNRg2Sn9TaSxzgUmDpumx2e1wo4Z7Mtb8G9xDFLS1BBNgrUtuAEMS5hRgYWDxM4xQVgzqPFzwb6QMXV",
  "key19": "5Nvcab2sDfH6bkNu49AhKdHbBsqpiNkGqTRv5u73UA2CbzecvpBD3vyRhRcnb27NPtYwmjotuc3upLbtUu3B7FtN",
  "key20": "5jR66APNY6X2hT147s6aind1quMnvNSsiQCkowV8KDADiDZXqKEg1pU6sCQGA6grUvB4p1NE6WLw9xVmfanPBUAW",
  "key21": "4yK6JFatAML8Kznd1KewS9ZLj2d4LuHorP3LRzaxX6d5Zm5PE3kRiWuqsQCppBrcp58pjnrTXgyJReDUHjFEq287",
  "key22": "3N1J8tmfzCAYZtejEZ7u7HZLut8Z2bqMpHBQVKccqFfCKFW3Sa9WZw94m5TaJj8H8mG16Bm67k9suDP9Sq1yWiZN",
  "key23": "6Yeq8XHNaNto5UbXP5rFU1MyrRfJ9rWYGhrWschwuXtwvb4dfEbyrRvbmXf4nQYEgKCmRhYYPu8viQ5frFXgdaf",
  "key24": "L9muAZSMJFV3szscXtxh433VCqsW6gRH43dvbni5pyRD7iJpjVEUU7FjDBTLEsvr1Lq6j2yNsWePbHpd8sEDXyW",
  "key25": "3M9CCiRFHVKkhGSEQejzo1YYmQVft1Mxw666D4yjCvFK2L9dmq1pHMkmTU29WX5drx6oCKSrbwtmJbJWMgazjrF8",
  "key26": "4jDWyNBArsTJ9UmyZgWmBKNh2WHrzPpPfa5sDNJFBerhZcRczkf7a8K7WTs41zj9to9GLE1YEyzZRAnZmXKGdk1N",
  "key27": "5AsVdy65881Wm258awos9QHA2Xc5h8yos7e2BxD2B49rfBs48BxPogLT9fMuPSKqXQFjrusf8CA3b682hG4fi1wu",
  "key28": "5qHPkwhxrD4cHGfd74muQEqsBat5Zyock9oeSA7omvFTd1uYkQQ5G3RsGAaCZtWPpYVQMs1PyWyuf9b4NESqxYFP",
  "key29": "4ARsCUvjWPhYnVR8Z4gPUyCNCTfoxtGspJaJ1rnhQFV8L5HSw3bawxp2FUf244qFYxU4vkq6Fd2UQppGwT29sUKv"
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
