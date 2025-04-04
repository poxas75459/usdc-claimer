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
    "3pFpuG7ovE3JzYpGzmAronbS6PWqRxhWdM2wBv3upTZV1dQk7b4me2VeWcVShqhJ1L2oM5Ukrt1a8mCNFnK1TShV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28etbdjLusoK29gNXZiBocwXbQGscoxqocoaPsp85rzPmznWJzn1dp1ok4YdTYirP6YvhVp4ENDaXukVodTdQvxc",
  "key1": "36aYwQkos146Ni6dBZiDQp7hNvBe9Ahg4w4axK5LRxrxyDQXFiraFxd9mppV3sFJSWrQVru1dVXXUpJEtQp14nXY",
  "key2": "3Gj44FuWuSfhrAfZCFJ3PUFXjWfQvEvmZNdGYAbfr3ShXaZbHgnF2XjU8NF3mragLvP2LKzfahCtDLoUhop5j9D1",
  "key3": "jyRxi2DMTs55R1LyygoryfQdDaRLUHZhccxaQHG9zZXeumWP3BhMXDPRxYU5G4KivQbLJiN7gQo9A9wZ1mGkmLG",
  "key4": "4GX55oepmNB1ADcmtBDTrCgMXU2BUC95Sw99gjj5evUUYLgH8embVwLR2HE2DqhTdb8rNfK3hQxkcnhLXq5nx99D",
  "key5": "YkkqfwCcsxcNHSAQvgJ4DGHrWwzMXqChDsf5JZzucsM4vgzaHWDoLJ6HJkhDEpmgC3C8Jx69xSNvGkJ6xERwQvD",
  "key6": "61kM2eUrX7hs6BZhwCiACBvhQu3ztRLdmPUPm1PVgVanX1kPMV1YUZvHT52NDzqoV4gBUH9WzRforuzztdrmrxa",
  "key7": "33nHqaeXQND96tZigSmzsmAzJWwwRkA99mSdbYQs7x98HsYN6zp1iP2p2XtVQkY9vDZ6ysu7x7ekyphc3dofxLhb",
  "key8": "2Z7Paz8gLYKXbTqAqe13p6N3E84senorLASvN32V93D7TwLXp8ipAvGzHGxwgf8w928bLmNuNTWRbqmKnT91LZgn",
  "key9": "22wrvBytuddbX4DsY4zZ4xjd46eNVcXYszwWiHVGwSwzVh6rgo7tZTg3kzYyRWngH853791kgHCmweZgTUdvqVJ4",
  "key10": "4JYFMVRJPh1b7DKA7r7oCXBc1E8gWdBR7YWHrqqrJMgmUHAUeh3dMsGjJiQxVi5uGZCeKMxqTbREPWA1AEDKhJkx",
  "key11": "21SEvF8uwVDtKJFKF7FQVWAZJBwJwzJqsGN8UEdToiHAqSwxQLnyNtxrHvz6TyE5PLfGKt9A6NYALS83e4LJp6aM",
  "key12": "4kpfk9mVjXvaR1a5nQpxewrkseexooXdcs5PL27KqjQcgPH6kmv7skzgpnCob2wibpYgXezGGx296krvhFbugzMq",
  "key13": "2EZaeBnz5KGKak7ytaEJnA4TiRxG6g25JTZqzEBYgeMYUsiDHzJBE7DZvMvoYUFk1z85mTB9BKWTRs5bBF2qb45t",
  "key14": "4A8tcq8nUDuTFkkvrhcZznHvCtJ4nk4MvKsRRoRkt5KFWfsuk2GqnPrz1y4e5siyNQ7Y2Fby7RoegYr5Z7YLxs1H",
  "key15": "5F3AQYPRXDmC2Enp3WdCZotGPGzSbvBvSDeBU5rsNHRpvqcpp9pxrkCqv2qDAv7MKEnRi9WEAVo9oPe3Ly2iM7dc",
  "key16": "3KGDu3oYxqZKhtqjUnJSne2Gm3rnWRQXjmANcaKPp1mpL6xKjdxqvQxXfoak7FLCXZRD3YUcAyUkRzyiTmbf5o38",
  "key17": "zs1yAHfGNSZ1oL7j7A3vwKjy1Tu8JdnEkVo4qhkF3XLAsQWz2SLdSXx7y2oyQH2PAGoc4spS1NfHJBpnipGc34z",
  "key18": "2hr6rfgYsTLZ8Anp59Jt7bg751EcULktzkniAZMzGQ4jMARJ7XC3a5ingj3rP5dAHztUjG3wgLKJzwUJrUwB4Z4z",
  "key19": "4w6EhVoQ9ZsKYeeSMLCytqWRc6eC7Q3PephnDE6Y4J6RcBcKJkQaDg6Bw1JeuNCMaJPA2bz4GVpszjC278wZ3JcQ",
  "key20": "LreiB8EjTVZ7wcfTYaipjEvS4Q3o7FJAesuxTQC1ACveiwNSaS1nCcRCcrot18qp4P5gr2z3q74Y42LQkqhXYGf",
  "key21": "3SLT4r9NPD5neaeRwsHh7r1w12gEMYHdJaoBj6VcmjZ18YkK97yJFrpDyJNNiBRmrtN1JDmDEUV1XRdMphN23tXt",
  "key22": "36UwKY8Cvihh2CoibptLBop2iRc1NJTt4VctRQH3dEBHT6SJP7tmNe3kCrCLpEF7wcfpAoLNWNAAfrurvHdvAXjJ",
  "key23": "5sYD49fehhCkSjfAV5shB3TXENYDApsJ9UJ8mdDTY7qiVBhBSLNCDoHxkb49AJUWpiCVBvb3vhzF9Grmrq72cC9B",
  "key24": "3qzmiuTnYjtaLXfAQjY7bQoevEAXrLGPgypF83cKLPQRsjXE8Q1GVQwWVXYk63vCfFUxvZHigQjdvM35ydHBkU4D",
  "key25": "2KYMDzCbH4r6ibeqeraqM6UWqu6mVHURNxxAN9unm2ASTRBo8nQXB2Du1hZHsFmzQsoedUaeKQHra5Dx6pHfsUsW"
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
