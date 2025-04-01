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
    "3s9VQCHLny5T7ARpK1arTNqDgzeidpjLREBn6h6QQSp7i4SMgA8DkJZZ14RcEuNihVXT1Z5WfrNE7xf3MNVJnPcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NUXXxBKcBd8vDpqVjXC514hXvyhW5PPa47NdsBG11z8NQEuTi8c94bLdWUkte7bn3syEwjNSDF7xcmLTcXbqy1V",
  "key1": "2u6aMHDUZxms33D1d4ZnYzZBKSUR7UCbAv2YkoBZempT4Q8SRbAXj6DjDiyfi8kb8NoGfdrbUVZxmRqkfXkoDKN6",
  "key2": "54HC18w3RTNfc299BbndANZWPVM98jKxD1gFdUWhxCDBNT9RdfdKGeCCtbfCicv3iruCm1j4hM5bpF28fRFAXSmo",
  "key3": "24CMMXssdvdPMtf6oKT1SwNXLC19oYBVdttDa2TFXQ4EmzwkM1UfcgZMmuBJCUsZJ982fevk1WzD2GCHAU3uPhRv",
  "key4": "2Vn8n3YfgTVAZSxUJSaaZgVQUSRn79dK1T9zhf93TocuGE7yA3anczGeCtCq97c56CYAegsydW2k8vTGpC42ZQsS",
  "key5": "2x7DjanVLkdGduuadyRcZqrmPUYN4zEXtXwLswRyQfE6SLezaJq2utApfZH8rQ6NDhy4eKFcMzeTuAsrJQ3tK2rh",
  "key6": "2ZtpkJAC78NRBfy7RS8xEsTnLyyo5oYP9sXafMNU9rdTKEoReNPpFTNcgqKfG3cFmHepkANFUKvM8cF3aLcMeytz",
  "key7": "3fYydY72bRn72kUrdKratGQJmN33Ri4hAvbPDVF4P2x1YHrPLTfoi2k37CAiJcP5DaFe48Ec4VZt6Mp7j3qjz5eh",
  "key8": "4wDNwujGD6pZhmCjnVJDuWEmJZRrNUyte3w5ttH6jRk3j1W7m4Zvj22ZjzL11j3DJXZ27UKuZB8SQNRc6pDk1WJ9",
  "key9": "CSwQmP2KuxQVB2yR5wWYjMSES4ZLRfcuNoRU552pK8aefipKerDfEYHJzYNXSuD3JLHQidukrk6zG5H62G5ti8z",
  "key10": "2KsdVZhkZoVz4ZFqkCZixhYpWNZKRqZZALJsDCk3woVZN8GrcX3G8HaVMMs3Nw1X6c1EmQBKSEsHUUodb4LUBijd",
  "key11": "3HPLsKGatwSmuhzA7hFanfoMFbGxLLdP3q7JBRxQbr7ooTzxA25yPtSTHR2bYfb5R4kjYEQ3LXap3BeMXzAkWTzJ",
  "key12": "3X4R3mjQmH85nuDocti7tsCPbWwHFBsA4473EBrLuw1WyEuUmd2xARRZ1ABxzsmYruXKiooAW2imR7WMtCWG8UTV",
  "key13": "2e9vBwUBXAb1HNymA5K2vPeHpjYoKceRFfcr1HJzM3ZwfFAo2S5dQHNjGXKtaig62aaV33v5fFV6QD9mpe6NZ4PE",
  "key14": "2bEVHy61XVwaJQu2fw4NG47VKumDpYgU4n9kEeKwWssdExTmPJEL5FeGjcNcYkChUoCWWi67frrTCJg172WEceBM",
  "key15": "22VdynpvXkh7MaDNYRrHjnts6GSVeQjw9i6qML21wehL2pCvgSUPGhbZhhYaQR9xn6SYUhxezGVNMDUWRSauh4MJ",
  "key16": "v332pi6c8cMdnxeEPW1QUzXJPsmvFRQgY2XVybiBqUE4Cow4ZSxXbSJqgG4qPBJ3rzmucwoDuF4wPKCfUvdYp2w",
  "key17": "4L9hnQZsRNpnkkZ6C8qcdi5Egn7fbUHyzAxc2UrzqsrpYpUHNtKAekxXXE44tMBEqEBEAHEkjyXwK5mhFfXUBahA",
  "key18": "ZXwdivgSDEUKr2KdTHTMyMdDGmjMRw9VGRqaXoemYVrXUsyQYDER9jZwAVfCV938LqTezDQDAv7xb67Ej93rKHM",
  "key19": "5rdgnhmQwz3YgeKaVj7fp7ugz3QTqhXWJG9dpxp29e25ZXPRMEXQzRyrgAQmyh2nTTNsbThpcYxNGBT9oyWaSoyt",
  "key20": "4a43FiZJznCjDVtyGMHatUCBCoRA7wCNkTUAZbZrQc73GeguojoRAsi7pY4NfskddWEoWiwHsfRpdnvBW19VxjJj",
  "key21": "3vNMA37HqWQMZbXHKN73WxwsLVqR4d6dbzccy2iiyjGoK2cGZwz8zBfRLLUPeERVkHuCZhBsLAnxaafDceqGq8eN",
  "key22": "49VjNDdYn5TKXDJ2FXiA4wmc1jBXpTZsxgaBZ6ykgNSwDmTZz58WF8hLPq56UxmcEdaKw4GJ4PpvgW7VrL4bCUYj",
  "key23": "4Hck2MNZq37oZ5tTviwMbowWAEzkSJJmUXj2nvmXpr1GSXbiC57GGRDqou8f7BXX4Vk6w5cRERbTQFCJ7Mjs5pYA",
  "key24": "2TxknXUvHtYVLJgkTajYy3VQ6Adgkakhmv7Ve1WtAnmr7D3rC3xrEL9ep5o1Lem9wsDPhKzFZvM4fvu2ovbYDHcZ",
  "key25": "3NxVVoCBvBK9szcr4VgjPgY6vwdAAjD88LEConpMHipmvjGKmHJ4ifXCojDsjDc7ZD238tNybuPNBm7UcrQrZVFP"
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
