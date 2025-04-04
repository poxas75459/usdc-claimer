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
    "xaPUwYgejGiT42yQ1TPyVBG5JPn5D4fVFRjzeDn2PYMeSHdFAhEFuJ7TgDGDyw5rvaNyeCRYVbHhZ77Se4ZmQir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFhTh8dwHiCYxxKU7TNeTXFyhnjgNQ6VHgoSNndTyHy4fTxpitoDLfcJVA3yBU6zggQJtBayt7c8YpwCS8mDyiK",
  "key1": "2q1eJjXXgEZwBcbH2J3V6Jjvhux87QiX864gRy13U8iBqT8FdihU71bkAVUGZ6bTe9zNczkBuNrHidH6uEGgaJJ6",
  "key2": "2JGPfn8bWJfkLuhd4uicLGdLGFCpnt519YUUz8h8fuoZQPrpb4QRLYMSrRvVRq6g8ZaTPL3z8WnZmg8RNse4AkfJ",
  "key3": "3NypkUACC64XKLnxGLHHXi1ah8pyWwbjddXL9zwxdHgrffHMQJinfeohnD1uaYweGoeibhox1t69mqteZbtMgWfz",
  "key4": "3Au6ZNmg66vrhzpvVXivs3x2jjcYw57eASCpBhJTGRzGq17uKjtFY6hvFyakgHCASMkPtVWm8wKHpMSUG64UMrkw",
  "key5": "4vukuU8ByELZgMoQBQn4E3eiQ7gF3JaFAQbtfjahqu32Pt8LGfkFAk67jLxCnx2vueGfji2EvSPNCrVjA9tkEKNh",
  "key6": "3Sbx4PGoX1SaxkYtLjp3k63PfpJD4qJQUeaWyboiL27VDt5AfmsX7Ewefjd5xsz2W1Vdi71CWBXAZRMoMTieQKaN",
  "key7": "2pxb6kfFtBLGvXSZs1vBTdbmRTiseaJWiG2SFUhDsUzHDNDfzUwvhYRwyZ4RCySehoHT4ezhLDBFF2vvmRbsXKKf",
  "key8": "14tdBFRwqFptk4akgwf6Zdt4HYYWuzyzg57CkvmyfcfeqVjcSiwHaVZ2xHS7J7ZizYpP1eZWGiCsz2fr32dwWVJ",
  "key9": "4vGQ4HFY2RzQFj1auFKKzeBnGBrGJ6L6h3BsUj3jgxR6wCFAM7aBymSGasBgj3urLFFcte66fJXAmo96skWgREB4",
  "key10": "2sGn4S29jife786eStMUBGFm3fWzY5FzbGrYS2ZoSZnaQGTsxRr1f8ZV6a2Douo3fbCeD1dJKEKcCQyTRdkxmZ6m",
  "key11": "ZR9zAvM65aU5CELw4hNwLgSk2NMQ6TNrNz3kK5SAt9LA42aPmCX8bum4wXCJLRxsHtzc8mrY3y6o775gV2srPPh",
  "key12": "3zxK4mMG31vvStSQiNdx6cLDn2WvdA8JNymP3kszkoLejW5ydrKqwJVEemTjrmoqg1XtiyiJ6xomsdjNzFvk9HaR",
  "key13": "334sKbwK9x72ta6bkYmePSxYARKTRH21HypnueAxQsHgZLKFj19yFVE1xDwxnmhe2so6xFFJDdFX219P7E3akC88",
  "key14": "4QxPRwAQLcN6AGJdJRK5CkmQbJBmVSekAMWk7dcMcdV1c6JtV3oGAPJfuP9UePzdhSivhqFugwndZ2bFjxBtXPwi",
  "key15": "2L3BHADYHycMUJbfH6zy1CH5XxHpwQpHK5JcoLwiDaZgXz86Q82WkbWqwEreYrqKieiUZZ6hNXdCxPFDetif7Z1M",
  "key16": "4tDKY2wMdfHNdxbjJ9qMAHfgHzRUeRRZbA2x1Crzu8pbaC9WG4Zo1JUEJmZFdsS4PF3agdgUx8Cb1dT1GRTS9Py3",
  "key17": "3CJUw2RXtjg2dfL6NrXKj4GC4gEXwkTfPzY5pysK54kJp3G9vFtKw9DHBqAPG7cS4ee9TKbZ2myePZsomFYDPW6n",
  "key18": "62rKMYdjH1pF8gKGSxugBbxE1fsbuJusj9bih5RmGacydjQt6V1WjJ6NR6ijJEA65jDcYCeE996vAiudjWGukAUR",
  "key19": "4LzLzyrRsDq7s1ctm2fNMgGXaXWrLxyyjeGbW41QL1245uVqwyqD95NmMdTwdMZwjCfVQUR7wbnxJFxDi6tVkKyd",
  "key20": "2A8dxcoqRnv17QsyYfuj7fJfMsyBcYFfk8D7EeX7MrS2pkHn9cuhJTBf4BPij5P9CxD9XAY6bk47rmeWqT6hUEqT",
  "key21": "qA8yimHvzK39m5NeBpzFuywRW7uBScCaatQPicS6L4txNGXe5kkwfxVnXHTexmcLXKUz6vpJvjRJxT9aVEMPrVY",
  "key22": "3sZpbPKAq5VbvgCbB4D57qpDT8b9f5xXyMwHndkin9GYtatzvXaYYYfftjXVNNuKYio9fDHQsN3R7HZJDCAGvaAC",
  "key23": "3hUw1ienrx2CdutqpekFY6pHnLWpqq2AjFvfM8LE5zgSPsyewYErdPBANC1z6sP5jtfTxaujmTs8HBFeKtXvmnay",
  "key24": "5SzTVmzGzHegk9hL6Ms89Pdn2B5CAnf3xPksB1WJS1jfar1kF5q12UbBmd4ycntqhfvZUUcTnMNtUwqqnbyqMQeK",
  "key25": "UVwMi7D91b9yCLhVXKcdCi5itxCU9Mj3U72kMFGPCKz1T3EQgk6MWkn1UkVWwBbDGcy4E5drGMN1L2DPYRpAvCa",
  "key26": "2aJ7t3LSfzDxTL3Fg7mLh4jqakk3MemxkRUNJUewWsd6Hi6uyUnmzh8jXUBiBYdR9eCnRG4qdCypEzTa3yXtgMrh",
  "key27": "32u6TcQBDJQt4m85LuUmLxavE7fra9vGyEL3svkkbzD34rSzEexqEYF5CJ6uFKpwMG3e88BnRcDze9pTwoUj3bCG",
  "key28": "2DPYkgGPmtgv7SsHhB4c9fz6JAzJvchCr4zJZVnUDrT3ZxBrcd8diG7QQFcCdfpeZFXxtXW5CXDwLByniQrGrVG2",
  "key29": "47VE9Ag3om5o1oVLKQdpYoyyQH4KaTLSZRPb23rLEqSV5xarK3bK58KiGFTRRdJoEtWn6mwr1j8HPYqHTFYUMdbp",
  "key30": "5UsvvZRudWs4bchBT6jPJt2tTEXG1LUUriL4j4XBAMcGsnCpkgvwG5pJmZjQ9rpN5FppaZvFCQ5Ckttu7eZzBRah",
  "key31": "hHaYkYcc18fKAwJXGRmRy9S53TBGAhGRKB2kTuYbrtw1HBTqpitKbfkhbyEPNYysHncnDaUsuabzPG7EPW2dPWU",
  "key32": "3D4Cp1nBq5P3awzq2MfM4TPpZsSp5q24uGuhPG2dVZmaDUWPdmysEpDhNV6BkNg8aSsiKBwpYZSDLcvJqsm38QPE",
  "key33": "3U2vdPufeARb66SPxwN14Zhg2DEjRqTpbbegoCy3ZQvdMgdsGNthTvw1uWpcLk59w6ryNESkAzBZrSi4WxnVN4zt",
  "key34": "5QkLUCUUBdwpWssptsZKZi4mMFnTJqb9QenmAvqTS3jpuTjVVKT4WihC6h4TAcCafBax52ZcpdWv8NzSZXzz5cKh",
  "key35": "4zuFbx64RidHrtqyRTbMYDaDRCrmdC3t2gfbwS1zYWk5Z9cEqsLbGgdRfANWaBQ2uTjNGVH7ojtbcEkyBvPRpNmZ",
  "key36": "APzvmFSvC2oupa1FYHYruUCTcKBm9CtpsEmCFXAmY1nVnA3KjpKrqSEFbgrABCn1bv6ydyn1F4tgysaDC4sEseC",
  "key37": "2kms7N1sLSBBtLot4NDw3q1KcfNprfNXsM1WX8mV54EUX6WNv16grvEeKcBcUPg75J8oA63FNWgimRH9YUkLxxrj",
  "key38": "bpaanxmaFzcm9dtmS1gaR8aYHNGK2bRujfve2GmSFT2hTkv1aZwkaB3gT6uE4iJSTT4f5XCezqRDSbCHBSFUw38",
  "key39": "4R92YnRVKUL62hizNrEzcAUDwS3gnFYCNkSCh8WnRxs1rn131aKNbxnPtgPpiyr4p2AJeEZFgLDFztRLu4WCquWT",
  "key40": "PTuTKKmk7urDVPeopknDMTJELnQyFou4XZH8fpNMQtXwXgzKByVcbXNgp3JaE1ePaWoPVZAu1smBugyyVkaMeVV",
  "key41": "4k6keWuMAMBeN7NUyTwJhBc4i7JuNVhXX94khxEs9cmfebdAaWKqwCUR4Hnd9LUWQbXUGYrmsq7aFBoyxHiwpjkh",
  "key42": "Q8XHzJ7tyvizegHkvroKU8mCfQhHwPUePxfJvnoiLV4pmuz1BRDE7ubwVvRz1v7TJdzvkxuztKuTyPvAzpGPqgN",
  "key43": "5SF3kFuJhu588JVKNDWqfT3CysZGcDAyz5WsNZ7PCff3w9UYDnNmsXwVnEGSqzNnd2FKEivE87SkzmXF7fPxFPpy",
  "key44": "53fJQeKo7Zh7DHfLcHonirbmbstmtrtEzmGoFk699VoMXbv7YDmGB1ydR4QAY255vTRNof2uMjom7KjuDQUqiD21",
  "key45": "EaTCe8D7zVhGkhsmUyQGFvxyJGM2U7RMUTpZifVup8sFArtYaxakaxZXkrNpyMStA9EDj3GGSKF6y2JndGLA1RP"
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
