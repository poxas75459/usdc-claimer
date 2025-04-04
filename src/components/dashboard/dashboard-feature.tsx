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
    "2k8SJVh6LNSYtNwfYWQ1AfHsnYj4UHkGDzwds1ApqgCqWj8QczqsFmxwtLvjNdutFsHumZ1ZzEvajKksPK1pSQ5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LcyFkvw4DXSeNL6ftwmkwDnhhYhxvqndas957cSmxT6c7u8RzcC9co25aNnsQqoitm6Ye8mAJPDfHS3Ap8E7Re",
  "key1": "4thVwtiU5qUB4PV1pM68HA3FurhTpg1wW6VdhGGZQ1go7bjef94Non4469qx63TJWgyFAP72VPi11yF7zkD7S6ot",
  "key2": "oVipLLLf4DK4kwYHKMXaddcYZFPMKoH8a3wAQLL3E31aGTf73yT7obo5oYQBUCxKvrFYW2am8vmMAS7hELEzgeM",
  "key3": "2PwRd5FWaoQq85E73WV7jLAfBsJdTss71QQtUMsHAyFwZtA2FfjizmY5oG3vDnmQZRB4mdEh6CVWwc5ubT6qdY3c",
  "key4": "66v9mXjstXhvaDn3BGr6VcDg1HVQaLMy3TWGotCVYxe1cpCcS3C6CnJ23B1QHhf8kwqwpz6JzY6VK261NfvD9m1K",
  "key5": "2kEvng7oSyGSDnyQgkqPnaqaseVr1pD7FdmWPC2yTv3p6QPZxTNn4mirWeuyP9bWKN71vs1HaxgAcPkUxBFZJpd1",
  "key6": "5dx7L7YyJV3Z1bwi3RY2MGu2wkzU75QqW58WGLSHmqAr7aqfFvnqHvYrEk1vxUd7VT6EdDn2W7P6Nz3Lswf3cFKe",
  "key7": "igFtLt4omGyYdnRZXFNKQ2o5tAshaium9H3qDH5JbPrmVSJv8nh8v4iqJVsryvNJx9NkhQkP6FRCHUWgLkUVqBy",
  "key8": "5RsNUYJUqPQ6hmSvcHt5LVkzTMyypWGXDgy9f2N8zycjR8gv9RGwKTxenmqxCRvBkAoUwbjkPb23QKcD68jSqpQT",
  "key9": "5zweYjGNXUdJff4qaTxLR46FQAaNjbknCjCnPrBVQ6KXB8K7b56wYyqTx2jGGiocg9UVghXBeM9VSBUF1nV9SBp8",
  "key10": "57JbEgPhwt2Q3tLLXeeCJeVnh4kxALCRpoVZyC4JPzGJJ9NAKhwL2PxHLVZVVUkbpN1zHoZYoQgG5gm2513cupaF",
  "key11": "7yxs7eC3kziwnw2ULFhLcoUVgnQSRQ3QbUvEtvMLAtKDSopAbSmqcBTBgGovCRB4vhFXGeX4VvHB69hD1KD1fTQ",
  "key12": "3jLeW65q43JcvKaQFkskETnBF2w9KZ3VZDQi4k1pFG1kc76XN7vaPbPHEThBLZP9fBHXoi7AgXRHcvHXqQHvad22",
  "key13": "3R59QjaFRKokkwRwoWdDYBcu6WBXoskwsUFhY6UapJU6r2zqnfzJ4pp8SPNjgSLtBkgrWk3pH2B8bYjzswqcGfc6",
  "key14": "LLPfdZ1V9Bhg3YW1XDCBU1VqTwoZajixoZKRTU6CsxoDcvV8rXZs1QSCM5wYcrdFnaJc6n1bgkw5obQpW8vwpJT",
  "key15": "5ENf44V2aAAKxrQtUQMZ17HtifXzduJDKBFcu69p3TZmucBApvCmdP8uR96Bc1sWpsNzUQnAxk36oRbDzr129oew",
  "key16": "5FQQjDphA5mVDiVn2wwC21b9zf8haPZgr142rJHWGkx2Ghekrj5gxBSYvBjp3hH9eYbC66vPj4r1PdtfG9LXzZzb",
  "key17": "2dJDkmJZNokyzdQxZ7hggZmQDmmEzvV81wESbbdF6B24Pz4hwD6QzBuM3hYwpVL2jq8JKKvTPGJr1gUHPmh1QsxB",
  "key18": "2PyJaYbpeLMY16FJGAEdXx6TDw3Eu6RUrW1BTCccM1kCFxxUfyrBrhC26grCNpHjXRMN7ayn1JSYLByKyjBp4HAQ",
  "key19": "53nUVmuGdxd9V5Twufu3XXtgoDMXdaWRaJUaxqUuv7jjpz323VbEcpXw8E1FxRWd3aUPj6h2j7DnFuQbKFTvbSEV",
  "key20": "64GhQcDFJFAJEQVAMK9VkYbncqZYki7RYdfQ7Y9DjwHJTQqpWLvWg8AiNAGnoKh4xC5Fw1NvoskezjBcajcasJ1z",
  "key21": "sFDVgEyFQDtaKJconyub2p2kQ7B8gKw22g4FLBY2UujSwtgJ8h2gJMAWiLDP4RL4LbfevLqmMyVC5LcT3BbDSSG",
  "key22": "2HdVhWfvEVuLsdMnwQv7NQjRnrfZeYZASVrmSjDWtc7nmWs6uTqT2LkRCRhVtxgKse6R2eyGATV3UaXBTNQQojAC",
  "key23": "5bBSJeaX9Hyc3Y1zmiu9gixPijKak2JFLw3qKxtq2jExBBWUCsD9yCYWkXGGQbsVnr24Cm9nqayyEE2CRNDjLVzZ",
  "key24": "u7cu5dwfMcut2QH1RK733HngkejDBtohuWLMVCRLno2AHvSXJ5X7BhP5BwKtJSMvg3rqBbrm5JyWrY7wiUBijnr"
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
