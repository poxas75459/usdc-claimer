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
    "2o1742ZEVhcV3JBSkXcMAtXnD1ZJA2fWvQa4SCmmdejHfKseZa9s9qnyH2PvRHWt2wEi1pNBbepukR1616Z2FK95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKTUmMSwUs622LKnREgJconETUWhVaxnFahx2BXrqKr3Qac3FjeJtKKCY73MqbM6oQGo25JNw8dSGeXtapJTZrh",
  "key1": "5mAHm4YcUJy3sUhgAoQDzmNhUx7c1ypHs58TsQQKEkjDNf4R15afg7dN7Nu82i6hKNPvtdAh6bZj5vghKSRPeCEi",
  "key2": "55kMFC7nGjSMU3J7dBBbduGMxfNEcgJWSDYak5heB6aNx3epv3RMjqbv3zmPoZTuYpiWcduVSwcwbboM62Ld7RGG",
  "key3": "5w6ABNhaH2dqbfRNBo3LEngSUz4mEGAh3p2Vv6R4aUaSUpuF8w93b8bnEzgFuCLeLJdaqooDgf3di6uCASjPEXwo",
  "key4": "3VaBxJuGhdkMX72cL3w8MPae51ZaA7pibsPip4xJ7Z5BfXQEqcZzL9qCQVJUzJzTWys7paVrX7gbjUsBXyDZXDvR",
  "key5": "3x5AXfm8mkgYKvttsrcEM3d5UKEXv44ccFoAUdSoivYwU95Dhwxv1J94bXXCHgEhByMiMov19437CF36xr7pf78W",
  "key6": "4JDoGkbdn6m2d196ifiFP43SwDKNaCyV5MXiVCvpDNGsAJs3tfZDbHzEvoQocsMwZ8t4J9iRsDiYUEZNirruYjGo",
  "key7": "4bQ6KEiP72QaCJpd7hMpDZEqtKpNKkYBfVxRw8XwMGa47i6NtDVkqaS5SP9ZV7v5FSus8ag8zSAiRHk6y7XUf4hJ",
  "key8": "62BmatvPftpdtBi1XJkf62Dmrj1uSbUg6rBP6pTMXk7fyfd2Zynq1JjqCSoYE46kug6uUzKcBfBpxDyoNyAsM3yo",
  "key9": "4rwr8rj5Rdkv3kUbQNhnzF4Spqdfxq58uQSVTwfERCToyGVqnsuugSUqPo1tpfKeLSYCdUZmYuaT3XSpzbNWB7Gp",
  "key10": "3bcSP9VfZwPz1k3nGnjDntgFJqgR4FD323ib9gjfHPGAjLz3rBjefxPziocmDTRUfppWUFhH32DCwKrKRXN5M5oB",
  "key11": "3xckwGUChahR9MRtmtGXwAr59dG4Qern9FE6pAkhVcqpYYNNjcBFZMag2UWVDdSPoa63rnJVspAMk5L1DpbAkB9",
  "key12": "5xjMDLc4QzjhnMDur2C65VNynnmbi5hs14SRjbMEPq9a7aWze8EAaX9NQi9p2i3qpGuJZSyFJnt6gG4r7qWNka9e",
  "key13": "2HEPfad8cd937EC2gJguFVpAjPA6m84JXDT7TqQhEKNejeufE8Qiamr8476jEdDLdXxZZQhFc8QPv8QB5VzZMcin",
  "key14": "5ZWrtGtkXkwibt3hWuLTWDoBpsg3S5PHPwNVoMKq89cRDHb2zGaomtaa7B8LsQW5TPdRjd6RbstpZjAtzijWaThu",
  "key15": "4yyvAVvD7shQuQopKU1LQ5amSmg6EvzmPS9FXBLyHLtQyhqCRQHznQEA91AwVf8uBAG5nYxajWw1eLbNhzp5tKBn",
  "key16": "3U5or2ESPxBZ8WfHgY3fL8EgUx9YgWQsB4gWTnbMjUGUErPq3UcmbE8K64hCXS1Byvq6uQxCrMkPegNk3as86EJg",
  "key17": "3hpsVbVbLm72cgMvSmAwnwYe56sUaGAWi3HnSBFnwVy94MD8wSXLfKRx7ueYLHMGkif4sCmDcoB6LvtUhKpw9Dm3",
  "key18": "5rc44RrqMNh4nihuonveYgEHZCQ2mTBGEaQmikDRMJA6rfr7VC5bBEwos7FHVemJvL5ZADf6FmFwAsTA1BfG34vo",
  "key19": "2ZhGVgH6kPPQ1gYPNmcUwj48rqHG8HQEe1fkTrwGZmoVLadpgD6fWsEo5sKrq1kfSR3YRDAbSK2QY1ukSkN2vnfE",
  "key20": "58Mt7wPjSKNUfaMarBV8rES5Gd1wDCsg7mLET1fGVSJB161d1K8RDv6xn7rHPV629vsBdYS1MBtpHQoBYqhRWX4Y",
  "key21": "64zHPmSTranynYMVGQ4MuL8x4W6spoF78Vs5dCmN4eRWrcFfxeHfjgz4VXXMWe2m7K6j2fd3Dd6rW2imQubSKBbd",
  "key22": "4d228TbiBpJN1Mhb86JN641GKFxtxgajodAZSyi9y45Bt8cX2EsDSpx8mW3FnBpgZyYt3if8jmXRYU2mpmPSaFBW",
  "key23": "RwUw5vwtdFz7DKnVV6PMgfVoZSj8cV9J2RZFJzPeYtfF5xFuWoE5zvhvCNQm3gptyNzQGDovRpLWvgAsoKds3jo",
  "key24": "3BE1QBVV4VohDkttenrH7mogACZQQk1sWuyz4NcZziKQZ3UiNMksFSewsJ4BNG8oqSEAX8eASReWmfxiydx97XvA",
  "key25": "2aisMbBzy7da15E2MSh8paiP5wmp3VYTGhKrTr74eTo2e87F4hzBBmCKMC2eyqStbT9sMuddxj4HcMXN5E9BiqVH",
  "key26": "fwAEhCywQsAgAcCu9T9d1gkegfNGVQWCiZYPnJST89NviYAfUQmyNxymrPCUPrTNCUUDRgaor6LxDGEMH7HiS4h",
  "key27": "5nqTcPWEyDyiDEGHA5gZcwtdLrzjF9BMhPeMbkdqsLQzz5MJniQfRfUfVxosJCxav4bieyE4zqRbfp9mpASMqgAC",
  "key28": "2q3waa2JMaaD4ZEVYPK67QfvSuoVULh67t4NjQ1CRPZzXzRPYgaYT5LYWnQDaaHRy8iELGUHKytotvaG12LLxwsj",
  "key29": "3Sm7Z7J2k9JSg6U8WZCyR4ePvVCXh3NtQ92qmyvLzsHtbo2Y4jQWgsUsxC4vuSeqPwMpGSV8SewFCLCWUEQMj8dh",
  "key30": "3Legqc9FmfN4r3ho3Cs6L2PhLEaSh2MkgSo71RXCKttmCAnJQUpz1QxVtTXcMLyTookHnp5BGd492TwHMwciHTY7",
  "key31": "hut2GnFvwH824XfTftHpfVGJDDmLYLfQWGSBBQpmhBEhAX6sESE8hU511aQ8ESgpKgWrCnXEBys4USDJfBhmJvu",
  "key32": "3g6rV32rk5AENhNdrzV6nRXHa9oesfyAczS5d4QcVjUanU2ddnyD1qsQ2a2Lq6ZxdffuGAEK9W3jXVC5LA9GC55s",
  "key33": "2VcTttLNh2nNsccTGTZ5UqLdy8imTxFCtEznxZY3guB3aJ1zM2RaT3DPu2CmunsJ6AVakD6oqx5pvs1Kj4WCTH4r",
  "key34": "54461TPhMn8toqpciJu1MYUyV5uAgvhJUrw3FyfhpZQpxGcCzYyV7wH1DQf2FVSNQjfoyuXHxtPnAQRFEWoP3XQ1",
  "key35": "5LgogXecr2FyWkexqpuTB9nfdKzYjurSEhMYbC1NZpkZiSi16GXKw5isrzDPGAM2xVyYn4pCNwsboyyCiAAg7RjC",
  "key36": "34tZFvBDTfrxYe8DRmvujApZDoSr12X1Bu4foeQSWtfhRyJDGBfC2H2LzGhq6hg1MJweTVHDibkQUeNgEFJsGaK6",
  "key37": "35QP6Z5bV3mn3nsQddmzZr7Ape7kbrC1osfPSJ55gw3oD1TVmnhf8HtvPs2cTMN9dujw2aR8BK9wSkTJ7NT7tNyW",
  "key38": "2ZvVofmrUCRSFpruvraU381F7MuMt291uScs2SSSPU4prtxAMQVMTukFYrPKLGe6JgTFCFBAcgf32RaaYHwxiJ2J"
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
