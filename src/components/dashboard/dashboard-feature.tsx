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
    "4Mi19a2r5jk2xMkkcK8cPN2NNQBWtkJsMdmcfQTksd4DTBDV7XT7GCoj2KwThiteA1kXpRtm4Wq76y2HcUv2pmbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azSBsDTnYXGQMcgXViWxK5nAZqty7cTYtoJWdEnEsJJMMSj8BxvEqrGD7yiftGZCQMqvpVDSFiKD6LUKgwTiZSF",
  "key1": "2kKdHK4kVKu3cNRgQQoRyHVaTMyGTagt9KE1Sgix39KfsBufARxS73rRHSrRAfdLYR23XWWsfXrhiuJWDJGufonk",
  "key2": "BzTD2bMwmY4Ws3WW9WSPchvbgeyRX6ae7qg555uwYPrT5NGArVhWpPmE3evzhwPmVMGJ4wxbbxjgj1AKc5ways2",
  "key3": "5PKettRN8HpuzDUH5cPGxmKEAPRtJwuGCfrv21arX24qbPq1A3kXp9yH2mihRdaFDHupdzYTtCrg8rfR5vA9WNpg",
  "key4": "4DxLmhEGvssPaHszwxSaTajtdQa8Dj4Mx56Mj3kWkF8GBnJkCev8e4ikUhFpUGrprHRQzkmXpxDFFiJdWH8BKDdq",
  "key5": "2Z3y69bbWS9pAU53Mkw3RWhT6WRjErbToxNEkRkwVng1HUKRGUTaeHJ2ppK5PJLt2DHHqdpNHtRdeyr9i3wtcYs9",
  "key6": "4Q4Hg9E58MsgznDEjX1gPP1EjG8mQWeSMsYemkX2pwzK554M6r5iTWU3pJmBKgH8dui7ADp9w97eZ5yGaBEW18uQ",
  "key7": "2mo18w47Ve8uwFDPxUW9g9U2kJZbP83iDEhJ3SM5C63gCJx7a6kJtkhrx3ASLvc9zPRtXbhw5V1RWoeHpDKu4V8m",
  "key8": "3Rt2MCSQ8bUHMUbmW4JR4EBq892mrjVQTsgYmBaBf6SjRuYWGxvqpP6sAF3vJ2ZRcXkjX47CnJ7TZNRoRSK2xEa7",
  "key9": "4W3PJSvQKjjHCefdb6EfgErpFSFTTRN1h4RQFWgjVttWWeGs2sr6WznjfJxVtvimHyg1gr97Ei5QE4pygkbsvGUM",
  "key10": "3GpzEgUnjdamM3SJxxQKdoQJZDUrQf4JR4ySJwJHiLerhCRdSHfKwZJMjWxVy2ug1Sit8qSJwRtguJPuithpFEsC",
  "key11": "3ngViFAvbpviQN2EmSgMNp4SS3AVo8AzM1uVnZrLFcMK2H7rBBVUnb46JHeCK7cigAUn3GFkg2n8soxMR1c3ADyR",
  "key12": "4d6tJtus2Y2a7o78gqHtNaziXDEJCFbyotirxsF8vN2YjT6scwYWpaFx4TTX4MRAHdbXzAFz14z8Yz6GoH4TzaY1",
  "key13": "2jJcUpjg16RnG2dpNVTkePnEKKchkiAv6BKumBwuQtR3uB8rwSdkA7y9kwugwseJZJCrxUVUFZYShKU3HDG74DKe",
  "key14": "5p6fKrdP3zaxzfjid2hY85DV4V6aZtm4F4dQTWxjsqjJvDnxSpeHzYAmC1abwyNUHzrqjdAR8LXoKgDPa28ZDkT8",
  "key15": "3H2KH8haGk84kiCFr24pdjA4r6zit2cvW4GDqCNCG3PEUtcFTc7Z64REup56xnB7XnDPyTPzp3KKWmovZ8H45t7G",
  "key16": "5mKBSzieR94gUV82qUKciiPotivfwZnM4kDkck8sW6UmCfMEaqAsTypJqiXdKsZEPqQrizudZcjV6jogi3zVbo9C",
  "key17": "XKTVqaVvv53nWA4TMHUWZmMJU6SnZYjvk4o2f6LAtcCDSRyZyKKeaXRK6EyHEPRC1ydZoB1KrCebLizJdoP6eT2",
  "key18": "JYxaHaGSd8w2X15823B86Q1p3fJX5BrLPuJdpptYFtrVWhmSfuGD861uA69vzE8tSGzTwqgc1mV9PPQbJgpn67N",
  "key19": "39g1qyyhN39WXTniRpKsrahMQqCqTnadTS4JUPDBNjuUR8NqCUB9WndpXpY3bumphQmNaof3dFwTKWTar1xG3C3f",
  "key20": "2oFDhvcQqTQxjw6v5G23UbH9RGgH4RH7k7AoNfa7xqjKPL7HiSyJKxao5LZ3yFY1PefxaV2uATiVP9cHaEL7Viyg",
  "key21": "51E7CZyQqitspTLXDJZrX95zKCU7ms4ZEdQibQi5Bhmsk2pHB5ci18ux9sBdBbsn3U2Sk1iHj5ywtaG1BJMzP1Tw",
  "key22": "4RRcr8e3QXHinr1KLWHyxS422NZRRHMwaLrU8KbprUWgJhHvwgfKPz1rGFqjSHVM9zpMabAcLSVXD8i91RQPYhs1",
  "key23": "9bNqEK7TKW3QxNwT3H5vshan3TLs4T3sVNMhYdGH2d8tabLb6Am4nbqEVBFYziJkfRZhUHBTvEbVuUzaca5nbXp",
  "key24": "4F8GFYqxXWqXn75yK1jkMhFC7NE9MpTAqYaQyVGcXu4JJ5XJd8VbehnXRVy3r8xK5Q9XtJQMGkTVXnSdGr9XUjNU",
  "key25": "5JezKaaXhbjxrLkWs6xMY4RSSQmE3DUSNPi3BJiK5AGK1uA43XMJwVTk4Pb6B8ZLgevPthZYxbLV5H6W86CtorRt",
  "key26": "S4Z5VgmZArvRKWXZA2vpimTqWdsBCbeEVEemfJ3k6qEWCpKqKaT4sXsfyzwpeMCVJNDq7gKC94HstC6F3LdL2zo",
  "key27": "xLqxd5AVb3tAqBC2bsdhezeAf1KEXQzMMXNVHic2vBLuNsmQZzxoVFNXRzc9dzQ8cXEay5cDvBuGyw6gyowTDrJ",
  "key28": "663kNjgY5WMsohcfJoRcRBdYfk3FbG5QaVaXEVqkRHkNQBWhNmycdrocSeekDFAzrGTrxTNN1cdS3DiQyXS1wpRu",
  "key29": "2TW62QoQNUaqEbr15FakzLYeySazEeTyNT1PBdcRon9arBT6eBbSW2CZVpQPWXhXnzftrDM1JzGBHhhdDiEZNTX1",
  "key30": "3Sf9LQTULWqy2hXumMyvnzggJkY4y2JFzcKcZvmrew6tZL3NWXS5zEnZaPqzUu91Ct7DTyK6E9xxJADpcLTXJHfr",
  "key31": "5a1z9wuwAPTYcS3GHJvBeTwznbBHAqANpL3ntSDu2gLSboRARfyJJq5TYmBdYgzSa18R96SUx4ShbCZ8MEp4V79C",
  "key32": "3324fLyaTrDYogUBYwgzGg9RHBazKN1kFsXNkZWVMBRPdMcYv7naVDKqQop8VSBjzh9eC75QyvfFWzKnvd3mo64B"
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
