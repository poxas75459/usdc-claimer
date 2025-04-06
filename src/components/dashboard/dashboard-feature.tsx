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
    "4rMijmTBhjENd5LkY92Rb8PAZq5CnwaKmeLpdk3reVFr8jpBm9GR9kAicKjFRKseW14f8tTRGVw23whaKY7PXmtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prXFXWSZozipw8jymP9regcLGcH7BB21uh6HWe47AhwYL4FA1PBPwTBJdHcDffC5v4ZfSK2dsvRcWq5FoMQXAHq",
  "key1": "4SRxmYBPn6UCZsFYrNx4M7Q8rJQwcNooLZW9Bf7y7gLreDRwhXfoGKPQyxRKtg6JGSjigDzsEUA9wrcq9j74byhL",
  "key2": "3Ntdif8Mp99XKnrHgXfyLJZrRBdWLEtHhdQBLXvgPyqgYAc7G8X1Z3jmpySpW2GwGiR45NYYsRxEc9y4yKG8jCrb",
  "key3": "AZy36zyLtvTcDCPbzvuKC7AMXj923LV48WWtQymfEeXhtRixVxxHKSEyKsybCEucD3TNfHNsXangZSXmLT7Awu5",
  "key4": "2zFiMhjx7csiFZW7GMDXzLiUDiYSBJ2jsQ45E9oQKyx3EAQfiF38TQpmnAgsZ7hZE7ccHBekvD8eLWqiDo8JxBhp",
  "key5": "EWSXMSb47qFH4t7zx6rMFrKwuHY8n7VZFfemw9ZqxTF818G1YX3L1Bwzci6Y4QcQ4stNFUex7f7Qit8u1L3iSWd",
  "key6": "rVTpDtoAtvwSBWPwdxKRfdiiw79pFjwSkP4J9uSgMh2V94uXwNLAxQmVMW8TozSHTCL5qfyTHUr3KsXLftDpQTJ",
  "key7": "22a9wGKiCvSqwTpq5LvRXDLg8p5bGU5mz5GRKYmAQ3gnsjsVHVJmPHeRJXUEKMsmnq7mWdHkbtMG8n6GsnrQT4LG",
  "key8": "3b7LANWfYTa2kJ1kBBUKV1GttEqLMfQgKyA6FupNgnJaH3aRhmgFdC56ce4doqX9vWRvUiMSSWMdbEA1seQJeXmp",
  "key9": "61zFMfsnskvVcHFDjT9GaP5ihtxwJ3D6hvjSwTrzAF89Acyq9RbyuT46VFLKPESfWrPQipXZYm3dpRAE6Ffd19UP",
  "key10": "4ecwpakSZ12wtNz2rRpo9RLaVGaQDbGpeB29Hvu9RNpmgncibKX2c42J6nvrXemRJXudvGMSsxRpvVDBCnrEjKon",
  "key11": "2KL5ZK2DhYLHczg1uzZMte9yMuHjd7Hy1nAEccN9BmWzzMLw3VHqgkw2ZBQ4Eov23t7e787Y17ucW5e42YHaqDix",
  "key12": "3AAC4LVc94Bo7u4enQDBRB2TzWnsKE7sTHp3yQMFBPsVfnq1BxNbWW4w6CZd139Ur33vPkmE2Sqhi4Jt6cu7XaMy",
  "key13": "2eqDwbKEKJrjzJH7SbZjPZvL8HE8BjoZLFZov92SAnULvWEe97aZd7MVbGhwpZY6BD5Z2uZu2n1ha4KwHb6uL3Lw",
  "key14": "5Vh8Sbf1DXpof8PX2BwjsbeDbwhiFL3rYA2vt3aFT7XnWfn4Qn43273gNvxvsSHecBxyuEhpa3MLQVSYgiXSBRup",
  "key15": "4dNGxx7NA4MG7GguYv51TKsiVFF25VnbzLmvcFndjgrAZJhUn1rvyBuLZw5qqdfqNoenF5f3oZAPGk6kXVv3L1rf",
  "key16": "4Dxj6SgzPqb2tBKv7xNcpJ6Fy3taDnjkK3449g8WoeMdmv5DvFsMbyihAojefZrNKLPvnEp77cuYHbpZHm2Jr34X",
  "key17": "2rybNnhkfoSUEq6PPcxnNk5DR3x6tYHqNwspArkfqnN4Sx6wgPWA1NaBvN5H2dJj91CBqCEXYCnDUnvYBbttQvg",
  "key18": "2ni2KhP21Uz8orhakz9z1dy3g68MvQtzrggLH4deBj5ReHAhzuP8m9gRNBtL2K6UqzZ6nNKRnxVgs8T99VCQG8n8",
  "key19": "3W4D9F7np4cBQCh6RjyXiuV6mXbyDYq3YeCjFJnUKfbydfdQmzxUZUPHPCH3c1haXKwxhL4EufZvserrEa5q3EVR",
  "key20": "4as48trPDdsiCHg4n9Rt7SfFWk9egjuAbwtadQtKDptKwpwmjqkZZUpBCnRXs1t5mtSxFYE2kpdXsBuL1Z6NLjXN",
  "key21": "JdycPVRLQurJoxVhvf6goxUw5mHWimiUgEGcA85JkpaX7qT37Tg9LzepkGQ3e4PkairETGiuuBridgsDXEPRjiL",
  "key22": "3aunsjRz32pvuLW499oQxxD7hRHs8Cn2HQBTZAZAydmEXy7ysMgry3h8Azzbh3g13WUrpaGPNMCYZ3kn5Mef2Ws7",
  "key23": "2J35MGcWGTRgNaCDLw7FgwCVzLdsMHa8osuKUTYWsyTruEZxJ1taJU69brHek9Be4JRrNE94QsGfYAewSVkBcMge",
  "key24": "5bWvDCXFYvpAaNxnLWGhGquNAXDMeyZhArfX5qgqGtzrM9sCfgF7AkePPsMiFzc3HKp61ZfpffhKXZnY7oMt9hYQ",
  "key25": "hQGM9tLZgNrSaqjNxXc7vsZqMtq2qnLcFxtPgQXh7HFQTR3QKpYJHMuasFzdzPAv1mytRtj7vS4jciWp56kiTUV",
  "key26": "mwbmm5nTmjQEnN37Wk3iSR3g6CoDEZDSUFR6axH31uEMfaj1uErYw9vyYw9kT3BnwMutxTtkCSvg3ABX6rh74AK",
  "key27": "2xQPVNKJvU9dgiPqcdVLJain9M9Q9uakbJ4ZMXawNfDaLjHBSChHoL9GgL1ZndDikzU2KEHcNFzf6q7uETApgYpM",
  "key28": "3iwbEwoAteqg1yZjr6PJ7dQrxcBw7iLkREw7cnKKu6b2ZphzJtQKTnhFqYDbpyN1H3UurBPrDyxp3gJQ5ubDD7yZ",
  "key29": "pHT6gbQgv3UogNNYAVbtYu5E9hn5VxsPV37QayHtSGHa9isMrFV3qijep25z7wwftpGpvVQw93aYNpZAsVPQ2s9",
  "key30": "2HH74WFtcy1haV4UNabrEXnwHonNbBgyFWtzTCAMkQ8srDNBKnG39SD5dtD91DyK7MPqd7Wq2Y91KxGtKpS8pNss"
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
