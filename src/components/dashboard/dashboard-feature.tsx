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
    "9fMbCiSkajYCnkEyax1Y8DCZGDgbYjQmKtFe56zCNh2T2KBktkeF9SNBySksy8Ap8Rgo8FXUa5KvZJK5dEA36gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwM4e9fRXLXtq6L4PHoQP17yjVse18D6dVBryqAwcLDEPbVSDkT78Dxt4EeucWqkPGaXThdj5w5YHC5ZLTmbnrJ",
  "key1": "3X8dquakPg6tknu3wXB8KumwCPniHbdDd1tCPMALS9appaoQT5quTQRro9K4zCZzmq4SVYbxT7JGzQ2urDjJvQAu",
  "key2": "3DPDR8tKxyFG7vw37C91Xgw5q7vTz4y7WonTg4dVHkRexhFTxg4ADzLkxtbgSZJJdzPENt5c231mKHeXGVkXf3yn",
  "key3": "5uh3gi26WQmg9sNaWswJRBgM9hutEqxpRT2bFHDrW16tvsu1kN6xfqhdWXGDftkkEwDgzRqcjvQiAPMgeH7w7m5z",
  "key4": "2nmcdDr9B7TZa2wjYG7b6B37WMnvTPqAHDoeSXwoVBtPLHtnKeyzvcbbqdzzawfAnr4RTcuTYiZtC8APjXnfqa7w",
  "key5": "4ENfwQEeZNJ2RWHwVPqNvernGjtnkwuq4wt3P463RPn1BoChYrerZduV4ZqmMmzm38ogXXqtvPbPneijhrW15Bnh",
  "key6": "2JBer8Ke6VA2vXwUAjZo6ypQzxzfDYiCUVxBKb6mVPkNhv5xvpgy5heJ83UYFACcmG2Y26bBSL5mjUGA9dS7Hfo2",
  "key7": "5PscCdgX7FHzCfNFZEeNMkGTscr5NVRLu8UoNqebv7Qw3MtckuFfmVU7fqvswARQVvpUnHLKiB23bdVEh96kJM7m",
  "key8": "2ioxy6GUFJWyffHHqToGkhuvt8zYmVxMgKC627SxZf7MMEaGbb1xxZkBkTDeBY72rdDrg2CFqhnDVMsgQM7i1ZqY",
  "key9": "BhooyYUhb63Xk6nyhUoNxQj8cSu13ycgS1aTWY1nSj36W5fDtGfiubbe4Q6rMoyogxxS7coNwzePnChQyrHeJhQ",
  "key10": "3yoZwng7efwcKhL4xBXuAbJMtQbsxDqMnbm68eo7VF3mC8c7v7v934c7g91b57GhXmLXFwNKEevnX8zSHezocz92",
  "key11": "SMZ62KYRsoAi6FQwdekW2vaXMpPd7GeTjJHNkfo5yuYqrmhGDdh3Eic7ozASXbZBcUR9Dncr2YNuyemc7h9Z9yc",
  "key12": "4e1xqBo6w54qUfj3xnnz1nFvxus32KJBrJ4XW3ynYY2ZaxZBQA9QUZFYCvpgVLR4BPkv6FJv17HmjE1zv2xCKoRb",
  "key13": "3uwjq2CYwZ1guePEDUYDf9KrsyFU2XEgi2eDNatHWBhRtQnVVDWdLFv1v3Cb29YWWEorqzdy6rcPQrtLZ92ZZHE3",
  "key14": "3PzCZmZ66oBd5QZU96PoAy3TrkLsq4QhA66rRZGzEbiLtEhy7V5mzoBgF58feq4jh892BPxevLLJQQRkqbCC7Xje",
  "key15": "Kjt3FtL13uQJShm9h76tSjmmBLmAntW1CFUNFN2TBBav1dPLYx3QaZH5N2AVEJEfafkCc898C7rzm5g5o3Qv4hp",
  "key16": "587e4hk1akw1iuB3SGDndgTMj9pnM314jtAT77NsUBwkyqo7PesMCC74WcaZUuuJaouGV3e15zip8GAYGdzkbChq",
  "key17": "3XWV5nPCre8WHLvptmPtPMDS67NAxhDg3CPCmMDmw9rP7mJyXhfbP2QPo9nBqgSQjT9AsgeL5Zp6QnXfgeTvSfxw",
  "key18": "5F5qkbsBa3nWbtKVQaxParPW9Fe9FPcKjvdPfj9Wcfqcc43Hdf1j7V6CMCXTJp27u7WfxDUARuKqBsSEyRYvTs1w",
  "key19": "5vWFp3BM2FRHVmxhjPHyfV3cMSGatWT4qGTZphw5mdSzfWTuXM2aSQmH2ZwKsixCNRzqytUJqUehTaAZSetUAnn5",
  "key20": "2Wwm3WYFcrAzAVPHZeCXKSDQdSuuUs51cCNnB9ragH7v2SUdaeBTyEtCGd65qkbjQtvnLPkrUvR9Eo8kwp1FsMx7",
  "key21": "5bquXhk7DC1gokmQcVTzuN9LSu3LQkYaVN1FmpMQtB9hQH8iZbTPBDoag1mN4wd3YUz9J1KvyCqwhCrrLhBXneV4",
  "key22": "48gcnABNRgWvPWxChgcJqswW8qJoB2oo1NQUPP6e8egZBegnsdkZ93sA2WRw9eBatyf5VMBnovFPKPgkWKJPckxe",
  "key23": "5riV2vQfbYMggrGTQamLfHFBDq8R3q6wy6X93xBYBJgc5DQLZcRpqp23CZe5VEm9fvAZeh6cCuqyjWJ2jpVBwLcC",
  "key24": "2VqnBuwww222g1Sp6Aa5PySvtukf4XKFuK2DAXUyhWs9EchEBnr3znPNPpfCLHWtwyefLHbaG8yLMktDeh7bTmSr",
  "key25": "4WN97uacC8BHU7dko9cFg4cDo1xNzCPCWffDZocc4trX6xFDCxjf7waC2KBeN2wQqAihXhezZUjp24jxyfWjURh8",
  "key26": "3PdWNfjHZah3PkEJJaSEta5YpWtkF5uAvuzmqmPASPVhXwbjRjTtLxGmg7TkamopxadTC8BLK1nqQxYTrhY3baM3",
  "key27": "4dEDx9sCSuZ3ZefppRCrLaSJmfn5DYmRnRS4NZJUyNMDGCMWgRcJscYAxA4mXHN4iHRixCsXtj67gJ7DdWwzAePK",
  "key28": "4TETxXur3GSqykaGwuYa2pFPKvb6qjimEUN4tvHtd97gXGDcmjbQMfBawQjUXSbMfbMXfPiPqMh1AVcTsW31NKZR",
  "key29": "2mRBu7251JNavtwr2WM26fu11xygDAg5Y2LBiqLC8r3RVvrpHsWC6CjkiGpDNRCdprZbrS6SGkBd8yUMqECmnW9j",
  "key30": "C18PA2ik5M3pymNTArLXvQpQ4fK4Lgwv8oDWx6xdWknsT6cw9ss9MSKPcDyydtZt7K7sLwWM6HXEpRtNEftzKqU",
  "key31": "5ixZmqvMuFYb4XyHmedWPxS6nJzGx15HsVAN7NuuE4FwxWQwxQiSTU16E3C22RPoR25grisSonaJdNWd1QbKssgy",
  "key32": "2FVrot7hRMHnzCSjDavcbKxeyVnRi81YoNSqz1gsx7DEtT6JTbBBa8T6P5ujs1DoyoePhYCqyWVv18LFjcz7h8fw",
  "key33": "CbdmUaVS3eBokoBpDScLxSuC5UQyEmmbCuqDSC9nzCWD7zXfKUCbn9pu5Kv8tskjGRLoyMViaQKovPXMvy5uG9o",
  "key34": "4nFAb22d41xXucVW952LBLM19VEqU5VpqKFtycjjd6uEBJ31R5ExC49umk3weEJihQ988XhYMmnTbqyANVFSB13s",
  "key35": "76FZfFa9SJkiNum1bYW8gA8djTY2LtWu8P1MRq8RG2oxq9RVWLvmojUQ24rdYb7kZHiSw4U3xw2xxSLHYfYGctT",
  "key36": "2qERD8Za6HtvrmN7psgY1JpPQQ7DyrsWXyTaiz7VMRZSqUxwYNUUAKsjDNVfg8PvnXEwqcpY8GEQLP5oKWCTDpzm",
  "key37": "5ncdvczfTp82HQG1B8ARpN7C5Czzgxbkoiyss3oAokoRi4CGk4DdDmhUt52JuA4yv6UfMUf8R1xCsv1TApZaSYja",
  "key38": "4ihV2b2qV4hH9STaezKa8YFBoHyLpHaWeQdN5dpi8Kma2zYk9ATq1mjt95uYbGMvwhZmtRkGd9RF5qAxxLpA5NyM",
  "key39": "22f64CfPfteXAH4dUZgq3iGLwAA5zKN5ZgGNKhkYWFmkvbfh9Z1i7V5uHKdnZuvg53wbK338V3THXstS5B7ykWae",
  "key40": "5Usb7fMCxDxgJnC8AP3mH1YH3CUutjXE4hW1H9VU8xiyqvGEAnPPEpBX5pwM8bfP5BjZp7gZjz5UuwyYNAKDHJBL",
  "key41": "2vPwGmCV426eNqVhr6Dn7xuaqjtWqHAh9zCfuMeoUpPRbQf77ajjXbcP1QBnaU5nDyeESaYiapDiGBsUMnQCsAcA",
  "key42": "36hzt4GXtyKd2g5Aq7nrWYmLJZ6Bha7ES12VECuc5YXXDfU64KDzUD6WQMiSAu3iCTT9qw52zCyTu4cYYyaGvT81",
  "key43": "X4EqGmvuJbTLv35gzB1gDj1baMVoUtv63U2eEMf4QWahvkaiaEqrM6ihfHDxr8o4t54Daw7YSe4aYDMCen4fE5g",
  "key44": "2ohJKfYa1FG8G6QwWiLEU3qrPWDQy4Vi2TLM6kr6cmzC6M8imiKjUBDayKf5PjPvinTScydCGkAcv3xySUFHK3kZ",
  "key45": "FzQ4aqiVdYXfNaf1zfWqr2uvpCXqzccSZGdn5NAaAhGEXD5gac86CYED27x3gJ6XtmhQ7un7r3KhZ76E9PTJvgF",
  "key46": "3N8BgtxmoEKzvQmXQrnoZUh3Txz8RGrF6QccRqYLdCSXc96wLpAdBXKnx7kKPYgQVyPDPMksQCisdkhrvLtxZ8oA"
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
