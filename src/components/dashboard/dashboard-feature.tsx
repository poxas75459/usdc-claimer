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
    "2hdAGY9bRDaVLPytvNG3rnat1Ya1uTcgUJLtSEPGpqdiCwRqYwnY1x4ZUZw6DqiaJkyJpeiJVpHwWEpQimmLikiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHoq3sC15ngnxnYyipqycJAQYa5Eqd8dn1LHJYT3k1humQ7sGf9HE7cN7C29AWioD5usm82eDbMbcZ8KgYnSxFu",
  "key1": "2JXEh6dfmEYMrJG4eKKG65cruoEgvFDfxiBam3NK3Qe8JJjHKBo5szyot25iG7Rho7HEgcx7weRYxSbG7z6F5BKJ",
  "key2": "48XpUce8HDdaKBaHtYjcZjdY4qp5s86zNU33RKzh66Xb72K9ZyifZh9WjX8KVoKdidx5ACYwM9ZsZTgpTeybu443",
  "key3": "3Udnf4vbgNCNGyBUjH1FZ3EH9A6EMcaDu6HzwkCivdnjw4AqUgHFzhR4YfMWxcURyUgau4LFB35LUng4y6EaSQJo",
  "key4": "35d9Qwx9BZiuTQFxadMJAYm5sp6DhApnS2Cmm7p1T4RA3Ryoa5RbLATP6iZidUFyz8xgGSbgdrGTk4dJ8Xxy17oo",
  "key5": "2mjM7rv7UBeRCqodxXiJ5NX1HDUkQWoonjcthaZkAePg3vGFYDXAgVxRFiuxZaqHC97QvmGUi4291RTFLNMLGHKD",
  "key6": "3BrcaDP22rFvNgZAhGyw1BU3kNzHgFwYeZj53rvDQj6pAR4jBZrX3PQ7vnHRkFBu81r2QKaFop19LWDpqdZLzTUE",
  "key7": "omNGQDhBeKwCj1dwDm6Yvvym3aVDH91nCehccUXYDMjVbFakXVcratsPgWXqCtZzQ6oLWRRmKg7k3Bee8Q3PNzV",
  "key8": "26gj6entdX9ZbpNTv1DZC6vi5h6UF2RhMgq1o85TLQELt6fw8c36ydLQJf6oYjQpcnTQhmAU5qTLvuBthjniPoXW",
  "key9": "2pAiAjYDGWkeX1SWi5gQuv1xj6v2PUjkk4KcTFmqaVYMJyB9mtYCaaXswsu5mgyo4RtVACHuSHhEM8iJQ5GvHsgS",
  "key10": "4wFqao5sEftSNxCc3vmouDLY15g5prcCdQSTUmReqXjrjqFnDHVDPYb9AP3HJcminuMTCWHRi1qYTEeuwJeFwAec",
  "key11": "2ddTBpCGpJxaS94UvGiLRmZ2VYiDWaTL9XPTWhJUYQBfJpYbCriCvj1HqgSWbwu5MHhAsdNJMV4JgVLif5wwNpEy",
  "key12": "51P3UMFU5UJUryf6t1pFxJvWwCfdbya3aCAQwB8xMxK7WZm4VvQrWXpqF3pP2souctocJSeVeE1QmP5eDvrx3Rdd",
  "key13": "2HqqnM73D6ZV5Q95yrLJc5V2ZqTGGS5BFBjnkuZYTsExTnQoUF36fqrTA6fZUekKBcuV17zb3gnFmDrKbjrUBCnS",
  "key14": "3iBYmj1DZ6kLUidxCKoAavu2Y7xnLVCc1xVzYNT6jwhz4tZZG4zWqMiucfghbPoSPqXPCSqjAQgHQqeq4TKAQoSV",
  "key15": "FfyXtEioWPEKcnjYz47FsXyAX2PxVqQPsunqduSYFVDAJJQ4uEX4gVsnzRNmzQX8jDGXhjGxUh761Qj6GqtWLik",
  "key16": "5fN2XtjTm8o8nbaFfcMRY52HzZH7Zdi9yggdojsowjarhFVWSJLiMKGv8DWWxxyQonrXvrKY1LjVoj9hdKeLFzU6",
  "key17": "2nZJJ57oVBi1ZdnuDM1Z6WUcGeUS59XQCzQCw7aAYMokuB7ZuK3NkLVTe9oo2NCAdmmF86T9MQLHUeLU882PnTu7",
  "key18": "2VtZKw5j7cJHdbVAweJN7sjESCFyFp1AT9tQi8FaPjDmcdo6nLfjsLdnZsVMEvf8CTapegh1gLUxJA3uQ5aCvFxj",
  "key19": "2NHSR24U5AGDxeNP5LmAHGQZifmAXx9kn8XNRnyAk8iW4bLuRX9SU1qrnLmhQtMsHN6tzfCmShtc8MRs3QLEAsue",
  "key20": "3NHPdpwSHPKUpm1NwydK2GvxjVUw8rQ3896tNuSKPBy5Tid5v5WgBr8CVTU3RW3EEdCoKVXto7nS7mP3GRzK14c9",
  "key21": "U37nGHXWvMVxq1FCpAxsszFU3fy2MTTNmcWmSDRoNpsoQJU7WFKRPBM1AVMPqFVXCRiEoMX3u8QpYK2AoEMww83",
  "key22": "2MNcivKAD5gBV1CzVLUv27kzqHdjoLVz7qWh1769Zwmdi9N8nqCpsxtumL6Mf82na5c8bNKVaKVzLh5fQAPWoM8j",
  "key23": "FaZ91NgyEs3wbc2CGEW9zEZ2JhxMUqdE1iSgp66atZDym44tSQZyu4oJVfHHx9JKmYSqFQsVe9jd38T4qhPkoUj",
  "key24": "2ExaSdY32qA97Qqbjp4dCoAhDBUQrFa4EetGeo8ToBRztVmDHUaWghY1N9jDtpzwMeV5tzVaMMT1HMchTUVXKbZw",
  "key25": "CxHmgvBU5HeLsUwZPaUZesXLNSLjpFSLcuBF3PBMHVy9nJcugG8pKQ9g3MnEiKnnAa9v7tD2XD4c8texXAdcPWx",
  "key26": "3U375a3w4NafxT6yWP7asTgDNTQmBb3pd1DoUUwBnJAjymvgKUzYD2MD9NxuhHoGvfv9gB6at65UC4ukux9Jy7x4",
  "key27": "293tBKwaAkXi6FtEhYNNuwLEUFwnxsjH6enGTiCHukQyWojPdHrP8JHRVuT9KZxdHdq1GHrrEKF6sRcWcds8xY5Z",
  "key28": "2hepohkvuqb7yMUPMuaJHM9ngHKhpBT2iPoxTJhFLDDZLGCkB3gxWarZEJZAVFS9mxJbZ6BPr6FZrmdiZuUZHv4r",
  "key29": "24mt5zixHp34D6UzPAc45U38tZxe74g37TVKcCs48ujM5yR1DwLD3TMHQtv1EPoMz3APYnTg8XzsyNQ1ZfKETc1t",
  "key30": "2mowUuqL6CbdSGVHJz5MZeorpTTiQs8xwvv5NCWZaVoyuYxBpHmiWaUiD3keoAVE2i5CzgU7wyEmHfaUYkQ6ybFD",
  "key31": "3d8K6vi7QxRC82YGjia1sMWzYbdR1DMc1smCYbQfgQzgEMmkcp8GwUMQx1aPEZd76njeuRDeT6LfazdczNkWqmL5",
  "key32": "34eesfrnLBqkCCMGZydDn7PHdbBeQHbM4Q5PV2dtTsNFb5MkHoHyQKHHYe4CTzDdanYvad2gG6rjGxtuYm17tBmN"
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
