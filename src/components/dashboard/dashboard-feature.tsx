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
    "31xZgcXKy3NVLwgare16uKtQTTLbajHNgQDPEQcod9cx6u8nP5S2hSMDnfZt13GQbJ3hxNq1zWnf8hoa4Y7dBwzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeZYfTnLNipvaDhwpcBfoKcWeetfVo4axGvEX7S4Dq1kCw8CYkZnWvVwbW9C729k3FDCpgfc41Q3E1w8FqF6FMb",
  "key1": "fdQPW2YLR9qAvdJ7k8KZiFabZ1LJfzqq3KMtNWg3o3EgBrCiiVmkHWaMY6UEs2S4Z3ZkH3vnPaTRx2CQFkqr9t8",
  "key2": "4LBdDE3uqir2powY21EENBLRTUSSFZ3QNmVbevL9F1VqWtmFbwVsQwr4ncf5y1DDT2iF6sRdapxuepRDdmALRAqN",
  "key3": "377eVtbvkUhSjBYPnpfFtHUgHi14cRQjWQ4py3tBuWqTjZ33wQMrkEYhHXHj1QjExsincimHzVmDCgU7cmd25s68",
  "key4": "4KpszRKrZw5pLnuEtTyBH7XiqCELGd4UjWYNyktBWpuwB2LugRnYZPXMMQpkwxBMjpA6TJRi4EzXm35Vi167KuRG",
  "key5": "PDaB3XNJQHKtfXSsrwFacdafFpdyPjRsp4yUQT8tQq3ZR1Af9BTDxzYpptAUY1Cu4SpLeP4BbCguikJDmrtgrz7",
  "key6": "59XXdrj6PqAmx8dfvXvtXijjuo88nwNYtez44YypJUpkmnWCa7RbVtJuPgDMQz6vYwvWeEBMJqKjQ1hTMW5k8W3g",
  "key7": "5h8SgEoxu1PBKfGhn944i35dKGX66tEqWZi1fDcAc7nzwSzWTUWGwNdZ56TAD12VaLVA4aGk4fpvTgHDmYJGn3gY",
  "key8": "4PKri4z4yBXQJg7hFj9fAcyGcMzo6zvJAcWGfPwDbCMbvuk1BiUhZdtRqbX9e3H1m332J8RKKud9moibk3KHXAH2",
  "key9": "4RAvpTbWLRp7vRcDo9ZkW6TSizJ3g6x1NFfzNJE1JP7AGtNjD6oMinoB8qpk6VHXnWwC8y3DL57GcVmX1JBrsGaH",
  "key10": "hy1chQDEVTsWVMd9J6sdrFLDp1QeN1p8Ri3FZDzGE216WoFAoJ28rFvw17ccaSNXmKqr6dvbgn31fKMoPRHj8Gh",
  "key11": "2jf5ofnpvA1qSn6pj5wYKr7gPWF247hyx3nVMGYM9MwgEqU6ZuMi1iATqVpzSs3FijFAkvc2yrLZXpHDw6NoWJHJ",
  "key12": "CgarP1ZynVPhhD67WAJkTjfcrVR8cULtubmpwBv8VMegLhGErpCQdrhunLoKh5hps2jFA8sisjwfqXSZDXscYS2",
  "key13": "5qvwuusJ7znL5eFeqddNAe6eM5RFPHyY7rpUKPn8LERaeJsL7bRnAeHQ8o2GA8UhHj8FMyq1kVxXM6TppL9dFs2Y",
  "key14": "fXoFrSB7DtzYjij4eHP3LuRBULDxYZ3JDMdSQnvyRct8KQQuAv2pqv1wEKGkRaszdexc38ioawQQiiXfi6Fay7z",
  "key15": "5VjgfR2rZM7tbpbNzyysS9o3d27pUk9hNTip8Rg4uJWr6ZfiTrcsk59ZE6gtUoAhYJuJ4QogkGEMQzhbDGsNhHDY",
  "key16": "3TXcsYo6zwLdvprxnzB6GwkV6ncsuPnVfj6TJLfzPei7MKU8wramAgGX9AQ8ngJrMjNVmkWFpxNPNuvxsD1VrT3b",
  "key17": "2Q8HJBagNH8hxfD4AaR7w4inTwRGKKbxf67f3Xjrc4TBgRptR4bbhmHBV1aeRTD7paFbjj6hQCAR2bvtetsY4x8g",
  "key18": "24GQG3E8zNwkdp7y7LZ4X7F1MWJSWoG7UCormWKyhjtfUT35mCFj3PXW1eAVCBJJ3ajfzJ9RFMdXjhXUMQv6oYb7",
  "key19": "3Kmrm5XE47FCaK8Y96BqM1Vw2yUDJYcbqS4t9SxApkgageA3VPdPpD45XpB28LED6hqjJkGaQFkm1Zgv55jqFmuV",
  "key20": "3uVEVApbe5N4egXQNaURsM3rP27d19ydVJxKzGXbHUzbLntuGp7JruYQQgxewZ4mXMxP92EgN11G83scHXuZSDm7",
  "key21": "31B3Sq4crK8csDmEijpLGJSfF1U25LjpSvSSPiaEF8HUS2ink2ab8So3scxVh1uXQsrQ8XUVhJJKKKhN543q1BqK",
  "key22": "5NmgSGWR1Y2pL7sECwuk5fVhuGXeBBk4vuQy92Umx4iQFgi1Gi3uN8AbUNLPM3R2SVhNoeJnPcTgfE28nYes57QN",
  "key23": "4q4hBP51ZnnEYgLRLcJ6VSDbHUCHSpqf9GQvpeDV1BLMt2a1pkvxWSFA9t1mQwtNJDqHGRPthZPSvf2TqfaG4BVd",
  "key24": "3BqLwuGmDMiCb3AbUPWGbxa3VxpX5cmUxu2s4EwAmRL9Sz4H1MBugF9JYf8J6yK7PBZ5hq6MYxoWMVtVqnvavraK"
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
