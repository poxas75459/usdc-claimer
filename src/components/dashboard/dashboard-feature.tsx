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
    "4U5cMHNbQQVNUuYy9t8FSgRh2N1xjSXNRwMkn7SdErguwxZFCH9e1QRicNAQdZsdTLUxLraTqhvnQJtjYbhKX1o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ew9YwLPMhnhuzu2ZgNEa9GG61vavGrRy5c8Yx5XXwMHK5KNVnSc4ywbUYYmbBeQtEfXTBm6M6b1n1yVE78jYnQ6",
  "key1": "3dM171sXfM7Km6BEdppeC6BNCYuME5eR6mpY7dW8Lt642JM3ZMi62RHhsHJW1kXWALibGMi9byt65DGjuNmDT6sB",
  "key2": "4LCCXMCfyfXXnTEaQR9hSQijQcyrdYmrnyDTcEBnH6AqEmRiF2u8Lr1vxtfuPemLUkWDANserpEAouwcrN7Am9og",
  "key3": "2AhTK97Be9twt1tYG2HF5LkC1bwVDmpPq6vRahRT3PyCXXktqs3QDkooGEXmNqY3iWWivQ2ZsYMJk8msLr3yoLP6",
  "key4": "Kq3EQGoSVnrtZSNc24WiZcoAW1FrZsWMJMr4yYNP1SepozznqfHhkUDfeeXQZg23XEwxe5Z7nF367n8S17oSRyJ",
  "key5": "3P1q1bT5RZ5exVuARtnk62ZhAV1AYWdUKiMZ11mDtudqx9WwiqY7VGbmMzvuvBRSDEXTiWvJUu7q2PVS6wSeqTgF",
  "key6": "3xUShWTMYqGQLWrmseX1jXh2dvnNaWw4RezHPEx2bPtCSfHworzxDSoE1PWaUnKcRthWKbnbRRKknJi12Wkknw3c",
  "key7": "5hpbxYVxmZYfuisuRj7jFSAw2KNRQ4eaWRXM69NVEUqspTijWysuciFzjinR94SXmsShPWE1WS3oHCHAK6tPk9Xk",
  "key8": "2HtXuhdNE3jig3bvvFyEcnAC9WZpFv1qmDfo1oxcGc6a4LLj6FVpq36CeorSnPKfv4Vn6gtjpNJ8i1REVNZT8b7j",
  "key9": "y9kCENCFkk8ZFw1qP8VKA22thMbYiAsqj8WLiUdhe4td8q5zA8g1bYTnEaigjYofT1w4ufVZwoRqVoq8kuz5SXn",
  "key10": "52UK5cs6ENj5m2S2EDHQCjcVPUgorhNeRuD5a8xgWv4LmBsDLBXXhYHuBaW3QbXDYeYwVamHH52VxfPQn8786SLU",
  "key11": "28S5Y7vwvtF9NRtY6TSnaWirCkDhEBx4cyWMJ3413o1QjPyWaRmKiGok2uZdZmdijDR7PSn9pMNhAnGDNViudcdB",
  "key12": "3JWsw4oHF4aZEXjXx1pfmaD8EtFCztx1J8kaK48Hh6Lbvbu1EKH7LeAmLD2KErMzddH3tWQABwNnMSjr2ULxjLjT",
  "key13": "3EgvUeYCbA19wV7nnS7Ah8M3cfJ36ptuMaAsVkKqTTTz5Y9Bv9JZGmKwWJEvYGjXQ7yZ8kjHXeTZ2PkWh1auZb5",
  "key14": "4n94j1zYVZTbFsEuFBTUxw65q37qi5rBU6GtmM5LxaHtkDCrRRSEdPYCtaMXqmiSwzBJQmqRmaDEouaFTxiVpeZu",
  "key15": "86bR1nvQ457hTT9j3tk7BQePTgawYGCXALedbVKMHjzkidvyKcs8qkUSvrk2bHjiAaTwQyC6kP6x1dtcawRW3Hv",
  "key16": "4JtEToe56phnCppZgdF5vxY1d2HHr6T4ge8UZQ5f3UEaLcPVibRZZcQtEVdS4kJ3piRJgajWYcAWGSpWanQjnPib",
  "key17": "XdertpFWASjMmqzm2SYjz3siKA1atvw5vuHeViBE6NQfhtEXAbBSxgDdg7wbqf8H9mY48nCL9QLRpd3Q4LRZBmo",
  "key18": "2zRv4pHsp1m3xahdmj15TsX3fohh5zWbST2hB9tSZQ5DmvxnPJcKMAAZJyH8f1qzEqNByfVNBtxmUxVS79ZaNnx2",
  "key19": "3xJah27jYzdtVUrpqExZV7obNaEs23M8nPEZ3dzvsfxf8rmXNtfCQPnVDYaPZcPwNeEjgogpcCdQbzrReZYs8Yxx",
  "key20": "4Um8HMctuR5yPq7Usopv4rQZZedo98fRRWSZo46PdWVTmS8onobBaPn85opA3P8XZvMvfEd3sviHioi8AR83hDcz",
  "key21": "S2QaRYNWGoTUSiLtXCo41UFVGDiXvj8f39VTis4Be1KUfr7CdCq44NDiQpahnj92CUdozE2Q5fSSPFjWSaZwVzf",
  "key22": "K2SMW9b7gFu43WhCtHiXqSABvdcYjRRAuRTKmmEnJak1AFvdcB35FonQf7eUpJwgG7Pncagcd1fuSx29ZtrxXqs",
  "key23": "47hbY2w3cvqd1ipy6zYMGz1maMdmUmpJjreDaVcgR19ATeetkU3CBvwuCjZXhk6JUDEvPacWdVfNH32J43suxor8",
  "key24": "4LymT4WHvVv1T2EwCiLUoaTUBoGiaviLQfGouadVBLYE4NxhRMvs5mkQ1q7y6nUxnzBTR7p4T21QiaGuqUVJ6YYf",
  "key25": "3ARbWN3XuuTT9nfCgo51Yvdm1iRPj51uirBoghyqAfbLwAd7z84zgtZKsWJFiYo6ReJPewzrkhxSRyiE2qD33Jh2",
  "key26": "4hehHbtHoCZ5XFzKa9HKtgghPPUkQSJthRC7e2eX77LYFBjnCvXZhmmFmnJqinDLJVZnLcw6d84KxcBunbX2Qz9G",
  "key27": "2AFS8cjdWM42HgXFaRcDWNb8h1Rj4Yb14crUxAqXW6ei7V3Tb5wNBb1t14KkXWom3cVvAKcqRijxVZW8S8J8KnxP",
  "key28": "3JXkK6t5pH3EjHAHo6ZYHi43ouM3zoispqXXMhTihqWd8tZxMFeegQPMBcD3KvPoPRkLNb3BwdPJFHxkfDknVeu2",
  "key29": "5SPVqRsmpatppf4wtBmNx5MCjdzpUdmNTehynY17i6fja6uYjM5jc6oScP8K5BJC8qk6n3QKnMh3uVNA398dq6MT",
  "key30": "3c9W2KZUNt4XeEDHwXXG1bRRX5jkVfc2WsAXDfygU1VEApdAfeb38LjeosaDqfd56nFuT62bmHY6DB5pcwTa9XKo",
  "key31": "3UHCanihiSAmYvUT412tpQZZL2waGQXddGC6EiEoSxZdEZfCNDmbpCoR4PfsABNutb6WtKT2kiS6aHYTCshCDmN",
  "key32": "2S6Rf1McKGKoP5XsAww9ykFL2YG4xgKYFjSBr74Pz1RJUN7QWJtNPb3R2c6Ghn9QXVH73wwYxzjCEcmAFR9PKbwc",
  "key33": "36sjVFUtwZCBqykjcBucFrFXedVobFgzg2kSTivAPNZkTk7JLn1TNzEC4m57en6BSD9wzMfA94MtbK8hUB9TUKtN",
  "key34": "2TwSRRDDis9yX1mj3F4d8aZPTX8mEjrxnuDEVNMe8wexLmZKuozM6vYndaTsPkqRxDhMawwGBCzLHoDPMAa2QbfV"
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
