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
    "3rHLqH2V2yBdHKF4zoXtVoF5WiLJQuoA2npXnEHrrQhW4mwNwUVzV31Vke56UtYyLrbAQ3Q3V5f759ZcfHMeYuv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x44nh9muMMQiojUsPXNFSYBt6sA2SHcBounUHT3Dixyc46sLkoUztpNBMwJ9KA1WLGSrtBKhP99Vbf3ev4yjcmT",
  "key1": "2YPEv2xBTnGQBU7FCa1N1sKB9k5T8tzrmRy5YDayDXrwKoQgaWdrWHBdoxEmVDVHLe4roThu1X4RFyEfMtmqGqdr",
  "key2": "51pHtQdhMneh8z8wnt1vt7mMzXoGcC71sXMJng42vwa6NjycZkxHQLcztehc1QKzpAD8VpuXNdapesezhfBvDjHu",
  "key3": "2ZkdXe1P4g3gHE4XJpcTTyWj1r3E9QYw7yrNhhegJBfsqNoVm1LyejPbJ57VcuWrbvby5eXShTCcapHN7RjG3JFw",
  "key4": "3EUxPFkvR49VLEDPNQxPNupo1CKJfpfeoje8CBttRZpvok2BAmZZAG5hzL2jqQ4vbjP8QReZxTMh5W5aDSNrsqC7",
  "key5": "4U5wwyP2eXzYTM19xJvMyqDTyLALbzMB3Q3iKiTnapKCkrPaefZYXqNRp3f91UEnLpAwedorpg5hc1xn4XTsdCDQ",
  "key6": "5CdAcY8PRorp7Zsy6QxtjaTGyrYyfVeAbnmGLYKAy9xZrgrq828u9woWGNfKYGwSsuQLYXfTTU11kfbPiSyCJLSr",
  "key7": "5uaJMbaVWtsJS1Sio9j2yAtijrfiLEERTvZ4fSmE6tr6jb3LMnKBU4TT5n236KxGuZL8GevXYavX6HMMHvpn7y6s",
  "key8": "33YDKdjGLJUmHjGnHhHxJK5KK3KJUXHxV8Hu9XCqNxDJtunTq9ZYJvu7QyvP7WdDNf8bjDBhrLhFMfYcYJFdizmT",
  "key9": "KiTKDyD5mmisLHBxPzcuLyA1W3wpzFbRbGBFpwwmKtf4ZTohuNKSeSiKUqdQpGiHAkPkjdWbvZKTs3GC3qMnrBv",
  "key10": "2okVQGCUnWySgvqj4ZzRvwmdVhFt4SDABcgEkQQjgHbr1KHGwHvw281zSSDzeZekNMpSCqq1zdme98CrU5BSz4CC",
  "key11": "3GRV2tta8Qsa9SLf2ukMTdTuTqQBQrTdFJZga8kiqyuBE3cNLM62A3Yi7oUfDRrVkqaREL8e3FjbPjpBQSQj7ZuM",
  "key12": "2QirgMg1wSxC8C3VczgvVoBy19JVXi19tNchtx8eAZHeq3x1Lh7a2ziuWUz16yAxzJHWZzp5Fw7jjL9MkXUoWBFY",
  "key13": "54mXtXPxJcnxASx6fC7kzpTtwDb4yeu91DB7B8cEjrtDhCMGbuYgFYnZayw9FZgAQwBMVtF5HKPDgUaZoDysVzTv",
  "key14": "2GVe2esShMxFDidBeH2a66p8GbXdLrtwkGZPGrNd74hGRcjjm9K21kd8D92V21A3Eb5cAdVoLoYTgPyQ1ncgadqF",
  "key15": "31XLsVkLqzae9mRtjGrurvbLqWFXeuSjmQDww4biwvxspp7HGzWDViNyWG76yscY9Pfft3TzsczvkWQCV1BdgEBN",
  "key16": "3kGsRrV2bSz33ruC7DRbdTHA1VMPSqx8sRWNpi2n7hoUJuu4Tewa7jJ7trXiQB5EP3FHtUo61PpmNpPuqMzmP6YL",
  "key17": "5udFxGHRRunJsGgcTvaChHyjWt2cMfRcBTTS8CVLYgKicDeVXKqRTVtzm5aDYmQ2VDgm2u5EuF99xe6QSArAdkCg",
  "key18": "3cewrVtBVR32bjESTC1KBWn4X8WdoodvE23kucyZ2rQjWF5JvLsDqHquiJw9grTHQQmMDjG5VBCG63J7U3Pd2n5A",
  "key19": "4pE4yJZHqRrdqr53FsATFSncRa7nbZArUDybyFv2CCd6kHmZorCaMEvYGPRr6FBK9D7ftwtq7qpDEgaDsvkbVZjA",
  "key20": "4VCasQqbk8kPdGrNfB2DSTjhGw9NuFBGcAC4riYeA6q6g8goQvUbsUP4bWEe4UkGTWi8MpPnQsXNa6pH3aEFgnrc",
  "key21": "53dZ54t1GAxYxy51SEBhC7MvGRDWzPEFJCvKUgRu1uobCHpC5vUkmwQBA8HCqjS95EitdVJqn1bCguhAjzCYVXw6",
  "key22": "2NCDXU947H2hJykCbcKjLPhftDYfwwW2Hy4T1YZTJNLRuaJSBxkvzeHYQsCYuDkBVjsBdyK1bbRQuE2a3brX7Srn",
  "key23": "25t7p7XymvAx3dSAQB3rWqRoQPn256XLJXoaLvbMX6LzUoWT9JETbKK81WF9eYWR5no2TMgjxoV6mRcadDECpLzz",
  "key24": "37zRsWhBhZRPmMhpi4CscKW6VH3drGS1dRH3dkxZJGS5Bd6CEv5g3SFgUPxRpnc1kqb7z6hyktJGLxy5gbLfZL7",
  "key25": "4fXXHbYLVyMtsn9wVEa4NTk589YHQejVZCNRCMisakEMyd7mHtn5QUS17p69FSVuwjAY4AMtcdcgzYGKLDt9UBVf",
  "key26": "x7PHbGYUm7Cj4MgFfUrSekcWLcDKMHVgRHNeoWeK1oq9HSd9gSFQtmXgpsnqZw8yq81HPKzojng8SM1kiFtrYAH",
  "key27": "FH789ijdYBhhS4HQwKDigiXCN6pL2w5VTNNdgmf9T9wHfUBYaFW3xWeUvfqbSyiKUczM8HofggbaT3LvZkkCZBH",
  "key28": "afbifq8Go7vksCUxn9hX5aXE4eAKRfSGRedid1ofznUJ5WSFSuaKeHUH3FFhMrLjXwpJn6HGQdEz9H2pEi6CXPY",
  "key29": "3xpmweGTgKzmDo898Qs1r66tmonzhys8KM7P42iDkNJCnfbcjC93neE36pBYharCeHWpCJ856pRYhhnAoboLjpTn",
  "key30": "2FpokajM3ne3oajAtjz9FrUD89KGr57txqgLnZBB8FAJxg2SBWLQF3A2AHFkAtEiY6FYYrxNjdbxWtZyRfUesUEn",
  "key31": "2uY88WZSbNTsE1eseZGPeHBu3kfbnhVUssovC4YZxEcgCmx1PAmAPNyjCHnnTYrTMrcX2mr8mjPKKPFknT2bkYEi",
  "key32": "5NR2L7xTFLwMaWw647pibvWVDLtnvURMdv8aVEaqLUyoha63cNxb1HuEB71D7PM9rjL6axBjLMCutXXBWTBC368n",
  "key33": "24vmjiXMYmpWe4rB1Tn18qJympxLXHBFrkqJwAp4TLDzpasGrWhzVDeVVBB6QBFsa5jdd4VSyKqUi6tDmL1CB3CS",
  "key34": "WkxYGGVR7fRTEaA9e8d9oA8fqHpdQq6uV2YU2mAtJ2GaVqt6A8FkRDsMCFh3FPZTs5RSJnKWJW7FGzmXxX5xyAL",
  "key35": "4qSf4jyo27GaoFMt18uHRZbjLWagHgpruYy2EDDYyd9ttzSGAGxLhuqw4FC4zmSAzdqSbdaB17Uh2X5Czo4RBBcE",
  "key36": "4SqtznK6VRc51p8ZTApvbkGG8gavvtxq9NYe8vKmJ5SeeLo4QU8iT4i9LsgCiMFYdgQFS9u6bEDfnq3dxzA3Ww6n",
  "key37": "2NgXLfoZDEFFSpAWah7qZSrkKRtdEJTWnk8pTkPWc4Jg29h78KCyn2q3DNF2iBRZYamns6pggMh2J4mCUcfDrZ7Z",
  "key38": "2YgeratSiUPVwySCGYFoFyHn9yDCtY6w3UnyRt9NCUsA4NihCwNHC8vu9HG6x7Ze67W9e71tk16nbkJeF6ySZK6X",
  "key39": "4XuxR8hohhRPKUwZptdyJzVVW9gNLpRvp9yjcjikmZ7uwaWqLyk9wsvu4SZCkccwX67EuckRhUWftVWqJZzV6fV9",
  "key40": "3cgriaKiE273xFuJrojRxC9eibrz8K6ZAQudwh3Q1zKVKrcVrv99PyqJwXFuDpkTyphpAAhymGz5rc9mGGPnGWFg",
  "key41": "5cF3ZWUz6oVLnMVAKFTjEzvgNvanR2REHeMXHWqjLd27vygP7ZFmSkMNCmH2BxbYJDVtfXjvHrFVg8TPtNiMsvFT",
  "key42": "5KWVLFTXXpcP6DBFVAUmFbPgb4dZuvwjr5HeNf987J3Vc3EJjdXrVFsd8ccxfUnP6WdnSNMda18tcYkbrtdDbxSK",
  "key43": "4PovvyyotNYiA6UaD5YFv2yw3ygSWbr3tGkAtxPebKKt84qE5zpiY2P1Pdwu7XidixQzBG6RKRHRTgc6S6c4GJjf"
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
