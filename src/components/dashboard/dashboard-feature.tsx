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
    "4y2rbRuDxkuEexBZzZ1cLcY36ZKAhTgBf6X82BguQqG2KxbFGFX63mYkgUXe31mncPNkbkfNPYyymq7JVrumRFDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GYenhxHjnxtvz75mHen6zGf6nudWJBFEfs4otjZAgYAoE3WD2YFEZW64egqhswwEbUVyThPjuEkAAcLwB2F8C3q",
  "key1": "49Mm4qgs47tafBPzhaTei2barz8A69wF3gP4Hpi8kw6Fke52BVYrN5A9e1iGvQ19cEtqKsNtLVg1fLghhti5L5Tn",
  "key2": "2peKB3g2HgcEqecQkDpPj3WPMB6NWQ8ag7ZCHcccjDQfxyNYTk5UR4pxBf4pp51xmpiavSXngmexZ9JyeqGgED5j",
  "key3": "477CZKSHtMr3vXUX728kkWreThiVxSFzwUSfR1zqtvCrYuVQJMue9mBYgsnbXSLTtR1mnYf1R5EsN6bTjuveyGnP",
  "key4": "54AEyEwRVo1DaahfNqLaEndDee5rSkU7UfAUWBaBzPB8AKnaq1g16uypC7xphJDbbWNN6U4EipG8CYFpHEW4wE3Q",
  "key5": "4cHX8wBeVDD8GUewJsiD6GKsK7iUktx9jftJjW3cyk15JiP1cJtSNHLn8HJwki3oJeFX2hW656W9D3uNjynsRJK7",
  "key6": "2kVWBpZB4iK2qP1Bm4wiZMRbhx7rjja6M1Lc7D8bJSMXm6e6Bhr9EJJwwruFwgsprjRr4CYJ6XuphiCoFxLZvaBe",
  "key7": "3Yc9ksiXgnVqEYS6twudzJ6MG9ihWTDwSSETtGxM9gZ6CxtWbxag9o44oryyXPt1YNuWbSbBoSNFKG3VLv34tHeE",
  "key8": "5XBHE75DSkYREe4hxSUGkdmNLJteCFooWeDAEFMY9cuwo5ft9i33U68W7GJDbr8Xw7dF14b9JxBoPidmsQuetR9W",
  "key9": "32T8iUypRW26ytxjL7EQJgKVpztRL5sKwQJkRrYYxAtSkeRSFSCfMU9fN3Qbg6gdkFzGzktE7kCBua4zfqM6nopD",
  "key10": "6cgfyatgX1VxmVF7w6RZLywWqw4UbFswj8FY4g9M5Lf5VYnsRWy19hjGwzrZhvihjo2jJaVrVVQqc2bfZzZwaz5",
  "key11": "5XLSVmpKnUW5aFVKkHMQTGNiP4CZictJp8rkJh78K5n7kvWUmQLW4fyxabJVSzdzn1Km31HhyZJbcrBbg9uENdnv",
  "key12": "41J3kxSXaKsPZLQwLsLcEpC9t4f72U5FJ8oGepKxtZM6pfmCujFAGbFrJxYCHKpreqVSkrW4bnZjaai7jeUFWjQH",
  "key13": "52W6WT1WredzixWwrPZL6fmK6vJG2eXdD9ztqENnPM1MHR7PC7ykujUARRKyeEmz9qpiaaeKmVuyv6CTunvLDnr2",
  "key14": "5bsDQkvfff6U1UuMSp4onQMALk1MXs8s7o839XuuWW4bWr5UhLKzoeFehryq8zkZTq99PzR8pFRkvVksbD1KtEdU",
  "key15": "CNzbPKUXd6Ftrse3HvyUSVidXjozdFYj6jiymPNrmmmkNoeYoQXg7cuSw4sH1P1QMTTpcpX29AZFrNpdtgY8ZNY",
  "key16": "iBXZDwBMRr2mYs2LLRyfwEAUCJwQoRSjRoEeUwxbGwiwEApiZqoMieib3Wg6JamkjouKLAZUgfia9mU5LaoYUmG",
  "key17": "122SzVnaNoTWEZM81RkP4vbe8JmScTzWirDdt4gRF8v9bVaroVqkihnpRZd8t9VxKf7v8qtNha2N1ZZERXyiymfU",
  "key18": "Dz77fFUK4Lf1QYUVdajcT7yyWLu6GppjfEhHqXJAgEWdMgTid51xDZqpdAseFB94RBwD4dV39jrweiERNkut2Mh",
  "key19": "4MgPX4UYHaJToR1MH4ir4cAwKsp55NfU1AXxFazLVCYnGFs91ZLBQTgCRwVvPwqhLNhVCfzNDjyLp7HomLUXEFgv",
  "key20": "5fE3v25vjphL61cB56F89wTwdAi3cj6NmHw5rFt6QTdZmBySeEdL9WRnrfLv3SQre4UuiB9sLCk6jNRkWQwdrcrt",
  "key21": "5CeVt6njfthWVfvuQJM3RYxXy1mDbx1bBT6f6SW1u5ofVxqXZSquWeBk38SFrW8LdAHSzkNtEb2rapcK7tN3imDJ",
  "key22": "2EV3ENjYbnyewGkoYuvuYYJ4PCKgMjbEDDbBFyCM237bp5piHWtReKP5pZcnZTDncXbWUm6MCDHRFSBGTspuKCqH",
  "key23": "2xaJBnFxoUWDFVGh27dLLgdZnG4PrZqn61rBPrQswjXVqDuUco5xngwRXipJXAWbeifiD2SgZFRSqjfFmwh9WR73",
  "key24": "62PLQQZoTmbyvEXZHYUApiiScyvVJhnEc713eThQdTghqpiyGghCrYwy9AtF2efAdyiutma9kyrsWbJ6A9BRYDrp",
  "key25": "4S9yGMwb5SR8nZd4v8eHQeDdAUB1RzSj86VGxCDVbhzESQXqBWwGEJJ8wJmZRuGU8RsUEPD646PNXh8guCrGUHN2",
  "key26": "2ZrwDWuDtAvUC25uH38Yef9zFLeaom4Q819fJTiu4Qx8PBYopWSDwoRcs7MSh1mWjuaxfrNLg7Qe7xUS2ss7Gxne",
  "key27": "27UwvCTso7tkRkdcNPRKzYUNDYPQSpJW2zmDSYdHPik19gvz6Lv3dTG4S8Qfd3WRQcaxkMoW6b7JWn53wfPKuJ94",
  "key28": "2D4pGqvyd7pgj61zKGM3A5udwSJTrSTHi3kXgDMM5YAUYx9gjPmWbVtfP2P5PDsecsS3FAud5Tnk4XuJBQM32qPi",
  "key29": "5ob7YsKxPEJimtTN9RKPHareMgKKtoLPVMX7T4HkBpWktD8urHm8hLUHg2egMG5Ztpgsf32SU5fCPxaSNppr36gj",
  "key30": "4E8WBuX6X2HHytZN46Gec1wszF9FArWfqDmk1TEaorgZffrpmL9M4W8MmsJEBeifieiJAfNoe6h9skmWzAXQQF43",
  "key31": "2sK66SKnKMC5nUugnKDLZDtGYTsQ6djWt9KJYTpAeXD4vwZDksgWkyGzNbThVCFSMAZurTMVeqCZnQnUZPakuJ8N",
  "key32": "BzmSGQ9VjLkW3bK6CnXFAQTq3Std8K72vQqqLC6SFBescWeGbGfzaJeWgppeLKRHcRUsVRTXUmgW41FmnfySbDX",
  "key33": "psfGoEeM6QPRc6K5R5wJH9zX4T69RGJjyT3gb3TrMWNipdGb9MFfiyP9ZiGu3RuBRFoZhJbtcDdX6bV647QETrJ"
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
