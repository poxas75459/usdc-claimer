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
    "3kwt57U4u96Xv51LzaN9dA2afYtDpPnuZLqDmavvuVeJhyraoTtytPswYYrqCP2Dm31tPbSc4FsowJm4qqz4j8jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nepnepjsxLtY82WWNt2ks9gfEYKg6W8dKmYmYrMDxToMvX1qKWWHqvfcL68TYs8Z1BXQUSbgForcBr1SzZfXCv",
  "key1": "2Xpx178VqrMmyUsP5oQ4GpWoGHnjxsfmeLDNHW3dira9WLpWxUG8UXT8nRUSXrNbjSkPXwCdkCb6JXJasEt4ocrN",
  "key2": "53E8nv9hBXi8ub6ySPhhcChRQpY1JHRiZS6t2wXycp5xoWvepeenVq9jkpLcBS4JoSt4ey3ZMScrEP1ZHp7YfEnA",
  "key3": "2m5bwtCqqWnb9ZwKb8jZhDSLpnVHZt5sbhYtDtYgNZquZVCbuk7HjxF5CKEqnKWtANYJ8tNnsohn3qeWXnwNkrsL",
  "key4": "KbtzDA5VRAqWGqVkDcUK2fkHU1X2ZzcVF4e78XxhnFkA8mf21WtLYVZicQWMkiHXnJ4EMG17cVj1wD68TrHFqJt",
  "key5": "2GAJmMzpzds459JhiMzkbYx6Kf8FaPq2JcBiFqrThhWkVbpitV7dcAzf4pivMHy8HBkBQAEacSitck8tbWq4TjuN",
  "key6": "62CcGjktNt2rSvNmhrTGLRCHasBrRA2CqiFiwcmAeEpEs7HGfGb9SDkZMNhA1WtxGcNUGywSR9kbDQVj42qjcCxJ",
  "key7": "33qMYNSakeBxsBh8Py58YHseXndbB1omgi8KpxazYvyrGcLfUMS8RixPjp72xCWpwGqzDv9PvcQapVv5N69XwWvK",
  "key8": "3vxWWUR9PtTXuDCqcRdwk6BkGEn4awGDoQXagoHT1vui1nftFgVLghQ81TwiSFDgBiJj3eXkBrtjw6H9VqfEF44o",
  "key9": "ewG5EPyT1EY988N5x2qQ76SsFvr7r72r4h7N5PLYsQEGJ7JAknSxTD7mqBZTRmDQGcXbQNdJfcugzTp5zVFtqkq",
  "key10": "4tGym8pZcXyHtTSV8TZ4yGAUexEZGw2Yo1cS9nmYizw9s6Ep9uatyjpv4sWFmchW4Y3NfXMfJaU5HifdzJCToAqW",
  "key11": "2cJxfmYJUGaMRue55AxDNCvfBjRjXVPjMVF7XQ5Lcnnb3ij4XP8DtaurBdfwPWvurTfLv97MeH7su9fukaU1t8Uw",
  "key12": "55x8Bg32y1ReMDkGN3bSiKPafcsL4JGUXddWkPUKDQkBsHPFtfN7UegFYBAymh4oCrDkqcebFMRRGE5EkhoxX7zN",
  "key13": "2eMDc3fJKuKRo3VPAL2NAoAqzueGLKno5F9sCqHzFAkSNiWM334iJRvtZ3Hss1MSYsSFfwPjepHv9taML69EtuSe",
  "key14": "2AwLWFYGiyxKo98jwYo8A2kBa16z9esbjbcu4qGBbnNguLRjD7GxBaEiJ5jLRpgK9H2F2THvy2eh6vTyvT7cNFCV",
  "key15": "yJg5gtomKxGU7rWWwzpYA8Qt2vS2h62a754iQGrgs5HdAXUwjBWPQWUTyDJHFH1ZB7Cn4LSkwi5kUNmpmW2ryYR",
  "key16": "44aFU1H2ZemsocstYC4snprvkJyAnhzxrZu4KJpm7ZRKqGVEshH2gFczwj2z7HwWwVJtYwZ7bsznREuwqhcRMcXT",
  "key17": "338oZA6YYkzE1LQQx6qVxe2B3q88p12N3eatiZrQDWiQJ39ZBZQtfGVmrd2nFHNvKGVxeGn2NwLBDKCaK4iMpdyz",
  "key18": "4BGpADTaTgffXwo5rdYwW3VSAkSahMRnfRmWx9xoS9KeLDPpATxAJQxUqcowb4ZuFW6RYNsrAKme77yE2Ye3zuhD",
  "key19": "3bTPYRdm6B4R86ncpXHSqacnJFNbdW1K1B1Hf1dGyxauyX3gLnKNEB9jEEAkftaNsXNuNmssobdnimRQYga6cBpD",
  "key20": "2Utq1CwwLN4F8kntNaXC1KExhb8NU7QZQwWXYFMoNUauWrvS8QQo9EJdP57J5QpNxbgQSh46V8ii7fH8motUfc5",
  "key21": "2na7gkZsdMok4neBLt9MWGpW2hf4JXrUL3AuV27Q28dBWrEJ5vak5g3fR4evXjyxVhne8ZXRK8C7oxiB9AV6bDuT",
  "key22": "3JtMPZiU16jq9smZbRuWHU2aMXLLJNQRpzBsosbuToi3MsQa3Jo2MWZ6BTugphtM4Ns46SrhNvbC4myFNRn27X5W",
  "key23": "fgqoPYyXUcUB3GndfEKqwApH5VKbQTnVgfZ1TeHmMPbpdWaY6mHjbicaf1ZN8FLyeKQ7wisNKBtTEbVo6UatYYU",
  "key24": "3Ymv1Wg1kaWZnEQsUe3FzzL5ybcGSqgtxFc46na2zZCyYV4jbVaGeSZwsf9cTrUfnqzMsNuQjxvdebtn6TnjycgK",
  "key25": "X7DLTLGnfkc3nJjg6sMvkXNqwxvajxAJGRwnVjx3Be9unskC5cdsBmLCu1bsxctTfDvD6ZtC1oBCqEMQX7anPV4",
  "key26": "2k3BiWEVtn2TK1zJh6WwwbduvpqFnDVUxa41XGHTLH42CEiyPHy34NLJY82fTC1xH78e8moPRJpvcnuwmx9pDuvZ",
  "key27": "2MaAU3A7pXduY9nChcYHxXD6Wjp6m1sqfmPLeqeVYtadJ7UKBb5NhYhHAgSmJa4n2faKkxqhNpWGKp2VHSru8whA",
  "key28": "McP1vb6zxaxYKrf52rFtGwYF9YC7Uno8kJf1owGaaw3ZfbsWCFrX5y3Wi1UKiqAdaran8dvZ6vcjUi1PnDEYVLG",
  "key29": "5zdQmtC8v6DaxDstVbQ7tKceT6RE7jFf387pdrkyudH7rhkrcsPdbJ9GQX6xgHSjuHELxuG4Ek5ygiBhvHKzJbE7",
  "key30": "4xhxt71Eq2yW7jmEEA9pBPUDr2nm6xTRP5xvUsuh5HQ8pSJiXAQTnsygx7MQqGYvyetbwk1dWcEkTFgWUDGPwMSi"
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
