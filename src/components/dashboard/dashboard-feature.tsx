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
    "SVcPF94KyJQJvT3LP2a8h4cZDhpQmT3y7Juq59KNAdYhyFvbJaqywE2bmXjyQNa3TvLDpgzDdqnSf1TnaBXwnmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcQjuFS4riDi2RuoQBB56sFtByJVA1QgkC1yZihGp659D7DamzrkFJMijs71nALtWtu6epPshwmXuXzSXFk9aVm",
  "key1": "2QkBj3sHsxEuUggasru4JsbNYgatzjQs23NG1x7FuqUxe6G8u8RrXmhTkHCuSgQBJ7Bx4pTRHSLrpTpHwaRRPVRR",
  "key2": "3cTCbUyD8wQjXUAGA96mbf9TqvNLqeVRiHZDEGXX2xSLAih91KgJQt2m59VsQzAr7W5NLXgmockGjSc6H5CBXkcc",
  "key3": "9JFTV3VMJbfDoR1JLNqrw592Cq59m5sgaiXbhpcwuFsSTNtLEz958eVEKhnxYALaksahenM8RoMnV5TisqTATro",
  "key4": "5oBsSwihthpZajDWQnWPY4GFdxp2uXRoEEUa3JeaPYLJD4GG5uqXkpDtJQ79PFpBeHhixZhwyXNDVxT5Z6MtyBsy",
  "key5": "2ApqvbZN5gEQ92KznxuLpyNk81d8QPtSfmRNxVrRFpTPwmTBc9WSNcbo7E9BQPkucpJPsJ5sGA3cmfhCiWn8cTZY",
  "key6": "2SLQScemGDm2AWrzrVweknoSsasAscNQHSg6pcAX47SMFKEtcmHqBbh9Lo3L7zteugumYezZTr9TpK6PRHSotFkC",
  "key7": "3gBagKs7niaDx8u2GmySw3Qiiy1ZQESd4dsD2rNx5HY9tcb4fRa1b3Ay21ChB2UsVC8LHwUqhoGcRCayXktfrkrW",
  "key8": "PgXe9A8LqEYcwrB3FpstyibgwthzKpjtNfoefES5JmMTmuzFFd656bdRt9ufEx7hrG641jiyNTSnjdz2jiPaaog",
  "key9": "29GM9pSAD84gRsF8HC1DWD3akqLGQcyfyobJQjWDNHsCjUZNTQkvf46CAmenaL481RJadEZEzJwaMYnwrm28P7fo",
  "key10": "4mbJwgGqvWpgQTVLjs9D9YQ6yeWkYhdrtdx2E9E6JduXqDRPxDS9xQPVrSLBhn1aTAVHnbSnxZxk49XH7zwPwLer",
  "key11": "5BLevmjzhevbnktpSH4o7PaKfi2auoXaKyr9vWrxrExqZo77c7TottKwGLtwBKU9pzFiDmZ6zLoUepMtihdZhar1",
  "key12": "5rrTuiAD1fydRBfPvYBZ5hjhkL6JoThmnXQUEBP5xwSczXQMn68DdzB9TrLMRjPLxPagXNe1af6yMzT96dhKfmr1",
  "key13": "5Ar9ys2rA4nNqiGpAjRpzsH8YhyEvhTDJe6EjihF9KPpd18wMjELPL51hXswUowwxfgYYMa1RxAKFMGjSm5j3J2D",
  "key14": "3EkeDvFJ1vq1VULYrz3yK8kixFDezFkjnk2ngprX6rwcwY2x7MT5AbvtAgLyvuSBiTRqyCreoSg7aLF5RVwPAvA8",
  "key15": "2rcUTPT3J9LQ6wAJEMYAutdL2xAMCqBvH2b2zvtkTQBMvTumk7Gz1aeKwZHnqnFzizReRipoapLQzy8PpcGG5hsL",
  "key16": "2DQ2pmcSSt1UXmJwtbX6H7rnuXFbX35TrjbNhi3pQPjHYT2h4Km46FxVcw9fyMJtwRECuz3pPzKv4jDUPGaimEcN",
  "key17": "2kqbaJXpTwQS2CYcLHvtoi3b1EZkeUZrp4EYfHGtxR2mQrpRYQJXEdgtRTBg39hBLK1NSQuM57L2gQ3PfmYTEmb8",
  "key18": "4kHv8NwUfboUj5JRVXnvdT3igDb7GGMqAnKycs2G53FT2JgKEP21uaf8WHxKjoiLqvezJHyaX9E4XqV9HvYhrnh8",
  "key19": "4NoBFsbSN7rvBpJcWiX7Ju3FtU3yMjppa3zP6DTAe7NT5QnKmntBaaXKg4SwP1mF5um6NjknqZmXP4XFd9katCDt",
  "key20": "4cc45JgWP1jMEUfdJA3uyrpZonRPv21g4vsq8S3gZRNNPS1uU1Seipp4kWuAckRfDf2TUsWxCqjRCmUMQbDZ8hCf",
  "key21": "4C1oTvqBfsSz92xp7r3VpsiEk9TAKYMB5WW3JwwVGKCHrDaUJeccagizNLjHqofYtyi2SUpLhUMo9YZ93H7Tbzar",
  "key22": "5TLp4hbGzyVaDRkS2dvnF6KMyHupn9U9Kvy2PJwscSwyWziNeLSCwsLGJPQGoMv1eKSfzzQgkCkZWptB6SJm3moN",
  "key23": "5NfWBWjvP71ZUY194AAGRQnLxaXaxBRFM9B92438eN243jShfoDMKbVDErc45D4kJxXiMtsCfx7WyHXs4zfpJAEC",
  "key24": "2Mrz8iDTFu1untSJi65SicM3rwUFMeV9aef5WxB65ixSxLfUr5ukemtG2HXwYNdhobgbucnj9AzDXZ2gJ7UoBfuv",
  "key25": "3hrfKFQUui1nCiYY1RcTpJz5vvCB8qZiuCaUqnzAd4rt2wJfewSNwWBxx8pqkPZ22LUZf1WYsPE5qud97F6TjQMd",
  "key26": "xSr1wyeeVjqMj5aNaQt8cija35mJjK1cFwCSF9asc6NsshBmPAd1nMHSxVmV6ud7gjz27diUiiZDA2tMA16cTX7"
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
