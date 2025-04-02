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
    "38zvWSFHSkKcGZXxwsBmDtxpKV1BHRtxfZ9rJEMhruwFL2deAcmNMVi1V32PdGmBoYZQbLyEwK83swTgT2zqaA9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBeaSCW5JwAhJ4gJ7MD7vAVZJ7fZPoEDwvBQnxtcagywb6t3TKBjuTY4feZvJges7GMkDSbem1yJJYh9ufEfNS1",
  "key1": "4SWbdtTJaeoVcNVXAW8VqeupkC26GigTfmmrZ8AWBAVWTZEhPMoLAFr1jW7Njx2AGD4oPswaspR9svBMbwRwZRDS",
  "key2": "5cT7uFRf4PF6wyP2QoB7Jcob1VPYBGVkmUG7Yoh8ChbnsdPtgSmgwj5PxKKyq1vSQ1cA1Hkb7SzQX7wnBUH5LGXv",
  "key3": "Xyvmr96PCBpkinU7omVXShcg4LvTraKVqAb1uW7wuquiqo9a2MAKiJo9LV8nGH1Gq9SRfGASb2dDZLapV1tiqqa",
  "key4": "3X4ttMftN4RV8Cp7J63AZDpRPX13Bfe5Rc6bJ2eEAskZpFxVcPLdSDYJSqDytgZxBbSVN19oXtvmoqAGWEvXUrLM",
  "key5": "5ZbC3TyfTH7q2MpfTLwywsTf5xG1tsvgdyLeGiaT2aGWnyzbvbNskf9pg13Hm3J9Ss88FMnfrZ3CcCaJS9pB7UtD",
  "key6": "cDJPPrJhCC18isoQ3awLS9VcEiV4pGMQkWCFzgL31kV5wSL3szbVD6Sjrvesiq4AShdomt28xs474HeAAMqMhho",
  "key7": "4qc8ruuXkygAkJQrPyD8CTMEYEJEg7v9Mjgc48JyexbtFiV8b662Tv4gnB33sjxKHABpRKUwuBvbZwpvPg5YFRLc",
  "key8": "5ExK8PpqnqGTtzCyUFGo88mgqX2ppC8h8bNkfnczJvK2UMchcYUBPcCdQUhQMn7Di312VfQWyT6Adk1rDTqekCgW",
  "key9": "fXZxndboYznPgxqq9JsWX19gwZ5mf8HmfxuJj8xaUUXQAYTz8JL3c2jczB1MVHJakvPJJEEDLgfcbeyh621imey",
  "key10": "3pKQ2ad6R3u1fBdoVgHyud89p1hbmxAMVe4Ne9TKQ2Md6YbFm1tK1b3pVNVnAyams1V9fCpyGZBzwGpN8GjjJSEu",
  "key11": "97Xv9Sbb74cKrGksXHfgBMtnPeirtrSPFeDWLGsUz3Ck1vyfbUjGqdcvnHbQFtdPcLSD2HtM4oppRDYQczCKp4g",
  "key12": "2WzJiryqR6egknxjivfvnFgukcYvosPTRPTm4F8yEoXH6Q1HNNBjXhUWrkkHeD4D2CfcurhrFSNNPVM8PaLRYpHw",
  "key13": "54vtJHb5TzqLiUZyDDw6Mqv8kdM1speN4bvFDbL3CPv1RaF7KaWoGGhBBjSrsAxE8KxK3Cd3jEGp6h6a42pLFymL",
  "key14": "3jb99jEyQ6WwDCP8Wv2JY84wPQD1G8zM14BNJJqAf6T5tdSSvyMdYnDqPrkKZbZojYT27s9bt5jAx9Toug68Doit",
  "key15": "5dsWqwNTWWGEdAzhvzACpYn5kvGaf5T8TbgLAdQZQdR1EvEt8PYKCg117iTBYSabvdQECBFpPphU2MSp2kjVw1BG",
  "key16": "2ZfMWjh8EWSxveiyTaVzxRNdqvtvN4ZgX11ZmFLR363UE7pbPV2NCKKoFp26kCYKmoGMeEDE9BKbWygvC5ihRpui",
  "key17": "4pJp25Y62e4Q8wbTZrNtE3GvamzbZSaJ8b1ffaY1z2UkcuLLhUgQ1ai1ZCsZ599puPLY95ZcZyG4SvLTxhvUqeWN",
  "key18": "i7ZQTXAuSmRjnuGzcTbx7qWpxdsEGP4fWdTGwkSBHisq4m4f3AmWsUacuj32JU1M8MwxhuDJzEmRnNaaLu4uW68",
  "key19": "5p92eNGXPSmmHbgkq6oLdoPcWU2bWrYAzpVgB5mViF76cSMbTApiTAtGZW2H6VevhXUQjKBApA3guB3ymGHE7JJF",
  "key20": "2EHNF9sdbANsXKiRrgj9Fp6bdcstnEDLnm9Vy6LE6udvDKkcKJSvkUkeEzhmPGCdG7wDRCZpazBbeFa6gTMeUDXM",
  "key21": "27JJJJHsGokew1213QeE4173uHTb9Mv4UxC8QhV9CsATFhrtxi8NYdZZMEJqWfWycRtKdPyePrMuR7fzCdz7Wedc",
  "key22": "28GHH5hXVXNAaP9YozguRVs9vJGXszVd7E847hpw2wMU34RgF2EW21y6ywkkKCwEaHUXTmztSFVRpvK1dNHo1W6U",
  "key23": "34GF9PS8fTwymhsDyEyhLwFoN1kVX9R19Vpocegg5HJDiTKiFr8TWSJx2s8cmaDh4Ggor5RBQcFoR9Eo8zajcpBy",
  "key24": "3aTg8Udw1x1ZnCrWMVy2Xgao1f33SGWStUrgEGTW2qDux1p2SjhM9SUJogCns5QTnmiETqKmtQXk2rrSgqh67Rqx",
  "key25": "51mzHyPYk9nfpEkMgkqSCsWqv1db8qZ8E3k2nDg6geX5Y7iwsVA1FhYBdsrxka6xjT7hDJy2tAzzrtJgeST154wr",
  "key26": "4SYB2BY3bmEwzFFKL7piNz7dAKjR5mamtSWQ89JaX6FegF8qsqQh3eK2ovpfw4PFjGER7ccJXGwxyQzgeNodLRiR",
  "key27": "AgQJURwfPfTE4mo148ZW5ZgtNaf8XaDXR7VPQLg6C8XehfK2LeZ9o76fkKQRSYo5z7fUcJpRQeXvUv4pfrkvzYF",
  "key28": "5UEz4YeVuRGxkNPpvQ94s9JWoyaFawG4XSSxVPySgnQjyNyDWEt31VVD5E7k1xTKne252FGMpNMz72uMJh75kC2U",
  "key29": "3CmSdGfk7ZUpkobe92i2aFeLCrnV4tD8o7bwwJECz7KwrcgftE1ez6KC2DuNKNykNhaqXQUrPdkFHTiCVkydWi5r",
  "key30": "2HZAvm3jPgKJanMya5toawZdVUnstJvDjQ8TSHNdHX8HN2JabkZ4znqJsscDbNWkgB76j7nPamESdgn2DNnwfJDG"
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
