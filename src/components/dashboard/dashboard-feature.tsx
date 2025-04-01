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
    "2y9pJyeWNzwsmGT2CdKkMvHP4MeUPrycyg26Q4h3m3LtgmLZWLEZHQUaychMfY67aGv4PpVycEkvrK2QmYiUWDg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yG95b8h4S7Msge1yvfzmkuHBEM1jixcKtbALogaxXNfP61HjaDvezUtNaJ934H9ZH3R8BkGqQ4mhfi82n8fyund",
  "key1": "2uwXEmTh517KQKA5MzoCZXJauNZzQ4HKQzgyFrNYBdK9uk7K2G6UzasCF37vibv34rfAEaZYkj9wceHtg5EpJw2P",
  "key2": "be3X1FvmAXD6jUA7odCgdqQNeioZp6fafatJgN8Ebo9ksJyoF8bTJUUJNP23JEwqUVAMUSbMzygoCeFfruSvy5U",
  "key3": "4TAjrLPBv6NEXoPeCn6LpijSpYdvdNHULcH5H4dYYbRACgBVy3Er9yQVxtxzx95KgPiX8zUxxQwf17G69c6y4wJe",
  "key4": "2YnaGVbsT3rf5yjLhRuf7rMTci8jWyh8PLo7WNYCsxyM1GNUZE4yGAQHuD5EvBXURekGVWSGMcTYdf4LA5zbxvaW",
  "key5": "3EkyUFKSo63nujUE9MaZgDN4tHStRTWtNRPitJHBtcX6cp6sRhaooy2Hcb3cui2jkQPPj2iS4iuzpQsvXtCdzf9b",
  "key6": "5vMj7dZ6FBY1dYTd2PoLR2nEiR5PsqPdpDZn9t4KEt7sLEvxidtMbgCVNHCmmYsA5zxUaM43vuRthR3HEjKtTu15",
  "key7": "3XAXSLGxijabL2fFzdZwnbXCnZqEqTZrANF95zkKKE6i8CV8CRZA64GZEJheScnjvcys74wsmcWdhm5XLe84Yh15",
  "key8": "2EbLoVHyUit19xTqprX3v3bJgWhLnoxS6jVuFosAtkoJ1ZV5wnLU5GLEFEw4tf98hNN1GMg8U1n99CFLf8WY452J",
  "key9": "34gMcVBGmn22Whz82eVbphnR9ju5ffhCpdMDwd5kS3Yg5LLdr6ZZMy6TEkykeGdYGHizrXHu8HVFSA1L93ddwfye",
  "key10": "4NCGdrSUSG3kAosJdZAAZmwhmWKikw7EarNcWWnJhyBtFRmfsBExbuZgiLK7TG4GemMcvDQHGWoq7QADHb8g1D4X",
  "key11": "4xsShmYWuKq57UbXo4DLjfWaejLKnRso2vuXxWcwfpNfw11SmdNvc2vHDu8RjJyFTmZdvX5zV2GvjcJGPhP5Gffz",
  "key12": "3vWox8h27EMZkRNwSGQEhq54TrnQ4U64pFKa9ak4EpAFV4q25qnJtewTSixRRNr3rxADJEAzzsQLLFUgsj9qoUK",
  "key13": "5FVZb3eNtV5i3zMxvrTgi7L7v36B9ggHLm6GqjwwKJviN2j3xoqZS2DKrT6FpgKCpjY8k4v36t4LQUiSx66MCHmX",
  "key14": "3zQrhX1aPvV5WRjgjQbhxJUctuz4YjqoZVVVdJo8yP91AfsgT2MyuuMzQEHQQXDu8XPw6jAKVYQk6XQkzUfjBkUU",
  "key15": "3feBxXsn2TEtuJNWHeJcDdH2UzEgqP8cB7VhjGFWpxaSgoMqUPXaNxjMEwoQbEaCbaTNpfSctFnXUikgVQ98xC2T",
  "key16": "31KHaf8HKftYnkS1nwb97VviK7FhShQ4PA3NJPkfdn7TwdjE4xyZZ6n3pkWgVwrUCoT6rCGEuFQK3zQakuwavCXs",
  "key17": "TZQfXkYcXid4A3kyzTgHB8RvzMEuf2H6ipg9dQu7bbdcobUczEKguTeFnxYLkUo49TTcg7Wn4Af9tv9tnvPMhT9",
  "key18": "SDgLCiBQWWfmBFDZ8mfA18NJcy3b42r7JHvgkh993C7XcVVabhmi13iJmvxe3A8RP2u73VvzE9weULEHnwDhWV2",
  "key19": "42QQsGrzHKY42t9RtuwUyVzYAzBbxDqwXx7JKbbfieWgzKL3CxySRt7BZ87JsgTu4xgkvKNxav3kuXbMRUhQcoGh",
  "key20": "r6hi145mLYhfJDMeVjr5jNULpNAzFW2PWvV5ZkMFhy84bcYS5hN8n8fHjfKtxUj2j6ZXZ6RakuVpcmnRaLVxH8X",
  "key21": "5xdLkPoTTVr8YA6BUrpB7U2o2JiNhkouTh9V2euzYFxcgWZsGLdyFxZJkpsiPHenfVSDqSbC7boEcfwv4ezBdJap",
  "key22": "2ba9T84vPw3ia6ymQ7oHNteif57UBJWi8X9qNbusM71vsDhbtNyLFyu15gAiEj6TqneP2QweiCNkLrmNLqcs4bd9",
  "key23": "2EnxpwXWMnvamFiWUMqeEF7z2EAeLmkkKYGdHsk1aEUh9RE4TWQZu899zDqbcU8LNPNySaQ22rU6iNtJoYb1U8Ye",
  "key24": "3guHbuNEMU3fPTw5DCkMcoEFAgpxja39513xXfSfcG47ka5N4ritQ1Yu5uMhrv1FM82jU7JZqZLGmeBREEA83Xy8"
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
