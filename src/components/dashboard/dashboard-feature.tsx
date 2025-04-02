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
    "3CpNr9WguAESEs6nWDChmfoJskHEmS7R1gdQuqC9hM5xMMbMXnet51reDJiUf4bYJJEepUpVeTYqcvfcrihscbMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rCavrbc5YuYaUuKBCBjw6cnmBtuae4jfU4iVKubFFQ7NartqrQY2HwfB5q9XfopEKge1nBw2pHS4isqFCG6n1c4",
  "key1": "2YJWGNXY1j1h9aMGxnY3VM4WDdf3dKNQjaoXY7x7UP4pU8RsnnaeMvzaFVpkWD5cx6ViAMZC6U9TNvdy9zLeBLnZ",
  "key2": "5fVvUTwW1776V9G3YKP2xHHnKCnyH5ttC1gZQsuR7s8fCMrFysVeP4ZXq6yDVQbZStEnDtkFj2WwyuCZd6mzWp9G",
  "key3": "2tMc1kngtX37BEAW6o1HGyNBuxhFtnVLpDahwKw7kaPRenFgDbSQog65AeGtBVYuYwsL6ibWTaZg9A7oDMQBw8Mt",
  "key4": "3tz2tfKbPPcit3QyySX9jSBVbSU81E4Pcr6thd32Vi6JTyvBVsgLGEKR96tmkxiNSWu4Q97zrMw2H31Ln4kxPL6o",
  "key5": "g533zQkEpU7m88nyfHC177dvwGVaWf4A1vMu42HpQQ3AU6sr2y5U6nq6Dnfcegx3bQV9WMe3WpH5xVz9gpxQyWb",
  "key6": "333MYiiTJ6S5McxzmJzexYdw87m7LquWtEdikWJd9AbwDBDqUq29XMomqSU5RUcCReXtfx1ujJ3XNtifsqCaZGDR",
  "key7": "3T9wLhJsTDTWyibaZ5uff6KiMGZrX2EzoTdxsNF22L1dFop3anq3kKqtFQut4ekJRbHpQGyez2cB6oK9D4ksLyo8",
  "key8": "AnFyP6BsuFfnkyTBAp9yays5fxP1XGzama9KSLG9N97cxS5F95x2v48bSePmiD69xfLMrAqeRXFBD9T8yKfg3VL",
  "key9": "3gfFosTuE8dh2hKXCES3M1yGe5CNQDQx8gG42czUZQUjYHca66pmHJvGLZkiQDgAgwo1rBftp7GXFw5ZMkedyVeC",
  "key10": "4aqtUdhFAHZ4cQvGYXLMaoE5Pp3MKwQs9n8Du12GsDxCn6jo1r2MF3vfgMCeUFdhZnNmi9SkWFVDRuA9n9iLe4gw",
  "key11": "3HqXoFHSDiQHeKqgQT2PGYMLyhnC2CBmyou5uh8oW2Ht6oo6qmgzERcSTba9GNHhnLHgB5xYtpXN7uWok3gSKhas",
  "key12": "4chb9EidhSqsqKnAqyk11PGfwYP3Mk4o7zWk5CcXjuEk9DEFbNUdP9fr8Uwtv3FVVimi6SVwaxZkJUJDrBBsEgAf",
  "key13": "2aDg6cDQFZ9GZhAaQxFC6gVxDZtCArLVNMkoAbvrw5n5we1NUUhQ6gdiJDXFm4yjiHqt16eBBLhcc4iJNsh2exPP",
  "key14": "2AFMMkFYvUgDLKBphG6inLHh1JWNq9KzkJA14TL61ihKxfyaKMZLoS9abR38Z92UqGQCELomPadTsbVjSeLWg5fb",
  "key15": "5BdMnBGsbUD5dg2Y3cPJtJsUAwXdrsxMwPjW3hmEgknQPgLU1Z5XDQwZDoewosNkpiGtLky89ydh4bn7tYwSTeYV",
  "key16": "3i77ngYqbhFDdQ6D2yyU6Ey1BK274UYoccSpcQWanKQrahDYu8razjddpRkRYo5vgaaKNf4JciwmYAnT5Lyt2y6s",
  "key17": "5zQyNDaK1WhnqYTw7YZiiB8yRmTBHoTccQBgDnzQGgreksRQUEJppgJeJGUCn7C1vpbLN67z8KKsyYXzm16d6MrJ",
  "key18": "2EtE9bG4GdRsVjpZaJY39VtBD2EAunmM5BWNYcb76JPB4BzCXGjX5Nyrwo2maDn3exMAEzWvrqtSBHtaQ1RUtwam",
  "key19": "3PDAPmf9VdwCtrWkFeGzATySqS84uh98oED1tbcrF5o7gurXyh1cj5Kt4WCLgDKjQfqYH1LarvpJEwkcfsgLNBQx",
  "key20": "5x31PGp8msyukESS7r9yNKoWaCgTe4ECMjXdNDtshCmQCcbmYmfk9dnuJmPvEd2P7EzFZ6eH16MqSAHDeiQV3MPA",
  "key21": "2XZ6u77aKsNLf5ah3kMBsBdcjDXxp5Wv7dRkDP5siGM8haCwWALek9Ky32jDDpCPzStD91GWCJvKizX7UeHJEufb",
  "key22": "57rEqaWjan445hfddjRCvM6Xcfpp7brht3Hanak6ZoqRdQ4fa5Vh67KeLpnGhm4ZkwouZJcVapvkVownvhn8tHbk",
  "key23": "5zwZqvvZX1a9tzV2eNcCJwV3Xn4nn6vdYV5y4DC4Q4GKCLFQfRfdGwEsrL5TRPLbfnX94iDe55HEpvBzoef78SXz",
  "key24": "2fSgkJuq93SmPSDivJmhxvLEVsaXkriGQik9HJFxLoYooQt1a2RNikVjvVQpqt6CpGFDva1Q3q2mUrNQeJdnboa4",
  "key25": "5SZ5rseZSoHNQ4woPXR415toHDx7mS61ZHjcbDdaAEeURZNrif5d4GTs3dDzirgPtwJXdo7BnAtz3xjr7reGsgJm",
  "key26": "2vCStgeeCFXXFQcUST3Jbrb5A7NdUt41sptKexZX4bx4DpCcBS4AJTSQ8LFVkDLaTpxAs9EvhUjuFAmFsi4v7uv7",
  "key27": "vhmizQrXwHZM8zrgURpM1GYXY85qRmZyLuWq2bGL3YZ94NLCGJSNLKhpWSUxayx6nH7gQisa4pSexREHEFoa8vK",
  "key28": "5v7im9cm3bgSLK91MCvXCsGUhLje7qpkRdqfvWUCBPANHdgfq7G8D4HKDdvkkKXoaac9KNjayidgBWNZ9qG6i6j9",
  "key29": "57Mo6m8RoihajHNbMDoTVgpq9gs6vdnDrtCjac83QhY3n2dM8GTwk44hZHKGyBdxnaSLhWSEuJmmxM1TVRzHXvis",
  "key30": "3E48z3PiRDhDHYLmdZjxKBi9qjRyqYNAfWvTaodL81Z1FJ5YvcpAf75f84RvxkFomTrEtrFQwiqmTUnb6effvJA7",
  "key31": "VRPPdSYPJbuee1iAEB2aqCJyLj9GreRUmGJ77jP5gRUYreGgyD1pe79ZPR45cgcrz8Bt1GV6uGt98boGPRurEhb",
  "key32": "ssd3NaW4jE5ATVyqHEZ7ToYUkcNFJxLV6a8dzVTcfgea7q8Mt5sUe1t3DewPSX3hGCmzJw62m1eEAivwHxjQxN4"
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
