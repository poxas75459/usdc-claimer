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
    "55PEZRJWsGFEsymP2fPW9H7DcGK6FB3mMAz5h6fHWCiGd1XxVmMU44JFFsPuzaspyWjXP9Fk7Euyh6g2rixyUvuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALHxiCppXGLQtyH1fpWJNdwhopFLiddxC5J8gp1Ey5TtyUjTfYGcqagjWp8jMrtFLYEyNYNrbNdNF39A83Ex2Gg",
  "key1": "3ztu8dMPXCFfP7DQ7kt1bzZVPzpFFxCAfRjiwnMJwKo3E2e3sDLZ9JTZtb2WLeQXhnANYdD9pkhPH5rGV5NvtLZi",
  "key2": "5myns7Mm4Fhh7sGEgA25Hcid3VoDtuWwjhzVDs44fgt2yLGk22EoSn9JJXDNcr9s1pscKxCtMgh5tZ3YwHJkAdDz",
  "key3": "4o9Ufkm7fyTc7V4GmXU228M3XzvUXtMnCFDH7SkR7Ps7KQubtwZBtZjpjJgjq4qDuftUfekccScJ3ACNbTft7mZD",
  "key4": "4xrQB8XjroF8px4jpeY2chVV7roxEt3Wzuhtm4LS3kgzWzai9Z7Xu2XuoiWSPnEZw2gCbwJh1G6LABqsnQSbyNbj",
  "key5": "XxSNDQ6nLkkG6ySmq1HmFby8ymgsFPJFEDCN4Wba8Wv88rV9Cw95qwu1Nh3fbyJqurX1xsFYSzmrkCJP5FHC2An",
  "key6": "V3vWXi71iL8ZjSEFUz4EhvUdSvyHcFiaWaRowKdLezq3EpKk5n3oAcTjAx87F3b6nLxeCT7U77Zo1PuAs9Q4Nn8",
  "key7": "5BKGiEDJ13wtzgkKWBxprZN9xi2mfGjDRh2Kdzmj44ebfzqSuwrd8gdCcZ22f3RXQ1RtD6e6Yxwbwt3m62u7fgxp",
  "key8": "GyEHFTMSzNU371ans6FNQsJxLS467CP9h4XuniFSmsaKejeyzg2hf3NTXuvrLSP3KHUbKwz3zbJtYDAKhqm8TQw",
  "key9": "vc3zuhp1SjQizn43jb826E5ur1hrpwJ2mUkUefzcdZeS6hxT8974beyEg3Xt8wMMjXrQ8qCC7wbgPzB1aGgMfHt",
  "key10": "e2GSUFLcQwJoMhJmZUmxAHdvDT5BQcmhyMFEpR77F1UzSVDjRW5mTEucvukYz5RjqqpTnaWBSJn2fHDiGcC4MGe",
  "key11": "4QmZHXTdjXCR9ZZ1785En7HovuGQN25kSdKsfQiRdB1nNy1AeRndZUz4QSTH6VTArRs7BeDTot51cvRjchE7b2Em",
  "key12": "2j1Jk7peumD1ySW1EbXSBKNrmz8t4DECGxMWfktBq4BxJFTMuo345U1aMBTdnnbfzUMiWi3xr9mKzL5U6QcdkCc1",
  "key13": "57tWSJuPcoB3r6sr2E3wJ4KruciZHpc9jm76hGv1ShJu7aTiQjJu8ZHRd3iSU7ZMwMQkVkfh4Ftofzsk14K9cfvw",
  "key14": "3e2NhNPr6gMJJjZn5q7yGecL1rARgsVvAwrb5XLAr6HodCbkQN3En53MRzEt4RcRgjyGu9uUcwxJNnNyiD8okXLo",
  "key15": "2AZKho8C4LEySiiaHkWxDnmLy8WM4YZXERPgzgGh5vuiS7CJYjyHUEccyCi3uxmuM4XFYXhecCorekaKjkiuGW5x",
  "key16": "kzSz2gvWqmoerV9fmfdTf8ZfQvTYUx9bFmV5FDnQUmg2AYfaTdoKrpW5aGZq3P6CiHyMqECLfgdbeg1wMUxX7jJ",
  "key17": "5ewuXY6TVJWLDuYHbNZMM7voH5V4it3u3uswLN92HhULebeccX9N4MY5v7u4ULvyyZwgSNJCu2Zf9rwNgFG62u9g",
  "key18": "5FTD1oz82pxd99aud48Z3jVkLVSSAaWfSNXdiff1QYrigqB9zju4cK2hAu3MNxf6PEezE6j9kbk9QkPiftsVNU3a",
  "key19": "3118mZZq4hwWRHoa7aH2mqmZS59RrxxBwYKsa7Qgpu9T8G3o9g27Nf4Xp3MtceUBjL4Q6mG2Pzy4uo9sY8SzD6CB",
  "key20": "2PGaURiYLjqjpEAYJj833b15kWjfnmeaKEW9g55Km2fJdYm9fdimnuohWUizTZdQpm3geKx43ekTBSyh4PFTY9bF",
  "key21": "3wtgJJocn8qJceS7qYhTaAnJ7EEXFU44NZ3Qd9stuE3CWsXBAd9tkv9i3p6rPUrU3J8eqoGwPbEQrzDrUExG1Kjj",
  "key22": "2X2A5ZPh8e16fP5ZTqUr4j8PkzmKsnihnm13cxvzy45AtLSxKwMNWxiepcZfVFJ9kaZooo654AcERhkVU7iMLFDi",
  "key23": "J9ejhhKpryA5zVVtYrgxTdoCe6rffa5H82LiAehBMY9hGHHzt9KYtF78cU7pPDbEfuNY37nJ5eSL4ojVstCS38r",
  "key24": "3LN2KUr8cCXpKdirrJeazVSxCwtGtMc6Tz2bqo2UCemof2NxxN5bcqz8UdFLMtn9j6tFVKqWC7fYxmM316g8wAXG"
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
