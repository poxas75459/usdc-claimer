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
    "3E55WLyzbAVdi4GxmbfMoErRd4YbQPu2sQKsWxmHKZWW7qhKxSmQMUyQ3TrG287ALeFHPRCPi4q7PudtZQA7BMgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QvtUy7AJSQ1QUVaTuA3ZAE9uSyJHTvsh7y2vwW8hKMsu8NxPgU1Q4aC8kEJTKVo93P5Drt5YZ65Nhc8yLfcbdL",
  "key1": "5rB1Qw6wCaMxVuGyaRkatSZAdkhqnmrQoLZ9vifAT9sNHJv7vcXxLbV8Yrs9EWBaWFzaQ4vCQTu5SggfUTGiHCQm",
  "key2": "4g2eiLkCwNS361uGvWCG3h897DwwtsmU53wHJevkMhxgMCPmA9w4oNJqaXzoheHr7S7pQKhbuXg5wJ4uDqZVW8hL",
  "key3": "5T9184gjaGWPcmjSWEN3bSJitdZeHy1aokZg6ieLdABsUh1hLd6b6RN2VY4PssnRhLh7vCimoJJnLLWtDA2rwX5P",
  "key4": "3chS8Zev5rByV8hPaNrCtVgpszDagSnuB9jFNRgeT7x6c6RuqdRYanwYFtscgzNHMp4oymxEVReoX4vg8VU7WTJ5",
  "key5": "3n9CWFbZ4Y4LWTFKs53J24H3FD1LGj1rL9nZiybFo1kby9LGy6qsd5DXg5Mstz55b2TBNRmMnwUNaDV2wt8oLa3D",
  "key6": "5YBCZ6oESWwfVCPdSiX1CCZNRfz2zPoNJGsCsdcppX3EnhmGg9N9Dohj7LUP6Hk7HfW519nLEGCJFwTpuNReoZ44",
  "key7": "2q6LWtTcmwWcQM5wyU86pK84pzagncLXcfcANEMWGqYd4TjkPN8P8TQZWiYT9UPKorXzRuJZjY6LFvKEsRaga1Lq",
  "key8": "3Atmd47ut5Rvizr7L1vJuiMRz8JS4dcGEEAPCdV9ekw9dr5go33tFH98nVNVDvPb4m6cWsftUsykAfLnEWuYZ2wv",
  "key9": "3CjxnnxErrDKHjwrwfhsxqEgT5h25SvX5dfKW34Ck49xbitxKtWJSe17X1JYvPYWbgWtAmsSYtuX7G1ZvqbTxe3k",
  "key10": "3YxrE5sC7TMLmyYUByK2tusGFdsBsv2QpcB4P4USSQLeUgUFL8WY5mgYVsSrPLpr5RpF2KYdfwqNs47pocEuKmjX",
  "key11": "5fwB449vK47RFMAtmMnnUtEC2CmYLLRRQRwdWWAA1ihREnbPPzdRg98uU5ycNS8mfZ6XUEyw2ta1sJgMgTKc4AU1",
  "key12": "46CfdYEpJeevoU4GfJf4erqWNViThDjLPjjzj7je7XRVwqqyv7uZAKeaVLm4uJhMjS8rFk36Y4215Wt8PUdNEw9G",
  "key13": "2PLJmYAMDmkXzVmCfdvPiPv12LP34PwBhTecHaYXGbbc8qsokeDmwGJ6e2DxwGD64BWXFiJw4CHFf74urdoKTZhy",
  "key14": "4hG9BNDnjh6jQjf8faMyPL5QsJ3sfT1VYVWvaSP3wNXopwQQSVZZbu4qRs6eNUuPKj611Q4eqeGziBsXu2oikA7c",
  "key15": "34GsyLQPWQpk9vSxLJX29zVFAC9iQfH8PBpcxkqeWYbKyZYvGn7ZxodeB3sfAc6qg8bVynwB1tSvs4HfBfFRWZkf",
  "key16": "27CbZFPWshgRa3eWUc4XDZ8vuiBf1s8uqok3qHdvLKtfHK6yG45sseHXxPpB8zM77KA4K55Hcn3SxNp7iEbkEGjX",
  "key17": "52EddTCuXM9AmxP7Hn9HfGzLncbbELcCEkodfnJTzs234AURyexcVNuPWkSyn4qPHUjyhorUVcWKuTeFfn81YhQ7",
  "key18": "5VenZMhX4nGeLfbXQAFJ9qWn9DUCr8bfEnB7WudsQVZSJsfBCESh6nfzGCAtLTsHiaDgP2Lp1wso9Noiu7Zk7Aak",
  "key19": "wCCTPCwBqkKJHhPbm1QyPNrdqaMKHwHV86dkbiLqRboi6HYseTnXV1MiNV1yaYD31hz7SxYytpMpUKbrs2yaiPN",
  "key20": "2iX78G6havpNgBC3JxAUXHn3xLsXZJpPaY5kZ8ekkXYNMgQmfccKPVLxHd4ATgwiAdh26gh5BHwb8shmYR7JVgL3",
  "key21": "5NkqqDB9NVvbg9XUL1h37ssqjbjLVPZ5HT1yxvhxA1iy5fjNkLejs45wpr2upc8SHEdas9MZ77bWgH2eu9ty7mkP",
  "key22": "4DJdyggG9TCozVQcVuUz3pDUWwYwcMd626tACE1LesyesVVgRpRdcy64AJ9C78fhMx6ezGWRvtyi6GgSaC6JQsXr",
  "key23": "47rjSdSFb5XgSFzLXQHFzQZnywuBa6rHaEvyDpoYRNWYE4ALFCJCESCTfJk9juL6mYSxAEYbHvyNiG7gYGUGTkyb",
  "key24": "3EBQREC9kWtwbYzbWvYruB2pmbRAKsLayfyt2kz7jXHv1bbQ2MznkTbVFN6vy48u6CU2YsbLoTw3ahxYH7Y8fpeF",
  "key25": "5xZvyByYrV7hPWNC31UghadgnaeACyYvwPSfSFhYS4pP9dxKbVVAiiFtgkZjCPshDxbcsXwmRUw39AKtBk1ZYQUV",
  "key26": "Nazqu8NjK4SAsNeS3aJazZ5RUyPX7tqQxAgfdQEMX5DNZ8os2X26y4JFpgoEWhPXhcVvSGqy9Rjq3EVrZ6KyhgJ",
  "key27": "2aydVYDzx8Vv7ZsXYBaFtyr1ZaBXcT7ZC5Z932hLH37JmG5rjiQCfYTR4qHrxTfahcxGvuKdCz7BfiQ7TK5YhCew",
  "key28": "qyzVumxBKUVgvxPPuDkSB5aBPnjLmg7KgzDYbieKhejawbDMiRcefx7X8u1wqmX3qVg3smc9AWiG1WL37JRwuh2",
  "key29": "64jTR5obpPQtBvXPbB4HnveFE4KRuASMRg4gTZBuhF2otz2deQWxvQ5NCnMHnaMZwpwoJD83XpD141EZddegCVe4",
  "key30": "MZ7sTgsuhrG5yDGGjmmG37egqF2LLT8NjXzQGpiBbxfUkxAPoPXeGUjnUPRvdeMF4gDmLqFWvrgPna59PdUkUEd",
  "key31": "4nTDcthC9EaPq6jhdi6ZHBAtw8GSX7VX8y85Aj6GQMPCYeAYH1ELvAw5aCD4Bqc1jx5fCTBhySogZdedpkc5vfRs",
  "key32": "54zwvuDxWnXK7vA72jwEB7FSri85DhgWWpqChopkW9y4ptD8NBKL8irQZ4hSKx7CNTavuYXbGCN9rPxqtWkj8XNb",
  "key33": "5hUfuhRdDJaEcgjSa4FXSJ3zpkux8AWBKevCMenW2ECNwWFLrye7XSmZuwDPCGYKNCwjSuKyhsLDJbNKwsHRZFss",
  "key34": "4xirSEoJTow88TpAdRFXsm7LN8ivKSZ1ZqpC476ev6qXb7En98Af1cxAF8YGJYrdFUREozpPrNmDCx77EnwvL2uR",
  "key35": "3djeiXKUjdaaHnKQu6QYJ76bq8dWEkJJU8xtWNtyZPCqmiffbhgvdJDEiG8H3Zm6YqkeSEzvKA7mtcC2QPzYYHDi",
  "key36": "5a5Ga9tUX3STG4CUAcsWoWaAXtafPS4PHw5dPmKFEfkz255MRsprnQuvs4nWbWhjta3SpViznXuD3AVgBnVyMRvU",
  "key37": "2eckusgefqnyChvcRzSRdN6ifhfPaWpugKF1hCbUMd2x1wor1BePHP4gZmiJHdTpaHRDUrEzmr7TqFuchDU8kqkP",
  "key38": "5NdKjxhu5h9oNF39yESCGpHRvnNg5QcsbTkqC1BqtwPDafwMh1TJgu2DYV2Mq7wh9MsrB5BwLwCXiw33pPDTZHg2",
  "key39": "2FEfnCA2qo5FRqQJ7Kn7kQM6Y82aqFZSbAuFUaNjwaJGAhWfyijcxstiZ4S52PB4stdvQ9UjZeMGMTWsoUFJ26fY",
  "key40": "9u8C1R5a1mQEbBbbWuhJVxzx4HNtFp6bUdfMmU8ZQpt7KXVvEhKTus3Jd4pGYFUvJcmKJJGA8Yud7pp4TZpnmTo",
  "key41": "3Uz5uDwoKUr1R1WX4aGeC8af4xKNAV9onnTL2yJ4hgaJZvGsXnDf32J8VqzxLuQGGkBYP8GpiWQMZmBgsNbXmdfx",
  "key42": "3ohi4brwrReuQQdqLPZbWXzgtXpefQvRBZRkGx2TYzv29BE3LEAdZSjcVfy23viLosPLoRbPanWbdCgs63Stwuhb",
  "key43": "LKsnCvpp9wHmB14u6NBfC2n3nXozdZXfCmYyy7nbxn87YK3T4sZoRDYB3a6tZp4Dku4eZUqYWHdHZrLDC9KBB3p",
  "key44": "uXgDd2fwysefCxtnnwUGqHFkPWoG6Pa38Dc8e2LPojKBxfPaKcCUVNJgbKdtpw11W7nbmE8V7Ew98TLTjiMeC3s",
  "key45": "66k7CwKyHZgeJxVSTBab7Zg84LwzH7M6kxkNmcHatAURfboukUf5bEZcCh318SA2gr7fXEcpw2yu9LaM9JiVgH5M",
  "key46": "4q5PxsrnsdpeeqGmj7gVLLiPHFaegrLnkAmdCdSzpPgzzkP41rJfX9xwvi7mf8zrmjXYHxFF5tYQP8azkb5g44X1",
  "key47": "2GoEi4EidonF2iEHNqxUtiZ8DHuBpfVVhjZboXXYicLzVXaGJeRZzEKyhpYMEzz1udU9UKxVme6NeMUKC8aFNq4H",
  "key48": "5UAmvx5swstKgEuNbinAHFs1pEwGHLTkCHcsE4CUcyFHh6c3hKPKxjtGRW2wq5og3nnjSYwh59YqgyouzPx5ZaMu",
  "key49": "4qzPhtoyHkydTw7QcLcuW4r2CgrW7UKLdC1MRkHKDsgKEpBB7ZYLmksXPfHajph1w6mDccou2yhLFnu9E2FT8ADi"
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
