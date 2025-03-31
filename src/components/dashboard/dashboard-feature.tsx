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
    "5JY37ejhmD1EichfEky3RjUM6moZ8nxRaZqDYD8Xh7coLfduJx7py8Pkd8wYpNCx2DKhp8ohAdhniUjRs8wueRYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KTfg38vw5UZZ3uBLFPZy1hDR3yUmu1qhK9C9zqpPganVfmGnY7g5uvvruPNQe6FgRizRC5wGa83tVQoiSYhNE7n",
  "key1": "V8FNenS5V6ugmnbJ6R6gp5BrHgi5VPxPZbM8rr72kxyTcriCLKdxA3gaLpFTeqxzaUWvg913fMXBQh9i7mTXneA",
  "key2": "4LK1qqZQZ1e9VykXEGmRuYaGPDNa9QZab4zrAPsA73a4y4FncrFyHt1xcwMtEXL5MkoRoaYX7uioEcYiZjoBEWLV",
  "key3": "33CRmYkMgwGCjHdFRZABv7wRGNwbMQmSxsgJiwNtbWKcfqAtpQAwQUNKXaMJEEvoFJzk5gexFwuUqgLXP7UfnX8J",
  "key4": "YjeqZ2LMbNDcZrR5LWf6EpxRF4hhiX3Sn82hHLR5W4GNrkwYSKwsZXFXx6bZHXJ88bPNR7yNbm34aQMYXTENbco",
  "key5": "hZSemftS6pzuA6tFggyKmHX7R2UDuK4heNyBqjrD3A9VqtXjASp4Fi9pPCq8fyRZTdBfx8zVs1qR65jKwihSkZW",
  "key6": "38A17m43QPkJJAmWtSafuoypV8EZZFUWkksrHBM1ZBFZrhgUnUwim6eZH3ECu4fEtye3ALivCdKTJ7UU4EhKSzTq",
  "key7": "3WeGEiLuUdPETfaCPHCy2FjrtgJWLhNZk2kuUUhvzhecjyAVSRMQF29dY5XXzyKA6LwMmRkUAub9gRTnzsVurF6s",
  "key8": "3yDqnWENRwcTvkZePs5HnVFRcaST6xHDbsc2wn7CmA6cgwfpoG1d1Mw12hdLB1J71zNos3YmE1PhwoURhn8W7J3F",
  "key9": "5HceZ8CECxt1PbCMjco5uBvjPkkEnWuYfqhcUvUHTjwsxio2Fc6PCqNtAD2ETq923ABnXmApf4pH2vPZt6srSUWs",
  "key10": "3QvXJEW2SaNmssqPj4JfJEcjBhuzEEF2dXMHs1rF7UqE8WBVNwQoRZGE8SLCq3nb1hHNNY4nirgFQ4WQApFFDuga",
  "key11": "3L83jLuciJsNHbmz2DFa1dms4DAH1ygWdXTNe7AgDtAM1JC7xQKtnpeP1KpkKScUv58CnfLSnZFc82w8sX3UVb2M",
  "key12": "5w5p9PovgUj3EmN6aMKpg4YjPTH4xvJ4gDDmgVvvBH3APGGq9NHpwVFj5n6Trf15UfE8aLsFirJUZdNK3MpNnDKQ",
  "key13": "4gxgkKMHBqY4Z8ebq6hJiegVrX1Yrha12nKZwziQyb58s4q7FzQHq2PpwuifCqg7csLn7StLAJCmsCpdWzUuCWNH",
  "key14": "psMa2b1Z4fY8sXWy8UmBwgk5bJm4xtASzH3JkdSSL34CtXXFCqgxWEGv9otKXs1MRYeggi7qA6miJo9xjLLWBQh",
  "key15": "2Pr82f5KvmYmHSi98uiNWJjXjTmJxrGqXyEacFDsEeJCtd4idVD2wqEmAVsFcHmf8KCBENKajxHThPoRrfDCNyVT",
  "key16": "2jz7Zwwh5qTKvpqKADZ15HjYFQrBTPHy7QWC59wP3tuuNopp6nQr2eE9cFzqgVdLjUqdsG1hLwK5tZ9Gxj21ApcA",
  "key17": "uvn39TRov2d7EVc4mhLSjWi3CgDpkUtpiJMNZCqiyBFkKreGbg8bvXuTgzHcP9gq5kYvXZjzvicDRUbWK9WcFUp",
  "key18": "4KwHrd8BdyvSd6F9KHrBx2TZDo1iKbqurbJWMfixxzcC7XhmehtAb3qbmPSs22fqCUxutpS2i2Ku3iq4xhL3HsMt",
  "key19": "2AZ2D6u4tjLZTPxCLiwhWJ7ufpSe3qaxKSMoVKVZjnshdRoRpprTPycZbdmxUKm5MuCbQvtZAk5G7w6Ktqtg492",
  "key20": "5B7fzNgoxaeHssEofW2vAHj8HMkyKeD5SvrUPnUd7JAW1Dy7rEkPqx6595LyoUWX8zFT5V8Ccv8Yi1ZmCVo22ap5",
  "key21": "2qxtLixZtdgGS8Hm8FNW9o5i7cz5Vn3kE2Qpeb751Wgy9jbsYrxBYkZMD9NAfyXWMT5Ajfimi5CWpF89zLmijgoT",
  "key22": "26ixMHhXJGXDhQRVvNieHnGxvCC3vrseHZufJNpfkcBTB3KECaDZkgQKC7JzwwgqWhCd1v5FfozHmf1M5pZA6qL4",
  "key23": "42949hokCtydpqryyFuzhDa4r2P21v3j5WVuwwYjZVJqfThxdijVcfWKGyf2fHcFpx6CLQiqj5WahceFLvKYQ77E",
  "key24": "2JvJs6V997bqJ587nkeXVYyEjsk4m25XajXZTC3qMngB8887UsXv41tTu5e1DMdhBAPoXirrRyeuEYqkVQwbhQFV",
  "key25": "5b8UPLXypDJjx2cMGU7MZtBTL6bZGHdyU9gphLEQFfYxPfUXRJps8Hgvmv3yTkdFsgPYNJ5TCBpQr5syZtBZW2xE",
  "key26": "2D9qjeTt7wr76PmKNMKHcspM44HFVabgtjF83ojT7B8V3iKABYDkXLJj8ddvQX5aQX8f5w8apVQk6nyxB9d9K7w3",
  "key27": "25N3YQMo63W91tGbAPfzZep9uafgrkAcHHPWbapx5YuqmjYw6xJWCv5kYRWAJaUjkuJhwNQcKxrN2iR6Juachd6t",
  "key28": "2oyEE67UDejJp9M2iT8Z6FEp2gn9zhGtwqt8HzeD4TtLDMfqbC3NU58riEYtk65wC43iaaNxXnZ2iJ3weaZvLzaF",
  "key29": "G52NW8RgPLioHRgbsFc7EDx3D2pXxtH1WfCVV43vBPRD9hku1B2zD4CQq1BxzyhnWTqBSMeudPxAjcH27NMLmEc"
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
