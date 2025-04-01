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
    "3SaybhUyNU6g4FZuEKr91QsQF2T4gnzJy249eTAsUn6YqHBrVyfyFnrkt2xL8R5BBBrpx74ncKpne9bsKJbUL8ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzdtXt44ewfjdio2bz2cWwJxX36GiyMBYesLgFMp6mcwe7mF6rQFvjNC2SdJNb11MaigrX3ozUsLUwug95jdcWB",
  "key1": "4hRgHdRxnqSVDKJYXu8ctdGBo4BAh5mYrUHwiEnTPkmmoJCpkGPr6GXMWMcMNn6DGejJiCa7D7Bo5tShRAo6CPYd",
  "key2": "2kvXrA86RZoc5Ur8Waj5wiXChGhjM4tDARQUW5wMWhVAW32WENT29vGTKYhoMjYAcY8AXvJUQpHrJ58JkH4rzzrJ",
  "key3": "46DwjyUxcrtJgZbmenckqNWLpte8yuC1pSAySFnyGvPh2fFsyATpQwVNrryrZmq1bjeAitpKfzqgWxAUNHN5BwaU",
  "key4": "3SSrkyHmKhxbnGWKtgA7S5p6EZv9rftDpvAKU7kMN7394Ad9g5ou2PjkqPSHDVkxmRqcFbWzd2BDtJY6xhdBqWEd",
  "key5": "4e4JRTfLCojSuNJc19xeJGTtjbgTpDznJoyzpS8HnqaszfofpoutHc395QQFJWpJRzkhfi8dEjbCr7YLfj7wZ2zv",
  "key6": "2WE8P64HoAW7EmsNiiFovxfoUymi2Kuz2maLjvbtTXruz8ckMfPurDv34yxbDSGY25SfBmy5K3rJNLVyPYgS3euc",
  "key7": "5xDRSgWJSC5GbDmWs2rmtbbZSQahP4NGxosScH36jpEK2yJri3Lgncf2PtkrHzyLxdJk142vNicGek5pxwvJSBC6",
  "key8": "55AcPSMqAWSuemFEBKZy7S6tiyKfzF1Z9iaG3Xotd31hs3jNsFYEsfS3DTrTCW9UWzf58mjaAWwHbYbzp1SXPp3J",
  "key9": "5jeb2eprb88BLzQ9rXUGSCgXRy8o32j4hAbUgoWpRv8jbY2W3diy6eumeb7sCmr7Vdr77PZ8Y2nRo5n3UgnmAycg",
  "key10": "2vGowicPVLkzA2evEkpYS6efAoafABB4h7kWBeHyRQCodG8UdiNhgLnbb2hp8CvW4UUFXmBa1YujNncddDqvB1yM",
  "key11": "MYMzqWZYk84zAfoqztnEoNisbfP12Ls3cjTH6dudvEMuk4du5g3mcJV4auUkzVXnNDBBveZnJgJHgWVu83hWZhU",
  "key12": "3frzL67hPytGbdhCNUwWtXNssx643AXfXPaywScE2NTyXZXRxrbAaXrjvtaQWzwfWZypBXYnAjTh8jpHvWJWXUFK",
  "key13": "34tbgzh838RNHnDpzvsY1CMjKaFwNokRbfGmr9BugRtydkJFgdHgqu1LtHFc7P1kR1DQgUfYfb7RogisnSao1cNG",
  "key14": "2rykEmZimVJw9UYQAF9mWDg8o7NxCzqyYUe4YSRNajpcmgCj2eMCNd8sxSSaQMhYj4y1tAmaa9hWWQvz7idvzGBk",
  "key15": "4EJpuWp6fCHrvsdZyCyprZnT9q8A49ExMgTqe8G19TKzxQFPMBW1Y4tyYMaiGf9myg7vwSxViqeCgJJDQYANuecL",
  "key16": "17BGgRPSE2FU8mAdL33S8PkdXbVsRGgkn5pPNCD3r5SgaTE3KUD5SPXnSCupdVtDwShjwXNXPopASgu32k7Hm3V",
  "key17": "MYpQngGvcddA8dcyEtsvMkWYjbAAm1BK23rWC6HGxNc6jnyWePA5cJsKUtzPiBGsnnfJueTN1WxL4YcbeTdheN1",
  "key18": "3PxPQG6VzP8oDMzu9w87rxKg566ymw5Y4SgaM4X1KeZuoCL92grQHgcrVPFXCHMHS4SchoXCtU79aANk2WiouW9Y",
  "key19": "3Fd5wNade9bgkxQSKDRhKnq6xuWjqEwDWMQPF2RaVERCqTw3MsvXwhyeJge3X7hzstQWoS1MeGX9Pqo8cUJA1cwd",
  "key20": "62sXzhny77tN1LZDx8QwSyHMPYziAFp76C4PsbXCwaes3QY8m7Wa1519gq6T3DRqWMAx4ZNX8s6uipHtzyj8oQYY",
  "key21": "3M2mkFQetYkXJAxuoQVSrRFNmAc9kuBnBd1YMSeVfAr2czNYPRqqvbsEWMAwvnPB2yBxWft7zaTqCQwQYkBvWrpo",
  "key22": "64gAVq95jfgXFTCf4PABDyJGEqH7BtfbHbwutFqTNppaovRpRcMFWRtNDTVstPLDqNsRLCRcwHeN1VHHFD6pfYmq",
  "key23": "sxW7hAzucX7zmtS3SifhR1zsv62VN12ydeN8NxBVjPzQUUaRFpy8hoWwGEsU339Ye8Ntaz9kqipjJvrLezaYya1",
  "key24": "aFaCxrohCqzXQdUaKLVao4SGDeTWmHB73Q4MfChm4y1Th6RGPSJdaAct2TrbM8HpvgWjVZ4PstkGXaPTdKAcQXb",
  "key25": "64YCF7VmvA184Nq1XC7TSUSairGkRF5USAZSK91FRxzxV5E9eRsDXW1jSPrSy6PMXquZo4QVke35zmLteu28JZbL",
  "key26": "4T1yuexeUseP94ssaoUrJFG679YjaEAquXWMkTBETVvEWq5kGyzzCGHGdXbmH4FnrVK7MXC17MwiZ9SGKqvRJdPm",
  "key27": "2kwAPXweVL6uxhLXFKxazManwhyRv1wegazWsZXPHiykYJU9mmQ5VZtBLn2k72z5MQrytSfmbkhHBdumx5fymyAr",
  "key28": "2hWLSFheJJ5MWzAC9rX8R3gBXTEc6H7Cz58tGhrcf5KeRtYLomw4GCeU2QoCHnNKbps8AX2EgYAhLAsZiNQY3RpE",
  "key29": "FmzGW16iLPmQZTt2uuGBeDhY8umwR2VzUuouUxgXoCGMf1PTDJrFT58icBaY9uQzEhxSCTmwybannr3f1U5hNT7",
  "key30": "4GTByyJCNJ3RpSH4mFYMFqyBuhGBgTXa3gEr5rc5cy1XXLigSaCArZ9pfJv4h3RvbbWL1Jz4rBNnA3cudz97spWV"
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
