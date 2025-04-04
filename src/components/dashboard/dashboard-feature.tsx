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
    "2y4vrCEZnVCrsyDMXB4cRxEgU73tQPPCCqiy3jMJKQWpxkx9BHBs3C1CcHugDYXuQ5o2gNJUwNSuwfr6vD2gCYB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYjmzZcim9cRuc8D5RZ1XJQLZWjYuMvUUx3kEGN3LZx5DmWrHXSrZ1w7T24Ljqaewr4AhvovDPYokkqzFhxDx8D",
  "key1": "4hBx8ehfC7XcckvPUNJeuytouz644YzCnP1LDuV6og1gXASqXABgRtnxSUXf6vbfFdrTiaEcz2ZvZN2BmubrjtBq",
  "key2": "2nSm5o6TxLpbYo27BK3yFo2vhixGSXkxEeB9b5kGMgTahM1YXX2KEMdLDvcqshSoVE42sZJQrkNVuVQpbkKt3Nj7",
  "key3": "4enZyQ8Z9iWmYVXeJnkYZRyozP7fWTGdudUGDmy7JiRzQFJ2TxGUk6rVhurDnaqeChXfAKPK1tgwyZCXtDfpY1WT",
  "key4": "Fp5hn1mgAEZEZnHKdQ6Q5iYqDtmS48nEvjKyXPbQyNhBNhd6R9715kX3HRzgPDVo4pkTyZg6rXvize1rVhuUN64",
  "key5": "4GqpNEpprFwYEXrWjZkWgkEdzQWe6nsTsjngdtKrqv6GP8VTnNjGUV5DVapC1Y8F1rWZfpQsikvvfzLwkvRNFNyk",
  "key6": "dwSFh93U1sBzikWy9Y7nq5cG6zi2abXRh7zKsZTtPeNvfhHeGDYsDMJpTWnd7uA4G3tQakjZHhKsmdeBrb81Bpd",
  "key7": "5t3VaGmiJjpPxN86Z9aT2dCgKqxKBVporZwvu5qXobJBn2T6GNcVLMUfpueh2m16v79hSfSBPHSMbPLPVvzzjHcv",
  "key8": "4f96DQEkKS4pgnJZg3rKYUBzYYwng4gv1iKjTgjsA7cj6wwGM2QXENoGjhdSXjThpYZgb6ZiJKjKeVgxAyjn9ZAF",
  "key9": "rZuZDiFKvrfujtCgBr2Jc5rUYLFFbKPD5pSdQF9bM3ihYK43QiZy8pwcYsCYZn7UtcPi2Rx6FpZF3r9oYwidjS7",
  "key10": "9romxfnmAtYMFhiMmhe2B69XRDx3TET75GsbWcSLnLZMXiTyw3s2KHCHpGtgG6GgbmEzxjJUg4AqGgDNA7QEgXp",
  "key11": "2EbXWj4hK5kACQq9ZbFYd9MkFKC7fPu3cykJxRoZwVuo5tDizEfThbi4csSu14PW325s8tk5bjZMpuwNQsY4Rqec",
  "key12": "3H47dRtqTtPTcunSoSxnaYGZQwBdLEzfLtY5813RQbx7UWZ73aYNvcMcb8FCGDzJfPabdj7Cxv49xccpd2ntebYD",
  "key13": "4noxM4TyjXcbsGKipqhCMsapqtaTT9J3kRzXzsrkNDwm7xNPDQ7SFCyCmxS8DZ7n38nCtzfdY4oBy3rEhZWayBLP",
  "key14": "2ZsYu7b16MfCxrqD6VzqTWYCyRkzWF11yTR9Gq9DLNNKKAh5MQ213NshvvFbjiYdfzXTDNsefyZSmjt14hjP8oqm",
  "key15": "2t8wPQMZWCwWq4MvBkHP2MwGesZeXCMxfJuPjtViXrYhZKTjDZWZjkZTf8Kg7odr1t6wVHp2cJ2sir88TYyz2F4K",
  "key16": "58KxXNuwp9CZym9RyGw7qwDLzXvN7G5A4GPD6v7wCwCG3mVzLdk8B4ARTdmuaKLJXwJrLBVnAxMiqt9GMQm9m2oL",
  "key17": "HtQYKGHGytEjjGaELyo4qVsnCJX9ezi9e9N8tKWi8gYFjwbw4KYHgmDfv1oPZXhrM2n3YC7kn4X5JCHPJm5U2Bx",
  "key18": "29kd9Bj9scJRQJ5VueYdBdAASxiVjgmxBZ1VkBh1YPmarb49QsPcpL2L9t4bPks97K1qfzEZ5VFfXmbA8c2fk29T",
  "key19": "4nifW15a7XqR1fEzUCEVXevfckk5jfesGk4hzvhGfoHAiXzYFy8x838DDTFjKAnzxUTkUFzF21PKSEWG9yjAAi8a",
  "key20": "3AyG1S9bEx8NVY2Nj2zb11G1rzZKvFtQsKfHSMZhrbEqDjcS5bMs56d1UwnZpykCsVTJ2bL9gi9FUdcp3Kfearw9",
  "key21": "4xtQGVak96YrhhCa97iM5cEeGxUpWT6BPYtnSzhCM25EFmM8u3rBAjWaNJpcMicF8xtQWRG5FdSpmkTkXhwPoGh3",
  "key22": "44g21R7n7x2rmtm8fNVnhJZzJEHGjkpuAFEidLdqvr3AaT6zGhCeFbZ5PrzmVmCfNY27Xuf5Ar7YmUUBqmfrsPyA",
  "key23": "4PSEyCyQmfmtoSCoKMXgG9MfodDHvCo3ix9Uec5h7DKvJkjqFyi3dttERdUCfg88fZedPC3hHUeQGm5dT9wS7cgG",
  "key24": "5r1TY5f5TxhfZB6RB3jnS4RD2pMdANLksnFL1aBnjXeM53xHGSk88jTxC2JKXVpSEeLuzYkKDMMG1WvcsXBoQxTH",
  "key25": "2onUbSHL5TrRaGU2oF2pgKSkqqsjrhPiqpYHdrD8VTLRBt6VM989cju9zmNrnmfK92DHnAC7A7PoZRaiGYPyztQw",
  "key26": "5nut2v8WRKgCxecZ6v2mV1s9TWzhpAVZRaDeDutJ8DEc6A43CD4iaQzw2wbnYuKMVH4siBvzx4EvA4ocge6Sdogz",
  "key27": "5iM5CnE4BiXrY9iK2y11azpz6TLZAaTvEvKurgxzknuLp1eHHkWyhP68cfCLg2sh4ojSY9PWNN4AGWH4a1Gthuwk",
  "key28": "4ocLAcZ4yg34JV663zWd7omccyGfFvS8nJx1mhW8zj6UrbeoQctzyi4x2UR2Yj2Ws75uHegGpC9JZLFF7TGftSrw",
  "key29": "2Z9djdptsvPPUX75GCZ4wht5QVgZuFPVeihQGN8QLZkJjDHcBDHcQC1yjTaiTLzQ3ZhfPwENSnHi9mTqgPQAmdUG",
  "key30": "4KtXAL2CPL6bWcWkWMNQpmwGzB2NH4g4v5Hn5jHCzPc7KRWSKtVGhPenu6TyhX88zVN89t23VVRTg1vWxmP66rNV",
  "key31": "3wDxSSMkrAEoPdZz2sawhkVWH62KWXSpdEgUbvtxy99ScAd87PAJk48B1G3ZJDMrDBnEoJ3wUmRWBKMrDhknS498",
  "key32": "3yPKTRnYAB6jem2ubnvtZTLAJAkZenpSdp7ZxVwLtiGJwAvPSaGGcEwDePyjnUCgSWmqsZGtHy5VZQNN4D8yQCwo",
  "key33": "5XjE51F2Y6q6fJJDmEhDmkiS4P4hJUWXSRYPacX1jzecxpFjYWQ9vbenVNr5tfQim6nbkSBiDSPE74WpPddaVJGe",
  "key34": "1sG6kb31E6nvpmTNATBtQTvgUkKMWz2w3bCUg5Fs55mNnjhN63cv9qBcX3eufZrKvZFrrkYK94CBJXLHH92iKYd",
  "key35": "5jYbXnfxzEAvPoWU9C2DF3uQNUZh9jnRJD6v9vUxBBq4HHf4Ud7LPTb57p5atc1JLtmGLF4J5yX24q9LDSn72c2H",
  "key36": "4PaNY6CmrPp9fNwr3NwsucHW2qSVHJaggLUHU2hFdTexiRkEx5wRQ253YMzEkTiMY8cq1Vdv6DmdSo7HKuCfC8BC",
  "key37": "nUkUhUD7a2MUk8FCMLBBTeS65bGKuKtWPeiHFRPpnxmAqai64k3JUNojjfDLo5HRpp3b7HRtXtPrmScYxsrcFdk",
  "key38": "5VR1bsezrdm4LGd29QZ5ywJQBisL2odcc99ePZQgkDSpAjZJU6pWziAtUEdFjtVXEg6yNhha523trdFA2WgTBYAz",
  "key39": "4XxX4KjACYw8Wn2QnYydAtCGAik8bqUNCGZtjmavR8qf3BDbCjJGaZjUJziRbEKv9gnWxKg82sHcxEjk33zDXhj1",
  "key40": "5Nw3jwaCRjv9XvbubvsPUxLKxbfavEsi7HuZHzzh7B9VXMd1ZzLTDWxjtfCfpFaqThyVvvhsKJ669QLg1Wd7D8ki",
  "key41": "5isNmsfMEC3fr9zkwaUUBWfw2hUYdxs98zC41PmSDnYfEi3UEHQ115BkatxRybwKvekBH37m1RmBkoPaUYSNSyLx"
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
