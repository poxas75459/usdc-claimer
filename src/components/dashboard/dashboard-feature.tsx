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
    "52peigfzPvuexybNks2kjRe5cZLVaRjALpkwXfpCRq7SLVS9a1E3MaVQU8T739DbQpD7DmZWHPyxBN9C7LhJ51E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mm6oU7DKqeUcroWyZ7wEHF1wgUQNMUyt6R5EUTmX9fMJpAF1mNJKvuF8sLZLYSXo6ZH88Ypk2Gjjt9nkFQmXHPU",
  "key1": "zWXbjfUHZyxwLmBMt6gv3h935S7nsuQk35c4QxtBbzMr2LGtUdc4Lz8fmzArY8to7K6AdbwMyS8rNZC3NptFfbT",
  "key2": "3B2rTB3TFxJszBpwDzmihrPaf5vnSq84t3YJwEhqYtBfbhkGEsXBtdGD9QveVMZWGHxssv21y2SqJkcGHDXUzfm",
  "key3": "gGMP9iLpULJHELxa5pTxsDhGeh7JeBtNpMnH2bn8hXhPD9DWz7fd5x6m9NcqAGs7WK1qSVsj6itjWB3856QGJYN",
  "key4": "4dqWNovGLezsTNobwaTxVGk7G3Tfptsi4FFFiPAxR21vga7CyAyfE4FwYkc5N31drQRbxV2nCjqL2L2KqBj4RMhb",
  "key5": "3p5a7M1nD37weCw47MRRDArMGs81roc6HYnGQQqfxhNS576um6uydW2woQGiH9VhE53nDBY32du8B2hmdSYVgM8M",
  "key6": "4JbL31EPQVgyjt4YAhhhciLe5hEm9uVDAVm2WkrBLggt5rNdk7rRDwpytA815Xk4V9VtFffe1kpF4xEDTXhEmkbc",
  "key7": "2TVtcJQNrMDgwJkkUmpyp6LJmzLxHnbT5AZBb2yVtQFu58MgG6AGNDMvrumo5MJqX2qsrgfZoxPSTMFGskKi388b",
  "key8": "44mTnfRx9gGPhoZjc6gwnh1bzh3jiKbADHuMYdrrgoVpZjnGcD7D7TXmJK2arh8Y4SiHvMNw7PBqaf12dbYykCbS",
  "key9": "5xB6c7Yj5KEBtdz7jy3S3pc3zY2puho64qaFbiBEKnQqrTQ9Z5pZJsJYdEgmexwEzuXBck7pK7KcKSCqKCVdBoQB",
  "key10": "4w4FG3TWkf6uhLvA7my2NJirHJN8MDUTtr1nKwHsVTtRbYa8VYmc2S1mfNU44QofTVLSxvwg1DknZU2EvV2rhKAU",
  "key11": "4t4nYB6B83SFPCr1GABs7FYQAL4TFmuWm1EGugx57JuvHUWTfEWbNfv9TJmUR5JDeQ1hQb6xPsSEHarWzGo5DrUN",
  "key12": "3L29RqczK9JFwHdYmTqXAmepS5YKSBsDEy761S3N9G8nxr2wBJJRf5QEnNFGuJ5cAPXrgpGXWH1RBpMB5USmnxtz",
  "key13": "4o1aGdHzAoixXbNnWybCYR2jDHAGqevxeDqzVK2ZCAiYmQ9XiPPoCp9LkLcQv1WUvsNzETnC4vmc2H74aijXjQb7",
  "key14": "4yUSWhVtyZXJdpnvJpcm6JPbwyWFXR2NvW7xjW8ogTTdrkwU52j8ymDAQ91NG3bWE8i941G1wodRhR9W8LqeTJ1t",
  "key15": "5wvnP9Y5rPYDAtQwfTzTEem9FMHTgGywgqNC7sK9uGzheTsCyQE54xuMVBt2DRTa2eudhC92naYiX3JCJurWu811",
  "key16": "2bEpjcsRTh72FL4M2Wjckn6wwf2gGeivJg5yoJoTUoaM6sDJLhv5Aanf7eGEg8P8SkGKBtN3yFrGxqn2DV7rYd8a",
  "key17": "4zx4uRRedQaX55PqAwG4wrP6nT3GV2tjLrSpHegUCFAK127AaxH57MyTF2r1KwGq56bwLNwjr3Zbj9gfT7dyYAdj",
  "key18": "5gzLMbJKdY6TonZHiZmLhJi5SjLtV8NwpHHhAr8r4GZpNa9B18qiVC52k4Q4mUpDJYJZBjAbAcWxDKuXxBmRuXaH",
  "key19": "35bodkNBSAn6ddMVVVL59dNZdjvPUdDat35tgfQb4MdrnPG5zxoeTZ9sLempGPHW28MkWFpEAdgTwyD9apD7wyt",
  "key20": "2Lsac9hVYf2UNVikhwkSSQsNrHJ2ZFKtDZP2u29VFJG7PANPCoBjkXQRd81QSx39f7JuEXpBBaKkS84TLpToZ6Hk",
  "key21": "47AwSRQHzNH7nwFj4A5dsh3tGgsGnYk7NzGYH2LvNpsAfkosukBVhtmJ9MKeXCSJDVQpqh3RfsvwF9sjayQtCt4a",
  "key22": "3aaQDEH5biRa85yAc4dZRThedN91PDBJoVLWVGyPDUSW2rW7YrunCUdewFpQf1WXQ72huoKPgiYpHZfK3UxNwEz",
  "key23": "56FDH2mko35Ci77L9ayqjamy7nzaLB42r8AVYKTyJEoJcVyTSWqE8FLxcqpATQ5hbJ7bMybnAdYVkLow7cufLJ5t",
  "key24": "2ME9AYcU9VMHSTzkJxkK9afTSzPzYAw2bpWWrq79VFAQxGHs6n8kLDzLErsw1bEqvGNMuToVjXEHhEbED2LnTdZc",
  "key25": "4Vmb3a1MifD1LkKSom18Hb4ZVQVJobPgYyJHxKYeWicZrGZDrRN2NCB7R2sB76f6VaHGSqFGxmrM6Nrgf5KXMDic",
  "key26": "5SoTGWMy5NH6uy4j4DYxukyQT1RduHsmBdDw4xMyQsV8YeAmJeLySp5373snYeHUdMRmbdxWxRiBJyYw34nuAeLv",
  "key27": "eBBmYoTG39bEGjeEZ198dUfwEV91CPAmArYp94Hn6DSD35hUjKRLDPJ8c43S9Jj5KgFZgPm1y1h8a4NRKB8x2HD"
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
