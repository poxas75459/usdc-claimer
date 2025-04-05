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
    "5BipRfHpeFh2Q7yXdrrTUye1fYZGrnLzdjq9SFx5rj5xe62hDkCHfmm8nWre6L7oBPtSW1igpvv6JgVKAWNdpo2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63d7vAvM6pGXqXTg3ELX3g2zbCGYJL6WF536QGHM1e2h8abrjQWdDEUsexiK1m4bSza7YAzMg6QvGmBAoTKw7wAb",
  "key1": "5CRWnnHYtuT6GpY6uY6evDDAG8BVeh3jsPSgKxRSEX7nk9rZqKY2FA9Lm4QFzFAwdSKUhVgRxG6eX92KuQ6hf5iC",
  "key2": "3Ke6xiSH7ZQ9jDymmhFpvrSKdn6vkxys4EgnRfi6MZz7ymAUYD39jU7MzutSmrPmyoswoLEDuZULSnmvJ3TTK7QK",
  "key3": "5j35ZFczwy4ZyyeoYiUcqRqztCu71u49gyptSp8SjPiSMnJbiVH7Fr2U3tuEWqCdek898jMqX6uZ26YwUeSgun7D",
  "key4": "4bWDP19SiuEEvW4uPZx1vsvzoLWpxdRAQXjRnUcRaRXFA2VD9fapea58f22JbtkkKrXuMxDtjXrBuyzzwZMZczVo",
  "key5": "2AasPo15PjLAihJ9hupzALZcXpE4rjJwt8MXSYd1TsskrCjy6Z56aLC8qoQa8LDcQy6YHESMJZBNVURPujhSH87n",
  "key6": "4huTVjdfCgPQeWnjv1EJJbhKNLxRb8fr68BNFZaou9VVWHRX6hqrxFoXXxiTu1SEPTp6n9nf4EoCq3MY1GwPgdZi",
  "key7": "3uhgMdh83nvCLXVDBt3xqAqqPMq6pwzMLjEd6PRFDKARs9dzSrxHz9Dvj3HLiyZXovzfVzXvW62KERowgsrXpiqW",
  "key8": "JpJ1MTSoLjx8uFMYctqZ2mwe3sUtxmUwHntYjgUFqj6t2sVa9VVkwaPf1Py6YtqwoPrrcQFfAVyM9YhARtppne7",
  "key9": "Xk2JEibwSkkzFhWHpgvCpHfpZsKkJSRh2ZCYXLfCG43qTE6cbRS92anLkrHR51Gw8gE7eGoYCGWNzm93FUQp4kg",
  "key10": "51ynggsZoQLzcFgFEgBHjrcigs6CF16MZwNQz1eDigkCLHNjx2u4Vk4krj3i6QF8ZNrJfkwF3fPzJ71UiL8XjuJh",
  "key11": "4e3Q26AVBgKoJh1s6CsAn8XVBmBfq66kYA3zuqE2ywaSQzAP2XiC3jaJUXrsdCEATT4BtPi9kkmsqAcrsjaEbsP7",
  "key12": "dfrvJcn58fMWXe9khSsRg43rP1VoYR1rsViwtcjmugv7cErNVS6HR9QtYXmteaV2Mij4Q6AAoqeg8iN2eKNUiL2",
  "key13": "9F5rrmW2oTMVqXLcDTysdqv1xZyzzhghFYF4fprUAWtucUV7MYdvxGijDeBwwW2g8hHxQvhed5favFEp8XPErSd",
  "key14": "DSu1oo9zDPUjPqsmkcxWX6pdqXCguYaRaKU2bwNjsQ5sTuCQ8XN72cUEhJ5xmmzRAuUwoyDGWWFk7yCbEjnYAru",
  "key15": "2pb7LNnqxcbrMPUjjdcckGwQ7bJ1bXWDQe2Xacw3ZenLqKdh2aDs6ZCG6sjqZbf2wE46j3JL7BVgFTya4acsGh1m",
  "key16": "3FrXvkhuJ2uusKBreG4tggnotEXEy2V6r72DRpP8qtSWmayzbgHv7NjGKPDCRE4uFZqRe4VFksuPdonWBKCmNxu9",
  "key17": "4HhQvCvRD6YEKM6DNAxqfdFdzSpnAFiT6HGR3u41n5yqUddnPUNM8aRH67DUmP6t94rTA3qVnghQJCchaJdr9F4j",
  "key18": "3DBAoGE39ti5L9MKphsi46W86Y9zyQ21rVFfvRWNW155hJCjmbvWraDJ1kLsd3m9M3i4SC6iXCvwbqnBbXHyDmxz",
  "key19": "f7DZpXvn89rWRFyMJHVt8hLvJTCAywHTgJpMGvXvQszfrRG5Cpb2oLDpFa7bURiQbxdmEuCgoVcqQFgrahYpWn3",
  "key20": "8mpqdXw62mCa5mDhakz4aFWBL1LVsBWx4hrR7L9siTPn4t9MpbUi5mu8aF2D2T4yyNHmNtEEyhPVYE5n7PVb4oB",
  "key21": "MNLf7rAYJRpzRF76EX1xGRoWP8JQTZzAJmvj6nxCJmAJyHP32GPVFHArxMYwTL5jbHxpBra3wiNtSiSwyuwfdjd",
  "key22": "RbeHKtw5LJbGyok4XqN6gvSkt1QzjJyXxWfGA5kDLuwUFvZw2p9t1MzTVCGooWSPNgUKRhAPF62VXEpAhv46487",
  "key23": "oBm6rKZTJaEAEs2GzFBeSroKFb7GewnvSMWweEyadkHw4PeEYZ3NQZJUWscYhwTm5Ypo5FRmG8B9YpDK8Sfq6Ka",
  "key24": "X7dV9ZANeSsRf4Ema8RML1UgCGwkwQcZ3vmccjqoXAPyWgNoSRQJyzDy3ESqD21M13ed8aZ4sBmdEb1U7PzkJK4"
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
