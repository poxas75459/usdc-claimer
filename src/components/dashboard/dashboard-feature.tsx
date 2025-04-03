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
    "rhaowswKESKY9GRdN6c6VireXWV1oxMHqT1qUELNGCzPDntjSGxkvtjoRjEMsuyvPdFLSFCHeSjb2couWsqHzEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdKqUjQGKz2iAenpwzNK1XUUppHLfjLdHR9uVQBFLJX5VayPZbsr6TJVURzVXHMhExDoU472jzCP7GsqogKpoAw",
  "key1": "3URRDZyYkZQGcyw1nhc9se9Vp3MrtMPSFDDw44XBvfzCP2o3EzrFLe3BEcrCYm5xjvNh3Xd6gvJ6v8TLYaZQq8SJ",
  "key2": "3Xx6Gd4yzydyLHgrbtFWfWyXWmMzvUhBrwco5YVeT3RNsfQeEbf72kE2ghvQeFu4VjzWXSdLuBNcXyyMRYKnLQKa",
  "key3": "2TEi5zNYoz9LrifcXx9JSNW9NSsxFUndAUT1PPVdG52sYoiC1rxR15wHmUaXAjUnPw76YBFDCRYG7bjracMhAp8P",
  "key4": "2iPbUMRdfJyf93sMpCKii46psoHk2XQuL2kBdEWUwRzdBwz4gB2iDttTaimNz52k6ouRLMDSySZGbpWe4jHe4EtV",
  "key5": "26ArhV2T7HmAJdcpSCHJ7a8tcNo2kJpnrnAVytJUie59LzR4qDVKh4VbozekdbDMEM6yA1PsPR4rModsCTjY55Ho",
  "key6": "4LFEXQBSaFuFPbC7W6y4snKEH4apga8Krw7be5x59V62otfcBzmJSqyKDeUijrpjhQZiK4foUvJxyv7gqWeYR6Ws",
  "key7": "2eX4Ct4PPot327PBKFWHb41RYjqMqNV3h4FnHtVR4UZ7aChGtrTobBG22uFjXtyap8i65W4mx9Fr1hurU78bpDWy",
  "key8": "4fjbrXkUfA8dz1HKdc8KooyJWiTQuaUsF45YgfhpnvqpovtVRUbGjrcBP1xMKpBeznLmwLENcgc9gpJePU9bFuui",
  "key9": "f3mkAhfovJVoqQrxEg9gyE7YNxFEEWrS5M7zjwgT7Qi5sCfsVt2uZWEgh3RNSKMdky1FWf7c8U5rav6eCdabc66",
  "key10": "443ZNYWgy5LeX6g2e51sJde5uKYfx3J5LRHhvEuExHCWYCwrqiV274qd8KY3V2xppFnwQwL7Z1RYCd9hNZfuZ1o5",
  "key11": "2dQ4exZAGwXLi9CH8d4oTfPgdDghf3w6P6J7i1rEGgbnCKKxMryVJ7ejbcccPnWaWcdBJzgn8QMYMvCMMbeWwWet",
  "key12": "22cuFWr3TJJ5mQkpAZhCy9mccobFDofN5gV4nVXuPQGTWtmSaZS19zUJjbe967M8XdxataigAdvK4nKGbbsk2eNa",
  "key13": "362D1Lo3g1K16Bhd1CYX4A2zRZF4yiAufkygawutrbSSDizXb1w4LFiyPzWpDghY53xrL5n9dzxF6HuhFKKqgSBz",
  "key14": "61uEuZVyVqE9QZvKWxL1zMpWkQ2NdGt14vjL7ciBDGfwhMyL9J5TEcDXSdPqR2cHHqtLa6Dk3T2EUBApaUwqH2t3",
  "key15": "2Mr19zrxr7yQ6kojBmhpa8pHaAS3EfPoZdGNqzqP2xBEfWmYgZf1Ueh9TPYaKK3jr7YPcw75HnxZsA3yriUXu3pb",
  "key16": "4RQnbexLw7SKRYE6HytAUjsHC9ztonhJEWXRssNdmZSo6rMg6HBp1Csb9k7Gi5yxAuXbNpNwBgSPTCb48hRGxcsg",
  "key17": "29VERq2o8McNn5cwfv5EmuUYSaQmeJTRMPaXDcWVdGXdo7WZqbSVWcPvmtkC85ZPbNYtfeTMb9QB5GnjU2FLfTBJ",
  "key18": "2JtQsEGrh6VM2zjDfDEdjriKQ2a5sszivyqfeKPuAaGpESAHp4Ncw7owsoSziLTzeSzKY8GsFXKcNJ1kKtcZeUZM",
  "key19": "636f2zoxcusiTP7th2MgyZe4D2zBdS7mV22AELd2b3Lvu5ssMEAvHbvpJUUD6B7QSVpDcw8ie6GrUHZs1RxHNdJs",
  "key20": "5Qswbqns6EHdoEtnQgV47bxWSNPsVTPwsht77ZLb1veAjKFaN9zkgmUhzKTZPcp2rnKbvRAp2KxgKGDttWciEjaw",
  "key21": "2qmbx445NrwdPETogKRAJA8ijDirvG2pCHxjaegpVsJ1Lu6yxwpR69msw6CmfBjH9FKpUgdEj1GX6be39qFcGpiB",
  "key22": "5ozaHXDiTKNPTHivywLDfwyY3Zd5EfdsCTmobKPuyH71UkG3qHosvr96iPFetpaUTBxUzTD27QsjsFEN1Rz2jf9q",
  "key23": "563Loog5CcNiXJCg7tEzAbSXeF6CnuNvy1DGDqJmhQwEtfNVNqLDL8mLqpXuGKmLE7FNmcVpcTWWTcBYZXBAbB4w",
  "key24": "dHHzA8yK7fypoXjy3Bimi7iyjXozfMXqPpkdEtjXdob3YwcRrMMk3tKvVKPdgUmVkJP7kDDHH87yAQVCcwugVbo",
  "key25": "5XWsBQWd3wWqJiXbacJgaWUsC94TY7pf2YSxeQDKmV4EpxEn48chShpbGgJ74bML3jSw18uXiPgEUqBisTHt4krV",
  "key26": "4Ua2q9nmaMcxpAu96pVyNyCLontSRzaFatyitFfo8RuENKz2VmH6NyZNMBmwwchvPe2yqyvAzmUSTURN6TdVzTj1",
  "key27": "5DhS8j6aUcggE4fd7RtNxkpevZqjAKUNwQm7bnQ5YfVx4VyotPxve3vXGFU7htTHoWHXhznzU5wzbcEuuNREA4RE",
  "key28": "2ZkMggSmUUxAGDvhC7jAjhb5p8dqGPjRyRD8yKjdYSDEJRn13R6AWsQ3VXPYzaBH1nTF6KYQXMsTBt7nzcycGkUS",
  "key29": "3imtE4hfC5MxkFv9Xpysc4hrhiWS67zvkBRCWNDvQUYvpETDPciPcKM1Ji6mZLajXP67Utr1Tkn2GHXbbKRh8MS7",
  "key30": "4oywsAas24tgg3GgDvxZLUc7aKHk6WaUMcWRpdXNuMfjzVvnh2oChb2EsoYSH8eEqgRHSxHW9k33YDTjqt1YHYdw",
  "key31": "5L8gRtoXiZPYU3wRntmfmPySqFTtEtZY11gN3DGwgopZACJdwxLb93GAjUu9iBHGj1FhCXGhpEUAK2K8mbFUTTpg",
  "key32": "4LTStUHQEu7aDTKhGQX2ggo5eE9MKMUPKkNCd6s9CEDYDwNppBg61jiDUAERu7opTyN8HRkXrUEMB2MjjzVdKSYQ",
  "key33": "3F6EE2mqQ3Lb2SaJqHqoz8aeKut9td4gtrdZyw4Eh3n9oVVEoYQ69rtrBHuRguAdSnHBYVspvDHBMyapHBwVzpf6",
  "key34": "vSyjBqmPUiBz4ULdmB9WuYy7Kf7iKN4PngtZBmFdRZkUqdKwCdzC24RW1KEpQhMC9oQzCWKieYdGp4jMGQBSdvs",
  "key35": "5iajKveogdVkLz7uvSwYgi3a4gdGAuUADuKwr72R95ur3cSSgVCe9jSjThZNVzMZC1w6Jab4fz1nLHBExfoA8zDE",
  "key36": "4txVq5h187HwscWp4mD8fMxwzekdYSSVaRVXmMkKR2mjPQipRRojUWeZSRLyyEsrSmrAquinFWjVJwDxuoVWCGJh",
  "key37": "3xYTRZ5HuTbYNBcwPh2eyMrYRrEntcUuzGQjs536zCNx287UENMm7K9p2zMhjvKcmhMAB7MWytuPHLaoGzYERrWC",
  "key38": "s88cp6boGuRU1FBaDmvx4miTjKX5H9kMHTQL1aGiyAeZBkVnBM7Vbweevm2Z6r78hegsBjc2Z4F12EPycijUbvx",
  "key39": "5DHVK7NkqXVn35oFK96Arm7gfF9wNkQDtEeyrU8QL5AEfwiP9ohdr1y1hXUtCoScc9m5iSqnc8TjVsWJHWMdQk8Z",
  "key40": "4mjDKcqzJWCvsnR8wfU3xwrCeikZReVsLCdQL5DJaSSZkaUa2ACJT4NDDYzKAyQXMACAxCJwXgEhge7j8kG8J3Yb",
  "key41": "3udN9cw4AvDR7MTf57As99wL2twUXPGPrrRhXJrHsESCDaHKrBMWDTjGdCHvecFrcZiQ7fTnTunoyTLKtNjY1p83",
  "key42": "4Hkz9xXpMXbMUDyxKrmzPPzjVCFvbx7KWR1ygx9A5weXE1AGJXo5qmru4o7JA5WetggMrLN3dU1jrXRPuCqQNgZx",
  "key43": "VbpeDregTrxbiyWWpZpL3eCj6hsLCUegjBNfdHo1MB3TwWF1e1jToSVeqJ8asqNyoTshHURA1TNwYkCiTJQjJqA",
  "key44": "UZ7X4zBPfWQm7zy1FuN29xHX98kMWr1QWL7UDTZgscYCeE8nafpCLpUnp8kuqiDc4rrtfwXDrBRDzP83AaPBTT9",
  "key45": "4uNeGs7Vri2eqnWTtsXMjFWVTb4bJCsAxSHE681c81ztucxvzj7voznw8RcHWVFbKgEe8BRBzg2wEcedushzb9N7",
  "key46": "4xtjKpTjKjbutAVsMrGJ9mazhn96NBYsgkfzn74kG7vvgVtfZxaqt1uzmwjswxcqLGgStGra31WJs8uk5rPVRfTT",
  "key47": "53ag4fK76AnyGAGxKAFZSCYkdCgAgJzwKa39n6phcWXubinvA8AzusEBy9Pg5LuKN6YEacnaVLjqbRFgvNgHBy6s",
  "key48": "2QTCGowad3aS3xYW7EEdAUPPQxktMWnUvySY29rK86P8MrdFzvgnToYmDDYrCpcvMtpKbaJ8sB8dW15kV7hZN9jb"
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
