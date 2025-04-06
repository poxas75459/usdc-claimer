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
    "29EuMpzGbXDzvju4cABATTuetXvfS9fpTe87ucUt1JG4M4oHQJ2GAEviBjE4ughQYzNUEQ4QpaEEF8Mon4CMYpHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MnTSntDbyyUXKZVkgRHHm45WaLqqyhiHW47HuWCTWsj4rhnPTiHAYsEUwELmyLaw4VYnoFAdDcmW4bfNjzbQt7P",
  "key1": "2N8UnvojXcnLKy2GaQWyikd4xpHrbJNTg1Zz4MKcJSaw1qUtsGrkj514Z5bQPVowLyhWHf5VvG26iPSEUJo1s9y1",
  "key2": "32MwwM4iFDuTS27nZ1WCv4tG1zpszeHZPDuzL7G6SPXzT1FkaEpmBCcGAexNGeBhbpSVN1DBg7TNTbadEqC1RthZ",
  "key3": "5DtfAWygR471voj17jdLichfdrjCW8uHi4wiKfuZakXqF1VpjMk8cT4AqSiP2jA7SW2bt9CniyApJzMQX9fmxj9c",
  "key4": "5hqckKPwcBZNgxGuxr7ouZzEWtUrmL4wgZSqxsJRXRhJMk1VbvbBeBP8Y8LXrvNefQoNQjoAeXKWYVgod8tptHbh",
  "key5": "5PFXqbR1xVccxVNy1tdvLJPB4bn4mvJHf9eRyCjj94hGrCktnVMoX5efS6yvr5MrbCd2EvGDfJTWfcT9hjrgaN6V",
  "key6": "2JpZXPbx3Xy2RzozqKPd6uty7wDmgVReg1EBxPKxsb6JXVd1gCZswuqpdGip2V9St4mi29zHZHz51BPx96EWV6d7",
  "key7": "4vt9u29NAyntVmN8GqnNnLeW3LDCd6bS4dM1gMBbVp6ExvGpMjsUFU1UcupCStbtWdPPiHGgyjjzuXJZ1zaW39MC",
  "key8": "2xxQDYRToRkdCxAnwmdGDrjgRAa7yRSrUw2wCTeQNVqQgFgvtwB16ESptB893oxRwS9Jyhc2R2p2RDZaU5gQDtTj",
  "key9": "5FZKztgcDyzyHZXujUGqfm5X8JCcd2CLoFT2d1LHf73JJ14XNh1cyfjiVGWBfGZMycPQNUGNQrULNsaBCyJ8Gbw8",
  "key10": "S2yxT6oHfUaq28V54EB9u78skMYJfd776NG3CH51H7ye1b3CBEgV12BhWhUYYnfKgixLKyK8mpTnSeSp88JXQs9",
  "key11": "2gt3Mj32N7TmmbvqbijoENokiw5Jowq1gedhXhdZ88q1u5rWdF2FSB5uV3caGWjKYAGdAoaimfyvrYNkuaP5D8dc",
  "key12": "2c9ER4gqSVoN96wcGhXW1qdEQsX6c5kBxLfCHhwPcGcBgfcpSSEqRr4QqsatstSEQBFwT9UX9oW47mj8WJ2mDuvL",
  "key13": "2t9RtaKvC3wdpbitTTkGMXEb5qpFmkrNLK8pqXxvbLrTErHv7a8QJPWNPkP773TWEJ3nLXn1B1djgE9y2QszKZJD",
  "key14": "4jWJ7Wj96hSMe35N5xNRwvJgaXUs49ZTFnq2tvFwWJKczFvcx2yxTMrnkTnKk4WKYy95TDwWiREk6qnAQrJw5HX7",
  "key15": "2s8fcQQKmi4QawwCBrakdsAdvWevciZTxvSmditrF5Sk98za4PVu3vT3HVNbE8TRL5ZVN5R26K7vHpFgfM18A9zP",
  "key16": "4tmyswcs2W4gk12h7CvMZWJDjcgsSx3Xew1VpKpp7VKZUL8pKtDDhUVy4nNxeHPiqv9yKsNvHR6i5gRdPVsZmorv",
  "key17": "292WmcB69Bg15RxRLWokFEwpHj7UYxxkP8HRpE48tgVPeBU3sLL5mmnw1bN9Ad977RqNphC3c7Rf8dXtsL2s3hwT",
  "key18": "aaUAhWqHAfMgeJQyhwVEz6tWDCo27NqQvPJoafVBxZkg5cqc9wyrT7NG5DjfmvmSJsPBe2fVNkBHuZAmR81Tvnp",
  "key19": "224Z7FFnwsFcgXZKqtmZzdipoMHmkNypB7hwfV16ut3yM1oJWaFxV6ZYHKxrKyVxoZAuz8NGPkb52n17w9HwmC5g",
  "key20": "G2S6T6xAuAKWx51USxThT4JEe3jxAQNbnYTHgiapWkpLLG6x6CfSMce2xmtNev832YhmLk6Atmo5uZHp2sQY2u1",
  "key21": "3Ro1bUQiqVjQ7kmkNtA2vqS4rUVQSwXeGBJu3ySfTei8AkPFLZ5PYvbqHiysTwxmSYpD9ovT8EEdkJk1fmHPxXUt",
  "key22": "55faLPQhnErXtxoZNZGNUBQjZ6zEjfnBXi2UoducZLbVnBBQtwqtsHC7jUCDpoFbn4q18jBzr9TwbNZU2m7ME2ix",
  "key23": "3ker2zC4MrZNj3b7riMepUwoZgg4D7kshPqS7FLbQoaUBQFFsQrHu4YLHEg3wR6am4WopxdLNRTgsf9TkHKT4LSR",
  "key24": "5XLugPkQDn6cqGPdQWFe5sxb4k6eubPPMcgmtMSdh7PmT1Uy6ZigczpdBoeC3VndFtBdnpHBtXMWA2Trs7iomkVx",
  "key25": "4pJterffmPGj9j16gXBT8AKSEjRBD92be4MRPMrssnfjHANprhnDKv2GUhXLaPBqa5UnPfjGCdAEAGw5Jcv6NGEv",
  "key26": "5cXg5BPRhUNyy9kagarPDqosAjhWkSZfn8b52fRR2qPuC4YWFK4EaQVw6CJGi6iy1mmQ4aFyqxALsAMCbmU2NWKh",
  "key27": "3zcQthcf1QxqV1ap3p4dGVRKsQCTQTsYnbghFEaUERAVp4UidtnfMTV29a83znSpY5xJXBVBC2T2oyZNLcvtzu6g",
  "key28": "5Zuatb9NZJbU1ziVmyd5sVCWMgGpUX8wzYN1o2LdRzXdyCXo5uLjPubzz8LkTfSLsiwwVCn5oMiHRPrBB9NSbmyd",
  "key29": "5CnQS2ngAvEqdcgvgjcC1BHKqtKH8TuxWfTrJRXbNZyQjNxLscdxbU4Hw1c8fQzSfGWbpqZqh5rRCmbs3HdZuk9J",
  "key30": "29VerLGeCwvMk715bHmTZouiTR2Y1nbDvwS97anb415uG6cpsgPNyQxgwCUhzniXYUPRRHdVLrhEicat7NRJirVQ",
  "key31": "zayzgc3ujtVa6GxkUxkAUFb868JNnoMxWnU9eNc2BwWNofgT2QfaFfjmgYgZNULZwswrkpvTdvdp34JpULGG2jb",
  "key32": "4rAtAmteR7R3xXe3FzQE2JJo3k6PHKAfDNJaMypeQXCHS4kABMiHTvfzbomCKfXBENhDYzhX5U7bsuXjKEzg5VpY",
  "key33": "4xfkXSa7dPiqeu6mzwNAEgupVMFAAQa4gyXeBBUwrpQer9CXYc1NV1bbc2Pji4hErHHT6Dtec8qEbpT6BfM7NVNt",
  "key34": "5GRoMmUZQPZKUZ4AnLxcBZpbGHLPoodfqEJhsJGYRamVG8FDtP68EQX14kjj5pQzoa5VnxccSaPMoGtbThFR3akN",
  "key35": "59p6M9jWksbqtcCUzvxbSoMNRWCznK2Y64iNxjmrqj9yYcxhdhRQuuLVtfuUz7Lo4veHTnPfJirnx4mVWZCnDLH1"
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
