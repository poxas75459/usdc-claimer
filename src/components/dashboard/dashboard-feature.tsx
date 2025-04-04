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
    "DKgeitZYrT8Uy67zrwD4nNZtMnBFyBSEhWbtwzAH1SRf1JKHipdkZBxNfDmfkV1WgSWxto8kjiK5zxnRPEYxTC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XayyRinE7oeEVFhzWMDiVB3g2ANqkLZWqhNN35AksFQ5A1RLcDFGbMzU4GEiSij6FYQqKUs7FUMmezRkfvFUaXD",
  "key1": "3978MBuJbEpUrCaGkfMdVMJmA9qk85W6yPeziUUxUcgs7yr24tW6cBGPF3HzrbcRPhgTeW5s1qx22iePwVzd65uP",
  "key2": "5y5UJYt1YJnNs6thy8A8QUqyH33GG3jzrApQtniR65sJLn8w7MtrBa7STMAPJ3xe7mZhX74AZ8t3t5gPvpiZXQok",
  "key3": "3fTRQn2qLeGsYRrbLWZBnmsxtMV2wvPvXGditPDB7k3T4gPmTQjtLmqdmyZPwDmAsu5JfjBsJHoAwct9YPzKXZiJ",
  "key4": "3omx4DXN9qpAyhtgPedoFDhrrxqLHQAgff2Mi3WeSSWyoXFWXAFVbRc2dGPio5gkJdhyWKPcLa8RjzbknFKeWYqM",
  "key5": "5bq3vRZrsvpUJdtTVfUs4vgvV71MBURqA5qMieZmNrhCTkFrfp8aWpYcFsH6MCEP85zxqrYJBMxbbRjBvoGsQDNU",
  "key6": "4sxM5FxLGnrT5rqEwubn7JpT2BUpMH6YkbaedvRLVdn3g9dtE6zyJat2WMZaaBHAHUfct9Y6gjC9Bf9QJAjzZoY9",
  "key7": "2C4YsteNcFyYFrXEcUQNm9qeidRZbtG6ZzYA3nR76k1iuKTeiQJ8FyKoVXemsn4FJ3znSy6FQqnLf5NW6ukfUG6o",
  "key8": "4qWchReJkgUBQTsNJuSHYdtvpqTuz9NgxxX9hVRkXXjwFaZ9DzrRNdgZ5kzNf69UzoUPA5FmwbPQ8mrqDpFx2NYD",
  "key9": "4SLPWSRauUU3vFcyoAqMaQ1qkvSXhshdJzGcyeNSGDSqGrLUbEcQfmhKsgh1UGiY8ZZcGqJ7q7k3SYWztBgfFQVd",
  "key10": "fcWkYrFhhta92oCDqWetzJhJaoj1cFRGsfnZesm7vFvSQXSKaGQ8R8gG4SuVFzTwcpVwEezBtNgZLB1vyKVNpXv",
  "key11": "1UewYRo2JZWrDJhKE9vFRWWpRaDc8PQEjSiT5KtgR8YVdcZXtSCcYxpdgmwANaQDn7L8jd6SYVfxVs4Qnrdm7q1",
  "key12": "2PBgF4TcFtDXNDx5tk3buCrh27hu12PPYtksvKNXwQ4Z6QKTrRsTeHNS86uhpfS1t4L5Yx6DeXSFhjtUdD33YrUC",
  "key13": "GCH9EQBLdRiifb48ieyRKztekJNkhwJFdgyWgy5SNfSCGiQGKjK5Gc5BpKqGaSYqZsZ5pxgadw8DPWc3AKPhAU6",
  "key14": "5vqsJyDwZbyQCqKoymzKsmJVcd3R1cLr11da6DaymB5c9gB6W3jYT43sc36VqNtheJnQqJ7ksCbgR6NtsvnYA1zW",
  "key15": "4id4LR2YJXZ5KC5hxZNUSseWkCcm8okCtDQXTFdsxQRfoH4FrfE4L4AzD2eP4XjgtENfpvoHAs87CFGVdmiRqjdo",
  "key16": "5WCemDbc2qaf5A2tGMnPnaYwq4MYVBTdTTpriB5uuXJscY4CFxbXSrHgoeLKLAoZ8o9XYUq8LZpWcoQQCg8sjbSH",
  "key17": "gY1kaGocw1uedZig18ErTNwNYF5UHjWfMkBV2yTTm1UGJJvCpDpRkgCd1iuNyAT8kELzoduoqeCug66hVxfchoo",
  "key18": "7KgiwykdyExzyYPwwG4TVZx92FyRusGchQYnCry9cSYm37vUy9tYaygQEud1TKzazFL3w8EWE3Beg6UsZZmr68g",
  "key19": "5kbiB9nbVSNTEBkhHNxJKyYPLWdv7oq5Qg7po6Cv25y5A137MmAVN7zQ18STu1Y66iKH7theDyoEXWJ1arEZvUgC",
  "key20": "3rtV1znVYeyy8yqyyGGRVRtNy3R87KzQECEFh1Zj5cfw1wAFGf1myWWgz3QPYzJDjidFLGjoW6tTKSxG6p5G3YqH",
  "key21": "35bLh27GVee8pizxKvMYH8eM11rqZ5ncq7kgVB2xz4H4WLUmDcM1BYEkVKGYuUYNph8qa5BfNK7Q9wUwcPMmjYeE",
  "key22": "5Mvfqzwuo4cMzjTuw5Ljnf1i54ZVEikh3FFwjDVGRgakrdH2P1fNAHnuviEKC724t8oct9XCF1ExcDghYG7eVTvj",
  "key23": "3ZTy8LW8KuVA9Yt2mJaaSKntrJqr7TLoLWzs5Z7sQd1uwRMNyK6tw4gajkFLKyvHdGDwKDB49DLvdU1hVWudZoPn",
  "key24": "2td2bW56dcDCozaBJyFS1h1cTZ5Lh4zR7uK2cj2Cc8DZagWr7f8FjZn7JBH5rNLKJukEMMPrsf1YmMyqTS1wd2V9",
  "key25": "3K89SsVLgQMJQeJrGzutgXUAC5jCvr437QedxCkWhRQx9T2vJQDkhVNRMsfgPKW95ygEJq8PCCCF3u6B7tabW4eH",
  "key26": "5cWgjmuPrcPAV1dHMaeJ3trj9vCEa4mkjPTjbrGYLYkwii9uEagWNm7dYCsEHYSBU1VKcV3vNuT3z8nWpVFXyWn2",
  "key27": "5VE13ffwT65D13kikVUMH3F8MFf9muPm9c4gqhAtb299nTKneV94QcXLE6XrKiERexWffj9ofUEwr4oBp57x7whK",
  "key28": "4prbfrHHqyzwJFXXEPP2CpnmjKL1pDscJHUcrQR29z5iSP2g81dCVDLYveAFF1N1rKsWR1fM5y8wyfJW8HnJCVRb",
  "key29": "45FQY1Xr6Dheti4mt6VTzVYU1EnjEKY1CpM82CjujnKofhfc1n5dEQZS7tHxKUhyjYn5CXWNMmV8HqFcmq6ZEBmw",
  "key30": "5nuQhiFBVGVLAqUgkfTzumngr5P7mNJJ7DxDXfaecBMSDU4JGKrobUUhakYffSeezV4U3g4X7uLKBztGoNB61NEt",
  "key31": "3fKohnGpKU7bZZn5J65pPT6KawFF91jU8dhyQrY6yNTCsug3MCURPL9eyBR7Lw6FnNREd4okEXDTZJ4BHr24oKW3",
  "key32": "246agW8rZtUxEFAbo7JMFMES4PUSHRSu2kM52DoSFBdiFDkSyBd39RbpGte9LmYqMS7yqQoWYwiUj4VcyL7mJ5WD",
  "key33": "27CX6WXqSvj6i878ddRyZTwQnDRzJc1SQd3Cycvy2kwbMz5FFpFH47KZ5f6aoDusmQAxEbxtogn23qDDmdU98TY3",
  "key34": "8q6M7qUNESPh6zQHXRkRY4xkTCrncWouCpPD8YtPwMBu9wEEcaapJE1K1XqRM2N2miJovzY54dH9Y6CnYYUATBu",
  "key35": "VhBj6axzKAH8oYowT38iaBVR5vzyn4ADjh7cxySLxtcTuRtXU9ULUHvTznztFRLC2XfU57Tm5Qi2HQwNr9SAXss",
  "key36": "3ZeQiFFHXgpXfXUtkNqjQ5kZK4W58YTPG5bnoGeXUerppRtyL3AfXQXxXS1FRMhxBkqaWmJkn5DUH4c4Qdk7PEMA",
  "key37": "31mfswsgHVqDDzw2mXUiNm6dGkUq18aCx6XkyEBsKSfMtAG2KRFWr1SoCuzXkeBj1cUKyEAsZecTesT3uxCKN5fE",
  "key38": "3ZgjXkn65ZzCQowMBcpyTRtM4oqSXydsBR77fWTKEizVZ7s5sJ2Ac3j74pdjwRL2ywxzAmhjkvyJt7bZWipgPkFR",
  "key39": "3ajYgmimfdGE7Ft7RCAKsj14t8mqurUrwMErsinH1gY3Xsx85piMHY8QLJzqoSDuDv6Qe7NZuJ1c4ZKAaXpMRwDs",
  "key40": "5Fs3yLLEVacaA71wtw2vjUt1jyMiFqx1eWZ2nog7pZrvVmBxrnrde7nX7o8VB3XJvmZnycdMM6uu78RA95nFPH3m",
  "key41": "5ZHiaagZXX596R2eqqT3MKpP61dbSv1P2nsjKMLoEwjfbFU7s6yXSsen128av2C9s9B5GjTtjqBe45j4DEenxGBQ",
  "key42": "3UERiwJDMzpq2H5dREqZewRB6SvyvMD7szebs8RjjTr7WiXg8wfYbyw5P25EjqsstUscsc8kiLoit631oCW3t9s8",
  "key43": "3dnnrqJpXZUxmFJ2nU51DdXPtwLDaF7pYnWK45MHeMrCAntitxfL7hJsiPBQYfq4Ta5boSvT18F1UCRbqeTJM1wv",
  "key44": "5hFvGtsD4x7NzSx1FT5oPoryymaL7z3JiPxKsZuqosC7kNdrvfyFcNfKscGDns6L6RsDThuRvk3a2VynXxJeEbMn",
  "key45": "4BW7DfJWoXgEfsJk1dAEj77AZCTFDLizquG7pdQoKCs8iSq7psKkrvn49AtVCcHgQcBEJDyhvStsBq4k4vNKxrZq",
  "key46": "2qys59xFCX92f8va9MBoTwb9V676cj6Jop2jQyAdUYMYJk6q8fAP2NymGC4gH7RWoTry1fTkNZDCw1nR94NUbcm2"
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
