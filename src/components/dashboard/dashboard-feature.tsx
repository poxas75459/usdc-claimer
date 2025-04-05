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
    "467WCY3kE2o856b6mE8FZNjfZDHAa9fcMnxcNmvj9tqEpSgjV3aHv1xbFbLS311r75SYJfafYmLQzyiqKKY3FSBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9D3JZebFFNsnaRfVav7Sz8Ki2v8Q13sGf39kaNbX3eouRNgxZSjh6Ya1TvN3x8kXwW3sdjcX78KqPEAPUdeK7u",
  "key1": "G7mqWp7XFkoS7zSk5oSiVLhSDabPxfjTo91bLmEMpY7duRBDTbYHL7c1CR6UTu2pb9VxvH8NWmQvvvWsK1XsRaJ",
  "key2": "T9WJVXuTg1ay3hd7Sri1LFXYeDRzB2gSc9YDtHMixxux4eoKEkFkZmg7tN3wXU5yxXgFycCQ2B3p8EdBMCck9hG",
  "key3": "4fd7QBUPVEYYGor9nhTupGHndbLfUjQ4XBGFG8uemPigvpBfCVPChqqygS3htACpbCevXBw9Xc5GnEJgixuvX5wC",
  "key4": "2hAiBDeGkmpfUwb2BHWd99upgLRaohTqiJrG7yYgkP4F3YhKLxQ7NKToRUZhtq14ThkfxkgWesyBe8GG3aQFQs9h",
  "key5": "51RRrb8DiqtePHZK1ZQd9b22c2bAuYwfZSmCXJjzJ7iyoQKvyhvsmPCcCAwH6dZPacojaeG2KamtTd7JSSknGj1N",
  "key6": "5eYY4ixXE8o2Jae9DSUaxa59DAwCnWypqj6wUqRSACgYEUrxfPmmpia3HMBNTxAGA5z8ozhpNpBs2jYu1EzZ9BrJ",
  "key7": "3HuWS8sFbKSHW6jkB7GvPzw1uLDqe5atSnsAoTpunsGwoqaFBsqBpCtFVqXXY3uwg2jDo9msWSGN49NrcvReV6t4",
  "key8": "En7oe8KPBEspKKQwq5WeE7NiLZ6tFoHeoGyQDQMxoioP2knVuzHiWy18UVpaudiGSsFbkZGiKBBDaaD1XrE2NG7",
  "key9": "3uFdhiCG9Vdtkn1gZFraUm96AzmsySd8cZoPkotrtXPxCcBgQY8rQNWcCd8jAK5uX1kNy4PZruy83uRfXwC2gDxM",
  "key10": "2Zhb5LTXLFcGUYEdFACJ9s1TH79GhrqaPR9iKdUdABAbuZGdVMVn2pDkMMLd57BbpdqjNi7KwGeD268JQ3QnhpEP",
  "key11": "5d6RfzTYREF4A7BqRdNWobrFmE4ddzHXt3JmaFRvjqeQTmT4nsiiLfGvyQr14Vn4WH9oA7HrDWLCy7SBaNDBN5Dy",
  "key12": "566FF8PAakwKzbiBU581bXgdUjW2FKa3ngUFkjn48WBfKaNBqvYtUPWGDjave4ntk8rBasQfRqC6Tre8E2BDnjbn",
  "key13": "26uK9cNG2oHgFy6aGsdMvFsnTwg12JzFY7X5P8vLE3i6vK6NhePtE19h5ejni19TMbX2Uibce7hzefmuQLY15F3K",
  "key14": "2trPBfyMjFimrSHEvNznoreD4p69p7ZTUEpp2inhWyCNf9vunbxk8CbmpxDedYPX3wJw9HjMpH94bA7y8VSuN6gE",
  "key15": "45CeXQN3GbTRrMG9Dh28RQwz5VkDC32HqiV7Xo8VX9Z2ZN6uRnBg9vxiYFrGXyFYRfkrBGxdRCdqDp7YynVEkNT9",
  "key16": "1uKb8VJv5jfrsc3bTdLE6HC3XibnLZfAu8tfnBdBn28vRsNroAhidvutocvMpKymgw5hMQqhiagteSoAiYh7pHv",
  "key17": "8rEFzKjTYtHHiGE4NHVVjyF74ADQrAswkKdZm8DPJvk7MSknKDVZ7Egry12AKXNxB66aJuzXXF26EWLQgwhkH2b",
  "key18": "myXLbTGesmypJ1vCuBq7spi8hjDGUwxrJvqNDmXx3cYzuuEK1iALNm3xrmHwsSHJNJfv1Rcd13fV6NtnRAaFxbu",
  "key19": "2wEr44zR9PRzKrYMvDuW5AxTGDWGcg9GryXJB2BSVm1RNNyTh1rYdQisprygjf3fTptJ3xRf3UEo2Foy4pHvfxWr",
  "key20": "38ucGrqoPQepuRWNFUa7q6PN6XfdfWo6xK2A2asj2NQkB4vLVNg4NURU9bkN9bdTwLyPLosGonAEaLoMCSATuiMf",
  "key21": "aKDAqSTPBDoeyfxaFreWa5KfEunCSfjvBpNd8RWFMBGjER88ZaFwbe76QypYBdM9xDdFdvmeK5zmQkK4mMHc2Qd",
  "key22": "2vcbStQMqtVJGZhkAwyJyk4asiPbpGCHFGyPVYE4kfRg5V93Lp3ugUdbAjW3idoZ5URsFqmcq3TFSXEJXkceJi5E",
  "key23": "5F8i8zHVetyrhCw1zkjS521UujCiR8xF89iBSf5EiTVigsRnEiPHJNpX2geNSeAUC7TqXGvcQb4ZTBoUyjjzXH5N",
  "key24": "2YHh54XYULBcvuxL2SroAveDd7RNQJzrL6n1zRn8SYzKUXjcdxyMjmxXyYea4fAaQHwNgpbMHkLMaTFAtf3H4T4Z",
  "key25": "4Ue2XWm2TGj4E3NfRdpGvZrE1Q4yvNTti4hSPvmRhLDvfqM5C86xTwzJp2Hkk7tYbpVgdVcWPRSLhnPU8BKbZVXi",
  "key26": "2xb6VSgxj1K5Njbj6nxVmw6txrS3AkU7RWT3DLC4nZrHiJ4oeYDWTJcvVHzMXqDHPUmKA8yWw55erhE5gYfhj9uB",
  "key27": "4HZA74YRTqL6os3aC52mtMv6VBYSHFDtxDeGn4wbBLvwRE7ncoQGRHqZUgd2N8PuD8ZghGKNwNpYPFamB5Swg1ES",
  "key28": "5yaWiacHkrhmHjPw3AewZkc8FSSAmpkX8rcAfQKngHvvGHjGVh5fFTQy6kn4eTcTfvNBr3XE9oTiyjCGh9rKdRXq",
  "key29": "4c6bynDHjuaEcCU2jsRs6msR7QBV3qFB8W4seVj6hFus89RGiB6FksrRCcLxoiB8MdfASrRddYnmoonSNDdpCDuU",
  "key30": "4mtoYr6WNFeAF7uCkA2NDspi5Lb5izaHK9UN7TJTrUD5LGVbH3kL3dRWQuSn9drpKoUSUPjY7bdzpnEBbAeK4i9B"
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
