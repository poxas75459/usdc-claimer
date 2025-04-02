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
    "63pnFB3hbwA3DQWVmGy5RgBtTi58Grvw2ysGTxy9wLbcstFD4uzN4H7cbEqLHKNXMRdQzZJZys7E7U6z9ZxSUUEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLeFQ9ZkD1ksmjrhQHrux9qfz4i42kNg6sfw22CLSVpxyi6w2oosLWbJBvKo1pfizR4ee6bjLs8tPUxm72gh6dA",
  "key1": "4vQrYvsBPmw7hqZW12erhBFNfmF5Qe3G5suegqxyoBUfx3YxanAXsPRz4ciXX1pRdHpffSk8xQhCKng9TGsKNS1m",
  "key2": "2MamNk4avsdvejTdfFyvWqWrgpSxsj4w9sddY9f7uinSJVqtis6fXbtrDLAB1mDC2qsAmZ6btCbQtvLE4kuE3Lcc",
  "key3": "4KvrYnrRewGsuHwwg1t7fzYb17Hkw97c8HRWDYEvmrRauqhvE4JK53TnnKPEewJKP888YN3oiYYKngT7cnya62Ai",
  "key4": "5Lg9BSrvtUQJErDQV2GUsrXJn3JECXMvuZKFVf5otWw7JoyRxxBg4uFshNavorRH3bCeJUfX5JkEgVd5GBnMj7iu",
  "key5": "2TobggsSNX8Jqw1zemTKzxYNqkLiXf8ukY8Hjw5eRKQCdQdL4FSmwjwESajwUsFsoL1CTXDKYcgx55942bFXGSc7",
  "key6": "2uqvphgtbmFL18e6fPeb9Z44u9oLptmPaZwQ8EASopEdnFQscxf2RNsEs8CdJiAkjE3Gz5TVrpwi6i3bFNdnPGV6",
  "key7": "WfyBzMW5PL3etdaxCEo8DZj6BWDtLvhUJ3qvvUD2gCx7mHe7QZms3qhieS8TFZ5gBv5aPBkd5KuNRWnNJMK1BHA",
  "key8": "5CeG6gxikAHbYh6m4iyTzmG8JBfvPYFgGMk6isaD525h7HuaiT1xq3zaTRQRkhXB1wbG5PxjxFZuz9N26ZC8FKcA",
  "key9": "WCbhKWtoyYg8wuxbHFLApNuoimoR4YWAz9nJkDaVdntJ1SFcDuv8Y72yURR29mcpEFC6A7RWV2qctNrDV2CvYTJ",
  "key10": "2RHGcf4VmjoZgVQ2RahepvhG64A5v2hFSopT1i7dncvUPo6vEBjM4ABL19TSZf5cjAeSpXPRURH3jBEwK2m46K3A",
  "key11": "64MSYeczPy4WNBQz1ktgqZV3vz5Y9VEfzCu4xPo1TnXRrX2d9LZBk3cutW349KhPfN4C1Ewyv8VyDByzpRtdPEzq",
  "key12": "2dnBCMYuuxJeSTGhtQqdkBrEbuvVcb4AKfvmg1DT5NSZ8NitDHeaVMhPNxxM7HttwzUqkRjWyjAtMQfsNemwXv6n",
  "key13": "5WFAch9Aa5swgA8ntaJ6Put1h57RcUVBkBXDMTxS5MYGPTUv1igEgyxXmtuPcDUQAhMMmM3z9yUJx1DhUNLNcgTA",
  "key14": "4Dm9n7QUmAJsmevnV9mzRoTv3qNwVPvcQZifaHWtSAE678sCBtjm7dWskj1oc1rWC8zz6cRiPGKFeXod3oHjD3Va",
  "key15": "QeW28tAQwWPokB2e9xvQ5MeXBLXHETkWA9iCK5EqxaYLkWuSde9k1XiNNzNi9fvEazzsdm8vmE8KP5rzWD7CsAn",
  "key16": "42juFmAnMefUEtPbKBEgE9aM9kghEfC9XQDc8pfm8cdHGy29qFFGkLuGL1ix2nMPWW1xYvBtouE4U7mc5iNeKYXi",
  "key17": "35ZnnZ9pNbXa7M8z3nhyrjpGGE7NXNpgfLRbakhMQetDZQULoAqvrXrQNyRB6h8jzShJYN3oGoNCQFhg2AnNfC3W",
  "key18": "2C4qmTirFZcd9MLdc8NTFDf9sW4qJUji7vunX1Kg2F4GP82V8FsKUrRwvZVqr3ccpsiMYE8LEsyvLGa93JcfF1CT",
  "key19": "3foTrnP9LYMiBNJgaMmgF5BZj2pwmmJvJc435HM5VTHKbXySEcDxeDqF7M3NqKAvJeky2tJK5vnR3WQ1UcwxnPr4",
  "key20": "38mY8jv6UGNvntd11RSnaGP64EdeNfKWwrNkabww3nNEDjQmcrP8Zw8z5pahcwBRziSQXyMA6aAZCLmqTjjjQGey",
  "key21": "RZFEwoPAb5CYi72fWgCEajm2SGHMR9LWu8QMgC3BZLcBKpC2XRPpiBZB7GmcSLdFD2W9tJPYG43ZsL6rfLkjAU3",
  "key22": "BMNLUUhJ4WPTerSYsS1vAYhB9ncFMwR7jmXodMnuL9L3dHXS4mMjUyXgG7uqNbkxBiMYjR4svEXFJn4ZRsBG86U",
  "key23": "14fp4UuJcwSRXGMvhzJ5sbWHJ9LqJJz4LTV3zM4TTBKbgG1nZERMkEuxd11Hz1NE1ThdPkQp5t64qHFFysQzC3h",
  "key24": "2uMsjhAetx22ZxRhKpGpoWpbkjvrAdpeWcGe1xgRYLhLGwyJkVTazjNBRQRLm238SZTGcYg7deNtL3KpMoWM4AuS",
  "key25": "5wGF1Bz9xWk6adwrGhTx2c6voN2EdZK9SYRwDpz8135joarKWoSu77ehLeiYgo13nqoPd5CGsmzUq1ThNbXa7ry9",
  "key26": "BHzQyEVjJ1T1XDe5gEZRew4iuQMwjy8t1ofemStFopiQVSz38BgQ3KNdKVEPZRtTPa3gGAFviKtJzkvN2RfNwtp",
  "key27": "2xq5ZZNvNq9VSJpnno486pjJVFJGR68KYxcArp71kYPg5tbqqKcckdmuyQCrU2z23FD9UqYsNdrFKyr5VEyXJCkF",
  "key28": "4P335XQdEYxvK1VMcmjkTPRxJ2K2a1L7Wf2GXmFi2LucGta8aajVdcKd8VGeAvJCb7BERbgFjqt9vBymm8nBTmgp",
  "key29": "5UgcVDeJed47TH6ZectUXigZKy8GwjB5qG2XegNuZDvNQZqPSiRYvmgzzUpAnxPw2JzsNeeLMEdh1UCYtuTXC3ck",
  "key30": "jnLoWSLmumRDmQcmyXMb55qD7kjRoh58g5UD8ngbPdkHeeVvCUwVmdQ2HrSfHbysZ5ofdZyoK6C42HVzvbt6eVJ",
  "key31": "4C8xvA6DoY551H9xEc3M5ZAHkviwqet1TkftZK8ecRpc4aU9BGD4C9ioyRbE5gzLHAjV7e8PfyJKc6QYHt2GyQCu"
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
