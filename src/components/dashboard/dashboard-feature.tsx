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
    "3BAH8gZqfe6yiAWf42i7X1duxPGgQYv7PfJQGUyDtgCHSVMh7XRSAQoMMJCdjwvWJm2qttk9nx8EkKZpMbGMLPZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y44Jfznm4JPDTgPe3P56z1QrAGrzDAadcL8J37Beb71ouBa1tpNJMMFatKqq86gAnNzrML3TG64pGRFeM3NWsYM",
  "key1": "iifTQoTx9GHJEvV27RVpHWoYU2ppcVxwZDsByNovHWyWUSpazGtfptczhseFPaREphmRm4MwHwuUEYoxvqJyhsi",
  "key2": "3itZNW1XkdyGEUwCGwrqnWcxuvyXpXZabTB7FmFS5QoyUziG1Ty4ueG9F9sPM8bhy64affwtNjYZvkftJLnQVMCr",
  "key3": "5bLB7c51FqdEt87528LkkrNfhDNM3kgxX4ropBeyWQbJDRzSCbGwey3VEt9S5TXx6HkKykCuCKgYRkatASHDZHPA",
  "key4": "2iR8JN6L6v1KB2B8fEMLpKLpDjjvEfB4q7wutzaRB6M7iWDzdzG8we1ruKzxuRUSCDSwnPQN147a9bmBZizSS5tA",
  "key5": "2puzr8C1bNScb4CC4KWwcc1WGsEaox45apFdrGgm66oML442hge9Xzf6DXiyYy8MxcQ4zccUVaQ7GWPfrZLotv66",
  "key6": "2zrMqShQTXGVdg6B2TvUepbS5uGEThFgPCrYtXVMG2VKFFVVwR5uJHuFmxf8D1DYwSkGJki1hW9ywbGynE1NLoVm",
  "key7": "fwqNiSuqPkLDJoWc6huECj8zRQi1t8b62Sdh2peSkUQi4J7EPwQo6vB8ESdMQw6VtJnquLvYm1xTNB5JXVPd5uc",
  "key8": "5pccxP4gPRKeFG9wo83VyYAdfyQS8Cw7kNUxuZRzKRsDkiy4wxrcQMz98JXn98cbpfePsEYyi5H7ZKSb89NbbWT3",
  "key9": "5jiKTMtxYNTXJTXpVYYqS7apYtkQQdGuHYj6dBb3N9TrK764BaabxCZKXPqkNzBaxiYzq8Z4SLqBnoaspyLKp7EE",
  "key10": "5HAPpPZZ7tfDuQ898n3LQfbmcXJwgQ5bwEUrkxnqyK7DmfSySnoerrr8w3tZysrm3BJv6RB62CFHFQ6MCzUhfUG5",
  "key11": "65mW7hqnZ4nS1gaXEioF4SNR3VXwFrdcErSA8mJe8MjwaoTEynybEdiUVCwXorA9DUrJe2uEFo9xGywPuxwJwxGV",
  "key12": "47NSzSTvnqtA28GUNy6QbDUMiqmXFpecE5P9YGaHZ9kpwsi787PXMcT88WrerRNsK5jgDFfypFtp9WXHBq9vabFr",
  "key13": "4VzaMMn4t5dUEjtLxLx2XSgkWrEQdNPLzxCZN9eVnRCcek6wLZgJXx4J7tUmfpAmkRqPBccmG4o9jDB88Ndui1KX",
  "key14": "4kGZq29nHWhkdM2gaZ7stDZvq4yrsCugNxADMuv2WNBd4vtxwGnktkGPdUwU2pdGk6nhsd2Nc9BE8DfcTEXvCjy5",
  "key15": "4jLSsuqYtfVNdQqMQd75au3seZvwqAQyMC6sd8DCXawGtcC64w1k2fRuEUnkH3hXq9RHuZgQ9Jwb5WipsWLaU3FC",
  "key16": "5xDmMB3swCwzm6KhdqmtMpP9VnYrzW3CQBDA13rHqW6RCgzCntTtGnk5BTm3stnaPQKBxnYEiUdChkc9u7DEvg1i",
  "key17": "5MBHBnDzm7ATPxfP7dHVR9AXS1vuxfhBgnAVPAigggjpHRNGGsbJCWTPpr2vdu4mVvu11au9NsaGvhJpSM47LAVd",
  "key18": "2gCFhvTAhk5gKBwJHqHYdPRCXDh95YUKCpgDdxWR6EDYAoXmwtRuaGNNSJJ1sSrkga5XSbmYtvtVzJDkFYyD6cLT",
  "key19": "5Uenb2iGHSzxbixJcir68WgxP8Hx3hV496V4KZ4aAMkD1HTTTSEXcDFDMUmtCDigKx1FUmfPmHsBp5QfriMBMzZW",
  "key20": "2eXd1kkkTxM1tVy9iwofPzg2VhWDTsiqC3kb5n6UbJuWRW8g8rpGhQjyGmAnukktxLFThHVafnTLHPyg42vsnRa2",
  "key21": "5RVoq2r3UPTdLy3fWGQfUA7LH94y3wnwE42nLk43CCbTKRg5JLbZNCU3PLueMbJ6SyJrNfhiHkyMYo7SMbHv619N",
  "key22": "2kZkQBXhBVvMW3tPyAaa9RpdaN3etkJvPccApXqBmhUwbwRt3nMut8QDufG82mpwKNGMQNrCnpHVt1P4XPPDRXpc",
  "key23": "4xBXnAfURkpYN4UhYhaS6mta2zuvNZcRAiZM8zSE9wvApt3yBpu6ZxtRvFC678GwRChoBWChcSVa14wocPqjnAxs",
  "key24": "mGqQ3XJ32TojpASm7jaDEa5oo5RufNwRddEkt5GXEu2cnPFCD8qmzoumAPg5tBRAPHVY216xNqUfEUihUih7LBV",
  "key25": "4JXnNw7YVzMAnAb264k3CAwonmPMps8RnZ7qBagzffwUAMtwX5Ty8kkVRr8tmy1mMGoLcLP5oaQid2qAPf3FHJN5",
  "key26": "S5uLQ9JVwLs8kCR9j6WgJA7ML1iU6hCv3xoHLnQ2aH1cPN98AtBXHufMrbY1eGS1JRSKySid2iBSyQL2mUjDZ5R",
  "key27": "5mzyUHxpCrTkBW1YELdp93zM5ounFdGfE3SVkYxNUgM9zG7GXyj1GDDHcGv7TAKAoXbEucNnWGmS8inByAo7nRYj",
  "key28": "4v8dJCoqi4DEkRH6GB8cPTg7j1FGXTa5Ye1tpJaMxDw4VytknusaDhx5KiTwKXoGRHhXRTsP4MwWH2fE9Ahz9pSC"
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
