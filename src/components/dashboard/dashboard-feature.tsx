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
    "R6WgCE7z4ZNTJyPFpkqgqreUzzv4BdGzQymiRr4Lj737hv6xvCEggrNF9mc6he2amvHbcARZiCfrExG53vYVZKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ktMntobzSydGJjUr15JBMm447oj9VTboD3Kpr2KqLsQ2Tfw9hQVzAm2DJEdDkRsFUVpfEtXtQbBxkBfaqyy6Zkq",
  "key1": "2hSB5Wy3PtyvAaRto8cR6RBFUrSNjwtZwh4mrMtnUnKrvGGkaKoreCa1amMQqZFZvEqm6DFrMkdhuuw6ZwdQhJr4",
  "key2": "25uTVbcFsMNh9Q3rYadPHYNHHotHwpCf38YNoxnXWT2ritFdgdW2aK3fesrfWbGt7V337qGeu2hXhScTj5ufRRMF",
  "key3": "5ZUsac6HEyK2idAEwqd6gXQ1vXMRK2HmLfkhJeBQNfgHkHQGYhpFRdXEC771oZ1Hi5PM7br9irYDo1fUBVunUvkN",
  "key4": "5swSPVK5d73oPA1XwzwTj2Bh4m383TtZLGyz783RkSSB67qSBmkDTi1rJWKANiyu97FVmWHGrMiZ977vhjFo1EP9",
  "key5": "4qEqzh2sLZcFh6q5pcGmDN7wGkhBougZKrtSLWCCEgXSqVkPG6ANBJdhbmCWU8kn6C7HDdeY3pRvkjk1dTkqC6w6",
  "key6": "4AtsFSuiNdtKzzQ9vb337mzhBhffuVvx3t8j844h8RppzMS8JTPjzfXvu9wDez5nNtmKpjZwjCdYUkNF1Rz4JR9j",
  "key7": "2QL4y2EBJmkrLSWcFhZ9A8zQh8NmvVR2A2nwGxL3AXKLaRd1sJQCZujnf4eo5xLYNsGM7wGC73rGaz2wfaB1DA45",
  "key8": "4rWAsbXfF7ajande8coZwCA1K4okapuJ3intEFHjssjzn3gAxuCrn77ZMx9MKyDqsyrcsf6rEJHk9Lyjww9zQHti",
  "key9": "2CAmpTM6mV8KQrpQxvDfQ8CYVLfS3r5XtGTvc3F2CBPzGoVKsEqK2Yofs9jmqjcCpw89NZVWpef5B9jEU7ckmCjV",
  "key10": "N67QnHaadUHNc8Ws3Z4KzwEVAVzsSdNWRedbeepAjoB2SsB5maPWi5iXw8Q4SDZFZJ2CFf9zqVdeYrJs75nxZKo",
  "key11": "5Vk7x2AKqRinEC4h7oLSeq2uZ9f8hDxm5WAB6sNmTaVSAkff3jFecnZVvBdaFbmw4MrPE15QgYQLqXkG7qpXS3tF",
  "key12": "4AfdqQDq97S2n5B3ZxFWVSw6nPKrGZVcssxjrmBFvMu1mDrdqsc744nnJrUXkRN2XQmBpXLHwJ7y77mPqgzupBpa",
  "key13": "2DU3HYrrV2NVAmeQMSHmtii1N5ySyzqVak9B9xjhsg3H9cstBV7essHvrbi2oJAe4r8RJcmnMm6U6JCHSEotkX3U",
  "key14": "2kPj8SA2jEQUF2NciSYBkknA4utZ2xxo8m89uashfG1HbQ4kJSEp6agbC75ce32gtknirsuYawWH8Npy8xQtpt6J",
  "key15": "tmQpq8wo9Vej8v3V5e2tW94b2gZop2qW9YmrzKx4e3fEEz7XLRvyFw8ZS66Vki83Enk26wuimXZA2tnCTaWGPGz",
  "key16": "3KGmLjxQ37HrbB7AnRSbYcfhm1pFfXNizfGRfHcpnXkkrCRGAre2ifW6FJyYyCPrXaeq5zsrhJN9WyCNP9Be6EHn",
  "key17": "3CTez2dqnEHrkuFM4vNDtEgeuE3NqVALnW43Y3osAoRFfpCvZ4GxSHA2YDn6LQ6aemyCDfeQvHZAbTkUyMwWAsE4",
  "key18": "RmPKgkwWc4AvBpjr8dTfLXE5TaWnnAz5b4zJh3RDBJcJ7Z9xXmHznhgrqR91CDoEZ7RGqaKvV7jkhdHZHYt3H2p",
  "key19": "LVQJHVUr3RgYgfUhoSBqF7xBeaUswjrgEpXZMYA3sn99iPftcBRuk787W2Y9aSchXyi4PZ2zUFCxxdoUbc2QFvk",
  "key20": "62gPwdMkWF7ZyQBfqcoJKw9rvRsZDbV1j6EeLvyNjjptGuN3adAwYFqH5wmMXanauhttoQpSfnRBLYjcS4Tcu3Ad",
  "key21": "2N4WrkMCehW2BdKR98gZUCeRMZGihutyr9Vv1dSHtrmYczfQYiWW9jLsEpDTgif4PnsqDrpNzXNF8HCcxBLb915Y",
  "key22": "2rA1iNeZ9iozEcT38RVtiWRQscJvziexxi4FuLZpCTJNmAdsM6wztJdNnhzaSA22Bc4JP5PhbM7betZsZgJHXDKd",
  "key23": "2MfjQ2GxCqET3AhP3N82P4WrgD2oULLUEsMsymJGDkr4dRWDJjYW9d4Hm9DujQUWuyz7p5yKx5wGAE4kTciVfE9Y",
  "key24": "5iqnbdMiRw4tB3T8pA4ZiddS4pJ4cZmVpnTSoiJAz5VGQu2RuQtjEmRSUz6i9NE2VQdzLkxvP6Qca82FRP4HW2X",
  "key25": "4vCu86grN8Eg6FH4PRyX68NHwg18iqPBwNnWs2LD9QvPaBJbXGJYKpoRLGUCer6PFAm715tv3upRSsDK3HdoKZKD",
  "key26": "61Ha3uuDVac4E2NJ8EinmvKB1P9EsjgJmp7fkpSU9YXKoQzcHACcAB1zrwBjKAf8FChQc3HW36hcsBSLvc6aKJsT",
  "key27": "LGeuL2xLP649WszHkMge7gLrY3MKkakLgr8rqfrpW95o6LEqj2cyeQzGNKDBVkFQfZZQEYFxW4AXjr9zxTqVaNN",
  "key28": "2iv7NUfp5ACSnTQefhBqPu2koeaEYr4umtADP4rtumSB8sexetKG1DhWbFWxm98XtHHcG1x1yw3dxWVMJyAvqy6R",
  "key29": "5BXteAHzpr5krSZk4FnEWVDQ9bLZRFjYofa6vfUj63GpapXGT8FoJrSNveHbueFA2BcmSc887j4FRcJuBipeQB9U",
  "key30": "4uZ7wFyip9MKxW3Ss36z9Fj16bzXZQe266A2oczAUZRmPSjAw1WSpc5jGTjkKMD16XTYfQ3mcbQ3TGgG13XtwTYH",
  "key31": "5pYJiKBpfRhWXWuY3U6aLqxKGzE1dpjL5Vs7Hd2D8JcKrJGgB4ST71NKNiZkdEMB7ELZs7FUopKSg6tC35sA1Pd7"
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
