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
    "3datDtYrmonMKaAc7BE8kFvE2aauQ9RGSiU6AsuGgeVG2WEsyU8KVm3nSNFtsa7i424i2shtCh8gksMfvvogNigv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DbSzR3TMDv6z4VHfudBEhctC763NA4E85bgukhy4cqFq9n7zXxEutSBMFiNusxeQAkUcwKyoqMt6N3Wi4hiKnM",
  "key1": "3VdNTojnekedpnVRhBGizgWBUf4GaEx4djcvn4NuLNC6Aejm6RrTvnzP9bP9nLctSsihKGT8uus26m33jWTMPqpV",
  "key2": "3sJcyrgsgMnEv1BhrLZswtCMPxZuLi7QpaVKx8cojBVcMHiJWwEJHa1JoCMhZdefpUqZpKZM5JTdnAkDsBUYMPP1",
  "key3": "e7TiLB2axBzGPX1K92JBEmmBAJ1d4ieBbN2SiQL1rRCfGdysUXHJigviygSuZhTSdMxMG2FXv9iYCF4K7Vfu2FX",
  "key4": "5BVQYwohKCJkqwReQPWX4MEXtLmcD1AJdrcwi6eu9bdks3jMLXTx3vzCPv5N6tXVf2PNecJLSgaeXn69TPNezg9Y",
  "key5": "44sQbX2pH4oGmjUGkvx2nxmMyabGGWu53MHgAe3MTNiPqb9hoUTJLs3EfVhM35kbPdyoyXgZcsddFZrzuk9K36k4",
  "key6": "4CdDx7nRLFUw5AKjMESxc8fvd67u8v864TxJouvUELzujxd8SUhAHJEpRV2DagtE2bVUeL7ehh6ShpBmL7gVnfMb",
  "key7": "24DydJpCHknWeNn5QbQ1jUFzHqruCxsLc3V5XDmeJdBYHyN3mUaRHZqk2sB2acfnNfqtMvGnGa2nQtkCENqeqeuw",
  "key8": "9fQJE63Xbd9Ttt5UndKbtxNV8UBtmncZrDAVC16J3WYSY2HCRvPDnd8Ly58mnPaakFZakuwUMVoBWwzMe1M2tbe",
  "key9": "4JDKXjkjT7hSj6WtpBV2Qd91BHezxa7CdJQ5QtgSCd2S2cMNmJUpAK5oBGe3uVgmnKAuabeBBYLHQKKFtaLorWsf",
  "key10": "29CDrmvKnRSkWhpWBqYdiAeU12jSCm8afkY8kgn5KVG8qMgeeyVYZmJHLzrPcgWAxf67dc1spsgYfair7C4kswz7",
  "key11": "4tP71dJiZwAJSokSxRayCAPkNgDjx6hSHZDipnHN71B3kSihNcDYYHBftoMwtPbqCCKJFVrERndStozpumpmn39g",
  "key12": "m5ByQzjs8PsuAiwe22HFJzggYz9Fk7zDiLaVYTynSrrpJUVhqTZhg3QF6vvG7ZJjjXaAtsXy32QVNQ3aXhPdj8c",
  "key13": "5TgXqSgyhwVi4AWXam4MP7iXToffbJ1mFY5PniSqZWBNo3e481yM7suBR7enct3w56UekXi1RLFYbM2iz8Zhv1eh",
  "key14": "5Q5FiiFz5Fb2Mq7EM92x31Nqh8omchzfJAoeiz6miG9HCBBPA2qhocRn5DKUUSBroWf9UacCdpSpTR9HY2mTawrE",
  "key15": "3vmvpWPWfhbq1DL3uyXEQpVre4BtWLC2jKywfB6yP9xcWBuhH2efna8bGdpA9Z9WhiS9pYkTZJy3FRSATseqWP2W",
  "key16": "EFQcSKmp8TMSzB5R2dbyKiQSWYQUoTxwdeBf3J81A6Hj3Kt9BDwKQQnk42aLTRiasKbw3pWnptDXqsm4yYvACGo",
  "key17": "x4P9nCM3mhGe2ygGcLUP3aqfqZa5taSgY4QDq6Y41T2cvmFMnKZ4Fd1CGHj9SUdPmsLEPsDk27fMM3PEG7UtzX1",
  "key18": "4HLuhU5puoD6ZBzW2L3uxztYmQ3fb4R52XVqkp32dVRCdE1k7Q5XZAwAUfjUToNH6HUZjRcejTRAN8s44VWjCmMY",
  "key19": "wqLYFcAm8HVYGuaerTVcPjd3qonbqKv8761A3cEnEozacSvyKda3FRjKQW8uNUhTTHbFu3oGkuNCd7eWKb8BfG5",
  "key20": "4pMPoS56y5HxmkpTBtDm1fQb2uKLffNy8o6oVLGfQdq5KkVvsT51be3CSw3hVheVFrcjaFG1SRXTtTNTMP7CxZjx",
  "key21": "xXqkJytumPc3DrzexMkfnCFEq7H84uzyr6qx4uKuYenBjjJ9f9rVLJAoxMTfo5fc7jSrQS8dhdtTf2eQSK4p8nP",
  "key22": "Gijr4TsNMPdUdPo7Ze1HKAK2A2ub58iMVPGR1H9Q48dfDtenCJFbk5iQysj3xsKvzXeKQ5hsnpQWd8jkfCnCTqe",
  "key23": "5Rovgpu1SDyrMDGuMGaWB19h6jQ6Rkhz9vU21XeC2PTq5XDi3eKk7wcvx3dzsQfdiYXiyQgFvRjNdioyhPseYY56",
  "key24": "27j2uhv25SjzmLPDoa7isTQT2uM6HJwBe1pWXJdc78vmi5D2sCja7vctYKomMitYxCoJMZmjxC343yA4w66zFuyX",
  "key25": "25FwS7UzJQQrmNp1ZxB3JPh48hGBkTaUKVds7KEuyTCxe6XKDZ4qe8Sx6iyJzKcBSsdTEWS9sZajgA6hCRbw4k4h",
  "key26": "XVPjTB3C7j4JB9Dpt7sDtesEpc8uRosoh672sK7JA56StXWchXQNQLXM7tWxjzh4tq6akRGbiCM1gw7MAMDfawq",
  "key27": "M8CguixtgkaSmgRRd3f8nRjAEcsMWothUpfgFfuDLbtFkurDtT6zaw9twW69ekxE1NGHVJcXx2MNvgxqWmdCn24",
  "key28": "4Yog1YeXyXRsX2tNJsMsYz9WUd61vbR1L4ydU4LPQfu3zyNdawEU1yGZRXfRWpEJBTeAr7zCWbLC13c3BmPGLTyw",
  "key29": "22BAw8WAaf1URc4rcC3bgm9QkVwfkgW6R1h1SEn85S67zUENwkwDabnUo3ChWtDKAerhzrgrA2oNprf9T71F7stQ",
  "key30": "5UQNVuyV5DvLGuuoHud66BhuninPZCmgXuwozP35m8wr4FJxLKkEqJrPByD4xaNgFWaG7aARrDgnFcxXhB5FenRX",
  "key31": "4YxQsobTs21awchK53RhDC18zu8Ddcznv52281ZLejAvzkuhuWVgQ6f71kw1geyi7asd7bAdorZg79Dz3Y7Zss5s",
  "key32": "3ke99vA9y8c1yWLa5j8GW4Yngvi26uJbGaM1A1rhaKHbgzXu7fD1fq25KAkScwhmpecfy2rQAEs83KExMWXH7HRE",
  "key33": "4NxFoEV4on9CCLqqLF29iZwXazyyFuJhNYz7afeRTb5wn3o8CHCzK3SGTdmW8vpStCGgX64f7MsbDiLkPkHsKJTu",
  "key34": "CQ3Kqr5EtbqgSoo4XLY2yjkon7ETEfDiUtidET9GszBPkwNLinqRxpqEVdEN2P88afx32botWzZXhh1ZBJTkcTy",
  "key35": "4sUp23Rcu234iMJKMuf5JF2c4ErUAuiXrf1uqmr73Cgehz4RURTSTKrWvc4iaDCmhNs9stoL2JsTGNJrRoGDSzNK",
  "key36": "4PTzVkdA5pRYzmEzkheqiEdNbSuLXBWBcPL95JcRdsYm4Eh6h1p37Am8MBuZTVfeJHjykyhrEmpJZJN4dZVB7i8D",
  "key37": "4P938TqNW66dV1xSzZxyKfgH5zfM2UCacpi2c2F3fNSx4tSacBECFGHDh9Ys1E8A7yw5wPzqKpkyKQpb5Ggje8z4",
  "key38": "5JaxccdSpsxbFdZHoywyiqMAfH3FPvHf6GqRrTb9WtoZsHhThYJD1SuPtfYtB1b7osevH8kAgP4ipD7L8dhJXyZT",
  "key39": "5GmwFcvW8pb4ujsWMH1FMDcUSXsp5pgnq2fPrkxVuhQ6Zgs6pMfgN6ZYUaUYdoy6zZLpDqRCGqLNVuPyBQg2WC2G",
  "key40": "WpgMraWAzoFP2XUGfFrwcjNHefUuX51EmS1S7rbXxgfEqPkM8eNu9z9kMvecPxY12VNEwHYpcmVtqro3hH1tsp3",
  "key41": "5NHPNdTH89ymmpCwWNG5DES3wGyfaDScyaBdKWp9NMGHmkaQ7dVzAvh4HLetLU2NtB9SJmG8coSVddp1czLdKx9x",
  "key42": "3BgKRXSSPFS4sq8yUDGbktPh1XZkPi2frguoHv1cNDTGBL7Pwo3G8a17B1oUDV7oscnzejabN92rDEggdy8mPVhn",
  "key43": "2AhWPW746c7WAXFgLqCgJSnddxcZmQtXTSBWsXcHqhkrdSgUTjnYRJedqXuGehizy6vZyCbs5D6XA3v8SGkS7HGg",
  "key44": "52D2y9yGxm9gBvyJXyFic1hSMTHwbRs4D99MvBjKN1qQGbA6fXwAmSWbaUjD7xb6wHBjQsNngKZ1nxNQLFvcWE4h"
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
