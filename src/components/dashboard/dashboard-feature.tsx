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
    "PEdUFYrwHDC8PhCX1LaqyoCBskv8L5BgCWqszvwQh5ERyTM6SDuezP6AbMSv7qfoZTyUYjqpo8WK8r9RUaYUXYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7TAJGNbDWxtLHEhQ7HT7942TMtHoyYgKErah7yAXqUAon3Cx2a9QZUh4sE8uHmmzgQApJ9TtuQjoD9JdebzsMS",
  "key1": "2nPoEsiGrJBjaxm8RHF1M9Ph65wvqkKBANwDJP8at6MmDFwRkC6VJc2psJNWSrvqxtawzCDz6Ke2vtsHgmdeHPEA",
  "key2": "dQ7mnLf6rdTxZ7NwyYQxHENYL2fMAm8RAEJMbPMRKviTbKpHvy81gtJ7e73LJxYPEqqiv6b6GjEP2GZ8dDRG3dv",
  "key3": "2LfXyvmuVnFV45dcguUoRGo1Q3BchstCTbBJ3CKGnqh9WxKwxZjbTKRqg2u59474XCwg1LQ9azNak1z1gaYhVvnk",
  "key4": "2hRjJevzL8UB5dJLKHjJ3WveNJEoQcnMUJbyTeQWigRLBzvG7NWSiJFHTmZSvKVeRL7KNQou6MhxhDMkmu641pVz",
  "key5": "4ArB1HASQWGTd1mk88XFwHqDoFF9K4YXt9hvvwoH1oeAZayviYg4jH6jYCNE7T1GTgh8QQ3NdcnDbtHoAFtLSMNX",
  "key6": "2jLoFAFSge2HxpoC8Jx35jPJNecmtng8JZ8SSeHkAou2guXaVRkLS5T4F2TvhbooUoVRfvuMAkSWoimUDZULb5g4",
  "key7": "23K36Us3JRYtiQTe29FaJeJ5s6uxvN2DzB9AoZX5KBw3aFiyrPZe1rKbyABUkKCm8W3Ap74KLckuvpiiQRFjgoKj",
  "key8": "Uxbj2YNCPpmEogCn5EM42WwKikaV6U6WUZUoZA1vXNXzyTGqgP5y1iSp1YrrWqx7NQMHGLF4Pxn7zaXSEs6vM1a",
  "key9": "3xUviPYuPbkXASMSwmwEW1EXgaEFTnz2sa33Tmaix7rthLkjw8VCmNxt4MXvzTSByvb4QcZWuM4Y8GULBX7UBwQs",
  "key10": "2KqUfxnYPtc8pKiPFMMEuQCXdwAiL1Sw8RPHVHRVFuNg1FfnvrULBJGbt3t8tQFZnhAFFwSEzz7sLB1MXFQptMXd",
  "key11": "jU5gjRPVCBeE5GLbm81Pmmf4mkbkBMw58Uec8xeaPTRsWdmENbfrHkMKTFsfb2boGuVm1peooeY89ZdY9X4GY2t",
  "key12": "3M1iu9ti4btyBQaGLsN28kon6iJ7mrAJMU91o73ohUDbcdgJcPWDKPkZ6X7B2DFzwfWk1ve2FkTeFzJq6gXv8nxz",
  "key13": "9KYARYs9rLKw8mzmzWjXsgztk6Fx3svL4FUXCLB1hCMPPLCTZGfX1QUvutDtHJEsC1DQwTqvtFha3rsEHugf6Ns",
  "key14": "5D3Gq29WGierMTGjLWvfBEHmyvWZrC6fUiLaYWNJtGKnjoouK2upqwccgke3cTiWshmhjs1otE3hT3N9R3cYKnhA",
  "key15": "4EoDsbLqwJS6gFQuaF6aCVvrcC48QMxWUAe7dgpM2DdEiPKQvdqzE1s4T8GcGkCD3Rw1wX3ZMAnHpogmbUYjveAj",
  "key16": "4FSJ3xAWdxV4VjQYbSWhxMZBSmfJLNvNQU2YLUErnWdCFSgCPrEY7yJLNEcxaLKzQATaXgtvFpuq4jUreAR4TLnp",
  "key17": "2X1b7yQE9AdbTerSGJsrN1XD3LtTSAaf6vEZuqixhSrsjAhNw4Kp89BjJ9HAd2tXKywd5yMEPNrLViuJModtLhYn",
  "key18": "4wQHpMPZytyaVwpGqSYFdtDBH9HchnckVmuQFrShVecv4DhFaZ95b6p39NR4h3ZxRL8S85D7D5i3QvjGRiHGp38b",
  "key19": "Rj3p5S9aGYQ3AJ6tpGqzh2M15Ym8yrDV4RoaLyHgJVyh942DJVwBvLPRMVv3WKNHA1nzdnDmBMaBqnZcZdev9rb",
  "key20": "5dWpV9qCFe8SpBrhtT8sQr3h8K1HDBGesxSQZtHtzRpiU9T68JwRfTq3UoDWNwWYfc1gLTstLhTdmv2js7TnhM7z",
  "key21": "4WgKPN4v4G7xDpDYBn4c6ckfsc863SY7Fm5w6u7sdYvBEBynTSGK5g34sLqosMXLytQBogaS2R1tyR7ue71fYSZY",
  "key22": "64W1HhBxEPk1u9nqhwS5XK7QDjhn9XasVwNd6qk2qH2adzjQybPU6PsDKyYJ4YV68NrLpLnnX3trV492djo8iDPe",
  "key23": "5FEt8VCsEyZyLLF7TWQmfcovtcEFbUtpKG1aGLd6ZHEHJm8ZtKHWsCJvzbJBp2SEt5d21woFSbm1xM4xqEjqiwGx",
  "key24": "2pZoJ4o6L5V1swkcj5D32WXntYES7pK3nzDoFHj4k4Jc11PiA6kA71kfTGYJGb6MWMU8Gc9xcrWtLq24Fv5nnSp",
  "key25": "HSHqLZGFSuydGzyihFm1uqHtuSo9mjmk5x29zB6zuXa2EUoUMx6ZYHdfhzobASXzage1a5VaZDRR6CKdP7Wd3ZB",
  "key26": "onKEoZoQkjQzaw5Q6DHoNXMaUBRFiSTqEzx3RyPR4CLRXLyt8gqhLQmgmsJt8EeJhWDrihDovaKkP4rYBD91a1F",
  "key27": "5husGTvXk3LyvY5hovXuk3dYd8iJjWGDAFDJcWZm63ZHpzyHk9ADq2JXmq441QKk9wZQwqaQwLDNssgcQMgRhjzy",
  "key28": "3LM1wzAkK7yuRYt77EwQuJsARjg9G9zKvywesQAmGewvXTSx2MU9wkHDK15UhLJfRVhnGLx6sVxF8NArZEi74Ctd",
  "key29": "3Aj2pzdXqDeqGjRmuRhqo8tcB656wuPUVpL9s8YSoP7Dwz2cfBTV4aeXsBPCkdNyjcQz8Nge4ckvgsDw5vP1HsnM",
  "key30": "5ARVH8Efncx5NpjoPLneg8U6ihraVQop6yLrHxoLSeaavxQUh57MD31Up7VhLbJuaKvUShtRmxZpSxKFKyj4Mp6h",
  "key31": "3zNVLS7ZdAoDs3x23x9z7RyGxof7k3yoJi3bj3mdpb6NoYeAPG38QpYEzsRdp3UWXnSBfdaoTv9ri84Hro8hgBJA",
  "key32": "4RVGD3kiV8DN3ios8UFzGETgRtVEEhfrAz9xoKrBitaaSLkxh7XYZcyJoSsc8boXp2LRdjz5dqrkNpcdyfZxzhkC",
  "key33": "KoMFDgtXCo3HKv7vRNKxVNr5VX6iSc2HYhrPSrP8oUF81uCrGx45McQ97zAeMPgTeuSW77FxFviDGfiTCH4WRjp",
  "key34": "5KYFJ7nqS4j9HBhQNz7WUtFfneA3GtXwFXdNikcKvjQLAbGqMeW36gTTVcrHAHGchXC3uQ5FpghPvuuW4UqMCvmJ",
  "key35": "4un82NMuggsBGenoPKtTCrEJH9DYPofU3AjJMPQBqrmpNgJnsZtGHyztjvrbFjKT3VqqtCpK6Xd7sCgWYS1Y5E8h",
  "key36": "3mUVBh2dAEB7joodwAWWHKp9YyRoZ31hSwpy2ck4dojDJy2vBHzJpmxKkNaXXk3mpTPMEMnVcLBhuytcFADnPbZF",
  "key37": "4oGSiDRhDxvHEMJ9HWJZp8o9iDuMngw6p6Pfu92rjN3Ft9ghBSzYHUMNpAidnfDjvVaYi3SWiXxB8aboRDbSBBXd",
  "key38": "5G9zGaepQYBVtE7wTwdxAdY9czeK2gNVovjgzMFhcJmuhzbkuH38AUAYCG15PbfuLsbiMQGcg9sh1YYGXTCSNDw9",
  "key39": "2TBRkkKLLtGnrVJj4GTmLELgn8AVpoAxVsCV4M5ZjMWM1aMvNSkY2EDHZSV9PRLHZZoz2wcqYLySr7FFjEp15VbF",
  "key40": "3ZsJ4h2Pksbp8DC5jSCRpzLsnoXeWbtoBC7pixSHBFtKnrr8pGDPG1TSNHFqvhLKt3hmZrv4LKxYZyHd7kY9fAF9"
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
