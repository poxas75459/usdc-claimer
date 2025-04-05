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
    "24A3XpNou9gHH49dzXhfaoQpXevUJSgDMt7oJkYb37frGpnJtVmQWWoY1Wmc63V2AZMS2Rd6yno6bEwrCC1q1kmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1tYwHh3NWhhLY2PfJDYPF5gAMpyoUyPEwBhxxkAC985cqmqTnaEjmWUamXHWqN6SvgqKrDUtNUTzcs6nx6bX8j",
  "key1": "4YZ9t5xEDMq2jGQyNuVD9FkwT7xttiNd2GH4EGbffsgjeXqBKrZVk2K3BPzgoQuqK4mtkQTg4hfQzkXRfEUbZLLv",
  "key2": "ub1zktyeNmboEZ66Bg9bv7dvz3GjRkE5HbV5Yu9PdhZRjEFrm5YLk9b1MUJpjeW427mPdgAL1m6cQTpVq2EZ9Je",
  "key3": "3MyeyotcNo9gWkeie9mrGB8bEoGR7KfhQWJ5u9DqnWscLdQe6cJikFJNFZmWL8q7wXnvtQL52k85DFvXPLUHYfZC",
  "key4": "3R2veh3LDLJdnrJxPPW74VZ7sRMetULgsKcDR7g4kyqUFdDbGZqA2YSCMMR1KkYjdT6tMLPhn8bG52i82ExKaaqf",
  "key5": "v7yNLHtvwszpq1AvWjohCkw5ykGxiXKT1uAS6QEyG8Hczvxq7Xig4MsK8PxFMm7ZAZYKRYPZcvea7W1AKFFCncK",
  "key6": "6LSE2cURvM8LuCKrd1bFdcDX9uA8LybDUMbmaFJTS2fLZrynxri97MvGZux3gaLyb6q1mkGzX4XM4nAC59V6yEZ",
  "key7": "LaYRxzubeN1TTmGfyabDoxh9P1qyoHwnXaUsk3TUKHL89FkCWL1bmdKD7GqUFcLAR1H2R5fSkz54Le39oNeUPqK",
  "key8": "5timxaEjVGdeESTYfmJcdDwoQc8GkD8o1mo53be8FczZNzABJBfyzoAa93b15PBJnpoUSrWCr8oKpB4ru5cAY8Jf",
  "key9": "2tyder1buWbswPatezUgXAoHkApNpTeAxteDsD2fpQaU6tx8JgfHbjHgi6N1jL8Z6Cvd3Q8jBV9DJkkoJQPsgNqA",
  "key10": "2C2WKbomDdDeU4jbbSJLsjo2mbg2MLBeHEdVFdtv5LnPWZ7V45VN4sr1owivk4wgXJdzREZfM8idZDYe9toQVQ5N",
  "key11": "4hevtBSpaf8n559D97cyZxecoPfHWxr6NFHW8R7FrAdnw3n2fToWjTRjuSAM3LnMDmZB1xWgHXZ1CLUXy6zT38tt",
  "key12": "2pVKU7i5ahxd6TZk6H8L2KBsG7MNd2oxCsFUZKZr4bDjqPXAW7Y2ApgcW44NwxHTHPEN428HeLNtUoG9qna9HsWB",
  "key13": "2zg81s4KJsCgPayfYmNhc1H3KHvCx33ziQCxx9FaKCbtM5sLT67khmaXanTibedSYBgZ6mxpKm5g6cHhmoZXfBTy",
  "key14": "35omrp3cC6VZyexTNQJQGsQtpm9JjqZueNSLjcGaPE6cWdBChhP1y8omk5Fyfj5MtYpWs9Wkk8vt9bjbsvSap7Cd",
  "key15": "2V33Fxdjy343j5DEvek4z2gZMRDoNd1yShyDjnYe57ter4pBfw39vwGkycVS1Ea36PLETEgWxoe8XcdEhiDE4Kk2",
  "key16": "4Rdw7VRAkrc2YeLCVgXLbBfVPdU27DH5x1GhqbAAZHme2Y3AiK83qn6yEP7sDPoWaiq9AceTv3CQCxeeZ7xh9V1P",
  "key17": "2pbFxLJ39waDFdeLvPDXDeLZtf6a3sg1ACv1rshiML6Ehkw6HDmEeVYQFxn3VV97ZyVUWfienKjMfkvNkHR9GLwt",
  "key18": "5cLPQobxr6Q1A3CVQfbvEd692mVEcsYfupMGA5QiwMSF6jGFjHVgwXv6c4RYaX6w2cTFXDzLtckHWVLFCJXnhVAV",
  "key19": "3UKkqHH8ta1XmxiGzQE5sA4tqnN2TPuUiAhTDBXMxWbsKknTUSrNgMrv8odjpjN5BE9GAmxUCCL8TYxDd8NaB6Zj",
  "key20": "4eipT8eZw2vTTJE6n2BXqubWxQigEFj61zQPszMNfLkNmR41KrWSoD6teZovmX8fsEgCoYLBR1BGWmJEuDQxnktc",
  "key21": "KooTTA2gJricqMCebtJ8pdULQ3QuZyrxKBme4YiUQGprLW197zb8A9HA5v2MD9vgeQLcnFhc3fARbmyNWZxnUDG",
  "key22": "5aV9rUPUqow4eHxanuwBezs4j9B3fkP8YT1CPukzUtt8EjeMiZSdD6SmBEyozM9hJEfoR4x5gextzj1SBaC6a4Ui",
  "key23": "4kPkjwH93yzp15ErG7dHzTUp1Dyw6QtU8fBqF6y9XYhcKWK7zWE5JoWxWM9GBRjUVC26AwCKQuzik65Tg4c9LZj1",
  "key24": "qAs899USHswyYNm87xwrSUdAK2qrumzdKfr7SJ2y7NPPh42mjjSAuX3s1S2gYgcCTcyjfFU6KdZAurKtuVdvbHN",
  "key25": "Mo1ukBnYy4gi11z9A6VGfSgucXyi38kqbF27vYNRYWcizRpYWxky7A9eKUNkeN76rGSoVcoqsFcH97x2nFgxWE7",
  "key26": "63GDAYJiDszch6sWz3qewcerPKdHp2g8LdUBPyxzWbHWFGJyh3pJUJbcuTW7k3r2Qdpp7okuXpKMCWWcjpxbb3BF",
  "key27": "42DDZtEtBJTrCCM8fJWzqkSH5NAxdaxpGHAdR8oybx9hkEaiPiMaS9Zh71eBsdRAdnsYgWLi4unDyJ5oZq8SBJev",
  "key28": "jsezhCd8os95UQRaR5mHqynb1XAz2hUcrtFsSdUguHvk8aWFosmcpWppqfutpFPnHAVDARrxtWCuftJEjrYFazz",
  "key29": "2gD4TjRTBhHQZXQxccZ4bfdLCnH2ES1he1gXk38jyrfX6YYM4g1qhR7cDip1D2QVfge7Mg59Cd8wWevgGn2TxP2e",
  "key30": "or93Tph3QnUUL7cVi3iTorVNGR1NKWytartUTVGCmkAJsofej3DFaZVQPCUjBpvCPSKFMEHj9ahEob9w7unr9fa",
  "key31": "4f58d1vRrHPX2AxDzh2DWYULMDjVYwRB3nENYvmfNFQVNhV1kwiy6PiHFVCisvUNLD8fQoFkBiJPCtsKV3mWoFxw",
  "key32": "5x8zs4E2n8RyvmCqmv1WZfKmmv1zpWayU4WjAsRyBFHef7trVBUXtuwSkpHa78cesqfCwHvGy7ndvepDnXzSnwuH",
  "key33": "2WCKTRduiZw7MdYisnN2BVhdzWydzPY2UksWEeKctq5K9yC9zFApx8A8KhqFj4q5oeWpzFhApndU4ZFjQYww8Cw4",
  "key34": "bAXqvFGsEmMBhfCt8NCh5ziq1rhkESruWzJb5YwH4fw7Z3tphTEuE5xwdYXipqq9h2Htru4NfjaoATKS91YcL6R",
  "key35": "41HueuqvD54d8KGiTDPcP3ssjq2EpuLzdMi6awv5iEbDDWTF5NVT7GaNBj2kKoTabhizDJWcs3yzmj3i4vJiry2A",
  "key36": "4Sc9LauSN69Q5v46eq1X7b4CYjPze26GGfvJuG78CSpbvSyt5UhSwnbKSj4sC67v2fUDub8FzCKaBvyZDZmPPRVJ",
  "key37": "5dy7FTKiNkVwUFtfHpc3sHJJfZNzNmXJ89aVAahg1hq9Se87nvBRcF1aea3VFFRNR2C6Zbp8NcPEKc3gbMJ39TGQ",
  "key38": "Kfb5h4RwEmnBcoCkZdQtQdoa7LB3Q86E2E77AW9DwGHzvrcQJUqQYm92qCpD8Aaf5s3sF6QqFygn2V8deWG8PqJ",
  "key39": "4NsRXTedxcmYVvAA1DAmTgxnWXdRGpq1QJqr54ZJkTq4Sja5Jt1uGgnNHqJQmAaX4kizwycRPK2DwRb6hg4QT6Fy",
  "key40": "4k8v7NVopjEv3uhdxkZCchEKp7t3jLrPpZzNSkR3T7CCMQbnKDowM1kKtJ29nRX6DhDpWJyLPrS5DHdRmPLcet5V",
  "key41": "4SwXPS7K4o8Fn9sJvT9KUBFDTmUWyNXRk5ZqQgL1x6GKAmdhi87KDyojsyxJsvd5S6qDCoWiXWGpUWytbXXdmeVm",
  "key42": "3sqfjAnR575H5gAmuiVdUAgYucViZH1Y7oJ1nrfauaikY61rqG1hy4UCD4orrJGoYiXYphoGxS4ARMatbPAB2K9j",
  "key43": "5a2QPgr5h6N6afTXavob5pGwZ4qsu6s4JnPsv5WSoR491j5564epixDGmGB2SkP3Vs3eyPUbHZ7pAZEvkUSemGWy",
  "key44": "2Au1pTDTAhLwhaHhFQumDACiKo4NiJ5NYNFVnBccm9gHA71cq7GtWpNiA2P46UF1XesgBoXCewPLVPnigUMywDky",
  "key45": "4wW9wVax1zVVMZrpCeWnD2VAp57qjrTy5XR756Msq7aKtAP3ntJrhDi1b7SQYhbZUni1BDYj7DuAi63vPWetrBT7",
  "key46": "63UPsTcCNzdDybmGpgTt4RcoheTCizNT9QDknNRWZkdnbnuEztAqRNHMnX5Bq3vZ8e2cN7AP4Net7xRY3wW6ADXK",
  "key47": "qNwZbjrPwF2VjRqxKJ8D2cjyPQ4vYawvnHUfJyWsXSWytWpqU5Y1DHryUX6C87v5yPKcZSgVmhaEzNKFfw3kXT5",
  "key48": "3L4GrXMKqX6QMZoLfcfLuyGk9CNp7JotM3xN1AzsgfoA3tTsvRjZmthaFZfpKGUFWraZtTaCeTYcSoBd1dv1r5XF",
  "key49": "jzZpVbhp8PJYXLPSU56PwyMorvLuXWBx9KRPeDgZT6BWjUNH697XnZnLRds2ppGEAWUWCdASMpFuyx5EA8fu2oZ"
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
