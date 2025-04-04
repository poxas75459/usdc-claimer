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
    "4XutXzWfhCUg8841auWHM71gasdDRtmBa3X7xunLsK5CtHQJCHb6bVJaVAg9tYYkSW15smzuhUZfTgfgbToBhtGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zEFBF1EJ3gFVMXA2ozca1qoVCZNEHxsyQzTQys3QTHjCLqo6y2szYH7V5vB1KVze4tuKCWohm1x2aSR4n4uUYVF",
  "key1": "4nWXTADvoZe91MtwjtPC1xHuvkBwdVYBsL6mXZP1mShbSzNvJs8WFCE5EyHWDtEWLEMuXdZTepLEXTZA24i3A7FH",
  "key2": "3LFTSCKt8kvCzH7T9w92CiVHLkcyWi5pgb5yKvxaM9VCX3dKaREHVy6gyhUucbFNPWsxzBzdLX9PDXcHtTTYiSWF",
  "key3": "31tNPqSTpuU9bkodUJ9g1aQfYdQMPUdGgNABapGPwJWyBekTXs6PtoU1vJc38HxU4FNVFc4vCpBbFMXsGqQ9XwcL",
  "key4": "xHgFzSuPpmgAeWsQA5ZMsp93kmJ8T8494VusH95NLmA2oykfkdktPRRzueu7Sy8Z5XrxW4oaR2KCLu4cgXZNetS",
  "key5": "hzLWfkLwmWsu4NbssUnnT9BrxCRHbEfHc7baoWPe6oX8j2DPoDaaei3Z2XzYkHApDpfTdyr2319TJ94wj3Zgqf9",
  "key6": "126LfvNJRg9FdYrwLptEpdLYurHVyZy8dB3bbpEkSjqqG6vWqmtZr4bxqTXiLvuLuQfYWQqPESGVhLjvWk4Kt4no",
  "key7": "w5eeRVqhJJakbza3QgSk1WQTds3gX3kt9TXfqzeE1t5sfLpDDPXm9any9DUfqwtE2MW2eSuXy6rfzJBwsNzSjR6",
  "key8": "2jmKeEzsCfp5DxCkXU7Zg8uQ1DKL6FXaE1bXmKDuwdhG1FVw7GFVbMbhEohGARckGQtd5F4pfW6Yi3taYGjUnfwh",
  "key9": "4S48GjZJhM85VCcALHAjkifXRNy7PvACvF76WTM6fv5C1oWAPzXUx3Df5rJ1rmkxw22sjkKHoEtDuEMepo2f2Lh4",
  "key10": "b48QipXK7KAov17wNYPYheH4GWorcZUv1AeHa3hdJVztJptS63pWs8S3C6KtzR7jiUxiF7tbjc7PVwYdJnzDxui",
  "key11": "UwnCWVBfESm286fVGkeS1zhvmJae7hyvsBz6VANAiz37CrEa7ZWSokGVCxHwXjn3ekkwAMCzMRKTkhF3meSYMQc",
  "key12": "3W8G913WfAKeUJnHWzW2gzyjiJDHRuEfV9hKJbsiBAFBLK1gEhXvv6nTFSTp6G47wexHUGd2C81LP8Nt1TNf2Qps",
  "key13": "3iZBhir84EDozfmHAi3gmTStqDn1V1yMs3sJ2pzwNfkhi9eidKqhai57dMsFGrsUJztYL1u3wAb3rGSs8KibDnVG",
  "key14": "5UzGUafUEs8zFZJj6uK4PR449HYHc7um421gkfd2RiZHZMT6rTVVbLoQ3G4yA3yz5aZfMimW8KMRJMQeVwfyf6Ye",
  "key15": "5MEosYA8kFw2ohpDWz6txifCe8q3viFY2EwrYs6wLmLqBdRBCsTLboFyc8TQZUaw9R5oPVcwxkJFPYULW2H3WN72",
  "key16": "39iVz1uHp8XvzeSrtZRW4F2rUPJsrPV8A9VvNWmeVr3PkzRAmt9q5QYBM2UoM8QC3Xn8uZFxoA5g7rvaVPREue2g",
  "key17": "3iPjA4vhJDotXe5qar7AvQXWYkwp7d8cREHPKDVNXGNTGHoo2E3WPVNH2TAnyKUEeJYSVmQUDRyN5cukKmyQUqUy",
  "key18": "gTgoTsVNm3TugUee2v4rbWieTuAhayHc9qZxERVhCqJLNTYUe5zVVXbkndmE5MYGsE9MsR8yaUqR7LLRH1RRXCR",
  "key19": "2u7NnfzBNLw1rci1TNAAEuJXLNCDHD38HQMTRtk8TDtxZfdiEjrnDHPBYQWNUuACLhwT6cq6PG31tdVCpMn3Ep7M",
  "key20": "5h4weRKiYnNdorESZhuzWY2WrTTuprnf52WzBxCV8THE69W2DcGiGG3KqHnPS1s12DCcYtQNMBr3BuQLoW7HrxQ9",
  "key21": "3oVada9jMBwZA6BGucTtu337VdADNAkaoss61UT7tW71ZMrBCbU7cqZbUYCF7Po237StPS5RRs9crJLzTYiXzYmz",
  "key22": "5PPbEawo9A3BtesFrkKA9Fh93oMvpgvjsz2ioA98xdHGS3Rtq8qdruPdPGN2idK9hWp1vvh2pnSCGA5U7A2aEn8E",
  "key23": "uAYaX72tNYWVNJtTsLQLb21qCCvGztrPjCZxRaZoHtUgWjmDfoZJvZBm3Jj3EK3aVUMnhvzh9axAuSZ8qyH9qyW",
  "key24": "39LqRxFc7Y6vgPxhwhopmrTLirBppZxhCbfRgWui1ozvXZndryQMP3cPYf9R32x5HQFnfW7uVVTzFX35cLy9rr49",
  "key25": "4LLJrngpDEtfU8K9V1iejoCCrwgZ6RzgmFohZGHPHaVXsctEEoD6h2bWXyU4AquavaQ8ecQdTtSswngZ4wqDuPBs",
  "key26": "bCAV2zCdsUm2mLdYhefqRVERCsN19sbrp4MH8R4qYmf8tEr6STK4ZPcp7t479R26F7pn78WDqadp44AdCVRbWfx",
  "key27": "3W7Wd8YdESNVyEGg5ifVxx6XRQaEAoWgkB5kFkJKJc1vzGC8UshBfZx46oFs5cceXB52imFmva4n7cQwh4yu47TZ",
  "key28": "66GgQTkXcHr5uNoLEoqwbhYheAUYaKZwLLB5Y8RQeUvq5486KjJXyBpW3TYQ7dNJb4J6YwZbmpEiA4aFpeiejGof",
  "key29": "2tUWJo8LcxDUucK8MKjifkcovteTtgLXH8M2Dgx8XAaQWPDobGkQFPUMxDfbFmsjkwEcPp1rREX9CewqHUWMFBvm",
  "key30": "2VCQQ44AeN8fTDESNTdp8J1FShb2Y6XHUf6Y6nQn8BXK68Gwmud7rYorv2HZydH7Gx3EN4K1W3F1qQyqYGBBSdZW",
  "key31": "4YBuxhc8ViticQznykZkTpzqE4CppDtohW6xzoxctzwFchyQa5L93mYKFEg9ZGJ46e3aApQiGRiKgKdJdXn6WdyR",
  "key32": "nYKqRF6LCfdCEePAx3UZVbsu5GeitQ1WZXk27UWm3PvcLsvEKMsQWSXyoZBsiGShoyYwuyW5VzopQz7FJTcRQXx",
  "key33": "3AkLGZCxxhvjNtrLVPNQfD2y4Yqv2TCUWrFeQrS3uyUkJgKtJLWdGM7Av2VgsibUxBkw1J6sXGdAvoaNagfk3QAv",
  "key34": "3EZBHJSDRZfFgSKnyevRJrE9caiqr8BrJsDctbYyQDxXFV7VyLf7BvZPTPkqRgwVwMsM2UDdBayQ3V8oE57UdWEV"
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
