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
    "4NVnQAt6a9w5wT1RUfX6BPCkS5wW16XutZ7S4726Q7nDFK2VmHbkXEsRaEfbwB5ZqCEXJQf7F3VRoLHMgApXHedF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J51TAUgifBzwGDbZMZhTgreoX3Hbdte2KZY2UnaFXAhwrbfN3aiPWHpc2vLbcJFkHzPxxUaugNznfUKekqNFiSo",
  "key1": "4jhKujkzeZy2eX23C36ua1E6aDKmUmDFVA6KVGwiTjo6wsL486obUX5PfKkc26hDiKvdeumzhgv1fwGxZfyu8FmU",
  "key2": "5HexgZaFKGNwKhtmWEN4u1RYmtB3fksmPubSRvGLh2NezodhqfDC4rhD29Dyuu972saVMxSxXCVk5fN4dgXECdP2",
  "key3": "4FtpKbLxMxYuuayHwGSRfhaZ93ehQ1mLp2YnMsofGpmCtLHza7pQ6MvN4EGnhj57x9KPiKEdbHsE7vxjUxxDTKyj",
  "key4": "3A8LgHPgtWWQ5tQB7kQNCgH5M2UAiq3Y9VBmYxtFhE1h3T85arDoUdDsE2PU2RipCaYvMKbVdghrqxqvQ9Mdnnpj",
  "key5": "47nXT6x9RFhAE8u8pNnDpKAjwSmJ7CGy77fT3MeSyQvdFM1FNMGWGgPLH64Kdq6J4YK61tti5onMzNBSjuYmSXaj",
  "key6": "39NsttyEuBP2KWBdgwAkvhKuHvU5GjAvQu92UUX5rWzQWTbdWXzs3bJKvURfje1hArK4QxSnKMnfz8fZRuanwedV",
  "key7": "xQP83PWxWeFU4PEuhmnn2aXqRPzozjdLYFtMDmd3Az2L5hXDieiNow3NWjCLhFRPo5d6xuwPcwVpZBRvCzxJmRQ",
  "key8": "45Z8tkoidGNTeAjgmwfQ8No5A64UsEKR5P7TzqE2VqwGiv88S47DagVtAJHvuEH4hRCDKSrabutHLVXGoXyiw9mN",
  "key9": "5hshLXdqjjEv6ucFtVjHnLgsAyKsexqhQG878mwQA2iAStKzcR9byWVR7vTcYUiiAS48yduSoD6Dt1P1DA1Ndkpb",
  "key10": "2Qo2pwUU8rKZ37wqSsA8Fh6gehPMNZMWVFVwNx1mqcYas4oFThsuUg2QJGHfYXf5dr7jbg9gHeA82DGeq8DQTTJi",
  "key11": "2L9m7UTZdMRo898dh7JzabKze7sXDAUnsirkRJtEP7uHzuBnHKiYc8r8bV41C7riUmTYNQ1ASvWz6v1AmKxPd3yP",
  "key12": "2WE2yLh4GF1Xftp5DAdcsddeuYqPo27RW4MGHcNnB5cWFKwMbPnEmnYDgq1XZVNaurZ8pNbRXoPBE5vePR6hH854",
  "key13": "2UuXD5x8zrkm7r89YJAQfpfivXAnStRajqiMN8WGSB3pgynbdzHbFQaQTn82vaJr8tY6NDcCabxZpdwg9u7ZFHXJ",
  "key14": "5sBNZYCJxtAD5oXudKnQt9AjoZPziVP6MwdZhG89BzHaiTKWpGj1MSssEanGZnXdbT1Fzt2p1DfFRLpHfpC36VCJ",
  "key15": "37Qj3eJV3oqmvb5J2RzMDQrEMGi78yd85KHrmRxuLQZxsRzeNPSveizh6maUm5En2zwjbX4VguEwdEw6G3YbFjXE",
  "key16": "3UsxSJuSayJ4vfyGs1MheBDDq7cM2sQ9u6ddu8Y7RBNHEoN2LEFTri6tRTnVSVwn1WJWDSGKxXEsdgvMCFaZCPA3",
  "key17": "NGirBQJrfLrgLc5Xk1tpRUDvmSzRcvWddjShofpxBScqNQf2i7ozGzmLVob5H7kpW7AJLedoaLpdxdHjLoJ9Xt4",
  "key18": "3MxX5ZhDpPMDFVhw8YAmpXSKfSFC1eaMXvsTYwbvQRucxHJkH5NYKUx2XqSwQVuvUqbyqf7gtUh1r2NuGfE7hyin",
  "key19": "3DxLCGNBzR4ZS8wc32N1EewF1zXT44ZvMdaDe2QNPNa1nSkrEQHBqMmTMCNeAVk9jS67rXSRKPBCWGBoFYZwDQZe",
  "key20": "UpF9Y6vuStrbzHAxZEmo3t8ss8tGjEcPQZJhgA8Y6upmpxqZ23Kz53JmnWXnw8k3wS4t44QW7NdqdSn4Av4TWVV",
  "key21": "3Y9NWcEZxCHRgfmNc3XZZo3bsjkVUCWd1UUcmcgEYRF9j2tSTUZ1Gk5LhkBcX2VAfXCeK5rKN4xtHMjtUM5YAh9a",
  "key22": "3tzcHW9ffHNrnkMErAvqCku5pfDaRKsfaFLWAbUbMaDPfmUAApik2SoYP9Y4jrp4yUnmy3cCECA58pzhTQkzXqdw",
  "key23": "3mGWBfeVmL1KUS5X78y2x28fPJtohEfznNRhLZmNp739Jwn5mcvK3wUQ7AQqp7RfUpFJttVwpnatS3i3PGSqQexf",
  "key24": "2QGHoxcVjEkj48WNyZJZ1Ne7a58EajKC5FJSjTDxqFTHZ3TWg2fHMThH9GVCvmdh5r6wdfGQ8XQpnLzPw8ytZgGC",
  "key25": "cGdsGECFE3Pz88WnPGAheBL9RQpc6icQjr7KGfitYPDLLLgeuhaoUq6JaFdaUoFHvQ9p9FQXRTgBxV3YPuorBZd",
  "key26": "4HoEtCua2chVBuZy7mR8h9M87dwRzjKo7Wr1dmCZEasddX381wbXw4RsxYcQN5Htnbwd4yoGZHDTmA8vbh3eaU8R"
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
