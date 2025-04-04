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
    "4GMEX6pVTUho8ZUDkYHuEwVYLNuvd7miTf7xPuxC3pz4qxr9Rp4Kt4YWaquPKsx73enxuR35NuFVrQw2LbvK6j9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "122V7TWtWtbxF2CQL4DwK3fhBzzhYdsJ5ZyoPh7EF1oL5K65UxShcrs1CERovcgwLtMZKzy23QsP8TL9mwQHB2DG",
  "key1": "32h9Zx95DsWn81VqyKz1YHEQDNX6fQH9TGrxhFEhgbwmQyBAFfBrcWrPXMtWytQNfeWWptqHoEPuuadkk3F1FNbM",
  "key2": "4dgCmu1Kq8kkbmbMkz4xmMXtezj5uUTfHQq4hiMboc4HRdCcFrk1mPexyLsKTyfvPMGRvg68DVKurV9m1mNr5K1j",
  "key3": "4joj2RxJKB2A5dMc7uuQLkks3S8oMhXsoSAQsUUoEoy1xj4RHjQj4NwPiveTfM5zHmwTJRCtWWRiUrQskTZEypgA",
  "key4": "2HTqLhxd1guLDViDFdAJZufjuyYeHvuhTycEJBbcnjTpw8feaHJvBFgqaeBM9ZjUmZbUti3BrDVdG66xpHGGPvCB",
  "key5": "5w5Gw8i4bAND8HKRGAW3oxsZaLqduMR1Jhy4ukAhVTCfcXE9mXqx4DMgQZmsNVum3QNzi9iTTLHVtGkkfmbgod1Z",
  "key6": "5DLGEd1431AsYAyCrdKpUYRZYAZPo8e7dLqEqujXYET95jvPBYEeRDqGtFhyScfAsko2rmokeCn4mpvQKsXnyFuQ",
  "key7": "3hcLG3hXZTVFXX9iHLYMyG4k8d9rwa5PAzFGv4WxtQcS4aNfMutagd9j2UVUwCF17uxdoZMxNejJnju4DqbAzwTt",
  "key8": "ShjmYmFx2NgyHjYGYgPNcCsAcGUZNU7rHrepSydB85yzfApA5MZmSxP1ZD4cYaMBQdkShnoTnm7xRxrb1Gq8p3V",
  "key9": "3Rqviba4ZM5bdUX4fKikmyficMCesvNPTwoKiWckFLQjcDJ17aCTJc6JTB9HyXL95ioxsvmmQe7dq4VRT3ydPpWh",
  "key10": "5273Cww277PiFD3u8MUa74S8YtxQJZkX6R8rgYokpQMVdd8w9aBAi5MHgQ9ztvGyytK82PfUdfVkmKidZPsm1WNt",
  "key11": "2dhDwE3WjcGpg3DBoiHX7is6MUfNLq17ec7ars3iQna4CwC8vS5ZUou9vF6Bsnd5TkrJeY9sd9AUFh3ANY7deXYt",
  "key12": "4oVbiCDucA8a5dvNr2xuxouVVXike2r2D3pFtb1j5ArmenuqzSkodWgVKLpyTm7cLyo7Gq6v8uFUTVJepVVkTLZp",
  "key13": "2a7oC3dqKLmsaVHhmSW23YqoiUzvfcooJrNCzfLTQTAKpTPnPr22v9jifQwLrr3TnyqPNEZjbYnAX5nYeMeQGA39",
  "key14": "zr679Z4566RaUKEB8ec4PNWjjE4G8Vt3vaxMjLuqmZnDphgr9n6NzTif3wcP3PfZjAskdMevFY7pUYfu27wNqAA",
  "key15": "48vbGqAgteWrLD29fx6yKyaNzbKNhcUpsBQy63Egwx5aywPfYjc4tBVB4ouukYN1ZWdoSJkVYiXZ1wRNUWGVbiEX",
  "key16": "Ma6E12pxZCSnrumHismRZZvjwGaPcnHosdAr3jg1RZAZwNAKe2DEMf6f4LSzRg462rPD4xEFoT31R5f6Y2xAehL",
  "key17": "35jTeu2EGiGg5kRgBnd3qNAU4nATFn8gcAmAqoTpA4uuWH3XeVw7DXqpDKHNgsub3t2PJZmYKt9V8Y1y6aEdmEW3",
  "key18": "4Txzxa3w5gfd6WaNYjYYHZJCQ8Bi7gtDxe4TUDTHPyDs7RoJoaYqw26bpER4JKkD6Du3GuzMTzKu7y5UtT53Sj9j",
  "key19": "3VbgRdbmmFwYjsepo7UtZQN6YEusKMBz7tRuddcNmPyPhuRqgD4vrPipujPJmEm6a47CiEaVgEj3DcbiTJ7gBSXf",
  "key20": "5EY4NCKa6mu2wwUHNHxSzqEhpZfrVrfVKSjFsWktVYvQA4Pivb1L8WF5NK7UkVraBnKztQPVY3pn9BeH7KqkwqU1",
  "key21": "2xTUkugqGqCvM13aRYrc3wSXG7H4daVGReFqZztdVrJBYoAwBetbj95QQqZYNu5XyznioKCtPehaSUk9LsJLfmTe",
  "key22": "5vPY93pKqk6ubFvuXYFmpwzrk3FWwA9252rMJDx11jB6RTXuzG3CEfk6dg5yoGah47zYs11wFwhz2kZ3drwkAzcC",
  "key23": "Bea8EvJPoz6wvnq9XUFJ34cmDN6twQ1Pz4cuM3weqa4DmFfdJ3Lbo2pCMi7Lyf1vAHCFmPWyCJzGjox2j1bVAQY",
  "key24": "3xXAwUHavvrt3fPHXXuFAh7ZDGQ359cjPfvKEQ79L82YnXpc4g3GEYMi5b2t4eJXaDWiTH9hXs1oVigjkog27UJ1",
  "key25": "5EcjJ8PuCHabMD6VjGyBrLQpULPdDAKFjxvp6EKkPfUgm9DvCqG8Rj8rYjzKthqkoRe8uaUwK6CEi46ubBMHk974",
  "key26": "2fh42JvYUXhCNQPhEyh46RU7KBVcmqaF7XWs5LJiN6WrnzPeeAYAZFFzLnLQ9qmvAyxi2P1sjvDbhjvvozA7gHUE",
  "key27": "219BrKP2LAKpouQUWyuk4iTMqZ1bSYMXmL6kTnp215MkqoN8Q7ChWoMxRs4sd2ekTjqzAMuLR1hKL7u1aPJY67m7",
  "key28": "4HUNhmedNZyBUFh74VsVFgkuYEzioKMzvXkEjwiZJ8eT8kfngMoQKivUBVPPJPaPQEZCaj6HFSHM43tZu8U826Y",
  "key29": "2tvfoheqAdfUrwPXxatPWViM4xrF5tif97STuL7MMAdwcQt147PF5YC1fjzTGXKWujUmGad84QBemM7Qz3DbyNgx",
  "key30": "3m4oJ7MRADJNxMq7a1VNJQeujXhqXWA2yMkvzSbf8kJ3QArUNapUA7Gd5h3Hkt4iCqyvMv8NLgV7PHcqfDxeqzmZ",
  "key31": "28TEX1hbaN4nWK9bpopRHVTx6bTwpMDq7hxzW2pqsTiNbxh4NNbd15TdNJToDzdupM1hdHDNYNE46doQDDiBDQvQ",
  "key32": "g4xT4JtxVN1GGbnrjNdwF6BJ1gaXdHR9MJRcViKr6pAVBBx1bRRmJh5W519kVfQu6Z1AYpkyz7b4SQYZxh2hZCQ",
  "key33": "3QDf5T8NsaiAXFE469rkA6mU5vjHWWF91VaX2kTJWzanUd7bqvAmhsunLj2aKYEDfN9TprxwrFK9GqaQfdZ75NNE",
  "key34": "2e9WMXiMECkHkz4oNmAvWYGAnfh2UD2dnFzcNMXbkE6Ywgx1QEbN6wxPa85ujrrWCPtsWtjcvwnRZn2gywNP4oUA",
  "key35": "2YRhAHN6RGCZhuuZWs6ebfJpFvYKKSNLwdLPcb5btKBFXqGazs9sUgJRmo6VNcML8pAZWQJ8LvduBLNpeRwChVgr",
  "key36": "5bDv1No7E8Vp15ezWnqL4bv28vQkRmiCMa3WhjjDBJHcYCn9scAaeeMsde8Rymx77XBvm4G9rn2K5sp91Gq4giR3",
  "key37": "2ND1fZeewZdZ9e5UyTFPyvjDk3Th9wVRksgZvW7fpTLpzVLnnqXCRKmcFnB1yp1vihXm5ziJ8YYaTEa2iRzxkabY",
  "key38": "4nEonByptAiMWV3SiRFPCyjVuLD7FtQChkSGniKqMWujV3eYQ1DtVUstgeDX6EQyNt6NneeuEf9Tq6GDj2JZ6CdX",
  "key39": "3MgkpS97eF5HTFAuT9ZLKh7VQkhv5tQbP8YzEqpRkBcYzoRhzJvDHKQHrfbMxkLUUaP1TYTQAgZbQh3J5FjQPh15",
  "key40": "3jqrGYYqkqkAgrvMfcghziX8AQDM34unnv1BFpAHGxy9tfWAeKwjjDW2kLT5gaA1t92jhq5KdpQesLDgCzzuDZM9",
  "key41": "4YapHe9wUfN8VGhsbe5roEBgtfQNzvsQ7SNQuy4BXkJmMHnYNRXxCeGtbXAjCfJBNdcjUPHmySrwmFe4FuAvGscF",
  "key42": "3wkzJ1PkDeFDRLmZsf59MaPAtGAa2AeUaJH54Wi9zXTzNkANbyNE6P9eAHZJ99m6iH447dZrgLPMsFHwSuqgoftN",
  "key43": "iFZ6YzixbYYWWpCzEPbRtbz5ZS69c5cexP2qjZGwuc8iurksExnrNRd9QXJxCi4yPeKP89iW92aUb9NmmF1su7s"
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
