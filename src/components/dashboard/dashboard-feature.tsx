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
    "5iSMHnstqwnPc1urUhx6z2Zv1vKHDqxWY2ZuK5XbycsU2fzzTxdMojNoptyVWsepGfrAZ8t2SdeJMPiBqHCUHhrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dP7VvfR2tULKqfxrKcTExWqZSqpDkpAN2KH2btTbjPhaAKLTGS8gNjaw1FZ3FcW398efpjSHCCH7TPorBo3boHf",
  "key1": "3FCFoRFpc2gVZyNq46Zm91bJgU4kiARxDpcRZBzciMBkhSH14M6khEEqv2P67bX1VbUAEDZnVCQ58Gt8Pv7tAmXF",
  "key2": "2v4S5vy4N7zpVr6J7n2dncqbsJ7HN7SjBumAxDdmJj4crFRLCo3euUj63Cae4Eu5wDUGiV7ezK4nBZUsufX9wzGe",
  "key3": "54Jc5652e7E93bHsjChqfQvnoh6q1WzCkg1Dwa5tzBHKbfQa4gFqNF2dgNLgBsdEZcpMkJzPpEN7u83hJQNtR9qx",
  "key4": "52xKc6LAUtTpkJtva6WGXuQZezP9yXBFtZN19X1iUMCwvNrUfYRSfo8bvzMfLAh87KBRdHViNLN5cNi5tmCjsSuE",
  "key5": "5dZHrMuLbZhHG4sCwG9fX5cd3aJ5naXpftcY6cbqHANb3TytCH5iGziXzsTLUXB7XwRPAy6LPFBNKW6FtViUBTM1",
  "key6": "QjdqjkgDSRzfVLYqhuhPYkidcHMAD1ytCTGTAhYMEhwU9kSHRBX9tyYNFfGijZwb7Yhbs4Nq77H8P4ryqkhhUY4",
  "key7": "2jnAwxCCTxqhNRTmqjiacCPVh4fbGGM2fYsGCcbUMoZnDAxEGTCsFDTyfH4whgHB5K8JYa9PRHk79Pr8JdBLu4F7",
  "key8": "5iAgNKE7iQdTd4imTAqHSHp71YVCXk7vNSqKxpuhqWS6TuRUnp5YTozhz25yP27eRbz7a64EBJRVB8QHUg3VfCvy",
  "key9": "4ryaYcgx8CjFFggZhLiVZxjZnFpVkooC2s7a7zACTHvToCUs7nfU4qEfSvFoJhmNMjSiWwaTr1NEUmFL29DmdxUg",
  "key10": "3CBzZDM24PHSvFN8Rt3AhVubZSiwMrgaF4keL6WHJWPVMF8o57J2sJ8Go9s2g9UYEnrvusZBVjuTUvPipdYJ8NTs",
  "key11": "49quxUPPMj4kvKRE5Ru9smURdGhrpUBxrBckTov45uWCgkni96RZ13ePRSw26PwEyqh5tAkABxsuYj1YYKECVaJq",
  "key12": "3ryFxNmKTKNbqnSGLKAQS3E2aAZPqKpVsgaoakPSRuViEbjarXzSpXYn6CTiQWHQULY7VYTcfF3TZj4hfmA66QDg",
  "key13": "5sLT4KSD9SCLiTRXXN4pZzerEJxeZQRU8DBGPLp2YhtXkj4DdgoV68J6Q8jmeRT8wjrEEhRCWLxv7geG3QCqHEZU",
  "key14": "5WiuX48y2BM5EKFERxmoxz9hvUYauSvCSmBVVFZQ7jGF6mTcbqKifb4RAwjCc3uJBoqmSDKGCLLZfYPUBhCG1u4v",
  "key15": "4cKykfCEBvwnXVAc9qBynxoAWxqq6KZTeXUGnAUf2jX3d5a7Ch4FY66mZaz7dVw7pzDJsaHDLEt7RzKLvnj9mzvP",
  "key16": "4jLKQhKrN6q3AvZLSJcfdJMnWh6aNmrurSadbusFTPXT6MJ69PsDJTG4VuWU6cGpJiHqrsAZ1pXi1XrkKz6GYEiG",
  "key17": "65punG6zw1o9aEyUkRUg41WEyx5mvCxgt2rCBzd6LooMCQi4d2BcEF8PEky7xxFNTymDFN8RsFvV5yx6e8KgLxTW",
  "key18": "3vxWhs7hnEzFupi2gZ4Fpch5KmrEsbzZbdhvzXutANHDoXzQQxWmucZ7Fbc9vr3bw9xxtkUCrjrqYiEUfWiyBo5r",
  "key19": "4MbVRVUSxsxx8zdNFty6diWnpzz3WfwLAtvsVLxXozSwYi2LF69WMtjtCUCrLXsUsx5dD2pyrAeYX3PPxc8khDD8",
  "key20": "5P1bYhNWuRWFHmZikQvK8mX77ctieciU6KNn35DurW68LfHbTUhudyXLjHX9N8kaUtPoKGw7uvP2NQnQ7udixKvb",
  "key21": "5zMbsYDAWTuaL21AAhuSywr8eFnrkebq5V5hTQ9sgGRp5uuAFCahTk7iirQbdBQ6vQMA7JTdW7MUAp7irtR6gAFq",
  "key22": "5DLvoVaHN51dnhsSytRscnnn6qdg2HaFETerj3r6reWZnPc5ZWVhfqX2rN5r2T3VS6kp5ecShXCD2T7RcnTCTqEq",
  "key23": "LGRSP4LzHxFkLDp5bV7EsEKmnGMUgLuPUn5g8tz56ieFgnZgNFaqKu9Xqmxj7iof8WbQw3WEEPR5LRQXJtt1BTu",
  "key24": "EnWUMe9wbNXYhW3zyyEbkbSFqGuq58bnCWrwo6fTMW7fwN2GzWCWSXPc4iNB9g76CYGBjxmWWnAgPBogzfgWjnv",
  "key25": "2LtLrqo8WCqrnEr7CuzmAWQHT76YZkGq4ZbGVmJoJuY4ETLQUGPkbytbJDy2mKagYmSbaN13fxvtRbjimosAU5St",
  "key26": "3eJtXWhxHbpLkb6S7m7VEmkKXxZyjdmm7wY63AGXwy2Ggv163sPi8fPMVdNcCF3qrNBF1UgmVkbswk37Cku5QfNb",
  "key27": "oUsDiNtzCzrWszSd4g2xHpfiYN5ncztCyZ4c1FhcaCLXUKxU5VUQuJxk6pLdc1cga6KRzcEfQz5Uy7TpomNvSsr",
  "key28": "2xZ3QNQX9ey9ARm62gpaHafXTTYWkCGAYncWQuEZuoF2N3mqzW1NrqRvDUo9hFJn6PxzZeU81Yhp2dJA9neu47yz",
  "key29": "2UAkQxdCwk6DmAcL7h4qW1eoZKdpuFvE1GCV3SoJFfjULmYHW1pSqnNNPMgzF19kgku9nUWjkKKUwUteRCmRogbj",
  "key30": "2tWqMQmh3SGSGoc6GrsChrC2KyTfw4yDVJ2kj5CJr86UzhuS9fGp2CHvYmTMEGB272BoNDsAwWgy5Hd215WshhJn",
  "key31": "2JfBsYuHzeeHuRoeR3gv4p9Cfmbk4jiuYWLD3bGnRoCCD3chZ8Ve18PPneprsBuVj5hMf1uuwvZGfcNHLkQZvxNW",
  "key32": "4hmymLLRuRvpWhGkDKRRkGEJDXdM3H5D3ggiYnC4FrJ9ESd1vPUnFz9FG5dRTKQPGoMYWCUnDM2iRyneK5SLgKb6"
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
