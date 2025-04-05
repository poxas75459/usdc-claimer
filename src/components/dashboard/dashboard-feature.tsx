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
    "5EsjzB71APNdKxE7e5YMY5LaCGg8yd3mXxhApszp7ZWc5nuZmcbKZVmBoXuM1S1w86XpBAsfhuHEwezLtSNghwpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9HajjyANucY9fjXJz2ytaA34nRorKcurkDPqET3vhP3UoaetB6ERvL38UcLk76jYLzHKgXk9YGikSSnMtovC6W",
  "key1": "ZsjaK5WF3QCamUu1fpdUbhQFxuAeJKhCwZhXciN6RuCddJ3VEXoLUbqdCx9LtMcfZLu51qUy5TqrBpgL82hKeRp",
  "key2": "3px88yvgRwnzrhkoXwgvBBBpq8guS7jNCwsdGnPk5zhLi21Ffj2Dpy8VBFGvHCewNGQbA192e4WgmvRSZWEN3j4k",
  "key3": "2kT3L72PtndnNaHZXqDPs4oV3kMdtDynrmXkP72CzjU9vjiaXim4DR6jetYoj2fnG3UATSo5xsb4rAJW8Nq37aL3",
  "key4": "2QhTAo8fh7dLih2DSBVqH6xpRbBSVwAMZGR43t31VEtHdxckDT6hf27G7LrD9cK5zp5f8XxbonphBajCsu3KnWz2",
  "key5": "xWmBXH5Q8oDZKERhwrGpp8RK6x35G6ReCYXH4NzjfWLuo9Fj3bHv41EBc5Jzw6UzXP1eeX3513PNidtBCUxvTJC",
  "key6": "4TexzDSx9pNNtkCLBxDHtdVproGqH7ix45Lic5eLzQuEY45BNT3cwHXorEM1neE1oLJ9Xf2wNTBpvQdv6YkSuGM4",
  "key7": "61bmsNa4qSGktWFQ99ZPbmpK4UZBQpuGsqRjD6MQg3SUqobRHUh8j33cmoodefzEZYrc9ihzFANELnegAgPKPefQ",
  "key8": "4Djy9qUXByQ1xknom9RicMESNUyyB9jVkweECUAQrrVr3Do5B5haRp1MDwnycERZbRYYw42k1qpbs2jX24zDF64R",
  "key9": "4HeLX6HCkUU5w7n1hFqFVyD8VUYF4pmPKSgTgr2YVSw3eTDMQDYoD9ZnAbzWWCEoH966RMjdXcrC7FdDuSSLEZMC",
  "key10": "2eCp9P1DDcPMaBRZU9ftZbAjhbDF2ENpBPkYmjtBAV4fVpG3JYJJ1zzCHsyDAmJLEv4tsAYEfs7BbQ3zFfqFJZyb",
  "key11": "t6Fye1zrFPZJzjFUTuKNLgNbMAgwxUG2N41n388F3RBDZahSSrQntjqrxsVJtHb1WLa7qwzU6C2pk9Gr4XeJgMa",
  "key12": "4jsicPb4vMfdiJaRytdE4nnvrPPpD1MNg794bvH6Tkx8ko92VW3a6H33AvNoesEULED9wQtSZkEEygS2RxhgJ2Zj",
  "key13": "A91nRQVQU3rFuUoFtFnf7VKwbLx1rAhsbTWdfzE41fBXH3H2KTAUtZhH4RhWtgaX7ucnbHegNfBRy1M4UUNZSKM",
  "key14": "61LydkZkcTEiYrxzgNco3UrMEuEpYueDJYU3SEGRne5w7QaHrvb6mSZhTmvta9LKKxwQuoHbsN7XNfDQ4Y4eDZnY",
  "key15": "5BDfQXVXrsLP24tZUsX69ZznUDNvns5k4U4x9TCaKWqM5uosMHV1QTMebnjBWBBdTwdbniA6LzbHkAZ6ApqnjCsZ",
  "key16": "5Snt3Jc8z8UnQ2JTJgmXCsFVYaZHwPhiAcz6BKqDEyrunKke4eiDrzmnW6ytbxPTEpQcz4qApy82oEjEF72buN8w",
  "key17": "38DypMVYHNwi4q9BN78BJwxJtG8qanZnVQmszJ7KrmAseWZMLJqf1NXQpi1R2Kwy7zaJwGMfeJKfBQAX9fByxCqy",
  "key18": "2uWjsMRL4gz9F1x6fXSekuw9aSR7tMAG5NskucJFvHoxaAqm6as5bH2V34VtyFc21kXnrnoPD49NvVsepWJwhQPo",
  "key19": "3eDB16wDG8LCFRRWssmJbjfgAsqDuE3gYE8wEZMobBW9synWS4f4tA2mgz2RXzjCPkyurx2w9MJawkphzEXb9bCA",
  "key20": "5LfU32ZFVG1aGj7reEJP3QzVcxen6oBGjs1SxhvJih8eDnYkEvUzugEsPxWrEde7TS4Hmx9jdof6JD1LfoG9eb5S",
  "key21": "4nQrJi7kiqkPKvfmmVahWFrkQADqg6EAJUaLxbuQkzEucAYn7Erit9JDGsVMKr79GunKPJeRx3GDr3K8Ua8iZNA5",
  "key22": "2m7Qg19rKj3TwGPNfHeUwS7F4dKwMvex1KCP3wytTrbtDYGG3zshrt8UyFVzxBBakLcEGCm4vfsgWpR8VegpzA1S",
  "key23": "4MiRH5svyd2B2mM65WaMxcS5rn54PU9cd3s8uqXAaLtMnFs5Muwi7tDBwJDRr9x6hnVz97BUHHqARoCFiVguyxFN",
  "key24": "5kLv5Pb54fmvRz3CBjVVQBZgAGo5L9u8sptMPWtM6dZyp37EhqWsgkc3P4g976c72FZyYgp2C9foEuTtKzdLtCKi",
  "key25": "5f59puTGjTPRErvZuf2TNjiJ5w3pKhJFEM6U4SrTXHx1PD3tidYwY71XwcQ9UgFVy1cLf59MjezTarrEtVhqn2kc",
  "key26": "CADASkQpPbjTQSomdo18Xhspm4BpyshNPhKHfgFyhAsb1xRjcnMGq9MT1SY7B6Yib91AKrAWkZvyJgPQdBEJwPn",
  "key27": "3WjzQgiT7za4q6n7rU1u842CE9CfWMnuZDqwobineSCvPAtbv63E5w9yz7VgWjzsvBgGemuaDoCqCcT5ioWc5wpo",
  "key28": "3Zk3LU3vbEwLzuCF48aAfoNL6AhVnZZUrjTupk6GhwyyWMDP8c9QbiJbJk9ecNgt88kkjiEzfsLdvwgMLAmizKrx",
  "key29": "zWJyhNDhQzA6EUyoQDvEM6mAa5KiRGd4oq5CZ7GQrK45ddjLf35YTTCQqrxqsGNoQAFyEJaof7m17YQx7wUXxo8",
  "key30": "274rFMS6du4HiUGyxiJZpJBKGDTuWhq1b3tDqT5Bg3WNPDqtqDJG1YfA5SSp7tNxbXsrzzkMUuWrKmCWvyj25fzm",
  "key31": "MpZAWwR8uuybsQbS1v1v1LPR7AETPm4gxBc7LHAArogGu4eVE2GNzb4DpSdC5iebPgAmhAyFb1QztNycbeboMBH",
  "key32": "Ht8AeE93pM9i23PiMNPX7FuGxLMMZggdoWuyz1Z6cpTbSW7igwrWnMzc45MU4ZQ5SDsxPj2n2saNjKwHcH6FPHy",
  "key33": "MnqByzeNprob7uTKzAkWmoTNx5AtHmjPY6ssHzW9HSXDmQdogaErKZSjhiGhEvHu7sCH58ZWH2uhiUkTZSf5Yct",
  "key34": "4MTwNHfrA5dwUDWV4zFQSCNRd6EArSu4UjeFXeLLhPVqT3iE71N1DPbrTqCznHcfTcBdb3NfwVZM641i5GXqfP3x",
  "key35": "4A6SfY9nErwVSr6vi1Bt1ozTTA6hr8MXetZoWTm74CjTUBe3srhNkwa8HQpczdhdWBVMJGtzLT3d2eQc2AmhwB95",
  "key36": "3g5xcMmpmp4gkeTrkwkggWy3UdDwAcH62fiBXs6Pb2dfm6bfFYSmfswP71T7cCS33S8EpKq39Cka76SAB6V8CJaE",
  "key37": "3FXd4et6eB2WogZexDXJ27d6tS3kyPkJ6sxVw5TRXYc9qYN4EwFngDrJodPjRCjCiNWSneFJkGVjXYVE98ow5BZv"
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
