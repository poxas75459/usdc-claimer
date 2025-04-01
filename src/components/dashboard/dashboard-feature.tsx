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
    "5BjRLPaKk1bqAbcDnVBZXJVjoMSd5TY7yKWDTsq5gYQWhpVYqSRB89CnSaave58Zksvmyc6c6ANVSusgWsKwPgsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmTT8TieRgMK47qKzjxn7zwh3btnBCDHURgRCUJyPqXpSJg9cFPS8XzmBqcxohV4Y5xnzHvsJwndB4XzVmSWknS",
  "key1": "2VX69e9DXp8Ro9HJv3a3ErZd7MqKAF1DSaxbEfjfaoGrBkfgwt4Dh99etxT7wTg4gBfuCoEvGTiEG8D3rsmZLKni",
  "key2": "5YcaCR9pThNPcvMSeXtHFwTnvGX9feXs2FTyRR6bQy5SeypajCsD7Y6S4hfAek5UfQckR58f7KUVxDT83WV2M6Z6",
  "key3": "4d51yk4aCDWzzxkgwDB5aMtWL4cvnhRKb1XZ6BC7Twd2hnkdSMXE4tTK9N1mSsEcKAF8cwUsMMo8WgJYJhgNyAfC",
  "key4": "JzSBxQ9NyyAMxZDrJYvi2TiZnX6PHLKfqAMGTwhJg3CEorwWifAFZ92npDXarAqRRxhMjR7gqLPrc354NSAEVej",
  "key5": "5127fAfUuDML8yrvogxzEBvstoA9ZE7FvFccwLMyDqWHEAXQcNKqtkcg3rERpmkBQuVE6JfbQdq21jHd2oHGZ6vM",
  "key6": "5yYPCmGts9qFa7zLyyViHWmznaADFKdpy5PhAJamWSzJZUzWpkwgCNCrAvkqZvPuRaUY1Yw43oMGtxaNqbhyHHmK",
  "key7": "2L2NP2hveBEJnRCfLehuNmkqgvDC5xcaSXzhtrbkR2A1QfP162dv9Z8VW7oN4LvLnj8q1AjaTFMFbveeBBNC7UUW",
  "key8": "5VdWoQqUq87K4MnnqQdMYbkGNoBw3tRfb6n5RBJ7nF7mSckqvrJ83gp5PPFqv9QtxUHb9gqDsWWVfrTZPF99iuGj",
  "key9": "44C12ReJetdrhd5Eo27XfHbQ8r88sXBbXg75Cr73u9psKG5i2kzAQYwDDfZ99D9ckZ5sKyrZmiArn6e25Rj3ymA3",
  "key10": "2hycc2TjDUWpWXoPNLFJf87p6NiDzEMka1NR58yK1eMb5BiAYuBXQyqg8ZUVjBiteJgZgq33kPs7W6jxgb1rNkub",
  "key11": "TkfbC4uph7n4P6aiQ6FULeAAA9BZ9zz2ugrS9Ug5WCWCqc1TM35hgjpU1KfYHLjrf6SjinE4kMxqajoJZcqp3Va",
  "key12": "5CwuQtLLrQBvFPDZR1zbeKMnGzqs83kmA9d5qjAatM3fhKvmyzSFRsLLDN6ZXCN4M94wkYayzzr28y9LVF71TzQo",
  "key13": "2BRZjcvuzMVMoadDsJeiXgbAs9fzueGNH85W9duQW9jtfp45sFUftGDpogeGi4LDffYeoX2MSxzJwYuSdyDKKGro",
  "key14": "33HMgnjosBa4stE3hnsMN6MXGsP63xhEMXz2XESNBgmXACvrdJVYvFWP73wgshPwWoTYzuxaZLgSfnLaukFbzWY8",
  "key15": "3e6Lx4p2A8pxayUF3VyZYQWmKeV3aCQBCUgxW1uUTnDVqUrttpL55xTYoqQ7pKXEU8kWGJiCS7DtcDb3Qwvddp2p",
  "key16": "z4AmHc13dmsA8ZTZqabz2HzqtsHbrvbAKvvLF1MNpBGNrzoRm3xcetFSYdt4LmZ8m84eNK6zCSicbcRd5LCbiET",
  "key17": "2jEc2srJ5BsgHf8iySGyTttrbHRHNFZwuTCrPKEMJovYHS8hm4NuQVnmn5P5Jxu4w5UWBbcZZs4HfnzGHgWtbp2w",
  "key18": "3qxg8pjDb1u5oJjQrs6fZCpaSUMQZaueq9SfSFxwTBmzG5ajN9Mxg5jyKSe58rR3ivUR8syWfBVmnEH9gYDpdKja",
  "key19": "4b4FAgJ5yfC6otiHePq9cZzt9uZexkn4QNgSficJKUxJaQZFwocK5xuwxSEqXb5FAyXZtyKJ8c2ykRgP9YEKCip1",
  "key20": "3t1Ne3qo4dS44Ao3pXa2f5PC8JGimSWPpJ2muuDLGVahtCBDujDMrCcLe1i4TkNf5yVKiFiKMYXgwYAWeZAm6nLj",
  "key21": "2w7DF3nChP7SvzMJjDCWhueX9r4WYCphktoYFnL5Ayi91wvKnYtv2pkZgCA4dZsLuqNezEGVCtvGSgTf4vgm8ezm",
  "key22": "2DXP9r8JMmZxHSjwmY2NgAGgpMVJd7oE2SfyimvLp2YhBwwhjCnUVrbQrR5GxfszHhkvJPTYAjE99WGv9NTYUba5",
  "key23": "38yqZRFy42gzJryAL7pUfSjCqFhGEgTvhPrGEYGkD7pgtbnW3fJ3mEUYBJdPJyJSAR2rLcNP97k4VwkSxAyKAdoU",
  "key24": "44W66M2kZcofeWE4e4XA1nKH7a4Vhf4xdf5Lr4GcHZ3vrzegS2rYSqpgLTXDjf2o42Nj56PR4nBxaPsWjs9oUWcv",
  "key25": "25agwAfH13LET9Mvw5Y8aYoJ3qQoxWfAWhZstxxMvjRKEri1oNM9NqP8XQUBjmSj4vh7s2M8hu7a5fnQ7jySKYP5",
  "key26": "mS3pQyYe1tGFXbtDtpMboyFXbapxELcuMTag3Gm91wzMnjoJR79VwTqEKNtas62dRtuYkKZLhkNDu6Hqtv1gCCA",
  "key27": "2WtaVagjETty8qJbepFxqHrxtjnFYyzwFf4KFaeNqnRAWo3r5Qwncvu6kLJBdDuuTP7RaNLH8rW3j3vjVR3U3exp",
  "key28": "5qduXkmEys2QwUwzkc4N3RvZggTedZywYaXBVq7fEFgfBvtsPd4XBBkwGYsdzP5MsxrmDtUt7iyxqWGmbodz8AHn",
  "key29": "2mfu9CMJE3gqy88yiCi4tV2wMtDbMM9mEpwSaxyZxGaCLTZKmayTokEpp6rzgUmhyZsp1JtLwwsMjJYBp9sc4ygg",
  "key30": "5JzLCKmov57pE3SvNed3UfFoWN9kKBn8RJyHM3PHkEkMjwMzUmF8QoxzgG81vDTsn1BbCwWkrcKYeyrDrRCiJUE2",
  "key31": "3c1HqWg5YaeMZrdtdNot38pCokwknRRYj36iYn5ARNovqrcrmByFCt9Sot1juBD1rbKTXytzVYBrcKKe6bhmG95q",
  "key32": "4arerYDV1wLzf71mYnjtt6DqFgddUk3C1sP1C6nj64zaP8S2RxbEx6evX5PooQ4NjTrZ3qvazA5JLvqqe9tWGCyn",
  "key33": "3aGE5AwUPwmkEaRjKmbeahDhPwrwgPqwxVcPc1WEcDqBVbZbxZGdbgfzgCkyqmmTUXo87dv9ogfaSZsZBxJ4vgvr",
  "key34": "2t9tQUV9bjmnmvFyyjYasYhoLS1tdhzLQ2fMKNH5XK9r72nMwJTJ58rnhYqyT7KAQez337tcxKzYXB4VL6h7jiDs",
  "key35": "2uu7qVDdgQLMpcXjKp9GZjimNrbG83tRJtZaWWeLu6b5qaP4ogP9W5GkpxqRwcNgTer2Bg83jr2ek41LAp8furPL",
  "key36": "3hvM2yESEvZpViYESdsx3VT5eaBQ4sGzNBYVHkcaN672pKpjaXNoxf5oRCdn4Tisrya7aUEnS97rTvTNgSJnFW3x",
  "key37": "4drXkxC5g7srFjkPWwY9mT3WmZX49SHmXFDi5NCmKK9X8m7B4tKq2RKKUMxEGkiyGHyHjky4uyxeGHs3gumCDAgF",
  "key38": "4t2Vq3R8CaUG5mzocJLqKmJpAfxVqAcLdGT9Z9CgkDsY8aXKB6NFMGnetaUDhB4Nbn38ySEKVZfsPLqHoeVcrLeC",
  "key39": "8HiCmydchQwyzQcE8V1x27Yb1f37H5cSFAHiuwe8FUfZX3h95U7Vkaa9jW28Ud6WihbfdeKXjCrmExmYwYuReTf",
  "key40": "4otTSWBGGb2YQRmVybJCsqsxNZXoWpREgftB8kDX5uSxZLcsNQDeJ2GMF7ebXTiuHnvTswF7hZ2BnckRd7XDqysr",
  "key41": "3jjFeJNcDJSA9nVfYayefJq7FSDmfnEtQJMzyCGtLsGa5s7cAcSnQJuKivezFyDBCSpnfWGKA6JQMJkoXgoSYPcu",
  "key42": "5qJWrwhsypeSTNvAe2AZADVfMRa3TxG1xtyYV5RJFH85LvTNJa56dBHw8j2g1DqMnMgbsDDQmAyNgdVJRRvuWRL4",
  "key43": "2S917P8KQ1iJVGtY85xPGseyqS98dc9Rr5BNyhGY4ocRp8dhd116DVnkSDXPkd9nAqzL4MLgzvBMN2ZdJydYZSoe",
  "key44": "4xUYdp5pwDQ2PeMQX4Bph2S8NBW9fNyFf5tKDj82GVwRY2sCk54eTtV4hRXurLWC9UnqBZKkDgBkDnPB2iiNHXoD",
  "key45": "2kc3zSZcWqkboYsXRYZnkp6HUTmsH73ahG2rsoZV3RZgsvE7qmtZhhpUaJVG8B2adTHhUdBgkF4wiuBAesJFibPt",
  "key46": "5Hmirie96gzQcnoDMDNq7tpi9J7HUefaY2h3fQ5wRZnZVLimrXswLhK7xDcurjca3j2qoiZvWp79Kxv3s3uKX3Me"
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
