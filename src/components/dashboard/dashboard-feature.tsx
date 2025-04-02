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
    "2GvdoZDZewpbV4dEKCECK1xXf4FfTNTcutjrLTZHXNvbWmkmC9qVmszhvdi1XdW9VupFBh1L2mHvHRhbKiwgw7ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCrHLnk52Z8NkxQZjf17qihrsVenFiZX2gMsFHqw7gBunEVAyHGcfdxLXH4s2gUQAHPFF3eGZp1DTg8MQZXrCrH",
  "key1": "5eBQ7WtJJYQ4PGV9fcYcXTz93i6htQHUKHAnoenRGjHPWnFBdBVD4ef3LQrnCRGfH9knCta4r8rs7dWPwPQYuvN8",
  "key2": "3QDjRLhs3jezGqMRf8eJhveQ29zkLRS4hGhXMkYcZgrouqWsUtvbtjQS6U8xR356cx8pbqw2fepjVipMTDgJqyFh",
  "key3": "kHDWNexfLTBP2RXCMpbFk8XXxDT6hqzUR44BhfVzpQDknddhzzyCg7xZnuC3rV7i4tEjq62r8CtXUJxw3ZRsDb4",
  "key4": "cjCY16HE91M6TaVPNhtSFpPYVQQgsMn6LyXjFtXaC87oYxzzqGdsQrexu3hcGAismTEJg25UrHSMdujxAaTVc2L",
  "key5": "55rjDyVzJF6WVB4xnjRbmMyseBMZxuBAHEBCGDrKVYv4BZwx1LQmV3JfDG8qU63ssk4a811hYbBQAvrmB1PXMA5r",
  "key6": "3R5Rh5tq8xqgtq5kGy8nvhWinFZ7XPsFtyPmfvjHjjuDvBfEBtbkxLfuFYqrmDpYwckgQz1QexAiPmxbU6p5Xm83",
  "key7": "64gxbtM6fQZbrC6kir9iuuhX8zma4VH5Y3SW5hNPSuEUMajqyHhyFGnXAKWTYb6xdUWKoi2MtjWHvbe6HoWJEmGi",
  "key8": "L6uxv2QFVDPjsDNivWga4ye8xuZRD76CH3ikoqj73XTo5UmgapVds2MkHadUEX1D3GX7kcu5wXSzH8WNiKKNJPF",
  "key9": "5jzfZJ1RBFN2otAJ3b75prqcbXdq9EWJHmHLwfGtj5wYog1irEGZvYSKqkw1F4VJRNefmUr43DviFGK7HU1MCC94",
  "key10": "3UqL4Sv8GK6YaNoHtAovjwKteNyyGxrAFRtTJjbpyvkxzFNbpHRRechPWEACaRxykAhJ2TBc14phLoE47m1wKTqi",
  "key11": "4DRokZXpKooAdVMeykwvQXnjuivoKrwPnqkwJrbUj7kkymqywXJECutFSSokybnuVUeg2S9p1jPT43DDRcxCWcFC",
  "key12": "3EbKw38dVhWuTq1NqAhJY1JCDrDFxjUyZ6TnoN7NtQh6bW8axbaVxm8Ggfv2kmP3yMck9rYTZjp2Ji38pgwaRxQF",
  "key13": "VgGJrQpnTFFQ9uo7hvwa8S2LcV7XegY6VPaHd32MHRqeCxbJ1P93ZLgm7i2Y8THyvGzVxJ1S4rL6z68v11PjKb6",
  "key14": "5rcdqVo2eDXRa977dKwjvxP4jW9rpGiugfV2a7HgauVzJXg2UVjj2yXa2Pu2eFBT97aB5SVaKxtWYAUHnb4YXYKR",
  "key15": "3bhXQ96kzXhVpcYwcuc4aWZmw1HVcbF44ZLVbfwGD3LMEyCRTpQXRFM9z5vBCdxHhMpCsx2ZdB71t3DE6q34HA4X",
  "key16": "3p2rcHQBpWtG42ZrBmuJSGUKx8HmTcaPBm3Pu8oEowtkTuvBTcQNpiJiTZSuewNQbycUhf4reuVQ3Ufoae8XgdWG",
  "key17": "4MKFXaHRZTkkVke4XLatCBph9Do3Xgvv9fTg3ZRaECP2CQJbaHgxhpudsPRXUCwjMHdJpRusdUQrZqKrSDbayZXY",
  "key18": "4A3UjLSUF7tfzHQLEnymXiwAHsDNXEr8oLGAR2AtggTqb8SkR8CM1SBdxYuY8Z32kNxeXBk8W5WGtkhSpn2FD4Th",
  "key19": "3KDC7f3opiBnM4SK9Chh2Qne8VDPuspyXEU1sr9NtRJVRtzu9VhEq5iZXsqawqfLK9EUJppGjAM9pbaoYJm6Yegf",
  "key20": "EtXxvEw58wdtz7LaR2QaJmnQXbgKBHXVyCSsF1FiVqUS9s6AnGv5RdkMFVW2eisB45XXfUKh2tvQXfiXFDFiqtB",
  "key21": "5ybodbj3zha6Mid8ocVUVajp7BQS5P9gVsJJhf8q5iQxD5XG7yvdejrAwG82Pkh8hw6KkYS79Rp51HE8M9dEuxDk",
  "key22": "4zAp8PAuoNdoa7g8urg55Ea85w8aVPugsPjUYRUt29viH9n5jqPAtGCxUNfyCfKe7WhWS9iUdEbzD4mk9SUAX89M",
  "key23": "2wrxhxjia1cUiJCTGJ3LWT3LY3hmerNGpaezD18pckp7XFAzdBrK5HJu8XQXdLyBC13CQxAi8RYyJT7NSDcVMYHP",
  "key24": "3VmcQ61aRqmop53sTAQY8cKxh6UTvg5Ghy8FEwW1RhcmoWvRC3MkAtrtHdsgCNG9CXGDys8GeiAAmV894FGuDWiZ",
  "key25": "5dNDwpiF48ReT7CqsXF4F9j231knAXKrNDzNxRMXhvF8xWcEaKzyumWntACnBH45pvR7z87dKPUWMvfxAQ9MBQfe"
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
