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
    "31qggvrGiKiu8M3Pnw53EErJyngu7PJiKjbkuwu5NnCAFbY2phLXkY4NnsyRmNhJR5W83vNjHhd55Bu1vHaTDLua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgTfd9JhEvcJSTNx5hpWLWcyAmiXmfeAFotbzzXQ5y5QWbokjbc5GwRwRL8bZpygRV1XygkRgkS9SCtNDsfe2c3",
  "key1": "4t5T3Zwxpbp8VLQfG6XS5Y4fY1bZsbHNcdh3bQEkbeXucMCtccDtCL2copbjBUD8ukXoEpGo7EaHKKcfH6mtKdWF",
  "key2": "LjCuF8Q7DMSouswy1jtD8dF6gP6UugMBz4XDhxrB55TmHArEjn1qqHVnJRoSY8vq9eAtWvqqXzMswHjsU37HqbP",
  "key3": "2hhL6hHWJuXrmthd2Azn1pkK1ruKNbBAJJyVNVnr3bv3PDKqWhHdXk9wNSQXRpx3fV6KyQc8CfQPC4NNqwD2k1Gc",
  "key4": "2kGJjtmGZZt51y7xKyhNyfAhjTHLMAkZh9RrREDzbnhKhnmBsjUGkRg8ofNvegsucVxUA22rDA8sBN2LQpEL1qiD",
  "key5": "66dXMBnAek37KgdrZVGZcEyhSAJVCZNpHNm7VyALAUfnKUgMDv7uThqWe1cLFciXjTuffewL7a2uhixsm6N6Qb1b",
  "key6": "5jiQq79L2FHFy2YQ6kcXDGee9wPtMi5XoRgbZpY8goZ3yFSoygYCJxLSBTwqHMMxmMF5vGuej4R16FC8MoMRpjH7",
  "key7": "4x3mDksTepW2cJkYyE52ra7VunKyUsZnj32m1gRF2a26hyA5whh5rPCkqJWK8PV9bAVEJBbdb5pA1nP4Y339TC7q",
  "key8": "38uH5xp5d5eaprKq9w8PfqTbEhuS6LicGJZgM4zKicU4HAyTKKFjtHriA3Lgg7ibFWYV3tJv2UjPhKdZFSjdV3gY",
  "key9": "TKJcXBLnNKZEhpNYxz8L9RSKbKjyKyDc7aE98DtzKKrm9TZEQu58h29pXW46xdoGdkXzEybChgxtdnR1rSdp2Fj",
  "key10": "3YTbg8Zv7RVMxYWLdPqNnTyEH7sr27RmdGMoKGu1Nx1H5vKn2j8YF6h7ui8ZYB95WVJRsf6e53kfKV5EUmnXqkmC",
  "key11": "56qXNuvf7P5hjUrTcTRnHcjxjt7VyM9qmHdrkcGDg8ciKy5q19qhhgvy1AdX9CYX1hYDA1HDsSnt2yF7hFXTUaB5",
  "key12": "2QDcvMD3ZnVE3u7N1uE62YSqD9NDoUqcb3aLYQ4BE1sfNqSEBmUaqcgCutn8gjm9oxsLwYTLV6gT43iiD6gZv9QW",
  "key13": "3oxQpbg61yakS987Jo1HzNUSHzxsRgtsNKTRLzKSSeWiFMa32mfbZKJyC7iFVzNg9Npvp2nWVd2uT4ZkA4EXJd1o",
  "key14": "4RmNnFkzXjCdZhv6zb1xP5TwSXGbRHFkG6sjRi5VqGuiRYsGEkrszSYjGQZYoWtugYRKppgyPqimwqQavk9bZAfg",
  "key15": "4B5ch3F6vz2wcHAgZZa85zrMrL2uFT3y4DSWTSfufhAQLV5zahjYzLi8tZip3t88jLvuAgSufizhaA9J4xLzaaFh",
  "key16": "56BWrHHkgw9RDBxei3W6YfMaDVxHxfnjEYhr7mqsfrKvAH9mjPNg3ggJtjJPK41Mwd67gZgyfNQz5MeemeomAgUK",
  "key17": "2Cj1i5aj34Q8cxu2w7jCxpqVX6jKMsgBk8yQtF6cDbP3e5pYwemRJkLvdH7khBwaoa71zMnNmpyys2wfw9TZQ6pN",
  "key18": "4UG3b3W3ie3buQpBXnMP3tUbJg9vCRHVv5vkoq6Kze3bdk7jLnKJHWxfwLnnU5SX69Uh7g26FQq96PRF819y5UbP",
  "key19": "4fYNEdufHFCAtau6JUT9xzrRXTmkmCaUZ7WYiXCY1fK5u9otQDL17eeHthE6CKCXYcfXCyrwZdjv2D4t9Bg7ixch",
  "key20": "27nr6zUkRcyzqjezU9FTKiyjjsU8UivHFNyPo3pNGoGXEA16xHJWt7vGJZkdUHrAjMRyi9QNPEQgUapBRsiCXB3x",
  "key21": "uCDi54vukyEncnwmF7KeMew9aBosmGUsExPWp8koYATJvQCQx2ULnqq1sy51BgPXaUihDaqnjeeZeBbmTatwKcy",
  "key22": "5E26aZyr364yFDyfZeHKcp1EGyVnShSKfx9U8bNSHajcvWcX6WDkTWVpn3sig8WGWzjgzDvcgVB7yUUfMsZSkvsp",
  "key23": "4A6C2ADa5z23hBAU9qbxJvLtqRaEnJNB4sq4MPPucoirsnaUqgrvYr1a9sKyaAKPEbxmS9MwtENueCGU4AQhSvf",
  "key24": "3ttGiJHFy4WdVqn4Auopo1u42y9UMmBbTZtc2eDj2wZXfA32mvSQmBGJ4FJLm5yJYJtMUCYZku7NsiEL6cPAXYEo",
  "key25": "2ePzitU9Gydaa6zN8Yk4p8affX1QCHf5ZAa6Bu6jHjp4oyuqc3GAKznkYm5MidgtNvzmg4rw6SrmD9ZeGtAQDpSx",
  "key26": "2En8cYKyDKi3sgS84XP3eEKCxN1VqUYzkjJjhwyuc8x4CinUbnMJBw5M1H9m1Ex9j9bsNJ5BTSRhXcUnmpFhoyLv",
  "key27": "2apERt1KejLygSQYgpjdgWPipgA9dNExNA3tVApVFMoUiLAsiyMSMoVKduTGhCvifvp6Rsqtxgta2sYftqoLn1Po",
  "key28": "21QZb8uvwkecqFSFPhNe47Dwr1TkctU4oPmJjkuXg4nDB5F1au4gCAguxr84Vh5cUogJPR5ywaYqffNk6ZKc2KQn",
  "key29": "4yq1pkhnKLseatF4eSxpQ1D2UAt2DURVZap4GowrecmFU6yyYHTseoRze7Nb5LTCzs4JSmK3tRZRboKy3VTLb5fe",
  "key30": "2G5odHX43Lweb8ZXp9LkkPeKPGkRVPur3f7y9jRenm8fMEkjUQF5ybdY7bQq3yCA5M3nizReamTvrvyjGr9Mgg3u",
  "key31": "3yLz5WoHzAgFk9RYo5Tscnc65UxWQdheymr4EEsZiL9dB8pjKBdBhQu5y7EE7aSsJscrzKjBa49KmrpQWeribMfj",
  "key32": "5oMwmvzD6Y4eZrMbHPYjbQAKezG1MLMrZr9PRYVyzCgviZsRXkYSg5tLyaimagzPLJAnpr2PdARXD47828S7jdSr"
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
