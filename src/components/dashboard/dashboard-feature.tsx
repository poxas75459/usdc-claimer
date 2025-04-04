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
    "4GB93z6F8RQMuXTV4XnjjfSY29TXhXA5gmjAEhgWbuMHfLqAWechic3cA5Mtb8RXyRu72sMaax1ptxkNVKauKuvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpFqQvrqgmoSAPWGuqr3NdvnMBtJ2Pzk2nptwT8hUgtjNo5dCkWyutD1k1PkzWXDenLCt3XWnuXACyPdWPe2LRZ",
  "key1": "FwEGKb396C4EMv1ec6JE9TKXQjTKVuiUKdzHxNE3d421DiJErhzkoxBvbVcX1NwmoAhzwRvx9FbXCh7dZmGZy7x",
  "key2": "2UuZ7FbJfBuHJCyr5VmPLEytXD4hiZ4qcXohqboi8Lh9WVVY2ram2rmdBB3r8xrs14MHE1Gk17hyTN8E8DgdyrxK",
  "key3": "3kFMEHJL864RXVPMnNXQpUBDQfpVHKzfZLorYfygnedzRBHDsC2MpjUXQ9YiW5NzLftH1FP5dhN4XCHV8ScSk7ez",
  "key4": "4E7jy14SsMououJEzEKgn4roN4g8Mr9sG42q19q3Prr3p5VGC79bbN7agUFp9odG39GE5r44em9i9nnLDaKkz6pJ",
  "key5": "5j3uQ9CAar6vhDidKhuhDv7X22227BMA57SG4zWP49gffyeovoyjS5rLwUECu7FVNfVw5B1MYRwY2nrDVgZDqgud",
  "key6": "4NbxG8Z7FoDKz91mXrRdXt8VcnTnjyGyyNbF44ZodLC3pwkiTzRTwMPNM1Z1YiNKbUkFvghtvjRoREARCipyxoAj",
  "key7": "4VBgYhmubMG6ZjY4WKGnQeSEbHtcu3gpAEzMoYy9HmG68YzWE3JvqfFQW71GygzcwEAQVpmmFD1bJPM1P6b23Vqk",
  "key8": "424zfN1ZSpVNVBt4oK7NdpDLvKv6EDqUiYSThjW1YcRrUBn2sgnRJ8oqvxtMPA81MBbDmZ6N2mi1JgwhqrgtLzLa",
  "key9": "4r68ZgajNcYgqQBJ2AW9EVZJMJ9bwZoRCMeqGnYUc4dcTjagpUCFD1AZZC6n4WMt3WzMizPMYVMeBTJuy2SG29fv",
  "key10": "2XA5XbBYKsndPKT3mJBrkdhaHVJW16ruSH6d5pa7Di63fwoHHdxAia1HbqxVDqaWVfGoXtBw9a5YM43RNbKwKJTJ",
  "key11": "5HDX1dHnnZdNk26oqRgin7TYiHP2kQnnSALgethAGUoHM4RiBh7bXCYKpzihJs2v4CBLFf5HqUZinoJXaTunG9YL",
  "key12": "2EVgsVzbRqqveFauwDEnywGswWtfVygsqDSPfnnQwrJ3B1p2cwVaBDen5RQcSbJBReCPtC3dFiMehe3PpATk6xV",
  "key13": "6fqQ8gEuAYHzacuM72cQ7bmAag7PMzEfJXqJ3v9vBMW7iDphvsdU34rf9sxqdwED21wrKEE7a9vGnV7djZ4wvwc",
  "key14": "39xUzweuekJfdDcVSi9nFTZJCuNMBEHDS9BMgepwGRcykB1bLfqqEfKx1TRtzvHjVGtMtHLygoUYHi4iUyCy2ogj",
  "key15": "5JLqn1ZRDbsz4RAgP9LoVArDKKw13LGMYibfesSNm6gjxY1beHPZ69mWxKWEtJVJ47GFN8TAQzpuDd2VN8M4hAa4",
  "key16": "2KyBxWCFqZqMhvA1W9BbF1rCX1rDuWz6yCrarZxmEeC9vNqDtmuw68uF6KUv9dT1L2TdLpkSmJLSmJZPZfWUXVBz",
  "key17": "3DgnD5ybF5pcaQB4AVhax7iLuQyWsvcBsNudvEQrV4eHgtG4GjH9QWeXaLCUyFG1AfLNf27FqXYXp7FGXZgs1vw6",
  "key18": "5M6aoXqDWq89GKDh7sRYZwmxckLPKwxfh58XtAnpwDkKUYqneWfX4DgacsYbdJc13ERxZEBpzW8NL8uXpZebTRAs",
  "key19": "5BeZiEy772vpES9NSUBuKZDD5PbBDMGSbwXmNDtamwx2pPjFmXMzKuCD8oEYxgCHGXLSqVtCotwSeGHe6fSatpAk",
  "key20": "6NuXFY5h8hFiYC3QPrc53EKgqfJ3fJwzAbowJtB5ZYz6eEJvRgi9vdNQ9nWDjCdiQVy9cJu9K2SfCZM348Djufd",
  "key21": "bqrwJcrbQQNFNHTGzPeNQhru8uSYbFei8GsqYnz2ZNwQJuCi8N447dqHCmbdnaDbcHtUVm2ZbC6KNCxNTJA5jcN",
  "key22": "2w63T8gmHjJ1Zp9stGojyt7FAuXEwXfA9zdYh1CdQcTH1xmfRM3mEHiWxPj6t7KMFtu8nbBPxJCT8NzcxeCQYV1Z",
  "key23": "Dwoo566oSYTGikib5xME5CnRypsLZfgCKNm8PBfjjxnhDGmkXjS2PjbMeNpya9srfPq9G6xJ8j35uMD9pQwReo8",
  "key24": "33xcEF1riooGhLz9gSWoegvSVyxe8HVD14TKqpw2uFUpgxPLWt7pJLEZbHZSP2vKnZvt1UpoMuQqWTwPCbTrWnEZ",
  "key25": "bsbFrufYeKuHJBRL78Ni5Vt1dqLLmWC5zPUTPFGFBu95v7vAUMSzJtE1C8rd1gNdrzoeyYJLPFRThvKCsCfaQpA",
  "key26": "48fTAWar9U7qqG4Gkf6kEnHhqMNR3JgJK8pKdap7pcwkCZD42W2B1pNqxHR3ihoV15jiyry76p7mF6Fto6wP4fSD",
  "key27": "3xBmw74Wstargq3dCbCPgoQWQmzXc8JzY8tAeJLQExgXhGifK1UnR56Xe1YC8e4J7kAneGUzuZCVG8Z3MCazx5bn",
  "key28": "38QSoaU6rkAe2LBpvDjYJhG7eLFLYG6VA7VqmQqsS1ANbbzHdY8CXdC61EkThzTm4bvBcUR8pBfoVHDWQM6dngLP",
  "key29": "rAcaoPrz7vpaBvETST2TvfsTBV2pDK7PqJK7Xb6PZDJDbqjSeQzQXhs4psrZBrN5dy286vYhaXp3ExSD2AZxRXM",
  "key30": "5ewpAKhVnoBWEgVhPR9A3zcxx5NuzWWSS4NkwNK9sP1oskCvuQYWtaAUbbZ8Nz1wBpnE4yhEGJHNYrbVCcyRZwvm",
  "key31": "675niA5jCZPQyVhAk2UZdCUXSFwkKBxUoSCTVcr3589WcbCHVZ79bVyeTX4hqmoitqHeXxVCf7T8QEebN3Rj1kpr",
  "key32": "2wLpHTLrN2K77wi6GHYnNEqJ9mjyRuVt4WKwygyobuzkD2VekrdWnbJo2FaSPRaHhrpNWHWGE7FAMMXCErC4dkbN",
  "key33": "5BdKPqxme2cEUgWMWXxk2RkZx85t7xyXAYLRqYQsAoP6uaFddY58NhfWpgT1BbNAmzW4TjtTNey19xJLLvRG1rPd",
  "key34": "bHknYPkBn1qLpuVoc7qWLU6fNN1jiDG1zGhRVnEmAt1BibYjX3HZKrhJBXo4rYwnZT9XoRYkxpxsP8hmRbDSDBL",
  "key35": "2gNw3uFvSujwxr1urpwudaejSNtajWZKFnorLw5DPsquHssW8cg5LWMuc4LfLvTfgXAdAoFZLkAsZ6cAn9i89k29"
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
