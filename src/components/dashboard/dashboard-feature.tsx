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
    "hPN9tdPX2hMrKoEau3FY2W4UJgruDTBkAUTiRwm667CNv6SL8AxpB13YMF95uvWohmqvHDr1zasMMMxBCiYjKCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkjiv8NbqCow7i1ej4syHCfi9zZgszZPiHnjKi5eKB83cXG3EMoASvsEbUk2pLSoCF71FgsicdLcGHUHFs75E9K",
  "key1": "4z2X2xKmyQB7tbpanG8axZQPkyJxBnEj2GSXWatV71A95vRBKM8wzHCCpDa7WqaXF7d1NnvbRuUmVEBfbGPx4Z9p",
  "key2": "4Ft6e3E9aoFDZV8Efi4L2LWtFX8DZ9mKevdTXa4ENeCn3TZs6hFTqr1SakQGXFi2smBkHj3eYfERAAZJMY7dJUwn",
  "key3": "2G7t1j77REm59X5cdbSyrbVzYBfojMX5YP7mBQiZiovCR2dyxXWkG4gPuRuNTmwNS1QL8QiY2EmBQeTSULGfg3iA",
  "key4": "46mzxBev6HYhC1d8YEuwdm85FDxqcGpbybeMeaT5wf4ZGe2TiJjsLAYQCa9mcuBKBy1TVNMie7swnkfXL7AeZspZ",
  "key5": "35JrbKadjSBL72bnnM5P762r2tQN142J2JG1acH4wrvtNN9CTuGcPSygCg71LejrQLpqPg1ihnvD2nYa6Xi1hrXm",
  "key6": "4K4R2RZ8XwT9Uxrsxqf9j52dVqzCbe3jWuDkX7avfiWWvyesm4MzXV5Y4Nz8mytKzAgeT8G8vqxDoCRPxtMufmMC",
  "key7": "F8ZgwGNjsXp59i6yhRbZHhfS5qyM69Whymb5zzcEchkQQpB9Y5LKxApi1PLSMLGamRzedKK4Vg5f7Fj41kRwvmx",
  "key8": "3uEX5XdMy2gWgQHExUsRbHFERwzAFynhzAgckgCTeFnuR7exk8BGmzyPhhLwq8wrdAMGPnBBxhYFDNqFVo5iopQB",
  "key9": "3CcHpzzdNdRYjZKpzivHEW75gGSd5E4cfRj6Efy1GhmcqMn7q17qazE4v866yLtXaqu6UYeTfx5F25GZYF5hQzWs",
  "key10": "kK5ruJ9qPhffT7CWGWXP7DUbKipNAncndAyVnLoSXxoXqDCc2JinxmxeB41nkUE6TSqQjBHAyL3MeYFgwTDD53F",
  "key11": "KM9QbQsonqAqhaVGFxd3KKCJjTQYMx61Cp7L9E43uyRjwGgrxmhuVuEdrA6bCh9eEw55Gx2Nj1JQXedjQsLrHvR",
  "key12": "4bb5Yfnxq24dPwr5Ktu3hn6yvJAYgJwzD61daY79easdMVGxsqK7RAicMHTu53AyWBUt9wmS6RsvENZ8W5L7kEEV",
  "key13": "jJQDSk5M5zLsHwr8WGe9bB7sqiyBJotGoQXQJtYbYPtHdseE1QWUFcuWXri6MXUVzJeiirmaV23CZbVwsHh4v58",
  "key14": "5QuptEBG64z7GaGJ6pwzo4yTyj5Tqz2poqTBCf26euixuPubppYtaw8q9zR2mMMfUeLq4yw714jJfPsgJaf2bK9T",
  "key15": "3P1S57tea5gwMafBazjw1xeYocYaBcJA52jyAbj1CipgpwiAQe1Tb2t94bvRUHJWWPm2yFBzyneVAmbPF8yXSx7P",
  "key16": "63Rb7hBx4QxMExs23he4N5VRqjmsEt2DoGp7uKd78Kf2GWM2WNc5AequDLgqtTJn5P3TE1VHvkywXxRuVRSc6HYa",
  "key17": "2BtfqQYoBFTixySH183bLeRf7XEfzj4SjnmYmsiYX1MAh2yvabkQSg5adDmxXgp3MQ27Xr65NS34JztA8ceEvFJ5",
  "key18": "4qJBGQGUxdNtRpcvVV1PRvr52hKGVCjyQJibzfkZb6kWKpEGpy7kABL82LEyNFqHamS2Z8iycWDr6pp4SwBhCBes",
  "key19": "2dSxoy8RBzC42e583meH5ZNLHntWP3aWCYwq1qdrV34uyJNhmg2u4k1YTem4N1xKUuqbrnDQLnmiCfvBgytzanWD",
  "key20": "46B5MaYVTdNhZgJxBnV8P5LCZJJwbi12nCs8utKR3LGCfV5TFxQ3x9o37j52a17tpd7JuQUrqSCR7EVTpiSqTDpL",
  "key21": "5kzs85XQSme2zDYhSU6KggfJ7Uy4QPLPBkkx5S4girZvupnHr4kAq2qXCDtjzMNPDNkSe4txJGqVGcSj7FJ2X77A",
  "key22": "3dJs3aQJ2xRqKzQCGbYWs6QmV9mMeQzcTeCy69XcDW8Bd5X2fkuG5tnJiFxcPAmGWzYfaP4AqXJefpLG7J1LvK5y",
  "key23": "5SwkmCksw57gGL1bmbjifiwUetCx8oRxXCesoKChrsHd4tCRxcnwE9WNuFQ1iuj8Z9xBcC4y3cM99jatm3YLub5Z",
  "key24": "52qoWGTL8owHV89rYJzVHxQ6LXWXqKKJgxVmcBfELSmAqLxGWdx6oZQRE84K44NCYs7nQZBwPrxr5mnvGRgSm5i7",
  "key25": "5PhbFBAr6TR1CLQxFQQrqRaiv5spj47Y2ZZmap2KpKdEdwvUJiAefDvj9pLWfbTyDPhBTD4YFMtXEhs8BoYs7sU3",
  "key26": "uUGnrcmhLNyxmJuFLC1KG22kSURNRfqH59ohbWH1nug77cdxFoVx4L1VezMoNjDuhioskEKqaev6Dpm6ctiojrL",
  "key27": "3NzoBHgBFEni5KZJ39p9QZshRvEdR9MfHWptJgD6c4NV6ApGiDUoJn2tpE7VMT8HyCXFNYR8XoQDCNez2yzocsH1",
  "key28": "5S66LVF2FzNmCJ4AqVWjirLvGWeTMZGJn85TZkGPJDbRu9eGqjH164ucwusaYJGCBdqVZkVuxRdrdKtXtrdymFyP",
  "key29": "5z7PnZfJg4SCE89FQk7pLpzSRXUtLzJ6F4sSjNapNQWKuWxeVyrSH1VuEYCx6UQLn1YL41NHXfRWGaPkvEnqdiJ7"
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
