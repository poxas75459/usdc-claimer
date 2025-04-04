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
    "4pS3NVHmJu49ZfY5yRbyfnsVUSiibW7QN2MdGREnrC6Et8CAZcisXUamsQ9UB3ERu8hf3FCu5HszH6GkyZV7grn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KV15o3a7voxenNPvWc4Q2jt8sXfZ2vCtUo2vuVNc1Esch8F4rQpBExnarXaZzmKMtg4VWvCxyky3LVPR8NKqEky",
  "key1": "4JcpgNVj3x1SuzGrHqK25BGFBtPYW9gGKzVZNLTEbGKREVrFtYwcW7ohUtBuUWomna1YNggJapWroe6aYbNKqB1R",
  "key2": "22uKULEhFNgtFY56iqCHpwrZcafj9LArzNYAPcEWESV9rSchL7UZrR867DcJai5xRzhzrPanFbYpiBcbgCPTsW7T",
  "key3": "3Jq8YbeXYYwGh6ejcYNWMD5FioutFDQu3BVjBF6T99cWEFrjtQFuP9zkZe7NRQmfvWo6hqfp7bCP387UyVUmcR8L",
  "key4": "k2pxaN1PHfigNXSf6wxyP7xvtfo3LvCwBbV68VheHxy3fgMdFhN9MqPQEUjnbomjAJUJ6myVPKYmbryUmBFxtQK",
  "key5": "3TPtwdJ9VjZjeHVNXhW4CFsP98ABEheGRo98DE6G5pAZ2u8uitafwj78zD3LFQed2SBv5sXXBRTTaScRK9pWBW55",
  "key6": "52GCnxaV4g59aZedYCDwHPNXCJXrQBsbStrSF5ZVZRoCCdQUmCRa3gQH4spjj4GEFkPHryNDtXVTyX2YXmU8dR8j",
  "key7": "5kkycUFsTkDWTMbFU5VL9mYf4kZxZyFnFrSSjDfS995oyB7GYAUMReAC1gLbtNNgVdjoXytm2YBHNzXyXGTDraYT",
  "key8": "3YBVxFshfj8ayXX9rDmkApPRLPGQnUFSfF1DUUVSsoSY1duyLhd5qzsvumEDLW4goWRmra9CyQSHNrFcwR42SP8a",
  "key9": "2bjtPAbiMaM3Ejev64TKX3X3sZJXYmnWKWEqG91a5h46WYAapw2tgFFxX4CRjTDt8hA8L3Pv45tTn8Fytd3qcYvu",
  "key10": "723VRKvdbuxenyeacN6ibR4ThwiqLVSrdCUEx8BMtYjipAD5sZEX1jSyMbcxyycQAXGDxu3YTobGdFBWoF6Z3pC",
  "key11": "2bTukKHf3f7taABdPgiXETrQaCB2qg5kaH5NakSdonPWfE4dfMhHnAUkdpvZTjYNuUufrgGvGYjEjkkEMpa77X4U",
  "key12": "5ZiTCmRRL3X8dFgG4ieiXGHbjZoPVajX477V6SFXCvDDhU2v7kBLLtJ3k8ra2xk3enJpSkuvmkDvtfscq4MQLLjv",
  "key13": "4ZhPb5ZxnQFcmNVzmWwd5cuadqMfUKP8zoRF4MCvFuZPmmHCW5WTbkB1ELpqUJfWfUGX6fGmzBBQEx1C9nvmrcLB",
  "key14": "3eLULg8z46htW5Ct5gT3MEoMnK5htck6x1wKPetooQcT76Hdo1pS85XbpiGRxY9GfZ87V3VKEAoNqBsQEP5UyfaF",
  "key15": "2JtbFnS5po7snJEAi19AYZq5j4Uz2uS25QJhZp4ePgRorjGQyW9tkisX5AaLTpVvBuiSdpgB754aZjLndHoGEBdv",
  "key16": "4w7Dnjx9RFawvgaFJStjQcFg1idi5mirTncKUvJL8M2jYqXovuL9sXucwzMDWW247GopvR7MLnqcYnd9dYF79Uno",
  "key17": "4ZPvyTTz3SM5f5rsJyvfo8dXCi2okfk95YysK5D4DMwKk8ZZhCRzXdQXoCd9ZvJg61HDpBNtesXwgBXkoBJKLS44",
  "key18": "2CgYuujn2gpdWbc6D6uDkomP8rt7bF4niv7oKA31GkSLnSoQD1KeqtuF3FjaBZfnDrQaH4xdnJUFpFw36z8LYZ3t",
  "key19": "2jRrkkpES1cZXKRp7cxQcEuCsziZC5uJY55T2SfoepdrHo35qDGmni4YzksFNcdm1jd6sqWyKxFm5BQHhYpQT8CK",
  "key20": "4AyC9ftmNzWrLhXoo8yPe3JWm5iS5H7WLGGNrnXLj2o7Wrf1n7jq5SrGvf6q28Q43AicvpazysZDFAVGC88TXbHX",
  "key21": "xxNoRrwKEnYG8EPyKwm1Cs3VcU7yMomPqv3fo7hb61zN9GPeF6gzRTKkCn8amwLuQJ2pVZ5he3CX26XdGQxhQek",
  "key22": "3PMMJoz88Fn8emdQmxPFeZpd2Eb4VXBXKrTH4kwNbsq7Qv2UaSmZCgRbP5MQ31aHkU8E64S3CW4q3zi61yZHi2Hc",
  "key23": "BZqjKaEdvzMQ6kaWEJgQLendy5wCNAezbEHtTXTR997AC4mzufhdvi9DDa3tX9qUz1P8vgrxy5n7qm7iiiCSjKg",
  "key24": "51BUJHXR88eF8Ufz8eJJs7uPgN1SsTfJrBwfmcyYzKB5QpKjDk8v4HTx1NvxqYP6Tcoag9jEM6HVF71W1o1MtjND"
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
