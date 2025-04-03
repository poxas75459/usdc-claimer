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
    "2bL4v94HoJqFFSiS5Sbe5UA5fterhcLgQgw54jECbtWfzGeRJXaZAPYdwn22WxJ2WfPKB2nedNCm5JVoGfhtCcpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESA6y5g17ozfwpgg6ext5DN7gzKrpkkHF5ak7VFMiKZuxJFpDPWkmAm3Lqn6nhdAeQuHFb4gM1L1iaWyFW9QCkR",
  "key1": "35Ct339Bv4PM93hiErRz7V3hpCf5EUYW7y67Tdj7SNNL3cSnThTcEahRnSLJhqUBut69T67Trsbyp7CbWrJ1nLtA",
  "key2": "67RT3dafcoEaUN6AUtuhsWp4YRBUXrEiEAY9FgKjLAhqCkSsy1QwSiqqZmbRUf4NczCv5vx9BYEmzrS11HTFuUPA",
  "key3": "hqJAQ2MqWiCo85gTNJZisvykswUryMaLoHHq52eyFH98M3hE7Ci6Lafj9ZruvjMZCh2EFEfjc6xiTdzE3pHL6cZ",
  "key4": "xxpHMTLJR8tn6DauXWMjm7fG1GLqtjEv8qjLREt5uCFrrAj1mz57wuCwbNHfecCrnu13SQWuYL8eJBJvCXyPvmK",
  "key5": "3GBw8zEvGrFb2NiGEew7MCFKwHvt569mwKmZYk8CMHsHRecyrQRqnNdhLH7ZmhJjswmRp9UkVKEJauHiTsWmvvth",
  "key6": "597NWWcdLiv4PLWTZwHCFuQzuQxpgaY1sawX9Z3hxQVUd79rsmXLJWrDa7KEKkomQagKCVDpv6xomGoK4BZ54whm",
  "key7": "63EcwMHcS2e9H8wfyjNUDQ7qnxDu3G8o4woY88aeLYFf5RJT4hBPRBCBSb24brgW15HecSX4515kmj2uChENXRnB",
  "key8": "3Y2ZqHaEUBudoDF4eEY1D9PZt9x63SMxzvegqe8iJDuYp6gikAiL72DPHuQYrgEJH7dGoaMJ7dWG7hMpMngm8FRu",
  "key9": "5tKG5SrZGQeSrNbfCMjWccgJB5rMJ3jPPrgirMyv337GgQgHbAASe9pXYRbMJgmeHy2XHLKFEqfnoxVh3HinX3V4",
  "key10": "3hMmJFkVPTWUZ7xwui6LAzZmivAMHxdge7Wsda6J9V6Q5BjfqrhNfxqLLnxYVdfCihdqgnvMmzJTxXJ9MFgeDJxc",
  "key11": "SwsqPBiTAQJp9yD88wQpD17Km26HGZLXLA8y9DjHo6oogLoufv9giFGZv6EReswAgynxw9PL86Pm9eVJNTrTuBE",
  "key12": "4YGDRoB9uA63PxPc8J6UXGU9MV3AjM6osBDErxrhRXxg1iMz8mfQQUraibuG6pPXwKiiBcmSZSRgQzcgBzyqKfsb",
  "key13": "2DjE4x1fQXJDBhdvdnAvJAXPvHrYJEK2H3Wj31E5BUgG3UVde16ovvoyggtp2SMSCn3o6gKPHoKdZzCWoopzPFnh",
  "key14": "fNyYsKcgVq82kLrMLxT2VC1nsupJf64ALkR7JUZzognTbCJnziUR6VyTKqTQznZov1wsujz1hXAGLtnZocrKPtC",
  "key15": "55GxvoVF796LJ6qiWYKUrso1QW384v2foWw2LKHxabnyb8rCajQBcdZtNmVUaJ6y5tXvFHHqFm5FmS58C8guggHB",
  "key16": "4MosrwaK9ZPPwtHGEAo3h5LSjk1tNusdtnCpehydaFA5FbtYfMgbai2AfEvABTuNG2PoaNJt5ATn5eGjVVtjZhqH",
  "key17": "5CBg7rwo7QnqqZs48uFmzfVN8xaX95zhwVbYp4p1SbQRdhvNxGztDDDoronefWGWZBiPRtgA4sCisxsLZMLW4L3B",
  "key18": "5dYZ6VPnsZhLSp9MtUX41HCPsdShXSmLn8XFweyRKzn3V4GdzcQokEhp2CMmsJVLe2WY2r3mEh34JKvn9jC3uR6o",
  "key19": "3iwYHAeebsa6k3NP5Yei3cA728W48BmJJUQFhpw55NDAVHhGAYGZn2qG58WHqu9G4ccryeC8hm3tZ23FhGMYRdav",
  "key20": "21AbQimGsDC2ein4BuXPez8KYYMYvrqnZZhWHrtBKzkyFMLgfthgBggKhaZPadceAQFnp6rhQmhbcV8Vo2ect5qm",
  "key21": "5ZXpB9KGL8BwCa8SJTQgjs5f5p2kn2JQh6Q8B8koWtioS3mGnxxtzaVwJ6R5EWose7yALU6Kqh8iHknR8Z4fuvPM",
  "key22": "3sYGhZN7TxzuiehD48qtsQdmAVxNPCCCQX7jAqpSCWP9CLvhmim2EFj6JUBtQPmRnVCVJrA8wvceicoyM22kCtzK",
  "key23": "53BhYtzvNNkYBGg7jewmyRT66DNkxDuQfykApiso99viGaSxvmS1FU1zZ7V6XjTG1CsN84yZ6643UFrh9H2HuvRG",
  "key24": "5im99G7sRm7EinYeXJCxXgA966bMNsBewWnsm71xsu5kL5AA7qrzUUw2h1VCQXYmDLQhd7cn2uG1yWUHFvk6hrDH"
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
