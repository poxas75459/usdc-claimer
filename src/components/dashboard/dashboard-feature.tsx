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
    "5dDYhvQaTtth24Pki59r4na8tNp4ytS6aaymt9x43yE2Krggr48FN1ULcAtprhC5YdmXca5nMAsc8ApSLi6Sk7Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49eYWVnEHbiQbDpfESAMRmE5ejBvDsktPf9T2GPfNEC8wL4Mz18upCpnHMe6956J36iaXrYvHV2cuoLbziFZTH6Z",
  "key1": "5zm534HkhDfq99nayiZVM3MwXJWEPLXVQccuAogK9464RkDbNWXUgxJM22hpjs5nuYNZUVGCijdbUuXmD289U94x",
  "key2": "3FVDgpZmMms84mqbw3d4trpyrvksMPyN9v4UKGmjtQbxWW67Lot3EHQCxTvSZcuCLCo3SViZhbwb4XQ4WwSDN6W1",
  "key3": "3vh4H8QgMfPgoYnDHZNEFaP2AxVfv3WuDGcjgQkZA4KJkMMiPnNu4p2T6Y4pQa1DMw6xZBE6WcnDfqTg3rLhijZc",
  "key4": "qQ3KvhZeefBCwgTuhBApbLdH9b3soWZFa3yUWiWySszdWesur6AgsSmpj3P2d3YHNRfWb3FsS9yacJgLrYakZw1",
  "key5": "4kazaJNpWQjuzKxpCBBmctSPCrvHEKQHMERgw1B9x3wX12u5qQwNLPTSUx29rpTFtgboztqE2MasRZc5ZkAS2Q1V",
  "key6": "1rFqxRatYEaRKUoWmfTcfL1aCHEk7sEJwywoKccRC1W7jGMHVEJihbLHwGtuijN6UAGgtQqKyDnWLLRjpNFTesq",
  "key7": "2AkE8tdoh9jdszjgaeuFEkr86mnpSaRvnogsKvW5WDEC3ZWjwDwmC4FdTgALxSmcPbjshEhuqLVxKvNqAgfimPDr",
  "key8": "4v7NFEm5VcxQFzcwGPGndo1B58wyRgm81LazCVNdRYHA3iY2Nh2jwosZrDYrmVu3qfbap7RVoauFHoVSWCToSzvo",
  "key9": "2bAp4ZwH2brYVTrrtsNUMRE7H9vigSK7NirBs1SuqHaFrcogUkAH6RwgNo2zn8QiqhE35iY4yZhqfbC5VJyCQQfR",
  "key10": "xjTiQZJcWpcgnNT3DtM989RGZZHmpzvW916fRrZ4ao45tdXssv3oekQwRZjSyR4zTYtmB9ZvTduhbrFgGyc9qPt",
  "key11": "LBx7ra2xT5mMAaZnEzznjAFzP5rxqYBuToT4E9tQAbdM1CnVoRpBHXTVvEb75P3WGNMLvBVsaarw4JLsmRDkHkW",
  "key12": "5U7q6Kt9qsdzAX2XWimd8xypvxfJMUkokM4Eq8GezetEQRp417J1Rfx6qsJk5eKvm5xsAewWiPMtAg2FhdMwioac",
  "key13": "2v5mnj7jhYrofBx16hxmcfBX5XVqrMZJgaQUk8n5gBfABrv9TAZBURAEC4sxR2g7v4DmPDNrVWwLiSMVta5EJC6x",
  "key14": "3SmhAiCVB4P5x365Q4ncebpU6zh4K2P4KYv5cwDSVMftzSauyh57vhU77ASA8YpH4yeyLdLZ2WMY93o9pzv3Zj3g",
  "key15": "2AyEGMeBCoCxByab5ERU5RtcRdd5j9u4LyhJULZddGXRvPUrpyUVyJvAeHweANJQX5xGjt3KhexrsyjSWDb96Zsa",
  "key16": "g7MmTJX9t7pm5HLswNPa4mAQw6X7vCgbRNftDDCEFyeX3AZAfVHZfc9ui8JAkzKX61m3KSP4Bi9q1tEtQQJcLpw",
  "key17": "21pwL7nyGhqYwhefTe583tBrJHRpDzRb1GmABsKmF5DsFPwHNDtkFktWGEtFuzqSJhx3qUn8Y9x8GX6qSsd9g8oT",
  "key18": "5n86eqDE1MmiGUY7eSDuRjbZUZyg1QdiPUfcZYvWLtyiWuaXo6Ryy6FmUpMMLdz6tGDvokP3Xerkv4jAmMmBpQdT",
  "key19": "4oMvELkhHrjvfdPjBQvPHZ8piPMWMFxFfQc2T6oJwfnDtRheBpVgoYJqA9q4FFyhVK7zYaUxnopJBTJ7SRAZuNtf",
  "key20": "2tmTsiBgGnpR3DbZnCYj8vXn6PU5Xb2RnDyrBRvgcVqRfBpNmQkaPW1SdJ4MwbGKrCG6g4kZxwCLWpv4KCwmwViv",
  "key21": "52dNXwno2VmN47nZYDsaiQGrQBKkDRMtd5jXpodJCAFum7DE8KWGeK1NCs9ijxd3XP739534Uj39WaCcPrtAxncG",
  "key22": "3dfy37tnqqXYokbbfazv6s1DbCPvjEiq4RX4ydxhrgS6eGHEccEj2Q1qohEXNGY4ernVHigBoyLPF2Sdpamik52d",
  "key23": "5puDX3cMYza8CTwFoEmEe2mnZpPn9gFi8qYHFKqA2vNxECxLUzwoaJerkQANJpcehRjhoUFyY2Ues4u8aqwymETi",
  "key24": "qU3wwaHJoVfFLkCcBkK9YL4CSRwSE9fScfbKNqhrcTnd9yezWd2NkNCFNZJbQ9vRMC9ynz2EM7rsphVt4EtvYF5",
  "key25": "29WpRnJLHcC3jkcJb9qa1Jn6rkbP72MtW5teQdQCTb6gaJWG94jMaQzCigrumaR2rG7gfc7dwTPC1q4cwGgWUYbu",
  "key26": "5AwwyrEAwm8rwKoNwYyK2SpMXgxFq3j8aeZ2LNka3gTnSj9JAVBLnGi4ShUuQHLZfMPD5WBAPT39jerZtAD9AzQp",
  "key27": "3JnFi1ieLYFV27BMPAUpzWEBtDHy7cDCNC2fA5o19ZR5NmQWXP8XoL2taSt4jEbMRVfP35emzfZzgbeAbFCP4Vx8",
  "key28": "omaE9J1g5Xp5Kwfn4jD3tev28emSe4Kf5DwLpyFd6K7UFUhXJ9MNN162RKV4GCHV4pmDLQkpmXKTTmukFxTuSr1",
  "key29": "2Y9tZrjW6WU9VJpYm5sWnKewNeirmgc42z8trQK1udr7Z7VnVt9CpxtBodtKTgLRp5MeiuqbGg9tEMxgHy2qamhY",
  "key30": "25vLWf6ifHhh4vvUfj47joCheWGFiPcwJGeTJfxXhdXTRK8ztNtBDVfuEP1UrpXGx7QJwKpBi8a8kQQ1P2ku1cmk",
  "key31": "4KHhP6jFJ3uModLLcmFqhWWUYU5jZZeXbdoPbjCxRjGEGM8h3cXnGYnDsXh3tH5N4WEE533fgRSiFLV6R7kMdNwW",
  "key32": "3Fa5CWRatNVfTyHfiWGKs5UAWozEgChDV3uRisfQBJHyCkLZ57eaH4CgfqB28tPsKJPJFkQ6o6FcmwedgTD6FmME",
  "key33": "4P6cyYKG7syWMBBhcMCf2oHjew9xnuEMnCXYYBmrSQztwqX8AXegzZyFJ63G3dsWChyUvsbKD6EJjupuWVuHZe5e",
  "key34": "4LJRc8MMyWqwQYWfinakEMEaFfABWiymSuUcA3sJJeaAn7XmftuEC34KWkoaY121Ngybaj1KnvunyDNy8qcR7vVx",
  "key35": "4UDUcoeMERm9wpNRwAF2D6GkqrbsxCcKmw93ozFeqXwF77pPFCJKjKH6Sd7G1qssYkb5eacPm5TNHvgu4Lzmtu9H",
  "key36": "32g7tr3S5szwKsomj3ymnMY7UdFsUU7VftG2ue5pRuzeA2HaZ78LsvhPUQV8pKd4FubT3b4rbkC4qvfsxbwEtCRz",
  "key37": "5Y5dPhfehmcecDb6b6jQEUh2EqJcckdut6B17zDLMWakyxfqim8nct1bHEVrbCxfioY29c76XDuPYE9VvpdfRnUy",
  "key38": "2K5euLmFMZe8RExE2hwpuZhcyd7419ExEWdQjvhyx9UduDCUoDNsPT5WRSjSJkjbsg2U5J3vcoqytp78F89Mepck",
  "key39": "2tBuo2sdxeDDzi5Av4eK9FhN4g1pHXSBK2rCjjVtgaHsjkjwZUpbeTwDw4eNX5qBb3Yeiza3dk5myKDVwEYoaQGR",
  "key40": "3t4DWEpa3WiMRXzAgVb8cP6qFcQG7oCce6GDJ2BDMxCmEV8hgeNmxe43AvxZbrn31DbY21JgobXfVHCgEirELzXa",
  "key41": "rFGQLUbXBr2AspdHac86Ht9UUvx3bkxzFhHNyur9LRmZXPssYuAJqNXcWwEN4TkDfmANAMvobPXmpqTDYx47gmc",
  "key42": "2L6biUU21HgZ1H8EvahuKmvLMEyA42vTD1WMT5ggrFskRJhuejRnrHiL5mR8dzPG3QAYo8FWPBdk53gP1BNRyoRd",
  "key43": "46xxkEdLdZi9AeNAno4QCFLDHCyKhv11RxxCFD9WKL39ixqrzQa2DPdS5wMxoduQSUBWiYooYUY9UAghPrKiwyjG",
  "key44": "351TWFHTbZFwGuXrFC87Xsp8rQkHDm5UK1e5hSZHJTDu4Xejya7RZrBGHum2g28nuTXcZ1Dw2ZGhQL5TmQJPUpRY",
  "key45": "3LNwvoSccTPQgaQSiJAaDLcTekobaGZPTQQ11gReabAdPbtRvpdKhzdavfx1kXwt1311DuYHroiAp4WjtScAPQcE",
  "key46": "2aGD8gZ5YAMt5k4iXwHwhM5Hw5baFeA61SMpA2T37r6oifK1gvqFxCbPNGWyFMNy1jvhdTdyUpVZU9v1xWpqNHEh",
  "key47": "xK4dJUEnxnfdiw1cKBEr6skVs7DwURtLSpJGgNnuyd21yLpaAzvXTKxwQ33A8zGxuZfkgXNjksWL23Wx6UuJEW4",
  "key48": "2UcUgevd5s7T6Mh776jBSc2Zf4pTYmaXmBLqtW8TGHvZosJAbEooqmxRAyJicibHDHMg8unRMQzcBLtjzyEUVs3t",
  "key49": "1dKcnbj1fSFMMZCE3sB1CDMt5waP4hVciaDHWRQuBh1pcrAm5KKNE6SqjgPpPiwD6fK9kM376G2WenNbtUtDPwy"
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
