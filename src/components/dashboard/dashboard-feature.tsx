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
    "47gdfjTHTq4twCrHuzXZfrqF1QoLL6dbBAKx9GQxiznKKUwLwughMwaVPehvVQDpVQEDXkdFTS88BprUXwHcyhPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjXCXe3rJQdostUvi6SEbMzdSjzZnMgYZVHnjXyWTXB4v4fa4d8vnPkbWqKMxwXboSAhAgn9ovaWAnBbhBMbtxZ",
  "key1": "4hmh5SKF8FKjSZ5ejHsuWKePUaPhApX1egjmUpY1UQqMH7Q8y6WDBCTs4w3hLwpHEph4H4Fa1R33aQttBm4LWjth",
  "key2": "eHi9wb6eE8183enri5giFC8BdvMsSQ6cCRhws5qLpbVRwXVmDBiXH24tR1SpDkAkMMWt2QSkoMChrJEaeK5RxSZ",
  "key3": "5uSTTKboPN2S6sxVrw3tF7NoYGctTJR6XUcUGuEqLEjv5h2uSqDKzt7DSCWEbVJ4LzW19zPTKQV4Lt6ZVJkU1LYv",
  "key4": "67HNrXLoR11wvRdDaMSz7yupgUdw7FYc2bMSVsLXPKx2WsCsPVUQU7U7c4dqNgKH5JxkKzA5LRE61mcnvponBGYc",
  "key5": "4kXsan3ncunUS1KmsxVmfekB8zj7aLjC7oLP5VcKt7UtkRvY1ZmcYvU4fVnunT6ydbZpzUHFUEn8i7FYEUwxJ2bV",
  "key6": "4QjfNCZTMnEZpYh9qPCFXKqsGR3KbBhSCBQt6bfRizgpPFQZ4o7aC3astQFjKqLxPse1SPTox9rvWit7rHXjJx4j",
  "key7": "4ywA5RsabYq4krZEc6ZY9iq3tvGBSj9faATwcL2Rmuzmv1ZDkP8dG4gak84VRKBEBon1nMyEjunxRq9eBhuYVax1",
  "key8": "35Pm2KqtueJ6AJ9MpcLAReh54LThapv3k4XvUi5CZFbaYxEBcvRNoLstj6htVMs5GspYNAp3jzmcagQ2a9DzkLbt",
  "key9": "3iAHxei1WVe3rJZtBBXNJ5keWDvX1XPFz6Eya3RMhnBDbpYS3GeptSDY52gAHLfXURVCGJ6K9tDMPErC6cVRQXVD",
  "key10": "9ph2CD1CyWf1UdgGuqkSuS3g5edJ5eqbQqqmkVjAGWMvZeAqHCs2Gpeaq5XLi8CRb94SaMBoR8nroQ6VsQxyWyv",
  "key11": "4A7ncFfDKhCzm5ptMg5XnvKVUHujTwSScdmcPmLL1E8Zgx2A6gxGFCAmJagPBkt3AEfHVKVDzn7tzD4G3ypGCFt7",
  "key12": "H3xqzPwukpLK2JZqovt4wStwhzoZaBNFufGcKRMkcAcQBjJCxC9aMZnDZkxoWGrDeAMTmkrFGyRYqZq6cTERT29",
  "key13": "46hqGySa1insy2MPQvRQZBEwDih5ZttjyUzCZDtd4QnDfp54X5SeM1YJN92Apx5oFZLFkV6rumkHBAwcCTqfeSzp",
  "key14": "2yY51aVRC9KXVauJbv6C39YifQNzfuJvgX96fD7mddhEfu12BFYDdbt36mfuDb5wg1kp65uJwFbD7XtXFzEZrxk8",
  "key15": "3XptGP2dRz8qPuZxDqnLKNTe3xMQWi2ivgESec4gFcBFApX1iLbLqpkDrH6m51PPWNoSLznWpR2pnWJWtDPSqLR2",
  "key16": "mjnjHMUxq7Zm6ftcuWpaYj3GFAmyYG6cdoU8CGHv7FMb7sLKuAyaLmzGARFEgLCJan8fyUft5XXtuEUhvh4bpJd",
  "key17": "CJ6newsAQFU8yPnudGN8XK14ZuYTfLTzeNLr1u1prxcdMYHSji9r4NX5sRFBBFWfPdy4cpnq5C8dB5VCZvAiW11",
  "key18": "5RhjFfPXrTuVZS8w79rDXjowRmnSQNfMDYh7DHe999BxagSpgpXZVJ6TEeXvsocvn1TQkK2Xzx6ySzEqvwi5a1N8",
  "key19": "2dBCC1rwQn9xdiVfCxbtj9q5N7h7PD1dVRqwGZF5UDB1AeqVuZasEZwUv4Fxbj8TvpUqTMayaHLEHtYBsXytyNA7",
  "key20": "3j2w8YCg4NjnEYkND7BfVXvQHKsksJzHxP2KFTUxsFCunxTV2QAy3K16E4fg4Td1tJTvqZG9SjtsKa8eoKS5Gd1X",
  "key21": "4kkznEL693m1mbQf8xE2kh7fgnPq7dMCrauTv9oNechKfJVyCg35mjKAAixQfionaA41468hV1FdA1NL4dmYkMGM",
  "key22": "FdcQ3BN24S5qebJcVBPmyQXMmUfmPgMLfm2kmArsxVA8L9LUZSngKPk2rECYQkeen9rjowqhi4kS45SCaTCA3cu",
  "key23": "5HKM67hAFX8qUqSgJr5ZmSV4AU9Dg1eLQg2cmQXRETPCTrsfaJXEypdpMo9BMJEPvm3CPDzA4H6S4PZzUa25CotF",
  "key24": "2vW3EPBW3qt4hSMR13TAJz7yRgVw3aerFbCcCktAxGTwAieEeQrpRyGojBuZYE8vtW4pxfmHBfCy7Hz8TEFhB9xR",
  "key25": "3mu9eSbxZew22wFg2dabh3Wqhphkg7ianWwDsY5cG465V2KpU3q7B72Gc5sUi2iAmYgzmFhHLL3eS8PUt4E9n3vZ",
  "key26": "5uJGQWBhs46s14YafUcgrKcRMVJm4gikZvNaVZ6Md88ZDcwLZ1hDh3Rv11xgfmQH22gxUtCpn7Ust1z4kKdXwCye",
  "key27": "4jMQ9khat4eNnuefPW8Qyu9QerPWmVBaovCER6SSx1ZBvtjFyJJCRsaxMk4jwYxqr7VHmC4syE3Lvn3eb7RiMtF1",
  "key28": "5BNcjFPFB36arkdwctwuAnSN3MFdEnoTeE9v41WHNGkszEPv4fav9bfLMaUjd5FivXnJBj2yhugBswchHywfJpeY",
  "key29": "3aa2FVaWGkxod9pv5oEtARZJUPRfGbAxR98EdhLXFZtEG16VcnBUDN39dattHsWNJmtMjta1hQLQEFNo1G4y55NS",
  "key30": "5fiJRWFEFL1HJEfyV5xR73fohDBpwP5K3ESByTuM7Ee9oehcsVqyW61JdhKtzShKJ6s4rBADHCJqEp7WFSRuZeGE",
  "key31": "2Muiya8Vv9RsHKjwtNFTDayfS4pV64eZ2MbEuPnMnq7k7eu6CBhUZXKCqXAJcMgE84CWBi87PhZRzW4mLAjYHMiC",
  "key32": "4h9Ekuz88FrB7Jz42uYb1ho1rTGJskisPCSfW2oRPbFAGWQscR59Aufcqk1YEa4ibNGTiCxHWNjxpYEQB6tomdJX",
  "key33": "4kBmxic9939fS1hz1mFRpNEmV4appDU3BFyDJUnNvitP26syiG5Zr8revnsF7X7wy9T6cx1U5uDrzUojqjHCsmGb",
  "key34": "sHDnnyHY5DHweVeFxGtVUgjnXXiPjv49SHYaqE94w5C9Ja4pthzi73dzbosMNbuuczqAa3ZWmMf4xFJZq6vySnd",
  "key35": "5gPTSxshxUwkz27GrYBWqZNe5SDGHKs6YS681WFXLzFd4JHbeqmHasceT5gqxzctGX6tvcN2GnoXyr3yEfT28AbZ",
  "key36": "2NF4qZioKWhzBdkqk6eY7iKjQawFof7rYRRo52MW9itoygmoYdzDJTRpYDtPXcmVpGVkmuaYBp2oxafDLZe5S3qu",
  "key37": "4eyG6352ZNBiDaNDzQ5SJoxqDt7FqDCnjHhs9w3HHvx4A8Qsi4MNTZUq5T5t7r9czk2vhx7NaBQvywuAz3CSvisC",
  "key38": "5idTW3C88KyULL9YxfgUwCocHfmSQGqoVMDRb5MQf8redd54xoCK1xeA63vRuDk2Em4QVV8kuBgPuWbXAMRV5Cbw",
  "key39": "wVWfgrtuNHj2gm5LvCPq51jXYjhojJ4gfpMqWMfURCESxjH2tZAcY3uKxUdqjRWmGD1RQy22UKKt6eBsSjn2VJY"
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
