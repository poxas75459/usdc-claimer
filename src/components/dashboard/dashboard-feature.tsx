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
    "4gvffoPuNm4iT9nx7QGWhvPjcSWi1iJ4c9Yv3K9QmKxhivxfp9oznV6jnArdnu8YknQnf5ggk2esJzusiGW9dyjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdaezPFSZ9c4jrbQWqBc195sViQavuAHSRcTGDA63DxVWCtQwYc4RmMBMZKpQAKcEeMZqVKtxZojavqGsqD6QU8",
  "key1": "2BWLJ4QVKLBiirERbNmojYHfGFMbDCgLjtapMUqyyGoNFLApqgjwj6r5cH5xTgk5rwT84efDysstNfFX2EQEbTAj",
  "key2": "5dScGriZX8cuciFgxMbz8Gwsoz39ftBRrwGAU6tYrUaqytunEmcQLnkKt4sWKGbXj8dZK3matpddQ3YL8cjJbMBr",
  "key3": "3HDfHDBQiq3SbVqTnpyHmbQAHCNHL1XAGNoQjEpJnFXG142aqFC9jVYmQiMVgXDBSNJYCwiM6gmdCcQ1pSPDHBqK",
  "key4": "2JN5RCrJagquE6XxAyx6h15fskB1UopCUARGms2z2h2RNDCowKRdQVPK1CMoqqwrTGVGs6ECTkp5Rqh4MTqKqum1",
  "key5": "K3e4GeFHLQzxTsXAfrBmceVtem1zbLjQYnh6uY7rwH6yujSAChLvfcZiXzesnBefksMzPUaZ3sG4qviPVro6wUx",
  "key6": "4cD5s5uH22q1vWZwEcY1BMKCG8KGzKQ1FALoYBnqqqTqPfA63ZsUgmAzEizPvHDuy5RbKdE2UdNhQisySKBi63uC",
  "key7": "2q48KHDvu1jUACPtiuFGvgHKeQk7A499sHMvLtukfAg56s2LHYuUw6aPqybYEbRWHPx92XuPnQXen4an9TmGF93W",
  "key8": "5Pzhbs3udakZjpnJ3CQ7Vv9rG7cA3n5jESnuvqhZzim5r3ioJfxDs6ukpdhCvbrATxV1RU5QXNqyaYyzJFk24MAN",
  "key9": "2TihDTHADPKPR8rWHKkG7d9Vz6sdvaw7jcR4oPnhGQbpLBkF8YC3wBCcAFnuwQy1VujQyYAdqP5JMJY3hPrktYU7",
  "key10": "4MZacc22pTcEPRck9odN7JQY6H87s7iSUSDFiXoAru2wG7srEj3ZsTgdSJcd1LjxUUvfKYHcKWYbs4ikjQ5c7AZG",
  "key11": "4hKdZmctwocjTDkkEADdP1EtPSxpeSz1BCQejFwXpi5Duxu3L6zckUdiMoP7ezbXqLu2YmK8UDUSMF5QJC8W36s5",
  "key12": "5iJ3T28GCszixNsjdNhPoGDMwvqZJ7JF1RMPVTCrWUgJaVH5fDDyHqRSQHuUag9KzMty7amTmrK46oiZZBDDNVzN",
  "key13": "4gevGdUkXbEqb3FzPaxQSRov55zno27KEASZ2zZT9kxigeG46xSRHQ6Q2qD26WRGnyPcmLj3vHQB72PAYanNn1Lq",
  "key14": "3PYT4KYgHtsDAMLDQ43xCmEBWP1FT29UXV7oydAYDCdAxWeTvTYzMwQ3JnDQvjq8Y6Mf9guWLCKRrfxxqPqWz96x",
  "key15": "2en8xwRMoPLL4q3euJkeCrQV6UH4zUXHWAKJwwgvb3zpx1taZwVs9DgUSLow4uUGEzTpMB5jtEF4xist3kBQ37zb",
  "key16": "3JU8maiMYk8cL43kReZmpPgAxiFqkN9GNuQL35GaKDxu5BUmzLicXQVAyHNzTS6ckSosdUz5SanVdLhKwDALMCz",
  "key17": "Xk8ZvakZ2W9VfKzRNxKmc1w6vCSMpjzjLqS1i36eXMSRqZmLmCcNDfdc2pexf8z968KQwPvHRXoHkFmJffeGj6f",
  "key18": "2GBteXuaMiRQNATyBiNLppMbn5ek14oCurKJiPLLwy2wv1SYMgXyEcdoSx7zZb3bPJoThMA3te1pKFqcxSBRXzMC",
  "key19": "4ydfheLLNcZU6RSvf5Qmsxwrx9L58AkNPbPQNuJYJ5feK8fsng9yy4Y5pi7XgTDEHXe97emLETuYZsMg3h98GaTC",
  "key20": "67ovhHQR78v8XTznHkqJHEZ37ehKEM728kzLkEQsbCTWaYg2mUHrdzgfok74G5KPTu26ZuRKaoftzYcJjj4J3V7W",
  "key21": "5fBPtgSqWPofuLUrH6Pdt7p6tRZgWDi1tC4fYmyEmvRjxKPYb1pJaUpJ14JoTEdrT4dTHMmeZyE9fjC9LJYRC8dK",
  "key22": "iVSd8bgff78YFb37SuXYYJYNNeWLLFgRWSwyAUe6c1AEkwbWZKgLsLci2CBGe7BxX3GBuinWnGotokc34Vig4A8",
  "key23": "1oJHfkDDxVVJ4uQwJPDBGVezryutUWqvyNJULUE1hu3L5fAhdfSGyVckCT5xNjyfdP1gVKSsLz5q6XqsA17JJE",
  "key24": "2fEKDHrp4FPokJu3xN5ZQJTFfp1L831rijVip5giaXBNKSoq9teSKKERVMswEZ9ymvh5qXe5Bjg4RJoGM2iWsWDU",
  "key25": "41qA8fcu13hF8P2uyx2S8a5g5puMHAE8U6BjtocqdFza7VS2i9BfGDVuUArCCp3Na4AUbiKEDwKwao8u3nsvNnik",
  "key26": "54LCNYofyMiMgqnoCof7CofNVPjn4wwDTxeTz3wmiNweo2sCzdy9TGCBfM7f83CrNcvTev3e3nt2HmuLfpELLBHQ",
  "key27": "4f8MfyTRVjhiDQzLmcK3ZSTwqvNhbjMuY9LLpoVesW5c3Ra6RQsB6DuVJpGC8tzwkU6gjm6W42CaWSx8ipNNAZR2",
  "key28": "FvvNgpCHTb5cNeVDbWSed4ePJ71JaBG1hiKjyoxo6Vt77pSYAMzCCE6zmQVK4tjdh2pTWZFqmAQRggBhboHZw9a",
  "key29": "dWY7fcY8viixb1mLCjbMiAryyfCGRbzWU3ZBa7j9ofgdVeFB2WS8njkVmmFSqTqPDZBD8ZknunyydZzwpfLhhtU",
  "key30": "4rnY3xozkxfVUUFKteteQz9LsdfQqzdZFkj4Z2ENDZiAdtxsJSFE2H4XJusTEiLdP99o2heVp4RXDgg3SiYFnZRp",
  "key31": "4rFYzrds7CJ8SmL1qkSahExRAMmWhEybom6SWZPFR4BW7JFdmknaTtnXB1yBZxbmFFjYxpadwwrN78fv1MucHdDo",
  "key32": "55he2EjFNSa4YEbimPcXQejZ7HMaHkmjRMjaX4Wc9MSKdrTP31NQkBFvcW65rkZqtgPJt9oCQPSAk7W2oxUr7qrw",
  "key33": "229a8AhciqazgF74CZ8jZ8gdZQAVkAgfSPkhNLimEbPaLAyYTBk4QBM3UhmA3nRnFuYL6wbMpQx7GxLeqF2jmb8C",
  "key34": "34nCeqox2HYYdo6yiiKf3tD4nzhaBS5pHjCNB8CZqNH3Q2McffiJFip6Ydy7qSPUET3AqcAZQTe6AxaXYM8DWS5U",
  "key35": "4KmirL7T4nArVoC8MFH3VxWDtJYpKJbCdRNLiyBoyVgP1Sfk1ioePSEMjwEghuijNf3mBrsiVHgoXyBL1JR2Ee4x",
  "key36": "4WF7qqrEMRKN73ABAemW19x6nK8cPoP9Vk2FKqg5g7yFr2bm4gDC2woMWcguHTqUamouR2VuPmqDyNQQ5CZL1rcG",
  "key37": "2CsWmJgpvEvp8WYLSzQYSc4gtGjrMgmDLQS5VPGZUwA24QqXusMZ8yCN8AY27JVj3YEyNhtNYuZRnZKE4PvM5guk",
  "key38": "2rfevgSVYsUjEwK2g9xVJeFXwnFRcLAZgCcJje8JJ3JBJaZJpcstLqgGyi4Wsfw5KvbqUjGtwRr5wK6Q2UF7cBY5",
  "key39": "2DBCf4dSYgpTLac6wxJ8uxRRwG8KUivWeeXZzZC4cEJBBWdtTnvx5GDX1seFLnGZx3xbUZVmSQ8ozZwCqPfwn1BC",
  "key40": "666bkRgDqv3xNKmcTayQ4zFWeiGFCfo83DXK8yfRKXKCVTEjZA6bBGs4JN4dck3dpfAj8xp1DSSyWB1QVEZtguu7"
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
