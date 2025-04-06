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
    "5CoC7nbrGFm91Ao2JK6hU3mcmMkL6urPyUg2Yt4N4xttRKpWmLNmgDJWicfYVvw5jAVfSxdSCDss2LzzX5Boawma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nfc2dh1FTkWKAY8g819s8aykvX9izjgFrmFwGrnAeWFzBX23pxCyNstv2ZwfZf7v4pzXUmWQN5YVmLAVBzDbC5A",
  "key1": "4dPbk2Hre21k75jSxkzfA2Zi2fLfwY2WvxFYGRNZL7P1PsobPqChLfHDiFJMdRkexFV7Ej6LWQYa5oZn9C5UxYQ3",
  "key2": "3qCFs9pFGiMM48AF4cDpRBUgouWbKycKcw6FKP9bKi1Y1fK5eTXE6S5oSQFdDVEyT8g6H9JabetqKmk6cSKH59wF",
  "key3": "2BpaJ4KcKxcoDfKgvGYemyiFgSySKaVNf6AKMvxRxGmaVEj5AKdjHvvg7wkZCGFaR565z8KvsemtKvaivRzTaUZi",
  "key4": "26mtPtcqh8kwZrt5NXQdtkg6ri2UBCjXGQcComFQXxiStNVMyEWbLdHxmQFvLC8ZCcnWAktMrhNs1HkX5Z6EVkrR",
  "key5": "2YcPATwyfX7tS6nkAHg2u8ZoeMXRKK3qs3VFSwaBiPmXav298myq1vdVKw3baywZWmrQZA8npAMg7WSCP2icBnqT",
  "key6": "67LYtfK4REvw8s7nGQmhwEr7nhcsjjUuHQMCzhSSBZQKqZkWXzsyN3317c952DCQgtGp3aduFARkdgtsyCxfmdvi",
  "key7": "2uWsvNZQCJmwyVjwkUxSWeMFe3UQjSJegdBDsavAaEZkYxnhV3wjcU3gqj4cRRPTdMcbSkmm248iLYVqoSAFnJw6",
  "key8": "67VeNxTXi99rosDiyoGVQiFbMn6inmzXgAZfyxZ4Zvtv6pU67QXE7aoGxqKm231kVKJjuC6sPtTyDpifhgkmukEm",
  "key9": "4Hyx1FZancaKwF4vVtMsxZ7rVCN1VnoU7nuLVf9bC1cxC7txnetS7Ss7rH7HdeUXYSUr81Y5Z6dwEEemTZSTXn3z",
  "key10": "3n7t7t5Sqb65WYs3uGAuEHpgZMLNffZeTrXGQCZCx5BULu4VZ41SqovvVKMQLdzSkWAtkm1ZPEyi62yvBYSvdBgo",
  "key11": "upZjjULiYPAv1RAZ46t6oDtL4jyR6295gm94nrCzMj5vq7tQqU8RUgeGJCZSFvJodcXrMZboVLmWpZSLMowpior",
  "key12": "34xKNekjUb6SuLGBxgQSy4Nyoit2xa7dnwX7Y3uQktwHtAdmCzGgWbui5NiLxNDn37cVvmvYE45fvkdBmNXrvuLy",
  "key13": "22thkr9uSqG6jDqSvy2FHbuH8SR3Y2SYQoeuEQaNBXbEJHjc8XDY1SiLwPf4e8r1QuK4BBpf4MGDghkXQAKHFDVy",
  "key14": "3Uisd3LmTBUmhYX81puhF5v83J8RgerFcpku9hWn1WW6e6Fguju9rrgwNWSkznR8QAFTYprzHdiqKUZchnasZRDi",
  "key15": "2RpNMWet2LhhAoEkgSiS64sxGJGP7zSRDbVjfifN2upHU8D6qvM61JCACuesPu355Ub1tV1LeWKB1UsuXXHZFDf3",
  "key16": "5NsjDH2BTEg62BStCrcAsBWxvEYeKovLCHiSXfTHNNQxqCedzPt8uGaa4fomh8GzHJVRef1U2Ka21b1fVNoo4spN",
  "key17": "3ESXrYCucEUpxrAiMzV1hqQ8xbPrnWn7iVXoNoZZKwCkzWSBL3Wrz3zziybHzzLbEEgjAS7x6Uf8hFNpmz54tdzz",
  "key18": "5sk3KLLSYipYv9ffbXKpHzLTZK6AdT2J9wv99Dc2LYngqeY63Ai4pDr7iX3tZpsgX4SfCKFxXQ5LyghrUV8B7Hjx",
  "key19": "oPo7GLLB2gUvm3u7uEZtpQG56UVjTrkuufYkwsKfFn9HwgwMEpb7SPc5zRwEkBEwFVsKETXwA5qqztcbbKDZNsR",
  "key20": "59L4gsrt84AaCiFVKz6W2J2v1oR4oRBTN9CXR2s8BAiQj5721i76kF7NEQYXRsf9MBBGkXvhs87wSSfh4o9aKSqD",
  "key21": "2ERkSXgku7Dd1Z4tsL3UkMJMMezbfcSC4zskFgdSFD2HfAz6jTyBC3ZBVdj5jMpmzprLKUVAGN3TYJyA2q2TpvHb",
  "key22": "6289hAtMrY21Ws6hjsJ3aicsCfbMUVowPoDgo9jjDqNSTXqDRq3ymjtdCie19KEYLSKAhiGu3MPUuTZBLw6qmVGb",
  "key23": "4ZiX94sxTYpnib2MRzvEnFapgkNfv1jM8xwHq5q2DEt9qPZDZVMRRTSEamWQv1qyzwRQ2J4PA5Ts5jqJK8qBNqvx",
  "key24": "2TgsFXfdSi6sqhzA6XsZnVVEZx24PYPXHoEeqwHAZdzW88ycMue2gGGWxppkFeAfdUsKQGeSq5uweK4HjHuHLx2h",
  "key25": "3ZgzYCG8kjMtqjFp3Sm2GWhh685JvyJW56fmunAGFYtm12pHG47cpt6Pt2hEzBTZHqb5xxNmX4fB6QMWaWvcqp8N",
  "key26": "3cEZTHia1ABipeomLiD3nbDxAHZPRfxN13zjkVkL2tD9mtKqwYymtz9VXNgXiPf2ShDdqEYMzzyscCu449976Cpa",
  "key27": "4HTipzKemGCFmc9PYAGYuUvzu4R1nupxYHn9W2rV9dQNmMB7qmvBMyK1sTtPkrvkPkFPgEaC5qZHXZhxAC5vNzrf",
  "key28": "54GAywG4eLVnQ54yMcJXxAgVbwBLVMhrJombn7MYde6jru8gdz3MFpkSe8PsSJVw5RN3U6kfyYJKbGK8AKQiBU35",
  "key29": "5pLYzWAa43r2qixG2h1t823u4yHgsN17h2RJvcCt8QBeknucFZ8e3giZ8R6Nbtnx1owcBWDeSUR6t3MHem87wZRn",
  "key30": "2xR8aYF5YE4GCNspAMUM32UoinZDfiigWX1qE5RTS5acCni4VN9fH43HeHYSe3nxJxyc8x28qRXsPUZm9uSdCYB8"
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
