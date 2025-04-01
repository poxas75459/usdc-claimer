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
    "611NXN6X5QgwaUctSnQC4NqJZBV1BrDTVHB9JRkXvL4yXWSW1g8zJ1feHEfKBCegxMYpWe9qTNz3dqyQVZXV2iZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZzojzDUjzEEbGQjFLhGVnqTntKwxdy9kLdQs8bPA9wHM9QzjYMgnCWGjnCqiSjLgrktVTsZq3h6Q6ixT1vrhTB",
  "key1": "2M5q7qk69zJ1CevGusNAKBWC644sMbwGNxJYExAHcBDExrHXV31xW9nhgLgSfkhhtLkheDT8gceQEJLd1UQ6cSEZ",
  "key2": "2tS6U7UEHdjRKVaYAKzDXYgyhpTiW6unwPcr8kqUdwJxa3aP78CPxs7HyRrXcVDeRg6QPVtTstRD2awsVFNp6XaQ",
  "key3": "3ohKQYbSZir1NzbPyZNejqQudftW2TCJnn1QkvV6jTQjVrz4nPPssh9RftvZAqSoAGz21J9uq9b3JzktZCm1W1GS",
  "key4": "nvuQ3SVEeYDBEqaeS1JoVX1QpmwFw7WQkqTVeTAZWEi43737b2WYvp4V7X5Nn64SMLAD7vCqS4ij7kYVPKxgNdN",
  "key5": "5ZuDY2A18UZxGQUJnmvq8v5XCkGNSaY3dvDGQaynZmYpfrGwWPTaMrNKRK7wy1mpM2c7WdEN8eo8BVXrXdPxx1hR",
  "key6": "63eAMK85nsAZuUhhczEDeqh1t2JTpftasbNVd3JvwYYW4pfe9mh85p4Fs8s7yM6jf7W2nTuRxPimFLcJ1okB7r7b",
  "key7": "6zwYB1vgd3DZNzUX7Cc1H4TBzHKpKmmjAvGZesQvdLnWeeGytLHFXsAPbZjBe4Xu4iJ4AnKFW5e167a6dKqYKni",
  "key8": "4omxC5QJaKTcTTV2zZToAjBHeN8Q1Anux9XawpystMhHbnf1Ts5hoZHvY31KeyRubCmvdG3fcN9bhiroBW6dDBA6",
  "key9": "4JVv6AQakZq7hV8F39hNpELDdra4SRsxkfNCX5L766R515xKDmWxH8b6Zc7enNhPy2jfVRrytsPuCtMPvkS1W1ch",
  "key10": "2GrhSATFgBp7sYYUiwXDxD6KkpeggsyXTRMPXLRM28oxxrN5Q8uRt68vPos5h4FG7bpGPAP8xDGpt7zKTqtpwknL",
  "key11": "zYFCrjC9NBNZHr4MktQYCpbF6YQXnJA7APfkmYBTKyeAd64wjfTcdHHhuifspRuteyneZyMhqaU2o9w2nRGEQnp",
  "key12": "3r5RLMZ9hf9Bd2EAYYYUbgJNtkg46XCYqC9iDhRPaEtf5qYpX9gJoh9j8JYHrGmzsZUEUD4vXHSYWqtrz1aUeRW1",
  "key13": "2Bw8eN5jV26rh7ysJm75ZNVwXZmjZznmThm1KS8PzghGQVcP1nfWNBNLFhpV8r896wkg5QD5bj6XErNdfY8SCVoZ",
  "key14": "47uySWkSbKAVhrzYrNF3cRU8vtQjqxqJUXFXeeywodbufT8ijUJuH5WKGjD5eH58CvwytTcMBt2G2EJVNjy4gpye",
  "key15": "Zcbwrxj5WTsdxAuxDHcT8z7NWBuwrvcnp8443ZdkPB6pdweFY6Tijrh2orxWo3hh1vNLLggqZoxbGxCjfBD6jvE",
  "key16": "4bzYB3Hiym3PbuS39Lbz4jt7fpYBNSYVUg25qiHJFC2eRacdcHwU5t8uFqS9NijDZaLGgxJBvKm3wWJGvB61eauq",
  "key17": "3jmsCKeJfTT9gUqgV2s8sRH5gHy8D834YY8mdUAf2EJkhUjGJdvsMbFTYSTksLSBNi2qWC1tvnP7gWb3CZHiA8Fo",
  "key18": "2Q2kyFjXWMt9VJp1ugLMQcmeytW6RRT8RhGiCn3dqGY9yPz4RHQL4Qa3XuZLaAAucZLm2xN7E1SmhxCen2dNMbnP",
  "key19": "4mHUYBRtSXmhRifwgByhJQ9qPXUhSGYzLSqg8RcaULFEN6JSHXYeY2d6BMT6eD4etRpMg1NddvoxwdRRnGmgQ5Jz",
  "key20": "2MoxCeDvYng8VAXunTXTb48jQgT7C9NHRx99p9jvs6kRWZmHVSkmC8we148zNcTEZkgZNsHniVR7PqYp1JyYTdPT",
  "key21": "3qs4wNRYAZKg5aTRnThq6vahS5fNRPsfnavnFrREPtYDfBsPSLB9m1bd3zotnhoxChLNk2cNP2uipinR9QUQRSw3",
  "key22": "5PU8RDxCc9CBYV76afXCDPbm7bG5dN3356GWsjf6sjnky9wzsDVFMtioBm3NBHsr8WhJncFWo7Edjj8WM98LVsgx",
  "key23": "4n6zF7gXf24grrdHoK5SroZeU7soqnmHUGsTssSaDTpfoYFTdB2Z4X8uzH3QzfnAEx6dvUKnjVVagWRh24bsgAuY",
  "key24": "4K7oEtHUEexJzvWJHz9oKfLEj1Piyry4YYiwMgsuC5hKDcKLkA9QpW7r9yPyakBHc8duhg9zVJwA4BX76LfEvpjE",
  "key25": "5wYZzvqVXy786BnNVx2vxgcgxdcbWooZMGvukkrH2vb3EP6yKXCW7REBApPp3Fyo2CxC1dykXCo6FMAAzSqkoXGY",
  "key26": "4CKsAamFJkaB8TnKVSZ1XYnKY35bt5xtjj79sFSJnAJnBQJKpJpffRThijjqjwATLAuMT1ZQPQdPzyAE3LB9rN11",
  "key27": "iPe3SkKuxCHQ1cNJk9zYTCRV9LNREyZspMs9Yzsv3dne8ubacEmMQDFeWNdESKfEYVn1vsDiW9Daxy6LJwZYS97",
  "key28": "5cPCDwMEHAc5p4jNLLHU7GK2uzf1bZpC4SjCXRjafAML2jQjw2pbCfhLf6Ny1YCPevyR2MhvjqrJynZyKD9x45kq",
  "key29": "4FMjxpPnr5ese5GQGFBYvxTRFvciMCcMi14w2F1xJKyRJjAnAQaeSKqiGQswV1urUnsxs7ftZZUQTpcuGTxAXnki"
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
