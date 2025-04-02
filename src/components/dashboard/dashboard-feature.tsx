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
    "54ubreVXbnXCkZJ6UhVKstdzqpQ7PB114ymv93kTBFoA2X3D3jBsMgLtd2xPnyunbnigbDLmQHF58VzqPxKFUs8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPyUGm4XC2W21m5JvoHYkRDNFRD5QfoNBoC1qs82Z3NcTSYvPYB3BhxbvixkLHbRFUbGKosPEhah8ixyyZQCdxZ",
  "key1": "Tm1NMFp9uj8Zau1LmTrcz1a6Jye3D4vUo1481SbuJ8LdMgx8sVZY1kz6wbSt2BCVAUx9zS8YV434ySb7WqQPaGv",
  "key2": "5foqS69Go9zVf3u6T8vmvEzeaUGgSq6Qnd9q7k1McA8YzAQNT4gNdSZapPcfnE2f3hCF3M3zJ3B1xRyAk7KLP5m5",
  "key3": "zU4yfrAw711nJoPQSqV8cuYYriLSdpg4cBzGh5BJ2G8rp913muxkGfdSqnMyHThStta8d6uTvLNRprbRGhj1Xew",
  "key4": "2cfAPQidugqUqJHCi8qVRy73JrR1GemHJtTFSfon9EZxHMLLrBco7Jh3vjbAAsrDX9sbSciR6veuQZ6pwUnQeMwD",
  "key5": "5jzjcLYaMM69phPoVvhFWkrQ2uuaGH9R5456saewhmu1v58LjCgRbdSyurbdpNFJyp6uaZPpZbMghe3KZtkiEj5F",
  "key6": "2kZSnZQmndNvurgSup1jF4iuyi9n9bLTtLLERf33RUwpb5WPqqmM76pE6yuc1ix8drjRk2Mu24PciHraAo9MSRxm",
  "key7": "64qDWFK1FbZ2eytSq7vYFyB6J226rtN7AV6ZBPCr59EXnysPV2ShuhAwAJSeEkqMZyCcy7CKkNi84AJwKXn1BMS3",
  "key8": "5YbBNbEhqUH8VYFnh58MPPMArwYaitE2YeQBYeNUDfB19PqLB68Z7ADGUW941hBsWUiHMnw4RK273YTUt3TtPBzC",
  "key9": "4diCexuzPUNo83SSZziQnizNcZeacC64mSQv1ACh8HFEAZjYtDPn7oGSNXoU3oTyHqGqU1KxXwbP1eLThBNhzirr",
  "key10": "4kF7wSYMv2ndBtLDopKq7JEWYwQrBi553gTBwkPA7f4DaW7s9kyctHk66ebNRHhNid2Z2HjCmAKQb2vMQV2FyGW7",
  "key11": "WWgJqZpjP8xp3BtQnu8zmiGEfrSHMi2MtcEKtQMAnwqw64tLTY7Uwadyex917ctdeFUwA88bGcUNgcKvbCGKSSS",
  "key12": "3JwN3U5GKBCog4BUstC857P9EQxX93Rx1QgqejiwTSy7suwtLAnpZWFp7rTRgu82PBdXCRpYTpcU8DB7SFcjD1m7",
  "key13": "huz4RLtxSv2CYQGvCrDxcHBTYR637s9D4gvhZfoCTz2BeGPxEiimMZsPzEefRvjfCdRCe4vjFn53hDv8wqTu7cq",
  "key14": "3foxhF1giXLHJ7T17Vg2NsjDWi6Gm4WJJc65BLDGuy9kB9snNuQx7FJEMLTMQZABr81pVDQibTbrVzwZXabHfLFe",
  "key15": "3E6DdynAsJroRszf9dkN7QLxTFxtg1JRWQRkZPM6DEPNy1GS2mrEGCjVQgUH1rwQMSv62LMaqnv3G6LbpaYMuUbK",
  "key16": "2VZawu9WKWBECv9QmPYdC5cQAouYMhRBM351P1tuuq6dTnagJm97YPGUvaLTjinPiy3izL81HHSiT2PFxS1zrJTW",
  "key17": "5VvzsCigFVZXD3HHdmTHUTKDncyDnnkQ7wN42MQu57qZrahMQ66vw3WtkGqT4FFcKRebLcPKU6idehPTbSCLufGf",
  "key18": "3KLJvrpWxoWazvH8TVw8NYbdpq5YCNJKpjByVP4mwiFZDZyCvNLZwr8aEz522mPDZwDZrnDYnTJceBfuifHqEdHK",
  "key19": "57qcd4NtV9JNQGHXgMZpmzLgrXGNnNizVtQkkjcFyeJY7qeWeCFdL4kxHoFzqxmvzfPqMHgxJcRthxoXhZyyXrzP",
  "key20": "5156AuAh7zoSVzADPXyjj83Kyw4ukPzTNQCkiGMTs59JLicdAzHqhoanefeduoiDn2LX3gnSfch7RsL6t6PnZQJp",
  "key21": "3hoYEp1fSe12M3mLnHmLiyQ4DLU1ZcnDCmfWN7jRL67yb1SV8wa3GbUsRTMLdexRwHANChJxVMxnRtmhtTdxUUGG",
  "key22": "4DjaCA1Pv6rwxvWCh4bBvq2SWbGq5yrWH7cxkhukbo8Fy9eZkCTudb36wnT5zdCpUQ24nUbVvjS9MpuBPTASAgXD",
  "key23": "4QDVuAGT9J2xpBrNeMqBourKP7emDp7E6uPuy9HLivyw7Gx21PCJzo2AA8UQHNT12CTNmKSgteRsp3BA2yeTgw5W",
  "key24": "3ycaD1jZk1DcZ51sc9Ybgjyz2vpeu3dB69xSfZTqta6dxn1kxj9STh1ddYdoDJ55LUd6oyykHSMfSU7Mp4hbV3Y3",
  "key25": "37BqcGi9CnLDyvwfnVauskzLNx2iYPyeNvUtGkY1zX9ZrPQvE3Mzgijd1oqFRf7PXj6twSQswoaesyCucyhMGoyJ",
  "key26": "3MiPtZq4BH6xJx5zLcXuUzh8Pxq96tvNfjn7LPtPs8cG3QQyv3hu7UDeEARGgNMESSUynew4wTXnP5iZh2UssZQR",
  "key27": "2LbNBo7DA4ZjbwjqS8xEFmFeLk4RsG5f1hGnRJTCKBXVi278YV6KWsQc7Dvp6GnQiLc15iVaGEkrz6nnc253haXS",
  "key28": "2M6dpjhySJRMKRfHhZcJHbwgfuLd2b4fzMgScn1MDogPweTBte5hWWUwPpFW2rqJawFiZCDQc4WPd4mAHoerv4dV",
  "key29": "3Lvk4WJzwxuhRXXeJHVVzvLi8LpxoQscQCEmu87tthKBAdEnMZjkTDAZJEMLpn3fQPEbyqsNn81BEGbK84juxaos",
  "key30": "4RXMaNav5ahGMcVqe7WZjBeVuqizekvAFvcNmen3ky76AzZPep71WaX2MHVoQAaNeU1DumRPaUKx3gPet4F2Zoez",
  "key31": "3JPWqv1FfgNpgVLpBcZdtfBHnJVfbALiukcSwcrbLozb62EUeE6kC4jLXd6CdpBrHayFVMLL2SvzXD4ZhRcVvqUr",
  "key32": "3zuHooMTAUs3zmfTsZL48u7WbQJMSdLtYiDKM8ebgQKneJeC3zkimYDjqbb1ArbvgNDyGCRfSTSK39RQhxNc4Tif",
  "key33": "rgA9xzZrUndQnejk43axDL6eH2jK7oTsvXFWkEHpZw41Zi9a9vHF2N57F35gPXBMxFtRMM4NownDoiip3Thixbf",
  "key34": "5aK58ue5eEZBD7tdRWGf19L9tVTmSKAaf6gR7rS2SWG7CCL7YYPXiKo9NJx5ZwKjhzWfHff9DkS9yGV3hP71rF36",
  "key35": "2zBLwpXfRee4iM7T3TrPbubstRwm6STX2UFN6MkEFJy5M2Dq9zd5LDtp6RoZijqa9ih7GphzumKiGAtcdbEPVnWE",
  "key36": "hWM3XftHribrpUjA8gaEzpp2sEKjCBHoagN7qseBPucwmxJEBfoFqtVuvcXGVvaE6hCzXGJXhuFChSwqbU15wuz",
  "key37": "LnzBJZQRcEvhhN7jhh3u6cgD8fterZ8THwGDLJ1dTK3hQSjwM5M6GQtaViYeuwAVCKqc5xX9fNLu9LN75ZuMxut",
  "key38": "2dpgmz5v3haiVpf89rskS3hYioHJuGem73EGPDi8oFUCy7vgbNTnAvzfpeiHvNtMLqA5MmVwkV9XEpnPhgk5ruFM",
  "key39": "3hA9EPxLjfCRWrKpjHiNjzQNZwG3YyeAqA2kCGZ9Ap3bwWdeN8bpgnjGjUf43qESttx4MWWteC8CMvMb6Zs13de9",
  "key40": "2eXLJZfQyTkkPFPG5LBrPUZQPYKuKFiLfgCeDyHeuyBRoU2NsXstgsEcTtqicuGKwHmMjfLsDu6YnVKYBfRdcU1v",
  "key41": "3ZnzU8TmLrxsdH8Q6DbBGJ51XUhzK4dHhnThNa2ti2So5r8MAMDmqVXb4oLMpYB384URzRrEhoFuZp4pfNLeqGEM",
  "key42": "qvHsjxzPQQb1R5GdwTi5JvsZiWhgYpWncmCXtYo1GMfgrV6veNx1fyUSkMGTw4GxeFM3jLg8MnhazM7q4JbAW1m",
  "key43": "66Tj5DqSYUJKQ6SG1JpDWJy9Lxi1JMbzgkJGX8AyqhA4DPbm3wnbTvE9YoV6HAUtnPbKjZUFDdNHNMKe7mWDvAzK",
  "key44": "64QkkAM9xHNvuuvcuCqDgAWxyLC28FB5PV8DxzoJWUYYTRV6P69h1wjjN3dNWsNtZ5vfvgR6Tm7BnPvJhpcTKxXk",
  "key45": "5xVjS5frWRfibCsPPXWDigNFr5PwVxHEzrNT4zSzv5Bt3XZHMKrSHX67wEEPcpfACW4HdHukUbkz8fzK2PpUktQr",
  "key46": "HsQLdTJ1AmwhsXpnJ6Jh4ezTK1ghZsg2Uvb9wLicrKrYyXZGjuSzhND4bgzhii538wF8Ht1XsDWtH5iQGND51rW",
  "key47": "5hq7dfmM5XgYDh68QAMztDu2Dxtwp1Dzi2HiPauJ56sZWorXnwLo3iorYSZYH3coahzvshTffaNPhZfbDx4i7GpE",
  "key48": "2mYaVeZaP2JaSnZQZmLrrK4uBjHiaheBrdFHEoW9s8jnpxLS7sC8UbozYrpxNXgaHfxtLXwXGKnVwvcaAY1Bcdh7"
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
