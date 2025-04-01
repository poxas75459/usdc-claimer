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
    "2G9p6AnECUPAYg55GiEPrDfWZJe2ospQEk7H1nir4sxyEzK9Fw55FiNTGiXjJEDcc8oqF1heFFusAQxfLMAFWko5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vo3PHNBRRCS1wrsLa8LpougRsZUg1L9wGjWr14tXRM2KY7wHnoso3riaht5M71sEXHfRWY8pAFVkuF7XBFbJ8Aj",
  "key1": "396ABGuZK7uoy2YmkHuU7DyYwRQPUvhFGNw9KJGypRstEdj49murBhGogB4bzGZKFHm1cZFHPrQwegE2vssiWaCu",
  "key2": "3ATVQjjsdMTX1BRHdEmv7sVmyRMxavU63316mwatrWLgaq2TaeEWDzPXDaxr41Fu88CWxkBWoPvg3yY9FRFZrsy4",
  "key3": "5Zyr2Lt3Ke2GDhMJsibVBAM5BZ5tVSEmyxdXG7yre7p2rLLNGg8s3CN3HEi63bbvVvvy3hczVLj7suLkk7Dn74g2",
  "key4": "2H8LJz9hMonWcbuBQ4m6B3YbNN8Whb49L8byJxeUn5CaqHfh1p63WkBvWaMmHqzAJftxir1f7ZSSQLE1nAYy3anY",
  "key5": "4Ve9WwQ9FmgmyLeMSSyJh2CkDJjdmgpPWC2rQYz1Pf13vpvV1zrJN1Q6RZUcVHMGbbWaWHRzDeeNQ2KNyWu1SxkK",
  "key6": "2tBJAYzVroNzPxZtzuQDSXUSboDqnVCa3F3wUgqWjMYuRAzET8gDXEXAsTXiJj9UuvfKb9QJi13zbdkXkbP8sRz2",
  "key7": "5tYbiDYik5NygrjgUDP1nkcx7JnJW5ndyCLNWWWxWhHX9DPH9hkdWsrL6MNvzxBB8kVTxCigkiUbnBHqwMDnmpZH",
  "key8": "5TQ3vkJh9mzM12KnUoKunSERPpw4DxPstdSXPNrrgdV52HFtS98U7tRT5YNYUifRjEB11TyeQegtMSwkTXrrCMPo",
  "key9": "3UVFGusFx6svVXoohNjamQ8f7UYAuGFVJhUxDk9NEPfCrfZknFW44yWRaJRMfmABwkwc91YDgUhMUBo8WkHhv1pD",
  "key10": "27mkqBWKJAi9m3TdoVRNcpMKzmgd2gxwEpYWPGYzNLQwe17F3nA7Na1Pjh3Sn6Fkamr6t86sJv9ooKyJ8AH6k5vM",
  "key11": "5JtRmvixcvnNSoDaH7DN5ZL4Bfz5JLVHA1DLnGZFjTjXAN6ZqdJsDReTi8iKdqXHRHeEKu2T7wfGNcEEwpmg1cLS",
  "key12": "Jj5eLK7UedgLvybeN4x7NdshBipDLSGrZY2i5txdkSkaVcicXU1XtZNRWqxTcZudf8vJgiRWQScKru4VgLQYP1B",
  "key13": "5hn452baoYpbAj5aVFKDd5bvSEScMNq3kaL6QcSwmtu3sYgsB8BuHmopsUaPEu4DqiYSvNHKUthUEzJbhwcsmBJf",
  "key14": "3Lgt4pcpkUBpiCBB5xYwJUQmaitCCDhnoRhhf1eueFa1mdmVaccXgckZMqFexU3HNuNHHuu3xpDE6aaF8n8LXo3V",
  "key15": "7NbAAdkS3fUY1ibQUv3gbB1v7DbeC8Vq7UWu98kBJUFVsS4nFcMorP47pvt29MuTXwUhjuZJh85oLx1dfxVvChR",
  "key16": "sEAXZ7XrK6vgm71W3gAhoTt86rn4PJZb2RfV4zNWcXdM44ow5ijztPCRNe3nTqUPtB6fhgwFbmAP9HHXBkLzwXZ",
  "key17": "3bJPKtq7nuTrd19ZjJh89ZdyR858b61ks6TP6RvZC5p47VvCFWLGZEDNw18VnLurqfizqqQswZdK7aGs9E1aL9sA",
  "key18": "4LHBXF2SDg1PhxWyykoWZp5ne76qDuF59JxovV3ZxKk6bqZhUoVMELKiZqThxw8KE6WXVJJE9hrkBsQFeeoc25Ae",
  "key19": "nVUS7TP5Z727ZXLUMxYbaQUPEmaJU3NxBREACLzxhBD6fQRuoHB8BCCf4vyb7s3tXjefTLwU8qUacZVT5ANisS3",
  "key20": "3WRsWpN8aDLJNhUjbNELjgZgq3bRLRv7zmwjzXoPJdMtTdV4KnDfKsdWWjrYfno6ywwfCqw9RL3AacuK5aRp4V1J",
  "key21": "56SczTLYQQf4h75ur6VBhn1hbwBuyy3DmKcukb1nUEYkP1JYaJwUqY4q65tXU9fm53ArWvagJCbc1oGZKqWkSGX",
  "key22": "quiGnP2UZ6PymQvbkdAFFa6GoY9CBEtLuJZHhQhUgdAb65uq2JqfkmeZvWCsRTs7sm9fv3RrdjXYaUZgeMo9cVm",
  "key23": "4oVgkxkYKuHwxtPyiBcthovQpN9jdRFtjJM3pmzLFJrSgQ8Dz6F4aJD3ZXAtokqCpVQfVTPYxGRrQgUu3Q1DoEND",
  "key24": "5jCVn4jSVY7HuB4nKWkcujmpm8hJGKCSwhBdjPgX1bGcdPHEjbDFFRVgZhni3ThwqNTNn5MR3XPrq6tv91852XVJ",
  "key25": "5wysEiF1JtehR1ThatnXAZtzDTx2Bh8nnLBi6zjRqWg1CWvo8RiUanCccjfk28FSqddp1M9VKRQvLq2WLtgkztF7",
  "key26": "2YfMEeHHENMTxEQXU5rY8ACAcY8NKRAUqFnyn38HNMbjENqVPWBEYe7cXkF4XupDnzkhzptNJygtdyRpohr945fx",
  "key27": "5aLSXiV4mtZKHFPshoeewTxMyxi7mQN8gxNsLU23RS5siNe8BhtYMgwPkX1kin1ekT7kgvAM4jbcd8TVQzUnKy9m",
  "key28": "4t6Vu4ZC6e9BzEcgHNRgUKmhCNZVa9fKigs8qX15MVT55oxyxgy5n2geu2bvfME79xcGKABs1AzLcfqDUbYvx2f1"
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
