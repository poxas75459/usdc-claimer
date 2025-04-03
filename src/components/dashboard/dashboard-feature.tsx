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
    "3R6xN4svrKTqV8GPZJTWvEg3p1bwdcFJPmvkLiB3xDfVXWidw1xfXKALfSj3LDbPeGgpcoPC3fFjNvmGK2EFvtAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvvVkpnn2vk8mjqWZostRUHdjb4gNPGoGurr71Bj3p9psH6C3etyZaUXYVHvMmUVbk9nHsfFzLHAgyPwopLxr6D",
  "key1": "31nH8g3bMknkxpVhXaG9cm3YwycJJBLKuCJZUvL5958VnEi8qACXzFuD6QHPpwGnGDa7N6aguy3xNtEv548FAmaA",
  "key2": "5PrcLciLiYFdQ1EAub6NJp265sWSQVB9ky3rMBTh7m4XSoEy3LbvdU4oeBhtAVsbs2KnxYtnUorw41pqnfR3NkSY",
  "key3": "5JvtkjnbTZPuEgSkb3W59CwRFDqfxg4roozc4c8UPcxa1a2cyX65hbMjuv5eQGV3Hmphson5jpfDyjLrz5TW8Xgx",
  "key4": "3VReU1Gx9Neu86k1971vAu5zAAwH28bBYPqpZVYeyMb73gNEhXLLvT639kan5xVQCJ44pEwM7r4nFqXZjmffwFaN",
  "key5": "3hQGW89RKtSPo1XraUtf4TM3zY5of64y1FQXZ93EkSCDXq7XmcYAHD7C5P1SSttXKnfZY9dyneux3p4ZhATxuzEc",
  "key6": "4LXhLmnhK9sNzCM1qzFTCKCnawdiri9wUdPEEPSAWc1JiC82r3iZDXdjfRfb9rFLAnULYgoaKLm61RThDX4sMEXU",
  "key7": "5xVgDyp6nFFnPFhka2fzQpVSGwwmGoTubDabiTjCVcgWxTuacjnqi9Amr2y5zNo9qzvGy17hWfJ59Bb9V1uQ4V52",
  "key8": "39jLChPbaeM4d7WXHJqHXb9c7mQSRdueX4Zr3chJgMHUn1RczPVwRWUxGBxzGYaRW92rVrBx6wt1pe32wUALxZQJ",
  "key9": "HD2kBuQAgsSapphnaQ9AsEbVQun2Q5gaKesbX8zjjWWutdTPNU9ebxtcpfTy18zj6AufssznsrvMCRgCRFD6YLc",
  "key10": "5RdhNdN47EEquPEmE3RGMY2hW1StUfNmw5FnyU46PjBybW1fMz9jdcnyF4EyWXNDi1meH9oa8c6fvSRd3FRFrZcF",
  "key11": "4dZEpjTapP6oHVNAQdTT9LLNvmVUDDks1Xt1y9LHMznYv3J1wcsBpbcKbm5YDfftneqUvfVDn3N9wGwKz9eAPGXU",
  "key12": "7bgWUpX4KJCm6w2TdfrvXnb8XtqfmJh6C4QUpphseTLdJhttPUX5poAhjCMvw3Jaz9KAKvLrQaWkVFF1sJm21Yu",
  "key13": "2Ttj3kMFYpzvTNf4g4ujiPr6uAUf7a7D6VgYAK7ZvUxMEPuJf3A3c8Hx4ywmejiC265TAtEdNJpCoDhmHqPQxZ4B",
  "key14": "4P4TYv4xyKpt4ffpMqaZeMGTrnnViapPigzGqWjCstghn9tNr6Xg4GXzhHcZTMqf5ykwM7B1iqc8pakvTe4EwQcx",
  "key15": "gvUJqnDhkbhVYBq4k9biLywj5wqNXMh6yFsUhuS91F7J3rapkx1aetGudqaGXtgEWJu5pYMbAjKQtvQAYgZf1eF",
  "key16": "4gzWjUJGP3nnPFY7qA6Lw29FZnyv3u1Djz4rbK45Qg6bwjediQkUWBfLUbibYsU1NxAX8pUEhEaHjSukC86nuPKJ",
  "key17": "36z7HmTXYfQhzdW1HMM5ziEdCk9piwLfC7i1ynMxf2MfkPkkQBXe8AkkjpMeJfx1eEyTJgjWZTcwTnwzAd9EVsSf",
  "key18": "2eLu2YPNV2xTgvaLR7PfVNncECuz96F9FyHw6b2XLbgVmPKcHN2HjpLF32dXyinrseAiUEJRUfMxb9Pak6zPmpzX",
  "key19": "4HQ9n2afNEdN3X2HrBqHxG54gHsfuQGtq4GafrZEoau5MvmGVSBGeBfVLVheL1irtVpQJw9mg97NZJkfipTo9ALR",
  "key20": "2iWdMezyvqbNsqoFDQFtAg43SgPq3kRNaFuzNBbd7128pbrDTJXW4ftAp2EtYzB5Jnfr7NvDQ5eVFJy8qNow5RLN",
  "key21": "555JeoW9kYunsuiXQvSe7ZnGPj46QYDtTgy6UGApydfjiPjBdYx5DEpDBkkd5Jpq85goXPRGXLfTbHziYq4eTQiq",
  "key22": "61uyB5ViAxZoftxBrNttE5bKYBy5Vab9acaDRT6osAsJxQWtqWHhSE9cAXpLXDETCSzfeZ7FKxqyJmKATAeYcVX7",
  "key23": "4vzEbxvs5zCq7ucB7ac7YUq9aEd473p9QjuroT7XToKxkcdun8yzW72qbd1emC99xikqK2BSZ7ayAbHTGnKzBzzd",
  "key24": "X2PMZHcJLfofgNTMLXhCcffRaankbpSLMdca8z3g3Z8WcK6uq5qBXh58b6mE4v461z2CWavknXfZBXaqQu28BZq",
  "key25": "2T48AqWKgHkzs299hZehAydM2KokAyjSnyEnmTtBaiEVuZf1HCCddFEYcH9vovHwhDMW9cM34qQyJeVGnyb2E4T7",
  "key26": "3mJUmi1N8ciNEpfziQNoENWYySFw7VLhXKEsLobBtoJjptqAtUTNJ2b8ZZkmf9G6wTb64TGTZPycKLfvjvoQ3Jzx",
  "key27": "5prrUg2jdTWPUj76EyDk4ESFWSkv7ESzq25XsCM7HcLd5P3bnSu3i8tZ5FFYEiNcateLAh2bt8M3cdJd2vs51KhT",
  "key28": "4UTH8B1FM43YnfdHwEn5Adagtp9TUnYiu6ueaa7RcFEwH9GsZXNcqE3CW2JXMVwdd5JXAYaSfY8UsDGYaCsMmNh",
  "key29": "3LDpVUNik8dCoMDHq5zvFGkP6DdNSuLsb8DhFA1rqEix1LA6BqZNk93iT5E8G7izP3BmZjRGBTn6mPvEiBSJsF5B",
  "key30": "2efYTnhHe8kwh8fqSV745PM8bAR5KqMhUdTvudL75oLdYYnayTbWFTn5gPGdzUBtiNyoWTvBMMNJa7Q8zSQBnS51",
  "key31": "yaz31FwRMWk5TqnpgCWDkGeij8cHJNkVogx7LUeBT9KzJZBrpAjvqBcuvcaY98GniSAe5EtMhY74bJMKDhAYbnU"
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
