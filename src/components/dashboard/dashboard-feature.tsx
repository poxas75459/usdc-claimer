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
    "3GnXgwEy4cNYmbhkofDa9Q1Mgf3iqTttRe5pqeBzdwyhE6zWrG62SF2ZD2kKwc5Dr9BNYi7rmJ31xWTngdWX3D8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sh72iY6MSLv46G3z8YXFhtLGTNenWf5ovUke7zVoTQRBDNrrYxuNZswZXpczcYwnEV244Xpqyfrp8jrahi5KNST",
  "key1": "2Ey8Eztun4m5j19JwneFfGQXoP1yFQLihYoLCD2qAq3u5B2mWSR1rPsCCV95UozMZu1MTnvQyWMzTLDaUXZea1C5",
  "key2": "3kJ3b4Li7Rr4STz8hZSaMu2SfCNabMRkYoQDmTvkh5skUAXdRqx4kefBEu5UZUHZWV1dbnd593nikmL833y6JbFf",
  "key3": "D55EdyHZN5trsze5xP1oUq9NUp8WMwB7gCARS1JpymR4iAS3L1eM7Vtj46hjiAzEk4ByB4rxFMbxmMSAuEgBief",
  "key4": "4S1jwQwLqQEa6MmfjovyWB1LWmz1xyNWyM43Xzt6M3jX43UX5ET8ziHFy5BFEfzxHRQjNjsaZDtkoitRDM3mFPHa",
  "key5": "3WvoVeYmomfVhB7g878jqCHKEaqHXeAjgAxe9APCyBattejTYELVApg6geFWnRTjYU8P1ndmXF9uYNn7jr9pdYCX",
  "key6": "52Paoy9CUR7iQke7EvicLjhyqcX23tAhboJMEnNt7KnUcJAi538Bq4AzBWu6h993iBV7CmvfyYV59oNAbfam14Mr",
  "key7": "4N3MnEuDq3CZPPc6WX5ckUbU19V3SttE1M6Gxr4t1gbT9zxciYQ1g2uRDhJYSBKdFhJdLGBYqgvgvXnUFEuy3Yru",
  "key8": "46cfZbJVHcdp2GDdNqxZsBFveQcpC9iNEB3noaAZXbXFE4QwBUKCC7adgia4afmGkMibqNMi24FdBDJp5jU2Evrd",
  "key9": "2PMTRh6juUfDuu5AeoVkgm6i29wnCkifpqyUKFqXdjTp4eFusfNk5uua2A6mN9DAjD9GksHWVAKkt85Shvu4uwVs",
  "key10": "3qefajpgTA2XtS1xCmUGL1UCXWPYfd2wB1Q4SEPUDXR2GKpyGU56qMEtbokDno1dNskWnCpJnVpQsb4iCE4FDwnA",
  "key11": "2TaDXwdE44NH4p5MGjSvhceUvsChNRQzj4cMpPbLYSHdLzZhZy6sCy6twvjAbc7Jr5PkJ8NpmDZty8ct7SUdFvHL",
  "key12": "5dAFDtotgFPXoUUPZzPjTLCAGsFf2jdxgT4aMTzFLCKDJBLMU5JhYJG4u3HxgTMaDiNR2AvjZgzwLkewiBj2ZqnA",
  "key13": "C97UozG685XcAfxmAqoChNEAqC95YW9AdU7EVQWCyz21LtFsoQjXtHjRB8fkxBqiWZQBwiv8Mee5VwTMmHvfFRP",
  "key14": "62XbnWif4NLAwLhXi5KBD6XjfSUWv8Tqcpi2BNnSsPewHqWPP9CCNEerHdspK1hpHxmMumijhyyM4CTHjTJG7bCM",
  "key15": "pchEo3tLTuPBEk3AHda8Y3crmu8kAXGqrZDdTkmiCijxSdZX7PNv7Cou8aQ9D7DWgWxVUFptcjsJe267D7VdoJj",
  "key16": "5mxeYcKULh8f2nhq2TaJh9DPPAVFFDgJ5vsxkvwgLZKpMX2etpnPsQptNSjAGucobhWVsPYHFPnx5XSyNxh8pJY6",
  "key17": "2Vzobi2QDBUgpV1JoDtfn92vkGsfCDHginohb76bYZYGoWaiEdZ1JfRYTu461kxYcGg4eWVj2w4AQkkzB1AHpfAF",
  "key18": "2KLHTFEVdxqBurNPFRFG5AVJPhj7frFugwKizRsLM2YAwBws4fadBVUhKbvZRQPCZimFnS4x6bJKD8D5TLWTGUDj",
  "key19": "431jsAJ6G9bcgxXL3vhqsF8nPBGPn1WZocusj3CLYM3YMAi85sVeksLaAH8xy4kTW9oaKv3k2kZ5MPfk4hjWHZPC",
  "key20": "2CsLqiVJ3wzAquRPcrfHJfccJioTuqkgKAcXCuhyAdBB5ut75EjVtVWHHcm3CuArL4N3f8UtYS6RitVKWH8ewa2z",
  "key21": "5wFJpAExmSzLLxCmtPNiprrRrF9DY23P8kWRZTk94pLMEJnj8EzjX5UgqPQdK74Eyx79R4GDs4cmXaCK9613QZEW",
  "key22": "QEqQg6hsVYkhySWLJPqMfa4rKF6PPtNgE1trwbTBE22BhbYaTvrSa6G5GhGPNjtTW1ME4hYav83qe64k1kUvBt7",
  "key23": "5fWYJsYok65yQ88zPKoyUWTFAr96Woada5iSnA6t5FCvKM72bR1W2vVvbNe5WM4PzZp1UpyqhvuQyZut5S4QVYrT",
  "key24": "3ZAFkvyiqUHFsqk9fc4NLnhjqQhsBtQwUzopHRdsZV1tsQi8iq1ShighB2z6YdZVoERVNpSWxEwDw7gLa987QiVN",
  "key25": "3wPc2qK6774YwNRFGAYxEC4wpk6ywA5zUPv7HEoQTKZP6qZgRm89pvogAkYx596ETRFHBqE7ws8wDHx9j3kdeDJh",
  "key26": "5pukL3Lwcx6RTDQQSammSm1fwY5Si1BwL6CWo5FmhbaMDJTkrZN3C8bSKi62MsSG9RJbYT4MhT13E3oyERH83cjx"
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
