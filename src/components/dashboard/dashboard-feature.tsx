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
    "5cvP9uCzdkp9MwEXA4jMtFaoEmKtiEjBUs3fjXvDvwnUKzT3K9S7nSK1JtALK4Uh36e6v5n9dRB9jaf5sqfkdVar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZoWcM5EJMehvs31PRziWWAm59Hxi5rKK2wNYwotS9fdTYFpNXyCohaa2npsTLrEHNHo9zd6sU9qajp3dT5pwezn",
  "key1": "2j4g1AuvqhY6tSrzbtUggMS1AUa4iQotD4uegaHaqm4Gj8DuqhUxA6f8PL6rKgMgW8DfxcGBA5xPhqmNdxHWxdJa",
  "key2": "ohC6hp4D3UdxqAxTDtyYtnqn9xXagWDY9RBD9pDyq85zwL6ysLm8KwkG66gEuT5d5MLvvqRTH7s7XzFB4iiktq4",
  "key3": "3rcHLtYcjG8BGCSeXcySyaeEP3yr7SF1u5HJvtMss3bLViJiCKjJLyCfwLZkM2Mbr3jCB8P1UgiHGAihUUuXmUa7",
  "key4": "2CyaW4u5M1mvsJShcNJUFFBYuGGU2ubEQRxmLbHcwnCwAuYp2NKxkPDm7MRH4XtM2cU6CdaFs5jaFDh86yydC1K1",
  "key5": "2qGuCdXyV2eiMyK5CS9eDLnXy2vsKqvsGK3Yd3FaBHnrUihHrsJzcty3ZXhTNSitvzJPjbZ4Fi14mNBxpunoLQdz",
  "key6": "3L3XTNCpHMreFuTDxkeh5NSt1d6fgqoUGjbT1FEsemVBDm1Dg2ya3SLtFcezTD2NPh17FfbBVX8Wpk1hDe9PhoPB",
  "key7": "4Cb7rMzS67VQuxNVPvUsbtcuTKMSnsfmXnTNViEf5ZNfdg4P63BqCPWR4PnczsTTbGB9QwoNtfDD55DtcnZWLcVh",
  "key8": "4P3GcViuz9ooBqTRzSLbKtGiFGxXDAC9DMr87hvJ9LA3bJkPqyiVzqHg2DciFTVaUMb1dWMGvXZJVuFQrc6e3EA6",
  "key9": "6RbwoSGddFeoUh41YxFJAWMGkxCumn5He4doroi4VR3U9QPG4UCWa3khjLLFDMfpcMJY9xV6vZGGMerMgZiScyy",
  "key10": "2FXPGTaVbWkCN7tAq8hvch94aMJyMficAUiiuy5g3SyAdec2wns5ztCfNqnL5pjjREYmE5J3WJ6PmfjbtnE3PVSB",
  "key11": "4risaVf6NVFxvzFBwZVyVREYVwHt3QpkXKtKeziVRHt7mKY9z4P9L4fEwaGimdNAt1ESxzz6f18kEkdX9aV5QwkJ",
  "key12": "DNjVevmag7temnJMiaRjFutQ5UEcMMaJiYQPYV5Y9SAxJTc7iJdWhZZbHkGeYwKDrB8rekAY8izPLKoLdLzKmtM",
  "key13": "2xwuVX4jEUVZM9yHiBfHpYEA19KoBzLKKFAo6vcvjtVYEcx8yvreGXDzS1FB8cV3qRSZzXuyr2DVnGxcApQ2BheP",
  "key14": "6xHrKrvetfk5nVEcGuHdHKWWwaXUY5HV5gSHzHATf2TmCzt2qhPWFb5U26zhFdPVS9MJraCBh9usX2W4tNiofN6",
  "key15": "35gUTrpV6mpVu4FSsyDzSZLiUXaQX52rDyJv6wM211ZBjWWqUjBaBcypLick2HKmvK42QCM8Naa46J9DaoFjgJi2",
  "key16": "4wkqgQxqREVU4gVegNqaUNjRDobVSWYApNrkHdGRAop2pJLonEpTNocdv3J2DfKkWMshqZ8rFbQ9PvDM4whZir8b",
  "key17": "2a9TKXFokMKKtW7BHVNU6Zg5vwyiJaCA72ktbtAP9nhVxfFjPbB47u1YSB2vN1v68T6jVxJWriKe9JbaAbgz2ot1",
  "key18": "5ohgCwfF8ajo9ka5KTzEv8wyhyMcBZWwdg7UYiL2HaLrHCMuWyiXetMJYRYAnAbGCy9udJvppmbko4kCkUr3LrAn",
  "key19": "gFPoudyWuq2DA2HjVMned4KHPYZpNfj73my6m78pN7zDZb1RzTwRBnMy8PcgQu8bPH9z8cM8HWFY3cu1jiPMn4e",
  "key20": "4Ja17q9bTvp4nHthgzR4JMNZS5tip4rFcm4HaREw4b2QFDar47kcNuMe9WorjeS2AuDHGHWCMiKe5qfQEr7pqYyc",
  "key21": "48fJmp5Hz3Kej9dfPtBCsfVpGvcUz6vAxWkgqiRW1U2gXD71h8JTRZ4HQSafwnChggcAHDPQ4Lmfjw2Nm1KgUv6t",
  "key22": "3EgiMJVLwXw2N6zJN3CcKErfdUgErKwN48KrJyM9jt3aVbHtTB8dRGPb5mSY3fMcZhA4TvvrDU5ePt6N8hCGGxe2",
  "key23": "5XVpYKmXBGQyWHJrNopQVM7utCS5d1JE5ie2kM91duSZLRnrsgkTFoAZsVnffLSLuonexfzhLCLU92gX2T6H5ocR",
  "key24": "5AL86Vmh1wyb8qWSzs8L7eohxnJKZWaa2zYLFGorihzMu6XMJaoP8REp8G2bh6H9c8QVHzhsfYhtSXd4yaJeyNfw"
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
