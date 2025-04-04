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
    "5DanBCqDn1Tt4GxXwJt5aB7gR85u1RVN8uBy9pU8GsucfvBHskAw6Tt1PHEFtkNPuraAB9RDrREqSAYVYnwuHLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDSTikQDi8resw11Qx5Wgf2f2k7MiyX2oZt7QgkuxeAzUspCeqTSVyg4PgZaZBeWgzujm38oCgjkAroDtsAN9rW",
  "key1": "5bhtv335hkE1DHgtgzCQ3TG3N3aAkjp18NsifbYEyWFnyCcsa8HybpTuo5CeZJGyhDH2QMexLc2xXP2PKiyRgLbH",
  "key2": "5pzP5r6L6xbUEuusbwtriMP2PghpgToowxyddUFhkj26AkGo6qdPxuStLXpCMua941wzrHJafp9cXmSVdHEW6kQg",
  "key3": "yM1XVCU2MetmcrPVQnLWaGFmsocTR5rbv1NfhUdyxoPNymhNrkQewS48NAUWLAVFku6BPvch4TpoxmV66RSM3FC",
  "key4": "4nnR3W2NcvEKmEawe1JXFz2btEV2PCUU4VusP47T49TMCpvRrC1q8jiHCKHfcdgACq1M1L9UdGpsjHZ2Q7g9WNbE",
  "key5": "5rojcz34GsBSQ34bnhza7RPwrRDo3M34DHAgUGATHyRcxeaiJpNWMswxdro2XGzA8nWLnGRFWNuC6UxuYpPaBh9x",
  "key6": "4ssXHQfixmCfQsCMTp2tkzDiMGyqNXfqyXZBuZSMzK1aPPJzqQeh3i2Sc7ZTo35Wq8jB1KaJrM55AqefDVocMWso",
  "key7": "4X4snACgbtjvSPpU9tqSJBXgn33BLnRLyhAAiUSd2Wm6M3W3JLqV89WJKaXEUBiYdBdQnTLmUkdCvV6rnwjty5SP",
  "key8": "5gw5BeEvDqrHimT5wkPNTAdQHtURDAR93cwo5tXYhU4kLUgZMoXZM8KiuBSMqr2wUQpaHmAWYYLMWyCHCUX4SSAW",
  "key9": "42S1ZUXZEotbuACJABprY7NTFbTVNxdouMc4cfUJ5ybYkLHbviZG8uKsn3WRSf2piieVF9qELUFB4yUjV97vEnu7",
  "key10": "4raDq9kuuTyHRyKvxdoFq37xc2fmCPjqbT5WvGcyQJKQQ9CjwiLRXwpAvkgPbkUPT4zbRMSYhzoVyw3hexTZuJ2H",
  "key11": "65oDFsYBp3Qi22P7oMPsxoz98rvetSiU42KCvEh8fPKsGjcWZ2V4BUnCddtqSLzb2Zxqeud9csZiCLmd4qHN6Ff8",
  "key12": "2PEKAxc5doSGtP35B11Q3RkPnwxdQJcRvxYzJ9ZYenvr7bWXUTw2QNeWNNf34DKLx5yt7R8Z6iJcxLu9VKohEoYY",
  "key13": "63TaDoYTg3HcY3nQXs3cTLnxYCmyuW3GrvRfNfbzcTdxAgoHM4skLwWRYkAoHfsZmbCMuTCxKyS6azTF3twEGTMg",
  "key14": "3ANQuLaDZ8TGsMjSRZLfUqr21dgRUiLRaRcMZjNcHqEj6bjqMCXpyXSKHTYm4FvsGbdUHacRVjv6QkcFvStgb1ey",
  "key15": "3oCmCDMdX6isoNHcJ5rdtYLQiWUi4xUFAVWmFbSt2Q1A15LiCQ4J1JYWr3U5PTzjZuXeYNKquqD9tzoyXJHewFHU",
  "key16": "2kUe3e7RDFWo4Yy66uvoKJy4NAy7ibRMTKPCzxkxAB4u39YWictCc4os5aiGrqYwQEPSB6GkEiFyQYoe1BQd8o4M",
  "key17": "v6EZRWKuqxi21gqaSsftA3ThbMVRrF2AGonoaEvtiqTJ9W35ptbgG8G9MFnLP147GZNeby47Mofj69wRFdARicQ",
  "key18": "EUFeWEWJZ8qYmZa7mdfaQHG9LhggkCaqmxo4ptXAsR8UnPvdQW8DHf6rndcBwY2gVdUXKJWNpgG1M2WQy9KtYTf",
  "key19": "PaF9PynyEe8JjGSJpKAZqraJCWxiJS6mVng8qGNuV2mEwcfAugZshyBLBrB149hpwyJp1DaggQbENboCuPom2FP",
  "key20": "5jis5ozDVqMTbS9hkZFKEF1frYkTb1mhhK6FMLa3wFKCpQnaYY8GEo4dDTSXjhBKEeb7dQF2jiv6eMxDQDvUg3xG",
  "key21": "53QKNZpAdGb4fWGDFtxk7GY8xCWMuMEmsm21k73BuqZ7eM1KsxRYaL5yBWU6cbfCx571PFAuYxWNy9AkHpd8dwD",
  "key22": "4dFKJBVsDjpxEKZgx9Xu8ga9pEaWGBsWHhN8DiRh2ptPpd74httrVa36hTwvQjnAJABfC3udKoKyEjUwvR3WWQ5x",
  "key23": "2buT2DVmGYRXsUkQ3scbteKRD8xmi3S6SdMgtnimStreHYm9ivrHnkxedSbKys52wG98FnTcRd9bRdubdESj9NjX",
  "key24": "61fYt5bCtvn3kKyE5yQECgtb331RZbjcz7cnZvcaWr4GcMztCPpWVYMcej12Ea1oGwq6TUnoopoCZ49dr4g6q4sE",
  "key25": "4NABVmaryPwsk4JEcSfaavBDcg83zMLwBFuDv3QNB94YGk4E71UQ8CNzE35ebDHYu5rZiYRwnMpcJPZ3q8g578R9",
  "key26": "9c3suyu8DfBqbCEFiLAmY5XCjBdpAhDMrVjRpFu4tyPGhfLm2cBHus6JYr8yxzC5CMHgRCXXNHxePyW9Prw82Fw",
  "key27": "4d6c6YthWSxnsEBxqy8efcVcCxbndKFZcbWkusDWCTCAC4RZ4VDGXSBcakDPUqUfwPEJymWknWDH8sNg5YJ3D6mk",
  "key28": "56U6KWSjMb1Jg3d5vf7WCKnY5rpE7DSuZYNz9V71gWs5DojwoTHBAHqxoUd6ryK5TVh6pk6rBU7TTyvQjWt8o7Tt",
  "key29": "4qdmWwXhdS9nwCu8dC3DjsNsYgjPmkarT49UwEeNAcKVHeTJv6YTEiDsDQntLAxm6gqegEXBi5pnWBakm543vaxz",
  "key30": "53iPxjo6vLrGvgWyRSXEaTB4eMt8M3mzPnmtDZ1MSHVsSyMhgkaJao5f3WwSFF3zQX1Y7NsiVDbzpSMdACiS3A5U",
  "key31": "91XdRJLLF8FJJZfcars31d7UfFfTue7imhV9XxdCBauFCduvFxXBy64zxYaNR2dUWYnHaFdBE9W9fqYcvFQM2Qw",
  "key32": "2SxkbAWrVPgmCjbVPgsdh4r5mSUUUL7KTPQurBhmRu7TQ6mqMcjwqJ6ggmH432FHcEjYUk8DbLFpo8AbZmkGgtdf",
  "key33": "5RFL8ZpXXKrFxh7rwuqUmVTd2MxCufDiEencz47LH1suL3hzskMsReK4tj8Jpd3uVWAsUHcFUk537XA4XRyn5fdn",
  "key34": "8pqhx7gmseZfZHbiRXyXKarZmeZQGzDkUq9heQxYtdUmrQoh5ia4TMwLv9hznjdmoCi9xLZVVLDmrsrgafZVRFh",
  "key35": "3xB78ySB5j91ejZaf35rF1J8CVQ3Dp3exLBJhQvZkHs65Tx2qmsYYbCyLhnkvDTTy7GJXaSxe66xEXM9mejg3iZf",
  "key36": "nAQ532oX3Yvaamnu6HampsUnFMwZWuNcjq7kDDzWyXrQ9ouetaemgm3M6fjvPnNtqHMe1nGJKHU1L9SNnBEu1Q7",
  "key37": "2wzmjEaN3h69K3DMprcTdFuZRJx7hEoSBckWLrWPW7nAKCdjSfWLN5BmSnCNx3PcRt6FxwhHzHNAUH81e24JS1zd",
  "key38": "3NsPehTsrgYQX28FQJCKuBGtJL3JgRPKBtkQMYdQDPFH3eGCDg4nRJm1zfky3tif2rdzTQQdeg6MoD5a4xtF8oGm",
  "key39": "ox9mxiFEqJX1g5kMiBHK3jb31RofK6m2LG3wAGC2FUAqieEBKwRQjmYJXWWUcbLD84whGAGmXdKQWs7k3sYNw63",
  "key40": "VTY8eof1gDoHAw9my8G4CxwcqVrFQvCHSrGzdZ66na38tXsUbyDXLEdwuXvjEqmWscc9ACCt2b8ir9beXrvyyXE",
  "key41": "3XD3Q6vAAdKaUbnBy8HAMcRueycR8MACA9T63aGC4Xrvz66SSCU2Ta73xCWZpB7CgoyVeiE2yvH8dxHaS78ePYN7"
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
