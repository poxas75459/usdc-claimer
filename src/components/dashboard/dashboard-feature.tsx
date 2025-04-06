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
    "5Cmfw431CJaZwwCY1CdKB2VqSHu8JwArHxXRTntohNggZyQr2q9vRhKT8WUVuuA9mpRWBz8iDFFApCwNTYepyxeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCvbhb5Fon8UpBq36d9mE6qkqEL5SLJGRErpwnTEtR3j6srY9mauzAqWEBNjnbx5cwb7y8feSURQ1MrXrakELCx",
  "key1": "4XpaAxDiY4nzq8YcooymbW58yqb9GtKkedjkEBd3vRXDjn3tTFGeUrpe9dmbrAYgciN3nV3PLQfCQYB2SufYehkp",
  "key2": "KrtMQDxRSeK1bY6jG2KQXnvbiJfpjvUwWP7er4Z1rZddG6k7i9TFdujibCxeXLU9YaqEp147eT1aSSsY1ycwzhd",
  "key3": "4SWeG1NYWQkV8tLCTn8V8JpYNkvhnkiL5pLmaDac8SQ85p9Q1qUkANYDFsDLUvVzBe4SSmP2absGxoAgc5fdXvQP",
  "key4": "YwLbtVBnkSoYpyV6JacXC4K7UhFa29KrsERhwprcMfJp9HJAWU9ukSiGS1RMZJEvENsTbcu2ZFU7ubneCRBDifg",
  "key5": "z8s21jEf7yQQrckZ7DK2wHXc8b4LNeHs95vqbdXH6Nu6G7KqBsu8m8zoSaBxctk2DgDHkgjqvjidSTVE9d42Azv",
  "key6": "4QdxVnxTe3YNE63M2PFX3ykLafdwsp8yTS3L3hZjHS9rRjr1dP7kMPvzQaxn2EBGk9q9bGg3XDSxyaps14YaZmjE",
  "key7": "gMSs1z6gi9DmAPMWQXzziHE2aNi5s6RpK5EBLRRy2rmiD5SjvURS16NUH7T8f7XEdmuzXQvKbLd1zGFTEwm1qqH",
  "key8": "bxMwd7FK9m37QRk856gMoLC6vWa9WFFhggTWnRpLRLyYkAm2SPV466itoJZKDB36n5z2oShBWr8DWwwikrUSZv9",
  "key9": "44pHop6kpXz2ecykgHvt62FkZ8a2ec4EvcuciBqh1zBt6fRAxv1PEXY3izAF4tE2vWceo55UhiSoPiLErfnEWGHa",
  "key10": "5hDk2MLrbdidXYjTn7zzGiETaRcynAUPcE95PENpJimREQZdeY2hygr8MWa7FiCPvsG8FuPCBqsnxao6s29ZmQvR",
  "key11": "3AxboTnP156qAvAbTaizm3yiHEdYj3Ymy1mrpZxL8YB1cZ7TVdgBr1eWR1UjUcuo9BX8C8RL3yVVHT51o7yoaNig",
  "key12": "j1BPaYh4JvVhYjudkH3GZF7Z3Ndiib2VYTnZFocCggtkqASQTo9n3xJbKT4pTXUXEDa9iG93rtfXaLvNvizzio6",
  "key13": "5Uuaes6zJnHg5wveGG7igeVLoWTo26cv7kURkzS9au8mHo2hnXj2CoxW29TeQQqSWtty6oCbQEi6YtMae3dNsj3R",
  "key14": "5QscGdmRmG8ryUc7cmD2i3LP44tNZ4tpoCVChZoFfxEX5hXtEqxS9zHFfuvAphJdzzwLVm6sXTKnyUUmHKdDyXf7",
  "key15": "2gRTRhMAWgQGDJWpLBpJRbqKUusVScY8zZvXxucykzknkZobee7VjcVZipwUgEjvJCEAZaFUX23inAZhKZWanbHj",
  "key16": "3BvFdLDBcFjL5K4upD7e3ZsZExsSE22cMuPnsEvzHAWwarXa83qmoe1FPjZXvbBsRYdRCqx75gdB52fCfhTnGVAn",
  "key17": "i26U9AGsfu276XPX4WTvTs9HR5tf7S2XecqKgxbYVrruqYqZhSEfvTRSzaor6NWrNDFpBtRaiULyPBRFuFayxF5",
  "key18": "35oKUB9t4yrpSB6WbqgUe7r8FW73NXCZVF8NPzdyytG7BozD6PjtiVEX6fXcKGtcRFBPoHVYjqybCoJZz8tEqnUP",
  "key19": "8CzbW9GzpxUddApzhK2qq9rVwHqwCfdJXj6Sc2F6YuBqDWvxhRjxQN72vomzXqqH8Ubs22whVizAJSGN1JcgeMo",
  "key20": "2PESgbFq5boitpikQsDZRPTEabJggxKDqs5HSRtrfzpVdNaJo3c7eLNNQmPwH6N1kYzDyzVbNE4ysyd4VXy3Fi9n",
  "key21": "3K7qJcBeqr8qZ4FodUa2WHqnNERs9hFxwHrMTRX6UUp9YhNZC97hZiwUEXGXm46EMcueYZ1KWn72v6FY7tSPa3tc",
  "key22": "4jEivwsEJzarAqiG1KQ4mcoVv6i9WWNvgfU8LovdCSPoC5bEvNGzehDRrYViZXKTrxN8gTbQRdWTAWttXES9SRHB",
  "key23": "4oJsDs9roDozYSXUshe7ahSJnAgk249bSc9pJpummnwUxFMubeuxSdLAgLVgJBiBn7yzSRTMVMkMfYfHPVaNKXtV",
  "key24": "4SzA3ccYfmvDynV3z5T5xhtqhwaUx4rEghVtzwV1W4pSy9FrWjMaENrSYXqr1bXhPxWwNSXgwB4AZnwPr3fnFDsR",
  "key25": "2G9ajNYkagEEfFsXovMPY2QtVjNTiCrYt1tLVsmdqLEZw6L78yna6CsPJA25fFTSBxwW9yYLyqgPTENiunqDXSFw",
  "key26": "5QcALqLADfG3smETppJqzq97QGmVhNZytJW8zqxeqChTCAwHZt9HsBbtMmBbKR4pwrEpcKg9rMx649275ykEuBvp",
  "key27": "31Kr3yNqY4Q8fN7rUKb346EwWHvbHeAYhwUKCKi1eXcuD4CucDXRArfdwWkgR4YHH9YcBhZ6vnjmc8sTeZoSBcHF",
  "key28": "3TB2Ry1ruBm9N3SfVFc5c4PA4J8st52yy5p1C4ZfpHZezmrWNZWqbD97xgTgFt57xKC9WNAyZuxUYZxfKQ9jFJEU",
  "key29": "cAs31G3oqgLqq72pxVpAd2D4bpB51ib1GZaY8cLGwtbw1DVVrs6KRJN1bThBM7BXeyiySxpZAggw5RjfEGP1F9v",
  "key30": "qatbrBS8H6myjkZitcfvXwGiS7SZUqW5V4vQzk31Rk9yN2Kce9tAaF4bMz5X3iBLZszRv9CWxti2fdGNkZkeeXM",
  "key31": "3gtNXDWzkK9mtCooftL4585uRn5NzHAaD6UoeeThc2r6WRjntn3fvqLmFqkSR8Kubgd5jVX6DtuD5sdbQWWX9Dta",
  "key32": "4H3p5eq5qJiWe6gEB55tCDhyV3TA8TSz8Nv4CanFTsEaHkJuicUosBm2jx2Hk8pVEFuFkmndyYYe9pbVSnCe7kn8",
  "key33": "2EXqVVGzVx7Rg2YVB4YT35gNQX3RBa6ngJqsRgxMSX24Y6enEuG5GrBifSE3rU1pd4f6X8CNWtBo1Um2Do9evF8Z",
  "key34": "f9YgGyFe4VY4w74ULrmHmoM4J3A6sMutjZVvCm33VNyoRCXJEoPSe9dPpKYhd32ajMvT96BoTjTSaxx33Do2bh9",
  "key35": "5JWzpTEizsbHWPJ16ZHasoNCw7yXuAik1iVhq3DNmLaaiXDtKpCMXji7oTX86dMn8u8JDJLUiicRn6cjPADCG2ok",
  "key36": "43uXvatPR86aJhSg9yPw2MuBwbTBfpM75Dee7e2NCHh9kKE6LtMsUv3yXysfoJSdUNt5ZpQXpRva1cFu1cjbakeo",
  "key37": "XYnFzgAEpkPrJ2hA2JcxnR55nq11XgaYekzJ6P8WxcyWht827bi6tr7ogPPSunpRU9SjosXnrg91bseWRNzQHmY",
  "key38": "5d2wHhUL9xsxwYeMMUpv79JFCsqonHiJw6Ga2u8DMT24ie5ypFmAkjKopLaPiY2nLdEg4LNCpiQpxrV1G6FRmg1v",
  "key39": "5RdokjiLQPTRt38xkoDwXQodRCCLQqZqQ2PvdrnRP1LEiMGG9eczoLedXUXQX5pki22kZyjCJ44NE3X9gcXqXE3C",
  "key40": "35mtoLaqShQxkSPPaY7UFHJAkgpWdvsV88StrYGnTX615G56Gb4KrPFY5XvEn6AyNYTHAAhRB4bPdoM1zUW66MzQ"
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
