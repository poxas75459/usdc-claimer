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
    "5sxCo7xYWMez3orA6m5wJdQgbTomRAJXQAZwBgj5emjvDVbR4yrwXMzC1YCYBc2vCubhLX4NMhQxYjEHozPDNaDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmsxT9TAmn2bnycojEurCAyzB3QKK1Ykjo68r2Tyo5yLWJWpvsMy4cuYtazb4kMnAS5VpfLdgrqX4iLtrzLHsum",
  "key1": "42BcdDFj55bhE3uetB2P9pN1M71oHy3G8wtyxvLEMCE3qXVCY26Mde8yCZTEE9doQJERJsECJVB3HoV1U7rvr5V7",
  "key2": "2PGTDJTsqUAwKdjE9s8XuFRP3RqD5MzcSHKq99BWmmKnrh6VA5nzSVEsUusVXFPvNii4LYnKDqu8xJpxueWL3yrc",
  "key3": "4tRqSXTrZrJmgZnpoEKZcSvMW3iT2tSzd4JSsTY6bwVLZn6ULQPVhsBEB3AwXJDSfvL4Bd8RSWmp8xyHERyQwvbW",
  "key4": "5Xjg6f2MbwkpZkoDKy26jzQLzdn46QPuLsif7pfEwKSRu5Hxbsf3xyCq86MCPLboMANrfmzLwMa3VRfnhW1HrUbD",
  "key5": "39v9CHkAFc6SYN3MQzzdvwMbJCctNxwpnAqBjTGNz3SqqyJ79FAouCek9cBq9ApzFYFRBJdp9P3hHs3pNUm8hHny",
  "key6": "faYj8BZFSa1TjowXFjhdDKebAqWLd2RPTNVPKR7r3Wn6Bt9m8kQjphUaZCFdSv4g63fFB5zMneWwPGNTZnRtWKh",
  "key7": "4joi8XWaFS1gSd729NfsvkFFGNQTUppZ2fPRoMQMD8ry4K2wb6PBezAX4zJom1hsdum9ZPpsn8xuxU7hfbwpbdZY",
  "key8": "3ZgPYE5NdSkfTNaut23bTbLsFtjwK6hgDukTgYkXLpijLcZ66HizcHX2x5LvkLK982mA9dUEYwi2i8HXpkVck2ky",
  "key9": "3Tz9A79HymWzcHERXK27d5pw22JEQJkYz574ywLS4EJTBb8Ww8ay1t57aG5UqddYYjZRqLKJp4CwLvHCWYpYemY3",
  "key10": "3Q8q1HRVeY6havC1wm5wwmK19N7LrCjsqc8EvYQRUnkyLSe24m1h5V5XakJdw9unnYM4uo348VjZefiPpeUfzbw",
  "key11": "3nkzpcAC3btEDqZ3vrsStwbFVepTnat87CTFmJoedi1ckG9AREhvGgttuGQfJfp8niwzcmGvwEySkx2ZDDuAyAnL",
  "key12": "3cQ3TZq9HjZhr993U7NKeghxUmEsLQi5BgHAHBtqN41frSAFNu6D79gdaNphhRiPFPoSVG3Bj3rRoSobiteqTm22",
  "key13": "2X2ZwqL2KXBG3sbGoZh1fX9W6qBRKDhhHL9Ut4VnJtvorxsUNc19jKhhYNPSh1vtLcEvHYbNEF95vZahDEkzCUNB",
  "key14": "p94fjnA4WScoz7kg3JPZfy83YqCd737QE6YCka6tRBHj8gyLxWiuCLPX8yPBBA1sgcuS3Ztvm9qR6ScrD3iJ6GV",
  "key15": "5jftVLgQZiXCpuvDcsRSvhioFPQC1dNRShY3YeVdCJuEbWF6AsAhiPju8mRvPeU5GSob8vA23QDShJ9Y16DLxhrK",
  "key16": "4swhXi35kETWpZwSMwoamDZdNg2bXyThUqqn2Y33izkUJJxZxyr3C9WiswP8bni81LpkRNGkJVcQaMsrJDjJWbzU",
  "key17": "31frUFSMVNmK8PRpyjo7wCE4VqtJJuNaAA81dpPBPYMRLy3YaSqki29YHobXUmBXsDSD9RtbJ5LvEh7NAroZ1Apg",
  "key18": "3URAHm3Qx6BpEY3WWhH7SA2SrP9mJ77gCWEawDy9Ghb8C4yv6kNWv7cwm6LDRgjopTzHFms89wbgRksvgUybWqoE",
  "key19": "5Ya8W1xAcTBpAysHhnhNo91UZ6LvQMEZiwfPSQW3cgZz739aMjdmXHqYYZVnixdGGt7pws1CWNtsynuSjTRqLfXC",
  "key20": "4JgiXME9XDX8kCNfmD5WGA2bYpYQk4Pr3hoVTsEELYmsmvsmfjiNpr2JwWS8iNVBXD3uufEKKPNrTcxXpELsRhwq",
  "key21": "4Lybqmkx1iUUj3s2Wz424khVgificeo4Gd7u7V2zZKpmCBK8nnoXYhtQDKB4K9P2e73Di6icCAKkb9LrGX54jgnq",
  "key22": "2S4pGrnbVi8SRFZRFez5fafDrExTSzbCQGXmVzjnTLRKUZ3b2WnmUfJPPHuRu5cNzBnZ78ogaLd6PJ2JBQ6TbLvi",
  "key23": "4VKkZgqorP8MTS9oTYBSP4bXgC1NVYvFxhoZ9yWMAqoHeyHno5yMWxBAxeEyCHZdQahz1A1JLkwH8rMJnCH9yHb4",
  "key24": "boAatXLNMXdfrND5w4eo2ixkRtTfTVccTiJtohsjoDaoSR1uqvgdvTmxaJP4iovh58N9mtv2JaKHfNz43L98LuH",
  "key25": "5GZhteQbXt6sJgsj62Qez3c8WRkcHfpKqf1P9WfxpXu41N9vCday9h9PdeZamn54ZMzQHfDVXrw2SiVpod2K32KQ",
  "key26": "49q9NDippG3rRHX3TS2HkKjeJRAScU5wM5vFgvxfuNZaMQmHrgepdvECSVBR7dK1Lc1nE5nU9o5dcLT1ZGFfn89c",
  "key27": "uKV8k7gV6vamhbiFrVzy6JkJSLkQDcaKtCzGbXThWR1Zmy9CoN6XF6Rjy9xpiMntNdqpx17NiQQDAUGwBNGHqjx",
  "key28": "41xjPZ51XadQocmHdeQgwnSD1eZiCxVTeSrEMVUEZLytQwHnWMYzu1kwMr8BzpjhbTP8HUCkTLWUZ5B61XksTLTU",
  "key29": "2DbVbHZiNwhzEaRxTkQUEVxuoXYGcFvoGv5i3gTka38rFprb2QR1VNahhqWmRTQRhFHdubCYk8sT1AJHbVYNsw5r",
  "key30": "47rEZBJmMzAGGdjhHfLwvuqu9oPZtAobDBhRjiKssjpJzcJFaxH1LukGw9tHKScH4Jnbtx9YcqdqGkKeukTkuKfg",
  "key31": "4Npmp51SULiVDs7nWGBxEhZPyNSgDVR2fDa3BTpg9B1CKXbC71WkR2ASAmekgA3oWW9bgHHT8xykiw1A7E1fQSxS",
  "key32": "5qHqvvFQzq139An7MjBGE9E9hSK263yNUvaVjeS8mE8CPbnfhfFhkLEGk8PBVY4T8TpbndsnuQBmbtZDBbEUx8Li",
  "key33": "4FgbHxq5HPvpCBzDhodUkeqTHmYWG14EajF2FejzcJPa7sWFHaCRocfRU1sFriwAscwTPhQ3dnmbT1nSko5CCcDN",
  "key34": "YdLnRFkLroqZ92Z2mP2yRSQCcZgXzHAHD39GfedmwnV56kTNUYys5fES8P3jAgeNqovmQwPMPzWjRpeUVs6zACy",
  "key35": "U48gxDnAQz7eAmQPkxMEyLKEDDxMQa9YS7gkHQgARtPmXM8rnvrbvCDiAgpan2r6KHaMbYAJHP7kjhZCcLrgVXR",
  "key36": "2RnECVQg4UupRTaHNi5xUNvYdnutZfJmEgcxhjWBw1PziC5NRxVkpQGWJ52kQ5HMYwAv6YzVoWHazG9miqoxxtjt",
  "key37": "4PuoXnp66iKNV7tirj7tY2dMU4ZBGWfL52F6mmXArWJnDafiEfyn9VVQtiDnt3XrsrjNzMbqwsx73eSroNSqawDS",
  "key38": "5JQzWFrjJ86aCk58pADsfvsdXpUkxDGiyTjW3kfzxw4KFoejEYuqD9oemPHzXyYG3CZ6Ho6FDtEXuYjsFr1fdMDo",
  "key39": "3yRMti1GyhjbitsTc8Umw3JPnrHaPTkL2MUysmfQgfu3wejbQKG1BLqz6ponJqzTsHzE24dx1N9YfwVyrTchQxPh",
  "key40": "4CFCN2Qqov1LJjJ9dn8HLtskyS9KKfUUxsntxtngLZdEz3A6amud5LywHBg7RDte6vits97JP8PWStfTJD9TPsoF",
  "key41": "4y8JgdpRsFRxxuA9PeACHKYxdkmRG9qk8A6sALmFZWt8Z88um3Su9r16E2nxzrJ46D2Ysigsq1WcZ26Gf1EdZZee",
  "key42": "3wZvcvvLpgJXwgtsz7vmfwtse6HSsurmh3HwW3767BdEWrZhfF7JDAuDGipvhTJPMNrGcFTvrJU35ctTLLVSprQL",
  "key43": "2Du5nNJ61vthYNCP8BuBpNrpNDVRoQH7GqME2hzWkM4RYu9d8rA9EyjcsjYgBk3miJfdDz8XfWH3YjhhqzGKscT6",
  "key44": "5RX1rxgJuXn5S1Me2CyopthQQXaKE8H5L1hgzt4y1x637u4XhPPCPvvLJJpM4nDK8EHeNXyLm3PaYK33yu53zd3r",
  "key45": "5pds7gCJAUtELGGMQMZDw8g6k3kSGNRWwYLGJsjzoW2cQKLGpa29UpTMerYtZjdfC4ks1VBCGXBMUpiMG8QfwfyU"
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
