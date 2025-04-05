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
    "4VPycPV6LHkwrTDXgey45pAfWhvpyVngeDwWSrrgU9M21HiUf1FLSMqvFZ4e55nhFuEB4uWqd2tUqYBZFuSUb6bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41a41v6pMdkve7BXq4hQs5n3sVDppWVNVMnBZGg5JXJPZxL8qFEb1BrB6K2mZu4tzNqPqdrWVYDqBzM4V78dd6v8",
  "key1": "5Qja961woQVn7Hjih45aiaECofja2CrVQMrd4WGmFDEvfze6ePzSaULd3Bbhbz36Z6C6UBv2RGKdHPGUfAb34apj",
  "key2": "4DsuTDkm8nc3sXgS6gCQLX7fLJbFworXv5U5271C7f3MHUNd6b1dWuDCAVrvhqCgpnHVhPNoE23P1MXdggWrz1xJ",
  "key3": "3LPPBubyaabSysCe391PRgtLopWCSLw37TeBad8XG2GmhiHEzNBaxaG169ENHjaeB9ENLXgfQHNrXZo8gHyzB8DY",
  "key4": "4sE2oFV9CqfnW9SrEngHUu773rDyzCDzdfSRuPswkSfurizp2yM69hTAJqBVbTPuodzWqtsadCqytAgbHxLGQ2J8",
  "key5": "4ZnTBjZVuhuXrb7JyDQAY6pANv6rgr8p1EP5L5BuEkqzGrS68STCFc7GHfkEgE8SAugJ9Gav2MDh4NB3Wwfhpq8j",
  "key6": "MVhoLeWnMtijywzNs1fJ95MCyC2ETQKJNvsHwwLRCBEtsN7sznGdusWDFpffAKCnQZXWBUbKSmJqmuUnWNA53sd",
  "key7": "2c8JBy9vvCCHaNFgkAqjWUcKoJMgwi3qCXrXUGywKoAbww44aAtWabRfNZZEyiE57beCuU6ESYfhLz19Qi1QMMA3",
  "key8": "4dcwHgcnutKXeaB2rG1LB4wmeipr7KRxwyDN3kqZj6HqdKfh1c5XaJEAKyfceYHgpS58uJ5TLgYZeKKmYLBPhQJe",
  "key9": "2AkMoCGKg3oxnHh5RJJob4xhy2LPaiukES74dzNMfeF7fU2doyk3Jtr1yv2fgRJuiFdXh5hMSxxpwhq6wLnBRYDx",
  "key10": "47kVZsUr7wGFqngvF94WfiMPg1mpN6BMwBDHt6UmR8QFHLnmRqdAZcsQKsUECpVovdzMfjnzhiaKC3PZCaUdMP3b",
  "key11": "3knyrf6RXJv1ojLkJSE5cF3mKAouyZvGwApqDN1xzbVhPhS78b6385aBi3vS3HG2mhyZwYtDM4E5tAEWdkNcumvs",
  "key12": "3eHfbTnjGGKtcukadCMze5zWKnYFy4maK214Kihamtzfy9Njure4YCdm8ne6VEBtDueQysGE3sVZiPLPuJMbCvr4",
  "key13": "5Ndxub546aAuDTKZ2yS1xTBhYCh9NhQ7BFkTkPSgbcqPxYSbkqYSQkzmBWssfk6JEW73eWiixpWhHeF2xo9U8j32",
  "key14": "H1g8RH1PPqg4mf9MRLgr1yim3BxH9aJWHr93NaP5CjYsUGKX7qgjWJfPHHwWyirQvnTgpA9Lqy4Dhqo9LncJcZK",
  "key15": "4AdYEVnWVXkW4mgmHXHDhvzRoT8Up3eCQEySxiHbryQcmCP2ksxuPASttnWmjefSKix5RrJ9eaPuVsWGgdEuySCG",
  "key16": "4bQopzs5kdx5NdQPz7CBjwrEqd6YjLNNsG2UxACyjPxtkMivYwCvCkN1BvwjfnedDpwLZSMnQH6hmA3N3ixtkfiT",
  "key17": "3m6wM3GtS7gdnWigbFw2e1bSdPCTXtQQ9mTJBDNctnAVMbsX9McKKQFW9iNRzEnTRSFbhZKrHsGv9GYpw4WR87qa",
  "key18": "4gtQH1VHtnomAL5fRojErF2G3w6TW9FnzAKBsQ6orNCW9RfRttPCSdo8KjA5jyw1QTv3oYBUzmo8jHCM2VN6Z1uc",
  "key19": "2G1DZnvbp3cPdawyoQS3fKRoz54RpaUvJFa2SJ7Q2nCeWEUicWe6PN9MUBfL9P65LX7AZxU3hYYXUJ5zzKUXBsxj",
  "key20": "2GtUbP7wP2Ypf5pUyneo8JFP3CiCd21LiJ8Nio83pYHUpEjhupe7TQ3vPuoN2CdejMTLHvYAMYZpQ7RY6YxVUuxG",
  "key21": "5JBfEPjfBE8Nx4Bh6k4HzGNudDQs2gCaEuGr9EucueAvZmXZgttWuWAvxMfxcnruLFcHs8teiQxS6oCTwhGHookY",
  "key22": "48EjYsK9hKrEB9PdTmcCHo8ZFwAaKS7DN2MgVZo8jXx4ETrdVdNvDLza1qvPMJziorBNwkWUSW5xoAoV4PGqGavc",
  "key23": "eUKRzs1UMqNRssyw75SyodyaHoua11QS6NrbZ3CsXqdUe1bgEatmTt5uXNUN1onvrkPZU9pr7Wmt6wiS5tndVew",
  "key24": "3tFuNp1XJUcKf55ZkEvQc9e9399VSR9CBU7d2r6qvTsV4tLYZVPQjXux4vnRKgZHCLU8Ud2dYP7zvdBHGpkQgqg8",
  "key25": "25UmrxbgkSkUyau3rfeXj772SFcByZgBmfGA85tWMGteXSnLySnFHRcrQbzvQ2sEFQAvSUqPtpNy6gLnNhYVKr78",
  "key26": "2FABgGRSRrCMZT8B9c3zChjJhPxxnDy4jQCpKPotFyg6xGtmMghuZy7tnhGXPP7bKx1nH5fKFdv299f5NSVZU9eN",
  "key27": "2kHJ4B5xpe4uTbk3HT2FEETLezzWbDB1VbNx3s7tKDwPdmNhYQZ8h4k8Xn2sVFDftcuggDThS2kVnxdf9soLX1NE",
  "key28": "5dHZ1CrMMcTLBvez2Qjiu4LnZ66wFBL78y5x9TjLN8fQNcPxW9rJYkjNF4xopYZ4CjptCtR4zNAtz76eiaFFSeVi",
  "key29": "5DdujDNgjw432WxKkBEKTdEbxMGJdJSyhSyYQUFzGAcnP8qxfqFyr22g7qjxV4nQ6t5T2D9vUEUk4SSTdndSMH2R",
  "key30": "5yc3LxH28F37H3H4MW8YHgGrptfiDDhWQRXAUWHQpZCqEj8C6b3xCpBYyEGVtK8qKdbkmfwC2BT2Vh1x7xFLDsja",
  "key31": "4LvXgvaTAsDFaXsMZVzajJdvniX6zQomDKguHxECjB8N9sPdtfo3UyeC6P4iJwNxwN5CatS8uQstMw1GXyQWpvqG",
  "key32": "4asZMnQ8MBVW8p4UMRSwVdg3bfT6hrcoHCZKbRKMrbHmjcX2R4xVXr24wPZDPK6EeXdfFYEtfHFG14HX2w7Wbdv5",
  "key33": "5qzarQPHdMX6ZJoMW22mnDJCvoGsM2QFihAv8Kdj8zFP1SpQjWpd8p1JRdcJCayGk7Jz7eMTjVk4NNCDe7nc1dpo",
  "key34": "61rTFVsr6UUr4NXRt3zW3TCsdxHBuDkkPfGiUioe7dd4x47cb4XciceAyfiNyAtvQ3g6EyrRh54CSp2VmEZCG1km",
  "key35": "4YxCFFG5dkm6ctiNSvZUvLxqoe2Knu1Ss25P7ad7TD4vRRfrPLeoctWNK9hekrfDCPQhW5zBiyirZQorbCWLQZrM",
  "key36": "3HnwbFdjNwmzRKVvQ8pZTJuPgLPTq8KAiYUof6tuiBvYAtFQhtKMYobEihJwk4f6N2BTjoi5onXWZvwCijjfvNFq",
  "key37": "4URsDcgHmBsSHWwiw73cJd2yzKYAJ1qeDjt5pSW82JLxwofuH46zpnMTdae7UK9og5knEmdim6yb3z4Vf1RLrEoh",
  "key38": "53PaRZUdoRrMwCEsXRpSHswc2jEZikzjCW9sRW61txJVnumgtXJNySaM3RhabDN7SmGHjTnBRxfBPqceQJThTwCJ",
  "key39": "5uyAddWrZHtfmwSUtsdfe6Sihg7BUknPxTkSxzUctJ8BZL7q1LkoDRpzJSAJXsERrUrgkrZmmCKufxv4K5Arij5U",
  "key40": "5aXjY145bMpV9VZBetRrbFg5QdyL4FZaKTs4aB5tWGrKDYaStDMibVNNGT5B38kE7hVysA2LBehjtnRKHXQd7MjE",
  "key41": "2mS3AKtcZ37431uteB9LTdpqZiuU4inKBJjfKKbxc2UsTfXduAJAkCbUAkVh9CqXeSVhLeXSzNVv85eMTsdW5DPo",
  "key42": "45bwYcADTpgxfFAGMELQFGxnDEx6g3YiCeqc6veSFMGSbiKCogHnDPExVQGE98TP1qw1eB1W9JMn95TXL8JKBK4e",
  "key43": "pjDyZjj6xMGSGHXDPSGyogJsKxZUFjTa6wnSdzTV9ewGo6WbUyfmqRfcUejS5A3AdZH6rfT9QrAtrbz2UBRA6cF",
  "key44": "R9Jxm1pUceEWXFyvSPFJCs1AMNaENwaAzRVrSwZtXPjAnuAH2DoYqy6UymyCSkL5HEKKD8UXvECdcWATxA7jYvp",
  "key45": "3miZBfEc4CJubLchSUF9XAagSDh7vgn7zqibfJh1yirZuCfde72EP7UBgngcVxmWgxfrYGwN9Vzv1noMpVQfBQDG",
  "key46": "4RSQVdTbzBXWkjtnAEAfAaJMyc9odsoQE3ZZ3k84FeiP9JdhDfYMQ1pwhAxJcioM5xYsjoekvmaEVYRZaSPqm7Qw",
  "key47": "2a7ZRDAWsyQs5HTVv331SZFA4vfibFuwKYrXhUMauuhFwJ4RBSTncbpfX5R7k8Y5odcdeQ3T2BgQ1x5rLaJofqry",
  "key48": "321Xwr46xMZd3fUMaAzmswPeURRZdDYc5C7Cu4ADpEPmFpR5HPWL3VEJKBZ5ZUD3ZnTQkR13yX5SZDoxrcVqT6p",
  "key49": "CoXubULgng2seGcuFZ2v12UY4jVd6GMMzv3JKEtvxadSPrPhZyBiSXBe91iJAM9V9syZH9YW9V2eUBn55fXZGWR"
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
