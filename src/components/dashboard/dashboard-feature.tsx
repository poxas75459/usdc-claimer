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
    "ydA8F1igaSzzj7VBC9W7u55CpNB4E7A6cvwMytFKQ8evS2JrZMZrNCedPZVvn5EnuGpMrFWT1i2FLi5o5CY5cYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hv2XVQsMvsnxUewgCMbY7HpWU2Yn6W823EJLskBots7gBVBB5Hfkm3GQY36aepWdvuZgS2xEVGKFdrMDGwemAgQ",
  "key1": "4oSRCSQjEQXKz2tPMfpPHYKj1LG3HpQTv9YGwdWKQe2qcxY7sQcSbZ1ePRjeX59NwaAPEM4xHGYs2igiZu1P19ra",
  "key2": "3y5uWBFDMi5v2uzMXfk85tf8Y9EetWz15gMRLHhLnu4eAXveQchziJVqfqtJjabENeTMBf8rwU89t7RbpiWL9Fqv",
  "key3": "3L5YHvb8tjPYbBxuETU3DMr2FVKZNVT2fbjazVtggFdook2o732RsDUQVc5MHiZF8dEvMuJ7M9RDBdcmA7wNdPqX",
  "key4": "3zQNUQtSX2eWiQVDW5Tv2ZAo91iXAqaEtoj3oCbrhtLdxMkXjupi1A85paQMdJYmhu1nWv8Kv65Nbj3kNboBSNsQ",
  "key5": "4n5hf1EzvyWs9oxr8tRqi98oX3ufb9t9tsC8SNxEUKQA6Mmg3txAxw6WGkpU2iXjmcD1s7hzo38WB5Ysq7caw9ad",
  "key6": "3GmQ1mNw8RaoNS8S9eirQPtUuDkLGa551T4e8svzv8WbQvnHtRZpDJLnevSTSrsGrtWhuezsUYpv6F91gUYz6ove",
  "key7": "4R2CbmBkMXmMf7ZkMcasAkSHuMzE2sB14q982LS1BrUfDn17ZBUXrVDxE7iKP3vsvjW5WfjtnbvRajQgcDkLfRWH",
  "key8": "835gQCPdSx8ctawNNNuButrGBhhh7sJh2ECp148QSswqwt2QTnR6ba7d6i2yPMbUxHEZo46RaG7CAxTNhNfXycN",
  "key9": "5c4yDzwV12pLJLwSEqcykQaiJxtJG8ZbcBPV1LidgLd1Rv9CPP2PnJuE5AX4aZu5SWoSqPeJuCz5wnsMAMzACQFb",
  "key10": "f8PkUsVBe9JQM41mNovTZpxahnhFxZh86kVygEV7cupCqX4Kqr24PqonoJDWG97ZsMQ4S7mmoJt6rmtzsnt6QiC",
  "key11": "3HfD3tmxVAxjzzNuADhNJfX6cRvZKhXo7BbRaxmXh6ryGbeJLnebRiSJHxpsARvtmwwj9Xoz26VQ3Ka5CNn3Mmao",
  "key12": "seULu28TQifrzRb4Tf6sovjdmaP4Fsu6VKL8Set81iCS89BSVANx316oTamY8YrULgQCGoYoWf8fhDexUXctF4C",
  "key13": "2Ttf4Weyy1k6Cak4gXYxzLPbpDcF4incdujCKw4UYvnmXs7JS1dg3EHsPSrCxUmpQvRiR7JmbcTyyAEpMXYyc4q3",
  "key14": "3KJwAyxtfmUVh2oKnBFoEtRbS7rio8ZXPU1wwpJuMcZQTc2xS29R9HxFhSbcYQneSfyPNe1dmDEapeJEgq5rvFpF",
  "key15": "3VPBGy2BK3YaZfYiZDsx6otyjqTPK2JgcCvCvEEPJy36ddToogspGiRhjTKdQfhYHKsyDQ86iuuMknXmGhWw7cb9",
  "key16": "4AcFBYLT6v3fdkh5ne6wZ2xNTjr3cDMcJ5vTL9t4tjXiQioLeeiT4fEH9W93E42qdDcAH7LStLQgzWvyVZJprkvU",
  "key17": "RBnAqNx7PNWqasjfdUMS69reWGbfiUuDSBmvk6JC3ex3wCmMur43SQxD7Wg8Khjgc6bPXrSE5p6h7CRs1dzK6vb",
  "key18": "2dS3JwfXYZWSpJhk2xgDuC7TpkGe7kXJA3ifDSWfNtZdv4mSDhrKLpLKAk5NEXM6R5AagxEKMsdaxsQAps1swxH",
  "key19": "3rLbQn2q6bpZSHBnHwSBC5QtE6E5YST3AakbCsVkcA761bjV7To2RTbdUkvrxxNFqfShhqNh25xwBVxTVuwoyajA",
  "key20": "23GatvZQqsFE59CQs4CvNAFhnfjiiohAwdvV89TpRQYd7FTauxgGmAXA2ar6WapbafLRnvoVk1kPS4hf66qkQvCZ",
  "key21": "3B4Z7bdBsXLmL1HyW6tKHdCbcH2tLNrci32u1zh5PhQZhqmq9X4MfejEHwsKrazRNJAu7WKymnQjx7E5ptQKwUUA",
  "key22": "3zwZhDMNnEeG9G5kkuPPRbWq3NWW1LNZiHqHDZENJdEXS8nV8UBTJeYtwLFTFuWCSCa6PfKfAEoHT6Vt16QJUEMC",
  "key23": "4TX7ms4iLPjGqDSXEzDo5kSxEDwjwAA4pHnZW9MH6Ek2j3jZ4qCZhUYGXeNcwYihX5T9aMhPMoQkpBp6cEitU5mF",
  "key24": "43ee3zJYhaNrNZ6gh5UqwAxovpWvALpU826AbU5AcKR2mLj4gbpTSJW837GhTr4p287SphNVkeVcJPfnVKcZcBW4",
  "key25": "3mJmy8KXsB5yd96XkgxQvmC8Mh9QJpTMDeDJ9qvpofAeQTLkguJGGDS5B4m9FuTDG4ezn1SMi3JytFQ85WDRUaNM",
  "key26": "4RahBJYMBgUQNb19zrTqpP3TNPQGw6vNVqX5U6r7dmuXZWU4VA6KjF6iTs9CP6uKPNMnBTaGiuAdE4afpjy5ywmB",
  "key27": "dzgEp1KGGonCLYBADPSDQATW35bVviQZeUa8dJkXYYhf8QJzmPanX8yPPvBb2vh1tqK42robucZQknpN51DtAzu",
  "key28": "5ro58pTcM7vPYa5SqvdErATMrJrfrqzK7oZWke19DwazEf1Lbc7M54jfh4SruW6kg1yhNBSGsJn8UEm47pEknd1m",
  "key29": "4dPUBRpMPMhxgsuTsiNUsfoGhZSbzaqTWTfVAEuNR4iJd6HkNzpboKH3z8jXzKm9MAWVjMADG4y7kruETWy4KmWP",
  "key30": "59T9vS3nQVNn3mF3LYubV4iwEE3P13aQTMcNbypPMew3GXArGh1SSiWJeyPRt6GgG7tt2j5X4YJy27AV25yniWN",
  "key31": "64iDBJeKoiEiDZPEUbjWvyJ8XHwpTtvW38bzZtTeg2DnCH7gixoKWaHheKjE1TahL2LLxxSFtLJCFZkKCjBHH3hM",
  "key32": "2tFLUrHFALpTFcUR22WVcyJPn5xVXpRq7oJqrVdpQ7Qwt8X5masDgjmK1sGkG2MWnqkobmRteuHyQ4gN5TwNkSPs",
  "key33": "2h88Z5nXHXKT63pGMnNnGpjq8SXh6FviNvZjWm7Nsv4R3mMmRk6Y6WDusGGupbhJz9F9qC1xWWT2TUu9Q8tqgbMJ",
  "key34": "2UUYdqMmRtRmMztuTDjZTCSy56niQ1ASBF3NnYjzp88JnaMkgFrBtjh337oYA8M5apGrgEvL6YHat2LKtVgSXmp7",
  "key35": "3thxyELR9whwAD1cjXSCyT4T2oFkDi6UAZRBc1BxxyLHdnU1yokEGbfU8L8R6WRePYVYQGKZ1XG79BvucmVB2o5z",
  "key36": "3Ng39AJeiLeKvBfDCKb1tnXqtTopG79T9VocmXxncHEMEaTV2T8oVRbsXcMUsvf2rSd8moXqCVjDadR9E7uwWTbj",
  "key37": "qiZZ8H6Yt8XEwoUkM6JdwCho8wp22LiP1X7GyD2quHWVTqtt48iYW8pCurBZBL2x7XqiGnhJ43qUpJdGf4hAMvs",
  "key38": "adzJVufQ5N6RCGv3UNmr3MuBXtxFe8qhAyusKzxQ2oCSfA7ee8KfF62x2BeBpgc9TR3Z1TL6jkbkAAGZjGZRZrM",
  "key39": "428fPYjQZ88fJ6oEXr47KpgAN3bbfV5omQ9uwHPTK6f5cgjfFpMnbCsPFaVnUizckZhXfuNdQptKuwtYhykMTrRp",
  "key40": "4r79YAehKvaHSYWb2YERYV2U8CwPEmsLv27wTu3N9CsGEuULHCKNh9YaS1fFauaL8rZR3dYTyq6bqr3KHdE1ixr8",
  "key41": "2yiPSAsfHUxuYEWj6iVrAePNUTQaxe7Gu4zHnLfduJDCj3mQCf7SvhPzE1ken6YckfQk29DRoaybc8NJpZRZmyFc"
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
