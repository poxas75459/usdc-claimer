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
    "3BdP4wGGnGwd26cyaGDPWxiVkJ42xVLjhfT54YJ5t3TAYZJMsznGsbTw5gbrmNznF8S6nXJ8DBFDxVLR1F64uYVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4x9cHLQcMeMpFcu61hmgcrBfMwcddycQC66Yzcv8E5MZaDyMchXg7PVGC1Jd8KhvoPHK6bcNVJq46WNE1vcYA2",
  "key1": "3WrWdoZEb6pqfNLLLymSBuSwCPRtHeXijLZiLyTChFo3NedfFENU8iipgj2w5WfumNnUi3kJXAj5rvuBYqFG1W8g",
  "key2": "2iQYxnX1duBnn9n5Ar6CkEoKVxTDDRM9byvxQopB6N4PCBdwbjB1AGLvUwbfyqLwvrQuBHLevPqfFsBdh39qmFkG",
  "key3": "4MavKyndNZ54uWuKJiAVvwGdsndyd36MAqRoLUSkqdzJfQ4eRjRdgDnvHazDf2cQTNLzscv521CmsT2u48WvvsTe",
  "key4": "Qjh8h1V3q5na3smJ3RUotxPQq65f7BNZvs1Zsr4eSSMwwbtWPTNastnrNBHGAdcKmwTRbxzJxqwH3MKVb8Kf7Yp",
  "key5": "5RdBLX8o4JdTd3FcqFaojbmHVDhq8K5LiNfKWBVarwmAfWcZApaFAMHZrS9MM7EiuodTj6BK2CELH6chFS71z3BB",
  "key6": "5Lc5JfPnrHsCpum6VmUy4va8z5QUN5jhRy9Z48V5S8Xi3RzsMm2EuQrqha5xr8bD6GDn7vhYA75gaGJ19KdyWfUb",
  "key7": "3GkswMWrTnHRQm7TDqotvEVSeAKKxf8WtkQWcKk4iBoaHZs8JmC5hfcvZu1NUoQMVVWPL73B3t38SJ5qdYQ6RgUg",
  "key8": "3mStjn3DrEMcdRzXeJN264wM9ZHFCbTCmc75TzuoQapzdyGPpCVgiZE3Sd7h8RAcMMK2mveMXMXnbCu3M1J8GzgM",
  "key9": "5unCQTJz6VmtwQd44faUhcY2CsTLvi5LpEqq7vj91ciKkwRAo3SmJ3cwjVXnxb85LRm5iqx3sX2sATKQ8peBtMEF",
  "key10": "66GwuxTpnYpUHA5tmFqoeGCiXhALSShwqM7WuJs7QmVrhKKCnq9HHA3VszaKHkTCAWMxZjUabnB3QHK3cABA3Dk8",
  "key11": "zNxpsvZemn1eMmszTBeJgbU1xzQB8iDBEBqagyXa9N4QBi3ps234NJsC9pQYvX3xrrcn8Tx6mJa8jf98BFW3wUy",
  "key12": "52EdEr8LjZP6GQyZZLswoTaLhG5uVwVYo3uSWtJtK1cH5EDRSAC3Dj1bZV4gnm6eo2NvRgSvkBGgNcsgWnsMVWCn",
  "key13": "mT6DTdhhB8WUNTew5VFHFxi1MTRv6DjonVGtPzP7KBdRYzcG6cnwHTPruGUVznezoRGbkzGHmuJRXfiWzbzqqXk",
  "key14": "3qJwYC45CWj1NE1NhsSWzhspWnyySGQXJ7iK8TVFnHHqmtaksMRDVBFPGxvQDqEkxa47aTVchPoF3JpmEvLDBbQw",
  "key15": "hSwgAYxgXxbXeu6HRMJeXfn54wEamppb44xznCaT5goB6RGcNqjT2mppnfCEPefdXqhiS8kVPSa2Vk4vsHCpWEZ",
  "key16": "4VBt5BRLAwbBL2uVnT69szZo6esHVWKiccBrUKVygmmEF4kLgdrZAJC63eYSgzZ6WEGAG66PSRNkgLfn6dh4MEg2",
  "key17": "5DkwrZnPQG5ZWm19ypLdHMreTMutwE99B6zpiiF1BzjXyVTGvgTHapwLd9SCJ8xqoBeufAPZrx2MT3RgwZLjxsjm",
  "key18": "nEc5UEFv5WBT6MNQ8oxJDpg78RPyi9cWfcnTuN5WgzU3mc8BPFha4d8rucAg69R4eSfSSYbWmR3XynNDTUPJJF1",
  "key19": "V5ZHWghw65T6VZYcPKn4yT8PFapk3gseX9huK5yQYYmKiVNADHKkGiruczMSfj1HyckfdzcvQTPxygKznzjtt7f",
  "key20": "4A92uyDpzm4XxDEhq4HXAfiMUnevCRcUAnKoHfmwwgD1auGJKjyLV9fWVoPYCYScGg7zLZC4hrg9Azn32VFwoLW3",
  "key21": "5QkaUqeynjWAYvEnUMSquiNyhFZdKuvquxM7vAkpipXsugeHFrPQL6MqGU3bCruQfhWmARFiqAiMattA6JdDaCYr",
  "key22": "5qiFxPgy2e9v2cv8ZSQpKrsruDmh1c3U46syrz4tEK8KPy6A45WZH9ytJG7V5kKZwDLKSeEzDGy9FrZ28bxcsu49",
  "key23": "3QJoXzpkoVkKrosUogjDAYGo8Kt7YkiXQtPw17vQmapwpuwfEViumvsEBu1WdP7CDEKpXtyZzbtdvnfdrNp5PPgu",
  "key24": "4Hy6bZhvrgjfGrs9WJxFF5NeUKYSCLigRWuUQuu69gRG4yJNBYWRGi536oKt2jiXjgnqCj13GBPnzDGCFAvq481W",
  "key25": "2GqaHd2HzjJ1QHZzgbWwPncc5qXdaKBPdLjpfKD6qCkF2uM1gbZJaBnZNtVRosxKBtkuykBm2R6mnF9fPn7Vic5P",
  "key26": "5tPoogNwVSi2RDLVm7rm98ieNB61WAkH9cK9rZjuE5sQ2kqgwfgyxsM2jT282jfcWUCLFxP4g7jtCnpqeR8m7P7Q",
  "key27": "5RfHKXgFK1S39bwmWFcdAJYomFSQ1Gr3d1GdAYeNvy11jxTV66fCExUZqUnCvXSAJnHi95DbPGXfxRWK3PnZqBUC"
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
