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
    "TgLy2RNREiqa2GMbvZh2T6HjEt2nRZK8tK4jAqFUvhAJmQFabYcNkzr7Kk45JGrx6AhfKYYZdR3Tnv8TuWyzWPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QY9PD2CUJGPESpVHo1X789KtpNcAXheWw6YKXnbyHYeDos6fhwTrhiqLmEHvkpV3MayqWyzf2eV1CueEqRSYvb",
  "key1": "5iCDJdyWkWg66ZcUjBBCrVhV22RyTDU2LvmxKPdpFmSPE6H56wyUHubH2GLwy7yfsNxx9Cpke6QZAcjiHtnX5CJC",
  "key2": "3U6fiC3XE75t6JuMyRHKWgVVNWCy6fQjRqGKwUJufsP86fxQX6hCx4iQYuBHBdB84uXyG8KesRKfxXvw3ivKT1MS",
  "key3": "3xMmDHfZAKfU48awi7QDWWHcVk4g48t6Nxb9mNgTaPeNzSYRKEgdhX4x6pahvgCqrR9m83FzNc6QW6PQDanVpgaK",
  "key4": "67magfFTaowEvx9oQjWXPXfxEF3Hk2NYDCsr2bDtm7ix9bFeXMNpC9QfLYXFKvuD8KGsQ7jdee6dVqfDRV3TuUfF",
  "key5": "62eD4Hd6iEMRFkXh2Bz6geFm2uP2edcQwSQ9Gmghm1dyBDhxjpWstHT7fr2gczmxfTJNfQ3oyjKgWYhteT6oBi6j",
  "key6": "5GTjRGDnQ2Snyc4vG1SPzCyTWCHA15SerjqL3q84ET9CBVpovYuBe8fuSUD9ZdxdeB2V2ofaFACkzvasna9LZkrG",
  "key7": "3nmqLUnLNs6V4dYt3G7tPenDYAVsTuQZdGFUNeV7BhLwLxrhrZQdSFs7HmNTGHdY1eBAPjWyaaSjmQmV3aXv6hbU",
  "key8": "EpFEfgSD4yfhk5RrLhsTo7UGnbzA5VdmFutFv92rQx69xoViUKvnAwMsoLcqFtd2rp2FjCajVDbyTibepYz9DdR",
  "key9": "4MRcgz3yECuHy55CUzneWT9c3ie7pMuG454kPe7QuA2p5Ct4d1a6ZdAXSrGox8SqyS3UnXQmnWoqZQaQX6d53zCA",
  "key10": "5mrjYuTEuJU1DXeAdFJaTr7F7p9bX1ek7yBAFxasUVhgMxwDFURVhYYgwx9DwcN2ipkTQ1sbwRifc7JAQbTYcRuX",
  "key11": "5G1vmkMEf8Ladaji1Xn88QC492o9YjybT5DHSWrvG9o5ai4Wv5LgTnKbo7Qs61DykpbpnqTYvB2VnfSu587taG34",
  "key12": "4KA2uH6dRsaRWx1qPQtFi6vsVAE1AiMM8b1TcHKzeAtxRQLFmZmr8UC7wR5QV1eSrdNR2WxcwCZxfht8chk63EAK",
  "key13": "46zCZrnAsB6MdiMK1WHwvTS1iadrEFPnnajbQrX8ggY4Jcbm7MQFsDpGz9WYjY9cgyezDR6zx7VTZ2QvhKxBeD9r",
  "key14": "Fpbh1Qr9rJJngTRHvF17hHLfDoF5eAixvFYE8smS5nL8xjsGLnzQH1L8Bap3xSbL7yNiWjppQTNqz5KCteVn4ur",
  "key15": "3nUpRzLVm1MVYU6XjtmYyN43Cxvo9v5PVcFzica4uXb9AD5A1hrfPfg9wbaDwUWDFy15WiomHFmBTWN5xssUubtD",
  "key16": "4gjMZ7sUF82jNnumF35pYvsy1xbE8sdYXUYjckajKgUkhN1bhmMbKEPDENqpmBPkWDRZscNgdYcj1G3nCtKGm63B",
  "key17": "5iSDehbcXUn3V4QcrUVn2iSyzSiBDSCFyYtyYrZqHvDVKdZfAQWuWSGCiYyoe2vFrx78ubQREfvcoHK4WVAjBgUg",
  "key18": "2jeGmYpunyS9MMaRLSGQ8ycXa6sxSCCbuBmfNzxVj876WV7JCycwBEVgUbMSSa8W8RBTGvSs4my1nGCg7M652YeS",
  "key19": "55Vc4AH3DduaMbYhdrAUqrubjXePcEdTDN6PaPmR2PH77LPvWSE2qeUzNk3bBBj9JfBnVvRkJpxQ1JRh1oLMEQbK",
  "key20": "5vAbF3YKHyC7UxfFogeTMLKuijrY7nGLVy5wyAgF3RbrEYverxRQv2h6ZStiU7AxR1MnfZkmj1NwHuJkYj1i3EeX",
  "key21": "27U4DBn9RRmHeioLXyorDZorczwrUiqSLd8GSa58zLrjcDep6wXwash5mcA2d9Zxf3iL9V3q424GcyFNt5w4MgqE",
  "key22": "2dfRWAQrK8ZJK7CWVeFWX5meDGamzYbS85hVvbhEdMBQRDS8JqKagCnMKwdM3bDdnTPrbFPeifi5Fm1k6ooDx1xb",
  "key23": "2DtGpXpy7nTednCGEiL9ki7GRYxGbq7UQUDxocuRxCJTdyA95B5XyVsPcwA3zfMW3MzmZMq33FHUC8zUtHtUTWGR",
  "key24": "3JM8FFMsZ9KfHYV9ikgR6wXaPRcpeBmnB2XYvNSTZErhM56LGcuGUP18hyK5JbdnEJXM6GbJacHJZUfGawv6LomY",
  "key25": "4mmUfbW9rAzK42oRqfJM8DFZdrg7MXWLPjyydGqnUosuyzh7Y1UeHzVBWBux1DoBponTBUmFiXbcwjf1wzPXLhdB",
  "key26": "LDVEa5HhS9m9Bn9Yw4vJYrkwSH9S42ozvinr4vD46QGoVL63e5Y67dm1R6cyRK1dJ5CQaVYaYifeEaQZUuPqu5H",
  "key27": "3dXhjZE45LP95nXppAecZaCmvJJUpU8DhX9EejYLke2wNP49DDGGp4g2yDKjxCyrPZD3FCP8UpfGrStmtwimf8Vi",
  "key28": "5Siu5wrnNKKUbQfiLxB8hYzH5oU1XpcqroYEJ4mYgwWJ5ZfL9dhtGGubt2njbtpt5D9Jc9AGb4VciQRm4XvpzqGW",
  "key29": "XRNgcw31nN9n7jhpcbGHpT9iUVs6Uy6zPW7g8FSvrfGKQZ7kHbMHGyhCwoE6KVhNTJPQvYLq7pkk8Mw1Q7NtKbt",
  "key30": "vx6bw5xwPtL5cXjg1kMKjJwZckNjMQ4tTw4NJJ3RZZXU3v9NhPNjZ3BiT1LsmnwC1bpn5iNB8ub6NEDMi726Aag",
  "key31": "3z3z25X8UtiPgd5bS9iM1mZVPdG86WEihPw19vuC3oyWP2GnEMbxkt6XHqFuSeagwhesaBdSRk5QKpzrZSdxsgK7",
  "key32": "2KPYMNRZWLjoKrYjmo4Uw13SVUMRoJarNvc9cMSiNpNdree7XuSdgiH1jDqJiMDyPAy9hVYfZveLkzgThuqpGugj",
  "key33": "3R5zMowuz72epeXkjwnArt7adsr7cCbGDeZR1KfTfSPiYmpQh23jKCvh19f5tUnd7ivPfEYZzoPQWyLAfBCkhfKW",
  "key34": "5CJdnMWEgDvgizDpb8AccWRLQmMxR6z6mmzTsiQNA1wVKCn5ykadJsg4Vrh8yTxCALh9yJKexXjw6PrB4iYBgPAS",
  "key35": "3y9R8ynxLPveHLtdiWqeq4FzYXJygRzde8nuCeafwh1boUMDrbfDzYaP4S7SfcaHFXmJCks7b4chCpmHthHoEqRD",
  "key36": "3rWL1cv1ycxWeMiTw1gMGSsJPSesomWGTLMiKHJczeoRRXVAHyGShgLQSkBe7zBW8cdRDqa1uwG3EVwkbhGhUbvs",
  "key37": "3qUYrzJtBW4YxyjRKe71xRi9Z7PDXA6NbFpzMJxsK1bGipi9tDDKSvgcirz4Kir86UXesk7yNKvTaRECj7FLLz7A",
  "key38": "63txRcDdrqdTCSTtpZUbNcGQz2gRqTcrRiYESsiv6Jocaa5NroFAiRgFpnTJYrKn9NUjezk3V7pKzqrGBcKEknGt",
  "key39": "2nk9LqjRwZejgMYu69veswbvc2onsvdBp8pQYuKc5C4GKQkCuvoahomLfQdu1ZByPssLmX6HF5gvQATxZKDM1nM7",
  "key40": "4D9is4nhHMCoisYHzk4UNyNxCnxZbsKkxXosNRW13MAK9HomihKiym6wVhkYhyS5vp7buCgsCKr3sJz5ALv5R4PG",
  "key41": "3dc9YdpXQfV1qxrYFe883MFJeekkj94Lhugm88PmXng4Hfu6NTEYqGcXHTrnacXnC57RKM1q7GDymsqLjrG2fUbW",
  "key42": "2GU6Z1osQCvnxgywKjifgnsqxoyjzTZYU2X7TigcWXUSyrCdt5WzvUrTjWFEKrWoKnku5tdU8nNQi7zaapeF6YNc",
  "key43": "5TaNTpKtacugaAwU843Qz3Ks9LRaVHMHe2y43zku3bGnb84QXhaJLugNzKJKjUf7nQcfGfnmmMqNPV6WifDXQzxJ",
  "key44": "61uMRxwWDSsMipyPp8uwvKgpcRFjY6YNC5H6jjkEprxA4p1PQMWXxmpxXJPjMsuq83FKRgEjVKgrsW6fbUL2aaWa",
  "key45": "4ri6VAnqkZLmm8VYrgWyTkU8pZLY7CiHrCmDYjTDeuzUSKTMQFs2jKRPVvSkDBhmhCRxETsnCAGP6MfGM3iyYNJa",
  "key46": "2nnzJdtDCqgjV9EdQCdxhpFGKCvuaNeKQtKN9wg1MTkyVnDLNe2hTkzAqPsELXgDV3QZQnauy6woTUq8HPSSYbfH",
  "key47": "nYxrF5pFW488398UPJ9ciU7sUfVDk2R6czfReFekZm6PY4qxB2vr8UiivZMbhMQRVdawW6eEYdyMsAj7LPbqaW1"
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
