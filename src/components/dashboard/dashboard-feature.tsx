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
    "38ZLPQr4mTdsct4dt9EBUa1uJfaiVGogs8z1yhmAGnrJYFEHiE3drj1Aq8zBN2h9HGJYwGYoNWsYiSQ3767M7qw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qr6FfxV5RxpTEEpL4UjsX26XRknKGwSxRjev73MRmUmRHazFgKit61YLX4VDGuhJgRZwAgUrvirqKH6S6R13bDD",
  "key1": "5Gmk9qKsQg6xCjiySbvL2zsRqEjvbcoE8cdNnWBLvjJtFMSx8da41w9E9pHfZVpuPpULLXLoTaxGrKKfXjWvWMSH",
  "key2": "3TPqtvHBoYU4yQ6bFVXwVu9rHuy6pWZUyFd3KMymTw4wLMnzx5cyzysQjw7wEUPYpSt9FzUdohKXydZTEx4XNdnd",
  "key3": "4x9DukskdeNejT27SAKyP777PMMrAzLvB9cVaagEUs3SmQ2diWBDQEJMsPoH6yFvZfrdywQeK4Z47PjFVbUny9es",
  "key4": "Tf6fZVAegV6RBz1C8w4VvbF8MaCoExSYLE9uUXnFHj81MzMAcbHtyUdqWU64egaeRdPLu88vc9v2jyzbARyjeGh",
  "key5": "5HRbuFYYbBPGGfAmteQffgzU7C3kcYLX8gdsr6jLZnEPX5BsYxBZGmcZm7S3goPUjZ6VpxBhHFoR9AuUpoDBS9sQ",
  "key6": "5DQSnkrYvNpzYFVtBr1Fc5SXPvq66okT8pEkJqn3niDJ747apaHXsRJk84YAL99QW68QSpTo7dfdfb4KLFQjFgej",
  "key7": "37ox1kzVP8yaWfDyb7aB5VevmcKFsxBfG8tkxeegSZgZU76P3rpn3zitYv9Pdn25621LKgTr5A1gS9SbEN1YLpBg",
  "key8": "3s4aSKfEPDehW8x4GA8sPtnmqFQ3WNdDWvfTcFFBX6MUDDCBJXGwgfVtkDPacadc8bivDYepBA9iye1vaGptjp38",
  "key9": "4dxjHTYkkAjHS6FSJqMvKfWa4oTWwMxbrXrSgsLJe1D6DFNr95smJ3NuapE7GRdCJgbaWCjLXS5dYPEh74gb5aWZ",
  "key10": "4MSVNGPjMXYn2jLR55P7GLepMRMZYb3a9XpbCypL4twnHAnVsoDNHo2NSVy493tDTngGNg5JJRCXZS8Ht8HTyyQD",
  "key11": "5yDVB2qNNMizcVQm6ai3kotwDFd9UoAXZ5F4jxuwxSjUjM2gDQ5WR31QonD7qM8QxxqfiQt6c2sj2fQdMaUrEEZA",
  "key12": "2UVGDeF8RQbdoEZhxAjeztrJNk4pjBAJBxaQiMZWoMiYB4TjW5mLnFfSTtARPvdd4RoXj2KbBCPBGM2yCFrHgyvT",
  "key13": "HHeX4Px7ERe3PosjqNHKycCQicSXF1fCgzfBr5YFAgVwLUYThLtr7pQPmijpDtcSxT6626qwY9TMWYqUnoPuCQc",
  "key14": "5BidoMzA2XdpPDkqufcZBVsE8tZH7AcU5WaQPic4mstoX6xawh2VtTS7WMY1rdp1eiizuEGekoXsDmx2sMozDw5k",
  "key15": "3uVakSqd6VAa6wT8cjxgopkHVREvZ6HMaysKuHCQ2zZ79GB1m8ux5x1YBcWMrLJgnhFV6chfWbPtqfuJvEcbNitD",
  "key16": "2Ufvjz7k8nMAqVmB6eCEn4h1avYFXvD5p8PV9niPQmr2qqQ693Gfgr68GoAswEB9DVufvk5zXchAaWKFMy7Uk7A8",
  "key17": "3yAZuytVchUCajCfRGf6gNA3ZshXM9mmVh2sLer4deRwRDh1ttRgm3e1w6qzbnA6gp6tTAj1EnLHsv7sMVT88Udi",
  "key18": "5FJhYTp4xZsnHebhva332t4GkhaZawUGx9FEp7kqNj2E2YVRcTm7DNMk8r6GU6Yh5nLaHwtomor2R8ezRo45jGzx",
  "key19": "x6gT38vZgr8YiLDSdixpvr5tJyPCe6xfAeQEN2ELw7D65z8UpqkSaSq1NbBX4DopLAiNR4CmXNsomS9aDktetS8",
  "key20": "5ixb3ZHLBCPuwDxeuMZHG2jgNoiLP1A486cgMmLr3WkW41WJLWXQ6hxnAZr4VeCdeW4hZ4ydGNLB7jL6awp9TALx",
  "key21": "jaxVPKNDJ3hobZQT99FGdrVuaGDCBDWjistBYsiJfNFgHkaugwPndySC2c3SH1LXEjBoejkHoKeG7YdTRZ6wKoe",
  "key22": "278QUtwRgdyJj7JefuUUzCXYaPLa8K5Z3Tgx4rTzFFwhzxo4BD1rRbvGQPenrA5Zj2p4TGVAgT7PCDNY1Z34WAyN",
  "key23": "3nZyFeUVdKJzmrCbuMKb5Ab6uyVZPk3FomXCLq6puaWF6Dk3HU73hZ15aVTkGPjEx5yyZpcuUfzEEazJh99Zcagi",
  "key24": "5S4DRRuqXVqP911LVrz5HsUKWUy8yGqRssF7YhL9eBKhKZeXC8bR8jjJe5tt6tDwrpzcAQCLK5N8SyxRS5zUkUm2",
  "key25": "dEULswzPxDze47xFnEEsP1K3gs8e3BthJ1kg9vYmHWHsxB1xHYDn1a3rc6Wbty6uBdnDN79kT1vT8fvwM1aKHBD",
  "key26": "4MybFx9SKyHTdtZK3r2oT9Y8RWjZiEW5kdABJvdMmG7enhNfcaE2jmu5GAebq4CnoSVwrnTE5Hg8Epi2jciFNa6J",
  "key27": "AmNWXHqL5obuH8arA5wJe7FoTZ6TywK9vP4L9PQJSWd4DBdMq1Z6z2NYJXdPmJ4Kqes3wpZxfghHT1u4ZotyLAD",
  "key28": "MWoDqDoMh41CsPwfj3rUBZnYWUUYVArvC1KyXanfdUd3tApLZmbkbJ6gA2F2VmYzpNvXM7sEZWahXZH9ag9PbRw",
  "key29": "5XHN9pwgzUaZb4RSfmog7W2rnoKmgwrv7d18d9GrHzBeHFhCXyxzApsaG8y2h6TQdDsmhZyGegGaCHmhntQdRcvF",
  "key30": "2v3xe4ApC6Ds891gFFe2CofZ24pTJRbQXnq1hJtQm5hAMoaz525vqUGXzUQUJpAetMnPeE1368J1Sh8t7Qn4yyps",
  "key31": "56ap3g2DrNrf1PJkEK3K5f2oqh23fZb5jwimeyCEmxCtRxjNpyZAyte5mqoK9ez51mjDTKSnzCcsEzxoP9atmU1R",
  "key32": "4d25MSyn4rTX7v8btAtSJ6UbVYYZSXMnSMCSNB8n46SXsHpkrfc3i5DM5UphZ4YMHj6ex3QoTWgh9bdd2ZyuuCyA",
  "key33": "3RCHEh7RhAbvBnFL5xz2pk7LiZ9Nc1bfrCWDQM8b7qtBaBrFdwPCX6DttR8i8tTMCF9PAcn81qgDWQqs7hDxiA1A",
  "key34": "4MeD58sbAKAeS9bnViRPhfyFVEfBFCb1sMrwVdQ4YCivQzKPeSYz9fAPtomyL12Qy5LBv3WTCCVXu4NyMKM5mZKQ",
  "key35": "44UbznX7NrHyfJSfKzTBqNvq6S6Xc7evb7WuH1gLu4ja4KWLLDiHj7a2dt8hF6dAF7eazfzh2DS4zSzpK6jCVJB",
  "key36": "3oi9hvMYVpF2ovwrpHHvRw5kkAmjpXfruJ2q3KFgg2En8bbWncAKq8d33DExw7Wb8TSrAAF5zYAjuTn1NfZkAk5",
  "key37": "5vhMdYKUqabhgMBMD82w4hiTuVHrXYF5jnT25HMU1MxACkHbNNMER1QMwL7CrVjd86miaRR7VT9LSjUhm1ShDMjA",
  "key38": "63Mbin542oN3SmV8QcFmr7Q4cb3pL9TFnnXtsWvKjwQm5YeV9rreXYgxvjygoKm8PMseJF43TtR2RC4Nj6zWsPoq",
  "key39": "3JKkhv118sWjwuCtmrt5HaohQvB3xBZtQc7uhGiWppb3JuLPxYWbktqXMVWdkvEQu3JjwGJZFiDqKJn96BPcUGct"
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
