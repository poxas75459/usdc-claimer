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
    "2u1H3BRkY4LVqgYd7REeFRPFggBen4E2n8fghRSMxLdxs8w285MFdwvrEdQBz3oUPJNHma4KpWfZDqEaiSLPxxXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gb9LuzBFZLTvGzcDKHyzAnBybRWMqLhFSpGqrAdVeRTFqAG4J4GqXYFY1mdsdZh6QJDM1ikZigFJxyQun11Hhqn",
  "key1": "2hvnpW8Vs2hhtCBtVXGkMLxyPJiPATzJVwtRyXMKnc5yqEepTvKwsFiM8RSTCUUuSSK27P8rao5PQoPF82ogcQkT",
  "key2": "2ywKicd1UT6XDrrk6NJSELvpx5fMhwChnPXA46HvhJDtQGd7Kqx19gvXP432MjzLdU5qY8KA5Sxtd8S3em8g8tCs",
  "key3": "iGEqS73VdaiQfFTu4kebjgmykKzVo45UykbS7kjLc4v2LR8T1G3WixCnTQjuUPJE7t4NikcV5vVJmy9hXRQSsec",
  "key4": "2wt1d6k81p9JpVDSVLeaxSHD9ShVsuTJcALbvLX71j6mYJPhHacepVZQLt24eyTERzAPhEahuX3eAkAVoY5sGqC7",
  "key5": "7epY9Py9dsaFLAujE1TRbb5AEDNadittyDQKA7gE5g73KzTK6RuAdgDt1e8PJPBYEWYqNfZRsQKbggSE6RLYq5A",
  "key6": "5CeZ63UHnasVkMRBP17Hkwjf1HiZfKqDK7Z1Z8U5MDJ8L2hfHUiMuCrkBtNRts1QAih4c7LgVDMbUqtr6T8ReZma",
  "key7": "5Hu6Gb6MSfV9K7kKj4nfQK5ZAh4BoNzKUcpjpcZYPbDJciBPHw4YEQBrGm2hi2rVp5QNNycgkRTJYrNLuzon7V7A",
  "key8": "2pFUSKq6qktoVn1daXTEJQQMESmpzQjx17bgZgrjW82Qpgb4i4pcR6UdQEeQvcbGK2emNsW5hGBCJKjZ8Jn6FQhU",
  "key9": "28QRiCx2voxCGAcsC5zAwtcTNourj7T9gH44J4zfXtrzjp2k9sPayufiuZg4zEB3RS2VbUZ1ZEWaEPWvWPJpEgEX",
  "key10": "5ShAsdxRhppoiPgaP9AVTSgYZAoiTx6dxH4sVgx82NfFSGRi7TucRBxTWorBdq3waen4BahUhH3UQpxBxmGzbVzc",
  "key11": "5xEsRcDT2NLZPbTSFspJVbJBEhR51xxVgDsWtLpowsxQsCmHgGvDW2N5etb6knjhbYn998USZSb4tpz675CrdHLM",
  "key12": "5fXThqCyWCDXdNSNQ8wFmYpULrgrwjhS1TgA1mnMm3AJgDqdqoF7ocW8R7vq8MHvEiwSAxtQxxiKxuvh7vvhA51F",
  "key13": "5ZeyhmatfGqnsq9T4ngmxCPc1k1JaE3cTEmgKGeSeBt4yiBBkHwz1vYyPze6Njd6Ur4RZJno1aTtJYdrgNca3GRi",
  "key14": "hJsVzDm8KktXQhoxidFDSYGALAkVtjDzLazVFQUMZjh3yrCpriy4PWNQDv9Cd2fEWq6TYdcDryerL7d8cZgoHzw",
  "key15": "2hLUAyepmeKdxc9C2v8o9CozLs7yHBYmgFNRH5QLT6XmgATFy9FJVN5c8H8ievm5uTzFEucAT3Y6r7cifnG4adx",
  "key16": "UNLAmtKqA6VNax95r2mpCosQ4nYdRnSV5aLncyvbKkHYL75eThT5UcZLQ2xbjqAxJoybknSv8CwxP6bcf1BSwWY",
  "key17": "4gzmM5yzMJzmYh5qHMdZVk6KY6vRaPDWr9g9CjzGjSQ9ztifQqUVifv4eGDLDkvEmVpPfBeUiHPctPWNaxFgkxFH",
  "key18": "4omH3dyairsJDiwac1Z9e2thoq8x3mmaMAfARq8GKpTe18Q59pVuFFYbEdw96L6CkdZrURtoHDRXCpdahEmCERg8",
  "key19": "4oHkEnMzhSVPymrH1rqNCXMs6WPeSuZBtxRt4cXkeC7GBE9BKy9P961MrekUjNyz7aXaNMRFSbdL8d5cJAdtU1zr",
  "key20": "2467b14LBEoXdKUwU66T26Biye8uqaa2zNer3HdmABriFnNrzMFQDeWGdSStD29SgzNxjhoYWoBdLJQFHarxqg9u",
  "key21": "35ewjteQ637sTdFukuUzCg1t6xCokLdPqnCmhnuaEZmQ3WgxkXCWpYMorYVWvUMXpQMWstfVvE26j5YPG1KZrhFL",
  "key22": "kEruZaU2DV6B48gWTHFg8eUvcRwKFGg7PKQfoB84Gn1B8xGSMYELMWZ4Y85ZijbJbs3zddwpTNwiwc55goJHRnx",
  "key23": "45fey6zNS3KhGaV3fwVit9hCSCS6YR2yqqqiAW9x38EQvnGhNr8tGf2x1BjuudqwScWbdFz3ThtWQqukdEjrk2dc",
  "key24": "q5u21DnhJeXCmh7ASJLgZw5wxHpUaJT7dqW2z36JCR4c39wyEMz4N78gC8D6pqmPk1DpD5BjQ6SNJCYMbcQYatg",
  "key25": "2NpVovBsjR9PAUHbEWGZVTvKayz1sLt6aLnvm3hD9YhdU3QE1nSmt73CJL5UEJNu2v9j24XCmAvegGCDWVAx8a9",
  "key26": "4dzTJmsjKSGQHwyjPv48tASn1gsbTcgy6c58Q9DjVRQY5x8QuZkPVn6UbhaLcjxsT1M6Rbm6C9xtHnEDpCNz9h2G",
  "key27": "HEbW4WmZoPBusMjC9DPcMdnnhyFLgJWjokguNUwEKAZVdjLqQuQTNDAhkyuQkPPSueGciwSzVVbqd1M2szjUSbn",
  "key28": "2zusjMhXLoj1t4SX85RB5dibx1Evq4CexmSNSBrozxsoKeW362JKGqpzbLahB44em7c6XaM1hwYwkD9CmH4dK6JQ",
  "key29": "3MWpHdqUiHm76q2XL82DXUaKDuJuSPpbtZLuXQXtV1Ko8ueQGwJvXeWVzQiZpmK4RiAzTN2PNFFYEK6VJCPVpA2M"
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
