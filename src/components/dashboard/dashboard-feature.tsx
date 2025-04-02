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
    "cRm9Q2WgZde7P2kJAbqLFho5Z5ERp59ixjKhEC4PVFwyMVRrVzfGpQfMtPofQULtvBv2aBM1wVtT1xyxBjjBjF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffGn8CTL1fcKKwSLHahRfnbLAhjXw5Zr7gEuig16AstyE5HuehHokhhwiUrMdCiArz9VpKKVQ4t4MK7hp396UmA",
  "key1": "23J9GLPUvn2A6yRVERX4SmQGiYPdbbDPognTkeNg9qC92CMScjrctJ6AW3BwKpJPhUCYhDdGAag96BL3AAxfEBKg",
  "key2": "5n5VKX1u9yiwaWXZTqmomR3c1rPAf8762o5GiZm3C1jAuTMd8QyrxRzdG2fu9itNjWoVjEhSTgJVJqxphMrFxB4N",
  "key3": "2wS9BGAWiv91dhC6fNgPnubexisN9wX68kWjGfALriB7StW3KqGwopD9caLe8wnAZtGYCAFBB5d6FHJDGGVbHdxD",
  "key4": "5FGCRU3bPRNp7B3Fqh9ynWpumi1LQvkUakC51yq9cijaYp9uDjpH6ZdEYWwntWhQPBTyzzhRL1g3cT5yo9oDKCvm",
  "key5": "1t99mxUckEt2JeYYanBAxFQB37A4fHNv3z9itcFE2pPSYE8gG5WUxsbxzR7WvAJRxJBvJb6BzVp6f17ZNjXHVz2",
  "key6": "2SrsLkFSdBGF8hqYjS6Kk8TZX1w2re3KutPe6XGYoDY8hg2SLqMZKHgJVRHEXX7jpBaVcxL4Q2Ue1bzhNgkX161C",
  "key7": "kyiVgtpmTnQvxKboTSHF38iCPY8U4BBfGqq8UjQx2JUSiGFq1hpjXiduPYTVoiLnfZUTk9CMAjjLPpJ4uywjhzq",
  "key8": "4NBRLYoQEAaVkRS6YSGnaSpwnjp4ii9zoopF7Muo6BimxDUwE9VgGbQawobqQdNd2TFqadCCDMcYVhzswGVcM1Z9",
  "key9": "3NqxBm5mu8yk88HTkf9Yz7XxeKTMsRwaoFo5wmkt68qFw94AwTnuR2t7ZW1HCUmXuRBUNtHHttpSG8eQdaxRyV96",
  "key10": "5tUtgrPBXihWifkFN3fgXpv5sVWVoiiqxqvnPJhJgWxvRCkDBih8giPeqpjX8Y6ZG5hwfUL2uLs7muwR3zorptPL",
  "key11": "xU3H8cMwdaidB69XiETu1Eit73ZpWKtTHmqMUiCcntnUq8uz5Dob9ExQG4DGGEdEKkTTgPgHWf9oszMxg1B1KSQ",
  "key12": "1Dsnq1C5Gm9symxNKmLicQkMYp3R1pRzRzUkuLcPhWk2hZCvr7TUWn71khG75PJEfr2igF96kV6FbsEMwLTxGAY",
  "key13": "qUNPnX5zWk5uN9WJd8YBd7X9Gr7CnwfUNH6T5MK3NCjDqzNDNuhMtLLZTRwkthj6J2rhjWaNoZ6715C5mK2PKjt",
  "key14": "5akoTaMjadMQZ3Zto8M5G4miFqkTTvoWL1Czq7LPpQWNG5Ki1AXpQcTmzAtfEaUTEbCmaLZLcBA6fssQM3rVjGRf",
  "key15": "5wXLeVwEeTavRHf7spvF8vbwtGc83qxZks5PUWh6wiaD9mBBsKvmFyfnrZ456dGasqXVGDnUGNzPnnFy7k4iec6b",
  "key16": "2r3JXXhqCDhwG4upv3F5b9jQN2XzGCf3kCq6hAm5Hr4SPtrdKNwtdBryopk232JWVJzY2xjMmGTxp2BwXagQkCto",
  "key17": "42s8bL22h6foCkikTcaC7EKPmVce6oFd9dSJGAEicEidSWSBfjCyfnGkY2oto8QZr3x7rapT9U3PBmbBsx7bhGTt",
  "key18": "2LAeHLWEiuQT81RQuvfEjw6DDhhmz38exvRezJhvRiMxPK26eLbkEGhDSfmAhBns7DVTpTAh8XTuc9FSp5Frun58",
  "key19": "KBL87h5wBuimxY36yftaaoBp9LCNrcheDhTq2WYNA8ksXt8HEqRoWwPmxH3uwE178CaEtqkJUgzSL9QYQXu4Czt",
  "key20": "5uBZPzF4gP8PJsmeBXEocCZKiX7ugSDGuRreVAmVNBp6q6GW8Q58dQQzrER7z9hqN57LZs52rSYCF6nRLXAN3Dgh",
  "key21": "4KQED2VQnNLHHChZc4cKqnPfNcs3FkfB5qBUrLh4dzVFn3E5BMPr2kQLhNX2Y25stCebH41fRxUubGjD6fc2BXZs",
  "key22": "66MPGktXpMmy3ZN2wTFmmk4cSBxFpJJAVkqzPkVvzmg6nmW7GxVi45pPp3xycgq1TVTJ2yFoBdNVo37qFCW6TBHF",
  "key23": "39efTZVKM56SAZQ9SVch52EZgghf5RaeATfhyPvKg8TEPMya2xWbgj7BSTkJDQ9CGtykvJ4b4kBf2HAWj6EfEPGi",
  "key24": "4bh8eUy5zQQVJP2Y4NTPB7EDRpoviJDGVmQSkRiC7W477Ld18H7QrDJbHzC7Q6BjGgzSUCjNzBrVg4nsB2TkUMBn",
  "key25": "2ugFXxdQBhYt4JsovaYKS1qWkBdaguTNKocAhDnqywCppoKeLFiC5oGQ6MNRxnDL3TyWYwctJ8fpYK1UjfSh7EkB",
  "key26": "5oANYMdPZto8cginE9YSjjBR89yRyWCPoSh1BbQe2wgZfDm866EjZVCc6widVKm7GspV7keTkvyd5eP32Aqq3U3m",
  "key27": "2jpGfVu2e46QBbCwtY3VRPp9szT4RHvpzLxntnkP8uqsYbBMdWN4RrMYgqQq4QY9w7dnYyfhtkySP3RRXL9XZGns",
  "key28": "2vYRoJjs7C4bG2427Gp9MnDyhv7iRpvggz54NeoFBgmP2kx6FCtCNm2DU9xMmmobwYEM6Yyb1EP8nxpheic8vDre",
  "key29": "3TC6FLjh7xoQBeBo8uZsC3N79kLN5gvqkHJMksTjeq7RLQXZfWnKWxyQJqjUaGY8G1v2ktt8WdQ5RCcfCTr9ej1S"
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
