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
    "5z2oT7q7pFai1pWcYwTJUfHg1cgbG5TVVCk7WQ5WrERaCPXrpdfcQqsP4PbyEDgqLNzqfunuzbTV9n6h4KvTXaMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3twmTKbcivWkFy8dk9aiwZEkw5Ne8MRC1r3syGxWPHFZiANcc8Z4ygp4f3WvUXhgWkZg2gkUnVLnds8Gt52j23Hh",
  "key1": "3NmSinMvLdemnnhvEHnbtR8tWBJ4HymGB55wZnoSFWvJKcT2L3qcbWKQKMNou3p9C4PHXfZTNVvDknDp1vkeyntv",
  "key2": "39CXtvsBL5SdjwSU5ESKLn72aM2qcpsbBZ24Eo58g5Lbm259Dq9pN2BbygB13spgaToRabow2863Jk7tTSHUgp7E",
  "key3": "93vpfF3yeD9fdkUKSaUJ6XaV9YC2jhqvYpNKkcDjNntqd1C7ggxFhqwMBHWAPEN3ZGaPgeak7hV8tZpC397M56p",
  "key4": "34eKoxD5EsDY5NvWJ6LbAcbVb5ubRdL7FZok7amUA4riafBcxDhs1VWrL9n8hb8riBEdJV3Rzr2MkMubWQtAEr9w",
  "key5": "2DmusLj7nn3dHk5VfmNybyRZAyqj3B4fnjJhPUEdD4GATGcvSxXkRfF6RT5LEbgp1gQUN51bsbhaYo47c5qx737w",
  "key6": "djHdStcNFgSMd4xVZMC16FPyR9ScXMHy8cwdjX9QdiR4PFkPzsVRhBRUhuTcsx7gwgFofwQoRvitrVzyoQFjkFx",
  "key7": "5VQLtcqubCGLXmoGqSZ98GB7AgmoDSzr2ubiZqMXzkxYutfEW6KZ2VuaXANU6xjFgzFWzUn6SZhhdXpXmaAfvsz5",
  "key8": "3dJYhBGAMAuXov4m4GwgPp2vRPrfFKyE6eyN76NDYom2qRbd2WS8hZCj2onVXyuMzUbvsWq24gXx5tGrpJGQR7kt",
  "key9": "5x6DyPdRkrbCzRP4sxDNdBGe46yPmKr7Xox23LxRnwdu1TNCjjHEQufNuB8ZtV4GJqWVKqBgDaVeYxSXGkKznJsY",
  "key10": "4PrFmMe1e2obz8fz2SCh9SoYsMT1FkLUZDK9LpNuTspms4qrmrD2VhaTnWCVudSNsGkQW9XPLBgyWGeL97fh86Qg",
  "key11": "oSLkaYXKQjomqGfQua6Wv4guK3MBPjh24cnMEFeMXBEPsrZ29G77BrNopd4xH6KrdD3f3CnRREfs3Zs59zu5b7y",
  "key12": "3UZGRx14586k1XecZqgEtPoRnBFvA1MmLVxr8v8sKPLo5CR6X29UzhocSjm34YENK7GLMeXNdF4AEtSUbqBE4hb8",
  "key13": "47G7hGnJpiYHpRrNLhynkwW3P5kkcdLpWeXTrBPQPvkZug6wA3DiiJHRsc14Q48YAGNYaqxhdqnBGNApmojnt4PG",
  "key14": "5SDKuLDLMw6314GBkxtQ6BFJNKfJKFwVX4iJZxt8HAza9fga3n1HHfh8trxSBeuZ7s4TEdfXtarfkBPfCdVpURs2",
  "key15": "4V1mTGBjBKXsHEE7wjhKLMgWYgYDVVt2W2JHJ1DXxFZ6anfiUHsiMgAQp8YU2vsbFZAbFotgYEuvgU6N5NiJvNPz",
  "key16": "3edwNbUUsAanvQMJev3pQLxoR18w3s6pL1xHwwwd7GyWfqesx5927k555TFeXCaGFqtMdLQHcWKCp8rn8iv6uPmr",
  "key17": "62rcYBWMQJPaQ21Rq4iPoLG4hycgKpuXgatnN7Y9J9fTxdyUAS15cJ9o9fZVtfyjjrra1Syq1orNAnfbrBGMobsg",
  "key18": "2rfmt8BNzQ8e3DxcWqfdjJ6vUN6w7pykeU7rSjieprGXUDGDSiS9JzLzEmhnAnubDL2q6VZBe56VYkGXocfVAk4D",
  "key19": "UwSjJyNzYfhMy1oFpbPTt6URajYbHCjb28xQ3D89XNR58b3jwBDNmkeYzSb2ifpABM4voxFxyY98dfm5StjyeV8",
  "key20": "ooDvGgEmosbRBNzKmeCgirAgsgyVgyMwucM4mSF8cb1Z734BJkSRGtWKa6BykocyjVkKqscex9LRQLr72BU5voE",
  "key21": "swdeoc4Hx93j81DJpVd3Vf11iexarJuaFnbiU2fcuecciNtudyGfubrHkv3u8RSwDorbWGdWyGajsvECMPdVxqh",
  "key22": "2bj4Wo7TNGzd44xxCbwBf9x4jFwWCMLxQkimboMggNXLFbw4QwGMCBukbDRVSuFdiQFVK1mQXRpuad918pnTaRDT",
  "key23": "3j6nrCq4neRHnVGrLt2gSiAxdnbexvL7TZHM7cCLLhFuUPYvz7C6XPVKq4bseRcnFahEzDAqGzCbuv7U6VaE2N2W",
  "key24": "4cdW8gWKfSWxBCPcvnVnALwvs7mtEJXvnmpFbaTELU8yjJrXYQWgUppjcGmvfTpfSBw6VH2D8xYFscimup6CBC8e",
  "key25": "312UdNqejd3Sq41ZfEr6Jc386FYhkUi5tmVrPuKB8UA3URN6CbZQKAw77f7vTTZmE1QivFYho7jMcm77MZ7v7MsG",
  "key26": "4FNZL6LGJbRtcjEMXARRbSuHRCsn8omjcuQnUowwzNHriga76CTTEE7YCQyLNTGSYa7YvM297UkhVKvtjtEyLxnH",
  "key27": "5x2YEWPM94ECK5RKFaKyPERY433ntfFza5n9RpoBwMeuMwMgSCs95YjyMUqrAs6oqULPuL5qqcLjjgspgLEkrN7v",
  "key28": "2AgyQARFttbPfjfXzPpskN7v7PiSPeYbAsWz4MhbmoSfmhB58aY13muKQGWGwHmPcmBM94Q9GqR66HinFzRLggqo",
  "key29": "27dqar5cRcsGqRQYGpGVsanWyKppiowHhn5xJvWtZpzFynSXYMGhbszFk5Lv2VTbDbzyK9WUosPWew9B5EuDZ5ch"
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
