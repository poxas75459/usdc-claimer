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
    "4zHuasgH2a5zBZuyJJ4y4xSkfG6c53Mi3jhx6o86pZRyM4oPhcXJZAGztdWkVkpZNKEmTPTzuPKjTM2TCJpA96PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5dnUq8ZZezg5F7QNAfsKrmH2DRWDYq68RyxeNbVXw4y6KgCVtyQno49fR3LfshxHq668FMBQxYCZKiXV6pydP8",
  "key1": "WVk8Kh3Bi4WK5f9UNHms3B6eoZgZdF4eaNLB8ix7ukRityj3KqQBMhY5furETG4jEgWYXUMhs2WDNYAa8xZKSgp",
  "key2": "5QetwDEbY77gsJ2xZhfWiCTg8dwhJRfkXKm4Lh3hTcmXXi3DLfc5iTpBPg9Aqg2fsoEcpRS3JxQfP3MkgYKLPhmW",
  "key3": "4mixqN2vPgAB2CmJT9anKsppW4Z3rPzcbQYqcTXFX73EgxwjyyJeENRVALsrrB27uaWwSvhU7aJP6FPc2e5dZXsF",
  "key4": "4mnHDHZnYQUXsarKkKA4orTMp8s2FSxTp1s1VqXEr87Rt75zfSKzsB3orV1Bj7qZ2TuBeKHbN8D7w1XiQsr5JVwt",
  "key5": "XZqYRkzNP5eftCfZ1tADLL7FuUEZa6RhJ5B1np5Nj1Tqw8D8zvSEBevwDV3qwPp4APnBPN8H28vE7Er4bFwkQTa",
  "key6": "4Ydn8eav3h8iVpEHSwtwdpKuwY9BDpjf246X3xdectPFQ99HtmWw2q2tXAY1jKLn5fpVKe3TJpCcpDUW21GqrEUE",
  "key7": "3jSNySvrD9v1qS7dFCAskA5MBc7LM6nHM9Kmd4oRM34acUPagJWMLCWrD6b66rhiv5UiY34kNNXxmR7Jch9DMELs",
  "key8": "4w1H3swc648r92CLuT2ughY4VbFP4cGYd6sLiW5c5guawe1aUcCkZzfhqP6srpFL43vLPrRCBPLfHWmf2ofJYNVB",
  "key9": "2cTPnYffrctHmhjtEjV3dgU53Eqz2YJkCz2Dckq9a55wDTW7tZmqUnMiUHg2qDThH5n2EkXdJ7p1vBH4K8SqwPdU",
  "key10": "5gco8mS8uBS18F4D8XNhuHpaveec2bEGX1e8TQUYVo8zTAEXzQ6BTHPqbmXWGY6zbAsZga3iS95RAeBAdwUU3dDt",
  "key11": "3g93VwFtMYNnMnMwptwiW1NabPdFzjEM8q3fQyzXGXBTLSvx9Xda55sp3Ub8tmNVC4ALBpTCZ8FHohLjemgdjeib",
  "key12": "odquojrYw5wXoM9n7sZGUuxZv7AGMqZttLq6eXpfAUApbStAQx4mZkQA9BfAowinPwHaDvp8ouK1s3RBsWFjH3x",
  "key13": "2EtZM7m1R69BGueVmfkSVptgLBXAHjLPXe8G9TLaswGLQ79Kt2gg2gzQx1gdUkZfGG1TcbZ9eqptQdPAEa1HdxdX",
  "key14": "5jmRmoM8wz536ndqxbnz445CSjukPANhCVM7ft9jmsENEPMvpLXXQQQFxNJJvRrwevRVNL2HQ4568SZYs4nYgAbt",
  "key15": "49CfAbp2EWKKzQBFo6d7iBusGRr27ZFKN6a8rZVVs9YasVBsYdAzJxGHy5KGYrDT1xofqLeuTaxEJpzogajFPLmh",
  "key16": "RwxUhcM5NEC1Ek7r39TqsfiPysVWH1zG5qFqWBxjusjH7cBbLgaVu8CQDTCfNHnomE3mA7tXWKzp3ZiJmuMec5h",
  "key17": "93Tuecu9vsFshuuVruFsA1MgLKyd4mRigWPPGrrTAy3EvCQtJiz2K6aqHHbs35gzu5hE8y1qXGKt8yQmgzzKhEs",
  "key18": "jiWhcCCJXRGkDkH1WohEVZiAVkG9UQBDEr6YKDqtaXKVxSwDAzshms35LZPiesW4Q1cdwUpDBNa3QScS8TtAsy4",
  "key19": "4oKdVjZj3VgiyDoC5ExeJ4ZVk9uDRAqjGKwWyuzoduo5vsTbUDQzwPCFm3eYY1GwtF68kkDT3RkrKHgU2Np4xjNu",
  "key20": "5GAsS8KAAJYALqTpMdRNEyYBhSiNiinZeYsicr1ZvswCTcTKwvvPc3exFtxQRdLpowgMyYk3j1br7Hb5bWREJgPU",
  "key21": "4YbpM2wdGszLh9AFjQ4RDwWzA9xje7giPBtnWJHBHg6DDe4suWZQypG6zrMFCqeGuTSXUvSKLWMK2UumtfY1rvBQ",
  "key22": "5uq8wPC9th1JMVkrsccCuCRA5PcpBSDtrK5bw9PgwARJA7o9EEtnQ91V2ruo4Ud7eSxYUYnzHdGpUg7TzMbCcrV5",
  "key23": "pkFk7zgTFdkrFoMHeBvwjxZuV4HqjEAbwmp5iRS1dNgnQBMTGqHjPKLQRtCBdbwPhaq19dJwxXdizkc2BcqNfpg",
  "key24": "mLpqa6fa2bpc8FCfRaWeLJHXeKkvfLYsHCV2z1jFULxWGtFm2NjatVsdHW9ZMp2EUjRYk1jC5YTBHoX8i8Lac9W"
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
