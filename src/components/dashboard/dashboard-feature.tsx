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
    "53PjDtRH2ntKdpH8kt8qfmq3rhHRFJ1WSVH4TqWviGAr3fKGHjN1EXRDcvWN5kTZWByePudxevPWxRcBtmUkmXFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdwVyCqi9r1oZsj1Mupvis75V72poZLDV3osLY6VWNfcfCp1sAEmnSJgx3x4zw4CY7JxMTQBzWLLDFcdPBPt1qD",
  "key1": "5ai7usyJ3ivA83kD8uutxxormoNEXZY3FB5cwRVi8uacDSd81DhU384hzoMJGZYzb1nsHhyxnZxMiZPX28zWgbfe",
  "key2": "1A9GhFEJE8d29cDZ8iEK6r94o7Q2EPur28DostcpWkBXcktmtct2V5MG3nkRLsUNXEicXoN6ffuxrX5cX9BA7Bm",
  "key3": "626FCeccnZQ6LNyKCw9cxusgvRUE35Rsxk5Zea7iqhYEJm75uvUpvTwRfUz3Pr6REaZamWw1ndB2p7HVEGMZmW6g",
  "key4": "321t7DJ2njjxvsQ4s7i4jPEvCzhNCPUi5UxWDE6SHh57tbfRUX8ydAjKbyALimdUfXMtq1fZ7mJH6pMg1WhVbbPU",
  "key5": "34xV3ymtLFCuGqkrh12mQcZYnqeg4cpU5HP3exFnarqVxfXKewenRo2rXtRpbAnvyLnJkcotphdYerudXEKnfXJW",
  "key6": "51kwbxLMZ8AQdW8kDBsGANHpaE4L4umFYea8VBjSQjJADVjtdyZR5F92UaJvQpbwytBfvccFGv14CQKHMU6itR3c",
  "key7": "5RBSgrXFj6uGBTbVo3eyWxjCGvzeuf2N8JnQEG4SgZZotkcgU7BfgmbAXBSgaceGTdQ3vCbicUPJmpeMwXYuAMWk",
  "key8": "9WTE8V5UJ6WSuL1KBbJj35rnZP4LBcExqasRHaqZCkNZd5JmiE6HPFD8jCKxmLYtVcjyfgSPrM6oNn12MPir1FG",
  "key9": "2HrGAzXxbSg7NCqKKMW5npsvj1fUSmSmjBwqyJyznbLMt89FDK27giEV5v8f2AsfXwqmwfVaZ42DtHfbotjq3rUr",
  "key10": "JRVRF4u9i89Q8sfvTEncG1rdvWqtUiAXPpTHF2oJADDfhwK8vLLf9en96FEtRZNs58Aj448wZuYPRgGeCDjZ3hA",
  "key11": "3uHERSdeH4gtYAFF2MJvewNqVMAyTqK78WE8Ayd1zdgNVGiSrVrKrkgNa62KsM2DifidZyedMYKAn4wcWPVxH2mp",
  "key12": "3j4ErnVPMNbB5qN4TXWbvtYDyau1efgr3RS2PE9NGZexe5hjmTeG74iHZgLSLy2MtBVigmn89pbLoESgy1ftTib5",
  "key13": "236pAWWPkyS2nngi4SV67kPqBWUsS2hVAjP6TNMTEuHXLnR9i3PVdmHeftRfqnp4wrNhvqNniq49JCKHLf3J5ZWR",
  "key14": "3TRdBYVSyxudCeipReMUqdhzBvW8njZjZrCXyKBEEEusUEAegdhMm2TH2MZrVhHKajNjaaFX1gvsZbtV5JQDZT7V",
  "key15": "4LHWFJzSRrUNfUK6WxM6vcgN7Hb3gMh1oNPTHzHB3s6DKQPXLoTqYtoNGyTkUbU29dTAw7TcybbWWd7FRd5ecZE1",
  "key16": "4NUuZDyb8m6h4yJNBk73dxppNtSVyDTQ14XXi5vvcpNDjQbrsMooZtVi7wd9NuMQVE1B8FP3yrqpVrHgHbgsNqT5",
  "key17": "MX3QtGeK8RsNU7bWrBJQawJmmNMUnkRQNr7H3P3Lw1CSv3RspL6Ha9avZsAaFWJeTEYreXWJKwmJTPRr7izLjHp",
  "key18": "2G6qBHnT7oB3apwj5Hs5fYT1ySRWusGKbf2iZre8JBamb2nt1zVbpeXGy9fk6SLszjtQ12UMdUMcMz29GNatWgKK",
  "key19": "3KpndYWUH6ajUh7rW411C7Pjez5maUKoDnRaKKjQdWQbjsnyS7jemwwkYzPuyaVev34Wv54hWTcJh7PejRQqqdmj",
  "key20": "5UvDTYJNuSPwqe89LWMHPurqTJmMxjD5jovPBJBB5SWwaxVyuAmedwkmhRZgg7vXnpspXmxki2MH65wh9aSVJRvS",
  "key21": "6vpxAB1TWQNTtfJJQBS61g5HeYXRGE87HZxP5LjcHNmtcurpvAu71nJBft4L7ph1KTom4YzSmXkx43EapLJMBDY",
  "key22": "5JXNaYP8eRKKddY7GzGiVrWQTBpx5pMQdceVtW1LkaUvzHwRZBx8t6TdmLo7xLnkGqv4ztj1iKMWsLFzh8sFN7XN",
  "key23": "5mN2mMDfhymb7JsjHMCQiCGESLWx4MFf6L2Sx6wrHq8pZEtTYacxhWE1zek2FDb8JHfQfYbaKDYKZsYbXgC3c9BZ",
  "key24": "63df7qrHtPAYskwZdYTCBrE9egneApFL21LGjfPM9UFka4K6CgQ53Hp1Uknobko4Xxbt4DnuexurCV2Lzuvi2sKb",
  "key25": "SS4omGAfZYVhnwSHxkaRpYUBU4zB4Lg6oxkojEVKrp1RZoPVczeqB3rHzz48PBzcWdxxoN3T5pAtxRjUMx1V9mZ",
  "key26": "4z3H5LDKkj98zHDrZMjoZvVWdUxfDKheRpVDcHuBRWEkbRHKdLtdgnuKaYVAC4V5vVAu7jrJkX622juuptur7sN2",
  "key27": "i9LHzJXNPrHZxgXtVSwG72dkEAxmefrEhbGsHHW2GdZyDLPwUvbVANx2Ukk86twTF8UoPqBvy5hFsYvuUU3s54y",
  "key28": "uqRFBuwfN7z5pJ6S8UsKecTnsZBUsxtJK3kAt5DBa3iBtL7YyYFacNuNJs7W1Ny1TxoqG2c6W1i4iGYsXH5XP2P",
  "key29": "4Rqdn3Mx3nZc5GsCct8iSVEDXW8mzVQ9TjVitMicAn7HsT5S9T4DqbXCA7iZmUHABCVgmieThKWkEncduZKrEg65",
  "key30": "39gCvi3CunJrMYTuHwFEim2kjiH93Er8Mu5juq4frPu8Fc2cxG5gTtfrzdpuRrcPiwLzCyW9fc8hMJzSxZN2Vhv1",
  "key31": "26Kg1Spj5m92LoXModGQYkhrnQPiqtTuATA7GW8KDa5yQYR2yDfAbjj37z5gPSVSvys5ZRRwqpMbYjLn7FCrrdHP",
  "key32": "3HNsP2BhvxfdEM7SqbQ9QNDSvXjzwft7KhfYDw9Wg8SPWXBdwWq6pAuLjQiLR4vij8T8VEWiMe2SX2CEZt1B2Axx",
  "key33": "4qoMcLEQxTc7RL1xeyKUmErVWXQWVg5poLNBJ3c6UeqXeMZpzQAc3s342thvqsKosJYppDsBooXpn7GBdnviPjeY",
  "key34": "EKCWq62Bkh3FDwMpi6JHjW4otGRjivM3jJvZfCYdkLwaWssun5aBg5dCGpKtncrTpb8r5Wpcx9qySKK1tBWDpLK",
  "key35": "4p23GqTe7YFMRcVHdAnm3jB24dtwEEWZjr5CSpDzjA42XZKSWgtGo99FMqUy5KaoZKqzEhDvkBB5fXJ8jfpqdMuw",
  "key36": "3zNc8xhrsn8yYeX93ff3VC9S5E3iAxcSyakLromAyJ12gPWhHYHXtF4UA3QUEeBUwL5ffr7f2cLPj6mu1bZ5ezuG",
  "key37": "583NLvJmufRk6CvP1oX8axUDW4r8pGzHR8Mz7smoEEC2zsrHxSYzBMm9tKscJjkugxSnbenH6PvuhsZpbdzKwinZ",
  "key38": "5jRM5akAcwYuwGUoAHXc9mqNVDYM8gkAU63SkPea3prQL6cgcrKh9TBGt5H587sWuCYkhUotN8FxsG1PwJTKBJdS",
  "key39": "4bMRMXaydPKRTAUZJW93L4LBSBqSYGzzVh8ZnAn5RsGdgdzPtSbi7LVjhgESJp2wu3u8AYEHoSMoUdztJytABPbw",
  "key40": "Bn6x5quL2VszFqJ86zjcKUFmFVEPWiakxWDCZMPtAauoqMMzrvWAj3nqpUr4D5sBsm3YA1c8qRTYMeLN1k52Avo",
  "key41": "26HcKtPoVNqcd2JVgFL1fR7Ewa6isYATYD83hr4agka7aXZJAwkQPEe436r1aGgECqtGr1QmntufXHbMtH3dTxVk",
  "key42": "45YHPPpPe362dt3b4nGWyt56WhtxcY9cHhmL5h99it82cdeFHA4Xx6hzS7u36CCCgqAy8hS3jHcmFG5dmWvxf66p",
  "key43": "Mzyf74vcUQDKCnjCV7pTu5FvMGuJ11KwyfCPcDiJjuEwagYGGuHhT2iZ8nrHBAGzSutrW3GvcZKQfkue5zdsjd9",
  "key44": "ak9ws2npXDtk9zPF6WxuaHhjDwVLc5DuKeEw92SuYHgbzniQVNzuthujRT6tZy7kyHWgdU3GAdKTWaWrqigt2rM",
  "key45": "32naSCfmc8X56JGeGLZYKcW6N8XPNPehWhmGrusD3BRtRyvby5edx7Lj9jZLgyNtjZoN2ZGRsufjkz9AVthSaJhX"
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
