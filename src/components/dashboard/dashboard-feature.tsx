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
    "44oeKAQmosM2kanmew9PQAbywGbiK2mxU4pApnMDqjTuoBVNxAvZu9Ank8Bv7Damn1aMi52i7mNUzuzXEWoWycbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcREzXWSd1Gda2yNNbhpt7fkZ2WWQi3M3SS2od5smhLUZoZvji69T4mwiEJmUm5DRwh82WDjVKE4uWbEqYK6fSz",
  "key1": "2vgre5evfWnNvfXCz2xzmLLRH8rhVuGqE4Vox9AXVLvtVHj5PtScintrAFeqdQuKWYdBGn3HggacaVqfjZvEtr6w",
  "key2": "5v9VXuDSQ8XihcF75uzCYQKWWP1UFeQVNh14N84i3rzFis8ABTpNa42R3z5znN4pSxQW63HCHfmd2FcWXumhcfGT",
  "key3": "3gCMDHh8h8S16T13tnnUifjgLTm2xvnyVrhvqdLJgUFKmRMJe1FYkZgtweZnDeJfvQCW1vWdKgPmTtMw8ycU4ATR",
  "key4": "qezpQf9uiBPKFWpTGbwrh8PDioScMegez6NtAUt44ch7nEn5oFmwAhW2dezmrnzQR77tsByzFXYS74vLcHks8oX",
  "key5": "5dAY1Fn9TL41GboXxujag77LJNxRgs7TTdniXMYgNv7XcAp4xLuZubVUMf35dVKrcuatDF4GxwHzome8DNyBCPWU",
  "key6": "5ehYnSDKbiuFf2snSWRaGFu6e2nscj8A9UiTA1N2Zf7D2rVAurVtrEMjNmM1xzwB4X7dDWEPeQqFdy4DXCMxemGf",
  "key7": "5V4JbkytFT9SKjsqGZ3sKtazk5nwPSgRjvEVr3mophjaWE9YUxoztCrvEMBNUqr2NCDeyFJ22svyDBU5CpRugyc1",
  "key8": "yjgKn5YC26h9jrU8jg8wNNbhtqS7n5RVXpCV7DuTkdqhEYJhANgppZfN3yr3GuD4gshapVoBxtMHaVz6gzfw2EH",
  "key9": "487k8SapsFLMqftrB2zvNJs5ZwF7UHTWJfHjjYsZxUnfA2NySpNKUutwSgBPoQ6bBNW24qVTg12JwmAZYygFBJhp",
  "key10": "417V9FskRkxdJ8R5K76QgtGQ5Jhi7soHNoUw938b4S2xY6AQNETXCYwTiLyQ2yosm9doMZ4xkg2cchY9ynSTQwaJ",
  "key11": "3XLQGik3FzGkp2Mx5rDFvrvACc8oKNqfpNwfk2Lruowvrv8wWUNdrxro8XwGDp7RDX6KLKCjQhcXA85tQQRLUD1r",
  "key12": "3msqfi1fX8GYr4nLsJRtuy6Kro4yALzU6qB3mqf5VhnajDqun3CSRBc86VbK5iPPXJ8sttuqF6p1t9836gcj1an7",
  "key13": "533ZJa7u5Ps1RBfp6F41ofFPQug1772jEvFv5UdEah83BLW9HZQYksnpGV3XG5REx4SN3xTHdA8usSjisuRbGr8w",
  "key14": "eXvpA2PDTcBAo8eFwLtXeQPKpAQjt8NKx76sKrdsvEbeXxm9s8XST7fEvKhX6Z5YLD4mCxnYnKvYevHeAu7vgoQ",
  "key15": "5gMmJhQTXKJtas11pzxKKcvf6wx8VYoMMRZUd7JqSPXSMZwxP9yjYEsNrnjg3knVnrHUstc7ENE2WEn8YdPsjsM6",
  "key16": "TrDvRFPDARvVEJLCGp8KQwrUsw9ufk7ykYYgb7F7JtbF2WWCL4o7Z3KeanXtEa1JBrMs63R3NGHCPdxyMssYFSC",
  "key17": "3wnMXiSH7eehrtqp4yNRVBD75zjky9K5KDLFZEUuyHVZndYBXott8qaZLdfVBB72pM7DzmqCss5HVvh7EMH7wm3n",
  "key18": "4fcz216ZSYMjoUaYunHVfom6QCFWz1YK86cYFiie3XgVo8VLkQjXQwoqjbpk5ZqyrZFt7CvFYui8iCYnBnrVgUDx",
  "key19": "65VbpZw4F3429d5mBSVQdTgs4QYUApmBfsxUa1zuLWmBjXaxyXwXb1xfSjYfQ5XUDNKsez12rghm1PjV57898VwU",
  "key20": "4KTtH9TXA6BrzPAkjxErHBZak4KUyzSfra9roxm2hjRxTJL1YYj6VpmhyTsPU57Qzx6XQpxcEFnGbcv9wWgQRdNf",
  "key21": "4kFSnZb8v45zRMT7BU4mSgnHLSbzHGjUBaVwPoAx2pYvMw1joyXic1drX8gHN8Xcsb5wwSp58GN5UPNeSmebvcDM",
  "key22": "51MSTvsALP4JPs3x9SFfpbyfLFnDHUgWpk5rK1JkiiWVDN5Eu7ZecbKyTzY4Ma1ap9HdDKa1npXBa86MwQ8MrG25",
  "key23": "4Kg1htsUcxa9Gf1M6AfGBreyvWtfui5RgtZeqpPTFc7b2GkeQEjM58KJGFk7mZCPcWx8UfcHLkHVoPU1LZrV7QtT",
  "key24": "tmSHPjVp6JMjecT7Sa7GCuqpDwWDeyeAZTuUWU8xeFbAetHpoP9NqC18pUXVvzkt1jnGpHjyHGdcJmC3iDzcYxL",
  "key25": "4vtvTnAfqG4zzJ3VCdDFhzVbsva6JrXCrdqPf2A8esyGAMStLVEuE7PRG59S7hiVhcQJWGrm5zKmCqHvJkipqB2R",
  "key26": "3RMKb6fUcG6S92RgLiauYUxShgnyrmbiofWX5SEQndRxWXeqeY9ky6odPTnEGmRDgCeCFP6YBJQo3ijF46Ui7m7w"
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
