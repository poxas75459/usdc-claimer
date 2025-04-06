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
    "2dQVuWZa5jJS3VcE4s9nuQmYrreY84VDT1VvHrDWe28yj3a4j9dPRK7VT6jSWKwqNfbCbLTSx2kaz74AyJu4vBZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZ4oM5dFCSyNzr8xEDigqxJgXCfUR7psdvW9gfVpzJ4RLN9jPfX1mSdmC1385apfoxZmHTpjMvVa1qNy26TQQyJ",
  "key1": "383CtzREmYUNoCjhwbiVNQfVc3Xh2enhgCKzF6sitLSu88mSbp84UssUe7cTPedi72K2NN1UMgbxVRxQ9miubYPP",
  "key2": "53nhTQWYb8PUkikHkh4Mn8heiJmcd7kv19rHj5KqywgZYcgssP2EvzSCjEpGvT81QvnJFXApv7XhAsniPZ7qG7GC",
  "key3": "5wgCKZ2UikMMabFBx8oh41H5qSEJq8bBFEY313SmNYinn5JctB28EC4uokm3jppc4Q4Pz13ZeWbuzNvZRFkw91wi",
  "key4": "7btZtTRNgBQpdFt4HKAn2639SJFsufHdcNazBK9d8YihzcYLjsLHUov8qknJYCPCmPgMSwoD8vN52xGaafk4uom",
  "key5": "3mvRGaueWFz1QMw9GWFyQtkStruWixf7xQb1ho56aq6a9oNSoVZXbS8v8QjpE7EAiSjUnWaZB9a5RUd6Wj4FH7Bv",
  "key6": "3mgwg9QE42byGvRMfcTj6rf9BE6hASBwzpZAqLiAo46TpgiDQmjkj2aTbRvQxRyYP6VmjUxpNKfi9AAZpHqLTBHE",
  "key7": "2BbX1GpguEvfkb9WJ3Uy1RjDyJcc13qnVnQfbb2rLi2kHpGVur7WhT4x5mHmsPeLdK15TjMPWdfysXQYZxuC31eb",
  "key8": "3BpFdm9pVJSeW3omnhZKmquo9o4LHUr9sfCecuM6LdFXZHjDwVAv5yyUs38cvsPjEQEQC7teiqfHJmshjQegZPQW",
  "key9": "55bRebp3hn4jaMTabdnRTFPMMEQHag5qrYF2DVgf89XYt5CrVE99sXR3ia2y6ssnw38AYipAJxXG2BqJUcLR9zbf",
  "key10": "7JrKH5roMDhZJ2m2151YbGCoA6bQW229UsUsUBzcwiSP4aBtnSfGAebGtdDGBB6Fd9KDBQ6SckZRNQnbZmXFLhn",
  "key11": "35xibPpoZkBwhPJrPHML5U4EHHLJ28vAfTFA36bPaJHqLyyVL7g8mJhc49FohHwMU6W1C9S1aRrEajhAUdPGapEh",
  "key12": "4wNonvfbW1GkKuGz8Ju5p4C19gWur1AzWXsFyawsvHVwnAkXd9gnobWJq6xUJNAJa3mVcugghjMDegdeg1RcxXH4",
  "key13": "3taC3sH8aKHGzJfEmGkjRNGZqBFsDP2V3HMRbTt6Vt2EpumSGbY2biKXYxZFvsFNFcCXMT3WZvBDDZVBC73QPL5A",
  "key14": "SP1iDG1ReJju6aErBHFtMWL6vuzF5h8aAdf5Z5BZUtyuf8ziTSSF1UGyGrpmf9YUNmNmXQo8FudQufCoRm6qhn2",
  "key15": "d8yYe3VzyLJsdooEc3JPg3yPrr9KXY2iK4GLGYVxF2ACj4Ntfta1r8uJY7TATzQScnDrrzo88CiuSw5hNX8fYMQ",
  "key16": "4gVwxe1DLCmXvzM3AP8Pxz3s7QcHCfEsBnPReyRW6Pr8q6r9ifDrsNme37hQNmjHoWxeytikWbp5qbt77B1SEu1T",
  "key17": "2x2NgSPe3ixJEjXRLQsaf8bC9xMvjERJr53tp8mckSJZyeDJudHvUtWgE8A5xuMZRCvKvP864Q258Puz4M6Y8dB3",
  "key18": "4viuvvNVZfGwt8ixYNYgJvw4JkeoRiGBnW5roh3fq2Q2vPeSxadfTDGTGW7RJUSdLQMdZbamwEvUErYhFMxFdjip",
  "key19": "51EzLz4h5hT8nze6a9uCgWRq3iu5kSczk3TYiPYJf93j84DyJKL2rWY6ELn4Q5hpUDMqGYgdTpHviwWdCEjzhFZ3",
  "key20": "3A2jnid6pWPEZUxxSLkWSs5BKoVavK86HwV57onXX1WE316mudBHsWCxNv7mwSXUSu2UvMTR8LzNY6CuJnsFADop",
  "key21": "4njM2ZDoHm7J1dxkeysEiKeBS55ejuTy6wagwFH9AHPei9RHs3NRDinSbK6VoaK5nRsyE9VjhocyTWtw5DKixbr6",
  "key22": "AGy2ycbRSdgpqVczvgB1XKRrB24SjYfzPVXypDyAEuK4pgEYNnEqR2v8orfLLnvMM4yQZjhvdwn8qYM9uZB7Ji1",
  "key23": "3RtXhDoLwQ2pqfp5vJbBqgFb6D2kfAk853QDPa75Na21NuKGqs3odXMvdz98ZMpj3Q9NvU35JP2myCsemkmfJkPa",
  "key24": "5yx8HpyQQ9k2CHtSwvs7pCch7vH5hzXNw2gL44QAKSKN3TM2TDC5Zo8YtARnJ4YnvmgNBoQrqroPJqxBWPWiYPkE",
  "key25": "3A11muviPap9mFfc5if2oCxxcXHoSrtvEFfN7V6R59p9pQH5G2xgRnK7waH1yq9ukDG5qQLdhGUgVt4xqXYvNwE4",
  "key26": "2SWmxyemQrJqx2sCAokCspMVdtPqrv1KU2FN5ARgm1gp4P8BhJsWAaKYs4w8ThhRifNZpdj1t6Wj9q2ApNcYcreQ",
  "key27": "49ZTT171sW6bSrjPy9iFiy8SjZ3wcbPVP2R7j9o3dkiuJJ3XT7RWYsne3pRqUMuZqABrLYYKtqUzkosjvh8v4ckZ",
  "key28": "3Je6vmSuzsmb6N8ntEGdzpJHWQmEEkQ9bvtZy7g3WGCswqQC1oKQ9jbJBNTSYeff5i2uqyYiNpkXBxr9CNgpuqww",
  "key29": "3qCYbLBgHBAFw6HU8YjJXHgKDDY3cFzj4Gp568sjZj5VJqQ4ZTwAvHaTHXFn3MUf4SvvVjqo5Hmh4HZ8LiqJ8868",
  "key30": "vHx6XM8oMUjBDBJEPG8pbxzKjbVMhuxRtKKTwXiNARbRzsL2XU1DMqgvb7YPKxagcR1wLnTXYYvwCwz7HfAy2hr",
  "key31": "4WYtCLLTFLkVtzHiU6XVdtsrfLh918XbbFKiz55S14EHSadg1CkY7MPHDkTDJtRvoqcZuDaiYBAaeLvsTBJTboAG",
  "key32": "2x26SZ7basvkeaUzKYpfwwgSuLd2yEydmXoqZkgvSAQ53eJBTWFpjk9KJqhR7h8D6PiNMek62HWynv518jbxqDnU",
  "key33": "3JLwJFxRsxz6Yvfd3ods6xYYCMNU3sq8wkoh2LccLp2RxxWMqVvra4czKbo5uoy4A877SrZiX6kJqfphZZc8ckSX",
  "key34": "2UG95yebsHoy6iixZf4gyyy735Ab1BkpqFSehNSTp6chpjzg4MfNww6et4sruwW7YiQCtw23xAiZ5Dxr3oeT8ikA",
  "key35": "42ejC84KzbVV1jMWUYDfhoih8sCgbEhMme2dm8h65oeLLJYsjrG1V6fbHewfyU1iep6fF7D8G571eSemztCQVge9",
  "key36": "5R9Ni3S9cHo9tryj5A4PwGW51yq2Tf26PXEYtc3aDyBYEY47qfyd7U6ggnSX1ASxfMUD9qiRDMUc3C8XMR5qyyG",
  "key37": "2edT9wY6odEpcmYvxwo7V2QMm5n467U5VeRvTVikrpAsWvvSdykcSJfHnKzcfDRgAsp5Wxvu3cDCoEMDbcS58XqV",
  "key38": "2omxs577RvXLDKnDrPc4wGv6zNwP7SzpaThM3GffjfX3vq7XqzVmBCbZpCFsvCreX7G6y22RP8brDkrZZoBcLfDn",
  "key39": "4iA1v1rtyJcyn1NSuRxu27jdJWwGADCr59CKBM31vKNLbo3mdxbcRSUkw3WQ7euNp7Mx5MdPykXKDprCBsEEjwTL",
  "key40": "2k2Xbw1w8iXap6EBcyRpVRR7sr3MWvnCRdxFYmj5s1wsvdc3m1LTTcCW5EBpb8CGdrmpMdH8Bq5aRaa6ssvLcrJo",
  "key41": "HStEyshTFbTSR21cc1sDrdEK4oW7P8UroRBqFp9jjPonaSRuDTj2zaZuaSPY6Fdb9dE62XdNc31AbwwE79DF6fG",
  "key42": "67osd7hshLskiRZUGRDQaBE1oQb12xgefCXfEcWrtGnRHaECcCYB9Kjobzd8LN6df2FRtVJiqUFK2kJpV94b4Pki",
  "key43": "4W4HY3eRNeUL7wGQg6RvBuyMP4dFubhRJEGbwmPo6S43ix8eM6oMGVshkdQv9Siqid9T5g7Vp9ongSz7PBohPzxc",
  "key44": "4VtRHSvM3iQMKZj3uHknUVQEKYXcDJucn3HZZZVYHjLhLQqksMwJxWuuEzV1tL1H8kFaGDV23dwzR8vP4ZcNEEFv",
  "key45": "21D551nr75wJgEe5U1QCdHAqCRZAeHMWuWc9hAQdoQ6n9MZQQM7XrcXQMLuz8AxjCZiMK2k8b8NdgjQ4HLCeUVZu",
  "key46": "TfSchoytmwmMwoJ4eSWYaNxokNHjo5ScQ8MgdTB1YEBDwep9CGeFLg3aEJy772iFc7Agt4qP5izyTTZqWmDtETV",
  "key47": "5TgHSSdk3Z8Gqsbr79sW7U5WqWjNcty8YNHRk3FEHAJHHKKRZGFvYqi7nYQ6Csbjq7PEC4xBZ9BFt4F6QC5nU5Jr",
  "key48": "2pEPGxVCW2ZTgiqEKMXdLAufLRFnGJhx6m59aR2MCaWjVFTgTssgNVZUjf9Sx1vWxGtrKv4EcRmnEk1eh72ubXVZ",
  "key49": "4dznkgDsKoQe2QKp34jw24wWVv7iBqQQWTHvTmCN6GpDZzF6XUx2rn2MoYvKRoc44VtqudBorG2xfYFpFooSqCfZ"
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
