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
    "ErJyraX7EqfbDaaH3dgMHWthbrVgP8864sB9vTpxnLSVhhaaDJWRXUCeC8HGbgSVN9caLiYgW9CYti8tojdVpSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpyzjvCmxgbMuFtsXiEdBySFQTyXN1j7XVbD3rAfZaTw4TH6fWkYc6vPcSXT8dcPxDpv27w7RZr7vCwnQXbNUvC",
  "key1": "3EnR73c4byAxnr3KADJRmVd5JYqRPnN48B7LzSF7hWTZJSh9mQGr3ixCScJLcZu8vfW62hkSghoRvqr1t2UBaPAo",
  "key2": "2aE8Tfdgt4jq41Qrx6A4sxVthrNA5pN2wjCu5RoKAWwSo4PWqeDqaaA85tzkBRVkNMkFFyzAUyVTUphrW392YHQs",
  "key3": "5Kgc6YcXevaHUMNcWzHUJ4qgshEwd1z13E7iynvTC6rNffCJ5xKwHpPPAVWUdKMfoq45FUJy9JXpi1xBVae6J6oB",
  "key4": "41c4R78qxVaU4CUJBvi6NbCv5cX7uCofBSBRWZvRYkpvYompY98356QikHPSeo6UYmcsPozHg74ua1FbnHPsybs7",
  "key5": "28H7kBPmVXxXZvYbn2PjXWJKuMr1j5hGzG3KHdtiWzvRpy6L2uSKqcqdbRhhry9HzaTvR4Tu6tA1X4Y35Yj7EBdy",
  "key6": "2RztUyrWowm5niZnCfPFj3LKMCxjgqFcZVCxoKfU2TTHWVpK3h6j7q175XwAM5AzheRtedVAoDW6VYyaAKgL3XKd",
  "key7": "3bbCPhJUxsdjdbvDhbgYXttMP8qfwA2yFXmFmGmwPG9hhcnekmbombPkqgJ2DQFycn4F8Wr6oC6BDvFiZcErYtVd",
  "key8": "2fv5CT4K4mxq5UuYJAaVgAfyvbWJBYyu8VUyiQswVr2MMxpZpctArkgyWEQgy8ibW3Z1kaPwgNKxfz2sqxPrWaLk",
  "key9": "2r3Trh3XgQMSNoPJw94TKWZXT9m6f5vtp5dt3CXibznuXmk4Uxif8dcYNiWF4FtJLtUrQk7SLV8xiDAEjgzqbA1B",
  "key10": "5cZZ4cz1ytGm4RUTZea1Fna1aYnPhQdyb56ZguX5CGeepviqwqsdU3txhsv6gxp9CSGs98oXzk9JFHTQcrHkgpXN",
  "key11": "37CzzdwqBdEMeR6dvzGWFDJPLB2XJkDhfthQofECMf83PT7VwBAMWoYTMoujApjowa29uVXsquDzoNAgiTBPy7Hr",
  "key12": "4DjdHgEvPBLhxkSAe9pXPQt67RR4c9mmgGvf9svyvzcqRmtQ2V9ANH9Eb3K3VDS5LCyyhf1Tgfv2pUP9bqbb4xZy",
  "key13": "4DzkYGj2vLukbJX5FqJjxYZxKxhQFzMPSAywTeqUhVnKH1dEhuaUiLtY1i4cuUK8Hz5bZdchWYUP9cJECmYUBjx7",
  "key14": "2uB946nfXbmm3JJcPuMTj8J2gTfjitWjqctoC88Y4UkLpvV8hp5fZasGx4DoK3BcuhqtKbfTSBf2uc4dohVR3hy3",
  "key15": "5HTqyk84P8fxVmmsNUUEW8MFtVy7g9D4J1XiBADURNGeh4P86Pgm6s32p6ADfdUoYGNPYmDoygq2axdBTUPZKcuW",
  "key16": "34p1HnwBEqKXpeKKwPpydrhBJVtvAw1U7NNoyW7g9J7qz7LjLDSjgcSiP7jBPuPJafQMMvPBCZxPxVZG3WseREGr",
  "key17": "3yJwYdLXe1cydRRDAhHD75TGQEXh6pQNwfwp5a3vsuLNs4QNbxn9SPMw7FM4yu1XWhUyq8KbcPaF7GNRMe8bm3jQ",
  "key18": "43UXecACCezACDKnnwTVZSNFMXBsKzyLYDLRFgYaxdtDrJ93Z96zjrUSSMhRSeDw492omjsEfNDs4PRsj7dm3FbT",
  "key19": "4p973CcHeijmseqpYoW88NC33zPunb4kBQZYdrWrrc4dqve84GMLLq3zHGRG29Lj9shJ6nwZpo7LBmNTfqrFwgcb",
  "key20": "2eXf8eWSf4mKX6pqwsSWpp72b9jeSvEKUZKKzPVzVLrcM4fsJhbhKudLjf36LkZ9daRVjHHApRvpK62txSstsKc4",
  "key21": "2fN96tToH1xWd5HFDkMHv7sgCXaW5otBhsxF53eXHzEQLLBQ8SmVvcCeJ7iRqm2zUeQG97cAUehPc9yJr2xgvVgs",
  "key22": "3GHuAd1eKMA6y7R7kZwWHL3sWP5EJkLE4TVW9f7JdWE8bHvJE4Tn9m59GnwL67F28sVuNjJi5qNjdyBxzeckPCrP",
  "key23": "2cuK2dB65Bg5CUW7YaBB2FJ29D7ofT9yxzc5QTwEyxG5tqNWJ4PgRnRiCkCKXdgLUYKM2EE16NcNrdvdPGbppopy",
  "key24": "4WFaVFpRaBUZN56NZYE79PjSGushHx3V5cVoU7SUZvqPeVaDrsf8U7bskn9uJZvci5pG6bLb8PAXesNCZCSMnpG9",
  "key25": "2CJD9Wn3uEJJ4K9TNvX5WvqL8rGGmJixZfWf2Txst3qyEw3CbgZ8GyBkF1PWus2xoxrCosqnQLoYmLxaxq7Rdd4P",
  "key26": "5ZSYAYVYZ7vyGYxuoWo2s4jqicb4GDEgscSSfojfJtpoXK4fRxSwMmvVgDkTuMbUf3uUWJvWVAkvJs6g9XBER2vM",
  "key27": "5aFJQSghKuA5GveqhmXBZupEQUQrE4eaiWq4fptNhFx2aEpNxoHyMoU8cD8d6fDkthy9vKk3wSXAaScVSxvrfdE3",
  "key28": "2XLi4hRuEAWa5B5aXbsRrJyf84AENJgL5gpyWAXJLzwTtubpPkjMdwrShCn1FZ9a796chdMAUsass2zHwkpPECfC",
  "key29": "2KgTsHY3B51biyoMQkaF9EfuAVfs2Bz8ppFn1YDGw9dKRNuDk41bBKSwVPxQRzSEUow1eKUXeTPH7MbE81LHZZdj",
  "key30": "5nuKmm3yTLT2ca5a3bsc9yTUDTVMMFDnA5S61iGZndLrKcnALC6wYztk4HwiFMEDa9VAs6LDRtQMbWbCuQzCeQsm",
  "key31": "4aYf3YgCseGJcUjN4rJ7v3fc1TxdxBKzHVupvHw4zMYBL4RWvTnfbKAQiqT6rpDLqvRWzpUYgMZZ86pAdLDLNjW7",
  "key32": "ybktT1rt6wR1T92QsVb3dhjGx5p6ueWW2Zed7YJU2Awjic76uimdTc9HZisBqMcYrQ1SxriSMtwanLTCqvczGMo",
  "key33": "5FqyJVyduywu8prg5PcZ6Lu6mWz3jFyuDZ3CXqgbRmKLxCWTHwo4rLGqk2mN8kDw4pcjWfmAjCH2kBpZWW4p78zY",
  "key34": "3NpR5qn2wvQsNmk6ZJ6uLP5PkNhe3YG8fhCJ5dDRo7H7HTcSPEzvmzP6Dv77pUk5FbuAF6zVgv4cb9nH7X9VKXTE",
  "key35": "3tb7HmL3oNuEJ68MPfo4pDUjoWhRRQScPxxgCYXyuPrYV65TGqwNZ3beCXCeYWnx2gFzdNAMSQ32pjUggKGqFzb4",
  "key36": "2EtybhpbVVdB72nje2zTXRsm8N3ox5YpAb7TwKs6ibnvMkAVu4RJ5SoDPhz1piGq4big5tBd8cj7qmbTxL8kmv7L",
  "key37": "5sPB7wVfESoUX6Q9qAJ6UXnxW87p8fxPme6vjERem34bGgQz18cbETANMgPMbaJEhPGJt3Q96LecAAobYd5kFALb",
  "key38": "5QjHmtwwhFrXpM9R1ScBB48H476DXZkTbeVjQk2nMcqmNwM2uR2Xrd9Ri2agAqPdkxH9KBMtRB4ngnyuEpP7Rep6",
  "key39": "2NWVfdJb7E3UJtd7UjMrRwS3pXjcasUoFku7ciZuMTD7vhSxhqfS8XJFPdgZ92X8n51tiv3Ta2LUhrbWmFumrtRm",
  "key40": "4ifadg6z83UqWtPMXcFGaJXSAj3DzoooWfYpzQXgKpzZhJwYvNcKxRAj5givdcXwXe3hzSmzuXJjsk2wCCteaxQ5"
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
