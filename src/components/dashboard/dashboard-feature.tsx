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
    "5R1Nr1t5sn1UdzD2UwpFEKaqXQYXR6zFudSzoXHjoTkVS9bVCMq6vVZmDDwPGmrw5cHmQ81JsxmvyjWxvhBCBP7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FvcTZu4u88mVcDjtUzV6V3Jj8xcZDDTtbEgxutxTCoosZPyTLqFvgpRwpnmERAgEFt9tdePmo35u9Z4Ax8HqR1L",
  "key1": "4XSRJoU7kpazUwtAFggiMU5TuR6dvH7i82k8LVSotbKUoDL34FeRur2PGk3dBsYmHpiahmUY8tGFUA56MjkY3PyU",
  "key2": "4Z2Q2yLsyuj1X6yd599mU7XRAwQCededrdv1BtTLTnRa3jCLaTgcmwSoE5rDd6Vd4jD576Y9vfzv2FoF5RNMbpfb",
  "key3": "5YTpHmNuwTBjk5N44SAzhS5MT3K5Kbsh3zc4ynh2Y6k9WWjU71i3KKJLK5SAx7EcgaMmSnK6uWbDLk7uEiZaxTKt",
  "key4": "5jhdLTXCVu6cYHPnZGAM5frHK4uqwVRxQWgyTQMNAVYXn96euAi5uDh8QHtmir1SUPk8zpfH6fYoqyUre1fvq5Ve",
  "key5": "4JN8ch24hoixQtuTsZfwe1HLAP41rA8sQ6WEv7iMTwmCH2iMr5jSrczJvs6NoKjA1odeDsujcgvZ5ijdPSzHDXGK",
  "key6": "5hjfdFPh4d1bWgvorNT9TBebcDVDPhNQpQRX7ktUfY6F8qdr35tu56kZjnTcde3V5LSFXRN8C3DPqw614wn8DZVH",
  "key7": "eezdSgG3GNEdZ6S96PcTxsEewwKevo3aqveEersMueMvGCBxwihesga1V4NgzRPSUTAK2LqkFfqNu5mLZeeBPjo",
  "key8": "4dSeBkPc54auRLKJv76To3qFtizZuG3PFgTY5jiFfnQ8NqaRqXrrqoVxvSXSoJ4QPmjaCu9ATMkGKPM8Zwqecpmo",
  "key9": "4ZbEm8xsdU86qNq8ZrDLstDwJHfBbT79LcutK6hPox6EPG9eCqS7oaMaCHWTJHBZ6Vhtk2ezyHbxzjChVNG4NnGv",
  "key10": "4J34gFDE3cQPku7ZgkFBiXUph8NeZvP2B3JwgVW1pK6tCyAsSHxgFHyM1z7DXVmP5s9vDTfcFbV9YR327MnwhhPa",
  "key11": "5kjNXgknvevmHyiCoKz4TYbm4oDEUUBKRivpaciFmnqbBs2Wqx2dEVxUVLqZogcgcA1z9VpSRnsdwhmmEsEYqiDJ",
  "key12": "3rfBWo4UgHAe9an7KffGg9CRfN8MX65EGSkUh62Q9WGJBWDFq7TYU6LbTYfuzTwp9BMWNcNe2SLyZgrojhQQg6bc",
  "key13": "2ra31h5L2VFBsx7XudRWp6LnPjDsAXJAWpmuyvA9YPUHqzukPw4gKKrUR9Bo8yxJCFsHhG77Q9tkkS7o7sjQEH7S",
  "key14": "WNQsAGLgGmhezEkezusyrxwbUvuQtRKnLrQYUvZwf8t6y9qkEP3EeEXbLdDz9xvXD7D4ACoqm4VWnhGnNHfe9x7",
  "key15": "3LBN4krqv5j21hyWgv2zDWm3zLbmW4GxS5VntangdPgCYg2D1uYJLR5GFpyFAPRvmzcn5RWMCyknm9BjtSnVENFy",
  "key16": "3CjZhFvmooxQWcAiWgRzm5dud8f2AvvJGoM1bggCynPecZXoQ7BTdWtwW6WvJrdYssMWttbv9SqmKxDJxGrycUsq",
  "key17": "MRY3FgUh7VFUPU4cG4ojscCEpZNSUm7VduLaY72vAWgGw9uGVVP3v2y973YHRv1a1DXoKztdim66CYjh97uqD23",
  "key18": "3tKUoik6WwKvCvPBuHsQVBaGR7s3E7ToWuEj92GrmB1dxrrahJTCDYruBE14PFonffcYJYKUFycRwZEaHH8AHDjB",
  "key19": "3Cg5JZYjm1VR3Yaw2EizbBqzTeUQv8GEaRP1arK42zPnsWyLUkPhJmWgeeKnr1rsYZVFtQ41iMA7QwrnAdFbqXq2",
  "key20": "5WYZPSTsZMs48RTm5bbJxJaPY22asJn1y1xgvzeX5h3nx2B4gWy2VJwTgYeH127QQgM9vdeL33Pux7EerbbpB8En",
  "key21": "36zbXcZMMirXVShqsieeQZdA9HNgafC4T3mpN2QzbKZcH9iEz9mpc6H5bzmMzsyipxBfF9bu8ef5usbhR3Zxn1QB",
  "key22": "4qRoNx1rxmfdv12RCFGYibg5DaMC9q4vpxts534VhHjDKFUv7BTqpvCQakdvtQWqSMSbKhitKapDghZdWSiz1mcz",
  "key23": "3Fyxq8E7sXg2B5BjYSHwVjHvucKvf6adauNyXSFaDbxH6duQd1QcN4XxXP59uyHZvQNVb6hHPy8yuZmyyUiHFC78",
  "key24": "2CeMc8eAXHzeoY4H6wme9Cyi1Kou6EGqV46mBtHuMLNqxgTPB6QTNSbEUSRNPWZ3LQb6AkPpgYrmkNxcqVjANLx4",
  "key25": "6HBtZvWcDo7KAccNKzcNXxhQgpaB8GJqMy2kACMRUdf5E8XrACFEjN4u76g7n5ePfhFJqRegiYxctcEqPd51ife",
  "key26": "tnZmyHbty3FAfxi8nFYS3i51LZs6Zhn9w4YBccub6JY3gcXDRFKtgdAuPFHaAEQDYku7kYJCNCWRFBgNP4LbzJA",
  "key27": "2XFJwQPpfBJNBZ9y5b1A92GaU2w3ZKVdqjoEQLaBPavxVV9BdBkmua1EqrzreGzdpK8jtK6UvUQPokA6AkQLLHUT",
  "key28": "MQt6QEGkK8m8srV8ksMaUiXUB18HyN3dZJhpisEXaqf2ah2FLQJvVCoz347y1hryPt5SZ99n2eZzwYGTxkWvQQc",
  "key29": "4tnXm3GQ3FgExiRZEBhGPdvDeBMqyVdUnFDhqYtM2Lpxscorrchi4oK5pJ8EutUEJ6XaYoHiDgqFhDFK5U1pRJPd",
  "key30": "5B4w62ZTs7TwRum5qNZtakLw8EmexmMVtpnDZvFi8f7mxHaPRiNZSeEnbxDTeiSmLs5r6GuCzj8BL2q5oJCgtyqm",
  "key31": "2nG1X7fGK3PKVmKW8wewWw5Rqrd5my5oPWCU3ydFJcykdPMwyEwhZa7dDeuLDbGXptpMPrS6AoLz9GH1Lt7rQXXo",
  "key32": "4SLrm4YcfocxutwR3inMTEjYKfxSqTgmJ8j8gwfp89qQcNdX9hC8MtN3baLRG4R76eNy9jBcYWsLXwNyj42cVzio",
  "key33": "wstHBhJWoo4PRTHfhQy2Pc4kQkuhkKPx9ypW9Mu7KDE3Hgxn51aMFv5Ybz6PkCVx6hXSSHv6Zi5hrPoXF8riLz9",
  "key34": "32FyLCmQkTLDobZsiZvJWqPCzDaNEk1BDkXzPfXmG4PXMs1kRBjmCdvkevnBWmyxjCtpqMRVxPCqAtGuZCy5GQJy"
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
