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
    "61zhnXMvXySBNf3DGgKNQQCnYGs44WxHYVwPoGepSDgYsLkJuDssMoi3rMCgybHdT8DLE38TFU7S68byNz5jgYTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDqmLFRqQH2BgdKTwqmQtXYg3UrFW3tpGHpiVF688C6kZQc86AoewusdugcTmhd7oEFeszhJ5wrZMUvnWwJwDMb",
  "key1": "KU9YxidAdAgAseuwGfELfvhz9cGu8B1PztayvJn6TPTyLjDw1wWMrDktLu1KQSr5QpDfKvBSVcQLsAwYpmn1spY",
  "key2": "21WnLZX9UvLTZ2jmTeuYV83y1Zz92AxiDb5FYZUDKXAuuE7asMoWu7TVpNLZUiW9zVbaHWm5CyGrAYWGezuz8JLp",
  "key3": "2hebfpjBnaExcX6oro5RxU2vb7X5Xm8kecHczvyGuypS57Nj1PfMEJbmBqPMw27Hff9Ekiw9AkyYaTY735cFTuMv",
  "key4": "5gKtSqYUkKn8geyjrcN3MnXWRcLGNmHpSMgeKDDwXtXcd4HYfdzRcQKu4jjpompN9zf3xcwypD5gG1wU8UEVsjqc",
  "key5": "3dnTWf5EK25keHWwfKhP8sLLUsM5jc6YF4nqrrkUHCaCXmpP2q8i1PesZEZBDu84TuRWp47nCoGQbMFhqGmDB83V",
  "key6": "2REBQpjfrMAem46gfwd6K4ZQLaU46mXVwCna6DUY6F7LFG3cU47Wt9izqT9MN6aGCDiBUF2CXWFckGUbHRTPVWsH",
  "key7": "UdjMArkai2aPay48KEGR5nfzjMcLLNcB95ga2CURTRq5QPWRrH4Abcibo9NEWKDAuJ5m1H8jmTk1QcvXf7k7nP6",
  "key8": "65nasAERt9gDFgKp1LB3VpDgf82KKFayg5LnEUnraFFcuTQAqFVYPS7f3bJUygGHWhrFfsi9HPC1KiCM7cRPv9u3",
  "key9": "4Wk42JayMMMNZdYJKNT4jGzEgwYecqKAmcWLxCffzmjctGLeWoTkxpTVdoYWaXPTprcaqcgVayUqTFWPYG59nxya",
  "key10": "62wjHqLBoi4wHcm8zq3DLKxFtpboMtVxocFgjU5Ao7c4JQYZw7FMH5noXCuzEHpD6oV1dNF2VUzLWQ6yqEDoDwUw",
  "key11": "3cbFVnZqXkXkD9a6reh7exdQX9HyWJzbJsPPNMRDRC6Umbp7TxEng89Gp1xMgNXUD9RNxvXvvykmGj2izGHxYUY",
  "key12": "46YLaC2rZBcmk6RrazKketAcSkWuuKbVW3U3hTr3AW4r1NvkpqaDMmcHqYwWKRrTzMSKBvB4pdi9TYKeqcBE4sFV",
  "key13": "4EQrwd34tkQVQdDLkN6Bkezb8Pq85bxdTJDJxZVL3SNxF6Cqcu7JxV24E8pk68Q6LMUcjnUKb5PeXrEkVjCoasU1",
  "key14": "2GRi33jJ8yb1x7xLmL7fk61iM27pLRWii85jZSg8pGi4W6jV9SHNjy2aCddfG2zXh3yuGvz7pnouwyrVr25ZGNqL",
  "key15": "4S7VxQPwCEfFnwUXcwbMLoGfvhwZC2DmxM2AvAcXT6gVb7Etaqr2w1dnQCP8MUxCKuU9oQgFBLwAJEcD2NHcwM3m",
  "key16": "5YTgk72rktmwEhGR7aHtP21fheVNhk9eGhsu3UzKjXUwdzY6gmeeqUh7V3Lu7QGYQ5cyZ6QCcTj13yLGVnjVUQ5y",
  "key17": "3Tvv2xgHzqhKAEUPWcaQeKFfv9g879oS6zzdXj6Y7XbLXd8vtqEgTpW6do8HmWf33QamEmrEn9P5SxT3UgsDgYBj",
  "key18": "5jaZ6NZ7zhYT7MD5DntuEuZowuC5BoHvUXquBZpS1FDiqLE7cxCeQZSi828L5UjuipdboaUGvVc3A7uWM9KpmYcQ",
  "key19": "2WwbLoLjGTGx7JZjP3HumyHQgWYrpn3NCKKj2R1A9FBasUZjRcfTBYCkyb5r5vf9Z43YaXVJz4qyAUnNHSeieSZ2",
  "key20": "4deNr485CBYdHJPHaSYRSPC64GhGUhTmEanW6Ewg9XKzFHUNyJ92vr1K7ztj37uo2idJSZZmUpSXeMHEqG8B66mr",
  "key21": "4w4UrTQWPdHEWsmVeZFKvjtV9ALmrtf4kKe2knvQq4yE49CgN9MSAJaefp3VJhF6zeU88kBFRQb7vBgMR1LBn3Mn",
  "key22": "64vd9mi9LFo62m7Cd8syqrtjYeXmSznaYXLQP3BMLPMyyk2xZ5YJGbgwUW6fp2HG9VQDLKuyf1ezssKU55NR2RQV",
  "key23": "2Z3eK48RL798FWxNEqRXSfjrhFdPpLNhJNNB75ZyWvFUrCZjKGLxGtZiVXvynsDok22FaRraW5iuWyjWzBq7Gynz",
  "key24": "23tyJEXKxBBQUHUvxYEcabnWiCSauXHoNbHq52ZYoUaqi3KJ9YMHqejQYdeGxnaLs7AjBax3eoxBkWU4eGB9kM7w",
  "key25": "23449D58cvh5QeeW3DfwF4WF5mrHPneefQxr1wi2UXVT5cWDfosbqpJ6STPENunCHHUSb6RhkyxCzaaEzYkJJ1uB",
  "key26": "4H69rdqm35wU2dEKDagZmNR69RJmLiA8LHkRXxuFP5EcQGuTnqei3cxdPw839FCQoiYQFHb2g6faMmUwvyHxUpcn",
  "key27": "4qcakcnFZyZQAXENg1hR13ByA2VycdRLNRUP7PbDbNpUQWHhNjGAFiRv3bvMP4vdNwDcaM5TjXzf5KUyf6mutSHF",
  "key28": "2vRtpnzZoZwnjbtbVHK2nbA5tZthhL6AdBcwFNcocBQTWtbTrjLHKm5YvQyGAUq1H8sc8BFN5YNREqUkxZrqfoDG",
  "key29": "4QVrzSNqQ7ZLy42uDq3byuSFgKGcXhtyczNMLvXF75WHMiqq5UqNN1YoRzSERc4ErMttsV42sspA1AEZDjrNsLTq",
  "key30": "4ZPL19wpaGyaTZVLhKf4yoRQZzJr1E4CgAWEwMdunp3cq3pfQbCmcpsuxr1WYyDdtfegsc5Gx1KJStf8eDW4ksg1",
  "key31": "aPnetAiNXmkaJLx2W1FMxgt1AWLHxcgcTuVyFeZG8vY3XJmGCEbTg3WMbUdkMLJTRs1EFfdUjaPcVZDJkdgnrDg",
  "key32": "2QdGxvWZ286wn6YfRvsAp6pF5jGNipBKoyMGEM2cEn8ADGaJDeLryMhHPFtda59SpMQh2YvjSorAqF322CckGrzQ",
  "key33": "5ShvLqQBjbSDbn8WdWZygGXrx7CPg7pDqHwmqZQaqLCUxkWJBBLbmHHCMmpqxoYSjUMY18mBpyYV97Kg7nhjysQT",
  "key34": "3ww6BPYeDL6vB4pw1C3fGS63i98GHoRCmmqSkrNKdKrfHdZQoJNBbi5ZcTG1dQQqGjrfs3G7Rwzz3xegqVu6j1aw",
  "key35": "2ptJBLipe1aj7EQEqvtXk7VSNJxUzCdnWVqhK2WyDpk661uBHu2c9RuJ56wCAruTmyxRX93oDbJp7EPrRq1HvLKY",
  "key36": "4VBwuVwGkQRjrZ3EK815epo1xzaRc1AywDZxr5hgh7J1yESmXgSoq9UE6xFaoM85mopNP5C4E2BcGPeAS99bFj2B",
  "key37": "2wpE7AygFhJKbqbvbrm83DwUPUkfRiZhJ6VroB5RM7UtTWB7R4Q928XuJer9j38jnZ5EVMsdBCxY1fTeWC3Q27rJ",
  "key38": "4xQDj5Pc75oBHpLqNB595wbALragN6t4AzX6jTht5TkK4DLL23vMXFCgZ5Cbcb1h4nAyzaNdoCYekKGcGSLnrhLa",
  "key39": "tTDowvKhYHHW5rDcTuWmFqcenpbfen1VvwHnRPX58NntKAe8tK1waCrGw3PNEHtNvBUjpWmBXaZyJuY39i7joBC",
  "key40": "2MWJuDtgHp5nT2mLGYNfV3E3zFovUvwdhqg8E8UAEHDLcQMg2xFiTrHe8184N6aJyhi4Y2Wo9sNvRUa1t2wSAKih",
  "key41": "3QWcs6N9cUpf6Bry9W1wRADGoBLHZDfdiVdKogqh8QqEe8WKLDCSe9c1qSNK4fU14roXnmnvurVoycbN9AyGHKgt",
  "key42": "3R6vJRNkxEMcMSRaCM7gKuBRek99qaLfLqoV7upZUYJseiwrupSRe6q7L7m6uX1HhTiRgFT4KcVvPJLyszHVtfnY",
  "key43": "3DWxtXK9h3UujKhziGi42Qc2YpVgNkuxgarak5LuKMwMHGpMJAy1NMDQPKM3wx9WgKhjQ1BYLT9uysJMFUCxXiWq",
  "key44": "4CNtgB8ySSqoNxCZVGMNXRncHWivD7GTYVPUiJPZ5FS4gP3MCF52rpupQV33VFidzCjLHH2kvKe8R9seZEi9ttB9",
  "key45": "2z3d9YXxxbGzKchSytcazFrqy8YHh5XpUQcB5QSwi7fR88ctBgXtFUDogBuJBmceUMgAqJLyj49SLFgokeSsqDJn",
  "key46": "4sFsmv3LpsXkqzxRBKBmQ7YMadBLrfbzowtv93CgJXihpG8viC7zPmqovLeYv1dgMUY8a4AVAWRjCUT8sjKqzL9f",
  "key47": "3tuWJu3Njdm7y2LwFnmk1wjbAGc4TwZkfbXvDKchwjAP1ZSUgQepDUjWPLh5Xp8HdK22DSSQUjBXMYoArB1UUZLH",
  "key48": "EPResGZZB9jfG9hr2r1nsNnCbuAZvSrdJv4Sgdd2ZZcCAAizwoZF7rwmccqsY6Q8bUGgseUCcCsQq8XPL6LoVsa"
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
