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
    "4BLwbRGFK3Do89j254c6uNViJcytd6eZnTXSYyTUygq5n9eWGRqB648eboFpcEqMTtrQyGWCToK3bAMwLZ55zch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfMWUcRxaN9MECwfuazdgFJR6zVsbWQQvf6BwRDs883e1LU2tNDEvKxrnpexzrZHMYfdtAbEkFsFqHzJB2BMk1a",
  "key1": "3LPcDcb7v9WRmdYeeZH3gqBzFg3bqLa1ECb7VtyiQ2JoDAGEdGhmHK7jsvrWoF3KrsLKszqdbfD96yUxX8HVUmhJ",
  "key2": "558HFUUWVLDNmnLEajz3G8kzZJJ64XHw8CB9Mmq4X2qffqozwMRVVneiiqaTC52aggksMpYMRvFDH7vNxiTEUzcN",
  "key3": "g2UoKcX5KQZY7cHBtELi2TYr1aoTwLN7VGTQdvRNHtueFRiJVnomyvWet9e2oNuMEP1TCmZeCEhSjv8vrJybypJ",
  "key4": "2Rrvicj6GTHP7UupLJEatmdEXgb34oeXZfDJaCyJ8AfjfbJcw8D8ho8xHsvNCE2MMjTSCr49AZj9H3KsVuztRQQe",
  "key5": "4sBQEZD7FENQa7F3ai8cM2veKUgNgskfjqC6CmaNBUb3gtZMUxtfoxqD2dqebCj2kcQ8nJURvMrebaW9RmjJtnwT",
  "key6": "jvbmfY9a1MUjjFNeZJPfmAGudBEaD8F1Wg8tHiq5ZimMHcNnszz9KsF6uCCFU7zqXrhhyKJtjfU25KKe5A7fjUM",
  "key7": "3VMc1QSJRpWt3guvVoXAgNUgiPuUgP6hiQLN6A2rjzEiCvShcZFWuzrifLrC6TKAK17rBGgEXBfwQYhnkE3rL9v3",
  "key8": "5JAkJQX5rvdhdiJoeZEQkqEUyhLkBJb3TtB4M792xmf2ihJQ6nf4LhiQeLK5oHyTAZQozKeDRSdNaenzx99BESYJ",
  "key9": "4WVYVNadPpg5VBSEaJ2YmcpNdDhs3fSGntJ75fBFE6N6cuLPaNt6DWaC8hoAm4vRgFZwWRAhq1KMLJN7Am3j8Esa",
  "key10": "56F2rcK5wKxuZ7RNRNupasHUfnJBbNtbhZkz98RhvwJMaywVx5Fp1joWPc5zK7TFoQm4vsYFsERKGmoZKXRbHQHt",
  "key11": "34a4VUdYtKj3Mnx7PqMSXS6kEmFEcFR4x5sxY1x4xgP3cBhPSU8T4mxhm1isy54CjCzfk1nRdR69j4Z5512fWyMi",
  "key12": "A8MtqB6jv5RKBfisj5XP1BcdbBPS3tq7nY9otgAf6wvLqHm5uNW4kfExy64tqZce3PPaWmQ4AoxrQJg82gWe8dx",
  "key13": "3xAgp6KJvF4ZsawWXHEFdJE3FaNBHPPjKwgefDeSAdq4NPKs6kynLW2YUdyExzn8VkPbcfbFMq9SNdbaFGcn2TDq",
  "key14": "539ji8eGnGbhYBamzN4qYqA3hV1xY2SUZF8VDEn3C8FKN2LFCWLq7iTQCq93FqRbn6MtHEX8SiWcSk457B1YG1oK",
  "key15": "4SyVpZ9PSq79QwN3T24GAgAN9P1wi7SPZxBMxJmz6LhDjJ4xy5QnbVJ2Lo1bpSq8sb4Fz8PVc1ULddtgS8hSrHhM",
  "key16": "2R8puU1FPE74Z9JQdd97MDDmgG7Ryj5b5hxo9RktuksUaZUzwgFnh3JS52PSJoYnzWMzXkdazECvnrgjz32zfQkh",
  "key17": "4dcCZnNgY6xPnLHVQcQw4CTyGdixq8ExBNJ38s9e3ywJ8g9mhgEWDTkKYq8DxHn6umbduLKbV8skpQC3JomRWcSz",
  "key18": "4ACDLsSY7qDRmMWqNKMjnpPwtKhcWzu1vbPwjbsPdWyq6Dre1irL9xYqwZNCigU9gqjMV6D4FtuHajYvxwcf3Bv1",
  "key19": "5wdx1LReFApHH5JHSJh29oRZGW9DcYv5S98zXjEY8zbb2URLZiDDfgoe8DifgkLpxLebdpcpcKMv8pJSKz6HfaPR",
  "key20": "3985kXZJTmhrTQBYL4K8o1i1Ygpcwz8HGyJMjofEEEngjQZdp2PvmYajFkgeLuc2H59pjb7USfFsmdEkX8XnxGeB",
  "key21": "fXCmkGacA91J7jnx9vSyTsk7Mm5Ztxv3erDVCE3h4Qs7UZc6e7nJFQqaheBqzQUhxa99W5hdJu7mMsnYWdgGgfy",
  "key22": "2z7cqAWAad4L2CTgmXv2z1k2SXKPpyUQ5V1mWbibuPtUBLiVSnEEPY5h8zPCv7VmshLhUv6Qi332Xah37qzbBTxh",
  "key23": "RPnPfFz6LNdhFX16FBrJ3CjnQ6AQphpBttWYQz3EvqFhs5TLk34Z9EUwHAyP3v91xz5TMTM3C9p2y3BhN3dAUqR",
  "key24": "2dU6wQuH1jkt3ck54vEatrMFcZRQKWBCPZF4pzQ4DFyYRjZxbEBSFrs7Km3nxpKFmSA8th43LzJjeXcs8af67XZq",
  "key25": "k7M6pHhKwFfZ3ZTUhAvkCFdvjU9KMqsCK4fJYKgAJLT38kxD4JobXg5NNNhqBqTezF6kk9fhSTwbdxS75MkCqSy",
  "key26": "2y4CbBbLAPofB725H33kLQnRFDzfxsVCZ4NQLG4Hdhz7qr79waa2orDGsRfzcJFpeCATTxVuK537br51xfJU1kpy",
  "key27": "3diskZwGi8NSth2obsmVZHEwqXusB1ktdwEev5cJ7bWfqzgZVx8uLaMKX2y3VzqBqu6x9CT3vnQZBcUkWZN9ToFk",
  "key28": "T1fDL2WcJuoXNXfTL7vmmnsJQ4pU7sTKSHmsLCiBtZoJj8hhMBXeRaGA2e1vXq7bXeZRX3XdznXKnz12U7C9ugA",
  "key29": "kKAXdNPS6ihr2Ui9cUVNv4UN7AGMgjVFQNyQXj35Pp4p9kWcFU6Qdc7ETjg48et5ShRGQeGQpHAXWukPvSetiMu",
  "key30": "2ArMhJE5ZHU1vVw9YpPE47T8Vm2FsZdHfLqDQdthmMUfggYtsmwxnP5mKVH7YEgM1oWHNwqdZ2C3qcaqb1U7KbJV",
  "key31": "2Li3VNYJxceGQ7UV7HpYHQUUTGEnHwqmGHcfiUQjhvCkbgtvNt8Homz4bzY9es26Qv3yHTMUeQBVMTrvAtE39vBE",
  "key32": "5L68rZqLaQ59Vcuuu25uC8Q74UiM11bPHhGTCPTZCm7QjYEzJ9U4Qduw9vqTcFW1xx8Kc5ZuMs6tKjuajtN79B9A",
  "key33": "2TCJ158vbSLEdwKSMoow8aifYbWvMjhB9raZDCE2rbtv4Tk8jRMKUHnNKFeorXdCiyxtuYU8ctQq4o8DNaNoAuy3",
  "key34": "3nDJyABraRmyqGVXTCjV61wPiFU2p1CZCipMyRe3US2b5tyLwb1S6HrFzs52sYZt8vj5GhkErAqcUPoXSpRtR2MC"
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
