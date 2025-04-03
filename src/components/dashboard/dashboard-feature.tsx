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
    "4SNX4Ba2kJFWtCBzpBd5NU45TSVRVo3ou7t7RADBxsxHZrkraCR5mY7YfswmDpxhkjq9XciZ9osrc4tMNr6SkiDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8TNGFmr32mbR7UBcetet5Sbwm7pcNoZMVnuGbtJTCgyTR471shcXqD83iKpxg49szVKAr3wEUmdg9FqFVL8uD58",
  "key1": "NVhwWywDQCDoFeisWdiwTnTm9qZ6gcTkAkNP5uFBrjwc3RffoJmssHnm51YtpvEohybF3MvVSfLFt8XynY7iDrX",
  "key2": "5zp2x1WfAd8Xa62r3Ez5zV2b3imyQEJB3B47LDLQjuxMABn8ZJG7XG2gCoepicHsDtmHvvEpUmQSo4YgKaDSi231",
  "key3": "4Y6rBGqKEB518d6CzjgMyhz4vSwvRwnvWbR87dBFqN6Vr53zqhi71qGozxL2qitFN3LXsKewQ7BBHM4NDMVk48H2",
  "key4": "hxN9qGYWGmuZcEf1uRUNaiHeSp8z4R688eD4gH8XZTYz27MnFM3Auwp7VQbgcaNGSYm9NryV9iXiWUmX1EUsqDn",
  "key5": "4SWUARAo93SPpVCRrErrJN56WtQ7Ued3ajZDBZCd6fqA1492iEAdptNHNt6fZVCSFjKoGFhi6CtqCXWQLHQsrDt2",
  "key6": "2q2oWjsaJa8o3pBWg6SctGSUXxdzzKkwfh68VCuK4ifR76sMXrFoXt2DdJi3or8aeF5STg3rT2ESFMajCrEWb1mF",
  "key7": "41avkG8J24MgWt6FDpy94H6p2H4U1YEysrUgWST8GuxD2QzBsMJfZhbcNqayyc8Gd18Wqan2hLLccVB8EGiW42RZ",
  "key8": "5kNXqMMkypXfB2B1dFWH3HCKdT6eucmXMLtQWUTtwhXFfNupTiXLkFg8hsH1BqK1fQw52bEMcckyRhtGazkX8F5R",
  "key9": "5gJTNYNbZ5VS6TaRLyEjjvkXTZD54L68YWSdpHRbHRvkEQRkZdHNYTYoNk2bVt2E33mXkPpQEvcvAVYgoesFjYLX",
  "key10": "3ULr7bEMug1nTTkALumTpfpLfxjVuhpTijMhrAoNYWQGWnzDF5kUKsk3ZwRxDbftDuzWgG1iQgnRkGhsYTTZX5ch",
  "key11": "4TiU5kFs4rqgMAZCYGaZ7ByHURARsajHNRTVzaswKNcfKpXN4GhuChNxZCxLKaYcWjqDEDfgD936zGPcb5eo1zQw",
  "key12": "2FMzRe51taTxk6ZGsxWFsySdrSBLrBk5P2QXS3Uomo6AcTm9sT5dufj3i6c9zow8QvLRvCeXASX5Zkb4Vm5BGyN7",
  "key13": "3frTGsQcpQ23J5CCW6qdVUQAxi5RoeMtvZQ5gvDX2v75jyEbTJvtn1pWoZREYjLXQ1PEZ4sp7GtsRQNwyvZTrifT",
  "key14": "4op96wcu4LLLKkxhmeVBtEmpJ8Ai2SoCWBcKXFVLLVEiuGf2NY3uBeFx41VdHHRuaDA3XhUggL5GphoeqbFX4ZVM",
  "key15": "NSTGTzJzq3CThr4zNapkGvGNBfFY6wMgQcAcCAmJM1mXKqAPHf8xPuwN8Ysrcfu2owsmWeAGfSwGuSWdErtdkAZ",
  "key16": "5bUhb6EjWrs5wwnqoNArSfmPKYhUDd2LKmZ3N24ejPY3eyEpUXPzxiGxXUTqA1grqsGx3AsFffXuaeF6uny7HBeE",
  "key17": "5jyvY6x2anESrb1woumUS1vWoLS8GytMy3JWFLjeA3Rpjd62rSz24WyVnSTRs81VMYu8UsP2cvVdpMEQfh44mGjM",
  "key18": "3wGo8N4hwCuSsQEcmJhDtN1ag3AQ6DsXmbybrwzgX1AZr6f8cDd9Z58MvWNrFWY8GAcHrK6VdhZZWdCwZ7XTRLF9",
  "key19": "5gPuD33yLqUJUdEPCX3WxabcVNWxoRq3FQG1qBXbu6yP2g5ZQEZShqWFNSmpD6FTZSzApZbbADS7kuyGvQZPsNj5",
  "key20": "5DC1my4emFibCm5V8fWMfH7Z7xtRDJPBNeWfUZJtjm7LBC2Qdo9eYH3RP9raD4bbBCa5rhrrkMe9PpzuDkcUmANi",
  "key21": "4NG2HWn1WHdyuPTnWoTvmbBGUMnNbxKbnWCb5jhhBoxSrQYdLrec5w9XnBvW4grYJ9drkkDrMJx3uFULrRRzRm3P",
  "key22": "4sWUbthS5TDetJrHNHcX7tWx2YwzE4ehkPxsnAAF8h9G8JAx6WCW95SWvjDV3HYQkkxjyrhkCkPMn3MbbvaNE2Pd",
  "key23": "54u83ut5Ev9g6t3HgewVcxR2ej3vxYiJoVnWrfeS3gXdsztSsLc95TDwAobvX9tp6E1Rk5uLVNx1WfHk4ps68p7c",
  "key24": "3VABUoeqmTAkb7yTDir5X5i9y58DkHvdV8mGb4FYiudkv2Du8QoGLKbkxyWyr5vaBe1ZZpUyTmhfikGTzcMcQeEP",
  "key25": "3szPmYeBDmwN9DkQDvfVpSyXvV4KEjUXakiuAjD1XTswxSFx9RC4kB9zSRcj7z1FUtgsWw6AjL95H82N5ZjMLB6T",
  "key26": "aNUEyUDyxiT7fYvEkNF3dj7HJKb1v87a7udh9oubirxUKNqYHwg2ArAtmPKEGsjigRZpSD5rDaqTVaPQVoR3aje",
  "key27": "5b9gEzjEfjYfjbLK4Nfbf5MfysxXCwzen9ZDaCjQ9shEVFCam2NiW3kxg9Wduz4erhQjmVVRgsQVVAcbC9NH4UxC"
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
