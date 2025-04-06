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
    "3goM5Bq3WKBCujEK8LnKN4SbKDByouE8XPp7MaT7NjtQRCw59mvPddYeq93SJyYRjY7cY6RbrYMVzDooUmyzhJPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZMEHksFwZgRYuCQCe8M6seWt1biQtgvhiRuF3BRb5gQoCpuBEkkTwoW5ZRXchrmmbUi8US36daKzn91udqdF8R",
  "key1": "EqssmoBbpGDFdiQKcMEnmZdz46tgT3aaUyjr5gM1RQeQ1qgYwNAwAGeSgKzBDri6sSPAkix9YiPeSkBmLHL63Re",
  "key2": "2HPyNAeF7igs5QBGuNKEVPozv3W4Yx8nPWcqwG5ZBKTfoUR5inTpV8DoUU4Zqd9RM3KrpyYyywBVuQDstJy462Kd",
  "key3": "35szKZAKD4iApKMgunezhW5hC4GxaiX9W2weYECoPbjFBESs5CyfcNWP9DJobBSjrBxqH1Lr63uBRA8MWBk79ub1",
  "key4": "2tGHHK1qcZX1UvDBTLsg1z8Lm8DG3iHciTznGpT8ZzuaNgUETVHnkWXFnVZYEawSTXaLKajj4jLcSfrizpfYeQzC",
  "key5": "yb6zi6RGqxMXbVfLFcSQCSXpaRbNyiqkAK4bSobz3stat3YypdZced2ik1VKqczByPfQdgvNpNTNJSk2y4Qi6wE",
  "key6": "2EntYHW4zFhTip4pSPaJbAZUYSDUbJCwjfW6zR2CYw45xEwypFXM9QDoY9AHyxrH4QtrdsHoF5zn9dZvTsM1Mypq",
  "key7": "4ahdE9hcojm2ny75rjnUq8NmreMnTT3SMr3dZffBcHj6xUx5okgbbWWEcpwqBoSd9DEPZBLaX12gm6Y5j7Dp5p9X",
  "key8": "35nGkPW8V31LKMLjT24Bbv5845T2Y2Ge3uQyYmQUeY55q8mjFMUifNexBa8wXC3VmnEvydgHCs9rPqGFm8cakmnC",
  "key9": "26V3aBbsAERMQiVMnFXHs4Gj7CQzwMbwF2KF7GfGhaj5rpqRSMVXhWy7WEU3DDF6YmvUfpZjMCRvtqxRc2CcuyhA",
  "key10": "5VHHRebVzn6vwee2ho7pKPakGMY2bDA431wi5B4JXsAkVqNwN1fgPAFvveTTxM3AHf7QpK2cJTqprYwWSzHuRR4Z",
  "key11": "65r2eiKF8FbbWQtKP6hBQ3kLuEiVW96orPp8RP9Wzc5a9xxmcYaiwxuwRC7XDEpPB6GQa4utsUMNpV2AyhTWQtyu",
  "key12": "V6DxEUzZR2sWrA84jesEpKvvev7wvZczwTzu24kgPNKsGkiCPmWB2w2wfxLaTwDvM6HoUtHtbX5iuBRszSsDSqK",
  "key13": "4LiMLG8jDarDW2uLZ5Ct4Z9M48hsMXiXRoFNxuup6LH4M7uvL9pEQe4mNtm5VeTD6uPiYBEACSTeCkQSp644Bttu",
  "key14": "7zofgGVwef64oCGyULJES3RHb9KXDwocwSo9ysfMZzNJJNW375yHrYs7SZ5eGTCYeY6tkpcRqkEtQNeBav5jvGU",
  "key15": "5pPKotMYdHcLNY3ucj8LqFVAkz8cYQvWDBdWHzS8FectvkXvafgRdjJ1Qhuwt4pbZmVXszFU6p2DJSZWX6RaEeDe",
  "key16": "2bBdPNdvvz2k5LCWURX9Q5eBA9N3ui5oXgq2XY6ZFH8THaDbGc7vkJ8yeubBZhH3vyEYNQeZXLaQ6DcZDCprnevF",
  "key17": "61f5YRsYtWzDVFz76kuddvm5Y2vUe5vNSRMRTm8W21aMVNVZYtXKcgR7FcX2FeBUqtPz86mAbuYeEewu6EvbPYcX",
  "key18": "veEq5MdoEkhmNZBhhf37FCREt8Wntiw675thYr7dKxHfXyECEFfGNGsg9CGgh38w6rz8cZt67owDGosQuYWyxWs",
  "key19": "5BWJdCmVfKPJnREYUFA4i67e8cFP2rWBUzpGRcM2b4BH7zkDLSam8de5NJJqZQJnHPDJSLcyJhmF66yk3DCYnsZh",
  "key20": "3oUVBVVum3oimCvA9WGBJsHGoKS1Xna5rujaqSDqM3kmWjR9TqW7sLLyeuKwon5JWoRzaJ6EtZqXVABhdbYTcjBF",
  "key21": "5DyYiue1YjdeEUhzPHF3T2NZXn34doFys5hRWiQSssHkwXdbuA9emzwnUxWkfyiQQHvpEASbpsMK5pG1yqU7kBJD",
  "key22": "3ygFpQ6Jf6LHCdstsgLo1D2AFmgUyocwNSjqe8AtrPWPZoA1m3VSNcrGmSfez1ZRQjz5JGurA29NFEHUsoE3iw2a",
  "key23": "4Zity3NDnUbcN1ppWuHfZDvSe3fWb7GHjuS1onxTn5VLa5FRbGLX4ohCeVgDNTxrHaqKXkiKBd18oEXava1erdm6",
  "key24": "5o1Gbt36GrxDBYcXNGNKb2TTTXeLk3SjXCJdewDTSbkZFfG4W11WK8fg7prrojv5cDdikPHhUnQWPcZxcMbX3D47",
  "key25": "4zPc2mhpjjtF9y8tFUV9wi3uriW8yV26iLvRoneu3VZ5aw6PgM4UwczLyEmuXL3a5NBKNv4UL8MDcTHr4696Ybd",
  "key26": "je2kNjKx1xELcE8nLfwcJrvxDzEXFoJ2Cx34JzsNei3pHyMviiGYyiwatdRH5rMbBSoXQkSFVeERFjp6Joot1p8",
  "key27": "5Nvd3xQQ1FxVanazXfimcz6n1WU5deK64hPQJqX2VcPf6DEY41a63jANuJzieo7L3Db9BbVxfU26f67K1bNfshL2",
  "key28": "5GcT5Y2gtgCNo5e17zpGhu2G6vLobWeET7oZYfrKfxnh33huQ9XdpCKgUdo6kTCqmiR4SqqmBhvNN4n52VVvAjMg",
  "key29": "3zXDRDhPGEaCnvPxtiYMqtMnhVo48g2b5H4kEb3rbrCNQSCxJpZipd2hyufZPVx1goPydCSaDMv7ZjP5MtEMb1po",
  "key30": "4GBturFtT8qJ44uX2bcscm51W1NTos5vrKTMuEsgaChQWhsE8852sSVWRTKdLTc1h2mvxAoKFhNbqQV3yHowpHfW"
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
