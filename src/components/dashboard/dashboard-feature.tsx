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
    "45QUL13bMimmusCZZSztj2wLKvAEh14PsBan8oWLWLP7ugiWRupvWoh5TBn4FiSwnYjkv8zpPxro9Kfk7oJ5FPuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Md19WqytWahs2SLWRxEKfXYbqFgTmfeYE4Hjz9VV3EPszTPk2F3X9jYHkkC28zpgESruUbrzWdTbTEyKSGgmr7m",
  "key1": "2hobCihV5riFpBhtUzTT14xpTjGj77copq3u98rKh5Lyx1ES2Pkb9fXbiLMRSky8x3KHvXCUMGHuUFcRGB3bPbhU",
  "key2": "3ZR66WeG5MGTabQXLbckwQqZ1wkcUa398SwEGmtJJd2ekMxFzLLMYSdTRMhGFP55QUyohKDNBbeCDM153L31Ssv8",
  "key3": "4ZH3EKPethVpmbfVUjFf6xcxXuUCqfHUxcS1YUDSTA3iNd7zhHguynXX64P8LZyqT2uzai9FXM9HSiDLUnAc3iRo",
  "key4": "2vAG4ZHhJvGtsBQzfmfiFXUgNdStsVwcA48i6rNVJMXyzba2s4HG3veDqEGdr7AmXVXT4R8K31jAKTnH3sZucScz",
  "key5": "5pzKug2p7Ti52HYLUdiBuLBYU8QhRdoaat9Kbc9YB1AYdyvSsxQAoYuo61szpc6b99df8VHS7SA81dCDdsDdajGA",
  "key6": "4csPtmh73AKrrMo5MZ9pQL1dxQ4Jhhg3LcNbefddtkzmmxCHNVu3dJZ6EtDYEVCsyYgMRhYnfHFcSXuUxAgfUpq7",
  "key7": "6tvANfULneZq4UEVHK7vMzkzJf9stWaNNV5ghLW4V54AnGRsSac68TGSEhJfrTVLojdQsbnPt3YsyaLR3BcaXZy",
  "key8": "v34JC2NdCwz54T4Z3aFDPSMkpSCxc9K4KXcHzwCfWkP8YJPpphbkMt64CmqtnUfeSjXAkMHzKJcKtVtSKwXseK5",
  "key9": "211z3LMpX62SxNUKiTkLgsehfkni4YqNfu28QKNwNibXzUfGDj6Mo8gqXDNtsa6fKrULDfhg5EHhbq51Rfq3hJiE",
  "key10": "3y8xTc1i1R9kuLefLowxHvxUTEkpPHF2JwFRZAERrKXBaBQNVtYxSR2mZkby8ifHuLdez54Cv5XREjvqTbxdWRcF",
  "key11": "4WA7DkbhFAnuUWrYgYWLiLbf7RamJHGQs9EoLC3ccDHZecMfVYS3fLYHu32jiCY1ci7nzKpqdFdwh6dLgJ9cyZdC",
  "key12": "s7ha4UYJ1LudhLCaxBS8d6WeigC2ohetMPM5PSdiYp4e5ETf87vLhtvaWtMRvqsrQkRFD3Hf7XvAn8E2yZqFpEf",
  "key13": "5bFbbv334SaamHZAFDjtLz44c7pX7FRKMDzjbSEtizw6s6ZfpVfS3ZEkMnJ7zVHBKpX8UFN1c4su9zrjfzn4mkw2",
  "key14": "2hG7Jca9qcUYk5yjybDXfohh7pa4vQziCQDtyFTELoeDksRxvPBdoMk8ttE2fqQNGDxEz2r2Nwmvk2UKGzfN2DXg",
  "key15": "2rKCw8qmiZkwMMCrxZ67FFEYytzb2J5N2anUZcCF69wrzzvw6HkaQufF79KdSSxbaKXc1AbyymLArjsDhaMsPAL6",
  "key16": "4WYmZVookrmuEmNVDGHAW7WZF2BxcMi1Nka5HVNNx3V9JFbHimKeKzD57ju2BmWBYHoM21DBQRjTE8rZpDGPT3Lt",
  "key17": "PbHw16GoPTNRFR2Da2imdK8gepFTKGeiAL24g3JSLJVXcRa8kfBvUG7a75kKQN9Dh3xwWGaXhtAC53Z6hCkJKqa",
  "key18": "2RY5ZC4hEQEYpTiujiTpHHzudScC7qcnsaSL29bKYfvvZrg8UCLTMYuWAcyeBx7pnWyrvu3gP4SRzLCRqch646ja",
  "key19": "2k3DGM5nYW4G1RRSyv7o715rnXBsEtwzQUivcs9Nr9eytK7edWYKdSobYwzGmLMFMiWkY9z1r8sjbNJVkboACmkX",
  "key20": "4STSPGhopUsBdy8x4kN7MGYRd7QLGC9gp16HWEpmfbheu36Pmdr6be3NTomUcnU2yzN5YgHzEt6R8NadUkbjBZ2L",
  "key21": "2cS6yg4mhfL3QwbkULSvun3b9MGSuKnHwja5Ecjxvh4FZvgUTt2iuHQZn5KVzUvUAJ4thDTNSqSm97SXHyKdyVNr",
  "key22": "4JwpZohzMui6VovF6EbyWBkPFbEoX6EDf3Zpp7M11GzSWrFWNqAdsoJvNbNLKzoViucVVj3BR1feR98MqYhxb4wq",
  "key23": "3m6Q7DeKfMBw3X9oyF4j6iq5ic2gWwV2TJqzNshdZfShoX4ruGuKrLjp8BNRyNjJBhSBMKehXqof5LmWD1gQVeTx",
  "key24": "NPc2sjKYVXwLpoU4KTHsdmHCvvVqc5U3m8z8yZbXtzueVSmaaXivKNjc3E7T7kkLWRtExuamgQGDad5DDKB9Gck",
  "key25": "2ZyUdY74ZNRBqr2VJBgob8HTxCkQKgH7FfR2nwg9kwqv5QAsFJA2P2XaJ8fdBTRKsDfRcQnioAfQJKPKEnyUsG4A",
  "key26": "27v6fDnpAj1i7D2NWbQKHUR9rfZPTbYVMj4LQut5itXZuWWx58nCSU6Ef7CaxhbSz25hWNbBAx4vut2gGttCKXKU",
  "key27": "2kg5HvoJhCLqd1uNtJUiY3W56cTM7UKhKTkvnq1L6DPxnapapAimAtM58pfA4PFPfuDZEX2ovyon5sQN4bGKvqfY",
  "key28": "4sj6eWCTqD6jL8nkcb1nP3T4nJvdhTGxZ3CZiME9DQT31URt8y5E1QwZi24RSsekn7zMJADknavdVyDCPVarPTTc",
  "key29": "56hsAfK532ybkaP6jTAgk6NQHBbLv5CAYjWPgwJYY5hiqWGNA7xdxD3hpQ8fTWetqkreEE3piyvsNFAY2RurBT4w",
  "key30": "4rfA9QTXNMySw3JEE6HCdkQ8joqiZk3L5PzTYL9VGrUety9hpLGebBe1zLbJ8BFdtdf1GC2vX2gNeDvSXQe7nkg",
  "key31": "4u6R1P28wQBd92LZdafAtKJUy6m4fp1XRSERGQKQDwcEaEifqNBYrJp4Aj5Wj4bwsAQ1nNWRgWpXWw2dieopHuzk",
  "key32": "3vkd4i5CeELQtjz2Gig8nwxUJprpuNqPLX3CDnXYsSr66txq5Zgsk8xnGdHoD2BkFzAxeJ6PEZPFV8CGDAHNksBs",
  "key33": "2xK1kkAs2gitmh3nJcdU2kUXZKSP4c8oTgMa4aHfUkoEGDXHiFKteDi7LZdCD5kjpTU963AukFQdxLrqHNkdkxjY",
  "key34": "3DgPWrWrWR3yeDoksy8aznS47Rgvw4boavq56b9xNTKBMN9dc2gbQQBH7oCzrHRz4yQTKwQbtREyuimQrfCau6V",
  "key35": "66LbCJVXq1vCGMYi29fZ3Nz6bgjprBkUeuke8P43GeMiz4XWrnHUwGdNUDHheANZEH7FstNcCANZmkjzVekUjXq",
  "key36": "2Xzcjfpi66Szsmuy2bF3C4EgoFywwoEt5h2jrc74VBFGuaievJdvYRyPMy3Txc23TWbhHiYEZYUWc7bFWzjUMvuY",
  "key37": "5Cex3qfR9pL6e21RSowL8rRGV3daRYjhH5pjPpEvj5jzqAUkMLnWyqT3zFEUfCeSvDFEWfebDXtkP8zVJTjfFUag",
  "key38": "3C4QArSVCYLgxJwEGpTGLH2GFtpCykBmdQMvF528dSd5o8M9xkuvKWFjyCAmJKjFjkpe91sB1PhkaMhiefPMeuUk",
  "key39": "gUtA8avP94bBSgUVY92jus7QwKZgapgLQwWveShuZSRBAzGZ2yrFa6pbwpDCevCaWo1utN8tFY5ir9KE6yuMHGg",
  "key40": "31f2zgdiF5Aoc7apk9JPzrNsmaPKGGSKRMA6PUmudQ68jJrPQrr1wwmjfD6JbBQJkRcCHXawEr2k9ZoXBDJVa5Fm",
  "key41": "3zNbTTs5jJ9XbK9oePdiSRteqb1nyjWb4kGkcp5UUcbtphkDhV24L6bRzKnfXnVLeRH6HFGa6iiBUP7V46FFPSCB",
  "key42": "46vpoJ2iugLgmPgy31xP8J9ipy7kCrSJHFPWt6Uhn1KdZS2mfWq3B3fjfMcuoExqfoxSt47JetRADdiHi9McdV6P",
  "key43": "Z7UPxFzTZVa35b9NP4Eae12soBcEMZP3bR1vvEZMeXqc9fQN34agxKKJiFMDYBFq752n9Mxa9qz7KapZ7Q8wiPW",
  "key44": "5TkPFaU5FBJy1D4qAuJrgGZjRaAZjQsvFgG3pv91iNyRDUuMq8JL1F5XqoQHT5rVPdXexukdn9y1w56frevxTwqd",
  "key45": "3V8bZctKNfakhNWvEJ88jx4nQKy7PkxDTZy3zJCK3D8dxzhrVxaETy94VwuGjctwCtZS5Q12nJajjjb3r2esUZYQ"
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
