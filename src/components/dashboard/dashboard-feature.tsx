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
    "WhVsXD86rNcppqyLRu9DB93oS3CRF5dNcHkMurxQWruydSFMjR2becaM6PsWzrCCPxcd9L11SeGHeLx1exJMJAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukYy3zbonyoPkbr3azXajuUFiPcrtu8CAJ4bddbqeE8tJ18QZuenXz2kNevusxjKe123BxuNudMrTowxYPY7hZK",
  "key1": "fbjta193836CFr15TuFxeeYxRaqCDRj2rfwzN7mPuHJZn7UVtoAfjWMfapMuQFE7fhUsXG3uZS8YjBVhUKqFjcD",
  "key2": "5ZgYYackSGfWkobdnMMpKdBR8FYmQ4e3NJigpkyCpUv4yKeX1nrLviAa2Qno5fbwrnRRTLdKtH3CofeBhTrd9TEM",
  "key3": "64v48vAMTEb57xpiCa1giCbZX2ELxYoHGUtZWEDUTuELBTH76rfE78PqmmcAtbqVAc3JGvWR8yiyqNR3zxokMJP",
  "key4": "4TPfJWA5fsJQiB1GNzEUmjhPXUUjUXbgjuoFQzUpbEN8jXzyZMRGrDfUWV4NXwNBbXWsLZ9ZSLWSCUCJ8xNNmus9",
  "key5": "96amsE5EcB478wGg5FiVZUfiuREAB5dwp96fRTCQD7rYMArxzWZUt7o8krpnQrJd6tkjfWNJqiBaiPkyAFCbnAb",
  "key6": "3mxpsWrqD9qyRTMtndhe5ewbviedwHSTNvw9AEG7NgRug9mvCjvxiLtaKJ4TyEbo5RJqkd4pyiUQkDUWEH76yWsC",
  "key7": "3Qbm3oC6kpVumMSoRiU1XbVVGihep9HpzdmsagTWQXjJWsNEbsECQWHn5aK6Y9qWnZV8iimfVwtXcUsVg9bLheVc",
  "key8": "2mDXe9uQC1ppj2Bz55yfTZMKQE2vEjcQKms593PFWPELiYQiHnKKgin5VYbMnvja1nx8y3eziwujMJzQh9jSQfCs",
  "key9": "XPKdboV3wnAPx1FLBHqcMw2LeeP6ts3jL5oP27fi4thz6i86BNQN3AQMqPNKqD6c2qKAxzdHAN4rnKeqKkmD8mr",
  "key10": "3snMw3mN417Nkb6R45ppUGyfeoFT2a8yHfejjQ1nqepjKxfHeJ4C3n36PANwekjj7krEaxx1bzhhPSYn9PXxFGG3",
  "key11": "HNPL1MuyDhnTGmR8dHNPY9UZxxi3KWQaey4LreanB4RJH9pokCB8UUJNoYjTXG7ykn5qGffYKycAwTZbtzScEjA",
  "key12": "55r6LBDSHkZ8Gg51cge78MXUHFCLF5TNr5c8gsaMMe3aNerHPx9dgMGRsJGhpAmpFAMAqcraKkbSbGjVXd5DxNZf",
  "key13": "2sTEL2Q9jELPjwHpYZzWPovtzBYf52FcBRpB7MQoXQo3wdXe7Lr7nHCi8n2Maqyp9W6aJPVqbah5RfBC1qESko3j",
  "key14": "4CjuY4hzgJ8PM1pCPgxzBDrGUYs4BoCQaGiy3G7cZw2xuQ7cb2N7fkQr7WeyEVozQzpWmjNmPyfXh5ZYRzRdSQQ4",
  "key15": "G2hv6dugQa1thQjmeBDbU8eQ8AtrvtbkbQwwxSx4XHVCdTarHKqL8KbrqtcQe8HErhk5ZvNsgkqEp1YPuLRPF1V",
  "key16": "32UCYLor4JJafc6R3LMdNTuttxumSnS51hTx5aBwt3vZNaKA2LEgfhPuEQmtCuRf2bAzxvD9TMZc18hbUsdZuQDz",
  "key17": "JXmdm5upKrf4YqM6Y8zdHQP6qZx3iWin8QUDfmzMGbsFvkeSXigpsXoj6PGnPANPdRoMkbAuK4d6bv8sSdi55X8",
  "key18": "377i9rtzygp3hXvPwu2jyhJk6MbmtGG6pxMMmedbbGYsS1M5Rqgn4M3KKeZkncACQXFqUna8jPPDkisF1cQ6qpbS",
  "key19": "5BppFRYyfWR7x2j3EKmPgkNs2YNZwWcUzceyNyzyyBWs1MFFNq3Csd36pbRghU2GgLsM8h3rSBSBNiyADZxfrfTR",
  "key20": "4Px4fePNy6jRYFha1kugWbu5riLE6CCFJcdPZ4CdUFLtDt7CX8BmShcuB1ysU1CC9z1UXhA4a32fk7dnKRkMytrm",
  "key21": "5tKrAGy1c5yXTt4m3TsfKEBUsnvvx22ajfndrbnmVRPBC9i8G1grLe4eqAFwbntYxyoUUbXZDRP2YzrkaC2smA4J",
  "key22": "PqqDHMtrsNswm7rhcR3urUpS4xvgjP73zK9GEgpD6Dqx7C2hBh9nZebLMeztb9B3DprQtr2m1tynajC4AvMX2kN",
  "key23": "238gKtnQmPzVcuLap26wHG9Hq4goHVXCzYVWngziUWjZ2FL7Nz1kru2NfJmXPeckG4Let5QebV23BTYpK5suus6W",
  "key24": "5RCZECZJZPYyn3NitZgzxzxaTQ3Ds6QwesqYDAJUD52AgKrUGASZ8LLDYgajFXm3eVPcsKf5Wd44VDH4qgDX1RfG",
  "key25": "46hHJVxn1GQWV8wHetVRmfZuyzPj44NzkDuqB1LyDAWDeaVgVSQ4EzzJtijCA8LyDUMzzf9RRU5Vb6Xb8oNn7ns",
  "key26": "oWwXaKWomwrqKY4wcB25EtBv4NY8U1g8e9DVeEwSPsaRswFZAkMPPmFmnXtgKcPoFfkWrt1aFuG1m2MWesPsnZi",
  "key27": "eiQRNnT2Go4Rh8nzDZD1vZPxWpAX4KB2LrbeDLUDwWbHGkjFrcVERGc1L9cdbVTxTfjnzC6wmt1BLdUwQsFsBYw"
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
