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
    "5XamsCq3C3tvvQCw5Kvw9qen3SkKrkb2ChQLEqsZWuEzKwyHbDk7McFLStEGdqMrQsFVog9cBBqfxBxH7SNruAat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9kkpm2xTNUkZwDmveStb7s7gYF4AaWaZqmdKKiW6tCRBaDqNiUvv2TjR62EcbzPcSmF2gzGPai6hnBJFTkdkTS",
  "key1": "4mqH3FvwChejWpTbNGdLHvznbx5aggFKq4Amo9ind96NZvFHc13LLBZjYQfPuX6ugS28buMqvpsBJZqwoxnSja5Z",
  "key2": "51mupahSdVbLdEwsjFpMQjTLMCGmV7FLCC1pt6hwBwk4y365azADapR4NmX3pFvUB14JUUviHwPrbYeNiagMEFCV",
  "key3": "5ipJmhWZgwbSiKQ7463ggFzXTVy4pRj2iWUHe6BCs7SPZFAtw4vbebcFBJyvyex3gUCgbGZQFWf3mJCBKJX3yDUr",
  "key4": "3M8FbH9GFAKsca7UQo2VCHWA3C87LXiWaveZ7coQDKBEjG44BtEhvq5XUbGCi66TvUHkmx7apv7sJhJ5ecGr2Jny",
  "key5": "5TMjN5UJGNjydqiAXbdBbCq82xPSW4kHDfkPb86YRz1HzEoN8UZrj1ijnGmrz88jsXKVe9nvFXeCyv1sbCLBaNhe",
  "key6": "4d1LzJJMiKAKyr3sxtyVfJA7v45AxRBP86egU2dnVtoU5RMswH375FinGHHyPPBY6wggRaUzU1TVnr1Tca5juLXJ",
  "key7": "jz2VHV3VyTsN3yqq6krbM3iNJPLFtd3JBD6X2f4WsUxtdRSLvbsPaXz2JCFApQuZc9YM7xBCixEY2VZhvnykh7j",
  "key8": "5Tj1ZcyWL1ZuqN6FA5yaHsKnVJXgFut1mm9nZauABZvUhv2qB1aWzie129iWECerFT8qkck8knFFNq1tSbzJgRWr",
  "key9": "4ceXKZ2mMyvhh8VjckDYCWZuHkjhLq6cZBp58aJd4PA7WANxc5hEe89ek8xevCJS8FbAtWKdprqef3GvU5r4VCEE",
  "key10": "MepTtk2q2a5hMrnYbTxYDhWQQ6MWAzSgQqj5h1rjHGJC49HqiwXeSNBsfHaXBCyLEQhhcue6qNLnz2mVpYLyBNP",
  "key11": "3LCf51NvvRMCMhhzzFwL5y6griA5HMQBqReJatvwmEhkfxSXRgKRZGamAJ64WNhKjExnKRetjFA11tEwETd8J3Ds",
  "key12": "4izacM4psBLSCZ2ChFgMfhZDxPBfjgZvmttydVGwYGb1hUhyjQQAR9sUnfxXsEcAkrgYguqSiFp2kSKPLcFubkY7",
  "key13": "3tYC385oyMXPcwFnwwNQeT75B9PgV18yQBKYXUeqeQWUjANejgCecmBEQHBeYVVMUAKnshKAW45MBTmUpE6w9jyo",
  "key14": "35ZbFa2QPJSXEEHnJHYc4uRepeeoodZcH61hxgD1kMfqAPjoEESyHxQDbBdnutDYW2C7y33NiGA31bpQ474m7QfS",
  "key15": "4kY2XLXa39FEqmy6TRvGQjMqGTRkj7GBeUBdSNav3CD4iYUiGhpYdTYxHhf3UA1CRZGBdVeXLEzbNPJTNvD5vwhd",
  "key16": "5EXZaPfK1WggyjiMFa4a7114w9YAicGkmfY96AhBjMMW1ALFGUJ9FoTcbQoqCBJmhJUmyVuTJQ4AvTF8R9qBtcxw",
  "key17": "4DcmEnjNuBa79zbnLR9GJycjHBv8n2HF3ABNeTCQUo83absY6qyB5Jk1LffxkwUt4VjdVSkiFkazc1jtCG4vyuCZ",
  "key18": "3JzbGsJwqvNnmi7LR9ZcrtJNTAeN28MYdVM13ZTN5d8Zcy3rRwYbGatq1NATu8uFiRnCczzFtShUV8Lipn7auKfk",
  "key19": "2kE3p3jkQs7DJscSuEokcdYvtLPaHw8SsQoSmu2ChJN1ZNJrpuGLWg5ha6TWoNn426uAi8UzUKPBtXWEoJtTj9kD",
  "key20": "2wkauLCgGG6c2Q8QccmXtTJDfNfNGm8Q4w9uwnUJ4Tp5XBZ1S1jmA4STYkqpzPMvcdbxcHAkQHLEiqhHAN5whsu6",
  "key21": "34gcwcVXYWQ4R5G3LBYBwbLAVYz3CgoJkVkMyZWGqZz9dWt6Eu89n2Q8HLK7xqUbWskzneGy8uu72iszG7BcHFPC",
  "key22": "JYRYAFtPt4Jdy4HXPuhGNKg8hhgf77X8NRnBtX1LseEVv2dfvk4F8hRzh6BT9HAPfgq34GdSoubZxF3SQUUS75n",
  "key23": "5bLLDGnusrPDLswuuNb6tned4AQUJKUEy5z6JKqfJNzwdbB1buqmDhLbYDmMvtBuiev8Wkr7dTJjmxQACz6kbK5D",
  "key24": "4hUwmb8Dhv6E8m15NzN3X6f34Jr2wqFTVE913Sd8dpbSBRYsKgs5ZjAkmNEmaS4yFoo2p3qgvjqiRrd2ZPECS2qs",
  "key25": "3EL26U8u9m6FJtTFXeW2KakQvkTWHaWhcvPpxbEydWxyKBLfFMhG9fqVjUfJwyQ4sVQb1g7HBBcq3UqnTFRViyvC",
  "key26": "3yKJ9nRnMmvCMw6PrMgYA2x8sNh3mv6e46euhFebwr2rJaQEumaoe6JBucjLQsWXexQzrhWEFzWs5GQELHTHX3Ai",
  "key27": "3tBZgAbPo3UuWGqkpKbJi8hR5jYbZRy6DU4qWQ9AXxhGLQrN16joBkUjpZWDJMpTaizNztVw55sbLpmyZj4BJ1kd",
  "key28": "2SHEuuY2XHgEvZEVMMa2ksMKNNgguctuSswLTCBymhYn56xCrek8pwiJpVVZhhnAEo88LS2mdbiri8uXFi8s72Nu",
  "key29": "3J5q8hLo3EdMsvhdqACg7eCqMFiMU2tndFnhjSgWGycfZG7NRpxqGYHsY5KpQiaxhEgbgGt7ATZba7pkyRzB1ovM",
  "key30": "34ZZMBNmHdgv1YLxp9xmCWG8LXsqrJubQgQ2baU4neRK3gug8UzQbAv2Vmx2hFaMgnGJM5G4UcAm5hShPy8gAf84",
  "key31": "4aniHCe2Nkj2hEq6ztFF3PCbf9mNUT3wAjygP3vRs4jvpNwT8GXxDg4m9bQ9sWPkruWKujQ68g61tDGMPQJeDPnz",
  "key32": "2keTY74xgVQuNgc32XqwNQWfQcBvmkLURuQVBWGHqzpDv5QvBQdfzXCWk4ze9FWaPXSY4eGEPHHWzV4WwbuNWKLT",
  "key33": "5iGfXaw7ZCc5wSnb5qm5SSDYZMegE8eDNcgi8K7qP1CwqjngX3hpEueCdCiqgn5xXxiP3SKeZ1iK4k9BETCZFSJq",
  "key34": "4beCiPhUU17nuuMDwVYM1ZfE2ccke5jRqst9RP9F8iEng4a1qoorTZKMxW6aQkoiX4vcT65FgdqVnhVKiCAMkFuN",
  "key35": "4tYDeENX7mksJkPBAA7wcPLzbah4uXN7ebrWKaygZtYRtma8BPVium685ZvSKtA6DXm6jzW8FoHWWufoYd9BLWyY",
  "key36": "4JtDUKon4r2b7RbtGs25tbYrEKagzWNyqVcmzHPtvFcDMDLkzUMZF6qr7suujqUiYuMsFtdWSYjTvxKL8tSLKXW9",
  "key37": "5dpu7MZJqr9HTbqLsqFmZxgRWRS3seGx1c2MruM9BGAWvPMTF3JbFqLAah3M5GPyHe3Lfd6Lsj3CUiy2EXAybVPC",
  "key38": "3uTp9vxy1t5BhVJynwJVMARoUEqxAfqh9GoWQuitkno7rBNpxBzueA1vtX82gHxQCiTa88ahjva8tsT1ms3SWHUZ",
  "key39": "2M9Bb5aG27WuRtEkPB69ZH3BYREUf6YtMsZjcKZ2nowy5B5PfkrMrncztb3SRd65eK7f2gmArcK2nRB9pkfgwHWy",
  "key40": "3tui6yW5eop1D2ELGWruKahKnDjGYTQzjtEa771uuQSLEvAyC9D7afY2f63UmARKvTrtapUwcN3Ny1rudEfAwGdP",
  "key41": "2F4knpKkixUh77zpqGxRnfuV5sU1kuXd1GAKwegg9jqxH65UqNd1rs1cuvh5NsNvwbFVfzTWtytCDPZce14ovznk",
  "key42": "3AsRF4wX8FmPmpFTN714dmEpfxRrWJng4rfnfY4zuCaRpEswsAXiHZJ9NciPMacC1uhE8Ce3u7yMCq24xozdZZp1",
  "key43": "fZEJSNZvTsmgwTU4SGzwVuREtyJpcGpw2523UBxuxHumtWEq8AjiifTUiaMTynBTBP2iD25YHgEXiCRfmNQQPy1",
  "key44": "2d88dhCJnfAaiZWB3zEnWDYLJokcUbiw2yr6XD46fTFmknw422L3Wicm5MUhERgYwkNfSV7u87cd3sJMqMV6q7bt",
  "key45": "48Qp6WpkkCLebtEdD6fK7jM1MWBhaqU6G5AUi9jf4e17eAoGoDroqc4FcfM2V4c764Y6aeM6bXdQgJ8RsWrpeDpf",
  "key46": "2eGVUztTs4uFtH1mujdaEoECzjQywwips1fnffAQeyuCgJQGPRhR1U9qNtJnLUfUk7E5kY1q6A1Z3eatxCRzmEBe",
  "key47": "4hrboCUEcgJvZPmMbPooXyaXLtAKhMhTqVgSWdZ739E6Sb3N2f8GFztpZoQXX5kaoWB3m4HDdekX1U7cMBR2gucn"
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
