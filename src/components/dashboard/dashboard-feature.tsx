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
    "5SJNxcfr1SfZxPDbdRiBjcSTfMqzB9JA922AWi6orukU5tSQdxizyWMk4uRo2E96uwgAbqsxhu9v87kVUFp3EUtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABqVQPvdXbBNWMsLkTFHb2rVh3WLBYdqzpzZxWp5YdM6i65LdFBuvYMEginqs5WT6sLdHWapUGu2AiTTatQ1CFU",
  "key1": "gYABesBYYYuA7gmwEXGPgZw37JGfh6BxPoB7qt9ae5ksNdPLKESPreKFbrEwhG96iVUR1AeFtFhowjcZF4SP7Nf",
  "key2": "431AMAtg6uJDXUKMVdN8t9zx8cZtnLZ6PBkz4goDs2s2Smp9bgtDKvxvEYTv1Um7h2gcPtngGMj5qbpRNHJzF5fu",
  "key3": "4Hv7AQSXPhrpXH5gwvo4iEnrcEUpuE1P6GoRisYy598BthB5jPGRYmHmhSKeBiwgXLxgVfDF6RxwARAk3qXLqCLS",
  "key4": "3FHwPrZ9q4qQMswP2dG1f4eBezgzZj6du2yNR85fFtEvNNKnB8k3ZPwFuLkFWWuwzzPLo67otLrkQjQLiAgh9dzb",
  "key5": "38GMgze3k3PT2vkWLzMJVaUFEe3doh9MZVaQdiRdZizcoBNPVAgnEf9i5Vd3Co1jbAEfGgQkvHTDW9ELEwMcfbUE",
  "key6": "2YLxQcSqgXHhezowyp5qgQZ6pSt9ykRnCr1dGcohgw311mR6Dg2DXzqPTHLMRmvTVVuofS33d35yAHsh2yqKog1t",
  "key7": "5DBn3dccyvxpUtCNJUugDmVDhXLpkAZND9ttuqouRMrW2VEj97CobJfVXbL6xzcdzCDgfbProUG2peWiRJHkBVdT",
  "key8": "5yidK26Z2fk6YhJGh6WmQG5prKA3rHGrAKTzsZsZRBwsGxyvvpERFuifbLuJ5D5Bkbw6epD1vpsAn8CbRN28crZx",
  "key9": "6418LjKW2DW2pv7CZ2eeQAGqC58wujH99uhnSZeF72sNT8uhdHsATRhiUQVsEtd1DQ1Vc6qPSoCUXRUcdwNqjsxN",
  "key10": "4gCj5xgxuLwDiVdJXJKHrjQp38b1ih2xxTgTrkV9N4NRDUeiBCHai1HDjPsztP7oa8XAzLb6j73FQCJfnmdABoU8",
  "key11": "hBbhQWaFUUVAgdK6KHT6ikTQY37r8FQV9h9d4wRkEntj1zMvnjwhP37fum9peegwTVYsMYCcCrvsyiPqhW87w8L",
  "key12": "33wFM9n6PBnYaPddo4Fv2a8ZPcq6TTgZJBuNsmXCcVywDnat26Mzrf41eFFKUopWewNWey6M7kFs9fK2LFL8zgFp",
  "key13": "2t4X8fwC3mDSkx6cEngMTXkXW6MaxevR5HCaSDoZqojEEoF4JYtMCTdQWsqvDg6n64NiGAacJATziiNLFqjDQrS4",
  "key14": "65xtgFG1PX8FBdWMrZAoBiFQiRTpoo8oo1mk9i61ipDukuVnYDUbHBt1N8HemdTwdk6VucUhYV34Zf3T5gz88d77",
  "key15": "2jSW5V11NeiVeTtBE5eGoRVR1MpuVpEij9ZJEQCh8zC4AWVLyNFE6dEMmK8D7fHujewwDqSQRVJuYTUUUB6bsuPk",
  "key16": "4Ghv2wgTMkqedjaMqdKZQvszLM4e79QGWspHGTMpx8xP4oua9NFfuQ6nfNs5ostNv4K6vCXqhQdWQSyzgpVT8v3F",
  "key17": "4c3MQYbmJ9uq7VjWMkG5rspNbcyzPthqyjH1vAGDegu2Sd2NrWkRPhJQnxabRDjW1tgUzmCx2VLJU2x6xtjHfJo1",
  "key18": "3C1PVXVkBsV7z9x9fHF82xqW8jD6MunAoE82SnxED5z6udjWYYMHAV6jLu6cVRgkYmMh1LKcskU8BBux7AsaayKE",
  "key19": "RWMmwAnr28Sx9AK4JJY2YLDFRBsb9SoQ9CuKyfBe1hzihfGF1cSG5wtASSPNwt3FR9j9E4AkEjXW7XuNvw1iYgw",
  "key20": "2PoRZ9KxiUABqESRxoNJA8jcKtShZyUTWbLpC7c3oTeQZEuPuGLyZBqDFesHcAAakhc2akrDDAc3xi1ZRD3iatb2",
  "key21": "3Qp9CqbGz5Y2NuaPoX7rjtwDKcM5ZDjhPc3tWAjWX9sdjeczeW4MPu7vvHTqFP3gBJVa5f83fccgRVUtVnUJhr9P",
  "key22": "5m526H6eJz5KknabWMPkRaA5ancYdFwFXmgWfVjvx8TU6Zxx1oEX2LTgasGQZpB6YkmzLiwTySVUAJB8tF3pUoi",
  "key23": "5n9iynCUs5xHw1AemoFouTn7m2T6H58pYSJrxEUN7Cqttvpup39DcuM5EgKJxYTMP3EkaNt2Zokxsd88GMcCrmEj",
  "key24": "42Xg6wo6Z1A7hZNG3NpYPnuXBY1RCiNuL4eqbieNzqLUrXzSJHvjzHm4r3WkceSjvqoSgJofPjo1kmXUsmh6fsTZ",
  "key25": "2cEKWX3DnDfkzt21d5Zv7XkXWQbGyu8NooNuLbsnEhajubjJkZRycXFUvVNRwMC8P6e6NkdhqkWQbP9D6RkQS9Ys",
  "key26": "37pexFJFF5HAKjpGbrM5kXgjEd2PTzBx6BZEoZC3jW7A8Lfy6AfGvBefTxytHPZBob1vLxE72iiue4c9VcpSdXoi",
  "key27": "62mrZBfQozUkqbbL8FSUT97S7NAfGvype9qnqVi9Jry9oiDLf23YeqQzSxH7r86t4y7duWxQbjBra4CqdF7NhFe"
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
