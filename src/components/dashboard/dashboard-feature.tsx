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
    "5c4Fmj4gCCdTH4nH2ydaPzXSbmgFnUvkk6HXATabLFUu6WR9Bno4KwhvymtpxqzrDztmJjarUVRbjyf17YMJebHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLtmE2JhGb39ixbzqhhvuCPTmT119KiELZUrtcP1zAvCcLUbgPz7zUW6mRtMMeF8hSK2zLTnKwNsrsCpzHehxaK",
  "key1": "4AG5CatiNJEy987psDJ8doWMQGTTUTG8tbkdCgf6kkaEFpLWuz29KcwTmBva4pnBBY4SuBRumn1Z7UrQrwYRFWp8",
  "key2": "2c3L6nfCNrdL98iMUVBEX58RpvuHLGbaLS18hPrPAMuLgrDeuZs119otcdNrJoVJLfpbYYYmusyfadEoVXqhXnm3",
  "key3": "5GLZSgU77PSNz3BEH34iNfQHFt72VAacyw78sVrdwizVPEiTMYozAwbYNDRqfdK4K6uMTK57zsJwuodrmGzJq6TB",
  "key4": "39i4FqfS38AWnxWy8N7afjATtj1vqxvbmCn7ncuqz8saWVsZj13VdTkrYCsDWLMeDhRj5aNRuxHtG4XNrXz9nRge",
  "key5": "25YVKhNdXKfTNt3XPpcdgc7Hr2GjHPUd7Kap6wuq5H3waBmHxhMhkm8JTuTC5Wde2akAVzrt2tBbpmLLDK1DWasJ",
  "key6": "3pbZyzDgnBsvTA3jtzComY2Q5Zp2m1yKtPxaacczB1AU9YtKngMU5UUPCWmiGTrPA5tDbGNkDbkjGoMBDiKVYi4j",
  "key7": "5HDJFcH8KeRRCuNneHLEqwAFTwtLVuQUpTyPFHJZ9Dex7kGwtcJZVUT2UCspgur2QfFEtiJnGq3fbZqPcwy6LNPo",
  "key8": "3b5GjTtukXBQfB8bQN1HPCBHRRbTRgh64DiqG9PwT7kxhMRkKCGmx1yBaTJT86V8bPi4QCyh2ic3qsh7opJihvuw",
  "key9": "2pJUZY9YsHqM54tm2G3ThgeBo11eS3qVui22H3SrrBouEL81qYftXa4Aqse98ec2QeLc5A81V52GS4c6EvgUPbJe",
  "key10": "3M2g9EPNSLrQWxLWM7keBTbsqi9Rm13e5SL2JuPxixLMwauPB8nrqWLtosDNoGgPGGnHy5KonPHe1bBrgWFeq7tT",
  "key11": "2v3oQP8UngMMtTcz8xwptgMxw4NcmrrSSUwxuQmKg37NRP19SixXQdV3F8u3aJkJtujWvpLaC5DaHza6U8Q66UFL",
  "key12": "3SoSAwJMe6qmqNy35VkxBRJJgDPQxtg6nPugDLPrTypoQgEPrk8toyT4EM69sEPA4Rif8x5FfNqLBKzQBEcYXLVJ",
  "key13": "2UDu2REMwwBKaFr35Lxa4jnd4PYeBfzrqpKdVd5xXCWvH1TDA2gH4PjLtMNPNEHrikaDJzJV1ENxCyq1Y7eahbEA",
  "key14": "47CVCAhzxRHQTztETJpEwRRyFxtK6S2rPqPfrKDFF5NTuKspUttB2FX5PNYpxzVyHWvRpYq5SAYHHrYaCpLYhRFw",
  "key15": "iBUp35WHoBko8uF4mzxf3xPuetTc7teWrT3VJc51sDmaJraeX1Et9nUsxhm5CUCy5diHBn1ypcovZh22LK5W96W",
  "key16": "3rd9hhyZXudKZHF2ymXcXW9uAdvYkB4kJm6S9ByC75uDQyTEypvAzi2CKdUawVMTt7tzKPWFW9ihRdCesDwP6eSf",
  "key17": "e2CJh6MEPTLdRoUsspRNACELgSHmW4S1ntJ7vCs4WAKrFfB8dwMbyk1eN7QYn7hR8fJtoACEm3c945Ah97pcZdR",
  "key18": "2hHosxMSTkpjq6cw76Tvc3nfmGM8mFaHMEQwVRZRHhJ9aiZDZ23WMe2fiT1DfY2VzSgmcBje7GuzmaEr5z1YSdiY",
  "key19": "2TffgNFKL8hR89ipHSJMC5wf7Xj54sTrLXAUZHY6T355iW3BgJ19tCqjXujN3MTSvEGhpRpt55y5G3JJ1g21DdCd",
  "key20": "2qeNz1KTPHeE4gwEL3JbdHsG4Bh4kXGAecYAkeRaLz38jP6dutgmbZNgZiBM3NEydbemK52MxHgzPS3T5DfoXaHT",
  "key21": "5kRXmpyvmKCeq7D6jNgqAKJpRn3N8N3UHTgDC7KuztZyi4KiS7fBqCRquxHYSFWDoNezktA2fEMgt2hx5ZfNYKvH",
  "key22": "fdTCYMhCpGfc9VsTFLU2XhCzaaBSGHr1cLQBwjbYQ3yh6Fhcb6U2p6SX6RCbz71H186vodpBhUnWVDcjnBiukXQ",
  "key23": "36BL5uX9NVczM2fB4QfczPa855E5w4X995tX4BeYA4satCbdXKPP6Szt4zsKfwHzJChGBrMno1tLawPkayyAB33R",
  "key24": "426pFmR2r5mGjffZHXyBbGYvPxT73CkygYRz8pugrXnrkZWav8SwkTYNMh1sffnKpFF36ruajHDs6uNaBpfikUGn",
  "key25": "ZQ4s9hGFiteKHvPqzv5WeeKZw98X6igkJyvUGKhPQF8EpryjRqC6gaZM1kHhEfsEVUxHJbtRMbgpYTzZSdSAP9m",
  "key26": "2AMZgD3XhcDHauS224t7hTsdG98hZRVZnHCVaxSkboU2zyBjHmP3LZeFnRW2pjUUWbDVZtqrYHUGh4E9DXRVp82M",
  "key27": "s61s6dS655HdBSuQ97pEPnpyJP9CsjT98tUah5hJWryqgD8h5VxpqHNmYVNyoUDDDEQsexXDhi5nYEj7yNCiZwu",
  "key28": "4CuEdNGAaek8zKrrgeJVqte2rMNHyyqFP5hns5fNDLr59Cov19MvFJxzwLsF5LjAsaWbbEx9Sszto8iqsLiDZHXM",
  "key29": "318QPPE8vSYN6rzNe94v8bGxpKGf2J13KoJr5GGNwP5hqnLv3ZUFSwDdo1zBYTJsLHTSbs11ur9HoPe4YneSLkTB",
  "key30": "23rspiWJLvnRh5ttphiN4uwcVsyBao5nJ8gGiiebwWhjBVFCuSdras18YR6tFL4S8Hnrh7SUi9qNWjxM8mHR2cCN",
  "key31": "31Te5Dn25V54nHozBy5zZzcnWsihXuZuKtTtuaSvkYVYDkUGWxu5ykm1DN9uGQojQvdBvzQavKnWBRqKEt84T5yu",
  "key32": "2ePr32LXYVJfvxpjuyD5DaGj4nA7Ygj7jnNvvBCv4WEDWXenGbt9KGjee1t3zHNorTEovE8915N8ZQfLNj6XQrLU",
  "key33": "2TgKjXRePP81LrEr46TZxkoUrebgtusKLV66vVmCBZsmM53uFULWzm4h6BsnUhrHGzKHqXWGJAsqRM4rKe36VgmY",
  "key34": "2yV2gBeE3an9h4vrx2oZG5R5SfESfyPfurrg1XWEKpVmXqVyfJ8gDuUZHawMidj2QhQt5EjoWEhUUzw8qXTHRpm3",
  "key35": "5Hdgh2ya8vKQmyYsPegYZnuWvbpwBJfYYPjkApxrBecKFpkmcLEH4FPRTMRMft7oi9oVM8Dcu7pNmAeZSuJJkwhy",
  "key36": "4jSi8hzqQDrF5hvkZR5VMJWHpwrf8ovJPFP9jChepGuSNGF8PRUMatj2vv2k8wWjsFdgsmsHsaTdvZZ22x3r3xN9",
  "key37": "4YwqgZK8ybtM9bn24QtBSmVSn7vwLxa3xQjc2gyGxKBGoWS1KJLyz99jP52nwjgqgohFUj6kvQsMjuJRUQWoKNvS",
  "key38": "4w9JJ3R72bpqiggnhYVB32bhLN96ygmoKVmSXsuxpyRUL4U9Dz7iww3pi91C2YyPpLSWRgYoMqWx7Ca1VECTYjm1",
  "key39": "2CApq48DaEu3Lob6JyFik9CrbStZgYDLmXpFsa1Qeh9GEPpD4v2T2d3uSot5RzxQvp73CbX6z53nYNPVgE5UiPy8",
  "key40": "2gDK8K3DBHjtHdKktKJhriBsfKtp294oMqN5zfcTf3ZCpFgJGRFxRJu5is282s5FUpn16wTvja3KfbnC8v4oFpY6",
  "key41": "RcnqbtcqP9Vhnxrg3SetTJyJpx2d1mk9Ebz3sUA1rKSi1qQTPoTC1KWbcQxUxUuJjMpy7Kvp4EQ6ysLYh57cZKC",
  "key42": "3cjfc6XKyRZz85maDtxmUGTYdiRpKXnJiM8bS5iwrtiMvHAWCdJQFKBgLuNJwJGgKyDkJCWPfcFwgyq5LhaqjxPx",
  "key43": "5tXisok8yZWtcuqakkhNiwK76NWryoYAFL5322rtNZiknsVEvZDFainFwPjte8T6Lwx77XS4frjEikcBrmJNrC3E",
  "key44": "4oVsepVdcKoqsT2itbQFjo5S19oTFMVTN3N19FbwY7HPHxV7hQsqmVEGb5RJfscPszBEYWuYS2BbAzCt2rGk4uxB",
  "key45": "f7B7oocx35Z1HeJvW5ymqTxBHAyH7NgLvPdRSFgprxdKMWyCrnKj6zKtAJ7d6n2ipDpEXRfbMr2rxy6TKq3uX6k",
  "key46": "4owSUtJj1gHqwZFeT5PAUiYMLQg1svyX5zrpqEA8X1fNSJ33D1JuYB5qYCasfQhcDi3ZEHwPYXhnMS2xnP8hYQJM",
  "key47": "4AbRWtckSPARPnJacrUJVZ7BFjQRYctX9g4eYya2dDPVAkjN79C6m1kKNPAVXCkMpv4Ysb4zrZQY5sujUxWdTDjq",
  "key48": "4VAyKqBc3yfsY74DgU3LffLyZXte5zTdFFSnKdUgk5pN73QmXJ1zJ3TdajstUtRe76TCSbRq4XDpg1Cz6U9zVvLn",
  "key49": "3stJ9cLjkfopxnQH9ys2KykdfpDV2uFKMqEkdwSMnKcpM6n2ciruAK3VVyY9xqFN9XWwS9o6eSSn9ZQFsEXqGQCr"
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
