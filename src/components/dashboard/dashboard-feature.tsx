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
    "enck32VqUkzsxymcD6LokAUnpDdijTGot5MA5a7Toawz7G39trazH1wYBz7yNxgFCvhZiAUKf3zcgguTTvSCP9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2avhtYbU13U1MfHGbgHf7oDgnEoLDS5PDYp3tHGKPdPtofK8bfStvR2iYbzpa1ANTBas7bczM8hQCzEeyvKKLV",
  "key1": "4WczURwGLnbScvMRe3NBjAAHxGi3QZcCGzq1Y3dtVKGv92sfXYsTrcWaEdP84dmXeTDzzQbC8NA1icfUrWZJ1XRa",
  "key2": "5XjVJTazGbVkX1GwpMoDyrRGTgtzKhFCJXLjEkh25AYwKYu5VxXMZxCcE21t7qfDAyCHqEMbJMu2v45gVxu7A8iE",
  "key3": "3tAWedfpeqvK199DiHSzrEiWRwg5qQU3AvMdaV6PzaqLtZnCDm1EbXZAi85MCDP6RSkGV95ZELS178bj8hv9We8j",
  "key4": "5oXmT2XtkPoege8TaSnCLEpueMUGxXnCbikNRdR5JfqgJBmZBiC1onzQs9KoaUZwDqZ1P3XEmRV7bGd2BNs28nmu",
  "key5": "5h7oJNMFLcwV38A4nCsdoXRdgaQVbQ63jhBGQJCMzCLqU2CtVR39Roy87aTULNCJteTMnF3BFC8YVrHt195gd65K",
  "key6": "dBpAS893Sf37Xngrb1dNn7N2jJaQXFfYwdZvgBXC8b2jVG9VZhXv14REyLX3gNXETndzApcx17nwA8w6ifMdu8Y",
  "key7": "3oqp9e2xMEMXEZH3Px8ZjQyBQJi1pWnveFCXMVnC2xSXpDnHsiDNq5qQFvJ7LBGJn3TEksVpEHhLF65VsHCn38oc",
  "key8": "3rHHjRUr8bVLHFjedU86ftBz6d3RJPReM6XGKs3Mgm5syCksHAeM5CBPwBkpuSgYgb8Ga8Ji2Tqzy4v1abbwHeaM",
  "key9": "Etw6F6SyqLTeJqZyFVTYUwwp352PwbYMxue9tWezzMSwXcERW8Pd8mvxP2ZecMML6QSL7TxX4TtWnduxL5y6pQz",
  "key10": "5YSL9Yv4sVk7eAj6r26FJYw8XtoiCwS1JcfQnQnHCgX54uQ9GVqnbWg8FRYCMgaMLwqtfHMvHs5rrfVzLUXoPuxF",
  "key11": "47pX3BMQm3ZLsT4E1mczHaUM5AsEfTCxVC3jBVdM5gQ2T52kXYALL14djbAqkDPo9tCtyZiBit925CwTgbq6vqoW",
  "key12": "2sMdQR4E9nxrkb9ngJY6W3akBijZGn2veZZkrPx5UFaZJtD9nGsC3MC9EP8e5ZRVUxt3wfrT8zDXGMGp73tiGRyv",
  "key13": "mL1dPc2eESfrKoLeEZuahb9qDjzmKhMEYrZGtSq7WN5PG4urS3TzNTBzo7AsTamTBCZTthXPjTBnD2UQVnAXZof",
  "key14": "2bkjrjrY3Lo7seH3G4sYsnfn4kk8RnnS8awkKic75jUxhk63e3MV6nCe2dhxz6YWXchEzVcev3e8quF7qcJyrFJr",
  "key15": "4QvP5KdRM4wKxsFCXYszosC7Pirdgfc6xpuzvT3rcJbbeLyLW1cuY4eBXkqJRn2XYEFdXQLvPsmHan71TpdaZrAx",
  "key16": "5vAYrc2mrZqcuJiEMAv9sWwKPyfnMz5Xe9U7oNhqn4jhwT8TgJorfPzmeQmAzUSBq628XAwfTEviBjf4kNrp4whK",
  "key17": "47oqBw9cZzzPqepXXWRwDdNwTk5PWvFdeXNgjSwJ67mfANS3rvpvNeka4Qf52ri3JairsnVwNg219Www8bgppr9B",
  "key18": "4BvPZxMPDyL6XecHfC2xDYsnyKnWeihsPVCEB1jEU85ZS2S51NvKwiMMKXzFhrkcJ6ffVnzynvjEXBtUQGbX2m7G",
  "key19": "4DD2YkxK14BkKcXaq9Cn9fLgMW8vFR6WxHdZVoyHS7d3suA6821V1b3rhfL5GiazdojJ9xa7RzZpAZtwq42QLMQV",
  "key20": "5b1viSb26LCtPYzYEQw95EGSGhkBWdVU4ESzwpcm6UJu8pdVGKESoQvXu4RnRwzt7amM8J12GZpSDjbAWSme4Sr8",
  "key21": "67oH9utG2bosrnzC8kdJmrtAb1MCdAGCXCQsT4NeUKfG4XDLKf2XtSgv44y6QQDHDatPKrD1tMDWhaX9f53Lj6y",
  "key22": "2EtM2PzzLsEu1hk9LvR5hn86twCEjMnJr12CAMmiSB8WufGipVDTDW9yF5YfMNaVdACDCWSWeT14UfA4RPrEM7mH",
  "key23": "4gvvD5LPWw4Fj8K42d61JeHxfcJqpPrHAeCaySbP538gguXc6CcUwEew5St2v5N1aLmkbHzQdVpyn2Va7Uydxzf6",
  "key24": "2ARmwSrWLHE26pZgXWMy67yVkM2i6qpvhkZ8z8rmgXYsAoREzBYYyqpAD4gCDeop4ybiZJGfkXGCmhi1XAZ2X9gK",
  "key25": "29UUytAefgfrDAKPgPddAubzcVqSggdNdsAmwjQT7sUVpm8kVhT522CTAvjukz8ZShjfaQ9rMegom8J1dgsK11rf",
  "key26": "4rp4myuHj3mfyh1DMMV8R3zE4PXtYMPWdwSopyQxJnN2Si1q5tPxxTPywn2MrhbAfRfnJoiYLR1MgWrCXLDvVqCp",
  "key27": "5ep6Pvh17dP7RVKkMh2WgWp2BYmFwnP8MtNETBnEbB7JQcAJ8Romc7FZd6vpWucYX4kE3EJE7kor32N9XMiUpCRQ",
  "key28": "5DwkDsr1TsWZM1rz336FtDRsL9FZFPUwQhq1zuTJVCBGTRqZCm8J5oLwJK7oyhi5K1sykZmKZae5tzN1kyNbeJij",
  "key29": "3HZutYSUwApJAooLAhYc5pbnBkFk7AH5sGJaotnWzjNwxZW1YgEA1hTNobdBotwWdXrW6qqkBznZCzcmAiHamTr8",
  "key30": "4fhuTxNYNTGZvTqotKUTEMXy1BTUcHT1dPXHXGBinKwy8sokqUKR2b5Ci2Vzc5XEazMGCPiYANHVAtZVh56bS82j",
  "key31": "NmGFBdFvGWoivXSzEadCuesrQKDsjW6dBboWpjReH361wDkbiGmmfCvrTYDNUBuEVvjqyhqSJEsQ9Gg3hmzjdTq",
  "key32": "2zR22qcko6hyDGJc98kuXVfD1jRrJxeTkrdcsjkW8oAwKEuwqUAVSNvQUmXBSuzBipyETZjnJM2FaLZt4LB8fAS5",
  "key33": "2uoxkuEwsBUBiZXA3a3DicozowzucBaXxa2Dq1s9SERpDPGsZWvijzCSF2PvYmDjN6aXsEtsPvj2o2voEH93phiM",
  "key34": "2sJccswfhPeF5fAZ4AYyKmuGGN94TpgcaGqo6xJcHPqJuZRky6r8aVkbCGgaYersuJDhf1DtGdL84C1jpjmt17ku",
  "key35": "zTyPLpikBeppR4z3aqqc7nWVW6EFuke5ssatURjkn73ZzidzspKxNYA8hYVHGFjsETHT6uULGnyQwcmyPbRahjN",
  "key36": "58hvcPkhBXp14dBnGXNayhcXE5ZqKUzqXYSdgVULNrFxh15VNx6LJQxjSdmELndQK4mpigwbYhihskakCCwPG51C",
  "key37": "Qa9Gz721eYdRwNyXEsajtj3Yn1cvu9bZKwNQb96vQkUXEnhhFuUXnPGifK9GAZQRsw2Aw8vaqDFFAhjM5cWgk7y",
  "key38": "5MgJ9J11CHzvpyu9jzoamG5FpQmaaszEvQKwWpu6gsPSoVuWTxtTvrQfk75ke4kY6At7ZweveURVyiEPvC6gCGep",
  "key39": "UEkCURjsTs5pF4mre4FmzwjkdQLhUNUWPWccC7cSMwVtsuq3RAyBainJQh96Y18QVPmLvJw4Tu7uKynEbzSHgsS",
  "key40": "5pYj3sFcQ9KzMwZBjvM2EDEHnczdMvL7KKttaLmECFSSEGz2QenKoBqzPJMTRMzw5m3YawpkgLnA3NiCaSjURJXC",
  "key41": "3A8EAY6VjyksE91SYwpViLuMKqZiyBZiH8NEdt4GqRjgdJeJihj15WAgbbMdheajFmCgPVAugQiNAARVeXqhYv6p",
  "key42": "2KhyczRULLwQUZ2XNgoqhNLignsSNgMMb6yiJG2UUDpjeLJBb3jPXQ6eM22PfSFNnwSdYXupbSbZnPBFoHkqHHGA",
  "key43": "2cWwUDgn8ZJGe3w8Q9DdRQVporrFDBDrAuH7oYbhkMHtZUqd5FWRY4gZQn5bou1TECPhLy34zXmL3gtNZWvqLBfv",
  "key44": "33VPc3GCVJFbEzfVaZE8sVGoKeYNhDmUSYRPKVhMwdwjELHsJ9LZFT8jcF8kDekv6fpVJ7gSHNcdagCtZmdJT1j",
  "key45": "3JFW2tb6U9zn9tCYBBKJY4jXrNxrVSBpL3QnVoKPB7kjCqgysVV6CHYmxjWhLq4WKiCeaYxKmdsjhQqGaZugJ7md",
  "key46": "3F41wJ2Z66JiebJPr1AFNDNDRGFPoqbgLWcTcVPPfquQoFcWY8mbc8L1CC6CqRiuQvo37FHXHgWwb1weyBm2RnDj",
  "key47": "5g1VpFPcvPWAPzQ4zLVm28dcdGokQD5chgx6p6rzccCjwV58u5KNaoFSkPdv68JAikDc5KesjoBjefGc1EFFDN3m",
  "key48": "5MDMKcaiAzxzUQhY5fJsg7NTqTinniR5aEHuxbNYBRTSKAHW7nJMwbfJCLcayGSGTUyWoDQ6FAzuxFzVEDBXNSSv",
  "key49": "39rbMg6d2D9ggdp72PZmRcijn4D3NFF4wQJB6WwDNayBtuL6nCXnmfLeJuJjSoRrD8sSrVp2WfX8kg4c47uVeZ6K"
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
