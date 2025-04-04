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
    "5CCQiVva4S6uyrbkRSBbQf2vnYqKw6V1Cr26GPXCQGFEkFvZ4D3miczukfD7AHygfWd3Yxph2TDb3TttYLA4QRvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aZ2j7ihrRET2tFHByecMSeJwT4Qtr6HxZGH3YYxkhCZ9vqFsN135F74UPbusd7SZCCTyTdrSCvPL1sYNQE6mdLC",
  "key1": "2cubrZozZgbZFPXhnGSwtvwjkRvL153pXqXcVff3bFZq3yeJ6uDJZFSoQuKBwPju4Uq6Tvw65mvn313BWcWSGLks",
  "key2": "c7gqG2wtFeT6SKJYfWDumXHpkLCUaNbYA5qCjWvTubJ7pRisn5CKLuVVDZf2zhFe4kZk3vSCScK6xaEU7SNLA7e",
  "key3": "5vU5PZ2M5Kek8B6YukJKcm7e5E564WLcRupymEC8gwP7MJYhi4rW3EhkufmpRXK7Rb8DX6xryyA5DevQGALMqDPC",
  "key4": "LYvTTg53DkKzgQDhrPkpJgz2d7gvP3G7Z25o96EXjGzWEU4njevfPpB6omKN3TbauRifNdx4jEEThNGuCXbCQ8B",
  "key5": "3eaBjVRWnB2kb2T9JtXrb8qvjJmNMNUQwZfQh7dRLm7HPfJcuJZPmJTrBcMnCF5SVuGyAS1tRe7yKQrDC6tDsjY3",
  "key6": "53jWrZPSN9aBnDCmyC37N4A8aWLDifcmU5HCkjhhCGZwBQcCdqisDqCs4pjmvjfJcHtdkWYZ4ptjThTcjjCPL3ZD",
  "key7": "2vUeYinyBFUcFbimteWpwqA8H7VBT1s5hAeZ4bjCEg77PAWhUUKADTBd7goYgg6gtNcfAo4Srmq3TfgJmqC799u2",
  "key8": "4VjBeHEjMahWo7t4VwjmGvxWdj1xoa66G4aF35wTEWfLxymWekarsXisFMJv3rZ52F6N1CTwgyDBnKfGiZ47Kufg",
  "key9": "3k5Bp8qqoogQbXG81FTn3Xxj3k5wzgDnAoTTS8PCqAsJSZx7THgRdVF3zygxnb9oSRNMHQ5pa6CPtZN7y98W59ZE",
  "key10": "62NMTJK1RgY9PbJJVMcWT6s13A4muMa8nWCqwrnzUE9d3MMhFFeZCRtvFk9kzSGGuN63tAtQWp6wZFz7s1sNm24",
  "key11": "43p7bKPXdsU25tPQS73hnoWe5KdKgMYCZrizLNUUPJxeEePqmd5YyHN6bvDMMeNfqjMxnd8zoEHqpnoKtrgcQ6rW",
  "key12": "UY4q5YbtZ4nCZcsE2AxEWih6Q4Mb3fHPyZYbKeFwMRoYW8S1PTF9b3ktsAfcRHiB2aLDZaJuiqCQShzjdjXy9jP",
  "key13": "4S8SABAVPwcJoe3wqfSRGuJtYTenypeExpsZjLxP4TVmrv5e4josbSJq59vdkEkvbaUt6fP87pXeFNPGDS8SwqwM",
  "key14": "4MX2p6svcrUoaxrCEyVMQSedWLPPavVszqoXUppnhPaMKhxKGBn9E5fSdstuWearmRBMjD5325cWzafgr1BQKsCB",
  "key15": "3xa6rhzJUHNThiMEEEurFrTtTi6kFLmEFwni23zS8Pq3sth3HKNBUbWTAxwWGhbKqAd6L7F6K3SWwu4LUHwiPGuY",
  "key16": "HtwCRQ3Sz74drNb63f14bTSsjvZMXRVAmgdNjQkSvvzG96EsVNvKMfbxdEqGkz5mfNeDS9zabgc5MLi5zuJGvUY",
  "key17": "5swM18z2kuiEuCcy86jBDMmLwegeisUrjjbLweYjgLeFgqMgo5Gg6iLC1tySQx5K8uCxZwGn7xRuCXqPvskx4G4f",
  "key18": "52DZm8hhR2AnVcrbLpSEK9jsW84QAEavAVSohpmBTiSHSuyHtYJkqMLXFvnu4o4hiML3fesM9rgYfsHT2CG7AJA5",
  "key19": "29zqYDcvkqh5X2p1yEqsrjN7UcM3AHEXDvmRW8cbrNBFfAH9w4bfxgTMZHp4b5JsnetJdxpwNheGct5RaqRZAuKu",
  "key20": "5btPSHr1WChtsPQCryXh3YaN8GuUVNccMqaonF3P3cCyVxYugEp5hTwV7SqArp4fbZwgiS4G7b9SY7GYYhP2ZtHp",
  "key21": "5D3vuLcDMhjSaqeJmnXYWu7PR7VkiDCBtAwfKhrNjKgaYpRxehNhNnYnUdMSL1ECnCnymfJuAdAgprhviPQua3qG",
  "key22": "3djBo6vJ4w2Gfzht1vPmdoGFUvjoJoeJqfNFK5hu9ad3WYLwGDAL9ZUuvhqNPx4MNRxHkqgRRLd9zzDPq71yXt8X",
  "key23": "2s1WXvKnDcvTM6FybiFdbHqKitYcbJmomAkHAFJhngbo2myMetKmiPm3987HYah5XcQHoNYRUzpedt9pPCUhjp4B",
  "key24": "2NztUTLhNe9qHyf8fQSaenurtRSaNsijkjtVAuAWBpND1fHoHd3EAqcAWkD4kjHUakH8sNsT3HCsmr4UY1YtPzP6",
  "key25": "Vft5mgYD5YZoLYmCXsJcda1ZjE8ZCgduP2cwnPGiZp2A8r77kep1LWvDRb44fu77FXmEEeiLUghnpp7my7g2wAX",
  "key26": "34krhoNpoRxQHtwxdVYKCbbh8QcMdGoE266HmGSYhNaZ8UmdgNTBkcEpjkhFT84ePNHu115X7ouN6AxydAdXpzCg",
  "key27": "X3oc1Uzx9e1L4U7RXydyJnmyQxVYy1kHrdMP1w1er5Nu5NfsYMLKSuLc5H8Pa3hiL2yCMyL9yCLyUKTRjDkkazd",
  "key28": "48hsHjGGVtJYX2BAr4AkDZcxEurJW8gsRN8QgpoHmq82j9hV3jbPw3kDLneND33VFi5RUGj39DxE55tcuZ4wBefG",
  "key29": "2AU72jphdsSHmj2rT5mNfnK8FuPnTAi9tAtRMoJEW3GGQ9XidFriUXDvdhYzAgHTc3JRYddSzrLb7Y51mpa9LHQD",
  "key30": "57PaHpmtTN8NbF7unUGrgHrviQgY2REZkW3uQdzUgkAYMZqwxVbep5zTERHgFgc4By4cTopBQAdmdMBuQTo9Ph47",
  "key31": "4cyb7CWGVbNT6RWivHR2zse5uVMvDCKULaET3Ec6d6s5SgDHfesc4Mb77Pyui7Pp2d3KhWduLWhsdgqKgWeT5619",
  "key32": "3jwefKCbvEXzfFhMMyP8VdxV8u6wUjVXH9DvWa4f5xqQiGWbwyA6A7CYK5BnyzhqhMY7soxqY89scf1ftiEo4Nr1",
  "key33": "K7khbGwJKjBnxjoS8pJBoFQJJe5K9a8CGs9uJ4UTXzyN86WKzMujK7hq4HgTXgmxxy9J2153Kw5uTpKrhGeRyGu",
  "key34": "3cg5e197LdpZ9ADwYxS9htSvhQBDQBM3BnmxiciSgPAdHhgwGTuLowSFmwkPKnPzm4HsYq2UXUQpua19EYic6WtJ"
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
