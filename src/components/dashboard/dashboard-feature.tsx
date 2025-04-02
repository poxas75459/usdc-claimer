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
    "4aL8Ccs7PVdmFryXJ7d2XqgRsae6ZNYHHFcUSxF7YqJWZEtCWxz9s95dHqFwUGy11PoqKqzw1K9vSgNy9evRdD48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwc2dYVndYXsy4ksyWZTASM5bx8p7tUZisW4VYenFCw41TGAHwR2HbBfwqZKVyEqPS6J6zP7FE7XHDKLFr6Lzy1",
  "key1": "3rLSjovVkWR7wrF6mt2DTHT7UM5ggvUs8uHX8MoiNWQujnxMtaiNSKqV2TdhLEMpmfMev8YBZpmBZRrvZrFmKT2v",
  "key2": "4yJJ2wU6yFzBJLRzmcrbyR2ZWDhntLoa6ruwoDqEFViq6HyJEcp1WS1u1sH96KP4oJVHRaqawkGdWFBT7ywLmbXc",
  "key3": "5qNoxGEFxqDxmBsCrNUmrQcSHC5qn9WyJXQvzvL3WTUiyKcDHc7UNDzoFHajsX4bc2rFRdHuZYvjKJTvB3nUN7fa",
  "key4": "2Y1BWKHfbAvGiHHuXUqsCi4Px7frrC6caqtzP6WJTxBSLspFnTdWGkWmd48gTTPynAbh4dgSUmHFwD1tGtgZvh7R",
  "key5": "QDQpeibqcg5hWtPpnPnNoEcKHVYx5LCziZjYXpsQt13U1TMZLpK6GGDRr6E99VWjc27355iqFJ9UgkVaUspf2hj",
  "key6": "2HozHQ21zhwMaaTW1vWdJRmS1i8xa3ey44s4EFJCmskmn3wYmf5uECM2UP71yGgbXMtkqLaLmFpNSJNdYDKv1jdn",
  "key7": "5ikdSWNRpMdPKFwNPqREHz3WdeLPxVrECWyotAX4XD1KrCSezeJFypeqDPqUMomyYb6ntgn87WwNfeEsMygGnp7S",
  "key8": "3dtkiEMw6d6e1BEi2zy2Apj9dcDqpkMzitPazzvFuzDv25qy2PAWxeJpvzW9KMjaGeY7r421imVDu3XDDkMvERwp",
  "key9": "29pscvZPW88jmEgDDNfsvrNX1Y9VrUrkRvXFLtttgLcKUKKVnLPhxngfr6mD82GbhgJjxcPo5t5mcitvw5THY6tY",
  "key10": "57PfA9JrBnnosmnYfoyTbzjFVNUCy8aMMR3nDBHuwNK5yxnMyKz5etDXag16rN3Ukrf9reXkReReh95YGHiA7v4",
  "key11": "kJWBPRnDG8MoG67YAMWMNYAV66JWuLgn2SUA1BEWHvuPdhAVUDR2XPFdA93UFB1zU9PymaRTy8pSSq8GzqqQkQt",
  "key12": "ybPAZezSTvot3os7MdoJQ1jnFY2Esx2YnecTUS9ZRQ4vKrZEnEgdyx3ainHawusGXMZaqvjBbvg2SkCAwL5E2xu",
  "key13": "27Xoc6hqzyYPfSzC2CDnK3HJ8v75gFrxXgEsmZQzFdqLDrFJen1a3cTX8bSnGJ79f787EtD3bC3K9yHf5wP6cUg8",
  "key14": "2hzKcpVFSAB8KzMXMXCEdG9MZ84tDEGneYKj7uQTzuydYPuyqZZqXjepWxgg6Lu4eLBWU34s1benWnYDqhjzMvtf",
  "key15": "3Jcyc2vgts8h7ZDE61UvL27xr3mxsUuDEaJqbg54U8EBkbsXHH5doVh1rj4KDJ2tKi7S7Qy2MNo1JaJMgSUNauP",
  "key16": "36gd2bRmfzCmvx3JFEhg6rkUSaRaSuqZhynLis3mahJ8sKZ3kpY5B4D8EwSBcfhdDKRU3HThveKjtEqSs38vCSsb",
  "key17": "5fY76BkFFwkLttqZUQoCjYSb7s1qsG4KLtSZsvvUC6bEciam3R3xtG1kBdkkzWnUMzEUoeyb6ECxqmrnjXwWPg8X",
  "key18": "MScYKmZXyjV6yUjerFRsHpauJw6roFQwz8kpCNLdaSfPKnmD87yrNRGyeeqVxmUeH4YYWMea84ebZiJUDhHxrPh",
  "key19": "2yg5ebKtQL66Ax9Tn38Ac9p6PJU8BAiFJUKeDxQFFVC6VS1SURahQBgbNwASR9CkUgnhFv6i2KBeHeEWUdTETrjP",
  "key20": "39QRd4m9UWHpbS2gbiRGn3ebc1eVuqvoxRHHCUHE2Jpa8hHq9eZG22BQPUr4dfjRAMsTbQoEZeesQ6bibTxose9G",
  "key21": "63f1UyLSY5H4jNDJfvAxpzMkS9Cr5A9JRJSU6oftkoKrNKYv7HYn2KdP9NvDARuVKWe6MvuSeEX13RaxMMA4a8sz",
  "key22": "fCAtukT66TCUqp1Hiu1A79ZxSGJgj2RMy5bcQSfF2yTY1fsaysVSr3Xz5WxBKxa2rvmn4JkqYNG8vE2Yxm8g55X",
  "key23": "38oDwMDmK6m7EQwBtssc8FTiKDFb9jwBU55oBd8qt62dqmUjJJbv2oDEgYYSdjM2aXEzg9fPZayFjHpSUkVoDFd5",
  "key24": "5dG8y3VvA3cnSDuKF2fLPP2seLXvvTBgV4j21rgtunM9SduQKcbVfVY7ZMKFehrmBr2JtA8TAMcKWMDc5pz4EWbp",
  "key25": "EqXDRw9j7n5y6acxw3hadfjMRKcTJGh4Uws7a1uCUdr1u3y83no2Duf7adqdXoCCabJozZTh88JzoWdt4JMiwhY",
  "key26": "4zq4nM843tqXrKmr9utEuWfLqK9Mdsc1JRoyM3MMKq3ihGrrsBfoRSvtvtQmH22xb7iEqTxtaPfQGDDPNuAu7988",
  "key27": "395syrQo3QgBr4iF8ysgHdA6dks2wtej1FxeS7gvWrMAaSQqkyLD6C2fgkxJT5EPRiyzGGoTB4UpC5Ujez11ovfe",
  "key28": "2KYo6CRJAfy2JTwmDwke5qReEr2596mbLBgypHwP3fANPnq8nNdsrcXKHwCRUhiFjB81smd2TmFQk8zmuVSA39o4",
  "key29": "2mGYeTkBs3QpBezD7o3x3tNoX5yNz3qDVf5oKd2kCpP7QPWvgsvdAc6U9J2owxxisiRAarCK8ZM7xBnygxCr1Mjc",
  "key30": "3knBf8SEpPPR86YTjeUocqZbwPpFYwkgzgtGwGxtx7QamDy26KfsMUvkxSGGJ6y8cUnDrHXhrJ81KJGEuHEoZMnf",
  "key31": "4p346LFS7GouCqaKf4MVhqQ7PvqiQamiiQDCETPA5W77H6LyoS25sLc9cG2dLg7hxBptP3su6Qg7Ax2h8PAuTsYj",
  "key32": "EKNRtSwhhquRV5goaiWjyYQjb1Nt6CaAmLV3JZA2k5kA6bZTjru95aj97EBQkWsEV9wK1nX84wJXj7YgKppFoYJ",
  "key33": "2auQqTAXPeLHBLARm2DjkUZL7rLRKDVHvTRTyZgaxVzteWXj6Q9XWaVCuG33wriQn5v8waQRFsN1v4bpsxQ2DrV4",
  "key34": "4AiBrvuPpaPebkfVTUzcKrLeQuVaR48tJiDxmjRcynauqS1TTCAJU9siZRTVNGTazSTeoEHxS2p1VFFTtnUCziBj",
  "key35": "NGc1LFXLnrj79aSLMe9gNWKTw42AtF8mtXYT4bVpkVVnLh7NWtUabwmcRvQJ2wos3gRni9tuWkx1QQdsw2WVz53",
  "key36": "P685Ns4WqhKNepDb1komtPH76wyMdd5nFHG6EHL8W44Zb4xAZRua3QbkdVMmhKT2ztmN62vYsmAz8wn3dwV71mi",
  "key37": "5bktkRJKRopKG6Xnd2RGtNQjfCkzwhYcMjsE7Xce1xym8YGSp8m9EQ9RhbvVCkiyxGx4DwRy8RxZtuQLHB9vfRuq",
  "key38": "35vRM1HE8KFtJvVP3qqdMoiHBPxPWDaRQm1bfsCrjqVC9xxAidxpRzEY9A9MChssiGTsxHSLoYHjojBvNYMjCbys",
  "key39": "4o9Y8PJLcqwGjQuVuMAJiDxDeDDBiZB9DkB1cmLAKUXu6sNTxPk6T8UE3eT1QrkqCDxXeNdxKNfnjDzVi27qMgsJ",
  "key40": "3BVCoGdYeWmtD1mKeoEffME1yKignK9NGTUnYLTgY1xLJEVQAUFe8ToDYWGpt9C5DPXbcMpBLZNZG25WUWhwfDqc",
  "key41": "2e3PE5evCtPtRQC4WocJW95MxE1ic8MG1BYuGhK5zethpPnVfGXHH6ecj9TdxS2rAf5xyp6t6r4LQCXD8hHxz5bR",
  "key42": "2Greim4YNaaxXF2Cs6Hq6rf6sZoZc98iJ9kEWxfijA9MZSE8fQG8KGvG6cHzLbQ7bqoHx77bXDbSY6Lq41QpN4gZ",
  "key43": "Zb9hxCNz8DX91fbiGkdru7TLNFjtDeZDoMnBRqsnEt4vko72nRMz3oQKm5Q2fhxQk9VoKbh1nnPgoHCMGxg9QPJ"
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
