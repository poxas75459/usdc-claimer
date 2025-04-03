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
    "VukzhLBWiXevFjjDPRE5bkD8aFYJnWQ9QiUgr678wAAEvq5WKwp7v7Ccdo53a3GFCofNUprQDUymjpsiifLPKDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuvw13gfPrnQW9JgXkBP3wVnrz2Y1fCLaXumXXYuYeyYg1fv2ij66jXpwS7KHmiT8GcNVz2hC4HBVdSrmxrE1Ar",
  "key1": "4c4D3dF4cPEuxgYGsbaFJjpbHzohwK7aa12tPVxzNN6T41jrcT9vwyVZfgZ1FZSzqp7gNVH9noTH5w41e2nJeN81",
  "key2": "XW85bxn2rGwyBgeHhpQqMJqipnJDApvuVx1biJRXCvi7FVaVuQhzAng4tBwHrLiPofdh49nU9dio5ZZTDDSTcXm",
  "key3": "5NsmPSSZ3j5wxtKqEaH1NePA5wMfWm6syPHi2peUNHDFhde2GJLET9D2fG4tggn2gsACcFA8oY4iEN742qwTurSM",
  "key4": "3mnXytAbhBvQG2uUCXMJaNX4C6QJzn2V1VpYqoVSH9gGonR99iXZVcSS94gYAzMR379JvgjJtpdHJ6UXc51Zm5Jm",
  "key5": "vPEFTqUyPzkxoYYJuWk1DnaNzw99TXd5H37mqXUJ7DMjWXJaAiw6sJ4g3K59EGoi2ALYb8wqbYBa7HB5cjE5pFM",
  "key6": "5tgVmFyyxSzuikHQEgwxU3PbDXeok8ppqFqxkKGniRwGqwDHotYT1cdCv3S8yKTz6amp85ydULtTj4pYGgAKUJLy",
  "key7": "4Z5vjy5Ss5WFoDFtxVfNoXTgSN6yyU5V8pEwDhQkRPzToqeTkTFDgFpVBLXHTnTHZV7KRtgQibNpU2v4YchVCnG5",
  "key8": "6zbcsNEdWYLYd4eoZik9z64gqMTyF6V1cmkjkM4zvMqBftoq5nxfh8woumGrYRNTvxKM8SxkZK1zSbPuPdg9m81",
  "key9": "5ENGxd3bmB7vwwjH6hpMbCK1Q9MQeDHbqKvcfzoL1dy59twCnZzZjsg1WvLhrFv2Kawsz1ceEweQY3if3dSBVuLd",
  "key10": "5zYcZHLg7guUpdy2k9BPcW9FiAvqXW7S8C38VjE4zhSmisRgEYumsECrBoHTSGCYsBj33eNhQsiHvnsJmVEDVgV",
  "key11": "2WQevWFGCmrfEMTDsdQPG7aNPnhm4gMDKUKwTRCZCpNb6RNCfz2c8A7QNK4ZKSE9cPsdfT7LtZadRfQg3X5fSnsF",
  "key12": "262YKVQ8uP6M4HVHSmkQXXLj5bA3Exj8vxCeZHNjECCdF4pTt5WSoAWeZQriXV7Yygj7qkoSZHvQjECnUeWox9GA",
  "key13": "3dVr3Rt7M4LDAJidy34WRrYpSQ7NfLQARoMNkoisp1LSMgaq6JDjvbpDYoCjj9owVM8hqovvJNfMLvUYZjKdof4M",
  "key14": "4z7EqHHoyfSqMrVVuqinDAWRLW2tm2ugF5Q1vVARpowrFfb92h3dpMpETaE6zeU6sbCbwo1G9viEnYvdV8xgCQau",
  "key15": "2uXtwTNKuhC3Eju5oyeXF4jr6sKLa1s862hMnQUAVjzCMbm7t6ytTMfV5WtkxKdm7busT9jgwPde7uCrsinuoqm",
  "key16": "2seaB42ixA1N67J9H3kzzyYojg699FaSuEkPx1Ey5G2PYiJDAQn9uSLqN5goZuPryVU2ye79P4bRiF7Xj54BiGhx",
  "key17": "NpyRGSC52gJVvpDZkMM34GiKct3fU5sVCAveiXQnrTVxzwwfoW6y9BW7yCjpJc4HeYYn4Nx3Wu7LpcqGBkKhp31",
  "key18": "3v4XZUNLfUmEM8JyVwgQmutEzyaEaZuoMBtWkYSTBLurQukZFTpRaY4BH3XKmJKvs88m7BXSBgQPxkkGWdfC8hpY",
  "key19": "3EnQ9h4x7kAom3AcvFCeFmkRYjZvev3th6RaXEo52KwErdm6VYVtL9tW75i6UqQJ5hhoZheTjramMMTpkGKHfxk8",
  "key20": "4v79dtPZvQkp3XCWj7kbGk7SXCf6BQxanSC5VZxKFzsNpZqovo81kCVkcatdiHYLHfP8nSCp67f5s4RNcAwPW6P8",
  "key21": "4PBHvPxM4kKcKqmaAZAJZiY9Q8ki61yBtQHgwDEWywfViG77XeaChxb1KszcCKMz9Dh57SH5AUZHVAeA1hrRhaQc",
  "key22": "2q6TcVJYHco7rDzGQpdNgh3QXzSqmvsqCWnkgjJ3chXjzZh66WVg3sujymcccE8XfXtrK83pQLiyDGkyte95eFyr",
  "key23": "64TenmSNB73WHjt6E6cn9FWfxZxpQhgcmx29QtpmHJ8WQpzjgCwJ9VoGDeEHNDgfkQMtwAp3LTx2Fa3nRA84eBcK",
  "key24": "2KPJvNb5uZKrnGeJHNv2J5VxQh4TjWmdvAJYjqBK5WDpsyAJ3NE6BeV3atmCZApdumrizbPxfwUKSyofVDwTUcnN",
  "key25": "5RVarKGU833EogkShuqViz2ucNhQsyqADsapaodmXpz2JdGgBC3k2h7FgLnH5frK19JUEJvR9hkQStRodwNxY1is",
  "key26": "2T6bphd2uMe5eomzLPGLyqWxveYxZCscPedXSJSXTF11VTqEMWy1akWBWrGX49yR37Ro7LYvvSfazBsAjnQWrazR",
  "key27": "3VUauZ2aWgAxZTmPnPYeUwChzPEipAqU1xhTUwjqJDZqzRgoTFCms63JhunBNrELdorSv7iNXkqfJMXCWVfvEmvG",
  "key28": "zZv2PNte8cyZF4sUtooisYfM5NLh83jGUyQij6DcecdkZWHbhqeSx1hiV8J2MP6Uzsx2sYspjmXso1vzwp1sKFe",
  "key29": "5BD6mU3Sk4UbJHj3w8EJsNe4FSgbp2yrKb7VY756ErcQhUH49TsiYbX7x6aUu1cPrnsT75USU2ZS9bxWk5tw2qLh",
  "key30": "55xbcLAJk55i76ZvsdxRzZEpUwNC35EPibQBEYSjtHjTK97XbwXLw3zQNNbXnxMF9XzGZXbY5M7EimpcfRfw3eAa",
  "key31": "gQuPc99Lvdex9z2m72EJ3HrtdSi8MFSnqLyX3Pbm6uU4HueW1cdnbQ6kMkYMDXzgpk4bQ3CSb1HRyyC67kJYUUX",
  "key32": "csdbme8uxjK2hrDAhKwiwoD2hLfLcomVKqKCMk1iJzWS7UK7eCwUsDgXn6VYtz3SZJFsLEuJS5hXA6eW4byacDo",
  "key33": "5xUsQvG5GLJBCMfAVukys94MFLMs2CtTGmvRVNoKvWh4L2azM8sMoa1C5815EWEUPYbuzx51nESu6Wk2oshnr8Vz",
  "key34": "7t9x3Y88Jcq3aD4LwVLBK9Pe2w5yHT4rxXnJHRDVUHZcUmy2Fq25tV6GpThRBram9NjQMVvH8BJSwPENTwAZ2jE",
  "key35": "5aFSkrWbpxNo5kYyDebPctag5ZAMhDLCVhuwVZSH6UdmKrPsknUh7KE1qpMN26STXpL3YoMjjLAGfL1FHSUgXUhm",
  "key36": "5qNBCKftFTjk6hURAoDGMY3RknTqsdE1KXXWx7f5SZqj854ako8RgKSAFQndZCrJDaDDVKY1wcjG7AbuY8qHSBEN",
  "key37": "42eQsCNAeKkVC5JVvwbPZNF3DeaBr5kPNCzB2SxsV2uRVn5BMg3cEwkWTHHAqGg8gRvrhNstFrA5D3YzZeBHTXDR",
  "key38": "4Ss1RvBo4ZhMoKqYfV2e5Fsb35ruNdqUp61AnToguhERWkZ7YzBcZC3fntWJCrN35nT49atTbioUu8E4dcpeqMm1"
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
