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
    "5Zurkywgn8Em2ZX5RiPkEwPnTUNJmPFPmeDXd213aWpbMVtg2My83dTXMMM11TW6QTV2WZMhpToYTBeFzMAvf3YY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjTZkEhTynVnTL3UmnyAGN3sE56PfawXyprDK6mHc9Z7fZcRtSRZkYV9SQNqrNBxAL8DVcANCERWEzjGd6Q2ar8",
  "key1": "3CbiENsH61G164mKCzTqahBJYs4Wh36QsxuGvcJT5Hd1wMrkT7TRuHGgVprzXRkefBjGcqKCCLcv5BuqMc5Xb1qV",
  "key2": "hQjfGX4oa8ziiVf7yKjcxqt2eM3Fvkpy4Wb4XmhLbbWbXRUcLwr5uxx7awS4vLHnkKVPiXKPAopk76DJJcvrVz6",
  "key3": "4VGQCFhvuy185QaW8btW2TnimwqsZ22EjewjZ2Y8gULX8pz9bKy8FuPZnaCg5heK3Ghphph6VsPCGp7Gi8eJy4rG",
  "key4": "2cyb3foBeJdrxvd5vcjrGZsYBmiKXdok7EHLKyVgeNsSNNYtU7BUxSC87HyVFn1aQcu4fbpsczrQ7GZorve7gEf9",
  "key5": "opPreU7BxoiVPbwoxjA5PKQe9RfNVokYTx3pF7AB7JVjHJRANegCNa2xrxXPN3zieCwE3eANimLAWLhMM5sNKTq",
  "key6": "2qDytfGALnNph3YJ3xMw1tw1Fn7FxbEweveR2cq3ZgvzJ68JCYABnqonCatx74sj8eLqLGLuFxWXCAMBWTba2ZmF",
  "key7": "4ybWVrEfdWbVbqY61kgKT747LDEmPQM8CeV7tmT2GCAAiNYwAccG8QxRKZCFY1yzU4GrbXbCjmXA3x4EJk1WAzWC",
  "key8": "3M8VHkhqTFkaep2os5NwAbFcRuYnbw2UJT5rQVkSS83dqvyLaEcHaEMcNUbySnZAbnt7mKvbdMWRxR5HgVCefoND",
  "key9": "2VNgxkFvgR5GmNMnUsAc4yB79BstwdPLQ4gExLY7qaxDkg7k86aiZRQNS8R2ZMXwq6wFy2XASybWRWxf2n4fENsW",
  "key10": "4XeknBfzKP8gs1sDFtgAhfvQYLAjqFgdKfmmX55Lo59sQNpjGgRtZ8YJkMGTG82fhSKWA3h7yef3oieqKNeSYkyz",
  "key11": "5qGndKAEwWQ2V9KUA4ZZ938xVL5NmaBS7hkGj2SP9JPAnCf7yUmjwbXsFmmCiv7dnbnFqPRXLTrRvUsjsZ3ju1ed",
  "key12": "3BncW4dQMwXsg8qMBXyBvE6TQrGYNzRSvWRwMyzgg9GqeWZxKiHuAfsVdVadoxxm8L45Ps9c7L99xV3WUMnikJbS",
  "key13": "4L8qRJruF4f3ZMh7VcDbQAzno1q5mTJ42eNk5ZXmUhnZ6zymP5Mf3gcjNTCs7VPQJqVSEuQVrWDRsknvUtLSvBja",
  "key14": "2XZ15iHT5c7yTjqtZ5JdbftTFHrcr2XkzLoHeCaa7FW7n6YB1FTD6Hwxim9JwqYCtPL3YwihnmxQAG2FZpSfTaaJ",
  "key15": "3zVhYVekoKbBpgcLumKJMNHb3ih1FQqZBYPCUNRE19YuKpc9C7aZkfQ9iVeKzaqfuApyLdua6mqC27shwCfSPLGt",
  "key16": "3PU7m2ibzEAsv18Jnm89sV9hEPteraiJuiURTuAnmZi8msX7aYF7UPqGaorRdcjGh7gXHaz1TcguXnrU45uXFA6j",
  "key17": "3PYWJKqANHLKCN8hudAghPEUHioHBXqsKUKiyKR4LGhoXDE5Sdi1aDteEbz347fngUhMQa8TWg4BeWfHbi44TKfy",
  "key18": "4ZrwmtsHRxUor4LW6HhLSLLSSgphYMhrY6HYGcNqE7jd6YXjr9KMLLsEP2989RJhVmDqyA4276AvE4sLZ2krzySn",
  "key19": "5buXD9c4QAbhEoPsxVWbeQJ3zg7JLVpXqThyRHsRCLRrqWNFZkDosc1pP4A924x1YCBRCApwoCKJoxaV251b5Lkz",
  "key20": "2TeuimtsdfdK4tYq7vXzcR236zEJXdk1FpSktn3Uof7Tap3ULKmpZKnWR632HL7ujTgk81LZQfCaUxGF5wSDk4Dh",
  "key21": "2Woer9r2Sz5jhaptuksyGf2zLd3gdmrJsjUEjnAJLJdwEW52UkrfQHJAqwNMoZYQLrDU9sQFLHWQLodYnA94oAcH",
  "key22": "2bJ56t4rsUVnrLxBeaM6WKWpofGwWacgjAwBrjXkywKcGiqD74bB5EhopgDy4b1uRV3RBi9km9seALdhiNJcshwH",
  "key23": "3uKNw7H8KCi9Yr9VeRdinewJfJFa1V111pH84Z8h8t4kp1frKdxZv7jPcAcbBa4CqSatQTkzbwzV8nYzSo8cesUy",
  "key24": "55wGz2rVwKDNyr1sMw7d5TgaaE5WJ27wSFgngba1hG8HJnxUA8GcgmmGcjiCsE7Z3zNE8BBbL1DN4Ppn11N3FZvy",
  "key25": "255rkssBT88pzSSRe1Hf2XPFb2y1ok1wzggLYHYsbRn18ZgXV5W4LzyNmvdRvCnzYxXML3N4Rm4Bv3WcLkvWqZiB",
  "key26": "4TTWpgDFtTKoVnxkLiGvE6nMvPsEWdsr81wo1QDgNNDVcxdhHEUpKw31VffK8t44LNBbqWyJ1Ww25ikyquQxScDQ",
  "key27": "1KGLZSJx65pZvQinB9yH1SFSf5DqLteZjkCF6WmSEqqS3MyftJwSqDb55imo8MwTEXEUXYiZ6NvVwVNdDvUzGnE",
  "key28": "3Zg2HBhfKgFqVQfp89BbAKVXFpnW4b4G7o4PUxjEz5RQygKWCZKvvWfGDVGhCrK6a5WuBgJZDNhLej6Qj4CXNYee",
  "key29": "2uBT3SyL4doEtELQCucBqvvvCzVXpZVei8xCTzUwJeu85bCXQxgRid7PDfvaqZF35xoqs8QWbb2wwpMwNs7cA5Ag",
  "key30": "WQbPD9oymRKmWcAPU5Gdm4pfzuU2XEmJqXgyVJmFaDqCdfiGyUw3FNkCpiGRQwESHoh5j8VehDemdCWE5b4n4Xh",
  "key31": "5gPYG8mWuWNS8ARbXr5S2RT7B3PfsnC61MG4q1w5JJEF9eCZMWADBL1M3YoEoUrRcFVcwSjiLEzgr9119S1jCma2",
  "key32": "3Ybgcu7bPcp1YD67sdSEkYyuAXbPEzCR9kYr1ctV3AKeKWiKo8ycYpkxzKR3zFkLhWdsLF1bypXENaJysv147hZ4",
  "key33": "3zxKE8nJ5ahA3t2Pb2TKsuCN3hRqY9FNqURVYxT3N8ZoN64PGVCtAUu3aXbLKDpCf66BXF7889oqvi6mmLZGtYtu",
  "key34": "4arNJBmUN1YwszhtLK45QbMZFT2xupqkQkRDj85pSCQsZRamjp9U49TbSp4PXJDbt3LJsEHnxwPjTcDYqnztjAwK",
  "key35": "3H7pkTQDYmYkzS8YEfmmdSW1UArQ7w1bdmXaXjLyijSEk5X3mU5VA3aotCHnAwJPuCic9i4TUEGPwggKLNWSQWgE",
  "key36": "36WoSWFPEcPQDc7oKcwzyyD2dvWUXpEQSLbJe6AFVYTb4ErvKfC5rzdYBio1LF3WHDLBhhWvciEjFeypACD3hSiY",
  "key37": "5nzWokVFfjym7HtsNsfr4oWQvkhgHk5QDbEDZkDiq4QgNKY6d1MWCnrJet8c9JxxKyn4ETY6pej3xQDtN9jXbaN5",
  "key38": "2qfedycdLf3eV45fKRUyowqZdnDbeiUfZLFu7S89KyUppUUXeufGAvAPFuF3cbbUnHw78dNbwywRqf4TEFFWpAnN",
  "key39": "4GMCUA5RE7FGM8Lv4qTx12ATmtshsBGofHMLZyH6J2vQ5n4Po9Ewmwd1mmXqBGwUxS2cg37Qa3XCiPvbbWkZJCe7"
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
