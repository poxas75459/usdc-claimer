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
    "dboUrEQDC5vcTxfNALwfvWcvWCbzhHqAXpkKfSkkGm53FtJ2SCtMHKPSkUxaYVocs4oRwgrAuGMuTMNxP2Nc9Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KHUqgzdAK2qopu2Hn3prkGNzDuofpG768NitxACb5KmN2Byqp22WQpsGChXdSUu29gUqH2Ck9ykTWB7pMUqFHV",
  "key1": "2RxL7Z7bYbHAsyDJ2QPeppMPxQ1d55M5c5ArAo4Tq4bPbXMsKEhHbs5Ud1DKSNdcrM7nmdezfui6fAXr6h7TpTLV",
  "key2": "3PEDasf1NH17aQkdpDP2Z7Vhxd3UE6aoP1TxJTto6QnMhvBxnJuTXspjGhjJY43ExJgCqbza7FF7vJ7bskEtuzGV",
  "key3": "KU7ZwSdiLik8n3tEHYaX4mymTjdAvere8BtH49grsRKV2FqqTaqLkdHmBGR3AvwLwiJUy4MZzLWuVcHnWAoqW3Q",
  "key4": "344eiynC7QNufAEkH5NPf3L24aJAcjAfE3wkP1MQuXZRh7PnL1wWwbCkvUW7hCqc6qjHo8HQqMws1wsQ9zRUz1FW",
  "key5": "3wMMAKz5S1V99SafFfhptjqjd6DKo9rjSh1bPEJEKojhJBftDzUj4H7Tg9UG5vcg9SBExcSS2hWcLmLRdu6FLour",
  "key6": "4epHmAzerwN9HUPpsqBaxqev36nQBgZDhwtogvTtHz9v2XbWa7b4R57S9ntYkqWf71d52vXnbpJbEzUh7fLNT5RD",
  "key7": "3yu1mFFys6hsaSfEqqMAcKM6KphPpV67ZQptcNxBKWJwDsG4rZSEa52x68j2mMM4xQyKYzDRg56ZCPrVS73A37fk",
  "key8": "3YhT53KhykdqdTJZdEiXwhZqYPckm7hGJAcVtYbKnV5oxzLk8oqTn3DXuhxef3LCdivswxsYMT5kC4vVrGL6sCGE",
  "key9": "5wwZYJiGyoFw4WjvTGNvzJCgFKNbs1UMnSnzkNPpZ2cPMtjr5a62P6ELCMfSYW8PrkHe2FaDSY8TL9TJTRrB2oAd",
  "key10": "3t4FrRFE8PHRJPEiv9Lc8STQVt7cyXfds8y37oV39rV9B1BdyqM4WXaWhu54CQesB1vhuSGFfSvtMQ7pSxo9MBdp",
  "key11": "31191iBddMFYHXsg2yf8Wso3hu7i9FwYEXjGzBbuSiBSKN19tqzddzdb4SiraKqwWLwB1xKN9AjrW5e62vMZamoQ",
  "key12": "4CoKjkEWUfdJ1LkWXDN2cgxFE3L3ZjwLBvp9rWDyfSEwGQLcskn7q8bXQ8DUxMfDdADQD1dqs6e78xxebhHW74BF",
  "key13": "344UongMd51wMKby6AZc2gfB5S5yLCwRv4Qi2KAJSjAm61dQmnyj6nhKXLiKsdEJ6uE91rcCmZ9L6TW1aMgGQWnq",
  "key14": "5ba3M7HxwyBJaJkC86SVG3erQwJXe3xt962fjbREJe3apZAjKC6k9VWxWUM6HPur8TVNo3vGS4ZAbk94fbcBBMmJ",
  "key15": "4uLBqaxHNnUhietcrytJe9dQrZF4YdazvAPUCwKymJgdtb9HHmwmxLrAFivnqPd2wEwEpxpA8HjvYWoQcYNnyPxc",
  "key16": "3b1n8VXy4qtePTd86HPF8RNchaJxNyRZ4PnZDsFeLhkdPKUE4YedWGJwWgjCUb7dDGbP3yHr9KSKXkax5ky5TpSe",
  "key17": "2WXNUdz6T1kLyGZaekKYj9U16ELc9d7hJs9AUi2UnBZxPZ3eo1sCnRfGMdAjokrbkrRYJzcUAXzTuctGTRSoN5Ft",
  "key18": "koJxpCrzsdZ6Jdu78G67vKE1H1i3wGWc1NTnMpw529PiRq3BuTBcrvpr22kSE3mbF92mrs83b4skrh2hT1gjrLb",
  "key19": "5x6BFpvd2zFVta3gWznuAEYQZgPVZiQAQEcN3CPHorXB1VZJNFDRYRPaL2i93eUSA3DfcjpLtKcrQDf1oHXZKpdK",
  "key20": "4xpKh2Cho8NP5XvgExzznA4ASrzgyCa9sKHG3mzLW4kKoQjH5hnNQLTKHZvE3m93RdYRmGshzgp2fK2nWTmmXBFz",
  "key21": "3uMtxDrVa6YCNKxSKE9z76Ywu5SvnSoTg7LaqDhGDJpSTu8ExkiDbB7sbCteyy24jUEHjSkRzeUnHDi6eRavPUUn",
  "key22": "4RgL5Pr4K4CunysASgRD2ZP9maRpMVc8SAA5R7JiFFRhhds3qLFRBXQV9yshH4TUwyGyQoq24WLybsonGVeFdzpg",
  "key23": "5gNyFJWdVNgJseU1dT6b2FFh5ABkE42jQSZJKBqmSnVSwenuaXUQT4rUanJzGWpSEyNkWX6sgCN1EVQLssGYFEZb",
  "key24": "63jjoWp7rutM2JcqkQqdgMxbA5gyb3YyifS5vhFVeHsG2yjJPSieLvPbbHPL7N3su8AzddHTNSmUmvhzoFx3QWe7",
  "key25": "5UkC8YtmeTsmRU3VFwpkKJBLRdXKxSsdLecNt9cur7HZdco5Gz52GvPdSeLTAbuxSdN8pnWnHivVX8i5FD96Qpie",
  "key26": "5qFyNDZS9zPHrGf8gWiZVWMMYXrdj91wLgbVQrVP37Vw7A3a5LqMdTFu1tkkWCnpucmfvFpZtb22x6e94C2fNuZ4",
  "key27": "5Ka7BCm6b4fSMpye4St2i6Ari3aDNDdj9hTBGaN3sj147sAdGxMzaAgmrfGswmVu1xVDXtcaJoCUZyfC6PXi7kvi",
  "key28": "3AiTJB7ShaEXuwv4shaP4b9hBq5kmXkkKe74AdpMWJN46LWHAJ1s62MGDRAseejyijetw6REPXWhJm6NAwdDBUaz",
  "key29": "49xnNyr2sspJiEVLTbPb7qUBcrRqFC7LEGAejs4NnChRytizC8LQAvi4sSNBFKq6WGFNzeUNyffVfVHKQeTf9Rqn",
  "key30": "5aL5rvA3aySqwtYDycAH2qu2L3vi2gmdTvT4UkYBbehWakMT5MsHPLLQiFN5YVRPv9zPAZM3wXeqRyRnFout9Nug"
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
