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
    "8prwfPQw7CX5fgvFdnWo9JVYUcwDVTuZxNs9A5PnV9hMzJfZbkyCRG2v3Z5Uh1WyDi3dgW1Gvf54F2RF8ichTdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4gKkvmuiALYgGfAkocRfaqTwawNndCXgpVeWeLb3VT5HvCdYpPV7h4EGoXCk8TbuZd82pnNzK2efLES8fzqkzG",
  "key1": "2CAeaWrHz8sJvBakTLkeKSs2oCYVYff9eZtpDZY8S84ScoF6g6LWvHFEjvNXPEeJ9iBxSLStkmWCPcBogNmbwzVo",
  "key2": "2JvCAWo58yFSe9xDwSoAtvJQbrFyUR41V9QYkwiSrFqDa9ZQGiiZbicTxozp8Txu5oSHTVfnXygge9k1f3xQfEP9",
  "key3": "2ZU2Cbmv5o2Pmx1iywq4jEa9NNvB7nqV5qhkAqe22zgtEfDZqvQd2tKbgMywV9h6VPXgg28UfKVx2j4HvsxK2BJE",
  "key4": "5ZSbErgrLHWQNhS3brMHySGrzh52MGejwU3VZp4feLaRkYENbgrWH49ANDKyZrLkfjVz1ScJuTni62Moya6kmQgk",
  "key5": "2EtsPKxWUH3PoWBdt1taRTBMjn3yUrVX3cELF4LyspRN37nEeJJAYFC5ZEgox74MrFsh4Haa6TTCgnX6G5md81fE",
  "key6": "31dNQY3uUo2S9JJvHyFz4BgTWdim8E4ZWjH2GY67zZW6tdgLNApvCfwujA6GhmDDHkCPraybQKWZ6DCVonz1RsqY",
  "key7": "3KA5RRLgP8tbm9K6PAgYtxoN9XCBkBDLDXns9YBCCFy5hVvnwiEHaBos6DTUCEwe87B7g5rR4R9PZdmJTt2FHtun",
  "key8": "tV4UeaD7hr5uuRdwWMfZNAik4g9G7wpmormDGrrnNBXLMAiQ5z93v98M8q5HHXdDVs8heTfGThPGN5kEWtTsumf",
  "key9": "6KXA5txJaptiyNgSAEq8eBbeqaJTaMTejdcqT4KzDRm5K7yAhyAgyKtyvacmtR9SHZrTCNVhbf4gCqQwM2SBDHu",
  "key10": "53tLkRneDjFQY5HQ8Z7qvdencTWikcchhDgsDeDGatSog6HKQ1V8DFzexxQgwfY4JkCEiTwseoHbvVXmV3vNHfPF",
  "key11": "5Nu6RbCdijstwCogVtsz6LeyRLsixuwgLsvN4REJF97E6eNpuGbYFGoBQnxRRZF5xdb5WM1ZqMe9UbvLnJ11sSaQ",
  "key12": "5nq4X4qjigDYhtWBBJ5eQhEZvjDkghUHB1Ekc7KLP2ZUbCUR3XcDf8jdf93PYB7MS4KNKLDQcJLdbco2sr3oHrAM",
  "key13": "46NHdovvqFLx4RAsvxsdvf6T7eBtqYa9GC2AjEQauXh9467NxntBKjKYLvuyznVWHW1sAgNmXym3HcGhJfWnsWdZ",
  "key14": "kqSAJr46P6zSuF1ZQoWQ2XsZtqNkXcCkf5ATizzP5ZVH5nXbzzhvYKWFMEDzcW9qWUA86ZkE9hw88kek6m4n9D3",
  "key15": "BTdZZYnGYoqWM7f1xbyYXGq8X4U15fYUNNoDXfT6v1xzNAGWTEXiP7xMS7SkDZHoGUS7WVEcYW329MtMtkidgTs",
  "key16": "5hw2DYQ9Nsvtt5EKBKcKweWVkLZ1dE3NYPEpspAZm6ZTQD6VvweqL7nggpAjBYy7Cao4zTUs2Kwq8oLLeeY9r3vC",
  "key17": "6436n7hjnySvoATJi9qUXL3MQv1nNtDv6DAVAm6wBJJ7pq5u6n1nH5BBUwLsSxja9ZCWCY9T2VpjJgQybgRrpLTw",
  "key18": "4ZyVR1ZPwZXKVZ64HqVdtNEB1k4g9KGoQe9Yi4hiTzcnjucW4o2Vwk7wYKB4WvVoFw7sag7dtzgs5vasPvaZ6Q4m",
  "key19": "hmFGkzz4Bw5v7D7cjGNQb4FgiGs4gKp4ZZ69hYx3as1emGpyEK5KLk1Tzt74GgQtkuhE8YmVxmMC2D3qq1qrH4M",
  "key20": "27WvvsWA7wqq7dSV5mYet8CVNpxAh1CdNWnewBaUvBJPKxJCXiUszo1Z8FfFo3Kk8nZVWgEBJLTTR3QoHwD1CGDY",
  "key21": "5r2CanetQHgqsVEWm4vTiGnbfPUFpinUQc1YxuqoaAL2gxRv17C9ytB2U5b6A8My3f5NZkDvzmGNX7XyGGKd5dxV",
  "key22": "4iDKU9GutNXUR3wbmVxv4dLaaP4wwteB14PwRfuQekCbowZYSvtrR6VGyCAih1QLcUEJMChjBhaCNrsKvT3Zytof",
  "key23": "4THPKrvxsAuRHBKWViPNfiwQEGAuEtgNHKEgd3HvBtuQoJMBwysPz9HFT23wM4pBPehzWhuRaXLYcPCAffuFVAmt",
  "key24": "21L1HNxAnvGgGuN1ewK5iAjGHgrDL27uf5nTtFDUYT6DpbuFCzy53e5ScfyMBMKSc9dA43ZYwtS1dTiuupKjY8kq",
  "key25": "3Tkvpq87JRkuv6mtky7Hsi3PfxNME1vFkQ57r22Xz8t5ua55EV3TNPVJ2GRA2a2CNhEtm9t1VhMx6bATMDFtSPC3",
  "key26": "4He4jCPK2koKEFs43zdzsfUEWzZeSbqceZvX4Viqnk4UHG5YruGcCiMu4wkuK7nvHZA4GEFvpcb5tV53GHtW3fqs"
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
