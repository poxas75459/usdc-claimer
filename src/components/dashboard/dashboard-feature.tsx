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
    "4oNFX1UWk3o7hMmPohhHD5Pammr8k4VSpWNBCeAEX5dnXDNRoG6R1s38gNtDVPZHrKvSjJqpMP63HxnU8fPEbqsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDrjVFcFWioCnmkhXSrf77p97fJfXLzyj1rGMPaBRof3GNzZxk62U5f3rGGsbBAnTq79sKgXC8b4rq6KwiBmxo8",
  "key1": "p4DTZjyoRvJHv6A7wnzazmxejC67Xznmg3Shfq5Zcenc1NbTUAfKhZREEg4pKD5BygBYRd8Z2wXJnneWidMfrKk",
  "key2": "2S53ZHM34DS8o9rhp4f3yPjWeDSL9vPojbp94tUhYduTJAqfCThjsqfvpSsbLisofKXUn4oPhcCFKt1NarnqcFDP",
  "key3": "5HAo9v5UkxpxnToW9gpwdjBf8DbDsdHbVFidBxVhBcnUE86JT9priJFKrjkVPnKs5gyQ8A7QLbEAM34zZoxYjs7e",
  "key4": "5xX8W6t9P24oHtjusViDKCtezqT9g8czpttgwA15JNjyrxK8kK4mtFmDrmpdvRaweZDG3jPE9X4x3pzBCD3d19hn",
  "key5": "42YRxZ1BoC51wAfxou3D6e5DcYjSE7WTxE8yoBmDkYv7Z8VnMH3iKYtSrXgYSXyUxYSiWGEyPwRBv2mb33ZBYtmp",
  "key6": "4QLZEYaYxWs6yHU7kQqjJbQnb289AY9usFsZ587nrqLHymBQkjC2BCg7n1gW598pyiiLSfAbGVg57L8zyeepTB26",
  "key7": "czdpBDtQnXxeFjuFKMv9wRtHSBnQMBkoBnpdmz1LEqcURoG8rzPRNLpApCovxe2A2jA1z781tcRTK1UEc8n4YFr",
  "key8": "23j3kyj5RDzZxxG6zk3hyUsERUcS2vYVBEAtKjVn6fTo9i98PrCooLURUjBH2Zf7w9afbHhk5LqThhMrUep298Cc",
  "key9": "4vwxUJKW72F8KHt4hMuqDYAmha8LwAgjvsaNA5W2CW572d8XFjE5q4ujjeqNUYRovnWAtD5dFPRj1pwJ7Ec5YCf5",
  "key10": "5gxYw9PnSnigYqFpf8ymGTm5nM7rkj58FjakHePdhoKvDWxHbhjHyrCtCDu15HhRap3gJEHUZCcwXLDL62wY2yhF",
  "key11": "66GVcszQ4PBgR2xx1AQF1MBjK2sXEG18Dk8mP26R14quNkf47PdwyoEpkR49HhGQUshzpJoDU9gkq6R6s87nAhtE",
  "key12": "5nJFUqbX6u12mD4ov54dWmjp42RdqBH5bNceWmJmVpJQzdFTVra76RXqUjAGaAUJbtVP4CFTRhWodKNTpduPw9cw",
  "key13": "6W4pfoDvEcWqN3ejeHYR1k9Uzt3FpbxaDU8a7bvbox1CXKut8RjGXy11kiEoTW3YmLXNJuhoGCCfQPmViLu5dsf",
  "key14": "5hNGGZ5v93W2Zhb5LL6J23CFsL8P6awkkY17iSmRqtGGXFXAwD7e7k51rtz13n6MeJFfELWAeWQacPoJ84PGMaoi",
  "key15": "4vB9cyNLfjLkfxmspNLT5NB7pMWNX8DxtvgykTcheHJ2mqqKVUQzU1qjcjdZveZJaHgh6nAejjWf5QS31dUKz5im",
  "key16": "3naT3dkmDWBVeNc9BBzPuaqDDCXeka1sU2cqEZyaDCFFR14MWt3NZYbuV3cdVQx3VMcmWBTv6NTVFU7LXcF9mP8e",
  "key17": "4mEe7n4FDdVuFACKhv2XY1DPZhFA7SbQSCB7rA8phC73mUfjpLT52L7MwEqe1bXjkau1GXmLHZS9ag8CYrMBUutZ",
  "key18": "WLpuQAKLNytJVXkMk9843giEPs1fweMZLGwPWxnt89wwk4yK2nm9ANpB4h1tXjMi7hKDfVRupHoNLNXhHG5L7tT",
  "key19": "AA7q57LhoKnraRp2W6Cyw5zGEPhBwTCuEYt4hFYqF7xsQGCj5ptic7NSXGHEZDy39rTP7miiHzLuhMLXJGDaUex",
  "key20": "5b4abNfX4Gz6f4ZRDPzapeMst7QtGvNBG6Vb3dycAgo2sJ53yr3BbxeZmXWb33p2EmoZQFFwBb825vW1jpQ1sGA5",
  "key21": "5PHWanSLMj3bCAqBKWtQQgN9CVdmpN4116fPf3mZYUAh6qMUELhZMMURDpSMG9GpKiP32Ze5a7WDPL9qiaxFvRMY",
  "key22": "2jwuNVVfbd1UrCkV3aWt6KrZr85eBiwUBixoXJi9t1NiaTYPBYXnXRr7DeU4xSQUGiHrhPQ7wn5DtFG4m4kjcQp7",
  "key23": "5eTLL3hDQzkdTfUri2iEtYakhF8RLjeogGRsDmhajgMXUGfGEK9GGUY44QH7wxPmipjgid18nLnbK3iqpWotRhsA",
  "key24": "34B2AHYbTiC3vHURz2dNGNePa2EqhxBE3hJW1QXzRfz5ShtehWCqkJ77g8Zi1F2s4snBeboXzgEqNwVkCE9WuZ2X",
  "key25": "43L8T8oU4gZX8K11FtmFQcdYPFeovSBKTMhEkdY2bwxxK3D2ezRR4tGeyDNKrf9W6z5xJcjqt6TEiDV2gPCBNF3u",
  "key26": "5vB2B9Jkej1wDnSbxgmmBzUbtbcFqrjdwAibjPRZQm7AyhfFDCtbvaSsy7Xn6bZnTtE6ESW6miTtsA1wKR4RKXQT"
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
