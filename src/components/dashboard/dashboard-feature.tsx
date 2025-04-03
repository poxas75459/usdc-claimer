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
    "dGN1NMxySmeHsMifBhujgktC5mG1zXFS2HVJpfjnmjbVKmd3GEnGXsatLZ1Y7rUHzKuimKb1PpX31ruAUpLbv4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMvB2n6Wq2WZSBWTFzU8QX8VtaS2PxhN55c1fniADrTLBw3QkZMpaCDkNLvyT3G5ruokckhgJvwkgmXQV6cACaQ",
  "key1": "2HQ53fPCxMwb7gHw61nmRJeursFK4ztBqNmpsudGYmxqanhisnzCpovbRLwBW3Vi3nzhpxvKyHY9JkrFZocABPdF",
  "key2": "3MAYQkCn9ppULzV3smPQ7CMnFJP4noHzcM4ZbojPMB1tvZoYj2uNK2n2z5qA9gZEqhecgAU1No1L2oa5cvpVv1s2",
  "key3": "932thD6BoVFD5cyh6HgBTaCe32YB9epQCBLXWHJ9WdfqofntcnFygU154WkhQJ9BSRDijzMpJBLeWNB6mjSpyVz",
  "key4": "2kSrHWAM2uxtjYqUsro52iV8dc9cduTfMSKuFgu4hGAjnrQzC3jgDQJe5q1MBwDUxqbLhxzjELD4xEw1KJMYwRWF",
  "key5": "5qhMEHPK2Sa71Cx6ZMsRndxpZmgU25fzrCuEd8mVMwsDMQvyP4rJ69LihkYbdKr3amod2BNHXUP4fGhT2hhzj7A8",
  "key6": "4rUtUpvGckzu3CJw2v2EPKhSyUbkdMacFfZhFsAHHnnVMtc85MqgR1in9FdPbMNRazAXiqeKNrz9tckW3AtTVDKs",
  "key7": "42zkk1eoruKSeCwPuXhzBfoMd3qgMdxs4e98PaNJzVM8AiUnQKyCzdBjdLc352gbpWEF9cP9kLW9cfH6ETLLw66w",
  "key8": "3eJnhEgRUzAMy8W9BxSe3q9UNAi8tgmMEz7s5aULGbeex6G5JBZL6mtNKNqKBs1iZttwUjB2VEHYVgLvSaR4MS2r",
  "key9": "4Kwfk2N5Tt3EUVpF7LRp6LNMMq5cXxU5sZzt6BBLSYRqGGqosNYfitC1cyZv8mWnTpDhuYHaZ8ozJydcj7xT8nD2",
  "key10": "2TfuBjagLcPAhHrn18KnXkSFFHVELy534A9KTDpSDjRtCqGFfi1shdLRWT2H262TaU96PgarR1PHRVfU9iRp8xxt",
  "key11": "4AsQhkj2jNuBJhLXw7fPpECw6SoD3uGfANLhyswziaJ57Z9HeuZZ49M3LNxuVauBHvB4M1ScjZ3zmqEAnY33qTp",
  "key12": "4sTx4efc8uwRp57rYTmc2Aj6S9yQJKdqTHui23nJQJSTjXwhy4JHTrsHDuZzP2yEvJSbD8iv3mPujG6Mmo4rPuG8",
  "key13": "126P2UMSrKFPASXEYqn7QeRng6RSCY43RNCYfxDncXovLCpVeQHmCEwBq8aMdwLHp7zjLmx63FWEQFZxNbuxdXVh",
  "key14": "UiKrrB48bFBsecceocC6HSTS1kfWDio2yL49n1TsjgC3rt7wKnjPFjpvKtb56QH5u8PAMqBY8WqudU3TtMwRYG5",
  "key15": "34RHhYX29KD1eenpU4xyUkKXLgcnYVhN8KzhE1uJczkvXJ3xEWcwt8hiGNPLBspe3PwScAfQqkeSyPtCMebJWG4S",
  "key16": "4YzGSTqD8aUucSKeFG4ZANoFyeaMRA3coK2tDi6UL4AoyGxVtvVgNezuX7y2rtztVYtxKgZ2bDiGeV1o1cgXZMAL",
  "key17": "24VGazpZsaPWwRuEy2ErLX3yeweVDRrXMDDLC4p2inPWqnxa4yftJ9WoKUkm2R22J8A9hcciQUatN6cbh6ZRwNaE",
  "key18": "RXQUXm4cqrFDesd1DGxbRMsaw5nRqZxtbiygX1okU1apKwyRHijRkAuLCx35wKWnqTCC5NBdYRUNxJNa9DtTtvE",
  "key19": "5hw5GrYY7YxtVLWCynMaY4XoEhndMjyahpZsiD9QP2gCJ2tvrEatG5WvZt3EWYhKevaZERAy9ci8MGUuJuCiJ4cS",
  "key20": "2eBGdxuk6x5Z55cH8rn8WtTcHMtY7DJ3JU4ThWEQh8BVKMSzWuYEejaKc6GAqCkU3q7wJGFRmNLTL6S4eCHSq8T4",
  "key21": "2fdW1TnJgkJskWNULgjgBu4EcADTQmtT5X3VinbZYWjGi539aPDGqzbseTq2wHtccQjekqnWR7V6tCkz6oJL12wY",
  "key22": "2nRR73GgqZtuLaDqyFfV3ETVdSTWUX96Do41Zz3YsnvuFiTgwKjYZMep63t76kbyEm6DHijz82EsJqLovxdnc1DR",
  "key23": "pWhHSHJDT18fAAwAyvTRgajxH2TmLXqrptt7SsREdawnMarsGp9owJfAwZh1m58NSoKVQupkeWXMm5yTc9MuxmQ",
  "key24": "MiN8jTApLZevcJe9RMrPejYdrUgMbGLVjpDkFiMrLUKFrMUpZhHsRmLPG5BMKn6313uYvDRrzayvubPJXnmF4vZ",
  "key25": "5sBsr3pmdaWBhVja4qAqG6kYF84VF4PtVhacENjFarTUVoeJQoSjnnJsu5amFrKGMbofUcgfqs4CaD3GVNWVKDZE",
  "key26": "2YrxT1z1c8vSEQ1wwvEb4XC9Kc6nqZARAbX1KX8YTYFAKaMdCBcyL6RpNW5rpeMpkW2364xLAnoNAEaaEYa3BHn5",
  "key27": "2Sa35YasTLKc8bMB1mpQs2gzRa2mSYuYgzCufmNbJbWX1C9AukLAsCNF8foqsR2yMZ9WB8ht4R7779ajoNV6THCp",
  "key28": "5AwBfB8BNbszP64m872DqP24ALgRVqzM5dc9pmnhrbCZK8duWd4nYL1Did8x6P6W1J3YkGQNLfmHYE5byV4McFhb",
  "key29": "5U6Z7hgi4MHPkSu3fAG3QYui1WECVho362xm47vT9h7FRvhHZretiAuhxqrXz6ZY8nLAE7fGUYUkH3mdda5Q9i2L",
  "key30": "5drUzbuTfxmNwLYso6f4Y752zKA4SmS4JyA6kKmxY8XTZN9UZdwP9D53wmBvPcwzeDBmt2WdUt9mWXrbfvx6pL2T",
  "key31": "4YE4GHU4ySD63gegFpubGm2KiRABPcSRy2Dc6d2JWWeS8PnTfWB8M6zuoF9XEriFzu6B3Jx6hk2Rw6n1a8aRNXMU",
  "key32": "428yQXb24T6QzLqX9XznALEmuB83q5UdvCobzTgY4MeETF9wCLcXcmRG42k61QGcy9PBwTcWmSkgQcHpFZzWrVoQ",
  "key33": "3EiWjgdP1ecHQmAUreiKi7NxCtnqMTUGCDuPCzHAA171eNf6Cm6NmQgJE3KgcoSArxf4y7urphAUqeimHHQ69hqU",
  "key34": "3aSy8sRAiEHA3t3ymTsBnFk6FHsxzWLTyH7HB7Ly9jLgBCK5mZNNBAiwKQ4WT17pHYopB89Zano6pw2q6DMzuJk2",
  "key35": "31t9Cg9iU74Y6pNcGkBC4s3U3MEewxiHfAPVTfsP3vfwgvTYG29EFkcxScNVuoG2fXGKnMrTvcUsYRqJ4YozhCyW",
  "key36": "3P3uAHgiWkPYxJBQktpJpttzTqdkz8YDmvnyHLJoouiEgMu3xsoGtPupKH375ha5HYiusjJrkykMqEdRgeAV4WT5",
  "key37": "43WhFxJdGM6p1NQEtwc559zKX53diFMrAAwKsLkTiN1SU1PKiWBsRG5BCkPsRXS3QiRN4ZYq5BToeEZ81zMYD5EL",
  "key38": "4k8WFptabHzti4cNgKD363AFKkTVAnr7ZPFnrCF6ftETxTcxdtM1zBaAdraRo9CZKm3bhiNBqcbgVMYBUtouqHtt",
  "key39": "3bBnF2VKvFYLaVJChURyNrYNGLgBY6zFvbHtbKKfQMwszr68J2Y6WbKZZF147nDjuF9afbRLeHDWsgHpeWPhgAmG",
  "key40": "2HLAohV7ZuhGRajTKEsoho98EutfUjiqyDeKjAWJ5MVgwknnaon66gyVLPENfzJdGkTGABF6Kq9LtyinohZoXp8B",
  "key41": "3YVvZKtmXRJFmcW2qRtmSN1MY721gBTzNK7XzUd9fQ7n4ReJcKJuSCkXx95Lxu87AM8eoJoAcogRpmpuSkuKJbAF",
  "key42": "2YCw2xupuzJYBaPztxvikEmeXhaubysThKjTUaSieDby5QhBWrqdijQfPkGj7pje4zsFcPKsXw3NuBZhue7x5kVG",
  "key43": "3Ka7dRYUyt5t3odKn9hJFjkAm1Fb3NEQoxCejqy67CERp8NSbBaPaAK6asuY9RwuXUh8C9R8sgdRRtSxz6MqLw2f",
  "key44": "2Ea5V3HWFJFjexRU3rCx8RgHyz7os8jSWyetZyRFhwJ9ixtQB85j8q58rPvfS4NN1tNDaP6GRgb4TQy3dGAWebPQ",
  "key45": "4hd6D9uQByrzPyULneEa3gjrpQz5od3DVx56r92eQ2qjhcnnwqZYD5ttgKaGgJjPhTBNXBt7nVNyosbmBd9QBKsW",
  "key46": "5ypGANMfMuvSnJKJj4r9gKposkV4Uuaxc2jaCyn3kaoMDZifLeC2kA5FmdkAGxgB7edvRoFY92ST8UDjKDWkTuA8",
  "key47": "4qrf1cDhF2zLT3XKE7frc1ZV9FoYLhiZ8e4JXUuXxzfr8cUA6Ukq53ZY5Eudy4Y8ZRcVGkZCdk3ux4dWJJXg8Fcn",
  "key48": "4rbKGFiV1zx2Sy7Dd6TAUukGQLrfycgjG5DFkUVysFqgConGoJex6XR5qSfvGzAVMfdcFFAZ2BBEv11Wy36Q4QLC"
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
