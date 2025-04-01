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
    "3eX51ymy1ggzeFHPNLfYfbYWVvypi8JVFnVsgmSeEuEfMDv7cFuKEJ98kjBnaZZvkJaWoiwrLTVRK7QHvLWhNeih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jx2xDoPiEspXyyACTTHQ5Xd476jRfrsX1FDBaLbnsyCSLEWQB4H4dHixJtvxZ35iop6rUV84wcdSQUKtWUeAuSN",
  "key1": "4NUdn8RcBRCwMXt34yFHQ1k8oJE4McF2FX3DMML1UdLy6cJiWEcs4C4Fzy9FGJ7cCFNwjc7dzJmRc9f6JcWwmMrW",
  "key2": "4wccetWSq7AYDjMn7dDfT5BnBGLczf6RHZgXSAWtQ2J6pKcFFh57o8EnkhjQYwcaUD5ig4WSCwBmY5zcNjqXjb6D",
  "key3": "5eaA3pGjZVt9vE3SJa7TuVsrBKxtBSak26imDb6qWuqCEMVLUngy6FT5VY4ruKPw1iGMjkGR6AxZ7GXHCqszXNtk",
  "key4": "5DH5A6iJ8nPp4AucsfkN99HXaaM151PrfcWy5XZX5QWxpHab7wHtofDh6oAMXm3PoQyrvHETU5SP3TdHgCZzVH9q",
  "key5": "cQdn8dHdWDiSzEAYKVxTpfwsNzdPwxpnhqdR2AGShDB3qzknvT4j9zsLVa4c5hzXX9b2LRFG5JH6PphEjZzbAQu",
  "key6": "3qYT7p2xk1YqfDCnibbARw2up3fKRSQ13GqYtkG8Rd72qQyHbPfT4bSYkpbCWCkZHTTNWWbrQXJ7jaG1A62Tribr",
  "key7": "QTGjCaa7yQZiajx6E2Q8aosCQbGQftEcZxExMg1ZdiiDi6YNnLiExNzQ3nq8pPjQgprvb2uM5jMpTre87M88eBL",
  "key8": "22H7Uu2buBgnKrB8WGBENq1B5x315Fj559ABBQ2hTJzhwTCfnEMLgUAjcAqAYq4ddPqRuNAT4rC8ZJ1xN3MLfvHx",
  "key9": "3qvyiGwbb8egU1TCEb44FdkisNk61x2CwHBt3mm65ZFqHs6vwoYkY87xawRA66cGVNPvTqMMtKYf5Z325AHZjNZm",
  "key10": "EmDtnunhkzZsFvcukAjBeNvsGdp2SrZURoG6Stz3mDYc9dzkdVRuWyZBiwEK2P8Vc7QSTQ5qRoH2S2hu558qjVH",
  "key11": "2bPbiLMDSfYdDWrDfAhEK5N1oXQ9f9gYcx3zkyg8erDLVXViRMrURzWq2iCTub7gXTg7mYeH4t2oFeJFoGLef2y",
  "key12": "5X2fzrCFCZtC8EXa9cGccJenjrf2hvEaMUsh1KyuYQX2AoqEVwLWkQtFtvLUJR8uV7krQhfKEDQec8Ek4Tt3NzRH",
  "key13": "4m7robXJHE9zWcLt9HMB3CqmivUptBf5eWHp5qe2b899rUjhej3UCXP6Eg2XWy6NYEvA1vVH41EWMeY5foD8BaVy",
  "key14": "4AUfuHZFTrYJKB8bV8CCKhd1129v6n3u7AjNz8RGR9FhmPUk4GK4dPzqzDtrWvDiNdGUEqjouoeRkuDtUJr3iEPo",
  "key15": "5CNnJ72p8UzAVSK2FMZmVKMUUF7ksyvBiLPDEqQEAGmt3cWPp4xBvPJnNhDzBybqAS6LDsV8A1UAeFwCEfY2TS6C",
  "key16": "21KbDHRZogkSpFD1pfAWJCJ27iknbuyLrsqJ5u8yhdhfV5fveE9iEF6C3AK9DxbrFamJmR3KbySrzXXkmhy35G6u",
  "key17": "2675aDkQvxUQRDtXV7mvE1S7J6ManaW6YDnLij7VrwQ7tYutJXmCY7oeZhn6GJWHxvRvUnw66QbKHSGtSjMzPexL",
  "key18": "54krR7Ggt1vpwGVdzZftcwsRvVAec9Q92YVhWnqivSRXddd3kKu8AJ4aqBGqG3gNspoSGU4vM3yHYo5Q2wUkFPoL",
  "key19": "1KomzKLVLABJ3t76zCHuBSkL91tJjAdfY235MFpzFNbwAaNCqnCFSSD1CpUc99vW4aEQdnxX8oYHFdACjhLDMVX",
  "key20": "5NcTTzCCZrczr5RY8yuWdgAA5GLVupzEjR5EvJBRcawGNJh6Y953moQd4WSyqa58X45VnKVAKF8zExKsD96rfB2j",
  "key21": "m7WNJys9ssUyf7ZNRAyuuD3GbYxA4qSubft2LqrR16DzNnVpiMFzziFGLcgiXqccsRtzE47DNEMsMbcZvAPQsdJ",
  "key22": "4fSzpN74AJDTvqrytJfjqn95pqqdcaXGugCYsC9gNUkZd59WPnGhm4GZ4HyXuMrPG24tihUfQBUTC9uQscTqNJyj",
  "key23": "4BLQujp2k6JjG65ZEy5RMm2vr7Nj8ah6C7Yh45QKD6bxvCQ8grKyJFma7WusBDDN9pnBmPwxxjmu9PX7AXMi3EBD",
  "key24": "R3ERujki3aziRhxrh3QvBifgnbETgZFqYe9KcJUZK3ayMKoeCzgkKsE8s5VczMPjJA2a1Xkzy4WVHL8JQGYBQmX",
  "key25": "2gnU5tarAueAJqqtfH4P7Mwgurg8hvrARYjb2aYq3YeT8crNbt9CExDpq7RTqffbtqHXRHVD9BW76j3hw5277teL",
  "key26": "EF9JQgL2D8WAAEpEovhKCzWwcwc5noi5acW3MbX4cFWcFmMRhezmMfKTEAY4KEcbXbDWT5ciY7TZhHy9S9zDarD",
  "key27": "3sRM649SJ4wgqRC9mxPwcZfhhAKBELFRvjzYPaibTRhv8CGvzL6w547t1W32smRz2pG72JoxZ4Cif1TuWQiHmRYx",
  "key28": "25jcAKTqYobD5PJjTMvhUXK2tfetQjZCw4swHjvcE8VYWy71cLqksq2A9QE6jonJSSonxc6uR5a1ug4LKexUHAS8",
  "key29": "5KGxqdoXfLxHwPjPpT5JZtShAKtWgPiziLMHaAZSZQGfEcqetUQxwX28rZBfvqMo8XXFUKCtY7aPqSweBZ9ducYK",
  "key30": "2TbUoNn5Dr2ChoNdMAkHL8WzRZXzfHRgVcZ3v3dmqJBxtAhMbMnSSduyCATiHaWeCAmqDF3vYniHtjhGEAuV6LnP",
  "key31": "bMHJEwiaLpHFoMK8RnmGWh6Cx6FqkeMjWAEwWHdp521xZr8zYu2UsMF8W6XhQmXyAL9QNXhQT9RVFSGSYhv33jA",
  "key32": "5xyo2Q3XDGBWAs5b41sBFcktcTzRL9Jy9hxM4RTTbajdyjHagURgy5bRFiHruScrPjXdmoCJVpF5T7jn6ShGr1fj",
  "key33": "4rbqdA6EQvLfK2Hf75DjZnMzDupGc3SB3kfJmcp1rL5ibDr4yYWamKTrHodL8rtk6dzy6BaNXGqhqcUVEHwP56wW",
  "key34": "2wncXPyzGYkbkNHbEVxngY3hHhUM6Cw5m8cWuryiHHMRHF1Pnu8JzdeGgZYqzKNrSNWWBbm8GkTPoDwS6HUjKZa5",
  "key35": "3X2bsqt9PDLkzwNZVQvbsUAoZnknqwSBrJ2DVXS5JhzfydESq79117mMT886kAuujkNtuY16atPLvqhmJwYMKJfg",
  "key36": "y8ZRpHdqJwuksbDooBn6wz1TKEiG9F6u8iRJsE6nWSFRQ7uu2qoARgvkdpPTzAjE66G6pr5u5cmkCZQMUDv2fzE",
  "key37": "pQ6tsyAY9KSTm68dV2Kae95WoU4aQ9e1QbrvoN2PVEUGgN86R69YHnz9NbVpdF4mq7UQcFq8S9YPYiwEBBB5W43",
  "key38": "4CdiGLeqW4fgbEagWuhNfX65rWrRPmHPdU696WDPYRtkbEVKmmi3Z9To5QKgp4N1wf5wotNy6jiXxAcVpmZUvP4u",
  "key39": "5TtSQwJ8Dp39F6JqSVrikqhsQ8U9SRQ57fJGCRrorp4eTg4aMNWXWnW4sB1vVtMUEawtdZNkwogEGEVNmhsa9We2",
  "key40": "4YBXukdKDzcB1DN9uWMQTfbN7cY4xema2yA3N7vpt8yuyjYzDrLZGLSsoyFM1jETb5CWUF8vNVEnPiCWMBHGLjLL",
  "key41": "4eY855d8Fc3H8AjWW4cMYGHA5D4ZutCGzsmE4BfKRSuP4GUY2RaeshcL8fuojEtz7RuhaGHd5StVLUpRRFJ69GZt",
  "key42": "2Vqk2PqcmBwwieyo6WRawTPWgDHHHggZRoazdsxUhkndoFpusc69aheG582mDEAzD2riMUK3yqojBtd4MGLuqp8k",
  "key43": "5C5eiRbjwuD6LRaqjHs953gw1DienaN5ujUnEx1EEJvZcr987BodqDFKkrgXBh9FMhcaagXPY5enTGmySpxrBi31",
  "key44": "4xNskVF1LXkAfvPdvjjMjqAR2z7gydRWjSkrCqEs31rpfZybwqwmKC6zJTAdw7nas1M6jm4268P2byfemHmU6TiU",
  "key45": "UALmJ3b6g6XeryFdBqj4ytY24mE6oheQewt6ycTPUciary7XJtSm4ofnFQ2Jm4jvezeSEJp6u8GpJ6vFfbeJGxT"
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
