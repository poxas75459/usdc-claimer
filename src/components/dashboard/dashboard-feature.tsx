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
    "4q9UvVdoHo13r3APLkFXndHQcuNdrXKFwVvC6e64jRAVCrunz5q2oMifoE7PCUmSAct6RoifHPM5rTaSDs6t236A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4VRw3yTFPUhnXi84YSSVNuY3cT3bmxwsCWd9KUM2TS45MHK4s9NBwYFMUQxpkRPACxVtKkLfETWkaAExnr2KSf",
  "key1": "2uvyjPzJf3PimHuHKE3RqPaPytpkUCgKq3L7oBePLr4A9jGpVkDUyPZJXTzbjdxUkvSmgm4Y6qpqyWNpi8osDkL6",
  "key2": "2B8Qq3B4kvrYCHXUsaks5oCo3P6DUjb3fGLMoyYadnsc1D7BZC9FwRcJy4BYA4sYZeT5guerLRei3tbTpTAjGjPX",
  "key3": "4rgL4nFcfgpDb9MJ9LZcKdvRvUU49NDuDfnamNZJNrwmvvthDSQoHC7tgmEFAptdmWW8gUXaTbeHc9hWwStekomR",
  "key4": "2GKzUsq8MsfQgME7NpoHSRzA9Aym6MbaFgwwYDNGX6Je2fQUJUxjifa6vZiDXdaHjzyrYYsMZqEHqhzu3DCMS4Qt",
  "key5": "4YtU9547MuAXJ8CQrdev2V8Ec89cVhEQU49tvGUCvsNF4TrPAWhbcbSTPo7Jz2gAH8waCyhXEuR5Sq6ZehSYDKDd",
  "key6": "4Dv2Qn2qDAWj4q4M5Wsovjr8b9yZjHbM9inzq2tEHgezTgrCcurFDm7tVEwq8Yz9n8SvPhrDaQTMU3MksCcQ2i3a",
  "key7": "4PhwSuWpcZKXibVPMhEdKrLqcbp426yDVKdbYFCPRScwikxXdDpKwMZn544Md1S6Xx8QB9aujLzU5F2EcPR1BvdX",
  "key8": "4CPx8D5mv1Sjc2tLGSXgYQbWGAsUSLXcksfUNwdaJSrnJnSrJphsM1VqPXeQ2TxRyugv24jhnqxE4Yvogy3Frvbb",
  "key9": "24hU2ZofVVuac6rGrBx8vAZkso295fp4WQ2dkAUrGYfL3w6BRAVR1Yb4EJErRp6CEANMoiU4DRS47kDV7AjduPZk",
  "key10": "4dnbKDnPG1KR46fd26sxCNDUu6cAEjFkD4kDyngCgvXV1xusSzckXArzztgFyKoMxWec9t2s2xfrKkVrTkt4Kzpw",
  "key11": "46u35zm87UiqpDkoAYJVAfS96W8T4F2s8XpKFsG9XbubGrW63194dZwJXemZnCKMiDF7hV3hRr4hxN6RGaCPdjf5",
  "key12": "5xWx5jg74kJX1biLdgAXcbTQb8w5bT5yX4Q1xxeg7nf8C8WMFP3V6WNh6jNJzUSdCoHjCgToUiB29dhighJDEvrX",
  "key13": "aVA6ArZ3nWzEPKhF3511mgmQjNxEbXt2VPa7JXp2ZXyUjXpiHh5Pf6shb4FNKyhiqoQCt1XoXxGiUjKHY8sApUB",
  "key14": "uKdpxRJq9FQekoZJxBEU2zafUjMxu8VQB8RcYNJoVYTo5NE2q1JuePUK9niW15RYttcbNSHSPFEc3EwiXcV94Sy",
  "key15": "4u9WCqVKor4gdRtZwwy7oJPC2hbxSj5rSrNQjDo7U8fuLeAd12jbpxoxZuK3x6E6fS8acq1hvNG9qqvymS8cP1zA",
  "key16": "4n5CFfWg62cv7MraLKeQXWu3t8NxiMTJejZF3kGQJjAj3BnwJvmBYSGPd32dmFmHNfcLFohpSLtAuk1tCRP1xkbT",
  "key17": "2N4aDPTfH5pkvr7C2mmoesnbefVDoN4vaxb79zkCX5kBb1XDSgYpyi2edQrV5UGYmwS3cuBpALR6sf7i4CGEufCi",
  "key18": "5KTKwrq2FBwVPKzJikDH1WffA45wvZqcuR2TJyAzj1kSi19iSYetjQPNjSrg8RifCrgBVYPTawz7uehmjVzhqFvf",
  "key19": "5YMdH1K4HQZTwM7HM45vzRgoh4QS5sfq61WUwZBzYZas3mhBp7LW5zwEPrLpjq2A8s2HyZRb2f8zYGfK8Z7fVxXM",
  "key20": "4uQBmwjrLruaGTJS13sS2zWsT3EFnEfWBD8MwVsifmkNWSTsJky4WfoK42ip1SJ9GQhrVzt8tnyRPtayrVJzxoV1",
  "key21": "4hq8irxwHb3ixP6B3v8VX9HjqGsq8HuBpVRVsjTEXhBYQbaXtgecJTxjckd3SE4pZe41EMxELPYmqZ8kFBmA2Ydb",
  "key22": "3nPpbu58WTt7boNG9WMwnTAL3Sx27Zw6MTMBSpKM9XDfCkJiKVz5qYoRo1eQFc5FCdAaCkRs57UUSBTR9Jr7sP1T",
  "key23": "2w5fw3hgMYYFMfP8cdXos9ofaMDwSsEngN2KG6f3scuxNpJPFz3re4AL76QpTQr9Z4VzUSTXWvJyxDCsfYYDFMSU",
  "key24": "aaU5igcqvZPHNHL4PocTDonMQgTjUvUkRRmAp2PPEKM9Sn5EBu6FBfVYuQtEHuLjAg56H42CYu2p91Uf4P5ap2J",
  "key25": "4vRL2qkDbdex7mxiGwiifnAEHP96DzPKFQiib3JMkor1QCuQ4ypEvN3rNM3YQ2UAZT7QSsSZ1B9oyEycAuuhA77D",
  "key26": "51xZ9Xc3vje11J6dgUFbZQqKUDdF2zqnwUgb6hsJv21UJnDdQMs4CUMohe4J1TqUkV7n7saCBho6oKt4eJ3yKLQF",
  "key27": "3fJDHS5rXB6rhgxXqbZoYzr7hwg6XSVuVPcbm2x6w2JhnrwFGH9uWyK3zu4PzxWr9uJwQE4eA9CrCS4V3w4zFYRd",
  "key28": "2YyTQaeUgH6WC8zmgVKzBFhyQHYUFx1ky7H3c8XZ6x4uFsSb1Li57Nm8JbGtmtP6LVvEwcYTdNzDdmd34DRFT3RB",
  "key29": "eSQxvntMZu8ziijkUYemmeVRG8NbK2Co2V312fNcTWDrXq3FtS5ZWmNVm4GK4wvyqyJfsjfdktYZ3jc3XXAeStJ",
  "key30": "5iBqn1CjJm37GU1DqWi3aE2tCsMCiJuYcGqF9Sx3nsBSHB8C145bMLmWx2aRC7KMnuxdEdBfadCaRKC67f6QzArA",
  "key31": "qzX5dPh75gi5Pxt2xsHcb8TmWLNJdQSdN4iu5goeXvp337rey7oRCEUbeTa3qWJoaPtwoti88DKr8afbomU4N3P",
  "key32": "2RXNPD1bhEcxwYBC97dNe629ugfQPH25YyuCDCzmark8xLrWig7s82tB6Q29toCbm43K25kmMMNPPtHkT7q7HXKB",
  "key33": "5C4DQ2wCtRGQU5mtkbtdwKSaW1CYiDWDSpRxoT33K1DMjqR1mZGziPF1ahRP6FTFd2qE53nWqVc2gAQ9wKFPQC6q"
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
