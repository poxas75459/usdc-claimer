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
    "3UAQwV69q1VT6riTTEjrJaPfyWmmifq5Vfaj5rkZ9CyjmLevgCudXGHVEfF4nes17irVTcNmPopMYE9UrVheqMR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtHfZwdp9xNHewuKjE7R4SLaP9nL4xrZKsSN2RWYoxX2nyowEqnTndgcjPTDsBwvZXKg8bXb61nmemPVe36GrG9",
  "key1": "2cxVM9DqRdqRXqdV1eU2rtQrczJebaTEyeMfN8ibiSJYDXUVb2HWaWnEtQswxMiiKSM2apwLmWaPKgEapwca3wQG",
  "key2": "fi6Vv3BMuxtq9CpBXUpDLPjLZUnKrxMU2rbusrC2TC56KfFActycUtU3jBAs15jswACvejCiBku79hrazWN7dew",
  "key3": "5jD29aTFjSC2nv79VFQg7keq6sDmGSS75GvzHWbRSDHDj5jvRYhr6RcmMApgqSrRHxW9wuGosd8MfJFwuqSVoFDR",
  "key4": "4mUvSSVeTmyQresRhJfUysbZ3RLdRJbRZXXiy2ErjvabSFYBDmC2Ppz5hxTL97qfd9Aua3A8vt78NHvBag7TnWW5",
  "key5": "2DbUweNYmnQPEdctAx4PPFm5Wdf1yH7kuQzcVMy77BSmDFh2FgjVFfiqtM57VqC9hQQ5NZMGq6NmgmBzHqeB4ZKS",
  "key6": "5YNBGSQiYM1M2jCrva6dnWKUDbc7XiTVu7iJTd9C7UDSHW6jaFe2JtY9C2KoKAPKz23nHs1G7F1rtg7JLozxrudh",
  "key7": "r33WWN3UuGTeW8p32ALDnswwb9zwkFZeJAPbdKWDCH9J19xH7yPSTTPDcr63SQiuZ1hQ4zJ52P8PVdokv7a7o57",
  "key8": "59AHtCbPmTr2tC1PponpJqsKYMYkZD6T6RPxcAvEsVWhTTps4wfmqu7VyEH9SNMjauFtQjwMxbtkekTNoLgJQ9qN",
  "key9": "37f1f1RVv9o352kA6Sj2iME1wuyNnWT8mfQRL6f4iS86eKWyEtkix6BDbB1Mdg5eQ6GyQbDPSAtwtRcLcgAw8GrD",
  "key10": "2VGN4yShrZvW3DXWxote4HPL634qUsHZBAcd22u5FEfkvdBekzNNYueJtV7rKLaqYRsVULbRxFhByL9iM5Gdaktu",
  "key11": "4P4nozda5WWTAzKKn7T7J6pTon2d1783roRHLrn1p1QAq69SF4NRJErCwo8bSr49VBFSmKTgccVJLFZuyHgGbL53",
  "key12": "4nRZusj6riCpQwn8uMBGxFeVHCPA81RoWEu39y3i2hxKiebU5UTMXhqLQTNVg3rUXMZDXxp1X75TgCropbQWaU6k",
  "key13": "3mxk9jP7FAiTKdsgkck1Souvn3Zk4PaHo8YCWoSz5Sn4mBupqcVEfDRWMu2MAvhZD6iJdwaS3p3TC9EpnAZKeeN5",
  "key14": "3uZDp5AzAAo9MLA1uV848b3Whg4thwEiB4E6KWFd6mWoMbzY5sH5f8tQzzuPqyRcewyQiPDLha5oE6LTDZYYcizk",
  "key15": "q6L8nEfoX7RGX4sXNybfwiFPEyHrK7oJiNadT72fvwdwJs82mR4pUvoUJgog5gzJPNiHpwqRmgMWMKxd6P2Qqmi",
  "key16": "5wQxKYSGVUNMV6JZVFfo1VurrGvah3CEog1ZDsYBtQiYTDU5xXZTJe73WrWfRBUqHsCYtmaHMrS8tQ3vaQ337EBy",
  "key17": "37Gm75ppDWhfBnjcgC8RoodfGq1fDDgPHb7k2BCViDBWmACZkbcJXo4z88HAWoc5Fqstx2FfwEP3UCgcqNdAyM89",
  "key18": "3tyi14psRkYBGvSKATvcxHcEHzXissRvbNc6jRqYWiSV1xXuA7EC7Gc3K4W7MhECdPGfsr5Z22AbQUpB8SwPyTVs",
  "key19": "5h8suNwjyXRC2iYpM6eESRHRH3EXSGNLFdC2VvJb3SWnv5GGMuHq38KbGCusWjpBjadysfvSgHqkaAnKZWTS7qwV",
  "key20": "26YkvkE21sjQUQZC9kKB2Yar4HkrK6tpS6w3bb78t1M2QSEtvaCqmqEjefkXvU12YdBrzHXkEsxDa71MZpZD8XLT",
  "key21": "Cfu6cZZ4uCofwgFYYwHRo4GXmkmEHSJqx8pjCsAAynbBSGC1gUqQ4Ka4r7Xn79waCmWxwBkGcKYaXGZxcKR1HS6",
  "key22": "2DePr7pujPNWShHyqcQxAFVFrTFx2u9YQcy1Ni34Wi3EymdCyASvkzVS4n6TtW9r5rmE5Jh1N1eHQWDfmkxZq69q",
  "key23": "4AvUiAfWiUnGXAokCFY87FHauZjCq2QX4kX73HAXJMMJQ4ufvHoCPngr457FxKvj9thVEGT1zvxe95RZV192DPMy",
  "key24": "3gfGV6Qd4eDjvE6tSjuhYaAauUiVzYwCmc4zX6vKWcpZpQ8cVfuhC65EeWGwgyxEj16sCiG7tZD95ds8rqVGKWAW",
  "key25": "51k5hD2sYEkPY5TrLkZdxreQikAZGmwf5JNyvyRKTpTYt5jx7PiLHjaP2anVp45NgQfkhrWL3LTxG9qjWL9bxp65",
  "key26": "4eJZTfj4hzfFAXMS5xD84BH3BqR94eu6B2m6eRQVmp85KhqNLpcEboiSrrs2XEajbftJdbiQRixg7pNQaz4bg9b2",
  "key27": "V3fMDqpPwm8poroqAbZjAeV6gCrCLDU71aosqXSDBwCmETkS6SXDT23zRzJpHcPPPkUA4gHySNwJmcyeWCE86mH",
  "key28": "3WvF9hX3og5KucSnRUy72F3CSBRDQKT5pPVJwxTsmregx1uBz3eV9nM2cdsHsNaG7w34ixoRbcE2LkxrCA76EYYK",
  "key29": "3CfMNcbz3Mirmp6s9V3KACrasvihVSnWWAjFR5puYSEeJG8LjS78gCBvmZTX3G7RWetMgRjpw7JFmYaFyCdsfQ4N",
  "key30": "5P8kRbf7iETuQ4r43Bo4Dnn8kUyHsVq8fKNQsH5Au7E3H4SCMoFE9SNvnGPdzQLmeBXE7cV3qQohdw8JRktmhAUu",
  "key31": "3MkSQcr2MbJpGkw2suB2mBQbzdG3rENZPrhrQGQ1r4RZZBagHgJjNxHBsufjN5jpKYS9nKsfaCqBDFAnmzXBL4J2",
  "key32": "2f7m3YRPgvsCucC2btRb4KyR6Q5symd74ohXCj1vq4q2yFwa3TL2crCKyuDqVRJzP9PdyT8Aywp9FxASZy25Nw3L"
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
