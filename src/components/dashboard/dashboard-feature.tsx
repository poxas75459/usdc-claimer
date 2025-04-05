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
    "3LxA8JEn9yyYKrp4zCN1tH9cvjyPUPpTd3ddwoNXo87QSw9vFvCmbgxAqZH5QqTLbryGEKh42P1SYP2PEKoN6YgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c11GD6oS6wGC2FoD4x3XuaAjiAQzmJA5cKgQAJXnaZiK7motnEQsnMEnVRgEtrStT7CKc5aVBGFW28xP9Mev1TB",
  "key1": "2Z4AsFmnvm1X3VBdY4Q95Hzp7YpF8v8LxULFoEMg62Bd9FjUbT6zNhjpRonXpXVfUiDXbXhuZ4KF5h4STdneRqkw",
  "key2": "XdxtFTu8Pd7u2QVERotoMAq8WFwmoKgevVLk6Ki3NxGjw4Srv1FzRybAMq5QmnLvtPTMDrmAAZ5ZkQkaHdhfcDL",
  "key3": "43FfZ3UDgLJrYq8kwjNq512HWUioHXBZ629Yk3p848Njn8jQzhCLLU37iDQZDiy1RjSuuVyJpTZx8DsYQ3pkxUTS",
  "key4": "4Dxu4qtYNjztPJ3EPaoZ4vNPS4jknKqAcQWXmejfB4L5JfxpN8mfDjkqZXNBif5N2YZWnfZ1QsffYyhmvWP2hWL4",
  "key5": "nH5BMqXBWrZ1jBZdio9vVhobbDWCVXYAtGqagSDsdW5uSTW1Bh6hiqG3H9PYB5c2xebxMAcfD7BpWFqFiE1V8HA",
  "key6": "2fGBYzzxAoP4273a8dfHBvet34UhbQQ3C8rFtvE6xEGuHYjQzasr4krjmCqSZsHcinkqwE57HFYjtMftVsVPTvb3",
  "key7": "5MrAq7c1gQTUUgNCFXcoKhS8B5oubHQ8HYfWSVEE6xCTvUXDBuNeVSx4B8fQeg2E4JSB3hAs1m9bJ9S99bHy5ffA",
  "key8": "zo8K2k4x75wVKWVHsixBy9RuzwozXpBkiWkfm3SeBEjr9gG3awPAJHoLu5jaFuWthAwpcQXhsjR7rgZtehb4FWQ",
  "key9": "4Wq3PHLYwbwG7AdsNZimQr1DbDiQ3Mi9TNs6N4WcrFQCCqodz4RRPTrN32Fkyoui2d3vba8MXtJX9PcZqyYpPHN4",
  "key10": "2ecVJkse93K2f9UaTPNxNqwLji9a214FZfJHW7JsoHoTSkZbCA3eNWBg4XoyBDdEGcc3F967fG4TS3qXmfiawetk",
  "key11": "63oscEqEwfJu2uryEqHW2CaTKTtxnz5a65ZLkFYfdEEhLUuysFzMf2Bi8FZrky3jeh3ZCR8u6miVzZQPisx1UtAX",
  "key12": "5w8Nx3vLutTyv3YZMT9c7gZHg6URGeefFZYzV1xFA5qsriJEkbWLJQadEgH6pcWCW9uwe2aML1zbkc9NtrPJmTgQ",
  "key13": "4mvMpxSipUvFUZBr4bAzQFox7x7s7FHkQRm5sgpdsygE6afowmrimWSCNUhATvhyxBUXcsRceXtvQ5vGkCK5indm",
  "key14": "2v6FjoAqsdKK4sYaoj2fTc1qbRVkAWajMSDV4wG9dx8KqmQwwJ3Swysoc73Hi7D4cp8f9xPokUbArUpEQ99pNLeh",
  "key15": "3WarP3W9W1nfuordiFD6dHcgddxtCpqwMYvxKusA88mJU1pHDhfH4upvWqyZ5Mj9ekyGksUdLoGwiyRcWaXxYbzd",
  "key16": "5hX98WusVrUUB9KTDRy6sJngctbK6BofM3zLn1KADRb4dmhKGtZiX5Y5Y8YuCybFbe54jfxW9TqSnhjM9kNpWVSc",
  "key17": "669bPBNSEBSToNccVQoj8X9KqXrgLuLjrzqWrVHyG4Z8rTmqRzW5tMJ6yVupnYq7TnYNuZWMQ5bkCpRMqHzQMewT",
  "key18": "e2JpN92ooTg1Nesr7PfyzRKvsEHTLfNT4XhzCYfo8SZQgfYpqMopkGMVNT8M92gzzYeE7zC3Diu1Z8FCd4FTey4",
  "key19": "2r9bJ31Ynz9WVSxqp5T4YwcuT5wYGyyvn9RwnKHqqZppx4PuKDtYWyCJVdDyrhV7F136QZtbZHGEKU7Wbfqgsvr9",
  "key20": "3HhoFKsrmXVTHigrdumcnASLVf9sCY3GLokrh58C5mTiLk1py1y3VA6gSiGXsdu9ShjywtPYAueBtk8maNdpTGEL",
  "key21": "iLwRtex7AK9E9uKSEkAFkiDFFn6wWXAfcV4sGqw7t3CLsNmdXKFRqkgfYzzvpMqAiBkxqALsbTUz62UZ8gWQJ4L",
  "key22": "563UCEh9iDEDZbFjgy81HcUrTeCiv8xJHjB51szytJ8UAAJmRgXhyPSLzooX35mhv3pKUuC1B2s9ee9QMW3cmj4E",
  "key23": "Y2pr9UQcbjqqmarBb2AR69NRDfrfc4Zzk8TtvbntdshMhxrRBPMairPrqsyzKTSQnpd2qhd3usJ8Z46ideuRW3h",
  "key24": "2UjRcnhkqYhJK8zqC7rngyrigMoR8g8a2daEUoHMrDxiTiJbvrZCz57rFAsrD2j6umMtZdXC2X5LZ56PcwdZcJ6K",
  "key25": "4qCTFdpEuop5pMc39kekLtu5M4R529AH9HUeN2PA85N5AeNKiJ9TZkTi5z3spbfCTarrLrReHaa2jxfbqucXcFER",
  "key26": "VGQKRGoiwYFZobpicprQ6V262xdxfwYXFDQy3F3sN3SbGGHyiRAzUC3w2PmR9BUtNW4PXtRawFX1s5xkw3Mhybf",
  "key27": "2nB9fJFaiKmByGvXdoRAQSQgxJmPa7miLbFQSpe368MDUFNtNQd3WPqTAP4BZbsobBx5sGAAgJk51rKNLUbytJGC",
  "key28": "4t1hQW2Fh7J9md6YbrzpTq1MAk5qJ4VytpCtbyJPwqk3XZD3dBHR7KDBAsxJGdMTU3fgSjtwpt9mfRxPsjouqZvM",
  "key29": "3v3M5t2WrUv2zra7roFuYVorqLHtxTVS8JpMxgYXJPwMdK1sm1rHqDkiWKhiDKTezL7FwLmuTKRSBczst8FoKegY",
  "key30": "3vVrCuVhTjA4nWCa5aqDMU4A6oVb5SCYrDNJLUSyV3dcyEaSVgMUrwUDNmdiXM4HwEBRCaoGcsAbF8G3XWnR8eps",
  "key31": "4xVmiN5S7D1ZXwYkJJVgeFCDngcLD3sRm846s7kd7i9aLqBruSdV5gJAdF3f16nibYwxtSjYKAK2QhSLASyMweCH",
  "key32": "4tuRzkCd6tCnUydLk6whJz48DYqFAMCfC96BYQqxGaf8Eck44P3Sbyz55ywhbm9GNq7v33kChyPc9srNf1eZAyPq",
  "key33": "5dsgzYEJ8H8b94HkYE9yipfhoXmjjDConuNJqnRmgv7fJx4TGRjxVXe95wvfSKgdw8XsPXYATBh4NzEghEX9xQfT",
  "key34": "3Ddnuz4c3djhtVvmv5FmjdzbxjCsnbW9Wt8wwVu55dpa9kZEW2YFa7aaYoaeQjBuGcpnmFicd4twKMc2LdKZAuwR",
  "key35": "4okJHs1f7jFVzjaV9qCnj6DbcwHUt3gkcPwBkPGMoJpRyP3dGDkwT8HnVgZiDTWKHFurYgxGWnPPAGaD6f4efgBi",
  "key36": "3ZFZgxZ3HVaHF2tNCj4wbj7SMspLanVN2wjauLLJYgaVScy3VKCVbi89Sj8pBXr3YAQCgvxr7WTg2osF3o5z82P7",
  "key37": "wKWV6sLTY1Dv1fm451wnSHfQT5qc3SJEC3Y5BKfop3UE4f5L6954ZxEeR8QNT5QwTdsTsaqvfSPnhAWCfgoFrJR",
  "key38": "LKh5L5fUF2EuDMwAPsBq2zpnoB6hjN63JrAECaHBBjWuhYojKqQ6yGfroyZbTrNix2DpziRGe7dMH1NBbjWL99e",
  "key39": "51Df98sqy8koiMPW9vGSu1RbS5cGbq3D4ogrFDpgGBiFhVYohecMN5BrEebcYDJoG8n3sCqtMiefGpQ4ZVW8UJm5",
  "key40": "5fs6Wuiwf9U7NEMuTRY283zJGk7Hg9qCXj7uRFCuQhxzgJXqCUZMb87GLw354rZZ7xsQUP5y9PfH8AyNfjX7fH5k",
  "key41": "3DPD9dDoKAZ39WHeX17ed6scnaz7Wdn4fvDL4FPE1vam5ejCS8tuDY7WzCGzcRWEyg3mwGHCaz3vwehCvrMCUwYr",
  "key42": "fwGmo267GZTNq6TdjaL45hxGNv5avQUdAZoj74VqSYNCng8og5EAzEs83viWXiEAgKSg6RCpZVrNexqBqHZBdV1",
  "key43": "SttbQtrbpjoAP3HA3PeKs3qwMXEmmes8BConP4DjaZdpVwAfnipNQKBtGTC51E5Fn1qsiRK51oQUwjKjXQGdMe9",
  "key44": "W9mgDK9RimZNKm6avJzR4yCK36rpXJA2SmNf5x1npNSPfLZx1Nwovn8Vg9MoR2UAad8Sv7Z3GNfYhKJrKt1sq4F",
  "key45": "HWkLdcZegKhujAaYBv3YfhS3fP1cZeeyPXjiaf314YQxCsUSeLHzxVzRJSPoNWZwQQKPZ43N7wnYyUo3tFDbQZq",
  "key46": "3sV48kw61dzxXNBQNsKt3qHo3roipU8CiWRSh6ZjVcsefe79Sicd2gfqpKJL3y4yzVNFVv7a5oa3xjearvdtJ7wq",
  "key47": "4ENVjrHEudNwFc1MRkwkYiaNPasWWSKaYJu1LtCefN9K94AGn3T9NwkAwoNh2Fa9s5DZhjFgbuP6LAzd878hhvXt",
  "key48": "31ENCxSbrrXX4XMx4EeFJib3uudzAefRy8yUs1SyktSQ2pv6yY5xKhqKQrFiPj1cTmJJZgzXPgDVNKc7phB6iVMw",
  "key49": "pahopgsJY4Mysj9KVJN8B6L85rzUqg3V9i8qiatrYbZ32djiptWhkkWgEgVpWP5idLyZCD3CkGzVveqrfVKEgXg"
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
