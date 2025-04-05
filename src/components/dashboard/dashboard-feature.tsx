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
    "3a2MNqw79BUZa6dbfomGbNUhtXaKrvWFMRrYWzFdcfig37qEPFbivscpb73KKGVUGg7gofpUpChrvpuX5MXasXSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUMz62gHLabsEjTVVQhGVNSU9wLYKp2vyMXyQre8zVzP8eoQWsDAk3Rqne8Hu75PsYMDFgz2aJF7tXfmcLMEXEM",
  "key1": "2cKydDWazuLdXcuP3uaGXytmRAKSrCoQ6hWcatmh9ta4mwUUQEvNQoUuqSNDQDLm4sY5EDB8RC4TRusXyv5dVKSv",
  "key2": "28gGg5ceLv31htVbTZvWoA6kYEKudX7SRt27rCggxBXTrF24XHnsG2Hi7Yzz51Zrw2qV5R7NDSVyMQ915swiNYP8",
  "key3": "4RtLvqn2pBUdhvjAdU7AfUEqva9HJSUw5mJMFUopwKUWUKLGUSNFwaFtnrLVdX6BMsDR9eNA9vsXdyhTxXzn43Ho",
  "key4": "2Sm9nbbQJg8yjhVousCDeWXAXMdP9Co2MSsLnMnFWTaqMxkedJYBFXQpz3D59x1xh6GziKCS8cw5ksjUdwuPwRSm",
  "key5": "2Lhy3xVJ7t4V1GpsCmGTDdsc42EwtfUV2KmsDAXKMXEBML6MWxbppCmjdAib5bbecKp7rw1HMdmriTn36Z3s9tiV",
  "key6": "4uXBimtQMi5KU2HTmjBrA6c75x86C2fKW51yW1BSBEj1XhDT6RvwsKqgpghUvxurQVfd3J7DTGnmmPyhJigBZjAj",
  "key7": "5uPsMiDAwgaFFWUgwSFwwGU7iuZbVEXEmjMeWGD6SWRTvTSNZMWJC1QMDwmxNeuTTSuwh7V9ST1NQzuKy5jyN4Rx",
  "key8": "5H2pDansXYSamErRyBptTZXj8Z3BEMgD9PE192hkcvcVnEFjgFcGJdRaKNGMooTyPsCt47DBHvfygbJmPoQfetWv",
  "key9": "2jP56e5o3VMikdWkeW56g6EJcXEi3MFp43G66tTZBhwdj9Z6QF6oFeEPf92c5iqtboGeNZDF4HUpBNfDgHwX52JS",
  "key10": "3rzuMNtajNsnCn3eneVCfLz42iurU2qh5zfqM2hTbfsdUf9Fw9wGyu7wtN9uitYs4sY4VgS9RSkBv77w6c9rq3so",
  "key11": "2yLhYpBfEQAiQCT6KQzgkci53QxumFXToHx9XN3WjjNid2NJyayrr2FHCZgRTsDGYDsSQ5VxxVfidpiESKZoDWce",
  "key12": "3TVVsux4Bc2GqSXgHHHhbrJ1pmNr478SQyAZSBPWGhhVDr9Xt9ewvZVY4xEkEpaiABoDqK2iwkdYFASTADtGoVYa",
  "key13": "51FwwAsirS5DKhBuBEAE3DRYrh6iPHykAd2nQcnXmQFftJaz2GBbEJeisVRyxUG69xECxZmbhuT6WgV8MtDKWZCW",
  "key14": "4JkMoA9nnfTx9ZP55TeSAWfNSVMVVWGSkB6oCBueWaSvmdggnVhA91szvvHuFC3oJDqwtHnH45tKTMBmoo9D45Xa",
  "key15": "2VUSm72RmpmUvmLyDmAuYw9i71JKq6yrW2HSFK3XREtTGEby7M9bm55W56wdpRsfch6SLWNKjgEd51FkAun1ZmVh",
  "key16": "XyTECveYyHQ7n35avfQyQcp5sZzit4Cp6aY37GLG9QsB8S2Tro5BP7tFyRWk8gazUgvnx9taT39q6PRSxw8TnjN",
  "key17": "5MTDX78YUP4Z2nn29Et3A5sjfe2zD6iDbCjFWYug7y7zPVBntuZCikm55dMv51pzhavyYdiypcBDaYne9QWh7dyn",
  "key18": "4oAmmQEmqiwSbiNSqKWwmRePSMd2eUb1wkZHiUTkyY643KocJoTzCueGrqaMTAXbrE5FQSz4MVydiR2rzeuVuVTT",
  "key19": "ueGfbd9nx2eRxv3RS2VvTWGBndzVFT6n4SnJkEj1qGJ8dSbbPmrmYc1rsTkbfgK8HY9ZGsVyi7R68coVuk1soSG",
  "key20": "5pxxBkBKZ1pknd94CMCVno5qskP4S6DXRpQnBqbhqFY8m36Xr9jtqyAaWhqq6Jv2JCLHwCP8AFk5jx6xm9jAAB7U",
  "key21": "nncmtGbnmMYdvmSjABqM4DAdPU8Xiqe6sRAac2UcAgC14Bv64snYMGBs7kM7WQvJfSgFDeYoSyxSt7URKFLiKaF",
  "key22": "wwKxM3U4C2NT4aeoRwN7SKc4sqYTAviRCpwtYFPpCyQSKVCVocPmoM2cnmMu7eTC8DgGZKGdF6yATKByD9niLSC",
  "key23": "izxiTRwGXMLuzByr6mcdhVFaT5ZEksJxYEJBBAQJuf1PDZmgfXhXPXCbGBZTHpuERsbA8YYegPubWVRggQqfiy3",
  "key24": "4F295bzx5gqd7gytfWp94gA9mfiGnRoMYfN6KJWz3nLreJVTMPoJ4kfM5ydwEUp8c7Uc6CvWVfHRodDwnswUgaZD",
  "key25": "3dyHxX77uG9FYVHMPcmKHgHv4KVJ6y7CNMVPwpVnAHfvYfmCTbNHHeG5PzrkyerTTxwjdQPNZqbkSfiCLN8GGQgs",
  "key26": "FEWgFBFfqzdbMFgG6iGZpdjByZKxMfk37QC2xXzoSuMCG3QDcXcENBVjevuDZdyca1zrc8DFXVH4P5Ys5gw3jzY",
  "key27": "3KmbNaDNnGYEJhhvKsocTgFJeZgQcTpdyVTE2MGd9NzCctCAzUKkNsUjA7seD2KAiJT2mhMXhFXeewbaNJAsAAxF",
  "key28": "oRzt5tG9HYTni1bZfFcEXACtMrUnyfDYhjcRFfg3UKe4Htc9mPubQqwVtS5xoFbFErrNfXJvaxiDtXcdB749BrM",
  "key29": "2A4274jQdqa2YGvT8umbkzyizRH4S9qENkp2KuWeXoQ9pbFbicnx3FiRbzc3JZSSEtWJJR64oyJUEdggqAzEB9Gf",
  "key30": "3iMrb9fof7rAwKZZiiWctTD9mcKdNaXWcNKbe8Wc59Hs2HiXVPMqb1XvWFQrnSA2ExRSTAGAoSFsssunpeDZqhDX",
  "key31": "535qZ5NMSpHaEGTNPuzqLDvYxzyduH5D6p2xSmNo2vqyBLaxpVb7joGTBVKLCTZdET8ciGh8fzktAYy7fw1UahzS",
  "key32": "5z94netMxPnpR2DrVWJDVo5iX56xTbYKYMkMYbArswNhu3xoMfzztzjBoUMLUUYRDgzoXzxAQjTp6aaqJ1z5Cbaj",
  "key33": "5cYhPFtxyKzqVBkkfyYtFr6UHqMUMeWCNkVXzX9zgCBRkLCK1hHZbU8RfDcJG1aPDTiVjaroYuP29EU9gZ3SNVmg",
  "key34": "4MjYTs89GWJAqaK2MoPeei1iVRMduGiJjSjhWLEVEW2uFVbeAMi9mLmssYjX69p6mrdypdvBvJirfM33E8vvTx2T",
  "key35": "2Ts6VAVAdFBrsU9hXiFybocR5uYnjH6hCXpbcTmbw9YyP4921MSnaGNytKmjQf8mRdpvGXuxJPBxhkmjzZAfUjty",
  "key36": "5zsmQsr9rNZQXFHcJ4t3NKVqJi52fvhSzXAnGJ5LHpkeSVSX89N6quqcdr9huZDm2iTCQ8Aed2RyoK8uBijkXK2u",
  "key37": "L9rem8nojSFtxsLHCEAov2QEMPPMrAL48DrtMJesSvZXDJhMorqyWxoiV9Q9S1BSdbEfQzS5Fo42ZwwCrednZBS",
  "key38": "yqeiYQyrTdNzSSB4bssq7edj1NrGtSxi4TP828aoz1zCKe4JGjtyhnD5NRGtR2K5HNABHmK1gdncWNHB1GeYDtV",
  "key39": "3TBzSRwbd3pAs3ARFy3DCReghfMgBw8JBnFQL8frRYKJjqafBQTiZwsrFhBpm5xzAqzLRKTU3rHojvj9ghQFBqNy",
  "key40": "2tBV3b982rKbVQzpx98ks6JZfoFAqCHadeHyDGUTgwSJkBmWjdJqNpQxgWLzHGaZw3ax59PfvJCNBYF7Lpu3nd26",
  "key41": "5bcCKhTS1uXGndFoMBdpQ8xD5MJxqTQ94GRcYUZKc3hgcDn7K1KHiJM47VbHcmSvhZVp6M9xP8dCYDK2m2XMNPh5",
  "key42": "2HVYtFyVnLiMfgjVsK7aLUhEvjfqPjNjxMMUzJe199aRkgo6mSa8zHZUSqMdAaaV7rNA1NUycHUUf8xESfoS4TM"
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
