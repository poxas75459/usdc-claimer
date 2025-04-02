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
    "2DMzq3oT5uQCCkJQ1m262hu7WaKGUWgBmSYyfNEsZTZawB6dM4gtxSoAn6rQWLnHKbniWvAKk5qKkGFvaMuJvfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4cr3YYpJ9rKM4cyXds7ALfGNpnJ2HpabGYLDqiwKnKXSP32J2RDUj55Mtpy1WVu6Ryj6SCJQTbSEYZ9zZdetST",
  "key1": "5tpVNkLQFkTBWfq5nuxQHkAo2kDYFJhGynk1M2VvgWJ9ZrXyJFqnNii7GTMzSEKF2AZK4cxy8gtTwQLtm9HLHNPS",
  "key2": "3oZppnwS6zuSjF95v2nCJD2PNWujfDqmyiWqwFDCcgis3KaHdWRRQcrLFMMR1CAqQDrNPMmpmCKTzUabqarE4F32",
  "key3": "3cGWf9PbW4229GvtBEQfEKWV9eG6kNxRfRq5c4YCUiHCWgsHvwrimEnHxDMBvashJYMs9tAvwr4wn4vEUN2yGsjT",
  "key4": "37MuqNwnCQCwySYkeuoP6yGXubZMmYmJjw3HyAeC327ehRMJqQXqjj18SBRjLkiBBXxZobuYYyXBJghPnzBUr4jQ",
  "key5": "672PrjBPeUUxCyhVxdEAjm9UmZpD9W9ak1jriyypczvw5ph5BRGxTn7k1espsLerffAdVyhXeq9wfyrGX8KZcL14",
  "key6": "4tUdsFmVV19hb7dt4WA6G7AzoG1AuE2Fx9JQ447c2vUth2hkDqpmvAPufR6wzkTqxBMBYNE2SC3jGEiV5e1aYKsv",
  "key7": "49VtzAeh2xGb4B4wxBcQ7awJqJbi49xVSAiWjPo2dYvvMrD4WLPkcTJPp2Q2nPANNFsEngmj3o667eUpnqQ7EyaH",
  "key8": "5qMZKkqvtpXAkxUCNPaJXPkfN58sWMomk7tBWKogvKBru6kFLL38CtPMaxLQoPuVbS2SfbU6Tkh7qX2k5jm337aF",
  "key9": "4QSiad8pwEuLrXtaPQPJAFQYhBADw27AAy4WKeGsE2k81qewyGNZTCwBhyrt5mQzfG6UMN2jZYJqPd8pw7MGSTpa",
  "key10": "37xc6SAQ4ew3J9bwipsvd1Jfb4NMQvpSEdtHrJyiLVUc9xhUKascYZHhaiW1AN1HRPao6TbndUnxxbL9KWprtnaZ",
  "key11": "39QGqHPugL6PpzmFWPn2r2Zuu82XBk8XAi8tuNpaijKxcVigZ2QZhwadTGwJmuEznu3QKuxmR9QafbEKgnBvcDVF",
  "key12": "3mpPHC4thpGUP56d62Nri9n4drumAvxUYPd2bA46vzPvDNXJSrkSsibmf3Z6PD5V9nzSVoCyQT7L9vk5tpkd4wRa",
  "key13": "3sm8EZAdJoW9RuLWinsg2tdW8QonowAZV9nQVqfzMb2cC8UHV7Gbnrzv2y1e173BjRGrP9Q5ASea4Sn78EVymwZi",
  "key14": "37G4LySsWVntUkuB1xRcJ9rqRLFZBMTViGk7iUGMv3vUteYK88hNzHt6A4SpCNZ7af1kTHWbRg5TaZN7C7CcJCyW",
  "key15": "2gYfnBcjxxjDcAp9HqPY6haSPERNxsvGYFkuL3ScqJkh4bqx4ciAJYHjkD9g48fVHYWjqGkAkxmPRcw81TpjpLUJ",
  "key16": "3pJPC5tomtzUG5shAdDrpbVvNzaGMdtXifD8ZAEMj9s4Vp8Jsxdc8fFgmEuEkpv4GvodJ4fXDLRAecKxscSyvgZc",
  "key17": "3Ub3WBuuU7ee7Bwu9F1hCW1BWctn7rkJdqXy72DiseFGdmNQiSRQFy2rgUSVwwgfaiJm39F4viXuPaJKesgMWMb3",
  "key18": "5jSKEENo1q3ZSVESzWfrusCU8o74YcZiYeTW7tiEUmYzKSw2LEBD2H9LfSJEKmc3h3B9ifmaH3Gs8GFfq8siYLsc",
  "key19": "4CXMQ7hdEupmpUfyBrmngpNna3GHrJhUTaGK9Tfi4JJfnMQA9ARqZYUF6J7Ct4NV9J5HqN3UMu8bGQkhBYSszuAE",
  "key20": "4WMSBz6GtHDdL3BPu9Xuhv6CYAudKtHgLnmq1jR1bhvAvFWaW4Y5SGS7XUhEkmiijm2KgjDWbN4bgVmdXXTxYnad",
  "key21": "3Z2h4Ln6w7KZ8bCMCdN9TNUXZi897pEsrjt1c7x9fhivEAUjBn7xz4pM8A2LzaerNSFKYT8iue1R12vbXWJXZdL3",
  "key22": "3kHMJqD2vctRu1DHMm5UEnbtAKEDnRwVkDg3PQzCBChQMhufm6U81mxEei5UPnpu62kK3uam12c7rtYDvPtdWfE9",
  "key23": "58iVDeHYHdmUKsNHqGdnBAQ9SFigTk2NXsgXsgHW5P6aiq93CiMcJF7m5jpGMuXmrer92PF3VBNFAseu1SznCano",
  "key24": "55geEqAozcbMchKgn6Rtb26hJAHukvx6ALRerY21uh8cHkmxvgZX5CbocU55UwP67KHfEK9YWrMhgDKNeyK2vjKu",
  "key25": "5VoCGFbpMH1J9Af7KQj7fpeh2Eq39NbNZKioxchTCMK5tb6DJnxBPHVLayK39ZJRdsgU6vnRkq61AxoQJb3CBmXx",
  "key26": "5FG2Y1atk8eJW2RdcmPEMKgXKwwidPYg6QLwtAv65Jy1xKZeBX3khW58Tv77y7YSMW8AGVHHyeQ6LQbSfX3xouHg",
  "key27": "2JxK6PEuyjjQHacP9tz8miUbfsuQU5v1iVJGXvfiratCRsWptZVwSoVw4xgLgw3kiQDGf5jHEhB53fFLQKX5FuN"
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
