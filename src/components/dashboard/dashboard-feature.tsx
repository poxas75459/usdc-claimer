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
    "hzkXa716nHnNZek1CaMoGg7FTkVZqsC31A1s5AcJzmyqjymKqDGFq6aJw6yGcXVaMvSvngXMDDLrnV8CSEVgPjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "188y75y2RruWERw66ZMHopL7HGMnTCYRZCtfFgsELR2nMRPvyqzEwZhJgZZrkTUdLYyjWpG8AKe8qCtFKqXQqXF",
  "key1": "5uFSjVnFxq7wqhDPVei1Ftw5tVU17amkcwGoFk49GnBC5Aud7RUvjcTvyPQidw73RkDYSy73o6aLDaePWdTQSYem",
  "key2": "gCfAWatZvDwn2peUHuvqMmwpbB1U2qminm5AGvhooSjYyAZGPFnioU59MxaE14n4jWebHnEviVtpgctBpHGMPTH",
  "key3": "4TwzEFJ5WLKaGHT7KhUhCSt1yKXMHXspkPmV18MgzAsATPLCiUxKkcc27AD8WUHed3Z32ZsJzLtyurKrrQkB6WR2",
  "key4": "2etubpmW2qMV37Qfo5Haht82yQPYva8GEi6i5CXPgAuhbRXq5sx64M9RZh5qcgGQnAv1iA57yQ3NrjkP3DQMXNFt",
  "key5": "5LNBtaTboo6A3ub9oMnuyTfGEPFFcRJxggAtkrH9r5Kj4JzcwbK2rhVq9RZbaYhq8zK4QePaRjzgFwacT9SURYe7",
  "key6": "4DK4prphxZZX4K8FusfGdEohGDxyNtQhXjwp1pvfTaaBmGcAuKyov9mFzquZRcgMAE43iNDKtv5Evzsa1YETed8c",
  "key7": "5EbTamRAoUcv9nHcSyHT9KNTHPFFKiAJ2RxGBH7n2fKgYdAio9A9mC69psFA76apTUBBx96QvPr4CQkBNp1ThyKo",
  "key8": "3R4zXza4nfh1m8tcyoGhqwRy8FtPFdh3MnQj2cx6C6YgtynfJxAFXK3rp23Msg2bsoYGSBfo2H3yutRMHmVQggnA",
  "key9": "3gYNt55bKWFJ6QDD8rET5sYgQXMMWtZyTMCt2nxhiYSuTh5AadhPWiCHtQ6vpPrDtiXHCsv1qQrZVD8cqqFyBmiG",
  "key10": "5Bz3NVM6Fd8rXSGRdVqXLpLus1GLgpoWGkVPVcmeqohd3k2ATBy9daq86PzHPk4aZ16PLwp3cCiqJ2VcxaeoAAwB",
  "key11": "3JcuaYZRt3bRb3CQvDwWbR3yoGXgoN6eANem9trZeLE4A9pUC2F81S144TEhq8fLgi8Ec1BLNEoefqx49boqY2tC",
  "key12": "26WGsR15npBt8QRRAHQBs6iDoz1aLSzM8JcWXM6qzT63KAChD934us8WE9X7oXneVJJTAyUD3bgSYRG7RYSJoKik",
  "key13": "3F2YgJEc4QhTyC8E6i1quQyqsABUWqizqfMt81ABo1hH5Qg1whgESDbd8aXqGMvtxCT6KrBBSJyP7JB5RyMhJCPN",
  "key14": "5fqL3ZDbvNaQQfQFvUp8LgYNUjMkYDRpKu7ywV6BKdq5a793Nma8TcKCby2KuCRwXGxw5AZsUsVb62MTBUnNetM7",
  "key15": "3Uu34tT7enU7Gfq8cQy3cLf2Gfm7Wam7SDuhv9bij8ZY5cEmrj1dCmmTjJzCfvffrVVfzKM9gx944kWhcgug4de1",
  "key16": "2AdzxYD3E2sE5vxvkk9oAWENEjWZRSZqE5du2k8HZYzaus3eNktVJkfktsxz2MzbypnET8LURs1PEZevbDoXoEw4",
  "key17": "5kPzwHU2US7wX8Ta3ojmpKf2w3ZUSskKV6zSUSc9Rd9pQNF6kyS4KthcM4HhKoJFf4ZQuYttMJjsugJjGgysFNsZ",
  "key18": "29fG67Sy4gvSMUstZRFSXwS5zV84U8mPDQQk1HqopxjJMCWkrChd7un9LQpJrtuKvb4x62VXMbdyVDKJr7TVfgdQ",
  "key19": "2DVyQRrVYKoJaSKMu6yiqHzL3PBSTVfXhkJJFUJAaSEZfPJm4fDNzh1QdukZ5AeB1DF7o296FzwugmEfPYCr2reG",
  "key20": "DoRdekg2MBoT2CvVrZz9941JMb2EAG3b92sgycwESAhowPPLntXsW2w4AqJUzH54QbwYHtvDRUSgkz9wtc7QuGZ",
  "key21": "6YxBBip5HnDS1xn6KnpQ7GemGs3EaRT7kNchGGRyvhxm6GgBGyvb4LKpnKvQTdNqippr23JVzCai5xoMZMDXRbr",
  "key22": "2v2nxhdxyUnCeWy9UWR55g3uSMrEV9PmrDLj1EjcyePbXGbRsw8fPCCEZwsxpCSVGLxNKKhs3ukKnkDBZtNZdbwm",
  "key23": "2ywaBDa7XbuM5VQC4FHhHqPCbd49eudgK5dAde6SL3piXxHgEq4gqaN52LwYzDG2oKEA2sgL5E5JMd2hE4NzqT1c",
  "key24": "aBgBrhAoTg8n8uKWMhyh6hkoLKBQ4hhBjtnmanpcT2sFcQtKQtQ4hTAnZgpf6gzvoqy24AvUA3FJMvfyAqgPW3a",
  "key25": "MonWZD18qZeg4CsNfocBnqjkKsKPg7113HecjWkhGSAJDpRTZhTKbajB3RfZpggcLdqpSuCx2e1uEUEzsMdx9vk",
  "key26": "3WwVdcw2w9c2DgU3bpqNvuLeJ4Bw9PbVU1U46ccSc2BqeuKkWUyLuCDC4dCNSK8zDtvcxYkGnMdFXx81e5dQZRFN",
  "key27": "2hpuqAxxtrNRwVUrAPnpiMPk4vNoArVBtQNegYbLDNFRh3UAGyafhhqvUBkqY1yxrAudnMYKJ2nkAjFitpjGdDeA",
  "key28": "4rHStLfVLayL59jeAeoGoiGfwySRgF18n1uFpJN9rxxPgochRVNe5NzD4jwwRkGoLhonZYzXToLj8Ba5ymzKSc9Y",
  "key29": "5iZsz4Ar3cUWoZCGHV1YQmUtscd19MxN4rjVUdbg4PwTFLJbW8EmYX8W8YwUYpz5LYJ3BbZ5kxp2ir4aZLnfPWat",
  "key30": "eRTMiDtx6dLxxeSwYdFrXh9xHWbvB4KCWFDZCZ8KU9e1AoeFfSUHKHB2N5Yi2aUDPpUc2msfHbUMxYBvLcHhKeo",
  "key31": "zjMdAKfiSzj1vcSM9Xu4QK9Y9fAqPrgd4Edu9GcbUm2VEVJbThCbhsLpo6aJbULZuxNPZUDZDfounkeR3s9j39E",
  "key32": "2D4bPb5qe1jEz9PRemf85PpofEYXRirybGZzh2Teb2NVvgYbBskpwUSZPVS3vxVsmUEJNtY6homeSVFqd1GSBcAT",
  "key33": "5N3VrTUofQRxHnifzWj6DWYE86Fe1T9wLHM2Wv72dpSjKMpZcy28hEz1YQeKzhCGBUArmJMGc6cEDUJJj3YMxDi3",
  "key34": "5DppxUjFSA8MiqqbDyweYiXyjaeVeT9ydDFqkLFRgxnMnv9ykDMSsCiJ1vyZzoJ159CNFXsokMBG2BYUPkqSJmKE",
  "key35": "4Tye88ErKpYAeqv1DEJhytD6aufLgfz8FULL99NLyZb88LRuPTXU39mXte62r4a2GghTnfJwJeVQrGe1fFNjY9fg",
  "key36": "4YT1dWZztehz1M8mT3i9387uMB275LyPhi7hCi1xsZaRBenN7P62Fcf2aN64VtKjDKZ3kjeqDFSSEd5XqnrCRWM3",
  "key37": "3KWCV1M2ddNyrXQbn4fpZrkBgHoSh2kAMii8kf1Q8Rxo77pU9ZgXV3qxqzPznwySzK9h8SyCLAFEZmudqMfiVWS4",
  "key38": "25zVQZtW9h2KimbgABZNDqxSPt3rsqXqUsBSfisCnqRwNA88Cjq6hJXt8P7wAJCnYwPaRnqV3b4H16sNGRwV4Wpt",
  "key39": "2NPtgZR9eBUydGFPk9WfJeLEc1Z5XtqinTVBsiXEML4qVGgXeUz57nEn1zVQmgCnbxzYq5Pm1hsiKSVVjtEpizpz",
  "key40": "4uMmFLFCsdYiuVUYShhrVAMzB4AYtin6gS4QSULTjdxVuYVwQpYWHwxQ8WPiqm52DpQPcGtQkF7pmHjKdAG8Udhp",
  "key41": "4bMh6Bi5WdxkFXY2oNcmd5MKzjSJNfi1pmKFxPGGR26vpHrnGyMmtoJCnSDiweth37Za2ucaaS5kDW4T3uSjva1h",
  "key42": "27e5NhYVoDv9rCz6K6cKyMKQD38XrfJA484budgzCwHhBwvHFCHnyAVkyqqw6F4mfcw3QemSCk7VaSGjRK568sEV",
  "key43": "3C5uViVpSpJSUnSQJS5L33FVmUWJv5aRFw9MWXNSpSXwuLRePZL1x4WZXw4gheWMXMTqbHmhxFKFu5gsn5798zxJ"
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
