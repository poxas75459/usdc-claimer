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
    "5oHqfCHHv7YwvFDEFpJyxpnNJMEcyQMwdHt9SM4rrhd87vFza74ZJtbDgPF8KTs8C4B8Qam8uLzsCjmLmDA6nwBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPwXy5jotWujVSXBmQCWm1oMS3Z8X3YcDvg7x6Mx9sXVQMNGYyq1wQKXtVjSHXY81LC2z6H4A91mR7G5fqeFG28",
  "key1": "tHMLYUEe21wV4uXJ4gNZth2tQZUd83utaGCA1rADSyuEzFh3aeuohyecz8ByNZxTKnyw63xTWmr2Ah9u9oyyFwu",
  "key2": "3cJwTX7Yc3bn2dE6QzweUxh9HqtXmpLouqpNhimYWdNSuoKJBJYD8npNFb58VB53erxhPf9LM2zkSBLrLCmdjUb4",
  "key3": "3TcCm5UcjcWTdqeDBJbuZFHExwnxxcKXEhykySXKAKGfTBUweaHfD8JZDYqAvMVGp2aCPzSNkfbRT2wMArA7a1eu",
  "key4": "4o2WQGbNVSUceMqWB6dqksVdwVXM7CqALiHFKFMNN4NGvTwyfwMkn86fv8DBZ69Ge8qQZPwrFWMC4qp4Mqrx1dSS",
  "key5": "2vRk5aXvNytdN9pV19mAibTPDbvfE6Uob4ZHxatitLnUVozoKnMGK7yNmES7hvQMt1cFG3Wxrafamch5BGN4KmYm",
  "key6": "4XzodNxv1oczuSDdG6PfsALjTLCioznzGez7b95sTdbVyWHnsBvwAsPs9fETgBvyftbiMd3nAXMMf1FGcyNPBUPo",
  "key7": "5rXdcXABVzeWZ67EBMcoC6yZVZihVFErMGL1QoeXsVuKVJCBptHGmkSbz6QQeDCmX1H8gJiCn8zMWYr7gv8MLZMz",
  "key8": "VxDvF4oHs3LiJUjFTkGagvdmuYCeeVVqqGuKjp5GL9J5ZsZsKyrsXzWRfp4qpd8FUWpaBwefNyrqkNjfXNZfSh7",
  "key9": "Pb2evLAeLM7sCwYhjLvNWoWUPj4HM5QL6bnsgiAsxqSpkYCrXJLaPnVtLjPfALwMaZ8FNCuekVDhXtCSicabD44",
  "key10": "B2hRii8iVXiMoudN5tp2gqzkG1H23dKL77UhaPkBMCF8kNuxSVjBRwPM3FkHmVB1Fgm5wHKttfXXExE8faismVF",
  "key11": "3WeSushnWpPSh3Z9bhLyhmoqyPcEFnNLpswAQhSR25NhZRad2DWCDviD6theHUd4Kzth7RYzzNNWpHkVQVu1aN8i",
  "key12": "2cZikRStVgDvEuey1Xzp4VyjqWF4xrGFsa6Gi47Hw4mfTHUjeUPV5EQqps9B7a61PWXRc2VZgiLrYTY1fbc91B3e",
  "key13": "3FGtdt8u5oJsRV3Xfua3gHUbJm6Nj1V2q1XKLEW7VDJboR3NDvy4VbvvZCngAizN3X2NwXL6ZAMSkPzZcxTi1cg1",
  "key14": "5kq6zk9C6N4izwXv3pd2s8p9uzmkUfT2DStx5g1vbKk6LKpZkZv3fvtrasAvhdu866363BUnkMuQBUer93MrrUPK",
  "key15": "2eTruK9cZMQpmiyMkuV5wVwauerSWtVXoUK71f3vWfAxHWw6dAyoZNB6PL6ozZFUJCuGPmPDCxyC152NiXUPdK8X",
  "key16": "5nTtjTEhf5EYRxWYozG18SFHzBPtBgPMoDgCoGmfQuEzpCpDQ28XYCmWNRh1J12GuDk7NWzvZHWUGch5mbrTbwjs",
  "key17": "5mkr6Eh92PGYQ9DxmzZ9DxwPWcuugjGzQbL4yVC9xHzHeWWeBUUT9fCn84jhncejwtKpB9zLp2x8BSq7efr9wE7g",
  "key18": "5LzSE8vBrS7TGiEN1h4MCj3UPQmkGPtSEJhQBnvsxEche1vWLE8PPwLSPQ3tG18C9zGpr8sy1Qk23cBd7sCVxYQv",
  "key19": "5VGKS6EiAAWTNraFNTDbKGCGTTVdhRTRLX57L78s2Z6UgHfZ3YGxBJBQouEzZpqEWFKXnnPNR9HnCQ3HWDYnV1zN",
  "key20": "41DKCcktQFmniEJYE1rC61Eh9kXNnK7nEscbRh18ddKtK9Vi89E7JAta8HGDTC2agPCcqtACz9md5ahQLb88ht2f",
  "key21": "3szFjYVWGfbD3wWvVxZh6GENu7y7MmxjzL9ZJVU8RBFbq9eNGakqmAUCnfziAqN9WXwsTvbJt2Mm9tiAMzqqCQwu",
  "key22": "34Gg6GaHKrZqXApNn8XP1mBNNHMRYv5yFibiRpwXGG3LuhpQoJgqrWkSPSsieTba44jAQPayKFfYSpFcYDRZQRnw",
  "key23": "5tSqbphoqm8asW1CcypNHCLVxiMwvDuAKvT7TEpH8sjR7JJ1C62iyPgbKGmGAg5ZQSUaYQw3yvby4CzjQB4S7RFe",
  "key24": "2NqFEhKW1fHjwEN8yxawwBMFx3PwcV8FURgjucFoerMvFRZxv4nxqGnYuEMigbJoeDsuXKsz22u7MS5DXXzfdDpc",
  "key25": "2aFQ5pUvyntXS5HtdJBYS8u4fc78oUiVqRWrosMUf3C74Kkd4cgeuWkjqNnXLEAsRS7iAozWYURBy1vzgYKRnpxi",
  "key26": "3AJ3gZBDtuNvaPJkVi7zrJjd8pyH8d89Uu35d7PNYaZ8JSiqqkrP1bJutf5vakk4NywHfsQxegUy3YTcJxMPTrUd",
  "key27": "2exLEVio9eg5qpDAicptUaycFDaCLHoo8ATs4Wmzf7uE8augGt32hzx33qcWPCoGsZEdfXrFoNphNeyuZFXGVAMR",
  "key28": "4tZPigxNnwfSxbjcQfPdHBhtzaWNKAKPFZ7apZ6Z7RYNXn8vNCdtAJPvxqd6MYyGkzYuWN2CdSvGYEZmm9de2kgR",
  "key29": "5JSniprRo8ko5nm4rRZQW6VkwxUpRusShsoxzMTMefdFEeXio1XqFAxoow8jrBEXmDXCqJ3wr4C8tzsrb4NhexmV",
  "key30": "2Uzt4Ly2W6r4PgPZmePXyt3GsRRNioKFFWhTYS5Rd1UePpZvTcWusr9zd1pKT3r293d88XnNeoAb4UXNA8szRaTt",
  "key31": "4yNMwwJyMYyWPaT79UHecfV9oi3BhecUqbz7wwaf5WNNnLeA3Ep3g5E5yC9xXFzBzxWceSYATvrxkKd4gJwpHpV8",
  "key32": "4wYox2o8VH9phNpkJ6YuJn4Yy4Et89M5Fud3UVQ64F7ZV9RR7EHdNLuv918wVm38qQzMo7GJdpzwHLC4g5HF286o"
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
