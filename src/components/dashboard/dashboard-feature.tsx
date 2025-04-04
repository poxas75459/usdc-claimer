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
    "4wM4QaKNfYuFCUwU5x1yW58JUzKKDA8XmVbLnZmUb7ZwSF9y4qg4n5wkzTLgeJmkyRf15pAHd6GwNktt6WrbHde7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dGBQvHsfH1NLfomqjP4uyYs3LzkjVh5NfPr9U3xfEQmdb5xWUVbVf8FqnQcrW1WnE3onSnvaRcqQa37DA1RXeP",
  "key1": "4ZJhN3QGkfAkJQRtKwyC4mtkh8aSC8AMzd92FjABQWhNG5raAaeNQetAzrbkYgJLcNyABD6uz4ZQX1TUBZPpKW5i",
  "key2": "5F4hdsuDPY6w2cZZcvqVUWfZCzCsaJYRyubAi2TQwKE2y6R3KDYXEdBmLQZ3z6c5PznJR69DN8E4JD5T222SBdFk",
  "key3": "Chfne7CQGSmFZTSRZhEubGJ73MHLnpMN5d7cRUC9w7SZuLbUtFCviLLc2NHrT1C3cRoEyTr25dZn6jkfUN2nKTv",
  "key4": "3tbuDqVRFnkAQ54z61n1Vf3mUNFfBiE2K9Az9qqAkER5aK5bQfZwsYVie6Dfer3CibzXBCb85kDXHQ5XMNy2rBHp",
  "key5": "26abJEKLo56UCXbCcnqvJiwiq72VFrnNB84J8yxi8GZPcbCeZMQhqjDWAncYB54f3iKtbKqE9EyKBCWJy65F7BMR",
  "key6": "5crYHAUczngR6jZyGfBA7Fww1PyiPXorPRCyEtQiXahZygz8qhgQN4cKkt3VPsfeZjawVHJm4igUsq9sbPLSPErv",
  "key7": "5HnxXwTzsHNDPJZKAGGyneTLkZk1BR7t99qNSYJ2EpCUP5UJXQQcb4dumZyCA9TF8poKTRC91dbn6R17soEvhE13",
  "key8": "mnz4wj4aZWQH64JrwZqBvEp6EYo6Zvj7iHnKgKFzhbyQSrp9imQWP9sYD4NhSMvXmfTyr64QxtYvyLypRYf53Bw",
  "key9": "569xD4Y12ACRGxFGWDQ7puDisG1Ysxg7nmFKf2diWkVYNxbHyMUVFg5uowmrMZQtjSTNsh1oNGxUsb14iQr2WR6P",
  "key10": "4KAeTk92dRXAiyM4f1bkNq7a46QwFdwj5tA3xKJE2wGCLk8tzzth1eQGMdGZ5tq4SEt1shgLojyYQkwuyGuycfC3",
  "key11": "298ydnfrEDXKMXeMkxCW97UEsmZuDfV8XcdsctczLd5TRE3BvyJDTLXpUY8nhGjtjyqKXQhBVB9nVmPmJKAYuEwf",
  "key12": "5bBYwhsWoiQPiDRNdVW9T8EcJEeuHRyKP6eRR3eUDPLWXATamtMJdVAbYUy5Mr7KbEUtPrze3dEhvEY7mMns9iJY",
  "key13": "jqPdaWski7q2MVKkURRURZrAyPNmBGmUdPQkYy9724qCQQU9o4YGEmJW87BUvHNqdBwhp27dgx3jv48QxucyLsn",
  "key14": "Ebq5iyeaB3U11pZHiNPXTJyLPGiWMK4tUsYbm6hxXRSTPLKJZR695DvXkteJtAYdinAr1Fdc3jofV37KBX8FUZS",
  "key15": "3ZB8gcKCSvZ1sxdYFF2Wi1UtCo1WfjAy6D7UhRe9raty2iHzXSzMzesF2UNsk54cHprh3Zz1vPimYkTVZfzM5uqZ",
  "key16": "2Q3GgJ8fpwsJfgkKwLb4P24vXjMwojyJLPrqJKyt8No26AM8npKa1XTvmmHGppYRWFX4pcWffhDC3aGNV3c1YN5k",
  "key17": "4ux51EHjav7zK21cXqgcjse3CQ6ncEnTbaUjqnWkpzEDeVtP2BY9QGvFcwseAV2LYeerLUMJSG5NHc7XWRpyVpq9",
  "key18": "2tWXhFQrxZEaNXR7VtvVv9pA2WaSxXesPmAbdihq3nheZWx2CmJHDCesroFtiRCSgvaMvSiZYhkhN4e9y2Baf9kX",
  "key19": "4wgxXaYcEtsgNNupLsJad2dfjSjMoRKTVXAm3saprL8JB2THxduz5Q4DNDwHtbww64YCmtigomSpHYQWkwncxgfQ",
  "key20": "59nPvSBtGc6uKXodE53ZCeWztnxbKFoVQ9db335gsZpP92cGm6nyDrqmJ4drCw89G3h1urmJi1dDaXhPi6aWoEZ7",
  "key21": "2s5dxiC9fnF6KUCfpEWPXQuiyKeQF9iAU5LYQyz4nmwnNY1J4Qe2hujKsNtGoRwFn5XZjDyWrjsAwzaEvbBbPNqZ",
  "key22": "5YtguTnDQEnm96HbcvEEW8nHi93MhVv4JtXXJPmwCwMHhVrnB779Sd1187ncYsRCaKPothHdL3Fx96txRAgamAeP",
  "key23": "46a3GamTeoVb5x5B8b4Sxb4bC82CfrNaM8wKLYwZFaUW3sEcD9zceSnqUwRLakEebJefUBCb3m83PDtJstJTZLEs",
  "key24": "2vCgfekKimUz1KENUXMPBc9er9SR6ke7Qp7bw6tgGTi1sMbo6LgshT3vkdYYuANzuHZWxK4nMyzipZ3M3jSrdf4F",
  "key25": "3ygshcrpSVH2hw1vcrfC9XpuGWvYC2GdacPhZVSnjfy1sntySkgXfBLA8Qa424MeD4Hyxx8V62EVahz9ZsbNNJ1Z",
  "key26": "5Lgdmmi1jdFkFnCHH3qTMkdVTSH2NJGVxkEYebZbypoJkophUMTRA3kYQwBP3gZB9mVfhBXiB8iqZd7nMYv81rx6",
  "key27": "4AdG4ESfD9XtDV4Kpv7bqMETGDpjmp1nJcJJJ6cLS49SapAaT3ZBNqzEWCdHHSa5nriVnw6cJM12mbZ5GVveDMi8",
  "key28": "47M6Hm9cUv9QqfBFdopKjU3DgUZK7JS51nCuHDohVVCBPhkUSaM9oH29yXvDr4wsFFZH8QhJhTP1kc6vADUtN4oi",
  "key29": "37KQCcm9M2FrZgWwkTBfX8WVVrhYfnQXyRdtwpNhUutPcwhAoNHu512XjXTSXShdqbMBTSHVQyz2B5vCAeRYNDyk",
  "key30": "4pij18UDGbf5cdtcQSbkZnJrnKPCxQ4MfJACh1GkKHXgnPhdoyEAJ4nTocTUZYznhQf1xjE5y4PsKbqT1nSYoco",
  "key31": "5fXVzkSbPdCyKotrVgJJKkEwaqcG2evXJLhMzj5ADUStHoL7jZRVa4sqYYq5scqgvYhsU5skiMgGaDmb3c9bfNtR",
  "key32": "5HvXsYoh4yuZLNZasiCpQQKPzbGhgR5a4txWmJuPbQLFoKjLSrD2UoFPxk2Jdsyn9md763LKTQzUKhomAQeLThjx"
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
