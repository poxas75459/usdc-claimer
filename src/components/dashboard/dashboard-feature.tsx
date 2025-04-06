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
    "HpqeS6Nsj8BXRwktiLqtUfSkuzeenm7tVPNkkarX3QQNGmXAuhQq6XJ3XKs62xJ8gDsdaQocbFpHvrXHHka3CkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auykUus8Jm2BAUTJRGaRpNHiDsqBaPsdvkhJotTrfgY9uq6eicC1X26FFAA76C2qPvQo8v69KhAoo14p5VWJB7c",
  "key1": "Ahv1NWCXNTwsFQs6hMNo2zjoyGwA3n7zHutYcHNZfF4BDcy2c9w5UxPAgyi6hHEUVyh6nw9sg2Tx5VKSiCbhs88",
  "key2": "FXb6sdFPrj1BbmuipmvHbp4ygHEmeBXx2R2w25XYqRqDEnBQgLzUacABETtyGBJ9y8FSH8zjKRJT4E7cwoCgaEh",
  "key3": "3fJAe79qFQNo3abAzEpW29uH29mgHbMjFzcK6poKa5iktQGXuU4PR39LFXZZCbp5AFevY65FZ8LUvnPtdSTGHpea",
  "key4": "5PNfXe61gh8GZmxVdczMfAzA9W7ZktGYrvbQGku9pRePBz9ZaVAk4jCLaAcQMKn56dosx3tFsjmCNqPjSf7iJDoW",
  "key5": "2HSceUkPQWaLhCGfMXWF7yh4fGjnUVFvduzhXhM1dyhpwhrzoGRNVEF3Nb1bLdWtSzNRpx3Nyhg247QZ9gh7ZVvc",
  "key6": "agKJgY3cfpX7KefGx7WxLSboz4c3B9dxNzqCE2wHqV2MMEyzAux4yx6DewDvuFmyvFCQkEvvghXYNMqnjVUBmJE",
  "key7": "2YXbCnR5Ybvfhcs8nreAVzj6HjdXSBmPKdCm5edcDAwc4nFV9QQJdnEAqA3s77NFs19uxZyDJ36Fni6adeh6Ef8S",
  "key8": "3ASFtJ51CshrL9zu36GPYmL3dbfJvTgKwkjmuTN1rGbi26Rbozb4YA9e3L7NpDphZ9fFPP9YBCiNWjMqQLjDksH2",
  "key9": "3RxBxCDbmnU1jxi5DMUqVKBFAFA3NDe2gQNCXXqerT2CYCPd8o38PJA3rtFQfTL52FeMLqC7xvsVArpg9YyyJbsN",
  "key10": "4jRF8Ngm2Y8bwop2Xf16CTok13PQAccsw2zYVch5ByJd5nAFBRE1dJ7euoie7oMLqzzisFFUenqAJNTdLxPWzn2o",
  "key11": "2p5nLixnRU7v4dXSZ1KaftMPktHzhEzqppYi2VqvXiHX72iq8Tr3Cwnu3WxE8hLcsj6hVB9pyR1uBV1djz1U1soi",
  "key12": "5hWdiW9HXUx38rVSfLZmForokMB3xUwTi1KB2NYJQViDMJVHwHUbJdfGvehwTRdVZTq6arv199ebCeZLjwBXSbnn",
  "key13": "2zz9A4PC5p7uPRG5oXBnD5dRYFgQHi86SRZG9m1L1umWX2ZHjyErmTCwCYXzosWgWr1HXSXGaKtkjk3H9JJRthyd",
  "key14": "4HBz8Uz9V24GBQMAKxWQtCymwyEwMwZ2HcRTyiTbN7NT4ML1ERxnP9XE3svvTaayV8FxBNb2EVwbWfTqW1ejDGyr",
  "key15": "3fKKmoRgJCTn1AiNqW6UAdArrCReuyh35zRqhENtdeVgn2gz7o5hRNQYzFai6oJgSzbSGcHupCiaWx18Vx2Ga8iY",
  "key16": "5qhhhebJDbpbJkQeJwyioeJ5VMrSoJFa5YYsQBYRR5tauadcFVpdx8CjuxqsZMCytRfAeXdqf2Pr8rNELiCAbU4i",
  "key17": "38bLcA1wCQr9AXxoXZVQ8G5ex7K4jAmAvyLAMARKAoKYHmrgPpneYTUEWZXU9zyXWd3KbiA6hAeR5fmfNBjVFf95",
  "key18": "3JFXKvaSEA3DPjQdR3BZ4Xf9QnKadRtMLz9UhvnjM8TBukbnMTt4mMipNMDLZkqifqVeQGaFeTMiePsC3LZnANBv",
  "key19": "37GPRNfqhiaDEATyyBdJHfdsadLDWnCAQN3kCunHKCQ3mgrUjg5qBXXuG3odYuBaVtZ7GpqxqFWb8jGNKme96YDr",
  "key20": "31eCZHd3oGMHwDZz1PVJYvMAecJVQLNeszehgBChm716odFWPxAztZUxvYwJL3DowimxyEumNtWf1nLX2Ui7va6X",
  "key21": "4orAa5fTeWH4EsGt54xmAhmXiFc1DiGgLEeuKxkmQsVExT5vkeVkgFrU6Rm8rVpP3K52hJD551sarxynfFuTUoPf",
  "key22": "4Q7RpZPsxPkPP7vqPr4Ba8reMUroEenK8GW9uAqDCSXSq6FDQGRr5nprDNTU4wSyGZChzmyKMUm93wPmyzmjkfw7",
  "key23": "3sCA5jGnZL2nLxmuhN9bc5K7QT3EkDE4z11SVnucNycw9H6jrsA9nXQSDmxQkePog2B5jQ68mdx6ANCNXgntN74F",
  "key24": "5LSgRABNFzikTKLVySyYumMa8aAUVimWvvSW4VkvHTJufwXk3u53ZMkKEWyu231PNvdWcwNND9z7gsbqDfG3Gj1t",
  "key25": "62tGtjaAcDaaUaC58NteyXijERamsRg9jRRtbxW6tsHUYDJbah57Zijn8tj18Ev5VufHmhFBhFQm5nCdM1nwtk4N",
  "key26": "45NR9hRgV9ASkGbBjAS1JvqMHWb2PU8bFXpGbzFcfyf1iN7uheYm8tQHdUYDNez5Z9MAWzFK5VhotZKAr16UBz6g",
  "key27": "otcNfiFHUYPLXEnGLHz9DoEVwFPBy2iRX4B1CuYjBiQLxN5LPqkff4xHMSMxcEuf2enXPLyrA5gMtqo2PBE6qtD",
  "key28": "43FurxZjRJtB8Fh9NWQWZRxr39HXmfvsDGW8XrfNbRiFYssCyFvSdKiHkEvvMGi5VPzGTfdQvT2UUkWZ4mgUruiA",
  "key29": "kfpmwWxcqeMmZKYxc6jQf56ACNCRFZhcBWm3FurWu77LyyDpXtDZMHbFghoDuifsqWUt6uAAHU15arPWuVvj7Bt",
  "key30": "2uMoN89HpLbWjKcUJbV5oRW49te8Wyg9Xyb7GYC9xqEDsNd7ZCLr4Wi3LGb9tdR7uNu66fdAoxs3dbdmnWQBi9Ai",
  "key31": "4L9FtfBon8PeMd9o7vHErd4ptTWFgrEKw2WJFJ61V4EXw3ihGvbNjjF7jcLoqf9iFu7SuryPkBq1hfBQMtfdwWup"
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
