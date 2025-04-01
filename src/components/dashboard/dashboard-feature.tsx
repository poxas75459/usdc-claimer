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
    "2kVwXtF769vA2R8cFMwkfkAWYxugQqrHJvRdQtwcm9jbT27Zfd9y3Q8fnEdoLb8WUYKAN87UDJZA4B5TGTF7tdme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58iwAt5rnXF9jQVMXZNpuDjHKxBfdutWkaa85DncnPXXeW1a2EFtKx38y9z4w9c1B7qprFMNz2LNGYEhJNwzybJZ",
  "key1": "GKU5w8qL7v2PnHTu5VkE4rywsvA9r9yMqWMYJWS3FhCNiaTsv4NkHnygemxSCDBJbrxB52qza9NndA9JwgfxxWW",
  "key2": "7espNRxLguFx5aFvjGeVyx44HNwxvnfuj85b6yctcLygMjUBxhxEDUt9rBNH1x2351fY56YSBXC4o997z5RgGhx",
  "key3": "3f9dN8BHL9hzgoeVqWWVbJety2M6y9tv2pK3nFfSb68LnXfjbZuhS7DHSAXdsx9VQ5tfqDV4ZfToGMq4ncwXZi67",
  "key4": "4HCdpagyScN7j5YAo5vB8TGmxa1m5Z3TDcoWeBvx8PpGU4sTkaGVn67Jeq5QTyDBCiaG311hyvbHwoL7jTHe5a6X",
  "key5": "UcCMriAg6oFu2oR9Cy1b3YAAxmXKCiqYAFUJCHk1enuhWME7dNzhL7niFM3Znsx2D8vk9NXY9KCUZdKdJJo61cN",
  "key6": "32NkrAdJzv9aW2WHndTyADY1zNuHHivdvkPyknY3zerKZey4L3DFGUXx7BLQz3Tb8DVvMvhkgjs5tYjCXAG5eEsP",
  "key7": "sXXmGbeFxPYWGPjJcoDN8fKP4LiAJSgjcTccGnnzp2xyzjoe5x1fXityWmeaBLbzXcaKRAKRXu7iFYVn2VDwvcW",
  "key8": "2fczK2cB5J13gSb7ubkPUNvURL38a6A7NGJQr2bkEp89ohoSkHNS64gDXFqpL9u71Y4JsEMC9CNKMma2mx9W64K5",
  "key9": "bTG25K9D5gV7Nh3dNsyKCsGCEShgsySJeqKGGD5Qax86QNQ9eWTVGnV5NYZFwSbvHMxHFffmBzuS4w7NSoMUXRu",
  "key10": "3MSAotZDrsXtFcwNRdKGiFfDpRPgBNUvQxrTHX7TVhzCsH7vs8e78MnqQiRJ1eMasjw4nFhWCigE7PzZmHmsQVP7",
  "key11": "35u7wfMh4emvkrF8SomEVMHGTHeBkQZZ5b7vhGrSCqFMQV926wm4cXg95tycqrAewRwjpZCX7FBJ5PptKBXCoCpf",
  "key12": "5DzmwUg2qPTyvJNrbz2CjfZa9r1fNMdyM5C8FAJu2EBT9mpFvMwuFnNbRkxpUdJ83Yc88KMuhaPsCFD3MsjpAjAe",
  "key13": "3RQrNdxrUZ4M4LYpXGqZkBRgthoj9jKu2bt5V1wpkBo98LstYEd3yaJT2vAtjwJgBF99566BLgy8K8ZyCihm9eGN",
  "key14": "5FCF1gwvDJNq9KoQyRJoYZEaU2xwCEVJPRzvFPKrDSvuHsTJnKxUzPqBVWsoUsWVaMsU18ReJg3zxzevLTyovQmr",
  "key15": "4h7WX4egPpJLTmSUvz5Y2yCHf1VPiRuLG9nNz8QA9Ci4qXKqUsF5CjCsjAdn6qBH3ephzW8q2Dk8duspC1Q7gdMG",
  "key16": "3Qipm8C9dJSEWULfF1YctYtoKpC3LSfHsknDokzXW1p8fH4fBRUsLM2DSUNhpir5fVVWjyXKHDj9LtUm4foEzgYZ",
  "key17": "AYiYbsyKUXUzBM3JooYPFrPH3NLR5dirPB1cKYykSVVkwNzAEQBtfxRjBYHnLQ211Qe8YtuVaFFosPoZUke9JMh",
  "key18": "XaB8z5bqzAfk1tgjQnZR4FRhWuZHjawfdgo1ccNTMGL5wRKCVTLcbLSAqnSwXzAKWvYDZ9SDZ2yWccBJ6Eutro4",
  "key19": "3KcceyrrkifdQx5tPwfn1Ntg4v7NyFYqo3xbzsSLnrjuYW6W73C9MxDNRdJKtE2TBJ8MFDERZmNa3v1zuX6Xs7W6",
  "key20": "5GuRx1HuBHJfCWMP5137Scf9KR4qXaxEtkM4s6jDHjLYU5YhnFuoR3J2cy8JyiEZAsRCVc1vhTaCGFjds4RGcg3X",
  "key21": "3xx9piaaJGuX6R2ic2q4vYHiQajzba3KcoHMjp47hnMm7S9p1xg51n2W3ZPKCP284pA3GaqBWw5saqLKLSsLAcEo",
  "key22": "3fRu5wdpu5t9QRX5qTHkrq1RDSmpZ3HWGn7epXCGA3aJGcu4YxcU92Rfv3PMSJgFL3LaD2xsjRZXEsWifGaEv1TZ",
  "key23": "2PLZkB1gqFAJYx1hohxkRWDtJiXVJsd8sjtH5hcZg7fnkxR716bomBgrsjQKvVvweQxL54EJVZBQJuyqaKMVu5CA",
  "key24": "51R8NqppBRyniq5UzzgpLXnzsX824DHCsnG36Ktt4CsWBnyUhc2VFncDNavzhi11z2Ky1WHk97SU99xA5d79ZpiM",
  "key25": "G4homB1rn1nvN2De8MqsXNkWZswtexXZW3GfH1r7g7o9dXSs5UL7qgBVCmAiMwVzpc2XXqF1gfGZQ4LRMQ3916d",
  "key26": "4DW5DYVqH31RHCgcymsX6nArXcB27eFjTLN8Xefw43kQMPjAAf574ZeXaDrzzehLRRXE4w1kyFkUvbACbpKpfLn1"
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
