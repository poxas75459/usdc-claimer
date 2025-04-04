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
    "64nVXhBvhwAjVYZTsfi231iFxWPjayvvY7T4JaSbabYdBDq9Jqa28iZvmory95gYo4LsBBt39xStQ8sjsp6ZHt7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1oQDH8FBkHU4SRL6yqty7wDiaYzWXhWzDznJqScgJWaFoKugd9PmXGmgXjeLvfDgiGrAx3v4bL2wwiQd8GafxQ",
  "key1": "3n1oCBc7otR7dj9eDBf9LBLPJoVGHVFjHsLwwvMAmpmXtp694z2Jjzu9hCxQvwSbNkJw1h3UcF5mCq76SkHuCLwR",
  "key2": "5X2v6Vz2828R9g8QoKa1LMLSVTwA1oiRTAWVUjnhBMTU2yBtYjdZoM5To12qmxWT8Sm43zymWWNgEx7RkL9mgztV",
  "key3": "a51tpxFLSkRaTBXVyZahdQR1W5MhiRR4mRe7UcBDvVSSVLw25DiJqkbHLrijL38T4R9sr2TCacVHTnGNYbiqe7K",
  "key4": "4W178Hab5UKhwiocZJwpmcGQwsmwxWtimEVaSMz1zXTYSYLqCUJK951ewVazP9B1Rh8gEMySSmyw6tmgi8MfFLTq",
  "key5": "2gkZF5YK3ohtibcLNNrjHKJdkf5VZgdcvvnkHo9ZkidA78RwC76cDdTADExvWfozaeAnV6SNcsuCSniTLGdz6R2c",
  "key6": "YZPHdFs5ZLpDFSqoYR6mLVnxTqpydoKaJGrjfptRmAh3RhstJQwXGg8fpwSEHrSTVy9WnVnuvbTLvDB2KdtjzzJ",
  "key7": "jAK9iESoPUMVhWcjbGtYSFqzG7dYPrt9aJeBmcedMxNz5JRZvyA4NRiq3Tf4VNN72K33ZDLwYPgRWPsxgWkryH5",
  "key8": "62X65Ts4RnCWJticQcWi5DdjsxTim1q1ZBuKYkfzykwsEfmomuXq1L1QQbPatdGgzXT6CVRCRyNPMm7C6EDh9VZd",
  "key9": "3efbqXTtgchAFbt67dQ3GBETMJxfSYfNjUVkibxSRtjVxiwr52MTGQqR3Wm183hxe5TMrSrZ5ur1Ag6NdhU1JTBU",
  "key10": "5eFoAXLcVg83rpzFJYH32gU5hdSd6oP4py4fVWJyPexUVGtN9irdx8ULEgnbNHr1bzr1Mv2CYfCbTUHAYCxXB1J2",
  "key11": "4ThrrD5xwK1TGzRkBrZ8KrY6NyLcRdzTDFbSVbYF8WHd5QhnPF9JVHKoGwemA4EryV3L5Xmr6k9R8gKxdCNdz2T",
  "key12": "5FVbLAQAaZy4xcDYWVvRJBLCF7nq98B6fjMX9i3JixXJYJ1BZFjjxmpqjNVXJbLoGie5RNd4gyCuFaRazRcKNQR2",
  "key13": "5M65KY9utqPYGgFFmq5116bjsrJwZgwR68yzbMokCUksPrJ5rappQZVkwMJYjiC2Jh3ZNVwURTnKbz5trK6XN54v",
  "key14": "2eYofZBqmQAeywn6ndVaJRsAim4KGtWCxbYL3XaMH7WXL22L1NAJGw8ihscK5bvogptNdHf5t6wVB3k6w7ofkp5W",
  "key15": "5hsJ2GDxWE4xVHM5XG4bcZDMedpH8CmNA6tePmdXd92wM7XtPzzebLjXs64X1bsEU92D8VVrLdHpbjc8NEpduFyH",
  "key16": "2noztqMginLfWtsnbWP5Y7S3QSaoPCHJ3D3Z5FfxPMYHq4XGyoMgiBvkqjSdW9oLiCvDJ91fmpMNmJPuyzraN4Fc",
  "key17": "5Fk6TpzZtnLTmL1Cw3HQvbWN9a9W9V44uNREnbJA1pVQ1PQ1uApMtpu7uCzNrZycC9B6pJ32HJwjd2uYE6EDXiit",
  "key18": "2wEUvne1PU4bJfEo6iC96nqo6GAuCdNByqajMvTDRLXaQxQXSH1NbtxCE2r8CC58UeiUJKYhzWwvDwsvhk9KRnaC",
  "key19": "4TMKPop4UL1HPtV9Ye1ZXzgMrHrB8ZJfKEY9KBRKRsZY83RL5CKLJ7qUdeQGpJMUd2VFaoHHAKZaLnDayAbr6CvH",
  "key20": "5XzRn2CpaxyTzUWAwNC3fdgj4TNhheDYyhn6tN4jQM2BD7c9fTv9M4Zo2wi4C2uJp32zT1BnZiCxwuMHE2YkPxCK",
  "key21": "28m3xEVna2JMdPixA6LJ42NFVby8QXiB78b6xZSQLFR7yJFHXXM5gLsf7cG2issvQT88XtCKecvg4DLAetd6pDg2",
  "key22": "3yTeLKrQXXNYfr17ezX91VRgq3QCcDntNmvNVhwMqWvf3NxgdR9io7vDwyWqTK7ni1C9P7SF7nXqiKbtsUc5qgWs",
  "key23": "2aT5dzZXaDXPdunagxMfkXcbDjA2fqFK9iWR7JCnpo4dKnuKu7kLFX3zdt6nwXJdy278x5vjiGopLaGUs8LPtwH6",
  "key24": "oyZVtd3eYMZsxmoju4hezPz8cufQMBCfMFZAy94vaYruYS14Ux5727vRCkTcNFw9xwKW1fTA27W3x6SuTyQNQ9M",
  "key25": "4TCaxN2YVvJ4Ab6o2EMEaKF3GEQhp6rxAe8b6b68iDzWHvNx4Xequ5oVd6YGAa5Xi8GDYqxjVPzrYA6R761rFUsi",
  "key26": "42f7R368c8QDW21DZgXvwnRjQ2WkWmeiiXxfVM6oeUhQYYaH4ygMWpUWL2A63iX5AjvaRgKhMn8yb2LTujZ5t9Q",
  "key27": "4uKgyYSwJMxCynCkmDWk3ETdmQQUC1w3XskUZd2m4e3sPoUf4nuh78Te2A5gSUSg1dPXQCetk2d63robXvLJ9Qev",
  "key28": "cW4sK5PbZkiW2NiTYjhRz3xUE1Ja13YGjk2Hb2UnbbUmwQZcxrUJNpWxEPLCkA1R3V2HCFgDUsQWbu1VGP3dEK6",
  "key29": "2fMNcSuxPNrYqJ1oCCaeoCvZbs4Rzqc7uh3bB1v7rCRHBEb5iSUWSfT2C6Fok8rJytT1qDQ7e1AihWeBxcr4k3RJ",
  "key30": "2XzBGPr7AbvKf9TgxbD2GpEMYUVqHrxHiu5YCEEF47RGBe3AUR36qiiaruCxMMKYshSdKSCfubpJDXR4tcVVcu2T",
  "key31": "3eZckDt6yJc96vDbcAyuEaKcYgJQv42hm5HxZxisAxTGFmyRFFTz4934ppFtPA83MunLeoPfpxP1F1D9ZtDEyfhk"
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
