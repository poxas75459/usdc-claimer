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
    "5gLWn6FNKVtwe33uZrygzhYfzawpXVqQb8jxYSqCiudUEK16z9ajtnuaQZ5QDs98mJ9tWTnr6PtwSSocSjMd7tWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRck4o1ht7B6L6MhbXXdNMhf2XYcYj4TPeTtmcdGNHnkeCnzPZAwTHavk26iQf9vGCej8SrLX4HZn77Vx9jxZJx",
  "key1": "5My9DgREhpd23nFSePZJ5ts9j7zsCfZ1vMurnyreQLgcM1rFHWhpYE3BQUux3Z4GZEEyK8eS4i7A8S6uLTQRy1UM",
  "key2": "2eEemwx5qqXH6LpGJsDyFTutGmbhaQPbRwh8JdwyZougV7CBjBDCf6UfTMo4QysBHaFQM87Jw6ykCJ18cp9M63WC",
  "key3": "2jxjF1giF8xEQzZLwhpQj6A37kDqfgv5GPM9yMsD7HKYqGY9A15mjnGZBKVwbHWeg226kMfy4MDvnE8RVtriE2yD",
  "key4": "28pPTiFvg4LLvXCaZRVQ5kT1j7MSbNQj9uT8W827PDfLqPW96zTDwVP57oJXoqQq8Mcrd9jTnTy7vePv2xHNKeD9",
  "key5": "2ht5ifB44LbKZf9q28WjPPpuw7wekPyoaUKtNtotkj8RfADSr2WSrWc2uf6km93PYbBDKYH37vqA1Kk5LzQAuGsS",
  "key6": "n4j3zW1iawqhr2hu1SFDQjoXSkQdT7LBd23Q7zne6widVn9cNxvGQPLPbaF42id2iddV7kUJ2dXaEa6catZYjjs",
  "key7": "53AaSFkytrkd9Cf8isxhBUvmHDVBRZ89BnpLSLBLRd3MN8V9NLVHjrbkvE73xYeZiAP363F52LNzSdrE7KWLVk8s",
  "key8": "5TBk395Z6SZESNjZ6zfjgF6LnW6Cz1xtmiX9njeAcpTbrLnHKnB1VhdWQj62f5B7gNjJwBqjkrPjTusghJgvpcX",
  "key9": "2atxAyQrtWwg1mCMDFKqB9MzeHCZ9AzZMNLLNdXdtz5fL5PBgvuM1AE5SemKmUVrCcnSHBhDHcLnmFseLae2nC4c",
  "key10": "2okdVdkctZt1oKwtDgACyspYqpUNCZZAe3p2pS7Qj6cqRkf2X2vaUrYzLzPMr97NqDE6xPBfZY3sxGZH5aUrXyh6",
  "key11": "4E5DuFRkQnPGkkygDwMVnhx4VbVJaR2yhHsg3VuxJy9EhwAZ9BayvzkcMLECRmTN3G1qMzaXEPGFmz8rzdtEBvQ",
  "key12": "4PpuLdJKbi7g7285e93iDYtxZe89HZhSUPoR4YR154jexrcrb1vcpNjLRBTpJv6y8pSUM2EefJqoivWMsGcJeJgW",
  "key13": "26heWCnG9bFcqnT9gtPCcLV4kQkn4dRDpdHCATkyh2nxXqvepL4XxuJS7aftT9QCXdfScHvZEZMvtZzSMniVK5yU",
  "key14": "5LyHvUKJFC8qksErWiBHsPDHAMuimjsezZeEpTQZFn3wNg48tjb9BiULz6oh5A77VewSgnfnkc1k9TSTDfQbrBfQ",
  "key15": "2WLQ1h6DXtkEBk1FK1mYsNcxDD9sSy2pSFo2CW8cFCMz8CfDfW9A419ZnA3rSi5Hw7wxy32HBUpTuBeE3jcjeVDe",
  "key16": "4Kc76DaXotSggcUSWzHBr6DxWLu8rD5tDtNA39e6Dy76DExB2ndJkxs5Lpu5wR44YcgXry7B1TLmZfTHMtU55Yue",
  "key17": "4j9zC8i8EpCAyjBeZkDL3ncBfo2zQZyUUz6qVLjCgMnxfWWDcQ5kujPst4q8cMAd5mUKrExxHpLeLyMvrznd6hqM",
  "key18": "3DVE1wuQVsafM4rDtV9kVXczZFRHPDVsq8NdcE2mzRQzogaWo9bontZ1F9WnTM6vzS4KwFd5mXmh4WrSceifr7kF",
  "key19": "2XJZSa3k7BP9Boccxhnwuy3dWeW8jkLUDQLHe8LUCbgXXzadjkZ6VssophmWJQy5MCMWFUUeDnpW8mgxFiUAsn6V",
  "key20": "2y22CgDrY8ogkf4SX899ejNSiQjXv4c38ba1HFe5uQauqsADBEN3CUKf56ndGY5LfL565C15dGNp3FR3Abkutgyj",
  "key21": "5EHEPbUVW947GHG1wEGYZJzBKG9pSTYfPZvCLHEU2kRDJopBogkxWdpJ6cgxB6nfUiWV45eHEKAnkFvBBqB41GMF",
  "key22": "r5WH7NacrrAYWm5xL4SUDKjUwAoafb6XrkcpL34HgUHbJANPXGj3doXUudz5C1MQCAW9oFDvf9UyvQ5Heme9frK",
  "key23": "eydg5rRti9YrWLf2DoTeEWvZrefMzJ5zbDxpnX73AAw6QZmGwcPNQJdLsWVtP9PRrZpUFHStFSqUrukRcmTcBqR",
  "key24": "53r2WxUtyQPo9Wrc5LsWUcbXkJByZs6wAagdCgkjehLsmryAJqpR7GZNuB3PBgmUecBo7gbGRtcbwbdGgbi4BCwe",
  "key25": "5Cuc1uCaYTH8AXJTSDGt8REdGyhopt9ieWB8V9tbCmdFxea6XX2KEGW3B6gVScUhELRHpeK1PZqcqBSPq2ZgqhCG",
  "key26": "5G1dCvom43MHipiLHXRe863xehZjF2kFdiSHQtENh3DA51t74bS5EhcrNCqQjdsF2zQjXZNqD6Adr3cHYcYfp6Sv",
  "key27": "MVkZgxqsTTD6T4i4tNnngUA8VzDXr5s2EmcPBA87DfoZ5iPSHhHBJf7DFa5eMdngsxv4bNVdFZH67mwXVaa6k5G",
  "key28": "5M8anABD7Lp38D7oN9c9xJtunwenJJYV3CKZCuYsbreqQaZQFTVhKDmUWx5i6CdU32KzuBcD78xWRuHEDNbr8iyx",
  "key29": "66kQjuZLCVzsnwrdP4jkypBbU6sQg2Jh2n1AsNFeEx3BT3ef6QvdKrDspN1QyNLbd9K151UWxfXzUfTnDDUJSnnZ",
  "key30": "Roqw7subBBVrdYkBMqaYNWGCY8tRKp3WLdyqVDKYoQpQbbYLCX4McM3MQ2muqprBmpRPrZBKfLkSdJi58gVFu1m",
  "key31": "5ACeNSLQby4XJakNEfWyp3pabYYHnsW8Ufbcnr8mUjYd5QAf8mejZxGnZEA3qSKhjvDSmG4QFLfrkvAHVUBgXBjb"
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
