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
    "3vNmFmsKuQ9nVfAM4XF9a3WCgWYX3WN9QRXSBYCFfe5aGGopfTvwYN5ZKhgUffJiWEcs9qqiGxZ6zgJK8AU2wGb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwv93eRMJbYxXKGbqefXMpQpd9Bjrm1yDAdLavDoxntHhGfSiMeo8yHUJmVg2Hd32iKrii7jXe2UTCADEdxJnam",
  "key1": "2gZjAPTn9tuD57b92XU8AohSpaFLG7ZnfXZYp7RXWfBMhvoNb5fhgjcb9ceKipQqEHyo6ms3JidNVyaZR3nvUeEH",
  "key2": "5q9vy5VHwLajqoMEHXb2FBfLbueaRBA2pWTr4bs9pqDhnzk2CYoCZuvnJm9G5dJLEiDnMkgJYRWYJFJa9KPvGo4A",
  "key3": "9t47CycLEupKNqn1HEBuXghPvwNFyXFLKjU3XqqXFvN2kpbjD71tQ9oco8pe4zxgJ3P8xb5bvZdLhhfHVLwPWgV",
  "key4": "2qY5neS9qWPW21jJNpgfxR8Mp7oThapfGWCecnYmroTkcAmy1vgCZCAz1TFmp2CDHeZNvj2DSWmYBLGqeL4J8dK9",
  "key5": "5fF297JuM8NRcmt3J63NiLBUTUh5MF4sxtL3mqJxNW5QkRpuU2bJAStmXeqkWzc9UwWR3D2RrZrjPoRfZEUwepwg",
  "key6": "5sjNQkXci6h8sXSZs8KfeDS9SEgD5BbDcUwcxv7Suwbtv7Du8QP9shk8P75vb439CJdDor98oTj2PrVJQc1NAjan",
  "key7": "22CQo9tbxyEt5e7X9wo2Fj67sve8kyG1Ktt3HxSjuGkEk24kgDkHxnNpuMZdFpiq7uuDzszzSwjwrPGtbsQ4R93o",
  "key8": "4qRkETeNgCXprTkVUNHMXdY9SUC9B7h393DEheZ6ELAweJoFBgLar8uzxWbUhWbMhcSW8W8vJ4iA4ADHEr11ETkX",
  "key9": "SKHHQgp9codAKpdW1x9XpWECPD8ydrpQZsy41NPCbS2fHBfuduVgCd5CYFtPwVoXu5aqCajKHPWVujEmciYMbiZ",
  "key10": "4AETZdeDdppYj6HfNoE5NgfdtTSbipNdp1ghiSUSKwpmeENYz633mHNqg1eE6WG3Lqe54M7GfJEADUPdEYzSd4hR",
  "key11": "5j5K7e2txfPmq6GtRsGRn57PzufVTcZFgGQuhyvj3PoV2cM6ChvGqHBoyLvT9rajvdD2yr9jeML7YERhMetEpo1h",
  "key12": "5Dv4ttvbeg3M63CCzxhTDNb5DKDg5gGWzs2YnXDFhoPs9koHhGKvQeumYrWe4q6hKGNoeMCcMGnFPaZk3XF3rnJz",
  "key13": "2b72LvYyqGvck3L7XfQ1URecTVCpEwuoCCYUALoEMSjNZEdPpy5EBQQe9MU1c69iSNGbT6SE7Xv7BkBGuF24UEPU",
  "key14": "2yd3DREmdauAr9ojQhmv7yaYAQmG7CQPfHcEbzrPgLJwoceLpYjSwyprPVPAAFGiYBqpPeUDsiyeM6FwjoTjJqq2",
  "key15": "4CsLSFpJxt5KkvW3HkubbZiM6bBbQpssv67bXAeGw49vBTyg3DSa8jY9pkvYbfj13StsWuDfVzJbJVAtV9F534xd",
  "key16": "eNYXqTq8tMekphb1Wzy4av2QkUfykTAu4rH4iqjQvMZ8Q64gYeZEe6oFw38TM9wNcKRyWYnhe1aMd5dsKFysAK3",
  "key17": "5wAKa4YzGvprvcqP48A3mSJgVY6aL53pKeKhzpXBFUGbxCG7moFhRViuibDbFtqpHMxjXUFaNiS3wDMbTVE9PhsG",
  "key18": "3aPhhB9ykKatu2CnGw9YbJ4EGGcyCyFoTWrnhEWfxegbYncxn2foFsfk6PUPWu6t6yRKbSgTtuf7pVa23BD5rNQE",
  "key19": "ct7mDe5uHYvwK2napm59Q82zLEP8dec7t2aCUuDuRFYjkYESsaDPSKRHHUESbHyvRUPRSPfX4fG8bKkqhEnPS9r",
  "key20": "5uDzUSkBFdQjK8gjf2TtUM2SDZudRbgpCkTcs3x5kZw6XvVvngcWecWgdKFDoMhjmAvxUYH6NLZtyKYjDpLf2VLm",
  "key21": "2rfj7D3jMKc8n2eeyK9dJJBdmFwh3cQb3PS42CcaH8bMFtL6Rdn5KNgotgoconV9wqyLWibdZZM6iSuAtRbFfSFf",
  "key22": "67NY8rdD2a9rBAK1VDuvQXK8YH1gceNC7wacqhgvJXaAfxZQJU1VCPKtdWRFGMis7c7vC2rCvrgjxftqefk2GZtF",
  "key23": "3FcGNKYuxejfuKZ9pLd8ZyqfG99FRs9ok96irhABbFoDWYLC4g8QFQfjMGCJCoTWorcFjxreebKuhs822KzmLgTC",
  "key24": "3ija7nK2taqJmPdLvS9q2V1HEgRZu5aSpn5B3qQWFzRA6Wk1hzzr6zH9Xtv1A3XahF2wUYyiise1kA647k833tK4",
  "key25": "3qhxsuRGJ5YibXzmNS7m9LuDWJFrRcTYkYrMKcmrPyJov4P6dWaq6HG4DLHEmhjCQ6qMqt91XUEJZE4SMuNa93Ym",
  "key26": "4ZQvxq59wTaUzx92Xy5xyxQdkXXwrpZfojY3xSVsCFa5nu9ndEweH5tGhMqGiSLDzZMjYdE2kjTDLMoAPsnrQLdz",
  "key27": "2N9t5tkdi79QvxPybFpLACYF5RPZx6eYTg8ryo8ar3v1sXvKHdrYAJAXvTyDL1fUhyFPuSh7zkXZ5wTeJ61Pz2yE",
  "key28": "wbRn46b5LQu5B2CpcxfihSjhbJMZXpfKY1xPh7FgGG5c9v2EzL1YpEsCCE353GgX5sVsB1tb6guktDjS4Mwfad8",
  "key29": "3dFaknqJbBoQyBSFHqrzU47TkjJapqGYwji9mdkWKyRGYqrxvQqJZaUhLxFYV4cqnVRsnXBEhngeygkYV9Ynmz9U",
  "key30": "4Ux6RDN81suN6BkeRCdqBMdFU5gA9ywrocofHndDmgp6PF1VfDa9VAvPn4j9D8mtzc2EvtPE92d9T3P4irDEXGZt",
  "key31": "58XzttZp8UkRtdhGmhB2E1YYMWWMWWSqtcaU5xAQ1td2QrLKKvmKYLezvVHoX2Fe5u2ryUahZ1gvsizGjU9bZdaw",
  "key32": "4uJPioaSabXvhc1e5gcwaTjB93BgBhtzzTcEAnSGF3ToLXqHMxCpSjfcbjNUoiZpJwUq4k26EADvwo8zXZkd15QL",
  "key33": "4zhGjWqbJ85fsKsBsWCFuBcdGGktfGX7yojqFgsjazPdtTPNU17rEGHvSS5pAWMqGBW8B7QmbhV4ojGiN6Jokkta",
  "key34": "26VeU7Dpd4zKiaGk2FvpkNJQY1RggSbqhnSkSWiMZQ46BYbT5PdymUMyG2dxL8brmYbeqM22361HQ9Eb6ahuZ3Mr",
  "key35": "2krJjH8YrYdRP8aaPy5kDDWv5e4A2f2tPF3tkhxCUQ1Vfbu3efMut3Zoujk22hvus2KXc5jonoygfYQ75xzs1NAj",
  "key36": "35Me7AW5i8T68KAuYL4WAygN6vmS9hnT1swPFgJ4KU6kJzu5ZXyLuk8QL4NjzCGKNgMbJiiG7M4WVER7NYtteEzX",
  "key37": "4f19z9GBe6Q8ngJGzjv6QBmL8YAbEtqkidpGdT7Av1HZaUjfdDGqSLYAt9uCSBb1g4rnHRNuQFDqM7ofGELfhHXJ"
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
