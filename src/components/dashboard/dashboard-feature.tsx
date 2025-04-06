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
    "55mwJKE5fcipgSaEz4UAzXF9nC15bQfQwkm5khyry66ChAgSQVjYuYHWSY1mYCaFwNH2muVR8g8gmgcUryt5vYTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWcGjZu6GMWGzF3jSbjuUxxGghmdyRnMbnv9FWRw5vRASctf4qfR7YFD9MynJmWxy6RqwCr5YJBLp3uAxiiiYRT",
  "key1": "2vbiek2wVJAAvqoMZudS7ABUpFNCxJjT5WC9DvnfqzBFBqQv8vXdR12fZvC7CeMP7oTejD2jHZAyhRQphmQsUdUS",
  "key2": "3GbhcAYysGjenHpkzH1p9HNayc1zaMw4HcM6s57eFoXWWx8SWvo1m6JcE7uBvjuEYkty3SxLfNUw2yvyxDygfe74",
  "key3": "5aKNDzJQVzpSenDXCW7SStSstzK6ErtD7CVdAqz3UEkpcCQsuAhGm1aiNoJfL4Gz9vyWC4945VH442B2KBC5vGea",
  "key4": "peMg67pCneFEMZFyNXaq4cFM6aE5ztD76cnbvqncVzN7T71CCQwnbAXSymu2HuXcarP36CR9cPaSCuAAPL4CBJi",
  "key5": "5kLAFXenbFhwLDc994TEwjGU8nqrbkifCE2CZ6ZBPcHwhbjGerSBpdDGacPYcNpmmoHMEykeS8TwyvhHfR5NM9Mi",
  "key6": "un8tjWTCVNNnYP7VcmRsW4bmfZwrUzQoHAZTqHYNgwC8RcRtUgPezHWKev96WYtA4wMoQNWFSak41RtkCH3KrYa",
  "key7": "43TrtbaMbjdjL7ebddE3aMyAJi9UH56ag2Zoui1VgpT2bAF6eTgwLeVyFFGkoBPxhvFyL9etky8cEbLumQYVs9Un",
  "key8": "3DyyLNwB28X6a6eFj6XE9E3tCyx4cjjrQytEhTfAZ1jfNmb4xQcEFQvx6TuTcDgxQ6LkVENU1QCUPe3WD89YhgNE",
  "key9": "4YgtrBPKnWoom8L8MPVNf7ozR5jtXWgPkfARfGJp1QRPqWmJrszpovVnUbKWQfJGXajxzindPwsN6tH5MP2TT5Zp",
  "key10": "2bp6quUj55ttXtEkSDdYixNPzYBwnre8LMrNGcMboRdHiDVdZU7Ftr8pq2BQPjwPnH9VaxZXnHTZyAi4zEWKxU9u",
  "key11": "3hH35PhG2a79iEFUdQqgXN2JRsxoL4ackGgrarPxzEBZSyWwL1R3HuQCo1PVhMSU1dzfJL4Uwe7dKnKfHWsSz26e",
  "key12": "5xESoX1vx24BcxiCan8zBSS4ku63t81ZSxRqJgakmNjvEc137qvv4csQLafrxqftiJ7cFc2Tx16u8jBtTrNeQTfD",
  "key13": "4tjEFTmNZ2z8REqo56dvRRu8rW12HTde7Kq4c4WgtJWucavGUqekXSpcW36HVZfmg7B5CFmPiGeVdcbjLKP4MkYc",
  "key14": "2S76yTyH9P17kB7Zp4t47dwxagQt4a4MgL3dwG5FkYK1HYN6rHMtrzHFXnZyjpxQBQZ53tYiBDrcCUPPLv25LLDt",
  "key15": "2xxPfTzxA5hNBUKG6KsCuFGpytMrFGQATBcFXzdMfvGLXAhAqsswKncEmVBku6kx4XuiKWMnHfRMUgrs1PPUgzzJ",
  "key16": "3CJ5HKncdz6DdqnnJ6KBJUwNNZiAetJ7Gk1JoWgk5gFZjWLfcUcQqNbFfNSZmEavdCKDnDrquZzhhYnUKrzZCnG7",
  "key17": "57A58NwinhAzsBu94ySeU5PsfkobP6CAADwXxDHupsTeTj6Ln7RuZ6uCPArax7HCU4WfZeSrHYms3hRvLBNQ4BUL",
  "key18": "53R2QuuGm4LJoru3bkiKEaVkE5xBdJ3J6n5AVN3RNJVPfwdUwAZtdW3vnPFE2osnamCYYjVG11TAWU36Wco1eb8e",
  "key19": "3dMtzCsimEwvecMxBTugr53qyavkPfVLJ1vbhv8bSPFk4wvFxqwLEnKNpvAAThTUTMzqEwfamKKHo9cAffiFnzbC",
  "key20": "3sjuUkXmp3DRc5vXKi9yrTK4FzCibn1x8vKRUCUh3Lxzq3mUWKqq1tZXDWLipfdHz915NmSu6SirR7DVSZ4nrZ9p",
  "key21": "4UJU3rUP2KsodCcFWWeaxawBUYMUuhzU7NTv1xXteBPPi7VdTdXWSQffZ8RUK36EEZvga1rVpewVx3xe8x2no9Xt",
  "key22": "4gCvTQfGy15KReKb5dEgjRZ3xVFVFcqMvSPUEmCn1UXdGSHqZBihyMcGgeV6xbSexgXn3aCEuKbHtpd9kP1odMSM",
  "key23": "E6jkcrjgUN9h1imDQUD9CDMLUk48fJNMGUWqdvweW3ZQwtn3ckyPBS8SrZnsbHabNU5JyXWKPrRjq8steQvRVb6",
  "key24": "2V4UiR8diLuj8yJan8irEt35PS2BVFQH65RnCLCsueuC7EgQo7tbx8Kh9wvMGZVb3zb4Eh7AcLuE19Sv6aukDCb7",
  "key25": "axhWciQP3NE1xjJ9PzkYdYT17oDWoDiGFtxh9vQ8WEPMd57HhtmCSHdqJahrqnogiMQFU4WoGCX5skcgosZukah",
  "key26": "4Ljgw49juQYQgnJWtp6THsNPNyzkmPCzvj5GA1ZSMrSCMNVZGhY4GKr94HpDZ19GZRH4dtK8XoCcq2bE37k8ajKZ",
  "key27": "zXRsRdr2jvSkTVen82hUBUgqkE3rL9hw73JM6vWDyoJAd4hA4WciQu4faeih3qdgmHWVjkVvGAzhsL4rx7Snoz6",
  "key28": "2zX5fgPRg8wnpBj7uvfuPcZTBk2hzfyxZzWbH1fKc8cu8adRXc1pUSVmYwEpYhmWYWVGzHgm52RXee5BJyMkKNCA",
  "key29": "53WzNJLnbVUECNx1K4GabXEXoq6QuRG5oXQEanCckSkJ2nKfaAdmgprLpjXBkRBGL5dPsDY7n85pdscEWNXXUEYG",
  "key30": "3avzusH8374PkwK3DYJKoUAfyu7rUqYnBNSkuBNNCMBp7wmY5tDebLHZkHpkiGk4FbkWfiyVNH2zPKi1wLWDk5uq",
  "key31": "2bTFs9bor5ta56ogGHHMyJeYvrZmRBDrubw4jxoztjkXijqPVqJbqsWX2uCvPhNWzDxNgu2iHBKyyHbvZLwKP6K4",
  "key32": "3zM3s6ELQF555Ry32wLDbAKDs1qs1mpMMA6WP8yaZ6NpRgPg37yGSCxjzXWFpkgHWKTvXUNQvH2xCZeFeFNwyM4y",
  "key33": "64Y7nLrNCUQJioUDtFuQJefCwVd4wBbNebxqMX4j41nhqd9Tw37fNB4bokhi1dobU8jBUMciarP6D2VgQYayiz7U"
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
