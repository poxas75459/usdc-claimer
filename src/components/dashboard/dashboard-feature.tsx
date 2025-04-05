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
    "BTcwyf5wLvZ7psnen7KbXHf2khJ1rUsQekdLhwRdjQ4Wa6NNk2w6Q2LBfFZowJ4kMvBVq47CsACnqeUVaS7Tg8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn1jDZ2U97qiiFuoSnN5EmKoRza6MreFb5J4LToAF3nuVxeWnL1gcLkCppsD9WVTejSTttaYzNQXznm11ZnQosV",
  "key1": "2YN7EwsZ7cgL3V4neLyRej9nPNhE3GV2M4CyfFCgi8tko7feLqZEbrnC9GxR88kzYBQCrXGtTGjSvbSdDFhrwY8U",
  "key2": "3S9WivGXdnfGAdAcQG3AmGi4hhL8CkZYpMDKtw1ovzMcPDK7hPCb8Wc18RiZzJQMqcmGGhm3Dfy3JUNkTGE8fTMo",
  "key3": "GyuYApaQ2YFwthiGvvfH9X2WjjkPbd3uJ9HakZqH983mxyJKy6gyYYj8qTPsttkRB7z2kq2VeqZVdi9QXSoayaH",
  "key4": "3Df5MAF9nfRn2siCKQyvMEd7D325WjQg6YUgWDsH8fuKotpS1RxaBTpw4hgocpH37ByHz26fnhTLyJN6XsYsq3Ey",
  "key5": "5rVMpLJPBgtJXhYyLmkVYq4sfJ2ren44c984S6VtivsXMMNtkq92ParMRfG5rsdofVmS1sjEHiiaKf2PKt66e5P2",
  "key6": "2KzQCtVJW2VWRHXYoddLewQYFSWiaWUBKV3cHZbEkgv2KFRGAsueo9X8yN8aPFKLV2dos8RLTf1U2doUR3jjygQ",
  "key7": "5MiXgL5oGeN9RLP6HotN9kqocq9pc1SWbZ3MpDWZVqaHz4cCjmzQ6fp1VQ1yNp1wszAUtgbrzLdS3tMLU9xrpsmD",
  "key8": "2urJ6gscbrMq8enEdka5eQHnnHrfKfNPEU3gUYvPmGVzsxcNCmF3yea3mMwXXodva9CBKkxSuRZoGvVAtviJSt6S",
  "key9": "5x1ZUmfAmepn1BsyiGLagmuDV4GyBPFuBCKygF1GM2WpdFtSZQCeLLbpUHKQwdkpJzgc73xLXqZGXcV1V4xed18Q",
  "key10": "59T6YRQ3Sy1BY2LLtKzBeUjoscFos3QF8rKbo4zzvYkXeF1ThkvDwsT7RoAU4WBKi3Nxb9Ux9jHospDK2TmPXzN3",
  "key11": "561pf5zJZLNJan433AZR2XH1L1i5MmpCa7wwXFWAzTQYnK5rpHMByTJ3YN1abxEVg7RpmQe9gDFWXtZeSmkVo8VF",
  "key12": "4fQeipzDvhG3kXutwuc227wbBCZBRZ4XXdAem1c3db9CT3P8HpjDmZRkTfzZh3zanQ7juHohBcvN736Q4Lgr6BxR",
  "key13": "3pEpgm2NmJotE14EywVYu8r3iRnLzEuv2dkv8uPi5pz9gAxt3qaaNsaceD7qYCpUK5Ys6WKezDmudn6Jx9wtjn2u",
  "key14": "5f7jojSjWa9WySfcgZwCCzX288ZTft7bBwAACvcBEi8BthZKmUhoBXqXER6PtuAfLkhNqEegs2g16AxPo4j68NbS",
  "key15": "2NpRsH3heY7Q2GNXeR9LWHo2j316mLUr92y9er6qiZNAa2wnQi86zDRvrc3oxX71kFrpmv5jJdUNFfSLod7cCSY2",
  "key16": "22fMT5KD7AS77nTKaLqehRvkWH82mxgz6UfRGSMrgcbixxN1xdaj1qZqfECTDXu7iH85HU7uNmAXh9Pt1i9og89P",
  "key17": "2jRa2jJ2x31zhxSyjoCQPF6Au9Ms3SWastF1hb6FkCmmGAkjnXga6wAHbeRHpDDppK7p3q96ocR5xx9XGeKpiXRd",
  "key18": "3gu6vtAePEgfupLehhgiJhg8FpTPQr68e91DrsCq26wckAHyhEDcPvYuzDQyf8vSCnjr7FQqov7u3d8FEcBoA1xN",
  "key19": "cviHqxgswLgWYQENuw6VhhLhymAeDA27LuNKFh6yFdYDidvYZB1tEzyM95YNiRKYnCTLM8afS7pVT9jAQqFfjWL",
  "key20": "5xxQyZkdmgvgjWpSGhs9epVHMJKuKuMQKCcWTHQpdwXgRfsmrkHPHziqLdm9YqazjmZQvFt52N5E6gHHTAUhtZzc",
  "key21": "1jpgAuBD5F7NVaGB3kctziydWqPLpRBcW3GtErfz12ZgJ3YH4EdX7b5Lh4FHNDZftF3XiT5ha7t51XrBkqrVxLW",
  "key22": "4gomN4p1hCyVNNFs76B4FMnXa9Wid43FFD6aAq4JcQqRV3aSEeCmy5vY5sDZ53mV6DjZgst5t5nmATtvGJYounj1",
  "key23": "4A41gb9efB4n31orDrS3tqYBmDRF1coeuZVKTHYbSk6qmA8wFnhEL7h1FSzaqzuc5FZHXc2BwYrBUcNVYgEd7qBZ",
  "key24": "535Vm8zDcvJg9QodrDp4F97vSYZsxEs2gFWMZHpdCHViv1Dn9ctfaLCFy6VMKwjik8wGsGdX4cNxxm7jC2QPEzDT",
  "key25": "3H7kCheRWJyjQsea5r8C5UAuRL6GijVTUPWpCWLj4YaHTdHEQ61BML452FJVj75w3EmpTzoYFzKwNSHENS5s7bN7"
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
