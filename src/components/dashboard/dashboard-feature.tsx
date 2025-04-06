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
    "3NBPkt8k4sTkrKzZ2GT38d72DGxP5dKAZBLTfh6DnaAd6ibQRVbYafq6qmCy1aZpc9ZCxr9EDBP2njr7PvtHGcpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbNMhTFqMaMazRdLn5rTZTiKhUtpE3jUuQiSKNn3EsJxRgZmUJevJXJdKnu6JT4qAo78qdbhNk2kqeLMPPBj5K7",
  "key1": "CDHApi1LvZCEPnenHkiFc5KSsuv7eaRzyGaRXLr41Pqtyy3dKiSrmDnywv6Rs4WoqKqU9SDBJ3EPETr73jjSrbu",
  "key2": "3M9SBW8JoedAGePnY5yaF8dENbnxx3cUEhfGEChrUnp43BntU5Vm8zZfoKQE55HqntTFksFVdCXoxR1rRi4g7erc",
  "key3": "4LcdjGmLC8CkepqpBbzey971MLkiQWabx98BZbv1o7X6o9wPZVH9fMKC69C1hrMk4WxxJHsoSHaKhHAcyTPQKz4w",
  "key4": "2euZx6MY2LcjbfDx3DwCgsaMJSRiPaXy15Ny8PQy3ip8ut2btVVeTqKMVCWzS4agN7cZuRLZXDA3CY7kxRPjywtN",
  "key5": "4toX6zmKaKvuDxqXLVLnN7uAsZWndQhifVPCj6UktBN213VqzfCZcGX494aeLKQAR8AuMwWpUcYgiJCriSiGWUcd",
  "key6": "5dUzkZKPunKtVf6V8KdSRnBVo9XokwCSmJKrU45vCqYif6jXPReEYZCemqZgicH1HZYZZA5nDf2VK78zFX2h6CxW",
  "key7": "5d29gttBkvnDw6QwHKTNqz8BMBaKzz18ZtMW82miaG1WHwmcK7PCuM5Ek8aQuJhYokgZTkwg8egzodpkJLYpN2SV",
  "key8": "4oBY1qxtLXjxYwJtiG1ukgHJvy2U5Q8uQbBQZLkdwPVo7rT5Ho9eTxSniHuSfFgqb5c7QoUnfxrRvZxZZa6rTUTG",
  "key9": "66dqBPWjtYJ7cKYWQoBPV3n9Vo8jQyYS3M2b4hiqmhPzCSQoedXXfPad3WLeZMt2kru1gv8P7WTmk6fg4GzbdgWp",
  "key10": "52VDkVQMBThREC972Yk4NuDybMMt26S4v2FhkJQ8YKAs4pEDLJRAzvyRzgFoqF7FTbdafNmdf12tkHkmWFdH9oNG",
  "key11": "41aZRj9DkPtKxvBjwkLPGGfvf7EeTRqjCEeKbzQq3uSZzfx7JNWYzr6cx5WUcPwB5e4tLZH2y1T95rKC5VmTZUPk",
  "key12": "4ddhGa3JmT52swQPtNSK5PRmBzTVG2ZGVG1F95ArBKNW25XZmM8bzhPXE2zx9puGkUq8fZvh95WRvKRskue4e8Cb",
  "key13": "3WtacQBWMwqzrhZmmrjLw1RyR8d7D1ZzM9STQgUPsdKAYCqxwxRtg3GoKy6mumFzzTBJVcXaireJTWaoAoNq3r3K",
  "key14": "4iRNfZz7YHzFBTsWpn5U5iaKgch2t4kNHEK32Cbp8nnuURqPibzvnF18GWEHvuEHiPHxUqCX8rEwt39Zgr53TiCm",
  "key15": "ZfsAPZAFxcs11A9C9SCToB5YsqGTia65wPsTgpTFVXwwgYpreJ4hofcBJHHPSopNmgvpWV7VugGQ44Kd2RtuR9w",
  "key16": "3C7bnRj6towFiCbqGKsGNoTSivjFoSPPUvP2bW7h2bnKocusGszHvc6aX9zZ4n1bjCRdbuQZ7F9zpdwn5KdugcqG",
  "key17": "RmV8i5cK2qmLMy2rkJ3S6Um1Pex54sEHbsrGPXei9cg8zD6GDumVCFQS9SGFAa9ECpjmcx8SEUkdTwvj9BaxVSC",
  "key18": "47aAbVpr5DghJwBkw1mwd7xNU4QhMrrZiAcUq3Ne2EZZfrJqpxT5S2RLEy1xytwbU6iqCMG1gHEn2K1HiiFaFkXN",
  "key19": "4jL5CXUjKM4oV1r6tmDsGLXbu33ubfTf82HJCDyQdCq9Gcr15CbjtqUGx5CgokRc37tTRFdYa2fPii4cVSGLZyfk",
  "key20": "3LGYGRqexkpseJmNpBSgqbp1CtoK5o3bKEzE3oK1o3oM7Gvpv5fzB1R9prjnBdZ8vTBPhejeT8zLDXHbjWALEdkE",
  "key21": "2stZcQ1HTjEARz2MUWGa78iCiZBewAGb5iu5Ep6LVj9GuvfHxExFGhUf5hiBx3H2L7Z9gpVVBrDc8VEynBccqfjZ",
  "key22": "3ddmfnf9CwAtBk11EYBjGaDuc82VaoGBEorwD8VedscmehRGDUVruxzNr3bFfyG4SJncf4zq88crUNj9br5KTENi",
  "key23": "415zxomLSEzJ2f3kmBQHHK1jYhTjGQ6nGXpTWu2jo2TnaLgmPHpsN1Th4cDdUmi1GcWAXcutYhMfDK1UkuRyRVCE",
  "key24": "ocvyqY9pVRjM8XPwmxpGxwaJsogueT6ASJqqW9Y7qocS6niTGGdFNraXZJWxMeR6kHqBzR4ZVYje9XuSM56kgSq",
  "key25": "3Q6xLDF5JDEQABF9FjGZ7r4GiddQn9HJY8vyeRBzHN7dqEYLeQSkCT4UqavfPTk2G4RzWDyok4rmAtk29S1hCCh9",
  "key26": "3TcQZWbAyN2aXaVpH1ze3GYT7C6bLL71662wPXC8nE5MqkDUxuJpyTxfpNAaNNJN9tq5B3gd9GbwRG9QW6wHsAey",
  "key27": "5cgWZJHYfe5n2kqEQKDVed9VGnfxM5jp5GJcFwqPh1DzpNb6ANyH5kSz7eg7JgQEASXyugjB8yVPgx1CXQRfujXN",
  "key28": "3q4XbPug4ejFybMUKaNTfrCiLHdzmAu5gd5B1boqDPSdFvrrwix1Nk9N3XPQinacVtECjxnMAYHbC6BL9S5SLTTP",
  "key29": "7hpon2vUhE8nDktnnHSSbK5o3v6HxtMKjGbNXxNee87YqCguoojUvNVq14wkuhcUZANHTwxhNTL6wifrKFFFU6U",
  "key30": "36UP5bXuTRcJVkaj8uPcPiZKyiwbTrG2t6h1Hh2347ouvyeG3yAURt5y5w5eBmdCTfqWR1eCzZhTcGRjN4Fp4xUi",
  "key31": "3PbdQEKgiUnYA5r6bQQY8m6okrqiSWynHDTzNvM6pKQBkkaNPZpmBpjXTTvbMFEYgFdxeuuXNQxNgVocgqhJRTJW",
  "key32": "acUtGwkp9D2mBEU9mSimADeZ3XPkuppKGaZNCpPHjHLFDSktkLvYj95yp9dAS88HjbE6zmUHFRxP2x12yCFis8u",
  "key33": "2pzqPEBTG65zf4mePAqMZvqcxHwPw54tLx8LKQkytogYJRg2Gq6qjVZeJnSCSmJN1XiCvhWF9d91wdSxHdNAf17s",
  "key34": "2GucQ5Et1jhbXwfqpDFFU3E6mAx3CLUggT2kDHBRPMjBYNsqKBS3zK6buvJC7JVzu49rsR59TjfVbWRR11oL8arE",
  "key35": "2beotPQiD8vS6qB13y5Wk6ftGUGrwyPLsH1MtmU3nEYexrguzKFYLd38b6XSzp5CPABBbaTudD5TqD8BRVSDRRVE",
  "key36": "QVuWL4fqUZdTo4vwKuA1r5UnYKbUwRGQf2qsSQraJYyfG7eq2ZYDzCJTZ79RtonACJN1Fwj76bz7o6UV4yrHqmR"
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
