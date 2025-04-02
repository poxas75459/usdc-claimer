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
    "58DqHe8ginyPf4BfL7kPxqvPKNwnhHZABNoGhEHiQFgysiFgf4ZVz2c3JhNUYAgUpYU6ogrE4eQsmZPDyrsDZ2xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whPkqFc2Zt2bRm7voSLyE4hjfskEemJ9tTrYKiTSPi6TPPLJUfDmffHUT23qQe1Dpvo2UF2ioJFKbS2EyTEk4Td",
  "key1": "4foGsaxg5iSEC1sZSK756YVc2ttf7ZNWQP48vpqjRgtBpg7eoiGcrDE2gYZetjjE9KWY5EYxmVCmMdJvXrVd6Z6o",
  "key2": "2jWGzevC9thqychwexy77eFjwTrzioVWKa1HVKUSg5oJfdGBwB1hMmy4BTEdtDrX7u2zTLmnzR5HSjhqmDKCktSN",
  "key3": "fMHnUZ7p1k39G8MAp3jJrKdmeA4VBxCzb3X5XRYRrsc3XnLsD3p3cRfxGPWpbdKWq1Yzj8LTHWXrCZAHohEBtog",
  "key4": "5vBkJ8GvGLMVS5Bt4ds6NFPSzBjsrUQdH3rVoVKvyUrNoDDcXKd3yLVUhXFLBKQA9BYo4Vo4cuFXwRT7eDvgZB3G",
  "key5": "mEJVngYGbty4oaxxVP2FkcPeWmVCkPtjA79DgXuLwLpQFipmjc2Jx9vgNtDg49RnSXHDsSkCT43CXRfyLSorygz",
  "key6": "2Qakzo19AcQfN5yEdk6NzbgkA8y3PhmvW8PJrTKh3YyRixuk18XWWrxhzqXWyZaHmCUZVc4HUZ9ArGiKEktmvxF7",
  "key7": "3xM2JucyHEuphuFkQPPqVLRiuLiVqrzy7YY8ceFa2yzjsFyD37czQ7HuCUjsg6cATp2oYwbDTPu8XGNykN3Tvov7",
  "key8": "3dXPp67AtScwzK5cTv7KhTYD6KEkxLeCYsiyEqr5q1XQ7pXSdzUeTYHckoR6aL571M363gTSp6CoDxhYQKkvJp3B",
  "key9": "5QBbguFUGRNfD3AmyWXACLwTQwRMN2LrXGnCS5LtpnxYiJxpg9RHRmQMkqSF2pkgj7CtaANx88Kmyxv53jWJawzB",
  "key10": "GP8A7dhkvuqETg77ao4tR2FCpvYhPg8iAY6V1MstgTX2q8sgoAVmbdvaf76B9MF5CPjVW4CUyTFSP4RB7615MAT",
  "key11": "24BSq7ja436pEUnBLStNopUFKHcittKuurgvF5CTFEwnxqTtVea7U75bWt16Q1H6R4oNpSYfKnFjXqmrNmXxgik9",
  "key12": "288KCDRG1LyYdZX2ErqhDgEYijpueCz8dXcFYx9MKuKPiZBPQ2GQiyTzsaqzyxwnHRwavpacsRTkQtcRvKwxZUtZ",
  "key13": "5puyid26MpQgv9TnheYzZpkQmu32U5jKTUZtzz9qCQPUYdYyxg7vajVQjpyAzYVeKvFE7RDzgwWUP23kkFnHtfdL",
  "key14": "5T9uQ1TEGngTNcRLzcUeGBAxGhe2pma8ghpsbPecjVE122GNQAk2ZA2t8GV73QqMxqPqvPQhvkP2PpmZnaFH56MT",
  "key15": "3XGQwS19zaiMEc5db3yvcvVWnXVWQxayfZpeYAHACi4TWHEZ7dL6QdgEmSp5roj2ZMB496hwwHa2krpfKDAso59s",
  "key16": "N8KL1mXME8jX1DrxyFCudMyPDm5mq3vCxtGJuu76nSKvZCFowM6Mwp3U1EgTRjP7VVyJRnNm9e7ooCkKGqWwAV9",
  "key17": "266oMuZg9yXWZe223rM5uhuryZv4L2EAHrbLgwwAcoQA6F8ffyuob9e7usSiUug5TH9bWQ666yzXMiLRciusRgu4",
  "key18": "2Ub4gL1TQ51Z24rQYFgeFBy6rdo8TpgkZsnmQDHFW4uDYZYd2BjZetmeWtMXDR2d9kKUVpCvb46ZRFMZX1TQJ9bg",
  "key19": "4GfUqTsra89F3GFWerzqfWJm7oo9kM5Waf8tLFeXv48KT3X7o1v3YCNBbHwEQNip1ja1dFFCpaAd7ZSTpHSo1jbR",
  "key20": "3WWdAnaUiJdens2SstC1konh1HWGUnT3uHM5LJG2xfkGYoo6GKsF3qJyzrW8sXfpQZXMHv8SLppoKErej31jXB9U",
  "key21": "4XH8PJY9agfiQf3gShYyvnK64mQBUgBLKdoQjkh1xNb52gTU5nFbYo188qhCrP5xn37iXjCQrvFUAaYAhBQcoaeL",
  "key22": "4hL7Y9p7pA8vHuDTuTPy4WCMKVL43j58E1efXA5tsvSteunDNQGUMKzU7HLYfPxMD8itbwCLdwZKXdisVhfzdGV7",
  "key23": "2Vubvku38f4E5DHJ1K7YuG5Z7RZ8uzCfzheCGWgeLRdScDch1UF7R2nKEfonQ8vU6TodxqSqCAJjr9JqizJRTYuR",
  "key24": "3X8fxq3MHAMnSxHziwnrrF5pm1GrktDGuKtdUpuUJbC71aYnSbTysQEPDQKxyP5NJAwdZAQAbTRbngbmDTRbQt5y",
  "key25": "45m81xkdRBU3giXL1U4JReaZhxcVrbUAs5dZmtFCmHMdfk5fsPu5Uu2ioCXVXwmZTx77hZXrf1RT4VnLPGdMNA6t",
  "key26": "46bWQMnhhN5Y2VdDJw1TTPCEdkYXUYRcGhdsWxU45DYZS9KvStgejN2DoKwX3WmjawqJKJM35FgudyaTyeHJ75jF",
  "key27": "3k2YFS1DYrwhktK9Npu5SGm2Gk8qb2CwdZ2vFffdSdYWsbwQvbjjLdCx7wVfxrMWj2PjXo1ax6JuqmBLFXPH3xnu",
  "key28": "3j1kQfhHt1iD3ccMU4JpSzRUFcffRV6cjMFKtmYdzmgrxZzrs5D9iiKrSr6QP8CEFQ6JiyWkT3xJ5AKFbXiQqLuk",
  "key29": "5ZmVQo2XocDYVgJagpGDPfL76dtWovUHoWicm3xaeJBdpZc3kaz9krojf2jbgAw51xNnfAochiD3XSJtrQSNEZTy",
  "key30": "3Zu5stpQ2MNKZBUJTBYbAcJ1eFasSNBak44muhoyb6EZbBqSCKZnTdbHAHmPpKqUS3dfZhsDGhGUFUoLdZrGM1WD",
  "key31": "3LwGbKn4XEwJEsbBzr8XFxkkUYXM4nGgu3DsKHeSiKhRaoEEZWT3EzQrCyTFGr3g46bzqhcVvf43Jr19ZaY9o2Qn"
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
