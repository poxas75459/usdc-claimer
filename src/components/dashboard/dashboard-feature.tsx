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
    "5RMDX7fjxNJ1JktT8artD7HNFazNCCGaPd9TnQmBT9pRBHfUitEtYYUGosbtYThVB2yKR6kTma5wgCSM7tW9w5nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KX8GPn8u8cA6M3ax8GZKvwcqqAwGp5Eb5bxzFqLSoHRxFf4Ad3eELrjSvF64CMgyp3JBeue67nwRBB4GsMKcZqA",
  "key1": "4tMZHdnjiNmgLmnpChgLuBjYcvKfU3tXh36e4ZmQDmrrrUrVmTEsiMhGNhQrF9VVuz1KnuDiqDi64mzP3V5PWi2",
  "key2": "5JWuJrtRLJPoryHduh3qxf8W3oX7anR1Qzo9d3VXjK4owdy83P36a8GU6f2hVFU3hZPEdfBctqaJmt2zS9CrsjTW",
  "key3": "YRcHxSSPkh6aLYLdStUTjwaUsQqLxqgeffPKo1vNqiszNrFddw1ytYshfMWYSGwp75Vigze8D7cNAmGqkiLE54W",
  "key4": "24UN51E4nz7W2tPq3tXmwGRLXbsEzBNCW2natt4wU36V1yTaphKPDjhtzo1cvQmp9vLRPZthTV7tw3HPX564HM8D",
  "key5": "PFuMqAN5eLEXKRh9kR2etpaQgtM8edua8wpzkU1Q6PdBSbVGxhiR6RNEtHZVMBtnmzMKDscC8mwPtt9J8epJZGg",
  "key6": "4oTG8vZj1r1sRcT25tajSc1iiQDgYqGZLJPXeJgKxL4U73jQGi3AwmcXxynCuh2SB2mbgsWjwXv2tzw7KPm1PRGj",
  "key7": "5aopYDac3YQ2jcdupjRb1YKms6UNygRvB9BpJLrawzkB1qwEJC1j6knHDxjZPsPu8WbQ5pasoybhrXwV21hvnpZ1",
  "key8": "3Pp4tzGbNjkGRGCANhGfRfFGM6rWay1CKxmykEmUaaRDHUskw9H178vRgJ7xJUW1jzbVAuTS1pFog4xBadWYPeo3",
  "key9": "3DhXMBxpjY3pAdMW4YxYuCAcQCTTUL1YKKxdzfWpTUSDZASGK9ZLYAoambMgQFuF4J4pAPxVQk4aP1HKJom3a72R",
  "key10": "wD7D53JdLpMdd7HgUtQx6zPUqPpTGHCJqw3bWibWjhLQT4Zf5NN6Kb3gu59zdkfm69DjAvxmWkV1VRczeTQgyR1",
  "key11": "47MMCphdosQ4jKidMDjgcMumWByid5E5WvsWDviCposTeJqG9Rd4fgcQpT7tqtikMyu8AaKwdEkri7iTuow7q3Ev",
  "key12": "2UuUC5xrfiy1pDqaZ9WoFCAobPEvXH6VoE2isUxKq5ypxGSpLddPzC1HHVY4piEzLLuYHgf6YP2kf2Q1gzu24UBT",
  "key13": "4UJYkvraL85Bg3NWSEdg1k1NgZzeNKnL8BGgB3qe9J3PfhYdNYgy7MyTH9okLgUgoZKMG9bzeYojExgwdcxvG3Xo",
  "key14": "XHE76kY4KEeR5BobPKfGU1eeDXCtxeBQpb7LdKW7jxuiVZhPBCzbjH19SWsi8aFEeKpmRWrLpk2TKdu1wXdrjiW",
  "key15": "3sDujHH2LtaZLJQyxNuAAh3JYNurNTjYgWCz8cr1uAgwGPWVJfeEpZ7NnTknC7AWAstHEi6mwVUsRsCXKVr8J16A",
  "key16": "3asBe5v6C3BYiFfKaQSPwMdvVSAx1dtFhn7RTwHA4E2kjtnDEPbkenqeZmBGa8PYbsNmMyWSAJs1cwN9nYzDr5ny",
  "key17": "4YfLpBN7AUKK4ZMvh6SxEAtoGPDGweZ9smZPh2GTi2CZE5vNPsLrHEpSKcj1a91hqTbooRoT1sUdAqmVAioAdEB6",
  "key18": "2YCLWHB2vYhyJZJkvdecviJqCM5Wc3Gv4zErT9d39gXXZbQjqmUiPFFwJihRY8dQzE6Y34yaNry36dQgj3wmSMiv",
  "key19": "67apn45699uBwfRgkjs15g6CPh2m42ua9qTag6c5xMduQ7mj2yhUMfenWBXEmuzNSGce2iEuefacYXog1typSmLY",
  "key20": "8kp4jg8ojoziP8mdsbbUa9XgxdNSGyAj6MpR37aQBqjPJ7PpCKuEKoocMNmUV5SjQhbPJnhLXeF2zyHixDveuwF",
  "key21": "4DMoQmpVchoTRoWxjT9CYBrNYvwD7oJukuXZEokcD9d1UVLSPgXTXsSufAGbTJrUqbacyxRMk2f65uUDh5UK88Sy",
  "key22": "3yihgQgAmRiZ9F2wrEJyKG36KhnY32acxKwNTKAYj4dDK846hB8HEt1uVUChJXyBQMWAWA75qfA6LLLuSwjT6MLm",
  "key23": "24eZ1C52f9qWsG3xKib3JejcEQGxoX6cNvME1fad5cGU6bGs7ucidkQsaD37hJ1T1FU5mgkm7fRycLe7W6pKGgnS",
  "key24": "2uRb17S6nm5CESF4o32Doo877tNZayU919zXhrykofjg1NupLMHYMS2pPVFe7Qjr9cF5P2sRfCN2vgea7fPfzpDJ",
  "key25": "4yL88jGXnEZTtAyNzZfjN3su9RAgnL3ZMyKSd9nihfJk3Hhk2G27rWnYyGNcahH4nmC5c1UypEXXCCmWeo16Xd94",
  "key26": "WrQfjVjGVZFaAs6jexR7EJeRuGR9FGzMaL7dBi1NMoBpXQBiRdgvXAuQtghf9WQyZrbXUnFPqrDVXYeHj18qrji"
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
