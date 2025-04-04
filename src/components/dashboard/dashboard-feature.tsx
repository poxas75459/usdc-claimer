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
    "2JpXJsotuu1o3DKuTXu3oV5X4YfmfMp1ViSRJujaK9nfJQdJE7htMHAXqhs5ytPsYykMDYvELLiT8YfjA2LuvjMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8mMxRDCikzjnxzGTt1qBMHg659gkJPNQXUbfPy7nwQjULgHfMnjCXZUNc66obtvJxLefCGLJAW6khnzaC79i9P",
  "key1": "5s5WG9Dx75bXqw7SLDncxRj169xzCo7gZfdL5Baan3rQiWhyJvXN1BiJt8HNG8KBHTGRUckrKrFGDDHMnRgYPu1N",
  "key2": "htpuYTmAn23oViWfk1LjvCm7NF8vrpPo8N69WTB2WhmCPfJ1TzLJysCBbHkSfFtHoFjsh1bkVgnk9QvzD3Up2Zo",
  "key3": "55GKZ6e5eGFiB8BAKxWJyJaPXUJ9C9Cf863qAkgCeqzRoA4DzXWqomvWBkLE47VRbViwi6EXR9jQRCWKX8PJiKwL",
  "key4": "3ufQRTwLRBixVfx5pEpyNjck28YZ7twNBnDgTo6T77XcP5QEevmCZSNmSVqxeX83uwzMYVotDaseRHAw8drqyuEo",
  "key5": "4XzUC4bxiKgWoeHkp1Bz61kgCczbTfJLDuw5uwtYGrz4FSKzSCTFA36QCafk9d4YGFKq3d6wWRwK1fotK266Pnc3",
  "key6": "5qVeyEk8xxMMjmPi5gWGb8VTkN6W2miK7VHpGMuG8uC1U5WRhUTkBW9de1Djtdyanara1f13m6wJvpmTDHfiaBV9",
  "key7": "3udxwJzG2QkDwBWuDbz3tR6Wh6A2qPo2AgCA7WDNk1db9VASRi9gbdYE1z5LLFzq6zvrsN41qookyHCdvUkiGgXN",
  "key8": "3gwDshoYB9vpkc8mAnnPTWq9M5SGpPPtvXTHAwDr9ke4rHA4KADvju5SSR8fwjhpSogR76621UcvBZP483TrbWhf",
  "key9": "4uPcQEmN6gunX9hQC4SACUkZF3Jy9njwaLTUYEuUttr9sfQeessSmzMy9eZLnSqw5fJRtuD2nf9aYnJizYuG9Ezy",
  "key10": "4FdqKCpLrVHCkDQGRgEXH9oQq5ZQWnJCmGbkwtw942qCCreFEPVcLaSTzmEZ3JkM5kn67ejhgEa2m1g6D3ViNU1",
  "key11": "5iw1F5ZqFyiaRxBGWec53VQF15Xd8rjyXTcTZTRfrvNUe6qLk35o3SREBcNqGJ8aVjYLBqNnRkf4AHpPvxN8FgFr",
  "key12": "3S8obiAGxMq4D19A5ZrqYTtPQfQCif7jq7mtkdGRBaRwz7L6dchNMCYbv2Ghwnpw6jaJqkwQTLu7JnX1U7pmLiWF",
  "key13": "xBgvLRhp9Bz5F9FmoW2nT8PEcUvRjBf76AAdxjdgWypbuv4pATmBrijmijTHhtoWA3pbrMgwY1th6y9DbonsfsT",
  "key14": "bfiVzHc73PzeTV8E6BSYMMqwN9zFA5rHMw3a4kT4deLTGeCKt6KMN5QvrXPJukr7odQySqkJ6Me1aZM7vdRWSi2",
  "key15": "d362Ti9UNhK4sjn5chjM4dPqNFYBsAq8ztFRFXmWigp5Ni5r1n3WAtNWG4bDPZes4A87UVKpHQuZhaRFRKPRm14",
  "key16": "5y7WZ3pLUSFA7DKaQUmvkmiZaZyJi89ki2xxiCPN8bnAGM7KgUh2kqt2BsQL8B7Vjkg5E8peLdRTgGWxKat9ELPd",
  "key17": "4yPFd5W8UPg5P4TGBxAzFo1XtjwnKWtuxgmpjEmtQhfRTdxuVFYhV3GT4mJgH952HumBiekKLxRqWo59K6z8798",
  "key18": "4HhdRFwGWoRcXPGQAsSo29x3zNJn9JbUUbELYTnY16VxsBFb23kKQvzJQLXM1jvGAwmfbvfq4LjjVGHaWA49euH3",
  "key19": "AdcduVZuTgSfePCoYTDinTkF7DShC3ZzL63qfz5t82knutFJyQPAAQTUeiofmpigULYiq9HPtuZNDbXdpg7ujJA",
  "key20": "2VpJM3MfzNHMsJPLCFtm4BEFE9kQRgWap1nhj2v5WefqZ3vriPko3JHqbLXJTYp8TrDKkE8DVV92fRvCcppUALXz",
  "key21": "5dPcbbS9qvReTo2vKpDwNRuMXAza3kCrVPKNE1AzGn8aTSUdvJC7puqbeQ7wFdPwm4y4DNRd2cU4p5XRa4cmHm45",
  "key22": "GCBdNhpgcz63zpQNU9V19rDKi1LoQjnP9Qyy1XYY26MLDAo999QPPyxoKvEJQHzQUCaPqraXXzovojCyqcN3nK1",
  "key23": "myKAEnqNHVp4zy4CJ8SUJJYZDLFPbVvCV6FncbWr2MPFi3iZJB3J8cN9GWerEqhLd6hqLHNN5rmk9nMJ9KDqCKH",
  "key24": "31MTGJKpgF8NSUCMpiQsKeu8dNEhWQgQBTS7t4oifbnjTGT9yeKg2nD8X9PX5uj3mMVPFgyVD2sYLthbS5A7dYu4",
  "key25": "2SQxymFQxhQQ5BrQ3nVz6Jo3YHncC1986o472iExD55xaUdtbNp5ste6bppsvAeiS3QjiACKnpvdr7koUj18DQDS",
  "key26": "34XrjYwpxZJ8qggkV7KkC724TVuMkHAwzeNv1MGg44PmTdNvUmbCiUethcAe7Yo8xYdsGsAFNewzaEhhZ9z4cbVa",
  "key27": "3GHGSFXVi8YmTjM9QzdGkM5xEFKGV5Hbp4Ng6xsxC8Lj5kk8qc3zoKnxDFusocj7DMSGv6etPZtDsn8KQYEyj2Sx",
  "key28": "GKcStzz6QF8wrmt4bGEjw43uXY3HDRZUwXb7PwQMC6HPZuKhzd44oRRijXs7cB37RCXhMMjtFtNAMsxTz8KgyLb",
  "key29": "3MkfJW1x3Hdn3u69DVuSNxA2TPqTVL1WeifeZoBxb65fHa2STFz2XzUzq5JuhoU82EfsecH5VesHF5WSah2q6x1c"
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
