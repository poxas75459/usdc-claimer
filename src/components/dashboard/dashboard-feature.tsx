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
    "3gKXyPrswiguD1WHjWHA6CXAtPEgw38b7NrtRAx6KA568Yx9gv3T2nEgG4vJoRcjoBP9xq19JWZXLe3rKE21ofsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34t8egY6dvc9QPw1jGjqm6FKQ3a4UnbRQde9fRhPJithjDhrpMtsGTGRo7baNYx4hKLgsMnkSpGkbafTboWSghaY",
  "key1": "qHp1ZNKKyvWu5Xrp8YhCNfxj4StCBmFcyMiuJCbtXigVnNBiHP2bftFXBTaP7LERgtLGWwqGEXt5Bi4oMsDzW4t",
  "key2": "3NhkbXsbKdjRoALFpeoWLi7nTFnrKqd9yXTmBrfeVTrS8Ujxt9t4atkbxoSAWG8pTTsrzUfiKZRA9n6pbdeWZCwQ",
  "key3": "3ijgonnvtevRbx4jNzEmXY1rgUJT22BUJ9fyxMcfCtfSJs3UwNLH8PaevyVGJoyCujbc4AdxkBJigco52CrGa3XS",
  "key4": "29c4NSnrfc5tyMLXNS2QGw4dx7qzrUpp5wdJVt3japLLWyhStj1Yx5XiGxTpEKDa2BY5kWLtfmGDr9CCrRTrgyhX",
  "key5": "4fugHmfBpQFFyiY4JqChjEzSVnotKhp639zQeiYRUgx1t3kGya178oFMF6MHqyc2UcenPv2KeUuSfokc3SZU1dKm",
  "key6": "2ZWwvTE1M5gJattf5YLUZcXdgxA8XRfNr5c4FpDFGRgL2FFFM3oamb3D682uupvuWfvkp2w3zo3rL9zXoGLAsTjn",
  "key7": "39WoBSXft7fa3hHc9SSAcXgHxUoSv6E2DTyzmoKNb2t1NymHEv5wyhjHSThH9DLVWKHvrhqXW3sRhZ9ajrZUSfPJ",
  "key8": "2X8C8mjehRHe4a69Y8dwj4g3KiqtZTthdvaCMmQrFG1MoLUKX4FxiULETamxiFuCk7SJd6E8wqsMAsaZ85pCRUko",
  "key9": "eMfGsTJCPoe5698abzraEGEWy7dHDrNiRnCPvMf1DUorcFL7Mu182VcZag3emD1cCpXXaVtfEYermfUDRArtX4F",
  "key10": "43tiKajBi9QBFHw449uNRoJjmLoArSL4kbr3we2pRZuvD72R2WnQoYo3nooV6MX18ReumUF412y9o6fndGfqTZRn",
  "key11": "3DumqPqRvrkzhHCx1wjkVp2U56thhfqu6q9t5FXVeoyPpGa5V54Q19k3muMuo7ndDkdPd6HkutHfgyowkG9iR3uh",
  "key12": "4SWLe8h9tP2hW43V1ZGeP9yAKVkK7BfxEYn8Pk8MN8hSawCM1Umso8ARu57jZPVEp34oWvs1eLpHaLHGrGSEqm25",
  "key13": "3tz9pQNZvVisowwLYbugJpRZNWo6B41t3MjuR92hgEz5ocfhMXbUe5rhhJKBQAZyQFuYET2ZFLzgnVXamKNKwhoM",
  "key14": "511mctBQSQu4dRnaWKYawF8WF8Ly13hb4EgKZXyrM5nxnsFcY49jP1SsiZbDSac2oKbbTZeqdLBP4jDLRmD8jH5Q",
  "key15": "61m8qxfWydbpwk2KoPX6cCNFH3nAsDu2RWyCCJks8THx9ZQTi6Qic5SFQksQ45w8AxRXsEfhToPutRVYtsAufkZ4",
  "key16": "4Ha3w1dciM4VvTkcYDsUTwkPLEFRiPwXGR5eQmnPuGCwoTJzxN15Eo8umrXEh79qVEEAEK2R3EwcXBWuzB95p9fR",
  "key17": "59sKNAqd1ZnK7PCFrY181msewMvxg2otLKQS7tE5u7JFE7JcbZBX4j8zFN5RheAtseDNjFmx15w6fuPhunfpKWS9",
  "key18": "2BchXTM7LMCPVjnQYy13PAwxVomgRW4CXJcpQJR8gxJKDC29JFQ8NK9H43XEXp6CGRsSVNBoKpeSJgjxQ6mdWgkZ",
  "key19": "43Y2hSoAwPtPYqSfnr17mSWSn2tHFxJ95bwzLdG2gXA7gjgKEGPRSZsJcusUidM37r2D7mrbjmskBnoHQsfGPFCG",
  "key20": "N8LWxmPgs9CqQqydTMXSz71XjxKcNhamxxTrUSwWK87xxwUbuFpcddYirSsdHmffzokZSnjRaBLJLmyWMA6PFpP",
  "key21": "2ZxeEW2zdJKvwyPT5jwZSjf7wakkvnh3vC9vhGcprjDeoGyM7Fexvk7Nfrm2ic8v4rjrqNA5cP2duiTjyVs5dv5L",
  "key22": "tHKJp6WJeQLhQQWjaE6yLUpPZc9xaHdhSFaE18dGXhRHgw41AiW9fbMxE1dTSot3WXz4B3h5fYGwyUqDUnruRaT",
  "key23": "2qkH5T5U4zPNMoTfXwBSL9j6MVeACaWCueCGdtuHKKWJDfXbQYX1uwqo6RnwBSNqvSGPKizoC8pHHaJNp7UyxUJ6",
  "key24": "3WsUNc4P4R1hz8K8tJyzT2K82tzzb18E2QswFr5pm3pLqcM5ENuYRem3B5HmGjneVdbVqdMZhvjbcXEbKF62up13"
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
