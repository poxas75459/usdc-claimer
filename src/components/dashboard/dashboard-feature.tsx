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
    "juBnWVbBkALoKgmuf9z6RVJypwkKeZ2LtE64kU7H97L9JBk2VsoKUUA9mU4PfbZjVUJstUb1Bmxymat1QKN5vGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DXoAddV4FKPbdN1vSnHDz6iNpPgECtyM7jwEbacVLTznu62cmXQKrbfE4shrcjpM7eDVtJPG2KTgQygsvm9rUd",
  "key1": "5xQv7Eref8busGehpWnW3aWWmQ5vW47FeFUTW98P8m7pfSaHf8pW2UwmKGntjXKxkiGxbYE1XiVu4UEt35YJ3E7Q",
  "key2": "4uRgDyV2Ky9yXq54q4WiaU8u9F3knruMAHL6Zkk8fHzv6wXzziHupFLz5vMJq6jz1FMEH67V7sK5qryCXFd2XX1S",
  "key3": "5yaHJYys3ZEMekoqKAnnU5iSs8krxGZAGFb7uofvWRgLV1wcoMNgcZdVRydbsVQXkGUVvEHFEx4wnVMuLQQtvum5",
  "key4": "64aaXG4UthS2w1WSZMn78c2CMQFf7GE61SPb75iViwo7MRELanSTe9sFHkSNDK59Mh26pxoNgr6X68WQSR4UZqda",
  "key5": "2PC2X9osbKzvF58xirnkWNCJxHvsHCJoBjBGtniLCgQu4eD3EbkcoR9vYxgofQ2Vbg7cKSm1tie15N1iz9X5NJb5",
  "key6": "3tFekVnSBCRxN3L43LjtDvb7WCAKCA8zhsv9szXAe2hM8otJpt4s7xT2x1bS3JVij4XFDHUpKYskA8UhKgEDdS92",
  "key7": "2agv47egkmkdzahW9Un4gDX5iyyP9kDAdF8UMMDFUu6xupwLciFCQpmMBGgX5veFYFqsU4muv6X8V5nfj6MTHk66",
  "key8": "36QFbnRstUUFshGtQGH4PoQHExQzn8tZD2mW49Yh6KJ8Rc6gJLRG1SZDTVmMwWbJGj5ZCtoit5aNYJZHH7LfESkd",
  "key9": "8SYuLTuqJRCCagppCMrKfTASU5U3DjYeMBScgs3JohvKGAJ7DVtiXfT7TZfbYRm6j46xcV8z2MFtXkNzoiXux3p",
  "key10": "3qzpPnVWL3vi6t5iLp7H81yc7Y3dGp8kJxuPPFAvRqPjvW1vwjkPwadSzmEuZqsXRFPcjGiHXBPpGJ497ynfdK5u",
  "key11": "BqCNXchACiUzLieJasX7kk84Ae31gA18E7qxuX7v8q8Vvy5fpWannSs8DbgSoZdwpHLstiA82eGfxzXDdZigYBT",
  "key12": "nvYeAWCwfFUYkCfF21DgUnXXMvaS6WgZv5RfHczMuNnduRXDvs4Cgrio9nx8Rv6bjGonZ1zCcupjLerzgZCo6z2",
  "key13": "4NRC27u7yNbAfmSwH6V3m4hTRmzuYVBDC9vtcPc6BCEFDvxxGoJuoueX4hzft9EHpfC73xZZWMckFAJ8WFX1Wt8H",
  "key14": "JZMGrXwrn3QSctwaush4SY35JcsZBQJeoeqdgAT1U9oFL2Qctgbqgo38t3uBUGiyyV2QutihSThkFBR3GciJzvu",
  "key15": "2E7piDsZWmgHJWXvaakaZrQtKvsqGNcCDSSusAZRayBCHtTFC5xcQZzvrJy2hxDyuxLZ4YPwKo6qw2oGD7H8sSb2",
  "key16": "3SzEJQNz9MVzjtzW8E2NsfB3zATa2JikNeeL1aoMUEggjbzyPabcjwMnKmWXoWR8iEDFLZk4ZbvyRcUeY9JWjEET",
  "key17": "2bSzQxp7Jmtjh8EQ3jkDkY4sewy5FP7uVVfeeBZeRWcjw8Nb3D8JKWEuQ1nM6w3RiywnDUsrhvcpgrSzoihKC4Mg",
  "key18": "NeZzwWxmYZiHHxTpSQ9fKVQtZeMQtUCdsECnuSjp5RABauwxDwhrdnmH2VXJz6pwHBDgEmpqtornwD6cCteaLwj",
  "key19": "2PSW3ccLUfupv6Jnqpw9ZQRjzphxYRLLawYZJXyPxwrovkKSUfnzEA7DtYX7s5XxNAdxbFJgY3Syx63XQrvPGwS8",
  "key20": "AAckZHCsgp7EUtdrbt7dWQSJj1TWwic4ni8o2YuSNzFAKsZc47UpDabEr7aenYDdWMsBysPLc9cqf86iWwU1AH2",
  "key21": "4iytXQLT743CaLZf7jR2cNkSXNAVNmehDXyDaGnMosKGEySgjUUiSE65ycvT6DtrYaRATrnfVYLSavk2d488fJNh",
  "key22": "aCFi1CtQTw5FxGCpDHRsdBQvBNcbE8L55o1GS8ohkCW2hD9EKEgqdK3qLSiEnnccGTSWW4rEXX144nbNmc7wgwq",
  "key23": "kr5D58mfhREsEAbNNBRsuNu7xFZT49J6yc6suUFywssA3n4n9MJhKCxtbVoxxJdvWzCpcwccCyLp7hGd5siWeTx",
  "key24": "3eWJwmtn2kkeqB9w6TfZGyN7Htz3bqFsieJc2KPwXNS1WACjpxkHBdyyuL2aJGQVtCGL62CkREV8xht2MCgiRaot",
  "key25": "2Cnz38BRb3Tn7xnysSgYLW4DxP2d4DfY3TPQjJcxLAdqqAEfUdWpCCwZUU2N4Qf3hBDrNt8aJPSGwjJb5dVeR4VB",
  "key26": "4hF3u9rqeSmVq1jchWe3Y2tvZLY4sQ47c7YHqLdXDDGDQWn28EpskmSBJhJcVwU65wJmzzLPoTMc6rhgq5yRWNC1",
  "key27": "5rMNgXVnM6GAKmfDobzT3hnjjD3njP9doTovUxVe49WXaTAwnMnj67GXxNU3KEh6J1S9N51Fpe8yHeEYgfUHn89Y",
  "key28": "2zbo5Yx49Zv4RC22NYqifM8EC3nnJZTn3AmMAV4aQf2kyYCqbvMsBXBvvhizb1fuoYDqxfg2ry4tc5MCXF53DHiR",
  "key29": "2wDTHV5H7TQbGw2SUkvspQVLiTF3JPjBnj57GrVsFyisbsMh6KxFCqkuaFZffpCfqGYNruamjahDPksEFvP5CLfD",
  "key30": "61JXVEtXCLGTyNdgYMmT7n4ysLYvLJn7U4BTyBQb9G7M2XAtoZdAHjQFstnN7npcsTefL8qYhAeBDbUEauphNG1v",
  "key31": "3XafZqjK9E74czv2jYpxvoyroiCotSTKifnx4LCGKD9D62z58asfFSkbUJvXwrHpksT3TgAMB61qJbpPKTRuykgc"
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
