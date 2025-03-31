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
    "24BwLLDmk5L6qDjtg7MDNaGKv4p2jNRj56WE1ogy2SHj6tmgKpWaHPE2iuS7PJ69GY3SxZ6fjWUvDacWSPLozGkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MRAFgDFhxbUc7zkQ6D9aM3zMGEG6B9yAth34rk57udiV6UNgvk3L8ZxmHT7ok7AWaBD1YcS26vsbRug47sEtt49",
  "key1": "4hLUKURtqXF6LmfshpVp62WfQjf2EtcfgDkp7NaSKP4gZUKKbSgECePRDMvPbCg5gfTFMnVCtX6byQYY28zp2aUR",
  "key2": "3R6Jz6Tca1RiHmjPSBEzQr1mydz3k2kr3YWhUXe1t66YE91enqbwFkXuedFicV7wVLbMoFvWwrT7ub38VZzP1nxb",
  "key3": "HE157M18UDQZt2QS7iu71DpnvCzmksWpe6irSM4kWN4zphjsBLrcQa7iwuh8YjE2ew22XGi4y4QQ4LckwgWs9DW",
  "key4": "4wK87wBeQcNdCv4m9WjdJTNeYCbGAtKQRT5AgTJAMpKig4VKLTDuLofwH6QcJyzFawVhj8vEMVdrSBFNP5qcnJUZ",
  "key5": "5qBFRunLaJ8yaEDmmm6XuVXuseNt668NF4MWbLbfVzdCbbZjod6BaG2zk1tYYdDYV17QEkc92XNt4W7FFGiTe4kB",
  "key6": "5eki9EpQaDhPxmr4xA26mc5it55zb95yMr9US7xjkRSL8vNfUGYxfr5MobrF6n1Q3uynZavFxWRMxMzjGuZbFUkY",
  "key7": "vdTxJWzLx3GQT7gdRXF2woNMNdYMutd5iXdG1z2jN8aFvqGJyewvZwg67p1RUzeTwX9a7BGG4ovQre1DgVwa7rE",
  "key8": "tm1mjGysj3nNP5SpyAD9N7B9MMBx4cZMBkbz9FLG7uuyz2XVzUd6C3743A8XpeJ8SFBQCEU2pq5vXVRWNdTmD7C",
  "key9": "5Go1ut32YYPM8NqMDnX455jTCg7nLKJfiBdLf5qZzgybyaVVuJiyFT9WE5fVCsjTQD16e4D98SaFTPwyQUiBqs5N",
  "key10": "5QyREBmf6ne4YJqAz3gA7ym83zg4z5TiuJJNSQkM6aZEKB2zwnbMYVhvUYgaAR6hS6xL7cakkfdD7hJudxy87QWF",
  "key11": "5tqhaAGiU8cRyE6H4Xznt1X5qL7yhoRVKm87p3ocRvzZteknS7UamQu1LryH8wtMkuQrj9qgSjwThj2r5pRyUed3",
  "key12": "5GF8p9HYAzofP1hQ7cH5fqj4Q4nrXiqNdwNkWz9nxHQY52ThavFcNUfQYPmHsRMNb1Cv26stWS7BpCieVw25Rs99",
  "key13": "5hq9LGLMAUXKg4oGspWVn1N4sQ27Lnm5E8c5PKnNRBViy4KCwGAzPZti4pPFwYecmiK5ZiaG6iaEfcxwGs19FuxS",
  "key14": "4kLLUw6VPywJRZtrxNXBFjZVXW1UBUirQnHqmuVTgDSkbMy5GGb5eAbbGvYaQUpZeWzQVSaoRetXo9DhoZhimbrt",
  "key15": "EMGWDguQRMSk3Uziy9D1nGSzTreKa53Uhhzk8bPNB1c72rKo9NmpzMF8nTchjfc6YmjhtfoKfKVuqBqok7hmWYr",
  "key16": "2wn91VstkANXx7FcHvLiwox1dxaEUWv5h7pM93NaGGi7mkwdU3N8fAJ91ndmw1zik5wHChg5sAmExQhFgtSFqPQ5",
  "key17": "38wZy5KuwZpog9n9AvUr6CUz1VHyYEthwo6kFPjRAjsL3Pu4XG6ELkuKPtSFsZreXWDqUWWsTv9T6SscYVKSvkhN",
  "key18": "etrwTPJb3brndyEdRZzCDftosXNF5YnKdTCH7MgZzwZpikvz4Riq6rZm9ZEfz3bfgx6Kvh4LXw3eeNxc5HUj2mL",
  "key19": "2LPuBSnhNHcCvp28rLtfrg5kgFrBQ3n7ZpQBN25Ew8y2cbSxVeZ2XHed9E2vjErs7Wowqo7djRCMTcLGQKj5HZrs",
  "key20": "27iqCCgq2GboSa4S6sPmxW5qkXFK7eUnx3uwSDZXa5HpjwMHxV8JfnhVjpiiDY5wveyFRUC7BRcDAwX5EFBGLhF3",
  "key21": "5xheP5YpV68vcqF2PTKDtG1vcifS7uNZXrCLjFahfsQaejgYf4nUS587wD4zWx9mhQKPFnRXQpUNrYWe9GjEkHFE",
  "key22": "4mY5LK8PnCGDgM4yiEdtMnQgu9BnGRRBcnDHqJxR77eriHVWw29Au3GqyenGPMZpxH4FuGwuzKWwQgz6YvP98UtJ",
  "key23": "2j6okamP9Mi99PpTuUkLXhz2oSa4LQJkzqUQLMzxFufNH2b3BBQP5FC98VQapDSjXYkW6NYLF1sukqY73X4tQYag",
  "key24": "4Azw6YLpQVU1TJzSDWGUmNUtt7eBbzoNLsaNgYJ2G8GMGJofC39pgoWiWdSTCKA1yCbFyATRm7S1gRxNCMiC1N46",
  "key25": "3ywGggFA7NaNEVRv6WnagHCH1yxijagLuG5U4zcHzs3tPHWZw8dNYdrZQgLuz11yNa5shJZWmjz66t33gSiNqrzF",
  "key26": "5nF1RxFJY1ZhyiGraELFsApTbqukR4wuScw6s9mnbFfa918J5Eeng2qWqP9x8etCoR7s5ybPH73xhQzBaaqKhFEp",
  "key27": "4qCPZ8GWnLyh2i8hEKoVc99UHRVhqF85F8R1SSyKzJqVRgjzdDnv3Yvmt8w2MV6wSfr7eepajmAuSNq2PhAVL59i",
  "key28": "4B6HAakq6vR7M83HkWvM8wpNFcKDZCsabEerwhW5Uz4TsGG14du7DxTwXXfHYgQA89wvSxG8zQX9EgHKoM4y3kM1",
  "key29": "39Pz2T9NkxwtuUoe8G8TD6vEHg7RaecGksYquzGVYKGbueHWtjmMtD73XmhA9NmpzYuFwuZJY4wPR5BpXveTt29H"
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
