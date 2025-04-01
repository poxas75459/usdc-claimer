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
    "5t3rjHt7iU178oj8ErZ55nUSS8g46Fnx9rjBQJfvunnVUzGtYQQgdQYtkT3z5Y2ehPeTsWQqVYaPLWC94sUh4wJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUWX49GZCTDNbLSJBrd8Gij4N7dYqqq5VPrhd6Qxg9mYd29dbCTfKtH8kFtNxT7iZvcTb7GWk4SU6NfLUBAyE1R",
  "key1": "5YttDNhuxk1iy4chwTUYi5xjKewX5rWSxChG12C3SfFLcgUFJz4drTSnZUEfTesi5u2MCXh4gRkigkRre6acr3S6",
  "key2": "3DgiWw7REQ2nkwYC92RMWK8wxUT1rosk2PbbiwZcPHkBGprACv6W6LSaUCtVh6chdNwrST9sZqw6wGqneG7kTziz",
  "key3": "FQvvPyy47gHjGuKM1LSnGv3Y8Cesv68FKQyc9gB39np1MNgtUSCGgxfNGx8uBLD3mRADtLfCgAq1F2NaSf8wpvr",
  "key4": "2BxBap6JjZHTKkTeuE5tDMJp1oAnqWxTJZ4sfzEVuvMjNaqNdmnYaiXHNeDL5EuzUmXCyLxVB6uYGWnaFZqyL17Y",
  "key5": "3Z5NGPBPcXMpStHkXnygMH8fZekNys6FEi1vGbXMpaWX7wuvmv4nv58iKH3a74tsqeiJ4H36PRb95csriAXCs48B",
  "key6": "tXJRAP76AK6QRUkJiU31L7WwR6mXNChktLbrnvLA2JoGY7Q82SfNL8tUNJHW5gxojA6vq3si6wgAiiDp756ATYV",
  "key7": "LDyiaTDejjhguRrsiJHCRAgzMAwM6wiQCfn6auwjqXEq66VU2eXFGbWf96R9R3AgdXAHRT59qCKFF115f63k6Pd",
  "key8": "J2v7raKezFGPeAyGdcZ5LdPx3K2gmuKqHqsqoX7swyhPQTqeFmhFxEcdbD2ZJJuTpFchyR2EbPHeN5mzquP7HDv",
  "key9": "SRPEGHJiupQGNo5LjmEDJevC44ty6Gfmm1RFmERMgRTnURfutet887r3YXDbgwAFfncLKdXfgjEjJs7LRk8H2Qn",
  "key10": "xFF73p37GGsH1h1eae7y36GyYs7aCK3zYTJkFivDb56a6kQugLvBr2U6bNiLfmGEeqtZbSVfVpSFw7irQKkdZTS",
  "key11": "2W8symWDouQNPuxdUA6snZtT5S61nFDex992Tqvyqtfiu6jvCoL5ysEh4wKCe3hWMncwM5E4gsmmFQnMsKEH9GJW",
  "key12": "44Xah6A9XM7ir5p2dCL16nFM8XdUA2RnG5Rn6xdTpgfz6M9TQ4bDUpckHQqtBHsVE1ppaSbNxjFhE99SPvSdALhU",
  "key13": "3yKrDQfYfh7Kwcyfif2pepEBwBuGjcT3QcpBhdkLq7UdjmWwZ3ryUcweFnsxQ6Bhx3bZQqZLkfCzLtWRiRVnMmyU",
  "key14": "5AvB38rgF33ewKxKqTbJzkfLcQ7g7jMRxqVspDe5qYz1cxEhEyA2jbF5ZvEJfUYui9yX55EPt2veyxQ63F4ds6xQ",
  "key15": "Rrhq59CoXdAitpY4CU2h1QpXTNcA2Lw9ohVegQG6SsaoVchdYFvE7z6jUz9pRv1LSHMNZJpcPrRdiX6G8qt3pCA",
  "key16": "63Gc4tarFKPj89Yk5DRfLn4puUG5maT6vH3xAz1kbgkSyNfoTmd22mb6QEeLJSZ3UfEFDgvtRvyNX5yvvt496Vy8",
  "key17": "3F4p5LxTjZ5KEEAbQ1sij9pnoroBwiPrBPHdpyMV6AnzDeqYPiwtAkikPPFUaPHfoU72uJLnFz4Jdy451CsGYv5i",
  "key18": "2Z8oJBLSzB4zytugx32yQQ4g3zd6fu74D9TtZbNxkmcirRwLDWLDbSA9Z3LwF66ceGgJSpeekx7TFFe1oxTzJyzu",
  "key19": "S9R7KLvCz7TWZx7ToH8e4HRUFHb4BP8tyvhkSiA2nYjpLyQdSCpDggLaVyZ41uENzHahF9JkHEgjAkEDLsuMuW1",
  "key20": "2hCTf71BxoYt3qXTRkDCxKvcRdw5QNyXAUC1Yi3FgE7TeSG6SVjjR1nmFQEoBJynvE3UED4MsWQ8LAfrTmG7pCjp",
  "key21": "2ALWy1GN1HpLmY3YzSSFgzB96w1vmEGYA1eFMswhN3JzrmhEPCvj34btkLSnGYP7nzri5HCuiYyxZAr8JUbQzDse",
  "key22": "2dgXKmaUXonUqfP2T89aUMz6yBYNbqaBJUa4huhxvQ6hSPnVTDBByTQkY2j1c9DbTQJwcLubr7x6ZdUPjUsU95JK",
  "key23": "4D7oGzTxbcTa9vUVXZFiTyWH7SHHt8LKeoUxkVqZuMuLFKyec5BC1GgjJ3B3ZAJeM3R6nw77ENxj3hJrvjAMq3aY",
  "key24": "4QBTBL5Zzet5MauGbjT58Sey9yGChZHegHYE9KPD5LCPcBNKJEmgpN2qme7v4ekgnT7d2zb1Z3yLFW75niGeF6G8",
  "key25": "39vcufXDY53gv9NQ76N1EUKbeNERnX4jW6yByW879ft63qMt3pEGgLLZ6Z1gZSB6HTJXaVeg6dCNhMxbEjBeLNvc",
  "key26": "2gwFvM4Ud3NB86Y7KbHGTD4Lc7TLBUyvEfbmXJNVYZDLqVHrufrJHDM3SLcZ65WN1A6d28kxQxzXHtPREVcpvSJR",
  "key27": "4RBdgJuosoYzKVWzfhq12eiqMMa9ALL64JdZHfbuKBeWdSv69tDCQbHnuZkrYzRSqCT7KLck7waw7NcDMXM7xSc9",
  "key28": "2gxLPbTwnK7bVsxzASvC7A8vZc6LaGLhVU9y1T9m2LgRPZBAV4ehX8uYrJX1R82N7tx3DjFD1TiqvgCKPZwXjp4m"
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
