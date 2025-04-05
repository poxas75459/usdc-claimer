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
    "Kb9YRXZCsRegKCkvMJqUnd2cPZ7ZrT1biJWezzcPcC35GS8tMREu4isyMcdLgc2RYY2pzaJQSmJngYe46ivd2iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LTM3L792zYXqc2EnRuE5yEbRvR6RqxZmD3rjAwAa3vjrcTCTayJtQyJNpMsEbckd36JFRhPujeoQEPuXheAiDFE",
  "key1": "5NtXeWdBX5Ewnr3RZus17G8C9WwscDtsq1vzQvg8KS1Ei3owYubh4pf5ZA11D8whgcuQHEHQ9eTMvP7JPupunSGN",
  "key2": "3xwoLyNqqtQ9woLnPu4kiNgEp9EchpqZ6srdVm42qNTzVCTiLZaatpyA2esciPQiMAt7deSDARFXZnzTqrnvTySh",
  "key3": "5y2foEQuGMiTFa48ErWjcNGdG6z62VwukyDMZuvtziWgLCxr5RHgbXwzkW5wShRXijv5frbStTB8RVM5JT7nmg98",
  "key4": "2pfyTayjKvLWprZpaREw61JZrqcdngbuqUN6Fa2v8kXRTuXzh1JnxmBffswxjuEY1NMdaj9irLn5DfvCDgqHWLZ9",
  "key5": "2Fz4fgKZJ1fUXdkbf5greDjoGNpdYdXn93pSUy1BZSuH9PC2BV2aRfDeVjxfEpau1wGiyCb4LxGnuPKcgEGf9aNk",
  "key6": "xFdcynAQob1MmeYsTnN8zw6ZPyMUcj6f1ZkFLE6SV7t2AWfRg8fQweBMjeqfd212pWKiwMkJkev1nsYPES79Dzs",
  "key7": "3iQXeTUcD9Zx9UnV7VThCCbfu4F4aLEzsEvFZjJMpfRt91xZuP69FqPfZZzcm4kESGFChWTDLr5XLn1S1zeFA41F",
  "key8": "yuBboFhBQDAxf96hje6hCuK8qPKAzdfH1kXdYXY639BZEQXFSXgwE5z2yTJhsfwjs9ZTcrmh2oKyikw2Pj7XFLe",
  "key9": "4d6xBaEiKsWqwVtdqd9CHvPrxZSVHS5D9YywPAy7xdSm1kUpx6F6HTjDzfATQ44YMFMr2B2GoXLtpUtDrLsbrPw6",
  "key10": "5S5edCp6RX6tsykobMAJHnxmMCxuRzVDww1SH4kjPCazdSGANhn3zi984mrZJT5uBPZVaWayyK6HL7DdUaDmGEyb",
  "key11": "2WdpqaU5QhyFiL5trU3iRp2SLFGQK4hCyoGmm184CqPdfSWP5yNGMCBNjpmHANQaV3TXJY8FTyF56ZYWBuSHMdwr",
  "key12": "3cVwVrzT4B3AZ9vxA8pSpMmmx46mBorokLorfXPoo5cv5uRkzVxGvs3r5sc9SP6X7wLz3eK78676QWRAZkgjf6tU",
  "key13": "3fmUHrUB4PJfxEN6LmPHCu1ji9KuSv5EggUkiNqPTah4YZMdB7NDmmvzjayeiH9fjpK8fgkxoPdBxrLa3Hh7ohV7",
  "key14": "1XBNDeZ3TFczaY9zaaL4N7552vVuiZYs2wH6DuQhhhYLQwECmhpq5LVFbyQzSswXZ88Zgki7Dw83Tu52m5q1kk4",
  "key15": "3rdwtXq1eZQFWPZ5DhASsKVubijgwugkwm5spFqeXWXqpthvENM1LzUUEL9MEr6grAY94HQ2Ewk8AcYf23x5iQAu",
  "key16": "5zdhsczF4s3or17vDNztjrG5M5FKos1h12ziaMGxA56DcJs5pSoh9ib5Ef24MRnoKiD7Afey5HxTYzhbVSeb8T38",
  "key17": "5Ve1xi3XKtsnkV1PokptbR8LdheoBHtniHEpsUcY93U7nnELNMZusrbk8uXkyhCp28Dwdhb8CezXLfBViXtYz3AC",
  "key18": "2r2Y3yH7wo6FYGdmQgiwxqExTaLxarQUyXG71gZdwWRFNGdXef7EpgQphK4Y9EkGNmmyTeU2uxdfF3wudaxqVsNK",
  "key19": "4crbafmXhcNmKRNNBkHmUwvz94Hp7xaBsVECH6L7jDRZutVJqZEEJRdyzhLXjrp5TGmEMugpCpntTinz2tunWMEK",
  "key20": "44EGmR1RTMT2Cjv3Kr894w2qBAEMEr5iwDADgAEcjBCoFcnaxnfWNGWu45uCibek38kb8ULGn9P5Rts8jt64TRSC",
  "key21": "2GAhsJuMLp1J8cya2G2kcAyZX1M8DRAfkny7aCLAxsLT4RzG6R7NaViirwwJd4uxuvsVV58KjUgSTxfxLjW5Vx4s",
  "key22": "3ZvJPB1F7VZ28oxuAum4NHiWaUJ8ZBFVRqQrnv8KZGAiYLNwYMHydpRfqLp317eekuty4jgXGRBgRYs8wnZ8Ed1w",
  "key23": "52au3KDWVzoibVgiwLYSfkyyctj3YtnjKPpkDKbdg2aP1j1inKsbJqVQfJLpzWKBK9RJYJ2zdMj53iaShXPpCoy5",
  "key24": "2MiXixUgQtwpWJeTuUXLvLV4Bmzka3a2QZLTTqUG73YL8A97Wd5zJ5mSqMctbTQkrtwupZ5qtvCbZ4unKJZXe6oJ"
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
