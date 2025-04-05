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
    "BKw8t8xsUxHP7mkefkVCB2Xqy4dmiMhJarQxvi258oC4YBX3vUWmNxZtx1apBEPahE6gjnb45ekJ6C9nneJUvre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogRyHt9z9KbBiGvMc1x4R5wMjRWpXshrGtMhAtYwQ4vCRqQ9M4eNd1y7aanek8gXtocjcUYNFuMTDuXeGs6XViZ",
  "key1": "5QhWZirNBNGJDyXN2sqy2U3iJhL6usmUxfGqzAMW2bAtJUr8QTzyxdwNrJ9K1oue1oqZVQtJMVurzMPG5RUPtZ3s",
  "key2": "3hMYB2cWdGu6HyGmH5cdprNsgEso6rvha8oeSHZimTHrVRRKuWidHXr7mE4BTtNqr4DFGVttavFzC1ftUPwCbZgB",
  "key3": "2ZCnUoAA5iqSuEoeTmtnDAyZ91h6B48bGh3ZYD7L7FUde9fdxyJDh91mP9GgSdmy1jbREsvX3cNyMtdMZ2BiLqL4",
  "key4": "5BbJXwXeWFrqvZ3nDdzuDB9bPykhg9Zv9ctd78efS9sWsVYuXBh55MYpyh5YhKBretVYHs2SPYtsmexDHwzUGNDQ",
  "key5": "46hoZhA8ZNjJ8FmwYedYRdpXNT7napkBwCeT3ySyy9TvKPHrnf35jH23x941nAvcEZEzfWGL93TMNspdqrXqEimb",
  "key6": "3XYRZ7qF1Qt8XBUuBPw1zNp1Jz2FqufcuafJqNy7Nm79SgbRbqFXVRvGBbgvoBq4HHX4V5q1CU5bspHiKEABmav3",
  "key7": "4DWMMHeBkLxunmcusySWWCsCzywJ2S3p7MMj3349pASsQE779HfjpmBDzooZP4HVQWczKH37MW2nNN8iLKbYMY8q",
  "key8": "26ruKPtUKJ6uNc6Dm8x1fHTnd35T2hyNJFzVg4bijk2NXoJhVujHtFpmv5jNWuDHtNWAWkVbTx8nFxcMUvBKQAH8",
  "key9": "3BQ6m9VZpNJy2usfsvTp5LX3Aw1jnfCp47nxehqDU6Sa6iaDbK8nqJkboUnHXwoyKfHXc7CYfzniRpf8Wt6HSTmu",
  "key10": "2gUrPLDAV3wVgUDzYvn3uZh4eeuYZbT7GGf4AfiPnALaoXEXfPVb3MpBwK8kLfbP6FUFhQmfkdGG3Ds3spHdu8aN",
  "key11": "qiLB2YqZ364tgzrWgFdL8kPDDNSex15LCZXvScvhvdEMa4c5fq6FuEUpapWXbyMPaSuHXq2MBB7vFoJVNB16ocJ",
  "key12": "WQJn1DKREW5FHvwdtf7xeYMQceJy4n4DLtw3erSJKZjW2N2iQbcdqRkCpxcpiGbKi7DPBHFNvcXms4CBAetnGUC",
  "key13": "4Sd1uK2f8TLhGJi8uP4jSnUBG19dGTiWuXozN8oNpFpoRXRFZY1gsyqtwyKcT8ha5xWQKrv5Y8qE7XgPpMpjUoxs",
  "key14": "34xs6EFprskHpPsXFWQSB8eF4Vpqu6voPR9U3h7cWnw4C28Qk7b946yZsNoHt2h1NqihDmtVMz63913XLzrDB7K9",
  "key15": "4frnQSVcXTjwCn9dBCt9Z9zV2BZXozM7xGaWqfrdcZ1M1bMHi8gQgXdLWzbPHuTxtdmkDM9Ftxiy5m3tR3fMDWZ",
  "key16": "hFT3bmSrnkioBsqHMz7q8MiHkGRXv9ybouHr2ZRT6yfBedSNUTr58zXxmQU3oRKbNsHaLN3hiSmiedzstFwmcKf",
  "key17": "BnEUjLeGzCufS4CT7kedCcqLxh8Ee6cbWtYwpyVYJC9fWp7g9udkhB7GHteuPZeXPmc8sJrgFvrrCWGs8KtzyUU",
  "key18": "CuY2ehX2JB5noTeewfmvovoRXWwHzDEicKvm3oWwZd723Qb4AKCjfW1Yxw5dGGNN94kDBikDunf1zUas5zQVBs4",
  "key19": "32wBch2XCi2CgYDUWS5V2SSbJfLGUNKpkroFFhTm71KD1niPAwp7Tkrric3CJGnWNLkyuzJthLU4xj21gWE3g439",
  "key20": "3ARFfwDDcFz9EnSFEtTnGg4WSmyJZcjetTmDyqBjE2vtUA2mdEGkSV3p1w98xF1gVY7VTGViUCdazkm6o3DPPZMD",
  "key21": "282bKao3DojxkuXVFCHoprNF1BGnD3SK4snp6H3gBFdttn37KMnNqQJZEu5JfrXe7e15C16bjA9j2koWGsEERJRU",
  "key22": "givR22KTRcqDivzzdqS5EcD4qJs7yiC2ZUov9g1Z2LWG7yZ3u67CKY1iAJn4Rj6oApZvhdXbHLCBFGXwf4KFUKr",
  "key23": "22WR7cCBhCTuqt7NraeAc1Y67yBfP3q6ZER8fGMKavHrD2d2gbwqhYyYWAsT3nh8L8LhSqMLAz56bxP5KgT4Jv2g",
  "key24": "62AQEF5Z5osC3Kd8oNr6xiBC52Yie71FnrNW9P8ijd2sXivZ8f8NByQjzjSownpFBoAFSM31TwzTbhZMFtkp2yoW"
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
