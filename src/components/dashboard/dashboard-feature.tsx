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
    "5PY51iFNLFkxZe8dSHVDPyPqWv9MqV87Bx4ZCTE3E9AGTSWwzRD3yTmKk47DovXnb1C1Xjzuy2ziH6J5isPxBWMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqV2yu44HWsS6CURyfuLqkhAWyf2oKr6ynASbViqqtHdYpc77v4ruUrCiApZkz3h2Pp1NmRDNvf9eb1iSsRRKEy",
  "key1": "27HPwdcEWAa9CHYFSA8Cmvfrz4MnKxoabsYoq7de3tZbFua1WzVbDcurfYZTarxQBjoCpfXWd6vcqwVLLLGoyvsv",
  "key2": "4DrBpzPZ1cXKU8yXFzQSoezcnEcCNiiPtphtFVrPHzYAYfkaEvzxLFJiF15ZaPrNDqtfQYuoqH2ryiDafX3BcyTT",
  "key3": "2sjthcqhj7xBTtq1C8DMYkYwNL7vfoCZo2o8TFBmg2dyyc5YUyziGjuYwucg5RuPJVzcnn2yh8FLVtQQ2aezYZDv",
  "key4": "5Nbsr8oJwGe9LCbFcqCHDEMrj2gSLKv3hcgEKACbJ7KKqrDvkjiwFhUstm1ntW6A3KQBCBNUDi2JJMfLo8ziDVar",
  "key5": "4F6QiyvbkSbztt3vKGEgxwDvS18uEgTe4Gdh66RR8LjkjF32fun5aUXUTCAafbnHG2a6G6AQCtQVvJuHJhC5hy65",
  "key6": "4RqNr6vHonadNeW8pXsokyXU5q9xRFmoseezNdqaB4dWvLwpUfJXZvqdgGDiyuWTiFKAUaZF2Sgx6pZBc8n4XqvE",
  "key7": "3sGSxA9yd7zYVcwnPRCkxbBPwhXtFK8cSxJJNqKmH35dZ1V3EhB45eWaHemoFbmZzGhnxCtMAgPhksAdYbqjZT3c",
  "key8": "4b21Cy26651hmk9aq1gs4doSSqM3UxZrEmbh3amuBWD8Zptbsr2G86haqxL6eNfjmFCrpTVRgLpiQ4BUsuVFWJMX",
  "key9": "5Ds1a8MRgMNFskN8EkKcNb2UeNo8XhE6VdnpEFeE3guHtxs7woa4XbNjf7b7e8LVA2jCEfPvxvyPfjyCYvBY6fmy",
  "key10": "5nH6ma4x2Hj5csLeUietmviCqKEgMooCNGh2JpwmQDNoWsWy9tZTVRscbJMzkuYnbJPb6iR84Dw7u2m4z7Y8dmGK",
  "key11": "2tf9cnYX6XAJB9eVziNbREvB9zfK6wwb1WQjUqPEagSUsFWeJEPzrMDUsvomKoemZD7Y4Xgs9eKjTenvHb119HDs",
  "key12": "21DMd6ZNKkL1YEnu9D4miiQB9RGwuRXRZZPXQSvsSJmr5PKUv6ShGSxVSyWGEft9hCksensnitx5piR4XMwANE6x",
  "key13": "3FpFJWByYnsqRLHjGoAYWdQTPYPRsdum8rLDjmN3NfCY62NzdjDW6MJnkU8zaXvcnbHMY6wnPP6cCAoRcQwuWmVo",
  "key14": "4vH3PoHWt1r5PmkFmzFWfxgJbx8f1seVPnYVJ5wDhw2EmDWtSJDAJgHMe2aVusaDH5b93ZWAWhHk6bDoDrqKKgMK",
  "key15": "4HTQzzGHTmwRWzaQdqyQ5mGhqjib8vurnCWo8sqtLu23Bkz8tFSYGkoxge4tCSATnwofPT4q4JCZVw37V11vtod",
  "key16": "44rRgPKq5gXwQ116PQNnPYhU5h5gPfnfMGaTieuSKDxvBFj1dRiSjcv1DT2sBkPiZhCnMGC2c3B4ZXYJdu7bzAA6",
  "key17": "5KzBq1n8JPY4LGhrr7YKuzMonHi3936KYTRjHoR7AZtugXxDiRcDL84uomGDvjjLgGJ4Qq24JC3EHTcVW4UeVqKL",
  "key18": "38EfoayxYeun1ctB8f4yggztx16X4xPZ4CcJ4kcM89hv5Y7ixaRR7pLAR6uXXxPBZHMjjNswTizVaLN3NnT6W5ox",
  "key19": "3J2fsQmsarfXF79ox5zd5q21HN4hJV8LrMUsyrcJHAAiDR2ACoRh9q4j6T1YJzKhZSGiG93CngwLML7CnRCR2PXg",
  "key20": "2CAu92Qd6LMCG2GwW9FJH8tSKRAKVni9oCW5Jkxtq5cKzqDJAzrLCTLQKV226XihPbrSXqvAANCkNZQRCLaDLEQS",
  "key21": "4pg3yd8wQjT8QUtr6eeUsT2qXrLB9NpoJdCcqQRyZ8peqxqfnQpshUaHQ3dEFR5PbeGEhBHoDgSWwogYcLSaC872",
  "key22": "3tjZyG2GdxKX7DgAEduscw7Rqzp6uwrqS2KEMBcuACN78dho4HUStrQf47DbhYPxyxPPvm9RYai2r4u4f4XW25nG",
  "key23": "2CkDyQ17zgscricrkR8CxikYQ2j54aTFcpAY2XzhTjRE2DrDUHdPSQe33eu7LrmHPmkYuXRpDJvjXCaEKrFPx6pM",
  "key24": "3738TarpoJzdzAVavuaSkZW8bZjDXwQeE7YceQ4pksW1udVZ8GEEQAt3E2C2JGLxTdh8qKocYeLv4oa17XZUgLqo",
  "key25": "2Hf92ySzLxEmrYbPEk8Byip17uq2Sasq816diCoj71cQb4ymfus2m1umigbqK16hNxj2nzSdkkPx29AH5SRZhytf",
  "key26": "5fainQqbZvNHvJpw63KoC8tHL6jkwatYeX2UxCc9M3FFZHushAXpcNmauW1haSBqQcmQQozcTyisXQjvhajEStLL",
  "key27": "2bmXaArbiF5PvMk8rkYivUKCNn9qXGGbH6amXbrtPU3i2aqsiezUuRL2j4EH2HQK9htnrCeEogpQkZu5tt6bZPU2",
  "key28": "29YnwhdBio2Q37xJEL34dsH1QfTyicmrw1qAwNfhT2V1ZMBBWGVryTfTTZfKtHQiEva9ygfnVKjqG8ZRxwUxMyoY",
  "key29": "2KH318hUf9YYTN2DrRffzjtmwTmYKpu5Jvoq7WSHgKLTG5f1vQV83MiHWEyyfHmF8UfpGYq255KVEjMFaBgTjznE",
  "key30": "3uMM3fBgup1z6mhg6rAVLBEPGYmR9D5q6VzDJ1SZN1XqariMTLENbRo3PLhrDWB9TfU411dLUPc7xrWhCX6usjkq",
  "key31": "4xP3csVM5LLcxRTmzVHJejCcmeawWBcyjYeXwDS1vxMNs3mZyM26Q8TrrLaNoShxJgEbPvBzm7NgdEvsgSTSua5B",
  "key32": "5rQTp5Whj21X1VVUdyQYKn8ARgbUXKdyMzc3xX6AVrLSvVLeVfrE1E4uLy4aVuuLSMjHHPEpDAoFxAFovuALXBL8"
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
