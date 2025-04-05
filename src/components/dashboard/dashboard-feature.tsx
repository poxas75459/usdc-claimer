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
    "2bYrGhcX3ES45z2wHULRTcHzh8w1N3QpgGsEJpzdS7RkAhpnKV4C8ZyBv5iVx9Ty57gW3fTpZ9vQPZDF5ERwhycS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NY9yZHxkQ9Jhki8nw4MbqpXqqrbo4ccf1FrMjCFzabr5LnPWiDVTutHJyax9mqqqqEErMqooqDE8HKX33U8gMK3",
  "key1": "29g7keVZuD6u5QPnQysEwtox4a22EhWYSkeRajvTRSv514V2rgPtydMjyiXtkX5EEyweyXMR6eR66Jfy8YvYWcrH",
  "key2": "3Sf2ySdNWtH5LDEX4GNYxqA1eQiduF3X42Lpean9efYkby17cS2Q5tfcXhEWb8JBNjYw3n5kVDGJWq5fUvqKXm9B",
  "key3": "4e77BxvSeXCUrimHU8vAW3eBcKSbrwo7TKsTqGXgdBnbp4w1UimbPbqjtvPqDqmnQsNy93hfYrzZ7zcDD58DEupu",
  "key4": "4zfpiHutqj9ouPNVbG65EsCFsMLGWSPqYQiTRCVCAzj8mzMYpTB8npvk4NePt946cV22vJsNEJ3apZhNXsffNqUn",
  "key5": "ZXuNcLdyG2HgRog7vUaZ8WfVixfZG48h54E1698LfjjYGFZoNfgntbcpw6r24iAxk5wp67vymxsQ3tCSL8tQHd7",
  "key6": "5x67PTpNMn97m9ozxJhm3bNVty6SXRk5uK9PaQt5LoXGvYAhCUUtUaw6LJxKvS6z739GKQcb5pcUKNa1McSr82Ex",
  "key7": "3xZdvs39t9pq1qE1NBXVYS29HwJKDnGpygxcNaK9gCayPpL338KQa72b3M6WDo2ELDXemxDrhbz2H5KyGk2mEAF6",
  "key8": "5GT4jQZhSvUUYVPqnoTiQGvJju962KbTbE4GisNDppU72j31CKLTcBcDGi3kNtYCxC6cvtMHVLS79RKhMoCUWkGT",
  "key9": "2CZGL9J4aHL8FC7Y6dNWFZBFXgfurZKkpHgNEkzvg1b28gmAvHu7HNfngNxkj5odrCfvtL2SMZRgESkhLfhkmoAY",
  "key10": "2YKpSMvARPYciS7FGmhRddSssRzAtgm5dUqTBDVqG8H6crPwLwvFHFvY3XGNvoXkKdb2Xy3Pu8ipHsgvj7yckqLb",
  "key11": "4hG44TL8XtgzTDTi4vAd2UfD1njqC9NqdsJBQL3ZgWaEaeEezSH7zwDAF7hEYR541FrFUkJdjDbM631H6r7GoP1p",
  "key12": "2Z6XMkUyCp6iwHBo9jdP5ULZbQa4BeEyrFzT8NTavb37Aw4VRnaEyzJ2Q315kCtkDNRuuJqSEERbP9fF842s4tSQ",
  "key13": "4a3Vwz4548YwCAQpR5M4o8tAV5XGo6sQnacFaHTnZe3ZhsRPi83c4Z7u9zWtzdChy9kZ61Gvrp32xX6TuuZyzGyC",
  "key14": "4fNg6GMiRoTfNfJcjeaQheY6A8S9TcfqcTwh13Q2Wiu22LMPb8w62BGvAgVd6pbkCDrERXFzJjTTjVVpDVgtUqFt",
  "key15": "4XT3W87ErP6dfn4L9MztG2vKK57sstY54LUyVCpKzMdU1gDBsWuoMQpKmN83faimufAVqFyBgK8E1jNQNCKMBsxc",
  "key16": "3vkRVowHYqxiahcDqXRUURnyscJc2EMpDM78DEKeuKb48gDwyjZFb8PsxBc21xCrKr1qP9THck1x6u22rAddNi8r",
  "key17": "gu9xq6qxA6JpfKoEr8w7z5ct2E7vmogQHmeeBvc8MPYPBaaRx9oRq73zYCzvWxyFWg7rzGRAorKrzjPCE2D8Loo",
  "key18": "3vCeezSCPi4SnE7pX6pivBnWqiJy2WWLF9rjfqLjEsXYZptNXbDsC8JLqzrLvHsrvBk7JsbjCpFxqpYfnGJZJSAH",
  "key19": "4w5XLWbSqwQRbzg5DYNJPdCS17LK9a1DKPweRRGqXD6geULj5zN6k6bJ2c1snJZkwHivmksBWzvpDXar8ictqLj",
  "key20": "2Sv46wnq19hocviAcSB1SZkykrtdDNjFPb96xTEutWYxFLhLvvqoUCCx1pW7yutKSZ4kbL1Vz1g5hBKzXtWKvFTs",
  "key21": "3gtb8t8ay1JWMG5NuU73vk3ZEWBq3nVXRgkCTTiJHyzsNeakU7PYpfZKvXG8nkAfPsppVKMHemqZFEZygAJgy62m",
  "key22": "4vw8xQjAmDmo3uknmktQBpY1cg64yDLTRtndmcJK9PvRifiGNiJpeYc4g7udWaDz3UdiPze5Ssx7PpXiN51PCnDW",
  "key23": "4RaHuSPUDT1aMEhnUGEjbm6kfDqnjY3ArMgpX4evZDPf15gYEJU5PMuvVSboMwtjumhhqj7J7qhG4K9NDv6ynSKo",
  "key24": "26GSqHajVioir9e95LP8rKH8g6xfmC9FAyswZA2b8iMsrexp7BGPP9PhMfbfqVBF9J3dJUsiMBkKWBbWjTaYz2s8",
  "key25": "3upDsVQLr5DedxpuyBTvRRNej751fRxMCrhYwFxk2WQovEjYXF3gzThWe33kFgviE3d8Y4yDa2mnctnNENmLuLzf",
  "key26": "f5SSYYQ8cSq8Qork25iCJhuKWZPidddmtJacCtLo5vF99hxhWUg1evjtCPTeyjYaa74n9MJPiiAc81XRhNGmkeE",
  "key27": "62Sif2aNnHcdk4bnhf1cx6gMPvG2b8jiFcnwnDA1hT7gocqvC71EhaoC212cYD5ABq6xDuWLyVLke19ERfB7arFe",
  "key28": "4bRpwVxi1zJnQjGZ536KJRiXPWJAjyYKbMv9Res3iCFUndXXGjzNymGaY8Z7GLuFWsHs5YtuQuXAtfgicqmg6T6q",
  "key29": "677uoquJVued3vkTWTWtTJhR5PGJWPJZB67TDRg7V5cMowmmt3BGi3or8DciQJM5oAPyfmnbEAv6NkKkLe5jgBaw",
  "key30": "2vJRvVZ1pNiqZqtXNKS8HdwUMZhdsHgjEP8KwvhE9MFbC4aQ3oDzC4gcrkbR6JjcCo42QrhmHPvUT6SZA9DaBn9G",
  "key31": "5RWGtUVBhbV4seVKmZLMJQFizYrTZW4GhwGVMqYmGtMagxPDNrgySGG4oNA4KiV61TfD26F75cdTJ99vd4JtFLUM",
  "key32": "4xuf82gP8NjkTheg9AFyJAiH8fdN72W4ZsaW1AvV67ct9WZsrcZMotANnj5hHqGtxULv3K8c3EFkQe6BL4Jctc3o",
  "key33": "547nU1MXgjkqnEw3oKcne7TctkJu8mKJpPDEuSqNu4agmmmuVUW279mFZvzGQUSw2nKVDEi5cjHug2oPwxbFXAir"
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
