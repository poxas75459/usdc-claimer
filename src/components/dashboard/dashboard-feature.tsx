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
    "641ycoLA57P41iNKGoiGwzLXHXpx9Rgx4cEQoWvFLqniTfZHFxLEkGaxJQQYjXYpjhZxAsVCo1BKtRb7yReV5bon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2ued2SEJ6ckHxeK248Con54TrapLuyXmB5ddARBLs3Y7hUQmSnwPXXnx8ypb72DMqEgVnya1ST4bJXnguEgK66",
  "key1": "5Z6Amfpn4G2M56fMmRByE1334yPzY72mwUMgYmZGfkuS5hccp1CwwVeRkDtj9diTg6QdeLanf1PTwYuGn1pJcY6A",
  "key2": "36okGf18uvYwe6NeHMphanQTDKKHPnsbmiPRFtrMLv6LK7sg2xGxesyNFQcuQoCPQxXo7J9QBUsacmKLkuMKNxu4",
  "key3": "557Ymo22vWyPHn6kvpi2B3rwb6RYMWNW9uhGc5XhrGEoNJhD68V6xtojnVqdRgrQxCDP7kmzzRG67kx3Dt6V2hfo",
  "key4": "4PDt7VGCBSngwnugbgf6ofe6K9nEriS2JfAu67sTa6U4N79RPiwcyZ9MVJnQfwPD2veG2Nqa3KpGFU9vYM8w3Udp",
  "key5": "5JEjkvEd5VHVs91CBz83jcZbUephJ37opmFPURi2ypqpQif4XcqJ6gQ5nC1m6HhpGSxpUk9LAksaLxDRR7ua6S6a",
  "key6": "2H1vziyPVXYLWuUaZUg4fuRyuPZo8aJgbFR4sjAL66dM5qXsXoKkZ66rx9fCrxbLUgV7gqTyzdNaJ8ToGZZit8Yu",
  "key7": "1NQqCZup8DZzwcFQokWUqumr7iyu34QBuNg1A7sM3o9tmN4rGvpMJmLMA8BsggBTuxxbBq9aHg6Qm1sDmiqFDdi",
  "key8": "2eGwoiFRYnBTtRsU27ZtixDtoJVJ5ugCWK9FykpKvjLQiHe2Wg7fnLzDpacSN2kPBUUCePaYLDAiSgFKZZWWYLif",
  "key9": "3A195397nXi7JghcxZ62VNV4ntNxkZg6qURqqJT4b8dFkW4J8rTePQFg7ThbVyw34zEdP8zqdjMi6p7XAj5ofDS6",
  "key10": "4ti7533RTeEsCAsMysatTMkaqK5DKdF49xQwe5Bz1HsQj8V2n2uJAMqpdTsAUQSKCfVXVnXE7PAkyyJUNrgHEZJX",
  "key11": "5PzpYp3FWADBSMK4WCT5nLsoBq5g2uynFUpQYzeoxHt4kLorPYwcCxpbxsiM2sT7wnB1Xdo5Rrw4dSjUGyaUVFc7",
  "key12": "5Bpt5HmHoJ8w7bGZVT2yzzjgFE2Lh1mPVzktqQVU8ruVRZXq4eoVhcNstMbtyw9eaf6NSbVxqNamaovVr33b4DEe",
  "key13": "3E5Nbx7K9eF92BouM3LPGauzCNxgcoHvGqw6fX3F5Atmu2vm7Z1LdRThr8P3P5h37zDfJyp9GoQD8cTRvtnUoS5P",
  "key14": "53Sv7mwgLkWSauHTfcGGHsebkzJEnwXbWAyG5T8XFx7LV1QxsbRHq1KHuhujSvwoCFcJjZdyyz76ydDBNFFpDK3H",
  "key15": "21UEt19umy1grCdVSThcP16devemW6YuhKfaf1T4CdBeTzGw5DcKzg4p5Xrzepjg6McfQQ92nrAmJPHANLTUfDkT",
  "key16": "5nTcw4JMUe39dLjenHZTwxhJeE9HPdGWMLkmkaVL3gCprwzKGijVp6nhjcTiAj5HTuVtRxgTRvfNFeozzAriPwyz",
  "key17": "2TPoe56N1XZyHbrGF5Fj8Uj7D6cDxpcFRHwvRuzSpVEAuW46AXttYgKp5SkFkkUvw63hpsLhf2U43z4fYiwbaJss",
  "key18": "5GP9CmvwWsYeL6Choqb3cRz51abfTzf8ripDBZQWgu5veK61uqeM69hwqTgQgEsQX9P5TWkRU2H5U9tirGTkBe7o",
  "key19": "M2C9zviiFo3brc1HjMhon9jZRAn6qqLCEyn3uvLLYJADX6ZNeCeake9U316jM1r8T2Mb4ApPYuoMGMGPBxeCcSL",
  "key20": "56TrPoba7qd7v4ezzX2u1uZnqfYiNurpDDt8F6zjEtXNhKWJmXamiEFNw5zA5sVeiizjdtDcDxYpRJLwMZ6sQtjc",
  "key21": "27i2CYtK8vA6FrQCKxvXRxpAEMgn4nnFQLL7VgzxXu9SSFR8KwaKnF1n2h1s2DE7EYaHVyFtw2fG3pZfnhk63tEX",
  "key22": "54r6hunCE3Q1n9k37tTbMZJx8KhX7F6JtwBFABtwEMnhvy8bzxDyreeBs6JhkJ2TR1L3mhZsvqNxBmpbYRixYc6R",
  "key23": "3APBdMgErL1Pe2mNvZ51HxWwof248ddW1PZ4vQdrdWASon9LbsuU9zEzUYRGy2kTZ6jaTe5eAjucLdiwme3YTEu1",
  "key24": "2YiTrcAYoKJk1j63cboMEBVaJRfXJbnXWsWPkpKcxmhPABRd74rVdtspiMiwub2jfwgf43zFx6nXGnEGuThzkdjf",
  "key25": "5WGBgsN65WbwMW7MHPxaziRRE6ARnE1dgf1776h7xgeyj2y2LiT8Aey6drCkLZbLvNKtPKvAApZMVig2XFR23f9C",
  "key26": "RzoL9BBzqaturuSDeDgizTJPFjvPFMgj1v3TP3w3s7ieJWZg1MR29QqJv8LdbtuVTw8NZTef3PGcLuM2JGZaFbV",
  "key27": "42TGGFTkEh892eLJ5sbVJyPTcEiLYrMbPLdCzx7GaDyCmambgffunTmnALmycZVNXdy7F6XyTo7BfbosQ4QxuHp1",
  "key28": "3CW9154Y8KXPPXTLLtt3jazqx2sZZmec4yUfxJNa4nFqPs2ohKwZY3aCLVM1xcpeF39trBQXu8vH3mkfFTM2bdSN",
  "key29": "4UMe1pfST5gh7Wfz4iC5o9QSdqRx1qVYRpmW4KwmevZeTwDSmFA6d9vUK4LhyRCtQ4QfNc9SRbHr16pyzMkAC8WD",
  "key30": "5KCmweFi9tWowCDpuSh7PJYkMpEHehFixpZo9UUAsCmSxJhqbqmnTGrP7ZvMvB8B9KAqeex4g7bBLDdNzCsfJHDm"
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
