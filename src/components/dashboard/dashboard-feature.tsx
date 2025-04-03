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
    "5Rd72x1Xyhh23oLBnQDdHXL6ZbGGZHNYuFeN4fVMGyziuLMhjW9KYm9Tz2hg9QqX8CM6htW81tSJH1JRHkF7XPhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1YucEW8MfoASWQogCW1PeT6qsxWH1oNpN4zLVj3j5m4VHmSr96r8jnBn6DgVkjUMRbrGxMSnZQWXbZjQUnM49c",
  "key1": "64j51WSk2cerYPXQUGXrxyfc8jdSrn6BTGcjhVx1uUzToXpKanuSEMTa9i7JgpCCLb1tUJhfM2gRWeu3vVsMdAfw",
  "key2": "5jV2b94vjsJRvHzKdN45q3Xwi6ehjpaJiaCLQk38rmhXND6pt5Jpv4YKLsQDSK3wLrtQLPcGrQmpm2ocWS6NjjYz",
  "key3": "2mAkg7V26MNNy9A97VjB2NnhuvYJqESxSJn59siHX3DGmvbMsUrWMcRDm7DJ8bFx5p4WkFDKnRsQvb1piqdtwtXo",
  "key4": "jdLSuQfi6ZGSTB8dzLfakvMDipnNkE9JHZwe8gEXpU48oUbYBa8WMv6LBWLqVUWJh1E1mdBY26MqhL8Phy3Jamu",
  "key5": "671LPWmcsDP95gcau1jeF88dZppTxWLiP74KPvCXpeFHtz5xeRmAj66ZQZamizmdDcqKH55gwFa6nig1TVXNqUD8",
  "key6": "4C5DJK991keiF1Fa4WjoQJBALAk6VcpejQJy4F1Fo7ht7V18uTPijXy8uxttstyyqVGKCPMepCR1dUdiz8bJgpbo",
  "key7": "2UzaD7f2FhNFciZ2J355AVAHYM6fyZu5rAqYWraj9nd17EfdPxioYqj3M27ZFuB2HNxNcSom2y1QiyR5aqkjJ1Vn",
  "key8": "3yn9atE5FFNpdk9N4CyARs2G9wtRkPyuiC8C6k7UdE4udSMHyBB2HSwMkK64xe9tYxiJBFjGxDo6w2DxLuT3ftRr",
  "key9": "wX8HmFRpNJJYb6bQKyNcUC2Jb5qHt2UPHnfNoQCHiiheaZRn9eUj8445tN9sps9mWUhPNP4vCw77KaLMGoLLzEk",
  "key10": "vE5yfMhLLw9zSNadpfrxyNPwDkNfGUARaMfTE6ajeuXPN6goDuc2ciXkZipeWxzjBuix8SoKV1n5jFrLTLEnBBY",
  "key11": "3wNetHNqsyBYxW9zfZNxhuWyJqG2F1ijaddoNVj6yGR8LjU6RzkiqtSJbJLqotyeiy8jWidj2Z7QH15UXvGo5GZz",
  "key12": "3a2bvXFqDDgzkpSU2fVcnUmy1b9sr7SL654ckgFby9gQdpmabmnKCgZJM3534bYP4ygVeuyQsNTmyFTGZ1sfvLZj",
  "key13": "nG3nQ1VTLKPPq8WH1oVEUxA6QQwyadMRiYPH5kyWB7E76bP5egpH39UFMrXtX6R43ab7DHHfe1C6bbKynN77GzN",
  "key14": "5xaU6d4GB489xGBd4TMYDJg7Ev9WtKGKCtG1rBZju5DFiicHdhourzaZhBJmN3rDAHYXZb6KUMkzZuBosozjg4Rv",
  "key15": "3sxNbytN2Z6WkrpGhNngyouvX4kJQmUeAK7sHgtyXRSNVf44Vq1DUVcWpBNFv645u8HZPUE9JC5fn1LPwku8zV8u",
  "key16": "34WZ7vR8PXHuzCbd24XMjpSdv5fTgG7ejbd3FmJPcz28C6B8ZqUJei5hFyh67g7FjJiGPCFYBP8Z37bUE5Q9jMzz",
  "key17": "3V2PXEq6QjUTVSDVKWqurvpFCka5zQF5gezBfHcTj38KFkgZaqgqqWjky6vaMYLAYupMoSUQfFDT3wAjzVCffgHT",
  "key18": "sX4vSsUxhdBdBspKRr3YxB2X2PvQRZZX1JFRfLZ9C3b9XLykgNtt65L4CrToj9AxYDhAFc7NkqxYaRVBqMHC9No",
  "key19": "65LAqnNmTmhkVS7w27PULg2VBFRnqAbZrka6FcdBreBEHjbAfjdYrKQbeTmcUGmNcANMXFcydC3VdQRkUdhUhEsN",
  "key20": "31URbPpU3uQRU6DyRjyTQS1UZ7k6JbQbtZHyDcPD5E2DFLQurset2fPRDVSMuxadai2SJ16fBAPQunPkXnu9oXju",
  "key21": "51oxAzgnN1cjdDp8dJ2ESgto9gddzDNvTpNMoGCyxyHrCJWK119dDhG66UdSPdZ5Lhwt2EUqsGq2e7oUaXLYk52x",
  "key22": "k7pfRziDkonv6EvXviqEnVSiANZnePtwQLpow5XwB2VzXrDSAXsL1JLmwEN3FdSk6WhARMSqDQ5JWffKq8VLV1j",
  "key23": "3VS8eyEexw7HwCYpBCg6TJBbkfohPAcgPTEFKUMx8tDbN7pSYa8UrVZ1dd1LgXnso8VdaofGPN2Eojj7rk8BDK8M",
  "key24": "2YwwA5dtRrTDVXkoS622BWKWnZKQ9eaEiZmeaC56zzjF1Xx5v4JRKxk4M7R6HcoLdQTPdSMmwiAS64YSViP2PKH9",
  "key25": "49Fxjw1iZHRfRRtRE39ZsEcYzMgEUNAHY2QB4o63pTi1vnTZwmXX6VHNTTi3zob86kgtaYtbySLDbgcMWyP5vMV",
  "key26": "WnrWAweCbzxnbkVuJS3hB5wcvMbmpoRvKZ6Zos84u8ZMkcaxawpcWoCvYxGydtuksVYFygQ2pFJkJdCfkA2k3bT",
  "key27": "29QoNesRD4g3fifPqoqU9PaEvfvHG2yNAkUFXRAjUM9DcP4y8wHPuMSRukrNyRrCqY9vSiWyxsVNN1ryV7CzNQ1r",
  "key28": "2q9qMv8ziewuLoSnfsWtTvotY7ghsJP5WUFgybu7Uv9C6ofNezA1nemuxBkWvZav2KcSjoeYwnPsGL9EdCaNXVQR",
  "key29": "3whXpqeEqHjGi8h93oHVb1rzFucaqp92Z6MWhRfn8ZdEbNQK7Dc7GSTNKq8pdcFp9Xivz6mRyVjRMNvRGH7gKmeH",
  "key30": "2zumqSgwr6nZmYnXVju6Ed2RtXs7yrNTPfnv6ZRxVciJbnAhmuyDZtA5GNHP66WWtR1wn6pLHruFzerba6tU3yV3",
  "key31": "3fYwbFwknKYXpsGTwpqz5rAwGaZtpLHCbjhUYeXjKnfxh8EbRz5Z3362u8Vykz2u6x9SdKn1yRLJAm9FfYaDr5YH",
  "key32": "3eek3R2HvgRMo3AzEv8DoqiXMzPwrwLH8LhF6SMRtsowyQ7WrsUHq1W11cujTArjZzqM6Gg1VDhksWARqAKWnhet",
  "key33": "3vurKhC4A9ZVNW635zhYpq88asxcCLZK5wSmiVUdZtKBvqmRyQnc8EAkupPNEaGaPjLX8H7EccrNzFWK7DU8rePa",
  "key34": "4f28eRPvrHNxoRabKvrnQA1mW1rZzxTQR3Zr9xNFsE5Da73dKxAbcbXRfr4PDQRSTG6om1THd6wtZtcmonVgM9cL",
  "key35": "5ZzfjrQMgNfdNKrkAtWjcqfYF2q9eKKhNbGAGydyjjLiCXwsVkDgtrNn9kHBFsHfp23mbJWUmyAmgECFfuKYF8Wh",
  "key36": "5UW5PgqeuVNkxxifeJeuKjvsUxSq145x59yEeeAb2CAZKLoEm6MkqTU4bp16wShZDnnJh4jxNNaA73uMA1tGPb5X",
  "key37": "2Lcgf2t7NVL3keEAmNeJPuREvTrMbGNtf21UGyB2pHMiWYQAcnXRLBdCj1Bc8cAu4rTMfXiBCzZiKLHckMAvBGM1",
  "key38": "3tzBT4xxLCEqNBjtFcYa38csEU944vJ3F8UCWEYG5BAkB9q1tLTxiQeeqxiV3NVWk6MobpJKqHDfmLrr43e8cU9R",
  "key39": "4Ms8S6ZeAYnAvdynWKua32ahsePXkDsYugGN9LcuWgbmKK8SxJaqYLBSYkA1nnGv2dpZ9usiNm7vfPdktiLceott",
  "key40": "kWQm8AZFriA1GMrR8ie9TrcivzGzwHYhdonH9qi8MJB22bAL1vzrH48oiefhA6SadG5dbyQfxJLy3Hc9MzGjX2j",
  "key41": "2hR4bgwwriZA9udqJ7b6YY4XWQwwNHSewBZrtQYcgTJQHkGYfo11fb9Q6enogjaqvC6mKSmxuLLDgPW3XYQ1CCkk",
  "key42": "4xbQRHQGVmnpgu22fUxeAV5qu2RXrB5r73BEUVUYDWiX5LWbwwZq3Pw9MK2yqV44MPqa17TR3XfhjETBBrmwsZkg",
  "key43": "2RV3oAxcbAN7qZV5Mmb33fwSTkQKGwS4oNixdVLBfjE36T3sCbzQBATiz4uruoiPMnFppd3gV8WgLmeCfqrMTw2r",
  "key44": "wxVwhU6sutFbMUcctsiPr1mzobujA7VuFC9MKJZ8wvwaGfw2Z1YF3foQuVKZnGt2sZy6LtigT16wM8EDXv33mWJ",
  "key45": "27zZrfVRmWBRgqHTNLvE4R8FeeX6kTdMLbCzZvusu76sUDUPQt4KPyHL6Z5b7EDtqF3DnpU9DGAQ5Ss65XHvPVH9",
  "key46": "4f4TNBeJXEhgGeMjkGgNpnCr4dYF547omo67jnTWXFaKGipHzq2xzwuN7K63MVnLCN5VZWg5X8Vcmt6C7xqVsuDR",
  "key47": "UmndP1bsHpqNzGU2qv7qJNrS9P8owDu1bMpfNnyAm4xUy8hb92eQxuMvjCVcWgEWvaCaRYBZnqyPZUZgeyyw6uf",
  "key48": "52aaLSu2465Q2JzNHaseErr2RKCfmUxLGs4pUX3StopoDh3iq1Pr1ZUmhBMasGYhRELkDw87BHrMrqqMDcqNp56d",
  "key49": "SfqwGNd8Cf6ghiyxkzxyW5TyhQKgALwD7adW7i1ehnjC8tQmJLySC8Z64DuiRKwuGRphd9BCR1wZqwMMmidT5xM"
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
