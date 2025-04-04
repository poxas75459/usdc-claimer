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
    "55CwRKwZrKNaXSzw2NAoewKLTA7HaCLqnYz6WnUc3uNJ6WYa5yT2h839DRpciYnqMZHkzxV75MkQJQL7iZJsqG1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nqu79sVPXpyzEzC4G3CrbwC1Ee6yjebqZ1YYaZ1H1w1SkuS8ZGrcFPy5QemEXtF88vsw8MWdXjwDB2nKs8pV9ms",
  "key1": "5S9NUsXXFaWN8MxEs1hnGV3t7CtLfVnWRc8Hq1Y1r2MGYrdh56XJ1BFJSoXHnLD89qhqCs1uNXenr61yJkVeSaKR",
  "key2": "2b3GKdKcbzYTYKpsQfn9JHSKGUJEs6AVn6Z1tmrAyBXUJuvsXeBFSguqY4EgEpfksmqqp5WKyc4brThjaJ992bj1",
  "key3": "31LY41ZyB2z5k6aqiTgFvMXYZhb6awRZ4UmEetWHuo4pWUdc2DXbonUbWvyiPJVFNSQoYREYuExy2WDL8XTjgWgC",
  "key4": "26W547WhE83jJg7jasFsbZbZXtCWM4G6bD6LDZKvxcu5mCR2oD7xzKvJAWTQQXeqdVsWyzseArAuhpr6VF3XDwjH",
  "key5": "2hrzW6mJv9g7vbVWLXw2to9U9UeJqsAASLjAEpFBzUYz4MTmMrawk5U7tJ3BmHf4da4BaquLovgD9uxaKLUbUkne",
  "key6": "475RfPHXutzdUBFTmSnHjr4ZqK1sYUY9vC9pBWvCX7sJbJSkjsQJj4VRpKZegECiZkfYiUHctUSpnKk7ukXU9Yjb",
  "key7": "ceEuw8SP4Sc59hE7zZYLMEZhYhRQwtaRmWdkmZ4Bo1fxXgEszkPgxPzKnTaLZUfPe7ALQpbQRU9BCMWKVf9hspD",
  "key8": "M9oVhScerGgRkdm3P9WKyVMU1tNFL8269NsvDpmrueuAsxbUx1hpbJfgR6rbNs2gbFH9n4pSWPBjEvsceGUbHyP",
  "key9": "3ScbQcsAvXR3HawaFSoteNzVpd3D2rM5CfEhcuD4xU62sNUyogy5hgHwcq85w8Pf4vVEHRqM11RM4nTchsXKifbk",
  "key10": "2LjAGdt7BYdf4o7fkwZAwJ97kbuiRT4eijRbSggQDqWHFWuqbvsKK111v2uXxK7DxS5ndJpRNckkuZSfdmcwe4ce",
  "key11": "56PuJa4sKY9VSrwE542ofPoEd1PJX5GuZLumT8g59dXSgpopq2e8X548XQLgQ6Chs62xm8XL6k3aDKduMaux2nAr",
  "key12": "vcgf1giSSgrmwfqV13CLkdtiZL5aC8tCfK9G9JbH3iooUe7QUkhmSE1uDBqkSrxr9xnGS2R97HuYLsV8EvHLiLy",
  "key13": "26zEXk4dPtsWpqDLDs7WAyqsub5ii7Xt57PUpZn6kqB7CuWAx6e5YfSjt9bw6AkmHvLDoqPZWhyF3DTcxWwDYU6Y",
  "key14": "iZeHdnTM7krgKp8AGizjauozx6V9HasBDa8KVqdmv9VUc5QxF86tYzUMvnEkan89kxpaPkFLMTzz2TjzDLu7jjV",
  "key15": "3BVM1FbC1rDxLfQG3GFm9Ro1n1ww5Sn4n4gqeVAKKYuR8drXMj1WUyYJoQxfDAq4XSH1wKtmykeipfCqu97i26vj",
  "key16": "4hwwbER5MhJVG6byUBxoWBrzFG5Geuf7hKUNxA96y7UFYWnNdFH1dF9tGTVJXQnJDs6UnJaUMDqqUMqEJDgQQegN",
  "key17": "21gES4ZWwaasn3f79izNEkh6UnEUGNuD1Y3CJt8uQcQUenCiZXZ2ZK6urEwyB8VYRswjeX1q4fqwa6rfVKsBY1kQ",
  "key18": "ahTP69TUeyTfyNrKq4WmhX2pcvQmii9d3TkZJXk7ZWaEV2vYugnxzhCfeJeW2YvW3DKoXbQDY9pwHqmU4CMAWhx",
  "key19": "4hqdu3BohEXCnyTpUPCdBUH4U5xY14nizF6LjNXb67PvpcFNaKiqFfbPSUu7LB9SgLcd6p3Zba3wuwUEJs7f3MpZ",
  "key20": "2CPBuyc4KfJ9r9HvRoMP2Gs4474voCueLgNHjqRKt89RuEPsG8Sb4BrdiyNiFnDiondH9fxfseMe6Ng4Qi5Vy5Ej",
  "key21": "93tWY3PnMbjgtWWM1nVttGDBGP1SfF7diA6R8edfywqCVyuozFEkKbZ9DAFKjeigdL33hRfJgpnirxAcrnDAETN",
  "key22": "3bNdnwZ7Umdx99xE4QxuMPX1UP3GJ9NXze6qbYoQ641KEs5FqwXp8rrSHVGp8hyp8EsKoz5V14616KHiCQdrUMgV",
  "key23": "4ArPEriPq5Ucb29fXrDcLEYcnUAtDvRMg4FZYgyJRN1xpzSDWLACuc8QrbeyBrz7oTPFVfz5Pz273xNc8TxxFu7Z",
  "key24": "2Lt5zHXns5kwDjQAQphAo2wFu12T7ie7zXkUgGaLrLmBQfpE48Zi5XsHV39pNDXCTfjLTHQ6a9Jbarvw1W1UyZyj",
  "key25": "5D87wKkFFFavU28pZgwDGUfso5HRF733o9RXPaDaS7CuYCxnbzkn2exPvTW1bAfL9CRqEEbHF42UtWAXwYJwvZ7",
  "key26": "2ephtZxCPttnh58MeZe1jS5pmKrbNX7cjGXb89gnrodZXTLvckxZoKzvbkijtMNzP7iR5NEmhAdjCjXDQH5KqqAt",
  "key27": "2orzdjpWQmiGrH5sCUQsf2Wk9YXG6Ru2WrHjtxHtMR69GeXGe27xXFW8c84RUzriMX7XpC8pq4nCgcuPyycwnyrV"
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
