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
    "37pxzJspTBj2K1KrBfBiGmhbiZrhahzDesEUAKwx74PG26qq9VuPF5wT7QjfXBSCjnETWrDYR92FaS4nmoKUCYWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QY5cdT5FMQWEmNkXneJyy3G1sQmH7HjAmVwkrDwLmA4vhPWJuxjipkQdsCnbaqDBPVGDH1V8iNbkCTF3K8QGuwu",
  "key1": "4sDQEPMzc5W89DWmf45tFh7HrHBzqzeqbhkDnSx6pZKFkXwTjv2eL8iY7G3YKLHsJH2XKYsReabjdJoEuEDaPyXR",
  "key2": "4YduD77xfRWoyEDSDoYgnmZAQnsCqVeEpffKSSr36xLdsPUojFPbFzBqtwsBSf1MeyoVD1cm1XRgxTYwCMdsA77L",
  "key3": "2NfMmRG138ZoRkMcZzhYyqPyeYEFLrZbxLtTGoabCCy96SN1pUszoNkGpdgPWoPL56KEx9ZeYJpRhH8sE5vhFUk9",
  "key4": "2RW7CGVintJkJMR5d1WZpP2oFj2QyyxyYK6UkWYF2q3UeqjrJtMBdcFenPucLEJiDRksFc3LRAez8tC7NNxgxThD",
  "key5": "m4rqJQf5EdcSTj7WjDRWzV4dFW2jFJAJg524vFpZQ4o8Lwx7CtAAnTSgz9DNdezkzAJYr5cZPGktnpcQdP1bnbP",
  "key6": "6zsQ1eNnNzEvMojeXFk5YJbnVLhqzPwJbE9kMaBjwrTHKk2PvHKLFXVZdctU4QyRRxHZxDB71n8GRXz4amB6AwG",
  "key7": "2Eoy8Zuamti5bFt92rtZ7SEUQCtArKGmC4nXtwSdK9zYoWcMQiZNdnVsbwAY9yC7EY3ELypdTEMQy9zQ2u8ghVsz",
  "key8": "2fzfQxNX3MGLk17S1DgFqxg2z55AKdTCGwCTTvmfRuWB5ZEzGChUww1RSPKAn6xv7nXQAUwWYVCvM8MAhmt6D1Ty",
  "key9": "3TsyEqQ9sEiXwat8qXFVi7VXeWKV5Ma8ydt7AS3J2yGLptwyuPzDdMnSNWWt6K1XC1iLeWPuJWnmqKgH72gxjzFX",
  "key10": "2qKstY2agPz5d3DGoY7CNgpAkn9YnrT2hPrXHQAHiisXi1D866ZhtHjDMvqnKZHK3GfQk7N1fbGAUis9cPhL5xNn",
  "key11": "49cL5Lirs8nKtZpQbHrvGjzXUkoXwewY3ECWaw232eRdxcWDTynegeKJGD7RnkGmR8p63sUDLTSX49HZhdyQEmo3",
  "key12": "B7cH6DFk1CSuG5Xew6kJenrM4oWXykhZ4o5GCNXZkithEMcbo889SZhBJAzCr2jHmQunNKo9kQp7yajCfyMhTud",
  "key13": "4WoYANbP5sEj9NPra46WvAn52rnW6UjwxBBwmJLqrqaD5JX4TqRHniHEUFojjWZ2Y6ZhzLKDdVqcQ2jZiDTJ1FPS",
  "key14": "rD9dkkhZeVmTA2EtuBiwW3WabLZYibMfjqCztZrFUhjtLbzexL8XYc7MnBmKzyaEKanWf1pYNnmJ2MbxxFwsKA8",
  "key15": "3MrjoBJEN78XAbK1BbFGJM6GUyyCu3J2bBtBDjkzheKcDr2va5o5aWrPtzauCCG6qFCsXVhV8DTYNMrC9M6FkM4e",
  "key16": "JnyFxkZpfUPAgt3WMuf5cdoUjuT1g3SoggkDb8har82qYLSEB3aW88rj2W6DAbXy32b16j4uY6QEn21kR9V3wq8",
  "key17": "TETsjCSwBvhzTGsyJxhof7DvvKtnS9kj7z1eSGXtrxNBqDoiyfnG1gGRGG3tReraPcjvPv1RR4bAeqz61auujcu",
  "key18": "4jjgtT7prqidxno2ia7fbHpTrtRuZDfpZ4AsfiHgfkoL8PGSE7JK5kwQX7EvWyyHk5LpHbiEeVZVZDYauqcKSTVi",
  "key19": "2Y784GniWfeFw58iXSYctMY8pokShqkYf3YKeU9CZ7QEp2h7aJQXFVb4EUm15YcPHmbvUameZjx6BDMt4Z1Y3qhv",
  "key20": "4koQLQMac55rmKgihX5YF7YomRo3KX3NNWXmNYjtSdjrUnc4Y3wwSTgvStxUAaZ77N1ZMJaV6VZqAeNusR8qErEP",
  "key21": "2TSRfQiAfzpfnbCNjyKRr5uBUyH6w5BBf6X9k38vEC14mjvnWYiacZjcJCUYiaRvLdoybtQTHVfZ4Q8NvwCtPZMW",
  "key22": "3SkCpJbb81cnZaRcgT7E3TCnczPeqd2dwqEs7S5ZLtXbrpNgEjfeAPy34EEQF2fjLGDipGu3ZybzfhXhuTC4LcEc",
  "key23": "Hf5t7TzAspZcKfi7wThXDRGwf9DqrwyLJSoU8PdprnksUrXAbsVhB16YDs5VpkykELMUdM3qZd8ANb3caEBGdfA",
  "key24": "29yzBHY7Mw9FhzFAZxbRuobyHTC2VPpBhRQrVqRhBmDoQKxRUqS2SnoFudPGcK7MFgDmyPtpuQPSwzZ6T3c1DESQ",
  "key25": "5pmwqQrEvzUWcL7UenZsfAYpditycF8w68aTScXhcXBo9TCME38K3cWEmWq4Bks5w9SXPZF127eaHdqbWkxKg5t1",
  "key26": "94ZhGoZoK3WnREBfrYyz2cB323HdMJom1enufpijDq36SxB8rrk2iHC5XFdxAcninJeWW5uGJxWFgL46zLwYfQW",
  "key27": "3eVkXFam1wskoDgWjXdM5CSvVUBAgxPLzEnFH9rpmepTQ9VUA8ZaryP2KiiWvAp4xpwS5Sam2jBu6qFFMqS5FJpu",
  "key28": "UGqcpif5tphKiEbokvxPav1A8ScYndzn9sdanvobRd7mAbeTp9DyPKyFM36JzEs8kGn7WHVgZRseVep3s1oMFMS",
  "key29": "3omLPrWFmTKX4KFS9zggnuRiBZLj29T5jwmvAJQki1b9EXMpazjHNxdKvPy6xYWWS1hKyJsUNLe2eqBnsYMAn5dK",
  "key30": "4KjsbZvcJFzLMCpMUNuG5975zJZpTtjFPBggTUxz1YdQJi1BL5rkyJc5vDYaBDt4idtKv9F7VuHgG1gS3e163vcR",
  "key31": "3s9VBJDDcQW5KytqK1fd4VV4FZsdE9wussd7ScJbV2yKiPm2dBWykL3PHHwvDedeyPkAPmp8daL2r2LawDw6Gzg",
  "key32": "2nTaieeNzbyUDV2GSp5RBwmswiGToP1414VoRHVtyvKAKuWJxbxZAGDUun4y1AUXkGT78PpZyhMH6f3U3uDH1fbr",
  "key33": "5T1KdGMJ9Z76SaoTxFqsucY51Dr1mCGfYrZ5cGAe3M7ocUqmHnxea56zeERqSzThHtP15UWs5kkNwP1N7qvLdAfx",
  "key34": "44iDtMGyvcp9LVZ96Vbtu14PL4bp8qj8UPVp9FVPsztEXTgZUWPmHQFYtQL63FykQ8a3koomLUSKmiWLPNvkEMXM",
  "key35": "2YponvM21i9obMMFUgx7qdmpETKANvSRSHAqecvLzhDn23vBHRLtdDpSgMspCw1JFk15FaVZCQKJTMSVEoK9Ku5A",
  "key36": "3gfTTc7cbD1yJ5LW5iJxHqZuASN64mwz285wnJuV7VhRqLgyXpfnUj8WqzDTBzVNeppUdVEdx22mwBZsVKDu1gok",
  "key37": "4CN7sF2KRKUp2sQSZ1vEwtjZAy6PV2BFe7JwF3vDjEYpUcE93D9rkcnvFvTdVpdk9LpkVPxL2NrwepajXRXchYqG",
  "key38": "5iT8aQvMnFzPLJiXBe5gdDVU3Afjxy5U2cUAPGXYsbnYmR2xqN9r61WUcKegYa3S2fkPXLJH2u5Gg4HxgW43Y8jR"
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
