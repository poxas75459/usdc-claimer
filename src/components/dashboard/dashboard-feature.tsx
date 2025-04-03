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
    "2fne15ysjgr1SHJqQuKCNG9KjnyqffEnnYhzZTrKmqGQg3fFzD7sQYjwAJXN76AgtBB5bN1crXZWs4AYgujoPC9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZorUXGw6SUDUSafiRFfDtj7N5NdjD3hwd2PWUtAjYEXj8etApY2MAYduSjW4DHdAXnk2qnEJXSe1ZSAyYU769ph",
  "key1": "27tZqCqAtsyuY2TR4uWafZxAcvdiamPAgyRKptMRHoeMkzLY1Nfbk6TsqjFGvvL92dn7JSEg2ka2qw675v6tQbTF",
  "key2": "nRWejuRPULf4rcPjSRE2BapXqYXyZ1MANAsMZf26bzGzGH5w16bssAPvoTovt9zrZzMyZDKH9juyzLVR3r5h6jq",
  "key3": "4gWGRwM5uYtLt3kf8sgo9N9cPp6FEAzqvUAuyfCKdrnLQAYLsNeDqSFFosJpXjUHnHwMCx3dM9RKoMSEyZEDx2Mi",
  "key4": "UNv7Fkreg8mDyN4ULMFXJZczQ1HmeEicNpUkMqCtJHZtmod6L4FZik2xxZ7KBCmXgnZkJWGaSvNA6tceNRWNstC",
  "key5": "3BfV5guiN4LtWMiCtH15RUqB5zGgabg6zup6GF4qtyuroThK52PDvh9g3UB1er4G6HWhqsMdrmrpgHZWBHfnSVYC",
  "key6": "4j7cwCyUsroxYSyfGVJRzuvuKL5RBSprJNnUkiqJffKinEpiu2yaj3ueEtKbhM7QEE7EhnH3fynmSV1FtjBz62Qo",
  "key7": "2EPNy48dbDGMf48HzuLhHsKfbjLHYoGoyWppquDEAmyAdycAesj9t3NbtqzPq81KDzgDdAgNisJyy4suaY54jrSo",
  "key8": "2VZLbhR8eAAdRRSfNXR762VuGhp4BwUbQs8kp8wVkALn3nMqP5eXpD9MdKPxXnVayqxjjB62ccpgy5JQPW25u62a",
  "key9": "5J3qtBP8ZYb8eCW6scUabqMd2Eydmp7p7GjL17mqGhAeb7hWDJ5ktyQDdofYb7sGTvqTTeDaJLvwcH3wSgtC2UfT",
  "key10": "26S66cob9rhokAFqwpL1LFXoLSiAxy94fAUqWm72q7zT5oxbYNGsS8DwesE5bptvAMeAXMZyQjHWeQWoxBPVFMZf",
  "key11": "6phvrLpUBYw1MTRMpk8T9EKbChrBNiEAmaik8gTNKmN268fZw8EcrA1tup6ckPU2AYotkQBha6Qvhs2M2QNYTe8",
  "key12": "2GLYYQb5YYm4mtvnqwq8cSgRkXCNTFRRuk1Tg62ML9KDQjcVkYwM1YmPbJECXGodnTamDjr8G468PFn28JQmUg5g",
  "key13": "3weWc6DeVP9gGHdkxH775UmEP9Fp9uRmHiDCHKNgUnmCy7bLxoNe4qdkUmopJ4ASRwfigpfYvLacSqriuWczqbPX",
  "key14": "5cvTfiL4KeKaoSZSRiMs6TcSByXpCk1GEvtckAioiXpVyR95jVm3qVeNwwnj41tE9vKG1ZMrvcXU5ss5ZHLwtNqy",
  "key15": "2E36rMtPVeU277aeKu21NHhaYXDq4fCHby7Au4rCvMHit1fRPuQV5nGhM8MkwCEgqksfMUPmmpg6izF2p5sgjPbg",
  "key16": "3yH3fBkcjhAML61qKKaKcQXPdUeYCvPbLHwQYSBf1HyDmWjpTGXiA3AT6dzPwKFEXYnytNqpdEoFJxREqw6BgoG5",
  "key17": "31hkUGDquNcVgqPYPbqKi96nHco3nWfetmf6U2pJe7UPeJ6NjopxQEadVx62CHqwiqHAzTHip9VvEYyoVZS45X3E",
  "key18": "4G4XdrGfTpjHSfWt8Kq1LBGnh7uYHvhf8qpBJDu9ehKGkZth8w7WaZqRcRYvg4YDwA2DH97Z2oQjaDuUBdsNUtHk",
  "key19": "2XwHP1gULHLcecbuexpQCAd98mtufzNYcTt38nNCBLEWuvWuiUZ2QNFbzX8455tTmsrrzrnAuicjbBtfTXW1bP2e",
  "key20": "YASPd3JY5t7ny4nou4qLWCwRdPwhu9ygisRiju3DSbCvvR35R1oRMxUactFhafQDFzFktBXDtsDeB4vUvQp8ov7",
  "key21": "5yuA3XFYPD8pwqQA5QZUiUkQzQreiuaYt1qJuAoghzUvu7kmXhg5KafQKVPJqvYKYezunG5RuTtVEZ9zgRY7C6wT",
  "key22": "4Qkg2YHtpqhjxyZhcFk9YFUqi6RCf8PcBeZQAKYKA1ZiUrnbuRJhyaQatRh1jmdfDabXNqhoYmjXb8B9AvDHk3E6",
  "key23": "26NmMJwFeDVcHVxZXx3XSnpphQfygZbgv4TsMWB7szXTqRrhWTDNwxWKJaNs1vPwfHoA11Ntjswxt8RJFYF4a2eb",
  "key24": "4mFpAybuYqJZhBQhporZ3R8S7Z8hSBd4NQDF4dyBAfKyPzYNxMZVqFbt2vjMDNu1zJWgJpdan5sth5SF9NbVhqKA",
  "key25": "5H4xme91z2BCt4MHWygESc1GKwqfeWVySxLWtFwPj7XbRzjaRtPGT3oQ5Zc52Azh7WDDh8mt4iojvhvBW3w3AT8M",
  "key26": "N5cf1tVu1cK1TBUPKCQuFWbNd949ynP1N7HY8sp7k5LPu9Ekhp4wbud3Qoqia2u1hoCqXwrkfshjEjkcRccVHD8"
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
