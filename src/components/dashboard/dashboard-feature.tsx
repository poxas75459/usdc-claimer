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
    "2mRJjdAF5V23BEw3qg9v4AN9DakGweSgxLSpbWUfLDWtJ7ZwezzEzT133S5F3WmYrAvf3PnCfZN7Yd4QUkb3zhZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhwVw9Hs428De5aAtn3LHRrdBjZGLi7q1susJeumdHp1PtANTyapJ2g8BFettnW3zkR3PBEBrVKNHtFDWr8oyo3",
  "key1": "2RSKzDAiYo3FUbiVjzbms7GrCtu5rx6Ut3tRL3n8U8WNdmGAJBGU7en4MgLcDyNC5zAhfEgsirTchSJZwj2ZbF4y",
  "key2": "5biBzJpwU3CE1EwfWgsLCS8vdtt9wWNPHzGJGd39bcvQxGVbAQvWLTQRBEWGAFdtCKWv7vD39aGouE1hyRWiqB7",
  "key3": "3GS72494KpnJNokVJGHFLT4A56AkWkAoY6F6YSpw6m19oCuzPeAwpfXGT6DYZzVsEJjtj8gprdRQtvYLmpmPZZQk",
  "key4": "5ZEb5H3HtpJfFQYFu7PmGSeKpUEwLk8V6p1KWTaLBsNxNVF6JmRf3Br5quKnYyBpqanzFDy1dtbSN5Pc3MDyX2kB",
  "key5": "HSoBbdR4PuCRzaGNgPdFA41GdoTsYkNTXx2jSm2GE7nxoX6gXaUEWP8woJLcKa9X3e8vJ3fH4E1jX2tjCvng75E",
  "key6": "2q2tArRummErtEZaFk5bLAydMxzA5VCBb5f2JJ5Lp4S5QSinuj1yparUej2Gq7SNMxahr5xcEbcfawVZTDDTCGSu",
  "key7": "316fvZfrTqQSBb39dThXVwVcfddvhiUV3toRGbaxjRJKXorxvL3b142Vmi3RC4uVhRc93rUUrdHMGr6VerNJLtkz",
  "key8": "RxKiWEFkc2Wtny5e3DMEMxFhQZWkcmYsiHYS45P4BvjQhf6J1M9vFRYAGZzphsjXjXXo595Fo7MGvSrCtkxfLnB",
  "key9": "3zzhWbXgRaPgxJPzXpNCjWsejX61fMLkpjHHuhmsAdaetRfzPw7ykdpdqUTdqADVuFq91y4BD2RC1nHcQhgpz3a8",
  "key10": "2fhSvL6Qp9fcUUeBFaeJLgkjYkEL4FkdasfrwFv34HUobAYgWtNi27ieEZtSuDHN4pHYDzd5QnzPUEk4rDCE5sMB",
  "key11": "56jtiAPoqwv8rEAq6qG1hEgd4oTAyG2T6Y72L6T5dqSVKDTxoPMqb3PffWkfAtMq28VctEGLuDPEb17fK1PCeJe9",
  "key12": "3WKDaDevHhjck4DdNnH5LjEidUhBj8T9UNQnyvTuiaELFCQzKBYbyRViaEndSxP7g73raFhQyavYL9rvGschFeBN",
  "key13": "3hr3XjQh447MTAnEQDtD8Uja7J6qkZvzrXRP7UQtPMBgH7kELjVAUHuyjEt3mH7DDiqP2gXsKdehgugRSkTQ2e7F",
  "key14": "4hWPxSYXegsgABjBEy7aCGnxaPYpSEhzBDeX7f3EE3JLMwa85wzfNysMktwJZ7Uyq8wyJRTfpjQQ7dAJeSxahxhK",
  "key15": "kBDMYCqunucLLT1yoA4TcyRa3Uq2dEsG98RKomXMfEevhJLZChdZtywh1XEwWCy5T1H2J42jvnftzbbspxtAg7H",
  "key16": "2gLGqTKwd6igFtwPiKJQ9tcajuiyFd9mpnuM5p3xC1hebDcTmcKU9q9hNHnNj28MP52mUUUTFqggbEQBALBQvhTz",
  "key17": "5VHeWY2Ca8EQ3Pdg8KPvUSjXSmRhpZpnKty1DRqUPYSaFhUFUwwTvnihXSMyFPTHFh5AMveack7vnhLLwtkXdmkc",
  "key18": "3HJwt46QHmipeLpZJFcsEQWkUHU6SaAnp4agCPjU9BKF8eK7jw4AH4KqBBxnigQ1URDfrSWNghZs9si8KpXLebLQ",
  "key19": "tUdgojGPvW3wBSx8pxunevk3siy575199aTbpfTmxdBKbqiFWT1HJZUWjQX7MCmLPbi1dt9MNPBxW32QZukU4Pw",
  "key20": "hdu7Jm6gLVYjAg3bsCY8LwnTFnZkPZWewT5Wi2YRoMbURJdA92hWmN4GZBRB63oU8jnBMYQucm5ve4i6rmaKMcB",
  "key21": "LCdgZXrnf8CKxa3tPTw9eaay1Kw3jnTBcWNS1FRzTNoLJXiZ66AVWmn9FMMCSNLuxwD8sKTH1v7YQs7d3vWHUNw",
  "key22": "2P3rXN2iLuSeMmy2gmLoA318RWu3HUoAxe1kUF3HSxSmCbXnGPireqxGqAdMjR3Pn6E3tKcwKZPzVzmBFr3JdZaG",
  "key23": "3j5QeEmncAeJiqL1TSBi31B22PPF8afJpWddH2h8FTcwer6Qf2fiVZYZe8wXBJWxvV6rDgCdh2kUCWUmo2T984Dz",
  "key24": "2eUyaV8Bax1XQ8qrDoo3hHfJTJJfck6jTRETVV879dyVR3cMshMMa9xkqjLH5v1Yz2BRUoDkabexE8rcxwoo3i1E",
  "key25": "3eiP93T9KbmXECBeewL5p85bEQTN9X17cWEVmBGhgpwuHuXPxmafsCaBVP9EttfXXzc8tbv4Xh2ehuBfJDMF1L8Q",
  "key26": "3Ccb4zLS9hw835wvMPENrAgesVNqJNKVkyhu8rcPfT5WYsgrLWsNDYX1kfvF8MFuehbBz2ia3usJKBL7FpgMNjjC",
  "key27": "31bCa1gFpjmKSTDahjNKuNeRBL1xafh2HcnxY1wSV2LX86n8o2kWr5vfk5H3zGu4eKkCy9Fs8X9Nt2vMw9EBT3mX",
  "key28": "3MLfSMj5tYPe7aLyG2YVyacdrzPTv1sf5aCZ3aaGkk9zfQSnoWGewBUrki6RP28PLVhB4nufpxiq623eQZz1eVCN",
  "key29": "3raki1ZDyeFzhhbmu52NEJMvumZxZW7FpsuLwrqWz9wydzCwwiDxZ3XCim4BQeKwn8qrExyf8gmhyns8fQKa9LJw",
  "key30": "2YpGupoK2EkntvK1c7LoLPQqun41booqwBDadkJGRWgMv482LnXstunkPkrkqckbx2YEsyrnDYTJjCcZ5nwJjKGe",
  "key31": "gH984wXYyAeLzPhLTXhXC2HvuiC1T4BGmLnGoTxAzK26PoQeiYZLUfbe1ExB7c6RLapNpdpsDSzk6wLhbGtr2UU",
  "key32": "4ibo2Hk2z6mxUnTsmCMfP5VgoMc2G1WWMMyND7XAB9WfKfaH6UY9szPnq42yNByh9Zsy9jcbtMv28jPB5PsW2cba",
  "key33": "52FfseJAGY5tSDGRyiMydeLiwgUsk6bQRhapC2TNa6f8mi3PxWF6UsMTboLtfxSCtuJFcLhaq4xdL5tYY4Gvt1KZ",
  "key34": "26PzKMUwqcrt2ou94WLpPkNPzu8dqPyHsmnHeSBKTwZuGsN4CR41EEB7ikSxtgBEjvrSx1T24X4FsurigkywKBkU",
  "key35": "2ev2BTMF78SSoDarCfVxixeH7Y4eMh6jESJTKb6T6GWSSQGfmS6C3zPvF9h34vNrQaWqmUcPExhKWb49LJs8Nge2",
  "key36": "2xPMW8ig92NnT6ACLS8cxh2zCoKQ7pth8h3CB58FwiSVdwdGz1AEEuj22edsT6LZd6z6nBmGZKL1hRaaXjLVVsMV",
  "key37": "5WYaZnw89Wvgbk2LzBagSYnTTW9bsdVY8qPgZTyz1P2viJNVyhQRxtvNSyh7STwmmY6gFnFmzQGU2Dyro8pAEKYi",
  "key38": "2e2GtPbZSPfUttHRkAZq78Xb8odiRWm4dMqBrRJgX9t7UfADcEiJWVCo1oaiBoFs72HZVGj2aq9PcHTfA95H7vJb",
  "key39": "5QiJMYgWQwGTb2YZy5f5VZMgQ1Lip1QieMwFxz25T6cxYEEWrbwcEvkmGSDhUYNBrVKAzvZZn181FHnNZ8fEDqo",
  "key40": "BHGmN4bdhoQ13qxijc4sroWoE6bdjM8uXzupXhYaAjZRk29UozBp3KDatEtC7u4U3G3sSrbKt8VUfTfZSu7ukVH"
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
