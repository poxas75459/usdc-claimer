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
    "5k3NwDMA8Kit2yQ8rxCfBgZZWjEYJtpvDd31qTmer21RsR6f2zz2dbHK7T3n1MDNesK5ifvpp1mkrXgrxSk6hnmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M59JqumvpAgz45u9AEi5md9dbbhAnRafoEXZMy85Fkth2nNNjVK3TjZfwp2B9wr23ypZX6y7wnaeNd8iNLZxqEn",
  "key1": "Mv1NxFyUbRLhpfBqBgRrL1Tg9HL1FSNPrzgUY8vi3gs37jVVvPd3Jy2coKvtUJ71xKg41gKk8USVGEn256P5diG",
  "key2": "5boo1BDEG3ggGrm88iJHSpPFn9wZURRegQE6wBRYj79wSzRrUvmiAmWyNWfAicCEtF79qXxWGyEVLp5otqgmrcSq",
  "key3": "PHpsJgYmFZueTyf9RtGzxyRxBrdp8AwPsjHEwMeg74tJSN9sLnFyzfdergtRYpW6JYqHyztaM75cdw4dkWBZxBW",
  "key4": "2mmAkFudhZQZWU5azHian8ZYfdCLZr2nr1yLBjSYPDHtJSfd8hrN3g6WDGoJr2YWMHRiCKoC1rma2RMMQ65DCTj5",
  "key5": "4JbPuvBL9ngEXv6B6jZdMD6C7UqC3jv6TQJZGnwbCXApF1kqUdR1jQ5Tk7cSHrBdUKf7T3cek5xHgkXHoiZeG1Lo",
  "key6": "yCSbJk3CGc4jizKAxb528UskicWV8W1mA9pSxB19jgBdgU4WJzUskCHrDwt2bMoN4iVBF7hj3cTGu2vxYBYWySB",
  "key7": "2yXFAyAoxvTnJES6MjhvFtxkrp5LmYySXuZpdrARRFp9y3Top9q624ccugjQ5peGWxhVSJpmej6JaUFDgDPnd98T",
  "key8": "8RUrXBkWq58iUt6shvZGWzbUyy8K542VfzQ6oD1R6WGnXkimzj65ipSuyr545Yy9gMfckGHjpv4EwZvsCaQbpbf",
  "key9": "5SCWSKxAahnuPY2E6RgohWWzRak6tQ54jXBDbQhnZHPDmrMrw6Kx4orXu9fiAqfSiKNWE2NfPi2t6wnoDCL8WKfZ",
  "key10": "3aZbPDiqN5Kp3Tg5YPdTMniYjZbMNVXfZWRhCgkWH34ANZkdasHoiUNJcacE2ZtSU45ig8ouLoJQysCCQ2rjmY9j",
  "key11": "4RZt3E2sx22RSwegwAcL3CKxAKLvseCCDrQCAcKnTAarkB5uDxAA2V1QgLbdjuwAsirnq6Pk7jmQVeRVcRiWqBPN",
  "key12": "3LTu6HHQm176NkfS75HX7FU5y7R7wBgCdpoT7Xe4ZuPnLAkXDcdbw7KsvgKfw9k6ENfangUQLPV1K76W51C8gDHS",
  "key13": "5FjdALePLcLjCXP64mc9DtyzkXeoUmR93yCXwCvaYzXyuS4iQAHSuWM2eEpRtAXre71DHW8QpLpS5zBBLNFDSVes",
  "key14": "5sm5AK5SEM87KNvom9pTXYeYznZocGHc4HuNN4xzxJFt3EgGU5PFfTyY4AUgofPvBdXNXB7j53KkoxiJPxZtS5i4",
  "key15": "33abvDSqQuXsjzfi8oMnzVzEYSpwpbWtkMQ55MVZXoA2pNLAzJUxTFQaBVRH17mfgHuuN1T9zufVDkTuAUDCE5FW",
  "key16": "5RsFov1mzkT7HQeZScbHyoq9jFRMCJEaQvp4awFcVvrTAhL1EZXron8ANguLWGk9D95nycSPhvHgEewYczYS7BM9",
  "key17": "5dnYqutYJoYNw3pLXLRirMKtccEKUtNT9T5QKb5qu9t5tmQbQJa4MDWxMCiVVknHfuD9PGBPUkqWZMtNz9XDqakq",
  "key18": "W9tCGZDmBpurAV8hWApgrjWjDfy5qHuBw9trNCZr1ejHXgHkEDzsMzuHBWBmRXqdXtqRapQHcYpjdG8PnrBuy14",
  "key19": "53vviXcSF818HUrvWV5utLCeGaqZr1g57zcNxememJphE1T2ESg8sAxRGwyNsvYerYEwbKQNnYYXCK2TM4bJPsTz",
  "key20": "4zD7B9VzHskmwD5qoUBV5ueCumqHgjRFthRvss1Rqy9qYjvpEjhZs8RiiF5b1VKTK1dWSuEH7xKPhQqpDQGC7b49",
  "key21": "3PUHn73GNL3tMSwrR4BYVtMcjyVXdEbqiGkBKuWuw1kmPzMFJN7MhRnhYFaKrhvWknXKiTUXRzpgB1vTgSZkS95E",
  "key22": "5cjF2dGPUf5dC5G4gA5Kr2H1ax5ToXYqAYUnfLiZ2dxfTa8Agqf6Atf98A9zYptFyHKi2aY5DFB8RKzRS2o45twj",
  "key23": "4z942bxhXxX1X1KvJgk6EYJxTSfxowCaXMnVMrGgx7Drwo5JACV1rrp21UZWN88Szbi3wSGyDkxqLzP3rYvQ29eu",
  "key24": "4DZic8LmXudSDgwny9RYJ8sX3G7vzgqxg4yAeaMyW6yWit54nZ3Ki3BHfxgVoTLdf1X32PacCvp374XuMazNZfG6",
  "key25": "4XGnkJvAfwRQnKoKSjTCFTxMzj4FMmv16ie8LrGA2xN2gSDLcJMKdvUzdmEQCZ1XJj3ssqXg55swazWVMNZTmFHF",
  "key26": "4LuSo1NL3Jx4tgqnXuZ7rY4qAQ2iih7jJxxszBVp8zU9cAuPgBXfYPXzh1eF7CZchqCqrFwvCMU5csKBuB8xZAg7"
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
