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
    "4mLdjkqFUoxM87nyCSuTBFiAP4NouUGkdAu4nqNWsNre3zx84DXiu5X2WWjNxGNCLa49NMgcz95TmfARCg2dFtbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72pG1o7zmYjT2KxvwshGgFmRaVYdGdzvyEVhaw5wboQyAjsC5qRZY2H8Wz5KGqBDV8VGaXtBet78reDbNCPMuFR",
  "key1": "TdS1a5GpotFwKAyMScFas37aFBoyjAyiRYSARtUqkCNhf42Z6mVTVhBPhwRJfWV95gjftGUArWBxr7ZWUYxY4Co",
  "key2": "5eqvB1duXKQVfJihfQSu34YVdrGXrLchfSxV1b8oE84AbxuP5dzB3pj1rifcVkQKvCQ7fwX1DYYgU1YNjNxjHyBK",
  "key3": "5QymwnERprm1vMPEe4gTPAV9DQ8G2RqcbE7ki2BsigUGN8CB3KCFmL736vzsBmdNQtEVtyoxczKWihF8wmCRn2co",
  "key4": "3tFzL9pFiGaqY5UN9TKqo1jzsbZwocUSqAKavczRrTQN18cYahoVZPJbjhDPTRRq9TWhZhBb4XnDcKnLuGRtQFLs",
  "key5": "2WxJ72Gxyj6KDghqRMjRiGsNNYJ9YdJbnhYsDHhAK1uhPpPSPgFnPEC86sQ56UqdD2ELnVgAVjiqQanp3Wzfob6S",
  "key6": "22ksDJ7c4kYw7nMuYmfn2T3KgvWhNQvBcdjrJxBVMPDpDVCv7iB74H3ASwMVwB6Y2hgPwehs6FT4uKAE9sFtS6Dn",
  "key7": "2VFnL7NvQ62raofBCYVcvyGW56ktHuUkmivEDEWb3tHYiiVUoUUroD9iFfMdLC5jYcsdrCeErKjh6haH9BpmnsTi",
  "key8": "4M3m56ZgBewmGEf8QiMEZBT4uuiu5wLdU8CVsJPZ9tYPYQJREdQybiw4QuStV2LDNFoeXTwE9ZhR2CwKUmnSAEZb",
  "key9": "5jfsA5nyXxTRj1yKoJV9jEnYmFjKkN7Gvgz2JXMGB3JJcTkeuki32oTHRDeYbPWueCQtNmcUKNwa43P9J4fY5ndg",
  "key10": "5pGWkvmxbBqoragFsbjzGvTU5QeNA72TJd4SwFfbuWtb4kL5dv9KYvbwLNW4YZke1wLsajomu52z8hw48aXDHA88",
  "key11": "4J4XWCexNJnfLR5bNjn81zSr4topshZfbQMsrfZbsBj6zcm1JRnfSWBGHJ4mr2jmMRbuLkYnWiSZPSVc92p72Apn",
  "key12": "44YtRjKNYAVk8KKRMPDAFCxxHdJqRNk4qcegda922Lyw9JYBtebpN9Bx8zJXniJVdPLaeWES8RL99sQzjTqKoXZp",
  "key13": "4uRP2ZJo2pzuow2ooPM459mrQ1iqspQ9gFQqMXSFNX2U15J6jn1wX1bD52DYvFsrQdWdA2jwpLckiX2xbNjjN2GL",
  "key14": "haQ3JXU7pe4sq4xbr3geMQjXdSoBzg8N71m6gKJERxVRaGoViHKiyG6jAWrT3mH15zwsfBjU1X41boUHsVnmK6j",
  "key15": "4jdPBuDMEdmrvNtLP5Co6JT4NryRC6a76ReMpy5yeN6JpAQwzjc8MnnPK3JCjLCMJLVBGpZ2jGDtRbGnAbMe7X5P",
  "key16": "2hY5bJP1QHDg3SYdTAJXMtD2mhUUupfaA2cVPj8qerqn3b1dz6BqZ5oRiAftL7gaywZZVGyZeDkhEmqf16o6kGu7",
  "key17": "2JTx77n3XAiprYTc1fkmGBg2T9NVT1WmeFDsbnLr9ZtinsKSRrUFYah3d5otbs7nSFA2yeC3gi5jPwnyzhDb5aGi",
  "key18": "2c4fbecS2VpzGhN7aDZG7NHdrXebANC73Z4UD4vx7LUYKvZgMgZ1qtiQ9VYAW94KXuvCSEPEwb8WbgHghC55RA58",
  "key19": "5DQp5jCESBimJBKJsFzKax26pzUeQqoYzFDvYyS5aiYLVhYs8YeWaybErz5W2iQpjNU9j3PfYUjZZR994GKWnQW5",
  "key20": "2EUbooaD5bz42P1WMk6f57aCPBamWgVMNDXFmyLGJs3NjeGFiJpoJ6KTJyZ1Y2aVLHZcMjkNjbvquMXwDeQUmeCP",
  "key21": "2zerfL41okpF9G24qQoygJW9ivctamweh36jdCWszMmFoNtJNNzTYTe2gK3yPsz4Gqr5cTDLVBXazW7UWqVuPF6J",
  "key22": "2jWeqkNqXD86efd324e5qJJGtMFJYB1SaDjwav6FFCZCmfJ9yf5gFo9XqMVnmg24RgkNh2PPoeum8pyaqBDBVZeA",
  "key23": "rKX8NsmG8kXt2Xx5wnbRFh94aKDKHPtQVUA1rDb9uaH1PfsgGrK7Dopbw3mDQZfBqhSwqgxGvyGz2APPykpJbH9",
  "key24": "5vwM6AUoR7afcB9G44eqwWenLTjCp4Fp6WjeGKNe1Rit3i3r5PLgWDrbPtpJAxV8HYNKHebhsHMKbU47tgjbSzR8"
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
