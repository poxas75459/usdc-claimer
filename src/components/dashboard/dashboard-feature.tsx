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
    "2HWd9BPpvFGnYvfRFQgjtL2J6EcPR9yCe74qeykrwGwZAkeeyVXa2qPzeMJ3CaUVMXck1MZVv9TtYqyrR4gSivzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZNqxiCDZ5k2bQ85R9FbMKP42RbBSRentZMNTFKUpb7YdiYnNZ26FoKsdtXJt8W2ok7AxDQZAakB5TY95duTJaq",
  "key1": "4ckCnE7jg6ekzybP67iq6vzSZYpfCf2N1ft2Tcu4v1JpPkDHdk2gZmeTFPkH8tNKEsNpVMP9jqLYAe8UqZzZeXun",
  "key2": "4arFXiD8ZuEf8Dvf5umJkBCmATaMvcjVFnPmuzoi5fwsVGutyU2K4coYz6mRVhp56b4wsmron2UNLKwvwHbnCrKR",
  "key3": "3exMMmR9r2FLRvGFcEt6teye5ErATxMgSpAAjfYuU3qGNLfivw2LexJqv3RCzzfqUCUWAMVaLRePoTHinUkE786g",
  "key4": "413f5ZxbSkG4BbsrF1vjweq4gLz2ax7iEA37HX7C6rKJZUqzxQy5KYXnrWD6QhWd4VL5uiRZ2MnFwXpHVLMd6fgv",
  "key5": "3tEwVF5okb8SATAwVhUyipEaP7zBbG1XGCKZYUzPMbGxeqzAcDqbdZjup7q8cVvWKuCNCfDuf9dcBcbtJmLaDGYD",
  "key6": "2NJoNkbpFYoP5uMBcbUVBtPC9irUuJV8owwjwwaK84eimjVuDodqHfnUurcv4cbDmpKdfJiL78CccG81JrBonuHV",
  "key7": "3FzxUZmUw4dByQFuCCfCVzQZfZuVT3ZSLMbpcuw5BbEvSe1CPxJNrGCF1JXSqEwRuPCRLP3TNntdXQKXcV7bBA1k",
  "key8": "3xiuwCh6A67jkNznzZ92bfxUNhSR2mcRystbqUnYUX1SzEimqDZzB2jQGj75USujMo26sWMWN9hYL54oobVGSAhx",
  "key9": "4uEaU8xK4brTsSUDJRAaaMn4LgxCd82sh2KqRpJYB1bufz2vMmaLNxeYuS193G7BT71G8nGeRJuWtSZwWBEPG3xw",
  "key10": "4skZzfn7iRjtciHyTHdMBPZb4f4f8HBLNo592smuSyspHtMYUMFpzPmfxZb92HyENud2vHRNAgPnHW6ZWZPRQDgX",
  "key11": "3pwaFJrymL1pR1weA1nVgccUvfeAZTiYfmzRP5gJyepTudLphyahvqB2FzbaXNtogxJvZzFRbJoia1sdNqij2JtF",
  "key12": "21aLcA6wCVSWfF3kX6imF3mQEr9BHyBmzNMVoydJN8UXX69YpDUEUXH9CiQxnKwmvpGMgfKMkdGDVkSqWHEnZ54f",
  "key13": "4PeZWzCSsDpb6gBcvErwsK4cVD1JhiPpCu2aLNzXTV6D6Fxv74rWkzTDV4m58oYyZ5BJEzLyBbT2ATKYgXHAM5Fy",
  "key14": "2mA6qS6Q74RozWrdY7iVyvceBSiwg8HViPwN2FFVTZmNuC5kHY65csKTXpKhjyyG87XjdNez2WX6cukqFucHvXb4",
  "key15": "3nHQMxqFQdCBFVoojroSc1JV1HRyBAtYPvi5Rzcqk1Sw22nSXzpzEMg7zQhixtorzcj6WXENzjVuTtvQCCb1zwq6",
  "key16": "4rnbyK9pt9xr1pH2Pnm8eJAKwkxVZ1moWrLR1MeSjVrRcEV35D4dKcbm73xR8mcmk7E4UQ4uddY7krvSWiyg3Cz6",
  "key17": "5pPJiNpdfVcXTDsb9Lq7r53ywq1c1td5hXLy8Un6hESiEzyuNuRBbAVhWim5x8SCTfXwERnzKf1swgPdV7CcmsZ3",
  "key18": "26wySe1f57mEdPo2fFjUoqRf8r6ZMzNAUiVwc8MHbhiar5PRufNb95gzzFYGEEFuCkvGXMySTkskZ2gZXRBpf8XA",
  "key19": "5ZFsShHfDHcJW1STRUWpXzxRgSvav9G5731KTSNLwyJp3dTKCqgMwFPZxGsDTkUEsmQireLCksvY1jo2MJ3xm7XB",
  "key20": "3wNbdZsUxNcF7LTxTbSLAeTaHbD4THV2MuKtPwaXiGznmPGYF6iNZCYp9MuXxLduc69W29tkLAh2m3qKrQ8E1t1X",
  "key21": "pYcYcqaxReeWGMaU9pao5FZJ7YH7f71Q5Wqf3AheXEaGLdRk4KapiNoYY6BxahgfbbmrEHSFySSFL2d5DG9D6f8",
  "key22": "5YM1agnXrdpU9RfbdhmYmfp73f1ujYKXDTm9wZpTjTFJd8aRog3ZojXDRPFDbvDn5GfSAVyJMDtkhKA6UrSWpNqs",
  "key23": "4yvXC4NdspCuWL5fbgQwQZBUhqBzCh85Ea8p1vjrjsbGpbFcrr3FcPdGjEmyKtGjEEK4VjQp6EuvjdUCujKNPTCx",
  "key24": "5ybv6QtPPQoAE3xkcveNv4qTDdPrJydnirR5eiwJbYovu1tbQdBZSh3ieMRBfanb4YGVDUbVjPhUhM7mrobdLhWj",
  "key25": "46Vog1q3F51Bpp89nCYQA6Xmksnm49RKUVj2V7PgYiEJ26okSr3Pd76vn6ooijpyJzqk2WuXy6UjK91qMSpZ8T4Y",
  "key26": "5A5GtWVnCmmBRY9P5jtvsSwhhKJd3aZyu9oJnTC5guMHv4QSBJademRtUT8VmTSKkENxBuaAQ4iYCJTx61ee7rSr",
  "key27": "5yEijRz6q99csmgvmfXcAhhrseDaF1jZMsEefDMTwYK7HMhE3shzr44rPfVCesBfhftfHVWEjgrCVXccLeRf2JjY",
  "key28": "39xGLVZYQkeX7G6uV3nvKNDJbisFk2jyRVdpYDdTd3NttQTRZPAGmaw9q39cauwGqRABum19sooQXJCAT7b4QCVq",
  "key29": "4qtrNSzLPJU3vjoafwoAZTqz54JvdjyqCdQo3dzfmaiVGCvmuSWB1TcCGpKmBvpdPJAxNynepAYsZw797VhbGGDc",
  "key30": "58KhnZbQJyNaFSsG2jL1kpfUv9YtZhCJ4ehKzD31Ws5Przi7gFFJtpMCckjcDwxtz12AX3iV5yaXZLibKxNFjrJv",
  "key31": "2a9tJWJycprQuFwV1A7JTbk2sJtWCqACy3MMboqsZeSuDNaQxAMsX39GDJV76JV5BBxmwv532qRTqXxnc7jWoQ3B",
  "key32": "52nrnsgGDcXTJUQxxUJ392cjTka81eKZJZtyEFW4fyEHU6EkUGWL2Nyv6TX6Th8pChHn3aUAMqukhphWhFvbfxX1",
  "key33": "5tJexF5iTTGTWcimDrfgnXa1frgmmSzf9iSYqsLu649fRb7fuxCdf3frLWQvC2Z6U53Dq7WFzv5TPxGLsHhyG8vi",
  "key34": "2swtn53dghyQWcX64t5icUAmYd9uQHruLdzPKyeYWCXCJyp4tzQoB5Q1CtrWiLmyJNbEuFpALmjfAwJtnNPpbdeg",
  "key35": "3P4WmysDEpYutTzvsDco73sUZdS9jSVCEvfoVFcZCiAcpfFHQx9P3Gtr9XpuPNmCcnDeuqC2K7iF9mL2SxF4pSYv",
  "key36": "3C2saz7v4maMVuL6krEiA7p5sqCigGsFr8bEZu7SBHkuPYV93kQ9X8o4vYnFCrZmTey57jqgE5S62o2PVLGbq3ZH",
  "key37": "3j7m4FJuoHX4iQw8r8gSbBrX13p8t3y6ZSPpEXG6Hjs8Lfv79orq7UhUGHfa3CWy8VNwMfXyDL2o4T2PSwyKgV9p",
  "key38": "zL443vdP1jvMEaCYUrjx2mRjx4FtWNNCUbSe6drZVL8ur8ip6X5FUJCzTX1hUESkhTN1TxDhTiv9ATnmYFBBJBE",
  "key39": "54iBdSAh9GAkKPYck1yWpFVmxAMyMbaDbt96CYHYsynGZAqvM8ejKGcgVqcPU8yaczYDiR4soSNA9DHfwwkcmweq",
  "key40": "5R9eDaFiZggT6398TLTTSfom1zGSQDPQZ7Fp8UPe3jmKKtSQGqEd3uRyzAg4nF4qG45nXr9e2i1cmyoYV6yxcyw8",
  "key41": "9qj7DFriK5omByqg2Z3wXa1JGH8fdzEoBbsdaWu81VhsiybnVeo4HweqkdF2dh8uxeU3jmpSKG1oTH6P8gq8Ke1",
  "key42": "dZMki4U1RPzgt3BMXUmG6BvQ4eKuzRyx22kRjHgQ9Tn3K2JsC4pk2wGqMWkYvbndMrSECFjBCKiXUuQWaDUaFpC"
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
