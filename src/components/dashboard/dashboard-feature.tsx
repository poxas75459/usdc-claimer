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
    "iz6jMces4nToPxxJN9SKQnViJNhGSDeY7cfsxjNKfCFKhXruca6L8HZLjB3GuCfR5x1PLxTSnwHShrf65TyyPFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqS7PWLfrmJWEqbjJNXajc7p2C3sqQXPcas4q8C6BU1Fvvc3jkDnVx4HxWbk19NSN4ESZGzZrggNan6XJBnzt8k",
  "key1": "2a9GqkUGdcoGjco7w2Egk8N6w3FXtWzmqo56KbmSgXnEs8owtc1ftoQtdMq3Gdd7M74o6k4p3yfMphExAVmpSBHG",
  "key2": "4STbXq7jLeb2vFnQHVYF14CaAf9ofCnrZEPbpurqZyNNVtkEGmZJocF5RW8fvYSVDZ8AGeNQQ13Rn3Eyw1zpAoWm",
  "key3": "4ZhHGPJCGEGAV8DqNvqCxRA55jMdFwY7EHRzeaunuHqS7qcDJFgS1pWwTJHMTdU8VG54RccPT2HUj4SYdF31Kc9g",
  "key4": "3cLNFFS5EWpT5w2Qz6LQvzQhC51rcXxz5KXB1B862LwnxSeP8i9DAFfGaE1vRywiPdGvdXvSE45kUJHTdK24Wfha",
  "key5": "2VENY4xiz6hP57rB7h4WiTBaxnnFXFGFGz5q5J5M5XbmGDfpQSUcNxXFfkEC4gMQc8PeHyuxiCNWoHxPmtcDEBTp",
  "key6": "44ijLmKwBNTwQUL2GQ5APDhqo6xCo8K1G9cfrSvp4p8DFv8tqee19ETBcj4HTo6FWyZdR2xnQ5XNc9476E9BY1FH",
  "key7": "5RekCfjV4RvXCX9ZCsqtyEX1ZjMpooY94QZfsDVetCACAqtHUnwxuoZmojFQR6hgCdyU2rL7EkrcUz2u4r78Swuv",
  "key8": "kW8kVkanR9x2FWtgf674w5xdwxyN2RXPxTfnmmW2UMmS75wJwCrWBip3NzwBNVezxsKxY5gJ4pBphgqEDdhxesz",
  "key9": "mgWFEnT6PVvham4udawRs7HgiJXkFgvytkkSMo8SLgN7RJHKiHWnSPoWMv1rZ2h8axwV7F2iJHs3VBoEjsCh3pe",
  "key10": "3FsfVxvK1tnRLdLwFTA4RRKXcZLtSeYukq6Lt96SSmCWGFL5A9wmGcBJdYcwVdhY5p5FSKgRxAmi2qiBN65zFZLG",
  "key11": "2E6ehigUXnxoupsXf7HfG9vCTZxwrypGQmmAvftasMpkv3LdzTMhocpyZbKirJ9ttbm7RvBikmZGjaxtQ8Sm7ZiQ",
  "key12": "aBxnUvng1Rj6NcMGoe8Md4x5yYTrUyYzz1AccXsvRQDkeEYp5ABRB2o77jBFPzZGVgW2Xtg6hThZGpWH949Hfqz",
  "key13": "3VkgbrP8FJV4hDEopu4JoohkHzL8RcdsP55KaGg7zSLJitiThYdZDgHC9hq6xXLDemK8zEB6po2jiwQT3gtQgY2J",
  "key14": "4NFF4Z6EqQkP1xLszcB7VQK55AapU1Ep1BiAjVzAj2h3uH27t65mSUPkN6sCW9FGfcpuCrthUKc8MePwAUPnYyzc",
  "key15": "2QvykhgFr7vbK8rh3F935YuvwhbzPo61QzxVLFqeqfXUiacGU9CbqPu9NZXPjiBakUKCfefREXrZfrRSTSa9quvz",
  "key16": "5qtmYDXt4ar7htcx6VFZYy4ufzWHUwn62q1nfB8RbKeNGamHVR3qak324hgpbY2rhJ1KQYzDQMgDRXSRChciLk1D",
  "key17": "2VKnG2WY8PFo2JhiqeXjzC6Tjpprf14HFUeDYEB65FrJyCPD6nYt927feys5SiREVf82weoS5Cay4PoiL7Gd1Bnt",
  "key18": "GKqPuySURsotsX2Bi3VYv9FF3weyEFZjjvv16ygBzL6Ei98ZuWfopuC9e95ZPYaDdCWcxE8CT5LXKNcWYeyLkNp",
  "key19": "4jTMSxV9hXuFoKm44wS4p4ANL54MzEbgY3a4WFmP2YJ2NB63VJ2ThXx6qv4tP9knEWP8Ue3hFQ18SgnHvR35Li3L",
  "key20": "2rT9WKDJgNgQhKTJoeeQcimFrN5meZGKTSHCjJC3ejoSjacyTtUfKppLZFEw3Qtu7LRF3HhqDx3mHAfpKSteJTAD",
  "key21": "2H6oQDia78vWwdKRKy6YwMDf5d3XHd7WSLD8fHQMUSbxed9JpiUEsf6Ft1oieYSHdiFgEWFZqZo3oZey79xsKtJA",
  "key22": "ftwvfqhaVmdc4nTaU3kYCcGFSFurTUkLv6ysWShwxz9MS8rrLFT6SXaaRfLLosysgQiKgF4xGUMd8KbMbP26aKa",
  "key23": "2bSJTfQiWQNsc3sLcPRa4P6SnfKsKK5nTCZkW4Xv7TqGFN2gEGa5sEovidPEL6tGwr4tyFqRHoTt1k6fv2M4FckX",
  "key24": "36dbmLuoDTeaEC6sBeX1iWGnEE2VWaBv8Y1GMS6hcR2zAkURAcWNYuqboVMA9RXmQvsyvN73g2NUQcTZwada6Wzw",
  "key25": "4J8sntwZhgY3wRt56NHk5TDkHR9PoV1qePxSD4TSxKZGpVsM2ux2JztQQdmL1d6PXz942TtUDc27nuGct3s7fTYi",
  "key26": "4nEuBxg9RKgGaxhPWxKp5kuEmppo3GCw9hzeqNGpEhHzn2E9fXGr2XVVHgYShU38cohxUYSfhB4aHtyQzuqveXvN",
  "key27": "4BWk3kvjm5EhYboZQzDEyMmrPZCPXB66Wvg3FykTHVSJi5CCHSAotMXJW169b3h5GU2a1kkMVU5GRXdrXSzwDhrR",
  "key28": "cYbkJTzQctgTD7CWDgWMukfLDXDWw3LEpSx7NgrGpAmG3JZMuFQiWNZw9XdQyDwNYs5GJ53i7vDutCBEptGy9m6",
  "key29": "TMZMEDHGFQzCgwmUKCzcYYSaxGqNaG1iG5PJEk4HpkvA5TgAm5uZYrmJAMMrHdFeM5H7Wfi8XyUFoYh7BcrgYUh",
  "key30": "2Edht46dY8cjjC1pAi6WzEFbjbEMH9Q5xKC9nzfniTo1LBu8XCizY32ZfWbDF5Rsr3itii5zr1KuNB3SaNW776V2",
  "key31": "4sRUVqYR2TLgPZ5UFpiTb1iYGK7TofXdcJvW42W9FDbabztrpxy2nPp61YuUTk5jpouhkToQ6XGtnY7TksvKsMam",
  "key32": "Wg23w3UJTV7bZ8X98pTdgEZA1pMTT5qRjXiWhvG9ExrKZ8B7Y7jutDo7RbNBpvfcntAtyHYaadK8QuK3vBJwUi4",
  "key33": "2AVgXNV5XorrUreq36sG3FUtQjozCdB8dc4wfAiEbPH8uF7dM9t92fKEWbsS4zux5MEw5X8bWB7ik7drroNDHUEn",
  "key34": "5CpRrsKDKTpz51fX28ZDQtiRT2ysdhhS3NmFZxG4ypqjAPHGCYRF8wtmTu7LGAyX6WD6gm4sCcL4Yhy5fZg1UVms",
  "key35": "2XKsffyem96NJYUAHi6yrJ7YPX15sXenfp2r3xPSVUcWjK6i8mjd13dtxH7KVvrtVnmm12pW63VuDexYRswZnbBn",
  "key36": "5GQEwqhkoFPiaLk1PCbVoYUYGkkzKqieC42DyaNjr26EaiuuzNN2JpEnxqxETSpVvAyX1RWBVhkVtm4JBfoMpPyq",
  "key37": "gjMe5EmzYSS8MLHSDCpk6MHYbwsjBfZdTLEBp6n73oooFk3BoHrMTBuHLP2ignFZa6m5B7WSEBudZd5idZuSGPg",
  "key38": "2t7FYKSzb28SabJxP7jGJMtvgM9ieEMszYpdVj6pXWcJY5AdjSkmnEhbZaxTXqtRofdLobJAGCJD6pFTm5SXb19G",
  "key39": "4URx5Z46NdES116yXNadQTrWZqN427CbeGHQ7xme5RMLyhJdJmZ6Wx9xqKgfgbRMMudo7AJ2y1AiN7xHcyFjzCAs",
  "key40": "669hXZ3RdhM3yy4bTfzRK6Cx6stv1uLkWVYG49BMefzVbcLV5mLsm6bp1SeCip4RY7NyfbriNzc2nWUKaLEiT4Dm",
  "key41": "583Wg63oMbF5Rndr5hTmdArfM6kJMFRq6eLsUTeW8669QXvK2UbGN9iTkEfjdCx61H5DBTMyYZyhTbRxtiC2US8j"
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
