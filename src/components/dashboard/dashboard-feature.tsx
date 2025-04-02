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
    "5oJJ1LCn6zbFfKR3XvADGoZxs1LSF1JuSRaAvmMrnpSZEPC58apz2PnVKG9F4VwCiEUw1FKWjPcjkx3QidUb2nrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hamF4uAY53vmx6iBQzhAHCPcL5jdjziMNeVKAZZ9tLppfz6EM8f4EoAmwcBCpNEAYXcwvjFJ2E3bWPp88LjxSVN",
  "key1": "5xZhVzqEASqo4LrdQpha7xEYwzGMsEgRQTTbMxMV8v6yDtjBCQBA9mM6xSCLJHRANv4YoyhLJngTfrK2sZhxKB1r",
  "key2": "5Avtk7eXdkpbvm2BQsYJaB4qFSSbYDkhDr8XXegja8VHyNipcGZihueRDZHTT6p6WrnHyFT4uqQCrf2Cd6xYVLaa",
  "key3": "32JHMDg4vsRQyxR9D7U3V39UmthkcxksHxdRJzaWPeX7WfVLgyuPFmfce3uRP5BCpswiwrPR2JDCsRSUvN1miajh",
  "key4": "4aLqDPy4DbUDaUGH2Yc3brixvbzepaeaJzZ7XH6QCGXgZi4N3v4ogTkSL77zGUqbypiTjhvK7Jh5vzx6K78FmUhW",
  "key5": "4dmp5h7PfL3D4NNpEyaxaQigKVk1SNjaKgcdMwkjryBktxQcJLtHjpGxq6jXQn363UozGAQecfRZeqHnXFvLqmV3",
  "key6": "33rzyzURj7gcJ6KGcV1APSKczYdzbdQxmjBEfKueeovPkEZ1KCAoMFvFpaSmfbMKtrS9ppScUzqPLRE7oAQxtwun",
  "key7": "5V36H39AxXHQUDzJcYXkzFAKRsE3s43aoffCiMMxTBkuSSWftBYy1gfMeQbe9NPyyvm4mNXotixLHpegGcsu51qF",
  "key8": "DNhhVWc5kpiE1AJK2SxrPQ519iSHKWMY95BVAEaWHWkw2jdFj1pkoAhQ9Bh47B5rvoydZd5Y3FQJaZEVPRFg64V",
  "key9": "HuWgKzdtbyYmQTvifE56ndp9QVZRjAg5EJGi46pCbf2G7RGStQQK7oGzQLZkFEC9UaFXDUcQRh1VCP5MurMpnjg",
  "key10": "nnUrLZo453B1q1ESCr6bzUvLUG9cvN2RdkiSUw1i6BJ2UxGf9hJVt1U92jZFaeCzcR8EHsL3VmfYx4DhrDq2iuN",
  "key11": "2uctvWjFwXdt7qG3xdfKEYQfngJRknNzhsESchWTJCUWw2McL4TiWPnxAasqwwv29vpPa7FYgJXq5NiWTaPMG8Nw",
  "key12": "3zcWJGur5jeDUgx6PpjHAvLAdWzbxbrbfjtqdEPg2qRBDUAr3dGqaQrfkdupMmrhw67ywuaUoDgHgrsCrW3oQjzF",
  "key13": "3dP9XSdSXTyGD8SpFM7dvnKeEE3gcRUXkqPHwsDogBgaxEJ9GZBkU5R7NvfbdHjD6m1XZRKHUMV7muuQAq5potBM",
  "key14": "2FDGuYhubcQdDAYi2vThegkWsbPf5VvTSVw4qyjJhsdB6Y9Mhgd6BXfx5PK2j74SCwiSKwmCLpkoKwSGbyvNwcde",
  "key15": "3wALCh5CPyd6xHNeyftR9WhtBYtJ2W9odJuR9X2fGMekm1CTAnME2T32JyBYAv8VetaCvxgAH4RoBmJoBNMwWnhe",
  "key16": "vHcByAGt9jKHoWePnL8oo4QK3vQSvezMi6nA4Vrkd3aSDxvZHW7WYxS1WNiGsBxVEmDjGBkmpPp9bk4KNW3HCwo",
  "key17": "56RSMaNAwZi3VpwTuBfguPR6HPDNmNAq8VUGg7RpvW1vtRU6vJ5HyRy4c97W6XhLuSUEnLPEnuzAPBsv4qffu49x",
  "key18": "5wSHfuM2k4hg3qVSUEeUTejKBpBKX5F5PSS5XgtExxm1hiaU7ZftH1qzcLMxGy55mVCJaR5DAPpgkqa9LQBK7LzQ",
  "key19": "5WjEMVAui4MopBcxSJWijRR1xtL9eorNf6jz53g1FoUmSUeAAUt2Q1xC9AD2N4uWxcJ8FBdfhXmFJ8JkJLPyae6o",
  "key20": "34Tds9H4iRXEmR3Vv7wquMHuJ28houWozmD7v9G37ULrhk4gS781oBTVqssqFQNZQEHjHNrycYhsZcAiUGq2aeeX",
  "key21": "4SiUY2qhKNfvp2SUY3uP5qXxhjQbXN2afcb6H91MRTSf83npvA6uNv2mQ7PLdS8PEpHyxfCMrCVgxk3FA73txfue",
  "key22": "bnJNoS2Wnh3gK9hrkKSYBw8yn6ZMCN63Q7adZvkbyER8E4GbnNp7horHLRYcc9UanQcWEtY5DtdEHz2VrQ8G89M",
  "key23": "65uj3xCsDnaoDvK5je1AgkQ3Fp4z21uLmcX2Lk3yRdmf7GqCqkHGBgLLbq48em95ZXWiZF7Lr4vevgxP2MbVSxPF",
  "key24": "5ZRzbX2GWoHwHVxyw95tg2RHQ6uCyvBnDkvSwbdds1stDW1PQ3oM6UMFC9dxHESc1rHhxLqnSYnjhoP45rahKkTu",
  "key25": "s9n55Z8PiqPW2FMGD98Jw9PHxAwu8Bmd7LLUQgMvuWYMgFXk3ErT63mEFZTLn3oYUEMtjxgWXDXczQDb7jKghtt",
  "key26": "34iUkZE59L6aZrSiGZuy18PL4Rw5R2enCKX1viyQ3UQrmS4Zpkot99STQDycQkYtmq4pYM1VbXXkiseofmpfJZ25",
  "key27": "5UA772zvmPG9Pb9uSqcCTJSMz4HESF33nwQEcdxcykahHMYpwgK6hZM1vsMhefkGvGm1VqLGpESZe1FMzJZZ61uk",
  "key28": "4ef69errAYYV85q1wjRQptEoDBp23y6o9WsCsi3uH4CpknhAkwtyq8d62ufWUcsjZuKofUuN24seJ3DW1Demeu1C",
  "key29": "bJoK6JJPmE2Qapaz1ZfNsL3UPFgdyufRkx4uLFXgHWoT533ZYnJYohqLJ2f5EJZaVWo6FbxVj7eFF26KqNAA7ro",
  "key30": "63HgsGCfCbPfVqG2uoEFWygu71WGXeq3QfywQb9T1XGvXusuxXtzUxc3sfF61syC8Qd8eaSGDefCnnaDAptSQ2M4",
  "key31": "5q98AMZ8v3AL9G4atBNqAX3ogx4hrkpk1Tt7BQmkEMMYap25WVtDRa9D61Kaa5y4Er2LG2B3od3jwwJ7E3LMTyGG",
  "key32": "3cyiYQ6TsTX8FtwawMpMfPi3RReNVhQoMyCBArLorrLDqw4aM9Ph8DAdV3uVoTw8DXGcpekG7uNP1gDvaNdLkk8h",
  "key33": "fFbqasniVSVoakijULVYETdufzpNGv6SsVBJ5V7QEdJaVRDDHTtDumfWBN8W5J61BbZzFfmoETEFgaQqTFDvapV",
  "key34": "5aJaDjjFoVnNnySKEjCDCDyCPpRuLCrbjGjnNxCuKDZx2jHsAAwoQqsSDJJb9H3fMzeLWPPSrHJhEeNhGfj1oGXn",
  "key35": "3HBQ5xNXThtjMbpij1C6Kv3mSFLPZX66HNiFH7qaUyMNxG5FmhTWxMNndGkLzznjymhCKQ6a5GChCD9C4YRXPVJi",
  "key36": "PiFWtGXvZxQETceij4emzc2Vh1sRy2aVytohVyd7zbVrXp2LRJySTJttPTUcemkyB6gHaqKWVc3CrcwMbGsGGin",
  "key37": "2MWGWFgcqi7zbj27fXASVVcc3YW5A4JWGQE3gtuChTiNoJccUnRH2o2eFY6Zmw4fEbnkKrbRGhDSokYqfbVmDG5Y"
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
