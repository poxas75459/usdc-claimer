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
    "4Mf57bY33nLmaTGwoCKHgnkeYk9vHYuCke5FohDrtWm92PzTyoFCLL31nnkzwuDcddjD7AMezTEWrtP69RPFikn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQewrn8G55hBTYKxFj3QrBudyQQFbi7Jhu6D1LCnUhoCtDe9wGn69WRYCCA9rhJ7sHbV7DGUtTJjSQ2RWTXFjxH",
  "key1": "pth7moTZEjnhjXA42FQUpdtwGya3HjUMRtBQdyyp7myHxGr3DbKnijgzPpBDAJQuWUWJ1YfFV4S4frCUMP5PK2v",
  "key2": "3omCvWtyuRCwoCpM48okDDKrYL3VKVL1LMkGYJrBhEbfK6acex5DHDroT8p5H2j2gJ2s23g7z3tFNsYq1NhFqrVM",
  "key3": "4zr1ubGfXUmV56i6m1QdfZMmbByuae3Pjkczo3CrMrE6CyfBYsDyYUzSty9diV7EnrzM7MnvnUpSPodZWDbaaAjZ",
  "key4": "vtJRQ3Enb4eBPeSRbYhyQMa62eESPZynqgfAGfJM3GNRHBmJUBesR1iyRkMBNhtCCMTRHyUpSoFzTzYMarVK1fw",
  "key5": "2hFdh5Sjcezbgj59aHWpLNFSTfjfDrxnUxf4g1ftyDvtYRNwjLLR4xKVnriDNG6j3u5Brha4qgraWPKQhd4Da29B",
  "key6": "4pgW7NTP2qVTSAfs275heWiSUDifyU4MTWAuRxMpQ5qnwJyjVNm8LGvjLZmiXU83QdNVGfLcwzAExjZjejnGZmKs",
  "key7": "aPiNsUMSsSjUoozrXM3pCWnrrnVz4R9jErFtS1ehqW7XDWuVSNKj5wghhx3TfnZXsSmfLDhe9vFs95zaB6NMbtR",
  "key8": "3rXP2fMC18LAQ8sE1fDj1WtHcZKjacrC6iUdwdvkeg83yFspKTgoRWNazruZa5w8esQYATwZ6523zdh4AbP7DWYx",
  "key9": "59LvUwS2RdT5Zjobz68xfdXNrJr1sEqnQkwTcWAhY2ftMqbfnAvGYtUY98Fs8eFujpr9EGRBNRrH65HyVoUHuA2k",
  "key10": "5eFvNiP78UPSejp9848skHkSW6YUXrt5529BLY9TSSHncRVmty5GobwTcpqU8f1qsuF2KxRCoSUXx5bcL2gaVw2c",
  "key11": "5BKbpYFdrj3HYTC7rEtWpobcyywQ9jgERbzbCekepRQCpojLDSnv1dbSpU6J6rTsmULv6ieJHVjBc697E1W9u9o",
  "key12": "4iMapdxnyJa9rd38uer9ZcBy9AvYADup6H723Hv66cysFJ7nmmLPPdTbJbjEYciY75mj7bzuPZR97NzKo9RkqvU1",
  "key13": "5XSb4nstRSXywPMQVj3EpwAaCKLx6tpAaR5nNp9reY4SAbQaouD9ZmE332AhWsPjMY3hFDwBkEEBHyA7doLFDcAX",
  "key14": "Q9sBsg8LzfeTxMcWycGE8PzybFyFs4eypdJ8u8ur47XLCh69bUY2m7wEsjtyw1qLUkoYquJnQ3FAuojzUYjMm3C",
  "key15": "TDeZBrXsLo7o5umNdvxp7EgezftckvWyVHx9dpseQH6CGQMPiLEzUEV6hFqQPCgfzUg5TGFkJevEi9uXfPm6vra",
  "key16": "gyq3SrKzT7i6A6W7sgMKJfibGo8MAcuJUYqbJyx9mLPJRWCL1tu4MMEzvHgjFSZ7y9oqnDy6KztMtYFthEpjUSw",
  "key17": "5bA1BxXuZYriyYyJDGy7qFKch8PRDpHe2TVcpjVjYZRa3EMnW1ajFm1x4nVAHHRiAJeUBjC9JSmLTqDD54xL5Ugc",
  "key18": "3NiHhtrXaCqE8Ciuhn8hoSxA4sBgDUw4YnFHHPEjjBFXXLvrx9bjas8feyEEx98WkngmraokbosVaSTY1qFuUFcf",
  "key19": "485FJdaKzCMo21YBFm6QfRVCAorANgKMgmRkJbpyAhiGihJD8cEKBhi1pd7dw8qz48G9hqKest1KcYVHLR3U5sRo",
  "key20": "2YJCnubPhczfh7AX6D9Ag1AjcAc2n8HwXsawe8FhFDcgdEiZDBJYkauAB6FMPNy5DkP12QLdK54MryXR3umo8urS",
  "key21": "4T23TVbixqnpn6yYhwDXmNRUis7RsoCpPho6E32iECPVzbRt899XDYir1XoeUxNinwvERmJSJqpnTpaiLGbezNfR",
  "key22": "29anUDcxDuURT2kyFoEsuqebys2XR2RHvtA5oNgiKrWB6d82nFGXnPtv7N1n3hxW56g3usFGQ98Vyk8kB3ayiLoR",
  "key23": "4srzmYNnGHRiYtXR8zA1Rh5VUE4BB2LiC1fAtXBjS5jfJkLLuixzdT8tU4YjnLYYj7uVUqqiUStTJXxSWWDndv5d",
  "key24": "2n6nuGBzBbHu5nZm31jKFwBA6u1fGeSPoHJXvwjanSsSLrj835NcG7WX2vFTvje19pwLcHGq4XpvF6rXyDBWJWNn",
  "key25": "5LVLgMGoy7ZeYHPu5EUGPXNCk5s7eZVgzGN1NEEDGAGQx3HBTwiR9eNxHBjduthMXSL3Q15bPuiyDTtFJJ28Bd3L",
  "key26": "4fjPGizsL2acLjDVM35QfJEkYTpkmgD3JREZ6FsgfNig1Zc4Lu3tQ4CJxt6WrLVy5LY9iGpGanAsVoaxwUrc4gZr",
  "key27": "4pJFGpVbZXKVHQrDt5ZUXyAJvqeikwtSw5QoFW879MTgvZ56qMbgEKD6Fid467GRbR8CFXt4HFPkdBC6RRdgFc5h",
  "key28": "sKQ8BwCTTqHNKUQ8CvZP3EqroMx1yyEmxnDSYtmc9gHJL1LuskrQHbz5ZisWud7kvvharV9fu8D9L3hRyBSqfTf",
  "key29": "4pRGv29aXqJgXpweu3jMQuRFUdePRmRCGPbAEkL2jeAx1AkYKe255uDFEqhXsY9nRaRfgQbrQPCspy3s2mcSoiBp",
  "key30": "xbTY5iveZsvj59UcayRP1FankpcuAmxfi1XimqSCy6b8BZk2LUwHnPkdXZPCNLU3zEynGNWQHTLRPb2LzDwvkdf",
  "key31": "2cKmWEyLftWZ8tLTjZkWL5kx3AcdBRCHCkTArXq9Je5KwEaViMXHQ4EVrAFuf8zxuGJzsX4ajovHf7PLGTHQxgsT",
  "key32": "4mP4PCDHVrXaC55NqNevnDZggiynLT3bJw89EqnEMTMoZZSd7RJqYw43Z12FuZRzsF2M5CDCu7sFvoyJQSTbuW3v",
  "key33": "3KStJTEJatZwiWBRAQD34dsr3msQeS7SCKo4JfWJJVCKsPkeKGxpSnMC5cXteVhMyR4w66zWyHrp1JUNXoBKVYL8",
  "key34": "5qvw8phrigyVUdCAyCdj24tMegFkDpuTSPbtvAhtU71iU2CFnJcDQNpQ72iWZa6n68oPW67RTUnzvP8BzBWFQwZt",
  "key35": "4nkZiHkZFaLn2cTbcybWhGMtMwjqCdTazkbtkWs9uHfzAL7PhYz2oGkVH1sabgkknPRrm1vuyBANqM7u61zM8NbR",
  "key36": "5Hy6GytKJkjahCxqRp3qF5vRXpMyA1s7BAsyTFZWtf2PH7BvGbS9sJX9ywczAMAXKKs4gunkvmvyJvGuzvFRBqXS",
  "key37": "2Gj77rwJQj1djCg4rwSabCfAfJjM4zhNd18hD3ECRxUUxYKm4Vrcy3zpV6ZVML9VMnGLmZrdaUAQG1Yi9kQX3R1i",
  "key38": "4tRVXgzqRGQNpuRPvWAyJu8zHvFkZ2SvQuSh6hV1irJtSwtzduh31GfCBdnJF9UxQ9ZPcPoPYeX6fBotdMxr5Y3o",
  "key39": "2TvXE5vF9qSBAXRanXw6UYSkQkGpQZHvruqSbg9d25eMhEbqtZsXiTm7FTN71wxwj6oGZkYkanfU1hUxKXp9MJB3",
  "key40": "rsFuds7ZdEjFEjjvsLEfHB2GbHvaCEazMFMgcjyi3J4DLWMwANYwo2ikkwvXQcktQvgwziekji6nmwZmzVBa7vV",
  "key41": "fsTm7BsQk5pftBLhJnn5d5gUjFSJwmmHQiMePcriBToQgomhmpmdwQNq5zudQa3sZJx7hCKvhfohRrLxxiQquHE",
  "key42": "5jbS7mRovrv9mKNXix6jYBD9iwraCBzuUvYVMQV68PRssd4i8k4G9VyqfEM3GFkM4wiDFaWVk1BD9WmAcYKQbmHc",
  "key43": "5e1uw3WBC7h3BfKwAsU14kDTp33RyfAwqrXcaWzYor7m6nuVMPv8wFQp7zeFFibt3QahGTcdEjiDHKdCMFCQsGRr",
  "key44": "3M3i8Q9Qjzx9WRKM4oNZzEVEP4F8iKhCAqndgKwjXgYNn7Y3Hzwch7YtziK6AChZuevED3dwaXjGVWXMby4kuc8y"
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
