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
    "5S1kGUxysGCwYtPPMuE4kRaiGn3AcEESR9otuVkxemgqspMJJ1dfoMx9QMsMJCuAFiuv1VuTaWRJyqtd8mRa1akC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojLUDrJCJNZ8G6MgsHMpyhFbwrnfP1Wb8WqSJWav55WbWAdEhguYwf5HeHMw2WskVZi4MqShZz3qwMcKHxPrqKD",
  "key1": "32rKLhBsDREkZcPkh6LqHECKf928TiBhNtNrbriadDznM1JXyG3XY7HLheD9dfmJ67aMHShckEh9pP7UoBk9X35v",
  "key2": "BQr9exuv73V7SS8em9kwyHLhwNQ5Q513r75L6pAy17Li5UTqmqTUwK1eLPvGrUo4qmb1ejxtWFrjtaLTMZBHstS",
  "key3": "2KiFszVagmYC6JnFBFGcKX7pvdreZ2MbZfqBLSRsoxEgxinfs7pbLxSbeCypEMNtfLTMgmS7VC75Dr6MfLuvcRra",
  "key4": "EUZTZ4t2eiaUeSY8swvpjnfszHGC8PRJSeFrVSMe5AHmbmG2P6gswCHi8EU6swuXXohtXRsdWsBb3MCVQHaf4DK",
  "key5": "39k18HAo5BJrCTS5PPBc3vzr3F6rbBsebBepssssHtfQqmHPKGFSRZDjpXEt5PrXjtaeuZov3zabxDu6we67Xj7c",
  "key6": "2dTW6VUBKtd1YQ5auPi7XNNi1VwPtG9FYuXK8vWtCCTA5JGjrSYjKHU1kxDKLpz5MNprffWhWdTw87Q4ijSFJ6FC",
  "key7": "4VxG6cA5HJoHHo98HjvMkKdJVoQ2nJGAoDJqBTV7GeJ2dfFQpJAoWqp7ZbvneFH3tmvANnrrkhV1qYB4hkR5566d",
  "key8": "3yaT65A6Tz5TJ48NNi4Uq1WMuaXPKEhymERCjV9exYxubmJgHpfxeh1yewF3vzWv1AKKUWxVv19Q7qkxRDxQgEnY",
  "key9": "5szZFA653MDp39imKhjM9ejTnmRDQMswWREPL9y7g9bBgXKy6jA2m5LcZNMRDMekCAQWvd9VAiceMFeRsbWR3yHP",
  "key10": "4LMFqBshD7VZxpg8RfKtWUDx4pvudD8RJy6nczf9oBhf9RwRHeFm7TgNokkw7pzmABCw9woHbwd2TGaCNAaVt5ZH",
  "key11": "2LrNHiFskrbTrodY1eVg8XLTpeoJ6S4j6hRmiRxRgT1R5px8DeWsejRn6uep6dE6B6DRjrjx1TqYdZPzzVuf84uy",
  "key12": "62HrW2CJpz22KyyQYVk7DyQu6X7Q2gRfi8h9JyqMbVnmMTXe9EzaAFxn4kVkVB1QUJmBFCMzBbc1v5L7MGdhJHLi",
  "key13": "3iaqBQepSonHweswVZvx7zheVYTyeivVNme6FriDEYbhTphobJ5XPVj6NdfM4q9fT5iYVt9zkfphMgvGMq75z8ne",
  "key14": "3UaXKmf2vaASUoeV6oGvWeNTdzbSL2Xdvg7W5wyMfiFmffHtVMPWM5dV62DHsvHbNvd2PGKs83nkiaSijurq3wan",
  "key15": "5nGEXyhNX8vFpcy4W7dE6VPHgBnU9e2mcaw41bZhKG3F5mBsvEs7CzywFM3vDtZahCpomYjtFmuyHJ4wPT3UtkzB",
  "key16": "EfqfqkuTFUoLXMoHCxAt6RTwXEPqQyMipe32xKBsT2pi7KWnWffQaKVtUQZnhuenJMa3i3y5H8VzSX8eCpdqd6y",
  "key17": "5stRb7KN2AcTN43HWNuGySYN9M7bekLwBuv3xwgnzJEktiRDv7bR8NN41oyQRgPpJYtr3ro7YUmxHJnUiSV9RMFY",
  "key18": "VsCN2CMG2zWyX48rDaPdRnArvmEWr372mAcCoNzmHpe34xLP9ujwjb6T8M1dfMfwTSz8nKEFJnrcHE7TZXjZWqi",
  "key19": "5svciMiE12Yse4Lb3TsZZgeVN9DisphMsF5zNDnXSe3HpEJxSWhapquide9VmqFiN72HZn3s4ymm9Mop3c2CYWhT",
  "key20": "4o1X7apzH7o1RMYyh695UPGVMTppBqnZDZ1j5m9hWB8tmJ9dfZuzT8bzgz77JeN3cgpPus7rr8j5w4Mmt6Bbwdb5",
  "key21": "5BseTycX8DmfWYgRUxyHe9PXZAssC8UavErmszAZRABSzGgaYRMQx4rfzTGeEvZLwy74UJoSPYzRFQWXJJuiic8K",
  "key22": "c8vVp1ZsygcCg5Qs9LMYpPpCdeJb5dN7YtNhxaCaZNJpsnMmJqCUbZNWCMd9oFtgJjyQ1LxFNaLuyzVbg36kypF",
  "key23": "5ob7vmQZYe2sLwEbnCWyQyGsf5BX9fYzDPggb4FpGWNSQ49238HCXmoHPGTXrooY4UFGSYs5wNnTpfBSEDFZyr4w",
  "key24": "QNE5DhF4zN9gbWC83N7JBopVv22TV6Jh75KrMNVcWjiXKwnNFG3TSPYRbmZbd3BdbkP3JMK2mZ3iuTNBKdss8to",
  "key25": "2TMH2kXt6NRsLmvGYy5txqDseymr9yfSSp2SNfg6dy1SRoxQuZd2UnTJfCbbH3cKKt3gP8FkFdiaxgKSdFod2uxp",
  "key26": "2u4iJMHSR257tiFA1zdteUNrUYhqDMXXRD3xsZJeM786o37hhUUwpDd9PvJsiue3gjdKYTMn97c2FDqDJruN1QeZ",
  "key27": "62t492ztpVzGdQPKymEBkC17AX2UzMe7V8zTcnhtGDPL1D1Lae8nGmeGXdCzWFMDkddKmoaNSiUype6R6p4GDNo1",
  "key28": "42o5p6tU3QGGsSLwdEjFhkr6XnpvP8f6yw39PvhryjHCVdE77h2tyffAfQ3T3hZeTPrZPBZoAadrQD1at7YTuVwn",
  "key29": "3RXj3B81ZtbFgwbM2NPMGpmrv6VHkUgH7BvV1Dd3hN24Spc97THZZfK4uLRufvpaLw88o14CWpnyzmpErLcQFvK3",
  "key30": "2pZJ3DgzXea7Hbw9YLMyC59L4wL4nmuXeAmBttZsotV7F8qu495TDcAUt7Vjtiab7eK9BMr4MG7X8xEhMLdMRnBg",
  "key31": "3sq8K1TnDUU6NYzC5qciWiQKpycmgXxPNibmPWH5U2E4bgJgr82CYK9f3gw8Kk2xBWyfZFDZhuqVHnY4rm6m1TwV",
  "key32": "wG7ASffPgJn8TzkD9J7jhiXVcXqTshqxoe3jbNh3xbFmM1e5DD7W4amwKGyHMZNNwtRknwgeTf7vxChf4P2xkRb",
  "key33": "3z6w2DapP8j3tJEWDj6Fb3dak2zgzkJKXSHk8c6UG8Jqvj7A6XLmah3WxxNwjcTFQ6UKj2Qa9BFhV4ngQSJVU2fc",
  "key34": "22YnLHeJuJ635G1N2YeuNGEeZ3K4HYPgujX2qX5XttoyW9xBuq1tBWc1N5Zzr97ru5hDz8MvacGkicK2qofogvXQ",
  "key35": "3gCNxLZd6LJjw8nyAvzr9hK9w1E8McrgBcs9pfrHFoAFZyfCrPYV5YmkG6HfNRLhVhf1mjQ1W4ccNdYQUaqNBzGa",
  "key36": "LzcJaZ7K8hFc8LCRYm2XWXTPYHiqT6zrRYYhaL8tFKuyF5wyZhi4um3yUf8reMPMVuCDj5MnGYywhphCKe7N6Hv",
  "key37": "546tpmLFkWg1kGN7yNksewnL934nJMYWYFHajBmd7AcTBrZwqpvg7KNWJkdiejt8vLp8Z8KsU3FV7BEk1iYp9BKj",
  "key38": "2GwvWJ8SbixbG5VA57DGpTFb6BLjdgSCZtASfDLMR1H8SULg3xc8RypmQz8rywKsnPoUdQwtuuthss5bBRtvNgsC",
  "key39": "2G96qxzcS8AG6iVJQiRNz4eZwYvntuyDiMnodozbYej8THLtkc3ZSQpqbV196tdx4sqFFZTB3sepH2S6xqLmkGDt",
  "key40": "3bpq5Z6RaY99ZBa1H9ZAdsEQCddXscWn1aVMeGtPQ2PC1SKPr66sHUKyz1vY76JKK197ymXGHaS7QsuhrhxdRPhM"
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
