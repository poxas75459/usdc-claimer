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
    "2YJ1UhhD3mcKPPwbJ7abHkFRK5ntTAwjKQ6q5FHbsaupUK3jecirgHW9jvpZZm6ipb8c2vT31vSfcnZVsx3m2QNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMapXpSDYqwZq6BQWu9aqt26A3Ny4pAerKk6v9ojjBuJVWxMJEPjxbDwxKt8QNHxP9WYS5T3SRk7aTth7tDAK8d",
  "key1": "K1BF4rNNRqQ6zHb1n6GY67Rosuq1HWMh25u6e82Joeh2Mdak4ma6ttbrbY8wkxPrT92mq8jJm53VgywbtBgJdaH",
  "key2": "Z9qdPDaQz8HpENHL4ZqyUpNHUhUvMj6Ld7tSGFtGAenVTM7oY8M4P83jAReBuXJ8xtBFVndPQxGa4oUdhdDivnC",
  "key3": "452W9Bpj8vdHo499w89xzsdxoyGnCXQZW8imYBuFdcLnmTUDpJm6ruyQ9UFVwrjM3EEuiu46XsX1jhVZEx3fWeoF",
  "key4": "wUeKsF4T4hgJ6mQi6hh5XVqsKDGCoGLhp2Z2uR4px6uoUXG8HLR1FE21ZSXMEuoMjtrReLcZLLA9MwuSx6yYQjX",
  "key5": "2v4ePmeX8TqUY17B1baF3txoTLMMqGPVmdtme4i4wNM67SD8jan6mEyBibwbkvYwhdBY3R8gSaLNiA6PUhXi1wad",
  "key6": "5UzyBX9bsMqgGyYsmbBHhrbxDvwtgoUyFPnzRiDTUUFPEtiPKwB92s8eXGyfTh612okoJubsMwLh7rKw32SDyCSC",
  "key7": "3cDwDqXbDVJzTz4GeFEHJj6xPPR12gMzjM3ymJqboBsggaiKn4MfPHXNfjb6dB6dgdnbBPjkXRdNUxsBSm691Md3",
  "key8": "4FC5WkrY4Ebou5BEo2Q4YGda6qb9gsoQ5c9DV1tXxPfz1NHwFTfUzg72zCox25hu41g6tbzbasBpVkW9tdMNBMJN",
  "key9": "3q5nebbcYK4g1qUKo42xe88FimBKbT3x7cbtifM4PJcXkbkvyQu59zWtaNiHoVwTTsuXnCuETc8kFXXqbBzFC5xw",
  "key10": "3KYhdP6DPQaXX2FPDhgQ3xXL7vVeq3QiMb1pb9forPFeq9oBJkgNF7D1ABtYySwt441fFLk4RCKLPDd2xm9ZU58K",
  "key11": "3jsUimTEZy19FWR3yz1khbU8Eb19PgLSMFW4uaZjLnuPSC4BEyTv5xMFhmvgpcXGUZ7nPq1ZwhyMsbmhexxoJawz",
  "key12": "3PcWWCgQQaTsnMVd5beJCd83M4S1XSCB6MHK8TF753braHs2KWvtE6biqg6ga6itr1oeFxJZaBJLyMymks62jSq2",
  "key13": "2QtUcryGr7nVGPaGhtizbKDgV8v63h28vovqFs7c11Egucow3Xz6eqPEsu2bKqunmewTuEQjk8QAQfx3wjnrK3aH",
  "key14": "z2BbiaJYatM4CHtuydWNx6sDWNgZ9inqTncf3fw9Rru2LpUVrEpReTFzcZZeYiRsSbKSbHdzxvf6JvwjTT7s458",
  "key15": "4v19qbkV2XJShPud13rzrTAZE1sGba2gK9HMV3AnC5Uyw6SfQ9g97AjQkQC9GTUm1tvPNmdsEjQtc9xghELby2Xi",
  "key16": "221roHMpL2t2Tjj47J1zbWY24jEemt6keSXMgEWoSCNHYE33i9JytaoQoPcyZFdNDBATcvpeYGjEm68yd6ZcWn1z",
  "key17": "3Anrcm6hc4qRta7Q2kKiPB38QZq5urZxgkn11xzzujVGU2WTENWaVBM3nzFz71CQ8TmxQfwZ3gsD3AomqA3EuiLL",
  "key18": "2zqseKEy2GchYc6orzCj7ZTbxSdtYbqD2uACRM2irw7VyaXJkpXE9b1x7xPUuEkH6Mn657SE4BfcuY5Y5ivm48fy",
  "key19": "3qVKxAWkwzhz54rsEa7P5Y4sZnyZ79rppUu7BNcb87uTbERkCBzyNUQLPAtzNmYy5tUxHcHMENpuM5LDAvmdfkPe",
  "key20": "5jkArp632VCmhU13XVeiEFQaNpnheTQNYaZUm3zkwaqPpUqTBUd4XnvV2gQqjCbCifxxoiNJxvLqQhH24GMdFbzX",
  "key21": "597WmKLitU5tovrv76DhPxQLeHaFA6PJCRmroqwVsS1rme3mA38npvB2CLCjWcrxxwrcfFWTmifWm51e4aYuTY3N",
  "key22": "29FhNPcium61LjNa8f6m2xFc46o4acx12n5b6cowc5jpNtKxcHnmPTCmrGkybdkUSNDg1LknzDoWomRBgxwjubLq",
  "key23": "34VyjTZYzHF5usXUaW1ESvqE1rcC5oY2GWU4Zcf62rH9tdsQdinwNy3NoNY2sGfbjYAZaeh9pFsZjXEU5zC1GSFr",
  "key24": "47dGQkaGRyYC67N5tc4D2qXSJ2SMRmCFciVGfTdn72g4QtbKhBgGgwnbMVpNTaGFMPMoWj6obtY1gWgtzc6NYxKT",
  "key25": "5ABGYUDLkBvU7BxvKdUYyWPYshQFdoQWJFuEFEnK37TX2R2fS3LTf5PFBVUwpoh2BkbTFtzCD1X2NJUVX8hZD9N5",
  "key26": "28V75nJMpga27dokFgTYGeXkyGRamiJZjU8bqTyh3DCJ3GF3JDCVDMzyGvZm8qktJd7RMLuTHLSptY5ioHxq4bMg",
  "key27": "44CSs947k8qNjzsetqYb5mhyPAwdQSgerK62Yo5MTkyH4ZvB4sMjKtrwECoKn8zUAUe4eG45UB7n8wTHsYWDq7xN",
  "key28": "3q3RNLDR4uHicLkDHJcjrLE7jmzLhhF9kuoJAhVfVhHNpwKMBuzzEhmySMsMKVtZ7jz6daXiLfzSui4W5ofFqSGg",
  "key29": "2MNmRV2jp3va8rcxgDPatfyz33DFe8xVxH1oAmBLgNc4iu9Pt57c1sj1og2hqY9iNzCKDPcRzXjsWydZKv41UAaz",
  "key30": "2TLU5X4ebeNtzX3LYkH2TWNEkiFnmYmHthmoPkV2HFdnmLTznjaKZFGMk1jRzRNpEiUYGo5maE1ttybpXa8R6hfQ",
  "key31": "37DdzQTJrAqThgKNCiYNPHf1KHTkK8DcHYkMrjk1pcAdnZh4ft4jUUiiZcc5ZNHG8rGstQHVbdF3khbxsoti3Lq",
  "key32": "uFJjN6h4hrNDwkDsVjyQ73YoRBsNR4Xdi75mmiKyLMMSXP1yYCJwASfLYfBoH2vtHj3P5cVzyGvJuZnyydRMUDe",
  "key33": "3KKr6qpuN2g3oQxwaXcQqXzqfd8Eswp3M8HAaierL4FRuHPCRn5fprzg9dAzrsuLToc5pZuvn7espgfNbNBQ5YJo",
  "key34": "5WyJigpcSdWy4hET9ErD1YrbC59J3TMVTxWXEGH7cYM1Hv8kUkUGmqscaMveGVLD5Wj6r1iJr2kcAp8qXd4AtnQf",
  "key35": "3Uq4DTw8PADW21MCGrYddeiGJLYSu15XkpKXSJpDK59UFxjG2TA6rqsAY9gFXxgjLmzqjpZMUCk3GCtgjFpmyvrE",
  "key36": "4t1zoLkHbRbipEBfdC5YegBXyAWukKQoQBKrF7MhHwx8i8GUugm6CXHPDV3hAGb3EeSCmTNAoDWeipn2X7Vv7htY",
  "key37": "4mB7JQFzGHUYCi1Z12JcEwaZrhPNoM1bxoFDD3TsyogVGXnuZZp87Ex3su6AoixRL1J7r86iho9xXfWEGTo6uxfz",
  "key38": "2MP8WL7mi9JeiwauhxeAvxEAdrr5Liq6LSMvF5oDDLd8KZYzQrdQPy2KgjEXquWmM2Tj8yc5rjg4qqxn3Q1XTmCx",
  "key39": "4ZHZQXTNPomruuC5GP1voC2CErEaA2CX49M4QRuGhEAsTcM1GZzFA6qmPDUKM5bw1vs75XzwpTKtjNemibvBNNdx",
  "key40": "cA2TGcF24zC1R9T2KK2qVR4f7n1WmVAMV26sBYRcWojZd3zaF1XyAAhuP7Qh85js3zjjKJPepG1DrXWN6nNnqKW",
  "key41": "4G2dMzsVtundeseZkoPsoFmd9EGbDQHoBRtvCF2CyGoBHDbZAcgmGC2PVAarph8VSxriPPrakunspTWn5YpqbFzz",
  "key42": "5j4LQCC3Vd4Xm5JY5butrCdCM6sBoijqCJUu3N7kuPLJxoES1qMrvAcbsKCzNWPGB1DJUncQBCuoRbJsor8NZzwj"
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
