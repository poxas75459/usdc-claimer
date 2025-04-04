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
    "5LUejkZXsn8VfTuWz6LEZ1xvtHNajG2CqobAZ4qx65GuWZp57hhRkpE7pmw2xLFG6BdS9EiURrD4rBBnpKzeXTGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoKbh41gqUsnw3SSaW7U773bvtE92Bij8s2NGcBM3GqdeHqUyTMorrN3XfGrGoezMC5BCkSe6hC65GkkMtzJECZ",
  "key1": "yiSUifZaQDy25ZjLu1JDohkuwWETgr949Pb22EkgHniH3xmeJfuswCvsJGGtK1ytwgt1tXun6ZYLvuHdcT1qu5y",
  "key2": "2Y3RW18ALxtuzRwBpHxwoevk9gz7gM7WUFQbv7ikjW81f5uXhormVrCBXLAKkfBDtDAiGfSh64GEetJqo25o21qK",
  "key3": "4WaAJwesgb7vof6jkj21NRMnHZ2GgVaSx9dXPVqAw8YNjgziZ82JWSSNPVATPfznySmXZoF7PnV3uC9oyj2MMJAM",
  "key4": "4MmTo7wYFgHKCSinDZPM1Mn7x3KK2kUuv2bhS49A9UmRnAB9qzzkoKf6RVVXuKkkNbvGNLCgRrpCtSeZjPtWDo3a",
  "key5": "2kAM1yCzwZcQmuo2bhXwDWJeSsQXAUzyhhXLqwBJZe9ZEHSSUrgBHHvZv37hK1n2F7zED7gkGZBY5S5aASTzpMpy",
  "key6": "5GNt6Ekk5XKrQ9hG2f7xM92rxy7hfqxS7Ep7At9bPUaW59gcewfjmK6FVt276GvAiFiJemYSrpNFurtCH1GNPLcK",
  "key7": "rHycwnsDxZQ2JsYPHjsJzygbti29KNXDNEvrZbPyUrKeuwG1Dt37H2iCvt4rdaguU3cyg6hVWST3Dvj6ghzCwAC",
  "key8": "3cfdpMpQD4Bfbqi9kgVLUzj6drpG3MJu8jnas1QAiQVQ8n441nLP2YkE4KefkSRcJxkzoox1YzB3F4CzAWT9AxKk",
  "key9": "5it4VHiakRiCPmhcxob31Vq87YFnon3zbuvgknBHVwZAbBjQ2hgCE3mzTibyQWGP1mJg5N5TmDXK7FHr1e8j6qDh",
  "key10": "2NR66Xrtow8sw6b1GHfYbnvCPGAQALenXL6nE5bvwMxKATjpPAudAoZscqTGi8Yk39RQWB1baBH9osgEhkYrskYb",
  "key11": "8KVgBjafXQZeDVomdUChXao54QJgYuw2gq1SdeUeKjMqszCA2DdvW68cK7eGtx55rmv6ztPyUMfUXE3JzvKTUJC",
  "key12": "2dqbFS9LtvZLSVc8Tm56mhTiqZ8WMs1WrDWEB7G1srpQoseGGjGGeM1UTmPYfkiK48qGiihfcnJtbQUKrwciYpT5",
  "key13": "nDniHZE4yTY3beJYvxJ41HB1Gspf3k1HFxhgmdroPudB2pWgipqzBbgbSRqJ6ewGzjxX7xLccefRDKVpaEi62J1",
  "key14": "3kjmqdyV5et3giXcZQ98V2uxsLqWg3mr9XqDD2omv4pDsYSHSNf8pgMMWcKHfPAGjCV292FYrTtVM7iSxTwQRYk3",
  "key15": "52cZ3J2w1mmFkHPUdGMPvS61poYtBUeYoDjMoEQqUjrrUeSnU6kyt7Eg5Nc5n6voPUw2S832FANR8ZznwabGymLN",
  "key16": "4SbxJNnQHCPbvvQ2vTcjTk8pozWa3ppgUwi9vbQgLA4QVxopvtxeeNNv44ubFNCnXFyBLmNPKv82Lcdv95FAhJNu",
  "key17": "5fGSDpQFyp4DpHWLKFHqqztPcJSJyBYA9DqaaR1K2HpVQEoe5XnkCSSHBYhBAWWPQJ8UyscNmwQRHnyKYJjBNrsz",
  "key18": "5rbfyi4EKicTDoDXSxTJM4RjMQ7hK3ELC42P8PuvZaGhhyiNdP3QVVj4TpesGYRTQe6wi64jFa41afJXHTvbHMbt",
  "key19": "2bTD6aEDeU1nJJoei8AQk6v5Pib3jnAeCCivJXrULFEurTVwVtfVwmjSAXFSwfPWQDKZsGk5w9DbnghZX8bAdNFu",
  "key20": "2A8NKwmEnrtNnrCqUi5dfGRWksXpCDxLL3vEpofauCTB3voJCH9ET3y4ZWETje2RjCTFAcWg8ihmaNztwA4ARnfJ",
  "key21": "41kASPZz42PaAJc1qQmXKMviA2bhAoY7Uv8cD1pn4Y4fwYWtEV3qiHdmFvfWpRRf25d8XgiBZY7TUXSDnKHEGoQp",
  "key22": "5J7dFGGtt6VsooMkZXJVgXpxYjDc7f7Ga5mUXYBDKERpw1wtqsE4hDfg6k4vsBSPimgPkrc4hBsJuELYHPvGJAqk",
  "key23": "4TPdKvzUhKw8fgJ9TQzaUo7TefEEwCNpaers79AgJdNpbz17Cs5nA9gv3nXruumsyJhMACDNwdFVSQN2SWyYpR29",
  "key24": "2ziLdxE2mSfnSnSHNTZUMEWLV1Np6qT4j8asXxrC3ngFJy8hdTCe3Fs7kXyBSfw9Y9qr44AGEVEqjsU47RjZPgbS",
  "key25": "2rT4fY8HDEPD7w7m21MUxJPGPiUb768xKqKdj4feeQhRdTeJJh5oEQsLzsYfYdQLNtdEnwrdBbfWsP1Zy8Z9LPTn",
  "key26": "5CLxVFMbBRRWHWAp5VeHpDRGAME8T6PMaSf2QSVjfYdnUbmNKy712ZfE11feLM5mMXeMdjfnqvfjovEQjzF8UeP8",
  "key27": "4iLpdNNUZYGwp2qxdTSJX8isDWZhi9syk4rLicfsPTvkkVfKB3Kyp6hMsUAL2vAznEAv9kKoKFZfXGsyVxQpZrAX",
  "key28": "4WmckW7zKtq3ysK22avopUZpEWfHEfcEgRCWBLoC22BodzUUjdKibwNsXtVoX5HZ1rewRELwwNDCr2aWxXyz4cHJ",
  "key29": "4LvUPWyKbZGgpeaPDwmPAGjhjGvne8qsL9wKiL7ZKr918YoUgMh4kJkWkq1VcwZVeo1cAvH1HNTabAZnYWhBujbk",
  "key30": "4QTjgq6PE4xenhcSsDPrZHJGEpNaom6FyMYW6LsWthJXnwcSnnY9Wy1fJNZSpmuhD7mHgXq3mNd2nhueCZFsDkNv",
  "key31": "37akwwt9HSvcYwAZ9cn6c1FJrcoNEYoocASrvdZgE8MbDVgaeCvPtErvgHEjkRBfjrufQTQtf8q43D4vUtYUR3Li"
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
