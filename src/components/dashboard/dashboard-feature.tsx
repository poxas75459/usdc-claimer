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
    "4bSTVum3wQ3jracVb8sbtgqM7mdoTggcSQVpjwsHWWxvP7bzcHSUgqrY8shpcMhyhk6y4E24TD4NsNAHdjMEU66p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iW8oB9i8WoEamMUhSPfs84Wiw3C67v1bCFDYLWiezt1rvCimVcNQ7N4uEmPN9fuwyBmNftqUzbCB5APqihD6Tar",
  "key1": "EbFat2DyPowRXBXunRCXPsXKSqAGkXQaFtsM1QZZ2VFoaLkCAUcSeujZ4YkZFZGrtfuFPNnh3mcEu38qhGnQv6T",
  "key2": "4EWisrsVpERcvuVHSN5eYc9TFGXjCQizkhj23hGepvwURpY9JJJ4fPm5ym7Z3cHHKqoEvdLQyRnm2WafEk9Ev6R2",
  "key3": "JQC5jskFKhFqKfrzbcLQAcmdy3SUNxim7hAD4V8rYrQZnTNbtC8dzufSK8ADseUyrkHNCoCb6S1SGP479stWHCq",
  "key4": "fLt3LLpJeqKg8QwWE5zRaSTZwTVSEcfQQsdbsbpniqwUekLonPo7JPbh8ZKFGQmkd8iFYxvdpcMyK9toFQ5gewP",
  "key5": "2RmwsxwoCK8VKto7v3TscsrHx17xeCxVq9rTfCTJepuyrbxpQbmBWxNLA7xxHa9meg9BsVSpW1mvfJ5J8vd7qbzF",
  "key6": "5xzEmPftH1tPLzvtJwbttaJ3LSorWzR33YN5JmZybvP5JNocyaELssX3wpUsLRLVuZvH2nWq2NSENnLJEmwn3MLd",
  "key7": "129hUPGfvz5aZSycdswgFcZHLSggMePWWEonV1koxDMVu5aVKDap2s87yG8NGz6Z53j6Aq32YE7Ysv5sCzp9uzZ7",
  "key8": "64G4ACyXkZ9AxSZsnSRDDdVo5rRY9Ky61bwuVz9CR9SbJUpLuMny76TKcF7tXC6G4d1ogo8EiWgQP6eLbpwVsK2h",
  "key9": "5ETnnrADWTCLehxcE3DyFW3zRxa66MAHScqBc8p3Cyy6BUddRcURHbqBwXvy3nTt7DXLcftHqcbVr8aTCH24Uzit",
  "key10": "48qvvQDJTpWMiAvYgoUViXBQTw9dgzYKXAiTyVEm52UMoVKrEa1ze6yoy2eDfic1ruoAUt5egCGCkg91SmYSdK6p",
  "key11": "5nMsXDxrrKS1WmethU3Qqmfussu7V6aNRwhZeJ4YBEEuZoXeTr7oidZLcwD2fRPPA2fegkegATz1oxRBaBztZMXP",
  "key12": "FgypcJfzc75LskQp1eYptsBijkqSw6MYpBhXDP2XfQYWVo564EZnCURrjMrhhVt2E4fkwPhGjsvw8YYB4QBbEro",
  "key13": "2j75bDhormHi924SGwkKsnANWBJ5cdVNHWnedv5uZgpMMEyq8ZkKybEb1iRtiduKDz1Q3W31KbzpeMkuobhcGhSu",
  "key14": "2SPZtcha6b9SmqPe3ZhJ1oLdMmtorATzVFxqNc5bUzVXEHdZLjhoKukGHPNChHpS8AtojybazrWYTfqK9Pj2LHfi",
  "key15": "48zZ1TsS21qkxRc7N39cnJJjYDbj3yXNMHxNFNqpr5NpLEhaC1vk3fNZmLyzBj9uv4ro58k38xfifV3qd9psRxYg",
  "key16": "2QkgaQtWhoYJFtmAj9euMkShWvwt7RTashKXakGhqM21NjfPjoZ9ZCAMXprz9gNxQHPcgG573xemYdBQDWGpEUnp",
  "key17": "4LyLcr49bstmgAXMBu8R6H6EWCXg2EMTx7YTaRTGK3pZNywitoqMe89UqHxadyTMpVWzxTKsB7c991JjV1peQJ88",
  "key18": "4ENXM8wodsNKXL9eHiRk4MjjCgD5f1HVSx3EBbdMmA7wGf1Zu95eSkVA4PhTewDsaAU5rxAofh2RYXYS59V4Baec",
  "key19": "3rAafHFFnRDMZJjsKV1JiTqsKaAZG6QzyWv8NLi3MAfrp4xKs7LyRThXBGL3btjoqKorFWzyTpSFNjv73Wi9VS5Z",
  "key20": "52GeRgzLoUHUPtLBT7qkmfFGwHHn9YLhqCEQ3nmEuRJo9BEabPjNita1e2GnMyiGYiDEVanpekEwpbYXo32hQKuE",
  "key21": "3fH7xJcFZqTVDoAxtpjWZFvXsMAR9b8j9otRsHGbFSdF4qPWdoEYFjecHxpTHq4W4QHdrJ4NP1Cz2gjhQkjbZPWw",
  "key22": "Hkk5LAm5xLThsGH5i7Pj1Yp2YvuyzNrXPnWn3isVKd5TJgbXRzDczMoNMPbYnWUAyESUnhtCb7QnZ9r7NKwxf27",
  "key23": "3d8BHF3K6bkaYYeQWWjYqvSws7aZFdwf3qLQ4YQkf3sJP3CV3LVstsVGTMUfGBggQC4PUxemTisfXwr4WQuV4AFt",
  "key24": "BpYV3W68YCgLXJpUQBMKPYw6C3QAyybEkH87QGFHb1M5PX1snqkcvQ4jDcWdppTesqq57S2XsN7KaVTX3kMaoj1",
  "key25": "5jkwQ69DRppBKG2cGdv9yjuwVjceJAmjHqtpDSLY3ERCYK9MXnLBKXzbDYoeaNRsye3MwHtEFyDhWCMrb61fsUQJ",
  "key26": "4QwDizm7xshZjCSWrT5tZi2AQpmeAg7JPSH3ZDgC3GTerpz6VTBHSVgrij1LoE6Lx84Y2tMfNgCftosVwmK7gb9M",
  "key27": "5R2VoMQxAyxn9ynpsP8tKoKLPXwDxVtJnGVaHMCviMDJ62iMSMqskiT8rNv5GAzEHYjQeGCUp6ocpoWiadAEVmuE",
  "key28": "31vcDYFQAcnBY6QxyUrFT2iTGwSrYN1DtwQGgjgwiwBBMdVFsrspkZLGozwgUL7BdbwQqBxgJu7uezAfEQsWEVAS",
  "key29": "5GykD2c5VPCzBnhG4c5hWru5G4oDQTx8CVqMQHp6LvACr84iaNsCjZmZBS9AkcAfG6Bo5LeKwQtzHqMzoYp9xLmq"
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
