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
    "XTMjecyoEEFn3ZSQQGM5gfESKdhv5vTV3fD2LNarPAYfvh8NqZnoP52qEBheSf4aFPRStCtmEipBLZL8xDrGYd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFwwkPan3zET1xc4J1YdpHnFYKUy94QCtuWLNToWVgUFsQz1QwAJnoyDQDG4GkNwT88qnBmm83vucpbsnVsRLG7",
  "key1": "4Z7tpzNtzqdFUG5Qv9qjzrartXBR2RQ7hmLxeF5YFFX2ggF5HcmUxNgrbpPDc2FXtCfTVmMFuZfehyGVgjjbfHX3",
  "key2": "iu2BZyLRnCLnHLfHySH5LzMFBdHjrPZAEL6g3nnV9LSahppgE77kEgkwpjC58MB6UU9KtRAXUZwDsHQqkFUFZPj",
  "key3": "52tA6XA6gdC2mbnAi3tpwaZ6XpTrFyENpGscqAuFRNrpcrbizBiJVPVRozYzi8FDgAiK4ahbpQew7fPvPcd2MwUw",
  "key4": "2mxBwRzHiUcUvrJZaLZLwiWahymPMBzNiYGneX2h6hEA4qbJf2xaMT5cmEgXWz5DMKAr6wyQxGmuGhHSw8gFQqhB",
  "key5": "4NL6HSqCeQLSbbmoLU66dBMotCyrnUXQEMbazRA6PaX1ncXvVPuUgx6ga75GHhGU5aKcbpkxriYe9jqduRoxLYRg",
  "key6": "4TMSbJQh1znGVcMxKLutCjkAhZ87NWex9sanRbWFeRKGMazs72wME3bVuRDY7BFkW4SKo8xdxQaV8orgbs7Bd9Jp",
  "key7": "2YTLFzgYkFrUQDrZ2pJPbt1sKfQ2Uo2SE9ezJgN17PbWGgC2L33kKLSfQRGPEzuWa8TtAoCvwzLgLu5DdUKy9dyK",
  "key8": "JYwN9vowBKphS1fzYpNAdQLRFK2VZMEBL1oyxJXKh9KKr9axu3mGSbWoG2VTo1pMNU5qUx9aMetYXsXsBMZUeKz",
  "key9": "TtGtGjwAgunUCBA2QHTSWM91mUYBgiLA7QSaTuH1B4ks3Tq8G2pjnzMygqg1aQEo64BTyvAkWaMddLxcEfDFEvQ",
  "key10": "26TyJ2qACAW1L6H3QwAhBWeXR2FxC9To2wforG5n26zFJWJ2zRvg7qszxti6hyiE8aXmSU6QCQYUSajmKjonT6hh",
  "key11": "4Q57odHp1j3TReoQCe4DkRAX4KwwRM6uM5HRFZkYmSnUWMPB2iNmbayYvuZ72TRo2FRReKnwEDaLWgpaJHXvQrnF",
  "key12": "5EgdLGmMZieB9R1fWx27f6XjKRGifbhL745T2iV9zFMFMN8ufMbj1wZjrCab6qYvL4HfUigfN7zyjxng4WJDoERa",
  "key13": "3L4Gc5kRUePZ1S251d1fXqTUTyAy9tt37i6SYNwadLmMpqHbPTqAtGXJ7bJxqD5TkvLG2FynF33iGvgXm2k5Ns4C",
  "key14": "5iS7rmSnPp8hM6bDth8rjZQqeMYqZeHYFoevKvZFUbZgT1aHd8X9p2ymQJ2BXahwqWpAw6ksveVeco39xEcSJVgh",
  "key15": "48iZoVwjthBCsD7nUxHiibDFa83vZhvTJ3UWS1D7PZuNkCcS2Ta2K8LCogUaSJQJUT9ntBdqRN7iMBmtGsqLVhSu",
  "key16": "VzG44YvFW5Uf8qLVFH9JqAJiLeUMC5EKgZebRbtV6qSyjaH2bgAq1sBFKVELPBmx79o4cMeL5fyWMX4piPrRLjJ",
  "key17": "4ZV9M2KYENMLxCvzSrBdT3qgwEoR4Xmx9WiHPe5hLitipENmM3gs4c1wcfEQFX7DAiJucpTErD5WDp8aiUxbAd6P",
  "key18": "9EXSwXi2Jci2ggnQZJN7XnMitZv7KtHhJKLMZsDWxquk62FhE1ZdxeXty1RJdrHPnRUv7YGChKAgCK5fd64aiz9",
  "key19": "27oAHjrKFb58uxDcsXgBXSZERBUAhJmdydYMy1G7Dx85LvzF1TSgmFznhUifcQC5TwhqAdj5mUC2gxcwN7E87fcj",
  "key20": "4xt2Zqj6eeKMgDbMBK26sDiyGenQjPVZAm6cj7vLGpRmFxpsqaopKxrEFrnbF5jqCmCUggymVFQjciPmbjMjA7n9",
  "key21": "4Cy792KfkGLn6zMa4rjfyADa8HGYXcn6W89viANqZgMj2TesvofwytDxGm4GvRhygJcLGrrnYdjKtpscg1LChrNX",
  "key22": "5e358XupsaDk6bUd4ppGcdW8kfKPGXy4RVY4KZggYyqCxjsRdYTaxc2z7Zcrh2tXQiNXSFY5PrxVJfXT18C2dS9e",
  "key23": "5eavspHofYHgQNe6i76ojxB553JyNmncqMPEfrKnN86DnwTXBi5JCdMLgDm1iRByTKkqGnHXjG45bStpMYvL3cny",
  "key24": "3DAVvyBBdPLCJUFzmLx6R37aGqYRkakGvuxMq8qGcHJj8VJujXDTFLiudxnPZcgmZeKhKoj5vqucVeuZkoAnLv7b",
  "key25": "2CNG68fG9Gce4yv3y2b7NCX1oaxhZJajQ5DPwtE916ovMS3vnmR4HzXCApj5Z8YxMKeV4cfdgbDN5j9Pu2rQ26SW",
  "key26": "2VDuQPRK8uAA69bjAquRRD1TucYidcKTGFDHkLvR8sxkJG6Qg6NJjj8n21tdBWzchqzfzFhQCG5CKvKMvDQZbA3v",
  "key27": "5U6ToyUtcCoF58GzJbSUtDqv2crgvymPX9hJZ6f4Qds5zWPhnjSqrHWdCDJRZwaUQyFr8VrZQhs7AFurKUnrSBmL",
  "key28": "XczDFYxwRG8rafi4e9UfXVKkG6EmfC9ZsqwmkAoP1Zv2w43dMVVTSsp7gX7ejRP31FW975s6P1buguES8iMUDY6",
  "key29": "25r1cK1S6LqSyST1VQ2QC4GXXic6xeWHJG6fkGWeX9Nne8iJDzEbhwohZ7XNqbDijfP41j9MuxspaKyd5nCsGCNJ",
  "key30": "2XhyKotVwog9tmA5g9dMiGsJZnMrNyMGAv1Q2TnuHSfEZuKpMvdAwuE59Ypqx67euyYjDVcuz7XpHUTbtnDMGomw",
  "key31": "66zuGNLtoxtsE5AiZ1CborNzpLrwNwfWRxCpHrE64hVmmM5Kxnr7vtTfXQxhvZQoFxNP9dF4nSwCDELeZHU4yqzo",
  "key32": "4A2c1dXdAsC8w29PQiT1aG5gY1qht2eKxyrm1Lp9vNtuJu92H74my56D6BHyKLG3cCgRo4h5JpB1aDAMxRTi4wty",
  "key33": "4rHMryhwADG2JgffUhMBQ4itwNUAtV3yNWma32bYfHnkQYUctqS3J9BCnEY6VpEoNXq28v4DHEMAyoAck18MZ5VQ",
  "key34": "5de4b4EwkTdmEX3PxLNbP8J6QdTwrUauWNbygWrzY9oBcHA96ccueYbL5iH1fykjKqRKwrphEtLdbPZabbdBcRuV",
  "key35": "DBTmg6ScBZsoeraymp3CEXV5ga4VVZzrhhh6oMx6gC7FHjpP2eWjZwc8AC7A3af3YjG14wqmf9ETWgTdXRK9QBN",
  "key36": "5Bv3K4k1KgQoj4Ju4SHuNKLZZ5WtQ4ytBTeqvQtkn8nmWuK4Zum9Jx4SyBrY9i9fPCkUQGKkk4Tt8sWQasxNcB3u",
  "key37": "v4EPqmySGBvRS4sFLH7UGkqcnSpy8CCDubHFaRHqpy1x8ctaqF2KR79YhU2KGXbo5diSt6QFYBrkkqXGu42Hs8N",
  "key38": "5GE2vLACxZ3dhtn5ke2LpuH7cHiozBmwmBpbzrzff235bwpTS3FjoYukpmvmU5Xx4tA6XE8EwYThd4fVc3tBnvYy",
  "key39": "mLw63GWtCTrwXaejS6kwC2McgreEnJHZAY4BrYiNvWNSLXsXyYrQEcBKeE7FuVoU1BbUon8A82tjKvtzSJ3vRXQ",
  "key40": "4uMSGGttiD6eizztH9gBUmLk1PQEyoQ5cGW6gywBAEkP8qaxZ3cMTUmsWPcKrBMmgAX74hKZ3bqvZHZAz1PnETow"
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
