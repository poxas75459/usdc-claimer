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
    "5HQucxuFgQbEfCE2JvN9qaXF9TgUgYyPw6fzjcycYi1pYvYQt5Y6waUssY7HXjS5w85v41tCgxzk3sx5jHAcohQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMPtNBQMNY1WUJGm2mJSvhUVFMmwbJcoSWngiyR55ANfgudWx6rg2dmKg8VK3LB2kV5sYJPHaByQXhgAoCH5Ka4",
  "key1": "2ry8Cz6mMum92nphK8qTPt6X7tqcFk96d7s8DvjaqoACDfKGaV4YUH2LDNzq96Suob6H5dHMXzW15kJrzGmnNF4k",
  "key2": "44n66ELqCkUdg5t1vnMHCLcvPdrzjb8itpt6iiZg6b9UrPjqcP8BkZDv3RrnVHYBWQrMzjaWzEUhxfi7p1zjF2tT",
  "key3": "3AmEa1fq6DvYEg5htw94amjzRxnvyXxgMApa4avtKgKziD4NXTZ7d1t4bZKDiQKc1agh247HZ9RepLCZKSS1TTxZ",
  "key4": "CpFTJNhEduv5tGp9RHpFtmL1f6pt4BXahiTaLnTaTxdpfujDRBVWEqV59Rg5CArFhaKnfQeURbysi7u9LmSqEMj",
  "key5": "2wa5sWSg75m4NYQQWcj3F14wKMCHKu4MeT7w5ShUmSG5eGkRiX6Nk45qH5EFkozL23EX7VDPvoYjPB9eUbC66Sar",
  "key6": "2PRDH3xK3aS4mxTg1Z57BdsjW3r2sSyumNoqz1cpS1zomNJ3ixxGaS7x24bLNEVFj4votCcMhkUswNvhWosAZasG",
  "key7": "2iPcUAsj8oTdUjJniW1NKcFSZ6FeGF1dmDnZ1GgjHfkx1qSUgRHXUhLNtoZHdwp8bzzCinhgaugfZaE4CLMirKGZ",
  "key8": "4gXV1gs2kZrDRcwLxJjESn5sQCZdkDayf1FBKEUkez95Ee616bkZnuG7hRa76WKRCuxsa6a6o7Tq4wiHUKnH6HBY",
  "key9": "k4Wn3fKJXk786KWMjAK4QS6H6eDJC9inVDFRE5MdRmsT94QA37UtDqkaqwUM3NMPgR5XtL2RJLCCMLsH5ckJyif",
  "key10": "huJ9FkTtCJGs2Cu9EskUixgwXoUM4QwGv3g9dxzq6183xsSoh92Un8KPqKYdrejKGYri9YGG8Fwk2kn7bWAhMnw",
  "key11": "3y2UxGQUMfTgg3J4cAiScnLRqpzh1WXwQZ8QUpABNW6iG1A9SkHcXjuk6wxuzDgRra64fYMjfHisv51ogFxm4Kzc",
  "key12": "2R4myVVUFma3QNio8ZDE2vBea9LZ4Tw4jQ4xTEkgqZRbKjP3hDFPzXgNLB75dEzp5ViqcFSAwNzev5dVuJC3swHg",
  "key13": "5XHWzYA4f81e8x6uJziKjPAv1YrysWqxWrBECRWXmSsewsxSGMoo3EjhgDmNC1t3WhXmuBK2HUUjAsznrA8jUmZo",
  "key14": "2BZ1MGRibX3tYfNjstetJoFFj59vuea6S5SVXh42wDL22jNo7zpeN6d5uAmZv46xCgZKhLUhVnmZqUGkhC4PCbLs",
  "key15": "2v8szSSqoXVwD4fzHAiGmEx24GnzYFSZnipYHphnH63XdZ8jqpaNo3sZqgXKjyATdsynLCDSFhbdoqnajJqbuwUh",
  "key16": "JsrePGJqivet7m6W4TYiWhBCajSw3ZoHFHKBEytKoHyRZKXwtEYkx4SGi5TSyaVGZyStku8rr7Muc3jURmrBiHQ",
  "key17": "2SyyZehrLS8Um2KrbLVQ1ns5Kh9yBAuzKm5Y4VaLgk9NbMiD3KGYMAHifYC8PMwP3G55YV5aE6LkWGBSpocjd4e3",
  "key18": "iqhBbf7udnimvFy3xWLjoMrQZf7QULAecMB8VRZu4cxgR3Ebvv2bPdrYcT56M9wCiFEJkudqFx4UoqNgK88q7QP",
  "key19": "33PAMUDbswQATgAAk4GpDSZiSwP5kiAg53aRuh8TcEfRidLxRjN3PcMFGdyL8Cn5DQ4ED4kYFjdBiY8NaX2uAbbz",
  "key20": "vHaqhdXwTCQP2tF7HHmKbtx9xvKbyVqGqFCor9H2ED3aXuf5NDG2tnytWTMUY9jzu8skWqjBbr16t24CJPZfdJP",
  "key21": "2eNeA1hsRHWqn2U4Ycc7PzcLUPmdPNmPjSPB6wzcVA4ZVE6pKY8iiVh1fMmmsUGPjTDdszAPCWKiVyLD7CdtJN9o",
  "key22": "63A4r6eQRZ4qryCccnPzRg6bf43SMLq29M73jnevxmnD9ueseQpjAQpaAJd5oThdEHA4gfXLYYeuzJMLusGbiH9t",
  "key23": "5wSojQdhV3KNjEzBwXWQK2cbzUa9uGbzYxU2TSrGchdeQkofhb2yaBmTLDDVZrC8W3gT1arKxBDPp81AL1PS71wA",
  "key24": "L1SAQ3rYAkwNogMBF3EwUyQEotDkSxh6peUpXhQNoSprms6ADZVkMqqr6ckqrAH8WEePQQ9wHTiyjMcqs4UoRvz"
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
