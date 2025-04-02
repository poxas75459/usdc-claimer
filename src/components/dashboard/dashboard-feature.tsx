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
    "5Hp2KKyCookEKeVg162jrm3KdTB9avZQQGqkjp4GPu9hKjqFNY7CqzuErEKfooF2zRsERTUJoydNHkSV1z8WLL2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjHYd9mVPVZn7ZKauDUQ44D9Wnhi4LhNnfPhr9bwdzkJktrfoS7RfVLDzSdHMsyeCHUc8mm4Q4RYDHNeBWuxFo8",
  "key1": "3UihKTuLva9LVZEJVhBmA4y14YazCkkgQUhaeXas5qVt1ZxVrTBUfkFy5TXVWZXsW7dxp6f5pUEzfn8XVPxLBkHW",
  "key2": "33iELP8GYXexDmTLQtMPj3x2VgW3FtvAXoYNQSMcYTjQq4tbVLZuUq3nZpGxmREQ3VtEz4WwYGHkK7Aow62KgQ2M",
  "key3": "3DfcQGgYjLGZ2ae6qum6kt4PijuNxLx5J8YLH45F7LnQgwrSXLvp2YipeB2SBxZkAEbuy42ohnL7zGSytGUdmByr",
  "key4": "2CARmRbdF471oZdq2xkJUCKEaFbaALCHQUz4YTkqzcW4QHLxCRfJAncj5QDubiekDJ7g1EPDSr4AqLnVvU6jEfn6",
  "key5": "ee2emopSUYHi6RP3phXjA9HQuZvpHRU8E1yfvh7yhjmrd6XsfZBmwPco7MyKejC1af1m61BBzuuDSL1q87ifyYp",
  "key6": "VGs68UnR5GuPTnyq34KpAF1qqsRDiPVrwSjf3DiBcoHhHaKcQk2vHD1LzrfeuEtk61yPk32SnQCR8KrUA86ht7X",
  "key7": "5VtDDtjq1vMWXEK57TMmfyM9L4FUnsJ4i9Jpz2WqmcQwzAMmhQGXQKg712LQJrvSW9w1Lua1VvuXMgMATNDN7vu",
  "key8": "4k2QNPLWtzsG5arPHyynFrxBFnZYHprHxUwLKpT3WZgSckcChmp3bQPLUWv11pQRQq3X96HSEMmfZ4kPFwaePawZ",
  "key9": "3m9grMFS7DJmZdU2khCvwmh2r6NAHANqDAebN1Mt8vhUbuL6trXJyyv7Gu4Twsq5kGC7gzrLYdgYgmXgphkW62ez",
  "key10": "eo4NfBGddAKSAuVxmgFqrk8DHge28xrG8Vj7kMQ6poYDxgACux9t2ToVrw6q996TcQtQ7Jz5hr9v3ZoCr5nCPTK",
  "key11": "3dRFki6W9iWtqqZBTAYXXnyKhStymT2DLs4XaUW7w2VAuFtGjjcQp74hX1EuBPcbN4vMMqsc5MzehZyAh5F4AXsA",
  "key12": "41muxRVgrc1zirFAdcWbog4M2RmstvYdJyGpYuM9G392rgKwgUksmdA4VCnYciv86Us3ZkDr1QnXVcDUfkoyDx8e",
  "key13": "4j72XbzJUZYQFz6qvtw14o8HAxGWEzbsiMSVwSGrzp44sK9bKuLtsT1FVFo69sXppRJsgCGxX9CKmjyu6R4qVLsL",
  "key14": "2fJusaj3muEtnRm1cKFzLoFw89Uh8HWesUcipiaJ8hAp1DgxeEGFbF4u8bdAeiCMSaDLgLpGsCkKLckvQBiEutxT",
  "key15": "NLHUseW9S5qB3TcNeyv93dVmuAGcCqD1pZnvLyELpn2Bfj9uw9cM4C9jEoKDeh3zQXjKhNmA4AjgQ3poGEiZAXQ",
  "key16": "57ctCWjTiFctM1odRnf9evQQpGNg9PmcZ5wT3AiCa3WhoaGoagzGerAGj2XSiAzyVkaQpyaUdivirQY1Ujmr6uxw",
  "key17": "472u9ntXKEmV7z53JGvCeSayUJuaxUYLqHFyrJg6j9tpFJYk216q16azxFvqFfY1yGBq5eyaKYSZ5GT1fkxZyQEj",
  "key18": "2rRAVYeCqX5b6WZNCtaqTqmj6S1G5fYjME282kfswWutsxqgpzt3BMGkKf6ZHDxxczCDEuwXPAU7xGKWEcJ2ErzN",
  "key19": "ee9kWTtAHcrVETvfb7LGmbrDsPGuNTJd2pUMQWWDTeXVLWid7irn6vY2QS3YMh5TMcUEYaJFnjTcuPWYZJfwYvk",
  "key20": "3LYw1CMtRYyDLdepX4XMeSDr61yBHk8nS4x6fHUxmdGrfUWhTADATAe3HQtnF45m47YAh2DRa68gjedzaJ2V2WtK",
  "key21": "R8LH1bpMTYvhGU8kqoHKCwtaRzz9XyajoSGCpj2gAAnUgdnEHwPpYDvMcKoavHRKRrzADXFnFAToTyJ9QGWLJd1",
  "key22": "2wr6rFJm2nKqYYFaZ7sGsKzsuBvfPGsVU4ZtnVKif8QSEWbJ25ZMmQGMTuBExPQo9pkaRMcSJHmv3myS4kov5k8Q",
  "key23": "43MyK24kjpQqas5NUGEesabNFQuNy4gQZsAUEf3Fkg2yq8a2dH4KdnEUFD4YEh4Wvo3RoHCSf1YRYsTrNMG1D7us",
  "key24": "2Ek1voahUNHGWkdKLsjioWyvVfv8H98f9SxZuVZX7KeHiJSjTxUij1TKJpHorn9YHNvj7tBFHF23haoNerzkic88",
  "key25": "2J681vbsY482jbbHcyDHxz93XkBUeXeRj4AAHQLVG2hU96dqaCrPJzsd1vBYd1LBuVBXVxeoJ3nSk6qpqYFFk6jr",
  "key26": "2FJMkBcgZPDGiCPGYQuXQVkj8ibBeVTDsBr3HixGLtcBCJXqRd7TcC4Kwtph9eTJmWEwp8AoHfWv4NgAr9wXUN77",
  "key27": "3sh3KNiYEZEdRZ2tkYgEgJsrd6YuWQXWhtNiADDYf7ohJFdNbZZ7HbrejCggXui8hh4himbcM2yPUmZarPEpHTzx",
  "key28": "2CL4wfqCNdxEAEJ3pi1wP9vz2uL3nAGffpPQP7BcGPcQ88bZDMXq7BLwpZ3Nfp6yGW8P8R4xM49BGSs1pbFfCxRk",
  "key29": "5kALTdfz9qzVp1uoL5PzcBMLYLBhtEkGFMf3eZq2jFHk9rMP4hxyyqV8Rdow57WgkamWSHT3BY7hor5o7tkqYFnW",
  "key30": "QfkexFcSLspuZfyJWNDvLMTSV8z4zmgzTsAwH2cuniLuo9s8CXYfPzbsz1rDf1VXmbaSso66xr4PXfC3ULftGRJ",
  "key31": "D98kQzMtEZdGPj8W3mtXHoy1et5NXKR1xpyx5Jfx8sJhJsKwUwixMvGyyrHn5awDjf3eGpNuTnZsEE2s8surVPY",
  "key32": "5gf8eH3immN9dK24c7eLywMdToRgbHv9LKKpe7BXVk11j5xtS7Z2fnx7XY2uEvU4BJg9jJNW2c5Hja1sk2v5mrrB",
  "key33": "56PYH9rRVirAXBSUWJVg55RGt3xhDZoWnv9tibCqMFNejSrqvegyXL9LVJ3KYnsT92XEkxk5TscGbjntHq3eYbnk"
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
