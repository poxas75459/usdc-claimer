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
    "5L5q9TzSmB6Cp9hvCssYs4EczG1cRhSRZUtB2W9VnCaW3Pf3oK28aQ7TysWpThv6XPxjH3LDMyNBgDidxhApCcWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZnXZLEBgirarSU2FdfAoxG3CdK9SmLXz9T8bHYJkbKkjDPGS2Ypqj23zs5qMaBDBFTkoo1CXAkCEWphfUUV67N4",
  "key1": "61Z9f8uVvCwAasjR5LJ5tarf8yuJXPGHHoKuf29XASqdjoQZfcjDLzrkTxwfnEbEW2hRxCL3aZCkRA2PLwoaM2Za",
  "key2": "4z2ewwRxdqALc92yZewEJ39VPatKK7ZeneyqxxyzwmvoPdq752HUiVSsbAA2Exo7NN94TyioquruP49s4opzHujK",
  "key3": "CJu1hkQqC4rSxTwhQMgzUmUTAdYmj6H1maLUrGan6dfeyeUqeGja862RoUgKt4zZMWEvTpN57K9ewLUGoMCNYX2",
  "key4": "uG5BcUDbbXz3jsyEuR6YZ9AuL5rPNcBgMEYf4x11WHRMAyBrVAwd6aNfhVz4RsyyikP9NT6PkhGympZS8RRYctc",
  "key5": "5h5Zpd9Atr8MYQzi3Ka2Z914mLFJEF7sZ9ehLgihQzVHfVajtbjpUUo7T1dc18Ps2e7GY7xjCSnPHzFDFdQUHMKg",
  "key6": "2QTPTXCheCX9vdgYE8zUW6Gew3hyJxd9oeBASR1dXfB9oSYXQJsHf33jcvPXYbtMrM6eSZQCMzUUDbK3Ycz7t6ae",
  "key7": "4wktQ5KQMEutipxm4QocND994Vj9mtNNcsXys35CTe84Qz4FKGR1Uk88PXXwxBN6iLuU93N8xd7UzyUB6GkW15YP",
  "key8": "4RE9cddM7H3whq1CDDrMZQ7cmgUMMG5ppRpiiERpUqHZJQXifXgkRhwtULmTWj1CXUEWkKvHhP65jRJJ3gtPeud7",
  "key9": "28C7jxiQUAwZYQbLkUGVP9KR6gvQf92RvcqQdmnitSX3nSvft8VJTPjWYNtnLjHWQk8AjygXag9AAjrBjyz4Kawo",
  "key10": "2Gr69jxUHS9N2v5L54ndoKoXTB8wHJtSfEY7SJhNLwAgYRwqLNQmzaaNVm44wxnNhnfnRwXYxF363h5VSpJEzzds",
  "key11": "2PFMTmAYnWQdp3TFA8gj51mP2a6NjXpu9tgWM2fgDpYtHNAsLqjPHkxHhKuHEVZLuABjrdv5UMR1d6KkXuCUkdHd",
  "key12": "51VX4LCVbdNCREvrkT59UNJ4Mi7qm2kT86yqn3efVoEcP51EcCLo5NHQZnEU98dVHNSPCY76jJTZGC3gJdC4agAY",
  "key13": "4ewTZay1VvASatKmZL4uXoReb8yYDZP6UMb1xDnLwyQEf4RgXfuDP8YjmYY4t3Mi1HGsr7MrmLEWSQSHSyYV6BYR",
  "key14": "645i478RLi7deByzVvZ6gxEfP6mgsoNkTh2wKQUksmQNAvUgLYJvtC9StB2i9jeGHzfxAisfpugE4yh4KKCo4273",
  "key15": "5du2LDiftEQyejzeUHmNKwLrkcUtQiZGsUoBjPzTC8UeJCjRr1ihEaFLTja17SmWWZ43jHLiUBuUwhxZZPB3YBjH",
  "key16": "29AwJDNoKEFTZyEsRRHE1AnDeEGJEeK9P7KtQn614E6ZKbd3vyKX8VtZCbrC8jzgRiVZ71SoPp5kgJTMwo2DniUR",
  "key17": "3UhSwiSu7z7gKJU9Cs6ye7KxEq3YAh8bsvv3vpweqMromZzhZ87Mo4sB9SzoRVgYJZVGcb8mcTuTFnPonpUuPvJ2",
  "key18": "2WNB5DAtwd11N811TjVKLza18yjts8voPc6H5JgG6FYY25rFrUkEe6DLTxHT7huTpY2cCtS9mX1o28749Y1B9ktQ",
  "key19": "XfWhRfoG9FdA9jYKddm7SMBrptHFnH11tNG8pVLKkyBDgN2DRKmciMDzBkC49qCN2xC2KjX6smjNXCy41B5MSDg",
  "key20": "49srdPGd3aUzwMLo48bWMcmW4MchUPxARciCpUWDJ18tUNJfyattMBaS3MksyxcwrqvxnWCBgGGW71gpdAkwj9NZ",
  "key21": "554rHt71CMsisJ9GJ6DGSGVFZhcSKx6zhQ65RPii7n2ow8x9mCfv1PxexaXVW6EkmDY9PiY69nXwZfaZKPXYyeU5",
  "key22": "2wG6vSUocdrimzNjKxArQSW7aEC2VEzL6EqhB1pmibrr6hBBxN8hYX2FqPm3YrtzesPUSPZUv4pSQei8NsbKhRMY",
  "key23": "3RL9UHwCipH5eqq6QGbuVxH5jvqsmeUvzUxLDd2jF9Z71oYtv5wC93GN1aAdkWToo1rkfeRmC4D7DwQx8F8P5jGS",
  "key24": "FPXAV6XME73mLyoTZEizkX295gnrbH4Pi9KEnwLLHwf8vAdqYqdmJTMPyuSLoMy726qf35JUm8uwxtqqkuGCy3f",
  "key25": "4tDeDs5s2Uh6Zg5RG3FrnvcgLNbeF9QwCoc6NLFG1z6Q1kUAVjRmzQNp2pj6WBsseBjPQUsdacq4R5597ci5CwB6",
  "key26": "5S4uav5KfNd1o5Ci4yZ2KoPAntxcPPndmtgv8nhCBPc7ykprdwLqQ59FGpWj7DWYpgrozoNM7rmB8HBe2KGxmzRC",
  "key27": "5m1epUHzFWCJh7Jsi1ub78tzGFRuzWRtGH2AeEaGug4WXdz5dvW3utpAaey4YgFBCyhyUz8gZHRm9S28oGdr67P",
  "key28": "3nHRkN5NV5HWPkUY2DE1C3QgcdPcwMwPunDdEgFsCDMQ3PKU1RPWJsKyRMGrK8pBidK9xcxtshTUK8tQ5GPcFue8",
  "key29": "2fSdY144tMuhCAEpq5P52R4MvYCV9CctfXVY9h87NT9aB1V51JPMbtuoQDKcLqqGa5hpgUtcTNon3sSqGkL6PcrF",
  "key30": "491TipjUoUc3vFzTCDkukNBbKTmqHKp18wvkyZyiCmxRpAiNPo5Ki7WbjCDFwG6qk7qdAeY1XFTVXkjBprGXp1Be",
  "key31": "32fJsg1Cde53sRD3rQHUwWkVGbzdZ91TbT43wPSvGsiQWMkeAoihrFinKZeRkHLN8ztnNSCCHrHJ2Rgf8RoE5bVF",
  "key32": "5AU3wYh1bDvCr1oa3JFzFBc6NYoqXobzrK7QRSBJaQ9dTzZNid61EQtYyxqsiJjnwPCxwuW1nMf41q8iT1mGWBay",
  "key33": "5EcaGB7F6ZtR31soV4K3Dj1vQbjzEZCJS3HgRhPHoEb9VGHF85iHVMvKq16n19eh9WLLPUyfcpwCRWrKwGfMJd5y",
  "key34": "sgSdPW8KmMVStY47ck2cZyCeej2g5qkAgbgdZusi7m5Gat9sXT9E3KewgJp4vxHVkk539ey3guvQs6kmujcQTa1",
  "key35": "FQGPpzqwp9okXgFvE59yDBUh7t97RrscnArv9Ryq4NQgrDrVov5N4m2XDhaW6HWFMLSbUYgsGczcx2Pwva5GYXB",
  "key36": "4KMYVs6KWHb2jMvHeiaAR2qK538hRg8XDuZMVBoT1S5uZNcvyQhgV5EzbkVT3GUBgpdr56R3f8euzqt8AkXh9CCs",
  "key37": "5eB675UecktbNb2tAsed6YVT5RsDHQfbn6vMN2oVGbuMZBNEeqjjfR8hsWBN22KrsZ4owNxxQofXUPkegudvLSvr",
  "key38": "3o2VXeyuUvVfeC3DK9JM3mq6SUXVgaLUSYjQr8hBehXdyXb9KHZ81CpGf1FTXMBWy9THm4t8ipJ8obGPqa38CC39",
  "key39": "2BNbeu7oqott5RcMCbFwyFvfcvji6eikq7EAD9mwLYiwsqgziChpCQarNGv2nD6mvwsXjkFx2D3976XmiK2R6GYY",
  "key40": "2AkuCwbTHb7iMdwewf9NPDUmEtpf9ZuxYDGQJ4QzhGiaiBYubVcaiyQQrKX8k1rYkkE47EQ3bN2xLVeox6Akc9m2",
  "key41": "4DdV7cuwgVu6iNgKm4ioUiP9kFQXaUD92VXxCVvKcVT586aVMJ3GxK1FWL8jEKU5etZEUsBmDkq575CDVGVmqjo8",
  "key42": "4aHYE1bRkboh2KbkMZNwbcan8y4SF5Vj7CAfXciw7YYatbXcbFC1MfhaXPsxqMMRATgVLZEQiWFJW1kEERHp3imb",
  "key43": "5t1FKdp1K5rUZ2Yuj8DuUHk6VvHr2BWSwnJm62eF39Ww8cTDutx5jdhp1rMEKHwVcs9w1iTFLYP7Z49hvBCp3XY3"
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
