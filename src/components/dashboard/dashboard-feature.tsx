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
    "58P5YzAntAeyrhUfaEDh63Y29UxQkskrsRqcdzktRCEdHpxURYLCvvfGmhL4apRS4LuQ2FhtgUTPp2ZN1S7jn4VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzxHoSb2X6eETANUcdMrum6upYybtUGib1xcop9kGVtEYF254RNuwCXn9S94nX6xCW8RgJSgcJNyZZik2EqFw2s",
  "key1": "Ve6478o3P86G79cAv4VaEMQdMfesDrgf2ZxTUvEokvLeJCDrZNPgvZLpapThDHDxHQepuMBEYpVNTw2XCU5zCh2",
  "key2": "2hXkqZMHitEj597HW9xP9cUfGJjmqyvZDwddmKHu6a4Kx84eiS2kEjMgqenn5aMvzHEWgsh5Qz6R5bSBd9UaXs7N",
  "key3": "261CbrYM28KjMDfJPs1f7Juy8yvYC2G9esJYHPSEkEdoNbRmiVVwbaCRREKaokQmufnufDhcH2SMZZ9i8ZXEuQ2h",
  "key4": "qZ49AhvLF1RvCAQBKNh3dfJyehexHn83Vgs944Q2mATSzFg2RHbTtHJamWaRGuVk6LHhJWDWKuw8ZwrfvtzzsEP",
  "key5": "4FYwjtnejxiSVhwBj1YJqQ7dDWbkg5UqiagR9FJHmo43CpdU2HQVkPig215G9T6t6SYbtGhMJpjtyHNYXHfSaeoY",
  "key6": "5zDnZgduKdv71dt3auRQ4YWy5DNttTJhMH94bSLfZt3ppamngEq548DYnP9h8s52uhDAcf1krQd8TwSQ775sRQVm",
  "key7": "36DndE3M1wHAyMNw4CJV2b4nhT3712TQUSsKB8PAxXxYWcTWsurScxFgBNCFfRYgFZUrT5YRiLsiL4WYNhkXobFk",
  "key8": "3DB8mN7Udd3145jqNjhVkyMQ7PLSCDDViuueVpMrGxoSd9pcCNF2kSp4B7MsaVQoLmn9ReiAxQTM6t17XTzBw6Yu",
  "key9": "4W5RiPQC7c8Ja2kL2S8yFG7JVtMBL7DVwAkgQvskXARAEjS5BF6gg3CipfLhMgZhPtkCA7mEb8Vgo5cQxrGVrqGA",
  "key10": "MSafeqU71R328JbGiiuT3yCzFbrG5NtNFjQp8PrMiBBEXHAe62612oU26Q1putyceVPJShCDxDVNs5W8SW5vdQH",
  "key11": "41qWevMYBVSwbj8DenvMfC8atZtSmpwxDsc6xt49uao4yC4ZRfKJzmCnDB69qjGk2P28bo3VhxMF6TkgwBEY2vWb",
  "key12": "2PJD4Myw3Hd8rWaZbjdXDXyCbGR8rrGJsAkVme1tY9qGUErmZwAnLDha7ovKGKrWrTB8phqRq1oXf67fWDDToksS",
  "key13": "UafC8uH7BbQYm4Vc59XDE6aquevskbbHXxoyUfrNfCNt43HxRvnHUxQxnwJnVyFKZhWkHt9Q3VRk8VJUKemVoEB",
  "key14": "5husAtpMkEFFJGmtbsNqBx8Q7gkJEf9UtxneWsi7GtxSeCLKt63HFyL8hFaBHmi5jUhft7TjZrZ5oGPFcELMst6q",
  "key15": "4c2WTL9GDSJzWiVsxKrtLhD34k7iXkWQ5RdNwDXL5gigZns4skgiqhkuehA6RkFChmrcfoiAk9bCL8KYMK2DKuK3",
  "key16": "5uEz3hsCjA3QDeZ73cAkEHBdxAgkc3EkpgdzKdEhe2n6XX9azkyBsMmXeGW5f2asbeKc8UeBP4QUa4p1pXd3D6jm",
  "key17": "2YJsZe4EUbwRnpmNY568F4RDLvrh7EKsNJky6DsNybS6Ywu4DggC14w2mDsRgmBkH7pXovweqj5ek4AkLyRqrrtL",
  "key18": "VtCThvRctaNdJ3jfNrcLboMZ3CK74gZHZzEnF4FRQcTn6Foogxw8Rz1cbpPjUhTr4xXWFDnL5khVFk9TQmn3RLB",
  "key19": "31QZSNrmJdwMa5sPTYE8Lva1u9w99hQdUU9MxiPiRzjCQzos2WUCAaTjMXv8mBpyFWyQopSExq9ps5GP6seXYvxg",
  "key20": "2vCj4kKkRikPVzQbLZtdux4MZeaYAFZu4E6RcJnqbDVR8xCDGHhzQZQU41KbtvnREefx3TM38m8XB2wU7sGb7aP6",
  "key21": "44nhGVJG9CJAwA3q3z9gH2cUydfVGKzkeWcnGmtT1r382k6Qsk2voSTbj29gt6bq4HEiubCSKdKumqXE3B3qTX9V",
  "key22": "5qH1V2GaHYpRWxWxd9qsfj4F7t1c9F9xemtjFrCM1ejKVS18oq4t8rV1QNCaPSKhbFUuoi6zEs2SqXzoHfRQ3DjF",
  "key23": "3p457jhg4Ha7C9UpYqbRCTSfGnZ7KaC6dNeYjF5ZF7AqReEfapxUTzPVX7aeksiuh9LVVZvhnKmT78urjPwaV2He",
  "key24": "4XPozz8gY2vqBttAqSh6TgwxFevcdpgr5p3Sj1DDxixjPHUJMfwDq3mDW9GmoyyruHN4dWCx2uqxMYZvZfr23xXz",
  "key25": "3V6Jw7yf8pU4ykAt3QTnryCL9A2tWSkAuYb1AbuUWzY6MoEeVozP8WShfi3pguWKfz92DqUSE5AH1KrVHizeSoDi",
  "key26": "3KE4LbyHg463JbQdWe5VsRmUqik6s35grmbCF55vmt62n7pyEbudWGMp3JFnLdCkMqWHHNp85HMNPSrYy7wvyK66",
  "key27": "5eo4vibsgQZP1K1FAhCTx3SuLqjfWkezD4VjVMQ2dvzFCNWdz8uyaHts4vYEb6amCLaAkneoFaScreuG5yQB8xgC",
  "key28": "5Yk7diMZVJpmKNCqc9a45j4CHvmVgBuhCBboMZFEqhHfqzBq9eFwc7129yT8zTNcTAEKqGWKw94nEsMSa2tmYUza",
  "key29": "3eKmLMYhAVp76cLigXkJMDJRM99rfouA5nsPEXc4wupq1Kqo8Bu2zhxCZg87BoyCtoAEuyoGWCpH9yNeYtxRoGJN",
  "key30": "3E2wKXfLShCKMDp7cWGGibqjr9PSxKMQQM1nKdjjjsQL5tyiyMZ5Dx3Mf2MHSfCAz1srMmPJJx83JkUc3PhWWUCS",
  "key31": "3aEXCgEtHUhb5pBDPsQm8f3uCYaT98FcmqVgyfJj1iHnJrE9dRyLdJtXBB3TuRps2R8UhNKsXr8n4K3iLGNjceE3",
  "key32": "5PxXAEg6iNcj1g4TUSXqsvCdWx8FioMh8hQ2pD64cVnxk6E6QYiGERKZ3jFMuuCy5QwskedypMMvcWJZezjeWmkQ",
  "key33": "3ENxbWDrHs5FhBEkFJSdMbLyn65D2bS9WHfwpSRiAHiwHu2FVKnfZKdNzg4rUsBXowJ7DJJseUvyszjcnWK9FGiY",
  "key34": "ovWYiYg16Vnx54hULm8iFxJvNwuUhTu1Su4AFUvzLVUAegbg1EBtBMsNFFCZHtxMgMJUpcSggjqGP6zL8pK73ka",
  "key35": "2G3w46sMi6VReK7P6y7Aem94gfr3NZWTpUZNvhcukX8oZg7zSAndADhc2KedMbvyNhmGEefKbhRYYx9qGqGtHWuu",
  "key36": "3dng5ubXEhm6SH1cgygbEkJkVSWnnuQrntqAYTPbykWQbvrEc1y6EeU9KmZqZeARQiLG9FjbzGsMNLNUrPrMvPCa",
  "key37": "5qqKRC1GGqMfWQzwu4VpnFjG1ofrkJeAza5gA9SAVLquMNqDZRaGyax6EFYhub8NBAMxCj9oWKBbqP6TaGowZmmf",
  "key38": "4diFNfWAoXCWCyhvcsiQDcWyecyvT73gprnkaYoSbWYQfKhdM7Tu3iiqQWc3GBB8LftmSEtgKtE7Bkkr5PE51xsi",
  "key39": "2hG68ATG7MdQNcxVTQj18UHayuqGskGjspUvNTxnrMa4j9CQvuLtpB7SQeiQbPUBFdwRNDsK5jGbnvzCWBFYB5np",
  "key40": "2ny13yCX8Mv9z2ijdkG1UDGfvrbaTe3FhovYYJzM6sY8FhmA5pQtaJ1iQvYSWTPTXNNL8vLZ4FNp4ZbWDkPN7VLm",
  "key41": "4EB23E8y2AjpfBKyADvb7JX7kAHny2dV3ygrq59D4UNpHYqojzo65QpyAJ6ew9Buwy8WuJix8adG27Xd2pLkW6TU"
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
