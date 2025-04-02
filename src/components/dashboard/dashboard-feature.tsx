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
    "U8UPA8N888Ggmy5QymfxGDFv9HFBPYYF3TLc4ThXnrxoCSAxwaLUtqdCckBVccw5rZ1RbXchABzwoEeT2iZEJkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARb1gnFkKJSpLuk7tunFGSRFM1kHWm3kYQoxa9zpNsJc2s5vB7cF7hUav1PzAPtP8W5uHCVdJZQioVAXVWoJp8q",
  "key1": "4WhtBC3yD7Evyo841Xz7yRN7BqdW4qeVMPrzFD7LorgVYAkdhSy4131ijoUddHPxErzNBcrf9gQ6p1PWxP3VTCEY",
  "key2": "5s8FvacQpMTraxC9erboWFkoYQDFWWNvZzDjZrjYg1WR96rsYrL3gqLvniXwjm3ud4rGdv8ykpcG46YTdLVQGxhV",
  "key3": "3gHvACc5gLoST6tjsauphiVVZSUM9j16R83YKDVCXKzj6SiGcMyHjUpu2TEXFxxuoLxEf8AmZ5jwYug9dn4DGDLU",
  "key4": "2cbcZzCWmBmdSHy2iNcpCrJY8jF7Ut69KpxNh7i9Gmef6fM59hfipDjJhPWuELUCXfEhMAi4W4bo8iXMB98sUxro",
  "key5": "2te4PzLSkLhGBahcbJaC3JgGXBizcXHtGsfnW34CgQ8iasGJLkH41z7wbQ71qF9bHqDYq3SNDtsses8ELtbFvuT6",
  "key6": "32mjEsthnRTn99mwJKXG936PymificZkX1pKt1MykhRrH56P1b81mUDzDPk1S9eLWuHrxT1k9QcGeVSGM9dBR58",
  "key7": "3QqcSbNkdyfE4j1RQwhxYGf1eQrcB1u2j59yWM6tL6MifnMgqF1jDoCNtfYRNYTGhgy5js1qnv5YYkPTLy6oCsVA",
  "key8": "5RMRQefuC8Gi6kPUJT8E7km33NTnHaHehS2R1vBmFDHcrQswooqSY686478t6qSbj9oVRM3YPxMNzLb4B2jAxvWx",
  "key9": "2vYWBYaKpLLBHD6jhhFVqN92QKeAr3cNA6brmVtnF8FXyre48ERuh6aQPZVf1NJhivJ9SH4QZ78EAYc2fA64Q1iU",
  "key10": "Wcnko8Hoxq3MYekYyH1v3hcQxMdH59tDLhc7zg1bCfNB3D6Dmvu9vqttt5T4AJfuNSrvuzVukST6rXdLUJzR9iE",
  "key11": "22ivGvFRZwDVMop2XUCd1WZj4nAQo1QC4YtBLYDAHXrviCJgdbRw1U9eTa2RLMsaEnSxyLnQLswVvu4QXTHJ7Z4K",
  "key12": "2eGUVbeGJpoBA7n1Q9RA4YF1tw9ZJuWeKaaKH72NGrtRNGXskwzMAQQdxUsMccz2QWPBCwa1mnfUnuz4TJbetvJU",
  "key13": "2BcNKxcYfNxK5hX7wJVEZhdkNAmcD4WCdtkde5U1KpoMP1atSJLFFn49AdoR1ADmQd9HUJpotr6i45xWKmt4oNxm",
  "key14": "2T2xjYq6LrTHE5m7iFqAS2rYqsqm34X84KjbPxVAexfowmQHCGVs8YiEt7R1KVm9KTaXuPaztjA4BgrthQVTjhvf",
  "key15": "2UdzfpCTGeFqWExHkxd86iugadcZuQWPVVYXdwarMvVBwyCY7X1o6TWWc1jfa2eneooDxXrbgNc2q3Ri7XoNeaKT",
  "key16": "2BXgYecbP361ZLG9kbn9Rc5XBLW1nRHRnDvAGpXmskb3eW5Qkj9hqqC9eypz4dNgypnGRBkfYzGS4H12Baf9VYCK",
  "key17": "3nXybkSUrJnmV4S4oEkfR3DbqZM1XcBKyjpYQBSxdo33gQsBG5ameYGxK4LZB55vKMqxvPmZr7QdiqjJKQ4unw9U",
  "key18": "61pKmbcwwcMVSFbZP4ZUCoQPMrQLxAXxuxhokWpvkVz6CcLeT9JLf5Sb5fAmFRiCJXAcByU2GyMVw7iJty9ZPRCH",
  "key19": "52yYAgMwYxt8YT9X4deiaiHjxJqywMFTU1FGh2sjGCohT8SX8RjpYMrzCYfm6JaaqDEZXAn6wnTuvrdkCikK5wuz",
  "key20": "nBdTHtih8D3GeY8DFQCBDKSweXCMB8yonTw92RFzQUXKxbJHufTvsrGDA25UJi8vg4okqzkRyhGezn2ZLeBTLnh",
  "key21": "4pLLbAE2azPEKd8TDX8aR7n1wWtG1CNToWhQ7zZeM3MHPZZoWDhi8JsGtfTw5gMDD7pzn5DjAcRut7JoPtwwj233",
  "key22": "4NGpNC1sLQcfFweCyfyg9rNtsPH7euedjEoqeGpyhLmVi1vj7eMXs7eMbyC1ovKpYG9U4iHmnYJeCjT1SBTDn9Yw",
  "key23": "3BMJA1Mgp9Ryx4swzgnjT9rjkH7QFKdWUZtvxdZAy3YqnqPYLAMb5R13dhrQKDQkdQKHCbSHgNigoxmBjqZ5XQKX",
  "key24": "UD8x8anrZstgnHYWewsUW6KrsphNTP5HE73D38zhivSx1ubS5rd9w6fYSR2von69BhL4mpAPFiYK9BAH4JuwX5K",
  "key25": "5KjQp5YUMxa9uBeQP2r8pdqErEHCyE8aG9AVaKBsvRLaHRbqvZhLzEdHMQNK5JPhP6D73nRdEv7ZC9i4AbkjWihA",
  "key26": "4ckE4GXAYPjjR6urRXW9iBWYCSm1Q63m1T8UM1ahV69HVVAGKXLsgTxxjWCBtFSbknqJb5Gd4cJ8AHXm1NxgXdLg",
  "key27": "3SbixERD44qSqZ5eNveXN8aPk7oKiA4d67GXWtfcvtJ5n5pqngW2bsvuc2WcwSEKJZafNt7LT5amjsof8c7fq2dX",
  "key28": "48WSvMUVoSoxtQyKDYSDesXv345ws2JZ94S3T46HwDwGshMmapZXN6zNj5KC4Lhb5bNWEPWHmvMW2gB65Xa9WSNA",
  "key29": "NcitfEJBf8juEcVChMmUBxPthPHQg69PKbdT2uuSooCTGTe4Bos4sufHEYJUxsB7XbDo1skgR1gawNEF8K2kjxe",
  "key30": "3abRkLg7ezvoNhydFrdc8gWLXFhnW7t4MGzrF9Luyt4ku7vFSPgVXgGcaYV5NqRfGtZAbCzjuc9T4Cbo6o3Qpm9B",
  "key31": "5ncDPQKKmMLB1gEEbznHY9chr6br9oYXDBUrSZ1U1pnJSGt6aBmZu9fEdMXN24tgmbvgfyzpkpGrHye51Yh3qCQ4",
  "key32": "2KQBkNT5VMSXFRwvCRrk1NkW8BpwEtitfFN6GiVm2ZH82FJbQmQb2juNCdEwx9DczDiVfEPnd7hHtN7xBspjVYsG",
  "key33": "4ikbhZKYnrCqaQ2F7tnL5JsJHkosdZCPnUwQWLAkNmAZkSRaafWLXwvACWT9yuHn2xhSUnQf3soDMR2qZAnWjTU9",
  "key34": "2Hjtbidyj2BRJJEDCDTeLDGpvXQ68xVwY8zuQWeTxjaEjvApxkeDfGezefC4V74LHxygzurb69dRoxSNd98aX9Rd"
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
