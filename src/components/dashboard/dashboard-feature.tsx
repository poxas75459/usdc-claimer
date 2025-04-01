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
    "62Caj3S3rw79SaPXNa8NKjiSmQsMs1pF3BycVVHTJ7c3FXjHWG9d5kWE9PKgf5BNMcEAstrVQbg695rWUo5eq9ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8qCp1Hmo79wBi1peLXvF7JmAQrPqAE6582wzrkBvN8K2MTBgyaCULqs8WUt3PPwkYF4psrDcN1mpuNXtUgkF7e",
  "key1": "5rvoTkgmX2LDJ3MPbF66zUvAxaJgNf9AUSzA18pGLXXE3Uuw9GTC12hgfkGteAe1aXbX5tiNtjtieMjCDNwhwg9A",
  "key2": "DemsJWLh6uzHw3TF36SYRL6tLAGXL76Vkt2guTE69eqeha6KqbG6C9S93Yj2c6UVLTriHZ4h9TffDQ6hU1DPt7e",
  "key3": "VN7boZQgkWk4hjtbvep786c2hWqyWPVifXbUru37rJn7TXpdjQdR5TR2jtkJqHX8DX7dD5nJodC2w2eq6Wausu2",
  "key4": "5WnYd2uu2Mmf1widC2UV3qTuz26pWMEABT1fHMcK5mhMwz5Pdz899j4o3fidTNdkiiE7oDREPjc5ypnKXvpXe6dw",
  "key5": "2BYmt6CDFKUsqVvmguB5X1VrWqYhTof7fgbNjFAZ4WDGBwad2E2hoNZv8masStYHKGxmSW5iywro41xwJE4vR6mN",
  "key6": "5BuVQ4TevrqD9n2S7yHR1A3pqpcEMKwuV5xDkb4ttTMX3XTVngzhSTrPw9a5RcRyGiDREvnEt1R4WUEy1koQU3Fy",
  "key7": "JKVkpaRLt6DCRkF8qczteciQPNVRGc8DZBFfNAC5XCEC5iDQxPUghjB43ihf5rVYDZ8bEQEZnwx32A6C8QkRyxF",
  "key8": "2jCTpVjrxjLyaYkoFt8Er1vFzCkVEE3uZwiu14cMPmFQFkTgm4tFXrX1rEQ1iSALBhFCpURrP2Cw6u427K2scPf7",
  "key9": "JDqehDTadiTW4SFuYpsc2y8SFAFxXgsMqt35yw593ML9RjTvpxJ3AMmSu79LEz6w7cbuBciSqBVg66HgJxe7UcW",
  "key10": "5AQRiDXJH9MjLxCzz516z16Q56spfaLKu85fdeWF3zp9zSRg484TvtA7XpRKnWiMy1cb7b62kjE4qJ2S6YaarGnK",
  "key11": "53HvHf1qqcjdNPu8vXQ9ECM9bwT39BrSmsbmG7dBmrgW98WnERHjVHwL7TcP1AdXnNTPKcj54HqJ4yjrYFWR2egt",
  "key12": "3hHF2MDoapcyMBFGBy2Grr4YfJrUbXdde4EzArcfD1LWK3nMwpcA7gXZ4ZR4ddSBLNQM93DSGEegw4YGuvvQLbmV",
  "key13": "2E5jX2Qw2REog67u5kw4tYB79dHAsR1QXB5k3gs7qRZVk44haPEy8MK8j172eZXMvLgRTJz3X7E1zKGhFDpZAWwp",
  "key14": "4DQH2heff3Rxmg5cxnetdT9QmUWqzdFfwdDJVX7nxnU657r4XcTzt2JcrF14AttVgvhoZx9pyKJiyCiHiN45KHRn",
  "key15": "2epuFXDUG3YQWRrSdfpV5MxTUsnZoDh7ZTfrTJgNGrs4Cge4rNM4PHjUpSM7otJ2GjmXmQLfwiJhuCf7EwDcSLK",
  "key16": "2MjkrvuEdNMxLJHbCco1KRwYdTtKfSkGKizcHhuP92JbiS2d9CryNvrMbiEebwAMv8KNFGCdGDQR6RVKxQZa6CM6",
  "key17": "2715rRS5WceEtPpD4qrpYjUYUWFKy7w9PR2JzMi9e72ctLR2Q6wnU7H8sqAVpcTP5aedNFx3hUcU3BDtiLGxYhom",
  "key18": "4gEFsspsoAHND7mYzhWQT8puJQWQntPLgX8kNjscjd9tF6E2tB4sTuBMcrwVxkhTBM6iBxbAxnV64SgETeXoTyT7",
  "key19": "39YRqCDHnGcF9JH2YQ11tgrCJniejfCiajixVMUNwugnirmbRXLHut6rLeEMvrEHAyKY1MogW4rDycbQ2XBgU26y",
  "key20": "5QjZcD1hsyystVdV2LEBEW14XqmDoTaaZe5GJubGa9Vyc4eNZG6TioSjq3ukfeSJxfRJzKKVyaiuTZZtTB7N3kUM",
  "key21": "kZ5BwivWZDkw6Q2TfjAez5Z4XxT7q2uaaa1VLEeBY19CWoZ5nUTe9ekfum4AyhVsJeXpmGqDf6k2mxt5CWohCx9",
  "key22": "397EVG2t9ADeQHH7Ycx1euX3fqh5W61bhB4UcWt7TZyE9W2PXn9uaZHwqc9fYs8T4pjteN65eEwLFmGUbWugk3iH",
  "key23": "2WdyY7p6a66prYZkEMMoxYia7VZWfqbPP6SHoRoya76dBBiYWzAbmneJPc858LBDKD3bSeVDhXkM1x2zpif3gZtd",
  "key24": "4jXLJLQyBzCZSz3sgAo4QWd6FZRau5PC79pRCTRB1vueUWFmjPNTtET3j7X1uZLUzfVtR1J4eGgN1TyWKkmVbpKz",
  "key25": "5ARrQUYBrndZNWZEwaqxSZhNc6NvpSztge6xqUw7XjQABJyoAcYeDMVddNPdoqnd2ozsFJUWibsksL8ichXPRzGM"
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
