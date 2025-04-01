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
    "5hXkH9PMR4ZgDjcnzkUwsB4F2MbKLYMYNaumGPzJ5kn8juUA28GRnLMsTxYoupJ5tbmcC1TzRgMJDWkJLkhbRB7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dn4FFAUWk4Uxa1m4XjThayGTP6SeAGpxVrtP2uxnGo1xLBdNuTni428Aeg2T5QD8eNaBkUfihXuMbhn7kEkmy7E",
  "key1": "44GydAPrmYAgzmsiPuXG7bDLREscN4q2etwRZ9jBaZkUcz3CgLCTSGoEK5qeQeqyWFJegBv5xrHyT4qj2wjekio1",
  "key2": "3fAzL3LfRGRJqrq6JLau4cFAC1mAKAbcBAtRPHzEwm9Vke8mM2pHLp6bsp7CeGoN3Jrg9n1f3W4NrbCbpVQWpwFr",
  "key3": "51TnLHtxQqVYM4CZ9aKXEuMtD9vd2Rdn8TY8ih3L1zMtsF7K7GeLvzk5zsLf8oy5jSeoKovCR5NNsq4XWjByRESi",
  "key4": "4BXh215gBEnZuqRxaCr9qDGFWhToLQhT4tyTcQgZ3biKjU8c3bCDdZidLCrn3xjA6HC626fSyB3PUvxWdQvZDhub",
  "key5": "53sPaerikW2JABzW2Afdn2XNb9V4Hwhb6bP2hLBea1nzjZdNTRXhWfkGSoHoEbzSFDWh3aFCHQo4ndf2DGg7ov5g",
  "key6": "3AL1LR2URoy61AXmDukdxbm4Dc7gfaxjSN2oaHrNFRLd19oheE1d2Vj5rCAVj9ekZhfLXo4KFkGyX3ykftXTU5jb",
  "key7": "4BcD2F7KPWf4vwDm9LCkuCHU5bSkjPNufRT4Zjcb75L8UdJeNG3XKFNNKrEPDxu2XyXACoJy7TJaWn3PJumkGePS",
  "key8": "5wqSZy29kYDoq7FpNDKrz7yQPqFBwUH5PN1RxV5UFg2duYS8ut3fPeu23H3k12FanHesdGF41Wv63MxUhtAGLh6b",
  "key9": "4gX2LxFPU6xybtJQ93uAHwpe3iKv5VsgzLx96RuCL7fwndZdrdBRPUgV66kRdcv4G7niW5bvjHqbwJPAZajeZ9be",
  "key10": "iTSwfUZnrvsDaeedkxcfPofpkvRmqc4tqtFBPCWqGNpjbg1o5BKzA2tXK4uSHCQuBHebRCiwzvQmdYERMFUBmd6",
  "key11": "5i2bqPSBkCHyV61M7XU5sf2VnPxneLnkjrxp19bAcVk7zS3JmjXTGUrP413p7YZWuBSsa1v4eg2PhNX6drenJC5M",
  "key12": "5XaXeL5sGZf7wour4WhPobDkrPcqVYcgYidKRXuiB55VJuG7Kdf6vBR5br6kbjs5RF8gmE1tvpYgAuK2V3xPNFXp",
  "key13": "2E4AAU2AwbHdTCwr3JTpcsDQ4a85i3g6eY2rwqhgHnMHThbtF57Zpyv8vsgD25LmHBVdcJC1rp8kqHEiq64RqohY",
  "key14": "4tefBxoKNX7dzjaKsvE5SCrPXA7E15dLgyTNUFhMSXyvWpLzU2t2uMCQUwpK8sBRLDXw2PEUxs4Nfx81vzJPGPwT",
  "key15": "3iLw38nqafrAQswY3Z27qjJyGBmxj1syEre8q94UYcTTNQQYstV25V9CSnrkkaxpkP5C3w5NEUCPWtVKkJwU1hGM",
  "key16": "4P3bJkWiNX16TNnH5jtdb1hBEWSGXzt9gSsc7GkD4Yoh7SecedFnMoAWvpxPtLqXH66HATfJRtXd8BRMBwT2cjZ",
  "key17": "3CVZzpNsX611GHUApNSmCSsDmDLFjKtWgzmnuLo37kWaYRT3Xhobx1ucB5935yerzBjSxgcWLJyuKMLZNLdxMUdz",
  "key18": "57EnUqXSXkwcFpRrhUTcfVK8tD6xwXnkSZVMHdobNkgmg24UuKYYgaFseY6eGmGWvrGB1pwpMXSn7W84MvC1t9o7",
  "key19": "2QpP98WNaBa6N3oqZBBieUQE7WyuP2d6GnGbox5bQJ6nHfdtwX1bnF4JpMDXaV5jFDP57k2V23bgMfQbeF5nzFJL",
  "key20": "593rR2B5w121bY3WmSSV2o77w5kMi4D1tM82Wcy91VY1pj7aos1GdnsboaaUC5FGeN79UUnU1Gvc7Q4xJ2CoRnMc",
  "key21": "3SPnkqsJJd1BshLGMB98qqSEseCSTUvbueEDHDJ4ChWrj31bq1N4H7YrKJTXcRz9jAXRuU7uWLX8uKsTRLQG7CCE",
  "key22": "2K4cbAs4JMRkokUAbdSGUUg8qRoEJqv8jjasy3WQoEVWNrfUrd3vDBSQwFtTAwAoi8fMjYtHBNGZSNpTVMysje2x",
  "key23": "4cSNvzp4GCR8oMHZiPwGMmYL4Wp63RfzriQfcrgCrGFdHbHumSvFgWcp3C3wvDqcBeC9dADrdACN7vX854DCeWGa",
  "key24": "4CkgKxnQNc2A1t71TBoQ2cJqyuvtRzm6rVUXaRgEdTw7HPRTwuktpJrsP9xjtbWFD3KQkC1rjSiNBm124KLSgGak",
  "key25": "2ndKrrKJPQShrNB3Hp9SeniFxg8BU1grxDHQw2jMkePPxhgXty52ZNzw1rgWBdyGsVqh6vq9Aeq4jaef6otEQjQ8",
  "key26": "pcqD2NxT4wP5EFgQUwtyLkxsCeDnwqxdB2yZrsESt66nCmcWzGNQt2BqgAf6xVcGQUiZTZBH98Kk9xTmDYsNATW",
  "key27": "4BSWysunE26g35L56wUcQVmXfhdCyBMtzkSyt6mB41SG1kKHjFjeZuQa1UrCxQBQxnUdRKM8dLgt7L1Pghvb9zDC",
  "key28": "3cXVkxsTgwXCreLv7avuuTrF9BJrTvfvmhyqZkkDazpzF7r711ogKiSx362v7mTYcyNhcvgSLYoSyemjc9Bi5pxV",
  "key29": "QBhhkeybuqZjCqtHER672eCZiAWsLXYMDAdYoBSWZbUkiVLdpkqDSWGcEWRmFoauNzofq4iBB2Z4gXDMBjNMv6e",
  "key30": "FDHA4RmUPreHobZ6PvWRYPWBFVqVNc9SYcYJSPN7Hn3inaskkhreFKQcjSCHAfEn8ogff5PzfQ8xiW2VNHGbFDN",
  "key31": "4Li8koGKaZ6EukcQgdH3XnMZRt6myUqY4cBvECoUNqT9oPSQKTjaowZ7RbF5sSAtNxiCqtBmkxcvXMWDe4dzehHF",
  "key32": "2wPXezMBG1aDRGkK836Vc9sM3K9wd9JoXcqpbizHbFXCRcqQggBeLaMea5tERWb6kHcAKdfKvuUpMjdtbCLTEJjA",
  "key33": "7cqksFXiBj3PijU9dXRzDrHtenbQ5wBTJCzEyHDxd4goVmd2mks8fdMy8odfDHPTHyZLTTMwdV4c6L5DsYMkp8g",
  "key34": "5CSSRt5bT7BMMcoXoucpuxgqxxscZFMFMeWvgzVuLP8Tp86ZvyfZiGntVUUgu1nNqXky17Fsa1aa9xVBbNmYGgMy"
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
