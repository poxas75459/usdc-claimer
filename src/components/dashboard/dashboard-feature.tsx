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
    "2jvH3cKemcDHELkNyPEUJnG1StCnNi7LcWEwRqmLLC6Z5MH7VVezPCPBBs3ER1FQ4fraoWJWHbJDeQx9FpW6UELE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4adGW7Ge9husssn41Wgpxpctp1jnaBfoumWRt5DPebr9czvhQiCu726hcJtBGEYWFxzg9Ke4ZHvWEoW4UT2LxD",
  "key1": "5N55uWBJKkfyQU69SdWV2WFEUAH6TsmFMZC9wMmuJU9rq9LD9rx2VpKbeHconrmPk5JD7BSbkf2Wzwq98XmZmWHf",
  "key2": "WjHsHfvwenEKxphoh5FSccSEyuyU7XZkouWSAB63V3yB2tw578sBnSS5MD7swiUDvWGEPC2HaLV6jaadt4feZhL",
  "key3": "4s4rBwAi5ABV7S8myNenDSKpLTjAUE9mc7yGnRs2PtY3DeooPNLC1GxNp2ztfXn6o2uh2oGZvBwKJBgP6CvCjfuY",
  "key4": "4tQue4bdsyTDxjiyqw2XhQcq6h6Dfgd2FzbqfEDRYcFS5fJ8WHHwPzMvnfrDMRU8WEZHh5PbNbw3CykKpkyDRyiT",
  "key5": "2SzFDXmzkrsuBCCJsSsAu8X7U28soyuKVrfXVYDfPJd4zrhvm5LB5cnEJRbSKW5yLfpiva9AMVTaLbPDZHPCPyta",
  "key6": "5LgYf9kFKQX9rcMUEYPXghHx8eveadnfWf1s8dYjyywr83dGik6jEuwzui4SdEFvVfwUp9ivopStpacV8QgPKQwq",
  "key7": "ywwQGk39cx7aWHomF6gTVfC4NW7FwrVeEiX13THD5iqXzKdvu2KVCS4bwvJAnpjVKtcZofrniqNuv71SBNZEr2t",
  "key8": "5Yy89KBF1y2bt3mNaHWBhW76WAom461waC1mxidmeYV5fa4pp14sDmv1SzaFeQMy7yuTPKwPCBjNyRAR8GPsyvHF",
  "key9": "2e4YHeaW9vmTdh8whYPSQJivoN6FgRWMowR1BKLAtyk1tjQrPzo1RokuCjmWjjtL73WRxQNgA4FQzCNzdZSSvswM",
  "key10": "5cz4tUBHefkuM8Vc6RmPQgVujsDvRZdHWYrnfiaZjJsF8Gr956rGHTGGBHncxyUZVgng9L5pot2HuL8KB4EMpFnC",
  "key11": "5kGYVuamXxdgEwMH9CuxzyYnxv86sFZcSocJ5j1eQLHfkCJVvHyRVfnb6xRAcxyDY5ioxcDe3VCxDmEjHsNpMx2Z",
  "key12": "5KFUwGLrdsB1Q7L8xW5rrqh2VXvQ9QyJ8dg1u9tmk4FEmrPmaQSxwAkb2Z8rQVqrK1FtByjGo2QQJ76MTrBJVCKh",
  "key13": "2x5nA6TtM9fAFNJnxPfhAYHMvjJsFK6d1DUfaQtRpbLMkJoPtPRqxphvDB3qXkxmKrnzt3PMjysDK7ibqDUagySa",
  "key14": "28ys47awRYkrvygH5oGqhPqjNjmURJDYtZq6w8ja7CMMJvys9v2yYx631tECFJxKxxy2AGXwRd1Mo6NcLQGPejbp",
  "key15": "5bKtUNKU9seq3RyyiyJn442ykt2whDFbsMwiqupiyAWY5jpaRp6trntJ7FqLGpEwCzp7Li4wh5GHKRVqtnrfbUKR",
  "key16": "3CcD9h4jVMGfdKwsPaMKfTGtJ53pVQGhC514xpL1Vp7cMkE5cBLKrBEpfKvvtWF2Y71Be5b7TQF6uoUA5mK48RNa",
  "key17": "3Vx9bXm9SAxxS3ym7GwLSHWeJerGN5cXvyrCqDX2pbH5TFmgpwYK9EhDBdoVfDVaAkWim7AvmmGbe6E9s8mibzjf",
  "key18": "3q51AoN7yqnVnpbFrXZeNRx1xYGg51ssa3vmgVPcwYs2S714BUmKr4NbV1sP5m1wBJNGF5QTwRnQJq7gUWS8BQLi",
  "key19": "27aTuPZ2vBn3C9pTXd4JFvrNGf1nzQboScumAdhSGsyCeVeY1kbTNhQoy8cdoVV5DvicKiRHBMc6Umruk3jUGL2t",
  "key20": "4nQTawB1cnM1AFtboWQ2sMRNV1zwLoXYRb1yosHYciqrGVjtBEn5JkLSzHbvPTibFBBRpufrDJY9kgrB6GuXDQjF",
  "key21": "vigk6U4HLPLwDqDKRfPK99XSNZZy8wWonYEkhWBeTRTFjHBS46XQ95JC4xTFFBt69Lngjk8PyicDAoi9R1nJsng",
  "key22": "4CJy54kEPKgvgpeTKXFi85JyCnQ6np5dnquF5rUXXmoDmkMB5ZFWkM3VAAVn2Y8icYgGn4dq4pp3vQPS1iY9BLze",
  "key23": "58ezWqWhgquDyYTwThiAaaW1YofQth7hmjvr9NvSnUF4zV13ctWeu5B3FJzTJoNYVSHiUJ822XvKF3RVJs65JzWh",
  "key24": "2BEqxDEE6E988yMoxyJqwk2pNHw46BL6t2WxrYM1RHE88GiGKGDLGeSsjLbAQY75Xe5PNj56fwcShS6E2hPXLA9u",
  "key25": "2oAfF1YCDdnow6hZ7mnBuP43DEnsQbjQ31FQ6ugaiCfdAgVstuWHB1oymU5pnUALg9JZ6iVDBqdpBTUwdRf7M92T",
  "key26": "3BX2Mogp1wHeL25hTMKQRbkgjc3Guev3gTGA2xsN5GnCNxXeCvjCbB9xMEHfZYFhPGWNDM85U2SSRsmnejDJW3Uh",
  "key27": "3Fm98jbejn2H79ex5wTByLWTL2A5yf8MN9aqFia4dQydYnTGAYNVurwcTHY1cCriaZBoyHjk3G97nQmuYDhx89wW",
  "key28": "5YFgcBMYWxdhbJUm941dxxA2KU7UTngRrohJxYBfRNgLijFyCv4CZoSa8G6KDnFw6kmzM8kSJ8isdDC4enjGDzbE",
  "key29": "3EPJHKRdaAuNWb5Pnoi3D7eCasMVVPLQerucMBe2tcg1nAkrnptuxqPCQhmKrRmxwjvAV1fhsFvCBUSpzBBYMFYC",
  "key30": "5N24AzfaRiaG7iEP4ASBCju1vPuActXmpmsb7TFsdQCvyNCcETB1kAhZThwMvstCYcNqoccseKhom8QgeggGn3R8",
  "key31": "5tSr6YxUmoL7ZtGEiorFxR4H9cg4PiuBUnLK46mWqWfiSexxjnPzvGSZ5APtKNao48wWmzaRvDRZyriMaL3Xho3Z",
  "key32": "5Wx4qwLKAWV7GHSDzSPkCefuDPbuRhiojUxY6HQgnCRzvzpCwd8AqgLexso7w4xoX5f9GoMgp6AXz5e96Scmo7hF",
  "key33": "3oHUfVveUGjsVVk9tRQ3dTsWS7ZdYjWeBT3fbxGncLdMmCuhyj69SCWWQ9R5dCbZjuwY3bfJLxZCGT7gz3sexStq",
  "key34": "5rJZQdgLfDcnJGYw3wi4wJRZbXVdqHk3oK2gRoxmCXa341vGXvAMgpRphR8UgJD2EhDxY7WjSdC7zW5gsweTYA6D",
  "key35": "55Pxpeoo8iFnLYjB4rfvPj3EJXxidLy1BcfJZv42ragvQnwdngJo5z6xnkscSU2R39vDpTZp7RpJECGZkYoHMQkx",
  "key36": "21x2kWj4SAFfi8SbPGejV5SyJxbdSRHvWm8DWGgF9VAES3TMA8g92VUSr9nRYDk93w1GWvY5E88yJqUc1ESQmLeb",
  "key37": "31gfDU7SLnVvnujoJpbnfZ1tmKsMCvWgPUmuKdxZabmQSg1eD7GFAbzoe3dGZJPxDNfvb8JoeaMgrMtS8bc8PcuF",
  "key38": "5YKFM8cayjS6kaXx5VZ2BBJWqjiiTpHjm24DtPJALVMZNjfYaKnDv8BVxHxRXy5CdGKNH5TA58khxUZUTfN38rjN",
  "key39": "43mEiC3WLZPzBh7hDoi7EX6fnjgL5VFXhaCW5A6rV7XiLZRBZTVtsrdMENgxoqVK4dnRKheYy9C8j3EmVdCpqFY9",
  "key40": "4ovyNSz2sNw3bFmiuYgqa91cwNAhsukAPhHt96CmiWdaJBTZn68tMwhSSs144Bh4E9FYaRNw92p9P9PbBZpzNkqd",
  "key41": "2FeH6nnUPryUFGUBgK8DAi4cwCNgdafz4AhBj8hMD1Y4aBUs2g7thNEcVvjox16wQYstEcZnbE7AM6D3kmLxonyY",
  "key42": "xXJHBobXE6wmKhjx6jSEDV9obq3gz5wayjcZteQqXLPWgRsuRokS6RBvkdenCVGsHZXHjNkjG9tRSdKrp8pqzKM",
  "key43": "33irzyAd9fFmq9S8VxvHN7MhXvdTKwZEKdX5isr3x4tv1v9K5tcevZqo6SmJcmXbnXKniUGe9VRjd7f8M12uNLf9"
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
