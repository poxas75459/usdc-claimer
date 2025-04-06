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
    "2JtNDFG6MYA9UvMRpWtiQVqQMYaxKG4drz2ATAYKpHLnoWBqJV2T7Yx6vLrTM6rZTkHHx3ccNfqkY9f58HLBvM5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNd7bNJxZNj94VzRgopkYvEgD3PU2VyL1cyv5zBMCgMy39QtaGip6Ggtr84gizKYmaTeDmzeG4eG1XipaUGdRVR",
  "key1": "3N8aWKNe1mKsz4x4sUuAB9zXuKARJE4assdhULAdSD4XBQdtmcbgUdT56GPe8NycXaVupp2Nc7F4q6AMGvSyniMg",
  "key2": "4DUjAy9JPZtg21Ctpgr81bak4pqBWXFPaNAUoeadr8bAxCjJM2Sa151Aj7GYLiJ4abgHqw2xtmmNdmNVqEzJZU45",
  "key3": "3Tgt9FiXVb3fUuuJxjYpfksL9cvCDTuU3SUs4RRaewmMsY4Zk42HVdbh8QfJkF1GhMqL9vUiqT16GXWersox9r3A",
  "key4": "3yqsngjCo7DtqhQi2zQXbAGfmthbnyXdgWb5JZkn3Zg3zWmedZWc4nJ6CenUnrTVbWx3oTrZLwQ6sM3ed1CsZyou",
  "key5": "3g1z1tC3tGR69j61ZY4zWyMaSmYw157t4pT8gkx8tMAVDJBsXtbwyo6AswVvToZ3kepEBf85wzKZraSwrX7Ufieo",
  "key6": "5T5fyKPGXqyCSvG6cu8E1YjVajqSxfqZvGPmwPQVLregWi3UPTPsvcD6wyNaXuQGkURYfj9Rdxx1KXiT6zx77str",
  "key7": "2K4VG8BcemQrGivRnFHZL6cyPjutrtP1SM2XvxdTX8aieJjZ7ogArPLxi93hWnVGMTY2q3kdhu1XhoKqQTuHBPCp",
  "key8": "4E4XCWdpbCS8oZHP8C58qxu8LT7ZDNyGbbMrooXrG2znUjo2KGPHngbhsNvUjEpa289kQYnmUv75pzio5ixXA1p5",
  "key9": "3Cz93cTb57jnbme2jGXd1hVBwsonUM4CaXGfGt1nC8raAauM7nooPYTGjFyqWJcPgsfzhZPXTJpC17SXBWBto2tr",
  "key10": "4TARKFBJtmBPt5rMfuDbwRKPnQzX59sdGPQ9nJ9rDDL5cyf3M9NiQznFH1HQEA1QXsR47XN8B6VS93bLKvuNTaiF",
  "key11": "5JkzAeE68UeCDXrM631dCPLU1ikswBb2eRdJ2MYt3Y1rCiAaFZRfgieyenaMW6xvgMv61AioB2kViCrFWAW12DZQ",
  "key12": "5gcQP25WNM91kSKB4fyfaqa29RqHkngc678MZUMxPjNkEQ5iydtAihSX1KZPRGcHTmwYyc5BdxYJxUDDeibM92Qu",
  "key13": "5dKei1DxLuKRXbbzLWMh7hxCvj8cPP8yR54LS9VQ8SB3AfiArjr39HpAH9K8h7zVFpu3MobQmNEer89qXUbcXFsb",
  "key14": "5DYFsKtuwJxyTnLVqw9zWGKzoBNwCjXR2gUo1qV5WWw4mi6W6LfjaNS9xbDXAEARNxbusTBQbSGvcLjfoEoKe6Kv",
  "key15": "4nbDqW95sW5m4G6VPokYFLEqTTeFceg3c2kYMcfp47wQwnXhTjgCYixAS7LsRJBMoWYhPdRy1armeAf97qtnDBHV",
  "key16": "2iGFyQVcXU3mm5Eu2UkFoTtfpPH39P76AQTJGT2TLST3Kuo6K2zeoNS1crhnkcqjmAXGvqqRihUaqVtUpWCZuSHj",
  "key17": "9ahwdVXQQaNw8mBBFpCwTu4FccVuLro97cf68y3KMJLDCyQVRLxE4uw1YCStBotGReuNazrr3bKmam25suZpciK",
  "key18": "62xxMbbGFC4xxkYSUjvqfxh189gGMTKkw5k2mwRoahYDCSCjBANcE6eHR426De8XBvNBEoQuTGqphHKbGyjRAtqp",
  "key19": "29sKbG7rRx9o4s8g9iCsRxKzntbzu3bnozv4NxY6bsAyqrFhb5yaApr3Z7582VCk8oCk4t7zLxkLSGcGw92yJqXS",
  "key20": "5Vs5UDyNnXF4AfBzb386dUdaTbqrqmtiiLVuo6MTcWuQhRDRxnfi1pMqbmqMD4fs81hmQPBMD2gQvSNSCDa8BJuL",
  "key21": "rFN9My8Jzt7Q97rXmLtZXH2DF1K6RGvzdcdQo5hUK2JZJyuixSKPKStDXsAwutZW2zjLkGfkxgrGyihaVZwQMbu",
  "key22": "56a94169YNhinXDB19KZ4HtTtc5yirXUXsvo7CxZxXbxPbHZa3gWjKAR2YMtdd9x6fHmaM5NN9AY3ohRn1TyDdWk",
  "key23": "55F1evxWwsnHtNnukH1EZUzbJLq6Fe4ZYYoaAQgtnhNa1McRwf38DLHrRAoZmqwnq4WjEqAt9ZUh8nbxKHFUXarS",
  "key24": "2JNDwYF3GRWHZpcozDLeSSUf2kBcAJrBK3NpSHTetAtjoMSaw51H3aK7GLaZFQNpG4sKbyDZogyhkB4g9oSFuaZW",
  "key25": "3WbPoczpaczkwjep27JSFSYPxLNqDwUMatuYFEUHKMW18P7J94AwubPTEKDUQhc31sNHoeHMzdAF3WvUgVkkBDxG"
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
