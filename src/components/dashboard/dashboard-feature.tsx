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
    "3W6b74VUJhsfsMPSgPUSg7JekH1wZQSoicu3TyeErp97JV4KuM5KDbpvzvxjiwUs5jF5tGMbkw8xD9LBnLC6sCkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADtjRTRQF9qksrvQnNz6qmeaZoJeWjuuTbpzC6QJ1h7SmaW5RKNH13Kx5cPNqNGuBayf2nSTMP7rkQJkZAsu4Sc",
  "key1": "J77sKYQpKBb42RgzkYRpjLeaD7BujiKu25cguEUiVv6WEbgcABHwMtwmy6zMZxYeyfA9gTUH27xMQsP6APKE6QR",
  "key2": "2XY8TdoiD3oLaojRvnwq4tiBkq9HR7XEcetJrASc78ddv1ofggoUW8fYo5EaftRVY1cSSvRaz9cCEanANbGhshHW",
  "key3": "3k2HHs1eWHRXkibUxebVj2ehYDPy6on3mMqtb4CfnQGrErse16z1cnWU5tnMjUguKqXiQuRpFkqtJiBiLZjaP9ME",
  "key4": "5Kxk1rymjuicMAsbw7vUbTg9pqbaeVrqrhKxjr8UZrgqfvsdVeVtkwzpUQhuE3MY4pnusxW5Hn64ja9ftcevbJ15",
  "key5": "x9zESnu2YQXtYAdNLYW8zKPdraKXGUMoe5eDFjGuKPKv874kx2zRvYi4SiX5upBmT28Co7iCE7Q7nyiBNUaD7PU",
  "key6": "YvexqR5nwgZh64naDLzKSZpaEdqnps8ea6pneUwTL79vLfWzfR7PqGxqzWKNpTY7SExW3AQfc67137PrSizeFub",
  "key7": "5a6uKom45JxaE4LkD6ZC1MQUFZJrcqjzKap7pZjo9bNxUhwF7P2tHynwPnjY8MXT2FuKHMiyyw77fmZhcdeGq1AN",
  "key8": "3yNsjJtPXXzSYfhr7KoMMypNhdVDjAT1Z5WnAEvMoqzWF94Uqt1EkDHEXzhbH3KTDmPnS2qRMbpeKfkPDvwt9vcH",
  "key9": "VZLoisNEpqcTAqTbzVTeCQJY1HoVwJcmFbC2MBFGq9qDYVKgrTDkHQ2bs7AwQutt3HYBNom3XvXZbtg1qMrMX5q",
  "key10": "4oo9TMtFuSqDXWsE5akshqHfZdgWyN1ewHkWLCHau6n6W6Vt2fyfHYVHZ5NPraZiC2Eq6NzLdSjVveQ6rhCaNKfa",
  "key11": "5uGCvLtVNNHhxufTypRY2hexeyd5KoN3SHbD69mGZdiZReqazkgy4fRRct9Z41mzkABhyDbwFdPgn5NFgkEGPK21",
  "key12": "3myCy2PrLptMjSwZm3QZsRZ66rgTVkge8eTEJs5FiUf8a8DDxc1nNEktXXeqqhRpNz15TfxZEqSALqK2C4fGmTv4",
  "key13": "5LMCgqtieBda44W2Hz4JPjsLJo3cLThxqApyffX6R4rwRjGGu1XB8StohwMivNAbHnMHAFQCd4UEG7t1QqAtrKNn",
  "key14": "4AYybjy9WGKWUUnePRnfcn3n71XrKu1LfTFRoWP2NFqffRRzFtVLVuqpVf8W53QKYvcjLQMCbTVyWdQ5JiB6B6zm",
  "key15": "4DCbGM8gAeHRKBWvf3Wevb4FuaijTMhCCqwA7ZgS6Kpjkioj565X9Edh7jvMuCfq6kSYpJx1rxQjgPNzBLAxktzn",
  "key16": "2ohMQinMN8BPyLRNCYDMuxDscfn3ukzFSf1R9CpwBaKmeaZzNeKC7LCtACNEj2gTidBzKzHWzN5Bw7w3rpYGsYa9",
  "key17": "6EbtFyYFFCk5WgwePanTBJfaSqA8xE5uAhxnanjVaJejjYuJUbBMmi1DM2NXdh62H8kEuAR6AaB3amwNcyNU7SQ",
  "key18": "roRNu6zJL75KRezHQ31FEaKJ7X3a9N7GaSHSgFvK1JSX4Ex8t3nHs3eRrCGMSwCLuJxF2WHoQ7eH58ThQf2GBhd",
  "key19": "44iTUbiFN5NBAxDWPBp6FvHNCTxy1vuKHvUZnJaCpnGCdECExo3gbx53yZpYbYyBuLLQ14odBxx8Zt2SzdjyxS4",
  "key20": "2ZbrSVAfM1Gx82ZpXWgL2FTs96Q5RHoEDKDVijrGDLSD2so7iiprMFrDokGVwEjgQwWQVzrYSGNbYUTL2aJWBpUb",
  "key21": "8fbUiVfF7Z5H2iS7UWN52dKoZxDfougn6aZtMQ1QmAcHPBRHjsCA8Eg9LxfQ8ikXiAXwaLCmeHKftbZo5Kc4y8U",
  "key22": "kDwsjJGYdXRj3wuwuq39rBjrz9hZ3wnYDhDvPQqDX4UKNP9XpUYq7uKrF7ppGpe6CP4uN6tvkrK97kUdPiLvUGs",
  "key23": "2rJwgv7QfHuRUUV32SCDbk7KXHoY9HjNmAFsKRBsThhnaMDyX8pbCqagi1zYLTH5z2w8g9W2UmerBBQJDeQtyvS7",
  "key24": "3DTF1XPogbetFXcQjF8cPBbMN6x37hzaeMqD7bjpxNberf9aNqoaWbkb7TEptxPsU3Wp76Ym16kykCy2RVyScARb",
  "key25": "28muPA8iUi7nasiDNnkrqarSVW88eDEsysDHuDL74B5ySxqLFSRCXaL72FbhSL7qsYvPQuhcy9KyY9PDGPR4noYb",
  "key26": "5SkkzDCpF9N7dThM31H3zSJkCBq2WcJ3scLoGxfcHRvhhposKqf8fpfeeisqmDydjX9wE27TJKb13jPTL2sR4BpV",
  "key27": "63arj5axMWrgXZyxEYZgpYS9JurhyeNUKggLC3HFo1uyqGRmzbDjsbwCoxSuyWCLyRVRCnQtmuipt5mqy54uYe9E",
  "key28": "59X6zWx511SSsLJAKf6TsV1VuNjaE2wHWqbUvQ6Z6aosHK5i14oSfjCcbuZq1Mvegho3FLFhFzBxwj3udDkf2LBe"
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
