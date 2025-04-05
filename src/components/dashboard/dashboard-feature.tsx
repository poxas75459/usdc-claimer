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
    "5qAt6F4kM4aKAKFAEP1SLTuHUyxaCK8gmXc6ufQhDLyL8bcax38SQ9f1VjtxkpzQiuyoLMK8mCUL9e8pKjHMMXYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmugHYgfArpuNbWpqvN4PrGwp5rzA1f6XwXijAxCU87WU6zJw6RSo8xHMbrHYbxegAYycspPp2vYm7XhS9hS6cN",
  "key1": "5vd15ibTFG4gUQ3P5aBcreC3ZUoMsx5nhCyTttPSTBbpqiMGXYgaduihCdH8SFJSAfriCxRYR8JxxULmzGo3RZqe",
  "key2": "5pVPzT55NgY9m21EUjzRz61iCf9KYV69zoNmXLhf5YtZ4g1jxefZ5GWJjRhGvuecCJhEVXfnsRJXYniRaEqMZ2t7",
  "key3": "2eZVqoiwmqBou3ssHTuSw73HxSgFTgrakNpbVtqJ3FixEP1yQyT21PW7q8x1Ks2s9LvggZpZDwadfVC7GQP6oVzh",
  "key4": "oQWz1ZKLriw8WGxPxRgQ8NW8G1TnJdJJxtpy7wV9gjickeNdK38nXsXAorMsZSQGNtFLpSyj6dzb5C3bM5xdrR5",
  "key5": "4U37EYrJrPj4WoAirbSvYjSgzAPumuLMfr9czMzt9L3MrqNUmdpKX7U5AtdsWbQ9p4GYJ6gX9r6JxK9fmBneSUX",
  "key6": "FkUFcCkPsxagEVtLfpmvnexzRPh645waNLi5W7fQrZJjZeKWnq1XVPcCsRQWJWgy7dM19BWaiBR3MvaickiNTa8",
  "key7": "4Tb57HvLiGNofFZyuxJgiBaCM48a4CdKGzp6UauePrhzoLz787KoV4wggE6Fm35AdEBbSVgA3DcJrvH5vxZzFe9F",
  "key8": "5g9GKyW8VHsuQwekRrJRK8MKqxaW7117X95PiwkTqdgnhCeqmb6KHCPcQiv1ZUjjjJ3tAW5ApnjF3vQaeQoenjW3",
  "key9": "3h23H75rihwH4hQoVR89SnDXYZyUmteK9j6EtCRvpdgB6tNZNo6jxGzy41rjMirCfQezu1yRgcFYdbXS572kzhf",
  "key10": "2rHPdfGqtpyQEZzSezgrsKLievAqV9GtJWrvqbm8UzXny6ZBnXSoVAGSgAjXdGVSep6zXVPsJg7ShUcLyo8R4tUc",
  "key11": "2Gdj9zqxbGRmav8A73yNLwatbYumEmN2E22o5uZW6tyFTLBXNLTFfhHxCrYT5oBLPjddojoTZS82bpF2s5eqhDYj",
  "key12": "4jxLBpjJAbh5cqyr4vhGRqrKMRZmQWRkVnaiYPgonC8HL1qqbeoUKbEV5SBrEc5ojJUoTkZBvqzFgS9xLbK1hfok",
  "key13": "2KV9L1qHNNmvee6LNR2BbWtukqAj9LmQdYo2tzH22CHLQZB2BFyTyMZ5LHc263DEvzS3XNsxa9DR52TKV1R53uiZ",
  "key14": "2qWk56z57TWYgCcV1EDGefKr5i18LaH2msMfSpijfGKwg2tevkw7s4jaU43xXNYTAc71j1NBxrixC6YAbhx9vW2J",
  "key15": "2qJukxZRg7aJY9DFj2n6EsAbpgXUeDAz5EjmbArr4pTXC4PMkYk5H66CXMy5L9Qy9rXdZWQsiVnSmLYUZh3cWwj9",
  "key16": "4T1MM4YYoh99KpXXiVuDB4sHpRLsmoBACex6Vk5YVFVpLifnBghtdv7U6q4ZqTaGdyfZ61LSPBfY5qmtAWZDhgm5",
  "key17": "2nyyer3h79qZE8pZM6mecCF86d6rAXPUhBQ9NSJqtzy8F2SaTG3zeN91CsUCiqPYRZBF1bEvxT8QPiVbkgLzUpFv",
  "key18": "n4pqTU3EfAj6o2Hn64r9fPdw73gMxougr47z3msEETeVbRETL1iNn2oEBxNAb6Ddr7D7yvyfLoApN8RaQn4N7Kz",
  "key19": "sMeaz8HZt2c2LQDHnrM9dVx7LqpBquPG5JTPpZro1v1X6qu14xQR537YN8ASb5ULSVimRdJyxBRNdJJEdC6VhWs",
  "key20": "3RBg8GgzKbgRcSTBDfnHv1WBMFhYvqQXdqm6d6djH9W9BrqU5MCQLEGJyR13x96Uzc6Ps2SjfGmDmA3XYh2R38hG",
  "key21": "24aommKKRFTFigFHcZzUiCr3iQdkDPFeTwdjY1je8BkPJt7UpDm7ey3hQwefoPh7GvQkYJe8X3FpKay9MEVdVXgP",
  "key22": "ojNaMq3PCMqCuvvdDFiedwEheETW8vjnLR9NPQaD4K21Nbj8yG1vSrL1NSBnhk2joLziRmVHNMGs58C8obBFWfW",
  "key23": "4sd6a3gPx31qbWFKdL6WwrRMNSnRSNU3KGnTCsiK9722FXZAdwMyNYwHxH54pqAoWr9nyCzdvtaf4j8MFhy9ac9M",
  "key24": "3azeQFjiiJ6CqGaqrCAHBPyZDQHsQMJCcGypk3J2ymef2Tm2ausQa2vUYJchaxY4YFv8WjCCYsMd6bR5ynz9aCwn",
  "key25": "44aZiTP253fWNK7jdWiFk9kV88qrvSKHRcrqCNpLWSjMvBdCD4jSzRaCX76Ne9FKSVJEdPhHLXqgaRZgvLTye4Re",
  "key26": "67Csm6BDaVFp7thDvmiCnoWUzJWD1Xwm2ZCZohnHXre5EBwpXnXPnBzyw8pxmVdCu1g6E9XBCXFnvtocV7udq5Lq",
  "key27": "5SENaz796VqPYA2XT7m2hiwbu3eyR8GVKyQjdCcpwpM1c5igpqpW7U8b1PwavBRKMbNMKXbPxknF2AMBp6prss64",
  "key28": "5AwVfxUDgTm3kBsr2sxbAXUf6d4eDmBN8KVQvYHDWF7BVMVK7nVXNP38zxu8jTNcvSEwJgZAUErQhRYyFanD2LoG",
  "key29": "3PAagE2GqQ1CzwkBkVkq5NPMad5um3SVk8oJBq43xemizyPifzMcdgp9ABT6UT9E3T7tywJX8ettK3MjCAcPRckp",
  "key30": "3AhTvoJwyf887vEoHGHP3g6b4C49J2haRfVNQ4QMKrBSCfjPKFtTS4BVcupUENPJX7upTxekRuSoThoNn2SvDFTg",
  "key31": "66TVj8P3CN1PELbn8hhvKzZLyXWi92Ji1k8QAVa6sFcRvmRPmHp2KmaCaacMivYMd6ymqTgv3hhmCCjWm9zL9umY",
  "key32": "gJC7H82AtY638cpyFzWbyWS2u6ZJ1MCweokzq26pSYj4GaPbAFM3uC6ge9qc6To5sWthjxHHZyNKfutyxPhfEAh",
  "key33": "3sVCxwddaLZ4Q9GaRKJDTKV9GaJt6p3uQdXzfTdyf8ZraSnVCYiQZqR5P4iFCcxWdSwJVEU3PCTib7YhMxUEHH7X",
  "key34": "4zasjooMcScs5mmvtDYAXJfp2K9FbfedQZi8GEZEJ2nE9eNFQmoGg2tV1eBUZ8CTxnfc9sp3D8Jn5hwFMSSuH2Dg",
  "key35": "3msDGUeHCpksHu84jvQVU98yFoMPraJRLi9Gc7cdJub8dJhp2bw7bi2MFrVpFuy8QXJD5BvDrKkKpu2e4xtfgzYr",
  "key36": "5BFbU2GaLUBMQJRWu9LPA2pvwH6symRNytNNnmNH4kDRjdxmEHXvTmH1jUU9BJ8T621UaZgbatiTpp598UinMLFq",
  "key37": "35X6UoMRuXwFBsvmcFCRhWirpzsn2KmAQdqmSawkxWWPQSNKkdDXH51qnSkRwrY38UKXGAYWCM3fmUyPjDmfTAb7",
  "key38": "4A8rDAeE7Z3HVSdnvUtsFgSUwLgU2nkqQWBy4vP4NVkSWdPwYCoC5UX8zJrPuSXavGytxerXgxXqAQsRfPkwM2Wc"
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
