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
    "5QAumf5JR7pARyoyztHw5hCDyeAJuG9Tyub3bzkND7QJ6NyLAR58hNG9t554iNDiVsg8akuFdBppHqKwwoFfB7rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGVf3kapN5FZqpTRUfThdVYMBFJyp1NACd8gh5kD5qH83xhYTUndErWRwXV9zPEjZMWvkr7jLb81645sPSc8bkK",
  "key1": "2fwqXAZ4rAVK8Yg3rBYCt8nNy1wNyxrbST3Byhy2G9rGj1GaYcLETEqCqgbCCwCxCNPrqKXMDSS9YqdfDNtmTJde",
  "key2": "5zPsfKQjYKKftjdXoLgFw8ZCtNgZNSU8zHuGYnJzj8MDNC13tDQr5FsbJG5j7riS97qMbQwVsi4ELPMkLw3bftmT",
  "key3": "2TqtwgzJwaJNTAUw6p6yREUQYpa5jhM92w5NzRnfRrQbUBFHcFHypoHTWL8PLM5ULM19p8tQPGErYm8yUdnb4iMo",
  "key4": "5SSQ64YqSfTn3oNYCic3GrPMVFP6tSdcq5TDLpA4cCVrpCpgviokqb6ySReTFKdYpV7FgnviyPZCJ8LXm5hcUfad",
  "key5": "RhJnp5FS2bDRzpLUN9Zba58ff4NeBtqUaz6qVnT4BDw3TumEHP5kdKgZe4q2ZkDQ6jiDM82T9jPMBkxtXMJFjR1",
  "key6": "7gsVZMLhPex6uyhR2MjrxLqXUtRRP6H4ZywkfWm382pYw6m3A16U8Y2NpsZ6NFJjgRqCbkFYYC6ytY8pJiqpyvX",
  "key7": "5yDLTdesEQu4msdG791iTt4BZXjD7bMebfFodFno6ffJChxiWfHZzqnDiyW7nXzYHmTAZBSGaSGtZdT4vkNFNckz",
  "key8": "44Atk4wC9LYK28Ehqx15BiQaGsDAAGVUtroRAXan9gDWvaQ7p4NPqBdRycp2wiCpmS9ZfodLBdHF41HEugj46t9t",
  "key9": "4H1VErWZwccz7Mhutusg3XahtaTdu4ty6ckCotoQtFqtodUDDB3ZLLAjT7ap16Mf6oGcsbWA9ecBuXE6p6iimjdY",
  "key10": "3GHdvKymcTQujDAhK9YNydQmndsxWWnyGMDD6gw2QQkEghKADtLEYYruSXTnSSKJY26JbxnC3KwJxvnpwD9ggnTz",
  "key11": "2qhCuTRkinYULEGTqs9CAUSva8XJ8dGndFnpX2cGQSdBmDcNZwvtvNSt7oBPqwtcqEfQ1YWFCMdXqwJAj9FcVVG8",
  "key12": "5NQZNzQiDwjfDPK1Hp4xoZrr6hAYteHpePNXgcBeikbwBNKoW89gjC15xXoTCf5jepJ3zFb88rtHEafvJgcFSF1Q",
  "key13": "BPJcxoy3oqHEs5cSrpAuEXBQG31g3eA1qurP3JbAWX4LYfqH8KkdkYsgUkFeTwU4qevdw9FXw9YJDWV23W1PPPo",
  "key14": "5FpbrK3wLRt5qiqw7uSP4975FfRoj4ur45dywxSy9KaDti58iuntDXfoQqt98aHxaddMstApG513TyfQDNensgZT",
  "key15": "4SRjSLEDK8XML8huc8qEBVSPz8VPdj1Zrcn2RYjQvFRtG9FdiPBhQXYm5Fob4aeTZDTfQYpc9W7WsE3b9oVXpMrq",
  "key16": "49mJSsjkZw2U9QP6q6aKSabwdaZumPAhpWcckejEVzXNZRARd8T6VsC65wm5auu7t6fYq79rYc27G9FeYUcuQneH",
  "key17": "yttKxr4RZMKH1YHN7ic7e77pZuwBSeApHwcW72nbZ4uRDVNJd56SLJrZigKECcaa4My5kHJnwuK5RAPBCFNgBWm",
  "key18": "4VoGgnvmHWw7fnYS4CTLMBZVJ682Vgkc1SQur6Cg95fCGP6ABcNKQj54Ln38GqDqDNGk6qVxj9DR8MY9qsnHiQRK",
  "key19": "4FJ44oSqM7ntBFRNEk3sUstE1SP1prDcH3u84uB2pNXETLCcZYP3bYLcaYSA5aYEgcQdnggE373uHTDGiKs5iFLv",
  "key20": "5zSWojZpn8nMwUa1eufaSqPbetEr4A48jWt7e1ZGvhWYGkdQhGZ2hTZTiVQdMFENXomxikgb7u5o9B3D5r1EQwvG",
  "key21": "4jDPtwuFFpqE3r8VqVPFpkkGz9gFdB6Lj3ugxQhPxmbRqr7EmAgFziF87oNkYeJJjwmPYntTaHX3ZWSSuxCiofF",
  "key22": "56u3hX9VUctNH1iNZ5JGKPM9bnBNnTZXWKQNSEVDEB26nreTFoaF2G7rZi4GZo7vHacN4e5YSHnmT3XmvmgCFW5y",
  "key23": "4UDhqeNPDuqEGGd35Cut3G2C9TWZKsaNdgxE3RUz6JQbHbyCVizkKkD5yGZipWNG88BpEeLohbpuQ8hroF4VHieh",
  "key24": "4Cd2c4AoFCME2MehbK3JnSDA3FZXftxmvCDqU2kXdzCQSrkiTDrYf2tSyfataYEHGG5EP8Eyb58jEuxJeU6VnAWa",
  "key25": "46WsP9cJ69CNGHWsB7sPePC31befoUFWPW4gXLwKM4FKpcxk5LssDHKhuwL7kxrMTDzsyRq6sca5inRf4zCMaHpj",
  "key26": "31Wci4rVoV3gTw9jrHw5fRjx75BTi1WxWEpdeALe71nVX1CCXUzmsihk8LRSaX19Uk7PiKzFdKvmhpgFVXNfyULz",
  "key27": "JHiHoBcZjBTVXgAxxakqQM9mmKnivz1VFMwN7uRjbKYPcwZKfnQ88hpXzqRqkBQTh6BRMY5CTS8PUzFvASAjzUt",
  "key28": "31Mra5ZeDgxLzvVUiPa7zNiSunGnRPRPFSLjr8PDZFRpwM2nPdQC87Hu8ESKXCDsjihXwoECmkxRtBTC8kJmMzKP",
  "key29": "3dihRxiWnANxxcK3nXRczJXRjpDMMsE7vzUjLHRMNLVqiGYQ8mnp1ZiEkfgeQSzEJMcqqd1gCpcxmTvk358KmZbm",
  "key30": "4gaH79QCHUNgLBhMko4pA9TumNsAbv9abuWZ6x1UiFvwX9zTGPKQD7SKgLQUf6k4caQx31JGVzpgP32sDiw75q7X",
  "key31": "4bN19c3gkNx7QmbkUdG9CVLLFkji4YreaSK3tMiCYWci9sHaZT5m7PYxDye5GQiohdKTrWqm8723sHCK3G5dzsw8",
  "key32": "2R9sWGZHnDREh2puLDKc3kUc1mTZtGULCNiiN93TjT8Ezmc55f2MUeTmmVVZsLQQmx8QZe2AuqQ8rkCxYqmppmLJ",
  "key33": "cPoYvifVTZCU3w4YyzBRYR4mWtBJbboob54bT5XdXiGX83AxZ15E1LXtBP3aVaQ2DcHaMZTGuNe7MLozMjZtbxf",
  "key34": "657L5cnX23eV6cvUBbUfqVqYdfNA5Fkht82vKKNjR4V3hi3zKmhujQtpz8MWBws3uKMkCHb5W29FeKRuKKHJyzps",
  "key35": "nS7aKCqQ17Nz5XNeG1h5Kx82jG87aX2aoBcW7CP1BGcE2WGNstgYbVvFDXX6XAZMFXqabPh9YmANn6HDcZDJR57",
  "key36": "3s9t8JiTpU3VpL9hiYZLnUfwunjukFDFAq9VNMVf8MfGGrsaDKE26qbeNHy9nCDvvaHSz9PPAxqK6z8WCDRW1ACg",
  "key37": "uH7R5mxggFACqYrvuQpLBFggoAnsdzLQNBxDXiLFv6FgBSNwGoPbvDZMTAPjHLwt2VGyYRtHb29234uAwpferii",
  "key38": "3oYrYbnMJteesbda7idtE2hmVESMWqUq6f3GrbXnEddF1fSGVrFp8NyG4BT1hfaJHStxPCJpNxHtA5kKURL3j6by",
  "key39": "4KHfGnFEZqU5XBsmjLXSz2kqLC9ztBiM8uLaM7Y7M1oud4KhWBiaAt4CV1xZ21iViMxKtkZcTn9wvpFBLSRRCEEb",
  "key40": "3ViYq7QkuYVy2ugNVdjdfnyWpfihvyNPSPVMBp9NG4sQKQ3gF7N5XCGvGw8TQjvoKqodEaB8qugDsCbGiq4J9Uzk",
  "key41": "4vLNFYXJj7uNCFUcYUXXM6xmh1c9gr4H2W2WV4Gmvi1AHt1Lup1Jv2GvyNjE2mNFNMmEcTF9bisUp29bPgwkst7J",
  "key42": "4MLGQLUSP3iadzERcGjtfHsakjT1MKnuW2gtvXd8wth7wbSNCVzbpN8dn9SRZFVy1GnrjBAHrGCuRhKD1HkcewT6",
  "key43": "28zjkLNbJqbuNHPv3rNN2UTDcCMEYbVMDKYZuCAvLi5By9xZ7XTKews7RCWXQG7iUNZCduuxuVsgwLR9DMwDMi5A",
  "key44": "t5deU8U4QQeUXEShg6GaHTZ7Enb3jikdkBMYkJxrWnxGwv9MXdYJq9ccE1XGtTFXH5Q5EqmSTqFpsWGBJ3aRnHh",
  "key45": "bBqb3WArrs8S7w9kXWZqWMhfdFm7YEkgbBj9RrMaCnRv17Vqx6NTh3fof2uWVYMVSeb91iGeBpgZopXt1Zu6uUY"
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
