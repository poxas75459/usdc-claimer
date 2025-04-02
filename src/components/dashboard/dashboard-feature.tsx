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
    "2XgDwT1G75WTJfVXuVHKL2QvTPj4w6EtvPPEboECGhR485U5KUswcmWtDPHE6iUsxNd8Ked16BsryTTUzUdWh3g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kTpeouHFZZ2NUL66YZqMk1jC5SbukUwRVSjwuLjcLWFixPPAy1Kqu6CTewj27NZA9d4K8R6p8hwWAGUXFz3XqUu",
  "key1": "5nbPHMdeGuGzFk8evcEapK9wmVgtDzxQBm51HcSDFkaRF2vgREVyb9daMuWQMre4S5goGsiDNgdbKtyiZfKWjxts",
  "key2": "2txWBRc8yH6jU7UEUDThokLakqRpVdPqHBZn58LgqVp2pTujJWjQPcMfEMQKwr49NcUxYmbwppWbYSSiWBJBarX2",
  "key3": "39wCH1a9rPopgrX7kmWhnRPEcrNtszkpi9CHsLYuQVCy6K5E59ARZZMe3ck4UaFLv5wEEXRT7rHLkTdRAi9cYydN",
  "key4": "3Qsi4sLJCfSXde2chvqCTj1t3QtRmM3fpx8Y4VUtxFpi3LMXjkF3xiz5rxahZmWy29ctX9vyX4wZ69B75KmV9AMR",
  "key5": "CnsZ3rP5S8NxNy8VWLG8PWpuz1SuwLjc1ejUktFaZUG7Mwbe2i2DvyL2vuaL7hGXa3gjJQxT2G4HafMo6y1xhaL",
  "key6": "JsPfNuPMZyrmUva2ca444dmnhKkfU5w7hton7f7o9epJnU2dmDuM83fGgfzdfqheFbbqnWxbouf5w18wm6fgcEo",
  "key7": "K9cUbmde13PKv6xUpNaHAw3pWKpMKmf9QiVaFf2SAijG42V2xPbo4qCJhYZQdvqqC8UeDj6MeGqyXrFVLNU94DD",
  "key8": "2BPVCU32PB8Xum4UoMDT7CqE97PxpXPg38XVp5XjoTWyvPvpvrN3PWHRs25LREqm5ZocBQmBv6XJV47HEZaZ43EA",
  "key9": "5XjSS2zHwr1yJ66i4RMuBMas6X9xbLQc8rm9tnuBfLyjw46qBdYrG9pvfdYTcMLV2xk39YYqjhr3HofWX6Yr4SQa",
  "key10": "3BG37jEXamxj8DGzwe84K6tBDJwfK74ckBgmyuGN5ak2yZpkV9KPMS3WmCWxSjBgj2A9SR9urjpPBS1CVWH5Cakt",
  "key11": "3uGhfnKpDP8hJd7mZcjdeTrFMytTZH3ikbPeCEG8q69WvbEJze3WE171roQN7WmxL17nmYr95FbugMQT1Nb4r1Zf",
  "key12": "63zRLjuuSvfjWmGShH4t9FxvLeGcigeu64UJZ8fPUYY6zguag64W2kZgA9k62M1D8KfPrGRBhajc3qPVjfsdPWjF",
  "key13": "3ALANuEggdU5t7myrKo6o7AkmtRMU8Up696Q94QaU4ketmwCLGWhjm76aJob2ps1wZqerykmv7amqK58Rufmeq2d",
  "key14": "36JmTFqdvp7vB5gzLNYQEfP4HQdn14uzcSp3iJ64B5FdmYLB5SVf4m3srXB4y4myNsfW93RSJr22pZPBj1DkedAb",
  "key15": "4g7ccyjGejGefKTPTrciQjw1ofouLLrR3oU3HDhRQTdHPGzyHaLbkTreDeGod5zhQni7PgRUk3ZaGrmw9RxR6oyt",
  "key16": "3Em5VvPihdwuUdAZsX1AbG7duBAWJ9QHyuUNi8m5WyWYB2WGv5EA38zvqUcqxzPQQYVEcv8WwdoCLwbyW6Q9dcDJ",
  "key17": "2E8RqtKfSAimuQtT6twqca3wDSwDWabf96W96CkgRJHa7KW5PXyuyy7WrQ6QKqumWkGdsbtdvzmGA2Z3riJY8A7w",
  "key18": "5vcnsd8UasnjnbUNBLEdS3qa3veLsgS4HAe8TbcbuSDvsBQD6afJ31UfzsmpagNDhnkhjw1MzmahcmjCbMaKo3n3",
  "key19": "SGTEdZXqnsgQGjHy8CqjBWHjjJEXT5gsRYwmUTb1dnJRvRML2L54ZC43jvczza65BtkDK8Uokdf5eircd3eYQeT",
  "key20": "62wutQ5hUZhUsDkEXai9ZTBGCTm3bwQw8TADzVNThKjmM4wSZBUcjFcyQWTpfLGXjoQoBdkHPej2AnAuXzcbTKQE",
  "key21": "2SanWFFB79p3xBRc5gbUV7Vw1753RZBqQjCayiBAiSFGHfmPqJ2JkYAReqC5ioJnm4ENtnjGVUYKhmfKyt89J7H8",
  "key22": "24bJ8UfksAvyoJ4NxFnmeS7FU7pQQmLxCGLnciS2i29WmVriv44Pgy4RfBCNcgHGoXrFKfuDcNrAHQ6huSAq5Bi4",
  "key23": "3kBy8NyD8Vf4q3BR4X6amRuVr5aDu2ACmE8CgXygFRzFYjwjJ4Hng7XgCnpSupqTdnbdTCm2WpwapKHCenH9ayR9",
  "key24": "5pU4YzKivKb671HFESkKrzYuytSKvX9ePGxPnnD3i3SJVFhfMSfFKyw8MQuHddj1sVzNdyvFee6zQVNrwnbwtQHM",
  "key25": "3sTDbfi2Uz9BDKGVVdo13ktA1SAQLvF1jU5iU5BsTLJZaW99Lncro1cazw6mfakV7konUtHnYeYeVh8yxA8FHv52",
  "key26": "5f5MA2bx4zFMAENzgPbnMyRYn5CWpWDW1iH9hsEjtNiD89XfK6SDYEjb1YKdBe3Gkd7tvkWMZ9fcBZdS4wGqatSL",
  "key27": "yGcmdzAP5DqaZRx6rZnqpCRpZqWtr3mMQe97kvDdZ7dvw6NnZTWU7HSm5smGq4jjAR4ZTSfweiiJsD8V3XxkFpk"
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
