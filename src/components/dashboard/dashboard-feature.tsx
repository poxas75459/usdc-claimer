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
    "3CF7Po1dgbeqCyRk9cyLCsRnyq7AjRPySRnGarHYXERcfdtQvF9pSicXyDkuqzZ1i4zePgbwYbUy5RMDwy5teGKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLMQyTkkGkfYH2gZv5jypLc8o7WW8fpAdsy8Tzycdp1YK4fhhiw8rWYr8CssvpnsWPP2Lbq3QNxvW7YJyX2HtsA",
  "key1": "22o3LDGHf29cE3NuJQtkDby19UuC7FYcvSi2q11Ypp1CU49SeZrgdb2y6ciLt2uLMrKSt294RujihXJuZrsuASSs",
  "key2": "4YYHcSskn9ZYftCTSFebLtU6QJbKJb8Bwx5W1o9w48sd2jNfCxbrGesfaijSZn4g5MqpNbEvka16t6wC3MiFKn51",
  "key3": "2dRBhaLFQgSG9QwDhy7EBLfKdbYXjVqDYQfm5A2rBZM3hGRDqPGw5QfCGGbwRKS9q7nBX5JbQfDEBSzN67ABu68T",
  "key4": "oNt7n3Nca4PXBrWKhXktTZQhgEDFPSvGa1g1h6Qw18TWdpcNnpbbcjfDd39iC6h8EQsew6id3vr5EhgpLLMVhFu",
  "key5": "5foLYAxMm5s3hYbAxjb7V1Vuds7mQ8iZZwgWHDFNrMEAjC24kdouMMFSxApY6EuhzXi6KsvdziGGhYcgkkpjtuJq",
  "key6": "25s2LEfzcAQd9J69oA7vfJjEDKge8ZNy1o67BJaiWWMtbKHwtvWQtAQwboU9xr8EgsobiffD7cpm2ZcgisrquNam",
  "key7": "2Q4CrUtcnYQPYSNQ4ivrXRhkMx79kytW1ehdTiyDSEdLJRjrBMmWUvxUM5wt2s2sHNrzw11bd5Zv879feMcjVswt",
  "key8": "5FGiL9nA8amq4jzkRsrxGrRJ3Hio9ThtFJ7NLZ36DHc3XTvvCoYqqsaMCSQD83BBbJ8T8P5HenHTu1NWoSaaotu1",
  "key9": "5GgprbttMGAHpN3wYPuZ18z2ptWbYoBHcHwzfkXg8v4WZx2aWvtP6Xzq2X3udr7sgTqy1kntwuXQ8hFqfgeTURtC",
  "key10": "5mcoqgwEmPnKK5MHwxAtNvqAsxMB9oXoFgTt8H2TcyCn6ckM1HDqRTzc2UQuf15dhcJcbahvmZBSVbNDatzyi9PS",
  "key11": "2gcaZEPpAcugVPSV8nfCPVF1cKhNmPmcinh3PX5iYRtt6C3aKn671cyBXqF9WzqG6c8KR46Fdk4QnexRJSfW1wEa",
  "key12": "EbktyoyiwSp6iaTJwc8ayH8QkGkK5JR9x3j1sH7Uvg746Zxd4toh8AVdFWpXkKUvX6JjzvcqJv27sdERj2hMvRA",
  "key13": "qkx79XQo9X67wrK69L4n2mEReKwEjWqYhYTwRyrpmTS5yBFJ37aK55P2nGCqAN7iRyP9XeTwQmVbb6iLMaCUV7J",
  "key14": "5QYzHrRiaD3Jqp91ZTZJzVnvrQJf9ejc35hHRQ9Ff13N47pch4wCMjrRKBrnsBoKT3knuCR9ZAABT35jM2yvXuid",
  "key15": "3d5ShWqJ2TxA4xKGQMCykTJqNmobYL9e7SbWajqC9bxTkv69MBjUC7RStbcwkWf2Nkr9TWXtaYa5byGpre9ditoC",
  "key16": "5gka3hLqWZBqxxnKNVx7ZTmwvG7P2EhGj5UJcXG6tcDmGM2f2Y4DmQdYWVTwCeKy5SrGd4QVu6PKFCHUMyh55yJP",
  "key17": "4mjQU3m8amWL8j8oDyYpuAj2ZgcpYzYFAnCp2NUSgd46WNC2CFryVaafozcPmrwwfomJWQx1bmbiPhyXVrriMhaR",
  "key18": "4tK6khFj1Esd6A1tGWpcZvP1Wnn6MT5yJ3vvD4iZj9ZP7xGzL5PWFqPPX8FAqbHTECekNj8Ey6EsZVeXMLQWA2Cv",
  "key19": "5uDwCKNopVA4LRyEcirDy7DzWDLBfhFtfBQMLxgSunNNmD9wHPkv87AACHt6kWQafuVJUedQT32friB8PoWqZ5Ji",
  "key20": "2XYoxDaEvVk21tc5kHHGYdKu6zR4TRFwLJS7GoLmEJtV38kjXRAHQ9UHd21qpFCHXahofVBSyk7LH73jj9ms89QY",
  "key21": "gKf8jMpYcMGv2NY4uGhqrrmRTyYQJVvHXFVpEJsWcbjfNQ6oXGEkefn95CWqRK9VDqFcfdrMnugyuhXRfvk1M43",
  "key22": "2yKiutZqCWHM29nkVehftAoxkFGAvmRXpscKkAs8H6vV4Lw9Fr3KVEmbYDeCttzTxWNNRPVRTwukmbX3yniYrCHF",
  "key23": "yQLBJf6opccCtAyc5HtnrDLytDnEyfLb7b5uxhyPybEwyyd7SaRuwzyjZd2yaj8AGb3HkRM9n9nC1EGsYme76uu",
  "key24": "5r3KpruTkGimcwWFYY8waXRaA64m7QT3R4SDUdiXkj3uWZEBGeLhDrGnRhmjTSdYvZxYVkGEkf2cdqk1NnnP8nJA",
  "key25": "2udgkeJSSU7MhvEC7QCcjc3povCzkX8z5fKq4cw1nFi2HfPmdWBjwfTZCHW5KSQEUKpBzg4VgFpfrJGAHctdUwDR",
  "key26": "3x9XSw6qBr4RDHS3hDQoBdKTy1e9jNVQN8CsiwbAV622Ts6F6oPkCpzva4qNgL6pkdRqdCrsW3KtsRPKuFFZdXj6",
  "key27": "3nJGdPPuXtjwDhJDQidTKVjJNMuVqJBmqqAvrCndJPooevASPN5kM429r8HTrYwQMkZzscDnGRzm7Mvmv9Wc574p"
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
