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
    "N5nWmSMNccz3A3YJ1aJDj39u1fwDRpQ6jT3hmYETZduT2hptwVXSmk5xoqDg8hKgMDRpF9nibNn64utrRxvEvLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5m7wr8ybx4NTNiT7z2W35duxD1sFDp7u1u39jX3JLpepqc6WYi9HZev7Js2tXS8Ppm6FF4xzideNywjgdstGy3",
  "key1": "2ZxCXsseXbsY3fGzpt7wEP26T166AHY6cqNKApuCc3ebA7SRLNhftqHo1g6XRqKuaRcsEYoNAiGx9JGxse6W3zz6",
  "key2": "5oioaXyhLY7oToLqSSGepwGRsStwwnehSVMFcRuKvsoF4LnV3FPoAFj2RhNwpk5psBvERxhcgNYg3GyAxdpDungz",
  "key3": "4SKcvADVmrqLNrsqiYwoRJQAmZTrDsUpo1jk7AeUnC1YvGQbKPqsszjBnVKrfrpEqiR2TxsUSpW3QYT9zaFdJbEX",
  "key4": "ABfLLSFhw4wwjMLW1Nk6upTBYRYXSan2dhps4gi4jCCFZh4XNPm4vJadxnJJJt32VHsbKndv7kk1ntrdySZg57D",
  "key5": "B3Fqis8FHtt5kXGSKELsgksNet3pEqDtaQMvzuLTLkWfTb75D8tqL5JK6zy9UxvECNS4CqRaj6nQYog2C82sq9Q",
  "key6": "2Di3HreVXDkJ1py1euvmyxJ1g2E6wX9RS3ScympXh5QDZg9DyVs6YCn4skWF8VLA4S96SNdpG9RZHAKS2vRvymxd",
  "key7": "zb1WuyMzM4qjzVMqB6b4uu6xW1jnmKwXXHRfC7doXigYCrnPrTSRmcuJU315dKVMbp2cmrZq88bs82E2yndZ6o1",
  "key8": "3dGWhNsrHTxhEFcKqoFLu6UHjj9tk5V4T52mRcqsLJTYquu9bgoCTRDovQrEZdY6eNafjmpiaGFXHB7AtrpTdW9U",
  "key9": "2rehDedYy9hSu1AC1i5tPfCaFUAWjUFkDRoYEJKsNQ8UqMoLiMgY1VEJWYqgeQTgaACBo7PgC2kyPaBgfXyCfSjE",
  "key10": "3J7wkMzxJNPhbN3UXt5aE3fs6smXz41xu7kmttpLCEpsKGKdsvMK2NVcFGZrxN2uKhqd3Yt5Tmdd6UADXat82dTu",
  "key11": "2SkZqatSQJko1wKCEQj5KvPubwxaaPhyseDemivuy3f5b5EmnoT42sT9TtRGVzQ4KPyHyZDrgQUd2bZnsYFhDktS",
  "key12": "2k9W2p3vuirf8XFm61Ei3PAVfz61W6QhogV8JAZVo3kRUM7BiHv3GMbcTfyCt7aZVnt1NM1jawJgRrhh9QeosNpN",
  "key13": "5FTdYo9bUt1uDsrqYFjBrC6wYuqDz8wwDE63q4Cyc9G3Eoaghuk2bmGxh8JVrzhWMdvGrC3gVjrcHc9G84kDFwsh",
  "key14": "2r5wip4gCXLaM8m6xVF1D292WY8yPEkEQYSiVKWP2GUdintT4y1hn6RHaQC62Ke4isWis7ZGMRWXsn2mUVuuFbzk",
  "key15": "2PSCyDUP1auXsJN7uS81oXSx4VBMtQpCv83BYszKFsoVyLh6Lz92KesytCS2B1f2zbLTocYy1Cvr1SKD5ByUrePK",
  "key16": "3jEdNzG6PksRQeeG7wSQsUScrjGZmhg7MmDhoPuvRkQYWnwQJdcA6ukBsHiiQbwmZUK4mnRXZATYEkVoBfn2JNwE",
  "key17": "5fHDHWjwDhyjpDc7TbnCAP67Geq7DtXQmtygjK3zdRDW8WLWZoyVQGcM46WfrzYfxFXig5iJwkARZuqfPaYf6gdt",
  "key18": "c7jzyU7x4jpXjKHZUm2GBfckZX8RFvLKTrsuvN5gAYsKZT2b4QwJ8zs5abVwNW6QnfzD4ABYSjPan49pbcG2Knq",
  "key19": "544Y1PgbjJPDGvayq53r8zSFTucg1tYWK6bMwXQ6JCDP6eKQHg4PskQzXNvwaNRCDMzKvktmeNF8ant1Q6BquiJ6",
  "key20": "4XV44KR7uadBfsgGHWdMmSPiP1dZV5x64tTz7SfiEsBJ7X8ejVBjcyR1YfujXkHVVUkbyWT3zckRNe6PEQaZdxgj",
  "key21": "9G8FC94X2imCsQMitLq1JfNUxGrSuTpoiRxnmvokhvc4Nt8654RLWxKgQpydrU7MkafDsQKzX9fjrtBN57dMkyk",
  "key22": "j47TtXYjXfZqDiWR8CDTPu7HWpP2U3MCoBT4LxbtWPsQksdEcK8U6LfDaSrLcqbkB8Biz25cLNKubPC12YUQsHf",
  "key23": "4LV9uYsho6i4W8yLGJgDCj3dUeUbrubL6SimLS5NDZjpYPXth8BEgg94Ppf5TabgHGJzHchDi81GfMdhJWP3RTcH",
  "key24": "2YR4hpRcjxGAfd8smCGw1WiBXZePGegd2QoBumaNbLZsXeMg41Y1SZMhf977ZQBDkgha8G1UfSnVP8zNvAR9Z58X",
  "key25": "f6htqwQeNMbEHV38tgenuNY9GiFNtR3if31YifsMQgaM9tZocVGkaKRJAY9EbtVsR1YqZrUfbFTRmeN7zvhSrqD",
  "key26": "WXAGSsrPxY4sSyijDM66XN46PqRnAyKtZc1W3P1sUifyaToQUoLVNsQvWGdjYgKqwrKEhqgAnF1ZfSKav6rPtuJ",
  "key27": "4ZQiUVaCuU2zu6v8fdtfM2rX6hXEVLGYQaPUnLxo3pyZzSmgzBCdr4iKKQS6NZBEV3fiXCYNpv8p7drpExhQiQ6B",
  "key28": "2Zykjhm7JMLsB3cTiApC2F5KgdhvPjwHUZVSbZf9riXExTmvEedAHwANZs874W5j7SKPVy7rXu9uRKsPnAkbUug9",
  "key29": "42t4XTkJGjdnZPtbFhZhKFoaCeiV8EiEphfQvXiMCqb3yyQpaessg3koXEtXBaX5AesNmyZXV9PNungC1xSDZ3C1",
  "key30": "4ARmgrV1shsDWvX1CXryLuieEigBMQUTKpRugGS4JBvsvUEcqM62Gmwau6y3V8CThohCidePeZ3yMu8HWnj5YmNY",
  "key31": "35BMDqWVRjAUMDZ5kFGmND4hs85pKbMMHZyXeap8kPgAyRpueDenAYXSd9KkzqU7kAyqnUui3kwTbkqogMhzkYHS",
  "key32": "4ZcyZgpFJeNRup6phTbyrnWhbKDY1QKpb7PnkxkcuHPsgs9cz9SFdUZk9e74hj7LuUywJnjtKSvF3mLWYdz8VBwn",
  "key33": "4y6M12CoUQ5xRdZkPpu5x8UJz9tkUVraN8yhrCq2tjgBnoS2UrGUEz6hJqRMmUrRr8T2kogTy2fXUfZzWtE9cdMz",
  "key34": "292bkgNHaboMf9SeXE4HNv5J1rrxuiFp3Te7WpYWbEkbM4TrMNV4NZvysFTAiMuUU1GvDjtzcCcTHip4Hxy1yot1",
  "key35": "XANFTr8bymw4j2TW9k8TWyVnF6uMabFv8GHAxBs4eZLfMbKM44ZZznvPTECvy9KtCYjKLoiGn1T63FjKL57XYQV",
  "key36": "5oBPfvoxwpbQ2wXhbK6uUg4j9VVWUeUwcpeJzWZ5rixz6wCjiXgeHcnXPEW99vCM1VKEssdARqHfjanLuNqXsvaL",
  "key37": "z16ub8E5cuYAPxMsZbtFmAU1dRVAwbixwVoY4Bd3KqLxdzEPwu8Pi2vmQoeBV9tDmtM43AWCHkWSHn4t8NedyNf",
  "key38": "2terVy1xqM2j1QcQSuSgG5r5qi8frhQJToLoioy7o2ShoTfFRRZmSfoxpEVPWhemwNdZzq72Moeukrvx1nkc2Prd"
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
