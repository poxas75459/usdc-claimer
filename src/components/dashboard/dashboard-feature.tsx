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
    "cH6r2ysQ4LVpmDDy4HVypHoAKP9UUSmXmu5xHvFBZuqYTYtdknjj3wcZKQqKSLN8G8EzSHdpgvgdrh2MuiXcnxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHZtF4xyFsrns2qr6Z4xaerAxdHe8QZ2jcXMRMPANhwVvPoMi4vnPTQmMTXqqDPPxqUWSfcQ6XsaziYmk7afwUu",
  "key1": "5kNakzpMG9fnh8LgLGKgdrx2aFsUhsMFRrcy5eJy3pHTr38aiVHJbFYGm6SZquT1pv86npU5SWG4ykxb6dWF9BgH",
  "key2": "4e6BZHyUXpWQ1Ujko8AJVWDUvFnmQxFJSwwtG7kuPe368QUeDisFLv8CEzAbpAoN3PHX44UGprVK5rWT34x6TpTf",
  "key3": "2g5LC4gPiU1kCbguwwZv8PMbWxjGdETH8EU1VwE3qt9c4k9C5UU4oBRhUYd8UtCwWJeNKLYsTEGbW9m8iNVMAzXk",
  "key4": "5Tz33sdQwG6ocCRssnCrbh7mAcvQyGWcg8WPt8Dh9vcEs6fGNmpuFVck2A9YMVbmPpYnbiykR4738gKJ25MPYZHE",
  "key5": "so3DC4gJvb4SGvTcnksRUiVeq4kQNUGGZddR1V6gcEZVLjdm6pfjJEmRorGowRafdTR4xATqqpT1r9CYMyXJf4x",
  "key6": "4dAtjb6AqCqPoGoft87zLPQFNwq84nfx6vgoJCWSkrnt5QSowFcAQY2rK15JokZmNEfzmskdE86bELF9p94BFsBp",
  "key7": "2eAMQ9a8uUVUCAYTEgAt9q4JsYRMoRW44b9wT3uN4PehBC5vMmwvyAcUK7GMdsMeqX5abcULP9MbJx3DdQ4CBWoQ",
  "key8": "5hEyo6dZzoppBWGHhuWzLjKsSUhDXKJB7fBWbNdmQMsmEtSBpwUvbCNHc2C4hML2dgTUpTGJq56pQSnCTp5eF5oa",
  "key9": "3YqpKNc7NbTYMaWEFTvFUS4ifD2FCQsNpef7BgFyB19ydpDFV6sfMiAKiDYB7w79RS8uLejxeTypcTi7qfEG1S6M",
  "key10": "3VMy7aGLoo5BEWe9pAKYx6gf73fr2tRucWzW5PsGnuMFPGNL54aHyWrpgywn8sbhGxZ5WWNecoAHxLheA6CKTBZN",
  "key11": "2mEV3naHASvVZTwZZjypGVnaqxWgA3WZUQWcx3yUH4JZiNEuEEziaU85NfdPYSfFME6AAiHrPCDGg4VxfjAwingo",
  "key12": "33hom2NAyNC2xw5ihSJMFNfFsby9hRcLcb5Yc4T3AyiYJhA5j2LEoCf7xDtmdg9q9hHc8nLsNBGg1EB1dbzKFN2C",
  "key13": "5sZszeys51HG8oqXRANijQ51HkStCaEJmwPKd9iqk5oB2mhvZrDEU3EV9qFWVyaLmud3jkM2P5MLzZXWYZTHhJZf",
  "key14": "6kahJjRYsJMAjLApzYsmsJJhMcvMZoKtL6Fa4U2k76D8WaHfW9rkTWmgBRMcQQpgp68CAosLKnJtcPUCzK2ggEL",
  "key15": "4S7knM677pVB6ufVstbfqLkA9mdKPLCGTvA3W3dyGVAZ28KbXWPtnabrmfQQtfDKzeztV83nUze55zkbX1DacUo2",
  "key16": "4hjeX8buD8MDWmQ5qR8MrPXUGJ33V55dvETxNzhLHwBX9BkuxUP9QKRz1T2nbr2q1HDGDDfFHuwUk6u9BJb98gyS",
  "key17": "5hdmSDTMoj4KRX4GJVksPMRRsAmQZ32cFMiQ2rWEPKZtofrLgvSxvtcT7HV7pgoQjVn49LNJEpWXr1McacKU1F3K",
  "key18": "3yFzXMrAMvnLHUeXaxhboGpYqZyYx43wztB5eAci89tXysidWkjP2jM4sjzKQAJ92qhhCoboGf1vdTKXbWZDhHS2",
  "key19": "3e2due9Bt66BgpKnwRACKAyscKzvbdFTbT3XmFHUFPALVi3WrnrxL68T1R8A4jaobGVjpabtEHBueMS7RvBpSAzd",
  "key20": "4CRGBgKATz7anwFu6h139hxiszQueCMvNGE3XZpQnBMoYrep9E7WFEbNm6Q8FvGNwCrQChW4YMbK4njuJq7dQ3BX",
  "key21": "3GQ6QUcapWdei9nWvHcN8HxZNiCh1nHLNfvQ9rq8mg3zPdNNuip4mRPxyWRS2fBgodTnootDimrVm5tGkjsBw8Zd",
  "key22": "5D6UBuQfDtexrGieXuXZtxLy8kJfh3bV4C7VxqoCGtjqrP8BF1t9qzLGhhrDLMb4BpfrujjvxyEt61uZ5joVPhYq",
  "key23": "5LHkzhEo4cEEzL2LoAfAEwLhwe12vxx5uM75Quf9aVnJx3xRemdTWDbDhbFNDyxyCcRTL2u5GSZifVu64KsJ1Wtg",
  "key24": "51HYXVa1CAYTnUiNBC9RVyHEBEaQnq7qhFricTstH27V7BogvvMqQPomr4nof1eRsPHbbPophnCSJqaqfuFoMovE",
  "key25": "3HCPdcet9moQENdTUt2JkZKtMKBYd9dHnKJdFdpVgcAeM5aSCfgFbrWCXM4332fGeNMTKbiWR5NYhnPcgnkPqLvF",
  "key26": "5Q1Ye8HkZt13ZkMoqyARWxR3mkRSgjfHjpSqvMEba8BzANyyNWRPDgYTpybebj15CzDz1GBrUsRuQhdg6QC8nddP",
  "key27": "4kPhafMA216mtXGfvKFvLZVZxUdsWHz78aZRVk32BEx2yRYAsswHibB8cfhANMJoFia32B3zzNKRL1Nb1GcYdctE",
  "key28": "3hG1hG9oMEPhYfjXDR3AWEver55UJ7uGjhNa6nKmjD7WJeowGHTi6cMtJEuwBscK3edA44kjuPvtHVLwVB3seFt7",
  "key29": "66S2fub6mnJK71z3pA1eKbiPLeiHLhkMgrqcUvRz7DXfs3XHa4qr7eLcKhFNHfxQFmuEz83eNrNJ7xDTfvoJckHB",
  "key30": "4qYesnFSur5CLgYkNp9Upinkkcwgn7Y3xAkmoSZ1bQ6UBUf44vtYfuJ9zcGrtmP6tL53BqJPyW9EcwwqzvdYvd6C"
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
