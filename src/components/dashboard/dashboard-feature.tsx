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
    "66CxUwgPY9cnJ5CZHg6in4cmDJTkQVopEsJ6dm3hq1ZGN9i8Yyz4ELQ3xLvbBFYMi842ssuYJ9Au9DSjFrCDbmis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZoFfB1mNgYbgY9JcfM62faTqNBA8mswmRDrkcQaDzdKvaTA5NxwzzFQr8R4NNKeRpGk3vkPZjJJmRwtfSaJFWBK",
  "key1": "5B1GrYFxn4hJucZE2YwVWwgoU24bgTfvXA3yNeVbgTJmEE7D6o4sh85MonZEWXZNVbEpX4MBeytCxU1SNjjiHNRH",
  "key2": "58DHZyS4YvRRMmFUMeoc4pDwSiUHjx39VZat6LHU4HKPiob2tN3nGgwimFPVZhQMB5ZLqMCj6gLHBns1Jac9Twx4",
  "key3": "41a7puvX6DM3Y3Z5CdqckqDJw5yNmPUrPzk5PrDxaoFjT7eZoC6VVHS2cgigJDLueEm73MVfcbhsEtFviMH9GwD2",
  "key4": "2k6ZGJmP1E63uaWQso1jN6wYwPx73GXPQ3cg867ARu4uMummj5xpuf8xadZwqeAMhx97YtRiGip7oRdgCQRbLuw1",
  "key5": "25KGJEyhvv4Tdv9DwqsWYQbKcZWc7EVh3urnzHRJTuf54xcNp6cux6jcvR8M66GySpStC2MF1MqTqdgGmi5SFxPu",
  "key6": "3whYXwGVs8383fnQsSXVAxZmjd6yhG6mStJgiSLMfFZPk9VVXgGec3YNVSarzmTG2AH7AE3g8XapfWPgEjTWbgbs",
  "key7": "H2Zz5SPhyLxSsDBXcG6wS1rXL6d5eAomcM3jSwr2Eis6keEwPiRVYm5cr2QjKTAG8v52MgBEKL3ZKSsxTRAbsMd",
  "key8": "37uDju9B7Z5Ni2tAZuRQBbCRNiWMReSPPEbftvcjuo5D8Avom5vgtu4tbZRk7zgE1UJR4JtMhDhKTVCfp6ciarrb",
  "key9": "3bCjEZRvFii27q1sBpkudJL8xB3g367MQ7v13ATMKB7xhaLaPzCcxSakX8twvGRoDeZuw47ZuxuNSRJtFhLimfmh",
  "key10": "6U3xrsZcQ8xvUi8X3HvDWFvrwuEQKaN5BzSjfKPBt26vs3mG4e2zpHjfHwek3NKYMxWq57oVDKxUWiLNJBXfNSv",
  "key11": "gaRvjQT92BviULZ7kLGATyV4UkWHu3hDkaZmcYVENtngZBB4SnepjDznHpZh31pJPBBWxdwWKV6pr9X3ffNo8d3",
  "key12": "2hzzQMX2daZQczf2PktTQjEJGhNigWXb6UbB6fdT4oE7cm3sWAHPSeM4CHd4GxS3mJjf8aphqHM2kDyxr8vPvYGL",
  "key13": "2zn2ZmSx5MDzPpZDwY88pCRzJ6Kf7aaCcFpkUqYWZ9iTR5DQ2qiragt2mpzLBfdx2n5VxMbuZTsGQ5qYjdyZoZnc",
  "key14": "UMi85JWxvMGanYAKqGjQuYAA7f7ygJrcDSy4PaP4zByJWZhHQFQpnKRQMTmJWc7t2JZ1RFG1vnn6xaduo8VLmMF",
  "key15": "4aTh2RwWadVNvGms1DsfXfj2cYf6BnQtVNjXMRxuLayru1c762U6443ABFw6hJ6qeweo8BEQApdshXVds9TqoAWe",
  "key16": "2Z9xj3XafqseRAcZCf6ntdyPVLuSJRextdhwYVRtd9YVw5Mwh6Tom5EpPzc9DbViFJ6KdZS3Rx9ifcEZE8NDGoHQ",
  "key17": "3C4u3LJFf6YsHSNbMhcNyMycmSHYgqAcJ7kvUMeDjGUdtyJV7QA6RsPhqrosbYDWZ27kFYs5wuKwtc6iMhKzeGLn",
  "key18": "5kYG7hYVU98bxXcvZkb22yiVBb5ZkLCkTDhM4H6bYo3gZHWjh8krmtkNEH73NMZekoAsGLQEDPYnv6ATszccVGpc",
  "key19": "5RdKwS8PnrqMxvGc8Viceb5wY6nCsMzhXMktJ6A6sfbJ7wtSAnYKHokmmsTB462k4XBQ9YqcmheaFZnAyaUdQFEn",
  "key20": "CcUCKsJd3wMRa7zwCbdyeHd1hRT6Bkp79qDrSGeTT2TgvdaHzLSkywzdwH7cFxkqtsZsGC3MJPCrXqeg2RivF2q",
  "key21": "4jZHjYSUG18VgPTNqoJYcHm7G8vfeU8ETMeUCsD5JpwKq4V6Q6gP6vv5SD9E4qiYpVgQfj3TsNd1ce4CphrGxhKY",
  "key22": "4EYR33YvMCdHLMubuKNqDCkRBNPgEqBWWU1avLQc1L4iZRi17pfnsW7StfABPoPEmPZWHa9QjAM1CfSi2hJXTqLw",
  "key23": "2tzsnTC8SjRgVjsZsh1pRcD7YtEtkgkYJjnNd6siKCWJqBwCUBWZs8w72qdBi73yJzGcY3fcKAFyEGGuPJZR69nb",
  "key24": "KkyQKMiTBvf8xSmdDcbz55d2UdvCcqyuoiGHmoyDwZtaHpwBiYwAtFczDQaFig1aGQeKgPE3w2bXgGq8a5d4bRk",
  "key25": "5s2J4tBcBcMsK3b9zQ7UPEwDqWKMSHG2JRVwxBAdx3YWVs5p9bDSnW9XsEaCVsSGzDQ4vQbdf6JC6kpNyyhtnuB7",
  "key26": "9dbGqXiQjyovCUqGHXc8nkhcup8Zs9Jf3Jjvmot3nhVBM6gXht7zj4Dh5MFoCiQFLLhw7f886AHoMv9kYAejpUJ",
  "key27": "5AAmv18jrLdqXH8S15UapRiSRmSxy563cPuSaDed4v1fuGE6r6Ncs7fxJ4vPRVqFCpwykoafE7CuYanqYo15FzZJ",
  "key28": "2P7E8NPiSedx9YKin2HmtjM7Z2BwY62F66kJ5x1ov38fAz6mwAWZ3WTYEkQHXaxEJxbCZNpx2KRMSzYhP3CmjgJG",
  "key29": "5zWCz4eGb7TTwYmTYrSPhzJTrAUoXynbKxM5Cs6Kiin9bzWxqQZja7sgSUTuT7RgKZkF9oiVyc6Tr2kNMAmVhvSt",
  "key30": "4GTaa8i1orkW39ptLvm7ZdM7AjkTLGA3H1i4MuQj1HX1if9L15s6FFMKDXP9x4NB6PBmo13gaMPNaxivdhi2Vmoq",
  "key31": "5ahoo3HHzBgVx6VB4zWEufQ2eTXGWAEgx6tHmvsSKudeguCLb7appRAbjtXtoZhxmRDumxKDQAzNeqQJ4B5Bv8kt",
  "key32": "i4gp5pbTp8Lk9Jmhtiyk9DKvd5NmF86KG5YMSnLZBzhK8Hq4tdLP1NEZpjfMifJqQvcoE6wxA73bmpzxNubkjMU",
  "key33": "4ZgSBhues2mD9woCYsAxcGosG6mX8CMxSF9LndJiiKnGMmF96pKgBHQf67XemFQGsHd7jcMW52yY7TcATQ5onGgs",
  "key34": "KH7jEh6YiRytCLpmMCB1sEFgDtabzZAhq4KEuFuW7W9JcgMcjxet5j2DHwacjfsZZYjYeXrGaQJPbmRoBMFumiU",
  "key35": "7RAWkCpd8gyYKh58XF5NH2Amd3Q1BAQKoHrVB27NxNWYk4ea37oYz3kPMVJegGkrHCFonFu2uBi2kS1ixUkXasS",
  "key36": "5JNhWNnebSDDE8WPZtXKFXP42hHe2qb76FmocKMqXSLvFSmcNfYMpRTjE5BZ6HfVjwDndcNNuaf9JjJ5S43URpAn",
  "key37": "4yn6a59FFPDTY1CbcKTMgaM6qabvTr3rA2AnN9BNhr7qbFV9SxWSG54wRSHK1jp1TsWmWaMUUSGABydcj2YmidNd",
  "key38": "eZjdZ7EucubtYWEnXVZ2Kq6dHLKnYZcX3KPC6hyT4T5y5SKVudSysp6rEgR1A5GzYZXPPp4WSC23vuef3hiT4pA",
  "key39": "t45RvqejbWamD6LNHqZ3yr6SomTFbeccpN8r9YzDicGGMvzg8fBNZxr6UXB3XzABabwbvjYmt6Wf6J4acJmvmnn",
  "key40": "UwLFkdEu8R1dkPyAywRVwsAEKHB1FgnPRR8srYHmsBW7iDvpqwrfHVbbMKX6pNN4i5KWmjC6SB5cpwTMNdHKvH9",
  "key41": "3hHckcuV8tWCGBiPdLjvk7JG5kXLaAyDtMcuDva8ivw81BcqBieZhgjXz6HJ9osDzcUCRsB33sf8MVzLSj1jye2P",
  "key42": "31KhTFyJafuQuMsjiUv8hoykrMERnHfS9hPaQjrnutbBUM9hfDBUk768CLMPgkDvsy73VpCeRciZ4TXS1RszYUVJ",
  "key43": "2TJ6XoBWXsciZgCXRCaZCyV552YR4Mjn4EsJ7zKaDRUdPch2cAdGqCyXZ81SooYT2vqXoM2eVSwW7yquTiRiBipd",
  "key44": "2pArrx61VGqfSCd6NgdnjsRYD1vPcPiqrS2FCyc6fr3fW1cZzjfJqanoh1X93Rwth7T8wQNrv1Jay7giLj8eCPCr",
  "key45": "UvCwhmpaBQV8ns2keUpE2iMgwSg4HkVp9AxbWBJqrscfVr24TJRRQaYtuseraGfPZjwUFJ757bCZfQsMtqjE92u",
  "key46": "3G55Eg2j2NpVDiN83VG9a5WHNSzb2KcFup9XC1USTWqaDwFpR4P8RHqpTeq6LMZkz8G6Fdmhgrtq8C6hYqtQmSpR",
  "key47": "4LohXATnqQ96G5qXpxRe8q9c6997zrKR3sthcrbJ33LBkwaxBhmuPcXPj36fft7iUmtj33mbt3R45sJtbkpKKjMz",
  "key48": "D2eMMC7r5mr6CDeHJPAxGiP6AHfg5pQLedtC1GozKTBu9WUtXU4nkzEa33bXLaY2yxTgYHKjh6QF3gCcDXmJWZH",
  "key49": "3x5dLFyeVAjPMasTFUzdScDrgxEkPPduSKcSXuAGJkPnZhxxBbhCW4NH1j5FafvsT89BZAYLTUF2yAFJxiLiVYxr"
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
