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
    "6329tr3mVcT99ssjHn42osQvYTLmEJEHvnXnWe7Dqp61wceiQ1a7wnJ6xjhq2EpfcKMMetuj4SdGK8SenMkuPcb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nzoyd1rEcuCkKm9FMLG8GFKwQCPcm9BiSoHe3htvCUU5N7PcFhizT7Do4ZYjpFAfxEBXYLWNnqE6ttFMbxgokZw",
  "key1": "4wyiDZyhhKovAESbmMNhE8X3FRjSKVng8fkHjKaiiMidtoAShuTY9e4E83CwHoE5aJen4pepk6fBtbhyReDGfu3K",
  "key2": "5dUhN5sKX41cKhL3c946iJrDfRHKRovskwXZXU68T99jbFTT3YsdwjmyPKxrFvy1c5VWz14Bj1wKuq6i6xz9wSyv",
  "key3": "3WX3kBggJf9YxGaAezVqESrYndP7zHi9ckvHfUDdNmRXYptf3TtAYvTRHq5eS6ZppUs4kyvqhSzK2mjzYzYYZS1Q",
  "key4": "3p8texKKbFYWTgPj7A1VAkj1CWAMsT2qRRYvqPWxGbmP1TeugCkdCrz5b71JugDmDzMGhXoH9dNWDWnpVHeDcJdR",
  "key5": "4H3zJ34KpzFZLnTNLQfZvbWSecZ4WP9T2kdDq8NqLGqo2V64ZfnczvFC6pVozbo91HNcUqZ3XGUCMYR4bKxMBTkb",
  "key6": "5dxEmwjsH2qhYw5NKWBcK6kiAFr6kvQCEfrdZE5U7DvaAAQveXuMqz77Bnx8Ux5ph7hymbi7but6ANaHXtdHVthV",
  "key7": "4aeiiZXjRwEcwjtpVUQTEmKwgcNM7Ptza5sz4gFTprn5m8X16WthtMbnNzSrywXBEfomk4bjfh7nY9VGGn3BzG9N",
  "key8": "59LY8toxZpToZkZDhxHzwvN2hYC65UVZH1kYLpwfFGv7r7q76fTQjXfKg87kXeKasfrbp4WRQUXyKHZmvmrbiVfV",
  "key9": "fL3Er2VLpNTJNvj88jYaXh1vuiDTnzVNZyEao9jvR8pYckhtzN3vfUWTXg1TwkNFcL7eRGVUBJNcMPfYqdHnKVM",
  "key10": "4LLE7psh4n3vUC8oTPMSe7BjEAvd6bk9B5vJg25bGhZBghS6TipRsQEFi3yRBizsRUrCjdVJbfUQufGTNuKXCJ61",
  "key11": "FAPS8bhQUbg8pNroZbcdpCcspFiFHdyyUqp9i9ue6cPk5fNXwbZmLLmMqR3LJa9sAFTuVyEuKthCFzFP3myNxE6",
  "key12": "b6JLMyUveABkLmaMPerGMzeemTBZDgFa382mAZXG3zUM8oRkoLoT9EjqZji89TCfpmandTs5K7ZUvMH7aLF523r",
  "key13": "4Xb1SVgcA2TgCjAHedGs9YAF5xqGXKpSfXgaM9pk5H1fQ4uspBS7zboNX6zYSbNa1qCVc1H5tHP61dRqMgi6SmXK",
  "key14": "522EKy4KMVsN7tL3CG9JRoJeVTZmZNCuR84VHysbH4PJ2UJfh3ziMQmW2r7uHrqkdFyZtf7rsJLNopxLfk1s1hhY",
  "key15": "3d5HSrLkUxPAsAJtHHuwm8fvfmJ5F7hjyCNeFCwEp9hLodsqDPdhHMUjzsYATfvpJw3VJaLCa1hfBSix1mv4K1dM",
  "key16": "5nUszNWNvHUwVTdezduFDBUcgAMgNqQob1KaYJBhXbzEymZKbE8yw6pPGChcnbJbZQZ3x92MNermN3CmuvpQPEmq",
  "key17": "2YkUaeXPEzDtuwaCcNXhgoUZWGqkK5cPwfHNGXdktzz5XU3bmyTWEJK1R9bhfixBgxYkQbaY27htvEgQdbmmrcBo",
  "key18": "arZR2nJuVLm4A9kzSShDc2uqboDgwHdk6n71ZjhWAFFcj9gkZQ36M4msxakx6oXD6XKKuQWxHW7AtfUEA7pYN29",
  "key19": "3VghpT5rCxJ2EAXgtJpgBXFYVL3CEeh4bz9nbJzscqfnCSQoRurvZ5ptKHofSy9A2D23pAzExc3DwtdLv6Yc2B1z",
  "key20": "2oo5nVLqRB8bzG3JgpEu6xi3c42pmuPDs4rhP5yzwFoLCjQA6rhBjJ56n63V7X2BRNzAT86YY3nrVogVJRuPf5Mb",
  "key21": "LhHW7JZuU9VzP6PUKCUUS7UujRPVkhpkjzMXGrCWPshTmmdLDJC5aDqcwctypQYY6ZhkQPfWdpQogi5RrFGow5x",
  "key22": "4vwNBiSGQKNAhmzTDEmReKcReHNkCbEMuvk7v1LewPnLgKCaAifvaFmAeAAutbDqTRDrkmeizBTEjT35gfsFd4pS",
  "key23": "46xBVFGGSuyEPUGNVqYX5W4eeUm239DrkiCD22ZNFussMbZcnd3MYbDHLzy1KqLBwYxiHmsmu7vNoUnMFif52Rwm",
  "key24": "2k3Az36o482ccUXoaddRVmhqbCJgtB5ZArDitfsk9fisu33NRPmFPNa8PS86nPiv7v8V6v6uyfZzb7fAkU3tG1q9"
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
