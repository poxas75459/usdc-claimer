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
    "2EARcHF4nHFfpsHwwHCb56H8bJvRAKf3nLgWb88SVCWEapev4FYNrXNWewscVsJPwLgUM4dKSdZJkfcUMXM6ucBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQ3VLXM7RyT3GHzdY9bNL6vzxzyQygadBwxow4Yu7yzVkCySFUjxh3upMTtuZfpPTso5mu9RtTdgQwnW79LjNcy",
  "key1": "2P5dyqD5Xw3TCeW2pWMgEoUjfjCoq4xAVmnNAffykFk9y1cXkSnZUgDBmJ6t46Q6JypuxVoNZvGWS1prMYwnujYg",
  "key2": "V3BEWdkGqqMogwjtbz9TAjcPCig5bFBNWedLjFPK2o5gX6y7Ba7gkj1u3WfC7hE9AzczEBn3gxAv144xrzfMFhU",
  "key3": "TeHnMbhBiiJALhappnxE96yeCygA5rkqzK4hVWyRjuQ9vRxS4t5dHKbWj3orydMe1GXgwcgWdg4QVCk3W14nCSu",
  "key4": "2oZhibkMJ7An8R8BJUjsXh9DVwgnQugW2PtWJcfpxCusLaXaJMqDhFdTH9fA54jLWAJwZyJbqh6Fv1gpi13wn1wE",
  "key5": "2E2McEqe6MdwCn29xxqBeGoKdYuuwnznARNRrupXt4e84T67uScqhcFSWN9Bzc89gVPs42vh3NSLxLF9SNFTMiNX",
  "key6": "41uE6JZoRc3tBdX12gv7XdF1mQnBLHFPXNWK8rVi1GgnUWS6hHEtKG4dwpECEdgntEDTju54mE3o7PRu6T2Zuj3f",
  "key7": "K3L5FmH5MFz64PEnJ9NHk46AQqA6DojFfXCdAA4NLpH7QvJP3sovNc1F4ydXEg7dDeP1Nj9tmfkBBAzH4Hxme7u",
  "key8": "9Gq9A7QNpHcj7eS8SQ44HoNjKW6Pgcg7ntYez9EEzKrwPFH5aoT9MTPdEHY1E7D6KarWrbytHvNBjNiy9ZasrEa",
  "key9": "3vQnDnWWF7HP4Cp1jr9GCA9zSPtxnUtuhj563sASYacbgoHQ1kSPuVd2T4Ya5UuwKMeoFXnXrJoaFw2mSDNddckv",
  "key10": "3NzdoSu9Lxw8XtYFrDLUjJv4r1J2Fwfz4bUCr8C1BucENhvXX4cgCXUQBQGFsGQN3MGLUD9RPJmdnBLXNNC7KiGs",
  "key11": "4qBTLNVrBuZ24hgCztsvqatb6bpxjc72ZDwD9Emih9Merc2GHNGgshM9yPfVZ8wjtamTG3f1binthv22K5ksag58",
  "key12": "2tvJD4bac5L8DFE32mFhUzJpjWU1QtfysWn5hhEDm2vmVsJ8GeYPgSJAGVL5qc9sRoYMaSVk7Dajj9QS4FNCxAZb",
  "key13": "HuL3GNf9RZSWPHb3grzFcx26WAcCjNwoUqiAxRyGV9x5ST4BZcL1yBuZMubjBgLd9hfEucBaiSZmRQ1BNyjR8Fc",
  "key14": "JWXPtjgYd5kcmCfEpMJX6QUSKwS6asvgikJBWvVjVbt8hiwpW2x6kENV3KgmBcguFtpGW9ZSwRnkmWTfkEKgceT",
  "key15": "4wyJ3hqkstjWSFvGS7K3yxGZst5qSc2bM7Sap3ACg5UjbrF79GdCSeiVZ7xxMixXKJY6kYmaW4qZgxo5ssPMoGk8",
  "key16": "2ticFDhy8SBUXjAiYhBwAQQQw94xudNLBfKySTY6nhY1cCJTFr4Y2NjrqVr4nbpPH1SWwgg4753sDL5GsEP5vNoB",
  "key17": "4GHxBe5bAtF2864qNgtUG9kVkjEg9NEimJYPhDZXotWy7PnZFpAyKwE6pzbj5NW3RBKHs14jmYSENxovMsari5MX",
  "key18": "4w8cbcgcXTceSQ6SrSoxHH2wnAnX6wRxyPvSNqwJgWAUU7LfMNkkXqeD8kH6GFjdTaRyv7Sdcw7Q433d6arqPowB",
  "key19": "9BsSxg7oLuQyebFNAv8tE3qBYdEciZSkvKyVVMtbeiXTdVJZjMRoVnzXhjmWsFWuXobRHakACNviExCABUCDdS3",
  "key20": "4nRGwn6SvCtf6gYdMGm9snfvVviDuidVKQe1Q51zhyLdvsiDeZxmskHLUpQpucWFxsmFfsdCH2GfVZ5XueDdzPyB",
  "key21": "5fyP9Uy2gghPsQhR9VavgLGSGuPLcFCT3bu5JFfeQ9Suiddjnqf1W7GasAEcWdSRxvBYpgR67Tyy4GGkG6wGna5P",
  "key22": "2XrD7Pc1fzYwR8Wr4iyvdxeVivwfeFNghHg5y3k6G5p4tydDauzYf3t26VRXokXzoHMb5xxPu8MZhBh2RgWCguq9",
  "key23": "4PeC7Y6VBU2Gts27zXTGDiBGzC4ASPvj23fSVFtgqq7qimxs11WKyPJXjDPSGSEYhvNVhNGNdmvBfhoDBikuaxJ5",
  "key24": "2UKNjrvxxuArcynx9AzQ8tdfpAUdurzgZLNrpW1adHsvHxv5VMUPrBz5MYc1WQWtEserKhdWq9wySh4pJe1DYZRQ",
  "key25": "3YLNjR7MDBzCBEGqA5yvtKrYzE2RQoyNwoZLtC9MyzGZPc2Ax1x4NYxiZNcdnnLCuqSXkcapjQtTVkiEirhgQzKm",
  "key26": "4g5FUj9vKK5W7a2xNRxaWHPycaXcDZcebpK585Es3EkC8W3y6kRm7GE1f8ddX2Tdz7TzdriyAxmSLpmqiikiB6mJ",
  "key27": "4eJ6HXCoB83L7VZVxuqYpjg219JLuU45C5icMt7fcZezzJqJ69fAWtdxkdJNy2zG4mos4PFsqtf1B4UvGNeCdn4z",
  "key28": "2ZC4bxTYE9aHYFsWFftfDqhxgDCcXyRJ8bbAfUZjQPRgtPS9kRguM8Arg5STwA2KxhcoPyn2Nim3qpw4E8BuCqA1",
  "key29": "sP4mcJATxz8Ywr1fEhykXSLxxj8eVNqW1miGUqx7Nhdzfu6YjaSXPCxNHEcYkhsnZv1h46MwyANkVr25c3gPAkh",
  "key30": "53cpE35t2kqDLrdFnRzbX6yHfR9TjZEK9d5JZSM8uS4oGSLdj6o6fMTBtgK6mAbCa2awqvDwXu8UGYAXbzUFGZmC"
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
