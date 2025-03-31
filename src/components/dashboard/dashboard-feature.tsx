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
    "R5Mvm4hZsS9TTVAkc7Mv7FUjLLPt9q484usVHjMqB4wMAaXEXXUANuGL83DUsvZXmEE2gRgCCs7DhFnXoKv7mGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aGtFjXSAEvnnZW5bdqWxXcJ3b8gVpV9ZFsC8mpCgwTxKCNq26njGCHVCSEiywHqLBXa4WzHsvMvJXZVesWed7y",
  "key1": "2KRjxyBAMvCu9kA4Z6XtJ96YoLZEWxCiXTmTgF3sbRGEVmoKgirU8pBt4hyXoysz9sxE9EZU5MRHPKSJdnTjubAD",
  "key2": "2ovaXwq58TM8kXWqFjn6ThmHb16ySzdCM2smm6F2aVuhMU7z1aFjDyt4nrxuZ5KZ55Z46keSmh9hPzvSSnEmnCHJ",
  "key3": "5ZqZ9oUW3aDsmNfSNe7eATz2DpXXcHKgJ4oLEvsDC6kxDW97XC3ZHa5H9F3xagNHwSJzqJ43LT1En8TgXbTvLgBg",
  "key4": "2k5yDTurrpc6UfxJargoYe7HqpuVf9kqBS348KYmJaDJ7GsXUywn8HZ1Hxzih3puwte62ekk17tbjYN1hDiQ764L",
  "key5": "4txGnvFaoUb7nXf6jhEnvKNC3YHPiiLvHjomYEanvs61VHUMt5Wgm9DnkbBBaY3MWwNaP1vRdigoWSUtqqG4XbYg",
  "key6": "2zQCaPZ6ff867RwuSikMPBTt3X9EAEAReNXGREYEAv5nc9KNZvV5JqQAcmrdkdJKKEx9KzotFtctJCn5HMwQfqJp",
  "key7": "5Z52a9XkyddcB5XKwSvn2qE9Vxpd8jw63ELiyJX4AJRpi51ziBCDRK9ziPF4G8v2zCM4keNYpVChn4N1iA9zfddF",
  "key8": "3tkdDTtSpNjpaRU6UQGjiramBkXZmGS9ocazJQkqK5iqAWdbGF2ygG6CtseeE8n5uTpjQYVbqgsjUPLgt5MtPcHn",
  "key9": "4PXh2cZ22wMrREE1t6jutBka1RABBngsGRNUQdkiCbWt3jd1Sf9dRKJz8GhS7tb9Bd1nryuMCM7jm8v6DEZsowxr",
  "key10": "3k6SroHCuDb1pZfRoEorw2ND7GSbotdfFse2zGqGpeJUiqz5WoD1F4rLYnjvr9mejEWCo7Z1dRKPW3mA3UJ4ZXxh",
  "key11": "3vGkcfjhYLZ7tBPrFg3qrSzwgKqbTBaMZqjNuvbLpSjXM7Xi1kCjoGyiDqFXpau3ubCd15XSuix9GN7WnsQi5wmW",
  "key12": "3Ukd9TE6b19XAdm8f5JeWEUoWJVgRSErAmSznw61D4fH76LuZHVasSxMhgMnqTDByde3Uf5t4ibMZBnAqF2BQjkX",
  "key13": "3F2reFCLDWb8X82WiGG96eYDX8UqqLvhwcA9y5RKdNKd2t7PMVVA9EoTe1hxRjrMcmzcUEacsMPxsUXzNFfrf9Fy",
  "key14": "brvFr8bBNm7eGoMCndTbWbcRRzPavTCcGQ39UwFxw7k4Pzi1Gjm72r3KNKSu1ZPddNBFxh8NQXMcEpEqwBvgFef",
  "key15": "4CMqW6aPXPreKUi1Lj9T3PSwZ5GFHNgW32Hw7DBoK7aQ3efTZXdEDAMEHHaMKCPJRCHair684cgoKPqEr5iKqN67",
  "key16": "3aJYhrufDkDU1mM2grj99gMqqTK1kPiSpyfatHRJKpTG967sAu9exoNWSjnxfvJr2JJuAp4iycP8skhLPHRGFYJg",
  "key17": "dcswjb8t3yoUxrAqgYzfeATof1trhpATH5KMcUpNpKaWTzg9eAHziTW3ZQWDUujUccC1Arf9ob8mYvssbf6JDjb",
  "key18": "2J9o6CVidKgbQzRbwe17KTRm8K57pHfksjczjH8uLEgy9zoiecwDyGMz8U6oR7g5XhqozLHVxnt2YXR1UdPKdoF7",
  "key19": "2PwRqjTNpfWG9gCQJjBDozsmWDnCtmQfhiexWKHo1YiH8KzGfJ9F5UkNad3KAnY8KPX2pr5vNCEBXUHcZS2254Ar",
  "key20": "26wpKJYt3JoJiNMnuDFPkExAGgrq1wnseY836nGPkkmvQjgFTrXhhE9ecwLyJVdgwxvX8RkHB61DjxHrwdnveGGG",
  "key21": "35rtt4iN1iUfZRjq7Ta9ARwghZR7mLFaVmwFUdwnJd6zJDtBNsBSazugRKPYQW9Fqzb369x9MuX617NAnnVb91SC",
  "key22": "2HesJnkc8WjZo9sSpC4ZEZ9qiYxAVcpf3kvbA6n16hUrytpu8v1eLMEvkfPMWTHij8HUSWYoHGBCCjtreVSZKCNb",
  "key23": "41zTGZ7QZtUUKB8X75PjEejjhf9nFuPtw3sNZQYNudSAadraxFZgADG3MTfQmP7pvGDSwGqtNuUy9UXctEDSbPq",
  "key24": "3QZeBFruijK7QU3U5BbWRjjf4NMY36sdLta7u1ciy2VzKWFKvox7fNhFkYNejNmpXayBCMz6tbA95GmS4VBpRDTC",
  "key25": "vpJ3DSrmh7Pr6aAEvrr6wWD2gwDgtomZRik6KNtJrgNoGf4GsJU1VbCaSVSh9nYsqzCH9wG9Cyo8YLa8eUHWPTy",
  "key26": "KwjkeFnpEcCvQHoXcqCCDFmXEfnwpkQE6tYRinqVKGnZ5JvL1iMJzxb66ge3cEKkYMvrQfq6RxNwswEgJiA3bRK",
  "key27": "3s1uXCYnEnmWFvLg1MFwCCLK4nUcf563NVgDgL3hrxV6RX62KZpijhpbxwjmkeWuMAqAj6CNT7MGBG9k4r7GPs9S",
  "key28": "snfNpAvDTmwpuG443ZVhR3QB1YPCqbF7cz7sFPutaQGMFNNaUsqLidPw9S6nsEVJ4khwBxCAFCHBbbFEGgKb22C",
  "key29": "4fDoCnCtPtBYx55VTrLFUMqBRNa66fNkXpyDzSSiBzD6hCkLA9yWXWdyEc1XopBtka8CYKsjVABed2qPS2jzVwJy",
  "key30": "2ah7nSU8Bqx1Pk5y5g2r9PEEq7SQL78fM3cjSkTVoxok2JmVy77en2QANrJMCr3tTSNRjbCD4ARfa4XwbrQfFpjn",
  "key31": "4rLYMZMQxPQEQY3dk81NE6KC4cjTHtCHGtKiRgE9SarohzUwZMJWFecheAauYFdT51cu3D4EgBnFD4uT4VWfXDHV",
  "key32": "2ZVWwDFCigErKtNDySQuxMC77b2Dma1kcYRMDeuBWGiLMwXLSbfQ66WfCkrtf58BqwBfHmrXgeuUrrq5xkKWzQVx",
  "key33": "48W59F6zq27CAjsXp2w8KdmjjhSVfY73RESgsbp8LWRvUKQLMKmLMjZ1dodoi5ronSU4yHPJUXGZ38mzTzexsphk",
  "key34": "4VjCwZh1ax6zmkRcnFqCh6BGoUuv5fcXCavydx7HaMYibMfvEatQHH8NynCgaXR3VZWkdRgsiPkR1cfEXgcEp9Ti",
  "key35": "2eL1y17VJmAQDZu3cwgjtGcS8hiAj344mhyVR2wAEejJiVwFkXjxECyxy2pEdCBVYEVJFegycZ9EgzcE52hACtkr",
  "key36": "2Zs2DKytbfiFvx4c2C6HU9gNoB3z833U5YEXaqjUK5wMi3kz7FPyx3MS2jnjxs3g1mwGPjBTQ83KFaPKGvTp8rDP",
  "key37": "h5XZ4xdW7XEEXZZjGTjPVh29HTwRWbnuFLTxosocuMchZKG3zUKNoBKJPR7kDRPecKx3dgmiw8wBuX2qEf4N2hS",
  "key38": "5mWAoYfg7Fh581JnvFpXhWYqjYcdwEKKM6KMd515xqi5FEjd9CC6wiek2bKdGsrMvayGYKZRRBsrcexFL9qXHCt5",
  "key39": "4iHvFp9bjtCVjVMmDHu84HsnAsctkp7U1Cdw6apbQuu15Enxh35nXJ7nEqZoKcJUS8Kq18wuac3S5voho7HQSwQj",
  "key40": "62j7YtGgdzFiYFa9i2GpnSuhuRj1AymzFxLkAg1oiPbsMyWXuthcbzYbTM6Jnagnm6EMn8R4PeqnPJg5ifnA84TC",
  "key41": "21DpLZseDvMUUbsoTEoEBWf9VdX7SKkm4zE8etMzDpwBUYxTZJVk3jZJoWD5UXm6GDvJyDpgRMeQtkETXGqBPAo8",
  "key42": "4dXJqjfyvUNRg7aySD6VxJaG7BHWYMAshHwXRzsgnMP1PRvqvFqMuXxoeSg7sHeG5iUJ8nPSVvEgujuYXc3m9ddN",
  "key43": "9yXERdECDjT9UDK9BusA1V2EXb1CqsQwZPeR5P659vFYt5yaG55XgLjxuCHsMyuGgVqM8rTaJLPyo1UGfrJVozn",
  "key44": "2d6iA6mLg8YSGb9H6qbgnPuvs48bC7F9dF2KdpvLbpDEgKakAsTmQ9e67cyjnLexbrTAhKD26jMeR53urwtoD1NW",
  "key45": "2Gt1EVxhHGaKftdMjzH4xdhMVzMmys3sR9mwMemSRZ3NQLWrQdAr5Bh8zNgxYLFTZKwF6jCTo6vwxh4zczRsLpVR",
  "key46": "Fq3c18kJmKQBxA9aggoSzGfWALdu6D6AwYjVLyL1iSRKn57HkrfDpbfGeEEpdgvKNM7wLCjUkf8PWB2RXjs1VNt",
  "key47": "2E3pfi6PYA6iwMZGcGx8NuJLw9jgUWBqtMcQ4tZrtN6zfWMAWZzgh1z2HVAoVoKu2AqWzAJRDrhEtHqDCjGL2mhW"
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
