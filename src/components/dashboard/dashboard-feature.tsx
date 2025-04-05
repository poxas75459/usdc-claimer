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
    "aRiWDBpn3iZp6sAtBtmamsLr3FdqyW6AghdR8niEM355JWMnNm4crEufvo5U23Uf6sK5eViPaRn3a1377FZibiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5MxgYMDMzcceRboJStasM3vFCHPGEnpjkeVS27SsFkfiMwre3niwXqFoZHjYMq8y16cNjWm8emQMRgfuVk1sZo",
  "key1": "42r6jBAQRGoZ4owGqy55rPisJjstYYR2kB16tUAXo3JYhcMV1QtsKrL2htQthbhCJ85rZjpk8WNA4ziiR4sFHNc9",
  "key2": "qk1ocuZn46wEDVTvNWrDWa2a2sqECytJpg4njtcDXvgMuaYCb3D742tBkdCBKcEHVgYpjhXLg5MEuHNcM3fDhic",
  "key3": "3828x8ooSSS9ec4sZBtpsai9T2bzNqfL4zk7dXomiDNXeTmcAyYz5fLCF8wfqs8qGu9M2F49fCr15JV5BFou7k9u",
  "key4": "4oyjazRGEJ71bKjNfJ3RZ3MaSFFgULGoxoj9Z91VUBYNKLxFrrF8F253rdJppQsCcJbHuhs1YHEuybnypqZLvjgQ",
  "key5": "4KeJFAVkUqdaWaFe9cMMT2BmyvwuXY1PJqFyYzTvGTtadMsg9Fh1ktyg6jwP5BpaptYb8gjQxU474drwhfFAjoF2",
  "key6": "4sz3LBr9juzT8RjfbHZdkw1UqaNRJA4MrCQLJRL8zKYUn6wxiUQHPyvioM7uaqwpdcsmQhbwTrBQHv2tCpraop4L",
  "key7": "5VjexZQVzViKBjsLzMS8BmQNeLwYMgiMRNtU2pH272q9E8k97zwvXTvCUwNDKChtuoiBrJgMGk1fsMQ926wPQkFN",
  "key8": "3QzkUu6YjySeVq6zJZZ8SUvj2duRhLYyhbcmVtw9nJVuyMGm8qmymYWj9YNJGUesciH8fkVcF6kin7u5G27ELETc",
  "key9": "5qJYa61X7o42jKRJ9G2onaGzxb5aboQERt6b7HBDxt2dhnprrWfx6rSYhTZuvVL24kXeW76ks6ZFZsW7esfxR2ca",
  "key10": "28FU1uNeBU1k82dkF51VQKJ7CqY6Mpx8ycXNiQ3hX5VUL2t7MsxeDqXDoo3jMdwxc6KvNRALuEoDowBLVk6gZWkK",
  "key11": "2sZFHzb9WndjssrUrDMPo1CjuCKzoCAEC71bHb9EJ2LTqSBKsogyDk8o9Q5jqBQErcyYnsqtYwD1D12BgpPio5rR",
  "key12": "2f27UJoT3WuV8Q8R1ax1FH3frt1sM9cjHaRrBrNVsFhYcsC2vDHxdBLa1i9srw4kuZKRDW9GXE4EhdnLq4CeWhbC",
  "key13": "qNPRVacwCziRyEe89JrEMJcXhHHAA4J3HjxgRah5Fc15mzdxjrq2LF8gKi6iYRobwJZGwgKbUWwy29U33Fw32aE",
  "key14": "2quPyQFvsZdPMN5tRiMWps3CiYBm7zfjrFFpLPgTTiY6n7vP1VLuSHaNs6f9n5rGXouXxugyKWEp62uq7ym9VPQU",
  "key15": "4WF9mcLfnnPRV3p3izLFn4ZGqz11WPYjN2xdvNpjHv4TK6yFodM75EsSSuimFBuD9J5df1pi8W3HzYWXRKbd8bwF",
  "key16": "cMtiNSQwXqQCyJLip7aVoLDoKq73yRUdyzQ6MDU2fE6Pbrt85HK6BqZsJbvYMcZRJZwtLTY84XKoe4JTqPYxtG8",
  "key17": "434GEGBXQJFtfTGAU4rT4z7pgA2dDRspPAbYva7H9eYUfVZhQTFqottGv97RKsB5mKCHaWSocmSBZ9TBwEKSJkxk",
  "key18": "3FriTBjGLcyiVE6yifn8oix67iPmofNxqRHp2sBA3FoYBWLqfiSYiZzcPDQxzvHa2jvwwDmuLSJWvi4j9PjoFBPG",
  "key19": "M4Ly8gT9W2UvkvS4foWuzzuYaNDhie8oDETsd5ibtcCP86wyU1MFYiKKJDEf2BALHfjmoXXvPhdsjZTYpm4Mej6",
  "key20": "MxtXCcAHM7Em6fFq5PcAQzJUuNURnY4jTuJ5reqsWyLKpPK5PTyCpn9B8qBLxzrqQz3bKipfe24W6ERciHpDteK",
  "key21": "2ktq1DFN8Xq2rS93eWmKHCqZgWZmzJry7RN95KidEWJJEq7fhabFv1YebfSvZWZyqU4dJSyMgUx31pd2BYc8pLs4",
  "key22": "4wjNTGmPpGnBKRwKrNFgoBNByfJ7i1QVDvY5mzYW6bi4BPHYaax6miEz1MpJNajgy15Fp21z7v98AHhD7EuvMWWQ",
  "key23": "3hzXgcL3EDNahSUioJqVPdMEuRuP1aHo8ShrnMjYo1zKdqDFBomP5kSz2wxWmNcDjFvrzq5hzoR5Vo1UP83cvN5i",
  "key24": "4N8oRj9surGo8wZ4fAvEdBrBKQR6SLvHkfQyHixnWZ78EHo8LerpdVHKouELHkF8EGWMSgeHrXm9QMoxGprL8T4b",
  "key25": "3SmYAjFYsNyW9Fdx9r4mBuK115HwqrSaBSNLd5waePrNJvk18SoAWvukciZLHCSkLSjYJmYW22ASPs6WM8vUeREE",
  "key26": "4uEeWshne31Zf6eKZLEMoPja2k82dFEfg7AToaZhn7spSGQqFdXqTCkUjhQiPyBFPwkU23VkistVAX6U3u8Wo3My",
  "key27": "4i6ZZ5vQ2pnKB7iZtWkaptcmXK5uk6rL5raJrAD1LnwSnCAQA21u2q8HS8CMD4BZT3biXshE1uTDYLHzhAB6exiq",
  "key28": "3fTNULyoD4DuQKNKQkCvQRZJXrEyd2tZJZSv2wYUJPWF8fhaTUFkD9jGZM3bes9rbsHXLvLazNRXk23U18aNTooE",
  "key29": "gsTiQVRiky29o5SBZD8bP6J9VStUVa26oiinaev29mU6EMdNSDgfP83RgDuDTEpFX4ZyrBvaTcMfqg1iZ5ZqGon",
  "key30": "2LoHxDBUaUQqJVtQgBvmiQS83y5Fv1DX4hMxVCJL2S8BhXhjiKwoehDMt8xeFPaRDrMsvuqKaPcsVEHKMFyhUUqZ",
  "key31": "oYvftDoUFj11Uf6G43pkAnuX6zKvfrBmpjnpMwuys73prDfdMJdAKLRgnDnZExTCkD3mdkHGhn1dr3cppb5uVmr",
  "key32": "2KkFMXTh5y2qZKufdgmvNLEYZN4wWhngXMqrEhwKVjW1ZpUExZ9Yjpwropo8z4o2RBhVDQ9rkoGDT44iZr4LZqT",
  "key33": "3amkNw1bz6JiimMLcGTfCJwwjWTgxxTB4HZ3mmbpd74YQ9zYsRvQNhEk9wWpVj7bX6VgYjeiTX246FCFjNQPNQAg",
  "key34": "4fsRkNXU5M1jvJYyUTCd8NoF5mwgDZmgqLmpP1fA4oARXWt4x85RLhiYeeYeVceLSqUTGnFcKoZGyaxzr4frhmFv"
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
