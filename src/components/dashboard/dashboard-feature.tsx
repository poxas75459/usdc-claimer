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
    "5Jhg313DusQdUmSsHfM9oedzA6k7xvH4A14eq23Y96k7qWJkkvfFZtZXUxC2Hr8mByAhCtsqnUxLGhALuNAow5r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kiZV1jDUgNLtSd868gvAg6Wx9Vhb9dztGgdNtCnQJ5dDTPCvSvzNDsbCagGvkrdoH1v49tiyefHMuyEB382UKtq",
  "key1": "duCEmmBmewNNxdMgnhFpqDJEYvePMMcp4Vg38kbGr5U5cwX7y2FTvbzw2qt4cKZsEmtNzu3xe79utwFMPRDnmp5",
  "key2": "3xziopEytTy25pbGrS3z6FWDwsareUmkGtewoQQezBZuPRmAwaGquNxT1oPXobcc8xksRsJorruHy9sAbqZjpTjN",
  "key3": "3XzHCyz4XCWNVM6LMdcYjiHZPvsTwGToKZTnEnEspYaqRryFGopBZ5po6jPfDvhaRY5dfPiSjrv7gKt5fdwxXkbk",
  "key4": "ghXF46ZGSFMHiksLmYmRkcBfBqCSEdVXcBhT1uEvRtMTPKeGpFxrFE6YBSKsRzPeAFyjBdAy9sX2vQqh1dGrscM",
  "key5": "5y52BoZneAzkfRAM3oWAYA118HigyFKERPogALnNfUp5qdzrXKCdEekD8nmhGP4t1gruk9kFHoX2iSgxKDZKgHgZ",
  "key6": "2cMpX3afnLToXAb5mGKrF8NiojpVQfVNZoo1i4aernBuDGxVCSiVokv5R1TnFH5VyN6rS7BaYdQGsTYTq8vh5jm8",
  "key7": "2qcqLqZxN2aJtA9JYiBJUUikfmxkbKeK6fQD8e8TzH8i5GrFHCi4ornXV59pgjuXzTfoADXkv2xTsTDBy5Wm6dFW",
  "key8": "qrAckcbYN1as76ga3Z7Ezuyo9PBQqo4HLT7q6djpejMp2jR19Z86yAYn8Ci33UUaJ5ZC8cAnjGAtewym5BhAxeG",
  "key9": "MvGk1CuZ6MbSNWQmaeJrtdcqpratY3eG48P1EPztBN7wub49vFrLDjpMXFN4XW9f3dmams98WGTGoT8q4Zpo8S2",
  "key10": "2zayvrfxsbgoCA6Vo2eGe4fdaFG587MwJ1eq4NpvSBwo3nt5aDx9wGohHuju9eiYz5fkW1H5XzRwqhVDM12gCWPb",
  "key11": "4KdCePs53suHsWCHfekwXDfgeqKjMFHnjPgFL3K4jd9qtQqfMUHjSXm4Y5XXrjzpxWvkQqN6yia16KLjLgsjsK1W",
  "key12": "3ibgAWLoZbJUs5fAvUsRDQNRyRGBXKPH63eNuUNESP46xdvGs33bRJjJtBWe6VPWDVV9Ud5ErSct7ZUg1ak9chmN",
  "key13": "3uMhGsiygy5mnwosf7Tj6ywh62LKPEi7oxWBHUguGjDK8MCJJd3TQpdt6KsLo64sn1pS11hvVMoC7AonxZwyi6V3",
  "key14": "2YbfyczJy3eFe9PYY3SeofJYNsPidpmCgRGhVPJiHwnYiXcRKbbv2cQ2QmccCvcLiMK7HBEuPuwGfmMddYgHnHms",
  "key15": "5sgoEgRdyQAbu4qKsNvsHU5RYZWhbP5p1wkKowAbaw8bQ6rhWv7GAf8CT2dkjje4mi5zg2ExSUYxcXzP4ZyoKmB5",
  "key16": "WrcCPZrHKNiCMT9tJSpuxFGZdNvdByaSNrBH5MiedBYY87yWmAKeFN7YnxLb82rtkUqnwF8rpvWCNyKmcxhr31P",
  "key17": "5vqbVJrzYKSDJ8cvVHQ9KipR46FPAyCaxq3thPe2E6xXNL5ewh4X35Ux3CnefR7WXtNJNCN6kSukF2J2LMvr5ezn",
  "key18": "4jFh6wuqwerEAJqn5YUUH6GnxU1dc2cCQ2ggThfB4P8qDgJoCTNRukUVDRjTzwGDcMDhyQMUoSMgpWpNEcMVLmv9",
  "key19": "wbrgqwPAroUpxyCiDhmvF4tKiYLhopLbgmV5uBEJcBm1pNyz742EMRtq3PFJaJEUPh2WwPomavruVrTr7sdaM2i",
  "key20": "2MHGYgVDc5ATnbSfJscfsYpKQNJNtpx6jjtWcbe7iRgjavXmUyL5RT5TkNVKVdcDRgtuN3hf7f9gDAyKZnniLASH",
  "key21": "49TKJnHaRw78m6yqQPpAtYV6ScFbLxCwBEUeeHAnoKsLJKyZERjK1b2QbSmWvZ7JwkCAU68X1mC5ZXpiG1JS4CjF",
  "key22": "63h8JtY55sqDXhZ4L9cpNyYzzAxpyXSuhdjPTaCNWtMZUD3QefwpQfT3PEFLmuFMJJEiY9uVqdWU8rr3RbETD2Do",
  "key23": "499jWWmAiy35w5gtXaZ6z7rXkw1uux72U5J7BXDjMM375bh1fcJZqtrVsjALRncdJyQu3EhUu2CCaoKFrq76FaD9",
  "key24": "5RruRhYZVLqo1SgZXmgB4qtEUZzjukE5K8azFav7BJoFoXuTcutfJN549ASwoNf6L6w2rK5JGP18B4C9rPJqVTde",
  "key25": "5omC93Jh4rZS8FHCpHJQay5ZR353X46tpoxA4AWMTo8qn9QzLLV8T7PFwDUazkhqS6SDt8hbhEJiJ6uCnUf7ZUzT",
  "key26": "3z7UYUr4tsLjZR35y5rS5rYH7Wg3EdCgUyLtmKcF3RnS9gYra5WdJCF7erdraJ9Uu6ikZm2U9uuwnxHK5oxNFxQP",
  "key27": "5434Q3h1ubY5yXhmDjnq1TX4rHqjCyr9sdidQsgkDpGL5FyX45hNN7itgYV3LBoACdtWGP888AuazQo4FdQgXEnX",
  "key28": "2FpfEmzZ5PHSCLT9FmjBuuXnSEb5CqkSnK4Fp1E5hgi24Vk1XaGACfeiKeYviCXEuP4C4LbDcZdCpRWthCtbKF8w",
  "key29": "2a7LG4Fo3V1WrRAfEXx7MXUfYE3zmudY7nJyLgzoCgQUzahTSWQz644QBfas4Vu8JZVuZuLBbRh8SqnDCmFDJows",
  "key30": "3tQq9PuUP4Q4VYbn2j1EXajT7vE3rM1zLA7savNV6akJLn7Kebcg8yXt3HkdtNnhfT6z9uJgNebkuypvYVZYpwD",
  "key31": "5oTJtBa6qykJd1b3pXzoa1i5pC9uaz1Rnm2piU9LLNSpfKRoPU2nC7BfYjCRjZ75nqLv666MHWHM6VqsJfgwSzKn",
  "key32": "5FHy3EA1Mswc6GMcsJhtNiiADix1khnyBtDHGsq873BjCDXRZiJs6bRAjnFc29Y2QsZVRb4KH612tabHkFHvf8wa",
  "key33": "4CmE5K5svsLppheAtmmfp9vpxNJUFMcRdJbg92FqPMvEZe98vnFt4rMZsQ2ak3Ejd69s8Nqm9G6bGcAqGpArJmVR"
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
