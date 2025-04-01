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
    "58MKAa8GrnQb11vmTrHLMNU2HyeVVujyPL5q1VHnsPrTSs5qeYz8ss5G39RccpxZX5hVHTrNeAyYW81wcnQtMDZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJLDCLBLaHymtKqeMLDXFup1dYWt8uPnuHD6cUGjWPZt2f6u6HDYrG9CunCGm68hhctqHrwWdALYWCRUZVyrRYA",
  "key1": "4domoUGtPikvbgQLgFNcGoZYmPY9tAxubBoX9vHHYDVbPCpKhTrPwVGHLpChmYGZN3E4az8gT88HiQi65HKk12zQ",
  "key2": "4MzJXLjqC46AxR9LUv5nwfkvVNmbBXiWY9xQ7PQXEtfZPoLFZWYxMZAC1oCxBrCd1WkF3qVd7cBJEA3E96XgqEQM",
  "key3": "4YpS4bDmUUtHpkyvUVVo9eqMcHGhAtCWe5RftbnDTqMo2k3wWqpPH4aB5PCkLy1dFEWyZtgjZvm3Vk9Duiru37BU",
  "key4": "3PX3zN4iJxbR9uasrEkPE26Sg8cUtWdFHk5NSTRUFNF27D4239fwSHXPicivroqFTmimiYiiA3TRuCSJfJp1KGQ3",
  "key5": "573Yc4qNheB6TajtsiDAF7yAXA6iR1iPGRVfjwXpjpPCvFGAj2uQpkPHK2kk3V4WVPEC3kHrCCs9nF3FHrqtupoS",
  "key6": "3rF9D7jAeoCiPrSvUcBzwELNVaBxPM4VzpBN8PJUe1GJoEX5s3FCowN2US6b5oTy4E4MmcaqsPrCLTfW77iiJV6J",
  "key7": "3LRiZCs3awGYnoyxipRa1CJAGqhtcKJQYV86a4QpiJAX89b4EAUsnFojDYvN5RGJVsdF3VWprrkbu4RQNMTNLkEf",
  "key8": "2KAV13qyzbyL1oGEzobxwU4qFndR7x4tP1guKFCXLxxMzVkArRddM3pLqdAWNB7kEmRH32JeL7jFCaZdYSKW7dZW",
  "key9": "UugzpauaroU1fLfrp6w3Ucia7SGA2FoX57j5ZYAfu6EKaAyQeXwvyVKuMJxVDaJYQ19smjyEv2hPPFvLdiRFGDL",
  "key10": "2MuC1CpjJci2Uj68LNgwS53Tp6JYPwgVVBjheKRfy8zhfu5AhRWfV4mZ3R2ew7UANcHnKpijv3vvg87YgQFcpsM8",
  "key11": "3YBFYXKHGEFuv2wq2YyMyP7szsb8caGpibMQE7BNBycXAcGwmBpGEiuLFBqrPTgdMbUUftYoxz5XKqukkR5Q24jp",
  "key12": "Ps2dCA7YVobN1MJW7A775L94FY3Sygxg96bQwRx9cWaRchZu9UnC9fghJq8UePwATFMgZWT5BxdZPzD8KeG1jfn",
  "key13": "4Erb5NrZekfPfAJgUCmt8QnoJJ3WyKNcVAavQ6mnqEamM78qmhSqnGdpN23qyPzLnYTK6xxvfxtdeAsguGA1KJJs",
  "key14": "kZQyaugn78YrEEXQVb6P4qTeyuhoANX5hxjv5ce2wNPMGgfsTmiHJgrdFo2JhDZsQT6hZfwsUCS4v58Y64b8y49",
  "key15": "3sD2JRrwR9qLv9zxEZvnJfhnRESkHxRj7t6DBqJVDcBzwHXWzGM3jXRTttpi2gSKEtCQttWAKt1d6nSgRY9c497b",
  "key16": "3hJZR9gFoi2Kvt2f189Xwd6vtT5VMxgVSNGXU8E9ukQ23LdC2ZmDjvaQBd1Y1NwCVPPcrgrtBzr27xDUNZbQHfwn",
  "key17": "L9tidvttx6vgpDSvVnqxFy3sRKaVq5aUkg1kWj47N2XFvTjo4NYACxQR4ZxZh9TWDzZpzV29LzbDsLhXcEogDxr",
  "key18": "4DAkN2ufF64D6KPxzEGaxKBedFtThVPV4qvWpP2MQqgLxkVb2MAgvA5wZYfQ4xT2WyUytJNJwPgwA4EBuzSJAMC",
  "key19": "5HhXRmC8gRMdCugJCS6VrvJuCYSsjBtb2EtGwe1kv2H76fPiRXw4ubuXR8q3pC3ne6zZd4PhbPXuLD5TdLs5dR7p",
  "key20": "4HGgUzQyQkqX4R8tjF2s4cUr9Sdo1MMEzPanN9DhCrqeb656NwcMwSwZj7CXAbNVdGzvaRtiZrtaw4vHp1V1d6bN",
  "key21": "46z1NYKk5YF4WN5vYoDzRya4pRYpW7Aac8icGjXVvq7ZHrkbLMNLGxZJR9hxCS5egQXXd2dPNXezGR1VzBFDT7qR",
  "key22": "5jeyLz3sJPZonrgRx2zc5XXsTsxQuoborQiMPCTwvybaQQDshfi59bocrNvkesVBaHT7Am4qmaG4Mj2uFq9XFGRC",
  "key23": "UbgYw2JwWnRVJWYJzvPRiaTJ6omCUxmxzFKXnisHc3o3eWVa5Srr8UgBFptatwfxzzv2HZeq9zdT1eQodBrxVki",
  "key24": "6N6VgUEAu2Rn1YtxwRoy1hJYbmPYVYJfDpQzP5KrSMzERmuJJDdrygmYWC88zuS7TbTb8DTpXScsbw3hXmc7vSL",
  "key25": "22tCWgEU1S1TYPhTEmxxWamBxA73xt7g9tbqrkZK5ckZMH1hZukdPWHG4emx4DadzDzurS4Ubc1yqjPZ4Nz9nFKE",
  "key26": "3x7tkL1F3EYAv1qodUJqymzLHZN131piHqK9JMoyrZfeX3ukrov35reYru621AnaSojTX3UGWA16a37suag2nrxk",
  "key27": "43Gg7DhmQu6Rn6We4yB5mr3ySeRZ7CUryurzB3ftUtcNBTLZbZG82uGswfx8RxZxezWMkZYSKw55LPEvDBWT2wvq",
  "key28": "5uD9peLiCKGpymsrBz3bXMKCQVF8YdrasPa6gv6uD8QaAetapTVg4UQ2vp86MwC2oThmLoV7KA5395Y9tqNbPWKM",
  "key29": "3Pmi52EmYS1RAD1R7k9cMmqbfX7q7bh5AFsuH9SM36zmGGj5jPPgNM7nZf51Q8CdzrRj9rNLwEmxesa2ThTLeNZm",
  "key30": "2iZuMkCABf1HhPvBb5FfPpfyLFrUNMkiau95auK3tLwzVcZFYP8cm15kjJEbNko2S9N17THCJ1oRf6uodDtbCyWn",
  "key31": "2NMafhNfoXwWDsqrs2ikinf1FR3cvDarTQd9CynWCALC7iPSqvtkaahBT6pVXS1LE6M3ELTUUEXxXyK5FhNaTSdG",
  "key32": "3h2GueT9rig7jeTBHnNJaU8ZCg3uMyPe9pDhLswx7Ku27BLjfFkFqUwuA3CgBcDGQNfc6LpciFiqadc9vsj1b68e",
  "key33": "5pjyD6Ec3ce8xnEUL1uTTtbcsqHuPFuP7R9VcsjEmn32yc1YqP1FWA9zFzJq3gCmWtRBBdRC4FPUtkLDkzaiJnXA",
  "key34": "5cdoPdFC7y2dAdQFxmcXpJem9FcR2HuBAn3dm34xRNoZjFt6yEu6EYDBMuc8CLhc5FPnWfLSuZ8w7c39jKBaqBeb"
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
