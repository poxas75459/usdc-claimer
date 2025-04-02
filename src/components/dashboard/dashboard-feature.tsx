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
    "3PKFxDELqgP3YYaGhQrwv712RHJxZSiXxs8RakTTb7EJ22trkkYN3w8Sj68oGRx1Ghwn5qTK219QcwGf4peBnXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGWqJbFLnnnZeXDrDvAV5VAqrUohHy9nZvNJfiY8MzjPJaePaheF4FHbm1otmUQqKsUsBzVNdv1GF5iVDuEaD3a",
  "key1": "5rN9yDXU1sMZuRRQUnkeMkpWEeP6cvSZzqhfPvgjH7sKTnNk2YHSqPYeoMt7diM7foiWLZzgtCxTyGe9WtcJ3BF3",
  "key2": "w8FXzadzFVauP8ep5FHeZPf6XiKPMxn3qfQ8QTJA46gZ6EUkki7hkJChxeCnAAMGPgJDjw1sco4j676QPbrS7YF",
  "key3": "3DPZnjgtLBwjhbSNPLVyiZ4ctwtsZqU9V6eWYesB1Vp5aDTwUpyNZYBRQKESxGakke2Fy3KgQmSSftRe3oghXrCq",
  "key4": "3mYhPsGk6SNb2JGcQTCQUC1ZRQg7mrVUVr2qWDTEecvPtEmUudo4czvxw4XkSj6aEiyHSB5uFw6znzNibC5E6WG8",
  "key5": "373vVDuCq3ibvyELefXjs9HMBiqedModSo3njDSC9TuKETRPn1hrb5oxteVZaRjmedM197tyYtg8sWwk1ATRmNKC",
  "key6": "2NukFyZ69VyHxRXi19MtJ1h8oAjH5MfJTMUXS2t52JTaw7nnirRjvhPdfFwYLfR77MzrUpYkaSwZZ7nYCx33sbcv",
  "key7": "gGn6LGBMs8vQ4hY7vQK8v5DQFKTzVR3tuoXw9uDUK83FRiKRHQSWdCSAVcs5zBr7PgzmbQgJ1Bcd14YKv5W179t",
  "key8": "3Kofaah1LTtQuwroCgeegDHNAQozj42UVkhg3cTmEoxRkUVCmAxygSc96tysZarfEmiYQNkfCPhzJA1qfGsHZPVH",
  "key9": "4BSBxahoBGozXFFVPYW7KKJbT7B5LkiLg7fb9nesH9c12dnQehZWfmNutSduWoNSZgfMJhrHibLJuyv5USjX51Ss",
  "key10": "57ePAU1Xe5zByGNS8iwV1uk7LKtuEjPCY7HtLDFW8QyG46eqM5GW2kUH8ZgdyjnFUNyF3tnqGaG2NCdEr4H8iHHz",
  "key11": "57mHw7vBKrq7oidjePhVSLFPW78hwojzrVBEMDe5HP43nVNcvnzzh7Dnp3RsCMvQx94roeo7DhSL5Hie6Gxn982Q",
  "key12": "4tQgeRUQQsZ35QKHt2bsu2J93wUpmqWzsJXwotYCFr17d6FZkwAzG36KsSoVyjg6njGFMTGYTJWT9Xg3mYTpfPam",
  "key13": "hLGqXtu3V4gm3TbYQUnQFDiFvtuRgeWVgNymVZKuNaVqKuJ4CrUrXVgzfS2b5AT5fHV7vRSRxjoigngMas3FxD8",
  "key14": "G79pca2ezPYbWAU2XxWqdscm9qLkHiAap4YDR3JoS5eCFCnPBUfReDofRRynNTPHtQmytFijaHpt4hhMMucUu1Z",
  "key15": "44NjQQQYq3s8UePHvyqqn2sFTSGnLhefxEDN8ssvr3JxpPQSkM58tTvnXPXguRujt5xgfm9SM9QcyuGyBEYFNog6",
  "key16": "5KwvSr29K6crWVimcycarBELua6tujcrPhELBAEB8suBvd5rRBkzbaWVHx5RpxcC1vxJsNep9HKNvWCSidzhGwwo",
  "key17": "3JM1GTd3gr5sPEfiqGj7rUABmxanFuD9KPkVbMaUBFSzHUjhDobYRoXacNdyxJ95u667kB6SxwoSdfPcRLNQqCxu",
  "key18": "5ZBynBoGbw2pf64TEddib57QhKw2eax9pzCk6Q6fipowwZTMRd7UnT2Pa3DNsG6UNxkUDiZHA3gCNE1JUaMu9sx6",
  "key19": "4W2XcAHK2NDPzVRV9mkumDfbmJDBa2cQ5hfjkiEvtnz2UFuTUPqTkZ2y5bPSDQ8KbM4ZxUBEtBvFGARfcQnkkZym",
  "key20": "3UCdiLpDhry4iQVL18kepd4XgQ7kazgfz9nm5ZNjWYEbXKBhYMZGhYpDZCq62zEwHeF7Z8DnMV3YUDvxeafG8jws",
  "key21": "2ny9kwZCHuoqC3Fyf5MaaxRF25ycgKAXxFZReCsJHtAiX6X8X41KBtPNF2ex1K23fnhRdG9RNcouU35N5BnycH1C",
  "key22": "z2Gg8BL7o1Cu8RVt8gT37UoaedUhPe81kAkkzoWz7gEK8YVsprhatNPwgZmKMuCUTvW9TXJbiev61cM6sevmFiy",
  "key23": "31eCWf8HpXoUnmMLWuVigfME7vLyTqiqDy6f68MdHjY9WYMzzN1Wv5TYYi9TBk9YtaFuWjiS3HepJgcKpJ8H8PbU",
  "key24": "2PT9ETXfWMbB9EXrUwDNmYPV4SdHymKgsEfkygAYdoKCoxkxci2yuLJLDGRcRRF9P1RA6Eb7oTRHY8xVqyeDZXZv",
  "key25": "4Jv9NqeiYaeaGeMiaSa4PN2JHMtmmpjGosANiALqTXMFhF9z2BBcaeM5ScUCiaJdYf8LMq6bTAWXNri74rXDZro1",
  "key26": "364y9WoWT9XxbjyCjuYnGZMtk18pc39W1p5LvtMRg7f47z4FSG3gg939nK8ykLkHFUBwXhKmJiGiUNz9C3MYbo66",
  "key27": "4gWng8SsphhpTBpeu4ET9QfdMgzYz3Bn1bcv2Lp2sufykEhNk26svSKX1rdvWhxMzcMtN9zDmK2MAt7kfjLEuxUn",
  "key28": "3Gw8HwjtyehrS1y5KX7kUyvtv72CiDphAudtUJtes7zeBDpQAiLFZpcMPbq42U8dmpdUG8xGAafrggXnfxULCWGy",
  "key29": "28wnBC3FpSbH5yHWKhAAxCqcke8MSipLTUjZr4KaX734GLNaGSAGpmGXSGLDCsGpJBC7sfgmUcNCpjbHNfmskQiq",
  "key30": "3kpUcJXjEmaUDEQzyJXWHNp73E2aw4eukFw8h2gr9FVMHNAntR1ZFY6dwXvUz3qtYB6uzrZz2aX6ijas5yAYK2aC",
  "key31": "etruuBz3g4E5tXkpNWjsvkFcBRiqqxh69J3xzu6L5ECbyDe3ZL9RAbmrPHL7RzH4tuwZZp4R6caNS8AEKCMXZrg",
  "key32": "5bEgDkcyH246UUfR4nHeHTiwKy7uda26yp8qiZTMYo7PhYzgzDF918w49u9EYWWDM7LGm4jYZrBfGCr3cpbuSGPL",
  "key33": "5rrxrXKCgmAxrbYqhxRJiPQJo1B7GRCBJrRLL1uQ4tj17bqaxBhrSz5UwA8Ytvnj3uv3F97okC9KHCLNhEkEWMDg",
  "key34": "v8Dr79skN9w7uKVLj5AvNYt7gBm4sqz4PCbyRSGpijiTqVx8DD2rehqyXCntHaLTwUcgjGWuemGuUyALugE5vgo",
  "key35": "5LzKKLCaajoL5eVqCDcgmGGpmwvZAA3FdJgrB2MLy7gn8Yboo3F9FpzoBgVopv6UjG4864q5hRQMBDLgn7R2gz76",
  "key36": "3qH48RU2gW5rgxubqPogQPvPBVrqNeTtMyTVKUpK5bkrmGd5UDaFtfjwZSn4VNrJzqYpgNZpoJc1Qii35YgeXSAN",
  "key37": "3mHWFVKeavT7YDx5WHHEW7CzkwCxKUYRhMf6Vu1yhs86siBPTov5nMSVGmy1vnWoLp9mDUiycSRXHXKxoQFPpmYB",
  "key38": "2AACFSJBJGX1Rqr8sh7G1vi1kwChxCeidAdUBXG9CZKuB7UcyQearssMaW8UoEVhrNkc5qGKUk5wT9vt5Y4HQAyA",
  "key39": "2i9LmB8sdFSPYUZs5kauuuoP36fJu2KZ9UTVboCkq5cYiUFCMCP6eQNwiesNEgoq6MDjz5kvnEnMHCZqCvxVbtr1",
  "key40": "MHPJEWJJ6pH7ncEU5oTCgc2c9styEvn9RjFr7u8YEew5rJNCmqWWejTbRdgwYbRti3C9Uy1YtE1oy8y9HaZZMh1"
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
