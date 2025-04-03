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
    "2phrbHTiD6wg4Th2XHdiAmeZjhX1sqG2ZTuKjpWMpBmipMSEFMG1fin99zcsJD3Fsn8tLd6ZRGdbguqaujzY5o3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3utaaf47N2gVQWvY33gnsnMXGCc3kup9ZPuvq3VD2nLsZZrBPVP9cFnNoHXkZu2KufS2JDZvWeXHo5GVUeQq8LmR",
  "key1": "5VVvCGByzyi4NHG9WwxBTSq2ycMNYN6oqNSXsXBUYR6cFnsXJELkXrB24HiGYRJhJRfQC865yDstBR6EfWgk3Ys1",
  "key2": "1ZaLf6guKTLe8snTM9bah31YtwHcWFPMgq5MTjd3Yaw3B2QKyTe3AbfDP29oEZeQA7tqsvtdMM8wd3JfVQGHam5",
  "key3": "5eFGFkrWECR4tLVVUMMNtAmcNR36yLeS69ZP4ENXXNWrGzyev73GS9zdHZNEy1tMF7yewHY4tntZHPPrTBYmRh9E",
  "key4": "2DW4bst3g8tZuw4MGrUBrVWWHbeRFNVXVVAddo2XCBRF4NGEFYVCMCRcvri5hkFjp1RoC9y4E62VThBJebpMbzfb",
  "key5": "5PWsS1VFyetrbnHN18Ptzda8GQu4vnWEJsur8hqbfN9LP2myrEkGPaQYU1C87peU46uRJfLUt6vXJKubfuZiMCvx",
  "key6": "2C61PNzwv9QavfEsNSGRgNwDWKNK2y3qgB1a1cQ5u862bYrA95buCQq9KHjq7iuKVSnRhtoLUd2eskqSDFNqFgen",
  "key7": "2qurAKKpLwNqHmaqLzkap2zw5wXQTRm7WwjQcvgDGdABRzoT8N4PVGKtHX5CvtuKbaywDUa6zGZYqVr5EJNUDVFo",
  "key8": "45K8TnhFD5Qv7onYCuswkXZP8gWevparTLkWUR1UAnykZApuXdRhhk6fMgZ5nvTvWNoZxNsbrEDzpyqJn4Brwx4W",
  "key9": "43kR4MborNYdhSSCSm1DzWBAEXg9gKi6xnGwHuuGFTvNBsKzrDCR1Aa5D2ts2E9V77a8MDKkwNcfLUJEMvfjffYq",
  "key10": "2oJeMPHVb3JoYDzELPsCL2LW7TLWEXx1Jh9KoFRFS4qSBeSCosCyH4L5eDLcu1YNYLWUK6udN2f5Vwcx34T98XQM",
  "key11": "2D8vFygXed6Lur3W83jzbVHL1aV2GzGDmP7e5265EYJLy2extjr7gkssBbrbh5aTfZuTU1Q8BcCDveXhoPK6ahZ4",
  "key12": "2j6CsNcAbamqNJgkLERqgBGGXxWV2LXW5fMWNuWN5x7VZAGMEyU4fNinuJresEuFMnz7FBZA4CuSvUwNM9jJ9MVo",
  "key13": "CbDCZsdzQCa5UqdUbG9584rfkKyQuRHhDXbuv4qGWCVaBpgauy1n581kxTgp4zb3aWNcS1qPZcEKpWxcJmvMCRx",
  "key14": "2AEFUygaVf84AQ6npcybUi2X1oiwajsanR2gQbVPm1j8yK6zk57GJun37oWxHqF7NGVwJhYBqnurcPTVQQD7ebX6",
  "key15": "4DU1d5ecTc7sVZNRkWVo4Tmowaab3zsiK1wnDKZQB4BHoQvkxWKvJifMzFeYDL7xNJ1LsZTcmkD6eu8V14ikqt8t",
  "key16": "5YNcyAALbXuPUBJXMcgH4p12UvCd5PEXkaMuD4LnkZo6uMXTT9rXe5ymLARuqp8Nngr5nqYzUy61n73KetUaqtJ9",
  "key17": "5mkujwa9ajmkYsdevv6SttK3j8XuMYJRpDrfd1p7HLkKkdmuB3zBa7y85EuVsdAnK93sNVXGjvfhiyhoQRxQTCTu",
  "key18": "bw9eohFxKnikTTDUDv5b9JccdkxrZU6uDFgjsSmSk8Hi93pCkPhDBJnRnC3inEXiUrLPUaFzJrRzpNze647YNqm",
  "key19": "4TdSmvX1rd19vEwRApjnS7JeM1s7Jioj3vxfjEekveE3WqGuhu5TA65ZjjTQH8MghtDQ75A4KEvfBkdwszoEou2B",
  "key20": "5m5NqBUBBfLVD1mSX3nAfTT7Y16RvGs6xaeESGycgvBDD8tRtZfJXs24Q52gJqzKYMKMFRDjCkPA3Ua9pu2wkRM8",
  "key21": "FqNFmJM7cLTYHg5R6DXsjHrhhagVug52JUDRhJbRw3qqeqDy1KkTgGniDHEVHBTAaa8zxWtHgRYqjvju9sYmyoY",
  "key22": "5t9xcZsGdUsV3QmHgdDiFsE8RKqrWNymD4zMxdixj9qUc13z1YYFp66xQYg1YwKkgdoan6bEMrpeQWe6yLX51cAR",
  "key23": "2Vh8NyxW4YPumLH3BxHk36DJwYHGsEzpgtMfKvrSDmCDT8oUZeswtjZ8wrmbqspQddQSoktu7Uyc728dAwQUGThi",
  "key24": "2fVz7Dy8GGrnAskvWkKR2Aw4goYpcxfjJzEk3HXxpCSnSVRsQrHXFrfejN4pU8FoYeKDSqJLyxY1iNNb6MdHfgpG"
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
