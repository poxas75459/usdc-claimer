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
    "3brABqo6qiNm6ZJYHgJLViUVFUVF9ddrjNZ3pVNoy2NhpdFfL483KNz3PSe4e3LJYYNrrvjy9TGtcHoWJKbXoo2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApvyRRTaYXMwv3XcoD68vZCFTZ9qitNyvjtMpFfkNk244TYTzrApuaZrHvatqTXdQB8seqzsJNhTaSBJPLTL7wX",
  "key1": "4YXwKPSXAVbX6bSPNbxX1MyyBdn5kQfKAHU3hzqA8rceyCVaJzvvWgRud57nCKbdYLchCGj5jY1QqgTrUKXSoySN",
  "key2": "2nprYydExHQQf19SXRKF73KjAyYrnAAWT6ugyYNY1AmKsvj3YtjAHiLZiixGWddFbmnDMLdf8ouvJQ8YXKovkgS6",
  "key3": "JQLa48DFq82HE92vp8viEgcjnjZcRSfMxN3SqmD2DjKQApo1kT5B3v72Pm7ppk4mNGF1jp8VtYQGoCD7o88K6Cm",
  "key4": "56t2HjWudZYGz9mBFaA4PXPBusAPvdFpjGnGRX8HwZgpkrP2Dq4x7XDV5fhbjFQynnKDzi8cr9fRmPDoA2NL6CPx",
  "key5": "5k6MNLApioiBhVmKFTcp4wweCKntF1braHz9zrDB227pEvWQgQYKMMKFzrqfmQTxib8yVwuvmGWFdDLv2h35R4hi",
  "key6": "3NtGY2hP4rFXDbyEAng6yFPactk47dSoKAyqW5VeMkBSgwMvLidTVLjZPkPhHVfrNzMnkeUS21pJvJ2JqQm6YHzE",
  "key7": "2CaiqRDKkuaLQRwqHZfc9GAGLpM8cnCVjvGd4DGgD2b3rUjNWjJ78Pahtv7hcNgWddA4LfpJ6Q77aARXSBRz96rJ",
  "key8": "5BrwWmLRoK47yUi9xZQDkpH7Luc7ejZMGi8z3QL7ctG6LGdv9Rqyf7Vavr4rEQ6Ld268PXDjrTDVTEzPwapX4mW",
  "key9": "2XLhZ72Gsn7Z9HXSVbc2yHefJZsP2iytpKPoooAht5NnhVQnUWzkNQTUjXe81W7dV6Ac2TUEn7oby8Nqe5UPXmTR",
  "key10": "rfBtGsg6Zp9j1hGUxUpY1T1tduhqPpxq9TqzdVXtQfQDzR6Ry7eeyK4J7bEm6y1ywKMG7VshgtSzjbqbgh3MCgU",
  "key11": "3sK6yEHsXyNfHt3rgNSwKpcjJ8FRNMcNGhUZUrWrx8v6NT12ido1a2YSDmeGJ6nXm7bTszatZUEb9iB6Z8HEDTqB",
  "key12": "3KPs7xTy2eE4N9CZsmSLShzFxSHbZahVLqSUv3kYHYMRfKomgph1Vr5RTG7HrHRMJgW3T528thy3Kca1UJFNC9Jn",
  "key13": "rjGv5Hdn6xAEw2k4DJokWC8wCnrtKuEyK18gaXQA3jJaixTVXk6cd7K7MtzPMGcjLwaqa5RLw6X14CDgbNLJbaQ",
  "key14": "5iiNahQXLDwPbeKNpFvRZkCcsnb16J3hSSYYw3hYtRFwdeDkw9JWw7yACikwvjCujLctaF7RAhJH6VCrfJtmwgCi",
  "key15": "48qj5ZskU3N7ixD9rToLJnGHDUk833zeAdo8dZL6jkTrjwcebRtYRep31ijZ2cHYCNDkzEVJKGAiFq3hiGvkA4hg",
  "key16": "22qAZP5wbSKTz2widdVncW2bJM7mZJX2vwpt1UX3ofMfomom8FqXXNpBJL1zhGnDAgK3neEqmwjYyB9LzBgTVGKx",
  "key17": "JD18JLUn5w82uS7DxLokaTW3GUk7mp4Mwpp2Qfo7LSjmnqmit5aE6eQhf55C4uct3TqZUksmsZPtog6A3M7NLM4",
  "key18": "NCKfbfka9EoKb24k4v38hSCbJaA9zhkY7x5cqnqJCT9gowkjN5SHgJ5BqDxvYUHURJEPUtQUPAan2odga84YouC",
  "key19": "4NyR42x4MxsgJAFxbD8Bj3qp1Jq1nxAzwJuBJqmPxU1apwFWKKB778LxvKYqusZ23x5ah4JqpPeTaiD9ztPQsFfp",
  "key20": "4qSWsvaDzbavggQPujwgkNkcKShqa99QmfWTzVkHekK9FnS28odQ3cwF3F5mENgEVvQVTP1P8jTeBUcy9mX6s9u7",
  "key21": "2pSLdkkUEqLXCGawdEG4bXDn5FYsNQzMp2Cp5SoHoa8RbcQr8ceKiVNrdGDp4NEQoJaMkaSWeWsdMP6GPmS9HgTQ",
  "key22": "2e88EZ53aik22tPeRZ8hZJcNTCV2PVE8UtfF7Ki9WX1Tsag45wQUFAigB5WWgX1bM6nxGEx27HBnhFpxsn5LnLVb",
  "key23": "4QC7Dz26vpUmzQoYX8Msq8Cdb736MYVM5qfLZSNPckjJHE66Q7Rt7aQkEHnBNztrQ6Sy9hDD2huZU4yESQUQpxV5",
  "key24": "4naV1fPBWqy9UMosJPNsShMgRu9TR4AMEPq8yVcwDg5BxetyH4i5G5TRfwAGcytQ4vrNGGXkLt2NbRdfCQtJuMy8"
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
