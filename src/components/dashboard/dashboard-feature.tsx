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
    "ZFCEvhVn63zJhrhJWBNsPW85SJPS18m492zNgzDD6opUQety14Sg41hcQLK1BkVM95FoS7hEaHqMaa8BBa9TpUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ea4A78jhUUopy1xr2b6edGUGBdyyHrY6MbZ7FCdfcS8aAAmVi8TYBt51YesiwmM8eg3PBmNyJGoXbfrccHjJkR",
  "key1": "2DqvZKxnAd4ymzmBzejPQUx12BUANLKgXnsLV1H3XmB8rppSr7HVCnniEj1WTF2v3ystTaUiMSx67oV1NLq3wZwH",
  "key2": "38e5nPU5bPmFvMvpgft5rAjqThtYCaxwbk2or95QHcfGKTjrPg8fgNZYxtTX6cYypbs7HXZUXw3btwS58zDbodpi",
  "key3": "3FVeuYzQEBTVYjzwdRWDr8hbCeUp2W6nJg1HXrsTVchNFw6BZqUzhUfQRgt8hop4fy7Yozx85nefxk3rDSxRfq8h",
  "key4": "4kYie2MxnG5URmNx5VD3HhBBsXnLhFUEVhtP58wVbTn3aQnpdRF26Z4ANwBUH1soe5aoEU6RfWyGp1hKM4CRTgQY",
  "key5": "2ghZxwYmfdYKKv2GrXWsxHpEJpAgwwK1HxDgYbpfG6fWQ2kZ23G8Rb5rjYUgwhx5dnhVN7LsyxAQkVyN11X1wJH1",
  "key6": "48t1cuJydzH9U6TtHb1nL4epMihmkyoAe74Deozwx8MovEuQ2BwcHJufMFqcrpJaXPqTHdtz8BCZ3eqbJJjaKbrU",
  "key7": "Vwwtbp2ySybNsksNBQyJwjRVkEUkSRjdgM1D3KXSTpB8dppNvL5nnY78YEtqmH4EgefZ7Eo61mUbC14c8cs7miC",
  "key8": "2CQAnVmszn8m2hdyqcj4oPcMdX3izZTnEzTfadZdzKQ1ApkudXN3TDCax9CpNB6ei2Yw7aDNxjugvta7beZhX9qd",
  "key9": "5c1JjWjy1MbL6Wb9Kxim83ZnP6yoN8oFBGBeZsM9gfvDhRkysGPZM1Mq39HUWUdFKEXLWGpdorroMYpNtNFSuXVE",
  "key10": "2zo4GsvDqadKmZAnkP2tdA3XrUWznDBR8ykA7PwYXyZZySLty755BgEJxGdsKSyFdLcRXZerdoifcGn3T7dR5ac7",
  "key11": "UJ5UaKosAi3Eacjr1HJAxurV6H5BM2d6QErnASJYZPtF1GoZ434RE6ba9dARsyPFs8dgNDSALvCfKAUnUwaJwEq",
  "key12": "2pDSTUz9Y98WeS7vXTWSU3neRU2J2PqfLFuS3y8eYms445mwXeuJzXer6ANhmWBecqR8x832CDyZNV9dKF4Q9teh",
  "key13": "3nSttZPLCs2Xtm5BQJx5B79LrDJMK7opp2vRfRxws6BVJ4aBiAeduvUqWvtpoDXRrLYJcUsCyBqFDAN9QWRuXBd6",
  "key14": "2y1qtPEDAyfJB8zkwY8hH89sKxdy8pVyxB6UVBzCQkf3i8HGQNrRroKcMdULjjmdXdMsf6W18ptWabJ5FtjNct97",
  "key15": "3GisZTYJCieXNQKSxkz8hfYowjQxnadbYoGwqa9YpokSEBQmzWu6TSsNSjcxvX4fAG9WZbbomtDdGk2qCSAqQXxb",
  "key16": "5BfqkLQRuMPaCK4ivakiVfMRtZxtTpeaavi4BFzZr8RWfNbgK1oYKJPooFnRaiZhqbuDgLU16prCeyeoBqKhqLwZ",
  "key17": "3KERGSFAziTJHyVg4rEzYJEGt36goPoS9fuDTaHHZbbJbjjxKWymBEETHUZ69PG5ZnHebVPQjtjnS7UL7zy2GRJ2",
  "key18": "Em7Sx3VPEkZmGaY64yJoCwfc6T4voCwx9aEq9NswVfRMbsVex9ajQ6kSrkvRxyL5QzJrjq99kgTLcxPzpNLb3vx",
  "key19": "4h4yocbiPveTY8fj5CG5icJnsCskqtmVKtJViNwo9JGbuKVUgyLsWYiWom1R5eM62AVb4ikMUJeKSofNXaNacrzC",
  "key20": "4t5K9mFUEvCmQJmoHWf1VgPKoLJCcvBH4o9ev4tD9E4Bghoj1BesK3CDhrvRR4gzYjxyCXCECYxB2c4fdRgtP5SQ",
  "key21": "19cZmdgXPaDTcNmfENeC3NoWiEhmkk6v6itPq8wsBHx9NeUpCW7pDDYz42cG9iPgt4NoJ4MS2Gn16v5Qba9nGJ2",
  "key22": "5rd55byhoUsh3UrgTUkzFU22kmFVxSq9qvChakv88KjSwDv125ArjrHEVBhidSF3FXMgjwvdWajVEKwLia5r8rCP",
  "key23": "2cXtmgVZKRDhsz6yUc5QoRQj8ow9pCH8nNWoizhiHSmoGnDx7xZiCqg5LuQZewuh9V4vKxmck24tceu8K3urgXjF",
  "key24": "JBX2GyuafNFjvmM7Pbvfpb9MCrTZKyVtrahYEdgoTGrJKszWrKECt6yZZKBtPaAmz4Y5MSx8rF4VBtK1nddooXA",
  "key25": "44i5nKiLRi4marpMAAHopXa3ngmDeW5qt57pzT2rMUSPr8HUZQ7nLGioJd8Vi9CFPnBkTLHbfjzdzsJawNyQrCXt",
  "key26": "58Me7PJLhu2rZ7ztPZVHt7wPTRnznFh9EPtGcRdStaEFD4x2r1b7wf8CKLzCAF8Jec9Q3d4PAB6m2SDaoHJSrE25",
  "key27": "3D9FBARtvWKWq3jbeXiw7B1GuqtD3tj1vvvw3dFY3xsupZTxAUorEtuDEsCyKKZDk4VanDJ1bMznoD96Dn99EcdV",
  "key28": "3uiTXyjZxN8x9DeZ115doYstGkSTxArGtSAmW6WMvGvLPXNioZN7eS9JiVp4UAf7kvoBvWxpcY4HqMrF4WmQrKwH",
  "key29": "3rNFGL5otsbkbmP8QBBVEKd2feNDDRK52pTvyXMcXBLyFzJ9FR3xDxD1YTTUzm9nySbUAqMoYRbsPybWwY7yyiCV",
  "key30": "4nin8g6RTmyjkCC2eazQBLs8ptuh8BEDRs9boy289n6qxe4PUCii3YCLjMWytHR8TvtjkQ9uSC6cFw9J8X7aPYBA",
  "key31": "kd9Pn6cV38EUUm4pAWxdf35DAicGXtQ1pzZQ2VV7W7xLK1bPUtCWDZV6hAjJMqrstsxdoJy7gd5Ht1RrAKSPoiB",
  "key32": "Sbx9o3pscj5WAnAstwrSkoDX7A86TUH3jCcteUsvaLo9c9ByD4BnjviWJyfny1WJSsbRrjt69UkBK3DR4kgVKq1"
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
