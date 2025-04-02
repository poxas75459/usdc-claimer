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
    "39uDZpZtJWuS674uJTXy7WzdtWzT77QbdtACsK1BggjRvyFZrH5Z5RYhGAc8GJToD8ggTcpLKUYiSK7rXXw1Xd7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h6D67iTKukZegMSzhDkcxPsAYDd4rXTG9WdAzz8dHP3y9bC81kiRhBUKvccRnGoM1xHEzax3XnZQJUNmdM7cfHJ",
  "key1": "U1S2thzn2VKvk2sNQfMAQe4wxkXLNo5EDddytZFphmqmbVGqPZvLd4VnKt3gTo1oBYyPLnwyiT4heyLNKL692yo",
  "key2": "2c29qnw4VGM6vF7RfPKkRGzcxSuPicdLs2uf7PtvpLDWzZpA4YT1qB3pbEmsyhLJsnDfL88fVk1m6ReGDgFsQ2Mc",
  "key3": "3pTFaJXKwcVQDJQvMaSa12XUo7XEuHj1oS5KL2fr53RLSm8q9scEsb1WoZ1bJ3nZjhUMScqUFNaa9HC6mzxxkxiY",
  "key4": "5edxvwaAAixRmi4R5pdi6dG9aU7khjUaf6MiLQc1MfSEV13zZ95zqhJp4ta5v5jAVUXKEwo4jz82dQg1M4cEYnYL",
  "key5": "3UZeS2g9hHXL3nRg97EuzCf72m6F8hdokrVRgDxJUZfcmECcpaVfsrrtJ2zxDjwzHpnuYUv2GRNpf1Ug3kLSRBoh",
  "key6": "3enQrnBbc6EMf29j8PsnMxftmt3ffSgZAm6MemeVU6kd4m1iGBF9QB92gxG1rxKTWjuLvxtegCMa7mjP17Ueghe3",
  "key7": "4brcc5fVsRB9NEJJ3Dofhgyg96sYPcXoHeLJsmcJYrCDMcTN2vUb3JBUT9mpc6ar6or3DTHvpJ99bNsUkuCyfxGm",
  "key8": "2bFrpLRE6G2mDVPVJwJ8ALQ9xDLSvKT49K2dhD6HpAqucjg8VmDBQ6BX74nRod51YMSjn3zr9gX3rW88HgCQHpAs",
  "key9": "2ZCDTbX2H4zJpgpTSnakqbvdZUgLat9ao69SvSg2wD3ouMRZn81c7bxtt7LCuQGgQKERBUA9cyE3Cp5uR7apTNBe",
  "key10": "4x9R73VWNVCbcbQZgKnuaBgycWMcFx1GUje87WRZHEqKcGFLpJisw5mu1Lf6Zc7dYEEg7khaMWVy32D3v87MDSEW",
  "key11": "3AgQL2X3o8VfN9bssbTUEH4ML1tc3YuKHdCvv3yfRCQ5wTC9dWRxkvkTyYF23rUp9MxeeBaYmvQ4B1aZUf4J1THj",
  "key12": "RutZP8hMnCh8h5ygMTFey5bqy1VGUixDsKX7wq3sgNWipgcfSZbaS4kfUHgsyGDjwiAGjF2j2Wxic4pJuiuwyrM",
  "key13": "2SCFU3fHh4PdtrLiPXU6jMahnVzzWmxLujXo811jEUz4H5Hab9AExnsaMRadPzKH3757JetaRopMkwRh53thS3yP",
  "key14": "3NzCkccTHhmoQKMgCdUvaEnmNDXs9R5B4saa6bS4dhTnx8tdgiMPoVXATGSPHzTsM3xWSq6w7Cn2xdwrweDzcUFZ",
  "key15": "ZKLEtB9pusKQF46mmnnaVkcHX279ND3FPiZi4f458tVZZvgcvHosjAaaDqZUjdhHXxxeiRotWPm1p3rhkGf3bqY",
  "key16": "5pqWLk5dZPAiP4LTVZZUF9xHfT5MDBVGtXPLgadSjpmwEh46M7SMn1evp6SKr3uSyXb4Ssc6pbmVhrMTG65sZakL",
  "key17": "NEtFhHoAsZgu9qF9hwV7mVaCVNbHyzqfvdk5xEN6SRXWp2kfLfJ1huBGdo9iX2KFctiF93aMzFMNxHy7TUpzMhG",
  "key18": "3mL3D9L4AiDX23D9tZgEBs9gp7UGj1hUtBXpGeGgq3UKpMuEGuLM8KPE5KMuEm1CDxo9FH3PAerCY6ndHAukiuDw",
  "key19": "5wHHVcV5a2nVufiKFkA1h2ivdMeWR4fxtJJNgHRWVJSAyPi3QCBczutUDmrPXH1rG63LkdUwCMJKNXSRwFENcCLP",
  "key20": "9F3f4ZGBjaVZtadQUAkqLzkz4B8sBki31X7Y1UtQYHDPQjUNsQC1ZHbSWVFJkdmjqMTkMHWaCuDfAwvHQUPj451",
  "key21": "4RFHqaaRVumtnBJLooyr1e1Vvm7VKPnn1Dd6xeDkAQNrMMxjetAnnmnC1KVcftMF4tvqftXNRgZiDp9XDStiVwvr",
  "key22": "4kAqnSpSrXnhXprVupQM5PpbWGcRAWHwNTuw6BTmxxC2bUD35fZiUZ3y6myfiW8z25dPxwE3re3b4nX4tX9gg5Vu",
  "key23": "2LqfkAVFQSJwwcQfXvn56QYoakLSV6p3LqvaRpPDNeRkKomAq71qNwg16yG3UQjNnNLjst1d89xgsMNS858a9UWh",
  "key24": "2DVtrgw5V6MW4ULN2ynz2ME5XXr33gUafAuThUSrvv1QfsnYTxd6yZCJNLbwT6iuxtrdQN5rSF92tGVXSYRJmg5J",
  "key25": "3is6xR4bMEi27YMQdBb8AdcLhc4jC7kRMjXGzL7DWzKW45KcFVabJgDvrQ3jZEkFnzgN7KHUaqc4ozseNXPDHQNv",
  "key26": "5JUSSD7Lr5cqFkWHn43zRiq2aRiAd4GsZ7c7X4N1tbSZ3W6Xve9TiQun7Nk9gNv3NagMLUv8SMy18pBLpW9ZMPS1",
  "key27": "3zL9xXcCxhuvP2Mo4yuoLRiLUDo227nE5eW8gTB1pGE74NVQskSqAo75BQqyr5gNgQjiH4oaiWTVtcmKJKy6W2db",
  "key28": "3qLw3tKFh97DhXb5Gykcbw5efzEZtbHeSr9NoQXK92DRD38mYhjA9nwqBc1LSyhQbSepD9PC4a6MwSuDwng2mHHo",
  "key29": "CWtpZAMbV62yZjG4xLgJNP3LnUJHtPSXTX8UJyDuXaeiyxVnK8tNNDMRL3DDEuCNnNpS5jiDSP4oG1gHQRiPFUn",
  "key30": "2THqLkSWHLQf2RwjpPtcRepFrquwuLq4HD2SCeo3cwpWAJbD2hCCvptoS2Rzb2dDsMrdJCGaepneU7Fa2K8tjG7Y",
  "key31": "LXntK8qdqN6ZSBuDEP91MkLuTkphuStTuENKwfS5ru7V2pxsNWA2GQcAhZ7CPDSduJ4pZ1tyTu61PEB54dvw2j4",
  "key32": "GQzPY1XJBWZRzsRq6mhYNckfUp4PguP8eVFbWzvZo9JHDp37J42MWx2xuMgko223Xg7CG8XHN3CeeP7c58aA7ED"
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
