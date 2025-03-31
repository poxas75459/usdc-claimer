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
    "4qsjqco5GCerYcMUsRmpQMSYtiAU8LJnbsAWJ4R7y21tmweLsZ94wWxkxVyXtq6VXqFKTzoYFSfpuogvQQrPoKkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vf1hTkg2QNSdL296xDxQiEvKzwynrxpPp5XpEMaUZQ42K4jCD6ibR26jyZWDro92evzC1UxPF7AYpSMCwoqbiXA",
  "key1": "EaCba8mZvkz4SpmCCgKfs7vNE3syBUFtMyGNnbAN3VyQv5TZHptPV1UzHPav9LEXZLzoSMzDMwffy2TH7eSbFHX",
  "key2": "4ei2paSmWnhVwkuNJGRFsQqryqSu2LVNYCoMBinexNaUMg16R5GD95BKjoY5SAkU9PZvyWCfcwP64WBEsKVjLaiX",
  "key3": "4ookN7TNPcHxRTg4TyyefKaHtxQ5DLrsxYRm6U23e5ewsfxRcbJEbtoGaNwRAjTLXT5iuygZx22fV7FZPeM1ay8b",
  "key4": "5T1DqFfWH3wxTwyTBEHmFAi8tfSUD1NSA2Sk6nYd9jAnW2nacfVNhQK7Tta1P9eg2ArYssXFJtuD5Xc61owcV7gu",
  "key5": "5GHAjVva2L1q56zjwCCLxmgB2vrnPhYqyeLPi2DvQMHLW83wE6PnkWqQB5JoMzQUMbpMjvw8rMzFYByDdE35MMge",
  "key6": "5VcVXF5GLYhfvdqWmKBPF1oYHsL7KY3qaezt47i3Q2tZmkwHNwkXkZdv283UEAQF53WA4XDawcZP6qVe5atvWwjj",
  "key7": "4bbFnq15UA4B4QjqZ9Q5iu4Kme7vCH97UoeNtNfepGaujKSj1p6s8ZfoTt1FUK5xHQuXm68T1KSUiX815RwPNWAE",
  "key8": "3YzLYUeUKfo7JPUb5gX7snUZEChNMdei5p9o9Cd7rgqM2qXUbWwT93A3foRq69U12MXKDtqGKDxtP8xRn5zKsRJw",
  "key9": "2Q6iWjeVHVskjx6vWY4U8U6jbfpPH24E6LKbbBSmjqbRhpvoRLXqF4nVxhC8atD679LTrVy1zJ9LYmpzY813yaCY",
  "key10": "3eL577e64UY44RDJoNHpgwuYv5x1bp22vqXxy6zTLg1iCqB4KhEVjcLULPHZuViqcB3QMytKeciUkAtsRnhiZEfg",
  "key11": "51R2JX8NkMRgpQm6DLiHKmpt2UrqtFnz56ejcfFa1NmVdRNk8EQjUbz1FZZXVBmerhZitZ7QCVaVqT1kPtJBbU7z",
  "key12": "52Ve9L5czzLxCjYviiBK3542aqGo5pP6EyiyA7Fp4ruWVkMkyygMt9qEs7Jg6DpSqgj8kuy2xuvo13NUa17XMZ5K",
  "key13": "5n7Dk2KnwB8SSKLa96S4YCvzrJB2WiVCBX1uUZWayNwyzDk9HCRHnaYQ412KVCjuzL46195VgCcC7ebWTWinUA9A",
  "key14": "45Zrp7aJxEMPFu8DCSkQZDFAwY9qvR7om5Ku5Ee3zqToGx4vnWm7grhFxgDKnq1gSqkcTD5vk7GXpVVHf4g3BBcT",
  "key15": "2Bpo7ayeGzpPSRMm51z1Gor6EDXUB8eNsL5fZmNgxVJirXd9bf2kydqK1CBgFTWDfwBVdCiVZywKkjce9bq15bYL",
  "key16": "4EgqNhh3nEL6cGGyCuz9cGcJeqqCP9TayvgY7hASj6UJTu1KCR9Jf8SjtA18JSQw7YWzQhADMJ9dVgBvnfZ7guV4",
  "key17": "4Y876CbHySVC8SDzRd389Ax4RwmD29bZ5LzczPFqVWScfEEfyNnmYmXM2oCptyMXMHsRFbo9kJ2cKvfnPuVGDqso",
  "key18": "5rdh18XAzjjKpmghvYn45eYWSQ1BkZjt6sCpU8xGY3xtP2WhqYcGnDEHWJrtNu25BkYW1azZcj6AcVFNtvNBfvER",
  "key19": "mF36dys7Q3S6YusPRuLT9vak63DtFGaAnb8wMdLap5HamJWaTa8uLnZMuipenb3RpXAFGhQ8AS2UEAjdAXqkLeS",
  "key20": "5R9EA9FL257AnK1djDhUnhqHRnqQW3s9hPrUbyYZ4SzQUDxgW7wvZEYjNBh1VTnLt2Fw2NuxCP6oEr3XFDvV24qx",
  "key21": "4PWQiSfnjuB7UtwZ8MPTdbbodHMkSVLMRqQbGNoeQKmGsm5YDLQEdJ49Eoc2rBcJNNQvU4X9sxT9LXkaHbNePwh1",
  "key22": "2jPyuBkvSbHTnu4SMn2qTybmB2sY6RTUZMniUZSEv3jDgbPe574F66QHs2NcbAg5YUVEU7gdEL9CVQSHXLzKtRsV",
  "key23": "54fzatEKbbCFGchegWR2nTd6yoZmwpfrYsV54sfcxS87N6zcNwqEyvSeVbDJRo7bTwvikz3vxhpW7CXHHtAky3Ve",
  "key24": "4ZSnwecZd2QhFAJwBPc47MDJJJ5BPQLSbypW75fRP5KFLUJr4a9v9LX46dLUfBzvBHobDLQTNyBX8bwnGTVDsCbM",
  "key25": "2ysQjTDa4mmCWenYvcKMnFDZALH23aMd94QpqS4w7kKZx3Rj9VRo7Wr6xeHRbmjobPE1HSx9GQKAqw3RhMp4FBqM",
  "key26": "4LTbJbWnPaW2EfZSz8rcLiVAaiJLCr6BHCjtJqWNDUhNwTGvdC95GZaqxQnLTN5NFB6y45XMSwyPbbg9BcM3NHaG",
  "key27": "4tGLcEYFySyo7WYYzkmkLGiDWKiYRtkLdNWtQ9edQthCkoH9SvsbjsEpTQ5vR4c7MdGoND4nqSkMzFZseYdiDDYX",
  "key28": "2r7McZexPfv1HfaWrRGYcwjSuEkfbQgeuefFW7air2gGrh8o53YgQnNU2qfJcHSBy1pUrfcNbcLe8xHiPppbJAjv",
  "key29": "GqxPC4fqGu3msfnCbbLUyjJcnwLbKdGaLbEYf6PKJ3zMoHtrNVTao2Ct6Ldwfu7ARz8W6BUz5Yg91aXWGeK9Ejf",
  "key30": "35ATHy2acwmHJbJBQc58s1N2m6rpiRuTtEv3cecPerxTn2QSR6SuyPq91eQXCky8YFfy91kAyeidkzvqQbAsdrVa",
  "key31": "2fCbTY27tNE5z83hdE86HxKg2vMKoTzWw6AuxqhvAESA5PkeLGCMoRcwQp59rHxheidHCd8E5wCgij2TbpTi7Mhf",
  "key32": "67MakP6ZFU7qh4Ysjz9A1AKuH23heRtK5PnMZYGbjmdoimr2woonV9gWTKRNWy5YwyUw5hSw8taUNyw9NRJnnDgE",
  "key33": "3fo4ZKokWHoBS5Srwjgp8GPPffxs4CCT8gJcahEmKdPz5hstuzXYa5H67KUFAqRc5SJgdpdYN6jh79nPaRxWvRZs",
  "key34": "2o2LxoZyJgPqG7F65zipu29cQxU3L4K97jBACnsqWiASSaPeP8q2NcAWhn7uELpJQrCdeFPawJKGhZxje3tYnfHd",
  "key35": "3y9mJyT28UT4D3Q9uRTncwzutYgvMQwM2qgvcJMXUTvcfD1xRoXe3u9bzRHvdtnLoYHpuYVTSZfpCu8CXrw7C45b",
  "key36": "5jcouqzZF3b6iP2UrPTKrNRJWsnQvcG3TLWLPuMy6pwqJGFFetCsrhEndhToz8NaP2ZYeYZxyFZUCeZMT5vB4uoa",
  "key37": "26S5vq5SBHsWLjiiqpZy1Gqo3MfimkLTL556RDd7426sNGwNSTLJbyGYwLw7nm4oBebnMxFRJbqRcBTPS1tpbgAW",
  "key38": "3zEXGNoNFVoJ6T8Av4bhj7jV1NoqvFkvUSD7ta8Y1WXHTBTnWjp3bT76S6oncKrUyg9VG8MVwzWTJZf1aiiMmsqb",
  "key39": "4ThBHiCz2PsFf1g2DgmyniyiucpfnEHieG4eHs7k8pY5WBaphQr14ZYwCQ8QS5Co7RGHE7xBhKRkSXH2x2i68wFa",
  "key40": "5MEvypDTCysekBGGfun5Q37bYJzSKKTY8GXNwtXETCYPfBNpriJ68WGaJZwkHX5mQW4RWVK62FuppiRm7HwnQBxj",
  "key41": "2d8pgy2LZnwB44ACyR553QtgziRaSeHsF1NcQKZkVi4aZnH733NXTcWcLSrHKxHGRybxsB578vNUvoUU9utgUnuA",
  "key42": "2G4c9dSqrjMBXYN3gn17NfnDvo2xkV8Kv1S6EQ8A3FfxDAzZHJ4NWn7wxjtszzM4M5XXypwbvFkrY3mNsag14WYg",
  "key43": "2ZNAPvG73e9CbapE3YtERr7F4RKcAXN7ynYTNKCXpoxNpmn1g4Nq4vvDcXdSE69ggZqABUDcwYss4UD57Gf8ZDpa",
  "key44": "4tfyLRuWRmZeTRNsVRcVaT63MR4KwEwQJJsLf3L8R4bDyN6WTnELDd1R3L36Eu8mjYqpSnQ3poSehTaQRT9cWut5",
  "key45": "21CEqhkh2E5DvFBT1stoXCVj3vfA7wyX2pnSZN7vEvYssGHyFvA7qzBSdU8dMrb5KGVS1JWPGk4igP9n9fZmQEoh",
  "key46": "2jervNXQxd2GvVLV9coKoBtauWt9V3e842WNwVxdC7LU5T7QxbJL1koDLwZrD7c2iPVV6ocNG9b42AQrRsD6pqa9",
  "key47": "LWcMBYmLxXLET5L3fUVamHaWyxhGMD1UcZvCXAFHQcN7ScmdL1iNN1Y4NJD85CdRoFhMmdRmQQP65MNRYadvPUn"
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
