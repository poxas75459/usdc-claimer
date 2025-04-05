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
    "3D765sg34KMKDscxtcZ8roLqsw6XPp2MxU2tH5sGZDKw4MM1my4FuTZjVAHtUrTEkjcnNhjRzfc14BFcfGuPgFpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBmZvEuvz8eaxLeReocfibczB2vnD2FHyebCfeLRjCpWmmXurGvGNqv6zrFgN9bMi5NzEbPbLmwPLSUcL4vLHmu",
  "key1": "2zhYFtcrUKqdCku6JvAqttFGAGyzgQhNWHoD7CMVNv3kTGZvACopFXGrds4JCRYX9Ch1UGH9jexna8Ra9vzMnncR",
  "key2": "5xtSrr8GSW8h9JDCjd3YCKefahFdP9T31Yhe7s7kb5nN1xzk1wksVMF5NzVt7X2ixtHU6rVobVXpL2YUjpaVqbDs",
  "key3": "4srWZRLkzvoAxoUxAhq8ku8VpwbFXKVuMeUzpiXyvPPxbHF4G8AqmkSoYsuQKCWFmL1KbDA8WEGzqMUKGzbq7sVQ",
  "key4": "zkdrnHF1BKHpPBcbVEumHe6LVk9Z1McViTWokgCgLkoxJ8pQANU79Xgowt41UPWMs9aQE9hNuP9BEAR7ggLVDEa",
  "key5": "2bhuyAsHb7BQQiMMct2QFWTAfdYTAU9c5GgbnxWB8uj9oTyYyDXHYcT6rXyseA1XCZrdddx7hT1dttYdQdPJmPDf",
  "key6": "2D7Ajqt7YCXevxfDY2ocfujwtV4JX9E864fYNJ4jZU8uG9GtYyz74a4fKpao4M3FPTmh5R4a8cyH75UBj4bnLkhu",
  "key7": "4ftJ64cDr1cV7rif5ZSxu17Bh2uNSvq5CRtUpQruQAQMsMKiyAJx4vnYndm972xEy2678j7VirPWR9dHXYm3sjvF",
  "key8": "564quQ6BxqzFX477c41EFFqicPwhBBc3qHMKwVG2cJvCiWLtVGuTm7enAvJQ7TXrMSno93wEd9HPPxuvDxyNq1Rb",
  "key9": "2ekxuYyRds2sep94MKB7epSactjD617u7oG5L2bH3y5whqRL6TY9rWnrepfC79hjekPtAAC8UU6vvmKPKoBQKKhK",
  "key10": "2rUEunpRz28pTtBJDhEcdfZCX44E2u4bYjutb8uUNXTBkrkxc73CauZ2hbLkcReytSjXLESRP7qprJVKJ5Vb4FqG",
  "key11": "5wNmvTSJJim4ZcZpbqRcGVNw5xJL6a3Jr7sUoULjQYY2jwq22Eb8KK72TPjJzHvns1chZqdynkiVd68ywTn1SSnE",
  "key12": "5S2zxQr8TtpeSsbdEDuaB7fu65aZxZQHAGh5QwcAERWCtb1aZ114ujD4gx2wjBGVw5KmSgsntkARtpPPF6Sh8pHN",
  "key13": "VrAziUnWaJXEJvmR3tdVVmcySyLSbQxGPayeF5DffnHh17gxc6ZacX4HuC2EWhyV42gfj1gDt8RwUG8SrHpFUy9",
  "key14": "4HzqvJ63SuaqejLMvkdhaQb5znGtSDty6Jy9pijuqCJRM6HESCTh2fE7DNvuqPQeZzn7jvRGJCZktavmoPYLtj8X",
  "key15": "5S4d9parmkp1JMJTQGzUfup5QmHwEoWBcjW5d2R9K1KWW79qzZ1X5keThXAadU7z7MLGeSk3QUwnr4fGceWiUk5P",
  "key16": "4LBbCe1Hxb7GqgarJPtRTkHpcYieQnnr14TpxjMgrRecWL3rqjwHZXMSekvY7WiM7bt82StaRdhMDLmPTqfVu2i5",
  "key17": "jyz4uCWszR28TKE2yRURsre6gsNpH7hiCgN9Rmme5ks11qtkCkbDjQBPaaQmcQp5Dzhs1R76JsiMw6mxi7mZApZ",
  "key18": "H5Dqh5oaJiadq83xEsN66aJvpuDBy42eNzSttH3pECcaeXDk9iPSLUkaLyFbmim8MUpRK3p9BYR2NTdf5xXFpvq",
  "key19": "2MkHHy7EFKuCfQyCHKhH11tapQJLTWseChurLcV9YzUm3FPrbxfSj6CQoVmu4QxRtE8D45oyHvJDSR2hVVQhapAh",
  "key20": "J8t5k45rYvFHaaNp412ZFQ6df9Hn8ZFdgeuxFmJayGPxV39BmZaf8nyHKen5byd5LDFf5Di1k51tuQ3QC3xgjdi",
  "key21": "4Ba6BQPHTd6NXy94eJh5rstHUkU76hEA7R7FkAcxKobeFFCT4jhqBeSBJdv7vQdLitXrpfGxWJpvgnrLTGJUz4Jq",
  "key22": "3ANp3kq6JuYRS5rfCks4sH3vRL9ScmZKNCqDnnb7zkcWea3Rxt9HhZY6RZSU1MdVKGF8U6m6hUq5CfxAardgABai",
  "key23": "34WPDXrsuG6QqzvXZoYjuZEuBoxDAZMtzABULKQ5P4LmX2kPamGm65D5kq9x59SNeogiTWYcc3J3hsN34jQXVb9r",
  "key24": "2zPifJJJ58Ty6YVPbPuhn1fc5vVLy2hiuV6ZbCY24wLhNVosG6UXBWaUXuAC3N3TrXgAx8KtwETH8MmpChYUJXTQ",
  "key25": "36WKk1EuftbGXqR7HmuPVtoxsuitDSrTLUfu5LNzvoxx9Pwdn2tBPjwE17XRbgpGudWZ9NrZa8d6gxdqRu7NAnMv",
  "key26": "5Dm8cLZmGHHhGyYHkkYqW9WM4grHNCoEBBzvBkX6vZhfUw7UBi9iyd4n5hKfoRCjcH5UMaZFbKepri9cvA813y7S",
  "key27": "3AhuFXPC1Z4FijTZN7cXkv1ygs8x8tyYr9eJgd1PtH2hjxpfabUzUyopJA7Y5Ybra6pgzMwAwpBNuixVQiqwEaUu",
  "key28": "4YcU6SUPEH1W7eDdJKxKbUa48VrDbZ74kcvvFsaFpzrrGN1SVwFgLQQjP8JGvzuwdS2RG5BxcyKJqTE5d6fyqvhP",
  "key29": "3SRGtYwrkxfFfnRaFxaA5WpZU1mKwmSPEh98AdAAAfhViVRffjicWhbXSmcbXeHpn7GpmhbYfBbzBw7Ci9aypXi5",
  "key30": "2fzXD5SyqSd2G4GsqBjubJx7NVrL66sqW16R2Q8HNYP8XzH4QjUvczkUyApohCsBm4mHLfG2ftrei3gUXPf5HEyG",
  "key31": "5gFGPNoWed66yz2oYpPKKrXpTRgxG7u7bM6w7vLm1qPRQbKgJyoMqmpHN9KV3c5rAj7j3qrYxTTQEhtRuqJjHtBg",
  "key32": "4UJbeTDhbzv8L97P6Eiz3nJmJhHYEiS35Thf3m2JmMWm8Y9srt2kwNjPcj8CSLT1SUjdaqgJcnhbLRARa2cdvQti",
  "key33": "2ABtXQTBbkHydamZhz9VBbp11Znxs5Xy95xZUr2AbQMWBvqF3dGSbVCRqa57TV8PHSViiPiboeyAFcYZTwGDK5qx",
  "key34": "5KaXvJMWhtA148FJDunBmxUwvHK2dbm37X1W9K6KgmhQYVLNu81ha3PBk8QwfznmfFbzNN8V81nzWF7D37Fu551Q",
  "key35": "4NCex1btoSdr9WiZiZd1AE59HF41NaTN6SWSb1vgY8snR9Pbet6qQ1BJhgyTi292F4zzmEBMvDM6VCQvrcNkhuzU",
  "key36": "sSk8NEhWjycUnFqiQEYcDnSQg5PGUtwpCqFwHK4C8Wjn7xmheJxKt4WjgM7WyfmCBPRa47UJ8teF1eQbRxeFGBv",
  "key37": "Zk5fos1dQ7R7L7QHKUJX1bg1P9JZmDzD5F532Ss31kpcBjPJMWNL4BbAuK5enudUoLcQjHZdq3UDCpKJuAk9EUZ",
  "key38": "5AdPP949Xj1BB7Kq2fa7vuB981zKj4RfCRFy2arqYmjpJmM3KJpLUsYo8qPBxB1ajDFHyhWLTkLeLyMSGQCbcRD6",
  "key39": "vnAm3dgzFimSznnASMefsaZMbJZMgjyxeMgVc88DksburD474nACUfBkqUErXAM15RQevFbw7bXWrgsjC9UqQjZ"
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
