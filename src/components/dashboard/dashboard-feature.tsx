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
    "3aNBVUtDExHRP7fKCD7VH5wP4TcQgwxiFM7kND6YdMEwHkRLKp1CR1PymFxnaFgCazzZCqMcXvm1ShTDcMn9Zra7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JY4gaKPYYwvbGbSEA8MZGvkA1VCJQTee5rf6cuPNykXeSPmkSUGiAEojMmkETSaZZvEwTijAddmGV44ynftsyu",
  "key1": "5kmbknUPMyfSrQvtfY4swkfLHpa737nxE3Lwi29StTXHhs4AR7cU9Y2dpB9kHC58soqB5kHfeda9qMUWFRGUYQGv",
  "key2": "3wQAU2DcDRVh1jwQ5maA64XssCnztwDRZ47FphLAH8ByHCyvAN3Lh3d91ivbygLomUH6PuwD46WJm7vUW4XQCAYe",
  "key3": "45XNdAkby35PBqVktpriSXGirpvYjwv854R11ENMdm38sVTP8gSmBva2p5RA3KQze7nNJuYXW6kE6kXh22Q2Hpri",
  "key4": "3nY7FTw5hCxESUYPSPKLdqhAtNz9DJzRABaYXtuHchvueCmrXzrRx3SgZ77SmMQxke7uWszvX89UnpkFFkvBhc3b",
  "key5": "YV41xPXMVMHUWmyVEmVSQZ3EhnDa4ekAYkHYPZ6SvtJkUazxC74wZRsAaGWkRYMKasFq15gkbYKJ4oJ7fw8q49G",
  "key6": "2CKuwTMEFhfUT2MbWjnUHqmZScf2w9wvF9An5PrJZuiXZWBwhGxGUWpHLgia88m6pTQEut68rkUv2n3PLWw5rLvo",
  "key7": "2LHuCoAWBdqsTWrJqeVX3UCzSDGSxSsie4R6abj3ad69pokeERt719ZcSdcYfETsg52YkdGcCbHHHyZssgP9CRUB",
  "key8": "2NuWFM2oWTRUighYcKJxDtupqcHCkVcoT2buAJMGnCLYXqx6s54QVKNLPcay3zu1XKePH7ymXShTbwyVqpxS9pko",
  "key9": "3uwww4ea8j72hxmj83TrkJ4tnbcjigpWD5WCfhqpi92jbq5EnbtSENbpB9LpGscsVP9QqAMRPhEtcZKr5dShoRg6",
  "key10": "3KNSCdjfuRQfd6ADo22eociNJdWsReifZZootdkTH2MqorVao7DSrwYXxm7Wi7eWpGiQzdePYZg22hpHETzorS4X",
  "key11": "2X8LG7b8xBgQwFVq18krXUYADHuACbVVxYFGnucfRKJDfnUcWRitsQfEtxinJByvGhxiwmACfQA6R4xZQ8TGKzpJ",
  "key12": "2h1ucGymsbeymduCADU43vK1AuHj35sU2K8ZiTYbc7FnjkeQwXQE7p8yZXJcLwEHXiQ8crgeisCaF485zX1XdzHq",
  "key13": "4iF4Vui3qUmHuHCUZMzvXY9cpZXm7MDsaLbLiFTHRD5Fb8hBhBLo5Q4tiKtLWXF7rSdsqKbYcwioVVnsHhdJ38iT",
  "key14": "UpCP55M4nHnG7x3UyUUkZ7RrUHETSubBtcKLzdtpPsesD9g5fF7qjXcoNNSktQ4bWcKV63vfeAZYPQg3zz3hNAS",
  "key15": "a1jyvXAAwxGdz5qVX1iR7bkLBKU8P5GYDGxw3epRKDhp4ewMDXxCCoz69CzXotBMw7zzW7DGrUYRmzonnRWpaD3",
  "key16": "2j5DfRxzTPHpyVDmQKDyGvczRDLAYjTb6Heoo6fTfXLPeZKP54EQRZ1WeLbPr5x4tMJGkEQHcTuA32yVBAzH4k1U",
  "key17": "44AGMhALHR1upuNCWorRsE7RuKE5w3uVdC9yGQewNxsgju7fqQ3TGdT179kcdPYeHjGRNvn4g4WzcSvprNQZCyfs",
  "key18": "3mW3dfUrzAqQruKSMhnX2MA1rBZ87A6eQYE5AkmrrojYduM6UMdeaTLcmRyu7qi61hum4HrxVc9CdEUTGddVhRLw",
  "key19": "2ko1ouyESJJwpF8ymRctU6h8DYdQNEVTbS4PJTCWJg4uacS32k1Vsm9yGPRqagvn8nvp9qAv4VGX3PPrY4VF6PaQ",
  "key20": "cSqAYEzXX9Bt3EAMeFxj95NfRfpVVTkgCXrmUcSrAFp6bhSu35K1iwxuwoUthL3xiPXqrNECieTMmzG5XDY6fhA",
  "key21": "2Q5iuCwZ6af8x5ra2CNCzj8Q2yGCpxuDFjCFnM1jatPQQwZMLRRZxXDM97tbyoccqh2qjYa1mDkNqJ52p39dGRHa",
  "key22": "39G5h7ALFv5ZyJr1wr9SEBgRFhsVAVK78p5xa3y7CwMhU4sjS7mAZYHqPNhtb3aGdW2Uv5dcDroYFySjy4YW96D1",
  "key23": "4mEcYm3uBKnP2nexvHLQf4DjteLaRG6aT9nVWLbKzJYmgNeqGJ3Knizwe3gcoYcURdPaMqQd1NfMsZ9dHJNLy3gJ",
  "key24": "3htJHRQAuXnaitUhAT7as9uiDQwhUiBEPiMHEKoZ2vwmPbHAEPEz8PTfoNHik5XZeLEfM2T8Rw5X755ztLBoLJQt",
  "key25": "5X8dXzgchm45EyTGiXiVNK44DwwXze5fnej1y6Q4wK54tQzkVDM8AxZGqYQa9mHNYNCN2GQnq3MFZkJmvXTyaaHr",
  "key26": "6PfaHbaGDner7f6kRqGLye7NTCLgiaBQRBXRetQSFHgWv9W48MxsG8y34EUtXom1LL27EATAzM1RL4sREMkQzJR",
  "key27": "3ihFcH39a2tzWEBSTKbB2fzd3DC31ufZkYA56TEt8FGe5rjW8LkzoCX1r5Y1RGWQmePdquM7Mb31LanFcL22dfTf",
  "key28": "38xtt6yVDYStFj8rNpZHFDdBD85x2wc2E7stwJkpEjNwExXppvyTaHjsGM7Ncy7Pt6juHoyu9qYsxn7sasaWfvHX",
  "key29": "2e1KNbUu7Fszt5GraGMsvBvo8KEKZuUoc9dSHeVZd2J1N8ZnFETvssnpG4AY81PdwH8NZtnpsRnz2hani8D9MkPS",
  "key30": "ENaaw34JMWZutByspza2RBdDQyRnrDiuoRAmPEt3VD55m3GFiRPejeS6wNprZNkafSE8KTMZhtvXxyEhdbawU7i"
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
