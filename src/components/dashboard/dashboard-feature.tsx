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
    "4rT9kg2KpRhj2p1Q6LehW7S737YC8LRr8NALuFWmcZzQ9RZju7si1vvtQvBuZFpHt4LQkFJs8fMPM4xcvkLCJUPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3TLb8pHqppF9QJFNiyk8aDmGTRCfs83TVzDaULsJove8LbSv78R8LxHcXePVZmnYsxsGQ67NRyQ4xEWCsXJd5y",
  "key1": "4tgButVsnbzuhykg33kkCmthnAsiCUQweuzhwo5LJLETvZTqJWcmPM7iZE9FHL2zGVoVXxEfDcXFPdHyYJSji24F",
  "key2": "4DNwrXS1a1mR7WSFkt6K5KcQfArTMjaUXmZCUr3MEQ3paP75CtHHF7uMpX7QSRQDoKWM78RbBDH86x1jdeYqgb5h",
  "key3": "2gELuFXQBtCGUGJyzGTBXKpgrsUAZjkUVsUNsYiQ6bbwDzQ8S8H8jkBshQkBrCD3PgMGxV3hejnDot9o8NgKWnqb",
  "key4": "3HkUdW7DbFMpboXiUFHYwJeF3T3wAMqEeHSkqSm1vQXs5UEmTbaKPasAV2mCkfcLXzgn7mUVnYDGigFNzY3qAsdF",
  "key5": "2ZfQW2etzFP1k4etG68WQFntV1KxYHHgTZ81Lea2upTKVUpw6x7qCPFAvvuZNcBsBzY7B5gv9rx65oLWWprd7aCm",
  "key6": "5R2ohGv2E9bWNgdDNqkUFfPAuuymALthPoaNZCcymhhj35UbuPn7LUzCTLjBsmLhhgtbENpgkvpgw9Fvch1Smh8m",
  "key7": "3cPhis75kHHgQveJJ1666iczidhoLsPm5NtGQMkc4DgTS45nrBYZts77gk41iFu4C1XAyFDkm5UbKjjxGUNoGEVh",
  "key8": "sDmQ3FrGFbjECkhi4TzdjLQbwdpf3cVgiNhFmDWcygbHzxpTDMA1VRJ2CynwKGAo5PTTMZLohrfSRLxXwoNJXc5",
  "key9": "3tog9974kZ4DFQpwHz8GzW61dzmuKkmUVKU7N5z117C2yNA9yQRuNNPgQwYyyekHnrpUxY9ESisuEJd7N8BeJrsk",
  "key10": "4Lgm71LousEaFgZV3zkGbJV6t7RefaZU6fTuC86E4XNd9MoQ1dbVsSu8qQqP4o6g8Jk4wquBNfSQ3vJKcnRMrw6v",
  "key11": "3zSoDJoXDyZXEvSBSYXkE1fsdTVAYRo1rAnn8WSvtt7DU7xuyafQeX3taitpFGXwNaG71YTi2LF8Kg2r92qq1Ma",
  "key12": "AY7YxQNH1UdY6KuqhUic4ZDh6upB4THGctJbNM3cr3BAX8WwfFmy2WHTWmg3GwGr6bhAmZMnn6fxbmjYJYxWgMy",
  "key13": "26AJ3hYGQiSXTJHieKPM4hv6CsznBQqb8xTBGs4U9PTmg8HxiYGn5yZzfVMp75BSMK94WRRfkVgBYqu8VFKTGmKr",
  "key14": "9WRVB63yoNnV8JqC3bF1PTP37gmbsHuhBCXFNW9MPnbdaQJqqherbbrquxkupoFU1F8WKTWyvcVo7mV9ztsqCnD",
  "key15": "ZGZGW92hjCXDRpTNfFUgd5hqyhMWn7yLtq9MCNPNMYNHJM6sM2gEaS7bCYnhZTxXWQGAWyXVGEWVDCFGH1Aiyqb",
  "key16": "3WorsgrdRAe3YpRgPwLb4EnHSHB9vW7MggCBkP5nU295negtcABY5j8wxPr7wpcrALjzDt52eALykPN41km1GKQj",
  "key17": "4D1xQdMwbrjnWzxjmdsLBCi2tDr24No6QNABpJ9fUbawQmMgWQTnhEhsYurUWprM9bHPrPPo8AKV3aKV6viBdLhA",
  "key18": "3i313RCeesGYfPpMaQmWZxWKufCKh1ysQduNcyfvLmnXPmgmGV7WaLMgXNVWuLAraBt6NNHvqDPphqyzZh8c5t67",
  "key19": "4pKFxkgLLTSd4VL8hvNWBJp7XBY6b8dWpGC7X328WiagKgoCLZoZGx7ctKmif6txotciVCCZHRTqSABR1X8vTR6t",
  "key20": "2AcT8dQPyiASgdKMY9RJEDXSWCQRGDe4sHfEUTQF4Ahx7GDSrfejhdgudTgPX5W1w1QfdSkVS67E5PgVPafLB6MF",
  "key21": "64THxmBYjFZbx7FHDYuB5X3Y8EUV1uiWmu8oBwmTaTL3vvFt69BRxmkeAaxNwU2Pfd22RAcTxHQY8Wpx212NJf8W",
  "key22": "3Cr9ALLbdHnzk23w8DyfH4FV8pPScqN8dX6TQC47WR9UZCDtPCKKPhppKVXjdwi8CyouW1FBXRuJXbieR1F3dY5B",
  "key23": "PQ4pkdZgFTfvykKY39FwpxYe3NU6wVtTkP1ZoHpTv4Q4VWXK7vQj3Wx4ciUuqRafaxvwjZ9WTTz86yxD251Rm3t",
  "key24": "41jpi7sQgZvJ3WCEnnfRgb3wEqfi14UBrk2YMMUSP8MYDfhXxQQ1B3W5FAWSnUj2DXCX5eXB7EGFNCWQYWKBKzaP",
  "key25": "2F4Sm5GEDHamJd8vrfxNTTVVDRSQpTGEtzmhRuq3YqHv3BYWxXmBnz74i23bTmQfgyhrvNBj424mGF632qkUsSTQ",
  "key26": "5wb9vD9Ysu2E1Sej33uKWY1j5s8Gmw5uQgsuscGsZPi6DLgFUpb4DKeLRvQVF2EJDuvchkZrJnxkQdmnMx3LMddn",
  "key27": "3m4SRGLT9mvcQYMjKC1jqFrfDMpkk1vW2Zj4bteBhfmy8wkJHT83tupfGvD4UnX88d67Epzrvm1295VQPpCMPHNY",
  "key28": "MJn6eXYMwYsBJk6D5yGRVsjRsgahsFe5XMk7XNmQRTuR1P9aC3wuiQ7i6JnQxD6iowBH4yK9at215fNtuhHvSKr"
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
