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
    "5UQRad697iwoHaynvRqa2FXgXWdAv653dLZBPThFraKs3mDK9rHAo1tiYi1aYhUav41zkN1AjGhkKDKaE6y8pc7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDJibbEgC2hDeszYMQL6Th2VcVuxUdVL431HUjZd48bkSTqQyoCkoNmQYNNyUZVgTHpX9KdgACSC9oXYaqkZtU9",
  "key1": "4HkGwW6aGJsYofHNhgZQacJBVRdttigXMASjpbPkzQFFGwuKBHW9QcAL48Fyqcyoy4oF4iPsv64BXSfREuvSr8qc",
  "key2": "2aXEHt9g7NNyZokddRhuuk91R8y1mowHs56hH8XcfoRSQ8QJGRufZpn8gggx5MBMthnWSDM4FeNNs55Znsm1zbCW",
  "key3": "2SHXxDan4TGXgSQ48Tc41jb8mUTJeEg2tP1S93zUNo7EURcKsQKVK1JvRpDJ8oqhidzY29LPWVHhA86AnErTzq8F",
  "key4": "5VJNyaF2A7FBP2p1cy6f9FrTtZGtgwraB7TdcBwKxPKwQXhSNZSZhgFT1LfHvWBEAW3WbzQ3pJMvormixcqpxa1i",
  "key5": "5mRHhDUsvVaLSPGrMWDfwf9BRfKXyt8r5fkq8kGfe3mh9XGKsuXEcgjvqWGWbZTySoJP5RRTt7hVufNAJ8NGuJEH",
  "key6": "5piTXAdCUQHz1QUyqVmNqfwHoCN7njJg3rhhhciqAd8vKGViwhK8ESmHJbP4UYzbBwbsGhj2p4z6MrXfuZev8XME",
  "key7": "uBAAtpj2u6efDXvSgYc1FyZ2esoNK3hkKBw4dq8X6Rg2cMrf6DEDDCey5DgG8w7vT7ZbpwsQvMkAGvgf5vq6U4f",
  "key8": "hiPuCxFMWkJnqVuQoo9JSFmTAnKC7EiEqM2zhb46AjKv5T5WVsiwdCFcm5o5LHnyVgrsGuvwhyvthBHFZ5DH8YM",
  "key9": "LN22ga3hwydT1VF1Ji7aVnPz3hsiXBEqtPW2mtCHPHh53MYjaj8vU8qUYte6WeWpenTimBjWGM61kxzFhjo19HA",
  "key10": "3ngVMBDh5zy3oBkZdGTx2TtJs7s9YcV8fWMBov4J1yoDFNymCW5mB9PRpW4dkJTFhHKGS8unezeLbaG7RqhmR6CL",
  "key11": "2aGpDTahF4w8Utac8WUsrGQZH48dcxxZdGckDzM5kTNsEtiRjAayHrytVbMJrLqcy7UTb3ramNvAdDjNX5ygZUWc",
  "key12": "5nju9UBzDTdJYveE9PLFSofoYtYFmnpoMvR3qz6Ajw2hsa9saSAc7oWtLhNp9XEywhRYhv7a74GMewMznjDNqEA",
  "key13": "5ATjG9WwbtsjRN5SF3oVAou5vB6v9U31795pr237Vpn4wFUdcdyHrqPLuyP4ziNZ49kF4J2JWTbejn6dw2A4uY5K",
  "key14": "4WYeXehwmCKUKXJJqMeoSULFBiT19P18h14FbpKzxSadJUdnN9vvuEHubdHjcMCofPAe4PLS4Y75auLQhpGDEHih",
  "key15": "5N7E8MC7JiNZm8VLsE1SbHECQ63zGtESAXzRkXRFRaTzMYmoNTXQb4Fy6jCM32wDtF61wdihSFFgzGD3kJPizsXi",
  "key16": "3Xsj31AN4xpGZtRJnXfmMU3RqNJ5HVvQfHBf8Th4jdGqJRXecQy6aru9ka6RAvuSM8Q5jJdrHkEt19gQDTNbpjEc",
  "key17": "4xbRNQNU97bZdYi1SdArkcVQcPm65XzpMdQAtorvMoomiY8V67WnkhfWEdHjfr5h23EoA2u5vTkgRkR2cVUZ6iqQ",
  "key18": "5Ue95qELpWbEV1HdP525kpQa56bepps35TLN1jsRtGujuorXQQf7JqKsh88cBzCEXR3xzzoDBPc5H2M4C5CwPUsL",
  "key19": "kz23QXz6eVzz4NRZ2xaUsHcWTLPbP9umLJUnGexdPektjPUsA55Vn7oLHzH26hE7WFwZVzkuBztnJho3De6CFpJ",
  "key20": "cb2uYVYshYaUvQAidFrEewTugvBDSQAqaYzrKEJZgF91444HhPJ6iKNfv8A267ph3ttrcvdbNhSh2EfFuu39UXQ",
  "key21": "63UdVJxoc7S7htWBUYGAL7AEChikU5zktSMi8ZHArimVHiT8KLUT3U83afG15KEZ5NLK2CATqHc9ELqxGWuy1S3K",
  "key22": "44TjieZV6ppwBEwPTySTS8wCSPjk33Uqvvi1ERw1SfpyqUHY9Wqk394dRkJEjmsumZi6Bc14ajMRVzvWgfvyV145",
  "key23": "4PtHzBEUAmcpsnts21AxkSxNXfG7KxnW1uz4yx3vo1wiV9sgVRMEVqrJ3AbJbbUVyDtvUeheS41AAqNuGbM9L1qw",
  "key24": "4Hx8YSRZCtg7TKhRf3dt7ZUxhGW4b2vLhYcerSzigt15WFu2wVmEtSa1FsBGL4WuRHPEVTTPNN5z9EFUgokDuk2b",
  "key25": "5QeMJakYJfPgWiJkasD87FcMys7sKfDoGLjnuVmoMZys8Nbm3vrET3g4E9hZkUnPj4GhsHoTshvK9Lb2i5GzyvP2",
  "key26": "36W22WsBov1sLZH2EgMhYQuf9QzgsM6nCAH7AVPYxmBw3iaqyQ7K7XqWpQ3iX9EdEw3uGzvYdrqDfo2bhPDtbCje",
  "key27": "2uCwts72tijZSMYmPTnD738ZSRXPvkRfuTLwh2XkvGwXPDAfQftaskaqfyEHMWVStVNQ5E7kSBY1PrXD4kwFsDAw",
  "key28": "WwMjbYLcR4fSBbci8daUokotDVAk8AnUwEA9svewpriK6GXqTHyz2tJqVPFQdjPhWnekPzzdGqaXzVXxPC24gBe",
  "key29": "4ASMrEQC7UTbvPjxMxJyau43ME2wcEX7v4XddJhTo8GUiougGF5SupLy22YVGA8yvzu7vFXDAq5A2C3TkKWHc7HM",
  "key30": "4DUPT5Te1knFf3pXrT3JzqcZgXn6NccrJtZkvCWFPJt6P6TnpTHRUEtubZ1aBYykh9U8HnFZqcUDvgVfT5QXnpjK",
  "key31": "3dHVWdnk2TJidevwggMiQ7q5dVT5C5iVt4ZycvLFu9wV2hJZ41YKPKF5QU4Mf5NtPhYYNgUjsgcTepiVCzw6jvTN",
  "key32": "5cynn5vjBTs37DMCMj32nsxLQJdShZDuCTznbYWRDvrDZLzLiJiQacR7Ev5X94KHNSvVXQD2GZGyALVv1h5kcvMp",
  "key33": "5hN3Rs3oYRM37miLkr7E2K1K9jxJtB9dpmGQgb7k9jjr4pGo8X3GXR1mqVXGJHHHVE1wPByHafwLm24gnvHPVmqQ",
  "key34": "3u4vjJHB21Ve9gJkewC639xZJbFMpbJiaqkrhv2xT2t8G3mziZVw2pXrYUQKugmbeD9oDQD2ZJ1vUXKxR77wctz2",
  "key35": "gvyzETSebF5YNgAVfx8zTXmiKk4fTTWMVzgAkeNgK7EMJxyfo9RzH3CN79uC4PB81864DS6XWnzMDtXTNZyQtba",
  "key36": "5E2XfUmgAoc6JiSqhtVVMFHdrY4A2qCQrMeRURcn6bEYuyLtfuT8YMcfXVvnp5imJPuKnU3UerPNfLxi1hKpwgDR",
  "key37": "yvYZY2UW1zYE8mx3aHyD7vQ7PHHnyJ4ZiwgqR1HXwTcBPbznGLM6NKfjt2vrZ5jabucFACjgQ9LunGakizVcG7e",
  "key38": "Hy3UhC4Uy6r2yGqmojveoohyqxrihTXUzVJQ6963iwZLJt5qtQ7qRGsoWuWovMqsS9vnQt4VVzZXepmBQDyviE8",
  "key39": "bBSWCvnU6RgCCDHQPiSRdEANFpgUnshbd2aovzyJuD3iQfypMBY924WuPaHSY8gwgVxRgF86ey8WD8hDihewPD8",
  "key40": "5Uys62zmXgT3hX7XYVcaPrtPC7jNMup25ui5YQiWmPMBA69Ku1vXjucSosuzmZhqBopewGtaKHNve8o5VrFVdocn",
  "key41": "4gCwLqPe7E8vGgtVMMGvCaDhFMtzoPEcsf4yDcm9uMMiScuNxnyPysHHmgz6fx4wiBBsUWWEJcy1Cf5C5jKKW25E",
  "key42": "3esL9BCDUWL8RqtFgH5xytwyN8XdNkUm8Z6LcFNujAZwDiwPMUyBZdK6xz6bdxURSzJ199pynYHx4i8uhGwJiQPe",
  "key43": "3JgKLPDqKfkopubzAVH6xwNeEUNtW6okFFq9HKXige6J1czJoGVwQPPxjBfZVNG3SUidcJ6LUsPqKMkBMQH6KPp3"
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
