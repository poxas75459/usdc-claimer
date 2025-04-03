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
    "5znLZ5A9FYQyJHYMTkMwafR6p1VcoG4LqAoRuc2VagWSZRAN9nRrDAivDXJeL7yVF3EnBUpXir56prD1fxZXP3M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1gu7itbqoWR97UkUs3kozJyf8jyia91GD48KGbDdHkAvk438LMsxho2wKVUcHZC3PvHV4yLLqV7qD8PCfHpLaG",
  "key1": "3EeTcaMuTwE32MNWCbQFrXo3xDAV9UL3kgoFTiQGdEUUi6FQCPz3NvNTicxT3dWS8y3PvTPL5ENHV2SAEVHWN6K3",
  "key2": "5sg8pDHiPRzNKjHnFcYBD9gh6uM2paMz8UgWYSTrJqLG6oJsBm9RwGHhMxnkRn6p6VgUwWAG4Z7iTyzbikt6sD51",
  "key3": "2J2e3WLrkTvoWRX5KXJABzWrGa3yeXEjymMgMh46Kf8MuQmAD9CqzKckQbV2p9rgmcwY8HuvfR4DRzHhcE73vvDD",
  "key4": "32Z8QJ7WujGGrXmfnWWjNXzcDT4q2KgTTSuLzwtVysHa4JJDt6DuhaT5XNrTUwF9hfdefLGCWUCGgMqcfnkJ2Jvw",
  "key5": "4BAMhGmEwvbz2rXA8qTFzc6bQ5cpUxiH4AraYTipTRZwYj8hd9H2nmHgidURAuJMqY2G3kofivmT9uDDsf2e8B4N",
  "key6": "2tZfFV7nw19dUj7p8wG3MBTNcfDEsNDBYn7GBSamK8jP5iZrZjPBruMBZw6bcUNyhpFFezHWL6qkfixAgZRbL9qt",
  "key7": "4Za3eciKtHBBuDTC1y45hsjJQT8jnF2JKCBo5fTDBsCPuDJb2h6twZQAz2vjKcL2ckTYXbSQFXHWxq6n91o9EX6B",
  "key8": "amYiKEJJEY77EhPS8BcSdaNfB3cMAxuftm1xcFMwwbXbQK9fsEct2xnbYsCSyihRFaQZaQe9wwaz45N2PLcADq8",
  "key9": "3pjVC4mRF9jmV4hrJ3xYA2wM57RAgjw1bnKyfdpykfrLzJpPYeP4Dr8izfpuLReF3B1W8YN8c5KsiZxP6PDUhfP8",
  "key10": "deJ6mjBqSD1AhQJPNpjMvJgMSGDSKBMf7UzjXskxQiStvn6xC5JqCH5YcrTipRVfh4TfVvgeAJsiZWbFpdsm452",
  "key11": "2AFrhNAdh1jVjta91ehJTgYwd5rtD7XvnFmfjvu5Bx6Mww2udpEY7dG2bR1y6hLZPx8eGS2HokVd4ZNfdtBqBxNe",
  "key12": "MgHCfoSwXPnX7mog53AjYwzrv9sZwioYSnSwPmNapZ77TUC5Ejq4ygLDHwxDpuyz1ZSS7bpUTsMpihaWXJEkixu",
  "key13": "5sCz2iWDPdTyPAYwgkJL17rCQ7KQTuYzbe8JmdeoF19usH9CHxRYuEd4uhLzD1mHk3RzrjHwiReYjhvEQEKo4tZg",
  "key14": "5Jzs7uwenyaLoZtKsJFpBaTCoeu673vnzg2BkBS7vhdbBFgCDAMv7nNEj1Cey2rXswj4kng7zH2THqG6Qj3xT5i8",
  "key15": "2cYqtsqtZYrdJXYaLDY4RJ5AtAdz3gTWpEnxh5BNbmRRNtMxiP1yXwmun9iULuqj8AjKYsmHNfeCzFUD7WwvEBYs",
  "key16": "4SaRnv6yMtZmnyDnw3367jwmfAsoxrxophy1FTV9AU7TLt3bLDxnPP53e2yJYF65Lni5DDryhHadmiKDJ68v1UL9",
  "key17": "8YqEiCvZQWNM747n7vuJtv9DkJuGTk5mkisPckFZjYfVo7v4rT5cFGFvZCE6DEC2DCjchXKMZ1Xd71en2rhokJ9",
  "key18": "2KQiT9TknsssBE5zTvGbgfU5k1WHg15jYKL8engh64nkbcNT4PFPFT8bU76oGSnFtMuJfXAqwygx53UFzqRr8P4f",
  "key19": "e9SWEYwH4uyaYcwUo7Fu7CsbNa4wNnJVQTTkmgAWpfSwCTWCh3gLbDgntzXwGokG3yYzLUApTCGb3XE4iwDXfyg",
  "key20": "2Sp6qkqxNNjQqUZDLk2UbuYHZ8xb465s6EpKXnFefKf2cSF4H48Gf2okb1R3dGjsD2Kfj2HqQ423eQyS5sf3rpp5",
  "key21": "3CgfU5ZoHU7WrJEkDovGEWfPi6fjtxBNyecihfMaLLxmBm61VshTHbAsAdvBEhiJbFn2SanhA18JvHuFUwnz1FGT",
  "key22": "2VmjvyQ9hhKehjJ3ZTPpPVuTBQBj8kSTqXqKgQH4BJE5bZeBERnywA7rKJw4bi9eknPiAazwSrmNLghgHjgB27M4",
  "key23": "5J4qVMM7MySUPQpTgVufN21JJEadvjqwyZfvNLrCHJ4nWZuqhNPaEpH8yGS7jWKYLr7JFFHrKpp7W1jQ3ByRTRUv",
  "key24": "4ZFCqCGfmvhVkoccyhj2492zkBCZC67ezgzDewJPs9ZvREYbcSnUTxGLa8gXiKw6SKr1V5vnGMabqbftqtb5PyFz"
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
