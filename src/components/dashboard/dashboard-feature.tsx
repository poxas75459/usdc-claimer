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
    "3KeDU1MjatBs1mJRziu3gcsncu9JviACbCJu33Gt618dVastDq6nyFCCBkyho8U18SvZj4VvnQF6HzhNcLBteZdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KskntaaYtWeEqMNybsSku5N7vuAZGhwS4rmag4swA3gGGzJDdUEptAiptE8Kr9wAYZd8QCo6oDe3F5uxpsgfLd",
  "key1": "58G4f74DZyjTo9CgBH4FT7i4QpVcrCMigm5gZuv4zofpEZrT5d5XV8aDYiHD7u34aqwbQGNPPrjNvXYDiELr3Ae9",
  "key2": "5BR2KDQQcmACjfj2pS46FUvhPgsLfMsQLUL9hJdfV3TaGi5YpctALxHosTVwLXa7Uy3EKWU85DTS3TMpo2rsfzhy",
  "key3": "3SbDKoXg6HCX8eGjpqKPW5hyzNvoeJ2C6rGjfm95F95YZV6y958ppPXMSWzxVMwQWxwRaDq7q8gSfJ9K5Ye7BQrR",
  "key4": "TYytvFTZ44x2Z6mCfs4ZprkVVCJ2osMWTvpg2LhPtC1HirBAEHZVhiuzbMuXp5JZXvDVFMq4h7zLiukTT2VgzXo",
  "key5": "ZsBCaFYxqjpFvU6TsyvcRSYPFU5QgiFQFsLaz7yFcUoJanQ9moqmfxEeF46otb5p4ttz4iJdVAYkHKMcPnvTeTb",
  "key6": "4rBYb3CDpbBQ8sjxC5A3jbebPgAUpWT4AXpRtcFWxFjkSR6uDxajq5sRvz1uy3nKHCjM6DvrbGAYToUmz2CrSNHe",
  "key7": "5hXpB8qnrNZnLEQWF4XRowMBUZs3Wv9qJ3iKusgzhPk5EV5WB95jNqEuB6CgKYveUTDvrwkzcc1Umm783zypAjtw",
  "key8": "5KhiDinWGWtyHn1gAtzgfMjfAHTcExCFQurgUXceFVL5ganAwzPjxp1NyJ3KTC3J1eVifANfBeps6L6EpwSutoD9",
  "key9": "3HqFw5rkY2pjUaCrpYzJELNnYdyYf84kFcjhzmos5UJhtGWc7B2PWmBteFaDSMiEuonLZMapcJDQxSQy72pmtPsL",
  "key10": "2fKBNE1vru7nxZdNEQWNftX8C3fJ4Bejk2qiqg6TNXWw1FXsgszNsHMDFuhwPfEf1sWQP7aPRQ3DTWxWoCb3nG55",
  "key11": "3onfS7MFDkRE311WAjue7eX9njiNVJnEajqHgXLatxaKfxDrMt9gheDbg7vhy5baKQP3RVKbYcp8UKrhSyLNESFH",
  "key12": "5urjVCBPEzTe7idw1RJh6wQvcGAHNZNRVcCjznPxyV3VcCYP6AUq6SWEcv7eUpZHPZR2UnxopYP9vws7skyKiAFx",
  "key13": "5BeSHzG52rTiuk3RLi6jaJkirnus7gmw56tCRNv6MBadC5qyovLquhSbAov21NG3EaopJ4WF12Wh38YG6gdZr3hP",
  "key14": "31av2UandRjJriDScrG9rmDq5s1yQYUXubqTKUtANg9DetE1uoGyi12kcVpsGtrsj11kaMQNAfX6u6M5QKAk55iR",
  "key15": "3Zysxt4QCCphhhcRVrksVjFPMprkAeJ2vDaRDc9pWd76pZGcdxJKQa1seUonFwCcoUJEbtGuwy1jmkvKhgkGkXUT",
  "key16": "cp7UevHazJNJ77NbQXmcouDz2R1XF3vgoAd7CNtZUCL5AuouzG1XrcJvwwMjJJLZiaRQx8Pu9EXQXS4nk9r6mrZ",
  "key17": "5VgmRk2jAduK7jYUYpwtUdd2izTqdZKutKqsdhf25oA4aTTDYAWBsTmJCW6Ge8RW4jQ1HZhBt9c3YNMhSPwXvgVN",
  "key18": "2sMnRnEnwG8bZoTQGC4BnWaeXY975imgMZip2JBQTLPsatcVq2LprVYARrVfNR1TVQNFCEWbU2eGCvzp72QZG8Qk",
  "key19": "64Dhgq7PED9FRdmLfSXmcoBjf3QfYHKNp1mySUdXZ3pk3WoUSf2dWQVcxwjaSiXjt5jEke9HrhVifHH81AjFK1pT",
  "key20": "2bKnKJ2xvDXx4cfqd7bpLFDppoi2tHCPc7G9JVb3s4ARAQSX5kPPxNuFPeNwnkzdTzzFWfqMbSNXyX5GLXYMCSTj",
  "key21": "53FoJ64qCP8zqydQ2ex5NxK4ZqgnToDdDFrXMh2gnJtsdtF7361usGFH24PibaxxJERYSf5cT2f2WTeTmZSE64KZ",
  "key22": "3TXYx9HN3xDPCLcR4hwNz43xsrMjCRnHergt3r6D6CvAhv4cCMhxqkDw46FuvFstDCEKpEwKj4eXfWBJzoFxvtHk",
  "key23": "bkQzcMribkSeoEh8ssn1QxkuVFPAg3qEuGmFn7STQCEbnLVAvoQfj8puzJpAU57WarvYGZTcaoGP9kQRgRcs4YK",
  "key24": "3DoryBriPpMHJuCkuNfVUtrtzZkvcxsU1hJvoWKXW5x8SzAYMayAmSYnreDCfdrpESumfNqUJuKTpdafEUV6csqP",
  "key25": "4rNn7HAfGxgUEr7x2c2QiXgUgfjwPcAa88bPyiDWsXKGa4BtauiqyGwtgpV7n7CMMEcRHG8pFCzC5yoX79o2MuQu",
  "key26": "27HpTNto8siAnakH7oemvJ1ycAmJfzo53V1oSCm7WxkEquB1uA2TtH89U3Dgb33RReRNehrvLas89xAcxfHHvwrq",
  "key27": "2WTBSSvB1sMixRCukanYbzEhMWwjEUSsZzaLxVBktzpbrtxMusWs6vQji9Nziy3PCAzc58Ap31ayiyE4mdc2oFYS",
  "key28": "3wTFcu1f499gq5AMFt7MCiGrN7vW1VWYU6tYnXWKLXPecSrzixLAhhErXdhYhf7d3o8hPLWDkH56p2frsw67gMwH",
  "key29": "5TK17CWD7ufNmMH81FqywRjsjJquE3MYnd19cQFpkuaJraGDbuwrGjn64t7HowCCzms87wiFk2Fk6kX8tuhnw3Jh",
  "key30": "2JhRNtikz5ceBrVmM4rx5hvgEyoVTfiDnqjsE85wdQicWFEwewB3E4iFjN1abtitBkyUrWMJQRxnND6xSVjYwBQj",
  "key31": "3VFehsCdZuCpqeQmkwmQSy8SoLd5wgBzui4TfifSj75zQmsPHwohJ7mxmPCa7hzcSPkjqC1bpQ6sygbHhsQqDy6L",
  "key32": "2ECpK5TFwm61eKBmMKTVHqPtkyFEYRawLsKeYc7pFasssTnLMjnq4EhQFSWSJ5ytRVimXrxjW5vWFW33RkL21s6j"
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
