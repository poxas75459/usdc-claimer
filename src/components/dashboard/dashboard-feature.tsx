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
    "2xhwQ59x5RPBYJ9weHJA4Qk3JR6XdHNvfM88H9dgrqq4QUK2pVVs1onfpfUTQFcANt8UfdmUMZL5C1x5CBfNTZ9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ureAQ4pQT8ieQu8RBEX77Vybt89Pim7W7FyDtTkg3JLctPcyzoCuobWhUVE7tmsJR18qMJCR7tYjbuRrdV4bMgF",
  "key1": "51enqR12P1qXKxa9Q68xJpmyaofh18HLEHzpt9sLfodpVB3UApFHUABh3nRQFB7dsimZFthUMcxUiyEY2kbuiLiG",
  "key2": "2ifTaWHSM8oDvyofxyjqFvVsxoMeEgWB4TUXngDTHizL9K2PtVUxJwFN9AZoYrDWVdYkTqkm6Q5fwj3svdaXheWD",
  "key3": "5PipBjGNErNnMhF6gtRZEuC9Dbgia5KZ6YTR3Rjj2bHFZq92degMSWS2HL13NX6otvpSeb1kmhBQBuFKzfSV397C",
  "key4": "2Dub2KpzcnVn96ThZ2S9yECSfUuKcsAtYS7ZSzjL7rF3aLr1LWhU1rBnrMVH9NxGr8YNBNAmw4vgbQ11czARbAiS",
  "key5": "5dgTr7vtmBhv9G4BwYWeTBqoHXaELJozbotGJVr34gwer1Scy3RqGd5QLDMvjkuhjQrmHRvjZnfRSTAb1XsCd65Q",
  "key6": "3pVZGveW51Qx62mP5ugDxqqiAZp3EQAdTCBEUgB5WDFMTtQNYXk38Fm7y4bWi3iT9ujCKz68bnbHeDJhTsDAH4bb",
  "key7": "32mZYP8Eaxa6EztuH5Hxh7pHitKrAQsiEdHRg6yDizw2DbW85btkLEtyS21osvBYLhH8Wte1J8kkiKiy5Db64mLR",
  "key8": "5dYGRLbBpyuzW9bjovkktbrwfujGdtyEGPMdeqX1HJedheSqTa2EVJ5qGQsfbPavQxeu7CxsQKFSTLMwBYETGwPi",
  "key9": "uEecY4t4YgnN57RCke5rYoShRBQrM14Y6FT8MhAiTy9EHjozY5jm7zScz5LScpifCUv2WrAndoofhfsJuB6REBD",
  "key10": "3tXZPDmV9HkPcfzUiSR4L9gUmyCpHxyJX6DUHi3B2WCtPYpHUrLY8L3xP8gwWQjn3u3ji871Fp3bDqQwk5w4cCG5",
  "key11": "3TeEqNzEp6jceKUaubFpCfK96uXX587cunqASHjN3Jntax4TgB9adRiPnfiXy2pv5quB9TB1fHaqVVQvG1qwFM3",
  "key12": "QzPW7kEuprgr1YCwSEE9KemHWkBo7CK3KTxx8LPTFsMyu9HZTBK94fzHLs61uMfMocvAiiSmeuvziGUpZs5gmrV",
  "key13": "FfofqUoyERfAUgg18auxwfh7dhpGnjHmGYVD2ci41x1PKk7sysqjEMuuPsFRsdC8SmTi7BAywRQhPcRsE8yCGPZ",
  "key14": "5rgbZVSHhNJSvKjhotFWRxmCewPfemXR6dHtBiBt7GXzVeSSy8XD8pbiN4eNaApLP9HrrYENPDGn4rZMJiW8eKUE",
  "key15": "2h8aRbHgmXpWgdkTsGqafKP29SXRQYsLadKKWE25a3sd8qxq7RYSANZaoUR1CuqexEWeEP2BpjWbgp7Y3TDnJJF1",
  "key16": "3HkPFkgyDZuzTECZkEXR4gKKLUXziM2PMD27pFDvxkVWkNJyv8H5JMYbHchnxeyyF7LuWSJSG1Skt3wGwZH3Kjqw",
  "key17": "5VPt92P6gVD1Cfc62KsFQrGNsoptBQdukjP1jiHVkW2JpUDzL6bme8bZkKp7NrFB2iiXNvkW21UDUFrxm6NvW4z6",
  "key18": "61SQfSrYQufFTavcigRddg1JFQzC7Xr2ivtZHLhLzB8RpdRRYAh7U4L9SsSm6yFaLy3ddbfhCTNnk24VwB97KNC9",
  "key19": "3V6vfD217axDhDktDnFHLG44mDBstux1Hb5DUH4r3CTiLUD7EvDia7SAMjVxe3EPpJddBcQ7NhXSYTqym6HGjEwo",
  "key20": "5LasqoxgBF7JmhbnhTtDy4G67NobkLXY8eDGq6Ax2SExPQJ6zq9agEYKJWQFNKmi9wwKLTondcjpkPXypU2mUyZm",
  "key21": "4sjNnkoxQn85fVtLBi7NqhMeitkKFY54PyVMpcW188aKD4Tm9NoNrdEuUfCGwS3Pk44HxFeEX356EyiXLEUgRW1a",
  "key22": "4Nyz22baqLAdTUUzgJyBSswePFri31s2whgj6NbzrA4CwLkY4v2nvfuAG3hStg1VvPTa1BjnZjzMP76gEqcXtaUx",
  "key23": "3P2vnD9hqwpHtj534sv7KsmYiECLCkkYes1aLobGdPCYib4zc6T42MSGdayq5MpMmvWSdZMN7x3hepbjvMHDksQJ",
  "key24": "4LaFQWdRgHhD2E2T5hhWarYJD3Vbm1ckxCCVpPgUBvxNnuRTZRr67ZLSVGUgmrfmEtbkcmZS2oFZP1iiZANKfBEb",
  "key25": "1YR7Pcu4SDXDiqPe4tKTNVx5jVbfazq2BkAqCtJctLp63sDLVW3Z4JfZBRRgTBgfFQYhPXPe2jn1Er2qRbyvCZP",
  "key26": "2L5gzWB999YWNEJkzbwhaGwTLvmVrFRXcbrctyfACEZQs6sdXqD3BqKhD2P74TfwGzXNDDEamyDePmapzXGEzbVG"
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
