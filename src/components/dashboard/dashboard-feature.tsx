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
    "4bY1TiuHmiu92A1N23bSobW7Z4FSvR2BkeX8iDPJ2hnXFSF2MS25vUcFH9ve4D6BMvsmvdhHBzZRSGKheeF9Hd75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vp6TajT22jsMa72c9bvEKdGBGhZiR4pQkPZU1qoSHP9di66heDjSQtTXDz9vxLBiiMm7obSpXLHSYApKJ7Y4KWM",
  "key1": "3zdqMb4RJ9H2yxvRx8AfpTBivWCQUp5MGzWW7U7mp2oQHMYA7Tcz8QRfG4H8L1LyDQsBpGCwtE4J9MUbhVnRVLby",
  "key2": "3qTnAbdxZhAA1eXVz8yRn69CimhhzmrqqrpAwXb1xa7Rvirt6s4oeFMrctgvUgeqanXt2ay8JTDA8Q7tuDc8v3yC",
  "key3": "5EAmX1gUeFUFUvkDcMeCb9B9NWLsvPtDTsiEHRL3DSV4XE75WHt5tWNrW7bMhaTNTeN1HvCVavu1sT4tS9ukNGda",
  "key4": "2aGkxXf1M8Tib2a9yrCSrySXXdPkuabdLyLYfQTeYFNVbT3SFfPaeayMhoPwBn3wntRzkftc2GfwBsrBBwhnXVaL",
  "key5": "2cnrLJQ6dwVdq2QY5WUx9HrJszMBzwAbuQrJUsecfEwut6VnNR2DGnXbfgWeqnrqe7ePa2US2u1VeKJkoJAKQoP4",
  "key6": "3KPjQ4e5PsdU9gYVK76n44NhHnst4jSr2SUt7DNso8HoRWQx2a2L3dBUKCUXae1JKMUJZHSuDjg4ro96Srcd9xBt",
  "key7": "2uwN2sHAc8g8UUZrXEvKt7fNY3k15gEkprV8479wvMqG6KQepFonju78W9hXbKVh7whLMgbQtV9WW8eQ1VGGyKUC",
  "key8": "61e7DF4r34dMPtQss8RMmY98JV46P45t9w2bCyddWGD8FmJrbaMoxa8b1UqAb7VR3s2JV4NmT5UDX4kYbL4UTWSX",
  "key9": "U3vtMx84qhMtq1EBciwDec72dtoyUCm6rNQ8Xmk22a6AUVAeVuW1qzP4ieaiuACpVfmreQg94EiAVPrxPHprCN5",
  "key10": "4wSuAVAiK513Y887B3EgR1KfhZFR7rfRWgZasUx6xNuTf3zGWHppW7ULaeYgZhL7Du3wqonMat3Te691VitpMzVA",
  "key11": "4BkVATFoUq91h1hyuvqVhRSGPd6Nno11LAqSiLmGJZaGFECpD15K3YDGdZmbk1rkaQ7NEvY9sFu1eQBbzHFFhS4h",
  "key12": "3kRcqpsM8EwJSX4KYDHn7Ws7HaCpdcDmhvW8m9WeDWYqSRjmLRV2eLqYd5iqz6KS5neLBbNJWB2riMAD4UnmDSCk",
  "key13": "4WNirwrkYQqmCB6sjvGDE4dGDixrrxpu894L5Z8pG5SF16nojKnBfjFW2mnP1xFgqXLsJkF6mq8D5DhaXzNJRqSx",
  "key14": "462iSWynTonWZ2QHwp3v72Qvej7Cs99Bt51LQwKEcfHqKkmYfoEvy5UpPE89CubbyKGoJCzVujzhDU4GwEFTPTEm",
  "key15": "4TP4SQStBmYcFLk1A3jCEXM5zLQkFVA433KDceo2zpemX7H7as1rLospKrQBpsfTv7c4tr8AtNDAbETWAfwm8XAU",
  "key16": "2DVdp7g3mCzvcTnyHgRCcEBB16ayQZj3Pt7uykL6PjeFwXo9fUmDaLeb1Ag9Q6fuhzMPVrdaArifmEkEZUF5z7ZA",
  "key17": "ZpAYAVzTT9yMJKmDyVYgpKTJumeJyfj7Ju3eXmYzdr2TtTgmacKexvcri8pNAzmTz4WwTLXa4CfBFKTahBWsx9Y",
  "key18": "XdVQfBkopGfYe4Lr6zZ6Z2XZQGTzas7X1GgtBwmHP6xDogXkPLjbBbFtHw5qPmfooeVnafJfRJgcCTK2aqZQFd5",
  "key19": "26R9GuMTkHPT1nQDjEbDWXfGi2KZi9XC9aF2PqyWa175qRiFEWykLsvhxqB6AJJSMDpxFfYaHwTYw1J8BY1VszAM",
  "key20": "3KgCaifRPRuZBASfeaWBZtiieDjdYDHQvu48YZ9JQxpbzN7sAbzFDastyKJvtF44Zttdcx4MNTH34HepGpz2LXsT",
  "key21": "55aNcz1HLnffUVm33i46doJPGnH5z27v35dBMP3cWzkJcXd7kQKefYDEUjJLyVavFZymVJDteGinhWfxBh9US94v",
  "key22": "44wDeUxRAfvicUCJ866hgdaoDAeQXjpt2dVRYjj6qw2oxiJGt9d9bDewRVghvJSgwVH75c4Jxtr9kSSjXctSwFqK",
  "key23": "4S35vjNgMJiTWuyBePqWGCTTPZiiVJFUJwyHKYhMvo4Bx1k6sBxYr9inxB8PwRNQhv5Ejie6cA3cYDdk2UGxACLq",
  "key24": "5U3wEH32HSgcstWy3ber3KDLmf1u3t6WB4pAB8ZvxDy5DSQPwGaq4MJEqh3pMNfSWhTUL24CqwUz1pwXSkto4eFc",
  "key25": "5Dyqbo2CwF9gHo4oTYg9tPDczt9jEtLytiUhCGJXXUnDJDLmoqqtTWUxBYFoL3w729EKP2P9A8Q2JftpfJg6K6y1",
  "key26": "2eVckx6AnXECAqZEpLxrtUbZ51LXdTGrzp7Q5B1pgmAbVcH7MDcQkar4dVUr1cL6BYArcMXuF92sag8EkWExDqft",
  "key27": "3KgrzgcSvUPG8KMj5mB9MQ3ewYYuwWuQXjwwx2tQLGJWmVzMQKX5FVJvv8BnsKheZfaYQJtrxb5phAAuLMqzsbY3",
  "key28": "3ASQ5Nm3jW1i92i3QSxkDkPd5pi1iokNTi8BkQhprpfVciKAtsgvF2ypVLMLVZu8PGjTNUcQnBe5KGto4hzFMoYS"
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
