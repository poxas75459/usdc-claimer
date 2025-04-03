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
    "5BpjLV1uM4KMHoUcw2jq2WypYNEJpw4aWSYUMrpSSQeLCcK8G9mBw5BjUFrtDGLeruWjZibLZ26gimw4HA5cPWnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5azfe1tLgG3tCvSMcrUmigvVwGfJBo7qX3iP4h3pi8qF5E6jnQHJr5XbDMSuMi9XWjWNfhqUuYxxfiD3iKmUyh",
  "key1": "3jW8etEipRou6ecMwGLz1XVx7fBY9BDY7uPNXqfzuhLHqmi4AfaSe15chnPXDSgesCniRDZ6JhC53ybuFqP36xpU",
  "key2": "4VhhFHh3UyziYm8nyzYc3Qz86QBxATBYxwW9wvZFWVogQBTY4ZitkQ1Wjtnf7fgx7obEmnJQXd9KRvUMzxtAZ9cu",
  "key3": "5ieyKcCR598v4iPLA2Em2QUtE4hJuK2tMW7gSBHLkjXmixoTuM4vcoGLreuHYFi95YrPsLTQbibQzx8TFXqG8vX6",
  "key4": "6H7GdLDdXV4TV41u9cCCaeS9KCzEntNz1rorpfNayL6DEAAYW1rXyCBdbzX2EFYPxcgtQNCYnzw2NMTtDGiK5pm",
  "key5": "4mB47tTZkx5HtShr68H5D6S6f59ZmmuTGSfbM8roTabpAvxkqD6fdK3857YvWmGcqZp4xDSBmNgypS7wvPgirgak",
  "key6": "4Nn78bVQvLGbFaZsmrT2WKveU6526P5uz7aJ73JD1Vj9pRLziV7svAeQcEzQyUQ1D9DKPfonLcgXagYyTKB1zJEh",
  "key7": "3N4k7wZQ3u9YbxuA1VjqyGkcaG65bGi2v1YuaEyFtBBktYc7vs56E5Cm82scEbqHiTT6cz2z31y9XXK1M1TsAfDZ",
  "key8": "2Bnd67ALGEwp99piw6e2HhBKqMMU7qBWefFivGUBDkM1eiwzgRSEQvCFaYEVjjrc888hD4HXw1U6vaStqe8rif1X",
  "key9": "Lur1gxRmiUrnsbmYPH7yqjRLQUuc5LBMJoRzGy7Rp3VM9WkAkcL9qBgvbYh2yzk6FhM5mcJSLWakWjSHLve6utC",
  "key10": "656DCFREQduG83Mkw4SnYaikopUyG5NtM9GgvwwXbJgzWX7K74RvuHp58NpBXTeeq5Jo6zsKa9Lvd6idrwSzmvbY",
  "key11": "eSfg3LgtsrUkG9B3SsUTuXqmHhsFmUUaq7ksMwZ4rnYHs2yDWXxDciFGSGpwivv4a8eQFe2SHfMVv5CBCxPZWF2",
  "key12": "4LHbhyKaNzZEvVTQa6TAVJANt3XhBW8M2dT5BfmCKY6QVsmjgf8hyNQAEHjJAUaxE27MB5i1mzgb3raTrBigz7ey",
  "key13": "6S64AjooGAK7JCRCMyqhcXcnPpy1x5wDeqy2FTxaGqxywurEEE64vPeQHZnwqkMzPARY5kBDDovnZ9YxQX1jUuE",
  "key14": "3qFwmenDQTZ9BATaBBpKtWGm1LSX7X9BtkzJGAgDUpYvmL6nLdud4qfiUqw3nrWsR6YitSFd4gGTUKG8UtuxP3mB",
  "key15": "654N3tLQVegXcTcYrLtQW3KCBBNkbkSrZN9CqobSCFoMejN2TPuXFropMRLUqY6CBun6X1pF4ndjKoWswXwsufSY",
  "key16": "3CKQwrJVtFfvybcEimaV7duhExLhhEDDmrinzeFFXyEZEyZL95zxu1GGzT9rFUxmmvrQg9afENXcwSzk1nXfETKs",
  "key17": "Y1K2jvGdFdi3ZPosTd6TzxddxBuck6gLgjDhVXZwNP2hSvZP5SppS8KwZWDL1P3wFFGgPp7wf4FHCmamGmTsBHh",
  "key18": "VzP5TbhqNEu9JsChpTh1PoPbqFSRcVkrGFxLK3fSaw5QYtitsszmdEQCkggedBNg6nxmcnVDFxxkPGf8pjVdBA4",
  "key19": "5WH9RLvDPFaquRfAbX1hWFf2RRNuAR5mwTQGxdZPng5FJCZHujaq1xthHXT246eyicou9wxavyK7cTfTyyoaxDUv",
  "key20": "2Pr6dPFSpTGdW6zsShwps23poLr63xNa5BL2Q32W4hL1LPbUVTx84WEaAgjrE6pKfuDtca8auJaBmKnniJX5aBr2",
  "key21": "5bKpzaMrawgUEYojdPnrwXbsepDysnytVcJnDeXtaEoWYU5nN1jJGhRWkXEoy7PRzQkEWuhpvqY2DMhDv6dyoAo9",
  "key22": "3VMshmEXi4RNZLdrt7UahJuoWoYzveGT3P5o6AX1Kqc7UETYgyzdXaHKYsjv4tKo8VkqkCyopH3xBDNjSCUDDWtF",
  "key23": "A5owuGUXVGD5XhRCT53eYEXAPj2eRXJDAgpJ6xxDschsxNhfXG1fpMahmBXbeHBK9T5tnhfGy9kRfttZxmgQzhC",
  "key24": "2w19AuUHgnHjhWcjdfW63qJMxbxG4YkymiSvMwfit5Bz2X73XvceHuj1CnC1NcwkBWeJLL4bNKtyExzyMSkLZPuw",
  "key25": "5Lpa7NHxd2GGKCvedz14W82tb2oXrWV9vE2NfamWcpoK4Nassywdu3EkUSzqgmiJ6RARk7bTy7uwo3rjxBzpz66R",
  "key26": "4h1qukFx5imAK6SEUu4kiK1F83zN8Zt8xF58Ni47jYKgd2CDrFFRntvXPo1NYYZ3viktaT1SYYwQeE8REZ5dvvHQ",
  "key27": "3rGib9qXMKSXiQKPhaDPodqDEjRsZ8BbK72SaKm4vdp7iXHo98G45jkqPXv4u6VSK3pLzjMQiH7ULdPCTsGKV1LP",
  "key28": "2o7k1yubrk4n8B3gRE6XUCKef7WVr57HbKo6fK21emvZzthYeKHMkMGy9Nc8WF8bLRrSc3vq4kJ6gZMZufzMSsmS",
  "key29": "KJ9hTqmTdWWKzBQPPu1pnHGfm6ssfBvV7vv8wpfEV1Vm5wVs1vGFKgnYWNKVWYLdV23BDnATT8gTdzndHgySxkj",
  "key30": "4NwxCNQMkBUPpwNkcHYBwMF7hXXekmxXFXJ58xGgHQDV2KZMJDKjaLQeZVzq4RRpF3NYzV4xS2XBvvGuJtPkPdC7",
  "key31": "3dmAvVnZKSKapqyyCxmTkLwBMw1aDMSeneusEAaQ5YKUEYhk5ctVK5ccdFksQr4Z1FQoXf8dmDrddYcCPrm8AUcQ",
  "key32": "5jVnMkCyfapqybf1EsLGQr6MT2kyFfpZ7MKpXdsKps1x44KcsXhkb75KJpmobwzx2REEk1HdomiWwudzR8pMPo26",
  "key33": "2BpLMVDdWrpqARLFS1QdEdmDq7zhBtoZ5vsbJWDu2nqTQjcwPu2XPD5ZuCncYEvshkbC7v4vFtgVNok2cEkLCfmi",
  "key34": "2vqPGx2Yem3XLAPjpx1XJm2QJPmvwyuAqBwQQSmSJJcTkjsqiSZrFTByzo2Q4oZ7ZyT13BHF9bFh87Suqigku4jy",
  "key35": "31AFkeQ8V7Go9oJujU7XWfbnwrhBszpj8jFrBtxhThzNixbteivSqX9Hw1CD1j3B7X5gsgok3xYsYSDtqw6v4dh4",
  "key36": "BiparaFFJHc5UyFwvXhAEwURSidM2VsX8AuYdFuinUHCDbUTzgr7vh8ridcUBqS9dFAgc5JkB9ALQEcgFSyznu4",
  "key37": "3ffz5h1LjTkmJQbxAqJ6fnzMFfxKzcUfaZYZpa7iRhEqRtuGwJVvzBbW4xz7Td9rkryhbYc9HPd1jktWrLFsh51J",
  "key38": "3x5brffTY22VNC9ACt87YMGvnxE1YhDP2nWbxsrXUwPqwLRyUjgBcxxdnwhRsrS6ycM45dx6RD2CQ3m3wXFCrCHo",
  "key39": "3xPH9mSnVnVxpzM4oMqvTCZnw95DrsvjFH6RgnArPSNZtJPxLjr11BAyB9ue3cVFfa8wknj4Hvqe946g8h1tP5LC"
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
