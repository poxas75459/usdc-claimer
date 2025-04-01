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
    "4dB5wckGWnVSwfdoenLpSu8Fz4Feg43omkUqrwcSAeX2k1PRXdfHYkcyzSLDQAQL3JgwsngVj9m4NKssVMBHafSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRZwNypQ68ZesQs8RA8vKzLoS9g3ghMFQ7Kq8rQsopGSNW8MMd7h4caQjdYSxnZotD7DNBXhvwmQxobMVftZPqv",
  "key1": "4A5MsNXaeeTUr8v1CUV14Nc5jyVfQbMnghtwHT6CceNtbTXg7aveGdjw7LzsSiMQ45HQJrFVFEwSwKfzzupoEfkK",
  "key2": "5eCh9mQVWQEA5wmoxXv6LSSRbUugfJ5Py15Y11fnDF2tquLWrpwYj9pgjTo48BCSNujp8gqmCCWvW3fvG8VsBZB7",
  "key3": "3UZ18Z4mykGNs4YR6W1CfFNX2m2SoCH8ZL4m4b6xmfq8nN9tuNFTHsD8WUDBNMFKbwP6SA1TvhUT42LijAarqbjK",
  "key4": "4X1SvuECxzj3tboGwB8AmPWD2v3hQUVRco8Nx3agHhXXjRB366oKYAAfxjWt3jLPbqvcJiHEp4Y1PUN6pMg2HfJY",
  "key5": "5byHi24dWAyiqn986MD6tQyqsyWJfJkPAdzVcR3dBS5AnBLpUvrUNMx5QksAJ6knbv767PbcWUxvGo7S4nSzX2fi",
  "key6": "4AkjKJ2FfPu8jsURFfKGKbaM6AXBtALRRwBE8ewzZidYyGtBkEVca4e6w8JVw1VHtATfU3joMWZADiq5njuQ5Kv2",
  "key7": "wYdUZrWjG4wxFUeAKejmNgfE4vbnRZGb1HhqWHpFcuUdoD7VGrmKao6p19ZPq6ch7rF3bR4dW1s9zujumsPV2Y2",
  "key8": "4Yy2vqyie3TKv3ipCuo789rXSG2xtguXiT6FxhVuz5jA8GZAHM8ygwRrcABbQooCNYCm3zmHaeiDyqr5nmQWQGak",
  "key9": "4S2qFzVnwUpTqn3XBt6HdVrdiFtqqjFWrmnKWpuonNdrGvM85KixMBDmjPMcSNL8qjrdU8Dg64abi7NQrzLASdaa",
  "key10": "5geau5RLX95kjUbxEgJq6vGhnurYj21Cosp2egfx6Sd5QcTn23FZyk8JmxvKFb27qCX2sGtBUGKhd3QrSv6zCCk8",
  "key11": "3MYJqSXZGoURSAaqSN5Gnu9foUcWC8e7svdYzC3ijPZKocTiwdSjRrCx5341e37V1eW8kvhzPJ93CnpzTfhpuutu",
  "key12": "53AmC1E9Q15rot1HivBEDfGNsEUPebcCPe8LgtvdyetvtBzHNATQZnQtGRcXBzwRWdkLrKP3eM9Uf7euU4U4qFdK",
  "key13": "5EDc2tMkTDmf9584wGuQqnFvCxGRxx5ze5spDMGQiGHegrPMNDXn6T763GrDGqVxWN25xEXjjiDhaTrT2JoFrcUS",
  "key14": "4u6ES5ZZEXWkedtX8Ht7NEzyyyZawF5SzzUx46gHUE9QfwkVErgmnFqFV2DVuctkETxw2PwBgdTxY4HbdZ7XWDKm",
  "key15": "BoWvB9ft91wM5no8994P1Qct1nVnbeMPH78aYKTzrqR6daHxuAoR3JFgpBXm72JibQR7siyR2sNQdauQC6nLnsD",
  "key16": "4hJcLGCzzAuAX4uXCSdY2Ququddv8VMpoxxQxhDFx4SSCC3YAxvbw4otWDvvgHZAxB5VQCoz2u35YMvuf7MashuP",
  "key17": "3r7URByoFpX1NXjkpAsLjZcV8fkaAXa92crsVkWMwZg48iwU7BpLHdQTQgGsU8tWJjMEy19C3sMRNDynhUDf64sH",
  "key18": "huJTgUFtvgkXdmxT3aiFqN4b6U6yruAT3A4bfojNdWVhSM5Bk4G4e7epbK2yzKovFWaQkF1717YHhFxXVPQHatP",
  "key19": "4j5Bx4j7mAjQWteZe49CyGo1HVUh7exViS21t5Mv8HMFkhw4vfs7y85626NWZxE5cnQJDKRMGmLmCFououzMueDg",
  "key20": "43zHG7GgGoZVdEHR2bgKzzGv8khZuaSwvRkj611VGFzpQVT2rPPPR3o5Yk98TeaoHdkquWdZGokWm8EeXdgCgs8b",
  "key21": "3TvBoSodhYzeipqmL5fHGd5etHAVmMSsCNcMbV6rmp1sKUdzrDiznP8D6ALp361JWcvTp2gp5eZqf3ZufvRPdgAK",
  "key22": "sVpTWi4GhYQ2k4NmUFgUPGEi2HWng6zqkfhukeS7KKykRhAvSrAFDEA259xTThAQsd7wRfdZbULyWZSuB1KTRc2",
  "key23": "3seJtXP3fnPbPixjX2FdC2E1YRxxRsD9417pce3gycttRCu7zsTVcSmQwXon8KZcxj55b3ZHTmcrMGashzPaPU7r",
  "key24": "2ZvMLJXxoqtrUDcewfiJfDbrxtuatWMLAY9vkKWMkRzpXQBe4wMBEfqy1p4pQ5w7GSeAscmXnLH4CTXwKfhyB73V",
  "key25": "5XuF4PyBgkKTAUuiKbi88SWvCfQZpvhChMaRSGXDHmqWeujP6q58ysYEBkQSSo91Zt8dJEVU3fg8zLXTpvStVXpZ",
  "key26": "2AMjny4tk6yNY94RaURjUuqaa1VAMcY9a7ZUBkreDEkkbMQ4SL4m4aN21eNmDeqeUJsk68tz8EXxw9cSNeHxpJnz",
  "key27": "7xsNh4y8DBL9tD7tMyS6qJ971bhtUDiPTcs6GFDDaZSUu51hUCnmL7KPwq7deJfJxCEvxah29C85qnrkFFMF2yP",
  "key28": "55Ss6swFTCkDfgcBnnnvzwkkRpsUpQLGXhqCAA41usgPWy4WFngK5xQUJRgoWSCuNoq93SqDSGSkGytLJidsMnST",
  "key29": "5m1KrJqZF6bkYB8p9F5EHoCQR8CWQGpc2EeweZGzYzdAT9iLYYUb2L61P2q8XBQFubc8E9JZhNiu8SmVQ9KZJ7Jn",
  "key30": "4XStzVSkHJj4bCtYmhQGSLrTHfoh3tmB5kdgsii6pzXRRrouetSE7Vb4kMj9cs8khWz9mJCnmsAZaTMYWXfUyxP5",
  "key31": "kYMxS5zdLP9PJ2x6FFkugP4fGkwuCyQYpACUv4guocW61g58Xb1MMGECjvvcepcVxSCMWob4tVCmoySip7aujkG",
  "key32": "2d8g18S6h9oyKqJsvmBkasGrV6XJ1V1rH8RzCoBVZ2hUbxyX6Qf2tad5Mw7dAZ8cgSEk7nftKJJGoXiF3mfrAZFy",
  "key33": "w7yHeBzi5mJrJQcPMMCp4tJsk5y16HQrExvrYL8j7yEbty152kKsg6EuEM2eyc2nb9pXPCicHHRQgJEJhJ2BGgX"
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
