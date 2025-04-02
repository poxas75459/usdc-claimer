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
    "pYoc9ekxZncAormWXXUBTzNQWfMvjym89opcZXVyC1qTwpbMXSSSV3t6SvmhZYiafMRSpAEHkkMKkPGPFR31X1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2FFNMGxhEB5G9KpNXtPeAacDmUNQD3bug81yemydeEd2x1MZPWkpyv5eJcHVRVpBjnnjK4doCBQTZwjad99GTd",
  "key1": "w626EhBCSn7nKVxfMw6DygXSXosixvV6CJi29oFDtizJyL6GM65GVWpw52PABCbESNFykCLEqPApiX9oXJWZvRH",
  "key2": "5k3LNLggZUqLz1MUqT7wMraAjKsJRxezyEiDprTKAuS5vRHiexHLkqjbPoJhyfnkj886zLuMy1VqzujGzsVZUUUt",
  "key3": "2MeE53SPvf3sR4yNyxm16UzoL7RnkszJkrzK5grwn2A5pGTRxurPSB91Rz2ZWSMqqoEoSwmNbFv398LfodzyXS96",
  "key4": "5nNDk5EuTy8ANH7u7PQCGMUkV6ThRCJgpR6NiBR98oGuYdViL8PDmaTMZ5K7iyain7Rnc3FEa4FppAR12xtqWT4r",
  "key5": "5gy1YkuaVQcjdcS518zyXwbgo7hVKRqB9RhAf5m3qDaC2uk4Fbiok8jXjUMZHbCfY4M9n7tfvPrCdFyhkQg2XcZb",
  "key6": "5pUYnPYyqmv6rJBP5TYtNbcumJgoiMUPMutm7bCLEKoRx1Cdv2icYTq96sEWUqaFDvpLtXzqFAPvCXATBxoithcw",
  "key7": "u6jTkd3STFXCsQKEp5fScPMnJqpkzhVUHLz8LdMweQRYtLBWmivqHKEDVApyU2jUL8kFAwf6CQG4rHyFWxG1AGA",
  "key8": "5rx1GrFEJuQnTkXiFiJuHTU4HC3sK6VVGyQzDR8EEiXSLLPwhoZQCRAimw3FUhTgD2SippaH287ZvVvPLcHPoyzU",
  "key9": "2MMK5rTLcxZRzMkhkKqZKo4KNzoPpnstMSgNgmBBcC5XEmLeR8fEto4yZeswxNVdqJkXU3572JGWnr5oP7USbeH7",
  "key10": "39VwKcobEeAkLZjpsc6WQ13TVWD3562SBSLBF7DTZPhnqmDG8J6MrZa8aXkFEhKwEdFLWjfWzNpMV6s3AieaNkaq",
  "key11": "NEVKPRRVnLd9B98JECKrkdDSXuUjtm2FovF6gpuAGRpTpQMHtx1sm7X5dvDgDQ5BDMdMFKb5tkR6uV8ZPjnHCew",
  "key12": "4u4hvNSWpVsDYV9b3Zf2bu5VvCDP69jE7bzi6KG8rQW6WzCTXXp1dZYBSwSXLK2vmBwZmsf1PNQV9X2as9W1BfF7",
  "key13": "2dyGiYJcLauseWicJhkKzii9Yy1c9uhm5nMTPVfBLaVcbPaj3935yeJEZ2kjaxAWirGhCnpqExYvQLnYkcBXrFw9",
  "key14": "3RHGrpRbTcWbcHBwiwu7MHcNjxPjydSC364GRRibQaz1qXKozT3Hd8GSPLdRFwbzSPXWfviFx25Q9s2R332Gph8N",
  "key15": "4Cr5JutELfTa7zEazS8BRWndk8nhP9EH9mJMuqSU2RGTn8eECNCb4rsiuLWJjEGARfBDLuaDDHDEQnPW7tfY8jNF",
  "key16": "5Kv8orB3ML4jjCaUoK7Ni5Yf4VDaemheoVcD8p8SdYG384vymnUU1jicuTvGjEySif9ReFR3kuYobF8dwS5SKnU6",
  "key17": "31bhtUq23QY8apb1dgyPqVUWwWSutgAiTjjo9MRTsFEezifYE9tjau3aLuoYMTbbLx4g1XrSC8vaiBYVT8dPkhyZ",
  "key18": "2Nug5tro7amyZJSWPc5YMmKyajAxEVaWqBGhLbSdE4gw8d2au1YVmJWLbmu2twtdvsVh7QhfAHnDDt1jJpeB94Fy",
  "key19": "5hM6QVLRkVyZcYbCmct3zWq2x3hVvranT7Ws6oVrDjtjqs9imrh7zQiScsGbMtbPuCpY5t8cRtVkjEWWGiUM9cMA",
  "key20": "4TWYicBtXFUfjtdkhLhwXGURHj84CDyz2PDScEyB2drcj4o2vCM4g4gwubvEaygaqcs15t4qBNBMuL4t8ao5T5qa",
  "key21": "MVpcHmgvF7V4dWSF71PrqxtWQkwCjPHosHDaFTxbW57BirALCypjKFd8rZ7CekCFzALuf1mn3BnZ48tcsMaaTTn",
  "key22": "4BW3GTq1vGvnmHsVCzb4dsNWkbx4jqNzBjC2na7smwVTHYbaNhSeNcE6StC1dGQ9yQfmN8ovj5ji8krP2MKNfWhS",
  "key23": "hHn9jaTea4pvFFXF3hBGuWDBcgxPkXLNGKt8BhHA1g3HE55k8NDFkCAYUvwdSEKY4P7UuMq5gn2uw1Uw4q9Yxfn",
  "key24": "3bdhzmM42hTrVJRonTCBiRQXmmqjDAFhJAarAoHxpSv4JyKUx7U9awfuGWhrcPW8tKvZ5ZtAo3U3sKqiP6Nts9xn",
  "key25": "5e7yT2BUFzti11e5AnKBrfvtmuXxZN6XDbrMLFnXXmY7TpuNtq8fLFdyeZg9FSDLoE9ysxVcYphZadjBuxvzJ3Q5",
  "key26": "4XQ9YYEL6ZvtGDaqJHqe7Qqc843KCFuq3ZwwfuKGvN5uTaNcwv7RE3qWNRyWvmLP9JPxz1J7xEisZ96GpQWCSvv7",
  "key27": "54SjbBd5T3sok6U86hXQyXBAZbEsGQgbitm4sUMPXo3yeERoaZoKXzN6v75K4DRnWWFRjiJQxjBnFXFEE25ZiPZf",
  "key28": "21B7xD4mZ6KjVtfjBM7J6EVyAMpggYmHBY2eCTzrF2sg2YVa4wjmTSDV2EBojZYgYWyPfm3hvv6yGS8c2CYdKCk5",
  "key29": "3oQMukjgeSTmr9CoPTNDDoDbokNaDSkFNBhnjdY2hyvxEWGW9bjkofxSjV9mFEhe7bqEBEiyREDmHMXJAemvEmT7",
  "key30": "p3ZLbFDijQWypWrLVWBshiZL33zH7A1miTdUUEr1fkvhdUwehvKD7jnvnjt93YUuDbzm4i4HDR5c7QoCEauk2uR",
  "key31": "EJLNBLuxfBiid8Amd8GjMTPtMZsob4k84J9x1rDdi5HZWN2QfPqXzRvbSJc5mhzjedBfeupa2tAQZ8gYNYHHban",
  "key32": "3MeKfidTtQFcz6bavZd4joX1ecZNzPy14x6EqhEAdoisCvviDNW74sBWDcZoWFUoHBJy6A8fmssTXp2PkL4bowLr",
  "key33": "55d5kLroSdTBDeHiqaGhoQD6qieKk52wicB181NzhPdoyNaUoGNeDXCBCxcDKjwieWXvJ4VWCNkFoq56ksGatfHK",
  "key34": "8DZk463RrzaHaC7CRDT7JgB4LvHCcB7BZbYztJpMBFmtP7knQZL68zks39rnNANgDxgR6xmtwX7qRoEoHr8R3yW",
  "key35": "qL8b8WHKitoypSonAdfENw4XNsL8U77ytGs77Lkhhu4buL27qPfiUWPXAWUXhyLMZNGNocyeqHgzZibrby35dN7",
  "key36": "2gTaFgjpu5rpBm2B9RLpUpgnmqDzZssXEmmCskxrfQusLqoqDotKwgopsn2JmejKLT1iNK16jB2Zsk8nVL2uPGcY",
  "key37": "5hUM19FeUoL2opMyryuLzwivHTohDVdiM4mPPqfrCQjR2gfA6sAKVoZ5XaWbFXoZAYFXWcFXyKn71fXqwDkexsYt",
  "key38": "5aCSGC5Zh5qt4sX7ki6SyMNSE3dWGGr7nVKHMUJ3VQQnWzd2DKKgq5NrEAHdUSh5MN7t7oHKBeWMEUHoHakb7F3A",
  "key39": "4PwAoAG1YkiFh25cuY6gAhKbGdA87GgZxK8aryA692BiFevcNWMZLqyqorVWbr6XuC9svejuaVXqmdskXPHuUB7f",
  "key40": "XoV3AbSMfzMqnAyE7kqa8rKxmzDirU4YgQixhtqtQTZgTEbhxzPDQuZoPX2Sa738eqatJdg2h63Pds6QRs2XLUv",
  "key41": "2aogQCV8sa6MTwvq9x3NZA5i6ASMKLYUhnWig4shCfJBZ2ASZw5LPLYLJKhArT9pxx9UrMUwg4khzKXsfAeoZ4Pu",
  "key42": "535DZwEDugv2imzTKgGU7XTmGnYSt3s1uoHTMMunAXECs4a6YGfGvwV9PMHV3Qj8oxUg8iWvGSFcXP8qPQq5CcJQ",
  "key43": "3TXQgQYDSpA2TQz6gpqP9VicKUeJ62f7cMGL6S6yrSQHzcF9EHhxSLQ6Fdr8z7NqZmbH7A4TBddQMRz2cDZGNctv",
  "key44": "8axG7svGiNB9PJT7geEzU2CbBomGPa8ZdxGcTE8zgaPa9RgX9D379M6khmuubeqem6aUaksXaEJQ1sZd4s9WHYs",
  "key45": "fFZFY6CpPLtXAbqHNvAUhQN5svf1WA1zBGwXdoyDYtDhgG39nnRNFqnruF2XgsxijgjhJttnN7FJMAUj6QBDjcx",
  "key46": "2nUMcBuMwWYvLVso1TfKrYimLiysw3wYAXr3B4AA2SDtLHkFhugdednqcXAbeWHCoH8VJk1ANLfqDRWnjG53dGxo"
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
