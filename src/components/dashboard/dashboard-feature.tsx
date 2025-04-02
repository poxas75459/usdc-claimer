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
    "63cYMxV1Cv2Hqsxy5mRrneGRg3uddHPu48rAGK6WL4VjqCCDku5TYWqB9e15JAc8mojAjSivUtjtX8ubk4rPhnXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nis6LDb1DVp3nRsLiWaFMAHavBMH79vneSP9Ljyw97QdGbFS33Hzn9Gv32jkxqw2pYhgCxgcgCQfcj5hsgyU4gp",
  "key1": "4Sx7Ad3CB7Kbyh8L2Uf3d47egpEbSqEQdnguP6aJoKEqjdhXPiNsfPjnK1vfym8oT9R3KC9zwSbNUVAS6Lr57W3r",
  "key2": "o4GTZYs85tUQYNB4V8ZLSScKbGipiQwCCnFBY6XjuwrJLjNZyyeSb9ztdDF6AJEkdGUiTWBMWv1sLfpMtdhx1UZ",
  "key3": "2hbJyBZs9pXKDkj4NyQf5EcY18UJ2oCt49EWqpv7sJWwjZF31EYfJKzTKGLinSUSTu1PQX3umquffWSV5oGyXSqQ",
  "key4": "fzo4DFVnPEukd6Xmj64CSe8dEpp7cTTWMWgWcPchKfqVWfsMxuKzpePBUgzD8tAxRhBgUuDZ8GHmmuJkVEUyv5x",
  "key5": "61o8YGukxfTuXh66gRfsBkdDTxpPSKv61cEr153A3dRNBNgBrdJAnrEmP3Mr44GtN1RLqRzjtidDRz63Xw7GrNKA",
  "key6": "2nM2ZYZ9N9KVCXFq1i7e4p72zAUcAkEgVSZHCmsxQhGnxctFB6wRw26YAGtMTuSJjwvsLA1ASNsRCYYjvgX3zbdW",
  "key7": "2wqAxuubhAp4aJjCbn8KyzyQnrwked6qJPVqSiH68es6x37G54yxMHNFZVPRpwvLG9z9UEPnwzRFvWA5d57T57Bk",
  "key8": "4ESVZQXj5qF8PAU7EUKGbkuggNcPYm8hKWGwFeVNXyCdrbB51WNE2KTnmaUwTB4G4XiPcGA4YZxBMsWrxUuDbQkb",
  "key9": "3iph5PvKx9GvknDW56TsNPcoKYmHpJqkjccep9bGyBVmaBVzSNjHBG4BgBKigbiCTRU6Pc8z7ZMgxrEPsuukMkcL",
  "key10": "5Vrw7nEkFiNZGbr96qjMywPA1EfGxcHDyb5MUU1cAmU4UnHA1f4wTamo7JFL9qoB9BJ69AAA1iWL8dBkTNb4kv8d",
  "key11": "3wy8rSpfq2DH1ZSi5f34C1VTtBs8akz6WG7548iKZz35xittfUj9tcPUG4UfE6QvFGMATWPPZtM8yzq9uZ6h59MD",
  "key12": "3nPCjbtGYxstYBwgHUcN3ZNRuUHWAXRxNdtezZJBhduTX7mkZkQ4G464AMGsxckYKYDDWD18C5PZmn5enNKYibu6",
  "key13": "37nkMbRUEqXBrnbZK7EZBiMTdPcBnP7Bb1zLBd1sAPgRthnBgKoWL1csiFKy7z9pBtFgpJEsYfU7rExZoG4sHDjL",
  "key14": "3NMSxQrk8zLUNU7RaAiSL9xa1JSjUHPChs58ZJgSATtSaXsk6fzrWHUJ32GY7QxSgn1G8gUv4Lk7mhT56yFuS127",
  "key15": "VqhtmfKmyjTDcqQ9J75MswJKnNKXzSXzMB7vHJN23xPJLTLSnr7DNSmZGQuB4yoMmQNPa6QX7vwoY5jCWPGzbd8",
  "key16": "4msj66mpU9svxiH2gU5FkqGt9HSnrDecgESAwvzARigU6NtSBYSyi8MgiAJJp8whNEw2UsVA2Qevj68u7jHnGtow",
  "key17": "2T63p6wcXqU8eE3hVQQyPnvxCvAhHCUbmbsZ1idpNqsLZwjj4kM2mMcYqBkrs9Ar6TXjRnoVZYdR7bBmjvWP9YiQ",
  "key18": "4yKqCb4xLXEiGCYNvoxd3F1cqwhBzgXxizNr9BmugDkjNW5wU9xeWto1qPXtmoWNSHKaENUkw2gX7bBqa6gAcFrz",
  "key19": "3FcvVYiTCExpuuKo6VsiPjiaiiqKqHBr2XLbPHnvyMxsx3HatdGBMmczCfadybGEVBhmoVqm31XYpS5TJYw9Ty6Y",
  "key20": "4C7dumUkXPbr3v71zZ1S6whE5t2TomLhbDKXVgnA4h9BfXJrdhUntMXBbcUqFCg6DcnXDQCMfT1TmuQujuiU7Mjw",
  "key21": "2hHaftM2NZH6X1RDtWmUfnZV2h3H2bAnZeyN2WSm1wUxD7kWHaV12T9jJRUiiDZWYTQ8Yx56gtGavaSC1RYtLEk8",
  "key22": "56MmsdPdUSTSP3TGV43awuBpMkbsFCtpUVkfBLt7Z8JZFRxK2NxA4v9ZCoiF7iDyr3D2wkPHuFGDemVvo9bPq9Ff",
  "key23": "53YmKBNJaUfztPK5FBRQ6aaAGUR5xSTVDxQQZt8seXqiEu9rKBpnqRxWMQJRU5mnGmCLkdas1Lt6G5yBAjLnpAQk",
  "key24": "4t7jHDyBMSpxZDjqaRAuMoYf1XKs2P5euv2b2FC4ia5eAL8jmNrw2Gs5DLtxTzwpsLxKQeoApwunpiMcyHDSfCyP",
  "key25": "uPcFtrk7VasowYFgvjwKPhhqnK8cXhhUZkFqfc6UYMkpBtoth8529BrVZ9AmGTEHF3S89kAmz7qZ5uEAxPS7BxZ",
  "key26": "n2nsdr4Z7euj7KiBGeK5n9skC9i9R9eZpp1KLntaUBGJd1NT1w82TdstBNtVQXBZXnXueswXiWhh8K5LSkMweVD",
  "key27": "3ENo4R4bcJYzLagts4K4tEKWW1BsqSMjF28Y25Nm3QYiTyLiKQqLKr8SNnHezBxsTbW17GqGXsBxbLvf7bUQ6vyn",
  "key28": "6VrhEVKYfvsYzn6VS5QPDkUN6VWqJvk3zoiWCAPvPNfeRQTQo1ZLcsXq8QxTRieo3BKZL3M2hQm2jCgcKxcatE1",
  "key29": "58TzdNZmV3uLwhRQL32f3uMBXhz9QyoW8wxs4hB2z6KFYztH6C3vBUcaANfeykLY5JYLDTuudDACU1cSwEbvZqgQ",
  "key30": "31ST5mgFb7F2h4ft6Zqg37HezGHV5adUgwk6euWDsU3fgUxGdUK2BPJJCUKPF5SbdxjVj2yj5gC7ytmYNJ3CXtsX",
  "key31": "4VLxHpVmDB5ba3j5MyWhpuv8fgBSvLWZDrTrezmH51smHPkN3MqymPtpP2A9oydWQVxje6biCpPJ1ikddmQ5bccw",
  "key32": "X9kx9oZuhP51F65WsZXbyQyMEGKnRZdVWW9vqhgEiuxmwAXDFm8nSTtwgNXUqFmMJREEsvUipdeesuFHEvFbzCE",
  "key33": "5jYTLyPfY9mnWRGyE4EH1ET89YxrvYieLaU75ukkuPnMcTXT1Uw8BzEjLXnEf4mArrqpkYdN43zRvUKYM3aRJMau",
  "key34": "3hVKiJsjfVGZqpFRSJkrMfm9Su4muPZWeG4WK98kiSP6QrJb7YYCvfjFaZzE3mF1xdxsYydvic5nCxvKvE6cbFtx",
  "key35": "44ke6qgPGjVJejn3kBSst1Vs75wmfYV7hzicNjJD5FAHhWrniZbSCHGA5i8STxvMjmAP3YMDwxras5BxM9SUga6E",
  "key36": "yGDzTkZYBoaXawBk5HefSsjmDSkbPpwNYQmuQWJC6U63Z8oTiWQNFwX3T8rHSqDUQdQ4FydYUN778kTDUgg1egY",
  "key37": "yjhYMKmb5RGpkkyBzyvMWowRU1M8HCvioGv39ZeEraAHpWD5cp5sJ4oNNphnoZ5BT2hvA2hg7tLbZdoH914TBbb",
  "key38": "35zC5DP8yxPef8RUz5ok5RG6xbWErBsSa4Eif1iiXteVrd7DzegxNQMxmRVQsLEowg9mbj2wWKUvrBawdgRhdCdd"
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
