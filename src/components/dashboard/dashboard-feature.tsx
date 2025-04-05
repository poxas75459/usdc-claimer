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
    "5VimpnsHFoXMPauoCnwN889XvEzv6cN4ctTmcUwSvdNPDxYnPtRripJuNPr58nD8gJ7X8sCHoiVW1i1KC7pFvGNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RX6frkTECvvJeenLgPvKRVMqi56Wvd77pbX4Z66jsbm4frhtTunRynjpPmfmtMMNScLkBGyPsr9MKMoo33JWcXU",
  "key1": "cWyMykJRuYoA4uwuBS7eFaKgncc6GXzjFAdioLVBX6jZmFMjAMgcn1SRQ3odC7gvxSK9RtxJmaoy1VdY5AVpyML",
  "key2": "3RbEmVv9sB54mBH9yW6D3AfBgeAHRoMgp9nbo1trZSzHZbPAADY6NxoDHjVJJnqi2hmhUSziRemqKCiE9h2iyu3v",
  "key3": "4phgxgzhxVY7iVkL8ijtwpBtYuxYzVe7KnHFPad9Xnb7PUhbRCPBZQbM5aUq9CeRYvitp1HRod7uEkZzHi3Z6djA",
  "key4": "22Zp6RMDN5CAEK2zbivHEeQpGQPwx6BFGTBKt6nZfyNEv7c2TjpaN3WwHfmoSrtvExnGuWgrR95wbF6uPkdtAQRy",
  "key5": "48irW3MSXiVnsrgmiVyEzJoi18M5NkU8THXGUVf36m9CTrc9LbdJYEg9AQ9U3Tcdz3aWQ96VdS8SjtrUJ6MCit77",
  "key6": "qoNpomXqtMyvnGHSYbRnND8uEnkXaxAJuofRWdNE3cu1xMisTH8rSaMyaBigdTMgVqBSUf1UgLDrBUr6qezrsAY",
  "key7": "4aCiE8JGfAmw7GHoRwMM1gFs93cRqvmHYd3ZFxYsEBCVpBaapcHRSfPYGZUqtaDznna7ryGQk3Qi5whBLeTcc9Dt",
  "key8": "2kwmx62uFn8Cucn8ebaiPpbAxsTvxCBvmodjRrUNWFaNfmiZnhXWtkcchdFaY3e14suqxGgjQJb3ityBMHWEQUrA",
  "key9": "39nbkLkKwudPtQQVDxRvuLp4H4zSD941zGjRCrs3jH7ngYtV1XvCrewzznN6caGJC4GaMuEvNr2VPRWPravj7QVe",
  "key10": "5nfG712sQcMLjgEFXCDmFywuA6JLYK9rovGitZHrsYRQsneG1CUhqGbjiJjbRHLa5Xa1SnVbuaacZbQQHadwAajA",
  "key11": "44ugvkY347GkzsGK9z5CpgcUctPVqrecNgp4HRgQ4mVB57JtzdYhSTDB1Ya1h6LUYchAHQvHDKQ1fgxZVMdaaMJV",
  "key12": "3tnNmPMfyYA4ikS7Z6rzeu89GMEnA1yVANvXMq9RLhmBb9eoAGWcyEvMnWvkMZLrL8KdNUj7tDU9qGCt1zt8PMyv",
  "key13": "3JnPvVE5t9KGkSoPZi8A313nLgtV5itPhsAVTRpVUcAeAP44h1FG9JLwL69RDxrAkAVjJmPAPwTcFP6m3Aq1tumu",
  "key14": "qE5fsqkv3KvxBCzjmVb43dbozcpBbALA2ADNsaUiotKMZDYHXNhDABko2eKrGKfxFohKCfLqKDXVnD9uPFdJuAa",
  "key15": "h1wvvEiwqTvw3taSvH6zh8r7kFjXArN4ic9w2R9mqKTBVsjKX4sRLNAc7AVP1eyRX9jCcFJEAMotGNVo3R31Bai",
  "key16": "3CHpU4ZiTw8q8xQ8GNbPeY1p2TmDCpPTfMJ2A1B9d4TtJCQ3EcMeDByLBkzK7nxsRXnRuvvi6eTd96MTmD4mufwj",
  "key17": "FFpLpyftek15FzxZCrvV3RQ1UxUbGrZzFUDGcAcVZEc1hurUhpN7cv1t9eGZQtraP9jU3upxNkLfyTZUL1AnXRT",
  "key18": "25vg4M8WeX4e5ihGR3718cfQFMaELUP4bTmznfDBW5nrH9PprDFW58oRgswrg5pqa2xuhbqrQAbF1hVXu3GSgakN",
  "key19": "4jyXrCesLU13syQvQ6HBVvd2p29wANU88j8oRphQZKrL8hyE4cisN38N88nkQ1Gm2Y1Q7YrUj2RvTm2CmFUfFXag",
  "key20": "3bZiEqWKjcDciUnYe7XezhP6iLhvto76goSbVDsrLqTFm7HijyKKZfGR83WKpTr6YNJgDPqEv3beWTBpPbMhKeVm",
  "key21": "48NN1DbWa4x9HDmvWzNAyXoaVjyGL5GpUgkdWS2CEBfDuQopXemhAgeahLKVYgx6A3eRgSxhNV7cTJYDJUyEENWS",
  "key22": "3aehVKVspMB8heM88wFcWsQVQVUCdmfdXHiQQxQyf5DxPrZrH9CwQwkgtRAeam2BEUAWSPsLFWihKDKKr49mQnZA",
  "key23": "2qhfugcwFJq4Wb8s8H7mdsK9hQMr8JKe23KBeXF8D4snT9wQhzstwMX419dVXvMsnEu3BwuJJkSSm9ByMGmQ9HAS",
  "key24": "4jPSUzjpGJSSuLfd4YHfhmZC8SiHnjguyReqreG5HHTx4gMuE15oze69GkRmhVfW2AZX1Ar7VVG7bQy1rgG2a7tD",
  "key25": "5Zki4oTeyte3wVrtDbUfe5zhFd39wbvjJeLekDBBTmgq2vMcZ7JpV4CErUt89FotYcPW3jjXB6K6teV4EVgPP9ja",
  "key26": "43k8fg1tJwwgQkXxo3GMxjeKGSoHJGRdUCigmG6UaTFenG9nnAxwPUSeTDo1p3gVqqkoBcLNo6TpdaBp2F68y85r",
  "key27": "j97Rk8xuvzVXMuBGTLxmxmAafovCU6yZ4WiE3QkhBNbK3HiW6xxE3HhskUjQCQiiP2GM2BLjPUT9iuuwJwT4yAK",
  "key28": "4V5djAf9S1dfgHHEFLVotmG9TusS7zXwiBT5uECHnif32E87MW5m3Hg8CLLG3m8kvAukyjcFk2mFsjVHnT2SqP3P",
  "key29": "3Ez1tLd5GNUFzXLgcz73tkzzoMUaWHBbC4fZ4BkUFJDD6G3Jas4cjmau7d4cm288EACHvqzZn5eMSbuHnWgS124p",
  "key30": "Jz6LmBgu5QiJ6C94yHodJT9bvWXQVHNhyGJx5PMbkusPQgDyx5631C8bz1sERfXxXD6Rihw3nb72kReeZTbEfYp",
  "key31": "3fnmAUPhozbdH76QqTvCb81Ja58gzNeQ1JDhjfswDFRExuXNBP4Jpvd4uciohCZKrDHwEpKQbCPf1B3SuKpxybdk",
  "key32": "3e25EVRsrY8ih2bNKBLSxe62TpMAGjgSvGBsNeR9JwsbsJDqGUm8faawjdKx1HrixUN1fUP33GvPXnk8qZHEQ3e8",
  "key33": "3EnGR5uNfNfsq9DN1Y4QiGrKNRdUTq3KNDJY3D56ztcZbS8SJVVNgGAdJ5RLyRrQsQbhsiVjCu58LmC81GzLvkM4",
  "key34": "5GE6mtDzBaAgyP276E8yAMN7dbuRqXJpVHhNRCRxqQHJ58bAfotM6LUAJJVB7zJxfeUErwZyVwQHV2MFxMuA72gk"
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
