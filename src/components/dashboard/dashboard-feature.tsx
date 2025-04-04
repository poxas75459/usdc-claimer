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
    "2rDoffQM363MbohZehXAVczHmjGf1JmbdT8LUmGhAgsQiXJkRZvU2rwU4dwKXS6GPtRBB6Q1TnW4YM7B6QjRH3C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZraKczRVPE6nxEE7fuQEVubVJT45nPRft1DnjcAjfmCBMVCgAaqeXRfJiZkzsqhqCpyp2BKp4tfUKSFKa7FFfd",
  "key1": "sSFMAuEBRj5h1M25Dk7sFFeG723pQzRWNfrHwHNvEtcdf3XYa22xpyisUqaatxbSY6kmobW92RZ7oVz1kyVHWBZ",
  "key2": "nMhV4eTw8nTKKnWjKqQEN1zS9qurnqkbu52RMUQ7eHFLndgv5N9sADVMLhLPV93muvwY55ujaS3tQcHpUtGsqZQ",
  "key3": "2abSmLBeNxumbY3i6zN22Y3sqpZFGDXpU6UhzE5KNRtshr9PNd63Ya6nPPCjKNtNnCNAwpwpQbkyCqESa88gJiWS",
  "key4": "4AcGuYNzFnCa916Ud1QgsMS2x8uvw94ZHr7Hq275pqR7GsVU7AeHPwpdUsDRoivXzuTCKoy1fKic8t4kwt3uaSkP",
  "key5": "3cEHh38d4MTCYw7GoBtwhxk1TnJLw43cHv2PfzK9cX57uFnSx7mossJBM2pt13tpTPdM2WTi4fZomiveoHEoooDL",
  "key6": "1vwUp8NKWfh3eYLYhi972hg3nTZw8jiunEoUFpQ1exvfG8QaHkNJUVGaSd4yjzqbcTfG9C8KJu7WhHD3X2Ggxhw",
  "key7": "2g93iMbx4unpD7jAz3kqP2m2cAjYaRvru7JWBSH1eccG28jkWbHAX4K9AUiVqcWhh333V4zb8qFZeNAsnpJsziTV",
  "key8": "55YRVNmkaUyoAVHdV7k5fqxon9fSYFwyLDp4FYctvrUEadhXWdrakhoKdiXdbnLfHaGkfVJGrxVCXWzSJ5DxvHGQ",
  "key9": "FzGBqUBK5yShYyyPfqG5XXWUnkekxhLLYYYG3XWpNi8hzttAtFFNYJHDcsKSQHRVQhsoXXKfxGU3JySN546L6NK",
  "key10": "yvYdATLLJuRjZX83xs3TyoP7WBL7Zeoky7gohJH2WfraK6J5sLvPKfJ5ooyeeSqKMPN5nJTZHXPmMKRceycQS43",
  "key11": "5AtUB4gwrkE5XYXpWPHqqWvhJPR8VKoPycWVgLBPXa9Jk45g5N7jgYHp3fBT2M2x1GG7pp4DWLurWvZABcRSD9YL",
  "key12": "4mDi6i9Y1VSrPLskr5y89ChebhRL1DdQzCzQeJjzoyzfHoaZX8mAjKX5uh7QdJB2zGWnRBrAvZU8tyvvgBjdqEPR",
  "key13": "28WNj3uQeb6nXnrGR1gtaAzURFXP7QpCi68q6LFgBnpjEg51PT6nQKsoNwKu8gsygAUCpMFCet8mr2UixXKhZL7f",
  "key14": "SX5g65kgQsRVu9wWhWhVzCSRTaD6YjSogMAHDaxh6Ux91n5XYAaJ3HZTevcDp2detMY5mSsB3syxMPurjkC89cr",
  "key15": "4hhFN6iaTzifzQBSpVLN8dX6vFw1g7zipLR8jCLkmt3YDjSVvthVxTSamZsgTf5pJu2p2g5uYMew2cov1y8KPASA",
  "key16": "4qdWcCCQUQau1KxcAjX23aaK38sUYSRDG8JjAMTAMAn49H25V7pqPBAqH4V9u4KSsNjdiVU29wGNperUCHQ1HGtH",
  "key17": "GWhA2Mo5eRoz7HkUHwsu8dV8caHSoDy24sMgZCXXkcid3WiwqdqSUT7RZ97n4Si8zeXyr523Wr4uTry8GTnynLC",
  "key18": "LeuuqFh4cNhgQv7dwT7kpLBbmfLaWGVSWQoEFURT2d5UYahvbotJfqMLkcovB6KoXicYFP5zufJejedLCHUPVQW",
  "key19": "5L8unsJgKxzQBWo7dQKfvudm3oBVvBf4wkyqsSDNa25oxVuxQ6EvV7EcQ5q5NCjJv9d8NJR1FSjxdJQSH3LwVqEy",
  "key20": "2RoBHuznXjm62nQG7q3YRmp4yL8t4FsNhCxGbeMR9afNRfYd14QV8euqVSGdf51WdFKrbMEPSJT5K3bnLXXyEESa",
  "key21": "3HZHbGNNGUJwF52pbGP6zZaGon5WGnTpCeGvubqnkfvsMuZoM2eNa5RBASgiCg39WAAYWcab5PHSVfRGFbtEnqek",
  "key22": "3e5Wcjgh2h3kFooZHaZUL3bEA4Fi2dT8yErkpRbKN7ywL5GDz9zyxrwSwLjV3hSp3oECWSqU3mbosoacQpfMq68r",
  "key23": "y5UaUXCF35yayT5wtfmtacXcjZNLu4Cqh3RQAPC569NNFJCXrSWmymDFtLLuQknJRk2CJwkggqmy7GeKZQeJTD4",
  "key24": "32MYMEqC5APfUGbzMMztanNme5FpwCL3bsM7MbAeTHF61mD3Tc9PxhiJqyYhVqtdtR7uBnthcrTTdEFDoukR1zhw",
  "key25": "4a1Pf4bDVXJmeANLhFztnJgso9sJWmsucUahdM1VNC8B5WtUAQUXFiJRWjzXZAbjrkSoqtw7dSXXGC6cLcz4kTi7",
  "key26": "3SMBYowjRmpchjAXpaQqRW3NeNfzK65Ln9C2SAR7FvBYamSTd5ApbZpej6xXJKBrGASdQNn2Z8QWy2SHCwNemarx",
  "key27": "4qor4uWsVyxSrQkvs2zSiKzGWtNiwQbfGGjHYjs7hvaxKCiM1GciM9ZoTEwMLCaKxnLGnXY1nVtZVcZ1rxGrF2Yr",
  "key28": "HHQZvUDbf9qGUYRYaZ1BBpUKP2LhK52tNkdT2bwogEBaBDo8TmBTYn6DDKDCnPhmpakPfqAZJifMrCusc9jBcdM",
  "key29": "49FAs97J5J95j3gUb4YUpPMimFqtgjV6PHF98WE5XcCM4wxCtPbZKUTYE5kJy4MLLKhgWW29438s1Cm7LkSB1mnW"
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
