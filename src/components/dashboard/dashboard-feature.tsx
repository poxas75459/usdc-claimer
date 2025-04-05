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
    "4FgVQsy97A4zEMBWLnbjh5zWXHu6NZt9Nnns5eLgep5PdGE71MpGzc9msAepTCN74R7Xdn5tEpBA6A1JdT8WxQCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JFNSx7hKUfFcgLHBr8MRNWuawk2KEWteyrdZFex8cYQMrfDmdvuH4n69f6rFbMLpChkDE3SvneEHmeTuu3S1gb",
  "key1": "SPRttJcSfaoj4kZYd9wwpUDruijvXA2mXuXz8BUJkUexf9KU9KaAu6BrsJJ6krEZxhrQTDoZjycixCmNrBkJ9Lh",
  "key2": "mAAgzpDuvQdjqrLgwzgZyCoEfcUdvwUzDaDMa5RmAM4Do8TzLZaRRYQpTXb5R1kVsXRp99bK2sQrZ9dkE85XHdR",
  "key3": "3ufdFAdoVDzQjnknpe727h8p4oy2MKEx9PBpDJaSZCjZkGRe25tNJ9n3EAr7nqMaKcmHR2zdewkRtBzFWdJtfhNi",
  "key4": "4oQbUMpzxCMCcMDXKxgAFy294u3pn1gujuXv8gfT2XHuHCSCuYafw2sa8XVDYiW2U5WCpArYzaYKYZxaudSpN22",
  "key5": "3n2VJCC5cBb5JzW34N7Kq69CaG4JXmdZU5cfyx5eXp2FaDWhHVsKHvVmMtYUKwdXCvRA9cbqxD2X3Pwqx4qFCbFi",
  "key6": "ACXRMCNT86PhZxgDsZ5cnab1DgPqaurqJKRQvLqWSAU4HDWC5S2oxLdUquGU49BH83K9dRnges5vz2tZGxJU8Cb",
  "key7": "45d9sQYvVfnxCZHEJee9p7aFGQKPNnw4B85PY4s7VjxKmXKQawg6qhqSTVgGAH4LxRp66kUqAedjoE3sgxZx3VMp",
  "key8": "8bbGhPCXQGFKYh4gQC6RjVTSWorkc8tzJBm3HCq6RyCMRvAU3qgBcxeUwKy22BtyiCSNqTGJML4wQC7HiFdXM9F",
  "key9": "4w2xtdEy8ak7NPxUkNfCGCF1tZKv4SpjoBrhfTECseP86ZaZiszrqRQDmKgDdbtfKSG2SFw6mK8EWxtz9kVVsePi",
  "key10": "9dkBNqiGJe8e2pUWS7dBJRJYBmPz3U6PSGNvceazGwucLVC39Ja9GKtnMStcrvwzPe9QXMJgq6DqwmogUhoyN9Q",
  "key11": "4PjaZXTMcTVq73ojQvwdrTPMdwvscfds4TSESffFdzm4hiqhbnFDCrapVeG8pmxPUtAgvLGrN668JA4iLspTVqio",
  "key12": "mda81hC3uk1vgv8xLtow15M1ULqLeSUciCywVN8WKwjQSByadG1z2kapxjEcC7y53c1jezEGRUBQsfzV3gHg2Hp",
  "key13": "3zJJ7AanSQkfn9avSSmzJA56v5kDXDmd15kzihX7ZUZNTKWuujfxPHCBadMQ5z5JCrGhj8TVQhzvTK6G54E5YpHt",
  "key14": "23YNMzLGPnUuxBLsT29VqFKYbdb56i7cCRdASnriNgWhWeTKxJQc8ox4bXozLuPh8FGN7YZoYTbbaUSacm8MZQT8",
  "key15": "3yP7QgDnqGEzHgu3Mhd4bWGsxS8DvPj11hsshYynxFt7Qo8ds4tc1fL9f7TEMcGtmb75xj6N5e6v1rahezg4xomD",
  "key16": "4tbdxyva9cwUVPGMZDgNXYGhLpUqvsvWnpVVhGJnU9wANXwq6zZiKqPsBbTrTMW1HbE9buAUi6sj2Cvy2meNJknx",
  "key17": "u5GPjGKX4ptqrQXU24cksaM6Vn5Fvqo4L28kyfXkXxsj4A9waMZCEtj88QuPqsUw58xo66dWvtGKMyTz4X69Wbv",
  "key18": "Tudy3ZkTfciTTQbGRs3xxQ9DzDEpxZzxAYT7GCW1ZE17hxn3shxEjgq19mzfYniKJPraujQMMnrgcZ12eYmQyAy",
  "key19": "2J8aN792uuKDmRjSBq7cAjrWGWZASxnjBjN4vFHwTJiCDcbF3MRg59TbGyaV4a2f2qSY2xDGqRmsj2rzWUESdvJX",
  "key20": "65C5ozCEHV26vHiXmEjJuQsUqp5bfwKhaR7GEfawb9TdcZ9AUqUJZAbnTgzxgJFRRANXKJe8Kb96o38m6wENN8jQ",
  "key21": "22qvVGGVc55XXFGvJHYcrJDU5e8rzhD1FjCDooFYsP6jyHjFLvxbHkRyjkeYqo3ffRBAUSudryEkBA71JXPpCBFy",
  "key22": "4LDiseWXHR5ZVi9xWwQjdDRjxuvyhLPq46tSq7swWo6kRWBBNVqKdCF6VHxQx9ZXADyiigrh3v5G44QL6ypT5xJ4",
  "key23": "46722MNFpoWdQdpW6ytScwNrrFuhWaT21WSQmT66Cn3d6vDdvgAJuU7mY1VtXzvqDLpWE8d7yB5aLFCkNwvKea2m",
  "key24": "3n6bWCJRDn2NzaxAHVF7QiFoUSEzTPPpeamHVgoALN6vm9qPkvECPM9UzDNSGfvDuQgHt66ngHfEBeKJzAbeb7TV",
  "key25": "3M6W13LHuxBwYLFVmyUdDPRpFKpzB9eFpu5vZn8RywCShSAAVhgyamV4wxWUPBg2EXMufrvbQJsg6pezn5zjK8pW",
  "key26": "2enH3aENnF4MoMqNm5wjs1WJ7BjJCYZchheGEHhCMkhBQa4XJ5VXftFbRK59tZqKkEwoWt2Pzb4cza9ccMNKksbW",
  "key27": "3sEg12wSuzFTc8m8w3B1itZaAbKqLZefPXV7rcfDyRvRHsWMKm6PZxg15fbbmEjX1YNwBgjUNT187ey99kqs3CpD",
  "key28": "4dxtzTvrRwQjaCVwEsGhty3KY49oq6uQen1Ba7EMSeoMf18nxPZajcony4EjYrMh5UxJumM4XXroUAQkNXaBvniG",
  "key29": "4HCksR1Z4NdT76LNwEKxE8Ym8rxFhC8cbTmpp6NjEdMWXjqjWJebFynDv1HmuDaUsngaec2f2bF5tFVwaETVdayd",
  "key30": "4LXoASnPQAScBFqcZ4YaGLKs13D72yJQXWQvB7he2JK4cnD2miomYPPoEmZX2DAuHiae9THMaEtwobCjk614sMGd",
  "key31": "4L59Mo8p4ADeZybxQGj5BigkASQ31RvQcgwXWposiyxZegTya9kapvna1UDXNXkX2nvsvkZ1ZXQtpojtLUczegce",
  "key32": "5MKr5v13UysoRv5BLa6S2nPuM6Gt9Uw5G119XWL4bLuxJduoJkiFLzf6DkHssm321eqw1TGXbJEL8CapP1p5ZZ3Z",
  "key33": "5N6y7WXmusccWevmeDc2AtzvvZKQc4GZ9UFRKUV4axL19FLs7SMpWvN5YXrEsnPb4kebVnSWDfiFAUpzgjRBCcDb",
  "key34": "29pKGVmeFAJC8eQAMSAGarQwMfurxaiMZuM95xFmcyS24XSTewMrBciWz5D344K2EbuPRJDdSHafL7RQVFBuLtHK",
  "key35": "24vTKYTpTwJJEeDawSfE4kgsXXnmfnae3vv8Gz4eYPjpFNo2G2BzgtUGs5T9uHtk6mFxwWNas9cj1zWqPccoMm7i",
  "key36": "5hiDUtfZX9P1zATMtNsE2BVz25dFErFcSjAoXPbxjQzmFhQqrbjxAcFNVSBBWLQwzj2YABxneBp4iDDJgkA6h79Y",
  "key37": "555thTvkvK5v49miamwPDhX8jj1RDj2caxwLiccdNPDkwpsKbX6vRHXJCu2BNeJVBeL36yZ6jCmTLKnCJ9KUpbtn",
  "key38": "Me7FUBAPt4p1wthP2noztrqHMC93SEVdejJe1yNTvswxmCK7LEvviyB8dxd1ASx9uZK5vJXDPCJBcNUi28vXnUU",
  "key39": "5iqV6MuFdSsfqDuF5p4KTJRcSn5SYQgRrqyKt7EQgpRQCgee93aN8cyzvEMVCSB4ELBjjcXsQwPaGs2m4ysYXksk",
  "key40": "3uxpfHtEPQu2Qn1TPgDpXEzEF1ZJWsNM1W1JVyRpF7pdXT5gNP1uzj1sbWAmE794CYJvqQCXhpA5or2Nrtv4w2Sr",
  "key41": "2TW4ckMaq6Jsd9ywrEzee1mqAJQaQ8k3cBA2UMUbukp8PYQ4XDDTrL3zP5wzSnQe3XjNhbyRgne6aNS2A5QoD634",
  "key42": "63HmWzDaU2WnXATYa1G6zam7wZcmFMX3LFK5BgLm174PcZgfeZ4vpDFYVHZ9C4cM4PjPYcUDxW5HzewpmbFK9dhD",
  "key43": "5Fs7AASBhXSDfHwzULGeuPUTSM8MavXX8PryufGPq68LYfcLy6QzYdZQrRknpZJrr68GFWKmvMFWGaPMojEg4uXW",
  "key44": "rWUSaPgjqag7xXwwzNTNvgE2jbFKv7KCy3h6572HGA9HZHPsvxFgZGmdoUa14mDiq4S8577CDSY84VP1gviVYht"
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
