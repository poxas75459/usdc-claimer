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
    "5GfF28HVCf61LgDXUvJ9JqJyyq2sAsVPn8avGCP1EBzCRsdLyt9S44ST8L9QFhSjHSJCaumuiXeLuar1knZ8mJp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTh98SCVed2XuGHm9rPqfTSxgEciq6Z9ZJTWZ9gSeysX2tEX1xQDDxeTuxCPtQnHVwPVPne3QqN18AvaVKTmg1p",
  "key1": "ww6BM1BwMjc3pxf39c4EqvvY2jCgeBJ5zxXcA1HDQgbYKxHEBxwZWss1pkkGRNuWvRncXwTWLeRogzNGen1xEWj",
  "key2": "5NEWkDvUpZ2uBueyGeyYGkCDLRRSWsE1128fNPKjQn3jqg23Mg3t93swY9EXhRysK1GVW5U6TubnLDMNbjGb6khK",
  "key3": "36Hu3JRVoABqH5RNb1RnaUsLS6UGftP5J6qZYZ2avgTrJ4pfSzmm3nZF57bUHAGmADaKCZa3AfmgDJB558WHwoMw",
  "key4": "4eQUQymV9Gz1ACy5KRRGoxRCLhbvQYs4KMbcTaY4UyA9VppNAQUEz5PAvBqMhUkGZ8M51L2TTw5MYg5WSF6BM1Zc",
  "key5": "4tgpPR5DcEUdHk8PQcNnLgZfMWTH8iSCwGTGVmh5jxYszX9YPFjoSfAdYbsieazvX87JarTQLwcyoYWpgCgE4FBJ",
  "key6": "39DogqCCaUfzjpJvgbsPunKaqdRk8Y1hpUdHGdNacTPvACvdqowtPqUZrea642MN7Tc5U5Vm5BVLmBepp9N9vH54",
  "key7": "3brKf2BMVy5w2cWhvVpMHDzsudCn3H5drsAbHMtUkMetcwMELyYS6hjbXpwo5pQ66CRHv72Hzc8nX1oVhPEJmbBm",
  "key8": "4KEUoUxA9Vce7WpRARq9hzXpe8unR6YxFod3B1RwBtU676fhSynEsr8zyEi3UC7NhEK1qf2katqfXGsWJy7YXkNR",
  "key9": "25DkGqMEJQvQzhzBzFipec5DKS8z1WTxQApkPkZP1cACB87B2H4KfBsQUgQuiDdKsW36Ky7ZSx62gxQh6b4bgvRG",
  "key10": "35robAv5TChxeCaGf2ZsQNvnH6thtCUeQNN5acYyTAQ2A3R5NBhmckL1ACsQUhJQs3Uu1oovYCkFawENy48Wqjj1",
  "key11": "2wYRtB4aAun4jqAbnNQQp7Q5CAbvUKmMyXXDHnhaitP1x5DacmCMGKVrRFJvgvrCxw4RF3Uqxny48tSe9GUXPMpc",
  "key12": "2wErxvwfjcd1osK63WZbGdE2FByLM2DJx6yEuSoBNDyDBXhJfsDTytXn3qsozduKDxAMhtanNaQZJUAnvCiGious",
  "key13": "2UbBb3DaAYMoK4onokcJPjoKG5p1jFHz5Bz7gdPG2sVkDkrX6aueSx7Jp2xhw8rGpAGJZdB4cLNvShHtanPJSMap",
  "key14": "JBSAK2SLYzNt5NCmW5kuBhWN3qbsU5RR4ZcXYJ6XhJoAW8dmpGEag9KzcQW9Lf1C9EePv7AMAikyo4ivz1aCeUu",
  "key15": "3K7KU8uZGhUvLyzPCVPzDBcujjJ8fti4TZPFJ7GN9USz9SUPEzDJ4byDmmDGmrGYxyk26Jx18WfHcdXzAxP2M9DE",
  "key16": "5yrBQbujRAH4ykXqN4V32dWTdRKyfPPyamJb7xFB4dSr8RCsngU9bF2Rf2VHcSm5vsBKF1vvpr5tDvNMKABWFatg",
  "key17": "6GxaMx3dKRebZJ98nJhZ25YcHGTSMo1s6KTyjnBKQouQwybCxkbjHGdhaFmmUWLyPKBDzjyibXyY5c82MKG368J",
  "key18": "3msdVwSjBTHSEqybGEjKGcdyAU9rY79pu7Svcsfmypq3kv8ypNhqJzYTjaxX4YUkbtxfq41iiVnZpa5yrvsyqXPr",
  "key19": "4r5113XKkL8kkT6UPqC6DnNDPhL3sjhGPoMfnoUWhvP9JtU7vXFZj9h3qtebLGreY1nbydFSxA7uJ5VuPGKQjNDu",
  "key20": "35T5K2dGQgRa2wSouH34XWBBLy7df9wGqi4qsUf66qqkis4oF2uSbQg9rasMwzLpjGvVUfBimuCfx4BWfnTDcKAv",
  "key21": "3wgtYRGQZuVvdhizUsxfHorEpqTLZwLyaoYA1L83Endtnyf32SxYkZveF6HBtMLbBzQcKUyPdEqTDtr4VXQM2Mkb",
  "key22": "4xrKtZq7en3zpV4b8VSk843nTEeEjiJmYxTQdPsiiaR73yFkw8K7GKcy5rQRmiE2dqahDCzx6b6KFSmcQdsvpuUQ",
  "key23": "5Whfbs3robkcp97vtM9x9ygWgRcpKyBdJ4qa1SRt2zaRdLQoaUcYhHPYnRWJXsgYRk8XEirv2F1SgrNaS12MWTyU",
  "key24": "5QJ5TiKtbR1j7N2CyaJ6ChrvebTPkmptjfUg2HS7FJTfnxzto4MU7X8xCyoUSp7BrRv6ZKeeK87MycAvkwQx3jji"
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
