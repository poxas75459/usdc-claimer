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
    "kJyVQHLq9mJhG1UT5k232JDyDrh8XCkgieWGMXpaaVf5QgMqVBbieEWwAhTQ8QqaUAq91sXxr4xwRg6z2bcuX4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwtaQroLUXifbWBJ3JRmGdVexkTLDuqkXymJarKBLkcbBx5HTQxT4fN3LDyZEbWAuvfCPBo8RaWSruVV23Crs3n",
  "key1": "3L6qD2pjHXvzBf2sZ44UEmhL4ehsFiWNdkGgcJedpCAgjhzcNReQUz73PXzdN6f4whS3fmyZhgV4bDGBSJQFYJLp",
  "key2": "FYK3XbMxWraF4dVbskAWhdn25dTuqMdkpMjpDXcHjym6eNyMNxmoktQ3PUDeiLYtosTUNhLbqQB8syuPhBk5vLB",
  "key3": "wVHTGyuF4y9QxWsgbQPW4Bb9JUiq2AyNrNcJEPGum8qA6F2HVMKTxP8PvTFR7AsN4VzTL1RCQixq83D6gkjb21h",
  "key4": "3hm9Evgzv62KcPK68GDPS9pF22ddpfvaFTtyznsmLUBwoWkapENUE8Kgy2QP3zgQsXc98EnQuuk9DeovCAM3BKAq",
  "key5": "cGNpaCDeKSxyfLFpdFMykBrsXGn2V26wbCPB3bbJUX5gSVEiuDWauZwuoUUqtxDivkdVf8jqxwkfFrWtTe7fMat",
  "key6": "4JES6jThQtH8BXeKv1CHuq1Q127z9UgWNYvCGsp1YnGcJYMe17shWsJSQGWn9dGBxbCof3AMmnW2sMypqMLSMBnn",
  "key7": "5mtUfi4vH6PoD6zXmjoD11vFMzVGeNH65EoUQ83b5XhUvZ1NJsnKBX2w9UEoAMXCSHVzpFB7pUhu5y6PA2kyCWgB",
  "key8": "2DTtF6N8DM7FBCpn9yTveibhV5YDLE9Zxin2KcMX82NHsJ7bRWQdeEehML8sAjUVAz4vgfFipEv9aFJtgJYXVDQG",
  "key9": "r71r17W9rPU27pkxezvrTAt8MjQfGoUvLmeorcKWbNjYnqCroHMCkPvv81U1hPaXk6S7vaauMi1LfP45NHjLCf8",
  "key10": "5BGC4FsQbApCoSbokfm7VA2Kb4fpTtR4MMCwACQHQcH5Xkp75Z89oSqHqGUqB6npc2k7nvEM91aBW6rvubuLb221",
  "key11": "3aYewNQtNnKWKivWYsonZUiYzUDahHRzn3cvZw5deUT36kAZfHUDJmumttJJta2ZFfX4gRFXpeotuZbDvwc9MV73",
  "key12": "essSXS5ZhAxWQAKdfYubeUJWCndmww6v1uz7cCwuv2ECzDjGk8mP24RNnzM4eDZNUXqCJB75swysZQ7WjX3EAhs",
  "key13": "5mNMeLPVtdQfTsrCfiDVH8CXW7JNZS2witTcB5hEwzyT2KuEqWCLFo7yiRWckGtE4vNWnDmNbT7grh91HD81kU7N",
  "key14": "M31dntNo3tQk6x2E3vydbMzkG7tCaS8FQ4whL3BzEZbnsKvy6oxxJ67AH2r3tWaLzptLd575JJzHAoQr7XGWNAj",
  "key15": "2JbMCp4nAMDsvWxRodGzJfQJeBgapQbSWEXfD8dKc1DsGdQYcraXJYk4waoSQq825bMQjztaFdeLCCNnsofr7dp4",
  "key16": "2KuhgBid4uMELzZS6SZrvKNa2K6D3CEmmZzrGG3fm1brEgWqAFzDtRF9PuaDfm3NmbmiANzyyY6Ve1X6VavqTXdc",
  "key17": "27kEp8p9uxu3vmmxeHTTBHWAtVop4XsGELKXtS424YDCQnrV48K7oNMvXT2mwwBRWtXJdHGso9EAkE3VFv32RX1P",
  "key18": "3KXvww4xAeNS36Cm5g6NHEYWKgUJY1E8WfLWebUxSSc86S9zmXQkjHry6SbFjRy6iQn7458uZcGrapt3icbJ9i3M",
  "key19": "2VSAJDzMi49FiaNKG2exp8eLEN3QWWM7nrq8zXTA5djS8vQs9GFNA2QPf31bpfKpxeiav8znNhY4knQRwvNNyG8T",
  "key20": "4jXw1pW9NU6agjzXduBx6wNiBe1PfSUxxVUF6TzseczDTCz2Dii89S1SUqJUB9qj92ZxFLYV9vPCyLXVYJacKmr",
  "key21": "5XWrReBSjGa4yi8wk52JQqFjocJqo9VKJo6CJe7voaq7zqLGiivdZm4kgMXkm9UFazuE3Fwrit8qp1wuSuUAVD86",
  "key22": "3zm6rJgdSDrP7sCjx1SW3dbWShaP7JefYBrUywsSvXvuQchYgEpNa1b4J7Hr6aMyUEQZyFptzGY2XTLov6T8iF9V",
  "key23": "AUPaA6a5oNDT1ogSJCQSNYxwGXmk3nfbSJTMut7LfsaHeJnHNrEU3Eawu46RoWW2gbgCDATRYCRTfgbjhEb3huC",
  "key24": "4z2nf4XCuJ9DkU4qHqXva6VceVHnpMjUJYSA9DtKJi6D96xdznKWmCfwhPYEo2X55egJf1sQfrxL9XHsjfA6TNV1",
  "key25": "3MyMeXVzbqhh8Sq6dGhB2wb7hJiWyUSEQivtCfrYqWJaeecc6R7u4iTT6U7E1vGHeEvAPcKcBhdZrg21yJcvpWWb",
  "key26": "2UhPSqFcWjvMVD9WeY7svsAiRDpRZ8rj22PNcnHBREPQ6HKngazxaTS57Gc53VVwQb2QnH1pQ3DawCHxLLDUjKS6",
  "key27": "2mrBptuaL1f6dpPweXVWCSbdpLQ6Bfui4zoU9oBbjp9y6Ktu1Aaz9NiCjAwbujvSFNTqJDJZZmET5ev4DBuPVwFu",
  "key28": "sd7Ef2dvPiAjRTBXFiHmRP4TcE7jk6jyUzc8UzDDRtr5SjpoEzTbYpXNdEntS9i2G6MnSWNYE5qAdQTi5eYqHMs",
  "key29": "45Av6jVTmUV1r83pDGC9enZDyVXagxdD3EKnPAAumyRwaQDQDCUkgRGCUFwfg7G1HTsQT6cUJwRFkzuT8CHAbKoA",
  "key30": "5AJqMtgXADAaV9ZMvpNWjx7XsxWUTMqPwm17VLnv74trFRL7GMsaJ9GALqad5TdZ3UL5VfrbUmkiQoQLHUtGp1Hh",
  "key31": "2gSjrL1LPNUvo7kWahUFYdnRXF2u6vjXpJ1pA1A5cMHak13yELHzYBmXMUaC5fwWh8Y76ga9fnomA24qAA6WTgyW",
  "key32": "3ugZ2nJGGkoHcN2L2TfKxuWjJNRi8HL8mCD2EJQDYhCmzWC95rtqD7CW3yWgkdLzdFw5gwNW922juJvHB4eNWZw4",
  "key33": "49UgVkPkF2MRzrBiyuy48PYf14o7YNvvhFq2J2PmCdgvAMZWvhrzWRXsy5Xdkt9Mzsz5RmpnFhZ7fb82j5BkKCkP",
  "key34": "4M8Badv6jinLcF5PFSMhgy1ASGotAuwssyvf6sU7rAJZNsk4WrNZDAn5Shz8xJBi3xwzQXs6xifu4ZLpwqxamReR",
  "key35": "3CV8MzNCzs1UckJjyD9dcBHCzjDJZK7MUZCt5yiLxDzB4TDXpXqznSGhkCP1jtxZirsbkPcts2YLPexm5uP2ntW3",
  "key36": "5KhSeoM2pJRMuRbpchvoUH5cJ7XEQVxwDsGrRkxergdRVWD2F5XUwx63Hb9amqyut6WPJhQejfa2dYeviNkSdHqk",
  "key37": "2qAoGhxvA7qUYbsKKsA4bCWJLoNk2TAQVoBcYpYT5z2LqboQJki66NCvrzyPqL8ese5vNETycbnxtga9o7GANkrp",
  "key38": "3iDMMWAQAa1JWCKf1cVEisDjTimhCMh96RxvupiibZdx1AGiTDDyy68wVUkAoYksxbybaAsL7NEgbsJW7ep4D9mj",
  "key39": "BXwzyWLNbB5V21LVc4CXK1j6mk4vHVo5rRHcFPZX6fxnMLBPqLeBAEQqt1ePqqCneQdSvzMzdiDnPZuBa7bF7Dj",
  "key40": "Q4juGbh3yLZZX6dYkkAJDBkgcAP4eNKu2RiGrjnpiX4UnhvoGZHXfNph5xenapC3r9MNBQSeMtukLrERarXx9hB",
  "key41": "5icfxKPsssSW9uyg6JycR2DwPDExxjCY46hEnvMguTLTQLHEhwn2gynL9MMaPxPaUaYNXQrFhQe3TqHg2J3NfR1e",
  "key42": "63hvksgJp53xPNtGTdBneuRvJ5WtTc8214W7TjmreACvwZh1c2Dt1ESVj8yGaLpepmTqzFTe9yFtmtzbjdAWcuKa",
  "key43": "4fboqoB1ensApNkLadExUKDuCVkfpKkxq2Sn4PFiFsc9iGvCjgXr5nDQdBt3Tz3mqLNmhZaix3ubQh3drP5tTvmi",
  "key44": "oaHyret26JuB9PNifbvEYcdSyhvFnnmUVf9k5Uj4i2vjVKE7R14C2fVVx71BT11XSjVq6QjBB1cTMrfZUw9GU5o",
  "key45": "48gT37CfgnYT7gMVjA2CDLcYLEcNFyYDUnbZbLuVCVEZ6fnohwmpbqMG53fJcA9q4e1REkCrrfcPASXiry582Eep",
  "key46": "2TtVsRmNhyKhkNx4tuWE5VGDSFHY7CeHyEBWSW4ydwLDZrSQaCEQuBfV184iEas9DJ2KC2ANVWAVEtaFKYhAKCCq",
  "key47": "28e6rQTcPctg2S4bjGkoDMn5XeajRVEWWJw5sdXnaePzA6CLiUJJZkpi1oiPzd5KzfhrUvTiUjQcEEZXyDLk88Gt",
  "key48": "yVmfmB8HYi7MpNFZinscU5ExG4xvSFAYvH1PW484QYw4sN5CHhZ3zAQMLZTgYRkFhDa6kH7hw3XBT4WwD1Qbc8S"
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
