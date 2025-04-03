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
    "K5siT47QCRh4Az6We7reDjRSSnRmBHhauXCrDQNN5dwbDJ1JoMj4rCYMnmLsKuZd5jUAhRphGH8SwLYmGi8ZvaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8Ux1GwhK3ALSQHetJ1CJ8BPK1s3EPNUFkDSY8oRP8A3riZsJbKcXNZjqTQnzKVqsLYd61b32YnQ1HdfTRP9FFe",
  "key1": "4s6G6xP7uDCNbQqM6Nobvwvgw5AXou6wDbFfmGK1tnyimkojk2mTsQojNmUAN3uMDWKD1NVKMuUPQbtK3oraqA7V",
  "key2": "3vzD1uxb8NGK46s9G7VVk9uLJHwN7GhMVYWk1jbCgMMerTG2qtS7jBB6rov9MLE5AWZvCaofJBpVnUSqSLS3Dxdx",
  "key3": "YGV4uzSzGMWv42xi9x5bzKki4kXpLWAj3T9pREYR8322b14PgjjCbQxpxJxoue3vejbim2GwzKaR7UzCjHMSHuG",
  "key4": "4aq81Hj628Ex6cARsc5SkYn7pTzJgGxZCKRgJrcb1npps2Cz45WfB2cpHdCDpDDLAGUU4nXXBLHvJqTChurdfxtE",
  "key5": "65h3z1P59yZD2CnLcKugoFR952BcNNoxX3czGt939YcK2XnzH4xuDsLF3rxSogsfeeF8HTZbVywJtvpy6WWJEoeZ",
  "key6": "26F8YmGLJKCD36XmoRA9tCvS1hb1kfZUGaajnxJjBD2fXG1sreBMe2rHz6QGzaAj5SpxW5YFuC5yJGLPJ9bmfjR4",
  "key7": "37z36rrq5eXiiPTaR87wADvoXpRg5G41Rn5ggBy3yGcZ5u8vihqUoje7hUZx3W86Lgw5Xiehq7MVbSuLVvnCjMCw",
  "key8": "3rzZQpCwEBfsLaEWXAewSGck8yyZefrvQ3btp5ntBhekEXFbeEebRRk3zVCu9ftNovuDg26m99E4wpfaWQxrGG63",
  "key9": "3Sp6paxqTgxnfa5yhioKVmAwkCMH1JW9ms9GtLq9NPahc414LvE3js4fMK6gbNN8TTTbmN1eGMzLmFHjE4NvWPbg",
  "key10": "58pmT2zSZfnDFyT1pwV64DXqeR1ku3sJ1sw8q3W2WJA2SJnrdES4XmquzHrosxh1x55Es4233EBn1XA1BY2R3hTY",
  "key11": "5pTds9HuLGDjkDPYxgVv7VPW6KBFiK4yT9TJmTSTuENRKrUfhTEqB6WcvuAHG542oasfzpX5k4t7vfTkcj645unq",
  "key12": "2PvYy7bVhxw3UwxT73MZpojyk54eudx6QowLxnk329uu3BDLJKHnC5Coj4nKmxYU3K6niJuCFR3XBaWXFJQ5RRhi",
  "key13": "e1t9m5Nrm8mzS91GiLt77Xpp3EN3mG2iwqEBtjBnbcqEiC6cXEAxSZWJhctmsLkUiKAymiJrRXQcFxRGmGBEyP2",
  "key14": "2NntEEB1GvJJMVDW2v5ZRpD8WtJHdSBV9q5i6Dj3EemPMQZP2cBdup7DY2Lkaytb8PhBAqXGkZUnWvrYgAivPnUX",
  "key15": "NEJN5anJCnSkzkzNXqsLe44CtEWY2ZxEQNig5Pq1zHAnipu2poCJGPvwiwMga3d2eEDkqcFEoVmPL4Bjy2WRSAV",
  "key16": "5ar6yq8awvdaoEHWUP63E7qFs59HFiaUWFWLgm1nqraUjoP8RgCjpCaUxAsGQnXdynLnMb344Foktx62jBmKhPef",
  "key17": "4gWYABQZ17HxRxT182LC1c9c9bohrgVtVijEaFtW1SEsgKzwdTpBCtxwop2akNwkEU45mo6RFeyzTH4QcRboDcku",
  "key18": "3WMhTpte7GeYtE2jqiQdghyu68jEuWa1CFB5zouH6i5zS2AbXHGJc4xMc1UDXH74zmHB5H9Uj3qVqfyKicY7WXvw",
  "key19": "5EZB8EMWjY3x8Z2g9rJGy6Zeri1CvrWddTHr8dwceYhByossPD9UKrmSNv942Ki1d6TvQ6vh3fhTSPZqeRtbPN73",
  "key20": "2SDjWbtsiFhzoRqLX6bfy8t2YWJhp3Ci67CQnfVZTnW3quQ9LT98XmXJW1me8WgdKi2FEQZLzV4Dwg7TpBzE9byu",
  "key21": "npFbvvujJQdB77gqvSrfR1cUVjogeXRnvqhZ3QSZkrLfCLR2cNtqkV7UaqxQELGr4nbeUXNRotXmyzuN24Bvvpp",
  "key22": "5RL37DqwrdgLbDy7Z4gP8cH95MGtoDBKS2ixYdioGTfukUwJ6bezxodDFxr33QMx8rPtcojRH6sCphtr1D9k4qzB",
  "key23": "3zaUKFShCszd5RiEQHfKb1Pzkx4TuHdqrqUgrJLyKHV5rqpf5djENPJP49dd4WGywuCvdnRSp5BUXitWgEupLtmu",
  "key24": "ye91CKyU9ZfMyZAKAze4Pd346n9iX2AZTghYqki7eFEGzfTyrWbu2pYexjU6Kj1v1PQVy6HDJfZwPJwWeJCNGHk",
  "key25": "21auJramr93EBgH7QssRKdQjXyCRriciDuZEjpCjWaPiQKQkko2bXCFakSJPSahS8PtKGgFQWAK5jMf4nqNhjZp7",
  "key26": "4MvYy3EURxusDfr2pszL7gXgngmwoW3agV7vfzRJcmmqYZ8hHSziqYRaMrtbiT8RAUvRESWZA7c31p6kKDdXG1q7",
  "key27": "41ADc4sPgTqEiz39wYSaLcorSPj64AsWC6napiyPJmk2vnQHp3wQ5q4RkBknKhPyTJLNUx4pAqd4w9KP1yyMLviT",
  "key28": "51TaDSCLgU6JoMp5SgTJ45i2LmkrB1dxQh3nBRvHnrFDoDdfy3y9Hb69b6fK2DTdZTcEYPjo5PBcFPoQEkaTxyPf",
  "key29": "2439zkh6SniHRW5aBDp2h9Z52h4LZpdmmRqL81JHpsPP16ygscmyUpou6jjdDRE5PxcmE7A7DdjGdiAeoUfnvALi",
  "key30": "5WUQy1qJNUjq2FUtGVJPrxxKwHnXCoAPBttDHkJMfARY7BTs7MGHAbEbWuwnVqEZGJiCzqDRJnUgwMd2aKw58Aox",
  "key31": "2yeWutQJv3bjjDAd9AGCc3SJBaALzBiMSWRSgcQm9XdsaeevGk6CNHAGx5azqDgMWtnuhsFMRG9GVCMzpZy9k9TT",
  "key32": "SUAoj3GJkuD6MBnS8vJp9J58ENn4xNBTLrfCGZ1E92KaHNVsTBhB4iE5aSZZcWeqAdEF7UUR28L8NYFp3uwxgdu",
  "key33": "2SAy6LBtFKT1YudMUXdywbXn2TwvVPBzAmeu35ZQCCVeuJs9TaeZx3PRbJUqvnPzePVo7sk2pK8Ti89Tk1XHCPo8",
  "key34": "4teiVYRvt7YxPHW4r7besEJ3D1HbzMvtKAWLUQvMf9e2caCzbN7RBb8aDptSdeDh7o4ddWVz9k5DLqvn3exZibdU",
  "key35": "2r3R5PQPvVxLp6UNvgTWK3BC2A91xXQv1AwxD3m2J5kT8TYYZ1ePtNwze2tSdZorWwL2zasoJYMLfM8U6ozMpP9X",
  "key36": "4QvKosm8A7JWX29MTfMmziCuv9LxvWLCWCV3tEtkmaQpJcsYKzWu2CM6EcS5ZchDzDLCBKTTPWyvxV5qQa4bnXns",
  "key37": "5RzcuWSJfLwo747wWksidHMspaMLB5z7F9U9Jq4HodD6GvLgLgxcHXJZjh56g9JPoHNsgLZBWgvyK8VbrTHADaDt",
  "key38": "WFUDjBLz4aRzKF66tk4xoLNip3NCeo6jJ5sSmYYE5saNjbY35n71geQWZjWTUacKK44h7M5wbVgwLYwz3bAqHbe",
  "key39": "4nKzjfUttVGHaZWNxHcdKJfanEKSXQhpryBj2Qd9uVCmpzZMBzuvAJSjr4EUekwUVqc8zTsqtvAgd35cYjT6N7Ev",
  "key40": "3F4qyDrKCMbazKueZsEtAngopbgtPVBL2KiyhyR2MhkvActrpyoSaSFfJtmZ6MGgtiQppQW5QHVb12Wn6kg7GLDr",
  "key41": "2cRa6VALeYp5qGPP3f83feorNq8A3rAmDk8vc2z3ZsTSqQLGj3VxNwvHCqpoDawHFpdZcvnPNVJ2kSadw2yunhgc",
  "key42": "66zkVbo9tpd95Jv5eFGjgVvQpKcmwMjwbfuGLDX9mAccPdgA6NteRumQyBMfnb6X7bocjbdFEXv57TLpGHcoband",
  "key43": "ARLdajFbKwckmf9GHdror5DnhkC3zSii4YjWMKgdqLw6S5ChV5BLTVAtCx1xwGq9ijbr2TLAUWDHkhHxXseN6NU",
  "key44": "35rQQHoD3sZzRCTfaUZ2ymGzNSF2P29gZrrqTEvb5mkXtXDEdiTAPfxDEbzcnCDDVGMGri1aYDD8ivwXnZNt1Lvp",
  "key45": "4uzqUgQL5TZqDni1EvEQVwyNbUP5vF3rWE95j9kQfT7ZZ5m8cUgYhmray1ZARqRpMrtsEUd8dWT9isMy9JdYzH4w",
  "key46": "42vJn2hie7WMiXCJc354BugY25EMXQVBQ1Ei6JMSS9PyDTt48vRWctAUaXMNQaLGcK671tKaMhXpUG8jinW5fciq",
  "key47": "3XH3Tc8NarCDzCe2tRkMJ2WeWojvnHGhdb1uh3vK2bXpavfPNrWkR3mqzePvMACbhJG5TFVCQUCeAkCjZ9ee6GAS",
  "key48": "61ujKuzRDQRf56XkQo4GyxrseZAyiAERydr3FTRHXXFe8HCEXXiJuUtPvcYPejjdiN5yci1ZGZRvq4P1mziZCpyG"
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
