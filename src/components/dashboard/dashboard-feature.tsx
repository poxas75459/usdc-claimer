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
    "3fZfZ8bugSaBLLbiSrWeu8Xrfqb9p6rfpgRkAtaQW2fUL6m1t4n83iZwwS1MXyT8FNCGksQredPpxkBij4PZ1rm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzzqZsiQp8QST6ALGvqW32nQ1WAB5HhxsUNt2HFRajCoxi2f6HHfDiuYX6qUwo2kHuCDe2QTviPfbjEVRqekCA4",
  "key1": "5biSqzzciLk6pAV3Feg7WeHLgVKMTAaL1VCJrwAxG8VWpUsnecvdXbBXYwJarzRsE5cFU6WR52BL6JL6BUeX8brz",
  "key2": "2MN2sqDuT5B5j5AefBxPDZDo2nVrX1YgF3e2paGCyjPJfn3kRA3hwTFxKnxnxde6yKGFj5h7wVsAxBXJ47TBifQA",
  "key3": "3hqBJZDPabokd13HFTHVPGJFhKDBhhitYZtDDK2n7hZrNvY5ngXLENEQERdZ4HpTg4rTwnZASvyZATzR4dof16cf",
  "key4": "zXCAKEQj2JriEZXpyb6hUA5gSfjbWFRK6pRXDdefZH7cQuBxk5riTikgcXs9CVAHhtxaagvQ8rQQSkQdqU4aYEy",
  "key5": "5MfkiNJMz2y7pZbuSJ253eL74rbsLBD1gMdp2TmQe2egUrpo4uFBRjNqy1dH2HoKC2JnAvnqHFw6nLzv2YS8iCgC",
  "key6": "4KDZ8d7hxX5W4iKxDyLvZsRhiY4MSpK1S1oDh1GHMzCe6ekcUL3QuohkYFFWtHrd5KCZha5qkA2VQ43XDn9zjYAt",
  "key7": "5UhsQc75tKF15YqwLpZKidiaHTJnxtLnfeRAk8nmaUZmSxSmRKbkyKKWtNbnSw2dKyUp4PBoAEX6Fv8ecQzEersd",
  "key8": "LYaKo4d3E7Cqmo79uX5NkUhFvCYuS4HhqBtS7sUnukJc71PpPzjQxMjc2ADGiA9fp1DQd3517xQRwp4CN5gwSRk",
  "key9": "3tTMAyckWV4vMTMhBWar2SaXC5LEfP2oWshZoApZ1pBWow1AcP3Za7uNoyPzapHoZ2VnKnEwSNDuHv8u55gbaGNh",
  "key10": "iGpbCfiEb3JcD6zD87DUT3cfGNtejJYEqURjLc4h634JozbjRWvmNeyX94vdkzUFwr46g3Wqkt15zYnrvysaoG3",
  "key11": "3co2AChxyp7i8xTjJkfcN5DVZfsgdtXN66bsyAkQ4DzK8USkYL3ZvPPXkgcBUatgbj6FFNXAkcu9ZJAK1CtcTgwH",
  "key12": "4FQutFdtD1FYKHiaomw5EGxg2pqv4GyrF7gmQvRUAnLxpPWX4r4RFzrmN46FWPiGkKUBDbkSBhfCPgq6ckuK2zEM",
  "key13": "BMigwn1Cqz9YcXfq1Cq12ik2WDM4y54cocfzWShykjtuMYcAakYXzhj4PVm7Rwi6jZuPX8NQrXxnQW4PpzD2K28",
  "key14": "q72TypckVwijejC2hpPSkcAuWQgNTNAYeV9BpAL8cbQszKL8d6RmSJ3AjTcVKTMvvGE84bQYcBiwmjPQiLysGWQ",
  "key15": "MSe4VVpiE46xStFyYX6Ntqg3cCmEQjrvhe9FXMbF92kpnqXtRogQWK67t7rJRTV16pYfHArHKHBjRX5YraCntCF",
  "key16": "5YYPZzZx2Y4ZGB2hC1jnCgTT1wAjReoCN4EYqj314y9eApwD67YLQzpEY4694LxMS211nMoEbtvpicytmcXfmSZz",
  "key17": "5gD413VVhQEv44w4E45nTTF7wP5EkaBjsMDvfs5Dhzcw3xFsd19JfAZMjUzkJ2nkd1Y5gRXKUxkK6NoLEc7hE6KF",
  "key18": "34YnLdtZrrFQR6bx3U1VpfLsvyxWVT4ABuuc9wW5MvP5X8pNRwLn9kiji5pFnW3ab9mxAHYbXiVW6NUQ5n18Ysd1",
  "key19": "5PUdcUZh4xGmNjL6pvbeq8DZvFX6KoQDwPZM1oUj8S8i6Xp9xGsgSNNWzwbAwHCuLyhLjyGWzW3To7zVFwAwcBQU",
  "key20": "33PxXEorz23kmzrMAmSv5SNfmdqtSDifnvtBdpHfCE7K8XCUCc2SXEzHAFE1ax7pAVq1M3AekDz5ZbGdiB9swwYM",
  "key21": "2qG3pG6Cd73uYdW1a2w5DdPXePvvvsaG8MzRvUHdNC3T7f5mJdFis7RmYsUpCYqJDcKdvTYXTLRYorX63zYaRfq1",
  "key22": "59vynhQXcRRkeqSgQtgrHZhSKPwLtkuFYh8P2Xfma57SBZZidC9hBKKb9ykTXCXHvevx6FoWMiJ4QesnDYnbyqhf",
  "key23": "231WjmZJ3xFSDU4uDgE19ku99uwd2uGA2kJzQPRGfd3Mh9wUF5qERxRY3Jk6sPwo9VxLqDz8cy86SNeBnrwKMDLX",
  "key24": "3k2hJYCEFYyVCLeFiaG3pzT9e3xdXZukndXsLvRT8Bjx2q1JoQhdAECVY7QZQMToHEFNhYDbfiVJsKvbGhyxzbdQ",
  "key25": "5LghH2RwvTzcYoKumrPB1pTcFFnntVYjGWvsRnBKX4932LBzSBLdLyRsWLv1XNDf9RD7RbZqqgvCSuA3hbkx5LGA",
  "key26": "4wn29Q2SNCZYErbVjhW7bXX6XSMhu8LqcsNG64WXQ6wehmqa7gNg6cF8uPL5Gk1w5KPE3XKQKQVQzB9MapbQWeDg",
  "key27": "3TGPfmtUZ9TfGBsWZWbAN7pLygbGfoWV1nxXJkfPTQPwC55M6D2XCJq9BWokyypiof54ToZoFrjYayb4r2ooq8TD",
  "key28": "3p9izoK1UBvQ62J2SFRx6UqW2HZS8ZkfMnydLcc4wZruNuoxRGtmprspx9xuwdMAghq7BcNQdGWE4EvqXBZtJUj9",
  "key29": "4LCWLJBmEKmhAXoayAdVCmeShFVA16EvKY3QtyHmdXrDWmRTtmkoqC3zyoGHoidkmT8jdTTYn7n5HE3xFBfZCRgg",
  "key30": "5GiT2o7uFRXSDHch71rmhqWXBpjp2PydZQFfxkq4uo7f5y24YH5FKw9baA5HqyY6kHoLbNk3Hkqk6ofkd4x2QRC8",
  "key31": "24TNGRzbeH1YZMbVYG6xLmycqz4VrFDuh6jDia2EpEC4Eg3cMsPe1RBjD3PPyocnRHBQEVrUY2dKmbAGYX6cWT6r",
  "key32": "2Q3DgaN2QBZxUEVVniCscQ3HDht43kkhq18vWTM3HPe5FN8717nUQgohvNrpV8Hd113LDdzya68AyviK5PNHPamc",
  "key33": "3J3aqFF2Ly2oz533fFVY2VQhEs2uAwjpduypJmuCpVDTgYGZk5114ctME1qBYsp7UFWNeESHmtrGZ7vMvFD4uBYh",
  "key34": "3Tu43sYvdV38mmGq3ikb8Pkof1DYhGbY6z2STDfTMRncH5pVvk1vZsHVvLKHekmnPUiF1EFwCyA8xuLhQdYMLvtA",
  "key35": "vFMPmWDB74HavQAeyQW93UuZyTUSnvdibgGQd58E19idAiqDp3Y4qCkoZch2Pp1zRtxZmmVmx3ZoDs2XyequMcf",
  "key36": "4LH3uEhQXx9kxyHx8yqAJWD1EdrWZ17KhuCq7hKc1EuPgnStdzM1N2rPvu7XgNTEZMUvGVTnPhEWwuixL7ZKx8s3",
  "key37": "3sqNw6gjMzm7oaesy4gGUNhafN7tyUGZrR2CqiqLbv4zMV8WUDG2CDFWDmqVznedZ4duwdC5SkDot46AaUZSi6kt",
  "key38": "LW5akPaedEEYv8jDbg8PLaYqLuXYva2hnWgBjcJWxP2oTv2kqBy9iaLnXKFLqqt9su47HMnf7ebUPsCJZWPQmDW",
  "key39": "31rMhDHkgncrEmMYbecB1mu4zuamRPhKd5JG99bfmHt7vgVyf7sAMTS6wMpFHptNjkuSJnV8BZALuLNzfptUCYey",
  "key40": "2pxdpt43Xkkjj5hGDkEuNqis9KHd3piwKqqzHWT4UDcNpxqrLyQRGfid3juKLwcteMhxuVHREiSXaLNJjsPuC2wL",
  "key41": "3Hwp4dwekUQtCEUhtbTxNnio2U578pLWZz7keb7zqBrLLcxEAp5AJ1i6dGcW21UNvJT5dBHsgYrkrwum2jWt6doZ",
  "key42": "3w21UXuvicgxFZCR1QkstYbwsCt7nJ5ReYcSJkwrPuXasxfpbPY8zN2Uymmr1hwbVaB5aCrfTRf89HkxhnGN36Gi"
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
