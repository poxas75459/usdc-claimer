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
    "3WV97AG1yRQHxiEGEizz2uzmkQohfVe886pLLMP1Pww7NrVTjQJ2xVU1phyTG1G65PuPhmnh8bBaiazUrtgejzQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rYvJkCAkvmznyGrM8De8NZrgm3KRgGEskFsYFDWCn1PaNujGBFYnUs3FbsprCvKNLhLEP8k8Qnkvfk2uaAPjWK4",
  "key1": "2WfR6r34uyjU2T68Wsk4acyktX41cxwWrSrMf8j257Jys1FvdWKCeZLzJPiDjn7GgTLZXoWSV9LogwSs6y5kBFui",
  "key2": "EAfk1mjBSkBnNut9LW4DQuvdCjrnbyZcAbvLJhZx6mNv3tsh3wULYBZiHSXbpjXjV7ijGqt19pH3hTqMzeDSDPR",
  "key3": "oyoqiwSDv3t89uvCgnKhjPzCowP7gZPaXTXKoQUbHxwwAYLSGA6RW8VnyWSAaANyUinM9GZ3cbYB1ZQDw52QYtg",
  "key4": "2F6X21WhAvuC4KYdVh8SvT3c19e8a6ufoZooNMTkhJrBD7iYDnTkYZpYRxA6i56sbNyfvxMMzh9VDwYiv425Sise",
  "key5": "3HZKnfxYBnLXvmKZ8JBLxyxiBdxBdk8o5rmPTg9zyEhZUaUhuz6rd5rWW26HXgVt4GKfcgQFDG8MrS2m6aPj9t1p",
  "key6": "4cqAXXv1VuByNzJzdaMkimxkKyBz4JJcPcM28jhtFMNbrbRZWG87z7L1WWvv3kVFguC5byytWaQcus5HGSVv85XB",
  "key7": "4zxx8WT7Feb4TcV4Ajd75csSuZkM5pG3E2GX5Vrpp6j9gbbGXAWNuwyShaEiagQTU1SkJEnxZs8rynRDeW5sKqTW",
  "key8": "3SS2P7uxMDDTT4DthtU6G2WeuXWaHb8rxp3gcen2NKohA4PMUq9nGdFcS8p94KHs7PWGVYptjZ6KcVfxhrqfX8Zg",
  "key9": "22KtdfrkBJo4tVfFWYvcWFfCg3ocoxRkRmG2XPbL3heCyNLxs8XBNBsQCPY88WzHXQx3UXTWDmEDNQngDLJAN1xy",
  "key10": "3brUyaXzToPbccZF3tCAvPzze9fmXrdQBxC4KWPwc9ZJugNuXNTnjJC2KMZKYLxfC5fMbKyELJF2MxpsG8P22X1X",
  "key11": "rNVNTqyD4x4UhAiMnVrDA7U8ZxPDfuYZzNwVzhj7QqWntdY1KnGyqCiFagcJ736ZuVbvsxdRMvAwdMEABP48Mk1",
  "key12": "5tyj51oKCpjaVcepZrx11k745HapcdJMo9nUvSCm2CdJ2DCHAQhDHtSeZbkMuCVZSUeGcaQRXo3EMdvGegx4MTC6",
  "key13": "HRVz91JzSvrF91E9wZk1DCyfXuK1D3wjKp5Z3N8bihUrZ38s9KPYHtoVeyz85sqYza3Fecps64GoczHpHSVyRPd",
  "key14": "zcWfaqoiPgJum1C9zs6oVEQuKyLboogcZpUVAmHgjfz4kqQ5ZBaHc853bHGzB2Vcvy2ckcsUMqU6PDUEkMHpNJi",
  "key15": "QAW4VR4TGajCWre2V1p8zUoiK18j2aBSourpgUADkvkCMgb4uB1WoQWT1AmfUSovFYTgrVdqTmFvrYAQBFHvZef",
  "key16": "k8TeQt5r75ZM1XovpShfz2GVATyqYQWX23dgqPnU51w77EBLpBiiBjFsrSyQ93y2evRVxtjp4DrPLa6rTEpCdeS",
  "key17": "4tjyhDonTzyw2iZPxAhgsfmHDuzKc6MBR6fxB8x7V8QBjxYzWzAj4XP92NYxNyfNzo94GGWXiCMBVZGjc4jVoynE",
  "key18": "29mnAujKPVL7VgSTN5QuZudDfaXfSaMCPT1nL9iCPSVSaH1u1i3oZT9ejq6DFyVsoc91FF1WwciiQuMRBWtpJaNF",
  "key19": "4CEXBTB2Wxc57iPb4rmJzWJJDhLhqFZQin49AMW7pn2E94Vx3PY2NtXGJztH5D3ZceKgr9R7ooLFHawqkvpBizC8",
  "key20": "3KoijGujFWCfJPpxKSZ2YD4Kb3KsVySoFrGS7dFC4qQkG2jvjc6GjuQ6qpEbJdV5V58PpBybxtg5epCYh3fybRav",
  "key21": "56jFXXGo2KGGJmJkNea6cLEqtNVqeAjuNmJYkV8JGb3g1aQPAatXuND3GWzUDrsCGNmabEdtgTz5eeoLY4wbmrBi",
  "key22": "3en9CA8tgw5C48eAo1zFG8CxBXiYRtTFJ7XApDKTVHq3pjqRWhrEZENyEy31Gx5FHgetDxC1cvHKRmbjpGBFG4mx",
  "key23": "3ScLf5VoQD4oNEGzXqc7AsnpuGPhmYheQ3PqHoq1CrvzbvUwSrBn1te26uv1TJcmcLvrg9F7RcLVP5zGWoHaK9Vr",
  "key24": "4WbomCoaKyiZLsu6JnZrJQ3WwcfEN7buHwrsoSXKgch6SNrpZFMU16r99quY7Wt7bt5igtTPHX2wrkMxbVC5E41e",
  "key25": "3SdFTLjGL1f2BMf65Tqmpxq8CGcuRVr4HRCyM6Zr632YKvJPGzN8iCasmhxShz3xod9REWv6sskAJsYfQweuveCB",
  "key26": "2qxsGNUHNX5e7E2xR6kiaoLDmF1JBikBvD4vDQCmqXHPMriq6LiBsDGu5HzckMm5tFHDz61sAzHbAfDCPJNW91PH",
  "key27": "62WMK5fz5YsLg3iJCf2wVvg7BCWpMAPTdWp81WDM6jBAh2xfUWzxdUVJ8GNz57W3vDsJPj3NpxXQj61UHJW1xiTK",
  "key28": "2tsVkGFd3YcKb6vfQmhpyCEUHkMXEwATnmbuk3A6VUQKvVB5rtrz6DFF6hxmYVM8kvQm1NgSPmbumsHp11cSDr3s",
  "key29": "5bBLohc5crDRYTudj1thUqVJ1ZF4j7hEp75bXcrV9iNKJcYcRPZu6NSvjAsNLkru4D6jRtAPkZz995UF8CPzR8wP",
  "key30": "5UdGcRPwpp2Pwhfx1duypH1S2yj4uXSPqAxhanBcEmsMcTJ664kTZhdwgvLa5eN2DJZwsjWHbvpBq9ymDHwshGWL",
  "key31": "44TbYKDDac9UaK1t3n12vS2oxtyDU8gpRfXigHsqbxePVNqemtUjwshR2reZgf1JwGDJeNgmpuXwwoYR4TfNWs1G",
  "key32": "JfmmyCPwxgHG77u6GXEHoNhy93wjdnvEEvUHNKZJqebypD81vwdackTan25RWvgtwtBTAZLWxKdFCtNBMAttt6c",
  "key33": "5N4MYwMBkk3cVQun7wALWoB5cj4LaVfD7bPeGQmCXmhyEGSQP6FzqbtAyktCUHFk8VCdt3HHKE29T8rAByRDDzJr",
  "key34": "gWXR21Atby86PddWSG6StitLhXPeYZgyD3HXbi27M3QPNJdKFJ1UTcKGMvG5U9gkVt5hHiXdPDpdh2z1umugMiM",
  "key35": "QVDZ62odcCHm5nwo2bH5jNcDQoFYJysfjNkPyBBiNvgHa67NdCajci8cWrY5YM2SKLMJiWJ1knUkfuA1FMbCEXk",
  "key36": "5zsSyEPDSopB5piMrW4huoTL9S853pdxXySS5aU6YjwnWFaXeZH9EvNruygg4wQeQ3QPBn9P7fvBtwDoJHq2DZh2",
  "key37": "srBhWtV9kink1yvMjn7ku8uX4EsWgBTEDHkvpwj23De9pKWZ9C1cePcSWePqkHiNpXbRJhdsWNsqSdZ39PehH8f",
  "key38": "26B29keYQZAZmAVEiVjuTKrEQaPUou9cCUosd4CTjqQ1jD4gUJPEX8gG8NmHhbfV9P3J3sGWygnpSqhf3WTeza5E",
  "key39": "5U9UAoNCNuqtDsfELJ96ZEJ9oU7yDwz48w7k4V84XA3eUDekAgb3o55ZzCYUmheqYrtjgaKBKjpC47wLFB44UAb7",
  "key40": "2XfpDVLUbGBFwpkuLkPt15bfF24mYcNY1gmyznMsmEjyJkELtJcbag3vXRYdMyL4KgqVqEqCnhAib6y1hYNcAKLz",
  "key41": "34ugLMX6UHEQ9GMXLHNab5PpPRt7seuFAVrHZa3bqhwJxneFNBfjeQMuYteKUqz7XnnTtmHpiZHjeRJvms5arHPz",
  "key42": "U8tRBhCG1p29kYsyf9i6CUaKPSwRMdob9Lnp4RhtmyJaj9uCwodxSGxM74dCn4y8mLY4CV9KMcxAiGw3amq6YNp",
  "key43": "3qVqQXt389V9d2XZeBZqcBGk9joz1fsAC4bjxeR2CWEJCxtL7bwCvfXLfBUfn5SwaUmYPdkjbehYtg6cFFpLemhv"
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
