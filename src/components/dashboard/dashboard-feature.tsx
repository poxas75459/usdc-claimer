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
    "5F9X3iqutREa4Pt68EPSdrRY1Eo4st3Bd3tXzPoe2PBgTwVLDnih35V6ZaASP8YtQL4ZnJfCQuWu4bi9ke2LUieq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DLddQ44JtW17ixXRFfC3egPsodzx6ybL5AZ68tipyetABc1s5Lp47Ht2nWYAC8gidnek4XR6yfkcY6hSmRLXSn",
  "key1": "2L8R3ouc1FaE8xuzAoucSpSanuRAHQwnYcVu1ayKWUto9vbuc1PF3nSYcRScQtgxXybzDa4yqzLgvhT5LKYuu6Tg",
  "key2": "379RXSpWKzGCaKckf1T3NKdfCaZTsrwYhyUZTZXdMUVGqzUf4BirWjphgCKHujjxzDmdyNTj54KFMqR8SzzJ2Xc",
  "key3": "2uDDiGYhAVMBbryor1k22BPMkG2N9FDoMF7aDTGuAicRqK3ukUkematcaVGuHcApehXriFqFRFQbCeCFQdQQRECn",
  "key4": "5h7JoSmZin2zV3LFkKXAEtSgvq6zpc11QMhpPRHtqQZGzoHCmMRiULGm8jKHsfiXZYmyHNj3rRV4Vzgmr9aP7vRb",
  "key5": "5LoFXDXQ6KvMAUk5MeZdLP8KEcfm2KdYBhtQfi7PsABwCxqHoNbWkFXg8AsWnMB8Z8uuGucZSMUXreNaqF1n1aPC",
  "key6": "AD9sC3VQU9ZFpuqnqWJRLsZgDDV6GVqmd18TgZHd1WFMfW2sZPDQg585xfQohxCwicBASSaHmhknfo8bJkDbErd",
  "key7": "38k23zddohUHrjxSZMXQcHCVz7G1jV4qsDWj7XZcvK3rACRJZMyniQZCuoeMUDx2ReiQ1WiybFtSsMdc1RVemYF7",
  "key8": "4w55g8cjWssxMyBzHhkZwwUdgJr6YD2bSnsPqSRmXDnk3w3TQ3h2hFmXngz92qLHL92vQaXWUpA6nWXkAEWHVi43",
  "key9": "3hTuKDU9YpgtWbLwzRw2urEVqgbSGw4xGZWxJoiGSeyyrWhArarszT5RL57PZTK2XL8UvtoeKvuvfyR1yQGQyu9q",
  "key10": "2Z65HCyiPqi8yoMeG4JMezyskyCmXV2q6vJ759fCLytzy2bw38iQACLWBkaDPq3D1GHCTUwCqPB6skrbEVS37tW2",
  "key11": "4FW1w69nuvtTdyS3YnsRYrT5UEPEbuhRuKj7jUGpiuSeAziYj735UVAzyx3z8mztiQ3XNUc9syvehzXVnUR9WW7r",
  "key12": "3B32HuXBixUQFWSQfE5fcYWZex7qsp1zn1JFfDem2p4TRKWSADHgY3XnAb9CHtsYjuoWuR6jVMAyLujgcikwpba8",
  "key13": "jMY1f5vQ1ogNjngDntybhP5wmBJ6bVP95PzGZFZL3TzycZnVEPo8ZXGqvXug3ic7HCZD1RuqJiv7QqNgU92GRyg",
  "key14": "4kGqmMTzhc3fVndPTNR6E8YnNvL5fSs8WYHs8PJQ2d3TVbhWBGmDZaaRFrcU5TNLtZb6925LTC94KfYxTXEkdbQc",
  "key15": "4bTubNjX3LjZQGDNsSCWVVjBZG5GRwckCLnRQ1gVVYPKDkD6xbEMAn9NMRYZfGKFcV22iBSXQmXtP8LhqpkudtK3",
  "key16": "2SirVDQX5arLc8B18b7KrQJ5NC6kFZkgUJEaS9uARQeQiogvW1u5AERQ7mwyw6GS6TDPKAomLDa6qyAn5EvQrJ4e",
  "key17": "1HyCombHFcgfHLbWhuKpz4dQovLRoaBZActTQkdw1hXbWm9PuiwWDbALxLnAyFEBd9YS87nvXHUKYP59pJLAsUD",
  "key18": "52RxEUBhcKoJ1SgqNLqEyd5Z5kknx1xHEXZp574E7PSVLowLWuBFoocU31j8PbGjpqz48YArhaGitdSai2mRHoj6",
  "key19": "2fRjnERQJABLaoYGwiYSV4AMhvmtqgF9x874hVxVJk56W8DFyxJBcgsxJntbehPmKQq65CQcNvhcDHceEsEUkQP4",
  "key20": "63MNJnes1WAKCTngRH8S6NEUccVKXuPjnxSm75gU2KSbeCgkP31Chvqur4VL3JFhfRJ6kw8K3yeTkNkoTrBixBM9",
  "key21": "4TQLmhHavfro7TgPawzND4BnRM8sFvgtffrHqmFg9Ni6TaTNMfHiBRtTWZeBrbp6gkSybhqDWTBVvEr2fpGo1Nsh",
  "key22": "42NUYHxWkWTS3RvFjfj15MFepuRc8zx8owbe94nLT7TgKNDV6M7cdsATgwZARH3KP9T6ciaRc57HwokspHiW54xC",
  "key23": "5S286pxG8VrwYMzbUT5XRb7d53iCbRmdPQGoHR8fx8UqqmZ5rVSr1BjzBmqpB7CFuT4fF5cGsCgKg6eHZCVsJzZE",
  "key24": "894YqdDiuiJKCyNV69qpy4TRrg9udvaK2f6ccGjQUS8sELELg1C9sfYeNF3eW28DmxZMx2rFoWkvMz5MQCbzSBv",
  "key25": "3Jt8nJ2XcRuhVaMypweZMguiaFugasx8UzT8FzbdpaPiYwKoF8WNQKvX25rwgZhWsN15nrDwogq3gV5zYhKYjFRb",
  "key26": "gd9sp93au8wi4UTNZzYCkuz7ENoAVNUbAMx6B8yqB2GgTpg1wzTeJx1GCd87Qed4pAbs27jARxi3e45uJmeoVLg",
  "key27": "rFsEx69yYExFT2SHDy2k7gqfRf3gVoGPvDG5A67drSYEoUcp4K18PaodHvZoyP8CM6nQPM1i6ftkxyQY8qxKRQn"
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
