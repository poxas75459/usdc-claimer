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
    "3LSkw7LpQn98seA9mtdV2xqRwdnY1bHktVWR26FZ6aVipMVtaPQ9LqvyrFgVE7S8iBTJnPyCkc2Aji8WaZd9qHq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHGPR6BfKDBPt28qMnveT3n91bFEFvx72XYyyxDSGvhbyRXPcY5KDZMR4fj2bQU2bKUL5QBHUAbT5mkMJbTjsam",
  "key1": "3sN7rZdpTmQB5GXh89BeaYcEPRg1YzYpB9ajnkqFYDchmFqde6zLykzuTn5xD5pBorgVR64tUTpd2fLQ9oyYoujB",
  "key2": "4HQpeZHXm1pLiuycKyJR5d1avykr8eCnDLy5gc3qYCBasmUuZYLQWMrBsvt7Td4GLSNfcfeJvKsQoDDxvJLZGkBA",
  "key3": "571YJ9rFqf2pEQsDjCYG5NRXCcuaiGfasXV8WgwDSGsWNhWoDrT9a5mfSJ33ncQKMi8Zb6fjD8dhNQEQ6kqW6pGB",
  "key4": "675ZKhFPH9zueE6i1qeS6ekp58skQ8NSeCdC9SABvgaZTYPqPEMV41JwfZC97H7hoshmzLxDaXth3dfoaeA5qd7z",
  "key5": "5UFADddWg92XGG8RaNLpn1rX8nPwTpQy3Xpk3f1frCEjkVzeCEK35u6HfpuZFvf7nSMB1gZTAaEPoU9EjHhr8aE8",
  "key6": "2Sf2P9gKRnM2kExykkhPP1UCZ7AUNwTaaVepGWnYvqbqQZoYxDqRsZ3QPrA1roghjsCL66p6QZBeJ87EhmtiiqJv",
  "key7": "FvP5fHXZZY7BJYgx2HXeqMhGBt2DCrP7LCptkAY1TzmauPNNPL3AptA6P8NgLuBhTJoKYLouQLzGEH2EYRbPNZh",
  "key8": "4HTCnrzLGZmAR5ugEugy37wfyVbzBSuhhuw1tgcrMxKxRnvjzvMZ26b5gckatyTmx1dTagtG5V4MnQnpSJuW2Lsn",
  "key9": "24aX2U5FYpcSWsZoD4Pnm37L29tuziyTFUFhkuSphYoo5MT4zuVhBZ69STin9jqbBxmejxtfgzWoEcR19mBaCCPm",
  "key10": "3Fw2khLu6SJLBQBe7uUoV2AWkWU2rpnWrhZDCHQfWWg9pD6qip1b1AdTFaNd16QBnNhNDQGXEVuQH7GgvggBt4qH",
  "key11": "1T5Kp51zakfhHAqg8TuvAHaRiPMUiAJTTRUkoGqnJNfx7wNsBcQbA2WWo6FhWhmGK3LutWyqRHhT9QtcQAhHE5S",
  "key12": "5unMzJWrT59CcQXLzAKd5f6KeJkGBrVyDQeQ4AZuzvaqzGy9pWmFWi1XHitC4edeQyn9QaEpUPL5wgSVxkeyrak8",
  "key13": "2nCt7msnbaUrNw1mvBNYVT57Tb1iWuvfouqY2KKkqjeA1z8PshwA6FJKpSN5y961LYttCSb4sZv51KgPBoGbFVMb",
  "key14": "QQxkwkCpE7VSSBdA5SuohdEMm8bBs5Z53oAGBumz3MvTJp5SWrHBMihDNnetQW9d3BCXStvfWxj2aagaffFaeqw",
  "key15": "2PbzecggqjFvLoyCY9xo2f8Z4GHCTUmQovFAkJNjAq9FEzWTsC2w82ymXb2cw1cJyaGnvPs4DvodfjKVnojtLQbS",
  "key16": "2KQUYQV1ajLwV8omeAmvUBdGLTUY259gTz2ktvFKZuYSDdDCgkVUV3bwFXLz7fEL27qbmDxW85wBbf7qMaNCiqGn",
  "key17": "5n7KtnTvsJLHMQhf4gYwd7pxKWzCKkHzocaDCfmHuie141BptubA7ERx4PJExrxDhwsvFq4eLjKyLE3ShUYT5qWa",
  "key18": "qLig2iyk1ZrGbJcH56Cc1tyqurhyrhDqgbpD4yXrBZWHXqQshAAmDs8oz65DCSR27KczabZEsbgMx6CDugNbRE4",
  "key19": "3PnK9VoHwPtSBqTTGhnHXPboaKEZ6TSSRHVFSR7KvtdCpQNoCZ4KHh4u12zxBzTv24fD14CfDsNxhRFxgRSu9NGA",
  "key20": "3oTLqaQruMwVqRbRYYbPb2A2Sna7rTGqZEip8pLBrcUUu7VmR4iQB657hFNhw8KQfN2kmQ8Kmh7x9mJn4kvFYvsW",
  "key21": "56Y3jL56Vu6FMfVfKkeTZEgNnQDPz7fRPc3AxR8PHdMHFEeMbjQT2MVc8iZmL9nxcRNgw8CCzhWXKFmV2fGhB5Rp",
  "key22": "2GqA6GGn6FJF7yHG1KxtXHoGPtSE4khC52QLUWhPL7NL3uzch3k7HfF7vVzsDAVfaJBzmsDPD2qeqLxquHyHoook",
  "key23": "ZXNoVyfuGzoG8rG1kTmdvCVNPczieMERMXcqNy9vPrp1K5dCZnn5k1M3yQSHLauo4Hqopn2TxAgLBvGxwwEDMGg",
  "key24": "2mkhoPLLkk3gCht4WTSHJLXGjA8tXeDonKECaiJCaRp8SEBazJZz71r2Kkaup31SKUToegrSv2Jkvyhcww4vP717",
  "key25": "2HMAiBPMaoNJxrMao44ZL8RLWfNoEY3ynsAZZF32LtsVUYwTuBKDM8SWUcEJYucJim2GDVzpkY5F4uGHPQ13oex3",
  "key26": "63gvFBk33Y48T2knxAe3o6xEzxYNZJRGKdhpxSKUQUhzL2YBnPrUSwDWNGg9mz7KxwN26bLTJhYMeXTfU6MDGt42",
  "key27": "4Z3vc2Y4JK4oS133yaxgRqvtzbdkDLYTNFtva6EVttAHyUsmDGU3oHhDsrkNxDsNXrJgT33ZaiPTuyZqZhLPQNMd",
  "key28": "67LjXFijzYtRFF7SPd5qGEPiDbDTSuw5sCP8XL2tyVD9zvs26nJoRKvdR3tGsLWULtkDUUvMCAYr6PCmzXRXMpwT",
  "key29": "46rBfhHSmkLJbkMBfLpehnZkbDvffiucBhecH84N3fu2okBALS7iGDeDmZdStTpsFu3rjattF3eHkxZmVTGamJX8"
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
