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
    "4Jy3TjMjgTHd4tuMdySGdz7hYuaRJG5T7zCtZhMv2igUrgixFWXL8UNsG6tpcT2GwUMA67KQBFKCh6fubocbRd17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBmXVF5ZfNrqJJRKxH63fB77gep4S3UggRxBmKXL32n5qhdx7wK6idq75aA1cuJqfjCegbPotaNjMxhCq1Mb3aN",
  "key1": "6Nut3ioF2BUNL2wWSQgdAaekZqcdWrpR5EzuY7pxxX6jThevBVVqkuDQ4mTCTVmx1e9ndWTtDkeR6EtVgByfb3z",
  "key2": "5c8NfmReZPx8DToaLSaYX6DBpBk1K3sSoTp6hQ3LmyfLm2J5zRx2Pq3SujLKmbSc35deNvJH3PHWB1oUYNa8Bp1x",
  "key3": "2PXszYSR8QGv4MN16yx96DmTkDUw2EEDGMJNzVnP2uiGyHemLw3sYSEMMdwn8ad4Br8YDC6jSHK5t8V44DkEudmC",
  "key4": "4XwzZ3Hgw2223WvnCPfeeuc5KbzWfuSSH81woPDzagB9Q6Csr9V1kB8TaDgiJAoobPYNBc6oUGxcwjRiJ95MMPgD",
  "key5": "kkaLmEgiGi9fvAM8h5MYmzzvvbmwPy7QafAovkrTTNgQhnjmeP4Y3p2VXtQs2tbzLtcARw7vU6RochTnMmYwAcd",
  "key6": "49Rw9fq8yCAUMVKZeHkazG1jUqnpbLLP5ir57SvvfF68uCGfMCMtraCfKZYFPQMnB78k5117qJmE3A5iQVCP3WWf",
  "key7": "3sZ8EXXd3zhw7Ryc1YstGir5RZiFATrRoZfYredQAfXaRAn1vixde9LKA2WEvPEPtNVyBoZGMHuC2G4h4vQhMmnf",
  "key8": "3LB3FZuhLfoVEb5LsFVLUyPRHhxRFpND91cwFAA3cb67ngCyg8mdXaYUtrFjtiksBY2fj2tDi6SDAekfaidmoBtY",
  "key9": "YVtU7xBBmwxZYwJXEsENAD5QSvaTo7RLLcVi9UziH9ijKXX1DyUvDHdxd61kye6zeaSSn8ZZhKpbm1tfEkBvQXd",
  "key10": "53d1jCPSaM4KrqjW6dtRP3vVmUDHZAyRUHTbXPr82xtMJTZ78YDMEeUYApdzVRuGYyEproP5tTEYAwmq7UVX5vdp",
  "key11": "3ym8fxmNEaxjctLmPk642MHRyNAxGtxRMh5fv4ZYBXBCjvWqG3CrVZhBEvHorvdbqq8mK9v1fjDQ81irTU585fN2",
  "key12": "5iTcs8xwAEJT2EqkNoerevK1cEcM6bxgLbzumaMS343ssMwezGUHjWg3CdymBtzJKuWuY4scQQpJpc3Au9FFjCH",
  "key13": "4mwmCkeqxXB3zei74c7pBqdfsUjRHjoCe9oQFv1tVj4HxHgpL8NguouPra3RakiztmTbkkJ4sm3DqcSHJEPnhpEH",
  "key14": "3sXfiHoh9Df1ByTCKipTzhwaFJsVSNixWRJj3Y11YKH9ezDXy1UNHhXvjeKB2TguBHoEEvmZquuwUP7ugrpVUfKq",
  "key15": "41uJDgG5HhB18wKGWYap57SJiKovLTS6i4ho5CoAo5zL78kGYUkvQpsXyhw8tiKzRzdbAJroR3ZB5CbmYPa4VSe1",
  "key16": "3YxYJYe1jBtywNRMAZmFqUCUjMhN4kPNwV5PB81AtarNd5FtvLYB7FSZSLhPcX6z2LZkZkJKt6dAUouPveVtRbM8",
  "key17": "oaqVdAJxLbLWv2oJo6nGs9g9V7y3CWmDWr3hSAFWeJpu3K8dEH7xQZ3fKpTEX5GuHcpuFxYz4g5o4Pn7n1W4CzB",
  "key18": "xv7t9cshk9gFVddhmepCVKS7pKzpJKsvjF4axUuDFzNSp6J7apeHr1saegH4Yqz282cJqGiCNCptSHJKDc9DFk4",
  "key19": "4m4eU24jHob5N1odQ3hi8A7Tv8ckE9QDVxiXywKNNA9uhf3xQHxRzbSWkKnS89X6XF9NTDVb9FbcVTJ4fQvLXkas",
  "key20": "4fz9ZxwWk35phPCf2bBbcmZP6TFPEntMn2diLWGGzWSvydDtZPmZGC7Z9yg3YcgH2FvyF7ee28wHdwBvU2xHkS67",
  "key21": "2qLiKs1Vmvyp9Nszrg2PwuvQWk35CDHwXSvff18hnCuDGML2SuBXQnd5SoDXKa4CmyDz229edKERZS7jnABe8JsA",
  "key22": "Ze3whvQsNhkRNfxCu5joGSgA1PhwBbQNfHMcLTF2iBJwJpYS8ZUBGFmFgeuFmJyCVL5UR4LVnY5pieh2DqfQf68",
  "key23": "5DYeEUFDgREaLsAon9LvxzjF2H17SkvM357Ebx1umhz7nuwVQY25UzV6PVesA3UP1veZEEkTBhwtSzGmaxhhh1CY",
  "key24": "c7n5dby8PqhnYUxrFpjbQfy9rr24BoLuyNdh6rTEnygi2M5DdbBabCEkt89PZ6tS5RedemwmE94NYrttaBox5nV",
  "key25": "4gXdGGeDcoWD7yy7AtXgXNEMkqU5ew5JWutSndux6rWHcBuX9RHsE8SZEFZFBHWGn3BonrfZSfo4KTMj5p7iXzNx",
  "key26": "3wrnWQnq5PJFxjTmUYLKWDQV9HDxUGV9odzLdFeSMvFQQA7oo1citt5AWF74XmT1ctmXQ9JVhiqUjCmnMNKiemAa",
  "key27": "3SDh6gzApSueZDwxBK41qW6cEPXYMDApFSGzDdSsyHE8x1CrwHsb1ndqz3Ee9nZzBNKhHw6VZV4pJ9ebN6tPKjnR",
  "key28": "3Ab8fYkCZrcqfifBvPXNkPTBdey7zCKyavBFt322xkWvBsgUF2YUWfk3W6GtoAFGEYU6daTgzZZMoSMjbPTHmgp9",
  "key29": "sHiGSRdTDyMrjBRRqYH8g4W816NxPVAJt7W3sSi7fkRDejhYGtXv9m5bUKziWg5D6guJW1zHCXMFeQBeYvtY2qk"
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
