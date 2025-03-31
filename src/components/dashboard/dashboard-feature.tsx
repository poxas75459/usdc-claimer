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
    "QiPWbQdjKm6X22Q7aBzY7bNN1a6jkmipeoejFTecnvhXyJKmvyAnfGnZaX51dGCyALkqAnmREwZoT3G9JPpa4gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W614oG9eyYp8bot7phfNtTJDnGLfa9UCSubPmkye2TsXsu47YDCVctfjKXRmJEeHReAW66dunAMsf3gy4HLRC8C",
  "key1": "2BUSJWNYPDUDe6ZGEdY8k2E6AnHLcySvjR88RUpkdzG1ZHm7Y2hNAm9q84KmyFfytHFAVVJcwKBfG3HT8Kkos1Nk",
  "key2": "PDmHMohyo5e9qoZFsz2ppfAu7keKjegPbbpzsUDPz177nK1V8HP6HYuJL8qTxzVWXEx2MVtBL4QqT78DrwyWseS",
  "key3": "5zGnJQeNkLvXfK2MWPfWGCDwd7UJZMrV9RxesAmX7o4AaMUPaNyGcxHgPPWjQo8eZcbVPg8RbTd713hMUxNJTpbA",
  "key4": "2YLUHzmNymXRaEYLaRsZipS9hj4vKQdv15fydDf9sp2qwn1Y5sYWNNYYds6bBuVgJeb3twWKWhHVAUsSfXkPqGR7",
  "key5": "5jV4Yk99dgo4jDQyg1stP7vfL2NAG3nLXDf6QexjRsTq77g5WzJoEHEGtxPC5aTAYnHn1r8hEhLSYckuJzrQWe2t",
  "key6": "4M2PHLTC8Q8LtFfBEUEqXHbWjXNvrgNV758A2FHu3xmSMQdQHkFq3bN9BpAgBBtqTKb5LnFbeCGaMkUYkZoejf1U",
  "key7": "2QhAEZ99DSj9frfTF3fUB5Y2s5ScGfQJgVmV1HEGdmYzm4Q8MRymUeMpC1BctsEs49Euvqwm73piNAKH3geAbw8S",
  "key8": "3dy51eyASTppJzgcu4R9UsqjbaN9E56nenYnx2Ggip1aZbuZJD4LCT91RJfo6AeXjDEX3vka68aFgfa7yg5tA2DT",
  "key9": "26RtRT5omzdAdcC6UqgxehugDv49Re9gTJhsZRWHqimE4od5bFTPNfWcb6FrVUDQy8ohrf4Y2h7UZYzXbrJKKctu",
  "key10": "4J6ECTyHcr3M6xpgR61SqvGxgQtGFxAp4XCYrjfjzHGXNvXTxqFvykJUmwgA86cyzei5guvf5k3nUxvx7qw9WwqD",
  "key11": "2zVwKH1zR91qov3UXy9gengsK4osxDhRSYVPRxXjCdYEaD3E8AvbUFWZooorRwoftVyuQsVhUbXh1W94AQMNJb5k",
  "key12": "2fNRvVye6ZLVHissb4RAWL1393AaamwMb4nJPepMu7p6RmSqk7iHpspezhfdtNLvEcYBG6o2aJD915QgLqTw2iqm",
  "key13": "3H3jrHNNqrHMfaxWA9nyD44H3oayDRw7fkQHEtgUWAKNHzrQvdC1yoS5voTEDh1rCxs1QLwCHcmbedemtY5zNaXG",
  "key14": "26awHvK9qEMKPJkZCmzYr5iozxEAxUngh2H6uAW4w3jkdb9ZmLzG3bZPdecwjdeWW2QnS7j6gPC1YvTRmyZJAV8y",
  "key15": "4VQ7ienjP6KZ48mT3xLMpp3XsGPmxQpvrsWxGNWLSMEJSH3CUK7mtw2YM8n62ui8Y6RfW4Wjkk4VUdjesnYCQHHc",
  "key16": "5cVGb4oTjxj4o8exPRUo5E6Wxf9d7hJuVNifM5PC8MEf94kiXu6Qw6iUBvMUSRnQsUG9LwjwzfMoAcxAhqnCTYgi",
  "key17": "4XH7Ppdd8xo6ebAkAEs5AUKk9fyQ7i1sj7idrQAyRYUuMUWL8im5D7PMjuTGi757VaVd5s1MxBXjQaF6FpshT81Y",
  "key18": "2nsGWZrzkfgafqjhwmtpuo7iCqDjyDcbrTmdhqv6XRhKfvbMcffsjdjKgo8HDGy9V92FHe3mm1SmcpSfywPEs5P6",
  "key19": "3eEKVyvxW6dnhoUjaAZ4j9Ccn6dPPepztpi8TX7VGCoiKYZXTijhQNRFGHV3ZVrsAe1n9rQCak6eoiDqU35wTKmQ",
  "key20": "37ryNgYCSoMhCZczVpKnZMBB3UViLu3JNcWzCJBdRBbCDvTfqbpFeXyeQASmwiHpSRVN7yxwVpNujtBzSBrdJ5av",
  "key21": "f9DJh2n58PaJMWPGXaWpXd8JJ6LsFs2wqCiSARx9RCmgieCW22cN1U1r7E52VHBADnPjgvygzGdaQTCB4kvwock",
  "key22": "3eCFAgmPZvRawPN4yL2ExrPAnimtXqYvCiPguVDgLpgPMt93ZYue7KimUGHiWiRcSJWk7STBNpwX3oGBhdTpYxu2",
  "key23": "4WsdFMpRmKDXuTyFcw18EaPX9y82xZaYu7BhRoJwCUAEyMEsVmnbhDM2fF8af8asUAVv9rczjqkBtmNxvcn4co4f",
  "key24": "3WTgiEnvwMURCdqLai2pwdnLv48TVHeN9zHKyVfa8BUDWZG8RR8bU3fx1F7p8cH5trPb7tZ6NcXT6mGzuv674Npb",
  "key25": "WhH7pqxF4hJzrnC665Hu8xTHnueFQUwrg7UGFemTZY9Q48QY8AJBRs26xQ3GK78Rj3eu4gBFtaX2DtsMheEynDi",
  "key26": "5hcHjHtTHfVScNGshPpY37vnjkTAf28PAyFCTN4x9vr3WKhchju55MGLw6Bes2LWeC56hBqBpF1cx572GzzDhsQS",
  "key27": "4enKJV2suCeSedCBTVrsksdZsRZ7wMbxLdZpR1FXZXxxd4ecXPPT8WDa6m5nzrdM6AZTar1bRpqspVb3cCTPSkTY",
  "key28": "5qSa45q9JWei3qQKEKodUvcoNcAJV5ebZP48TW3SfW3gnZASqNMMjXcKkHSPUkL3RCWZtTaoTjWZqywwn4pfuykx",
  "key29": "5SehemqdnyMSnEh7NYGvgV7H1os8JJv3ztwJcj5CBw3hTxw2eQjGTfCEoeZs7KUdupgo2XaRASz1YLMjGkGG8JHM",
  "key30": "3ZkwokhaWUv6ztZMCZgHLkGUb8v73rYZa26yNXX7ooe2SrGRAqZhgXiyprwwHRMkEGvNyLmn94Eh2vuhaVjrmuxR",
  "key31": "2WC6xaSLRpbFyQu2LRjzzpdv67JNW6fP7tVVAkjZukg5E811WDqg11MpDNyTtJ9gR77oMBZUZBywYaNWC4dbpiKy",
  "key32": "5bfy4WD7RqcCZaX1gFG3ELQBjNwKqHji1f5AfnoJoV63KB4hSVB7GV8Kc1aYHsP6xBZaL6RENyC1pKvvgZgiCn1T",
  "key33": "4vjcQtMCZCzrCsP7UDDpg44gSfMQbNRWYyaA19ZJdtbmapHUm6vf1KNDvD7CAKVuvxS1afsR2mRiEqQmdYrsiRXC",
  "key34": "57PpyZAQYeoj2vAh7VHpwhr2WnALHCJ3Y5m6mgJ5ecSie1AQ6hcTQj9WmcWwfgfgNuSdBqdiqQZC8o2J5uoQrW7r",
  "key35": "5bo7n1cYiBmcc3i5pqK39gqrNSoKzFAdwKGfHEtvqZQk9hDmAmnjqjEeJq72oJA9LxNzDMr1mPo9XYq1nsVT6acV",
  "key36": "5ZGbR2w7YUUKPEqFF7muUQSaUEnc22HBYWuYeGSnzUDs3SQbMdenFT8wT6rcZMjgRBty5aRpdunPHi84x7DWAgsN",
  "key37": "3ArUivCh7d4drTVYsHu9yu7XqNUgtbEwXx5GfREfaPFWfgKWf4t94qVBncoQE6bH2pgVo2XJ2ru6rDuJCSfMn3By",
  "key38": "2coabKUdM2fNMzbd9oJey5ffVX3a92a4nFEngJZ6bWBPuuBquWPFU4SawKwXZMCb996hKMGF6RFKUX19fgLiGPbK",
  "key39": "RRFEkP1VbMkSxQ4zwDiz11CnnbjnrVGZuRhDiVEbNxaY5i5SCKhRjktcJD2rqPdsjckCE3G4Usr264aW3YhqQjP",
  "key40": "672V39fK8NR4BjntXQeozMZho4bTvDCjXxQgvKrLrLaGedUeQxWV2epvh9BRmZ4xP1NhuUg17pjqCAaYDdiyP6TM",
  "key41": "38Q18eMxS6UTht7JW35vfv5gQKjd24fhnKrejgqYGjNDKDvYrEFqgLWSVhiUoHarwLYda5ZzxQd8CtpS8AtLQKU3",
  "key42": "2hUvhKJjqytDqgp73P9jGsBVoDUrxrN4emejJrAH6JVdterk5FQhjNbTSQrHcESXwpdtSETB3YtovVKtAg1DnswC",
  "key43": "5ikyyfKkv2NckeXegTwx7iTicDp2XeH2qQGVd2Srou8fVVt188tJJvmVXQcynrxBtVBj2B27E74uViySwN5j8qvM",
  "key44": "4k6vjuG4W6SkvQn2WvgvSmU1v2twFxmoePxYHdFEB7N6t5adzz2gcRi3peyHD7vTUSq3vsU2roxWZue56wwpd1vJ",
  "key45": "5UbcxRciUfJUEBLfEFC6QEnGhyFUeVY4fuJp3Trj7WrKtfAD1Xk8QGFGXherK2TBB9CAtS9yxGGKTPGKhUxJwWNs",
  "key46": "4dvsHrNiA6X862T52LnDZXoSWeJUhmJPssAfU9sbubsVdQpuJj5Xjy4KvLpFQXfYXe92tm1XSsgJe1w3CJFF36LE",
  "key47": "4Wztk3BBdqBRzqhCdkzREgyJAGNj3pM6oPaCrMPDKkYV9KQapNXaD7kLW9tqf5iJycLnekB9r45LHLgzjUm8WpmB"
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
