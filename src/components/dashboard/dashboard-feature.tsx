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
    "5v87c4TYYNVKoCy38f3bhdDVYU88XiBM945xkTwJ9aWk3R9Am4AWyTRc9KfBQqhnUhPhZwbMymtpu5t2SBWw2sHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzNPp3kcrTCqX7KyiAx71vPbadnTBrzMPsRtgoiA14oQsT28M3WsCgoPwumaWC8eH1aj8K3GzmuD97c1RbFBHnR",
  "key1": "2DD5accFnMuFZgrgSXDCFnmhi9haxQ9zy7WJZpj5vYqwwFqeNtKg3gV7J65Y94S7wgrZWLVuD5dVJwfadk1XKQcP",
  "key2": "mVHb2G5SgoG6hp9kTGS2hCTc3vRHpdzCar62RqoamXXzB1N44cZJ5mFMDCKjspri2LDCv1syM9jLq5q3iciRCwY",
  "key3": "4FQUSzRJG88Pitx6VyNAxdwqngRaUg6yor2myg7up7HjkZM3mZcUSBMAt8qUkbBXGeXzLFRAJutkE5UN7Sap53tm",
  "key4": "5Hmy5U1PPkEMn31uWPDqu3HpmadHsHRDCoFqtb8NbwodP1xVrybgPVgSJ4Bqf3x8jbKPij2zm5sAJeBKSFT5Gu8x",
  "key5": "PtjWiQYEG6D63wyoz4uno5iYYBfXnyRWwUmNhLvXdwcPaeBtFf6hDZrPd6CAndWoWKF4qUKVT6fuct2cCRcpfA7",
  "key6": "2g4coLxsbdWCgG28LDgy2Zqwnz6GqTgpevVYUzL2jKwfBgiaqQTm5KmKivCDszKjM2kZntpVJreiQgMoM3YUL3bm",
  "key7": "31cYzmuF9Nx1eHT3rkjQk8xdDPqcX22o1aPqgckygQYP2DCouJZYfcZeUxabW52yAQ5U3a2294Bb2z8vJokcHwFS",
  "key8": "2y5uWhEYmdw1BMu3HRuBq5NbiabAzSsjrummWULvcxpi2pDYhMaF4g6vsPGp8wXySnWki1tf1ctuVn4pDtF6wc5c",
  "key9": "2hJ8YFH7w7ZMUKKX8xbXacteU6vfWSXxBxDEkB4PhfoPR1PkNBh67SxftLUw8f2WGKcrrJs8yDafQczLLGGS3FXw",
  "key10": "mwDamG1m5Pgndvt5JKBXzbydCEAnrAFfwk1rbGGGcDi4m1ydYz3YJusgL5y1hp4X7fAxpo3mvGsA12nJE2rpFyX",
  "key11": "keWwWQq3S2auqQHv3Uui4Zim5g5fFsigJRBrE2w2r2wb6vRKa7juSfgcXzhDFZo1X7TdLEauX6t3DPB8oNcj3n2",
  "key12": "33XHUPDWFBUN3P6i3HnsKZrk5jwKoQMz91sScPwKsMFW2E2ZuN638r6sfPQk8hshhfmYoNiWoVb2uBDsm1vhLcuE",
  "key13": "4M8xG5yEeHhfuFrbKm8PVAZnypbmB3Nn51cQ1Ko1gdHSkVN5QGXjaeGw5aDTXZhsBUh3wW9ngGeHw7PKyr4awhwr",
  "key14": "L5FwamLEYLVdvi86gBf91noqafsh3vv5Cgstisc6XyyK2RwpfhMZpcmJ7VHAVimw6yC1wBz367un5yuiGWMa7Ck",
  "key15": "2nhHpcW8UYMq3jccN84N1nmh6BWh8g8YCpzmWL9KdqVtP4ZwPaN2AGzFD6f1iyrVNXZLLLJBLJFZvMR1jJvRcng",
  "key16": "5oo9Mjjtuwj825v4z9491GxqBboySesmBAeG5ExHMdntKEQcfg9L8DZJi9wbqLQgZrDsihRx6tyLsYCKXyx645BF",
  "key17": "56aE5dEte79Yk4aeRowyfeEeCEbBp8DVJJx9P4Q4qpRTRvMRKsZDWETaWD1B9GGfqUmfpy63fJxDk3DRYdxqCHWG",
  "key18": "33C5TzA2adcS3D17mji6AChkfT9CGFfxeEkaGKi85TLntmg8XQEzbmKsyokhfLHXXJWjQCjHndRQExvSLr8RDeD6",
  "key19": "5uU9CdmBxX1i2CyRXr3BpwXUrLyWakRqp1kLGsCMpkRLEUqLLpdBDHsb9CRsSgRLTm21ycQCiSRbQPBza7AStsav",
  "key20": "4NvBL9RmeTDaPkTeSisfizFHQRPKhHFooEv5aNrzXJX9mZDAuUWpzJqz5pP3nwrwykP9hXS8wghVGTkouyNEfT4y",
  "key21": "4J3FrsETiHnvdiPDpXC6anMEiZ7s8nRYk9rTandpgaqkrVkzqRDEJwvTGgnV8Nc8zt2nFkTfySoYxB3DtH4GFa6V",
  "key22": "3zgAygeqLpHvRtVHeisGWfjkhtEEum8UBC6zKNMXJHrvYuDmXHmY8TJ9yVKaXWop36JgRk89Xb2sNUJcQxFca2Rq",
  "key23": "5FegF2QmGqiQTZr94Vx8yWC8q5YV6XD954KwaUJYAeXkWTmJefV8BgJ6yyHb84xtZ8MoyFNzPuYYTzdBSLNQUHye",
  "key24": "4BuWJjCzupqLe7AJTv4UQhAFBCab3T4hWtzZpwfzHBq4WvBriWMdPdG7cpGuCV7SCF8NnDpSFe8HFGbK3Ug9bJDv",
  "key25": "4jNjksBuEDF29BREGaSCFY1arv6SG8JAsPShGD2uqTuNj46vKHx5dkFPQDjpGgroRZwqVNNb3WzbHxPBFXu6yBXD",
  "key26": "4PGoHhXAJz426k2UUZ2BZ172uBwv6Azdozw5KLJip8TRCWjYd7ynLfY3caK4D17sB7x5TurUbqkQkQAiqPbsnax",
  "key27": "K87YME7fDs1u4pB3s2P4SzmcSRnrUBUrA8gnStH7fru89fNZzBAhiCbT79M9wSbZLc8yLwVvqW1puL8VEZqKJo9",
  "key28": "5Kmi4SwmMbtJWb2YjxnLkrtzBRXn5HcymvRgU8rY8prREpTdnJSi7YgX65KpNJCBaVm2gcu9RgLtzCTPRf99Epqc",
  "key29": "bkrq2eD6Mxj7ahXqE3riaHrxnv6jqLyuxRYAaQVepwhwwNMEJPPupxJjVZ4zPFEgLMQfEFRYvH7diFWRTY2x7Kw",
  "key30": "4WYg2QL6hs5UZdEQoeat7rjPk9qTSJXqVi42WWQ1XxmiBW1evS7Ctx8VdMLdLKzWox2oh7qNETBNRzPHknFX1d8e",
  "key31": "5xGM8JyFZg5huag5E5wcUiFLYorAeJhPc6kZ2mTfNGEPSPPKmQbFdZe3QGQnfuMrgwx2zbfi88K3dmrtB1hWGZ27",
  "key32": "4azgdoH5vXHep1W7DYAK8kAecbCi8pNdYVCiPJhxdBeRkJZUST1ytrt3AdRMYVPkUAbUjSMcxc3BKv7Wo7gG3nQg",
  "key33": "3mSvmuByNr3mH4449Sbc2ezrY4bh4md86jWQ8sPJJCsT62v6bqwuuCPey2oCTYVudsFNbq9eefufCJDYDEQMtNiN"
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
