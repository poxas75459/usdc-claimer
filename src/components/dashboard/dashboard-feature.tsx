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
    "5SHxdQnT6oZUCKiVTGTSkoqmS1n4AXQfXuTw4W4MtdpK7i4Jxc34BJwxU3mtJpyJCjivE7b87TKgbkrj5A35MXeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TswtDAmzDh1vkLj8eLxpLAGuSfNBNW665gCcd5rLW3vqkbSZwnvNWBP49uvZqMYTWKREbV7eNQJe4Rgwxj6PEYj",
  "key1": "45EJmAMHeLQzbR87qcuGa5aUZfdhsXS5fxdp7Au6H2bGVUhC1ySPfamWDvHuMTNBaGNEPLWXXEg3xRYNcBCq7p5K",
  "key2": "4MD7f6LvYr51MmqZYXn3cV36HWgFxoxxynjWdvMrRsTxL65qjLseQUnikCPv2UrLCiWcLbvJETN1yaczFj9u3PS6",
  "key3": "4BgqurPJs7FtPxTVRYuLWkVEZkq5gzrZZHy28NxJ7PUBrwDnUqrgnJSx8L372qDit9udwmkfNANxXCNML8zqYkHD",
  "key4": "28TqDoZWtJpw9H26RiD1TTRcKJ6RFboSSpuuh8LURw7E8GQbvbDpBcgQMYszQK7ZLAf5TQcf4yhbxYVoKG5G7D97",
  "key5": "5M8sM15RzxfTJsQYTDzGpeLtC3VDHHsNU3PMGLjbex24sauXCBma5Hc7W2ootU4esNeiM7CDAZDB1Y5qsNVDnk6R",
  "key6": "2CQ3uwCj3Wazn8ahJKQfbG3ZtUnymuiejU6BCt7MrrbHYkdgqEZYPVd7EPX7zP27s9ANuEd4v38bL6BURTDCF6eZ",
  "key7": "3fkEZ28ftpQ1DLXXnQh5qSA4ycpkSHzBknESLMNfsNb2GCYhewTViuJ7WFvNe1TzxMKYDjorCGnPp5qsTbux4YrD",
  "key8": "5TCxD3uEkFqiuLryHx1qZGF8KubjwKtRUSsJg7WyvjimzWfiTY1C3Sw84VYxq31jcNsoviJBwGCD8D8Zkzw49wAp",
  "key9": "5ZmLs58cBoQRWt2K7Ksy9EmL9T2sn3AudNpiMvgV5kiDbTEMCBUkLB2zxYJQiBWqP377hMjazFX5prnCNRi3JQDd",
  "key10": "2PrYF9p3KE8j75B725NbZvbPY1aUdhvt9UM7zNgpTPdKN5YABjPToAD4tNBR51cVyfn5Evzr77ZjxwgBHmgADafY",
  "key11": "vvw8sn3NSzucgj9M883fL7bSY2MoYUd9qfgewZqKASsdYivWQFEZjd3x6Y6jxk1qsc9z6k2fFhVjWWDKz7Cs2Gf",
  "key12": "2naQP9AwoUGN6hEUmras82GHvgCFnBkTCAuuyo8ZwTTrKPwoTiWc3se2pUsVFnn5ss1HEtfHQdbq7JrbHvjrSbj2",
  "key13": "5CajpAJumQxdW9DPTmQqJsCv4CNoM7UNaDmk8JTQD2W8ry92yrXhkLHiEiZ9W7awasF2FZLU9ZvvjEETa4Wimiy4",
  "key14": "45Y32ykQJPYDyJ9jGSzKaLBK25SLw7pxDNm2RUEjgsygmJJRkLBNvz9R7zQkcUNY2QsHQ3AQ64DbDJ9bH4nVDY6F",
  "key15": "3tkRLaRdUKBtMSEcoPJa4AeBjnZ8ZP9czVc4tXvFruLSxezy9CDccyhu63gVEtRVNE4L25E5j7qDSjHB8KJm9btk",
  "key16": "jxJrkRyuDdDrUq9dsktgxwedboDt8qdL1U3zBiVhYETao2JFZrD8AKRDK4qdzrGyG88EARxzFomUNmiJaf96XWY",
  "key17": "3pnXSUweHWNjWsQKWC2yDs14MWMXLYEYw61JgZ65Jmw7nYbVqmRCoL6owNRmsWYr89J5xMpca7KbwPkwewr7uAVS",
  "key18": "2tHL7kGvWycv2MPtg8oMwUoc4247712QHGjdAT7cCrFdMq2teTxRM2shnHR7YeCzGkoeqHcvttZqpt1qpi3tcykM",
  "key19": "3uCMreQg99889mqoUicRjFFJMRUeBuddRssNCiyHPKKZsrQ1WSocRn49t2HvG1YEzJw3ZZcRDR24zStUEZHLp5cv",
  "key20": "52aTYW4xxm3QXcstJMc2XLfireuNLGrVLuE63VnwkWSC8KX1buoksi1iZoURqcq9KM2jEAsVqDUNJKzabxQTdSfP",
  "key21": "2SeeG5URUraq5rkFCCP8iaXBRuaSxyuHG2DZGKPAYgBXMHxxk7mmyWjeuZCGS2utf1LhM5RFP2SPJ4R7qL5v1wj",
  "key22": "3S9NPDVUm2D6esmpgnqwxAR5bhxZWQHQ9ozGmgjLJYg76J6g5i1PuRwjjxJejruCeyfgyKqv1FdFWdSg22TCvRV1",
  "key23": "4GGPrkstR92qyRzVk2GPHhRKW2rsjEVZhqNMwzK7p2yKABFch8CLG2FcyJDABLxUhXYafYnmJWtK6ZRVTbWYkXE7",
  "key24": "2D1v7Fd9QVXWBby4LajjJdHRaUksy5CrZuzpo7qDV3NX84sBPVhTukJNFPwsAX4W1R42qA6ghdmUEoUZWbAAa6uu",
  "key25": "FbShRZNuqFyT87nHwGm4zW3eitCB4muFNkybUML9xtviPJcCQHjkCevUrE1VivoonEe3fTpzPd9BffRnVwjJEGy",
  "key26": "4xjf8cTFxxErreDTDdwAbep8stND1ZMVHRsZteKchfNiUioQJHE1TeqzEbahDmeeqHgrnUAtvz9K8vDyQm8LayZU",
  "key27": "5QUhNc2hYBpSWQNiqDqWga7igk41aUBT7dNbppeDToYZNn3EM6fcCP47ZWhDyRa8JoFsxbV5jL93df9kJsFtf6jp",
  "key28": "aicfPt19zyTFFc3G6F7VA3inm4a8nJtmvhFEJVBZEbWFQvjXKpY2XhqqJnQxwzM4QwdpQmEGEWk2iSGEqHSUyKK"
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
