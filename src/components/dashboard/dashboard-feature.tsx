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
    "2somiyZd3oZPdFbcdVs5r7UQJund7qUDJ2r23b5rBih9ezRRxxeGQExTu23YcC7eefAg9Yf5Wr44rPD2jfSKTP3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddZBcLDms3LzSoTWwEoFvLY64z6BoKxEYmaogSUyAr5qGaTaoQQgfsHJD26zyCN2H7uhbYcpDwb4UEA4itrbW5v",
  "key1": "KPAaYAyMQQ7cJNKCAQ5bXErRyNfk4NHAHC8aG1F2hebbosCKRWxK8qBVtqGwtt3Hpxcx8yZaj7kYkfVeJBSVKSy",
  "key2": "7qowkS7NN4GWCPujyqTgSvfiUKmvXejynn5JWsnxN5Z3BqacKx5Mi9vZuMYpMGueUYWj9damJUnZq7BW6Gavee9",
  "key3": "2y4gKFEgFmHEBXeWpy9pTQok6x8BuZCA6W9YyRmFuH3EMHEmCdfkJYoL2VsgM8wnMYEzW3N6X5h9j3RcbxDVpz4",
  "key4": "53DMEM2DUhQvTG9NhuZTRfed4rdRUSKAeuuTpq64PNDL3gGzJFGZ6M3uNbUUjM1z2QSFw792bD7kXaLyaMfsvDbJ",
  "key5": "4HNW1K7ohFUfTRt8Pm226tLJYmxbm5dfqC1HfwArECtNSPTFeb2PAA1zm88pQtjcK1dkNTxM1p8pKw9JBWqZJpHz",
  "key6": "5yuigV11pULdg7qxTk37vyyiSNtLqxHQEU4S8q9GsMcwvrXXWfMYQJCgonBn67otH3i1jrAfcC9WgE89HaGyEpyn",
  "key7": "4GggWKZoTqA691m1PNcgFbTFWuByvGm6Akd2bgRuoFUsZdF8acm7KYgDxNWHNuGxfRgUdR2da7hCsBj6eAmVeWyY",
  "key8": "5yQJp6UaT1uHgNBPzLqjan8phmvupizJvKXvXHTgQgj4tuy8VbwDXjeSP6fSoQp8s9RDf5oaEP2FoA3UwsNX3d76",
  "key9": "4rQ9GpcMVT9yAZUf3yW1Nac9hai1Xds7oy2SZrfMYRk4XRYMVCZjJXZCEi5zwKXuLuxUCJQdv4nWmV9KBLCAWpz9",
  "key10": "41XG4Y1TzciH4HiEXu9yk5ePaa1rfU3AxbwF82D84ZmHmXxKCjeGPeCwf7dexjhggJAaaeAFpbiprrgTAr8sy2GW",
  "key11": "35yWWgJgSPEnNzZcJV8zF1KhTqMgSS9ys5PhJoqvk5YhwERmqhurCuNBm7eEyMKkPxGDcE7CyPXEywFPzhawJeC",
  "key12": "4yL8PrX7G8czEQfCuiKDcTVjakpJhLFDR4XJkE3D8sxSHeuhs9neADjaGRyTDT7A8vcxLH3L3FhwYFeuLv9zY9BB",
  "key13": "RQWEy4DYiGNPdZzCqAQDABCWDjXXGG37GVTHoxpRS39bj6mc1u3vHCekVdyfVmjd7R99bgCFm3Q4sbH7fuyuMLc",
  "key14": "6hEmGKZhakyrVp7kD3nDQyH2rQZ41cWY2yjKh54871MBtPjdtFsjbY9jRYjH6UfE6aeFqyXpaBJ8xA45mNiYpoA",
  "key15": "XgrNjSMYn2dSvAzKJtucbuEBCwKzRzGrXSgp9ydA8iguEQ7tf3vJBZKcmzCrjXXcLSbHm6RFb8KzMtVSQvbam7n",
  "key16": "67XiXr3tViGJJbLiqFmCPS9PLsQN6Kv5RY6VJZSxwsryiv5E55beLqLfNavyQtaXAoVfdNhGuaPBiHPPDoFdMpYF",
  "key17": "2dRDVHgAiv8Znjjkd7ctdDpqXWBQ8tMd1LMhbCHdTU1e9DffGJCunSg8TbV7MuLgP2GjWpRQ5mjNWEeCLxz1xxv7",
  "key18": "4Y5JfBkLm7FRGaGsX4CbiYgQkBxH4LRKD9nTvJn8U8qHFnMAXRFV67c2Q2g4RudJnDnHKeBm9Q2c2y7FBVCp1JDj",
  "key19": "NWuDKhRoy45fr9Sg9Y2p5MbU7gDUyLoe3Xdd1qt8PYHhP4vGDopxXatwsvjNzFf76mLuCxSa1Qg4cckirmwVu34",
  "key20": "24kGszBYgUo4htMqoAMtTcCrow2LahQvn4JYETwhxqveuz6mnikdt7rgMvnBQntJjnKCvowAruMAhrW7vGso7Zk7",
  "key21": "5qPNqJAjFgPvP8sVTftokrHkByA9rXTYUDEM2tvbgoD6ZsnBNjR8dK5af9RCcYNM9VALRein2ji38KW2eVW6JNYH",
  "key22": "4bPitSm2TXTgMYNM4NyNwXRSiP22ScdCWu3eYuX4VRJHNh4gwAJzx9LoCpXwxKbUC3BDnfEA1LXeZnGNHPbjqg76",
  "key23": "5nfyz9AmHvsKmALSvpQtNuqqVnMJxA872oW1tWaeqQKWwpR3gbmeffPWxCmpNohyffey19JnMeWm6usHquMSBanT",
  "key24": "2HW3428WBH3qZnNabFJgQr5AFLCotLouV7nTpvmt425qWuoLqsdeCKYTTr4mnm4LU8wRVXHKSieTr62LMNk91xaf",
  "key25": "5C2jTEDBiEeuQHnrx4nwKBAKRSEvr4CtqErazjNpfCbWuTx1vUP8KLLXb9eqN5BSBA2WCX5DMRiRZGStTPEugxGq",
  "key26": "4YcrFq2zAqtg1WRTVmxhYA2TAHsvhkeX5KmeEPFQBuf6P1Q3GX6pbYmL6b8nZPdVNxk9TbfA3LNMDomex1Fr4GWv",
  "key27": "5fWJuSnvcEmrGrCacy1J3tPoeSn8gBsHb1h8u8x8N1v9ELQSVXG7XyS9DQAxURnxr4f9r6z45Kx1ssJgpPv6Avq",
  "key28": "4ZQAz91hE83xMHusSr8VymCYSr9bMRE5AjKt2RmCurtX7DWLK6pfiG2Xr3Mmx3kxYoBjMrbWdnhaPk6creuxyEse",
  "key29": "5M5Q9MnkSDqixaim5v74TcsYdedaJs42ELUSdYXFj97QN7eF38618FSGeVyPrvTHDxMyPFPVDh1BiiZtp92bu8Na",
  "key30": "3feCi5EmrfA8DPsbNxGGkDk9u3tSxhTb2PVcapvNFtSv4ZZWYiUWqZZS2zVpsczWpuSkG9oSFh2i52rRpT9ZVV9J"
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
