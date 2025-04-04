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
    "vps6FEmpGWchNBFuLfX7hRXYvcRi4PF2RkfKqeR8tMcW2FVAgQEizLYeEyNtugNUwQUnb2rhbcaaMDx7e8B7KS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6CQqmAniGMpHkeKcDmHpdkGNoqzwnoMDMni3wqM8kfctZYq8CvE4KiLv9VJjPKkDW5LFqbiWMncwjhkzMx2n2a",
  "key1": "3zwWU95Wzzb9QH7PUGWfVaQ9HCaaYMU5hgHMyh1SGTafbmfSxKMiZodAmkRwR6kFusvmC7PKxU8hc3Jqnmtz1o4m",
  "key2": "4vwEGhzxvbpZUJEgKC5shJ7p1Xn26xXaUTYH5MqoKkwvWba9G7C7hCQzaHrNHp7Ab81ZgyRpCShbF5DiRa8CkDYT",
  "key3": "Cyvkwk2Gh6vGLmxrq72Lx8VRHP2863giNPwvCdaD57QAtyCQEgQcUUcFVeyHfEhQiARWorrvYMyq25wHo2RpXKC",
  "key4": "4gM9uBRLhB2ktERRVRkVUCLZkDbnVnaPighTnbh3wc6uiZJzfUKP8YbEw2BZUYRhD6oEAW4N6arHFzQgTCHFtdBX",
  "key5": "2vJotXreZomzDuxmpN9cuUYat7icoMN2UsGR5WPaSaiXT3Dh9JThzpjmZX6hKka8SqLkR8L98YHkwkccyFp87JMv",
  "key6": "3Xnv9u4LFeFTXspspfYjcydeVE4LuvSFbiM7HWJ3jZdNfcbMetFTwsBxF7issakfnL3BcSm9cGYWjiguDh9AbwJC",
  "key7": "2N8vVTozV6cHv5uENQRvf92g4vBVgutJzbHTBhLnRcR2jh78XcMHxBHrx2BsReey6nNr7oHSUcKvpcVoWSAFLce2",
  "key8": "5dKnj9kV15vV2tHFR7N9Kc4263Y8mC2oFc1D9AWDRK56uxyaUmMa6Bo13NrSe35ZtdTonraQeetEErvg6BLgQ2zj",
  "key9": "2ZKGU9GG8gkcSgCFX8K5XSZTrg3veFy3u8CFvLk5uevGFtW8c9NowHwr2AcWF23u3RfDkqMxK5uSTXp894dvq1gX",
  "key10": "3oPjrZqDdgzJ885piWwBBYwQ4gerzQEQ2Y8dV8SQDUtUwQ6DJeia5WD1vC7B6xftUr6N4WH7ScTo58sUdoWFjxSu",
  "key11": "5eZpZR5gjh8TeyHC4ccmBur4h4EBQMMALTrSQNixnDSibnCxXUejNHE2P1jEGrjb8czv1tmc1CQkuDe4pW2hFXG",
  "key12": "4uu7uXyVXZguDdsKR6CAX77yfuxgMavFfYVB4HtrdhwPJM4a7kCHdTYzZ66s2LRrmuh6HDVrdeG2uAzii6F1HTR1",
  "key13": "5eXfFi9BVUM7zdoUhCyy3o8czTJhu6e6MkthB6uk4BRSKJGcg2G9KqrVqVJPjCB5SPfGbHNB6vNjRtByvhxxfmWd",
  "key14": "5Uh4P2ZXH9JeMt7TnsTZax323s81UWmGttx8mfEftqE9zYfMqmSq5Neto992JhXU9aJgKem7xq9TDbgj2Tgkt2RQ",
  "key15": "5ysjymFje5EeLsmEHNwCRLictQwR8XcDgG4Lb3Ycq11BLBpVoH9vPr5RsQn8LJmmd7Da4BPv8xvFmUT2WGPU9zC8",
  "key16": "4Qd2DiQzHkqWtk492rgh1VYUDx6eSdnKqZsyEuK5QAk6pi2LLGirWZLbepiwsFdLeNu1CAXa7xJ2PDG6n3ApHTBa",
  "key17": "2AioBzs1ASWjvdbdYQeNVP17PVP2vi4NNfnQAjriQJF84Jvnunb8BitcoBUwKrckY3NNVoybSwVwkXGbMT5kyPNz",
  "key18": "vQFV2NHWCzCLVhFwREU8wuFTcb4GCTCL57AWmFNHuECNSNPg2tu7aGW41AA3KqW81ZP7Rb9axnVHXAadT9d5XLr",
  "key19": "2sKacTh5U6Ym4JN8vGSpsdUmqCMBt5vtTmLy2ATEjNStBxKZ7LB9oeJg9Basdieb8WmmKZ3LAbfVmgLexrQy9Hqs",
  "key20": "2BZ7JD51DjFioHhQUryr4giDd2kko4MguogmwhhfNFuzNQQUwAzbc3nEH1ysukzYTd72j7FD8KsHC3ss5kvfdCP2",
  "key21": "5VTK7sgNKE2KhYgGRKJWBokiCsxkvfz3mwVmkd7JqU95X3JfhVzVbjgx8fC5zvyeRjfn1TQiJV4F1ho47a5an9PU",
  "key22": "ruxhn9oKu93wcb9kxTgWNUDH2VVNTMTUBCNkR9p1F9vhrvYhg9mxTaa5PdiPrRifUH3fMaDZLJ65mJngNpupon1",
  "key23": "4LwXXVXxpThTckmyRbdGv7jxixUUVj3bAQLUva3tSAM7vR8DHd6PL6PNPv4L8zZcRhVLmQDg4Kj8myGtZ7TsvgDx",
  "key24": "5MFwp4ZJSGWvHMdwzZGtj4XpwFKDwvKV4Z6MZJrfr6SFgpyYTmzQqWW6TNZ3s9pENJxachvGXdvoM9UTCn1KQY8B",
  "key25": "5T5kFeSP3x3zyFmvTWdKyqixGaK6aLRAdhMJZxk6jG4f3UYxwF95EANaFUpe7h2spg4sjGJqMZ9ZdUugTwqH3QRe",
  "key26": "4aDUo52hnEEeZsZrbJtd3RvoYk8CoKxJYeDaF5XHK5Ri7KR9MEYd5NGD3Z9X3DiL2UbU4Nn7no3DsRWRSc4YYVp9",
  "key27": "xayRhKai1fNbQLL5tVb38VcHULoQkKaAeiq9RcoKwvo5AYhWK63hhPRMMHzwEERpKwoRpaYgbMSk7y2Vm2dxBnb",
  "key28": "5BwD589KwH3JdhWVVQBatd4qj4YZyCpsS3sXK9wnqcRKx3Wz93639HsrwFyzBtGRykpM6TTgjSjWwKj3pJEuq4HZ",
  "key29": "moFNkQYbxxhDQD3o5P8VPBPodkbm1M55M61F4jeCCpSgrmUG6ZJtGGHErNzQbUf5MdcxF89MsXggsF2joHNHRmT",
  "key30": "3GbAe3Cutv1scRHUH4CQa4jxxyYbsMDpK7Nqd7E1SmAVaib4QR9Nxb2jCKk14QLde68CkQXKkBGD1PEzjp2gLPFX"
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
