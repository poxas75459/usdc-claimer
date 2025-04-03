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
    "2gkcdDS8jPZ7H65T2ikMpPSTaphKmLvsb7aDYgeq2MZoUfGDC6TAQizCMSApSqKKji7t2WSBAc5DKz3QPk1wQKDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A6ZRRm7PGtQg5ZJLiDhQjPPZww7hPaMQMa8Pk9LWmmuoutM58DsWce5CfeGNR6EYzphAbZiKMxXKLcAQVrhEWTG",
  "key1": "LacmugnZj7hNcbcPDUD1ZHncktAb21RFnYkTCyk1NfPknJbKpbuq2y9o6phC9HR1oF12wFaQZPnazqFEsYGNwa2",
  "key2": "2BwEbKqfykFBSYbbNUoEHPZvjomehu4TMPVovLSGb6oPzpvenD29Z1EkT39FkUYtgULuskZ7a5HF1pmqC2hJZGx",
  "key3": "5ntwYXoxismYu1UFzZkE6HUMREtdSZtkFKhZqhSfmVvxLhv1hVGoMja6dnC6iLYVogJe4BtJ2tWKQ52P2aTTTREs",
  "key4": "5mfN4wFgQpqhRTte6U8bn3avATgGHC4mrtig8oRNZFMQiUy8rLskisnUMbo1WHN8tT4ngFtuSypmw3UvQiTvrpxi",
  "key5": "3H5XHrkfiyWidQGdT5fAntEddqAxMsuSqfg7V6cWeVmbZgVx7GpKmmiqSkTbDGQ9SfVdrNE5bFJCmv8ygP128bcj",
  "key6": "2E1WNyXbFuo8yGNsQKn8GTtYdNueuQ5Uozg3Aqeie8AWpJiF4z6x2nWzSfaaCp487xRoMfpmUuc2bqQkyqc9hrkg",
  "key7": "2yUwUASfqzRXYvHDkWDnNsg9F8iTkDDwc95uW1C697D6CWRH3Rh4GzgkVscPqhMULVVsAvufi3Ya9tvvAos87FxK",
  "key8": "52msRt2AZB3iwH4VDqKpSq9XYQnAv5zp6CGv4HUYJk5ePaiNV5FvagGWxVCLm9xF8vHopF4ecEJ2oy68zXzshnpM",
  "key9": "3ae1g9fRpAXs5us2uCzjRx821GFEKq5UBdEEHsKb1gqKZfSUNFtHhFrEJVYZe1gUPkeXZNdS5ocMjkXAb4Whu4qn",
  "key10": "4sxdUW5ty3EbiqKvrd6BiGYDMcHLPDd3Keuo6cewJLZHqKHtLHgce56y51JhE9vhN75ukx1tjNxGXZynjV7daLNe",
  "key11": "2E3yDMviShYwicuz6nNZi55CANB1SHDcyu2BhxAGzp9kAbSEfrc985gKAqVDavYMgv3R1FZmgMDCGLE1MEa2pyZf",
  "key12": "5gN4S79DBqbkUqDHcz5vJuPATiV7zrQqQvGeSFag1iLJe2KtRu5LxdXejtfZc83MGkt95LgtYVnEBcpgpbKVEBCr",
  "key13": "5XUA2QywaVAwybtthjTtRC7Ps5oh3yTt2iLE4CthrNtEMTSMuwJ7DRzpNHEwM4HW3XEW5Zrccvm2GAjkSyTuB8x5",
  "key14": "2w2hC3ZPnDoE31sHKhJNVBWH9bD6zfhJ33QwdTyJat9ceUmsViANEia364o5NiX1gVZdxZcQ522CPh2z8pjKFcQD",
  "key15": "2AAmqK697HVn6pAgBSXyptBmkAg9FifS58UQ1jLiD4yYD9ZVbM9juEMCNdaAzaLHGtc87Yb89mU9FoQE2m1T7zao",
  "key16": "45tHCrpgcVJPUSWqF5eB6Sv8U9aK2CgEynFdZNUQnYWbMhWgf1smnBWoMAnJ2JfgEgf9KaSGY3XuKsLa7PyBYCzh",
  "key17": "27B9Y4w9KyZHJWUmWhDavK9h9BFC65MEHvTbTJgs5XDsFgiTW7gKfWjoUCN1e5xdJxxoVBg8VWUiRLs4qFifs5a4",
  "key18": "3DzXCUHUfM7Ffp9PEDdsssrdRTz31gTXEZwsrLJsa4fm6ZRKop9j2LavYvVr1kDW8g8c3PrfYA1ugQo86sP9p62x",
  "key19": "2Fbi6LRdqkip3oLbkwvgZM7CuTYbAWYg5KwtnRBeUDwb87W9CMsEXnqtoPYK6RA1xCycSmjR86FC1rb8qt5QYCXT",
  "key20": "dhQietebMUAJQo6Wxir9dgFYT3R1mjbYixScSSrU5zU4ACzofC5e9rAdcYrYP9qvREnTyqSfyDsm6fSPpqHGRXA",
  "key21": "MhaYNSmLfCfFUNUNs1FKbBdskwMnPoWTNutxmPVaSesB9BW5i1dJayoYKMBZN3KxcAdRPHcHzttWNBEeGj7M3gJ",
  "key22": "51tfcNHGi6nYswVKizhp46dK8NakreSpzjsLnf726o74Uyh19GxhrbL37sMqgQP2UEF6b3sbMCMSUmLewEHNEuFp",
  "key23": "2RVDvjfxzeueFf628QhpX5WNsZ7aGNy4tPYxfkTGhoM69LghcZoPybvGVsz8sKNvh6Be3cUGN7CJk1tB8ASvPARD",
  "key24": "4rbSaxpqDam97aHXUEX9dUQwJkJbitM8R9CFhLsA3ADtW7VsTDwSBsajSSchb4dw6uBNLGxiJFEmQsLfA8ZMMsZk",
  "key25": "64YZZ3ghmusFGFBP4HXwreiLCKHNRkbMw7DnXAAhxT3gTuuf9yYNx4UEev3XJ6xY8mh3aSt8DmvJREAoKCawQDCc",
  "key26": "484Ht7U1EHfot9odWeK94sAYHFVYpfGSwsJXuwRpjkkV4ParWHmz3GUVabtn9Z6gGpSspC9K66825ix8BNeXt3Fv",
  "key27": "2CVrRRoe8AdkzRgeAq1riqUhh2sBcAdnPwBzAtuFFN4KJQ3jczcKMP1L8zP9ebt1nP9AYUdwq4icCfbWp6Yzpoca",
  "key28": "43BRBgeVZqaWbinfDLNN6MzjM4dsL117aAp8CUT5jg2CReTxKpeMJkML9bg5iTkznFykee1mNHjrckBmCSxG7z3W",
  "key29": "ixWU1TQb5BRwR9S5AsevQf5J7BY2pJuzYcP3NEKfJTR9HiKpaxrxD2qkqFN1Hj6Hfuce7DUXY3Rix6jHA2y2psx",
  "key30": "3VpQn6th1KBM77TwGvcXzRyVpy3JD9QZw8QpoJmSzqAVc5SpFjeF59C5bnisyqnNF82a8G8HWUYJrxVJcsp613xz",
  "key31": "4oXBsWQ5jkwS6uFH1GVsEdSjsJodbyq6QZWbhmqqtAd6XALFsVzLwYgGpp2TcvVBHYCdQ6LRx9R3BM1NDY1LECY4"
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
