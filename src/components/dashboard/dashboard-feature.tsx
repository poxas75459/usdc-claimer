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
    "3Ee4jjrwi7ESBpqR7bynxwbnodHw4CEmJS6dTCXRQ92FueUBeUN6deQqDdk4MNdH3hxXuVGjcXwGa26ZVGehgcoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wqr2UgBjXjPDGhbB3UDeqooSdV64fNqxME3qARnnvihF8wztc2VhFSMZ9J2cq9Sj9GVjZHvmbergcBZsv4JW5NS",
  "key1": "37BGogxKuNNKSggUa2P8vGWEABhv776Adsd6zzTi4r6BdHCfWz8evAMy4dBoraM1GuCnPaHEpixCx699aPb4Fr2a",
  "key2": "MpTYNeLaP9gXr1At4uu8YvsRG1VGeJm4sKkNQAWPrQeqTji6MK3M1Ppj8DynTD8B8yWP2dccanbPFpyjWDE4vui",
  "key3": "4jEFGyjYBFQJvbi3Ev28mC9qtsn1uu1q47SX1XnS9uDW5tPuFMPq9tqRS3dtANfYZtPQWAodrAqxr83zN5Co39i9",
  "key4": "1cSKjSNwyTo14Eqac4wffNAp3UrsypJxj5MkBoomQU99ytTokXR5E9vXh2cKRUwZwzMX4WLPoqJjr8CE3DWzrd8",
  "key5": "4okkQ4CFo6vqBuyKj3aHfB8N55sacSyLoVivAyvVVbCajEDfrtr1493QCfnsPxCA85bFERu9LLvKpmiMun6NMN1a",
  "key6": "4kpnNDDoSpN8BsTqPQcztuBwsCkQX8zTF4qV6hiVRNEm4dZiL9vhneB6fB1hgxceXr7h8kgC4fnv3nhBRmHzsLLb",
  "key7": "4YSAv3eyAaXoAicPb4ANsapuicYXFkkqC2KQ645Akcfgs61XgG5pF57iTBczhNMi7mfv7zZtfwt1y4KdgTm5w8X5",
  "key8": "5FHpdevWsd4MbwnmrNie38vJVZZqXwwJBnzDrdwNu7RBYPua89CrDgL6CuxzqKCvo69RUp9kUK8sjWZtamBUCinY",
  "key9": "3xqMg1Eb4PaLBu6NGMCJX8pogeA46uyzQhoUFxCcKLvAA7ngVEqQQGgsqJ1F1Cg6tCbJP5AiSXBD3yP459z5EZSP",
  "key10": "4FpM6k2vAZbduEUKUAEtiMkfypaa58kvqd36rXjfTF3ZdXzoezDEAv82Sv8JLoKu4pD2LegAmCCJhtFztoZk4J4d",
  "key11": "4YUz3oNidiUJ2BEZ9yvnqCDRMYEWWVGSszXioY6cbaYH97EZHixfB5DUFrhqyoZhGrsFoHjAXuQnVCdQwagJTWzR",
  "key12": "8sVEGVXXrbNxtJrdCFLTKjEcXXShgcuWriRBA8dTSuvwqqJFjU7LfJAeAKwu2aXbkz2JYhg9fUN3CFLLTHPBg5z",
  "key13": "51FpN4UU9BYnd4eqoXbA7qcAcph6dpCi1beDmSYxsW6Ucddb5QvN8ACWQMZWXyfvJyTrSQp5vjXmA1JXW2HKkp4E",
  "key14": "4mQSTogWtaq62YirAqmwscoLxPHo6LBjocmZvA2yb5qJfL6cw5EL81KpJyYTQ89JEzuBxktSsr8nLYVTiUxgfWRt",
  "key15": "53FofR61s62gV3Mxz5zCxWYdUZGtu61m5iuorPSiRxeadD8HsbWP884SeNfeooWpggpVVgtPHrSUcuwC7DVLJqpm",
  "key16": "217PygMeBUDckeBSC96SSGeXLawM4hj6bkgqBY7HrzDgM6diDBP4X1gUn4DoZfSyUQ5bpDSdRprJoZYB2EHcJmYi",
  "key17": "3PGPzVpbhyKNWgV9C1EcorsuuFR1N2knzFRfb5NnLhWFYvaTxpnFo7CicyTSxs5eDrtWz1m4YqrBfSvrM7GHUvhR",
  "key18": "5SnmfVFAvsKt634XnAiGNGDq9srjxx9Qfr9hpmJxiCM6bUjBbe2PH7ATUAxStDYE6KQj619R2T31F6YK4tKGfpbv",
  "key19": "27JS34FWNFvYtwuTdbc6JpBS9jNJhVz8GPa8Rw6ZkL9RUkew5iTyTXXGhRgA38i9rEuQm9LwHYAEaM4mTFQeBEP1",
  "key20": "4LqABKtA7Fi48AmYH7fteZ58j7kpGs1ZpXsoidypscWXxKPx1GRrSwzHNa9kNiJAwVYTZbLzuNKSgYgko6MshY7N",
  "key21": "4fpTX1fpWSnUDNcJfuCPZHKH5LRqN7jvPSPWu8ZnHYW6dBDJBHqPxoqP392rq7EDxCFXRvjMPZfRi3tCiB5P6JgD",
  "key22": "3WeB7fDmQ2RAKqwc1sdhZXQ4yji5R9Yghro4hBwQUjdUrDEaJjzAdP1Dg5iXSVbqeexfheMEs87adPLfxN9psfqj",
  "key23": "3gMuZ2rT8EHeQ55xz1Jpstaiit6oeeLPiCbdAcUTK2spy9m1LXDb227UB2bC5LGTALG3Mg4Pt7NqfyH38qD4Q6qB",
  "key24": "3BsY4NW9c3EEvyVKvuoSP3jJHj9qcjsm3pKMXnDZVEi9NooA24aC85QcpqLNAd64jjmb3LazzpHckjyxp95ZYLUM",
  "key25": "dvUPTwAtoAinCHBN6giBkYFVJjCcEhzwFv6jdknfFY84q8xP1kbhoNQXueSZyiTBL1Hqw6GAcsM7br3oqJD1HiF",
  "key26": "2Pf3ajHBtBYhmSPnyG2KQbiAuQYXsBgcrhDWoQXfzuBLB9CSFb7mqY6FQcc2NWskFPr2jwPmKwRZAZtnRseAd3V",
  "key27": "YbLFjguoxdvhvWHcTxVy2reW2HkE8Lin1x4GCkUr7zT2yUkc5vsDLFNSCaqHkg5pPwgr5ZQDTPvZ1eHHRZ6vEYe",
  "key28": "5i7QnqbE3iwTj2Hjg3ghCFrSeZa4EMuw9HA1tJHUwzkr4dnE8hMnf7L2eBNPfJCLUAQVgwSGrgZUo9auKEMsBZA4",
  "key29": "pRf9XwaibjCGkU4Z9yJwb7FdxPPhaVyf1YCEm1Wk22YhLhG7jhbJXgR6bJLYQXi6GynPVT2AVFHDrCnDgQ7n9eP",
  "key30": "4Yy1Z5Vooxgwny2HzL4kcugsL2T6dgD8TGsZV4LVmCkujJxCw8dHJbWGCK9g3Dzct191WFjLYFEBgpJjoaMNuah6",
  "key31": "W6C7354WmEnX2Zb85vCQvnc3Zuez1iozyjieQjyrwvKXjD93bgHd3Jy5Qb58GwJvP5PSuy5GwCdwGfnYoWNBgqY",
  "key32": "2DxA7Ra3fmKUmEU2SLctMWFM6y1HWKwx6J9B7L4gRiNbKLE9yezRmxJNyb8ZqREiPd3uHD3dqy5hTQ2LtfLFFzsT"
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
