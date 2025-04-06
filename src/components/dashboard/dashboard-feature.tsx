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
    "jT2C476mGJ2DL7tdvFRJnMHkuznNM5of2Ud5qAqi228bhA9TCQCH49PfiVJaNUJLTmeV8Ca45DNThQoFMLLyT6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiFdMP4CCNsyxXRZdpqcy1e8nLBKmig9Y5iNUJoJLhEcXc54hSRFhw6vH31qE4tuaFEAHwUgP3zZz11CQDB6zXE",
  "key1": "66fVeofWMW8XkE3R3xPZKxzeYhSjgfDXxKJUU7gqDnXQsEp6HETPgiCzafTkwPRtaYiYehZh1wUvyCqBVQbp4iwc",
  "key2": "SDFF9EXFMpaSeCRPXc3hpZXSVABggs7Q7ZNB4mxiHcCexFm6xyrb9BTpXDru3KU3XaVRtVdjGDPctSCnRy4LmfW",
  "key3": "4puPmmVA4acm21WZ5TnUuGw5htzwteNkKUneoBRiYybKZRQifCddfALDrU5opN4KfkkPEAexU12FPLjSshPeh1WA",
  "key4": "ojjG3PDMKyR8DHMLgduWmXYFxyZZQcB7uSqcGobhdrUJsoHfy3iafbNMXZBDaeRd5HiWMDfHf4HMT9Q2jihorUp",
  "key5": "5T3FxwskQXbeCbe3dAtT77wAV5HNLAT14BoXhgM9CD7JEBQUmt5B3yN6ZvKWjgfyPvoquFLF2ZirA33qYs1ZG8eC",
  "key6": "wBrY9itCwi6dCxuJN5dLHFKRWFuJGKGRUtYDmvFsKdyj7s3p82ihjvgj96Q6ipjwYBaxgAPebteeHM2nVSv1aXq",
  "key7": "5Ra9PCNbCKBtcsHC5gsadZnaoXxazWEfBSqLxKGC73A7v1qPm4fTNTzKzmTrJMzN7XySurnrgEa4EsQWad4rm352",
  "key8": "3LfwLm1LJudichDdrRm2uwU6MWx23CPGt3ZS3qGBQypsgsjtejmNNxGdbHLtZSNxTJYqYSxG7twfwdFVCpj2qmZ",
  "key9": "YhbFn5zFFb5oKAxbyDG7adyW6oNc6SFm8EpPJRc1UCgfVwgk9px8Uvq38qaSwXYeuXLGzk7b5C9i9CzgA81RG1Y",
  "key10": "4aRYFt33SaJ5EZg8A7wmHtUoS6aymb5cwDZcReNBV7MVzbYLJYqG5PwWMta4cTe8y9zskknZ9gKSAZT1BjbwYUJC",
  "key11": "DXbVpLVYsPGL2ovHyE2cJuyfvbBoWsfaEvzWSHyaxE5D7w2PBxrVfwDhDhaN2GQYacB9jCZz81Sx9T3Kw1ZjUMW",
  "key12": "4piG3NhVBoyafLfWjrYZe9eoorha56t9ss2BbFBWPy5WTmRM9U36qx5ZYA4PZr8XWqMHXvF2tyFBff8gdSi5q1ry",
  "key13": "DZXafTU9TX5ugVjxhNfhffimVLR6UTS71d41FkygRBm27gXUNH1Hus7LNYrQHwVKqFUb5K8GeUPqzc16eWZZkBE",
  "key14": "3eFXfgmnK8M3J7fSMCuVPdHoHvDGiVbsfYZEZXx7GTReuUzzfz2FPTYSJkgq7kNpCfaY2Y9JCZH9TTQmwrLDPFW4",
  "key15": "2SxkLEu9MopcxASBEEUphP7EY1pYwr5gpBxKm1LCqRRYRLzkZRtHqbgzNUHcLUoQSe2k2mQrcEYQXYaeBS3o3Knt",
  "key16": "26cVyU1nVnCoepdeQUnPpRZyXg2wdt6BdmAM3Lk9vYmGmE9LCKM9WyopGhfrTjHaeCCigmnvzmgXrZcnzsEXS1Ax",
  "key17": "62qkd9o5C9xpwjbEdwGkhkBkisH7PUUuRQMWLbEwJShRvVTQnPb8qLsd4nyZbSedCznXGRxGCYpeMy46V81bECCT",
  "key18": "4hG689hWvpMjwcaPHSm2Vre8A4Rc6QVWgkRU8AMc8gxe5MgtaMUWbJpZnsfiQAwtUK14FMMkPieALv3sZiSkvyrw",
  "key19": "3GDexmQDDtk2EN8D4SeKvF2QgeT3GF4hjA9RCuyAY5fuJNLydx4vKnGefLqDmgTBnaNHdhhfZ5aFkCsjnX92ogFZ",
  "key20": "QmmgtGETfrMfQecZBJzXNM7w1YqCUCRvmjow1pD14pN5baFLG6X51d41aUUUtaS2zLeLv1dLPKE2hFCKufuNuEu",
  "key21": "61t4nY8PX8bk3biugZ3zohgBXGB3ghX5QGFggZAwjYTaxfJZ1Ef2Pv5mzfrBStSBQKYoAozDPe57To2FGLspUsgN",
  "key22": "5dBi6ZzKPzvxpf5JQg886xKPe6eE4PXktLLL4cGKuV6V9fY5kk2sBorYxP7ZQzPRbZgBpj5TyMfiwmpTVXp7GQEk",
  "key23": "4Ri1iR5JFRogMFvQe9pBSECQSur8e6YsS1sWycfKSTfVDaPXQqq4o9g6xtcD6QcSnwpi6PrgYzfz2p41zLegmMan",
  "key24": "4LLJFd5ZURXNdz1atsXkXzwzdHkAFK6crApBbaj8FGnCgWnZxrowFwjCKq81cMopjjpeuFweNsPK2aqVgp54YbqQ",
  "key25": "3oHk9xuTftithkAK6YFujVTLu1HpJFJTSR3LubmDvD7KHCWioaigq9BFdxBwj4QKTZ6xw1gKCumPwPkEUScXhQRV",
  "key26": "2JptjZNTcPFB3WXnRLmk2g9CkN4kEVFaYEsVRf7AXpZBEpGayyoh6Ri93pnkrYujuXksUA2dfTeXhT3vdkfjr4nw",
  "key27": "4AqhX36Y8CsGe78AVhN3xzCtSu4K2gUJzBYb3fsyH6keVH1DENSQQCvQc5i2LZnWTqWfevGvekbrhAsLtVT5oDfY"
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
