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
    "2shcYkhJmsvKjy1xe8ZFAT2NMnPxTRBESjeaNAa93Ammc1bwbxnbwHQYbbNgfdtjaX2FgxVkgcLM6V6XKpYc41Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrkdFYthgQgERFc1gpyfHvxAR1HAY2GbV95Pp8Do6g3irLDVBB9Q7tMbBW6enu8LaovN4jQRzFazJmYo89Ekyod",
  "key1": "3kLKwqK3W2HKMB9aj8g3eVR2W77wBEexP9m1zY4d7QxGpVDPAw3yRtyV65RKbqWYZcHqxFueDuyUsbD3yVFwRcii",
  "key2": "3DVY9kxPW6z3QezADzpDCo1VpF4DtTtdvM6gM5eUPNFGKP8quZX7TWcM7Rha7DEgprdiEpinF1Qm9vCD4pXA7CrN",
  "key3": "2AqHyGuMv5mHFtPhGG5ZpxruEab3mbSWYyXsFRTYHb17qDc4ttYs4YetoVDDpbBDdtQeZtQChN2RrLhLmSBQrRVd",
  "key4": "5WGU69iCWwFaPEXihCwCw38K5A2EUsoDkPMEVJW9eLBsUriPjqam29iAMfLvJ6PcEuoDD5eUnXxHJoiFvbWnfuYc",
  "key5": "4g8ZE9xLRquuqRkhVBP9Vyjupcpogaab5fbE8DTQ1GXJyfmgXcUbadtepwgsJ44NF7Sy27s7SQGCPr9kBM7jgFzt",
  "key6": "4cDftzYwteRYgt7SGuonWu42G9rVdQYg4L6UUdn4hRqW3voQtB1cW15GTJPJ9wnAUZaw4eea7nsk3C2pEaijejt5",
  "key7": "5icV2owLqHJTfx3HRV689fg1ouEqwdQ6idn5UCMDV19vvWYBKYB1F5rdbe2xdVBjdTg34yaRLxFsHjoFusykS5qH",
  "key8": "2243KEFGDBFJGTKRk8DSY38qpVPN4erQTcfdqKcKhpezxB6jMeu6uTQxZaNAcPz4szJe2zgmwvZZikvmznufx6HS",
  "key9": "2LpAK2QYaVnh178HZntPEE3yos9cbYoDXBKSMmvDqqf3P9gnXxE5xdajU6AY5vssK58EndkTpHLzHC4zTPJePSxY",
  "key10": "2UDHHLhkpvxsWAbPKjjunysNNXwGZCYgDKpfGtaZ7o9AuRHjaa1o9hbpZMn2kboHMbzZJfy9MhJXEsGBTtccy5JH",
  "key11": "26Ux8eaABXrRQChuGvvwkLkdufVBdbc3st87f955EmcQ3FmbUv9dgQTR5CDidSgry1rrgugyyby6Yo8HY5v3BKtZ",
  "key12": "babstKjUoGkseG5ju4dLEG3a6GJzgUKXHjzYUFNMYgEv4m5SbtnwWHqxZEF5XuhL3ksAYNW1BEP3FjChHQMZVq2",
  "key13": "5XYQSYr5Dn1agWdcPgin9HheasX58GmDqQf3KH8jjt2zV9BdkJgnEcnoWn618UifAzZQXWFZo7EnKJRU7mGaVypa",
  "key14": "55fbL5veQeG7cDBXr3BimaqWtKBDCDeKjRmVjSsXZxU53NJyPkTvAFfUjnuyVZzXYq4btQjqnnpPaAGZA1xJS65W",
  "key15": "2u3qNDmGbo2NCWQY2mymtvEPBo8NRTzyJGED6G9NACE29RECxgYp9anSgtT5TdD6d1jGYXQ8xSHJsoFMxgzsarLd",
  "key16": "3k2D7MwULh4dgFnb58uSKVgGdqjeC3YKhjFVDtkcvuFUz1UmR5kDFWjRaLwtij58YgpAWMtNvF2Nezyr1Hnx3CB5",
  "key17": "guJ5LS8sa2Vsuu6NE1a3i1x2ZTH3B6RVfDREVA2cUSbasWj2PjFGXX8fdR7e9RE9Kbt7WTdN4Zr64B9zP9LD8V7",
  "key18": "3XyHgW3b5DWdR5ZvhZivNy8D78X5BBmWnS3YHQMz6NF2Kwo9B8cyqfVcHRVQAgqa86aXih17EB6LJgWU3za27A1W",
  "key19": "4vhxhZ3NE9hgqnJHU89uoBrywpnm6P23wuasPh7dWYz6SiJqzkR96PranVzicdZLWxYf834rF24f2xhTNxhuj43a",
  "key20": "e9BV28oZ427VAdWJUrrG4u1rU9PA3JmyTgLT4EPJYt9F4RRoMakZ8npsL4gaMkBGApQ4TNPR9JKK3RYWgiRJUBK",
  "key21": "2HAothhDmB6rNmAQuWgrsHwcZ67jY8ovQhzCVLjK9LXA1nSzTumGNVAQuGuGAKtviFm1Ey1bubf3Uowf2Kf7rrKh",
  "key22": "4SDLNKC6gWd5NVh3PbYSya186XDA88XM9WmUvybGXP6hRoejegrYfrNLtTxvL8Ap8pup8w5nGjGEXmVt536zhftj",
  "key23": "SfU1YNAJ1dTLTZda6dNsBg9vZbUUXXuEtdVCR8VmM4b6pb5sm8AFRFEJf2pvZzokszsiD16Vf3Qm3v99jiWb8zu",
  "key24": "2uoqaHireTJeS8JUCEtoYgQiaVfSDkWn2woU7UiyaiMhKuMGFJ59xvkuDaBoKT4cUeaLK9muS5nUpPcHCk6yi6BA",
  "key25": "wc13jdMBK86E4g1UF443ZoVqcDHTBs2JUqqpCZaacBqD6gHhX1zRUNPjjvkdbKBmvTxNrG7kVKCYnDC8AKnm7HY",
  "key26": "4cHRUmrnFAtHHhttEHTADj3FcScxEfzzo4ejcwa35RmtDkqbS6VSHe3jpoJxVWkwoXNvbtRDv7VLGYVKGDx4asD4",
  "key27": "3u2KaHDvfUfHDRsW3uLwpP8D4X3qySioFbkp2WRhgiTDq7ghYuhxDBmUcyyCJrPxti39x2XxnsL3y4kY6QYZwAYY",
  "key28": "3Zmmcoz3hKSiv2iASRhf5i9KGwnJEvePE1LFjDRnznR44J5R4JZy793Lu54jgkUVHES8JyDeUCCGCjVNZABzmCi",
  "key29": "3igGxLU3GCjAt7od4yFX8zwbzPPNUsgyQ7mNW65TiPGwvyGJ6VQYpnZE7YNf8U9WJj8jxVPgutBoBKqHzsNwuVeZ",
  "key30": "ryAjWz3sVY94Zf9ZsoHQsaJ72fwafoY8nSzhsRHjjH2gJ3RTcKosBpVPdebwWHjyTp2u9LWVimhcceiKUGo7sCh",
  "key31": "5PqKLXyjsiL1DwRpgsc56TDj1Tb3z2U88QUMmY9hCmCWdKc3WuSNuQTU725DTsnnuCjkniAFRyQpuoKFQuSbQH1a",
  "key32": "4gocsG8EXHMYeu2he7YN1abXg5wZmAHutdJGHUKiP7XAXgktjZQbEqx3z1gqYnQ1hgjk2wbFBKuwt1QtFDK8sbg7",
  "key33": "63GDvsWS3gWw9zFNok3xkRP1BAarg7suFyzMVUDPJosBKeA8bEQEPBGeiynJZ4qvWbmFtJHmprsvJKSafzBxPdx7",
  "key34": "4tuJETwML9QXxkfexPB9Xg1D6zwkwqVtpxaJwP7uenu4W8VFhGp6XcDvhzEHK4ybBV6HmWbpNWUCzYLc1B1343EY",
  "key35": "ADNgPiMAAi2Y14WN4DbbFLnuvta9oJTdqN1fMikL4QN9Fg9momuj5T6BV2xKQFgfLXhTwJoRfQSaJuUftFGP51v",
  "key36": "2eaYxBf3XCngiz6xKwBbsoYVtHNf5GffC15Ai7Hw3DrujByuhhqJTbfRrPB6wyM9eSejzum4bdbcuUwG6ZWrQqGD",
  "key37": "36q89gCq2X576S1q7hNBQ3hMrhUjsMTXUxxTCimsJvjBBVvud9E4Qf3VFzZuSKwCj6xGxhHQQWEGZWrhhNNJZkir",
  "key38": "62MUQzPLS1rgr4c9C8SxKW9pz9XNvV2Htf6AGVR9N1FmHk2itdmoXUH5vR3ikaytUL8iVWMJv8hupJmiyMqaJQEc",
  "key39": "5Rtj83gUTYSJzB5fE5W7dxacApAFMbG4f41KF3Aj9oobrW16mKYPxV4wS4ayQXe7szL9ceHVUKHPwiiQYrz6kkyX"
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
