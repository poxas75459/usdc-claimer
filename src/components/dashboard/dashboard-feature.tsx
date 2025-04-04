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
    "2XUmysHdF8A2QU4nAXCn9cfXMqpGVPpGa7WeD7yGaBYxd2eNMUFZcHohntJMDAwsDYfK3wcxhZgQrwjJ998R1y2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpdkHDi2NgJcM9ej9P7h9nuaNXTaHqVucBX9cVBevpPQKn2GTu69mM6K8RijRzfGa5G1EMejAZuDQPhqFzstrzD",
  "key1": "5WcX3Q6mp33Z1Ub7nGMhJgiSHiE9XtHAhQpfvDCifyp8uT9E9SZS1gBeYFU9faRAkK5AsFihERSnaCwZvNbuUGST",
  "key2": "4osVctbWhUsaMXfRktp5iX46cuLawVX6k9JzkkwqQGdiFCvi5Ldt2a8yvTxew1VwYZUE3KJ3TjaJYKhdrXL2HPr7",
  "key3": "2KXQ1mo1rB2GCCdPMWPEXaDwmhHBvzkc5kvLhoVhMreisoHbYB6zkKhKNKcKkrPWjHSwBbGJMmtv2cc8hQ1Haa8F",
  "key4": "2i11vYyzQ8RvxGJy9UBYekTipAWarSrJ6mpNh2NWrX1nUaBuVugRrpA11ZjT1n874fet2MCkopMjxQ6tTX6C1z9o",
  "key5": "3CSZipWPNP9WwAg5ErgXRS3APQuxM9p22wmmZ9H2xNYcvmgBzapTpQiQXGmoryrkQtBLmnvB2KkCzoXA8VFZryZx",
  "key6": "3EV9HuVnYcAomNcV2LSHvrdhVKq6nJaKq8HkH695mbpQrq9f5CmbKgKFQiYTpPfpdxqkBJztDZ4sfuJf94jyo8zP",
  "key7": "ryBV6tAxihGTDb8ufiQmRTaJuV3FhgZgZW2kog1wf9YFCuY4PUehoRdvjyunQ7Uup8ghgCcLd1chJ8bdCffLt9A",
  "key8": "VYMfRfeGX1TbhFdsqqgmmWQfSttmxp1ehZXZP8P725mxQyiqqA9XtTy2ysJHLUQpLwngvGMomg47ZbPyRypgAgy",
  "key9": "5hQkvgYWM5xGX4pHGSzR88HyCP31GGTjStbM92Vsa5rdnusKx9H2VbxzpSCTL1m7VNKpbC4aRHM9YUZ9u76C9R63",
  "key10": "ZE5q3uNUJK7jGtFF1TqKKBUYtS7Xhj5YCFGTxP1a26RgRJtpuFM5TC6PUDRzVB6AMLkekqkEkavU8zw4F2Gx9mS",
  "key11": "3bKQj2mPKpcwDpBeSFbroa6Tpm3X9h4p8BLPV1szWcTFSXPxW6VLe6gBmbmUXwDff4iinTfgQ2erKM53hT4ByNo",
  "key12": "3Kb2BNbjBs61nRH36pijLev73hRyZJazuB8DGXaCHPaHHJ2NsdxoYV4Ffnik3B9W1E32rsTqKb9xGURvcqYEvick",
  "key13": "2Rce3UVj3sqU9ABvTvaGTKgAsVMpGyiAcJxHLWEtx3eYMQjwUpbySoz7Qv6BFaBUN91P9quJZJBgkr9qZteD1WH1",
  "key14": "3UvQFSx2prwi41Uqtq52xhMyZoc3Lu7Q2jAFMLUEihqAUGhnnMmuVhtxryxBMgctfTwiphQHRkcvAtJvNAmp9r3Z",
  "key15": "WQJKhvUa9rLctFeHmmJYFZoNpTS5cQd4HtafF6KaEYCuFzNoosZPdmX1v7BLfLUw1Aoy1TG3kKmjGJrSAGidv6t",
  "key16": "UKSPBCLUnPjtahnGuXVGmpxA8DvSkxd37Lz6FkrRkyJGp7sp9PprFmtMUzFA2EqssEju2Pwg3Z1wmpBrKnH161y",
  "key17": "66S6TTmXTW128w23qwA2Fxh9RdqvCiM9Cc6KgVS2ua2fRQ2kdbt6DmcLCK5i3YxfwRQMkxKK8yYnynkfvvJ1wzXJ",
  "key18": "44SHdWCJRBofDywqDFA5DhQdD2Rz6rRbjTWsGiVx7QLZpVctTdo7fr9DH3FbDz11rGbNEdCmxWTvjFwgwemzmUVw",
  "key19": "2myN3DjftoNAf2Cn5L3fRrytqZ6cetFcqwoGUsNwcJaExB2DPsrwWAGDak3axZzfLHjvyVyU5swV4ouBHadGqMxm",
  "key20": "22bnCBoBz3FdndeANnU5uji9CZiAuxTKbvDFtB5r9MWaNmU5z4J3uWofYDWTxABLybQ1Gct3yJMbT3FUg22ta3f1",
  "key21": "3zMjMnAFaodChcNB9QFsBvghnsNchm39Dk6HGs7G7QiTgTTqRopNKifDTNH4nRYiiMcWoErCpEfcyduvDf7u8fcg",
  "key22": "22R9zpPZc6MFTh4tpb8P1Vk2UtnihGCq418dFkVoK1fCYUUvsyqm486vX5icVNEBXB8ivK3qzP8cNdhjQqVFPjiE",
  "key23": "4dntNjnxbyHLoSG94LwWzti44UEcfE1xgnJhRUeVEP81hyhipnZ6m8fsbCwk2YC7uTPsiQJaanQwnYkFTgWXGTaE",
  "key24": "Rz6xoG9vBZ2y2FSWN2WmvUW1Mg9hnvFE5k4TgoHvsGm9grnMMehwdt4p5hu7A8Sx61BshxXuhjpmjy6CBUY5pZs",
  "key25": "5QDbSfxke1VeTCB7jP9NWNKB9KnkzuE4K2FvvPqfcoPQuAXoPnjnNqGvaWvin413YvieJM3ubvezUsj6BqTeWtLj",
  "key26": "2926PGsU2kZHS9b75MGYWzCbkBqVQH5w1S1PCBtr6AZg3BoAZf5JsBPQnJL2rzCMkZmFsLfgGj2FBXfhoMzXmnFN",
  "key27": "5t9yy96R2J6bVtZUP2pQpSTDFV3H4gEnrhZ6LHsHy4ahp5CiPVBnuEAofmK4uiM5MVCRFum1xFMvsUJpNzXLciLS",
  "key28": "4jcosbjHXuPA72xjk35AeifsWQwwamhWqNCPHZ5Zw22fBPHRUdAtTqVUaTe63TcJDKhUo3AjcmYjAoMuMpbAc8hZ",
  "key29": "3QcvBSXvkHirJHiyiy8HjiPMRcjuyJavyQtozHd9WmqX8m5r9oB2y8A13S8GkRhiazTjAy9dtmev3MpvhmM5iHkE",
  "key30": "3jXkzWtPfGAAzHdgo8jD9MekeTJBUcfYk4YrPRQCCZn9zWNFyfwUZcuGP1XYMbQZUNBkXjMGMkTZ8B583xTHrPkc",
  "key31": "2b4NcBEMjdziug1Tkzu4deENPbdtqJgnkzw8i4cLujd7Nm8d7baUw9DXbommLvro4qWAWApT5uwSv3FZTKAff22v",
  "key32": "2Wa9cTocyVBTtysyt7wELvB2sncCB4YQRGtu13eb9zfuhkyiTspxKcRT4VTiGgZk8ZHJ6pvsLqEi74upoyjrmF7u",
  "key33": "2SNMPShPeswwQnjHbxA5C7RLs3GRmzoPpffLgPyzGrJhDYxmraTQsAnj81YhHUb7D8NnW8bsG19xnNbM61Q7oz3i",
  "key34": "3rpqFf5EpTRqU9a4HSLWDiP1HJvJby5b1wotWXRpfncnGus83nrtsvX5HryXkkY1Mvnm5wZkxhfteRCHo9PEyRGx",
  "key35": "5U61ncAFijCVaL8JcjrEU1bijmYCzihonPnTbEBPBeKLG8yYrWXzXvnTsSFPrXNNqnC5T4HxeZbkTHcVAfP6vPbk",
  "key36": "5e7tL8Ui2Mh7Q66xp7734MTiCML4jEZL81SsBKjnMwXwqMjJgjqhp6FnwRdcCfb4TjJ3H6788m4bMktCX1UH6bNr",
  "key37": "2noZDUmSKRJr6FXg7aTjuRKXLVXr2PXmboDXpMwCUbp5dM5Tvxv23ssL7BgvkG4HLf1fd6r2xbtAZ2Tu2xzpfPVn",
  "key38": "kygf2L5YXtnkfpdvpBW2wu7XEXxyjtqErZk5MtE7HWKxgx9zcRMvm3arUuTUfeKh6vx1VuDsiHjhu8xatjdTi9p",
  "key39": "53wzqBLfA2hmZm675jtvECsQDNYC48GLFoTPwTA8B1UPFkCK19fAfGBf88bJPyAjmUwp2zjxw3QyWmrs4orEzqVa",
  "key40": "54CdtsfA1wVxhWJrAxbrsmJh9qSmdgiEa9xm8PR4oscnj96W5KDN63tQPegQozhgvih9DG79EHMZkgZmUN7nKiYx",
  "key41": "3bBZLKxWqweVKoHHi127M8HP2ZMVUpmSyKBj1nejCJ4xabkpLrF43RkYqeHgQRBiW92yBHiYdUNHTiy4TLDus2bX",
  "key42": "5fQ6yVQt7awfsTvdwbenBJ7q3vXB4aqg2hu96cz9jWPUMXS9kU4CjB28p25sbBMg2sJFzfi29pSrVFJS7H4uiGEW",
  "key43": "2BhsK52i2YrY6z6QvremtisvPQsafvo4rxZ2yMdLuSiai7CPQ7vHyJMkQniptHC4mei8YvVNeXaJSfDZSud4GGHz"
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
