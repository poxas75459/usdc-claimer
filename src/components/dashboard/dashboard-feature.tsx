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
    "TBYA9oT7p4y9w1Mk3y9PHBXo9GBF9yN93gyBiehBHFwu2s4GCXkAKNaZbXnzW11qQXJa21x251jAH3zp7yTts8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNyXvo4wrYPPouJDBopBLKjCoHKokPNAZxb7ixzWKUHqRAcsmKFfckeASMaDWqG3w7Bu8GEC5L2WjwcnHrWnyEz",
  "key1": "7LPpb4Z12UiPXa42bb4rLL2vmjXkSKY4BrVZaskzXsss2Te5ffCQcfph3UNgrB6nekcuqrBBPfQEKCd9D5j11GX",
  "key2": "2sV42mUtPGN8u3zLsPn1RYwxKoKMqYvPDV5gbrRn6KBrYnDaccCJLnvQgXVdEzCrVo177gg9v74gSF9UCivHrRK",
  "key3": "3TwDfM5AkgS4MhRmpsKx7fBA5VRbJwyBuHAgc8YhE5B4FmYwKbjzxNRcj6rz41cbhyP24PampByeeTGsmjo3K4nK",
  "key4": "rZ7fP79V8VBCMXbA7BPGbmY38EFg6Y8dMSXQza7EzSAyksKqEumLqQ2aDRyAiUSdYvkVK35CUNDGiKheARKXehg",
  "key5": "me38BaQbA23odkFy7MGGdvJVp91ho7Kp69yCGz2E2FTaXfVRFfLTCT7LhfSNar7FSQNhmmsUpzBwFphXGzQgkxV",
  "key6": "2ffSxwF4fRgqVV2FGjB81Ma2ThgFkAemPSRSnC6QtfGMVM7iFzSZ5owtVbPSo28qK1W67RnpMbuAXDBSebmNAj5t",
  "key7": "4qzSLa6xsMGG7MtxFNKDRkiWXF7VyokmidTt2TPFFdJiExU6N6V7v14ztH7xkG6PhNnkHxwf9VTexP3fcTuFHbcZ",
  "key8": "4Lnxt4ExEnG9SK1Joqnp4WejBKB51H83hvaM8uAJJogdydG4NEy7TAGubw5qSLibhqKZC5Eqh1JHsCTMXyrmidwr",
  "key9": "3A857PGtZGM9QQMQ2bHRKHVmXdyk37MsU1usbzpAxhTWbaYnVyNk3z8si1dHhinXhzjacd7fLPPqs5HhAQzoqQDB",
  "key10": "4DwJRtEZ63Zw4jztnuQpMz4Hk8JVx4mBA5tzAZTwgXawRtNrrASWM9F4sc8DpjiHvNWB1JqPn3SQvEpnyNsWLf6v",
  "key11": "5S79Dx4vwSD2RQ8g8iMZHYvVj7axrcvRrY6SiLNi1mE2Fjx2FSQVmRzRpsPHeUdrjWEgcdHhud97rMFdMkRFkxSz",
  "key12": "JK2TAaWhRmAPKMzHr8346bfPuBuJQpqhXz52RHhGvtzRSDaMTuycgkrtBbWrG4ZUhgadXTbkAwVtmiRc5VpgPKG",
  "key13": "2QGqjpxRvRt6Wg4zGFHjyPpZif8PHGk2eT99vcyWa69v8qukHgW6wCBbsx8TCoxNvZfNMg8ZsHEraby9sG7FsTXS",
  "key14": "2W64i28dENFRxJxDRdW6yEfQyAf7wLJefQNUg4RNdAiPibUDpPugMQkWD1KdM5PcgZcpFu6ZURJTWRm7ffDHqZNM",
  "key15": "4zFoAeYivaJjbCm1Cq6Su4doQAa48bqfvMbkEAM1essXKqbSF9i5wt4dvCpZds5GrKTdmdR3Wcb6EwZ3WvLcytJL",
  "key16": "5ukW296S357essDUQbtaHV697Sr28BrZwHqRYvRijcpT3W6yuo6jaB44tqvjSPYMAgjcTKHhYYGwGhDQN2xCrfCr",
  "key17": "3XeJRNooi2uvjE7wAzbRJTjEJqMjx9e6YBrtVJ38qJpeTABjhZK5WwiDxJK6SrmZaG6JYyRvGHWAnbAuPXrRrgND",
  "key18": "3E8B6ZsxUYT3Jkzu3YbRLggLLscPHYRcLmRSgJ26TtnSD43XcXmeM2kN3qG39qZYCREXCKiSGzBmasLuWZfwfLKD",
  "key19": "24Sov21MNvN929F6vuViMY17EaiBx33c2YVrXraCPSM1HHZNzgxpxLBMdttW6xVvhqQdcbyJsjqP3caDfR6GyAyb",
  "key20": "5CdC44kzETWYo23VGAsBDUAGny7KXjtC2yaa5ojPwUj1hrcJ7kFr9U7CqZfyR2KQ7uGCMfCtm1CUiE1Mekg4SyNk",
  "key21": "66QMd52cMYKp2U7H5Tmw35UHtuKNXJ486qFjJhHYoiXb6LJCwE5x6dd9coG2QsyQrMBFCgiNVP3vVCT5EkhVpjTb",
  "key22": "4eckJSnpYc4HZubRJRYqKWEvutFUMon2xFXpLEZBoobGuf6hM6R8w2evWF2eJh8AEiWxf7E99wTtxZHDE5yRPYMm",
  "key23": "2DByCZc9WRzrNAZ6BdgPrzTizhs4Jb9ebVbvrfEJAuXkwCmnHscEZZXZNBiBUuvRdALWHsj6wdNShXwkBty6H6dV",
  "key24": "4hVUYzWauPmpVAxToqh6k2tLDPmrzn1AJRYc5xxp7T57Ew9Gfdm21bXu9ENiia9SP1GGDu3E865RbnT2j5fz6MkC",
  "key25": "57vhi4688ocKPzrjpVKe2fbxQqppQkjuZgXnQUdpgCHxWAtSF12x2oSuTTnDb2FJKTHyKYM9vJ8SkwDzrYCoWP2s",
  "key26": "48M2XSWFwED6HzVWCEZZiFBtCdLumWgB2EN1m48cp6oWDCv1GXJrEebAntMoLPctbG7g7TxxJxW2o44d4CYadCke",
  "key27": "C1y4jNmHqF188ZdAnY44VE2dNHrtmnYAPXFWFet79u6NEZPaB3iD1WCafK1b45WEThCspFySZtGaytR7nR9QxV8",
  "key28": "Bb8XQBeoWCo7aGCvNHZcCMPr1hwDTCehbh5uf4mojnBD1agz7B55g6Wrzcu5D7qnoE7D73LutgmMLgAdq1G8A2A",
  "key29": "3uMyFdYPo74hXyGWVL8Kg2WjEdWBkngEErfsKBXzuY6UqMy6dNQ3aXP534jootmL2qhtVPLZSpp5qtSnqiNAQZ7N",
  "key30": "2GLVjfDhGeVecHnPdfrvmVYEEx1SRQFi8Ga42VHosYpX6M45MJyk5bSMvY7CL3yWqGaHePiKdyVB9PvGt3BS2jJ",
  "key31": "5k7vbkJ1EwSVP7CBxLhT4GeApLxEuEH7tqKdgJ15gnDznJXsjzr7pEk9vmBPFv2HsbYxkm38uFNKW2VvjPytr7ai"
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
