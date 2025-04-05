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
    "2JfPcbWKuLfw7uoa1Y2o7v3HiQAodJ1Myxp2dPe9FD6xKVDMEQMeNN13p9FSTcS6JXPzySdRETnTaFFBny78Zud4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8sB43kEsTDUNh7otEB47hBxv8e4nTPxXvGvn84FpYgjwZ4raSufZLZeUc8MjNVsA6ntLvY8AAcZn8FrZna6WNZ",
  "key1": "oVuBUB2fAGUXSLvoNUEzGtoSCKA496xRVB4ENuUaazE8cEn8h9Q3o4sSDKkjmVDdegjPRsofWGrzwMLpo8H1ngJ",
  "key2": "5Zdjm9LZLhcNz5wxrfCFr9thFkSfNwd7pMN6D1RuPCqrWmV6WNHmBRHnXr99cRQ5SVSUCd8rzZPrLoc1NoQKyvBW",
  "key3": "5EEsT94X5kYj2QXTKtQcssxXH34Dibq64q7rqzQW5gTUrhVqfQhv6ZeSDRiRXTjtYk6V5tVCEooD7WQB9kvBV3fC",
  "key4": "2HHxkNHwYDyovGF112ZgLPbUPfk8makE98eYgoq3beoSZkU9fcsnUugLmEStn8Tycb61eunzoYVtPNTtvknkHFkp",
  "key5": "4aeiJchR5k8WfaxvQA64wacCjqeXaNCj9BK9hY4pH6bU1qJrcpH2XwUcPCmwCQtfu1fLY8FPiLVdeNJukHTPSrpV",
  "key6": "4TrizsCZQDk713majzhxq48yZjpvxTztproAUBF3E1u5DJg3XiXTo2coEjJqf3iAJKgT5JWJZBZSQrEeq6YKhZbP",
  "key7": "5WAPZhK1smi1nPTSgP6fAkWTh2TYR4M4DEKfUsSZcFC2GXovMJWGowjPKhoWVDDycm9RCjKznj1DdjcYWuaWRRb",
  "key8": "38xy86gTKCKeUqG3KGhL4kX1wDLEdyP6A4moQB9e9DXbUpHErdfG6tQrWUbmndfM7vyJMATRE2A8zve4ZkZkUmyW",
  "key9": "4y6YhoTadkAM7BitohDnigJocNAhirfCTJfF2wm9qr8iNbkdgBWtgZ8xpRHzfYCxBDMVoyddnxMqXSMfDbKEjCLj",
  "key10": "2owRK51ZkwXeHoCh4csqUwAAM9Bi1fnHm7GRV7CT6Jfr2JnXvtsGw1BFCGqMvHtvwmHLqJdFfryUkj6Y2mbyam6J",
  "key11": "5hmgVkZTEcQJ14fAw7FVThReQqwJ9vQhHhxytRgsbS6Srkkcft65JcTo16zGbUQGyuMnhXpAM3T6nCiRVEzXK7H7",
  "key12": "5yarXW353oP4Rg9SBPViQuDCWr3ugV2J9ej8itf7tSMLvsfBRajX13rHC64Nx39Wif9K9oaXg4vqg1hkhkSoFMVh",
  "key13": "5BRU5953CJNYD8ux7VGtNrhHYGN2QsSM8Ek8sqKJZEhtwqHKy5y7sJ4ZiNCsDwgqkgVuhe7E1p5xcbjtwvbi6Xer",
  "key14": "4S29sUGxYQ77qvRF6zfqh1zKLSXAeCbVZggAa5PXwyhfHq9TDytBUPqBuUR913t6gPHJsmtzkD6TLFrgBHyoAJoT",
  "key15": "5vY15tZhey81im5cMK3iKBZfSfgKGBmjvqNw551MAp8fZTrtqWYxq7TZzxSBcGyLRtAAegSYvUJjaDtySU5ye43p",
  "key16": "2duymwZ3VoKJyDDw8pjyCMEc5SsgaTcsmHUZqAissHam1bPKFh6xZ5TUPvwD5Whn6TBTMYAYBym37MNHZ5AzNgEc",
  "key17": "22otsritvzxbEiRBXYdfct88bLU2WVXrqxe9Fu1EBeK5vBCtET5K4JuSacjUnNHQzbtTus3BPH4JzdLeErgc2j6w",
  "key18": "5HBiN7BSCChtP3fWtVQ9PXYhsMjgQsHhtUffjXFtGsLKJjGv8uwDsfe9YjWkNNbiuxPkZUQdy4iB8UgScjMkEftU",
  "key19": "2Z3ZVXn8yktkjFiySNMRhYn3J9casoQy6uyS9vxZKbcRQ8Cv2mQf51ngVPDXfKueWspFa5XiqMiwcnxvistDRtnY",
  "key20": "2R7WQLzVmgwmRkQi3G9UoygQ7U3KzCq6K76WxEw5qsWT9aVWNnYBqy21zQuv9kDDZCYDEEffCzM19GtCkwTCdEU6",
  "key21": "AUcp83soE33MWzu49Hx6EXXKTKsa1xpP3WtCcKCf3RxWhHDWNDp6pQJMKWquJYn4TTJihkXJaxEM6syKiUUnt9R",
  "key22": "4Q6FCyzLhoFrbTNNy6XvgNnzoMMevC8Fg4aBomF963jYQEktBbZUfLFk6ufLzBnw3the3AWKMg823KLEnuCENDwL",
  "key23": "4Z129mgjVLDtjmnf3ygDPnVtXqYpMdwHYPNmxBKxW9y1JRE8TR6aTiZJTL9cofMXGkKXmbcMj2bSuGkaQPiuRLzm",
  "key24": "3TU8MLMiYe1ngNWFAEK99BkedmbMzPaJr6yMZV2Gy1MyTwLDE5JAfdfwicwURLpdCu9b2HB7Tp4u1hagPYNsVC2s",
  "key25": "3yftEmY5Gt5jfpviCDD3sknYdapYvH4Xv284rAD6g543bdbpp3x94gDp6MVRZwtDbPaHNteWBi99ciyRxjjS2LPS",
  "key26": "4Dh99B15PzYbMaNyMeerPvhRZkinSwgPoL14jFK51uXD2Ugn94nUVHAt9xWYXieSNdeTG92BggNWSouF9RhvieJN",
  "key27": "2x9pfT4CQM8G2bGwEFkGd52aak4xRMFfWVx4LrVxeZeveZkESZxDaV34qBk38oCjNsN8MzVbd7WX8c9X1KyervHe",
  "key28": "38NEfamAii9eLAm68ozzcqWZo7bBM61hDnvEF6F75TNvp6ePNFH9XjArdk9pBDuotnNyxDTx9z4q63TAPnRwXavj",
  "key29": "2CrkU7sGqE4wGHPgPdCNzjPCrco2rS12auhmNydNB5akWcjoZfanHTW2QCvsm9PwhvmJ9ddjBDeaeeup9Z5dv9nP",
  "key30": "3qTYzpWfm4VKWi1ASv7KToZzMWJbnEwxE8nficxRi8yhFAKdSzHeGAYYh5JCpMDmvoZhaaN8qRruXsJv9NQy3Hb4",
  "key31": "4WJbpwwdQe2y1F9S7wq2sRybnnXzMSfQwUHcQgaW8ac39Y6b51nBTQ5V9aYZsjTcFdkFdZGGGhhq42MPfSrk2NFB"
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
