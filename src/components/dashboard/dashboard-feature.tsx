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
    "3DggYRtVrKSo1dZugGM7KaSFbPPegDCG2oCfrvuZJ3UWwfA6sCNj9vPRHA8z5odps8s9GhVGdVJiA7rMCKjZe9r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1jFGNs6kMQSXmnBmukGt5mtBio7RyUR11bXV3dgkzqFJKhkfFhBx4tRBxLpvH4c7dKtcGhb4waLLtFiqNtbeTC",
  "key1": "2UaAF9YNw6pPFxHR9AuHqULkt9TwEryoWa3wsLHty4Koqyiid8JwS5sBbC5hX6yaWyrNhPRZwPZ2QcW5WTqJ8ivK",
  "key2": "p4Zpn1Rcehfkd3fiUFpTf9unMZ52tr8wyxTusAKwCpKjkSLYCGUqhb63ibhe8CPSBHoGwRdbSTtDFUUWs7pSELC",
  "key3": "4x1atsMXbBgRBkKaL3175eg3Yvx3hwe2QnnmEPtipfXBM4oWcp8FgXQijLFnAnqbzhpWKXqLusPoxGo3yM2VamK",
  "key4": "5DFUKrvz4JVh6LadDzXfYyqB7zzp2mSXKsXrwzaGuTVCmXgTtXYw6qJ3zBh9JBnm7kjXAJf5m2zPK2QPLN87VEwL",
  "key5": "59pZyWT3GwXvFxs16bnccigR4BeXJXf6hfqpN59hwMo5J18w7p1p5T7a8PRkvPLkjnfncYuJayUDzrxxsC6Y9CCm",
  "key6": "7FxhwWu3HWqYkSGfiAN4wagYeCWFvcCo2V5CbFJgdTSsAcqtjMWH16J7pmsULUwZ8EoAP8d7yjcE3cQHBRoq1aH",
  "key7": "3aBwMNYvywHrvnhJuBt94MDcVdDDM68TvWHK5Lb468nR4DShhnPVNoMT4VzkwpdgbWHePCpiyRyihcguo11ciw7F",
  "key8": "4eTdrmgPVDr9iPdRG1cr81bEofkzmhYySq9rT9A8koGHjKDASSSWsNSUN5GCGRmvXs39uAU9JC3QPj6MPSfXP3w7",
  "key9": "5rTAAZX2TJDTQZ2SeXW6oSxdDMQLbX3TgyiZajrACNYeqoyUmNFXRVaL5mGLchYwunosTBvpVh7PuyiwxAKE1RzN",
  "key10": "2FDkwuU8TczS4cZAPbuTZsuCgYrBSSakgY1xio8Ug5F9Rm8XeXJ5NSPMbCvBm3ucYuXnievkLQquBPLyhAXQ1bYa",
  "key11": "VGTGoLidPEAcFiJeLV3NT9ceXcdcWWqHQAd4rDyBX6r1QS3rogi67P1h3t1oM8f8VCHN2TBQefdeQsLTh4xHuSS",
  "key12": "5rfXbUv44bnPhJpxBwbUwJDi6LYxAFUrUG1GmaP7tChvCVzdbn4WUBuy5MZsay39SX2pW7TG58A68f9ArYY6JqX8",
  "key13": "3SmGX6VJXrqRJiaWQVpTojwdgsCKw2QRVrkLGHL5ABRBTAAgYX6MZ7dgdJCKkPJBea2sQREG7oq5kmuqrnrLxTCD",
  "key14": "5DoCPMdoriTYrM56VV7ep7L7kPgLYshM29tUhm6KhaoJczUF4qWLDVjpKwqBU5ULNd4ibmL12ajUGeW1fcu1BXBP",
  "key15": "2CDMGRGF3UmVCWzeiCzPxQUsVCv58vhdaTne8AobEwzRqqQ57QNVyw2Q5NS85hgzg1jtB9oupsNjGWwe47W3oPx3",
  "key16": "TimzDnSNb1hXy7HMrzx1JnvePvv5ZWSxGPUZ8yRWTuJhcNr6c9mC3ySDFJi9dptN4qsa9JvdwQhukTzcQ9kR1x4",
  "key17": "46sexPbfmXGeGdZBbD6FAnQqakaXwxU3muAjaaMbJSzX4zSVX9pa6GZm1EAVofzeLGi6DER2iK8JQWV8GizhTyaW",
  "key18": "3k6ctV8CDfxTqQRcpZ9rncNTjgGZVGZ94JuBn6XfFwcxZfRj1VDVTsEpuFuHCK8aHzH5aSxWMqWBPst49PDCFsVj",
  "key19": "A9gXUCXzCjyc1DPd1HAeaVViRXbzT2gehJiiFDZps9Y1HPj99pzSboesWrD6yaXasPbbS7Yb6HU8NxPBCxoKjFu",
  "key20": "5WHFjvjReCiWLDqVAFsGAUX2Lwy6bABVxGhDKreHGuiVCaD45ahyPPwHM3RspCRUyx5BakRb4srtMWpmoQBByvx5",
  "key21": "L3c36575SaJPZnipCfMRBjBeaJuej1msJwgBoGz2rjmaDMTms4u84voP7eFaFWuyDj7XHzu2tfKs9GSEMBHniv8",
  "key22": "4sSAnJQUGQ1Vdra2Z7stCqAGGqZ77ejH29tKtQwvb1Q5kFqWkcqYeD5vgqv9HRyumVxfQHFJib2bWzH9Aa1jcZwm",
  "key23": "AX17FPVBW2ScPDr9AiCDvKW2rBV2GBiENomhguHtRUdX1mhLAHyhxyHtF94jxxMKPHnwN9Q9BsogwGPc54VnZQh",
  "key24": "4NNB278yJKmM25LdCFaRoqpiJd9G99Q9kmTpR9C6r8Kffvtpo572ymHZrXefFAKkB8wUns2aBjqbujMS54Hkc4ee",
  "key25": "4jCKgnHnidwB15D9wn6qZtFWrxbXZhz93g3GTVQ8ACCN3JSXS1eSoPTiifyJs8QFSN3ipP83qZGNMsT7YSCTmhoX",
  "key26": "5rjK3todrD2gmeGpits3ZwEzmdtvpx88mBKJY9eFigL9Fbt1QSfkcCkvh9vX5WFSp1xCsTyrcqPU52F7zni2eBF2",
  "key27": "63TqPmEjh5SKtCdfgaTPjbWMtkKBYR6ozHfRuP6eS6pBbikaYTWmovJFw9tp8iN9nVAJy9y4C8fSGx9YptEDnH1N",
  "key28": "4ZH88n5wnT3NRLsKv94G4edevzLtx1YDYPknkCeDV49HWBiJEtEeacDEn8RnqRWr5aZJVdpWNbH2ZtCHoTbzZZiq",
  "key29": "LjK3hUSCPriyvpX5M3xYmUKXSYt7o2VD4D8mnwvMCdULYhYBKF6RJKyuiw7hFxETpLncesKJrSPQuoaLvgirEJY",
  "key30": "296MyWNuU9KHTkjUiMyKF4mijvwfSLz9ntdb8QPEnFYsQLbL4S4q51WB78fybMJHmPz56TFfATmxAveVfnRkxUME",
  "key31": "5ZoycemACPs8cQhYhy11AYp6AUQbdDpXvn7fDh6YsevsntptzCdDTWBr6bhp2hjeVJpCeDF6i6eLZx6eQYeTogn1",
  "key32": "5Fan4nTbGxibsaySxdr44zLvZA9dpevUCZQdzpYUdVYU4FFr8LBMzfn9qATPyFKzvqihkCcKZ4XEYmZuZ3ZpGZif",
  "key33": "5eFUK1g5iQzTojzGXQ2WDhyftg4St95WRV2Jf1xyc2EFyW6CD3H58ZozNRprzFwiMCeMUjphdKvCCLgpuYcDbgfS",
  "key34": "5cKz6kA3QhajU6UApkh4ZQmc9TbDc2nLu4d9uHSfEWwwsEhVM8MQ134maYKY1rkmtBxYh6dbBaFwVh9qiwHKWVXn",
  "key35": "4sb4XVaC9YxLXt6ZjHDQpaz1MRQ5NMaYRUV2etiaecPhuELAoLUGRfefkEK98nfVzn8eskGk9fe5aPuZGx7nuCyP",
  "key36": "KHar2zA7Q1UMx1Fnf3jqBFzzhafrEN1dy3soEzvyUeHd869zJHZDv3f1ASrdfAXKNuRGAXRk4gVtzrHbnP23Xg3",
  "key37": "4yR2SpfdHRRc7Bad41aqLraqXhDiN3isbfJJudaXU6CeB4A5y6jzFh4x6DcM3ik8yWiqrpJfJbUD9TZVpnDij8aJ",
  "key38": "4LmXNeN8eB7szr9chXEBxNMbcK3UeSEHAUuuScmqcXBQoHV1uPu6afhqHnBHBj7Af2QAF9BS1uUGwxBFQ4Nduyuv",
  "key39": "4hGv83pGMLzkGzZVHd4u1rYsUSZC4djr7obBYi69TUsiwEMpyZAm5zXQ6MDTyeXb2trmHcKKEk3wHoSZstK3MWBF",
  "key40": "2DzaGAKfj5gQjc3PzbXNk8p5vXv4DP3w66KbtvGsAiNJqKBuGzMBXZCjWpq4WBUBF4UvVBiczHeVc961rhqXVrcx",
  "key41": "RRm4EwDng182yj1CpF7giuz6KrumHousuezuZH8fT6C9Tm2rNqymMapDkEMxsstopxBJ1SCybfVxD4nuTy4SDFt",
  "key42": "5EqYkhr9fE3dqS51xgjHC3kicLiihCuKxg76mSSVUy444df9jqLs7muTPRE9XfcxZWHduBtho2X9W7Q8eUwJN2Ak",
  "key43": "327sHLUkg312sKv3r2nTymvaD8d5tcAxzvHYaV3GkC7z7AZTotLAm74JZy7cGTvwc5XPmqU9MspdjhszV1v61F7i"
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
