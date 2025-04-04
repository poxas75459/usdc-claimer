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
    "4G661zJRKfzEjDTYs7TAvf6gYsxn9fV6uvLsioP8eoxCG55N7EWQZekWwDS4Q7fRdJHEMYRhxkbyad9D5zWoo37u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41M3Sgz9boT1fdZ2mrzQnX3F1QD6tEXkdbbYeq5sEU4myXezQ8Noo6Rt5Hhad4Bpf77SX1jEsqy63W7NtAuN15Qy",
  "key1": "48WHshFsp1siUDesRD6d4QUHni6Vs7bnfacUZ4GcyXEo78fW1yqp54cqaVz49h31Gdq7KJfVEGUf9MS41XL4GXgj",
  "key2": "3pPf7Ba9dL6UpFgo5gmop5mQEr7HodvtReByMoVQ4JxeQcsQrSJtdXXEmirAHUMtpPQhXzJ9iQz5k7emf1Qy4YGC",
  "key3": "3JepYZTdYvcaUHbKPGa68LyKsFjag5zJeTFEuV2wcriHbsqU4RV9EvLkTN3HPgwahhT1MygghkgcR5R67ph2Lyhn",
  "key4": "2X4zpzeACXNvovAqiPBNm8sxLAK8aUNLD3u5aBuySEHvyUgmqpEw7mx84Ja5emQyVorzVPgFzNBzoKC1TjgcypUn",
  "key5": "21uEm7PguvajTJqZaVukbRwgkNvckU6dJL19k8manogRxvwZSFPSzrMpiCHL3MZhM6mxyQMhhiBy9WRJrKUawWwB",
  "key6": "a8FPriEwSx4h1DvJGgYXedu5UADL29JeUYWDPBt7vHYjRWPS7kgA4U11r97koy6fQzrHmFJFPKKkgoopkZiXsbr",
  "key7": "5TxXZ51D3tGyBhbka88S18pnKuiu9GKiyBJTFzHXLyTuRuKqqD69NGAuK8z7bippzww4sKQEvkTQwetyj5SwXMW8",
  "key8": "55xthWs3fH2NuZ6TtTfPjyJYfWjTkyYUC6dwtyzKNG6T9gWRL1m9XM79Fkre7CTbsghwqqs323nNw8y6MssnDeSB",
  "key9": "4QZq6XHsZmbwJfRTmdBqBfosrKTfm6z1tk1kfLXs8rdAeaj1H2F9KkN8LWGREC4M9kJknNdtd7UdKyAZMzco1fzH",
  "key10": "2beiy8LwJNnzzMHQoYSEK7HGdyn81XF3qCK8ggZrLK7SvzXHQ2H6zCuLKH17yWKDbEjRLCu4oVyqD3JDDhQDdeCq",
  "key11": "4bCKfRDC5GMDetyKojZQuUV45sA7ZihiQ1772tvdYKJKcEemCEnCWexnqHZXytSk6p8i1oZFHxkr7L8SgUkk8MKo",
  "key12": "65vysiqJhv9YYyTeRGGZZGTEunyLgmJhL8WvuCHuZkM69jUgZbjsfuh7nokiWjErD2ZiCqoU82wRAfmXbQDYd7rC",
  "key13": "4GGkj8eD4AEqFFQBpbS7Vfo9EhyFJ6mtKke12xh8Bnw2DxZW7kgLM5ZygttZfiAwM2ttM5cMACSdftEQkLKkeWzJ",
  "key14": "mfuqaYsKMAjQpfNbPmnooWTT5fYm6EcwPXJt4decst1TZdCgaXwFdBshaqhh51xTFWvyefk3CRrhuhjfoFzHZas",
  "key15": "4jbems9frokpsL9PGZdxPPksxaMBC1cjsQAt66Kc9mr9YW2wHfbGY64RyXGLhi13jtDm6T1Eq1mftFrdCaZK9D4J",
  "key16": "3gM1MtgWaLFnP9E3L5W4H4kST3yTXc83uoerpkJpg4C4AC5iYq3mXqfW7VKEr1DzDm7EEJQ1XCQn89nKbecXkHn1",
  "key17": "4Jbc62moAjAEKRzKmZb9yq6B3xyTfevkTdGYcujfWQM1WZxRXpUm39vSZ9s3GZcFhxykLnirEQLTtWN3YwKumWxT",
  "key18": "Dt8tfSqb3GgmRPJFhkNPcJgwVcnNfY79HeuCV9YWYwD3GyTmpgCUUv52oxqhkb3rpsqPJMF3k71ZLQ63ZHue3ht",
  "key19": "211Jrio4fhsJPVRYLoSFWmE64Tbena3q8bAaygu8Ga1Cm38MQiXJ6GQ3AYThnU2YvZAH1N8R8UFZRs39MnGsr2xu",
  "key20": "5tcV7WL4vjdNo2r4FSHUe3Lzi1dF3p52YJuUfpEar2zTf1rrSmWjLtibU32GRZbfh25J5syyEmPQ32r6aQKmpuYe",
  "key21": "2MTJxixq9Dw6dwDSkvDdVCQd68e6RXVTPRno3cC8JhZTVH1oLMn8tqRd1ZdnWPaaAXpJu5uuCEgAdrXfR4xdRKNx",
  "key22": "39GnvmthYzDh2ehRva13LDRafGNUNyDqjXkfoKmdLeAzwgNpBWLokFuBJQ9c89M5wLE29FRZw23f9SbuwiBkNkSR",
  "key23": "21AVrhL5WJqXUcffxVC2zVsNzQj6QDLqwDqcsHPaSsRtC6dHVjxuFNzSXshk8GqGLNdtdXUw2LXkYu8YP6M6Dtbh",
  "key24": "zw64SQn6Rt7GsuA6StLZkGzRsgFmdc1eBiWM8vigFXPbLRceUbbGrTwZdMLHnCcSVh6yusuej8uJU7ikpaDfc3U",
  "key25": "23TToDW9pL4XDJcd8nuVjbMER17U9Wov3inLERoW4poWaBU3h6rK8btJ7NoV8ZpBBFxfHY2qZAQCaBJHVuqNZLYm",
  "key26": "4BKN7T7GjZuJeNc4hKEDpv7qsbSejNWiGNzVfEbzphckUB7MacSC95nWkuDLYmLgiqrGNRf7BeDEoxW5yWuBHmBu",
  "key27": "62EAF8yCQWkDa52Cr6V2HrM6UkXYZAH3J1afz4LBbhAuTZVyN7kHcDkbk7XEJynKyymGe62qsKuGi4xzqQqSYS2f",
  "key28": "3k2JWWJdjViHwiXTeR7wfnmSiqb7K27rYNwLUPxZhxm2po8CGsXhNKJm123zuNtCEqGZUhXRoRWLUvnDMw1uDmhu",
  "key29": "2sNW8ZR6WhuLMwQBTDid9iHkDctiDzy4BLmpCzaJDerpMPChZrbNCfuoynndC4ABKqpvnNrBDbv74VqiJ1t57kku"
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
