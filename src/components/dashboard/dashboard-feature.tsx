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
    "5gqyU7uRYK9Yisvx9EkWLGofgkGBRqFKe26HSXrwD8p8X9LUZHqpDtMnCeS37qAebSNDuRKaWYayz6HzNvcsk5ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcsTZjRdpiSBq8QgqYmb7Y5pssmZGSwbxREuqYKMLn9UWnoFJpnHNyq4SKHYztPMUzBin6ccCinqg18hRzfCuzs",
  "key1": "2WLUF8xFsqJfdDCv6YiTNjqGdWxCgLUzDL11tDuDGaNS2Hk19AE9RsYWdN8BCvWxRBT5mUKPDokKhBAAWk9e7mo",
  "key2": "nKQ1Ebq26xENTZZHqPCSmH5KZX9o6t3juVUApdksBsBEo7zyrvAg6YsyEe9wn8hxE6YnEuqp5CZNSXDcjDXBBMC",
  "key3": "4GbmS1yscUuS3YT4X9eMsiUZAPjvyQnp89pE8REmtXVtxB4JMADnfzFjZV6kWQrH8xMv4p4Sq5XBtEtxoSDx57r1",
  "key4": "2q2Zbh33Q5fbj2L7yarGXtYbThGpaiCjVo7TWKoqFRJpAAmdKLSQJ8VFC8p6eT8d57aQrZUHya4mKtbwd9TUsx7v",
  "key5": "4sASF4ABZ76oBp9FRVHsaqdhzJPH9FARwxPRtCfxwUXwBKoEKgk7gop8yABi53G62TvLswq6UCK9DZp3RdKby2ax",
  "key6": "7cTgKfq5PmptYHi4AiYkWU7z4qVfkVrtsvh953mHLMUF8pd52x49WAujHcHnAYWyXQ7peM3nifWkp7GAMs6C9Xn",
  "key7": "gLo3PxcHNqALpBGNH6zwXspyu6bUsK4A9jdjY3VYwhBWNnADYmuNVYVKx7e7NoAR4BxK7F6vxGuZ9XstCnojhvk",
  "key8": "4hKo1xvfRvVrLxyEA5g75SqoWi3HiVuan4C3koX9JwACdxq3oPoCgtdg5NisvxDXnzRi5LsSzmANaVR5rS4sAQzT",
  "key9": "4YXye2pXMt5fZB5gZNdjHJSQFDhoBZp7xvRkN2yAxseZ9aqBGcyxt6kn2nCcMCP9HD7UD4gJbH2dWFMMQV1BqbUu",
  "key10": "5MYxsApUQ7QmU7r7GkuhkVBsgz8jkT1ACsskYXDnK12pL9UimL8CfrYchXFXLodsm92fCnUVFuPiuNHzWLgqbRXp",
  "key11": "5PVZNF75egXKB2qgJ8FBz4CgD7puqLS95BxM6kuHzsppjvgL5picXwmhjBrB63SgMQ9Uou686T9xyWnQabBqkGY4",
  "key12": "3B3mb66nPFBdvDBLjP3tP3VqEyNA5Q59yuA2j756nL2REjejHiZnXfTBVWZL9zYEcSZDkra8AYQLrLaMh7vyiUrT",
  "key13": "3fcSMAdactbaVYfV28Jk9NcBZ3FcEH9v8FW7XJB9xPb4s4gwzWQyvoUnVQKWXN4b3DhcuCDpTpFeVR8JcFu1cCMc",
  "key14": "58PMp8pGFEiqD5hV98S44E9nazvwWFfasNUFe7U1HWGP6Yu5S3jM9uYEwcvMYyLdLMRQWFpqGz1x3Tjfd6mw9w1f",
  "key15": "4zTK3eu5VENatMcgUYYbkPHd6er34j4wVwZrpCnTC3XAHwVGLRxeqY89dyoGpfcB3xypM4bftJHXanNjguL3tEBF",
  "key16": "4jR3fZb4zVrZ8SRQan3Mb6Bnj8HvjEUXs1J3yG8gE245uGYws8GBUoyxca2uhyuA3u9GJp2u6U7NoQbmC5SZsU9X",
  "key17": "5ufwqVAJf3VGTFfd4Cq9Yoo2hDuRhrBfVqXU2zgKPw8TkEcG4Gdcoe7D6EFDuTJxEA8CEj1D7EHH2bsG4f1C94V1",
  "key18": "3Ahwn9wwKZukJieDeQwUv2vZtskaHwhBtrsVe3tKEjV3DYVPXuefATDg2jY5x3fMNh5HyG1W4kgmzgUwi6w3hLLQ",
  "key19": "4yUiKMycu59e5U4GGJ1cWmY1qR98euVo7pW5PsmfsZuqZRCqVDUQk22Y8Un95tcR2wnE2VjLeGMw42ZmmsL3Qnys",
  "key20": "5xKfDupwEwBVK8RvigRgDjkQT4p58imwGvKaZdC3WzKRLiWp3GYbRddVqMs7RKU7rQoifJpmqRTJaNC9qBwtDWtb",
  "key21": "2pLBbKWzDGUxNu6YLe2LTnUHo6FQ3nBF1U7sUwVdk3Sr3qwvFfzWp3Nx88HhkKPe7jMBPuxcLi3aEftb4ZGBR7t3",
  "key22": "2miYBRoGYwAm73QHvWxiLn7TGsKQKiGMN8hH6pnT2mkWQzTJEAj1zaTWutoC77APd8emc9q1jketJ8ZiHo3Gx1my",
  "key23": "4FrEdviMzhKkUdw3MKPJfMVDrifwFaxpgKgWbqUwCfkCVrrJba2ieteCjnX1i2VeswExawwWDH6SFAmfkqC5qpZM",
  "key24": "3ouCwkVWgGS2Z3zM67Tuc7LxDeaTYbNq3pk1mqL654KuqpQJwW9GxuDD8BP8DR729sgcx8KN3uXZFWNonPfS31HW",
  "key25": "5JpvtggxnHaHLt1w8NzTD2J46nykyiK6AJv4SEZ5GpVGWTMsTjb64ERDYZtVCsHKwkBisUxavE34gCqGoaAtRLGe",
  "key26": "5MYL9TUKPJxNk16D4nwcMsLSFSd4rJwvn8MJDftwdhzgbhNzUsCY32K4hMaSETtLdRTm2rkiSBUBiGNcEmjQEsK4",
  "key27": "3i34iMaMxZSyYpwxKu93YFtYYvMAJX77kCF4iuCY6ZfAocsL3WtepYCN1KzrFE3ekigesGytPnpjHMVTCuxPeXi5",
  "key28": "4TkmrdLe2mP6BxWx83kdU7HEqC2v7HWJr5FjM6kHLz54bx5EMyD4fWvB2NGfus1NbsZw7r11RGBduVTFpZzs1yFT"
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
