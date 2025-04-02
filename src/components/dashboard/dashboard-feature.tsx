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
    "2NLXWMo6V3KHepfXDnQ4D8E5aNV8TJoCp2JkfQEdoMDpQg7go57RTLDx8CQH598BUyNmZydiJt9esVPX7QoT19Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mjGK9pBatb1zqRwLdQ27Uf8dR9LQFze4LmtJv1rdY3vaXkT8UhpdqXzyoHnP8EoVRiK3xmVcmQuNBjTXbdJ3FA",
  "key1": "4N1VRhySu5QaUoGEwdugVpRhSBagDQ7TwPS9siximbFWakrzLmbUhTXNL84LFxTuhpuobN4EH5zmwpfKuXyXmFjA",
  "key2": "eo5pjxL8FyccMXUDEZrctmdycuszToeFNntRZY4q2zkXtoENr9cGfpxqEkHM9EiX3Uj6kq3AwgpkbVH6NCZrheP",
  "key3": "5RJNaBHP8nMHVZzge2xhbhPN8BzNpb9s35X2fi3Knis7sryknb9rc5soP6pN35t49A1cxAaUZtVq2tFhHeNdazCZ",
  "key4": "5JMc9c2mTxc1WUPPDHrXoeHSW2UxW6ihSS7CQ73UL4KPJUWTMdix3wR4rdhGbQEXMQZU7ycd8CmN7MBF7g8fNBs7",
  "key5": "5JgEKCkvgV2uMhrqKxzcw45KANenmCh2vc3LC41997a1NP4ePW5MX48KSEEL9kMatsTabGtcMn6noaRzCUm2Cvdd",
  "key6": "j3ydLVDT2euWTxgfwJ8gaYrg9gy2B2TPhFYH9ENJPWsuSsJ4eUp9hu5oFXdMjNth2nZMGs4c7EEf4Khvus391nA",
  "key7": "4xrELpzs1BGxMmUzue5ofchgrSGCgWFxZfz2T78YAkwpx7ay6ZtFNY5Qk2KXNz6NaAsAVi6B9u2jujDiqJTzYW1M",
  "key8": "3PKKsTDFWpi7TAfnHYrMaXzV2gjEpHZ6H4mzDp91wo3rjVo5VdVk2hEAZoF1bC91fGwjjTC91UnAsz3k18tGV6ig",
  "key9": "5BL3LFu3fHdHoBTyUmW1VggA95NKKKbZKn9EFTPftMdjzBW23NJWnNE3KdP5WheA8pHUyZ2khmxQqbWYL2yEYv6Z",
  "key10": "4cTWRsGiCTrVRvc4zb8mBARcUxZLJfGp3BSDCsR8yQReMP4i58EScMXp2YfPU3GbaX84ov6mX3qhXAqbdw6gHG1z",
  "key11": "3s7ePiCkfn4JK7b6bYaC6m1HRs2W1357uQbeLBQ338poqv3F31y2RkiXpwZL5FMN94DNz31rVa9igR7AU8X3ahTX",
  "key12": "5wdL68zF1CZB3UnRpnJ4vKw9XbwPqzU12TmwXBaqgeSBfUaA5aKU2inahEjsc4BhW3U9hCxNJJSTvsAsVaomP5c7",
  "key13": "4Vr6oKHRuJC2hu393khnZSL9KzUHWoRBnrzyZix2UPeKD3TULSxKZFspTmfTMAK4UjUCJx2FwmkdT9S1tZ1trQzn",
  "key14": "4B2zzwnGCAwap11kyx9NKkCAJvK4V82XkVcJybG8qYgBJCyE5RqtNhtobbd748VrptioLWE1HR6xr4QpFWvkkJ9D",
  "key15": "52ac3cEnRj9iUMHKxyWCyR8egnLD1mPEPXux8dAurTs6hE4LCcbNTBVwf1cZjiPaAkw2nqDzHYivVja6Z7keSCJV",
  "key16": "6tEifv5LadpotzQgcyrYsyrCpErtkstei3tRemF4KBFEu3oq9HAeEiB6oXhyVkryWmni59HyVBK3NS44xPEaYb9",
  "key17": "4tcGR21FoAWGmhaVWimkahyytphGGhW3aKoTjezWetimTZphciM3LLj3H1WckYzyNLCwoJSGHpa37GmRenTVWRgS",
  "key18": "59fL5rCboFqRe7gC8yN2fabxZf2wanvSrv8YA2Qu1SvhAvQQxMyYazUhHiAS37UYfRBC68VUWewS3AqfUJA54ss8",
  "key19": "38Nfusf9d4cVt4dUimixVmejUXmYbmUqKSsN2CPcDXje9LbMTm8dFxL9g6arXjGCdcdUt7TzEZY53AX8yVYZn45J",
  "key20": "41tLNccUqcVPjURQiD3noGPmCEhXALGKQ9TmEJv2X4KkgjvZvzVveHtQ8JDnXA2PtnshQG2y3j9vXqYLUiUT9ZTc",
  "key21": "3X9LdBVULFEKPQH78dk7uR1T4ezfjxL4UE3GrNFGrXnofYdQRS84jcWq47hJhmV7KCo29Zco85aHTAFZcVuMCwnM",
  "key22": "47dmoKtth4sxEw7KCc4Z4YLvCkdgmQ9NkdMunP68SqEKb4sbYEgdTcKzh4gmjVnobjtn1jBpKruJJ44topbh96kU",
  "key23": "5b8WoSdiosHXK9TJCrVrvEH3fH6BJ5Hjz8A4kvqG5m5z236BqPoCW7YwfeKZhhrivXkxpbzwJHnU76j6V6T4Nade",
  "key24": "FejQyFNjzxLeB1BgSZJ7D8sWr74fGnXvNaYSvPGU8bzCmYDVTyenuNBqjfeXJ6mEyRG81UFfDNABVEX7w4t19bY"
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
