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
    "pqvwPeoQupQvomQ8sLGT1e4gmr8PYK3g4SPQok6e1eXuGzaTau6dYvxQ3w9dGtgwKiXyro4bafs448VyHPytyMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQgXNCyui1YQunPgugnhn5JRmoQa8xcti2fYjGyA3F2zzM9XhzCBEcAN9ZcaAyLhh43EoPDw662GdWicA1A7zrZ",
  "key1": "4dgAu2r77YYMW1YZbr1D27roQMDVXEqCd5HCJeabbnkhf6TWYoWF5Qap28MN3ZjkR4KW3CKdnUKCo7t7YyEDanpy",
  "key2": "4qYKS9LgKjRknxkuRMeu75HEY2gT1MNVqZe5zngzB4j8PknNapvLTsn9LDcn7NLgDDv3YUvWbxhPNbTSPai6dosG",
  "key3": "2EgVad4pKJpztjtCs2U5YMUhSgR5CWTnGAuFs62ubcNcEB6Bv84vJL3R6nszXn5a5y1CPPfcUf3TnyjduJ8Kx7qm",
  "key4": "hRdgpFpdXdPtuAnRgWMYhtazgxaSXFLAh6vNsScEP5yEbX4hcZcfAMVm7s9GExaPo4UBqEELkGwGZGeJepX3tPe",
  "key5": "4mLJKJcdJZNfSmUp2d7YkHEp3ZLab4gZS5kMWtWtVQJf7dtbYWRDX55CvBuYW7VFinRG7PjyNrGTQxKRc6qvprdv",
  "key6": "S2L9sEy2C3kdfriTAFf1u99BuB2qpfk51kcDLyXNL9Sq42RXvXjbS5p4pMgWgNWf1VfaZCbRFL1ZwEqg9zoJqhJ",
  "key7": "2W2LU3hmQb1KtVeCq38fNQViyUeH5tqXrYxiLe2HBCHNQgPTTKGU26GJWVmVo1JMWhYuF7XHcRiAUxkmKSACdZ59",
  "key8": "67MgXRnkLgn9RNtPNVViP1e4KXb2vPxAAYfxCeHPtQdZJGxpvrcJME4XjfP5ssBPuCyHfjTreNyxf3hURVTpKZ6H",
  "key9": "54RAcgAaPpby7fSuYBUUeoVLJtFa33KQf8npz3rEAZvhQf4jF77ULxfoYrsZyn8HZC6DX9Hk1RctZnvdVjLk18ed",
  "key10": "2vxPtYEip9cKVFCSMZkpjoLwfW8foUeiFZxun8yeucxQpCKDCopxmsk5cuUW3BuQvBib8eKXZgz4eiCzYYeGaPhB",
  "key11": "rW7M8sTvh55FGiBASNddyg4voany6zr9JN95apP3JcepJ2XrPnJBwTeKNCjd9wfmDBJ48RenuoJ7BpxBybX1pFV",
  "key12": "5a6xvZTY1pfwDeCcSuQZSRwfjjpmFw1L7iQbMYKJTY3h972WB31Ko2nu5vDdoVxDzyqFSbV4TZVbq7C4kWGa9SpG",
  "key13": "3awwtYocCywAPaJunkw4a9rrznFYCfsxugamD5tpbMPD5WySQBAzPKRV9WN8yQW2g9mUUkL7pJThtKCyCJmfWbpe",
  "key14": "Kt8qWaJBQabC74sVTb2YJi59UrsLi63bgMKJ3cB6Unp3TuGJg7XhVXv3GoPuSZWZEcrgYgGSypSKuXqnCCaatRR",
  "key15": "5hATegy8HkofH5KtZTfyyZr5VTYM7FZVL9dV4ZGdmJqU8nHTgCbTQvGTLa1NA2wH4DfAdEQZ7a5k7BZPVZN77eGP",
  "key16": "3wjcUZWih5AJ44pXAzzCg3cjZNr72huxuo3HynK5mFidLbJT4zonDTHzcoMcaxCdS1qsvscZNNwoob1rhwGiAHiZ",
  "key17": "ixTh3FSRLfTPSfR4maYRu4ZV6R5PpStLgMy4FY8QoTmgaF43DsUCpJJbQ23YdfAhma6rARc7aA1YLLjvvU6cmd5",
  "key18": "5CSrRzr1Kc4dSZGDZdTEeHfxfzZUzEQiUyQHwQX3Pec3rVwjb7cmntg3WLTyuRkj3B2X8pgcFxkTaiJUdQguZ4ng",
  "key19": "48w71sG6eYUVyd8k28bJrGVFPAmA4PMawVSEkbWuKbB9rG5Ps5999HKW6MBahFAicArs8cQmKKPV8TkmufjJahqN",
  "key20": "3R7EzuM75U2pxeWVw3EmBeRFVM3tPZ23E8bpH2SxMw96jQx2saA6bTossZjEX9kv1e7zfSmzaWPC6qJMUaZdpVxH",
  "key21": "3TpTGZGH1TE1WFkK1T5KQrt2EBAWSe8mu6itMzf5QNVgvYK18EriNf6J3SP8v2xmdtQAAww7hF8TjNhaPmq8e4Yu",
  "key22": "5WDgb1LT6fnRkMFJ5wooSagjcSDWHayY3X5iCptcci1qRyqruo9SAUSsueUAocxZDdr2TPy4BAaGbcUCCQRbYUSi",
  "key23": "67brSvsc3HHSbFBLCDLiGpXKZwvHGet1mnywhhN6EMZyr1BmEz5ZNenJycNeEEFDatBtCkAPo65eFPkpdGyyiULx",
  "key24": "3J3rgDz7zdc7Nt4RF5Nh99KyMoymhFktn6NxyUNN4pafugvsJpQR6DPPamGVK3y3FEaPQsf5FSsbCEQtGPbkqu1b",
  "key25": "2WtUvwqiPy1dEeLHNLk91h6JutSfrDSyoyjB7ti4MPXnVtsDiyVF5txdm4ptbUUSrJ31GQiwgKJQgH7hCML8nWXn",
  "key26": "2176URLRsneyeYfuzGHebANdeyDGxpYWcbK6JS3hYjnmmiaSEn6iGX4NGzwCMGyC8FgbwoqEfquPM9JGVH6HEeFC",
  "key27": "5sJPcg7xRKEiFYvheC9k7PF4wtix8G3PXKB5hpwpsFUvNsTXv5D5LqTrQLzEn1qnxbqtNfv3rCPgaTdP3c5NMMaM"
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
