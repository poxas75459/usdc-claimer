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
    "4MHrokHiQ3uufFVWzy1u9dhjGE7WPenMfwCMG6hC43ZE8QZzHbPDe1JoFgPvxWetEFpx6pjSfkjCtrkbNBvVafFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xostwfv6Ei24UfWPSPfixTG1Dea4AXDwRBFisvfthprjE34c8gSJ2vqBdzQLDVYbWMicc153GaFxutmYQy6m7BJ",
  "key1": "2NHWsU3pEno2UYTkUpxHuhRcP9vXWQDUBQ6Q9mGTYiw3HP9oDvFP7vKUmZxD6adq7u363jWzX7Epi73PwEKHaSUj",
  "key2": "376qG9zyDPDJ5NsRvhuWAcTecMMw8xv6kNbgdKEXkNYz9Ar2FRdEmWjEUGrXBXrkyuKj2TDRViHnZT1jMGFarPqD",
  "key3": "4CSDpv5AXFJVMTbuqkyjKricud2yjMLXS2nFqSKdL8WhqXgidtkjWDuV8ucqy5cGNGYbyASjyRXVGeQcUMQuJfAL",
  "key4": "R4QYsMimKg7v3Z9r1wRXN4SLU3zDQCYeUGMQJ8jwzXa8qiPkcdhjUiz3cCDnSdZZnEmVgYSy1fRMNx5fcZ8MqGL",
  "key5": "2wqsf2eFxfBmy8KP2RPZrQWh4gUZt7yBhaF8Y8UyfrTFSAbxm5rA8egv944GRksuvpQc4KPh3tG8hJMuZRtirJ2R",
  "key6": "4uQiiZK6MntxBxGFwgQz9UZ3m1QsHweAj4FeedMghVAdhpw8zxbmH9tjqFS81QmBke2rUYvNoN3ErLj9z59QD4Fn",
  "key7": "5p8TTqBJRnMt6RhnrUZ4RdoSRZRPwh2bKnUCbWdSvUHwuNfBEKxrbjPZivpf4oEm9qmrazzeghvGrMvDS3iXfqiG",
  "key8": "3WwNdCcRdXUAU5xMbtwHDa6qbXXLYrcet1bsxZwJ6njkqcyLBLGbbrxCNtgXZrw62FjDegTG2ksCuxZbkvTuwV3z",
  "key9": "5vcYViUApCHFDgtaGNDKg9QUC1SmCSKbmZKNmw492Q2oFdHses8RKqW1UQ4JwdgrVS6yQcNfvffR2ZwLzeAwUHUW",
  "key10": "3SfkzE5mgWC3zNBtKEoUvJr9sHsiXe3YLt6EnqohPcffn5DBWpdNw1XYWMWBJnBjLXMpHef9Na11B4ptgU61Q1D3",
  "key11": "43sv2WypXNPtSAdcmGjdaQQAW7jp7CeyZE1bu2JJQutGPFFutx1Xqqi6SbYGPEHtpdDA9Upe5eDWiv13VLR45HjY",
  "key12": "57YKkZLMKwAdBDpxVqwkqkcJzbLtnR36BhLyncV6tQPA9DD4fwEFrFNhpAh2qA7b3igMSmfQ14PoA9LZQhVgptNZ",
  "key13": "2ZYmqVi96D4EpktqQZE3WmHfFEHkUW5DNaiPA4vz8V1gTNALDWyD1NDgpaVD4tAmBoyKV4aAu3ac89YegMQcdxrn",
  "key14": "4Td9WUDqaMFXqgGRDC6Ka8rbZzHz2sxqJG7P5GB91fCMkbsEnja9ji3vsiy5zvGt2wiimrPbEmFML1HnkgVoNFMJ",
  "key15": "F1bkpRHRzsw3FBbzhfzZvm494NKLfQnYF9N7zMfTL7CRaqvqsiojAfTxBAujr7qPptdFt57mMHKMWk2eeWtF5qG",
  "key16": "zNAN3zDFFDc1kW7rvhdQ4BEHFpcGd4jyaZbBtmukB2wLoTUyF4HVEHCubwz4ct6c8F151JuKe6DNqikHiW9yU2D",
  "key17": "56inxtbUELmXHi1kcfZXfrabcV5vuQbBmBS38j3jfgqzRfCu6bGJrp6a744faq2EXr1TLDdmv9g1McjcHkV1UEnR",
  "key18": "2dMeciCs2w4vvapconk2sBvKiaUCsrfSuYZ7MgT8FdtxkLBchWgdy24qpZNmPrVJeW5MdkBPnL9s4oRaYUh75fEi",
  "key19": "5cRDCgvRidoASoWB4WytQBdriVQmQXwoe4VQW7x6z8YFSV4b7arjRz1JDwJwJ7KytL5SKj9gDFVyVeFmR8WTAreP",
  "key20": "EczzViiehTLZdMnjDaJgAD7xr8hUF9nW2cMb6aeQfW7As3ocsZWLU8Fs5etJMvv5N2brA5wUziNErr1GqmN5GoB",
  "key21": "4cLNQyLEM1yjToHiPCnhnGTK1qFMbury2u9Cg37M1Df4stMCYKuEpJaQnjUHRPLn3VFaLvJG4AJHtRM6adVvqCPC",
  "key22": "2RXHJwFknSdD5yvmhPV7vpX2cPHAHKEK712GJddZWgKFoum2ae8p39wWYaEDF3BSL3vv3e7Ss3N2ogmMuKobtHpF",
  "key23": "5PBT5TB8iGsZx9WPf6bc9UaMuqSg6wxFXMMyLinkLPBVHqPHBhUYJRbXSshvpw7PKB4fgxWsHM3Cc8cRhJgR8K4x",
  "key24": "KETcUxmgApkHqe7rJNdUPccLSC1BvztG21fRPvF5SDkmg9D25fKWammxptCHDJ3DdbTYE3xi84xNHLHkrPiyifD",
  "key25": "5YKgvKYJgvJ3rdZpRrmZYuanbqsMYPKwWjueQS9pLGpWQ3SfDa8RhFuBcCfEpb5Bqwa52evM9ApHFVQtYjeJLTb",
  "key26": "44qYKpTsf6AsBG4sAcuEbVvYmrTXwPtNFALd8yGnFw8RG9b7vUtvJayaZYMuLi7vwYU8cMt86CFQWTGGkUFRxsXg",
  "key27": "2aCe7eh5easx4DkniTBH3rVbX8ApGbfcoyRmaGGHQvH6CygE69WCmN5Q79fzZMahbn4u1WUs4fXBh2KPoNvJkYRs",
  "key28": "2rKZJkDcK7jm7AGyXkWodZELKW5qyRpfavabJxGbACKNf6yMCMnSUzvSi3V3dD1tjFaVLyR99hVKwUr3kFvCakPG",
  "key29": "5P75WVJtpYQx96fwcTpDGPQZuFaLDA13fV8S8pdWHf3ahkARqLXifhvD1SFwcckXkFwYXBfQuuYczcbdqcNyrTY6",
  "key30": "67mGDTvv6yRrawu7oN2GZTmx1ffsS9fNep2tP54Yca5E3LAZxTFZt9e6Ac4DCepnbr2ZJ7EMeHafKXmtnS2rM4PE",
  "key31": "5jvFDoboSFzntRAAnNfhQTbrXVaNARwHnzxutY4Dnbt2wyjBx1wRpZMJgphaBkvDg1a3Ws2JBCpHgeJ4R5MoVsS3",
  "key32": "21EfWZPnLKMZUVdJtVMUk1VHXWnhgd2oft7ex6m2arNAvQVuV8LNos8dTjoHmPBLHtkxFkv9etWeJ3y58DRQdtVa",
  "key33": "bV6k8wbtFCfsRzo5t5G8Z6SX1htufkxFXDbxp37vrF64N4dDP7EYWNAqigrG1TykVcMZhyNPfk4CPE1kn3TTmN2",
  "key34": "5MEdLVLLb6DmTgS7wkZduCCgUTsbBswEwmrZUXb1sGNp43ZmfGWCTHKmqUHtrgMtDZvxHBUAgvgaWRfJgTiB26QN",
  "key35": "5zU96uPunNPwweDu54kcSUJ7vFBCAgUWUmT1gGdxJRAKYNo9GrTEougoWqZpnrrizrZbksjWw2eDRxkZkWGHoXJq",
  "key36": "4r8EQw3z3L82yE75EnuVqShhpm3zXqUj2F3FhxSHaZFqZqepKvHub23FoZJsvbiRwzrx2GAksyQngK8D1C8wRu8B",
  "key37": "5vgceghRk4DDhoUcJuugmWPse5XigbAtbYS65AYdc4NX9bMYV2rezTHWswFrU55MkPoSAZopjHBD926ya19ed2AT",
  "key38": "4uMRhVgQm28KSHyKBLARp5tpoVprzndLgE7vBJ5f3aADXtJkS7HVXwum4cQiwMwMA3LzJvpTunWyTBAEscAhbxRt",
  "key39": "hf4vsqBqF6FUek32yUCynPNagSLLjRpBt99JRBDNUuUUGHFVNNuDzWk5UMKciAZHK9dZs1NhkuFNnc915XJb7gH",
  "key40": "5uvXmHydRJTovmzwJKFww68L62Jap9Kuv9TXpfXM28Lt9y8QYY2SGod2WYLLqz5H4wPtouzaDYPw3H9nGKmrapen",
  "key41": "5pfE7UCU6haEySFdaNbgiWwGvbfHUToQb9hUSNrVm13pJLFELNpLqB8C7bGnVh6JP8pYrEt5XN2VKyw1s6qQVbz3"
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
