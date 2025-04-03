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
    "2mUnQUE483n4yEeuHSAWCC3vsTh7ZDZrYcqrSK576qSBeGraTh9UJAZvLPHgjJnFvkCbiBkFopMFYFYA1VhEbS4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ie74RAZgYzz6bVT6haV28gSG3vBtcbArkZZQ7HDj1gAWKzL5nerKwjwvGXCL8EfBBkPf5dAckeqCvXrRemniSbV",
  "key1": "5FKpVA6pB3zbMEZ7y4xayHHMBdg7njGL39zPgunzBtabAm7XTiuh5ieDA74U7X1kCyL1HmwuJuz3WFsswJTYirCo",
  "key2": "4gG5JYaryvfQXA9GPaWLypznxvq2aWfod3C9s5xTXz2FpyiwTv9C4B7hGo9vXqGT3DpvtQ4fVgCGyG67DPkoqPc8",
  "key3": "3DbMCCTpmZEA4w6BdZBuxaNqrTzBCn1re6uHexnJSAGCUnrKLy6GNLPMSimmppwrrumBKEtbrajFVgkqR48r84PW",
  "key4": "4mAEDZjfkZmuV1EJ3XWd4mGbAtyBDQD7yUYb6d6S3Y1QkkrQyyAz5uMFNNpTLZ5yhWhXa6kui2NoNQF5fqD4V4qT",
  "key5": "4oMG4U48kHCssRMNbRNzkRYAQuLdKGKGmjKUo6trhQ6aew3ubtsvjni9xK8gWNgRWbj8hxq9nebZue3rWZVv4iS8",
  "key6": "sJeX9dqCMMq82e9L4Ld5uh1hGMhTrzrqZ5eRY2EYLEZQYS8LQmDhhA9YUqEoumc6DM9y3fUWarFpeYVDQD1Jsqh",
  "key7": "5jz4pFJQGheSJQR3fzsAJuSwsopbejsoNHiZ38Foyrn9m3w39cZ7x6LLqvUNTvBrA6DEdFoTcEJCtQReauMvSBhq",
  "key8": "3oZ7DmmcCFc3D2RFyTdw91WnshbwYcrnp7E7n2XSijLDrwH16NwQLWnrrBfHBD1JpwsaGQbsAtbyGegzqkStuocC",
  "key9": "636bybHtK9sT1ZfnNkcXdH5T75vdJGhEJi3aLVzf4RyD2Lqhwv7oUcKE9uHhzqmq2phKX7vAYXaC91d7BGwHrc5Y",
  "key10": "9hAepTvpEMekMEf9nAq9358jqxckB6hc8DEjfGhoUeqrm74V76L46PiQPY5wFcg4wHEMbBaCsPaLPcJDdZtLcML",
  "key11": "67Ew8QJGdWnJzYabyjeP9LJFK2ZDg6ZRKxdQeRzQGiJzoNWEfcpp1qik8zAtTwnGi2H192UhxMqFY7J8sx5wmQmm",
  "key12": "3PNZKWHrbRSRofqvanJC5fFnag9tokEWABAWvCvVvqmFMxbqf98iFVpDqHhaEjxHMsYdNnvVBC4m74VqGdLkheh2",
  "key13": "5iHcx2a48Kben7PbztWoJpTw9wLh25woZXJg5koyymEjQyotFWndz5ShavdyZXz64iUVMyY4ytkpoPedDK7VVzMc",
  "key14": "5ddNr5MHgN4QPa2BcemogUEzk8BaWFtTJahrQkHA34VcH5CUYQ1L54eSpRTeHN1TGTRW11JKHWJbRdJvchppTs2K",
  "key15": "5r247ugG34ZRHUCUaTjuH4zhrzReKmLk6HH3umkyP1oEyxam7hnsL6zRvY8NZAj2D5ASr2RRST5AG8hc7kSugf9W",
  "key16": "51wNTK5CAAMZFCKmRvd36YScDcPjqBsuniJ7rmQfwe4M2BxGu8KcZnb9Qb49RMN1pnaVxdCCTRt4Z1CwJ9vfdWbE",
  "key17": "3bGvyADrvoZ1haF6YuEE6DRv56vrAijDz2ihrB6mqgZHpcbUMdNPpGY7qxxEvh6VqME951wXHBYFnzgnx5Uuap9y",
  "key18": "4uZFba2tDSMDk5upFRfqo6Nf3cm5LHEMxhoti9QKaDCr6ceHQpBowARMiAdCGPv4GjBUKKsSfCGXYoQqPXNmqARy",
  "key19": "4Y5vFdAcraTyBg95HNnTxxpmCXgfh5MQHLNDFZDGmF7NgpveXAUvtpc353ixDRPpCvNiCyWaDrSubWHsHX5rTAFd",
  "key20": "A1nHdj8RLQBNfacXP3Jy5CxjWEcHpiEHG7G4JjxXcWzWQiaFJStjpwKtGBtyVcoh8S7z8LgTGJCVL1Nizxf4gb2",
  "key21": "46ZnWQVMSSwxR7sxoMddq8eg2QgadoSAcUyjWgwcdQ9WFcN7RmJufHj9gPCCgT9ex27S7xPjzYs4F4UXsHaJS5dv",
  "key22": "waCeUbitjqEt6XNDgNULULL8dC4qNSZowCw6vGH3cTjx7XWngY9sspCD2X2DLDeY1V7E2MgQGdTeZoFeHsrqLiy",
  "key23": "2rVyXnobLkrEEpkLrrmrXmLxZSotySjTmcA3FqyNnKDhNKD4ShZ4tMkZKfg4x6BhLvBhH7JhouCp8sr8Xydu22Yk",
  "key24": "4UTDyU928pNcBQW1i3QyZsH7LRBcQL1GZxmzQWT3wTDoZA4QJ2PKXpf1Zcc7xxqE5w684TMQYihH92nJwyJhFzJj",
  "key25": "33Hj4CqJzL9bWrx1ofSgjaC2uFwarDkqXt5vYz36xnQAKK9V6ieAmHdkYZmuQUEUPWdchQVCVpaL5hwvfUxzwGAo",
  "key26": "CYn7eRcEoMxcRbiF1EmPRuZdT3VTonqfMzAKKpxDoUtF5TtJYEKxgg8x83nroR9NCngyjHnuVaWR9nBXFrxmSWc",
  "key27": "4bZchdc3ZuZshy9X7TxqTEpKcraPxnapDv2RGVUG2D5LmqV4n9A3XKC2Pc7Q6UzRrn4gvsv6jJMBvzCapi3JAf7G",
  "key28": "VUEceaiS7CrfEPMzRPmDg1WvNUjSp9Ai8gAS1jgFgPu983mAezsFkwyS2Y2pJZ7B66ZpwBFRgNqfvgs6B5zRaH6",
  "key29": "3fboMdZp78M1efwCom7jCUqqtNsoKgqGu52DA4rAPtvQrxxaGxvEz5Vv77CaSjQCQwReQGQxVtNQvRg6oqMviDGf",
  "key30": "3YspcNCS4N9KLu4Q7HFgFSkVFMHbKm1Te6QbBGitJ9TPKZGoAC5D4sD4kvkm9WApneLYYrF74Q5zDzy8m7oWRsxr",
  "key31": "8DDrbBR2ruyD2kG5ybJKoZSZ4pxvaDh6AHYNUVzg5xG9VSMFeRFr1D9x5mBAAEcvGRnHquK6GnkW7KqWFBZT9cH",
  "key32": "2ZGVveQtCpqWxGM4Fp5FXquRL8tfTFxuBMGsWbresKVdzqhDaFrXhg9wksGX71oRicswpKoLpTrLchNG1DwJzHto",
  "key33": "5NKgAPawG4MAqqEVdMEKsfiVPU3vwYh7VnBuMWU4i5UKjb4VjM7m47myfqp2BkzVjBuPJCGQ9Y9Dyp5U5zRypg6p",
  "key34": "4ge3FUB3mTdRJFCmm7SMKzNYKTz2xtXZeRbiXDJG5guMJeGQ9yc1L8VG5zJ8QbPYNmojE2VD8PzvCyp1YxEmidiE",
  "key35": "AsKpAB8U87AfgzxCHbp6LFx6riFY5fRB92MYjwSxEoear348J2oJ5mTE43ukq6kBvPi4cb8T3oKv6qGbKRzD2dD",
  "key36": "53EG4Xy65AZi1BLA4McC16RnQhFMtRUNGhXo1MiHCG7sqU497FeSYdKLGJ8DpvTNokUqNpiYXcMX1cxWBFT3GtSn",
  "key37": "5JcVNP7XejmhsCWAkY3ZGTWPbXWEaUk6NeKpChDXwQEqp7f9ArKUZJpcb4uMAyPXXQ5Y5Ccg3zEQxuUkn8ngdbuz",
  "key38": "5mywAvKtZnvW1Hgk5b3f1aTtBSUHwkmEAA5kKRjBCKxmZM7GFCAJLCB6Ws5nyJrv7oj9jt63CTCzZDEqCUHS623C",
  "key39": "5FNdx2rBwTo9Mxuttv4svvehbuwo6Z2vdMrkPLQWvjgawYCJ9c1yZhYqD4CDN6q8Su9jsb5gTrcecJMA4TPjNQgn",
  "key40": "2hDgiknR6T1TisZjZiCyngM64yupRchjA4rCBGKk7UR4BwvbMJVErk2ZP5SmaEpcR3aiSkyS36BxRPhuVyMxkXkP",
  "key41": "2AbfCKhFUKwy5KwfBsUe49TYa1uRfaP3ffovBcTtU1qBp28SpqzGeRVBRUtJANAHAFqbdQhvRdBWsR8vPe8fofqr",
  "key42": "2NLEZuKAvDsfWdh12y9pmK7fkHhNTApj9pGjx4Pe22BatNQpN9PNjFoP4rhnjQkQR2FRZczCke9o1hkmwFFz2vRn",
  "key43": "52L7PXqLCK3P7onCsWMc4fHqwkRFDh7AAPSfKZHk9eBVc2KrEch1NmQrib5PHEgowuqnRGZr8zbsRWuywMjyz41B",
  "key44": "23Zhz92Hss1pdbghbWK3G5gTAN3Fy349RpBK3bwKhmgusNkAVJfJ28MUtBYBFiADrjT3SGMSrSEb7m5HcJ9st9Td",
  "key45": "xhQWiNVnrQGKsuBy6zqqPHdJa9Y1BLsEis3cQGWto83KqocnCx8dQaVRLgQuHPbHvTykDVvhCFew9zLbhmb1Z3b",
  "key46": "5LpG6CzeUeV3dGRBdHGLUUD6KRuNjRSjtYGkTh3ycCKTcDCaeqZ2o1nJzUh6kSH12SKCxNwFwcvr1pmcZk8X6N2Y",
  "key47": "4H3RZuZX36JBmTgr6PeMZ7mJvxLyzkQcN9JzKoMTof1YveA4KcsRpVEgzb6s5KPr8Rp2hJeJSsMn6m6MAWsFpaXY"
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
