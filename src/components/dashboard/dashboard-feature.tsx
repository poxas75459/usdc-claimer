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
    "32FE878vU8AJHLxrYz27uazkNnhwBzPnizwVhNZXfEV7hhMn8cAun2X7av6a1LabANM3vLKyA8b9B7v7FTNUg6Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNs6NSGTJeDTeRBCnZUFVJZBgMo2aGRKvw5jYUrCYirdNDHUTxzbVugKiqzQ9uGYTq4PN7NTiKAnowvjDk97tnY",
  "key1": "2J49Z3zLtWNx6vqkhawN3kyd4XALEQMEqs9KyDK9AJXUYiLVoGTofQunR6ASUx3nLwqEgVo7wuUbpUWyfnrwsPJ8",
  "key2": "5xG1ib6kqoYrzeG3mvGminxvxme9tasGQvy6nhXzwbgTALZtthYF1fer1vri3zgXSMNfqrFYz1Ju5Z42WQ4iqz1v",
  "key3": "5fVV2pkeX3GLePsWzQnUL3zydAVDmvqaTzZUTAP3KQykAtNuXD72KK3Q2ugBH4Akj8Q9tkApeFWNzk7prCBpqCFE",
  "key4": "bSNBJ7HU1WraXzC7zW5J5Cd4b9TEmHDyViTKGdUoPPGVpHizubf1tX8LkppoiFCL8cyaF66ATtAgws4PMcNXU9Q",
  "key5": "2k7Cbe1b2PkaVuiPPLEHzPkvabQXGp9LJwuzQULjHE2vTykJRUcRyPDUVoS4g7nKcJDcsVVLNeHGYBNRU2NJMpTg",
  "key6": "2o7voA3j9vKwpu3zCMVocatxcBgvnmiPqzDnmhDPEC6dWudjcGCYTAXdZdGh7G2Wt1mdGdGfEDS6WrET1fnd77yZ",
  "key7": "4T5Gww8YjPX7JgCX6YicheCmauauPuDNuesFesQ9YeaoBAwvHNuwLXVPxdeC8oDPkEs5DtCU5LKRN8qH9KB4ejz1",
  "key8": "4tyzqo7UyT3cJcG9zn575qaXRJLj2hz89utDTwQkYnGry1ti28nWMb6wdZYcMHy323o5E9LK8iDyHTosoeG32emk",
  "key9": "4JnkHfc66rx87rh7EDbqckKJAAzyigcDb5JDs6qQQXo1GgMbqtuY4FaTPNRxSDJnAyAqSuUFTF1nFFrCGjrr2Sqc",
  "key10": "8uk64UBEEw1mixAMMqDnrNC1Nh5M9qAZEEWE6HR3JUvUbmFHDPe3FPCsfbCqyh4iDMTVScCcJrtwp2jJnzPPuoD",
  "key11": "5Vu2WdC99GvpyTYExz1mUVZ81ZvfY1JojpiPWhsfYUbQtxcNgFiznqErEekFvqrMCdfCveTMLJXXLR6UnWKdjRBX",
  "key12": "foiZAs67TPZqg3qquUjtZTvp49byPkYiajragzfheFEAoKoVLybUD8X4oU2hxCRyu5bQzdPQPcGoQStXRZ69pcE",
  "key13": "dTusgPcwiC2avAStn6z8QX3bF9Ng6ZWRwNDBfFxkFaUDuvJ78M8S398xDGg2gRa4kwY7Tzvmj95HsScia1pNS2B",
  "key14": "2FphPLMcCdBH9nADvbEsFVYJxXvoJMzC1fpjBsaTURQ4QCemivGS9kWr4R7MYiedLzbwsnszDNxYAeBVBF6mpRtS",
  "key15": "5e4esbs3vBpmgdZzfs64K3WmMF83ytojfQRkUu8H5USY42iNZweVwPVf8UXBTkx2vcVE3e4QUUzaS42Bh64EN35r",
  "key16": "2e71FQZjbqx1cmSFVeXTtRMctuHXXmqwtgUWnHoZkRmh6SavqSpddraZi7o3vVzyqBCEj2Uns2RuAy71FjEf4toU",
  "key17": "5j2A7HvZBtnE41XpGgXJxuY6Z1AsCNqweqWohZYVGM6hGWxEfNf4xUb5gJL1cSQQUCg3udCkTyLQLPaotzaPuTp1",
  "key18": "5FU1d7WhFRbDceiBwkFAGE9Cv4QN8Lv5gHfH5ZwGUzU1BBcFT3A1ns5XS3abS2odv2r63edoGPt6zVWT4xPEvsbq",
  "key19": "4VhiWeafUmZfoznpc7iMp3uxBdGFgB26iGvYg4rfJU5qAbe57beuZGPM4JS492CTSkB8v5UG1zSPC9noFB5DSAaF",
  "key20": "iu7TnZXNEg9PeQ2RFxDFuv8NuQBUZxi4hvXyR3hd8VFXuq9gaBq6VbiGfFwdRqsMmoR1XcT7bYTqiUVKvDtwXr4",
  "key21": "3cwbJTKcK4RfmGfcVHnjxonU8DJuSbtHxFJzmwVASNXTBQN9TfYWVw67VXM1Ug3A28pyHiuZSvHZMKQwvkauyAgN",
  "key22": "5Dp1865dBhzF5u6i2mAmmJDmr3NxRZ66vphwSyptaGqZQMeahFCua6NKpPj4MXcLF3eCcLUfVywvQa3k5k8fKJ18",
  "key23": "4K9nQXy9qLDGdEHm5knwLXRTJsTd4UJfykh2ydCHFpeNTxbAxebYGPprjKKgPAn5GzkgoU4ok5M6kWA4VDNCyGfW",
  "key24": "49Z3HSTzhrcQnMJqQYT8SyQ5fBZVznpC6RLgfNr2s3dEADMW63gdxPSGP7zjMVPtr2eRdRJQtDu7HSfjvnMRtmin",
  "key25": "5aGWAiEcDLbamZpHhvvYtxT5W5zCoAcYrE5PJEMQWS2Knc6YsCEt4RkFe6zUQburQGEKpF1meLRwFz7MNuEaASXZ",
  "key26": "2vzovkBBedMNSguHDBwZ8sNLxVxULRQwAJP1j7jD8QTB2WtbrpNpgbkY7E4TnR4w6vy8QvitaAusmRksX2euBmhi",
  "key27": "4VPi8FxbVYWGAAoZN4EBarY4mZCuimHnbDQEVhWry29ssfHo8EZD8B3a7vczkHqGctvWznYnSTv1fjYjuESZmLKJ",
  "key28": "5EyRkjUzVmk1aXFCXCmzzLUFd4i3MqdH5A2T2bx1dEdtjTBEJZkfcsFveo3LzPNoEGZUQpN9KLzMfdpnWxFN65V1",
  "key29": "4U8RyV9tWDeyq6kSnzxVoMQgsH74HK7WZ5QfHD6E648dDqPoD8TpMrp9yXev95hQsuumW1EFXxU4vPUiygrEeYXC",
  "key30": "3sQxKrxPDJgN1FJc2CbEVdZ5K1We1FhuLfkWQ7oCFWhps4E3EgmZsYHLZuB7CV7d7G7s8BEWrczrVW8QispECVy6",
  "key31": "4qzFwt6M1T3s8oganD2QZRBLKiyLnJscd1AS7Cb4Go5u6Unj865bHJ5s7AiGfyKpLkBPt9bQasQuZW8JjgpSQRx7",
  "key32": "3ModR3qmBxqRKA8yDWBJTByYew8DLvcsEkzrjkiqMevHiVcGBL9pQ4hDkbLTsiNTt4SVDs5WbhejhAwQUUptWNKQ",
  "key33": "4FmaueL2mJUNyzFroMFT2VuaBRBNtzPEjDbrDMKx1ocmdWHqUahFzESAfxE6MNWJsinmdbYALLhNjgZ5N3fGUxQg",
  "key34": "2nCGqVYzkV6Vcv5HYgHp2UTmyycfaRjQmh4cwjvLhHMr5nLYGKpcRfMeJKJEW2drNDPTbtnz6JZZKYSqqs9uhPnK",
  "key35": "2gEsVDVP9chjmyPdaJqrEzwvGtHKy7XgDXc6DamNxH8wqFC3F628MLGWzugWy6UE6LddcbQJ4Fs7VQkwv5RK56gK",
  "key36": "KVCvfW6wUPo6Su14utnJPigQmMyWzuZtozNNrevLWbwQRH3GciY731WXWgyU72mpry4ETPNXf4ndbyLCU4pmT6y",
  "key37": "2nNH83AugfBJEQBktDSUqv3FK6JXYKKLGx3B9UspKNueBxZEW5ZqUsg5riVNLs1wb8eUwrqHn3M1tEMRhjaQBfgT",
  "key38": "5CmpCr5ujuP4GgLKoCYSLwjWiRLmzYjyj3w4mVsfbi9UenuHpr2xeJctWk7rVnRpmwFtM325vCX4zTtZcQddggxa",
  "key39": "5so6BWY3CEd72xBRp3yU1PDxzHAGRFEEBfKViPqsSGQny26WBYhZc5tf1b8Sfk14TiYwtJdgiW2XSvfWEUMUjJBD",
  "key40": "3J6ZZzyoiyDq71mfxNMjGUaA5TmAkgeqnFr6ierWzTD3zwgapzt2gtZbVyqPobmrRyvZR8sPvMNySp6iieNLXetz",
  "key41": "3eHfaZQruL2RaKZanbd1xR43PJXwRGj2CAjTtB2xRqzPP7BLidC2hcYnHQCTPgNHCeLb3vqfiP7gvnQ7jPUQsFNH",
  "key42": "36kQSTpE8gjo6Y8G8iJzHdziigcn9rLcu7PMduhTE4TDAoKyTC8ygMKM7LH1r2Yw4TXMfgnV8Q4vvajrLewKxSgE",
  "key43": "62gdzkqejTJNtv25Bq3ao8Un8Hp97Ug55XpSGAekfVTG7d6JHY7hBbv3HSSMLrk1fzVEPJoqiELjrHwLLqYKiCVH",
  "key44": "XdJihDCQvaMkWmNdt8KMuddggudxmsoK6zWotPUTG3jJ4GMiBakpd49SB2CJ82KUQBh4dntfUNXhJu3EUyeb1az",
  "key45": "2d7RkR4bx6cPQjEppoxqw9aeqR1vXdkEXTi838TnCcy4XsTDAiefLGLHVjQVuVkMeEbqWWfMbGdFdSUDn5SzQSDN",
  "key46": "62A5YjMRpoepzBdyM13q2VZAZsCVM8z7wkxj9n5QwBDaZvgy1ZabX5E1NpcDzuyhNLrCxEZkV7hVEFQBCTdY6D1r",
  "key47": "5cjHhJZAKTDvnE44xBJtX1k2CrPVBs5hgdKWXkotDqHrQ5n7atYMxxZUAygJiLxGv1UVtUwpuF6yBnu9W468Qq2E",
  "key48": "29YADza3ccP7FV2Sohj3ZionZheau5dRdtpwFAWLhX6CA3ZKUrWHD4bmeEYCuMRA85bM8cAuKuKNaL4wfhiCJXqU"
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
