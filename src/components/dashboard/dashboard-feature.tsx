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
    "5Y3CXX5EtpV4dCecP5uT6HL7ewuZkC6rCt4ZKdzLPi8FKfmuTwVRY8cJLejrvk6kYTVdY8WiYgnf1J49SGPEkWA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KB46KBNec9BvpRRGASsUDSWUQ4UCRkDsNPHMeqV6ubaMF9EY7JDgHBBHm7pSYDzdNMg3iXguQ39r3omUpAwu658",
  "key1": "4x9nBTcTV2mauVupzCBLhAwpmBuxvsMUBEpjoUQWXTf3wG5BuXX9E3FSCMSfSj7PhYHLgd237EfmzxXMSLs5odCs",
  "key2": "2w4nth1taQDxbVnQnnEsfzW1D6UbBk86XNxZxqVVExcgAQX8X4eLBCq4Qx5aHd6SvebffA4iJX42y93wBifoGyLF",
  "key3": "5uxVQYqMeduaFCEFCx3BzMCsnzT9ymASuSr1SkUfkcgSQ1BTFNWa2DZeZVZS96o4zPMQFjwiitEwnSwjXtLh2dYB",
  "key4": "29ghAxuoP4ccCxd8AoStdMG6qrv4tFGTgBAvb1Qy8SYhoKXy747Tfwfhey17uM8etKYXHvvx4DDVgVAZXmGLa2sw",
  "key5": "Hu51YeTYYxsn6QxkATnhTozyuD1QAgewYW1vo2WmicLDK54jxMDPX5cYfgBfnnFJuf7xscMztRzpwvc5YTjDL9j",
  "key6": "5gdgPqFP66FT6dJzonmYUxV2okx8RFKnLVDGPhs48dEfCVDkzf6Q4dzh1fvPpYvNku2xC98w95qFeDohBNmuZgL6",
  "key7": "FQGWxK3Fgwak3rd9ZVKqxVuNyPrKK13YrvQh18GsQzkykh68KZDr3CpESULdyureRNsdELZQLyUK1XHQumTe6Tp",
  "key8": "4TdjzGeCwr2q9j32SSSCu93B4tbyWeYMW6UhEDMavWWfmAwPmoUUBUdGreutzLvVNPHSGgeM8ho5WSGeaBQVFAnc",
  "key9": "3NftD4vULcEY4ydhhZviyCXrNbGZzGUy6nMcRmPJTAHXWyW3qYUAewNNNhwJu8XMxC8YapZBBkRKvkDbS8hc3Psv",
  "key10": "3eGErM6sWMf9oQHRCtXwp2ei3xf9jMCyznNfL5mfJd2HpLnFQHELoTNQ6svVjeRoEXUcdisJTSCgym1usW8iB63j",
  "key11": "4ab3vKV6WjkiKVRTx2oHsbifBG1aSvFz4GZgsXWRizu1NBz3eSaPu8T1wsa3NH81mVEiQy7KuqtQdtTh8UewdpZ2",
  "key12": "37RAaVycZwYCrdukAnDjaaux3zMiRjMvkg1yit7EFtEgqNDwkH1VVtCPoBFz6abPwj5t3fvm7YWDS7b7pj4Lpk3s",
  "key13": "4qY5xNMU4NUKbDmCbcSwpAetb8PxDWSpbxiQmP1Xiy1f3fBGTBrnSUaDxjP1pHM4ZdhRNypEXCXcaeoZR4zMabus",
  "key14": "2MJYnRXcGFL6jBNXucKDVHeyXQPt87i2PHjiQ9L5ew1TN2uQASU1QDe9egbUMjv3XSMGUm1t9uNV32oJigRivQTx",
  "key15": "4KjdBX8mFpV3qZsULk7xDLwNqrrs2BEaKf7efYXTQybjTh9NJJNcL4M2iSYFHHhhwxB6yG9MAaWBfSZ1TofiEtcN",
  "key16": "2nDAboJ6VkTibnCaTxzaZ8Xdat1PaQ9YZWNphRXYsU2iFp5YtVLmFmdpsa1VKxgfNqW7hSnoBfudZg4wCdL5KknJ",
  "key17": "4A6ETCvVX5G1Z6VZjcBGtD5e7V51ddv2YmmuPnL2mFhmCahJ9QjKLcxm5KXhpsd8nuVH5QP7EoR9gJ1des7znTFt",
  "key18": "2AuaUrkzeC6WztY7h3NfTbZhkP5hugQppWVnDuBx8BeKAuaUEunBanr88y7GEyKpN4mPbwVhjw2d6PxDn1RfHeks",
  "key19": "5obUWMtMzsShjvkbeQeLUebAKQjG1V3yjUYux3Uc8TTVVPV4qNsgVjDHyMrH6AJQv9dbVaxmQhNLQsEgpGVP6i7E",
  "key20": "4qQWRntwqsTWjpGi6VMviectrcdE1mr2fWGPQjknWrjcxfkLJcuoX38Pn93FJYjesNxAq2HohhzKFaytFcMBsGeK",
  "key21": "5zXiDDmWGGj7pQWBbzjZgtj3BTZLp4ot9WCNtoLxqaus7pbYQXvV8NyFUZHMHFiDZE2pfqq6n4KpdMzY8R8wUCx9",
  "key22": "4if3TRnUSche9iMeeDpTtBLNmCCS4RSnfTwXiik3HdnVVSBz89chDKcE14s16WuXdpfUo4sobg8v38Sa5K7htjYE",
  "key23": "2aEaZTq58LdQiGiGkAkAJDZmgrSyQXHqXf5nSQ2RGsHZxzaNLhXq8745zDQ4M4MVdf2hig272iU9d31ym2Ajebty",
  "key24": "4QkV7gAPAhUt8afaoMH11Joc7huUEN2rwMHs2oFFi9qTqQw2PVo7MvBuFRGmVRJB1Wm7Xq5oLrvmuMxtxxQWcSgD"
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
