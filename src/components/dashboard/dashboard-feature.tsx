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
    "4gRfjG5HV8XFXkhwoLrDUvE2yrnNbWjutyRawRzpH7fCBzefxmR43qYj9Jh5x8GSQjeQAJZaAqDVELwC5TpSbZDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Moz6wR4JwoM9cpXhytpqXURDJKkfQ9GXhtxo4PxP2koFKuj5H8JQWTrUbGQR1Eqv8q5XcbpbLyRZLBiDznSCVr",
  "key1": "ehwYcazM2AAVocAHJiuJ32xKnJqS7AQrLGTGxrEXnirkR5S6FfTN39KgssnR6N3anVmrHRHNKKEssk39PCCVKmu",
  "key2": "3uC6nzrGEV1rpzaETV1U4qE4dzMg9CrQDuAZJwRPU4MZkiv8BAjHdUY2o7e9PYdzisbNj6mZXxTHEnu67uG69jh8",
  "key3": "4kFLXis1L23veN6s661fYoE7rk8ZD3LCVrKbYueoS8saDGPq3rcY9W4wRwrJfpfMR9yLa6W6wcqJRHSnvUvTPCHc",
  "key4": "3UQwSn7mQqoQ5nFS3XnUGmB4u8TLyk2Ap2TX8bioCviVYpFybTeYWaBVuSwMMwgcw4mD7KYwaF986Uv6RYuCTbj1",
  "key5": "3VHtC9Xqw5oJqkKGPxTAmVY2NCUA5fxNr9xj9q6rNfGFUCmi7U6HwuDbJUeB4ANzFPuQrgaRRcbHMk7Vvc5HxVwh",
  "key6": "5SMJ51o89d3QiPhoHfYedUKPkD7uhRCh8zXhmjg3a8T58jrmKfVSaLHTV5f1tGvVMovZydTBjdy2m9mt93zknqjz",
  "key7": "4PKqwE44PX3dG6qEDQUzoURRXXkMUDZMah8BhKphQcQoPFrWBNmxEU2SoQkRfMAR7BL5BEKiyjHuvm7q37nKvLTd",
  "key8": "5vbhAoWuKjjFrhfa6P9H4ewj5fShni5kiyp3JDuhLBZgciSkZj255pBSUhLWfHDYdvrNyAaf5PV2NiUpFbMseMz2",
  "key9": "64oDqnkgN45278zNhjMuzNkRQhG2a8uke9Ddf9kv5fD8kspKAfrJst4kiAmzv9WPGB6p6CGBeep1kMB9VRyWSbU3",
  "key10": "49fc6MByZiexYTPws4hMqvWhycJcy7p2xVAWfPsS2bDWKYHTkkwace1SyNu5Tykj2CjY4KkHJ63KfzqqJrdFCFUW",
  "key11": "4jdf4nfMGL15x4r8BH4qGx2VY6coYE61cjLedizv5yjWW4Qr3mRkoDKJtofL1xXDUT8E4wNbg7sVhmW4je6TDFMi",
  "key12": "3onUcSTYUtFCyw4wFb8zm3fkxkkbjaAwuLZsh1UfgmjQ6K6Up6UR63SL3uyNppQRSMUDgwLerMor6CN9CHm6Tmg1",
  "key13": "5P8cVxKS8vkz4LszbDkT4A9qAQw7zC6wSLGVZ58AKZeE4Hv8gM3S9YdyP6bvm3ueCFXc3VPCuQcMTP6fusBFTRPV",
  "key14": "3UCAAbtoCnsBqh3EPTPuKvrhGoM1ear4NX4ore3oSi4DodrTwWLbFT3HXErMtg1uESBQEcGpcXU6B3VkLBYVQAUE",
  "key15": "SdL9GQmQrRHfMmucDC7sLMJ4zoCHKJLpNnn8RvERJtWYKGvRZmcZmtwaK9nYMtAvhi2BBaitRXtgKM6cWgReWmo",
  "key16": "457B61Q9YcTZM65zFEKBba3xRW8rHn4h79DPcqtjXdKFa8ntvuAvibbnKYUop7xzt4BTxfnsiTPKhz2wBby1avmS",
  "key17": "4dCEu2iEi22Wpr1T1YafMPqxDU2dycngFCc2tkU8vAbDu3j4q1bw73g8hSk6a7F49vxM8yAeW2atEJPwx7pEE1sF",
  "key18": "3cMVKKqokHjLzhe5JYiDaMZ13bAgVDa7oHXqHASydFamMR8ueFQyWdnw6N9aBywbAZT7u2eSpcSDkAoiLidUegqH",
  "key19": "2vvkht3pib94cH6n23ZWBLcrkd84fDqqxak6bLm1md6nnWwHuc7TSRT5R4KQq7WzitnDDdAe4gujHfzqimjHdYqK",
  "key20": "3X5LmzZcxZqgWyv4W8muYAztuTLrgkXkjHssQGu2JX3tJTPJkBtkwWDRx1RLfbBmWs4QfApKJ3b3NpPe2H78hhoc",
  "key21": "5iwGY5SfUXyKspwZDbvKNkY5kGYsWeoJhCjsf2iHA8y4RGXiCckvm9BCzMJQRf2ZBiQkYfu3bkZU7haVMqhXhdmR",
  "key22": "2uDZ8jrCMKGk8VsguvVMuM3EE9aQXe5yPHbKFNGTaobfZCFTkVY4p98vayk8eJ9B8dgmtMVzpQkTkGBMQFW7LAba",
  "key23": "5kKeq44p6uKD4T5WvkrZUCw3fw6D8DP3oxiT9Z5KiBEDWWMSCCNMuMNx8FPBBo4AJXSk8wCDxm2E1Va4jFMAXkud",
  "key24": "3N1Qj9wLT1fSbQYje9pPgLmbgJyoyx1TpzjJh6ck9kixoe3J1b11CSSoEakJZcZcEhnEN8VHvGR6R1QvqZLh113T",
  "key25": "5i5ZMiZd7EPCKVsCSqPaj7x19QyQ4KSvxDAvSZ5ndTKqHsWxuGdDtTjpVQUBXGXaMJcC43orLd6gh13vDaJ5kVgM",
  "key26": "3uGyTYtEPD1Y8NqeAyfXsjNmwAzFVNHdkN4yHojHFS2GiWgetrkHSH2sBiYzFJi8M87Ta5Qd6iGi6kscdzAFdEcM",
  "key27": "3As8ZpTNe9gPyehsVa7bKUNADvx2bPYbPQEX2b4NKo3Z95nJjAiYyJcAMq9aWHvYa2Uos226jrJANPhV6A7QxZB8"
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
