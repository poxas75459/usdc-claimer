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
    "ZaZpLo58knkaszvsxLTKenkz3JRvAWeDLf3qT5zxvmKNian3jzQ3wLPmVV5wngWUs2onZJLpweNJv9XhFRCizTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUXgMjUmzYWZzLS9eiUxfKzqVN9DGk5PNG1W2pkkrCYwqs6DihX47nUDeRDt1W5So44JRqXPqzpqWTepBi3qL2N",
  "key1": "48kdXN4k4uTtVK8PzJkf68AhRRqpq1e9SUSCZAoYdSkDPMHYR55CrZ7HHMzJZL8tqjY1SrjR8U2i88EWZb5hLQKU",
  "key2": "WEQEhs3bpG8yTAk5WYdaqDjDFkLdibBWLbGMWynW1gBZoTpW6WXtzrCuxVVisjPFwbYdevL4rew6mM1ncEq7JBF",
  "key3": "2GjcPzyDkcgWXwgLRyMktFK2vJ2cprWfzycn5rPR2XjorpPgYzrdF1eU6iApr81WTobBfakBzMDipozd7CpvvH8u",
  "key4": "2GXDTg7fBv7CVDMWosscVgoaPQggLb6yCdUvJot9wwe7e1P8GwWtogpmqoCAgao5t5gfSWSFAxusJFjy5WKjUgnn",
  "key5": "28RPb89mBtXgzhTbqV22PtqVyM6vrjrrxo3WsLefzyEAFe9TUAbdeXcPzVdpdbia4navgsudz6pLY16DvhCUsriv",
  "key6": "482JRYxf5pubttWCHXDEVPw12ZT5m1ofyWyxbE8v2qCtH6wktHkgWsQuCn15TJ2AKcb8P1sYxPSirYmFxmYoguuv",
  "key7": "1KZ3jz1WEgpo769ccAn1v81L4zab2C3WrvzHa9LoA9RPwniociX7fZDkLu3iT6TVH3786xay6ZTisV7j8TEN9Yq",
  "key8": "5wGzzHj9KNbUikJv6qeE6d5umqE2G1u8fVH4mhNq9AbMVrs9F6z2VfWrAv8fpsEv7rFhpAx1ZwqNdq3edbkE2xQQ",
  "key9": "h2soSSr1CR29T5hDAYYhzJphS8RbR44P6d4HxBxbRPo91P29o5HHMnmCJEm1GE5tuHN2SdCJyGqEhgPP3yGYNdA",
  "key10": "Qbdiii1z7kb5iZokSZBRCCxqagctFrbNqBmkCCsN3EGvHKKiBbpmKDSSYrDoZ2FupGJDNxCLDZR2PtLeZPRNSzt",
  "key11": "5d2TEFvKaEC4orfZvFqs6AoaH8V4HLegPUVpNtp7oG86YEupM3Hd2L29NSbBXH99eVrNB9PAo9kaEG8qNwpDjg1i",
  "key12": "22oQBVo7amQ8SSsTCaGVNN2FKY2sB6pUCFsvodYXws27djpwQzVMApL6a9tPWPR4WrYGMQRhMZrmjL6wNKkxiATK",
  "key13": "4kfg2pwp2Je5JRcEH5qE7bKvpfduoEt5Be5jZ3HivwTfA4a2iTTmNxCR5fzUgSZF6ZLMWroxnHLcDhNn1DU1awhB",
  "key14": "3dC9QbeBJf4gUjgMa5qz4kVjZhiL1a8fu6vhSLKjHXXBhnqA1xDxeJ8C7VxpEpuV945HzbfJ2Myfpd5w1pnTHqrA",
  "key15": "4TXPXVtxnTU2VMtmyCYbqbJvDjRuF48a1ygZt3Ln3WLZaNoh63wyHSCT87szWLFCrhEB4kgtoBPwcb2cncHLyysh",
  "key16": "2uDZhnZyDSfPD1R9p8vKQruhRVWJriD27A2deMh5U8RqDQwrM8Ca3TFm415x4zEpSKepn3REB9j59SzAFujRzjFU",
  "key17": "5BM59Erd7FFu1deNCSvyNjzhh8jptkzgysCLUYAUbHvRHYS79M9mKgHfNjKNuvBuoWUa2k7xWZCzxQqytuWqCmcX",
  "key18": "39kXhmT73qUZXSNjB8WfVSFdASV2sLL9Ua74QCNbAmQXv5LPsaupsYx1au13ZzWNry8gsB4TrrU8VL4LqrrP1xi9",
  "key19": "5VPP2X9Aw5SnntotgCsfmJG7cwqQZ4D5fRRDSpJiv8prJbJBBv5UBz1VNZAbPR6msKvEa23G1kemp6M4HNNnmhuQ",
  "key20": "3Hay9hugUZt6Ftn5UhakdsCMygiDSsnsSk6J8Zztrt2LHLB9ebRHobBktqJzftT6sVjCY7T8ntc5FUpbYXbDLUK4",
  "key21": "3NL72fWGNEDNUs2P13tEkk4WVgqn3ZR2vAyXpJPcieBWMJMMEzDjYNYGUhF295fYA8BuwZLzhAFKFTe8bH4Ej32b",
  "key22": "61wbDR4yH8SvTRh9t67TjtifesD2m4hZeR5RZ4XCi7WmtAY6rbxkQ4Z7XMGsEsaM8AoCkdqGUZ1u8n1G9kgV7nZq",
  "key23": "J4AMv91enonG4ofQRfmGaVUJozZBXKXATrLDu5gppB2gRzYVFfwfXiXdRdtfeAkDHY1qGKotvokL9LuBzhhCC8m",
  "key24": "364kpVu9Vo4jZw4BWhPK4uMKccL5cTAm3Q8Ya2y8CFHEFZ7vMWZrnBM9VtyyAkwbrDmCi3CDNT7r3feQzEAfcz4s",
  "key25": "3mZ4L25BLkKVhYEto6oCXXQyQLQYkSzzi3x6js1Hwp3og4u7yYKAXyNqbW2YXXsCkGcAmtVDTynbD6W9LPz1bhH2",
  "key26": "2oT3PsDDDF7BrrV31DTGtXHFYNJWV26AXSug22j2RdhRyaNGgHdBYtbpCGmELaeo4KvJTCtdw6GTee3eRqKSNiKA",
  "key27": "27XbmnhAHGr4owdND4k9djeMSsXUN4JVuCtzPMhmDaHZWPoQikPbypF6bTRPk1gxSwDnQ5i72W2FrZw6QSVS5KLE",
  "key28": "5RCpEn6ba5mwNWe8nmp7tXVZ6ZPZ9NAPoAPkiooiEbhZYQXFSJCYk6VBF2V1siVmhpNDCx3CnKSxi2VfEw5e6hg5",
  "key29": "44Vf65tCVanRb1S6eqcBC6xmuNQ87DwsKeWpwcuBkD4R8y98v14mjLrjQGLgxu339Noi7cmPdxiB4cpSKRGap4y5",
  "key30": "5fSEuuDsuExZZnuMxgyrmPaf2vBB8uxQ5bzvsbiQE94RXoArK6PxyKf1iFoPVPypLf4X7VSEgeL7UdYJcPFmDNCT",
  "key31": "vAqq2cFjruaoLtiF4oNZjfuCwJ2hrVNwjz9eWa5CxtuEvcppam1bh1Tg94EjYQFVrY4tRwa38fd2hGRZoAev5TA",
  "key32": "gUEQ8YCaZpovGdn2PiNRuD8EWRTNtgfhd4a6mbf3ZJv7WQ8LP5iH8v7RX3eb5MRoioQ2KcjHkngz1tAZ5vDuW1m",
  "key33": "5EqpihKbk2pC2C8giWq19PunEpwaAQkVhdR4TDwMcsxBAA3BWuDje4euX2gFd4iEr2DbifDxCcRSbhZ2FS5xYy8F",
  "key34": "5Wz5cU47Wt5rhw9yR1LqtoCeiAadzvSMyPcgzgxyMMhhDGvoKNWCkHzCAwqjqPsWbNeDf6iHxCGsvCJ7bCh437KJ",
  "key35": "21ed1mkYUVV1avk93TrJB8VX8GZ4L8xHUpDroUbFpFbVNRwFzNyWod99xQXVE1SPnddWYNBArFzyR9wQBW2wRWzs",
  "key36": "5dSnYqd8MM36WbPVunkRi4kSRZEcgMMshRhpj7XYBcwpkAj4MxVXCzRqomvcFoRFcG9TMjk1uWGMHEJ9mgUxLNAm",
  "key37": "3QXCHoe8xKARabYxLatMKnKSW2ZuyQxnMDfpjDGhEPLSksRWShLyFQ9prAiBmcdfPHcRpBHfxicXWZRXa6A8wYnM",
  "key38": "4mdEfvxoV3fG5ZTpeUVS5HaJwde9wcZBqvXoL6KqPd6Tji3c3fnP3FLf5P1Y4kfuxVBoE6iPKtJeJzPNaVZd7Wy",
  "key39": "38xfnA7KJUffVr3ukCPJEUsfyJYYsC8emx5srLMMG8f3gSovvauhnYQDe7f2ZFgF2PQ7BicE2MkmjfE6w23vFkUY"
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
