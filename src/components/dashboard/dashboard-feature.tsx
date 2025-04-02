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
    "5GwJGjfHXnh2R95hMmCoB5igH1w8XrARRFEj4oSkuhnC73k41TC2tANnXGJBrPREWRkVG2CUgrkcZ9dpcp8KZKXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XP9ERWAsoXpLbDZ9DRCBjKJxsQo8YvAL5QumS1vSwK7RQmUy5SVf58xeUeiA1pmUGtbh2J4RvAGEVyQcRDqHjfG",
  "key1": "3jmyHvKK6WBH3LjraSwthWkKK6dYzWVYGSUPMoR9iDJCk2EzSRgCFmUFHk7eVDVK4ZZy8fZt5mKCEjZGQ7vBpw8o",
  "key2": "3jDeaE4UC5tBaFTJLzntwNjdaabXWZMD8NhqaWnJQLLQN5PHYnpZkAcSLpkminSMYZY7x9pmSZUUswPxguDtNDNd",
  "key3": "3DPfmA8noonG4v7NxhhrLDj8JjkwnruGYdYJqDd83TrMXf3ucu71GP6pY2eEy5xhEw61mdiKF7sU5qnrtNsxaty3",
  "key4": "5aGi8SGgQjrYgaAEcTFbvmzBxPvY89CQEnE6PDAPEgkoZJovgftjoxC2E5Rbxz89pUXT3sewQFtkaKEdP47nn8Mp",
  "key5": "5E1UVjTwcXGerP4Fvqk7Ep5zuut1a77CsJuYneMqz9Yc8CByfiV92Kn3TQB3LiAxukapSWZTWzHHJrStUdow61VG",
  "key6": "3U1grGhxQWRE6DW8LHp2mfPEJ3xKzyLcJyDqnwEBcrc2U1DdN4Uyc5WWeaghXavZ4tejRusjRstkW88X6CLYGome",
  "key7": "4K9Ygi24mE6uBkN32SrFmrEV4Exc71CkF5zrpzQVEAGQAXQGRGvCP5rXEG5TdnsMHCQHkkZg4dyv17XWJQX7JP9U",
  "key8": "4JY6RupNaUu9AqxCJn6Dt5H3EBhtn3id1E7Y15vuLRwNFtPLeyyMTk7xst6N5WXgsJvtPuJgmeNP2r9p6W9nPe29",
  "key9": "3aMxEb5dVwXu7SEJcZojAcXffF7UcYQQRgJ5pTiFzFhKWHTCixLjKo1cc4kmyQ9yTgK2ybrk5sivswrWqvyYq67Q",
  "key10": "Ff7A6BytkybRQqAC5P5nBcHXMoGqGfdcJjA4YSTMJkJPzKoK3759u1bgFitz1sSR19Jm3Au5Hv8m6bd3hMt7HJW",
  "key11": "5KNNxhbwjtHfvQPSmny9DbVi6ZLN6ZU8G2oLvDuUoVqLPpZ4r8mL4nq8pcEjgnRBx6i3wqhgro4Bs1oLCeXyWMiU",
  "key12": "5t2DzaR6RpHNB1RDLbidEnN4AtqdcHoNX8RQm8By9sZ8gVKmWFX5wTP5TRix5amyTPSsdMWtQyK7haZ19xUzeXsG",
  "key13": "4oGJA9FWFNS1htduouB2aq5ewymmDxxd6eUASvx6WPtXQFr6LQCa5t6yJpXuSdLshyvk6CUkcGhpMFmGB3oCHE6G",
  "key14": "5dmPsW3LhbyCd9oGREwNygjWePQf1cQ7e5dSYK3i8VZnv8mtUhVKxp56R5tPv2VVMT6N9gnRq8jUKbVTUvcGnMy7",
  "key15": "gBdLof3FiaU7qu9seZNBcKZAC9t4gKZmgewxQ8FpSqM8r1YXtumzTSaPUgPf7pF4aZ8BCGMHhYk9ZJhr4HPGN69",
  "key16": "5idaZCTXwPrda6nXueWTCmMPuX9TBLHkuCQBMhNycdRCr9Z7AwLMPeW653S5B5Eue7SKubbouio2e9QGdY3VTohr",
  "key17": "3qw3MMsz32v55VTQEE2cH5irK8jg6Feo1NuWbBrCZggJARVFZjZaFuJCw4ZREHDBqbZbsXSc2GDq7N6vGpywDPeS",
  "key18": "bywedzuUZWBVmK2PsiskJjpP2VSBw6x5eXSTiJccJT94Adg8KUo9QNL52Q4TgqyRBQWZpgYoB2hQRWFZeXBRLeg",
  "key19": "5WjxYSTQoXJbeG3pxxAVmhguvS247WC61cFHTwbcXQoiVqAtJh9VsyiBXCLFK8wx1wotybxw6aNSkKR5MMbkCTa2",
  "key20": "3gfS1NWgsgMaMgUAHGqoQR3DJziBk7UmgYkdE3bt2QAd7ERoN3uwyCSGX8YxDrs3o1x3NngrwjY3gHfHeMuUuDot",
  "key21": "3Q1WjkqK2niBaJz3WN3FfRmiATfSKnZjWaX7cPWpf5cNoFcUD26yws3NyfY3S1V5SNYnjDNekyTkZSp6pdLY1ikq",
  "key22": "NpoFTFU9ain4Fo5qv88GghiDFSLEdosgxtPMNprfafs9xZQWhomv4jjrtkwYbzVh6aVTEuhCurf18VhMUoCaqvA",
  "key23": "4E9F2MXNxHBQs3v44T2RdS1LXJGHSiWwFxPwvNdv2rCWqx8TREo52176o3jspMoVZrnLjSQAomE2722FstKo94hj",
  "key24": "5t8QC2ajfx3UbmqEJutbRY98oqAjkeYBgsA61WeHisYAJ3NzV9khFRhRrJdQ1bQ2pbnV9ZnRJCq7kExiNby18p4z",
  "key25": "5KiCcziVaDx92AzMWD9r6ysXz3kynRMvW5nr9CnVTYFf1Eow9CCRKEyjL88pNcLqiTXqrvEH3M25tyXvpFV9r4dG",
  "key26": "2cCy7XmWWBeSRZnB2p3mYm9e3Xsx5cRzG5zoWuqrGen5hMRa9j3nUmDXa6NZ1XcPrycWtW4zYnbcKZau8Tcs6DBQ",
  "key27": "DThh4uSsaJfRi4cHPDwmb2DiVDrbvsEJ2QNKYamgR3AeT4FavXhbzk4EftPp5rhH9mDeTkuL5sFiKzFJtVqvCxG",
  "key28": "4TSUDuLCbNZDe72FEJTi27px54zxi7fpyZ6LMzx5ZrcNASWN3a3tzSwNqXHTHqUHw9NAGM6mRs3upDJVhxen8HfK",
  "key29": "3JcNifzGpPESyPdoYfkNkC6PH2HCxUWQmZSeZpTomerHo8rcQVrw2LktUkLM8PNeARoV2FhpTbQtDtotTXyvYVLw",
  "key30": "4tCeb5qDxYTiRczK9MdNFVfqDh6jujegoAguZCtdkdpyeLoAyxjW91xAk5EKJb6JQ23PZ26DSTgFVwDxBKrU4G52",
  "key31": "5XYjRgiXDXoMiqsErKHTaBwyptNeqQMS6Cdx8Dxq7A5cDaJcjzaHpdGk2bsU8L3eFyyn2HRTWJiyGCgKqQJ8awxJ",
  "key32": "3RsyqvVWXs9w29ihPTrk5Q8YoV9VNoo5z2fDTFenoKHSrwJxg7Adzo9AerinBCyYnpufVr2YWFmi9cvrsSMkyDSi",
  "key33": "5WF5R3y7ibhrLPjrSYPsW7N4m3cCkYGuhrKn2KNUNQuDbpAtgYGErqMcSx7WrRbWQST6ddm5UBgW5KQgF2zWceyg",
  "key34": "55Kvybny7rJYy7oyfcJzt2QjXf2fCXxyWnLEqMcWBFou3jKLS8Yq66SRkNBKUT3fTNAhVNvLmFLKcwrnkme1czuY",
  "key35": "61qkUjHqADMeUvue5dw8XoWNhwmnpXYVpFxmDx3qx4RGbLHUTLtd8HV6JM7n1cDeoacHgsmDjhh689yqPwPjSr2n",
  "key36": "4qUo8KLLzrRGWehPgjZsvy346a8PaLjcDz31DnYeZMD2yvJCLntLz9L9kd14vGDJP4srogdz44eSfZ4L8SEA6g7W",
  "key37": "23L2rTGJJ85hk2zht65TqVciQ8x19qm4gp1m55vRbhTx9s91zvNwFmfQe6BrD5UddZ2zEvzFyf9m2Ce1c874JYjQ",
  "key38": "4YmSFn4Y1DWKQ5W3aYpABrmgJQa3kbNsowXNjeBtfogHXnD3pMqVRNqDHwqrcAQ7xwrqDGy7CwsVPc3qwh87pqr2",
  "key39": "2SXUrXwAhKsNRcu77k1PCpQZ4tPxQR6NrxWmg6D7BDRQeNbcLKp4omBKDtaBUy2pwR2huycmqncR6LUm8t9pyZr5",
  "key40": "5LmnsmvbGQVnqkX1F5VwNkDLUhok1kJxYcMDw5pnj8sAtXZAV67dpvpc93vA6di1T12CR7hkQ5cuwfZQxGicGxgU",
  "key41": "447sEm3r6TJu3GrY5hV7NSpyXAENuLmALKaybeCVAnn59zrapJhXba65LZzGCSg7jCtNPYHeC3y1Tr812KmymjaE",
  "key42": "4YgNJghu6XwyAiewcHW2cnnFb7E21qe7vjXrX3vutoaXAuPDYi4GRD3BF3AGiJgzAFKiTb3L9MY82xMrc2KGFAMB",
  "key43": "3rfjrJm3oX8LWpMxMqx18xNfq1bMuK8ZwvPZJEkQ2axjJrPN9TZQprXbiqo1kyzizEjEamcytirDuwGXXdqtdQzT",
  "key44": "5cp7By5rPywwVekE94puwQ6PwxKc6SECJKtKTdwBrCc9LWGa1Cb4P3swzrRa35K23q6Y2HR9aUDZMGSJjJzhj6so",
  "key45": "533biZvgHcKjG1BbHLYtHHM4XwQ1PeLTKRU8VZVKSuuti8F8bsaMKvmKgPcfM5MJut8s6hRni5vezmBUeFhoyEYe",
  "key46": "2uxB33mNnBp9Y4kuvuMDMopiEyR2sQRdSSJpTGTzuY3RGEvG9zTMYbwHgpajQjVDsUVz6KCy7mfPTSStB2ob5pED",
  "key47": "4MuiVdvC9sUzBJMRoQnmaQNo6aLcEr7YXZmYzEz4pggF6swqyHhMfzM4pqrSLg12o4SCQfzN699QFp9CdSv4shxs",
  "key48": "3U6m4sx36piPfYGTkmv4XhxP3Zk7UmDUdGosXYYWqVah1M9sYmWQdZ91X1DRcrwAXTHByHtJc4TGszeBzqLJueDC",
  "key49": "3Zr5t4htxxjtYXhzJC79DLfMhmb3VJqtktiVphBQZJgMBEDD7NCydh2uxFwBhLrH6AiiP5v5DnRijY4E3j9gVCuN"
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
