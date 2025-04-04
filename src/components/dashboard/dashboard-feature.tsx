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
    "5nPGZyhXqsX6bbgU4NEFEZMdYxuQLw9B6Qnr4xwKg3a1yuKvowdPyTgsx1ZqkfWc98dwZSKqKZHZ5vRctr73vzvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CtEatPrSE4s16UUQtTixxmryp3CCHd4By2U7n37SpR2156tv3PrvZC5WwvTAPQEQKbZuGmjF33mVqM9TUPzzqZm",
  "key1": "3x9KWQNQHViqdGsjtRHGzeutgFytKZogy9o9BencNK9hSvMHnLC3ZHv4VjNzuWCaJoyEjg2gZZGPXHtApQDUgAq1",
  "key2": "jdsVeWD4ghBD8ZpCvDL9y4oWaSzU3zduMqJSCwbS2kZ3quTLvaE71fPLnRAmGZifTeV1VLv6fsAMiQS8g9gN9AR",
  "key3": "td3AQQQfEZogiVouqTC3ad1dbGRhzAR58bDyveASASZRFdRRLtFRPs59QBzYU6RVumrjt5geSU5ULJg5k3Fa6t9",
  "key4": "2FgCkFFYwiJKZaTduxXBZNNuBgLFMDYNqaDdnvhbGDR3rWfzXm7xbWFZap3q2T7amj7ApTwoPwK5XBsXmqrotfsc",
  "key5": "5UsZ1dUPjrzhuE7xuCbCBCaBdNb8JfQiUJ1LqWY6H7TWPtREX9fMG5TsxcSFr47N8LBVLMnaLUyuR18GJAfTb1QX",
  "key6": "4a6HpLviRdrAzuTScLoK3zACt5A8y2MWyoonKe5jvA241r4YfKBEa4Y1qGScfAsi6w2sjfhTr4bgcDAzkLdpEQCH",
  "key7": "5GhJ5MaaDfDaxGRxLZYY3oLgn85QJCBs6xq8PL8rx6xwp7sJ2ui3U46CczfCHPDfa8qVCMevPh8Wbyd1tTmKSLfi",
  "key8": "5wBvn7oj8Sn6B3zTDcus2SHowB26HEgtbHRiHMuQB7nGpf7Q7b2i8ddao3kxxF7yUzCAVAYgprGXJZv3T9yjYvQJ",
  "key9": "3uTUcqRn2m5Urg12FWiFrfJX9eRT5jXcC1UdwgQJ9KZYVgVunZ7SSAPFdZ1Q2yZ9XgdGPZC7ByMbygmmYNWn4q5t",
  "key10": "66ZFvYJSiAXJLHcpy4Fogn7pKsuHsNuRaxgsTBpknn7Ar6asnEB2e5LSSzXBx6cszU2cchFaruPDjqjJ5NYBmNz2",
  "key11": "5QCcYFcRtQGKEEYRvt9y8Y9rET6yeqhe2G1zMc2nX1uHgRn8NFFVcY2pUDQ5Hrjo6VTLbKVVBjqKiUiDY9XY6bDR",
  "key12": "4dvWRY7tqis6c2Bsd486D8nJreXxiJ6QYmuDNBwabLgd2U4smyvcv8VCVzQ9kznckXdscWefpBTH3tx1LiUF1xLA",
  "key13": "4R2pt4iq52ngdAcVkrFkamJ8TbN4jSvsrE651BK5S9TX28TkyWkDVRDWxASmF85xH3czAvcgcEoKPcsRyZkRsjME",
  "key14": "3k744FhoBJhrH6BYsdEkkdBnMsGQHQoyM4guNKFWKwUsKN6VHtfiARFc7FAL7TUbvyk6WtEv1NL7DtFHWxm7E6FF",
  "key15": "2FxzVwqPhCotTzq5c1SbUxjHVT7QJnkxR2p2JQH9FsrCaj5xATHd8rqY9h74wbVRfYJVuBjtLZbg2pz2WXmuqbgP",
  "key16": "3zkTUukmyViQn5dbcAgbPBzuEqEC5C2LRsXf5YoBACuyLbCVY3cPV6BUoFHD3PnEdw5cUBbfUbX22SkSbr9fjZd1",
  "key17": "4ZG9TJz1DXwTFDwTfkoMsZ68aSucN8pS2i9qSPpg6RBE4qBupHtVTWDGfdhLkZVcNa9Fs1AHdx7Z5pGN4c3pEo66",
  "key18": "2v7vRt4Sm2Yn45YSbo3GxAw7gqFWqbku2bwLG5dZ7gtviLjz6XKtEoaLYQ1xhzfGiazdiMmB4Qagw6Bv5cQCworv",
  "key19": "S4LFtX5kJhp1AbXiQZ19rYw96r8wKoYqm93mwxDuHQ9zvKskuqCWG8qoqLgCSPWwNRz4kmsa96CKiBbHEziXhH9",
  "key20": "5MkXgCLJQohprwioGCKD36gykniUwh2mhoX423Gxxa9RkXMgs2pC9vHiNMEkS2opLoybUDW4ghHMB5TmEJ72hnVt",
  "key21": "563aswpzpe5yMaF6x6TbuWMtupstRucYp5wUH8J4w9QBUX9DKDWEtamorwPGKM1s6Cxw4HZipS9NqU62ChEo1Wji",
  "key22": "2MC8HK1zBtTKKw5zCGeuxE6VbxR4XGaqvNp1fwwhRoDo5BAqgkyw6BpenSRCYh5sP3LFF9jWsCQczT2UNVsqxX5Z",
  "key23": "5J26w2iaMnPQEhJ3cGSiJ8JS43vu3rka4HxGJwnxFdxLSTFUn57QdnrkoJBo2G9hZGx4bvH6RgVwjLq6DRDcsJGD",
  "key24": "2MkYK5kVPwyuBb2cCNqxFFNhjTW8ibpa6N4Z2xMNm439VTANSYcvhC9EW1BsY2unvz8dzYM4dexsKk5YmvWmcPaW",
  "key25": "fJLZ7qbY8ZgcU5WLxqbMTJRwWsGpjaWhjZHWduCmRiUrdQVR2S2u5joDKw3KhtDcoU5gkMtwfFudxfwvxmT9Xbt",
  "key26": "4CJ8WT7xWWzEmVxBwFMtcEdgYmbhjHHoWBRN4mAFCPjJcHooCmH9QSu9dW5fkZDY45AeC1ErdmwqixtHT5iReadk",
  "key27": "5yBr3ou6WPBd55rxasufsSCoGMDmvC2jqmkqcRXchKCGuDWRioUkwMZwQs2qo5ndKZrBYmVxnsVZoBxkQQVpnXvv",
  "key28": "4rh3dYWM5Xs34GxyEQZ9mE7zaujuwKLTViuPB4BCtnDb2Teup9J8mXcctJPvQbzJPviYu4eQdYiLUqtdwf41XogA",
  "key29": "2qZa1htejPj8DeoX6Y8yeu6u1MFAVefXHUNHDXxNqdgyK2gDg5V5vqXgXsrzJ57PnW6gdFkxENgHJzEBc2yUkCxZ",
  "key30": "4XiKiS1k3DHGVVtg48Lqw1KFnVFVA9hK1FpbpzZYPg4bvSNyfwg2ffZ8B3JdH9j6zbHMyUVG9m7xGETGZCoKUUQ8",
  "key31": "3AYEAj7xsMUWRTFP9KKWek8JDGSQ6eBoueKUxTBZr3LNyi2KNu7kQS9McCCr6tjrmHwWoLpm8Y1mH2cGpq6xnC4M",
  "key32": "5uKP37rkhNbiAmtmqsF9wxYzshWShY2UF5AQByrfA79C5vECrNbQmYYHyWGqCzpJHwDxQvoU4ypsHSfTd9ekBMPe",
  "key33": "35phkFbRGpJzS9nfZ3i25QBuEsQHneadaq7bK89ZC5JHWz8o2iJfGtuGPQN6B9KHQD7W1DeEjhZyfRWGS21XzQRE",
  "key34": "2pxBN4YCKu1EUwDBqiwuYMfJtNmC4Eh3Gjko5xFkixjgaD7y2jspzhUaMEc37d6dvHvEXzs6BS4PFgwhV3zdYM8u",
  "key35": "2wbAP6XTCLUkcnZY3LMGwtAvXCxiVSgh6rLbLMYwQoGaiXVLjBrzvzTeGHrzktLbezmfBVoBe6XU3MTTJpPx224e",
  "key36": "2kKZNchbMuaLvUxFTDXbD9eqDPPvq5zMGB9ga5aidzocRr3Js5RczteWJLP6yH3vHM7bd5s1fM2fndPuefPompaJ",
  "key37": "5ynzFZWkLhzps15Cao85YwJ1qQpqBjAZebStczfJDTK1eaggN6iiP4jMs4sGxAzGZYPt6rHABCfyXyquopohuCPd",
  "key38": "5czXyMrFPp6isJYK8ZRRz5qqDipmy8L337yCdHYeD7nkA9AB8iizkPkU5eEWmVUJJxoQxy7HzdzbiETFoDEHBRi1",
  "key39": "4bk2XLKfVi1d6fWFAh3EmCF29s62Fj58Wvo8bJgMynFzZZDndkQdFk6WAztv3Nf6zeGixZjygiArSFZkxGdyWHT4"
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
