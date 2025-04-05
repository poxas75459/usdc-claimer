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
    "4CEqmfmJR2tBgykevAoVrykkdGmTTJJ3gxZqBcX62btEgDpyDYed6dSMTzQUUNgPixfFJodMSqhU2vfy48kgWwD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542adFgwEbaLMfuycCkcsP43Ppo9JcqPyRpYeE84xdHXqVtkv9kRrGV7V4VP2ms8xZDBq7EQXXtXhYbd6zUJFFg5",
  "key1": "x5mmWDXekySsEMmcB6veRwg3Jsg1HGv83yjPKJZmTehuhDbnMY6DraS7fT1dt2syUHStXrJC31xBPZsh3s4HqRu",
  "key2": "syiw43NWMhq9BEE1uMdj59nUToZutVbpYsKfpuJXyQ43bMiiyfD8qPUmZgNQ1ttN5ykSRXvVWsvBv47hmSycepD",
  "key3": "3prg4xh3Z5g7ZzuY3Kkibkn6nMVR2BB82gKhHZ9e6LW1syPjXcdveBGN3JHqAehDa97HmeuugfuME9e5xABVEtgG",
  "key4": "4KeikxkXbRCysx7dhyuX2GLEx8eWQiSFTJHQzrSz7qMMfAyTrvgssUTTRUk1Do9mvEUfukqR91FQWx12R4x4VJ9w",
  "key5": "TwtnUTz1MVv6CHfV8DtutTt2zP98jJncn6LPPviv2Qd3cxQjHoYXwXmKzGLvqRRSmbQgPdYhXWgxvDpHEYGebW2",
  "key6": "2hnDzhiv9fpesW2maHCTTWGE2TUzptyFxEHg9PF59rvateYMfPtqjyyTkKweSfrPLDyW4qyJhNGiqr17YRqDFPaE",
  "key7": "4H9pwrHGB6qjNbpC2yoJrLfo2LpHivSj3dBLa3i1U4NQftt2zafyVpBtKKVNePa2cpqh21ZrDWY6QB8f4mB23kQf",
  "key8": "doETfxzBGD3fo1deAwLMoVcU11U83xekMthrDnRw7BWs82bYTFqgfo5GygdGda6yaUTHprdfBLJcY57UGCe6Quj",
  "key9": "3ebdEx23ufAAZCXR7TPK3mzgEoYmgznt4e5GW5uFvuG3uop2ewH8sMwCrZ4TAsFLJrYw8MbXdrtukgbfbWayr1Dz",
  "key10": "33ZVbhUYh2CWK2EjdigGBH1o5JF8tQDfScZaBhzqNguNZq11DBPqQMrJzNVXwnGQQkkWEZ1XELfxgPZk9x9SL466",
  "key11": "32nncBusqNqqysTbH1BKaf7Q4zidp9P7FaC6EqwnRgZzoR4AcLhggWZ5eAiVvWa4WuS9ee575nQYk4J3ayoMkf1B",
  "key12": "vhZmisDU1EpULbpBu5yG2nU7NTDi4gLxwVw66rFaw7ZFd6DGAMx1srJygn1xdgxFTTCqJK5oRZ8KK8PXfeM8rc1",
  "key13": "bPDfa3BVnSAS6kXGza5JLbDeLH9ehg69bjuRhSeEffLjoJnx2NAbFZMDbCKzPT7G5c4fZBXHaG5PsrtbGZKMJBJ",
  "key14": "2ofFWRcx9Q8E5zskJ33dZEPaHftfQurtyK4tgkDB75QJvjYyPK16fghHQiaFNgmHckXkChfmAV5bb6mLLMfyS79h",
  "key15": "5icTB8CFkRAAD6fUZR4X1KWtqKEsYYmgEwa4BLFxqkzsyUbUzAV9PM9t437Y3fAwV25HTQjyfdu6mB4N4nGigemo",
  "key16": "2qELyUvDHVQ5MmnfqNGHwamcf6oTinmeRfxkLGEsBSBPG8TzfuVp3WRLJVthV9uvHgcS2FKb2eQBtk6Z24tmC7LN",
  "key17": "2BNB7o5vqHgjxodCqYz6GgkCYKbq71CSNRhCkHB9pvpZ5q1ezC45jdmZSrGbKygmGELiU9q93D9RoBUbcnv4XgEy",
  "key18": "2TZqyfbBYK4zvu9t32XAcZQxjZxUBKsy5AZJkePicTCPeEzQgwGukZb5kDW2NzgJWWDQ8krSLphtAQopR5EbFqRc",
  "key19": "2GNXFqEVnL7os2GaASZasGhXsNuC8S3JctmdT7iJufCaNVwSpc4bi8xcDQqYdGN511i766Ru4nTLAeRzyBfNqaAZ",
  "key20": "2BbF88CoHZ1KJ59jB87jJeSpPx8fG7vCVLFd93KCBrPKe5qLx6F6ojjrN1mifiFiJgHW6rf3JiM7MreLBEmLZwus",
  "key21": "4yMHM3M2sJLcfXMqJNBmDinQwamV4dg27pPzd9cB4E1DR2LC7CS2ttCXZPsihuJMbowhNyCZVhAaxc7UxxMvxVZg",
  "key22": "3aNu4LH2aneW7z6ewVkVMFLzgo5W7e2cTNhfBFYpE9kCkmtHduYPC3UiT11CLbv7z2zvcVJJWpqQCqFW28L31hyD",
  "key23": "9nHB4ANspo9CsbNiLpApp4mFM1Q5BYiNs1sUadSXunByjKEzCLNwcgvgeqDwksNto9WjgahVZ6xXKxJLUhTWgui",
  "key24": "2e8YXbBWGuFVK1KskW7MP13LHTP6R8gRhSrU6Q5qRF9DsgVGR8NrXfczG3LDHg2MZtGwNnnp9Y4LE9DSrEe7dQqn",
  "key25": "3dzbnekM5Ur8CoKtCEi7tmXHQfc7Uo9hAiuoinieJAPMembWSbkiuujRPSbYAwd4gorW5WDukKhxfy76ch88qHSU",
  "key26": "4hTYX7kEJ8AGuKoM1quaVkLyUQYUYxQmFtBG7dnqXWhU7n7TcpEbQ7DmoXmiCt6jxv3DD51uRvjQuUX3qG1ZiUuK",
  "key27": "4qVYroWrssL6eEYtbgEUvU2dLJRcVHGjaUv2EBYGhLHH9GeaTvHhTyQ96rZr8LZetGvfUwVAK7MHkDkfD1gogCgX",
  "key28": "5xKYkXAhhBwJLfjHw1y4j3ZX1zeqRsMAL19gCpvqggT3hST9tbL61XEZaHXLABsQVmU13NDHcNuLLYmkN3yoDnax",
  "key29": "58YJk7JcpFTc4m2zsbsHRLQpV7uiAzYWrJV1297n5a8qKJk9xA5X3Pk7rpzunmDJ8LPMRTedKUCXEVahwKANiJ1p",
  "key30": "4tSBpDTaZ39X8HS3d3L4NeEMDxC8E2GKdwYxb5t3ttu5z7aQ6aum1oyzWrGqJhYyjt5ctUWhc26QM8YcSHbddBuu",
  "key31": "4o6QZTn14o668W1w9uu9XAq8pVsfgMWQKqnwyTehcHopjaAxNRtVnDwYRBhNukGoxLyzG3EqxSqkeivhYxCccUjb",
  "key32": "JYJjUSwjTktW4Ve58PgShDaQJ5Z3oqdv5DRbSmkZjvLvfKpivYEgjRtKbPC6EN1r7jjmu4cjocRLarVSvmfXfmw",
  "key33": "rMUaTSGzv4YXh8Uk1A4a18ZjSwhZ56jP9WPN3nKeiLUJrsfoCdJ5hjGYfeCZuohrjvznURYnTakNy2h3ujkqdU6",
  "key34": "5Esyt4C2NiaQp4n72qTii35s3YhKx92iMAXjx6E3AkBViUAsSSSKEVBj4G8VUuwqYMTrBx6PCL7nVQLLCGbjBS8e",
  "key35": "4CxwDK6ZBuA1kYdApnBt75UZV8ntrseuHwRfQNLmqEnAwxnskwPfn5fgPWDi5hkeS8C2G7JZBQZKHQu5sHf66BGU"
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
