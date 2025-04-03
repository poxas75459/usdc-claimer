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
    "2S9KfjkYnSpzTxFEUtkY7oz4JsGspYRzfj1YsBHt8447gPc64kcbw4zA9ryj99rYTEFEX8ZiRjoCVtyYPpAkq5Cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WBiYmyAhd65mPe4F7kEeu5aW8mExJGZP8o7rZucro7oWtrbbQVPaivWhYRuu9y9N5iqntmScWDbFUQSKLQXJVGo",
  "key1": "2opF1tUcWTrbVtPRq4YkYwVDirnB6hoYsfp3di22SnqJq8d6TNhrsu6UPGy6XiFsQQFknQfwmzKCHCtkkf8vbttF",
  "key2": "q3AHyW1Ura4oa9VUkQNFjikQw3NXZvbwLyevzDN9CEFz8pWXjgwdgw4Pf455iesYDLYnqGmC6PjNhsTusMTR6od",
  "key3": "3DGx1hrvrHtgxkr3aYRMYTr183JA9pC6P8h2JGjS7647KUSQKiMFE9p7GNbrWcN6PjwmhSxNH6XgCw67JZd6t1S4",
  "key4": "2LAzrpAByCoUBuHR6CsjmQfE3qbG13TkzJxnziMxftvtExrpgwyeu8FmULsaPCTYqHCr2FqtoxMd1jfst7ni7aRY",
  "key5": "QjESiGRv2r91kWuBm5YeNVSufV4tsqFkGsynbmz6XvKxXNazRAJNEJMQWW8EgLBdCMnNZcguXWPaySQoYeQ2D3E",
  "key6": "2vXGvAi31W1k24rbfCuMEtmzqaNEHvdgEQo9WfHEcdp1stzjMasL1QxjP31ytqniDdDf9Bq4XJbCGKuWhCZmY4j9",
  "key7": "4z1fUZgNMga3wLfvDB6qpeatg8mXBoHJUv3GEzowM4JFuRd7QPzGzKDvfybkaBJthaqiwna3hmLhSfDFWnCxN4hH",
  "key8": "2WE2a4zoLBrR6QDVTrTb7xBtVSGnuscXTswaLPdFrF8b79SgDDvzcVWYFMFhxJexfitMYhhGcUM8XQUgWSs1DX3u",
  "key9": "5fAx1v7Mbvp8MdLQh3owsdWyULAPyrNhSdvWXu1V6yKQtmDnXe3FVJAvwEPB8PBPBBnJxLkpt2R5MX2pskL7hoqh",
  "key10": "2gS8Vgosi2VCadD8mMeCJTd7As8G7EuDCyRPv4AqS2rwApVJ9gMYDrorWfqW9eXmDuyM3ZsPo2DqBbqcZqGdcWe5",
  "key11": "5kymuPcwfaPpezZSwaK6dS6szjvtnGNUDr8QEabAGSG1nbtXrAeotdjzw4fqorVpSD8Upf5uXoN2e1pu8tmopcxq",
  "key12": "4EQ4X1B8FWbgzZ8LfsJXsT1btEWz1Ce7HMvUfUhdBUZGT8aGS2KxVAZZ5gxoKf72HjQxLohUMGUQdaxnGQGbd2UJ",
  "key13": "L9bYr7PskepnEDC3TNRj5HdzusZftbpLj8vcz23wGodsfR8MD8XEjZeeoMCxAmxwweZPsyg6ZcAEZWCWwG5StYn",
  "key14": "3dhjprtSGhYmznVzTTwAmSB9JFXRk1GLHUNYZpSvUGAcegtSJTMtChVGJwJZFW4r7MXUXDd8zmuJt1y6sV8vDbGi",
  "key15": "3ZoyN11tg8KuKes5TWrj81vR81XwcXbxSTenHpuy7i57QoZ12QgyQutMTrnpZXYMPB6CYBBHQYFsaDphnbmoMT1b",
  "key16": "3kq1VF45AcKaz52k9s4EcwRuyByh2AdiJbix2mhU91jKDZEuKKgLDy2FHsEbFLE4TrpUAu1EME9fE5YgFjZBsfaU",
  "key17": "L3XmveznVyfvNZ3nfy8ojLy22x2L6aCLqr5twX8bR5UztXjnNwQtkxxokbUkD7uJn2CTA53NaAMeVfrcwNDXMP8",
  "key18": "5Dpr2hsGo2MStsJ6zaZ99N4CNNLAPYDHbiqtfnbP233UiEoJF12ySowxLWvhvneFr7Mvs2fmAW9aAZKsD9nbSZAs",
  "key19": "27GNy3JVhHachutieZFBbrkhCCrGpfPTJrKuxPUdMBwrj7vqKvqLtYqyTUJu8VoZZVo7jECCkVwtonUBE4Nw7g6T",
  "key20": "iAtTXcTVa1HsJr4bitLY7ugVB1eAcocoQVwF5SzmgeexKGQqcvsSeGta3FsRxsUrHsp48ZP5mN7VfaoQttj9Dpx",
  "key21": "4sEY1T138BWSzHCCeaj1ZhCfsb4xZk2xMCaFTikNQkzKeR9BZ2cnnThR7stwdGfpQqNSBbgkAXGMp6D565yfqaf7",
  "key22": "5pSfSPnkDWoSJ4zLbeTkvsjtvExWqZU36pvQqAa3fLyHwaQi358rc7dfJrVXbLgrRtHhbvXKXTdeTnLeTNWdobz1",
  "key23": "y63P2uFPaQNjBjYd1UAQVYNqtpazRmQk6LBTDHPc5wwaK2pcNe6vKH6NphFroNasPAxGjSeP2W4LYNS596SJRFP",
  "key24": "TBm8KAhVV2jWvM272zknqAEqJKNQbsGmsz6H8iQfqKk7Wqt4SFZx53UU4No36Jh1oT26fAGKqCTqG8qm1QkhJEv",
  "key25": "5Y23NwYaJZ1VtQkBy7U9usnDB7HLYo8wN5EZUwYqzdhdVsNzQXcp9stBbotag9FHb6GDSMzLCLHyC1e3HfVmuW8M",
  "key26": "3dSCJQo7qXStPYZRPo6Jvf8zqQzkaWT3iZAjhXPTVzqD5Czt8HunKmbw4mVUAjhELxLKGswRLJgnNP2HgYwVqcEe",
  "key27": "5EYV4SKQaxdWDT88LiDKMn6x99kXwaxYJBNugqoc7WH9brr5SpRqo3ZgKgUi6YtMywo62R772JdGcZSvmCBtJraB",
  "key28": "5KATgNDtLcDypQTDtfbf8bX7vfGonFyJvhP6n4jY86yDpfeLdYCtQmWa1grW5YNDs7UBiH67pEyzTy3EDhNo1YRA"
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
