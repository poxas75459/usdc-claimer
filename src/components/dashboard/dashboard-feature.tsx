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
    "2CsFL9HzPRC9YD4R3xni2C6KLSJcAujBHnK5tmWnj8DgVsZpStgdyv5Xw1zfUz8RurCNyHkZKyvJgQfjZvyz7Sgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qX6vjp2pDXorNAMnpAbG15x1snfdRAJ5y5Hdo4rrtXqqki43iVHFeqJCRuQMYM6QomuYVvEB5grLbGVu7TNG1S",
  "key1": "3d6RM27HvpYZxDW59SD7Aw9YViwkbTUB9a8hv4VFkKS3m9WfXFr8NmtEsMLAJZRdTc5u3vAjLWdiLaaS7CBT7T6i",
  "key2": "3ee4M12Drba2hY4qLSU7W23k5srSConPTra2RQqsnLJW75QrFNvd9VNpyc2VVWKm3TdpM84ogf4YoinyWmBwS5n2",
  "key3": "4iAe3f551YRkAnvUMs8CgWBYBojF5R1G4jXpswktrDKVCGpKM11BE6pPiWZRUXr4793Wy7XBPwDs2tjFpNcJzd4m",
  "key4": "2abYPZkw6NzPfHS6hwASMDz61UiE6hYHoejSUtpxQWgbZN2ivGztU9wyAcxiLSBuyRcX8Dk32qekczHCLG1SV7ri",
  "key5": "2izHERmU5vmuWJkKqBGNe6mZoVuJPMMJXjRzjfnf6qLhpKCkEm3Qx9FgHYPK4HUdt7yLh5uHy2RZ4dHnyPVcueKy",
  "key6": "222QnkE7jJLH1A8Dte6tvYRXJnqnnxxnZ8ire6FLGNaf8tzi11ighrBD5knaU6K7pYmLgjUPS7e5hFFYg7vSWYH2",
  "key7": "eAQTmjYLV8BDEQuwPkDwF4SBJxZLTrzN87snJne7GgCbscEy97UUSTVErDkLxAEFCU6KNQbGu2zC7WzqWF7nu4q",
  "key8": "52C2f3Eu8re8x3qNaZ7KpSndFVWRPwktw48PnT1J2gkxXZMovUUzETMuzW2kqdEXH37AMQWj7niNKu8SPfsw7CVV",
  "key9": "4LBEth4NM8hQU3xG1v2pcYDCmpzNG7Y1tQBhmWFTctTfNz7E1pxgJzWakaD4XiD47UwehV1ECA9mz2Ac53NAavAN",
  "key10": "iYa18TLtLo7zdsqSW38ZVXKhYsVWbYo95r8uYhQQuPnNrt8ALdPJi9h9o91gGbDS7dFEZmmNEiHSV3rnnuwwXov",
  "key11": "3dpbwKLGA6ruAkWbS3a3LbTTiaCyHfkHSiBHD9eRi9auzdMBZzjSdwezxLfBSqZab1sk9eUtqy5x4CLxRusonGpj",
  "key12": "2s6ezpuEwcNUTrxBGgKuG4uJ5Y1Wn2TToK3DVG1KwmXnmxQt3ZBZFfJaeK9T61b3odJDkQBGWzo2fo9bi2Yirfre",
  "key13": "27ai29xTKtyFZYBGcxnT2PqTUABztWHdeAX7kZH115eKYRKabq5sXaCMEvrVivWGLyo8WcY5HdF9MKfCLfcX4cen",
  "key14": "2x5MhjmahqyrRehi2sP5KJs3haGBzTsx22uDn8KjpnW8DCqEQD9u8deurnMgThhpKfbdrW8xe9x4vJZorPUBe9Br",
  "key15": "4vQTHKgd9Z84JN93sNtBQLDVRuCswMUyUdzUfpFLTpmzSeMGzoFdJTzaCcRabwti4CVy5ikyys6j4XdpvT9U3h8x",
  "key16": "5rqVSyG5tqpM8JbH5i7HPJWKbPFuHtpn86JN1ECPkDtJYH16vcs1FUdMYiVpcoHbknGfkT75evhq1qemJ32gH3zH",
  "key17": "3RGtCrx5Kahy9LVA2kmSDdgBCGjZ1CJW68twVMaXQ14bAWmm5zDfWGt6otLKwH3m4ipFKe7ZwsbBRWS7io5LGS6a",
  "key18": "3oF1fQ2L1mqmjTCPPTCZWS12VjjR8xrEZdbvfLefgYEh7Lt4VMscmBRmMYcjaTREj6PRHqQbJkfFJvyLUHHWkwXa",
  "key19": "5F3WEXX3BHhpfW5wUeu3ki6aR9PsU27HYJ4m7qfpSQVocg6ccGYZNGH2nbxr7Wdpm7MDw87iu8nVAVd9KSMJdocR",
  "key20": "2NDSXWHCbWi4bY56XJw4MJh2bfPf4dPpBUnQ4Yso3Q6MAQCsbwxnuk9eskgANShix6Puk1HvFf6titjU1D1VF4L8",
  "key21": "51qoPU3LbvWEzTLLwqoDsrdJ7Z2b7sX3dZVpL8YJ9ULRuCNL4So1CmpdPCS8azMCfkqm61UPs98FgDzoeJrr9djJ",
  "key22": "2RFUva5jXbYUzKKvZEQpwPZL4ytjTVPvnQenFrbDm88Q9nN1Hjw9tSNCQkaWGPQ3axQv3MaFhZ1QorbbwmiZQ1ja",
  "key23": "26wuSAmtjxCQ5fmuPEHbgRcPgaxa8M4cp8ii2YkHMUr7W8uUMsATXaAbrr738hYz24mphAAnxWy6cfUt9txowcuc",
  "key24": "3j5VSRZZScQWvjQcxS1PZaYEY4VxPLhwNX1VC9bxVoxdRTVKYTYh42yDwGNB9XBmN4rT7tQz9fvoR3A3wTsL6gga",
  "key25": "5VwMcdPxCoy59fw8wUnbKrNwUcep2LjKTMc5gJa7AcTRdQGarJb68WrcuLTjkxfYcLXE38ni7UwLw9Z889btgay7",
  "key26": "36psjqjMFRdSjiNFkx1qobxtUo1ekcYdp5Nc5xgAvTGN5xoGTkCcbrqJMepaMtzyUwcqEkhkkQFsF1xQxsdstxuN",
  "key27": "op4ZE349oVZ5FUUgt8r5QqCmUr4QfUpD6mZq36TW9uwh5eNvdFTWPsskRHdh14EiuTRr7FEzvyipKcAronuGPJz",
  "key28": "44atAPy2NtiufAVmjgEWvvDQu9RoU825aWtgcPsRp14Hpd4RpebmvdN647mmDwLmsEY9dBm93H7HkypyMCVSn4A9",
  "key29": "5jK9GqKyaug3Rt6yLMsyTbn1UNGLKaE2GxeDf4qEjeBzKdd1UF84ob6r7JSS5VysGUgDy4Cmz6zD9nE8B9fr4E1R",
  "key30": "3maxMG9Ng2C6YcJTw1qKujWXcHdhN2iyjUaFJSdhEnsYQpreuxRPC4BQPix7hqybtU9r5FzGULXRetNZgy9LvmU3",
  "key31": "38DjFGRQMaH1kCKNFN6CkVrVN5tG27LbQfytHDhwukr3QH8eFWm3GjsTnwNiwhPXDWC7rsFjWzExmzzYvAF1gqpw",
  "key32": "2Y38gmQMB6LF9fAqvRF4iGJegmbgQsjRLHAyMdKc8mZZs6FAGkdWJgUH3fmPWwSTbKLR7Yb2r1rV9KtEXGVmQwWC",
  "key33": "3WnoJVRkfNT4k1rohht3Rh88Rw6285eYw7LVfc9sNKzroXipBCs1C1wobWr9eKi4CxHxZ8H7E4E3PfCD1PS62vQy",
  "key34": "T1uoHkUTRiufZQE1pBBPq6YcXndPydE4cVPCKQBTWwuUExSNJKQZpz58TrSm5tBKwHeV4ye8UF16ZzM4ksFSQKJ",
  "key35": "zoH12ST1GxTyVrAXtgU3bUddkud4B5WNP8R7Jg3Qjou3o9i4mbk8oJ2Fzywpeumqwof1U7JAsiLyAWxNe8m9gDD",
  "key36": "5Bv1cdv4mnpAVCAziH4C4fxPaPSZM6RAaLHwBb7KvkY1ToK4ttqorXSyE7WKAqMUzHvdPbPAMfDsHZx9RrRU6VBG",
  "key37": "5BC13LPuGHYN1tmETqfSr5rBEPZZc6Zgr4RyeA8V8yXqVeYJqC8Mn4zQv2dFu4vRTQUioEKo47KZNsdXDJ5kcRiL",
  "key38": "5YidkmnrwxLTTokmcUQ3X3HvXqFrWL6nrnjAjhLFUdHACkzJTRjijKwmckfMpZ7e6rz4ZXSAB4Pt6aSeD9xKfB9q",
  "key39": "2vAvidnXM6Ywb4y8HPsW2TD3Y4hnXePXeH6Vh1pNzz1xFVnja4qu2shfTNFP4RJb3MFsr28MEtBD1j9XTVYTiJR7",
  "key40": "2VLpqHtGFxUpn7N4ZmdRN5qGUkY4NL1DA6SFVC9EB9bw9iyXhZPLX9PrkGkEai3oWfoU5DeBPHpVyWBm3BTaSavD",
  "key41": "drKXbh5gns6CUVDwbPuHgiEb4CZdgN4WFoqpmCe9Ye2JK4s3JhhznYwFBGnd21zCELBKcyk32rd1YbuJPCWTGbM",
  "key42": "3QLSpKsHjwvuiZdadZrW2jDAryY84DL473ZxdWb18bTJ25xhKs4LZDoSRk3EDDa5oAAcdb1rggwWSRusgqUAwsji",
  "key43": "3UsRXNozs2kHC4zVk9bW98k8p69RUKB5Yy1fJEWv6WUwgUT7sTWFL3UiZQChBmCzY5kCg93pwhhws3WVjbNpsF9z",
  "key44": "5TMyhQp7xzMdkSVMtyELnCu5uLi3BX6D5LNpCrGnV5rGsTX8PgFR8yjn4asKNCm8NubDYZJNxAugTWcBBroqqDuV",
  "key45": "Qn2tDnfnh5zwnTwSwFMVAFfh4Rpey4inTmgJHtTcH9MXD5JReDQp8fdzNGM7VKkGqeVtFXVKwPbpi6xZXngAN5W"
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
