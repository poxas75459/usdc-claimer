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
    "4yTkeShBoTt5AHtkZs4QUNf7Ufcd4fnZHs8tBPktYRNXN5d6vrooBC3gQmqLPMun1Zig7jaR7SrbKPEh1kdkta2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZSCCTbq9Yv1KYWR9512hMGjKYb1HPvuWPFPkogooTmt3pny5xDFiL9wN9irW4hMHmTQQZadx6Tsy792gMCQLu6",
  "key1": "2Gk9d57sQw5ea1uKwjuw1S9ivneoMAGULSa9WoVMWK5dXWzzx5i5HdpkraWNPezweBAAnDTdY27DF4LWLASJVhou",
  "key2": "57hKj923sdVmfsuRTi1kPFB4LJYwaheiH9zG6nvkVyUQEV2pbNpUBmpHKYkbMzkukv5qPyyoSj2fPx2KN2nQ2mj2",
  "key3": "Bwbf6MBhE79su3KFKXinmomQXV2LFL7qPrGzCxqDHJBLYz3h7CnkbLBPwibG8YHNnoEchQeEPjjRKTZRALNZxeh",
  "key4": "wv156Bz13Uo4UGZmUowzStHUuoQqwDB8YjzNfkZaDKXpeSqBxKY3U2SQPVrit3f7MDrCr5tkCEzkU7CepSHeEV4",
  "key5": "3xBC3g5ZbBKH4e8YfJKMHVk2ZNwQXUitPxLdYoJEdYnhsw8jUcbPcBtJX3sHj9VGSVSdeix9oRdnRZUQY7k9mvFT",
  "key6": "6541rBPCCnepLvHtQD85KEb8yQGt8KwLeEAyDt4iPYJWcjF8M6PTSM3h8oYPMrvWXnjSCEEvmSbo1ceC9dL6aRPJ",
  "key7": "5Ajgi42S1tXLRy3GSh1ZhXF7vaNykNE4Frusx8gWwZPRnCzbqAmKuc8n3A63PiAQuG4p7te9dqTaV7Bd5hogrA1m",
  "key8": "2QaQJTeACnXZUCAPgc32vgErMD4FZd32CTXWm3d1mQ6Yze9nQRGfYXdc6EVCJRYxsDVAdsiGTx3RBAfjKWQ5cexc",
  "key9": "3y4vVSyhsCj1mnTnndtroCTKEXW1s8QYgCpCsfCueFBMppXR41AaoGy6aFMX8fvRS8qmuJMmNKj2cpyMhksqBjGA",
  "key10": "4AKs3R6vxDwn6DCgDf2hyHpdDuPDgfAQnBb5CJ7RpbbTqi4Ra4W1pXkPtQo9AvTBDMFv5PAakMRp1uZkybEYL6fB",
  "key11": "3KrsXEmW9Vxr5EdjCdGsdxT53wmzm7beDBih1seLbqnvZSsVweotTcditWZuBrvpfruq4RBjJUuYQ98PwUdtWsJ7",
  "key12": "3hY7874YU1ubrNc9fs5mANnxEjiRBrhsLYtWcsDZWWuNoJZDdiQgkQDCJW6w4j36wvBLPwwVZRVAVuHba9TqzHCn",
  "key13": "2SuMhujCubDjQq6g8u5HKHsJNh88U5dawtniFQjhWCgDQr28rDfuMVWntcxF7hEXFLFhxwWbpgPDAE5WULa5v2sV",
  "key14": "5sjyeL8WSySLFDcy6mfrPyHYYVCDJxoLCuEEWnWVk6vtbaAWKgSpf26YY85Fsr52XdG6kNjdcBFoC8TNMrnAXgJz",
  "key15": "2AYSqJjV6nSijdHprDVo8pSwZftQutTiFC8bd5CdRBCQ5aAVPsDy1QrqEoZqdmTJAox1dQWW4vDANiHYuUCXdF82",
  "key16": "4ygi4rbaUjUfk5TbVU4vVcosBrDUPpxHBraySf7Ls969m7gmHCW6uDpC5JfdaWmDtqEDTUj76S11e8Rs2AVXpe78",
  "key17": "7BZuPvym2R8bWPpouHG6fWjCoUagVBEdEJao4K42HkHvFR8keJrxDehJ2v7F9CvKDxDX27Btr3gYDmoCHTcnsWj",
  "key18": "txpNB1E3o6dKcAAe4VmfA2qR1Upys1tmQ2iZc2NWt5xr6eau2e8DmDgYtqCzxBL6FmJ5y1zq7vL9GCoAk5UzvHS",
  "key19": "4W2MLPxRci3aokw7esjRocNmk2UB7mVJdhVbNe5DAo4xk2m67MPoiDAfYVjeNUBFadyBqiK5FWoFLNDdcK2NaK88",
  "key20": "21jw5UuzH5nY9EryjkKCA92pGj7K64WP4LmzMgwQrHjRi5YC6WUUt6aPDQi2aetDeNu1KqmTzwJmiuMgtTy4Nw35",
  "key21": "5gECv9wVPeWiaA7oEmyhYHNfUPJVsvoT6k6rzcbPEvgbNf9Wo337pQ7D9ZW2MuWafau7nJxAWtrnC5j5DAn9RWeQ",
  "key22": "HxVXYGtkGds7XFMFU92FpCVQbW5ngwFgGwrcyZZWeRJGyYBZpwnL4B2CCHtwdcGJZTzRnPCd8Nuy77UhATJdQLi",
  "key23": "37FtPg4mgbpbQEhXuQUYWTbAXCSQesuUnDbD8V6J6KnAh5FecZZW3JchD4HKebzMiQYF5Ra1zVskHcxgkTASAq2z",
  "key24": "2g94WGzWJV1KvYMFFojoQFYHVx47QkFKA6MuTKLag3gR1utEAhcc8RcjMMmuYgYd6y4UaHdzFmQ5KDhJgAjhwStK",
  "key25": "qs5QXJyTgb8bNgcxrPvsd3hiS7fozGpq5QFaTdtwf9T8HbrhrtHPaZK7yTA2sTfi9cTa4dHSu5e1r7YVESvGia9",
  "key26": "Hi32NezMkzEN1yZtY978jLGmWBZFb5JdfvueKM1uHg7uiLBPnsPaGFjfV4ZTrPwdEoEgHYZhvxLS65MkcBpW4Pq",
  "key27": "2g9hdNPXi4gdb3ixx5j9eAQo7bKmdAVP3Qp2RbddhCwiUvfaES3Dvbu1fcXPFdpSz9zVEBERAwgFC9C1VkZ4WqSc",
  "key28": "3hbP6iVDA56GEibRkDemPxuy2G5L9nhm4iUov9eUrEdrve3F6vxTDqR8ceCWusTVN87Zd5YofKKNdgxiHiz8Zznr",
  "key29": "UZfq3AS1Vp9KZ7VoedpGVrGb9e21aUwBBQBAdHBo8AiJYEWmaqV7cMc3vvuDHod6hT3kr3ZgeQEt63xfs6DPQhi",
  "key30": "2fZ6ikQyxwfM7T4tJQyNSkLefSedBkNtQu6DojNPm5KyzqmYg77N3dYwy5aUxEpN4CCUhKBeeJgFg5VRQCDD8jWK",
  "key31": "5L4sYj5P2Dr2fPh2cZbKgqiJJYgkW76FuXi4xNLP6PsC2ZmZhLZm9p8oCpoXbMsHQmu1vxybBmyJtXnyrZtnQeQx"
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
