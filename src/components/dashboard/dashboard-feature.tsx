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
    "DHhd7EPaVAG6dwNv6mKtUcF9h7dcuBFsvdZWbJpk23WkMQSarVHPpJ8zd8C1otazhA6tTmwcjai9bir2BBsSEiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfB9fJqDtscPkuTvcJsNkaFd9hTc69KrW5mqT4GEyhP91g6EzfdN5RRUehR2tShScPdaTzjoGJ5kgLgfMaGKP5x",
  "key1": "3iQiCNxkcBibhfpHPAXNYEtUpaYbpSSMCkTy5XFcDpvRaQR6KVcbq4bF3VRmy5j1xqAQrsz6Lv5j1TWw745aHmx8",
  "key2": "agU8XipCwvonPCCnJ7uhw1S5GxevbiEn1WgHDLZU4oSmJsvpp7TNxtzGs7Zsizy9WLB52AuSLSED14kKygo579H",
  "key3": "4RvnbJWJf9zPpsF2wsboXf3bt2BoDfDR1UCL2gyrViNNTg9zuW35Fz6i8TQ4yLoXQZYdkqWdKZ7HGAcKGihJSrKS",
  "key4": "31Wz8nmg4D5uU5ASsKFD3B6AZ7jWdT42NS7b68BSeaggYfYEhaYMjVwie4xH7A7k7rcwBA3FAZXW412B8iYRoitt",
  "key5": "4Gv2c8neHEnV54b1Z2afbAdDUbwvRB5qVuofQCRiTarJ7FWZqmLHYYrTsppQNQaX43jmPD3hV3f6Hnk9T336jJux",
  "key6": "xjQCPRkWNcJH5mVLeuTJvAnT2A15MwhmdjTw9vy2jr8nYTxXuUTVCK6vKbdqjCVkfm7TW2mdD8SzDTEiSDw7GYx",
  "key7": "2tcySEpeWmq7CTxgSUE9va3gAkV1YhcKxXTSETQRYTQEvPLnZKHyquHL8EUPo95wfBP2v2KPo3JFbSHEMEBwKDQG",
  "key8": "5i3gZDcLhiJupLd7rh8qmy54dcEY9DoXZweuYhDaGtXTHLG6165EFNLFV8dC56aitaeJiixxkP7UR7DYXjrT3kVW",
  "key9": "4MK5r7BX6NMLQbMPZLPwfbsthKhz9JwLo2fywwEsziFWi7XBRqxyr8xEU7aJV9wn2gSX8q5iKxQYBXahUMRDTnaf",
  "key10": "UoCejmUucnW8o4d7eKGuTWzQ6gJ3GEYuWcsgvz73cLT4uyrtMV5HoNkux3DG2WukvUWp26ycTUsYW9wiWCNsgPY",
  "key11": "cEJAtwPNXLQibq4SgV1S5uX5uaxKvCok3FRRMTsVwuvYCjRYGTnKC2H5MntbvShnDBKoSZrJJbGAiNrozUNyNev",
  "key12": "3HdDvGQpuWQhgx7RF48RkoMbtB4935nGjW4SFCgtyCBGEG49JnKvcv2m2g9JbSZBszTPHvkz9XnrNq5nFhTWZ14k",
  "key13": "5DKrPdKsLvWfLvmDmAmSiMQYHzGEvWY7iQnDiVx9hGEsGq26ixfCFSukE9V4py8AVUPg5Rg4y8rQqujBgGpaJzB9",
  "key14": "4VZhFKfPWmBm5Amrnz1U1VzSQsg9SKr8itNHQjo13rNPpo4XfzcudDe6CUbvxUR2LwYPt3yZXGUA2J52y5EpzTNt",
  "key15": "3eLSjPcV3dUEiKFNhyKtvNpAUuXDZQet9NNax1v36Eo2Jk8pGqnPA6LfJqhJSULLt3yMEHkDBdRTJHZC4ATcR6Ku",
  "key16": "2kV5dbqHJVvoSBrkndas1VpZUHE8AU6EphqNU1mG61ff8H9JYuhiZ37uo6Fr9TgctDu5k9vwdx6LnPBruebyvQRa",
  "key17": "4eUbNGrCQ96bRC5AZG1XD1aMy8kPibooow7FKYCtsU1Z7KSYZnwSW8XxuHeWKY1pWLR6jCahaMb77utCN7tuJt4U",
  "key18": "3VR1K3uCEECSBCArJ3NmBU7o3sNHwXtgyFhFHAtjhVVS3UYLfBbF7Nw4FNGw9rvK5N8um61We1oooGG6RNRxGkU5",
  "key19": "32QYthds2XeV72q9GCVsjsKgsNkYELtGfp5776w6BYjGrT5sFsrjHbk6G3QWu7haN4i7fjusYj6hWSXoisQC6N3u",
  "key20": "4JxrgW3RFnRyYQFdLYSysc5MPep6aN5zy4Rjb2p2CFQF8r4ReuejfavMSCDsCWbrBe9QQMb41YtN1dpN1BL2QmbE",
  "key21": "vpQ4mQZ4xkuvU14QGNv4Ao2HZ71zEuuKiAHB3YNZHJtBdr4QGgb88JZya2FaK3cKHNieumpRdjhcannfNeukmpK",
  "key22": "4Fq2PnCzYFMaLumtxUyatxnJes4cDFFzRqjdKyL7sQN7EgW18ZYLAkzHHVYxzP5abm6ga9qpd8JLCdAhH4DugLC5",
  "key23": "2yFT7ggsN4FqKLnBXPQ1Py4sTmntJ5aCqMe7q1GhJPFHmVLN8z5wLHFdunDzAtM3V7g3SAtNVkbWyhkotgDfYWwN",
  "key24": "3Bnt452A2DwNqsHKU6YuVbv9Zp4S29GYbpCxh7wBQwjVKGfrxdFGyzmZ8XuhjnUy7KCZjBuT3W674zjZUWtm7toQ",
  "key25": "2ifVVGL7vER392ELsyVFzcEZAeUuGU7LFvjLKfHz6tyRwdzux7DrFXXN2f9vYiNWdTgyknxwm4cSJ6PTS8dnBQQY",
  "key26": "55NhgPvg7Z8CGSHKF5uoRFsxLNipdj5QsrrqSMNWmj8NirLmNRppqXkH7hU27vNwxchRCiRqPnztuv1kZedYAxVG",
  "key27": "5mJSuQFF6SM6BK4WNQRSmwhXhFLHVS96Bsdt4sn82jsgWDq4V1nsTTKHKdns23AYDN3ih4LCSZU28Sv23pnikTux",
  "key28": "YM7Z5KjLLr81R6unRUq4EsQojWQyDfUueDmv6AfUJn1KkmLsWkqekR5ZsYxT2H1ubgqsbzkY5o6sRxkrMSzmnPb",
  "key29": "3a2FpA2FikVucDrzgaFJDKT4k1cBKwUSJBG5GKQqoQHUbZ1MPSEpcuF7Li2QEiiNgt8Lv4gKGa8Ujuo72ChJDG6L",
  "key30": "bQ1mc7rwTKp6yM4waJ4pQSmdH5JuPt7WDZLZdpXzd7YpYytzAcQ3oKCbX431dXjfyirbo4XD2HnhM2MyFXAmnyC",
  "key31": "3N8dbayqfcrwxeAUvcB9B3R6dDmWNSPyMS8mfhyShR9k3toCRZbGrtf7LYFwM1KPLDZHMBeoZ2jf66mkvmK3uf6e",
  "key32": "2tdix6uMPgw8hjrHgyCHtDNZhEjadDu8jgn8PU2k7C8UrGMCCiiuzz41PaUEMvVCKM5h7HBpWLaZRWfd1iaDwuqh",
  "key33": "4etKyUJ5xpYm9hDizoxv5H8kikak93sXgKTWEZgjWQ6jxjqHEzY6geG6M2KMMzAyQmAer7nfe2iKzFU6zWVSWTiv",
  "key34": "mBGmvDPG4RjFJqYUSPnpHck9gHbSMgmjXseVM3TpwAU8AQJBH2YLGMSviMEHFFWbJzNi3vAyGBVWgTzfX7ssm9t",
  "key35": "62YiAPdn1C45pGQtDsGBMsyZhQ65WhrAJ3x4Q96DkHv6hn5RrBVoZF3aSZmqrZp2ZuiS9gCPpBhsMAmHMeA3wupH",
  "key36": "22KBR91JhB285kdezMshzEr7ENUDaYU7nd9t8mxf1m7ozcHh6Z7J5C3KY2LdmDLNtqHAV2cUZmUJQGZ3EjhyWsiK",
  "key37": "8LyN25mbk69DSyPiDJKob4RN5spLrruMGNaqzs6jjaVFpTYm3HGaeLfTBYAJTqfEZ5jskxR572LrwnFu1ua8h5n",
  "key38": "mJ8hVawTrgch5SKXk4gkj1dCGNGwuGoAtuAUUEdPof6UwRGgPrxjFVrtXxV1CDiX3rHdA8HpeDyzrGKmwAknBfv",
  "key39": "3QTkUorMuELhQZ2mxEQpmT9tRcdhxwCapgAJZka2a91ue5tnSHtaz3savY2WsbRLtDXPY25j954PB8TaHkPstpSf",
  "key40": "26QGRXYpj7bdws5fLKw6QFTu7niyUVCXj93UeVvWkVVie4yZtBR7QHT7Ta5ozHMokpVKbJ9htfnmbjqaoHCEAwDt"
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
