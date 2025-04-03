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
    "26zMsL7snTetdFmNu8nJ5m9mUnvtDb7j3bSATE1Y9JD29sfM3XQHX7iuVw7LpiPKjbx5H7jf3f54S7CAjuqdzhL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrTxZEHrGY92vuiXsLNZrwchA7VVEGmBsXbgCA9ZMMiWsXTBxd6Ah7R1xLSLsa6ZQXLpzbMmES9y4h8PnDWtzkU",
  "key1": "3DEMs569PCyV3dJNywJt4ePJeWKUd5Snsz62AYHb68YvvZqEj39UvKMPLyUUcKPkMWagK2hsZ5ZQzYU4MdXF6Npn",
  "key2": "3VAZqUTrCKPioAJ8Qay4Hz83X9BSPNhyaUUMQnfm584GTdFYwH433avmbwfxkiCZuw7imZPe9e9gbjY8QfTrSswE",
  "key3": "4WEoU9GFEqRj61F5pk6t6fEfm6ALfvLXNNMMgZjyPHSfKPWmgFbB17L213nou8FWqhUXJaiwM8Jgce4WH5ns4VvQ",
  "key4": "2kZm3muCyjsDc1eN74qsMSXyzbbYyGQCZpRSh2mAHTGMVMmm8ViV7Ro8GF7huSNDihSyPzSBki3TxCpjmdUGg1o5",
  "key5": "5qvgUWbUYjojvsmATzpsyAUNAejETuK3aCm6m2JttP5HKQPVyHjj5mLMoLtKY2g7Pvpp3HLgAPeUe441sDEf43Rr",
  "key6": "2CZmeqQkwLCRpzqAw4Zin6dEyWviECMSSZbiAofB4VXAAALQgTkc6W1mnJiHFZEqCgm57RU6QVhoeQSnsCP25SE",
  "key7": "ApjwVkSm4R7K6nuKZf12xV3ByTEd3NYK7ZXkNW9yyCFCGdDtNaUDRhQX9BpJvE3nUZPCuNaT9VwKoFeBZ5wTpxd",
  "key8": "qTZg4fGt16jUaYqAFARALLu9gCrVFLgN8EZPv7RpAVLeJxGC258M7xnCMbEvAjbjnRFr9wMQUhYvrJmSD5UcDmF",
  "key9": "5ueDuB12LEzRiGnDKNdirNcTJCTs1anvYZLEdkY4FEbCRnYrags2sV8HCKdNMbNoHneC1rFx1S45XuoiypbFJNLK",
  "key10": "3ztdWZBfa7cvDSamUwUYwNmbRyzEETBx6LvgThRsBCq44YRBxPsJ6CNKnGG6SaDXgfoG7z3rnu1nwYEc4jUXdZJn",
  "key11": "P1DCrGtJ5XuvrBL8t2ebf6287rzKRKDYyv3TRi4eMxdH1CKYbncDQS1RxTsYK1WTSYWSbdkyhGq9yLQ9K2t2DWW",
  "key12": "4gKDGrjhcFPMNRUwCc77hkiSS56Xkpk4K9QzvDapELELj4Yv64vmybYPH39HZntcYaSxHeMDkqK63N1rCYnyeqwy",
  "key13": "5g8rnzR6BAQsFDR4ksRnweHeqvsXHyYpfSXe7EKnCDeqVFR6xtT3hkaiLYL9pF7w6ENp4efsVb8SSSRfYmaRMeEW",
  "key14": "4LePzqTEkDhJG1hKYSqHgrcyuuT1mSRhS6Ufsewo6Sb8hw5KudTp35PTTPREFAzesyZhefjs4kEP4fMMGw6MkKw1",
  "key15": "2MP786akbsJNyEGoPmSDD7ZybNK24duemeFiFTDDwipvn7YK6sb5eiveL3fFMxY2uGUrDnmKd3QYsidc9n3JyFAV",
  "key16": "53zv92JtAbomVJPHxfnfkExVe6uQ6tU1mBkFL6DnK31fHht8egJMYCJc7yP4c8KnVZqDnFXmwHZst6V2Z4kCbgWq",
  "key17": "46ptgVLNsuETXoT4EKjqvLfb6h7uTAKHximdhVpykgyzQoDk5DerP13dgqyqt1Yx1PHfL6cH2gEhi4w4Wy9hkWSF",
  "key18": "49a4JMU6BZ1ytkNQByPbfXEx7zMmx5hti1KFepiGrbskdi8mF5eECQ1feXkqj5dsHdtUWdXSitb9fhNPHYZZuPL1",
  "key19": "3AUvfVgwGmyqHEsG5DDCH2LQx6MrALzwWbzX3g2fsZm3giXFbRHuAXkdhFasLrXJbh8vdPhDNrczF7KQ4pRxJM3c",
  "key20": "4PFnByjJLYgnnpYt9DzZhZ2ZryG49S3VyfSscdyNAJB36WvG9Ymu9wGuNDAohH5XnMJJ6KiVfZMM37eBAgsHwDLh",
  "key21": "3K8ofAkcrvadDcXya7r4zyKabNBXdELPvSKei7MUBqaXUYo8rxpsb8TckJSPzWgvQffnQ9UbPEikoqJDXwud9ZUP",
  "key22": "uih4RJjsvMS1bkm7LZD2BPLFAirFdNwpEWGZwNYKxRGRfM16FvqCqHhdono55KTXTMg4hWytMrTghjTes5ntc6U",
  "key23": "24CVUrvAKy3crkWqkRKRrUCZNSxEK2TDMaR69kBCg9e5YoPxwam3sxkMKQx9fSjnE2Gr1cYgVspmcgSjPULaCn87",
  "key24": "5K1j66P5pRxVaxwNBkGDkMa1ifHNdkVsaVHA7Syfa3EWV7sHqV5uosQh7SKHirujwJTGdt19wjavBuHRHCPCXDJo",
  "key25": "r1FWS3hsB2CvdpupUp41arZBdQ8kVnWjJybKrZ62S3GiaMYkU1Uh1sWu7Dt9JEfZiLDcSmrWHDFCBJep8jm2Sh2",
  "key26": "296sWhzShv98NgHvP7t9pU6Em5D6zr3CgcGq8REkfrHQYu6vFgYP9u3fatPKVJXdcut7V6AG7zMFMpvatiajSFMw",
  "key27": "2NRHiJyDhWrc5bbuAdpnzxiRgCuweDaexGRAsnqhozAvqVVsXBwM7F4sybvJTmnoZMMrXj7tet5qw8qMq6qH7VBk",
  "key28": "2F6Eqmy8NZAgf7pjSX9ZSezaDDGD16CAP2zCLYb8fsDJj93hgsqs7Upzv6E7UXgBC7mff85feT46Kq1dxgQ9tkwe",
  "key29": "33iuUwxwXsK9iXzeaoda7pbXF1HuCEYqj7H2unpHUbbkTMizgTbundGBgmYnQsCnL68EVKqUuKZTg9TJUMrVxbAV",
  "key30": "5UC31LKPq3paUagEPfedhwnkdTcLhwyHXwWTwMTbGiWiysBnTZ81ebnNQZRNC3bBhyj4rSamuJVS9qACYReBr3Yt",
  "key31": "4VdmCMoNUrX6x6ZRiW7F7qA1aDZUadA3zqPysgdicJHjEp3X3gDh4jCQL1JAffPJph1p9pGME7jSyHsNbnSndVaJ",
  "key32": "3cGW5PE1DChkVjR27QcRVcrXqcK5GSSsLzFRZb5xt8cgcNymXWREDraskh8PwUwDh5qwCdt1NYdQCrhZGUHDjPJF",
  "key33": "35YocfKffY2AFFqT1cWLeEZ2hx3WwuvCpJy9WYmR2s4Jb1Kpiwm5jLrehyezRW91jZMheNbMQh3SFuxJxqoTui6R",
  "key34": "67ZiZRKhym7HaUZZvYi8o591d4gqzBPFEgZtnoxBU5tY6m3GyfBUL8PjK2ubEGh1tfs1S1oUsALzpaUe1qzF8E2t",
  "key35": "3YiYmtR3dMASWnau7DYZxAN3QbyE3MfzjwMcfDoT9o2pccZNXvDr1VCPdGM7VAmanCRuBuLQfYiLefqJqjYBSKG6"
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
