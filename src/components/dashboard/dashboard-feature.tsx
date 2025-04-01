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
    "4XnYipVU8hbF959sf1hQnhaxqB3dnPm7thK2Hdaw24GtVtAMGziFRizS7yYJ5Ke5Hoiv2vRvEZqfeXEsiCdaRtqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cot2FEEeS2ULxvPkx57Gf6QPEvahHMGocqT5BgRLBL1ErEHVX2Kjxhfm5a96AUBBWpu8hYm9bL6QJaV9s4Yu9AQ",
  "key1": "26AyuE5WQVZyBWW5p6MThx26vRPpycjr9bGYh2A48gp1Xd7LF1oGBK96PKW9WtR6r4MJrJdsv2STK4xAvqvxZK72",
  "key2": "muv4SXAHfVf76jzYmDPACPSHdkhdjP8BFWjAydVWLrqyrN5iaJr8sa8AHztTCmQCXN7uGX11YqF3RN8yttjE63b",
  "key3": "3PGgGByFv9214wQFRrxk1uQAUwau6SHCeUsDPdiGvnAS7CES6UViLNzgQechLfPXajeH55ikF1LJrfUHwpdQiBP6",
  "key4": "2p1MsH5RTjK2AHH5ZqLcgLKr9H387SQFaeqLy9jJRWkiMnxUrFtmYhPvHjdgyjBnM2rxFdLxT6RT4sg9ZZFrRSdQ",
  "key5": "33oVY5chGsi1dLjnqzBd7pjLREQZ76UzZ71LQB6EBRwVZkY1xgnDRqyKhZ45QoZy2o4YyJ7Cz4cUfdXwhZL9Wyhd",
  "key6": "3FHDTqXTocKdEkYJpdGYZMW8KtjjrixQzapmXip8DTQqmaesXoQw7fBJub39Uo1V8RV6yGVo1nAQ65vJqzTqumUW",
  "key7": "5WQKA8rWHgVTdiiRo2KniBdZjE7Kzpq98uYWhFHXsoGcdrfRZXhLfbgQf5YZWK2G9ucqoA8iDvmXooiCmn8Q69EU",
  "key8": "9dPKTayKozSff9cd5bvW7NyK77Q5TFHjFQpGvBBqyThdaztjyeYvkmax25NtpwUJPF7TzNFuGQVW6i2xYwJXxMy",
  "key9": "4fR35BQF3wkGM1kQjxYbmt5M3679NweJfFhuLLeGphPA3LmgtnTwWYAm2jkkr6FjHLCxGpXMnBTvS717tcRZQSMX",
  "key10": "5YEboUzd6xbqvH2W8exLLHG9pFTk4tjBE3GhJ2xXxxbuCc94VExNfAV6RLFssQPCVNUH9u9Q8dTuqQK5Xqe89MAf",
  "key11": "3vhCvUxPKfJ7qMqqqUdbTnTm8bRDMU2bA7MBzdPc4SDR7G8RuJe9MEiwCrMx1YrLQtazqtv63a37YYhtfrNhthch",
  "key12": "61gmMrVVUjZ2e5YZ6YHCGLbVKGnmkpLJRFsvCKakA68xpc7ci2UCNAigbL7wFh6BuhuCmDhLjmjZuCSWD5qLARBH",
  "key13": "3FbonzZGoa2vtR2XaFQZzbm4DUQuVwPC5rGD3RugsSYykuKJGoMfWeX1xYdZ2HzFZ79kV6H9asqMh1aqhEs7z5Qx",
  "key14": "quVWnamJgFx2L66siWqtCPsr6vpLN2oztjDxiecQnqgmvu2BYb6zkMvFRkZcq1c1MQPsfcT4XRtBkrhJrz85g4o",
  "key15": "4uZL86FweawSAPV394UzRnazgWdKazsiUVsWjiWVCKcR7qi18pUyAcQ7jHLUwboELAN25N2TFUQw2JUmfDimVaXH",
  "key16": "WHgiPz5cvxjXRxJVe8GqJ82K7zaesgredjRxhfvvMcPFtawFwNDPRABRUcpq6v1QkZ1gqwewhXUSzhsTRReb1Vt",
  "key17": "3xxbQj2ZYhkDpXGenwe96o1PkfEDGMAWNA1KPxMdUbCc6GgxSJhwTbjtgVZEoSoUJvqcrNGzoRr29ChyzZyQ3Lu4",
  "key18": "4ymZRHsyF7LWtNBWkZKwrGtk2ULM7YtHn2dFka6ikdGLQQy8jFEaWNC25TYyZLWXUhUmXw5Efic5HyDQ9RjSEJj2",
  "key19": "4KvgguQZj8MirNYtQE9udmgKaBhjCsdxBvqrXpANniUqqsharY995Wn5qZg3oEPXm1EoX6NY8dNk3AMNivfMq1Bi",
  "key20": "52iE5ouyL3Re2t1sbubmDUFh3fMZsWHi289tchaC9VruFoEFuZTsrvyvSWcMevrzj1DhP5YLQpL8ZEKGq1bbJhSr",
  "key21": "XzmpSb4aeQunCyytNTWeBWUSJjWeTWb4BWDk76db1farLkn7M5RMDNPZjwUHt5TS6w1vK5EoBfH5NhtJopXzYDc",
  "key22": "5Ko7RaaMTfanBhWqmrgD5ro5Nyvhs7sHNqPAzHN9QhprrHEtC3WzeTiKUVQQuoEuyaCvKzXWQnMMSXxTcbyzzMty",
  "key23": "37k3oynAS4qbBhtGDezXAV75ZkafqWgmntfQwarYoTyc73NQMxogdg1UNV1RFd7EjK515E1GUZwnueLK5jPmTFJU",
  "key24": "2RJD9kFFJ8aESQxokR2xknELkPdhrKmpJooMEMJFx4X6kLpMCr1Gh5k2FGAqBWhse7dPFGkbHX1GWZdhajEcYpyc",
  "key25": "wefbyWeAfgqhF8famgCKq5ytTwtDtNMbNsUBkGshwyLRJmZ9y4Y9WU2QnPDoZYDVaS21fdcsvQSMPQMc2D1AXjf",
  "key26": "2NtHFgg2avWYDJYAAtBHb1BoAiUBxEDrkUc24hbTpF7mvnLeNe1VUCAA5tzuAntZHr5eTUE73DN9CzKwoM1bZrPG",
  "key27": "41prZhkygocUamp7aZ6K1LVdojosyKjuHVihTvQ2oMPzLgRaAx94u59xuTEJFrGUuFr13s46f5bT2aSQj5ZSZM8F"
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
