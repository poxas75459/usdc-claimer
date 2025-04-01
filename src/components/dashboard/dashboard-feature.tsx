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
    "5B1Cuw9VU9vDsWkYMW5RV2Hp3ywuaWQhao5R6qDxHaZVracnz4Zt2isMJdd5Sb4Xuk2KeAi2f2tyy34W5ipWDj7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSzamZvgnqkV3SccbSq7myLTtEZNfTFZ45Hm3tNsRvimLsiwMV8Yyu8yTYmBC4bLEUbymxaAsk2AshkPe5fw6aa",
  "key1": "2NuAd9ckfc5W5Ta7w828B17bE6RcThsBi5bQ9BjsuWZhN7cL8TVECzHZtb9nUAE9cFUzZt4PfZe2wDQz27vnSZ7h",
  "key2": "7nHmp6VDTDQLaxi35WU6QaGYSvg5DHmHtWvEmNusKJqH4EhPfZDY4HXQoK4W6X8q2G5gSNVJjag7iuPWJLFHZ9H",
  "key3": "5mUfDvkYNymNbjXidJwRRADGvi384sfndJP7CWvcXBWj8hfBLAVPhtNGKRiLYZKspSFjEsf6nKFxGpG7ApAkhyxP",
  "key4": "3tQceRedjRK7GFrxj3sv1NDZk8ktzq5WJHUwwCEiKffWDhEoncP2dK5FQ2Vmami3yDNWKSPH3grYYpyWuH4bLbP",
  "key5": "5kq52YFUyoLwF4guCJn1dkyHtdc2fnqRKUfxS8bqTzFNWRLhLK6KWo4ox2ucWuvVoUMK1RY87e1AYGfJXTsyX5cL",
  "key6": "kNyPusLpkMjWWAHDZWPkqLQeGWj8m6MvfjXedq6NSiRTyHjca5ccSp8J4exJsEAe7Vea82QsuRXsu57EDTzrNAW",
  "key7": "AiiPJ8eAzJn4XoZSH6wdCBjSXdTPMimgqAv4jNbX59aGVxBfVhxybbJ7UJ5mh92ugu5NM37hsetFB5HuuupuNpW",
  "key8": "3qiVpwUzKzJXudfVVqf6JBvFXmieGHQ49C4wjBTTbpFT5NnesVDEaXQxkCDn3ZP7Kdjk2i28CFt5pWbNHxF2yEoM",
  "key9": "EKzTAXoWG9KsxVyFVWnCKyCzeTqw7zPBFdcsUQnMbJNDR7vAwryNSc4uYL1iphNquDyvJeYa9weCzxVA4CKTFy2",
  "key10": "3xTaTNd6kArsuTdX9UozEi42PQ9bjWjtXWDxM2bbNn7171p4CR6L7AcW6shNYeCFaNmpphrNqS2Rd2h6DKwhvhno",
  "key11": "3GTuGcqM6LpTtZR8ttiLrRsegz9Gy7ronAPR7DYjxQ9kBd53okPcDdAsHvHCeFHW4kFdSttJjSYEmf1uDe5S8w6R",
  "key12": "dKhGnExsUpmTdQtJo2p9kV3pQJXtoVSCq4HVDRsRTfcDHd4rgHPXxHuMqhNTzfqEzVnj4LZ42ufA9XpEsNniDox",
  "key13": "3m4TQzWCocEhp6L1rCnc5sw1AL1hZJdYzhsavHeHa3aVKG2xXwLnEx3jYGq9oov5kquPhjeJMHM8wrDd69pMb1Nq",
  "key14": "3vHuiVdJrjdWyNmG94RxYpB3XHqPr4bbvj9CKRfcT2tTEUwZ6Km4HY6beCnGGqmNKcyrYdyRaTmsx1kjS41U27Dn",
  "key15": "5ot7horyEvQQ4AE9HKa37DHcNma57SrMrW94VWfsJktHpFDmrvd26S9UWZQFWkmo4Vv6XhkqKWbrS1wxuDqLXygb",
  "key16": "3epcspVquujXMfnWWUekH4KCsXqFvbWMXHMMEtcQN9QQxYN1HvTKjZ6xzv1u8xmNn6cCsq3mDRwQKQahdk3nD1Ct",
  "key17": "2a5i1PnVH78NaFEcKx1YME3QXhc62KLuGc3su636FeAi1aJ1WxFuN89sJGiLisaYKGmjrrZANog6cKmJTVq56ttw",
  "key18": "3gbUEDe8BrdQnWcJuNidkychsEL2N3cEkMWUDyBUk1VipznjxFS765UGufNvzzSX5bpjf5hipQabheNGxFwhepF7",
  "key19": "4PSC4PRNqKPoV2DVX8QxmaHKJVp9EQ3PUTKKZef2YQuLpHfM8GzKJFJfATnjP5Ny53ThBfSGsDEavn1rGowiV5C5",
  "key20": "4fxdTT4G3PWeesBwNzoXawocTteZQrfaPBT8DameojEHVDkCPzyxbbFstAR25PSqTpc1AEQurhrd9a55PvuHeY2k",
  "key21": "2HCVMECoaFHbKPeFt18FPvAKGA7CcfXHDzqCy7pSdHhhyEmNLQafS4ajpgZvGDsDNG2J1PHjgXfHihWgHc791foe",
  "key22": "kRrGYnTjqze19gjvC921sbWHVSm9iXMHJE58M8hWirD7KbY3mWJUhS7Pvub3dEY1jraP3ntVTer1BuAXpfQVmzk",
  "key23": "SycSshcSzYVssBZrWV3veLjqHM9HXst4NDSuWRbGpwSvwrkf5CsBEM54BbpK9UZnpX3ptUjQUPUWhTnoggMfZMa",
  "key24": "5dftb2YncRGqPCZz5Wzds45PpTGteABNryFAfFowYjKrNo5gwGJpsrkPGkp5WmEgYu1qmxK98fKq4N7ug5PhzqsS",
  "key25": "33oyiKqjRiiNyATkpDdn1PuJizf27V4t9oNiyXLG95uu9VaXAhusxqmAfpKs6AEEPhnuxwSzzq1fCscmTx1X3grM",
  "key26": "5FaWWE1JB6mmQhWv1qVCo3SZ7ZNNxq85vMoQTpwAwKTWwetAXfvtzhLY4NnmA1H1P74KXpvnKGiQemqLoVRBdXDx",
  "key27": "4bVrvFq3jm7iLLsfxRNjZCP8NsE8ZnD57Hm5hGVQwjds54uaJXvtSCo7ATUHHH192rXJ4FaYowzpZbdGW8pNFaXJ",
  "key28": "4RDX4w3Ynhd4iZnn8ywvL3YndZg6XNh6SsBJomXrc3JZiNLqq8VXHc2nFuzUXc6bYNHdRrC8XkdAqMonzrpo9tfj",
  "key29": "5h13vhF1dA4JGE9zVyCM8UGFmpiTvVCdwuBugTfsqfxm8WL3MZpdnUadAbreU9FPnr2Y8hKzY5jef3WaPuFBg6TR",
  "key30": "2XLyRTr3HUFKKf66LQ81W6xiaiBwHJrPMnUvegQSusasumWcZrWavD6QAvMZLAYUrKCSYfAvUnQpLiLW8nLaEFvR",
  "key31": "PRZtbyTTAyAywYGKHrW3LXGWNPAuS3CradaTu2VMtRPDGbXLEeNACPjF2W9JN4KzBEgK8xYgLkii34HCNjo4cEs",
  "key32": "4117HDGrFxAkW6Ague9H18AcHBj2nwWwz6XJJZGpEvgSrAMzA4uPv5sYVc5QC5RGBkbDuRkF4yGCiiqV1C2wZqtm",
  "key33": "2xwbKcJv8CxevcG8uQNEAHhLNh4rqnGiMf63of842fEvfGbg5oi5ukk4FzFL9pkC6iLdCWSR5bm1DevaNReYC2xq",
  "key34": "3tTbW4XzHsy5bgQvV8L9bJhhG9p3GJNi8mLTHSwXjJnNX8MVespfEPHwcLieNdYHJgjazAkZXh8nz96hEK36LXFu",
  "key35": "2WuYpQe3YSgDq1noc9zhbnXNqpd8JYUtCsQbqNJL2mFjdAwmxe3XYs6MX2485adhJ9PMh6A76jWfkXjM7qmk9XjE",
  "key36": "22vF8Z35Kh5xGqhzfXumBHqwTS5oAapa5KiKne4kpUdGyDH9mUDgokU7t7xJnmGXhf9rmBCKNiLcnpvnL2zbwQq2",
  "key37": "2H6Y6uGJLWgWMvgqtAPxumDXnq3qMpk7Tg9HpE7NUazBeGE2b1SXRBJ26pRxDf4xFL1ZsR4iU9ZNX5d8pM6BtotD",
  "key38": "3TXmP1XDHp7t8ahqioLzTbGgCncH2s1hnAcrTvytuJUNkuyuyakbXVk46A9aNyxfUHWsPFgYwpUQchAP3BFrv6hW",
  "key39": "hJzqKiEjTKKn81BPtsUSSXxbFCju1magsQP1iBxHttJErfToc9LA29cnrN4dzQS7nAboW1nmmxm4QkFP59iVSzC",
  "key40": "35cFEDGVE7GQqywvKPZR2bp6xqXVGF7fPH7Gmg5qoRQo5EaaQiFozADSoYGQ73kyiZtnXYrJxZwRmEVTLJPGAYcn",
  "key41": "3MgZbhsgALMpZuVcRYkmBWn6yJKXpTm7qjWF2ZqieSZG89rhoysKbaEMJoSTy8QTNUYGcA91gY48j3mJiQ9QGe2j",
  "key42": "5Df9DgNqTaZS4AzkRQzaD8oMVRkFdBuwKbb369pyu7oZNStjxMzuYvt5fU8sAcPPSPfi7aeZBasf9cRE22zRikGP",
  "key43": "5LoHNPFavSqVuhbdCjMfnrHsjFaQdHjnEtdEzhLTkCZYabG17ieseiBqBvGZGX2XSWZZxt5pzFaLopLSkZpv6xZg",
  "key44": "yo7RjYF93V1Hs82AfQkVcp2EV3Vgmpa4K78K82L4JdRDoQapfNyrPZBp2W52uXvXijqd8uSUQTHBx2G2a6sdtYU",
  "key45": "6i9L8uWKoAQ5TwJpS8meY5DVoFizaYbBZN7FiGkngRuAYaXBKthpZs4Ko5WjmdMZoFWAyhsntDqrima1w52XsHv"
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
