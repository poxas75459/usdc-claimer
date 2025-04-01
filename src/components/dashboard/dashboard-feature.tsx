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
    "vhXBf6gNoq6nH6RNV3n96zt8Q86BZqg5rapYm41T5scQwwnrf54ypMzGNDZYs9cxzA6Py4bouAyUiEzWw1HFm2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGUqv9zSXpQnQaKH5JPYBwwyfnX1VDqCSCbKjdRF2EWnzFqBRipzHvYGnBHLCRHEhXRxPRnCZC8GubzbFpuxLQs",
  "key1": "4FyJ85GBY5jTFfATvomPJMzJ2gWZQcAM937Ckp1kpTHL2M3ZGqad3iH31VeUruyXqiuGWMSARwW8ukXYS2uefgdM",
  "key2": "nQxYK7yVrucXrvbXzJQZrL3yBSbKRqBZHS4tKF2DRt36dPtXspKWpR5AgzY4vNgzCKetJhjyuWj3wrLosu9vPdN",
  "key3": "5LTuQc5CZPf2GJFRJxFA4fHP3gkwPAvfsRpVe1kT8A96dvuDXdyekr9FJ5Zd83peVYR9CcRccVjfuGe8MaH4k4ZX",
  "key4": "4gabyxGsccvMc33UgPMRWU2XUBK5b1BmzhGoZnCPAkVar2vU3b26a7ruZawjSDRvmGyXqGmesvqkJNZBJrzwmqd3",
  "key5": "2W6pCffbZngoPwYLkxtTwyH9dHeDadd66wJFKtxDG7ZTVXxeXkxgn8ckN4eF7544Gk7UXQ8nG1c25tJvoos3HiSc",
  "key6": "4NhYRjuBVDK5RSY7m3QL6w5XwQTwzRSmrRihkf5cdAHqYLsw36sebb4iwbCRQYEr1sfYzZWGtYjeaEDCmMfAbUTB",
  "key7": "5TD2SFhinaW5x2fzrN58QzPrhPssBHG2ECn1J5UmgN537o2ySsdvtk2Rwbras38akqdmAQVvT4ZAZfEpf279FiFz",
  "key8": "5MFxJ7CT3Sis4ornkLkdRsUScoK8g4gpgYkGh1XFUDfxp48dx1DHqTPE2BQ6fBKWB4sBhiSwddGwDJcmg2oZeo7C",
  "key9": "2X9MgySUSDwr9CuFkw6mGiSbSJfRmVWrSDsFMKiteoLfPkLtof8cR2iLLXcvy3foctBgHedTPThnJ3S2XFaigVew",
  "key10": "2R3gBmH5CoxfSmMkedmNJDDsuC8AynuaKzCDTGmZixUmEypNWckezYS2tyn77mWjTmAndhqe3XBjiwzyDrPz9gfy",
  "key11": "4TDYx7sZErBnBmFubZzvj12oVDg2GZL1tfpJUMKiwWnmmGWRAqtAo6hPUcNvXmXgZc4J1sSD788NNhC4W4YDLVgB",
  "key12": "2PN1HNxcYyYp1zrwhZ4xBBx3YmjcRD6fdg8KKwPzhJbNqxTceWweRj3BMc6acRZuxkXPxH7kuwaaj9ioUh5RejVe",
  "key13": "4NfKLqjrDGd1a8pdjsSqTvwCADruH2typ7phtXZsXv4UTHLGCFiDFZRfgoBUoX5HN3D1ioF4k85Xj4e7cth856hk",
  "key14": "5b2mT4SEJ2PGVghwayrsyVeojzu1twb4iQqHHWXr7puLc76r21hiEhMB5S7TkSpo12SirvPL5UbcBGFdYXZkWAkH",
  "key15": "4mmoNiyGE4AmQitZg95D1YYeFXMBRKosSaSLYnavdWEK6b7Gqie5nc8B6uDEkpYLSThRPrB7qLHGBp6EdRfyMNtf",
  "key16": "YiQjcxLJfagcf1QxKftC46k1YtVaDB3qeej7dj3Aay9UporYckFFTwuvXJvC9eTRcp9YMfuBPBndB3dv7PCRThC",
  "key17": "5b8MGvd18cXZxoTiwtP1o9aru6vm2hm9dqPwGBipqjQkjMKqEMoYfWx4cxxHQtrmfmW1JtPpkt4mcak1cSv53Gt5",
  "key18": "44PGaMj4A8N9bZ9ooGGKUdTeQTHX9T7ZGZ94w3ADH2f6S7KFWJLjxeohALrLm9nG4dfZDBE1HYo3bXnHq8JPdSkc",
  "key19": "5dmh7eMdPyDDvN3Ui6PEq6kEAZ6PUHRFnLSKzBWEy5sRHJbxV2JZ4EkEFR73yVaLpt6iperyhE9qkFM9cwPkqymJ",
  "key20": "5s8YadUrviWVcWF4npULFJhkxibHcvy6BFbB2SXfok2FR8YvvTANXxh5t5MVGnhRBsqBGiaG6yetx76YJNzJwHwY",
  "key21": "gTu948wYM8mj97eJc6CtSEaiQKHdM7w6yk9CczGyEsniy5ZkRsNZ6cYAQQ3DaNRzFHSEkJqWHvKV9XxRzCPYvi4",
  "key22": "4nhM3QPa8jGomSJpQCYpimsDExtnBJhDhD7WKSnmzQbKghoDcuQMA7JrdqPujZfp6FY6QDuq7jkzs957ygLheaKr",
  "key23": "39XtCYggJUuY3HosS3ARp9oYnzvp2TRCV2wwaVjeCEYBL6rPnNRLrqayGErNGcuktrs4TsivQsdSyAKAYWnVuN9M",
  "key24": "qiZu2kvgrpKPSajoYCFP6YSb4J4hvfneDdMPUhMW29UsM8RH7y4u9b8HNdGSWoJpPk7mk3uuevyub5NBVY1qysZ",
  "key25": "2yH2pUtns7rnhSU5iA9x4G1j38wdfg3A335PWYGS2HZ8DCDvd1CkMgzwhCFthwr6Utx33P85uMQUuiJGDZiQytcc",
  "key26": "4GJYMniRUcSScu8cjWEqXTWSeH4nb4RM2A3uCcfyF1dsoqnDh5x7aQYwV3cjbu9URikZds51XjD5gGSikD8PQnJF",
  "key27": "4ajijsSyX73asRQhQ4kCbfxTvn9dh5mGj6Zt7Kj7yA1LFu4uWMrkmKDjsSHFKC8LSwSb3J47gxPkX2W8sWaHScvz",
  "key28": "xSi16xFXS7DPLu7yiWoRQ6FZVGjSifFj4TKceMcLmvtHMG3ZsaUkf4YKKGLNTFSSrmftqNq5wZEE9BKmmn3gsD9",
  "key29": "61Lrz1t6boydBxFcAN8mvyudpCoL7kw9zyudUftDACaGv4RmfpJU2Fw72vjFJ9wuHXKwNVfwLsHaL9HHv7HoFr11",
  "key30": "4BVFtNK5mJGneGcwkX8tA9y8pf3QdxXof7W4Wqusc9b5fXaAtLXVGzqDveEA6dGSFkUGcMmC4kKwBj1ZaMqY1e2L",
  "key31": "38rxneHSUMYbyUnhTJzLr3572vJvD7Uzaz4Af5GtuzdpPffrs4CcTNzKdCZp9VDWqakLByAjV6iaf8YcHtP6T7dn",
  "key32": "43NsXnVSxSHDzBmjkfx1UehcFgkW4VuAqqevVo3VLxaKvfTjDFezRYV48e1Sx571DYVWzSy3bnqguDZBpSGVvYQy",
  "key33": "56mtnVFijNZTtZkjrq2d9LnXdaKSEpQE5AtL6BeGhDBmyLgmEMB9gDzZSzZ2AGVbhJRhmNjzqC3HZf6vqtYPQ3Dz",
  "key34": "5Lz3UED5c9PKDYrJ4vQFwsvu2SJhai6MLnzv7nErPNzmUSdVHLb76Y4iEtRCFNXs1rUTBZqubrudvmGxEaAdzXAN",
  "key35": "3ZRcrugKiv9THeNT51C78kGsrFuMwYskbYCfMhxi4kxJQ1gs5QVEoYoT89kZgNkKrqzwDr584e65hgYsDXLQQUMc",
  "key36": "3RWH6b7wXABR66kpnjcCvxBH1icpZK1QJhwRsz4RpMiPgFLk7sm7mTgNkb9MpL3PztGo5i8qmAqxoM9trayUTXRL",
  "key37": "3WRjtCtgYWomsmuBAxoafo1ZtsAGEdnrsq8KnPWbHVvr2RmHq66UnjT2XUsnGqmybasW5MdE8ZXdPVb3ndViai6G",
  "key38": "5V1DMXH8LnPmiLVjNeJ4tqyLD7DgV1989BMQ6XtncF9mKd4DQDLJdfdHsoms9SKDVVyf4TzeZytf8pzMU2BonA7p",
  "key39": "4TvRAyWbzegHGZVaHSTdeYQtT8UBsYPf1AomFT1HtpGqDUP5nKbx2ZG85ATV6XzA7oW9Nsjm4U579gnMRqNomUpB",
  "key40": "5f5tegTnLFtarFzbC691NqV462kZWf8RuqKmAabauyjUx5KQ8bia9jYUmWUgQ2mwAa3igd1gWunkpVeeEaFqRvLi"
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
