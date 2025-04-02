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
    "5BpUYKzimYWdjtezXPXV6UmBEYGZRHyFYhdT2XfcrdfTLQrPFkhdWWHqDJXNBCX49sfrEsPzJiZDuZTYFVtMRHKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pk2GHMRrTcENcT246VFvT9XoRDySFGGmibhTnmeB2zL21TukNHc3Xbmx7PHUH6Z5iBLCU46PnRfU6vKGeUgvzhM",
  "key1": "1jZM52HwQ4RdtwhkKoHbTK8Ri2bPdT8HykXbShsfT589QHwFcdrrh3mN2ASMc4iiH4vsawmgp5hgWwWjKet2yfT",
  "key2": "Kbodg3RUZtJYTp8Rxo1J5YUYtH4wMGTiqQVuRd3ftYbBzhBJpHrg93RZcMN3KuCfqUiQyLvwyXTSGrv5LmmMmZ7",
  "key3": "582YCH5wwPhXrzWffzF8kaUE4ytekWraQeafUPacJbeeZ4suuFS2iNdL2WbmLyLuEQ2mnxbV4ugp4QDS4ZkG8X3y",
  "key4": "2EVNUmScuK3WWE46soCzie5cFmss3veKHi5YGTnzk57p7G4UC9WHiReow9qziAWEpScckKHNmYWtZD5dWwCmUwxc",
  "key5": "2qzZeDqr1tpHFGc3bxHC3LcczCM8UAK4phBVe3kQ5UjtBx6D5Syrj5riXZKPa75JcZXPfWgsaBA1DkY5irNuYi6C",
  "key6": "5ZSML2y4fg4pFy8m6br8yLj2WRLiMqVRcF4ZvAjzH7hbhmReLtxJ8ijAoeS7biiXzs4JwqgoTuyEdikHs1yACKDk",
  "key7": "5bAxnsV114Y7uYRvF5FCE5h1RzgEFBQCrA8UQ1tuU81R67Y8CXkAegchseoCLf46KrHyDmmZb2JfbYbk46WixPAb",
  "key8": "3nnRQtBQraWFznCykHyAmQWiKFFynsn4RrtCGipe4FquQFBiFAdHZuJF5tgZKTEUVivkM4iZZJbSLViJCbD5c2Bc",
  "key9": "4JUWpqmjf3UdvcLmiifcF7E6bQsDoFJCrNNTQWJznWaG7cj96uS7zXUxv9TEUNYFisn9YpaQJrVnfc62V8ZX6c6U",
  "key10": "5PDCreYNyGJSgJ6D2c62ZSzHgEEWUyn1ZwmMT99XeQ4nCgeuhpfMQ7fBxrMrAM1Q6MTWsUTXphZ1JGcsUhvwTGeu",
  "key11": "2WkDCwxd1FvsW6h3k8cxu3imX5TLTPcV5W1gPiXcyy6jRG8npLmoVTsusgDHfzQW71tReaSVsrpA1sEj9FgZa2RY",
  "key12": "2CdKCGGRJW1nv5mWhRSFNC53KLGw5oVVefzXHjGVNDXMfvgB9BHb5gbWznJePiGzQuaNZfg7Gr7t8trN3UCK5sNF",
  "key13": "2vmBm1GG9hs4CHykb5D3crNoTCSwi2Bo7jP3wZCYY6EFAvDKWiE6pUedXZgSpb9nwX7cwUFachPrci72f2Ld4sac",
  "key14": "4ExLLCoVexMB8CH3LLv9QCaGJo64Bwvu2LvgX4TVbU7EsHdi5F6fbt1M3g7AUDYLpLX6oDu6cyxj2Hnf3yDJ9frM",
  "key15": "3Xd754JMvNrDn8xgVU9FNebsduoddyTdqd3ybhXkKR8zcGahrPxsYEo8Bz2Smyc2u1UmNJyqvUgvMWoCZCTqodWK",
  "key16": "5eNvrCuEquyMJBRU7sBQqu4txHoYBEqTQvDBqwcATXCJhduSs4Xbf6bDGWrSUJFN3CFjNWmui3fFCRWy7BFzDdP9",
  "key17": "3wsiep85mT4eWWrnL2Y5omYjdfwuZAjw59jUSqe3KcM9AtxN9ChXq8iTiihpKAczgdqmcsRXhiAPFst9AD1gsui7",
  "key18": "3nsX7gSoNctHnaJYKYBbFKBGfy8Kh2MJavznoUHGuzwizjsC5EYog2JEzhPfcZdiWWZzNiD4bFuwcfzgQrQr2dBK",
  "key19": "u56AUF9eM9whChcHdsCVy3cs1DV63j2Ss3CpCFgpQwC88tkyQFfTEHxmYo17GotNYMS9UayKdYuBf6Sy7KQZtHB",
  "key20": "4o8ZYArd4BuETqYry5jX4kizVokzQV5EfrURBjkvvg8RoMe3NMQWxzrFwnuvBq5rs898UWDUeL4zJ3hgmZUBgscK",
  "key21": "5okoHnfAPFMtVHeTrkHFFCS2B1JWqh8nhHFec8RdX3wo9kgZqDMz21VJ9ws2g8YFy7pB7v1Ls23AKYVKk25gL29H",
  "key22": "Zf53X24CxPRNcLck3HYDj9q4iX2A2aRy18jRx26cjh82eHHNWUTEEuHWgSshkk29d4e5MgpAZVZob562dXQFMhx",
  "key23": "22Uc5RaM7rtcdNCp97XTcf3nR71dbLrUPeHhn2cC4uvwj6MfK5fdNLtftZxyt8e1ycNTDCpDeKGMBmB3YQCMhEFQ",
  "key24": "24C97qd1ZHVsCmZeVZnLNf8Q2sFkAeS3hf5pE7HGdrW3VK9AnNt8xEdDtqCPEEXvaeRN2vBwcMED9EvYDwE5ykfR",
  "key25": "3EUPDGztZyTLQECXJcAVBroPxu7a5QnE1zb8LRjmVdyGWsodzgxYXJF2pj9o3oCabqRKbhVbnsEhQbZxw6A27Gc",
  "key26": "24ToTvorvmdYPBTYQ2NrYWp6bX93PbpQj5RnoNGQqFPDpLBeGCU6NUwXdnduuFvHpw6j6ad2E7A3y13U2pnTpu8n",
  "key27": "4C2piV9u68gPL897245Uf4BEba72HcKKMu5pQujSbJjqm1KnrHaJ2gLbahSLCGeb7NyC2vQW94zgP3LjypVc4UPZ",
  "key28": "4YGmCheyarViXFuXwbxuopYdrjEPe8AWgkj1faPTcEG4pwy5MwcVJm9BDLD4aSNitgD2cAJnETC4jqHQJaZ6TugU",
  "key29": "2QrsjE3htBDZpzh4AsVawbbCyA9uTQLpqxnW7A9QVdLN9cRcdcmhQXtSH8Cu9nQS7vuMfWPs6TcCqdGNjJxEJ9Ew",
  "key30": "62LC7oCaVCPwUfwVXPgxmYfA92XVD6fTLzKK9EAyr7e2xnod4DmeyWXgmFfYCV7RJxJq1wJfoVLK392sFikmYFZL",
  "key31": "52WTsL4TNu8JgxXdQnQPvS94HFCFwhTUPeEuJVP8YyYHykLiZd9vpc64q7uXwpEyuRu1Ff3tsRB2fHptPQedGdds"
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
