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
    "seUgDSReESW4CE1UUsdWvkCocqp4uSqf9jPG2n8N8SNCViTQMoiiMGzG4JqZRxyPnjG9tbJTbA2rWGjbeNc7QhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CfAMZoQrDTxcUyT9hXothhF5m8VoDD8zXC44DhYt7oZquQZxZoqSkLDYv6QoHEBMLoCj226scqceYLBPRmMus7r",
  "key1": "vbQKTH9xhSXExxukoVzRR15FiGKgxPg5GwLrVbBkqQG7VW9uyskUnNB3cDcZX3YnKfrihDe96y2smrA2HNP9Fyq",
  "key2": "utbZ5Eb7JfhceUMpP5Fx4BQ9Em1knjdhZ3sVY3ZkEquSNehWtQCt8fBFrxuctKXiAH8o8uDwwqLvPNSsajADxLo",
  "key3": "3WeJvravDSrtACf2SF1sVJRNWv3sM2QAMcPxVYg1LQh4FKKuZU3p4ApUupZm5gzUAAuEqRKvZ6Ew42sfw2hTfvng",
  "key4": "4skHL7o1FXJ4p83PL2rjFTzHT1jY4CVQJcHa7QdxeZarUERPTW8Nt7ax4H6u3Fm8LfwzEjQdeRNMGyuppru4TuCf",
  "key5": "5V2gUEviZ3TQmxHqYfwTVByspjNGNQynyf3zfaryQoTGGFWHXjcDxgoUZrzqec2qUih4SrAoTf3toxLB6oid1wrH",
  "key6": "2okw3RVnLZDpwKB3awqtJn24J4oPdHvcayX78yFFHPbA1hr1gpaB6mnogS8SfCMTuZ9XoP7RBZgLxDtyHfFF23zn",
  "key7": "2k6g5kKG2rrPiqMEtmBxbbHKmuhkTAKHcAjsQkThq6Xv3SgtuergAKayozHeziguHujcPkbgPHEn4iPod22MfyMV",
  "key8": "49ccnirsj1Lg4hhf7wGTfSnda2PXk246NfrRgMBhyXydFYUabundaHBkhLiHV6uKu2V2WxjV1sUxTTEmbCKJkvCz",
  "key9": "3cZdxsmhq4atzNxKKKrNfXpKA3HfAXp9qfWY5TNrvxAqL7HfUedfPceiZrqj9mya7D56Eht7cu6H8KFZf24uuNWG",
  "key10": "2fVXKVvYts314mvjZ7uxXcBi8No9YNyo8uLWCbFE6sZKUZTcxrUqKi3pBBhmxbvef8MM1GKuYLXvreg6q8nor5nj",
  "key11": "5T3FzukLmuMRbuWzLd7YFkMo8xbHp6ri6Pf2nx89mAfSTP1uyLHiUXS5D9xHMtYb1vS6YTFtcvFh7PbcWqN1Whqx",
  "key12": "2846i15LT7ghGzpJC1JZtFwJR6ttfSoYWjikV1kkKA59bBAMHD45effwsArTJKFXV7UD3qB3CgWptCZXvtnzksr2",
  "key13": "3BEPUAVKBmKeCX9hbjHAZEuQMe516i1sdWqQVzfUp6f8crHv18pLVJKhYs8bF7XA9mdsVGM9C4ZJqUzG4ofnD9uT",
  "key14": "5nkxGapDBqiQsCxLBwR66CWzc5GaBZHDdV6tMcopkty6z24NgSfJArChj46HDM4X5iizQdyp85zAYcdGgDZBtmBG",
  "key15": "5ZpGAVfrsiZKAEj8cfcXG8PBoJ46JL6VZHQerkbTrJ6zHuUNBk1Gt1Z3KW64wSMDFLsBMdkf2GzhTJcD8mCDEsh",
  "key16": "558FjuD2UjBg1w5tT1f3udYcvCfkHi8ZFAVTNqYz6nCVKPFAFLtQkpWYwDWjdRg7KmKQMYU5X89G2fVzdFW9FQ3U",
  "key17": "66yCu7Hz9fPwJiKSVQafBW1DRtJ5CijB9dXw4sQVzdVbhfaucUmsV5BKnHWhgJMc2a9cPcX4KvTGuR2hhM3W9UR3",
  "key18": "638NRxsHuAo6on35A3dTSzdLyVUTSefVUyCoRTdzCjPAVKWzCghdYfKPvnoHy4fiu3DdqHsRrDbM1vbvei2E8sai",
  "key19": "MJnjnp68RnhA9qYs5TAYDs6aFqj3PE89mn2bxZt7bgMwdTZc7GuKLyBberhY39QSGimXFqZXY6h6xXEzXypvDBi",
  "key20": "5XZ1zyiHQXS4wGduHuSSnh5rE6gb5dw4AGc4E4ZBH5fCPWdkMpCfG39b8c4sQwXEDnYrRXLZVpigswMQNDknSmJJ",
  "key21": "3gtM3sH7eZ9WXVwwe4EnLmRGeVE4RAz8wnPseRLdS8n9SaxYV2CgKHqKjg2toHiKFKwpWGA7TDPnwqC9egTupWUk",
  "key22": "3ajGw1CtB2UQUKMwDfdp1j46JjagXqbyEZPPq47p1ob5AB28r5KwG3JjchTGvDhBXd5rydmF739ANPUigsVhdk8S",
  "key23": "3Rytj3mixrzDdU3MMjSNDHFwvaFkEcG27v6vJLPuJUUWP2PP4KoxEpcYELZ14aTEqkoEQrBqLJMrZvgqemEqM11m",
  "key24": "5oeVwHQyMJmtjKGM3DA68BWVUkPSBazR19dfgnX19kiW9LX19jJPKZFK3J2n1bjUz7A9vKhRkHdoEc9niG39jab3",
  "key25": "59GygosUwMY2EcbRSBmCJQCDQrRW33Je3ubkdGn3USzGXTJF49f7RDCon5UpYUH9NtnADNC6VTTvLvuvk5G9wDzg",
  "key26": "62LcDkd8sK3LyuAGAvi6GtmfZc4NDsEQQTaFUUJ8NjWu5veyQUtb1MCf9igMn9wqVUDUVcrJbwKaxJscH7iXVhp",
  "key27": "m69fDKGpTeraeNQ4CpqMtroTqCXj36LxKwKbuw3h15f9mziDauyeek6hM4rXXCSHLp4ReBUVHsYoEGiYbzUpxzc",
  "key28": "5ab2tu51r4kqkRyRNW8EKMp53UAMKwvFzPfrm8U7dEcmLJxR8NXs9RHN5UPGG7YqC8ccbKXWFmcDZZzRTyms3G6K",
  "key29": "53VW4kd7vdqNjRFrWbTktouyVjTWJ12bZZYURovitkLzjpbVZGdmcLqUD3cSCRu5Yq3qWE1TrrVGJ9WqsScJpdXm",
  "key30": "9CjtRRnYzCZLNnv2SL7g3DC2uJVjKnBG2bRAi674uRzG7eZvfGkNFzUmBeyr7cr3rKWXwErd6X3JFPRPgMF7zba",
  "key31": "4e7x5PH9Jso9Fz5PGKDGCQDhGK2wJyE5yS73hybeWnDJE1XrRDonfGuL9iNVsBzBNyoLkPQqUjL9mCqqBySnp4K4",
  "key32": "4L1mtcdkWCJdKpfPFfwTxQ4YyCS5B7madDBaG48WhpLC3qpxZ1ifnHq3aG77cfDgAMDSh2jZdH1P9ZU25jP8YwNg",
  "key33": "3Zpvkf5j7rPJLc7B5UwbJ8gqgWsGqZ8NLd9tRELGofyw6eSQcvh353e4c4BCduY2hLgfiLkfPkK4kGGjYgkwtFUv",
  "key34": "4RqHQsCRHwkUbL9uf6kVEuRmc8oiVskzkvVJoZnnHms1ji3cPtW6HqbAYs6znVY8N5oMSveCZ63KVtUVw4xZG1ti",
  "key35": "5kKdKKRoGt3EcmEUZfL2kraf3KR5jAtzKxo2FH2dXSfU6Jq2eJeXHiM9eqbxRAVTp2NqF5YW4k1ZnRkWgSG4zvB9",
  "key36": "5xr8KdszJm1D4126PBcW8FYGPAKVDEk39oaJSTdKjH1LpvN7HxGkTgtGeWZuoyNGsF2VYqF4yv56oNSsRce4pi1A",
  "key37": "3sQb8QMcaqMcKqfK97o9fY7NutTcdjQ5886wdiMaZ3jwPXGk2U8GPxd9FbogJs4ogtEViydEwpH7cCNzkQQsHopC",
  "key38": "3kB5xdN5WVW7k26wpqaDPYaWhDkWN4bREPANfpgVKnWtrmeBJnJ9H5DwTE7ixm5XqriFKoNumGkhqn1rD7JDV3UL",
  "key39": "TCwrLube5r9YY4k6yZFzpY8vf3xXLZeTrjyzcXH1BX9638icB31R8dxT9asUobLn1Qb5SS85Dw5yTiFtjPB5zS1",
  "key40": "47gt7qvLvV5QSay9iEuoDiV7XHWTszSyLQbtVLFm4haaakQ7Cvcam4p2TCMpDKYaJmtsR2HXa7mT5EttFTXZAex7",
  "key41": "4B6TpHD9SWAXJZsmg1ybVNgxNfT6RPSibmaNciWk6CsmMjesPUTNW59CXcBcW9HzyRvRzx16QoDLXAXPrLG7kps5",
  "key42": "5Y1RNQBXXPemkW8LmsrnU4k2UEPoqU3dArt4Q2HB9JZdz3uaHaVaxHg4bG67U3MMXgiVAXT6LdVoxyWfaBJXcE1",
  "key43": "4shE22rg437USVcEYCjA1MVgrbKPv4hpYMMw3f8QUGVWGprF4MgghTYa2wgoJd5PQZoMcKfZGsmfyeq8B32eNVEw",
  "key44": "3RaMCnhiga8jG342nJSA1DU6itC2PL9EJJrAucexXPzLCoPzKSsYU3Vf1DYTnJdcsu7J59oyAsPJYMyFkDZ4ZZqr",
  "key45": "67BzuHMTL376QnLwtFwfcuVaHSxU8qyZi9uUDGLt59epDzhRpX6QF82dJyDnrQf8x22GJvt55YmxDW6Vh8BjBZbe",
  "key46": "4Kejk7CRFaJuEpoGf2q9t4VB6CD29b5LVQUmnQYrcTG89g8TiwaUK21hiuHB2eSUu571cZv6fajvuMx7EnzBnMGC",
  "key47": "5kk94KKeuGZKdFCCZKP5naoA8cb71GLiSQjw9JgqULFXEmuavM4SMwE6chm8XUfkHTYDmnWw4MvJXdYAU4USaCzx",
  "key48": "31a1ScnqyZgk2xdkFSaENb1VBS5P3JgpUhdvy1Ezm6BYzAM2WmCtWnejT5DB5EyvDJfsEuqSk7e7BWK95xHza2dT",
  "key49": "2LqNLobcSrshMuNjVhJZtisZJfayd39YKJHuPetBUrX3Vch542eUjW94UnRLADZ8VcTK69iwhRq4ZtwSmMQv1iBP"
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
