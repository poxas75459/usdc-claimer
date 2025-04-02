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
    "2CZacjC3bXEUNmw7UT3dYJ61yCJ1iPAoJw4huYUdXcWTJTDVnqg4vgZLKaD8XVBfLuMcSyngB33D7gAoarSHpWLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVAMcudRxP1nvVqkdHeEaQMpfd5ZT2Ky5c8KtWuhWoKbcPPn98G8c8yvGBUCzwGdb9eCBiFicbaQeSa6NsPNmEd",
  "key1": "2HxGSHnVjLKZw6x3DTKvGZDY1k3Timki5cz6Gc3zuc4zvsj88mPJ8uYmdZPDsThfv56TkEHJtVvkPy6CJY2PZ7Ad",
  "key2": "3r1aLAXh2NPLEU8oss75fnoMKjpqMvi7acurexDhA9YztguCMu4ND1EHWQt9Hg7fXMiceB368eqyLMiub18VkeuT",
  "key3": "4kBsERjj11ohHwg1mREiJwGjRJT7oWLqmo7G5ecVHtGwRHJuk61FCDVdJAkwSgr3mYJNFr6DNFecJvgJfAqckWTu",
  "key4": "2nPEpC8XYqRk3ECWn6dVEYKrL4cbUHKT6MgpdiHogEHxxcLCRAuxNz86rw6K95prcS72ZgGgJ8HvE9DGFGCcqbTX",
  "key5": "4Nx2MMZ55A913zFtsQnyPpkKrtcTvqGGiP3VKrYL8jHqZc7egv8Peam4J2VXyTa2tznx8ZXmLr5LBvAo1oKmKxwV",
  "key6": "4TYrqhUDg9vvGCeQTzqPc1biJzdzS6SYpnL9LmkY5ULD5s41EPpdZ48sCYbSdjqkgsRkqbUUTLGpWGNGUb1py61h",
  "key7": "5ZXSnpba2WzimJm6tcpuK5MzNKbgv9bTBnskBPg3iER6V65urHbeTr3ExwWemF4jxWTPSbs3WCLLyMzUDXC7wuKG",
  "key8": "CeV4pmhCauJ5tFZLb8vXnaLsVwam4vXLh6JgNtgLmppfqkMjnLotkZ6MYoAqTWZR6vN66rCgD8jjs18nsM2h2Wd",
  "key9": "4hs5Vkspe6CP1ahQDXZr6iDHqoDx9vAne8A9CdTjrt1XbBL9hkYegvpuq9DfwKShU1TsFifbnomP1npv7n6jmHY1",
  "key10": "5a24yejkbsTUJ698R3TLTRqPMNB8bGfzMjNUcgfL8nWS5Y5SqgStMU3jbgdQ8MuUKhknE7rPghJP3S32AWqp7hNS",
  "key11": "4EDuY6NKjJze8U6bsg5kbaQLxPnzvZiCynG13pT58FFPvyTiw1NARejZZgZp9vR8uy1C93AR9C9K6wMyfoU9bA35",
  "key12": "5z86K7275RYa9MV4GsB7pV1Ae1YF59j9t5tFWvy4DkKucmKuuxtEsQmBEN4GBqRus8M6QEnRdKdHHk8zjZyZWDRr",
  "key13": "5LrCSLUafUW5U7QHyoeeM9fWYTkUi6ByK6JDwt4uayfGNpMgKoXiY2yRQVoXoBttqkx4MK9D7A4CsRCWkzqEQCy7",
  "key14": "b86T4DD6wZv9RLaJkJ6eXk7hSDCKGBsgtacfrBFPtG8dhoWB1ErfGeBope52jHmzJgEQGPS8GMhJtEkiJpMbwaZ",
  "key15": "TUDuCSmYfhEcKsB34CENLc2fT8qPtG4sUyXDg4KGoxMojCp5RUuUCH21jokmzgTKowdsKVjxkRbkL8r5xWLNkdt",
  "key16": "25KLKC1QECj54RjaYuzqmuQRHqYYn4mJciSDgB6JpWXrgtRH6ptVX59YqNjqVqwH8zbDMYrfmgr7m9bHKPBe2TKE",
  "key17": "63KyMTYgrVeM4ATs1wGfvY5sqoNeW2ep6XPZjoJrzjVtqXP6rPfNTVSYMhiZvVviuYar2HXFzNMk6SVfjYzDygcW",
  "key18": "4fncKPb1Gmyj8xuhRLyASkBVA3siYcX396XYqhGYRSEtssN9MFja3na2cDzAWav7nfE3ABZrUaGEhazCytQAfehm",
  "key19": "3wBAwvGYfPHoz6skyosY2jpHhke5dU3LtGYEA4VaRiAT5TofaAsJcaz93ZzdoSj1NZuft77HvAw9kJp4Rh8b57QT",
  "key20": "2NpW6NTL35ypLrSyuVcxqS7CGZd3JXkwUV6FLfS3V7FZ5zcf6xYoKrfFqZr9CbE8d69kVsjh9NUGKGBM5fxsq8VC",
  "key21": "3RXRq9nnAphiZnTU8ndCSZ81d5evR9HknU8UCmeJp2fJzEoaokRJWhu2GjzzPH7WNrgnszfdr4y8YbycsJmoAuE8",
  "key22": "338FSDC1wEeWrm9KpUQLLN2umQ5gtWQuwcq4VVXDxFnhPYHiRVMBRKbBnuU65bBZkmF6N67wKFo84NHdHMvUqWT9",
  "key23": "Vh2VrLS7DFXEkU582JasJSx8i8m4D2kqXG96YE4hw8k5yuDSsuLFuDGjYUDvmTmaFBKthRXsn9FngFyMS2CdJR1",
  "key24": "2PC9swCsAn6jvP3onxeQQRyfMTkiUhfABsZvybyKw37HYdAbenYRX51hmrhY4cj1vw2Z15MJ4YosQW4FeTxNeJiY",
  "key25": "Z3QuGxhPU6byqt6X6cqY97ypCETnMrSM68dQjYAvG7Vd7VzuPkmEmmgsPmLRm3eVKTQranVkgRT5phWq376Expk",
  "key26": "4MpDruu5qPQ9qUwSwGaPaPwywjdCSbmKFAFgTntcpmq1bENSRZfPo97sGo2fXCB5vCzskRp7GJT7wvKQRPf3t174",
  "key27": "5tAZzZ7M6wweKaFG7qGqubAJGwM4q9oHJxoWjEUNSG7S8MhtBKNAWAXzeEiER3kbZH8XLiMApXaYw9vDokHJwoBL",
  "key28": "22uWRkPHGJbhUpLSHBoLp6GnU9HzU9chXfNvxct7KsUkRptKvwLxHdcVDSuMWS1ud67wuNF5v2gWGC4icTp2D77w",
  "key29": "4Pi6HUCuuyxJSLfHpjXVtfH6USqTEcjpx266P4KTStVxiz9nHcQhBP6uEd6LdbHs1n1hJ9GifmB7V6oMs1SkJyZD",
  "key30": "5gjJh5iBiJJUERMwSSY3GFodZKRGdnA9M2yyUX3ii5WMrBf87rSZhsEaXVikLEfqkjxtJ6ukM4UrbnnoSENCgTZL",
  "key31": "2mHjZS19VxjcMeCuu7Gq8bN6FDtRiJEDLyjdAzWCA6ReM3xpVd8HGpouXK1rLoitG5h6s1Hyu1Bi4Wp9sm2ri1Ka",
  "key32": "4ixgikiEF2Cbq5ZV73oHvyKFpL5mpXgYXF58STUeUenq7yo3WtEWhL3EwY3UcqFsY8C8HQVfPNWV5hq4pVnPEnbC",
  "key33": "5P24sBKdLadxAeRTPoTNHEfZrzz51GCZnmxoMf2sgW14ZaVGsv8cogQJmpxfxcdHs5iFRamNvzdiV4GF9SCKS4rS",
  "key34": "5AbZFho3GeFNLSXEjBy4W2EcBcd4B5iMC3RVRz18cwXk6WsKrRjf6jsXuaD6XAhcRXt3CwMTJnduVUP288QaLR6B",
  "key35": "wEx4YHfTYwDUcudYFEbgW67d22FapL2RztYc7PG7B4tHw6jZP3DGwJB7AQYM8AdqNf2VBemShaH9ze41fXycU3J",
  "key36": "4XGDLWBbLXnCDxqxNVd37B7rZ6KcBeJovrrtXDmGkUNT2gW2MhgfuyQ5SnaKso8pZZiWetHxq72a6jUkQKenUzoa",
  "key37": "4UReeZTzMq8F7igriucpLD9hUffn7vjyJTmHYYoZY88aaW9NfcGkxpwTukYeQug69SJRFa1DrntcawcaXwALcq2W"
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
