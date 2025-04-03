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
    "i527q1N9Uera8p3z3d9FRxceGTtvzHeiapyCjqUsLMDEFYEfiTLDXaH34YPKicgWywnVnrfEbvmX64cUfUb8MUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j79fgQngRismmFpTmyG5nUzHciCgeppcKqdELAvU3P2Qmk2N6PkDib5uyV722Vxbp7ETrZgPVqo9iW7734M19K2",
  "key1": "5ixBatjPAD46t5bwEkhMDhWVTkLt9qLCCDBh6AJAf94bfJUjCq8kLu2MVoS4UmuFkH1yKZeyV18aMpKvY5mA9ZHp",
  "key2": "588zcRvMZxH3D3PFqyZXccaV3CMDkyhZqYHuUfLdkm1Rm235ch26UDcKpdvmiWu7ahMuU4LrDj6kGhavyg5VesAe",
  "key3": "4M4dPdFrTgqkHCdCmpwXxbbKyHpxDrnwgy5zD3ppPMxBRYGGELYMb63KfH12kmsY5zrENSqmWNhQpCPWYDTrc37q",
  "key4": "W485zXmbRyzESA36hybEiYhRdZaBA8wKYTdgzUYc316NF1PeR4n1ynixaCjwJUvoq71nUHYDMGZQVwZqWqeiHZV",
  "key5": "BX4et4DmxrPhEWvCPaAoQfwcamUfUY6SxQ4Eeeh7bijkCuRSAv2RT1c7McdEkManpDcNF8iH85fsuqyuQwSvJwq",
  "key6": "2ar4bDUC15bHm6bAv6j578rGA793fvQCoEV1GXuX9MkHACNBuhMvbGqd9rqnEZzaRyUw8hHK3hwZiEAQMT3TpSSV",
  "key7": "3QKcYvuMLrX5G7ZKBNLR6vMGgaB3MqGJEJVFXXYwbeuNTmSsoHgXHk5endnH4s9bJLsfHap7nowACiEFJM8Eb3yL",
  "key8": "323jnq6jvPoZ9z5xxhjXAVHNtAfHS4CqXkD8LcNwy1jioKJCJf4qbbAKFHnPzfbm2Uq6DqQzU15FiFANdD8Gcu9z",
  "key9": "2bVJTVcVzgoEXsjtceoP6o7ZCricsgEX2btp51DFCSrNeqdnnSHuoENdMPKXFo4AbYyNUkz4nE85SSgqGhyDAaKW",
  "key10": "ucnjrJsVmsWJNfKjEZHT3qxKNVL8nptkH3JVrj4gCzPvb3L6JwPbBL6eCqg9PGHFqm5fanKZfD8GgUB3vjeri8J",
  "key11": "3yTj7kbYaepnPm18PtRofby8Z2Umr2cxY6XGfkcnWjJhRXw6VhEUghQcAvGH42XdBZZuAsit6VwZSM5T4EhphkBJ",
  "key12": "4XXKCyhSzoTm3E3m1S8EdmKQBD6PRmMD53tsuXiXT9i7yZShbm7kVfiuY3CNC2uc5EQs6WLC4fSMywLdUJQJieRS",
  "key13": "xduzWdHuTE3GRWpvTmu74uwd3AhwPjkwT2aS8sDgwWFw25xMTH2eSkUbe5Ss6HmLvspxzLUYNaS2gxBDQL9QG6K",
  "key14": "E8jFSbqU6CeZxozw58CcH5FzVzyY6LrvmcHhktE2mw9M6Sf5PuHc3C4d3obK7XzAmruZhb8LASCah3xxu3rLP18",
  "key15": "sg2rRbmRVACZCVFbo7NrG18QbZ2YCUxN4xHtw57HQc8vPV9eB32REy27V53gW1rfxPd2R9RSBZEQ6t3ANUZVqDv",
  "key16": "3xi6WQb7GR1mqEUiT9yi7WUq6KKcogoXN5XwEp8XHUeeGtt2Vm2jii22kP9CP8vMauwv92V4ouCTQsCCJBFxqCRx",
  "key17": "469AF2yAteC49rcAwsEtZabr9TG9c8T2QKdyuLFzNW2YTZUaJzBwkmKh8fczQS4LcoeaWZ7XeFqHiBKxavFMXtB9",
  "key18": "2Yj9ojSoKNUYTL6V9dM8aRBAwgVHCLRYCpTzpxYwh8wQPAVGXHswhUMDcUXhurh3EALJy8xWAgeDS3EQXVcPAAtp",
  "key19": "66fVjYUvyDvLj3vgvvaosEo1oz2bDpVcRHsZXxUh2yRe29KijfF72rj7n6azZC13483xkhL13VRhsQMUkUxS1S7z",
  "key20": "H82pUJnNADQBCB7RrXXqY7nZDBC3P1SgdLr2K74VtV4fqSKthcVgPDEiKQweCytqMYeqBK61j27fPbowFoZKndc",
  "key21": "58gXJRi6wsveuWK7YrMsxp35fyCPMEt6neJ6SyxfDDmiF1gbg3xgUU8JoUBmsTrHT8LSQt5dr7rm26JperBz2zQo",
  "key22": "xFDscMR25donmAdxC9QWLkVfMxV9vW7ZswYJmA8nxGC58XG9McRqNZUPGVucPGFLLgp2pde6iSCq18Tzq5LSMEC",
  "key23": "51atYmprVdH6vErpQEntdyALBdspPqYHPCXc9KKUQzzf28ZuxvHGCDpP2h4atuasDAxESkasxcouz9G9sSvkzyTZ",
  "key24": "2hKuFi5bNzokQn5YhzhMFFQ9KBmvsH3b9yYa7TRmcj7q1GTpPXh7CicDT7mBjkqjRASN9yrtNtnN2MEGEYU5jDTb",
  "key25": "V2JrK4M5zF9VHJUTApikGVYFB9X81Y2uxt3EdGjiJpyqC64sznBaKuzb86q1K2r91gD8KSAQzkzxBRsZWCg1gDR",
  "key26": "2j9eMWf9ssRWsuN1NPY7G3xrXHMu9UYWNEjXnLuH7i2N89ihc3JpWGH1wiAdCLf8fVEaduW2jQFnVdAP29Y2EPVw",
  "key27": "297JhznQozuMWzHohPAsQ27Zt954SJutPh1AhVEY9E1uoHwfZTtePCfPCM9oxqD7W65gT3HxLYcBMyTyZnWLCKkx",
  "key28": "2F6mnUtr99VYwfb9JL6dTRij81uVfSHqLKHUUhbUZrgcWLMA7dRxtwCBHVNkzZXpgw6Vw7TsY379uuUGwp2hFM96",
  "key29": "Cj9gpXbeSFsaxFhn8QmBUyBivExGq9QADG8ijTGFNEYC8GtGL5RxtfWYFzvxUbVMPhJ2kjo77AVJB5qMesXR6M4",
  "key30": "4o9bh4moTMCJb1SqHfzwun5sviGFXgRLM1LoDq5obHkXKueHgU58JxxDSFNfLB3GqgPdjvNn75qFcGizCipiHT6Q",
  "key31": "58XivoNrjNBhwoob1iPqhTk4N6Q4j8jHDRJWjn41W8WxPx9c5BjNz4QgjGEzBWV92ofwpry2uLbNj2Pfp2exaPr8",
  "key32": "gcHtEBWQHjbqRv9Mz8WjfsM8gkdDn8R6uAV82dXUKiD9t8nm9HBKMe356UjrhuCAuLoSNpuTCi3UFiQ5jXzfFTi",
  "key33": "4SRGSjd273ZZvBjFr6zLvucNiJyrS2TREXm3ZVg7dzkU2mz856Nmb7P4Ue4nk1xqTyNTPYFKes3D7aRg5uJvzSJM",
  "key34": "5hjwvcXBDKRexgWvHkhdvt6RD5MhmUjjutrRXNxTKSGuA6TdfxLuG5h8Lpurht1TE16ePs9LiMWgvHWf6jD5UQMk",
  "key35": "4vCPeuYt6mmev9kjQWaLPcv53fs5ADCdV3cYaSV9j8TyZGAqcAHkJg6YqCdvF8V5seY8MFD3ySE9eKpZw3JYsCTu",
  "key36": "3ZpaHm65WnsNMksC542ApzxVxHohNuuPTb9fZHQQnAzmMECx4AaUNQaAg9ud7qx5AeT6y5BcCqfHL5dWN5gWcx2Y",
  "key37": "55iBc2SD2jMaBkk8azosoFX5PAcMW6EPE4M5u87LvZAPGzYSVA2ox4jnqgLG9qdsW6p1rW9J35SqfaD39Kx2Kpxb",
  "key38": "3dPR5aXyNEuLq4BxD7R8aBKBvvHagSDX6o93i8img4JedZ79QDarah3GUnub6LzbVk34mniTDdRhkSF6M1phFgwR"
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
