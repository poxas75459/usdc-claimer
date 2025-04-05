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
    "5YJb186MPL2pLhsZs9oGAha8cbz2rF2oQtRfk2w9q5bRkoeajmLeTMHEZXjLrXLyij2aziHUSAAbHaBuFbu2h4Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkRAbXb33ZPt7fUHTEJS81Do43oAYGRLXiDfQuSf9r8ohVqYZaJPoM4TMu8iYmjgfzLpPo9MKsHnU6xqtDHtpnd",
  "key1": "5M3XqPv7GRJbhThHjf6bEVaoJTDFjxu93ZbWXcbsroghjaYMaDt1WSgwvjaEDqCHDY1kZSRV9ytKpB3v4DCm521Y",
  "key2": "qXZW38ryvzwtXUcySGeBZ2fx1VyBGVtsEyQCASqQbPJ7qdxBQz19VdDEzugVd4KqH8p2684VugbZAv6AbhU4pXK",
  "key3": "C5VWkjqbkW8Zw268cNB7HQ46aV6SWDku9LyCBT9vGHKRgcY9TprcdxF5YXxsTPvjVKhLGoeVCQewQhUrd5jraQH",
  "key4": "2ndzkVz5n2EP7yAArntFjWMmSyRUGzAodGoef32kVyK7nfX8PXERm3N1JRA8Ut7XwkHNiT4LsiJkQNfop2HF6pTY",
  "key5": "49QHUAX3adQq74k2UHVh6bhfqGuZpvvKZrN6G5pTUovzFVAMHkF4wK7N5KKWVTT7WKk3CKDSr9q1wFgvqYEgjmcS",
  "key6": "3WcZXDngC6ZvQf1x39MKXMgorV2PQy7YujHhwYHdgoS6Geb5K4DHWzH9WRtdsQLY4AomLbGqQGpQmZaENmBgx1gp",
  "key7": "PJg4SV3CGp9Q75AVxZMYQdqmABTdAPR34kr9ept6AGgiiH559kA6DAGyDGN832s8ZtMnreWdbm5NnGsjydnggLQ",
  "key8": "2pae7qovyfsKgqyi2JxokrACojpUw38QrRzS3XJnhJBxs3En9JtSKhRvBJ8Ga5hKk1EgdbiYk55p2N27BXBGBdEe",
  "key9": "23YsW1VFf4SpzeVS46iJqrcc4igFMiP3UBiBUSbsQapv3rnYKADCQRzX9NbvSfA4QpvkkEGxd7EshBWjJ3NdAx3a",
  "key10": "39q1J2CEsXa6HbH5Mba213LY87Xi9DpBjwwdHS7VrC4djti5q91XUp5XzgsRDybLzFXdgpmnnoj2KM1kq4qBuRSi",
  "key11": "5qKD1WbxJ38a8VbHGKiQmLjcmoLAhQZ516TNwoygtgu4SHzi14qxLZK7QCB91Ch7rhpWMojQchUGER9YLnE8qCN5",
  "key12": "gAQhYdRQrFydX4eN7Ya7haRa3pic2SDkZQ1msMaBoYoT6c4kTSgRm2y7MJZCsqxRmBVwS1kUqmieJv69qHAFQEY",
  "key13": "5ck8yqyJNP1hkJJg4Prks7wBSarDxasXpRY5Hs1shGPQ4SDyqA7JYzgjYiMkk2vSYizWDQqjw16Q22aWoUTL3i8m",
  "key14": "tyEYiAdVVtwADZrK5ncNzU1ZxomFj8hLHNECgr9TBwDHCDuCLA7nRg1Yfofn3JnnmRbyPm1R2wLN9vjQKwSrMUp",
  "key15": "XfDJKsTAA8y73So8FgnkK4HgtZXwiJVoxyhCT7YgvMRqGSuZa7hjqgMw3vsiGFyChr2auaPQQFUfPvEWxyPE4R9",
  "key16": "5VnVd3ZirL74n5fGQLztQDoSPkyi2iCggbMbtqCigMyFni4SRdNimunzyxsEG5dPqUtZrFkmVsSBavkmmCKJETXC",
  "key17": "2e6kFNeeK3yKrmiR4tPoZvq2PFjvucuSmQsELnEqLNEpc8dgWX7BbJCAArGcgXLhGNnBaV6G9HNibzRquRGKaxLC",
  "key18": "4vZvKtFdVxPToN5JjRd3ELVa3kQNT3uJRo9EDgTmhqdM8dYBzCtSUuEEcDDPe1CfZ9Km4T9UEmC7gJsuJAAYy4g3",
  "key19": "7gN7jC1Y1t7gWcMZ3ewmFixLZNzmWLrcpcsq9ff8auL6Dfbit4CERp4EZ1a659DWoYX7DQRjurqgptyDHTQ7Vop",
  "key20": "38Q8Y7Z73vBatg6jL6eF9XGCRgyaR8gp2T8GUNauKD7fMkPqqwHRbRgzquW9oVtZPZxwPE4j2qrciWw89AvnnDPP",
  "key21": "4LdahYayEhuUPvRBzYT3Ls591Gq8NfduDukkE6DpWY4Z6ZQctHtwXpdBciyvssaVc1ndAGyr25EKpr5KPXdDaSju",
  "key22": "3uNe9E7S7ixyKJi7crUQvfKUZdwQU2n439cua1qxrgLa9KKX5Wz47qUZFyAqRDjDRmf6MguesFvj9ysKA8seHQp",
  "key23": "3NCwQP21zbNHPUCTwobuUjmbaxGK76cyzcuEbPDGtzmkZ8kW7H1WQZyvHMRSPpVCYnr6dacHaWrndEsgYqRtUcUQ",
  "key24": "5Nkh1bKu5UeRqkZquk1R2wmMnQAcXBXDGcnFepviqivkoUuPbHiGo5ZwqEFypcaSuJ33jGxXCEZ31vs7p4Vm4Zy3",
  "key25": "43j1HGWd42KZo7B3brremj7CDrdgcjUVDZTaAqpchRphfZBDEazmvuP5N6CJAavATTT4UHpC5jVbxsrcFYehA9Ei",
  "key26": "28d8FvjXgsrCA68jcYyt8hap6B7n6doJXiGzMM6NSe7zHui9eoJMzdNPkZzWhAqHUT2Ddj43BxZGCMHMCbGVBYdt",
  "key27": "2j4xU3MU3PrN3dSyFrWhgBGQjRMN4NtAvA1mbdcjmTgFZTsFAfSsNqC8RfgQ1keX1Ga3m3Q37zgAvwpxBZkNPX47",
  "key28": "4werUiaAbxD55rfnPrS2w6Jjha99gF9DZSLrAvZAKqwNzgD6NCU11eWMBF7vLScmsBB7HvVjDxQABfkwb1NyxwpJ",
  "key29": "5szfVMjHzEDRxJVNnaSTMZqv4fhRSJYsp5QMEZU5RHQrPw83p7bMoN3jipRoUvkh95ysE2szrT13iypjVq5Eb7V3",
  "key30": "rbgWyPeMGECmqaamHZEPmvQ7qBXM1a29fJKPUZZ8P4bPA8nsmf4KwgCyhV6TdVYHgPozm83Cssz3uQiNgfr13x6",
  "key31": "7Xcv7gqTqGudxFHmVgedsWcP3Q3xKv5N3Ew9VbuLFDqnnyo5FEH39px9wurS9kbru65ruXhPNws2Ngahsym9JbV",
  "key32": "wq5tnbwasfFobRKxQUbsRmB7LEP6znCCPySP1HbeBTTCoQ8v9KuK8YoGeoq58vkr9ot726JPfh4Wd8iu9WVMfEC",
  "key33": "cBnZPZAVKnhBoaTfYpiPrR3HrC6eBhJPUoNDUxwLpuNee5RTTPbAKVshRDRqWaHd5GXtXbs8XcKS71VrBrinAuB",
  "key34": "587FMJQmHgfEfynUWwXC2JyUDzTDx1MXMKk8G8hLpbNe7e2NGFSPsw1X1ftpLUmryd5DGs3J13ibaDYDLiXW5XXE",
  "key35": "3vDMtVNTGaGJzinEmG5tYQ9kyWWhvjFUtQ2BWaREj8Zy3MVUMvSe3h3o5ojYCkz9LEGfCaC1JfEZpH5WD4ity1Tj",
  "key36": "3trpa4dbo5yt7kTUyCgJcALa5auXXh6ZfDLUU8NcsyHSqY7EHFeRSeJw9VVTdP7Cj4CQQWs7saBKjr7CA2csHfAU",
  "key37": "5KJjgy4UH3xJYUeg8Bu8XS9t2jKuCgUEeEpFnpDu4c4oDn8Zh17sNgtNYe3XWryqSKkp675RNo78CB8zuFPxZeQw"
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
