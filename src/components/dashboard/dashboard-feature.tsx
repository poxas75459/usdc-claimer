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
    "67DoZfqLJLBfRXUASvTeqYU9DaP2fV7job6ZXAd5pHkVHyGP7uH6MDy6jqujyVjUyQD9isUhQyQ8ystan1frYR18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wYJBU9jdZqJiPnkc6TKqkpZg8qjEY3NP3Cm16Ft128n5JYVQ8Tg4s8eEh6FDNDPWMfabZuDNkimasShVGZXLXAb",
  "key1": "41LCyUVXDQ734THU9vabD2MBqwnQnkHJrdzGqHFGEQ7vAT1XwJHr3UAx3C8W7ptfrj1VVS3r6r7z5HMA527kh3Ha",
  "key2": "5k4rtNHu2YyHRpVSu8YsyPszJSDnvqb5fto3U2zuHsr1q9RoabppWi5ASJkVpuvaRQMcaoYWbAmiotpKi2ekBBBy",
  "key3": "2jahTgV2jsRvPni9QjyeHLS1RoU3ytHdqwsHJVbGT7hXHsg3GihwcagM66B9Eu9V2QWRU5VmywciPK2Ds3U2ay5L",
  "key4": "4TxhJigiwKAp9XWyJnn2n5TAgfCTSkPiQtg4U8tmrptjAhwg9qf3Q9i6Px9LKpHtpNT49BS9LV718yE6a9qQQ3i6",
  "key5": "TJ5gtST8NmkaGoAfU9gLa2Co4t4uVVZUEMZrprZarYPjLnhzPwkaSYJY4mn8xMiGsP144Nq1emc5APKGqTHELYn",
  "key6": "b1ZzYcEvNnjYAfAgso3nSZZxycKje5p8Lxjt1WNobd5AUvn54R9kMjUFF15TVHwo4YYNenPqBqwvbVJqixV4u8i",
  "key7": "5i2Ypg8MgaAjbw8BbeEacpz6FBaReMBohbWmnTqcwQw7hocsm9Lvw5H3MP8uYPANEK18FztE3sg6c2341Ee8sFNm",
  "key8": "584T6qXY1auBBMETEzNpTVWEfvQ3pxJkUQUaoZrbbBsiWGBusffm2E1a8hNcg11fw8c6ZweDxPgThBc63Wv6j1yh",
  "key9": "67AJuUazPLViVzJA123nzH3oWARK5Yv31fdXFUKCzkMJJtHCpdvJso245hQYDR72WUxpRTx1KAwubrCG3gXote4i",
  "key10": "3R174U7WXLM6tcCZvoJf9wsEfXojBy1kQmbYMKJGaD5Jy1hgJgBw7Wb9kBiXD9CYwgGMc9JXP8BRUjwW95zRwX8e",
  "key11": "3QaoYpRZMRgbhHiVb6zsk6bi7RySCedaaRLpwJKGqKVH9jXQpvHFZXDDvdYXFiXTQcnTJv82J8s4WGQrqsqjVYd7",
  "key12": "3KcYVD5GWXpThMduYJauqCzVJHxhbU4DusQsbgb8R1GaoXTJ2NydHogkkJ6AdcSXE3GaiEBSMten43dCxrXGTFq",
  "key13": "2YMRaQF4gq9fkGJx8ofpPNg5VN4kqiYw2UoG15EcE1htLuhfaNnXNYatEpip3epAc56hMLoQHwMErFtV83Qxiz48",
  "key14": "4nb2bT4ameBPocKc9HgYcUwBQPbHBLLuUco2Qrkeio7NikKB1BCnXvP68Y8NBteh75gskuLXcNVkxWUuitjVtsBF",
  "key15": "4J3A23SmMnG5wFN3N2ErKRmJzcq7T9BW8TvAmNJ2CpzSUSuzpSbMrBL1QxyHw8zNjRiBnLURNiLFb7tbpdQDK8fq",
  "key16": "562JaxjjS5uXqR1hQTtoGuvHmrwZEYF6iPbobvrpa1UNeQ9WeBfYDNiaLnHbAcH2tA6C4wxWmHEjKKontqonPwxY",
  "key17": "2BC9NidNwXq5zVJdN2ekufxoNWqhwCrpMq3gipn4wjkeh5bV4bPp523rKjCDbmvQLf1BCFqZD5AyE8znVBnJRVmQ",
  "key18": "2xbwGoDKJPUxWcpF7uoUXA76eQU4wDBsAP4DvCeLLTvLzaS1zHtQv63fzwuErFrQvAqSrZC2JaXCGok4dAmnwYsq",
  "key19": "48jiiKieoWgdEsaNRWEEcK3iBFNSPEENAdRSLFqQpcWhqMSYVfvp6MVriBShknev2Abq2JuBQB38ekFpE1ySE5Sh",
  "key20": "2PmLaZBCk3hhrf59Fb2k9WYycB1xXVbuZQCf4hAFPNDXQ5xnP3Gc2cemRv7anEBfGyv9ehiFRwiGfwvPKWnXGSY5",
  "key21": "2r9yptfSrky65uKeok2Cpq5z9hCk4GMV2XotqQeeWdKxRguDyAzCAJWf6u8ukednarDcZHNxpfAFh2h8buACga4h",
  "key22": "2Td84M3WWsoZD3gsRPAVk8qDJJbj2RQUaEwa7VBdEhwSkBFumG6JNKRW9aji16kgvGHi9EXw9TUQjA4ZhLLdhvcQ",
  "key23": "3YtZjr5ZKnkw3xAgi3UTyrAWw75bcGPb52MWFUqcR9tCaxB7BPML4hpFVKoRzPtJAFivEiRLCvuuUmBdvuNiEHvX",
  "key24": "36pnAz1Y9LxXJikvWSvjf4mrUKAPJv6xQFQaH5kLuVUX6LRmt1KBJpjeyRFnZeNzYA1WXVo6FYVvTPikC6CY8SSb",
  "key25": "GghNe5hQoDanW6b2Mn8RFhjT6Hb53uBAGeWeVLFcNLgC8NWqHU9JukeNznTKw4ybY3pG55VqAfS4XPXWNLjhpk9",
  "key26": "QnGwRs1z3JPkiRGVDty6TUwqrnB5xs7VHWEa2vDFYyDGVuabZ5GUTjPhq6m1DAkdyzfBh7pwBuQF2wSjyZ935RK",
  "key27": "4JN2P5t6QeiioTmxtyeQR66fFySzTT7vFqL1zu56CeQrXE3gPT5jyiRwY5KzpukVRgamAvZ2yFfywRK2JM9Fok9P",
  "key28": "4dRmWMWQMNYz6gtKP92rWTBCVb8osyMWgEn1K4ra7FjG473i4e49f7MwUuzGN4JJr4M4iaJProX1oWUZNT7buwyU",
  "key29": "5X6GPGWWntYP13J3uvggKjEUtxNwqKqY2Anb4XVKYre3hbVHYWKaEenoXFNGPfpZKFwK8gUJWiDPhnhEmjF2mjnh",
  "key30": "5H1jWyjwZDL2dZycLdUQCVKz7Voh1u1WeuKGYkg6gASMQqedgmULeLBivn26yRAszjfmBNWXvqRx45QXGvFPsb3k",
  "key31": "2rs2SQvheiJDczKJfUo5Ad822VtnszWg4dY13faLMKDViWAgSpEEXJo5JFk8pSMQW9odctJW6qgZRRQxZVA7TK59",
  "key32": "5REtcMBiBTcXjvtrToiCBi3yZLEa6ahHQmHsReG9QdjA6pnekc6PbF7Sha7qD64sj8PX3RAapeB7sKokQKFEpxi",
  "key33": "2Au7fWrNZX1bqQyjRXsGMeGYfCDeMJFdTZTVid36NPs6wyJerAfj98MNHqLFtpnjgZ5nNBctwunuXoCsQHFR2vji",
  "key34": "4TimzsW1xmVgH5fLW8Ge82XLtmr2F1g3maoE57ocPssGMLwNV3YRauppoNURjVjd7v6nsD3wdy22mze6qz2Gnx4W",
  "key35": "xH7cMoWCxDtHDwThDUPhzMP8nAnzjZr4y3HmGUp2czKNpZghPpNYM1dFXVodnX8yrYSewVSvhby3CW43m7suwob",
  "key36": "nye5CwyQqDJgCRg6bof4m5mKFBBjLZWyUPJX56irjd8uzVz76ixX2Up4WW1FAfQJyzZmeTqdndv3jnwUyqkHtxK",
  "key37": "3cuFge91NTyxXRi2Ukk1dswKjk7iC9XZU3TXRwzaU8sjxphYw39u5u5221GcXjACBv5MseN4ZMCL88YEPa4ykJJ1",
  "key38": "2XCSjRbyEZek2SjtuKwBgwz3becUGUvjqYoK1Q568FdqL5PYVdjAWkYenbreUQEQRTnXATuS9vHrAsiuBwSQQbPj",
  "key39": "ZWwStAMM9PgTehxtC6vg8Ggq9txgzyXm2FAT8UfSCAyd2m9MbHmhgBAT3GrWuWG7ojDSa9igU3C2zAYyagHM3e5",
  "key40": "5cYuhcmfuqHDd6Cb837xF2L2Fem62wyWvh8rwZ4BB8n8KsrfHi9CkskNgwjZAyfaR7P8mnfRcdCZkSYrq3MvfiBd",
  "key41": "23NjtGi7ENWdsbZg3Qae5PBCVmkJvWL2D19zoA1p2iSi7vkFhwdn1fgRsK9cK9HZkpdvEwV37WEsJaXjQiBFzkjK",
  "key42": "65ojv7hTLM49T2C2HXLYxGiccVdqHPqQorijF2iWJthyoDAa1gisX93Ht3Xz5RFa2Pq3j5VNZb31pL6YB5XU2y7v",
  "key43": "3Rhp6m4dzEgb5X4zq9W5tLHqpVVBwJzHjZkEDHDR81nCrQNKUDrnSvLbjikRXwwUcGQdTC25F5YjC88ggRiy88Yv",
  "key44": "3wnnQNZ1QEyZ6nyJgqxbnDYDmf3zxrV177MdnSFgPV14scK7ViTodsFUTFapE7o7AajnovEEuA5z4a979qNJ62Xh",
  "key45": "3CXyxJ4oC91TqWMxqk5e8n3sReGpT1Qpq948HE96QV4h2DaZuNiypBNEdocCp6vJdxrStzaWTCu1igxP5NybEEkW",
  "key46": "381ddz2XAcq6m5uE9NTMfsMFNYiZHwcYirWzMqQMZ22PsgwHnebgSTkYWsMaqTTb86ifAsbCfhzdoULk7A9Fp1Dq",
  "key47": "5viKbgQnGRY4c6g9gviKrsSqEtNaFdEh8qqXHzjn182rXMC2fs8GXCcsSAjUKBQzMqteshFCYdwRZstapfKpSASE",
  "key48": "AUpswotiDASpFmoC1VbmPipDW4T1z81SVC75vbVAsAsspoiSK4WZMKKSkCBUGXYsDyHchKDvQZLxwURD8BAFCnD"
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
