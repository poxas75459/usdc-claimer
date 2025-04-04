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
    "4JAGZk1zJaj1SvCLTiEVsfCznFXFrxg4P2CbtTcagvnj7ECGTc87hYgmNtf2pZT8zsok5johqfcgzu4YEjXogYQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pkpg6Uws5L5qyz9BmUdjvDauJddPxMGoWX26YKE7ZeV3319e8BWTrfYX1QNt7mDSkhuMcT6mubSqFYVGoESdbQT",
  "key1": "2suahAeeXDtJnfZegDzqfpsCAWz3oFNvVKF7duvgpWxjuMxUDmLSHC31zdH3vMox6TLxpHucSUEQf6U7Vm425HHt",
  "key2": "3GtYKHX6KQJE7418Bd7Y1GrvEKc6hUXCgPyyF4ijtLVFuBtyH1aoU7AWpaQjydtvpqduYXgJLHec6eknmHY21gcX",
  "key3": "2Rfo6gjs3b9TWZLm89YMjEJ9vR83NEPHDjgfbwAuBrjdkgnBSLRSCgX86dD8xiAkaYPhXK9ePzCTrPJrCAC1859J",
  "key4": "2U9Ack6NCgfqtUGmsNwFvXw46yn36jFxPgcYVpFrGz5uLM7TSyyRENxVNC3UVpdNqDdDbmQvkf7rPtWaPVNKot7P",
  "key5": "oEaquLRncNnCxDiwioWvonqZSd6HGgHpkgQzAfWgn6MPg911DwCzYqYpwRnNozdwxfZMR8rxKg1kbjzeHPgptRt",
  "key6": "3dWTQGLD4exKSUKfwjrXiAHutcQf5rsANdpQsBKuzSoMffcFFUA6SQAS72P1pb6gXvG4R7wNdQQTQfoWiYCsYrdV",
  "key7": "45WxYPUoEyBoPAk22xC7RmBfKcRywYQrSLMaRvYGue5t49yzYuN3ZKeribsD2PZcLtVa95NgyRFjzFqpmri3ygLi",
  "key8": "4WtqWvsqjrnRMBo9nvF4eZsXS9LgsuUUtJ54KVqwgBD2Q8r22CwKYpvcaie1L2qzdaYU4rqVRro2AevapiR5Vqjt",
  "key9": "3TYsixg5Qq194JDK62cDNY3hdvuxjHhnuUrxYrSMWKHVFzVg3mu5pVNTrgfgD7csz2sRfT1Dn2vtnYiMT6WybDab",
  "key10": "5Dt87w81hTYYwSDAiqnS1AXMqNS1mDmoJN1xHHotS2NRATVUQURYUcvMGKc1GiHXy2AGVmK86j57QaYCJwPmDkud",
  "key11": "uz6Fdc1UotHQAibTkgcnmW37VDfrKKdVa7LbsLYBk2rzcBg3ZTyq93ynvD5fUpu3WTGwZLMHDC6MDdFGA8ZnE9L",
  "key12": "2VshPhuHghmZsNfZEfHRpkp3k3dDfew1FeUSBcF7XCqcGyYfyih1pvaE4oXs25hqV7kk7FSm7ix9hhfFJMmT4eUs",
  "key13": "2nHrMrkaHko1ToUhpVsJcV9XaXVNT5reiWtf2XKLgPE4TmkHYqfMEcMo1d5PJZ43HTrNWvThJ151pXQ4zVy2MvW3",
  "key14": "oB1vKmcXKx7rHtYdqKba4gvxFNNxsb93LwoVM2Sp1fs8n8HPxzaGJvpWLy6ortU1FMptGsWuBK3gkZNHc18ZqAX",
  "key15": "xiHUT7oiVu4hrdJi4GvnfeQQspaKfeg4ERiLy4kHDm53ZsNxiBM2djjhS1TrQBi9jrwE8f8dK436YVD3GsQ6MCd",
  "key16": "4djw73EjZgvoTo6sH3xBND1BYzhCUhXKZXvruPoeSdXuJUYEfsBU5THiyZwm2z9whVHAesKnbBJYknz2Mdu5PzuF",
  "key17": "4R5Ya3ox7Ru1pRsdkhjb6nqxQt6cwbFGXnVwfgXwAyPgrxwXJKwn6nxWNHU3TLdRmApLdDyCUHfQscSrzdwtwqZp",
  "key18": "wqDksjRo39Va5yP4yfG4Rj4JdrQRo5vXg7EoppHJjpX4Bm3Q45X3a5gWDXf4nZaWauJy7Ycv8j1BMPPEmxJPsuT",
  "key19": "5NmguBmobkTyzDHgcpQTy3G2BbXbthQJ1dnSJzCsMxNPvGAy48J3GDW8GiM5HBwPh8H83uqmhS2Puv4MQtDLHLKp",
  "key20": "64TUMznBML2cAWow1vXJ4mNxwEnR4EmchNYau8m2MMDZVDPgRGaJbC2wbbsvLtuHmWM3pRKWF4jqQXhQ9vt1FXRk",
  "key21": "2HPoQ8CBKuBUYvxb8RerYj3UPdgQRX6gHA8pgZEnc1XojmGhybeUsgViRbWshb2y6P9MSa1xsEDkrMwd4st9PvjV",
  "key22": "45NdwP77KnYquS27JddPo8RnCezE2CYSW2rED3f4N5gPMUoCVdkcYnNHZhptS7VPnP6QKH6CXFcFmuzy8zb4xUNZ",
  "key23": "3xzCY73Ym5gHFHbAAZ8aQtFF4v3ojFR597DBqBDormfgifqrhnB1ZG9h8p3T2BtFUMPq6tg9CLLtwVcU58YMZ6B3",
  "key24": "52KeddNR5UvSwrHh5Y1yMARRjZQh32ene1i6qhEjeoN5cfAtSz14mevqXJPzhZPT1zRoNpSVim3DRnuM417fWz38",
  "key25": "4AGjvdNyZSHKTCPCc8EdrwEAg4fZWbGDz6TpuQGYGbishiU81hLX3Mp6LTxsVkptfsYgtGAjc1eHo3JN63kUuMtC",
  "key26": "26U1wL1KwzCEeBuZe9UzaAW8eiKYVuo5K244tA4vbrMuRZ1ARXTTeNhQpDM2oc8HsrgZKHcrAQ3bafHKydUb1ham",
  "key27": "4iqBJvanQk4isynhkqQc6aJtZeQ1SRiuUQqKTuUpKaPRBQpXmeaK9jZGTULescrbWuVgmBN4aBoUu9BQKLTyyQSd",
  "key28": "3pKBAd58WDdJftRbosHoJgfimzsanUeMLN9TKvxGrE2GWmH2gJRucosja49CUcXArWPmMinchRu5dNgb6tH2ptAH",
  "key29": "4LdNvHpVrhgEJjtEv871P24ARGwQbLZ6XmGazShHVEfaqqKcEqM3s8c5EPJNyqpfZE4xFuYNZgWeGr6c2zZaJVDL",
  "key30": "vVp6BPkdvRvFg2pt1agDCXR8h1dmBFhfAik8aQXuuWdhcUrgSmeW5gcF5K9x6MNhtsv4DhQfJuxUy2GvsC9ZN4Y",
  "key31": "2xT1vRZwor4ZVB9LpaMM87oxs55kwbGWpCVGMgAoDvCsMbzAERex9ok2vpTxfEMmgCN6otFydfD2citXG2gX1qHD",
  "key32": "5HZZGZH9q9MPH9YPJ34Nsr8c8KhYMHhCoPyBuwQgVFrCtfhiDqtTCiarD4DehomzEvNU1xBpZBWS4ErmxYQyKUKg",
  "key33": "4kjmnGMikRvSqYFQsekWek1LPazz7HSmSfmY9i5MTg6dnJed8xUi2YZAaqhDMSymxFyTJBxa5vqS2Zq581Q1jpgB",
  "key34": "35ktkQy8L8FKAHyGyS1vZX8dHwRMNd2Q9Tg6262zrjwCZ6786FWL68EGpmhvs8ryrVMruoHseN19QZo9qyvWfe67",
  "key35": "GQVZDzpoz8JQoSH9saqfrtZrKT1ZYHMqLwgFbzxyUsZrtQ4jfVuZrkBoRmADeM6uC6Phj2z3btaB82rh1ntuJiL",
  "key36": "5GeHaVvq4XyDTgG5K6rmZUBQGchGTJ26kh2fgzZsNKfAPM2t5QuwPJ9f1iTNPWuWySd2Pe9ZUkhXcjEcEqjPsLsk",
  "key37": "24aaKeTgkrpoeUQq7aTirhFWr1UoxMkCXZTyPHbkDqnxHnt5GX9GcQSmui1YzrbZLFooSuXKrqSgCYNvghmQLRYE",
  "key38": "ipLqa8GtbCh8gU31D4oDvPnZ74rECs2S2fG4BKFQHpWabzLN2sQWFrYCd4jtoZ8bFwsqATLqwnYpZia2dmBrspT",
  "key39": "41Piorz2Ls4ZoheC4yAvmKm5zGJWMikrgXRLHb2WWgHVZqbmktCMSBDmbDJRTpr7om2dKxmD4K1JrGGc2SxfGiby",
  "key40": "5mQ8St6hyxNQDDXNCTHGgtVQWw1q5wbtkiw9o7cv1d4W22nvUiSk9euHGz8ZKA53WpVymumAYjKM25KVCR7fXSBY",
  "key41": "4PiYjuLWfHs7VR9QhyXS7hor2WuqXKvKP1RRR1XpfTygH5XuH5QHLMFtTV3Eej22ESsj8EuN6zztXLc5r15fBLWy",
  "key42": "22XoxxytTM6uK1t7kKBrjgLhYaTxTEDoJNch4VHFZB5Jk2sPE2JwXd5mTUR5Cm2DXDSjwmHiWNz78N4CP8mQSuWn",
  "key43": "3pbhr9nQbqRu8SmHr4ukP3tgWT38A3bPoJ9NENyNKAoGf3RbpietgDoRXECoapL4Q17gMqeW8y7bWqBUuHwbwCWf",
  "key44": "5XTDqWyRSAVRScc3UasBEYmbztHDnmXdy1ft6nEx74gDypgznbcpNCsd6GteM8mEn5jZC7PjaiPBxFTbXfTd9oZv",
  "key45": "3wjN3x9dh5aZ2KEiB42N4sZpvjyNJHgTAQ2MuQdcqxGgfbT5Z3E1YsMZRAcbVwX231dAKbR9RuTrffuav5RwJh2c",
  "key46": "5L4ZrwzrsLyCstiDxAHExvv5AfcpYks8MhGedD58TTFegWZPW5hGjHS5gWEA2bCN1DztZBqzuvgUbLPgqbyJirSM"
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
