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
    "S36Y7FcJzvzvMDMD6UAQZBagqvRNXrmCupkY6w5ZYKjwfvs4ANCBAMNfQCDvPHHKo3zcZwU7BWJWMeYW4xELaZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRveDMesqMk9hrv3AADSSkokpyJRDtvJhxtbJGVpNuyWY7KQCMUBgHWwFPCD2J9GE9vwkCcKNK9ziPi8e9QQ76b",
  "key1": "54pjAD9mQUjcfLhk1VAf5fBTaFjQBnQ63pmPRw4YrQnK1V13XevdsP5GkYYXb1cevRx22iMJgANZjn4RNGvAuUxW",
  "key2": "2tHBkJRz77rxU9s5r5HkgxH1iWeGroWnmttNCsZQN38n6vPm62tiuFYcHipGcNTg7ZjCTr5V67B1tbLXX6zUzEQv",
  "key3": "5XVjSgXMcokscWmhq3og19r3ZyoZS1b19T2Gi8fupP4gAhh2pz5tULPMSMXkiZmaBUikppbpwzhvQqz5Pvv5eBQW",
  "key4": "3ZkNa3v9i8LjwUxyLPuzJFeD4o7Q3fc3gp7Znc4tGzPFdy4NuwUfEUpemBAC4iKqzHLR7zoNnwaDhHHrbkac7rLX",
  "key5": "5qSbpVEXPRegKAzd5dAdKJSpGtTBY7pBj9im6wLqa3UDR6S5PQDiU6RrZsLvmVk5SnyCcU8RTCwHtSZPZnGXhSjL",
  "key6": "4g1srsZZfneGrr975WKu77ErSskN2EfQdahQTYrUmj8uAPaHCsxi7uueSokuS88QLQq1MM2AhqgsXMkvLC6ZwnSh",
  "key7": "4aDg3LbkK7GkwuarG9sN5NpyTfNLgGbyQx8SzrF5RUcnUU2vBBEZ32bmDSSdy5CyFLsWemhMo8SuhXLZ6W4SJUhm",
  "key8": "3wsWUkJce8iUBceHGf3Bub4orpX7bM6Ftv2YRFcB3y2M2zAKq4yKRuvewz8FfM9BayvJ6bGF8C9eoAGeJ2mNSRon",
  "key9": "4SYNLVtkqW9oxiqX3z9DNZLH2aTHUuLukukTN8GvGua9TrCqnzXPeMVU2FYw7XwMKYafBrtUJAjgSdimPNppT6H3",
  "key10": "2p3QBtWsEDpkQV9TxLNkm3rk7EoiEPNiQCc4zX9xPJVwQNn42ya8YVQ811GQLQxEek8oDP1PLDV529Eqgq8avQP9",
  "key11": "U5G7nGY5eRf8u7K57wmCuC5Lezxd1oBNTsxDLtqH4Tx4vkPkeLfGgLbJ3js7KTPAcC2RdZazJoJn5PXEpuX1s3U",
  "key12": "41Cr7zipcE9rycFLL2H3KsMW88pdPGc6FmPgz1nxbNh6p8YLoU87JS1kYWVXP4CivdtmXuQKRJbHm582S7LGMyUV",
  "key13": "375V9GvySJ8TWzpnDfpvHRztvG398RWFrsSDUwbNoxVFuqhjxWzuXfZLaUVTcgLUsnL8wRifZwGkLMZBmG41qbpN",
  "key14": "5Z3TJ7A1JpRBhX5dFmjTeVR7gmX2TaoMC7r9ankZeDmZ32GsQvY9GjCGCJ7nbdrVneLgQKpGvHz1QjraGjqKm1JD",
  "key15": "4rfHKVy3CsJukLC3NNwaYPFR4LeUvF1fQqozoE3aHY6KfRo2c3PZJdkbQPm6i3LDQpTKLDhK4o49tgkRdLL4rwbb",
  "key16": "24QnB96FLDWMzk1zcDavpPcTHkFEWbC5bNpWEFaE91MB2LCqvzv8saeNGwoyWfPiNuVR4AV74FFHjrmALBXLTVKz",
  "key17": "WU6G9muirk83fsaanCfJU7aBoWzMY1wUnxVvboFHJ3Du1SL5u65ovBdnNB3chvhtUMRKUF54JhGER82AzzU5dEZ",
  "key18": "mGfnMPeZBQa2v2JP83ewA6cs4HzsjmTfboHvs9d3D6JuLgZuj4gonqaTGwMdT2EC4HKJYQZZiu3YVd68eAGrJxD",
  "key19": "4Ypq7hy4avpzty7tRoP6a5YDLkmo932oHUzvmeTYJ1rEYsVMWMpoj2Sbqx8ESFNGMEoPkNTMv4e2XvbSQShLdrWR",
  "key20": "UAxbLaFrv793Go8x6bjURBpYtFSaEeq1ySP34Wy7opzB74MxmLz6xcwCuEpLWVMZDp3xJwRYqwmH6FUPWQXe696",
  "key21": "33FdREbtn6vYLhNA4wp5NNXQNqkoUh5nSqVFWZNsSaPR9L6mAYu7rkcBAwYYi3FEu2H4m3B8anmryyygcjpzYAA9",
  "key22": "2TgiZLm59mf8sddWQ63XTHJ6SwZ9jRLKgjvJUMoXv4aKrLG9GaJDdDVhHGgTkLSH1f259sByyr59jGEqcoNKnT5Z",
  "key23": "4r7DMCDH3D5bpACJSWr9JY8VN3hAWXPv4Gqx7xBrrnGGMuSX6CFgeYKSeXY8VmyvB6AkQ7FSdrENmG46Y1mSpaym",
  "key24": "2fgsS56XPheiZKHCdUwBuc9Pe7LCdR9HpvkXkEnWShze128ehScCEdxqoFpc9bdKwon9Dy7q4BjJC17frocdhuFT",
  "key25": "3ASbLVToteAtBcH1DyZoKUJSMC92E6KFEU2y23AhXntB2bUvjDU8XZ9viSbkbmvwBwxhJmKHC1gzcLcJcUobVsRP",
  "key26": "5dDU29Nk5DxrH6qjxEn7Jpr2m8QooRSmCmvWQnNyVzG8uwV6D8z3cZjwaoRLUFiighWxJt91ASk8EDTMS63QyvVR",
  "key27": "2hPoeohw8UCKGf3LMfLqs94UswV2E1H2npRyeHDxKUGSJdDJf4AvFBreGn6XDCYDEbd3QViD47UJ7soqiLL49xYs",
  "key28": "3QRyqhM1i1P6YkFPxFtgJZrDvQ4FaNireY8695LNhPE8ZLCinZtT3xavmLg1XDVgo5qoSzbArrpEtkD7igTpgLDB",
  "key29": "2BG1sbPDwxas9xojERUxB3PtGNaF52mci5o3YndWKS3mLKPpVJjnTRpuLMSrGsUeeENMPf5ZGTG59GJ1HeLbb9j4"
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
