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
    "q6ZfhBihVLMsBaUujuvwq4AH1obois7wTtEDYBtb1TknxvSMteC88wWYMLgMcv5zTp7BuCq52cjjveJsPFscpsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27X3SPkanhFcCot6sTiVYjYvRPiVctNNvxi7ph9SZ5ngjtBUtnPkoG3e6LvCZihUq1s2ThUKJw1wWVnjb2KHczgL",
  "key1": "2agHXhJRKnNZqXWQYYS52aLkMHdKBZXfP8BQbnxADwo84LcRctXDkPDdzVXqbKjXQwo2bHLGNPDS1mAnJiJZRkdv",
  "key2": "2k6XRGn96Vx7ucC7DJ3tJo2Q4KcxwC7CjfeVDGwnEUwBzXkbRb7YQshtNBzkn7QDqGnCGxZWnGHSSEJTgMMBwonR",
  "key3": "2by9ZPxbWJyiVMbk2xfYXZBssDynazyCvrF62pBdhWygz8AaVf3fgbdnrtEcHWNydSJUT1NgXbWJXssPEhrgJ5kq",
  "key4": "3UGrKb3Dyub2GM8fsd8fi2gsGPkLLemChxPar6sLyt9wj8J42ptH1LUDWeSVutg98N1EfbPtGQxkrmzTk7wjTafJ",
  "key5": "3qtgAaKtypSa73o13FnqGTve949Sqtyk5eDCK8if5HWxsnaCEw9QznDYQCMdqvAmqaJ69nFtQxfGuNbqNksEzNpe",
  "key6": "ZGqf1eVujrh4Vhv7QVEGcsZfYVkLpJwaw5WHxuhaBmvDzvVE86qycPLyakYYAZCUqLHqk8dNzPxVkpL9VUAsi1z",
  "key7": "3HQNcGNa62i2F9PsgVsts7CjqPCo5hmdbe2svuvctAdXg2gP1ufPYoiZiuLq3Avgf3SFAxr1rSJ9rKZDQ6KYQPnQ",
  "key8": "Pugth6qdXXjNtG1BNdAKA37R64WxoAEjkJdynjet3ne5A7sYcmdrsmRpedEhfpEbMq8DEGMTpe6BGbNzirJcnfF",
  "key9": "5J4fk6x5q6UZWCf7Wd1J3E9dmfD5CEDLftjHakLnFscgfY7f7RXaEmUburHvcZCzd9QqHM7HfFjspQrioS5jBkCA",
  "key10": "2wa8v7ZzDg9vniiv36VC3zfErzcoS9ab5CLSUTgRRQA2ryLjokZUjhhE7EmTYKQ1XFcbx2cDnTZwJryJUbmddnQc",
  "key11": "66FUtRZ3brgwoHW4zHBLvfRdzv3C1tp8VfewJz3CfUsACN1uxo6MHKy97H6CRdpsEJtnfNswk1Wexrp8w9NwNYM8",
  "key12": "uQ7x5gZuqRTCKW4bFHgEJNzr3XK5G6BYDV4uRP1zqi4fCf4WKGWGh7mwSKF89HYJQvoCcXcQGwnsKQDH5uBEmeZ",
  "key13": "ZJ3CdW1pqxkxsREvHv4V12una6qDCUjHjcwpZWJv1gNcrh78EWKSsz27SpyLGcF2H9s9U7ZcmmCWanNLP8TCzij",
  "key14": "4CPrSNEFKZkEVsWBXxyUDJHqQVfg6NmYgEx7Vf6fN4w9YzuLzJz2PRtECnQsDEV73nFzc3Uu8MHPva1ARwBDeEjz",
  "key15": "3ix4V6ZkPgpd2DpEptNfn52x9eWt6eLsx5Up9c9VRBhAEfHhvrE8KAJFTweGh8YPqDPuGPXpjKhxs6jdk3mxgmZg",
  "key16": "3wGovz4f2rhTBrLMk4UCzDBjV8Y9nkGYpaqJRTzbYTtDrpaKynhXfQ7BukQdXwkiFKEqwcynUnKQUxhGH9SzBz9i",
  "key17": "3KN2Us7tVvr1oiEeqwgSL5o1vV7SQj3tCMnKFN9mvdYWVJeVjWn3dNpjhBePwqbCzP6n9NcSbzsKE7nj7pGAEUdJ",
  "key18": "4jKfJu9iT9ABW9XnMnb37nXYZcXYC3wcMt16iF1s1TvzsWk1rcrsRZhTKb51ixXaeKzrJcB6obLVHKtEDVPCkTdH",
  "key19": "CzMbi4whZBuLaxq89nd5iDNzzoNeEngn1TtKfwsat19ir1C2aq7nxwR7gx5Q3bUQDzd4kSUbxVzZ5tr5UwZL3Cz",
  "key20": "3qCK8nXJow35RHTGY9W6eeGGc1LXmnANx4w4JBRULnb2tj8fUmsjYqY7eVM9tbuWg47jGx87eG4YL69aqooHzGJE",
  "key21": "4B9hUGXBvFgbDP9b2TgH8Vme5RbmDnsESexuYT7n5uSMTKnBwnxf33oVZ2GPjzWKLoaEkkzaaecgBkWLvavKmeby",
  "key22": "3yqg8rt4VioTTPbE2TjwZVVzcB8QUb3GdXnq2Ao4iKkp9Q8LE8uJNBrA9ne9xpWMhrWHsh5M1jpnejBZSJo2gyXb",
  "key23": "jcC7QymxHifE7GaSUnCygQLqZKA9452DfYAgJCYVf7N9SRzFHYWxZZviKGtHP4P15dWwoiXpWVCw5koubenQwQs",
  "key24": "2tNknBEv9SSvepDXpmDaLKCVuRKDwT2hkrKiyfsNJHrY7FLdcT57WcspPqEE23mttCZHf2K7pm7LvchTetxwMk2G",
  "key25": "4G8Xaumf2aBsmSCehTjorZLUHSUJLNERQ2KhKCGvL79BHvqjMxmUerWvdfnbU56LyiAyQgQtpZhwDC4iLGFTF29T"
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
