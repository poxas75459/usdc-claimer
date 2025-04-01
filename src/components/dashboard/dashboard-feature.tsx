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
    "YMW6PRB2oiAF1493xxEjX3PArB3v1jiF5biE4uYgF15Dr3VFxqnYMt2umtfEX6W5y83yqpf7KHWcaUf5KxbTjcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGYYnn8khu3PgrzqyaWfSh2UhmzQnzEAgC7rHeLeEBTtt8jXRzArnz15oW1SifGsRBntCtQcr2BwAA9vfHxQ6zU",
  "key1": "4XKhFXFm4AM5vMTkJyGUCeu4Na8MYMkopy5B7CTp3kQgwHAbHe4hsKfjfuzEVHbFH1BMLbBYn9uF8fFknMegAD3A",
  "key2": "4aubizk3Fx2kQ6ustWSERAFYdFqL5mhq5iQAQAY98srf22oVfjUcDQQuo3pq7gKaUWpyqJ6uoA7q9cmYE4NsymPw",
  "key3": "5UEVhoNDG6v2vRp3kygLv7j8BLfLgkkS7q8yABoo9Xwkzz7amtKdj3HNzVuWUJpMLMdfu6NEcDWTccgdVe9Z1P6d",
  "key4": "5XpqhLTaXCsKeXDpgXddAUjC9eyZwnNJ21heDRyWemf5qbqTvzLmmPwzXwToMUcpeo8vMQafsNer3pVVtPMSZGvm",
  "key5": "26cD4fAKirLWT3JZE9m6FjjRc5PN9JE9f6JZKqtm17CW4acVR983mUVuqtLFUYPs7Y133xsDs9KfMQk4mwwUUSKG",
  "key6": "9G1W7GDknDCJA2Ckze2h8eUxRcRuMwADLL9VybM99nD9cfMPupQFXzcSVYYMmktSYGvBn7DPNenBYRr5mGLRGzQ",
  "key7": "4NDfK442yDzd7qW3kh3kBW9eK3SY17w65SKadE3XXbr8ZXGhhpbVi8ig9Q45MSnTm3dNxtbiKqBT55BtFpYYzG6r",
  "key8": "2ZbJpdya18qEbMwu75gVoTHJ1qQJHzJq9D5wdL4GxMLuDEerSKpP1C13gpryDmUFJcJXxJHVSi6sz5kEZ3FcwYz8",
  "key9": "45RcPjKEmTw4sAfia6CbfxSaRkdU3CQgdywPnZjURrLfGiUx3m9V4ZVXaZADqCsBxm7xc4xKTtG9ooVuFhucmYGP",
  "key10": "3P7mZCNZX6E1ATu8xWTFZJiG5RHkpB11Tz1WDHpwqcSVkRSW3Gb6xHZBC9e8yniy3uH3MCy8rKESEHu8WT9fEqLu",
  "key11": "mvCaKB2ZrYTqRAMdh5wgyVTbkzmDUUhugj23oUyXdht5Tz39tLat99PoXSJEHCwuvFyiTnU9X1biNcugQg9waj7",
  "key12": "2AgY8y5H17PhqMHqaautBBHMbWByZGhfG1kGtnccZeDxaY5TTUZWSMWPDaZGmvL7RXd4jDM2nHUxhq5hki7wdUZE",
  "key13": "27QfXAzWdSio6LA3wegj6zuGt1nAe8NBzm48QvrThX4e61dxvhpS7UTd354Q8TTU86JfPNg7D94ALYcokAuMQT64",
  "key14": "5ZTqAiKTaC7cCv6yPWAe8R6MJSeY54u23cmRa5UXpU5AKTi2FLZeELKWJtrfXnTSiGjSsd1pY9zxEFYcVqeSUhmX",
  "key15": "5rDcrCNvtZihQ59bMySHqV88MhWf8ZvNsrZbMFbH3hYT3DhzCJDWhww9r25WFnWwDB8kJtoefNzoVUX1hvRMVC5j",
  "key16": "3TfS2dCfsx4iewhUT7PFtMhQs4KEby8R6GWW7n71vSHdc1H4eeod8mcrpwwTeMmXDM521epvJsbe134RJ7esNfcD",
  "key17": "nzqQLpCJWHtcYjTHxkdW4Yx4cs3egR31DNThjNKoJRdGyM32Yc9KA85gdeKSradT1PjzXSnKxaHrMycnrUpRz2H",
  "key18": "iMEqAF8GwhGe9SAUNBD58uJCYWVmfvPNb4LiZuAu8ezn1y7Tt5d31h7KMUmnpmcZr4ZsVVbNDLPM6U2q9zWYSwP",
  "key19": "2ojmVa1ZR1CtPrYqSyqYRx2HoFd7FYwETJq5SGH61xVJf1Fz8ZpVN3UkBVi6FLuJKbzQ3jNnGGzFwRCr2AnyPTtj",
  "key20": "5D6UjrokRdHyXbSmeZuystYuNC8ne5eunnyyKLyr2U1KuEoWCEQTAJCDHrD5DtNi9Gzf2rtACoDk8qMnW7oh9eiQ",
  "key21": "MLXyL2fagdpkjEtpXUFChFJoAv3btRktiBqRmqEiacGyGKtns9m5F6fHiDJTLYHbNEH2tLG8mKkr3cStRZJQ1Gw",
  "key22": "vxSz35uDKZDncEpF4uo5hB7yn3sCKxVPV7FtEZ1Vt7i15BmEuGbhFq3B5RLyrCUJhZmdGaMp8zBcqs9gwdgdLxo",
  "key23": "5Amg1tcaj5V5i8KmFrkAkVv6Cf4MsGDjxChHmNsNpQxTQ7hGaCNzQieXGmcgvjy7RtJPGsjJcZkWgYf13TXor1c4",
  "key24": "4g2dL7ZW2yW5QZ7GyozFccFhE5FC2obKzb7K4nNmXe5hG62FrAqLJoisTYKHuobQ8tZvaduHzuXLYH7uNzDT8Ney",
  "key25": "58AZoH3HtVw3txChrK8gbAwAQrqA39nETyufeaR7S8hr3PrYXTru4dRuHyvw8aaPoCDXLfqi6zyRGiTcGHcshAkH",
  "key26": "5c6mjXWMWJgSqfeaQvgKLjc37Xd1noQAyc5bPXsksWJMxsVRNcC1Trp2PbHrnjqTfKxvbBU9FTzNSV4GGzbvRVVp",
  "key27": "49ZDqTNCdTXxy6TZchzvCtJyQMQfqUyLXcKtSVGq98L66i36xP8aAXFzxVPMdeLjS9fP5z3ZakuDCeCZNs1LkdLN",
  "key28": "5ahjR83ZYr3hKoj5znpAEkF2CjP984bMCrnveQoQmy2aH2bgxSCKfV6vabcRUJ7D8sn2vGzbuSWYJx2qk3M1PzYN",
  "key29": "4TvGrq1BZ3mm1t9ZfMNcfKKYBvR4GPQU3ZRagonygxZZdAHv3xbzJMN1m9b7uvKcBbYdxFGJaDjwgZbaZ6rpVNCd",
  "key30": "37W7JdYUoLbjDLrvVPZfFF6A4YnCg84gaRG8ZwgkA74KuuU4UVH8uJN2wYTYujM3iGvKfTAfvPVpmSTjbm3XSYZe",
  "key31": "5giHXRM6PRvbJKzCTEqzF7bWjm149FqbfyzTr4FDAFz9kHyG7fVVrhoGfsG3x4tzfzackFCUGDvNXq98hK5KHNoX",
  "key32": "3aU53Mm6EnwtwwZtT2mozJ8YJLFcSY144vhznojFyFTLniUMWXvsnmzwyns7B1yePK2ESYJzVgtmCPMcg8RJGdim",
  "key33": "2oiYGAY5GpuWauRiZu4DhDva8QE1whxm2amRBTyXUJQwvszxCCsLGXUJ1SToKRf1s2wCTL4bGFxQ5FTV4ZiBSDfN",
  "key34": "2vD1Ydc3cu9LXbDiwSzUpEZVjGro8EmVtTYh8Pzo9jGESDd2xGyYjoAHde7FeH5sNPT3AVzHh9rgkhBUyGXceZAq",
  "key35": "2b62Ss7tjNL6CFFCHPxT5mGJRnRdTHjoZ6D1SMZBMV731uTVYqCPqjGzvxH3Pf8xR4AJeHQsd23HJZaCQpvNKQAj",
  "key36": "3X91dCzviCDHMJyAfQSKcYPvb4CPTaXTQXzRM9hVaE9bFemoVgvY7vmKbMU9Cg6hkFmC9NmbUKAfnD4EpAJA37dQ",
  "key37": "vvdhArgx9UyTkG1WpYx7q8jthVq26tKRuoWuv2pANMEufpyna5zNq77xuNhhcKypALRGNZRHZmDqmx8NhH5tPkc",
  "key38": "2DTwyqmCm3SPpdEGx3f1amqBNeuHQp4VNgQDyD3rLkEZ4VgarS9gurjSjrPDkYdr3aqcT5d8LdVjAZbmVCCpaarq",
  "key39": "5WhThmeiA3EtyM1eFx2W5NH15My7piQBLoDLq6w4kNAtd7vSipuBTcxiYRnxdncZmHhPVumNDouSenmrhX5B64mt",
  "key40": "2PtpnAKLmNvDmrKydN9eyyn4WdVpwufACuSK73gQ3fiham4nCbnKWCt7ubDPuNdDiY8p98Sbvz2NEhqHPxPGUCx1",
  "key41": "4aD7SdAWFUUAb1KLGyJj3SpEHvzQ1tgBpti46LrWNTgWQcqANqZgbsVPd5wDAgc93A1sVZahypmD8bmxFSZiHQey",
  "key42": "4XszyZ5b6G5ZDu7dtHByVTnm1J2ANwgzpFVkmr6K7vL51Vd4ZShjuQFZGmWh29yoUhm4DPxbvTatAysm17APSRcH",
  "key43": "2GNu8R98YmzCWnLvUSLhQZs63pBLdDQo1NuT2yD7tn8u6RX1f8rskyxQMoLTDdn7EZQkvuzD2HDMgC1nxs6rsqiG"
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
