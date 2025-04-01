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
    "2NpYb1NHYtUCPNn4Wxt5iKVfpWnmimrgqwSnhQAGMecUty7WM481H7MQCDoySptNYNPimNZzDFN7ZrWXGmc2Bgph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdrumSRP2meARGu7crhYeGMkvUbcKk3WKqyG9CFhc3K97KH244SxJ7nKusjJsBYs3eqfRo3EAxyDQSR2W3KNnMG",
  "key1": "3Mu8gYoWJPkDBnqYhsFZ9zUKSdZ41UEPnkQ4dzqzncGLgpEsbLvgSSP4pTrE6ewkdB4xj4ZjU8DtPhToJdidHyC2",
  "key2": "4gRM8MmBE9BZrAsmqBHt7LKv2CxkMR14EW6XnHzGPnAYngVAkwtVCTN4a1qeRwFiV7axnJNQXGW5WfsoLNTV462y",
  "key3": "vBdaLzAwtvLa7XufXuduMwEZqwrN6vJd2q12Yw756NeboVPMoyK2JpuKpBT1iSa1sSbgUZxAPzJEFPufkCJM6k8",
  "key4": "5FPRbwWPEiuHtCcnLDhsCqxc19Kh8HYNfDqf95efLUUQSRumWRmz2Cipj5ZUWjSLxcvR6DJfSmBS8ag7ac9zwnLt",
  "key5": "5277cW3B3JTyao2CzY9u5HummdgSQGzcnSWEcADZUDY5UdUuqV7i3z2En1YpsSpToHKSYQDjLJZexyBrmZ8pSwGw",
  "key6": "5enSbBcUs2G6DHcsvv1JiQoB1FxrhstEMF8CAzxBxXUGmFuZF79fuHrbZmioVT1iE52HWsncbGv1DGf48kUiD3Bb",
  "key7": "4kQiVvo4tGrK7kMeSySqGCenAGPw3st5t6nFhKcshN6FHMzgKqTpuRH6YEte8gocd2uBLpuLYFoJwzfR2DBwTvZZ",
  "key8": "3mv4r87pwoTQGiTPee7DHxtQhc8UdzKTKTgV8SV9jWJjPsufDugFex4ZNdhL6eYRrcKTcfcUvue3tZuxfYbp5YXt",
  "key9": "fkCLwcAjmZzLQib5Z1hEUPfqx8yvqMuxaPhkAJLP1rgj3qt6iomTvNzWFZGT6YpU6fZABiMsuGS37BfZaY2vBgx",
  "key10": "3yZTPucnxqyLkhGzgZcvLSi4ke5E2TaBr8U5RFpGZivobXYR89Cuvw7HsAUy6T3MVkLqCd4yysGxEWUBrZfw9hvr",
  "key11": "Sof8QN1eKD441awgdbhty4Qn8yAL7P6iD3BmtJdjyud9neni7DVdXAZvZStUTjyFA9UJdRom5qzkubiKAgahuLa",
  "key12": "p8GT4H2GVLgb8B73MQz7x7RPd3Nud4vSacWXvVBpcJwg6k2vTUmKjH3MmQdnHAmhphJHjCbXjRfbvNtwE1Ucjsh",
  "key13": "5NFgXLk1B42G5SKxi6Aqbq251rtE6egroGnAFgVphW3FcMivGUFds4Tj6xaDXG1seCzWyx1vnpTHEvLrWDwqW89R",
  "key14": "2HuZqn3PDak8SyL3pe1WKT5UzbP7FSKrabc312U2pGBRmiZzqSSficbAFuqTHWPiSBVKBaBmKCU5Kobnoahq3Gx4",
  "key15": "64bgVjpPYkpM9kGYkj9uGJvFLBVATyD6sQgfmZ5RXPHZepZciW6FWWRyU7fQeSdhscsRpTfrt4tVu7dqgT82QF5Z",
  "key16": "3VoPtmqRbMaGd1Eo12fJ277Kga6jAg25VskdbmH1vcpinpmP8whNQfJf22NWAW61BukCnvZZRVyPiALbnafyBoVC",
  "key17": "5FhhxF9RghNRG3gj3UMS3qAPcjHrY5mSECa91tgNUzoqH7hSq4SyXzNecD8qXQgbNnuNQAdq3mAy7gCmYiFcnUn6",
  "key18": "uFmyQr86gKoENG2f9MMVMysweSEPuiqJhY37y4iByT8G5kN5grwi3LNtwvqPt4MUExGre4uxdSQNVRrhFViMTHg",
  "key19": "3UxHGb57wauidjocp5DLVdCvvw9WnH8nxpSCUt3mZqBCEWLFQtkMrJDfUB8bivE4cS8X2thr8aRj2rF7pUpfAFCK",
  "key20": "4evxKp9EnZsF8R3Zisn5CueBG7ZXf72rX43GxrcqCkD3ETU7Q81FX42XWNj8Wtq7PREAB2n6eWe1VqghGZfnmnFu",
  "key21": "9jc9fxNjsyfU9bQ5zG6bdMQ25GdpFur2tYqsLgAUM5dr3X4retto5J7mRmRZak7yPA2JKN1EywcZZxWTXiwh9kk",
  "key22": "4u36ShVGiaN58QuZ1anqq1oEpX2vnCHWNQAzx3am438GurHCqGjH2VndrzeP1ivyhPrJJw3FJRNqr8qteQe3Wdha",
  "key23": "5cSNKvsXoYfRdX9DX8sZaC2nKdfF28tjZufPY8Ez4iwrBKuy54DpFeRNhkPrm43hZT2dqZY6SdMDczS1fZGsK7bH",
  "key24": "4bSeKhN3KCNbUNERHzemjNsgs2SgkY1EJbA9dLVWrHBJDjCF5NGYpahKEAYPssCb6SWqKEDTuRY6HoxCjdUYZZ8",
  "key25": "51FBoG4JCpKYg7PBPcHr9rUF7tcvZybAZjgbBvMkEpgCNfSJwRzB96WvXT5XoFgWiWBTrjVtbrMXuxkphpMKhpmg",
  "key26": "3McJEAPiEk1zmDHU8q23S9pH1NWkwjV2nCye1gMHkx7bEF3EWbAXoDxF67e9xXsxfZwFKumy3UwJ18mdmTk3C7W4",
  "key27": "TwVZ9tWa8viFwvDxewb78pK4CY8RLbWygRVgmurd5469oJDeezMCFmc5WmpZpQQjYnE7e2YZr4yNV1YgWbk4nNi",
  "key28": "3eYaGvTzkog4K5sX7LjJZJDE1U3tTHTkzc7qS5Ajc82nDxEmRRqHmNccvAvQsfLjdABoakc67qabp72L4VoHQsGa",
  "key29": "2q3TwvL7GqdF51o5PQ2nhg8G5UaUbPvUfA2H1ABwNqqhNYTTCWvbk7jXvH1ujGWbTxuGasNt94v6SvmiEXkGqxBg",
  "key30": "5v4A8ZStR1VWgT8c8NZuqf3dhuCcVMhs5DYatbjYH2DXMs5Gnc3ccTUSjAyvkFJ8VssMa11DaTrL4HPhQbnH1qda",
  "key31": "3mPfNAHvmhSkRm4sUkAp8Hzy71h137evf7577XP1GcbadQdESzanV5V84wAuxnRp9mjpEZsMUX8RmZEZB9ZJzcpz",
  "key32": "39jqKTKdrNuEZBujUa7pfNKNjnmwggoXLnNdqv8BkDFU5vKCpSrF5WPsVUSSETfJ1RMAHtUThKQicRSLQhMDtvdg",
  "key33": "4mBj6ucm5vHJKkFDj7ZcPRVCZuZQx2yxPTyDxS4CX1vBiQZm83QwxrPpiWkQ6ZDXVaQ5RQTnqSw7788QTYN84UQp",
  "key34": "3hsasCVU3YZmp8PKtU62LANMaN5KRHTbRXXpswT8LyKmBBi4RPuDmqQ7k8gE5AVTQeSBCgEH5qUGegLKPcYVdRGH",
  "key35": "5AAQVxTUCC6JfVigHWakFQsAk7a1mvSX8qQB6RdTiwsK7fp8vKVo5YcboLfBPpnbVcZHPKJ5KY4KUfHbm2WJPTUh",
  "key36": "5Lgza9MHAzwPD4TH8vysV2GaWcKzWvEtiVbpvUKVDMgomtpTbHb1gmNR3SYvMvsSxYqWGpmqchqgGqF4gST5NSNq",
  "key37": "2JS44tXNeS8BV2rcghMaSQgZQtJ2LMg9oQJybro9YgB1Ad9hh3te1PaKBLZUutAMxmVJiqTnum4UQT4q9PweAsMq",
  "key38": "2WJYCs8KvdKkQpbrjVFEEpwwnAREoHP4gWNEtmw6LWCwWkQkJ36hFZ3WTsgHvhxbaYEvpGQjPxxmZr9qkcRNaN7Z",
  "key39": "2C2rNFmoyRLrBVezjtQBE11ByFyqDq8dBe132bQPzpmdsweJhXecmkYmzfaUwjB7VZ235S5Ey82pQB16Fxz6Yfmx",
  "key40": "3TtGeuRuzdyB63dKuzdjTmfuaLLvYzj5gyXJzwKoXUnH4bF6GnkgEqVom29XJNg8DGj76d9Ae5tGDQN6LpesAH7S",
  "key41": "349QMfFhm12s9Q6dLRPybErzdSLXXHFaRWPDwrT8kMEp6pWqKNo9iapnF4oAidGvh7g3RZVwaDGgZ71nz8aZCeLt"
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
