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
    "5bMtSSL4ybzDxxr969GYzjY9pAVLurGb7P6TGgGZxkJhW7BoJTj8TMUznzCFdEdXf97FdKhaqnq6o8He3gBLqHn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eZgZanypb5ne3veQd28VZrLgwmZATgMu6boX1W6iDtMV1QCEYSX4kFfaxP46fBqGbs6DeFg3V7Vv6SAGYQVeBAs",
  "key1": "3GgE23r3G9XebFbfSPmnp4n4K8zgyRU6bixDV9o6YsyXzNWZAk18CM7PwcYuJcpwBHJHHv9uW8ErVCy6Zpt7hym3",
  "key2": "5JFk5vYmCdTaSZSLiYHSm5UEPfzsgFWsXMwTW8yDqjQxn2zmoU5QWQSHLjg9RbrMZeLeGarEDwksYNw5xs5FNuLE",
  "key3": "tXmAZhpj5r2DjD2iMKiFZrPTuRzaKANbfGdmW9mKLbX7PX4yij41FwkpARq3iectZGjsosP9iTwx1h5xNQxiRvV",
  "key4": "5TLxR8BQgZeJLCydbMfZNPVrjpvCz6kLaCDDh5fZbbh3WPfTpSMx4zgBQB5ak2oUgydSgqZEu5fwSJ9gMzj79nsL",
  "key5": "61Tf9H73DcBkFopXcXVMEkYLMGHhbVqz1GafCiY5yapodtC7Qon2EJL2oD9immf5aJt3RyS5YCCn6ho7v23zPNGL",
  "key6": "dqFQgQyxL2t7mb3ZP4ZuV4RguRgLcAvY5mGoK14EjAtz19gWBrdmByYYmdfzR3jErBpavKutsz6UDTH4p6xF5jS",
  "key7": "2R8mw3YKDQdj84t4B6iVogBzxiNNUjX3UB8RcvNPyP4bguShV7NYuCvYYFPjYAzZqsbsgJ7PeCEKktoRRoxveeAj",
  "key8": "cadPkBTWjzpfDUy7yiRJfspDdsagSzjeuMbCvX2pXMwbxCVCkkyYz2B2JzDazWDCbvR5WMEcKhTZB4YHHGYSy2f",
  "key9": "3ximARXvYSiQTn2kFctXFgekVibLUr1Ee7sGg4KV1Bo1P3dcBNEY1WvuU1otg89v1t5xBk12D2qs53kxcYXC5k4r",
  "key10": "3QVqWyYDA8diQCEpyBAb2t5tKzjQc7swPg9w8oMUNPSBop2G3m2gA2Gk1Sguujthu9k732LjBeet6SYvTrzzr3Zs",
  "key11": "G5t8F3fVJ91jLY8CrUFYN6LpsgDhkb7mwKNrLdZHYvr9rNrTCbLZqGt4gnCNrrj96SfaVEVMaGqqrQzM5uP6GnB",
  "key12": "2wJWZmobCi6efw249bpLFC44NosnAQWCyDe6ZxuVZodZ1GXUvKqUDA9k2zrT4rGU5Q5tBG4KjUC5fAnicnRutFdr",
  "key13": "4E4uVXi7Tr19hdcq5biZuDnrWfBJEtghny6tJaF3Jgkraxkdidig7JCiMscYZU3XqXzDNYEgWEuPTP6hPYPvFfU8",
  "key14": "5wGLUA6XpURRELsPQHN2gVo77R4V4hWwsuuwHYsx1yLVPZzdac1Fsdt6S2xeNJzRwQgQ8h7cS1xYfSXRu8BYAh9J",
  "key15": "5BGoxq61N9AELLrSeifp4iqQzh3aq6jQDoQuyaXR2jcireYjcc74CZyW96eC8dMef6PFY4Gn9vDK91h8TEAmRVtq",
  "key16": "zdZ6LvDE79LPgaHVQnV9EP1uJNag6xmjgX13Wkyrfdb337GwAgyPk3qycqATSw7zzhQcCdMYEW3UwvMBBdo8xZw",
  "key17": "2QXmSY43UPKjRpVn385ytZdtp6eGrQzis9tKE485ZjiLF6BzxrcjapmH7yMuFaeWbJWbvvK8tL3utEodSZSXZAav",
  "key18": "65EdzS8XdJiHa61R7GAQN1DXcMGRGiuyJ7uHWjCtXEFvSPEtyKaK7pADrMiKFrHqCbsDYxUCEhYdfHJL7BRD8N7L",
  "key19": "57fPqX8dpMpcBteE8CaGaPpJECndbi17FvtPRw7kaQCJ5TMYDeJt1jbSRG4Dqy3Vb9sNEW9NUJWKBSXceTiAgkKh",
  "key20": "4DojtNMJXDB2aipw6tqcqoPdeCeoamiM8CS8BH3yXoQvVLnLnrDU2GJAsLZvv8e4ZVJjEKUNuKdD9TxEW9q19tVq",
  "key21": "78upVi4EYRYuSavMsTUefKPMQuRgv665JSPC1bLJ8Z1JxXW3K2XvzRpLbMHUNYmtwAxCXSvEFuW3JYuWNZW5tLX",
  "key22": "62tAUJhyZs33pBUR91fEDuLADSr5ChiLcTtavLz24pvEacV72eP4g5wtsk2S5nDoC42F8ot4ewgyYqtiJtEKCaaK",
  "key23": "3uZBVkjxJbEvkycDUk99EUYU7JG1asN8kyaYMpMd1NYKeuV79zFSiT5zwLzJfYbH1iyJqQi5ZLPnWEc6DRuqsUFz",
  "key24": "4S234mCUVJMdR7PVWcPRm2Dbz4mo792mCHy3eQAAw5zCPBrCN7Ce1SXCXxdeYBEesuXngDswEiCfLj5fmt2FMoRY"
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
