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
    "WJAEHGL6326hgkVtJu1qYv6Q76t2BeRGDiTDiD6rnpJbw71y78D3BQb2eZo1xJM3HQ8UqU3hDLXFxKWwTm7k5WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8VUj2eSpUj8xJDTYsSpWZeZ4Z9DnDfNLYLEtqnH71d9yshTR1UUziTPw2FqMxneBwiZptP27trRpP22C4KEmRn",
  "key1": "3Nufsxg8u3E1JBJh2oCw3pty1rVKn8acNvctmxBuWR6nnP4wnMxHXB9ZDbRXo88cUziKzCBf2Whx97H8LXf2shrf",
  "key2": "2w2AhZNCuGf7nZVntGzQFZ7uLJzypfMDfkhHPMEHuVG7t83TqenA8iEa5aK7EXagoQbFKeBWF32XZNBYopSui1ep",
  "key3": "2z3p9sguLVdiR2DEJyyVecJ8ESJcfWgaxUPB5R3rdN8YqxiTPTUCrLCKjhZ5inYcte4YrNWSMkk5pzwwkRgz6xw7",
  "key4": "x7tBYuzezoCN15v4Npj7Ais6mbbJjiRLuf5VVu8CRJcPfzUXzmNJx12qntxoXWPfmE24oie1ZeGWfTVwhesTUQ7",
  "key5": "53yFkMpzZbUPcwjbqGD9SqWvcdfiYJC2xk845No9NXDWuXU6uad6jU7PcbUNhmfoDMWaWpUw6PcAJyqp6qrLQC2C",
  "key6": "48HGEotkgC263Egk3CsGPMsCuo3D3ee7p7jw7bStsLNeNKU7tM8Saej8hNtR34CEZbirrLG8XK8brohBcC3fd8Nv",
  "key7": "DfvtVQ6XEERNp3defXTRuWsJ1eatqxVLwDYFKeMHwcGRYWDeGBtP3U9UvWPZP9odguYhKta52FbEy7X9atpCUVW",
  "key8": "5WRttw8nhqa91oJVGBbhXRV7Add8s2WCsnWhCUmUcNoKDYoHdNzLBndNfHh89qiBDJHCYBRrQgpirw6oYdzxQVfE",
  "key9": "2CwF9p1pSTsVxWZZTTtn93Jj6ThFhyaZDoErVktaHiNFsb3Xj7VPrEhQTH3dPxawYJqc5cRuthNUW4sW5LLfkCtS",
  "key10": "5jyFDHbMnk72ZPreCUGqqKMyQD8PK6q4ieT5cRHXNQKv3VHGXMsXEqgoyJKdQgE6MACp7FNPEfdaEffgLM8v1bN",
  "key11": "5MvfFUvnbVZB47WrYoJY9GyRxjPZ9v9AbXAu9G32yZsptMkK5mVurV5LWxQzoCdmHCH3hYu3DHtArEG1ATBEJzBT",
  "key12": "D2HvvQBsv7KxPTKQ5oy27ZvLb1J7c3TRnXsZfja42ssJjETRxiArSFW5QxDvVnAeNgkXGVWtnirEhbo8YWezuAH",
  "key13": "2kFrSJMqr7tpj3XGpTCCBGVmyPmPTB5gE8dBkeq76Z1NKF616M5Ya6kncjoPwdAAFpW1btoRDJMtdpEc7ztcXUWi",
  "key14": "3sfHwMQ6aJxyH762PsG3DXskqyENTDVREiN9jAfh4VqMbq3M1AFuDtB9zfpxaHqPZjP8uTYX12TqjVcurZGRfDxb",
  "key15": "4bDCfLNkvQen9XmQ1zBo1JcM2qHzQJSmg5kGxZFSyBC8uPLuaX33zPc6SFLHtAGf4dYmu1DBGc1uRTVUMgWDaPNe",
  "key16": "3uTygnqHrzRKLMMSriPYbmtQRJAFh8Xivnaxb2Brv96Ed2iRrRMFzgdDvFrTjD7WgVaUziuo5PabGreLjexcBrxe",
  "key17": "4pAE33AKTaYfLq3S8EtbtGQTGEQ52zL48qa4GQjHHijEccpt2wFiUxLV2RWe3oF4KnJMycNqdq8YJxg8kM2ESGy2",
  "key18": "8fdtDsraWeSgHC5ovpMDq5PMNpD2raFC98duuTjXXLZkjSRXCC3QsNyG9za5uhk7M1fKWj37XAd4Xj4WHwX5Vp6",
  "key19": "4RmxYVfBjjGw58SzDHsFv78CGHqtxZF2VMc7yWMhHGL9ZTjHq5ktFJgDTxQ3cKgEKHwj52EkNMoJpPc6T1cnQT2j",
  "key20": "5WCpW9xu7ek96GbJW2yB4hfs1rBwoPCt5S4uADyWKk5fEZno6yGXregCdAD6X9Ctwq2AP5g6phdBDokt9mSJbfTz",
  "key21": "3szCgSasMHWpx6Vs6RGtAqgEt8e5gu8h1Eb4d3eUvW61C9csVvzF5gcTStNdoSoF6GXrGxewer8zPSF8BRC2N2Kb",
  "key22": "5tz2cxkWHhfW7d2MdkmGTo1a3sQ3opHmWCowajxxSmxq1YsSVXVJmsxyvg6ZCTXGnjMY6hkVk3gjoM2n6JDPsZqn",
  "key23": "457xzZvBCDKGpScso3b8igUDr83Ahyb4zKyVddKhekveT5xBwGX2SAZMcK73ZeP4nwsTZRQ2fma5rM5egr58ZsgG",
  "key24": "iVeftM2ve5J4ToxAMJ94vFZYZmRNgNHRkiXBuv1Uc242YRdeQtuULVBJChoD1rs9wWkDP78VGcG7Vn5sRf6Mvc8",
  "key25": "3bHZo33Rm5VK892ZZmMSsrhHbG1UK4YhJmyspqe5nZZb64apUdxiBwJxBdFKsQ4HzzxDgFB5vYF4e5LugCFMm6gy",
  "key26": "4HB2txM72eHpvfWTmTQsWcvf4oMSFctBXjJ7Rp2nY4ntALbYSkxZC8oQ3RF63Lhj7HR35QXNfupgZrtsnE1SQ5rV",
  "key27": "P1vCd2xYoSKRuNND1VkdTJ8bDqPNmsnHJmtBhiDot12RasviFuDtMP6MASJ7d2SGdXQT8WJ9whx51nfea9yXjmy",
  "key28": "4vAjfJnRSNvofhrTaqjCby4SbAfqxKkQQ5yG5MMHBkCp2NNrV3zuimsi9N5CZ5SBNHXZuaq6XszLUbXaGw9FskML",
  "key29": "5PKAynZyDZdBSjng4MEpAVuPbXmUGMgGd9kbLYkXXR4LJqu6T3rqwisazf4iGLqz5Rb4a5kFo4fdD2aifqxzdYUP",
  "key30": "C7QuXq2D8TwF78xZZiUSVkNHC2rsqfG9oAVGAGVWUPR3LfenRS3JY35V3jHMap5E3XokeLbFeJizSijYVDTzcjf",
  "key31": "5k9kik5tR5SvZf7ZTjupeG2k1yEnkbL1odW2p2hR39vSUfyue36jJ7BYu51Vds7rXKpaoMR9ngmyEoqg2optxfzp",
  "key32": "5dznCbk1Y73fCGZwU7KbrmfVpt4MBSmBenweZi1bLCinv45kBzwtJjvPcQqwjBqKaERCMbKNha7oycJvSjZzDPvG",
  "key33": "KKvJeSC9bWM4ugxpn91z8vVAog3nnNAnQuxZNQFiDzfu7zHTh2byJV4U3ScKXdybstQXs3szeWGuhKvNABpbdvE",
  "key34": "3nUpe5YjkQjjmXbHDFcsE3X6dYjQrGtShHHqqHbiZjwfDPVjybi5cB6XaLUJTawqXiFEztFqBVFzvsWs4JPDED4M",
  "key35": "3jY6ojazdF7UUWbEGTGAeikuSDuEip1kUwSMHVjgrTYs6H6rz4GsNJgnSXUHsdhyfPn8xk7xXCFf3r7A72taV33v",
  "key36": "5n9mZyqvBvjaN1njc979Mh73eQyaWRmhpNx7zGtcjBmrNS1V63QQ9mYsrpNMW1EpwdtnzQg4G812xNGtcQXq9BfS",
  "key37": "57L4DU9ewwzAoEu2GwavDAejTQfabWmmLGekMjUwNQKzBWmQdPDCEZezu7Q48DCLkinw5LPXCegNkP5cFLZxPnS4",
  "key38": "3QUVUUfm6x5CwVm9FCkKTcj1km3z5oPCp7PbwAinG6BcLDDNFaXfPeQ97fCNiZVj4mgcgSkAy15rs8UoEPJzQWrV",
  "key39": "5HU17b92bNmAtcJWY6LMFv8vbCnUq4nLHuz8GrreibtGUZ2ZiaBEh8UTZup3h46e7zFpDQd73sMz5y1iQq2jUYrc",
  "key40": "i9Qn52CqoFB44kpnv7MvCmo8fXSe86MHYmAUdANNKeNUin89fQutACbu9t5gcPabn3daN7BDLrofeLpzXVnacjD",
  "key41": "DQjmxh9A5FbtPmUb6fvN3P4hRXz16KonSEp8ESop49vHTQqvCFvFb72vuwcEovQPz8DdUtgbbpqL1Lp2TuWJyEE",
  "key42": "4VqcbwFhxmwRTsSpcQmNgXT2xy1cyzTuq2aXwb7122hoUcSoevU4ob49zGKEmyYjeokzp1TrCWhyx3G98GE6FeXG",
  "key43": "2AKSz5RNj71jvsbfry9CQXoMg7xAQowqc2LLUz5AWgk2gD7WnJaxQLHixxA1GdzRWVgwnfr4gpQfboxnsqYkLJd8",
  "key44": "N6uBNx9hXN8UHxtxWv3S5XKi4JksH9JVib8cLojUKcEK7eiupkBrgQD5eq4f5TLZqnVeKW7Na4vP8GMKfiySPWr",
  "key45": "48j5WYqKfsPZfGZU4qCC2gZwBNDFiVJLeuWnNMt5JgWfRgCUmzEBGY12zLYyLcgtsEsQQSGskcV9g1LaN6hU1cCE",
  "key46": "47rwrCMcXVVSgXAjTFXB3DHVwMQgLeTvtDny5D4HGPkarV8vBTL3Ro5pUVR8pG8ZozHyKKKHpHcA7yCFkuTCABxM",
  "key47": "56fPQ5Ah8egNrycJXDqT1sXZYxa2G6Po4XnGjgSJmg7kWKWrLXN1ug1HwkC45HHKGVBpY3k2vBTQZzJB8mRovCHN",
  "key48": "3PwgDm4YB5k3YRAKzdMWYh8JQV57pz6bwbBgZiohHSTqoXzRSVZ2jRLMLCdBJfzxvduFZbEBxK2UfL8gRS7FjcAu",
  "key49": "31gfcTcrEXkrXgSGZTMhnb8ov4s7Nw8Cp95U7eLdh81vXKL2BfZi3p9ScN6RDSzk5CytdZei57b6uiFDLxGCDqR7"
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
