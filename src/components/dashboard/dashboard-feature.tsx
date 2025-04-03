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
    "3NizMS3z8ftYHc1jSoUpxCYkFFEnLBY9zqznWr2u4g4xtisLAcPmMP9xtofCXhRj5NFsfcrxEjJGK9WmMchqT62a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YB33ndhpzKRbLkekqGpzfahCccaqecoYyoRzoqgLddHjvsZYjP7yDwf69jKFmi1iryc46y3BbkmYKDMSF1TDg31",
  "key1": "7Nxc5LkmJLxtumJDZC5VB8zLj6TYqCwjwh6cQiEnjEdebF92EwBMo5hRDPaQvJEuQLpohXw382aUhRqncVTYDpD",
  "key2": "vZggobGtWVwdoFh9dxBfa3wanaLeZAWA9Tw2AD3q2Cak1Px3pHKP9rAbgvW8YN8VLpGcswrMU1kCkVFqhU7pqf9",
  "key3": "39TaaYMmX5eo7C2uWrSYijL9B3E4dVhww36CDe3ZtFH6nAx9B2amN9YQchc6GJ1ke1hjsehtxSZwEFT1X3QRkstb",
  "key4": "434zDg5U4hcYmRWikCGeq4SabWvZWuQMo3Cs7r8caWBx1bURGeXhw8CqvRSnizoX7DpGf618gmKHCipKopEK5kJr",
  "key5": "Ye1NVRUZKFGe1oV341kCjSdmHp8wVPQhhjxAP3C1m5hz7AkgeE7WzkC4XvWGALBM78bpY7yaTGg6mQmLHwr8sKo",
  "key6": "2TqdN2qey9dPpyds2Y1jhzbe9qYsei4rrYTx7RRwPvkXAU4SPs93PeQJBURPmGvjxJKc7CF4oeMEDStZjj2uQ32e",
  "key7": "3VPas5SeizPNkJffAdqtKbBDJQHStmNVoe591Pg8uowF1u1rpGWzfzMwhVjseqyxV61DPV455aYRjdYwDTptA4kP",
  "key8": "PaPr1GfNPJ2zGkBGioKkSfkrVsjEqzwLsZJZDENFeS53m1MVV4fVUcAfYC9GRFj1sHkhtErRorUq9sLjzB5u4uX",
  "key9": "oLumXR3wZLog4RYqomZWWfyBBRLphkpobuinDmehC6Co4hBy6TWgwuc1qYNthQQ3AkePmq7M4wR4trbigLPLPQp",
  "key10": "3ajTovyEjpvxFzB7UoUdj94GzAtQ9DCVTKZNqjYF2gA5w7hsVvTWD5SJDZ1ewpL5JLPRxkSAKBR8dQWFuT2zaQDx",
  "key11": "gUAcGLcni3vaM3J5tAczpxAXz8amV5YPLk5Ak6Y2mT5Q6AnAU5LdzuduoepV2DUHvFYaEnQdhHxdRTuXyyrXgiL",
  "key12": "3a8LkddxVbVwKyzA5augRZ84bemc5oyWEtF8Wer62627B2gEnD9JshuqmccDXNJtV63YN8TscpHB9VQFszoSHEWi",
  "key13": "2LD4Yc5qaMp1T9jKn5WyhzdoiX5zrJ9SVDLrPP22uXrUh1LMW8wVB9avE9U9Uot4WoyPwEYceBYAWzoL78jRHWzp",
  "key14": "2D2vFNZKvEtg57sRyLVJzt18Yi4GQQ7hhkKRYAGtpWoZqoc3mDBFi5wYM875ZLmPQqKgMAWetjzGpshvm527swJo",
  "key15": "5YreS6HyHEtWEjDssk6JJzPuFzDCPgQoRNVkRZyxdQnr6RTvNHyNHxXFqftG6rpqZpSnbvTS2dUFRiJS61iCXmDp",
  "key16": "3H3FGt3FK1CQddW2cATxZE8naLiCKLXTteCefgui8tntK8EuXqwLsbgy8LJGzUZRYi4bVMRNxnvHS2Gu7sdUsm47",
  "key17": "5MAi9Lce7y1diigynUaFyni9JPP9uYJ4zq2nuyztb7HQS7vaSD7sfoZ7whcejH7aDikUyC2K2CpmUxWZSqXGaVdN",
  "key18": "4TtW9cgvRt6P7teK3NvG7QBr1uuJhvxDFJWZbkyuP8cTdEHMDBerhLKjnWQVYhJS77J6AJ5MNtcRQcGv8fkr5WK",
  "key19": "5zEvK7mfPc9mqsxNj1nCxYfuF3JAJgDgJBdNZii9NuN2r6XqrfA7KmhxyR73bsJ2q5yGToAiBwMDWuK7MufXfbio",
  "key20": "YqKnPHBBBijc5pEeJkL187yCrpvmAzgjdedT4LvdpLQWkP4ZGFNuThwhv9dp9RjQKVZ2o8kpHHjERd9QGc1ECgH",
  "key21": "4KMsh5s5qH7DxsDbWVNH2hBdC1ZzzgyruPLupajZkKsAohJ4wpLaQCFDS2ofg73CKk9xua7pEVLhKNsF1xrZHLVt",
  "key22": "QFZAVucfQ56x9nq5TiRXAJsdXsP3QhE5XXbQwYiE7UuiHs9Z7t7DFDqYEUyrN4QXVFirT5BQpDHPPRAbh6w6SPp",
  "key23": "c3R8AnquUGyfD3Az7oBGPeErNSVgYr7VnipfE4ciV6guQGzdoitg2q6LqCCbi4NWjEZe9yyoaFn4WdDAQDN2VRR",
  "key24": "A5ovvX3VNa3EoqYVWdgXAVACJPzZQYcH2gqRtkgKaTp3QbGUtoB913XEkq3vKUfL3C8QGrUdSAYPJFopkD4MeXZ",
  "key25": "2A2g6ZqqN4AvNsc5iuGyNSbQo9fjKfoaXvviEy74rRjXd4eA7aL2vWUSiQQbMhRf2wn24oy2y3Js3KwCFU7QUxDT",
  "key26": "4traKb6gtJMsc68nvUB1JMKHbPRGk7WzBBvBcb79UuyPihPVgPXasvYB6sHhTdPLfrNmZsDDgJhq43Kn7sEdr9H7",
  "key27": "MahiyNTEMcr1tS5ycix9sTYaqHdqhB8PDGA3qHnZTZFHModcZVzsX2f1qovfKATpGv4Di4mZ71fERi6afezJqiF",
  "key28": "2zVid6gyH2U7xAEmABixPakBtjcrBsL8KcSLvRssbS9njiNvvTK3Tm7hD9W7E5vS23VhyMyXDhPMjfyUaWWGSK27",
  "key29": "3TrTF42KZS7eHm1pYNSpcrM2ZN9TBtbC8a1SSjCLZ94pNKfFd1sQEtezAu5nGYtP4B5vKK3dtC8UK6YcYEHpaT9w",
  "key30": "4v5XNxiTyysSta4njHvVkc5XsB8XVPAae5nTYNwVvNdFictVyzqsnnA3wraPStAZw85icuU5iTf1KQLDN4mak69Y"
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
