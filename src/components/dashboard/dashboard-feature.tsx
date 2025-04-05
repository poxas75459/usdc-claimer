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
    "58aaFTABEHV7LjwZnzLuWpDq6pfU3GvPDUgBcN7zpDQtDGVzexNfXZYYMZvxSZHeVQdvf9ojagTJBJPknUgkzJ8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwXKH4wGJBz39avuJv9bMPVFBa55H5DTtu8HbV6Lst1d45XjWq96pnjkCEN1PLW8t3155UztTZ58hp85gM578ju",
  "key1": "3HcPF69SiVr6PSqn2bKJtzsYmskqWXXjQLJUXxBvif2249SDtJk47UkuuCnQtsPkWHGuBdmLxh4eUHEPoKDhyrKH",
  "key2": "G4oXe3JptTHB92upZDZRCMYUwY1jbDBBdVYB5tSRJw1FUCqnuzYWviDeq5QkVxJ8AB16n9UHyhbVzBdB178ckwA",
  "key3": "3R27hdYnjbR9AErShwXQvHHvMtQyUj1GmydTifob9ZBJ29WFpKRwBQbeSeWN5FKbUhcAzNvYHq7e7L7mrmbaZCYM",
  "key4": "19Mka7TCWTKarAmFjZ7WwVFFd5JqHYZDdz5ZEfgX8XwMAhPLtArUsLyEs4uwHrFWYbmffDnmjCSWz1TkHFmKQ9c",
  "key5": "2D7DaysESu7MgiwSGmzWGgU9mXeYNtdT5SKxbUj13rZ8vhvdpZ2Rd9H3RGxfDRNx12iYB4jeayWJWjmKZmQ6AXjt",
  "key6": "2sZQKAtRHtn4XV1ctduBBL9BQG99eMSKBBz1GCNUYMFfbvD3YxuMxjRKAH3GxZuQiyXVgCXVoCxQKG5muUvsxs6J",
  "key7": "4NTMtptMCgrcmipy6Wx42hgEDPy4cuBd9LHdJsznSPWeQApTmhggHH2wo5XLFDgwiXBqjEgCe657oCLHhjkP2PjJ",
  "key8": "5pHDHEkvJW6VGzHixLcsqziS1QdrFyAo317eMr16BbhUHRbEGyhqDx5JfiG159Kyz7or9KVpVtuC5k9bQ3P7NU7g",
  "key9": "2sgv6JNr9cPhngK55pztYRqnMpMyNx45e61BZe69Wq55nKKve3bydQBQsiw9ADAYZPu8RiexWFkoTENakNMt6fvd",
  "key10": "5RYVVTG6w7GFdGeaywkYNz7Jg4USALHCFeTUkBhkp9zmGdbQ53cZRzGzdYx2CC86utyaKrvrqp1ZrjCCyQKYKHGM",
  "key11": "3SRwmN3r4PLhu55j1FtgR9qUmsNz4RKXm7aiipHcNkLh4VBCnRc5oUD3xu8jUW2Q4PiaKrt1L8stjFmZKPmHMcCD",
  "key12": "4ULpXgyX8fB9HT3mnQWhVFGNpG8avzRKYVG35VNrwaCWuN2AUAbx9rL2AtaBTp9SFH6FsuErb9htL44KtcMEHFvj",
  "key13": "2s3jp1UbZjrKBog3QjedHmqtXcUrTeL7npVZdgeFQS83yjVuWUb4xe29iAemsWMTKbbHChDSdn7LuJCnE2xTTCcV",
  "key14": "D6QAY77CphBY5iyzyLr3NjZYSGdE1oYaNpp6XSzcRJ57WTWW8hZJxkQZoxVc3UPeG1AuuxJtj7wjSn2EFRsR9Jw",
  "key15": "5xSmxzpwS1UXcSgu17f5pkbP5ey5dNvLfagQnQZhmmkLEJt3AUbdr8EKFuXBFAvzJtzYQRQVzAg8W98HmFEeB1vP",
  "key16": "5uti8VqA3CM7vMzD2YDg2zU5ug8dzgx9g35UCycLqbSfQ3TtHie5DUPE8EMV9oEhQdAGF98yW5NEyqw5EPojekuf",
  "key17": "wDsztzqQQuP6EzuHr4t8RER5hNfCkmnDVzh5SZxDcuU3Vp9gNgyzr3MafYZQTRGcqpXBJFSk96z3SuApSU4aCkm",
  "key18": "27ZGE4ZHtq1yuEgc89e6Kt4KV7RUXKAQb4eV6mirWTFQT1u1GsFQmZRC4P8ijm5QgqysXeMUXZviaEbWW9oL6Kyc",
  "key19": "346kbufSjRwDL3dfPuAkDYR9Nk8GApzXnNBHCZoZCwww9w1hhzsToWaQoJJ6m6EzsPhEgkdsJRx3tDqRFgACpZp9",
  "key20": "5hKMT5ifmLxfbugUBnJF2MrVpVgkohpMYEYQoftNNKbobwGP4vHpp4Wvr5jToN1F8jTc78T9nF8BssiaAqWLwXK",
  "key21": "36ExdEiTXXtWDyQFL1RT6ohaue8QPcPVgy4zD2Bm11ZC9wGGRsdi2tPvbRnBLnqheBcDY4fG4HYhigQKsN7sYPuw",
  "key22": "3JTr1c9yUx9t73664hH5kttv88igBBQtf99LQhM7dW7VQbRdfJjcAMU9FKqQ18TpZgSEoQw8ATX6EbGSfYsRCeb8",
  "key23": "3NU7dE1FvvPxf1qc6wbW9JnnPaj2jrwxq2NEpEfbwJzv9rLWgotNrb7nhhAb6fNbLDwkxUy6fwSMnVbUPAZsHktB",
  "key24": "2HqyNFdPxDurtgCUjrgvWD7GhyntzSdLwpyHxHbQVoLNwFXHqGucSn46QF1BwDA9L6PCqnAWe2S1sQx46LRfhKiK",
  "key25": "4s4XBQXyDW5pBsDGwDRvHm1a3GuqRf76KwXnEzzW5GhCnjpS6uLtgpn7PUnGm7e1wqp5RURaExEkea99tQkWdn1b",
  "key26": "5URPoRGojpL7K4mSkjyf6LBcfgfVoQHd23gyGi5dxfFi7vfGeRgrwGVA5BF4SAnvoa8PbzV7bAedysXxM1tUy5mx",
  "key27": "2E5EuiQASzhqLXs5auxMAQouUmTReWQuyxLdjXAiQYsSZ2YWVB3p6k9dmTbSzSSW9qhKTmAZiMeQUAy5LtksZQck",
  "key28": "5ZEXadrtcLrCd1UUhG6okK7Bz1pe1mzZBGbGcAnSzWcXAXLsa55qbwfVRqg93j4avs8Pf9FbzcumVqBzHcthJ4Kg",
  "key29": "3f8ARGES1e4NZrsQUZ3ch3KhwkdhLzv2bU8R6D4aN7PJBT2pGkLqu7QJ4VhrK7Cz3EHnVXoDF35rM7jfVMzXihm8",
  "key30": "5sRSQ39MwHjo6WXkFbSnzMrZkMiWirN68YM4uA2Djf6SCp7tkL4UetZEThmoj9n8pW4pVd4ABXJfstmzxYZWpA8F",
  "key31": "31Kedjnhd9LgbYnpQP8qV3XZVGEf9nrEvh2P64ULLoUKz5Fa8t8YKPPWehV4GNwXMu85Pru7fqeqwK7E4EoDf5gY",
  "key32": "4ozRZtXpMxEUDnX8hztKsfkyf4C9hXZmVrrw4KM9auvkXtSmQMoM5sr2smJeyvUmeTUmgGTv6pQQU8tMGyHN3zNX"
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
