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
    "sWkmWWCsQHtAZPEcuLp374re5gUwU4XKGBkQCsTUUiL4eRggq34aqNqZWZvrHrMEZJUinenV44wzzrxN394SZ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8RqKevQLhhru4THCEMJv26eu7RgoSQZgembb8UujsAa4myHmt2faKXyS61xKzuGnK3KZtEmmfNBcuMeW3i53WS",
  "key1": "4skADUUNqQYaiQDd5daCHyvjZhiVV5WG4imHJ29bu38vqDE8E65nwRpsBzTwFhCnFY33UrMH8J7edqtwZvYMAnP2",
  "key2": "5L2Hz1fnGhpLbJ8DLXZCGUTznGjD6hH94XduwJQJNfRRiqH6noyPCAGzB16zhD2xtwy1dBE6WkGP4uCNYBMxehkM",
  "key3": "4SpB38YM8fwGVQW9kZTZKK1o3e6iYPnGo2kPLbi3zg6ywLtym2f85jRkg5YfHtcnu8yAEsNddLBvE6uHD9eC96of",
  "key4": "4JeX7S55hGyfr9ba9TgZL6Tvxps1VrmuvksjfqUzQUurT5oyUcRXGHzw2QsbkAXPedZ1yjRzTALcMHTn17LJ5dyU",
  "key5": "2KcZYkyM64ER92i8hfaSaLL5fwgod3JBvXdQjZcXREvxvHtixvFBWURc4yMHAV87jtbEMKu3btKLzfMuh35Avokk",
  "key6": "HFmQCkMxpS2YsFLRs7EvNWnNquNcoi7A7JJa2pcdV2L1aqGdsqh5oYHVgXg4HP6g9Kzb6RfyAzFFN4tcKoMfq8W",
  "key7": "5E1pyogHPpD97ALFe6A3FfJKwUy5drkz7rWdk8f6fbZVPVBKgv3aVjU3DVqkH7bMtMuvoGMfw6JoUkNLzVcc61rj",
  "key8": "hzS912YwPZWgiEKtgcR922WwoWgSFKiaDJvdn5J5xDujq4jq6DkqvxMUNh5oiwWAPqhg3LDdPP3w53YSMUFdRfR",
  "key9": "3AC87ANVsZYHvdSmmXjupkUJqz3wFXkYqrHuiSAfXUqJTAdnQfpyqBtWpYmRwxXFYptsAHZf1uFBTDRpyDoqmrx",
  "key10": "4gs2SSHWqnhZMYTcePwZ3wF4rcFUdr1KbDHQtWyZQ4dpagwcCMAkHb1Mr4TrHc8SVRWzWKdM5FvMM2f9QvDXRynh",
  "key11": "3BCy1x8HPH5A2b46nw2mwNXRJmZCdqkVoN4kx5ZWabQmB3TSGaiwq9JhuC2yaaVzCDT5CUCbbpmBD8xS9i6ATEmh",
  "key12": "fjVpF5scWWm2Eq5RhM3Ci4yJq2QLTmMjtThvibmsBgSZnP1qq1L5A5JvPVeN4wiGJGigTR15zupi6LYVzd4TqgW",
  "key13": "5ZaiznGDn99pMpvvmk2fh47jzPaBCWX9Zbhruear2dzxTLtPkjtjDikVE4LJd3CgHUvnfPffbFCyi9XnWWDwhynM",
  "key14": "3pmtvu5dt4xF9vSpEXu5qyad2rNqSBUVegN1YQbcH5TaitW6Tjrwpm8iwfA5N42y6DYn4wdSWzxPVJecfgEyxCoQ",
  "key15": "3qfJWqY8LySWYhFcB2f5KoFJDAV51ftPmhTdpDoESLksCQ1PrH72tRijyiTzKkRTMJsUxMRZvpLWNpy4W2ZvAhV5",
  "key16": "2LgDRqjqyd9TwBeUvdDvUh4rApBKLz2GJK2qWtAaXYYicvicWTAokrWd3ZCmBkCbWYMSXAA7Kqdg36gJkB4i78VS",
  "key17": "3D5kj7NXgVGwDWqLvzvPm3aEVyBNKuUxUy2FHfikkc63ApybSxefb4ovJW7TZWkZxXzaRBkiFUrGdyi7uhfQvaMb",
  "key18": "ob7F7D1D3FX6oAWcAvSWUEiXYZPxEoBm2WgN3gxJXa2UxoGk22rhg79tc3NAMLMagm1tpZ14dhYTNjpfo8g1q9r",
  "key19": "2VojMEnVXXWrhDGbEw8BWYvxGuU55ZE4SGvNKriLqxbKbLkqqaDnGeaqZdFx4ovjMKqqHsjE8ubNYeRAJ61CHYUQ",
  "key20": "3SHMaqG7G8CDKxoUmnFrqMgmxUxFPXFRsXjeAo9Rb3FXWhKUEP7aktR6Q2sNEaXh5NWjLayZsr1nR2vk92PxTocZ",
  "key21": "4wbR4TpxrmRU37pCVs6N8ceMaGn6h4aqwAGpNtsmQ3ALavbkcJrSmW9XAGFiM6JkqYK9HjLKKH5SGCYtp6vfVjRb",
  "key22": "5gRfpLB8Z5FRzJH7bpiGvEwdBQqECUbJxfEQRmBRZ15eBsMXaNCEs592oUPTkXs6XyGHUV2uAZ4TkF3UT2qAzdsz",
  "key23": "67RdrWqpYALz6FfczFppnsxa9Lfqft4v8UdRSbu9yhYDbS6aZpgQqqbsrWempRo7ATfd5JykREASixsMv73rG8ww",
  "key24": "2nFHZBwqfTyjmzzrpmQzLjMini5ffauFC5tCymWXQsg7mu9jhMZgrq7iKHtCAksRTPPXBnk17qEACnmDzqXZwRcU",
  "key25": "21t6HnzckLdgtj57DvFi9CK8kGMUSN8Sm4ZX4Z1sV1XEw6EgZ4rMJUSXDGwvDfvzUCU9CP8GudyUHyCSX7zXu2PK",
  "key26": "5poCYxQNPatcJVGbbRGQMJPjorhjg1Jr2VjRbpefrgj5AdkEQC7LTiDQkWCtRvCdmbfATguoBVctFKx7hYzinFNh",
  "key27": "5DxJcdjmixAr5K8t8oJn9G9hZFKqAxXx4PSEnYGQEFEPo6CdRnyBTz4z7JcHcNH4Tp6xruzNpvY5gHdpfXqqyfTo",
  "key28": "4JQWqyup3EByxhr7tzXsFky7dKB87Xys5uogGy7johZfz9qVCTxbzqYANWzfdaZFLHMncsyv1Q2oKmQSaeW1MkKF",
  "key29": "f1zpHC7xomXV2rzFBUpPa7gxythj11akZrzRoHx6QXQAwXEt2StwqURM6VRKtGm5caitrFGQuajyGWtVW3xKg8g",
  "key30": "3BmYLXefwvwr3yhwn5m9y6dKi5cB2to2s7kkRJCkQP7Vu6siptbN1CEFvhgD3LDAozhsiC8mGkqVGUWF1pT1xCbn",
  "key31": "5szQZ2ukrEp5kVyVjTDm77tZfhggWti4cV7mcHgCG4ReJ92TkeZkWMUbLN7F6KX3md5zRKKRf9pPwK6H2wuiwGPT",
  "key32": "5Zh4RpoDDc472xTZ9GDiyQSgfRB5Fd2CmGckZAe3t4m2vE3WSffFRpgJdnyjYqdbkL4msCBKGEZy4KpbhaDxmgES",
  "key33": "edHQxqZ2fusxjziARutC596rJDpsSMLkz9j2kjXJjZ11d9ZosL675rmfbz5821rRFhg2RLCxkz5zjzvZHmNKuHx",
  "key34": "4Qdkc7j1QUWnTDzUm4DdX68pu95zmYM2XbGLZm21M718DvHS47Ey2ztatQvb1tPrix2JNch8YVbDRKddyMcmT56",
  "key35": "4t6FJJonyEgPp8hLpehFc9Mt8XbYVftDZJzENuAwApSVBQshAwnp6osb4ZXYCpK5jLoQq2dsFWgurgr7t2XYvx7P",
  "key36": "2pxJM6WCRXrHZUjrHMNPxqn5YgLnDK4hH88aqbVdRV7amuvtpP3iukUdSwTXPfPvo4KdrB1BRHfDQBLcQVUTCy8w",
  "key37": "3g5iGUNZNLv9oLL9Vvm4wjdGR8hMRTQ6nxAfCNgd2DFnNWr8kBLKS6dJa2AXNYAxb5yAhP6TeWX7LBkKque6JZzQ",
  "key38": "3ZrQ7qzHF7F1YbPQT6pkBQuxxxLiAdvu1tmg7pWN9FepSBDS4oPcRFjSz7P38GgbVmV9pCbjzWKPmVUykuxKVKBH",
  "key39": "JBiZkGuT2xiGRnaShwRgH8pBPrcXZxr3ea2JBuLsiKZheE5MTrHALGTHK6PDWnj52PPzJcsUjrF3ikghFLUKpPt",
  "key40": "t1iUPExCVZFXma3z6oBvTBzfThUWmT1yvZc5m1R5nEufogPjZQvPWj4pPQsdRMaURUZskF2jU1CPwG3yM8enaUT",
  "key41": "3CfZC2bDxPuxGnY84aE7bn46yMxCCB7tTrAmFXjpez7E73GnFb8tMG2H6SpTNNDG6LVgPUyKJrYa5G8AE3rj4vXa",
  "key42": "4bcagpcjkJFJxKQMxomqATEDndBYtxBsGqCnfr6s4i52Gdz6z2GYZKLZWLRx4qA2X9VJ9KwzBdfh6V9QyMixY8AH",
  "key43": "NyW9CMbezv1rbEwvJX39iFzyDqrPjL31Ky7Ry7BHZ3DJKqiXtE61K7Ujki48mRVhnpECEkA4u6Wzvatf3sufFZW",
  "key44": "4pgQ5RBKm9Hkjw9XY67L2n4qexWPfG4WFDeu4P4cUzXA7hD8ZHrbRAxWQEPLxq1APk6iSgTrVEyUPDjNdc9x7kFB"
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
