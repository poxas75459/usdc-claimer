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
    "4YxN4CN6tneBRhJ3muTtFfZ5jteiE1X14LrLfMjPWkgiRKMH5d8tx1ujL8YFo6r5rJSPddoXB42dnH6ThMCBog2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnNMaK7dWi8jJreyJz6kgNh6fkYBVvVyU3JphW9U7aoejULPhue855hyCrWLyF8Wshifa65wvzge397j399t8MN",
  "key1": "446tbxvdLhbPPS1gZpCVTjLKKYkojgHMMCpxkexezkGYWQo3AWrR5bxhQXw16SP4xC7D6i5D9P8QxPPHgYmjguJW",
  "key2": "2toV6iLU1r4DmQ38828LSUYmrKzh5pMV1UQkPQ9fjtVQVa9QRJburftV3ihVLfH8WVKMeJhLDqznCPR2RXcVtrXs",
  "key3": "3A9CND8pDf8AMKBxqZpVZnpEV7Zgb9oSqkPD6YPnW8MigwhGLGBpXQ4dCXfaYeh5k7cQhsNhCSdpPkJXnCfrxpTU",
  "key4": "5r8mfuVSWpJNf9Eao6spvSCfFtpSbt2pCtnujfsyad5Vfax3pdh2SzNV1LQGCXCkBYwehfUgjaffN7A7gzm1Pqz1",
  "key5": "4PDYjoPdSSPiZQHaxKwxRSDXmHQDRK3mVztMbrsJQSPRAEpTGqjvHSoCqQpoHhYsdYxHVDuVgpHWVfdWzxR4ACU5",
  "key6": "66zcJLGgBhY9hcaRWZXm3ZqDTusobhHE9h5VGuCzBLGHx2gJb4w4jq4uTrvQa81o5v6GYoCoqpuGEaPAM4ZE8jjd",
  "key7": "5piJ2Jg2T3YBsD25KwYkYeRQcwbRdNGp3qtxSQB1YYDSwSvALAmkVmtmZf92XQgbspVBChW71T6ymj2J1C2mAMGE",
  "key8": "2NnbicukSsP5o6EtcJs4TJH5d8zN8ZS72iMbsEozeAWmrH74yGtNHRdiEQCEErzrgYA8TddHY4cmaQZqQByDT9SW",
  "key9": "3bqsPFvN5tWonVDEWJ8y5rfGCWkTnni3HXh9MQwwLvK13L158jg4neK5EKo1CRNTPitASronaJEDrhmsuhrtteHo",
  "key10": "ujmsd5VCMqHLPRi6GYBbsbN4Z9xtL8LrtzR9ke8HAcP1Wjc946iDFEfX5CVcWKwqhnV77MvRv6qLQUQNTSmje65",
  "key11": "3Unix8qFVuybomv9GkUkpXU1LaTF418kAnVBZiGWrqikVyPoKjo8dpSLScG7Ahv1LBit5DzG9QXLA9wjibhX8Shr",
  "key12": "4qjaka6Kir86FMnu1DKRfF6jt7PhNWySrFhur2kEppfasoY7NbkqWX9qk3L6nEztFU4NBHgAj4wM46NMeFP5tWKk",
  "key13": "3DhtyuxC8cYh6LJ7h8K6bWia9wsba7c7x5FVb3Aa6qfALrH5wPSH2nQ7WQ4KGSKGWN3QzC36j6T66cLYfQcrr46W",
  "key14": "566mwFHmB55amM8WGYWU99WvhkndgMyjy7EGeqEJqjKGiGtyL5dy6ry5baqQp4WfsEMxTFcA9fgQJPHgr4naKw9k",
  "key15": "4sey6tqySV2V7qe3VvDeSSMeJ1voWVr6AqsMdvFDb9zVPmY6Bx1uGvEQZrpTprcgSfMYxCLzLumgRSYWCjiVjmii",
  "key16": "3EKB4kd5M2UWotJZwgDXEoA86t1SEjDCuF5tvBhszXd7bziGqQ9bSqsK6MtF13KcRSVpvNBrbiZb5DD3WV3yu4n1",
  "key17": "5A9GLcATAXEzpQLZJVd3d5nGCzxF9iGYvMEoD9rHqt7cRJQPZqDhm6r78skedyGvE5MYxieFBU85cn85RZquWXPQ",
  "key18": "64Q6siSs1c3CRoJc6oEJ9VGabRS9hq2NGsXe8HbfLV4Eurt6rUcLbqS9YzGLVmb34ATuCo1gJZsDoSp9V26q3Xfa",
  "key19": "37vG9D1qvUw2dULAS4Rd8296R1oQtM7vKivP3Fj9cQ128ofcbKaT5nVJYrSCQ6hq31tpXWBWcNioZfqEiAfCyX7N",
  "key20": "4aZKXL8GcYbN5ReEzxZrh5K9xkaEwPE3waPjihspnLzgtWoZoH2aXNAkJqK7oNTH8w7yYA56Bh5bhfFtaMwkTQx2",
  "key21": "2smoFsJUz9bm9Y5Y6cnrcx6jHPhxNatPkCasWA6JKaFT4LVEhzgVdoqu2neY6qAuMcZDsbwJrWpPNp9hkqmcqsJ9",
  "key22": "3ehWgePJ6UQWtQT6c9EuivKU2QYE9PAvyHXaMo9HnRuz8ZhDZw5M1Hh9zfAwB9Hgsm8HjS96mZcAjeuhGSXrrgnZ",
  "key23": "XFNvPqJjyL3nug2pdUXn1YKhzYRABgv87hkyUCsKciizePAwVePB57qLTrqLrvyGmQJdT7wsQx9zdnymWNY3aMV",
  "key24": "5omMgtKezMvfcrnZZxqLMUf5mfkzQ7gAmWhVWaUrLgMK3nJgpFvGnvUTtpsbuxHVYT7hNUYNqLc5ZhVcpi336KUM",
  "key25": "34tbB2fnamiUzD7UPfbfmdtdMZyk6rraiP8EWjXDrjnzarBugLVJgDmGainuhaRiwMbpHEdofeKMnJYUVC2U2h1H",
  "key26": "52YJThRT5WJkSPyTMdVRy56hjbaf5utruhTvmK8fBnKccmBkkUuHTPZZRSov9acqCHZnztYEiGb4UbLhuAq9p6FV",
  "key27": "2douJvV9y788Gshb8RTuo7Uf9gHumR4mX9TYpVnLLkTq1tv38KuHYVHSAQsWoomEoVU9giyfPg8FAtqbhegEbKoc",
  "key28": "5FYXdrRu11k6c5t1MLPw4JAVnb8QDuduLELEpMyPWNjy3P3nAbAcmD6QfoH6RDf4yWNjtdXtETwpFoCXntQZ1r1r",
  "key29": "4jgGckb4JsKmhVnnhVSmtEEpZyP33WHwWuRPAGPbBPcTEg4BguudCcrwVmDcgU7nRvZjEgSx29Mi7MGofMtWzmw"
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
