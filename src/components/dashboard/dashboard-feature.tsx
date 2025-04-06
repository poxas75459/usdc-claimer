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
    "2PJiEuk5gUMEuiPBjEobTFLeZTmQzEbzfZ9V2U2UJLhQYZxU89XT2bpvdzkCHYWV9aXWb3khJADRVTR2sHBDFEts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcU3KmLTfLw28eWXggYRMbobU3rX4o6AxBzsxFPffG9gWHJvZEaWzA1nKcsvERR1CLikC164KJvsJNHd97cCQvY",
  "key1": "3Vo6DxpRu8fiZ7KjGumBxAvXtDL1C8zCbUrBwcz237xQNPbKNLicyeuYEAuyTyAcScBxRBcnXb2P4FVqYForXG5B",
  "key2": "623iMBdgZwxqy9rz1kFN685JtvwFZaKwiFtKuGYv1oeNEGuSgvc69VtS3zLYG6y8RCRhaeXBXE2v9Kr7HAniQZQ4",
  "key3": "463HzmPatr3fBbozCYtRQnvdh1cjjRwtE4233ZeHPK9vMCkuoh6W9ADaMseWEgxPcqJoqrWNMXbTKEKPNpHqxEy5",
  "key4": "domQqhiNodPv2umgA9hQsyCorQrq3Uk5YXTdr3TBY6TDE1GsopMsCRxGfYEKCWFrGs8jGdyrnV4cLEUgHMc889J",
  "key5": "2xMkfc8tw8EdfdEMUod87niVWSbzkbDS7N2rSrq9qjRSRULvej8RipJz2DXc6V79fGcemJ5fWa5TDvFEk5A4PwoZ",
  "key6": "5S5VnCbKYifezzUDgdBeHs2LGGuQu2nK8QXPdfH6kmJT1d4ZzkiEojHz4ystmo19rSwLSqwYLnkSovQ9H471DddE",
  "key7": "AS2XCEKWksd9Yr7szNVQzWYEujNctjU2jVixBHz2uoUdtqMamGohrdGv7drmPetREDAHzqp43d2isfDijBzpghM",
  "key8": "5adaUuJJkdBkhXgupFgALTAUNSB15pRpSsAQgy1puYftedJjfJrzVR7HZATkhvQrEvJxg6H6hncgpo6dGgVrC8H6",
  "key9": "5C8E5LNwvnQYE4zFxg9JpAxAZESEQUpS3nsuVaFaPjpfsMbnd5BotcTGJ9TcDeNqoWnHEtuZi6xahDNQv86UELBm",
  "key10": "djatiU4JnqCedJ8i9UycCqdeA3UfGHbfazuaFnp7imvvxJpEckKyV1iGuaStvHmbkCuWkfmPERqmK3FzQDKekT5",
  "key11": "5A92f1nqbK975MSopTtmAHvau7H9gvDKnhC1AYxWbJ2W11TUAVT8RdshiFvH5igLuthBPuHUEN4QQB6QmYsysYsR",
  "key12": "E4Gy6Vq67GgnTyVXw2s1nDRPzTZrPKu277WQzHUgUmVYXsGUwquoTPnYAKEUTKET6h51cSZN2DJHJCzsqUeTN1r",
  "key13": "27bNMGDpGR9rp4qFrxouQMKetkgEHY4PVGHkZaM5voea5s5Ehj7fWn6kzpdibd5iuUjFe191Z6WKCPPkpPX38x2L",
  "key14": "4KPBF1fNNLvN5aKvcXrxVnSeyGLo3eq4wrJPpcCvs5zFizA3dbNTJPH4GoHhyQQY5wMFDrzdpGeK97YWJQrnHcMx",
  "key15": "2tAxStXpjSr5SzgSH3X54hY4EG6a2bRvFFGZLbMreSHxxVYAkb8cdhQN7HVsYq9VNoa6Qe9H8PvpvyVja8MLrVwz",
  "key16": "3m1Dgv5RUJHGwmfUn5DzPMcVM9s6UnypS2B8NuSC2FLcuZbgACu1a8nqX2G51jb8ApwmrsksHx93h26eDvbouVBb",
  "key17": "3X98L9y2kxHBdgy5oY7G4WzXmuMQt569cYtZ4baJ7tkFo7fwCknw2RhkJ1NXuJ2tLnthEETk3mGcfStAWivcpRKA",
  "key18": "4zkkVexon7QVDt6n5yzcdg2s8EiYtCbYchgJR6jYL2pCx3459CzPDJ7RxxEc2T58NNtqxMR7B6m6XwfoBjMirsvr",
  "key19": "5whcQMSf2i1n3dznnHdWxWKLe7xkAzNrLictghDEVZpknYQVyQLaw6fXRj2TxyFGdm38KTKpRNP8THXL1yyUWZRq",
  "key20": "5uUPMNsQSbNjSXjJJPtghD3gDnLbAZoYmnAzG3xLSU8n6DueFuTCW7DiF4MMjf7NvaM9K5wjEsGSWQGoVmt2Nc6X",
  "key21": "37x4Gt4qAM8E18AZSWrz7vKXHxZvYRqCm3BoJNryPNgpBY5hax56mKhSc4VU43Xk3tbgyA9TdPKUg11DD3SARCdf",
  "key22": "5TRBS5U1vP4dXNxmrszLA9aBojJJrJ5H5WuQdgUv4dXvLqkUxeHXn7eCvkX4e1uqpi75D9167qhEFvHsZv7evoA9",
  "key23": "3GQ2Scb4gGcQZG7cc3JyXa64krCYe5R4NS3FuM3UA3STfhAjUDyTpsknsHwxznUhLNDGGR42fpoao1Zp2mEx2Bi4",
  "key24": "ymJ62TsY1FbSwUYGcy2Jd39pxpNF6Mf6K6b29Q9Ko7ssK6JGy8aE2aCn81u1R7bovfgr9xuFf3ABf7sFenfsZBF",
  "key25": "644DCDyjWonGAXdGrC8vUhTeyYBJ17EzRF9UMKnPSWAbp6jFsRdPbRjawXCAydHMSEBYijFxxEwrbefdJfXCP4FL",
  "key26": "5Y2jbKRneNsdiqq5gWuaVjjpDDpf1AfPEXr1GZGkydAujthri4DJcNgvaQDg55tZCbEXrp5icfYEFNAC3p4WA89W",
  "key27": "zvJvuRitNYoh9eLdiQ59kAfPU4hyEE1TxXMZ4vg8vahHCxfNYsywvumQvaYZpdCdenNku7Ghr9FmmXvYgDokoNK",
  "key28": "5xdsk3wiS75PUaTZRopfLuhsBJP9mCZYjYttVs7cLmVhmnvKRzLJrhaKPAPJi2ahbTFthrZt3nw2Gh5mgkcuNW3E",
  "key29": "4RVTgL3kxNrB2ywX9EBnZZo95huGNfSj29zZ3eixs3uRYaaf4vb48KD6Cjh2T6otzgXmafhB8D7LGUf5Ad97xXVH",
  "key30": "Ce8CqajqBfBmLgqKCc1HCAPRjfmJQ1zggk77a9DFq3yXDCe38e3C1pLJWswLwHponZtSUtRwmTgMRPxTdPjwUbd",
  "key31": "2VHQSeeWhvXGpziRWUCn9aGjx4cahbVZLSa2ZtTysB15cbQVYn6HxBZTZdDTTfy6Tu63B3uMd4aygMHc9H9ZE46f",
  "key32": "2V3jUbW5wBCoBtSbx924x7qcYmTRfKn7WcMexs4fsnLAFGrmonUm47tm4UU2mrBVvuKthDmhN4qPjcJgKMKnMCs5",
  "key33": "2RnhkhgF6XUTnkJJLKoioByRszvKE8iRd6VUpm9pxXWEDcFLWHgzE5CcPThwV5BdNs79Vs4mb5nzSSJUUtyBzYSY",
  "key34": "n97gTLcM3toSo5fg8SkDVXrusaVkEa2D13o85KqdM6PzWSJn4qLnbXBrtKYN8hRGKPdHkDTxErCALceZysRosMU",
  "key35": "5KJyw11BqRQG7Sh2DVsKzRS4MqtWAwr78jA5yZyBZj45AXe8Fb66LTfTwTNB5ho1HqpUzoPjQ8AudjVARWGhp6xW",
  "key36": "5GxVgsDyV5RJXAoB48dH9Fxoq3kTJh5QUNcA7XDWaW4hgyhEgP2BvfCQxLbPMD7D8hSi81JSMaePWdBzEn1ew4vQ",
  "key37": "5E94HHqnxPkmjEArJvKcgy2rUBRThuzyhqetXkytN4uvCEVzXJ6F5jkXD2L2BALW71gvszBptXfpERV9S46rbmUr",
  "key38": "5kKUJ4reaBzX5KNKb5xZgaaGzCk1hXpmL5ZRDWdoYs4gNQLu6GNNCU7PYEksj7FSyAba9SR3XKWhX79fWXnfLN3T",
  "key39": "3yjR4SMXsziSJ2kY7LwqgjNgEBTECyBsbtrfskLf8JMUuJC7dJa9ghPpQPAqnyrZHbm5xF4UARAZZDqar3pg1tTJ"
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
