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
    "eu5WNrCidTpLzsddc4Po7SL8baEaLBjrqiNeP8jdR3KEae63GmrVQivSZpp5ZL9hxTpBNdNYqDbAFZ7pf4yFkz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sup9NqVFfYkAKMh6viZHPf6aCPHonwHPFXJV8oYFcBuaeMatyse883C6idYd1BxNrAGhMn9ZdUTdtehLPXZ4Xbm",
  "key1": "pxSnuCHx9BNHPpntfi8BTg65iG6eejSodwH2AKSj9TUk8Mz5hnUvZmJGATLDz7WmtMYGeCPTPWAPB2uy2ZzWKRu",
  "key2": "PL4S3MtGoQfkyasicp97beDSmbHSXVrQdTuwqWcDL5PcttxV5yXs3gb592WHnrgvskF7rxfEahXArajdLbW8gSy",
  "key3": "5Ng6by8haDDwnJ6LvKKW3J9w8TPx4VEp4Rc5tmZW5QkPptRuyqFSPNfnPRVehjfX93o1p7bdBuRRzAoXpKagW4ra",
  "key4": "4PrqWeEfSbPH35rUFmyuyApb8gEZKLWfd63cp2tSaYU5ruwq1wLUoZ53MLw1hdDRpRunHRPurM1s9DiBPSnricAi",
  "key5": "5YLjTsFeeyiXFWzVxQkd8uWCjtYc8f3dECt7k9Rcb5rFTm8ZX1qqabesuQxxYutt7MxpsuwQSutinizmNJMf8u8",
  "key6": "52yBkU1snfeDQwhMVmaRNqzhXEy2n86Sd9uTmPF7DCE1oK9BF7jt2Zo718q6nMnoCKhnBoifhnbNx7ubM6DpcbZA",
  "key7": "66eMor6rfL5mk3ppe6QyJs4ZXqwKQTb3nGhW42BZqGiQL38MEDg95aLP4XGHArqCBnBwuotGEmK9L88fF5Cs5Nx1",
  "key8": "5oJG4S7fEz1m4bFJM2mJedVb52FxmVTwoQfbCBr5dxkzgBGsXikCJHr4nDrCJhVncP2CwvNRBo38L11gfJfPLtJN",
  "key9": "5CrcJfGVAN9uC9QtpbhzyBio2Kpb7Zu9BouoLDyZD9CWn5a5R1PZftbrymju6a6FppiMSMLWabaiXJrHZhTcd29S",
  "key10": "TqUS1xMqtYcckcRf2p21di9ZMKjPHP19RpcZBGP7QTacan6BjKYozW2JUkraozQhFvtL9BbhGJ7EgwavTefaete",
  "key11": "4qSjiokuc7eMAKT6sFkH5TXNEDh7UYtLCaWoCdxyDDWADUX7R94uQhu2ZSysNcuPCmGveRAMUaWTq1W4LYMVyrRU",
  "key12": "4uksaLsKioYEN6uFKVoCBbeAdH2NnHDVUhfdWd1Fwqt1JNzEtRzSNr83v3NJW1RZCh2g3GpMFWy5rvJxTEWC1vo1",
  "key13": "LduN2TpZfgN1FE3NPrcs9PzNZ7aMEz939Td24c4TYR6ReYRtHeLqoZhuzHNGKFcCq9KVz2DtdLiBMeLhzF2P399",
  "key14": "29PcrZuAiHKTidS2mu3KNgVJKU1ZrR2cLm9hVWU7AMaUuntZUi4d4knyS7DF3ehx4cX3jDFxAjRY6QuUCFxdvanC",
  "key15": "fngf5QUxH7XySC6FFaQA5TVWi4GjLS1AjwR5koG6nje2SzyinUd7GbvJRexMW8qruBS2kqAuG6SsJUxHcSGSUKn",
  "key16": "629xdm5RQcFyKcgFjh54QtmPcFTSpryAAS7f95Fg1UyhsaWYZ73QxdmP8saWmCeJkWiJ74caeApuCBiNTL3tUcQ4",
  "key17": "3cBD6XQbjEqyh4Cy4qhWptCoJdyt5UvuFwT75jXP4LuLduq2zsQrSWAfPiqjM38tUdTin8k68iL52YdJqeKcb6e9",
  "key18": "237Gk3GHsxnMpWgFMbxzzuqi5GGD3LHLLhnvd3HW8xTGJfvCmrX3fDdEpQ6Df1VxLabNxcV7f1XTWmTpkhUMvqCt",
  "key19": "cFGnbMfZJkKybendiMhoBFGobLt28g2Vi9usu31ss37LGY1HL561RNNiPacTTCR94q5JuNCnavLGfKRviaUU6kP",
  "key20": "3hAEoYne6FM9XmWKzGPp1Qr8p5qfhZrcPFGMNAJLAqsWF5Jg7j6jQRa68xc4Jja2bx4nt2EAQkEBpiKxtwLjJmm6",
  "key21": "4Cub6TGEDm5Zo7AHWJ71eQE6d9FGEVTBuTt9LEb85ZWSeaDABf4GZghmSgT6etPBdKqp8UKABp6idWf4j4jJ33HX",
  "key22": "2UCrjZPDMPAd7XYEADVimH7LL3UmcTV55xKAyJ8AaRPehFmjyZhEYCMHnux6AP8uXFd6WuL2EiUz7hwy1HaVibZi",
  "key23": "57hBUyqHErGfbiLiFh4Eijg2eJBcDtCnGyVrKM6sh4svS2E5U9N3ciC3bdaukgTfNNbaug7hbewBuHQqA6R4hHgc",
  "key24": "337zPhBtcs7C25LUAhjdNy3n89ESgXsALZtJC3nR5zoPrQxLUNPf6iNsHUsSpEAohK4hA2jLCtftyAZZeGHZJLMw",
  "key25": "2j4h3NVfZr61aQRJ4cboxqUJFStNxNHaA3ckhijXHp2HhTb7GHoqok67mEB8UdUGHyykCLBoN3AdsDSYaL6JFceL",
  "key26": "73pLtWx2zmmVFjU69fcVswY76H5i2E19b1G5JZXszHdmNGutixdSBSgMGrNXwS3xMBVfhrJSRWDvJoBdrUM2zXv",
  "key27": "57j23HQ6CfxYNeXunchzSrCWX276yVKAaWwoqcgDX8EnKRq8TVxfp4EaD4pnNFhsSnTzMEsKbivLHLT18tBAGebW",
  "key28": "4U3Jvo3r6unA2ned7hnVXGPmCYGWHmutGPEVdV3SzEFFSuAtERaQfKrTsCrADhUnGfGPc88RUQ6AmKFY3NKhUscP",
  "key29": "2VRMpT6KAGpsbJKyjwEwGUNyNJMc4T47X7LsXnMKHVF5S4HJP6wAaXJYaGSmG17y6zGfDiaAdJXYF1mKMnF8hGPp"
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
