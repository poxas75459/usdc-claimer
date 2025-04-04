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
    "3gQyhMXgGFQnueQsmQRVCTsnMwUNZsx3YKutk37taVjCThTE6yV227H5seEjYR1UHEy5PPU7Uri4K5jBkn3KQJrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGUChZJqdBcfjZVcJwjVNc2sbSV3aRJCsdPKWm8SBXEYv9APJ4B2KAxbdq7WVfMwi3o9Y7J1usFtWsv2SAyz14a",
  "key1": "3R9rRvQQRhXRixQuT2U11Tp8nbqasHqwuPymVyRfZn6MFgqgPwse2F7C9qPHGRXNEHEQAtxcD3YDv2PZZcK8cqxM",
  "key2": "4vRu6BBjNLyrhSFJCp2z3hXsh5USUaM5GvjFYmZntc31BZPuSXdn4rpK4o6BYDE2k4ENFtvC24Ckvh8BfPFGts6s",
  "key3": "dSQHaUwRWT5Ne9sUxYmEkMRmjM3WALJc4RNsSPrYvAjmCzuprqpjxD2Vo6ku7u4MeaZy4PcxdD3XApk5usZZQfk",
  "key4": "5cyy6fsFZXzMp1A8SouBQGwxCrBTtW5623Q5NLjppimhf2iMubtAPXVmKDFiwJJbpnqiVLLFzkQ3v7CBevuHKmKG",
  "key5": "4pywPZcRLkcTJ6wgpPk6ep25vcbiZuBQq3L4KQQy8cNAmVuXEziYivSFxzpSgzZ2L7dwNtuuhiABpBxm7KsfBEen",
  "key6": "24MJBzuSyhkoqfU7Rfse9G5bxDvyqVBYJAkPz5mE6aDXdHVuyQam8TT83bPcyNN6PdHW1qe5oSsu3xUth8AqkNVe",
  "key7": "3wAcNKMCGyyEfpigsYu51CKY3rcYU2x1pf15aZ1mh1JyGyT3j3Y4ZKthqpD7oDBZHdSvyp3vuDRogNBfo4HP84s9",
  "key8": "pbTJrcNNn18LxZLKSV9WK1kf6of6qDckhVcpf3nigWbhDufSCijRn25CakTR4tX8zc537ojcUMSexM7zdvNMUrQ",
  "key9": "35Q7a4KVWbbksAQCHiPY9Qcx3zBkhm99KjaHL7s4ZEeaJXUjyYWaysXZiUCJKWCiKe5RfRo3NX1HaCCfstn3mgSA",
  "key10": "3b48jig6numae5b9v1V9whEDCLkqDoEkTz1X97P4DS4g5D57bSF6e67nJn6LdTb44u4jnvJ84eaCLb92Z4pr122c",
  "key11": "2vFqKZEuAuSnYsdCqwZ9CaQ4UazcYE3ndiEz5tg7CkiMm3t3t5HQHrunwCWWusdjn6b5MyytdNQApUD3SXcZMoEB",
  "key12": "5tBFSdVdzz8iTJ19w6fFDEADaGbitWoUaDJ54w3mxuqHzetK4Tw6Q4vGnj8WWByezfDzGQkJw3rHCvJauy4osmzj",
  "key13": "4C5qBSGTBRtF5g2fG2afd1WbmpDZU69sdiG6aoSa1JQ43ryZ5q5ZCNF3JBAdFGHANBrUWksT7TzQm9achs9QmBc",
  "key14": "44FgDy7xuES9fAziHvvQJWEJSfguDAdR2t1rQ4fzrPfyQWvRHHgXNMHohwWv4dt1LuwHDprm8KP7cKZEKgvHFEwX",
  "key15": "5Cssp6D3tJvJbtzR4ArKdregGmX5c6Tdpjpm8bdcqYeTZVUUXz75yZDVhvWgR2qCZzshLFDdhasXSDYh9Wo4tQ2P",
  "key16": "5A1cwgc7rYU8wdo56pB8FRSN2MgJhgnjMV2CX53EEJXLtnvVKrdoCb6hDrFxXRQTio8JsnU2Xwzk9ziqikB1iE9o",
  "key17": "5Qot4q1QwJQwiir9JkfuuPMPH5rnmMk21QJRrBxhZDnn9XWUWPdoQMbi64m8h2rx1bfcwZ25HoXFVhsNCh3XVBZc",
  "key18": "4j6VkA4kRK7N9ipxkLKXt4fyJAHaeAkQaogmrN54b1hQeQwKyCtFau8k7TGzkQJW8GXxSGcYfJYJzqRKipFzBNk9",
  "key19": "88TWtWpuReprLTMvoNTYoJHw66soZZ8ZXW7AZEnK2YxV6Em5hZT5PXQ1QJ1xgpUPFirJErPsBgZYXyfh6S9M8xa",
  "key20": "2ESdWhAfD82CSzeyK73GjgWbqLvjQW3Lydbv8HvuioHzUUadDaQ2H9Lo76VR74UpxadotpwLmQ7kLNM7TgwYzjb",
  "key21": "41zzuyqpXGv3Fzirogut7wFbFCXNuxCQQvZ2y35SFZgDvFTDqbiqyepLZLUUVnFS8CJygp8BGUZ7wyi1QQRQ3zJc",
  "key22": "k4t8h3Q9PWHRXKCV1dTgRDWW32sb5QAXN7rYAaPqRvvtsSZYx9WrpnaxtNqsui2q4LBfv6yCMLsXepAkvZ3sV1b",
  "key23": "5HWdD8PpbXDofkb7H4GprnSN58HkS6miMaKgiRvSFiXp1rztEbvwxAszbWKGQDz9dFEMNJcFVjb9guY54vQrxzPi",
  "key24": "4rhWByNBwgunV44Bz7qGbt2Z9C7r18v5nrp6aNS12yajS1ToxpokYdri75MCSa2TQz9RkTLywHVrugb3iB7Cw79n",
  "key25": "3H5afpxXTR7qYSryvup9CZnb9diXWRHxb4ViWxyGwbK4YuSv55g7p2s6uNUQdzgpYRSCjfUSnaaqfoVHkdgUiR8f",
  "key26": "5B2KCWfwSquAUXjRyKARt1wPNKbuVGxydJHt9GJ93PVWHr8ar5xYn2g9YVKL1ZkJScFprN7bSiKMKZ2P3Yxzfonf",
  "key27": "5uDmFajDtvSnM7abBtZmmAVdPZbpDMVooooApzmWfV9KxAuozxjNZXyFzRFwbaCgm6BeBas55Y6k7caF2fKKwPL5",
  "key28": "9zbnW8jmJinThGXSyc9cfNBzmEVHUrdjnmfK2vP2i6MH1qNXPwLwWxykbqz3RHP4Emnb1hpJFLzVxJpHHWoFqFr",
  "key29": "4nVsLwHoV83fVo27y7dRbzACJ1oGP3hdraCFzzvBNKGJmJLAz82T8HabZa7mLJsG64V2vRcVQEXg8KsjSe1ats6k",
  "key30": "4XWm1fAQq38Qd5fYgZYkHj1BqnZv99ETfWyVbnDo3AzuLYaPiLkQhHrHJ4nThDZL2eTbnkTt9Yt3kjG6R4BLSijS",
  "key31": "AEdBhsYSVvHS9N63ZZ1BKCbJW6bRPm8ECJ3YtCk8Zeeh1178V7RE5ZAo47BHC7db8fSLXLVCZCaP3AycnLjgPVF",
  "key32": "4ZkTzsC3fbWYMtYk8vErHbYccJLsMumsSqpvGxJVkMGa1iXdkmxRWuUNLNduGvZ3YjzWAsCoTmD7moZvtgDpznMK",
  "key33": "4RMR4BCS14kLxwjZP1bAy6xgRxAKYty6KHF1weFGXbpPibG4s4mnyK8XsYgaY635ghi13zDoWRbPH9gB43ckhnof",
  "key34": "3iRRgUzm1tFcW1PFqxyZHUUfAmC9SmAWL3aGPjKQc51VPTjsPkTheNZ8ZMsoQnnnxaVMWBjGVP7F7uFzhi3Lkyt6",
  "key35": "5uaHq8PPi4QoQTkSjs7LmwUeaqRmrsAgJ7wvemdrbcqBBNfTWc9ATFtV7gLecUYwMkRhYuoFYc8SWiysW8uAVG3U",
  "key36": "5ZEFWTfV2xgddz3LEaBVrotS2gFLanKeJ8yNa56xC2jXJsNwRpKjYsvjdjQg42Qdqw35gvHNVdXVP8vXGN26R5J9",
  "key37": "2228wPv349GG7dRXffEbKJamMZQoU943zYYqYAke2VLsmx7jgiokHJxRorXsbz2nj68qtwpmreWMA4XSpuZ9uW4u",
  "key38": "k4iwB4btvxqS6UtEJ8LhuhAXDGGuCBdpjZRSsowcZkmiumGVbegvdtA6cwSU8LYg12A8tJ7PLB6Q3ChVdjr6rUR",
  "key39": "Qs7LKjxtVvgsV8sQeCkYbNrnCd4rtZkUX9HUGnNA9gQ6QpAjvMB5KwoR118nHHWBn6zQsBREQ6H3LLgTkWeHNu3",
  "key40": "3yb1r5zeaEbBzPbPfZbsiD8yfPc2dPXmtnTG8t3tWvP1ozp7tmEtNPujaxvnnDYHwZ1v1uSigEzvDd97dFBeYG4M",
  "key41": "nqGwRu7JBGiAiCXreEXTswShBB3CHfSVpvs1jLNjUUQxwZAJk2kmZ26nhyerTS6x877KXctsHmGpirhrNohPGXU",
  "key42": "2QAyPZLhNoEgBk8UnNBN1sDV9EwtRb157UDDVUdpcVfa7iyPZpYadATJ4JGvbCKNEm1yyjc5xt31ZvDXCXoAPThw",
  "key43": "8aKzmnGSwrcxmXt9iGKrJKk8KudQGNLc6v1tAkyfoMC95rEZqvHUsvc9f87hbncrkUzEvyavzLZ6Vu6YUt6sZWg",
  "key44": "4ybji9effndmT79vx3aYZVEp3dj6ghD5kov3ttD7mpSvdZte515TMfikuF6pbwiDGT9oC1sF8cAPULr12S5YA1fP"
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
