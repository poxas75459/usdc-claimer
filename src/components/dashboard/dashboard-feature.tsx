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
    "z5zex1mZFSrUJQd21JfNAvSHZi7EisAFBDehcMkfACuXMZno1dFMuMdJfqPvbx9PN8cJfCccBF2uF6SADyh3Bwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5St4XRs66BvZQx4vZmi6QPxM3zJ15FBPF619C2MWsczgNfgsHiq9SARzjN1D5NJqbkWydHNT4WvpiGUobbDngYcK",
  "key1": "3STrD2d2HJQjNgfuVYr8LE5U8RvGHvY1hrfxWvD1T8Z3MvPkARSLLboYjM6r8ab4Se9mBNAHfHHZyHt5ZxwGY9kA",
  "key2": "4edgC9bjHepsaAUFvWruuWrftfUQkV6939bt16pGhpi7GB2qdU9dtq2jbo9AVytbhteTzKLQga7AKcRtgTiB7YDS",
  "key3": "5ke9HA5YxskJXQzsWyTHVxvP9jy1y6tqNEn4VPz9rjKzZJn71EQqwWyn2GRC9Dn6rYww2qoPkjokVuo7mKsvmaQa",
  "key4": "2c5BXTMhhRxycuZ8fpAyp4GqkyVNG8nkqv7BRo8F33zjGRr6T36L1fh6CCLgvMqjHQqMf9yCE8Xzcko8jpgmhbmy",
  "key5": "3W3RZwrY7xQoowr9SxNgocK8hai6syfdjFvjetBEU8ZjodT5c1TvqDQVyguX98VQgRnLokxYXTrAfTkdsAPm7dS5",
  "key6": "p3Jm8kncL7bxi8Jc2FzbATQdHujy1gV4WvhdggS8wx4r8AY3rak18dqW89njwUBnxAerDAtA73jgHCdKvyj2KSp",
  "key7": "ojDhmxuLwJouiF4FpichAWhZQD7czwdMbYzgWftZfiXRMUTaoNCLq1Y9DVQaUb3HnMzMeeh3vwaXPh9dT6ndwfJ",
  "key8": "4jCgcpnyWvJBiGFeXaxUxEnkuF4vdtukZUNcS3PmTXhjSPfA755AX6bumKns2myH3dj2scCQ9qnvrAwqB7436Kew",
  "key9": "3QpiiijFhQ3GS71s14VshGwKjfSJDfE2UHGA4m5ocBqroJgygEZ9ceYHsaAh2EPzY3yDsfxT7s7dRQY3jPm1KTr6",
  "key10": "3kWG3w5GwSsqofwosyFCXh1BmwPtU612HY4r9B8enSDTJ1uyQT3Xq69CmDFevMMVDMYteWxUFnNBU9LwAX8oHHNb",
  "key11": "5YEsn1WzuhKRVaUjwW4eGQrhTNU9kdjYXpmfDfGR7CmKjA5SwvYPrvUB6DSizLkszXnMMQFbEZbRXV4u94h34Dkq",
  "key12": "2kyqJxuaGRccdqpgrE8HXFzHRh7xomiSUELhGW4g3K7b3w42EbbSubxXE8tj3qAw9ggQbHNR57WsLDstCHS7qoWG",
  "key13": "4eXi35VAaeU6nFFud2UnGFV33Ayfqxh5ziqVmTtANjvvnbw1tUMA5NBmKz2tKHr3DipDyaZQCxQTGgwfAM5EZ9pg",
  "key14": "2GthcZNi7BuRjh2G9p22iGPanRBYoD1DeynNq2KQZPhpPZc7BKTKLH4WGgxt1TtNFwCSSnZomUufXPYe93QCenN6",
  "key15": "4k3VFcEWdYghvRLpeLv8wkh5EJ3jYxwVNR945JJAbbUZJ8vsM2EyyYBLq73RkyaZC9yTMCZZ91FuDe7A9FqkXb55",
  "key16": "4HA96x17qHSJrSmyimff3Y8oitjxxgJsjRnZ9xwTSTVuuegCWvuy5dBf8n5pNLBuwHsfuowgDzGt61CCaTqBWDWM",
  "key17": "3Tx9APnrTnRnhqPR7Z68Wc8qntHizAPFFKj42jHkivP2cgEC3TPBYfeAUDQAELnkKdAxNnW74xVQRMHJTXCGNGN1",
  "key18": "2BBAhQXAiGJjZFKKsYnh4Nx15NPDESZgZWvmZvcUrURnDTKNv9pDCewrHL39TGXpHYExEc7ePfiHhYe77SYd7o5C",
  "key19": "5gSEVTZbdggcu4ZwaA3VEp6bpwsmB3toHAatMrqKv7dk1HSbPTmgrMM8aSEjz5gnCRSsDfuXrEquomagZ4iHPvsK",
  "key20": "LCfz8ZaZDRUdPcco53Nx6Hh2k8ZuH36giU8r5KpN2mvHoX51pqajrv4DTMaUYewtd9kVSsvWnRbmoz5TYzdj63o",
  "key21": "4HnpyAdg1ax5nMzT6wMyZEZuNfXHs8YL4Gjx1KgNcXvU1qnaBW3jgaNawRrQ3x5ohBgRfkLRoFC629r4QTCFGVsf",
  "key22": "4oZhr4DYj9BQdGzC5wFwtAQukCYp1n7PXMmbQ5N4rYAp4PbgVjLami5zwR6J7LgbXui9yQ3DK2w4t2UQLjSzCaA9",
  "key23": "2C52A7riyNx1L6maFnEZmUDRRzbPaSk3AazfdDgSnZWnCcPduPfw9Q5vBAYRKKD5CoqHjC5ntNxzwp1xHkDGiGrM",
  "key24": "4awfHxCzENcYEvWBvHjXZ1rjPVSiAn1ENCZ7XyivDTQ2z52AHcoqqYQKYAYDSDdSLNbUtdBc6buCgPKfLGQiTT4h",
  "key25": "4rTSWQBoJ6LWjm8KrBpXojUwzoWhCTq4CiZXQERjgRSfGpBoKUZttN7dHjcWgrW3HQrdhqvVeBXHyihoCJkcoJcE",
  "key26": "5A24cCVALAgima5kVWVRTvAQroAt59HaY1cUTogj7xSF36HbydqH1jhPHyTRhZ4Z86c3jjUJBdfrxXLvECff5HkP",
  "key27": "L1HrYWAd2SDCgBm9UHQMnWnobUCS4frwv4P8igeULtxt81ZPfRNmLnpMyPEHXAW25ykTySYDSYaThgsVX2oZYyK",
  "key28": "3qC43yMdpVUYoXKy684GNCgRFnMrjtwowfReCorycMLJKW1ZsBXPrZkPgB5UoYVE2cYowj1XDN1vK8Ax28v8XNfZ",
  "key29": "YtEbRb3q7LvjAmZee6LAwXH3VRMPyPYp5iG9ymiYmFDcaEbZWhwubgdJmhWTWDynVZXVdMLbTAynNs3w432KG3o",
  "key30": "38QkhiB4Aa7rWUVYrXZzWfBRnfiYg1J5Pmy3ypkXdGxFpLksZkVAqVbqd2ZxqqoF2aGGe8X3HVe87dJCSyEJSYWc",
  "key31": "2m2ogK9Hwkz9JNoX3a6h9uzpLuAA4ExkjZQ7etoCTqN6QQdc6vLHcuNPYE4KgZm7kC7yZtMcR6bxM67o3ufnksXF",
  "key32": "3cr8GG61SdcVT4hDQhQjuKV5Y1zYV1JYgNesRygJNGw2QeLR9otcdJHJpDz5FyE6hEKqNSENozeqNQ3acqjwNo3c",
  "key33": "3KN97p58ebLm3r7tgMTVVbezxr7TrD59v3q87BQEuYRi13cJemFFhZ3D8qjs7pvc43KfoUShZejDZwrwuwCbvysq",
  "key34": "5wKS5xepJU2bfLJHHineAWdkd44xUgnVTr9oMq8B6xxeD3HRoeWwKjjcCuq7xekY2b6dAvFnPeS8u8WodRxRV5PA",
  "key35": "3EVmdeuo9QiVGudPwe2bDGFU2Axah5SCFivCp2MzZ9qtxWhR1cmxxayQj8P1hGP2Ziuo9Thgu6dxeKeXXXXidgvT",
  "key36": "5a3DrmdM9hRFnPx6tkrzMepUpLpyYm2NdzpN5vMMDeJXAzxKr17y9fGsrhhz1ffvmAk5LEynBc7oZj6XXj5fSH37",
  "key37": "X8zJ3yks7zF62opW1spCr2za47pNV6c1NbizpDthE6sPxTp8ZujLFpu2WBWK5cAcQsBpEoz1FV9wrk3kaGU5dFh",
  "key38": "5pChxcevSJqLEzEkx5h5iSyqoJ66rXhJK2kozRekyEqPEKuudBK87ed78YSW6Qh78DcqCmipBzN8mVS2nDkMFfnv",
  "key39": "4N5iPibmz7CiFyeY5HejMFrpHQZQ163o8m2RuWSuFryUQKs6C94gvFcYJ2UtjaQKMG79doe4z4jo8tDJjNJzoFxG",
  "key40": "NVj7yZYdTuR4E213NukWxZibUfYYcCuivVTiJ1tC8mesdfmHP1xrHAXrQq5aWezyxSXLkbbAqpDuGFDyVGhk6an",
  "key41": "Eo9EhAD8KysrxwAAgA35VA6nSh1U7XXrdTH2nN3tVzuwCVijBSdyvrqBmmYq9KK5kBZLCJJCS4W6wUxCsPCZ6tn",
  "key42": "5nCduFMFRAxpkEMu9o4ruzUHybb31w2VVUrHAzvosda7ZUZLyA6aNkzKpyY8yJ9gpJWadyAGuiC9k7MGTKyS4egY",
  "key43": "3itfqzwfptzb22cgYirqAdRXo2h7xDvUSLK3CNQQreVh4oRQSPNY69X97n34kLch9wTmnyHXW85AwdzoCqxJSyR9",
  "key44": "5mkaGVwyhVQLqvRanL7tRq2UbwrZhSH1u78BDTDYvoVTC6oU5R5HBmEFsG6EhwMFWrmcJmS6z8FJpHxBya6xfUGG",
  "key45": "4JFi3ABcCScjp8sL7ctQnqwkDJU2cF2iyS8sHMEET5DauG6zgoLAHYX5W41HMh4TBv6naixJB19G7YSm8aMCtQCc",
  "key46": "4NyYYdQEJgRYmd87U9Dm1TMQ27EYMcsd4vXXCrSZtptt1JUUMPDor7NQctqaQgT9X7uzUPzUa7xCBj6BEKv8KKGj",
  "key47": "2GK4cLWGd5kMvFaep95mcSgRQxwzV1MWPACb128LpRyfYaxLWPXWAYqBJ3R1q4UXKfEL8xj1orC1mX7LiZpcV7CA"
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
