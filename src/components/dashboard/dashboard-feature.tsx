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
    "3UqPWAXUZ59Nq55c5mBNU1bi9QmS5YiakY4ueSnscWh4syAbVwATqd4HxcKnYWsUmppAUjNKGUGtczDFSFsegxVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61m8nDRpZNrR3juDSF63DA2ne1cEjXErYvmNQf1kng3XebCKhJ1FoGVVFftMDujXSXt8xm4jyknPLfpG8HqUAWhR",
  "key1": "eVXEqYtfLtbmmuABTdpYHx9Mg3WsjX3oCm3DAxE8aocg9G3AqRcqSaXA6wpzXUp3qQncESstQwukRbciVu1g72L",
  "key2": "5B69mD3ez5W5wM1EGY5LkaFb79KMkqnEnmuG1MdrcGiCLY27fERZcbCFSrwveXsS3oPHsmVc8g8hZuDbjrQe2ubV",
  "key3": "ghdkhyiYBMdXe5EHKf6HCdDMUxRsMAXF5ufzRJ5Px8noWanoghWfZLLuv8eE3HQ7JafcHaQTWpWttbg2Q4vJgoz",
  "key4": "5AnPioKB4aAGSYQJ9ExM5vA3uwxxVB63Wpp5NEsVFSwiaYUh1QLrxtqmYQkFW7DKvsNsjR5cu9qTRHHGZ4t2cWAV",
  "key5": "Xh6moBD98PuQqH57yNfe1tgdkdRrPxez4GGDDS3C8G8ouFrJ7mQApVDcAXhS5vVAokxPn8YpRcr1VdbLgcCKubk",
  "key6": "4HGBwpK9SH5ZV2EoZ5cLRMFLwZnAnaKFFh3dCxZPWuqC4RXpBBfhkLu6i3NTDuD4Tfmy4ktX4oK82vks4YggUU9S",
  "key7": "5SFQSRMK3nGM9AuoLDuKcwTLto89teF9SyZjKvYMJaYci7Ehq7aQtRqXXJqu1HdQo5SR5mHKrUngXScH87QNUi31",
  "key8": "HYEJ7hhj5PyUM8c8B7gh8XyBSWcPUr1PsHyaJ3cuPzPHZdKa8biEqLdr9WRsvKepVShSeuV3ks7r3HJLs7BC3TY",
  "key9": "vGBFoPYiYFrmqeGAAhYYyTM9tiM6au1C6FrHvWLzXy6DkDpBa37g4xwimQPMAzXgDbnzrnF13iFaEGWeCo5sXkw",
  "key10": "5DqZRskdEJAzWe39kYpUygiBAcVamw8DtqCbRs6NJUx1oqE53Wrc2ZLmD99Dd1Xkpk2H3DUiixFLrQuzApjweJSq",
  "key11": "cASwF3wgcXf9sGvbUxjcFHBTwqB2GX3uXptQ9TCAdiVb5kRfnLw1sk1bmd1T1NSJkjyEEMvoDfd5ZZSqk8N9Uib",
  "key12": "59vKGBaZyYJAXKc23S819Zh1bN5D23nQxfTC9jknyoiGjhNdGC8noifN92JffQMBbpmNZKJZdZT142mebwXi6PiQ",
  "key13": "3W4tYDhZVwRimPS4WDQuMzbCphAA7VPaHmdJTcRQ3jeraCe8CHfvwtaBLnaawbkbcAGEtoXLrY54mgbd79fw7NDB",
  "key14": "3Apt6VFJeHAGnqSwyQ11QMLkGY1xyDtN7qfMwUXDbXuurKSdLXKARtJJhmP5FrmrF1m1qShrHqRNfGosqqEFp3JX",
  "key15": "5vWeacwmq22Gwtxnmo2z6gTb8cZNC45kuSJvNuaP8zLEjvpmra1N2Rc2pJdXDNS82iQhBWTrxuAaZJZiJ81za9Q3",
  "key16": "3UUQt1VEjzGufKWhXs9MhjSMCp3B3krVxYGfSeVcKdPem2dff3sQKrd4dH5EEQuzWD3UYMYzNvp2hjsYiJw7eczR",
  "key17": "3MURVHsUmVz3MtwgAEmiPcYtmU3UUCGwUCDz46tYFBynS57kmzzsincbHBGJu2akPKCQV8yzYwERSzVBUAwkU5wf",
  "key18": "5aWUMa84BaXYtuKa5YgVWUpMsCBnPYAgnLiS6um3uK1UU9kVccxeFwFBqCXxnaRJXVvVBztsrZ1E9okHwxChLCqi",
  "key19": "5SgvDrNGRAXyj3BfWgx1BYT2r789Mw4newZ7zjkAyc7We8QkVt24zGeP8JXbzDdgKm1eRQGj6haKhfMw7dethHQo",
  "key20": "4RuvFfRAMvM8rn3MLdVGq8afX8kpne13uiGXijM8gtzz5VN23NVoEqz8kEeE8FqWbRVUzwfC57fqhNsW3Mi2STqY",
  "key21": "3t9fZAABhtUQ6VNjzPsS1znueifhSQ6KqyWaW7yT4Y1cgvLtYZ4CcUsVtPmZiASNekWDjQB4zpuJAq7KPy8CLoiV",
  "key22": "48oysuHTK9UwZgbAvU3BaBUj3DkfhD2ZENbHDrfhTXsGvbNJzfnfyFWprYp25prc4ki6LTbfQgEntgKx2SUG2uG8",
  "key23": "2dgYH1f2xiLDdBarzWYMaKEeURn1Xrth5NNDkGWtLYE15kYt7eEhMdEP4yxNaDErKfAAz5Dj1MWzE1bDAkYhXS4c",
  "key24": "4v9P7qCjvJZ7vns9rBfC4xqXNpaH9EZPri9nboMnJh6tTzqwSwvKknjmRego4nWHvZCMtkJq99HrYcf9p48EKv3n",
  "key25": "2cKbUppLaZaNyTHqCJZiCYF5kJ6h7QVNgFbc7YfsdhXcPkWUy17bNaxnNMvVeV7RKDGWXibJrv1BEjRLJ6bsKWTy",
  "key26": "7WT3ncsQ5zNyMzcMKqXs1gVgQ8Xh278gDbpbPPRwdPqmm4YLu9HpbR1HJCWMfEfdQFYEQgXLBCJPVsgvq5WA8mJ",
  "key27": "2zEvRSkzP2bHFVgXsZcPhNnBRDrCbaF577msrPqe3k4DtD3Lro1SN4z8ZFXHvodAzYe156XbMWMFaAbPAD6AUE9z",
  "key28": "txfgJEtAqZZ4nwK71U9D2VtEQNnP7DMZ3sPur78MpELWQjnfgozeX8uStuPojLPa7X2hfdd1M7b6kjYJzJeSEXX",
  "key29": "5ALHgPRi34NfD9BvMwkLydmSE6Q6TEGzATiJesAtfiNGDrVadSRXdh3GeuDzUhJUfA6DEuTB6HrrxbWP7Y5StA2N",
  "key30": "3Y1roFbMRGmQQpsAP5UbimQVVuy2aMbsBXBTELFDcKDPTxVNFAKBWM8QAaPSWxFgKmw3Yn99LsMxsfyh1nZyGmoq",
  "key31": "4wRRgieXxRTaxSLvD1ExGzs4HpPZXKabsarGAuJzGJw6jjfs14SBJqhdKoEvi5Wc6Bg5dJAw2PFCqmYUjen8gz2D",
  "key32": "2SfZUKbtV2sVi1S71L5xCqRYHJwUDkxESEW3k64zJE2XZF7K2SvLePiYrwNoTJ8uxHiukVqQvdoH6sdRVmC1Nds6"
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
