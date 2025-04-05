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
    "2WjaDHP4TGnK1YDMpDo1Bjkx65kAuTgoDsov8ZYDpTMPnmonQhtR6V9BfdLfFZYZRRaPWTNDog1HV18BV28DSavF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7GZ1GHnHTirg1kEGP1Udc9yVfjprGBK54i4ddLJjKhBdiqV9vPWaj6t8XQXi1ipK1KYjibLk56MSi2FZfCkk1E",
  "key1": "3BtVBeGRHA4aun3BRVZm6eJ79vFCVhzbCxp45rV6HTLJmsVvZkr72Xa6YUWkgFHGCcAF7BHSxLYkNMX3G4RWEoBm",
  "key2": "2xAtTArzs874ykT1ndKFYng57YLPaLb22b9DJrzYEe9gjXWDE9ppPDb7dT9Q4h7YoNXW2MRHcWpXorbGsTDh1cLp",
  "key3": "EyZ3JXV6whJKSa2ShxgQ6CJSsz9uwCuQejVQLWR5hAdkaBsREcKeeW6NPmwsBe5mn23X8AcJ2EApfTFLnuMsA7r",
  "key4": "3KwD567mgEy3JPQDbMs8LvFgAeBMbqABaxZ1i7yyACCgS4sKgtGnBK7PScsod9njeCqyDGpp7GfiLpTRxNFX2QMp",
  "key5": "2ftRgBbksLRF9ExtL6DEDHR2oDsCsKYARnz9S7hVVxcw3e3pxkLPBayWC85iXGwinHbDqMMRemvXeRSttcejBUSg",
  "key6": "2XQbnKM2b31GcyJ6TVjvaCSmhxmqhzTwni4hfjdyXSRNMWJgsY11iTsnHSWqGfPd4GXL4MBKVohjqUtBGPj4ZjUA",
  "key7": "5SrHqwsXEPmryXn8yLC53CoeMRSfAQErqM2Tg33FYVCNGzKQUunL57vpjPxmxTYoCy6CiJFX4JxMDvbQx2gb7UEG",
  "key8": "an2bQYDp9DTx8ajcc8jdvr9Jfvb1mrWtzmPpBxzHCuCepNi6fxbAaRZZufaJt5ZWbP511unGUdaouXVTwYQ5oSY",
  "key9": "2nuaqS6463NyYViHcWrJ3YbPVQA942ccaW6jYgEE9Wn7y5jJm9b2GVEtGjFn48SksRD9TSj1LvCctfGQqeFW9MjG",
  "key10": "3589Yv53DUH4QcbjsN1d3MWNCq9VSaQbWPr4EcHM5hNbZkQxWL3j5YbfpKGzK39uHrRXjXJzxmYNaxLCeKG8FMw3",
  "key11": "2R1iFrsF295gSGW4SfDyZ37Cp2tEKNbnSeVrZJvGvxoQn2kgZKtTpUfBZZHRcJueMnQM1AWYrzKBM1VsMQnqjLq9",
  "key12": "5LSEk9pgWMqHt2FdGJ1Gf3duk9YJnVHJ7kUoWSjVjxsHaUsW57QBhUV22EbC1fFv7zQHYc3H9YCPHrxCBLHfi3Su",
  "key13": "3BL6D96bBvcYEc37Si8coicgL5bCb52F7LZ5Wr4fe9UPL5KQ6a5VKbCdVc9vPjc63dGbhJQVeJ7N4MiyAVQtakc7",
  "key14": "5wZRBpdNYgc4EGBDyRrcNun7KPbLDCP6XCkBeiVhkuxzb4jKcxPwdwPydZKXRYmyq3rceeaHaqjyWQKDbwfJLzW7",
  "key15": "4y7cw8tBnRhy9QdJxfg7tLPYEu8E4RwzyUzTWkau13tcCA9hocVLNMasC3H1bYDDLikwE8h91at2YER5c1u2eLTK",
  "key16": "ZnboFP4YTGCDL2LL2M4BtZFfMZLDLuJNn1ZGgqzQnkjWnLcdjoahpRnLq24pJHzzgQtQPwoNt1ojxk97Ld2SgJD",
  "key17": "3HsuEuaRPVUxvevrGq9MNoo6bT7nu3k96hXmvPqwfrNQuMxVpLLWdUwMXwfzr1C6pVXFVLpcbdtEuUux2fo4gmTC",
  "key18": "3Vexzy7F5WVjQf7FMBPp5dETUCHkZxgLm4QoKRzeb6dkDHuQeXugy3YhdcpEtixHnDACMzJvtvDcmL4U69PLfuDt",
  "key19": "55QiRWQC1oxNayNNdWTXAxz9SAoVK9TK3gwZdfcFqMiydSQLLJ5Y3CXJUA2MhMHbrEPBiHAfheug23XPweKYazgA",
  "key20": "BMiZAGQbQWDiiZjvoMpoHs3tGFBfQQYzW2ajxmKNdPYECuENc855k9nXnVNfg2QHM223maD2GGUYoaC5cBz3PVT",
  "key21": "3ePwZsFMmp2mw4d28PNnnJbs4gXBuw8iydfxyeQ8d3ocPzDU24KMvwK2AqCrU9vj9egCDnVPzoSje3YfDTxaEgFK",
  "key22": "37nXFfMwEkyUvVvLPUpsXs5XCgC3VsbqcruLEt9hK1Jtc6EVfGggqPpb6ycX54GWHyz8jJQ3gF7dfkvHZs3TS6rw",
  "key23": "3Y8ATRnwn2jdDZWDxEmV3hYTdC53qRxsYTMcJsyNN2TWvaipjudkKeEJ9iNGBybPt9p7zRBntszgKc55VGaJL2YR",
  "key24": "5Cs4ug3wrkkLckvdPB65fg2tgQ8LBNEiUTi3kWbQ28TwKoH32v2x7TEAHP25XxVfe76NNM1UrGdiykgtcHWRn2tx",
  "key25": "372vtxqaLgULtZtdRjJ5JE6TBdHN4vKUGyNxYadyip9avt1bfNGKuW958t673NG6hYa8YJnvrVhoQ66k4CfUX1wi"
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
