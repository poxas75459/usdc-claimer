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
    "3MsiZ51zksWg7zJhwN8tRx4anY3ZmJL6CCFVdqGT7n3abX6XoAn98kCgbikWsinNdy8FmLVAwmWMmHEEPsxx1Cw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQyq17dgmdxgwiHVv8FEHYgxXPto2dfYsn21Bmvic6Qi7h3yAsctrgW7NzDqznwm4EqkCCY9yzn79hj7XHGCA8V",
  "key1": "SkPRkoeFABemcsuEG5VLcCAD4CkTVCDycEEUzfPkQ5NMa6Vj57fK5qGr9igv6rAjjX9LoLb3VcX6gN9S3iVifvy",
  "key2": "3zp5VwBdjXZhKtBHrijcqWpZcuHDtzYizNcEJVprfNmoNcfs5aHhUZNwLTfMA38ckhEVLsBwDU23DvYBTL2HuhHt",
  "key3": "447J9ugWoKG74R9nqdp8jxG2cCBzjkbU9ddBGbstWVicHiTfsU2kgEqkEhzjGwcuDfAPgm7wLPKsp93gtmzKPqzX",
  "key4": "3JiWdVAqozZzsYMrAb4v1V26pMEqtNKgpEAV95PfsJdeQ7GX9VqCxFihbbb1wb2PQdKfFT9Adhsbtc48an23kB8r",
  "key5": "mETxCG81GdMHgm6ipZwMVJ7WMidkFQBW6PmVC2rsCeToj8niiw777RvZBngZJew9fJUFi25SH4j2SUzRHAHqqme",
  "key6": "2yNJGL8jeZz2ZqtLy9dVijUTLhn4PcQ3QE2eHU8Q5tAB3SaFKJGYYTz3p89b9u4N2ikp3oWUWQhwa16w3F6S2srf",
  "key7": "RZaXTXnh2kr21CQQifJAswWweqsVnjVJw54PKcNyntikp119dqWDeEMYkv2am1AU9FJms9LuguPKFAPNEp2hvyG",
  "key8": "GAXGt7MKYrWE7wGcaNn9Lhw2dqarPHfVxyPu6b1cbzKQLNjq9wCSm7Cdp4ACauQycS878heRPNBPYamP2AWcCzT",
  "key9": "5zGJRLt7cmbb9hReSJJZStMC5MYHgK8MDp2Wjo2DYvpeKvpzer8n1mdaDnap8ZCtMjg2B1co6efCQpzuG2Vo1rbJ",
  "key10": "3iLddPde6icvtUbAy2Jev3eNbNfH4du62ZZ22kdwsuREeMe1cHuvJMGLmjuryiBJfmVgcv7nFt9sNeF2rEdp52C6",
  "key11": "4AmfV3wVGDZZ3wSeJniFQeP4WotncMpuZTbidzGQdNph4PaEMyDe9Xt6twfgk3Ar8tGUDApn7D7xWx9gsfJc84y9",
  "key12": "BF2zrLDCzKswSH3BcARoRKve6dJA5sGvETiw3W6jX8tcBhGJvN9wDZ68regi1kByrbGVC6euxtv5YZSe9ubXs4N",
  "key13": "e2VZWRLvh7V3tHTdxkrkHwRWfumUXLAw6DRJknaNqVMCccVhyCcUn4hFndad9QUsdWkSNhYRjb3GKvEy6eqziuo",
  "key14": "4ZagWc5ggK1KXusfUHMUQWUTHB4oPXbUzShHsv6v4yShU4kxkVurrQEpckUJafxtAdFipZ8yxwqN3t5Cr6K2V7XQ",
  "key15": "21GECBGBo8BbjkUiCeDqw3KnBNP73Xvt4vbFLAm4RYwrVNFNtTvzp5i3SgEGz7UCLimkAHc2HfbP7ubkD7KA1M9U",
  "key16": "7RKvhexD2NPkuYCS2m19kiBEsV9fk9vDm11in5UCkBGHuEtGgE4c8Kc5DcsKckyNeBSrLCvGeRRXp1WgUpxGC9S",
  "key17": "vrDzqy5McpVB5ZkYPtHroGokpUpDvCuqMCRS4drJ5tMjTbANgjbCEEKzSJvvqgn6GM1UanoL4KfPw1aAUSNYYmW",
  "key18": "4jpGz9rbTvFPnepNxpytFJz4ghEbfTivDZcyvurQtUahkLsB6MwsjegHR6FwWYytETjtnZ8fFt2Wn9JThywEvXVD",
  "key19": "2LHM5mtaTDkXYUV1SKXLTKZavk3mYg7pZzwGFNdeQJHwzKEYfPghZiTANMah7Fdca1tViGgQUg5m5yvJ3HLX4anP",
  "key20": "63B2S6jUYEpRu5fgWJCjKHDpnVUMtb5tjBoQaGsgNcxUs3GAPxBK1K8M3KxtZEGri4pxGMXkteGVBK2cZB5G1RC7",
  "key21": "4VAF4yRqgoHUSxky7i5y4H6ubmqtnh6uScAU2YQPLVXSMEPYf8UqvegpDFqkdQ3Gr8f4yTTjvAkhr471jMMjSmwR",
  "key22": "4GtHTQJGBixHV93vkkaFhmCVJ34Qo4ANvD4ZrwErjAtqBMWTtA2g9eWmwMhWZeHMc3DXXwZHX7axWMPjjdTvkCWC",
  "key23": "2giPe6moHHvyTYJqd1kZFJXa2VpxUjDkFfAnhmuC5LYJBi4NMkVwBQraLMS39AM5uTLSURzfovhWDMq62XBdVYcz",
  "key24": "3DMBS3jJxcLVcpkKW58ueqryTZMNAB7SqUFwDU7dLsiWM3Gr7gDq3y98MMxoo2zBtnsRNmVBwqjU9SuLUg2BjoJE",
  "key25": "4kseioxHPxozLerYwmbQJYDaz2SyaPyz8pLfufUL5P1FKwyM1PvC7NDX3hws5EXqKbUUadVzR8A5PABE8V58Ljfx",
  "key26": "4q9HEUGqqduSvFfNF6p21d7LMZEVwshTEKrfaQWAJqP9ZFbJaZq6gjEntCsWZn21ES9XYxhPWRN9L3ZgBM1GX1Xw",
  "key27": "3e8yMfw2iLSkDXuqw9GYxxnj8gwWpWFojMhgoJE22B1P7AjtE16Nt5sy3Sc2ft8Ngnri8hNLHuWn5wa3xLD21ZPV",
  "key28": "4UnmXZe1EhCobBfvFb54cvFvJuk6t4h37eFdmLj8yG6o4q8ZNE4ytpauc5mAj5bygpnjUe5MwbxP3VHMui59KPD9",
  "key29": "328cycvtGbMP6cidM1jzKkWxMRqaXkYCXnNd5HS5Y1EDfEbQ2GUkeHB5MnkvG9z1fcyKtSEGdwtUqazbUJGLsfaq",
  "key30": "55FZt14MhohEchLvC6itMRUr6enexfnsPXUEq2aRqMqByLeVzeWAPi7KHzQJebpgFfXBRKQeUMquU4FXH16umtWJ",
  "key31": "2QsQsQEW4dZBB2uDpVmLpyNUoTQZVh71QXfuhLKyoz9he4CYnjwp8LDVuBJidg1wVtXNH6v6AoCVQoBKZhcJtTU7",
  "key32": "4woB8GF7k6g1GprGVn3ASh3MP5xnYhWXACV6PARAeyUzkAXP9hUdJqPFCEfnu6DHrAnVmDc7xpFTjP46rF4zQHvR",
  "key33": "2Y3Bn3Na1GeMJX9NCjZ5cdZadewCCBxHmWWRtrS2fCRmyL8G9zfcECbdrLQQ2cfGpK7MYqtUtn1HYQ3msKgGk9vs"
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
