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
    "5sNBTqU6o3S7Wvn1ynHu6rDUEUepFTHuAAJJCfSh97SaC9Dq5EDGcwCnD3bCwCZY94yyg58emeBDvceaXunwgTEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbAAPT7RgUAUm87m53FeEvwd9w3UoaCkxZqdbSaKH5sb72GLQHcen297zXfBXxB5ZFRjERhefbgzwa4PLRXhzoD",
  "key1": "5K9ec8Sk5sJkVotwmq2ccS48CggZGpUC2ZZaK5Qc6g1npgWi68BP4ECK9juAXGr5XtG47nkwxg7KCdndpX5Az7Ym",
  "key2": "5hvkkghtpfJmkaakym1VFriqpSHTj91Aiu1iHGU58Je3weNSQ9gkpEFWEkQBQnfrkWcFpLgfL3bWV8AQnrXtUiVh",
  "key3": "54b3JgS7erjtjoScRoXQuphveM6phaxVJ5hAEXj5G1CgMZVnmxtMiQgoxWn9TcbHQLE1pwqrvasJmSEXWKtP2V37",
  "key4": "4twoyjwV6xtweJ1T2H6eaPLzVy9CcuGfKqrx4nnWej687r9WuSXUNb58D5ZB23PyxTB6yr7RyBsejjyXBMfDiZGS",
  "key5": "k1kENPm1J8fCgc8r4jWmbTux1NFcqQdvcQToN8ye5s9mF8RdrJRvj9hqfyBuxKmXEvJqN3pwcmeYKj6XRvX9RRV",
  "key6": "Ym8wjHNwqpEZoctru5tjYPAmAcPLkwUwpGRMjhFCiN6QZ9bCMpEYezr9YMzy2TnCmtUsrSepZYDN7XgWCoKr6Jf",
  "key7": "4ESyzRZWo69FTbKXxKeLZkk4teFky3VL6S6n3yyHXViids3gTRKMKjMvYtH9mhKtAAkdRMC2cyGXx3CbmZoCJtUy",
  "key8": "22U4HamVo3UgFXqfiT6zfV3KXwX4jKoTebcjp99TWmZ1Ba7zNt1rrmJmc73hzXV81R65Ec1vkb4wiHbZhefqqFU9",
  "key9": "2bnDJvhX63EsGJepiYU4ocFsaqJTJezAxRZrUAVoUwmmvNAWZ9ESufNU1j5r9y4XVtVB2pwfXedvrMmi811WL5VT",
  "key10": "4SQBWHUznvPC6fXJGExis4h45ZBkfuj8f4pfpAwQ954VW2Pf5KXij2yq6MTLvphZaCJ9S5izB8L89X9E9V8DgU3H",
  "key11": "5UwDk6exDnDfqKNnY7pN1cNVgfZLwMMSiVNXuP7HJTWW9jf4RcvwzPt5apLB9CmKSx5EwGQ1aM6h2Adqr8TqmZur",
  "key12": "2AhhXaaktLgRMaHvREsZz5BJ4GVLnRRBrFqMCrUbVGxGqnHY6nouCTZ6uM4P9Hdo7EbQc1rNZV8CUYYo7e5zCDW7",
  "key13": "4Hh5xVeBoDhAex4wWrQQ1SSzygyAYgC5RDTnr5YM8oigoQid97nRbz8d8m36evAdfH4K26zgQpEdwTWLJd4kz8kc",
  "key14": "d67mkX8XrqLGbEw8HsHKBR859bi4KdWNAZK42gt1u4i7S2Ntmro49tkRKCSuEMCPXHsAkfRUDabtNfcbpo6rwNF",
  "key15": "5heAWDgjqgXpD24nFQS4jx9ZwAziyYyUscie4dpfXgerXfFSQRJtMVGnMg3D1NQBVcNZPfUhnPWbD6W7fnXxAA1E",
  "key16": "4DG9E9BeiDv2cmKqLxfA3xo7EvjKatCiBHxPg7WjmEFjmvg5yYiHTB5Tk1jKGw6oLTqMFxv71P5hs1zxyaqyAX1C",
  "key17": "3QLuFV2tLQYZWzdzTbHRTkWoieUUYCRWfRA963hqUS8w5wSoK6u6abVQ3A26XB6kp7VmTi1TMAL1sB8D2xZQfQbB",
  "key18": "5dVwGLNk4dX7Q4WVR8Bqsfj8sUdfPEgeZUvN4tdHWHbEz1UY1iRKsTWQdu4UEcngZFhPZipnkSLTzj45HjYzBPjo",
  "key19": "3wgAP751JLPfogVbwSzeN7oHPpNCHCCYUAndpZQd6qT3FT3eB1auwGwm5s5ouzCAT4MS1pQ4hGT98D7rUaP3823W",
  "key20": "5rgPwz2DJfdbPdcGGQDAtvUwzio6jvwxEL7sdCnePpURSvCmYv6RnsW17dkqwuneWvb3ZuDdYaeGwBmQY4Mqbse7",
  "key21": "5KmpLo6pMkuGaJzoWchMsXfujuGrzs1qyRrPv3hJgKUjs7uq7Vx6Qn4VbJaHerdUAq7Brzu94VBRNaa6EpQGCBZ3",
  "key22": "3ecJREYd8zRA7uiUF3QgcULUGrSVtWzPNkYqdc9Wagc19U48BuztpQGR8U8qSTjhe7Xpcbof3A9NmDNFKsQkdQNA",
  "key23": "KiJCXHUdrzifW8F5EcugcVggQjVVdjqMdaVfTbyxksGvFA7jH8GiQqoWEEWTjZm7L8zenTfwt5NBheVNNhKNHKH",
  "key24": "4dey8CuxvbZREiCNy3Yd95oPyNQWHPe8p985Q56QYkNBUbzZ5fzYsFKsy8n4HQk57PNbqY3TqYnXCqsZimLKkVgN",
  "key25": "2HW2AxUW4M8UCqu2gGU6dHBREFpoSWTjATZeGGsSSWjiJ6oyzDTh1jM1ecVSbkwv58neY7PyxivbuidcT2Aa5e8C",
  "key26": "2NQWDCee77X1QvMh9p5k5vTZAyHU2N2ScyozynKG1fAsTJCLdkehdBNFv4dFzJVH7DcyKwUgDffkf5PrSfH7E5uA",
  "key27": "XQGfZEN7r9VP6ygnPzZ2awMxagSER7EfCDd9sZZZEgkxVkiHxHxvZxC58p7SD7rhB6JvaYTN1vVMkJtPEQ53yEz",
  "key28": "MHQ9AZLn1vJhoS2vYB3MUTh5Sq2x7e4LtPMcQt37T147b3aGVpxB4itahYaCzWtexYuEdedRUTuCvV5y7k7uwZJ",
  "key29": "h1JdhkSTuibYtfFyptqJYZdLtV1aZdUdbCgeCtvNTiWRz3VA5VmPrj1jFJy6tKyhWhcy8wHnoFsg3prrWihapcY",
  "key30": "33z3S7DJKaqae3WbzHVhRkXM4H2dsY4woYDdgGJmWvG12PthGruyG5W2eyjTzuf8gZhX1QRmUNTjTNatcGB9BoVj",
  "key31": "5SayoCEU44LfniW5dktHLcGvQfYp49oeKqdUkMSaEJNNaCT815oKxez4jjXVQdU6as5R9Fw8XEoq7vS6zt9ssGNT",
  "key32": "3GYS3LXfmEPXRjWDqusQ7qMQdwDdgkivUxQ8Hg3etK4PpPa4qknFYWVwwujPnMNpVQ2PfCpWnU1K7sFHbxdYV9A",
  "key33": "5zKpeZshsU42pTr2iBg9SmYrFrGiLaLDUYaMhwGj5BudijAKYZgrS8micm4Y4Sh9WhUZJQkMFh8pZEjTi3JXmYG"
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
