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
    "3TdLfgzPEpFf8ivQz2EvpwSj9MP86XALqvinKPFzUSnWYuMJiV3j65bfSu4WeV25F9ULXjVVjpTxh8hPk1qXX99B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AtGfmKEAucCrT6N8stZQWve23gQ1fyd1y3ProEypSeyPXeZA6NEYgxStXNBQ7EyMLf9fZHRkggBvqdV4GkjsSK9",
  "key1": "2xFFnB8wQYbbcR6CrPnLh7rXfPiN3NXWddYysDNPR576yamaJM9WJjCYW2jLuggWoc3iQbzBw241wfksQjhpC2bx",
  "key2": "2cqXeMHWifzL7jhRck3ko9NJy9kokohpvXM9oCcejGqXL3Dxu18iRJutf8hZTwsLrHHGArViTPi4DBC5vXaLURk",
  "key3": "4zdgjt4k6yS7NMQA4u2M9gfHk1JAGiEJqmiV3fpTr1UZyE4uEHmpLDypFk7uLtG8uJhYMacfb9DbUCf6e3LF1qKR",
  "key4": "u689uVxqmAGJzzDBnF1gu348t1AT6YvJVsVMwLRgDmhvH53sUSCkEFup36np28kA16MQZz1G29BwviHKZHUqsE5",
  "key5": "5gSHnp6oWj2Nab1afb24aFocRJx8AxaF6MDzewLxRtDBkbKvZDXJGNb6zuNaKR9XZqVD72gWami3wvnSGyojgFPH",
  "key6": "2gX3p6HEMLwXPoPDAUgwEPhYeAiKGy4bcD5oqYMV5LpTGeGKPnaLfS88W8dQDMmvBhiADq6NQvGZc1tRbeLQJmzc",
  "key7": "4uRTCSuTiK2x2ERdWvmiBxtBmzF2L8CaSNL3kD1TABVYzPn3CV8RvSKnjGxRM5S6A6YAS6GDmZGbdxQWPWMVuWJ3",
  "key8": "k5D5wHBhmmok94v5LYDHjdfpt45eapsoo5KFPQGEXworcR5xcUe4JS7h9qiCp2TfGob6KG9YSFgVLobQUbpaimn",
  "key9": "5pwdefBgTyxwuRgZA3Rq7JzNjW1TLQyEoUYjtYUyB9E4HA7peoae2HLhAu7dkShh7jZJZwXPMpk6brLJkkh7qQWs",
  "key10": "31zFen83FLsoYsAcbS53X8zawYmVCVXs1HHkUtSULX4ATguPR8ZmWjp5D9na7Zj1unAsZHVb3ApgvGWJachXZgwN",
  "key11": "5mDvYxQWxVmo9ef44oMJbA8U9iQ5yXQD8D6giSFwoPcSqXbjHJCR4PCXtmLBdSJvFHwA4WnDsgRx61SrPqtWsvTG",
  "key12": "5fo7HmuuzZSQUNxhRmSpgdPoGEWLPcr9wKntcAPrzYkSMtzw5TKwQLXg5vprHEBj4MR3KUXzj2V5urbJj72CTxPN",
  "key13": "5ZASV6ji37UAzXib67mSfJGTkWYhQeNNzr4wjcGENcFcypMtBPqyXgkMZiwc55H1LxUoqz7LMKWTzd3up5h1utJH",
  "key14": "2EXVCGwNU4BpShwC5F67m8QXdx17vpCEvUNCUYy5JWZPJBrwHhWEKx2RmbRCmc9MDht3Qjk4pHRkqPUfmamYnDPo",
  "key15": "asdirpWyStZwFCAM9KpkXCUko3hF74bjU68rfZBKdw7YpVdteG9aBH7fdGp3ng5k8Vh1DcdZWsoaBGBKjWAqtEy",
  "key16": "uqRaEwv8Uu6nGNjkz6mKAXLB6GHWxTpocW4gMFnUKFJZvud57DXzK5KL8icR3MX6vo6HZ5MwFP16rwsfm6gMjJG",
  "key17": "p9PPpDuAUCdePVFofQ6sazfeEaUhEva94xdggUKjmKMezBz27L8ZfjuMuCX93xwCXVbU4kkVvCVPFDL7LLHK9ty",
  "key18": "3rYxgEQrVzeF5fMWvhmNuqVtcj6Te2mazm26b7DMRSFzsN9iPitXEcAGYCymSJQhigjMc7CLB5HUrCYGzqCpgd7d",
  "key19": "4NGurFD3MBgZzZBgzz1giLmhmUfdCwDsU62UnbsxaZUqs5jsbeQtp1h1p3WRbyCvtR2PFwE8wjWQwrcX81tTNSS5",
  "key20": "3sgznduDLD2dR5rVV2wYJ4Es9C3EPaEfWsqtT9qSDyZ7Tv6a13AuyuJE2Wkvv3vNoQtp8i35zzsGbCqxWZj4b1zs",
  "key21": "3jvYkrWNhoYCmN8yXHtirwv4AJXRnjQpjTnBUEUZZeUQjqfHCFFLdmgQaZQLWp4QDnjiqMBK5eRJFnA5njkcn3j6",
  "key22": "5PXq1LJq26qa1pwKWRdXNednUq7Eoj8d68fZGNTAGNmHBcb6TfTfFjPPNcST31Ko6Qb4bpmEgwyoUWm3NQkygxPj",
  "key23": "4Veg4bEjBr8M5GmpqJVv9dXibPwbSnJduxkFtJpPVzCkM3eRygDQJp4LoTx8c49hmoc18rAcV55RUBnwAbpD7PTe",
  "key24": "3x16m8Z6ZJr5b9GPXSEh9YfEuckwbk7p8rf5WSzrxqBL7qwLY1fkPSyT4dtzUWrrZepx4EYCa8RWP1GZypycQsc2",
  "key25": "3HEsEofgZicXjJTs7ykcafNVXi81zbj6EKJFqn1fCtTFBiMXAp2SpuEncX89JAGg9XMYH4A3fnRZRQik9EAW8qus",
  "key26": "5hG9w9TbssJmj5n3MtKBG5qmH4X3e9TJpvvXTGKVzXYkuWEDiDzQeYrJnHfDFKzggDRngnu3SA9uv2iQwFtqXAcX",
  "key27": "WQZKGiCLHkfcGh3adoWo3WiEK5bSjaZPZviupdT8FDzgNNCwDKds2Q2B26hvRHMFeiCJi1YdGveCwZCfKJLv5oM",
  "key28": "5X9qZHiCC67yEhDhDEyRE6wyPtfFANp3b6pYp3Mj88doZxQ5EFxVGKs64xQhhaEFaz9EUrt6RnRREToWVctzCWAb",
  "key29": "5mYqUjKKPJq22UTVgUK8Mj1CgrtmJHsK3QnQU7qjHmm2CtoGohUvMTvp49qMzh8Saptsmys1JB39cF141k87UeFP",
  "key30": "3ZGDd9HWygore2ZXqNjhGrgmry8ixU1WcZHHPwfUQCyZJgGMqGZHbZgbnrFxv3ciJVvtsfhUuK9QKxtosgTifyYa",
  "key31": "4DzjDu862LqSLAxnatU8qBo3nXXWwuQ8WKR6Woe2aC4SjGhUHA2xNhCyXhrS4Ft6kpkCFtPSfJ79oTibKVma19Q5",
  "key32": "3ZYkYQRyyBa4fDvUN2Jucy13Z6q6KzdPoCqsa8nNdbb5Nk4jEKczk1vbbo8pU6JpX78fxhANrpWeYpaSMCFpR7XN",
  "key33": "4YNUGoQQwsSE42Vx2rd6YGsAHHaNyAFHUZuvWWns4G2mHoHhZcf5mEjbgePQGPoLBWLsJMdvF7tAq1mULhDZNKCG",
  "key34": "4Frtxxia8tShfmH9jp4WJcDGfUP9pJymGnfp3YT84HoVJzmbG3HDMs8vRqjUxDGecHk39TEKEFJm9xnkVuEmKtmL",
  "key35": "5NbLb1GUFSnC5z1967xbRqxh1aMaidgHVaRa3Yt1J1LFU6X1uaxiT3xjiffmPR2LtPKJGHrcFSqWP6mN3Y1ggfCh",
  "key36": "5kNXGcveZsspMwTtx6f4r58ggCcJgYYXzD2s3LUheX4A9Bu7CoXDNffXRi6bbZ8xxfDm5phR5heGA7Wtqv1qcNTW"
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
