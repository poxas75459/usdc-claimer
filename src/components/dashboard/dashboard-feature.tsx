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
    "56XniVXu4AKFMc6baAqwU1d5SnWZVy2QPVRGAJjApecSCyxivUdhaVUmNtcxTkEjdBdNXc7ZE8KUUaNPjVLsds4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDTuNNUMJn7qwSTihh65DkgnBninMSPtQa3vLogCru9BVKzFEj8eM3Zej8rKkHfpvYcDNt3Ck1VDUV14SCf6sbz",
  "key1": "3UAshtSXU27mZeZHT4kTUWYiz6fCHwThhh78Bt9xKkNQLoH7h61bGpm6592BHRP38BVMQsj3pQBoyGzc8DpJucHA",
  "key2": "3wHevsNKizyJRTudQBNFwHrE7Z3wWDrodjbRqm8AUxcpHzTNgrthz9bHXyvyv8cpLggwWZpiHCLzozLY9Crr9xvX",
  "key3": "2Ri27os4xZakPdrigEy7SSzu8d59qideherbMBECME9RquM4pvEJz927uuopEUPzpW19jt3urAhJ99jFxdWuCNto",
  "key4": "3gGkNyyiTPLUR2e9mMfiFKK13uCY1BtFMTYqhCvdERKgAZ1TScmqJHRCWiCEEa9ofgvC3ZeGus16VTKUKvSHcMkj",
  "key5": "2PEVZo9CazzGeuH4xacbHc8ApJPztZhTxjKsZiv36nzr5G2DKLqytmjqHY6CLsAXf5mzRv6NRynbw8bA4d6LuqaB",
  "key6": "5GwGKK7A6KhhkGj7NTNGVqRc1F3KRj8ppqg45nH62wcmbuMAPGxWKYVtWSvAtFBP2WD7sQbwK54eikgVt2dQHJeV",
  "key7": "3PZ1e4oL3qieooqWDEHi7PyYQtp5GqUMi9UC74FCcb1G4L8iJ1EMifMDuVeGGPyPwSm2qaGjHQS5S3y8YAZ6y6jh",
  "key8": "2t43giFpomU1m1h5EBiMNHCXFmme54zb8gAaBCF4JooW9t6cfzJ9r3zzvPiLpdAmXQVQT74j3sXzcmUth58TnLC5",
  "key9": "24gJWMY7RWcfcmhAXQRJ2q4DT2no7dggbFf4UPWcV4LTLPhTc8CMZmwqSThoW3hJgyaaaM6Eb6Ud1ZbzaDcfTXLi",
  "key10": "5yuRdr2pxxVsQaaaTUtdiYPpzV9EdhJMwXX7J4um3yGjw4GYFw2rhLQqt7JAnivaB2Fe1NYVxjqJd2PGDvnk3An",
  "key11": "4iGhWDQoHRBGenvrYD9oF7WoiqcogajHVVtekZVYsPdSC6SHxDV8xw5yuS6M7RqkF1SLvL21Qc2C2NrYZpGzQvFx",
  "key12": "3b1NSfXRwhgycqWWfbvZbFPtZxNWbFhLeTLd5xdTCPGGsE76iG2oRFeQaxrQAF5yDxmSiV4LFS356N51ZHLF8q7Q",
  "key13": "5oVUm84QaCqAAFzeXzkMtEHuCkPFNVJyU6coYKT159gSGsgevF51MNPHD7zVksMFxhukjvniw1p6TJEGgvB7juR",
  "key14": "25g9up2GnQPa9BNGFYjsC6X5UM1Z9iySAifWjbhVU9PksHJx8Yei2HBQXo34RThPBU3kVQx5Kn9NTM7LK5dvLT9M",
  "key15": "5duGRDGehibBiXEzcnuQjsgdmRjjf66RENaJjryefj8jn9udZShG68bNjF9SGPA2ou2LMHgRX7LVGzcZK5AamUbU",
  "key16": "5raXPfnbvHt3i64e6r47E92bfdMZthbvXJcGnN3kEAVbrdDbKt1CjhuG7tztH6o5GMmkoesb7bfko3VfJMxJRm1e",
  "key17": "3hVMXEjRbs6NafYDga1HZXQFsjeDwK6c3uF3edRQo6TaSF98BvJNUXCHyvvH11TKDo42zh4DSBP6A65eqeLaM8UW",
  "key18": "5AVtmaSkEzUM1VDgpuBFsu26W91Xtdrv1mFDxsfdihsvQgK3jZhFQ3zoR8zgLtQj4zuUAhFMGpxf8vEu846YwFeR",
  "key19": "2KTJVXyG9bQQUD6qjW4igL93nt9bxwzubtVV6ot9mLxUZLVWRKtUFs9VA1R1X646tuqLv234MHAb5CZgQ4zDg2Fp",
  "key20": "5yw8nc46F9yGmRTrQrbpb2yTMgnTqgYBLuQsy2ZPFozG9msTWYBsAYNLLBdKYMLQgf6TdiisGWwUswNsuvpeyZhe",
  "key21": "5ASnHqb1JDYQR37qMJ1gfgH2jodd4EQ6Piu26twvebdsenf4vTRHHZ5scFoUgWW4m9iPRUKpGmrzw1VaZh9JJuAM",
  "key22": "2usETnWfgkqdjjWTfZ8jtfyMX9vRXLD522KXPhpDbWcundWx9zU5TjBBH7SEmspsC5WSquJMf6VvMRxcn8W5a2FV",
  "key23": "5FuKy8WLK68FixjbSMvgC21y7GM9LDvj6JkkddmDK2aFn1K21CNym1UUTpSuRtXuCXQswD983zSsNUBTowbfPUAN",
  "key24": "5Xbm4qTqEbMK6Uh1ogkmeoiGpBwSipqN4cQYDWXy7gpbJEGftj6vtxDVX9LEMtNpHMoVS2h8f3axTLKFDmvBcpyd",
  "key25": "5nUKYPQxmwKHSM9BfnC1XDFipYSSuYXnUrnoKjdMLLa4X6t9Gqe4hEhh55mxK8YAmKzXhHEYXHZWsnZYssaCVZMt",
  "key26": "RnuW6mquvHXM3FUjyQLuxVmzqox213pGMgEMRP4Cv5yewuu4jFMGaMb7SoB9CuZPXdhw2XuGbRj3CyZvxHqXaDq",
  "key27": "3qpVXxbjyShjDnoCNTThcgWmJ856BvgwUbPXkDrNz62HAxUeJnxGxGmMCgL9nh24QLvGEgQ4erM6tcD1ieA3hUgp",
  "key28": "47MCxyr4GUZR4dQpDrTcHJ1wmJrLSae9527VCp9XmrxErCYZtgFKnVAuE3YhSjZH8zbvTNDRU73dmLHCKtxpARJK",
  "key29": "BAyGMTexjNvWsJD95FbrPJM3TVBgENtbnDy1ZxG7M86VW35CXkBRpfTXYnkoeg4NDg8GC1Pu9MULeihpqmrJRdR",
  "key30": "4eDSSR2okqq9hxu3A2DhcSVX6Fycb6aAbLDcqfis37GJwr6Hm7a3UeewGmxo8NXs2vXyyzgvGRVrdMsayg5ki3PB",
  "key31": "2UxfjR9zSjuTn1Nnqqiqq8RGQHfdQ3GGmLPNpHErcZVksF9539SV2HnwwsmujdnpphHUV6Zg4mDhCJm8RdhnUdGE",
  "key32": "38cA6ZHWj8DknJTpSQw68pXuChsiWWjbjp8zKQHLHFdc89YB9GkbPTBgbDGjtMptQM2CwFoDuLsSH7CCzKUU1akb",
  "key33": "3dLB8VRRCkT9BpNjmtnz2YKNv3A1sBXcqezNnn4XsaHg1kvT2LGFSZZGwCb8c1N65TL2zGhj2g7sfkkRVmHPMhWZ",
  "key34": "3ecVMVeayi51W4U21C1RiMNwar7YzsXCg2LWT2Mmg6taJbVwV1udw928552YwS9PARmZgyWXWwXzx4HDxZrCaCjv",
  "key35": "4mAjFDJx1cNn8wRmcNU9263tZGc9hACrFzE2n24pLeUsspnkT5JbxkwSF9fj9UqCEcSD44vX69WrMWmhcfXC545n",
  "key36": "uUTQ86xunvEbvgGhNuvYu1zxJVDvwqADiQ8fjAvcDrMNhUNYN51MbV8P2HJFod1CZmnrMWSkEnDdRbWPrDKSTNM",
  "key37": "4ZDbHHSEMKByGeNVpuqjEhFCj2M7wygTLxNormDFfUYkaucdLMPkZACZXHLDSjLjK5d1ph6iyv8APBLDhZ1T89BA",
  "key38": "2UHaYr92ZsFRSHLfiB8F5LxVrJTFFmfx5Ech3QocSNEhKJbD8FrcNSroKbdnESm9tQNaWL9R2L9by11zCbKy5i6Q",
  "key39": "Zj4coFGYfNEJYzdTvhunnuEqSSim2ssUX8Jvv4hHj5ax1nRWW4BARBvbBY8SMo6WWtMkD2p2oovygPfEPF9vdtf",
  "key40": "438n48WD6vzwWc97HzcUQCA2SMeEcB4bfdb37t75qWGv9RoXueXcqeXDLaEnYdpovZU5smyR9chqFAfJMpVEFdPD",
  "key41": "4UWLiM6J8TwpfAmXpE43Ju1rTDw7PfouAFkBWkRjPQEQMh8YGv1WHkrmhqPEMq1iqF2VJuAME58nvpMNXekkx7no"
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
