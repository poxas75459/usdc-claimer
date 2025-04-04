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
    "3mHmMuJfaboQivAH9gv64ezHxxUjKzDKuPhEnYEnJr2sjyXdFvCh3PXEefcATsTbLFr1Vo9sjpEjQiN9v3XCZSQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJKg4FcxFRvxznkU76yf692YvkLy3kcrHc6Nu6LucpAk33bL8TUpFt53a8fMc3ZAioFvHbkQuaHcZSrHUK2Dj8P",
  "key1": "4UaMAYunmKmmyub256BArTv2h21QKVhW6hM8oqKZtXCn9LQirK1puhXHtghdN6qYcurosj8XvYiAgCkghH3XVPbA",
  "key2": "5ZDgUB6F4cURZHBd9NksowXkNdZpDjUqhR3uvkf2BrNwWtAMS5vEcY5jtxXTPKjU7VKop9tCbEvQNhqN3jShhzBs",
  "key3": "5irNZZH3Y4fByA1MgmUFSXzdzY74hjpn5pQuSjn7zVSYNerx7A9i2eUX7rsBtDeT2AkMnCzkq5GEUbeXqi6JVExf",
  "key4": "4t9UYWrbM5rTiabQUMeLGydztUkdX6tC5xZK1PTV3nSUHiLnnTkvMP6RiDTAsHVA9Hduji2GdhcxWFnLEmTCCSWA",
  "key5": "4ZRS7Q2RNsYiecWiJoaDSgrjHRp3Ds9PCE8fkVaVnJQtGC8VVSmvm6KpxPnf7siudrZXT4DiDJQpEhDdwRBk7cf9",
  "key6": "4pWuXsPgZopiLzup8kTkr6qgZNiLi3RKVvvFxbF3fhZUZybocvcqEg3EEbUeon9pEyVY9WXACEMmsiuWfAvkx3j6",
  "key7": "62DsADifAyUV1tqq7xHhTAJ6VARvYeCUP3zaMYsZWSbk3zYDQ8C2GpXxaoVhRcnUH6s37ebsP6483Msz2QTaJ3iM",
  "key8": "61GzD2x6vdat38jJvkaryXGHfRW5HrqWsHrdc3xLym5RbqoJJKmnN2uyxcVj1mneMRupq6iBUtMWEacMHaLWrgj3",
  "key9": "5dBRv7qjWzyxdDkeafDxfCW26v6kxKBR9S37CSWiP32NjwS2C4G3zQnUzvk4J2wyGwu4EAX8nN8Jkfz8RufgW1SD",
  "key10": "2KwHa9WQHhzCMSV7mUoLgngoZSrBAo8t43rGf2agbemSBxFKZGbQvMQpwddHLs91V973wMGecHQVQfYCDHiiP73o",
  "key11": "3TJuJXauE4C7zBESjF9MNPW6HTvAftXMzbjzg8an6erRmAukvubJqqe7YrzvE43GqTe6R8tenZDcxZM1eMdd33bK",
  "key12": "nWHheDzEKRhvwYY9EnJ2yo6BR5zKA3oGo45tihnACTMabJ4AveW49g4vvkEoWWzb5ZtR6Q1vemgXCZk6TAc5kqA",
  "key13": "5SX5FxobbLbcZiwvmA5tmg48MpToh3YSDhNVaSZFxnwN8LCe6RHXyeaCUpso7zvjRoE4qF5nnADYiEPz9UugBUPn",
  "key14": "2tWaTFPGHhqgvFbSyC1mG1h8vcWTx3xsLthR4GMDFdcFMVRsWavoVbfj1FfaFKUpabqD8dpoGfja3F8YydjGVHYB",
  "key15": "5uyPtkppPMZfMYgy5eY3S96Y7LQq7yaUcGHngrLVPVUhKM5hdowkaMnErK1rE3ztpiedvSbPNn2c2yBmdy5zoDi8",
  "key16": "5j8n5mPgoHGrVm8xAV6xSbLabp4PBg8dVwq5RhjHPrrgvZRjCEYr9cSt2z6QLNhnaFuN1dKxGeQ8TeawgXGpPBW3",
  "key17": "3fGHmj1mCysBWYGMTkiVY4UVLZpT9wGUsMbqr7duM83rVgB7LPLvcpxeAMy4e54M3SKrPPLvj9Ab41paiF1VGab2",
  "key18": "3YPCdp4NqbhrUP8123qVXRZ3uFJgrZw5tpZZ15ScyKah4Dn12jKTtdQBAd4MVe3EzuJ8dNCHq6ycuU8NpXWgTyYK",
  "key19": "jfzeGkDqZJJrbreFa8sd9dPf5WnZ6F3uKjNvbTSNL6UK24ffvUsfFZ5kf25hwTokqgVPmQ5yB7G1fA5Vy43NYiX",
  "key20": "pACbzRRxNBNjjzhzTHkSSeoGGjixSKAqswsCV5FbJuuQPDcFKitZXBqfRP5G1nRX7TTjuH2dN4uskUFBxfe2sh7",
  "key21": "NjbQ32F2bocWRjKQ5vKvKqidov7bdU47NikbRkciiYcxpQGk3SbBNQRhRZrPKFsotDFzDsTRWjBj2uY3xuxXB7T",
  "key22": "5fYuMPavnMfVkSFovG63wxaQiytL6A2J2zad4N7FFowVgo38BkEtVhnbS8VHHsUV51yhz7xJdpmJCizHRaeS8dqJ",
  "key23": "4frggtz6LPE2tqvs5n6pyfWutJADiyQKyhghPUoVHfUdjfqZdStsqG2enMi76Ah7fDfKL5w3iNZECi7uFFtS4gaU",
  "key24": "64SWi3PLTRXNXxg2iNtWvK9P6mbQEv6R1L1zVJ1rgvn9FLH4pTLXpAqGt2txYwvHMehSQnuqnaGXwa93Hq4fvAsY",
  "key25": "4uur2sw6GnWghQ5WFKBE3e7HoeeTpFF8nuVwNJ4Sban7RgybyeTXFqLx9JJ6woFVzrVQeEG36CoyvyLTbJeNLUSk",
  "key26": "5EDF3wi9ZYH9FeBYfSKF6CVHfetPEXmNRXP8RdLctCiPoPuGULvYgNTTuk1JGUzqPsBk3WK3judguUsPvehUYKab",
  "key27": "3W1de8Y1fWEHTnBz5QAZ2pm9Rg41J1vmuh4tbX12NZAiL7TsZhTWLCWwUXhv1C4cGjQ3UpXekFmcu6cV5t6qimyA",
  "key28": "5fG9keubFvJgeV91faY9SN366TcxBJMgdZLnZUWopYF2X9MH7dZin8uixRNcuvB7jHJpj8jmFdgVeZmn9oBKDY1Z",
  "key29": "m4DHCtzDF5vyKTY8aHRr4JTZetqrZVeS5w1N5Fp9d3b5kB4ZtEsANEh5NM3Ruw8fnNC5cE4jat9wzqn81PLGGsj",
  "key30": "4bLPLzaBUE5ghsTddmPAxfv28FfRvRwhziyUGswwUjRMZFw4aKMWvAPwX5VBwKp6qM2Fz7GMaWe9Qcd9jBhT59i7",
  "key31": "5zWQEfe8pQMXj2TPp6dYLFfGUC2DyNnYLFvL3BBh6NwrXayJ6pjhk9xk9b9G2tgoY1nvLK7eSe5KGpXzFxA9XLNW"
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
