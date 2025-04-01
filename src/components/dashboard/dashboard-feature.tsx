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
    "ht4PeJLgT8ZN85RbU72fUsushrw8bMZ8Py1t5642zzeUFisB75RFF2Qn1LtNNbULfKQgCsmtw7r8LFBkzi8XRDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jsguRmJKXvCq4yZXD6N2pVKnCPX85NNXVJwnejzauK372vcerLwm4r59rLrzH7V2krUhs1eTX5JVfeMBK7c9hMj",
  "key1": "22apy9LPmG78z46YV8cUQ5SczLrRHkwuMAVcncvdb5aRdrUSuKnbJHNmbqY9Ryx6oin6S6QyCE5oUuTRu4jSCZHG",
  "key2": "63m9AWwyH4yqhvBE7ixzfinQ2LfQuywU4or1VCnrQFaouoeKUFTb5JcNTKP7oAUvErtDDWcKiiGsCDqdX6uCRCV",
  "key3": "y2FWPhchiABFb4BJxJrngZJJapYQDfLBZPiRkxsHde2Nf7yKeE5EXLDhZKVYFP6jp9vGiZ4ubMjShiGqe7eqKAc",
  "key4": "4pbnm5ZV2GL6cdAXZVqh2PN5TUwpMkNpVgK2gzPjH3Mntm2arisgSyXvbNUJFotP7fd4mz9oXVTr3Vxb1ZGDvqL3",
  "key5": "2scbetPH3caZp5BsiThDViYXBw6riSr5HVh8s1czcnKPLEPiqkV9xySAo13CsVsxVGgHBuJN3ddFxK87pZBVsGbr",
  "key6": "4sSVCtcT7Bh1eQ1xrPgNoHFTCUpqynsC1mqfmV2aaihqMLM5bmfo8cTkTNV5WzQxY2CCzoagJRRKBJh4qynQqUKw",
  "key7": "3TZxZWuBVvhxoYjx1s1oSamYvwd9JSHYGWdrm6GWcs4aywG5W3UWnocHAvRo9Df7UtWuvVyP3C7iKwCPVxgpjKq8",
  "key8": "5iFk9f7FqxVXK5xnmRLcDMT73jAvVaLbmhnNa8YuUhpKj1W5G4mb4r5Zk2TE1KKvZtKHoLfv6ZArz2GKrrJeXkf1",
  "key9": "4VHYCDfdAYztWtMGjwsd9kqaUGkYxR3PyUvfse5HQ4gd715rePT5dbMdL5Gmxxh9DMErfNYp2rDV6MjR8vcAW7iz",
  "key10": "41csP66KtqSwPwdtBKp3UgmbiX6hnL5X845t41nQaB9WfNemrTfjz5xmKq8BNcorF6fEbvMaU6YSuQCVDpa7nxC8",
  "key11": "2BY4hZaW76fKoXnMWgUXXRre6TLKLShZK6jFcmTiRsmAtMLyWGheEgrCFQyELLx8JXmv7VCrbBZha3jDKdP4gESn",
  "key12": "3XcreDKNJqFvq1tCVpBVFKLf1uufkAK7LG5PEKC6RvG2SkviQPkRLfDSGK5REbiaCSkL4eRppgyJ6uAwTEMmSpxd",
  "key13": "3TPVRinTZLTL716saurhGDqu6ALAj2NuXgNoBrQXMLGbcPs7GBbNDZjCmFRWvUeC3UrMZQG1aYSEoLUWV5j9rrFa",
  "key14": "A9229QJWrecbwP6boYrKaiy5qEmgomqE6RR3u8aFPnW4VcFiLW4ZFgrwYtdunfuvy9y66TUfHhFcwnPL26RcPMK",
  "key15": "qa7dhktki43JtWQBvoydSfSkRTjTtSiCFwtnwgaFkkZfyQhEfpJAE71NoXs7w8ojr2bQJvHxFm4vFTq6spkeoEG",
  "key16": "2ixbxGoYAsdCFDbTzZtHtoKBGHpRMFt9EQUUjJnjtV192SZDorHaUgxwvCoJZk5NsFeETz9XgAXn2PRTi1SgZfx7",
  "key17": "2nw2V5wpZpm2GjCysYnzEkyTFik8eWxK7M5vujABNGLsfNf4BSQqyPbY4ndZQLf8v7Rr7ekFkpDGuPCLHTGwgSCN",
  "key18": "2RYdUqLnK1xe1bzXa8TajFnnU9rgsnk8nd49GfMPHEs6PdFq1v3MDyXoR5Pm6nk5ze8yZWvmmR6yGi21Vgtj5Yrf",
  "key19": "4ParaYZY2dvgifv162vvRpdeRr3DyUcQMCJjMZ3BfBKx3z4PA1RQHGy7Set2JyhHaAtUF17GH6ca2wqnnHzcUMLm",
  "key20": "3GK8djtdiJRYzAExm3PffCQSL7oTroQg6T1NM56RWBHG3dSQ134nJUz6gHgBSC9nQkV7UdzfpcytgfNdtpiYJZZS",
  "key21": "5hvXCrUmA4XvJBcoNqBL48vX9of1pcC6Yypq8yKs681X7tyK8Sz85YGydVg1fMgNktH7K1bRbH2ZYFxY4qW4PXa8",
  "key22": "2E8g89pqUKQcRWxtWCTrhBLxhmP8e4hHJuYsHqJTfKMqp5vcR7SaDZngrqzyU1EmYbuCawpKr3fdsqpyvwb6mDux",
  "key23": "4deCD9UDYxr3A2369QS28eJFmJQouer2hToWFKyvCvM6LC3tF5XsN1nksNoiYfLFiMmQHTaVUf7H2JHmXDMZ5aEq",
  "key24": "mVKrJDv2UW94xKYMboKLLY6w2weGH7ar25Un2b3TsmG7FZE2qrryX42usukgfJsjzthi8wcLWcnWAhGR6Q8WL3J",
  "key25": "2u2gvovwyBjN52ksCDkqAE74yrpZ8pPRtoJmwArL1vrDKTNyk3divNvCnnJNTitB7AiXEUFTwcFJcoLifXm75U3x"
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
