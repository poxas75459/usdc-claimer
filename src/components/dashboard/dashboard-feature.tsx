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
    "HXf3XS1VQuWf2zXQ9H9dwFjMBxSHnJWSryHL5b7FXHDCYAwhUjEahb2nPyG4WtgdbKwAZ2j9NAwq1VFAJKAighy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGNwoEA2YazbEQEX4w9Ygvai4UYFpZQ7b2yoyoS348eWD6fViDqCeEfZ8a18DnEsffKFU9U9Z847v74txjdzcR6",
  "key1": "4FVTDQmV6Urthdf6WZiqSEghQdQFLuHS7QqPD3u3v5kW1ApJYQ11Cg5Ti1NzuyuSoxdRfdDUqHw1uSvHhmA48w1h",
  "key2": "NrdpSkErL4zzmpegkoSwoj9L4bytbU3YQGc1Mv6EWPnh4yFvngC1e7J5jFGKDTzsGnRKDEryCJ12TcQBxcgX98T",
  "key3": "5cTuBC9tHk4GLW6nJh5hpfC5y1VkGGFRWz16hgPVxkP5LUpcgBgbdQ1mHCmj462zZ8qwQG4TNy8FwM6oxdbTRRwT",
  "key4": "5rjR8SnNF5K6yyLx4nHiEekstCaWLZD8YRW3dFAvqqWxdAqPiu6nziDiGkE7jqS9hvs2AnypGccYGz4LVmPoiSdP",
  "key5": "5wXAZRLZSUNYZGi7Fx3ZS75KcZECXXrokvC5iLoFAt1MVviUHN4nuTyJAMzpa3DxsyrtPd2dmU6q3zwjyxnWeePu",
  "key6": "xcvswDjXtSb2MFZPoDEErovtmyv4npHzrLdMKo5h8sFN6LfyVLxQPZpg9Ecosw11o6kewRFBGKKMhKhA3JDe6Ch",
  "key7": "N7EVtEPRWR3smuMvBfvZM9stvaNAZHkwngucqWq2ZyqXXgv1EuyvL1BRgtEHBFXhQDBAanvbF2gDRXvmtjkCxtN",
  "key8": "2sZ2nhXPULCQR8Wfw4bx4S4tSdCMLPt44WG521CXiJ3k5qK8J1dPeaqamiSbbwdoa4r3toEJxnEa6ww6WZYaTeax",
  "key9": "3eYQbJd4oURZX8Ek6FaRsjD5CTvCtAp8DgmQ9JSmfi5bZQPNWcj3UDZYeZTZUwBsu8cf6D2B8QcNcN9qQw3dfRbU",
  "key10": "iYqm1osXVd4sogcQjCeobh9FtuCt6ytTMwSiB1PyHqw6tNiwADUz648PYNERgsyesNvSDAFuTgiwX8hWiTYjTQL",
  "key11": "28tPsNoifF12H6TvHzpXqdfmnN4sv12TFfACXpNwqpXS3R9USm7suV6vo1fytC6bxbqJ7yLcZCaafwjat6hNffBL",
  "key12": "4crEDGBPFwCUWJQndvUsFjZgdHRCK6XyzqoQNEaaCtxuJ6TSpN9mqk82E1QvLvLuswsqW4evbFajFLPzqSoKgHbg",
  "key13": "4gnnqyPJ9ijeJ3Hj3cHxLJguZf1fCG1v3SbxCdTU3CKtgG1nkuWZ2VZV9A6JavnyApb5A6k6c52qFFZC36m45vT2",
  "key14": "2MwEj3Y1ZJxY6xViySGKMT8B3rNyGzh4CGg8W54BD6TwpCE9GVhk2Ct3iLBFTRVsrfK73o7KFeiZdcp6iV7T6Z6i",
  "key15": "392Ay5Un153fz8RBUrBFfMZTa5uktnGV9spopXHBBCaEMKxf9eq6Y11EsGZMd9TDFHRvhYpcP7vQFs5cixiuHujh",
  "key16": "3pVkZwzGifk6n8oaNnbNRxBsSWo7zpU8Sp34NYpDehH5raTZyLGoVbLwZPYQ7ztxD2tFCzbAaVjfMGeKku93YuJk",
  "key17": "64MqYMqZ35ShyxtshATM7YdCDUkqaq9yxfDAKcyk2YNBbKgdYEPrGFpsCDNs4d9VRAgpb9s4LpaGahAvjUmxd5hz",
  "key18": "Mtkxky2u9eT3xR2upEr34QYaJfs372vjY3DwHs4jFdiKG1YJUEscYiWUBX2HDmEvnyur3nL3Lvs51EkCkrViBCR",
  "key19": "2kvP9QRZoRrAxDdBEvRuaE5BpxdZTmnTr7mKoS41fE5sLtzwQNEKPCWLYCCxeo49PWTWMKcU15oqBzAt8V1DEx8C",
  "key20": "T8XMT6sT7eVdfHQi6HmBsRZEUQr9meCYCLjjYWQ4NGgtn8vejCGtsxYKXRcCpiF4GFnRc3Za8cLvTFwaqcVDCKb",
  "key21": "44qYjZ2mx61qM1aM26to5kZFKW81EDkXfq5D9CmrG2i3wyxbmyVRDDr3GeEx2VvngYPR6LXVMxfcZFcFPL7PmR6j",
  "key22": "719K5xynj8fA8wq5rDvPHyfn2iJsdgodfboEjTpsAyEMD1iGYNXF1yNr7ZxPsXkJhmxNMHoTtBR6QCujSEnFfgi",
  "key23": "37GoR9shp1hoqnBjsZPH23SkqgNyzkaZAsU7hsbsNsMjnVh8JKjH1WZy3yFicfhvJcJ5X3cbgSCV24sEXiwcpbg3",
  "key24": "2rZoBPR35VcgKcYXwhDhC1F6J4KALdJuKowharurq2EwrMMStkbDAqxUVuNkn839PDdwn1oTBN8XpLxsuER4k1wW",
  "key25": "377gjni2SzCjZYMCxYMqGfGiEGFkKWwZrQnQtHg2wQbsPaS2CGtW7kWN9LPkVPwZqUc1aLfEDayGoqM7aLy5t6Fz",
  "key26": "5MdzWanj1doNbqVaBB7gntu7g1dcc6Zw7vpMrdx41RjBv4iB5xKT3NJ2vqAztGtCqbfs1QNp8XS5wxhH2Lqqg5Qz",
  "key27": "3L2HSbzrwiEtwf91XCZWaWiMiGA5iyb2bN5KTiD43yoekh8qSU8G2TkQvkdfRSG2BTKpqM5zR69ioXeYPmv9eyrH",
  "key28": "2gZWiBemvDqQYLLWt5SCeaRWL2mFgaFgkWB5nr1RAeVdemp2vTAw96qTJEREdWDtTjSUrnPa44a4JsbwZgFiczXJ",
  "key29": "5oXahztAvFSQ9nyZyg5E2aZvyFq5UHmtCNorPZeouSkZJCQsCYhpgP6w5wgSauW9q5yNCHa6RtiX8UocD61WpXvR",
  "key30": "3f4exkBqwXWHhNSoip76xjrTuEk7VXWVz8BBVzQB132TrrTM1vLqm3SdPSK2YFcq3mxFW1VNvao41yNS3zkjvJEQ",
  "key31": "446BbNU5pHLugLSonj419GswE4aC5W7xmp9xxpRVCkgoXJdaKcLLQYtKSrtGnQqc8Jt1RwpUGN6fHwa4QEFu2k85"
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
