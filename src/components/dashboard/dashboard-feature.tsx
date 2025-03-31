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
    "ax8J1PxLFUba4LfbSush25Piyu3gCrKhg1Lm81jDjDfr6VRkpPnJit1sTprCZ62fYv2kjQC8exC63p4g8xN83H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfErwdtbLbCk6X53saxY3bSpiadkk4t7CTP1s4Yy4WiQqkEcRojqSceTxiZVJdfqk3TZxgSHELU5yXCFV32J7aw",
  "key1": "21ZJT9Q8ysHD9rLnbS7722N3ghiysGWU8vPyjtqiy86dLWU6B3esGTW8uGnZ9wfh9E5KfaNU5haM1ACqKs8JjSPs",
  "key2": "2Rf9cUG3SoWnwGgoLsaSD4akGVcqsPhcz8LpPSt599os6nkmo68GLrG4eSwKNVJ3UHkxqMhDPNUR1S8Di6i4Ehq2",
  "key3": "3dAC5i9uz9LxqzyDechhh7G883wwbzGGw8APB4WA7QkbVpH4XfJUHgT4gkuzhAzwLN9KSKxMjcm9n9fcZViJzbXS",
  "key4": "5Lf3ehuAGGJNTVozY7XYPZDbRZ1iVThkAmXxhez6JXtMakEyR6yG8o9H187CN1eCRdBAcHbzb66MAJY7NHkBizxZ",
  "key5": "3omivodg2GdkntkcktyCXDfhKY2Q3cese2gQBbPsKX685btR9si9UMRenKBBHBVUKru3gpLnX76Fs5knAWR8U9cW",
  "key6": "8dzU5QD7Ui8RrZVqY55TRUceKtP7ktiNBaJFkHsqdCESYpMM3xQroqaeBzqcdMJuqUXf5CmLh4WDc49GzU6fJ4o",
  "key7": "4sSS78d4mEYxruYRyRB6oxmQPoh7yyKCf9yjiCahAr3QUGvVBsw6Ajd7ySwB8XQn2C4Epwaqojd9RCpLzVHKWv1f",
  "key8": "2cCJd5Deuqsq6QgPZAo1CM6wSgrN2fHGiUpVfTVN6GGvMPT5ewARVW1p3JVAXbTDhgtTrgk6M4UJm6VyvDFYGg4Q",
  "key9": "2Tz1fFfUFgShhRTCp6SzEysLgWMozuB1B4sLYbPPH6FVqXXkfxe3HHx9m4sJPDchWvgMDSA4YMoHewpbMi46h8mp",
  "key10": "5sTXoX3sjn39eJW5PLL78P3RKhwAhit2pCRfUJ5cfGHhv8btJutvkwUUGm3UWYLBs1jky1BdrDW9pNC87abRFeAX",
  "key11": "4N9zRUMnjb9vD1WCzS2ofccSL79PakLeURsxw2UKrnspd81TWZwXAHDh56FRQxwGizmBnHHnpXcKmDrh8Ns4pPPX",
  "key12": "5fWhYACPWH74a4X5N5yP4ajpPv5qrf8r9w9Xs1rXeaTYmYzQGGixGZimmNGQk8M5DHJGy1SQxQHtXRo3p58EFp28",
  "key13": "oaYKA6VZ5H3sDKcgVsJ7Ga7PhENHZJzq2TRiG9JWuBZ2CH7QB4ZuLXrCmrfD45VwCq7CQHPTWSw1x5Z6Sb3WDUm",
  "key14": "23PnewNfNN2MeaZoyfF3tv2Ug7kHcBQZqh6J291vNwgAekB5YYDD6xdYppaSQq2KrBD4XocJyX3P83ebzpoxqYXG",
  "key15": "4n1fpb2W9TMdE7EQRFEbXcCVoAtdtBTM3DwkBdtwA34rsycqTmbzaeJrpDg9V3zwoBX3hX8bFX7fCKXqUg6ZYw9Z",
  "key16": "4zFS4MGZ1a5skmj8Sf22dAQcPkHTAatrbQr5eUnexJfMzrmixD9sXxzbbKTg7Yeo1qE4RTx5zdwtaLkBPvGWqYKR",
  "key17": "3w5X3n1aexe6m6nCzVBvuhz6Rozynn8ykMcy8KfDBEqmekExDUmhkaVhrcAtM5s9anZyfWRuJ58rTZCtxgcxZVXo",
  "key18": "3HcMJnurzwSqb2hf5rcueDcjkE7zEEFWDZaSa1NssW2RexWEjeDmZsUEku8e72du1PDqTbX3HGBtBrUCcTdfNnP8",
  "key19": "JhDDBVHo8q2Bi89dqz2p845pXtDVQFjHJktWbo7sZ2845xwoDF8MdYBCdPzvkjTQcnUeC2R5XZX3UUHjWsREALz",
  "key20": "bDbrNUaqHdno6d8zFcRqaKnGJ33UvpAudNTa2YhYBrZobLc8vGkwUFW4VN1S3Zr96X2oUtRBrAjKk3xj25RFRyx",
  "key21": "2XVDXHR5WHm2ExPXx4f1eV9zRe5jZTofYSQGTQMCeQkQkf1teGNpwM56mbRW9hS9J3vYxh8KAdTyDMNhVtkR1YCB",
  "key22": "4xxTk81ca75uDqJDhjYwpskSpaFtEZXseDXAQAJ98k8UE5CJXNDLRgcQDMAFxKMFcCocZ1pdMRQyrmJg75myYE5Y",
  "key23": "UsxveW5PhZmZfdDfw2GziyCYcgxndHnjVjurXJ4uJNCngZrF5UW4q2nUHjJdEd3VS27yRfCEN6QXRij7iLcAmmU",
  "key24": "xzmJ4wqNLk1KzX1LZhy23dZihVcJTRsgXkJ7BSRVfvZcJzKoyay9rZNMHiQX9VTNAMvGaQ9xt3ZFEZ9fJsb6sws",
  "key25": "2beLNonZZtzsNqKRkhjsnxsrTGY55d6BYeLJ7yA5eSGNTK1LDrWQG4vHHqxY7HLQ4FkuJDfJekt83Q8MgstTpaGi",
  "key26": "CXgBFJL2eMSPJSKnhezpyiJGFqCFu5f1FDZbE8P8on67Kz7e1qjrYyBi7h1EerwnewVd5ysB2izt86mBHvMvfJz",
  "key27": "2EXz6QSjVWnyz4VeLMJNpvyW3K5gimEKpF3wPLw9j6L5TA3xronbCHavbbwgESEdnJCB4sCRdf4gGhh6yCKbditc",
  "key28": "49445NXZUXEXNNPoiDdZouZfBmz9gckUwJoF4GBbaZaykkgJoEWYgg5PSxY82pdHKNanDeyNknDEv7TyxfCFfV4t",
  "key29": "56oFNvmfNu9nqRQpk18jUxnjNWJ4N3x8GcsKBj2c12h5XV4CoY8ERu4ftrhRpcsmUXX1yb5eZw4YeBKrPYA2AP55"
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
