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
    "esfMatshyJrVcTMwrJ4WjNdFsuw4E59cnvAJkGqcTerVxgLKamUzN4aHrm4RdBJb2aR9cniYdmhM39GEjSK8PC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mbSW2EhVPFfCXnKwQqhiC3mB3kvWUPcdbh2fFchEmPaoRVfnH6Go2DMRpQH1ZiZhHpiyVzMEDvKbRvA3YsqVbP",
  "key1": "2ou97HZgGcgh4R7nkP2U6cKxnZr2WXb7c2SA5UjVRf7FopvmdAivf5upR2RShAFjqvspbXxLVZJaFCjB8cR8B7XF",
  "key2": "2PDwkggbf77AoeFdZYGqrgL7PtvQzSoFcQobjiTSugfRaqzPWbNNVqmBzHcFaoLhuY34zS3NnMhv1SHBEaG5EmMf",
  "key3": "G1shcGp487bjmi2aPwiXrD7XCHfjR6RyN5krWZZDtRx5ueENET63AaPT3TB1rn1fPkPu9Lzvmw2ZLighg2szemY",
  "key4": "5FxJ2WuqsdmdXSW2bX6PYuRBPiPK7u8HpDX9DcuP2QNb82tFoU1DfMyVNFAjWXbdLChSTXpxswsDJRqSLgaD23d",
  "key5": "XgWgKGZENHsWy4eDddpUiwtEMC8v59sa2HaaFzJVAPNmg8a4Dv8PfpDuMpPmtXyFpyoroxbZRvgRLnAxHFxSed1",
  "key6": "BgWk4hYjQAfoDwLBrts5bg4JVKfLxipQbYiMct6YNVn3UFkqGB8zs2i8e1Xg3CUM6Jjy9Na3muUg81Di5DegKig",
  "key7": "35g13EMrnbM2uWfN45CpCFVkyF63xGgsPF7oUD5S4eodSSB4P4TTpGqUs1KkYXNUsssy4RCVY3231mNngS4EGUBX",
  "key8": "2HK3JRyicFg6mTkFPZTK2GfzgKiePDJjipMEnHEw8dusPqPNUKDZGXuR8PeDypRnJEX2pMNYX76aLWXnu73FNGW6",
  "key9": "4NWAQViRBqbzjbD4iHVChxjVQuXFozHqCfwrW3S6SCsY31coK7yGwc6Ej3yLu46BeAGgUDGA4EEDWbiYLPySUAUJ",
  "key10": "46KF2G3sXQySAQyxuW4fypbn2KpdaWbkiCUUJWgeDtJ9YsNELBYHVaF6qrL5MC7w1Z6bxja9AJKbfJ6Mb4nzUYV7",
  "key11": "P9cw5md5DHBQN2XGWSvKPxGb2Zhx4D2Fzau45YxhiWY15HXcT7b2Z8fRcNoR1tTg8U899hmDm1Ungss6jRK9SnF",
  "key12": "2hbcjEEKk116p2TtN7SNQEuyAw4Q12jnDy37spxFwpTdS7YzwWfu2grVUJLZntTyyzwYFiGVL91QDvqcM59gh3Dp",
  "key13": "43Y3bLMeJqk9NhexC15VgXfona2PVMikRQ5n8QF5UjYBXEXarRshc1fzxDWYWLC5xrzJE4RYXRfh5LmBSoZyt96G",
  "key14": "4HCQKrE7zWKDJq4LqertKB515ViWuituLbmpJwpZ8uszber5UVLg2VFf7v5DrsjqGJjYLm88PYEDCxo4TEonQoae",
  "key15": "4RBcg7bQV1BFLGevsndTBSbPQtPr8g6xFN2uW8jpGrD5knYtr3hikFXZVRu3AJC8tmRKjLYPRRWNHatf1BpXrG6d",
  "key16": "2j688ue2DBkgKnfub5neXPJwNT9iz7vABJhbRDpXCYZCr3dkN4wQyNNn4y2Jr5oNvbk7k2X5bTArHgnnPT1TvB94",
  "key17": "4LiDwehyXcB8xSV4xD36WkYD3ot4FVUDvbsQtgkYmF6cm7RuimaC9SfK7esWoGRiit3EGJbgyamCT84Jt8CmYHfC",
  "key18": "58yjU9SNgpK8FXcixNUZZ8YZpSk61XQRVgM1Mp8EckCWdP4ZLWCZU4pBx1whN7uC7Tinp3TmEJsVt5RQdRWG9h6T",
  "key19": "2tPMHdHzs4nSpH1VJ7vmfdL3JHXnrLv3hGvAJEtCK9Zuyd1SJe8bFLj69KNsSaBJkbNTTyvtqrcQ6e5U2tYMvtPB",
  "key20": "4QyaEqr7TpryHYxSH9T9NCd7SmNkQPAqPTu5BZvkaomE12SAJVLiwqbhdLjU1uJAKbPNuDK3bw6UzWin5bjBbyqk",
  "key21": "2FJNHZMYkzc9Ger3ZrGFm7WZV7GrDopnPDqNDUFv4hgN5mhLEpyHgxgBz3sMcsAUDAHRUtTT3Uzh22QWU7gmYNXX",
  "key22": "4oNjpcFU36xEe86UvprPYacUgeUdDZN8PPmsKqrwEuQGResrix3iC69FHFqVMyCwpL6phnhxEeG68RqrJBe3YMex",
  "key23": "2vUAffMS7rH5Q54yKBAX2bbM8kCdLtBJjdWKFV3F9exp7Qk33msFNrvPGRcZRQFVyxsDHK5bTcraKAhLrvX1Byrv",
  "key24": "5KpxSEkeCvQxScUY399XWZWnusgGh31foARcyTjp4Mg4kkjwgHYJVMJCwH6mwevVVG2CKrXP7NZfuaqQGUebXoK9",
  "key25": "5tAqXiBsZP1ogPdQjpoxpkhzW9SencrvUthgAbZzUub5vJpFLtRcJ5irWCcF2WBPr7TRNad3SRXDwA7wzbv95RTC",
  "key26": "4k153o5iL92re93n18VGmCr2LLUFgxXZLKiEa6QBFDGpCXUF51SjjSaRjgrM1PzS7f2K6jHpSLrBLKEHsgpa2V3e",
  "key27": "3MEg1kTZfsZzMa9kAeoBHCYMdUo6u9KezVHHLpcotFGwyvLWL6m5Jf5Nen8WUVSKf2ANLYUcoRBSwa7qLqKbmS5Q",
  "key28": "3v27uTduw6pTZAHmef9mJFf9PoybXjGyW1mBLDRKu9K4eAYXfwqLL6UJr7jQe38Ee5iEHJmRkisBsyX3mxZBkv7B",
  "key29": "3MKS33ADw5wFBRqtGdXmkNLnpLNZdJVxkpTNe3xxxNav3yUGvx8KYMaYrQYt6PuipENCQB7VRTdXJMt8SLSgFgE2",
  "key30": "5Mjf2ZSYadnezc2tqPXrJ6hPEAFEaunWn5DqHPkbU8UMhiYX8fnEo5V5ToEgwgj86SgFXPdhyyjg49XgfAXYHsZm",
  "key31": "4k3re7B7NugkbB45vCsVTtrNonzsizWDApkrwCoABx8ECX5QUSMciZ5V3VJcQNzdvHqvNqhF4Fz37TYZ9YWqE4E4",
  "key32": "5VQwWTLL1SgSiSxnqaXV9dgrCekuuJVPhizT6kTbkE4MNxUg6mbjN3NYZLCNjmhUgKL4RiLj9KqbBRYD6QoXGBFi",
  "key33": "2UVcsRdzvrcVLpp5eBFWhDik6JjJTZeAbEWsrJyzeZ1VQUPXGpidAbuoZHTAQg4octtPHfQYxzWrL3ERzVUCLJXc",
  "key34": "3TvW8HhDJ4nCtggkDMFrTVhRNbebcBN86J5KpV1XEiVKoA2Ez35rZ5uhrE1DV8Kgonp2bqXEDfkUu4TBWbgNZ35K",
  "key35": "2ouGgXmMErnPbEwve9dAJHaHbtGjg553knnE1evAGDftDgM1UWgz14fKLEPhp6NC8Gw4cDb2MqqYi8ajz5bkTSCD",
  "key36": "NzJyYwEpunYpeMptK5nB6qic3YHeQcFWwf7cP5J5rToxzu1SpPBQNgVkphNTbYAcJxbn9DPX5ZijVGEjAnZTcXy",
  "key37": "29QdpLgv1q7mUtozFKZkqAorKZPghEfw7U7uDpQQosVoqwxqSqcqgxWRZMWHgSVRtxCcdfBbhLeBUdv4rtTTceN2",
  "key38": "3yFcHvx3XsexQVnyTorqPP7N55DXojHEzPcnaTMGfD5itvgDSXKe7B2ujg7xSt7BohEQwroiAmgpuANo7VeHNqGp",
  "key39": "4ZVyCLhtEwzgKar4v4SwTnYeUCmRqqNfwedMtMexAzJpdATzaSau16yZjP8JZ1CRxK5joRqNipwhfXhFAgL9V12K",
  "key40": "2fq4H8FEzpfuRLpyzSVoa4ruecWqAZjru2JUxZVhDGJRkkt42BBA1uAkZqPRGLW395y4M6SNznJq7qNqhqgtTKJW",
  "key41": "5VsvaNPXN4YQdva3kVvjuQquKexqvMBtidHXWjJbH3HkPfon9ze9N5xvRnWR9CqEzYVxzmHtKDioShEecny7t1Ww",
  "key42": "312uD521SsGQ2cTyqPeSVBCcf3nfmT2BvPTZ66UqVVs2Ymz3GDEGBhem2V7eSn5ii7fs1px1pBbhubH8L4d1wcGY",
  "key43": "7Bzja9ugEjz2UJHq1YL2EY52YSHP7XDmazFrW1oVo37H1vnNJztH3ctRY23XiLaiKnqpQAJjgKoC2KfxpASYZmc"
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
