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
    "3du6WeuyX6oxSYdVyBNDzCRgHvPhA1NBttaZvTMN8uAcxZCU8ub96wQSBhxgBi3sFfVMVUYtx9x4paCkGzrnxDdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLZsyMgitVx9zQxPpGUWefq4nADRv1JA7u496jFp9JGy7Nf72tiEiiuKc6NHKR5vAs1qddBRmZRBfMR4yXaBu8w",
  "key1": "5dgTmFwn7LfA9kbmnhUKFvZV9Nwi87TyXUL39NwnY8dLLAeLQPSUDpku19MtQJ3NE17UAy1EUKpUEcBri6mSTcHU",
  "key2": "EoY7NDLADWP3FpQXMNPDFRzHcuER1Znut61xfwm9yJo8Y7ehiqBivTDz1QUf8UWMnrBRnT9vrmTedGrfTU7xZZS",
  "key3": "4MfxWjvBfNDTJcRp5ejPMz3M1ubGPfTNfE8se7HVccUnsGCzhLo7gKmoyBvMSA9v7cyS7YonTjCTPSmb9VhPRvCE",
  "key4": "5NXrVrDe6kFKGQM6d99bx7myZgPQwV3aLV1dZmHkUPLzinHD9GuDkUWZ5w5UU12yMhLvGWYr5Y6SaWXPxM2HaHBK",
  "key5": "3H4ujcwzTdggZ7bCZnw6FpTjYc7yHvnkQRBMFPC3xeQGifQCZvFouGjq8BFSq3UpXmXvYpeKHejd7SJPMu23U4sP",
  "key6": "Ggq3cW3tpDgm4KGK3n5jC4PjdAe7QpWrmjSxJNSREsSs2XirpCu3D96bywsZPYPPW8B6T5yJSnpCcJgYhJbajBR",
  "key7": "3FwhqFNqqiCA2nhQjHPucU58Y5w8J5D3wzBQbLM9RSGEeEkz8HUSY5xmaUPkpLUWjADywB6L4WEr3aUERfVS7qEZ",
  "key8": "2AB9JTjTkScPkXVfcLTiEF54j39YFidc8Un1rjmFuGZXG9UP7he6mVMPzXZhkf5zkauvgTpkbQbjtPhp8tkBMD4K",
  "key9": "MsbVsAd3DBULrEoQibM9HSEkZ2ECbnczXdHKo4prixNYz4jQT6McLMvWZ1GNfB2KGXoj7fXEwyPRnSWyg4BuShF",
  "key10": "5b2Nvjr9QkD8cc7fv6P4eQCaUGX5NkvGZLyre1LHbKUKshMvNYJz9wxfxLzmK329K5e3WDkDf9Rqu2xcXKt4KJmQ",
  "key11": "2zrDR1fyGhaDBtisYBaHg6zh4jwhFVM1Dy17NKaGtNwXApFe5daq2fJbELuWfDC4iL7PDPX92h5s2wrGD4fNEdP5",
  "key12": "528HfdrnWudh2ZYzuSvtTHqYRcLa4ppuDsQvsX3WrUKeNgjRPHKxdHpoNCTbCzYCbBw3RG97LKE7JCp9E42WzeeW",
  "key13": "UVqqgzoENSCPkHZniHD5kUivnH6rP6QaEgQAQSFJfCVQDDS28vqAAc9oUcNTYqHANDz986GuWj7VfVCDA7FJX4k",
  "key14": "2xxYVdhS6YiYRuh86bZ2JpCikFVb6BYZmYtVs2mQdbpB2tyv8ZGWczHDepZt4ZPET9kJ2vaFw3KK1EU7RneUKbYd",
  "key15": "MR1R4xHwgSZhBN7Gn7n8x86QpbRCKGPWaC76z2BeL7wk9DNLt5H9j88eZBLfEPfokn2mLRekVKu16tZAKqJCRi7",
  "key16": "25Vc6c5TyD7cfJKbaLNBAdZZCuDWVd11ARthBP2NSDibkzW2Xs5KRT2cMFh8goSc2WzJnzi2F1bvUM1WdrczTPL6",
  "key17": "2C4suG5zwFqzFS2DCckYG8fHHqZQ6p8S9cBMpNXWVbacbvGWzk9KLAn1Mi5cTDvEEnhhn4zEKxrp9duwXex3SnGJ",
  "key18": "49RtUL8rmQdssJCDZtMMUZJDyDZqujFZvZ48wTREhqxcSBbBvEtM45zGtyhgsQP3oH232qXCUwS2sx9tLHhsSBUN",
  "key19": "5Bts8vWBAFBcMnwcN3ejorLCDmRmsWVZuBRKbduCFTsUdhQU6ea4wyPc9XaQ9mqmqXzCuyBGXuzoMgccVGmKyF2U",
  "key20": "6645KhbzEZjxq4s1NN7sMM79PSg5PMCpb7QUmjXcJF81gc8Aucbi9ZGoMgbtsXLv6ad93m5bCAQQLSC3DCYuJr2x",
  "key21": "4gX6ZrTADXJCx5JKQNk8MomhJEZJBNH6oXFgKf5wbfbzMHMsi4UnPyzWgqbJkiWKSGB4eR4bJf7xT8Qcf6s4nCgM",
  "key22": "4xgH7KWeGD2ofRmPiZ5cYYyiPtzTkwhzC9XrPa6hkXCEVxM7Gr12gPk1C5M664emFA4p66D61BQHZfxbxqwGzLKQ",
  "key23": "3d3vfH8Yc7VMS92MWNt6imPrswVLbLYipvVPrn1w28h3mDnm7m5pjuVf4AhCuS6ZKnSMPNDCmoyoN1C8awW2uApq",
  "key24": "2VAcfBCHPEGY98gH5WzvRM3CwPfoRHMUmJcVTrk8YJfj64RFr7yQxUxfRZrYgNT7Zsf6yjJ1vdvw1KE6SZrLFtbM",
  "key25": "2p96DMhN6tx241FE2e87aU2foXzDL7USvAfb2f14BFiV8C5aMbRLArDycpUGr8YvGViBnFytYAWxiKYhUYjh53m1",
  "key26": "5qPcc7PaQkjTvv8YNpQUidtqKxPbRRtgeatJcy8LKuhDZxu8EPmhctW8Ytx5hrYuc7iFTnwYLWdzKeAQnQWPQtzM",
  "key27": "5ZqNFRPPRgnkZQLt1Jt2b8xG6aptCwkk5JFVWncUxKs7AtPaioh932fuVrvMwWJNYWGyi4kcuBFxJRxytZAwt3cK",
  "key28": "3F7rHBppAfvEo4ZTgn4sXCydgoKZjnVqvWcxTc71ouK8SuXWUySYuFFgwTENmzJt3NuTAn7azsriLK1VQsmjz12W",
  "key29": "5rPFYPB59BV2QDEUTGunjiWNRQdZWaboEhRjQwqJgCsH9S5eoeUAwJjgzkBvhkjFsKkymkopHqLw4pNRoymPg6wp",
  "key30": "2gQfKJTW5J3SjmKmbu1X5TX36oZHyWGbgKgH6BFKAyoNGLhVnxXfPSTq9DEPYbUtMrZBhBZ3Bs5TUzmiDMuTQmU",
  "key31": "3aqoxTXatZDPXktHDbNZxmbGFxaA7FyuB7VhGoqePBRhuUdUTm4guj3kpDcK1eEZf6d31pXJXKhgESPvPXqpqRfQ",
  "key32": "2uKJS7Ga4MANm63Lp8T11unc7PbGGJSdnkvoxmAwcaEckRTRgLZbbJope8iaRNV83RQRbzPB5NrLb9s39fhk6KAD",
  "key33": "5x3CLcUnMscyMN6tSFksTn7rSZ9TsGEUV3PPL9oaJk3Un7QPojkMB3hGVBL5ZjrZdXg6AJ7HKYRHt1sby6TZA6c2",
  "key34": "5tkqrKmpTQztH1277MbmAxVzHD7CLoKL3DyGPQUU8NdfTfGUR1zqKb7egs7LoUwxqDoEf9bh2kSNVW8h6it4TNFr",
  "key35": "5ahTytS7E2h5EgUBhBgVWMLRBHZxM6oq4og6FVjRYdsxdBVn3dwibDoLQVefX8AtzoQ7yw1eGvTsRcx4HEaaHGQC"
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
