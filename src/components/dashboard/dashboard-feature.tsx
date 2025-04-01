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
    "J1aZt9ztvAmbDYonhWhrNSj3LKX57uG3wnSJAK9m1Xxa7L3gDgbBL5dRH9PShbRP1KBvj3RTW5YXFX1hYDmUhjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GS6768QJs7oMmG9BjKuY5GUTFvCDJkwjthfAP9XWe3tSQurd3gK4vatqdTVXtZdJWPdvWdfZPheFUA66oP7zscZ",
  "key1": "3h4AZsN1Hd7546f7767SiBMSutnEcBLGf23LDTpEKmYnhWua6iUTvjbao5UMqwWMhhxvceiSvEoZS5h9HGriHmbQ",
  "key2": "3zYMRAZjtXwWZurMbuiuhKg3nGAgNLxRv1nwdZBRQYrEk1sugsndwdE6a788WVnZsqEdh91AcfZKciRoZ9n7EHsQ",
  "key3": "5tg5CMpKqBZZuZaUTuH6emyibxu13oMdcBoTX6HyAGA2HoGFkxaTFxskU5ExoHZLcc7gR9EVycErE8JPfKmcvFPS",
  "key4": "2vGNBfJefqyP1UwTzz6gQgGZ8mwkBMJ217u1scTx3Bh2Knh6s6ArCeZKrkMaHnwTAAuhmWhSt2VPL2KcYWAkDMNa",
  "key5": "FwgRGisXAjR6hFVDRfzMjSTbHu9pVQ7ey5hMGtUA9KEeuPmCmUj5JKST7aktjGYpaaJNU8LPjx3xpSC5mBPaXUr",
  "key6": "3TMDTL6u6QRsDjHW4E6L6HAjikaqC8MqRTPkYgaubY2Y2eo8CPxLt3tRvAif55Ydzjf7DxV5wqq2sGgB1DBpkhSW",
  "key7": "enGQycFbL1zhZxvExrPAMJBW4ra2pHNTpergVjiyRX2hMD2FWkVMRA2981JtazeurkPEQjj341AYLjmAfW5ueEh",
  "key8": "53F5z2Xmj9x9bW4U5ZJLShV3VP4xDghMbDjS2pwzUZn1P6c9b1JzGVAzgBxVBgWkCmzV92L49Gnyi77pLV83G4Vj",
  "key9": "5tXVYQtuL7Prt4saZNFANYTmcbLzadbYd5s6kRdAmKufQ2AMQXCUZYjyLxH7tQDbByzW2ifeYEyqhzPSBCsK7ok2",
  "key10": "4CHPBXn8NBmUnSeLKWVjdvzKjsuzoAbckhNwasVPJ1hSWa2xR3ZF7Rv7Ui43ktVvTHpwXQkKaFWfnkTb6oJoeFB",
  "key11": "3mmkeC5KQjXmY4WmAnPXrpDNvnuVuBaZDALybUkExPD7zfPZqZqpiXSAebq8Gvc3KfgeK7RHmrsChTCjqVJyJvW7",
  "key12": "5aDJvSs8r7BQZ89EMvhnhWmdurnAnTXof6X55t526Aum8RKb738rT1UTXEHPkMUXnKVvhmhfSxH1LbTz9uJor5R7",
  "key13": "JGsaTMNemWpfQ45uKPPN9T9wEvvY3d5oVfji8eoPoMYvcNU2WHNNjfic8PsvHafYaueaLLJDiki5SbRKqgmVQHp",
  "key14": "2EwC435LbJqfVpQN3fizFGXX6vkXxczANYFR6WSsv62e2oQoQkP2RrX8mvZdNxucT5Za2TpohNZ14gG4PVQARwzf",
  "key15": "5CBfmwbS1qZgg7zM7vrzqyGC6Udce4XwGecVtVtWkxb1LB6bStH1yBGVqLNBYVWQFKGXwhZoCG5XJJBz5w2DAEtX",
  "key16": "1fj6q92DHXG1zDJyujR5Pi4EWxk6Jq4fT9rhikZe4gTAcxWoMhJRv7YR7A3jwcQrR4ibBM7FxEyjdpDAGYEYGBf",
  "key17": "5FvbgTmZxeq9FvneWtsQLTKigtHBS9zSj9jQnVgjuS3VMpzh1taPHZRFgEaGkouFfr1h2b24uzhkBzbeKZb3D1WV",
  "key18": "2ZBiC3ukn8nsFnV4AuE2XeJnkwUifjxVYxLWtQB3ikWynWzA8GkjvvMVKJ88iNc3qeMq8RVf248RHN9est9RwpXo",
  "key19": "5uJLAkafWVNpPxcJKYmwjEJHK6wKNDyrqSEUF75fgucDKAvke1WBGnfpykS52CbRzTzZ5Nua4hZcLWYVpckRBMyq",
  "key20": "5u6zDDJGeMjS5XBMNvZwGyUKXKwGXG8b3DuT8PvhZDEMgvEAXozjrZrfbY9gFrHrfacKV4RHhY8aG9KUmVVXKhH1",
  "key21": "4qAktpcPtbq4ZULpkguSmVW4j8Zk25aBq2sqHjBaPkUCT6TRy7cWaAwmEuiMa94kDbACmFBnQ7DJUiRS26SKxPCK",
  "key22": "5niEHH5hdke1vevs9YzCBhd8n8r1uRGewy2dNaraFUEwjsL1eC7BmgHi8xeegfpQb8tNTV14xyFCSnn1MEDc4aUh",
  "key23": "5mtaoCHvr7GeZn8XdrvykJY6iPAtuZ4YUwxGGg7mSHJNVBd88igx9JYvTjJvfSmyx3B2KJ7uCJJH7GWfATixGwaU",
  "key24": "2newscEYSJyFxCbGSp4QbD7QHF3FEB7ZQtKbfMLXUvtf66fjrJYRDQ12XnzkQh9qm4edNBnMrcXxZupb45jD86Zd",
  "key25": "3hjU1Nt6fTK28cNU3HNKyiVDR9TBMTASpXZn2mHUbSp4jK7ZgPAMc65nszG2BLDN6kh2HJ6GDpDnTHSkH3RDNk6g",
  "key26": "4KLg55HURVNFNR2qxNhkSfutST4UPW7AGqLejnjYAwMTDK4ovuY7jAvaYsBWAyMqEY1UX5uktnKddUUf7bZBcixS",
  "key27": "4JgAUfmUmiQjsbPwrDber8yHoxSPC6Re7dCHmAJt5CugHN474mwNM14CttNntW5zDLmrqgRiMaVXW82SnZLe7DvW",
  "key28": "9mnc5y8WzJRVspW9KXWAkXFBiyfSHKt7nFa9rRi4jQS6GR38UXfNfPjxshmhH2cFDk6M6RbqGXfLYzVPLfSykhh",
  "key29": "379ueUzEhASRmhRfKB73KJ8rSUhWH8qiZoBawnRSvxFqsEDAtWuwLCczyAVor5uvhM7vHCRzxDUUxRXN1b7Mw6E9",
  "key30": "5t2LxrT8gamWhxANtsh9yxeDeb8yKd8Te2synCM361Z4SVmSDHLeUNSQH353gCaFPUGK7VqVS2FKyBE8toJyf1Yp",
  "key31": "31MtqFxSjUetEUNJ8amoPqY5V5MFePfbEkHGVgxGzWSGW7YdvpDZZ7wvWEYpTRod8mwdoR7MyGMkk65a647jWKqj",
  "key32": "2Yxc6CcznbjaiVznpQVavsZzBNwDeBnv9pg8BW6YtSshgyp6cUHCDTCNPgmv3hYThnPwNKYKVEXEcaj5P94WpGfG",
  "key33": "2yCPr2UFu167SLaDLDdfu2As54yZsjKc2eCHUPHviN93XRUbaXfnwrENZVADP1bgweD6yLZLgqq17CtcW3Pq2gb2",
  "key34": "3YdrZdbpyBfJyV1n8XmNz2YDeRTepeHNwjwuvdnFDUG5aAAuZ2hqMtrUAjBoy5ndmMWCzV5srrU19dfuxPk3YaCw",
  "key35": "ubu5AbCUafhrLxh56decDHSMCbSrMvk6kz8X2Df665GUR9rnR7WC7GUEuiXofwi3ssCq347HvmLEQRKRWi9tkJ2",
  "key36": "4eWfe2p9rLPT4npuwiAi7oCmUMTTcUYe5W5UCu7JxM6W44kP8sQpuHTQqN2E9XKCSUhm8cDj2W76FEqEKQ3XZw33",
  "key37": "5TbdX4MeZP8iKW7Sj89UkyXFYBjaimNhphJECc4u2BD2Ex48Ntv3XraNACKdKkTY99k5PW4rCuL56bFU1YgYG1HP",
  "key38": "5VtCAydR7AtzgagQGasKBVR4bCNT49zGYZsXQQk5DLssBN1vDGftbVsYo5eSa4PZaCVfZp2eCT3vgZJBZch9bHap",
  "key39": "22Z4thyNYT8F6w4SCGwQif9U2T8baERycXU8DjCeyKZ4Zp2Vg9Q6AtPMLtCGXpxYPGRZYgGqSwBNwanPi9N9QJx4",
  "key40": "2k6M2jWHTvgfNffCTi3YtDj9Vm6nnFMFhZNbRX5npmXD9GqZetsnm91wtiutvTVzVw5LNqS7ncKZfV5gopB3ThAA",
  "key41": "3PeFQGpnhpW7LteJMkCMpwVRDhXRqnq7L5xtteHDnzBcBVLgWKjK63NDW6Dif2aQgFN2iNg7vCDnAwqYdV1SZQNC",
  "key42": "4TfvhEiRKiDkWextcBRHbyWtpMZpWTpXeYD4Kk9U55roKq7jKrVfXaQiDuyDcAjMrvZPD8pW7Pk6EiCTVVfrw3hB",
  "key43": "2XTQuDG1hMh8npQtTsRMYV2pjzKXWiqY77rJRpAKWFYJxPk5KhpFxEQs2nGpdyN6xtxU1R364doC4p8WLSbG6wt4",
  "key44": "fvSMB3g5Wjutpua27L1rinpQWGokRzkBD3JK3Gvi4ZkA523LvNd3u6CtgDcbUhdwrMR3m93gGXqsq9anP7wzizi",
  "key45": "2dh9a8kForQvi1HbWAvwBEirKHa9QfvDZX3Eij543FUuroNgPtX9bZjDZSgYieNWFg4uGGKLKvnQJLkdSzvhNpA8",
  "key46": "43EbVEfcdrHKVXpBE6fT9fBrsHF7vSbDaVFx2Ar79UvocLZuLqFeff42NRm26gL5kaKpzJiuXWNhLc998Khg2w9T",
  "key47": "55XcCH1p8RpZWjrZHQZnpsTw6hPP1jHhbYh62oJRdop1pApCqa7uVPuyJcLqqZSZRrkKt1Xtwc47UePdsV5yu8wc",
  "key48": "64nH6JwcNLdqFrHKXBpGcetcqMmawW8fPHDc1iiB8zp7AEUR4YK9FxtjzeLj8EVvqWhZc8NFKbCLpqttFKr9cR7V"
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
