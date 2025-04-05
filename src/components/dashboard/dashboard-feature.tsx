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
    "4bd5tENA6u7rQuUAn6q2KeayjnDKGz7BNo8Q5fZkpYwtUai2BNk2TmQVTPCALvrxycKfxu8XYKQaVUDjxQepntMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDdW8za3ZCS9Fnj2entAYSrXf7StDhwi7kfjGLrCH3Rw1wfBKQiEamgxkLzyDtZjzqg3Hrhehbx9LYybqbnEvz5",
  "key1": "2hqQBokaGKQAktEVUnYg57cyF2emJJFwfjh7YSK3brjX9mUEtL8K6LaPXz7jKVms229m9aTEbGXKtCjNVM6exgqu",
  "key2": "3SCeTfVZzmTRbbENqXHpvBpRaza4L2JnDBB6M8F5C9kdtM3U9th4VMks32n1EGVGGEq27UQ5cnoqggSEgxr4NxFt",
  "key3": "5Zf5rufnoPi3P7jP1UtSUj4VxwZXfp4yAcqdjX6oSXUCkw1TiMpCDSzQ3DEdSQesamidRJGWin2eYN1dXhgAyv73",
  "key4": "2f5we96zRHn5JgkZFMFPozcm8iJsCKV927s3AKoeNcupXURU32bo4iyeX7kg9GJ3RdDTBx9xQwfX5HYjHyVEmdSt",
  "key5": "32yk7CetGqXpPfUNG4xYRPjuKeCK2wsYKUywkSAW6czbUZaQyjwe5x39mnygGSBbtzL4qCuZjVQk3jXfsUDewt2K",
  "key6": "4LN666Mv7BxtNz8C1P6kNiD14KcCarQU8ZyaK4ZFbbjHfcaRVCEw7m8JLcqC9uaUkv21eMAF6mgRd8vCeNRRXPUU",
  "key7": "2LHwfmpL8ZZnf2njZ5EaVdA18wpTSihXwB2jqMarBd9hwRfD8ywUU75rzxRn9kus4NxnYM9dzMCB1iwTD3mku2mh",
  "key8": "2x6cwPUQwyRG3QFbLtDJrxsgYQ7KZuVkYjpfujRZoNbndZ9s1TMdtPsL2FDV6XhcauWWN4Sy9f3ycuTqNq7BP1sv",
  "key9": "5VYedh9UQhd8bCyeLnyGrTzynEKs1N99KCr1JF6t4UX37mLN6hLMhxng6sRPUxhBpT8V4hXBkbMVdc1114mKDsuv",
  "key10": "5ehU533dkYLyepFrd4JArW7jHNYd8EvRHwdqNzxra4dzL1Hw5w6854AyZKSx5Ac96KmMDJcQw5sVjGjXi9XpvEag",
  "key11": "eefVAn5PjyA2g8jCY1rGpk4JPZtfGvuAtxgbP99u9TQ1B4A2xfJKoCiTfV7Vxp3Rpm7aSHJNcR6bQTR1P6y3nBg",
  "key12": "23DT15UU2tjJ8CCLEmmGhE4R5VCnuHaehgo8WDoMkeFPG4BFz84VCSxUWm9yLt3dtist7QVG4JZNcnVkFFWhZJHf",
  "key13": "p15vWcrG2mhojoNKaE4o5SiXDEouLdQ1qThg1517wMHeyonQmKMQPt9mDoVkKT6yw5GmJJCQkFnqBwBaQ4qanKL",
  "key14": "3TEVmQVCR14RtGFTXFykM9gLnimYdadH1zjS6Gaef3EyjGZAKRGqfh1gQco8MEcoaqGu6haFXMcTr1tNZ5zdd8wB",
  "key15": "4bkgyBT51d25uBDBRSCjAWHRpDMKX7pUL9agv3d2rSvLMauZi1M9DXPSdzriTJM557bP5t1Nu4tedfuG3YwymSDq",
  "key16": "3hhVyPGEJAswZJUoE1eAYBrZRHSRGqGjfmbhJE262UYd6fb833UixMHtGDdNoiHuWkMex78Sh4JG6PWGazJdUDgC",
  "key17": "5v5A1N4iCUpSJxhWLoEy375iwqXhr8aV38aSdsijzE88pynD3t7sVUM1abUaMZexiLjzTgDEfLsW695J8GuA4Aby",
  "key18": "5yqDSPzupauSFkdqs9FeKkKmW1BC2SZsTqDob3m6j4ui6zBuPJV44AkfKKXQnFen5Uy2XYkZcTob9jmgSaUZHFyy",
  "key19": "4DjkQf54d9Jw7UQqb5BEZv16Z5j4L2aTLpTqdrskkcZnVFVLJXkG5DFdcdtjiM2vAAGLKDhY9Lqk4g8RAxmsUnXB",
  "key20": "4994mtZYbR8jJFnHRfoRSECu1pmhBBEZQPA8L6KTKFZ85VzhPEUP3BteRaHqcBF9RtoBsJzW36vZEY5M2p1S11bM",
  "key21": "4rajtVSt61Xk41k3dtLvH7mVGG5KFLDouzjUgshbLnTBrmfSVZYpjMmSZtKVSSeSUfbiizGB1HvKER1apjqtHU18",
  "key22": "3GXBtaPQrc5GnopbrojHXRAPetgjBmm5VLVykku4d3cVfsXmNHdjcjimUYSPx3mNeBCVvy18L3qbcFqKwR3eNi5z",
  "key23": "64MjyYS8oBUq6F87UAdoYAtUi6NEN4dzfTF1Fjaq9ui8j7KV8HYkxeZBLEzisbw5TyQwiqQJLDTMSZEawqkkaJB6",
  "key24": "4czdTzsX7eRPdn5RZnoPjRiZ5GXMpHLz7bYDqvHwARCFSr6M6t3szK9oeVRiyudsZ4xmw6jB4bsyp1YzukpYJT3t",
  "key25": "P9TdLYwimJ3kdhnPgG77LJxXss5ELqZURfmopGBeeWLmzUwib74kKUr5k4XfPA4PDBMGWsqAFuwooZwYhaKtDHv",
  "key26": "2N31ZWxrb1KH5hiXGEYYZQJ1ZRrmaHPvfRUYm3wuRLyaDcGaSvFSvKxpZq4jUiB3BmN7GesYHwNgtCjSFAvGE3Ay",
  "key27": "3B2D8R9iL8krB851imE9JXkamWWFakrf2BV2NPRwUjQen1Um7APXeyEDeiRQ78LPL5bXrK36qi8xvyRNY1ro255S",
  "key28": "2s5cAJJSrTHS3296UpYCMtZJDbLR3rwyNiG2tvMubpQx9t8ye6VGxzM2tgfCy4MWvSCQuGNLpSk9D2VTXsYxRZyb",
  "key29": "28SJoN5EXK3Y7WBox9pjAD9WtsKgVmvto6Sj154zt3dQfPU4ZgM8xQ2QJ28v4nvKMA4mShZeiaRMULSrd8jT7GRs",
  "key30": "3P852QHLx4NH4UWyEHuyN18Etu9tLisiZ3w73ntJSJeZncUELf6bLvDpeKpEK8WioR2WrkR3S8B5onWxZwTZAnXF",
  "key31": "2T1aWhmS5KQeSncLLK7XaukztrjA8AYAfE5EFEZAfFgqXEzeXGH9EqMJKmf3S1QSgPhgQZaVYRfA6wxQjszDSRik",
  "key32": "5f7cSaYhNeYRGLWFPPmRSUVFun5UbSfckJmTta8sHxZMguXMsGFXZEVHX6spbVKAmbWckSjwBdomVRYvNm9rv5tW",
  "key33": "33fv8aA9VCavMqVcz7cwWcomib3SM8t51HXoFjTZ6ynjzJNN3YcBFDPPWFYrT6grTexqs9En1mV1gUp7PLhAjTxz",
  "key34": "5r93vdfKG9GHKvQR414zuo4X57JHA8JHsVzjj2g9Yw9G8wPTu8dDh3RgNyTf7AuriNAJArMRskdgHade62jUJoo6",
  "key35": "QThxDeuWNBgUEo3CHtDWWynSEa3xRxWKw6Gmnp4eR6xGMQQfoSuwYzjvMyTkhMKsT29agaotrd7tAzK2wH9odPR"
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
