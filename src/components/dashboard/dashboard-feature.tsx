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
    "4V9e96b92pyG7mVVNue4EfKDZYjuCsFgdVAKT57EAYpdZp6ib8A42Hff6dpriFV4D412gYWr3cuLLc3BBGHY8ru1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfpw4nz4DDwrSG24nFcj8Xs7nHsQ75uLGu3dWxWCoGgEByQTAvQrLHGQx4u8FbZsRPVbbEokCLVGck3dmXZUYPF",
  "key1": "2SqkEffqAfJWH5hGyNuWhNAitvv4vBPgCe16sCUCU2ZTQnTMRCULdZunD1BZeRu3d3SfoiQXkTLAzLsTpj98SoWG",
  "key2": "39uVSpVcTdZs5LDAwuifya2A3MQEaERCctVmpkrtZX7QrVg6aLoAzoXXcwx3HupDFiAXq1yM8Q2nk3tvPgqN46dh",
  "key3": "2kr9sAJCz9pz4YtQ1gYHtS66pWQ8utHCG8SFU4DZhMEkWNC2r1NhbiaD3WrA6JyQ3ACdEHT3xQqgnuej8weL6q73",
  "key4": "4KYijaef367g35apLudkpbwgmpJHPNrgJxKMRq8fDVxkjpAhSrdGZzWNusSwq3Btbtb1Lre646spMn8zotP2QkRD",
  "key5": "5GFxg7wrqXyFM6v1XuSY8HpjLB497PaZaYtnxJ2iSk8ybjahDsmBj6GCUgPhqTPKw6snLURbPAcGmWqzy9aikSrW",
  "key6": "62WpVuZ5JjW7s2JPtbr9tFBTyoBCSrJmKpDJS76homKJAVw3gnA5sNwAatCRmfpTVYLUycjXKXXfjPdrX2fG3KRn",
  "key7": "2YXEUjop4ZqxJegcg6Wo2DgWTDSymsCjd4abynqN5uBUi9c973NNRQZmdCDqBNyD56j2c5fwK4fnvGACGRF8yCuN",
  "key8": "4sVizfg2uAXz6impXAjDYAMPzK9sdND37gLj1X2Vh25QhFuPGh7Jjj4hgPD4cdKBzWMrSJtSgtfTugUvMozEqANb",
  "key9": "ZwDXHGUCahzz7wEBy5pbFvweHtpAi547pc2a9XmB4LECRihDzwo2NKdkg88ruCpq5EahAfAhRBKhrKzRvJYh7mP",
  "key10": "WnQVgvP8v9gWJiNMscjEMHipr1qrB6LGeUnT2hpzbuFGLC1kiYvHnhCn6w6hdeShoMsrYWaaCWgdXrBD6WcbHX1",
  "key11": "3zwXr6cbHJbWBajUwzFkPpyy4NigWBuKfHmyajRTAcRrvL6rnCN6FiFZsD48yBw5aJqQgARaMxycGgLiV9qR4XbC",
  "key12": "xGUm1Uw9beKq57CU7suJEEmiHLYC9d736rezaR9ucU4kGPvqatV6GwjGn9Ei2UcewwsfBdGpNiPZArbrCD3eVT7",
  "key13": "RCk5gehDRbQ7Ta4LQf1LyLQJFmjaRJVUHyVSGNLQZAjjwBPvTmtcPuMZg8JGPnw7o9F6XQXyqMUS8Uh863T4zop",
  "key14": "4LueduNCL4ZKJsPA9Dmd9nkq6gaqodtsDxjHdVEtiwyPf1usqK3DHUUEz6uVzSycFLd3guZTs4L8rtWJhQiKx8gY",
  "key15": "5USNXMAcmmGXVuN5Eg4Xm9TcTyu8R96x3N116kGDxqRGNVeph6QJB4WBgftJAoRkAZ4JSiYUFfyDgKH8Dxgs3BF",
  "key16": "ZuzEKhbUNgZC9KMauv4XYpKTr31DUtzEKw1FYGh9G2ZGt71XY7wBXB9tuRqUDsXcc1w5467uDUieADav2Lmymbp",
  "key17": "2NCsbP4bc1muQFXFPDLDnjTKuz7ZTEEbyn7vNZx7NjkNC2djGg1pHFF2M8A16LZ3gk9urpHFBwhUyrCEmsaoTCS8",
  "key18": "3n2WJ9MLUujSfjuuzPR11Dae3MQwQXeLw3zcx2p8iCsQJFXePkCgffBT93JwuKEHnLhxgRhsr1riN4in9hKSKjet",
  "key19": "3AY1murTWZZj7pxoYLWXkNMSDyZdjxhYo4LQxfGMu1NkcPNLbXEKhp8DqRAm4pXokzoxRVLuvAEhgpbBB4YjMEdQ",
  "key20": "3bjd1qumcdXj2Ld5Xhag13tZAj2AXfwxrCB93LdTfRCLovKkAeU8sfXrh3vE8GaLkFvweQ8Q25AvZepJM8ojM6HJ",
  "key21": "25iPrXiLiaws1MazL7Sr65BrWS7hY4ZGhqdLaGzk4f42qAVmt8DkAR9MLrYC612GKTzvFMsUkbSx17YMAPgKdf92",
  "key22": "5XtrCsTR4rroon1Uduu6dWNWEBNEsUNm7HdfiQz4XAETJAycbDaKJJ6UerCXwPXFxm2PHMUs9rCLZwJZVVK11yY5",
  "key23": "3hDUoEAXVsiA5zDieB4BD41EcQUgJmDjvqCDGgmuG1GPo4cGbVVJbYzNRjpQpT6G9SfPGhpyzCYFu1tE49H6h9nw",
  "key24": "3ErRnPysccULhgYrTqNTyqR47MRUJTtAJwyYAu7aG2s3o2peGb2jggYb4SG8AFnQVwvgm6csL3vNoebwyx1WFhqg",
  "key25": "2i5GLin1Jp6QoQEgAuze3DBzYGc9snMgapDBUqDaQBVJ5rvHdTWkBMDWniVpwcLt95oJCTXHz1AV3MLzQuiWmmXf",
  "key26": "p3W8RTgCqoCd13FP9V69BxY8WBLPhjsGaPqrogz9fPXZ56Bso7rJrFVmxnznU2R5B4rtikEdJV6dWQZwGSpbcPY",
  "key27": "5GsABXnyTFA738AZUZVa4Q8BVCqhEjMf3txMpTJk9Jq2U4wqMY73XsU3Ejr9CNEiMqXPTDa8p7FDfqCbAB8teTZB"
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
