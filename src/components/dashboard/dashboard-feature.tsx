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
    "5h21fqaV9GhT5biqXsP66a4wqtMB7ChrTFRD9aP3uMFSXDqSrJp51GHX4eDzkgzmTpiqj2vJdgeRp6oo3CU4WLC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCC3xMCecM5QLLg4PswnNB1hSaFa8W2xhamYHsDBfmhnc3WNpjjvzmWnMDiH37VquGnF7E4o6PvNsJFm4skeiY9",
  "key1": "3yBCEXRG4GUv7qB8xvL3VTEfDeXWWzNNbCMRyvaJT4XLqB57bREzoMh38oknksnbisVF2SEhtah1BGFg4y4rkbgF",
  "key2": "3veAFkZYL5enKYKLuZnE8AkhCMf42ZSz87xJvvmHDz48MUTRwngrijqx9iPbF9PDWm6KtoYm5Kwif2r3s4Qfjfoq",
  "key3": "2nSBv9J8YWNYEgZoYwzv9LGnRs7zFaxUxzXnuZxYmogg4uX7YAFuWWfRx8gU319UG5udF3Da7tJfuRCqA7F25Xag",
  "key4": "VizGFpsbjpx5mCivrrRSTpaLxfT34LSmvU1o6vmFnvHFE2diNP3peSWFuiSoZXs8hEQxPFeMvW6aKazJ42h5DgJ",
  "key5": "2MXmEstF4yc9aQVbUbu7JXB7HJLJq9wtPk4qdGZJ9vTic5gJ92YQW71t29M1StX8VwpzHpw47d8ctKZbQx1a4UHq",
  "key6": "2py8YskvvDuF4kEAvNtJswUx5vxzEaVjzkt23S445Cob8xeEjKqdspfRJUNw3WfQXWZmqk88hNrxUWAtAdQ29918",
  "key7": "22svmjWoxCteRMKdFd2mJMqwScjuqpRcR3aYzcXJmKishpRK8phFTrZAKpZ6GKW4Hpm1kaz6KK22TdTbKCMNRMmE",
  "key8": "2qhG6aYbY7czoVwz3mqaZeScBjKywfRst4bSVrgBb3R8tx84Zaca74b6TbU5uTC4X8FNeKf93Lg98Vi79Ad4Y7UU",
  "key9": "WoMvkEYcaB5FUKvxSSudUTadpKp99NKTv4B7MU83xqUopf6a35SwQsa7uH6NUdbDA71MPSmW7hvASbCtbvPUWcr",
  "key10": "5b779uCFVpT9GLf9zhnCGx9sbvnp8KrXe7dGCWoFiWsmunuM51ZPa1QnB32jwdbnME3i3jChDsAcM1xeFXazTTfd",
  "key11": "2NcXRKxA1pNAzHoET6WtsayXvPtwPntS35nWTYFnhRidjBSiZDkhxUys9BRoS8Et1Dx3JEeCjrGCTKZjetcErbBF",
  "key12": "4MNhAFsEMXDYeuUbKseJe51HNm8e5DEhgiDoouqAEWm1CuMj17EjoL5AWQzjnoU66Mgm7in94vY9i81gUCKVctVn",
  "key13": "WGThGehaE9eZw5v7FY5sUegbD2vTp1fittnXQFJaZnDi2iZ43HasWKxfe72kGkLbR6N7qFpANYc7DrNSt6qFfcY",
  "key14": "3sB2K3hARQggM6DVz2SVDP7DH4T5AMscM3pkPmXARbfwtxSavSnEyWV7j6WaFyYWKcqnVLGPQJ3Y6qDTuZ75Kvwx",
  "key15": "3QB4hzRNrVhKGPFcE14r5GeXhyTBY62s2ejNpPNqJi59VqdbZiNZFDqeRxXT9MNz5uArhvx27pnkWPJVVFxvMFXa",
  "key16": "3Q4zq6pu4W66ka186yYnuyD3YNC7rmPVTNwybke5RKzDEA7Hs7ebyi9fKfFdY4ecvvmJY934UrJnxTwGUaMTeZiT",
  "key17": "NXu94Gycg5FdtJfQvwDa6h7ZMkDubgCRJMhVVKEacWqrYNUHQi3XYWV5DdwzePWvsaegbWRwRfhdsP5bmwVYKVs",
  "key18": "5rtbe4koy6StZDzaKPK3YQaaDu6XGi5MZWtVARBn9UpmL37n1Z7sD2EeNPcR9KkMAU9q37EGuMMyaBFioo64m5e8",
  "key19": "53zdSjqFsHPrWkuXJgeCHKX7LC4k3cZZMwDNJnQqVPvPcQxUu36Rh8zkrxxf3bFzkkBwvPayDkvTVE8PQxEwhd2v",
  "key20": "2yiir3o9qZW29rmjB8Dfxfgxx9uCVwmpDwqDTDyxkTabsf1nR6oBWmZb42iEFXcUpS5DhM681MWhge3t8FC5sAAs",
  "key21": "4zLbpfFuBA89H2LiiBVgMxBBeU4373i5XzCHxLjParaNhwSFsbEUb6PEwLC3ZVi2KThWa45kMrNrQK1W6c3GXzKd",
  "key22": "3so3MwCksKEHXCpi2E6nUyrq8t5rdBZ5kNZkPSw1Cehg1AEZ7RsTAreB6QNto7rsvRinHJgwKDSKr6MbKA2ZNUki",
  "key23": "Nh99DXkHKpiKMPN7KMN3gAb3RZ2JcBnce5dxwD4RGeSB18hv7gg59iZSpEsnHAncZLcVxhtwtsLX86BvLtBExbb",
  "key24": "3cWdw7kpEN3eTgi5eWF9xPFfsWGvgjavQzU56fMccdakXxQ3ktkVKZwZ3R16WK2bKCFMAx3kiiefRWZUGckMcUxK",
  "key25": "4u3QahMRcbxQdLydVHqAP8Vyx2sbmoUv3LnwbXQrXRVENqNdM84KQabCmR4LUBHw6yhLbyodSK5vnJhb5AzDEomR",
  "key26": "3eg3TL2eW6BbomeYNcvpx5kUDZy6m8usFjcTQdXsgMbJSqWgdkC8SLnjaK6ZNmHJ8FpwNrzAtquEM7RKx8ad8TJc",
  "key27": "P4n9SzY3JuKoaKUEfAc4SwpEtaMUMx2bXrdacSpj88NCRQq2iuQDJR7YM8fEYqngYGmNVnQQKoC4uveuTFZbSyN",
  "key28": "j35nZiYX9nPebXfBHpjUfUrW6AwNEpjaazPrGHQDHthF7UFcTiUYLR1UKiv8QhxW3BiWdaeqbt1XEu9S3QoGk9h",
  "key29": "4qDbC1pPLVFB8giR9WpZBt1ohLAXTaZhKfzwJc3FkoYB2YWGuauQq34LM38SgreHFhAxudptcHi43c7SHbxoksZa",
  "key30": "5gsFTrS9baFMtie5r3mnSrEvnKiXqxZmrZpCp1jh1eANqbnEk1BxHsok1uoj5BPdLrmiyrg39wucZWEx3xER5qoT",
  "key31": "2wxyAEY3reWfV1ta3QYVakknBUDer91ztnoDzYcdwXb4Xx3UU2ddQrzN3qwdSTe2oMkXm42Gv9UUHuxTZNQG7CoS",
  "key32": "2iogC17YVgZJqYawE2WCPHEUgCPofzYcAipuTsVu4UtvAEcA1S19uDXwS5q6GbFi1QrJ7gC7wM2UEwiYDw5MFkJ6",
  "key33": "5iWnFcNXY8mXuFHk8NPPsz3HRuHJ9XttShqHkyS6JJ4yaLuaumcVoHLMxXb9UboRDEAgAgRiMwZeaUgwyVirPKrM",
  "key34": "qUuujsWU1b34AT2KvF8NGTFqUCTR6Y2HVfDaRS4zwwnJAVgxccmwPpkLmBzxmMq2yebNAm9TpwTDghpiRk6Eyrz",
  "key35": "5n8uJMSyB5PLSiqwDiHB5qxgSh7GNC2Gus8yADdcS2Bp2dVJEoQbcodcM3f6hnGqXEp8FLBjooPeaxuHpwijPuRK",
  "key36": "26y1zQ2rvBG7aTnaMutgGZod7yPaxfiXxF8qrNxvctSukKskUbW8bQbG22BMPRJoN2t886R3ZQ6gGpjmibxTCnCi",
  "key37": "5eZ5NFTbkzCKwH5HGmgDoe9dJzUXr4hnMiH3ujDSv8YLjNVC9DMZ7SR3QGGqku5YxqhEui62TKASBANJabrraYbL",
  "key38": "2dFjaEsZwiL8ucnEen2kLXWoh45qSngPx7kheNNeSy3TCEdLD3ZbpB8CMwjFArZrPVZNqSgnNSaFwMRgNKG7mHDG",
  "key39": "58ywv4cC4PMs97LAyNAu8Da9cs4njp2ZWc199MKdweVZ4x61iMz6GZiBSCG7mKKbJbBs3weGd2MukSDqDeQFyUHS",
  "key40": "4rw1oxWh1KUtM9JE6tF9RUw7fi23hBJXQnop7EoeVbFcYj1KuCzR1VjPKtjZzLSxwj7GEt3JYdSpxPZPXkwooeVR",
  "key41": "5DyQWmbEZwAhDXybtKPfLTtXrYcpFTtzD2chCyreEwrzfG5tVsmyJsLBVFmscMPgfWsyUDkuuxcR3t48k8Hbt8C3",
  "key42": "3EQyR8LBm9gfrPny86wgUH22QQmnYYYTDz9SxbJB5W55jXNPqSHFc2fytDNXxa735i5949QkF6wCyAWgHQbiy8PP",
  "key43": "413rfeEWyHCdnwehvuvnSVap7cM89Ve1A4t9g6quqAoc28npQgsjhd91omLnLM6VNYxx9xAQiGZ12ShfyEsnoaey",
  "key44": "5un3MPof2uwKKD6Es9QXDBd5do2wKEYgCwFnmcKxsgx7q4qgwt42LGdahUPbt8z23tqigF7pXLJu7GdkAhDQcDNx",
  "key45": "2HPBK4qZNPzZTP3TLbq9yzVWcu54KW7DTkz19CWoAV9LFKJ7tCQrfYEYxdUD5UiTthweTAKoQZmEe7o7wVXpjkhz",
  "key46": "2VDyzHowhnXDppquzGHYqwqpkbDZWFZEk9m9tu9Tvh34eDAeq8eu6BhGJWkvYS1wxfY7QvzGbechNikGKzygV3NC"
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
