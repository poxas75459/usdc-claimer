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
    "5Mc82ALKWHGwotDa5cCHxrjrd8Gww7VEzyN1f9TjqTmpPUrcqUYUyTPD8bq5Q7TxhRcd96T9ZBunvL3TjUNRghTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vB1he2TcbsPWwnrrKV1EDUfRvLuPeCAA5QGBM9xNPTxaZpBaJ7KGri5o1JqCsVHHjRegcPZjCCps2Lx7MxeFyhS",
  "key1": "3kbcccLaBPCvGa1uMakp5oHoAbSgoGUneBvBChN36fVLmNzcmhK8NMe49rjpvy8gVFhMxzVzX1cgqVacW6ADQBF4",
  "key2": "2u8Jr4mkGatVX7HBYABvNtgdtCSdrt8Jo2Fm2d3X53yns5ZBjBSp6ANkzRnoeV1yBiQw2YkHXs1RrBM3cpcf4zHF",
  "key3": "5dENbmrb8P8PM8ebzrruiad7ownHMXQsKY8s2Mc6PrmMPBupGy7fax9VnNpQFnxoorgM1kdV9o9idDuKMjg2MgKv",
  "key4": "3Z4GdxZyCzLJMSzWeeYxhbKTZF2rEZpbGZuSWPnh1FxefJEkGG2dDaEcSZK5kFtfztNNRmu4FxoHqT9uAjoCp77B",
  "key5": "266ANeYYNFHj4QLY8mJPJLDAWEscHNXXhNBGURBnFftJnFDKYmBSHPt8rSBV7LpGkvvF3LgkrUdei8vXoWGyAbr7",
  "key6": "2g21YmnCSKMh4Rnh9jAN4SrkDdeKKqZaRMsrpjqaPGQyJuDPShaCLQP7fW9KxLPqemAiRh6erV1kFA1yJeJMjdVZ",
  "key7": "PjezrAgyJ98Si39WQCj9csRWPPoXJwLtW4kpGRbJzk24x1DpsY69d7sexHXtYB9Q6ymcKSd1AGtQvM6GAFch9VY",
  "key8": "hiqnfVGreUV9eAqTbi2kmyX5KbsvsaiW2mUd1DH7tj8yTqxotcJLyHD2YErj5Eb7Hdo6xJhAPALVV2tUDXe5x6U",
  "key9": "3DX5NuHS8FDzwWqYEhNddBsHrZUrdyEd1MYQWMFRovmxUk93oJsUmC49GK5XciuMNNRCdoUzgwzKKy1ww6Rqa8ST",
  "key10": "86cNJkgohkvUzku3Yq8srAYEnT1GuvsU7vqisdo9wARn8D1hrtkJEpBUqFJPKDrVG3cVkYvUjHDeeqXjDrxj4Ju",
  "key11": "59iYj7sW91tF4yBfbngQcaPsj2DazPaJWQPWzkYUieWnDvQijxMYXcMTs5Sr6k5GSAAQQPt7v2jNGpmALZCzViCB",
  "key12": "fdvTf2CfifpkReGcDoKodKkQtUoHwX5WxyA1TQ1RS4WRrkRoP7FfaC1cC1F8dGNyi9ZFajpkHiaD5VEDdWqKjgF",
  "key13": "4MDFVPUeeWRauc6CdnKG7iKbbfCFZvyZG4eWZSpDiMtwaSZR2SqwX621sqhuRhuWvNRPnDymJ2X9aLZVfemSZ6Uh",
  "key14": "5vr5dUkR2sJneCwxJkavZaxwgbBEbMrMzAYPBPk5cDEx3PqF6VWRayHNHeYQ7QKBntwbs7g2oGFDi8kJZg5TaUfP",
  "key15": "2u56FPZz3rabXw57JXCo4fEe2oxufxbeUb4e6nw12fTyEqkSWHZqWBbVM3Xj7zfryojMVk7tJaKKM8gH2kEfu4Po",
  "key16": "66aoVwL7PnzLd7PjVCisVrupmdWmHCj1YychU4y7vwghYb4S56oVWDVcFLRwpJRS8QFey6au9Rcs2BU2Bq2akuHc",
  "key17": "4KQJeLx1SXbUQVcXNHKQ1H4FBmUoY5t5AnN6zaJTFkx45HxDJL3zbfywUVCyFtsaWd2rftSUdbWUDyj7FSPpuuWR",
  "key18": "4UAijnkc9mJ6JsH5LmPc7VypC5PGtychF1H7wB3LansWqrwE8Nx6CaJxBYihEcnKhw2obxqKVGTMiJZLGaXVecyg",
  "key19": "3C5ADg4ScDkL8fCoPuTH8T8ZbPV5rbRtabK3TKTDFH9TNwXq4YsjbExmqzQXBVovRrq4ARJv16HcHZG8vHMM1Qpi",
  "key20": "5oq982H9yJnXm9a9NDf16qfkg4hVMnDAMXUDztXsCSDaTEP9bc3KL4HuLSxCYu7reJyLyHKmvwEzuDU72YN1exzU",
  "key21": "2J4b1AT7fWikmb8a1zSj3QHbRhmrEW6h27rjJeJZDVLiWHTRKDLwpALkmcxTSMqkAxpcTCnFARFTSw2q5VSwWMn7",
  "key22": "656WvNAtRfYwBEnrupb72btTMUpqiXYBJoiQsEBUPFUJmPvDeaavaxWrkDcG97KEzioo4HP5tq9eQa4dETZs6YZv",
  "key23": "4cLF17wzc4h3tdKtErDCirvgnGscoss781iQwsWsWcrLqUFcquwqRQo4tRD1vAx3i5H2A2QRBeZfhLmM1JoLncb",
  "key24": "22twNVP1SpsX1y2JXbWTa6LTRqi5mK4QX3JYp4pkQYqSwUsdRU7fJFH6naBqLn7m78VGNc818UGZL2A966VfoM65",
  "key25": "4SXijM4srCn1yPwTejNLGqXE1gt9VZAs7hkLdfU1zB8EL24yGF91eNUwQ2zzU5F9hWNzSRkbajC6xcJF8WFGE712",
  "key26": "56bTfxWu56MbezoAuwk4a879F2k1AEywfAwNu5CYegpxv632Dj9gbzxH1apSfu75AWh1eTtSWqieWLbMstrzeo51",
  "key27": "Rc1fiTaqtfUA1B1w1y4Pt1HLK3vZFEWM2KvmGwUrNwJGv467GABc54EboH7bpmfJiKTWzC5dR58rSwZkYVHXrY9",
  "key28": "2p7nabhG5sZWXZ8AgBTWNkaDS1gZWgYoGt8TjF7z4rLLKxVi2Gc4xXgW8AedeWfJ63TRwXaLwUFsvzk8x6t4iqNF",
  "key29": "3Zx9fGaxoo7eaNVoPymu2xRrjwk6UBnk3vDpLg8NnLL8XqZzPNLm9WuDadWPQndqdGQnFyLuCsNVtxdEAsEC48Bw",
  "key30": "2TYGQh2iyuQi4mkjxcj8YvhPzdjCqM7peqTEKJ4iME6bd6ThvpsTh5c7x7yWqQV7UtAtcwM24ShUfiJPQz4d1k54",
  "key31": "3dbn9pTrtgjHajTg84V9XUnXHpPEVwVoH5aQTvc1EWLGYQoG558CS6TrRfJ3f9Mp4ZU3JaAg3sHBgNwvTz2yKr21",
  "key32": "22FS6tMq2w68pw53i11eJLTYmt5HuUC1ATysd45V9SfbGVAywUtuvXzBb8uMYcaUppJExw1VvJ126VNHEvPpKWNi",
  "key33": "2AxC71e3sfgZCriviHQAHNJzRjsxbYyHrAbg7NxQFeaBRnpa7eZY9Uys3F3FB85FDhCwvbUaZX8fRoHxHVaw6y3V",
  "key34": "4usWgnRdkxfwvqn2TeVQoz8Db7922Do3QDuFyLT9NrUwc8kGNCP7QQN1A3nBnT2iqQCSZ9ewgCDHGzyaD4MqRcbc",
  "key35": "5YLNugLTvnkkdHFY7aMsSvtHiYao7c4bBjpoUk2kXVkHVz9tjLQWYzYfyGYaESGDsg9AfoiRnsBCT1He94bNLmzi",
  "key36": "2s2j1ennFWyfXESYkbJDharm3CUYmi6xKSDk6ykn8bti5XnULacWk3VwSVYYvWm8ARYYMDfEDMrvdCVDKy2gJ6LJ",
  "key37": "2qtwoSapCefLuZe9DSQiUcEfiCJMcVkDhsRJWJDSiBpahAdgoaK9xK2yDvNqhPuWmNiFYCP6456WCtCrzm2HQCoR",
  "key38": "5Z4vehnmppfEpkmjZwgWDpEvPfUMTfaKoBYCEeXEeJycmMXFL6VNa4tXwbfWEBaFDExwRNZrCexfh6KpELbTteD",
  "key39": "5CpCvgviq3kiUbp7Ewj4TAnfEYEuVcKK8SKGg3AMhWbKpmpghLjeLniHH1iRQpXPh4J1L3rX2oX83TiVVvnxG6nE",
  "key40": "dJe5X7d5yVn5BXxidtYF9425YTwLq3PBcZGkD3hKTdAsJy1NerunkqhERqyqBR6VvUggZYVGDS9vnbsMKaE8E8o",
  "key41": "42QDjpnZLt8Hofd2GrpReisz19GSmPfTkJCehyVsyxZefNMQBx75HH8QFtQdyA1cxRrMQY3Gkxt1wygbi5SM4nbr",
  "key42": "2wZqoT9BiKmUnSAXcSJdzHgfaj1oRtZtAwkYvbAcPWxuFGtr5Rg9g7ZwSsK2NEFggBfNnXtsLZBE6EYciPYzGQeW",
  "key43": "4sh1PP67oRRVzVW3nVA1XD77ABYzA7GUU2w2isExtvwi6Dd2zajrQbdHfojUVDLrGyJ3BpvgbTnErfyVTtxjtXKM",
  "key44": "4yHr3dtSkjpVudrawyHnfRKpXK7e7bYusudobcXD6yuPv7DaU97DXNaFyrg9c9cBCWjHDb6XMgL9i5bU5S2tAPP9",
  "key45": "3gPcvpWsGBCVFnHzBE4Nb7vpniBg2UH4gEdqPxqH4iT8K4Khd9LdsQ7Rqkb1pXCEyrq1X33p4x7GrsgbwmHamb3v",
  "key46": "5KQ6Zeb48eCH4ionh8iXCY2Ko4sLYMgnadd4iU4hxyAJAAXmhcca9LPUZ1thJKGPoQFby7yhdcUr1X8kQnvb8krZ"
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
