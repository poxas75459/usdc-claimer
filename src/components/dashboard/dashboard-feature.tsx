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
    "5a7CekNvdskyqcCX5K3MW9ztRbhxqT1KqsYVrPcwoKy84aokeGGFJmM1b8ZHsVKhAiQrsEHQpNwongSTJYC7f1Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qb8SwZAvC1CbJMFpzWHrjWMbNighZdvA7R4tdyrS3UHNv86aFhCSa23T97FjK7btAz4xySQYwN9dm3duRR9PQF",
  "key1": "67EvYUKuLvE1nnYigDPnwctjXxwghj4ohw1JnUP9B7f4FTFtDaPFPFxnGqVVZSxrMkrgafyREt5EtZKbMRZAHqJ6",
  "key2": "4opQYqwwctEpMKRzdrPMKFYDWgACg1LjqpYqbitPhsj1jhWDhLgqxo2wnKv9bJxzbuR9yuASA9buXgWwhkQn6A2B",
  "key3": "3yEHCUuaQxuKCs5Hxz25R5gFWM6HthEAsL6w6HekguJCSFEvt2LDDFsJJenWXEqTZxPAbuftqWi6mvgHCtE5Zkjc",
  "key4": "2rTroD9dDg5qP9pY8K1S83ddoXBYzKRLgZKpcQ4j3CgduwHnZMsyGPrE1upwm24vPU9tgWsXtb8RaGsCFuBs6T6X",
  "key5": "P86MJNViEeKGTL2KZvG8Lhd48PmNRL2gY6W8QuCKtAJ3ipZVRGBoAPGwTkrJpZihE9V5XbmKPyDg8WUAFLVRy56",
  "key6": "4jiqPyzwwWk3niDPjnpqekQ5cUgKKKH2zrXejjDdwanFoEGPzm7odMQe7XwJbcpemnRPBTMKpSTc5wRYoFjwFEqn",
  "key7": "4SVXpUNaCrMEGmsEP4PW3iwGQi3Awu2oDj5mhM7679dWUddjnQ5WqMJxkPzvYmtXQwKf1PQCevza3gyP2Qm6PH7E",
  "key8": "mmceiaqRV7g6sXnQnuHcCQZPnK3jMQ3S1vGRLwBtrAWCz96qJPaxRFv9Ph5qV5dLtbKDSWSuzGY6hyRpFyDrTse",
  "key9": "2F31gCvvRAetBraP9W9Mke854KmaTKnAJnsRVvpgrYSUjRwrN47rqvTyy7MZ7f3DUsYau1tKySWtd6ceMRXUT625",
  "key10": "27H5Y8B12ZVevWpoWmYoawNRHpSb6FQcaTzW8YJR8xfwVyPW4FGcjGXfEhq5Ff9A2uAFuXbXMN471roa55bwmX4r",
  "key11": "4pmRmhpkXMuh7ys3eZTec261NK29sYFTtaGhHHR7nP1kr5NyVjyEVAaqP8cvX79MjX7SYfVGVkCQjHURBj2xJ5U3",
  "key12": "3fN81s9WLRSipijDn2kNFejNS5h94Bo5LHVoY4GaQcGfVd5Dt1CrHrVK5YJjRp2f9VRVkhDsR8RdiannQ26XVBA8",
  "key13": "2RDZzJXWKBsmCqdaUFxv36HkhLHivCdgQJywbU8UXSFZjeEmga2nnUD6YWwh98LfS9uZcMhc7srVbpwnyHANroky",
  "key14": "4FM3DoRARMg8at2EmZsyCNPe2tYuCC8SjLx6H8vgBPA5kD3cz3Lk8Unec1d23DdoSdwxorgDhHktwpmig1ogy46t",
  "key15": "FHk7rfk7jFbqpB6SqnJenyKEAkDiAdt9p4LL8ZCeeMGmfacEs13V7QX9bJUL2kPbGHXxxjgi4LcfBjn1AdQG4Ru",
  "key16": "5YJc1SaL1B1Q1VwypTBxy9kdyd7up9JKcCBet2YqMm7cqjHKEozhazvVUfPA7xAXyUNBgfuFEhBvpbYZ77ZSqx6e",
  "key17": "3dXiSKVircq5RLHJtakJBja7E21FXQK5vdtWke48NpJiooB5v7cwTAm14qmfWDjG4SPjh6h4kga7jKwn7eWzGkv1",
  "key18": "4ew1F9gR17WhPsay4UHCrxEThhaWgxRWnj7tprp7bCcaRkdoVSgbWakYvE7hfR8K4AuLbdbnMiXQXnYUMJK9nFGJ",
  "key19": "4mPccpFwpWLNzbRGz2iyD91tuj8D3D8nnS1QNpwHEvJ9g7EsbyYrsoVVet88g2bWz8uNrXrnxTG8RWjAPE36q89c",
  "key20": "37Qxw5zz3UmYRivvXttP2p8JxnBsbHGh9CXW7nRWbnVpN3NTUNngM86fnH28EhDWJJ95WHX9qNkaSGni2d1MJ17C",
  "key21": "4xRygMPcJNAjb4B3gfSALC1FnzRaLprWqQmWx7qocjSgj4kgGpC369138wrAQR9rQejYxouaeHZ4Q16jTSMLWB3d",
  "key22": "4FcpcLVT8Vg1xDQRvyWQUFLQsJBGjDkmLtArvmh6bsX5uMcDc9nB7DfAPzz5XSoUGuT8JLkWotZbUadCbqo7oUe1",
  "key23": "5jjr3UeAqXxksHqPMFzVSPbyP5HDkgSZGeZAtgybQCQfbDDZoQAL1pmBntJRVAXZJhTbWR4kkftNXvstNESFrpNE",
  "key24": "2Pbrdvf47eeSqX52LBy4kwUBNmMhm4oAEELRvS1ERKtzbMY6UnYnSvr2ED4YJWo3tEdYsnAfHGX1rL2XeFV6aiWU",
  "key25": "gHyLV4i7ZWY6NDEkiY6idWJKYeRP4GvwPE5PtwSY8jPcR5aLJeNKNvrfUYUtgxXND6SNB2RjLmKYfv7Cn53E87Y",
  "key26": "5ybysUTTe9MeAhYC439VbSGT3hGAZSEfGFRJYVeEzowV24qMXa3otc3DqP5CZduE9eYWKDuiC8rucvKsBQTenZRG",
  "key27": "4c8jYU3CnXJ7P6LWNGCNd7BnkFwMU4tqL4E3QR4gPVWjVbZBDQWkHTYnZrgTUDRAcKxXjFMgXepZ8xywSkRMWbpr",
  "key28": "4C23AEa9WMPT3cYmR5EhRjpVPCB28mEP9yfEUzWzFXZv8fAn5v2pZVSeE8bPQPDTRnyVT3UPAbGpxquov6b6tCkZ",
  "key29": "5yqyAx5gQLQhdjhZB5hPKcT6MgW7JazYmNrVhfJsrpBYee7f35i1wuPgdbzzDbrqmrgzJHhbDJQBLDUWss28W9uK",
  "key30": "2gePbzzCWSp9pwVt4K3g8Um8sj1BJ1asCVLftA6ptxzYQ6NwyRjmYeRVf5AT2XSYhcfempWWghN4gNh7dNkzez83",
  "key31": "dxmEgNrfvYFBHuUaW2txLyQ2Tn3yUGXYy2TwrPXRVwfUECEYJFLPxGgDGJFMYePQB5wsrYQnkNBQZSn14ggdmi7",
  "key32": "5Z58AFC3Ky9gCczaCPjbPWoM4V8v4KTssEZh8FQkU6DLomUtwjFQNYB37VLLWz65435XvHcpoynrU7e8XNKbaCws",
  "key33": "25NKysQjbsitheEhYUzz9asQfG3yA3HzDFuAfE6UjR3nnJqJybXGXk8FxGFu2nnLiaZJijfLdV35LWSqP4cMWiy4",
  "key34": "2wBRbSPQrd32rURSr5F6CgW6A9bRcSRureHdGRrv92xjfwaD8uboMYRRM2BNcoogoBunHFjnnECw3zyLR2n7vbAZ",
  "key35": "5dRNHDZEL4YpJ4JJZ3NH1o1Jui8bGZirSNcJAC9Yq7A6yZnAKtnDRaKjmaJEmaSnMpBMGDYgRZbSpZoqH5WupQma",
  "key36": "JGRg42oJqq44LCB1QCfUNpj5ZeCW6CHLFt3Ahr6X49BR5fv1qmHpSqGCjgvjtKndU3UTgjNES6vVJDVEnBQpigU",
  "key37": "5L5jSWX8FL8Zzx53x7rSTJuuPkdVo8XKQAQw5KJLsWuVWTdW1z2GW5PrPhXcj6DPpBso4nRBy8Z4iugzwtyDw2om"
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
