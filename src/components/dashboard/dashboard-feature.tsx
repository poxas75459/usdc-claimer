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
    "owKgFsPLzFfSpcqx5kAu7TRGGggakmVNawo3VdDR5Hk5n7MeZhanFhW8zm6m8HQXX6MY8MTPU577DcjQdaBHqKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihrGFTJWuKV6pDXoif356wUEo9rnjPzQ8hyttcH5zr4hCtQ3i448tCtaSwheRjx66hZeTBePQrrHvHFrDHGoZev",
  "key1": "4EM7AiskFn7qrMotmddyN7CnVT89nNK6Mim5mVMaDrRAqqYfuoTp77JKjCUVpjTZ4aJFg1vwGxQ2rtSUeKmCyUa5",
  "key2": "wfQbfRoaBzw2Gx74iokb8H2NKrZvP6AHHB7ST1JRYYq98x3L8jJATKKFV6NFdgtsZoA6Hxa91gLUMSUXNJpoAgL",
  "key3": "4PMHXqCTSeHPDHwYMvYPbTqLWrnbyJd2NFRXZf2ftjPiuXfZ2XKiT2cJSCmt2J6AoepjwQJfdcMhJEpKZaRWUgin",
  "key4": "5Cge2bR6UYp81Hg1sB2KS8yAVqmV9YpEoBytf75uhVH3kiuZBrSswPrYGH1XBxmmj43cCvTrLEVuU97trGFdqrn2",
  "key5": "3DsuFcGWvY8VewB5ZWhLKVBqSt4FwFnUCkAF3VuPX7gGYKuo6huYqyudUSrP69tRcaN8HBZ1NgKhubKbVrpQ15L1",
  "key6": "3HxzZAme4KdRMkv1mw4n5v3AejCjaWp3pvTgNRf4D7i3NvQiXkoaxewVfAmYKBYusJvRr8DB1JMiemxnQep1UQaz",
  "key7": "43x7LGkzZPXFrhPoLhRVixqb9KtRLUxEfLjjSRDY8NNbdM7wgsWYHLf9BatppNaVatmwFJ4WGKBEJB8GTGAhB3p6",
  "key8": "DXjsWdqxsxX3zYkDeJWVi93esxiogLGgDkrp2HSTc5H9aLh7Y9yciKoCYYQ9QxCt2bFSaZM2D551d4HuTdPjAU1",
  "key9": "3w3E5TVQgjBVYBk64P9Dh5Q8NKtV41CodZs6BzarotgKDeFBvYpFDfhS4fhGfqujHtzQsgncmZdSycLJ8mceMfNs",
  "key10": "127wAcENY8jBQMcVRRj8dfj7TAitX7Rk8uApmF3mz3g8RN5GFygrJ7NEzCDqun27UAgoAGQR1GEgbLeJuVAzs13Z",
  "key11": "adK9PqTEUfmXgQ7n1vx91ufdx18j1dR9ewkcSURLUCgmhMSc2Ma8XZVByz8tCgXYyDjiNWYejrHyQwEnwS2Skya",
  "key12": "2kqhiaoVs9Gw6kKYeSaik8D4VzkN4HT2KGWvFiu4sVfR6m63LWukeAr2PzjJhKf7bCWniWFjgSrLfWQH12mV1axg",
  "key13": "3BHxbAQRxmiozJ9CSDqvKqHiaka7fsf9BhFeasNNfGze45xe4xi7DBVpA1PUxN3qWESFNVS3ywkBQTwLSrnXXbSg",
  "key14": "3igfp734G2N1zJHU9RRB4i6VCppSsViWy2Zbfqoi1gFBE8YEAZrf76vqodxYSYoPqf9RGxZRE1EbRhWP4i6zGq2U",
  "key15": "5dJDR1XhDSpVYqWaYbqVtrHQXuuMFypiARTxm9pr9VPS2HLbs2bkvTSxYiNigCBP6XVusLJsmzWQHJXmFS733VMu",
  "key16": "5pu3kuiyxwUycYqHW3gLJSFv99DDBztgT5pVoF7BXTb3vstpfB1nYXHECHgsVVrQ5gmeAfSzDAFk51ioVzNKxXTy",
  "key17": "2dcfR8Tt3kUJmMQ1L9VfEFcrdgJ1magTBcsbJdNP4otMaM9u6r5PhKPTxNLbMHSXCRa3GZTw3YdVzH7VBoqwfifF",
  "key18": "qQZiF15buSRGQfoGihC25NXqXsojRchGWbLaHt5gb6qvdcHiyFTLFZ5dfxyEUube3x6Te8LVfEYxm9qBCabgGQv",
  "key19": "HtSTCNYJNrMnNgQDZdNGK9DDPw5BE2mSgp2veNqG2qSwU2Wab5We8tACY4PGmqmaB3oonY5M89TuiaxuCtb6tPm",
  "key20": "3WEXxrTxkRn9qphokjS2yLNezogjWxrTLSYSKkL3xwjjkCdQvFcmeCC7N3MvANFA1YGhqSDYWJatvxzgLgWFLMKb",
  "key21": "2U23yecgVn77sDM6tXJBmFcB3us4JMPoYMMdCUtV3gYNzXS8zPu3KVvoDw2BgZ1gVedeLR9Y8JJqiFpqNJRcMRGs",
  "key22": "f2NLJkHkFfJ4c9QRjFn8FjiAkNN3qiH2ipvLWVVXo27jtyhEuHBCvLwFpRxRHLKpWkokPho84dTxVm9opUPKeBd",
  "key23": "3hEz9geiSn2nHd2uBeEhAsbzKMmVffvd2StduZLUUTS5ApAe76ifRfmFo6kmghRm41XvpKAVo6gbqaD4aZKrQ43x",
  "key24": "4yqLy6Lu6eZjgSA4v5iheKS5SfAjzG5RTgYwrmDCQLQVouUwaUwUvHYdPp9BERZvtdTpF7W37nxeNMSPDVLmXt6D",
  "key25": "575SXW6s5GaeaCCrys5kypuuddm8MxGsKz1VoBm58dx3mnj1kJh3nxENfMuQpmA6KgxQibaFEdZyN8BeEwyPrwTA",
  "key26": "4cv7AW9dY86jrLbqdvCNLUCSkgfF3MqsdX1MmDptzpg1KsdmNzaMVnygpkdnDtyBfXJMrFk2vRXRDEv4m4g5uCqi",
  "key27": "3b8ou3L6VdXQKR2wgpc4NwfNmvtyxqeV79o7SENMyTffkc73DmzPVWtT9f9QQXE1Ltqaw65GFe6jfvwA4NFp3reF",
  "key28": "5UULhnYu7VRQ21nNwVrm2nD3fb7gJav2FDdGwLubUiaorpn4cpnQSpC91Q5RNrvYDVAyk9ptpAKDTpEXKzJqSJkd",
  "key29": "5hF2Si3dSaWghjDxY9r6GJvw2Jps4KFoECbbShxCMjqvLqgv445NZpHEq4si6bvYTJyDVvP7AXzoyNDoKdjiRB2D",
  "key30": "3nnx9AZBpakLRme2jg2q9CtxYXbmXBAvvDRojeC4fYTjqmjdCus5SAPztskM5DALHhU5ac3EPJXDLEKFSp9DCshS",
  "key31": "2TxwjUT1P52tZSnkzSxLo4NLLAqy4YRMA1hEpx7zyFZYKcE3FpaRug13kDicvLp691SwtQPeVcZeKqJaCcfj35MJ",
  "key32": "4uki8GXKPW5uM4kynb4XVJQpMsovq5QhPNdK8c6bXEVBQnJdaR8PXSX8DdS95PTMxgYsvzjj5cn9d4F7DxqbUw8s",
  "key33": "2BvKJ9n2FRqHpbAqKhTt3YPRh1hp27QQz412eMHjVP2zo1auxahK3U2ktYoRneTt7ahCUCHADx38qTEfdi1pT6AT",
  "key34": "2tYTr8LMmBuTavCMua6matSacRXKTtcm3TEY5idtbKAqTDXSVuyx3kq3YT1iznqKGAwPwaHTT2ou6duPMrqhtZTu",
  "key35": "3xytKiobd8dBpRBzjzUxM5tiirV79SjJQXnh4VfSeturbyy3fhqFNKxGpHVSHcMHJr1mgcTiJ8dEQGC7MZ2JYYEq",
  "key36": "4AXMBoen9XQP1c8Kmxus2KqLjQ9esgST1wbHMZjMV7vzDQcrh56C5Quiy1o9DDyrtMwcWMxBkRFHqcS6jg5PVHLp",
  "key37": "3yg474Sb4wmkJPxcpw4cwBYp4jQdjin1yZqzYEAdQ53BCWMYfwxNk7HpNEN1Xs5MfEnn79uHeutwL69bV2RTzDQ7"
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
