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
    "41StsUwv8zCYHoaYGznrVMYnFFVDgJ1qpjWkaGtzeNPL9LrxAKRaJ3fJnf8fK7kX4djffoMCtaM1mn49hdF95NNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUhToAYQTaCes93EZpaWmKtHvxRqRkSXR4kYTs4i9rbwrCcNxXxQAjjq9iPinSvMXwxJ8mDuAEs9UxEySdbcPwC",
  "key1": "4t3ps8DpX9sQcdR7E1fuNp2X1L2Cb35ec1xHzt1tuBMEz8wHEq3ikfd223vNMoVdgYPKwFPpV5xkiqpaRSn2GvKm",
  "key2": "LkR966gjZWe5A39FemYd4WkCY5rhzExnsgW12Rpd3TZZiLcvdmN5JiboUmQzdo5H8rxnEVQhFKK8XXLJnvYz5b5",
  "key3": "5MSsChUFD1qxd4hBgKfBunaBFn3KDDArUdNQyeftANC6dY35HtvK4x8vKxza22De32kSQ5oNqYdfRfCA9pzAqAHz",
  "key4": "aXpaKyn88rJNe6APp9WCoutKfbY3GanDWh852Ziu5GXHwma3NsVaXh9E53bz8CudLpQ7taMZdYAnVG4n7qpmuFq",
  "key5": "2oEKqNn6rctfVfiUZMucwxbWX3SQeCpkmFg1VcMsGyoXnJStmDF4aArZVdBVxzL9p5FmpHsZJZRMU5Zzkj34vmWq",
  "key6": "JkQ3Uu1pnVMRRTNbZA7yTDWdNQZhdQL8YXTWsXjPx3XpbTJzg6s7qqi4D9nf5TihShhfA81dFHc6t5BV9bL8qX4",
  "key7": "4hxd5QBXp1J5imJeCL1yX4ahfFxNm4QYaeLep39oeBzZ86DT5Hs5isjYTvFoXBgLdCPveijk1GeXZQxcEk1BPBG4",
  "key8": "7h5wU1x38cGUA9KQxkmjuNFunUZqvNPCr9jrJ7qW3uZ7CJqaWyUARXqfDjp24WLr8n3RzSjJ5qwNFvADiEX4ym3",
  "key9": "5nef4X9utL7HadpR1QdP6SVAeYFSoShgEFAq647pNVo37CqDLvckVv9R48eVBUAZpMoW2GjdH8MVrZELPDJTrsyQ",
  "key10": "qyrTb1gNjqdJyva3NFsbercCCaJfPJvGN5Mbm8BmDCX5TsN6REVWURxs2Ax9LSyfj6yJpZ31SWm4wZt2CrhfJSv",
  "key11": "4TSrw3BmSwrmdJr6e3MRfTkm1D34j2dVt6DZWp8TNUB3Ny3TebhLzCQvf2jngY8zwFRAgEoiMTLfJmgcp2iLjDzb",
  "key12": "3aNgCaqpX6cQSTHfkXsMyF3h12pEr65xdvFrn78S1cKCY5WXauBmjnta5vWWx4xcZqt5JaxYundbs6r6aKm9218u",
  "key13": "2L2z61iDEy29cSskeUzNp8agrAkdma4aS8TEyaG7mVyJHcE1NrDs6XEpmYKwwUnpnTrFQAobiR5BRzwSjzdF7CMC",
  "key14": "3WHADEhz3ghPsTzQg3orhF1DDtPruZHXYZLFQqwQ33g54DXhkYauLWs4EF2jVaquQ7RHkzX7wNiCD37FUp8gGDPV",
  "key15": "yNYujgeMakWWrp1kxpYbG1LxA3GbyT7whn1ShyXcg4F3VJriGvqLoNJTGdadD3NE9t65eWqQyTyibYTiQgta7jR",
  "key16": "2yWnPKb1zT1qP5cRmXd8aoZHJ7Pq39eFr2WaDWjCb1t198MZxAA1RQBNpvwfPLNZyaKYnywy3MobZWVpC4PLDKF4",
  "key17": "3iPSWKVNdAnEDEjdvuw46hh867kGy2iGYgZNGtujxHanniaWDrYefbXk7KbojnLTocsRs3di6nB6ygptExT3uMgb",
  "key18": "34NfkfEf8htZZh8LaLHuk3nQzxpkjA2AioRU2mhEYb8QZFUw25b39TtkUzBQgo93QQrF8RS8jvDozZzWBcJiY6zG",
  "key19": "4Qudp1NwK5wz68a1kTnEvSWUB1fHTLZ288mWT85bfZxahyJQcNNdwRby7eeZJsrYMyFrbSkAb17hXTsvRJP7LfJo",
  "key20": "4ZXzjCWnoqK8X5HGXCiNp4TTJRwCmx8xFzM1xMg9YKw8nS9gQswXhtBJWFhZed9GfkcTT7RRZTCQMdFJDDBxY9ha",
  "key21": "5ujfXWN24WbLGVHoeC3DB7T6mzvcSc2bYthZ1XHf46McQ1gtwh8TbZSrNjyYx4XMjCYrW7WAAwuPziu3iWjw2RHD",
  "key22": "3K4mGKctdLBsBjShF1jYui4BETce4nmYU2TzM71W1jc4oqLTA4V5r6whqcKm7EqdBSBkkiDhrYM6xNVNq6Zj7dvW",
  "key23": "5xzVNL62rLiq18kC5CLYDKZPEekJ4eKRVazfvhpbJC597godzv4psb1y37KuhWBMAXMxJJ2iEjxBQz7R9HEs3r7h",
  "key24": "YcjxRcwhingcYfcw5qwF7UKawsY2PZVwA8nR2Ra5z645c8EYaq8bCaZZeTSmoR9EH3LBCsT4rDyj1So2zaUX5yV",
  "key25": "55MVHyVA9aJC6GMwX6k6o2uqBDYmRyvRLnurxd4QvZtUVCnzhsUG7kwqaUJtnzmez1FW2VcUSJmhjzEW384XvWit",
  "key26": "5ubRoBYhkjr8FTzVySiXbiEQCs9stPwgFCbNzVLGkFnpACkbswwHhWRU8NXGCarQvTAGKrYkk68HrsUd9gc7ufLY",
  "key27": "tCqF2cvH1JzKqVQsXXumkqtumjGeMMoRRWiWNyJAGkr1fFFwaAdF611KygumB3oFuufJX4g6DDd7Mo6egwaWZag",
  "key28": "52hMMxsqJVJqwqXoUJb2CLBx5Q9EP6EzbZF4Bu5AhQpLmmWKZP7cqeb8UTNee3k2LwMMNyT4udQTbBkoKXYJhpba",
  "key29": "53EMMNX2fymjCaBpgjwvvsK7EAHhB5NNwkpM21ME3mFpC2c631nJu4sEWzNdSrCzek85RPzgBVp8vuCRr4zh2e4Q",
  "key30": "muHiL15gjX48pUzH6ryZbgjyJXihvdHiJQxKMb8jARG6hKKx4romuHRb6mmxxtadCVfwDAXTrEMwVCnEWJMXB4Q",
  "key31": "4HQMN3PxsGCmB796VEN8F389MKoLwbSXxpwVPTXidod9TExQDiLbV2N4d65vTFyFXdJAyKWn9qQEB7Zz4ntNMNZD",
  "key32": "3GfbxKrFCDsTZTZGfyygZ2pyhK6bWZYFti52g2jCSzDjzRCWrVFcvz5reDXDqnmP56DEC4FNZDGgF63HxwSDEdLb",
  "key33": "5XRWoPbCGqQWjCcLuuepi4MK4V8xjJ96HVAD1CYJ8Qscsc1uVntLuGw7bPx2xEPjjFrcz98YQ3DYyAqPC1QTS3by",
  "key34": "51aj9r6hNivX3oyhwSjAvWvW8sYwrQyWmdzJq5iua2BMy2StRfNatpxStrJ6DSMVvHJKoXBiiYB9sPUPFwJG4eUz",
  "key35": "33z2P2pVjNG8oKB449cDLhWq1BrZZpsiCF34qpgkr1836J7i2gq8dfr72QJo59wKRQQ814BsDyeppjBCygoRqJij",
  "key36": "34YFuLf2HMhRymPA8YB5N6LkCPbX8sNohWkUcXt6BgSxvNz2RpV5zdrki9B5E1e7DtZhhbvczPvpTdqcPjHgdKAz",
  "key37": "3uCPce36Fc2Xj7gMVPPGfhMfEZMNreG1Phr2xvpxHaARuT5PJvoPNLzXrW8ApbVHJinJncjiSvHGGnQdHefUpB3L",
  "key38": "2jGg9KD5DQJUfSZZTZbRjSniRVFhsfWv4iwec7DxY8G3hLcbyYE2G2iw72xnYs1T5osjeYduuNd9Sq6HZ4bcU7jQ",
  "key39": "4nDQSCtL8zgHFL9j1BjvtBNbqZJLDP4wBodB5qFTQUyVin8n3uiRf9KFJV3vYLLrb8K5TNwp3dJmjKiSdKPBkQoU",
  "key40": "haf8oD912tqAQXj6px8j2GDbhs2QuppHwLAgvtP8N52yueQpdnXSRdCnRjHVCM27KeHrzMtf3Wc6SKTAgW2a6YE",
  "key41": "37hrZp1h6H16p3bMbNZzLF1aLs1NVpBKD4njCAw7tBKzwrF732M3L6mefTtj8XUoy254yLM5v2wPd8f9LWsxKb2C",
  "key42": "5M3EPJ1VAHKPPEWCp1Ph9wDrisztXmojNSPmYfsnhBF5nMf5tN8sVSyJvSra8PkwzAwXiYCsa7BuixSJFkkwCcUu",
  "key43": "4ABqLKJvu8EzoxWffu9e4YrHvKabY1XYutTLtzco7oGoihEYWKKVHMKTirpP2YLP5ApFdsQwDDxjE9vWZmbxznt1",
  "key44": "3KY841keh5fKXEYCHA6ZFP3aasQMqW5wTRS8oGXXHu2rrsTCMrZ6YsxbWbMX3hqPNp3hiVjdRcaXjztdGhnnj4wD",
  "key45": "53hm6VoBHewA72eZx8WX7CRvpDHwPX6JScwQTUeaypyEaYsczQRVmEKK1YEuHsL2UqpU16hhgyCG2WKWo3uAS6Sv",
  "key46": "2wjJDpz4FUFN5wQPdUYjZimXKUddkXN7bYG1MuNzhx4RTg3xPBcQjzwgFmjyHTvMq6NNyuw8bYfYXeuEoD7PE4q9"
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
