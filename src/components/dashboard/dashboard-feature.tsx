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
    "4rdfQXRQep5djegLppBaBjSyKDqCdf1pDx6DA7AzsG29fhZFZfFjmV9eVTiEzgEe61nksJTMDyvPX371FpJ1Kmtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4rUudoLrR1MpXb2zEqU8DnWG2su6CrwVZ2ow9aZpr9AtWuVTVn2jtVkZXkz3mVgRA4teP9k37FvE41H65a1VMq",
  "key1": "42iiG6DFUmyP46NpaciG9xhFmmUrqe4Jn9jApvg7ZR6RDtic9GhHcNJTkCmNXeVPWaYBq7YDVKSR5G8jumMPCVVV",
  "key2": "SuN9Pb2nSpn71VMG7MEfPPQVEEmcxduNdaiDsgDuaFeKnynRgKhqwdAB63Dt4GWkeMeZnkmsfy3QxiYVvbd38Cv",
  "key3": "5txJDWiJMdDtr9vYqnwp5gw6W2UigQoLuromGrisKe5YwBzyG57aE49sQB4caYE1TJiT78twyQnqBeT2Uh8KGcuh",
  "key4": "zVMXLH1aYLB418r2A9ZApeuWC6xEzc6aYvTnhs3ufwBdksXkFkriv4ezJgjhW4ugF3MtauB8YScKu1jTCJUzzJT",
  "key5": "5eDjXnSigsT4p25YhgQJ4p1FGCGZfXxpoMr39yNCLVPHU2pRnTq1tTWiJxg5tE8X7TFhtEcKZRrFoGePLpQmgxpx",
  "key6": "5z4piTb2rgrWKnvg56S7JuwzCvCqW7H8cGuQEKsTS7AvnvBTbi9phuVWqmBMHPJWFNYrjukvPaB7TEyUBv9UhCUD",
  "key7": "2gS6FKXVfnFyv5UpSF1aSeVVMrguiJQGC2qGGPFLFkymRG2twknBfGQi15AZQNxYXUCvpzTKzxUsMvw7vs7A7HBz",
  "key8": "2yJ6jaqtCoZTaDNabaTLKSRWbnvSKBopWMmpksy2bKuabTsgmexonPvQdw7kduck2xEmtC3PqbfEtzozMXrnKXqE",
  "key9": "5T1EYadicGfUSfsf6g2dZ6wX9hpfxN7fz4DQFmazjfucKpe6YSYCi2j51TxsWB48C87Ga1xWQUZjD6a8CDrdCFzU",
  "key10": "3z755TZK7JjW4rSroyFx8nQ5iSBmNCpTDcZWoBejz8Hwe7bxSUtUvVtceJg5WrwCFp4ArBv8nf2KZRCrmgjr6TsF",
  "key11": "2fTCiPMaYFHs8WTy61n6ojndKwyHjC4BvJ5riyQN9TDYpHZFuY9TY1apppD522SXQpp4aHXKGukCt13vYH9h6EU6",
  "key12": "MWesfsj9K9yCnPtV8rc2Yfx6vrxBVmsvBMtBPxwE2dRDgpiqnm4pBsotCP2f6yQmRwoP48xP2TLEMS8EPnx8FCU",
  "key13": "A2Li97HDMvZkXX8u191hB5VzXcpCr1ztxvrBv4bzjsgmvLXAQoYUzS7SDuR44EqEErifQ9WvtPu91QJAR1whjJZ",
  "key14": "2294TrdgVcoSM3VbNBA4KyqcRpGdaRGNTY6QbYJTdz5yafoYMWnZHFYCohWMKQEYMErXEsBX3czV7dUBU7RcrCZe",
  "key15": "3qU9mNtKoQn3LPi1KrhjxJ23sumhmXNEM32SQTTiuujBr3s56TabEkLAq26uEwpRNpuuLcFo5XXUJtVdvY3JwEt7",
  "key16": "66242NBxMf5spwspboehoguotZKUL5wSMadpVqz4UUz3pNdWhqL3FJNtYkZ1rLSPrJQqhzAr2wBqMAqxKJaR7aZB",
  "key17": "2aSGezwZ9hbXiLhs4LjfaA2M5y424u7psijj2or2hUhpwob9nUd796mDGFVPjErhCyTDv6LmQCqJ3HZqWCAm5oah",
  "key18": "FLYow958S4fHmwZavwQUo72pUkCSHqb69ou6AR5SejL3CN2UkSsZiSR6ZBqgtZ1k82L2TkFRAHnZ9AcLDckmxFb",
  "key19": "5L7pWvsBXCxkShL7TDCeci6vCM2fR9xZcRR4quoZSwr7Ed8cEUbzAJ9rUGPybkYp5jKgkyxszRgxWYKg1ztNRA74",
  "key20": "4UxttiSz82EKAy2gSxJM3KAx4NDTCcSB4yfMZeF1hXJoRLqLwxVpw9dbwif4PKbhcLuHXx8sxL77vwop6shqxYky",
  "key21": "43Ng3WUf5rLseKykRRCrFoqoCRmMgibeUKzQBCisMEVHQxHKm7K5FyqMCeuRpXqse6ZZZdScKUdauXfm94fBN6wA",
  "key22": "5AX6z5GrXKTDmtpvak49s2vph6uPneZLQuwDPcopR5BmrM1H1A7c1rf6W5pRCBpVPLfNYHoe2iVRKsi7d4z3KXgr",
  "key23": "zJoPAyqnqKbnZDbQWN1QsVw9XkuiBUBQx4EHe4KqAPAPMXD1nk9LCAEr5ub17vS2D4xJbG5pwVhR14cFKghZubD",
  "key24": "595dAG4ScEpXWJkekd2abhxs5FxCya6KaeTLbgvwvT6g4YfFwdFE7g3Kmk5RkS5nWdHoY38fT6Nd3N34qkC6TjoQ",
  "key25": "2abTJQ6h37S8mkyEcr89i3SSx9Mv26tL28tmLJ7rCPzqjGm6Rwsy4rsCaCmwroZ5PCAsvcVQbtdBfqMF5j4Bt6eL",
  "key26": "5MCfb9dY4gDdqYtZjpZdfV2ZoDW9wmvgi1UZncHH6ECKbo5sw5VErVAP9vcr4ESYEneCbw7oqM5r72UBs9NmuLJN",
  "key27": "5c9jKSmwLbeeo64qQ9SWD3JN3KTHPXGosnnx7cyu4nWCAP1enxNr1zzUbbQ2Aj1ZHftfCRH3Akz1KiK6pkTponuo",
  "key28": "3UJodzojWMa4VsWX9kQebjnJgXawQ4Kbmz3dhEimUkZFnnSd9wocpfiBviaPASNH3HV3YFC5AwYigHSTYjfG3ApA",
  "key29": "kEeEFgVqWDE74GR8XzF8h3Kw2GbogDGLrEkCzVkx5pTCdSQTnZuPsoNEn9mVE8SYs8AWVzbBnVk5SXrN5nmqkNQ",
  "key30": "5smAVTr7pm41gCtNa4o6NXVgmjmFj2qARSHuGEXdgXHtfR25Z2v2fxsGHf4vPvW2PBzsSR3tbS1uwgtN4s6Bziuq",
  "key31": "4nPh3E1j8SXuVPLQAKrh7Nnif5dqQckgoKXnNs5tMsUim8u2jpV2iBGoaSVo8kxLpKKYQj4VhYpDWtwsTMr4JSHm",
  "key32": "fQKihdVznuUyxrWrEUCwx2Qw6GriNaELaK9hCKqopfpxS4YNC8Cg1Xmg2FqhPC3EmV7Y3U3KpjNeMSif5aGwrHi",
  "key33": "czG5rLmRCFj47uwkdRoXmssepQ2T1rPrsc2Mmsref7ZUGsXVSPADV5kMB8tQDfHRVETmBBuEXe3XGxvqDZ1Df8G",
  "key34": "62RdARPhgZbNdgWUX2L8QrnzT2X9hxagV5NAE7NoiJmcsVpiS7oBskL1KmvrnyGS8kr1d1cBG1DqyjTmv9FyYdZ5",
  "key35": "3AjMxVovb7ztyrtJKtBPZTjiJVQY9sBwG9DnjK3gNCWw3QBEWjQic7DhbGAESVP6SZQG8fgrZY4VSSgCWREVuzRw",
  "key36": "3gugiMvfDhPhewWKsM7WCQjgS75ATwky8UYFDhBbWnZHkCYkEhtK26Ti1HbNHccuBgAD8uQip5oCP5FmgMJcmz43",
  "key37": "4NacrTW8RMMMGEYyHyR6pxzS78FXwGThSUMNeoCvHQ5DwCb5nLV82YVYghtTbzuqKYkC4LcR93Tm6T4qfyN2hUVq",
  "key38": "43SHMp2sbLwQb68YQ3nUznsEd9WEdRihvs9poj5nZvEoSStXPQEDy3fxUXu7Us1TUuQS16mtpS63XV69r5Et4i1b",
  "key39": "3HY5PNVFFpFUqfpJPUuCyhFtnU6Ut1uNREcxassPoBt37qGbARxcTXumHFMDRfhUerwcKFTmMpoDx2RuGzprouZF",
  "key40": "Gf5pPwktYNwCR2VVd2UyKnib9QJUGF8YGBQHuJmhopNzZvPiiSZWk43Wa4GsH43j1rxUgneaDGHNV32BmXw8x42",
  "key41": "2sEKnPo845HDK96edZothCdQyKV3cjhJynwcn9H2c16tw9k1o5yLA91QMaYHWPWVjrgy7EU7pi4QgpG5DJ2Nv5W",
  "key42": "3nfC5YPEt11Js8B1C9GxW7HwxojCm42wLzKE1GJ2fw9Frk1YTMnNhH5vMXX619zecxT523JmAmKwBHMvWrfhRGnj",
  "key43": "41VZc9afgGPpcd9EwaxPoZyow1ExQ5Z22kfFLD3tjxAhHPy2P61sMD53vWTXzUxyf6z7ZB6XkbqAdFfA7SWhEAp2",
  "key44": "3eYw5TKeiMSWUVgZycACFFox6jeqZ69Wg3CQiSffcxfk3AQWJ12P9XkM4dMM8QKrPfatkDUbq85pG7xSMPk6bzd8",
  "key45": "3mXWVhqzB3jhvKd5MEjR9JeeUNVLxSDZyP8cxFk4UnKqhjjgq5WAEfpDrfyrgHRZx43HffNUrXxHSfGerN4f46Gg",
  "key46": "mgPKEuANfgNSEfztvE6dvGJviPG6tX5HYtPmi8jM8m9yNABDduXSicaFaw9xPugd57ZwEfLiSFykSDTkAyP9rek",
  "key47": "45C1YRtWafqkiQTSDSxPeABzCCQFwvJMCU3RfwyUjWvg9ZWiX8CJYhxqctLpeRdkVWTg65HDXERrM7HeLEsDTYNk",
  "key48": "2SpP1A36uSn3JTDhWMThiegcaLv8rgPMQtHzbYsoZJ2aR9NNFHAh8d8W7mQGeQ1SLM8mD4aX2wMWf8pV4JaUq7Fo",
  "key49": "2TNaY3TdV4xtAAecY8A8VC1FttEzhESqbbCFFkqb9tBxjfSsgZKLuYiZyw87GTAQaqX4ACmiUAsa4HjsnXpQ4Cdk"
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
