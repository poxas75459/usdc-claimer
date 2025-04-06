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
    "4d1G1XT1Y8wsdanjsCF6jpmf3uhJnUAapqsNNLtL7ggKhxyDZFmkCVKjE9tbMWHr918NETmpS3VdWpPG6dVsG7iW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThVHrk764KJa81oP1KxBbriVG8bAzL5ww5EYBCS6nq2dJi6qYF7TfNHnievbR9pvNNBWEf6GQtPmyyjysibpDSG",
  "key1": "3EF4Ex4BgaCdRc1jC13bg6F2c8DaQ46VHxLmahUvC1tPv8rVWyRaCWtVgn7ndLkccPSmrz33Hb9BLbBdyYCo6o9A",
  "key2": "4T5vpSmHEeKP924hfXjE3TCqbisi1DL1aBNVgNUJLHtjNUF17M9KycQ1PVr2AYK36vrCs2hAx16qGPWf8LW782Jb",
  "key3": "2dMuYQWoHG8mB4JtBQMgawEburNDB2YzUcTYqCBtAHJPfaH1k3ju9RQucpTrzZGwtKzKeVBHEoKK3sm3ce59ikJN",
  "key4": "5JTv2x6oHTdEv9GdxVug8N9ehrFCRo48KzvhHJAmQDZyddx71jHydEyA27gHhW1AyJkq1NQwhVw9YAMojF5XQjaw",
  "key5": "fj3NaU2nqzfuzc88TW1Vb9MXN5NtnGZ7hm923oR8EuDNDRMvCeEa6r6rifrchHy4ga7KkaUfnwRa5zXSspEGQNS",
  "key6": "VA4r9GeQubzBJdyjYmQkNdkMzgyi8gQp3ogmAsrvZFMyeKRn6fiKaM9rBUL6EyBLKwWxgTCRszuqUyGE5CdTBEe",
  "key7": "4F8CqiZbYivjYqSrFAAa5qRUkQkm92CamrbRebdo46ksjAM3KT3Hb5Tcc5XK2U7ip47xYAKkfpU8u8VqgPLbxu4k",
  "key8": "2SBBHN2SeuU5fFcU6pXvJsptEvi9rXGggPAeQCKS3oh6943He6GpTKsygtSxoPcQhDXKsisbtiSz8VsquSaaGesT",
  "key9": "2BjD57HPSvJT32KJStg9maVVdK9LzXeSxAQiDoo5qmgQx8aKqcFjArcgSAZxEQH2pPfcuAYvumMr3nTUVowbBAbY",
  "key10": "2LZKJs9c43m2njr68rQsSFetBEPZMxWhWx4rUoAVQcbEywJmiWP2abo41wKuaGvajqTdGRB8RgVjr48iNwEMMCKy",
  "key11": "5LZy8USHZa248gkaYdUBdXB8w6H53PdmL4L6rnnSKY3UABX9uBfByNGCD1uFiyEN93xD4yyw7KRWHh1w1MsEjQd8",
  "key12": "4d7FZ2AVQUtecd9MvHT58NYfUPKR55m874dziGfob4aKFz942q8je6ddwuGGKbdbTR7UxVKQKBErCCZhUjD19Mbi",
  "key13": "51CikVyB4w4rMGVWA3y4FdfJaaNCbXNzKPHJF4HbUNcHV4jWoThvrEc3kCLMjxEmP43G7ypSTZ2TjjHp5PRKncdt",
  "key14": "2g4Mz2R3cNegBk6bLBSPjowLUpwaa7aP4ZQSX43mj8UKmVhrnTbfKToF8K8jrX2F72GBmvKjGuWrrgeYgEPfyeSU",
  "key15": "5eMiPCt7kvW7ZKduesfaAdCkJTFHp8eoeDPaTsWfESmQfgjmmSrsJn7QACKUzCaMWKF9HmEvdznr74XHRmjWSqrw",
  "key16": "31Q6htQhrQTGGGk7kEK2bQPPpDUnX1e3LGWgNa77zikPEaib13ZrzxcBzR9wNUazjAfMnTQMpkpLfxq9tC72RXdx",
  "key17": "4TwmPr3f9SgsYSEMg5YZRetRr4uT3HqMGiqaApsHD9UsUouv3vt5aofVZU4riqdGcisX84JFBkLySZ2CZ2DSF6bj",
  "key18": "63bev7cVaPcLLrb6tUorN6d2UM3R2zmYA8p3i7fA996vt6e7WncrbnXLsTzqndeTYCXbYdkU89Smu5ziSpWqs67Z",
  "key19": "2tXe3tFUWKTngacY2mpTBE8jzsUkhDwqdmftzMH7cDCvot964e4ERoNuiVCwExsJzeQHoqb2jRFQy2P4YA6vQ8Xh",
  "key20": "52qnBdtu6Fi2752sWCX3n2kqQsD6iPKDoLncuB55tuVc5Mt5xZAmUpKSgvmb38aDFDAFz7arNy724td25WiaYcpP",
  "key21": "23fX3DjpszR9Fg1L3ygqKpWa5NMNCvE5PVNWRHdGZo97V8hKspQaEFJXXZYgZUh2CS4duUiHXaPM3vBp1pGCdicX",
  "key22": "5EP3tcjiEpwfWiwk6kuSaGLKNaRhvn8H9QsfkH2Parit2CFA6pPX1Hj74iL1ZQaKqLWCbfBaMugtURauLM1LjcyV",
  "key23": "5Y7JMuEWC7SCDH4RBpbABYVNyizSj6zVYyALy715b1L4X8SJH53vk9oHGK4Ddiok2odpHv7moboCWb7XmxWLc6gN",
  "key24": "2sUpMkg13GiUXJeWYrX1eVup34BebDWyp9HGunRKi4P14aP29xcbcbkdVe7fnesr7vPNeomx6oRpn52oXqm2o4QL",
  "key25": "25L1ZJ8aDEH78fW5XTCzocENPb6Fxg5DLDHhqAPzXF4BTNP5HhHpzZ3H576QF82jGkEMLsjYP7FDQwUfvdn3Pcbh"
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
