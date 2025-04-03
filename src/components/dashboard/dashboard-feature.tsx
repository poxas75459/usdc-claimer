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
    "3gPgjpCTT1wYa34dSaEXTLj3moH9yVzDERyBnq2oxzLruN1xDKBKbtD7APbovQtpUMLgMDRfHNtuYCXywFK5vCdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmZQ2h12t7co4G1JgPoVcw521w62p1XKtGFZ719CPvGy9xkvKdVavkVrxayQwTRHmYnCLXnGuwCuXtMJ2jJFkeu",
  "key1": "4QksKF1UvN6H7hkMKE2ARdqo876nyAdYB9qcWCkwB2ScTFL3fwQWUjrZxH1Dp2dRCy6HxGNdzbxSbNTomhNZzAY",
  "key2": "QBKE5Y1J4pFsjcXpVvaM1KxiQ5aQ4CgDvvGLFpyNMxwLo2MP3LN76aHc4ED5rzdh2c3xh8xnsov7XciuHhYtbaN",
  "key3": "22Za4VQ7DMQWLjofwQYkQHWkXbM8GTdGKbeJ15gTh3RTtNej6neenBHnLPcf1bYySoWHD39YJcMkcnjs6ihSBALa",
  "key4": "2LHKtWjx4fVAQJNMAXaHuxqoMZx1WZUvN4sePMeCrLvSpN5UcVszWQrheuadNUGFBzaUr7YS9PHWXtjSx19JTUmL",
  "key5": "5nybzDDnnGiedzhEfpXCfYGEzGWDJdQwJiqFq3yVeNYZ5ByAgEtarsvbQnvEBwoGuWgqjMtorfcvvr7XC2kVhSex",
  "key6": "2TKKKAGDsLHYYpJo8zw3Mpge7mQvJPnnJxv8wb5T82sKHbJ9hB93X3g6fCZSvuELf9HN4ZjowyGGaCiHy8fkn3DV",
  "key7": "2euSewzRe8XwsSSySgWHsEDLx7YacQHQinEe7e6XYFRP7kZFnYePaMRD1pMmqAnt5JXbDM3JqmwkTZjRaNSwiZyu",
  "key8": "RL7fYrsLnutKaMGmrmR7dKBvn1Lrvb3W4vniG8Nd622hPhtSQCnM7uuvQfGKwGuP85dTGfPsz6PPtYAkvKVGYXa",
  "key9": "cHMt4ygrVCeVzYkFJP1PozumdYgdF4aSyMVLXdYr8iFirSBBbQcgEWBgCz8mhA9EjcpuvTgwAJJjH2ocr66vhyq",
  "key10": "6ZcsCpgvQPUChpCXYYcZSe2Rp8fk9EMMSVHfZ4q5mPXcCAJbvuisJzwiQeZdnydDsvAk5XeP8TaVL2yCQ8197CH",
  "key11": "2uGnv7Axz9vNLXDSk9gTsYktvtxRGeBsVD3yo3ERDSAx95Z8cMB1n5W2Pf2z83s7dEVFebruZzTVq2nfSAbKA6Ft",
  "key12": "5TuG3wbnL17i6nDWwJ66Wuqw82qmdcP1MSv4QtwgmQ7o9pNnZPEXbf6AZh5Tq3Q7QmB6dv6M7ko7JadPPoYW4o7s",
  "key13": "9eUvt4WrtbBZ3jvvs9s4D8fAWMA8pwvNyzBHgeFWLpuXhsQJbzcQXeqWRWWhoGTsTEZDVSEJuLFgV3WXiiDx7A9",
  "key14": "2M3bguSLxe6sG7BnDi9QjmuNVV4nuSMv4MjME5EbtZZoJSQ7Puo3wM5bFjcjqXUbSCE1vLw1FnChZJzUWTeZCLZR",
  "key15": "5uNzKjx2XW7aABSUVR1srXSPzvgjXR7dfS1bRVx6muiaVMNP4vd3UZjFcwBffuzqDS7mSbn1PUTe7CYghh26KC7E",
  "key16": "4e3Kppvni9xa3mYe1f5wf93cQhQaiLVSLJQJwZpWCCjJui5fb5eUvWEBsm1ucFMd4WR6Z5NvuQP3vFdT7JJmKqiN",
  "key17": "4AMvKCZFMs8Y8nTwuBYf7c5N3dF2zrp5DYpFBYzdJpTZ59YgwXseibFGtcTdMBZ7E2BkZPtAxE7YdnNiRxVoqfad",
  "key18": "Md45u9UYUMLVByeHBapfzLWF42EygCfZsoo6N3ZYHn1u4eYzVg7AUdqWAaB5enDHfTvsxdT2ZVtMu9PPScyvv1v",
  "key19": "3WmH8L9GbizC5q5UHCKgnDndxsWChVdz74tXALFZ4AnmrpKQGUHewT7fe1wbstGsE4bx81Fe4i1dv3zCB5UpEGTz",
  "key20": "4PaCx2VWHTd9vT5iMr4YeTXQUK2au21qoKK28FiEEkHgLeEEJ2BVdVvdgqXTKgW24zCEuxiimMTT45Pn2mpyDDoQ",
  "key21": "4ub7Txd7eFy6fVZcYgF9NkFuQGhEZCnh1JQ2xvcVpVDjNC9NKS2jK4Vj23HQnw9c9rRvJByGiobWmbmgUBS9QSjJ",
  "key22": "35BgToUiSjVQeGw6Q4Fc6dhfFAe99GycnACE4nXxS25PSf3jNRp6XgCWLTxLDMiAjx9QyP11vMt3VhRNnKVxJxX5",
  "key23": "34MYSytRE9RQy23TtmtN5CdS5KrR7ovvuWCehVCYA2C8eS8SMJzAtN7XCewLjGrVR56rgRJJVHrd9xk6bNx12NPg",
  "key24": "37X8o2DxNEZYJhsKRbzDisVuAiR7UfxpdtmdW5ASnm6A9pF1Rk1rXGnPKwmvGnaautdePFAqzYkVbfYAbkJxVpYo"
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
