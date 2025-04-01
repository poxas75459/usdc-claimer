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
    "5s1CPWiCbNNB1PMXAkd3cju8gZEo4vUZMswJKeQjwRdxfwJCsihNAAgBL52WcrCiWNx65ZZLqtG5UB6dHtjzxoH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RMyyTxFENP9X2uS1y4t92KHWkSpcdUdFg7KHapQ5HbbjkDPLD9uMKKv5v7hpKZYCqgkD8iFNtaa2xDHBqg4f3xf",
  "key1": "2JXSVXK5pSzY9pUhbQwjJLycoZzAw1NbsWKPLzutWYhVEqjRRqRPuMvDfg6ehwvagVrqCAC3mf8fvaa9HDRWkNMw",
  "key2": "1TbUZupT79aNjMjxNVsMC31FdrN2fw8Q6jjGigmX6a8yoGYtULi1BYERhqRMzvYkucaHd7PTyUhn3zDECGXscPJ",
  "key3": "3TNUEZNFn8FaVm5sKVDqdVzyR71TPFezuvmp4qYj1MTULwGX2Quk7aCiAy2DMdutSdmYqPVw85kjRDTEV5BRWVKt",
  "key4": "3SzKHbjXMpstS9qVjvFbU6vo7BCusn2HQQ3amp8pHk7jThZ6mLaLySNQApc2NUBGHAnL9xFzerNPXwKxBTZfdKAy",
  "key5": "f1X1xSKaqY6wc1oKexDMBEs9mNW8CZXuoFj5vUXAwbzA9E2pJ4Tp6fr7R82AKkzyLcGKR4CrTGjEpW4qHokj55a",
  "key6": "32jfDvBu5JtRdVit3g53G8oJjMFG1YwtTBWYrB8FaY8drxKJ2pNGVCU39LoQotUgPmWu2R974N2HPivynpcmG8n4",
  "key7": "63zPTVJHAydCpFoyDFPeWN72dDKx18m1Zws7TbGyX7gwvAyrejZPjaVRdj3a5NxM7hgCpe7721bURseTbikuvNj7",
  "key8": "5ZT4kzXJxXZFEHXKUQecDrVLRoVUE3EesMZeY2ucSo5vVsMDSqRxRn81MfSZniq5doGLw98tVZRnAv4x2sJ7GNGV",
  "key9": "5361dxara7DkbLjEcWTgrx6wWNSDih1DVrWQR6fr7cZXyJHvFaCEr3AoimeuZC8PJhPxARFc6w7SKDatWrJg6Vu6",
  "key10": "3okosnzRLMPNmnSKrvf1xKYvP8XEsmr12A1ysqkXutjSbmyUg2CR6gCE1ZffgeopZypYXCWACSavdFJvpHXCtN1i",
  "key11": "5V3A3ETBZuFW7srqFn8ptzczg9fWJZhgb7sHchhuPxvdxNw9AdgGvz6mWj5z2PpVXYT1LTNJhmjK4HLu9ozSnDKv",
  "key12": "2AMyfZNJNCnWvXMn2TRiuVHeo1Jw7FqN3FSG9bGxLADCTp2v6KrxJatcU2SdB4woR7yxfqXXekYZRQKbpmPLF2j3",
  "key13": "2HS4SDmP4yYytkRqfaKjoAn1yPrSkqnjSJxjzkBpwup6y15pMmAssvNQvMgxA9QK2MLyzpxuHHy5Qwk1BwjtxRJY",
  "key14": "2ma5VXcK9SfvcVaas9rjXhnLLfERdXAc6iKuDUp2i7Zgn4WMLf48forHyVmyWFLJ67eEmwMMEeroLX9Tw6gD2eKQ",
  "key15": "BGVdk7LMVd3tW4pQG4wbt3T6Czb6ktfgrwzeUx6HBTU4k1gBS5cFdLMLcakXjtUXsQu1xmeiXgMJh5rTFR6jWGk",
  "key16": "5hnu9y8wXcJHUZcda7wn1XRv2LYTzjwnU9WMVfWqya5WUdrStq5Ja1V8BiU7wNGJUtp5RLzAgJ1zLX3Mbz8mWyy",
  "key17": "4gAnECJC23BuSxd2HKY2R57icH5AJKFx9SNWW1pwVoJedMU5sTjCz1mKWkT2w3Sa45CDzXLjYKESwBkSeu487mij",
  "key18": "4XR6U2rM8KHsVKZpJDbMfGqAq4MYK9FdEmDB4idHjGKL8zDE3wprCPxYd1WWjFr2cnX6g34GbdBycp4g1X28tinn",
  "key19": "3s6Nk8yDDBaQuWFvj95NiF3LHbL2rnYMXCMCe7wCmW8fmHmVuEi39Pq7Tbp6kAYcCGak6rQ42eY6E6snxh3nGzxe",
  "key20": "WuSoEAdY1APaUhxLsCUxE3WXUeWMNL6Vy6fY3fF3rKHV9fw71ta8Z4Rjnm22CVPF21doaDpHAaugNoDAMDJ4oFN",
  "key21": "4ZcGyE5sErcJmbE2MH5Shduacz9GXi71cNCuTw4DfofJ4iSyvMqqNaSzDgyShTsJdMV6JtNPReDhsciJhPP6sSkK",
  "key22": "3q9WbPD5VcokysybMsTenrmmsKoYfqjmmr9UjCjNeCtkjsVbk7k71QakZkFrZAvvowFbsLNNB6HTyFEVGqcLD2cY",
  "key23": "5BMB1EYhWcuE9pttrG592EygFv4KZXEDLDkPGXSDminCCSh5mzD3rHGJbGNw38kk2eAbUsGNGpU3DusV6GyDSKCU",
  "key24": "4uio52HGR8wXvWDR8WocSbd5zw81fd7z8TqAGWVpZhfWHSk51Lz8ZBiCxcHkBi6kcLg2n7ZdnSBEBfRyzDfaVYyA",
  "key25": "4fHvv9UsqVDmuQJNMEvN48P2UzsU7xyQLkokVdk4bmBZ8c6RefZNuYrLpLsXwi7xTNyxtJNYKmUiydki5R8CV7TR",
  "key26": "5twPB3Df3CfPNXQnxJnkEoh4CxQCx242FgJqGaJULBvfmFUdid92n6SrkC91WYitTYVRx6TscQKBRKHP7QufnoXv",
  "key27": "2jbcHby9R2NqvZNaR7Cs3dbmLciEpZa4rXUgUSy16mQmLPc25gJ3KqHtZyR4AFEZCGsinLTxUkAbJMYi6kco2u6P",
  "key28": "4wfg4gZAWfRzRm3JJ8R2jB4V13yATypGJe7FUGNFAwXfpnMKC2XeDAVpyr6mmeHFCt3mZgukxTdtpmRvkrmovgjg",
  "key29": "21SkC22RFV7VUuKgwiUPCjJFV8XBrUwaiHkfN6Qa3ikCdGyCTN83B1Kn5gf71Vn4NRMr3WBAqrTac6bdMzopLtXr",
  "key30": "3NtCKPEDi5do2ciAMx7mdFyiTxLac8vduNTMyoR4ku9uegEESC6fK23qJFM4MVj5guBqXxcGNaywagJersXsQzkD",
  "key31": "461d1YiNSGJQDhc1zfeufppjcVkFKUyJYHMZvoq2CfpcdLaVLMDkiZp5nvf1caJAQURkr1DJ5PqKQEDbPBLRJWN9",
  "key32": "zuGunhxzQDH7ZZ2DJBUo3iDVXuKmVhTfhx8D8C4iLt1McjqyXpFAATyNcUErfH2YrBypaspVn4JCfUTbESKRy6k",
  "key33": "2e8yVPQuTyURqidu8SAB9oLH5Ghgbo72RT8JoPXKAnkdVi8SSpU8pqewY8fpNAk1MKX8w7pNvpEv8iMMJ1qMymyD",
  "key34": "5dmsHd454j6DbiuqCNBuv3b3j7WUmVA8myvszJomPqr33khYptU8E2piLma6NnVh5ASAwUrp2c85vDZpJrQzafcf",
  "key35": "4CQFqFJcVjtuv5ejDWTpjAhDh3jwsdmu6sZHq9QBwQFtwvctVWQheDPZWcy4A1W3iyWQUKnDZa63gHBqsxzqhASr"
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
