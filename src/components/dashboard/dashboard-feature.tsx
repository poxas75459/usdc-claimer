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
    "2ws7GGAMMoo8BeZK9seTgx1qapqFLdWrFDqXsTfPMkZSjnWugLx5CP2XuWM1wNqFFWw8tykGExGW6VrkDcMGDj54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iU15kE9gU5eXEwS46tU8fSXF5PZQs47dNMmFoC6x4iF6UnfX93m2YV99ux3FzqVWGPQFT9mAKqnFJ87LrVUMw5B",
  "key1": "5KoPtjdjm7VdeDRs3NTdA4wuCmU9Di8udCKT278bttA4uks7gdePqAYUZtQvxim57jx3qbvk8h79wnEsQKDntSPJ",
  "key2": "Mep7yK8AZPi2mh8djBRh4UWgoL8HRZjt2mVsdPUEaVnXZw7HY91vy57GjN8x6x2cYhG6yCtfmWHTfcMxrMLhA8p",
  "key3": "SAMjGT1P64ncTPmfa4ozisvjSgR3SKJGhAW8MoStHxt6LjpU7aPzT9qMpDev2YFazLSsbipSH1kHghLX5d7ppDo",
  "key4": "5gzvdrzWqTUpwL8SYJ2maDZjUUvgF9mLjbejQpjTY6ECjqGkVCVy6FdMjwSQ7yE8b2EhTnTd9Uk4RbQCAUkpwL22",
  "key5": "3WQ6uHBm7FSrusPtFc25cPCZnUoJJzK4yvfriwBUEvPYuuwSwUsLroMirqXniGHQkitzzVfMYdgeRz86ugzNHP9t",
  "key6": "5Uq6C7cmG6Amssd1e7kbSQxCqbHtHnftqxVifK1umUJDzSkwsH9GUVMx8ob63LXgt2iUKo6zmZos6cCa8uRSkEpk",
  "key7": "2AJ68GjwRWXGti5Bshaba8dBjeZ49oBDuWnyJ5gu9tmRRHzDsDwhRb7Y38jmtj2dYp3oimBPU3W7hPoCiJaPxS5S",
  "key8": "34vjrcuZdfAqS9Q37dj7zhphunF5Lhqwb8hKDnf9rXLLUcRybqE9miinTqViSovWpTS4c7FjmBZb2dsRUKReF8yN",
  "key9": "49jwL31BnmKKFUx79kF9fyxtfriKeUMdS9tZQgC7f6hB1iBQy8GWvxonH5hjRs9v5HUHwz4QDxXdTHRrMcE3mKEz",
  "key10": "3NSFB4PtLy74Kqs62TfQCUGvYa3cZPAnEdyzdVuzZHYd6jqiZi9Y4Hc5NcHfeK5EVwDc9Lqb6x6pbeVBhmk1eR5Y",
  "key11": "5xd7XNDseuJBK2uCnSDGbQhcEZjPiq4soGj3xVT3eVJaqTs2zJFvg33Yi5aPXDVqaX2GdCqt2Y3ggAgRMnmczKsJ",
  "key12": "428hbq24AbuRY61JrQZfsXY4RaRKGsMV9E1Dx1zBV9mEF8afuqeyxxERTb8GjNHwAstxAgTRLTbs1rZzSC5zqo95",
  "key13": "4DWL8Y2F43TM9zoDXwLe2H2H4ntLYft7o79YPCSptHe1QyHie7tGpqZDReh6P3x35n125nNWCTCHX6Miuotd9T7X",
  "key14": "kCdxsf8BXuv35AJ56wxZTYvowFSQ8BcQXQL6oaU78ycBvHJ65pGQQxQvuX9yhG1sgfWf4yR6FaGHNGjWTWLHqYG",
  "key15": "4ezLra4qBRi9Y22sV2QpFNhXsV8QqsdLRUprFoeCXx9fHmHxMgiJfc8mXJGa1ArRSyGT2awRf4gJCJXQnN79JCyg",
  "key16": "2s5zsrhbi3DimVkjRFT6MT2De5m2c4165Kggwv9Mct4cKJuQzPQDXgPdCjCoXu5476Q5tP1bNzY9ifwq2X6eyCLD",
  "key17": "4taYuHzHrWuZsKJW6oLyajkVYK74JCBheoXrATdKSHgckPYBgcDTVocuoiG4XWDRknegvGwB5wepR8iEqmKyXJjD",
  "key18": "5HAbosvPetcvLocqtg338g2eeURu9nsLG7BJDRSTaycRVyKTN1E3bbPBAc2LGXUzqztu42tq2Q29deCr8j9RMULS",
  "key19": "xP9LcQTnm4m5PgnYJMgLtxEvDFGK33r8qkfQNm1AmFbt4qMAZWzGvS733zqiiMWjDqmDTXtUmYoY3Jb4cWk1RMy",
  "key20": "2jK5HQhkdy6sJjZnLPaXqZe9YwDnP5MCt6nrZZUTM1StHGma5ZHHBPt6cK63Wv95caMH36DcF8jmZN87SXgsA4wu",
  "key21": "2b36iYLLCWWCU2bRFUL1N43gt1wJUwF8PTMFiZwRDMpLo1V6kve7icewd8kR1CtzdcoEVBdXWCrZNPMic3avvJmQ",
  "key22": "4Uufwaq6kHsnvoAHT78rj8v9gN2mFb53uqsdeqkp6DT51vdyqMSVJrdbjCtx6CXkP4AYi3ToKbU8F2SUjRCHMkuQ",
  "key23": "5YSHjT43YpieDeGbL41ampRCgLefjayLXbHrb5YjYfgfkgUeEdwUPPx1DRjVteBu8mVTZYRjjxsZcxxWZkzdoSmQ",
  "key24": "3ssBUXo5RpVvXgcgxEXqcKyY6eB2xsC1YbQb12sNL66sohjnAmsfwF87BVHPNq5eYQBi3MaQPhvNci2gcbDWsVFo",
  "key25": "qZYFXMkc7Dgb2aPwLdC7Ccsf8W6aQFawNFvE9qL6Ubo7YqCtgtuX7LQacXxgBiADLYvXSF5FJ3oW6DSxXekrP7D",
  "key26": "SLgsiC2oj4TWY2HtPXjmmy3pujjGArjhUbwYdinitLF4CPhh7ZrwRk1bnydiqLaiGWQVqDpP9rNLdHV4iDCyXfi",
  "key27": "nwbJiZzcHYoME99NWb9rNCt22q9hwmo6Mpbvsk9FmuCc9qpEgU3mw8TT4hoWhmfqpRFqjU3MD3sChaLNHqCeyNB",
  "key28": "4gJy6xmSoauhRRD2zqJ261S1RTm7nmQf5it6t6e17H5F9BsRmk5oDyp3RLRXYFs3Gz38Zo4LVEZjyH8SvPd4tuQx",
  "key29": "2cNwoBpoq2vS6RRF8cbfkqVw9kSJvQQc7pb53oV1S9JZWQtrEibkZ4e8PsCcDrtU8eXkJGbZq2Smd3q1Nw4vFovm",
  "key30": "5MAV7XsJfsggBPP4kg1gBdYxC4jTGqdhkd7hDVv3hRta7sfA1Aqcxpkfy6CXTPgMWbf3kNGyb5zj9hQw9hR7egZ9",
  "key31": "2unRb2UqbZWBVa3UYzFQES2xH3KtspxtjNfa18Eq5WFteakYqErBNr3wthV2y1VUePRJAUZiF6NwCs5iHFBSDV5v",
  "key32": "4naCqYPEdcHk3fEZ4oKdsNeAFQUdBwTbBsv6Mp75qcW12JbjzrwNCptBWQSUrJ4rCov4ruDoRQ5AbyMuGhkYjKpd",
  "key33": "4DqABf2AMYMqCuwkvNwjfrdvevHqbpASSo2TjY7MbNTMnv8vyigtimTtovSHBfGDy5HqzxKyEcCz2hcmQY6HF673",
  "key34": "27D9gEG7N85s7S9NL2VP2HYx7MaJVipeJyqhvYr59s593TWZuUiMu2wHPJJ3T7SL5AUG99usSJavqgFtPAsS1jBb",
  "key35": "3MUibvP2aqgfpPXgQRyAjfEeGzs9L5pxc2aH1ABrMxG21NNekd2QZTW8eW1Evb9xxcqfrXTYj8A8B2aCfG9Jtz18",
  "key36": "B1S5z57fuirsJ2zNo6tGrded7i9umqRDRkDHXMG4ifEi9q7aFCdpSM7DSSvT6LFJN5cHdrmF1pdrjkVwKSvi8nR",
  "key37": "5W8DrkDe2a2V6jLNJTTT1Ysf7UBcnb1TUWg3s7npxuyKBcv35TUxKou4T9Bgsxy4jnAzTrhVGC7zTPA2z91mr4zu",
  "key38": "225rPqAXVziZfg5nSAuSQeV8hZi43ucvCntXM8fwPiuRMYXxHLzQTYvhnwoqtGGXuj8HS4hiq5nzTD2JQpGdtiho",
  "key39": "2RdwqAcfEUwoY3kqHqvAu63tHhpSKzE1HgSHu44gz6feaiKoLGi9N7q6aQ6NbwfaXQXmAnVRcQ9TVaE4SiHVCy6H",
  "key40": "3Tz84uPgJnVVtrWrupv5SuspCAaQRKAibGC2148ySuAwJXgJntUMNuHEocKA6uiHc3CwWXtqGjmHBEZuHmfKC3K7",
  "key41": "3s2R2fY6nrgKbikMNWw4XjPfEBjpPH4ZWeC3ou5jP4pjtpkDjWdicWAr6nP3sQt6kAUr9yAfwmZDsBjNYDCtmCn6",
  "key42": "4r3wACj1BNtjckA8JTx3C1WwHtLvUzmFQwVNqw35ByWbucwoyoxCeotvF3n6jU1aye16juUrgX3S4C19ejTYxYGF",
  "key43": "2FaaCpxQAnVz7Wnh19tSW2eJ1FHu4x3rRX518Ws4sfjWCZtXwkm7xtFum6qWFtv1p1seo3SKGsHGv8xJF29biZYS",
  "key44": "4LLCFkSMuLcUYhsDGo6JsV33kGrZBbQ4ruCBiX7ya92P6okJy9UT8HUJphd5TkuDQALDKt4d7TBRaWszGNjLYTSj",
  "key45": "2GPMbquX3K7W58rqwFeku233NEb4ReTcQJ84cc5NJRd1cLCXDrTM6g95FfrtBXi4tNn4jn4Gi1Nt9j2smaK9P4W"
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
