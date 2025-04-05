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
    "4H6irrzbY4AQpWyxYQM6FSUM4JB4RzXp5UZSswuAW2948Yx1ejLAmVCh4Eya1zu6T5VEQb8XkbHLbwDmKbP5o1qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KhcyvCnymBs5SSaCj8dE9Qdy9tjVhKXBmqkpZJJYS3tx1YnRmQh7D6r7zR3LvA16Dm6gRUkobfNeeAdhxeh3jQt",
  "key1": "7UzYCbTS1JJLGWCCmMejJ5Ucr9rAi3QMotKoUyvW6Npgtx78ae8dwYGBTGyKZq82CsdaGpCM9zwPKaH6nqe8Uv3",
  "key2": "3nTYCwjbysbZRMjvukH5djvhxUiV1W4XTq8AFUos5qTf7ambQZEuz925wJchcBGXYDX76bnKs2ZSt2aFvP1tf1vh",
  "key3": "5Lk5MFjHDmGHVRZ5bQF9gAFXBX1Ebk33VddLy9B9FYmwu89Z2wTnek1CstCgPxgmhXVR4wUiLcCAGXxbPBXiVnCb",
  "key4": "2TnzzEDR35qqGigXfCPRoPzAToG9MbnMrThjdSZeF8Yde4jjBuoWG9eQtYSuvXsXGSbuyaiqzSivBXTJr4ufkQft",
  "key5": "56xQPeWWPGAfp5xjVSkCpC7mA7GyWHmKWbe8uzt9H5SkhAvJcGLQmVdefF7RYYbCSxsLUqAzZwpkGDEvkgRHomZN",
  "key6": "3SeNnnkwq35DDesW6n7xsJGKnmrMDzHvdzPQYhzHTa37QxNpnnBiNHuFuvVK8ZDFNTnzRPN4fmruCQfNrpgGcdcm",
  "key7": "5NGi2TiqgzbUYWuQuup7Nv5s8sUVjukE3iiyoqduFAaj34HHFz6xswwWkpxzdAgZMV37tcpAtdLrisYH18yBSgpd",
  "key8": "3MYj6NJ1aW4Hs6Z3B2DmiXqupKDoem2kFJov2fY9vWos9fqTZsEj9QovU174Nb7yFfxCzj4xvPADMRQyszVdymxu",
  "key9": "5dUndioh4iGpRANvqDu7Z6yN1cKTewphVc2t5YsQcbUx1EFv59N5bowmToBqAx2z6SQMt8wSWWuYiV7LFYtr5CUk",
  "key10": "47y71gcaWaxb6dhRwXJ5aGFQZhtDa1qFpLh6m2KVAKCxHQ943kwrgDromVrczPquQ8oD5ZE8AQaDtFqzLCD4JZer",
  "key11": "5B8LHpprSftfjRJG4doe61TG6XWhoLGe8nEpt9M8TaJzwvTGg1x1ChABp4ztEYzFnWT9sBDW4rpGd2JWTM2NESB6",
  "key12": "4eC2y8seXeS7D1guyphoNYniVHe1ULqmXKmc3WiGQz444BGV2zWRZLAtWu35zwLNiKUEHF5UJ6buqMCWKsxgndsG",
  "key13": "3BDcBuYhKKqNd65zmjnHKFTvQAJ9w4Lme3kSJLgEnHfCBSqL2SganVECCx7AoAZESQaX56PWv6iSnRy8STupc6Vw",
  "key14": "5Lw2mHzL68f7TWTKUeJw3fK5EJBfAUMx9wc2y76eYK9auEtpPKJ1xzABpTvqA2gneBG1vL6fFeRMvQAVmmr4mcwj",
  "key15": "2tNkdhhgMdW1bn7jXAnUH7ePffYwhFfvY5faN5hV5DFDfe6PizHppP7MDMX1mU5VWLv11rhuWY7JkH3tUWWfaZie",
  "key16": "29pL3eb883wZpD5EvXcuKXHcRAqJvfEYcrQnvNyYrobvAtarK7L6UTZ3NgbMPpgH4Y5z55RwVWfHBVCUQdUfDvnB",
  "key17": "4fTB2d6Ubepvn5kUpqMsw4EHHnmZhZwwYPxmCmPaue5HmGbs4HVkqLyRMxESeHKLrf9zW93wde2tDCEMCGno5UsB",
  "key18": "5bpSJZ6jJVTkSK5SfxUXSyMmr8Yhowy9FH7Zwr3yRpLuCGHiqonpLLRpRqk83NWkA2GWhhwBZbcLesBjKntBCGPP",
  "key19": "4weukahhANAdEGFVxCa9oJqbqjGYVMVW87bH57WTYqMt5nCM879b4Ftq7ZvRMQQrPMZea8EKukJf98s5Wqp9Lnhs",
  "key20": "Sq9dv2kXVHcbze6Ehr7nxBj52hfsk3DXC6FFruYyqfhdy497o1rzdBocUtLcgFiyw41UG3tove8kg4FAvNRjzGn",
  "key21": "5Hfg1d4m4N1HYT2FZAtBQ41qv6ZA7DW2SoQEtPoAcpEAwpg3xMSgaXnE8gTV7sSiMvDwF564kuHx6bJ1SYwq8UiX",
  "key22": "3kfe1oooXHMnXs62Rt3ZBhsxx6pwCHdAEE4a2WLaDpFBf31wJh7pcqD1wHN5xbHq2FcoGRX448pcNJZwvztT6HY5",
  "key23": "3SrZc2MZu7NWGyPKHw7qMDkrdm4R2EaWQYD5swwLLJKjhS6zaUNT8n3i38P83Hxh21XpRjEJc2S1yBEFGHUPbgYW",
  "key24": "6LdtUEJWXy2ouaZAVNZ6bxaFdZ4SmLZ6y67JpV75T9GH1mL6Ccx26rEcrp8E1LPjZoDLmdT9N7LiKjGtJVbjhE8",
  "key25": "5i5TL3C2f52V12WQwciRCudnjDCvbzD5XbZAX3FUNBrTA1N6gKr8fXjWnx1FnG7nEGAp1nsL5u1Bx1kVBtuzwggB",
  "key26": "5ggkvYGvA7RnCrwdRzFny7NG76sNowpCKhRuzq5dhm51rk9Nczw8D71Z2hK38MonhNQqtvqRtZxqTbpnMtdR13Lr",
  "key27": "3XCowEnf9M3yVfq6PHmxjuSUnb7GCBwZNQSXxGumo9iwXd6C4CSDDSjfbAXM9iLYTNWXzArRDXm5Gz1TkhrRmAkV"
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
