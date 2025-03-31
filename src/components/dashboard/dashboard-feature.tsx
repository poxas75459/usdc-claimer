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
    "WJpL1TfLFPr1X1gisDiuEewpw9ELSZukTcbH7XmhVinQt3NU9sSXrR8rfXfF2WK3hYo4Ci5xQjCSqDF7jXdMyQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJLr5yRmme1YsuiAREbbVQSHsigy27nUK2QZexdhBMuDB1YREGYxKgjmWYyJSc3aszLCVFNikw7Ex2r3Pr6tnUY",
  "key1": "2oZt7S8ZwTytBGz8r1ijmt9w1mvUM5kqbLYJHfPtgxg1Rzrbz1tom1odBX6Uv8PvWkmX1FPzZiJxd7cbkwy974Rj",
  "key2": "5sNxPCtyAfboYRGXhf2qvTWbZPZbEGY6NWnmuJ8er63hZNmFh1qyakK3y6G3R3FEsJvQkG3mcjxWwWqRm13FAK5z",
  "key3": "3SpV7Y1qS3gdCMygKHr61xNVghrXv5tucF4crbjnuGydnjAjiaCS8ekytV7zf2N7htvvuiTs5UvXhJRuxZKFvkaG",
  "key4": "x8HP2B68iuXt5qpY1LpRpVn4aAF4utERvVwh8J6XDSniY6CryfAurgX2rPKVjNv4XzrhWgGSzCgFoapk4j3daVD",
  "key5": "sgJy65tQ4paeV4TorxyE3aYa8uDJ8qwL3wKHW8Dsi61nrPetQ3AWM3W46Eu5xKiXjZuzbTi31uwphU4Zvzhw5LA",
  "key6": "2nZ5z71vacJzSi9hvgPZ3dHEv5eXL82eevYMdrzLiVy3hRsvzvkxHkBUfNp8pXHZYwwiFw7tF2nzMopgSq6tkK7V",
  "key7": "5H3dRHqTADVsqugq2aNkuF7wEKidHTXyxx8DSQrn8Q3A2mayryxmPUH7swMvLsvZo2Sf1oyfh7ZwLnJuPzKoXg6X",
  "key8": "2sTbkscXsMDAxSeAJ7TvscDWNi2bNjWqm2nsZPr6boa642qKTLNMziMAJLHBSbDwQ5tM1bt32yi543QXq61YwzU3",
  "key9": "4qMqheSVLiqpmVNFRMVFfVfn9V18H14WRfNfRsGWVxBTxgTakeVYfzSgNXWK11sF74hyFXmzQGj2QpzUraf6EEgn",
  "key10": "3tdvr3v9V2VrKaSFVMTvFpEAx64gmJqEzF6JHPDKVUFWbGnpmWiRcX4xFTnQU1hgB2v99AfhoYSsVwoYoHPFZorv",
  "key11": "2WeQTty4DdJupEsBhGgr8tEoDnfiVxDKo7PCv4vzxao3s4SaNroFsTaJrZMjtmfE6BUb3rH5Cr2QHiJTRiNpp2A2",
  "key12": "ZnNGqjvz2jKWepWujW8JLwYEhCU47VfAKD9RLGtYMssZgQ2SKaZ1apGa5P4AL2thH9BkT8gUaJzURQoHZhaqgcj",
  "key13": "5VLG45mKiYaH93GXu93sWAZLBTTtjLhN3ZadocGErUrJL3Kyq8oJ5j3YJLNnxA18T3MPRabjVCmDiWd3P67iHsMt",
  "key14": "2TDTCntX87PfK8XsEGYnznSarvyhH7ZKFQkhP3wP6oVCHccJethL6KtwsZ2gXxkPkiEJpX1eMc54yKUTPJFksJfP",
  "key15": "2JKiQSpP4SqayL4jjHKjWu5NDLiz1cKDNst2ojDh7bEmyfGtLMc4WwKtpHFuiym5odoLKmPnoWF4c497e2sKtUGC",
  "key16": "5ERVK2yf9Nj65ctUXDceDm2rpQXzckj1sj3axFvr4QWjxeshivzi2Gq8kG5g5JGWsvsHwcRZnS67HNY5wZMaN2SL",
  "key17": "3x8Ton3vzURmZUkktpC1r64p4CTAp26VMyn5af53rJNg3krLoDvw9ukeGaHEJKmBVKnisDHJvKoNJsPDTRQxVsYK",
  "key18": "ADW936YuHupdG5P6jEZdM8B5yxZdktKbHMg7WuWsNeZL1KUH42oa2CF6fkDGYnziFT1ZreBhzPpWP1H3r6xfNFY",
  "key19": "53Yyy1whsZnLbQDr2HU9ySGhDvrZGdaH24RP4hFJZJPNiUxdQirBfp96stzhLhMvd7MGsfqi3nhSzvXR7ywLjCXc",
  "key20": "5Afatoku7rAKXmqsQunAqNg2ErYpqDf1TtBEHX3MFCm8DpRyHCfyj1dMrQMzDvVYYuoC7RE2nWEewjZJg6pzqDA9",
  "key21": "5idbbkvM19SbNe7XHKwLvCysfvDaSHXAUXbaZBsa2CieYCaYwUrnh7ZB4df3zQZpHoU5t2aehexjffqpjHUiuvgG",
  "key22": "2gZZXPatzRaZLCRTguWr8snxyp6QVvBSVz8nzpP75fszdMEbmXR6oMdTiEFiriT8BnRmWdm6swEAzm4GA6btJFwP",
  "key23": "5tzHcNy3gLARFcVAk9w6fMHH3H8xDC9SiMm4eYT95xw6TQrTR6xMQND6x9M1pSH4gxQB6Hy97jvJtNrQPAD96jje",
  "key24": "EzxDirXGx5xfsDEninR2aQCR2nQKJm3C8JSSMt9AFm4yhhP2PwSpYw3LDytYkphH447ZWb7KgsE5EBeDPk7kWb7",
  "key25": "44JC2yjbFeL1Uc6HvA8dJ78ayUB8SfUxJPevKnK6MWs98uutUvuW5w41ZtEF4geY4nhZNWLWLCZTFsfSD4hKUGq2",
  "key26": "2ucG1iPUaJV7Lrx6586h1BD991fhZ1SPB6JUaorWihVnR44vwAR7RiKnGTUYhhzs9n2sDCTCzKkxiPsQ5BYJSx6m",
  "key27": "3Kt1eVsPSsp8MFRXVBVcv2AzLEtfsnkiJL5ysZjcHEswbBT2TKjosqXbZ9eAcgXQ1eqyAC37Jh67cJ3HYscW8fg6",
  "key28": "44vrMz2itS4ibVEE8zRYZwSQiJ9CHsP7ELBy5R5CwxnNgCPYYSKUe74VYFMAQAXxzSJvdjEHviW65MJ47kDDig9b",
  "key29": "2TSUkgjDAJ19QsBQNWdUzyzPcCmgdwX4W3Bt3SgRfYsBBtqNvMSX6bGGvqbzR9um4cm8g9DYAb2gLdnB7TCxkFDL",
  "key30": "2sZvyXM5JVTc2PsUXwSMN7A2ddRAxvo4hqkSgSXWE83xRdcabG1jBfQ77qYFFJ1RJ4oDMeb3Xc4JGVUCt6PnxxNN",
  "key31": "4XpoRUUaSyVgey3TAd36dED2eo1RFWsMSKNkMVhxpYNeVRLFD1TrG5dZ7nu8vjzV2DLVgfQsgvUvceUup9nvWPci",
  "key32": "5hp7WYqpjEdc34zUBoxjYjExqd48ZVEen3goHuf5qst52EqXfro7HpDRDY4RMN1Khc738xm7v6UkPMH9gzCviKRw",
  "key33": "5AWnP7jYkuePpJHf6EfdvWa49RwnivYfUo3ziuwrZgRwvMji5ZRdP1XEvwotwjq471oSCDZsbeyiKtK2YDz6ywym",
  "key34": "B2rT1Q4fGSZzgjxBAHoUvUuvdXxEwKciFDTD6sxyEXFLcFMUvKbYwxp7vgiT8xrkBtjTNW3sw23KKTfUcW6jVxh",
  "key35": "3ACC86YukP6e2WYCmR6bQcyovoWkFW6YCeudFYkvSqqN7W5bLJoS5EGUPYWj5SEh9QNtaZLxdFNFKFbQvb8X3xYz",
  "key36": "4if1ae9zntWMuWHokmMmU1Zfb1onCDSxnZoF5xxDvegDN3SutAWmjMHqiHcmrC6fMnkEGMdvokzGDM1mm21gT2j5",
  "key37": "4qPdiJUvmeLCYygRLHoB42YXfkgKL5VS4kt9frSZVpv715xxtTw5goUb14o1jkFsEdSufGT9iE1t5JXJeMasvwmf",
  "key38": "qHTVQmrShzNQ3Vvu8AGbyBKWvxWYTNZKqKfUwED7hgKqvapSJrnqpWTs4Lcsv8ahiNr72xnXp8MJDxzVZRxym3C",
  "key39": "3Pd6vxQPs7zZNuZFEMVNG5v9ZogQe2rYn9eAi1roykGFFsmPm6X6ZiQ9avAjwCxe7mShdTSDUSeRGao1A6evkWvC"
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
