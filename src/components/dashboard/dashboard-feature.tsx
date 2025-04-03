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
    "2AdAzaAMq6Fx2qNozX8NqQGBnrv2ZSJXQZ6Md479eDfgiZ8CBx7UWJDEXWCVEmachcdJpqybNHv4X7T1fSZzRS1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5mH3ikYpzQj88jsSY9d5QqPWxqJrt98AhKSxc2WejamHRdSNpC7Fi7pPD9MPZXkxwoRvuuXKYDc1odZR4RvhWB",
  "key1": "4sRjXsA7G9eAMCDzdn6RGrBEX7TqegxoRwWo5LDp4YVcjLHt4nyGeJvWnB9RN6yp2dW3cygdmurxZSiwDFDytrwh",
  "key2": "5wsb52yKp7GSjTLyhBbJp5EPfmwRVDMrNoNeX5QFChNvxXacvmXtSY3gfX7VqZvSu1BtpQGcbs4o1J4fpkbQUpCf",
  "key3": "2TLEz2P8MzLPHf3umZGJapNAJazo4kPNVvrerpVF4beZhRPbXcze1i1CMsFESwnvk1sZG8Mpo8Gni17EBBfuMzmg",
  "key4": "44jiE8UTGThshue3Ad3AJjvLSakwv3wycFPsdxhbkWGEnenXLAbAsg99cSSPrfPFnwgPyCZEqJ2XStYZga1nKvd",
  "key5": "5jjCSomp6BVXHeXZcWoFtEyfA4Zorg2PJLxyRZC3cDL6bffSB92o617CL2WjFqTga1DUEsUiDtKWTZ3WvocQVaDn",
  "key6": "4UubJbzCpUv6GDrQFXrycuVt3HwFX2h9V3gxYePmsgEsXRHnSdwD48AaHa4LpA2gfivhBKT29m7JohFA7TJRdxwy",
  "key7": "3MvnUGhczBgY8rkQCP8n8Net1PgYspFFMVDaRyWpV1o4LeebfEkvYoRQCXKaed7EZKih3fP9x1spRKqNvoJgKkmb",
  "key8": "4totPxdu8hH1MdeGqZofix4gviqGPPtuCCbkc7fC6KyK6UYjimxoKtmST8SrXYP1yXsveqZzJFwBjWy8zpfa5CXm",
  "key9": "5P8UkYR8ADjKGjrYGAywDjP1WJbowQxv3vPEF2cJG8fqHXu6SvrCqY53Q7FSi2btV8JPAR486rJxmYaBB8FeuSeK",
  "key10": "3d6QRdwqoDW1zypTmcm9UfKzKNzf1GFgjWt8hgDoqjxNMeEamQN3ZVbEdv5wpqZg4SBHfeKxhdUqJxi1bME3FPbN",
  "key11": "bmHHYMtvzNyRAWHBXrhW3vTX7nrxES3Z1CqK3gXgHExeeomTKYcwVNoho2Pkhzf4x7DnU4aQ8U9tQHEQjhqCGuo",
  "key12": "vUYJA9HRH3JvKpnNgLvHc8tBVzk9FtcjgdaYqSQcFsAr3ioDAyTaB9vgx6hX2Bum5mps22r2AgBqTipzkwVwSbP",
  "key13": "2sasZRhmSdZWxSnNXodyq9c5Cc3hH6NnrF8o1apyjBx39XQKyEN6NiDu9E8NiQFgVuTQwaFyb4jhfJo9Fx55W5cz",
  "key14": "4jr14eihcuBSvLGJB64nsoTjFHWqMXw3yN7MynKMPcaqn52Z4EFfsiaG5dGfCwKWZii1N8yiwDtENvo2UZfR5ZLx",
  "key15": "4aVt6PTJufqeAh6TQUxqLyWZ8heK7AUGpJC93R9NCECh42idXsDZye3VvJVuLMNMBT3UbtqyJrNAciCRDHbryTpX",
  "key16": "PghAqWa9KVWhnTdKUbYqpSwp61L53oCkXaWH687oJ7dxzcabe8WKzvsBM77htLVJ4suHwRbdWPNdYqHabdKjZHo",
  "key17": "5UrdAboN1a8QLaRSAvGd5AFvqKYbHNWbZ8LNiUdhRAqWxjzeSVN9Ca2aKfPPDKfKmhToGNXToamjktT1fQRzMyr",
  "key18": "5WBaUagTLxD3pbVmHxsacpGBHRbkKrnk3nqL4pBxsj6z3aJRAn6oBwUQ4DXnpnbinwNnBYtMYSx5Xmrz3pBKHyXV",
  "key19": "42z2JmDYU6A2vm7bTeu6vuS4JGS2sk5QE1Wghb8ngqcZ858hoSDhTfFJDFfr8HKvF9wk9Lp5cxEbkbYE2RiBBRQj",
  "key20": "3yTHVGNx51TtVVT1NLWpoqtZRdzGTs59dffJdwhsWshEF9Yr3wWAJ4asSwSanyvG2tFC9cQVJezfUM1YTzznEmjZ",
  "key21": "5anUf6dLHzT1BsCLH3SJ22dhy2eu9Y75bMbEVqWxCLWF4YP79xBK8B7jo5uP4zg2n2NpgCwM1V4X9kQW9yDFMyak",
  "key22": "Yc6ABmcDARadcBf1gEyg3MmYWQxcLYpbqiZtKjbLic4BDG9Kp7PNiaPP5GEt249G51tZUgJMGX4YmRoxmcQkmec",
  "key23": "3rS4Q8ygXGqVQVbZwtotwnX5JCSTvT3shA16oCLd5XTn9aUjXmZYkQPU4eTcvGHWvvaQE6BcJtP9VQBfUiDyLfKF",
  "key24": "28wKA1baLaJBNAAeHZMBRGDQZRvA1HTpAXNzgeB4Rhavsm6jhB2HCA5FC2fq7eubgPadf5NCT9GhwesoxCWrCJW7",
  "key25": "5M9MJrbTYsD1Ur2GkB1q53comGYPfDbeKv6jDKWqvZezP3VFm2EwSZbhawwiyub4BPiGqcEqhxBaHyhefeM4gq59",
  "key26": "3ozZid88rBBbgwYGhq4kQWi7UNo4CBtcjd9omTw39hiUNAXTHDbKVMP7WjGHZ5h4gMt4dcFhEPKAFLxJtmhaR41U",
  "key27": "49a4Y6NWT2JcPDUNYdHrobYxzRZtYusZsHHYXAddE341FaPq5vQFAxLXkaUZHL29TvFGGsvJBs7HYMmtejtAdUCV",
  "key28": "4BF7rXHcmAF5sLCayhpubxCSfggeTTcwQ4dGpsSejVijuqSogYkq3FYPeg5KSdhv8pyWqezV5AAGbcDCnVJ5Tvz8",
  "key29": "5gsBwfmETaXKyccXpNUQrJf3ZacH5hChzSV5xpwQ1SXxii7gfZKAJsYfs7ZHmnQmuSd2EUA23c7Hios45wwatmJ8",
  "key30": "H8DkjXpjkjDbdZXM8zfv8ePDxVxnrVP4NntmPMiHzN9KF5u5vbFyknKPVFLjgbw8c7sZ2sMwQMFvDxkN3Y42fbD",
  "key31": "1caRFAkFoW7UnpydaoXkWMEVqPaFUnpfb6EfqhavAx884HXW6q2G8xTgjqUPov6xXagA8JaDexaUaS7MTdQP41U",
  "key32": "43BrYsEcM6WLUS5wu8ffM8afBXeEPbXzEwNEi3iNqAMRNP6tuqDByWSsFmksoZbJJbp4tPPomJC11xtbL1gB1yBY",
  "key33": "5fbiw8G4AQ9wjeENWjzMLYxDjvjUbzh7Cwqhuopzk2GqQTqMxKM1bFET6B68xWHmgAQvcZNUtdfWVufq5dW31MNX",
  "key34": "5B9MncGTUtXKyyP9m3QYMvtrCbz9ABDZAfeWvsVBY6sE4PqjsCmft6kzooGgtHLRjN7TDuEKDg4sTtiqvDuL6c52",
  "key35": "2HxYqyq691SauGQjLxgTavmivxMCiDjuu36skTfAXwgfqsDkcwQ1ibqqCY26Tv74GBeQTwMEwMLVboCVZ2kLP9qu",
  "key36": "H5xnvM22LRiSuvmEcbsteLfiPXjyTNQrdNaq89sodzxQ5cWTsG6PCdce3yzkC4xQGq9GTDnChJxhMxF5QR2ifbN",
  "key37": "5aPZXVimwtEMJgGsKRtuQVCyLgF2ZotVSCh7m9Jv1bp53qfgxk2cvv46zDbu7jX5WNV3H4prDhXjP3bLmRMpX4G8",
  "key38": "ge4NMC5etyvbFWMGCsuSkeeNiAG62qcsE7G2DvwrsLBaJJdFCm2BtBFnNvqymtWbd4Lt9doHFuwbnDWa3cAkgCQ",
  "key39": "8DjatjgYoNkPde81NyinEcGER1CLDjLGv9zynSfKggqpbpdjjZGK8P4BH1qPpKgad45mDbuRF5JgKJE28z2u5Mq",
  "key40": "5wesyrgo5rq9ScJV79NY5QJp5SKMC5bkrqNKa825vQJenzb88NHK3XNviFauobv1gM7Q1EyFF2gmUVMWhwChZ7Fk",
  "key41": "cunYnQzsekPwVrx7SbbLK8cakdD7mSdo1uLVgHWXKS8xbru1BsFp1orpMiR7hp5owGBrwytiD194S1q4at7uke2",
  "key42": "ZzSrR4Npo8bLEXa1jNpw6cJqgZcz4JLogVkZmNNXpHuUnStLbmQYkFHF2Ghv1vbBgKHG2w2HWFcnk4yACYzjGn3",
  "key43": "2DfSP3mzZ8fDLLofaiEVHPdxDq5TVgMtKYRPzBDTjGDHngHnMFrA6jZDuLwRYBGy5e8rVAxr3wEKXQVMxE8eD5fL",
  "key44": "3h9vd9epf1Lz6zhCmn2AM1MeNFwi5Sy5VtetQ9s1z2chDXee62xB68feRDP8xZk1pw7EwQ4BkXzXEdhzyHMz2CQs",
  "key45": "3EyyFsMrbsriNQrVRkA8ZPgXMQdQxfHgSpgow3t7YukKeNJwNt96Ye5c77HYDepayqG1NnafE2ifXyQEXYnsnYbd",
  "key46": "62axVpVw5pvHD6baRiGNFA7uPx5G95dJ43eiN228y36T79rPRfysiyvWmUhJtZhu44UxoNAyaA6qVrAVs916ZUCq",
  "key47": "3g8bTuM6hcNwDsuD8KREsT2pcBWUUXD3bSkLj1fHzahhf59rTrvjASMran71gVDw4MTgiSGUQFLCTnpLLDeP6epA",
  "key48": "5DK1d9DJckvQR2WyqVYcumkz7Mj7sqha4H5MgoTZv2a5ZW9YTv7T1zdF2F37AsVfdoiqDvMiJiqKtC4JuZg5A3Jq"
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
