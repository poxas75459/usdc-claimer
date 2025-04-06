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
    "672Ruresr5CB9HdQtRgHUDLmQkUvdYUgWactaVgNGydG9tLpydoYTjtb1xLHaubpf95NxZrak4eknJBoHxby8hVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRuE8kncy6EcminK6U5jbk2fwv6vvigc8AMasSF2xPnDMwFUFJKmaRgkaMS49qdf9dcuTR7EHLh7PFsctm3jwq6",
  "key1": "3LbM6oyp6sH3YunYPK9BfmikQw3csEZtEnbzu4t54fGFD25LoJMzbbGdhjQzvofmCoYuLJizCZGrKYi9hXfDah6Q",
  "key2": "2BHRvaXPrryCa96iKi4im9Nh6RYfsWowfdFecAjZWqL4b1ppwzyUDJE6uccdHtFanq4btH2ZrgfGuiv6iYJnGGoV",
  "key3": "4Rtf61Wx9j9WNaNT5wc6htsrfVQoYNdUP21ZsEZEDg2UkkqEFiC2VtZtFCL2UFd1fwgj85iMYa63Ei5FSWALNXM1",
  "key4": "5XPze2U4sVeLagchqN35kEP4ehhsmSvqkkAaZdHSP8JFBpyWxKnYEJ6uy6gR9nDdDGLTpJGrj9PeDXbDSqxg5fCM",
  "key5": "3ZoyeoeJWTQB9qGkVAqvVQbonPeawEsBPHkaXgdjNAtoDsMD1AKtp9KU8xn71L4rFPcA7yD5GrwQkE7EhBYJP8Gv",
  "key6": "3ENM9cvxsceKsF1nHhvJrDTQatvtfvS2RMHjqH4jNB3gpyUuHA2aenHGBgFaAWFv7JJMAyXenSgC6JjvdvFt2xkX",
  "key7": "38t3DK3Du53Wfm61xPT43Yav5MtnfRFQBzhqSzqdiXcc3kX9M7BwtmEcM7zV5Xjs8XDPXLZJpHJqG2E5CSKbCLcg",
  "key8": "3UqXC4UbHRc8aj4RBy2nFCns5EUSsjkxbsqZ1SRxL9H5tFe1QP7PK7DPwfkExPXePftaRCfAQAQ2oU51cHk3fAef",
  "key9": "4fYwc9i3dJzvKaqaAVC9FV4j6dtVuXRVEHCrcph54oNnXccqeFG87ffydAhscwdrLQWnqrwiNrE2FKUNU9XFXZY7",
  "key10": "4yEdphjRCVbYDMvrtPd7gqnaNscHuFByD1oVuywLDpYXp7Ejds3DBYWy4RxoqBUAa6xKn1uy7Sk9WX6MhK8YSvk3",
  "key11": "4CsAAWXcZcRqroqRXGdATNLyQ1yNLYwC43ZuaBstswAQSh85M6JLTbEHoEijZP4ZNxvQ1aZDAEVbWr4BfihRbDCS",
  "key12": "X56J8YKEdxdRsoubKfi9iQf4j6AQMGNaMMABnNBjwPiMsoeAqKNBdG6qJ7tWYqesyQucJwyHDoNfRYShJnCDm8k",
  "key13": "31uMgpqjVfF4VWRFQHzgjpjwqgXDhcEZJiyQMTnwQnsDud4r3e9yux2YPx1gK6wGtf5jnegE6WK3qPsUdFp6waCx",
  "key14": "5ZNjjqvP9w2TvwxXt7nuGuYMNt4KWpv5MGyBD9dvY71BZX66qCyUAnsLSSE6CfW9RsHJG1DhCXB1Fm9gqVmi8Af7",
  "key15": "2b3eytcEhGhPvmR7S9RTQoJgiytqPFyHVehNvDZ5iCWFfi6rFV6gnxDz4R2iHRVR8X2Vwg231V9rwdRbsrdk7RUc",
  "key16": "3FT9HYYS5xuQ7PuNQ2BZFHrWqoVWSzZ19wv5RKgTHgJFeRUf6CFgV2APTPDZdDvADhMnYQCz5E8ryVip5pEHgu7o",
  "key17": "34LHVDkjbG95cP4bN3kjsMLbJkq8FxjkJPAiNMpvvuQJuwayZtrxPxzL6TtPuyZAe6yBL84ipL6bbTx5BD3z18oy",
  "key18": "CnLSHTp7S6us2j3246S8rFiwTg6DiAeoBG6JiGDShymGnDopaXtMPhPwYBfFEvj2CerRehDBDFBThKx4TmAyuuq",
  "key19": "4C45NgCxphsqHv8k2vzg9HoVjRUinKWyz5f15KuUuRFYvVXcSjs596LjyU3FWYfysft7EsbTXkrvSJGbvHgAtdLe",
  "key20": "5Xe8BN7FUuGDtLyGySVPFW9DjbdJfRNptV6V4KQBqXMi7S6jiV5gEjAa65GWu52KGZmACULxnYix9LJhLEbnaq7z",
  "key21": "4oDRmUiZjPrdBm7zhq8TcPqD2A3fN6A1Gf6hfDaspmkCLJfsCvcSMiAP41CJAHXLXjma5pyQBVSRBssfvi79dkpn",
  "key22": "3qmcT5SF7N1jYYa4827czLgs4L3viYQjHrdxfg8ySKxveLUE6McBtD9jUksc5SiNiSQS1ioLjtrmZ55ss3FTyM9a",
  "key23": "29wjfHjoip2siDNwNogMmp7bLkmnTxgLz5fdyNCP6KLBn3JrUtJadeczJ3LLHZKp24GyRqss9h6DDRSpPGsiydNo",
  "key24": "3w7AcHtWfgDidRTd51bhJKE9LFfYLtbpBPkZ916vpfEwwn2Vm1ygMTDGfr2Rx8qYv88cVove2m8gxQLUYaN4fb6U",
  "key25": "5CQcJPhy2tuyU3KPLYTGmZ9YicuHeMATzdyqTWJzeMwDG5iHWdXiXDCNjaLpAzgcKJ5PVLSnANUsLndHLQjheAC6",
  "key26": "4t78SHkS3zMctg34y9Y8EnEh8FLTgU1SoRi8Gyh7eZhMujMeZZ4yExi6YgepkUsgSaPhJPFpucqUuemneUvhCb57",
  "key27": "4KRKfWZbVrLFoSia7gZ3hFCZGA9f7GkFimjUEh3oJdKarYTsRtq9suHcimB2Bsw4EmFmhBW2oZVGraB6LoPAJkaJ",
  "key28": "3E8Kcye9yGZt6JM3PBSEetvWxj4djnz6CKNCKNsA1wN93hJcuVpBcXAv5wn4XufkLBnZfWxw4KzmHAcR1c1DuhfP",
  "key29": "5UqvBJ7cEqEHFzNhSdbJjtMkFoSZGBj6Q3sdcKxZtLZ2D3R6s9CNdcKUKfYH7LuV44pUSjmSziBguD6tbxm2bEM9",
  "key30": "4xjuwpMcF16yXScD9HBWvqCgxeqvnGaAM6m4UhY2n47dxrW1dbEaWKf5yhcFC6wwC9BSrvFTypQVYXN5DxmqzScB",
  "key31": "2QAFgPoRFXwWGTPXTEy7wUoKcXMSbzgEc4AtUKsN26ugCoGeHzuRqmah7mXSpGNd18eLbgh8y6nCxVdKA2xg4bmY",
  "key32": "3dvAyntXKnNsU78M7wSUnsiL1WShHvRDCtkpRiwQXCHQxbgNpmZW6Fy3paqQfoFe4Wi3wCHdetBs8rUMjdyeGWso",
  "key33": "2sZ32tbqfcFmJGWtnKZUyGc74zaHFoa2yjyHbYRQn1X49UV8PkY2UbJJXLCVNdneWucq9Yeqcv13hdFmAtFnx7J8",
  "key34": "2AFwPrmucLSrFHDmCXk5eRmk3HCvwyFQqbb1KTSx4nuuLfmn1g7wx8WZjdZnwzvkWNcRt8CB1yiftDW4cSTP3TZj",
  "key35": "3K7tVXmevJKasjg1RBiRcnqGKAyrJTKYk2Fmc6fZRiwFtAg8jHMJh8cgbwcMQ2n4788Fc12916hn1ENTXgLsfbSH"
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
