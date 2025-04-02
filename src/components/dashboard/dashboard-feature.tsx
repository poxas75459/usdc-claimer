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
    "4F53PUwui1xcp9dFodEMKrvBbBo8c7f5kScpth9AnPE8vG6XpEf7E8iQCev3mSTVXNv9uie71PfXZgT8c54kZTg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aA3fPYc1BCPhWvBLWL7RNAi5fKnYBz2uvBiF9yDhd9Dt3ggqZyApYbcC4ThMVGUCm8otpjvZSk89QakYJV9NZm5",
  "key1": "3NEcQKykFdJogd13X7bcLZP4aJxMdARHGcEER9LcgyJhPmtJXadeysEiLzdQ9EDsYQwYmKnFq5Sty3Vo5phcQCtr",
  "key2": "2JcYKbcD5FrbXxYMiTBiQ8qSRXcho6KdKFferVgzuu4bJ8YwZpVzmBw9qwGrdL5yFvBy5GpB6pq6cnTGwMCh22aw",
  "key3": "4Dqi6XRyWUpujEEFcXMuVzQksZoJYZLZgmXbwWz5C6xgPVaubKjcxUumGZiRM3fyog8g1vPvmUsKZXrwds8BEzcJ",
  "key4": "5M2Vrwow5bvtJhiCmuKox8CxyEzaUA9Z4nANYovLjKf57EYgigvfgs7xLELtEnzj4euZUxKcCwWhbPgCKFRKELLt",
  "key5": "4QPN99MzsBCimZc4PzM4hZTFv5vrjss6PRS8p5z7WUoeXfKBLWS9Zoir1eWF4KPKwzjtn3LG1XFKXEyavEcgQcox",
  "key6": "5miwMveS5m9WDMqj5amHtwhoUaVF8nAyP62sgaQnnXgxv9ThZG7KueS2ZBD23x9LR9RHtucnavHQuK9Biw6yAmKo",
  "key7": "hgDMtyucLEvsQuYvmzyarAp9PwmR5TveBmLEm6xRNDkVCBF1prGCRCZBsQBMXNpZUtCTCM39gMviqWjJihfr7RD",
  "key8": "Q28G7gQFLHyjSiRajdH86qWUcEFoDb9oBZCGYQWzVX7LfWXAAMXVpprwzEoDurQSsN76qZVsKJX4GToZuPwsjn8",
  "key9": "3nJvqAfretZLHygMm6Lgo8X6HhW6boJ6Vt7kDnRKbpX9X6bRRXRLNc3taZBhgXUB27t9yke91rVGRpAHUgP6YYSs",
  "key10": "GSqtyZrJweL1wpDUxo6bcgNwbeBgKDaqiJZbFUaT7L8MQHKuzjpuMP81pNgWMGYDYiFHhqySHYfY6seZrUxuQHY",
  "key11": "4vYRKq4wQmNtuFAagCRKKXd3PiNeayXCNWoo1AcZmAwxUu9ucmrZUyNHTqb1P8neAFWD3mfCkzcWTsDbDMzmrWeK",
  "key12": "3GNsBpksdBvx4ApM3DDvCQDQRXJqsDNA6moWscGEg7hENPcopRwLyAhLsQcm4huhyVmMfiFa21EGCPtP53NNjvG9",
  "key13": "2BiMi2VmTHP3UPDas3K7xQqc2kuuLvSgmhkdgKn3kvW6g4o9hxYVPSpmq44H9nbej1pH4ubYsAbjzCfUWHxAkVqc",
  "key14": "37AvN65CQKjb3eFBM9451TiGHJPpYFjkMd2Xw3XcejEqvmFEgFtuC75Ew9aHTfHfkUmjhNm11cJ7eacAvxuWQ66",
  "key15": "5EnBG8nqB72nzkx5aNfLe1xAA5fR29VUVD7719qTVF62NhyMML1ERsvMiwsccaDfD6MHHY2EDUdtRtV3BiAuN2ao",
  "key16": "3LKEF9AdqWBxjFg5HE2DvfBENmTN8co6SvTHjzbZ7MbtVyT9qSnJYqZEsapEj3tja5MN6C8ptfiRjwXp29nCVz47",
  "key17": "3jbBJS8H4xSN5e6uphr6P3WzVLgmFdiuuESxXYv9x7zCeAbFxVQdMc6Wxh4WpZSTwqsfTJgAUPC1CsdFe1h9BB8e",
  "key18": "s6iQe5nhGb9mvpRcJV61bvowWv6Agq33mYQa3ZEHSuh2WWt61oeLiuA1QH3Ws5o6oK3JZwVn11LsQUJL8Gjz9NC",
  "key19": "3LR7qEf9iWYqLBygYgnBRz8JkjvDiQXLW7KAbqE2qmCXtciq4CkQV8odUqu466fVm74amQ6kRvHRoAgyahkpKpSj",
  "key20": "2x3ei1onr4S7qS6xx7C3GQwLPKCeC7anRcTZWwFp5yBtDuEAQKqw46UDH5GmAirBZaNmd11gdKiPbT5vKh77ELdd",
  "key21": "5TCwx5XVR9FNgubUyRNBxPjifuseGU9uBZKkMZgqey3CaKiUbs78JxGGWBESH1KwQuHWzL52jk1WQeJQ1iq6LY6p",
  "key22": "E6YNEWj17jZ9jbxq8ogMa8YjE9Qi1y4QsfCHP6XqF1AMxaBxvvLsNbsabtLDhevnNm8x33koXdErsPtny2SFgKC",
  "key23": "o5SzJCuW9G82Qhh49wnmpDq18DxorRcBC4VKKcWkKoTkunnEgFDM34UezdLPUtM88oBFBfuHvMSaagRP1EMS9Ee",
  "key24": "64tDrQZHk3VZP4yjkpznwsGewGfZD1SVQ6sLcA7GyX1jwV2TqhwBrvBskSgzP9JinPsmYP3S3VsQb7ZDYWSaXK85",
  "key25": "y6Gk6XkMpw9VDMnKhewzku7LbFtb5U496KM9n7UniF7LVhvZ9pNwBPvdw6wiSqnaSgVkB9X2kCieYb1nmssFaEQ",
  "key26": "5cmNwpZwp4jswYmWGbaj9FJtute3ir8aPaP1G6ySD3CKwwq8PqRvkoJF8pQDYkQnTHuLqG33jCVKwvbAAt8EYSzr",
  "key27": "3sjPtXSoDdpQf5PXkzpczNpVuWKbCeCezA3oDpvaL3Hw1tyjJojr18tTwyXYuiLDNHsjEBbNgHB5jywRzwHnXEVp",
  "key28": "4kFZAAM9hDaUkR17nASuAz4iBWSAv4FuyYX4PkFw1RxDJsVbvtuWdeJWJvPAJ16aKkJQz1XBdqHCEpU4iwxZSMWR",
  "key29": "2By9TUJLpBawdz3ddcqVgjEpboifX5hXuGNUE6CnyxqjnUZokazKo6szgtgUHAEXsjFfqbrCEJbwfEa3ZrKj6TeY"
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
