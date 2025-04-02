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
    "4wc1KCHaRa5pPvR6GwrdRRYSi3VeBUrE2sp8ycPLaFcbPqzsdHorE1docX3vik5dXaZVrw2FFmYX6ADxycsinTJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyVjR3c8cC1VcuYfC3brEkJccYaXsMZYvgjZs54Hfp8FQQsSo7JzoMwNs6DNgQWWdNCUmwf2ueeuPRaAGPNvc2w",
  "key1": "2SUqAihNYypweDykodtK2tPEcVEDx5xLN7XQJRm1iFdeiGa6AzEg9HqMFXgP53PtNFmMPtcT6za1CrXr2SfMdTQH",
  "key2": "2fmZR1JJmAGPZsbVyFoGR2n587XN3YUZLNiFDeDxMJnRHbdqXJLJm1YuckmVFV79H48hy3TnqqdQoSwKAHb68zPJ",
  "key3": "2pZEfKdxipAcXycaDr8SwJVpbnuszR8QR77mV2eXm6z3X8BkdHKrhhaqb2YkhePcUr27t3M2TQR2NYWHkitnnbL7",
  "key4": "AfrAiVUhn1UsjVFiV7tp8SZPU1NkGJ6egxnAQ714mXf8cmfDhFYNDtYpLybewJDRdKx9Tc4pnNeyFChZP3Zjk5c",
  "key5": "UMGQP2F8MoV8pBR83yFPnfFRbG931d1yzcTc9JCQXMUopPkvrg4tfjhHKdfw5J6PLxfweu86HobfV1uoHjXmEEd",
  "key6": "2D4iw6AUww5eGTUHjecvciYudH87D9RGDE1xaonXdKiKMwumZNLVx7ykseDHNAUCCYyHhxJLt5LeHzfD3yyeqhnk",
  "key7": "5sFRbXyWkN7YYyMw8aZoCwvopAQr5uLAPbPPaShAMftuRSJoHuXmGW8pLzNAq7ywDq3YS4uRH1J5fQMvxmBNq9Kp",
  "key8": "4dYYkJQHs5LUgrqkctkfF4snsSmz8wq7MLrTB34WQLPsudr4icbLKMLsA19a7h1zcFQU1NehBHcgXg8YYEwvYWn8",
  "key9": "5X4Fwkk613AZCEQYLsgFUAoeePZkwui1zMZcmFDNQDcbRAD1Z81HAwx4fq7CXvbQtMBcXJeBeKaNkAXhoqTm6Ver",
  "key10": "5GqBUeFKYmQ7b67rbqAsyAGHaECuo9SA1qkpKF2mrf7RNgS3RjZ3KeygiMebTRKxT8obUn7SeiYuUZ5jZsXQKHCf",
  "key11": "3fE9PXAgDDo3sfC3U28RwQMyFMnq6y7ZRkv1Hc3TCzpGFd4aExD5hXtCKbC2At5pmJA5Qu881ZoGL415FXjNiKQ5",
  "key12": "2fQcZmrxce9CpKGwfoRPp5RbbhSQiABeSNR9KcZ8ofMCP8wRvqRWA9eMV2BShG33gBXVyiXNat4HrftbsEnbTuEs",
  "key13": "5n1PKJd2Q4sMGvEnUWoAzdwHd1Y7VSmBF7DdEmw2tPTYoF5Wsh54AgHVHGVG1toFd5byMnq1k8VzYQZ7ZM9ZPYV1",
  "key14": "3N6byELQDA1fgyoHhM5yvkFf9mmR2KzNrqyGupekCR6uwxpQsWhRhCbTEAxuutKMwvZVrPcdLgm2wqvaxZUV5AoF",
  "key15": "2mwYDJdMNDDRjcxU573aq728GA2UXtGUNbtXCR2TFj2ioJvu3Po7XbBc6wPQYBRt1cWEyjbhiRALSh2Gxm2EA1K6",
  "key16": "5GNqK2H3xzF1wA4L7X8HTcvdSmnZHVHDgxngYmLNJnGoQD614WG2HBPq2rKaHyungqWgxUkKYrYRZEp7wSwUj1sA",
  "key17": "3MuERod1rUk2asrHbbuADBkbyGR9ByB8GqmnfyYmjRXyj9SLMiSgbw5RsVhR6K45Y6q7HgMD3FEZHT8qApNwSMZT",
  "key18": "2G9bKuBvDR6mda2GvTJAKtAuXBqDfmtYkYba6dVewnAwonRLDet8d21hSusfiN6zUpJjCH2u1skNUAkxdvQkVnDU",
  "key19": "3LYihaJJXAqvfoNYwFpVjZR7xCyHthN9MLR4n7HScdCpiTjAMfffsSsRym2TqbsNUab1bRmUR1h7At2QuDSeN7me",
  "key20": "3oCJCYj7aJhAhHAWiPhma3tuDdrVi9fLHTfCStWFLLC7Mt3C89VHeL4XmSAQNn6MtFPjAxXjNSCv9QJRNtrXKyCX",
  "key21": "2nRfPEVuqyxSdmYFqCsyvxVbTKPWqxW5g9SutszQgBA4TMcAYYaGHGXa6WB7pHBPUyQUbPpNMGaWcSsjRQYNYv4",
  "key22": "5trVE7HUh8BfpjX7xSyeDnNCwyKbbDWLfiPNANmag4xyZFn6TPb3jbonjqSmTsJHXX5sydv1nPMfbYn2sh7XVaxJ",
  "key23": "4wtdv6X1rU9GCx4c7nQTiahk3bF65EcYVrcK5Q6RsnwnMRAhEX66Ax7xNwhBYTgQaLyLo65E2FDDP3oZyXSpKw4o",
  "key24": "dNFSusvwjkug3tXhKEz4jRBp7PKCdh9B82jKg6AxzsXf7udASTfW3PvAX1yzYJNvbTrTWnoMQQJeqMLHZDF3qqS",
  "key25": "3YP5LUMC6xr7dZco2aVaVvRff1L2HjwkxWfjRTFkg56fuqFXh7Vhjzi4ikfnSH9SCnEXjYdbBGwtEoXTGtLFky6S",
  "key26": "z11cD214rcpkbKvwcm6nbS38JLrCCrGWj2Xft5e8YNPNxm8Y8Bgd9eunB3s4Ac7PHzvmvrPDAGE2ztAVbA11rtA",
  "key27": "PR3JJ8wVWFPtV4aJbq3RzaNfv18diFR6ymCJdUeyQX6UrvaZMK9DLvG9YaxnVudRJ8TwXZgPTYNAtVtf6q4p5BU",
  "key28": "2u6Huz7uaotjA2JTNxDHdYwwc66qg9VYePk4UA5f83APm5nxARx5LEbVX2sZWbR4SX9iU5LUQcYtXxfEcYKovpJw",
  "key29": "y7BY9GDVSof76CMwdCu3ZwvX4EUcKFDQsAMZnGQXjWtm41FvVH6MAkvYyGyBMdoRrxPwdnD3Bu6ZfB8M1ZwNzj7",
  "key30": "hRoyYQs9FARBEuHF8G9vJDUWJk4CGTREGGQzdogyDf8mFdnvMnbNgpujrjh5q5g4BgaF6K4MfP931uKbTtZLt6B",
  "key31": "64E3WDKy78c484s4MnLkq2UPhxjf1r6emwfudwWa2qPbh83JXtzucoqykwJTnZcQc2NY7SaFQ6rPvUDQHrLqgx9n",
  "key32": "4CbFHcm5rgekn1M65HSLioEmtA7M36YNXqC14wSC7tNWNJHP9TtmPkDzpKwYFDVKWdP159egP5Lfnw9EpepdNYTr",
  "key33": "4fvuKGnUkxfnemnFzovP12ahCHS4BDurxSDTDUH93P2LrPi9Q8jZA6V89VyeZ5A6B8J1i9p6dmSXnyvMvz7mpFsd",
  "key34": "2iWDfxeBjWEqwzFEhxCCk5b9d2gGqCX1rfyRPBgo5Eop56uKA3abwkC9oeSmKVAsYfvR6v1V2iL4K9FPdKv7Q2Kg",
  "key35": "5HqJewjTBYeCgt5Tzs1bSBscReNxey5T8z8XAoXwkq4evH7hbm5uZWc2fcaW8omgHYhAKsooHdy91PCT33y1pfmG",
  "key36": "JD2ViHb5mH5S5vCF1kwfwY6czP1ZfqycLqVzUembYL7wvhM7HHetnZZB4LEvHSnZqBjqR9btMztotyoeCTca44R",
  "key37": "V2zFf9LJmS1VVFaFVjJYawSmqHPSn4GiFM6emE9PMKcJNescMht7kKBtvf63AQZrksWQBt8P2kEWCubTgnHqgjV",
  "key38": "5N5YcSA2cAmoEEsFGsUsZ3anx2xv53zoa7pe9wRNymhgQgpDwNJon38zzaFwKFcCNZ189tTM3tZ6S8F1Sv4MadaA",
  "key39": "4kG2RGibZTxwKecUjc5d1rQQphFXbC5g6hH14xB8nyPoQLu5s4LhTqTTYgNSawqPprnUD1u5qyidkn6XpEmqm7f7",
  "key40": "n2nLyfYwXbWC6qLyp1rEF6VpApqYJo329ZEd5f1aprJyiqAAMtCksAPgrLkCPPgGtZRw62EfYwZctCmrWxv5zSN",
  "key41": "2JKfLbEtNjUDQwnPcvg5qUFBgNjRK5cmb1jiC8Rm61EzRWF4rnPvh5NhMKykDCuvYG6MyNvpBs6Mnb31VBxLkR2p",
  "key42": "4Cfr4ELopkbD5JoWRMcYjv9EjtgfDg6dhXF9r4auH39hWPjigm7ezqXG9RqWrfCDSBYvshhFyJK3MxcuxXdH1ojN",
  "key43": "4dcTkLHtUGHE5fkjGuBYt9gtaujcsFicgSFdn2Kzauwu6SRNjsi8bmEaPEHUnUiw8NGuvLij4jTayAq2Xxs12uF8",
  "key44": "2229rtVsMbgLukuGfPv1fbrYkkEVQarE8HFZXasttjdPjReVSCZET5wnKqc7AbsjsYgV8bWbuhyQ6qGTavCZ3k5j",
  "key45": "28bwZ5dy8drVE7fRFusem6xaQiLFPgSAExaPSTnv6DzftVRPuyv1CxNqKiRmH3ykU4fVKFuBeDXcd2uuVRmsmj5L",
  "key46": "3eNmBzPZVT5JkemhV3U8XxzjvbJDDd5CynMqoTyPoWPQU1bVvq1Y5zaZobbsHCpJMmzGYxEnxmEvkAZjNQ1B5TAB",
  "key47": "4WBCvFuPJwV2qYbanCJk7QhEBKHewHR1PhC4epdpLArDGYVHwaHgyGtWf1GcS8Wfg5h7HgcNxXFjFSSiMucFNTkK",
  "key48": "MtX8G84igroSKt9oKLGcEjhbzfJSP5gsjause4NdGFtiiPfVsZwcBZLCqRMntJrU8nQJYFykE8BhZTHDZUpycW9",
  "key49": "4VKNkh1M5gS7C7ywPmMcJeZtzbgpw8vu3MELW5Mem83Z2dmXzFLd3Cgpdh1kT2SJHbCQFiHfYnMRfWVCrbinhVNi"
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
