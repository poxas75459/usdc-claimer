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
    "fvWYXxN3Uj5CwDLGdP6qDw7ByQBkqeepWzcrnebMxNP4V2dawmQdDdcxs7oMQrYubYR5XfBKSNuEScebGjKFgJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wujM3qr84mGgxZTXS8fH9nAtC8wjjn6JzuLm59DaCm2b2QUa8Ab9nctEbwAxbtwq17hZ95zkYafd6DhErcPzWCG",
  "key1": "4SpSm9wjCkZHpnemEjKw2u1dohRbFSaRdZ4wDA6Zy31b44Ss1Qwn6y3Pykt7k7vQ5wVVdX2bGGsS28oFmWyuQ1YA",
  "key2": "2M6b9AcySakTDckUmWv381FTJPm9LRMyMM2shDc7T8pK65eW1z861XbwFVFkmH8NAQdENpG7YzuothS8kgaYShJf",
  "key3": "31mpFN5Em7SW18G1rs4DrZH5AXWWMv9uNFZWQfrR3LwUn5hrvSu5PsyPJRF1FsA1oeuM3v62tZf4urRsd8bKnscB",
  "key4": "4T7h3kP4wdWDQnaRghm5nchNZpcLymjnrLe9KH99tQbJWWfLjW7fhRYH3D2n3DBaxaPQ6kqssULQ1tHgQgmWqRfy",
  "key5": "2hqneDxDLePrAAxGtbpeHtwnX78iLbG5nmdEZd7PetnCLKJykmuXZCRtoRdemzbZZvoW8An3LB53YRvdtxbhaAm8",
  "key6": "5VaWFqS5pZg5pm4Ba2GSNKXB5uvNLK5qUZXJMhvUr4PjUzqbV7BNZp4gebTTeReeZiSrVVhFQqs43eaeBtuSQTUa",
  "key7": "2C4HsfwUTqLD8sMXdnsun1LDwfkWusXrdAXx7h9nDG3Ahzjn1ASreYDpXB5JLUqQ7izjaTq7YsJdrywayuSak5aJ",
  "key8": "5XmEBpLER42burJitSs8WaNt2GpCikj9dMGCDWzsv8SrEFJtfzmCjDcEqzvUbqnq6YYz9k9zhCe7vMZBXHVAUN2d",
  "key9": "5Rr2qzkwYAj9xoMoe6NkEnNZ4Xk87T3hZw3XA4fWQCJqNzJVJo5BWW9C2mx3pUNCaNizzhJJUqpbd1zC8gbD3gui",
  "key10": "2PcyBkXmcFTBuW1ZNhB7FQVfgcQEFMuPmDwVbZ72wTFWRp98TEfCEJVe5S19aJXTPt2se75UYwreXtWFUXDU6i3j",
  "key11": "4jXVMeQFKQtDqpdK7w8UZEDbBC9wvgEc8AnRQ8bzdhWBFLEx2DvaJN2rx5hjDJYdeCv7GDbLeD42mscwhkmcNBBm",
  "key12": "5Y89rkJeHJtgv6yXMTPhhexE9Gp2c9Bw1fU2y9usSr4vn2gHmXTKebbui4VvSZFrvNATVU7jx6zo6CQ5uHJ85utE",
  "key13": "3cKyrDuzTaQtMkrm1uHeSh6n4sfp9pCuJ4mqk5SNSTmWUnxXTYUdfUNTbDDVMKUP2ZxTBVtKSP3sJD3eyiX5PzmA",
  "key14": "24gq6p72HQUKyrsQwFJD8DrsAReYZuUzZX2Mm9CTcfnGBfwAHZ5FTHSZiDrXXCNoZ1b41qrqQHMmSbz8mKnbbT3M",
  "key15": "SVmcWDfu98mKhEZDSyaeZgCphF9RSZvRLLdMDbcgQzxMksefa85K3H8ptE7s7JEBkQHJqV6a9ZEjDMva4SwYTo5",
  "key16": "w9yPC5tzxsySkDaE5aHbUTDwiVN4JgYyWb5FtemEvrNL4eguUWXJocPXZqxgWv4WsSCC5Q48C9E6ehAUSEPrRYy",
  "key17": "2oDc3qmz5wTTVfFQzPgrCJkTGF5BGupW6DpkpgegitoxebdvrNS98RFMcBdgJD2ptvEepaQcbU5fBwUFRqqNtWs8",
  "key18": "43Pu7cbiC8cy1QVpY8wJxrZLwePqyXpaTP781qtbMhcP8NAwa8nhUKTsbym8VMHqwiqLsactoQrp3b7gJo5ToGi6",
  "key19": "4J4xKPDyFWirk17Q1c39MxJTsQ6B9gY7Dvt2N2V2jDSFKWDX2jSBPXP3M2hXHmtnbXTncc5Uk759vwJsF3YJZztp",
  "key20": "BZwSs1D6RY1FUhki2RCJNNoaHxpqiWdp72Q137FddompWeej1f4GorGqyYNQcp84DjLuBi9JE4XKaKe1D5BABKd",
  "key21": "4QaiYTyYTw3jcqyhTVM8XT8Wq5ssgQZXfzFC7rgSH3jgQJUAjktQCrrW2vsa1ePKFNBSEc9FCR1HrZs6T3VdW7LZ",
  "key22": "33nbRndks3Zk1Q7Psn6ZzDxhTsut66U6FTPYo7ytSH5aS4GymKqo8UYiP1ihKpwZ9HL9BoLMaTpo24fxn2RHgj3b",
  "key23": "4bTREkm45yB7qzZss5e6562GKDXsqVv3Vw7vX1WS4RLXyRHCY6TunBMoR61nu6MokmL9b1ZaYxV4hbANyVSFLiz1",
  "key24": "3TLpw3jeqS3uMo7ufWBvmYSGUWKqWvXQPCVWCXugiUs5d1MfNvfSyUZudDk8SxPkAT7JUeMmxv7EyMPYrmuZn7ec",
  "key25": "34fMgudkiZ9qgLJcJRr2B3ow4hU7ECJRjG2rrtbybUwXxBRZFGFwnn2h8bkXFjCeY9LFAb5f4cHmYmEiV322UvJv"
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
