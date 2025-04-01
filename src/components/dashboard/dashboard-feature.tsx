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
    "3y4VcRmrd4CPJqCh5TU2DBfTgg2cuaZRqhzG5F5ZEhtVSjTquLR4TeeuwmiQVurFzL8UYbWY4SXcdZ6P6omuo7m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VeHdApDMhiGh1Kk4qxTbMjPHxqvrJSh7oE6kxmC9e7TPurS3Rgwce6GJA8F9TrCoPPvoxQEyh5TcgLn1eJhxTN",
  "key1": "3aLETBiPwKbB9VknR5vPjTmbvgcyHPyEiF97xuxFfnou5j5ACgxLpUcZE4g7wWnUU99ybeGfqw9CQQZ27FuvTsut",
  "key2": "v9VPLABNCJk4JVYU4K2Yh1yFd6cRFph9ELfcNm3DuNDmJCjXBrKP5bnfGRr7ixTaanDbgLNdrBqRHWUKrKTAd3J",
  "key3": "VhH7UQPyCjyK4P6o3sfDCtNbGE5ry4csXSiiuCZtUs3ERbExL5LkAoMkZ8155HCANuKPQ9qfnZsZ7vHzWH2r7P4",
  "key4": "2zMPfybGU5mQDp7RRtQp3BYLhnVRNJ63q13WwNM2vNmLztAY5sCjuZXfMiZSj6BVapM2aYG6JLFPJ2DRtPz7cwok",
  "key5": "5ExfA4hzgkVfDKcNkvGLKLTFEA9nrC1PyRTva3phHR4768pkbUQYePXgo8kNiCffuiZuuGYNx433ML7HZmrgaLAU",
  "key6": "M6musRVhYoEkfMekUSHboUwxjyFxk15qR7HT7ux2FzVSf3RqJP9FqHqYWNMf1dX7Pxibp3JyJRGyJfctXiGfUg7",
  "key7": "3HJc4q5MbU6X2SdJ5PoAFsE75ceypks76hRq3fhsL5WY349nsnda9GonRqJSpvLtuGhFciLiR9FzF95Pi3LSZ4ek",
  "key8": "2EvBwV5wtSfBMGQCUP79t5eD6o6AuqqKKGxi7fz35hmmjb3P5SA25hUWafsZ4oufwRb85zeS2vK9ocd5X7ZiDgo8",
  "key9": "3pKZrRZU2mpDnyRhPVN9BReV33PN42RkWrXdp35CCHd8GTWLyGiR432VspGo3FpanbWdiWn21QgAKJT79CuZNjia",
  "key10": "WsYKpWbVp4hNvWu2LMu57g35zWnHwLkGzaRfsc28wMEzaeAvNqcfRxFYqCpJzsrtB1ifh7H5AzhDXD8h62dSbLb",
  "key11": "T9v9RAiZ3JDAbBfAer4QcwiB9FkXtiXd9nu1QqxyQqpAcbciLjrFzpW5LAaVPW6sBXxZaYaCFJYnbcyV46f5NCA",
  "key12": "5DqxW34YK4RNs3Z7aNMsK7FxQJJJj5DwqwErykJuw3boGqLhGcLNfTGwobYY6qQghFEmqwPP5pgzeVSGWKGnnc57",
  "key13": "2ZjJmXSZwMotJe8RWDuQHTpniKhUsKpJs5FUYnfdTA9bVtayibmKUobiy4duEq7nnJyXjLRfcMyRibFpHmPHzxCH",
  "key14": "4rvJCtv7cXcec5GxNjcM5eQwVBJ1gjDCVxps3izEGmWGkBK7LTETadudF8n8KawKWhgFneiDypzkAa2qVYdYLMSV",
  "key15": "K4eB6VKpWnuRMeSnXLcBaqzXQXZh58x4VsiinCtPqdGvCise48oGE2zHBBTebjwDmpmoS6zxDdu8rnF7adi1sks",
  "key16": "2oPbCR4v4PgxW9LUHcAS6rfLG4Dcfdm2y42r3AxXyoja8dTA2hqZ9omGk9yfPvJq7DHY66jbetitKa5b9C2j4f2S",
  "key17": "C3YdMLZGBqE9kh426A4hcLaYAWFLVmd3axUHPCwJYcYGMy2JETarqNM5kQF1NQ6jdyiHFrQXo1AY975N7vi5V9r",
  "key18": "4vqMYTzsJbnjr4ZBXnJEuUBNrdLLSNt4LQ6un1RnipG6QYtJdsVX4bQokU19mihx1jgUowEFEmyuxBLP4nixiPAp",
  "key19": "2ZcrHvLKcx7bt2UXcgQW3PzyK923kbFbHaw4AnKEmH7Upn3YRtud2QW6ZzPTsFjEYsTCTo8zcMKW1fUUNn5UUSHY",
  "key20": "r7S14UYwQwP8ed51KshW7aDztvx9aJZTqnsnaQHacRcfvsHoEVGCCNvnB6m8UodP8uDaMK32jDZjk8UczeLCxo9",
  "key21": "MuFeAE3NTBXLs97vdqqawQck6wkdzVtB9WDQN5PxP9TQNiijgNN2wyn8KRFjQxpW4scGpKGJaDPWf2JEfGLpyCx",
  "key22": "4v8LqoW1rWw38Fz2kpeGEvcHvg8yH8vzbkbVfQ13TGxURSij8QbTM8ritgvMVsmkfqfDf2kiaFwVFUKTpRpX2jjC",
  "key23": "3znjiqP728NSmsgHoJ4Z3XfNkFt88tMErcWhRiM6oodDEoMfNqbvDfiN6oRh6rATV7XDud9w9hVvQqZnA1oiwwgU",
  "key24": "GtYKZ5Q47UChjuuo2qCouCUKKSygPQrcCv99oRn6bXZiaAK68DXHcVKxAAWhGnrhHv45Q7RKL1TRMB9VeBX71gn",
  "key25": "3U9JLnKS53QGbmN7jriVt4b1kApZXBFykkk4nBmz7JazwiNniobSqULY8fJkL712yEVWt4JPd1jHY3MJkAoYTY4o",
  "key26": "5v6bLjNsdrXghHHH8jCtxA2MpfMan87aAgEFUQVP5dKs718qpXpP8n5HEhoRbv4Px3tYy2YNEykt9nwJQaw5mZLW",
  "key27": "3kDhwSYbXHGdKsVpD1iAQ4kjE343kGngDJAFek37y7utNQvajh2AqRCUQx642eqSc4uvS2ji3CZ5wKQmwJ1KauLq",
  "key28": "2tdu6kBVaWim1arwD3oBKffpTA6dPbfQrvqzBbSd7e1cZpEmgds756CphSmZXN9yJ9US8qysp6rx8y1ETC67xxCZ",
  "key29": "34FPh6fgt2XXE8Zv11snAKfCzUdkXeVHFV1mvnFgwqN5JfUGGyuv7rA6moo2X8Taxypp2wwKQuUEthkiCMSMkQf1",
  "key30": "LvmqFMTZ9C9QdWyscNAkymXiDGhBA9Kxuhu34Wiud26PxvbsftVQkod5TXFPjm2Xex86dhnBBDhAdjMfeMSdDnd",
  "key31": "2CcQXyj1KHPi85LP8sedHForjLRcahu8uUHDBLfKFK5edPGFLH5DwHJVFs7rPVP3Muqutxdpjss8keZXkqY9vRAv",
  "key32": "tPLmjiFWBuvGDrebopLL3nnnB5EVmPG6cqwntBq4ca2aYt39kth7k5qLjz6GQxEDeayGM7APziAe78mSt96L7AL",
  "key33": "4K8bFmFeV4XYb6jpWcijoGSmViW4KMF22a452T8CythDdRBdsd3HHnpHCnweFq7jxiTcDvQ4fDfhGpdotXojgQXU",
  "key34": "5Pzf1KgBy8WB8oZej6oeryM9VxsvdYTTYkkpajTN8gvJwCdGuBmK2STjsz9KeJS5jJuwQBKJf72mbRXKboMoeDEf",
  "key35": "5xMuhiM83mwm6eWtm85sfKDFBJjhYgY7QwNmgQYtjecsVNpcYjt4WpC1Dd741zqrPdPZJK1fHQbZLUzdQkYDXTc7",
  "key36": "2qiAnecR3oxpokFy1XoN24HW1PBNgDfMA53g6rPkTD8E4tLiHKT7KRgNNM1TVP9UaXEW5qH3esuo2DzKpnyEF7vv",
  "key37": "gPH6gqYqw6pBDXp5HYZXXcYQgGyiqcTMhVFQNjRYxSpkEw219hdjXXkiqNiTG821NK5eXkjPw2DvoGsX5HMdvrg",
  "key38": "3zUV1qqU32gHMz1smg3n4nwutfXPYxuYACENnxVNnJZwLGGhBG3zzfVg8rSVbYhw2PkSdKMcidwBdvoFR23zWvu8",
  "key39": "5GL6UTJLic11DCBib8e8pLs2avH4mcPG2GiShZqV9ZH3Nh1Df6BGj1dkJccqCu3Mnc9QWwqWbDrW5MottQ376yFE"
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
