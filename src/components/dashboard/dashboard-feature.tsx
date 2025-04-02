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
    "58J1xRK3dfoEukwqNxQgTByvoQmtTe5JwrUrvhJEVSsfnRanLf5ZGF3LSMiFBszobv1Ye68mdAHPvsemxk3on7Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeNzsPpgAzuE7QrmqEsjtXTtW8s8rTd7gWvHp6rNbVYLfETJ7zY84Whb1APi3ERs3tp3KrvYBYX6pBrdRiUQ3Gc",
  "key1": "3AAfLE8esgjiwYxfQz3fJawxWM3CgKXsZzbApJe2SuQVjkeEhPDJTT1TezDckK1yZDLm6pdNkzwBAi2R83hJ1CVN",
  "key2": "2ZeC1698yHUfCg1CWBVhU3uL5yBXPS1W4h3kfRhWgaVXTXSstnZ4vroyVK93vKtdpiUjcuUDZc4vbhDvZzkcSgxz",
  "key3": "5cDRTLwzjRytADfZza45hKTv88iVEfUhyjXjTGEyGqFyuVkKWfrZpD5Bd3B7UBjM4rd794JPBG1uqTAdwnQaScQX",
  "key4": "CzNm2bwgic3VHdcwWLEdvh7mRX83CgN1x4S5wkY1cQJFzwhyJ7eYSWfzmCecHiMsn6UKzHbGbtWbkXuL7rr94xT",
  "key5": "59oKoSzZC2X5wbEy5shEF5ZQ6k6J7pYjyJE4GsBqSmFLW7sq6xL8p9TrhwEoH9tjr64Lit1spzt8moCEj6q5qXvy",
  "key6": "3r9hriaeh6HR8z7qNhUVwXN9zhFerozr2S1zSeFZ1iVUKptFkA4kGrASjDXjnge4WaDzAa2NLRbBi4Ngp2KRMJPf",
  "key7": "38g3bmY4zM8g2uijVKpKg2qyS8m3HVRm6n8pkjVjc4iQuw5GaRHK3eG353EEQv8YYqsn3HHAHdnThskpgvyaQXt2",
  "key8": "5P1H536yZ6ud3A9dLqMdVkBoC25wuKiVaKV8xm1HA2P2B4epi5Af4fHB7bwXXzii8LurN7izsGPVsjtZAas4EGuY",
  "key9": "5nRdZWvZaxfWh59FcdiYuEJUoaBm2oCZq8ZznMxNW6e8QVa51WfY6H9jn34NUA4NdsRWJMawrhLaUe2sXu97YoZ8",
  "key10": "24ifrYst5veT9jW4s84otN7FaYdiVostxZbyrmuYtzUH5fBRGMbs96bVmA675FegX24xNqXa9JMwAwfTDnxviUGn",
  "key11": "2SoNBz62v3KePZyqq8GveoyTA2XDUkGPH6iBpkoabEVYhr9HeNSCAwbUducx5W1Bv85BpEd96Re2S2ipY2oNrmCY",
  "key12": "2B3eeEgKKYoZ94jfUmpzWPPGC7kzZfqEgCB22Gu9ddapxfrBY6HDYTS6kRstvo7CxzSrigfQJjXArGM7mmFyi3vz",
  "key13": "3xiBTM1MA6YHsVKWybJAijegXycDNGWEhu765f1PhB9CvSENMEQhCsznQeN4Zde4CL8AUzrojGdHnLtpuEubrvyg",
  "key14": "3RwT31Tetw8DPtwsykfn8ctJaQN276g2zQEAvXwXjmJrzyaD7QKamFMQ4hr2tFz6jTuHUr5cNJTgSLv86u1j6oam",
  "key15": "5LdjhAwQxY3fU9Z16GNeeF57fxZ4dd8e6kdsL61hRjNhxhULGGbMWWREhBX65WtKEKsJXtqgTFQkwSeWGcz73Urh",
  "key16": "3Hm6yFArrEtWgpteB9qqWKFSG5z43qgveGQVtSNBToM2QJsRHrFjjbmf1amjHq75drTkkebUxZcNFw5TGRZdqx3S",
  "key17": "2fqaQkhg45PUB47AxK62u5eQbccv3WE1guadQH3yb7yChPrCPDCx2nNm495Q9tg9vGtbLzMtQHjxLf6jdvh8wLKR",
  "key18": "5YftDL5TyTiQXK4yPQwVYsECG68aZpLAmDyUEHmfTmeEdVHiztmH1m3FrviJLFJSUCpVHE2dBwjGXss5oRcFYWgp",
  "key19": "5VtN5QGvW3iAmxu3hX8gnVYmNGLUcKgRjHD7EU8ecXKQcpnaFNziCV6S9JCU2henXWPz4SNi1Z1DfrHVm9wfkNFP",
  "key20": "3bejU7JWknp71MzAShdpRrqj7XqxjqRbKqGQ5QPvn6vgYPSHvFXkqoajP2fm5facEjjH1vCLX6Fe1xvTF9w2pKaQ",
  "key21": "3hPLddiDXgY7ZknwCw2frGXey4tmLqQs3QgQQ8drJshyn3dN1rhQ3UgoroyqoiDyY8eup6UuA11KQpff2UhLpaGx",
  "key22": "45ob4Jji1ZYks5fbY5V5jRbZtVEza9qGkjGRRuXTVwgjVTgBZg8HSAh772GAU6q9H42gmxwFrvwY9aoHhVQYc3B5",
  "key23": "4Fzbd4T5dbawNxNehjUiiGZqtVphsFndif54up7sksWQmKetEyMKo8wiiF4GoNCa3sX3atFteqeRQczjBUkmQ2hb",
  "key24": "3hkzZzyEgxgh4RB7NSpkBLNsMdQpqDXperXuYvEf3meAs3Nq4d3w1YhGJyg9kkjakSQgXT1nzV7jsj5dsQo7oevY",
  "key25": "5r4NuoqjSLmRkasPE38mCcVsyPdEbWc56XJfnfYY5qWfRiFogWFtbzwCLEr2wDMtLbh4VvjUxA7Q49PsTzefxnPo",
  "key26": "3BTRND5rCqKF1MfNBkpc6woB5n4D7sjvR1qvMZfkBnHmDB3U2dfYPKFrZfNJKb823rBiRsK9eECKkBtz2XmRNkHP",
  "key27": "65NFxF7sJKtcxuJUiM4WxGp57YcKiCxCoMNGZPs69LKwV1eViDa69DDrYEXFrffVLMWtnyo5mhYt79viPcvi2yph",
  "key28": "591jpT3Q3DLhbrjW3W4rB2PAAyEsnGei1h22qugyBJSo94rNfaJGFn3vN4CMhCjcGsFLfz5DeCUQ3hdCdjd7cvnM",
  "key29": "iVZQwGSwufJbXvUgy59rx8QheTr4g2DjC9YyH7rQ8QyUWvTXxnHZgGUeqH4nSqitkV7SJNmziCZ4WkQNSruUAep",
  "key30": "3p9Sn3sMm6LLZ9PBWnxVc7R6fmsCebugLYM66JTHNSQzndiyHF4DbVb2sA8UEETwAer9x2Kuoub3kR3KQNAaxMv",
  "key31": "58HXgkdn5AwkyDwRuQXzNZpksg8Vt2pTh25bdsziYn5yu6a2AqvcMsDHrAMPZfz22GmBKkkUKqyTcP4HtAiU8Ujb",
  "key32": "2XG7Ygxi4cvbFgbiWgTEhd7BSVRYcco72CkJ6r9oy3qGh9w64MkNVwM2fTXQBKX74YLCwLQKwo4AUyNynZDxWV6r",
  "key33": "52eFYpFuwbyc4hdqfA2VgwSSytGALasPxwwsKNYwxt599Ydy72kJWjqGPNXEuPax4ojCkyFZ1YTCY2Kxcdm4GvKd",
  "key34": "2w5d9M8v6Me2kXqHjatfyg3s1HWJS9Gy4M4wjzCUE6jfjE3pEKR9A5dQnVMeYpikqwo3Kw2zT1sapwPnDaeojPQw",
  "key35": "5czjkQfSL7zmgiKrXTpH3d9k1NLZF9zy9iUpJUFm45KVguggRm3PstnuLno8BUh76okhuQVf1HG1jLWPB7KhQXy",
  "key36": "hdw6fuR8tonubB7APsXVyV2QAEixhmEMnpMBfkxKy5aZRqqWYTFJhccvhDhcRDLzBi21awEcYVgqeQRMBBda2GN",
  "key37": "5SPTvpdshhCyHKDX5yUTPMHoTwHHtrwMukubmatvsMJeicXqAe759QY4UaLzwXxzHDbup3uN81ALZfS9KXx1gNdT",
  "key38": "5Umndm5PZtKjrKTi397TiDzjzPkLgKvP1SpnogCKJawXRvW6j6GqyAuugGvWVZG9xdYWberWzK3HSaca2aUbL1aR",
  "key39": "3TF1tEp31wnNjVm2p8kby5ahwwUdgkRt8zvfdB8GHpq9zjeiXvefUz4U4PdWTEsBDreojc5a5iGXc3q93bFJDG5",
  "key40": "5rQaPprBMirkra3y7RV2MjPba712cZmMCCadZ4j2VMqcmktU8wzWyhZHUMVNiMn1ZAXHkMtUx6FuHfMdviEbWJAo",
  "key41": "66mg81Rfm4fRQfY86nP4yrZvPjgiNsE5zwDekHZfHNTqxyFVVDCfr7gpRcyBQipezLzb29TuFCNasMhYskQ6KTAj",
  "key42": "2cm8XFvxNNRiRH1isvxRN7X13GucBsjRSC43LdxTVNtRAuWyu4LM9LKrtbjg3xu4fAanH2ZpzvSFT9LP7evGoFLb",
  "key43": "4Lyv718uGkgEJECfYeY1ndM257uKisGPKDZ3nPaDpZ7c9uSsVhFA3rShvWhMDPB8ig1xUcQiuQvc4ZQ7KY8MZwny",
  "key44": "4bRXWV1EhDTisZLBfTP5aRjR6fmP9EVxH3sKxGb3Fdddrsy3zW4d2LJa5dLNuh8jXFPcbbY857kaTiyvpVktk4eb",
  "key45": "VPjQkfSawddUZv2mfqsBBFNrR7vDjX7m1F9HBiysCvNFBkiJdZuAF6H6xoDQLhvdmNmnvpuZMGRD7w2HRsySgnN"
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
