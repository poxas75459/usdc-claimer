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
    "AHD47ipQwkG6aMzftFNcLawsaSTH5qHyk9JyMRLsobxMyJbgZNnKV1RsaRuVFdK2TRKtYRSraCsoXg55i88okm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctNCQKF1eLm6A2AmcKrWEasWm42hsBhRBMoCMBjMwBXuLBcxpmeikjB7ZQjcVYWXqUVfpkCoURSB17SjqGN3mwd",
  "key1": "3RPKrfHDXhhokCB9L6bvFRD5DtVGeJkR9mkmQz2f9gcCnutfepQ4ZMBA6opfRTweMsYbnRS7MP5D31mkKgRSZGQk",
  "key2": "4reeatvRavhAZgiPUn9Q98nDXFzD6HVxqffXycmz3Np9ii9VDxh5gkZvDg9fdQNQWfDwxaBvrey5yTJu3EeScyrL",
  "key3": "Pyn3FyPbHd37dHhCMrmvv1BZwdmHr8HR9unjXr8Ha464cfNKddV4e7Ptz81FsGiCshtSnNFWAUpVL7Bp7wqSxvQ",
  "key4": "5rrYcQP8X2ruhmoEeEacbu8rwREupyw3xQgTHAuWiUrc8FUajf7pVa3X9vvX3j96qikJdRebRBA7pqcp3tEZodqn",
  "key5": "4PefRWj7APsRpkivPE1HRZH3Pb5Ha4FddQnmvYrjuGiq8mK2uTHfz1yNay4mGEt4rnFCzjuLbgUheGKPg9LCs2xn",
  "key6": "4iftFPrEW1g2qvNkpC8cf9T9TQSGgyYUxoGVaJU5RiQwoFqx3QhN3s3sYrxttPZzLN29R3NBQ2k9kq4JS6bCYE1m",
  "key7": "4jMS6sBH9CzBCb64NLGH6ZHyH8aueFyZQCEJCGvGTC1To9P28KrQvnEgwSgb1S9o2Nk57CZS2Pt29ddnZW4tmPzY",
  "key8": "3KaeLA8xH419ebzEfDebECts8zJeBSQvRB8cQiF7gwWwxEzPNybBSEj9UaXsbYTsFNhHiPFy6hLT4RcDtMJAM4EP",
  "key9": "45vJjY8ibVdSXpcMoQYviKVFcmnoZynwEJg8sPkPkeHac1ZKDDTVkojBm5x3cpCYw6zuCsdTTXPnKNRoi6eYqbNZ",
  "key10": "52eQCCwpxMGw6fBvSt6ASByPgj6hdRjtawPbNZtctp4PFhfgRmksPsbzJ6Zb9meaAWf18dMVmUh5Jutgui6kUySR",
  "key11": "UrUthhkx1uVNPY9f2QVctFKA7AufrrsZhqbfqSfgUqfsR4Axr4WbeuGsYRhxkkc7y2A83bUdqNN2H8vmKQzXnyW",
  "key12": "44Xqj7MzUmGYvzBgZ8uCMF8BrnRaRpvijvDeJzipUXTrx4d7LGJ5TM3nT1tf9kx82R3wtJ7jqfzVRZjNdndE6w9D",
  "key13": "5XU1KaBb66n1EHkKm7i5YmbBgGsEwUmbBXzS3SwFPULQWVfyB7AwSgSoyJAbuvAcA3KehxMsaGuoWa8f8GAVfmhL",
  "key14": "41MCKNm5eW8JmuWNg2vbrKUeain3hcT2oexBkDPvSPDFBDwihYqcuHeVhkL9FbhAHKPETJAPjxJ6RoJmLZBSFJpY",
  "key15": "4t8utk788H2z2tdmvC9r9sWqLVFwu4gGXLbXoXacrDBLhfgZ2NwqYZsxBcaE3Z4f3kQauGTQArzLTamsJ8FYJFDN",
  "key16": "xLv3GcFFQTYonVz58oJHHMF6zKdxKtcEQDTjTUj8HU6kfzV6HykmcvxQHinh6YHnty5bK9yej842WsanxPeQeas",
  "key17": "xobfm4uLn5jeZ5pz2B3bHk7LjDQkuH4ba14JqtFQixqF7nNiweaHocT2PZS31FBFBCShRVUDLdJSxXR1Sp6BkX4",
  "key18": "5LrdjrtWeBonU7mVGR6mugHqEzFiudnrXR4yotjCAqR4zqhNw8VokEHveychRqxYGzNuDRAX5RMLoAoefzLZwLYa",
  "key19": "5g6H1a1HhyoRrUhRT9RYBBgx8BazpPYUyYmXVMvoMxCw8fhVruWkJZGTqBiEu7MWvrTb53RhYmjiPU67JgkYgsoM",
  "key20": "2ANWH5C1H8K7R9w92Fpsm5E2u39tXEsNaN4YX3vxB8px9EAgPL1qyhWG6BASL3CiNQkxQofbF16oVtRnMhxuNKn4",
  "key21": "5Ys4yRUphAHUx1hFJKfANjvYUA1mJHXzTYtX7DjLhcDqkLHVe9SH9KaPMfFDLxtUkKYMCMVmMmSPD6nTC58U2vRr",
  "key22": "3BShHDELKYL763NpLSUq9rzzUrabKURH436JwiC2FUKZ7KdWqDxADDawKNn8GcrroNCxJyTUCS422Wf3pbdNzTqi",
  "key23": "4xNJ6SGZVGzNsEK3qZxLHE8Z3GZxteHXRsk686M2fVzaXiK11DvCnyyzX3T5WomxVECUNB15hRnwx4wci8ZD7rf6",
  "key24": "xuCeiYj7K6qoZjpAj7DH1GLdxw6SsVmGkuXQYujBpns3MxowHB9vJzgiB6X8Q9spZB51EjZNbJomenSstMnaKdS",
  "key25": "bXZCnMYrhK8ExiLFKCPFoorv9JLZ4wTJvW3jz5zDrKDE13FYrwoF1fPfFmp7KPadbcsGNJXVV7bEucSQW4p3MxS",
  "key26": "42R4CfDRfPGWKEqP18758hyvsWE95s8FpoqS3zVeF5GWkPrLZMGQ9XAjW4sFYCQAdPjUr6TktaKoSt8wBL9scZmJ",
  "key27": "5f8xZtMaXNy62ZsCnFUizq8Lfpb2WHAsRr3NM7kv8cYNxB6hCgh3vgkGjVPhP1LCEwZmyECntqsy8j21qudizRCZ",
  "key28": "39B8DTS4wBs7KSqabXz7NbgQYbW3VyXqinav9Wn6VtSvuMEoahGVZ4L1T6GMqnuJtyvpbMbB6JGV5ASgApUVF7Ci",
  "key29": "5QNWwWdsiLZkZbUQqQNN4oErXADSWo1Aodg1GJkjwxWAkT1DR4Qkoc6CqGKkFyNccskWfHVFfEszaHBB5wkUsg8N",
  "key30": "Vb1bfMNPWq7gdw12fJrceHW7rk3bZzUMjXwdESuXtiRztneMSadLq9C9J7KdkxT4ewnvArdo3iWgTSjB2eEu43n",
  "key31": "5erH5FvTzYhsEWRN3JqUxccfipwbZs9ofd7HKSurfkU6PZJJiJ93hbjrr3ikbo9pfjh9zNQDs8dG7FfE7xpr9Nu4",
  "key32": "S9hUYBaTb2MUtt2RaZ1cmAwLDbthWhx14cHPDvtcKYW8BoYWDwYb3DR9BifN7bZx8kUyfHGSKKAPfFWLyi5LrQW"
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
