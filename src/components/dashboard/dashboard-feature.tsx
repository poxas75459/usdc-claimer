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
    "5bX1xbzHVerWhnomoQcZLxVKRyDLR8H9eSamFULX6yKCoVvRstL7Ko1iDXDBeqPPaaRsyABMEYzYCX3ukEJSC1z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j9LjmyzaLN8Prh6GW6eVAYvB9sZJYGQ3cGMavpuKYMMoGvbwHVDcumagSkPsbGVTUBXBBcCFwWwYDnkNeARQmGf",
  "key1": "4YSd2wn5UaKx3T5rWy5cD6jj2WuixXy1Kci1Y6w6qpRJ4uoHe9ZhY1t4hW9tUtmbVbnLgGaH4ecNg7LATizin6HS",
  "key2": "4Jc8o9bHHennCYQ6SwdSB9QfxtEYXWFoQbMjrCjdW9BRt5GTJgiwwYqHeGWKRbprYc5WTjhNFm23Hgbkgxeourp8",
  "key3": "3pYxy3D8A5du9U7bcmjQHHPvFpqxb4TvR7YNYA6QdBcnmFZQHdasRvMudGqkTmJNvj6LXYote5ZwYp12RrSUJTSm",
  "key4": "3tDPLi5ZjFyD4Pf7PMknzNudiAkLnGnaCpKjEZA8ZJVD9qqehmSHc3VNueiyThUq1bh3aRMPQFWRRpyNi7qSGJuR",
  "key5": "3RANWP1rqoMfxLB327c9MgKgUXLqXMy4AzBn8tqeW3QZ1WuMymsNxcsmgA3BtkurRV3s1S5Z1ExPgFpjGv7NGzJh",
  "key6": "Df9C8TDJos5oWNvoQknhuYDXhp8Qr4N4Zspm6wRcC8tGiYrFPauwmSy4iwhiN1MbCf6XgkwBko1HwSkM5inRGif",
  "key7": "3G4fccUGXQTGJyLPukTjhqxwv77HFWEzEBVz5kxBgTJ7MuFa8bGz1KGd3rBqZetynT6CuJ7zEUTrNAsZf7hJfejs",
  "key8": "29VpQUyEqW999gtvjf76amMBjefsBY56u9gSzJcnU3KvcPPqEJY7vJ5tN8LKbZPVcXjeorrEnw43hUkCHVfKC9Ax",
  "key9": "cEr7remx4p1Z1SCwfYET9BmqQNr9wWDeWSQv1jGcSHc683SajVuBWqx6Lk2uL8H6aqDWmqCMXW7RFQAzVHQTBkL",
  "key10": "A1vier1qJsaSZsdWiBuZt2TG5p6ya7ZSi88nPGkcHLweVgUWsoNsYBRYjiwRNTi7gFFNMwX4P8cxaRHEHKaYJ7A",
  "key11": "66G4miVJhX2pHN3D9fXRL3NFGF3qCccmGEFRmaXwJNn8VwarDQSUtR59X8bB2AeStvcfAwKe1mitUzveECJsYywa",
  "key12": "2ya8VMHZMTEyYWqhAQGu6TWpWLGvY2ZD6dcABeEN7SbR2GuSRp8sqt373vthBC5vS1xwdigewZTgmBJcDUPf9muG",
  "key13": "cppWxXgwHcucdxQS79R5JZoCTEJgUjW3wVeL982RVyZ4ELgV5JNWJfiP5q5tA87tbsYstxqNDcwuZ6MRUmVmR2M",
  "key14": "32KFJC48EShKemqhL9P2JpG5P6fHzFaGg2JBM23bnWzRhVRKDiWJixL6s8KkXYvW7RifGzE5eotkEWQDDaipdusx",
  "key15": "5bBQMwYfbTAqfV9QbsWnmdsdJFXdzbeQqZVb1y7MGwG2zcZm1Va67tUA4DYhkKdkfDjktjCHxDvZq9WRYsNuSTaS",
  "key16": "45ACUFM4Fkwdmgp4DfHcEyfH1SRdD82xVYjqtmMT8FQSYpU4eYfe4mCsyAFQnrnQDDpG4ZWQBYXAgUwSNscspTBk",
  "key17": "4FmqV2sWEKtTz1bRDpTjSZroRAAP2vHf9A1rs3S7nqTG1AKbSV5JwDhGK31ELWYnn1MSMCh9Ln7SB1tB8Nqw7nit",
  "key18": "5c41Ae6hg64AdXC5JfuYsQ9ZkG7VrLUijHY8ffhfdZw12vpcYZL6hWW98cGL6BoTxXaJrpykXEF8KnUVvKx5DjqM",
  "key19": "5gmomLJYv6VxjEEmpBFchDkJxybMUPwTboWu4uEThiWFj792QgzKQhT89hySgVQsNjtMnvgLUsasq4AkZQPrC37P",
  "key20": "3jwQFgmukFSoHPzjk7bZxvSgZoTrRzMpaja3X3mrPgBrvJtnrgKgyD6s4b67HLxRQ8cTBcoMXK2eKgLFK1o1NSpv",
  "key21": "3KYyUFZjR3tmZa3WDnxKVGWUpg7NaDKfdrCot21bCmC2grpvzmqKqhcjtXbPffqp6vKYyeN8wZHW7JNk76isK6Ff",
  "key22": "3v43cJ4t6CaSPF6SQitqvY7pkJSX9bUUAKmc898JCQPXVs5oNzKoVJg42CpAqgbC86qdrD4jB2nC8SqNQWTFYJva",
  "key23": "43oKefBvaE67VivCEGsMM555ocUbSpn93szs2asX9frwnD9VNJjCjJXNhD1Ft7PckB4DsD4Tat7KKuyQX2KcFiE",
  "key24": "3Va738Xh3e3VFMBzjvn4o34sYUt5H2HW9jA41LodoaAdcD3sVkqpdsr1EFeQyVT6GJYTGxSAMBBjisKcuZEDDPpX",
  "key25": "2fcNyXAaLJq9qxHanCDwQSysf6niZmxbsSEBgzRkyQYtUg2yNTfy1LEBgiCtomqPphbuH6NEoun78qauTicELdeR",
  "key26": "2kNNj2V1aaKa8BxzC7Vw63oXNeL5zjbhtWakwYCvS8mtxeSJEubnobah17hLLNyvRy8vkAbn1JcWBp2WJL7h2hMJ"
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
