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
    "3dPAw2Zc4gTyHygXXFwn99EXQm1acNHHXHGLLxTLEkUABT6xdN5NjGacUmXBLBafn7cfpoUSejE7MEyHdjnsVLNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67GTPRfSTGMBu4HUT4nzL37JfxXBX4i8CArp9pnwNyMP54ZGp4RtWSpoz6uvcJWBphHu3Ji8ZvszcbxHd6bKtxSV",
  "key1": "2EqcXTVTYY4qPsdp2qPk66nGQfFR4Zc8YhcDgM6fuy2G31nixnhhrjBcasDzRWUtKotHNq5aG8f7jakmD15s47Pv",
  "key2": "2Hgkr5CWqErhFTNfFPHSYGQEJRq4JzgNP5krticMKU9hESTpoZc397nZqCvrunvy5WDDJoVhvAYDko8REFSiz76i",
  "key3": "4M6FWKmH3qNSxJkxgsPtxTPpG36WTEkyFcfNqTfNghbgbi4qBFTtZ8G1zsBYGzFnMMqFabELuuaYuKfJDVAYWNZ5",
  "key4": "5MkpxqfqLVox5cP8rMYPEsSvZv9sZnfVbLYZiuUR5xcGtUTXxEv1CzbRcgM7Ay8aNBUYCtwEH1GjSZ97S1FyjiuW",
  "key5": "37qGKN46Abq4eMMePDtcNA9PrUSSBQdP5eSz1crkoQRyR4A8x1VbS1rdPkUc9zho5jxXdaydacPt2UjicxG91Ta8",
  "key6": "2hHka6jWqTeaMb93qEHdPfeBTGuJtjrZ2XW6RCuhday3hv3dT4yC7rCcTt15318CNce3hLzsA81Ji5upaMsipE4G",
  "key7": "5Qzsxi8ERPJy3CvHyXVLc4mAVKDKjsh14QjT2L5xV5VmYCuWJuBLmELySBbx3KKtu6w6EQLfvNHt6FB2i62P7HU8",
  "key8": "ABDehrRFwGXLxHKr4YTzX7v1BeikzWe34vXxaMvcEm8t43rjgQuXh95d5zmfaGDtLDUWSuUiuwiW9V1F2q7njRN",
  "key9": "648mekjVQtwkBN9g5yjWVqmR9Zuyxuh8kqRiCa4UkdqdFwkU9bonh5c6n9pLS8n2UFXPbrX92GumhsQcxDDpAVC6",
  "key10": "qcQ2Y8XutWgMj2Uoeox4uRs5FhQsPU5bbo1p3KGwiNtU3aURC3xZRWLXsVc6KoqyVC7GFyKSa4ZJzCSpyXr56FE",
  "key11": "5G41iJH9iaMZ5MD8MV3EcX4fP2mx8KEwx6FdscSp9PFyVs3mMMzJLBPmN2xF3metNTX6HrTJwo8qFnhfvVb8D3ix",
  "key12": "33Kj6v4U1wPG8wvUDuSLzFnvzxtrmyYJcm1Jjg9FtTA2CRKh8Qv9HcMKDHwHcUrknmWTXvP64jPcFs2h2FfUp7ke",
  "key13": "26ARBLHyyEkVwnosJsYbJHF9a28yt4Kw1xZ3cSioG8nwuzpkonYKK9WyqbGPMFugXBxLmwLdWt65xs4R7dNmcETr",
  "key14": "AwqKRsu42dNqW2k1z5y7VarWEU5ryZ1UrGUvh7ZS4vPYU1asHFBoZfgx9HRDCZtFfzYE7Kte5AJDrh1JQ5dzzkU",
  "key15": "4gPTJcSJs1YasxjqfctjG38koxxFLxKfYKTpkXjA4YVgRfhVLTCGQiqfdRWr1CV7R36TgWNorDJUuABdLARAHqGd",
  "key16": "4bgtz83tj8bBmPnxabUgpmDNn2mU4fx6Z7oVPXVJPRRPpPCJsJv6NdMchfpq96v9dGd9h4pCiZCST63sNV3GktRo",
  "key17": "dc7rpxSQxaZYN5ohmVxAbbzymuLf8p1qDz4qY9a61iXGBfiXJ5jVYwVVjkzurKiLpZbgKm2qRoazdLaMrd2rTth",
  "key18": "hcJfERfnEjNs1eNJPVQvn1ZPcj5Xz8qKZFisXDQMkjNgM6bzVobfa4Nx2LKG5vW6qxMNKyFDMaLfPHEdWCw9HK1",
  "key19": "2D2C31wNar1k7FD9xRHZSvBDsCVu2HnB7AH65125k2rqQX9CjgMByJrifSD6W41xXxNBVS5X9DTkhNbM1Ay5uEp8",
  "key20": "4yKpo5JVGuK3o1qPhXY3K5Mpdhtqb27TSH95ZNsMaZHwCt4Y6oLweTD6rr6g2DQh3UumYmphuLXjVK71RA8BZ2xo",
  "key21": "2dbe5xHS8TMbhupEo1Stq6EVtmW3eumNHGD7QTwEii9Bw36jjpYftMP5HkuTMNicWAboc71wYKnUjomp9BSztXsG",
  "key22": "4Lc82RJdyKvy4B4jtfhw3xHwyxd1T6PSLyJTZhJo7FTj9itB642EbbT1DpL2oGGxu1uGaYRk7ywFzFEjmfVgteiK",
  "key23": "4AcJ16ipSDoKnmiFEzhNkfyWADmNVT1Z9xNEnVVUwdjaZEBuygJyErGSAN9GzemT6jmmscu1X8vuURwUoq4RUEwp",
  "key24": "5xe7xhBjkwiRSzF2Loqq9jLexuFaiBd7FY7gzR9zJtkHuLwxARbbsYQPzkuUP9L3Qm7Ye3wGfAbdKjN3mDcujmdd",
  "key25": "3aF1QDeAcVxNZA3UMJLM71DXkyjPPP5dBDdRqePpr17YUx4Vv12wFtGjFKTxWNn8NxQUsKpsj1uvWv7dpdpzyB1r",
  "key26": "3fE3LDSjBHu1w3244SxVaP3TQTBgsaFbh1h9ne3PVjCYiZYamVNSXU58W1Qcvjfqycb9UTCjM5faSLf2WZZXi58T",
  "key27": "hqZZVo1c9miFmpr7UCf9p9ucXbo3BfWHNNHveaqDrqgtXo4VH4hNJVSSPtxKC7GZeiBwZF1hAeseeLCKnS72JYK",
  "key28": "kp9MYvpceX2RqJ7tyf1Geb1mEb2tgQRAwkr77zP5dZu9QWUAq4YVNS5ESwwM9xFaCsyLYQNU1fohRtiPzN4h8BJ",
  "key29": "5ZAL5wnBHL7Uw4HT8FKjjhw4ar9Y3vsYzxcaruadZHMeKErmj8LCLE6b6eGvBoJF8NiQmckywX54z6vJo9B8N5c3",
  "key30": "jShh5jXQ2ggBPN9gJsSfDjXKdfpHMUHj1biVPBHpKQ2rjog1UMPRrXgmkpKJYZLTGot9HioWAyAKSLkdCt8M3Rt",
  "key31": "24zA8T9oC6gq39JXx9obUs55EqXhfyWuWsTaqhnhfuS45389jJHqpCgaTeDdtMNBr7QYK5YG1Ts6gng4h7LUsreZ",
  "key32": "4DUVjiEuhp4xS9ERm1oNH8xcmipqGZc4uKUHWryowW8Ugpp4GyUKHkzSXRQo7cmPuYwe8t5tigGrXkyko3pRFQ1D",
  "key33": "2zyHrLRSEcZ3ncQ9PGbhZZNwqE9BV299ySE9KP3mYxohrPwnQoXDvf2mzCFx74GYGq8FVUYmXnd8cHJPQKVZTtsb",
  "key34": "3QKqCaVNh3foR3bTeBS4d5E9hYK42vC6KdHypnJoRbnNtcJqaW6aufTQzWs723T5PMe8hYbxw5frSfhVdFeJSHgq",
  "key35": "DmthPRDoX9LcD5yEGP7WLWyFsp2knoeXLia95hBqQjuRqm2yhdRhV7jSkWD4xmUXwZf5LDg1oVJVmSCBWEhYtQm",
  "key36": "2GB8CHzUH8HhmCKAga7pW647mAhi16gK1YQezWYxCeY2Rr7NNGYvubiF5aTYj4AePEsYmzdPU8SpF4BnXTG21zoD",
  "key37": "4ZzWmbXHoiKSvEtUXx6ck15t47T9JLnaZGa8i1cxcJ7Rb4fqcrg1LugRt4Ve9TjoexS8bBL8V4rE4csbUy4G3eHo",
  "key38": "5GVhpNP7ercTHCSZbWd31ThDk8RZyPRi1BS9h9Wm3a9DAVA69f85jLsemKGi9Dtnst7atdFSoFNhDf9zxsmickdj",
  "key39": "56oGWKjW1jQMe2knUA7iHiawJJe6GguSQEGUr8gTdiQqLuWGmHtB12QtGBK66sRUuGvJEqCxc2npxozD1MSgK2LU",
  "key40": "2bittxLnxPoRSLv6nEJZsKxvfZh7q7LdiKEjid4yzdUmEBquGGhEfbXREFDgCEV3TDxeYdcFfVUxjbVohuCaz37L",
  "key41": "4iAHjBYrhzABiCf5cPTWYWVnXVx8rKEKB5bMfXpo2iVkZT2eqrUhok6hbhb2S5XASfNUqHjoQg89B65XDF9xvBdD",
  "key42": "4Zi3iFHD3yeDXZrJg4UHL8Uqedsesm4WDbF1XuEHaKmH4pBasTEow5bZyR63cypUbJLpkHe42vN5bMAN172M9ZoC",
  "key43": "647G6x4S7uavQ1x5dfh52rfCNmre9cKrxGANPR3aNcAprmDMefsa4xwK3M9jkMcisfoystYBbDdRnqpxJsgbkqyF",
  "key44": "zrT5vLvvdc35hUufpmq9xCP9nBGtCci9D4RZj7e2bdtoSPTn6CLWFb8azdfvzWoix56S2PmwHQUM7VLvqQ6YeJe"
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
