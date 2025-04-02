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
    "5o7ToaGg5XUmG5YxHjJhTqbwXFgqWyVS49xYJxQwofn7eS8nq2Gy3UGDX1Nrs4uKqPTiEa72NN8oZBqxUhfBVCtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8pknNZ8MLcdWRgNyNpMgjq2jgaQUDV1DDH5cHETkkuWYqzXZX8Ugqk5zQxwts9st6ZpqzJ7oJChkDmRaWtpFX1",
  "key1": "3XhdatXQLhf826DMxDZppENMmUbfLWnKSsHzBWBM4HgSgag8dF9YJvvHZrYR5bRE5UXsXa5HDXnkZ2eKeEPYSEkZ",
  "key2": "21wUczw2YRWqzidwXXvbjAYFVi6V9PVHfZWffv9363htCnjFxM3BcPqqrCKps7QC3PLSnRPJY2dikcnBWgzsMmuk",
  "key3": "4QpKXn686zqRWGMbJSW894KwEXCP39MMc3sLHeXJ8NvrzUY4uDqwDCGveAXMCSG3tSYDYvBTkEt8f9Th6t5jctJS",
  "key4": "3r6QaCXV8zeem2328A5FggW98PWrcsxoquWdLotb3mypJJMTYvtgbdE6jMShaTjBr2j3qdrCQWT6ns613QyAXgr1",
  "key5": "5ggbxJD5KA7pV2TELdZjoJVS6EMb2vW2qhL9KU9ytqt4Re2mdCb7qmYuakUG3Tbs1yEXSuTgp99HxT5xdM5bmqQA",
  "key6": "37N6u4hayH4iLdsxh2W37YPjs1jcXNyyfEZKBmnVrifjhcBa4qe17u7ZmPT1p3yjtQC3XAvAMr2fQkZ9d6DUMuXM",
  "key7": "XnPwohM5p1kVezYRGyHsT1CLjLjZGwjihZV6WuwMdGdr6KJKo2ZHN8oo2F41F6b6eKQ8d6HZwjPiULvS455iqt1",
  "key8": "QAALk3Uh3A9519LZP6mrNaohzYW8Qxc6kexkmPNFdQz6PF5wRTxdTNqdDfj9eMbBtWoHMj66wW376k1Htnv2R1c",
  "key9": "5XVWE3dMKY2rKjURRFfEvvoVcdLZQktS9DzcbenBwW9BYi8zTSvpJqTv4zXWaHoEdaAwoiTMfkpnaYjU8EaBCkqa",
  "key10": "5rdv2jmQDyCumgHCTLpkFpqRyELUhxEn72eD52arSCh9FfPGXPyHcK1jbDVGFjnV1g3ZeRu5S5jfyLGhtsy6jbgD",
  "key11": "5erUi99rfUgggAgFC7btTx8F11tsDcyCUqvwsLjgYE9bPPxQQcxADjRpaPMEfQTBsYfYNkVr8s6L3gJw1RY5uw4V",
  "key12": "xWCRadBrWw1T3ibyGmGG57hrJ5oH7HdP2MwM7y3ZSaKPqSZKt28yye6GZWrRmRJcudMir7ETnd4vwY9SqydX5BS",
  "key13": "2z7YApGz5ig9swHX1bGjhXT3t1NnTuapzLmHowDH3KirpisWLVjd3mXRczGbNz611ZvagTjNDC3xNRw7WRCTPejC",
  "key14": "LyfN62u64ypzTHoj6kx1LnYr3BkDFkaJrqZQ2NBJeYqRpLH1ZSFVd2RgvJA1xqpsSBRGcpsHUBXZSa7Jkj31FAc",
  "key15": "54vaQiYzTokGnCXCVhHd3dT9WssixJF1p9zDPpFhzQFVC5kWgpy4QFYxCTz4baqBEwdyWSHT6oa8XQR6S7wzzvZS",
  "key16": "2LuQMCYBPeEpZshQ1JuLXetvASXQGazL67AQs6KdYqxbfBzAF3YGLMcUyfBfhq1i3yZnyYZt86hh8Cq4oLvTytkB",
  "key17": "b8CX4G4QRTd2jGSVrd2p7xMGb8sFMwVA4AXy6Bq1yf3XzsHxuMNbSHRq1rM8Mtwdpvt7kqw3B32XaiKSaCY2s2z",
  "key18": "44Ku7LbnVWVLXzXTdQJJC1i78nX4UnuBLe34hEgyeotFfitTCKuFycyuE1LhTa8J1L7HKp2fRJJyrY13c1rFf64R",
  "key19": "vPxo5p9C1TN5GsE4SkF8mjt2tLTLh4snEk825gjTEYydPrmWNGSrMG2Wx6T1EfncqEC1wmgLWcNWhyTfpATAPvb",
  "key20": "4MLEBRU8WepW4SUGu4SJxcMxENsKevHtS2DbSkLGLnAFoDxNw3DfqoTJTUWy4v3RSWaWEY3yJowXuMZdDQVttfog",
  "key21": "2zX8A6YtrPgV8nsA8iWnqZVNUe3hjoUJEo8DaqyVAQy3Eo6wdnG9pnB8dMKspgbD1d2HEftGEfahvGjAoH5MN5jF",
  "key22": "4fBMggixSRtuQgwmNkP1qekYR1wTjR9LNUtqyvqsZ7NTYn9NjPiN21EfebLYRxnUxksdsHceheHDF4YqoCK31V1L",
  "key23": "99CDTjyVCW5gp5zJ5FqTgstVkjBoh4W7vrC4Dwj5U5gM8EQp4UXFWw2qodZwDchUGwsrbxoB6LJxpedKsNUHVqA",
  "key24": "2uxSGtyKhYkid72LtDB3wFVLjXpjsraQEgxzrrkB32Su87m3KwmHBjBuoiUxdG2m8Qrrh4BGkofdgKFihqHkzwij",
  "key25": "56i5XQgy9DSAca8zC1bEfdwDcSA2yf2hP5ebhk8hibZevgBbMmNh55cEotS58bp42S2oyEKGXmcS43KWvuvgqXhw",
  "key26": "QJu8tEBn27bKoAcVD9o4Q6nMQ2e6uSJyjZW4HqRkdTsSmck9WDarktCfM7mcq33h5sxJHMUoH9ZpVvsFtrP9Xff",
  "key27": "5H17UWpjhGtNoZ5Lexyhq5yHz5ZkrA67y5zkrJjdPa1Ffmv4MwvRxpPEH3EaM53MgoYfwuzjfgjQekHfJAN5VRzd",
  "key28": "3YSAGNrcXbsX14bHsgA4J1RQ4Wh3q2wuCfT1sB5cEymnHo7ncFKTpht3RLPWyRHQ5ESJXUC9LdGPsEabfXWM4kAP",
  "key29": "3SSMBGEgPaPfF6a2nKaAREbBfc4o1xuesdwbJLSmZPGygwDhFSGXxrA7kxi1zfaQtnkGJcm38bQif2LkofBHxfJp",
  "key30": "56S7bdDSpjydt62zSaETZohMFizLbR43HFAyyppLb7Wdnw73jiU4F2j2AgNfPzVBkWJQ2iQgoaaMxTZ8BAKLZzNL",
  "key31": "4G99a4ELihntuwbm8wCJ9NXtuE4oTsmjZnZk4Bbxgfs12Gz3kefyrLrNPq2u3wodiaXg8rpDd2UH8DPuQUSa2YKU",
  "key32": "2WXd7hyGqDHPJj7XCd5FcDBC1KeAhX1rsRNriT1HQ66huHN6WTDQghgSpx52poGKtqPwwZVUMXcEiPCvmThucivB",
  "key33": "2waHj1FKGK7uTzbzHYHjoeFW3Xsav2zEPj1hHK3DUT14z6Nwg8vSvCWQExnRoWu1kadcyd3zarFQd6JkNcL1UYQG",
  "key34": "4etjmZZ5MPKLx8fHQVmqrwcCLCUExTPzjFqkvT6s9k1GtD6hXexkKEmpcyMQy3JgcbMasb2PVrPq7CXTPAm41cxL",
  "key35": "2VijKPV5m2L2eraWC9qhEcDFmTucTvgfKRwskCxab49QJLbJcxvV6Enw1HYPP3N8Uk41yu6ZBCdEvQSd3rtVdWGY"
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
