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
    "5FFHpBcDuQ6oWZ2X3HuBGnTUVdw9ecmVgoU1UBsG1BoFjwnXUv3dSTxxsD2CkMnfx6p1EjzMtTFv5t7BBxWsxvNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcLV6FUr729Efg8SYQa7jt3RZGrUjAjFRQ5vGjGKQ317rqMRa2BxdgAUk7EMbupQhvUNRtSzohWNzK1AHVPvbwC",
  "key1": "3hhqMgo7neV7Qj2k191YuAkG8t7Fh51EuH9fTkeLNkTAs9DHANVKhjaAUhnAWcV75Xu9aRwFDvAA1z4KF1uMXgV3",
  "key2": "5PyZkpVaJkVcq8sSAbvFXMpy4xKpgar9iEWem47TnKyHAxb2BK5ZsT24wFGCboW3JSPX2amDMk4cFDXixr3Vtxw6",
  "key3": "c9TYn96to1UzL61wN19pXbpj3T1JKUj1rXzbq1HoTQovxJBeiKpuzudSaVuJ41MDnWqtnFbPTuCbkZaMcugpiXz",
  "key4": "rn4S529kEucEu329DB4TR5rkaMSKR3V6VLzyyzFS6n8CAyx96ExztG937bpQehF4JDZCBa2MN9M3icQiV93LHjM",
  "key5": "4K3bgSR4ujrBQXEjAJvAFsfJED4sgbajggzLtRGwU7nvFMeEFYaCAzqdew2R4jiJHZVPafwWzzgFoyRABETN1wdg",
  "key6": "4SdkzBAxRxjPfR5wHZ5Ki5wqcvM1udpNW3nY7FwTkHZZQbA8utH99FUHPAwpMRzbA4aNwmhg5kv2YKpHUNaBBUuT",
  "key7": "Xbn2jpjckEAebXHMSdvSvSFLPkvcrhi9r1KbDhXkjExceFSwLCq6m96M7VjYMKafeguenGbzRVgQkZKEQgzNEP5",
  "key8": "5ngLLFyDLZkCfw2bFCPWMgNh27QsJys6mtUU3x4A56JetfCCbB2TW4LDEjgbSoQ1AQ13cAx8b3F2ddBNGQmoi2dC",
  "key9": "3ibg7djppUbjfuUewP5jG3RnZwyzc8ub9Cen1neRwP7pWkmysk6ZBafrszusLusVBs8crzyLnaRqb9UY3ySAq2vn",
  "key10": "4u3E6Ty5rPHjm1XPUAjzXtPCDpLFhzEEcH1SJ3GCo7Fwo7EVboskgYoRhFDE69rNrebj2Ryq2vL9TqM3q8Did1Lf",
  "key11": "4CSVBkaC4fnepX9CG6YURxMK7TKrwJ6mQYEKXY4W61YGzj88A8Zcbhs615yu2rQNb5Ftyr4a2HmuWx2H32awSuCB",
  "key12": "6rAtnzXJaDBFBsNSid4ZEUqT1vYmBGKyor5wzidg8jKmNPFzF9TrVcCSFzY9vSNoi7Hc5A2o9c1qHjqfQKgRrQK",
  "key13": "48zaM6nJrV4pHSTjjKXkNFjPb2jRdiJwnhtKKAjrCvGM79F2nn1EKxDBNDGEKjRgKnteh7DdRU3jxA2KKa1xAN4P",
  "key14": "5kxCvnmMM3gC5Lu8jgWg2axrEuUE9UDLi5WvZo1nJaKFhbwmonTsVVLHHDza4MNwjs1e1gJ5DyiZECvrLL6nguhw",
  "key15": "3viVNrmMghujiXxZiKuSib5wMup52bJB5sap8UPmnZga2ZAdrq2yCXBnc7ttfAAioDNzJSarjSGVuU5LMF44LiAu",
  "key16": "56sSjwsLV1FoGf6he8Mu26jXRspPUw2rUi1LaozZFuKJjqnGWSddxtJrTqxzucc51LVrsgwVWzKREa2H4mRJaT6s",
  "key17": "2vZV2nHWncmrHukicJXRukAFUdpixEdvz6jagAubXXNDeJ6hCVfR7WPxcYiWosgk4zoazEUnaG3TRqU8SPBLSMqC",
  "key18": "3RxnYH5ruRjD2NxUc9erPimzhdPR4vZsRCNqq6SHeRGfXuD66udBwWRUkRzwuJCTmTnTtWZeXqtrkkGJu7AhFcAD",
  "key19": "2icTijHPZnn6X4betcVVbq2d2giH92S8vVWTD2ckgKVt8v1sQP9NXqjNgNjgdPk32QoqQCauw7hKH8knEtvg8SXF",
  "key20": "28ct8qtKk8hdBRNkvvMQQdDKio3eUGYcr2K6tmEC3dEXKHopuEaV6DV1kBjmqSUp9gesFAk6vNrQkgLQYJaa7v8M",
  "key21": "5NMhHVenYmBp186Co4bDxR3Zj7iMBAwaZtarN9mqUiaDPLuWr5cc4PcqsR8Un9y77mkf7pDv3YoqcjobLR5mu2hb",
  "key22": "3tGAAjZt5sQ7Ey2Kb4uErAZXANWXeSLh8Erj7ZCJdaFZqSP2wopaKVwShfwMUrTBtinNr2jw696yVyn1NNy8CHj7",
  "key23": "5BqvRg8gmjMXX8F3DdcTCKLLX58J2B9ZFyGdvSTnuYzgmofV3z5K1K6WvV1iFB6Rhnjk224qzWDjShS2UMzEBjzU",
  "key24": "5AgHp7yW9or2qqKz9nK6fY8a1T5KQB7RS9b6CUQsjawbLYm6qG4c2jaYDug1PxMnyr8tJMDkGxA1td81v3mg54xn",
  "key25": "2v8BcLmCrShLM6mK1E1n4emL9atUnmfKEiT3TsCssSTxGQQ74YmdwqHPCJ9Tr6wBdfjCESAUyce4KJ288TKXFMda",
  "key26": "2fVDYrD7Q9xRZvGFKnAxt1zhhgFnSEvuRu5Y2yqhaS4K9yJ8jSPGrNx7fPE3UFrMCBQypH52o89TuHgNYcNYzFWu"
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
