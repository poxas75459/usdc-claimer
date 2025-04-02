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
    "5ABpPRnyHe4arvJmyVyhU1KaWr5kQ6H5jsGWcas7Eab4ChsmxixZik1gpifbjUz6UZFqmXMfqUsiEGCTH8H4CuUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XdBBivAj56FA1eJfqyyDMcre2Wt9Ter5fRXqAyxdUFThNJWsqznrbXZwvzXhjqy6wuSQbPHDTnbM4c1Su247NKe",
  "key1": "3AmfZFiCup9xy4mG5NqHtCkcYGMiJJbKG2mE7X2gLsZoUiA8NTMYqmB1Kwkio8tsQoV2dGmKAAfeztuGmr1eAcQV",
  "key2": "4GcyVyW5efYDKVRJceEkMDy4mhwG6hGWnmUBzHHKoTwTSBAnrLWXtR1d8ajqZSvj5d9o7RCr1e796v9oVhhXJr64",
  "key3": "DrXQ4yNSqYkQvdSQdjPcrybkfxnCseEcjtwhAuZp5BKmmwbnmQpHorvdnAN7bWGkENHayMB33b62LCKxFSnHWHZ",
  "key4": "42YaQbgeeinDnLT9KVMQfa69C9YmZPPDCe5wMAc8kiY7SsGXaTAFBA8Feszkvmz8jHrkJwRp5H7wQah46nejByh5",
  "key5": "3YMJz2QSBhySkyAZvFqMhCFfXJ17tfAFdne6WAoMfZYVcU2q43kc2ZpZho6kzeyeaciiatL9zMcKZf8sTam6w3Nx",
  "key6": "3AbWEUQDk9Lk3ir3Nc3phdgLMYLcNvdjcFhdagJGZM21XUG8dQFgdME1QMt4CC4yp4NZpkePWNdVkmTS9Y3wMHb5",
  "key7": "55xgEtjs26rvZhhyn6GoSs1oZLGka5Fvda92t4qqrMsmtWYeSrkHoZtq2HWqrPjuMUMs1tC9pinakJPMmxEKHWtL",
  "key8": "2eDPs4eTcKXkLzca7crV8zTRtTSpVoS2yP5nQypmZpCM9yWXsgi4aCSacnvKUrHbm2VmrVKJpvZeDbTQ5gGknsdn",
  "key9": "LK9cBBL5SUM1ULp7oTbDUuCNinpcaYPgnS9JrBiDS1Tv8tHqVdNYWsJTCfe1fY8S3mE2Yxhi1VdZa2ZaSHRsM1P",
  "key10": "2MuxVUE1wdGTDSBZCRTtA6Q59tzdHKFR89Fjawpgrme4qWSpcxj9p8PzLPPRUsJrY6gkNM7DriWvBEztys6xuMoM",
  "key11": "3WJSLJC2bCobZtyW123kFpoSEVQidc8M1rYmrDYAQwkTfDF3Y7gLk6Zw9sAjFpDLf5UN6ZcEp6dNGQuLu6y98zjj",
  "key12": "5ySNfkSoBpAdLpFbxJdTXbMpbvtdmxAC3kpTeEikcVv9TjU1jD36kVjszAFFj3tZnWxwf9tq4CbT8mH2o8kz47Zm",
  "key13": "3RNMgWCeHnn76SEDFdEsSDRvTEWSQQRkxWXqrnNcZqi65EH3RuR1hSDsa1PAuLcCLnKfkp9KuM42yiJ9joYQdYF3",
  "key14": "47Y95dMAayenUNwn1P8XXAa36aBzYux47iuqqBbRiiKjjCr2bfNy3xcgesdvzotS7ertCRGCXDjDWfhhpqLR8G28",
  "key15": "um3ALh5JHMyZsXWRrnrucpwrenNnGqCciXDZeKJHGrafscDkEGcbXuwoQS4FL9JKULHARDAMvFbdLTsUTyoTyiL",
  "key16": "2eHkHcaxExCAfu5fL341rykJfkGUn6yuxyMk7MvHWQ4nKhmVwnETEpgHs1JhGnZFeeBXhQnffHPixKHmvd8a3S2c",
  "key17": "3dijiHttZM4RmeFuB3UCTYHGRnGwWhvXrGEvPpD6n3dyQMqDr5XdqZyMRjFvgDVurX7eZoq6kxU8wrN2ABA5otQT",
  "key18": "57H49dfQUCTnG6aCSe7tY6RbnprEukwm7qbymncMkRWHwJMKpFuRZLs2og8KzHPxwkFH7bmxXM1Uuxs56PcxAWL7",
  "key19": "sfFnQwAS7HyTg3VkANcxzKsoJKqNCYgAAqAifjNcyPsNySFHDYoGr7RbNBAsx27JpmwsnJiHUCxZEtG53YqszUj",
  "key20": "5mxXwdFmoWPsdJ6P7vpqyKz29tAqdigFoaHSZma9qFKajoL22fgjb1SNbfh2v6zXPtGUSJKyG4nno7aJKfS3Wxyh",
  "key21": "2GTXWsFnftGar1XJ8R8C2PYoPY8omYfaDSMrd7JrZRFJvHqc2Wow3KqkXdzHkbaGKwMmnkKd8bpyukLicmvneb1S",
  "key22": "FnETNLXszPXQfecLa7CB1YwVBTsS1DRNPUnGPSwxxqU3jPRUrvA7wEAd49eeXXz5eopGpr3V2RyFN5L9M2boFx9",
  "key23": "3UtuwrE7Ziaa3CJ6KqA3dABx3i8p8kFytXJqkg7nHkP88P2mLGYd5gVZhgPf7KzMa1pgjMfZe7ZuNai34ZL1xy3P",
  "key24": "5jWeyiZYZtUZBJRwWvzGiPsLeUE9Q8JSP3LK8zLxPjjodVh11QPfUgoeokuNqwdBx2vyWDM8ZAy4iCNYcTUAcBRz",
  "key25": "3BayfWswVL9c4NkPvas9VL36xHQfDWj4xJP9RuHxfReAfYeCX4gwNkjGUPRtBa84s8xuAHpv4MR2rC5KiGpUv3vn",
  "key26": "4Zf4znUejMrsE7UX2yeFCC2As6tkM8RHZJzU7Q3dPpvjwvmFbTHmyCjakg6VUNFY6X4tJ8teZ9eLFDyGkJbnxSXF",
  "key27": "5nCk9Dr98X97vuy8JSfZF6qoPBANEDwTXeRspHyfVDCwBF5Jryj42NHEhMhuh7nBDHagazFrhBrsqERKJs1ABuAh",
  "key28": "55pTFz4opVKsbSEXyWaQMwCAajhi6okusYDZCQSifyuUVCMKHckLmhgb76DRfMyX894U1xVs7arSo8T5vJ2hbs4q",
  "key29": "4DV1vuwaXaJhJkmbjjhnWzxohDyCKLrrPNEkVFHdWMeKCK9GWrjPJkBAcFggZWkNHevyxe5RyEFgcyTb4y1FYrV6",
  "key30": "5CYaxEnnPD3TAXU52uRwgW8yKKeFXe9PHSVq1BBBSsaQUVBYQHZpiAyJoQ6ar6JCTfetaq6WB1NPGqGntiSMY1Qt",
  "key31": "2LK5D1uJN1rTGc4bgVoKWT7ih1MGRS2jzqZzr52khv2eiawcoB5aETjxVDWYNn9rcwAMX4zxVKmK4sBPEYRFAbjx",
  "key32": "4CtmDFEfMiBjR6iSuATM1AQVPMaVszYA9m63Vcb3MonJZPo1pL7sQuRN6MET4L7d2gTadrmamDpnRd55EzwjbwQ7"
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
