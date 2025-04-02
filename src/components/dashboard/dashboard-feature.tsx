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
    "3k1NwCcQWHikH5DoxNXjKa8kc1wLWq8MZVaFYX3Xge2tZXiJdPPrmipR5f7amJ9kkGMfc3Nczk8WhZysbwd3u8D6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjAYN2xrCavCyqps7WWYgHXMszGf4qeJA1BhDfswff3dJe5XCseUMFxvyBZegFdDPKFnKBchTKjN4oyFXgWsHxr",
  "key1": "5eEpLi1yuCrPJkgmcUzXePoUq6j1U6VAR6STMYTN4S2YkLqnqRUj2YNs3PREEbmrL52g3Aa2zbeMXaknDGA3dxKX",
  "key2": "4rfQCRbETGMTr2r8vCRZ6zatUdzKKwatmzcTHiV57Lfjk7p7k5Ss4EQ53xdTTcqWpA54v7tQPDZK7hczQHKr2N8N",
  "key3": "37KNYX1hcK9WYimXs9r1MGwST5Tg587iGumWdAsaJNe5do6ZERpMEengrrLV4p13EQPmYmr8tbyN2HVhpTaG9sEU",
  "key4": "WHvYWVrxpdixwo53Mar7Yt9mJMfiStzjMreVhJMKMrkboo1ojgzDZ5tYoeJdo7wwuikEqFffT4iVYaBdKyYbWhz",
  "key5": "23YFhZ1p9fAnjAu6twV1bWUsEE9MUaLYnssAqdFBZFzHsPuMaier8nNjNXstRQa9gCxRRi4rhfxryPXjmVJMCkHq",
  "key6": "4TsaJwTwgHMyaEEEq3ECe4tE7AJ3AaEeNWNfZK9efj8WvDZUYZ8DJZvEJRvwsS2QFBfEiZUC4uhodbnfnXHuBZVE",
  "key7": "4SpmKHQYwX751ARdchf7xbFcensZ8ZkfKN2966Mafmi9ZVZVmfgn1Tz7EtMGxVMNA1U8FsCwp5Ft82Lt54CUND13",
  "key8": "45ARUHMq4vN8AG3bFGXhtDguW9H3w3bRf11ycTcmt6ChStTS5UPPWxtgvT4GVU1PGM68BprjvZUuCgGJyQZUeTTH",
  "key9": "3n9KsXDbYMn4d8tJcR29sSPvYt26pWiF834KXRqdBT3fL5c8EmRj5uQgRrLDnRzeSAFnwdxVbMtC7GgRbYxNkpm3",
  "key10": "3wRFkKFn1pTS6tkKqRA9fGKikHisam9HDhbgNAu2ws8NpcytRoV8wNoaf8NucUEkEfLhYnMg4WVJ3EmP2AWyTA7B",
  "key11": "5A2kLohzhahLs7KEp8VKdfGfRpH2qWevBkmYHJAPDhZNuBF4g21BAt1vbGkXhEJRbUSKpec7GmbpwctV2ffcDLsw",
  "key12": "5wY7rd4WwSwQsRG64Z9P7QzNnGRj69P2AW1MZhqdfaoByecjSiFSRST4y7eKkU9KhQrP23JYpodSp7wHJpfDjS6J",
  "key13": "2Y8QgGLX2Vpnq1i129rosmZ1AhXbTevCXB8DG3X1DAWZS5qb2M88b42NYy4YjEVoz6xui2n4hP2kpzVE8MQ42hTf",
  "key14": "2G8Y9dWDPUytipsYbezVLujrBwjdvfaPB8GBcHLCQFAf6vkwkeZFSCCuaXpohFci6XYbkUEwLRgfeWkmB9jF6zK5",
  "key15": "3NFe7SRYhFcdD9DwoD6GoZ5MuUqR9HJ2Xqn68HM41hkyoLaSUTQ8CAbxNKRgfSWojYnWqoP8GahPRnCSPc3L848n",
  "key16": "5UCPH5xGDrNffqELade552sSDsZYKEjfXcqXnwmDASt3nin8GbRDdRMwWbQvZ3EQEbWqJUF47Aq79VePoCvg5M8g",
  "key17": "4bKqAy2DmxGnJCQ31R7MUHWtELkiU2fymchb3EdBnHmNPHWNy6NcNanVwSsdKU1rEeQkyuNgP9jQuepg3Fp3ZZMG",
  "key18": "2XtLmgigyMDU9wAgpVc8qovYjMjUCSNTrBXBAJUCCbjgTj7FxRRNaE975cUiJto3jgZM5FpDrdRD9VcD97iFSzDz",
  "key19": "2nUjFLE5mLiu7X6hDw7QRZsLNKitZpDbNbZVuPBkxPFtC7NttaSFWiBNkQ75Bt2eAWjaVaoGPFn3QVqRhR7VRaFJ",
  "key20": "3oYYySbSx8aqz54ZgQbyTqP72PJY1LwQyfzF8oJkmRectkMsngXKTzZhsDU2hjPFaFFSAT4zoGHqLEvSgsqwyiif",
  "key21": "5WCfJPNmjkv4FS5EnjJgxFVGk7SL7Znze9hBpHUqBVqGEsKZdzxHa2myLbnimCQ2MZCMo3cgZ3MFocCGCz7cx4Ck",
  "key22": "39n23g47LyVwaky7z47LZLJofb8SLjx548qdhu3cdzDAAJ5UJosuzQ88dqJ7cLqxfrdrhbXSijgFGBzm2nYK7w3o",
  "key23": "R3Ur3XSSQsbmZZh6fRePGyrpw1MkxemyR6c6vvRnExWqSbCFpgThWQcwQ2VYxVFfLLFgNqg9mZU67rcW3Ex8UF9",
  "key24": "3gJEzAMPhvwNtWGzYUd5RMyxB5E98yeiSWYdXPBbcWzui4bBtq3ssbyhk8SKqqsF86KNhSaZjm3U7nztaxPdgbhV",
  "key25": "5Uj7aaLvkTf1DfckT7QUsBtJg8UDQtAkyCvpNs66AACjeDeBmfx6a1qZDG4N4uM9tdKALDEwEnUpwYy6ci6Q8bW",
  "key26": "5pWwszsRDSPccoqDVb8CNYbG8Wp5bZ4CPAs2Rh2yb8HV7fq2mM5N2qgYxnAmcc4vGhh58eBEvTWYGXtH3zbB6hfm",
  "key27": "2Mti9QGGpKvyvbXK8Maq55DJdxe7uedb7Ubd2oDwf22dcmMtA6vZQ2HQYimzv3Qn5kgmEWDu7ycuMoeKYwoG81KQ",
  "key28": "4Yb2zipgvwRsbBuHJRsrhttDQu6gDpXZYm5r6Q2tzUQ6dtGfWuXHuRuREWxnp7EkBjpiAxP6KC5FvHG5n7YEy58j",
  "key29": "2MB4eShP8FT3G3zecaxiRk3pne4zb25PnGTZsi1Z3K2Qgia4MZr1N23HiRjdYp4DySvL6Zfrux1e9wDS4ZHPwpVk",
  "key30": "4gwjAmZA4zBY5MFxFTBdJRAopdGdMZJdGoc2UugxuMC1cHr5qktvXvUqVmwG2gxQUxzq68HeBSX7MaXFKLVtfKRe",
  "key31": "23fK4CM6yWStKXY5DcdUEa3saR6k9Y4kGMjTQaW4BZ85hSYQHuUuWdbhC7Rz1dukdD9r1iXwphAzCkndENhip93o",
  "key32": "5Cmp4oTGjXcrLye44TLWjhuWPTNJX1xy39ma7c2YBcduatQxq3gMHMNgAWtaHks17bVmAJTdvrFm87MjjQRQt2Rt",
  "key33": "Zqdcr3WemD6etKnM8g62SmDbFxAURkdjg1qirqop3cYRBFEjTjVs2eGsfqNisF7RBDUZVGN1i74Rt5gaB75FAqV",
  "key34": "2pRJpYrvuNPASY3VVyUWbsjw5aB3QN2eEgCWDxnLbHGi9WVtUQxcDC6gKCVWi5Lm5fNGEh4TsoAtGZQk6r6TuMAr",
  "key35": "5t589xxwqhBXJikMdgougx3MMTgNRibvYab69n5JQmujdsLhcmciZ3STDxQVPSbtySMcnQyAAVr65mDaXAXMsTDw",
  "key36": "4Ww7S5RAviEYMBh1ewYXhnd33k22AvTsMUj3ZxhFAziKDabT47zn2Nd3NW7zV3mbckUqvU3PKH6GjqyfkpHy59gD"
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
