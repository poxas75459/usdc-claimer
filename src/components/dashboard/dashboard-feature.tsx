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
    "5rzcTa4RynDtd1W8q9ece5rH3ft7DXe3XZEhNAro9wAdSjwV8HwCaxYr2RtHJvc6QxXLnMineXNKRafc9da7HQ5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzaZjCL9Gk825rzDQRy4bZDSn185YMkz62t18Pme8A9GPubNQbiM8zmpeyMbjECVu6Pi725v4y64d8bRSHy4sAv",
  "key1": "3AGNxeiwexRoRh3rWr5HU6VaYBVt1SDtB3cqH26LbTaqJpypdsSuWuLriETe43QMZfadQ5UuimioMZksxHB7q1Uq",
  "key2": "4Gh3dFDzr6isS8MSTjT9ewRFgWME2Gyom1hRj4DFxdp44ok9JVhsUrzfkQXk3Lny7xUX5BPJiqQsKNn7EyDQMjkw",
  "key3": "3CSfHt9J4RXfHD6UizMZN8vt4Gg1u575WFrYrEaK9Nz39sYndbqMxHNB1kV1VF5yG8zqeV9FnPmupQzKpQupf6Vu",
  "key4": "2jZ1KhTtnwiuK4ntEEi7FMXZdJq6GTvmwtAT1uSuCsUYbwCeccBuFucLnsQReKiypvUqPSEsKLrrbTNd8FjA2AAs",
  "key5": "5Fes37twkdmqR6C2Td3Z6o6EfpuKVXmMJChzTqC1LzucV4QxioqHTFBxgZidXVQSJZdFyw5NUmwqWa6ASbVCoTYB",
  "key6": "2s1mais9hPoTa4BQ8RKbzyvwe33iuDYrrHut7rLLcXGnaJpd2TMjgemLeM8ZXNfPSzFb7v847vnYhGGUwgLqy9UA",
  "key7": "sDeMSjMyMgzbynFfpVCE1ZdE2yzCSh4D5PdZmfmfphERBGUio7UYXaT9p2wjuTGNDHCCTZh9LAdXWHC24gAaikS",
  "key8": "637UqLKKxJxWQPikX3evz5eNZmGArW1WYZjTqy3AS2UVoJ9fr4YcesT3EuFh4HEXcpXhE7ngq1NdzNQzK1yE5H1K",
  "key9": "3H38xBAyTkA7XDudkBTWa2LaE1FkorBF7dMmBZ7SNCKNBiLLYvdaSFrQPAAeR1ossv5UCYqSAe4dfGPrfJuVc6Yg",
  "key10": "2pXebgNuY3wJrBCFFt7YrgmagnotRRFh9g2BrRgbBzq6zK6YfHFcYWrhpN5hUFJ3Wkqj3EHaeKAGjCnwiWMRLFS8",
  "key11": "5do4iThEfrQBUCVXdp5tNvtDpdCTQjRtavFXdtYm2QcfLdc2z3fwSmANhFQvv9jLveP2cFnZnwNbG8zYtLk3DNMH",
  "key12": "2JUH2Xk6yNMcei6ntXkku6rJSSJs4BY6Ye1QSavVpsxHXBvGHgKUZGsbRdY5cQgmjthoDu13tcr5Jo2ewNDmDyFB",
  "key13": "5YnPD6miVSgagYFRSN9ryAvkFkciT6yxJf7J2ZeXpqMQyRbTPEyUDu4gxhzbV5L6evqgwNt37M2VHnb44AjgSvu4",
  "key14": "3dXSSUqKrTxhaXucpAP6vccXEsHB7bmdYaF2SKKYkTQNCkPcViZHFNy4v8kR1j77yj17umn6GDECBg9DLPKrB4XK",
  "key15": "MgBfEp2m3EX94W7oucZdqbyMegjpWTZN2wvteZoe3VkffX3zokTgtk7YLBsg2fTmX5FKzDpip2qodqzgijgLv8o",
  "key16": "tYkeQnyTGGdNc3yFpxydwWD6PuuBiPda2GrxqMrjNQ9whwaD5AWYvoJ5mqHBuggdpX1u3HVaP7FvV9jPbFQkxpL",
  "key17": "51zCWQmEVvn8x5sNuiFcaMnfnM8BtY1cXR2RhL916NR3X1MbkfFZ1sWdHeE1QTStKNVt8XHx18rzQL4rfGrWfHhn",
  "key18": "2tPD4mXxDWHhK7QdT4dbQ9zzZ3qi3c277WQATGhrZvGc3LCwk9gaRkHwTTWiyWXiWYGzTcs2fguNCwdraw1GakaU",
  "key19": "3yVcyUn3fScUqR2NX8orsBLeeAED2ZrvGTQ1wrm9A3wuQ7NXj8bRqh3L3BHudF65WJXvkp2JWy1GBW57ZRzf6EiH",
  "key20": "2hFEwtonXZzPfSBVeZLXLmNDSrYieqGodUeCrMMyDJCLReSeWosSa2JwQfztYBL1gfeyuwtJih8G1avMF5hSdzXh",
  "key21": "3JkZFPi5K9mwLou3KeUyHyWxRpbTxRkgsTtFmUDZjXdkayn9S4GbJWWk6x1y1hR14ZXJD34b9baJyV9GQ2qd7fCE",
  "key22": "3EoNiJM8VtfyYXZRLcuHcqmjvk3xL6CurXmS5cy6HQbteqJk3b1KyEPuNDXnXGzknTMah2WEVP4UeV9UTtZt2FyE",
  "key23": "5vDGNFVtQHJhxPSMexnCjsS9v943DjAdm3kzMc2uzFcwm8V5QYxn1e7mbHsyTusMQJEoz7AVXqMs4uY4hwaZpq7D",
  "key24": "3HJp7DyugUhYDGLnDGUYKrrUeAUHEJwAnyNr9tKRJZ4cn37eZgRn6z15emuSmWCLjL3fXLsAvkYTBGp2JCyfd43q",
  "key25": "2HpHdAGd3cSBbaDoENRj7ntH65rp1cTp2zyfDE9XxK1eGyVSor9Q1rqaQ7e9Cw4uvuaVqgAgF75e4MMw31P9PxPs",
  "key26": "4yGpL52WkCBbGc8uQ5UkmJDk4jSUHZEvEu3nWcNsAfozGVQjcsvyyDpE8cPJTJ9KWsv9LNf413pgNqNNedzbdbMP",
  "key27": "5fBy5UByAuhXfJkorcXmKVdy61LA7rMQE9u5w4tkkgzLJr2j2e1M15jMoVjwU1WDDy1b4phd8fT4XmwxYibVKQs5",
  "key28": "4mAsLuEZ1V1UEi4U2S5HSCUpooREs4sTQ3y213YiMeAvMGRBdchJp7XVQwMGN2DTarHqEhMBBsfz6PJJDvqYnR16",
  "key29": "2ekFXYq5vYEcFdUsWstKsBZwvjmkQGwx1LWJNU51VXxdwEV1sgCNu65VmALCiZTvzRwfgi4Ff7Hvgu83ojTpY2n6",
  "key30": "5u85TKA4N7vsXREsdk1uNY3iQw5QmBeGVYWnJjagQXDtbAX24TBx448kBaD8F892vW25eR6ShNs88yupe3Ho9BmZ",
  "key31": "5iLGWrbuqzQPAAhqbu2oPcMbAxwXRLDmK9DDrJ64b41eYvGmC1p7MxcRoSXMiwMXgq35rivsB8dzVb4dyF1vJw4X",
  "key32": "5SwPkbcsFPEutfVWUrfrM3BerdAdDZ533QqbYh94E2ZiVuGoq7CPpw5CtG9HTQYWGP69kQendAKDSKSNnmFfwkRY",
  "key33": "4WfftS19BR6ujUQS7rwYdW6Gg2sBYtY3hASbKPrvJBH1Est3huQHnt4SDSjR7fSNtzbdtc4xkJhvwjH6ZEPVfyHm",
  "key34": "38JDmXjzgReLF7Vz3gB6tndNNYXvqeFpVcQ9C53pqQW3mgD8MkxkV1uGqzbLPFQE1ZFbaD1aVtSmuWfDoPSZoc6w",
  "key35": "5zzAq67wFxDZ2KhXAkE4ebWJumVa5XTDmJK3dD3dzzfgrp6fmN34TYFbwFCueN75BsEywTZ4og7BGbnZdasynjqn",
  "key36": "D4JBKYSaLg3K68oC8Ufq7PFsVnfsnBcn2kQLuw19eet8h7skLAXq3ezfguFVbLQ7KvdJgEJ69JfWTy5FcWrfVNM",
  "key37": "5KUsihQyCYRMwXdSVjt6RvjLKFbow91eiLE8EKZ7eU5Q5eBQ1f818hHg8ARhsRtUYbyDuLz3LWUZjcYySUXbk4fX",
  "key38": "5WTJf6dRH4fK8ns5Y4U6YsHRGvbkV3ddKyZw3u8uo7ZfkHrjBZi81E2Vmf6uKvn8kiSKpy7FnSrXWkpmRc5FuPHD",
  "key39": "2okycMcgjJGzSKYsH3Ko5BXjZNMn5PJ9VpKRMnxNP5eidQ6uHdyfQBa66akzUe84aJmdDmJg2zLE75oPCG8cnByy",
  "key40": "4eKf9QE7fw5ogyMEqU9mRDU1BezQqmuUmKTFRQKZG4aTEvxrET1xh3bxMahVtRZym7tY85M5VSvgEVB3Gm4z6ATd",
  "key41": "4K2XpuYkY1TFdApt2YvuRUPDGbXBxCSVNUZa6hsqnVDpva25VU9V18C27uCsQJ264DFhrEGFiQPuJMqhLK7F8WMN",
  "key42": "FRuHn9XLKqxoSifYitBaDq1pgkFydKEyv91QQ53b5Wdn2axyavFEscTf37dQ2YAu3tbM8wuiYUb5SzxyRjjc21D",
  "key43": "52tL4GuvSdHnQf4BGRmRidQa7da7PCWngFF7hmV4uTCmGTcfBoCw3fEYEtLbzAmT11WZJP7ZwbUpsnUsgKJgjsVD",
  "key44": "2aZJWjCVC1PwmiLHgGR3WkAuqim21GH3pJTvaLESavdjfdg8k8PbzZQgxyxEurQ8ChsrHCpwNvC9V3xDaYK5kP2m",
  "key45": "6hEADDHjV3QMAJxLDiGqQsZVRqX86Jdn54UWPZocrxWqRGuFFcf7TaJtzhygSAmpAGzSmCh8hytEEbm4Fau7HHe",
  "key46": "4YUei3Yy8RMZMNtEKm3kK1oUgeai9hh3xtSCfqznwUjw2E9XJaEeuCQpQSPkD1vUzUq1sThBT3z4ZtagQJkxWfEh",
  "key47": "2yH7HZfMdicCGTRJbNSGEWdJGYHqjvjckcU9yzta2JymvzcBJFL93PVCjbP3NhtR1TadzNrbAyFprZNTE7FYA3mJ",
  "key48": "67B5DHQQ36Jsqmfzon6SgdqwB1fxn43zWtqaDZAnP31nGp5FHCeUFF9LE9ckf2Q1otJpmJjjcVs7hvASWruSsqyY",
  "key49": "3Q4ktyAGosaZBJ44dD1FAireuDin3fvajMcgnSDGPhsH6cs1Rt8HadYSDE4aBzdyW4az72QZJVtRQ4KgCJ7TCiUM"
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
