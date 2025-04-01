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
    "3S7uUbXatzueUwr73KZA8vwhbiRrNdMXwR1TpApbqCaWxZmr1aShSrwtc5jnxAoMV4iXMYuoAoZLrFiMknwUgXmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twbrPdDGpsgtxGSG2JzLWs5gZ3tkpPwYqtU5BmUL15KyczgCXKoCsPzd15o3fSnE51ELBL1TRhKmD6oyxqnGjps",
  "key1": "5vrjsNCoVEGkNGq8gCHY17iJqHgN3dFXGQZo5iK4dk84ND3K8Z1yhRRAxenQcejdkqtpK4MAs2vbNF7JJfutLsk8",
  "key2": "4fXKUKSsNT3rb3CvbS7eNcugcNYRyWQ3SBJfx1Y4VH8WeRhmoeVYUQqLkyKnHT6Q75owzY5bnqatiGgR39RV1dKg",
  "key3": "S5dbK5fyU3tMjBqkTUDr8iUQJuxufRgXsp4pyKq4gBSNUKxqbCtSRGw4w6JyPayswWfrmeLcTSrZoXiUedCfV6w",
  "key4": "4r9VjjL4ceVyTadjnQPJniREvwPNeurLPsoAQW3NJ4xDnfTWyjNJwFTYGQmtHXwd1F5XuzXmyaf1rQgDKfDca8VE",
  "key5": "C5VL3txPiU2ipMyR9vvyUH1P3jtGV2ndPupvrcVbokGSG7SJEZq9pwHV5P5TdmiUrUGhtNPdMfxTg32M1vMoNHx",
  "key6": "3rW7JnVboFRi3sWG25aaWMzgXxT6zzswrt1bzi4GRBUWc8V5ciJJZi8PcD8KZk4CCRTQs6sxACo1ZWZiQQyAvDot",
  "key7": "2DWpZZ3bBTNFfvkYEf8YHYGthb5Ci5fHQ6vkzHUjpHNrwxequvAcKc6CmDGi1AFHFc6SvYHFwuseufVM8QAuNX8k",
  "key8": "LrU7fJxn8JKxwKr3dYnao8RfkxbHx64o4uvxz2ozEMspLjZpbngwvnKMdhUNSDYCAQF13Bmtvf946fXzasozAAJ",
  "key9": "5RXwyPoLtupMFoTZJwJtYzJRvp6RfZPzQvgawc1hGvgBqVY9zCjxrdXChdgaSsmLGFaJ9xbTy9WUkbBBaMKra1y7",
  "key10": "3ssYaEFeZzakczvMixv8ibVYk8q1rnVqkP71yKhkajqn1vrh2Dyf7zoC7V2kNG1h7CiywXYSbwnjmgVpyt3D7ejW",
  "key11": "Gbyk6YEr9aDwvo8oVYMWjAuJDvWurEF4bfipKWnAiQBtAf62LmugTZPFt23TmBZWgRH6WD2VnieXRm5AaJCedvN",
  "key12": "idWo7z4eeB9xgv4mDKS6zBiBxPfP5717sFSbMbHF6TKNhY2VXXERYRqJm7jaWZ23X7e3dqufzgRknqc3d55UCc7",
  "key13": "41a8mzKGcum3KNGbaisq8LDiWsjEqbQhjLoUYb5Q4yMmgbeMm2RhCtLBMtFDuZkCisEzgcxfkuAddzEeqDzxMXBg",
  "key14": "39tuXwfSUgZHqZBdiLPdWa4vGr1THgT9Zts8KZLQK6gzEJ5QtW6nNUKfoFL69KmdSrc8oWaEcS99szFQ6cWqE5qp",
  "key15": "HTQ2hSjWaGgWZSyCC6WHSXHZtqXvjxovy6m4DuAr4hUXSXGoXsorDXm4Ekf8ykYqaPWyz4xFsJwgXxGHzZbW6zZ",
  "key16": "4ePMgCvtABsnMiq3CWgVdXEwTdZ2FWvctKc46FvXnvQMCrHvkRNGqN75Erht336BL6q4TGY2fU2thKAzdcd6tkwd",
  "key17": "6552gWYo4vXfJYFvNw5fER12qAjDNSu6AxWwfUFZQGEMYwcw2e1TfUUJkNpv3etT8mcdHzRwC21XZDTykiffQFKA",
  "key18": "yEdhxhx47A8YvJ5KyhNRMA2Wv2HwREzGdyG9xxjHtyYKAAV5A2X8NfAi5DGBei6Tn8EYuaQvh5NExpKH2oisNJE",
  "key19": "qBVHCnMYccFbppCuwk3HRefCTwK7A1cbMcHpVtGjLTVo1orBC8e2wA1RRk2yi5qE96eASGKnDasAoWMNidomrTo",
  "key20": "nCBKKTbsws6ExFK8h5VYJDGx6ZkrTFCm8Uj66aAaEbinaqv6qXwyBMEFm7ViJfXWcK1foNF5iGGAuD9MtXhJ2e6",
  "key21": "5EJmaZ9eXGjtq9Dge3oFuwDv8iHXstrhsyjMrKWLTSSBhxsR9xuLUahZHdw9FvPVEG92naUYAZT5QKhboLNGMEgU",
  "key22": "3pJoFCBwcohF5iRWJzg199RGg1MxGrEx7kEmuB39A5qUBKbMmg9oAYEbksFhELrcZNNxUQbLs19PriTd7DC1QC9f",
  "key23": "3ddXMjwxzV8fZ7WWsuyez76v5QosoNdvXwMpV4uRkLTgCUcD3RYsdd9ZsYnJNAecxvjR79bSTianGBxTQ5Wd3947",
  "key24": "2psnYKpBUP46mGwxs16MwxrcpcSNnDotipeTTQ2sooMmYBcvoZjb9BAihnwCL1dkphbU2XzZwQ3kbncWXEEEecuh"
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
