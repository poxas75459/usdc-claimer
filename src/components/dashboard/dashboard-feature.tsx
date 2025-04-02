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
    "55jeizgCypvZJLNun6eqP15Beka8rxp4dVDC2pyfAM6BvSdba8i1ibr49PNwJJdErMzX8sSQDCuUT4BWhS2hyC62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gqVxYvUnm6KN16jtBEidpLGWvrriXRp16aRpm2oPLKJXw1Z1bzgvM8sriJ618tV8pp6XgwQDm35e5r8nFeYtUf",
  "key1": "3MABC9c4i3TaoWQu913SqgJvV5JJmbh5czcQTxZQqxbHxqH41QJoEun7iAtwFfSpuQ5U7fNFrdq3422NdVq73hez",
  "key2": "2E29gTV4DoqowNAS5DxQWALZxQYb66ygkHwKDdoYQ2vWoE4RYdGZzzsm2AYb5uKDr4uXWn73kyzYLtRgvyQ4wzJA",
  "key3": "4g66wo2ZL5hU54yCRynJo2St33GcgS1p4aiYZzpzRaUEhcT8XRQwYft94CNyMKzYMws4Tvuxvp5qfWLoKe5dJSLr",
  "key4": "64K3CnJ3vgUmAP8zp9ToQM2yqPviR25kvLVUw6Mi5mjXzbJyNvC5252kENBwbQD2sgtXvrZicVMx6uKNZ6SBe6Tp",
  "key5": "3pTkdaAyadXc2TYrsDSNPHbcKtbx4SbvSbPAHRort5sh6fRD1anikaVaWknzVqD7JFG5byPHha3W5mHQ16kkeUAt",
  "key6": "5SZbSqX8gaLMhhYgwxndw3sou9sgGT3RuzBj7NCj3CKtWzLhfDKsqBZjswDrig882NTkCPczHaBKmFmLLngs2MTN",
  "key7": "2zxeLybitRMFDA6ndU8dxomw4iJ1QVMKynuqMeoDA8wnQXgFvHUH7MreJ6QMakZTBhFzJw5wMbJdGXy89bpbUjWX",
  "key8": "2uXroCHepeGRwPzZbPNm49GtPcPMdYSwq9ipejXmmB9RcQkSB4xiu5H7m37ccHvtpavdjjZLmLo3KFNAcSDGaB6S",
  "key9": "56eYuASm1FoVphswVKXvLbLy31FCaDKjuFkEQa1gcRoLadZzu9vd7MunKCHHWP49Pcm2WKAm6N3R1N8jm8yrp6b4",
  "key10": "WmJuNFFiaX4BLCBZ3AR2QVphPAhpYNvuKcQ471PtS9NfHutvwMnqsdNf7r4dXpD4igyiD1ams7aycG8LzUU6dyo",
  "key11": "45TLdfiDMTAeq9CTiUPhHcPUo8iKR7WVjzvfFT3yHsMuErroCXbH82BwAstRVXPhVeFSALJn3RBW6PG7HkVLVmFb",
  "key12": "5h5wsfef4rG5h5zTPKJptFoSeTa6LaugPVaZxQAVh6zMyUgBAp3vwUJ6GuYkSDaJ93i5Aoy63wBwF5prNjibdQZw",
  "key13": "5zgdkXQGsGNsF2gGzM3SZT21QMgzRMXyDdR4AQyvaupLexmFdf34YCjKCoctujZCUptk7j6m7A4VvTsbtmn5SwoW",
  "key14": "5RdR29PBDyHRxtQwiLG3nXRAS6h7FMrmRWiPSMjgiUMfJJFF7SfizXXSHkNV46nHrw3bNAytib3dFTSRG22pPTxb",
  "key15": "2kpePCfYpTFT4YtcSjmmMrSBH8jEujSZXfyRrYDiaS1hdh3GFPjD7fmqVV9jUnHmDM9s5QT6zkqphnFR9bdqd7DU",
  "key16": "Ytkztmf41hQz5qPkvKQxgrWgsSa2wyPxCDAxvdZmowkUf5PGLTss24P5X9Frqyj4Tpd3vN4ShA1QZ9TXN8PKNDi",
  "key17": "2HhKTyXSCz3GLdFUDZJGvxTJd3uaMiPmsGVnoachBFPk1Rn1e5VKXWzy1Mh3pNuaPRKEPTpR6hiZoKUa5y61MgDF",
  "key18": "381feDez4psoeK6SHGZhy8EFYZGrfQZVRzTbvTjnrRh1n6sjmy8LdQyvUskSYzVzZFMVWZLfUG3WKbLtrmpY9GRu",
  "key19": "49cqEi5drwnoo6Y2Ja5QnRqyJzxSFuqxiVyrUjHgT9mcfmpZMcqYR8PFBSH4sjQTBPJSxc33JC77H74CxLzWQLMp",
  "key20": "4L7uKqmidwah2WBu4MsRy7idjVgzavuPASSVbGbuWGrWEY6wNyJRAxMdSZutT51v3tw5xTq1UjvzL7sMSU9UWqtA",
  "key21": "3piyWr64pskVAnMUCBbTHmgeX4eq31Nttzb2R9rJ4bqMZkunJ7rZT8f6qJV4rdXShhphK8JEonxwbthTiSh1nkfj",
  "key22": "3GShSxxEZWnyWJpZ4mfvYP85t4Zzef5nfJ8HEb2Vrgogak9KAyBVFvCfk6oh95VYJ9B36YBKhxszEPfWU7vJQ1zc",
  "key23": "3LLK4s5yTRNyfgAfQvVEBnLha6p3mi312Y7dUN87TiJzimhErNt2jjx9gRzoQ3VkxvWc63bwGoNg3oBHJj739zTw",
  "key24": "23V5vgreCkJdU5Zj8wE61funE86HessWQXQwvEiEbJYg21kEvcS9kEmZszDBe4JziN6pn1jhUubcFHP4duJ5xAqt",
  "key25": "5evdvmX1CngshFhxQXhmKTwe5iTyZP3GaidrY7M2WPC7qxkbqX2XRWhkWEKayMaUdiBmnJ9G6UKX5ARTCabSTFcE",
  "key26": "2y4bMH1AXu8RYHTGy7vX87vWhzzXyCS6hvj6h5S2CFgLSDmH8V8gKLSrfaQZPHUqGbovMiTFMxJwcavN9VFEMdqP",
  "key27": "3KBwaTBu3cZf29xnAanh82oR2Aaw8tXbJdLQZPrkHpz2sMyvSkgHX2MjWqSCpoyEYxjqFpyhXoRXMDRm2yc5nYng",
  "key28": "EamabPqRyoXsb11bbPv7ttg5Fd4ncuTxquWnm6GDEKZfMaw4xbcG25dSbbv9Kbow9Y8McuQR88e9cZ6LtE6pnVo",
  "key29": "3FPMNN8BcWM4hfgygq4LzVkKxnfP5Es2xvq9NNgihFx8XcJeNdpxfEYo9PEzf5tbeMyG3d8GfrWBFNMVPZgSddyy",
  "key30": "2HxyanNd3sUYbB4fJ8fhstdHjx62Y8gZdAypUwbyKjHNTSwzyZb7ryVpv4ibihn1vxhFDLJUd1CVb6enaskZMsJ6",
  "key31": "2TcWFU68W8xbQuTj8WSgndQbauqg7v911QzaJj26XGvtb2drUb3m9wxFDxU4j5BfcyewNWxHb1uRjFJ3S1qF7FK3",
  "key32": "2748G2xj33FXxjEMPxY4b4c9G6QgRhDdJMeiCKLGUKvt1oRunsH2qcM4cgLsv4ngoqmAVfRUfVMAXaiJuKek7Znp",
  "key33": "5NJimKjzcNJnsxPeE6D8gFjqKxuApNssbnD9jfMYtfBCGiWp32TvQsjs4k5oxzZyMbCHb2LPE6VVygnHtKmbMfex",
  "key34": "hk3uChRaqdo93Qg3kmVKuXvaLKpSadSh7mtzaauSc8QyC8KKtDAhsqsrMmg6vaFV4WMutUdhHidsyqPpm5nZgvX",
  "key35": "3SB3dA5KpUk5HmSbZMEzT9rb5iaYFVpiRsW2QKNM1xoLNnrYDXkcp4zgeFKqFXg6pq3SqWaA9SK5iwebmxkKGJac",
  "key36": "2u7Kyu2bMWhX4pkrFJhU4jeSBo6WtZvdr6eRfer5PyxTi12cQ7z6c9tPWN1u9A7JYUnK7Dv5Yt6aEM63gkrHjU6f",
  "key37": "5PFzgYhjHRKY4PWPXJYLaos5pY8h7y2NrC2VzH5K4GeE5eve7M2wnwwUCLonyu48NnVTc2ogHyPS21N7fJiYpUgE",
  "key38": "4gx9WKeEDT6uAaaaLykBbsQhSVjMf4ji9x9Fq5LDCNoxsMNQ5UXqoqvnctrGX5xSERdyhUzWg8hhXp5CcFBy3jTb",
  "key39": "32Q3tGXMRsjH2UFNvU3UmnnybnQ2eFEjwuJ1KE12UrA4npowaCNLRtJsvHGNQ92b8UMgRL4Bnc7WwFAHNKiZWCCV",
  "key40": "2ardcAwZBFdgemgF91MmKYGL2gi8955z1o5uUnmqCEGERtasFTiT1tV1qKQDsyvWF47Uf5cTpEsRHXhDhFsvqhGX",
  "key41": "4iLcRas9NLoURyVdXDMessJyhDwLSnxrSFmGa7GzpVv7ce7pWKkisVdn8fKgxZ24d5LXBejbtmxBkTFXLAuUjPQ9",
  "key42": "2HJsRmjLg8NrrzH9MPEh35y4DNpZQnzhADhNKPYF6PiXFFP9mZXSb1GufkUWioK5tA27J8pDvBqZMXNumQawerVg",
  "key43": "3horezmC13t1PZqzZdUfWN9pFgNoULFoTqRh64UP6fzzR3DkbSExnbtFsqhiKBam7ALs3zdLwTm4LHjUNSzfTcWY",
  "key44": "3Q3cmiLbsbtwwihkwTVUEP7e67UfhYcVkeTKkEMJ6rR1TWtDRnXusiMWC2dDKJxqtWzB3Ti5T9bDsqZ6r1FCAtAV",
  "key45": "4hkZKHpmRwRSb6m1xP9wzH8JySPDgpsgXuuQ3VpETRrZFu6Gfe54kU1XQuwi3pfbJ3cFkMfV8Ee3wKQaYr3EjFcS",
  "key46": "yU1ZaxEz5Rggss9kEoSxKm1a5txvrjR6q4sfEmQyTKzWLZ13LTJ7bkhZH8qCAxdppvMeo2sw79o7Ve5P8kmCmWg",
  "key47": "3KCSJv76atagudZqpsk7eeqVrPgYi5zbqWKsiWqXgKgssQr96VfXCqwYiULLDFX4wuwwpWEWqh7hrbWTGvAbpWcF"
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
