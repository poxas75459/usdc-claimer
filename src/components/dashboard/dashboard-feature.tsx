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
    "5TQ4caSHpuvr8FirRQNCt7bZvenmGvBvES3LmwSEF1P4idtUu1JxwG7jsE7BH6W2r4gE1h24JetZpMybCCpAifSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFvubsiVkMsLshuv4HGtHTJ47fFbAZfCSzdp9nBnFd26m3aVcfjhnca2ZgSu7F2p7M7h4F8MGesBNjHHZbryPeV",
  "key1": "YkJkE5QXQsViAP8MRUGb3RZRvDJQCjX38Y73Q1gr13DmaRWBkGh4243SUyJzLczbcUP1F8h3YWTWE45AUZu2vhx",
  "key2": "3wo25J5p3hovLTAuKFGadZC7AEZW7tGC8yHEwo5kPGyDkwCWbPZR7g1gHfm62rn7nFH7UxLNDoaAcTiyF8mPi8Y6",
  "key3": "5KhkWQJYzE8QPvbJNv4V5CrsVaNCc3cu5ca5KABHKNyxpnctuvT1QVjvy5tQyvbL355zXWBbNPPhyLV2n2JvQwz1",
  "key4": "3QajhzkHZuSpmuBRGi2dKKoZqYZG6eawVfcmJ4N9me21XJdpDxKvNdir4u28hTMwKJPMEJQAJGdreZ2hXEZoFWum",
  "key5": "4chK4ZDHRCd33YR9LkreQz8U6KrQnP9NuJK3UmKZpQEFtPv9YKznEwmxokGjnhtX2wzuhvAmqcjU3wCqjDDQJbS3",
  "key6": "5YzaHo93v7GwKabP3qsuXLYdgUFMDEDUcdK3mzMk647uLRHkW1imrZWLM9rJWm4pGRiDRE8hHVjofHxEDSEJDKNK",
  "key7": "5SERheL3BTFv8hJVNhS4WFC3ajUgZaoJ4ZCDRqGgG23Gw4rhfPDx4mswpArXUanBKmeq9m8kLsVgnxnX87pq4CCy",
  "key8": "3iZC6BkdqtMA9mw1YbJLgdCB1smPSBFMuAK3pRXdGhQzGb4K9yKdxghvKLMvhqaT5pYdFeMAAj8FbhRbF3SXFMpd",
  "key9": "2ArrVyNt6CXU3Ms5pJPhHDPrQVhNHMq4MKPcp9FL5Yt256tcJKZSq8i2WfDfrsff4XmPP3GKYBueDvdM1W56kKaJ",
  "key10": "2XUp6rG4e1qdMQYrK7Fv491H8qa575qu5XACMLydBXA22ZE7MUqA3wz3QRHhVZavANAr74Tv76AbZhnt3R4fhokQ",
  "key11": "5hMXenVKYRuUjCBG6aKByNxepqAc7yBrDXP4P8uRSfH4LgokPSW2C6LWPtYMhHQWDUmYgEzguDMZK364ea6vg8zQ",
  "key12": "2uxVKi1MWYYzFQj6Sp75LarXk1GZm6mMzNqzbXZesu4cyu8eELtoa1LXfpjHd3dh359pyhbGXkctdM27zyzEJSQX",
  "key13": "KwhKZaXLHBmfgPJyLh41TFq6wCND3tpruo61ikDwAftyEsN6Ja8FLeNXVkEmiD7f3sDaqS21fVce3vkF7m1ZYTH",
  "key14": "DauhGyFhq1cLj99UcMsmL5CXZeHemqaEsQPMewiDHhXvaaPomMy1gwdeoEWXnJAFUyQRtaxNFZ8LfpSJXMvGSFM",
  "key15": "2J5L3aHNc4zAqLSezbVS1YPSc2Kn3rL7RagG9BFrQHTpwaJMJ9d37QRyRBtgAy4f3VbnoyHupvfqCPPtptpazpTC",
  "key16": "22jKxtcRu98PLHP2W7dcLonTxmEtexeKQB8AygtbLa2NXjQ3DzV9Mc7Rag84k5ggydkY4WaxK7LCWBgqST9vh3fZ",
  "key17": "2iHCWzPfPqn6FFGcbRuDH8yqYqkimBDUWCP3Q1K4Up4mR8HuAZPKbZkexmLBh5MMjHXZTMxc5JLBcyUsEhG4aA1Q",
  "key18": "2QWsTQLJPp9yfAfZhoN9To6s3pAuSZP6msmPyKWGJuMMPhqapKndQUire9bxLDQGtmnpRTZDsTvwY5SgmN3hu4MP",
  "key19": "2yBjmo3CEhuXDSxKxh6cGiYyNzrmhK5Wws7N6y33Dr9WMjdRv1QSvxxV5FACeirokM4UeHpuFQ773ZqU7pgRM1kw",
  "key20": "5dCBU9V9ENSa6Ra1uEyCq6FYBaCHj6mRzNpd9VppyJ8SJvq75ZpUTVCyoEtrEWodvqm4CSewsGFoFb2ErMcMSUoR",
  "key21": "2AXoWRaB4HnJmD5z4d6uZ2orZDddmxwvHSi2JXDzHPrhGYL1mhRf8qe8WkHHaLYFbQAjt3zgYjL18mrgs65RrusG",
  "key22": "29oV2nW83WBWYZzgY4QMxFyv2yeJ5rd1F7KV8sAYExPtYmeXV4WEYsJi6Dp47rZQkaa7i4sNhdhVW5nR5q7Kze8g",
  "key23": "3MDappYnKVMmMQBxQ5hR2QShCswyjg7YmyHLBCqWjndJ9N6NuMraoZJhxDZwvcKsZkuJVvenwo7RZJqL8FaiAgiz",
  "key24": "3UrGH7AC4WAkAXjCTcx8SSKtKfnNtv1GL7ykj8J4FGFqa1s79eBMrDDHDyiNbF6cSrpcdadLAJGGcw8KB9CK1Qeg",
  "key25": "bpFjtV6FhpBZDPQviD7J3yJJqZLxqPVMhs2VcUPXtaHAr7WqnjuFSbZDBh3uyFbNJuqx4PXHd3UJZ99STHCgnd6",
  "key26": "2yUNrkU8omDFZtEq2q1YdpznXyJLH4Q17voHq5zo2Zio75Zmb1E35u8M49Kd2eZzQyN9J48kDb47f3pykS3b77gp",
  "key27": "4MNNg6h6vYzndLhidbbXuSRRhwHK4tzA5uF8p997bvqLec35L36jbcCZyxCL2j9HYgphNvsM2U2f3aDEXNaHnVNu",
  "key28": "5SpXnTVwHkQtXv4kDaKXDYWevmzrdDL3c2udCQk6KaBKGar7btQB4b2zVWT8wW1Rd17GVWhdAsXHhQRpHKWFeP22",
  "key29": "5LKQXDkjTxZmfS1aw1CMvfRNNFdEfPceKazATnZETjQuZQMjdR7xSunNvt7wi3RMtzGERmhCsminf7tmVSNecDKn",
  "key30": "5nFW8xRZfGMCJp6ZECBG7dSfjhGrywpu59gviC1UCbVLtpcAuomw13qAHFXufbaS5kYTK3QYmrZ5yf3uk8QFZ7JX",
  "key31": "3BZiCHqdGWQq4HpwztGfdWty8QpurLFQEBpCjzxGGELyc3vgfXc35GH76rzTjd1XVM7DLyUUkW6DsuzMHyqSj8ec",
  "key32": "YC3E2fYdSosAUPRTogxKCaFtuZn86nimyHPba5VuhjkHgUwhztQW4S1xbo5W991fVvU9FRVwVbJzPvqnfMjb8kW",
  "key33": "4ABouS9Ge4iEwhefNKpwf1P3YGt9vffeHv9f4HJ431QGTyx6csk5znpEEDzZUAN5RJfaqbpAJmbNqXWe6Nkia6Qc",
  "key34": "2KMH6zqiQvzYTTketTV96qBXxZ21WFrybaWUNTCSCTmZVicunsHieyrRz9LTYkibBPHEa1PYA37oEN9MD6de1sai"
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
