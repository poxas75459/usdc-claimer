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
    "1dgqvASGGZHXEJr2QSeMFsCodgzqSQW21K4m86gYwYWv4rovGCvEqgCgSa83dkBeBf7jy11TmMi7eQqH5XSn75A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yfh1Z6g9T8TSvLSRVtNdNX9KtzZgVETWA3NPswvNsbkR2o29pZFEhxXArUGD5q4nBMQ8YLx86qsKbKNGkL3pek3",
  "key1": "66X55XEEK9gZ5FU1wSSXspC5SiWmRnTwnKjQYKEg3oR3TETj35B1KWaB1hrGkb5CY7N55bY4EyH2nLJxxRKUzZ4n",
  "key2": "fijReM8bpre9jgU6QFhUDo1HMFKzXhnVmrk9TcxQcEhAyoXNtTKcWxda4wMSNq7J1HLy8s9NDYnLUK5eKYstPyU",
  "key3": "kNueVHH7M1gfHxBN2fkhG614CCRJDur2UD7zTP2YBs9abtuenDhaBiXJgukD17GzaNteKsMNpPFDa4S9RncJeRM",
  "key4": "3pjFnmxXh2bnkjXr2QNf4EzuRPVhtEzW8P8aNNbz1ky3NzbfVSCGJrwN2n68eEPB74pUg7p8BKdmRhyxEVtHAoZX",
  "key5": "5anDj4bffuCbwmpEXXAPVt1hJfNQQSH8kwACVZgoC5XZsMTaTKtyGLZ3rg1kwh2wp3Qp4TV5xuN4fHaM1peHG9LZ",
  "key6": "5SysNyFBsZ5Sq95nQWeZR74cGuEVdRf9CSbRXafVyscjPb2oqfGRifumToy8tyW61GwLPQc5pssFa93kGkc7qH9e",
  "key7": "qL9TJms52XZT32bsPRM8RK24Fmex7U8vf4pSMvLMNGfv46cKZJR4UQza94Xr1Qh6NMhJVh6dP4XHqPGGgcdDVn3",
  "key8": "5beRdGQC63puyGKCs8T9WuF1NAXNJN4WxAXw7JFJ5PFMLHB6VKBPrwM4C5tUa5zGGNCvNhps5x3v92e7VCwS5NFe",
  "key9": "MipLUKBs2FoYAXCajkkhucBZFzJn8rHtGg3JNnb3avbeQPBP4WtQRLtdac6JZmJGkNruLsYVCQNb5fz6x4n2G4G",
  "key10": "5qiA9BvKSbgz3rgvWi4Atq9TxwVJjt9mRWLheaLNFYtSavjVk6qbpx8yqDah58VJ7jzJteAebM7tUJ6ur3jBEyjL",
  "key11": "4EVfRwwRYA4inJ66EQZ3q7Bhd5xrfxDQfnxKjssgKZVc4E3uQvSTFVwCw6faPmcS9F2Gjmkp8qUcRngvTgjKPvfr",
  "key12": "4iTFP5iVm2FqBHwYBvqj5NPfbJ4XyhYj4BVsgvfh2QrSD2SdbM1E7zDKLsZWqZCrHNEQstk2a1qSbaDQpJCCesWM",
  "key13": "2MLNnV3FgVQJG1h9Zb6p15gG1ywUJ47Fm1k1ddhrQtEuwv4dqp1mjWV5baT3eLzSaFFps9tfmJdkDce7dX3KwHCV",
  "key14": "5zSw5v5xKj3XWVMwSvicQNmtDo73mbSxo9CiXNVoYC1NBKfWmiyqVgxbqX2VbDciiDLWQYFtz3AL54aeVWkzwTBQ",
  "key15": "2QCvm5kbSjcUhE7jdV8jJEvf3prfxRdJeSKcc94EFwVBp5iDy5gk49Yhs95MxbszZK81WSJ9rgZ9h7sTPyyXZJTN",
  "key16": "45oyxv2Y5FjSVsLgCz9ck1s3Xxe7n4JtgfgRLStrtf6gxbTpFbH1TCeEg4oQT5KPFqv7m9inu8s6an5BuXKPRnTR",
  "key17": "4JqTi5ojaNx3KNRpeAo95ZWQ6xRxhUGbnb1UcYScqiJ3qo3wW2E4u3xHGwe1k3d7LkW1PqAY7j5qVn18K53Gksfp",
  "key18": "2o4GnwVN1Lt8mkMFAFcgLMtkd5zU5LWhuf6zH9fcKakP4z134LjXVrc421CGi4wN8SoDKQeYBMM1RD2rwz3JuKks",
  "key19": "2MHsQetUy4nv5HbKAXtQzfrJA12KoSfZrtNRZF1u8qVRnwRW2AHQDYCQdExnGqbaKfKoYAYQSgGsois1ezdtT3zz",
  "key20": "NgTC2kgwwtAzpvs1hdQDPp3Ln47E5oHsCYxZWRNQhj51eKUndq3xDWK1bP4hCb1yozt5ZibWeEG8YT8uSeKSK4X",
  "key21": "5AWpFDWTGWhgxyH7gHPm82K6o6vbATdauRxXaCBd6xLZaA2znyZi9J8vZpyf8nYsJtRnrSz5cfB3k8bfLEF28w2h",
  "key22": "38K2vH7XervFpgM1CWWfTmAkhdS4RLkqU8eg718hEDNryC2x7brc8x4k9Y58HnCjCErRFRcfAfLuJo7TefvPdpQ8",
  "key23": "5mjf9QYc2sEzUvwNSMKx1jAUK16w7VsHP71ydffDrJTSQfyCBN76vwaGZyeaUxBkH5K8CS91ZYbUxnF2tSM93zWB",
  "key24": "5uc9dvfxhPXZz3YhQ85xK1EHmnGbfqtX4fz1UdLJpRgUx4Z1wATP2kzcgUhrSYqQ9fz5fAwS7pzivh7yJ4VHTVJw",
  "key25": "jYCmKbmHWSdiiHuKEJwZB42zjbyD2KHVCBVtTjCrFB3PNG3Kr9i48VnAYQYAvGnouQMBG35op4CyUyfQnuj6pmc",
  "key26": "5iGcxKEdCtAMxxL9RCAqrCZoWegsasPXuiQh2kG6cc4okLWwyktFDbg7JtsMo93eE56Lg3fHH8MBuaY2fAs5TPtc",
  "key27": "4iJNyut8bh6Tm1VQ3g4n7FAfLLSFtTMGChVxD7cCR2sLMy8FYpj6FBVFPmwCtpDBuckQUUXYaHTvNmgXyewjY9zX",
  "key28": "57hNHcwFtt4G17tCSNgnALztnqyXgPqwXNHzkKH2Q8VmDwJK4qkX2sVrvkMYBRMWh6howDDr6G3ujs3SyrDqrcKb",
  "key29": "2cP3YpU5EkF6Eeg5jqeydfzTr5xm8miGLTz4twYwLDjwjh3HXJ4BdCyEE2vjvQMsZSSfRacafHz6obW1AsM9AbxC",
  "key30": "dmDcu6BXhL77L1e5XeLR3yZKEDHWNNe2AHpeqVLdigQJPBPM6aMZ73oe9LtvR7BHEf5pNtbNiPh76n5JCUVU3Ep",
  "key31": "nYuRgSauEFaXGmDjPXtXHE9WiKaRwmnq1CsFaYiAxsQ854xn1ewjwLe4zrrB64uYBo33WCYwX2mojK1Kvjy5Mjb",
  "key32": "4cWh7ngUjg4N8HTVgwfAcV3PggyeSSBPqFrw27gJW18HPfmBD8kY6Vjd9Y8gyvsxME6pkw5XxeaLD1zZuB6HUhVc",
  "key33": "UmHxoV9gexD4taE8CzLXNqkFTCyXvXpt6YNFptbEFYkADW3ZqFg6cg1wnt7pjxNCEVR5JXw7TKEwWpV7h4DzGN7",
  "key34": "26sLiG4xZaGqURgr92Hx7vcVA5u1i7RE5xdxtFKyMShckgsaEAoviY1pDpgzXFmqapEKzaPH5gGK4TFcjLLp3Dr3",
  "key35": "5qQ47pSsC1s9bV25wSnF2z2w1TzCiGNfTHskS1dVXKHYVrBAGHSUZJxWW8akphtFyqRX9cRgUQNGMn5ADD3v1AvV",
  "key36": "59ULAe6LWfXMEmW3tMNAFfwhohJrDuwqKHBRqvo1tqjRfmUnC9oirSomGQVreTq6dKiNsnCED62bxTReesxcJAPu",
  "key37": "9SzFEktZpwKb9K1Xfuf4hyqKw4PPP9PjM4RdG9PhBKxewrHSJPionh1LAPbdnKe4UwvNSYvHWsS5dK8NgP9RPbU",
  "key38": "57if1dDJuzPDnk2Yn1TW6GKAxCdfHMUaACn1nUpkp5CU3y7pDFUm3HnpcWFAHbMrtoNm2LPFYXcEA4vQQMaYhYWU",
  "key39": "3xDStrdz2yAc78FsBEpApffExe5pAzQGQupPH1fEeJWarkHUuaLYHV4QUSsdjrxavGtwCngw1TcSHMyWW323Pi5t",
  "key40": "3UFqEAGuGErVYEWWG1HdsT18oEk31p3MCgeYuEnWXYD5aoN2Tmob71kH5nrNDARUBTH2T9BGBDv3w8BRWXEkG5vw",
  "key41": "34zF5PWqouzbKWWj45U2nWrWPZZVdLUZ4sBz79SBbSkEWYnMrpkMjML4P67FXnYxKRHnrgk6VSekSinKUnDUBBfi",
  "key42": "3aGNFMjMXCu9LxtvMnsJW2929zcFzqaYdLoX4tnjH1zR8WreDeMd2h7W5oBC6BXR1CSSRCZMWgiD11uepNi3dDdK",
  "key43": "tL8fX5dNzE4MAZ6uo1uXLEY1FKxQ59czPU8h5sLuBXphftbkXuz2b7HonkN1RZajk6hwo69EfVpBkNzvgkZbehs",
  "key44": "391cia3hz7PG36dU66GH1SqEQcTnvw8fhVgKXxXmHUYJax3g9RXSYtVADnWvV8KrGF7aSGh837DZA6DfQs19RC62",
  "key45": "5cxonPUn8dTFgLS8VPrb9M3cq9vUiFdrx5kkN8KPEFypefk8yjf8Cy3by6u29GrwaMBEGfowMdbXNj2aGNWgJAya"
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
