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
    "5KgtwEZDAMQTGw38ta6xtNjYqxLbE2RP12PoaCFoXEMTNiBiAqVimsZQrM5wNCJCoWf9mPtgey6UDDNv9yokB9so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgsAZ2TCuqhubGoCcgJuepJQD4MfDu2y1bf8siSE8QzMNhxHVUuSwtjz5W1YGF5acFgV7S4Pm5LrugPsQqeGDuL",
  "key1": "4U6QDQoP4x3KgCjGtYuP1FbUzmDKje1jpRJ7Jcv3SNfGAzUNZVDBXhsdpttm1XMpCN9mK2DFcfDoVRExfBKkqFAL",
  "key2": "3C6PNerFTsocRDQHf8Y3PfRV6Gq5srEDtixwu7jez3FXUuv36FFR1bVGG7LtXprPJGiStNZet7YiYjMFLsdn6aKz",
  "key3": "2peuB31nQLkv5yKbLtqPYGXGBYLoukaHuNA4B3DAudJinQDsV34mgYioqAr68DHUGH7vFcqd1JF6wWfUKYvHf4Vq",
  "key4": "2v7zC26uKJPdYp5u83Er6SaB6SSt8C63trWYxgJpRrxgBMzoNXkCU4DtYd2fhkn1RvHy3fSVC5y3TbMRK3gTe94c",
  "key5": "4qNdDkptqrjDXaWBb4SsCrqdxF9fnBVQCxiNGcU634rzdgEQjThTb8nAmSt3ioEPHefL2usnyZYo4UDj7kfBxRLM",
  "key6": "5iqePBV5ddoGAUzP3UiyUUzmm9C7JR8e7SYo2LAgGhzhgYXsrBk4yc58aXfsf3gtTQwRppDoPeGYqZBEPtyb7StL",
  "key7": "5ZaEt2w2pgnjsKYRz8bfpwoKkV1Xq25nqg5SZGt6T4XRw3JZYp29Wpj9KSmJ2UPNPvcmkzCi8wpo1bTSjLjoNosz",
  "key8": "4P3NdktXztsBgrkb2YymV3YBecVapcb2zdhdrjLuRMPz97T2MobPCqH4Lahb1UsKyrx1a6gLtW38S34bZBR5mfK",
  "key9": "3MqPKi11ErsjoqG49PiyUUDL1dh9GqGYqhLE5QEyEfJyfKYW36gWcuY3MwXhUxcjttXfBTaLHjCRzpf463z17gEk",
  "key10": "G7DxNTrrmk6D6hhjBntbFyWFoD9g3SyyVyo8wndSkcT64dWGhHrFhrQotAVZzZn1gEdm4sC5xYwHCSgLxXNdmQ1",
  "key11": "5dXUZdKbbvFJHMJWUeEn9iVfzUfahbJ67xjSDADp3PbaEfpWfsXaWPJTGzAxC1aJJkX8xv3J1V2hN9AYTCVBBzkz",
  "key12": "KwUzR6h2HDHSAKKd8PLYTTFZCwqTTAhe14Q2SxTUWTUbsc82LZ8VbqC8TNtUuFF2RT522Krw7HXj1LqcsyinMdy",
  "key13": "3Qy4mNrVYFtFRev7Zdkb9cfWHVXmD1HHjaPhD4KyfjEYCzoNMEKVfu5YiRoTczW4ngKLDjzrWYSFJ1tAe18GW6xx",
  "key14": "3GTUgpnj1WiLayQQ3baqKCd2GXfnnC9GncaPd9jDLWjmz55aTtBgFY4sem6Wt33RkwP6b3mDgmzfDfxWLH8cSkFw",
  "key15": "4b6X9xKpqNV8GytSjguENVKLj87e4xL1YejoxgjcSY5foedL7XNEuG7ndgfNpNCVmT8bsRKjYy8NNUyW4RwvGWS9",
  "key16": "4qDUy1s7Nd3xrdBJi9yQgBdtQeAjRHAP3swXbzBJ1bFfvL5YC9GVbQJbwqvQuHgLfYBaaaNVeVCjxzuNzgKFoxDd",
  "key17": "4KpAw18TyLRzziPwiW8jEg73k98WLDEp35EnDDvx8Zz7A6dV78eLwXmLF8F317qw6oAfRYfEfbjvpfgbcDy6ZFaG",
  "key18": "4Bn3T3itVHzwjVUyivTxBhWoeXesYdiV9LDY4M6DLoAf33rKYfYAW4DCCzqaQh6jwCPhQRE5EH1hdYz7D5NnNVd6",
  "key19": "4FaURpYQZmb4WP1dNocd9J9E7Y72ryy7aGfiXgMLAWz8KqVrYfFGP3LJxanB7iRag2je7F9q462oNLaT4a184dwF",
  "key20": "2hgiCJiys4hK2hdFpNX8E6rL6M2KjKHHrYg2KDSQP8Dbj8uDhiPgRTtiZG69L8qWmbhvLqrtsDYDrVc2SrLAivDC",
  "key21": "5V7GgzsydtFcQ15SqFfBAkyseVmsqoaHQuqJZV6DmYsJLCKrvH9FMYH91htYXxvdWULkNTHoHBrcXiCFm7rDDKhP",
  "key22": "2xq3vS75JH7TJfGA8bgic9LkivwRzANRSbHhenhT7FPMfbbskXhLiMDMwMwh9YeVW7jjs7SxpA8G57svZjmhK5y9",
  "key23": "2rsF7QpL5PQ8ATzReVGFhZ4pTAFQwn335AqfPMzkwyygDqpRanzdwarrZm5GZKsF9r6FsP5XverMWqc8ETvAb2cN",
  "key24": "k3vDkCxk81xB1GiuUtvXb6iK65FtbpDULDpsbdPzKK9SKDjFcPM3uauLqxWH8LdgJYC4562seaq8eoSovaZmhrr",
  "key25": "37HH4MPWb53Zwzd8ocmKHtWKiWDNsAgZ1AMLdciaDknadGg7V7B3ESaD3G73xxhnFf4eeG3SW5KMia6BSA9T54V8",
  "key26": "5C3h2KMa4otqYqbYRYpoXKahUPhDdic136nFQ1nVL6EoqW56Vmnz27wTwrBaWyjXgS4w9FvTZ8Ztq75avsKqPCDo",
  "key27": "5UK2MKYUgm5qP1aJ5VX1t9JVR4vehhqeYFwgQP7TQ5fa6YDgAJJBDfHK7wEcYQhSGfindDFJiur8RDyxwqLEF27",
  "key28": "2nggqszK3uRjkik434euxMF5sELFWrDmXy6yWbD6mPz9QCj7gbKuo4XMKoe3sj5Maf3n3aCZ2CYMuMRx5CYtY2yv",
  "key29": "2putdgxVKrgASbCv9cehbwzm2cYNcb8kN8WHzsTTGsd6geE7sfunG9KuFLo12o5FnKLMA1uXfW7xjLMvqmoVgM23",
  "key30": "58xZADPczMmF9QqD94Wz2AVWBnBoX2bkDLQ9MuGN8PPnR8B5d37o3B1r13BpxTM79PLEaQ7EUh9AE2mmtrLcV4Hg",
  "key31": "5NdPCDQZkPu7c4MoyLUXLbjZ7wFaZC8kntK2g54eYpfEXF4uPA5FDbk67xYxLxZ8kPicsAKHhi4THzMvWfauzY3P",
  "key32": "64gUWzdKGgMSuWuEwHAgdvn8hQGGUiYhvrTLLSh1jYdj9F3BkC7rpNBdLNfLB5mRYcyjV18KGZJShYf1gXkXgxme",
  "key33": "3oNVNzby24rC7wi8ZyEZDHYkUfpn19eXQnt4B1yxekEA7ZnBPYwux3YSQKg3s7jtE8rfrdueFamVSb9rdcZLqDWt",
  "key34": "2q5bKhbSwz5wX9javFEKtSHrzjndmAKUg6CNtmKZ6DEavSVw2TMpnuFrWX4bni9wPsJouj2T6xyH7CKKZTnMXj4W",
  "key35": "2H9taNchsZ8g4PSCHWDTjGNBx5MNeuTSRQcRKYYbtQxfbEU65FwAuCpRxiZZHKsMVa3zgMgmT8MCzGV9RnY1VJHH"
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
