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
    "4LsNafMLmJ1qppzmuRLhQhv2a6hKbb6JJC4Nyormh6rXmX2p2TXGWjqJcj44jM2VhUvp89FAjsk1NZmipDHN7f84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33xEPvQhjiFc8r1jAYDicptDKJ9q7qU5yKsqrqX1MamtciYY6kKWACyEupbaPbMmCps3guiaCbXyqRGKMRmZpyg5",
  "key1": "4ndzTYsxcgLcduPqNkVsSpC1vs3JeXdzYCREy6xEmWFaccZdGXhxkRpTCpb6yLoGBUpRy8c17GxUTjb1gJsEFhTk",
  "key2": "5uQsUCUy6kEb5cjTDTWuvyeehzPUB3GhsJUhDcsrqvGTEHLTke19bSTm6AHyQtAwE9CHFgnJUoEZDWbVVx9iw8Xj",
  "key3": "55TxSSwdPDE7vcp5YqG9u4BrUnoB65hEfa6NjinD3x3PpP6GyUSryxxgVR6c2j5EKXvc7ciAasMkFFdRuyD4CPUB",
  "key4": "r9s2WPCXL4QYoTcRKNyZ5r4PGDVtmvbZ6PMeA4Y5nGrUNRYM73NTzG9KyuAS5kafZ9nXdzGrDHCubxbEYZChgVZ",
  "key5": "5PUnKWwVHvezR3noXBRLzAsUtS7x2ZjbVzcx4uT9xxgTqaVPj2t3dAimRgzhPU3xrwjY9Mw76dqMZRPTWtYJ8Dbe",
  "key6": "33THUZvB91jGRrBSyuNBY5wdrFH5CpFmmxvFH2L2eMAeb8MN4cjTMqVzKZtNNoTs28nv8xSoP3mG3bv1FoJs7qtv",
  "key7": "3B8pVLT1Fs4CXos8wRCT6bkMs9zyvrqbnj1MgouwcBTkqCMGoMK1g96qCYo9T7wJ9V7Gchb6Rn5srDhL7rYQMhV8",
  "key8": "4ebYvhfn5XbvWyE4z8kCXgBGH7wUK7nC19WFZTvmCAEeL8eVKA6snF7chBjH4uacJUvpPrzqy2YRRKizeXCn2ySn",
  "key9": "478zw3TTFzhA9cNNsHdBtJMemrEzAM5mBGcYNdUm8Vm5eg3FtqZseH6sngEsDiXJHdadxHnxfoNcAJ8mNKe61y5E",
  "key10": "4xTyeyCZcEPDhGaptbDRmRKGkpeaYU6bPWdqu3LhvQ88SmiunvZn37HEMfYAkA47judPHL2ApuseAMDodmPnRqGv",
  "key11": "3K9QeksCedGfeg1RdXQ8xSsh9UhyGwrqmDvy62os8m1vZ6MTDYE8zd5Z42n34rgZPgm9wn2nAxCMY1y6ixRKJDZg",
  "key12": "298oA4bM9PRE1JBYxTa7K4wfDFiW3MnruTu3mXLHXsiJzxc6Lt81RABnJVFSr4GrnnLpHfKRysRyEpQgaATizRmA",
  "key13": "5s2fpMyJoAbKyMfhdwq9brAKG6wKYRADP19BGr4P687qbBsUBV26CPhfJKqFjmCWBAFW7xgfGSDKesg4JVDnwZeJ",
  "key14": "UM5mPaYPGjR7QgNJ6WUfmf6LihDaYMVGRiccnyFSoQA6hox851DjPhVcXjaNgLKY3PuPUDftWiic3nK8XUeTvXj",
  "key15": "4nLcR9vVjWemVAVB8WD8S46yH2qMsVJLRv2suZd9KAYGRd76TcscRYVLxsuvBNJroVeTQN8HEJtonaMb5Li633Sq",
  "key16": "39hjK4mHS71wBVe6e3R4Fs2Xy59MExn6GCNJfASaErmRvtJtkzQRT26e7YmRfjt7UubcMoc5LKdJje6oqfxtwsaC",
  "key17": "6ZeBPJuPnZwQ1AHrrg5PoSEdDWcVbP9k6CgqcRLWM7MDDkU334AyJ2uZQYzXH2CrXgji6C7ra5AfThJ4f64A7mF",
  "key18": "3Na8CL6aoEfVKgtq9VG9pPhyz8idKb79QuLYFt35KGJ6CnuzTRJmr62j3U8VAMB3z51VxijRz7eATyR3rMQoT51z",
  "key19": "35pbmEe7wNivV5o8nbQBxgdyBu6miVbWi2AWk7xiZw3koyTsp1FhXs8KCyPXYaYWuRmVVCXHGuM4eFTz5FUQLTom",
  "key20": "4AcGKMUFe6pykPQaGEQEqzYChx2t4KvAVvnSUNNynNErkAVzTDtKkP5LbCYoLPU2J6HgFxWC3g7o1HVtSfSWueva",
  "key21": "4SmcQS63DEp24zZMJxnavNTLZF397Nd19uaNLN12BDK1BNfYEHX2Tp4HhGhdhsdYgkMwsnZXtM5ZXd77Xs92qaee",
  "key22": "4uERijA6jsh7ZZFygAD1DVVB95oUgcUp1X4xbiuU7zoDRznnG1ybt2zndzc3fWZcKgdKr3MijYdJpfPRbF9KPfat",
  "key23": "4ej5BPVsicVe6AbSc5H8MXefxjM7wE3R7bvUUVqi5V4GvRfLapUnK1GkkWfnp4w8YeTdvLmKv6Aeb1sLgtspBxnv",
  "key24": "np64oSjnH3XqnBcRnRbAUX8huibttTdQi7qXSnAt7F7uTbQBGJfj2M76Ne2bjk5LDcUSKMKxAg31w81v423rgQU",
  "key25": "376s8wPEuYRShsUjvqAmo5Pg2wiCAE1uFVgpujXQqPuwyNV1Sj6MCGecC26ktJb5NFKRkFw3pRTEg8R7wfUXhAtx",
  "key26": "2D7ngZDNLAVBbqYegj4xXsotdthtqxx1TojZ39dhAaKec9Rb6kefW24cV5Tsi9bMs5paK8oUDeTx4hj1YKDSUwGG",
  "key27": "5z9noK4kRLwidqgQoXmxzjEhJNAqRHtqnKgPAAJYHW6RMEuSv4GXrkLPZBt1W53vqhZ8rWkSwkcN7mZH4rCf5WF5",
  "key28": "EEc6ixRzshuzUAyrhfW8QBu5gCoDNRC5ooavC93fcKthEvnkWDfwvNLcXkQJnDiJr3SyuXCHj5GEZoE39cTibxW",
  "key29": "2pLXpz7URUYKEgaD2629UZ6SXowPsx8Uwiqamw7BdYtbycShb9kpLhjQVdyboXVGo9GM6FiTSaXJoCwfuJAzNMaq",
  "key30": "onLKGsJWiHAbvwG5nmpnCfvhpZM9zh1akutF4R4m3zhPDsFyhDUtMHiYptRYARp1WZqqxDcPx8jNyZvSVHmmjsC",
  "key31": "2YmSPf979FzfZyT5jdiYv6PT6GSCNrzEbUSUrLPjEQfn4unht452giYtbdNsFYRGhkwF5coaN3h96LTT78pPfbWK",
  "key32": "62Exm4nWg4Fisfdh4jnCHK4ZDesBQNmeMRiDpqNFXfJHXtJuQtoRnerZy5AtRWG2a64mStnsXRA4ypw7wzXWGk52",
  "key33": "2HbkjQAowejSWNGD3J2tgRg8hSVnV8Cb21mzyS8UBm1vu6vXfZG6Hv4DUEgHMuSeotCd2TUhcTMaiTTWWwFugPSC",
  "key34": "2eaBSMCP5gmvJkoFGfpEK2WPcoeya9PzYE2cBjcZozn7sCm578Yzf71W3K8gdBaREDBUDeag2sKKTZ4DT6vnvcAs",
  "key35": "3JrMqxaZozFAoYNJH2EHA7y2mRRxc4Q5scBTFrNUWNcKVqZdJuUPd2bJXMK3wJ3iDDgd1mSnz5G8H85ERMitKeAA",
  "key36": "3nFrXsn23GGHyweaWiAjwG1iND18ncnYJ3fsq6VuWaghUdc2D7BWp5nGwsu8U71d7HdWimyjWgcAEFgyyBv1VBfz",
  "key37": "cdjPDMoJ43byXmAhteBg9J3FXPS5t8g3k6b2HzyDFnwBtwEBE1kBx9S2bGZbwcHSQgLTQdHQQozWiThA6fwzCVT",
  "key38": "39DvSXy5SccBPjHm8vovtxvLwZuzNq2a5UcRuTsECJniTdmpdfwkcCrnc6pma1rWXoabdLK4CW9QE5VVgtZJhs1z",
  "key39": "2WSNUhatDS9mkqtZpjie8pk25sqX7zRBsdp3aSHcXGHSULfBEaM4d93wbjrS2zx4K1a89oyVTqQ2cQ75m9vKfDXp",
  "key40": "513qLaKxrG6wVuxCYsuSrJhVcrBReeSD5bYApghxXiDjLRz264bJEqgjZvWi1Yr25gLDsgSnbHSg7AcxLe2EeoL4",
  "key41": "3vUsGCsMevjxsADHkpbx1dfdt4YzTgpXEWkPzSSMksKpPAo961RzWs69cPg6BwVVqLR3h3EQ15qBRjGx5gmzbZrS",
  "key42": "4H5rTLufxD7bDW2cEEd9iCHme4oyUe2hkgjC4K3M6HiYYUFQo8cvLRuG26Tk7YVssKxhGY32MwrnYnJKeFGs2H6C",
  "key43": "3dRYmKZThUYn31JveY7EPjpjuHQurHrxnnwq6ozFva8ycgKXA5XPt6czRGnybhWBPmV2gtMTdnbFHTs7x4ShyFTn",
  "key44": "2uMy75AYL98uQSThRBusPtTNtbtMrh3ytAY9PzoEUW3faGALg79QftNEB9FfpfhRK7BcvcdCcUhrFPrtarVBQnfQ",
  "key45": "mUxPb6Nk7m2c4VSHP6RA1Wu2Sai9poZ5dQFTvX544kLr7xyqZCGQcs6wkjzQ8fxLq5z7jqnkZE92L9MktAL1Zek"
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
