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
    "64gxNv7eNWfvPuWZRz7ZANXm91bUeHZuU3TErvBmGSWSivz2HNVJEwGzwcb97MML8pz9dofpWtSCfXeoZrDofXTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36g8CSj1UQDfSTaJtjiV4rUmXTynHM8eWVrdKrtfsxX283kzKywbyJ82vaDcs4LXwd3GwxRVsdeQnE7PUj8EMYQ",
  "key1": "5rWRos2ZHBBHtLeyLgsyE5tB8QWnqv4xBzRoaXLYQ5shn1HExkjL21qKnmjnHE35o6yuefke1pEXnWK1Q66B49bi",
  "key2": "5qxGUeAdoaPLNcYp5Cpd7BzP3EdtkjqvMMWcT2e6muPxWgBeAWrhpQVxSJvicPLXWQQ9D79aYDNzUDynMUTvfvVs",
  "key3": "4dnCUrrgoiLVvqnKUsHifccaQ9RqUYB97DhAo5ZdQ2U9FjpE26nchLzDdjeDH1Sqjq3QKczpmHDeMX4dz4VDcZmn",
  "key4": "dPqKD5drENc4mQp3KypAe4jn9MkT5bvhTMz5kxFPPss8Dys9cFF4uQ8FmvskhGtAXMWXyRpPV6xL9bRgpEa1zqS",
  "key5": "5at59k7oYQMvWGPQke6eBroFjCwiCFoiVvdwTCRR6kNCJviX2Eyhj1XakKL8xL49iYU8dU28p8Z3Mbr49bvgYUz9",
  "key6": "28gj4RSKKuDF2XvB629Ei1simo4FuaaP1G5aswbZ6PqeHBtPNzvYWTuYs6DkQ3P1uJmrvJxEhLrEJyBUk9KR8NnV",
  "key7": "54F4SzfEYZjaKAXcyteAGyFzUEiJRNtfnsfwJNNdH9Gz15EuTjgc7DBGofQTZxhGC2bTWpv1kNaafGfvXJn79JM8",
  "key8": "63dC7vQ2fw4VEyLM3WoqqsvfRkzsHtBkGtEFfKssA4ybp7Wm7uEXnshahKMu9x41kvXzhA8o28udzB2k4prjAr5w",
  "key9": "4LUBiuRdBUGg2XD4oSyMpgbN5idVU4VDESmkMLzYZJeCL6avoQyFuUUs6LsvUjfM5oREouNtMg3iPFzQbytRw6B5",
  "key10": "3aQTyYR9jfGY3XdxApWfr4WEyorZK8t74HFUceNrigVTw2ghihL9FsdMjsvtrUfH1aCWUiPt3DXRCN13A2M383vS",
  "key11": "3YYQCMob7FLi8anErqeBadozTqin14RpTsoaHaWh2byuUH7kZHeybQcTV8ZWdQgM7gkUDREPVZwzpStUJsMyoUFz",
  "key12": "4oShCJiNvQt25ktjeoMUUMGcQqubZsbbd6Rai4iiVNKa8Z6kfUfecCDR9UyLnjD96XJQ85gCih9jE1q9v5s5Yeif",
  "key13": "AM2q8VRYaYh9WfTVTi5vSx4BfxP2a6W1JdZFUqmYDB45iVxVxn2WT4EW9forskjK9sc6DLyrQV8FXbqgJ3rBHHM",
  "key14": "4VdMyaf2KGMYXcxuiyRzHMs7vmqCuLhBfrBfq5BHT5eRf7LSp46ctcWnR4HPmG22Hc39NaaDY7Tn612GW8hLuzVW",
  "key15": "3XRqsqEng2wFJxwg7BhrTZPFcGqH1v66vooUHQPD9XCjWau7DFQdGyj4ywvxXsaVAJni97XT4zF6wUZy8X8EQsvH",
  "key16": "4anZkqEFxiEb1ENpp66HpccZSjsY8m5bowfzv4svT3t9XAxqHM3chvyTQ8RGFDzeX15ofraanJX2wzfezX2Sxqie",
  "key17": "5zedp9wC8Aan1neVhvSz4SFAuYZkCFWUpmLnc8JoGabD4tfhwTc57A6HvKoCdekWAeDeMRrdRMY97YULkGhmksxw",
  "key18": "2WbLHM5gqUaCoC647JZrpJKCjRz6P6xEoPVjxUaLJuM2su9LtzB94gKyPTDX4YZwFS5nGMUqtAjX37G6fwprQaUj",
  "key19": "4foYKypG8Ar5D5u6RsuYqa64Uk2YkvyMnoVFNzkCkx3XUsGviA5NzLgGwWKZTMmD7xi4ZBQzm2KsNXn6F8Fof3LD",
  "key20": "54rG6BrgYKp5kPbE1spLVjK5Sz6EjwgNTmdpX8nyMUPnnEjvo5sziTq184RqTpJbSBD1MnydySTibAZeJur3vnm2",
  "key21": "JGcx7EJopkDXFTf892YLijqxPBdhWMeFh5KHb99A3teL2mFJarapePHUMkdLGpEVV8zqWGnui9oxoqaejgX6edB",
  "key22": "BJ3F82R72sXBdncZhAeed1YGWTSNCNBsNkp8W2N1DZxiPzeBBHnze9wsqnTnCfsY8CD8QuHVEnTYDTZC6JwA5YQ",
  "key23": "dVq2qLY89FiZC2ua9AgUneuUhsgY6UTtrot9JkNu9Memnyo8hJropMj2iHfSPL1a3ARjzw6e8K9uEwjbrqzz1xz",
  "key24": "YnUDJoorGLkVYwytS5AdQrPQYkRmQUUnYFdL7xYn6LRM2JmMneEUSdBCvXNK53FwgbKKLVoe4FuTZGhxygLcW9Y",
  "key25": "2oSeaNfLEHiCEX4y9csZHjFnTpFLipNBEZ1UDsCvVCSxS17wto1AMLgSLT2nUsnxyNrRC1eUrpZQHbpEYvXQe5S4",
  "key26": "n9xTXw4wkS4Rph6dgfSVHeEcFwE9RHJcGAtNNBFBNsDwo4m9uVoAPRbc6Q2RY9rTQMWX1HrPZBXbCxsRdK9VarQ",
  "key27": "3Pp9avS1ZiBda1U62cZ4HikBJnPh4F2c7nzQhSAAkvZpKBgkdaFMdBkbE8w4cD4zW6JUQLh4YWHEhvtLoyYZqMum",
  "key28": "3u1dEZBdd7JziNh1pXrqhFvxm88jf2atL3BySky8YgZev7Po15pHcd8AtCyB2cSdBxYCNdurX5rs3NVjXN9GFr3A",
  "key29": "4r9LX1aMdna9BNBQqZVfCy7HKRmB3rticQeeWq7hERoBXptsw98iQqBtNExW9hB2NptBYfVD8UDUqStQneg28K8t",
  "key30": "2ZYHkAkdzPe6krsXhNhwwhc2D9N8yAed7vnYFHsSXfVuPsdq5X9PceMWmMagnEnzJW8CGWX4bpPR4NDohbycbZvu",
  "key31": "2Z34TjWh9Y68VUtRtZeVCzCNDwykzTnddy8gqszSFZNG1xSacggr7G63WgEDBzBPQtRYTJen9XUJJqv3M7nLe3EJ"
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
