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
    "5uD2gx65S2tUrKPDbHeDBKSAEHejCAbNDvGGVaRBrvk89wbEDfBVPmnTp9uSUviG8CzpTBGWXo8jYTuFQEXsnp71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQRBwHxoqzbp32ALYrP9Go2QTi9BDC62eCWpk3ZPmfokqoZGUsL81Hm7TXVGdapaCXiY4kmzEFdULe7EjJydFc8",
  "key1": "w11Dg6bCQwH52tSQZUDr58KsTDrFAi6m7NjFW4bqaAmcwATdzQTNFTQhRRhFDbfL9zXvzvMKn4DMoECZGNvTrpT",
  "key2": "67XkP3JVmUy9Ao1BcLTzYE2qiK2hthoY8spVUjhh2PvWobYHLd3MPHT5oFGHpErmpGSB79LwCyA1h1ekUXwpLraL",
  "key3": "61DLVh7g8EtH5Cs6ewQm4YayPwsFJtfMuR7GjwRcjJudVMhB2dVQaSANBPYwoep9ZSCrj14QMZnz1TWAG2BHs3An",
  "key4": "zkScJndp9ELjMP8iWTXARvkr6FvUoYu3nuXBjtdyBfQfRkMWR7QvacjB3UfZ8Th48xrVr5eNH4sWFr88pUb4Zqb",
  "key5": "vwCYQJ74keyLMPPeQi1GMBR2ZGSS7bEgtyjA8YTTkcjokcod3sX3X5Pp1fFm5MFtVVKE99owuUu6UwbAKrJvEKY",
  "key6": "4fQGaVHzVsY6TUxLzakHFowkpwHi6g9RvnMn3VDaTKxRwexnFAy9hKCEMXkzePnk5euDJ5CEqPAXeKTChzAC2eWV",
  "key7": "5ZXH6WGuqesfogxtDKMsdPKNwJoCcd8VHpDo2BLSbP1AKn3xxCkdqzkjhVrhFNbKwg1k7ksMnkR71vUjyxt8WioE",
  "key8": "w3K2XK5dXLBShC2SXSY8DfozJoer4ZwYq4fQUrk7DEEXbcceRWKXU2Uiwtg7NSPzs3aRjiya5DDxqYi7AMxEzNj",
  "key9": "YrBNQb2fXu2MfZbmdRj6E2PXgRPogfjv24p177J19T83BKu6TVUiWCo3DRxS6BSaaYeBdkTTSwkae9TvWPSzSsJ",
  "key10": "nCEuGtA83JxkyUUG68Xtb7FkTyjs7jGiN7bMCfRrD5nBC3YnwGj5nHtzp7jbjeT5ShZrFPbWLbu7e3vPYsMsGYo",
  "key11": "5RUJrXVmre6M5dHG95DCP9oD6Li4SnD39Z1GQPiLjPLqLDDCLbpBNYcKMY3xqHx7HTRTsftxhyybmazMMg9MKhm6",
  "key12": "AVRtDj2ZXXJYLfKARf5ZuwFeHnjpmTBcDzaAJaNpFiH98pL9FTp87YqMdykGHrxNoNUfgzbGBMhW6RMvKab9cZU",
  "key13": "6aMynK7oW5Rx7wDcPxCCayuaeZm7aJ6zPqs9vx9xvn8Xaev3Q8Aj4NJ3RJKBugg2TTifSoSC2xLTPyW4TMRnSDX",
  "key14": "SJypvsZRBoVqANQ9Fuaqd5VPpGDiiWb4NF8CfapqhJWyyouLFfpNmgdE4RXfKmTfLB4Mera1Fbe9yifqtevp1DZ",
  "key15": "4tfxpgmpYo4kS2QPb9QYQqKV5J4sU7ke3Pq6FbHPRBJhvXp65Fb6avsSRpKLYaphm9b7JeYbUyokoyKoToKozVNk",
  "key16": "4VUB91RLWjbHWVaKrXiBjByvLEYZ1fB2rhAzsJZ6FFyC1PFs8pun5hJRZY1eq9CX63Ze7M2D5crvAz32ogw8RKZM",
  "key17": "5xfwTAJ9xQEBV2iPuwVsx83eD34qwvMt3D9njgQLpeM6uNTSu9kvS7AdA7k5GJt6TYYbFHZYYwD5N3P1fDYjknCE",
  "key18": "apvWWgqDo8B49zGqbyQnvF9Qze2hZo8ZGC5iegRjfEmU2jE91HgR6xx8CRKVP9wMjJCMnadufHpXeTMaDzqjEA1",
  "key19": "3bt6UegaQjCtzWZ3Kt2GYpgZY9Uo4xQ4GuDYihN8XzN43EGKaJBz1rikAXa55kvdgZaLzkV827uRZRyQZKkxQoXq",
  "key20": "39fMiYnz54zHsyU3bS9qqBd9ydtvJfx4zt69HQSRzt8MMyicSrWYJHiAJHK2VJnVz5zmf7ZqBQLmCkWfyE3F1fPF",
  "key21": "5CHYkEVs2DGDprF9TdhsjD3eu2xT6XhkpGZ1m5aj4mw5tcaRQnbyC7T8NhpYBa4w63McBMXcvYKVaib3qC3aJepQ",
  "key22": "61aiBDNuigDy5gE9fZvFRpGPqiEDYWtX5f5abcQZfYV2r4pSpdK8jwqcboFkMSVRoWtv9AspAwrtH12KiXms9BZM",
  "key23": "47QiNHeSLDbqPGin31FFmvJwKYXM8R1gNLnUbz1qsv7Zt4hseJFvcyXcYWE33K35bQArNnudqusjhXotF1sQeHGW",
  "key24": "3Dpp8f5JDMvi3k28NZZqezE5vFQXNyzG7F8E8rCxmZnqAHMgGRsoeR58MEPKh2km5NzBRC2FXdbys3dkbye9phBw",
  "key25": "2YXnVQEgMEQBCgNKUV3PH7A34qQAW74EsaLA9AwEnsNJxKtPFjafaS8X2i4LeFMkWi4U1DTyBT63tpwPHwGnPqP6"
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
