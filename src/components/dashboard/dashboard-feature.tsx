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
    "ayTWv9PsL4GLixYGKdEpifjMUJJR1KZKy61q9XVxYGANfYM87tiPnzuMBeSoCpyy8zkh5Fw4ujRhF898YGPTqDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eW8no4WU51J4LNgMK7cPXQREfbUqiPddnWxe2LJLxk2FcqZC29FVcf62PKwDkip1kJFySqkuV8of2ohNfAKdv5b",
  "key1": "4m8sm9pSaK5KL9itsBTishr4uv1qX86cgDgrwMddjdub75wvUr6x696yho7kxXyeaXVGJk9aspBtgrucRFNDtHBX",
  "key2": "4qSJRkomUkC2m5sPBFtqGJZuc72MCttHFUCRNRtq3J8MSWZfxpjkNyy93H7CV1YaCcfb64xA6VKT98NfpJ4h848K",
  "key3": "4LSBbnM5QYWbFJqzsxtwGigFEcGnyZwE1BaUXhWpxQ9ZVVjA4XXMmaKSWX4cWCjMjyTE5WM4Fj4jfMYvrzHwnLbG",
  "key4": "jCsDpVs75r8j7J8HBkVrp64ukeGnWRmcEnhwL64MmXEyGW6AHRo5fXxMACefBrRBTwRBgNtrZ7oiSbzh381VhkS",
  "key5": "2otxe9kwtviw6mMaFDKUCgdF2D6Z9VZfr2sbCcvGt5fey9o4wW6MFdKH8tdzbeLQpxo2UEhc9ruQAxkhHgyuYakD",
  "key6": "56PDxnzdBtowJoanZp1xbW9paqzXxxHFtDtsNus8RNAm7sj8AYarZ2c8wPUqrbtwTvga6XVaBdrNAnBE9cTrUMYT",
  "key7": "5RDJNPgCzXxYJzb4gSHmz1VhjJNZ2LAbZTiP2nw6JWqVKJBEM2msgsTdMgDuYoLY3Z9q71jWjPdywyJxDES6Qufm",
  "key8": "3e2X4YWpQhVgBXFBFcWJeVvaMZW2NPRFSyik3HgdApGLkrCFYwWb4EHGYKjnr5VurRMTnubY41HHjWyUXBvGZJEQ",
  "key9": "foxPHAJKYkgJyQhXkzWxtaES3VCFULcykG3tjHksH7RwhqZgLkJZEPuuVzvXBqnCBdbQ1BrQ9hRCtsa5RBdYnf1",
  "key10": "3pHWFNAbdDj6pm162VGHaVbYUZA9j3C63PRKhckX61BAvLmz3X5x5wePt86FBbvYrEzfj5NSY7vy6uYHfJTmvGnn",
  "key11": "5iTEXDPQdtm5x6jSMaddEjcSyxF2oH5VL6PYXNbUuPEgtqDgqMdpqkqdxTnruqN8r9iDvP5zmg4ar9MXFVXrmHn4",
  "key12": "4fCJZqToe3EPUBpD6x58KfvVqUCg8prVLN7cBtZT8drpCFp5YTbbqSjQwSGDq1SgRwYURkwyN9oqWLutYySqrbRJ",
  "key13": "2a4ioV55HShsyXtdbAW7Gb5VWPZpZZrkAWDMSZRdV4obtPhdqX8DR5p4BRqtnw96sS1CaBvU6Nccj2L49r1JkTZE",
  "key14": "48wLr6fkBNdTkSzKZkZGc1LBhQt7yWAK61f3xdkxeNryGikLbH4RSqLF4QqP9z3jpKnYSEK9eaZ3Wny9k2p1ZPZa",
  "key15": "nSKVWMkr132xeUCV2fnMgqL8Bwash7Bsqy7CiasAk7suSapGSTpzR3XSo3dL6QP7su34ofwazBcwGKAWVq2kABB",
  "key16": "39L4y5gXFpHYvYnCNPXJShv7QHn9UnTg973kC1g5YAJbHY8ssXSUAgyEcwZCJeJvYycdq4KgqNRJ4cfC4LM8a8qC",
  "key17": "48gKzM3iqiKZkpmCgsAxYKvAgxNdKrVewR5udvr9zZjKAWxnaLVqUNrLqLmTmbKsMCwYXMtq8nbSJ5wjWSsve1hn",
  "key18": "4WeB1PBDDwmbaSMsMMcrm5wG6u1dhgLeyvfixAKupheCH8uPmuw1wdKv1v6RrDiVStCfDMbQLsky2qDuTkov9AmB",
  "key19": "4bK3fenGQCmAk8rqpeevPUAXA2kY6JFbzHK8tBAmxSdXXRNanERQneh9BRVpMHyWBF2iySVYvSXZWJoXJeHKCfzj",
  "key20": "5qGG8DmCG8A84NDw4zFTnVxVJJxXtYFv6MxHoLb67VQRkBx5R1GMUjQRHV9gkhxfrGKugYWjaDg1mPQP3r5W4gNi",
  "key21": "3Bmcq4Bod5N9ZumfNouDNg7dWgFP7ueAiBTp3Pmnt2niKsTjm4Ab59QU6Ev2Hij2pMe7Ex6fqfr8Km4FN2ZEVEvE",
  "key22": "2w3a4zZYtbozHNgcrzRPVsm58gqjJV9zK7Gyo9RwvTMhpThTCDzPjgZAx9sQvtoZ4YkG4LUJYbSyL66F6nW9taPJ",
  "key23": "3YQLH3mCLN2M4iXSuzVwRJvXKbzgjCBSL1s4E9Yg1s6zrjDpwstxYNSJXd2kKTUtsSXym8zB4iEHXNBFLB5Dihg2",
  "key24": "rqmNhYE6RFQnbKfJT6za3YZJMdwsVpwkXhrNqTArDe72XeNRYHMR8eJA384EZ51WcCsh5c4XA59JBaw1qX4pD2z",
  "key25": "3x3wmurGJyoZWKEXSJVN4UVsAFNiZRsDzBN271294EMbx2sufxFMxYU18G6tGBEqUESjyVuiBDnau4M67yU9JML8",
  "key26": "A7JPQ3HKptqTmzokTbDbohmiKR1vXxyNZ5FwshEgNW1Y9YQxbrjHrNwBf3vNNTmAYjBjmbB7Ne9kCJP8wrJgvky",
  "key27": "4ctNKUjuqWuEpAGBhnwcxDheLj3TtNMspxvbiFtxWeX3aC3JmTwdWdnxq9mUvJAHRo2ZgpBnnSWsst1zjK5Hkkhq",
  "key28": "jiQMvrziUsUg6khv8MeribzfMUPJY18QeMrdiJuZbhFtS9FRsw7wdQfQWG67mELnRVnhdnv6M5cTBRoTiGVxw13",
  "key29": "4tPc8rXYbkpQXuYpbdDTmds8YxkEC95t36fJndfgrzvuqzF6f1hqMcMFguNFvusApQTBchDxms9xBJh31pfxKZUb",
  "key30": "22FvhfQUvW6ZJYyd5WWaiYX2T3smmbcGJp7155Y6NdCPmWtmpA23UxKHPmrsTi1zgvaKcohihg4MfA6CZTzsZLxs",
  "key31": "4z1tdQ8Uvwqm4ZBz3huSTFeZ27Mq1f89unLGck6CKrT5LnwviyFgsXeCprYaqdtmRLqWhEnGsUzNB4ctQ5xfV7xa",
  "key32": "4VfsU8r8EeBXfEH3AH4mQTW71i7GrHdmHJohYyKveKdnwyY7EjX7XrHiY4UXrAuSWsZfLdgBDzfMzG3C43XG2uty",
  "key33": "3BGV3aXbfi8sEEwXs65PrkVZsLkGqT478yTjLha6nA61cBrQa7rSQFp571pVJ2gjEU3QY9h1k2RNfm2DebupcXTn",
  "key34": "3W2xjEZfqV9H1BsMDcrNZ1eXHPhcA5BWjP1dvFFKB7eERvwMdxpUuHnLjw54VWJXkbwsJZgJTzf7kXEvLM5aZXJa",
  "key35": "kEY8rX12LNBSFG3RL6pb6kPPQ8e9VqzRgMPTFEc7vJ33QTA7b7eZJDZAb2piv9z2GeVZVgKZGQdajwiCaHTt4rp",
  "key36": "2qjxfhTDAxWE8qEFjh5gTzkKoMZ4cG4sfq64PS47LeT4CJmG2Lhro4i5F11WSKkB9inpdUYhvr4upNZyW9QSDxMq",
  "key37": "4jofPSSzJUSe1d69csK2smNfxPKLxX7Wzo3H3RgRnQsE9ezXsMDrqKSzN9v9CoZbgtkyp29GYFKhfBC7yycVKG88"
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
