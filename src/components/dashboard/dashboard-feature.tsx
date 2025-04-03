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
    "J6FcAzxV55gR3UzNG8jaCXx6nPTqpy9XQc5bExUNoDH83u5SNisK2HNzAhPyc1qEAFVJgsF1rT2MJ8g7shBgwoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPVApEt7FmgoAB1BuG2yyq5o9DTHWvnwusYDYXjMDhFfxatfnZ69rJVWs3YK5oTzjQACYRDDY1ybKMVh1dbAUgt",
  "key1": "47HtVVYwws1Hn9Ug7qR4c2tqHwNHZ9xc4VmAU1sLzBgPV7xa7AafXMwhSNTuirZ1reCUF2Tw37gpJnihDu2zd1vU",
  "key2": "3pVxccf5KtJfVnqE67XFpJJMbsgYkMbyTkjhsmtNScXFoprB4xHML3ntgWPd5quJdT3KkG4z3zVnTsuAnM5oqNRq",
  "key3": "5DRJ9zfuiwPu8TLcEoDGscZLPeaK9n2ekqKurQRB1zByfxXBUMpAk5SN4JFPDFSanxUnN93vYzNgJADXM5VxjGGo",
  "key4": "5cEdtSZSJ7fZz3ZowndCXFQfDZ2aivmq4JU9RPmCqrX4uHmXmoKzU5XwLqLaSNyB5EFJk7CRUjyAGmtM3yiRGPCN",
  "key5": "4Dr9B751TVUn9H4ivSnuCgENDLUm9LzYdGD1UAEDqenBowFDEtY2F34attA4auc1BRKFWtbcMFASsmtRYCUw2EsU",
  "key6": "EmYUYimzAzDdwD3yAGjgGVXSyXPAKiJ2NPAewVYS3dapptbPdW6o8pt1XRBaZJ4VG5nooDS3Kcff912HgKsDM9i",
  "key7": "42z5fSkLiKbnH5ceAXDmGvodofLo8WEDGZxjYbeoten7myndLuVwryqGVTSXh2ZDz7vh7uKffzg4vyJ8bcnjax8V",
  "key8": "4n1zKpvmAcbfa2AgCBZwJPRjnzYf1QWgkXevQKo5Kct8xki2rzahoLHW7ix31FoyZepZBHKmZBKSqi482ApzZWwP",
  "key9": "ezKGhVw9rbcy2XGQSoziVmtzsQCe5MNg9DWMenESfePzxhWWDHv21FxUTU5ZKMU8TdvfVUeGLvjfRC76PFXagZi",
  "key10": "2MRtiZoSETZkMWsCDXvBWfuZTjNfLyiuWhpWtuLnpQw5daGP9kfe6nShboZxR3FryJrzhSZQcmExMVmGrTx4Kbvq",
  "key11": "3CCKPjfT9YuEt7NeNrjvxLzE5tpVbA6N3xrYhPhLv68drVhfWAd4A89BhmU5dUViBC6C4yrcVvjWJkxpymJD5wAE",
  "key12": "4tPpvC82VjAjiUoobfQ9dJVdku6EPRPxdPJzebUZms9m9qG1Jg1NrPgXKDfmDNb8DUNq5tv3cvzFhxTntTBnzKUT",
  "key13": "4je7PaaCJD3HEkXv3jfCChTjiBWJ3396q6PrSMx9PjgjbWBZudhfYVQVXGeBH1fHxuPyTkG8H4sQxgAUUFKkXfD3",
  "key14": "238Pqt2b6nmpszHjPTyqBzzEMDdUvuDBmVqEN4HrhNrsCLP6JCi1L1JG7XoYR8FCxEXBwc7BbxWoAZNnoNrKDY7V",
  "key15": "2HAwAnsHMGWxyNAcKWjtfbEsFq2TudXLAQ3X1miEBGxVwfGmTvL8KG6fCZiucrofJRPVSvdAh5nf14TpMPckLSot",
  "key16": "3VNovzPnX3wDooFoHEjVdmbBQg7sw4zrEUQ8AWtABqmYoE5qRz4BvZswNiS3BSnnjVEwdzZrf158kpUtcu468YLn",
  "key17": "4k1v2dv6oW4FwAcRASUYSigZpUdJVniNnrNzQv4vBNYR5RxTMm4qfjjGRQzWwtZmMhWHsUVEyXwz2HbGrfnQwQFk",
  "key18": "3GrVby6NEwCVgbyK4D9jQ3zYVxQqCG2y8T79T3mUwMXMSM6TvhqbDbPWXev3gyM7qtBVVjaeEArFxeqZFu54rXSA",
  "key19": "3TghLiExXzx9EQDv5k1mxC6etSMLtB25xJwQun8gbKreSCeY1NFRgBJcSraTBkna7biao2NUtHwB3jyE4rTBe5pA",
  "key20": "nwuarsp96mvZQ5iLzLoauWp8h7PmVw5BmRNsmYiDBxCx8uErmxSbnU79HHXrrjCV6bdiuSf9i5PL92to44cHTH3",
  "key21": "skM9fTYqYwQKkoJxfGn1qy8oKTPRTtxyiRf3zFxwyyFr5UragP31Ff3MNcWdzmj2uTJ55haJeYpwz2a5xjiBZ5V",
  "key22": "4wxaoTJLUzDCnVxg9e64jSSnMEpwUUfASQ7TFko6uJXzJ4JsaLsuBnLz7NYsgMwEmXoYJvR25VXKe1XC95hFprp3",
  "key23": "5bBFv5ernZgwWdtiqYj4ZTbweAemu1Pqez4EurioNqJPhsQidXkCq2dKiTuhmdHpcrpdsqQ6JT6BsT45d838URJF",
  "key24": "4tTZ6UtxAioEthpQgt9GbnaRcoGZt45kEMDXQBQaj1k6RURTorEE7p5uYfZefVpV67FME4eiZdzvJ92mEXSXmqJX",
  "key25": "4PKiL56oByWVNBE5hSoMTScL9CgKtHmr9x2tPPaHnypJphiZQgapAgDyTZsg1ZVkrwKky1PVBZvdbvX4U6SxXUVQ",
  "key26": "2xCfmz3HP89Z67jRVzrCtk1qaTM171ixf23kynJrfu1CBMaqWnDesgX9jDwfvxSuE3pezf8gUFzBLXdzYvhkLoh",
  "key27": "BKUk4igiJLWLxYZ3hxZZGyW4Sv2HwKaFbZiU7cYpwcCw3jtaiebc7kRUZUirwg2dvMPeUbWGYUiSWPzpf5HKgqX",
  "key28": "4waB2L5iE8vPPjyMcppoySuVRBQJU35bYEVAfBusCQuz7uJPD5dSEf1MwQZYydpK253qhN489bEFZwq7rTEpp9iu",
  "key29": "23dS4ZaUbZJmemvRSZ9gwcMzwfR1HHVRm5e8Q8CWUXwZNghNP7NLyBuAzoFJnNh1PP4bx5LENpLXRhN4ncG1oHe2",
  "key30": "4zoe7wB9URuz6vfntqx6qLTwUzHaBC4G7MQzMmBmLTy3x8jsYuEqJ7B16Wbhax6PfuAgMREJj81ef5wGYNcLDKFW",
  "key31": "2vQbmL1tWDCQe6MkChc8WnwYq6fRcjSjx4WiRKG6mxiyZQfRx2UVUmzo9Mt5jhpZSjm62ggx7PkUuheR1bRJt3RH",
  "key32": "4vYhjcjvgJYEkDonTfw8HEvs1GdfgzyA6QEH4LzQFc3pkshDq4Q5mo94d3qbMHKdbDVCRvDYWUkCYiq7H1J4hcCk",
  "key33": "2MyP4aJwwopmi7RysK1SLcifo2vFwZk9df7ScGpVEtCop1BgvTMVUcccX9sxtCuxiKcqhGSYuuWGSfZVaRxzBZBt"
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
