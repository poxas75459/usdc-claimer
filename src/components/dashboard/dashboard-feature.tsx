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
    "5ZTRwz926YLaEQzUFrECADRYgnsv82Xy2Q4KM2zpeErKGiCnryDgQTnrwcDtJhXAaaVLPie15GNSmgmCjAsnjGEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5YuWsuUZKYYFw5gFQNyXb11DSnTUGV5YCPCF4W8BfVotwGmioA6dwzt6Rvsxdzb7DDcVQvjjK3btmmidV3ZhWH",
  "key1": "5nCuszrFJsmdLZjCBYJhTLSfKEPgsMhmh6Uf7Q9nagHN3huTBgUgUzoT9H67G82q47QuwskdwZREkn5PfE8qAo3P",
  "key2": "3UNEm4JSs8zYZL3N8TsHav4KyZVeQLAoqtxs9dT2ZjeKc3C8HVQijX7XtEkhLNcSYnaXEirjcjCnWiaFpsszMgZs",
  "key3": "5ySM4KFgerZNNyfsmML9saM2j5QLF85wb1P8BmF26ynFUi1L2ims9UpR7YB4wTnjc4vZZiLoKdG3A3hzwgZFhhxk",
  "key4": "3Ut8mvBby17WXox8LTvzxpUkKDW3ES1TtgKsiXPf93kg87NfEAiHCZse9uijtKRqZF385ghXd7YECSfQj1kGjEio",
  "key5": "2Cj3sJHPcEkDo2ZQQBJDdGPo5Jwz2PfaiWgCXGgZDF9J3reA72SXfNa5YodRkfBQBVpBwGZEER5XFPy3CsWjDB2u",
  "key6": "24gnN2dx2DmPJAgRnyeWvP83cr8q32Q1EQMVrxaZd7H4NvyYfdfJkmjQoMyDNdjYybu6ZNEM6MtWnXdn1jm8KXe7",
  "key7": "2PJFzzJ1D8z6X79v1DcjdRCeHoHmGqpVgFXqLdLgya7ZhTobG3iwLR6ovd4goy8P3Ziw6RCZhfQqV93h1cFR4gob",
  "key8": "3vFtWqqxif7o5j7FSC5iTpyqJmB2hZyXtH1V5arpjN52gr1o79MM8iq3Q7SesnfTU5ZiJ9kFof6rMRhcbPhWaR1x",
  "key9": "26LZyxKLH6C9kJHPf6rTMJFYnz5Eia1pDQuTsuZVSyrZ6rr59vKjEz1N1kxxZ1cPYux7CDDmGNCH4CfmRgXupQ3a",
  "key10": "338ddhyAUYdchXtmiNEyBcQbFwxixaEotHtGASC8Hqcqye9uXUz97k7sXZsjZndkwQW3asJPeRYtz6GbqU1WRXwf",
  "key11": "3n7XUaJ1sLrifxGNdnZkDwuGVWDVmuxCmQhkRnCgeLG2Y7XF7ZbmpWHHgjArbczCFxwTaysGPzsSfaPdjvtJTLCr",
  "key12": "2XrGJfNzmg693hdzaKk2L9eccRfzVK9oiYN178ynq5CMPPyTsc55HwB2KfpS4At1sFkPH3CBJnwcQy2FLB3in5mq",
  "key13": "128mozzXFakPMSKtBvkY35ebY14Lj74fNFqjuhNT4cRSkF9CG5YftZY4RdfEBHrDnjcAvEtSUogbekbTSCuYjW1Q",
  "key14": "5ehZVoHvfnnCL5pamoQNMiq9R4grcnoPDJFRr6vpdLEZHaRWd85CoXPKGskgKEqsr8hPJaTt9UpBSFQKYVSzSeRY",
  "key15": "3nzLo6q28uL8jZBbaeHhbySsEkzg556BVT3sUCxx2ao3b2Gchu7g1TQd9DaL9qGzgMusQMaWE9TN7mGbCaqFZd8P",
  "key16": "5JA81W1LZKm2mGbhGH79vTqMdoWJukwkH6y6t6ukkkK87ojgH6ziq8knhrbiLPNqAbD9eTPXt3X1nEsBEhwsAkHk",
  "key17": "Sa3rn7aAazFkR7jzTkCzS6kj3fFCcpjHXQNvv8X3Q19EpkZ8MQ5itsHngbVhjJp7PzFujD8Ay9MPYhSyCLawDT2",
  "key18": "5YApunyjPdgPnZeF8VNv8P3dRpfUMeRGRQxTnjqs96vKWAj7RpaccorgEm4mH9mBqyPPo8XPBavvvhoJXFdGTxxp",
  "key19": "3dmmKYjrBjFtvNQj3TN8eRnSvfmbsmqFavKzEgEU47jq2F4hUFYbjmdHsMukHTKRXVdczP7mstyAUDHCN3s5G2k5",
  "key20": "65ANPgcSNQxHMi5SCMjxG6Jt9fDoBxCTB5jFZhv6joLDN4FXDcBNcLefnNvNo4MckJs5j5jRpu3wiNJYbNx3CpkM",
  "key21": "4AY2nfyjm69sPzjo2fVBj6KSi5rN3vZnSQf6KpTHeRHRKpagpSnycgdNCWomvqxWV1GMeS5riG6zVfGFZ49a1Y29",
  "key22": "4MpAeJgjci7jyU4NV2hibEqZ7M6suVtTdQ6dCgQuiiZkGqangrMN8MD1mua8pR99Q5zihwZUx4CYifggSycdS8cE",
  "key23": "QU2P7BMu5cBBXD24LaLmMtvMxcZibYYhiFoKvwHREr2bLQnuGyh1ozmdmseCgTowbY7vrwTVNZW9PZ5YwiM3MRZ",
  "key24": "3uzJuZXrYJgeqUaAXDbTGqzg3doHkDpMyhsjfLYn4e5QAPksnDW6ypDnby2pY3XsdunQFzM3JYwfv7HA1dF8chzz",
  "key25": "2PTFN1ERvJEYN1r1SapjASsN51Qfc4tGwZdRHLeWLVncnb6M37M8iiAKG8X1oF7hfdADkMCKZDQhFXvrpp7VWmTs",
  "key26": "3i6sXEnxBHU9s9mgXZG18Dp4ytuAuDYuBmHXGmsMRQU7kAKifxTWGNFsVMZS76BwgAGLMzFWGCFazq8MBYpBdF4u",
  "key27": "3MDzJnoZt2x6Wy7yPVGQQ6WZGFxM5pRD1dQwdT2vgmxLAUGiHJmhbXhWKknz9Ct64qe8s4b2Ewywy4LQCVzKRMvy",
  "key28": "2bF7eWX1x4wCGLchNSh3aUPvsxA1ZLWTtS2j8zUPySRN6VJ2LEkZzXk5opvU11aT43bX16nn2vBVKRAwH4buCHfQ",
  "key29": "4yBAM8Jx7jn8qx12YcFcncUE14w5wBxvLPaVaNRjLixGmX26U9mtNnX5gu52h6dS1xqK9TQZDzD7U7m92CUVLVJa"
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
