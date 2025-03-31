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
    "5L5GgKeJQGmkj97ejESC1ZrujYxNTgDnSL4XHb2ntG2ABBML4frqhYXovodf2vAgmELDLnDjkq65p78sossUPsGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52SMGa5kjiQCWY38XVyJfyM9XBMCfSEn9WL5HbpZH8wWrmVTNipTDGPkJdPQpa8mZjPvL739GUB6z98yTPg1iAfo",
  "key1": "2q6z6RxrGKUvWxnsQ874DHZyiqBwRADLSKiqsRTEC5XDHwbzdvtJMKZmWQwbAxCK3cWsc74uknu5hE9gV5NuZ4nF",
  "key2": "3H6mU7Wjx8GqNoLutWjPrr1RiybrN7zJuuKzsMSyjihAeNyF5QW5JH4LadqMWiX2Hukyu6q9uijW7fX6JcopkTH4",
  "key3": "3NNE5oST2qSGKYAStJg9EWPbqEMcbSGhDqjuqB5W2mAev7E1V2G4Uer1Hr3Jk5JRppqtca78stegqmetnz97BfDo",
  "key4": "5N8DhXwt8nmw3frEhBgi67vyezZPvFtjfR7e6i3k9cJtQ1jT5EJF5tDL9dKuzcb1TYrpRNXzmJjDsZX3m9Z3cKTc",
  "key5": "3u7RU7uyAGDdj2FZUewpqsY1PZX5ztqb2XpnH2CGzhb6js3HNcy7yL8RguQfLbgMgUxbjWMX19GGjptz9qnu9FtS",
  "key6": "2RtSmaQpUrCHPZGeL7vxePj1nxgXa2djTD2agZhtJwwbvas1rCvno9fNa1WPVMfksbKcEQqNwYNmh7qrM1SgpJ31",
  "key7": "3d2hGhphYyTdMNHe7BDjgeCinQU15aSXTzuodbUfxnVCdPSQMX1EaaCToMczZQgDnmzbuh2FrcmbGt468UT1SM4M",
  "key8": "2DAu4Ru6k6my9Y1q3fAJT5yPRzRfEK1osy8unxe96DQk2XRgxWN67yQPmq85WhS9hzGv9WEnMBPVp5hASYu8twjb",
  "key9": "3NHkmvJHFCf8925YEa1MUfCdC9JTEPQfWRonpJEdkAqm7cc9iCmgFTwc9DpMFwvxCobMwyH5yBonQtd7mzt8gKHi",
  "key10": "3PvqLJn1CWLG15kxeYs4JVyNEUGNrvdBeNFz2VeobAMBp8TfqAFpJLUYG8vZTtavUs1PZQ4woped5jNYjgwN8nnz",
  "key11": "2a57Sdgphbt1FPzyMoLZ7HnigUqVA75nbuXf1Wi2hhTbHJJ1NuR36EmB5NrABeV1e6oyrWQ6mpjkH1XxMTatMQQr",
  "key12": "PmpREpaZBfCCai1Md3JgfZ9McUssnnRjaJZ4vkmGS55v3SzAW83afV6DKnHRSy44hHqFigRSiyNUZ5qpHYMhseU",
  "key13": "7yuKuqcBTGsYDW1VFBPparcExmoTgzxtfQuD7oJ9j3gE6bpBkpYAwyEQoDiGiFA3yvpvoEMk3UZmUD6RhrNkKZd",
  "key14": "2H6JVFVwHNmeys7x4CiHWkz4Va3uTtupecGDHG7MqCGNfEXCivdFDZT94U2WGTpbTvFpJMSoXgJrhfCdaC6RTTqA",
  "key15": "2HKHBrUXD9QN2n7v3c1Rnwk3sdJpjZcQkZWGXqQ71mwSZZejbTFKpL7g1ZvKi85i1bMydVjdQ3AgrdbTpG7bVAhS",
  "key16": "2Aze9ir6J7CpGnt29Ghvvj4RKXeEHBBwfLMjx1x2nYHjUKqFwrWoWhpYBmLw1sy6HY426zMiR9uSwxg2TBssxvsa",
  "key17": "28jyK9kPEBEoaktSe8XQod1mkFa1T7e573jPcLyRPSKeLs1wS5QXr7auzoqT8JJCDJjfJ5m1gXwLSvSFP3ErY5F9",
  "key18": "51U9Tmo5u1EPWxwgeBqbpwcbguBgdGdUoCNgmXHgnB2PuUth3yrasNy66dJBvhadS5dzuHkSQ9EL3RCS5aeu72Ld",
  "key19": "27C3DbamTj3EzQJdPibPAcH1SBtMJ4FqXUMTzJXujq77g4euDzvF7Gi4Eo7WfX38BZiM45WSEBdqNNbaYExjue8d",
  "key20": "67GDg2BDSYPHzaVQ218E3swr7wt6fsNqkhQd36JqByx8QbrzQQzSL1nNRhMbd4TAy61sRr6aiobxx871kUURdc2b",
  "key21": "f1d9hKoGMAgs5uxjfgR8d4SgkZg3JNLQctn4SXVi5uWmT2bQv6ew6FRiH2jhHupSq4JaX5zAvU4qRrKcxNrdGTX",
  "key22": "4NVCNym7ihWErdj4EajML5HEew6SphA9DsUY5cWvxzEyZ3btNQu9mGaGGwfP2xaaNTjYKwE1ui29CYW4QtrhAnpU",
  "key23": "5UDqHTtTXvHu16ZJELjCXasXPfhSGAoVXfB6BC36nAPEV9NVRq756hhtA1ZWNNQGRerN1XSysam68GbE83LVfBxG",
  "key24": "3W4Buecdt3DFoMmpQDzkk9FZ3ffNmSEwGhhmscFdTCKnwc9Uwam6VbvVECX8wi12ifQRRvYTkBR21E9wDZW9ox2T",
  "key25": "nKqg1rAjQ5JTQf5NQ8YYAs42mB4UHwr2FcuC7RAZv2qHzHrBJjXpY27QAd6YJdfC6jkDC7iQUYfNrCeDEdtSyrh",
  "key26": "36ALjS5JYJd3TgaNL268DwAGVaATJXoL4V4GYoSaPKonPP3v3D4qZbnf3KrqPBskrzE33LU85DfTqfpbnMAdCctF",
  "key27": "5Lg5aZoriovp2CZTA7YLP2Q6cuMeNoYXarXxHDZuB9iJGR3SaRwv1Gaa4xfkzUZa5JgVZxvrnH8GQAp1fJHaoHh2"
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
