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
    "3vCGRYYa878KuqdhVd6VEaMj6bFtzmoGrYp7kkwEhWWBRH54p4g5a8guthSqNXtNLCSR2wxxG6GN5ggbJBADFetm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNqLGAtvQm1nHsvjCVzTJ4FEAxwATxmhCY2UWxr76jdirEGjxd6U6d7Bn96zbPvWDLxALShDBZKpXaEzq3HTQfQ",
  "key1": "RAe3FgeWxUmg3xAkJa2xqPxWhge6QWp3Aomo5f6thRmsUTAh6TC3iGeMmmHCwnnKosJxCUKdu2pNm6LSYhX732T",
  "key2": "5rV8frpWPg3sXFbs6VBrTfpyzVDLKtpEEVjjperNkEVnaRLiRgPEYU9DfBZyxSkDxvQL4WctxGpefNXTSnoXYR9K",
  "key3": "GT44rz1GzHvmREg2EcawdxGuqtcSQV6GwAQxhimnfnxCCJBRuuAfiBBGn2T6DUkEtqc5hwduAr4JDpV26KfRjQK",
  "key4": "5KdJQFUoRy1XLMmyFMYGGWrgDkEBRVQRv4oz9FMW47dT9ttG2i13L5tANGWX8XbG689gVpWTVdCUZu5UbsKi8X9L",
  "key5": "5mZE4dVpWj4dRDEhBjTdV6jPMs5Tt9SChd6fDKbWon3zuKrPiTjFBTTdxgrRYaazkjqzLTr2n2BCDgFzc311CoxM",
  "key6": "4akHpxax5GrR6x38XY7LxK99GwKmRA9VLjEntLzmFHsZsh2qX64xhUudnq5k4t4mzW7ezHRxRtwjRoXgFmYSW1G3",
  "key7": "5KXFUC3r18Kc3e87uH2V2N7U6qn8dAxDvf8VR8TpP18mXQqP6VopWqq5kWcUqdv5ecmT1itSQRsR2uqsM1EwDLSb",
  "key8": "UM5RCzjDVki5sVHQ7yUCjdKbZA8v2siM5b39kQeaY2MekBkj9wGi5hKCE16KzWDH7H4jNCPu9MTdK8jDQkCUURe",
  "key9": "5c3c6VMvKitdzYCmZtwAxmi9QNV6srjaPQLZTttTsmq2gQBLoyt1udg8M9DfqL2b6wSK8PHU17HNZ58Xu6CmZ8JE",
  "key10": "2ZwkizKULwxVDupiM5cEhHwpGsfcFAg4EPcFfdJqhferQ1JgB6irZYPt763RVdWSuVpnbB7SWioCFeqqtpc7aQGp",
  "key11": "3m2iQBNta7ot3nvXuGHUYgYayYrF8vNkrPUNPuB9TyLsSQtbq8rBHpww49KPtFD3rF6EvLDpro4BiDA4rHrGCQ9U",
  "key12": "2tsxJwCgPzpgt1vYSbm4qUWci1vVaf2Um17nmyBGn5MeUtNsWbmu6jAL1R3xUtAsCygmzAEkWtAt6KiwsxGHE887",
  "key13": "5rVkWmXRfcgNmHUZR1E8ofkLy9RXN2btLqhGFSmK9W3V8DLRTDv7Fe1A2UNomdBjio3a7ApGDTynTS7abAjk393b",
  "key14": "62QcmzUFsKD2WMMwXVwRzvBt31sBXG6fNVXC7VtFakUb1x5CGurpLNYwowhaWv6GrkyALNx6iYcAe9mJg9YFrb6V",
  "key15": "2wHdP2FtCqvbJHkHHd8eZmasL9mjhiCh9BK8FCJaznTTdoVg2H4zNVDw668b1vzS94997LWrxMmVQghDE53bmEzJ",
  "key16": "2MsvZxkjvc47QzAG5j8CMRHbStDt58ripcEsKRbpcQh8zftRZutbQZi6gHQ4R4fVaS6Qdskq9r3VytnAoHyXruiY",
  "key17": "3t8DLbixgaiig4nkSr9XDk3awpKLUfNjQcbsTqR5CVn7nZEYrGdQ8stDWZ5nApSJpfF3EUKKcFnr5A1w9NFuarn5",
  "key18": "JDEtK68nMgJw155YuE3u99SjijgrFpNyPTZxDt6AtfMVRvmebRE57KsF8EL6uQTJGnqF68V3CzxeQiQo8StpWLD",
  "key19": "HxGty348nHLuhtighCoTcp24QtoEbP681J3BYj1HugzrUR8i52dhNX2ME3wHyNsZLvpviYZRJRpvmqwUftebpE2",
  "key20": "472wiPfdbRZCJs9CA5vBu11o2KVmi2D8SKMZReEKb3WrJFBxCuzSik3Kw5GyJCct5ZccHPmr2rRxTzXhibpWfH5A",
  "key21": "3in3oLjVR6u3D3dedqE5KuHi6Ymq5eWU9b1eSZM9EPpcPMtjiDVMmEyV6dQ6KXzv4CSbBuAaoNdZiDgukvLQ3fbo",
  "key22": "4yHU6bgtbyfEZ6zrEoDLvxn1GqveQ47B1gDYoumzKD5uj4Mqm1V4YEtTkZd7niXgBk93mxkqEB9wAWqNUfvEi1vu",
  "key23": "5Tn4Kh5YN6ozSkQLfx2vD24aT1GCCCT52bwTKK7SvR2feunXPzHzzdwqp6G5kryxMF1HtJBtZda8UxqWf37bVEhP",
  "key24": "4dET5AYCLgQ4DFBqs4VdJdEB3kRzQk9Bqi9CPb4qNhp6Q3PZwU7cRtxHrhegGPcdatpvgnGQFtveauQJ81a4NEZv",
  "key25": "52D7mBrmhkuuJriamcdciAHVqXznyAm1EWPQXf5MRm2yBNpNJGbfJW33Mmk2PBPuaGAstwpT2srb1y1rr1ZSKAiu",
  "key26": "4CVdPBZMVjgNpBcnQPieV8iQubzAoVi7V9w95kpiAqzK7qPoC8Rn81Ef5DcGFkuPXfXxoKuNCSizc613S1JPQJBK",
  "key27": "2FTZhwcVenzH1QvW41TnFueMcV91dNU9W4PN7KhgaoDJMMRYgMvBXN6u7n1rdC1v6Q8EVucSSeD1h3fnDZmHGXjA",
  "key28": "4V2k721KKw9gDTbsECUkcjCRiWzhbDVg2h8YUhDTxrg9cVztKW8U384iAHC2m9DgrMDpVctNdzxrczo7PhUbSffz",
  "key29": "5GN6ydQtxNqDGE1PCSvx2JaU7A4P4BZRVBWqXK6EMPDUGPAdJNSU1E2D5M3JUFKiVHwXgjLk23w32WtERdH6yyEr",
  "key30": "435gyJYmbsdy48WDfN55oBPJAWNdCvEP8vqCvLbyKrMVELbZz1ts9k4BV9izv3AUEfGCvGGxqj9UGYvtUy8wCR3B",
  "key31": "2GNwu2WGjJCA5gjUXC34YsmjL7rj2uXXchFpzMgtRukLh6dJWVSc1a4oRBASAL831jBKFSBKu8CyXB4hUXDeLDek",
  "key32": "Jzsa4YTTMfsGDvn7toYkWYEaPX9RvgJPJHMxX7X4Nui6ZFEqme91GyY5nVF3Q8t3EFYxXcgHnS9kWBFoEMeacPa",
  "key33": "YnoGzQLp6nJPRs36YEykV4NANUCPRJ7pKd6mvUq6TFHmTV1ZzwfJkHcjKbDfFgCKV5QqA1TJJdXgXEuQ55qDQqi",
  "key34": "2FiDAMwJ3NQCS7DcWb8UXpXUUaaMMHdr1qaXAytv7RFwuYW2N2X1c96huGybTdEABjRcuVebj3KWW42y7mZLja7d",
  "key35": "4BX2Fn6WFAusPsCJxeNdwxjeY4TZgp85nrj4kAUpddYTBFr6bXQFa9MKio6VaiCD7q5xPS2QSpT8fpeGQePLxaqW",
  "key36": "4TzDTSgL3c63dnhpJogo7pBw4oo98x8cXzDjbxqumZZBTCExcqpUrzBdEMFjrxqgRVyt9oEuyNWjxU5sYVQHTnLG"
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
