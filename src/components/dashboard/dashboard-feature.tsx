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
    "2WjiP8AtSeDPhXiyX1vJ7QhmotSFzysaA3AsnTo7kD73y7grhXDmgdvCvTBh3yDqWpj8v2KQGJTmrQqdFoJwNq6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRKN1sUuWLur4LX6xR8DRBmvRtuC3h9Mk3eMsPfQYnXTVnMyCsw4F72BDwRVkUuniLsz4NPyRss9rvMdii4Us8J",
  "key1": "5u6SuKn633EALpq5G5i3cTFoWTqDXACXs63spUEjiQQGriswCavyjzPVZSmHJpmnbB6tXGbNzGaD8ybTdsRFPHkA",
  "key2": "4qQPGvXZdGL8YdKtWB97ShpX3n476shpDPv8RuPMbk7iTo2Ws8uzAXUYFLwaRe9cymJFB6BX7GUJ5YMf3TeceSEK",
  "key3": "3qFEDS1oXwHPnfai42cQHqPhs11dtyAw2HLK8RKkdyfrpPSaWr6WFodhxU7E6v171QXswtSEbTsp9VVzc5qhXrL",
  "key4": "2nfzjXd6X8gbijV1DQqyf6w1fcbGnTijtL6ebisYV91pqP1suBAkH3Nz1fV2NGTC3xdfzxNxrzddxT6AKzRpCECU",
  "key5": "6VG2hc4DT1cv33hG5EGyS75vLBtPAB4FifRB4npZf7tjoXtprZenDnDYC3BE2AYnNsKcRJPnmhZGtnqJUSRF5VW",
  "key6": "5j9o5WPbHH8qJGeTUZ1oaUVbakS6y3C3Rtpo3xgbRi9SEpGerHDw6TQUf97roeYwmbwfdLAu9n6MmwtsAAtcb3yi",
  "key7": "65tGjbnHr9YjwRtWSjqzvxwyBfdVUhGehy7jB87vNnaE8wsn2ZYMTt2WTkjtFeAt7GD3QSsjXNqCQkYgm9RSTiVx",
  "key8": "3DWhvBTTtaBf5MygyAW2SAuvN6xGLxWGJDkDjXE6SLCs86N9NacfoDeNtADJumGfEDvYXMV9eRuygMU6JoYiTY2t",
  "key9": "3FmqfSa32mjJzKgwY67RAx7p6EowNCCVSCxsdrDPrMWzid5NdcfPu7w722KsyMBu4SFDuEGGoFhtKunQQYhCMPSk",
  "key10": "3wm9Uk7nRLzcnRsp4UiZcVZEDWQ9EjKPk8HVyuMH835x9nfy448w94Y4G4Yaak8akXjGMZi8BgBVuHE6Q7xp7irD",
  "key11": "9GbrC2h5fEB9CJGpmudpYJHsXtUADohdhVRKU2XZKxczEAD86KF5UmQMFofSSKfCg2ZB2MvGx9qWUJ2wD2RNAtu",
  "key12": "6YnYd3XZurDcGgeHuutpabDxBjuDGgrXtkvh9ZaApRwPNSntoRzmp2iU9S3jiQccPvgnadYmMYzGz6Qw5cf5Ue3",
  "key13": "5LPxFtgeBSxk5Ln2ijrUhJh1FtRQwBHufBj3V2K1etUDPCg8yFXzZ6zixML7Yx6hrDgsdzMApkgdaugxp5Y1we52",
  "key14": "5Lyyg1joGa38gHr2CBUT21JcgV1UHESrePwRF1t8kqYZyYR3wk4MHri3rh85k5XKbFPb7RzH1SQ6MuUpRQvCXVb9",
  "key15": "291cuoHs2beqmVWtTDNpbKs8igx7pyagxMK8DsuF4w6yPdmy3ivrk5ZDeovjcn2HFVTMwHfX5x4ZaWY75kNx3qSM",
  "key16": "LKDKwqD7BmkBKhWuQySoKnfQ84cgmwh39VZ6AjijuQzU9scvH2f5UpcYXwocDfJjuRTDNXCSoKxBDCVEc2tDZui",
  "key17": "3ZRvvJxXJYaasbAb2XDX7ExU9ErwDgSFofbC4nKzo4tBMB1EpQGBwisimQvhw8558jfendDNgK5XLQNShEdcP6uM",
  "key18": "3VTcyhFtAEDhes8ENvXheTb7WkqRXMjzJ3dcoZi9oDjDAVHz4F8QzLG75FTAfaSG4Hb4HLzGYj8M7mtMfuPJmmmK",
  "key19": "42V2iC6nxXndUshBYJQewvzecoC34fctKLGCVxsdA2qdVUABFaLhSdisp4nvFMizeLXnUyWQJHz7t8A3XJQkv95X",
  "key20": "5aFr9yopYjEcgEY9DPWqZiZw3s8szposk3i7M5ugCUe6z3FegJyZVdQSm1dyWx4NduCrM4YJRDR26wvCSzKuc8jH",
  "key21": "4mfKEe6acXu18kPjJ1MGcoJUhXTHXPo43rkDMYruUUuSsiStME856DW5aEPaas21xp5fyvxumYQpYYvSHtd4tewF",
  "key22": "649owXRFgwpwx6xDpPRy6FNzuztuKbZBTZpAhzCVyfWGLRMXi6DqLyeqJk2BHaKBpDXwdJHjrunPmf8CYq7vDPmU",
  "key23": "51zWN9ySufa522nw3wXK4LhpTsAhqx2eTzpebT5fMLok1cMeym38dCiG6nrQgrGMPFon1K69yqfbxhSfRyBTsV1f",
  "key24": "4HjEhfeTrxHsd98UA6E79yde1t6zKgUubktNEyHjKWLufnALao7dYoCLdYNodM6V5eijsoHiZCkbbLG9vjYh6o2F",
  "key25": "3d5k1wFnC7LwafC2izszxNi4WYQF8J7MdT38CU1eWG1UQaRfHn1GVWvcXqMq3CSgD7ZKkEQjK7mcHsVtbt4xKg3e",
  "key26": "2RzBiUvRgQFEtg4PsTJUnbS2ktCKopQHNPiBihiBFPSMmsHc8gEnYmJL8Zt89wW36zUeswbw7rDFsUB58uxz9Jct",
  "key27": "tHddkCSg66aGeNpWjFzzcxijt8DHT8cVgd2C7kmcCA1TcVX9px8oHdMUWr7AutkQduxAZAxH7Dt5ba3npfNA1Bs",
  "key28": "3uj8CRAYFR6BWcTBCDs48dEoWakoKZsfQeoRJuytAXpd3mFkMjU6pfXkiXaq83qZNw3eKDwkGBcQcArSDsx8vED9",
  "key29": "3aCy9dGsMTDVk731ndb4cZyqQenGmMMW1zdWSoKr4JxToiQPuN1zFtddmWzHhAaB3FTHZEHD6K73TkZgjqeBGqK7",
  "key30": "3WQDs1HfxTchR2fw7uxpG3V9BER9wycsMDgwFxKLzA9mm9iQuZHzUuVsitsEc9jixrS18CtBh64B8xk7ZBWNYUvS",
  "key31": "4ZTzMnDz7mfjxZms3riiLqEQhTb4TXK1cYKaXjnubZTp83sHNyyK554QPULqDgsw2BicRBcnTfnu21hkrdgTv6hF",
  "key32": "5dUMSxExvjNvc3bJisWcJsJuAdk415yJdvxVXQhi8NdbJ7HMAvUYdGwU47PXMCxdwR5zJk71NASfbYY9TWUkzSsu",
  "key33": "2ZyAw3BZyUqJsWkS21CJAuQaqXPGGap8fQUCFC29DhsZbYuv6RttgaeKPtjEJx6KP9LmHpMJQJYW1LEXJ6S8JRvs",
  "key34": "4BkSaN81KabwoZTx1gsCogxKjSWTdkn5omPWNnRW6m4kiBdfCm3CMrMTsUfGcT9mrbKhvmNsAjFTrwQh42FSeqkj",
  "key35": "3YSUHvQgSZfWthLjx8cFieJYAbEArEvH83QEop7BRGNx97cMouduqxkMnekgywyM7JPyKN3np41UQsZdMQQz1BxP",
  "key36": "4HbU9KxK3qM8QwQGjYexNdN8DHdUV6BXTq1z3VMjd9KLTGrbmfWyH1GC3gRrRW4Ep7HxvWiaVsweccpiRRexWrrS"
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
