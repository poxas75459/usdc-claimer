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
    "3tZahkh5wPL4Rwra1kqLLnFsnJequhUA4a9qeuAWuLa7upw4igpMLJDKq5o6eGhJnMyhczDFCEaCBMQwLYSr5SmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QpveWF9LrtSc5WqHK4kXGriiyGFHs1xRcx77YEpLCcLaj91DX5BexrAZENkZZFmRC2ToD1MpDrsMKv4rppPe1rD",
  "key1": "3Dwnj6yrGSQFv1u9Hvp7xJh8enKJEnhJopVAwNRk9NRDDkmXjcwcfaCLF2sutJAdjRkcyR9626dzQzEQJdGHYron",
  "key2": "NMoiitGPkB5vGmuBjDEF782eEFG75c5iNprcKR7sNH7u2GSR6E4pSp2oTs2QMzadKZP9x78aAev9LwNk1ZM7y7r",
  "key3": "2dn5rNY3ho5dZo15XXTU9XMN3oFUX9BdBYkv4QLT5zL5dhHMSzmQsLK1ZV9uF9Q8s76DDsfAoTGprRRLQstwNtHd",
  "key4": "4hh8jy6KYG6vJnNLCSt92rjLRsD6Pc7H5hr6oKdQb6z36tcWgcAFpzmuPUzNBFWEeYJ1qZQwzBGWzL1Gzh6P1eMQ",
  "key5": "4uYkoeQeX4LSLjASZ1A9gFrvzk5A7r1iz74GNkyffge6N6Bqs8to3bL6RxMpdTUuUNx7EsdeKTGL2XiJhDXdLyqg",
  "key6": "4NiLnEYSEJX3n3UipZvmShjBEFu2bdkx9cJJsnGFTyGeivfF26TZQxb6gYxVcAvYdPvtUCnu1br6TcncZBg9jq6B",
  "key7": "2d8ecGBtcz8XobLmsUGbDpGgVowfioEnqAYdPt42FUKXUkJD8dhya9LDzWekFsepgyPWJpW8vcz4w25dHwRTETB7",
  "key8": "3Kzn3oBKcc7AfEDu8wv1fXy894EKnGpqu4zAgtkrca76UcNVWMeJmjT4FJHKFhr7aCA5ZasCXvb8QnPGtXvrRLjV",
  "key9": "5cR7cQTf2EaY9AKjSkD3fzh9DdNEk6hzminaWx9rUe73eGox1XwSZsgzUnudPtNLLJAdvkV9tUZkuuGXgCBMwMiH",
  "key10": "4XzfUJuyXe82qNRscjtsn91bfYGeqALoPUdLHmmUNXwJ9sYjnmYanwkHeXeyfFAkMJgFUGP9nT13mEK75qf1efrq",
  "key11": "3QUTcqNh27YTBvr1ZjhJK5ibTU8frPvTJbwU7etxwRh6oNdXgbE4za4H5MXGrmZK7Ma5hKHvgm65d4hx1pj38Wov",
  "key12": "5xNNWkjbkTmhpzRw4xoUo9T8d17bunTMUTZUaKHWyrSc3X9TFzHFFij8dswUdFHwSN7Xs4fVYYzdiKHH6EG3ZKUA",
  "key13": "4KTM2UUCgRcPf3psosDxfxpzhEspAjzNj6G8JKNaE14xEv4nMDVAihAQz6LbNFuGAcEByqhLsscvjkCYxRcYh8NA",
  "key14": "4Z9R12vMhLS2vgqYyhJ6ji6NPStH1SggoT9bAsjnNXVbk1RiRbUqSao6CGbaxgJAxwyY4TW1k8au23T85Mc8XoGT",
  "key15": "2kZqj6XhX8tohCiYXkbhfUYvCwmgapjkVJetLncfKQFBGJXyQjuMfCDB7Z9zzjedQPp81yqJ6n3nivPSPxf4CKSu",
  "key16": "dGEhibuYYiwtb4uFM2B558xaWzDy9XQurtLVPqY4wCNffao9R5P3z4kwPmtdvyYNWpu1eNiANTZftmnRkJVaBzW",
  "key17": "2LoxeSGaNeSxSxHXn7xHE2TkQbwA5HkABmAwhZMAge2F81KGYP8yGvzW7MY9R9XaevAYwJpCkA3dMR5MirRwvqPK",
  "key18": "4wm5c3yonKs4AgSD4MFUsLEX937JfAEy1kUEScFriERbax4epCPeosyArTFDcbDASWp6hzjLNU8MjSNZr5keVrhK",
  "key19": "623oyrkZYpWhbxhKJgnY3ZDiAHCyGDv4bcBmoiRLaj2bHuRyQNTVytd6hf9EbsWSj7fTUXNCFQJ3QKgYrTVz1Sac",
  "key20": "4RZKSDcgZQibS5KAxp3hMPwCpbYwPf4KUPdkpgKPw35vh1Pq7a7zRGfffk6hoLC315o83rrjNMTH8u3KvDrbpJgw",
  "key21": "3TaFRnCep1GEqCzDAoZm2ejXL68YwhVTw1opM8KviJdyddabfAgVL45TRYYy96R38ebj8G3MMFoNFk16b9bu6YAZ",
  "key22": "2FUmA9dDh2LmojxuFWoRQrJdTNXb4q4WBSnboBiVsieLHoXoLkMa51RrUNfvLUUAJEkeQE3nBKYUfLussrQA9m3f",
  "key23": "3boStxxdaosDmkwzf1YQ3z18mZ9MYiEEkmta3zgRbArtSedRyqbN2uxFgJfocEMQj15bxCL9Kt5Y8twFCub3X7NP",
  "key24": "5hNq5FfWUgettQFrFunYd1NA16XPsPviGZJZpzMYuacfZ2QmdybLRoxnZvk7N2rhLY7Cpm4fGAeRPea4v9fnp1qw",
  "key25": "4LER17RXTReejFW67Dz5corgSTRZNcjfkr7br3SjGW7SC7Dp2drWCFvNzJ8gwhPLUkXrxQZByfNXViR6rF7n2nek",
  "key26": "DBeqquPUUZFWrdaoFHAz1UAWAUDST78qm3RoPqB1fXr3mKEyvyt8B81dDg1qop71FwvGZHhR4QRQDy6om1BgS8k",
  "key27": "5xTEN14S3MBAuGUc8PthkBbnLT59HQwSV4eVLsqJa8464TGXMUgwV1xDXm1HFBqWNkrgFrtBhbQazar3CQW4JUoM",
  "key28": "4ZeDSrJhET2ZEtsEVVyow5Akg63ZHKTmsQ7oRogBncUGtXYcokmKNJ9D2z2ztKBzWKoZ4vEDr7N5EWedgXtW8SYw",
  "key29": "3mfhFQ6DbCqw3AZ9MFnFsxmQAWRTtnRnxH8vpfkc4GuELQMT1wgoUG8hNCgtP24m26WHcDe1HrsLtGryyDEfe91m",
  "key30": "5ZXura1Ax54zKoAFGRYSJYe1Qdcjez97XNATx49o6p1LcFhVe62EA7S9BTfSuWzt3p7BRNE8H4PEqCQuyS2wVveD",
  "key31": "2iTwPVpbvXvddS74FtjjY5eRrZjEPeTF1TGWkN3HFMyGDhoaHxuzRrVryL4rFKCK5ahQfhVSiTYdpo794ZdmMq2Y"
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
