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
    "2E74qbU67r1GvtKc3yozWsTKRVCYdy6ZA6y4HUA4f3dyAwvPp4fbh82xqCcapYi1yhZJ6YArZW36W3F2TBDHoWQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbeic8x3qDWrsK9oSifi24RBTYRuaCpe2ETeHn9YAB4F2bnEo2VCEcBmjSxU3A1n4ngc3kGpu8QccA51LXxDtM",
  "key1": "2JvUSadzYwtvMYrTWCmFx85vgumFFAZyNnetUbREpsFzVsNqvba1wdLfkBTR8cts3tPRDiC4oFx6ty1VtaoxuHPH",
  "key2": "49xTDCrBS8WgX4Ec9GuuG2g4qszNKiAF5uiDeAgTr4Ph6j9USvRGdgnYAQDpbQixWNXB3LkXCLXdkKiuMrYcoMhT",
  "key3": "3m5DCL1jPgXxYAPykhwrRVMGEt4x7i3R28odLcxVTPzJiuDWn4sw86nNTJeiRdg89EmFCCnmsWp9gwfP7bj9q1yb",
  "key4": "2jTqNm56VZSXiz5ENzPWN5w95pmzzeX3gv4D7sXuGAzCLgkQ5wUNiY4CRsDrZPqwJpnP8djCMns2bKP4YYh94tP1",
  "key5": "VemRoFKs2hZHUgmrriq1u6UQy8YdQrNWTSpUUP6qWLDxmFE3js2SRvzFRyYsfgK4WtwwCkx8WDG4UYtZYunSR9d",
  "key6": "51NbH2tMeizr8V6jpzZkSMgKTiWhxvvrNZdvvDp4cFgSi5vMevFHFNnRkjf7DjRY9ZyPbDDRWsNbqnAWVVgzpiR8",
  "key7": "soeeZD5ZiDNro4qH4Z9tvuP9dEzEWNuhHYTbEE5vZaUH98674biXy5VDuswWEKw5E89XoUdXGWgvn5YrC63CR2j",
  "key8": "5DPp8G6ftbD9TbShnNx79BAyJg7SzfJrb9JsW7Bbj2GxQc1JomjuTNJpr7XERNuNY63gzUbBoA1xqXs3o1qF4XTj",
  "key9": "sMKSi1mAtYDHjWGNJqUWxmuYPz6hiHe3mXtWRzr2gc5PocRXruxPTA3LYJDzmPwo56Q6Cg743jyVyRV1GQS2q8R",
  "key10": "2qyHfsafyPk3qfiy3pQ5RRvxB9TYuk1oTTPVtPCSyjKExc95gZSZTxhkLfPcWCPYL5JX6qFEiP2KwFr23ortvvGz",
  "key11": "3RMSqQmcWSgHySJo6UeVZqvJLCYr64nVr5j7eHBkBWkMvPgkzGoyt3ZGrb7HQXZht9mvUFUNQkTgkmgBTpnxf9fp",
  "key12": "56XEU6ykmkvQrf1KTgCmKLGBB1kZFDr1Yc8SHD9sFko2Wz18g8jsyfVE4rPrqcL6R3Gs86evodSVbTYLbeoLpPTK",
  "key13": "wag8EKXMMx9PUmVm6PskUocZ4a48Rhjfhoic833Wo2Qhsys613KazM3uf3SZicxbNcJikjMNNzqXDNKG58NBgXE",
  "key14": "2dSSi85TDkAsBym1k5XWpkojCpc5v7imFaYb2r4N1SjcWD3kwH1rALTekqnbHFgwvJGM2GN8FQSrhQQHtqFmUuNR",
  "key15": "5ws1PaAq6rDzAj1HzSDjvzPP6Wc2Z5MfyLgUX9kiBj44Caq5pdyJNJbStin3jr1AKFC8X4EtV1BzuoDZAPPKadE1",
  "key16": "2mETE9NW6QwgAowMGp8nAPMGtqVC15nZZx7U9CEkGYZsWV8GksTCUm7f2A2bAxsev5gNPchPD1TBDucCCgovNKsD",
  "key17": "5DaSSsi5G1b2Zq2utfyJJSKXrDNc5or1LZfi77ahUesi8obpy8rMkHyZLQ4sp4k57qw6CdCC6DusFVuYwkPtCcYj",
  "key18": "2xWDGDnSqxU1ienGSszGFNkZ3jM1yRPeeTLzmyLP6YxPzde7YenDR8mWnusj2bQevGGJ45QEFhYtmt9igAvvBshi",
  "key19": "5ChqUZYNxhjSuErUs1u8HpNgNMozTDGgULXaFJxyL81bNkHxYEGwwKKp4ZrMUZzsDYhwNQYY7g5KG9uT8B8x92dg",
  "key20": "2LdQkv6fPqotVcxkfHh2mZQqTbrYMq5if2giaxEMDzojqedf6Q4eEB37fwmRfq8aq5K4Qn6dsyuwnEU371QKfWCK",
  "key21": "5UEeWDE7qi2VFwkaYbTFDm7aCMvvK4miuqi5sRAiidsBieGJEp6QB59baq6T2Hr76KzBJAbRH59foVz3w63ZTWiq",
  "key22": "dWbjFJ1vUs2PmPQJR9rWPo1uf5x3hAju7QxUvvu79GEXaHajYYZL4U6esLk3MqP7cUFBHbCc9NHGCUBCcqRHYSw",
  "key23": "UsbA66zQYDexyB9r152hC4SwMeEphDDRBLZZxa15rZzYYGo14qHVaeSXF288zedDP561ai3AKiH4wVZmycDKJj7",
  "key24": "2xSL1VLGoQkq1V9DDEtVTXpq8WtCiLYZAu1QeN1Dn1JGE2FAUiywuqhhjVR2m2cr5YzNP68qA1HpNnLDfcvfyp4T",
  "key25": "5A5PhuVnzufvnmWHhHn4XiUiGh1Yp9tnWKEJYoiww75xeew2w9XfRK3Wkamms9EF1d2GcgHjv3fiNfyvZpQqwCJa",
  "key26": "FMu3UqFjhkXUS8KbtBeSVM5wHsyatSiFjFbDffnU4mq3DwLF9HVeTWYXG1PYCfc5WVgSoHkXFoXF9DeQ3hDV5oa",
  "key27": "3X8DWEZyobyvAViy65GzqriPmAiZwYgtZPsiwiC6f75jBN2FN7wadN2QUuiXJQ5dYbPoePCJNCKZ1tsZGVQyfzrw",
  "key28": "5dHMr6cr4sB7bNqpiGmq1sctB2sWsL8NuBeGTpnjopHDbGaskhBESpHFbcxmTzhHBSWXcDa1prSof4ei6mfzLLcm",
  "key29": "2VYCG4AertNVvJqmVtdykZQjdRLe2Z1TG4W9hp8VZURu1qEHCTwQK5e6Vzbiu43XUDgRhDTuKDQRg1NDTD1riBn3",
  "key30": "mM3fMb7UvpbnnTPjKotXrU4PRnMxcJg86zmiSaFxmJiAM5QPJaE2utxvc9SsuPimkwNHMkrmUtcNC1gz82TNkt8",
  "key31": "3DNWafS8JVuwdw8L2R2ijnr9n9ywnSZS6X4Rwi5F4fcRgA7fS2kXMooLnNFLBQMK1USZDXpygPQNiwnAEbmCFfgH",
  "key32": "2ZcvGMijXeCJGEuCqYRUBThjg4jvgGiRYFg6PL3fYrD1mcj7DEJzuEGri5yxa1So9cKNBWg35ksSrRRWQzWTcBJr",
  "key33": "ZahWt7o3f8StXmhGxPGd1FjkvhXqmDBkz3dDWPqRMgvxsYKJhh5ufQegp64AVDTPiPRtQvc3n7ynv2s1BRxoins",
  "key34": "3Yif651KjnuzaCR1ESiT3aXxvngZuD7oKixmvc6PwgLnhkq3jbt7dHtcv7KANPGTPZghmqgk9kxevQtHnG2YeBkh",
  "key35": "5LdJwz3w9RV2k8gqEU6uh8zGTd2XuELxz8b8mZ4F6xAL4N4yZPu43Qx4fncugjjY9WssNFFS78eBZBeC45RrwpZ2",
  "key36": "2BJ38TxR9JcZ8keETcTEHDavJTvMK1XFJL8Yjmj58vreXKrab8cBVChMuzQKGzTqNpY6ShENeWxzoFiVWawX2gP",
  "key37": "3VGAi7eKAJXGZ9HZbTcTPZRYNVW5Lf8NAHg1NU6ruYMWTfovxCLxf5QX6wpx7dfaegxQq4Lia5m6my2FCembV9gS",
  "key38": "534TMuJTwJaziCJg8gqTy9E6uGUYwwsnwAufqKS1KHGUixXd6qNVtkXMZoCFPCmfv2bbhNwCc4SMAGkyEybqgqHB",
  "key39": "5CYUHckaPNBC5zKGbxEgUq96rt1PxGspsBw4javKviJPaXx3JbyjXLxAHUHfELrpSJVQ8x7R7KxRNgXvukFAHLED",
  "key40": "GbdZAknQBZmJ9a48d4QRR9eUrGuxLWAeoDQnssm4S3HDRcPLSLvmA8YaUruwUR1hTNpaR7ekNqcy4DtwHSiyGwF",
  "key41": "219Y93LBnS8QUWzJNe43U7JvCsL9Wcup24LwQoPhgei2RLrXtzQEXEgwuvUhsyDtM6J4hpxntAQ7ravRA2GBsQoE",
  "key42": "3oPjXSeUQ89jR8xM5G4rTaa4bJC852P7kKs8Cvoyg7Z1j9ksTCsA6VnACuzdNqX1Vxwr5QLS8DBKHyTxa1UEcxT5",
  "key43": "53WRDUhZBWYs1wbg7m8R7kUN6LXdAHpxTMMWWYSceeUje4dFUDGL46jjsd3hnHg2jpCxweSVb9owDJbTKPKj4grW",
  "key44": "zTS5gawk3cBDoYdmBjQ5hdeVyiWWFaRXpZEpRiSVaAhiu1nAycLek12V8ALYoAp37B4rBh1N9vKYwMrBDErqxts"
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
