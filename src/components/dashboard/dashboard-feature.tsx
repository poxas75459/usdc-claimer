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
    "4wGmKFJcsESWZg6acnV3YnKDbpHqhnSkJkDwxamG8PSkyD6Bdc5jA3L4x6FfxfhFa3zXSQp4LSsB2bKR3yLhQqXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXRi7Kc7pqrd6J8R3PjWzyarcyVScrPmSxHHDKtwcAUBmU764rpidEUK6dmtQ1KumGdFC97Yi33zFzYG47M2cj1",
  "key1": "52TNXWHi4jaXC5umqUbXJdXHzYEd4iVBqdHRYt3TVWgCv2WdxQ7kVRA5RrGceFkBpexksxGrMFeUJ35x3zyvieH3",
  "key2": "5cEtaySnBZdYJteFyzLgnc2B6Ur2NhQZb3aLbmkom43Js27XAnWbaVaoXTKdubU1VW1wjWYvuGemfU3uL1Ew1joj",
  "key3": "6vYN5CtXKgooejGKRF7ManmuxK6e1E3j4S7BW7QJt1Vhi9LCAfdtU2VW44LfabFgLdJJXK5rWVqYQLdF5eExdS3",
  "key4": "41en3LMfBc8Uoh9AZ3faUewTsqVPQVjh1rmgbzSjQ8JHSn2mD87V6B8ZUdLebshGcgVBTBn8DLHF7ejTwzoGzhDz",
  "key5": "2zueUa99Nyh94UgaxXyUz7VYSdgHPsEA45T2Y4LXM85ut2V1BKDhgBGaseBqX18xqvU15gA62vazYezgyvrDYDim",
  "key6": "3LEZRHrnujsXAkKp2z84QV7LR6KC3HxSGymbaJpLwwYGjLR47bR7yahVdLFJ3jJYHoe45ra7aNCMcDgEiLm4hrHt",
  "key7": "2wWYuiF1zYZ4mqR5uVAF1evmbsZ1iuyw8KQQqi73oWCXCvd7PJ58e2yN7gvBYoZwH6SiCBK5Rsy9YNGZwPY2Mx6i",
  "key8": "H8BKCYJu28hEQj8e85vSU2JiCJWFjgt7FctgxGvoyai4XPMo1ziJRqV2yva5kkCGENvM39pxoA89obJ9EoxP3b8",
  "key9": "5tSrjsUAmFDnjQZ2NAkkrG5BpcwXbHcbwjfGaDzaorBcrcGTBRBsz5Y51qvQrPnLPb2PBmw7zAbMCWhjoXZZjQ69",
  "key10": "vZdXMdF71c25FvyiaiEZX1LJidm83NoFi6QQ5rhpFS8wc6oXvRcukxoXNnyH7vEPmvFJQB6FGq4mAnYgYKZ1So4",
  "key11": "59yzyB2o7Ct3pKVU2HVQDB6AScLszopDxvcxgg3cg9mr4wpVYA46JNioaVXDn67G9S47E9YdCqhxFJMiHmzFAUFA",
  "key12": "3LiHsHpwa96xr6yeegcT2goUcRGRVr1iBTr5aV9UfstMuLoGRa6easL6G66UF7BpYNVFpJT17SscmRQ2sBPGuqdL",
  "key13": "5vSRCEXTb4Vdq9ABhyj97m5ku2TU9ewTjjYVyhHg69dphxyuwwCuavdZhXFSkQzcp5HhxsYBVcMSqLdB2gs56ooD",
  "key14": "5RdBpk9Jezo4jKJQrFSNfqF7oGoGNX1wUYe2ssZG5zH11e814Y2JyuJoRFqZywVHYp7sP8SMCUc7PUF937h78ckT",
  "key15": "5FuXtCVzBML1x95jSViZXRtzmAkKLExboyWhSQfFPBqeBMt5jGKqere2mSAgxs1U4wWbQhLcRjKXgVe2HNnzRH8m",
  "key16": "3ZZgUmGs2kzRZEBBHg2J4qPoFhSyg1Te8eVhz5Gm79xT7K8WkzR7mFpf9x9xKW43dQQDzkzs922DgbWN5bJ3ZVxo",
  "key17": "2qHiQKtc8SHe49nuzPH1DQaBCqiFy6NZJpPx8sZeVctPRoycS7G3tFrrsB4dudJtwdzgTkoFMVsTUxnYPb5cAJyM",
  "key18": "2JTDF6AeJRESm6cHj2dWeyXNxMC7s1JhpKx4RHiZbLGt1vWTuQy8AHJenH4jeGCJASn1PNvnAnJQNgpuFWZh67sQ",
  "key19": "4JanPFN5n5AzAJayvgX3FxDfdEq39hNp9ZCt2L2boPFkqpc9gfLos3Z3XtbJwa471Ra3kKFtceUCXqBgNQLHDxB4",
  "key20": "57pjTtGvTEefc8Zo2LtgYGLmExP3uAjvMw4zDNP1VbvqiGmG8ioGoZwmD9gyfpzJK5p9JgEYXMBG6NF6TY8wFVL6",
  "key21": "2bmJuwSE4MWwfEPmZecUGzTfQiH2tJcDRt775FDh36RGJWfJeuY1oAzrVAEMDyN7yo2BuMRnURJtSSoc2zxqh7oy",
  "key22": "S35VBfFnygh9rg9XgXCYXKndJmGxvPoXrX931Dbrh9tw2iJyCXRCWE85SoETk8kobcJRPYFzYybScm89kayQYTA",
  "key23": "2HuuqtsvjSaQZJDSP6KDXAe5ZxsG2ZvRtrWRfA2F9dWiFPV3PSDvuNzv74GqYwM3FgNqzpJayMhckFYh9DZKsdXK",
  "key24": "4Jhmo3gDc8xuYx3M5rUKbbq4iPyNnbM6BW24By3nDu6xk1fhfbtDbVejW2SWy1RWPWN3vwP8DtrZ1dWSzxqrpa3i",
  "key25": "3HgaCp9H3BpmHUKMekqXbEfnudSnkMhPeuRdz6PZDpfTLxbeXzkx2RsZ2RGK4awYmm2rV2k2cJYhkU58kbicbnqU",
  "key26": "3cmhN7miqV5hncAeH5G5gsure2CK1qn7kcL6cAdWUZDqANSXz2GFxLZeLU5dq8ALR2HYw38rB4UGL3XvbwY5FdfN",
  "key27": "48vjkgDpLYwfcRCwqNAqfMqvtZSKzWfVNLPSRcMYBBAJ9DMazDMbb2amXuWNY7suxZ4wax2qSCLz6e8ucXZ1nNXs",
  "key28": "2KBP6VbDKRwQvpPLmWhFyGUjVFWdeWPeBwtz3PKk9HQAKbiADNsS1L9n7EhmYZdfAEqqhH7KuyUqogPQ1K9iwsHc"
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
