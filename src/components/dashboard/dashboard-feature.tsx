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
    "4rTBKCCpYumCd6ZoYJ1DTqb8Eesdn6DTJscjNBV2KqZsskfb68hFH45NoamwKKaiZSoX8E7ReDarftSBCdoME74A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sw4kXUW1Dt1p35FntSQ2T4zc8ZfX2Pxe2ygKmAyHS9mQ59rWMrywAFTDqE7mxqn3vJFTmKdbgF5Fxz8px372Cha",
  "key1": "277bvgm9iVa9dn73hLPsVDTkUofRhvHnTMWB1JFKqLfsRPDXXFtfZzwHeL91zw7Vc73iKdARBnwaw3hQt44VxPaP",
  "key2": "51dq2w8vUhYACH9o6t9g6eHwkPkpxo2VcSxhCmQrgKif5HeJ7AjBoQtDGxHTsepGWXRrCakvGtxHkyEW7vvTVXmQ",
  "key3": "4AyZbDZZ59YgvNsPLBknPKW2XgCFR1xL1e3C3ekPy2LA2darDLahaCnWoix9DSk1SZVSuxTGiSwYdM4PzqpCGYRC",
  "key4": "4n87hyKMA1L459XZqgvcczzJDny1XiEEoxALDwY6yXUdtHE2HakmgdiKneSi6Gk87FMWPHc23CyGgsiKtjGZcQ7i",
  "key5": "3LRScKuDRHU8mzJeBDCFZuG9sMcTTnC6K1tXk9RTeXZ8GMCLEWiGVig2JvBWx2Vn362sXL94bAqy1y7Vz92bUiL8",
  "key6": "4jaAUBTLt9JWGWoYAePPrJ2hKgMKJJMwL4bMcJxCAs6uz1KhRAg6u9ojaNcDXofFNUVMRB8wdtiRANXgUmBdFshp",
  "key7": "3m2B4rhwNrQ99EzatrBoziYnpUMpFkEwJgUyYG62XLgmux3PgBSu5LMb6ENQfnHpEogjhYnWw4fxZxPWUayBAh3F",
  "key8": "3carEtgC9Y5jcPF6tBjGwPaHyACA7dTJcwebuxTPcrdTC1ZbXKKJJBBQa4nCrvprSU8DbFWBcAbVBD1XQrt683Vz",
  "key9": "2wxGFpJA7iLdmy8MTrHPJHJNtwd5SKskLMkWn2EsVAz2e4En2Umjb5HoNqfhfgMQPq8wmqPgTffM1nwofEmqPFNU",
  "key10": "tnkWg6jBcdAbUT38zdYTUhfpADHa7bjP2zjV4jmi2PLJJ7bNQvgfxucofSkcvHZ8MwLnrbsK9CT2hHftTa8EWja",
  "key11": "32B86Cas9LbNAYqB6YuSX8Lc9GeecYBhBot5KhydzsP3GJuSge5mNzUS2jYNShZbQf9MVUNqjbaTtJSKWCy81oxG",
  "key12": "tkpPFZa8fNU7gb6fCMkph9uGpcrWng9R47ZpMcwkMdDZu6U7LLBrvngpY5qzd4AAkunuWQS7gJWqFxw4NpjNUum",
  "key13": "4E73QcoHNgCCskB4G2HSUcuS14UyMQSrwS7bQaewcU9GkYAdd5sEr1ZL2JCf3fbSvGiU2WY36YC6ZdNEFCnYcGwW",
  "key14": "7DjgkVvbfsXBFwYHgHx1zUKKRDgM7PeCj3F97xAT942TQnJd2DWmdtGKAeUt7S9LHrDoUbqT6bkHMutUXCCdvDM",
  "key15": "3EzTLG4HZTumQrmWxAMMeZ61JLUazB6UTDKGdwYN49vD1qFhD42axZidiDezDeZfChpcG5kpAFRNkjo9pEoqyFkV",
  "key16": "5nVuAAh7Y2WDfcxwpWGxq9c5Gamzdiv6rWK1rip3eTQj83Q8tFZVGuhdRV9ipiasihiMu9cqZsZFdTzRwNek4M18",
  "key17": "2uXPEZfBDKGSRnMd5HZXpHB1qnuCDCLcn3PjYyELjJQoxT3tS9gLszU9G8PJgtRj9gp68fHuv9mon7yEqZvBEgMh",
  "key18": "5GuiR3YnZXvZp1Tt9N74KpexZvbEzXRoKJFPc4VNaUwr7dVFjEt9JpCs8uWWrnjUQLG4uFKPp1nSuSBfS9qix24V",
  "key19": "PRS1dtuG4ufzuaEAHuzXRUnZGQ1NeG8tAcSTJS7PtHZ2jYVQB52Uynnv4gtCx1BPXwMueWi6GisqJEUnyoWt7sz",
  "key20": "4oRwq8i35SH3XSuzB7UjsPcVfeyxnZyP7PV2ew3hEFjoobeQ99dMjnpzkwJZhefBF9GCUW4Dcs9DSJopUzctETvR",
  "key21": "cBb8orFh3eBERN747jQcDX4oZ7BsQuKYmKbVVKFpn6azxp2womXQGfWxLAZdbReFuhomLwfdu9MR7txs1mKwCXn",
  "key22": "43SU48uuQTJ34kaQhNDKBUNvdgQ5bFysXbKiY7EuHTGy3ryHyVyNgL6Derfmyei5qyhQZt9oaN9PY4qE3DJAkhaZ",
  "key23": "ovu5otNaGHUZt8SwLUVeuN3KhUSCcDPddMNn8JEZZSoorZVaV2q28rrbRU4TsVCRUTHCvV1BXogdQt34tNTaT6r",
  "key24": "2FD3G32AipuZBJ6PDfezbtrsQ3VAiZWJb3dR6Ui1SNcdysZzasFsdN3Jchntr86X2AWjowvW3oPpNj5fXwcC6XL",
  "key25": "2t8uWmHouVHbycbCMT2RwfJHhK9GZgZrcf6nD9rJPuaetJoCRSkzTDjr9wghj22FwreDVxTcLbEGQWtipWHBCuqr",
  "key26": "669cVtw1k8njMUeEh8RDCmNyMPLTymSfhJPwFvPofjnESP5nkjbm5VKuzkitYY7PL4ZqgEKuaQJ4gkK5w3Wzk5Ei",
  "key27": "2pkU5nc5sL4KtGpLwr58SshPCtiY1hLEFbsYWtczHGYXzSPUZuoPVqhVdibEue2RLu7a5MQoFAjTxaj1ug89XDmn",
  "key28": "6QHQtrh2ik537L3yzmA6MhFLcn8giHpJRjPo2TQpwksFT6gEGLFV2vHGFGzJHfjjMX5mZeXVxSEDLVTs4KHieUp",
  "key29": "4TcJPpSKdJY8LWKsHfhQrvqs4tu9TtgHph1L8trprV3AYH5xFXbcYssP3eB8iXFyjf1Q3pQryDEd7bZHHbx1A6q1"
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
