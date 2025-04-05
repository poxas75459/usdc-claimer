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
    "313JwL3cYCE5SA19DwrApvdepAN9hHr38uExAEnAYmbTAPWTG4wrRTQYySkLsV9qi7nEyjBAFZD4BGZuzUYyR24c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wq47wmmhwCcSa6zghi5Vz4DcZsd8LLS1LQYgXZ1V5L6eL63t1SWpiCVcf4c7ayMJvkD2PvdU1kzoCFKHdkwyf13",
  "key1": "2Y9mZT8B8HG62z5ArxJ6q3NYFyXtg699TUtVAzBM5fB6gTqSMzuFPtPP9pCJjxedoJ29zW2qhDbBFtYZUdcR2khy",
  "key2": "3DNUqqNo1LJjdGSpAcjGCDXHRRap8fqAmxrfCTNpa59AkN914eeQbNC1USGcVSLRRaLXZFSLxdfF6sEizLstA6xC",
  "key3": "36Ny6Tuu1GWn5gDpraxWLYKxd1BXSnaj2tHqtYes63dVJorgxSEvGVeSv66nqY8pTPMk851qBphc9KjwRugd6h14",
  "key4": "3czSbRTVgdgf5q3zh4Bw5H2o3YNwFhJ7WMP7bCZsPxMsxJYEL6FGfDmBmWZuZ2U8iPXwP7YCZku5MCy7V8k5YRHN",
  "key5": "3NFsd53ZEb3GzpHXQR5wWqFG6W2FskSMShgKQNwXBDefiW6V21L48zeyhMLJT36gMiRQ6BEsjME7UtMiqEgSk8nV",
  "key6": "5uSzrBgecqtGArmyAca3uzSVGTQubFS6mNY4k89H6a1ymH15RN4UMccc48z1J6R4P4BJsje6qLzuwfWs4GGTTAnz",
  "key7": "3eurNbtKtK7iAx9fHwjPq4iphbicghwsSupkaTepPMk9GLa5JamvsJUXSPrsDQQjurZ7NhCG6WnsPZtWCmAHa4Ww",
  "key8": "MFCzhU2HvXSi9hHFrpTBPPNrXxfftrDbQjhGxXK8pAj6iD2P9vv1kyqiHkMph4Uniy6E5Bf7CsvyrjtFgUD6BVj",
  "key9": "5kNtasx1Nj9vgn5oCxFz971YCrX2hPohMUYDdXpkL7vkp9gtriF9MfzwY5ZwmxWuNB33kBTrFjv7J7XNMffys8zt",
  "key10": "4nQwtTEZiah1XwXyWaTYmWhrZfi7wMFd4bbLabzURqAUcEX3MbtShN6okreWe1238EymTkBEePiQj515RTrrwhbg",
  "key11": "5S8WdPk9YEAHK41Y55pGFtEaDmBrvN5Ak3432wh5dpsPv9xB6vUByPMkHMjM4NodTJaRKsnsYo3qDyC6TAEcx3bL",
  "key12": "5S1BTrEX5uXi4MWNBGKavqrKFLYdLCNf3Ypg3C5R1L7U15ZB2q2WqMwqUYo6cUYVoKKqMidR2MnRGVL6PU2GPniD",
  "key13": "5zQPfUDGNxLELi9YCvmAd5JFJxHHZEJjEB3v4DNRGvzXyMj7YS9qcZP5DbhcihMA1XDCko9ruxLijouFuCA8jLaN",
  "key14": "5Srrwa2A45iHHqhUYjseVAVEHrzTaqrubJpgNxFcsr4VcPxUGMGX993cY8CUdWHguXxedyQNs8d6m9fSdsd5stSo",
  "key15": "5qLhkX7BSqppq6LH2iAodbubL7p1CMAnWDWUqRvD1gGeYtmFBsqgucf11WtDY6BxAu378bCTDutCADNCscv8zVNq",
  "key16": "ABy8oikBsZ1sJ2RXGdPLb5kBovma5KBr28ukm1erMCaWn1ogCAFmLzkCWq7G3tNMJbe4BYiqLXrs3Udj9vEDV4v",
  "key17": "4XVhQBB7AS9FGHtdbJiYbQrxjZ6ErrfNfBgVEoiEQ7FrVXDpPrxgmivjAN3XXgEid1Cdu71pZ6HDJE449XM8p8aW",
  "key18": "4gSEtRRZNVTc7iWSXZGuUstHLF8hN2uDn3U5FZY9c2enMjYM1c2rctRDWZvgM2QcLZcuw9VHrPfHNrcX2TPG5Res",
  "key19": "45a2MFhGaPe6wYMbzCQmst8jQYqbxkZC193JZx9uVuWr6FAg7mGdUpAq1QjB1DNu5tFKwcGTDuTTJXU1euJWEwnM",
  "key20": "2BfxRrpzqX4wZTecVLNFxDcAU7MeKSLBdXZrZncCScd2EohCJdiWfkYt6FE6iQJJFh4VyJmqfnFNWMYmG5wqMWHZ",
  "key21": "5tu6xpJzEixDzopXtE1wb2rBjJNaSVURRuSh9LFRgwazALAYCEa7GkZNY16ea2kcCsNykmcTh9Ki5ZFFH6HR9JXh",
  "key22": "yHWG7nKAn2xLYw1wFxxqMQtM2xZuht1mzHtmX1yFBErz6z1UhwcngYEmc12HuvspZhMoJp7zf6P52zmMVyw65LF",
  "key23": "XnVcjsc3u3YHjXnxTqasKqHL8DXGoEAep8ZkWPtXNJYnJrJKHvHDU449vwBS7nNoz2vC4qJTP8JSDYneikezjRW",
  "key24": "2HVKbBtp5pNgyvbRWCLXFJS9d2tt37yuzycgqAL25fwaxv1x6kPxUFkDsQ3pRQEM13juxSBdq7XYjuEpgnjWooZX",
  "key25": "C7ht7xwFhLi5jJ9gX7mfX6ij3UPJdSftifV7gqzd7mbBuu6HoK44ttLBc9nFyM9SSqBF2QPLjAMCy2cVeny7ytf",
  "key26": "5xSUCDZo3VEzSHQCgWaMsTTEcpRLmeU7Rjfw4Tx5GfwNUgMipSHSka5wcUL51K6iFJj3BVgxoggFVFqDbqGFcHp8",
  "key27": "PvaystaupB27aBjRAX5VQ3YL3Uh6TkhWrd5g6tjp6ULg6fg47N8YhmqJvwvxnLL2ybcQSPyuqzmHZY52j1w7TQQ",
  "key28": "4CHc9nLoVXhR3FEiErjx91SzKEzvHdZM5vu31BJHtjkg4gxJWF7gphbqUGAZ6xXbnUW7f8RFsqFkDovVrKot9PYe",
  "key29": "W45q2RTm5E9nJYAwUgdGGz9C3yWaGfuBGr4L1AMddUTNNwk1NJB1wP38znJAep3i1gWckZi7j73afADcTeW7Qyv",
  "key30": "4dhfg9gE6YZCnYwuVqbitk9TZKNc78GB1C9dWUKyyZZdK34HMnPXn3wKjh9X629dt2xpnsmRBW4uYHp8nyTH6ToM",
  "key31": "2T828NyvqaJrNm5saKsqcSqA5uiQVkkpxxszFeiJ8CLw3M4gwPXSpmhWU9UhesDYce9NnaLYcTDb756tDSXRhT2a",
  "key32": "26AYMQmMHgqeLNRQ3x5ugY7gpmTbXR18iUik3EzSvmNBQVbT7TkonyBGc4QSHTFxKZRpTmUGjGPF4WvKMdyZH2P4",
  "key33": "2RvVRPk7XCymaN4xVPBw8wamGWjfbwDkoUbqUaQrQwcAz9RZoqGJVv3sNX7S1X5VDcZRA5TYD2xcXCe8aUeaa4jF",
  "key34": "36fSbiBoZZRYQ1WWcQyU28EWKvwge6p5PqoQxNtbcFUFBsu4HwUY1i2BMxARVeBsMdYZEVysh5H3BA3XkJoo9CwU",
  "key35": "53gaMDTEcur7hGU46oLfqQEqtdz5R5K8DNZXADChAge8jPMB32cLsJP3sYfgPGs56dfBssepwh3enLgXoKusuYKD",
  "key36": "5sLWAciJ7QtXuS4zgUxqkys4boM4vr4Kfdxnp5yFAUhH9pKZ1Dz3usQ7mfRJbkjTRgHQWnnxBzLVyT8qww79MxyK",
  "key37": "3VgH8D9Ko3sxK3t22dZBg5NEvsYz9JuhVQ1hpZDCsfG8p4otMQgNsVWofTggjUdrLA4EM9U2EYhDzxvmTmzkWLLq",
  "key38": "3B3bWL8yUGmbqHm31MqsvRotbYz79vbgfgY4uhapwEwEH7vkighFNsZviZDpjcxXa3N1Ywj5y96KW3SWFKag87sv"
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
