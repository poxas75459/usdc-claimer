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
    "4UbqaPpPEjS3ghkg7rZaFmqtWeAxQebzo5wpnHcaMnPA75w62ozdwB8oJog5z8irNfK7ZRdWMyCqQCWxPEprAVjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6nVnrnTsA1NWGF3f3Yk1SExwexy1Y6GytYaLghmJLRAKMDmcMAANW6Tz24W5kHDczfhcKJhR1d9GLtEQDpX3nQ",
  "key1": "3uwE9CW2KFH2X7XH6dFbAMkSY5yN16o13v3aR1pVh52BWHGfhixxPEE9ZGCyv7TxDgdidcmjp1m1PX8CqhziHCdc",
  "key2": "3iiLdqaotvkeYSLGMJhL7QdJsGxMXq3GHG1vxt4yVDYFtkfii6NAFTBGgkwAPe3pjFFx8sEpXHpvPFLgTCvhnCyR",
  "key3": "4xnzLV5UA2npEi4ESMrwqksVzB6ezsuRKDVR4uNFnBrvDJsUxkkKmAVGwoy3HNt2YHkWHG215cjFqJQWuBTEGLwh",
  "key4": "24La8CJBTS6NzqKtqbQAgtwie5zfFTibDwBJ9P4BeiuVGufvs7KGPyQJoSzgWRscKZWH1ZvyfT7TmCrPm1unTuRX",
  "key5": "5QTNeM8qEkeXHYC1eQLg5VNVKAHKnbacZMWQgTLMi2A6dmAro5stdgfcgx77aRHSY8TJk7trWq8PHjT1pYeD7tBH",
  "key6": "27AjMc3EYHfdybcxLRX44xE3DiRHtEvcHzoNWTk4wZtGi8fhFxwVhjNW4zhdd2Dup5VYGnPEB6SgLRyRUVvd2zB8",
  "key7": "5f43izNpe3iN92FanizySzVc6q1GZyXQCk1vRu8RexaVnron9V9e9enPpWUcYN9vDw3i2Z4tUoxNMxxM7tAinxgM",
  "key8": "3H2PyXxAN1u9gpnKHNzGV5SS97qWA7upgj3SPYici3KwSchdhJjJNDJxPDnBebTEnDJXpFYaH2wy6Bks9GEpGLf3",
  "key9": "58oyj8L4yAmYdRfjPR4juFKcK2w7PQUCU2Zh3Xz3qESeQFg42bfzdpVgrGrH4zvMbmsGocAWmPLqyWxRoP2x4yLR",
  "key10": "5PaBSwtwpwPiWoScUEhVq74WeNPZSKcCnBTbDym2LqU63HaLpUy7y9EoUiCdFN4d261STm1414fXcDjTjndS7ek1",
  "key11": "mN9vSikkXaucTxHZJS4PDBuE5NVyc2UFMG1d9dosPYRMZRph5aeb7EdewZYAuqh3XpVehnEAzzyueiYRL5jHico",
  "key12": "4cy286QMXxgmz7nVH2ksqwsEaz7xD3GDRFAVKeJamSjqTQSoss66u4BvcLvstCBQ6Y6nYmuZmfUFiWDzSfrN9yz6",
  "key13": "J3PbtmT1nfDHNv3PosDphfgsL6EVt2Lu9mHMLwuNK1fLwweSjAn54rw9JRMZvqgHfywMnfcwNtT8fYAPDuFQden",
  "key14": "5H4dgtoKzc98sRfb6myLdEBFWvQsMJjX46WyaQCtVbUmEQM6vxinhzsYHHjA7F4sUc2zmG1TbGPcseppMn6nwSxq",
  "key15": "2EnsPW1b61VwjcerhKQiYfKmYdHgGgdgXaPt9ukPa4snRMHxAx73TzhvN9jRG4mLqGMaLos2zeN2HDKP4gK5R2Th",
  "key16": "2KkGanjE1AaUt9GoorQuF6kyEZMhn8ZQu6wLp1RZ9Abo2S1JzyyN9dEG66yyoqP9PYaF8faznGgsgDoyVNwoqYx2",
  "key17": "3KHKLkB8xu48nxcCZjNZznu4HbSzxg4iMfnwJSkcj8Gu3FMVZyJZJQ7AkJCEsT6BJzXkDooJk5gPJDtugDooN9yV",
  "key18": "5vbfVZsQBXmG5upE1n9b397XuK4Y58vKFT1VRpVi4Ew82G2gUTVDwaD5nVTeTJtSAhLAouLxodap3eVoW1kwiqwi",
  "key19": "66Akqyxv2Sf7npWpa8XmLKmpd7azYsLxA7stYqLcq28Yjy2WoLAJstaEZBBLVVBjr8RrzJ9T9Qz4mkmUYLvbcK8s",
  "key20": "62LnYeEMtorNFLyE1RiYnRsCtq9g49KfBMHiKE3jVpnCkxk924fzuySeNMH8rMPvdzJPgSEuDjYk6YKWugdD3eLB",
  "key21": "5xrjDkp1yzXp4LVeGJLKWYCymMtN4vsbCjWqRgDvE8fZW5jNqgePiDFksYf8zM4rHVGGKJ7bA6gdyEne81Y9m3tk",
  "key22": "51pjw2unBjwDATGZTiJgZey8LwC6Yyaj2n6H5bcMVirXmsPn4pnqcpFdAhgcuh7ii61hcvPFi2DHiuk3VWhYZ4YH",
  "key23": "2hZ7RMi9gHFWCwuiMFVGipHSH3Jx9h7jUtXS6quTJgKdvU7iLrASpP9Y4ELoSsHkBNYkieTFQ5B3uwQF2oz5Gnb4",
  "key24": "m1KVsQ6x7J3D1Tq9AFj2WqV2hUnuGDJbULPZFUX3smcnT4GVVHdQ6f3GWhsQawLZ9Ec5vrdjiUtLv5JHPGodKJv",
  "key25": "5HBCKw6L4RcbYkHp5HY7VrjM4kRseEmbWVVZUNFqc1SyxpGSVzCydo66SQDhYDLPue3jexKjipXAfdbgPEpSrGcA",
  "key26": "3xeMsQDUfsAipZ4eLArVwQbSsYqeQW8xaLr6CaCH6nEua3JaFjodN2vj7bCW14aNtgmFTg1M3EEA47VQ5Hq5Gdx7"
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
