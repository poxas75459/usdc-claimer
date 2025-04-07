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
    "2hM3AuJsiAkoFV3WrbZGUKBRbWZhGEQvuAJD5axS9VSbCGp19nLqSJcNtFu4akYa4vbaoLJCGBj7q2vKMJwySLcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3fYsTzxER7iyFG9bRTAmxdcA9vodACXrNeUbKe5ei3dgsUeJMccVMZyzU922yBxHoe8juLaFgqbnssS1gr3CVv",
  "key1": "3WqMqWjGVkM1qoaWTDf6HwKCHWtjcYwNfS71heS1Ti33Zsj7xCU6oYopYYhHSLErMndVzfzfxAYy2nTLafBvnbSs",
  "key2": "5SAoRa2BzacfVv4LPkdPoaqEVfTfCZoYxf1EwWtFk9HZhukWiAbH5JKYqTZdQd9stpr5Pmyyjiv6qZvX1cd1BFSj",
  "key3": "61HuJkFQHef3dpqRJk1amf5Ai7byerKLZBeHQhspGrGbNDgUe4PB7GxF3UwuZkLmBxqCnoZ2uztUtcPUtf4hf4Kd",
  "key4": "zE5sLkAzMVQDwRLLHxrUuFyb6UWhkCtY51vsWQnapmPJEAQ5qoaaVfY2gLSKpdbzHMtCVYhRQ1XCiiPSq9hzgX3",
  "key5": "4WAbowzXBpTAoZht568VpdB5ZJfCDzqbyy1LcLiwzWyZm5sBcpW82VJhdsZedy9Ra1NJ22wRmPJiVzwXUknta2Ve",
  "key6": "5feTWsSywuaf9vqkRc5r64vqvk8FLy5yhu7sWG2LP4pHf1bCaPV3fGpDCpToZvMMKN3krvunUBXXaPGAtohKXv4y",
  "key7": "5thJXbiADdWVC2dBb7WAWcMste4aE3D1Dkof452ui9yiWDFUAVDSV1pPqxLoLgXsNJ7FMLYEY7UXLpm4KQP4ZLGR",
  "key8": "66JJvyyudMyBz47phRugwttTE8obvk8HBeYuHa3zNNizj8MQ4tdSqeVj6CXGafYTefK45hoBesYKzpbakHxGj4nW",
  "key9": "2pHsTMpnpH9KWT4vZbXs8A1ah6cUQcAbWbHBYEToDfhEJgK578WNda2NqFMamtyezkT7h3oRoywVuXQX4DEu1rWy",
  "key10": "4JKDLtFavbGxZiq8qzKPWnS77DSryn6X34EAiwQP7Cytjw4QXASjLuK4GZgCo9d3aZmawqtbrVZNvLPM4YpdDejZ",
  "key11": "5PzCKZG6mdQCPvxKnb58HPEV3kAPhsu4XgFnGqQtuW2jTHdmdrx9DrNdtRTQu3N2w43dvezAtUnkUAtYtWCh5GBg",
  "key12": "5uBewiqtnDoqmbuVXmBBvFfd2o8zGxst7djmmpG6J27jXLwsefHVpM1YxD5GRkzBHY2wEz616iwBEmwcWZdeQuwP",
  "key13": "2uFgB9vGFtaXNXsNsjFtxqXMq4goDWdxdKn57cv6Aen5dJXzH38GJxt7Hk6rKzBFAStjxXSHxehMKUXQV5DpBypw",
  "key14": "3uX4UvPhtYCtUFVQeDcjHfKc79rTPrgAEA4vRu4jLETzChoQMzGpgCLNtV65Hv2yTpCJi2iShRaWfEtwy78Rtr3u",
  "key15": "sa2AxNZVAXHdL3jjBNs77Dx9faBue2xpJG3ToDhcG1EHLh3CaZd14RS5B9yk7XJPw3jp3iHQUbszo83AZecsEhN",
  "key16": "3BHyY48wahNE32XbFjK4sPCySezFmWPM6ShvXN7Wh9nVLQVPNSyuwirYRGRiBfaemL9JQ5q7yX6NneKybR2h6Uks",
  "key17": "41Ubt2qxAorX7MGwPaEuGRhpUr9t9B7K7WXM3TpZdx7JhCMCSkE6pGd5nDodAMdUdDZqsiCZixrq8E44jMVMgNAk",
  "key18": "Gf89rdrpNawLpcbN2etqbcNin8EkexfktJYJBHVDnpSqPKv8aPMZ9u4CrzE9dMJh2nQvUEhzdW9wwpeGMUooA4R",
  "key19": "JMhW22yMzrfhU4DKntpB9V25tdutgxQTxvD6JRXeVAR11VQPo6uvE4HZpDjcf7RLXyV6zHCXqGC4o8pSKBKTaiV",
  "key20": "Kyq4QvVkZtMsoQCtPVVhuHJv8HtaJvwymZ2iJx9R9CDnco7EvpkzLfMpPv5BQuJRUj4ujypDQhdqk2cojSYgxsY",
  "key21": "2AQhode3gtDhdJwPXpvez9uC8GAEPokRMDELTpdVQkLco4NLy7DNgcv4EExTCZ4emLpUFfxue3RP5fzY38eHpZKg",
  "key22": "3pDpdVF9JoNsTytnUhHBzVkzZsbMF6uYAFP1UCwqN2RegjLtrn7XwnXAfwfVWi5ppBG4AWXZuDsctBxErHGwxJBG",
  "key23": "2CvzvqeTq7LTg2ai5yqbYPBA6GVZiDPB2h6BxkfBBdFoJ2JFW1SVnmQkfUYcYHrQSbutDKQgZzmCNFekzxKNzBaD",
  "key24": "qHv84EKtjF78rGDN6hVcq6gTPjaMx72526bhbkQqjq72n2qxF17ZXoS3E81QARTtg2J6nQ2LiGTT7dZ7Rp4e2qn",
  "key25": "61cUa8c2B7BfqnVRzFsDWL46X74i6Wwa8b9QTmuJ6475t8jqNFC5NKhaL6fUQu1g2CAWKTTKrfeyHHmor6TaRLA3",
  "key26": "5iJbXFUNSfe4e5mPiVxzxWwq1zdjsruckGJGKFAgXWhiVu4fLaoTb3zQr9GLXWYDPMGRpjHea4ZrezknbH2voL6o",
  "key27": "Jnm5bWWNUUxVZ8x4UGnabyohXBQ84fPRGq2krmGh7g23TtF4XTk2vNhgiL21nzgk4oBwnfqjf9FhLVa3yWDHHy8",
  "key28": "dbSn4ppmPXTWAXUsgeFAsL9QLJMNXzvbsrxpEKrbnfFmomeHjjEEhpvv5PSftqrJKw3syP5bNA7MjfQPdkPRCzy",
  "key29": "4LTC7EqGoSvEckQReyastsoGMTNF8xVVktQsorze8hfJz292xJeBkeSB61v1CzGoViMs7txzLhAsCM81sSycgHuR",
  "key30": "3XYa2wKj8AoYkHqaoRxt6yv9o7tfK5jcmkJabXvtXPKZCGVLGY9qZMQN8AQbehF7iECnKwADCeyw2vDiy3hVR7gZ"
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
