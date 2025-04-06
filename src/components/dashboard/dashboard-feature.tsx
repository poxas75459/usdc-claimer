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
    "4wSXRdV3Jx1mvmPFgKkHrTHokXogpEEtY5HX5wcxLebkujmzFdEBWMugwSjhYKoFBZATZhg3Es7mYwaJimQuNJY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PD52ApGC1CFGru2oKHSJW85tCUu9hHQ2u7pF1Hzi7G2TSunhKBDk7jj5srQfk51CfAe1nenVR6ViX4NPKHkZrzC",
  "key1": "3Xy43vTpFiEncPr1NoxVHsy4eWoUK2x3zr4AReyss2bfpaSN2VMnEWY8hZwnrXrwTJzixwd5k5VVWurpzduMvp2E",
  "key2": "5935RGCdqLmPZfeC6UjYtk9f6NS7p7KQdZjxaW9wYnUd1Mrp9SPnBvE5TxtdXpcYUD3UU9AMRnQbkRukG4Ni6t83",
  "key3": "48WpiNUv4Hr8kzEAfcJ5j4YSkp3tr1MKJpmb7nPEg9UVE8rszT6cDYrisMiemPNR5coESB4KLCcA3WcaFpk6a8P4",
  "key4": "3kT66oQ733jMxhf9CepfZ9zi79AMftSr81pQy6KXsm1pbd1fyf8eewntrSq9WDia5cXRZtWNqyp3h2o6jp1GiwXh",
  "key5": "MWZMaLLpbUERzi9ZdVeDaQyWTPFUtnHqh5KFRMKYwdACzGRHp1v2mUnezZgw4J1qcUpTSHJ1MnA6oTpDpeBW9MG",
  "key6": "G4bFLSp6LV1woQA5La9DZkdKjPB1EtC74zJmuvfDMgg5Fzw1atLvpC2cSLoh8NnqbxkS5kGBqAXsAR477wbWUvF",
  "key7": "5JhncXJ88tpatG6zXXFhu1et3YmgmkkfrDnXE4VBwqAGfgch4cFwXirDxS8muiMaATUR5UDC7pw7G6RBgGWyK4w8",
  "key8": "55mXptDc5PqzQicZLU9z1nTjZkjgkxPkYGXmXiHpBZFeGpNzk11KWdBc5rABtewtbfSm9epd2vxUvE7DmdbcBUfe",
  "key9": "5zpE1DUmZZDvxsQnzsZggfoFu97Fk7yrKBCDrVUpGCjHQE61LUbg75nV8R5ZZaU2BrqX4LboG9QdDMfSsYTgeKc3",
  "key10": "31Ci6H3tvTerT9ixWz4PehhDg8pwCUDp2oxAZ92ESXSewKkpkcWSQPwbKv5czMqKVq1LxJRc2dpmov9awRn5t8GE",
  "key11": "t5MG7zbkHbEsTo7JLteV2vwUSCbKziz23tZk1eqjcJG51YMrvN6hUMicNZ4k4jWMZsiiGry4Hwg2vSXhnXWdRRH",
  "key12": "4zpZrYRdyHtMqZctHy9iNPagRY4sgfWewaAnqrZR3Ssz2RMWMPLzoQNGm8eWx5ejRFMGgFXEHsHZbs2sU1fkDwX4",
  "key13": "2EVhgjjBuJHkFTEa9bUobi1qWeM1xvJcLb9LAyYxP8u4ZfZCEEThoUZa5MnaAHP5ZxbWQnX6GrzLacjaPmdfqCX1",
  "key14": "3LnMt2M9H2GffW1TAoKzziJzTXDsnassQRT2egPMmPVk12dneft8ZwHCXUdcbGw6839Yi8XDi2VEUWU4jQcbMZTX",
  "key15": "3VcC8hQGBwVqb4krUtcT6Y3QwnPWGcSuvitMDucg4G44nCizscQwDmJ8sh2y3r17TjZKyqmdq2a1cNo2kyTs2jHu",
  "key16": "emJRNmuJTssj5chuUhALHKv4pJSMFQF5TmadyVq8Dy8NNN7aSi9pUFWDqZt2Bx9oHfyijuPYEkeUk9hsZJcAkPL",
  "key17": "3t9BgexY11b1JTmYe27K3faZTiN4GjXHyrC4vCxbJDU1s7rzJZGQjgYgjTQDT2PdVFyqoYqSC8sgDi54FsXCEsaV",
  "key18": "2Xzo8g5KK7VfaAedAJ3Q71a7B782eifTFbFJ655C11AEPtMDhMshV9Z1aynCGqkXTFLZzaqDmhHYTQ9r6irmN8vV",
  "key19": "5ib7hY7GzXzn4sfPfJxcNLhjhwFd1EVHYueVVsM7GRVcYhzh2GY6M2gNcNtyNbC2nNDLLMmuBHsgPztnTaXQLYuQ",
  "key20": "3P777UYk24Gt87sCEnvVmYdKBiGMyr8tEY9uc2F7oSCiHjqbUfuBMXij3vo7ehZNzNmB8D2gBvjLhyygVieQv5Vh",
  "key21": "38rvBdZWWCV7KWCYXEs8u1cvxukd5tqmuCMegWWLtkyD3zdFABtunSVVXqPUCWRjLm8QdBVEtbvzguLFhKYkFVAi",
  "key22": "3LR8FfrwwQgr2ZCD91hyVqCaptM8G1Dq8b6i7Rp8Fw3wxGUM9yGntfZMe61DMzdJ4L1MNUt8H54wVmTMZtdSp9w8",
  "key23": "5fA5phcZYZM7iQG49c1PzGKxx9HBw8ABtJCVXvBubxLJbccnxZjhKDHQQBgN4SAqPYA88zvFxyK6GXFkq8RD9gGb",
  "key24": "5AdV3Ho1uA4LgyquzCsGz9fE6WhmptdadRhTMXMar8gb5i3dgojKL76KVro9bjyYc8TPhiEEWPMCc8Heq9bpqW3A",
  "key25": "o7TgJUeioxT3oBxgqbvk8iPENatiKRa6hmSoHtjBmyDygKf9f4wjzYpW7qc5VGYS7k98bXRAvCtxfeVejBYXyaW",
  "key26": "3LywikVYCZG7ewHEgsm7kEwBGSC1swjc7Cm5rN7FsJfLWNwAPL4gRhEVm59AHwjToCtzJDjdN1sQQW4UrpopYmf4",
  "key27": "2jpkStra5nJQLceLhReQMb4acQpG6Tgi9fwEZrDKFeu1XLZsCV2csJK8gaizf1eJQqCTbgcKcUfe3564uC9Mobdu",
  "key28": "5BRdsRV7hD3fSpeuvKL1ZJikrmEFc2PTG6Rru6vSZysLFEshgrG1v9n39AdsMpTTZg49btp3sU4gx8Zb7b2q4r8m",
  "key29": "kbp3pMZwKKTrHUNdpPRniN1hCySLwjvVG9GhgvCA11HxtDnhzfcScL6imV1CAgKuX1a68teKTmhrK2JCZ4qv6Ht"
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
