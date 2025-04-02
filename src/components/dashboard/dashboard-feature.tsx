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
    "2gJSh58wKHUmR48jqZVXM17Q7r5SvAngtcKpx3qewJ9SiMQkQtFA6cPdBFZYaDiNUuqYTKCtwZc9VJjHKGVufTdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rYQWuE5W76dJ954mjZRdemPKpdeUwrp3BWyx2cH35Lgdc4xUd55S8j1wsYbZDEA6TdDuvabqYh8a9kgS7Qicvm7",
  "key1": "36BFQusocSBnu1Qh69KLkPjS7s19JmoDwYSdNoEQAzRVKMfmvVmu8pSpmcwwvLAmorzPREwi4CzaEQX4yudon7ax",
  "key2": "45QrRKLHhyneJVYsefBVgkqpeyJpgxeN2BD2Cjg9P1hhsXYMUqVhxpsfXVvTqpPviTviBe72jDwtcT7b6vkhiKJv",
  "key3": "5mbaeaoVYEETFu23qsov7AX3Db8v6oRLVZk5BAAsRvRsneE18EbCv5DkNbPM5QH6BRLCXneBTDmEtT6hHZv1AWLN",
  "key4": "6734CvSBiHPqHdmruHqK111sUFVJUSBUm3ewAs4Jevn6GYFgtL654JkQovdceF9LtfoA3DZDJZ75RTyF1KvN3CMQ",
  "key5": "671StTkk3s4StVgANcb6KrfujmE8SRxM22Rda6XRVrNjK9qpjeXXc8K4AXDGzzbUG8eNCf2Ug7BQFFjJp9Jr6G2N",
  "key6": "5G8pLwoRr8g9mn1HbLbwiV1pzaxTmJJ2xP4g7ZZXHRMVNEqJemb5jUqicG3wGHh5TLtTCs3Nham3XyuxWax1ZDmr",
  "key7": "3ZkzcUiqrJfPNrKsJfqVRVz1eDrcK3cf7hh8hMAKWeKpd7r5GQYofeUQN3G2gqiXcxCX1gZP8edwxXzBp8e2UM6k",
  "key8": "8C1KoEYzm9PLd9pc7ukkAkwieSzUWge27mR1FJGmLgpvWC5uFWa3Nz2GdQitc657eL6pVraVmV9fVoT37YoB15Y",
  "key9": "3RvmwEzs7vtGpicuKAzx24aS27Kb7BsBymmHrQariCsmRktUjuW4mjQ5iFvU5XG5atqK5gpW3MmVrRUtxgNnMF9b",
  "key10": "5aZUTNsH2vUV2r5kL8BorMJMb9Z96waca7i2ZuK5Kp5qStd7WkWPFGPgDfUtSi6YMXrkn32kHuLgCak3pi3Z1PzB",
  "key11": "WgWbAPpYXEh7EN2G1bsuEr3Y1Q3i9Q7gPh9tWnjMotRvZ6YEg79Zntq8DNzAcPfHz5AkBpeRtExMK17V8qxseRk",
  "key12": "4UgAJeVgwuFWNiDe2WhMWWR2Z111zRckDM9GbWfsaXYA9wfnJgkcHAfshdj1kAAg1oE8oUgjS74Yk6NH6XP7j4qc",
  "key13": "2zrfR7khEhPRynfxu2SnujYxm3GzcW9hqLMHj7j73ZSxrFY5atybLGV1ZvHoXB5RAGWFKgnnsj1wgAdLsxYd3FHH",
  "key14": "5S6AjsPq6eWtQ7QwSeAwxdbVXAR84g2WvmbfESMWQyjdwvqti6Z5Nx8KaWtarGdtmXhsTo5MoFSEbsPQ7cpU5376",
  "key15": "4VnxMzy7TYPEwYW7NMX5RC4SFBC9MSvREcv2E1qTMdzFPDX8TRi95TjRVWCwPGZMfiM3JYVwDZVneo7WssQ5QzKx",
  "key16": "5B38LTf7nBgmFZ5tMLBdJP4Bhdmye1ei1weU39221obaUFTYXJqpqPv24MPkHCAdsUbEe3D8NGVq8GdLsQMN53jg",
  "key17": "Q547qF9vFRDnjDZdfZifvBsACuuJagnp9KopCACSE3Qc7rjTJqKQHwYbeVBA3xaD8dY3zZDxfb3YtAALA98z5k1",
  "key18": "3iHV91mzGU6pYUJhJRSHEf8cnBRonigYWkvHuZQ2T6m99SJEgQLmPrLMxg7RMotkaW4NbvEDJJm3MrVKZqHrimaS",
  "key19": "3bmqKKhjxr16GdimSA79SmTyWsepb8iPX37fZLoAWfgRciiA4DodYqx9W7FrMPtVpEJUQLiTsTJkgLcEhZE13C43",
  "key20": "4DDENBpY63mVZHHqrEHRQ1aEgnLUTmcTnwJnPTK1eM8J3Vm1TidLuqAHc1foSseNRykSu9H27HTdVQ3QdT7UTgjA",
  "key21": "zQ3A6qtrpAqbcTsKQVNZhWKiBxj3JKqX8KnuZ9kj2eTN8tkQdxsaa2U5YH93mjy9HLFdBu3QjHk4Jgj7NqAi1kF",
  "key22": "3Koz6ysyDVja9hX6wgA7esMe8vM2LUFQa387gYaLpJCVrWHePeeeEJebkuWK8LCfTnhoX26kzHAuBuYuQg7x6bDx",
  "key23": "4gAkLSyXZpjrsX85e8j5HVi3GESbhzRiT2tFVbA5SbYZNyo5hfAkoz7E63ENPyFPLY5RmCW4vgP3NgmfTfg2CLez",
  "key24": "4a7Ku5AHHpQp3xK4mWyWU6S14Rf3PUQny5TerWSQm7QFzS6SY4Pcrpa5zdnv6YYZenz9cf7esH1wQbdW51ie5oeU",
  "key25": "29r1YFXtinPv1A8oHHoBQEvXc78zfDza2TLUpqEmRuXaD6jUD9FEu7Fo7rKiNtuab6PVdNsgSyHew97pcNRbzv5y",
  "key26": "4UchdocnBNnFPeUNcfquHwXVVqBVB1j5YsgiSJK1azojfMpMFDv2RJTv9ykdYLey9Jps3HAFw7Qsynw6g9PKGsvw",
  "key27": "3Zdy37DJnHvwwQdZeXDDDVuhAFyLcwUYMfbHJ2doWDRfieE5vtBWD9q2T3A1byt5JkwmCGmwJ7bD4z2Q2UjNCahB",
  "key28": "5WADHXtKLGzL7Dh1SQNsAAtJRPs3aCwdzJEVuzSWeUPm6Gajz2i4Kux3toaNGp75FkmcbF8Rh2yfscvRDeDpf7EX",
  "key29": "22iXRGxLABrY3W9DirHhrjb2bQkZEHgPYSkNxNvQhKJEy7PpqQys7FSizEtUUUkz8uCXNdvWCwT63xhGcbLc4miL",
  "key30": "5jd7zfZkmHWiBJbGvRNfAY5tg9q5SaXXxh6rkk7u5E4w1mgBZXE8hhtRqN8rSJHSntH7JSRrpj1CGX4UAeUtqrR1",
  "key31": "9t1vyvextQ7iG8zZuEkCPLpK77sF4rgvBt82UbPPMozsYFSZpoURKm2wWrMn9gPwmT5HQSrE4SE3wmeiY931JzX",
  "key32": "JUUC4gKiH5MAEQCepDuSgSFYczsnHyEPhBTfBhBS8j6xxkLx8EZeUWBkVKCJAU895ZFDxhNCc7ZDT17XSrgHmkB",
  "key33": "2ky56bfYE3CrHNtfT2iNFHtC23STceQpfS7jUrLHBT5f3sGepQryhj7akSrVek8ZEnbWV68H94yzsTujYmmDUWpd",
  "key34": "3ivBV6NyNEbUXrMQkwXxGicnDGjzQyDzdCDYH4sH5NDZCGzA74Ni1o8CtS8Jgqh4dbU3Ud66LPQMEbJXmPzzvw2s",
  "key35": "1S1ZTR1GiY5vWzCku47uSDTsrjAhnSt36o9cjCVNVxcNhcPdcqFHpZtwySTqYRrR3DKbE3jrN1WPswkY4w3XY9k",
  "key36": "2ocTu5XKuPq4Ysn17MCu3JmzUM3umygNH4SCLpeFwN3ZKvDYbS6tbn79xweJeAPrUtc17RZp9tqinHZQENA1sshX",
  "key37": "56v2E3iMHS4RXqezUEMpZMuuy1vTUnPy9eXaCHQ3yBWUEYBP2262m3Hk5Bnc8EKbUacuZRp67PqcGskZHjXWQhAk",
  "key38": "42YM1bauG5fGTVBRe4QskFDC2LBcvPciYAXcRifg37rXsN7E35qUTqaosz3xj2fE2MwL5BcYUFoK8TzT7sQK8Xab",
  "key39": "23k8jv3uBK6zSKEZjeXKNyH5qezmgQi6UTSCACE3L5PwCFoa5QEx8tBgxdb3HUvXz3WNdjj1RRKCsFgUGqMH1CtK",
  "key40": "66shFnKeWqMVa5GxsLfLigDztbkppc9WpFspr5iq5AgqDdoAAEosqAN1TV9vsRF62NNiecZdvks2XHyeaSSuaFcn",
  "key41": "5WZQpn9ovrHFNUzLwTeoSGHiJoMz2a1p4Ug2GJ7nFanN82vtqpVLswfRyHJrsMj3NSixKQWNkoVXMtEF1Kx3M5jg",
  "key42": "4VFMuki8TTf5hSU3rW6PvGkboLJkk5id4V7qBf514ojtv9RJo3E2MwcrXhnZKy7h89T9Vj5w9VCUH9tTijdPctBe",
  "key43": "2jWG3AsX2VQCfsibNHdcTsXaVs7VotLT1VD3YRXhuZmW1iSUupJ4oeWgxVd9LHtAHgbQFLYag4YtC4GTYw3oPpaZ",
  "key44": "21cEXCTb2dbpxKiqHyNEEtjcD3QoQ9XhpstoFzKJLfUs4mTGMYg9r1GA99qFqGLD2rhXaBg9hLi4z3UMcY5CYEEz",
  "key45": "3Z7sfzMXGJ1UrxBXarhoVLnEuPSa4KBL15asf82Y7WqQG2oyQuwFuAiv7HZbg4M7E7foYM4VpWGHvn5rjfaySuPe"
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
