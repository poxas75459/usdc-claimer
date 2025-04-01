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
    "4gwnaS7URHU6prCVFt2i1vbcic8r9hfxhRU2yaqnbfc8onnepyGUzV3hQgQJ7errM1cExFVVyCVtFsgnpTCx33Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8oCyyD2V2uNYj8D6JnF8MYLAvhUkNETWvwdaUp9fJPMnz2XYXX4mUMaA8hWmmKbsSCukTxpaFaxXeaFdVQrE1i",
  "key1": "2ev6W5muXL3GttPnmGDcLD8MaNesmiwvrmDRSENXTddxumoFKy8JxKXuFAB7FSrfpkqPcKDxwK3SdZv5sbLbuVYY",
  "key2": "4S1PJA8aD5UALxnHrTtm8HarmhzSsTdKWJSZUreejZgUCmK4TPKZVfWbKDcdMKbMnnS3YTtrMNW6A8R24MeHZQtT",
  "key3": "3CxJsWsKNHTk5LYKsQAymBtA3KQSVsVnWArLvE45rHM93JuzyLMLRwLjx8gmTuZmWsq2XQx785B3yZwQQzxs5kaR",
  "key4": "5GK5R5wqKdVTj4RswPTGnHRpkQtjbC119PB1ocwHarVU22GdU5W9HP1wcPpWyytB5kmuxfzU9GtyYNLD5WZs13PJ",
  "key5": "44xuw7SyLzTYuTUqKRpaJH3gCDEv2HZ51AB46eqLhftjcizJA2sjNGypbMqsuoA5WmaKVSnyJxmWvD9Ayjmdxkc9",
  "key6": "3YGUCJaiKsg8Hcvx3JXtLfgURFdyDYvyL4K3vSbkQWaX1JBAZSvQbFXQmn46KLKZ1kBgw4MWp8AUpy1UwLTxLbw5",
  "key7": "56D6cxCvvESPHzY6jCXbPAE8WH88bTJUnTyD8W9n6atSFBtrLy3DSxf8U6ZBTibCcL48d7Uq4bEBSfsKJvdakBnp",
  "key8": "3zRbH9nts1ubS5uW93ceBRBVR5ZfTbvS6uZQ3oAMV4PLTJ782AsKrCpiSpBpSWpAkKhdGpngT1bqepYQujrg39WA",
  "key9": "3y8C7s8nZdgMKg4HqQsPoDcJTcRMbQ8tqJiWKb4qDviKwkn7UgMMtFo158Lpa94FoaTXfgpKjbfneQYgepXYzBbL",
  "key10": "2qNUquq6ZFnWY4679YA2iVtX7qY4zJvMMRv8Z3QDFdfTchPXTSUe2Z8Aah5bz9P8TaXZrFRjbwLPRpnfFpQ7e5s2",
  "key11": "Sck6PAX5jZmSxGSFJfZTvQHVnXUQRqyf58weyijAJZwyHXomcUEeWqWGc12iGX24zzgafrddZz3krvATBUkQxZ2",
  "key12": "2yoUCZSineFm87abGPH6Lhn2pLtKoxyPkTsMMuG1G5D6Jepe56phZodRTiB5uPtrmZXRdSSoM2f48ATeGkkgHqg5",
  "key13": "2hECB1LwsXyehb9AucdGoXh6T8rzvxwc9dMDJv5kW5NRpHxffPKE61kL5TcD4mG5ZmFDw9nbSDDzxwSunYj9gWtR",
  "key14": "2cbziYZ3z5gkVLRERBncNXCTWepNaTKLdqZBt45RYjoetEkpT5rn3jJuZxHsBxE6WyUEmBDypk7HiBKZ5xPkgXNH",
  "key15": "5rSvy6ZD9WzTaEL84msEK5ookM1YuYem5unvay9rrSyfnwFxTro6WiFgerF1vUnWS7uxEp5TKkVRmMMjMRLWj5YM",
  "key16": "4DKg6avuj5Wa1hgLGzuTuDH3UVBRnDW8w2uuUNzudkE7MJ5ymipmSPTRD8sQPwiivDTRfvrRgfsgZSPZ8ShDz2nD",
  "key17": "47JzGyf5Uw4aDCDTDSfRH5TgiPCP6giv9gWH1x8WZrY9vEWAmAs4sKYGgjf5FwetkugzkMcAA9sKsNQQSfcn9dGu",
  "key18": "5dAs8rZcpJt4DziVd8o5wuZAeGMZFBKsbyTcyXooFSdXAyM8Ffn7dchkb9xsimfr3zjNcEyV2RyAj8YiqHWSGn8v",
  "key19": "2EDaUNVTyS9zssY1FAVS7saWm3jiELvBt8RwW1rCzrTvrE5XtKqbDP3S1tqkUcdrMvpFLU8cftDuaDDv8RMnHo6v",
  "key20": "5VXH8CVTZaAxyRbWzPFWXzLqeFwiWx2551Kp4t2YGvU42hVAMRqSB84YSEFPb9wDpqc3bBw8Cx2ouwxMBycPG27C",
  "key21": "4mhNwRLcj5ZxrTxAFDusQAiK8XmaMTe8A4UJm1LMZzvrnj3BfDgB2FcS2Phyq8QkWzP5VQvKrTz6bPDK34wHdMSe",
  "key22": "4R5LhuQVm8H1pe8x3hxbbcJeLakAFFvG8iGuLTTohE6fXMo5uZJFJDXrrDRFUbocSsMGCWDkxSboXAcaiBR1MFjY",
  "key23": "3QUjP2bEMq86v1RK2V4qBpd1LtLeZF3u5KDk84wpdkypjmtJCJ9Tr9umv3utdAW6vuHccBkQNErBaxK7LkqAGgWR",
  "key24": "4ftcvghJPbGcUkRz6LGnVHNha9XGmUpjESpbL4XnSSZWwrtyKtawyJxUywmair3YAwRfTF5AJa4CS9cgvjLzRY6Z",
  "key25": "3vppXDTzo3FCGpwf8KVvgT8b8aJpVyUysaYbgqfVgtrCJLWMfDTJ9wNGUaDmJ3UxVJx67DauooH4JYiMvPMYr159",
  "key26": "ybCYH7KsJuL84Wrd2bM3R7qea8Vog1H6grYq9ijJ7zF7pEuDQYqgJY1aWAM14wBXindV6F8duQ86BTJrTyvCi6M",
  "key27": "3PivKFTy6qr6FHMnt1bNi5bfEt3rZzVws6utNWzKRa37W7cHbQnecy8BwMWzjQLdw68zujbbRnEY4X9kZDL8sFHt",
  "key28": "4A5KU9G1d8bqN8JqvdVgDEt3ftoChaRVDVJcsthpULTPGdLgvGFiS5dgGkpfXspmmd4cr91JR91WawVk9SCbfkfU",
  "key29": "2HyyUpPjzPqC64C9WDgWQv46ukn7ENGHyn2wxmxxn7Beee8JByy5XV9nt8BPmCRdUY9L3hTTNcYCyuToJvuNe4wb",
  "key30": "2KfWMgyZoBmeNBpzbnRgyxEevGRxxeCSNifrZjybSRHEJTNn1fYbtXjyTyyuoW7izwpBW4yXaBpoQuYa8cMdrGte",
  "key31": "5dNawCTnHytEYV9FNxnjFgd1zffhRvHJsxzZtREgTRfddMJGHxMC9NqAWvB7gTx7FL2Nr6LFLfKste8ZLuXUSgPV",
  "key32": "qcKmt7kttMbxLt3iJUcL2YPEF8mBVu8gdk3iPytgtoFRnBQXEQaNXpM9ziLh7gwR24x6irejCFE7M3eXnpqbC8E",
  "key33": "27hKHnGqvd2A7fHxZCouMD9MuTeAaxN874W71Ge9F3Zou2W8w6bMj8nBvPgckqRXKZLgefbTaEAosHStNiyxfvAK",
  "key34": "3dHq7uNwVcvKeTQsKLG5YyqAD4rXignzr4E2WUEjUoBg7chwyUJmxYsbrdKzUwNjkVamMqjWw2XEBsmG1NdfGvcJ",
  "key35": "2eTNCMAvRFQmrzXZcbnpySpcy98pQXAyx2VNV2L16g3vcGDJftC9UnA3SJ5fcePyawNMCkdVrU6UaT1S7YePiLVw",
  "key36": "28TPy3wZV9AxSfVPnFVP7iB6q4xDzgr5jHEaSgP5wcDL3soZhjwRiYgHnk3QbdPPi1x35buuDHRGyhU3ycVyPuQ3",
  "key37": "3iLW4ra6XefgY4uAmHugT7qg3JHJBbE4dKpy4xW5K9yUMoeo4ExSUnbMDCob6YGCRKSiLBKWVPzpBNvPMhmXwKUZ",
  "key38": "41TzxwZuuBPytGqBYSWZZwzi1WzW9sQWXkzmFxtEqeYeGuD6RMkwpeyVJXKVKVBxK9STHfnkEmrTPEh7s37zDask",
  "key39": "3W7ujL1Nq2qGL2kSTc8U9cTQ5dRBWVadLZpwPDm3YYttmxnDud8QAkDe4ZPicmwdQYr55uUHyK5wHMMkVc5pxF38",
  "key40": "rzayDeYRnCQ8kf6EySfqqJGuPz8RkngTUSenYwDujMPrHw8gUNsTwpxqUYWdZTbFE6UzM6eu6C12SuGZnsy67UM",
  "key41": "LdHumpiDbJFLQb77ut2CYw5awfBqCWmbCHdtLRYvCFEQpzBddV7cRteiQbyVx19zZLmrpHbhr11qSXuxCdbsnNP",
  "key42": "BpTerc3spCVJUoabW2BTsNsaKe1HGqAwmaJ3KiCUQ8XHLgGPUn2Z6iiNwGWKS9Wb82HLkVUaGZ3Jd4DHLPzT2w5",
  "key43": "5R8nnQFyf2UR5KrQzWEEddXR6AUNVVdpu7s5Eke9UwoUgHyP1U9gMkaxwHZ36mfob58KqttnRKYmqaUmhnR4DQKS",
  "key44": "if1i1wiLrDvUyfJvxcD4EJmRZHr7mKRtKvQNYZMVbETBNdCqmsbVFruXraeZFVMDHCYSkW18itn72JaLhWLuqAZ",
  "key45": "2P43844sg9tXzb7nVUV9ZS8tT1HuNtCNjsSJsip6vQUk4BTvDPxF3NeJa2adgL9oiiqQ1NY3NN7Zkr812adEEWsY",
  "key46": "2BV2z1zWa9viZMFGKAR3yTDagydFkaU4v2Bt3F95Tnh5tmERELYLZjfYrtGbkdyr1tQib8FNVFmxH7E5CBgvKkDN"
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
