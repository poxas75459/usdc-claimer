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
    "4wARbWiXTX9aTP5u98jYfz2aCHsY6JM7zVHqANgzxyjcHvNoiEz3LyboEPhQCkxwv8REBR7Jjh2TL96rABL3dUoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuvQvfSKM6L8LjvTXbvuhEgMWA18zeRYKH2CpE6J9a6uLTWKzcqZg3YJB5jJeXKxUHT8tseXhkJuMDWNMVNJJ5i",
  "key1": "3SRevWpVbxS6agrPDUJqtNNZ7RuXEBxs5L6QzafAuvBZJbmhoZtaNTLGDhaNDxVT7Hc6kz33mDffxBetvG7sBobT",
  "key2": "2cKSrbwUxvKXS8gweha2BW6t9WetSw4jXdcSdWDbc9BRtazFx47Q5rmWheU7wpWPmaRSNwapHphet3NUxZFBXzxK",
  "key3": "3PtkZW4R9XW4gNajWkDEkAHqWuruUjebTdrBMqauE7e3FZWSm27jp6r5XbCgDRF6FB3528ohFUrqStin42yiDeER",
  "key4": "43LsnjHUkSX8PVtnXJEbvH6HpjoLdtBqiDPuhByUkCk6eSoZwGwvjJhgxDgn8qZZNyi8gimtcCYXDWaCrktbiXLX",
  "key5": "5ykn3NGbWBKRab1TQxTKydyaV4AADPHYrbcX5RzvL54fd5rXwXch3Xw63BrrmeYLoKSuyzrJcJozTvLRdGVLK6nn",
  "key6": "2gmX97KBVWzmjfGURKGmYFZCcyn5iaizNUZz4BHkFXhhewANMNWgoEKYK4Cmcg3cjB3NCRvV6KFSi3b8S4R4hoSy",
  "key7": "bRkpKo73BD5rUvpsabPuUEHfJaXYuxHQp8u4pht3tEQ6HF2tVXVCsq6gbaKhJHmdBTCXiC3VhKLWfyYbUcqA2go",
  "key8": "pav4T3qYQuSi8D3jxjkWQaZynRuhoTgdwA5kMfjrMh55KUfd2GS8eALgGTaktoF5KL1ZxsThy6FJsFYXDhgKFRb",
  "key9": "wDRYw8chcVsjLnZ9bUZLaRJ5maz5FtFvGd9XjCcmtbBL7TUcyLrEB4a3ekLwBp3V5NFJGyaHZLm38bmi5nLkNTj",
  "key10": "4aKUZW71Ec6UET9EyNSoTsSGUP8gXVHoHqEscwejmBfNEjs1zGHJDB79Qx3eiwV2ZJ9ccF9hDvan221RTXCbS6AF",
  "key11": "5s4FSRM7Zkpm8E47TqdPUsuvn1oSQ59ctyNYuBqu8ZwCpaXrrNca53yt7YtjBj54ANuuugWFZZQSZAf8wjiSF9f3",
  "key12": "4W2rDgxf38tYpktmpP7A9P2yvAa9KcQYdA4pMDZBvvJYzdL5GuejnvcPpuqV8E3jBnRWN2kmDqJPcsVEyeib8Usd",
  "key13": "8NCwLx2v4BBXbfNjQ5G8PzNr2xn7EXW1UQ4s6wTNFQAUdwsK8vA5eLsx6j6wcgUcYV4zHAeiR3VrPJZ5wdCSWtW",
  "key14": "2YwCVp5Kqtq17biWezQqR8KqJeYa23umWGwziDE5iqNCihXt3w1FMmsh9UaxxkSeafdHh4tsSMHGeTQ6u7aZqCVq",
  "key15": "4C1cdP1BkBjVxdWE94DNK7vggQBUe14tj7yvbqRkpnmSqjWMXFbw5SqxHzisUzaZCRzw9vgLCBHYigmRK4GmY183",
  "key16": "3htJYySao9J6Z6VkwCBfvBCvKRqmP13aACKuo5FF9js27D5csJwRVD17LhpbPwKRTq8gyNwagrQdW9MJXUEWkuHy",
  "key17": "4RULf6oZmvmUMNjafyrWbbz5s4TCSTKBJsmmR1RBGP5fny1D4ZNSg4v2jcyRQ4Lk2XDUxYLppoBhy62K63SaUEkA",
  "key18": "4Qw14biUPa1GQTdGUGaAQYvCzveMEJhpW47UZowGJnbE4RtqXNq4y9oHzme3JnsRzhTbWpXb1Vrf2tf48JJM43P9",
  "key19": "436eVBaPw4tm86UG3XN9DBThjFT8d9HdNGm1aJKE62fK6PfQyLX3jgJbDgzNm37zB1t3nD4uMurJ5JvLxmyL49yF",
  "key20": "2aoZLmGZ8UZbfRMNZb3kAvbW4Tq1kMJiKudRtDXo7Vesj9vFa9X7Gxb3JEBB4pEE1N2hXfcjEjppsEjsmg1xfLFh",
  "key21": "2pPdgGzqpuGDRo8GDcZ2TNQT69efEJhnPuHMnfbBMNA6A4HPZKXakHMjYxELtL4VAJr8DojwJfmmmDpCEfydtNUp",
  "key22": "3KFFBa3CzwE94KyxdTBpPMjMUZNdbbr14GqXiRng4HyXeMtvhaSRKPbz9ypgR9hwq5qvNhocLP7FK51FKv9jr5He",
  "key23": "3C2ckdhNYzasm9bAMBtx9AFbyUwZ5yL1PMJsDhsp21Uc6xSoBv9bCStsvn3nmPebTLAAS54wjzeQnSTa3hocbzps",
  "key24": "5Pg2YKFZFjkCPHjfBAEqHwwFnorp24YsragCeTVhkvzC5eyZwmDfNbLvbi4MnnGwYMi7kXVygnqx1HijRSFoDoZA",
  "key25": "2JnMDrFTX3tswob4kft9z8UtK4BK3vM9toH3c43DwAtj3uEGaoWP1gBcco6iFcyeKQaDPFYGPrsigF3ir8Jajwa"
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
