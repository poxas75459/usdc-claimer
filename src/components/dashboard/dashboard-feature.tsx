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
    "4WDcszNCmPyzWt2pNxyCzqZpX2XG6S6MrDCfvFqgC7LwNJsUGQgZPVYwwxuELKBhPqSZQ8DHjMHoPxii2mRL6WYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VChYmbWcyGfBkRToPvcgwg9V6Fh3J5oKQcdaBWhtSmVDMXfCBT45MnAkqPjLe7gq1ZrdACpW1s8w3rFMw7QWYF",
  "key1": "2SPUsXbPGZLksx3LWECvPfHBBKPc283YkyWciGfHyGasXjgjdeUCKofS5b89R26W2KN191CGb29G9jkHvAKHds99",
  "key2": "3JaaWzaoVQtysxZ7C2CYWWre3uM8nAHuLdQnURZ1MMfdWqW8oX4pt6fkLvhBrb2LiwXAjKUk7NVeD3gwdGr18gc9",
  "key3": "4o2nsvmA54v9ZX2bvnquSgb3dZaEkUeHqhX31H19JY9UFV74cMCVLRK5buRzLxJaX3uAfneG9ApuiCbgotUzHPZ7",
  "key4": "44orX1TxSFZJyLD7N4uryrDkw79g76fE7BArnyyAhbaiVDzs8iNzeuw3WybMxiCSYH1UMFDZq92mgKhKufgMXXF3",
  "key5": "66JcD8gyq5wupqASC6f7Cwcw9xahESNCNgG5ytBu6gBz4F7gVGJ6Mu6P1bnr884Ga2m9sgHiqvsnT9c2b8SoDPWP",
  "key6": "2xL9zE2g1SYLvVe3np2w7aVGbQrMPTRiAxKv9oGfWi3eRbYfJCxCXXafUvBKepZLe3YQqZjBtryJYU3yuND6jthB",
  "key7": "273QbhrEetKJAivxcmvAkptwe56doCCVF6T4dbvumEbn1hZtHqESiC2mctModedXYsG8HmwVthn1HEFVwT6Ju8GP",
  "key8": "4YW1UHPe6gKbw5HNCvKsCxhVfu4bduTpr9Zu5FrrGzo5BnhifE9DssAamWi1MkUCyoVjxoVD9NhJxx8Ksk949fNt",
  "key9": "vM5EpkseYpAWP2k3vR9mUo9AHkfJ7AnUa9Ei4xq79n3DgiWFfmSHLGwach8tFXUmjkUTDEvTR4YxXoKMFxLuUoC",
  "key10": "5KMpAYjg15yZCqjTMXVpvcf26MdEyZJgRaV1z9cnkMZxemW8X5yDzyycCnfDeVqLAxSNJK7X5k7A9yqrq3Lk91TW",
  "key11": "3DsN33dpUzX28YeVGi7QpaTrxg7EAGV8BV2d3ipwKYreYvTHMSXcL9HcYxAgo2N7p8YBXmah2kwqEPf1kkfGvRRk",
  "key12": "2J3acTixy39eU9u7mDKXL6wVSC7GPeRnn6eLZ6rp3bEVwJh6D6eboP2zCTorbMLmbUL5QmY352jE7A1NZ1A85RWc",
  "key13": "nzmyvbvhdGjonDwbvTvHF7n2yZxsmdjein99ZZ7RUCcCSaZgY1izS7qgM1NTzSvay2TWLuECpFzdRZpKdexb1cV",
  "key14": "39PRZF36dcypzDbUqjgJZxJVSVbQ6UELdHRUr3oqTmRrN2ADVD3BL8pYoyUQTTopVdgxghkRN9BwvvbdyEakt6Bt",
  "key15": "3xCFyp87TB3rKLnZjfWMAMmER6Z8sFxXjF8tH14KeFgFTtHE4Zccwzz3byYiePxkyiUzBsZWKQV6n9TFgZt6V2Ej",
  "key16": "61DXfTr9vCuFyvuTPrZzYem86RjCWcE8S8heHdYqKkZPCJ3TF1FGY2ndgQL884HAuwkc5KjULgpyV7jkU1zHosxW",
  "key17": "3Lz7Ncti8ga8Nn4whDD5cKt2xtSAwVibrSYwgUfcv5HQggVq1gUkTeEyeRTWP7bhQwNipuDUKKwkWCedoXjPAcvu",
  "key18": "n6V2WeD8gjaDJt8yz5CzBUKJFQ6tiRRJm14PauzXs6yH1TMgR7jS7rpxgYXCwg5YUAtJijrxdBQpTRcS3rhxBHV",
  "key19": "3d9MDBcbiJuHsRANoN6mYnCon6mKRsY6sd4itdjXc5SYrN2YMQHL7nHREtbLCjZUG2tY6Qw1FDXMJ6rcarHMMnEz",
  "key20": "2fGB4BacaKH4sNUc7xyXWrbbxP1KfkL7ZchBB48CqHL3LGm8M7S1tSDbUzFZcdMbDqKeZ2EiDuQcrtKPYZXTuFaX",
  "key21": "4xVyrV6FjvNXDn6WyN36pknTAdzRjJhcMokNZE16y2RnVEHQuoySRtBCYmrofEKHtjzkGghFtrzNVAD9u2Zx4Uzm",
  "key22": "5WbzAWBhhUNrid7Fxt3HUY4M1c5zR9AMrEj6wiajKAffBe2WjPBgfshqmRRdm2gfKpDTMBjJCkn2wV3jCBitFE1r",
  "key23": "4Yt6S9Ymec8EdsycVNn27AedbowD38fpPrhzVGhs6H6LexxSq43EfXgz6JubYp8iahKY81cjorG3QsgpvRHH8Zp4",
  "key24": "5UFyEdbMvNZxmMe3txw3SCWk45JGcNdYWzu6xroxHsGVxi2KP6osnmGXNokprWagYwSmnVLGyMs9bhyFwbuWNn6V",
  "key25": "2ZbUaLV1xhBQrWk1H728umwjzELfKRFLTD8KD3LjtL6MhW9TbBKMsKeB4oJWcJB95bTvZD6q3EsfEYWBJQ1FYDg9",
  "key26": "Um55mfNdjvAbgLUwfEMp47EcK1WQGxzr4thyJCsMhrinugSU15UUUXs9RZYN5FAYB91eznTcGTLWsM2cpDWS1Gi",
  "key27": "5aCnqX6bnaj5ZXD6jaiUm9YccvvXFWwisMdyji2N6KDRLFuaHHLUBwDtoPsLCj2xnyhYmLs3XttGCcqnsCoM3snC",
  "key28": "4L9nYGKhyienrkMcTd4SJijJ8p7NpjRFnTPywneM6iHxTCgnq9V1g18VswJTprTXTcBxe2RwBtaLVmve1srb2oqC",
  "key29": "58ByCDJm4FovsPujb9yg5qNumxdVrCoxMo8J1XHKkooXJBRyEBbbvrRT8LKrjdvQdptZLoaUmdSq6FCinpeb3V9a",
  "key30": "2yTyzEBxCYL3dapEcMHKbNyiv14Wpa6qwkB4x4YariFPjC9SCV5hdif2dmYFNFaxdbLYN1mCdBXzYNV5eVBxbeag",
  "key31": "28Di8AFoEninN7yPumKQkU53SesTi5oT2mBZt8iE9YP3PUp3EfVBaJ91yYG8KtJJMLmRXmxg2Ej99rGsKbtXpt1s",
  "key32": "62SLvkoUYr1aRHqNpTcZ3H7H6GVDRMDab976Gd26JcdJmikQRUqMKfMjnGMaZMEVJu78AFDNDL8zWuKJWueY7Gck",
  "key33": "4HuENzkR58GAoHE1By5yNsG9hcsA8KQCZAB4d61RA96wejQcFfCN6Ls4kxipGhMze3D8pT3TnRNMG2iskiBYMRRV",
  "key34": "2fWqt8KakBjxYJeu5jqtgepqniz3YXGX31q4U4o6JUPQ2NtASFMtzizfQmwJwLq7eC4RPt6n3WSgboNVwRg2HenX",
  "key35": "3SvBPwKu35tAiE3ff7R7cFxzpinsi9gqvbGbYgenRCnPZ6kjpDZQrvPvz1H3kgMwbJStMjMf8Zjion5ro5SmQQ4R",
  "key36": "4jnGD5h7f3b3ZBxy3TojcKJ5pDdpR9bWasV8qgLitQp2KuziCtToHMYTpu2d2cKTQbEju5kSa7bbk6vcpbM1Fc7c",
  "key37": "staEN66BKXpECSPxUr8Vs523AuAu16FrSteEdrU5oRmB3zhQKDzToTEbGWR7acdoNEpZ8nujqV3oeEyyrtWKM9C",
  "key38": "5SM4RXwiYVgL6mTVRxANVLf4Rp3fvddqgWeXq3PsK5bnYTSRCkW2YUhjNtXBqoFLsSDASiRyUREEMQFkQHsHypZ5",
  "key39": "5smpfbc9z7ynM9mhnw596zhVcqABwx6E5ZctDkJSMuUetPux9xURs6yPSmagTZ2CvSxTsybngbGRzgtkbQ4McNR8"
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
