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
    "5tEopoZ1qEq4yz9WaHLgZRSiDEKsgR1RHgidfVr9vW435QTfoXieUf9Qrbgb9zsiXVKk1SkXWUwPT6MtYU6tQd9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wB8JCPVCY9yMw2MVUzQBXVCJuiKRVeR9e7KwjW9sqpYG9fs5JP47hwXXeU8b6vvuzKw7Y1jxwvCUkMqCmr6AB5r",
  "key1": "3u6ikAapzqoKP4tCi34n4Ap2vxBdmnAoxFY9pV7tMnpE93xi41QFHY2YmXgf6tho3P3BDtCdAiffvTikSsNFWRC9",
  "key2": "h8KdSEgWDuys2J5RaSjnSrmANXf3YdAeY2zFiJ8o2HUn7e8wccZUke5UcfF1cH4nnzbCdfkDo3j8aAahAsmh8PC",
  "key3": "5wBVUPvxcUCKDbXurEaFbQBa8v3gbfdvZKX7mme9q7vCpV1jAJr6DuFjkqsZnB6unXMXB8UizsmgHfLBJavrh2ud",
  "key4": "4g8gMRhBMCUevzhR2uW1CPnLG4yCBgNAuepAawM5JeN9Lko8WFj5hguDk7rXDfcyiEPTvSPB82sSu9FCx787MUPg",
  "key5": "8gadHuka8LzhdwmvfWcHMsLNR7vZLKUyPNipWTw2iqAaric3L3RUyUjrJy8tfAwswdUYiigeDb5nH1ydfdf7TN1",
  "key6": "5UTuhGZoMGNCTfW414dPkoXp5cbkVquZ1gfrXVPME3seQYYgGUcEG5tpsAU2oyEjtf5jN5B9MK2vktHA2RMTVpnR",
  "key7": "5i1R9xMbmDZxXTC1fBHG9knfKJgint9NFCQpDfjJPi5cczorcz7WAqEZV7mYodKfPLeNuLV7CcAZS8jtrX1kt3aB",
  "key8": "65BiMPDTsrTaEPuHiNFRe8TsJyz84pHxjpZNzG6FGHCP3HpoAJNg8fwMHKyYYCAtGrfUZb7ttfRRBF2Nwzm7wRUm",
  "key9": "2YALGmeEob4t23xHJMTv23VnhFD7emWCzCczBN9fLFDT1sZuP2bAhGUfUudx5k2TfkKRrkMT6ArfURJxWGwpwX9R",
  "key10": "2743HQiDsXnqvxSnQ9CsJb22zsq4YAECmSyt9oXYUgYSxLXandmy5vtB3PWtTffPxwafqrbQW67HhE3dFJG8o6Tv",
  "key11": "24koV4Sw2iWwL5p9xwAE5P7tr9Y8JHvRhw9k8La1HMNCHJ23SRefSLJLqucJW97EXgnJGJwsudX954iNaNWSWLxz",
  "key12": "3mK6HXURz1rSCFsekx3Th4ZqDzB8moq4qWhgQeyf8EmYqaakdWHTqHEGcjPeYS4XUbmiWKyNz345fuNF7jo5GsJS",
  "key13": "55Uxuo6CH1vogwJQRHLeZaDD781ginoK5KwSSMxY7BtjfyAUon1BUVSxZbc1pBzoe9RLkrjUFAWJiBdg5J5iCmPE",
  "key14": "3r71nGszc35WBMGwSz29MBhLKZovsW2gPey82NuU9PVVRRy5VtUHo7wwoRDxsnFhUyq6gwdkz9LNMuHSpUWFBHUY",
  "key15": "3fdoUuKCicRntfXo43Xt1qc2hKndDN23AQhLFKJx4ftnkCTb8QNwvjuog6aGcvRXsZW49iHCDZrM6YcXQ7bfygTQ",
  "key16": "mMvZ93j7aaPcoNQsJPkBnWRgRZnqjf63y7iBAePpPDgFKUxECLZMnJirdmPQzFtjJFL7vuoXFKaCJm3nGtPGWRG",
  "key17": "DYMTMmGp5gaEdjFRvGr43ofpd7UsPfd2kCmTB3KmpnmVcEMaEekZx5Qdm5GmzMFYPwiRWJ2m5sPboUo6g6jXrix",
  "key18": "5L8Uacb7vcwpptL24593zkWy3EBHDEaNz421BxcrXvRmgUr2mCDvf45nCYKTY1JZ4xkMwajTbVM1VYC4r8gWfBh7",
  "key19": "3FA5eGV5hZj57Rm2trV7f1NgsGBcoMZBgK68r9afSmb6A9kgZpAhcDpe5nZmvvi4ztzWg24TykW1p1arwrUwRJKU",
  "key20": "5KMCR46iBpW8iudEMsL9iHvZAY5qm1QWgcn7BCgGS5JZe6wcMhnvBivDQRxXu8zMpyd7chzYbRbUNWkXE7VinEij",
  "key21": "2pth82Z9XfXgX9A6StqjSRi9tev1XigtXLV1SdfKoPKSmHsQCZrRukPnpVbqgWqJXP3d2Xy8RdAUz4NLnqZMWtpr",
  "key22": "2nt6vusDFV5T37knYR8oXQg5vcpBWZsEk8MuviDrjmWDThxWh5HfcCkBfWx5zY3G4DPpLx7cNzDHmE74pZKpYYQe",
  "key23": "21NSi4RABnydxxeUxLKTiM8UTZCbHVmGvDSz2CWC4RSBLQ5HhQ592oPLnR6EhPeMu9V3xQd2de95zxjPxkAFkqTu",
  "key24": "4yS1db11qyMh9jrYkQ2TfBKPFZbMwvjdhXTqXmv4jpW6opK1FE3afgmW4EdnLMasUXQeiU7AHsyHYWQjjz9UKZTE",
  "key25": "5nHMuXUQYDLCexyTmgHo6DSrt2zWwLpG6JisoFdfbeVpBR5nTwYqPn4oKhsjQacfS9yWBxwLKbgeab1oWUh4XfwZ",
  "key26": "43nmTV6Lqdb3gAzqHznBwTEyW3nmRS9m8GxRPn5Qjfo2XgAHUiZ6UEHzTyziQ7ND5JATuGoKrUB8yiNJqjBQdhiS",
  "key27": "2F6Yr1QaupHPzuwkyFi8qmdUEduvaVQiecuXE7C6d33zPdxpo8Qdcb46nDPfks8cd2jUjDFYNbcrfjgWnxtsjAxL",
  "key28": "65RusMguNa4wHDgedvdzUh5hvEed4BpxosZvsurBDqRcPhjVZVfVGnGxqntTeiEv9DUR7JzrZMj3aWAtgSNdJGw4",
  "key29": "4jgqxkBBinbWNUAwmBNQW4EUEWUBA7i2HwmTzFERXqodDybeQRN5CHfjDcFidLa91uwooi2e67y2tATYknunnysE",
  "key30": "5x48mDNTf7wqaDtvqLTPDXhMcgxCZFMLqox1j48mYCKCtehAs21tZiaabyMEit9RMgLECw98LusbHwb3b94JkczY",
  "key31": "3eQWjFCFLagaQHccycp9NfAHr4Kw9cTwzPEuHeNC1qhw5foyurTPVkB8NWgAAYqKBanFSbbrrrCwDFZHe7J8XPV2",
  "key32": "3TrcPyixg4J7Qr5fPERsBhBLGzL5AXGwwggDFL8GFSQUJ4e73KiECZutjBmvjKAbN5qpDKaEZreMs9vsAh5KhKeE",
  "key33": "kbrCEdqUMwdfa8HcuUQMLfnERL4YJVAxqzVGfbNTjBgJQpMnozS3Ctj2D5mD6UnfJsNCSKi63FNTYTm4HXRmJHE",
  "key34": "QZ7jsjVqoKLA3yXcaC6wjEZS5aWTq4E87aYqAytCJD9yiKRP4qin7KYYMYeFCNj8bsJ87nskuiov8azfpDbAHqB",
  "key35": "2r98eaGZYjjLS2ZTYCyHwNBfMWjeuWabXjX64tYfW6AnC5ZQJACQjtC4j4wdAnANDq7kaAKrSSh8fBXBTMFu6RsF",
  "key36": "2eBfUHaRRDbRzcsxoCRkefg7QeVNEhXSc5PGc9BnKgjTQ8oiwPUkrJPEogqr5zDSYC2RExH6AQgHiJUPQGUd3sSE",
  "key37": "3hrPCszuDrsojYNGnaJqNVKiaCtQRjsob2V8Sac9nf1kRLqEaq3FeBxUNYNX1cJcPCequhYm44adbY5fEaiYt6Ee",
  "key38": "5J9TmLGQXrhHhRGYbGosxa3xnwENez4u2Uvv3U3PTBnVYRJJvpViGKzskxqvG7H9t2sLBaCp5qjeujh7Ge5GGGLC",
  "key39": "BsBqGWrzeGnyfUowdET6w7xs72BoxvpMLtQnjr9TQCp49V8jpcjHm8ug2PRXHC1YNF4uAEPGswttrwacEtNeKcz",
  "key40": "3UpqgFp2smp5V6FKA8qSCz8rqjcGVNhLL4HAFueGVWJ7BvbPhUJ3u7RHXanQg4Taea9jXB1HCpSCmnPAG8FssKGb",
  "key41": "29g6FRY3uU8AwDopECavjE4DPwjeceySWwooWEx7VicE1jbSRgzBvFGVRMz8hacx3mGhJ9xUesASfjyZte1dDCyL",
  "key42": "wsjCip4zHtygGs2jQ4heWXLtdcgV2GpnZbdRSZuzgZUc9xmEwFTASaCnvrS8AkGnR6iY6s84FWNXYZAJmX4r2Pv",
  "key43": "49EkUxUzFqXc5p43ftJxBLgwpJE9ZuDoiNpoNT9N472HrpkjLwGQVao31aWcWEpHmEt9YCZZhGzdyv7qVZCtA9Gz",
  "key44": "2QSMxmfyZo9eJLKybxnXZFLFFcr1t8Y1577mkywttX7ZuGxDCXGkAMZEZ8e86QE1yQL2L7wz3RQhxhwH6iHMhoPM",
  "key45": "2AD5RZ1QVp2tP9d2HmivX3RDFFCCHKRXo5KHze47dngaCUGXox7t3Hb2FJobLcqYBy4JUFb1czhrWwAWdvDeFZES",
  "key46": "2dPJScv5Bm4SrpSbcHe6Ur1oMiVpMheLhrGR83TXwaiFEhB3Jb6GZfeEvzkcHvxqwTomhykKVMiRj6bugwfoQ9SK"
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
