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
    "3UyXMSaxCY8szdhzg7RykZJFQHtQEwKJM7sRGg43j72PK2wjLQyd2riqBXdweeemfynmpQaxcRrdemixpipPrHcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gq5yr4pjao2cAiFCKw874HWW5WvBib74X64s7vymUf8Q2NYYLgd6ewwy3QvfnpaFWTRBWda22PRnvLXAGNthDpC",
  "key1": "6G7G2VpSmZCE17DmzaqnXm9s95Rd6yhWqLugdzVvsBvNSkUiwcVdCXeq2qRExXcubFTSWeGXDpk35vr31UUVNJ3",
  "key2": "4tQ5yUhVPatCJkkTFL3wF7Xta2GKoqHswjG4ddZswV927hzD77CV3x4kSAYCGs1avz9NpPiGaQF93fkCWgRjo6ge",
  "key3": "qs5U8vb5fEvKPDXQpw5Y6YqFCxqyfxFQNUpnLsgPHBDL6DY97wUTtiEuvqbtHBiCHfkvA2oEQm2nK3nZhLWNx1h",
  "key4": "WqvtsWwutW7fD5JxF9u4jAMr4s9ct8vXVNdVdePfhkskRofXvqBDddM3eYbpXPhmS5f1dddVPQC6jLFH2ATugEj",
  "key5": "3pRWmEGGK336tKKavNymTGwnHp4iddaiPnB4pMsQucMaYXnKiydZh4EriNmiNpQv5g3a6RKXer92aaetgQ9pChpv",
  "key6": "aZqpjcwbXvN5idLu1zJ3eszspeJjmt6KDCvQzUR8TzngX5EgGaqU3rsU7gdRMN6XMmEh9RmmaSMRRgmDfCDdZkf",
  "key7": "DCtgUMvRbWSJ3yyyYeFqoqPmGHvPaq3x9xkftD4Fs8jCHABSeMqX74bfAtkkhiiGytgKQsMpCrAAYkbanFJitZo",
  "key8": "5gpg4aVrUPA8Bc37NkYWMZV2cWcugbU62Z4P6oGp5oGRFRX5ZhNTS8kLFwFaNqwZEXdN4x7bfTSTHQNMMREYggZk",
  "key9": "5dftU9R92cWbSiJnCXyZafe1ajLqN8dvVft2o4e8auamQ8bWjhjakDuxrStAgPracvqTK5jDVbiKSni54UuMSLBX",
  "key10": "2EcjoCGwtbvHwaE7F6hibwmi8cU4X6EyCfG6xSoU8oNXFxb4h3vpFqA6xBHuuSxyvXynDJGR4qdLGVyrq5d7RivC",
  "key11": "peoTotmLCR63wjJLH18uKw7jYa2J18NPBWK33NyFtgrmcKghBWk7ht1kPCMZLbQ246ifKcviAC1Nau1kT818wqz",
  "key12": "41uBP29DxDZPxbxE7BDxFto4pqc8TA2udUc3MYjigNum8nGvdMUY6o9uVVDFBLCyh67P4nvusAD1daXs3RWRCpbJ",
  "key13": "6REHcCpgKsWqtsnNnohBfykqf2AtqUKcYfPq1WRuDMJ4tBNWsnL8Z3bGYqn8FNpM7iFoQfawjfWiZsQ9DNP3q9E",
  "key14": "3m6tA9ZG4Vzsvxtoe8zKXXmUTy2xZCB56tBtD7qn8vrAS8MQkVBpFCuMfTn3niLn9Yc3Uhj26oa4kyZqC5xCVZKc",
  "key15": "3uwmz35VWXBV4pZZ7YWenfuenYTSTXdAMFP8gqmwKDv8MfjEkemr2rusBzezPxznrxY3hVq6ztFAMiBBeBEXeoBT",
  "key16": "2jvHa8EbquYXSStNphZFvxeudZSkaD6Ci6iyqbvnHMdLE5yab7UrLPL3BryhZgVJvMa4Xu3xSQ72euUJHer8rvAd",
  "key17": "4Z1ma18qRXJVpdNhoRezg6Pn1qfRSkaW4Q8Qb2gS8mGqn2Eo1CsFS4X8zLVX6mDcaqR9tGXZG3vA9pua1gaWnh5K",
  "key18": "3M6AmJ5L2LFz1S6f9V1VsAGKwff8EFjprVqbPMtZ3jF6eBQsCn5yx2TRzmucrwXrTXWrobiVF2uSoRFY5D7GWVXP",
  "key19": "65imCMM9VkmP2EKGnA6ar5BtFSfrWT5Pb9onEvLT6vmAJF8V1hwNXWv3PNX5djCwpJFRRqi1Dfkw4LdVPdhN2fC7",
  "key20": "61etMSM2RfwcYkdSpx7qgbdVMT4BZA1FV6LgUBPDEBVD5xPrrxS1sw7FHpdEuLHzxAGGzbysmDCM4jucchw9MhJk",
  "key21": "2mHvcFmCD4stdgJWRkXdHQyHEpkPQMyNShZqkMJ3E1Bu398YPKEPCSY4ubTL5FtvYiefEm7ya37wr6hopAcQ11vK",
  "key22": "4A8NEKx8LbyrwDSFQCv6bRNsRw8UFpTGMsE8znMjPreugZDoQUyrxnYyJ9x2yYs3ZbXxVcecyrMoNoHJamz5yn3k",
  "key23": "56NiY7yN5jLGEghTGnRcrNkQWvUaHmdkfbKfSARz1U7oQRgoabFMp9NV1bgHUdcALVSHgFDsw9SHHAt9zhrrjfqx",
  "key24": "2FpbsXqGtGDfAX8AhmBq6kkuxGsUcFp3yBDzaKQVEXihkT9cuWxuAFmACfJwNgfxp6sJQFCLUaAxfa3UBSGyL3pa",
  "key25": "Lpm9bVu2qHtc5pPhzid62RLvrEBkh5N2wJsr7rYkUXgtEDrzVd2reQkAaHawrU63x77wZDMamebsSzW742DKY5v",
  "key26": "AdWh9TezHkb9xGHCaHFbiae4gxQ3eEipfY5i95Zfg8WniJ7S5RVuyyXKH7BtHaVnCUvx4jsQURuEW5VhDw8A5qu",
  "key27": "29qkFP3Y6PWF72yFLgZuA24zygafobVudfkdntbbvZyjQrANFNavnYCpnEyyruvqCcjybnwFae12mb6xqjA494nv",
  "key28": "3CAgqnWzCkKV8bUTkktgFXSrRnWh2icomAx668ncWXkKt2FSHDzmq7P6pbCtShqyoEjkAEoaurCMovE3hpmavnby",
  "key29": "2w133i7AqxJmuXVReTtYyrfNu9sDTGGqM7d91TZS6ZQofKPaDXxpN6XPhJCwhzxB2NP9DFzW2XDQsP9epLU9QFiE",
  "key30": "4EQ5Qr5EGQXpfSvMgreDFWyBQ9KxvUufUxQU6MEN3w14yMKutmqJja94rDGYAUDCKK2xFYD2vBwmQWKVymM38J4X",
  "key31": "5UKxAjnedDepgrTf2Zgg6rgqPiNmpntCbZwkk6FfxHEiht8ioSwWUrHZasUuHxKAQ9oYPgWP1yS4R4mT5KFPmHe2",
  "key32": "4AefwZvst2wfN4dHwudPBUaz9pbV2Kwzv7hm9VzNUe2yy6W19GF4cm3A8cDxfToVZXxX9qzd3zsF2azJg8ua62pa",
  "key33": "MYYQE2yL154NEmcR6CmeFvqDngicMGywnrJPox61HqbMRm7w12RefpGdFqVsqNq5q9S95wsuxEF9Zgt6fruHHhA",
  "key34": "2NBGYGgRBgqMNaLj9n3LfG3SEgQ11Vmr5miPqFyXgokPHckAQozJFwssiuZk1Zur4wwGtENa3yCjaEvCcaY1ixjx",
  "key35": "36jkmeJ4onB2MUFowevk2DmYqiT3EhSfBo8CJEUg635KD1WL2k1WqeNr8RyKijbPm8WNQZpBxsMfUKSCdXTqgbLu",
  "key36": "2byR5ztBxox8o2Nxc8aLJbXHUhJgw5hqV8ggRLnf3UcihRZuYhJqirtWFzV5fDbcigsfGqbf2A67kuq9eWGJcjsd",
  "key37": "3xbTBHyZkVURKYyzFeS2gXBok5bYRiathgWYPGMtCGh59vuXtLGEdKbDtxa3QAKVLL5xZmpCU766mwfb2m8LN3eT",
  "key38": "KT7X8LzbTHwcneY9X6mN3mG3VPzWzsPesNajozW4GfKBoQTbaJu5y4DZrcASwq74A4i8REvi1NTAsyR4Q1hz16X",
  "key39": "21BuAw8SqFeuyPPwrX5DR4mybVydFVBCoQzRdUEuax61NfXxwAnyUyfWnNyYriAFJaLCJxdYJe4z5cP2FFdpprUw",
  "key40": "5EF7LvHjfTk86NNGULbixTe8MC7Xmsxs1B8Rd1usZsaQHeakPLMkaFwrPAHat8ZqArQw1kk1JQrUmx9Mm6zghEgS",
  "key41": "2QJh8pvh7uqTNVvfGKxszCkyPSLn7NpnEwK3m96uapwqZFyKwowKfBLwAdufLVgnHRj7PUQExpesSM8wt2QcbBu7",
  "key42": "2zW5AQuSHktQdvzZ87gUM1bgR89U61q1Ey59jwF6EwLMFBWkKbxr2TMb2L4EgJJDWjWPMqpWuUtvrSgvBWiy2bXR",
  "key43": "e7GRqtQsAFjinJF3K23VcRcvranTmCfynz3b25PaEh7mRVR53dPNsBFw1EwMGoDSAhQsZkGDwUW1RxkxnSYMhxA"
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
