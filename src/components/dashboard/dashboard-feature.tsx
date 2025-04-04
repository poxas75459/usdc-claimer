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
    "2RmpLuxZ3wXrbYesnFJxrJVgsDuYZ2qur4N13AgTsjznUKi3ThyhxgmewHGwLWzAYhgojGiHp5ugycGXuNQeZxfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w69nQhgpCCSQviKm9XRgbD6zqkFW8QouULmQbdgfVjJu8vYFNNvFhLqoidHfcXhPxYNQMPeLFJoMw43tUHSXAtA",
  "key1": "4x6fPJxpU6kr2T9FsubkhLeDNpfFBFRRuDgSMrc6ZpwXxDNb2WuQFS7B5MvvLyrUKuNEwrua6pA16CkFfDZFoopV",
  "key2": "21TqrskaYsiXA6Ddc8HLZQXLCotmWAMtWL7pv9akxmjWQXAKesv2yQYnq3xonj398Jt5Kd9r44ZH1916PGdKVesg",
  "key3": "3hbrqKgzcRUcTushg5DB7xYti8yUcunMiPWs1d6waAMqiUrWycTGZph2m8fEAiTnbhvAaL3u1VE7HPUTdxNchanM",
  "key4": "65NukTxLAQFHPn7xb76G752Krk2SyvpHEkN8tpUSjE6zTg85weE6tYw8sJh4NeSoPPnb4u5ynKkHvYin6gjFvk5j",
  "key5": "5EN6z7c1fF6esWHdeZSWwCvTEx6YoP4CYirbaVkM5Pk6UuBXAE1WfqkeGKMve9cL7W9Rbj2dFV1TEfCguBj9QWpi",
  "key6": "4gC6T7pWv9K1jm5oPQTuAYM6vFkYmHVP5eWLHXhxCfPiQDSRcLJcG5jVAj81KCqfXeyQUtW8dNweLsnC8X1STbk",
  "key7": "aud23dHy7Nr9U2H9keVPs8fW5y2osnAfz3jwaugDtjBwywb35YFrjaAYuhoMaur3uNHjYg2sjYv7R175xFAmkHg",
  "key8": "3XamxzPyeK2Q65W6G5Cb9C4Jbwqrm197NYsj989bGPqz5cqCrLYRajvCa9BqqAsCjMspAhGz1bqccQapCyfjPgSB",
  "key9": "3oS36bquvBqMHnKWFm38Pf2uyA5LUQ4Ysv6Q1SrCNF3w3rscsLJbpTVX77ty1RsuMT55JNcZQwNoAWYM5thHiU5o",
  "key10": "5PM6w2HPbZktvxga1QXuRWG9LLgMLBAxi5JEVGuFb8YorNg5Z5ZmujC7KQAJhjZKV6rS4br1ZTvnDuRG5Wn48fSj",
  "key11": "296nDwXm8msUW1BcpXy2Xs7hijxcsKVv9FiLvA4hpRZKaCtipGVzwKA2bBnjei4ASf22ZsoL3qpWpvjsrv7iNEE3",
  "key12": "2r48oFhQdA1xJw6jGAMj1rQzBkSmQbhwpYGAEmTjzkfN2u8WyPufgJT57FdfGieEpWnRttcZvkVpF4Mc8QFnw18U",
  "key13": "2DYijbxpaNP39u1Bkzn6Jge4GXtEXY5DMCSynw1RWPA6h1dRnFThyTBEqCRkNtn3bAuf2LFrBh8S4TmBwivhZ5Yd",
  "key14": "2jEtmktPiQqGBZZttcwVMNb7bYedyC1DPt7cDmkp9H5cx9JUEpeR8MXmNScLNkJJbvg1XDUcEB6LmFQdUnsyq1xW",
  "key15": "4V49cBKXgRS8s5AgqC57KAiuhDdUn2JBqj44E67vmQo8oAssaHSKCFWcKTs9E5prrwFDakHnzidEgtRLN2AKk5JN",
  "key16": "4HF1oEKjS2tvfTwW96wGuwxp3KCMyhrHDonyteHny9RKGnPyzW8c8hbgabwKEL2tT1yn4GhfSDPQuiSNJkZAU6k1",
  "key17": "4kbXDJW2GaLudkQ7KKcgVNe3TECwcZinKmN9E6R81ktoMfBDD6te8MUPN6MmetjfocdSNny2qvEjBFB73dkt1XsW",
  "key18": "5hXGBPnkYriuRQwJ8uRBW3Sewaxm8yrK96yraoWQ9ESwqgeSwBVc313tEBk1aMsBypM2MbuxbbXm88GzjM4XrJZP",
  "key19": "445sX5Mqc9zVmizV9xtt5vXz1K7WHiFBBnVfNwvJrrcPoiLQZtVBqF56DtNi58jQtanKrDHcaMb3bStTWW1hhMSm",
  "key20": "4p1DAZBf3mjULQSSJhU5iC3bnJYuUExvrec3SSwsxLsnQnDpUgcPH6s93tKVtDeHDEnx8Wz1D8r4Bc93T8Kw1msp",
  "key21": "662rzF7k4P1AAVrSLT1cmKaCLJFFoxpkAbpHYaPfK3aLgLjbpA8HQKa5Mrt31jm6gzhr1KmiZxRg8EmEfhbmRTxT",
  "key22": "4mREYXrRoeMxLd2GShpj2NmQ6aX4tEkbFYHSwRUkH5n9twXsqYoygwHg2TmM35aELY1kJAkaacwX3tTrsS1BERSS",
  "key23": "32B6kjCskDnUjPNfmCi3WBemuFqTYp1SMuyvGGPTZgHqxdqA9V3kkW8Q4pu66jNyA5SmarqrQ71bVzxs4sy5D8JS",
  "key24": "4fgLpnCvFfMerdnSaPTNfvPBrw9hzLcM93KzeyvAcfN1z5Su6atkbzLaF8SdWoGRr4PL4bcuHPpY6JQn4hDbuLrt",
  "key25": "5vCUSjB224yLfwZ5UoY6cYT9eg1LQ5hMH6XixjBtoDhmEwGMQ9a412p6nQsNczAK9AghTGKoB6s84Z8qPjmDT2SV",
  "key26": "5jHPvGJeUWbtiGwH57tHSgV1zNzVNwaJuoLSJd4d9jFL5evBwKvwNPE6Zc7Khn6CepX5hEP6TqKymS44mGG3zJw3",
  "key27": "2Qvcd5vaAqyT3cyVfian9zFwV2ojtVDx6fnJoKCH1V78Q2u4QePoLDrABsznTAaGqVTUYQstAbxnMUoF6o5PPgh",
  "key28": "5Q4sidnrUakjfxB7fGPdLMxHwzraFSggxJrAmVMyrc18J8ooMsoVBi8L4WDd8Hj7twdF6aaWwD2uay65xt2b41Yx",
  "key29": "2rQRvjiTUqHJNwR28aaYYdH2xfQFPfUH6rgn5N3UxfAKqafJb4mrikC1HRdpn1KyjeDUxjzJi3KeeiPkZPPUcsJM",
  "key30": "5m4uoyB4sGpXy8cGeDyzsuERhz9fd6v6KN1NFRLJ69yTK39w21tCEPUQabdvw44zK5iSnXv9Ht3i8cbLJnm2iTbR",
  "key31": "39pDYk6sHVNEcs7ZSsoLUpu4grqQL2rwkehoCa8qnL6KCp2A18Cn5KTLtABLWatrqpBLKjZD5BL1iyDAkBoP5YSj",
  "key32": "5m5KF9QBhuqwjuXHXpBd4LSEZ3e6x76dsEsuPiBVWaFZ81fCcEeMX2VHkh5iFLMTVgxW6kdz2s9VzkAXk41b13wd",
  "key33": "5eCLb28tCcfBXKVRMq3HucqY9S5QdcWeSAYTPyUZd5KQDa98NesUHMFqAo8Mo9tPiV9xXdx7zK2i2TtSiqaQaoXD",
  "key34": "xaM6hSyZvdH1XxmLEdjKkWexunk9KgHg3Nj68nLdoNpRrawqTV7TEE3xM7uKDNt3gLEGgLxjEUF8EG8WDQocnsH",
  "key35": "Ls2cHN779KNowPiqv2qLvLpfb7XQbP2bdcXN8N1et3fWfU7jHgNNMD18yn8cstZGgVo8CLTA6znsFUaN9yFimHT"
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
