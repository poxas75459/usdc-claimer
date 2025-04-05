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
    "3aTURMh1MxviCcyV3NzSsXBW8SMkcjuT1MJrdz4nMnNhsQRQAz7sWSkE5pJetJ3MfWyZ23KaDGwAJdTKDjvnCxs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V79rQZLbZiQUAH1vNZGZ22qQHAkpoPwz6iay2nmA4qUQXddCUhipnWxzRja3WJeXdDcgPnTmjgtgyFk6zCftewx",
  "key1": "229KFjSKnYQpx99Mv29SLwhTxe4nd1PGE57szhXB4JH33bjFqsjTmtxmfKxuTYeE77H4a4AxKVeEMgX2NR9LoRvT",
  "key2": "5wGmBBXz7aoSnzDMGN7VmREVvpcoDrkdjnCxoiUkc8Ex5iZJaNqDDK1Pqud8TwJUC7Px9mvvzXDTP5AuoicUgdZq",
  "key3": "3FSdGyUQHvMAYZRsjhiiSKMwxs4rVoXPLB4CkvxxvyAhVdma1L3pQaQ6NBkQ8b7S46AiwfDeNbzNKiPuxn1kUE4N",
  "key4": "sTMWAZrxxSXXLE2neMD8VFFmGYpS3SL9yjXMTsWjsMUS6YRepuSfgKtX6eqfro9A54AH6pXvfiVHoCynrmmiQJE",
  "key5": "5H2YcLapH4rueEyw62v89dQwRMBzAhLRGWKkwaMgJRzdznM8Z5WMMBGn1EjGJJn4pdjeenvwwu7WFb19cpRRUQA4",
  "key6": "2Y8XaAE6MiJeFGwLaK3H9adSZrBrtmC3cgDAWPs6jfq3E9YD2VxhYFAzveKgXvLmoyh7uhpe8wS9og6ZHKwbNqM8",
  "key7": "dxLQXkW5ZvJdBuVUYSRJPXKftDn3fwNSVKTkNTA9QntjQpkT1gHYBhqbzD3yDnpdTQsGDRSJP7h2en6yi7CRW6k",
  "key8": "3yKVvfmeoXZmKnCt7bvTHYrpDSpWXETvBR7DCngv64WCgJpQsRqRTpZv2P4G9vNBVuKsaAfnrs72BsxkdWCQZYf8",
  "key9": "4CG6AK96Z2djR14CLrjs4TB6tMuRnjDQvE9H6uYqoN5FytPpbBeTisYxx8ZU4J3qZn5q7iwCMGZr8TR39BRbRLd3",
  "key10": "3upumv7k3icW9vdTBfPzX9J8pxWkoeMZgJnWZu3Xd161WsAicPzFczC7AuHgMb63ozATAtLRCd5Vs6padZ3Vb7cF",
  "key11": "GMRwYQwVpUQogwXWYWCNRYZ8Aa17ExoXqkFWcnmQkoW3Gmtu17jwbxrjLhcfgYVB5ThqL7chnoWjYio6ebi84QK",
  "key12": "3uS4txxMHmRd5mG3wc1rVW8SEGV7mMp5pGYwWnV1dzSbGkmopgdgAgxRRMW4ZzrReeVkwkk6qUFNDfam1PV7wpwT",
  "key13": "4srVRJSi5b5VpKJc2WMSH4ohbhpZoFD4ADozBZfPMV7ReCxPt4uH2XuHFBLuGJtuHrdwcxi1z5py3HGziQZaQRhu",
  "key14": "3Dqm9qYfF9TST3NcrrYGkf1hTEWWGvfJVp6mG8ds1a4Gqr35bvuT1gohj4kgZsQWD6tQaJccXCfE3knwuA3jnBC",
  "key15": "4zZSYJG9r2Djcftwx4Jq2Hfh5fg6MMZ7kKXu8tMvZsECUymMxcbTHxXW8it6gd1YXwJuZxNTkdQT8xLXw6vDr4sc",
  "key16": "4L5wenaqVmSyZnSrj6U56UJJ3x3kceX3d77sT3Zt3TMgPNcKHJFniPabs8zmvTBcetGvnVDcj6ut8dpBAz2iTiTK",
  "key17": "67ZDn9vmWiv1WEaTFxWJmB4U2soRroQVFuoXBrchV1D77HWqt5Nt43GBiokUaNZPxYwbftpmKpsfA1ncoPbJYfVA",
  "key18": "5bmnpmf4eBuTtr6uUksuiTkEnYMNhfLk7PW4NDCvVc7vrBocNHEivgWkNZvdmMyos15JCemzaR3BzEDznAuutsJP",
  "key19": "4i6AVpHik94ycEoSjTYnQjhNfbmd37SjQLFMqPxmwqcz5aqGEcuuP3p1jbVq9YGesA7CEjHRSMNCWzHjHm9Yx729",
  "key20": "gGrAmZqqFAnv4HKCVnSeU63BiEGGbyKdQ6hcu96e5KPgLEZMXP3G9HQqR9tzmxwT32BrdMtzSRzgdC3MinukieN",
  "key21": "4Uf3771GezGuEvqtHsG9iiEieFD3kJXdGUbJmsaBeBNMn3HZfmC4PvERBMUVCeK8joaSJBMro8bU89jb7hpfpiXL",
  "key22": "MTYfopkjZWvehd3pWjh6RrCsHcQXnZXzCtwP9P7CWjFwUswWw5mSfkUGgQYXokiTF12pcdtGMojEkcnAY1Mwstx",
  "key23": "2PccoHFitCVjtRbDL9CQnmbe31V5nT4iAm5XQF18sKFcHDo2yKDr7J8tBLnJWoM5sCKCaoJLxEN2RwTTWmmHCweP",
  "key24": "3WTPgUWpyeULoNgtCygNEb9bSFjAx4VLtMMcxx3yQTAVb8aNRvZHMANHWDzGSgkG5bRQLAkzyVqp44wBNaS72LBm",
  "key25": "5gQnGriQSngpELAFX5QPtr7QRxs6CJArtqbDNgWcUeCv3vfro74EN1ybuy5f6EvnYy22QZiuD3JJ1Wy7ZioHSs3W"
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
