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
    "3CsdPP8eGGropNJ5kL46J3rFGrHisDS4YS2E3vSwio3KpixRa4weZYRBM7MmZjX7W4vrz8882WzCsNkEZfR7pwHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGK8PVu7cLLz5tC21H78ts4qyLfn2maE2TuM1HS65GADr5vPYvXeUZLRXCRGi22Gc1VoUZfhDhK8yQNjmT8Pct9",
  "key1": "3px4Hca3HoFxXmnq17XbzMuwmiCZRgjswALQFUfKNVFsaw99XaD76CjEm7JcDd2NShrA3CbUoDVQVae69k1n1fjP",
  "key2": "3V58DeKBCbGpwMGqgBEX4S5rECs1vNVacgBvPyU5tBEh6LoTq4zQduWYNEWv6oG8Y5pjReETuMcAuFJRwabhGJfU",
  "key3": "28DQBau7Sh7HwC82JCLWByN4vp5zKVxxeGy4u9Kcdo9thiutEs7nxnt86H3JnLditSpBpSBhcg3AgXHpEPgxi2D1",
  "key4": "2fiTKeQ3MQJCPJRRd76UmfeWQhBn8oTyaaZGndV14pN9tnjuDVwyAQ1iumLoXEtxFi3rbBnGGQU7areAs8YZx3vs",
  "key5": "4DYrwQmwxsHQj3HHfCR9BDeDQ4FGQME9FGgH4CD1ywZjCpRZ72tzs9gqXAQ4jGPjBjwEzG8DA24BeJ2LLuj9Uf4P",
  "key6": "3JkoHRBu42ntDdekyUrRaynvTFUoLknRWAQ4BMv1SfYSwgvXToK5murkEiK984NKHAFqVGy3JchmvC7v1rGVYpfd",
  "key7": "2hq6H5G1yM88XQaxAD5PtC3Px3XHyonSWhdPbD7Mbc93aKYFZvydiB3N5axNVDPQQeveP8iagLrUDVCorgT4TBZd",
  "key8": "4eCva6rXgqEFbtzj5NavDZpT2UX8DrB5g5JTA2YrQW8Y4XVbaTYssKADdFU9GnfzfJzHFLsTku5EeDAwSSsxjq5u",
  "key9": "3pkY4Ui3D3FU4vFxguW3KqSi4T732hASfen6ZnjKCGZNeebREp9SBZfSvNFfooGoDF8nfqW3vsXVpWEyDun3S7JE",
  "key10": "3ff5ocVJBLBgVPg8vD83EVH43tU46adm4vYoquX7CU4nPy1nK4atztV5shLGKcpZdNmjdqDTjXsHZaEja4hJUHy6",
  "key11": "2T5REfrbWEhcrKLYBXcgCbSq8NchEdg5kGrhMZAETyqA5K9LpZzuMKBqUBD3pjcG181zQfy3mrMbqVSPooph4UGX",
  "key12": "5NdVQL2mBXxyD7nfcP4NGV5HmkbrmH8n4jwYdoWbiRjKWgMJXEFk5o11J9ADbipBirt5dBZx689AdqsKmhVsvKF9",
  "key13": "yzevtzs4Lb7PWQqZsMsPBUnmBY4BE5Z9X6kgRErkU6YEX69S2Nh9hxFFUi4SXdyTcLTr5hmiKPJBaMDtTdtcDS4",
  "key14": "4CV2hUAM7Q8Q4GZtjtDCqVu5kLaf28HMwvK26oFUYeXciBF5m3fe3WpFBAs6ef9NnndXkYW92cxFBQtgAZY5RZaV",
  "key15": "2SzN5bdscq3KmpbvRJTaUdCGNNZNGV2S67ENH2PvKKdGo1rg8mCt2W13tWNgWvATt6LfLiKU95FKC6QLnjbbcAxo",
  "key16": "4GwtE6KPrJAw26ZPTEDtPiac9Cf61SjjnKZugP1HnxJRmf3qgGirSdFUBGGAYwyzTNHwmsnRyU8ApcecbyDVwqnw",
  "key17": "4SoMdxE7BRZiLXMohexNjPMj3YkKMuocpxczr4ahyazbqQaWnxRyjE1yuv5z3DNjDe5PVEGNMKFV4qD5gMFgwWVC",
  "key18": "2trd8AsXGjixH7z6EBqeVGPAGycVCuwqL1Tq2hyeU6Ur5zk5boPUZaDgffzGoyjWuDiXiVaC3mY7n5AVojFVcUUb",
  "key19": "66znFNdeRgdwdsuW5PEjt3Arr2SXiPhj5n7gvwHykfYCJkdxjFyFYbZ6J8gBpggxQzQ74Yfsaw3TEvbhcvDVqifz",
  "key20": "5NBC58YvN2rBjSNCh2B2Jy7SiLvE8yummcF9CSmvraAcsrtHvJBobPXHFdcxDv7hRaLa1hG6SX5JwLudaUuq7Dzn",
  "key21": "2SojCj3gidrVZcndbYsjL2HQH9uFEYKxe2N5YhtaxXxynu4MkgQ5W55jdudj9LDjVYCb8kYAXdmH4eP7Vf4VocW7",
  "key22": "2mBH76Sb8n3FMPMAbHQ4KonivKuv8ZsPzrDpXagof86ws2kxb3WsCU8ukyp3iwtvcmHW2DbsGJ8TrVyDgqsp6caj",
  "key23": "3vmSndekh2EqS1vMfW1BGwKxW3fKqEi3yrEyDrYSC69kkHTYCjckA8goGtzooF49UNkSCzqqBTdsoHnaFVqopDth",
  "key24": "3SW9S5nxmffLSobFSsweaLdZGQapTBRrCxNfcDUfiQtVTPgbQ7MXNpX5y5cpTTpywNsW2qZ4MQeaDHGcJEpbACyh",
  "key25": "5S2NxWzVem1w1kHEUgqkJb5fJdDaKXFxnNCM4qtVnwwBBMNUfJ287S2N8sNJfcY7HUmRV7r4H71dEvuvPgnDcZH6",
  "key26": "5uLzKPRfdxcg45Hm2PEEZvstg1e2MNecZZSMkk87UknHWTT88wrw3fLfnQ2BGXGUh1oRCYx2L3dvTsnfXJiEknjZ",
  "key27": "41CpDyqYrrp6zzQDjn3f4pBkex4LC6mqziNFCLErawdAkCoYWBDJ4hxFHFh4djmuTRev4sV9YEnznAPLx34KAq1H",
  "key28": "25YLyfQ9riZShSV3hf7We9Ak9AAoSSRDts9nm7kHVPKfA3RmdjEm365qvRbRDHQQCCp8URBTMduNuKjwUsVnYCo2"
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
