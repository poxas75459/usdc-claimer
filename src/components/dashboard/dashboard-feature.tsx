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
    "3gFG2x5RDXLQ22pJkAPAn3oKUHWSjwxeWzh5j5Moc7YFqo1fxhLMGSVBF7yyhM5MBmbhUZHfxrzfa6imbxfNyVSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66uTTXAYjkVBTrTYzqqbg6xdJA97qtLcZ2eGoTmPHhP55AeipeoxomEyVuphqetEquvGmZYDacfLwpxf4QruSfQV",
  "key1": "48U81UL2JnykC11gSZzMr8XkyGzDXg7LZCRv6bHynuEDTAx4DbYQu4iJzQw8PygdhXynWsvEqvDas14DYjEJUEFR",
  "key2": "5MbJB4auTaLWYJeBoLGchzqAX9zMh9pqp7NbWAVVbgMNvp1hXkygD4kNFvuWBsKA95THZmEiZaDmsk6Xg2FEyNVL",
  "key3": "4vW1GqHYRzHMs3n1KyG5yFSRVup3aXq23bJVZ8aYd2PmsnXou2RCPUksjX2uKEjoRfaN7jDHzd1kVdECsvsaq4Uu",
  "key4": "3vpCvXMFaCfBhzicMYfqXDeoxSwd8armiMQZ9xyHUMmvDHshjVrxd3NFChM4thfE5poEynaTJwdZNtXdhvdjMo38",
  "key5": "46D1ZCbvfm7NkaV9YaGQNmahWfZXB2ZXNhL5JZiKVMcBpAaPCSSgPPpa3uJdKvgjvy3okszPJhvyjd2Kn8GVAhuW",
  "key6": "5MgXP74pixibpE5DkHMRsHKnbRr5yqbUEmf6i1Cvuwmt2P8xbn36ofADSkdUgZ1JCpQPdYQcMJo8run1cnMpsPWJ",
  "key7": "36YNx7DHGLUBgWksfuuGX3fxWkQfZqjxxBteMyjLEdBJVmZJops8t3Ka5RReuueGLvgSWJYc7mQbduydSdbqssRa",
  "key8": "4uZapCoUqHHcn19wHCLLzoT5VrwN6SjsvrSXkBZ8ViSAaQAQ46onTLxsrY2PAXuNvoG1JWBnxK4npKkgSxwqVXkc",
  "key9": "3W13HNcpp7t6HBrwfJtM8y46t3eCkNexHkkWXDVHAhAAHKv6qznS7ykYFwUHaX3dxH5TsdDWeu2cBw91kzWoEg7N",
  "key10": "2XRLfa11F3TLkqTy3wJMVVjtt1KFox8Tr9rDAA2FfPjNSnzFTFA8LRj7ctohCM5wGVi1CTV5MhLBirhbbzH4Z8e",
  "key11": "4ttx8924FWeKLHLEA84fiUT5zxc7D7UNyPLXPdbVqQzxo2hJ1NPjxor4kcpnv5SjfmPVrKCn3JmuLTAxbR5ms6fH",
  "key12": "3dbLhHF71HuSj7qM82YDPPpkcmX7imRWDrKtfF7Q8JjQDTkZ8h3Pw2Bdyk9PhLi1HBusNANhicfpDaqV7xwsje65",
  "key13": "39hMubsFKJAM82QVdzW2YfjR7phQ2T3pW897oHe5ice3uB7yjKYHXeWRPHgsT5YxeX5M2vaabWGQu3Sh64xLXDtU",
  "key14": "xhYc1TgBSE4c3WjVyy3yGzx8qXFpkoYkS7j4M9nDPR4PFPX6EBm7dqkxWoiqhEoH743idwkcALJo8qPRyRnxwfk",
  "key15": "3ZFLED4syZ2CqsB9GrTwghAKQDTZPQMiGSdtt8w5evz6JHcmPPnjbTiF42iph5Je2NM9x2ZXNSggPwVXbd8kEX9y",
  "key16": "3f1he4sitjwxJwqHbDhsmvPh7oTBzK6rRhdtiusrsAmryNrP7mjt5sv7C8nUNxEAxcuyXGEj64gJaqZ9ZszKVDWK",
  "key17": "5Lzxw9a9y2uHvwXD9q4SSfasQGGiET6oeorueruAwREaJxwBssN9yqaEYDGMPqw7M5McbcXNZqzCLZfhTRpYpjWW",
  "key18": "5g64L8oZhH1GgkThHrWZsNxbmpSEuJN1dBhYYUG57sfC96izjMuGLY2Kt5XvPA4TGSXCVN54MhTjCGR5pJn23TuB",
  "key19": "21KiVMP7CgazRVtTQnoas9Z5k2fYYCNfgVExw1CTLdiUwLzFq1X31ZB6SdCxWmyzs4RXiqfEkeGeXW52P1Xkxyjt",
  "key20": "5nQRs6nFZLvDmTMLq2nzKcR6qZNUCLGr7QFJbcJJzSjqm5LBSc33uiJD2LkjojDby3kzSxwNSjeZDNGFarYJUcXj",
  "key21": "4A4PCMadSnnJkFpL3fus85X6KhC1vVSF5e6uja2XLc2Nkh2a8WkYwkX9YR8BifvXwpp86zSTZjd4DSzNWVm4qJ2C",
  "key22": "3VQdVDLvrvneTJ14U31ETxgtqMEvnvwYTHQPoAF5k1AAZ2YC91UKgRonVKnnKJsYZLhKL7aUxH35jhsbEeteCQwC",
  "key23": "mYxGJiQ6NeNxX2eTXbeevGXRhyJVPCUtH6mNGEH2AAVaLxMhb7xMfWRPUEz8P41eQhmz34utZGMvPmd9pXurnwQ",
  "key24": "4r8tuQwhrqxwtXL8pZaF8V86pqRR8dGohTTWKbn97Rcp4zvW1oQYkSuwwyPKFRvtdQ6dTpJRuVbPLXWoLic4YaHf"
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
