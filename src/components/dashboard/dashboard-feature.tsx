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
    "4QC3DpMEvWTfVCkQmQ2FsoS6xH5LWTBfWn5B1y8Tg3sjw9MGXt5B4nqoqquVxhq8zeXwKRSfZw65aLz6GuW9LVC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdsQFGWSqEPVjmYCi4kwyS3yr7fe3ZRDoVGaqPRMzcVANogu7opHdbZXn25ZnkqcxwpxUjykofGh2khBzrUK9na",
  "key1": "2a6dnbZ7Hh9ei5e7zZLJeqBd3UBpErHs1ZaBe4kzjicFd8eWEEXYYaAfNjSbfhtHxeUd5SoGinfDBCZQ4LSuQCKe",
  "key2": "2FTWG3qzezUeoQvo9VPkT1oijhNVRSZUWNbcv3xi637hUceyXe3qDUekgtpUWBiJUVc3hLUAhwYECKeVvVsujPUV",
  "key3": "4o6CXLceh88p8j2sN6unUSWkN4mraUMAStA9XC7dXs3b146zsEpUiZKtJnvd8QvTeUrjf4drHcrNuCXbxABKY2S8",
  "key4": "3CznsK7G1b4qdSbws4zPTSUoriZGnPFQ7HGpZeCVUyuoTradD624Lm3qnpbMH7bRadvfto5AgRiJ5e5mwSb3ssix",
  "key5": "h2DWnxeKV181hQXkUn23w31rEmScdGuekyj2z942tt1ziXRcYRoEciRC2VZKLaSXtjqsHE5JpSWzYVdZC1hMMYz",
  "key6": "3PxNHRw63T34YiUdnJVw3opfQpDTitbFS7FptkiiQTtsvgJDALQFL1EDKED2XM4faxauVN9uob8gJw5ZnrhNRPpo",
  "key7": "14rP6mMn6N42udScF712t52iUnVjANLzD7whhkJVYgj5w3jYRkCTsRUJfsWcHk7J9Rzaa8KzZ1QJ6QgybsDZ8Rd",
  "key8": "3p93rK5fWRte2br44gWsfKjMdQH2e8mErjHX2szgCjkqfPEUKwB3tHFeCvHx9j3W8JkRHW7MZSreKAPQzEeFLBSQ",
  "key9": "qyt5hRmD2ca3cpUs2ReAZz933LRNCJw878f1Y522X3jSx1hATE5iAQcgPGCoVYVyvtuJfzPYYDnX2rkmmXw9AQM",
  "key10": "QoKNuL9LyEhm2oYuQU1Domx9LqVZ7eBdJkeo7WBxJepyXfgAJg4zLbYoNFKtB4CM7yaSxVS2LmJiuEPT2pGcUq8",
  "key11": "2SW8CbP1T2Ni4MUsP58TmpZF23xKqbd8biYeJdPMLyPHB1WpAwQrjhpsD62LkKeZzXLyDTgfDgkTTKXBQhsYSDUc",
  "key12": "4JmAUNxowGwQDTcqNyDdQBAUx9NL4g2DgFbis1tB2hfdJVDL22M5H6VHM5rWXx1FoHbVgvY8e8ZowR2DzDaeMEQR",
  "key13": "4fFwDs1xcQfD9DumenqR3RdQDfw51tL3UAomPaH2QmF7QrjVJFYcV4CayUzer62mkwPNaw2uzyuLHtizX5Jb6WVY",
  "key14": "5fzFjTLWBA2Fu2coPK3aiDZxyHLioTTJw8hqQGhDd3HoT49s52c1xuGpbyPsaL7uoXHgcYGThweh8BV5KQDPgGei",
  "key15": "WWvW2Ln5ni5Y5Kf6rQJZJ9dwxqCRzTt1sUZ66kRdCP4gvr8GPPRCxQLBYJKJYoLEZr7ZbRAE7DupSfnT6CzxqpR",
  "key16": "3w5mxtPTwbHEox3HyMGufnGUVzGd1UYWzQ4WgJNiM9RwPBFRFApmnEUrEbgcvzoktKGdFqHvJjTyX1o5vcWYDZSo",
  "key17": "5QdG7MX9BkimTVAV5eWQkDbtTAgdpxrVBYDaVJridGxiiQ5zqRs8mbwnvwddwydm7MGMjRx7h1VABWkUaJMtiXrM",
  "key18": "652ELayo1ki9YXC8NpLwFQL3eCrp2xamLct6MZJXhk7JggWphiH6EwxKX1D7YEWNXGik2AXe1v9tLgrUnVv3inW",
  "key19": "2YJziCUHfgsTecL6AhfCXDkfk63smP6KYodqF5rw8bnNqHQ5omKKnMCT8daKtHE61PpWkQH99SFHYnPYKH7uLgXy",
  "key20": "338KEAmNJLQpE1q9MzDNzMrCY94jicyR4W19iCPdcXzEMqUYYjSFurkpi8c8AJd9KAqLtcXdShsGg35UyTTpt4eb",
  "key21": "2veJGmCj68xCzoGQkcsZGzAMAS1ozaymSBv5qcWKVg8aWfKGpjJQFF2EZSMFdX8ijhLXd4aKzJdCxybWM5vZPvNS",
  "key22": "2p9wVE8obtUUtHp58eXYnK1sPMGXVSe75dxVNgXgnps6jRnGyhJbH6Z3VEfLvtVcq46b3efdTokTuf25jeuqH19s",
  "key23": "2mX9oo82Pzgsjs9niQTWCcxwPM2ejtppuPTXBQvpTv7Ft6jQLRnAju9dotm38Twzpscj1ojVCHgqzBnUVQgBnLuR",
  "key24": "4hroB1sMdsUxfYtbi6AyY7595i8zfpkW7pqSV4GT7bf9rrX2gh3fHLPLZLhzgo9GXGgA2PZNkGdEbFGdaMrfRF63",
  "key25": "UuW3S4HV6yt2ecERw6M5wo33n9SVB2fFUKvziKdR1HeBmTevYBVhBY74Wuz1HzBra6PSotTQokf83f3bJbp5JEz",
  "key26": "pMfK3wBjzqGff3tWuBq3Vago6yyXZqJRdBGqXib3QcMmx3fHjKXTzVbHkwAV4F9aPouSQvx3JT8eByzNaSDAJP4"
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
