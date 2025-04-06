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
    "2wnkBygT734bRnRLXUdvwGwthtnp75CacjgBJRCC9qip6JuE7Q2HrQ62bzW5tJpr1x5E1boT4jvQEuNaEhKaLLfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdJKgxiBzU1HP1Di1vSyd7r5jfXYhEaYc7v2srStd1Jz2787obeu887PijG9yF3JpmNcci85snpj6iBApuadaw4",
  "key1": "448nA9MsvpQmdTtiMApTvtr6dqmZWm7B6zK2tTjNqWhqvP8wsm47cdALpN9xqEV7env1r5aYyAnzJYU5bCz6nLyd",
  "key2": "2jrfxotyYFmebgpJHsjXeeXJZfrNBp1uKF3bbvb88vsVHQbuZgFJxDXP7ed6QuPYpHbWJ6gyvfK8kQqAo8Y2H7wT",
  "key3": "3DQqVuq6EGZra9EZXT16nfqq4ESvZmzYRgbpSfMvanrcKSK8Q6VPXhzAxYzk6QDi3kSokdA2Nxx7daVe3L9tjBw1",
  "key4": "5A2tz6wVgDksjngofgXUxuTwKBj148mbXWonAnMtrVwxgHEn2TArJ6yRW3Cc6wngDUgw3KR6YUG1q2tWqj8cskxi",
  "key5": "3p6D1Y1WPcfiyEoqb5F6CFEgsWKHWVszQnKNTkNfmcyfXkWomsFJy849bm5vmiWe6cb2k46d3UdPnk3gFX5QEBf4",
  "key6": "3RHQHpkekZrMA7xwAXC8NUWjVo3SfHGT4XbAXHFX6sKDWmemxRamnXZN7CWh4aujaknMQWYEkyFjGiAU3jSGqqM9",
  "key7": "4tQPHzjsGohNKc2UgcuAPMi19RZooj1EgrRY3ZrMTA8oPfrfVYobdsuVnHMWkyEq1Gs1FfgPKwwNXEjTi2XYK5N4",
  "key8": "2PpvHgRMPgeVSR4WC6ZPy5e6di5hphEBuMhW6ZMzyay9KvwdhH3x1NqjkAFy8wFmnyR5hSk7XereXnQZ1z1JWVSc",
  "key9": "kY9LZUoDNuzmfyRzT4ruEuvnnU6ufBnHuDQTUEHH6Djnga7hMriXMp3yzaShKTdZZKgsb9tK4R6CYrdtoa31Umu",
  "key10": "pJNZ3FmC2UzWsJ6ojNj91y1vXqSfvieTbGA6pSNCcpxjnH6FSJFmqy7tZyckzT2MAjWe1vgeRgdt6a89ay2Lt8g",
  "key11": "4bXvambJakxGR9u3ECj5AgExa3v8VmzC1qwPhHYLRpPJz6AoZRLZvCK6b2mSmYbEToyKfeYhc7Sy6ezyofctgYKt",
  "key12": "2zLhnfsHPP1vKhHzKGJAy1ZgGwhPA6hVFLFiibootAkQbMDijtnjGJXXGxRFYSiahsQNpE5SFKpvJzV2D79EMjff",
  "key13": "2q96Qi3nu5mwkuvgMW7Y53fpVauBx8CooF9ogaSPGpRmMvGxrJ23C61AnLPohoS8PAdU2k23SgCuoyVcjzMXvoTp",
  "key14": "3E7fpTNMi7QF8LpLW97Yb783HevXnqoCP7D2bRE8nCxP89EQupx5zQ9K8M12RyCzcjMVpsDeUy581RTdkB4vgBxA",
  "key15": "255GmKrczJrt2NLJM2iYGbtpkRoG7X66hHoh3GysaGNshbgVGBqGYbbJC7eSTi91C4PA112sNyi5SQFRAg9uoV6S",
  "key16": "24WmzWUCWNf4q1kXZWkwrMCfjERhvVNxwKWyxMJE71RpxvTNqfqSxZSs6HeXgTnxPTeTq4eQgdBTsECaURZPgkGk",
  "key17": "54xCoPCtjwEvzDgNnifrx7DjwXianMdH71LkAcnPNGkYNmS2n21seZaBVLxQEL2oTZQVFZCQmygZht1YkRQP2iU3",
  "key18": "T6NyDqsuJ4SYcnUr6vyn11PcWzbHMhuNu2Y4AitFQZNSL1n8p3hKUmFsPekm3poSWSnDVULsjLyNyfTtVBXvvmL",
  "key19": "3t3c5qfBzJp6yvYtW1wJeGiJ9Tgz8yS8E4E418scKkjkLgxyN5gDGMJx7DaSAEJd4oc6LDK2feL6wshLddqy7ykp",
  "key20": "3zsh2yqsjV6B3VCGJNsRbretb8bJyEef4ZKz4SqWSMt9jyuTbKB61uCisqCrkQDakko9CusVFDAL3XwSCj7Kdysd",
  "key21": "5mf2BkSG4VcNTYNunKZVEi9pqUJ52RRUHykMWCXTFpJnVtYUrb2iGAaFnfTjSoGY6a7cbTFeesMEA6U4D9HXLSSJ",
  "key22": "JcFhe44q42WK3wQd1YxLmPLZi8cWMguPskJgp7P3E1x1AQ6Sp28GuxsnkQGuLd6LHQfRYPmbrQXpVcBGrMZtvJn",
  "key23": "2XyRifCP54wdyU7r9b6oFUvr7DKFAVTAjUzjkq4UkMB6VV94PcKzPjxFjHjCdjMpBXZvVPzN1mGj3x7f592BHQQx",
  "key24": "5KWyK9sL7ULW5rda4BRZnhuTRkofMYvn9xSC88GvtRNg6KHBCpbuUhYiuv5NSnfktxZ2g2SYEFJDCHgdeinWBHTj",
  "key25": "5gzUNp65hxDY4ox8Mfm94EjLdRUbsFYEnoyRAAVUVJ1xh4sYT6XzaEw4a5J8C5TJtMbcQJZrYYf4xhbzbJZoGyfB",
  "key26": "5k8VSgagSyxxzBHQc35QvGm6Ruiy8hHfWbyieMjo8VCv4mvDbVFPMtij7mMiiun4yyuKs9rHa5eZgR2u35iMw5yx",
  "key27": "5E35hdMUsCUqB6rxrx4Pe2sD6mwr2bR8qwnjkoErJss1o8oeNbC8N8JcaU4tipg6Pj3d57UC8i2XFun7HMSf7YjL",
  "key28": "2P5EDHKXMg4gmQJw5CVDygGCgshqUNL95JjFcVnDgWsjxwBk5vJBj8usQWSQJdBXCZ1YnYEfzoezHVWayYJwvExx",
  "key29": "5z2Lxr4VrJuxDSn2D4S6fy5qqHJvgBNwpWqSBachTXcQVBx5rPp8EWxi1121xmLWDR1SQoweRcrSe2SRvybYkoBk",
  "key30": "5rsFotGbnYWXYEj22JmNFWuGciGthGQbkqcDGnAPACXr4w7BZK9eqpbaZC65pAdvWRSnnAKwigLafRjm1wgBYUVZ",
  "key31": "2zYKZrPEceMDDKfDTM76dX41WRTK1Xj5dJ1sXFSZ1V3iHE5Tc8HS3sRmx6NZgbDu51GGYCyP1pGK4ZQdvkEBomXV",
  "key32": "3fqfE2n8BQXCDsNZR1xwtVxzosS2Rcm2SGdksUWw2HXmpc4N9GHgs98zPSMbGTMshUjLmv4MM5igabhE7uDFpiph",
  "key33": "34vPyn446RkD1JSyYXrBXzhEPFjd2hAPoXDCUVxKXbR5cyEvHg7GykGjWjQJrP4pJW5WTN1swZ2iRPfFQ9gqVRFt",
  "key34": "5s9K5it7XgxiospCgeBQ7UbBhVs2mphvaLrbNTmVRBp1bXYZEQ5GqzLGti9kg3YoRnbdDnQahzsm5Jf3zs8JEfZj",
  "key35": "5LN9qQTL7zc9G1bySga7DnKCHQzTT81t1UzfSQ2T3FALxXS6V628CjBGedfruVWtz3g9B23ziA2jBRUkvpvEe2iE",
  "key36": "5MnStz72P7f4aSzJGHgTZDvyidukAhTr5KpqG1AowYVK8sCN39hdCGh5yzLf77sBWBxiactAQpRuEVMj7vhYxXbn",
  "key37": "4dqyKCtM8tckqTw4rBxTyuPcS2LrpDciLUNxVQLGz3JFqUcVwBchB1c319ezk1QokAPnBeDHQrwAYmx8mF79dzz8",
  "key38": "2oq6XDe1zggj5xifRmehQ53HHKU6nQDDUAQ36EszDKduHY76BRiy8MqK2Yy11tJB9iaK7CmrujyyJR9EnNUMk74w",
  "key39": "66QmoiM8JuUiBrGJ6XyL1STqdf5DXX77ie7EUsLcrSL9U5EotBou1it5sds9xJ3fn1Hoz7sXzC3fMc6XTi342pi1",
  "key40": "jbeoy1cVaVezDPHSqqnLhbh6qQqJjCpZdC4LZ88R7q3mWasBh9N3erTKEQmaNKrafHziSEZaNAV2CyCpCUjwLP1",
  "key41": "4qTtExGwtC9mkH6QrHwXwKXgCfAaHewaCfidH8SjMihPZRA4SjEp8JehCqJP5mm2XC2gwXF6Ctk6XXjAwy5k94Ec",
  "key42": "5hhajqqf6eDhNqb1Gm8smXPTMNGSiP9X1H9NYD2672NqLRHUXvjW7A8kH3RkSzjskxCztkWic7PBZe4c7Wcfj2gN",
  "key43": "RbDSbszuBTxoCKqQWrtppq8JKm745LjT825hGbRaNBUHj6Mz31Nyzx18Qh9qNgPp4Q8j9xRaZcSgcALBGY78Lkg",
  "key44": "5VUooGgTFFsXBNznHRLj69zUr31AUVnkAfkTwPHrvZWr2o3aDwp2zUf53L3PmyzLMvFD873xnwA591sZdMRnepBf",
  "key45": "5SZV5JyQpCQr3QAdr4odKbL2ffMfEBHYrA2P5LC232B6NqW4eJxTxZCfg4oyG9SPBNXBi5r5aiXDcKyPSu7V6BrS",
  "key46": "5qxUwyesFG6gFsCe3s2m3dTCkYMFJ4UJVUghXM1wDZEyG7dGH84fJmr84LwmnCkdgz1xeaZbCe6or6VtNR7ubV2B"
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
