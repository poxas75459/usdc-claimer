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
    "pz7yepQgtX5h7SHFYtXiLUUVJR9PiMSaBxdfumhRU7mijN586xGHmRyahWagGCESoAHBZ3fdoDto7XCvvVn6o7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecWweqMkH9nNnkTgFShXLiLiLDnWWoZcdYx3W1c7u6Rz3yU69NkB7aWAwye4xeerCESXuNaCzoCY7NWWwPLsqnz",
  "key1": "nL25fnnmzXX7RqF8fJBMzwVMKvwzGKn9BzP6P62rJTEvVWgx4MBwE4R5KVxrSjS5QjsxwTAc42HkzKzLBFw8PHX",
  "key2": "2k113uXwRC8UDs3khMQdH5LrsTbZqs8TDNWRhgcVD2vCDLC4dH46w4pc8prwXbsY8dCvwo8v5JyZBhBEivqNmjfn",
  "key3": "enqp5xreVwuhrggh4qLkJvmUmqLcBr6g4usoepWB3uNshkJEKGzYsSN3pbkuujLFH4399Guu46tEafcybjNp6wP",
  "key4": "51w45ixig9X9Ucumj8v7W5jeKV7JJWEckzhNaJDYqCLuCkUhwZHUctt8b2HcpuAUb2gxs8c5z9Y5FvAoKVekM3bt",
  "key5": "4aJEFtMPKWpFJQR6mx4BGT8xMFs8m4c8Wi2L6uajtsi8AK2yszeBg9VeKELPiDSmdryPGxjMfBPm5cxXmkdMrcM9",
  "key6": "SqBfRmziCLp2kU2aubdfgwCpHEYdqiJ2R9Zruo4BGXkc47KxE7kC3ccEYRHVp2RbKHZ91iNUQurdoE22ub3TYmP",
  "key7": "4fFTy9CNDsozXf7hoaqgS24cEU13M4LCXRB8ZDihxCc2G4ruqPXX5Ni9yStLAcdLYk4muHtBwardmyx8vgVKmQPM",
  "key8": "5PqVSURHXdaqrboccHVKHAbiN9HfBmxG3WJD3aMVtGdK5JAD8DMa1ca9roabcrGZSciUdM9MxFfTMTuVh63rVhE5",
  "key9": "4hMA5VuYLVPR7ZVpKjeK64XNkuG3EVrJ6PNx8b8TVZRDGEzsqaT49A4pGps5V6eMcoF4xjoKQG4n1G3FCptHTGtW",
  "key10": "47Bc5WH5JKyy3kyYy8zux8Tq42SYCC5iYqkL5tDHEst82Da94JK8vz3K97Rtr3jHSdekrQLk5Kk8o78Nb1NeXY3a",
  "key11": "3KQKHgME28sM4LJHmMof4kvY5iEWWE331xhvNugMcJhCrsf4C4wWLyBuJpgUvqLVsrV7DkeacotVSzp24P9wT5Rg",
  "key12": "5uMZ8mSn76ioKPKgjneQ53qbLxYocaHQVxetRoFFMbL5XbctNU6LXQMWMfRSp16DMPQbtPg9a1Z1Ff8Lj1EgkEBr",
  "key13": "3XJXFmodY3WkPg1WX3c1FY75u3orqzV3ASqmGRRVffydXPKtzE39ooTiQpXjBhWFk9jXkHpMmpD1uq8FR6GTvt9p",
  "key14": "4N8PcmB2ZMyad2N6GsNLmThG82jZfV5XtxjPa5Rd5BSRthhxU1TF3qmDMGU9eAAnAwm68ep7zGGJkwqGieYZQQLo",
  "key15": "5Y4HnUrVyMbMWj2v8pZiHSHXYT4ezNyJTZRYSXS7wYPFFSJRu4vY9XSPGHFC8wrVfWSrjWH6iVfezzUZnG2kZesA",
  "key16": "5kSJTMQLVk7YFhzGRw5stDDxFWzGqbLDfmX5PbV9i3DjytJNJmfT3CWwmGKSbhXs5ryBcwoqMa4Vu5DCjrgRdzmG",
  "key17": "2Y3Z8aiz5NbttSYbgYCHs3SaWoPamWfyyxqdcjQFMeP3YTmq1BjEDJkDkrXWZg6AwvSj3fhJkigp4RvQCMmhbQEK",
  "key18": "4Y6WedmqJtAb97kMHbTMjwGVvBPWpX1Nq6YTwfrWVdpV8n9simXQWy8SCMyrikQDn5BYYM6o7nyNDnhadiWeTbHg",
  "key19": "Xk4TP7jKUzS6R8ptsREDtQiDWHxg833W5T2SS6tkKHUeBVWJc1GSiqnbn4QQ387PnwCX5GReXTQyjjfLGPhp5KT",
  "key20": "59FfTFLAZ4CbgGBLaNHkeyy7u7nPndD73sRCYnTiXFuapttKNuDGn74C3A2rcAevcfZwNrULzHU2vy4sEqXzxjTh",
  "key21": "2P9ENcwBnyvV6uVLQcQPxRxEPh2e1wg8a1Mq8yUbpRiyJhbzW1Put3BNV8DGtc3LQt8t2LbrQ36KYCzd5mgsezFG",
  "key22": "54gQPZw1xWVtMpX81DHgVSoVDKg9SdWsH77EMnKjr5o5Evp4uYA4nsDRu1oci3jDRLuZMC7EJqDypMaZSTCMoeo9",
  "key23": "46iiEA6nYYxhLd9AsU2RVqQ3fU72ijnQbbFt6hL8HJaxbVGKekESzwASYb48swE69UpfLJxz4rcSuFQMRK2qPT42",
  "key24": "53Q6UA2mD7UFR8Kdh3PwW7iyLeGXGi1zF8ELVxWzd2Wn63RXLkmkGwRLiCwpifg7sMdNtcZMYo7vt92cT17axLKC",
  "key25": "vJd1h6wsdrsCLhuJX826YSvnLukMrkm1votkaDGRhYKQxRYGBcvjoHXJ3GvNRN3Zyxvb3DDmH8BomuAwoEQaunA",
  "key26": "rU3fH3bChzLjbU9cbDPy5tPVYpuZyvdck3HBb8zMYhXJHt3xPmuYNbrjGqo9S9TDeXAL65Sa5DzTdnTntQYiq6w",
  "key27": "335L5xF3bJRAcqf9h6CFac98FdmwSB5JV3gd2ZdXfF6MSN9qyScVNAzqrVD2uvuXywvryyKkUXnniFrzAHLex6w1",
  "key28": "5VxJ9vkjmUbgYWbECEAxj5A49Lop1Qy1xf2Tc2Xbe8oGTfF6PDW8i376ATpX43aQrhtwNNNRRzVQ4jQMUasVfuWn",
  "key29": "Nzdt5iBWExbddABjcZL8BpN2S5Y7fTr34X6RgxntncsCE5do4maEycaSc7iCPLr5rz22mqqt6N3JbxueMX2nRZp",
  "key30": "18EHtp1u2WT8RoRumqmWWXZGc8dqoh4QSEwdxeRwFgrzqC9G7ZwCVzJCdWs8RLw7EDvxg6aK1UCisb7w2RULKy6",
  "key31": "5oB2qTKA8iPfoZ9PEnx1wLFPApQ5ceLCvmCRwMF9nLb9fYc5cCuq1obveEgsGQikgK2MFmgHtbDmZ7nPsvAQG4Av",
  "key32": "5ZogrZRduRHEFze17L9eJJ3ABqQHRTaxhbU9GNJy6UV4wiYfwh5skb5uvMMHBKDJyRJSmm1nCK6hAn641xyDBExw",
  "key33": "2nrrbSUmU4fxmaeQg5mAyQ6X9JhJ2jxX25aaXNbDpGtCwC6rY9dZG2TXWJ3iaUPiFXzg7Qaohdwmr6dkD585aD8p",
  "key34": "4zYnHpj1Bpp7Qk62ZJHdFM6ctBJnqfdBKKHAETrZfJfFyZmtNoWuXSNigFQfP91VKWjgAzkrbdXG4fjj46S8EmUm",
  "key35": "2UggxharW5fSkHX4eomy7gH5dc2Zb9Wni9urLtNcTZd3z9eyxTirxgPTowbddLGMyK419htuTfrbkmmCrE1LozoZ",
  "key36": "4w3Ybh2JuRUtqoGcWgTvZbwfqnxQqCy8qYt19pUBzEjBXHL7bYbB94k9bA86svZcKVsVxFsdutQ9vj16NtmsJyFG",
  "key37": "2QZyyvMWpeo2iXb7VMmrpCuenMStxcsJG1RSLwrya1oK1J7vEdY9mB9xTSFZHrVi5kJN6KxSscj57QjvrNXJjsHr",
  "key38": "vJXCNHgMsFwZuVvu7VovzGd6trGvcK7jTrFTcyQGSJwZFYhTEyeaC3TZ7remm1ZrKuM8nqrsKQxAACdjiZfxrtc",
  "key39": "64CEc721ZrCCrnb2fdsdhTsx9ZaqokKTH5K4EEsRaqgGaSsmqRNR2wnbKQ5XHPpaPkMyjHUysQoHF98vcohAdrmm",
  "key40": "5P5JSNNNuq7nkpiC14kQaCirpTnUD1iaN8SXMRP8GERyDzHaN92L4naGm3dTtNHRyDPonr4SBry2k3iqVJ43a6og",
  "key41": "2a5dWYtmWxkYzURnsCo13T5dq7QviAR2KuE6YdMAv4Txm7NReXeMZHXuxcGm47YAetDWLRu3MkUfco41DvzLF16o",
  "key42": "qcRQpB8f4hn7hsVnPR3fbSnx6hUDJFud3bvcjhRJV8beVaoCbjrvhLfSgjYCJGzUsf7m4uoweswBKjSm8DXKDH5",
  "key43": "2LANxYGTVkcs47YEnx7hTr48zr7MfxrgFz77sdAjrSBYV1CVkbBK9YsxENkHue4fXaZ5SzJRu9WFbpKTDDBr5Tkt",
  "key44": "4P6ZovY3Ww74JfUugBX9vwUUoj8W4JEyfEec1YQr5ridtRNmrprhT6KP1MPBjyN1eukFF91oLXCb9dtXcnDrYPKi",
  "key45": "2FZZ4QkzaHuQW8WETC7nZmRAEUdWKGS5SotMmR1FpW9UrhcMwASdN9MaLsr5D2VriJuLmfpBN4rc5hxpRs2rRAj3",
  "key46": "5xHa9UgKrr47t9gd4XLtMc6LZLoGac1d1qQyp2tu3y2aKc6HxzgAK9vTPNNsxnHJEM3eP7UCAuF6riPHaKgWuHae"
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
