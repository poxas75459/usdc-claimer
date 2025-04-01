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
    "2wntiwLzSkLqajEXE1Xh6drNXrGaYasSbYLN3eS7QAGXSydzUM9ZMm8H1VKXfrPEV5FzdaHaqnxpETgn7g3hYfqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYF3zzGw5psngTgNP3AnpYHF2kcqLTJK2ScyLJqLMgy2boSnequ7xib5NoRMt4MNTVyC8M3RN8JR7fUSQciwgz",
  "key1": "4AFyEqpyM8W11TPqiJqFSbkksDTqNB4wWyDbps19J5FhZZtvzu9aTF3FtpCZvCtApSNGFGJJCEsiXbwsAYAjS96Y",
  "key2": "HcFDEZXA1b5ihbsPSv9UWNCZ1hUxBtbCiABWrUJ9YCHxa5sRQa3JoAKQnos8pivs1UYMeXMaZwAxM7upDfwjy5K",
  "key3": "3TCu6eAt9UHKNpPDcj61NuryMXFf2Tb5z1sDbBQYrEaETmFwjEBBXxoWUJYg3CRb4XpgoBHFKYJrBH31KQLdyDEB",
  "key4": "5YggqSsPq9jpDFA5Ni1wrVVy8EkShrGwibNbyKPaHk8KaHQy6bLHRL2p8F9bduQFvKbZn19LUW2kpS8Je9DhaxF9",
  "key5": "47F5VZkFceT2ESKdt3VbSr7LXU1Wbuo4WApv8hTWpW2xc3uqEoiGKQ5zyn3zpEoXnWqXXqemHSZr8EGYajHFrQbx",
  "key6": "yBGdZMZaoAuB7Q2S7tVMAQw62C16mZ4EQhynXiM2pfPTiEDERC1gsiTZsv57QGpLHVB7UmLQ7UBGc7C27ZvM1Cd",
  "key7": "5haZ4VKQewxjQsT1PUmmyxymfQFySqMFcPDFmRfwdLTVkXz1FdHzwspGrixkyMqew8YFQSjbc36oNmBqhY9dK9LG",
  "key8": "3E3Y916c675y8h1ybXGfBjraV86VDAQzSFvkzqJ568Fx5kYthtv8m9sVVrHWJ4z78EkPk4gn8w8pbFtwJB7KBoqN",
  "key9": "4oaymoBRp8pWYkRY3BW7gNoJ9xF3HnSxYGisPqQk4SV94JYKw35mjubA78W9kA7ozBL14tg2hEP7qKf3YvLYYvV3",
  "key10": "5HQXB9Drv6pafTya2TnXi7dNagdiw7E2koDyCLhVB4iLHodQi1CACa14qwV5wiCTfpxsqCBLFd5wPPj4bVMj3tLd",
  "key11": "xPVktAwYSnd4jMBxoAZmY4ndW37nnuwpcfRK9j5fbTfu1XeR8boJaqGFarPojiNKFUeXqASmNV1aFjXYgts7YG8",
  "key12": "3WA6KxAjk2ECm8RumuKFHP2kTL6sLHEovrmNCnjyXY4aWpwzbUP3V1bW5cqCxLhXPqSQ3q43h7xEBk3gWuha7sKD",
  "key13": "2y2ofHcXYzzHSMSNY6QD4BNHDFsZLf65TfaYeUhoDUnBERTPABFCf8udxas4ioRqxqKZzERQTpHTvy6mHRTYgpCn",
  "key14": "4A5vyniCbaUGCk2kbxe3PFRxeTufZeppCc88R1MpgKuqQCtRGbPnaCkgFPXCWuuW2eGiyvz6k3tRRREcR37wxNTe",
  "key15": "3KNWnzEk7vPL7FjFpX93UtiTFVrvRmkYKWzjiZyuiZ1zZJAoiNyYecFCyDUxy1qPSXEq21H353CyzYKeTijmjGnh",
  "key16": "5bZ8hZTNRKzGqxHE13SEfbg6aCCtuuABWgppiABpgK425ixdPLvUuagXRCe5t8SuCJ5narPU9uBZDg9xaWisVER7",
  "key17": "4cHGEpb5bGVaCF4PhGe3AkuNs5hUpp3Lg27e7HDMiMSm1vBYWseSjpiSTH7RtYR6b19KCnCPuzGWyrvnnZGMF63U",
  "key18": "2XEQ1EDzkaBnLBDNSNh3TvtZZhP8KyAb2mcfRUQy4ZjswVdzmvDD2Z86hzyawvxJQcTT6bzTKTNBnBNRvnrhXSps",
  "key19": "LNQ6vwecVPvc4xVCryA6RAtJe41wGpsugYkajg5JnUPVbMw1Q8nZaZFFoPg3v5UGYncPU7xGHYstDpp2zFV2Aee",
  "key20": "4a6aCT1ves731hRib7pkB8WcmRutaAPcqpFDoAwqp2VmC5vFuvZJBbZdbgRTuoH2QAuyuUz4D5goXCDtRQaEFJ3i",
  "key21": "nNLznBpSQhsGxLAFEozGWfqRhynDqHqgaZswiyJkJxQNKkXZFTR98e5rEYjGxkkXrR8YBDqzZyytmL4KBiZKYLz",
  "key22": "5hg9Fs9YaSSbjZsEhNLGGaURvQwW7GRjNkraFW6zWZJj7shU7PFvWJkoirgnt2V3HPsyQ3cLcrEVAadoSu6mkMds",
  "key23": "4SfFrgQTj4xynqu4hCM2ChH63e7LL79jsbAudc9oHzQZi1Fd9jGzbhEeqpzffhSM3baC2N2KVHQ6r6415b4qWfBS",
  "key24": "2RuhszuFtkV85ZcXunMHNgEvipc3otCFcNgkue2G2aJ859QEEwhRsWQgjtDoqvuMwjgE1VUUiNqFQHznFyL5y6gr",
  "key25": "5zu5AEJkd3M63dMfuQWBqYoxjKraRZe54U4EbLa2rRDVLT2rFbjg6wPN5KAUyWNRnjAnXr5r3yN2nEnffzsjdE6n",
  "key26": "4BLgTpTwzdBcfzaqPfYPtW45N2Z5RXoe6y4GMJwcRyiDRj18t5KLgh96edCr9s1nr3K6vu8X6jEtJixJseL34oD9",
  "key27": "3zcEMFSfAM9rdtgufPwFe7VST5EcxKCNb9PfsRXrho81K3M3KTZYAAc45rHntNC3M7UzXhA2tGQHZivHzcXdAf6M",
  "key28": "56Z3ac3vuYgihZpfVb2xmpPFRL7NzjMocy92YTytZ1rDvEqhtg8LRu4KSAWoyrDribBh52qFbNhPfvsXfqyGcD1T",
  "key29": "2cC8FC6yQg6a6iT3r5fX7GV7LHSeRbzpp7u3BdLZZFdkdHYMgewgwW6DfwYxuPekb1UBNAXrKzZrKU3p9HfBiib7",
  "key30": "4iHhEyZUmR6ZVqhDM9PeZbVMnGeNZiGDoHQpwLJLcDbgB9VHTgGue45o6iwoMp3tFnei3AkFY36KQMJgPQfDc6gi"
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
