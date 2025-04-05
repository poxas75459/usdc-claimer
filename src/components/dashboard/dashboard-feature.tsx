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
    "5ryPxgwxN3iz7SfRvp6WnRz4PqdWB1HJrndZtWss56DttUXSoR8hfPduHgRhpf5g8dhh7ZzLSJoJr4KjM2ZQnp7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7dKsaQhk9iB7Vi7Pa7mj3DjCbZ2Qkg8LMZQEkvj3U2c3nsmabfcioaqic5nU1tY9ApXozTpmRKhKGUbSGJXSpo",
  "key1": "5EZfUN3zFGPjhiQ5ZtGeTQ3xBS8vjt3YbUu5mqtqPeZyZAErXtwfQfd6Ur75EdfCULDBqSiJnm1LKTUr5EfJ1urX",
  "key2": "2JPeeCepu6LE5r3YGUJkHZuVfEfzTipkqmnCahSQRe6RTR74tYxUfHBeR7U3dB9Ev2knHsQZDRjkpGD2wt5xUb7B",
  "key3": "216cqVWRCuz5iXSibV33aamaGWtDGJRWFY93As18RCMeePaJX526PAgU5D2nRsweseT1HKasFpRp9RVPCiEEK7Dc",
  "key4": "5aJDPFosJdTTJXgNZqQkD8sQyDUqwMpxq2ejPXmi2LDmGQovuorzPDmVq5Fya8ijUGyeRNMmLxE8bsXLX64GLECc",
  "key5": "3zAjMRvfavTPv2kk6EUJANJVQ7fmfPugTPWtHc6F89p7682Yt4QCRKZCQNsmJNeaKMeJ2rYULVoYQnr6YQEFFddx",
  "key6": "4sPRuQAeMcteoFtzBvBYTeRafATrp4vPj6b2mUSMvAZsVw1VW128YV2fSSUVQ6RjMiJ8d2rvkNvvsxDF5SoqWq7Z",
  "key7": "3tmsmdwGSKUJvqkSzU8XqXmou4vMTHM31zfTEdPYaxWevNC8naVXsPvLuc2vKWfA1ghoSJveM5iU7eionMPYC9zB",
  "key8": "fp9sf1B6jFfpDQXY8xRypDWKFEgjpvmGTouFACUEkT3G1qKHiNVTWwapP9SHMiFyEbqDhvddYzbWb1Wk6hyquja",
  "key9": "21vnat7UZaBaNJMd4qSdp2WBJ5GxtNxQTRBhCd4cxkyDBbMmhKjJbudzSMwPQekKz5wwZvrNttCyypyUgwMNrGoR",
  "key10": "3pj6WEETztTcDncztRfVkm9h4gF3CG6Ja9phnNqmmpPnNBwXmnaCA3WKznHfajHvTmLF8iAv1xEty55E9jdszRkT",
  "key11": "3BmhB2E14TuZ4q5NJSUV7yZNt4icmYawfaQHF9FHk64396QNoqh3Z2eYLe3ED2aqv97GDqZHenYqduyqCuUw9wVF",
  "key12": "3g4DouC2v1LSqgoXEJN7JHJTb8B8Nc5deigRh6bNFZjMqiCDKQvLMMkmUebkdE24de9gH9jptjVUuLstZUKNFJgK",
  "key13": "4uUZiin4f33YKcgBXg7uB5vh7PZ2PP3m6AAJHEp2cRfAbVPGwUsnD5wpV3SLwwmJzBtoRhob9o1v3BMd77wBKGAn",
  "key14": "uxBe1DQ455vsBgiT8ESm74seZgZXD67dr1Ewh4PvwePxV31JrW2F1WTCjkTTSBbwBNc7jhVKFoer3Uf7RSrAbyT",
  "key15": "3TjwiCGzV2kmAJXjcJ97LnrcqZfQMxGNcyhtWSfGGF7Nz7RrBUBJg3Q1Uks7mS49V7VsNCSR1nti4yYM8PSuNmvE",
  "key16": "3ih7q6Tq58mjzgqJb1DDHZVproVKrFKGYhx3C6Zf5abJNg8GbvC33c3oBECELfFUYwh6K4ShMMkA79GECfMCd4QG",
  "key17": "5xmWkYvcq33WvbwyHgvxX4rTQ3PfcgH5R87gbY2EUvmkPsFack9cP6wimEtqnrC8VGpRicQfhkXZx1K5HxSdDv4",
  "key18": "2R8ns8iNWgweib3xJSP8V5VGxxCydqDqqRMkokNQpv5WDECguRPiKsBbcKCGpRsFUw1Y3nXdMS3LQQjmHmzbR6qF",
  "key19": "25jXEQ1wn1fbhyjKKbfVDmng2GEKbziWpY6KVXbMHNoYgXQDGpFizb49EmnTvcpWFVvNGCZuexAm1bFTvM6Lc8tW",
  "key20": "2TC2LBrZ3XcJUVQgj7UBHYT4uJQdYSEkzZ2Lp9HoiRbETSj6uaomF89LGiehVKudJFoDyx6pWnGmaTuxKrioLsr5",
  "key21": "URpNS5mrJaEyNYth31K7bheqdo1j8CFRS5fjByorEd3VRX3ZcmtQgmEBKLpzKGxS846WHw32tAZVWXLRQ7fjREh",
  "key22": "2SAo171AMXmeM3QaxDk1bzVWVNW6Xe9z55wapreDgJDyAjhyb1GxoVj9by8GFmkov4u1t2ZvNwxpoW3vS8e8Krhy",
  "key23": "3GBLdMad9iqvW4c9hGJuECJ1W7fvKa7sdxDfm3P9F1jqevh4osuTDMyE5BQs1jUArM6SGg8sk7joYeonLFNU3LNg",
  "key24": "3KVLLA843n9LMtLKjT7FP9KrJat5nBG5oRxB5gewTYakwq6Ugw2jgUFmL1b56hrKdEJJgtzxaFT6zQ4SuYBbyCLg",
  "key25": "2pPot4owtujr7csrfW9dM4pvwgsf2LPcmyPQ9DRbf5i4tkyudEUk3h2779PjpLXbXd8ijqDSmNynm6PNqu2tGkb9",
  "key26": "4YfM1DR5e6dpdg7R582T1gK8kM3JwxMHP67TsjbTUaWfztdn3f5JdEDCByvke6CigAXB4x8AHBXk37D3Y6zSvp7F",
  "key27": "3vTQ1iAWK668mEgBGC5mS3yvGsvbm9T3KWWoQBM6sAN5NkFP2k3rEuqRogrrwrDbkhxaDX4j9QL17DiCEvbJjJff",
  "key28": "dRbUYKxguQ7pYNiQqXmQZ1g32puePJ3fYpFLpLq6FpBejFo2KiLmHf8w7M6j2XPiaSH2yrXtAHZQxUAjpxcscQa",
  "key29": "2p6w9te2bKN2VySYWCD7V5mzzysWDeCshRSZXVTPukMGkVrZB9xtxXkSCNgaNCVtSV3eoHiufhthtb3onqBvnvce",
  "key30": "NjP2mpic5EwcoNqnRfYn5xvn3Mepk4LJQS1bUW52bavoZwupLhV1hCe4yFji2Y1zF2ucpVCZUt97h5cPvHjQhQL",
  "key31": "3ha6LKwJFW8YvEtPDXjQSLsE9rYh7RMnTgCAgrKEQuWY9fFWaS6vCUPajrn3pBXGxWNj44iNVHGgfZR2cTRJVd6E",
  "key32": "5eT5yFaWahPiCUSaqU7UARciCAmxo1mhMuo2GqBdmfRk5TyvVjfYwM6AbJRknC6D59fcDanJ1WgULxaCTqLtNjiW",
  "key33": "5mBjJ6j2Mp6P5SCShVVRRLafjX5e7vyDiq51PpDpyjMyAJAbF7PxY2SdAknCXinMA8bTb5n4qPDKyVCBLn9T46QD",
  "key34": "5UCVWY72xgfwhWaLsCmJru2vKX8BzYCd3jsLD4rwv94jh9SJD37b1eWKMGHiYR3dben58N3E6TeM9W9W1tNvrNka",
  "key35": "4pEbfphvK4NFkP4Ku75mcNLnUgVEQT1h5H5eDzWSGdRG8iL2evC7AkHMj2gopEMC7AgMmnKX6HUfGyPPZXAGu18H"
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
