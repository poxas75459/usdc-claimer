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
    "61AxTjLQwFVYxcp7cho3jRN6x8YS5isVC5dCC3A9MqrnxET4hTCrbPi8YvqR27jTybNQCdyDRwKqtswToCs7pYgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ubah3zsSZu1YHK3TsCHHHSSwzyEdBGdxghcjY23g5vjok8LA3zWzNN69o7vtSiw34XXZoTjnfVhvWzFEQcJD4wB",
  "key1": "32eHTikfnm5Ln4AgQBZfsizqCJwPoAfGqAULTzdMfJv25vCkA5HhpaKL3iAsBKDFNPWhy1Mjj3AcVj8VpU2K8pCK",
  "key2": "61uKWyFHfLo1oPzx18NBLVESQz46Kb5ghqxJ3SocXNQUVdDQ1nVGgaT52iTk5JohWE7Rh1UavDcUy562QsCB3xcL",
  "key3": "3oycmaGoN1DNYzkKqNnrnPgL7SgPF5soMfpLygGbzobvtMJFeChWU3hbriKp3zEn7kpzZkMw66vwp8rDRo1HTddh",
  "key4": "3zxpB6WWzirsXPRvJQG2PnZaf6J91vqgG3Mr562UBuvdnUU4vMi2t8gwcBVfass6VgYXnwVw7VMTuB4ErGB2CWvE",
  "key5": "5Xf6Gc59P1oD7HpTatStEjayLTWfEnAtaXH9M7vZupYqcXaA6rdee2YYd2MR8HzHuWUtUNanvBoATXvMS7R8WoH2",
  "key6": "5XCSf6CoyjqDmj31AuhEPz6fZY1hu8vEcrj76NgL3BgXnYEdZMmHcTopL4tqARGDrjWpm3soUZnY9fenuRWrf3MZ",
  "key7": "2KmByzxxwXSKbaPxkLtkPHF6JDVnedpo83iTXtBiekBZLD37kFHBTJzZwixfCTpd1U9VUKNGnPeoHAjmppyZaPVL",
  "key8": "4AjDmxLW9xtwdFbGSUYeNLTtzQD3jUGAjqdGWAwM6yGzxQKJktAKffH1HJ33PkkYpc3W63D6HQ8Gaq1PmDRGGFFG",
  "key9": "4eLnBKGVo3EVD5oefGVBPUJf5vL6PVzcnh4BWpY2tfk7yhML1U4VY9zvwihSRvbgXowvQmNPc3mKmuvUzqfCrHAV",
  "key10": "4AMVZKyoeePkq2rr6dLnNFjxgo5mURGxGseToPeadMu7pC6aNfRYZdmjcUxYDD6eHHh6spPKQ3X6RdBNGpWG36Pz",
  "key11": "5SnHi2VdSYRcCY3vBcRzMFvtnPBhZWjtmTQAvK6GtzUWjkKfrxdifvuz8tS8T1LbzdFAcWFMqBZ7iMKGft8MdZon",
  "key12": "5eGBWErLpH7Ba9MFjQy88tLfQApVPhUYAgBC3PoRfM5ZzSd2WGirGciS3aQYT7QpbkRn6zX6x1G7EP2A1Bp4bwBw",
  "key13": "2nU3wibnDo1h8NWLCnbNMZTude6NE9qaeVwYwga57A3Bvt3QnUvrqZEmp9hYZmWWYPS1d1DjQi4pyGu4tFkdg31N",
  "key14": "4h4QzArgfxqepneY8Ds76ywzaVaX1bwKjee5JCQJ1KsXP1YHPg81s2sKBpMXFNJFQQv842k3pUvNjmjWyNpYx3BD",
  "key15": "5Jy7uw2fkYZ1Z8Mfm9R7wRjJfRmxyiwonrfLesGuS8BLLU8Gy6UpSys9VyNFXYkmY7vVFXEVpw5MBQ1J37w4t4Xq",
  "key16": "thaVxnkXSqfbrLWrmokZGpm8bksCQMp7eJpQiZ23JhifWhCoDCQ5QX8PadLU9mdfgmRyuaSvqkDA4CGsbv6nJjw",
  "key17": "3SAS4QmrHk48CZ77NbSM64cWXSAv9f37xZjvCEhUTeRZoSPVZYTw3yKJnYoLH8QxVU3s6NDJUqQModMmVe6GfSkp",
  "key18": "3QTHSWPcoj4RmdrMZnBUcFXH42Ure1SppCsJvM7GsomroRvGx3N1HnZgaADmW6yR5xHh1yTfHkUMPK4Vis53qqEW",
  "key19": "3wjP1Zh9aXD9RAd8km8Qa7m57641qDvqH9Uv31K152v8x4WgUgzp9hFLJV4CQkVcchVy8hjgRpGvLCcvgmpxZUqm",
  "key20": "EgtNfqa1UF2m1MTn3C2cwpjHETMq8XfLy2CVj1yDGnsPV2xLr8epeAppDLJuwTHJxwLRVujLPoVxzi8JrE8JtXT",
  "key21": "2bcrT3y2LpVkAYzi3kn3Sm4egiWk7sjZzq4s3JPJmsXpL3u8FRVbURuWZDP19pkr3UDe1DorW4Jg5h87o2t6bKoZ",
  "key22": "4N3xQdQhSnuXkgtkYaJvfsRCQcVEe1iXcUPpLecU51nsjy9VzW9hiKh8NecEKYrfCMY76BajfvcwjV26T4Gy3qK8",
  "key23": "5gUMhH3zo763mbV8smzf9XjF1BJUPhEEcNUrVMwVzjcawuatnv9yRy4ur5PcvjLikGKhfj1BmbDpw2edrDAWuz6B",
  "key24": "3dV1SiGgezHW8nypcDPsXzvKaM4tfFm9TUWAtFUd7zFYDVEEyQvmUZetHa9fgVj2RhRNfx2iWEjGMTqvuyAyh6ZV",
  "key25": "3Z2XiKoBj3g1zwGAeQpGSE1aJ7KcEKF4UbVUjAeAwWh1F4QChWghJCnwxvMqGLMsa1i9rQh8pZeP7RSJ29GRPvSe",
  "key26": "bg5bCYLoU59BCLeFjcLgco9XKYkZxuq9oRyVtUTrdJN2KJ9hUeaqcCTdSU1hv6QHu1ZX7gL8DpKkjE2gWRxAFic",
  "key27": "4NbvSHPzUeQXvo2YsGscP1jERNtDss2bjj31eyo63eNFSPaW88u9oPYPcGNsRfaovhtKdCFpqGK4xsXWivqeMaG5",
  "key28": "5pVm1TnwJ8e7wR2jdQ3sWXa4syJfcmYukFD7eePJKy5PCH4G5hgHTmGFwqnWPHkfdPnQQvXS8pa5dUqakv6yoHED",
  "key29": "5QyGReqyiQXWRo7RFBzbESivmnkmDV3yeJiNH5S7D5m4thdhCED7scXvfpQTECPEc2iEU7iFMeuyhP5S7TSBe63C",
  "key30": "3QnmmC3wVSaawZ54er5uGbk45apz6PGSBkibpkadXwsM9r64cdg3RSrkXue7gtJ6X931mHQWcXVVBDgyshxN9TJv",
  "key31": "MtwDRdqDScrFBksgj21FUwByByEVB51XnHN1qqFgrT7jHgeDWjGGrsPTmSbfGzKzGsdodwKSwFut9Anj96RSY2R"
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
