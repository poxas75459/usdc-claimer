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
    "3qZNShjagDVLHf8Vgq2QKeJqGkq5RyCHsr8MZPPDL6FzEQwBo1tNdwRaw9eDGDykRbyRRHGhZymKEwtFYGyYPhB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdU9F7tFY5iKyt789TM4ZUbagfAniqBmLR9NAbcxdthRQR2u2s8y89gUnxURTG4S557m4MoJ13dRYPwowdieCRd",
  "key1": "58QiwHRFB8SGUgURdyDAUSPNPqHCFn5yKSXCmDxWLEfHEiZBpsroVoLHWLhUthwihaQsD7kYrcMyf7sEiwiEbnY8",
  "key2": "5iqGXX3e6D2K1sFHfUtoW4gq2JoG1QHA4QrFoAdsQphHjgANTvtSJjYMciziaJvZmXP8KaeNfWKrJ6x3vz9J8KA3",
  "key3": "ESNAheyGi8jxXbfSpzsKuD9dy6VR3K5pzVoP9RqJQ7DMHd4vUTdAZRJW5HTxs1BJj4cVMqUmBt4iM9Yhu49zgGc",
  "key4": "3ZqEnSLxZYMmdyajx5iSGdDWFHM6a5TeFCJ4TmD2ux1XRA2kENineDcAyS3LhkxgfZTtmGczihneRKRbVY26uid4",
  "key5": "4VZw8G4q1xZB53F4N24oAGdtg14e1PVzwB5zY2TVPAVyF3Dz74zgTjmBabt2z9RZB2BLvEBuFdtz1XZ2Csdd9qRe",
  "key6": "5BrgiuW7M1qjf5kSEYsEfn1KBZxG4m4LmR2j47AVh7Adwu4mpLNBf33kdqVXUgsxcUJ7BXcQLY1paWNtJcvv6NUH",
  "key7": "2nzSzqiG4SXnaQoP3WZfAQ6xgKMuPBDFnjSkq3XKn9Kkt1VhrQoUtxDLeftt6Gk29H8r8YMYpSwJqtFjgF5LPi4A",
  "key8": "3zXQYAR3Ykxg7yQ3m94fjUuqsGAi3akugkqzL11Ga3Xz3YfCMK5FKbHqqMYkcEzfVb9QGbdXQb6t4Gpf7ZJxKwwb",
  "key9": "39nebmax8XvfrdxbidLtkJsVvhRhyJ4bSYrNXFRYAXeckXpHi2VJ8NDLLjaFnU2U7sCHHsTAxtEFnhkNgbxbJW1e",
  "key10": "t1dYTru1Ub2RBs4n8Y3EnBu4PRJ7MPbC1tiUu6E6k5HYC17qz2NvnGS9qQMyTbvgdJJqNNv562NYojGXe5nvzMD",
  "key11": "b1KWZv9SGU2xtAcgjnd8h2HQKxKJHVvYMDpEBCdV1cpP5frV7jNDPQaEYdYpq8inVxaiEdHqo6NEhj4k5R64zze",
  "key12": "3mTQZUwr8x95V6vWMB47GCGAqfwH4iqK5WpA8Pa8DbMuHpA2Pb59Xkj1akD2xVe5fxkWjCJXm16YXs1gBR4AVyp1",
  "key13": "3SXe43X37oPoyV7PrGUs1dx7z9ctB9FduF26wbgNZbpfpCZpufhSHRXmeAq7ashbbtE9iXFhS4fZW7ic99Zab33B",
  "key14": "2aeEK4RafKGHkgxptJ5FuWmoi8Rg4WEtregfhTxeqhYLcXzH9FoDqtHP1F78SorVJJqs7RGdxuUngrTMcuh3GcNN",
  "key15": "3Ahjbt7xxQb6JnCwrSc8jRoDonoQGVj6duYC1ZjvKAHqTkyttk7A86Uk6UCn6j1KwKVbdshRyr7ipohzA6B8SC8G",
  "key16": "3NH6hD4HCDWpBs42tEAskjpywzWAzWx39twehc7DN9WL1NFpiQr1aNcsd1c9G6qSqNn3fQ374m2epR1sq5RXM9fG",
  "key17": "Z3CJjDamKEv6MMNemYx5SrSZ69YtSNMXW6VgfrVXxStHxohyFNTLUbH6Y3koj6HKVFAHU6ewT2eqLkie27Zpo1f",
  "key18": "4yqUDZKRa5418h298jwYDPQC2WmCdfpWzND6Pz38bnpY2V7MYBmJzjFtG4AsPcJyZYUivD4ToiroAAVLZZpf8KcS",
  "key19": "2aGLrRNVaNV5m3P29zCpb3dQNGnETFiP4WKiteMrGEGPbEV8hjv5sHMuDWUstjDGK8jai4nZtZXgZbMxymBHc92z",
  "key20": "CVvYNhT8eindBHqf2cuCb7PnXcTmXKEUQHmz6EapwN8u4W8ANSdcfHAJRfvcNJeLMkTjDReNfowSwWtyndSSSvB",
  "key21": "kh3MENzFp8dLybEdyFFDcsVY7X9FzSxRsmZfqkzSGijQSv4LzsozpLGdtWzKXhXhD7ZmJz3jgDn39QYoxuHZehf",
  "key22": "4JJu1QVSG3F5SFTHraMb7msVv34wHb1bmzQkQLr8yzaqd5HvXyn98YcdMEt1E9rfuBZBcBDhsq2YEi8Dqvb89TNf",
  "key23": "4wjUMojWrRqQLZLngdsdH6FX7XEw8jozU6hRkk8YamcMEtqxfK36bRuCPPZ2XLoZnsKekny18Bw5547wfpRj8Cpf",
  "key24": "393EyzVoiM4uwmF5oddFrba59BBYTgwmBaT8TqFzRcvRKd9H6fcTd4tJE3qLF8dWZKLrU7bEswxRVoKpHai8w9Q8",
  "key25": "4K37GnSGSP4EYEvdgH3XNS5RkyawcF2PbLqhXQngbqJrV3ufxE8kuG9Xz26Y9kFsbihrM7vbVNcv4MsdA9HwEaEz",
  "key26": "52ZkxeRnLKXX6im4eriReSeWAvcDEZ4Xcx3wfKHwLh9mUk4nn8uieQxcgbfEyHDcJxQFyUNJQurs27J6W953FK6e",
  "key27": "1NDqRQPwxnzTkFDs5y7De28DtL6Dk8AKT3zDbaX1sui7FW2nNUYpRMw7UNNc6H4F5otagDtWAQwHnhtg9V345D5"
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
