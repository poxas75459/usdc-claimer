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
    "3qVweVTQMjyoaGrqLACeskse7UVfe51AAzhiqX95PY9wYoBr7kSFMZ7S2JuaizD2VmD7HEB2usTkskJbCLCytCww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEaEgbi4sWa7Cer7hk373fSmay8spbqsEMDfvJLWaXqBqQrn4VFMz5Et7YoqgnDcqLqRXuK1nJtzouQeokXGYNs",
  "key1": "4AeTnNWbbpchu5QqtuoUdce9W6yJbeBHsrjBTrcx38wV6FNDobK1epepj6avfbEghkqNVMGoQ8n5s9mJY79w8Drw",
  "key2": "8K54Nqqa6HxsFRkvuZNxC2UkAai25T7UY4avGjAjfAiyhjwNtGmk1muEMGEgDvYtoR3a8kZ3H7M4Pm4xRscnecg",
  "key3": "5jxBLAKL6uJDz3Fe4vqATMwYG2YrpBqYBoozL8GgLWd21PAgk9p7RyDVpgsi3AP2Efn6UPwavmDYh8WUwRA2XUU7",
  "key4": "5VWYJYT2j3v67DUL2GabzSCWHBBg8ouwixNWCuF4kwPrtDGP58dmiy3RCMYUrNCSsTqRw5hmFxNXr4VRdkaYetXk",
  "key5": "5DW6zzdMM4FxbE9EVDeWdGsLVQT7VWdhpEnZtTvVgocuctmRqth8vXaxgQkS89aQXAXu358D2K3AsxKspWXfvk8i",
  "key6": "EVZstMzpmz88yyvYMvyC8WW15Qanc6hMZJKod5zv1aQhMm9zi3yNoxQ7AzvfYLEmvSNz5DxYytY9RuDLBkrvUUi",
  "key7": "5iPxjz4QyKyAkWinwuBmePmUWwuGwyUvbM9HvGLh1Gz5bBHAZMeo6sASCp311CEF8gFYjoCfUPNWRRzbrzFZzXrp",
  "key8": "57n8ZA3UV8A93Xupg8vESaWgiKAqxDNTcZhYzD7wbjDWjqjVkfGvfiPsXkU2DiiN4gEDESN89GUh5tXu57MgrLUW",
  "key9": "4o6sJvXUYVTFQFQx26oE9QwDRp7KrdLkT2SbgmHcF81ecSdoZRg53Wnn1KQL1wHEVFc96HLWzVTQkTKM1P3YugLz",
  "key10": "3UDV7rJcbmdqbifkHFTXNFkKGhC1rJM6ze9ttGQFYWKhPEBWGgutK63hbMTswHeKdXGkczfjD4DN1KdACRWb5Jms",
  "key11": "3iyPi1DAgrAxHjV48BdhPBzDcR7GwyUPhYKaDihPG9YhBjRSeMTVW9Pr3smFyv9eyW6bPe3ttsXui2ybNGiZkjQk",
  "key12": "2e2XB8q8V8q9hEny7ZkKWvSsjGD8smz7NXfgVL3jfJJo4CZRfyUUG3x1sSf1oTuTDUXu1N2hbaBYtjtE5Yi2fL2j",
  "key13": "3dXjZyaig7tWy31yYqUCiEfFp3VyD85VCRxhJEYXCxRBqziob8oivfPCUPLr8gXaL92ehxEEv9JV9ZMasvXd6uED",
  "key14": "5Sq9S4WuYrSQogDkBeMxvs6zoA6nxPiL3inuYP7273CCQK9rmjFeeLakcpU3ypWf7mR1FyG9rJXv1SqcUyzSediE",
  "key15": "5Dp3PBvRqG32pNpKP5X1wn6rNKgfLghxUriwMchtx7qrmwywobPeeQAQEZGgsHFfBQLS6bMxf2mbqCdDgLsWCPMu",
  "key16": "49xF2WCAJyRpkadbDvsntgzenY6VLnJNosYBYEFp3vPiXMUuuoPa3hR2sUbuaT9p6qRGu7v3A8g6Etc1sYQK22n8",
  "key17": "5ArqrL9hvLFRM3CTKHhoZtygc3osHEwe7u5pWw2uktbkqWigcrQqBQqKoiy7oGJQfakku4DKiCavcRubVsyJtpNG",
  "key18": "28dz2TgXBgpVHEC2zw8on7kJyudsVTevf2jmTXzSujS95bgm4s5yknSfmftXkZ2PhrN6jqUCD66gTe6JPo5eNJsF",
  "key19": "kCu7NgobwrTKhGabgR1ZxadsCZ8VMSTdSxnMxTg2FoDah72rbSPw99n59GRuHoLQ9nN18Fg6eKzgFSND9tUQLAx",
  "key20": "vuwU3CNkZiec48AqeAwiqRL7oRbtoVfVC2MBADVSJxWU7jA9EcBeUGqPau6eE5LPsNQ8LFq3cuqoxar5umv3RNe",
  "key21": "kgTzGHLyJTc3wtmGznwWDPSTCCJfNizQbsYM34EPvMxibsASjF3mBFjSTPNLfuKA2MPn4jE5N2p47fTJkt1ghPm",
  "key22": "3Dcy7xM4rDNUgzffXhowDRXKBXbKPKJDBxtbwRwFrR8zst9g9jEqTKuMohzZSjU5yDbV4Lc3cE8YRNJb8vau7NgS",
  "key23": "5GWiwC75fPksWqhTtPvGrVNgiosRXooohcEwDsZUAxuLJTJHD88vPPZaJjXcHFtmdKmYAUhxibNmWHLrKvSY4mYH",
  "key24": "5kf3MhvAWfwQdMwQZqoeKqhcHKa3amMiv1fNNDsfX1EkmPbk6TUsX1VzMri3UDrACspf4pek46Ft6sK6kYB1TQCi",
  "key25": "5DBcjU7coZwRodWKZsrue3BUkQgfMVXjywTEkCVcgNRX72eMFVLAiHg1vrgRYHx6vVBroRJgCTS1scRCWux81XEd",
  "key26": "37A1cA8yXLPwbsAqvRTjBxpyJTE9BNVpZMn6615xzxivKELnJeG2xnK9vPwREKzV7YrTKu72xdeS27vBCd2X9kFz",
  "key27": "3QeY4coseAA3RDcEuU6n7XoenAJujz4z7AEPRk4xUztRd6UryFiTzFmzVp5K3P6PtdMxCUVZffribEwZirTjDUPV",
  "key28": "5z5ybtLrghwPjzuFL83GGTDvuZ3MmBYNHvgUXiMTa9j72akRGYsDQrRRKougzkXjZMTG3FLukaZeLy6TNNLfohGz",
  "key29": "2L7er9UwpuTbrtoEFC5Q3xzG4tYZ7Uyx3SUqqaGwpF8fzLnyFUgc7wXNQSAUSqnwWaeWmTggYgW46dAgo8EYffHb",
  "key30": "2GMTvUuXEXL94YKhkcEvQ2EXQcrrXHUSboeamZUXfcQkbGKUPU4RLLdUQRoR3wU1h3USeYhp4RWmDxWKqFUq62KH",
  "key31": "2HCgpTodzNMHiYfakqzWtpoLUYrR4BE4wXxG9Yau61yGrZnTSq9sesD5cMtVirKP126fF5dSUMgPVVwCzZxgvkrM",
  "key32": "65ZrnJPZASCccsAWEMGiSpEduRNBVqaitSxUhNkdYpTVtkzfuedTM4En3QUtw2bZnVA9bfq33NuQxUXHmR5BnoUT",
  "key33": "3DMHVFt7rBcRQVGqbcTaLWKZyu3qMQMpHy6efr2PzuouHJBHMrW1R6K7G3eXuT3p6uXAw7y2g2HAZrkJECFy6kGJ",
  "key34": "4WT2Xv752kjsnNxpTvbQax2F5mrL86HKN8NQSyhv3LfHrDsVLX98wBLwFm4xPJMscM9JjcADDv86C7VCYrVjdCc7",
  "key35": "2cHE14gkXJQpo2s6JdSRDXjcNggmnAvtynZ2ga1K8xEbmsj9EpJddATN1gBVEmiMxh92kvL1Mde1rh2gzKo5PdP",
  "key36": "47HqwKiGwETZc65GWjMe54TENwVDiiuXPBpLGm6BKJxum2GrPFtQogoMQ1tt5WoPXYuy3628KxRVxbQAMk7JKyG7",
  "key37": "2AyfegMUdzp7eu3WpsAuiRSdphrv5zLXURoN7fn4MgJMhqgUJzy8G9P2NzfjxJquyJyrACYiFB7HZ1oBaYSsBLji",
  "key38": "3MhcbMwz9UGT2Js2ieNpjbtYBdznFscnC31NGzNZeigr3fCGiTmX3qJEVPXhcg4f6hAsorrchubVLRXwyMSvuAot",
  "key39": "62bA32RHDF6VehJkrJV9vksT2NsrG1aF61v9R2EUg6GrXE66WS5TaJxfDbhDoVWvY6aNXdWo4p8W2fMLz8XKYxYr",
  "key40": "2hTczouL58UqBwxT6QAgns97RfTk92kMdSwCscbyBGK2BimAdsm9FhoeqbLCPHTLz1UvAXqW8uVb4mwtVq5KiWQe",
  "key41": "41ddt3CnpNDWmu6kXa9dB62mdAoC49S6T22D6GE7Ry4SBMP8DFNdw2bsoNP9GpGosMWQZQotBnMGABojiYiMvk49",
  "key42": "3SE3p9tqD5LoMGvRkRh5mDRkYcWoto63WgBEmHdD7f2dj9cqHaG1ewKGS71b9oz2e9wNfuMkcC1fqyMxgS8TEYVZ",
  "key43": "4A3Pyif1wEXpoQtMVqVpWSQ1qEeoWWTXp6Hot3MyxGsWDVkBaqhRVQJFVTN55DaZaXt7EteDEsnXTDtufJjCCY4e",
  "key44": "3LdzWQcKFJEnTuFSE8fCLZWZSZdYNFK96GDk6FA83hYbmmMbSftoLtLKjZoZcdvQmG4HtkFXxbNNeAF1ef4hw6FK",
  "key45": "q6uVVqfjHLP7MH8m4D2gbnMSAuJBSu4JwWUZ5tqjsjT4ieLETKrzWpjeMw1kanopdVzhcCN3j5VDFgZLDVGj8sy",
  "key46": "6BF2yDcErxxN4UpLf8F5kQC1BhVDZqRfpr2FCmakHXiuyRbUX3RfVdhEg4RRtFRxkbEQZcBtnUwi7hN77oGBCYc"
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
