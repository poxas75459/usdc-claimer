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
    "4PWpZemfXebBqRb47ptPX6SS3L88d6jJckmrPziGzUmoe8on1Z31sBszZ52YCdJPzJXrjmnEAcu1nacBCGo2YRLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3397E32eq1Xa9mQFqVc9hwTduQfm718QZzQUSexp6QRpDkj8z5rcbN7MyeWTs4BjXwFKzZKcbqbwEDPUtoNzwHsX",
  "key1": "3QSDWZvoMXyUZTPW4qw6EZpSs3cuSriDBGwph6JPujNb7TP6u2V2nNpSuTduq7pt7yHCCHAUXpM2s5B3d8e29dzu",
  "key2": "5UusELtDKeYYQ1fpgkkPXsL4Wewmqwhn9wjaec1fVvDN62isLbFcmyYoiZ2ZDKKxaHeVgZKqTVirYJ5AZ75NTNST",
  "key3": "5CH4AC9zifLA1DH482NbMLgdsikBTnWPQtxbu3kCKp22yREW8c67Uq6xgY1vKGgpZiMLuv2xUQUjYDLAzRKaZbsZ",
  "key4": "44VT2P8aQcNDAZG3wSz8u8o7e7AmUStWC12z9eLxLSW5VwKRdEBf7wQdhy44hqqZEihvBF6eDhfcbYaY6kvAGEER",
  "key5": "E3V3GZobJ2ZEHhspYXrzorCuaGakKqy4xu7QLXqgRmx5qEcS87swJP3StXG8tEJRSijs8YErMzWeyRtz5VbHDUP",
  "key6": "2zSP4tqjCu8EvpTsYLtkAZSHWVnBcSsdDX5PrMkiEwec3CqcC1uWYAJAS7GcyduRLXfPVPrmPSHiyvUpGHeT4apY",
  "key7": "UTTtRzQbQfRhA47PELWSy1kC1en2t82sp7FW9RM4dY4NePdfrBCMnd6HbGa4eirBQB8tGoeMKq3wLux5x84T662",
  "key8": "zGPhCYBskvfkYGEKcmQ1msu3RpwtfkU3Tk3hFXKHzvDWPWS3kLQzNZAehi2bXejxq9itw7r2RaYzxVBQnDTddxn",
  "key9": "66tT2KeY5ZXzHqjXVstQkT8eek2wMVintDjTCFzgUaCwosC8NJWrW5AP1tExcDazQcoBZtpJA3m4GXqQNVSGQbJk",
  "key10": "3birnudjnEWuB28kevHfBSbG7vbcgDFMVRsonoVHWaD2gnvYEVdhtwd4eKoqggbxqD94P696XNjpJRbbfapTzxmz",
  "key11": "5mdwCEZbzcSqv8qtArA2KPvYh3FjsvG73GPDhxYjPBD8zwVsptXraLbwbj2UDRyx4imDi9dAqU2ikxvxmxGAtqBv",
  "key12": "4x3E39BEtKqUUXfTo1b62W5AQW1pLqfcfWJMxL2waGVqKyT2NgJEuQvk9jzN1pYSkMZBAP6vcwhD3yhM1GSw6TRp",
  "key13": "44m2BRWUpKuNoP5D1tSNFxxFVuPoiQjLxQGMZAVUeU45dSDdiPuMrDNAp3LTPSNjyQMssLwi15vaPjgyRZU8NUJ1",
  "key14": "5r8wwXjE9zZjL9T7gnuAWnGYArAacxSivpPGwPMTzkedyTCyKhTT2JxaAAgzgMJxkf9bVjR2dipssVtUw4N7AG15",
  "key15": "5TdL2oVJsygiJd7BnfXwUBDvn1kVLMSk5wHT66ZQtaQLwLezYkGpC9BxRPvi47nCaxrTFrz2bjm8drDgWYLa9zj1",
  "key16": "4ZhJ3UPKW9aMLSd9bLNkEg9psK5ihJzFD9GtASBGxisHUaCyThjPnwQVMnHevrBBxMWXJB8n9FFo52ftrKLUJda3",
  "key17": "yPX59gVpjCU5kuG16i3R3Nc1TGeFkW7WyhArwAQBi7X1Mksoh6xVKm2MTAo9SuPuiqYhCkSBhaxLg2HpFTLzbds",
  "key18": "4NwLykJXdBrV49exjykh7svRM8Ttkd1jnNuoeWG24vtUzaWbxyHASM2tnfVSDHeLj8VYP3GSgNKiArjHeEDGXD37",
  "key19": "2S5ZYDYa5eyRdqpfX67W1kjnX7KdKG96bBHEZrDta5V5uCiW6ewKZ3fZ4N5fbrzoLyH8rHrA9UgMAcQLtkMmD7Nj",
  "key20": "4eD8o8HdPHsPyK3eBAAfJmMArCNKWMGSfv2n9hANWK9ycEenfbkDCCRKXU4fS1f9Ub8FFarXFFh3s8MhkqWjBk8u",
  "key21": "5GZ7wSwJE6zXyJ4vipzUK4w5uuVgADHq4RoGWXfgzdUFmEtdWnyyZcfM4YKbhUQ6DqvNGd5dGDttodjr9wd6peGH",
  "key22": "5vM1i6YW6GJTpmkxPjrBaK2rhSNTPdvttagydGPKeXXBfjN5CBbbYHCE3b5PrvAvhw4j8iw9MxfrPuCgbrAnjEQt",
  "key23": "5Yu7fhQ8K2qkhgSD1CfpRCz3qaDu4e4aEkwuTGbx8knBWoTh7vhrLZQ1CdDX92GeNb2qfbYHxxqeLEoSMsndy51z",
  "key24": "521ibk7UDNRKdYheCk9xaqcU758dzu3TRBihXcu4AVrN5pDJmyjzWSpkmwVkUk2UWjQiGmUX5A3ftpeB2hxubKGK",
  "key25": "324HXoxeQJSY5QJCngFroEmMKYudEFBmRp2CRkFqEZv3j9t1suSSoYhmkewgaj7FZ3NK9PBBHxurrMaLi7L9FG81",
  "key26": "3smgiecfNFrqphNDZjwrppmyL6RJ6TBJvpGjd1QVW273vGET1qSqq7GuG6fh2Zwf8ykTLdwpQ9H9251rA97kvE2E",
  "key27": "2RewgQR1dvn5GBcY2krqmX7oRAaoAAHqf2hsZuTqbKXjpqiEaHTAAMxCkEWJyfrCK2RrmoGRCFSs92NqUr7JNSGX",
  "key28": "21G6xXDJjdC9uE3VcC7Et45NGK6btWoaiPNmKFPejvyFoxZmxCKeVwVwybUBQFDwhYQdaQ4a5PzNFzBGNAZHMdVu",
  "key29": "4QMRYUoS925QHoAZrkmoeQ1joqWBd19M7LiQrYkx9CcF9dJo9nvyJN7D6DLQLpAAX8WVdkpvM8eXRYcAdYDrqHAd",
  "key30": "5ZVSALX9K7wYvCcShXsqCofNSMauPkKbyR5QwhgpqY6sVBwCwLHf4jrRqcVWNzNJoYcCEKrkNE7npRhJKUd5dTsG",
  "key31": "NDLfG9aTBMQwiVLTXxNxURMnfri6Ve2JNSTdr9bsM6NaC2RSaaR4SRBJDmdkaKm5iRtiGDNguQ9yqCbdG3SXWmB",
  "key32": "32ohitYAfz6DMXjuuA2ZTDBxpVyLkxHa9eGYxmkwY8WEu5tRrSLXbXc8Zp5eh6Tgz7LFEJKKGoh3dZxobEUzK8t6",
  "key33": "3nBXoE2DZUQxh8UTHzuQkUq4C7yj1tcquNSoWoP4wa89zwQsALCD1qm5ziuGU1UcTqP8eEpygwXC38m4RASqKsMx",
  "key34": "2i2TNtViH8N4PwwaUctqfFsRWt8oiP4KqjBNex3wPPv7j3CrpzZP6BBebRsLKYxRxmexiHywEuLcRVDJoGss54Jc",
  "key35": "2FVg95rYXYgCfQ7VgCX3fMt9TcPP6KarpxDkPVpUDZe46gNEsi8SyA6wdSoXds7hf9aPjiJ4jpTyHc7GawFMdbs5",
  "key36": "VVepPDmAt9NEWpC8HPy21Ma4Lx7a8aeFB3AX54E1padWFQSjZjt9twyqX5TPgSs53fZNeBKikeQki8Vs1Q42baR",
  "key37": "3bkPfvihnv7hwhcLUesvfjh7cfCEFRV7qz3BWjWBn3KH9QeUK4wMn2acL8Mf91ABVjQeZifmqtkvziqcLoWFMPBU",
  "key38": "3sRpXcR1y7RA91q5LvgtF74kTYekfoPEeVggfyzK5B7LSMZyJmjfKb2ZQhE4Lpq8eqrpfcp93wcapDe8Gm8bx3CT",
  "key39": "2BTevfsqybo3hJMp3FEaYomvHjazkd2yMfpjFU8p8jhZJUL1oETYxhqqBp9maApvMDdL3soLiGMiVyTL8z3LyCah"
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
