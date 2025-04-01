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
    "2u1fQrfFyp3iJK5WrGvGD5Ace51YQPhWcwW7mSKSzitGL4VQu9Nqy3x8mDzq795HSAoWBRrV7EpkbM25Hzqm1TZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgkAu88v94DQmDfJgm4WXvBNT42csQjQLQDM85JHGrocR5sZwcuRLUeqQDLAe27sf2UbpghNCCrdNLWMueyvzKN",
  "key1": "5eE7A3yVtF831ViD6oPtDs3B9Hd6d2fu7HFxERbJNVbHiuFd2Uv4LmjWseDRegkLmnfw5eVMv8MBrPRhkiVG76ZM",
  "key2": "5qjjvriYfq3jF2KURpmFsXzFbVzPiSoxu9NEdQaoUSirDgA4dwmUZnEqcQ3KhYxZD8QLBWCqkqzQZtdJ8EBiMg68",
  "key3": "5Gm288EqEgRFV4SFv56v7sknAPtskgwxh6Nh7sZgUAu65AzcFh3joJuu1czxm52AVW8Le2pMbYFahS1Lb4npu38x",
  "key4": "3hxqPNAUU6ZYE52xETLycBh63aDxoDCXyGGDTVhUar6AYBk9eCuguhUtPe6GHrLDdtxmrT2e1NMNBf6QfCDJbyZg",
  "key5": "5vqwSv1uTmNwGC9cPmCcbkvShKokajoB7FC7ctSNggRqSAt5FhP14utA7KnfzEqKitXa3Aw43u9asNn9WdXbhp3a",
  "key6": "2krAzNQPUeMvScESWhwX6FzNpxKYahsh3jV4zkjp4qghzN98ESGhb7Ms91dA8fdTtYPTT1kFKuXJQF3Lio3CRVu6",
  "key7": "44wcCG9sMmaJy4VvzAuTvrzDCpTG9b9uEXjNXjkmCoByk7TnWZ6wB6rTTKTUZ9WSP54icrpMh9ePn7PqHTB13MjR",
  "key8": "2PUQUxXteLeYqs9wiYnFFsoucvjzsUqDdpcskMUQbQ8ZX9AjA899sS19nZrbcWETBohERd6aSGR8c68xrf57zQEM",
  "key9": "4cTj2QBiUBVoYATEMCjNAYRzaKDqexaFYxquLgc8sboDdE7yAAXhajTiTweCFQaa9psknVZoTWW7AR4Yp7AC3CMk",
  "key10": "61EvcFnSYJh91BeLuABkE8hVa2iGHE7ttmbuvXNnejiJXS2pkTzvYP35GCfjpqqM8edfNknmX9jrWhPYkMCZ8NCM",
  "key11": "4NJcMtVAqrEk2M6p2bRUFujpsywKh7wcMLd4hyQnZhfGFGScJnZ9d6Y2unKqRBeLhcPUQdn1YQScKAc6XAWDH3JW",
  "key12": "2idxFubghXyPFydPAjDCLrzKq6L3RJvdiPUtLBPrHVFYiHAgnGGWD5KgoYCPSX3fDVn8i7ZGmqP46kWtMEcNb7z2",
  "key13": "22DRgTFQLvTbDZgEyp97uhYfQRdM78pMi4pg4RuYn2RHU5gMmyaHuVLRU2uZhq6s4AKzZ7oyo6gryUxbULaGSxp3",
  "key14": "24k3rtdAJyopxL2MdDvTA5rTCmTnaSZ9NZDvuUUs1b6VWoxJWjyUY8Am71DRsebcdwHFbiganofXkipBbmntYuuB",
  "key15": "VzfpyLmyVWZ1SBDiGjRBJ3h4cBKkHxMUzRUGvytMaFid7PkdETzAVVQFMtURzYd9gT46RN8AawqCgSaCx9puG19",
  "key16": "4nv3EW7ZCNvBsUr9exX8cetHQhYur8Tu3XK5is8gjmyU4sc4pZ36TJ8f8Ag5iD6qMXxQ653NAqkck13awFvg3zJj",
  "key17": "4Ejr2t17CyaeGgiBTdUg5v6rRPMwLiuXge4VzbB4peHF5oGxrAw2fpXJr2BPAyTiYwkD7vq7SquCdYsF6CjTejug",
  "key18": "2iKxtmpqR1ZAaAcc1Ag9jQNrEns9UhASDt1KuDoYYAXF2a3ccpCCHmAsSUv892irBDrszVqdk1hXqkweENP6FpjP",
  "key19": "4y7MDZkGgxf5hEiEn8qju74SeqvoCX5fgSWJcwqKULy35WcutZgJvkdYbAaV94CjKui4D2SfPdbcAj3GeFdnsaiX",
  "key20": "4LVGZves5jXtS8Y5bRMCeGF4kZ5raQaYZ55yWgWQzMkSWRw8xN5FhggTcpgFTHWH8R9WAvQZKEkCf7kweDhDRiyK",
  "key21": "8tMfjnSYUrB8mmCJRgp1JXyoGDm1sTip6LBdX7NyvoxNEFGouDF3mwcxr78qEvfRKJF2g5ZBx1P5tdeTFvwDsVu",
  "key22": "3DqRybU6iwhhKee9gnHXxVrczGc5z78iyVTSJ4wyNAFUgeA23NfZGCE5U46aB1XUdq957t6z7vGr27TLQ57XCb3F",
  "key23": "5v3GtgwNeQmCaByXRdBw7oX6Ka1YH8Jx5uWpsL8pZgVMe4wY4Mc5CXoMc3sA7w1KZgf1PHhrJrcjS3LCnVCrRpoc",
  "key24": "5AJAYptWArxcREjTkxzNvTaxLferZghXJyy39DGinTkhiRTQBpkSPECnzqFrgKEMjZ4wW7oeRbeFSjgJmRaKLufX",
  "key25": "2PtskekeGGvd9bFVUqAH74Fr29Ue2Ve664TqgdzFb3bhmqTdtpe9TYYgYrcu5gBd9waPP1uLsKRk5WxjwBiqmtqa",
  "key26": "4Kb2kVnP1w6mCG1XmnmbE3PN37EWDbtBGcJiYVQnnaYQp9bpbfGsqB3N2AEtct7WicC79aDcnChoAHH3KcReFXwJ",
  "key27": "5czRHcAp53MPrNmXh9cgacXKqUQmkd64wcSFnD9YJAk84xyLhVR3F1hRduUyaqaMF8LyQrb9xL4vTNwhKcnhLzje",
  "key28": "2HznvoC8YCAzSKWXnySBPcWevqUWVFLXeeoW1yuhXyr4XCHpuvMQhpEYQ745NgvKxMwiPfT6ra4oysaSbhosfgxA",
  "key29": "2USufWddXX1CBvsFmKwtjcQFa1g7kYhxx5Tb34kGZM2vXn5nQCY2WcrsXGfPtf5t9DiQisiyxGKMFUv6GCU1FnLR",
  "key30": "4MPJ5GsRebnLdjZ1ybKkxvLVZyPAyPqKdyPFGAzbHReoQjcF4kue4Pc1p4Xz3VFp6qCnHYnAZoadACbXb2VcMQfb",
  "key31": "5NF27krgL11zhQr6vpgDnMATpW9LTLdJ89RxhjjYv45RMSFg5rV4cW9PFjmaA6rtCDoKTJgCiDsxknk4tQx3suFq",
  "key32": "hAHvtpore3igCUx6hoMyULbAM9TkWemugCFMx5d5g6cifAGrNJXXayeSqVHtS5ZWaBFf2YiyZtLDHWYgXifd1mz",
  "key33": "XsWjad3BhnyDB16zHPLWZwEAfGhHQ5hRoUSHUGMrsxZg81sgdEqUCDdzfjBevq3hBuD5Demk8vDhk4itzdkBwaL",
  "key34": "41UaPiFvizZgj7TnZExaYNri9KTYp4d24Ca95qqKftYnUWzMhXnmTN2tJ1WmHj8NwvDvBt8qRsx2e7yziQymfSxQ"
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
