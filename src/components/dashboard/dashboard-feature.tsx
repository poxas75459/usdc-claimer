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
    "2KpcG4BABHsg6iZrcsocB3AHGLt9i8NyZDuoAYduqzRiHjDLVSkrbQBe5tEHrvHXzMYpqpLPtnVXnCYXZcJz5Dmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmT9JSLP733samHAuQtH36KMTLyzmjbRyzVn5f8dA5h7sLCnNyiHg9SSa9SCuvm8qkTCVzhBBKwyP61XpYrWuS9",
  "key1": "3aZnsukgtVqb1WBkDmST9KEtXZa4zhZMnst4v8YSs681V1VMrjKyS93zSJ4h99WseCT6s6qJnQNroNHjpLsPupeV",
  "key2": "49RW9WaWRkDG1hTR9tksCXKtteS3Lmr8pVXYBwyEK3yaFQUDSzxZ9WRLV92Q9HxqeYBzKhNnwU1iDBJ4r2oWiuqq",
  "key3": "461BRS2E5vd2hBgcnwntzhNdkzE7tJHsxnjWZeB7CzE3dokGfc8454Z4paEarn3XhbsdQELC4PD2SUEYuHxh2KAj",
  "key4": "3SUSd1YNsj6pXWdcj9NKXB9jEMC21zSWy78PGCtEtyGS9EHg77t1xTJmmZVZhwqn5gwvMxS1PviuLe3mU6AM213q",
  "key5": "2R8yVMemtKfyeacqguge8W7GZoj9GdYr2K9QZdxvQcCEivMzaiiL2AwW6ZxwwTXvAiFVjX2LA2gJxGzjE3fcapuD",
  "key6": "5JqFvG5Q4GoieoeFjRyzhfZScDzYf9w2tV9SERq4sMHQrNWarAud6P5RYu9YppuTLts2TjGV124w2MJQJtVNbtDZ",
  "key7": "3Tdni9zQessKGzz291oDLSUJYpX44F7T1zLCwUuqUys9MXKjJvLTT41yKBUHv7u4EdiDw7p4PtpXEGy4zWtzAYi8",
  "key8": "2bw5EdMNDeN9GxaZJRrpAvh2rhENkezfDbHdsX3QhmQkwvwcgGaqaCyxbgmV94D8zXzuD8LowJTRFFyzVdc9bWcK",
  "key9": "2kC7661cfZsa75FKxLTtayZMfYJWbMKVPpEospE3QR1WKEd5cT4FsCxS87NL8JTkmPXhaNrMRWCsEHTaMidJohgX",
  "key10": "e53HK9P87p37RNscoqK6DDCX131SX83BWnH7QdVWXh1y3nVp1aNi1FQgYapJZHyYpAaXD6XJHAKB9oM7b11qMTA",
  "key11": "3SjMA8ZReEdSw4M9oKMigyRQmutX5FfgmMmkSre4ryH4gLz3a6Bvq1xH9RgEpvRXNskueyFcpPT6oXpeUmj62pdz",
  "key12": "4fKjyCGKr2Ljrg9SuByX8gkCzW38WtrtQQ6gXj4T8Y5HSpzS2feoFdXX2jQvfGxhHehcEXVutKj2aE4me59Sword",
  "key13": "2Xj5XJdr8SpDRcHNd2mpbovi15astrtThLRNnpJaGVVMCAxgVgKi9ySBcmQV2vejwBq5v2PpmFZ6fMYLF423Wtc2",
  "key14": "3eo2ge6qeb9S8zZxezUZcDnJZsSS1Lj82tvJ18M7MuhgMi7xGSR8ppaNCYxDHt8vLQuy5YVGqsgohbNRuMsV7u47",
  "key15": "3dKhWaLt1XpiS1NcECvVc77rY69rA6nZcWePPHtMcRpwgwPSuLi7rkbbEzbRG4YLsiD8XBDtN52AsPtuk4UytaRd",
  "key16": "5hRUBbscihHUQVGSMdccBQa16G9ApwKpkaRVxSzEfV9CqpmuNiuzye1Yuenf2qa4Y3rnpw7rGs7fT8229XiVLxjo",
  "key17": "3kmnpyB4KYaZf6h89M6krqYaByuFQQJuW4aW7n2ajCLhK74ttntomskmoEsQTcU2S6EXTidPwsqMPqz1ibdrdQqD",
  "key18": "5CdGk6Xv1TZ4nLsCd2WZvTp3vvGDDFeg4kVdPJVMMqj9Z3QUGuTzbCroxocL7PHcNwBaAYbTmPqynG1R5ZPopwiD",
  "key19": "xZCRzhuMCBJqJWubv4nE4UzU3YA9Lt8uVauXQHMFyWivJff1dRdbzbbeboMN1dUG5FUAGt6GhMui5N7nkELiH9i",
  "key20": "5g8ZxtwhsJU4HRwLYoXrW6Wvh3q2Jyj31Spi8fvAR5L4YLXiU9TjcTdyd8NFZP3uDAJaeJPpQWK3WW3RFR1YfhM3",
  "key21": "QLN7N7MH7na42eysU81XKxJ2q4UuFYn4si2b3ux9DcpQJULCW8dspQBY7sLAKEng8McucmUuY7VHjCn61pmDbe5",
  "key22": "dpXen8TpY5tD4saa22MZekkFv9gth6JyQLRUmvLb8saR2pg49pSbo6vnX3eihzFQj6sqV9MJWKbHd6gtNCwuZnN",
  "key23": "UMyAtDcVJKWiKKQwrWJ6kr6fTx6sMsVPhY3bRN4Wo9ZtcMZd5LTFi46wKtG21w9aZB5yenZXX5RZyZETVT42oaZ",
  "key24": "3wWFF7GhHEaV4EXojR7vg31ThpCJYEuLiLw4CLumy6ZHHRhXeafsMQpyZsv6wU2xYE4ySoMWsymy71PgBkcb7giF",
  "key25": "oavGHPu4ioFPgXC33KpjmcoVPW2AgC1MgtpMRdieYz65x363xEFacbURZT7LshWMgn5sL1w1ko1pZqqVEvZdQjx",
  "key26": "38mAamZ7sFXmFUZ4p4wGFq6bjDoYECNULei1FHtfs9eWBDLwchimnvahdKH1j6mbB1j6LbKnQyrthvPzhRyUEmKV",
  "key27": "2oVmvMSRN7jmuqkSBo7cVF39xXVR1kND84XAJ5SpCRXsjkfTrmDgQMGy8FsuADj6mrtZT4x83Ccm4q5hsB5GufSU",
  "key28": "4ucbknCBunQ2DmepCWmyc1AUtkSgaRWQ39q1cWhNxSPMbGPLnVX7cgQFdejd5nJn9N4dbyNTo9MFsAKWPZ9BANdA",
  "key29": "SQDTAC31GVYbi1uBEwtJ7vrVCFU7tE6PAUaJGpGiZMmRud61eQzQLbf3xfjhL1PoRAVkuajs3eZJ4CjDA3mVuE9",
  "key30": "4F9g1RA4ESQ79gZhMAQ4gZBo7nstCK7XTesd9Azk4f8qeeXrmMgd3bbM2kCDHFePEf9rZNZxSjQoYpiNpPe3uJ6",
  "key31": "3BGzKnsVHZzBhprhgkgpg36oKJBmGG3txcEGZDmiiyS33RByrn96Lu67CTBsUntokEzRn9iRho9A4A1sW9Bpdh71",
  "key32": "3ETWRsMfaXfUfHuR88SLuJuWpwDKVvDZsUNCap8vG6bHkKxUMQtE5DZAs2s7xaNWV3cq5rpPxHZqtJ4cWr8iPrwg",
  "key33": "4QQTAbfJgZyctQStwhFVHf1mG146JuQcbuqzV2s84NVP3dCyEb9HbQSwTKRHJb2K3YGRwyq4yQVUVnYHrTzPzomJ",
  "key34": "Lspj1QVTCS1ASnWFdHfAG3rFET61JRMk4ASatgDksr2wVfPGfGiSN5wFYL5iufmT9zHMNU23eng6KArRuzKPu6A",
  "key35": "EuqyaP116oWpXRen66FVspjtW1uCRtbQbimCHPddsfPANL2STdzWxgWTFreK5KGuvvFc8EoTTSfeX94GT85tXpg",
  "key36": "54wYXTyyatSco6mBfBLgsJdSCb9oAYLFWA9cBpFYv1igDMi59Ss4HFwKJcabekw7KX2U6kkkxxf5WF4uicLHxiuy",
  "key37": "2xPi5wP28QsEpzfXxrSDBRaGN6JKFrWiTVEVimzfUr1QAxcPuGu4L3Nsnt1wiMVtuz7JrdRazmsuzD8siaG6E4D8",
  "key38": "cjAogxTUqf4hCr7i8ZSc9KrvijUxpNvdCNN4MxEX8VeNzZknFFtVq9fqPBdeYQgeib5YnjAKkvHDkWYF9EqpjzP",
  "key39": "3eP8JM79rzXCZtCRpogpUCMEkP4wE9qVGTdqKXA7CF9BVzLje1rgpXcbcUm7TsVn9J22MPeakJA1T6USkXJqmGNW",
  "key40": "wv97VknLJiYG8LvkpLSoirXhvYbKWvTUMeDDWYgjEhuwGc1yPwkBFjeXDYkGdq3GgKQJxRW9Rvaa9eaNLjn2U5W",
  "key41": "4e6vFxbKv29enmLrUwEbj4PPjYCHXCQAbeKntx1PCx2B9TEZsN24JkZJ1KKTkVoFGMrKgNuBheigH7FuEUjfS5at",
  "key42": "2wk3ELbpRgVdM4LJZRofnmnhjcW8LMW4RBmetTf5FXarUn4XSfCJJugUmStNvHTwQhZ9BFSRsP36ix9rKDEKQyGK"
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
