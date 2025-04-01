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
    "3MtzWZP4EE8m7HY23Z3PhVZdWSJypd2UVmDp5KPC7qfZyDkpvSvr9zQjMUyPy6vEsLyXcUfiHnDn9HtNwYzS3tFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDRRpVcGNhQawvq1U7iMgAN6GkageY3kd2rLBz1hSrDCYrE43ediALt2ShWHbvH2y6UBtF2eFWATm1TDpsr6nNT",
  "key1": "FSZUCeyEzLxiKdKwKndhAv9g7KH87BuJKNrmP9YJSSXFxJDxsUHyNL2Ln4jKZdfgDhFyUhiqSRv4XfY3BzDHYnn",
  "key2": "54V5JrtFYoYerjvUwrU5PscyA3LT6MEhLUvn2L27ohXRKesT7EjpAZj5drPyzPodKjzMKMrBM2UQncTtqY2gcpmu",
  "key3": "4n6BCixDh8cEd48wrrJLd7YrjVwtUMKQF6CAgRn5YjBF4LXBTN4e2j78Qev6R18rmMm3szkPCbTSBkA2V7JGh1aJ",
  "key4": "2CaM74vcM5bZfCaMkADZaTFpDw7zY57exKPpc3rXo42GRKTxUpshRGuUiJQ2UnhL15BGZxCNAB4Mt4GdVJYfoJEt",
  "key5": "VpqkQnhK8zLcfRCygb79RuyMPNWoQkevZ59swEkm7JLPC5ZYQDfMN6EvXMihyShoi6APYM747zTDZS9CU32SsKp",
  "key6": "2bZzd13dR8VWNBgPWobc9ZYn2Gu2cqtWARzvwQMoSHvYSzGTF4WEjumw3iXgcenYsAXJsaQHJ7RFyFPc9T2jRqos",
  "key7": "Z4W9M7vyEgXWQJ7xK4hnhH7AHQHTxrJHwyBfJskd3c1a4i78XTzmBefLZCF67zPxrdfn7TAHz6Wz3emPFnNLqRc",
  "key8": "pYoxCxqiUHeQHFSy3Nmsz2ivZZDbfMx3eHiEWoxBzuyLyCWBGBRdkEgh2FGzwVtFrayQyuCTB8Qn7CM3qu9amTH",
  "key9": "gPwXqrMb1ueFdbf7qoerJq6jF8h6KvgoQPk196okT8udtfqtQ6UcStWx9636W2Q9X5M3tZBwymzKHJ8XGxAXjNR",
  "key10": "8wf1kFjXARLNNggbnDcuC7MjZtQ4QS9VEwjyCivgyHwPWNop2KgexYw7smABWXKQcRnUEBuN6XosV2jdecBbqdc",
  "key11": "3q5h168ZKtP4nxtMewoWj1yrXrDP3hoZHvcWRstrRypgPayt2U4d1dLBf3TaA8M5b58Q5uU4sU7ny33JayqadsWT",
  "key12": "46SaGn58xxQqaweXF99krJPyWnJC1bdcp9LYxkU39uScrSXLFLoR6cC6jh6bqQJSwm3XB7sp1VFLSwvq7NKUS8Rf",
  "key13": "2c1Atjy4ox2tt39b1cnpycq5GkLirFQ3Fqvd4kXGUe2fthMViA78cGCqAhX53DXcNUJDTsVofaow3Y9Kbjs47c2Z",
  "key14": "4YG3DDZBcLLEU3P5WqhWWqHDbZDvXG6SuLaQcn7y4SQq7zAEo3TaDyBggTwUfPpdoeUubzavLLrSANyvuZGDU7BS",
  "key15": "4a2RwkpHonaiZzkBNAYvtahc5HUxXdPi1knV42G4b9aUyg55cKjNiVaAt39gEwhfCdmex58emUaQjRodc41bHzFy",
  "key16": "5nGgCtukzuTSs3fKFtgSiVdYc2zd44WD7SvMxAa2L6CPSJ3sDmuX812RFbZhPyeeji4GxsAa3aY7sCbv2REt4eVV",
  "key17": "5wfBMoDApd6vZLm3QjZJTgnwbGwxaFfrjStHqNTLqVQkYZu6UbM4uY7ZyXVknXLSo8raDZEbTE8E2WdGGqd9MUJj",
  "key18": "58tnV7kRRn2vJSbJjr27JMoA9E8fppAjVs9UzhNg1dxD4Q7Pr3BgKesSrx2qKyrqm9qXqdbY7Ydo2qzWnfaGUwPZ",
  "key19": "2ZquUtN6p4teS16dj9u1D9mvDGXwXY8yC2z2i2vJbpcVcP8hMU223Td336w7p3YKnyianDpdnX3J9P3BKXDj5qFd",
  "key20": "3RgpgxdFwr6rJDaXwe3bJXGLNauD5hgx9gSrLvxnEJxUrXzJMP8enNouvYpZHi38EAmdExaag8iYYsxX19NNGjrh",
  "key21": "5NHFwnxBzSQnjR7ASVBZjhVajthC9w3qTFrsCYejeNBcM6Ht2XnoEdJJU9qjHFTauXh56P5hvhKeExHYRwhnm3Sq",
  "key22": "4se38QRYuPutA56vgqD4dkDqYkjnFRFVQ5dtTDyTHH6Ne2JyyHQBjGohv6a3xcHPG2xYi5tsraJwKnMRPexJva5u",
  "key23": "4Fq8Aj3bAzvFy3RRau6wkBpd6hKkWRFb1DhJUj4S7BtvAU3PpsNj8kY8bi8MZa2brmgdKEz7SJBtowkkMAQ3nmYT",
  "key24": "34fLBNwMH7TAHuvd5D6UN33s43RHd6NMyHXtSB8ha1BA9GGqN47pZPpDv2wGDefJZ3sdv7f2vv3MkB5iPLvjy97a",
  "key25": "3bKkrfoQq8vcYYVyEitSk5VZuJ5KHhgrnf2r1FfqqVwAo5pYhZCXz4CGZWKxgJDMdM8aWgkMaEvQvQQQCCmFkYn2",
  "key26": "5WWFSS4qafBK9jX19jkPLHKV5XnKBq8UGikLkUkfe3sdXbWZiEYTdDUBrhPVK26d4rEqEbFcuPwcymzC3DWd5ruT",
  "key27": "373v4rUCJZQBHX7z9n699gFooRQgeQGLb24J4kpMyPA8JcS7i1R6mAvWB54KgrGeyKkiHDH4F6HZBtM5qprdPcMV",
  "key28": "56GQ7H5MuNENBqVNQoPcAUiB4W5FDvZpZ2PJHPaMuHH9qFZDNRDT24UidShLUXrEZExNwMgS2GQBxMJXREnDxwP1",
  "key29": "1YDqKA3rdH4D7KaTZR5C65xdHNd2JLS7uadRYDFikqUB6JfdEognWiAD1L5JpEdEJi61CEKF5phGLgknJ561Dcc",
  "key30": "3983H98eJ5U4qDYsVUqtHr6offNPEo3E2spd4eMgi5STTucoPByCru2H8RHNbXb7uiznaxibLyhX2i2a7VSW1GWt",
  "key31": "56MXSDsyELVkm9GgXBVQKXnZWwPoWFP93a4WcRACvpi7fNoDzLsKz9jHpLkexCXLhvtCJkCUPxak6VvZWGcurBoe",
  "key32": "sfCh8g4AXVYurTqnm9ZZpZgtTPMkaHyCrpQyQ3ffA5qgRKY1JBFGGDcqwfYLgS8DkeFdZcNXbL7aHx1XP2saYWk",
  "key33": "66jLBWexHoKoNbTu1qapDkTnjXDYGK81qzSEUNkqkezNa57i6417P4WA1hXJWYQ8GzpsTXZ8bvwaWCuai3yhtiPF",
  "key34": "5ACM9WGUD9DbcmEPsBPGgqv6nMPQbiFZ7E7QpxuHMUL73yUYHq1qgd5vc66BB7RyFii5mKLvMP3ks91ppw9uA56U",
  "key35": "F3yBBKVB2VWP8P2LvNyPcGvW17Uw7GyfXqVjqR6kDXS2cEcSx8nTviNAYkSYJCkPfMGEjPQqVoGxVDf5ctzg1gJ",
  "key36": "5juDbwDMrWjJTFWPeL867bHvAmyiGFvS5C4fDbBMB7hdZNns5A4bGPdgJSjusGG8PxS1M1jEPL5dzHTxs7MeoZz4",
  "key37": "3HK7BYxSDQQoL1pdbtnPCBcjMWJUp768C7NYD5gz22Mni3VbpvwjFCHMTUS3urFU9ynzgsDuR74GQ7148XqfUbXV",
  "key38": "3D2VFUhppx78hwmaWGThh1NbTJbVcfpjZjFbHhSApGHhYEZeukRvhWff2r8eDW396Txjs3uDJ6qkvUoBcRXdu4mW",
  "key39": "pvumJ9gafo1aYbDnSKPGAzEXkaCjNiLAdGxwpDWXrdHtx81i8gni6jDPPpkE5FXTz3CyUxL67JqERP7tDPZ9FXH",
  "key40": "5jFy9hfi9vQBm7sx9ho6JU8xLTk86BS3qZi1uEKdwFenXkzPeVR7JHHhpExYWZtQyZU4yUmDg5uiCHaVqUrJvs1e",
  "key41": "3fuRmEch1tCEbFGxsnQyNsxFbwpT62QKsjNmarxUs3kKbmoUQf2R8XzW6EyhkoZM5g38FhS5uFG72GztQfkMysPT",
  "key42": "3MLe8ZWjjs4ayhqbMppT8cfJwmXshgPbmuZA8m6X5jxCtShq7j7VzomXwvSvFd3EM5Kgwao7F4Bur2YtVEGnSvjt",
  "key43": "46unqGBt8ev65RuXpv5nkBrLaeChztMywtuN7iCDUdgXqxsfoZGmEw8FmJfKSGexaQYs13dMXqtWv3EW5FK7xiXQ",
  "key44": "4RsBMNSbK3mVZ9T3MWKKnfRsZxkmRYKSkQTJMyw7ZzQ9axPLdFbL2bRkVTQAmSXm4hsHL3Fth2kkAGvxwwvemJ1w"
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
