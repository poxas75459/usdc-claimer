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
    "2RnmmypjRQnQ5v62BtCxrtP8LUt5MWxVdqkHt5A8z8mzpbryigMJEPtgZVysXYSgX31KiWmsELzdPEH1x7pivWg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSgNNb278gSaaQLX6qj1cnEoXboMbQKUgjBbFJSCQA1sSkyAaKRodPXegNu6Yhzh6bXerds4DrzSZgfp9AR1kh2",
  "key1": "3cQoeqigK6VhZ6qnsV458NWYVtzc1UmiHKyXms5WEcqoHTrxvw2zYwLdwyF8df6ePCy1ZddkgBcGQTXWDR32u8YF",
  "key2": "4yyK7ry9zyZPoNShGbd3iwZu4457Gw8XGLt4b7gQGGfEe77LcpYuUwJ7j89Mo3C73U26yMM5px7y23VGMk8YL6PD",
  "key3": "2VQs25Vn4x1V6LzXfN39MnsVk3LPFvTa9Drm3wbjURMC39DeH7aDbCMuFexmiBhHcqvUrFgAmC9xhA5EZDzZDuSH",
  "key4": "DvdTWFKLFtdA43UFFszHc5dEGgNP8YCZiamd1n744YnxzNuTxwz77qLiqroC7NGcr9xaZ4Aza4r4qLtwsrpC158",
  "key5": "3CPX5q3fSsiVKkP8hbosNRe3ZkmpJYAZYA2SJ9SUJ71DpaorMwM7BuaDa7fqHcaUPBNL553Mnia3bGaoYLPjVgqq",
  "key6": "3x69c8GVNazisfnzGSUbpD1MF3NMnerfUqk1NtanxHXZWJq9Y28UiSuyrQdsdkat26Jj1RbB5YP9UqhsKycBAdvi",
  "key7": "vbAVQiYpN1BicJAJwjdSwGMyxrAksCFaeaokyyiVG5Y441wrRqpvjBEDRd2Fs4onnadm3ZEzskDFzHRJgAkmnrv",
  "key8": "3KXHSuxusxaQLTthpY4GZjxHHFetD3Q2s2U4TStXvXSwK9DZ3WsCHVEpwAk3xGK2aB2zrHDJQ66GFFA9jCz9NWDo",
  "key9": "5wTyMk29pQ55GgeWYokbLKUDADHF3hkJg4aEb6CXzgfiQh6ov9gMFQ66RCd1ctsbWudwM7NuGASgyBYxMCWCSDbQ",
  "key10": "5AwDtcMw5ba9kcksm6W5qtyiNHxyF2NQFwqgNjUfcsehzoQZcLbS3jqh67xBedw8VMYTQTB36RqtFZwUNvj5o6Ar",
  "key11": "4fYA5CGj9McQUZVC6p7HdmmPi5xS2GRgDuXCXQgW5wGhjy2shVN7vp6EZxBvTZQvStFZVrjif5sj6uXQFukRK15r",
  "key12": "4qh94VnLQKYVXfTxzV1f5hvfrDQkqpB8RagbfXAZLd9KSQYZuiA9x9xffHB6hGRi8sPfF8HLQBLcAyFQLbiQFDhZ",
  "key13": "f48BJi9yZPebQHgGn9wHXndrNxULZ3jRdotCvKhkFWVL3qbrzpp76HCfDV1jy2TYqLECi9pdsk1hAHYdPHAdnoF",
  "key14": "36CW1ZLeU9FXrUztumidrK7D3U2uNtJQ1J4wFrNfFsUPUPGEWxqEZdaNbsmHCGXuXajq5pgQeHGY2XrFWYerhG3Z",
  "key15": "57V44hmQQBYsaB4ErCgX5pcjmKuvEyaRBdK699hfNbv6gpSpzKGgN4r6XQjvY1rdw7Vq2WxcUwgxWAekF5ZL5GSm",
  "key16": "5UTJvZTbqPXeKPEa91vvF1vy8ozwZtxA91cgmKtRhF2iqeKZLw3ZvVYrauri5Gh5YScpcuyRpRjUAWTB9dSDuPfD",
  "key17": "3tS5wUqpJKXY2C2hS4UuafpaHUHq4MsBu5ZGRSff2qMamEYc3FNk5YbY9dLhZrq7gJTmDx262HE7DRt8u77t357r",
  "key18": "4RCboQyPUx8yTeLQDWc65aeg1LxA2Y3kyFFiTaAgTPNgQXuYYNsoqtECrj3uJ5fkC7kVEsM1YpiaCLiPFSRh32V5",
  "key19": "5yWqN6BtW9AVAHywHVwQQeZHJSeVzue7V9NUVZ2UTdb7ouhUpo5VMUvdYjjVVLPyzPpVocy5TLHQAoSuihh9k5uJ",
  "key20": "22YZ736LWnkoH8jccuSkahrRywxqTUn6Rg1tPdU3HwtFJNXKMzpEAGMp6tXBZLcUpyi3v9q1oK2yk7zDAxPfwKxL",
  "key21": "NDpdvBJK2KzTLJ8ofZCjxFNjeXPTkKyBZwtWjgsa8rq2wedzPZamCbwNq5LehzX4o5r18USP9PGfqqzhWMnKBvE",
  "key22": "4vQL6VR77MuAKfPY5JcD3mX1dcRBp6kwgN1uh9xUWK7q31BMd9AAAQPHbMsn5ycovtR6r5RH4CgmYvy55z2h6mGU",
  "key23": "2kBhw3z5tE7VhBCdbo1ybhckeQwRfHJf4xyD77JS38J63sDiqgPuB3UdbajfH6CRTrACjDBnDt5rtbVajCyicVW4",
  "key24": "sodkDbd6qioUyfXQjPzsM9KhDCjaacrGcsKVcSmhCYEY1KBdQU6dJwq1iE8HqjtaHuGXE42sqGBr15XeayfnUN7",
  "key25": "4y4TuvxNAwvn1AbW82L9keGAU9Xk4N146M4JWYdchWYB4fxK881kc6BquPVRoZMsa1F9JZjA54gLFw4eopck7SCx",
  "key26": "NNvCK7kSGDjRWFZETqiWvqaPWKkHX8m8FVTJiYuHVmhBXbSq1KRU2WEX8dj9NDkQzq4zDjQnHToRvwuUVSyicQp",
  "key27": "39wedLeqUUKLyDo1bUZDoB5jeWaDi2FhfXghCed5SDdUA2nNeGnfNr8i4pUL1ru3r181WWnm5G91P3v7bFGeifqA",
  "key28": "3Lx48YcCVWgEGzqPbvggmuqqL1Z7Pgu6Fs25PosJF42SZeLciMLgYciNJ4xY3sFziY45q3R7swSEER8iJSqCHuwY",
  "key29": "4whhaxwKngeDAKccknj1TfdH7QJoq5UKycW1exdpwHU3Cxx5E34XGfV8T3wUWvQRCfvqQLVGKJFT1yn6MSVFEJS8",
  "key30": "5JbsTiSMX3LypVkzGUEkxYYgBSCNmL2XSfZqKTKjXmTTCC5mfmgfa1R6Sq7de1x6oWM6ePH67WxSs4GwXwbt89uw",
  "key31": "2Hf3oN9xSWoMTmS58VpkXt23KDtZq2BX7iiaHPz6eZAgLpWhYB3Y49sMRhFDStrjSKHFC8DpsDbk1eniHWceNdUL",
  "key32": "4nuqtustBSrEab4tV3qMUs8Uhtc4VcGgGjvYJrmJbhpHyegeAbvik9YBeYoqUUxdUSZCc5mSfFTzXzU2KvaRZbzg",
  "key33": "2VCWDjqtNVVXDjfXcCNjsVtcWoTeSgu1wyeeTRHi3YMmYyX42RpjLrkW3xWbYZiQbqrtvXo9u52BGr4wuugMvxZm"
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
